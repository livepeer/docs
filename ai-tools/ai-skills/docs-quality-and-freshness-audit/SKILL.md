---
name: docs-quality-and-freshness-audit
description: >-
  Audit content freshness signals, thin-page risks, and placeholder markers so maintainers can prioritise incomplete or stale documentation before publication decisions. Use when auditing docs freshness, finding thin or stale pages, or reviewing content quality readiness.
metadata:
  version: "1.2"
  category: audit
---

SKILL: Docs Quality and Freshness Audit

Goal
Measure content readiness and prioritize cleanup of incomplete or stale documentation sections.

Command
```bash
node operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js --scope full
```

Outputs
- `workspace/reports/repo-ops/docs-quality-and-freshness-audit.md`
- `workspace/reports/repo-ops/docs-quality-and-freshness-audit.json`

Checks
- `TODO`, `TBD`, `Coming Soon`, `PreviewCallout`
- Thin-content pages
- Freshness-risk markers from source text
