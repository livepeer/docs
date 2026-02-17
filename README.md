# Livepeer Docs

## 📁 Repository Structure

**This is the source of truth for repository structure.** All file placements must follow this structure. The pre-commit hook enforces these rules automatically.

### Directory Structure

```
/
├── .github/                 # GitHub configuration
│   ├── workflows/          # GitHub Actions workflows
│   ├── scripts/            # CI/CD helper scripts
│   └── [config files]      # GitHub-specific configs
│
├── .githooks/              # Git hooks
│   ├── install.sh          # Hook installation script
│   ├── pre-commit          # Pre-commit hook (enforces structure)
│   ├── verify.sh           # Verification script
│   └── BYPASS.md           # Bypass flag documentation
│
├── ai-tools/               # AI tool setup guides (root level)
│   ├── claude-code.mdx
│   ├── cursor.mdx
│   └── windsurf.mdx
│
├── api/                    # API specifications (consolidated)
│   ├── studio.yaml         # Main Livepeer Studio API
│   ├── ai-worker.yaml      # AI Worker API
│   └── cli-http.yaml       # CLI HTTP API
│
├── contribute/             # Contribution documentation
│   ├── CONTRIBUTING.md
│   ├── CONTRIBUTING/       # Contribution sub-docs
│   └── STRUCTURE.md       # Repository structure rules (detailed)
│
├── snippets/               # Mintlify snippets (MUST follow Mintlify conventions)
│   ├── assets/             # Static assets for docs
│   ├── components/         # React/JSX components
│   ├── data/               # Data files (JSON, YAML - not OpenAPI specs)
│   ├── automations/        # Dynamic content components
│   ├── generated/          # Generated content
│   └── pages/              # REQUIRED: MDX sub-views (Mintlify limitation)
│
├── tools/                  # Development tooling
│   ├── ai-rules/          # AI context rules
│   │   ├── AI_GUIDELINES.md
│   │   ├── llms.txt.information.md
│   │   └── .cursorrules
│   ├── config/            # Tool configurations
│   │   └── cspell.json
│   ├── scripts/           # Development scripts
│   │   ├── audit/         # Audit scripts
│   │   ├── generate/      # Generation scripts
│   │   ├── test/          # Test scripts
│   │   ├── verify/        # Verification scripts
│   │   └── fetch/         # Data fetching scripts
│   └── wiki/              # Internal wiki/docs
│
├── tests/                 # Test suite
│   ├── config/
│   ├── fixtures/
│   ├── integration/
│   ├── unit/
│   └── utils/
│
├── tasks/                 # AI working directory
│   ├── plan/              # Planning documents & task specifications
│   ├── reports/           # Task outputs & audit reports
│   ├── scripts/           # Task execution scripts
│   └── errors/            # Error documentation & troubleshooting
│
├── v1/                    # IMMUTABLE/FROZEN (DO NOT CHANGE, REMOVE, OR ARCHIVE)
│   └── pages/
│
├── v2/                    # Active version (stays at root in this migration)
│   └── pages/
│
├── docs.json              # Mintlify navigation config
├── package.json           # Root package.json (dev tooling only)
├── package-lock.json      # Lock file
├── README.md              # This file
├── LICENSE                # License file
├── Dockerfile             # Docker build configuration
├── Makefile               # Build automation
├── style.css              # Mintlify global styles (MUST be at root)
├── favicon.png            # Site favicon (at root per Mintlify)
├── logo/                  # Logo assets (at root per Mintlify)
├── .gitignore             # Git ignore rules
├── .mintignore            # Mintlify ignore rules
└── .whitelist             # Allowed root files/directories (enforced by pre-commit)
```

### Key Rules

1. **Root Directory**: Only files listed in `.whitelist` are allowed at root
2. **Snippets**: Must follow Mintlify conventions (components, data, assets, automations, pages)
3. **v1/ is FROZEN**: Never modify, remove, or archive files in `v1/`
4. **No `public/` folder**: Mintlify doesn't support it - favicon/logo stay at root
5. **No `styles/` folder**: Mintlify only allows ONE CSS file at root (`style.css`)
6. **Scripts**: All scripts go in `tools/scripts/` organized by purpose
7. **Configs**: All config files go in `tools/config/`
8. **OpenAPI specs**: All API specs go in `api/`

### Enforcement

The pre-commit hook automatically enforces:
- ✅ Root directory whitelist (blocks unauthorized files)
- ✅ Snippets directory structure (blocks scripts/wiki/styles in snippets/)
- ✅ v1/ frozen protection (blocks all changes to v1/)
- ✅ Style guide compliance (ThemeData, colors, imports)
- ✅ Import path enforcement (absolute paths required)

**Bypass flags available** (use sparingly):
- `SKIP_STRUCTURE_CHECK=1` - Skip structure checks
- `SKIP_STYLE_CHECK=1` - Skip style guide checks
- `SKIP_VERIFICATION=1` - Skip verification scripts
- `SKIP_TESTS=1` - Skip test suite
- `SKIP_ALL=1` - Skip all checks (emergencies only)

See [`.githooks/BYPASS.md`](.githooks/BYPASS.md) for details.

### Related Documentation

- **[Migration Plan](tasks/plan/migration-plan.md)** - Detailed migration strategy and task list
- **[Repository Structure Audit](tasks/PLAN/reports/repository-structure-audit.md)** - Full audit report
- **[Structure Rules](contribute/STRUCTURE.md)** - Detailed structure rules (when created)
- **[`.whitelist`](.whitelist)** - Allowed root files/directories

---

## 👩‍💻 Development

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
- ✅ Enforce repository structure rules (root whitelist, snippets structure, v1/ frozen)
- ✅ Run verification scripts (syntax checks, validation)
- ✅ Block commits with violations

See [Git Hooks Documentation](contribute/CONTRIBUTING/GIT-HOOKS.md) for details.

### 📖 Before Contributing

**MANDATORY:** Read these before making changes:

1. **[Style Guide](v2/pages/07_resources/documentation-guide/style-guide.mdx)** - Production-grade styling guidelines
2. **[Component Library](v2/pages/07_resources/documentation-guide/component-library.mdx)** - Available components
3. **[Contribution Guide](contribute/CONTRIBUTING.md)** - How to contribute
4. **[Git Hooks](contribute/CONTRIBUTING/GIT-HOOKS.md)** - Pre-commit hook documentation
5. **This README** - Repository structure (source of truth)
