---
name: docs-status-table-generation
version: "1.0"
description: >-
  Generate docs status table and structure diagram artifacts from docs navigation sources. Use when tasks include regenerate docs status table, update docs structure diagram, sync status report with docs.json.
tier: 2
invoke_when:
  - "regenerate docs status table"
  - "update docs structure diagram"
  - "sync status report with docs.json"
primary_paths:
  - "tools/scripts/snippets/generate-docs-status.js"
  - "snippets/generated/docs-status-table.mdx"
  - "snippets/generated/docs-structure-diagram.mdx"
  - "snippets/docs-status-data.json"
primary_commands:
  - "node tools/scripts/snippets/generate-docs-status.js"
  - "rg -n \"Total Pages|Auto-generated from docs.json\" snippets/generated/docs-status-table.mdx"
---

SKILL: Docs Status Table Generation

Goal
Produce up-to-date status and structure generated outputs tied to docs.json navigation.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run status generator to refresh table and diagram outputs.
2. Inspect generated files for route warnings and count deltas.
3. Update status data source only where status metadata changes are intended.

Command examples
```bash
node tools/scripts/snippets/generate-docs-status.js
rg -n \"Total Pages|Auto-generated from docs.json\" snippets/generated/docs-status-table.mdx
```

Deliverable Format
- Refreshed generated status artifacts.
- Summary of page counts and notable warning markers.

Failure Modes / Fallback
- If docs.json parsing fails, resolve config syntax first.
- If generated output is unexpectedly empty, confirm v2 navigation extraction path.

Validation Checklist
- [ ] Both generated files are updated when expected.
- [ ] Output references current docs.json state.
- [ ] No unrelated file scope changes are introduced.
