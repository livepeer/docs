# Per-Page Quality Check Report
## `v2/orchestrators/resources/x-payments.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` — NOT IN NAV. Orchestrators/resources entries confirmed at lines 2968–2987; `v2/orchestrators/resources/x-payments` absent.
**Learnings applied:** P1–P90
**Component approval:** Read `docs-guide/policies/component-layout-decisions.mdx` at batch start.

---

## Pre-Check: File Integrity

Lines 1–10:
```
---
title: Orchestrator Payments
sidebarTitle: Payments
description: Payment setup guidance for Livepeer orchestrators.
keywords:
  - livepeer
  - orchestrators
  - payments
  - clearinghouse
```

No content appears before the opening `---` frontmatter delimiter. No corrupt prefix detected.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Orchestrator Payments` | PASS | |
| `sidebarTitle` | Yes | `Payments` | PASS | |
| `description` | Yes | `Payment setup guidance for Livepeer orchestrators.` | PASS | Subject-first, ~51 chars, no em-dash, no self-reference, UK English |
| `pageType` | Yes | `overview` | FAIL | Type-confusion: `overview` is a `pageVariant` value placed in the `pageType` field. Not a deprecated alias with a migration path. Correct `pageType` unknown — human decision required (BD-1). (P87) |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `landing` | FAIL | Not in the 15-value canonical set. Error type (P37): invalid value — not valid in either old or new schema as a `purpose`. |
| `complexity` | No | absent | FAIL | Required field missing |
| `lifecycleStage` | No | absent | FAIL | Required field missing |
| `keywords` | Yes | 7 values present | FAIL | `livepeer` and `orchestrators` too generic per check 1.13. Stronger terms present but overall set needs revision. |
| OG image block | Yes | 5 fields present | PASS | Section-specific orchestrators image path used |
| `industry` | No | absent | FAIL | Required field (P41) |
| `niche` | No | absent | FAIL | Required field (P41) |
| `veracityStatus` | No | absent | FAIL | Required per checks.mdx §1.8 |
| `status` | Yes | `review` | FAIL | Wrong-enum error; valid values: `current`, `draft` only (P57) |

**Required field count:** 8/10 structurally present (missing: `complexity`, `lifecycleStage`)
Additional required fields missing: `industry`, `niche`, `veracityStatus`

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | `complexity`, `lifecycleStage` absent. 8/10 structurally present. |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `overview` is a TYPE-CONFUSION error (P87). It is a `pageVariant` value placed in the `pageType` field — not a deprecated pageType alias with a defined migration. Correct `pageType` unknown. Human decision required (BD-1). Do not auto-migrate. |
| 1.3 | `pageVariant` valid if present | N/A | Not present. Co-fix dependency of 1.2: once BD-1 resolves correct `pageType`, `pageVariant: overview` may be added as part of the same edit (P42). |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `landing` is not in the 15-value canonical set. Error type: invalid value. Proposed: `purpose: orient` — confirm before applying. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: beginner` — confirm before applying. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: review` is a wrong-enum error. Per P57 and P90: flag `status: review` as wrong-enum only — do NOT cite §1.8 incoherence (§1.8 governs `status: current` + `veracityStatus` only). Per P84 atomic fix: change `status: review` → `status: draft` AND add `veracityStatus: unverified` in one edit. |
| 1.9 | `industry` array valid if present | FAIL | Field absent; required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. |
| 1.10 | `niche` array valid if present | FAIL | Field absent; required (P41). Proposed: `niche: [web3, protocol]` — confirm before applying. |
| 1.11 | `description` well-formed | PASS | `Payment setup guidance for Livepeer orchestrators.` — subject-first, ~51 chars, no em-dash (P74 verified below), no self-reference, UK English. |
| 1.12 | OG image block complete | PASS | All 5 OG fields present. |
| 1.13 | `keywords` field quality | FAIL | `livepeer` and `orchestrators` are too generic (synonyms of the title/section). `clearinghouse`, `arbitrum`, `eth`, `lpt` are stronger. Full keyword set needs replacing with searcher-intent-aligned terms. |

**Category 1 verdict:** FAIL — 9 checks fail (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13). (P66: Frontmatter Table and check table aligned.)

---

## Category 2 — VOICE & COPY

### Banned word scan (P24 — show the work)

Candidates: `effectively`, `essentially`, `basically`, `meaningful`/`meaningfully`, `significant`/`significantly`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`.

- Line 26: "This section is being finalized for orchestrator-focused payment operations." — no banned word matches.
- Card descriptions (lines ~34–35, ~42–43): "Current clearinghouse workflow while orchestrator-specific guidance is in progress." — no matches. "Funding options for on-chain orchestration and service operations." — no matches.

Result: PASS — no banned words found.

### Banned phrase scan (checks.mdx §2.3 — P56 applied)

- Line 26: "This section is being finalized for orchestrator-focused payment operations." — `This section [verb]` pattern. Per P56: `This [noun] [verb]` / `This section [verb]` are BANNED CONSTRUCTIONS (check 2.4), not banned phrases (check 2.3). Check 2.3 result: PASS. Finding belongs in check 2.4.
- No "rather than", "etc.", "and so on", "It is important to note" found.
- Card line ~35: "while orchestrator-specific guidance is in progress" — not a listed banned phrase. No match.

Result: PASS.

### Banned construction scan (P58 — complete before filling check 2.4)

**`This section [verb]` / `This page [verb]` (P56):**
- Line 26: "This section is being finalized for orchestrator-focused payment operations." — `This section [verb]` banned construction. FAIL.

**`not [X]` as primary statement:**
- No instances found.

**`can/may [verb]` in value claims:**
- No instances found.

**`if [condition]` in body prose:**
- No instances found.

**`That means` / `This shows`:**
- No instances found.

**Em-dash scan — three explicit targets (P74):**
1. `description` field (line 4): `Payment setup guidance for Livepeer orchestrators.` — no em-dash.
2. H2/H3 headings: none in page body.
3. Body prose (line 26, card descriptions): no em-dashes.

No em-dashes found. (P62: em-dashes alone not a check 2.4 violation; none present.)

Check 2.4 result (P58 — determined after scan):
- `This section [verb]` at line 26: FAIL.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | FAIL | Line 26: `finalized` — US spelling. UK form: `finalised`. |
| 2.2 | Zero banned words | PASS | Scan complete; no banned words found. |
| 2.3 | Zero banned phrases | PASS | No banned phrases from §2.3 list. `This section [verb]` pattern is a banned construction (→ 2.4), not a banned phrase. (P56) |
| 2.4 | Zero banned constructions | FAIL | Line 26: "This section is being finalized for orchestrator-focused payment operations." — `This section [verb]` (P56/check 2.4). Fix: delete the sentence (see F-07). No em-dashes (P62). |
| 2.5 | Opening order correct | FAIL | Line 26 opens with a status announcement, not content. Self-referential + work-in-progress. Root cause shared with 2.4. |
| 2.6 | Paragraph discipline | FAIL | Only body prose is line 26 — a work-in-progress status sentence. No substantive paragraph content. |
| 2.7 | Audience register correct | PASS | `orchestrator` audience. Minimal content but appropriate register. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No prohibited orchestrator-audience phrases found. |
| 2.9 | No passive value statements | N/A | No substantive value claims to evaluate. |
| 2.10 | No hedging openers | FAIL | Line 26: "This section is being finalized…" — a hedging caveat opener announcing incompleteness. |
| 2.11 | Terminology locked and consistent | PASS | `clearinghouse`, `Arbitrum`, `on-chain` — consistent with locked terminology. |

**Category 2 verdict:** FAIL — 5 checks fail (2.1, 2.4, 2.5, 2.6, 2.10). Checks 2.4, 2.5, 2.6, 2.10 share root cause: line 26 placeholder sentence.

---

## Category 3 — SECTION NAMING & HEADINGS

No H2/H3 headings present in page body. Card titles are component props — scanned for em-dashes and banned constructions below.

Card titles: `Gateway Clearinghouse Reference` (line ~30), `Arbitrum Exchanges` (line ~38) — no em-dashes, no banned terms.

**Heading Score Table:** No body headings to score.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | N/A | No H2/H3 headings present. |
| 3.2 | No banned or weak standalone heading terms | N/A | No H2/H3 headings. |
| 3.3 | No literal contrast labels | N/A | No headings. |
| 3.4 | Domain-anchor rule applied | N/A | No headings. |
| 3.5 | Heading names concept, not examples | N/A | No headings. |
| 3.6 | Title well-formed | PASS | `Orchestrator Payments` — 2 words, concept-derived, no banned forms. P86: no U+2014 in title (confirmed). |
| 3.7 | Sounds like editorial choice | PASS | `Orchestrator Payments` is a clear, expert editorial label. |

**Category 3 verdict:** PASS — 0 checks fail.

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | FAIL | Page intent unclear: `purpose: landing` is invalid. Body text announces incompleteness. One card links to a cross-tab Gateway page without justification. Purpose is undefined. |
| 4.2 | Purpose statement test passes | FAIL | Cannot state: "This page lets the orchestrator [concrete action]." Page is a stub. |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | N/A | Page is NOT IN NAV. |
| 4.4 | No dead ends | PASS | Both card link targets verified as existing on filesystem. Navigation from the cards is possible. |
| 4.5 | Prerequisites stated or linked | N/A | Stub page; no content requiring prerequisites. |
| 4.6 | Out-of-scope is clear | FAIL | Card 1 links to `v2/gateways/guides/payments-and-pricing/clearinghouse-guide` from an orchestrators resources page. No explanation of why an orchestrator should consult a gateway-facing guide. Cross-tab link without justification is a scope clarity failure. (BD-2) |
| 4.7 | Information type per section correct | NOT-TESTED | Dependent on BD-1 and BD-2 resolution. |
| 4.8 | No content duplication from adjacent sections | NOT-TESTED | Cannot verify without knowing final content scope. |
| 4.9 | Section orientation page present | N/A | Page-level check. |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check. |

**Category 4 verdict:** FAIL — 3 checks fail (4.1, 4.2, 4.6); 2 NOT-TESTED (4.7, 4.8).

---

## Category 5 — LAYOUT & COMPONENTS

Component approval: read `docs-guide/policies/component-layout-decisions.mdx` at batch start.

`pageType: overview` is a type-confusion error (P87). No canonical 7-type template applies until BD-1 resolves. For informational reference, `overview` in the component matrix: Required: `Overview`; Preferred: `Card`, `CardGroup`, `Tabs`, `Accordion`, `AccordionGroup`, `CodeGroup`, `Note`; Avoid: `TODO/TBD`.

Components used:
- `CardGroup`/`Card` (lines 28–45) — Preferred for `overview`, `resource`, and `navigation` per `component-layout-decisions.mdx`. Appropriate regardless of BD-1 resolution.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | FAIL | `pageType: overview` is a type-confusion error (P87). No canonical template applicable. Human decision required (BD-1). |
| 5.2 | Required sections present | FAIL | No section headings. Body is a placeholder sentence + CardGroup. Required sections undefined pending BD-1. |
| 5.3 | Only approved components used | PASS | `CardGroup`/`Card` are in the Preferred column for `overview`, `resource`, `navigation` per `component-layout-decisions.mdx`. No unapproved components. (P22 — file was read.) |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon rendered JSX. Line 26 prose is a status statement, not a rendered TODO component (P78). |
| 5.5 | Information type → component mapping correct | NOT-TESTED | Dependent on BD-1 resolution. |
| 5.6 | MDX renders clean | PASS | No broken JSX, no unclosed tags. Simple structure. |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: overview` is a type-confusion error; `purpose: landing` is an invalid value. Both flagged in Category 1. |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | N/A | No imports; Mintlify built-in components only. |

**Category 5 verdict:** FAIL — 3 checks fail (5.1, 5.2, 5.7); 1 NOT-TESTED (5.5).

---

## Category 6 — VERACITY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | NOT-TESTED | Card descriptions are brief and structural. Card 1 description: "Current clearinghouse workflow while orchestrator-specific guidance is in progress" — implies orchestrator-specific guidance is not yet available. This is a state claim, not verified. |
| 6.2 | Code/commands tested | N/A | No code blocks. |
| 6.3 | No deprecated API usage | N/A | No API references. |
| 6.4 | Numbers are real | N/A | No numbers. |
| 6.5 | REVIEW flags for unverified claims | FAIL | Line 26: "This section is being finalized for orchestrator-focused payment operations." — unverified state claim in published content with no REVIEW flag. Fix: delete the sentence (preferred) or add `{/* REVIEW: confirm whether orchestrator-specific payments content exists — [owner] to confirm */}`. (P61: only `{/* REVIEW: [claim] — [source] */}` format satisfies 6.5.) |
| 6.6 | `veracityStatus` honest | FAIL | Field absent (flagged 1.8). |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references. |
| 6.8 | Source staleness check | NOT-TESTED | Card 1 links to `v2/gateways/guides/payments-and-pricing/clearinghouse-guide` — that page's currency not verified in this check. MEDIUM staleness risk (operational guide). |
| 6.9 | No open-ended research tasks | FAIL | Card 1 description: "while orchestrator-specific guidance is in progress" — states pending content with no named owner, no source, no concrete next step. Open-ended. (P70: both 6.5 and 6.9 fail when there is no named source or owner.) |

**Category 6 verdict:** FAIL — 3 checks fail (6.5, 6.6, 6.9); 2 NOT-TESTED (6.1, 6.8).

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | FAIL | `v2/orchestrators/resources/x-payments` not in docs.json. Confirmed: lines 2968–2987. |
| 7.2 | Navigation matches file system | N/A | Not in docs.json; no nav entry to mismatch. |
| 7.3 | Tab entry portal routes to all sections | N/A | Page-level check. |
| 7.4 | No structural orphans | FAIL | Page is a structural orphan — not reachable from any navigation path. |
| 7.5 | Audience journey complete | N/A | Tab-level check. |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check. INFO: Card 1 links to a gateway page — potential cross-tab journey link, but unjustified (flagged under 4.6). |
| 7.7 | File in correct lane | FAIL | File is in `v2/orchestrators/resources/` (publishable lane) but contains placeholder content and a "being finalized" notice. Stub content in publishable lane is a lane violation. |
| 7.8 | File naming conventions | FAIL | `x-` prefix marks deprecated/archived content. File contains active placeholder content. Naming/intent mismatch. Human decision required (BD-3). |
| 7.9 | `_workspace/` TTL compliance | N/A | Not in `_workspace/`. |

**Category 7 verdict:** FAIL — 4 checks fail (7.1, 7.4, 7.7, 7.8).

---

## Category 8 — LINKS & RENDERING

Internal link verification (P33 — full paths confirmed against filesystem):

| Link target | Verified |
|---|---|
| `/v2/gateways/guides/payments-and-pricing/clearinghouse-guide` | EXISTS |
| `/v2/orchestrators/resources/arbitrum-exchanges` | EXISTS |

No external links.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | Both link targets verified as existing on filesystem (P33 — full paths checked). |
| 8.2 | All external links live | N/A | No external links. |
| 8.3 | All snippet imports resolve | N/A | No imports; Mintlify built-in components only. |
| 8.4 | All images load | N/A | No images in body. OG image: standard orchestrators path. |
| 8.5 | Page renders without error | PASS | No JSX errors, no unclosed tags, no import errors. |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | Line 26: "This section is being finalized for orchestrator-focused payment operations." — functionally a "Coming Soon" notice in prose form. Card 1 description: "while orchestrator-specific guidance is in progress" — also signals incomplete published content. Both are placeholder/in-progress markers in the publishable lane. |

**Category 8 verdict:** FAIL — 1 check fails (8.6).

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human review. `lastVerified: 2026-03-17` is a date field, not a sign-off record. Page contains in-progress placeholder. |
| 9.2 | All consuming decisions in registry | NOT-TESTED | No decisions identified as consumed by this page. Decision-registry.md not read in this session. |
| 9.3 | Gate prerequisites met | FAIL | No IA approval, no terminology lock, no content pass gate open. Placeholder content in publishable lane. |
| 9.4 | Phase ordering respected | NOT-TESTED | Cannot verify without pipeline history. |
| 9.5 | Findings gathered before fixes | NOT-TESTED | Cannot verify. |
| 9.6 | Feedback routed | NOT-TESTED | Cannot verify. |

**Category 9 verdict:** FAIL — 2 checks fail (9.1, 9.3); 4 NOT-TESTED (9.2, 9.4, 9.5, 9.6).

---

## Spelling / Typo Pass

Scanned: title, sidebarTitle, description, keywords, body prose, card titles, card descriptions.

- Line 26: `finalized` — US spelling (flagged in 2.1; not a typo, an Anglicisation error).
- `clearinghouse` — one word; correct.
- `orchestrator-focused` — hyphenated compound; correct.
- `orchestrator-specific` — hyphenated compound; correct.
- No other typos found.

---

## Blocking Decisions

**BD-1: `pageType: overview` — what should this page be?**
`overview` is a `pageVariant` value in the wrong field (P87). No migration path. Correct `pageType` unknown.
- Option A: `pageType: navigation` — if intent is to route orchestrators to payment-related pages.
- Option B: `pageType: resource` — if intent is a curated payment resources page.
- Option C: `pageType: guide` — if intent is to explain the orchestrator payments model.
`pageVariant: overview` would be added as co-fix once correct `pageType` is established (P42).
Resolve before executing F-02.

**BD-2: Gateway clearinghouse card — scope justification or removal**
Card 1 links to `v2/gateways/guides/payments-and-pricing/clearinghouse-guide` from an orchestrators resources page. Intent unclear.
- Option A: Keep as intentional cross-tab bridge — add prose justifying why orchestrators should reference the gateway clearinghouse guide.
- Option B: Remove gateway card — replace with orchestrator-specific payment content or link to orchestrator payments guide once written.
Resolve before executing F-09.

**BD-3: `x-` filename prefix vs placeholder active content**
`x-` marks deprecated/archived content. This file contains placeholder active content.
- Option A: File is planned future content — rename to `payments.mdx`, move to `_workspace/drafts/`, develop from a page brief, then promote.
- Option B: File is superseded or not needed — confirm, move to `x-deprecated/` or delete.
Resolve before executing F-10.

---

## Verdict Summary

Tabulation from check tables:
- Category 1: 9 (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13)
- Category 2: 5 (2.1, 2.4, 2.5, 2.6, 2.10)
- Category 3: 0
- Category 4: 3 (4.1, 4.2, 4.6)
- Category 5: 3 (5.1, 5.2, 5.7)
- Category 6: 3 (6.5, 6.6, 6.9)
- Category 7: 4 (7.1, 7.4, 7.7, 7.8)
- Category 8: 1 (8.6)
- Category 9: 2 (9.1, 9.3)
Total = 9+5+0+3+3+3+4+1+2 = **30 FAILs**

**Total FAIL count:** 30
**FAIL check IDs:** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 2.1, 2.4, 2.5, 2.6, 2.10, 4.1, 4.2, 4.6, 5.1, 5.2, 5.7, 6.5, 6.6, 6.9, 7.1, 7.4, 7.7, 7.8, 8.6, 9.1, 9.3
**BORDERLINE count:** 0
**NOT-TESTED count:** 9 (4.7, 4.8, 5.5, 6.1, 6.8, 9.2, 9.4, 9.5, 9.6) — not counted as FAILs (P59)
**PASS count:** 21

**Overall verdict: REWRITE REQUIRED** — 30 failing checks. Page is a placeholder stub with a type-confusion `pageType`, an invalid `purpose`, missing required fields, a wrong-enum `status`, an unverified state-claim opener, an unjustified cross-tab card, and no substantive content. Three blocking decisions (BD-1, BD-2, BD-3) require human resolution before this page can progress. The page should not be in the publishable lane in its current state.

---

## Fix List

**F-01** — [ATOMIC P39/P57/P84 — check 1.8] Change `status: review` → `status: draft` AND add `veracityStatus: unverified`. Both in one edit. (P90: wrong-enum error only — do not cite §1.8 incoherence rule for `status: review`.)

**F-02** — [checks 1.2, 1.3, P42/P87 — conditional on BD-1] Replace `pageType: overview` with the correct canonical 7-type value, and add `pageVariant: overview` as a co-fix in the same edit. Do not execute until BD-1 is resolved.

**F-03** — [check 1.4] Change `purpose: landing` → `purpose: orient`. Proposed value — confirm before applying.

**F-04** — [check 1.6] Add `complexity: beginner`. Proposed value — confirm before applying.

**F-05** — [check 1.7] Add `lifecycleStage: operate`. Proposed value — confirm before applying.

**F-06** — [check 1.13] Replace weak keywords. Remove `livepeer` and `orchestrators` (too generic). Proposed replacement (retain stronger existing terms and add specificity):
```
keywords:
  - orchestrator payment operations
  - livepeer probabilistic micropayment tickets
  - arbitrum on-chain orchestrator funding
  - clearinghouse guide livepeer
  - eth lpt orchestrator setup
```
Confirm before applying. (P75 verified: no em-dashes or banned constructions in proposed keywords.)

**F-07** — [checks 2.1, 2.4, 2.5, 2.10, 6.5, 8.6] Delete line 26: "This section is being finalized for orchestrator-focused payment operations." This sentence fails six checks simultaneously: US spelling (`finalized`), banned construction (`This section [verb]`), wrong opening order, hedging opener, unverified state claim without REVIEW flag, Coming Soon prose in published content. If a work-in-progress note is genuinely needed, use: `{/* REVIEW: placeholder content — confirm whether orchestrator-specific payments guide exists; [owner] to confirm before publishing */}` (not rendered). Do not execute until BD-2 also resolved (related content framing).

**F-08** — [checks 1.9, P41] Add `industry: [technical, livepeer]` — confirm before applying.

**F-09** — [checks 1.10, P41] Add `niche: [web3, protocol]` — confirm before applying.

**F-10** — [checks 4.1, 4.2, 4.6 — conditional on BD-2] Resolve gateway clearinghouse card:
- If BD-2 → Option A: Add prose context before the CardGroup explaining the cross-tab reference.
- If BD-2 → Option B: Remove `Gateway Clearinghouse Reference` card; replace with orchestrator-specific link.
Do not execute until BD-2 is resolved.

**F-11** — [checks 5.1, 5.2, 7.1, 7.4, 7.7, 7.8 — conditional on BD-3] Resolve lane placement and naming:
- If BD-3 → Option A: Rename to `payments.mdx`, move to `_workspace/drafts/`, develop content from page brief, promote when ready, add to docs.json navigation.
- If BD-3 → Option B: Confirm file is superseded; move to `v2/orchestrators/resources/x-deprecated/` or delete.
Do not execute until BD-3 is resolved.
