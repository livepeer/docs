# Livepeer Documentation

The official documentation repository for [Livepeer](https://livepeer.org), a decentralised realtime AI infrastructure network. This repository contains documentation for Livepeer Studio, the Livepeer Protocol, AI Pipelines, Orchestrators, Gateways, Delegators, Community, Help and developer resources.

Built with [Mintlify](https://mintlify.com) and deployed at [docs.livepeer.org](https://docs.livepeer.org).

---

## 🚀 Quick Start

### Prerequisites

- **Mintlify CLI** - Install globally via npm (requires Node.js)
  - Node.js is only needed to install Mintlify CLI
  - Once installed, `mint dev` runs independently
  - For running tests: Node.js 22+ (matches CI/CD)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/livepeer/docs.git
   cd docs
   ```

2. **Install Mintlify CLI:**
   ```bash
   npm i -g mintlify
   ```

3. **Install pre-commit hooks (REQUIRED):**
   ```bash
   ./.githooks/install.sh
   ```
   
   The pre-commit hooks enforce:
   - Repository structure rules
   - Style guide compliance
   - Code quality checks
   - Import path validation

4. **Start the development server:**
   ```bash
   mint dev
   ```
   
   The docs will be available at `http://localhost:3000`

### Development Workflow

1. **Create a branch:**
   ```bash
   git checkout -b docs/your-feature-name
   ```

2. **Make your changes** in `v2/pages/` or `snippets/`

3. **Test locally:**
   ```bash
   mint dev
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "docs: description of your change"
   ```
   
   Pre-commit hooks will run automatically and check:
   - Repository structure compliance
   - Style guide violations
   - Code syntax and validation

5. **Push and create a PR:**
   ```bash
   git push origin docs/your-feature-name
   ```

---

## 📖 Contributing

We welcome contributions! Please read the following before making changes:

### Before You Start

**MANDATORY Reading:**
1. **[Style Guide](v2/pages/07_resources/documentation-guide/style-guide.mdx)** - Production-grade styling guidelines
2. **[Component Library](v2/pages/07_resources/documentation-guide/component-library.mdx)** - Available components
3. **[Contribution Guide](contribute/CONTRIBUTING.md)** - How to contribute
4. **[Git Hooks Documentation](contribute/CONTRIBUTING/GIT-HOOKS.md)** - Pre-commit hook details
5. **This README** - Repository structure (source of truth)

### Key Contribution Rules

- ✅ **Use CSS Custom Properties** (`var(--accent)`, `var(--text)`) - no hardcoded colors
- ✅ **Use absolute imports** - `/snippets/components/...` (not relative paths)
- ✅ **Follow repository structure** - See structure rules below
- ✅ **Test in both light and dark modes**
- ❌ **Never use `ThemeData`** - deprecated, use CSS variables
- ❌ **Never modify `v1/`** - it's frozen/immutable

### Where to Make Changes

- **Documentation pages:** `v2/pages/[section]/`
- **React components:** `snippets/components/`
- **Data files:** `snippets/data/`
- **Static assets:** `snippets/assets/`
- **API specifications:** `api/`

### Pull Request Process

1. **Branch naming:** Use `docs/` prefix (e.g., `docs/fix-typo-quickstart`)
2. **Commit messages:** Use conventional format: `docs: description`
3. **Test locally:** Always test with `mint dev` before submitting
4. **Follow style guide:** All changes must pass pre-commit hooks
5. **Update related docs:** If structure changes, update this README

See [CONTRIBUTING.md](contribute/CONTRIBUTING.md) for detailed contribution guidelines.

---

## 🔧 Pre-Commit Hooks

This repository uses Git pre-commit hooks to enforce code quality and repository structure. **Hooks are REQUIRED and must be installed.**

### Installation

```bash
./.githooks/install.sh
```

### What the Hooks Check

The pre-commit hook automatically validates:

1. **Repository Structure:**
   - ✅ Root directory whitelist (blocks unauthorized files)
   - ✅ Snippets directory structure (blocks scripts/wiki/styles in snippets/)
   - ✅ v1/ frozen protection (blocks all changes to v1/)

2. **Style Guide Compliance:**
   - ✅ ThemeData usage (deprecated - must use CSS Custom Properties)
   - ✅ Hardcoded colors (must use CSS variables)
   - ✅ Relative imports (must use absolute paths)
   - ✅ React/Mintlify imports (components are global)

3. **Code Quality:**
   - ✅ MDX/JSON/Shell/JS syntax validation
   - ✅ Mintlify configuration checks
   - ✅ Import path validation

4. **Tests:**
   - ✅ Unit tests (if dependencies installed)
   - ✅ Integration tests

### Bypass Flags (Use Sparingly)

In emergencies, you can bypass specific checks:

```bash
# Skip structure checks only
SKIP_STRUCTURE_CHECK=1 git commit -m "Emergency fix"

# Skip style checks only
SKIP_STYLE_CHECK=1 git commit -m "Temporary style change"

# Skip all checks (emergencies only)
SKIP_ALL=1 git commit -m "Critical hotfix"
```

**⚠️ Warning:** Bypassing hooks can lead to broken builds, style violations, and merge conflicts. Always fix issues properly when possible.

See [`.githooks/BYPASS.md`](.githooks/BYPASS.md) for complete bypass documentation.

### Troubleshooting

**Hook not running?**
```bash
# Reinstall hooks
./.githooks/install.sh

# Check if hook is executable
ls -la .git/hooks/pre-commit
```

**Hook failing?**
- Read the error message carefully
- Fix the violations (structure, style, imports)
- Don't bypass unless it's a true emergency
- See [contribute/CONTRIBUTING/GIT-HOOKS.md](contribute/CONTRIBUTING/GIT-HOOKS.md) for help

---

## 📁 Repository Structure

**This is the source of truth for repository structure.** All file placements must follow this structure. The pre-commit hook enforces these rules automatically.

### Directory Structure

```
/
├── .github/                # GitHub configuration
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

**Bypass flags available** (IF YOU ARE AN AI YOU SHOULD NEVER EVER USE THESE):
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
