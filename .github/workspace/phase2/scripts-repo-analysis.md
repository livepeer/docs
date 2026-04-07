# Scripts Repo Analysis

> Phase 1.1: Scripts Governance
> Generated: 2026-04-02
> Source: operations/scripts/ (191 files) + .github/scripts/ (10 files)
> Alignment target: workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md
> Related: .github/workspace/framework-canonical.md (actions framework, 8 decisions)

---

## 1. Inventory

| Category | Count |
|---|---|
| Total script files (operations/scripts/ + .github/scripts/) | 201 |
| Active scripts (with @type tag) | 137 |
| Ungoverned (no @type, not archive/test/lib/config) | 17 |
| Archive/deprecated | 23 |
| Test files | 9 |
| Library modules (/lib/) | 12 |
| Config/utility | 3 |
| **Total active (excl. archive, test, lib, config)** | **154** |

---

## 2. Current Taxonomy (from script framework)

### Types (6)

| Type | @type value | Folder | Active count | What it does |
|---|---|---|---|---|
| audit | `audit` | audits/ | 17 | Read-only scan, measure, report |
| automation | `automation` | automations/ | 22 | End-to-end pipelines: fetch, transform, write |
| dispatch | `dispatch` | dispatch/ | 26 | Orchestrate child scripts/processes |
| generator | `generator` | generators/ | 20 | Produce new files from source-of-truth |
| remediator | `remediator` | remediators/ | 17 | Bulk fix/repair files in place |
| validator | `validator` | validators/ | 33 |  Enforce rules with pass/fail |

Non-standard types found: `orchestrator` (1), `utility` (1). Not in framework.

### Concerns (4)

| Concern | Active count | What it covers |
|---|---|---|
| content | 69 | Docs pages, copy, SEO, veracity, quality, reference |
| governance | 42 | Scripts about scripts, repo structure, catalogs |
| ai | 13 | LLM files, agent packaging, skills sync |
| components | 13 | Component library, registry, CSS, naming |

### JSDoc Coverage

| Metric | Count | % |
|---|---|---|
| Has @script or @type tag | 187 | 93% |
| Has @type tag | 140 | 70% |
| Has @concern tag | 140 | 70% |
| Missing both | 14 | 7% |

**93% have some JSDoc. 70% have the full type/concern classification.** The gap is mostly in the automations folder (77% governed vs 100% in most other folders).

---

## 3. Type x Concern Matrix

Active scripts only (excluding archive, test, lib, config).

| type / concern | ai | components | content | governance | UNGOVERNED |
|---|---|---|---|---|---|
| audit | - | 2 | 11 | 4 | - |
| automation | 6 | - | 15 | 1 | - |
| dispatch | 4 | - | 4 | 18 | - |
| generator | 1 | 4 | 7 | 8 | - |
| remediator | - | 1 | 14 | 2 | - |
| validator | 2 | 6 | 16 | 9 | - |
| UNGOVERNED | - | - | - | - | 17 |

**Observations:**
- `content` dominates (69/154 = 45%), same problem as actions where `content` carried 26/45
- `dispatch/governance` is the biggest single cell (18 scripts). These are hooks, pipeline orchestrators, and session management
- `automation/content` (15 scripts) maps to the integrator scripts that actions workflows call
- 17 ungoverned scripts need classification

---

## 4. Alignment Gaps: Script Framework vs Actions Framework

The actions framework (D-ACT-01 through D-ACT-08) made decisions that now diverge from the script framework.

| Dimension | Script framework (current) | Actions framework (D-ACT decisions) | Gap |
|---|---|---|---|
| **Types** | 6: audit, automation, dispatch, generator, remediator, validator | 7: audit, integrator, dispatch, generator, remediator, validator, interface | `automation` renamed to `integrator` (D-ACT-07). `interface` added (D-ACT-01). Scripts still use `automation` |
| **Concerns** | 4: content, components, governance, ai | 7: integrations, copy, maintenance, health, discoverability, governance, brand | `content` split into 5 concerns (D-ACT-05). `components` absorbed. `ai` absorbed. Scripts still use old 4 |
| **Architecture** | Scripts are standalone; workflows call them | Workflows are dispatchers; type lives on the script (D-ACT-08) | Script framework doesn't acknowledge this relationship |
| **Naming** | `type/concern/niche/script-name.js` (3-tier path) | `type-concern-verb-name.yml` (4-segment flat name) | Different conventions for different constraints (folders vs flat) |

### What needs to align

1. **Type rename:** `automation` in script framework becomes `integrator` to match D-ACT-07. The `automations/` folder becomes `integrators/`
2. **Concern expansion:** The 4 concerns in script framework expand to match the 7 from D-ACT-05. The `content/` folder splits into `copy/`, `maintenance/`, `health/`, `discoverability/`, `integrations/`. The `components/` and `ai/` folders get absorbed
3. **Interface type:** Scripts for the 5 interface workflows (issue labelling, PR assignment, etc.) need the `interface` type. Currently they're inline in workflows and don't exist as scripts yet. After extraction (Phase 4B) they will
4. **Shared classification tests:** Both frameworks should use the same classification tests. D-ACT-07's "If it pulls data from an external source, it is an integrator" should be in the script framework too

---

## 5. Ungoverned Scripts (17)

| Script | Location | Likely type | Notes |
|---|---|---|---|
| blockchain-page-spec.js | automations/content/data/contracts/ | automation | Part of contracts pipeline (deferred) |
| branch-watch.js | automations/content/data/contracts/ | automation | Part of contracts pipeline (deferred) |
| constants.js | automations/content/data/contracts/ | config/utility | Constants file, not a runnable script |
| incidents.js | automations/content/data/contracts/ | automation | Part of contracts pipeline (deferred) |
| pipeline.js | automations/content/data/contracts/ | dispatch | Part of contracts pipeline (deferred) |
| solidity-parser.js | automations/content/data/contracts/ | utility | Parser module, not a runnable script |
| spec.js | automations/content/data/contracts/ | config/utility | Spec definitions, not a runnable script |
| generate-hero-background.js | generators/media/ | generator | Media generation |
| generate-hero-image.js | generators/media/ | generator | Media generation |
| fix-usage-paths.js | remediators/governance/scaffold/ | remediator | Scaffold utility |
| test-scripts.sh | snippets/ | validator | Misplaced (should be in validators/ or tests/) |
| test-mintlify-version-language-toggle.js | validators/content/language-translation/ | validator | Test file masquerading as validator |
| test-v2-pages.js | validators/content/structure/ | validator | Browser test script |
| check-companion-manifest.js | validators/governance/ai/ | validator | Missing @type tag only |
| fetch-forum-data.js | .github/scripts/ | integrator | In .github/ (migration candidate D-ACT-06) |
| fetch-youtube-data.js | .github/scripts/ | integrator | In .github/ (migration candidate D-ACT-06) |
| project-showcase-sync.js | .github/scripts/ | integrator | In .github/ (migration candidate D-ACT-06) |

**7 of the 17 are contracts pipeline modules** (deferred, pipeline changes in progress).
**3 are in .github/scripts/** (migration candidates, already flagged in D-ACT-06).
**3 are utility/config modules** not runnable scripts (constants.js, solidity-parser.js, spec.js).
**4 are genuinely missing JSDoc** and need tagging.

---

## 6. Content Concern Breakdown

`content` carries 69 scripts (45%). The actions framework split it into 5 concerns. Here's how the 69 content scripts would redistribute:

| New concern | Scripts that map here | Count | Examples |
|---|---|---|---|
| `copy` | Style, language, grammar, spelling, translation, copy patterns | ~18 | lint-copy.js, check-grammar-en-gb.js, translate-docs.js, repair-spelling.js, audit-copy-patterns.js |
| `maintenance` | Catalogs, indexes, registries, reference data, reconciliation | ~15 | generate-docs-index.js, generate-pages-index.js, generate-glossary.js, generate-content-gap-reconciliation.js |
| `health` | Page integrity, links, structure, rendering, freshness | ~16 | page-links-audit.js, lint-structure.js, check-double-headers.js, verify-all-pages.js, docs-quality-and-freshness-audit.js |
| `discoverability` | SEO, AI sitemap, OG images, LLM files, companion files | ~10 | generate-seo.js, generate-ai-sitemap.js, generate-og-images.js, generate-glossary-companions.js |
| `integrations` | External data fetching, API calls, data transforms | ~10 | fetch-external-docs.sh, fetch-openapi-specs.sh, convert-rss-to-mdx.js, run-solutions-social-fetch.js |

**The same split that worked for actions works for scripts.** `content` was a grab-bag in both systems.

### components and ai redistribution

| Old concern | New concern | Reasoning | Count |
|---|---|---|---|
| `components` (13 scripts) | `maintenance` | Component registry, docs, health are about maintaining the component system | 13 |
| `ai` (13 scripts) | Split: `discoverability` (LLM/sitemap) + `governance` (codex/agent management) | AI companions/sitemap = discoverability. Codex/agent packaging = governance | 13 |

---

## 7. Folder Structure Impact

Current:
```
operations/scripts/
  audits/
    components/
    content/
    governance/
  automations/
    ai/
    content/
    governance/
  config/
  dispatch/
    ai/
    content/
    governance/
  generators/
    ai/
    components/
    content/
    governance/
    media/
  remediators/
    components/
    content/
    governance/
  validators/
    ai/
    components/
    content/
    governance/
```

Target (after alignment):
```
operations/scripts/
  audits/
    copy/
    health/
    maintenance/
    discoverability/
    governance/
  integrators/              # renamed from automations/
    copy/
    integrations/
    maintenance/
    governance/
  config/
  dispatch/
    discoverability/        # was ai/
    governance/
    health/                 # was content/
  generators/
    discoverability/        # was ai/ + content/seo
    maintenance/            # was components/ + content/catalogs + governance/catalogs
    governance/
    media/
  remediators/
    copy/                   # was content/style + content/repair(spelling)
    health/                 # was content/repair(links,imports)
    maintenance/            # was components/
    discoverability/        # was content/seo
    governance/
  validators/
    copy/                   # was content/copy + content/grammar
    health/                 # was content/structure + components/library
    maintenance/            # was content/structure(docs-path) + governance/pr
    discoverability/        # was ai/ + governance/ai
    governance/
  interface/                # NEW (after inline extraction from workflows)
    governance/
```

**This is a large-scale folder rename.** 191 files affected. Must be done atomically with full reference scanning.

---

## 8. Relationship to Actions Workflows

Every workflow dispatches scripts. Here's the complete caller map for `.github/scripts/`:

| Script (.github/scripts/) | Called by workflow | Also used by |
|---|---|---|
| fetch-contract-addresses.js | update-contract-addresses.yml | None |
| fetch-discord-announcements.js | update-discord-data.yml | None |
| fetch-forum-data.js | update-forum-data.yml | None |
| fetch-ghost-blog-data.js | update-ghost-blog-data.yml | None |
| fetch-github-discussions.js | update-github-data.yml | None |
| fetch-github-releases.js | update-github-data.yml | None |
| fetch-rss-blog-data.js | update-rss-blog-data.yml | None |
| fetch-youtube-data.js | update-youtube-data.yml | None |
| generate-changelog.js | update-changelogs.yml | None |
| project-showcase-sync.js | project-showcase-sync.yml | None |

All 10 are 1:1 with their workflow. No reuse. After migration to `operations/scripts/`, they become available to other callers.

Scripts in `operations/scripts/` called by workflows:

| Script | Called by workflow(s) |
|---|---|
| generate-glossary-companions.js | generate-ai-companions.yml, check-ai-companions.yml |
| generate-ai-sitemap.js | generate-ai-sitemap.yml, verify-ai-sitemap.yml |
| generate-llms-files.js | generate-llms-files.yml, verify-llms-files.yml |
| generate-component-registry.js | generate-component-registry.yml, check-docs-guide-catalogs.yml, test-suite.yml, content-health.yml |
| generate-docs-index.js | generate-docs-index.yml, check-docs-index.yml, translate-docs.yml |
| generate-docs-guide-indexes.js | generate-docs-guide-catalogs.yml, check-docs-guide-catalogs.yml |
| generate-docs-guide-pages-index.js | generate-docs-guide-catalogs.yml, check-docs-guide-catalogs.yml |
| generate-component-docs.js | generate-docs-guide-catalogs.yml, check-docs-guide-catalogs.yml |
| governance-pipeline.js | governance-sync.yml, repair-governance.yml |
| validate-codex-task-contract.js | codex-governance.yml |
| check-codex-pr-overlap.js | codex-governance.yml |
| fetch-external-docs.sh | broken-links.yml, test-suite.yml, test-v2-pages.yml |
| docs-quality-and-freshness-audit.js | content-health.yml |
| v2-link-audit.js | v2-external-link-audit.yml |
| openapi-reference-audit.js | openapi-reference-validation.yml |
| style-and-language-homogenizer-en-gb.js | style-homogenise.yml |
| generate-seo.js | seo-refresh.yml |
| translate-docs.js | translate-docs.yml |

**Key finding:** Some scripts are called by multiple workflows (generate-component-registry.js is used by 4 workflows). This affects consolidation: merging workflows that share scripts is simpler than merging ones with unique scripts.

---

## 9. Shared Code Analysis

### escapeForJSX / mdx-sanitise

All 10 `.github/scripts/` files import from `operations/scripts/config/mdx-sanitise.js`. This is already a shared module. No duplication of escape logic.

However, the `.github/scripts/` files share other patterns:
- JSX file writer (fs.writeFileSync with JSX template)
- Config loader (reads product-social-config.json)
- HTTP fetcher (custom https.request wrapper)
- Error handling (try/catch with process.exit)

These are not extracted into shared modules. Each script duplicates them.

### Shared code extraction candidates

| Pattern | Duplicated in | Extract to |
|---|---|---|
| JSX data file writer | All 10 .github/scripts/ | shared/jsx-writer.js |
| Config loader (product-social-config.json) | 8 of 10 .github/scripts/ | shared/config-loader.js |
| HTTP/HTTPS fetcher | All 10 .github/scripts/ | shared/http-client.js |
| GitHub API client (GraphQL + REST) | fetch-github-discussions.js, fetch-github-releases.js | shared/github-client.js |

---

## 10. Summary: What Phase 1.2 (Full Audit) Needs to Determine

1. **Per-script classification** under the new 7-concern taxonomy (not the old 4)
2. **Per-script caller map** (which workflows, skills, and other scripts call each one)
3. **Per-script output map** (what data files, pages, or side effects each produces)
4. **Consolidation candidates** (duplicates, shared-structure groups, dead scripts)
5. **Shared module extraction plan** (what's duplicated, what to extract)
6. **Migration plan for .github/scripts/** (target paths in operations/scripts/)
7. **Folder restructure plan** (old concern folders to new concern folders)
