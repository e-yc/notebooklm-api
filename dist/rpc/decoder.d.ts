/**
 * RPC Response Decoder for NotebookLM API
 *
 * Handles decoding of responses from Google's batchexecute API.
 */
import type { RPCMethod } from './types.ts';
/**
 * RPC Error class for general RPC failures
 */
export declare class RPCError extends Error {
    readonly rpcId?: string | undefined;
    readonly errorCode?: number | undefined;
    readonly rawResponse?: unknown | undefined;
    constructor(message: string, rpcId?: string | undefined, errorCode?: number | undefined, rawResponse?: unknown | undefined);
}
/**
 * Auth Error class for authentication-specific failures
 */
export declare class AuthError extends RPCError {
    constructor(message: string, rpcId?: string);
}
/**
 * Strips the anti-XSSI prefix from API responses.
 *
 * Google adds ")]}'" prefix to prevent XSSI attacks.
 */
export declare function stripAntiXssi(response: string): string;
/**
 * Parses a chunked response from batchexecute.
 *
 * The format alternates between byte counts and JSON payloads:
 * ```
 * 123
 * ["response data"]
 * 456
 * ["more data"]
 * ```
 */
export declare function parseChunkedResponse(response: string): unknown[];
/**
 * Extracts the RPC result for a specific method from parsed chunks.
 *
 * @param chunks - Parsed response chunks
 * @param method - The RPC method ID to look for
 * @returns The extracted result data
 */
export declare function extractRpcResult(chunks: unknown[], method: RPCMethod): unknown;
/**
 * Checks if an error indicates an authentication failure.
 */
export declare function isAuthError(error: unknown): boolean;
/**
 * Decodes a complete batchexecute response.
 *
 * @param response - Raw response text from the API
 * @param method - The RPC method that was called
 * @returns The extracted and parsed result
 */
export declare function decodeResponse(response: string, method: RPCMethod): unknown;
/**
 * Extracts nested data from a deeply nested array structure.
 * NotebookLM responses often have data buried in nested arrays.
 *
 * @param data - The data structure to search
 * @param indices - Array of indices to follow
 * @returns The extracted value or undefined
 */
export declare function extractNested(data: unknown, indices: number[]): unknown;
/**
 * Recursively searches for a value in nested arrays.
 *
 * @param data - Data structure to search
 * @param predicate - Function to test values
 * @returns First matching value or undefined
 */
export declare function findInNested(data: unknown, predicate: (value: unknown) => boolean): unknown;
/**
 * Extracts all UUIDs from a nested data structure.
 */
export declare function extractUuids(data: unknown): string[];
//# sourceMappingURL=decoder.d.ts.map