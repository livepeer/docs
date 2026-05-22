# README Repo Research

> Research findings for README rewrite. All numbers verified against live repo state on 2026-03-26.

---

## 1. Repo Structure

### Top-level directories and files

```
Docs-v2-dev/
├── ai-tools/           # AI agent ecosystem (skills, packs, rules, registry)
├── api/                # OpenAPI specs (Studio, Gateway, AI Worker, CLI)
├── contribute/         # CONTRIBUTING guide, agent instructions, git hooks docs
├── docs-guide/         # Internal docs-about-docs: policies, frameworks, catalogs, config
├── operations/         # Scripts (160 JS/SH) + tests (61 test files) + data pipelines
├── snippets/           # Reusable MDX content: components, automations, data, assets, templates
├── tests/              # Root test harness (node_modules only; actual tests in operations/tests/)
├── tools/              # Developer CLI (lpd), dev server, i18n, editor extensions, lib
├── v1/                 # Legacy v1 docs (279 MDX pages, frozen)
├── v2/                 # Active v2 docs (764 published MDX pages + 1,084 _workspace files)
├── workspace/          # Planning, research outputs, session logs, staging
├── _dep-docs/          # Deprecated v1 doc snapshots (about, community, developers, etc.)
├── .github/            # 47 workflow files + config
├── .githooks/          # Pre-commit/pre-push hooks + install script
├── docs.json           # Mintlify navigation and routing config (source of truth)
├── docs-index.json     # Generated docs index
├── llms.txt            # AI-readable site summary (generated)
├── sitemap-ai.xml      # AI sitemap (generated)
├── style.css           # Global CSS
├── Dockerfile          # Docker build (node + mintlify)
├── Makefile            # Docker build shortcut only
├── LICENSE             # MIT
├── SECURITY.md         # Security policy
├── AGENTS.md           # Agent instructions (GitHub surface)
├── ASSISTANT.md        # Assistant-level instructions
├── README.md           # Current README (target for rewrite)
```

### v2 published pages by tab (excluding `_workspace/`)

| Tab | MDX pages |
|-----|-----------|
| gateways | 308 |
| orchestrators | 118 |
| solutions | 117 |
| developers | 45 |
| about | 35 |
| resources | 35 |
| lpt (delegators) | 25 |
| home | 19 |
| internal | 18 |
| community | 18 |
| i18n (cn, es, fr) | 24 |
| root (index.mdx, README.mdx) | 2 |
| **Total published** | **764** |

Additionally: 1,084 `_workspace/` files within v2 (planning artefacts, canonical frameworks, check reports).

v1 legacy: 279 frozen MDX pages.

---

## 2. Quick Start

### lpd CLI

- **Location:** `tools/lpd` (NOT repo root)
- **Invocation:** `bash tools/lpd` or, after setup, just `lpd` (setup adds it to PATH)
- **Version:** 0.2.0

### Verified bootstrap sequence

```bash
# Clone and enter
git clone https://github.com/livepeer/docs.git
cd docs
git checkout docs-v2

# Full automated setup (installs tools deps, test deps, hooks, PATH link, Codex skills)
bash tools/lpd setup --yes

# Start dev server (port 3333 by default)
lpd dev
# or before PATH is set up:
bash tools/lpd dev
```

### What `lpd setup --yes` does

1. `cd tools && npm install` (tools dependencies)
2. `cd tests && npm install` (test dependencies)
3. `.githooks/install.sh` (installs pre-commit + pre-push hooks)
4. Installs `lpd` CLI symlink on user's PATH
5. Syncs Codex planning skill to `~/.codex/skills`
6. Does NOT install Mintlify by default (opt-in via `--with-mintlify` flag or interactive prompt)

### Mintlify installation

Mintlify is required for local preview but is opt-in during setup:
```bash
# During setup (interactive prompt, or explicit flag):
bash tools/lpd setup --with-mintlify

# Or manually:
npm i -g mintlify
```

The `Dockerfile` also installs Mintlify globally for containerised use.

### Key lpd commands

| Command | Purpose |
|---------|---------|
| `lpd setup [--yes]` | Bootstrap local environment |
| `lpd dev` | Start dev server (port 3333) |
| `lpd dev --scoped --scope-tab Developers` | Scoped dev server (faster, subset) |
| `lpd test [--staged\|--full]` | Run test suite |
| `lpd doctor [--strict]` | Check environment readiness |
| `lpd hooks install` | Install git hooks |
| `lpd ci` | Run CI-like validation locally |
| `lpd move-page <old> <new>` | Move page + sync docs.json |
| `lpd repair --surface <id>` | Run governed repair flows |
| `lpd ai-sitemap --write` | Generate sitemap-ai.xml |
| `lpd scripts list` | List managed scripts |

---

## 3. Contributing Flow

### Source files

- `contribute/CONTRIBUTING/README.md` -- main contributing guide
- `contribute/CONTRIBUTING/GIT-HOOKS.md` -- hook documentation
- `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` -- AI agent contributing rules
- `contribute/CONTRIBUTING.mdx` -- Mintlify-rendered contributing page

### Contribution path (verified)

1. Read the style guide (`v2/resources/documentation-guide/style-guide.mdx`)
2. Fork and clone
3. Install hooks: `bash .githooks/install.sh` (or `lpd hooks install`, or `lpd setup`)
4. Run `lpd dev` to preview
5. Submit PR to `docs-v2` branch (NOT `main`)

### Pre-commit hook (`.githooks/pre-commit`)

Hard gates only (blocks commit):

1. **Codex branch isolation** -- AI agents cannot commit directly to `docs-v2`; must use `codex/<issue-id>-<slug>` branches
2. **File deletion guard** -- deletions require human override trailer (`--trailer "allow-deletions=true"`)
3. **MDX syntax validation** -- unparseable pages blocked
4. **docs.json redirect integrity** -- broken redirects blocked
5. **Allowlist protection** -- `.allowlist` edits require human override trailer
6. **v1/ frozen guard** -- modifications to v1/ directory blocked
7. **Codex task contract validation** -- validates contract on codex/* branches
8. **Codex lock validation** -- validates lock ownership on codex/* branches
9. **AI stash policy** -- blocks stash-based isolation patterns

Bypass flags: `SKIP_ALL=1` (emergency), `SKIP_STRUCTURE_CHECK=1` (structure only)

### Pre-push hook (`.githooks/pre-push`)

- Blocks Codex sessions from pushing directly to `docs-v2`
- Validates codex task contract on codex/* branches
- Validates codex lock ownership
- Blocks non-fast-forward pushes on codex/* branches
- Blocks remote branch deletion via push on codex/* branches

### CI checks on PR (15 workflows triggered by `pull_request`)

| Workflow | File |
|----------|------|
| Auto Assign Docs Reviewers | `auto-assign-docs-reviewers.yml` |
| Check Broken Links | `broken-links.yml` |
| Check AI Companion Files | `check-ai-companions.yml` |
| Check Docs Guide Catalogs | `check-docs-guide-catalogs.yml` |
| Check Docs Index | `check-docs-index.yml` |
| Close Linked Issues (docs-v2 Merge) | `close-linked-issues-docs-v2.yml` |
| Codex Governance | `codex-governance.yml` |
| Docs v2 Issue Indexer | `docs-v2-issue-indexer.yml` |
| Generate Docs Guide Catalogs | `generate-docs-guide-catalogs.yml` |
| Issue Auto Label | `issue-auto-label.yml` |
| OpenAPI Reference Validation | `openapi-reference-validation.yml` |
| Test Suite | `test-suite.yml` |
| Test V2 Pages | `test-v2-pages.yml` |
| Verify AI Sitemap | `verify-ai-sitemap.yml` |
| Verify llms.txt Files | `verify-llms-files.yml` |

Additional workflows run on push, schedule, or workflow_dispatch (32 more).

---

## 4. Quality Gates

### Test runner

**Entry point:** `operations/tests/run-all.js`
**Invocation:** `node operations/tests/run-all.js [flags]` or `lpd test`

**Flags:**
- `--staged` -- test only staged files
- `--skip-browser` -- skip browser integration
- `--watch` -- watch mode
- `--wcag` -- include WCAG audit
- `--wcag-no-fix` -- WCAG audit without autofix
- `--precommit-basic` -- limited lane for pre-commit hook
- `--skip-mdx-safe-markdown-check` -- skip MDX safe markdown
- `--skip-pages-index` -- skip pages index generation
- `--skip-script-docs` -- skip script documentation checks

### Test suites run by run-all.js (25+ suites)

| Suite | What it checks |
|-------|---------------|
| Style Guide | CSS/styling rule compliance |
| Copy Lint | Copywriting rules (banned words, constructions) |
| Component Naming | JSX component naming conventions |
| MDX Validation | MDX syntax validity |
| Authoring Tools | Authoring tool unit tests |
| Duplicate Headers | Detects duplicate H2/H3 within pages |
| MDX-safe Markdown | Markdown patterns that break MDX rendering |
| MDX Guardrails | MDX component usage guardrails |
| Docs Page Scope | Page scope/boundary validation |
| Docs Authoring Rules | Content authoring rule enforcement |
| Frontmatter Taxonomy | Frontmatter field compliance |
| Spelling | Spelling checks (cspell) |
| Quality | General quality checks |
| Links & Imports | Broken links and import validation |
| Docs Navigation | docs.json navigation integrity |
| Docs Path Sync | File path / docs.json sync |
| Script Docs | Script documentation headers |
| Skill Docs | AI skill documentation |
| AI-tools Registry | AI tools registry governance |
| Ownerless Governance | Ownerless governance surface checks |
| Agent Docs Freshness | AI agent doc freshness |
| Root Allowlist Format | .allowlist file format |
| Export Portable Skills | Portable skill export tests |
| Docs Guide SOT | docs-guide source-of-truth checks |
| Precommit Staged Cache | Staged file cache tests |
| UI Template Generator | UI template generation tests |
| Component Governance (utils + generators) | Component governance utilities |
| Pages Index Generator | Pages index catalog generation |
| Browser Integration | Puppeteer-based page rendering (optional) |

### Test file counts

- Unit tests: 61 files in `operations/tests/unit/`
- Integration tests: 8 files in `operations/tests/integration/`

### Smoke test for MDX rendering

```bash
node operations/tests/integration/mdx-component-runtime-smoke.js --routes /v2/path
```

---

## 5. Key Numbers

### File counts (verified)

| Category | Count | Location |
|----------|-------|----------|
| v2 published MDX pages (excl. _workspace) | 764 | `v2/` |
| v2 _workspace files | 1,084 | `v2/*/_workspace/` |
| v1 frozen MDX pages | 279 | `v1/` |
| JSX components (active) | 47 | `snippets/components/` |
| JSX automations | 30 | `snippets/automations/` |
| Data snippet files | 31 | `snippets/data/` |
| Asset files | 182 | `snippets/assets/` |
| External snippets | 6 | `snippets/external/` |
| Operations scripts (JS + SH) | 160 | `operations/scripts/` |
| Test files (unit + integration) | 69 | `operations/tests/` |
| GitHub workflows | 47 | `.github/workflows/` |
| AI skills | 30 | `ai-tools/ai-skills/` |
| OpenAPI spec files | 13 | `api/` |

### Operations scripts by category

| Category | Script count |
|----------|-------------|
| audits | 17 |
| validators | 32 |
| generators | 20 |
| remediators | 15 |
| automations | 33 |
| dispatch | 14 |
| snippets | (shared libs) |
| config | (shared config) |

### Component subdirectories

| Subdirectory | JSX files |
|--------------|-----------|
| wrappers | 18 |
| elements | 12 |
| integrators | 7 |
| displays | 6 |
| scaffolding | 3 |
| config | 1 |

### AI skills (30 total, excluding _workspace and templates)

Co-work process skills: `thread`, `research`, `design`, `build`, `iterate`, `pm`, `dispatch`, `agent-brief`, `diagnose`

Content pipeline skills: `page-authoring`, `docs-copy`, `style-and-language-homogenizer-en-gb`, `rubric-static-review`, `docs-quality-and-freshness-audit`, `product-thinking`, `content-pipeline-pass-a`, `content-pipeline-pass-b`, `content-pipeline-tab-map`

Specialised skills: `catalog`, `cleanup-quarantine-manager`, `component-layout-governance`, `cross-agent-packager`, `docs-coverage-and-route-integrity-audit`, `docs-review-fix-execution`, `docs-review-packet-generation`, `generated-mdx-banners-governance`, `repo-audit-orchestrator`, `script-footprint-and-usage-audit`, `skill-docs`, `source-content`

### Branch model

| Branch | Purpose |
|--------|---------|
| `docs-v2` | Deploy branch (production) |
| `docs-v2-dev` | Test/development branch |
| `main` | GitHub default (not used for deployment) |
| `codex/<issue-id>-<slug>` | AI agent task branches (enforced by hooks) |

### Package dependency locations

| Location | Purpose |
|----------|---------|
| `tools/package.json` | Tools, validators, generators (puppeteer, cspell, gray-matter, etc.) |
| `tests/node_modules/` | Test harness dependencies |
| No root `package.json` | Dependencies are scoped to subdirectories |

---

_Researched: 2026-03-26_
