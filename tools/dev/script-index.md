# dev Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Domain |
|---|---|---|---|
| `tools/dev/integrations/notion/1-read-notion-to-csv.js` | Reads the Notion pages database, filters v2 rows, and writes CSV/JSON exports for downstream sync steps. | `node tools/dev/integrations/notion/1-read-notion-to-csv.js [flags]` | docs |
| `tools/dev/integrations/notion/2-read-docs-to-csv.js` | Parses docs.json v2 navigation and writes CSV/JSON exports with section-group metadata for Notion sync. | `node tools/dev/integrations/notion/2-read-docs-to-csv.js [flags]` | docs |
| `tools/dev/integrations/notion/3-check-duplicates.js` | Analyzes the exported Notion snapshot for duplicate page keys and writes JSON and Markdown reports. | `node tools/dev/integrations/notion/3-check-duplicates.js [flags]` | docs |
| `tools/dev/integrations/notion/4-remove-duplicates.js` | Archives duplicate Notion pages from the duplicate report while keeping the first record in each group. | `node tools/dev/integrations/notion/4-remove-duplicates.js [flags]` | docs |
| `tools/dev/integrations/notion/5-export-to-notion.js` | Updates existing Notion page grouping fields from the exported docs navigation snapshot. | `node tools/dev/integrations/notion/5-export-to-notion.js [flags]` | docs |
| `tools/dev/integrations/notion/backup-notion-table.js` | Backs up the current Notion data source rows and metadata into timestamped JSON and CSV artifacts with a manifest. | `node tools/dev/integrations/notion/backup-notion-table.js [flags]` | docs |
| `tools/dev/integrations/notion/install-local-sync-hook.sh` | Installs the managed local post-commit hook that invokes the Notion sync runner and preserves any prior hook as a backup. | `bash tools/dev/integrations/notion/install-local-sync-hook.sh [flags]` | docs |
| `tools/dev/integrations/notion/local-post-commit-sync.sh` | Detects docs.json or v2 content changes in the latest commit and runs the canonical Notion sync locally when enabled. | `bash tools/dev/integrations/notion/local-post-commit-sync.sh [flags]` | docs |
| `tools/dev/integrations/notion/remove-local-sync-hook.sh` | Removes the managed local Notion post-commit hook when it is present. | `bash tools/dev/integrations/notion/remove-local-sync-hook.sh [flags]` | docs |
| `tools/dev/integrations/notion/sync-v2-en-canonical.js` | Builds canonical v2 English page metadata and syncs Notion schema, row metadata, and optional page-body blocks to match docs. | `node tools/dev/integrations/notion/sync-v2-en-canonical.js [flags]` | docs |
| `tools/dev/preview/lib/resolve-scoped-docs-config.js` | Scoped docs config resolver — resolves named scoped navigation configs and explicit docs config paths for mint-dev tooling | `node -e "require('./tools/dev/preview/lib/resolve-scoped-docs-config')"` | docs |
{/* SCRIPT-INDEX:END */}
