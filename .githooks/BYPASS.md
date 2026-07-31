# Pre-Commit Hook Bypass Flags

The pre-commit hook enforces **hard gates only** (syntax, security, safety).
All soft checks (style, copy, components, governance) run in GitHub Actions PR workflows.

**Use bypass flags sparingly and only when necessary.**

## Human-Only Override Flags

### `--trailer "allowlist-edit=true"` — HUMANS ONLY

**CRITICAL:** The `.allowlist` file is **PROTECTED** and cannot be edited by AI agents.

```bash
git commit -m "Update .allowlist" --trailer "allowlist-edit=true"
```

Legacy fallback: `ALLOWLIST_EDIT=1 git commit -m "..."`

### `--trailer "allow-deletions=true"` — HUMANS ONLY

**CRITICAL:** File deletions are blocked by default to prevent accidental data loss.

```bash
git commit -m "Remove obsolete file" --trailer "allow-deletions=true"
```

Legacy fallback: `ALLOW_DELETIONS=1 git commit -m "..."`

### `--trailer "allow-main-commit=true"` — HUMANS ONLY

Allows a Codex session to commit to docs-v2 (normally blocked).

```bash
ALLOW_MAIN_COMMIT=1 git commit -m "..." --trailer "allow-main-commit=true"
```

## Available Flags

### `SKIP_STRUCTURE_CHECK=1`

Bypasses:
- Root directory allowlist enforcement
- v1/ frozen directory protection

```bash
SKIP_STRUCTURE_CHECK=1 git commit -m "Emergency fix"
```

### `SKIP_ALL=1`

Bypasses ALL hard gate checks. **Use with extreme caution!**

```bash
SKIP_ALL=1 git commit -m "Emergency commit - all checks bypassed"
```

## Removed Flags (no longer needed)

The following flags existed in the old pre-commit but are no longer relevant
since those checks now run in PR workflows only:

- ~~`SKIP_STYLE_CHECK=1`~~ — style checks run in PR workflow
- ~~`SKIP_VERIFICATION=1`~~ — verification runs in PR workflow
- ~~`SKIP_TESTS=1`~~ — tests run in PR workflow
- ~~`DISABLE_PRECOMMIT_STAGED_CACHE=1`~~ — cache removed

## When to Use Bypass Flags

### Acceptable:
- **Emergency hotfixes** — critical production issues
- **Migration work** — structure intentionally changing

### NOT Acceptable:
- **Regular commits** — normal development should pass hard gates
- **Skipping to avoid fixing** — fix the issues instead
