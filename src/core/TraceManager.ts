import type { Trace, VisualState, AlgorithmStep } from './types';

export class TraceManager {
    private trace: Trace;
    private initialState: (number | string)[];
    private initialIds: string[];

    constructor(trace: Trace, initialState: (number | string)[]) {
        this.trace = trace;
        this.initialState = [...initialState];
        // Generate stable IDs for initial items
        this.initialIds = initialState.map((_, i) => `item-${i}`);
    }

    get stepCount(): number {
        return this.trace.length;
    }

    /**
     * Returns the state after applying 'stepCount' steps.
     * @param stepCount Number of steps to apply. 0 = initial state.
     */
    getStateAt(stepCount: number): VisualState {
        // Start from initial
        const state: VisualState = {
            array: [...this.initialState],
            itemIds: [...this.initialIds],
            highlightedIndices: [],
            sortedIndices: [],
            variables: {},
            activeLine: -1,
            graph: { nodes: [], edges: [] }
        };

        // Replay
        const limit = Math.min(stepCount, this.trace.length);
        for (let i = 0; i < limit; i++) {
            this.applyStep(state, this.trace[i]);
        }

        return state;
    }

    private applyStep(state: VisualState, step: AlgorithmStep) {
        // Clear transient highlights from previous steps if we assume strict atomic steps
        // But often we want 'compare' to leave highlights until next move?
        // For now, each step SETS the highlights.
        
        switch (step.type) {
            case 'compare':
                state.highlightedIndices = step.indices;
                state.activeLine = -1; 
                break;
            case 'swap': {
                const [i, j] = step.indices;
                [state.array[i], state.array[j]] = [state.array[j], state.array[i]];
                
                // Swap IDs to track movement
                if (state.itemIds) {
                    [state.itemIds[i], state.itemIds[j]] = [state.itemIds[j], state.itemIds[i]];
                }

                state.highlightedIndices = [i, j]; 
                break;
            }
            case 'set':
                state.array[step.index] = step.value;
                // For set, we might generate a new ID if it's a new value, 
                // or keep old one? For now, let's keep old ID to simulate mutation 
                // or generate new one if it's a replacement.
                // Let's keep ID stable for the *slot* unless it's a swap?
                // Actually, if we overwrite, it's effectively a new item visually?
                // Let's leave ID alone for 'set' for now (mutation).
                state.highlightedIndices = [step.index];
                break;
            case 'mark-sorted':
                state.sortedIndices.push(step.index); 
                // Don't clear highlightedIndices?
                state.highlightedIndices = [];
                break;
            case 'variable-update':
                state.variables[step.name] = step.value;
                break;
            case 'highlight-line':
                state.activeLine = step.lineNumber;
                break;
            case 'highlight-node':
                state.highlightedIndices = [step.id];
                break;
            
            // Graph Ops
            case 'add-node':
                {
                    const existingNode = state.graph.nodes.find(n => n.id === step.id);
                    if (existingNode) {
                        // Update existing
                        existingNode.value = step.value;
                        if (step.x !== undefined) existingNode.x = step.x;
                        if (step.y !== undefined) existingNode.y = step.y;
                        if (step.color !== undefined) existingNode.color = step.color;
                    } else {
                        // Create new
                        state.graph.nodes.push({
                            id: step.id,
                            value: step.value,
                            x: step.x ?? 0,
                            y: step.y ?? 0,
                            color: step.color
                        });
                    }
                }
                break;
            case 'add-edge':
                {
                    const sNode = state.graph.nodes.find(n => n.id === step.source);
                    const tNode = state.graph.nodes.find(n => n.id === step.target);
                    
                    if (sNode && tNode) {
                        if (!state.graph.edges.find(e => e.id === step.id)) {
                            state.graph.edges.push({
                                id: step.id,
                                source: step.source,
                                target: step.target
                            });
                        }
                    } else {
                        // console.warn(`[TraceManager] Skipping edge ${step.source}->${step.target}, missing nodes.`);
                    }
                }
                break;
            case 'remove-edge':
                 state.graph.edges = state.graph.edges.filter(e => e.id !== step.id);
                 break;
        }
    }
}
