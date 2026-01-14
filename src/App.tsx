import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

import type { Trace } from './core/types';
import { TraceManager } from './core/TraceManager';
import { ArrayRenderer } from './visualizers/ArrayRenderer';
import { GraphRenderer } from './visualizers/GraphRenderer';
import { Controls } from './components/Controls';
import { CodeEditor } from './components/CodeEditor';
import { JavascriptEngine } from './core/engines/JavascriptEngine';
import { AlgorithmSelector } from './components/AlgorithmSelector';
import { ALGO_PRESETS } from './algorithms/algorithmLibrary';
import './App.css'; 

type Language = 'javascript' | 'python' | 'java' | 'cpp';

const INITIAL_ARRAY: (number | string)[] = [25, 10, 45, 15, 8, 30, 50, 5, 20, 35, 12, 40, 60, 2, 18];

function App() {
  const [inputArray, setInputArray] = useState(INITIAL_ARRAY);
  const [inputString, setInputString] = useState(INITIAL_ARRAY.join(', '));
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [visualMode, setVisualMode] = useState<'array' | 'graph'>('array');
  const [language, setLanguage] = useState<Language | ''>('');
  const [userCode, setUserCode] = useState(language === 'python'
    ? '# Choose your language and select an algorithm from the menu above!'
    : '// Choose your language and select an algorithm from the menu above!'
  );
  
  // Memoize trace generation based on user code
  const [traceData, setTraceData] = useState<{trace: Trace, manager: TraceManager} | null>(null);

  // Initial execution
  useEffect(() => {
      handleRunCode();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update input array when string changes (debounced or on blur? Let's do on blur/enter or just effect if careful)
  // For simplicity, let's use a "Update" button or just parsing logic on change?
  // Parsing on every change might be annoying if typing "10, " (trailing comma). 
  // Let's rely on a specific handler for the input.

  const handleArrayInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputString(e.target.value);
  };

  const parseInputArray = () => {
      try {
          // Check if contains non-numbers
          const parts = inputString.split(',').map(s => s.trim()).filter(s => s !== '');
          
          let parsed: (number | string)[] = [];
          const allNumbers = parts.every(p => !isNaN(Number(p)));

          if (allNumbers) {
               parsed = parts.map(Number);
          } else {
               // Treat all as strings
               parsed = parts;
          }
          
          if (parsed.length > 0) {
              setInputArray(parsed);
          }
      } catch (e) {
          console.error("Invalid input", e);
      }
  };

  const generateRandomArray = () => {
      const len = Math.floor(Math.random() * 10) + 10; // 10-20 items
      const arr = Array.from({length: len}, () => Math.floor(Math.random() * 100));
      setInputArray(arr);
      setInputString(arr.join(', '));
  };

  // Re-run code whenever inputArray changes? 
  // Yes, if we want immediate feedback.
  useEffect(() => {
      handleRunCode();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputArray]);

  const handleRunCode = async () => {
    // Determine which code to execute
    let codeToRun = userCode;

    // If using a non-JS language, check if we can run the underlying preset
    if (language && language !== 'javascript') {
        const preset = ALGO_PRESETS[currentAlgorithm];
        if (preset) {
            // Use the JavaScript implementation of the selected algorithm
            codeToRun = typeof preset.code === 'string' ? preset.code : preset.code.javascript;
            console.log(`[Info] Running JavaScript implementation for ${currentAlgorithm} while viewing ${language}`);
        } else {
             // No preset selected, cannot run custom Python/Java/C++
            alert(`⚠️ Execution Not Supported\n\nCustom ${language.toUpperCase()} code cannot be executed directly in the browser.\n\nPlease select an algorithm from the menu to run its visualization, or switch to JavaScript to write custom code.`);
            return;
        }
    }

    setIsPlaying(false);
    setStepIndex(0);
    
    try {
        const engine = new JavascriptEngine();
        const t = await engine.execute(codeToRun, inputArray);
        const m = new TraceManager(t, inputArray);
        setTraceData({ trace: t, manager: m });
        setIsPlaying(true); // Auto-play on run
    } catch (e) {
        console.error("Exec error", e);
        alert("Error executing algorithm: " + e);
    }
  };
  const currentState = useMemo(() => {
      if (!traceData) return null;
      const state = traceData.manager.getStateAt(stepIndex);
      
      // Clear highlights if finished
      if (stepIndex === traceData.manager.stepCount) {
          state.highlightedIndices = [];
          state.activeLine = -1;
      }
      return state;
  }, [traceData, stepIndex]);

  // Handle language change - reload current algorithm in new language
  const [currentAlgorithm, setCurrentAlgorithm] = useState<string>('');
  
  const handleLanguageChange = (newLanguage: Language | '') => {
      if (!newLanguage) return; // Don't do anything if empty
      setLanguage(newLanguage);
      
      // Reload current algorithm in new language
      const preset = ALGO_PRESETS[currentAlgorithm];
      if (preset) {
          const code = typeof preset.code === 'string' ? preset.code : preset.code[newLanguage] || preset.code.javascript;
          setUserCode(code);
      } else {
          // No algorithm selected, update default text based on language
          setUserCode(newLanguage === 'python' 
            ? '## Choose your language and select an algorithm from the menu above!'
            : '// Choose your language and select an algorithm from the menu above!'
          );
      }
  };

  // Handle algorithm selection from the menu
  const handleAlgorithmSelect = (name: string, preset: { code: string | { javascript: string; python: string; java: string; cpp: string }; mode: 'array' | 'graph' }, mode: 'array' | 'graph') => {
      setCurrentAlgorithm(name);
      
      // If no language selected yet, default to javascript
      const currentLang = language || 'javascript';
      if (!language) setLanguage('javascript');
      
      // Get code for current language
      const code = typeof preset.code === 'string' ? preset.code : preset.code[currentLang] || preset.code.javascript;
      setUserCode(code);
      setVisualMode(mode);
  };

  // Hook up controls to traceData
  const traceLength = traceData ? traceData.trace.length : 0;

  // Playback Loop
  useEffect(() => {
    let timer: number;
    if (isPlaying && stepIndex < traceLength) {
      // Speed 100 -> 10ms, Speed 1 -> 1000ms
      const interval = Math.max(10, 1000 - speed * 9.5);
      
      timer = setInterval(() => {
        setStepIndex(prev => {
          if (prev >= traceLength) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, interval);
    }
    return () => clearInterval(timer);
  }, [isPlaying, stepIndex, traceLength, speed]);

  // Auto-stop when finished
  useEffect(() => {
      if (isPlaying && stepIndex >= traceLength) {
          setIsPlaying(false);
      }
  }, [stepIndex, traceLength, isPlaying]);

  if (!traceData || !currentState) return <div>Loading...</div>;

  return (
    <div className="app-container">
      <header className="app-header">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            Advanced Algorithm Visualizer
        </motion.h1>
        <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            Deterministic Time-Travel Debugging
        </motion.p>
      </header>
      
      {/* Toolbar for Inputs */}
      <div className="app-toolbar">
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <AlgorithmSelector 
                    presets={ALGO_PRESETS}
                    onSelect={handleAlgorithmSelect}
                />
                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.9em', color: '#888' }}>Data:</span>
                    <input 
                        value={inputString}
                        onChange={handleArrayInputChange}
                        onBlur={parseInputArray}
                        onKeyDown={(e) => e.key === 'Enter' && parseInputArray()}
                        placeholder="10, 5, 8..."
                        style={{ 
                            width: '200px',
                            padding: '8px 12px', 
                            borderRadius: '6px', 
                            border: '1px solid rgba(255,255,255,0.1)', 
                            background: 'rgba(0,0,0,0.2)', 
                            color: '#eee',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.9em'
                        }}
                    />
                     <button 
                        onClick={parseInputArray}
                        style={{ padding: '8px 16px', background: 'var(--accent-primary)', border: 'none', borderRadius: '6px', cursor: 'pointer', color: 'white', fontSize: '0.9em', fontWeight: 600 }}
                    >
                        Set
                    </button>
                    <button 
                        onClick={generateRandomArray}
                        style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px', cursor: 'pointer', color: '#ccc', fontSize: '1.1em' }}
                        title="Randomize"
                    >
                        🎲
                    </button>
                </div>
          </div>
      </div>

      <main className="app-main-split">
        <motion.section 
            className="visualization-area"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
            <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
                {visualMode === 'array' ? (
                    <ArrayRenderer state={currentState} />
                ) : (
                    <GraphRenderer state={currentState} />
                )}
            </div>
            
            <Controls 
                isPlaying={isPlaying}
                onPlayPause={() => setIsPlaying(!isPlaying)}
                onReset={() => { setIsPlaying(false); setStepIndex(0); }}
                stepIndex={stepIndex}
                maxSteps={traceLength}
                onSeek={setStepIndex}
                speed={speed}
                onSpeedChange={setSpeed}
            />
        </motion.section>
        
        <motion.section 
            className="editor-area"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <CodeEditor 
                code={userCode} 
                onCodeChange={setUserCode} 
                onRun={handleRunCode}
                activeLine={currentState?.activeLine}
                isPlaying={isPlaying}
                language={language}
                onLanguageChange={handleLanguageChange}
            />
        </motion.section>
      </main>
    </div>
  );
}

export default App;
