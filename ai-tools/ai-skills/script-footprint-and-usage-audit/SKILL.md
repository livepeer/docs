---
name: script-footprint-and-usage-audit
description: Audit script sprawl, duplicate/fixture placeholders, backup artifacts, and run-context drift across tools/tests/tasks scripts.
---

SKILL: Script Footprint and Usage Audit

Goal
Identify script quality and maintenance risks that increase repo complexity and CI friction.

Command
```bash
node tools/scripts/script-footprint-and-usage-audit.js --scope full
```

Outputs
- `tasks/reports/repo-ops/script-footprint-and-usage-audit.md`
- `tasks/reports/repo-ops/script-footprint-and-usage-audit.json`

Checks
- Backup artifacts (`*.bak`, `*.bak2`)
- Placeholder scripts and failing fixtures
- Duplicate root/test script pairs
- Large report artifacts impacting repo performance
