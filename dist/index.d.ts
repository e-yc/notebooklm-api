/**
 * NotebookLM TypeScript Client
 *
 * An unofficial TypeScript client for Google NotebookLM.
 *
 * @example
 * ```typescript
 * import { NotebookLMClient } from 'notebooklm';
 *
 * const client = await NotebookLMClient.fromStorage();
 *
 * // List notebooks
 * const notebooks = await client.notebooks.list();
 *
 * // Create a notebook and add sources
 * const nb = await client.notebooks.create("My Research");
 * await client.sources.addUrl(nb.id, "https://example.com");
 *
 * // Ask questions
 * const result = await client.chat.ask(nb.id, "Summarize this");
 * console.log(result.answer);
 *
 * // Generate audio overview
 * const status = await client.artifacts.generateAudio(nb.id);
 * await client.artifacts.waitForGeneration(nb.id, status.artifactId);
 * ```
 *
 * @remarks
 * This library uses undocumented Google APIs that can change without notice.
 * It is best suited for prototyping, research, and personal projects.
 *
 * @packageDocumentation
 */
export { NotebookLMClient, createClient } from './client.ts';
export { AuthTokens } from './auth.ts';
export { DEFAULT_STORAGE_PATH, DEFAULT_DATA_DIR } from './paths.ts';
export type { Notebook, NotebookDescription, SuggestedTopic, Source, SourceType, SourceFulltext, SourceSection, SourceGuide, AskResult, ChatReference, ConversationTurn, ChatConfig, Artifact, GenerationStatus, AudioOptions, VideoOptions, ReportOptions, QuizOptions, FlashcardOptions, MindMapOptions, InfographicOptions, SlideOptions, DataTableOptions, ResearchTask, ResearchResult, ResearchSource, Note, Cookie, } from './types.ts';
export { StudioContentType, AudioFormat, AudioLength, VideoFormat, VideoStyle, QuizDifficulty, ReportFormat, InfographicOrientation, ChatMode, ResponseLength, ResearchSourceType, ResearchMode, SourceStatus, GenerationStatusCode, DriveDocType, ExportDestination, } from './types.ts';
export { RPCError, AuthError, SourceError, SourceProcessingError, SourceTimeoutError, SourceNotFoundError, NotebookNotFoundError, GenerationError, GenerationTimeoutError, ResearchError, ConfigurationError, } from './errors.ts';
export { setLogLevel, getLogLevel, createLogger } from './logger.ts';
export declare const VERSION = "0.1.0";
//# sourceMappingURL=index.d.ts.map