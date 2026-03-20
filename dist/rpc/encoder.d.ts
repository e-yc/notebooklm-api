/**
 * RPC Request Encoder for NotebookLM API
 *
 * Handles encoding of RPC requests to the batchexecute format
 * expected by Google's API.
 */
import { type RPCMethod, type RPCParams } from './types.ts';
/**
 * Encodes an RPC request into the nested array format.
 *
 * The format is: [[[rpc_id, json_params, null, "generic"]]]
 */
export declare function encodeRpcRequest(method: RPCMethod, params: RPCParams): string;
/**
 * Builds the HTTP request body for batchexecute.
 *
 * @param encodedRequest - The encoded RPC request from encodeRpcRequest()
 * @param csrfToken - CSRF token (SNlM0e) for authentication
 * @returns URL-encoded form body with trailing &
 */
export declare function buildRequestBody(encodedRequest: string, csrfToken?: string): string;
/**
 * Builds URL query parameters for the batchexecute endpoint.
 *
 * @param method - The RPC method being called
 * @param sessionId - Session ID (FdrFJe) from page load
 * @param sourcePath - Source path for the request (default: "/")
 * @returns Query string parameters
 */
export declare function buildUrlParams(method: RPCMethod, sessionId?: string, sourcePath?: string): URLSearchParams;
/**
 * Builds the full URL for an RPC call.
 */
export declare function buildRpcUrl(baseUrl: string, method: RPCMethod, sessionId?: string): string;
/**
 * Encodes a file upload request for resumable upload protocol.
 *
 * @param _filename - Name of the file being uploaded (reserved for future use)
 * @param contentType - MIME type of the file
 * @param fileSize - Size of the file in bytes
 * @returns Headers and metadata for initiating upload
 */
export declare function buildUploadHeaders(_filename: string, contentType: string, fileSize: number): Record<string, string>;
/**
 * Encodes upload metadata for source file uploads.
 */
export declare function buildUploadMetadata(notebookId: string, filename: string): string;
//# sourceMappingURL=encoder.d.ts.map