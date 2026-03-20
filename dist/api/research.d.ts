/**
 * Research API Module
 *
 * Handles web and Drive research functionality.
 */
import { ClientCore } from '../core.ts';
import type { ResearchTask, ResearchResult, ResearchSource } from '../types.ts';
/**
 * API client for research operations.
 */
export declare class ResearchAPI {
    private core;
    constructor(core: ClientCore);
    /**
     * Starts a research session.
     *
     * @param notebookId - The notebook ID
     * @param query - The research query
     * @param options - Research options
     * @returns Research task info
     */
    start(notebookId: string, query: string, options?: {
        source?: 'web' | 'drive';
        mode?: 'fast' | 'deep';
    }): Promise<ResearchTask>;
    /**
     * Polls for research progress and results.
     *
     * @param notebookId - The notebook ID
     * @param taskId - The task ID from start()
     * @returns Current research status and results
     */
    poll(notebookId: string, taskId: string): Promise<ResearchResult>;
    /**
     * Imports discovered sources into the notebook.
     *
     * @param notebookId - The notebook ID
     * @param sources - Sources to import (from poll results)
     * @returns Imported source IDs
     */
    importSources(notebookId: string, sources: ResearchSource[]): Promise<string[]>;
    /**
     * Runs a complete research workflow.
     *
     * Starts research, polls until complete, and optionally imports sources.
     *
     * @param notebookId - The notebook ID
     * @param query - The research query
     * @param options - Research options
     * @returns Final research results
     */
    research(notebookId: string, query: string, options?: {
        source?: 'web' | 'drive';
        mode?: 'fast' | 'deep';
        autoImport?: boolean;
        timeoutMs?: number;
        pollIntervalMs?: number;
    }): Promise<{
        result: ResearchResult;
        importedSourceIds?: string[];
    }>;
}
//# sourceMappingURL=research.d.ts.map