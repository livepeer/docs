---
name: cleanup-quarantine-manager
version: "1.1"
category: governance
description: >-
  Classify likely obsolete repository artifacts, quarantine them with reversible manifests, and guide safe cleanup review before any deletion or irreversible repository pruning.
invoke_when:
  - "quarantine obsolete repo artifacts safely"
  - "review cleanup candidates before deletion"
  - "generate a reversible cleanup manifest"
---

SKILL: Cleanup Quarantine Manager

Goal
Reduce repo noise safely by quarantining likely obsolete artifacts before any deletion.

Commands
```bash
node tools/scripts/remediators/content/repair/quarantine-manager.js
node tools/scripts/remediators/content/repair/quarantine-manager.js --apply
```

Outputs
- `workspace/reports/repo-ops/cleanup-quarantine-manifest.json`
- `workspace/reports/repo-ops/cleanup-quarantine-manifest.md`

Rules
- Default action is `quarantine` for suspicious backup/legacy artifacts.
- Never hard-delete in initial pass.
