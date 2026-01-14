import React from 'react';
import type { VisualState } from '../core/types';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  state: VisualState;
}

export const GraphRenderer: React.FC<Props> = ({ state }) => {
  const { graph, highlightedIndices, sortedIndices } = state;

  // 1. Check for Manual Layout
  const hasManualLayout = graph.nodes.some(n => n.x !== undefined && n.x !== 0);

  const safe = (val: number | undefined | null) => (typeof val === 'number' && !isNaN(val)) ? val : 0;


  // 2. Build Adjacency List & Find Roots
  const layout = new Map<string, { x: number, y: number }>();
  let rank = 0;

  if (!hasManualLayout) {
      const adj = new Map<string, string[]>();
      const incoming = new Set<string>();
      
      graph.edges.forEach(e => {
        if (!adj.has(e.source)) adj.set(e.source, []);
        adj.get(e.source)!.push(e.target);
        incoming.add(e.target);
      });

      // Sort children by value (BST property)
      adj.forEach((children, parentId) => {
        const pNode = graph.nodes.find(n => n.id === parentId);
        if (!pNode) return;
        
        children.sort((aId, bId) => {
          const a = graph.nodes.find(n => n.id === aId);
          const b = graph.nodes.find(n => n.id === bId);
          if (!a || !b) return 0;
          return a.value < b.value ? -1 : 1;
        });
      });

      const roots = graph.nodes.filter(n => !incoming.has(n.id));
      
      // Compute Layout (Inorder for X, Depth for Y)
      const traverse = (nodeId: string, depth: number) => {
        const children = adj.get(nodeId) || [];
        const node = graph.nodes.find(n => n.id === nodeId);
        if (!node) return;

        // BST: Left child is smaller
        const left = children.filter(cId => {
           const c = graph.nodes.find(n => n.id === cId);
           return c && c.value < node.value;
        });
        // BST: Right child is larger/equal
        const right = children.filter(cId => {
            const c = graph.nodes.find(n => n.id === cId);
            return c && c.value >= node.value;
        });

        left.forEach(c => traverse(c, depth + 1));
        
        layout.set(nodeId, {
            x: rank++ * 50,
            y: 50 + depth * 60
        });

        right.forEach(c => traverse(c, depth + 1));
      };

      roots.forEach(r => traverse(r.id, 0));
  }

  // Center the graph only if using auto-layout
  const totalWidth = rank * 50;
  const xOffset = layout.size > 0 ? (800 - totalWidth) / 2 : 0;

  return (
    <div style={{ 
        width: '100%', 
        height: '100%', 
        background: 'transparent', 
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <svg width="100%" height="100%" viewBox="0 0 800 600" style={{ overflow: 'visible' }}>
        <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <AnimatePresence>
            {/* Edges Layer */}
            {graph.edges.map((edge) => {
                const source = graph.nodes.find(n => n.id === edge.source);
                const target = graph.nodes.find(n => n.id === edge.target);
                const sPos = layout.get(edge.source) || { x: source?.x || 0, y: source?.y || 0 };
                const tPos = layout.get(edge.target) || { x: target?.x || 0, y: target?.y || 0 };

                // Safety check: ensure both nodes exist before rendering edge
                if (!source || !target) {
                    console.warn(`[GraphRenderer] Skipping invalid edge ${edge.source} -> ${edge.target}`);
                    return null;
                }

                return (
                    <motion.line
                        key={edge.id}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                            pathLength: 1, 
                            opacity: 1,
                            x1: safe(sPos.x + xOffset),
                            y1: safe(sPos.y),
                            x2: safe(tPos.x + xOffset),
                            y2: safe(tPos.y)
                        }}
                        exit={{ opacity: 0 }}
                        stroke="#666"
                        strokeWidth="2"
                    />
                );
            })}

            {/* Nodes Layer */}
            {graph.nodes.map((node) => {
                const isHighlighted = highlightedIndices.some(idx => String(idx) === String(node.id));
                // Check if node ID (if numeric or convertible) matches sorted indices
                // Sorted indices are numbers. If node.id is "n1", it won't match.
                // Tree algorithms don't emit mark-sorted steps usually? 
                // Heap Sort DOES (it uses array indices).
                const isSorted = sortedIndices.includes(Number(node.id)); 

                // Use computed layout or fallback to node.x/y if manual
                const pos = layout.get(node.id) || { x: node.x || 0, y: node.y || 0 };
                
                return (
                    <motion.g
                        key={node.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                            scale: 1, 
                            opacity: 1,
                            x: safe(pos.x + xOffset),
                            y: safe(pos.y) 
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                        {/* Outer Glow for highlight or sorted? Array only glows on highlight. */}
                        <motion.circle
                            r="20"
                            animate={{
                                stroke: isHighlighted ? '#f59e0b' : (isSorted ? '#10b981' : (node.color || '#6366f1')),
                                strokeWidth: isHighlighted ? 3 : 2,
                                fill: isHighlighted ? '#333' : '#1e1e1e'
                            }}
                            style={{ filter: isHighlighted ? 'url(#glow)' : 'none' }}
                        />
                        <text
                            textAnchor="middle"
                            dy=".3em"
                            fill="#fff"
                            fontWeight="bold"
                            fontSize="12"
                            style={{ pointerEvents: 'none', userSelect: 'none' }}
                        >
                            {String(node.value)}
                        </text>
                    </motion.g>
                );
            })}
        </AnimatePresence>
      </svg>
      
      {graph.nodes.length === 0 && (
          <div style={{ position: 'absolute', color: '#555' }}>
              Press the play button to start the algorithm
          </div>
      )}
    </div>
  );
};
