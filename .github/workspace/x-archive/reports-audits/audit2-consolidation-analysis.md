# GitHub Actions Consolidation Analysis

> Thread: GitHub Actions Governance, Phase 6.1 (co-design)
> Generated: 2026-04-02
> Source: actions-audit.json (post-review, with confirmed types/concerns/names)
> Prior work: phase1/audit1-full-classification.md (Phase 1 audit)
> Decisions: D-ACT-01 through D-ACT-08

---

## 1. Pipeline Dispatcher Patterns

Before looking at individual workflows, these are the distinct pipeline patterns that exist across the repo. Every workflow is one of these shapes.

### Pattern A: Integrate (fetch external data, commit)

```
Trigger (cron / repo dispatch / manual)
  -> Checkout
  -> Setup Node
  -> Run fetch script (external API)
  -> Diff check (any changes?)
  -> Commit + push (if changed)
```

**Error path:** Currently none on most. Should: create GitHub issue on failure.
**Used by:** All social data feeds, contract addresses, changelogs, livepeer release, showcase sync

### Pattern B: Generate (build from internal data, commit)

```
Trigger (push to deploy branch / manual)
  -> Checkout
  -> Setup Node
  -> Run generator script (reads repo data)
  -> Diff check
  -> Commit + push (if changed)
```

**Error path:** Currently none. Should: step summary + issue on failure.
**Used by:** AI companions, AI sitemap, component registry, docs-guide catalogs, docs index, llms.txt

### Pattern C: Check then Report (validate on PR)

```
Trigger (pull_request / push)
  -> Checkout
  -> Setup Node
  -> Run validator script(s)
  -> Report pass/fail (step summary)
  -> [P2: block merge] or [P3: advisory only]
```

**Error path:** Step summary. P2 workflows block the PR. P3 workflows report only.
**Used by:** test-suite, codex-governance, broken-links, check-ai-companions, check-docs-index, verify-ai-sitemap, verify-llms-files, test-v2-pages, check-docs-guide-catalogs, openapi-reference-validation

### Pattern D: Scan, Report, then Act (scheduled monitoring with response)

**Current state:** Scan and report only. Headless. No follow-up action.

**Target state:** Scan results route to an appropriate response based on what was found.

```
Trigger (cron / manual)
  -> Checkout
  -> Setup Node
  -> Run scan script(s)
  -> Produce report (step summary + artifact)
  -> IF issues found, route by type:
     -> Route A: Auto-remediate (run fix script, commit or PR)
     -> Route B: Create GitHub issue (for things scripts cannot fix)
     -> Route C: Re-dispatch another workflow (e.g. re-trigger stale feed)
  -> IF clean: report clean, done
```

**Routing table (proposed):**

| Scanner | Finding | Route | Target |
|---|---|---|---|
| content-health | Component metadata broken | A: auto-remediate | repair-component-metadata.js (already exists as step in scan, but masked by continue-on-error) |
| content-health | Layout governance violation | B: create issue | Cannot auto-fix layout decisions |
| content-health | Quality score below threshold | B: create issue | Needs human review |
| freshness-monitor | Data feed file is stale | C: re-dispatch integrator | Trigger the relevant social-feeds / changelogs / release workflow |
| freshness-monitor | Data feed file missing | B: create issue | Script may be broken |
| v2-external-link-audit | Broken external link | B: create issue | External sites cannot be auto-fixed |
| v2-external-link-audit | Broken internal link | A: auto-remediate | Could auto-fix with redirect or flag for /propagate |

**What exists today vs target:**

| Scanner | Current response | Target response |
|---|---|---|
| content-health | Report only (masked by continue-on-error) | Route A for metadata, Route B for quality/layout |
| freshness-monitor | Report only | Route C to re-dispatch stale feeds, Route B for missing files |
| v2-external-link-audit | Report only | Route B for external, Route A for internal |
| openapi-reference-validation | **Creates PR (already has Route A)** | Already complete. Gold standard for Pattern D |

**Used by:** content-health, freshness-monitor, v2-external-link-audit, openapi-reference-validation (gold standard)

### Pattern E: Repair (fix broken state, commit or PR)

```
Trigger (cron P6 / manual)
  -> Checkout
  -> Setup Node
  -> Run remediator script
  -> Diff check
  -> [If changes: create PR or direct commit]
```

**Error path:** Robust on governance-repair. Missing on seo-refresh (P0 bug: writes vanish).
**Used by:** repair-governance, seo-refresh, style-homogenise

### Pattern F: React to Event (issue/PR lifecycle)

```
Trigger (issues / pull_request / pull_request:closed / repository_dispatch)
  -> Run inline JavaScript
  -> Call GitHub API (labels, comments, assignments, issue creation)
  -> [No commit, no files changed]
```

**Error path:** Most have robust error handling. All are inline (no external script).
**Used by:** auto-assign-reviewers, close-linked-issues, discord-issue-intake, issue-indexer, issue-auto-label

### Pattern G: Orchestrate (dispatch child processes)

```
Trigger (push to deploy branch)
  -> Checkout
  -> Run orchestrator script
  -> Script spawns child processes (generators, validators)
  -> [May create PR with aggregated changes]
```

**Used by:** governance-sync only

---

## 2. Grouping Matrix: Concern x Type

### Copy (10 workflows)

What "copy" means: written content that users read on pages. Social feeds, changelogs, showcase data, translations, and the quality gate that validates copy standards.

| Workflow | Type | Pattern | Pipeline | What it does | Scripts |
|---|---|---|---|---|---|
| update-discord-data | integrator | A | P5-auto | Fetches Discord announcements per product | fetch-discord-announcements.js |
| update-forum-data | integrator | A | P5-auto | Fetches Discourse forum topics | fetch-forum-data.js |
| update-ghost-blog-data | integrator | A | P5-auto | Fetches Ghost blog posts | fetch-ghost-blog-data.js |
| update-github-data | integrator | A | P5-auto | Fetches GitHub discussions + releases per product | fetch-github-discussions.js, fetch-github-releases.js |
| update-rss-blog-data | integrator | A | P5-auto | Fetches RSS blog entries | fetch-rss-blog-data.js |
| update-youtube-data | integrator | A | P5-auto | Fetches YouTube videos per product | fetch-youtube-data.js |
| update-changelogs | integrator | A | P5-auto | Fetches release data, generates changelog MDX pages | generate-changelog.js |
| project-showcase-sync | integrator | A | P5-auto | Fetches showcase submissions from external form | project-showcase-sync.js |
| translate-docs | integrator | A (manual) | manual | Translates pages via LLM, creates PR | translate-docs.js + 4 others |
| test-suite | validator | C | **P2** | Component naming, scope, CSS, docs, immutability checks | 7 scripts |

**Consolidation opportunities in copy:**

The 6 social data feeds (discord, forum, ghost, github, rss, youtube) are Pattern A with identical structure. One matrix dispatcher replaces all 6.

Changelogs and showcase stay separate (different trigger sets, different script complexity).

Translation stays separate (manual, multi-script, creates PR).

test-suite stays separate (P2 hard gate, unique script set, different pattern entirely).

**Potential consolidated dispatchers for copy:**
1. `integrator-copy-update-social-feeds.yml` (matrix: 6 sources) = Pattern A
2. `integrator-copy-update-changelogs.yml` (standalone) = Pattern A
3. `integrator-copy-update-showcase-submissions.yml` (standalone, DISABLED) = Pattern A
4. `integrator-copy-update-translations.yml` (standalone, manual) = Pattern A
5. `validator-copy-check-content-quality-suite.yml` (standalone, P2 hard gate) = Pattern C

**Copy: 10 to 5**

---

### Discoverability (7 workflows)

What "discoverability" means: how search engines, AI crawlers, and LLM indexers find and understand our content. Sitemaps, llms.txt, companion files, SEO metadata.

| Workflow | Type | Pattern | Pipeline | What it does | Scripts |
|---|---|---|---|---|---|
| generate-ai-companions | generator | B | P4 | Builds glossary companion JSON for AI crawlers | generate-glossary-companions.js |
| generate-ai-sitemap | generator | B | P4 | Builds AI-focused sitemap XML | generate-ai-sitemap.js |
| generate-llms-files | generator | B | P4 | Builds llms.txt and llms-full.txt | generate-llms-files.js |
| check-ai-companions | validator | C | P3 | Verifies companions match glossary (verify pair) | generate-glossary-companions.js --check |
| verify-ai-sitemap | validator | C | P3 | Verifies sitemap matches repo state (verify pair) | generate-ai-sitemap.js --check |
| verify-llms-files | validator | C | P3 | Verifies llms.txt matches repo state (verify pair) | generate-llms-files.js --check |
| seo-refresh | remediator | E | manual | Regenerates SEO metadata in frontmatter | generate-seo.js |

**Pipeline chains in discoverability:**

This concern has a clear **generate then verify** chain:

```
Push to deploy branch
  -> generate-ai-companions (Pattern B, P4)
  -> generate-ai-sitemap (Pattern B, P4)
  -> generate-llms-files (Pattern B, P4)

Pull request
  -> check-ai-companions (Pattern C, P3)
  -> verify-ai-sitemap (Pattern C, P3)
  -> verify-llms-files (Pattern C, P3)

Manual
  -> seo-refresh (Pattern E, manual)
```

The 3 generators are identical Pattern B (same trigger, same shape). One matrix dispatcher.
The 3 validators are identical Pattern C (same trigger, same shape). One matrix validator.
seo-refresh stays separate (manual, remediator, different pattern).

**Potential consolidated dispatchers for discoverability:**
1. `generator-discoverability-generate-post-merge.yml` (matrix: companions, sitemap, llms) = Pattern B
2. `validator-discoverability-check-generated-files.yml` (matrix: companions, sitemap, llms) = Pattern C
3. `remediator-discoverability-repair-seo-metadata.yml` (standalone, manual) = Pattern E

**Discoverability: 7 to 3**

---

### Health (6 workflows)

What "health" means: site integrity. Do links work? Do pages render? Is data fresh? Is the OpenAPI spec current?

| Workflow | Type | Pattern | Pipeline | What it does | Scripts |
|---|---|---|---|---|---|
| broken-links | validator | C | P3 | Checks all internal/external links on PR | fetch-external-docs.sh |
| test-v2-pages | validator | C | P3 | Browser sweep of v2 pages (Mintlify dev server) | fetch-external-docs.sh |
| openapi-reference-validation | validator | C+E | P3 | Checks OpenAPI spec matches live API. Creates PR if drift | openapi-reference-audit.js |
| content-health | audit | D | P5 | Scheduled scan: component usage, quality, freshness, layout | 6 scripts |
| freshness-monitor | audit | D | P5 | Checks if data feed files are stale (hardcoded thresholds) | inline (80 lines) |
| v2-external-link-audit | audit | D | P5 | Scheduled external link scan (advisory) | v2-link-audit.js |

**Pipeline chains in health:**

Three chains: PR-time checks, scheduled scan-to-act, and one gold standard that does both.

**Chain 1: PR-time checks (Pattern C)**
```
Pull request
  -> broken-links (P3, advisory)
  -> test-v2-pages (P3, advisory, needs Mintlify dev server)
```

**Chain 2: Scheduled scan-to-act (Pattern D, currently broken)**

Current state (headless, no follow-up):
```
Cron -> content-health -> report (masked by continue-on-error) -> nothing
Cron -> freshness-monitor -> report -> nothing
Cron -> v2-external-link-audit -> report -> nothing
```

Target state (scan, route, act):
```
Cron -> content-health -> scan
  -> component metadata broken? -> Route A: auto-remediate (repair-component-metadata.js)
  -> quality/layout violation? -> Route B: create GitHub issue

Cron -> freshness-monitor -> scan
  -> data feed stale? -> Route C: re-dispatch integrator-copy-update-social-feeds
  -> data feed missing? -> Route B: create GitHub issue

Cron -> v2-external-link-audit -> scan
  -> broken external link? -> Route B: create GitHub issue
  -> broken internal link? -> Route A: auto-remediate or flag for /propagate
```

**Chain 3: Full scan-remediate (gold standard, already working)**
```
Cron + PR -> openapi-reference-validation -> scan
  -> spec drifted? -> Route A: creates PR with updated spec
  -> spec matches? -> report clean
```

openapi-reference-validation is the model for what all Pattern D workflows should become.

broken-links and test-v2-pages stay separate (test-v2-pages needs a Mintlify dev server, different runtime).

**Potential consolidated dispatchers for health:**
1. `validator-health-check-broken-links.yml` (standalone, P3) = Pattern C
2. `validator-health-check-page-rendering.yml` (standalone, P3, needs Mintlify server) = Pattern C
3. `validator-health-check-openapi-reference.yml` (standalone, P3+P5, creates PR) = Pattern D gold standard
4. `audit-health-scan-site-health.yml` (matrix or sequential: 3 scanners, each with its own routing table) = Pattern D with routes

**Health: 6 to 3-4**

---

### Maintenance (9 workflows)

What "maintenance" means: indexes, catalogs, registries, and reference data that support the site's structure. Not copy (users don't read an index), not health (it's not checking anything), not discoverability (it's not for search engines).

| Workflow | Type | Pattern | Pipeline | What it does | Scripts |
|---|---|---|---|---|---|
| generate-component-registry | generator | B | P4 | Builds component registry JSON from repo scan | generate-component-registry.js |
| generate-docs-guide-catalogs | generator | B | P4 | Builds docs-guide catalog MDX pages | generate-docs-guide-indexes.js + 2 others |
| generate-docs-index | generator | B | P4 | Builds docs search index JSON | generate-docs-index.js |
| sdk_generation | generator | B | P5-auto | Generates SDK client libraries from OpenAPI spec | Speakeasy (external) |
| check-docs-guide-catalogs | validator | C | P3 | Verifies catalogs match repo state (verify pair) | 7 scripts |
| check-docs-index | validator | C | P3 | Verifies docs index matches repo state (verify pair) | generate-docs-index.js --check |
| update-contract-addresses | integrator | A | P5-auto | Builds contract registry from on-chain + governor-scripts | fetch-contract-addresses.js |
| update-livepeer-release | integrator | A | P5-auto | Fetches latest go-livepeer release version | inline (60 lines) |
| sync-large-assets | integrator | A | P5-auto | Syncs binary assets from storage branch | inline (80 lines) |

**Pipeline chains in maintenance:**

Generate then verify chain (same as discoverability):
```
Push to deploy branch
  -> generate-component-registry (Pattern B, P4)
  -> generate-docs-guide-catalogs (Pattern B, P4)
  -> generate-docs-index (Pattern B, P4)

Pull request
  -> check-docs-guide-catalogs (Pattern C, P3)
  -> check-docs-index (Pattern C, P3)
  [MISSING: check-component-registry - no verify pair exists]
```

The 3 P4 generators are identical Pattern B. They could merge into the same matrix dispatcher as the discoverability generators (all 6 P4 generators in one matrix, spanning two concerns).

The 2 verify-pair validators could merge into the same matrix as the discoverability validators.

sdk_generation stays separate (Speakeasy toolchain, different trigger).
contract-addresses is DEFERRED.
livepeer-release stays separate (repo dispatch from go-livepeer, inline script).
sync-large-assets stays separate (git operations, not node script).

**Cross-concern note:** The maintenance generators and discoverability generators are the same pattern. A single `generator-generate-post-merge.yml` matrix dispatcher could handle all 6 P4 generators across both concerns. Similarly, a single `validator-check-generated-files.yml` could handle all 5 verify-pair validators.

**Potential consolidated dispatchers for maintenance:**
1. Generators merge into cross-concern P4 matrix (see discoverability)
2. Validators merge into cross-concern verify-pair matrix (see discoverability)
3. `generator-maintenance-generate-sdk-clients.yml` (standalone) = Pattern B variant
4. `integrator-maintenance-update-contract-addresses.yml` (DEFERRED)
5. `integrator-maintenance-update-release-version.yml` (standalone) = Pattern A
6. `integrator-maintenance-update-large-assets.yml` (standalone) = Pattern A variant (git, not node)

**Maintenance standalone: 4 (+ shared matrix entries in cross-concern dispatchers)**

---

### Governance (8 workflows)

What "governance" means: the system's own rules, compliance checks, issue/PR lifecycle management, and self-healing.

| Workflow | Type | Pattern | Pipeline | What it does | Scripts |
|---|---|---|---|---|---|
| codex-governance | validator | C | **P2** | Validates codex task contracts and PR overlap | validate-codex-task-contract.js, check-codex-pr-overlap.js |
| governance-sync | dispatch | G | P4 | Post-merge: orchestrates catalog regeneration, index updates | governance-pipeline.js |
| repair-governance | remediator | E | P6 | Weekly self-heal: fixes broken governance state | governance-pipeline.js |
| auto-assign-docs-reviewers | interface | F | P3 | Assigns reviewers to PRs targeting deploy branch | inline (80 lines) |
| close-linked-issues | interface | F | P4 | Closes linked issues when PR merges | inline (141 lines) |
| discord-issue-intake | interface | F | event | Creates GitHub issue from Discord bot message | inline (261 lines) |
| docs-v2-issue-indexer | interface | F | P5 | Builds issue tracking index every 6h | inline (403 lines) |
| issue-auto-label | interface | F | event | Auto-classifies and labels new issues | inline (339 lines) |

**Pipeline chains in governance:**

PR lifecycle:
```
PR opened
  -> codex-governance (P2 hard gate, Pattern C)
  -> auto-assign-docs-reviewers (P3, Pattern F)

PR merged
  -> governance-sync (P4, Pattern G)
  -> close-linked-issues (P4, Pattern F)

Weekly
  -> repair-governance (P6, Pattern E)
```

Issue lifecycle:
```
Issue opened
  -> issue-auto-label (event, Pattern F)

Issue event (any)
  -> docs-v2-issue-indexer (P5 + event, Pattern F)

Discord message
  -> discord-issue-intake (event, Pattern F)
```

Every workflow has a unique trigger. No consolidation by matrix. But the 5 interfaces all become thin shells after inline script extraction.

**Governance: 8 to 8 (no merges, but 5 become thin shells after extraction)**

---

### Brand (1 workflow)

| Workflow | Type | Pattern | Pipeline | What it does | Scripts |
|---|---|---|---|---|---|
| style-homogenise | remediator | E | manual | Normalises EN-GB spelling and style across pages | style-and-language-homogenizer-en-gb.js |

**Brand: 1 to 1**

---

## 3. Cross-Concern Consolidation Opportunities

The biggest reduction comes from recognising that Pattern B (generate) and Pattern C (check) work identically regardless of concern:

### All P4 Generators (Pattern B): 6 to 1

| Generator | Concern | Script |
|---|---|---|
| generate-ai-companions | discoverability | generate-glossary-companions.js |
| generate-ai-sitemap | discoverability | generate-ai-sitemap.js |
| generate-llms-files | discoverability | generate-llms-files.js |
| generate-component-registry | maintenance | generate-component-registry.js |
| generate-docs-guide-catalogs | maintenance | generate-docs-guide-indexes.js + 2 |
| generate-docs-index | maintenance | generate-docs-index.js |

All share: push trigger, P4 tag, auto-commit, Pattern B shape.
**One workflow: `generator-generate-post-merge.yml` with 6-entry matrix.**

### All Verify-Pair Validators (Pattern C subset): 5 to 1

| Validator | Concern | Script |
|---|---|---|
| check-ai-companions | discoverability | generate-glossary-companions.js --check |
| verify-ai-sitemap | discoverability | generate-ai-sitemap.js --check |
| verify-llms-files | discoverability | generate-llms-files.js --check |
| check-docs-guide-catalogs | maintenance | generate-docs-guide-indexes.js --check |
| check-docs-index | maintenance | generate-docs-index.js --check |

All share: PR + push trigger, P3 tag, same --check pattern.
**One workflow: `validator-check-generated-files.yml` with 5-entry matrix.**

---

## 4. Target State: Concern x Dispatcher

| Concern | Dispatchers | Workflows |
|---|---|---|
| **copy** | Social feeds matrix (1), changelogs (1), showcase (1 disabled), translations (1), quality suite (1) | 5 |
| **discoverability** | Shared in cross-concern generator matrix, shared in cross-concern validator matrix, seo-refresh (1) | 1 standalone |
| **health** | broken-links (1), page-rendering (1), openapi-reference (1), site-health auditor matrix or 3 separate | 3-4 |
| **maintenance** | Shared in cross-concern matrices, sdk-clients (1), contract-addresses (1 deferred), release-version (1), large-assets (1) | 4 standalone |
| **governance** | codex-compliance (1), post-merge-sync (1), repair-pipelines (1), 5 interfaces (thin shells) | 8 |
| **brand** | en-gb-style (1) | 1 |
| **cross-concern** | P4 generator matrix (1), verify-pair validator matrix (1) | 2 |

---

## 5. Final Count

| Category | Count | Workflows |
|---|---|---|
| Cross-concern matrix dispatchers | 2 | generator-generate-post-merge, validator-check-generated-files |
| Copy | 5 | social-feeds matrix, changelogs, showcase (disabled), translations, quality-suite |
| Health | 3-4 | broken-links, page-rendering, openapi-reference, site-health auditor(s) |
| Maintenance standalone | 4 | sdk-clients, contract-addresses (deferred), release-version, large-assets |
| Governance | 8 | codex, post-merge-sync, repair, 5 interfaces (thin shells) |
| Brand | 1 | en-gb-style |
| Discoverability standalone | 1 | seo-refresh |
| NEW CI workflows | 2 | generate-action-docs, check-action-naming |
| **Total** | **~22** | Down from 45 |

**Reduction: 45 to ~22 (51% reduction).** Zero functionality lost.

---

## 6. Open Questions for Co-Design

1. **Cross-concern matrix dispatchers:** The 6 generators span discoverability + maintenance. Is one workflow spanning two concerns acceptable, or should they stay as two separate matrices (3+3)?

2. **Health auditors:** Matrix with per-entry cron scheduling is awkward in GitHub Actions. Keep as 3 separate thin workflows, or build a single dispatcher with conditional scheduling?

3. **Governance interfaces (5 thin shells):** After inline script extraction, each is ~10 lines of YAML. Is 5 thin shells acceptable, or should we look at a reusable workflow pattern?

4. **test-suite + test-v2-pages:** Both need a Mintlify dev server. Merge as two jobs sharing server startup, or keep separate?

5. **Scan-to-act routing (Pattern D upgrade):** Currently all 3 health scanners are headless (scan, report, done). The target is scan-report-act where each finding routes to: (A) auto-remediate, (B) create GitHub issue, or (C) re-dispatch another workflow. `openapi-reference-validation` already does this (creates PR on drift). Do we:
   - (a) Build routing into each scanner script (script decides what to do with its findings)
   - (b) Build a shared routing layer in the workflow (workflow reads script output, routes to action steps)
   - (c) Build a separate "response dispatcher" workflow that scanners trigger via repository_dispatch with their findings

   My recommendation: (a). The script already knows what it found and what severity it is. Adding routing logic to the script (create issue via GitHub API, or output a dispatch event) keeps the workflow thin and the intelligence in the governed script.
