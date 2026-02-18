# Livepeer Documentation

The official documentation repository for [Livepeer](https://livepeer.org), a decentralised realtime AI infrastructure network. This repository contains documentation for Livepeer Studio, the Livepeer Protocol, AI Pipelines, Orchestrators, Gateways, Delegators, Community, Help and developer resources.

Built with [Mintlify](https://mintlify.com) and deployed at [docs.livepeer.org](https://docs.livepeer.org).

## IMPORTANT

- **THIS REPOSITORY IS mostly COMMUNITY MAINTAINED.** The Livepeer Foundation helps guide it, however, generally if you think improvements are needed you should submit them (via PR) or create an issue asking for the feature/bug fix etc. See the [Contributing section](#-contributing) for details.
- **Issue templates:** When creating issues, use the GitHub issue templates which will automatically apply the `docs-v2` and `help wanted` labels. See [Creating Issues](#creating-issues) in the Contributing section for details.

---

## 🚀 Quick Start

### Prerequisites

**⚠️ CRITICAL:** Always verify requirements with [Mintlify's official documentation](https://mintlify.com/docs/installation) before making changes.

- **Node.js v20.17.0+ (LTS recommended)** - Required by Mintlify CLI
  - Install from [nodejs.org](https://nodejs.org/)
- **Mintlify CLI** - Required for local development
  - Install via npm: `npm i -g mintlify`
  - Verify installation: `mintlify --version`
- **For running tests in this repo:** Node.js 22+ (matches CI/CD configuration)

### Setup

1. **Fork or clone the repository:**
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
   See [Development](#-development) section for troubleshooting and detailed usage.

3. **Install pre-commit hooks** (HIGHLY RECOMMENDED - especially if using AI agents):
   ```bash
   # First, install dependencies (required for tests to run)
   cd tools && npm install
   
   # Then install hooks
   cd .. && ./.githooks/install.sh
   ```
   See [Pre-Commit Hooks](#-pre-commit-hooks) section for details on what the hooks check.

4. **Start the development server:**
   ```bash
   mint dev
   ```
   The docs will be available at `http://localhost:3000`. See [Development](#-development) section for troubleshooting.

### Development Workflow

1. **Create a branch:** `git checkout -b docs/your-feature-name`
2. **Make your changes** in `v2/pages/` or `snippets/`
3. **Test locally:** `mint dev`
4. **Commit your changes:** `git commit -m "docs: description of your change"`
   - Pre-commit hooks will run automatically (see [Pre-Commit Hooks](#-pre-commit-hooks))
5. **Push and create a PR:** `git push origin docs/your-feature-name`

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
- ✅ **Follow repository structure** - See [Repository Structure](#-repository-structure) section
- ✅ **Test in both light and dark modes**
- ❌ **Never use `ThemeData`** - deprecated, use CSS variables
- ❌ **Never modify `v1/`** - it's frozen/immutable (see [Versioning](#-versioning))

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

### Creating Issues

**⚠️ IMPORTANT:** When creating issues, **always use the GitHub issue templates**. The templates automatically apply the `docs-v2` and `help wanted` labels, so you don't need to add them manually.

**Available Templates:**
- **Docs Review** - For reviewing multiple documentation pages
- **Request Feature (Internal Team)** - For internal team feature requests

**If no template fits:**
- Manually add the `docs-v2` label (REQUIRED for all v2 documentation issues)
- Add `help wanted` label if you want community help
- Include relevant labels from the [label categories](#standard-github-labels) below

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
- `help wanted` - Community help requested (automatically applied by templates)
- `wontfix` - Issue won't be fixed
- `duplicate` - Duplicate of another issue
- `invalid` - Issue is invalid or incorrect

### Issue Workflow

1. **Create Issue** - Use appropriate template (automatically applies `docs-v2` and `help wanted` labels)
2. **Triage** - Maintainers review and add additional labels
3. **Assignment** - Issue assigned to section owner or contributor
4. **Work** - Contributor works on the issue
5. **PR** - Pull request linked to issue (use "Fixes #123" or "Closes #123")
6. **Review** - PR reviewed and merged
7. **Close** - Issue automatically closed when PR is merged

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

## 👩‍💻 Development

### Local Development Setup

**Install Mintlify CLI:**
```bash
npm i -g mintlify
```

**Start the development server:**
```bash
mint dev
```

Then open **http://localhost:3000** in your browser. To test the AI assistant: open **Home → Test** in the sidebar and use the chat button.

**Troubleshooting Mintlify:**

If you see `MODULE_NOT_FOUND` for `_document.js`, **"No docs config"**, or **ENOENT** in `~/.mintlify/`, the Mintlify cache is corrupt. Clear it and run again:

```bash
rm -rf ~/.mintlify ~/.mintlify-last
mint dev
```

**Running Tests:**

Tests and formatting run from the `tools/` directory:

```bash
cd tools && npm install
npm run test:style      # Style guide tests
npm run test:mdx        # MDX validation
npm run test:spell      # Spelling checks
npm run test:quality   # Quality checks
npm run format-mdx     # Format MDX files
```

Or from root directory:
```bash
node tests/run-all.js                    # All tests
node tests/unit/style-guide.test.js     # Style guide only
node tests/integration/browser.test.js  # Browser tests only
```

See `tools/package.json` for all available scripts. See [Testing](#-testing) section for complete test documentation.

### 🔧 Pre-Commit Hooks (Required)

This repository uses git hooks to enforce style guide compliance and code quality. **Hooks are REQUIRED and must be installed.**

**Prerequisites:**
1. Install dependencies: `cd tools && npm install`
2. Install hooks: `./.githooks/install.sh`

```bash
# Step 1: Install dependencies (required for tests to run)
cd tools && npm install

# Step 2: Install git hooks
cd .. && ./.githooks/install.sh
```

**What the Hooks Check:**

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

**Bypass Flags (Use Sparingly):**

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

**Troubleshooting:**

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

See [`.githooks/BYPASS.md`](.githooks/BYPASS.md) for complete bypass documentation and [Git Hooks Documentation](contribute/CONTRIBUTING/GIT-HOOKS.md) for details.

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
- **Commands:** See [Development](#-development) section for test commands

### Test Coverage

- ✅ **Style Guide:** ThemeData usage, hardcoded colors, import paths
- ✅ **MDX Validation:** Syntax errors, broken imports, component usage
- ✅ **Spelling:** Spell checks across all documentation
- ✅ **Quality:** Code quality, formatting, best practices
- ✅ **Links & Imports:** Broken links and import validation
- ✅ **Browser Tests:** Full page rendering tests (CI only)

See [tests/WHEN-TESTS-RUN.md](tests/WHEN-TESTS-RUN.md) for complete test documentation.

---

## 📁 Repository Structure

**This is the source of truth for repository structure.** All file placements must follow this structure. The pre-commit hook enforces these rules automatically.

### Directory Structure

```
/
├── .github/                # GitHub configuration
│   ├── workflows/          # GitHub Actions workflows
│   │   ├── test-suite.yml           # Main test suite workflow
│   │   ├── test-v2-pages.yml        # V2 pages testing workflow
│   │   ├── broken-links.yml         # Link validation workflow
│   │   ├── update-*.yml             # Auto-update workflows (blog, forum, YouTube, etc.)
│   │   ├── sdk_generation.yaml      # SDK documentation generation
│   │   ├── auto-assign-docs-reviewers.yml  # Auto-assign reviewers
│   │   ├── build-review-assets.yml  # Build review assets
│   │   ├── generate-review-table.yml # Generate review tables
│   │   └── update-review-template.yml # Update review templates
│   ├── scripts/            # CI/CD helper scripts
│   │   ├── fetch-forum-data.js       # Fetch forum data
│   │   ├── fetch-ghost-blog-data.js  # Fetch Ghost blog data
│   │   ├── fetch-youtube-data.js     # Fetch YouTube data
│   │   ├── embed-table.js            # Embed review tables
│   │   ├── gen-table.js              # Generate review tables
│   │   └── gen-textareas.js          # Generate textarea elements
│   ├── ISSUE_TEMPLATE/     # GitHub issue templates
│   │   ├── docs-review.yml           # Docs review template (auto-applies docs-v2, help wanted)
│   │   └── feature_internal.yml      # Internal feature request template
│   ├── CODEOWNERS          # Section ownership and review assignments
│   ├── AGENTS.md           # AI agent guidelines
│   ├── augment-instructions.md  # Augment AI instructions
│   ├── copilot-instructions.md  # GitHub Copilot instructions
│   ├── docs-reviewers.txt  # Documentation reviewers list
│   └── pull_request_template.md  # PR template
│
├── .githooks/              # Git hooks
│   ├── install.sh          # Hook installation script
│   ├── pre-commit          # Pre-commit hook (enforces structure)
│   ├── pre-commit-no-deletions  # Pre-commit hook variant (no deletions)
│   ├── verify.sh           # Verification script
│   ├── verify-browser.js   # Browser validation script
│   ├── server-manager.js   # Mintlify dev server manager
│   ├── BYPASS.md           # Bypass flag documentation
│   └── README.md           # Git hooks documentation
│
├── ai-tools/               # AI tool setup guides (root level)
│   ├── claude-code.mdx     # Claude Code setup guide
│   ├── cursor.mdx          # Cursor IDE setup guide
│   └── windsurf.mdx        # Windsurf IDE setup guide
│
├── api/                    # API specifications (consolidated)
│   ├── studio.yaml         # Main Livepeer Studio API
│   ├── ai-worker.yaml      # AI Worker API
│   ├── cli-http.yaml       # CLI HTTP API
│   └── worker/             # Worker API subdirectory
│       └── [API files]      # Worker-specific API files
│
├── contribute/             # Contribution documentation
│   ├── CONTRIBUTING.md     # Main contribution guide
│   ├── CONTRIBUTING/       # Contribution sub-docs
│   │   ├── README.md       # Contributing overview
│   │   ├── AGENT-INSTRUCTIONS.md  # AI agent instructions
│   │   └── GIT-HOOKS.md    # Git hooks documentation
│   └── STRUCTURE.md        # Repository structure rules (detailed)
│
├── snippets/               # Mintlify snippets (MUST follow Mintlify conventions)
│   ├── assets/             # Static assets for docs
│   │   ├── favicon.png     # Site favicon
│   │   ├── logo/           # Logo files (light/dark variants)
│   │   ├── logos/          # Additional logo assets
│   │   ├── domain/         # Domain-specific assets (HOME, ABOUT, COMMUNITY, etc.)
│   │   ├── media/          # Media files (images, videos, gifs)
│   │   ├── site/           # Site-wide assets
│   │   └── data/           # Asset-related data files
│   ├── components/         # React/JSX components
│   │   ├── content/        # Content display components
│   │   ├── display/        # Display/UI components
│   │   ├── domain/         # Domain-specific components
│   │   ├── integrations/  # Integration components
│   │   ├── layout/         # Layout components
│   │   └── primitives/     # Primitive/base components
│   ├── data/               # Data files (JSON, YAML - not OpenAPI specs)
│   │   ├── gateways.jsx    # Gateway data
│   │   ├── gateways/       # Gateway-specific data files
│   │   ├── references/     # Reference data
│   │   └── variables/      # Variable definitions
│   ├── automations/        # Dynamic content components
│   │   ├── blog/           # Blog automation components
│   │   ├── discord/        # Discord automation components
│   │   ├── forum/          # Forum automation components
│   │   ├── globals/        # Global automation data
│   │   ├── luma/           # Luma calendar automation
│   │   ├── showcase/       # Showcase automation
│   │   ├── youtube/        # YouTube automation
│   │   └── scripts/        # Automation scripts (JSON configs)
│   ├── pages/              # REQUIRED: MDX sub-views (Mintlify limitation)
│   │   ├── 00_HOME/        # Home page sub-views
│   │   ├── 01_ABOUT/       # About section sub-views
│   │   ├── 04_GATEWAYS/    # Gateway section sub-views
│   │   ├── 05_GPUS/        # GPU section sub-views
│   │   ├── 08_SHARED/      # Shared sub-views
│   │   └── gateways/       # Gateway-specific sub-views
│   ├── generated/          # Generated content
│   │   ├── docs-status-table.mdx    # Auto-generated status table
│   │   └── docs-structure-diagram.mdx  # Auto-generated structure diagram
│   ├── external/           # External documentation references
│   │   ├── awesome-livepeer-readme.mdx
│   │   ├── box-additional-config.mdx
│   │   ├── gwid-readme.mdx
│   │   ├── whitepaper.mdx
│   │   └── wiki-readme.mdx
│   ├── scripts/            # Snippet-related scripts (NOT development scripts)
│   │   ├── generate-data/  # Data generation scripts
│   │   ├── generate-docs-status.js
│   │   ├── generate-seo.js
│   │   ├── fetch-*.sh      # External content fetching scripts
│   │   └── update-component-library.sh
│   ├── snippetsWiki/       # Internal wiki for snippets
│   │   ├── componentLibrary/  # Component library wiki
│   │   ├── index.mdx
│   │   ├── mintlify-behaviour.mdx
│   │   └── theme-colors.mdx
│   ├── styles/             # Snippet-specific styles (NOT global styles)
│   │   └── themeStyles.jsx
│   └── docs-status-data.json  # Documentation status data
│
├── tools/                  # Development tooling
│   ├── ai-rules/          # AI context rules and guidelines
│   │   ├── AI_GUIDELINES.md         # Comprehensive AI safety protocol
│   │   ├── AI-ACCOUNTABILITY-CHECKLIST.md  # AI accountability checklist
│   │   ├── llms.txt.information.md  # LLM information file
│   │   ├── REVIEW_TABLE.md          # Review table guidelines
│   │   ├── ROLLBACK-GUIDE.md        # Rollback procedures
│   │   ├── UNIVERSAL-AI-PROTOCOL.md # Universal AI protocol
│   │   ├── tasks-directory-structure.mdc  # Tasks directory structure
│   │   └── rules/         # Additional AI rules
│   │       ├── git-safety.md
│   │       └── imported/  # Imported rule files
│   ├── config/            # Tool configurations
│   │   ├── cspell.json     # Spell checker configuration
│   │   ├── workflow.lock   # Workflow lock file
│   │   └── workflow.yaml  # Workflow configuration
│   ├── scripts/           # Development scripts
│   │   ├── test/          # Test scripts
│   │   │   ├── test-v2-pages.js
│   │   │   ├── verify-all-pages.js
│   │   │   ├── verify-pages.js
│   │   │   └── [other test scripts]
│   │   ├── verify/        # Verification scripts (empty or legacy)
│   │   ├── audit-all-v2-pages.js
│   │   ├── audit-component-usage.js
│   │   ├── check-component-errors.js
│   │   ├── debug-mint-dev.js
│   │   ├── final-verification.js
│   │   ├── find-correct-url.js
│   │   ├── inspect-page.js
│   │   ├── inspect-video-page.js
│   │   ├── test-all-pages-browser.js
│   │   ├── test-all-pages-comprehensive.js
│   │   ├── test-v2-pages.js
│   │   └── test-youtube-pages.js
│   ├── package.json       # Tooling dependencies
│   └── package-lock.json  # Dependency lock file
│
├── tests/                 # Test suite
│   ├── config/            # Test configuration
│   ├── fixtures/          # Test fixtures
│   ├── integration/       # Integration tests
│   │   └── browser.test.js  # Browser integration tests
│   ├── unit/              # Unit tests
│   │   ├── style-guide.test.js  # Style guide tests
│   │   ├── mdx.test.js    # MDX validation tests
│   │   ├── spelling.test.js  # Spelling tests
│   │   └── quality.test.js  # Quality tests
│   ├── utils/             # Test utilities
│   ├── reports/           # Test reports
│   └── run-all.js         # Run all tests script
│
├── tasks/                 # AI working directory (NOT for production content)
│   ├── plan/              # Planning documents & task specifications
│   │   ├── complete/      # Completed plans
│   │   └── [plan files]   # Planning documents
│   ├── reports/           # Task outputs & audit reports
│   │   ├── upstream-merge-plan.md
│   │   ├── readme-refactor-plan.md
│   │   └── [other reports]
│   ├── context_data/      # Context data for AI agents
│   │   └── ABOUT/         # About section context data
│   │       └── CONTEXT DATA/  # Network and Protocol context
│   ├── scripts/           # Task execution scripts
│   └── errors/            # Error documentation & troubleshooting
│
├── v1/                    # IMMUTABLE/FROZEN (DO NOT CHANGE, REMOVE, OR ARCHIVE)
│   ├── pages/             # Legacy documentation pages
│   ├── ai/                # Legacy AI documentation
│   ├── api-reference/     # Legacy API reference
│   ├── delegators/        # Legacy delegator docs
│   ├── developers/        # Legacy developer docs
│   ├── gateways/          # Legacy gateway docs
│   ├── images/            # Legacy images
│   ├── orchestrators/     # Legacy orchestrator docs
│   ├── references/        # Legacy references
│   ├── sdks/              # Legacy SDK docs
│   └── self-hosting/      # Legacy self-hosting docs
│
├── v2/                    # Active version (current documentation)
│   ├── pages/             # Active documentation pages
│   │   ├── 00_home/       # Home section
│   │   ├── 01_about/      # About section
│   │   ├── 02_developers/ # Developer section
│   │   ├── 03_orchestrators/  # Orchestrator section
│   │   ├── 04_gateways/   # Gateway section
│   │   ├── 05_gpus/       # GPU section
│   │   ├── 06_community/ # Community section
│   │   ├── 07_resources/  # Resources section
│   │   ├── 08_products/   # Products section
│   │   └── 09_internal/   # Internal documentation
│   ├── assets/            # V2-specific assets
│   ├── scripts/           # V2-specific scripts
│   └── deprecated/        # Deprecated V2 content
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

### Directory Descriptions

**`.github/`** - GitHub configuration and automation
- **workflows/**: GitHub Actions workflows for CI/CD, testing, and auto-updates
- **scripts/**: Helper scripts for CI/CD processes (data fetching, table generation)
- **ISSUE_TEMPLATE/**: Issue templates that automatically apply `docs-v2` and `help wanted` labels
- **CODEOWNERS**: Defines section ownership for automatic PR reviewer assignment
- **AGENTS.md, augment-instructions.md, copilot-instructions.md**: AI agent guidelines

**`.githooks/`** - Git pre-commit hooks
- **pre-commit**: Main hook that enforces structure, style, and quality checks
- **verify.sh**: Verification script called by pre-commit hook
- **verify-browser.js**: Browser validation for MDX pages
- **server-manager.js**: Manages Mintlify dev server for browser tests
- **BYPASS.md**: Documentation for bypass flags (emergency use only)

**`ai-tools/`** - AI development tool setup guides
- Setup instructions for Claude Code, Cursor, and Windsurf IDEs
- These files are at root level (whitelisted)

**`api/`** - API specifications (OpenAPI/Swagger)
- Consolidated location for all API specs
- **studio.yaml**: Main Livepeer Studio API
- **ai-worker.yaml**: AI Worker API
- **cli-http.yaml**: CLI HTTP API
- **worker/**: Worker-specific API files

**`contribute/`** - Contribution documentation
- **CONTRIBUTING.md**: Main contribution guide
- **CONTRIBUTING/**: Detailed contribution sub-docs (Git hooks, agent instructions)
- **STRUCTURE.md**: Detailed repository structure rules

**`snippets/`** - Mintlify snippets directory (MUST follow Mintlify conventions)
- **assets/**: Static assets (images, videos, logos, favicon) organized by domain
- **components/**: React/JSX components organized by type (content, display, domain, layout, primitives)
- **data/**: Data files (gateways, references, variables) - NOT OpenAPI specs
- **automations/**: Dynamic content components (blog, forum, YouTube, etc.)
- **pages/**: REQUIRED for MDX sub-views (Mintlify limitation - MDX-in-MDX pattern)
- **generated/**: Auto-generated content (status tables, structure diagrams)
- **external/**: External documentation references (whitepaper, wiki, etc.)
- **scripts/**: Snippet-related scripts (NOT development scripts - those go in `tools/scripts/`)
- **snippetsWiki/**: Internal wiki for snippets documentation
- **styles/**: Snippet-specific styles (NOT global styles - global styles in root `style.css`)

**`tools/`** - Development tooling and scripts
- **ai-rules/**: AI agent rules, guidelines, and protocols
- **config/**: Tool configurations (cspell, workflows)
- **scripts/**: Development scripts organized by purpose:
  - **test/**: Test scripts (v2 pages, verification, browser tests)
  - **verify/**: Verification scripts (legacy/empty)
  - Other scripts: audit, inspection, debugging tools
- **package.json**: Tooling dependencies

**`tests/`** - Test suite
- **config/**: Test configuration files
- **fixtures/**: Test fixtures and sample data
- **integration/**: Integration tests (browser tests)
- **unit/**: Unit tests (style guide, MDX, spelling, quality)
- **utils/**: Test utility functions
- **reports/**: Test execution reports
- **run-all.js**: Script to run all tests

**`tasks/`** - AI working directory (NOT for production content)
- **plan/**: Planning documents and task specifications
  - **complete/**: Completed plans archive
- **reports/**: Task outputs and audit reports
- **context_data/**: Context data for AI agents (Network, Protocol info)
- **scripts/**: Task execution scripts
- **errors/**: Error documentation and troubleshooting guides

**`v1/`** - IMMUTABLE/FROZEN legacy documentation
- **pages/**: Legacy documentation pages
- **ai/, api-reference/, delegators/, developers/, gateways/, orchestrators/**: Legacy section docs
- **images/, references/, sdks/, self-hosting/**: Legacy assets and references
- ⚠️ **DO NOT MODIFY** - Pre-commit hook blocks all changes

**`v2/`** - Active documentation version
- **pages/**: Active documentation organized by section (home, about, developers, etc.)
- **assets/**: V2-specific assets
- **scripts/**: V2-specific scripts
- **deprecated/**: Deprecated V2 content (being phased out)

### Key Rules

1. **Root Directory**: Only files listed in `.whitelist` are allowed at root
2. **Snippets**: Must follow Mintlify conventions (components, data, assets, automations, pages)
   - ❌ **Forbidden in snippets/**: Development scripts (→ `tools/scripts/`), wiki/docs (→ `tools/wiki/`), global styles (→ root `style.css`)
3. **v1/ is FROZEN**: Never modify, remove, or archive files in `v1/` (see [Versioning](#-versioning))
4. **No `public/` folder**: Mintlify doesn't support it - favicon/logo are in `snippets/assets/`
5. **No `styles/` folder**: Mintlify only allows ONE CSS file at root (`style.css`)
   - Snippet-specific styles can go in `snippets/styles/` but global styles must be in root
6. **Scripts**: 
   - Development scripts → `tools/scripts/` organized by purpose
   - Snippet-related scripts → `snippets/scripts/` (data generation, fetching)
   - Task scripts → `tasks/scripts/`
7. **Configs**: All config files go in `tools/config/`, **EXCEPT**:
   - `.prettierrc.yaml` → **ROOT** (Prettier convention)
8. **OpenAPI specs**: All API specs go in `api/` (consolidated location)
9. **Tasks directory**: For AI working files only - NOT production content

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
3. **Follow repository structure** as defined in [Repository Structure](#-repository-structure) section
4. **Use CSS Custom Properties only** - never ThemeData or hardcoded colors (see [Key Contribution Rules](#key-contribution-rules))
5. **Test after every change** - don't batch multiple changes without testing
6. **Commit incrementally** - create commits after each logical change to trigger pre-commit hooks
7. **Never modify `v1/`** - it's frozen and immutable (see [Versioning](#-versioning))
8. **Use absolute imports** - `/snippets/components/...` not relative paths (see [Key Contribution Rules](#key-contribution-rules))
9. **Check component library** before creating new components
10. **Verify with Mintlify docs** before adding new folders or files

### Key Files for AI Agents

- **Structure Rules:** `README.md` (source of truth), `tools/ai-rules/.cursorrules`
- **Styling Rules:** `v2/pages/07_resources/documentation-guide/style-guide.mdx`
- **Component Reference:** `v2/pages/07_resources/documentation-guide/component-library.mdx`
- **Documentation Guide:** `v2/pages/07_resources/documentation-guide/documentation-guide.mdx`
- **AI Guidelines:** `tools/ai-rules/AI_GUIDELINES.md`
