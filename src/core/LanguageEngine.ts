import type { Trace } from './types';

export interface LanguageEngine {
    language: string;
    execute(code: string, input: (number | string)[]): Promise<Trace>;
}
