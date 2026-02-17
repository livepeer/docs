# Contributing to Livepeer Documentation

Thank you for your interest in contributing to the Livepeer documentation! This guide provides a quick reference for contributing. For detailed information, see the [full contribution guide](v2/pages/07_resources/documentation-guide/contribute-to-the-docs.mdx).

## Quick Start

1. **Fork the repository** — [github.com/livepeer/docs](https://github.com/livepeer/docs)
2. **Create a branch** — `git checkout -b docs/your-change`
3. **Install pre-commit hooks** — `./.githooks/install.sh`
4. **Make your changes** — Edit files in `v2/pages/`
5. **Test locally** — `mint dev`
6. **Submit a PR** — Open a pull request

## Before You Start

**MANDATORY:** Read the [Style Guide](v2/pages/07_resources/documentation-guide/style-guide.mdx) before making any changes!

**Critical rules:**
- ✅ Use CSS Custom Properties (`var(--accent)`) only
- ❌ Never use `ThemeData` or hardcode colors
- ✅ Use absolute imports: `/snippets/components/...`
- ✅ Test in both light and dark modes

## Where to Edit

- **Main pages:** `v2/pages/[section]/`
- **Components:** `snippets/components/`
- **Data files:** `snippets/data/`
- **Assets:** `snippets/assets/`

## Development Setup

```bash
# Install Mintlify CLI
npm i -g mintlify

# Run development server
mint dev

# Install pre-commit hooks
./.githooks/install.sh
```

## Pull Request Process

1. Create a descriptive branch name: `docs/fix-typo-quickstart`
2. Make your changes following the style guide
3. Test locally with `mint dev`
4. Commit with clear messages: `docs: fix typo in quickstart guide`
5. Push to your fork
6. Open a PR with a clear description

## Review Process

- PRs are reviewed by section owners (see [CODEOWNERS](.github/CODEOWNERS))
- Review timeline: 48-72 hours for most changes
- Address all feedback before merge

## Resources

- [Full Contribution Guide](v2/pages/07_resources/documentation-guide/contribute-to-the-docs.mdx)
- [Style Guide](v2/pages/07_resources/documentation-guide/style-guide.mdx)
- [Component Library](v2/pages/07_resources/documentation-guide/component-library)
- [Documentation Guide](v2/pages/07_resources/documentation-guide/documentation-guide)

## Questions?

- Open a [GitHub issue](https://github.com/livepeer/docs/issues)
- Ask in the Livepeer Discord
- Check the [full contribution guide](v2/pages/07_resources/documentation-guide/contribute-to-the-docs.mdx)

Thank you for contributing! 🎉
