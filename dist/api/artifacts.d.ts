/**
 * Artifacts API Module
 *
 * Handles AI-generated content like audio, video, reports, quizzes, etc.
 */
import { ClientCore } from '../core.ts';
import { StudioContentType } from '../rpc/types.ts';
import type { Artifact, GenerationStatus, AudioOptions, VideoOptions, ReportOptions, QuizOptions, FlashcardOptions, MindMapOptions } from '../types.ts';
/**
 * API client for artifact operations.
 */
export declare class ArtifactsAPI {
    private core;
    constructor(core: ClientCore);
    /**
     * Lists all artifacts in a notebook.
     *
     * @param notebookId - The notebook ID
     * @param type - Optional filter by content type
     * @returns List of artifacts
     */
    list(notebookId: string, type?: StudioContentType): Promise<Artifact[]>;
    /**
     * Gets a specific artifact by ID.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     * @returns Artifact details
     */
    get(notebookId: string, artifactId: string): Promise<Artifact | null>;
    /**
     * Deletes an artifact.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     */
    delete(notebookId: string, artifactId: string): Promise<void>;
    /**
     * Renames an artifact.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     * @param newTitle - The new title
     */
    rename(notebookId: string, artifactId: string, newTitle: string): Promise<void>;
    /**
     * Generates an audio overview (podcast).
     *
     * @param notebookId - The notebook ID
     * @param options - Generation options
     * @returns Generation status
     */
    generateAudio(notebookId: string, options?: AudioOptions): Promise<GenerationStatus>;
    /**
     * Generates a video overview.
     *
     * @param notebookId - The notebook ID
     * @param options - Generation options
     * @returns Generation status
     */
    generateVideo(notebookId: string, options?: VideoOptions): Promise<GenerationStatus>;
    /**
     * Generates a report.
     *
     * @param notebookId - The notebook ID
     * @param options - Generation options
     * @returns Generation status
     */
    generateReport(notebookId: string, options?: ReportOptions): Promise<GenerationStatus>;
    /**
     * Generates a quiz.
     *
     * @param notebookId - The notebook ID
     * @param options - Generation options
     * @returns Generation status
     */
    generateQuiz(notebookId: string, options?: QuizOptions): Promise<GenerationStatus>;
    /**
     * Generates flashcards.
     *
     * @param notebookId - The notebook ID
     * @param options - Generation options
     * @returns Generation status
     */
    generateFlashcards(notebookId: string, options?: FlashcardOptions): Promise<GenerationStatus>;
    /**
     * Generates a mind map.
     *
     * @param notebookId - The notebook ID
     * @param options - Generation options
     * @returns Generation status
     */
    generateMindMap(notebookId: string, options?: MindMapOptions): Promise<GenerationStatus>;
    /**
     * Gets the current generation status for an artifact.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     * @returns Current status
     */
    getStatus(notebookId: string, artifactId: string): Promise<GenerationStatus>;
    /**
     * Waits for generation to complete.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     * @param options - Polling options
     * @returns Final generation status
     */
    waitForGeneration(notebookId: string, artifactId: string, options?: {
        timeoutMs?: number;
        pollIntervalMs?: number;
    }): Promise<GenerationStatus>;
    /**
     * Downloads an audio artifact.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     * @returns Audio content as Uint8Array
     */
    downloadAudio(notebookId: string, artifactId: string): Promise<Uint8Array>;
    /**
     * Downloads a video artifact.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     * @returns Video content as Uint8Array
     */
    downloadVideo(notebookId: string, artifactId: string): Promise<Uint8Array>;
    /**
     * Downloads a report as markdown.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     * @returns Report content as string
     */
    downloadReport(notebookId: string, artifactId: string): Promise<string>;
    /**
     * Exports a report to Google Docs.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     * @returns Google Docs URL
     */
    exportToDocs(notebookId: string, artifactId: string): Promise<string>;
    /**
     * Exports a data table to Google Sheets.
     *
     * @param notebookId - The notebook ID
     * @param artifactId - The artifact ID
     * @returns Google Sheets URL
     */
    exportToSheets(notebookId: string, artifactId: string): Promise<string>;
}
//# sourceMappingURL=artifacts.d.ts.map