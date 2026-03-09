# notion Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `tools/notion/1-read-notion-to-csv.js` | Reads the Notion pages database, filters v2 rows, and writes CSV/JSON exports for downstream sync steps. | `node tools/notion/1-read-notion-to-csv.js [flags]` | docs |
| `tools/notion/2-read-docs-to-csv.js` | Parses docs.json v2 navigation and writes CSV/JSON exports with section-group metadata for Notion sync. | `node tools/notion/2-read-docs-to-csv.js [flags]` | docs |
| `tools/notion/3-check-duplicates.js` | Analyzes the exported Notion snapshot for duplicate page keys and writes JSON and Markdown reports. | `node tools/notion/3-check-duplicates.js [flags]` | docs |
| `tools/notion/4-remove-duplicates.js` | Archives duplicate Notion pages from the duplicate report while keeping the first record in each group. | `node tools/notion/4-remove-duplicates.js [flags]` | docs |
| `tools/notion/5-export-to-notion.js` | Updates existing Notion page grouping fields from the exported docs navigation snapshot. | `node tools/notion/5-export-to-notion.js [flags]` | docs |
| `tools/notion/backup-notion-table.js` | Backs up the current Notion data source rows and metadata into timestamped JSON and CSV artifacts with a manifest. | `node tools/notion/backup-notion-table.js [flags]` | docs |
| `tools/notion/install-local-sync-hook.sh` | Installs the managed local post-commit hook that invokes the Notion sync runner and preserves any prior hook as a backup. | `bash tools/notion/install-local-sync-hook.sh [flags]` | docs |
| `tools/notion/local-post-commit-sync.sh` | Detects docs.json or v2 content changes in the latest commit and runs the canonical Notion sync locally when enabled. | `bash tools/notion/local-post-commit-sync.sh [flags]` | docs |
| `tools/notion/remove-local-sync-hook.sh` | Removes the managed local Notion post-commit hook when it is present. | `bash tools/notion/remove-local-sync-hook.sh [flags]` | docs |
| `tools/notion/sync-v2-en-canonical.js` | Builds canonical v2 English page metadata and syncs Notion schema, row metadata, and optional page-body blocks to match docs. | `node tools/notion/sync-v2-en-canonical.js [flags]` | docs |
{/* SCRIPT-INDEX:END */}
