# Per-Page Quality Check - `v2/gateways/setup/requirements/on-chain-setup/fund-gateway.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight

- **Page read:** Complete
- **Checks framework read:** Complete
- **Page classification:** `pageType: guide` | `audience: gateway` | `purpose: operate`
- **Position in journey:** Third in Setup Checklist subgroup (after on-chain). Followed by Installation group.

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | "Fund The Livepeer Gateway" | PASS | |
| sidebarTitle | Yes | "Fund Gateway" | PASS | |
| description | Yes | "The following steps will walk you through..." | **FAIL** | Banned phrase "will walk you through" |
| pageType | Yes | `guide` | PASS | Canonical 7-type |
| audience | Yes | `gateway` | PASS | Canonical 7-token |
| purpose | Yes | `operate` | PASS | Canonical 15-value |
| complexity | No | | **FAIL** | MISSING. Suggest: `intermediate` |
| lifecycleStage | No | | **FAIL** | MISSING. Suggest: `setup` |
| keywords | Yes | 8 terms | **FAIL** | Generic: "livepeer", "fund", "gateway". Missing intent terms like "bridge ETH to Arbitrum", "gateway reserve deposit amount" |
| OG image block | Yes | 5 fields complete | PASS | |
| veracityStatus | No | | **FAIL** | MISSING. Page has unverified procedural content |
| status | Yes | current | PASS | |
| lastVerified | Yes | 2026-03-17 | PASS | |

**Frontmatter verdict: FAIL - 3 required fields missing + banned phrase in description + weak keywords**

---

## Categories 1-9

### Category 1 - Frontmatter & Taxonomy

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required fields present | **FAIL** | Missing: complexity, lifecycleStage, veracityStatus |
| 1.2 | pageType uses 7-type canonical | PASS | `guide` valid |
| 1.3 | pageVariant valid if present | N/A | |
| 1.4 | purpose uses 15-value set | PASS | `operate` valid |
| 1.5 | audience uses 7-token set | PASS | `gateway` valid |
| 1.6 | complexity single canonical | **FAIL** | Missing |
| 1.7 | lifecycleStage canonical | **FAIL** | Missing |
| 1.8 | veracityStatus present and honest | **FAIL** | Missing |
| 1.9 | industry array valid | N/A | |
| 1.10 | niche array valid | N/A | |
| 1.11 | description well-formed | **FAIL** | Contains banned phrase "will walk you through" |
| 1.12 | OG image block complete | PASS | |
| 1.13 | keywords field quality | **FAIL** | Generic terms, missing searcher-intent keywords |

**Category 1 verdict: FAIL - 6 issues**

---

### Category 2 - Voice & Copy

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | |
| 2.2 | Zero banned words | PASS | |
| 2.3 | Zero banned phrases | **FAIL** | Line 5: "will walk you through". Line 62: "simply transfer" |
| 2.4 | Zero banned constructions | PASS | |
| 2.5 | Opening order correct | PASS | Opens with operational necessity |
| 2.6 | Paragraph discipline | PASS | |
| 2.7 | Audience register correct | PASS | Technical-operational |
| 2.8 | Per-audience prohibited phrases absent | **FAIL** | Line 62: "simply" is gateway-audience prohibited |
| 2.9 | No passive value statements | **FAIL** | Line 50-57: "much cheaper" unquantified |
| 2.10 | No hedging openers | PASS | |
| 2.11 | Terminology locked and consistent | PASS | |

**Category 2 verdict: FAIL - 3 issues**

---

### Category 3 - Section Naming & Headings

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Add Funds to Gateway Wallet | 5 | 5 | 5 | 5 | 4 | **24/25** |
| Buy Ethereum | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Bridge to Arbitrum | 5 | 4 | 4 | 4 | 5 | **22/25** |
| Deposit to Gateway | 3 | 4 | 4 | 4 | 5 | **20/25** |
| Setup Gateway Reserve & Deposit Funds | 3 | 4 | 4 | 4 | 3 | **21/25** |

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading >=20/25 | PASS | All pass (20-24 range) |
| 3.2 | No banned/weak standalone terms | PASS | |
| 3.3 | No literal contrast labels | PASS | |
| 3.4 | Domain-anchor rule applied | PASS | |
| 3.5 | Heading names concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | |
| 3.7 | Sounds like expert editorial choice | PASS | Though "Setup Gateway Reserve..." is compound |

**Category 3 verdict: PASS (though "Deposit to Gateway" and "Setup Gateway Reserve..." are at threshold)**

---

### Category 4 - Page Structure & Content Architecture

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Fund gateway account |
| 4.2 | Purpose statement test | PASS | "This page lets the gateway operator fund their account and set up deposit/reserve" |
| 4.3 | PREV/NEXT adjacency correct | PASS | After on-chain (account creation), before pricing config |
| 4.4 | No dead ends | **FAIL** | Lines 222-224: commented-out Optional Automation step. No guidance on ongoing top-ups |
| 4.5 | Prerequisites stated or linked | **FAIL** | Assumes reader knows CEX/DEX, KYC, Arbitrum. Not linked to prerequisites |
| 4.6 | Out-of-scope is clear | **FAIL** | No explicit scope boundary. Should note "on-chain setup only; for off-chain, see [link]" |
| 4.7 | Information type per section correct | PASS | All procedural, appropriate for `operate` |
| 4.8 | No content duplication | **FAIL** | Lines 139-148: bridge info in prose AND embedded Arbitrum iframe. Potential divergence |
| 4.9 | Section orientation page present | N/A | |
| 4.10 | Cross-tab links at journey intersections | N/A | Operational page |
| 4.11 | No hardcoded data from data files | **FAIL** | Lines 204-205: hardcoded 0.065 ETH deposit, 0.03 ETH reserve. Line 168: production recommends 0.36 ETH but example uses 0.03 (discrepancy unexplained) |

**Category 4 verdict: FAIL - 5 issues**

---

### Category 5 - Layout, Components & Template

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | `guide` with StyledSteps |
| 5.2 | Required sections present | PASS | Overview + Steps |
| 5.3 | Only approved components | PASS | |
| 5.4 | Avoided components absent | PASS | |
| 5.5 | Info type -> component mapping | PASS | Procedural -> StyledSteps |
| 5.6 | MDX renders clean | PASS | |
| 5.7 | No old-schema frontmatter | PASS | |
| 5.8 | CSS uses custom properties only | PASS | |
| 5.9 | Generated file banners intact | N/A | |
| 5.10 | Component naming/import conventions | PASS | |
| 5.11 | No deprecated Mintlify components | **FAIL** | Line 47: uses old `<Callout>` syntax; should migrate to `<Info>` |

**Category 5 verdict: FAIL - 1 issue**

---

### Category 6 - Veracity & Factual Accuracy

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | **FAIL** | "Much cheaper" (line 50-57) unquantified. Deposit amounts unsourced |
| 6.2 | Code/commands tested | **FAIL** | Lines 185-199: CLI commands unverified. Line 191: Docker `master` tag is mutable |
| 6.3 | No deprecated API usage | **FAIL** | Line 202: CLI option number "11" is version-specific, no version pinned |
| 6.4 | Numbers are real | **FAIL** | 0.065/0.03/0.36 ETH amounts unsourced. Reserve discrepancy between production (0.36) and example (0.03) |
| 6.5 | REVIEW flags for unverified claims | **FAIL** | None present despite multiple unverified procedural claims |
| 6.6 | veracityStatus honest | **FAIL** | Missing entirely |
| 6.7 | Authoritative vs AI glossary | PASS | |
| 6.8 | Source staleness check | **FAIL** | CoinGecko link (line 78), Arbitrum iframe (line 147), exchange docs all fast-changing |
| 6.9 | No open-ended research tasks | **FAIL** | Line 167-169: references open GitHub issue #3744. If resolved, reserve recommendation changes |

**Category 6 verdict: FAIL - 8 issues. Critical veracity gaps.**

---

### Category 7 - Navigation & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | |
| 7.2 | Navigation matches file system | PASS | |
| 7.3 | Tab entry portal routes to all sections | PASS | |
| 7.4 | No structural orphans | PASS | |
| 7.5 | Audience journey complete | PASS | |
| 7.6 | Cross-tab graduation paths | N/A | |
| 7.7 | File in correct lane | PASS | |
| 7.8 | File naming conventions | PASS | |
| 7.9 | _workspace/ TTL compliance | N/A | |
| 7.10 | No links to dep- files | PASS | |

**Category 7 verdict: PASS**

---

### Category 8 - Links & Rendering

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | |
| 8.2 | All external links live | PASS | Coinbase, Binance, Kraken, CoinGecko, Arbitrum all live |
| 8.3 | All snippet imports resolve | PASS | |
| 8.4 | All images load | PASS | |
| 8.5 | Page renders without error | PASS | |
| 8.6 | No TODO/TBD/Coming Soon | **FAIL** | Lines 222-224: commented-out "Optional Automation" step is a hidden TODO |

**Category 8 verdict: FAIL - 1 issue**

---

### Category 9 - Process & Governance

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | **FAIL** | No evidence of sign-off |
| 9.2 | Consuming decisions in registry | **FAIL** | ETH amount decisions (0.065/0.03) not in registry |
| 9.3 | Gate prerequisites met | **FAIL** | Missing frontmatter fields indicate incomplete gates |
| 9.4 | Phase ordering respected | INFO | |
| 9.5 | Findings gathered before fixes | INFO | |
| 9.6 | Feedback routed | INFO | |

**Category 9 verdict: FAIL - 3 issues**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter & Taxonomy | 5 | 6 | 13 |
| 2. Voice & Copy | 8 | 3 | 11 |
| 3. Section Naming & Headings | 7 | 0 | 7 |
| 4. Page Structure | 4 | 5 | 11 |
| 5. Layout & Components | 9 | 1 | 11 |
| 6. Veracity | 1 | 8 | 9 |
| 7. Navigation & IA | 8 | 0 | 10 |
| 8. Links & Rendering | 5 | 1 | 6 |
| 9. Process & Governance | 0 | 3 | 6 |
| **Total** | **47** | **27** | **84** |

**Overall verdict: NEEDS WORK**

**Top 3 issues:**
1. **CRITICAL: Veracity crisis (8 fails).** Hardcoded ETH amounts (0.065/0.03/0.36) unsourced with unexplained discrepancy. Docker `master` tag mutable. CLI option numbers version-specific. No REVIEW flags. Fix: add REVIEW flags on all procedural claims, source ETH amounts, pin Docker tag, note CLI version
2. **Missing frontmatter fields + banned phrases.** complexity, lifecycleStage, veracityStatus missing. Description and line 62 contain banned phrases. Fix: add fields, rewrite description to "Steps to fund your Gateway account on Arbitrum and allocate deposit and reserve using Livepeer CLI"
3. **Structure gaps.** Hardcoded data (check 4.11), prerequisites not linked (4.5), dead end on automation (4.4), scope boundary unclear (4.6). Fix: parameterise ETH amounts or source them, link prerequisites, add off-chain redirect, implement or remove automation TODO
