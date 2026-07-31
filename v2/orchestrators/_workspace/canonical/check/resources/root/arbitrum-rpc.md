# Per-Page Quality Check Report
## `v2/orchestrators/resources/arbitrum-rpc.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (line 2979 — CONFIRMED IN NAV, under "Resources > Technical Reference" group)
**Learnings applied:** P1–P90

---

## Pre-Check: File Integrity

Lines 1–10 read. File opens with `---` frontmatter delimiter at line 1. No content before the opening delimiter.

No corrupt prefix detected.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | `Arbitrum RPCs` | PASS | Well-formed |
| sidebarTitle | Yes | `Arbitrum RPCs` | PASS | Matches title; appropriate |
| description | Yes | `'Arbitrum One RPC endpoint options for Livepeer orchestrators — provider comparison, rate limits, and configuration.'` | FAIL | Contains em-dash (—) at `orchestrators — provider` — P30/check 1.11 violation |
| pageType | Yes | `reference` | PASS | Valid 7-type canonical value |
| audience | Yes | `orchestrator` | PASS | Valid 7-token value |
| purpose | Yes | `reference` | PASS | Valid 15-value canonical set — read directly from file (P15) |
| complexity | No | — | FAIL | Required field missing |
| lifecycleStage | No | — | FAIL | Required field missing |
| keywords | Yes | 8 entries: `livepeer`, `orchestrator`, `arbitrum`, `RPC`, `ethUrl`, `Alchemy`, `Infura`, `Ankr` | PASS | Specific technical terms (`ethUrl`, `Alchemy`, `Infura`, `Ankr`, `RPC`) are searcher-intent-aligned |
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
| 1.9 | `industry` array valid if present | FAIL | Field absent — required (P41). Proposed: `industry: [technical]` — confirm before applying (P51) |
| 1.10 | `niche` array valid if present | FAIL | Field absent — required (P41). Proposed: `niche: [web3, infrastructure]` — confirm before applying (P51) |
| 1.11 | `description` well-formed | FAIL | Em-dash (—) at `"orchestrators — provider comparison"`. P30/P74 violation. Otherwise: 102 chars (within 160), subject-first, UK English — all pass |
| 1.12 | OG image block complete | PASS | All 5 OG fields present; asset confirmed on disk |
| 1.13 | `keywords` field quality | PASS | Specific technical terms (`ethUrl`, `Alchemy`, `Infura`, `Ankr`, `RPC`) — searcher-intent-aligned |

**Category 1 verdict: 7 FAILs (1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11)**

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — candidates listed even when PASS):**

Candidates checked: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`.

- Line 52: "Livepeer orchestrators require an Arbitrum One RPC endpoint to interact with the protocol..." — no banned words
- Lines 58–63 (Requirements section): "Your RPC endpoint must:..." — no banned words
- Provider table (lines 68–111): scanning cell text — "Most commonly used by orchestrators." (line 79) — no banned words; "Low-latency option for high-volume orchestrators." (line 97) — no banned words; "Suitable for testing only — not recommended for production orchestrators." (line 109) — em-dash present (P30, see below); no banned words in any cell
- Line 116: "Set the endpoint when starting your orchestrator:" — no banned words
- Line 127: "Test that the endpoint is reachable and returns the correct chain ID:" — no banned words
- Line 137: "Expected response includes `\"result\":\"0xa4b1\"` (42161 in decimal = Arbitrum One)." — no banned words
- Common Issues table (lines 143–169): scanning all cells — no banned words
- Line 171: "For detailed troubleshooting, see the FAQ..." — no banned words

No banned words found.

**Banned phrase scan:**
- "rather than" — absent
- "and so on" / "etc." — absent
- "This section covers" / "This page covers" — absent
- "not just X" — absent

No banned phrases found.

**Banned Construction Scan (P58 — completed before check 2.4 result set):**

Em-dash scan (P74 — three explicit scan targets):
1. `description` field (line 4): `"orchestrators — provider comparison, rate limits"` — em-dash present — FAIL (P30, tracked in F-02)
2. H2/H3 heading text: "Requirements", "Provider Options", "Configuration", "Verify Your Endpoint", "Common Issues", "See Also" — no em-dashes in headings
3. Body prose:
   - Line 52: "...staking, reward calls, ticket redemption, and service registration all happen on Arbitrum. The endpoint is configured via the `-ethUrl` flag." — no em-dash
   - Table cell line 109: `"Suitable for testing only — not recommended for production orchestrators."` — em-dash in table cell — FAIL (P30, tracked in F-09)
   - Scanning all other table cells: no additional em-dashes

| Line | Sentence / Cell | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 4 | `orchestrators — provider comparison` | em-dash | P30 violation (description field) | YES — F-02 |
| 109 | "Suitable for testing only — not recommended for production orchestrators." | em-dash | P30 violation (table cell) | YES — F-09 |
| 58–63 | "Your RPC endpoint must: [list]" | — | Procedural list, no value claims | PASS |
| 62 | "active orchestrators with frequent reward calls and ticket redemptions may exceed free-tier limits" | `may exceed` | Procedural/conditional — stating a capacity constraint, not a value claim | PASS |
| 116 | "Set the endpoint when starting your orchestrator:" | — | Instruction | PASS |

`may exceed` at line 62 — classification: procedural/conditional capacity constraint, not a value claim asserting a benefit. PASS per P23 (flag as BORDERLINE if unclear, but context is unambiguous).

Per P62: em-dashes alone are not check 2.4 violations. Check 2.4 result is PASS. Em-dashes tracked under P30 — see F-02, F-09 in fix list.

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings detected. No `-ize` endings, no `behavior`/`color` patterns |
| 2.2 | Zero banned words | PASS | None found (P24 scan above) |
| 2.3 | Zero banned phrases | PASS | None found |
| 2.4 | Zero banned constructions | PASS | No banned construction patterns. Em-dashes tracked under P30 — see F-02, F-09. Not a check 2.4 violation per P62. |
| 2.5 | Opening order correct | PASS | Opens with subject: "Livepeer orchestrators require an Arbitrum One RPC endpoint..." — fact first, no caveat |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts throughout. Sections are focused. Requirements section is clean. |
| 2.7 | Audience register correct | PASS | Technical/operational register appropriate for `orchestrator` audience. Command-line examples appropriate |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found |
| 2.9 | No passive value statements | PASS | No vague value claims. All RPC descriptions are specific (rate limits, notes per provider) |
| 2.10 | No hedging openers | PASS | Opens with concrete factual statement |
| 2.11 | Terminology locked and consistent | PASS | `-ethUrl`, `Arbitrum One`, `reward calls`, `ticket redemption` used consistently |

**Category 2 verdict: 0 FAILs**

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading Score Table (P2 — per-dimension breakdown):**

Note: "Related Pages" exemption applies only to exact heading text "Related Pages" (P16, P53). "See Also" is Banned-tier and is scored and checked normally.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Requirements | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Provider Options | 4 | 3 | 4 | 5 | 5 | 21/25 |
| Configuration | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Verify Your Endpoint | 4 | 4 | 4 | 5 | 4 | 21/25 |
| Common Issues | 3 | 2 | 3 | 4 | 5 | 17/25 — FAIL |
| See Also | 1 | 1 | 1 | 2 | 3 | 8/25 — FAIL |

Failing headings: `Common Issues` (17/25), `See Also` (8/25 — Banned-tier).

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | `Common Issues` 17/25, `See Also` 8/25. Multiple failures = one check 3.1 FAIL (P85) |
| 3.2 | No banned or weak standalone heading terms | FAIL | `See Also` is Banned-tier per checks.mdx §3.2. P53: only "Related Pages" is exempt. |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | PASS | Headings are interpretable in isolation; domain context clear from page title |
| 3.5 | Heading names concept, not examples | PASS | Headings name categories, not examples |
| 3.6 | Title well-formed | PASS | "Arbitrum RPCs" — concept-derived, 2 words |
| 3.7 | Sounds like expert editorial choice | BORDERLINE | `Common Issues` (17/25) — generic. Expert form: `Connection Failures` or `RPC Error Reference`. `Provider Options` (21/25 — passes) — borderline; `RPC Providers` or `Provider Comparison` would be stronger. Human decision recommended. |

**Category 3 verdict: 2 FAILs (3.1, 3.2)**

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | One audience: orchestrators. One job: select and configure an Arbitrum One RPC endpoint. |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator select, configure, and verify an Arbitrum One RPC endpoint." — resolves cleanly |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | docs.json position: Technical Reference group. `arbitrum-rpc` at line 2979, `arbitrum-exchanges` at line 2980 — RPC before Exchanges. Reader arriving to configure their RPC would likely have already acquired tokens (Exchanges). Reader leaving to Exchanges has RPC context. Position is logical. (P25 — confirmed from docs.json) |
| 4.4 | No dead ends | PASS | "See Also" CardGroup provides clear next steps. FAQ link at line 171 provides troubleshooting continuation. |
| 4.5 | Prerequisites stated or linked | PASS | Line 52 states the requirement context (Arbitrum One, `-ethUrl` flag). Requirements section (lines 57–63) explicitly lists endpoint requirements. |
| 4.6 | Out-of-scope is clear | PASS | Scope is narrow (RPC endpoint selection and configuration) — implicit out-of-scope |
| 4.7 | Information type per section correct | PASS | `purpose: reference` — provider comparison table, configuration code, troubleshooting table — all appropriate |
| 4.8 | No content duplication from adjacent sections | PASS | No duplication with adjacent arbitrum-exchanges page |
| 4.9 | Section orientation page present | N/A | Page-level check |
| 4.10 | Cross-tab links at journey intersections | FAIL | Zero cross-tab links. The FAQ link (`/v2/orchestrators/resources/faq`) is within the same tab. An orchestrator's RPC issues may be relevant to gateway operators too, but no cross-tab link is present. Minimum threshold: 3 cross-tab links per tab-level check; this page contributes 0. |

**Category 4 verdict: 1 FAIL (4.10)**

---

## Category 5 — LAYOUT & COMPONENTS

For `pageType: reference` — Preferred: ParamField, ResponseField, CodeGroup, Tabs, Table. Avoid: TODO/TBD/Coming Soon. Required: Reference section.

Note: `component-layout-decisions.mdx` not read in this session. Results based on quick-reference matrix from checks.mdx §5 (P72).

**Component Matrix:**

| Component | Used? | Appropriate for `reference`? | Notes |
|---|---|---|---|
| StyledTable | Yes | YES — preferred | Used for providers and troubleshooting tables |
| TableRow / TableCell | Yes | YES | Part of StyledTable |
| CustomDivider | Yes | YES | Structural spacing |
| CardGroup / Card | Yes | YES | Navigation footer |
| Code block (``` bash ```) | Yes | YES | Configuration and verification commands |

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | `reference` with table-based sections and code examples — appropriate |
| 5.2 | Required sections present | PASS | Reference content present: provider table, configuration, troubleshooting |
| 5.3 | Only approved components used | PASS | All components appropriate per quick-reference matrix |
| 5.4 | Avoided components absent | PASS | Lines 25–47: `{/* TODO */}` block is MDX comment — not rendered (P78). No rendered TODO/TBD/Coming Soon. |
| 5.5 | Information type to component mapping | PASS | Reference tables for providers/troubleshooting; code blocks for configuration |
| 5.6 | MDX renders clean | PASS | No unclosed tags; correct JSX structure; bash code blocks properly fenced |
| 5.7 | No old-schema frontmatter | FAIL | `status: review` is not a valid enum value — wrong enum (P57) |
| 5.8 | CSS uses custom properties only | N/A | No inline CSS |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct relative paths |

**Category 5 verdict: 1 FAIL (5.7)**

---

## Category 6 — VERACITY

**Key veracity claims inventory:**

1. Alchemy rate limit: "300 CU/s (~100 req/s)" (table line 78) — technical claim, subject to provider plan changes — staleness tier: HIGH
2. Infura rate limit: "100k req/day" (table line 84) — staleness tier: HIGH
3. Chainstack rate limit: "25 req/s" (table line 102) — staleness tier: HIGH
4. Ankr public endpoint URL: `https://rpc.ankr.com/arbitrum` (table line 91) — staleness tier: MEDIUM
5. Public Arbitrum RPC URL: `https://arb1.arbitrum.io/rpc` (line 106) — staleness tier: MEDIUM
6. Chain ID claim: `42161` / `0xa4b1` = Arbitrum One (lines 60–61, 137) — staleness tier: LOW (chain ID does not change)
7. Expected curl response: `"result":"0xa4b1"` (line 137) — staleness tier: LOW
8. Requirement: `eth_call`, `eth_sendRawTransaction`, `eth_getBlockByNumber`, `eth_getLogs` (line 61) — staleness tier: LOW

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | NOT-TESTED | Rate limit figures (Alchemy CU/s, Infura req/day, Chainstack req/s) not verified against provider documentation in this session. Provider URLs not tested live. Chain ID (42161 = Arbitrum One) is a well-known, stable fact — LOW staleness risk. |
| 6.2 | Code/commands tested | NOT-TESTED | curl command (lines 131–135) not executed in this session. livepeer CLI flags in configuration block (lines 118–125) not tested. |
| 6.3 | No deprecated API usage | PASS | `-ethUrl` flag, `-orchestrator`, `-transcoder`, `-network arbitrum-one-mainnet` — no evidence of deprecated CLI flags based on file content. Full verification requires go-livepeer source check (NOT-TESTED). |
| 6.4 | Numbers are real | FAIL | Provider rate limit figures (Alchemy "300 CU/s (~100 req/s)", Infura "100k req/day", Chainstack "25 req/s") are specific but unsourced. These figures change with provider plan updates. No REVIEW flags on these figures. Staleness tier: HIGH (P77). |
| 6.5 | REVIEW flags for unverified claims | FAIL | No `{/* REVIEW: */}` flags on any rate limit claims. `{/* TODO */}` block (lines 25–47) does not satisfy check 6.5 format (P61). Rate limit table and provider URLs require REVIEW flags before publishing. |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. `status: review` wrong enum. Given unverified rate limit figures, `veracityStatus: unverified` is appropriate |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | Rate limit figures: HIGH staleness risk (providers change plans frequently). Provider URLs: MEDIUM staleness risk. Chain ID and JSON-RPC method names: LOW staleness risk. No staleness notation present for any claim (P77). |
| 6.9 | No open-ended research tasks | FAIL | TODO block (lines 25–47) contains tasks with no named owner or deadline. Rate limit figures require verification against live provider documentation — no named responsible person. Both 6.9 FAIL and 6.5 FAIL (P70). |

**Category 6 verdict: 5 FAILs (6.4, 6.5, 6.6, 6.8, 6.9) — 3 NOT-TESTED (6.1, 6.2, 6.3-partial) — not counted in FAIL total (P59)**

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed at line 2979 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry |
| 7.3 | Tab entry portal routes to all sections | N/A | Page-level check |
| 7.4 | No structural orphans | PASS | Reachable via Resources > Technical Reference group |
| 7.5 | Audience journey complete | PASS | Appropriate position — orchestrator configuring network connectivity before or during setup |
| 7.6 | Cross-tab graduation paths exist | FAIL | Zero cross-tab links. Gateway operators also interact with Arbitrum RPCs — a cross-tab link to `v2/gateways/` would be appropriate at this intersection. |
| 7.7 | File in correct lane | PASS | Publishable content in `v2/orchestrators/resources/` |
| 7.8 | File naming conventions | PASS | `arbitrum-rpc.mdx` — standard filename |
| 7.9 | _workspace/ TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: 1 FAIL (7.6)**

---

## Category 8 — LINKS & RENDERING

Internal link verification (filesystem check):
- `/v2/orchestrators/resources/arbitrum-exchanges` — EXISTS (confirmed)
- `/v2/orchestrators/resources/technical/x-contract-addresses` — EXISTS (confirmed)
- `/v2/orchestrators/resources/faq` — EXISTS (confirmed)
- FAQ anchor `#arbitrum-rpc-connection-failing--node-will-not-start` (line 171) — anchor format plausible; anchor resolution requires live render test (NOT-TESTED)

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 3 internal base paths verified. FAQ anchor at line 171 NOT-TESTED for anchor resolution (requires live render) — base path resolves |
| 8.2 | All external links live | NOT-TESTED | External links (alchemy.com, infura.io, ankr.com, quicknode.com, chainstack.com, arb1.arbitrum.io/rpc) not verified live in this session |
| 8.3 | All snippet imports resolve | PASS | Tables.jsx and Divider.jsx confirmed on disk |
| 8.4 | All images load | PASS | OG image `/snippets/assets/site/og-image/en/orchestrators.png` confirmed on disk |
| 8.5 | Page renders without error | PASS | No unclosed tags; bash code blocks properly fenced; imports resolve |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | `{/* TODO */}` block is MDX comment — not rendered (P78) |

**Category 8 verdict: 0 FAILs — 1 NOT-TESTED (8.2) — not counted in FAIL total (P59)**

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence of human review. `status: review` wrong enum and TODO block indicate page not approved |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions consumed by this page |
| 9.3 | Gate prerequisites met | FAIL | Wrong-enum status, missing required fields, unverified rate limit figures — content-pass gate not met |
| 9.4 | Phase ordering respected | N/A | Cannot determine from page state |
| 9.5 | Findings gathered before fixes | N/A | Not evaluable |
| 9.6 | Feedback routed | N/A | Not evaluable |

**Category 9 verdict: 2 FAILs (9.1, 9.3)**

---

## Spelling/Typo Check

Scanning all visible text: headings, table cells, link text, prose, code block labels.

- "Alchemy", "Infura", "Ankr", "QuickNode", "Chainstack" — all properly capitalised
- `eth_call`, `eth_sendRawTransaction`, `eth_getBlockByNumber`, `eth_getLogs` — standard JSON-RPC method names; correct
- "JSON-RPC" (implied in line 61) — correct
- `arb-mainnet.g.alchemy.com` (line 121) — URL pattern, not a typo candidate
- "arbitrum-one-mainnet" (line 120) — network flag value, correct
- Table cells: "dial tcp: connection refused", "context deadline exceeded" — correct
- All headings: no typos detected

No typos found.

---

## Cross-Category Connections

**Root Cause A:** `status: review` (wrong enum) + missing `veracityStatus`
Affects: 1.1, 1.8, 5.7, 9.1, 9.3
Fix: F-01 (atomic)

**Root Cause B:** Em-dash in description field (line 4) and table cell (line 109)
Affects: 1.11, Cat 2 P30
Fix: F-02 (description), F-09 (table cell)

**Root Cause C:** Missing required fields (`complexity`, `lifecycleStage`, `industry`, `niche`)
Affects: 1.1, 1.6, 1.7, 1.9, 1.10
Fix: F-03, F-04

**Root Cause D:** Unverified rate limit figures + TODO block
Affects: 6.4, 6.5, 6.8, 6.9
Fix: F-06 (REVIEW flags), F-07 (TODO block)

**Root Cause E:** `See Also` heading — Banned-tier + low score
Affects: 3.1, 3.2
Fix: F-05

---

## Verdict Summary

**Total FAIL count:** 19
**FAIL check IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 4.10, 5.7, 6.4, 6.5, 6.6, 6.8, 6.9, 7.6, 9.1, 9.3

*(Recount: Cat1 = 7 (1.1,1.6,1.7,1.8,1.9,1.10,1.11); Cat2 = 0; Cat3 = 2 (3.1,3.2); Cat4 = 1 (4.10); Cat5 = 1 (5.7); Cat6 = 5 (6.4,6.5,6.6,6.8,6.9); Cat7 = 1 (7.6); Cat9 = 2 (9.1,9.3). Total: 7+0+2+1+1+5+1+2 = 19. Count confirmed.)*

**PASS count:** 35
**BORDERLINE count:** 1 (3.7)
**NOT-TESTED count:** 4 (6.1, 6.2, 6.3-partial, 8.2) — not counted in FAIL total (P59)

**Overall verdict: NEEDS WORK**

This is the strongest page in the batch. Category 2 is clean. Core structure, voice, and layout are solid. Primary issues are: missing frontmatter fields (shared across batch), em-dashes (description + table cell), unverified provider rate limits (HIGH staleness risk), and `See Also` / `Common Issues` heading upgrades.

---

## Fix List

**F-01** — Change `status: review` to `status: draft` AND add `veracityStatus: unverified` (atomic fix, P84). Resolves: 1.8, 5.7.
```
status: draft
veracityStatus: unverified
```

**F-02** — Remove em-dash from frontmatter `description` field (check 1.11, P30, P74). Proposed replacement (P75 self-check: no em-dash, no banned words, subject-first, UK English — passes):
```
description: 'Arbitrum One RPC endpoint options for Livepeer orchestrators: provider comparison, rate limits, and configuration.'
```

**F-03** — Add missing required frontmatter fields `complexity` and `lifecycleStage` (checks 1.6, 1.7). Proposed — confirm before applying (P51):
```
complexity: beginner
lifecycleStage: setup
```

**F-04** — Add missing required frontmatter fields `industry` and `niche` (checks 1.9, 1.10, P41). Proposed — confirm before applying (P51):
```
industry: [technical]
niche: [web3, infrastructure]
```

**F-05** — Rename `## See Also` heading (checks 3.1, 3.2). Banned-tier per checks.mdx §3.2 (P53). Proposed: `## Related Pages`. Confirm before applying.

**F-06** — Add `{/* REVIEW: */}` flags for unverified rate limit figures (checks 6.4, 6.5, P70, P77). High-staleness items require named source and owner. Required format: `{/* REVIEW: [provider] rate limit "[figure]" — verify against [provider URL] before publishing. [Name] to confirm. */}`. Apply to: Alchemy CU/s, Infura req/day, Chainstack req/s. These figures change with provider plan updates.

**F-07** — Convert or resolve TODO block at lines 25–47 (checks 6.5, 6.9, P70). `{/* TODO }}` format does not satisfy check 6.5; tasks have no named owner. Convert open items to REVIEW format or resolve and remove. Human task.

**F-08** — Rename `## Common Issues` heading (check 3.1). Current score: 17/25. Proposed: `## Connection Errors` (P75 self-check: not in banned/avoid list — passes; P38: no existing heading uses "Connection Errors"). Confirm before applying.

**F-09** — Remove em-dash from table cell at line 109 (P30, P74). Current: `"Suitable for testing only — not recommended for production orchestrators."` Proposed (P75 self-check: no em-dash — passes): `"Suitable for testing only. Not recommended for production orchestrators."`

**F-10** — Add cross-tab link (checks 4.10, 7.6). Gateway operators also use Arbitrum RPC endpoints. Add a Card to the "See Also" section (after rename from F-05) linking to the gateway equivalent page. Proposed: link to `v2/gateways/resources/technical/arbitrum-rpc` (confirmed in docs.json at line 2785). Confirm target page before adding.

**F-11** — Add staleness notation for provider rate limits (check 6.8, P77). Staleness tier: HIGH (provider plans change frequently). Recommend adding a Note below the Provider Options table: `{/* REVIEW: Provider rate limits are subject to change. Verify against each provider's current documentation before relying on these figures. */}` plus a visible Note in the rendered output with a link to provider dashboards.

**F-12** — Verify `-network arbitrum-one-mainnet` flag is current in go-livepeer (check 6.3). This flag appears in the configuration code block (line 120). Verify against go-livepeer CLI documentation or source before publishing. Add REVIEW flag if unverified: `{/* REVIEW: verify -network flag value "arbitrum-one-mainnet" is current in go-livepeer CLI */}`

**F-13** — Obtain and record human sign-off before page can advance (check 9.1). `status: draft` from F-01 correctly signals not yet approved.
