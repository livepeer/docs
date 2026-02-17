# Pre-Commit Hook Bypass Flags

The pre-commit hook can be bypassed using environment variables. **Use these flags sparingly and only when necessary.**

## Human-Only Override Flag

### `ALLOW_WHITELIST_EDIT=1` ⚠️ HUMANS ONLY

**CRITICAL:** The `.whitelist` file is **PROTECTED** and cannot be edited by AI agents. The file contains the explicit rule: "IF YOU ARE AN AI YOU ARE ABSOLUTELY NOT ALLOWED TO EDIT THIS FILE."

**This flag is for HUMANS ONLY. AI agents must never use this flag.**

**Usage (HUMANS ONLY):**
```bash
ALLOW_WHITELIST_EDIT=1 git commit -m "Update .whitelist to add new root file"
```

**What it does:**
- Allows editing the `.whitelist` file
- Shows a warning that the flag should only be used by humans
- Still runs all other pre-commit checks

**⚠️ WARNING:** AI agents are explicitly forbidden from using this flag. Only human users may edit `.whitelist`.

## Available Flags

### `SKIP_STRUCTURE_CHECK=1`
Bypasses structure validation checks:
- Root directory whitelist enforcement
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

## Best Practices

1. **Fix issues instead of bypassing** - Bypass flags are for emergencies, not convenience
2. **Document why** - If you must bypass, explain why in the commit message
3. **Follow up** - If you bypassed checks, fix the issues in a follow-up commit
4. **Review carefully** - If bypassing, manually verify your changes are correct

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
