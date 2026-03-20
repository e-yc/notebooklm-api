/**
 * Notes API Module
 *
 * Handles user-created notes within notebooks.
 */
import { ClientCore } from '../core.ts';
import type { Note } from '../types.ts';
/**
 * API client for note operations.
 */
export declare class NotesAPI {
    private core;
    constructor(core: ClientCore);
    /**
     * Lists all notes in a notebook.
     *
     * @param notebookId - The notebook ID
     * @returns List of notes
     */
    list(notebookId: string): Promise<Note[]>;
    /**
     * Creates a new note.
     *
     * @param notebookId - The notebook ID
     * @param title - Note title
     * @param content - Note content
     * @returns The created note
     */
    create(notebookId: string, title: string, content: string): Promise<Note>;
    /**
     * Updates an existing note.
     *
     * @param notebookId - The notebook ID
     * @param noteId - The note ID
     * @param title - New title
     * @param content - New content
     * @returns The updated note
     */
    update(notebookId: string, noteId: string, title: string, content: string): Promise<Note>;
    /**
     * Deletes a note.
     *
     * @param notebookId - The notebook ID
     * @param noteId - The note ID
     */
    delete(notebookId: string, noteId: string): Promise<void>;
    /**
     * Gets a specific note by ID.
     *
     * @param notebookId - The notebook ID
     * @param noteId - The note ID
     * @returns The note or null if not found
     */
    get(notebookId: string, noteId: string): Promise<Note | null>;
}
//# sourceMappingURL=notes.d.ts.map