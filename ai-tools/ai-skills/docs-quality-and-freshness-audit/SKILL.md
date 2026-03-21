---
name: docs-quality-and-freshness-audit
version: "1.1"
category: audit
description: >-
  Audit content freshness signals, thin-page risks, and placeholder markers so maintainers can prioritize incomplete or stale documentation before publication decisions.
invoke_when:
  - "audit docs freshness and todo markers"
  - "find thin or stale docs pages"
  - "review content quality readiness"
---

SKILL: Docs Quality and Freshness Audit

Goal
Measure content readiness and prioritize cleanup of incomplete or stale documentation sections.

Command
```bash
node tools/scripts/audits/content/quality/docs-quality-and-freshness-audit.js --scope full
```

Outputs
- `workspace/reports/repo-ops/docs-quality-and-freshness-audit.md`
- `workspace/reports/repo-ops/docs-quality-and-freshness-audit.json`

Checks
- `TODO`, `TBD`, `Coming Soon`, `PreviewCallout`
- Thin-content pages
- Freshness-risk markers from source text
