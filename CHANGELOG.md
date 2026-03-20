# Changelog

## 0.2.0 (2026-03-20)

Fork of `notebooklm@0.1.1` by kaelen with extensive bug fixes and new features.

### Bug Fixes

- **Source status parsing**: Sources always showed "processing" even when ready. The GET_NOTEBOOK response wraps status in `[null, statusCode]` array — added array traversal to extract the actual code.
- **Source list RPC method**: Changed from `hizoJc` (GET_SOURCE_FULLTEXT) to `rLM1Ne` (GET_NOTEBOOK) which actually returns sources.
- **Source ID parsing**: GET_NOTEBOOK wraps source IDs as `["uuid"]` arrays — added unwrapping logic in `parseSourceItem`.
- **Source list traversal**: `parseSourceList` now correctly finds sources at the right nesting level in the GET_NOTEBOOK response.
- **addText RPC params**: Fixed parameter format from flat `[notebookId, title, content]` to correct nested array structure per Google's batchexecute protocol.
- **addUrl RPC params**: Fixed parameter format for both regular URLs and YouTube URLs.
- **Source delete params**: Fixed to use triple-nested sourceId `[[[sourceId]]]`.
- **Generation status codes**: Fixed mapping — was `0=Pending, 1=InProgress, 2=Completed, 3=Error`, should be `1=Processing, 2=Pending, 3=Completed`.
- **Artifact status parsing**: Status is at `item[4]` in the LIST_ARTIFACTS response, not `item[3]`.
- **Artifact listing**: Added required `source-path=/notebook/{id}` URL parameter to `rpcCall` — without it, LIST_ARTIFACTS returns null.
- **getStatus method**: Replaced fake `GET_GENERATION_STATUS` RPC (doesn't exist) with LIST_ARTIFACTS + find by ID.
- **CREATE_ARTIFACT method ID**: Changed from `xpWGLf` to `R7cb6c`.
- **generateReport**: Complete rewrite — fetches source IDs from notebook and builds correct nested params with source ID references.
- **downloadReport**: Now reads `artifact.content` from LIST_ARTIFACTS response instead of returning empty string.

### New Features

- **Slide deck generation**: Added `generateSlideDeck()` API method and `notebooklm generate slide-deck` CLI command with `--prompt`, `--format` (detailed/presenter), and `--length` (default/short) options.
- **Artifact download**: Added `notebooklm generate download <notebookId> <artifactId> <outputPath>` CLI command for downloading artifact content to files.
- **rpcCall source-path**: Added optional `sourcePath` parameter to `rpcCall` for methods that require notebook context.

### RPC Method Reference

Correct method IDs (verified against [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py)):

| Method | ID | Notes |
|--------|-----|-------|
| GET_NOTEBOOK | `rLM1Ne` | Returns notebook + sources |
| ADD_SOURCE | `izAoDd` | URL, text, YouTube |
| DELETE_SOURCE | `tGMBJ` | Triple-nested source ID |
| LIST_ARTIFACTS | `gArtLc` | Requires source-path |
| CREATE_ARTIFACT | `R7cb6c` | All artifact types |
| DELETE_ARTIFACT | `V5N4be` | |
| EXPORT_ARTIFACT | `Krh3pd` | To Docs/Sheets |
