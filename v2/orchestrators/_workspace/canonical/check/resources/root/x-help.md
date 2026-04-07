# Per-Page Quality Check Report
## `v2/orchestrators/resources/x-help.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` — NOT IN NAV. Orchestrators/resources entries confirmed at lines 2968–2987; `v2/orchestrators/resources/x-help` absent.
**Learnings applied:** P1–P90
**Component approval:** Read `docs-guide/policies/component-layout-decisions.mdx` at batch start.

---

## Pre-Check: File Integrity

Lines 1–10:
```
---
title: 'X-help'
sidebarTitle: X-help
description: 'Describe x-help'
audience: developer
pageType: landing
purpose: landing
status: draft
keywords:
  - livepeer
```

No content appears before the opening `---` frontmatter delimiter. No corrupt prefix detected.

Full file content (lines 1–19):
```
---
title: 'X-help'
sidebarTitle: X-help
description: 'Describe x-help'
audience: developer
pageType: landing
purpose: landing
status: draft
keywords:
  - livepeer
  - keyword
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
---
[blank lines]
```

Page body is entirely empty — no content after the frontmatter closing `---`.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `X-help` | FAIL | Placeholder title; uses the filename convention, not a real page title |
| `sidebarTitle` | Yes | `X-help` | FAIL | Placeholder; matches title verbatim |
| `description` | Yes | `Describe x-help` | FAIL | Placeholder description; not a real description. Also: wrong audience token in `audience` field noted separately |
| `pageType` | Yes | `landing` | FAIL | Deprecated 12-type value. `landing` is not in the 7-type canonical schema. Check 1.2. |
| `audience` | Yes | `developer` | FAIL | Wrong audience token for this section. Orchestrators resources pages should use `orchestrator` audience token. `developer` is a valid token but mismatched for this section. INFO-level editorial note — schema-valid. (P67: schema compliance only in Frontmatter Table pass/fail column.) Actually `developer` IS a valid token — PASS for schema. FAIL for editorial mismatch noted in check table. |
| `purpose` | Yes | `landing` | FAIL | `landing` is not in the 15-value canonical set for `purpose`. Not a valid `purpose` value. |
| `complexity` | No | absent | FAIL | Required field missing |
| `lifecycleStage` | No | absent | FAIL | Required field missing |
| `keywords` | Yes | `[livepeer, keyword]` | FAIL | Present but placeholder quality. `keyword` is a literal placeholder, not a real keyword. Check 1.13 |
| OG image block | Yes | fallback.png | FAIL | Present (5 fields). Using generic fallback rather than section-specific image — PASS for completeness, but note fallback used. |
| `industry` | No | absent | FAIL | Required field (P41) |
| `niche` | No | absent | FAIL | Required field (P41) |
| `veracityStatus` | No | absent | FAIL | Required per checks.mdx §1.8 |
| `status` | Yes | `draft` | PASS | Valid enum value |

**Correction on `audience` Frontmatter Table entry:** `developer` is a valid 7-token value — PASS for schema compliance per P67. The editorial mismatch (wrong audience for orchestrators resources) belongs in the check table as INFO, not a Frontmatter Table FAIL.

**Corrected Frontmatter Table:**

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `X-help` | FAIL | Placeholder value |
| `sidebarTitle` | Yes | `X-help` | FAIL | Placeholder value |
| `description` | Yes | `Describe x-help` | FAIL | Placeholder value |
| `pageType` | Yes | `landing` | FAIL | Deprecated 12-type value; not in 7-type canonical schema |
| `audience` | Yes | `developer` | PASS | Valid 7-token value (editorial mismatch noted in check table as INFO) |
| `purpose` | Yes | `landing` | FAIL | Not in 15-value canonical set |
| `complexity` | No | absent | FAIL | Required field missing |
| `lifecycleStage` | No | absent | FAIL | Required field missing |
| `keywords` | Yes | `[livepeer, keyword]` | FAIL | Placeholder quality — `keyword` is a literal placeholder |
| OG image block | Yes | 5 fields present | PASS | Complete; fallback image used |
| `industry` | No | absent | FAIL | Required field (P41) |
| `niche` | No | absent | FAIL | Required field (P41) |
| `veracityStatus` | No | absent | FAIL | Required per §1.8 |
| `status` | Yes | `draft` | PASS | Valid enum value |

**Required field count:** 7/10 present (missing: `complexity`, `lifecycleStage` — `keywords` present but placeholder; OG present)
Strictly: title/sidebarTitle/description are present but placeholder; pageType/purpose are wrong values.
Additional required fields missing: `industry`, `niche`, `veracityStatus`

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | `complexity`, `lifecycleStage` absent. `title`, `sidebarTitle`, `description` present but placeholders. `keywords` present but placeholder. 7/10 structurally present; quality failures noted. |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `landing` is a deprecated 12-type value. Not in canonical 7-type schema (`concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource`). Per check 1.2 migration table: `landing` has no direct migration equivalent — closest is `navigation` (if routing intent) or `resource` (if content listing intent). Human decision required (BD-1). Per P42: `pageVariant` co-fix depends on BD-1 resolution. |
| 1.3 | `pageVariant` valid if present | N/A | Not present. Co-fix dependency of 1.2 — see BD-1 and F-01. |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `landing` is not in the 15-value canonical set. Error type: invalid value — not valid in either old or new schema as a `purpose` value. Proposed: `purpose: orient` (if landing/routing intent) — confirm before applying. |
| 1.5 | `audience` uses 7-token set | PASS | `developer` is a valid token. (Editorial mismatch INFO: orchestrators resources page with `audience: developer` — should likely be `orchestrator`. Human decision required.) |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: beginner` — confirm before applying (page is empty stub). |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: discover` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: draft` is valid. P39 does not apply (status is `draft`, not `current`). Fix: add `veracityStatus: unverified`. |
| 1.9 | `industry` array valid if present | FAIL | Field absent; required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. |
| 1.10 | `niche` array valid if present | FAIL | Field absent; required (P41). Proposed: `niche: [web3, infrastructure]` — confirm before applying. |
| 1.11 | `description` well-formed | FAIL | Value is `Describe x-help` — a placeholder, not a real description. Check 1.11 requires subject-first, ≤160 chars, UK English. Placeholder fails all substantive criteria. |
| 1.12 | OG image block complete | PASS | All 5 OG fields present. Fallback image path used — acceptable for draft. |
| 1.13 | `keywords` field quality | FAIL | Keywords are `livepeer` and `keyword`. `keyword` is a literal placeholder. Fails check 1.13 specificity requirement. |

**Category 1 verdict:** FAIL — 10 checks fail (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13). (P66: Frontmatter Table and check table aligned.)

---

## Category 2 — VOICE & COPY

Page body is entirely empty. No prose to scan.

### Banned word scan (P24 — show the work)

No body content exists. Frontmatter values scanned:
- `title: X-help` — no banned words.
- `description: Describe x-help` — no banned words (placeholder text).
- `sidebarTitle: X-help` — no banned words.

Result: PASS — no banned words in any visible text (page has no body content).

### Banned phrase scan

No body content. No phrases to scan.

Result: PASS.

### Banned construction scan (P58 — complete before filling check 2.4)

No body content. No constructions to scan.

**Em-dash scan — three explicit targets (P74):**
1. `description` field: `Describe x-help` — no em-dash.
2. H2/H3 headings: none present (empty page).
3. Body prose: none present (empty page).

No em-dashes found.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | N/A | No body content. Frontmatter text contains no US spellings. |
| 2.2 | Zero banned words | PASS | No content to scan; no banned words in visible text. |
| 2.3 | Zero banned phrases | PASS | No content. |
| 2.4 | Zero banned constructions | PASS | No content. Banned Construction Scan complete; no violations found. (P58) |
| 2.5 | Opening order correct | FAIL | Page has no content. There is no opening. Stub/placeholder state. |
| 2.6 | Paragraph discipline | FAIL | No paragraphs. Stub state. |
| 2.7 | Audience register correct | N/A | No content to evaluate register. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No content. |
| 2.9 | No passive value statements | N/A | No content. |
| 2.10 | No hedging openers | FAIL | Page has no content at all — no opener of any kind. |
| 2.11 | Terminology locked and consistent | N/A | No terminology to check. |

**Category 2 verdict:** FAIL — 3 checks fail (2.5, 2.6, 2.10) due to empty page body. Note: these are effectively the same root cause (empty stub).

---

## Category 3 — SECTION NAMING & HEADINGS

No headings present — page body is empty.

**Heading Score Table:** No headings to score.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | N/A | No headings present. Empty page. |
| 3.2 | No banned or weak standalone heading terms | N/A | No headings present. |
| 3.3 | No literal contrast labels | N/A | No headings present. |
| 3.4 | Domain-anchor rule applied | N/A | No headings present. |
| 3.5 | Heading names concept, not examples | N/A | No headings present. |
| 3.6 | Title well-formed | FAIL | `X-help` — not a real title. Uses the filename convention. Not concept-derived. Proposed: replace with a real title once page intent is determined (BD-2). |
| 3.7 | Sounds like editorial choice | FAIL | `X-help` is not an editorial choice; it is a placeholder derived from the filename. |

**Category 3 verdict:** FAIL — 2 checks fail (3.6, 3.7).

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | FAIL | Page has no content — purpose is undefined. `purpose: landing` is invalid. Page intent unknown. Human decision required (BD-2). |
| 4.2 | Purpose statement test passes | FAIL | Cannot state purpose sentence — page is empty. |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | N/A | Page is NOT IN NAV. |
| 4.4 | No dead ends | FAIL | Page has no content, no links, no next steps. Dead end. |
| 4.5 | Prerequisites stated or linked | FAIL | Empty page. |
| 4.6 | Out-of-scope is clear | N/A | Empty page. |
| 4.7 | Information type per section correct | N/A | No content. |
| 4.8 | No content duplication from adjacent sections | N/A | No content. |
| 4.9 | Section orientation page present | N/A | Page-level check. |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check. |

**Category 4 verdict:** FAIL — 4 checks fail (4.1, 4.2, 4.4, 4.5).

---

## Category 5 — LAYOUT & COMPONENTS

Component approval: read `docs-guide/policies/component-layout-decisions.mdx` at batch start.

`pageType: landing` is a deprecated value (flagged 1.2). No canonical 7-type template can be applied until BD-1 resolves the correct `pageType`. Evaluation against the `landing` matrix from `component-layout-decisions.mdx` for informational purposes: Required: `Overview`; Preferred: `Card`, `CardGroup`, `Tabs`, `Accordion`, `AccordionGroup`, `Note`; Avoid: `TODO/TBD placeholders`.

No components used — page body is empty.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | FAIL | `pageType: landing` is deprecated. No canonical template can be evaluated. Empty body means no structure exists. |
| 5.2 | Required sections present | FAIL | No sections present. `landing` requires `Overview`. Page is empty. |
| 5.3 | Only approved components used | N/A | No components used. |
| 5.4 | Avoided components absent | PASS | No content at all; no TODO/TBD/Coming Soon rendered content. (P78: no MDX comments checked.) |
| 5.5 | Information type → component mapping correct | N/A | No content. |
| 5.6 | MDX renders clean | PASS | Frontmatter is valid YAML; body is empty but not broken. |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: landing` and `purpose: landing` are deprecated/old-schema values. |
| 5.8 | CSS uses custom properties only | N/A | No CSS. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | N/A | No imports. |

**Category 5 verdict:** FAIL — 3 checks fail (5.1, 5.2, 5.7).

---

## Category 6 — VERACITY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | N/A | No content. |
| 6.2 | Code/commands tested | N/A | No code. |
| 6.3 | No deprecated API usage | N/A | No APIs. |
| 6.4 | Numbers are real | N/A | No numbers. |
| 6.5 | REVIEW flags for unverified claims | N/A | No claims. |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` absent (flagged 1.8). |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references. |
| 6.8 | Source staleness check | N/A | No content. |
| 6.9 | No open-ended research tasks | N/A | No content. |

**Category 6 verdict:** FAIL — 1 check fails (6.6).

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | FAIL | `v2/orchestrators/resources/x-help` not in docs.json. Confirmed: lines 2968–2987. Page is orphaned. |
| 7.2 | Navigation matches file system | N/A | Not in docs.json; no nav entry. |
| 7.3 | Tab entry portal routes to all sections | N/A | Page-level check. |
| 7.4 | No structural orphans | FAIL | Page is a structural orphan. |
| 7.5 | Audience journey complete | N/A | Tab-level check. |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check. |
| 7.7 | File in correct lane | FAIL | File is in `v2/orchestrators/resources/` (publishable lane) but contains no publishable content. An empty stub in the publishable lane is a lane violation — it either belongs in `_workspace/` (development) or should be deleted. |
| 7.8 | File naming conventions | FAIL | `x-` prefix marks deprecated content. This appears to be an empty placeholder, not deprecated content that was once live. Naming/intent mismatch. Human decision required (BD-3). |
| 7.9 | `_workspace/` TTL compliance | N/A | Not in `_workspace/`. |

**Category 7 verdict:** FAIL — 4 checks fail (7.1, 7.4, 7.7, 7.8).

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | N/A | No internal links in page body. |
| 8.2 | All external links live | N/A | No external links. |
| 8.3 | All snippet imports resolve | N/A | No imports. |
| 8.4 | All images load | N/A | No images in body. OG image uses fallback path — standard. |
| 8.5 | Page renders without error | PASS | Frontmatter is valid; empty body will render as a blank page. No JSX errors. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | None found. Page is entirely empty (blank content is not a TODO placeholder in JSX terms). |

**Category 8 verdict:** PASS — 0 FAILs.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human review. This is an empty stub with placeholder values. |
| 9.2 | All consuming decisions in registry | NOT-TESTED | No decisions identified as consumed by this page. Decision-registry.md not read in this session. |
| 9.3 | Gate prerequisites met | FAIL | No IA approval, no terminology lock, no content pass open. Empty stub should not be in the publishable lane. |
| 9.4 | Phase ordering respected | N/A | Page has no content — no phase work has been done. |
| 9.5 | Findings gathered before fixes | NOT-TESTED | Cannot verify. |
| 9.6 | Feedback routed | NOT-TESTED | Cannot verify. |

**Category 9 verdict:** FAIL — 2 checks fail (9.1, 9.3); 3 NOT-TESTED (9.2, 9.5, 9.6).

---

## Spelling / Typo Pass

Visible text scanned (frontmatter fields only — no body content):
- `title: X-help` — placeholder, not a spelling error per se.
- `description: Describe x-help` — placeholder.
- `sidebarTitle: X-help` — placeholder.
- `keywords: livepeer, keyword` — `keyword` is a placeholder, not a typo.

No typographic errors found in the frontmatter text that exists.

---

## Blocking Decisions

**BD-1: `pageType: landing` — what should this page be?**
`landing` is deprecated. The correct `pageType` is unknown because the page has no content and the intent is unclear.
- Option A: Page intent is routing/navigation — change to `pageType: navigation`; add `pageVariant` if needed.
- Option B: Page intent is resource listing — change to `pageType: resource`.
- Option C: Page is not needed — delete file and remove from filesystem.
Resolve before executing F-01 and F-03.

**BD-2: What should this page contain?**
The page is entirely empty. No purpose, no audience, no content. The filename `x-help` suggests it may have been a placeholder for a "help" or "support" page.
- Option A: Define content intent and write the page from scratch using a page brief.
- Option B: Delete the file — content need does not exist or is covered by `faq.mdx`.
Resolve before executing any content fixes.

**BD-3: `x-` filename prefix and lane placement**
`x-` marks deprecated content. Empty placeholder file in publishable lane with no content is a misuse of the lane.
- Option A: Move to `_workspace/drafts/` if content is planned.
- Option B: Delete file entirely if no content is planned.
Resolve before any lane or naming changes.

---

## Verdict Summary

**Total FAIL count:** 29
**FAIL check IDs:** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.5, 2.6, 2.10, 3.6, 3.7, 4.1, 4.2, 4.4, 4.5, 5.1, 5.2, 5.7, 6.6, 7.1, 7.4, 7.7, 7.8, 9.1, 9.3
**BORDERLINE count:** 0
**NOT-TESTED count:** 5 (9.2, 9.5, 9.6, plus inherited N/As for content-dependent checks) — not counted as FAILs (P59)
**PASS count:** varies — most Category 2/3/4/5/6/7/8 checks are N/A due to empty page body.

**Overall verdict: REWRITE REQUIRED** — 29 failing checks. Page is an empty stub with placeholder frontmatter values, no content, deprecated pageType, wrong purpose value, wrong audience token (editorial), no content, and an incorrect filename convention. Three blocking decisions (BD-1, BD-2, BD-3) require human resolution. This page should not exist in the publishable lane in its current state. Recommend: define page intent, write page brief, execute from `_workspace/` before moving to publishable path. Alternatively, delete if content is covered elsewhere.

---

## Fix List

**F-01** — [ATOMIC P39/P84/check 1.8] Add `veracityStatus: unverified` to frontmatter. (`status` is already `draft` — P39 coherence issue does not apply here since status is not `current`. Add `veracityStatus: unverified` as a standalone fix.)

**F-02** — [checks 1.2, 1.3, P42 — conditional on BD-1] Change `pageType: landing` to canonical 7-type value. Do not execute until BD-1 resolves.
- If BD-1 → Option A: `pageType: navigation`
- If BD-1 → Option B: `pageType: resource`
`pageVariant` co-fix (P42): add appropriate `pageVariant` as part of the same edit if migration table requires it.

**F-03** — [check 1.4 — conditional on BD-2] Change `purpose: landing` to a valid 15-value canonical purpose. Do not execute until BD-2 resolves. Proposed: `purpose: orient` — confirm before applying.

**F-04** — [check 1.11 — conditional on BD-2] Replace placeholder `description: 'Describe x-help'` with a real description once page content is defined. Proposed format: `[Subject-first sentence, ≤160 chars, UK English, no em-dash, no self-reference]`. Do not write until BD-2 resolves.

**F-05** — [check 1.6] Add `complexity` field. Proposed: `complexity: beginner` — confirm before applying (after BD-2 resolves page intent).

**F-06** — [check 1.7] Add `lifecycleStage` field. Proposed: `lifecycleStage: discover` — confirm before applying (after BD-2 resolves page intent).

**F-07** — [checks 1.1, 1.13] Replace placeholder keywords `[livepeer, keyword]` with real, searcher-intent-aligned keywords once page content is defined. Do not write until BD-2 resolves.

**F-08** — [checks 1.9, P41] Add `industry` field. Proposed: `industry: [technical, livepeer]` — confirm before applying.

**F-09** — [checks 1.10, P41] Add `niche` field. Proposed: `niche: [web3, infrastructure]` — confirm before applying.

**F-10** — [checks 3.6, 3.7 — conditional on BD-2] Replace `title: 'X-help'` and `sidebarTitle: X-help` with real title once page intent is defined. Do not execute until BD-2 resolves.

**F-11** — [checks 4.1, 4.2, 4.4, 4.5, 2.5, 2.6, 2.10, 5.2 — conditional on BD-2] Write page content from scratch using a page brief. All content-quality checks fail because the page has no content. These checks cannot pass until BD-2 resolves and content is written.

**F-12** — [checks 7.1, 7.4, 7.7, 7.8 — conditional on BD-3] Resolve lane placement and naming:
- If BD-3 → Option A: move to `_workspace/drafts/` and update any references.
- If BD-3 → Option B: delete file from filesystem.
Do not execute until BD-3 resolves.
