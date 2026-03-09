---
name: script-header-and-index-sync
description: Enforce script header schema and synchronize group/aggregate script indexes.
tier: 2
triggers:
  - "script-docs test failed"
  - "regenerate script index files"
  - "autofill missing script headers"
primary_paths:
  - "tests/unit/script-docs.test.js"
  - "tools/script-index.md"
  - "tests/script-index.md"
  - "docs-guide/indexes/scripts-index.mdx"
primary_commands:
  - "node tests/unit/script-docs.test.js --staged --write --stage --autofill"
  - "node tests/unit/script-docs.test.js --enforce-existing --write --rebuild-indexes"
---

SKILL: Script Header and Index Sync

Goal
Keep script metadata and generated index files accurate for all managed script scopes.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run staged or full enforcement depending on change scope.
2. Repair missing/placeholder tags and regenerate indexes.
3. Review index diffs for unexpected script classification changes.

Command examples
```bash
node tests/unit/script-docs.test.js --staged --write --stage --autofill
node tests/unit/script-docs.test.js --enforce-existing --write --rebuild-indexes
```

Deliverable Format
- Header compliance summary for affected scripts.
- Updated script-index files with regeneration scope noted.

Failure Modes / Fallback
- If staged mode misses expected scripts, switch to explicit `--files` or full enforce mode.
- If index churn is large, split regeneration from functional changes for easier review.

Validation Checklist
- [ ] No missing required tags remain.
- [ ] Group and aggregate indexes are synchronized.
- [ ] Generated changes are staged only when requested.
