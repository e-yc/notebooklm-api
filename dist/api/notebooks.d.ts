/**
 * Notebooks API Module
 *
 * Handles notebook management operations.
 */
import { ClientCore } from '../core.ts';
import type { Notebook, NotebookDescription } from '../types.ts';
/**
 * API client for notebook operations.
 */
export declare class NotebooksAPI {
    private core;
    constructor(core: ClientCore);
    /**
     * Lists all notebooks for the authenticated user.
     */
    list(): Promise<Notebook[]>;
    /**
     * Creates a new notebook.
     *
     * @param title - The title for the new notebook
     * @returns The created notebook
     */
    create(title: string): Promise<Notebook>;
    /**
     * Gets detailed information about a notebook.
     *
     * @param notebookId - The notebook ID
     * @returns Notebook details
     */
    get(notebookId: string): Promise<Notebook>;
    /**
     * Deletes a notebook.
     *
     * @param notebookId - The notebook ID to delete
     */
    delete(notebookId: string): Promise<void>;
    /**
     * Renames a notebook.
     *
     * @param notebookId - The notebook ID
     * @param newTitle - The new title
     */
    rename(notebookId: string, newTitle: string): Promise<void>;
    /**
     * Gets the raw summary text for a notebook.
     *
     * @param notebookId - The notebook ID
     * @returns Raw summary string
     */
    getSummary(notebookId: string): Promise<string>;
    /**
     * Gets the AI-generated description and suggested topics for a notebook.
     *
     * @param notebookId - The notebook ID
     * @returns NotebookDescription with summary and topics
     */
    getDescription(notebookId: string): Promise<NotebookDescription>;
    /**
     * Gets the raw API response for a notebook.
     * Useful for debugging or accessing data not in the typed interface.
     *
     * @param notebookId - The notebook ID
     * @returns Raw response data
     */
    getRaw(notebookId: string): Promise<unknown>;
    /**
     * Shares or unshares a notebook.
     *
     * @param notebookId - The notebook ID
     * @param isPublic - Whether to make public
     * @param artifactId - Optional specific artifact to share
     */
    share(notebookId: string, isPublic: boolean, artifactId?: string): Promise<void>;
    /**
     * Gets the share URL for a notebook.
     * This is a non-destructive operation that doesn't change sharing settings.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - Optional specific artifact
     * @returns The share URL
     */
    getShareUrl(notebookId: string, artifactId?: string): Promise<string>;
    /**
     * Removes a notebook from the recent list.
     *
     * @param notebookId - The notebook ID
     */
    removeFromRecent(notebookId: string): Promise<void>;
}
//# sourceMappingURL=notebooks.d.ts.map