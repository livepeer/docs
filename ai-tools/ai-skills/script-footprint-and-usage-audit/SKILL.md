---
name: script-footprint-and-usage-audit
version: "1.0"
description: >-
  Audit script sprawl, duplicate automation, placeholder fixtures, and run-context drift so maintainers can reduce repository complexity without losing governance coverage.
invoke_when:
  - "audit script sprawl in the repo"
  - "find duplicate or obsolete scripts"
  - "review script footprint and usage drift"
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
