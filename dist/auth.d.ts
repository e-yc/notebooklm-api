/**
 * Authentication Module for NotebookLM Client
 *
 * Handles loading cookies from Playwright storage state and
 * extracting CSRF/Session tokens from the NotebookLM homepage.
 */
import type { Cookie } from './types.ts';
/**
 * Playwright storage state format
 */
interface StorageState {
    cookies: PlaywrightCookie[];
    origins?: unknown[];
}
interface PlaywrightCookie {
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: 'Strict' | 'Lax' | 'None';
}
/**
 * Authentication tokens for API requests
 */
export declare class AuthTokens {
    cookies: Cookie[];
    csrfToken: string;
    sessionId: string;
    constructor(cookies: Cookie[], csrfToken: string, sessionId: string);
    /**
     * Creates AuthTokens from a Playwright storage state file.
     *
     * This is the recommended initialization method.
     */
    static fromStorage(storagePath?: string): Promise<AuthTokens>;
    /**
     * Creates AuthTokens from a parsed storage state object.
     */
    static fromStorageState(storageState: StorageState): Promise<AuthTokens>;
    /**
     * Returns cookies as a header string for fetch requests.
     */
    getCookieHeader(): string;
    /**
     * Checks if the tokens appear to be valid.
     */
    isValid(): boolean;
}
/**
 * Extracts and filters cookies from Playwright storage state.
 *
 * Uses domain whitelist and priority rules to ensure deterministic behavior.
 */
export declare function extractCookiesFromStorage(storageState: StorageState): Cookie[];
/**
 * Fetches CSRF and session tokens from the NotebookLM homepage.
 *
 * These tokens are embedded in the page HTML and required for API calls.
 */
export declare function fetchTokens(cookies: Cookie[]): Promise<{
    csrfToken: string;
    sessionId: string;
}>;
/**
 * Creates an httpx-compatible cookie jar for downloads.
 * Preserves domain information for cross-domain redirects.
 */
export declare function createCookieJar(cookies: Cookie[]): Map<string, string>;
/**
 * Refreshes authentication tokens.
 *
 * This helps prevent "Session Expired" errors by obtaining fresh tokens.
 */
export declare function refreshTokens(cookies: Cookie[]): Promise<{
    csrfToken: string;
    sessionId: string;
}>;
export {};
//# sourceMappingURL=auth.d.ts.map