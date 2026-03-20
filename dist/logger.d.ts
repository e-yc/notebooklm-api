/**
 * Logging Module for NotebookLM Client
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
/**
 * Sets the global log level
 */
export declare function setLogLevel(level: LogLevel): void;
/**
 * Gets the current log level
 */
export declare function getLogLevel(): LogLevel;
/**
 * Creates a logger with a specific prefix
 */
export declare function createLogger(prefix: string): {
    debug(message: string, ...args: unknown[]): void;
    info(message: string, ...args: unknown[]): void;
    warn(message: string, ...args: unknown[]): void;
    error(message: string, ...args: unknown[]): void;
};
export declare const logger: {
    debug(message: string, ...args: unknown[]): void;
    info(message: string, ...args: unknown[]): void;
    warn(message: string, ...args: unknown[]): void;
    error(message: string, ...args: unknown[]): void;
};
//# sourceMappingURL=logger.d.ts.map