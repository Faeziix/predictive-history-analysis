# Predictive History News Analyzer

A research system that cross-references real-world events against Professor Jiang's geopolitical predictions from the "Game Theory" / "Predictive History" series. Built as an Obsidian vault published with [Quartz](https://quartz.jzhao.xyz/).

## What's Inside

- **15 tracked predictions** covering US-Iran war, Strait of Hormuz, global economic collapse, Pax Judaica, and more
- **68 Zettelkasten notes** — atomic knowledge base of theoretical frameworks, geopolitical actors, and historical patterns
- **Evidence notes** linking real-world news to specific claims
- **Analysis reports** synthesizing evidence across claims

## Structure

```
content/                  # Obsidian vault
├── 00-Dashboard/         # Overview and navigation
├── 01-Claims/            # 15 tracked predictions
├── 02-Evidence/          # News evidence linked to claims
├── 03-Analysis/          # Synthesis reports
├── 04-Sources/           # Article metadata and credibility
├── 05-NotebookLM/        # Notebook registry
├── 06-Zettelkasten/      # Atomic knowledge base
└── Templates/            # Note templates
```

## Run Locally

```bash
npm i
npx quartz build --serve
```

Then open http://localhost:8080.

## Claim Status Taxonomy

| Status | Meaning |
|--------|---------|
| UNVERIFIED | No evidence gathered yet |
| PARTIALLY_SUPPORTED | Some evidence supports |
| SUPPORTED | Strong evidence aligns |
| CONTRADICTED | Evidence opposes |
| EVOLVING | Actively developing, mixed signals |
| DEBUNKED | Overwhelming evidence disproves |
