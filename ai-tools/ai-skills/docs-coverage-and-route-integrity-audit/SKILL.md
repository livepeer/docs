---
name: docs-coverage-and-route-integrity-audit
description: >-
  Audit docs navigation coverage, route integrity, and orphaned documentation files so route drift is visible before it becomes broken documentation behavior. Use when auditing docs route integrity, finding orphan docs files, or checking navigation coverage against repo files.
metadata:
  version: "1.2"
  category: audit
---

SKILL: Docs Coverage and Route Integrity Audit

Goal
Surface navigation and route correctness gaps before they become broken-doc regressions.

Command
```bash
# Script not yet implemented. Planned path:
# node operations/scripts/audits/content/coverage/docs-coverage-and-route-integrity-audit.js --scope full
```

Outputs
- `workspace/reports/repo-ops/docs-coverage-and-route-integrity-audit.md`
- `workspace/reports/repo-ops/docs-coverage-and-route-integrity-audit.json`

Checks
- Missing routes from navigation reports
- Legacy `/v2/pages/` references
- Candidate non-nav docs files for triage
