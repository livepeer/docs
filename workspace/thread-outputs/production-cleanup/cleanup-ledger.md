# Cleanup Ledger

Master record. Every path the cleanup touches lands here with a decision.

**Branch:** `docs-v2-dev-draft`
**Merge target lane:** `merge/docs-v2-dev-draft-into-docs-v2-2026XXXX`
**Scope rule:** Internal-stays + `.mintignore`'d. One repo, two states.

## Decision vocabulary

| Decision | Meaning |
|---|---|
| `keep` | Stays as-is in production tree |
| `keep-edit` | Stays but needs edits before ship (track in notes) |
| `cut` | Deleted from repo. Tracked in commit |
| `archive` | Moved to `_workspace/archive/` or out of production tree, retained for history |
| `mintignore` | Stays in repo, added to `.mintignore` so it doesn't render |
| `needs-collab` | Cannot decide without Alison — see `needs-collab.md` |
| `mark-gold` | Exemplar — see `gold-standard.md` |

## Ledger

| Path | Surface | Current state | Decision | Reason | Replacement / Next step | Status | Decided |
|---|---|---|---|---|---|---|---|

<!-- Append rows as decisions are made. Group by surface for readability. -->
