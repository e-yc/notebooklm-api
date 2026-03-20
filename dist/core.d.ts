/**
 * Core Client Implementation for NotebookLM API
 *
 * Handles HTTP communication, RPC encoding/decoding, and authentication.
 */
import { AuthTokens } from './auth.ts';
import { type RPCMethod, type RPCParams } from './rpc/types.ts';
import type { ConversationTurn } from './types.ts';
/**
 * Core client for NotebookLM API communication.
 *
 * This is an internal component used by higher-level sub-client APIs.
 */
export declare class ClientCore {
    private auth;
    private refreshLock;
    private conversationCache;
    constructor(auth: AuthTokens);
    /**
     * Gets the current auth tokens.
     */
    getAuth(): AuthTokens;
    /**
     * Executes an RPC call to the NotebookLM API.
     *
     * @param method - The RPC method to call
     * @param params - Parameters for the RPC call
     * @param retryOnAuthError - Whether to retry on auth failure
     * @returns The decoded response data
     */
    rpcCall(method: RPCMethod, params: RPCParams, retryOnAuthError?: boolean): Promise<unknown>;
    /**
     * Refreshes authentication tokens.
     *
     * Uses a lock to ensure only one refresh runs at a time.
     */
    refreshAuth(): Promise<void>;
    /**
     * Uploads a file to NotebookLM.
     *
     * Uses Google's resumable upload protocol.
     */
    uploadFile(notebookId: string, filename: string, content: Uint8Array, contentType: string): Promise<string>;
    /**
     * Downloads content from a URL with authentication.
     */
    download(url: string): Promise<Response>;
    /**
     * Gets cached conversation turns for a conversation ID.
     */
    getCachedTurns(conversationId: string): ConversationTurn[];
    /**
     * Adds a turn to the conversation cache.
     */
    addCachedTurn(conversationId: string, turn: ConversationTurn): void;
    /**
     * Clears the conversation cache.
     */
    clearConversationCache(conversationId?: string): void;
    /**
     * Extracts source IDs from a notebook response.
     */
    extractSourceIds(notebookData: unknown): string[];
}
//# sourceMappingURL=core.d.ts.map