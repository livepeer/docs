# Livepeer Documentation

The official documentation repository for [Livepeer](https://livepeer.org), a decentralised realtime AI infrastructure network. This repository contains documentation for Livepeer Studio, the Livepeer Protocol, AI Pipelines, Orchestrators, Gateways, Delegators, Community, Help and developer resources.

Built with [Mintlify](https://mintlify.com) and deployed at [docs.livepeer.org](https://docs.livepeer.org).

---

## 🚀 Quick Start

### Prerequisites

**⚠️ CRITICAL:** Always verify requirements with [Mintlify's official documentation](https://mintlify.com/docs/installation) before making changes.

- **Node.js v20.17.0+ (LTS recommended)** - Required by Mintlify CLI
  - Install from [nodejs.org](https://nodejs.org/)
  - Mintlify CLI requires Node.js to run
- **Mintlify CLI** - Required for local development
  - Install via npm: `npm i -g mintlify`
  - Verify installation: `mintlify --version`
- **For running tests in this repo:** Node.js 22+ (matches CI/CD configuration)

### Setup

1. **Fork or clone the repository:**
   - **Fork the repository** on GitHub: [github.com/livepeer/docs](https://github.com/livepeer/docs)
   - **Clone your fork** (or clone directly if you have write access):
   ```bash
   # If you forked the repo:
   git clone https://github.com/YOUR_USERNAME/docs.git
   cd docs
   
   # Or if you have direct access:
   git clone https://github.com/livepeer/docs.git
   cd docs
   ```

2. **Install Mintlify CLI:**
   ```bash
   npm i -g mintlify
   ```

3. **Install pre-commit hooks (Will run valuable tests - especially if you will be using AI agents to do work - HIGHLY RECOMMENDED):**
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

## 🐛 GitHub Issues

### Creating Issues

When creating GitHub issues for this repository:

1. **Use the `docs-v2` label** - All issues related to v2 documentation must include this label
2. **Choose appropriate issue templates** (if available):
   - Bug Report - For broken links, incorrect information, formatting issues
   - Feature Request - For new content, improvements, enhancements
   - Question - For clarifications, how-to questions
   - Documentation Request - For missing documentation, unclear explanations

3. **Include relevant labels** from the categories below

### Required Labels

**Version Tag (REQUIRED):**
- `docs-v2` - **MUST be included** for all v2 documentation issues
- `v1` - For legacy v1 documentation issues (rare, v1 is frozen)

### Standard GitHub Labels

**Priority:**
- `priority: critical` - Security issues, broken critical paths
- `priority: high` - Important content gaps, user blockers
- `priority: medium` - Standard improvements
- `priority: low` - Nice-to-have enhancements

**Type:**
- `type: bug` - Something is broken
- `type: enhancement` - Improvement or new feature
- `type: documentation` - Documentation-related
- `type: question` - Question or clarification needed

**Area (Documentation Sections):**
- `area: ai` - AI/Gateway documentation
- `area: developers` - Developer documentation
- `area: orchestrators` - Orchestrator documentation
- `area: gateways` - Gateway documentation
- `area: about` - About section
- `area: resources` - Resources section
- `area: structure` - Repository structure issues
- `area: style-guide` - Style guide violations or questions

**Status:**
- `status: needs-triage` - Needs initial review
- `status: in-progress` - Work in progress
- `status: blocked` - Blocked on something
- `status: needs-info` - Needs more information from reporter
- `good first issue` - Good for new contributors

**Other Common Labels:**
- `help wanted` - Community help requested
- `wontfix` - Issue won't be fixed
- `duplicate` - Duplicate of another issue
- `invalid` - Issue is invalid or incorrect

### Issue Workflow

1. **Create Issue** - Use appropriate template and include `docs-v2` label
2. **Triage** - Maintainers review and add additional labels
3. **Assignment** - Issue assigned to section owner or contributor
4. **Work** - Contributor works on the issue
5. **PR** - Pull request linked to issue (use "Fixes #123" or "Closes #123")
6. **Review** - PR reviewed and merged
7. **Close** - Issue automatically closed when PR is merged

### Issue Templates

When creating issues, include:
- **Clear title** describing the problem or request
- **Description** with context and details
- **Steps to reproduce** (for bugs)
- **Expected vs actual behavior** (for bugs)
- **Screenshots** (if applicable)
- **Relevant labels** including `docs-v2`

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
