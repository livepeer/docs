# Per-Page Quality Check Report
## `v2/orchestrators/resources/x-guides.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` — NOT IN NAV. Orchestrators/resources entries confirmed at lines 2968–2987; `v2/orchestrators/resources/x-guides` absent.
**Learnings applied:** P1–P90
**Component approval:** Read `docs-guide/policies/component-layout-decisions.mdx` at batch start.

---

## Pre-Check: File Integrity

Lines 1–10:
```
---
title: 'Orchestrator Guides'
description: 'Curated guides for running and optimising a Livepeer orchestrator — setup references, earnings strategy, community how-tos, and Discord resources.'
purpose: reference
sidebarTitle: 'Guides'
pageType: 'reference'
audience: 'orchestrator'
status: 'review'
lastVerified: '2026-03-10'
---
```

No content appears before the opening `---` frontmatter delimiter. No corrupt prefix detected.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `Orchestrator Guides` | PASS | |
| `sidebarTitle` | Yes | `Guides` | PASS | |
| `description` | Yes | `Curated guides for running and optimising a Livepeer orchestrator — setup references, earnings strategy, community how-tos, and Discord resources.` | FAIL | Em-dash (—) between `orchestrator` and `setup`; P30 / check 1.11 |
| `pageType` | Yes | `reference` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `reference` | PASS | Valid 15-value canonical set |
| `complexity` | No | absent | FAIL | Required field missing |
| `lifecycleStage` | No | absent | FAIL | Required field missing |
| `keywords` | No | absent | FAIL | Required field missing |
| OG image block | No | absent | FAIL | All 5 OG fields missing |
| `industry` | No | absent | FAIL | Required field (P41) |
| `niche` | No | absent | FAIL | Required field (P41) |
| `veracityStatus` | No | absent | FAIL | Required per checks.mdx §1.8 |
| `status` | Yes | `review` | FAIL | Wrong-enum error; valid values: `current`, `draft` only (P57) |

**Required field count:** 6/10 present (missing: `complexity`, `lifecycleStage`, `keywords`, OG image block)
Additional required fields missing: `industry`, `niche`, `veracityStatus`

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | `complexity`, `lifecycleStage`, `keywords`, OG image block all absent. 6/10 present. |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is valid. |
| 1.3 | `pageVariant` valid if present | N/A | Not present; 1.2 PASS so no co-fix dependency triggered. |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` is valid. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid. |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying. |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — confirm before applying. |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: review` is also a wrong-enum value (valid: `current`, `draft`). Page has not been verified — `veracityStatus: unverified` is the correct default. P39/P84 atomic fix: change `status: review` → `status: draft` AND add `veracityStatus: unverified` in one edit. |
| 1.9 | `industry` array valid if present | FAIL | Field absent; required (P41). Proposed: `industry: [technical, livepeer]` — confirm before applying. |
| 1.10 | `niche` array valid if present | FAIL | Field absent; required (P41). Proposed: `niche: [web3, infrastructure]` — confirm before applying. |
| 1.11 | `description` well-formed | FAIL | Em-dash (—) in description field (line 3): `orchestrator — setup references`. P30: em-dash prohibited in all visible text including frontmatter description. ~155 chars — within limit. No self-reference. UK English (`optimising`) correct. Fix: replace `—` with `:`. |
| 1.12 | OG image block complete | FAIL | All 5 OG fields absent. |
| 1.13 | `keywords` field quality | FAIL | Field absent. |

**Category 1 verdict:** FAIL — 9 checks fail (1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13).

---

## Category 2 — VOICE & COPY

### Banned word scan (P24 — show the work)

Candidates: `effectively`, `essentially`, `basically`, `meaningful`/`meaningfully`, `significant`/`significantly`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`.

- Line 14: "A curated index of guides for running a Livepeer orchestrator." — no matches.
- Line 97: "These guides are maintained by community members and SPEs, not the Livepeer Foundation. They are not officially reviewed or guaranteed to be current." — no matches.
- Line 126: "The primary community support channel for orchestrators is Discord. Most active troubleshooting, pricing discussion, and operational knowledge lives there." — no matches.
- Line 131: "For troubleshooting, check the FAQ first." — no matches.
- Card descriptions (lines 26–90): scanned. No matches.
- Table cells (lines 100–120): scanned. No matches.

Result: PASS — no banned words found.

### Banned phrase scan (checks.mdx §2.3 — P56 applied)

- No "This section covers", "This page covers/explains/walks you through", "Understanding X is essential", "It is important to note", "rather than", "etc.", "and so on" found.
- Line 14 opens "A curated index…" — subject-first; no self-referential opener. PASS.
- `This page [verb]` pattern: none found.

Result: PASS.

### Banned construction scan (P58 — complete before filling check 2.4)

**`not [X]` as primary statement:**
- Line 97: "They are not officially reviewed or guaranteed to be current." — `not [X]` pattern. The surrounding sentence `These guides are maintained by community members and SPEs, not the Livepeer Foundation.` is the primary positive statement; `not officially reviewed` is a secondary disclaimer clause. BORDERLINE — not a value-claim context; human review required before flagging as FAIL.

**`can/may [verb]` in value claims:**
- Candidates scanned across all card descriptions and body prose. None found.

**`if [condition]` in body prose:**
- None found.

**`That means` / `This shows`:**
- None found.

**`This page [verb]`:**
- None found.

**Em-dash scan — three explicit targets (P74):**
1. `description` field (line 3): em-dash (—) confirmed: `orchestrator — setup references`. FAIL under P30.
2. H2/H3 headings (lines 18, 95, 124, 135): `Official guides`, `Community resources`, `Discord and forum`, `See Also` — no em-dashes.
3. Body prose (lines 14, 97, 126, 131): no em-dashes.

Em-dash finding: description field only. Per P62: em-dashes do not make check 2.4 FAIL. Tracked under P30 — see F-02.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | `optimising` (description, line 68) — correct UK form. No US spellings found. |
| 2.2 | Zero banned words | PASS | Scan complete; no banned words found. |
| 2.3 | Zero banned phrases | PASS | No banned phrases found. (P56: `not officially reviewed` is a construction, goes to 2.4.) |
| 2.4 | Zero banned constructions | BORDERLINE | Line 97: "They are not officially reviewed or guaranteed to be current." — `not [X]` as secondary disclaimer; BORDERLINE. Em-dashes tracked under P30 — see F-02. No other violations found. |
| 2.5 | Opening order correct | PASS | Line 14 opens with subject/content ("A curated index…"). No caveat opener. |
| 2.6 | Paragraph discipline | PASS | Short declarative paragraphs; each does one job. Lead sentences state facts. |
| 2.7 | Audience register correct | PASS | `orchestrator` audience. Peer-technical voice. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found. |
| 2.9 | No passive value statements | PASS | No unquantified value claims. |
| 2.10 | No hedging openers | PASS | Opens with subject. |
| 2.11 | Terminology locked and consistent | PASS | `orchestrator`, `LPT`, `aiModels.json`, `Discord`, `Arbitrum` — all consistent. |

**Category 2 verdict:** BORDERLINE — 0 confirmed FAILs; check 2.4 BORDERLINE (line 97 disclaimer; human review required).

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading inventory:**
- `## Official guides` (line 18)
- `## Community resources` (line 95)
- `## Discord and forum` (line 124)
- `## See Also` (line 135)

`Related Pages` heading: not present on this page.
`See Also` heading: NOT exempt — the exemption applies only to the exact text `Related Pages` (P53). `See Also` is Banned-tier.

**Heading Score Table (P2 — per-dimension breakdown):**

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| Official guides | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Community resources | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Discord and forum | 5 | 3 | 5 | 5 | 5 | 23/25 | PASS |
| See Also | 2 | 1 | 3 | 3 | 4 | 13/25 | FAIL |

`See Also` rationale: Precision 2 — does not name the governing concept; Depth 1 — zero intellectual signal; Stability 3 — survives but adds nothing; Clarity 3 — reader must read the section to understand what "also" refers to; Conciseness 4 — minimal words but minimal signal.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | `See Also` scores 13/25. (P85: ONE check ID; one heading fails.) |
| 3.2 | No banned or weak standalone heading terms | FAIL | `See Also` — Banned-tier per Frameworks.mdx §4.1. Not exempt (P53: exemption = exact text `Related Pages` only). |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. |
| 3.4 | Domain-anchor rule applied | PASS | `Official guides`, `Community resources`, `Discord and forum` interpretable in isolation. |
| 3.5 | Heading names concept, not examples | PASS | All headings name categories. |
| 3.6 | Title well-formed | PASS | `Orchestrator Guides` — 2 words, concept-derived, no banned forms. P86: no em-dash in title (confirmed — no U+2014). |
| 3.7 | Sounds like editorial choice | PASS | `Official guides`, `Community resources`, `Discord and forum` are expert editorial choices. `See Also` already flagged under 3.2. |

**Category 3 verdict:** FAIL — 2 checks fail (3.1, 3.2).

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | One audience (`orchestrator`), one purpose (curated guide index), one job (navigate to the right guide). |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator find and navigate to operational guides." Passes. |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | N/A | Page is NOT IN NAV; no prev/next sequence to evaluate. |
| 4.4 | No dead ends | PASS | All 10 card link targets verified as existing on filesystem. See Also provides additional navigation. |
| 4.5 | Prerequisites stated or linked | N/A | Resource/index page; no prerequisite knowledge required. |
| 4.6 | Out-of-scope is clear | PASS | Community resources explicitly labelled as external and not officially reviewed. |
| 4.7 | Information type per section correct | PASS | `purpose: reference` — structural linking content is appropriate for a reference/resource index. |
| 4.8 | No content duplication from adjacent sections | PASS | No content repeated from neighbouring pages. Minor: `operator-toolbox` linked in Official guides AND See Also (duplicate target); `faq` linked in Official guides AND See Also (duplicate target). Both are target duplicates within the same page, not cross-page duplication. Below FAIL threshold — noted as INFO. |
| 4.9 | Section orientation page present | N/A | Page-level check; not a section root. |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check. Page also orphaned from nav. |

**Category 4 verdict:** PASS — 0 checks fail. INFO: `operator-toolbox` and `faq` linked twice within the page (Official guides + See Also).

---

## Category 5 — LAYOUT & COMPONENTS

Component approval: read `docs-guide/policies/component-layout-decisions.mdx` at batch start.

`pageType: reference` matrix — Required: `Reference` section; Preferred: `ParamField`, `ResponseField`, `CodeGroup`, `Tabs`, `Table`; Avoid: `TODO/TBD/Coming Soon`.

Components used:
- `CardGroup`/`Card` (lines 20–91, 137–141) — Not in Preferred list for `reference`. Present in `landing`, `overview`, `guide`, `resource` Preferred columns.
- `StyledTable`/`TableRow`/`TableCell` (lines 99–120) — Custom wrappers. `Table` (parent) is Preferred for `reference`.
- `CustomDivider` (lines 16, 93, 122, 133) — Not listed in `reference` Preferred or Avoid columns.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | FAIL | `reference` requires a `Reference` section; none present. Content is a curated index, aligning with `resource` more than `reference`. Human decision required — BD-1. |
| 5.2 | Required sections present | FAIL | `reference` requires `Reference` section header. Absent. |
| 5.3 | Only approved components used | NOT-TESTED | `CardGroup`/`Card` not in Preferred list for `reference`; `StyledTable` wrappers and `CustomDivider` not in `reference` column. File read (P22); full approval status NOT-TESTED. |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon rendered content. No MDX-comment-only content counted (P78). |
| 5.5 | Information type → component mapping correct | NOT-TESTED | Dependent on BD-1 resolution. |
| 5.6 | MDX renders clean | PASS | No broken JSX, no unclosed tags visible. Imports are standard project paths. |
| 5.7 | No old-schema frontmatter | PASS | No deprecated 12-type values in `pageType`. `status: review` is a wrong-enum value (flagged in 1.8), not an old-schema remnant. |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS. |
| 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports; correct paths. |

**Category 5 verdict:** FAIL — 2 checks fail (5.1, 5.2); 2 NOT-TESTED (5.3, 5.5).

---

## Category 6 — VERACITY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | NOT-TESTED | Card descriptions are structural linking content, not factual claims. Community entries are attributed to named sources with dates. |
| 6.2 | Code/commands tested | N/A | No code blocks or CLI commands. |
| 6.3 | No deprecated API usage | N/A | No API references. |
| 6.4 | Numbers are real | NOT-TESTED | Community resource dates: `Nov 2025`, `2021`. These are attribution dates (LOW staleness tier per P77 — rarely changes). |
| 6.5 | REVIEW flags for unverified claims | PASS | No factual claims requiring REVIEW flags. Page is a navigation index. |
| 6.6 | `veracityStatus` honest | FAIL | Field absent (flagged under 1.8). |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references. |
| 6.8 | Source staleness check | NOT-TESTED | Community guide from Forum 2021 (5 years old). Attribution is stated; community resource disclaimer at line 97 covers this. LOW risk. |
| 6.9 | No open-ended research tasks | PASS | No open-ended research tasks present. |

**Category 6 verdict:** FAIL — 1 check fails (6.6); 3 NOT-TESTED (6.1, 6.4, 6.8).

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | FAIL | `v2/orchestrators/resources/x-guides` not in docs.json. Confirmed: lines 2968–2987 contain all orchestrators/resources entries; this file absent. |
| 7.2 | Navigation matches file system | N/A | Page not in docs.json; no nav entry to mismatch. |
| 7.3 | Tab entry portal routes to all sections | N/A | Page-level check. |
| 7.4 | No structural orphans | FAIL | Page is a structural orphan — not reachable from any navigation path. |
| 7.5 | Audience journey complete | N/A | Tab-level check. |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check. |
| 7.7 | File in correct lane | PASS | File is in `v2/orchestrators/resources/` (publishable lane). |
| 7.8 | File naming conventions | FAIL | `x-` prefix conventionally marks deprecated/archived content per v2 folder governance. This file contains active curated content, not deprecated material. Naming/intent mismatch — human decision required (BD-2). |
| 7.9 | `_workspace/` TTL compliance | N/A | Not in `_workspace/`. |

**Category 7 verdict:** FAIL — 3 checks fail (7.1, 7.4, 7.8).

---

## Category 8 — LINKS & RENDERING

Internal link verification (P33 — full paths confirmed against filesystem):

| Link target | Verified |
|---|---|
| `/v2/orchestrators/guides/deployment-details/join-a-pool` | EXISTS |
| `/v2/orchestrators/guides/advanced-operations/pool-operators` | EXISTS |
| `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` | EXISTS |
| `/v2/orchestrators/setup/rcs-requirements` | EXISTS |
| `/v2/orchestrators/guides/staking-and-rewards/earning-model` | EXISTS |
| `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` | EXISTS |
| `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` | EXISTS |
| `/v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox` | EXISTS |
| `/v2/orchestrators/resources/technical/cli-flags` | EXISTS |
| `/v2/orchestrators/resources/faq` | EXISTS |
| `/v2/orchestrators/resources/community-pools` | EXISTS |

External links present (live status NOT-TESTED):
- `https://discord.gg/livepeer`
- `https://forum.livepeer.org/c/transcoders/7`
- `https://www.livepeer.cloud/...` (community guide)
- `https://www.speedybird.xyz/?page_id=339` (community guide)
- `https://forum.livepeer.org/t/bash-script-to-update-livepeer/1513`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | All 11 distinct internal link targets verified as existing on filesystem (P33 — full paths checked). |
| 8.2 | All external links live | NOT-TESTED | 5 external links; live status not checked in this run. |
| 8.3 | All snippet imports resolve | PASS | Standard project import paths. Conventions consistent with other checked pages. |
| 8.4 | All images load | N/A | No images on page. OG image block absent (flagged 1.12). |
| 8.5 | Page renders without error | PASS | No JSX errors, no unclosed tags, no obvious import errors. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | None found. |

**Category 8 verdict:** PASS — 0 FAILs; 1 NOT-TESTED (8.2).

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human review sign-off. `lastVerified: 2026-03-10` is a date field, not a sign-off record. `status: review` is a wrong-enum value (flagged 1.8). |
| 9.2 | All consuming decisions in registry | NOT-TESTED | No decisions explicitly identified as consumed by this page beyond BD-2 (naming/intent). Decision-registry.md not read in this session. |
| 9.3 | Gate prerequisites met | FAIL | No IA approval, no terminology lock, no content pass gate open for Orchestrators tab. |
| 9.4 | Phase ordering respected | NOT-TESTED | Cannot verify without pipeline history. |
| 9.5 | Findings gathered before fixes | NOT-TESTED | Cannot verify. |
| 9.6 | Feedback routed | NOT-TESTED | Cannot verify. |

**Category 9 verdict:** FAIL — 2 checks fail (9.1, 9.3); 4 NOT-TESTED (9.2, 9.4, 9.5, 9.6).

---

## Spelling / Typo Pass

Scanned: headings, card titles, card descriptions, table cells, link text, body prose.
- No typos detected.

---

## Blocking Decisions

**BD-1: `pageType: reference` vs `pageType: resource`**
Content is a curated link index (cards + community table). This pattern aligns with `pageType: resource` (Preferred: Card, CardGroup, Table) rather than `pageType: reference` (Preferred: ParamField, ResponseField — technical spec format). `reference` is schema-valid; this is an editorial mismatch, not a schema error.
- Option A: Keep `pageType: reference` — add a `## Reference` section heading to satisfy check 5.2. Layout mismatch persists.
- Option B: Change to `pageType: resource` — resolves checks 5.1 and 5.2; CardGroup becomes preferred; aligns template to content pattern.
Resolve before executing F-10.

**BD-2: `x-` filename prefix vs active content**
`x-` prefix marks deprecated/archived content per v2 folder governance. This file contains active, curated content.
- Option A: File is active — rename to `guides.mdx`, add to docs.json under orchestrators/resources.
- Option B: File is deprecated/superseded — move to `x-deprecated/` folder, confirm replacement page exists.
Resolve before executing F-11.

---

## Verdict Summary

**Total FAIL count:** 19
**FAIL check IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 3.1, 3.2, 5.1, 5.2, 6.6, 7.1, 7.4, 7.8, 9.1, 9.3
**BORDERLINE count:** 1 (check 2.4 — line 97 `not officially reviewed` disclaimer; human review required)
**NOT-TESTED count:** 11 (5.3, 5.5, 6.1, 6.4, 6.8, 8.2, 9.2, 9.4, 9.5, 9.6) — not counted as FAILs (P59)
**PASS count:** 29

**Overall verdict: NEEDS WORK** — 19 failing checks. Two blocking decisions (BD-1, BD-2) require human resolution before F-10 and F-11 can be executed.

---

## Fix List

**F-01** — [ATOMIC P39/P57/P84 — checks 1.8] Change `status: 'review'` → `status: draft` AND add `veracityStatus: unverified`. Both changes in one edit. Do not apply one without the other.

**F-02** — [P30/check 1.11] Remove em-dash from `description` field. Replace:
`Curated guides for running and optimising a Livepeer orchestrator — setup references, earnings strategy, community how-tos, and Discord resources.`
with:
`Curated guides for running and optimising a Livepeer orchestrator: setup references, earnings strategy, community how-tos, and Discord resources.`
(Colon replaces em-dash; no new em-dashes introduced — P75 verified.)

**F-03** — [checks 1.1, 1.6] Add `complexity: intermediate` to frontmatter. Proposed value — confirm before applying.

**F-04** — [checks 1.1, 1.7] Add `lifecycleStage: operate` to frontmatter. Proposed value — confirm before applying.

**F-05** — [checks 1.1, 1.13] Add `keywords` field. Proposed:
```
keywords:
  - livepeer orchestrator guides
  - community resources orchestrator
  - livepeer monitoring guides
  - AI inference pipeline setup
```
Confirm before applying.

**F-06** — [checks 1.1, 1.12] Add OG image block. Proposed:
```
'og:image': /snippets/assets/site/og-image/en/orchestrators.png
'og:image:alt': Livepeer Docs social preview image for Orchestrators
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
```
Confirm correct image path before applying.

**F-07** — [checks 1.9, P41] Add `industry` field. Proposed: `industry: [technical, livepeer]` — confirm before applying.

**F-08** — [checks 1.10, P41] Add `niche` field. Proposed: `niche: [web3, infrastructure]` — confirm before applying.

**F-09** — [checks 3.1, 3.2] Rename `## See Also` heading. `See Also` is Banned-tier. Proposed replacement: `## Related Resources`. (P75 verified: no em-dash, no banned term introduced; `Related` is OK-tier per P55, `Resources` is OK-tier per check 3.2.) Confirm before applying.

**F-10** — [checks 5.1, 5.2 — conditional on BD-1]
- If BD-1 → Option B: change `pageType: 'reference'` → `pageType: resource`. Resolves template and required-section mismatch.
- If BD-1 → Option A: add `## Reference` as a wrapper heading to the existing content structure. Do not execute until BD-1 is resolved.

**F-11** — [checks 7.1, 7.4, 7.8 — conditional on BD-2]
- If BD-2 → Option A: rename `x-guides.mdx` to `guides.mdx` and add `v2/orchestrators/resources/guides` to docs.json navigation under the Resources section (after `community-pools` entry at line 2972).
- If BD-2 → Option B: confirm file is deprecated, move to `x-deprecated/` folder within resources, remove from publishable lane.
Do not execute until BD-2 is resolved.
