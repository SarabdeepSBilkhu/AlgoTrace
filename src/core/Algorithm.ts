import { TraceRecorder } from './TraceRecorder';
import type { Trace } from './types';

export abstract class Algorithm {
    abstract name: string;
    
    /**
     * Executes the algorithm logic using the recorder to capture steps.
     * @param input The input data (e.g., array to sort). NB: Should be treated as read-only or cloned if modified in-place to avoid side effects on original data source, though modification through recorder is tracking changes.
     * @param recorder The trace recorder.
     */
    abstract run(input: any[], recorder: TraceRecorder): Trace;
}
