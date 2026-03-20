---
name: docs-coverage-and-route-integrity-audit
version: "1.0"
description: >-
  Audit docs navigation coverage, route integrity, and orphaned documentation files so route drift is visible before it becomes broken documentation behavior.
invoke_when:
  - "audit docs route integrity"
  - "find orphan docs files"
  - "check docs navigation coverage against repo files"
---

SKILL: Docs Coverage and Route Integrity Audit

Goal
Surface navigation and route correctness gaps before they become broken-doc regressions.

Command
```bash
node tools/scripts/docs-coverage-and-route-integrity-audit.js --scope full
```

Outputs
- `tasks/reports/repo-ops/docs-coverage-and-route-integrity-audit.md`
- `tasks/reports/repo-ops/docs-coverage-and-route-integrity-audit.json`

Checks
- Missing routes from navigation reports
- Legacy `/v2/pages/` references
- Candidate non-nav docs files for triage
