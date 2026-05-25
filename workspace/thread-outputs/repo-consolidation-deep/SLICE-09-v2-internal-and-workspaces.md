# SLICE-09 — v2/internal + per-tab _workspace inventory

**Date:** 2026-05-19
**Scope:** Every file under (a) `v2/internal/` and (b) each per-tab `_workspace/` folder under `v2/`. Plus `v2/_workspace/` (root v2 workspace).
**Mode:** Read-only audit. No writes outside this file.
**Cross-reference:** Four oversized `checks.mdx` files (about/delegators/developers1/orchestrators) are covered in `SLICE-09b-checks-cross-tab.md` (529 lines). This slice references but does not re-read them.

---

## 0. File-count baseline

| Subtree | Files |
|---|---:|
| `v2/internal/` (whole tab incl. `_workspace`) | 91 |
| `v2/internal/_workspace/` | 28 |
| `v2/about/_workspace/` | 118 |
| `v2/community/_workspace/` | 38 |
| `v2/delegators/_workspace/` | 55 |
| `v2/developers/_workspace/` | 259 |
| `v2/developers1/_workspace/` | 198 |
| `v2/developers2/_workspace/` | 14 |
| `v2/gateways/_workspace/` | 446 |
| `v2/home/_workspace/` | 37 |
| `v2/orchestrators/_workspace/` | 459 |
| `v2/resources/_workspace/` | 63 |
| `v2/solutions/_workspace/` | 151 |
| `v2/_workspace/` (root) | 1,153 |
| **Total per-tab workspaces** | **2,991** |
| **Plus root v2/_workspace** | **4,144** |

Three duplicate `developers*` directories (live `v2/developers/`, `v2/developers1/`, `v2/developers2/`) match the gap flagged in `livepeer-docs-v2-report.md` §13.4 (2026-05-22).

---

## 1. `v2/internal/` published content (16 .mdx files, plus 3 reports `.md`/`.pdf`/`.docx`)

### 1.1 Root files

| File | Bytes | Lines | mtime | `lastVerified` | Verdict (this slice) |
|---|---:|---:|---|---|---|
| `index.mdx` | 6,725 | 108 | 2026-04-27 | n/a (generated) | Generated TOC. Has `⚠️` markers on 24 of ~40 entries — sentinel emitted when a page is empty stub, generator-classified, or has frontmatter validation warnings. |
| `internal-overview.mdx` | 1,979 | 67 | 2026-04-09 | n/a | **Duplicate of `overview/about.mdx`** (confirmed below). Contains the typo `philopsophy`. Has a TODO broken-link comment on the Definitions card. Frontmatter shows no `audience` or `pageType` or `lastVerified`. |
| `definitions.mdx` | 3,698 | 57 | 2026-05-22 | 2026-05-22 | **NEW (rewritten 2026-05-22).** Defines Protocol, Network, Product, Ecosystem at four scales; defines Canonical source / Generated artefact / Governed surface / Ownerless contract for the docs system. Mentions `docs-guide/policies/source-of-truth-policy.mdx` and `operations/governance/config/generated-artifacts.json` and `docs-guide/policies/ownerless-governance.mdx`. |
| `ecosystem.mdx` | 6,731 | 124 | 2026-05-22 | 2026-05-22 | **NEW (rewritten 2026-05-22).** Stakeholder map: 7 internal stakeholders (Rich/Rick/Mehrdad Sadeghi/Nick/Peter/Joseph/Rom), 3 SPEs (AI/Cloud/Frameworks), 5 product teams (Studio/Streamplace/Daydream/Embody/ComfyStream), 6 community groups, 8 infra dependencies. References `docs-guide/features/data-integrations`. |
| `references.mdx` | 4,086 | 75 | 2026-05-22 | 2026-05-22 | **NEW (rewritten 2026-05-22).** RFP refs, repos (9 inc. livepeer/docs, protocol, go-livepeer, ai-runner, ai-worker, livepeer.js + Go + Python, governor-scripts, explorer, subgraph), products, internal resources. |

### 1.2 `overview/` (6 files)

| File | Bytes | Lines | mtime | `lastVerified` | Notes |
|---|---:|---:|---|---|---|
| `about.mdx` | 2,418 | 72 | 2026-04-08 | 2026-03-17 | Internal hub landing. Contains the typo `philopsophy`. Same content as `internal-overview.mdx`. |
| `docs-philosophy.mdx` | 656 | 26 | 2026-04-08 | 2026-03-22 | Imports `DocsPhilosophyContent` from `/snippets/composables/pages/internal/docs-philosophy.mdx`. Real content lives in that composable. |
| `governance-pipeline.mdx` | 6,114 | 103 | 2026-04-27 | 2026-03-17 | 9-field script governance metadata model, trigger chain, auto-fix vs needs-human, commands, 9-field schema table. Mentions "about 214 scripts" — **stale** (livepeer-docs-v2-report.md §13.1 lists 320). |
| `governance.mdx` | 10,643 | 328 | 2026-05-04 | 2026-03-17 | Review process, SLAs, ownership, ticketing. **Section-owners table references the v1 numbered IA (`v2/pages/01_about/`, `v2/pages/04_gateways/`, `v2/pages/06_delegators/`, `v2/pages/08_help/`, `v2/pages/010_products/`). All numbered prefixes were removed (per report.md §13.1).** Stale. |
| `personas.mdx` | 3,502 | 78 | 2026-05-18 | 2026-03-17 | **Only the Developer persona is populated.** Gateway Operator, Orchestrator, Delegator personas are stubs (heading-only). Mermaid diagram present for Developer journey. |
| `strategic-alignment.mdx` | 7,573 | 106 | 2026-05-22 | 2026-05-22 | **NEW (rewritten 2026-05-22).** Maps Livepeer-wide aims (1: Users paying for services; 2: More services; 3: More platforms; 4: More integrations) and Livepeer Docs aims (1: AI-first; 2: Canonical resource; 3: Meets product AND developer needs; 4: Future-proof, low-lift maintenance; 5: Clear stakeholder ownership). Imports `CustomDivider`. |

### 1.3 `rfp/` (5 .mdx, 1 .md report, 1 .pdf, 1 .docx)

| File | Bytes | Lines | mtime | `lastVerified` | Notes |
|---|---:|---:|---|---|---|
| `aims.mdx` | 34,256 | 303 | 2026-04-09 | 2026-03-17 | **Largest single-page MDX in v2/internal/.** Three Tabs (AI-first / Future-proofed / Stakeholder-focused). Imports `Quote`, `YouTubeVideo`, `PdfEmbed` from snippets. Mentions "58-script test and maintenance suite" and "17 GitHub Actions workflows" — **stale** (now 320 / 11 active). References v1 numbered paths (`v2/pages/04_gateways/`, etc.) and "Resource HUB" naming — **stale**. PdfEmbed src points to `/v2/internal/rfp/reports/livepeer-ai-first-docs-plan.pdf`. |
| `problem-statements.mdx` | 22,594 | 162 | 2026-04-09 | n/a | 4 AccordionGroup sections for each RFP problem (Onboarding / Outdated content / Brand+duplication / Weak site integration). Mentions `v2/pages/*` paths and `tools/ai-rules/llms.txt.information.md` — **stale**. `purpose: faq` frontmatter. |
| `outcomes.mdx` | 5,660 | 77 | 2026-05-22 | 2026-05-22 | **NEW (rewritten 2026-05-22).** Headline outcomes table + per-deliverable summary + beyond-scope work (13 items) + known open gaps (6 items inc. 218 scripts pending 11-tag JSDoc, 307-row v2 cleanup matrix, OpenAPI 2-of-5 specs covered). |
| `deliverables.mdx` | 5,136 | 97 | 2026-05-22 | 2026-05-22 | **NEW (rewritten 2026-05-22).** 4 RFP deliverable buckets + beyond-scope items + cross-links to report/aims/outcomes/problem-statements. |
| `report.mdx` | 17,268 | 267 | 2026-05-18 | 2026-05-18 | StyledTable with per-row deliverable status (Completed / Cancelled / Blocked / Incomplete) across four sections. Imports `StyledTable`, `TableRow`, `TableCell`, `Quote`, `DocsPhilosophyContent`. **Contradicts addendum §13.3 of `livepeer-docs-v2-report.md`** which re-grades 5 rows: `Consolidation of multiple changelogs` (Cancelled → Partial), `Goal-based tutorials` (Incomplete → Completed), `WCAG accessibility` (Needs input → Audited+partially repaired), `Multilingual readiness` (Completed → To re-verify), `Migration guides for Studio users` (Blocked → Likely resolvable). The StyledTable in report.mdx has NOT been updated. |
| `reports/livepeer-docs-v2-report.md` | 151,678 | 1,260 | (not checked) | n/a | The long-form 2026-02-21 audit + 2026-05-22 addendum (Part 13). Parts 1–12 are the original engagement record; Part 13 (§13.1 numbers refresh, §13.2 beyond-scope, §13.3 status re-grades, §13.4 new gaps, §13.5 honest framing). Mentions "320 active operations scripts" and "1,128 active v2 .mdx", "686 docs.json routes", "10 top-level tabs", "13 frameworks + 5 standards + 18 policies + 18 GOVERNANCE.md markers". |
| `reports/livepeer-ai-first-docs-plan.pdf` | binary | n/a | n/a | n/a | Embedded by `rfp/aims.mdx` via `PdfEmbed`. Not opened. |
| `reports/Livepeer_Docs_v2_Aims_Problem_Statement_Solutions.docx` | binary | n/a | n/a | n/a | Source Word doc; not consumed by any MDX import grep. |

### 1.4 `assets/transcripts/` (3 files + 1 subdir w/ 2 files)

| File | Bytes | Notes |
|---|---:|---|
| `a16z.rss` | 588,556 | Raw RSS feed — A16z podcast. Not parsed by MDX. |
| `ycomb.rss` | 909,601 | Raw RSS feed — YC Startup Podcast. Not parsed by MDX. |
| `ycomb.mdx` | 331,247 | Massive MDX (~10K+ lines). TAB-SUMMARY 2026-04-08 flags "capitalised Keywords" and "323KB ycomb.mdx out of served docs" — should be migrated out of served pages. |
| `a16z/2026-01-22-inferact-building-the-infrastructure-that-runs-modern-ai.mdx` | 44,894 | Episode transcript page. |
| `a16z/README.md` | 2,370 | README for a16z subdir. |

### 1.5 `reports/` (36 files across 4 subdirs)

#### `reports/quality-accessibility/` (3 files, all 2026-04-14)

| File | Bytes | Notes |
|---|---:|---|
| `v2-wcag-audit.md` | 2,598 | Generated from `operations/tests/integration/v2-wcag-audit.js`. 372 files scanned, 0 violations, 2 static-only findings (raw IFRAME missing title on `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx`:154 and :186). Has frontmatter; classed generated. |
| `wcag-repair-common.md` | 2,735 | Generated; from WCAG repair pipeline. |
| `audit-v2-usefulness.md` | 2,344 | Generated. |

#### `reports/navigation-links/` (2 files)

| File | Bytes | mtime | Notes |
|---|---:|---|---|
| `v2-link-audit.md` | 16,932 | 2026-04-15 | Link audit output. |
| `docs-navigation.md` | 1,557 | 2026-04-14 | Generated nav route inventory. |

#### `reports/page-audits/` (5 files)

| File | Bytes | mtime | Notes |
|---|---:|---|---|
| `audit-all-pages-simple.md` | 12,817 | 2026-05-18 | **Reports 1,175 total pages, 1,174 missing.** This is broken — file glob is finding nav refs without `.mdx` extension. Stale tooling output. |
| `audit-all-pages.md` | 12,724 | 2026-05-18 | Browser-based audit (legacy). |
| `audit-python.md` | 12,777 | 2026-04-14 | Python-based audit (legacy). |
| `domain-pages-audit.md` | 963 | 2026-03-18 | Oldest report file. |
| `test-all-pages-comprehensive.md` | 1,002 | 2026-05-18 | Comprehensive browser report. |

#### `reports/repo-ops/` (26 files)

Heavy duplication. **20 of 26 are `audit-tasks-folders--{name}-audit.md` aliases of a primary `{name}.md`.** Pattern:

- `scripts-audit.md` (1,011 bytes) + `audit-tasks-folders--scripts-audit.md` (1,011 bytes) — byte-identical.
- `errors-audit.md` (1,009 bytes) + `audit-tasks-folders--errors-audit.md` (1,009 bytes) — byte-identical.
- `reports-navigation-links-audit.md` + `audit-tasks-folders--reports-navigation-links-audit.md` — byte-identical.
- `reports-page-audits-audit.md` + matching alias — byte-identical.
- `reports-quality-accessibility-audit.md` + matching alias — byte-identical.
- `reports-quality-accessibility-docs-usefulness-audit.md` + matching alias — byte-identical.

Additional `audit-tasks-folders--*` files with no clear primary:
- `audit-tasks-folders--plan-audit.md`, `--plan-complete-audit.md`, `--plan-migration-audit.md`, `--plan-retrospective-audit.md`, `--plan-rfp-audit.md`, `--reports-audit.md`, `--reports-docs-index-audit.md`, `--reports-legacy-unmanaged-audit.md`, `--reports-legacy-unmanaged-ungenerated-audit.md`, `--reports-quality-accessibility-docs-usefulness-full-run-2026-02-23-audit.md`, `--reports-quality-accessibility-docs-usefulness-smoke-audit.md`, `--reports-quality-accessibility-docs-usefulness-smoke2-audit.md`, `--reports-quality-accessibility-docs-usefulness-smoke3-audit.md`, `--reports-repo-ops-audit.md`, `--reports-rfp-deliverable-i-r1-r15-2026-02-24-replan-audit.md`, `--tasks-root-audit.md`.

The largest is `audit-scripts.md` (162,756 bytes, 2026-04-14) — the canonical scripts audit output. Unique.

`index.mdx` flags these with `⚠️ Legacy Alias:` prefix in the TOC.

---

## 2. `v2/internal/_workspace/` (28 files, all 2026-05-18)

All 28 files have mtime 2026-05-18. This is a freshly generated review packet.

### 2.1 Root workspace (3 files)

| File | Bytes | Notes |
|---|---:|---|
| `marketing-posts.md` | 14,884 | "Documentation Upgrade Thought Leadership Pack" — 10 marketing themes + 3 ready-to-publish LinkedIn posts + Substack/talk content. Not published material; ideation. |
| `marketing-posts-v2.md` | 4,719 | V2 iteration of marketing-posts.md. Not linked from nav. |
| `ally-notes.mdx` | 6,592 | Has frontmatter (`title: Ally Notes`, no `lastVerified`). Includes `<Danger> Diff this content </Danger>` marker and **content duplicated twice within the file** (the same Info / Note / Accordion sequence about cdn.jsdelivr.net and GitHub iframe embedding appears at lines 24–101 and 103–180). |

### 2.2 `_workspace/layout-components-scripts-styling/` (2 files)

| File | Bytes | Notes |
|---|---:|---|
| `pages.mdx` | 1,002 | References `v2/pages` folder structure — **STALE** (numbered prefixes removed). |
| `components.mdx` | 2,235 | Components doc, not checked in detail. |

### 2.3 `_workspace/reviews/` (23 files: 1 TAB-SUMMARY + 4 SECTION-SUMMARY + 18 per-page review packets)

Per-page review packets follow a structured template:
- Field table (File / Reviewer / Date / Verdict)
- Summary paragraph
- Frontmatter table (10–14 rows: title, sidebarTitle, description, keywords, og:image, og:image:alt, audience, lastVerified, etc.)
- Heading score table
- Category findings table (Cat 1 FRONTMATTER, 2 VOICE, 3 HEADINGS, 4 STRUCTURE, 5 LAYOUT, 6 VERACITY, 7 NAV, 8 LINKS, 9 PROCESS, 10 COMPLETENESS)
- Verdict line

| Section | Files | TAB-SUMMARY/SECTION-SUMMARY verdicts |
|---|---:|---|
| `TAB-SUMMARY.md` (top-level) | 1 | Audit date 2026-04-08. Verdicts: 7 PASS / 4 NEEDS WORK / 7 FAIL. **Audit data is stale: cites definitions/ecosystem/references/strategic-alignment/deliverables/outcomes as FAIL/empty — but as of 2026-05-22 all six are populated with lastVerified: 2026-05-22.** Reviewer header dated 2026-04-08 but mtime of file is 2026-05-18 — discrepancy. |
| `reviews/rfp/` | 6 (SECTION-SUMMARY + 5 reviews) | aims PASS, deliverables FAIL (empty), outcomes FAIL (empty), problem-statements PASS, report PASS. **Stale — deliverables and outcomes are now populated.** |
| `reviews/root/` | 6 (SECTION-SUMMARY + 5 reviews) | definitions FAIL (empty), ecosystem FAIL (empty), internal-overview NEEDS WORK (duplicate), references FAIL (empty), index PASS (generated). **Stale — definitions/ecosystem/references are now populated 2026-05-22.** |
| `reviews/overview/` | 7 (SECTION-SUMMARY + 6 reviews) | about PASS, docs-philosophy PASS, governance PASS, governance-pipeline PASS, personas NEEDS WORK (3 personas missing), strategic-alignment FAIL (empty). **Mixed — personas still partial, strategic-alignment now populated.** |
| `reviews/assets/` | 3 (SECTION-SUMMARY + 2 reviews) | ycomb NEEDS WORK, inferact-transcript NEEDS WORK. |

### 2.4 Key contradictions in v2/internal/

| # | Contradiction | Evidence |
|---|---|---|
| C1 | `internal-overview.mdx` is a duplicate of `overview/about.mdx` | Both have the same five Card titles + same typo `philopsophy`. SECTION-SUMMARY flags this. |
| C2 | `governance.mdx` section-owners table uses v1 paths (`v2/pages/01_about/`, `v2/pages/04_gateways/`, `v2/pages/06_delegators/`, `v2/pages/08_help/`, `v2/pages/010_products/`) | The numbered prefix system was removed (livepeer-docs-v2-report.md §13.1). |
| C3 | `rfp/aims.mdx` mentions "58-script test and maintenance suite" and "17 GitHub Actions workflows" | Current counts are 320 scripts / 11 active workflows (per addendum §13.1). |
| C4 | `rfp/report.mdx` StyledTable has 2026-02-21 statuses (Cancelled / Incomplete / Blocked) on 5 rows | Addendum §13.3 in `reports/livepeer-docs-v2-report.md` explicitly re-grades these but the StyledTable has not been updated. |
| C5 | `overview/governance-pipeline.mdx` mentions "about 214 scripts" | Real count is 320 active per §13.1. |
| C6 | `_workspace/reviews/TAB-SUMMARY.md` calls 6 root pages FAIL/empty | All 6 are now populated 2026-05-22. The review packet is stale relative to the published content. |
| C7 | `_workspace/layout-components-scripts-styling/pages.mdx` references `v2/pages` folder | Folder structure removed; references stale. |
| C8 | `_workspace/ally-notes.mdx` has duplicate content within itself | Lines 24–101 ≈ Lines 103–180 (Info+Note+Accordion sequence appears twice). |
| C9 | Tab `index.mdx` shows `⚠️` markers on 24+ entries | Generator-driven; suggests generator is flagging stubs/issues that haven't been remediated. |
| C10 | `personas.mdx` is missing Gateway Operator, Orchestrator, Delegator personas | Only Developer persona body content + Mermaid present. |

---


## 3. Per-tab `_workspace/` inventory

**Single uniform mtime.** Every file under every per-tab `_workspace/` and `v2/internal/_workspace/` has mtime `2026-05-18`. This is a single batch operation — likely a restoration, branch merge, or migration sweep — not natural drift. Note that this means mtime cannot be used to find "stale drafts" because everything looks newly touched. The age signal must come from in-file dates instead (e.g. `Audit date: 2026-04-08`).

### 3.1 `v2/about/_workspace/` (118 files)

**Structure**
- `canonical/` (1 file + 8-file `review/` template) — `checks.mdx` (65,680 bytes — SLICE-09b)
- `canonical/review/` (8 files, 90.6 KB total): `00-review-guide.md` (1,463), `01-arriving-question.md` (6,137), `02-personas.md` (14,559), `03-jobs.md` (7,757), `04-journey.md` (12,413), `05-section-structure.md` (16,230), `06-terminology.md` (15,073), `07-path-validation.md` (16,959). Tab-personalised: header is "About Audience Design — Review Guide".
- `deprecated/` (4 files): `livepeer-token-economics.mdx`, `dep-bridge-lpt-to-arbitrum.mdx`, `livepeer-governance.mdx`, `livepeer-protocol/technical-overview.mdx`
- `reviews/` (40 files across 5 subdirs: concepts, network, protocol, resources, root) — per-page review packets, e.g. `network/marketplace.md` (46 lines, 10-category scorecard).
- `reviews2/` (~74 files across 11 subdirs: _summary, concepts/concepts0/concepts1, guides, network/network2, protocol/protocol2, resources, root) — second review iteration. Tab has TWO parallel reviews directories.
- No `TAB-SUMMARY.md` at the about/reviews/ level (unique gap among tabs that have full canonical).

**Notes**
- The about TAB has no top-level TAB-SUMMARY.md, but has the most heavily duplicated reviews layout (reviews/ + reviews2/ — duplicate pass on same content).
- `deprecated/` is named without the `x-` prefix used by orchestrators/`x-archived/` and solutions/`x-deprecated/`. Naming inconsistency.

### 3.2 `v2/community/_workspace/` (38 files)

**Structure**
- `canonical/review/` (8 files, follows the same 00..07 template — community-personalised)
- `canonical/` no top-level files beyond `review/` (no checks.mdx, no Frameworks, no IA, no REVIEW-REGISTRY)
- `archive/` (1 file)
- `context-data/` (2 files)
- `research/` (2 files)
- `reviews/` (21 files) — includes `TAB-SUMMARY.md` (community: 5 sections; 18 audited; 29% PASS / 29% PASS-with-issues / 12% NEEDS WORK / 29% FAIL — dated 2026-04-08)
- `staging/` (4 files)

**Notes**
- Smallest workspace among tabs with canonical/review (38 files vs 118 about, 446 gateways).
- No checks.mdx — gap relative to about/delegators/developers1/orchestrators/gateways.

### 3.3 `v2/delegators/_workspace/` (55 files)

**Structure**
- `canonical/checks.mdx` (68,479 bytes — SLICE-09b)
- `canonical/review/` (8 files following 00..07 template — delegators-personalised: `01-delegator-audience`, `02-delegator-personas`, `03-delegator-journeys`, etc.)
- `DO-NOT-ADD-portal.mdx` (top-level — explicit DO NOT EDIT signal)
- `TO-ADD/` (11 files — pending intake)
- `archive/` (5 files)
- `delegation-rewrite/` (2 files — in-progress rewrite of delegation pages)
- `reviews/` (26 files; includes `TAB-SUMMARY.md` — Delegators dated 2026-04-08 — verdict: "GOOD with systemic issues to fix")
- `todo.txt` (top-level)

**Notes**
- Unique top-level naming: `DO-NOT-ADD-portal.mdx` and `TO-ADD/` and `todo.txt` are explicit human-management markers absent from other tabs.

### 3.4 `v2/developers/_workspace/` (259 files)

**Structure (NO `canonical/` directory)**
- `SCAFFOLD-NOTES.md` (23,378 bytes — root file)
- `audit-2026-05-14/` (2 files): `audit-summary.md`, `current-state-developers.tsv`
- `developer-tab-fixes/` (147 files in a deeply nested mirror tree mirroring v2/developers/ live structure) — concepts/, get-started?/, guides/{auth-and-security,gateways-as-developer,local-development,observability-and-debugging,payments,transport}, build/{ai-and-agents,alt-gateways,applications,compute,plugins-and-extensions,tutorials,video}, learn/{where-to-find}, resources/{reference}
- `developers-tab-fixes.zip` (438,983 bytes — top-level zip!)
- `diagrams2.mdx` (64,103 bytes — top-level)
- `new files/` (19 files across files4–files9 subdirs)
- `notes.mdx` (4,180 bytes)
- `reviews/_packet/` (6 files — review template + rubric): `5-whys-prompt.md`, `batch-roster.md`, `component-matrix.md`, `review-rubric.md`, `review-template.md`, `voice-copy-checklist.md`
- `reviews/_summary/` (9 files): summary files per section (build-*, concepts, guides-local-and-top, learn)
- `reviews/{build,concepts,guides,learn}/` (~70 files, mirror tree of live developers tree)
- `updated files/` (2 zips: files.zip, files1.zip)

**Notes**
- **Most chaotic workspace.** No `canonical/` folder. Uses `developer-tab-fixes/` instead. Zip files in working tree. Naming convention is informal ("new files", "updated files" with spaces).
- developers WORKSPACE pattern is unique — none of the canonical/review/checks.mdx structure that 7 other tabs share.

### 3.5 `v2/developers1/_workspace/` (198 files)

**Structure**
- `canonical/checks.mdx` (66,260 bytes — SLICE-09b)
- `canonical/review/` (8 files following 00..07 template — developers1-personalised)
- `ADD-ME/` (2 files)
- `Developers_IA.zip` (top-level zip)
- `Livepeer in 2026_ The Decentralized Video and AI Compute Stack.pdf` (top-level PDF)
- `StateOfLivepeer2026.md` (top-level)
- `archive/` (75 files inc. `pre-restructure-2026-04-06/` subdir — concepts, get-started, build pages with `status: draft`)
- `audit-2026-05-12/` (15 files — pre-audit inventory + tasks 0–4)
- `audit-2026-05-12.zip` (top-level zip)
- `consolidate.md` (top-level)
- `context-data/` (17 files)
- `files-to-add/` (23 files)
- `reviews/` (52 files; includes `TAB-SUMMARY.md` — developers: 7 sections, 47 pages, 55% PASS)

**Notes**
- Same canonical/checks.mdx pattern as about/delegators/orchestrators. Has full sevens.
- Stale "pre-restructure-2026-04-06" subdir reflects a restructure that happened around that date.

### 3.6 `v2/developers2/_workspace/` (14 files)

**Structure (TINY — no `canonical/`, no `reviews/`)**
- `KISS-DEVS.md` — "Walking through this from the developer's actual mental state on arrival"
- `briefs-batch-1-root-concepts.md` through `briefs-batch-9-routing.md` (9 briefs)
- `developers-tab-audience-persona-research.md`
- `image.png` (a screenshot — binary)
- `livepeer_developer_routing_flow_v1.svg` (diagram)
- `persona-routing-and-infra-map (1).md` (filename with literal " (1)" suffix — Windows-style duplicate naming)
- `notes` (1 file)

**Notes**
- Pure scratch space. No canonical, no reviews. Filename `persona-routing-and-infra-map (1).md` has the macOS duplicate suffix — Finder-style copy artefact in repo.

### 3.7 `v2/gateways/_workspace/` (446 files)

**Structure** — has every canonical artefact, but they are COPIES of orchestrators:
- `canonical/` files (BYTE-IDENTICAL TO ORCHESTRATORS): `Frameworks.mdx` (40,318), `IA.mdx` (16,113), `process.mdx` (6,219), `my-process.mdx`, `REVIEW-REGISTRY.md` (41,307), `ia-data.json` (14,208), `decision-log.md`, `record-log.md`
- `canonical/checks.mdx` (43,005 — DIVERGES from orchestrators by ~218 lines: gateways stops at Category 9, missing CONTENT COMPLETENESS — see SLICE-09b)
- `canonical/review/` (12 files — 00..07 review template + `CLAUDE-DRAFT.md`, `DRAFT-ANSWERS.md`, `scorecard-draft.mdx`, `SESSION-REVIEW.md` — appears partially personalised)
- `canonical/scripts/` (2 files): `script-pipeline-index.mdx`, `script-plan.md`
- `canonical/research/` (2 files): `summary.md`, `content-inventory.md`
- `canonical/templates/` (1 file): `basic-page-style.mdx`
- `canonical/check/` (29 files across setup/, quickstart/, concepts/ subdirs)
- `archive/` (245 files — heaviest single archive across all tabs)
- `deprecated/` (4 files)
- `notes/` (1 file)
- `plans/` (2 files)
- `reviews/` (136 files; includes `TAB-SUMMARY.md` — gateways: 7 sections, 159 pages: 79 Pass + 12 Conditional + 31 Needs Work + 37 Rewrite/Fail)
- `developer-tab-research.md` (top-level file with cross-tab content!)
- `research-sources.md` (top-level)
- `resources-master-list.mdx` (top-level)

**Notes**
- **Largest archive across all tabs (245 files).** Gateways canonical filename is a misnomer — it contains the orchestrators canonical set.
- `developer-tab-research.md` is in gateways/_workspace — content leak (developers research living in gateways).

### 3.8 `v2/home/_workspace/` (37 files)

**Structure**
- `canonical/review/` (8 files following 00..07 template — home-personalised)
- `canonical/` no top-level files (no checks.mdx, no Frameworks)
- `archived/` (7 files — different spelling from other tabs' `archive/`)
- `reviews/` (20 files — no TAB-SUMMARY.md)
- `showcase/` (2 files)

**Notes**
- Uses `archived/` (past tense, unique spelling) instead of `archive/`.
- No TAB-SUMMARY for home reviews.

### 3.9 `v2/orchestrators/_workspace/` (459 files — largest per-tab workspace)

**Structure** — full canonical suite, used as the source/template for gateways:
- `canonical/` core files: `Frameworks.mdx`, `IA.mdx`, `process.mdx`, `my-process.mdx`, `REVIEW-REGISTRY.md`, `ia-data.json`, `record-log.md`
- `canonical/checks.mdx` (65,875) and `canonical/checks-remediation.mdx` (32,235) — only orchestrators has the `-remediation` partner page
- `canonical/review/` (12 files — same 12-file extended set as gateways: 00..07 + CLAUDE-DRAFT + DRAFT-ANSWERS + scorecard-draft + SESSION-REVIEW)
- `canonical/scripts/` (2 files): `script-pipeline-index.mdx`, `script-plan.md` (249,947 bytes — the SLICE-09b note; massive)
- `canonical/research/` (3 files): `per-page-needs.mdx`, `audience-personas-orchestrators.mdx`, `all-copy-content.mdx`
- `canonical/check/` (194 files — by far the largest single canonical subdir):
  - `concepts/`, `quickstart/`, `setup/`, `guides/`, `resources/` mirror tree
  - `guides/` has 10 subdirs: ai-and-job-workloads, roadmap-and-funding, payments-and-pricing, advanced-operations, monitoring-and-tooling, deployment-details, config-and-optimisation, tutorials, operator-considerations, staking-and-rewards
  - Root files: `decision-log.md`, `navigator.md`, `navigator-review.md`, `index-review.md`, `portal.md`, `checks-gap-content.md`, `checks-gap-layout.md`, `index.md`, `ORCHESTRATORS-ROLLUP.md`, `learnings.md`, `portal-review.md`
- `drafts/` (6 files inc. `Orchestrators_new/`): `SKILL-page-review-rewrite.md`, `docs-section-planning-playbook.md`, `draft-setup-options.mdx`, `tier-questions-all-pages.md`, `Orchestrators_new/{01 faq-draft.mdx, 04-orch-config-draft.mdx}`
- `handoff/` (2 files): `handoff-restructure.md`, `product-thinking-handoff.md`
- `plans/` (78 files inc. 4 zips: `tutorial-writing-pack.zip`, `tutorial-files.zip`, `quickstart-setup-writing-pack.zip`, `completed-pages-pack.zip` and `tutorial-writing-pack/`, `quickstart-setup-writing-pack/` extracted subdirs)
- `research/` (24 files inc. `Orchestrators_new/` subdir with 15 brief/research files)
- `reviews/` (86 files across concepts, guides, quickstart, resources, root, setup subdirs — no top-level TAB-SUMMARY.md)
- `x-archived/` (43 files inc. `v1/` subdir — pages migrated from v1; `dep-*` deprecated dirs)

**Notes**
- **Most complete and most legitimate canonical/ stewardship workspace.** Everything other tabs have, plus check/ subdir scaling to 194 files (mostly check/{section}/{page}.md result files).
- 4 zip files in `plans/` — should be unpacked into staging or deleted post-extraction.
- No reviews/TAB-SUMMARY.md despite reviews/ being 86 files.

### 3.10 `v2/resources/_workspace/` (63 files)

**Structure**
- `canonical/reference-index.md` (1 file; appears to be a custom reference index, not a checks.mdx)
- `canonical/review/` (8 files following 00..07 template — resources-personalised)
- `reviews/` (53 files; includes `TAB-SUMMARY.md` — resources/documentation-guide section, dated 2026-04-08; flags `lpd-cli.mdx` as FAIL — empty file in nav)
- `todo.txt` (top-level)

**Notes**
- No checks.mdx, no Frameworks.mdx — minimal canonical, plus a unique `reference-index.md`.

### 3.11 `v2/solutions/_workspace/` (151 files)

**Structure**
- `canonical/IA.mdx` (unique — solutions has its own IA.mdx, not a copy of orchestrators)
- `canonical/glossary.md`, `canonical/terms.mdx`, `canonical/pageStatus.md` (solutions-unique files)
- `canonical/review/` (8 files — 00..07 template, solutions-personalised; size 8 vs the 12-file extended set used by gateways/orchestrators)
- `reviews/` (119 files; includes `TAB-SUMMARY.md` — Solutions: 118 pages audited 2026-04-08; 0% PASS, 88% MINOR, 11% MODERATE, 0% MAJOR; 293 total issues; `livepeer-studio` subsection alone has 97 pages with 115 frontmatter issues + 90 structural)
- `x-deprecated/` (20 files — uses `x-` prefix, differs from about's `deprecated/` and orchestrators' `x-archived/`)
- No checks.mdx.

**Notes**
- Has a unique own IA (not a copy of orchestrators' IA). The only tab whose IA is genuinely tab-specific.

### 3.12 `v2/_workspace/` (root v2 workspace — 1,153 files)

**Structure**
- `archive/` (1,118 files)
  - `language-pages/` (1,070 files): `es/` (709 files) + `fr/` (361 files) — archived locale page snapshots
  - `p1-cleanup/` (3 files)
  - `reports/` (7 files)
  - `resources/documentation-guide/` (3 files)
  - `x-deprecated/` (21 files): about/, gateways/, unmatched/ subdirs
  - `x-experimental/` (4 files)
  - `x-notes/` (5 files)
- `context-data/` (3 files)
- `locale-page-archive/` (24 files): cn/, es/, fr/ subdirs with resources/ — secondary locale archive
- `notes/` (1 file): `content-naming.md`
- `plans/` (1 file): `restructure.mdx`
- `research/` (6 files): `ai-coauthoring.md`, `community-tab-04-context-and-recalibration.md`, `content-pipeline/` (subdir)

**Notes**
- **1,094 of 1,153 files (95%) are archived locale pages (es/fr/cn).** This is a one-time snapshot of the multilingual pipeline output; multilingual is documented as "switcher live, no published translations" (livepeer-docs-v2-report.md §13.3). The archive is now dead weight.
- Two parallel locale archives exist: `archive/language-pages/` and `locale-page-archive/`. Same data, different folder.

---

## 4. Cross-tab pattern matrix

| Tab | files | canonical/ | checks.mdx | Frameworks | IA | REVIEW-REGISTRY | process.mdx | ia-data.json | canonical/scripts/ | canonical/research/ | canonical/check/ | canonical/templates/ | canonical/review/ (00..07) | reviews/ TAB-SUMMARY | drafts/ | plans/ | archive variant | extras |
|---|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| about | 118 | Y | YES (65,680) | — | — | — | — | — | — | — | — | — | YES (8 files, About-personalised) | — | — | — | `deprecated/` (4) | reviews2/ (74) |
| community | 38 | partial | — | — | — | — | — | — | — | — | — | — | YES (8 files) | YES (2026-04-08) | — | — | `archive/` (1) | staging/ (4); research/ (2); context-data/ (2) |
| delegators | 55 | Y | YES (68,479) | — | — | — | — | — | — | — | — | — | YES (8 files) | YES (2026-04-08) | — | — | `archive/` (5) | TO-ADD/ (11); delegation-rewrite/ (2); DO-NOT-ADD-portal.mdx; todo.txt |
| developers | 259 | **NO** | — | — | — | — | — | — | — | — | — | — | — | _summary/ (9 files) and _packet/ (6 files) instead | — | — | — | `developer-tab-fixes/` (147); 2 zips; "new files/" (19); "updated files/" (2 zips); diagrams2.mdx (64K) |
| developers1 | 198 | Y | YES (66,260) | — | — | — | — | — | — | — | — | — | YES (8 files) | YES (2026-04-08) | — | — | `archive/` (75 inc. `pre-restructure-2026-04-06/`) | 2 zips; PDF; audit-2026-05-12/ (15); files-to-add/ (23); ADD-ME/ (2); context-data/ (17) |
| developers2 | 14 | NO | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | 9 briefs + PNG + SVG + persona research |
| gateways | 446 | Y | YES (43,005 — divergent) | YES (orch copy) | YES (orch copy) | YES (orch copy) | YES (orch copy) | YES (orch copy) | YES (2 files) | YES (2) | YES (29 files) | YES (1 file: basic-page-style.mdx) | YES (12 files; extended) | YES (2026-04-08) | — | YES (2) | `archive/` (245); `deprecated/` (4) | notes/ (1); resources-master-list.mdx; research-sources.md; developer-tab-research.md (cross-tab leak) |
| home | 37 | partial | — | — | — | — | — | — | — | — | — | — | YES (8 files) | — | — | — | `archived/` (7 — past tense) | showcase/ (2) |
| internal | 91 | — | — | — | — | — | — | — | — | — | — | — | — | YES (2026-04-08) | — | — | — | published content (16 .mdx + reports + assets) — see §1; _workspace 28 files |
| orchestrators | 459 | Y | YES (65,875) + checks-remediation.mdx (32,235) | YES (40,318) | YES (16,113) | YES (41,307) | YES (6,219) | YES (14,208) | YES (2 files; script-plan.md = 249K) | YES (3 files) | YES (194 files) | — | YES (12 files; extended) | — | YES (6) | YES (78 + 4 zips) | `x-archived/` (43 inc. v1/) | handoff/ (2) |
| resources | 63 | partial | — | — | — | — | — | — | — | — | — | — | YES (8 files) | YES (2026-04-08) | — | — | — | reference-index.md (unique); todo.txt |
| solutions | 151 | Y | — | — | YES (own, not orch copy) | — | — | — | — | — | — | — | YES (8 files) | YES (2026-04-08) | — | — | `x-deprecated/` (20) | glossary.md; terms.mdx; pageStatus.md |

**Universal: `canonical/review/` 00..07 template** present in 9 of 11 tabs (missing: developers, developers2, internal). The `00-review-guide.md` headings (e.g. "About Audience Design — Review Guide", "Orchestrators Audience Design — Review Guide") confirm per-tab personalisation; this is the only canonical artefact that is genuinely per-tab rather than copied.

**Universal: `reviews/TAB-SUMMARY.md`** present in 7 of 11 tabs (missing: about, developers, developers2, home, orchestrators). All extant TAB-SUMMARY.md files dated 2026-04-08.

---

## 5. Cross-tab contradictions (top 10 + supporting)

| # | Contradiction | Evidence | Impact |
|---|---|---|---|
| **1** | Gateways canonical/ is byte-identical to orchestrators canonical/ | `diff` returns 0 lines for `IA.mdx`, `Frameworks.mdx`, `process.mdx`, `ia-data.json`, `REVIEW-REGISTRY.md`, `my-process.mdx`, `record-log.md`. `REVIEW-REGISTRY.md` literally opens "# Orchestrators Tab Page Inventory". | Gateways has no IA of its own; the published "gateways canonical" is a mislabelled orchestrators IA. |
| **2** | Gateways checks.mdx is 218 lines shorter than orchestrators; has only 9 categories, missing CONTENT COMPLETENESS (Cat 10) | SLICE-09b §1 + section 3.7 of this slice | Gateways has no governance for content completeness; reviews can't grade page-coverage. |
| **3** | orchestrators/about/developers1 checks.mdx have FULL frontmatter; gateways/orchestrators have NO frontmatter and use em-dashes | SLICE-09b §0 Drift signal #0 | Hook-enforced em-dash ban means orchestrators canonical would fail if it were ever rendered. |
| **4** | TAB-SUMMARY.md files all dated 2026-04-08 — but published v2/internal pages now show `lastVerified: 2026-05-22` | TAB-SUMMARY says definitions/ecosystem/references FAIL (empty stubs); actual files have substantive content as of 2026-05-22 | Reviews are out of date for at least the internal tab. Stale across whole repo? |
| **5** | `v2/internal/overview/governance.mdx` section-owners table uses v1 numbered paths (`v2/pages/01_about/`, `v2/pages/04_gateways/`, ...) | §1.2 of this slice | Routes do not exist; map is unmaintained. |
| **6** | `v2/internal/rfp/aims.mdx` says "58-script test suite" and "17 GitHub Actions workflows" | §1.3 of this slice; addendum §13.1 of livepeer-docs-v2-report.md says 320 active scripts + 11 active workflows | Headline counts in flagship RFP doc are nearly 6x understated. |
| **7** | `v2/internal/rfp/report.mdx` StyledTable has unchanged 2026-02-21 status grades; addendum §13.3 explicitly re-grades 5 rows but the table is unchanged | §1.3 | Public RFP report contradicts its own audit appendix. |
| **8** | `v2/internal/overview/governance-pipeline.mdx` says "about 214 scripts"; addendum §13.1 says 320 | §1.2 | Three different script counts (58 / 214 / 320) across three sibling pages. |
| **9** | `v2/internal/_workspace/ally-notes.mdx` duplicates its own content twice within the file | §2.1 | Lines 24–101 ≈ Lines 103–180 — likely a paste-into-existing-file accident. |
| **10** | `v2/internal/_workspace/layout-components-scripts-styling/pages.mdx` references `v2/pages` folder structure | §2.2 | Numbered prefix removal happened; doc is stale. |
| **11** (supporting) | `v2/internal/overview/personas.mdx` only has Developer body; Gateway/Orchestrator/Delegator personas are heading-only stubs | §1.2 | Stakeholder-focused mandate has 3 incomplete persona pages. |
| **12** (supporting) | `v2/developers/_workspace/` has zip files (`developers-tab-fixes.zip`, two zips under `updated files/`) inside the working tree | §3.4 | Binary working artefacts in git. |
| **13** (supporting) | `v2/orchestrators/_workspace/plans/` has 4 zip files | §3.9 | Same pattern. |
| **14** (supporting) | `v2/developers2/_workspace/persona-routing-and-infra-map (1).md` has macOS-style " (1)" suffix | §3.6 | Finder copy artefact committed. |
| **15** (supporting) | `v2/_workspace/archive/language-pages/` (1,070 files) and `v2/_workspace/locale-page-archive/` (24 files) — two parallel locale archives | §3.12 | Same data, two folders, no published translations to actually need them. |
| **16** (supporting) | gateways/_workspace/ has top-level files (`developer-tab-research.md`, `research-sources.md`, `resources-master-list.mdx`) | §3.7 | Cross-tab content placed in wrong workspace (developer research in gateways/). |
| **17** (supporting) | naming variants across tabs: `archive/` (community, delegators, developers1, gateways, orchestrators), `archived/` (home), `deprecated/` (about, gateways), `x-archived/` (orchestrators), `x-deprecated/` (solutions, v2/_workspace/archive/) | §3 across | No single archive contract across tabs. |
| **18** (supporting) | `v2/internal/reports/repo-ops/` has 26 files of which 20 are `audit-tasks-folders--{name}-audit.md` aliases that are byte-identical to a primary `{name}.md` | §1.5 | Half the reports directory is duplicate. |
| **19** (supporting) | TAB-SUMMARY says deliverables.mdx and outcomes.mdx are FAIL empty; both have substantive content + lastVerified: 2026-05-22 | §2.3 | Stale review |
| **20** (supporting) | Every per-tab _workspace/ file has mtime exactly 2026-05-18 | §3 preamble | Single batch operation — restoration or sweep. Real authorship history lost from mtime. |

---

## 6. Orphan files (in workspace, no inbound refs)

Heuristic: files that appear to be ad-hoc additions without governance hooks.

| Path | Why it looks orphaned |
|---|---|
| `v2/developers/_workspace/developers-tab-fixes.zip` (438K) | Working zip in tree; no script consumes it. |
| `v2/developers/_workspace/updated files/files.zip` and `files1.zip` | Same. |
| `v2/orchestrators/_workspace/plans/{tutorial-writing-pack.zip, tutorial-files.zip, quickstart-setup-writing-pack.zip, completed-pages-pack.zip}` | 4 zips alongside extracted dirs. |
| `v2/developers1/_workspace/Developers_IA.zip` | Top-level zip. |
| `v2/developers1/_workspace/audit-2026-05-12.zip` | Top-level zip alongside extracted subdir. |
| `v2/developers1/_workspace/Livepeer in 2026_ The Decentralized Video and AI Compute Stack.pdf` | Top-level PDF; not referenced by any MDX. |
| `v2/developers2/_workspace/image.png` | Screenshot binary. |
| `v2/developers2/_workspace/livepeer_developer_routing_flow_v1.svg` | SVG diagram. |
| `v2/developers2/_workspace/persona-routing-and-infra-map (1).md` | macOS copy-artefact filename. |
| `v2/internal/_workspace/marketing-posts.md` + `marketing-posts-v2.md` | Marketing ideation; not part of any pipeline. |
| `v2/internal/_workspace/layout-components-scripts-styling/{pages.mdx, components.mdx}` | References `v2/pages/` — stale. |
| `v2/internal/_workspace/ally-notes.mdx` | Has `<Danger> Diff this content </Danger>` marker; duplicate content within self. |
| `v2/internal/reports/repo-ops/*.md` (20 `audit-tasks-folders--*` files) | Byte-identical aliases of primary reports. |
| `v2/internal/assets/transcripts/{ycomb.mdx (331K), ycomb.rss (909K), a16z.rss (588K)}` | Massive feed/transcript artefacts inside served docs tree. |
| `v2/_workspace/archive/language-pages/{es,fr}` (1,070 files total) | Archived locale page snapshots — translations never published. |
| `v2/_workspace/locale-page-archive/` (24 files) | Duplicate locale archive. |
| `v2/orchestrators/_workspace/x-archived/v1/` (multiple v1 pages) | v1 migration leftovers. |
| `v2/delegators/_workspace/DO-NOT-ADD-portal.mdx` | Explicit DO-NOT-ADD marker file. |

---

## 7. Stale drafts (`status: draft` in frontmatter, sorted by tab)

**Total: 55 files with `status: draft`** (mtime cannot be used because every workspace file has 2026-05-18 — see §3 preamble).

| Tab | Count | Notes |
|---|---:|---|
| developers (developer-tab-fixes/) | 6 | All inside developer-tab-fixes/ — staged content awaiting integration. |
| developers1 (archive/) | 6 | All inside `archive/pre-restructure-2026-04-06/` — pre-restructure copies. Archive ≠ draft; double-status. |
| gateways (archive/context-data/new/ + canonical/review + canonical/templates) | 6 | 4 in archive/context-data/new/, plus scorecard-draft.mdx and basic-page-style.mdx. |
| orchestrators (canonical, plans, handoff, x-archived) | 37 | Highest count by far. Includes 6 in `plans/quickstart-setup-writing-pack/stubs/`, 5 in `plans/tutorial-writing-pack/stubs/`, 3 in `plans/tutorial-writing-pack/source-pages/`, 5 in `canonical/check/resources/root/` (community-pools, arbitrum-rpc, arbitrum-exchanges, community-guides, x-help), 13 in `x-archived/dep-*/`. |

**Pattern:** orchestrators `x-archived/dep-*/` has 13 files marked `status: draft` AND placed in an `x-archived/` deprecated directory. Status field is inconsistent with directory contract.

---

## 8. Consolidation matrix

| Theme | Candidate consolidation | Risk | Justification |
|---|---|---|---|
| Gateways canonical = orchestrators canonical | Either rebuild gateways canonical IA from scratch using gateways live content, OR delete gateways canonical/ and reference orchestrators canonical via symlink/README | Medium — checks.mdx already diverges | Right now gateways governance is byte-for-byte orchestrators governance, including REVIEW-REGISTRY titled "Orchestrators Tab Page Inventory". |
| TAB-SUMMARY.md staleness | Re-run audits for all 7 tabs that have TAB-SUMMARY; mark stale before then. Or delete the stale data | Low — these are workspace artefacts, not published | Every TAB-SUMMARY is dated 2026-04-08; published content has moved on (e.g. internal lastVerified 2026-05-22). |
| RFP report.mdx StyledTable | Update 5 rows per addendum §13.3; sync aims.mdx and problem-statements.mdx numbers; update governance-pipeline.mdx script count from 214 → 320 | Low | Live discrepancy between report and its own audit appendix. |
| `v2/internal/overview/governance.mdx` section-owners table | Rewrite using current flat IA paths (`v2/about/`, `v2/gateways/`, ...) | Low | Cited paths use the v1 numbered prefix that was removed (e.g. `v2/pages/01_about/`). |
| `v2/internal/internal-overview.mdx` | Delete (duplicate of `overview/about.mdx`) OR consolidate the two into one canonical landing | Low — DA-flagged in §2 SECTION-SUMMARY | Same content; same typo `philopsophy`; pre-2026-04-08 review packet already flagged. |
| Personas content gap | Populate Gateway Operator / Orchestrator / Delegator personas in `personas.mdx` from `v2/internal/_workspace/reviews/overview/personas.md` analysis + tab-specific 02-personas.md | Medium | Currently only Developer journey is populated. |
| Locale page archive | Delete `v2/_workspace/archive/language-pages/{es,fr}` (1,070 files) and `v2/_workspace/locale-page-archive/` (24 files) | Medium — historical record loss vs maintenance benefit | Translations never published; no live consumer. |
| Zip files in workspace | Extract content into structured staging, delete zips | Low | Working artefacts committed (developers-tab-fixes.zip, 4 orchestrators plan zips, audit-2026-05-12.zip, files.zip, files1.zip, Developers_IA.zip). |
| `v2/internal/reports/repo-ops/audit-tasks-folders--*` aliases | Delete the 20 aliases; keep primary `{name}-audit.md` files | Low | Byte-identical; no point. |
| Cross-tab content leak | Move `v2/gateways/_workspace/developer-tab-research.md` → developers workspace | Low | File about developer audience research in gateways workspace. |
| Naming inconsistency: archive variants | Adopt one of `archive/` vs `x-archived/` vs `x-deprecated/` vs `deprecated/` across all tabs | Low | 4 naming variants across 11 tabs. |
| Status field inconsistency on orchestrators x-archived/ | Either drop `status: draft` from x-archived files OR move them out of x-archived/ | Low | Self-contradictory metadata. |
| `v2/developers/_workspace/` lack of canonical/ | Adopt the 9-tab canonical contract: add `canonical/checks.mdx` + `canonical/review/00..07.md` for developers | Medium — developers tab is most chaotic in the repo | Pattern parity across tabs; current state is "developer-tab-fixes/" mirror tree + zips. |
| `v2/about/_workspace/reviews/` and `reviews2/` | Pick one and delete the other (or merge); rename reviews2/ if it's the newer iteration | Low | 40 + 74 = 114 of about's 118 files are reviews. |
| `v2/internal/_workspace/ally-notes.mdx` duplicate content | Deduplicate the second half (lines 103–180) | Low | Self-contained file with content duplicated twice. |
| `v2/internal/assets/transcripts/` ycomb.mdx (331K) and 2 RSS files | Move RSS feeds to operations/data/feeds/; convert ycomb.mdx to a deferred-load page or split it | Medium — these are served as v2 pages currently | Massive served-doc artefacts; TAB-SUMMARY flagged moving 323KB ycomb.mdx out of served docs. |

---

## 9. Confirmation

- **File written:** `workspace/thread-outputs/repo-consolidation-deep/SLICE-09-v2-internal-and-workspaces.md`
- **Total files inventoried:** 91 (v2/internal/) + 28 (internal/_workspace) + 118 + 38 + 55 + 259 + 198 + 14 + 446 + 37 + 459 + 63 + 151 + 1,153 = **3,110**
- **Stale drafts found (`status: draft`):** 55
- **Top contradictions:** see §5 — 20 contradictions documented, 10 numbered as top + 10 supporting.
- **Cross-reference:** all 4 oversized `checks.mdx` files (about/delegators/developers1/orchestrators) referenced from `SLICE-09b-checks-cross-tab.md` per the brief; not re-read.
