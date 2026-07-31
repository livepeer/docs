# Per-Page Quality Check - `v2/gateways/concepts/business-model.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight

- **Page read:** Complete (280 lines)
- **Checks framework read:** Complete
- **Page classification:** `pageType: concept` | `audience: gateway` | `purpose: explain`
- **Position in journey:** Last in Concepts section (after Architecture, before Quickstart group)

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | "Gateway Business Model" | PASS | Clear, concept-specific |
| sidebarTitle | Yes | "Business Model" | PASS | Concise |
| description | Yes | Well-formed | PASS | Subject-first, <=160 chars, UK English |
| pageType | Yes | `concept` | PASS | Canonical 7-type |
| audience | Yes | `gateway` | PASS | Canonical 7-token |
| purpose | Yes | `explain` | PASS | Canonical 15-value |
| complexity | No | | **FAIL** | MISSING required field. Suggest: `intermediate` |
| lifecycleStage | No | | **FAIL** | MISSING required field. Suggest: `evaluate` |
| keywords | Yes | Specific set | PASS | "gateway economics", "payment flow", "maxPricePerUnit", "arbitrage" |
| OG image block | Yes | 5 fields complete | PASS | |
| veracityStatus | No | | **FAIL** | MISSING. Page has unverified technical claims |
| status | Yes | current | PASS | |
| lastVerified | Yes | 2026-03-13 | PASS | |
| industry | Yes | `business, economics` | PASS | Valid |
| niche | Yes | `web3` | **FAIL** | Should include `tokenomics` given ETH/LPT currency discussion |

**Frontmatter verdict: FAIL - 3 required fields missing + niche incomplete**

---

## Categories 1-9

### Category 1 - Frontmatter & Taxonomy

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required fields present | **FAIL** | Missing: complexity, lifecycleStage, veracityStatus |
| 1.2 | pageType uses 7-type canonical | PASS | `concept` valid |
| 1.3 | pageVariant valid if present | N/A | |
| 1.4 | purpose uses 15-value set | PASS | `explain` valid |
| 1.5 | audience uses 7-token set | PASS | `gateway` valid |
| 1.6 | complexity single canonical | **FAIL** | Missing |
| 1.7 | lifecycleStage canonical | **FAIL** | Missing |
| 1.8 | veracityStatus present and honest | **FAIL** | Missing; page has volatile claims |
| 1.9 | industry array valid | PASS | `business, economics` valid |
| 1.10 | niche array valid | **FAIL** | `web3` alone; should include `tokenomics` |
| 1.11 | description well-formed | PASS | |
| 1.12 | OG image block complete | PASS | |
| 1.13 | keywords field quality | PASS | Specific, intent-aligned |

**Category 1 verdict: FAIL - 5 issues**

---

### Category 2 - Voice & Copy

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | |
| 2.2 | Zero banned words | PASS | |
| 2.3 | Zero banned phrases | PASS | |
| 2.4 | Zero banned constructions | **FAIL** | Line 36: `while` construction implies contrast without clear frame. Line 250: weak closing on formula, not fact |
| 2.5 | Opening order correct | **FAIL** | Line 43: "Gateways are **consumers** of compute services" leads with mechanism. Several sections open with mechanism before value |
| 2.6 | Paragraph discipline | PASS | Most paragraphs end on fact or next step |
| 2.7 | Audience register correct | PASS | Operational, business-focused for gateway audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "simply", "just", "easy" |
| 2.9 | No passive value statements | **FAIL** | Line 69: "Gateway earnings come from business-layer margins" (passive). Line 161: "This keeps service costs denominated in a stable currency" (passive benefit) |
| 2.10 | No hedging openers | PASS | Opens with strong value statement |
| 2.11 | Terminology locked and consistent | PASS | BYOC, NaaP, maxPricePerUnit all correct |

**Category 2 verdict: FAIL - 3 issues (opening order, constructions, passive values)**

---

### Category 3 - Section Naming & Headings

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Payments Flow | 5 | 5 | 4 | 5 | 5 | **24/25** |
| Gateway Earnings | 5 | 5 | 4 | 5 | 4 | **23/25** |
| Gateway Costs | 4 | 5 | 4 | 4 | 5 | **22/25** |
| Currency | 3 | 4 | 3 | 4 | 5 | **20/25** |
| Gateway Operator Models | 5 | 5 | 4 | 5 | 4 | **24/25** |
| Pricing and Fees | 3 | 4 | 3 | 3 | 5 | **21/25** |
| Protocol-level costs (what you pay) | 5 | 5 | 4 | 5 | 4 | **24/25** |
| Business Layer Pricing | 4 | 5 | 4 | 4 | 4 | **22/25** |
| Price Discovery | 3 | 4 | 3 | 3 | 5 | **21/25** |
| Production Gateways | 2 | 4 | 3 | 3 | 5 | **20/25** |
| Related Pages | EXEMPT | | | | | EXEMPT |

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading >=20/25 | PASS | All headings at or above threshold (range 20-24) |
| 3.2 | No banned/weak standalone terms | **FAIL** | "Production Gateways" is weak. Suggest: "Live Gateway Examples" or "Case Studies" |
| 3.3 | No literal contrast labels | PASS | |
| 3.4 | Domain-anchor rule | **FAIL** | "Currency" (line 136) loses meaning without "Gateway" context. Suggest: "Payment Currencies" |
| 3.5 | Heading names concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | |
| 3.7 | Sounds like expert editorial choice | PASS | |

**Category 3 verdict: FAIL - 2 issues (weak term, domain-anchor miss)**

---

### Category 4 - Page Structure & Content Architecture

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Explain gateway economics |
| 4.2 | Purpose statement test | PASS | "This page lets the gateway operator understand pricing, costs, and operator models" |
| 4.3 | PREV/NEXT adjacency correct | PASS | Architecture -> Business Model -> Quickstart |
| 4.4 | No dead ends | PASS | Related Pages with 4 next steps |
| 4.5 | Prerequisites stated or linked | PASS | Tip provides orientation |
| 4.6 | Out-of-scope is clear | PASS | Does not cover implementation |
| 4.7 | Information type per section correct | PASS | Conceptual, analytical, narrative all permitted for `explain` |
| 4.8 | No content duplication | PASS | |
| 4.9 | Section orientation page present | N/A | |
| 4.10 | Cross-tab links at intersections | PASS | Links to `/v2/orchestrators/concepts/incentive-model` |
| 4.11 | No hardcoded data from data files | **FAIL** | Lines 212-217: CLI flags example hardcoded. Lines 244-248: livepeer_cli workflow hardcoded. Lines 256-258: case study details hardcoded |

**Category 4 verdict: FAIL - 1 issue (hardcoded data)**

---

### Category 5 - Layout, Components & Template

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | `concept` template with Tip, tables, accordions |
| 5.2 | Required sections present | PASS | |
| 5.3 | Only approved components | PASS | All from preferred list |
| 5.4 | Avoided components absent | PASS | |
| 5.5 | Info type -> component mapping | PASS | |
| 5.6 | MDX renders clean | PASS | |
| 5.7 | No old-schema frontmatter | PASS | |
| 5.8 | CSS uses custom properties only | PASS | |
| 5.9 | Generated file banners intact | N/A | Human-authored |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct imports |
| 5.11 | No deprecated Mintlify components | PASS | |

**Category 5 verdict: PASS**

---

### Category 6 - Veracity & Factual Accuracy

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | **FAIL** | Pricing units (wei per pixel, per ms) uncited. Case studies (Streamplace, Daydream) unverified |
| 6.2 | Code/commands tested | **FAIL** | CLI flags (`maxPricePerUnit`, `maxPricePerCapability`) unverified as current. `livepeer_cli` workflow untested |
| 6.3 | No deprecated API usage | **FAIL** | `maxPricePerUnit` flag and `livepeer_cli` need verification against current go-livepeer |
| 6.4 | Numbers are real | **FAIL** | "20% margin" in pseudocode is illustrative, not sourced. Wei-per-pixel values uncited |
| 6.5 | REVIEW flags for unverified claims | **FAIL** | No REVIEW flags despite volatile claims (pricing, CLI tools, case studies) |
| 6.6 | veracityStatus honest | **FAIL** | Missing entirely |
| 6.7 | Authoritative vs AI glossary | PASS | Terms defined inline |
| 6.8 | Source staleness check | **FAIL** | CLI flags and livepeer_cli workflow may have changed since lastVerified |
| 6.9 | No open-ended research tasks | **FAIL** | Implied: verify CLI flags, confirm case studies, validate pricing models |

**Category 6 verdict: FAIL - 8 issues. This is the weakest category.**

---

### Category 7 - Navigation & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | |
| 7.2 | Navigation matches file system | PASS | |
| 7.3 | Tab entry portal routes to all sections | PASS | |
| 7.4 | No structural orphans | PASS | |
| 7.5 | Audience journey complete | PASS | |
| 7.6 | Cross-tab graduation paths exist | PASS | Links to orchestrators/incentive-model |
| 7.7 | File in correct lane | PASS | |
| 7.8 | File naming conventions | PASS | |
| 7.9 | _workspace/ TTL compliance | N/A | |
| 7.10 | No links to dep- files | PASS | |

**Category 7 verdict: PASS**

---

### Category 8 - Links & Rendering

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | role, capabilities, payment-guide, incentive-model all valid |
| 8.2 | All external links live | N/A | No external links |
| 8.3 | All snippet imports resolve | PASS | |
| 8.4 | All images load | PASS | OG fallback only |
| 8.5 | Page renders without error | PASS | Clean JSX |
| 8.6 | No TODO/TBD/Coming Soon | PASS | |

**Category 8 verdict: PASS**

---

### Category 9 - Process & Governance

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | **FAIL** | No explicit sign-off beyond lastVerified date |
| 9.2 | Consuming decisions in registry | INFO | |
| 9.3 | Gate prerequisites met | **FAIL** | Missing frontmatter suggests gates not fully passed |
| 9.4 | Phase ordering respected | **FAIL** | No veracity REVIEW flags present (phase 7 incomplete) |
| 9.5 | Findings gathered before fixes | INFO | |
| 9.6 | Feedback routed | INFO | |

**Category 9 verdict: FAIL - 3 issues**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter & Taxonomy | 7 | 5 | 13 |
| 2. Voice & Copy | 8 | 3 | 11 |
| 3. Section Naming & Headings | 5 | 2 | 7 |
| 4. Page Structure | 8 | 1 | 11 |
| 5. Layout & Components | 10 | 0 | 11 |
| 6. Veracity | 1 | 8 | 9 |
| 7. Navigation & IA | 9 | 0 | 10 |
| 8. Links & Rendering | 5 | 0 | 6 |
| 9. Process & Governance | 0 | 3 | 6 |
| **Total** | **53** | **22** | **84** |

**Overall verdict: NEEDS WORK**

**Top 3 issues:**
1. **CRITICAL: Veracity crisis (8 fails).** CLI flags unverified, case studies uncited, pricing models unsourced. Fix: add REVIEW flags to all volatile claims (`maxPricePerUnit`, `livepeer_cli`, Streamplace/Daydream, wei-per-pixel values). Set `veracityStatus: unverified`
2. **Missing frontmatter fields** (complexity, lifecycleStage, veracityStatus, niche incomplete). Fix: add `complexity: intermediate`, `lifecycleStage: evaluate`, `veracityStatus: unverified`, update `niche: [web3, tokenomics]`
3. **Voice: opening order violations.** Several sections lead with mechanism before value. Fix: reorder section openings to lead with benefit/outcome, then mechanism. Example: "Payments Flow" should open with "Gateways earn margins by routing work" before the payment chain explanation
