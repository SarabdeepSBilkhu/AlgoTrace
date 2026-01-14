import React from 'react';
import './Controls.css';

interface Props {
    isPlaying: boolean;
    onPlayPause: () => void;
    onReset: () => void;
    stepIndex: number;
    maxSteps: number;
    onSeek: (value: number) => void;
    speed: number;
    onSpeedChange: (val: number) => void;
}

export const Controls: React.FC<Props> = ({ 
    isPlaying, onPlayPause, onReset, stepIndex, maxSteps, onSeek, speed, onSpeedChange 
}) => {
    return (
        <div className="controls-container">
            {/* Playback Buttons */}
            <div className="control-group">
                <button 
                    className="icon-btn" 
                    onClick={onReset}
                    title="Reset"
                >
                    ⏹
                </button>
                <button 
                    className="icon-btn" 
                    onClick={onPlayPause}
                    title={isPlaying ? "Pause" : "Play"}
                    style={{ background: isPlaying ? '#444' : '#10b981', borderColor: isPlaying ? '#444' : '#10b981' }}
                >
                    {isPlaying ? '⏸' : '▶'}
                </button>
            </div>

            {/* Step Counter & Scrubber */}
            <div className="control-group" style={{ flex: 1 }}>
                <input 
                    type="range" 
                    min="0" 
                    max={maxSteps} 
                    value={stepIndex} 
                    onChange={(e) => onSeek(Number(e.target.value))}
                    disabled={isPlaying}
                    className="scrubber"
                    style={{ width: '100%' }}
                />
                <span style={{ minWidth: '80px', textAlign: 'right', fontFamily: 'monospace', fontSize: '0.9em', color: '#ccc' }}>
                    {stepIndex} / {maxSteps}
                </span>
            </div>

            {/* Speed Control */}
            <div className="slider-container" style={{ width: 'auto' }}>
                <span>🐢</span>
                <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={speed} 
                    onChange={(e) => onSpeedChange(Number(e.target.value))}
                    style={{ width: '80px' }}
                />
                <span>🐇</span>
            </div>
        </div>
    );
};
