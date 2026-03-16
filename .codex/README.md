# Codex Local Locking

Local lock files in `.codex/locks-local/` prevent overlapping agent edits across concurrent Codex sessions.

## Why local

- Locks are operational state, not source artifacts.
- The directory is gitignored to avoid PR churn and merge conflicts.

## Lock schema

Each lock is a JSON file with this shape:

```json
{
  "lock_id": "string",
  "task_id": "string",
  "branch": "string",
  "worktree_path": "absolute-path",
  "owner": "string",
  "scope_in": ["repo-relative-path-or-prefix"],
  "created_at": "ISO-8601",
  "expires_at": "ISO-8601",
  "status": "active|released",
  "released_at": "ISO-8601 (optional)"
}
```

## Lifecycle

1. Create branch + contract + lock:
   - `node tools/scripts/codex/task-preflight.js --task <id> --slug <slug> --scope <a,b,c>`
   - Default behavior provisions a managed worktree at `../codex-worktrees/<task-id>-<slug>`.
   - Use `--in-place` only when the task must reuse the current worktree.
2. Validate lock before commit/push:
   - `node tools/scripts/codex/validate-locks.js --branch codex/<id>-<slug> --staged`
3. Finalize checks before PR:
   - `node tools/scripts/codex/task-finalize.js --branch codex/<id>-<slug>`
4. Commit or merge the task commit onto `docs-v2-dev`.
   - A codex branch commit is not task completion by itself.
5. Release lock only after `docs-v2-dev` contains the task commit:
   - `node tools/scripts/codex/lock-release.js --branch codex/<id>-<slug>`
6. Cleanup merged local worktrees and stale local codex branches only after `docs-v2-dev` contains the task commit:
   - `node tools/scripts/codex/task-cleanup.js --branch codex/<id>-<slug> --apply`
