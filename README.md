# Livepeer Docs

### 👩‍💻 Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview
the documentation changes locally. To install, use the following command

```bash
npm i -g mintlify
```

Run the following command at the root of your documentation (where mint.json is)

```bash
mint dev
```

### 🔧 Git Hooks (Required)

This repository uses git hooks to enforce style guide compliance and code quality. **You must install them:**

```bash
./.githooks/install.sh
```

The pre-commit hook will:
- ✅ Check for style guide violations (ThemeData, hardcoded colors, etc.)
- ✅ Run verification scripts (syntax checks, validation)
- ❌ Block commits with violations

See [Git Hooks Documentation](docs/CONTRIBUTING/GIT-HOOKS.md) for details.

### 📖 Before Contributing

**MANDATORY:** Read these before making changes:

1. **[Style Guide](v2/pages/07_resources/documentation-guide/style-guide.mdx)** - Production-grade styling guidelines
2. **[Component Library](v2/pages/07_resources/documentation-guide/component-library.mdx)** - Available components
3. **[Contribution Guide](docs/CONTRIBUTING/README.md)** - How to contribute
4. **[Git Hooks](docs/CONTRIBUTING/GIT-HOOKS.md)** - Pre-commit hook documentation
