/**
 * CLI Helper Functions
 */
import { NotebookLMClient } from '../client.ts';
/**
 * Gets a configured client, handling auth errors gracefully.
 */
export declare function getClient(storagePath?: string): Promise<NotebookLMClient>;
/**
 * Formats a date for display.
 */
export declare function formatDate(date: Date): string;
/**
 * Formats a duration in milliseconds.
 */
export declare function formatDuration(ms: number): string;
/**
 * Truncates a string to a maximum length.
 */
export declare function truncate(str: string, maxLen: number): string;
/**
 * Prints a success message.
 */
export declare function success(message: string): void;
/**
 * Prints an error message.
 */
export declare function error(message: string): void;
/**
 * Prints an info message.
 */
export declare function info(message: string): void;
/**
 * Prints a warning message.
 */
export declare function warn(message: string): void;
/**
 * Creates a simple table from data.
 */
export declare function table(headers: string[], rows: string[][], columnWidths?: number[]): void;
/**
 * Spinner for long operations.
 */
export declare class Spinner {
    private interval;
    private frames;
    private frameIndex;
    private message;
    constructor(message: string);
    start(): void;
    stop(finalMessage?: string): void;
    succeed(message?: string): void;
    fail(message?: string): void;
}
//# sourceMappingURL=helpers.d.ts.map