---
name: cleanup-quarantine-manager
description: >-
  Classify likely obsolete repository artifacts, quarantine them with reversible manifests, and guide safe cleanup review before any deletion or irreversible repository pruning. Use when quarantining obsolete repo artifacts safely, reviewing cleanup candidates before deletion, or generating a reversible cleanup manifest.
metadata:
  version: "1.2"
  category: governance
---

SKILL: Cleanup Quarantine Manager

Goal
Reduce repo noise safely by quarantining likely obsolete artifacts before any deletion.

Commands
```bash
node operations/scripts/remediators/content/repair/quarantine-manager.js
node operations/scripts/remediators/content/repair/quarantine-manager.js --apply
```

Outputs
- `workspace/reports/repo-ops/cleanup-quarantine-manifest.json`
- `workspace/reports/repo-ops/cleanup-quarantine-manifest.md`

Rules
- Default action is `quarantine` for suspicious backup/legacy artifacts.
- Never hard-delete in initial pass.
