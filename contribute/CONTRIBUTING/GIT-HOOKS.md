# Git Hooks Documentation

This document explains the git hooks used in this repository to enforce code quality and style guide compliance.

## Overview

Git hooks are scripts that run automatically at certain points in the git workflow. This repository uses a **pre-commit hook** to:

1. **Enforce style guide compliance** - Blocks commits with style violations
2. **Run verification scripts** - Validates syntax and structure
3. **Prevent common mistakes** - Catches errors before they reach the repository

## Pre-commit Hook

### What It Does

The pre-commit hook runs automatically when you run `git commit`. It checks:

#### Style Guide Compliance

- ❌ **ThemeData usage** - Blocks deprecated `ThemeData` imports from `themeStyles.jsx`
- ❌ **Hardcoded colors** - Warns about hex colors that should use CSS Custom Properties
- ⚠️ **Relative imports** - Warns about relative paths (should use absolute paths from root)
- ⚠️ **@mintlify/components imports** - Warns about unnecessary imports (components are global)
- ⚠️ **React hook imports** - Warns about unnecessary React imports (hooks are global)

#### Verification Scripts

- ✅ **MDX syntax** - Validates frontmatter and basic MDX structure
- ✅ **JSON syntax** - Validates JSON files are parseable
- ✅ **Shell script syntax** - Validates shell scripts with `bash -n`
- ✅ **JavaScript syntax** - Validates JS files with `node --check`
- ✅ **Mintlify config** - Validates `docs.json`/`mint.json` syntax
- ✅ **Import paths** - Ensures snippets imports use absolute paths
- ✅ **Browser validation** - Tests MDX files in headless browser (if `mint dev` is running)

#### Test Suite (New)

The pre-commit hook now runs the comprehensive test suite on staged files:

- ✅ **Style Guide Tests** - Comprehensive style guide rule validation
- ✅ **MDX Validation** - Advanced MDX syntax and structure checks
- ✅ **Spelling Tests** - UK English spelling validation using cspell
- ✅ **Quality Checks** - Image alt text, frontmatter completeness, link validation

The test suite runs in fast mode for pre-commit (staged files only, browser tests skipped). For full testing, run `npm test` manually or check CI results.

### Installation

**Prerequisites:**
Before installing git hooks, you must install the test dependencies:

```bash
# Install dependencies (required for hooks to run tests)
cd tools && npm install
```

#### Automatic Installation (Recommended)

```bash
# From repository root
./.githooks/install.sh
```

**Note:** If dependencies are not installed, the hooks will still run but tests will be skipped with a warning. Install dependencies in `tools/` for full test coverage.

#### Manual Installation

```bash
# Copy the hook
cp .githooks/pre-commit .git/hooks/pre-commit

# Make it executable
chmod +x .git/hooks/pre-commit

# Verify installation
ls -la .git/hooks/pre-commit
```

#### For Forks

If you're forking this repository, the hooks are in `.githooks/` but need to be installed:

```bash
# Clone your fork
git clone <your-fork-url>
cd <repo-name>

# Install hooks
./.githooks/install.sh
```

**Note:** Git hooks are not version controlled in `.git/hooks/` (they're in `.githooks/`), so each developer needs to install them.

### How It Works

1. When you run `git commit`, the hook automatically runs
2. It scans all staged files (`.jsx`, `.tsx`, `.js`, `.mdx`)
3. Checks for style guide violations
4. Runs verification scripts
5. **Blocks the commit** if violations are found
6. Shows clear error messages with fixes

### Example Output

#### Success

```
🔍 Checking style guide compliance...
Checking for ThemeData usage (deprecated)...
Checking for hardcoded colors...
Checking for relative imports...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 Running verification checks...
Checking MDX syntax...
Checking JSON syntax...
✓ All verification checks passed!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Style guide compliance check passed!
```

#### Failure

```
🔍 Checking style guide compliance...
Checking for ThemeData usage (deprecated)...
❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
╔═══════════════════════════════════════════════════════════════╗
║  STYLE GUIDE VIOLATIONS DETECTED - COMMIT BLOCKED           ║
╚═══════════════════════════════════════════════════════════════╝

Found 1 violation(s):

❌ file.jsx: Uses deprecated ThemeData - use CSS Custom Properties instead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📖 MANDATORY: Read the Style Guide before committing:
   v2/pages/07_resources/documentation-guide/style-guide.mdx

Key Rules:
  • Use CSS Custom Properties: var(--accent), var(--text), etc.
  • NEVER use ThemeData from themeStyles.jsx (deprecated)
  • NEVER hardcode hex colors that should adapt to theme
  • Use absolute imports: /snippets/components/...
  • Mintlify components are global (no imports needed)
  • React hooks are global (no imports needed)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Commit blocked. Fix violations and try again.
```

## File Structure

```
.githooks/
├── pre-commit          # Main pre-commit hook (source)
├── verify.sh           # Verification script (runs syntax checks)
├── install.sh          # Installation script
└── README.md           # Quick reference

.git/hooks/
└── pre-commit          # Active hook (installed from .githooks/)
```

## Browser Validation

The pre-commit hook includes **headless browser validation** to catch MDX files that pass syntax checks but fail to render in the browser.

### How It Works

1. **Extracts staged MDX files** - Only tests files you're committing
2. **Converts to URLs** - Maps file paths to Mintlify URLs
3. **Tests in Puppeteer** - Visits each page in headless Chrome
4. **Checks for errors**:
   - Console errors
   - Page errors
   - Render failures
   - Empty pages
   - Request failures

### Requirements

- **Node.js** - Must be installed
- **Puppeteer** - Must be in `package.json` devDependencies
- **Mintlify server** - `mint dev` must be running (or set `MINT_BASE_URL`)

### Usage

The browser validation runs automatically if:
- Puppeteer is installed (`npm install` or in `package.json`)
- `mint dev` is running (or `MINT_BASE_URL` is set)

If the server isn't running, the check is **skipped** (doesn't block commit).

### Example Output

```
🌐 Browser validation: Testing 3 staged MDX file(s)...
✅ Server accessible at http://localhost:3000

  Testing v2/pages/07_resources/documentation-guide/style-guide.mdx... ✅
  Testing v2/pages/07_resources/documentation-guide/snippets-inventory.mdx... ✅
  Testing v2/pages/07_resources/documentation-guide/component-library.mdx... ❌
     Error: Failed to resolve import: /snippets/components/Component.jsx

✅ All 2 page(s) rendered successfully in browser
❌ 1 of 3 page(s) failed browser validation:

  v2/pages/07_resources/documentation-guide/component-library.mdx:
    - Failed to resolve import: /snippets/components/Component.jsx

💡 Fix errors and try committing again.
```

### Performance

- **Limited to 10 pages** - Pre-commit only tests up to 10 staged MDX files
- **15 second timeout** - Each page has a 15 second timeout
- **Fast failure** - Stops on first error for speed

For full site testing, use: `npm run test:v2-pages`

## Customization

### Adding New Checks

#### Add to Style Guide Checks

Edit `.githooks/pre-commit` and add a new check section:

```bash
# Check 6: Your new check
echo "Checking for [your check]..."
for file in $STAGED_FILES; do
    if [ -f "$file" ]; then
        if grep -q "pattern-to-check" "$file" 2>/dev/null; then
            WARNINGS+=("❌ $file: Your error message")
            VIOLATIONS=$((VIOLATIONS + 1))
        fi
    fi
done
```

#### Add to Verification Script

Edit `.githooks/verify.sh` and add a new check:

```bash
# Check 7: Your new verification
echo "Checking [your check]..."
if command -v your-tool &>/dev/null; then
    # Run your check
    if ! your-tool check "$file"; then
        WARNINGS+=("❌ $file: Your error message")
        VIOLATIONS=$((VIOLATIONS + 1))
    fi
fi
```

### Disabling Specific Checks

To temporarily disable a check, comment it out in `.githooks/pre-commit`:

```bash
# Check 1: ThemeData import/usage (DEPRECATED)
# echo "Checking for ThemeData usage (deprecated)..."
# ... (commented out)
```

### Making Checks Warnings Instead of Errors

Change the exit code or remove the violation increment:

```bash
# Warning only (doesn't block commit)
WARNINGS+=("⚠️  $file: Warning message")
# Don't increment VIOLATIONS

# Error (blocks commit)
WARNINGS+=("❌ $file: Error message")
VIOLATIONS=$((VIOLATIONS + 1))
```

## Bypassing Hooks (Not Recommended)

**⚠️ WARNING:** Only bypass hooks if you have a legitimate reason and understand the consequences.

```bash
# Bypass pre-commit hook
git commit --no-verify -m "message"
```

**Why this is discouraged:**
- Violates style guide compliance
- May introduce errors that break the build
- Makes code review harder
- Can cause issues for other developers

## Troubleshooting

### Hook Not Running

1. **Check if hook is installed:**
   ```bash
   ls -la .git/hooks/pre-commit
   ```

2. **Check if hook is executable:**
   ```bash
   chmod +x .git/hooks/pre-commit
   ```

3. **Reinstall:**
   ```bash
   ./.githooks/install.sh
   ```

### False Positives

If a check incorrectly flags valid code:

1. **Check the style guide** - Ensure your code follows the guidelines
2. **Review the error message** - The hook explains what's wrong
3. **Fix the violation** - Follow the style guide recommendations
4. **If it's a bug** - Report it or fix the hook pattern

### Hook Too Slow

If the hook takes too long:

1. **Check verification scripts** - Some checks (like Mintlify build) can be slow
2. **Make checks optional** - Comment out slow checks for local development
3. **Use `--no-verify`** - Only if absolutely necessary (see warning above)

## For CI/CD

These hooks are designed for local development. For CI/CD:

1. **Use GitHub Actions** - Run similar checks in CI
2. **Reuse hook logic** - Extract checks into CI scripts
3. **Fail fast** - Block PRs if checks fail

Example GitHub Actions workflow:

```yaml
name: Pre-commit Checks
on: [pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run style guide checks
        run: ./.githooks/pre-commit
```

## Style Guide Reference

The hooks enforce rules from:

- **Style Guide:** `v2/pages/07_resources/documentation-guide/style-guide.mdx`
- **Component Library:** `v2/pages/07_resources/documentation-guide/component-library.mdx`
- **Mintlify Behavior:** `snippets/snippetsWiki/mintlify-behaviour.mdx`

## Related Documentation

- [Style Guide](../v2/pages/07_resources/documentation-guide/style-guide.mdx)
- [Component Library](../v2/pages/07_resources/documentation-guide/component-library.mdx)
- [Contribution Guide](./CONTRIBUTING.md) (if exists)
- [Agent Prerequisites](../PLAN/AGENT-PREREQUISITES.md)

## Support

If you encounter issues:

1. Check this documentation
2. Review the style guide
3. Check `.githooks/README.md` for quick reference
4. Open an issue or ask in the repository
