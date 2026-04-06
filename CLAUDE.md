# Project: Predictive History News Analyzer

## Overview
- **Type**: Obsidian vault + Claude Code research pipeline
- **Stack**: Markdown, Claude Code skills, NotebookLM MCP, infsh (Tavily/Exa)
- **Package Manager**: bun
- **Started**: 2026-04-03

## Purpose
Analyze current news and verify claims/predictions from Professor Jiang's "Game Theory" / "Predictive History" video series. The system cross-references real-world events against 15 tracked geopolitical predictions.

## NotebookLM Notebooks
- **Game Theory**: `f49395f9-a9e1-4e5c-8a6a-e9e34d2cf842` (alias: `game-theory`) - 13 Game Theory episodes
- **News Sources**: See `05-NotebookLM/notebook-registry.md` (alias: `news-sources`) - collected news articles

## Vault Structure
The Obsidian vault lives at `content/`. Quartz serves it as a static site.
- `content/01-Claims/` - 15 tracked predictions with status tracking
- `content/02-Evidence/` - Individual evidence notes linked to claims and sources
- `content/03-Analysis/` - Synthesis reports comparing evidence against claims
- `content/04-Sources/` - News article metadata and credibility assessments
- `content/05-NotebookLM/` - Notebook IDs, aliases, deliverables
- `content/06-Zettelkasten/` - Atomic knowledge base (concepts, actors, patterns, MOCs)
- `content/Templates/` - Standardized templates for all note types

## Website
- **Framework**: Quartz v4.5.2
- **Serve locally**: `npx quartz build --serve`
- **Config**: `quartz.config.ts`

## Claim Status Taxonomy
- `UNVERIFIED` - No evidence gathered yet
- `PARTIALLY_SUPPORTED` - Some evidence supports, but incomplete
- `SUPPORTED` - Strong evidence aligns with the claim
- `CONTRADICTED` - Evidence directly opposes the claim
- `EVOLVING` - Situation is actively developing, mixed signals
- `DEBUNKED` - Overwhelming evidence disproves the claim

## Conventions
- Use `[[wikilinks]]` for all cross-references between notes
- Date evidence/analysis filenames with ISO prefix: `YYYY-MM-DD-slug.md`
- Every evidence note MUST link back to its claim(s) and source(s)
- Every analysis report MUST link to the evidence notes it synthesizes
- Use YAML frontmatter in all notes for metadata
- Claim IDs follow pattern: `CLAIM-XXX-short-slug`

## Tools
- `/analyze-news` - Main pipeline skill: search news, cross-reference claims, produce Obsidian notes
- `/transcribe` - YouTube video transcription
- `nlm` CLI / NotebookLM MCP tools - Notebook management and AI analysis
- `infsh app run tavily/search-assistant` - News search
- `infsh app run tavily/extract` - Full article extraction
- `infsh app run exa/answer` - Semantic search with AI answers

## Architecture Decisions
- Markdown-first, no database. All state in YAML frontmatter and markdown files.
- Two separate NotebookLM notebooks: one for source material (Game Theory), one for news evidence
- Individual claim files (not one big file) so Obsidian backlinks work naturally
- infsh (Tavily/Exa) over raw WebSearch for richer results and chaining

## Preferences & Rules
- oklch colors only (no hex/rgb) if any CSS is needed
- No comments in code; use expressive names
- bun only, never npm

## Learnings & Corrections

## Current State
- Vault initialized with 15 claim files
- Game Theory NotebookLM notebook loaded with 13 episodes
- News Sources notebook created
