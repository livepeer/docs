# Livepeer Documentation

The official documentation repository for [Livepeer](https://livepeer.org), a decentralised realtime AI infrastructure network. This repository contains documentation for Livepeer Studio, the Livepeer Protocol, AI Pipelines, Orchestrators, Gateways, Delegators, Community, Help and developer resources.

Built with [Mintlify](https://mintlify.com) and deployed at [docs.livepeer.org](https://docs.
livepeer.org).


## IMPORTANT
- THIS REPOSITORY IS mostly COMMUNITY MAINTAINED. 
- THE LIVEPEER FOUNDATION HELPS GUIDE IT, HOWEVER, GENERALLY IF YOU THINK IMPROVEMENTS ARE NEEDED YOU SHOULD SUBMIT THEM (via PR) OR CREATE AN ISSUE ASKING FOR THE FEATURE/BUG FIX ETC. See the [Contributing section](#-contributing) for details.
- **Issue templates:** When creating issues, use the GitHub issue templates which will automatically apply the `docs-v2` and `help wanted` labels. See [GitHub Issues section](#-github-issues) below for details.

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
1. **[Style Guide](v2/pages/07_resources/documentation-guide/style-guide.mdx)** - Production-grade styling guidelines, CSS Custom Properties, Mintlify limitations, and best practices
2. **[Documentation Guide](v2/pages/07_resources/documentation-guide/documentation-guide.mdx)** - Complete guide to writing and organizing documentation
3. **[Component Library](v2/pages/07_resources/documentation-guide/component-library.mdx)** - Available components and how to use them
4. **[Contribution Guide](contribute/CONTRIBUTING.md)** - How to contribute
5. **[Git Hooks Documentation](contribute/CONTRIBUTING/GIT-HOOKS.md)** - Pre-commit hook details
6. **This README** - Repository structure (source of truth)

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

### Component Development

**Creating New Components:**
1. **Location:** Create components in `snippets/components/`
2. **File naming:** Use kebab-case (e.g., `my-component.jsx`)
3. **Component naming:** Use PascalCase (e.g., `MyComponent`)
4. **Import path:** Use absolute imports: `/snippets/components/my-component`
5. **Styling:** Use CSS Custom Properties only (`var(--accent)`, `var(--text)`)
6. **Check component library first:** Review existing components before creating new ones

**Component Immutability Rules:**
- ⚠️ **CRITICAL:** Components in `snippets/components/` are **IMMUTABLE**
- **NEVER modify existing component files** - They're used across many pages
- **Allowed:** Creating new components, modifying MDX files that use components
- **Forbidden:** Modifying existing component files, changing function signatures
- **Exception:** Only if explicitly requested AND after confirming impact assessment

**Component Organization:**
- Organize by domain/feature (e.g., `components/domain/SHARED/`, `components/domain/GATEWAYS/`)
- Use descriptive names that indicate purpose
- Document component props and usage

See [Component Library](v2/pages/07_resources/documentation-guide/component-library.mdx) for available components and [Style Guide](v2/pages/07_resources/documentation-guide/style-guide.mdx) for component development guidelines.

### Pull Request Process

1. **Branch naming:** Use `docs/` prefix (e.g., `docs/fix-typo-quickstart`)
2. **Commit messages:** Use conventional format: `docs: description`
3. **Test locally:** Always test with `mint dev` before submitting
4. **Follow style guide:** All changes must pass pre-commit hooks
5. **Update related docs:** If structure changes, update this README

### Review Process

- **Review SLAs:** Critical fixes (24h), Content updates (48h), New content (72h)
- **Review criteria:** Clarity, technical accuracy, completeness, style consistency, UX
- **Section owners:** Review PRs in their assigned sections (see [CODEOWNERS](.github/CODEOWNERS))
- **Automated checks:** Broken links, formatting, build verification run automatically

See [CONTRIBUTING.md](contribute/CONTRIBUTING.md) for detailed contribution guidelines and [Documentation Governance](v2/pages/09_internal/governance.mdx) for complete review process, ownership, and SLAs.

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

**Common errors:**
- **MDX syntax errors:** Check for unclosed tags, incorrect JSX syntax
- **Import path errors:** Use absolute paths (`/snippets/components/...`)
- **Structure violations:** Check `.whitelist` for allowed root files
- **Style violations:** Replace hardcoded colors with CSS Custom Properties

---

## 🧪 Testing

This repository includes a comprehensive test suite to ensure code quality, style compliance, and functionality.

### When Tests Run

**1. Pre-Commit Hooks (Local - Automatic)**
- **When:** Every time you run `git commit`
- **Speed:** Fast (~10-30 seconds) - only tests staged files
- **What Runs:**
  - Style guide checks (ThemeData, hardcoded colors, imports)
  - MDX syntax validation
  - JSON/JS/Shell syntax checks
  - Test suite (fast mode) - browser tests skipped
- **Blocks Commit:** YES - if violations found

**2. CI/CD Workflow (GitHub Actions - Automatic)**
- **When:** On push to `main` or `docs-v2-preview`, or on pull requests
- **Speed:** Slower (~5-10 minutes) - tests entire codebase
- **What Runs:**
  - Style guide tests (all files)
  - MDX validation (all files)
  - Spelling tests (all files)
  - Quality checks (all files)
  - Broken links & imports validation (all files)
  - **Browser tests (ALL pages from docs.json)**
- **Blocks PR:** YES - if any test fails
- **Location:** `.github/workflows/test-suite.yml`

**3. Manual Execution (On-Demand)**
- **When:** You run them manually
- **Commands:**
  ```bash
  # From tools/ directory
  cd tools && npm install
  npm run test:style      # Style guide tests
  npm run test:mdx        # MDX validation
  npm run test:spell      # Spelling checks
  npm run test:quality   # Quality checks
  npm run format-mdx     # Format MDX files
  
  # Or from root directory
  node tests/run-all.js                    # All tests
  node tests/unit/style-guide.test.js     # Style guide only
  node tests/integration/browser.test.js  # Browser tests only
  ```

### Test Coverage

- ✅ **Style Guide:** ThemeData usage, hardcoded colors, import paths
- ✅ **MDX Validation:** Syntax errors, broken imports, component usage
- ✅ **Spelling:** Spell checks across all documentation
- ✅ **Quality:** Code quality, formatting, best practices
- ✅ **Links & Imports:** Broken links and import validation
- ✅ **Browser Tests:** Full page rendering tests (CI only)

See [tests/WHEN-TESTS-RUN.md](tests/WHEN-TESTS-RUN.md) for complete test documentation.

---

## 🚀 CI/CD & Deployment

### Deployment Process

**Mintlify Auto-Deployment:**
- Changes merged to `main` or `docs-v2-preview` are automatically deployed by Mintlify
- Deployment typically takes 2-5 minutes after merge
- Live site: [docs.livepeer.org](https://docs.livepeer.org)
- No manual deployment steps required

### GitHub Actions Workflows

This repository uses several GitHub Actions workflows:

**1. Test Suite** (`.github/workflows/test-suite.yml`)
- Runs on: Push to `main`/`docs-v2-preview`, Pull requests
- Tests: Style guide, MDX, spelling, quality, browser tests
- Blocks PR if tests fail

**2. Broken Links Check** (`.github/workflows/broken-links.yml`)
- Validates all links in documentation
- Runs on pull requests

**3. Auto-Update Workflows:**
- **Update Livepeer Release** (`.github/workflows/update-livepeer-release.yml`)
  - Runs every 30 minutes
  - Updates latest Livepeer version from GitHub releases
- **Update Blog Data** (`.github/workflows/update-blog-data.yml`)
  - Updates blog content from external sources
- **Update Forum Data** (`.github/workflows/update-forum-data.yml`)
  - Updates forum content
- **Update YouTube Data** (`.github/workflows/update-youtube-data.yml`)
  - Updates YouTube video content

**4. SDK Generation** (`.github/workflows/sdk_generation.yaml`)
- Generates SDK documentation from API specs

### Build Process

- **Local Development:** `mint dev` - Starts local server at `http://localhost:3000`
- **Production Build:** Handled automatically by Mintlify
- **Docker Build:** `docker build -t livepeer/docs .` (see `Dockerfile`)

---

## 🤖 AI Agent Rules & Guidelines

This repository includes AI agent rule files to help AI assistants understand the codebase structure, styling requirements, and contribution guidelines.

### AI Rule Files Location

All AI agent rules are located in `tools/ai-rules/`:

- **`AI_GUIDELINES.md`** - Comprehensive AI safety protocol and guidelines
  - Git write operation safety rules
  - Commit enforcement for structure & style validation
  - Source of truth references
  - Mandatory testing requirements

- **`.cursorrules`** - Cursor IDE specific rules
  - Style guide requirements
  - Repository structure rules
  - Mintlify limitations and gotchas
  - Component usage guidelines

- **`llms.txt.information.md`** - LLM information file
  - Repository context for AI agents
  - Key architectural decisions
  - Important patterns and conventions

### Suggested Rules for AI Agents

When working with this repository, AI agents should:

1. **Always check Mintlify documentation first** before making structural changes
2. **Read the Style Guide** (`v2/pages/07_resources/documentation-guide/style-guide.mdx`) before styling changes
3. **Follow repository structure** as defined in README.md (source of truth)
4. **Use CSS Custom Properties only** - never ThemeData or hardcoded colors
5. **Test after every change** - don't batch multiple changes without testing
6. **Commit incrementally** - create commits after each logical change to trigger pre-commit hooks
7. **Never modify `v1/`** - it's frozen and immutable
8. **Use absolute imports** - `/snippets/components/...` not relative paths
9. **Check component library** before creating new components
10. **Verify with Mintlify docs** before adding new folders or files

### Key Files for AI Agents

- **Structure Rules:** `README.md` (source of truth), `tools/ai-rules/.cursorrules`
- **Styling Rules:** `v2/pages/07_resources/documentation-guide/style-guide.mdx`
- **Component Reference:** `v2/pages/07_resources/documentation-guide/component-library.mdx`
- **Documentation Guide:** `v2/pages/07_resources/documentation-guide/documentation-guide.mdx`
- **AI Guidelines:** `tools/ai-rules/AI_GUIDELINES.md`

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
├── README.md              # This file
├── LICENSE                # License file
├── Dockerfile             # Docker build configuration
├── Makefile               # Build automation
├── style.css              # Mintlify global styles (MUST be at root)
├── .gitignore             # Git ignore rules
├── .mintignore            # Mintlify ignore rules
└── .whitelist             # Allowed root files/directories (enforced by pre-commit)
```

### Key Rules

1. **Root Directory**: Only files listed in `.whitelist` are allowed at root
2. **Snippets**: Must follow Mintlify conventions (components, data, assets, automations, pages)
3. **v1/ is FROZEN**: Never modify, remove, or archive files in `v1/`
4. **No `public/` folder**: Mintlify doesn't support it - favicon/logo are in `snippets/assets/`
5. **No `styles/` folder**: Mintlify only allows ONE CSS file at root (`style.css`)
6. **Scripts**: All scripts go in `tools/scripts/` organized by purpose
7. **Configs**: All config files go in `tools/config/`, **EXCEPT**:
   - `.prettierrc.yaml` → **ROOT** (Prettier convention)
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

- **[Documentation Governance](v2/pages/09_internal/governance.mdx)** - Review process, ownership, SLAs, and ticketing system
- **[Migration Plan](tasks/plan/migration-plan.md)** - Detailed migration strategy and task list
- **[Repository Structure Audit](tasks/PLAN/reports/repository-structure-audit.md)** - Full audit report
- **[Structure Rules](contribute/STRUCTURE.md)** - Detailed structure rules (when created)
- **[`.whitelist`](.whitelist)** - Allowed root files/directories
- **[CODEOWNERS](.github/CODEOWNERS)** - Section ownership and review assignments

---

## 📦 Versioning

### v1 vs v2 Documentation

**v1/ Directory:**
- **Status:** IMMUTABLE/FROZEN - DO NOT CHANGE, REMOVE, OR ARCHIVE
- **Purpose:** Legacy documentation preserved for historical reference
- **Location:** `v1/pages/`
- **Enforcement:** Pre-commit hook blocks all changes to `v1/`

**v2/ Directory:**
- **Status:** ACTIVE - Current documentation version
- **Purpose:** Active documentation being maintained and updated
- **Location:** `v2/pages/`
- **Deployment:** Deployed to [docs.livepeer.org](https://docs.livepeer.org)

### Migration Strategy

- v1 documentation remains accessible but is no longer maintained
- All new content and updates go to v2
- v1 serves as reference for historical context
- No migration from v1 to v2 is planned - v1 is frozen

---

## 🔄 Automation & Workflows

This repository uses automated workflows to keep content up-to-date:

### Auto-Update Workflows

**1. Livepeer Release Version** (`.github/workflows/update-livepeer-release.yml`)
- **Frequency:** Every 30 minutes
- **Purpose:** Updates latest Livepeer version from GitHub releases
- **Updates:** `snippets/automationData/globals/globals.mdx`
- **Manual trigger:** Available via `workflow_dispatch`

**2. Blog Data** (`.github/workflows/update-blog-data.yml`)
- **Purpose:** Updates blog content from external sources
- **Updates:** Blog-related data files

**3. Forum Data** (`.github/workflows/update-forum-data.yml`)
- **Purpose:** Updates forum content
- **Updates:** Forum-related data files

**4. YouTube Data** (`.github/workflows/update-youtube-data.yml`)
- **Purpose:** Updates YouTube video content
- **Updates:** YouTube-related data files

**5. Ghost Blog Data** (`.github/workflows/update-ghost-blog-data.yml`)
- **Purpose:** Updates Ghost blog content
- **Updates:** Ghost blog-related data files

### Workflow Management

- All workflows run automatically on schedule
- Workflows can be manually triggered via GitHub Actions UI
- Workflow logs are available in the Actions tab
- Failed workflows send notifications to maintainers

See [Automations & Workflows Guide](v2/pages/07_resources/documentation-guide/automations-workflows.mdx) for detailed information.

---

## 👩‍💻 Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview
the documentation changes locally. To install, use the following command

```bash
npm i -g mintlify
```

Run the following command at the root of your documentation (where `docs.json` is):

```bash
mint dev
```

Then open **http://localhost:3000** in your browser. To test the AI assistant: open **Home → Test** in the sidebar and use the chat button.

**If you see** `MODULE_NOT_FOUND` for `_document.js`, **"No docs config"**, or **ENOENT** in `~/.mintlify/`, the Mintlify cache is corrupt. Clear it and run again:

```bash
rm -rf ~/.mintlify ~/.mintlify-last
mint dev
```

Tests and formatting run from the `tools/` directory: `cd tools && npm install`, then `npm run test:style`, `npm run format-mdx`, etc. See `tools/package.json` for all scripts.

### 🔧 Git Hooks (Required)

This repository uses git hooks to enforce style guide compliance and code quality. **You must install them:**

**Prerequisites:**
1. Install dependencies: `cd tools && npm install`
2. Install hooks: `./.githooks/install.sh`

```bash
# Step 1: Install dependencies (required for tests to run)
cd tools && npm install

# Step 2: Install git hooks
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
