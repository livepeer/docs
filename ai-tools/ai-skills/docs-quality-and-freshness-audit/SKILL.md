---
name: docs-quality-and-freshness-audit
description: Audit content freshness and quality markers such as TODO/TBD/Coming Soon and thin-content risks.
---

SKILL: Docs Quality and Freshness Audit

Goal
Measure content readiness and prioritize cleanup of incomplete or stale documentation sections.

Command
```bash
node tools/scripts/docs-quality-and-freshness-audit.js --scope full
```

Outputs
- `tasks/reports/repo-ops/docs-quality-and-freshness-audit.md`
- `tasks/reports/repo-ops/docs-quality-and-freshness-audit.json`

Checks
- `TODO`, `TBD`, `Coming Soon`, `PreviewCallout`
- Thin-content pages
- Freshness-risk markers from source text
