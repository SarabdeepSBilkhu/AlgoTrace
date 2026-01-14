import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Preset {
    code: string | {
        javascript: string;
        python: string;
        java: string;
        cpp: string;
    };
    mode: 'array' | 'graph';
}

interface Props {
    presets: Record<string, Preset>;
    onSelect: (name: string, preset: Preset, mode: 'array' | 'graph') => void;
}

export const AlgorithmSelector: React.FC<Props> = ({ presets, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAlgo, setSelectedAlgo] = useState<string>('');
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const arrayAlgos = Object.entries(presets).filter(([, p]) => p.mode === 'array');
    const graphAlgos = Object.entries(presets).filter(([, p]) => p.mode === 'graph');

    const handleSelect = (name: string, preset: Preset) => {
        setSelectedAlgo(name);
        onSelect(name, preset, preset.mode);
        setIsOpen(false);
    };

    return (
        <div ref={containerRef} style={{ position: 'relative', zIndex: 50 }}>
            <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#444' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: '#333',
                    color: selectedAlgo ? '#fff' : '#888',
                    border: '1px solid #555',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    minWidth: '200px'
                }}
            >
                <span>📚</span>
                <span style={{ flex: 1, textAlign: 'left' }}>
                    {selectedAlgo || 'Select an algorithm'}
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>▾</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        style={{
                            position: 'absolute',
                            top: '120%',
                            left: 0,
                            background: 'rgba(24, 24, 27, 0.95)', /* Opaque enough for text */
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                            padding: '16px',
                            minWidth: '500px',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '20px',
                            zIndex: 100
                        }}
                    >
                        {/* Array Algorithms Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ 
                                fontSize: '0.8rem', 
                                textTransform: 'uppercase', 
                                letterSpacing: '1px', 
                                color: '#666', 
                                marginBottom: '4px',
                                borderBottom: '1px solid #333',
                                paddingBottom: '4px'
                            }}>
                                Sorting (Array)
                            </div>
                            {arrayAlgos.map(([name, preset]) => (
                                <Item 
                                    key={name} 
                                    name={name}
                                    isSelected={selectedAlgo === name}
                                    onClick={() => handleSelect(name, preset)} 
                                />
                            ))}
                        </div>

                        {/* Graph Algorithms Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ 
                                fontSize: '0.8rem', 
                                textTransform: 'uppercase', 
                                letterSpacing: '1px', 
                                color: '#666', 
                                marginBottom: '4px',
                                borderBottom: '1px solid #333',
                                paddingBottom: '4px'
                            }}>
                                Trees & Graphs
                            </div>
                            {graphAlgos.map(([name, preset]) => (
                                <Item 
                                    key={name} 
                                    name={name}
                                    isSelected={selectedAlgo === name}
                                    onClick={() => handleSelect(name, preset)} 
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Item = ({ name, isSelected, onClick }: { name: string, isSelected: boolean, onClick: () => void }) => (
    <motion.div
        onClick={onClick}
        whileHover={{ x: 4, color: '#3b82f6' }}
        style={{
            cursor: 'pointer',
            fontSize: '0.9rem',
            color: isSelected ? '#3b82f6' : '#ccc',
            padding: '4px 0',
            transition: 'color 0.2s',
            fontWeight: isSelected ? 600 : 400,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
        }}
    >
        {isSelected && <span style={{ fontSize: '0.7rem' }}>●</span>}
        {name}
    </motion.div>
);
