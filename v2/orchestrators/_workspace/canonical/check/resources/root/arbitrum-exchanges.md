# Per-Page Quality Check Report
## `v2/orchestrators/resources/arbitrum-exchanges.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (line 2980 — CONFIRMED IN NAV, under "Resources > Technical Reference" group)
**Learnings applied:** P1–P90

---

## Pre-Check: File Integrity

Lines 1–10 read. File opens with `---` frontmatter delimiter at line 1. No content before the opening delimiter.

No corrupt prefix detected.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | `Arbitrum Exchanges` | PASS | Well-formed |
| sidebarTitle | Yes | `Exchanges & Bridges` | PASS | Informative short form with `&` — no em-dash |
| description | Yes | `'Where to acquire ETH (for gas) and LPT (for staking) on Arbitrum One — exchanges, bridges, and DEXs for Livepeer orchestrators.'` | FAIL | Contains em-dash (—) at `One — exchanges` — P30/check 1.11 violation |
| pageType | Yes | `reference` | PASS | Valid 7-type canonical value |
| audience | Yes | `orchestrator` | PASS | Valid 7-token value |
| purpose | Yes | `reference` | PASS | Valid 15-value canonical set — read directly from file (P15) |
| complexity | No | — | FAIL | Required field missing |
| lifecycleStage | No | — | FAIL | Required field missing |
| keywords | Yes | 8 entries: `livepeer`, `orchestrator`, `arbitrum`, `exchanges`, `LPT`, `ETH`, `bridge`, `Uniswap`, `staking` | PASS | Generally appropriate; `livepeer` and `orchestrator` are weak but specific terms (`Uniswap`, `bridge`, `arbitrum`) compensate |
| og:image block | Yes | All 5 OG fields present, path `/snippets/assets/site/og-image/en/orchestrators.png` | PASS | Complete; asset confirmed on disk |
| veracityStatus | No | — | FAIL | Required field missing |
| industry | No | — | FAIL | Required — user-confirmed Batch 1 (P41) |
| niche | No | — | FAIL | Required — user-confirmed Batch 1 (P41) |
| status | Yes | `review` | FAIL | Invalid enum. Valid values: `current`, `draft` only (P57) |

**Required field count:** 7/10 present (missing: `complexity`, `lifecycleStage`, `veracityStatus`)
**Additional required fields missing:** `industry`, `niche`

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is valid |
| 1.3 | `pageVariant` valid if present | N/A | Not present; no deprecated pageType migration |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` — read directly from file |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: review` wrong enum. Atomic fix (P84): change `status: review` to `status: draft` AND add `veracityStatus: unverified`. |
| 1.9 | `industry` array valid if present | FAIL | Field absent — required (P41). Proposed: `industry: [finance, technical]` — confirm before applying (P51) |
| 1.10 | `niche` array valid if present | FAIL | Field absent — required (P41). Proposed: `niche: [web3, tokenomics]` — confirm before applying (P51) |
| 1.11 | `description` well-formed | FAIL | Em-dash (—) at `"Arbitrum One — exchanges"`. P30/P74 violation. Otherwise: 107 chars (within 160), subject-first, UK English — all pass |
| 1.12 | OG image block complete | PASS | All 5 OG fields present; asset confirmed on disk |
| 1.13 | `keywords` field quality | PASS | Includes specific terms: `Uniswap`, `arbitrum`, `bridge`, `LPT` — searcher-intent-aligned |

**Category 1 verdict: 7 FAILs (1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11)**

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — candidates listed even when PASS):**

Candidates checked: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`.

- Line 53: "Orchestrators need two tokens on Arbitrum One:" — no banned words
- Line 62: "ETH is the gas token on Arbitrum One. Gas costs are **significantly** lower than Ethereum L1." — `significantly` IS a banned word (check 2.2)
- Line 92: "LPT is the Livepeer protocol token." — no banned words
- Table cells: scanning — no other banned words found
- Line 147: "The LPT required to enter the active set changes over time as orchestrators join and leave." — no banned words

**Banned word found:** Line 62: `significantly` — FAIL check 2.2

**Banned phrase scan:**
- "rather than" — absent
- "and so on" / "etc." — absent
- "This section covers" / "This page covers" — absent
- "not just X" — absent
- "depends on various" — absent

No banned phrases found.

**Banned Construction Scan (P58 — completed before check 2.4 result set):**

Em-dash scan (P74 — three explicit scan targets):
1. `description` field (line 4): `"Arbitrum One — exchanges, bridges, and DEXs"` — em-dash present — FAIL (P30, tracked in F-02)
2. H2/H3 heading text: "ETH on Arbitrum", "Getting ETH to Arbitrum", "LPT on Arbitrum", "Acquiring LPT", "LPT Contract Address (Arbitrum One)", "How Much Do You Need?", "See Also" — no em-dashes in heading text
3. Body prose: scanning lines 53–171 — no em-dashes in body prose

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 4 | `Arbitrum One — exchanges, bridges, and DEXs` | em-dash | P30 violation (description field) | YES — F-02 |
| 62 | "Gas costs are **significantly** lower than Ethereum L1." | banned word | Check 2.2 — not check 2.4 (per P54) | YES — F-08 |
| 111 | "Some CEXs list LPT — check whether they support Arbitrum One withdrawals directly, or only Ethereum L1 (which would require a subsequent bridge)." | em-dash | P30 violation (body prose) | YES — F-09 |
| 137 | "0.01–0.05 ETH is sufficient for weeks of operation at current Arbitrum gas prices" | — | `current` used as adjective, not intensifier. Range given. | PASS |
| 147 | "The LPT required to enter the active set changes over time as orchestrators join and leave." | — | Factual statement | PASS |
| 147 | "The threshold has historically ranged from a few hundred to multiple thousand LPT." | `can/may` | No `can/may` present | PASS |

Additional em-dash check: line 111 body prose `"— check whether they support"` — em-dash in body prose — FAIL (P30, tracked in F-09).

Per P62: em-dashes alone are not check 2.4 violations. Check 2.4 covers the banned construction patterns. No banned constructions found beyond em-dashes.

Check 2.4 note: "Em-dashes tracked under P30 — see F-02, F-09 in fix list."

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings: no `-ize` endings, `centralised` (line 85), `organisation` patterns not present but no US variants found either |
| 2.2 | Zero banned words | FAIL | Line 62: `significantly` — banned word (check 2.2). Quote: "Gas costs are **significantly** lower than Ethereum L1." |
| 2.3 | Zero banned phrases | PASS | None found |
| 2.4 | Zero banned constructions | PASS | No banned construction patterns. Em-dashes tracked under P30 — see F-02, F-09. Not a check 2.4 violation per P62. |
| 2.5 | Opening order correct | PASS | Opens with subject: "Orchestrators need two tokens on Arbitrum One:" — fact first, no caveat opener |
| 2.6 | Paragraph discipline | PASS | Short prose sections; lead sentences state facts. Note at line 147 ends on concrete data reference. |
| 2.7 | Audience register correct | PASS | Peer-technical register appropriate for `orchestrator` audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found |
| 2.9 | No passive value statements | FAIL | Line 62: "Gas costs are **significantly** lower than Ethereum L1." — `significantly` is a vague intensifier (no %). Rewrite: provide a concrete figure or link. Note: this finding also supports the check 2.2 banned word FAIL. |
| 2.10 | No hedging openers | PASS | Opens with concrete statement |
| 2.11 | Terminology locked and consistent | PASS | `LPT`, `orchestrator`, `active set`, `ETH`, `DEX` used consistently |

**Category 2 verdict: 2 FAILs (2.2, 2.9)**

Note: Check 2.9 and check 2.2 share the same root cause (line 62 `significantly`). Both appear in the FAIL list per P80. Fix is identical — see F-08.

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading Score Table (P2 — per-dimension breakdown):**

Note: "Related Pages" exemption applies only to exact heading text "Related Pages" (P16, P53). "See Also" is Banned-tier and is scored and checked normally.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| ETH on Arbitrum | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Getting ETH to Arbitrum | 4 | 3 | 4 | 5 | 4 | 20/25 |
| LPT on Arbitrum | 5 | 4 | 5 | 5 | 5 | 24/25 |
| Acquiring LPT | 4 | 3 | 4 | 5 | 5 | 21/25 |
| LPT Contract Address (Arbitrum One) | 5 | 5 | 5 | 5 | 4 | 24/25 |
| How Much Do You Need? | 2 | 2 | 3 | 3 | 4 | 14/25 — FAIL |
| See Also | 1 | 1 | 1 | 2 | 3 | 8/25 — FAIL |

Failing headings: `How Much Do You Need?` (14/25 — question form, P63: check 3.1 failure not check 3.2), `See Also` (8/25 — Banned-tier, check 3.2).

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | `How Much Do You Need?` 14/25 (question-form heading — check 3.1 failure per P63, not check 3.2). `See Also` 8/25. Multiple failures = one check 3.1 FAIL (P85) |
| 3.2 | No banned or weak standalone heading terms | FAIL | `See Also` is Banned-tier per checks.mdx §3.2. P53: only "Related Pages" is exempt. `How Much Do You Need?` is a check 3.1 failure (question form, P63) — not a check 3.2 violation |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | PASS | All headings include domain noun (ETH, LPT, Arbitrum) where needed |
| 3.5 | Heading names concept, not examples | PASS | Headings categorise by concept, not by examples |
| 3.6 | Title well-formed | PASS | "Arbitrum Exchanges" — concept-derived, two words |
| 3.7 | Sounds like expert editorial choice | BORDERLINE | `Getting ETH to Arbitrum` reads like a task description. A more expert form: `ETH Acquisition Routes` or `Bridge Options`. Human decision recommended. `How Much Do You Need?` is question-form — see F-05. |

**Category 3 verdict: 2 FAILs (3.1, 3.2)**

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | One audience: orchestrators. One job: find ETH and LPT on Arbitrum One. |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator acquire ETH and LPT on Arbitrum One." — resolves cleanly |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | docs.json position: Technical Reference group (line 2974–2981). Positioned after `arbitrum-rpc` (line 2979), `arbitrum-exchanges` is last in the Technical Reference group (line 2980). Reader arriving from Arbitrum RPCs has appropriate network context. (P25 — confirmed from docs.json) |
| 4.4 | No dead ends | PASS | "See Also" CardGroup provides next steps: Arbitrum RPCs, Staking LPT, Contract Addresses |
| 4.5 | Prerequisites stated or linked | PASS | Page opens with a clear two-token prerequisite statement (ETH for gas, LPT for staking) |
| 4.6 | Out-of-scope is clear | PASS | Page scope is narrow (acquiring ETH and LPT on Arbitrum One) — out-of-scope is implicit |
| 4.7 | Information type per section correct | PASS | `purpose: reference` — structural/reference tables throughout |
| 4.8 | No content duplication from adjacent sections | PASS | No duplication with adjacent arbitrum-rpc page |
| 4.9 | Section orientation page present | N/A | Page-level check |
| 4.10 | Cross-tab links at journey intersections | FAIL | Zero cross-tab links. `/v2/orchestrators/setup/connect-and-activate` and `/v2/orchestrators/resources/technical/x-contract-addresses` in "See Also" are both within the same tab. A cross-tab link to `/v2/lpt/` (delegators — LPT staking) would be appropriate. |

**Category 4 verdict: 1 FAIL (4.10)**

---

## Category 5 — LAYOUT & COMPONENTS

For `pageType: reference` — Preferred: ParamField, ResponseField, CodeGroup, Tabs, Table. Avoid: TODO/TBD/Coming Soon. Required: Reference section.

Note: `component-layout-decisions.mdx` not read in this session. Results based on quick-reference matrix from checks.mdx §5 (P72).

**Component Matrix:**

| Component | Used? | Appropriate for `reference`? | Notes |
|---|---|---|---|
| StyledTable | Yes | YES — preferred | Used throughout |
| TableRow / TableCell | Yes | YES | Part of StyledTable |
| CustomDivider | Yes | YES | Structural spacing |
| Warning | Yes | YES | Safety callout for contract address |
| Note | Yes | YES | Context callout |
| CardGroup / Card | Yes | YES | Navigation footer |
| Code block (inline ``` ```) | Yes | YES (CodeGroup preferred, but inline code block acceptable) | Used for LPT contract address and curl command |

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | `reference` with table-based sections — appropriate |
| 5.2 | Required sections present | PASS | Reference content present throughout |
| 5.3 | Only approved components used | PASS | All components appropriate per quick-reference matrix |
| 5.4 | Avoided components absent | PASS | Lines 26–48: `{/* TODO */}` block is MDX comment — not rendered (P78). No rendered TODO/TBD/Coming Soon. |
| 5.5 | Information type to component mapping | PASS | Reference tables for exchange options; code block for contract address and curl command |
| 5.6 | MDX renders clean | PASS | No unclosed tags; all components have correct JSX structure |
| 5.7 | No old-schema frontmatter | FAIL | `status: review` is not a valid enum value — wrong enum (P57) |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct paths |

**Category 5 verdict: 1 FAIL (5.7)**

---

## Category 6 — VERACITY

**Key veracity claims inventory:**

1. LPT contract address: `0x289ba1701C2F088cf0faf8B3705246331cB8A839` (line 118) — CRITICAL to verify; token contract addresses are authoritative facts
2. Arbitrum bridge time: "~10 minutes L1→L2, ~7 days L2→L1" (line 73) — technical/procedural claim
3. ETH estimate: "0.01–0.05 ETH is sufficient for weeks of operation" (line 137) — evaluative claim dependent on gas prices
4. LPT active set threshold: "The threshold has historically ranged from a few hundred to multiple thousand LPT" (line 147) — redirected to live Explorer (GOOD practice)
5. Provider rate limits table: Alchemy "300 CU/s (~100 req/s)", Infura "100k req/day", Chainstack "25 req/s" (not on this page — on arbitrum-rpc page)

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | NOT-TESTED | LPT contract address not cross-checked against Arbiscan in this session. Bridge times not verified against Arbitrum documentation. ETH estimate not sourced. External exchange URLs (bridge.arbitrum.io, hop.exchange, stargate.finance, app.uniswap.org) not verified live. |
| 6.2 | Code/commands tested | NOT-TESTED | No executable code blocks (contract address is a static string, not a command) |
| 6.3 | No deprecated API usage | N/A | No API references |
| 6.4 | Numbers are real | FAIL | Line 62: "Gas costs are **significantly** lower than Ethereum L1." — no figure provided. `significantly` is both a banned word (check 2.2) and a vague claim (check 2.4/2.9). Line 137: "0.01–0.05 ETH" — approximate range with no source citation. Staleness tier: HIGH (ETH gas prices change frequently, P77). Line 147 correctly redirects to Explorer for live data — PASS for that item. |
| 6.5 | REVIEW flags for unverified claims | FAIL | No `{/* REVIEW: */}` flags. `{/* TODO */}` block (lines 26–48) does not satisfy check 6.5 (P61). LPT contract address (line 118) has a Warning but no REVIEW flag. The Warning is good practice but does not satisfy check 6.5 format. Bridge time (~10 min, ~7 days) and ETH estimate are unverified claims with no REVIEW flags. |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. `status: review` wrong enum. Given multiple unverified claims, `veracityStatus: unverified` appropriate |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | ETH gas estimate (0.01–0.05 ETH) — staleness tier: HIGH (gas prices change frequently, P77). Bridge times — staleness tier: MEDIUM (protocol parameters change occasionally). LPT contract address — staleness tier: LOW (contract addresses rarely change). No staleness notation present for any claim. |
| 6.9 | No open-ended research tasks | FAIL | TODO block (lines 26–48) contains tasks with no named owner or deadline. Also: the LPT contract address requires cross-checking against Arbiscan but no named responsible person is specified. Both 6.9 FAIL and 6.5 FAIL (P70). |

**Category 6 verdict: 5 FAILs (6.4, 6.5, 6.6, 6.8, 6.9) — 2 NOT-TESTED (6.1, 6.2) — not counted in FAIL total (P59)**

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed at line 2980 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry |
| 7.3 | Tab entry portal routes to all sections | N/A | Page-level check |
| 7.4 | No structural orphans | PASS | Reachable via Resources > Technical Reference group |
| 7.5 | Audience journey complete | PASS | Appropriate position — orchestrator acquiring tokens before setup or activation |
| 7.6 | Cross-tab graduation paths exist | FAIL | Zero cross-tab links. LPT staking is also a delegator concern — a link to `/v2/lpt/` would bridge the journey. |
| 7.7 | File in correct lane | PASS | Publishable content in `v2/orchestrators/resources/` |
| 7.8 | File naming conventions | PASS | `arbitrum-exchanges.mdx` — standard filename |
| 7.9 | _workspace/ TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: 1 FAIL (7.6)**

---

## Category 8 — LINKS & RENDERING

Internal link verification (filesystem check):
- `/v2/orchestrators/resources/arbitrum-rpc` — EXISTS (confirmed)
- `/v2/orchestrators/setup/connect-and-activate` — EXISTS (confirmed)
- `/v2/orchestrators/resources/technical/x-contract-addresses` — EXISTS (confirmed)
- Explorer link `https://explorer.livepeer.org` — external (NOT-TESTED for live status)

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 3 internal links verified — all resolve |
| 8.2 | All external links live | NOT-TESTED | External links (bridge.arbitrum.io, hop.exchange, stargate.finance, app.uniswap.org, explorer.livepeer.org) not verified in this session |
| 8.3 | All snippet imports resolve | PASS | Tables.jsx and Divider.jsx both confirmed on disk |
| 8.4 | All images load | PASS | OG image `/snippets/assets/site/og-image/en/orchestrators.png` confirmed on disk |
| 8.5 | Page renders without error | PASS | No unclosed tags, correct JSX structure, imports resolve |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | `{/* TODO */}` block is MDX comment — not rendered (P78) |

**Category 8 verdict: 0 FAILs — 1 NOT-TESTED (8.2) — not counted in FAIL total (P59)**

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human review. `status: review` wrong enum and TODO block indicate page not approved |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions consumed by this page |
| 9.3 | Gate prerequisites met | FAIL | Wrong-enum status, missing required fields, multiple unverified claims — content-pass gate not met |
| 9.4 | Phase ordering respected | N/A | Cannot determine from page state |
| 9.5 | Findings gathered before fixes | N/A | Not evaluable |
| 9.6 | Feedback routed | N/A | Not evaluable |

**Category 9 verdict: 2 FAILs (9.1, 9.3)**

---

## Spelling/Typo Check

Scanning all visible text: headings, table cells, link text, prose, Note/Warning text, card titles.

- "centralised exchanges" (line 85) — correct UK English
- "Coinbase, Kraken, OKX" — properly capitalised
- "Uniswap" — correct capitalisation
- "LayerZero" (line 82) — correct
- All headings, table cells: no typos detected
- LPT contract address `0x289ba1701C2F088cf0faf8B3705246331cB8A839` — alphanumeric string; not a typo check candidate

No typos found.

---

## Cross-Category Connections

**Root Cause A:** `status: review` (wrong enum) + missing `veracityStatus`
Affects: 1.1, 1.8, 5.7, 9.1, 9.3
Fix: F-01 (atomic)

**Root Cause B:** Em-dash in description field (line 4) and body prose (line 111)
Affects: 1.11, Cat 2 P30
Fix: F-02 (description), F-09 (prose line 111)

**Root Cause C:** Missing required fields (`complexity`, `lifecycleStage`, `industry`, `niche`)
Affects: 1.1, 1.6, 1.7, 1.9, 1.10
Fix: F-03, F-04

**Root Cause D:** `significantly` (banned word + vague value claim)
Affects: 2.2, 2.9, 6.4
Fix: F-08

**Root Cause E:** TODO block — open-ended tasks, no owner
Affects: 6.5, 6.9
Fix: F-06

---

## Verdict Summary

**Total FAIL count:** 20
**FAIL check IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.9, 3.1, 3.2, 4.10, 5.7, 6.4, 6.5, 6.6, 6.8, 6.9, 7.6, 9.1, 9.3

*(Recount: Cat1 = 7 (1.1,1.6,1.7,1.8,1.9,1.10,1.11); Cat2 = 2 (2.2,2.9); Cat3 = 2 (3.1,3.2); Cat4 = 1 (4.10); Cat5 = 1 (5.7); Cat6 = 5 (6.4,6.5,6.6,6.8,6.9); Cat7 = 1 (7.6); Cat9 = 2 (9.1,9.3). Total: 7+2+2+1+1+5+1+2 = 21)*

**Corrected FAIL count: 21**
**FAIL check IDs (complete):** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.9, 3.1, 3.2, 4.10, 5.7, 6.4, 6.5, 6.6, 6.8, 6.9, 7.6, 9.1, 9.3

**PASS count:** 30
**BORDERLINE count:** 1 (3.7)
**NOT-TESTED count:** 3 (6.1, 6.2, 8.2) — not counted in FAIL total (P59)

**Overall verdict: NEEDS WORK**

---

## Fix List

**F-01** — Change `status: review` to `status: draft` AND add `veracityStatus: unverified` (atomic fix, P84). Resolves: 1.8, 5.7.
```
status: draft
veracityStatus: unverified
```

**F-02** — Remove em-dash from frontmatter `description` field (check 1.11, P30, P74). Proposed replacement (P75 self-check: no em-dash, no banned words, subject-first, UK English — passes):
```
description: 'Where to acquire ETH (for gas) and LPT (for staking) on Arbitrum One: exchanges, bridges, and DEXs for Livepeer orchestrators.'
```

**F-03** — Add missing required frontmatter fields `complexity` and `lifecycleStage` (checks 1.6, 1.7). Proposed — confirm before applying (P51):
```
complexity: beginner
lifecycleStage: setup
```

**F-04** — Add missing required frontmatter fields `industry` and `niche` (checks 1.9, 1.10, P41). Proposed — confirm before applying (P51):
```
industry: [finance, technical]
niche: [web3, tokenomics]
```

**F-05** — Rename `## How Much Do You Need?` heading (check 3.1). Question-form heading scores 14/25 (P63 — check 3.1 failure). Proposed: `## Token Requirements` (P75 self-check: not in banned/avoid list, no banned words — passes). Confirm before applying.

**F-06** — Convert or resolve TODO block at lines 26–48 (checks 6.5, 6.9, P70). Convert veracity items to `{/* REVIEW: [claim] — [source]. [Name] to confirm. */}` format or resolve and remove. Human task.

**F-07** — Rename `## See Also` heading (checks 3.1, 3.2). Banned-tier per checks.mdx §3.2 (P53). Proposed: `## Related Pages`. Confirm before applying.

**F-08** — Fix banned word `significantly` at line 62 (checks 2.2, 2.9, 6.4). Current: "Gas costs are **significantly** lower than Ethereum L1." Remove the vague intensifier and add a concrete figure or link. Proposed (P75 self-check: no banned words, no em-dash — passes): `"Gas costs on Arbitrum One are a fraction of Ethereum L1 — typically under $0.01 per transaction at current gas prices. Check [l2fees.info](https://l2fees.info/) for current rates."` Alternatively, remove the comparison sentence if a verified figure is not available. Confirm before applying.

**F-09** — Remove em-dash from body prose at line 111 (P30, P74). Current: `"Some CEXs list LPT — check whether they support Arbitrum One withdrawals directly, or only Ethereum L1 (which would require a subsequent bridge)."` Proposed (P75 self-check: no em-dash, no banned words — passes): `"Some CEXs list LPT. Check whether they support Arbitrum One withdrawals directly, or only Ethereum L1 — if Ethereum L1 only, you will need to bridge afterwards."` Note: second em-dash in proposed fix — revise further: `"Some CEXs list LPT. Check whether they support Arbitrum One withdrawals directly or only Ethereum L1. If Ethereum L1, bridge afterwards."`

**F-10** — Add `{/* REVIEW: */}` flags for unverified numerical claims (check 6.5, P70). Required items: (a) Bridge time "~10 minutes L1→L2, ~7 days L2→L1" at line 73 — verify against Arbitrum documentation; (b) ETH estimate "0.01–0.05 ETH" at line 137 — verify against current gas data. Format: `{/* REVIEW: [claim] — verify against [source]. [Name] to confirm. */}`

**F-11** — Verify LPT contract address `0x289ba1701C2F088cf0faf8B3705246331cB8A839` against Arbiscan (check 6.1). Add REVIEW flag if unverified: `{/* REVIEW: LPT contract address on Arbitrum One — verify against https://arbiscan.io/token/0x289ba1701C2F088cf0faf8B3705246331cB8A839 before publishing */}`. Staleness tier: LOW (contract addresses rarely change, P77).

**F-12** — Add staleness notation for ETH gas estimate (check 6.8, P77). Staleness tier: HIGH. Add a REVIEW comment or Note referencing a live source for current gas data (e.g., l2fees.info).

**F-13** — Add cross-tab link to `/v2/lpt/` (checks 4.10, 7.6). LPT staking is also a delegator concern — add a Card in the "See Also" (after rename from F-07) linking to the delegators tab. Confirm target page path before adding.

**F-14** — Obtain and record human sign-off before page can advance (check 9.1). `status: draft` from F-01 correctly signals not yet approved.
