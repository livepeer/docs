# Git Hooks - Quick Reference

This directory contains git hooks for enforcing repository standards.

**📖 Full Documentation:** See [docs/CONTRIBUTING/GIT-HOOKS.md](../../docs/CONTRIBUTING/GIT-HOOKS.md)

## Quick Start

```bash
# Install hooks
./.githooks/install.sh
```

## Pre-commit Hook

The pre-commit hook enforces style guide compliance and runs verification scripts:

### Style Guide Checks

- ❌ **ThemeData usage** - Blocks deprecated ThemeData imports
- ❌ **Hardcoded colors** - Warns about hardcoded hex colors that should use CSS variables
- ⚠️ **Relative imports** - Warns about relative imports (should use absolute paths)
- ⚠️ **@mintlify/components imports** - Warns about unnecessary imports (components are global)
- ⚠️ **React hook imports** - Warns about unnecessary React imports (hooks are global)

### Verification Scripts

The hook also runs `.githooks/verify.sh` which checks:

- ✅ **MDX syntax** - Validates frontmatter and basic MDX structure
- ✅ **JSON syntax** - Validates JSON files are parseable
- ✅ **Shell script syntax** - Validates shell scripts with `bash -n`
- ✅ **JavaScript syntax** - Validates JS files with `node --check`
- ✅ **Mintlify config** - Validates docs.json/mint.json syntax
- ✅ **Import paths** - Ensures snippets imports use absolute paths
- ✅ **Browser validation** - Tests MDX files in headless browser (requires `mint dev` running)

## Installation

To install the pre-commit hook:

```bash
cp .githooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

Or use the install script:

```bash
./.githooks/install.sh
```

## Manual Installation

If the install script doesn't work:

```bash
# Copy the hook
cp .githooks/pre-commit .git/hooks/pre-commit

# Make it executable
chmod +x .git/hooks/pre-commit

# Verify it's installed
ls -la .git/hooks/pre-commit
```

## Testing

Test the hook by staging a file with a violation:

```bash
# Create a test file with ThemeData (should fail)
echo 'import { ThemeData } from "/snippets/styles/themeStyles.jsx";' > test-violation.jsx
git add test-violation.jsx
git commit -m "test"  # Should be blocked

# Clean up
rm test-violation.jsx
git reset HEAD test-violation.jsx
```

## Bypassing (Not Recommended)

If you absolutely must bypass the hook (not recommended):

```bash
git commit --no-verify -m "message"
```

**Warning:** Only bypass if you have a legitimate reason and understand the style guide violations.

## Style Guide Reference

See: `v2/pages/07_resources/documentation-guide/style-guide.mdx`
