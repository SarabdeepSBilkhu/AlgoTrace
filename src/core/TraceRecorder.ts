import type { Trace } from './types';

export class TraceRecorder {
    private steps: Trace = [];
    private stepCount: number = 0;

    getTrace(): Trace {
        return [...this.steps];
    }

    private createTimestamp(): number {
        return this.stepCount++;
    }

    compare(i: number, j: number) {
        this.steps.push({ 
            type: 'compare', 
            indices: [i, j], 
            timestamp: this.createTimestamp() 
        });
    }

    swap(i: number, j: number, valI: any, valJ: any) {
        this.steps.push({ 
            type: 'swap', 
            indices: [i, j], 
            values: [valI, valJ], 
            timestamp: this.createTimestamp() 
        });
    }

    set(i: number, value: any) {
        this.steps.push({ 
            type: 'set', 
            index: i, 
            value: value, 
            timestamp: this.createTimestamp() 
        });
    }

    markSorted(i: number) {
        this.steps.push({ 
            type: 'mark-sorted', 
            index: i, 
            timestamp: this.createTimestamp() 
        });
    }

    setVar(name: string, value: any) {
        this.steps.push({ 
            type: 'variable-update', 
            name, 
            value, 
            timestamp: this.createTimestamp() 
        });
    }

    highlight(lineNumber: number) {
        this.steps.push({ 
            type: 'highlight-line', 
            lineNumber, 
            timestamp: this.createTimestamp() 
        });
    }

    // Graph Ops
    addNode(id: string, value: any, x?: number, y?: number, color?: string) {
        this.steps.push({ 
            type: 'add-node', 
            id, 
            value, 
            x, 
            y, 
            color,
            timestamp: this.createTimestamp() 
        });
    }

    addEdge(source: string, target: string, id: string) {
        this.steps.push({ 
            type: 'add-edge', 
            id, 
            source, 
            target, 
            timestamp: this.createTimestamp() 
        });
    }

    removeEdge(id: string) {
        this.steps.push({
            type: 'remove-edge',
            id,
            timestamp: this.createTimestamp()
        });
    }
    
    highlightNode(id: string) {
        this.steps.push({ 
            type: 'highlight-node', 
            id, 
            timestamp: this.createTimestamp() 
        });
    }
}
