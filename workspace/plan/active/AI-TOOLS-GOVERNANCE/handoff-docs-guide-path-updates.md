---
title: Handoff — docs-guide/ path updates for AI adapter files
from: REPO-STRUCTURE-GOV
to: AI-TOOLS-GOVERNANCE agent
created: 2026-03-21
trigger: when docs-guide/ Phase 2A-IV structural cleanup is approved and ready to run
---

# Handoff: Update AI adapter files for docs-guide/ restructure

## Context

REPO-STRUCTURE-GOV is restructuring `docs-guide/`. When Phase 2A-IV executes,
the following paths will change and all AI adapter files must be updated in the same PR.

## Path changes that affect AI adapter files

| Old path | New path | Type of change |
|----------|----------|----------------|
| `docs-guide/catalog/ai-tools.mdx` | `docs-guide/features/ai-tools.mdx` | Move (cat → features) |
| `docs-guide/frameworks/component-framework.mdx` | *(deleted)* | Deletion |

## Files to update

All of these reference `docs-guide/policies/` paths which are NOT changing —
but verify no stale refs exist after the move above:

- `AGENTS.md` — references `docs-guide/policies/agent-governance-framework.mdx` and `root-allowlist-governance.mdx` (verify still correct)
- `.claude/CLAUDE.md` — directs to AGENTS.md; verify chain is intact
- `.cursor/rules/repo-governance.mdc` — references same 2 policy files (verify)
- `.windsurf/` rules — verify
- `.codex/task-contract.yaml` — `docs-guide/` is a protected path; verify the path scope still resolves correctly after catalog restructure

## Specific action required

1. After REPO-STRUCTURE-GOV Phase 2A-IV runs, grep all adapter files for any reference to:
   - `docs-guide/catalog/ai-tools`
   - `docs-guide/frameworks/component-framework`
   - `docs-guide/indexes/` (legacy — should already be absent; confirm)
2. Update any stale references found
3. Confirm no adapter file points to a path that no longer exists
4. This must land in the same PR as the structural changes (not a follow-up)

## What is NOT changing (no update needed)

- `docs-guide/policies/*` — all policy paths stay in place
- `docs-guide/frameworks/component-governance.mdx` — canonical, stays
- `docs-guide/catalog/` generated files — paths stay, only archive files move
