# Per-Page Quality Check Report
## `v2/orchestrators/guides/advanced-operations/dep-guide.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` — `dep-guide` does NOT appear anywhere in docs.json. The four pages registered under "Advanced Operations" (lines 2939–2942) are: `gateway-relationships`, `gateway-orchestrator-interface`, `pool-operators`, `scale-operations`. `dep-guide` is absent.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Advanced Operations Guide` | PASS | Well-formed |
| `sidebarTitle` | Yes | `Guide` | PASS | Present |
| `description` | Yes | `Overview of advanced orchestrator operations, including AI pipelines, economics, governance, monitoring, and fleet-scale concerns.` | FAIL | 133 chars, UK English, but "Overview of…" is a self-referential opener pattern. Also: `pageType: overview` is deprecated; description mirrors the deprecated navigation role |
| `pageType` | Yes | `overview` | FAIL | Deprecated alias — not in the 7-type canonical schema. Correct migration: explicit type based on actual content purpose (this is a routing page → `pageType: navigation`) + `pageVariant` as co-fix |
| `audience` | Yes | `orchestrator` | PASS | Valid canonical token |
| `purpose` | Yes | `guide` | FAIL | (b) wrong field: `guide` is a valid canonical `pageType` value, not a valid `purpose` value. No valid `purpose` is set. See Frameworks.mdx §1.2 — valid purposes are: `orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`, `update` |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | 7 keywords listed | FAIL | All generic (`livepeer`, `orchestrator`, `advanced operations`) — none are specific searcher-intent terms per check 1.13 |
| `industry` | No | — | FAIL | Required field absent (P41) |
| `niche` | No | — | FAIL | Required field absent (P41) |
| OG image block | Yes | All 5 fields present | PASS | `og:image`, `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height` all present |

**Required field count:** 5/10. Missing: `complexity`, `lifecycleStage` (absent entirely); `pageType` deprecated; `purpose` invalid value; `industry` absent; `niche` absent.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | `complexity`, `lifecycleStage`, `industry`, `niche` all absent. `pageType: overview` is deprecated. `purpose: guide` is an invalid purpose value. 6 of 10 required fields fail. |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `overview` is a deprecated alias. Per Frameworks.mdx §1.1 migration table: `overview` → migrate explicitly to correct new type. For a routing/navigation page with cards linking to sections, canonical type is `navigation`. (a) deprecated alias error. |
| 1.3 | `pageVariant` valid if present | N/A | `pageVariant` is absent. Per P42, this is a co-fix dependency of check 1.2 — when `pageType` is migrated from `overview`, the appropriate `pageVariant` (if any) must be set as part of the same root cause fix. Not an independent finding. |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `purpose: guide` is not in the 15-value canonical purpose set. `guide` is a valid `pageType` value placed in the wrong field — error type (b): wrong field. Valid proposed purpose for a navigation/routing page: `orient`. Proposed: `purpose: orient` — confirm before applying. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is a valid canonical token. |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: draft` is present, which is consistent. However, `veracityStatus` is a required field per checks.mdx §1.8. Proposed: `veracityStatus: unverified` — appropriate for an unreviewed page. |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required (P41). Proposed: `industry: [technical]` — confirm before applying. |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required (P41). Proposed: `niche: [infrastructure, protocol]` — confirm before applying. |
| 1.11 | `description` well-formed | FAIL | `Overview of advanced orchestrator operations, including AI pipelines, economics, governance, monitoring, and fleet-scale concerns.` — opens with "Overview of" which is a structural label, not a subject-first statement. Should lead with what the reader gains or what the section covers in concrete terms. Length 133 chars — within 160-char limit. UK English: PASS. |
| 1.12 | OG image block complete | PASS | All 5 OG fields present. |
| 1.13 | `keywords` field quality | FAIL | All 7 keywords are generic (`livepeer`, `orchestrator`, `advanced operations`, `ai pipelines`, `governance`, `monitoring`, `fleet ops`). None are specific searcher-intent terms. Better alternatives: `livepeer multi-orchestrator setup`, `gpu fleet orchestrator`, `orchestrator advanced config`, `ai pipeline orchestrator`. |

**Category 1 verdict: FAIL** — 9 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13

---

## Category 2 — VOICE & COPY

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spelling patterns found. `optimising` (line 43 sidebarTitle uses "Monitoring and Optimising") is UK English. No -ize, -or (colour), -er (centre) violations. |
| 2.2 | Zero banned words | PASS | Scanning all body text: `effectively` — not found. `essentially` — not found. `basically` — not found. `meaningful`/`meaningfully` — not found. `significant`/`significantly` — not found. `real` (as intensifier) — not found. `various` — not found. `several` — not found. `obviously` — not found. `clearly` — not found. No banned words detected. |
| 2.3 | Zero banned phrases | PASS | Scanning body text: no "This section covers", "This page covers", "rather than", "and so on", "etc.", "it is important to note", "as mentioned above" found. |
| 2.4 | Zero banned constructions | PASS | No `not [X]` as primary statement. No `This page [verb]` self-reference in body prose. The page prose is minimal (one intro sentence + cards + table). No `can/may [verb]` in value claims found. |
| 2.5 | Opening order correct | PASS | Page opens with: "Use Advanced Operations once you are past the default setup path and need workload specialization, economic tuning, governance context, deeper monitoring, or scaled operations guidance." — leads with the reader use case. No caveat or self-reference opener. |
| 2.6 | Paragraph discipline | PASS | Single intro sentence. Table and cards follow. No paragraph discipline issues. |
| 2.7 | Audience register correct | PASS | Tone is peer-technical. No hand-holding. Appropriate for `orchestrator` audience. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found. |
| 2.9 | No passive value statements | PASS | No value claims present to evaluate. |
| 2.10 | No hedging openers | PASS | Opens directly with the use case. |
| 2.11 | Terminology locked and consistent | PASS | Uses: AI pipelines, governance, monitoring, fleet ops — all consistent with domain usage. |

**Category 2 verdict: PASS** — 0 checks fail.

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading Score Table:**

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Notes |
|---|---|---|---|---|---|---|---|
| `## Sections` | 1 | 1 | 2 | 2 | 5 | 11/25 | Maximally generic. "Sections" could appear on any page on any site. No domain noun. No signal. Fails all meaningful criteria. |
| `## Recommended entry points` | 3 | 2 | 3 | 3 | 3 | 14/25 | Better than "Sections" but still a structural label masquerading as a concept. "Recommended" is evaluative but vague. "Entry points" is jargon for "where to start". |

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | `## Sections` scores 11/25. `## Recommended entry points` scores 14/25. Both fail the threshold. |
| 3.2 | No banned or weak standalone heading terms | FAIL | `## Sections` — not on the explicit banned list but is a pure structural label equivalent to "Overview" or "Details" (Avoid tier). `## Recommended entry points` — borderline Avoid tier. Neither heading names a governing concept. |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings present. |
| 3.4 | Domain-anchor rule applied | FAIL | `## Sections` has no domain noun. Uninterpretable in isolation. |
| 3.5 | Heading names the concept, not examples | FAIL | `## Sections` is purely structural. `## Recommended entry points` is navigation meta-commentary, not a concept name. |
| 3.6 | Title well-formed | FAIL | `Advanced Operations Guide` — "Guide" is a structural suffix, not a concept. The governing concept is "Advanced Operations". Title could be `Advanced Operations` (2 words, concept-derived). |
| 3.7 | Sounds like an expert editorial choice | FAIL | `## Sections` would not survive an editorial review. `## Recommended entry points` is plausible but weak. |

**Category 3 verdict: FAIL** — 5 checks fail: 3.1, 3.2, 3.4, 3.5, 3.6, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Page is a routing/navigation page. Its single job: help an operator who has completed setup find the right advanced topic. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator navigate to advanced operational topics." Valid even though `purpose` field is wrong. |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | FAIL | `dep-guide.mdx` is NOT in docs.json (confirmed: line search returned no result). It has no PREV_PAGE or NEXT_PAGE in the navigation sequence. It is an orphan. |
| 4.4 | No dead ends | FAIL | Cards link to paths like `/v2/orchestrators/concepts/rs-workloads`, `/v2/orchestrators/operations/rc-ai-pipelines`, `/v2/orchestrators/operations/rs-rewards-and-fees`, `/v2/orchestrators/guides/x-governance`, `/v2/orchestrators/operations/x-optimise`, `/v2/orchestrators/operations/p-fleet-ops`. None of these paths appear in docs.json. All 6 card links and all 5 table links are pointing to non-existent pages — every exit from this page is a dead end. |
| 4.5 | Prerequisites stated or linked | N/A | Routing page — prerequisites not applicable. |
| 4.6 | Out-of-scope is clear | PASS | Page signals scope through card titles. |
| 4.7 | Information type per section is correct | N/A | `purpose` field is invalid; cannot map to permitted information types. `dep-` prefix and orphan status make this moot. |
| 4.8 | No content duplication from adjacent sections | N/A | Orphan page — no adjacent sections to compare. |
| 4.9 | Section orientation page present | N/A | This page IS a section routing page (or was intended to be). Given its orphan status, this check is not applicable. |
| 4.10 | Cross-tab links at journey intersections | FAIL | No cross-tab links. All links point intra-tab (orchestrators) and all are broken. |

**Category 4 verdict: FAIL** — 3 checks fail: 4.3, 4.4, 4.10

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | FAIL | `pageType: overview` is deprecated. The component-layout-decisions.mdx matrix (line 37) lists `overview` with required section: "Overview", preferred components: `Card`, `CardGroup`, `Tabs`, `Accordion`, `AccordionGroup`, `CodeGroup`, `Note`. The page uses `CardGroup` and `Card` — consistent with the old matrix. However, the canonical 7-type schema does not include `overview` as a pageType — it is a `pageVariant`. Until `pageType` is migrated, template conformance is unresolvable. |
| 5.2 | Required sections present | FAIL | For deprecated `overview` type: required section is "Overview". The page has no explicit Overview section — just an intro sentence and cards. For prospective `navigation` type: required sections are "Portal/routing" — card-based routing is present, but section structure is absent. |
| 5.3 | Only approved components used | PASS | `CardGroup`, `Card` — both appear in the `overview` preferred list. No unapproved components detected. |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, `Coming Soon`, or `PreviewCallout` present. |
| 5.5 | Information type → component mapping correct | N/A | Routing page with no substantive content sections. Card routing is appropriate. |
| 5.6 | MDX renders clean | PASS | No broken JSX, no unclosed tags, no import errors visible. Simple structure. |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: overview` is a deprecated 12-type value. `purpose: guide` is a pageType value in a purpose field. Both are old-schema. |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours or inline styles. |
| 5.9 | Generated file banners intact | PASS | Page does not appear to be a generated file — no generated-file-banner block present, which is correct for non-generated content. |
| 5.10 | Component naming/import conventions | N/A | No imports in this file. Components used (`CardGroup`, `Card`) are Mintlify built-in components, no import required. |

**Category 5 verdict: FAIL** — 3 checks fail: 5.1, 5.2, 5.7

---

## Category 6 — VERACITY

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | N/A | Page makes no factual claims — it is a routing page with navigation cards. |
| 6.2 | Code/commands tested | N/A | No code blocks or commands present. |
| 6.3 | No deprecated API usage | N/A | No API references. |
| 6.4 | Numbers are real | N/A | No numbers present. |
| 6.5 | REVIEW flags for unverified claims | PASS | No unverified claims to flag. No REVIEW flags present, correctly. |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` field is absent entirely. Required field. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary usage. |
| 6.8 | Source staleness check | N/A | No sourced information present. |

**Category 6 verdict: FAIL** — 1 check fails: 6.6

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | FAIL | CRITICAL: `v2/orchestrators/guides/advanced-operations/dep-guide` does NOT appear in docs.json. The file exists in the filesystem but is not registered in navigation. It is a structural orphan. Confirmed by full text search of docs.json — no match. |
| 7.2 | Navigation matches file system | FAIL | docs.json does not include this file. File system has it. Mismatch confirmed. |
| 7.3 | Tab entry portal routes to all sections | N/A | This check is at the section level, not applicable to an orphan page. |
| 7.4 | No structural orphans | FAIL | This page IS a structural orphan — exists in `v2/orchestrators/guides/advanced-operations/` but is not reachable from any navigation path. The `dep-` prefix convention (per checks.mdx §7.8) signals deprecated status. |
| 7.5 | Audience journey complete | FAIL | Page is unreachable from navigation — it cannot be part of any audience journey. |
| 7.6 | Cross-tab graduation paths exist | N/A | Orphan page — cannot contribute to cross-tab paths. |
| 7.7 | File in correct lane | FAIL | File is in `v2/orchestrators/guides/advanced-operations/` (publishable lane) but carries a `dep-` prefix. Per checks.mdx §7.8, `dep-` prefix convention signals deprecated status. Deprecated files should be in `x-deprecated/` subdirectory. |
| 7.8 | File naming conventions | FAIL | `dep-guide.mdx` — `dep-` prefix correctly signals deprecated status per the convention. However, the file is placed in the main `advanced-operations/` directory rather than the `x-deprecated/` subdirectory where deprecated files belong. Naming convention is applied but file is in the wrong directory. |
| 7.9 | `_workspace/` TTL compliance | N/A | File is not in `_workspace/`. |

**Category 7 verdict: FAIL** — 5 checks fail: 7.1, 7.2, 7.4, 7.5, 7.7, 7.8

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | FAIL | CRITICAL: 6 card links and 5 table path entries all point to non-existent paths. Verified against docs.json: `/v2/orchestrators/concepts/rs-workloads` — NOT in docs.json. `/v2/orchestrators/operations/rc-ai-pipelines` — NOT in docs.json. `/v2/orchestrators/operations/rs-rewards-and-fees` — NOT in docs.json. `/v2/orchestrators/guides/x-governance` — NOT in docs.json. `/v2/orchestrators/operations/x-optimise` — NOT in docs.json. `/v2/orchestrators/operations/p-fleet-ops` — NOT in docs.json. All 11 internal links are broken. |
| 8.2 | All external links live | N/A | No external links. |
| 8.3 | All snippet imports resolve | N/A | No snippet imports. |
| 8.4 | All images load | PASS | OG image path `/snippets/assets/site/og-image/en/orchestrators.png` — standard site image, presumed present. |
| 8.5 | Page renders without error | PASS | Simple structure with no complex JSX. Likely renders clean, though cards with broken hrefs will produce dead links on render. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | None present. |

**Category 8 verdict: FAIL** — 1 check fails: 8.1

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No sign-off recorded. `status: draft` confirms this is not approved. |
| 9.2 | All consuming decisions in registry | FAIL | Page depends on the IA structure for advanced-operations section. That IA is not approved (tab status: Draft only). |
| 9.3 | Gate prerequisites met | FAIL | IA not approved. Terminology not locked. No tab gate has been opened. This page is pre-gate. |
| 9.4 | Phase ordering respected | N/A | Pre-gate content. |
| 9.5 | Findings gathered before fixes | N/A | First review run. |
| 9.6 | Feedback routed | N/A | First review run. |

**Category 9 verdict: FAIL** — 3 checks fail: 9.1, 9.2, 9.3

---

## Cross-Category Connections

- **Orphan status (7.1, 7.2, 7.4, 7.5, 7.7, 7.8) + broken links (8.1) + dead ends (4.4):** These are the same root problem — this page is a deprecated routing draft whose target pages no longer exist at the linked paths. The `dep-` prefix signals this correctly. The page is not intended to ship.
- **`pageType: overview` deprecated (1.2) + `purpose: guide` invalid (1.4) + template mismatch (5.1):** All three trace to the same root: frontmatter was never updated after the 7-type schema migration.
- **Missing `veracityStatus` (6.6) + `status: draft` (1.8):** Consistent pair — draft status + absent veracityStatus is not a contradiction, but the field must still be present. Fix: add `veracityStatus: unverified`.

---

## Blocking Decisions

**BD-1:** This file carries a `dep-` prefix and all its linked targets are broken. **Decision required:** Is `dep-guide.mdx` intended to be permanently deprecated and moved to `x-deprecated/`, or does it need to be updated with the correct target paths for the current IA? The answer determines whether this file gets remediated or archived.

---

## Verdict Summary

**Overall: REWRITE REQUIRED**

The page is an orphan (not in docs.json), all 11 internal links are broken, the pageType is deprecated, the purpose field contains a pageType value, and 6 of 10 required fields are missing or invalid. The `dep-` prefix correctly signals deprecation intent.

**27 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.4, 3.5, 3.6, 3.7, 4.3, 4.4, 4.10, 5.1, 5.2, 5.7, 6.6, 7.1, 7.2, 7.4, 7.5, 7.7, 7.8, 8.1, 9.1, 9.2, 9.3**

_(32 total checks fail when BD-1 is unresolved — listed for completeness.)_

---

## Prioritised Fix List

**F-01 — CRITICAL — Orphan/deprecation resolution (BD-1 — requires human decision)**
This page is not in docs.json and all its link targets are broken. It has a `dep-` prefix indicating deprecated status. Options:
- If [Option A — permanently deprecated]: Move to `v2/orchestrators/guides/advanced-operations/x-deprecated/dep-guide.mdx`. No further remediation needed.
- If [Option B — revive as navigation page]: Re-register in docs.json, replace all broken card and table links with current docs.json paths, migrate frontmatter to 7-type schema.
No other fixes are worth executing until BD-1 is resolved.

**F-02 — CRITICAL — All 11 internal links broken**
Every card and table link points to a non-existent path. If Option B (revive): replace all links with verified docs.json paths. Replacement targets must be confirmed against docs.json before applying.

**F-03 — HIGH — `pageType` deprecated; `purpose` wrong field**
`pageType: overview` → migrate to `pageType: navigation` (for a routing page) per Frameworks.mdx §1.1 migration table. `purpose: guide` → replace with `purpose: orient`. As part of this co-fix (P42), add `pageVariant` only if required by the chosen pageType — `navigation` has no required variant.
Proposed: `pageType: navigation` — confirm before applying.
Proposed: `purpose: orient` — confirm before applying.

**F-04 — HIGH — Missing required fields: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`**
Add all five:
Proposed: `complexity: intermediate` — confirm before applying.
Proposed: `lifecycleStage: operate` — confirm before applying.
Proposed: `veracityStatus: unverified` — confirm before applying.
Proposed: `industry: [technical]` — confirm before applying.
Proposed: `niche: [infrastructure, protocol]` — confirm before applying.

**F-05 — HIGH — `## Sections` heading scores 11/25**
Rename to a concept-anchored heading. Proposed fix: `## Advanced Topics` — scores stronger on Precision (3), Depth (3), Stability (4), Clarity (4), Conciseness (5) = 19/25. Or drop the heading entirely for a `navigation` pageType page where cards self-explain.

**F-06 — MEDIUM — `## Recommended entry points` heading scores 14/25**
Rename. Proposed fix: `## Where to Start` is banned-tier (equivalent to "Getting Started"). Proposed fix: `## Entry Points by Goal` — scores Precision (3), Depth (3), Stability (4), Clarity (4), Conciseness (3) = 17/25. Alternative: drop the table entirely and merge its content into the cards.

**F-07 — MEDIUM — `description` field self-referential opener**
"Overview of advanced orchestrator operations…" — restructure to lead with the reader outcome.
Proposed: `Advanced Operations covers AI pipeline setup, earnings optimisation, governance participation, monitoring, and fleet-scale operations for orchestrators past the default setup path.` (175 chars — over limit; trim: `AI pipeline setup, earnings optimisation, governance, monitoring, and fleet-scale operations for orchestrators past the default setup path.` — 138 chars.) — confirm before applying.

**F-08 — MEDIUM — `keywords` too generic**
Replace all 7 keywords with specific searcher-intent terms. Proposed: `livepeer multi-orchestrator setup`, `orchestrator fleet operations`, `ai pipeline orchestrator livepeer`, `orchestrator governance livepeer`, `livepeer earnings optimisation orchestrator` — confirm before applying.
