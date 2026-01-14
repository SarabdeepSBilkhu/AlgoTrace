import React from 'react';
import type { VisualState } from '../core/types';
import { motion, AnimatePresence } from 'framer-motion';
import './ArrayRenderer.css';

interface Props {
  state: VisualState;
}

export const ArrayRenderer: React.FC<Props> = ({ state }) => {
  const { array, highlightedIndices, sortedIndices, itemIds } = state;
  
  // Helper to get numeric value for height
  const getVal = (v: number | string): number => {
      if (typeof v === 'number') return v;
      if (typeof v === 'string' && v.length > 0) return v.charCodeAt(0);
      return 0;
  };

  // Calculate max for normalization
  const vals = array.map(getVal);
  const maxValue = Math.max(...vals, 1);

  return (
    <div className="array-container">
        <AnimatePresence>
          {array.map((val, idx) => {
            const isHighlighted = highlightedIndices.includes(idx);
            const isSorted = sortedIndices.includes(idx);
            
            // Use stable ID if available, otherwise fallback to index (no animation)
            const key = itemIds ? itemIds[idx] : idx;

            let className = 'array-bar';
            if (isSorted) className += ' sorted';
            else if (isHighlighted) className += ' highlighted';

            const height = `${(getVal(val) / maxValue) * 100}%`;

            return (
                <motion.div 
                    layout // This enables the magic FLIP animation for position changes
                    key={key} 
                    style={{ height }} 
                    className={className}
                    title={`Index: ${idx}, Value: ${val}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        backgroundColor: isHighlighted ? '#facc15' : (isSorted ? '#10b981' : '#646cff'),
                        boxShadow: isHighlighted ? '0 0 10px #facc15' : 'none'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                />
            );
          })}
        </AnimatePresence>
    </div>
  );
};
