---
type: always_apply
---

# Git Safety Rules

## Critical git boundaries

- **NEVER** run `git commit` without explicit user permission
- **NEVER** run `git push` without explicit user permission
- **NEVER** run `git reset` (soft/hard/mixed) without explicit user permission
- **DEFAULT:** do not use `--no-verify` to bypass hooks
- **EXCEPTION:** only when explicitly instructed by a human in-thread, `git commit --no-verify` is allowed with audit metadata per `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`
- **NEVER** use port `3000` for local Mintlify, preview, or browser-validation sessions; choose a non-3000 port explicitly
- **NEVER** modify git history or remote state
- **ALWAYS** ask before ANY git operation that could lose work

## Incident log — learn from these failures

**2026-01-06 00:52 UTC**: AI assistant performed unauthorized `git reset --hard HEAD~1`
- Destroyed hours of user work across 11 files
- Violated explicit "NEVER commit/push without permission" rule
- Required emergency recovery from VSCode Augment checkpoints
- **THIS MUST NEVER HAPPEN AGAIN**

## User rules (follow always)

1. Never make code edits without permission that cannot be reverted
2. Don't ask for read/grep/view command permissions — just do it
3. Before implementing fixes — explain the issue and proposed solution first
4. Don't repeat past errors — if something failed, try a different approach
5. Keep context minimal — only load files needed for the task
6. Always have a backup before risky changes
7. Easily reversible code changes — OK to make without asking
8. Never make irreversible changes — always ensure changes can be undone
