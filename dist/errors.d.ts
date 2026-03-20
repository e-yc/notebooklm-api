/**
 * Error Classes for NotebookLM Client
 */
export { RPCError, AuthError } from './rpc/decoder.ts';
/**
 * Base error class for source-related errors
 */
export declare class SourceError extends Error {
    readonly sourceId?: string | undefined;
    readonly notebookId?: string | undefined;
    constructor(message: string, sourceId?: string | undefined, notebookId?: string | undefined);
}
/**
 * Error thrown when source processing fails
 */
export declare class SourceProcessingError extends SourceError {
    readonly errorCode?: number | undefined;
    constructor(message: string, sourceId?: string, notebookId?: string, errorCode?: number | undefined);
}
/**
 * Error thrown when waiting for source processing times out
 */
export declare class SourceTimeoutError extends SourceError {
    readonly elapsedMs?: number | undefined;
    constructor(message: string, sourceId?: string, notebookId?: string, elapsedMs?: number | undefined);
}
/**
 * Error thrown when a source is not found
 */
export declare class SourceNotFoundError extends SourceError {
    constructor(sourceId: string, notebookId?: string);
}
/**
 * Error thrown when a notebook is not found
 */
export declare class NotebookNotFoundError extends Error {
    readonly notebookId: string;
    constructor(notebookId: string);
}
/**
 * Error thrown when artifact generation fails
 */
export declare class GenerationError extends Error {
    readonly artifactId?: string | undefined;
    readonly contentType?: string | undefined;
    constructor(message: string, artifactId?: string | undefined, contentType?: string | undefined);
}
/**
 * Error thrown when artifact generation times out
 */
export declare class GenerationTimeoutError extends GenerationError {
    readonly elapsedMs?: number | undefined;
    constructor(message: string, artifactId?: string, contentType?: string, elapsedMs?: number | undefined);
}
/**
 * Error thrown when research operations fail
 */
export declare class ResearchError extends Error {
    readonly taskId?: string | undefined;
    constructor(message: string, taskId?: string | undefined);
}
/**
 * Error thrown for invalid configuration
 */
export declare class ConfigurationError extends Error {
    constructor(message: string);
}
//# sourceMappingURL=errors.d.ts.map