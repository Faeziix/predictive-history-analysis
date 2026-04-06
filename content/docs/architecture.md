# Architecture

## System Overview

```
User runs /analyze-news "topic or claim"
         |
         v
+---------------------------------------------+
|  analyze-news skill (orchestrator)          |
|                                             |
|  1. Read claims registry from Obsidian      |
|  2. Query NotebookLM for relevant claims    |
|  3. Search news via Tavily/Exa (infsh)      |
|  4. Cross-reference news vs claims          |
|  5. Write evidence/analysis to Obsidian     |
|  6. Update claim statuses                   |
|  7. Optionally add sources to NotebookLM    |
+---------------------------------------------+
         |
    +----+----+-----------+
    v         v           v
 Obsidian   NotebookLM   infsh
 (vault)    (2 notebooks) (web search)
```

## Components

### Obsidian Vault (Data Store)
The project root is the vault. All research data lives as interlinked markdown files with YAML frontmatter.

- `01-Claims/` - 15 tracked predictions with status, evidence links, and history
- `02-Evidence/` - Individual evidence notes linking sources to claims
- `03-Analysis/` - Synthesis reports
- `04-Sources/` - News article metadata
- `05-NotebookLM/` - Notebook registry and deliverables

### NotebookLM (AI Analysis Engine)
Two notebooks:
- **game-theory** - Source material: 13 Game Theory episodes
- **news-sources** - Collected news articles for cross-reference

NotebookLM handles heavy AI analysis for free (Google's tokens). Can generate podcasts, reports, infographics, slides from ingested sources.

### infsh / Tavily / Exa (Web Search)
- `tavily/search-assistant` - News-focused web search
- `tavily/extract` - Full article content extraction
- `exa/answer` - Semantic search with AI-generated answers

### Claude Code Skills (Orchestration)
- `/analyze-news` - Main pipeline skill
- `/transcribe` - YouTube transcription for new episodes
- `nlm-skill` - NotebookLM management

## Data Flow

1. `/analyze-news` reads claim files to understand what to search for
2. Constructs targeted search queries per claim
3. Searches via Tavily, extracts top articles
4. Analyzes each article against relevant claims
5. Creates Source, Evidence, and Analysis notes with wikilinks
6. Updates claim files and master registry
7. Optionally feeds sources to NotebookLM for deeper analysis

## Claim Status Lifecycle

```
UNVERIFIED -> PARTIALLY_SUPPORTED -> SUPPORTED
                                  -> CONTRADICTED
                                  -> EVOLVING
                                  -> DEBUNKED
```
