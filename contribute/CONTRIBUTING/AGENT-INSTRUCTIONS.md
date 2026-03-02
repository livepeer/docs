# Agent Instructions for Git Hooks

This document provides specific instructions for AI agents working on this repository.

## MANDATORY: Install Git Hooks

Before making any changes, agents MUST ensure git hooks are installed:

```bash
./.githooks/install.sh
```

## Codex Task Isolation Standard (Implementation Tasks)

For implementation work on agent branches, use:

1. Branch name: `codex/<issue-id>-<slug>`
2. Contract file: `.codex/task-contract.yaml`
3. PR sections: `Scope`, `Validation`, `Follow-up Tasks`

Enforcement behavior:

- `pre-commit` validates contract presence/schema on `codex/*`.
- `pre-push` validates contract scope and blocks non-fast-forward pushes by default on `codex/*`.
- CI (`tests/run-pr-checks.js`) validates contract and required PR body sections on `codex/*`.

PR autofill command:

```bash
node tools/scripts/create-codex-pr.js --create
```

The command generates `.codex/pr-body.generated.md` from task-contract fields and uses it as `gh pr create --body-file`.
For `codex/*` PRs, CI requires the generated marker in the PR body; this command is the supported path to satisfy that gate.

Minimal contract example:

```yaml
task_id: 1234
base_branch: docs-v2
branch: codex/1234-fix-scope
scope_in:
  - tests/
  - .githooks/
acceptance_checks:
  - node tests/run-pr-checks.js --base-ref docs-v2
```

## How Hooks Work

The pre-commit hook runs automatically when you attempt to commit. It:

1. **Scans staged files** - Checks all `.jsx`, `.tsx`, `.js`, `.mdx` files
2. **Runs style checks** - Validates against style guide rules
3. **Runs verification** - Executes syntax and validation checks
4. **Blocks commits** - Prevents commits with violations

## What Gets Checked

### Style Guide Violations (Blocks Commit)

- `ThemeData` or `themeStyles.jsx` imports → **BLOCKED**
- Hardcoded theme colors (`#3CB540`, `#2b9a66`, etc.) → **BLOCKED**
- Relative imports to snippets → **WARNING**
- `@mintlify/components` imports → **WARNING**
- React hook imports → **WARNING**

### Verification Checks (Blocks Commit)

- Invalid MDX frontmatter → **BLOCKED**
- Invalid JSON syntax → **BLOCKED**
- Shell script syntax errors → **BLOCKED**
- JavaScript syntax errors → **BLOCKED**
- Invalid Mintlify config → **BLOCKED**
- Browser render failures → **BLOCKED** (if `mint dev` is running)

## Agent Workflow

### Before Committing

1. **Check hook is installed:**
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. **Stage your changes:**
   ```bash
   git add <files>
   ```

3. **Attempt commit** (hook runs automatically):
   ```bash
   git commit -m "your message"
   ```

4. **If blocked:**
   - Read the error messages
   - Fix violations
   - Try committing again

### Common Violations and Fixes

#### ThemeData Usage

**Error:**
```
❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead
```

**Fix:**
```jsx
// ❌ WRONG
import { ThemeData } from "/snippets/styles/themeStyles.jsx";
<div style={{ color: ThemeData.light.accent }}>

// ✅ CORRECT
<div style={{ color: "var(--accent)" }}>
```

#### Hardcoded Colors

**Error:**
```
⚠️  file.mdx: Contains hardcoded theme colors - use CSS Custom Properties
```

**Fix:**
```jsx
// ❌ WRONG
<div style={{ color: "#3CB540" }}>

// ✅ CORRECT
<div style={{ color: "var(--accent)" }}>
```

#### Relative Imports

**Error:**
```
⚠️  file.jsx: Uses relative imports - use absolute paths from root
```

**Fix:**
```jsx
// ❌ WRONG
import { Component } from "../components/Component.jsx";

// ✅ CORRECT
import { Component } from "/snippets/components/Component.jsx";
```

## Bypassing Hooks

**⚠️ CRITICAL:** Agents MUST NOT bypass hooks without explicit user permission.

The `.github/augment-instructions.md` explicitly states:
- **NEVER** use `--no-verify` flag to bypass hooks
- This is a hard project constraint

If you encounter a false positive:
1. Report it to the user
2. Ask for guidance
3. Do NOT bypass the hook

If a human explicitly needs to edit `.allowlist`, they must commit with:

```bash
git commit -m "Update .allowlist" --trailer "allowlist-edit=true"
```

If a human explicitly needs to allow file deletions, they must commit with:

```bash
git commit -m "Remove obsolete files" --trailer "allow-deletions=true"
```

## Browser Validation

The hook includes **headless browser validation** that tests MDX files actually render in the browser.

### Requirements

- `mint dev` must be running (or set `MINT_BASE_URL` environment variable)
- Puppeteer must be installed (`npm install` or in `package.json`)

### How It Works

1. Extracts staged MDX files
2. Converts file paths to URLs
3. Tests each page in headless Chrome using Puppeteer
4. Checks for:
   - Console errors
   - Page errors
   - Render failures
   - Empty pages

### If Server Not Running

If `mint dev` is not running, browser validation is **skipped** (doesn't block commit). This makes the hook fast for local development.

### For Full Testing

To test all pages (not just staged):
```bash
npm run test:v2-pages
```

## Testing Hooks

To test if hooks are working:

```bash
# Create a test file with a violation
echo 'import { ThemeData } from "/snippets/styles/themeStyles.jsx";' > test-violation.jsx
git add test-violation.jsx
git commit -m "test"  # Should be blocked

# Clean up
rm test-violation.jsx
git reset HEAD test-violation.jsx
```

### Test Browser Validation

```bash
# Start mint dev in one terminal
mint dev

# In another terminal, create a test MDX file
echo '---\ntitle: Test\n---\n# Test' > v2/pages/test.mdx
git add v2/pages/test.mdx
git commit -m "test browser validation"  # Will test in browser
```

## Troubleshooting

### Hook Not Running

```bash
# Reinstall
./.githooks/install.sh

# Verify
ls -la .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### Hook Errors

If the hook itself has errors:

1. Check `.githooks/pre-commit` syntax
2. Check `.githooks/verify.sh` syntax
3. Run manually: `bash .githooks/pre-commit`
4. Report issues to user

## For Forks

When working on a fork:

1. Clone the fork
2. Install hooks: `./.githooks/install.sh`
3. Hooks will work the same way

## Related Documentation

- [Full Git Hooks Documentation](./GIT-HOOKS.md)
- [Style Guide](../../v2/resources/documentation-guide/style-guide.mdx)
- [Agent Prerequisites](../../PLAN/AGENT-PREREQUISITES.md)
- [Augment Instructions](../../.github/augment-instructions.md)
