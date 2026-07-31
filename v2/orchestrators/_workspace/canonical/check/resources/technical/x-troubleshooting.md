# Per-Page Quality Check Report
## `v2/orchestrators/resources/technical/x-troubleshooting.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (lines 2974–2981 — NOT IN NAV)
**Learnings applied:** P1–P90

---

## Pre-Check: File Integrity

Read lines 1–10: frontmatter opens immediately at line 1 with `---`. No content appears before the opening delimiter. No corrupt prefix detected.

Body is entirely empty — two blank lines after the closing `---` at line 14, no content.

**x-prefix note:** `x-troubleshooting.mdx` is `x-` prefixed and not present in docs.json. The Orchestrators Technical Reference group (lines 2974–2981) contains only `cli-flags` and `x-contract-addresses`. This file is a nav orphan. `x-` prefix convention is correct for deprecated/archived content. All 7.x checks that depend on nav position are N/A.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Troubleshooting` | PASS | 1 word, concept-derived |
| `sidebarTitle` | Yes | `Troubleshooting` | PASS | Matches title |
| `description` | Yes | `Description of troubleshooting` | FAIL | Placeholder. Self-referential: `Description of [topic]` echoes the concept without content. Violates check 1.11 subject-first rule |
| `pageType` | Yes | `landing` | FAIL | Deprecated pageType (P87 does not apply — `landing` has a migration path unlike `overview`). Migration: `pageType: instruction` + `pageVariant: troubleshooting` (co-fix per P42) — confirm before applying |
| `audience` | Yes | `developer` | BORDERLINE | Schema-valid. In Orchestrators tab, `orchestrator` is more appropriate. Editorial question — not a schema failure |
| `purpose` | Yes | `landing` | FAIL | Not in 15-value canonical set (P37c: invalid value). Proposed: `purpose: troubleshoot` — confirm before applying |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | `livepeer`, `keyword` | FAIL | Placeholders — not searcher-intent aligned. `keyword` is a non-term |
| OG image block | Partial | `og:image` only | FAIL | Only `og:image` field present; missing `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`. SVG used instead of PNG social preview |
| `veracityStatus` | No | — | FAIL | Required field absent |
| `industry` | No | — | FAIL | Required field absent (P41) |
| `niche` | No | — | FAIL | Required field absent (P41) |

**Additional fields present:** `status: draft`, `lastVerified: 2026-03-11`

**Required field count:** 5/10 present from the 10-field schema (`title`, `sidebarTitle`, `description`, `pageType`, `audience`, `purpose`, `keywords` present as fields — but `description`, `pageType`, `purpose`, `keywords` all FAIL on value quality; OG block partial; `complexity`, `lifecycleStage`, `veracityStatus` absent)
**Additional required fields missing:** `industry`, `niche` (P41 — confirmed required)

**Note on P39:** `status: draft` with absent `veracityStatus` is NOT a P39 violation. P39 governs `status: current` + wrong/absent `veracityStatus`. The fix is simply: add `veracityStatus: unverified`.

**Note on P57:** `status: draft` is canonical — no wrong-enum error. P90 (`status: published`) does not apply.

**Frontmatter Table / check table cross-check (P66):** All fields marked FAIL in the Frontmatter Table also FAIL in the check table. PASS and BORDERLINE fields match.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`. OG block incomplete (1/5 fields only) |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `landing` is a deprecated value. Migration: `pageType: instruction` + `pageVariant: troubleshooting` (co-fix per P42) — confirm before applying |
| 1.3 | `pageVariant` valid if present | N/A (co-fix) | Co-fix dependency with 1.2 per P42 — not an independent finding |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `landing` not in the 15-value set (error type: invalid value per P37c). Proposed: `purpose: troubleshoot` — confirm before applying |
| 1.5 | `audience` uses 7-token set | BORDERLINE | `developer` is schema-valid. In Orchestrators tab `orchestrator` is the expected audience token — editorial question, not schema failure |
| 1.6 | `complexity` single canonical value | FAIL | Absent. Proposed: `complexity: intermediate` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Absent. Proposed: `lifecycleStage: troubleshoot` — confirm before applying (pending BD-2 IA placement decision) |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. `status: draft` is canonical. Fix: add `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Absent (P41 — required). Proposed: `industry: [technical, livepeer]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent (P41 — required). Proposed: `niche: [infrastructure, protocol]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | `Description of troubleshooting` — placeholder, self-referential, no subject content. Proposed: `Diagnostic steps and fixes for common orchestrator node errors and failures.` — confirm before applying (70 chars, subject-first, UK English) |
| 1.12 | OG image block complete | FAIL | Only `og:image` present; missing `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`. SVG path used — not a social preview PNG |
| 1.13 | `keywords` quality | FAIL | `livepeer`, `keyword` — placeholders. `keyword` is not a search term. Proposed: `livepeer orchestrator troubleshooting`, `go-livepeer error fixes`, `orchestrator node not working`, `livepeer node diagnostics` — confirm before applying |

**Category 1 verdict: FAIL**
Confirmed fail checks: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13

---

## Category 2 — VOICE & COPY

Body is empty. Checks that require body prose are N/A. Description is a placeholder.

### Banned Construction Scan (P62, P69, P74)

Three explicit scan targets per P74:

**Target 1: description field**
`Description of troubleshooting` — `Description of [topic]` is a self-referential `This page [verb]` equivalent construction per check 2.4 (P56).

**Target 2: H2/H3 heading text**
No H2 or H3 headings present.

**Target 3: body prose**
Empty — nothing to scan.

| Target | Text | Pattern | Classification | Flag? |
|---|---|---|---|---|
| Description | `Description of troubleshooting` | `Description of [topic]` — self-referential `This page [verb]` equivalent | FAIL 2.4 | Yes |
| Body | (empty) | — | — | — |

**Em-dash scan (P74):**
- Description field: no em-dashes found
- Headings: none present
- Body: empty

Check 2.4: FAIL (description line — `Description of [topic]` self-referential construction). Em-dashes: none detected — tracked under P30, none to reference.

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | N/A | No prose content |
| 2.2 | Zero banned words | N/A | No prose content |
| 2.3 | Zero banned phrases | N/A | No prose content — `Description of [topic]` belongs in 2.4 (P56), not 2.3 |
| 2.4 | Zero banned constructions | FAIL | Description: `Description of troubleshooting` — self-referential `This page [verb]` equivalent per P56 |
| 2.5 | Opening order correct | N/A | No opening content |
| 2.6 | Paragraph discipline | N/A | No prose |
| 2.7 | Audience register correct | N/A | No content |
| 2.8 | Per-audience prohibited phrases absent | N/A | No content |
| 2.9 | No passive value statements | N/A | No content |
| 2.10 | No hedging openers | N/A | No content |
| 2.11 | Terminology locked and consistent | N/A | No content |

**Category 2 verdict: FAIL**
Confirmed fail checks: 2.4

---

## Category 3 — SECTION NAMING & HEADINGS

### Heading Score Table

No H2 or H3 headings present — score table is empty. Per P85: check 3.1 is ONE check ID.

Per P16: `Related Pages` exemption not relevant (no headings at all).

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading ≥20/25 | N/A | No H2/H3 headings present |
| 3.2 | No banned/weak heading terms | N/A | No headings |
| 3.3 | No literal contrast labels | N/A | No headings |
| 3.4 | Domain-anchor rule | N/A | No headings |
| 3.5 | Heading names concept, not examples | N/A | No headings |
| 3.6 | Title well-formed | PASS | `Troubleshooting` — 1 word, concept-derived, no banned forms. Acceptable as a dedicated page title for this page type |
| 3.7 | Sounds like expert editorial choice | PASS | `Troubleshooting` is a clear, expert editorial choice for this page type |

**Category 3 verdict: PASS**

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one job | FAIL | Empty page — cannot validate purpose or audience job |
| 4.2 | Purpose statement test | FAIL | Cannot write a purpose statement for an empty page |
| 4.3 | PREV_PAGE/NEXT_PAGE adjacency | N/A | Not in docs.json nav |
| 4.4 | No dead ends | FAIL | Empty page — dead end with no next step |
| 4.5 | Prerequisites stated or linked | N/A | Empty page |
| 4.6 | Out-of-scope clear | N/A | Empty page |
| 4.7 | Information type per section | N/A | Empty page |
| 4.8 | No content duplication from adjacent sections | N/A | Empty page |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: FAIL**
Confirmed fail checks: 4.1, 4.2, 4.4

---

## Category 5 — LAYOUT & COMPONENTS

Component approval: `docs-guide/policies/component-layout-decisions.mdx` not read at batch start. No custom components present — component checks that require the approval file are N/A.

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | FAIL | `pageType: landing` is deprecated — no correct template applies. After migration to `instruction` + `troubleshooting` variant, template would require Prerequisites and Steps |
| 5.2 | Required sections present | FAIL | For `instruction` + `troubleshooting` variant: Prerequisites and Steps required. Body is empty |
| 5.3 | Only approved components used | N/A | No components |
| 5.4 | Avoided components absent | PASS | No TODO/TBD rendered in body (P78 — MDX comments if present are not rendered). No components at all |
| 5.5 | Information type → component mapping | N/A | No content |
| 5.6 | MDX renders clean | NOT-TESTED | Render not executed; no visible JSX errors |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: landing` and `purpose: landing` are both deprecated/invalid schema values |
| 5.8 | CSS custom properties only | N/A | No CSS |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | N/A | No imports |

**Category 5 verdict: FAIL**
Confirmed fail checks: 5.1, 5.2, 5.7
NOT-TESTED: 5.6

---

## Category 6 — VERACITY

No content to verify. No internal or external links.

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | N/A | No content |
| 6.2 | Code/commands tested | N/A | No code |
| 6.3 | No deprecated API usage | N/A | No API references |
| 6.4 | Numbers are real | N/A | No numbers |
| 6.5 | REVIEW flags for unverified claims | N/A | No claims; no non-standard comment formats found |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent — same root as check 1.8 (cross-referenced to F-08; per P13 logged once) |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary usage |
| 6.8 | Source staleness check | N/A | No sourced content |
| 6.9 | No open-ended research tasks | N/A | No content |

**Category 6 verdict: FAIL**
Confirmed fail checks: 6.6 (shares root with 1.8 — cross-referenced to F-08)

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
| 7.8 | File naming conventions | PASS | `x-troubleshooting.mdx` — lowercase, hyphenated, `x-` prefix correct |
| 7.9 | `_workspace/` TTL compliance | N/A | Not in `_workspace/` |

**Category 7 verdict: PASS**

**IA note (INFO):** If this file is ever activated, placement in Technical Reference may be inappropriate. Troubleshooting content typically belongs in a Guides section or a dedicated troubleshooting section, not a Technical Reference group. This is a future BD item only — not a current FAIL.

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | N/A | No links in body |
| 8.2 | All external links live | N/A | No external links |
| 8.3 | All snippet imports resolve | N/A | No imports |
| 8.4 | All images load | FAIL | OG image: `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` — SVG file, not a social preview PNG. This is the same issue as `x-contract-addresses.mdx`. Social preview images require PNG format |
| 8.5 | Page renders without error | NOT-TESTED | Render not executed; no visible JSX errors |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | No placeholder text in body |

**Category 8 verdict: FAIL**
Confirmed fail checks: 8.4
NOT-TESTED: 8.5

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No sign-off — empty draft placeholder, never reviewed |
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

**C1: Empty content stub (checks 4.1, 4.2, 4.4, 5.1, 5.2)** — all five trace to the same root: body is empty. Structural checks cannot be validated until content exists. Activate or archive decision (BD-1) gates all content checks. Traced to F-01.

**C2: Deprecated pageType + purpose pair (checks 1.2, 1.4, 5.7)** — `pageType: landing` + `purpose: landing` is one root-cause fix. Migration: `pageType: instruction` + `pageVariant: troubleshooting`; `purpose: troubleshoot`. Co-fix per P42. Traced to F-02, F-03.

**C3: SVG OG image (checks 1.12, 8.4)** — same root: OG block uses SVG path instead of PNG social preview, and is incomplete. One fix resolves both. Traced to F-05. Note: same pattern as `x-contract-addresses.mdx` in this batch.

**C4: Missing required fields (checks 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 6.6, 9.1)** — all missing-field adds. 6.6 shares root with 1.8 — logged once (F-08). 9.1 requires human action.

**C5: Description placeholder (checks 1.11, 2.4)** — `Description of troubleshooting` fails check 1.11 (subject-first) and check 2.4 (self-referential banned construction). One root fix. Traced to F-04.

---

## Blocking Decisions

**BD-1: Activate or confirm permanently archived**
- Option A: Activate — write troubleshooting content, migrate taxonomy, decide IA placement (BD-2), add to docs.json
- Option B: Confirm permanently archived — retain `x-` prefix, no further action
- Downstream: All category FAILs except frontmatter fields are conditional on this decision. If Option B, no remediation needed beyond BD-1 resolution.

**BD-2: IA placement if activated**
- Option A: Keep in Technical Reference subgroup under Resources
- Option B: Move to a dedicated section in Guides (more structurally appropriate for `instruction` + `troubleshooting` pageType content)
- Downstream: docs.json nav entry and `lifecycleStage` value depend on this decision

---

## Verdict Summary

**Total FAIL count: 20**
**FAIL check IDs:** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 4.1, 4.2, 4.4, 5.1, 5.2, 5.7, 8.4, 9.1

Count verification: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13 = 11; 2.4 = 1; 4.1, 4.2, 4.4 = 3; 5.1, 5.2, 5.7 = 3; 8.4 = 1; 9.1 = 1. Total = 20. 6.6 shares root with 1.8 (logged once per P13) — not double-counted.

**PASS count:** 1.5 (BORDERLINE), 3.6, 3.7, 5.4, 7.7, 7.8, 8.6 (among checks not N/A)
**BORDERLINE count:** 1.5
**NOT-TESTED count:** 5.6, 8.5, 9.5

---

## Fix List

All fixes are conditional on BD-1 Option A (activate). If BD-1 = Option B (archive), no fixes needed.

| ID | Severity | Check(s) | Fix |
|---|---|---|---|
| F-01 | CRITICAL | 4.1, 4.2, 4.4 | Write troubleshooting content — page is an empty stub. No structural or content checks can pass until body content exists |
| F-02 | HIGH | 1.2, 1.3, 5.7 | Migrate deprecated `pageType: landing` to `pageType: instruction` + add `pageVariant: troubleshooting` (co-fix per P42) — confirm before applying |
| F-03 | HIGH | 1.4 | Change `purpose: landing` to `purpose: troubleshoot` — confirm before applying |
| F-04 | HIGH | 1.11, 2.4 | Replace description `Description of troubleshooting` with: `Diagnostic steps and fixes for common orchestrator node errors and failures.` — confirm before applying (70 chars, subject-first, UK English, no self-reference) |
| F-05 | HIGH | 1.12, 8.4 | Complete OG block: change OG image from SVG to PNG social preview (`/snippets/assets/site/og-image/en/orchestrators.png`); add `og:image:alt: Livepeer Docs social preview image for Orchestrators`, `og:image:type: image/png`, `og:image:width: 1200`, `og:image:height: 630` |
| F-06 | HIGH | 1.9 | Add `industry: [technical, livepeer]` — confirm before applying |
| F-07 | HIGH | 1.10 | Add `niche: [infrastructure, protocol]` — confirm before applying |
| F-08 | HIGH | 1.8, 6.6 | Add `veracityStatus: unverified` to frontmatter (atomic fix — `status` is already `draft`, no P39 incoherence) |
| F-09 | MEDIUM | 1.6 | Add `complexity: intermediate` — confirm before applying |
| F-10 | MEDIUM | 1.7 | Add `lifecycleStage: troubleshoot` — confirm before applying (pending BD-2 resolution) |
| F-11 | MEDIUM | 1.13 | Replace placeholder keywords with: `livepeer orchestrator troubleshooting`, `go-livepeer error fixes`, `orchestrator node not working`, `livepeer node diagnostics` — confirm before applying |
| F-12 | MEDIUM | 1.5 | BORDERLINE — confirm whether `audience: developer` or `audience: orchestrator` is correct for this page in the Orchestrators tab |
| F-13 | INFO | 7.3, 9.3 | Resolve BD-2 before adding to docs.json: confirm IA placement in Technical Reference vs Guides section |
| F-14 | INFO | 9.1 | Page requires human sign-off before status can move beyond draft placeholder |
