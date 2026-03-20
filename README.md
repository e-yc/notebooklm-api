# notebooklm-api

Unofficial TypeScript/JavaScript client and CLI for the Google NotebookLM API.

Fork of [`notebooklm`](https://www.npmjs.com/package/notebooklm) with extensive bug fixes (15+ RPC fixes) and new features (slide deck generation, artifact downloads). See [CHANGELOG.md](./CHANGELOG.md) for details.

## Install

```bash
npm install -g notebooklm-api
```

## Authentication

```bash
notebooklm login
```

Opens a browser to authenticate with your Google account. Credentials are stored locally in `~/.notebooklm/`.

## CLI Usage

### Notebooks

```bash
notebooklm create "My Research"           # Create notebook
notebooklm list                           # List all notebooks
```

### Sources

```bash
notebooklm source add-text <notebookId> -t "Title" -c "Content"
notebooklm source add-url <notebookId> <url>
notebooklm source list <notebookId>
notebooklm source delete <notebookId> <sourceId>
```

### Generate Content

```bash
# Reports
notebooklm generate report <notebookId> -p "Custom prompt" -w

# Slide decks
notebooklm generate slide-deck <notebookId> -p "Instructions" -f presenter -w

# Audio/video overviews
notebooklm generate audio <notebookId> -w
notebooklm generate video <notebookId> -w

# Check status
notebooklm generate status <notebookId> <artifactId>

# Download content
notebooklm generate download <notebookId> <artifactId> output.md
```

### Research

```bash
notebooklm research fast <notebookId> "research query"
notebooklm research deep <notebookId> "research query"
```

## Programmatic Usage

```typescript
import { NotebookLMClient } from 'notebooklm-api';

const client = await NotebookLMClient.fromStorage();

// Create notebook and add sources
const notebook = await client.notebooks.create('Research');
await client.sources.addText(notebook.id, 'Title', 'Content...');

// Generate report
const status = await client.artifacts.generateReport(notebook.id, {
  customPrompt: 'Analyze the key findings...'
});

// Wait and download
await client.artifacts.waitForGeneration(notebook.id, status.artifactId);
const content = await client.artifacts.downloadReport(notebook.id, status.artifactId);

// Generate slide deck
const slides = await client.artifacts.generateSlideDeck(notebook.id, {
  instructions: 'Create executive briefing...',
  format: 'presenter',
  length: 'default'
});
```

## What's Fixed (vs `notebooklm@0.1.1`)

- Source status always showing "processing" even when ready
- Sources listing using wrong RPC method
- `addText` / `addUrl` using wrong parameter formats
- Artifact status codes mapped incorrectly
- Artifact polling using nonexistent RPC method
- Report generation using wrong method ID and params
- Report download returning empty string
- Missing `source-path` URL parameter on artifact calls

## What's New

- `generate slide-deck` command (ArtifactType 8)
- `generate download` command for saving artifacts to files
- Artifact content extraction from LIST_ARTIFACTS response

## License

MIT
