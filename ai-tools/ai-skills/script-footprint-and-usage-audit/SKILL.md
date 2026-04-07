---
name: script-footprint-and-usage-audit
description: >-
  Audit script sprawl, duplicate automation, placeholder fixtures, and run-context drift so maintainers can reduce repository complexity without losing governance coverage. Use when auditing script sprawl, finding duplicate or obsolete scripts, or reviewing script footprint and usage drift.
metadata:
  version: "1.2"
  category: audit
---

SKILL: Script Footprint and Usage Audit

Goal
Identify script quality and maintenance risks that increase repo complexity and CI friction.

Command
```bash
node operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js --scope full
```

Outputs
- `workspace/reports/repo-ops/script-footprint-and-usage-audit.md`
- `workspace/reports/repo-ops/script-footprint-and-usage-audit.json`

Checks
- Backup artifacts (`*.bak`, `*.bak2`)
- Placeholder scripts and failing fixtures
- Duplicate root/test script pairs
- Large report artifacts impacting repo performance
