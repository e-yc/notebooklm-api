/**
 * NotebookLM Client
 *
 * Main entry point for interacting with Google NotebookLM.
 */
import { AuthTokens } from './auth.ts';
import { NotebooksAPI } from './api/notebooks.ts';
import { SourcesAPI } from './api/sources.ts';
import { ChatAPI } from './api/chat.ts';
import { ArtifactsAPI } from './api/artifacts.ts';
import { ResearchAPI } from './api/research.ts';
import { NotesAPI } from './api/notes.ts';
/**
 * Main client for NotebookLM API.
 *
 * Provides access to NotebookLM functionality through namespaced sub-clients:
 * - `notebooks` - Notebook management
 * - `sources` - Source document management
 * - `chat` - Conversational AI interactions
 * - `artifacts` - AI-generated content (audio, video, reports, etc.)
 * - `research` - Web and Drive research
 * - `notes` - User notes management
 *
 * @example
 * ```typescript
 * const client = await NotebookLMClient.fromStorage();
 *
 * // List notebooks
 * const notebooks = await client.notebooks.list();
 *
 * // Create a notebook
 * const nb = await client.notebooks.create("My Research");
 *
 * // Add a source
 * const source = await client.sources.addUrl(nb.id, "https://example.com");
 *
 * // Ask a question
 * const result = await client.chat.ask(nb.id, "Summarize this content");
 * console.log(result.answer);
 *
 * // Generate audio overview
 * const status = await client.artifacts.generateAudio(nb.id);
 * await client.artifacts.waitForGeneration(nb.id, status.artifactId);
 * ```
 */
export declare class NotebookLMClient {
    private core;
    /**
     * Notebook management API
     */
    readonly notebooks: NotebooksAPI;
    /**
     * Source document management API
     */
    readonly sources: SourcesAPI;
    /**
     * Conversational AI API
     */
    readonly chat: ChatAPI;
    /**
     * AI-generated content API
     */
    readonly artifacts: ArtifactsAPI;
    /**
     * Web and Drive research API
     */
    readonly research: ResearchAPI;
    /**
     * User notes management API
     */
    readonly notes: NotesAPI;
    /**
     * Creates a new NotebookLMClient instance.
     *
     * Prefer using `fromStorage()` for most use cases.
     *
     * @param auth - Authentication tokens
     */
    constructor(auth: AuthTokens);
    /**
     * Creates a NotebookLMClient from a Playwright storage state file.
     *
     * This is the recommended way to create a client after running
     * `notebooklm login` to authenticate.
     *
     * @param storagePath - Path to storage state file (optional, uses default if not specified)
     * @returns Promise resolving to a configured client
     *
     * @example
     * ```typescript
     * // Use default storage path (~/.notebooklm/storage-state.json)
     * const client = await NotebookLMClient.fromStorage();
     *
     * // Use custom storage path
     * const client = await NotebookLMClient.fromStorage('/path/to/storage.json');
     * ```
     */
    static fromStorage(storagePath?: string): Promise<NotebookLMClient>;
    /**
     * Refreshes authentication tokens.
     *
     * Call this if you encounter "Session Expired" errors. The client
     * will automatically attempt to refresh on auth errors, but you
     * can call this proactively.
     *
     * @example
     * ```typescript
     * // Proactively refresh before a long operation
     * await client.refreshAuth();
     * ```
     */
    refreshAuth(): Promise<void>;
    /**
     * Gets the current authentication tokens.
     *
     * Useful for debugging or saving state.
     */
    getAuth(): AuthTokens;
    /**
     * Checks if the client is authenticated.
     */
    isAuthenticated(): boolean;
}
/**
 * Creates a NotebookLMClient using the async context manager pattern.
 *
 * @example
 * ```typescript
 * await using client = await createClient();
 * const notebooks = await client.notebooks.list();
 * ```
 */
export declare function createClient(storagePath?: string): Promise<NotebookLMClient>;
//# sourceMappingURL=client.d.ts.map