---
name: component-layout-governance
version: "1.1"
category: governance
description: >-
  Validate page-type layout contracts, enforce allowed component patterns, and surface structural composition problems before inconsistent documentation pages reach readers or reviewers.
invoke_when:
  - "validate page layout contracts"
  - "enforce allowed docs components"
  - "check page composition against layout rules"
---

SKILL: Component Layout Governance

Goal
Prevent inconsistent page composition by validating against explicit layout contracts.

Command
```bash
node tools/scripts/validators/components/library/component-layout-governance.js --scope full
```

Outputs
- `workspace/reports/repo-ops/component-layout-governance.md`
- `workspace/reports/repo-ops/component-layout-governance.json`

Policy Source
- `tools/config/component-layout-profile.json`
