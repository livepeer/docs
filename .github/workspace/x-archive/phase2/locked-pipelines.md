# Purpose & Aims

This repo is ownerless and self-governed. Therefore it must selfrepair and self-document as much as possible via these pipeline workflows

# RFP Docs Needs

RFP: https://forum.livepeer.org/t/rfp-documentation-restructure/3071

1. **Pages are healthy** - no broken links, no MDX errors, no rendering issues, no stale data, WCAG accessible (48 scripts serve this)
2. **Copy and brand is homogeneous** - UK English, consistent voice, grammar, spelling, style guide compliance (11 scripts serve this)
3. **Repo is easy to contribute to** - patterns clear, self-documenting catalogs/indexes/registries, scaffolding, no drift (26 scripts serve this)
4. **Docs are AI-discoverable** - sitemaps, llms.txt, companion files, SEO metadata, OG images auto-update (5 scripts serve this)
5. **Docs are future-proof** - external data pipelines keep content current without human intervention (11+ scripts serve this)
6. **Governance and self-repair** - ownership, review processes, contribution guidelines, self-healing, hook enforcement (43 scripts serve this)
7. **Zero broken links and redirects** - 301 redirects after restructure, no dead pages, path sync on file moves (4 scripts + /propagate skill)
8. **Multilingual readiness** - translation infrastructure, localised docs.json, validation (translate-docs.js + 12 lib modules)

# Product Capabilities

What this product needs to do to survive without an owner, and what it can actually do today.

## 1. Protect itself

*Detect when something breaks, fix what it can, raise issues for what it can't, block bad changes before they land.*

| Capability | Need | Status |
|---|---|---|
| Detect broken links on PR | Block bad changes | WORKING |
| Detect broken rendering on PR | Block bad changes | WORKING |
| Block bad PRs (hard gate) | Block bad changes | WORKING (P2: test-suite, codex-governance) |
| Detect + auto-repair page integrity | Fix automatically | WORKING (page-integrity-health.yml) |
| Detect content quality issues on schedule | Detect when something breaks | BROKEN (continue-on-error masks all failures) |
| Detect stale data on schedule | Detect when something breaks | HEADLESS (reports, never re-dispatches) |
| Detect broken external links on schedule | Detect when something breaks | HEADLESS (reports, never creates issue) |
| Detect API spec drift + auto-fix | Fix automatically | GOLD STANDARD (openapi-reference-validation) |
| Enforce copy/grammar/spelling on PR | Block bad changes | MISSING (8 scripts exist, no PR workflow) |
| Enforce page structure on PR | Block bad changes | PARTIAL (9 validators, most not wired) |

## 2. Keep itself current

*Pull fresh data, regenerate derived files, detect drift.*

| Capability | Need | Status |
|---|---|---|
| Pull social feed data on schedule | Fresh external data | FRAGILE (3 missing permissions, no error handling) |
| Pull contract data | Fresh external data | WORKING (recently updated) |
| Pull release data | Fresh external data | WORKING |
| Regenerate indexes on content push | Derived files current | WORKING (6 P4 generators) |
| Verify generated files on PR | Detect drift | WORKING (5 verify-pair validators) |
| Translate content | Multi-language | WORKING (path mismatch bug) |

## 3. Maintain its own standards

*Voice, grammar, spelling, terminology, metadata, visual identity.*

| Capability | Need | Status |
|---|---|---|
| Fix EN-GB style violations | Consistent voice | WORKING (manual only) |
| Lint copy patterns on PR | Consistent writing | MISSING (scripts exist, no workflow) |
| Check grammar on PR | Correct grammar | MISSING (script exists, no workflow) |
| Check proper nouns on PR | Correct terminology | MISSING (script exists, no workflow) |
| Auto-correct spelling | Correct spelling | MISSING (script exists, no workflow) |
| Keep OG images current | Visual identity | MISSING (script exists, no workflow) |
| Keep glossary current | Terminology | MISSING (script exists, no workflow) |
| 317+ terms harvested | Terminology | BLOCKED on human review |

## 4. Make itself findable

*AI crawlers, search engines, LLMs.*

| Capability | Need | Status |
|---|---|---|
| AI sitemap auto-regenerates | AI discovery | WORKING |
| llms.txt auto-regenerates | LLM discovery | WORKING |
| Companion files auto-regenerate | AI discovery | WORKING |
| SEO metadata updates | Search engine discovery | BROKEN (P0: no commit step) |
| OG images generated | Social sharing | DISCONNECTED (script, no workflow) |
| llms-full.txt generated | Full LLM index | MISSING (script supports, not generated) |

## 5. Document itself

*Catalogs, indexes, registries auto-regenerate. Contributing is self-guided.*

| Capability | Need | Status |
|---|---|---|
| Component registry auto-generates | Self-documenting | WORKING |
| Docs index auto-generates | Self-documenting | WORKING |
| Docs guide catalogs auto-generate | Self-documenting | WORKING |
| Script registry auto-generates | Self-documenting | DISCONNECTED (script, no workflow) |
| AI tools inventory auto-generates | Self-documenting | DISCONNECTED (script, no workflow) |
| New script scaffolding | Contributor experience | WORKING (CLI) |
| Actions library auto-generates | Self-documenting | STAGED (not yet in .github/workflows/) |

## 6. Govern itself

*Rules enforced, issues managed, drift repaired.*

| Capability | Need | Status |
|---|---|---|
| Codex compliance enforced on PR | Rule enforcement | WORKING (P2 hard gate) |
| Post-merge governance sync | Rule enforcement | WORKING |
| Weekly self-heal (governance drift) | Self-repair | WORKING |
| PR reviewer auto-assignment | Issue management | WORKING (inline, hardcoded branch) |
| Issue close on merge | Issue management | WORKING (inline) |
| Discord issue intake | Issue management | WORKING (inline) |
| Issue indexing | Issue management | WORKING (inline) |
| Issue auto-labelling | Issue management | WORKING (inline, hardcoded labels) |
| Claude hooks (14 scripts) | Agent constraint | WORKING (local) |
| Git hooks (pre-commit, pre-push) | Rule enforcement | WORKING |

## The 6 Critical Gaps

1. **No closed-loop monitoring.** 3 scheduled scanners report findings but take no follow-up action. An ownerless repo needs: scan, diagnose, then either auto-fix or create an issue. Only openapi-reference-validation does this
2. **No copy/brand enforcement in CI.** 8 scripts for grammar, spelling, copy patterns exist but no PR workflow. Any contributor can merge content that violates every standard
3. **No working SEO pipeline.** The only SEO workflow has a P0 bug (no commit step). OG images have no workflow. llms-full.txt not generated
4. **Fragile data pipelines.** Social feeds work but 3 have missing permissions, none have error handling or concurrency control
5. **1,224 lines of inline JS in governance workflows.** Can't test, can't reuse, can't govern
6. **No single entry point.** 201 scripts, 45+ workflows, no way for a contributor to understand the system

## Aims

**What we are doing:** Preparing this repo for production handover as an ownerless, self-maintaining, self-documenting, AI-first, future-proof source of truth for the Livepeer protocol. Starting with the workflow pipelines that implement this, and making it straightforward to add new ones.

**What "done" looks like:**

- Every pipeline follows check, remediate, error-handle. No headless scans. No silent failures
- Every script is governed (typed, tagged, in the right folder, wired to a dispatcher)
- Every concern (health, copy, brand, discoverability, maintenance, governance) has complete pipeline coverage
- A contributor (human or AI) can find, understand, and extend any pipeline from a single entry point
- The repo detects its own problems and either fixes them or raises an issue. No human monitoring required

**Why this matters:**

1. **Ownerless operation.** No permanent maintainer. The repo must govern itself through pipelines that scan, repair, and report without human intervention
2. **Visibility.** No single place today to see what runs, when, why, or what it touches. 201 scripts across 6 type folders with inconsistent governance
3. **Reliability.** 18 known bugs including 5 P0. Missing permissions, masked errors, no concurrency control on auto-commit workflows. 3 headless scanners that report into the void
4. **Clarity.** 45 workflows is too many. Scripts are broken, unfinished, or duplicated. 13 brand scripts have zero CI integration. 9 health validators have no workflow. Full scan-fix chains exist as scripts but nothing dispatches them
5. **Maintainability.** Consolidation reduces 45 workflows to ~22. Shared module extraction eliminates code duplication across 10 fetch scripts. Thin dispatchers mean adding a new pipeline is config, not code
6. **Self-documentation.** When a workflow or script changes, its documentation regenerates automatically. Catalogs, indexes, and registries stay current through pipelines, not manual updates
7. **Alignment.** Scripts, actions, and components speak the same taxonomy (type, concern, niche). One governance model, three surfaces
8. **AI-first.** Every pipeline, script, and page is discoverable by AI agents through structured metadata, companion files, and LLM-optimised indexes

### Cross-cutting scripts (serve multiple needs)

| Script                                                              | Needs served                                |
| ------------------------------------------------------------------- | ------------------------------------------- |
| add-pagetype-mechanical.js, assign-purpose-metadata.js              | 2 (copy/brand) + 3 (contributor experience) |
| generate-hero-background.js, generate-hero-image.js                 | 2 (copy/brand)                              |
| audit-icon-usage.js                                                 | 2 (copy/brand)                              |
| audit-glossary-gaps.js, terminology-search.js, generate-glossary.js | 2 (copy/brand) + 5 (future-proof)           |
| quarantine-manager.js                                               | 1 (health)                                  |
| docs-path-sync.js, sync-docs-paths.js                               | 7 (zero broken links)                       |
| generate-api-docs.sh                                                | 3 (contributor experience)                  |

### RFP gaps not yet covered by any pipeline

NOTE: some of these don't have script workflows. Some may be gaps

| RFP requirement                                                  | Status                                         |
| ---------------------------------------------------------------- | ---------------------------------------------- |
| Measurable reduction in support tickets                          | No tracking pipeline                           |
| Community contribution workflows with demonstrated participation | PR templates exist, no metrics                 |
| Ecosystem integration (website, explorer, governance portal)     | No cross-property pipeline                     |
| Analytics integration                                            | No pipeline                                    |
| Versioning/deprecation tracking                                  | Changelogs exist but no deprecation automation |
| Starter repositories, copy-paste snippets freshness              | Content exists, no freshness pipeline          |

# Repo Concern, Framework & Governance Pipelines

What scripts are doing in general and why.

## All Workflows

Framework is scripts & actions frameworks.

Have

- Trigger/s
- Action/s
- Error Handling

All scripts (best practices)

- naming
- organisation in repo
- jsdocs
- --dry-run, ??
- tests
- use github variables / secrets?

## Workflow Types (Trigger Events)

-> Workflows are both github actions & script pipelines (pre-commit items, manual pipelines)

### Github Actions

- used in PRs
- cron jobs
- data fetchers/writers

### Script Workflows

- used in pre-commit hooks
- used in lpd or testing
- used manually

In general these workflows are triggered as:

### CI/CD Pre-Commit Workflows

Remediate or block before commits

### CICD PR Workflows:

remediate or create on PRs

### Data / Cron Workflows:

- automations that fetch recent & up-to-date data
- External Workflows: workflows triggered by other actions (eg a form change, or new PR or data)

## Workflow Pipeline Types

### 1. Remediation Pipelines

Keep Pages healthy

- Pre-commit & AI AGENT GUIDES
  - em-dashes
  - UK English
  -

## Keep Pages Discoverable

### 2. Maintenance Pipelines

# Pipeline Decisions by Concern

Every concern below lists: what pipelines exist, what scripts serve them, what's working, what's broken, what's missing. Every script in the repo is accounted for.

---

## Health

_Pages work correctly. Links resolve. Content renders. Data is fresh. Structure is valid._

### Working pipelines

| Pipeline            | Trigger   | Dispatcher                               | Scripts                                  | Status                                  |
| ------------------- | --------- | ---------------------------------------- | ---------------------------------------- | --------------------------------------- |
| Link check (PR)     | PR        | broken-links.yml (P3)                    | fetch-external-docs.sh                   | Working                                 |
| Page rendering (PR) | PR        | test-v2-pages.yml (P3)                   | fetch-external-docs.sh, test-v2-pages.js | Working                                 |
| OpenAPI spec drift  | Cron + PR | openapi-reference-validation.yml (P3+P5) | openapi-reference-audit.js               | GOLD STANDARD (scan, detect, create PR) |

### Broken pipelines

| Pipeline             | Trigger | Dispatcher                      | Scripts                                                                                                                                                                                | Issue                                                                             |
| -------------------- | ------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Content quality scan | Cron    | content-health.yml (P5)         | docs-quality-and-freshness-audit.js, audit-component-usage.js, generate-component-registry.js, scan-component-imports.js, repair-component-metadata.js, component-layout-governance.js | BROKEN: continue-on-error masks all 6 steps. Repair script IS in chain but masked |
| Data freshness scan  | Cron    | freshness-monitor.yml (P5)      | inline (80 lines)                                                                                                                                                                      | Headless: reports but never re-dispatches stale feed integrator                   |
| External link scan   | Cron    | v2-external-link-audit.yml (P5) | v2-link-audit.js                                                                                                                                                                       | Headless: reports but never creates issue                                         |
| SEO metadata refresh | Manual  | seo-refresh.yml                 | generate-seo.js                                                                                                                                                                        | P0: no commit step, writes vanish                                                 |

### Disconnected scripts (exist but no dispatcher)

| Script                                 | Type       | What it does                        | Should be in pipeline                       |
| -------------------------------------- | ---------- | ----------------------------------- | ------------------------------------------- |
| lint-structure.js                      | validator  | Page structure check                | PR workflow (partially in test-suite)       |
| check-double-headers.js                | validator  | Double header detection             | PR workflow                                 |
| check-anchor-usage.js                  | validator  | Anchor validation                   | PR workflow                                 |
| check-mdx-safe-markdown.js             | validator  | Safe markdown check                 | PR workflow                                 |
| check-page-endings.js                  | validator  | Page ending check                   | PR workflow                                 |
| check-description-quality.js           | validator  | Description quality                 | PR workflow                                 |
| verify-all-pages.js                    | validator  | Full page verification              | PR workflow                                 |
| check-docs-path-sync.js                | validator  | Path sync validation                | PR workflow                                 |
| enforce-generated-file-banners.js      | validator  | Banner enforcement                  | PR workflow                                 |
| page-imports-audit.js                  | audit      | Import scan                         | Scheduled scan-to-act                       |
| page-links-audit.js                    | audit      | Link scan                           | Scheduled scan-to-act                       |
| repair-page-imports.js                 | remediator | Fix broken imports                  | Paired with page-imports-audit              |
| repair-page-links.js                   | remediator | Fix broken links                    | Paired with page-links-audit                |
| repair-relative-page-hrefs.js          | remediator | Fix relative hrefs                  | Paired with link repair                     |
| repair-mdx-safe-markdown.js            | remediator | Fix unsafe markdown                 | Paired with safe-markdown check             |
| page-integrity-dispatch.js             | dispatch   | Orchestrate scan+fix chain          | Should be a scheduled dispatcher            |
| page-integrity-rolling-issue.js        | dispatch   | Create tracking issue               | Paired with page-integrity-dispatch         |
| wcag-repair-common.js                  | remediator | WCAG accessibility fixes            | Scheduled or manual                         |
| audit-v2-usefulness.js                 | audit      | Scores pages on usefulness          | Scheduled scan, create issue for low scores |
| audit-media-assets.js                  | audit      | Media asset audit                   | Scheduled scan                              |
| generate-content-gap-reconciliation.js | audit      | Blueprint vs actual coverage        | Scheduled scan                              |
| docs-quality-and-freshness-audit.js    | audit      | Quality/freshness scan              | Already in content-health (masked)          |
| docs-page-research.js                  | audit      | Extract + check factual claims      | PR workflow (veracity)                      |
| docs-research-adjudication.js          | audit      | Validate research registries        | PR workflow (veracity)                      |
| docs-page-research-pr-report.js        | dispatch   | Fact-check on PR changes            | PR workflow (veracity)                      |
| docs-research-packet.js                | dispatch   | Research packet generator           | PR workflow (veracity)                      |
| orchestrator-guides-research-review.js | dispatch   | Orch guides research                | Manual                                      |
| docs-fact-registry.js                  | validator  | Validate fact registries            | PR workflow (veracity)                      |
| quarantine-manager.js                  | remediator | Quarantine files for review         | Manual or scheduled                         |
| add-pagetype-mechanical.js             | remediator | Assign pageType frontmatter         | Manual or scheduled                         |
| assign-purpose-metadata.js             | remediator | Assign purpose/audience frontmatter | Manual or scheduled                         |

**Decision:**

---

## Copy

_Written content that users read on pages is correct, current, and sourced from data pipelines._

### Working pipelines

| Pipeline                 | Trigger         | Dispatcher                                  | Scripts                                                                                                                                                                                             | Status                                                                                     |
| ------------------------ | --------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Social feeds (6 sources) | Cron            | 6 duplicate workflows (merging to 1 matrix) | fetch-discord-announcements.js, fetch-forum-data.js, fetch-ghost-blog-data.js, fetch-github-discussions.js, fetch-github-releases.js, fetch-rss-blog-data.js, fetch-youtube-data.js                 | Working but fragile (3 permission bugs, no error handling, github data has ZERO consumers) |
| Changelogs               | Cron + dispatch | update-changelogs.yml                       | generate-changelog.js                                                                                                                                                                               | Working                                                                                    |
| Translation              | Manual          | translate-docs.yml                          | translate-docs.js, generate-localized-docs-json.js, generate-docs-index.js, validate-generated.js + 12 lib modules                                                                                  | Working (path mismatch bug)                                                                |
| Quality suite (PR)       | PR              | test-suite.yml (P2 hard gate)               | check-naming-conventions.js, check-mdx-component-scope.js, check-component-css.js, check-component-docs.js, check-component-immutability.js, generate-component-registry.js, fetch-external-docs.sh | Working                                                                                    |

### Broken pipelines

| Pipeline | Trigger         | Dispatcher                | Scripts                  | Issue                                        |
| -------- | --------------- | ------------------------- | ------------------------ | -------------------------------------------- |
| Showcase | Cron + dispatch | project-showcase-sync.yml | project-showcase-sync.js | NOT WORKING. Disabled, flagged for follow-up |

### Disconnected scripts (exist but no dispatcher)

_None for copy. All copy scripts are wired to workflows._

### Shared utilities serving copy

| Script                        | What it does               | Used by                                 |
| ----------------------------- | -------------------------- | --------------------------------------- |
| mdx-sanitise.js (config/)     | escapeForJSX, sanitisation | All 7 social feed scripts + changelog   |
| fetch-external-docs.sh        | Pre-fetch external docs    | test-suite, broken-links, test-v2-pages |
| convert-rss-to-mdx.js         | RSS to MDX transform       | Manual utility                          |
| run-solutions-social-fetch.js | Orchestrate social fetches | Manual utility                          |

**Decision:**

---

## Brand

_Voice, style, formatting, spelling are consistent across all pages._

### Working pipelines

| Pipeline        | Trigger | Dispatcher           | Scripts                                 | Status                                              |
| --------------- | ------- | -------------------- | --------------------------------------- | --------------------------------------------------- |
| EN-GB style fix | Manual  | style-homogenise.yml | style-and-language-homogenizer-en-gb.js | Working (script in wrong folder, tagged wrong type) |

### Disconnected scripts (exist but no dispatcher)

| Script                       | Type       | What it does                           | Should be in pipeline                          |
| ---------------------------- | ---------- | -------------------------------------- | ---------------------------------------------- |
| lint-copy.js                 | validator  | Copy pattern linting                   | PR workflow                                    |
| lint-patterns.js             | validator  | Pattern linting                        | PR workflow                                    |
| check-grammar-en-gb.js       | validator  | Grammar check (EN-GB)                  | PR workflow                                    |
| check-proper-nouns.js        | validator  | Proper noun check                      | PR workflow                                    |
| audit-copy-patterns.js       | audit      | Aggregate copy pattern violations      | Scheduled scan                                 |
| repair-spelling.js           | remediator | Auto-correct spelling                  | Manual or scheduled, paired with grammar check |
| repair-ownerless-language.js | remediator | Remove human-owner dependency language | Manual or scheduled                            |
| generate-hero-background.js  | generator  | Hero background images                 | Manual or CI                                   |
| generate-hero-image.js       | generator  | Hero images                            | Manual or CI                                   |
| audit-icon-usage.js          | audit      | Icon usage audit                       | Scheduled scan                                 |
| audit-glossary-gaps.js       | audit      | Glossary gap analysis                  | Scheduled scan                                 |
| terminology-search.js        | audit      | Terminology search                     | Manual utility                                 |
| generate-glossary.js         | generator  | Glossary reference                     | Manual or CI                                   |

**This is the most neglected concern.** 13 scripts, only 1 has a workflow (manual only). No PR-time linting. No scan-then-fix chain.

**Decision:**

---

## Discoverability

_Search engines, AI crawlers, and LLMs find and understand content._

### Working pipelines

| Pipeline                   | Trigger   | Dispatcher                                                     | Scripts                                                      | Status                      |
| -------------------------- | --------- | -------------------------------------------------------------- | ------------------------------------------------------------ | --------------------------- |
| AI companions (gen+verify) | Push + PR | generate-ai-companions.yml (P4) + check-ai-companions.yml (P3) | generate-glossary-companions.js, check-companion-manifest.js | Working (no error handling) |
| AI sitemap (gen+verify)    | Push + PR | generate-ai-sitemap.yml (P4) + verify-ai-sitemap.yml (P3)      | generate-ai-sitemap.js                                       | Working (hardcoded branch)  |
| llms.txt (gen+verify)      | Push + PR | generate-llms-files.yml (P4) + verify-llms-files.yml (P3)      | generate-llms-files.js                                       | Working (no error handling) |

### Broken pipelines

| Pipeline     | Trigger | Dispatcher      | Scripts         | Issue                             |
| ------------ | ------- | --------------- | --------------- | --------------------------------- |
| SEO metadata | Manual  | seo-refresh.yml | generate-seo.js | P0: no commit step, writes vanish |

### Disconnected scripts (exist but no dispatcher)

| Script                      | Type      | What it does                          | Should be in pipeline                   |
| --------------------------- | --------- | ------------------------------------- | --------------------------------------- |
| generate-og-images.js       | generator | OG image generation (needs Puppeteer) | Manual or CI workflow                   |
| og-image-policy.js          | config    | OG image policy rules                 | Used by generate-og-images.js           |
| check-companion-manifest.js | validator | Validate companion manifest           | Already in check-ai-companions workflow |

**Decision:**

---

## Maintenance

_Indexes, catalogs, registries, and reference data stay current and accurate._

### Working pipelines

| Pipeline                         | Trigger         | Dispatcher                                                                 | Scripts                                                                                                                                                   | Status                                           |
| -------------------------------- | --------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Docs index (gen+verify)          | Push + PR       | generate-docs-index.yml (P4) + check-docs-index.yml (P3)                   | generate-docs-index.js                                                                                                                                    | Working                                          |
| Docs guide catalogs (gen+verify) | Push + PR       | generate-docs-guide-catalogs.yml (P4) + check-docs-guide-catalogs.yml (P3) | generate-docs-guide-indexes.js, generate-docs-guide-pages-index.js, generate-component-docs.js, generate-component-examples.js, check-component-health.js | Working                                          |
| Component registry (gen only)    | Push            | generate-component-registry.yml (P4)                                       | generate-component-registry.js                                                                                                                            | Working (NO verify pair)                         |
| Contract addresses               | Cron + dispatch | update-contract-addresses.yml                                              | fetch-contract-addresses.js + pipeline modules                                                                                                            | Working (deferred from rename, recently updated) |
| Release version                  | Cron + dispatch | update-livepeer-release.yml                                                | inline (60 lines)                                                                                                                                         | Working (GNU grep bug)                           |
| Large assets                     | Push + Cron     | sync-large-assets.yml                                                      | inline (80 lines)                                                                                                                                         | Working                                          |
| SDK clients                      | Cron            | sdk_generation.yaml                                                        | Speakeasy (external)                                                                                                                                      | Working (bad name, .yaml ext)                    |

### Disconnected scripts (exist but no dispatcher)

| Script                                  | Type       | What it does              | Should be in pipeline                    |
| --------------------------------------- | ---------- | ------------------------- | ---------------------------------------- |
| generate-pages-index.js                 | generator  | Pages index               | Manual or CI                             |
| generate-ai-skills-indexes.js           | generator  | AI skills catalog         | Manual or CI                             |
| generate-ai-tools-visual-library.js     | generator  | AI tools visual lib       | Manual or CI                             |
| generate-ai-tools-inventory.js          | generator  | AI tools inventory report | Manual or CI                             |
| generate-script-registry.js             | generator  | Script registry           | Manual or CI                             |
| generate-docs-guide-components-index.js | generator  | Component index           | Manual or CI                             |
| generate-ui-templates.js                | generator  | UI templates              | Manual or CLI tool                       |
| new-script.js                           | generator  | Scaffold for new scripts  | CLI tool (not CI)                        |
| generate-api-docs.sh                    | generator  | API docs generation       | Manual                                   |
| fetch-openapi-specs.sh                  | integrator | OpenAPI spec fetch        | Should feed openapi-reference-validation |
| fetch-lpt-exchanges.sh                  | integrator | Exchange data fetch       | Manual                                   |

### Contract addresses pipeline modules (DEFERRED, recently updated)

| Script                      | Type       | What it does                               |
| --------------------------- | ---------- | ------------------------------------------ |
| fetch-contract-addresses.js | integrator | Main pipeline script (in .github/scripts/) |
| blockchain-page-spec.js     | config     | Page spec definitions                      |
| branch-watch.js             | automation | Branch watch state                         |
| constants.js                | config     | Constants                                  |
| incidents.js                | automation | Incident tracking                          |
| pipeline.js                 | dispatch   | Pipeline orchestrator                      |
| solidity-parser.js          | utility    | Solidity parsing                           |
| spec.js                     | config     | Spec definitions                           |

**Decision:**

---

## Governance

_The system governs itself. Rules enforced. Issues managed. Drift repaired._

### Working pipelines

| Pipeline               | Trigger       | Dispatcher                          | Scripts                                                    | Status                     |
| ---------------------- | ------------- | ----------------------------------- | ---------------------------------------------------------- | -------------------------- |
| Codex compliance (PR)  | PR            | codex-governance.yml (P2 hard gate) | validate-codex-task-contract.js, check-codex-pr-overlap.js | Working (stale path bug)   |
| Post-merge sync        | Push          | governance-sync.yml (P4)            | governance-pipeline.js                                     | Working                    |
| Self-heal              | Cron          | repair-governance.yml (P6)          | governance-pipeline.js                                     | Working                    |
| PR reviewer assignment | PR            | auto-assign-docs-reviewers.yml (P3) | inline (80 lines)                                          | Working (hardcoded branch) |
| Issue close on merge   | PR closed     | close-linked-issues.yml (P4)        | inline (141 lines)                                         | Working                    |
| Discord issue intake   | Dispatch      | discord-issue-intake.yml            | inline (261 lines)                                         | Working                    |
| Issue indexer          | Cron + Issues | docs-v2-issue-indexer.yml (P5)      | inline (403 lines)                                         | Working                    |
| Issue auto-label       | Issues        | issue-auto-label.yml                | inline (339 lines)                                         | Working (hardcoded labels) |

### Claude hooks (local, not CI)

| Script                      | What it does                           |
| --------------------------- | -------------------------------------- |
| pre-tool-guard.js           | Blocks writes to auto-generated files  |
| pre-compact-checkpoint.js   | Checkpoint before context compaction   |
| mdx-validate-hook.js        | Validates MDX on write                 |
| move-detect-hook.js         | Detects file moves, triggers path sync |
| phase-gate-hook.js          | Enforces phase gates                   |
| blast-radius-scanner.js     | Scans for broad changes                |
| friction-logger.js          | Logs friction events                   |
| grep-loop-guard.js          | Prevents grep retry loops              |
| message-backup.js           | Backs up messages                      |
| post-tool-verify.js         | Verifies after tool use                |
| read-logger.js              | Logs file reads                        |
| session-register.js         | Registers sessions                     |
| session-state.js            | Injects session state                  |
| mdx-constraints-injector.js | Injects MDX constraints                |

### Disconnected scripts (exist but no dispatcher)

| Script                                          | Type       | What it does                  | Should be in pipeline                |
| ----------------------------------------------- | ---------- | ----------------------------- | ------------------------------------ |
| audit-tasks-folders.js                          | audit      | Task folder audit             | Scheduled scan                       |
| generate-v2-folder-governance-cleanup-matrix.js | audit      | Folder governance matrix      | Scheduled scan                       |
| audit-script-categories.js                      | audit      | Script category audit         | Scheduled scan                       |
| script-footprint-and-usage-audit.js             | audit      | Script usage audit            | Scheduled scan                       |
| check-agent-docs-freshness.js                   | validator  | Agent docs freshness          | PR or scheduled                      |
| review-governance-repair-checklist.js           | validator  | Governance repair checklist   | Scheduled                            |
| validate-ai-tools-registry.js                   | validator  | AI tools registry validation  | PR or scheduled                      |
| validate-codex-task-contract.js                 | validator  | Codex task contracts          | Already in codex-governance workflow |
| verify-pay-orc-gate-finalize.sh                 | validator  | Orchestrator gate check       | Manual                               |
| audit-script-inventory.js                       | validator  | Script inventory audit        | PR                                   |
| check-component-immutability.js                 | validator  | Component immutability        | Already in test-suite workflow       |
| check-pr-template.js                            | validator  | PR template check             | PR workflow                          |
| validate-lpd-paths.js                           | validator  | LPD path validation           | PR or CI                             |
| add-framework-headers.js                        | remediator | Add JSDoc headers to scripts  | Manual or scheduled                  |
| update-jsdoc-headers.js                         | remediator | Update JSDoc headers          | Manual or scheduled                  |
| repair-script-inventory.js                      | remediator | Repair script classification  | Manual or scheduled                  |
| fix-usage-paths.js                              | remediator | Fix usage paths in JSDoc      | Manual                               |
| publish-v2-internal-reports.js                  | automation | Publish internal reports      | Manual                               |
| cross-agent-packager.js                         | automation | Package agent instructions    | Manual                               |
| export-portable-skills.js                       | automation | Export skills for portability | Manual                               |
| sync-codex-skills.js                            | automation | Sync Codex skills             | Manual                               |
| lock-release.js                                 | automation | Codex lock release            | Codex lifecycle                      |
| task-cleanup.js                                 | automation | Codex task cleanup            | Codex lifecycle                      |
| task-preflight.js                               | automation | Codex task preflight          | Codex lifecycle                      |
| codex-commit.js                                 | dispatch   | Codex commit helper           | Codex lifecycle                      |
| create-codex-pr.js                              | dispatch   | Codex PR creation             | Codex lifecycle                      |
| task-finalise.js                                | dispatch   | Codex task finalisation       | Codex lifecycle                      |
| check-no-ai-stash.sh                            | validator  | Check no AI stash             | Codex lifecycle                      |
| validate-locks.js                               | validator  | Validate Codex locks          | Codex lifecycle                      |
| sync-generated-files.js                         | dispatch   | Sync generated files          | Post-merge                           |
| repo-audit-orchestrator.js                      | dispatch   | Repo audit orchestrator       | Scheduled                            |
| headless-batch.sh                               | dispatch   | Headless batch runner         | Manual                               |

**5 interface workflows have 1,224 lines of inline JS.** All are extraction candidates.

**Decision:**

---

## Archive / Legacy

Scripts that are archived or deprecated. Not part of any active pipeline.

| Location                                     | Count | Status                             |
| -------------------------------------------- | ----- | ---------------------------------- |
| operations/scripts/archive/deprecated/       | 2     | Deprecated                         |
| operations/scripts/archive/legacy/           | 14    | Legacy                             |
| operations/scripts/x-archive/                | 7     | Superseded                         |
| automations/content/studio-docs-migration.js | 1     | One-time migration, should archive |

---

## Test / Library / Config (not pipeline scripts)

| Category                      | Count | Notes                                                  |
| ----------------------------- | ----- | ------------------------------------------------------ |
| Test files (/test/, .test.js) | 9     | Unit/integration tests for pipeline scripts            |
| Library modules (/lib/)       | 12    | Shared modules (translation lib mostly)                |
| Config (config/)              | 3     | mdx-sanitise.js, docs-path-sync.js, og-image-policy.js |
| Snippets test                 | 1     | snippets/test-scripts.sh (misplaced)                   |
