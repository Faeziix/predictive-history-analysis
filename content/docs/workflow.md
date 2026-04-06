# Workflow Guide

## Daily/Weekly Usage

### Quick Check on Specific Claims
```
/analyze-news CLAIM-001 CLAIM-008
```
Searches news related to US-Iran war and Trump/Technate predictions only.

### Broad Scan of All Claims
```
/analyze-news
```
Searches current news across all 15 predictions. Takes longer but gives comprehensive coverage.

### Topic-Focused Search
```
/analyze-news "Iran nuclear deal tensions"
```
Searches a specific topic and matches against relevant claims automatically.

### With NotebookLM Integration
```
/analyze-news CLAIM-001 --notify --deliverable audio
```
Searches news, adds sources to NotebookLM, and generates a podcast overview.

## Reviewing Results

1. Open the vault in Obsidian
2. Check `01-Claims/_claims-registry.md` for updated statuses
3. Read new analysis reports in `03-Analysis/`
4. Use Graph View to see how new evidence connects to claims
5. Click through wikilinks to trace evidence back to sources

## Adding New Claims

1. Create a new file in `01-Claims/` using the claim template
2. Add a row to `_claims-registry.md`
3. Link related claims using wikilinks

## NotebookLM Deliverables

Generate deliverables from collected news sources:
```
nlm audio create news-sources --confirm
nlm report create news-sources --format "Briefing Doc" --confirm
nlm infographic create news-sources --confirm
```

Cross-notebook queries:
```
nlm cross query "How does current news align with Professor Jiang's predictions?" --notebooks "game-theory,news-sources"
```

## Maintenance

Periodically update CLAUDE.md with learnings about your analysis preferences. The more you refine it, the better future analyses become.
