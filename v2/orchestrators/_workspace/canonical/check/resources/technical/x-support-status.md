# Per-Page Quality Check Report
## `v2/orchestrators/resources/technical/x-support-status.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (lines 2974–2981 — NOT IN NAV)
**Learnings applied:** P1–P90

---

## Pre-Check: File Integrity

Read lines 1–10: frontmatter opens immediately at line 1 with `---`. No content appears before the opening delimiter. No corrupt prefix detected.

**x-prefix note:** `x-support-status.mdx` is `x-` prefixed and not present in docs.json. The Orchestrators Technical Reference group (lines 2974–2981) contains only `cli-flags` and `x-contract-addresses`. This file is a nav orphan. `x-` prefix convention is correct. All 7.x checks that depend on nav position are N/A.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Support Status` | PASS | 2 words, concept-derived |
| `sidebarTitle` | Yes | `Support Status` | PASS | Matches title |
| `description` | Yes | `Planned status page clarifying what is supported, experimental, deprecated, or still consolidating in orchestrator docs.` | FAIL | Opens with `Planned` (process status word, not subject). Violates check 1.11 subject-first rule |
| `pageType` | Yes | `guide` | PASS | Canonical 7-type value (P50) |
| `audience` | Yes | `orchestrator` | PASS | Canonical 7-token value; correct for Orchestrators tab |
| `purpose` | Yes | `operations` | FAIL | Not in 15-value canonical set. Invalid value (P37c). Proposed: `purpose: operate` — confirm before applying |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | `livepeer`, `orchestrator`, `support status`, `experimental`, `deprecated`, `supported` | PASS | `support status`, `experimental`, `deprecated`, `supported` are searcher-intent aligned |
| OG image block | Yes | All 5 fields present | PASS | Uses orchestrators PNG social preview |
| `veracityStatus` | No | — | FAIL | Required field absent |
| `industry` | No | — | FAIL | Required field absent (P41) |
| `niche` | No | — | FAIL | Required field absent (P41) |

**Additional fields present:** `status: draft`, `lastVerified: 2026-03-12`

**Required field count:** 7/10 present (missing: `complexity`, `lifecycleStage`, `veracityStatus`)
**Additional required fields missing:** `industry`, `niche` (P41 — confirmed required)

**Note on P39:** `status: draft` with absent `veracityStatus` is NOT a P39 violation. P39 governs `status: current` + wrong/absent `veracityStatus`. The fix here is simply: add `veracityStatus: unverified` (check 1.8 missing field).

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is canonical |
| 1.3 | `pageVariant` valid if present | N/A | `guide` is canonical — no deprecated type migration required; co-fix dependency does not apply |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `operations` is not in the 15-value set (error type: invalid value per P37c, not a deprecated alias). Proposed: `purpose: operate` — confirm before applying |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Absent. Proposed: `complexity: beginner` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Absent. Proposed: `lifecycleStage: operate` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. `status: draft` is a canonical status value. Fix: add `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Absent (P41 — required). Proposed: `industry: [technical, livepeer]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent (P41 — required). Proposed: `niche: [protocol, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | `Planned status page clarifying what is supported, experimental, deprecated, or still consolidating in orchestrator docs.` — opens with `Planned` (process status). Fails subject-first rule. `still consolidating` is hedging language. Proposed: `Reference for which orchestrator documentation paths are supported, experimental, or deprecated.` — confirm before applying (75 chars, subject-first, no self-reference) |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` quality | PASS | `support status`, `experimental`, `deprecated`, `supported` are searcher-intent terms a target reader would search |

**Frontmatter Table / check table cross-check (P66):** All fields that FAIL in the Frontmatter Table also FAIL in the check table. PASS fields match.

**Category 1 verdict: FAIL**
Confirmed fail checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — VOICE & COPY

### UK English scan (check 2.1)

Scanning all visible text (description, headings, body prose) for US spelling patterns:

| Location | Text | Pattern | Result |
|---|---|---|---|
| Line 28 | `stabilizing` | `-ize` → UK: `stabilising` | FAIL |
| All other | — | No `-ize`, `-or`, `-er`, `color`, `behavior` etc. found | PASS |

Check 2.1: **FAIL** — Line 28: `stabilizing` → `stabilising`

### Banned words scan (check 2.2) — P24: show the work

Candidates: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`

Scan results:
- Line 23: `This placeholder will become the operator-facing status page for supported, experimental, and deprecated paths.` — none of the above
- Lines 27–30 (bullet list): no banned words
- Lines 33–37 (link list): no banned words

No banned words found.

Check 2.2: PASS

### Banned phrases scan (check 2.3) — P56

Scanning for: "This section covers", "This page covers/explains/walks you through", "rather than", "etc.", "depends on various"

- Line 23: `This placeholder will become the operator-facing status page…` — `This [noun] will [verb]` is a banned CONSTRUCTION (check 2.4, per P56), not a banned phrase (check 2.3). Check 2.3 result: PASS.
- No other banned phrases found.

Check 2.3: PASS

### Banned Construction Scan (P62, P69, P74)

Three explicit scan targets per P74:

**Target 1: description field**
`Planned status page clarifying what is supported, experimental, deprecated, or still consolidating in orchestrator docs.` — noun phrase, no banned construction pattern. Clean for 2.4.

**Target 2: H2/H3 heading text**
- `Planned scope` — no banned construction pattern
- `Recommended now` — no banned construction pattern
Clean for 2.4.

**Target 3: body prose**

| Line | Text | Pattern | Classification | Flag? |
|---|---|---|---|---|
| 23 | `This placeholder will become the operator-facing status page for supported, experimental, and deprecated paths.` | `This [noun] will [verb]` — banned construction per check 2.4 (P56) | FAIL 2.4 | Yes |
| 27–30 | Bullet list items | No patterns | Clean | No |
| 33–37 | Link list items | No patterns | Clean | No |

**Em-dash scan (P74 — three targets):**
- Description field: no em-dashes found
- H2/H3 headings: no em-dashes found
- Body prose: no em-dashes found

Em-dashes: none detected. Check 2.4 result is PASS for em-dashes alone per P62. Em-dashes tracked under P30 — none to reference.

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | FAIL | Line 28: `stabilizing` → `stabilising` |
| 2.2 | Zero banned words | PASS | Full scan: no banned words found |
| 2.3 | Zero banned phrases | PASS | `This [noun] will [verb]` belongs in 2.4, not 2.3 (P56) |
| 2.4 | Zero banned constructions | FAIL | Line 23: `This placeholder will become the operator-facing status page…` — `This [noun] will [verb]` pattern |
| 2.5 | Opening order correct | FAIL | Page opens with process commentary (`This placeholder will become…`), not content |
| 2.6 | Paragraph discipline | PASS | Limited prose; bullet format is clean |
| 2.7 | Audience register correct | PASS | Operator-facing language appropriate for `orchestrator` audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No prohibited orchestrator-audience phrases found |
| 2.9 | No passive value statements | N/A | No value claims present |
| 2.10 | No hedging openers | FAIL | Same root as 2.4/2.5 — `This placeholder will become…` is a hedging/deferral opener |
| 2.11 | Terminology locked and consistent | PASS | `experimental`, `deprecated`, `dep-` paths are consistent with docs conventions |

**Category 2 verdict: FAIL**
Confirmed fail checks: 2.1, 2.4, 2.5, 2.10

---

## Category 3 — SECTION NAMING & HEADINGS

### Heading Score Table

Per P16: `Related Pages` heading is fully exempt. Not present here. Per P85: check 3.1 is ONE check ID regardless of how many headings fail.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass/Fail |
|---|---|---|---|---|---|---|---|
| `Planned scope` | 1 | 1 | 2 | 2 | 4 | 10/25 | FAIL |
| `Recommended now` | 2 | 2 | 2 | 3 | 4 | 13/25 | FAIL |

**Scoring rationale:**

`Planned scope` (10/25): Precision=1 — `scope` names a meta-concept, not the page concept (scope of what?); Depth=1 — signals process stage, not intellectual level of content; Stability=2 — breaks if the `Planned` status changes; Clarity=2 — cannot be understood in isolation; Conciseness=4 — minimal words but all words are low-signal.

`Recommended now` (13/25): Precision=2 — implies recommendation but names urgency, not concept; Depth=2 — surface label; Stability=2 — `now` creates temporal instability; Clarity=3 — implies links to follow but topic unclear; Conciseness=4 — short but low-signal.

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading ≥20/25 | FAIL | `Planned scope` 10/25; `Recommended now` 13/25. Both headings fail |
| 3.2 | No banned/weak heading terms | PASS | No Banned-tier terms (`Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`). No Avoid-tier standalone terms. `scope` as a noun in a compound is not standalone Avoid-tier |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule | FAIL | `Planned scope` is not interpretable in isolation — scope of what? Domain noun absent |
| 3.5 | Heading names concept, not examples | FAIL | Neither heading names a concept. `Planned scope` names page meta-status. `Recommended now` names urgency |
| 3.6 | Title well-formed | PASS | `Support Status` — 2 words, concept-derived, no banned forms |
| 3.7 | Sounds like expert editorial choice | FAIL | Neither heading would be chosen by a senior technical editor. Both read as scaffolding placeholders |

**Category 3 verdict: FAIL**
Confirmed fail checks: 3.1, 3.4, 3.5, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one job | BORDERLINE | Intent is clear (operator-facing status reference) but content is incomplete draft — cannot fully validate |
| 4.2 | Purpose statement test | BORDERLINE | "This page lets the orchestrator determine which documentation paths are current vs deprecated." Structurally passes but content is not yet built |
| 4.3 | PREV_PAGE/NEXT_PAGE adjacency | N/A | Not in docs.json nav |
| 4.4 | No dead ends | PASS | `## Recommended now` provides 4 internal links verified as valid |
| 4.5 | Prerequisites stated or linked | N/A | Reference/status page — no prerequisites expected |
| 4.6 | Out-of-scope clear | PASS | `## Planned scope` bullets define coverage boundaries |
| 4.7 | Information type per section | PASS | `guide` with navigational list content is structurally appropriate |
| 4.8 | No content duplication from adjacent sections | NOT-TESTED | Would require reading adjacent pages in the section |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: BORDERLINE** (BORDERLINE 4.1, 4.2; NOT-TESTED 4.8 — not counted as FAIL per P59/P60)

---

## Category 5 — LAYOUT & COMPONENTS

Component approval: `docs-guide/policies/component-layout-decisions.mdx` not read at batch start. No custom components present — component checks are N/A for this page.

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | `guide` — H2 sections without prescribed required sections beyond Overview + H2 |
| 5.2 | Required sections present | BORDERLINE | `guide` requires Overview + H2 sections. H2s present but content is placeholder |
| 5.3 | Only approved components used | PASS | Plain MDX; no custom components |
| 5.4 | Avoided components absent | PASS | No TODO/TBD rendered blocks. No MDX comments flagged (P78) |
| 5.5 | Information type → component mapping | PASS | Bulleted list for navigational reference — appropriate for `guide` |
| 5.6 | MDX renders clean | NOT-TESTED | Render not executed; no visible JSX errors in file |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: operations` is not a canonical value (not a deprecated alias — an invalid value per P37c, also caught in check 1.4) |
| 5.8 | CSS custom properties only | N/A | No CSS present |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | N/A | No imports |

**Category 5 verdict: FAIL**
Confirmed fail checks: 5.7
NOT-TESTED: 5.6

---

## Category 6 — VERACITY

Internal links in `## Recommended now` verified against docs.json (P33 — full path confirmed):
- `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — docs.json line 2898: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` — docs.json line 2901: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` — docs.json line 2899: CONFIRMED
- `/v2/orchestrators/resources/faq` — docs.json line 2969: CONFIRMED

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | PASS | No protocol-state claims in placeholder body |
| 6.2 | Code/commands tested | N/A | No code blocks |
| 6.3 | No deprecated API usage | N/A | No API references |
| 6.4 | Numbers are real | N/A | No numbers |
| 6.5 | REVIEW flags for unverified claims | PASS | No unverified claims requiring REVIEW markers; no non-standard comment formats found |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent — same root as check 1.8 (cross-referenced to F-06) |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary usage |
| 6.8 | Source staleness check | N/A | No fast-changing sourced content |
| 6.9 | No open-ended research tasks | PASS | No open-ended research items |

**Category 6 verdict: FAIL**
Confirmed fail checks: 6.6 (shares root with 1.8 — cross-referenced to F-06; per P13 logged once)

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | INFO | Not in docs.json — expected for `x-` prefixed file. Not a FAIL |
| 7.2 | Navigation matches file system | N/A | Not in nav |
| 7.3 | Tab entry portal routes to all sections | N/A | Not in nav |
| 7.4 | No structural orphans | INFO | `x-` prefix orphan — by convention, not a FAIL |
| 7.5 | Audience journey complete | N/A | Not in nav |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | `x-` prefix, not in nav — correct deprecated/archived convention |
| 7.8 | File naming conventions | PASS | Lowercase, hyphenated, `x-` prefix correct |
| 7.9 | `_workspace/` TTL compliance | N/A | Not in `_workspace/` |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 4 links in `## Recommended now` confirmed in docs.json (see Category 6) |
| 8.2 | All external links live | N/A | No external links |
| 8.3 | All snippet imports resolve | N/A | No snippet imports |
| 8.4 | All images load | PASS | OG image `/snippets/assets/site/og-image/en/orchestrators.png` — standard PNG social preview |
| 8.5 | Page renders without error | NOT-TESTED | No visible JSX errors; render not executed |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | No placeholder markers in body text |

**Category 8 verdict: PASS**
NOT-TESTED: 8.5

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No sign-off — draft placeholder, not reviewed by human |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions consumed |
| 9.3 | Gate prerequisites met | INFO | `x-` prefixed pages are not subject to standard gate sequencing |
| 9.4 | Phase ordering respected | N/A | Not in active pipeline |
| 9.5 | Findings gathered before fixes | NOT-TESTED | No prior review history visible |
| 9.6 | Feedback routed | N/A | No prior review |

**Category 9 verdict: FAIL**
Confirmed fail checks: 9.1
NOT-TESTED: 9.5

---

## Cross-Category Connections

**C1: Process-language opener (lines 2.4, 2.5, 2.10)** — checks 2.4, 2.5, 2.10 share root: line 23 `This placeholder will become…`. Single fix: delete line 23. Page should open directly with content. Traced to F-01.

**C2: Description and heading quality (checks 1.11, 3.1, 3.4, 3.5, 3.7)** — all trace to the same root: scaffolding-language was used for description and headings rather than content-derived language. Traced to F-03, F-07, F-08.

**C3: Missing required fields (checks 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6)** — all missing-field adds with no content dependency. 6.6 shares root with 1.8 — logged once (F-06 per P13).

**C4: Invalid purpose (checks 1.4, 5.7)** — `purpose: operations` fails both the taxonomy check (1.4) and old-schema check (5.7). Single root fix: change to `purpose: operate`. Traced to F-02.

---

## Verdict Summary

**Total FAIL count: 18**
**FAIL check IDs:** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.1, 2.4, 2.5, 2.10, 3.1, 3.4, 3.5, 3.7, 5.7, 9.1

Count: 8 (cat 1) + 4 (cat 2) + 4 (cat 3) + 1 (cat 5) + 1 (cat 9) = 18. 6.6 shares root with 1.8 — logged once per P13, not separately counted.
**PASS count:** 1.2, 1.3 (N/A), 1.5, 1.12, 1.13, 2.2, 2.3, 2.6, 2.7, 2.8, 2.11, 3.2, 3.3, 3.6, 4.4, 4.6, 4.7, 5.1, 5.3, 5.4, 5.5, 6.1, 6.5, 6.9, 7.7, 7.8, 8.1, 8.4, 8.6
**BORDERLINE count:** 3.2 (borderline note), 4.1, 4.2, 5.2
**NOT-TESTED count:** 4.8, 5.6, 8.5, 9.5

---

## Fix List

| ID | Severity | Check(s) | Fix |
|---|---|---|---|
| F-01 | HIGH | 2.4, 2.5, 2.10 | Delete line 23: `This placeholder will become the operator-facing status page for supported, experimental, and deprecated paths.` Page opens directly with content |
| F-02 | HIGH | 1.4, 5.7 | Change `purpose: operations` to `purpose: operate` — confirm before applying |
| F-03 | HIGH | 1.11 | Replace description with: `Reference for which orchestrator documentation paths are supported, experimental, or deprecated.` — confirm before applying (75 chars, subject-first, UK English, no self-reference) |
| F-04 | HIGH | 1.9 | Add `industry: [technical, livepeer]` — confirm before applying |
| F-05 | HIGH | 1.10 | Add `niche: [protocol, infrastructure]` — confirm before applying |
| F-06 | HIGH | 1.8, 6.6 | Add `veracityStatus: unverified` to frontmatter (atomic fix — `status` is already `draft`, no P39 incoherence issue) |
| F-07 | MEDIUM | 3.1, 3.4 | Rename `## Planned scope` to a domain-anchored concept heading. Proposed: `## Coverage` — confirm before applying. (Note: `Coverage` is not in the banned or avoid tier. It names the concept directly.) |
| F-08 | MEDIUM | 3.1, 3.5, 3.7 | Rename `## Recommended now` to a concept-derived heading. Proposed: `## Current Canonical Pages` — confirm before applying |
| F-09 | MEDIUM | 2.1 | Line 28: change `stabilizing` to `stabilising` |
| F-10 | MEDIUM | 1.6 | Add `complexity: beginner` — confirm before applying |
| F-11 | MEDIUM | 1.7 | Add `lifecycleStage: operate` — confirm before applying |
| F-12 | MEDIUM | 1.1, 9.1 | Page requires human sign-off before status can move beyond draft placeholder |
