---
name: docs-coverage-and-route-integrity-audit
description: Audit docs.json route integrity, legacy path drift, and potential orphan docs files in v2.
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
