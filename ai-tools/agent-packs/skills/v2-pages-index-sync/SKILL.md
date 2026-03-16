---
name: v2-pages-index-sync
version: "1.0"
description: >-
  Generate, verify, and stage section/root index.mdx files for v2 pages. Use when tasks include v2 index.mdx out of date, sync top-level page indexes, remove nested index files.
tier: 2
invoke_when:
  - "v2 index.mdx out of date"
  - "sync top-level page indexes"
  - "remove nested index files"
primary_paths:
  - "tools/scripts/generate-pages-index.js"
  - "v2/pages/index.mdx"
  - "docs.json"
  - "tests/README.md"
primary_commands:
  - "node tools/scripts/generate-pages-index.js --staged --write --stage"
  - "node tools/scripts/generate-pages-index.js --write --rebuild-indexes"
---

SKILL: v2 Pages Index Sync

Goal
Maintain deterministic section and root table-of-contents files under `v2/pages`.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run staged sync for normal commits; use full rebuild for structural updates.
2. Confirm nested legacy indexes are removed in write mode.
3. Check warning markers tied to docs.json coverage.

Command examples
```bash
node tools/scripts/generate-pages-index.js --staged --write --stage
node tools/scripts/generate-pages-index.js --write --rebuild-indexes
```

Deliverable Format
- Updated index files list (section + root).
- Any removed legacy/nested index file summary.

Failure Modes / Fallback
- If staged mode skips unexpectedly, verify staged file paths include `v2/pages`.
- If docs.json parsing fails, resolve config syntax before rerunning generator.

Validation Checklist
- [ ] Generator passes without errors.
- [ ] Root and section indexes are consistent.
- [ ] Legacy `index.md` artifacts are not reintroduced.
