---
name: cleanup-quarantine-manager
description: Classify cleanup candidates and apply conservative quarantine moves with reversible manifests.
---

SKILL: Cleanup Quarantine Manager

Goal
Reduce repo noise safely by quarantining likely obsolete artifacts before any deletion.

Commands
```bash
node tools/scripts/cleanup-quarantine-manager.js
node tools/scripts/cleanup-quarantine-manager.js --apply
```

Outputs
- `tasks/reports/repo-ops/cleanup-quarantine-manifest.json`
- `tasks/reports/repo-ops/cleanup-quarantine-manifest.md`

Rules
- Default action is `quarantine` for suspicious backup/legacy artifacts.
- Never hard-delete in initial pass.
