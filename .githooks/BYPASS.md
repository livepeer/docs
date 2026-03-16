# Pre-Commit Hook Bypass Flags

The pre-commit hook can be bypassed using commit trailers and environment variables. **Use these flags sparingly and only when necessary.**

## Human-Only Override Flags

### `--trailer "allowlist-edit=true"` ⚠️ HUMANS ONLY

**CRITICAL:** The `.allowlist` file is **PROTECTED** and cannot be edited by AI agents. The file contains the explicit rule: "IF YOU ARE AN AI YOU ARE ABSOLUTELY NOT ALLOWED TO EDIT THIS FILE."

**This flag is for HUMANS ONLY. AI agents must never use this flag.**

**Usage (HUMANS ONLY):**
```bash
git commit -m "Update .allowlist to add new root file" --trailer "allowlist-edit=true"
```

**What it does:**
- Allows editing the `.allowlist` file
- Shows a warning that the flag should only be used by humans
- Still runs all other pre-commit checks

**Legacy fallback (still supported):**
```bash
ALLOWLIST_EDIT=1 git commit -m "Update .allowlist to add new root file"
```

**⚠️ WARNING:** AI agents are explicitly forbidden from using this flag. Only human users may edit `.allowlist`.

### `--trailer "allow-deletions=true"` ⚠️ HUMANS ONLY

**CRITICAL:** File deletions are blocked by default to prevent accidental data loss.

**This flag is for HUMANS ONLY. AI agents must never use this flag.**

**Usage (HUMANS ONLY):**
```bash
git commit -m "Remove obsolete file" --trailer "allow-deletions=true"
```

**What it does:**
- Allows staged file deletions outside `tasks/`
- Shows a warning that the flag should only be used by humans
- Still runs all other pre-commit checks

**Legacy fallback (still supported):**
```bash
ALLOW_DELETIONS=1 git commit -m "Remove obsolete file"
```

**⚠️ WARNING:** AI agents are explicitly forbidden from using this flag. Only human users may allow deletions.

## Available Flags

### `SKIP_STRUCTURE_CHECK=1`
Bypasses structure validation checks:
- Root directory allowlist enforcement
- Snippets directory structure checks
- v1/ frozen directory protection

**Usage:**
```bash
SKIP_STRUCTURE_CHECK=1 git commit -m "Emergency fix"
```

### `SKIP_STYLE_CHECK=1`
Bypasses style guide compliance checks:
- ThemeData usage checks
- Hardcoded color checks
- Relative import checks
- React/Mintlify import checks

**Usage:**
```bash
SKIP_STYLE_CHECK=1 git commit -m "Temporary style change"
```

### `SKIP_VERIFICATION=1`
Bypasses verification scripts:
- MDX syntax validation
- JSON syntax validation
- Shell script validation
- JavaScript/JSX validation
- Mintlify configuration checks
- Import path validation

**Usage:**
```bash
SKIP_VERIFICATION=1 git commit -m "Skip verification"
```

### `SKIP_TESTS=1`
Bypasses test suite execution:
- Unit tests
- Integration tests
- Browser tests

**Usage:**
```bash
SKIP_TESTS=1 git commit -m "Skip tests"
```

### `SKIP_ALL=1`
Bypasses ALL checks. **Use with extreme caution!**

**Usage:**
```bash
SKIP_ALL=1 git commit -m "Emergency commit - all checks bypassed"
```

## When to Use Bypass Flags

### ✅ Acceptable Use Cases:
- **Emergency hotfixes** - Critical production issues
- **WIP commits** - Work in progress that will be fixed before merge
- **Temporary debugging** - Adding debug code that will be removed
- **Migration work** - During active migration when structure is intentionally changing

### ❌ NOT Acceptable:
- **Regular commits** - Normal development should pass all checks
- **Permanent bypass** - Don't make bypassing a habit
- **Skipping to avoid fixing issues** - Fix the issues instead
- **Generated artifact churn** - A stale managed artifact is a signal to run the declared generator or fix governance, not a reason to bypass hooks

## Best Practices

1. **Fix issues instead of bypassing** - Bypass flags are for emergencies, not convenience
2. **Document why** - If you must bypass, explain why in the commit message
3. **Follow up** - If you bypassed checks, fix the issues in a follow-up commit
4. **Review carefully** - If bypassing, manually verify your changes are correct
5. **Do not hide generated-artifact failures** - targeted generated freshness failures should be resolved, not skipped

## Examples

### Emergency Hotfix
```bash
SKIP_ALL=1 git commit -m "HOTFIX: Critical security patch - bypassing checks for speed"
```

### WIP Commit
```bash
SKIP_STYLE_CHECK=1 git commit -m "WIP: Adding feature - will fix style issues before merge"
```

### Migration Work
```bash
SKIP_STRUCTURE_CHECK=1 git commit -m "Migration: Moving files - structure intentionally changing"
```

## Warning

Bypassing pre-commit hooks can lead to:
- Broken builds
- Style violations
- Structure violations
- Broken pages
- Merge conflicts

**Always verify your changes work correctly after bypassing checks.**

## Generated Artifact Guidance

Generated-file churn is not, by itself, a valid reason to bypass hooks.

If a generated-artifact check fails:

1. Read the artifact name and remediation command in the hook output.
2. Run the declared generator for that managed artifact.
3. Review whether the generated diff belongs in your current task scope.
4. If the diff is unexpectedly broad, treat that as a governance defect instead of bypassing the hook.

Do not use bypass flags to force through stale `docs-index.json`, stale docs-guide catalogs, or staged local-only report output.
