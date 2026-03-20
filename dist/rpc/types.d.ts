/**
 * RPC Types and Constants for NotebookLM API
 */
export declare const API_ENDPOINTS: {
    readonly BATCH_EXECUTE: "https://notebooklm.google.com/_/LabsTailwindUi/data/batchexecute";
    readonly QUERY: "https://notebooklm.google.com/_/LabsTailwindUi/data/google.internal.labs.tailwind.orchestration.v1.LabsTailwindOrchestrationService/GenerateFreeFormStreamed";
    readonly UPLOAD: "https://notebooklm.google.com/upload/_/";
    readonly HOME: "https://notebooklm.google.com";
};
export declare enum RPCMethod {
    LIST_NOTEBOOKS = "wXbhsf",
    CREATE_NOTEBOOK = "CCqFvf",
    GET_NOTEBOOK = "rLM1Ne",
    RENAME_NOTEBOOK = "s0tc2d",
    DELETE_NOTEBOOK = "WWINqb",
    REMOVE_FROM_RECENT = "fejl7e",
    GET_NOTEBOOK_DESCRIPTION = "VfAZjd",// SUMMARIZE
    ADD_URL_SOURCE = "izAoDd",
    ADD_FILE_SOURCE = "o4cbdc",
    ADD_TEXT_SOURCE = "izAoDd",// Same as ADD_URL_SOURCE with different params
    DELETE_SOURCE = "tGMBJ",
    GET_SOURCE = "hizoJc",
    REFRESH_SOURCE = "FLmJqe",
    UPDATE_SOURCE = "b7Wfje",
    RENAME_SOURCE = "b7Wfje",// Same as UPDATE_SOURCE
    GET_SOURCE_GUIDE = "tr032e",
    GET_SOURCE_FULLTEXT = "hizoJc",// Same as GET_SOURCE
    DISCOVER_SOURCES = "qXyaNe",
    ASK = "QUERY_ENDPOINT",// Special endpoint
    GET_CHAT_HISTORY = "hPTbtc",
    CONFIGURE_CHAT = "QUERY_ENDPOINT",
    LIST_ARTIFACTS = "gArtLc",
    CREATE_ARTIFACT = "xpWGLf",
    GET_ARTIFACT = "BnLyuf",
    RENAME_ARTIFACT = "rc3d8d",
    DELETE_ARTIFACT = "V5N4be",
    GET_GENERATION_STATUS = "gArtLc",// POLL_STUDIO
    EXPORT_TO_DOCS = "Krh3pd",
    EXPORT_TO_SHEETS = "Krh3pd",
    GET_INTERACTIVE_HTML = "v9rmvd",
    CREATE_AUDIO = "AHyHrd",
    GET_AUDIO = "VUsiyb",
    DELETE_AUDIO = "sJDbic",
    CREATE_VIDEO = "R7cb6c",
    START_FAST_RESEARCH = "Ljjv0c",
    START_DEEP_RESEARCH = "QA9ei",
    POLL_RESEARCH = "e3bVqc",
    IMPORT_RESEARCH_SOURCES = "LBwxtb",
    SHARE_ARTIFACT = "RGP97b",
    SHARE_NOTEBOOK = "QDyure",
    GET_SHARE_STATUS = "JFMDGd",
    CREATE_NOTE = "CYK0Xb",
    GET_NOTES = "cFji9",
    UPDATE_NOTE = "cYAfTb",
    DELETE_NOTE = "AH0mwd",
    GENERATE_MIND_MAP = "yyryJe"
}
export declare enum StudioContentType {
    AUDIO = 1,
    REPORT = 2,
    VIDEO = 3,
    QUIZ = 4,// Also used for flashcards (variant distinction)
    MIND_MAP = 5,
    INFOGRAPHIC = 6,
    SLIDE_DECK = 7,
    DATA_TABLE = 8
}
export declare enum AudioFormat {
    MP3 = 1,
    WAV = 2
}
export declare enum AudioLength {
    SHORT = 1,// ~5 minutes
    MEDIUM = 2,// ~15 minutes
    LONG = 3
}
export declare enum VideoFormat {
    MP4 = 1,
    WEBM = 2
}
export declare enum VideoStyle {
    AUTO = 1,
    DOCUMENTARY = 2,
    EDUCATIONAL = 3,
    PRESENTATION = 4,
    STORYTELLING = 5,
    WHITEBOARD = 6,
    PAPER_CRAFT = 7
}
export declare enum QuizDifficulty {
    EASY = 1,
    MEDIUM = 2,
    HARD = 3
}
export declare enum ReportFormat {
    BRIEFING_DOC = 1,
    STUDY_GUIDE = 2,
    BLOG_POST = 3,
    CUSTOM = 4
}
export declare enum InfographicOrientation {
    PORTRAIT = 1,
    LANDSCAPE = 2
}
export declare enum ChatMode {
    DEFAULT = 0,
    GUIDED = 1,
    CRITICAL = 2
}
export declare enum ResponseLength {
    CONCISE = 1,
    BALANCED = 2,
    COMPREHENSIVE = 3
}
export declare enum ResearchSourceType {
    WEB = 1,
    DRIVE = 2
}
export declare enum ResearchMode {
    FAST = 1,
    DEEP = 2
}
export declare enum SourceStatus {
    PROCESSING = 1,
    READY = 2,
    ERROR = 3
}
export declare enum GenerationStatusCode {
    PENDING = 0,
    IN_PROGRESS = 1,
    COMPLETED = 2,
    ERROR = 3
}
export declare enum DriveDocType {
    DOCUMENT = 1,
    SPREADSHEET = 2,
    PRESENTATION = 3,
    PDF = 4
}
export declare enum ExportDestination {
    GOOGLE_DOCS = 1,
    GOOGLE_SHEETS = 2
}
export declare function getSourceStatusString(code: number): string;
export declare function getGenerationStatusString(code: number): string;
export type RPCParams = (string | number | boolean | null | RPCParams)[];
export declare const BUILD_LABEL = "ProjectMakiServiceUi_20240101.00_p0";
//# sourceMappingURL=types.d.ts.map