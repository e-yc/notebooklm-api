/**
 * Sources API Module
 *
 * Handles source document management for notebooks.
 */
import { ClientCore } from '../core.ts';
import type { Source, SourceFulltext, SourceGuide } from '../types.ts';
/**
 * API client for source operations.
 */
export declare class SourcesAPI {
    private core;
    constructor(core: ClientCore);
    /**
     * Lists all sources in a notebook.
     *
     * @param notebookId - The notebook ID
     * @returns List of sources
     */
    list(notebookId: string): Promise<Source[]>;
    /**
     * Gets details for a specific source.
     *
     * @param notebookId - The notebook ID
     * @param sourceId - The source ID
     * @returns Source details
     */
    get(notebookId: string, sourceId: string): Promise<Source>;
    /**
     * Adds a URL source to a notebook.
     * Automatically detects YouTube URLs.
     *
     * @param notebookId - The notebook ID
     * @param url - The URL to add
     * @returns The created source
     */
    addUrl(notebookId: string, url: string): Promise<Source>;
    /**
     * Adds copied text as a source.
     *
     * @param notebookId - The notebook ID
     * @param title - Title for the text source
     * @param content - The text content
     * @returns The created source
     */
    addText(notebookId: string, title: string, content: string): Promise<Source>;
    /**
     * Uploads a file as a source.
     *
     * @param notebookId - The notebook ID
     * @param filename - The filename
     * @param content - File content as bytes
     * @param contentType - MIME type of the file
     * @returns The created source
     */
    addFile(notebookId: string, filename: string, content: Uint8Array, contentType: string): Promise<Source>;
    /**
     * Adds a Google Drive document as a source.
     *
     * @param notebookId - The notebook ID
     * @param driveId - The Drive document ID
     * @returns The created source
     */
    addDrive(notebookId: string, driveId: string): Promise<Source>;
    /**
     * Deletes a source from a notebook.
     *
     * @param notebookId - The notebook ID
     * @param sourceId - The source ID to delete
     */
    delete(notebookId: string, sourceId: string): Promise<void>;
    /**
     * Renames a source.
     *
     * @param notebookId - The notebook ID
     * @param sourceId - The source ID
     * @param newTitle - The new title
     */
    rename(notebookId: string, sourceId: string, newTitle: string): Promise<void>;
    /**
     * Refreshes content for a URL or Drive source.
     *
     * @param notebookId - The notebook ID
     * @param sourceId - The source ID
     */
    refresh(notebookId: string, sourceId: string): Promise<void>;
    /**
     * Waits for a source to finish processing.
     *
     * @param notebookId - The notebook ID
     * @param sourceId - The source ID
     * @param options - Polling options
     * @returns The processed source
     */
    waitUntilReady(notebookId: string, sourceId: string, options?: {
        timeoutMs?: number;
        pollIntervalMs?: number;
    }): Promise<Source>;
    /**
     * Waits for multiple sources to be ready.
     *
     * @param notebookId - The notebook ID
     * @param sourceIds - List of source IDs
     * @param options - Polling options
     * @returns List of processed sources
     */
    waitForSources(notebookId: string, sourceIds: string[], options?: {
        timeoutMs?: number;
        pollIntervalMs?: number;
    }): Promise<Source[]>;
    /**
     * Gets the AI-generated guide for a source.
     *
     * @param notebookId - The notebook ID
     * @param sourceId - The source ID
     * @returns Source guide with summary and keywords
     */
    getGuide(notebookId: string, sourceId: string): Promise<SourceGuide>;
    /**
     * Gets the full indexed text content of a source.
     *
     * @param notebookId - The notebook ID
     * @param sourceId - The source ID
     * @returns Full text content with sections
     */
    getFulltext(notebookId: string, sourceId: string): Promise<SourceFulltext>;
    /**
     * Checks if a source needs refreshing based on its age.
     *
     * @param source - The source to check
     * @param maxAgeMs - Maximum age in milliseconds (default 24 hours)
     * @returns Whether the source should be refreshed
     */
    checkFreshness(source: Source, maxAgeMs?: number): boolean;
}
//# sourceMappingURL=sources.d.ts.map