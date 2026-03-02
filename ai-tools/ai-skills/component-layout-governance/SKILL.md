---
name: component-layout-governance
description: Enforce component layout contracts by page type using required sections, allowed components, and forbidden patterns.
---

SKILL: Component Layout Governance

Goal
Prevent inconsistent page composition by validating against explicit layout contracts.

Command
```bash
node tools/scripts/component-layout-governance.js --scope full
```

Outputs
- `tasks/reports/repo-ops/component-layout-governance.md`
- `tasks/reports/repo-ops/component-layout-governance.json`

Policy Source
- `tools/config/component-layout-profile.json`
