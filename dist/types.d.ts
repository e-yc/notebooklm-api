/**
 * Type Definitions for NotebookLM Client
 */
import { z } from 'zod';
import { StudioContentType, AudioFormat, VideoFormat, QuizDifficulty, ReportFormat, ChatMode, ResponseLength } from './rpc/types.ts';
export { StudioContentType, AudioFormat, AudioLength, VideoFormat, VideoStyle, QuizDifficulty, ReportFormat, InfographicOrientation, ChatMode, ResponseLength, ResearchSourceType, ResearchMode, SourceStatus, GenerationStatusCode, DriveDocType, ExportDestination, } from './rpc/types.ts';
export interface Notebook {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    isOwner: boolean;
    sourceCount?: number;
}
export interface NotebookDescription {
    summary: string;
    suggestedTopics: SuggestedTopic[];
}
export interface SuggestedTopic {
    question: string;
    prompt: string;
}
export interface Source {
    id: string;
    notebookId: string;
    title: string;
    type: SourceType;
    url?: string;
    status: 'processing' | 'ready' | 'error';
    createdAt: Date;
    wordCount?: number;
    errorMessage?: string;
}
export type SourceType = 'url' | 'youtube' | 'text' | 'file' | 'drive' | 'unknown';
export interface SourceFulltext {
    sourceId: string;
    title: string;
    content: string;
    sections: SourceSection[];
}
export interface SourceSection {
    title?: string;
    content: string;
    startIndex: number;
    endIndex: number;
}
export interface SourceGuide {
    sourceId: string;
    summary: string;
    keywords: string[];
}
export interface AskResult {
    answer: string;
    references: ChatReference[];
    conversationId: string;
}
export interface ChatReference {
    sourceId: string;
    sourceTitle: string;
    text: string;
    startChar: number;
    endChar: number;
}
export interface ConversationTurn {
    id: string;
    question: string;
    answer: string;
    references: ChatReference[];
    timestamp: Date;
}
export interface ChatConfig {
    mode: ChatMode;
    responseLength: ResponseLength;
    persona?: string;
}
export interface Artifact {
    id: string;
    notebookId: string;
    title: string;
    type: StudioContentType;
    status: 'pending' | 'in_progress' | 'completed' | 'error';
    createdAt: Date;
    url?: string;
    errorMessage?: string;
}
export interface GenerationStatus {
    artifactId: string;
    status: 'pending' | 'in_progress' | 'completed' | 'error';
    progress?: number;
    url?: string;
    errorMessage?: string;
}
export interface AudioOptions {
    format?: AudioFormat;
    language?: string;
    instructions?: string;
}
export interface VideoOptions {
    format?: VideoFormat;
    language?: string;
    instructions?: string;
}
export interface ReportOptions {
    format?: ReportFormat;
    customPrompt?: string;
    includeSourceRefs?: boolean;
}
export interface QuizOptions {
    questionCount?: number;
    difficulty?: QuizDifficulty;
    instructions?: string;
}
export interface FlashcardOptions {
    cardCount?: number;
    instructions?: string;
}
export interface MindMapOptions {
    instructions?: string;
}
export interface InfographicOptions {
    instructions?: string;
}
export interface SlideOptions {
    instructions?: string;
}
export interface DataTableOptions {
    instructions?: string;
}
export interface ResearchTask {
    taskId: string;
    reportId: string;
    query: string;
    source: 'web' | 'drive';
    mode: 'fast' | 'deep';
}
export interface ResearchResult {
    taskId: string;
    status: 'in_progress' | 'completed';
    summary?: string;
    sources: ResearchSource[];
}
export interface ResearchSource {
    url: string;
    title: string;
    snippet?: string;
}
export interface Note {
    id: string;
    notebookId: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface AuthTokens {
    cookies: Cookie[];
    csrfToken: string;
    sessionId: string;
}
export interface Cookie {
    name: string;
    value: string;
    domain: string;
    path: string;
    expires?: number;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
}
export declare const NotebookSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    isOwner: z.ZodBoolean;
    sourceCount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const SourceSchema: z.ZodObject<{
    id: z.ZodString;
    notebookId: z.ZodString;
    title: z.ZodString;
    type: z.ZodEnum<{
        unknown: "unknown";
        url: "url";
        youtube: "youtube";
        text: "text";
        file: "file";
        drive: "drive";
    }>;
    url: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        processing: "processing";
        ready: "ready";
        error: "error";
    }>;
    createdAt: z.ZodDate;
    wordCount: z.ZodOptional<z.ZodNumber>;
    errorMessage: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const AskResultSchema: z.ZodObject<{
    answer: z.ZodString;
    references: z.ZodArray<z.ZodObject<{
        sourceId: z.ZodString;
        sourceTitle: z.ZodString;
        text: z.ZodString;
        startChar: z.ZodNumber;
        endChar: z.ZodNumber;
    }, z.core.$strip>>;
    conversationId: z.ZodString;
}, z.core.$strip>;
export declare const ArtifactSchema: z.ZodObject<{
    id: z.ZodString;
    notebookId: z.ZodString;
    title: z.ZodString;
    type: z.ZodEnum<typeof StudioContentType>;
    status: z.ZodEnum<{
        error: "error";
        pending: "pending";
        in_progress: "in_progress";
        completed: "completed";
    }>;
    createdAt: z.ZodDate;
    url: z.ZodOptional<z.ZodString>;
    errorMessage: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=types.d.ts.map