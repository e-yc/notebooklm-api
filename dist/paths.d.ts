/**
 * Path Management for NotebookLM Client
 */
/**
 * Default directory for storing NotebookLM data
 */
export declare const DEFAULT_DATA_DIR: string;
/**
 * Default path for Playwright storage state (authentication)
 */
export declare const DEFAULT_STORAGE_PATH: string;
/**
 * Default path for configuration file
 */
export declare const DEFAULT_CONFIG_PATH: string;
/**
 * Default path for conversation cache
 */
export declare const DEFAULT_CACHE_PATH: string;
/**
 * Ensures the data directory exists
 */
export declare function ensureDataDir(): Promise<void>;
/**
 * Gets the storage path from environment or default
 */
export declare function getStoragePath(): string;
/**
 * Validates that a path doesn't contain traversal attempts
 */
export declare function validatePath(path: string): boolean;
/**
 * Gets the download directory for artifacts
 */
export declare function getDownloadDir(notebookId?: string): string;
//# sourceMappingURL=paths.d.ts.map