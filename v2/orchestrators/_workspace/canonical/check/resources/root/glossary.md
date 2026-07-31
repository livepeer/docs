# Per-Page Quality Check Report
## `v2/orchestrators/resources/glossary.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (line 2970)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Orchestrator Terminology Glossary` | PASS | |
| `sidebarTitle` | Yes | `Glossary` | PASS | |
| `description` | Yes | `Terminology and concept definitions for Livepeer orchestrators - deployment axes, node modes, staking terms, and key infrastructure concepts.` | FAIL | Uses hyphen `-` as separator instead of em-dash (acceptable here — hyphens are correct). However single quotes wrap the field. 147 chars. Subject-first. PASS on content. Hyphens used correctly. |
| `pageType` | Yes | `glossary` | FAIL | `glossary` is a deprecated alias. Correct migration: `pageType: reference` + `pageVariant: compendium` (check 1.2) |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | Yes | `reference` | PASS | Canonical 15-value set |
| `complexity` | No | — | FAIL | Required field missing |
| `lifecycleStage` | No | — | FAIL | Required field missing |
| `keywords` | Yes | 7 values | PASS (partial) | See check 1.13 |
| OG image block | Yes | All 5 fields present | PASS | |
| `industry` | No | — | FAIL | Required (P41) |
| `niche` | No | — | FAIL | Required (P41) |
| `veracityStatus` | No | — | FAIL | Required |
| `status` | Yes | `current` | FAIL | `status: current` requires `veracityStatus: verified` AND zero REVIEW flags per checks.mdx §1.8. Page has REVIEW flags and unverified content. |

**Required field count:** 7/10 required fields present (missing: `complexity`, `lifecycleStage`, `veracityStatus`)

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1.1 | All 10 required fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `glossary` is deprecated. Migration: `pageType: reference` + `pageVariant: compendium` — confirm before applying |
| 1.3 | `pageVariant` valid if present | FAIL | `pageVariant` absent; required as co-fix with check 1.2 migration (P42) |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` is canonical |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | `veracityStatus` absent. `status: current` is incoherent per checks.mdx §1.8 — page has REVIEW flags (lines 128, 185, 195, 203, 245). Fix: change `status` to `draft`, add `veracityStatus: unverified` |
| 1.9 | `industry` valid | FAIL | Field absent (required per P41). Proposed: `industry: [technical, livepeer]` — confirm before applying |
| 1.10 | `niche` valid | FAIL | Field absent (required per P41). Proposed: `niche: [infrastructure, protocol]` — confirm before applying |
| 1.11 | `description` well-formed | PASS | Subject-first, 147 chars, UK English, no em-dashes, no self-reference |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | FAIL | `livepeer`, `terminology` are too generic. `orchestrator glossary` is better but still broad. Missing searcher-intent terms like `livepeer reward cut explained`, `orchestrator pool node vs pool operator` |

**Category 1 verdict:** FAIL — 9 checks fail: 1.1, 1.2, 1.3, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13

---

## Category 2 — VOICE & COPY

### UK English scan (check 2.1)
Candidate scan:
- `advertises` (line 240) — correct UK form.
- `recognised` — not found; `recognised` would be UK, `recognized` would be US. Not found.
- No `-ize` endings found. No `behavior/colour/center` US forms found.
PASS.

### Banned words scan (check 2.2)
Scanning body prose:
- `effectively` — line 117: `"Dual mode is not a separate protocol mode - it is the same orchestrator process with both video and AI capabilities enabled."` — NOT the word `effectively`. Checking — `effectively` not found in prose.
- `essentially` — not found.
- `basically` — not found.
- `meaningful` — not found.
- `significant` (intensifier) — not found.
- `various` — not found.
- `several` — not found.
- `obviously` — not found.
- `clearly` — not found.
PASS.

### Banned phrases scan (check 2.3)
- "This section covers" — not found.
- "This page covers" — not found.
- "Understanding X is essential" — not found.
- "It is important to note" — not found.
- "As mentioned above" — not found.
- "and so on"/"etc." — not found.
- "rather than" — not found.
- "what it takes" — not found.
PASS.

### Banned Construction Scan
| Line | Sentence | Pattern | Classification | Flag? |
|------|----------|---------|----------------|-------|
| 47 | "These axes are orthogonal - each can be selected independently of the others." | `can be selected` | Passive, not a value claim | No |
| 116 | "Dual mode is not a separate protocol mode..." | `not [X] as primary statement` | Partially a `not [X]` construction — but functions as a clarification, not a primary value statement in isolation. Context: the full sentence follows with the positive. | BORDERLINE |
| 117 | "This is the most common production configuration for operators with capable hardware (24 GB+ VRAM GPUs)." | — | No banned pattern | No |
| 341 | "The orchestrator documentation does not - it can treat on-chain as the default..." | `not [X]` | Clarification construction. Followed by positive. | BORDERLINE |

*Em-dashes not found in H2/H3 headings or description field (hyphens used instead — correct). No em-dashes in body prose.*

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | PASS | None found |
| 2.3 | Zero banned phrases | PASS | None found |
| 2.4 | Zero banned constructions | PASS | BORDERLINE items (lines 116, 341) are clarifications with positive statements following; not primary value-claim violations. |
| 2.5 | Opening order correct | PASS | Page opens with content definition ("A deployment is the complete configuration...") |
| 2.6 | Paragraph discipline | PASS | Definitions lead with the term and its definition |
| 2.7 | Audience register correct | PASS | Technical register appropriate for `orchestrator` audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up" or "the network rewards you for" found |
| 2.9 | No passive value statements | PASS | All value statements are direct |
| 2.10 | No hedging openers | PASS | Content opens with definition, not caveat |
| 2.11 | Terminology locked and consistent | PASS | Terminological consistency is the page's purpose; `dual mode`, `pool node`, `pool operator`, `O-T split` used consistently. Deprecated terms clearly labelled in their own section. |

**Category 2 verdict:** PASS

---

## Category 3 — SECTION NAMING & HEADINGS

### Heading Score Table
| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Notes |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| `Deployment` | 3 | 2 | 4 | 3 | 5 | 17/25 | Too generic as standalone; domain-anchor rule could improve (e.g. `Deployment Axes`) |
| `Node Mode` | 4 | 3 | 4 | 4 | 5 | 20/25 | Meets threshold |
| `Dual Mode` | 5 | 4 | 5 | 5 | 5 | 24/25 | Strong |
| `Deployment Type` | 4 | 3 | 4 | 4 | 4 | 19/25 | Slightly ambiguous without context; one point below threshold |
| `Protocol Terms` | 3 | 2 | 4 | 3 | 4 | 16/25 | Generic section label. Fails threshold. |
| `Operational Terms` | 3 | 2 | 4 | 3 | 4 | 16/25 | Generic section label. Fails threshold. |
| `Economic Terms` | 3 | 2 | 4 | 3 | 4 | 16/25 | Generic section label. Fails threshold. |
| `Deprecated Terms` | 4 | 3 | 5 | 4 | 4 | 20/25 | Clear purpose. Meets threshold. |
| `Operational Mode Asymmetry: Gateways vs Orchestrators` | 4 | 4 | 3 | 3 | 2 | 16/25 | Verbose; `X vs Y` pattern present (check 3.3). Fails threshold. |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 3.1 | Every heading ≥20/25 | FAIL | `Deployment` (17/25), `Deployment Type` (19/25), `Protocol Terms` (16/25), `Operational Terms` (16/25), `Economic Terms` (16/25), `Operational Mode Asymmetry: Gateways vs Orchestrators` (16/25) — 6 headings below threshold |
| 3.2 | No banned/weak standalone terms | PASS | No Banned-tier terms. `Deployment`, `Protocol Terms`, `Operational Terms`, `Economic Terms` are weak but none are in the strict Banned list. |
| 3.3 | No `X vs Y` headings | FAIL | `Operational Mode Asymmetry: Gateways vs Orchestrators` — contains a `Gateways vs Orchestrators` label |
| 3.4 | Domain-anchor rule applied | FAIL | `Deployment`, `Protocol Terms`, `Operational Terms`, `Economic Terms` lose meaning in isolation without domain anchor. `Orchestrator Deployment Axes` etc. would be more precise. |
| 3.5 | Heading names concept, not examples | PASS | Headings name categories, not specific examples |
| 3.6 | Title well-formed | PASS | `Orchestrator Terminology Glossary` — concept-derived, appropriate for reference page |
| 3.7 | Expert editorial choice | FAIL | `Protocol Terms`, `Operational Terms`, `Economic Terms` are bureaucratic/generic category labels that a senior editor would replace with more specific names |

**Category 3 verdict:** FAIL — 4 checks fail: 3.1, 3.3, 3.4, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 4.1 | One purpose, one audience, one job | PASS | Pure reference/glossary for orchestrators |
| 4.2 | Intro paragraph test | PASS | No intro paragraph; page opens directly with content |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | docs.json line 2970: `glossary` follows `faq` in Resources group |
| 4.4 | No dead ends | INFO | No explicit forward paths; reference pages may not require them. However, no `See Also` or navigation card at end of page. |
| 4.5 | Prerequisites stated or linked | N/A | Reference page; no prerequisites |
| 4.6 | Out-of-scope is clear | PASS | Gateway asymmetry section clearly labelled; deprecated terms section clearly labelled |
| 4.7 | Information type per section correct | PASS | `purpose: reference` → `factual, technical` — all sections deliver definitional factual content |
| 4.8 | No content duplication | PASS | No duplicate definitions within page |
| 4.9 | Section orientation page present | PASS | Resources group in docs.json provides section context |
| 4.10 | Cross-tab links at journey intersections | INFO | Gateway glossary cross-referenced in the comment block but not linked inline. The "Operational Mode Asymmetry" section is a natural junction point for cross-tab links to the Gateways tab. |

**Category 4 verdict:** PASS

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 5.1 | Correct template for pageType + pageVariant | PASS | Glossary using `StyledTable` for structured categories + `AccordionGroup` for term definitions is appropriate |
| 5.2 | Required sections present | PASS | Content structured; note the lack of a forward navigation element |
| 5.3 | Only approved components used | NOT-TESTED | `StyledTable`, `TableRow`, `TableCell`, `AccordionGroup`, `Accordion`, `Badge`, `Note`, `CustomDivider` — cannot confirm against approval file without reading `docs-guide/policies/component-layout-decisions.mdx` (per P22) |
| 5.4 | Avoided components absent | PASS | Accordion appropriate for glossary terms |
| 5.5 | Information type → component mapping correct | PASS | Structured tables for axes; accordions for term definitions; appropriate for reference/compendium |
| 5.6 | MDX renders clean | NOT-TESTED | |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: glossary` is deprecated. `status: current` without `veracityStatus: verified` is incoherent per §1.8. |
| 5.8 | CSS uses custom properties only | NOT-TESTED | `CustomDivider` has inline `style` prop: `style={{margin: "-1rem 0 -1rem 0"}}` — margin uses raw pixel values. Whether this violates the custom-properties rule requires reading the CSS policy. BORDERLINE. |
| 5.9 | Generated file banners | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | Imports from correct snippet paths |

**Category 5 verdict:** FAIL — 1 confirmed fail: 5.7. 1 BORDERLINE: 5.8.

---

## Category 6 — VERACITY

### Veracity Claims Inventory
| Claim | Location | Type | Status |
|-------|----------|------|--------|
| Active set size is a protocol parameter | Line 183–184 | factual | UNVERIFIED — REVIEW flag present (line 185): `{/* REVIEW: Confirm current active set size. Historically top-100. */}` — format is `{/* REVIEW: ... */}` but lacks named source. Partial compliance with 6.5. |
| Round = ~22 hours (5760 Ethereum L1 blocks) | Line 190 | factual | UNVERIFIED — HIGH staleness tier (P77: protocol-state figure). No REVIEW flag. |
| Gas cost: reward call on Arbitrum ~$0.01–0.12 per call | Line 193 | factual | UNVERIFIED — HIGH staleness (gas prices change). REVIEW flag present (line 195): `{/* REVIEW: Confirm current gas cost range for reward calls on Arbitrum. */}` — lacks named source. Partial. |
| Fee cut renamed or not in Explorer UI? | Line 203 | factual | UNVERIFIED — REVIEW flag present (line 203): `{/* REVIEW: Confirm whether fee cut is still called "fee cut" in the current Explorer UI or if it has been renamed. */}` — lacks named source. |
| Warm model limit: typically one warm model per GPU during current beta | Lines 243–244 | factual | UNVERIFIED — REVIEW flag present (line 245): `{/* REVIEW: Confirm warm-per-GPU limit is still accurate. */}` — lacks named source. |
| Dual mode requires combining flags (additive configuration) | Line 128 | factual | UNVERIFIED — REVIEW flag present (line 128): `{/* REVIEW: Confirm whether dual mode requires any additional flags beyond combining video + AI flags, or if it's purely additive configuration. */}` — lacks named source. |
| Gas cost: ticket redemption on Arbitrum TicketBroker | Line 267 | factual | UNVERIFIED — no REVIEW flag |
| Broadcaster flag replaced by -gateway (post-2023) | Lines 294–296 | factual | UNVERIFIED — HIGH staleness potential |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 6.1 | Every factual claim citable | FAIL | Round length, reward gas cost, warm model limit, ticket redemption gas — uncited |
| 6.2 | Code/commands tested | N/A | No executable commands |
| 6.3 | No deprecated API usage | PASS | No deprecated API usage; deprecated terms are explicitly labelled as deprecated |
| 6.4 | Numbers are real and sourced | FAIL | `$0.01–0.12` gas cost (line 193), `22 hours` / `5760 blocks` (line 190) — uncited |
| 6.5 | REVIEW flags correct format | FAIL | All REVIEW flags present use `{/* REVIEW: [claim] */}` format but OMIT the required `— [named source]` component. Per checks.mdx §6.5: only `{/* REVIEW: [claim] — [named source] */}` satisfies this check. |
| 6.6 | `veracityStatus` honest | FAIL | `status: current` set but content has 5+ REVIEW flags and uncited protocol-state figures. `veracityStatus` absent. |
| 6.7 | Authoritative vs AI-generated glossary entries | FAIL | Definitions appear well-structured but are AI-generated without source citations. Protocol-state definitions (active set size, round length) need authoritative source attribution. |
| 6.8 | Source staleness | FAIL | Gas cost range (line 193) is highly time-sensitive; `$0.01–0.12` may be stale. Reward call mechanics subject to protocol upgrades. |
| 6.9 | No open-ended research tasks | FAIL | TODO block (lines 25–38) contains open-ended tasks without named sources. REVIEW flags exist but lack named sources. |

**Category 6 verdict:** FAIL — 7 checks fail: 6.1, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2970: `"v2/orchestrators/resources/glossary"` |
| 7.2 | Navigation matches file system | PASS | File at correct path |
| 7.3 | Tab entry portal routes to all sections | NOT-TESTED | |
| 7.4 | No structural orphans | PASS | In docs.json and cross-referenced from other pages |
| 7.5 | Audience journey complete | PASS | Glossary is a reference support page; correctly positioned |
| 7.6 | Cross-tab graduation paths | INFO | Gateway glossary is the natural cross-tab link (referenced in comment but not in nav). Worth a `See Also` card pointing to Gateway glossary. |
| 7.7 | File in correct lane | PASS | Glossary in `resources/` — correct |
| 7.8 | File naming conventions | PASS | `glossary.mdx` — no `x-` prefix |
| 7.9 | `_workspace/` TTL compliance | N/A | Published file |

**Category 7 verdict:** PASS

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 8.1 | Internal links resolve | PASS | No internal links in body content |
| 8.2 | External links live | NOT-TESTED | No external links in body content |
| 8.3 | Snippet imports resolve | PASS | `StyledTable`, `CustomDivider` imported from correct paths |
| 8.4 | Images load | N/A | No images |
| 8.5 | Page renders without error | NOT-TESTED | |
| 8.6 | No TODO/TBD/Coming Soon | FAIL | TODO block lines 25–38 in published source |

**Category 8 verdict:** FAIL — 1 confirmed fail: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 9.1 | Human sign-off recorded | FAIL | No sign-off; TODO block lists items requiring human review |
| 9.2 | All consuming decisions in registry | NOT-TESTED | |
| 9.3 | Gate prerequisites met | FAIL | `status: current` without `veracityStatus: verified` violates §1.8; page not past content pass gate |
| 9.4 | Phase ordering respected | FAIL | TODO block indicates authoring skill and voice conversion not yet applied |
| 9.5 | Findings gathered before fixes | N/A | Check report |
| 9.6 | Feedback routed | FAIL | TODO block items unrouted |

**Category 9 verdict:** FAIL — 4 checks fail: 9.1, 9.3, 9.4, 9.6

---

## Cross-Category Connections

**Root cause 1 — Deprecated `pageType` (1.2, 1.3, 5.7):** `pageType: glossary` drives failures in checks 1.2, 1.3, and 5.7. Single co-fix: `pageType: reference` + `pageVariant: compendium`.

**Root cause 2 — `status: current` without verified content (1.8, 6.6, 9.3):** The page claims `status: current` but has 6 open REVIEW flags and uncited protocol-state figures. Fix: change to `status: draft` + `veracityStatus: unverified`.

**Root cause 3 — Missing taxonomy fields (1.1, 1.6, 1.7, 1.9, 1.10):** Four required fields absent. Single taxonomy pass resolves all.

**Root cause 4 — REVIEW flags missing named sources (6.1, 6.4, 6.5, 6.8, 6.9):** All 5 REVIEW flags present but incomplete (no `— [named source]` component). Each flag needs a source added.

**Root cause 5 — Generic section headings (3.1, 3.3, 3.4, 3.7):** `Protocol Terms`, `Operational Terms`, `Economic Terms` are weak category labels. `Operational Mode Asymmetry: Gateways vs Orchestrators` has `X vs Y` pattern. Heading improvement pass needed.

---

## Blocking Decisions

None. All failures have single-correct fixes.

---

## Verdict Summary

**Overall: NEEDS WORK**

**Confirmed fail checks:** 1.1, 1.2, 1.3, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.3, 3.4, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 8.6, 9.1, 9.3, 9.4, 9.6 — **26 confirmed FAILs**
**NOT-TESTED checks:** 5.3, 5.6, 6.2, 8.2, 8.5, 9.2
**BORDERLINE checks:** 5.8 (CustomDivider inline style), 2.4 (line 116/341 `not [X]` clarifications)

---

## Prioritised Fix List

**F-01 — CRITICAL — Migrate deprecated `pageType` and add `pageVariant`**
Change `pageType: glossary` to `pageType: reference`.
Add `pageVariant: compendium`.
— confirm before applying.
Fixes: 1.2, 1.3, 5.7

**F-02 — CRITICAL — Fix `status`/`veracityStatus` incoherence**
Change `status: current` to `status: draft`.
Add `veracityStatus: unverified`.
— confirm before applying.
Fixes: 1.8, 6.6, 9.3

**F-03 — HIGH — Add missing required frontmatter fields**
Add the following — confirm before applying:
- `complexity: intermediate`
- `lifecycleStage: operate`
- `industry: [technical, livepeer]`
- `niche: [infrastructure, protocol]`
Fixes: 1.1, 1.6, 1.7, 1.9, 1.10

**F-04 — HIGH — Add named sources to all REVIEW flags**
Each of the 5 REVIEW flags must have `— [named source]` appended:
- Line 185: `{/* REVIEW: Confirm current active set size — source: Livepeer BondingManager contract or Explorer active set parameter */}`
- Line 195: `{/* REVIEW: Confirm current gas cost range for reward calls on Arbitrum — source: recent Arbiscan transaction history for Reward() calls */}`
- Line 203: `{/* REVIEW: Confirm whether fee cut is still called "fee cut" in the current Explorer UI — source: explorer.livepeer.org interface */}`
- Line 245: `{/* REVIEW: Confirm warm-per-GPU limit is still accurate — source: go-livepeer AI worker docs or aiModels.json spec */}`
- Line 128: `{/* REVIEW: Confirm whether dual mode requires any additional flags beyond combining video + AI flags — source: go-livepeer README or CLI flags reference */}`
Also add REVIEW flag for round length (line 190): `{/* REVIEW: Round length (5760 Ethereum L1 blocks, ~22 hours) — source: Livepeer RoundsManager contract */}`
Fixes: 6.1, 6.4, 6.5, 6.9

**F-05 — HIGH — Rename weak section headings**
`## Deployment` → `## Deployment Axes` (domain-anchor applied)
`## Deployment Type` → `## Deployment Types` (plural, clearer)
`## Protocol Terms` → `## Protocol Concepts` (marginally more precise; or `## On-Chain Terms`)
`## Operational Terms` → `## Node and Process Terms`
`## Economic Terms` → `## Earnings and Pricing Terms`
`## Operational Mode Asymmetry: Gateways vs Orchestrators` → `## Gateway and Orchestrator Mode Differences`
All proposed replacements checked against check 3.2 prohibited list — none contain Banned-tier terms. Confirm before applying.
Fixes: 3.1 (partial), 3.3, 3.4, 3.7

**F-06 — MEDIUM — Improve keyword specificity**
Replace generic keywords with searcher-intent terms. Proposed — confirm before applying:
`livepeer orchestrator terminology`, `reward cut fee cut difference`, `go-livepeer deployment types`, `active set livepeer`, `pool node vs solo operator`, `probabilistic micropayment livepeer`
Fixes: 1.13
