---
type: always_apply
---

# No Deletions Rule

## AIs must never delete files

- **NEVER** delete files — always move files to correct locations instead
- **NEVER** use `git rm` — use `git mv` to move files
- **NEVER** use `rm -rf` on tracked files — move files instead
- **ALWAYS** move files to correct locations per the migration plan
- **ALWAYS** preserve content — no content should be lost

## Why this rule exists

File deletions cause data loss. The repository has lost 223+ files due to deletions instead of moves. Deletions are irreversible.

## What to do instead

- **Moving files:** `git mv old/path new/path`
- **If a file shouldn't exist:** document why, then the human can decide

## Human override

Humans can use `git commit -m "..." --trailer "allow-deletions=true"` if deletion is truly necessary. AIs must never use this override.

## Enforcement

A pre-commit hook blocks all deletions unless the human override trailer is present. AIs must never set this flag.
