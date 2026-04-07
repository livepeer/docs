---
name: component-layout-governance
description: >-
  Validate page-type layout contracts, enforce allowed component patterns, and surface structural composition problems before inconsistent documentation pages reach readers or reviewers. Use when validating page layout contracts, enforcing allowed docs components, or checking page composition against layout rules.
metadata:
  version: "1.2"
  category: governance
---

SKILL: Component Layout Governance

Goal
Prevent inconsistent page composition by validating against explicit layout contracts.

Command
```bash
node operations/scripts/validators/components/library/component-layout-governance.js --scope full
```

Outputs
- `workspace/reports/repo-ops/component-layout-governance.md`
- `workspace/reports/repo-ops/component-layout-governance.json`

Policy Source
- `tools/config/component-layout-profile.json`
