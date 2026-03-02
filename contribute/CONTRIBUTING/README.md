# Contributing to Livepeer Documentation

Welcome! This guide will help you contribute to the Livepeer documentation.

For optional maintainer pilot workflows using visual-explainer, see the canonical docs-guide section: [Optional Visual-Explainer Workflows (Pilot)](../../docs-guide/contributing/contributing.mdx#optional-visual-explainer-workflows-pilot).

## Quick Start

1. **Read the Style Guide** - `v2/resources/documentation-guide/style-guide.mdx`
2. **Install Git Hooks** - See [Git Hooks Documentation](./GIT-HOOKS.md)
3. **Fork and Clone** - Create your fork and clone it locally
4. **Make Changes** - Follow the style guide and component library
5. **Test Locally** - Run `lpd dev` to preview changes (auto-installs/updates hooks). If PATH is not updated yet, use `bash lpd dev`.
6. **Submit PR** - Open a pull request with your changes

## Essential Reading

Before making any changes, read:

1. **[Style Guide](../v2/resources/documentation-guide/style-guide.mdx)** - Production-grade styling guidelines
2. **[Component Library](../v2/resources/documentation-guide/component-library.mdx)** - Available components
3. **[Git Hooks](./GIT-HOOKS.md)** - Pre-commit hook documentation
4. **[Mintlify Behavior Guide](../../snippets/snippetsWiki/mintlify-behaviour.mdx)** - Mintlify-specific patterns

## Git Hooks

This repository uses git hooks to enforce quality standards. **You must install them:**

```bash
./.githooks/install.sh
```

See [Git Hooks Documentation](./GIT-HOOKS.md) for details.

## Development Setup

```bash
# Install Mintlify CLI
npm i -g mintlify

# Run development server
lpd dev
# or without PATH setup
bash lpd dev

# Optional: add LP CLI script ignore rules
cp tools/cli/lpdignore.example .lpdignore
```

## Style Guide Rules

**Critical Rules:**

- ✅ Use CSS Custom Properties: `var(--accent)`, `var(--text)`, etc.
- ❌ NEVER use `ThemeData` from `themeStyles.jsx` (deprecated)
- ❌ NEVER hardcode hex colors that should adapt to theme
- ✅ Use absolute imports: `/snippets/components/...`
- ✅ Mintlify components are global (no imports needed)
- ✅ React hooks are global (no imports needed)

## Testing

Before submitting:

- [ ] Run `lpd dev` (or `bash lpd dev`) and verify pages render correctly
- [ ] Test in both light and dark modes
- [ ] Check all links work
- [ ] Verify no console errors
- [ ] Ensure git hooks pass (they run automatically on commit)

## Resources

- [Documentation Guide](../v2/resources/documentation-guide/documentation-guide.mdx)
- [Contribute to the Docs](../v2/resources/documentation-guide/contribute-to-the-docs.mdx)
- [Snippets Inventory](../v2/resources/documentation-guide/snippets-inventory.mdx)
