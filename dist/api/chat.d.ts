/**
 * Chat API Module
 *
 * Handles conversational interactions with notebooks.
 */
import { ClientCore } from '../core.ts';
import { ChatMode } from '../rpc/types.ts';
import type { AskResult, ConversationTurn, ChatConfig } from '../types.ts';
/**
 * API client for chat operations.
 */
export declare class ChatAPI {
    private core;
    constructor(core: ClientCore);
    /**
     * Asks a question to a notebook.
     *
     * @param notebookId - The notebook ID
     * @param question - The question to ask
     * @param options - Optional parameters
     * @returns The answer with references
     */
    ask(notebookId: string, question: string, options?: {
        conversationId?: string;
        sourceIds?: string[];
    }): Promise<AskResult>;
    /**
     * Gets conversation history from the API.
     *
     * @param notebookId - The notebook ID
     * @param conversationId - The conversation ID
     * @returns List of conversation turns
     */
    getHistory(notebookId: string, conversationId: string): Promise<ConversationTurn[]>;
    /**
     * Gets locally cached conversation turns.
     *
     * @param conversationId - The conversation ID
     * @returns Cached turns
     */
    getCachedTurns(conversationId: string): ConversationTurn[];
    /**
     * Clears the conversation cache.
     *
     * @param conversationId - Optional specific conversation to clear
     */
    clearCache(conversationId?: string): void;
    /**
     * Configures chat persona and response settings.
     *
     * @param notebookId - The notebook ID
     * @param config - Configuration options
     */
    configure(notebookId: string, config: ChatConfig): Promise<void>;
    /**
     * Applies a predefined chat mode.
     *
     * @param notebookId - The notebook ID
     * @param mode - The chat mode to apply
     */
    setMode(notebookId: string, mode: ChatMode): Promise<void>;
}
//# sourceMappingURL=chat.d.ts.map