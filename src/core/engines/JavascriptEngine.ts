import type { LanguageEngine } from '../LanguageEngine';
import { TraceRecorder } from '../TraceRecorder';
import type { Trace } from '../types';

export class JavascriptEngine implements LanguageEngine {
    language = 'javascript';

    async execute(code: string, input: (number | string)[]): Promise<Trace> {
        const recorder = new TraceRecorder();
        
        // Create a Proxy around the array to trap operations
        const proxiedArray = new Proxy([...input], {
            get(target, prop, receiver) {
                const index = Number(prop);
                // If accessing an index (not length or method)
                if (!isNaN(index)) {
                     // We don't have a perfect way to know IF it's a comparison or just a read for swap.
                     // But usually reads are for comparison.
                     // A pure swap is read A, read B, write B, write A.
                     // We can try to infer, or just record 'access'.
                     // For now, let's record it as a 'compare' if it's being read? 
                     // No, that's too aggressive.
                     
                     // BETTER APPROACH for v1:
                     // Just let the user write code. The visualizer needs explicit steps?
                     // If we want AUTOMATIC visualization, we must infer.
                     // Reading arr[i] and arr[j] often precedes a compare.
                     
                     // Let's rely on a helper provided to the user context OR simple inference.
                     // Simple inference: 
                     // get(i) -> merely highlight?
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                const index = Number(prop);
                if (!isNaN(index)) {
                    recorder.set(index, value);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });

        // We need a more sophisticated Proxy to handle 'swap' detection or we simply expose a 'swap' function.
        // To strictly follow "User writes native code", they would write:
        // let temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        // This results in: read i, read j, set i, set j.
        // Our TraceManager treats 'set' as an overwrite. This works visually!
        // It might not look like a simultaneous swap, but it is accurate.
        
        // However, for comparisons, we need to know when they happen.
        // Native JS doesn't trigger a trap for 'greater than' operator.
        // We can only trap the READ of the values.
        
        // Option A: Expose a hidden 'compare(i, j)' helper the user SHOULD use? (Breaks "native" feel)
        // Option B: User uses `arr.compare(i, j)`? 
        // Option C: We just highlight on read. 
        // Let's go with Option C for "Pure JS" feel.
        // Reads will highlight the bar briefly.
        
        const context = {
            input: proxiedArray,
            // Expose a helper for explicit swaps if they want smooth animation
            swap: (i: number, j: number) => {
                recorder.swap(i, j, proxiedArray[i], proxiedArray[j]);
                const temp = proxiedArray[i];
                proxiedArray[i] = proxiedArray[j];
                proxiedArray[j] = temp;
            },
            // Helper for explicit comparison highlight
            compare: (i: number, j: number) => {
                recorder.compare(i, j);
                const a = proxiedArray[i];
                const b = proxiedArray[j];
                if (typeof a === 'number' && typeof b === 'number') {
                    return a - b;
                }
                // String comparison
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            },
            
            // Graph/Tree Ops
            addNode: (id: string, value: any, x?: number, y?: number, color?: string) => recorder.addNode(id, value, x, y, color),
            addEdge: (source: string, target: string, id?: string) => recorder.addEdge(source, target, id || `${source}-${target}`),
            removeEdge: (id: string) => recorder.removeEdge(id),
            highlightNode: (id: string) => recorder.highlightNode(id),

            log: console.log
        };

        // Wrap execution
        try {
            // Function(params, body)
            // We pass keys of context as params
            const keys = Object.keys(context);
            const values = Object.values(context);
            
            // Use AsyncFunction to allow 'await' in the body
            const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
            const func = new AsyncFunction(...keys, code);
            
            // Await the execution to ensure we capture all steps
            await func(...values);
        } catch (err) {
            console.error("User code execution failed", err);
            // Optionally record an error step
        }

        return recorder.getTrace();
    }
}
