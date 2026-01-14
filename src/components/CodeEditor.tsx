import React, { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { motion } from 'framer-motion';
import type { editor } from 'monaco-editor';
import { LanguageSelector } from './LanguageSelector';

type Language = 'javascript' | 'python' | 'java' | 'cpp';

interface Props {
    code: string;
    onCodeChange: (code: string) => void;
    onRun: () => void;
    activeLine?: number;
    isPlaying?: boolean;
    language?: Language | '';
    onLanguageChange?: (language: Language | '') => void;
}

export const CodeEditor: React.FC<Props> = ({ 
    code, 
    onCodeChange, 
    onRun, 
    activeLine, 
    isPlaying,
    language = 'javascript',
    onLanguageChange,
}) => {
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const decorationsCollectionRef = useRef<editor.IEditorDecorationsCollection | null>(null);

    const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;
        decorationsCollectionRef.current = editor.createDecorationsCollection();
    };

    // Update line highlighting when activeLine changes
    useEffect(() => {
        if (!editorRef.current || !decorationsCollectionRef.current) return;

        const editor = editorRef.current;
        const decorationsCollection = decorationsCollectionRef.current;
        
        // Clear previous decorations
        decorationsCollection.clear();

        // Add new decoration if activeLine is set
        if (activeLine !== undefined && activeLine > 0) {
            decorationsCollection.set([
                {
                    range: {
                        startLineNumber: activeLine,
                        startColumn: 1,
                        endLineNumber: activeLine,
                        endColumn: 1
                    },
                    options: {
                        isWholeLine: true,
                        className: 'active-line-highlight',
                        glyphMarginClassName: 'active-line-glyph'
                    }
                }
            ]);

            // Scroll to the active line
            editor.revealLineInCenter(activeLine);
        }
    }, [activeLine]);


    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', height: '100%', padding: '20px', boxSizing: 'border-box' }}>
            <style>{`
                .active-line-highlight {
                    background-color: rgba(255, 193, 7, 0.15) !important;
                    border-left: 3px solid #ffc107 !important;
                }
                .active-line-glyph {
                    background-color: #ffc107 !important;
                    width: 5px !important;
                }
            `}</style>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, color: '#ccc' }}>Code Editor</span>
                    {isPlaying && (
                        <span style={{ fontSize: '0.75rem', color: '#ffc107', fontWeight: 500 }}>
                            ▶ Running
                        </span>
                    )}
                    </div>
                <div>
                    {onLanguageChange && (
                        <LanguageSelector
                            language={language}
                            onLanguageChange={onLanguageChange}
                            disabled={isPlaying}
                        />
                    )}
                </div>
            </div>
            
            <div style={{ flex: 1, border: '1px solid #444', overflow: 'hidden' }}>
                <Editor
                    height="100%"
                    defaultLanguage="javascript"
                    language={language || 'javascript'}
                    theme="vs-dark"
                    value={code}
                    onChange={(value) => onCodeChange(value || '')}
                    onMount={handleEditorDidMount}
                    options={{
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 14,
                        automaticLayout: true,
                        lineNumbers: 'on',
                        roundedSelection: false,
                        scrollBeyondLastColumn: 5,
                        scrollbar: {
                            vertical: 'hidden',
                            horizontal: 'hidden',
                            handleMouseWheel: true
                        },
                        overviewRulerLanes: 0,
                        hideCursorInOverviewRuler: true,
                        readOnly: isPlaying || false,
                        cursorStyle: isPlaying ? 'line-thin' : 'line',
                    }}
                />
            </div>

            <motion.button 
                whileHover={{ scale: isPlaying ? 1 : 1.05 }}
                whileTap={{ scale: isPlaying ? 1 : 0.95 }}
                onClick={onRun}
                disabled={isPlaying}
                style={{
                    alignSelf: 'flex-end',
                    padding: '8px 16px',
                    backgroundColor: isPlaying ? '#666' : '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isPlaying ? 'not-allowed' : 'pointer',
                    fontWeight: 600,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    opacity: isPlaying ? 0.6 : 1
                }}
            >
                {isPlaying ? 'Playing...' : 'Run Code'}
            </motion.button>
        </div>
    );
};
