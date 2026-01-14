import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'javascript' | 'python' | 'java' | 'cpp';

interface Props {
    language: Language | '';
    onLanguageChange: (language: Language) => void;
    disabled?: boolean;
}

const languageLabels: Record<Language, string> = {
    javascript: 'JavaScript',
    python: 'Python',
    java: 'Java',
    cpp: 'C++'
};

export const LanguageSelector: React.FC<Props> = ({ language, onLanguageChange, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
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

    const handleSelect = (lang: Language) => {
        onLanguageChange(lang);
        setIsOpen(false);
    };

    return (
        <div ref={containerRef} style={{ position: 'relative', zIndex: 40 }}>
            <motion.button
                whileHover={{ scale: disabled ? 1 : 1.02, backgroundColor: disabled ? '#333' : '#444' }}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: '#333',
                    color: language ? '#fff' : '#888',
                    border: '1px solid #555',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    minWidth: '150px',
                    opacity: disabled ? 0.6 : 1
                }}
            >
                <span>🌐</span>
                <span style={{ flex: 1, textAlign: 'left' }}>
                    {language ? languageLabels[language] : 'Select language'}
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>▾</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && !disabled && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        style={{
                            position: 'absolute',
                            top: '120%',
                            left: 0,
                            background: '#1a1a1a',
                            border: '1px solid #444',
                            borderRadius: '8px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            padding: '12px',
                            minWidth: '150px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px'
                        }}
                    >
                        {(Object.keys(languageLabels) as Language[]).map((lang) => (
                            <motion.div
                                key={lang}
                                onClick={() => handleSelect(lang)}
                                whileHover={{ x: 4, color: '#3b82f6' }}
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    color: language === lang ? '#3b82f6' : '#ccc',
                                    padding: '6px 8px',
                                    transition: 'color 0.2s',
                                    fontWeight: language === lang ? 600 : 400,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    borderRadius: '4px'
                                }}
                            >
                                {language === lang && <span style={{ fontSize: '0.7rem' }}>●</span>}
                                {languageLabels[lang]}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
