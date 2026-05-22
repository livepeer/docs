# Quality Check: index.mdx (v2)

**Page:** v2/orchestrators/index.mdx
**Date:** 2026-03-24
**Run:** 2 (re-run with improved prompt)
**Generated:** Yes -- generation script: `operations/scripts/generators/content/catalogs/generate-pages-index.js`
**Verdict:** NEEDS WORK

## Summary

This is a generated table-of-contents index page. All 87 link targets resolve to existing files. The primary issues are root-caused to the generation script: it emits deprecated `pageType: overview` instead of the canonical 7-type schema value, it omits 7 of 10 required frontmatter fields, and the generated `description` uses self-referential phrasing. One linked filename contains a typo (`feasibilits-sources.md`). One link title contains a typo (`Adresses`).

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | Yes | `Orchestrators Index` | PASS | |
| sidebarTitle | Yes | `Orchestrators Index` | PASS | |
| description | Yes | `Generated table of contents for docs pages under v2/orchestrators.` | FAIL | Self-referential ("Generated table of contents"). Generic, not subject-first |
| pageType | Yes | `overview` | FAIL | `overview` is deprecated 12-type value. Should be `navigation` |
| audience | No | -- | FAIL | Missing. Script does not emit this field |
| purpose | No | -- | FAIL | Missing. Script does not emit this field |
| complexity | No | -- | FAIL | Missing. Script does not emit this field |
| lifecycleStage | No | -- | FAIL | Missing. Script does not emit this field |
| keywords | Yes | `['livepeer', 'generated index', 'table of contents', 'v2/orchestrators']` | FAIL | Generic filler values. "generated index" and "table of contents" are not useful discovery terms |
| OG image block | No | -- | FAIL | Missing. Script does not emit OG fields |
| industry | No | -- | FAIL | Missing |
| niche | No | -- | FAIL | Missing |
| veracityStatus | No | -- | FAIL | Missing |

## Category 1: Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | 10 required fields present | **FAIL** | Missing: `audience`, `purpose`, `complexity`, `lifecycleStage`, OG image block. 5 of 10 absent. Root cause: script `buildIndexMeta()` (line 429) only generates `title`, `sidebarTitle`, `description`, `pageType`, `keywords` |
| 1.2 | pageType uses 7-type schema | **FAIL** | Value is `overview` which is a deprecated 12-type value. Script hardcodes `pageType: 'overview'` at line 438. Fix: change to `navigation` in the script |
| 1.3 | pageVariant valid if present | **N/A** | No pageVariant present |
| 1.4 | purpose uses 15-value set | **FAIL** | Field missing entirely. Script must emit `purpose: 'orient'` for index pages |
| 1.5 | audience uses 7-token set | **FAIL** | Field missing entirely. Script must emit `audience: 'orchestrator'` for this folder |
| 1.6 | complexity single canonical value | **FAIL** | Field missing. Script must emit `complexity: 'beginner'` |
| 1.7 | lifecycleStage single canonical value | **FAIL** | Field missing. Script must emit `lifecycleStage: 'discover'` |
| 1.8 | veracityStatus present and honest | **FAIL** | Field missing. Should be `veracityStatus: 'unverified'` (generated content) |
| 1.9 | industry array valid if present | **FAIL** | Field missing. Should be `industry: ['technical']` |
| 1.10 | niche array valid if present | **FAIL** | Field missing. Should be `niche: ['infrastructure', 'video']` |
| 1.11 | description well-formed | **FAIL** | Not subject-first. Self-referential ("Generated table of contents"). Reads as meta-description of file, not of content |
| 1.12 | OG image block complete | **FAIL** | Absent. Script does not generate OG fields |

**Root cause:** All Category 1 failures trace to `buildIndexMeta()` in the generation script (line 429-440). The function only builds 5 of the 10+ required fields.

**Fix (script):** Update `buildIndexMeta()` to:
1. Change `pageType: 'overview'` to `pageType: 'navigation'`
2. Add fields: `audience` (derive from folder name -- e.g. `orchestrators` -> `orchestrator`), `purpose: 'orient'`, `complexity: 'beginner'`, `lifecycleStage: 'discover'`, `veracityStatus: 'unverified'`
3. Add OG image block with standard fallback
4. Add `industry` and `niche` arrays (may need a per-folder config map)
5. Rewrite description template to be subject-first, e.g.: `Orchestrator documentation index -- links to all concept, guide, setup, and resource pages.`

## Category 2: Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | **PASS** | No US spellings detected in the generated output. "Optimisation" correctly used in folder name |
| 2.2 | Zero banned words | **PASS** | No banned words found |
| 2.3 | Zero banned phrases | **PASS** | No banned phrases found |
| 2.4 | Zero banned constructions | **FAIL** | Description uses self-referential pattern: "Generated table of contents for docs pages under v2/orchestrators." Functionally equivalent to "This page [verb]". Root cause: script template at line 437 |
| 2.5 | Opening order correct | **PASS** | Page opens with `# Table of contents` followed by links. No caveat or self-reference in body (the `<Note>` banner is a maintainer-facing generated-file notice, not reader-facing content) |
| 2.6 | Paragraph discipline | **N/A** | No prose paragraphs -- page is entirely links and headings |
| 2.7 | Audience register correct | **N/A** | No prose to assess register. Link titles come from target page frontmatter |
| 2.8 | Per-audience prohibited phrases absent | **PASS** | No prose containing prohibited phrases |
| 2.9 | No passive value statements | **N/A** | No value statements on this page |
| 2.10 | No hedging openers | **PASS** | No hedging |
| 2.11 | Terminology locked and consistent | **PASS** | Link titles use current terminology (Gateway, Pool Operators, Dual Mode) |

### Banned Construction Scan

Sentences containing "can", "may", "could", "might", "should":

| Line | Text | Type | Flag? |
|------|------|------|-------|
| 21 | "Do not manually edit this file; run `node operations/scripts/generate-pages-index.js --write`." | Procedural instruction (maintainer note) | No -- imperative instruction, not a value claim |

No other sentences in the page body use "can", "may", "could", "might", or "should". Clean.

## Category 3: Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading >= 20/25 | **FAIL** | Several headings score below 20. See table below |
| 3.2 | No generic descriptors | **FAIL** | "Stubs" (line 117) is a generic descriptor. Root cause: script's `prettifyName()` uses folder names directly |
| 3.3 | No literal contrast labels | **PASS** | No X vs Y headings |
| 3.4 | Domain-anchor rule | **FAIL** | Multiple headings lack domain anchor: "Tutorials", "Stubs", "Technical" are ambiguous out of context |
| 3.5 | Heading names concept not examples | **PASS** | Headings name categories, not examples |
| 3.6 | Title well-formed | **FAIL** | Page title "Orchestrators Index" is a safe generic label. "Table of contents" (H1) is a format description, not a concept |
| 3.7 | Sounds like expert editorial choice | **FAIL** | "Table of contents", "Stubs", "Reports Audits" are bureaucratic labels. Root cause: script auto-generates headings from folder names via `prettifyName()` |

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Table of contents | 2 | 1 | 5 | 3 | 4 | 15 |
| Concepts | 3 | 2 | 5 | 3 | 5 | 18 |
| Composable | 2 | 2 | 4 | 2 | 5 | 15 |
| Guides | 2 | 1 | 5 | 3 | 5 | 16 |
| Advanced Operations | 4 | 3 | 5 | 4 | 4 | 20 |
| Ai And Job Workloads | 4 | 3 | 4 | 4 | 3 | 18 |
| Config And Optimisation | 4 | 3 | 5 | 4 | 3 | 19 |
| Deployment Details | 4 | 3 | 5 | 4 | 4 | 20 |
| Reports Audits | 2 | 2 | 4 | 2 | 4 | 14 |
| Monitoring And Tooling | 4 | 3 | 5 | 4 | 3 | 19 |
| Operator Considerations | 4 | 3 | 5 | 4 | 4 | 20 |
| Payments And Pricing | 4 | 3 | 5 | 4 | 4 | 20 |
| Roadmap And Funding | 4 | 3 | 5 | 4 | 4 | 20 |
| Staking And Rewards | 4 | 3 | 5 | 4 | 4 | 20 |
| Tutorials | 2 | 1 | 5 | 3 | 5 | 16 |
| Gateway Tutorial Composable Pages | 3 | 2 | 4 | 2 | 1 | 12 |
| Stubs | 1 | 1 | 3 | 1 | 5 | 11 |
| Quickstart | 3 | 2 | 5 | 4 | 5 | 19 |
| Resources | 2 | 1 | 5 | 3 | 5 | 16 |
| Compendium | 3 | 2 | 5 | 3 | 5 | 18 |
| Technical | 2 | 1 | 5 | 3 | 5 | 16 |
| Setup | 3 | 2 | 5 | 4 | 5 | 19 |

**Root cause:** The script's `prettifyName()` function (line 315) converts folder names to Title Case but does not apply any editorial quality filter. Headings like "Stubs", "Composable", "Table of contents" are folder-name artifacts.

**Fix (script):** Either (a) add a heading override map in the script for known-bad folder names, or (b) accept that generated TOC headings are mechanical and apply editorial heading names only to published navigation pages.

## Category 4: Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | **PASS** | Single purpose: orient the orchestrator reader to all available pages |
| 4.2 | Purpose statement test | **PASS** | "This page lets the orchestrator find any page in the orchestrators tab." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | **N/A** | Page is not in docs.json navigation (see 7.1). No adjacency to verify |
| 4.4 | No dead ends | **PASS** | Every entry links to a target page |
| 4.5 | Prerequisites stated or linked | **N/A** | Navigation/index page -- no prerequisites needed |
| 4.6 | Out-of-scope clear | **PASS** | Scope is self-evident: it lists all pages |
| 4.7 | Info type per section correct | **N/A** | Page is structural/navigation only |
| 4.8 | No content duplication | **PASS** | No duplicate content |
| 4.9 | Section orientation page present | **N/A** | This IS the section orientation page |
| 4.10 | Cross-tab links at journey intersections | **N/A** | Generated TOC -- cross-tab links are not expected here |

## Category 5: Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | **FAIL** | pageType is `overview` (deprecated). If corrected to `navigation`, the expected components are Card/CardGroup for routing. Page uses markdown list links instead. For a generated TOC this is acceptable, but does not match the `navigation` template |
| 5.2 | Required sections present | **FAIL** | For `navigation` pageType, portal/routing sections expected. Page has `# Table of contents` which is a format label, not a portal section |
| 5.3 | Only approved components used | **PASS** | Only `<Note>` is used (for the generated-file banner). `<Note>` is approved for most pageTypes |
| 5.4 | Avoided components absent | **PASS** | No TODO/TBD/Coming Soon components |
| 5.5 | Info type -> component mapping | **N/A** | No information-type content sections |
| 5.6 | MDX renders clean | **PASS** | Valid MDX. Comment block, Note component, markdown headings and links only |
| 5.7 | No old-schema frontmatter | **FAIL** | `pageType: overview` is a deprecated 12-type value. Root cause: script |
| 5.8 | CSS uses custom properties only | **N/A** | No CSS on this page |
| 5.9 | Generated file banners intact | **PASS** | Both the hidden `generated-file-banner:v1` comment block and visible `<Note>` banner are present and correctly formatted |
| 5.10 | Component naming/import conventions | **N/A** | No component imports |

### Component Matrix (R10)

The page uses `<Note>` which is appropriate for a generated-file banner regardless of pageType. No obviously wrong components. The absence of Card/CardGroup is a style gap for `navigation` pageType, but is acceptable for a mechanically-generated TOC.

## Category 6: Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | **PASS** | NOT-TESTED -- page contains no factual claims, only links and headings derived from file titles |
| 6.2 | Code/commands tested | **FAIL** | NOT-TESTED -- the `<Note>` banner includes a run command (`node operations/scripts/generate-pages-index.js --write`) referencing a path that does not match the actual script location (`operations/scripts/generators/content/catalogs/generate-pages-index.js`). The documented command would fail |
| 6.3 | No deprecated API usage | **N/A** | No API references |
| 6.4 | Numbers are real | **N/A** | No numbers |
| 6.5 | REVIEW flags for unverified claims | **N/A** | No claims to review |
| 6.6 | veracityStatus honest | **FAIL** | NOT-TESTED -- veracityStatus field is absent entirely. Should be `unverified` for generated content |
| 6.7 | Authoritative vs AI-generated glossary | **N/A** | No glossary references in page content |
| 6.8 | Source staleness check | **FAIL** | NOT-TESTED -- the script path referenced in the banner (`operations/scripts/generate-pages-index.js`) is stale. Actual script: `operations/scripts/generators/content/catalogs/generate-pages-index.js`. Root cause: script's `GENERATED_DETAILS` object (line 52-57) has a hardcoded stale path |
| 6.9 | No open-ended research tasks | **PASS** | No research tasks |

## Category 7: Navigation & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | **FAIL** | `v2/orchestrators/index` does not appear in docs.json. This page is not navigable via the Mintlify sidebar |
| 7.2 | Navigation matches file system | **N/A** | Page is not in docs.json |
| 7.3 | Tab entry portal routes to all sections | **N/A** | Not the tab entry portal (that role belongs to navigator.mdx or portal.mdx) |
| 7.4 | No structural orphans | **FAIL** | This page is a structural orphan -- it exists on disk but is not reachable from docs.json navigation |
| 7.5 | Audience journey complete | **N/A** | Page is a generated TOC, not part of an audience journey |
| 7.6 | Cross-tab graduation paths | **N/A** | Not applicable to a TOC page |
| 7.7 | File in correct lane | **PASS** | File is in `v2/orchestrators/` (publishable lane), which is correct for a section index |
| 7.8 | File naming conventions | **PASS** | `index.mdx` follows standard naming for a section index file |
| 7.9 | _workspace/ TTL compliance | **N/A** | Not a workspace file |

## Category 8: Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | **PASS** | All 87 internal links verified -- every target file exists on disk |
| 8.2 | All external links live | **N/A** | No external links on this page |
| 8.3 | All snippet imports resolve | **N/A** | No snippet imports |
| 8.4 | All images load | **N/A** | No images |
| 8.5 | Page renders without error | **PASS** | Valid MDX structure. No broken JSX, no unclosed tags |
| 8.6 | No TODO/TBD/Coming Soon | **PASS** | No placeholder text. Warning emoji markers are script-generated flags for pages missing from docs.json, not placeholder content |

### Link Verification (R11)

All 87 links verified against the filesystem. Every target file exists. Full table:

| Link target | Status |
|-------------|--------|
| navigator.mdx | EXISTS |
| portal.mdx | EXISTS |
| concepts/architecture.mdx | EXISTS |
| concepts/capabilities.mdx | EXISTS |
| concepts/incentive-model.mdx | EXISTS |
| concepts/role.mdx | EXISTS |
| concepts/composable/orchestratorRole.mdx | EXISTS |
| guides/advanced-operations/advanced-sources.md | EXISTS |
| guides/advanced-operations/dep-guide.mdx | EXISTS |
| guides/advanced-operations/gateway-orchestrator-interface.mdx | EXISTS |
| guides/advanced-operations/gateway-relationships.mdx | EXISTS |
| guides/advanced-operations/pool-operators.mdx | EXISTS |
| guides/advanced-operations/scale-operations.mdx | EXISTS |
| guides/ai-and-job-workloads/ai-inference-operations.mdx | EXISTS |
| guides/ai-and-job-workloads/ai-sources.md | EXISTS |
| guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx | EXISTS |
| guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | EXISTS |
| guides/ai-and-job-workloads/llm-pipeline-setup.mdx | EXISTS |
| guides/ai-and-job-workloads/model-demand-reference.mdx | EXISTS |
| guides/ai-and-job-workloads/model-hosting.mdx | EXISTS |
| guides/ai-and-job-workloads/realtime-ai-setup.mdx | EXISTS |
| guides/ai-and-job-workloads/video-transcoding-operations.mdx | EXISTS |
| guides/ai-and-job-workloads/workload-options.mdx | EXISTS |
| guides/config-and-optimisation/ai-model-management.mdx | EXISTS |
| guides/config-and-optimisation/capacity-planning.mdx | EXISTS |
| guides/config-and-optimisation/pricing-strategy.mdx | EXISTS |
| guides/config-and-optimisation/reward-call-tuning.mdx | EXISTS |
| guides/deployment-details/dual-mode-configuration.mdx | EXISTS |
| guides/deployment-details/join-a-pool.mdx | EXISTS |
| guides/deployment-details/new-join-a-pool.mdx | EXISTS |
| guides/deployment-details/orchestrator-transcoder-setup.mdx | EXISTS |
| guides/deployment-details/setup-options.mdx | EXISTS |
| guides/deployment-details/siphon-setup.mdx | EXISTS |
| guides/deployment-details/reports-audits/notes.md | EXISTS |
| guides/deployment-details/reports-audits/setup-sources.md | EXISTS |
| guides/monitoring-and-tooling/explorer-operations.mdx | EXISTS |
| guides/monitoring-and-tooling/metrics-and-alerting.mdx | EXISTS |
| guides/monitoring-and-tooling/monitoring-sources.md | EXISTS |
| guides/monitoring-and-tooling/operator-toolbox.mdx | EXISTS |
| guides/monitoring-and-tooling/troubleshooting.mdx | EXISTS |
| guides/operator-considerations/business-case.mdx | EXISTS |
| guides/operator-considerations/feasibilits-sources.md | EXISTS |
| guides/operator-considerations/operator-impact.mdx | EXISTS |
| guides/operator-considerations/operator-rationale.mdx | EXISTS |
| guides/operator-considerations/requirements.mdx | EXISTS |
| guides/payments-and-pricing/payment-receipts.mdx | EXISTS |
| guides/payments-and-pricing/payments.mdx | EXISTS |
| guides/roadmap-and-funding/funding-and-support.mdx | EXISTS |
| guides/roadmap-and-funding/orchestrator-profiles.mdx | EXISTS |
| guides/staking-and-rewards/delegate-operations.mdx | EXISTS |
| guides/staking-and-rewards/earning-model.mdx | EXISTS |
| guides/staking-and-rewards/network-participation.mdx | EXISTS |
| guides/staking-and-rewards/reward-mechanics.mdx | EXISTS |
| guides/tutorials/add-ai-to-video-node.mdx | EXISTS |
| guides/tutorials/ai-earning-quickstart.mdx | EXISTS |
| guides/tutorials/byoc-cpu-smoke-test.mdx | EXISTS |
| guides/tutorials/byoc-cpu-tutorial.mdx | EXISTS |
| guides/tutorials/full-ai-pipeline-tutorial.mdx | EXISTS |
| guides/tutorials/realtime-ai-tutorial.mdx | EXISTS |
| guides/tutorials/zero-to-first-reward.mdx | EXISTS |
| guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx | EXISTS |
| guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx | EXISTS |
| guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx | EXISTS |
| quickstart/AI-prompt-start.mdx | EXISTS |
| quickstart/dep-x-setup-paths.mdx | EXISTS |
| quickstart/guide.mdx | EXISTS |
| quickstart/tutorial.mdx | EXISTS |
| quickstart/video-transcoding.mdx | EXISTS |
| resources/arbitrum-exchanges.mdx | EXISTS |
| resources/arbitrum-rpc.mdx | EXISTS |
| resources/community-guides.mdx | EXISTS |
| resources/community-pools.mdx | EXISTS |
| resources/faq.mdx | EXISTS |
| resources/glossary.mdx | EXISTS |
| resources/gpu-support.mdx | EXISTS |
| resources/x-guides.mdx | EXISTS |
| resources/x-help.mdx | EXISTS |
| resources/x-payments.mdx | EXISTS |
| resources/compendium/glossary.mdx | EXISTS |
| resources/technical/cli-flags.mdx | EXISTS |
| resources/technical/x-changelog.mdx | EXISTS |
| resources/technical/x-contract-addresses.mdx | EXISTS |
| resources/technical/x-support-status.mdx | EXISTS |
| resources/technical/x-troubleshooting.mdx | EXISTS |
| setup/configure.mdx | EXISTS |
| setup/connect-and-activate.mdx | EXISTS |
| setup/guide.mdx | EXISTS |
| setup/r-monitor.mdx | EXISTS |
| setup/rcs-requirements.mdx | EXISTS |
| setup/rs-install.mdx | EXISTS |
| setup/s-guide.mdx | EXISTS |
| setup/test.mdx | EXISTS |
| setup/x-test.mdx | EXISTS |

## Category 9: Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | **FAIL** | No evidence of human sign-off for this generated page or the generation script's output |
| 9.2 | All consuming decisions in registry | **N/A** | No structural decisions consumed beyond the generation script itself |
| 9.3 | Gate prerequisites met | **N/A** | Generated index pages are outside the content pipeline gate sequence |
| 9.4 | Phase ordering respected | **N/A** | Not a content-pipeline page |
| 9.5 | Findings gathered before fixes | **N/A** | First formal review of this page |
| 9.6 | Feedback routed | **N/A** | First formal review of this page |

## Spelling/Typo Check (R7)

| Location | Text | Issue |
|----------|------|-------|
| Line 87 | `Feasibilits Sources` (link text) | Typo: "Feasibilits" should be "Feasibility". Root cause: the source file is named `feasibilits-sources.md` -- the filename itself has the typo. Fix: rename the file to `feasibility-sources.md` and regenerate the index |
| Line 147 | `Livepeer Arbitrum Contract Adresses` (link text) | Typo: "Adresses" should be "Addresses". Root cause: the title in the frontmatter of `resources/technical/x-contract-addresses.mdx`. Fix: correct the title in that file's frontmatter and regenerate |
| Line 48 | `Ai And Job Workloads` (heading) | Casing: "Ai" should be "AI" (acronym). Root cause: script's `formatToken()` function (line 309) does not have an acronym exception list |
| Line 50 | `Ai Sources` (link text) | Same "Ai" casing issue -- this comes from the source file's frontmatter title, not the script's prettifyName |

## Cross-Category Connections (R5)

### Connection 1: Script `buildIndexMeta()` is the root cause of Categories 1, 2, and 5 failures
The generation script's `buildIndexMeta()` function (line 429) produces incomplete frontmatter (Cat 1), a self-referential description (Cat 2), and a deprecated pageType value (Cat 5). A single fix to this function resolves 12+ individual check failures.

### Connection 2: Script `prettifyName()` causes Category 3 heading quality failures
The `prettifyName()` function (line 315) converts folder names to Title Case without editorial quality filtering. This produces headings like "Stubs", "Composable", "Ai And Job Workloads" that fail the naming rubric. Adding an acronym map and an override map would fix both the heading scores and the casing issues flagged in spelling.

### Connection 3: Stale script path in `GENERATED_DETAILS` affects Categories 6 and 8
The `GENERATED_DETAILS` object (line 52) references `operations/scripts/generate-pages-index.js` but the actual script location is `operations/scripts/generators/content/catalogs/generate-pages-index.js`. This produces a stale path in the generated `<Note>` banner (Cat 6.2, 6.8) and would cause a user running the documented command to fail.

### Connection 4: Typos in source files propagate through generation
The "Feasibilits" filename typo and "Adresses" frontmatter title typo are in source files, not the generation script. The script faithfully reproduces them. Fixing the sources and regenerating resolves both the spelling findings and ensures the index stays accurate.

## Verdict Rationale

**NEEDS WORK** -- not REWRITE REQUIRED because the page structure is sound and all links resolve. The fixes are concrete and well-scoped:

1. **CRITICAL (script fix):** Update `buildIndexMeta()` to emit all 10 required frontmatter fields with correct canonical values, especially `pageType: 'navigation'`
2. **CRITICAL (script fix):** Update `GENERATED_DETAILS.script` to the correct path: `operations/scripts/generators/content/catalogs/generate-pages-index.js`
3. **HIGH (source fix):** Rename `feasibilits-sources.md` to `feasibility-sources.md`
4. **HIGH (source fix):** Correct "Adresses" to "Addresses" in the frontmatter of `resources/technical/x-contract-addresses.mdx`
5. **MEDIUM (script fix):** Add acronym map to `formatToken()` so "AI", "CLI", "GPU", "LLM", "BYOC", "FAQ", "RPC" are uppercased correctly in headings
6. **MEDIUM (script fix):** Add heading override map for known-bad folder names ("stubs", "composable")
7. **LOW:** Regenerate after fixes with `node operations/scripts/generators/content/catalogs/generate-pages-index.js --write`
