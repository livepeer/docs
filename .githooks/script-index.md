# .githooks Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Domain |
|---|---|---|---|
| `.githooks/pre-commit` | Pre-commit hook — hard gates only (syntax, security, safety). All soft checks run in GitHub Actions PR workflows. | `bash .githooks/pre-commit [flags]` | docs |
| `.githooks/pre-commit-no-deletions` | Variant pre-commit hook that blocks file deletions (safety net for content preservation) | `bash .githooks/pre-commit-no-deletions [flags]` | docs |
| `.githooks/pre-push` | Pre-push hook — blocks push if AI stash files present, codex locks stale, or task contract invalid | `bash .githooks/pre-push [flags]` | docs |
{/* SCRIPT-INDEX:END */}
