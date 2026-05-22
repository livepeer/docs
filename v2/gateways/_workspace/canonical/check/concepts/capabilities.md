# Per-Page Quality Check - `v2/gateways/concepts/capabilities.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight
- **Page read:** Complete (240 lines)
- **Page classification:** `pageType: concept` | `audience: gateway` | `purpose: explain`
- **Nav position:** v2/gateways/concepts/ (position 2 of 4 under "Concepts" group; after "role", before "architecture")

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | "Gateway Capabilities" | PASS | |
| sidebarTitle | Yes | "Capabilities" | PASS | |
| description | Yes | "What gateways can route..." (160 chars) | PASS | Well-formed, no self-reference |
| pageType | Yes | `concept` | PASS | Canonical 7-type |
| audience | Yes | `gateway` | PASS | Canonical 7-token |
| purpose | Yes | `explain` | PASS | Canonical 15-value |
| complexity | No | | **FAIL** | MISSING required field |
| lifecycleStage | No | | **FAIL** | MISSING required field |
| keywords | Yes | Array of 11 specific terms | PASS | Searcher-intent aligned |
| OG image block | Yes | 5 fields complete | PASS | Correct fallback path |
| veracityStatus | No | | **FAIL** | MISSING required. `status: current` implies verified but field absent |
| status | Yes | `current` | CONDITIONAL | Requires `veracityStatus: verified`; field missing |

**Frontmatter verdict: FAIL - 3 required fields missing (complexity, lifecycleStage, veracityStatus)**

---

## Categories 1-9

### Category 1 - Frontmatter & Taxonomy

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required fields present | **FAIL** | Missing: complexity, lifecycleStage, veracityStatus |
| 1.2 | pageType uses 7-type canonical | PASS | `concept` valid |
| 1.3 | pageVariant valid if present | N/A | Not present; not required for base `concept` |
| 1.4 | purpose uses 15-value set | PASS | `explain` valid |
| 1.5 | audience uses 7-token set | PASS | `gateway` valid |
| 1.6 | complexity single canonical | **FAIL** | Missing |
| 1.7 | lifecycleStage canonical | **FAIL** | Missing |
| 1.8 | veracityStatus present and honest | **FAIL** | Missing |
| 1.9 | industry array valid | N/A | Optional, not present |
| 1.10 | niche array valid | N/A | Optional, not present |
| 1.11 | description well-formed | PASS | Subject-first, <=160 chars, UK English |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | keywords field quality | PASS | Specific, searcher-intent-aligned |

**Category 1 verdict: FAIL - 4 issues**

---

### Category 2 - Voice & Copy

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | PASS | None found |
| 2.3 | Zero banned phrases | PASS | None found |
| 2.4 | Zero banned constructions | PASS | No `can/may` in value claims |
| 2.5 | Opening order correct | PASS | Leads with fact before mechanism |
| 2.6 | Paragraph discipline | PASS | Each paragraph has one job |
| 2.7 | Audience register correct | PASS | Technical, infrastructure-focused, appropriate for gateway audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No gateway-specific prohibited phrases |
| 2.9 | No passive value statements | PASS | |
| 2.10 | No hedging openers | PASS | Goes straight to the point |
| 2.11 | Terminology locked and consistent | PASS | |

**Category 2 verdict: PASS**

---

### Category 3 - Section Naming & Headings

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Gateway Functions (H2, line 41) | 4 | 4 | 5 | 5 | 4 | **22/25** |
| Workload Types (H2, line 57) | 5 | 5 | 5 | 5 | 5 | **25/25** |
| BYOC (Bring Your Own Container) (H3, line 107) | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Orchestrator Selection (H2, line 117) | 5 | 5 | 4 | 5 | 5 | **24/25** |
| Discovery Methods (H3, line 170) | 5 | 4 | 5 | 5 | 5 | **24/25** |
| Sessions and Failover (H2, line 192) | 5 | 5 | 4 | 5 | 4 | **23/25** |
| Gateway Marketplace Role (H2, line 209) | 5 | 5 | 4 | 5 | 4 | **23/25** |
| Related Pages (H2, line 224) | EXEMPT | | | | | EXEMPT |

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading >=20/25 | PASS | All scored headings pass |
| 3.2 | No banned/weak standalone terms | PASS | |
| 3.3 | No literal contrast labels | PASS | |
| 3.4 | Domain-anchor rule applied | PASS | |
| 3.5 | Heading names concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | |
| 3.7 | Sounds like expert editorial choice | PASS | |

**Category 3 verdict: PASS**

---

### Category 4 - Page Structure & Content Architecture

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: understand gateway capabilities |
| 4.2 | Purpose statement test | PASS | "This page lets the gateway operator understand how gateways route work, select orchestrators, and manage sessions" |
| 4.3 | PREV/NEXT adjacency correct | PASS | Role -> Capabilities -> Architecture is logical |
| 4.4 | No dead ends | PASS | Related Pages CardGroup provides 3 next steps |
| 4.5 | Prerequisites stated or linked | PASS | Tip at line 36 sets expectation |
| 4.6 | Out-of-scope is clear | PASS | Line 52-53 Note explicitly routes orchestrator-focused readers away |
| 4.7 | Information type per section correct | PASS | Conceptual -> structural -> evaluative; all permitted for `explain` |
| 4.8 | No content duplication | PASS | Each section covers distinct topic |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links at intersections | N/A | Tab-level check |
| 4.11 | No hardcoded data from data files | PASS | Port numbers (1935, 8935) are fixed protocol constants, not config |

**Category 4 verdict: PASS**

---

### Category 5 - Layout, Components & Template

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | Follows `concept` template |
| 5.2 | Required sections present | PASS | Overview, depth sections, Related Pages all present |
| 5.3 | Only approved components | PASS | Tip, Note, Warning, Tabs, StyledTable, CardGroup, Mermaid |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, no Coming Soon |
| 5.5 | Info type -> component mapping correct | PASS | |
| 5.6 | MDX renders clean | PASS | All JSX tags closed, imports valid |
| 5.7 | No old-schema frontmatter | PASS | Uses canonical 7-type pageType |
| 5.8 | CSS uses custom properties only | PASS | |
| 5.9 | Generated file banners intact | N/A | Human-authored page |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct imports |
| 5.11 | No deprecated Mintlify components | PASS | No old `<Callout>` syntax, no inline internals |

**Category 5 verdict: PASS**

---

### Category 6 - Veracity & Factual Accuracy

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | **FAIL** | "Five core functions" (line 43), HTTP port 8935 (lines 82/89/96), component names (line 200) lack source citations |
| 6.2 | Code/commands tested | N/A | No code blocks in this concept page |
| 6.3 | No deprecated API usage | PASS | |
| 6.4 | Numbers are real | **FAIL** | Port 8935 is Livepeer-specific; should cite protocol docs |
| 6.5 | REVIEW flags for unverified claims | **FAIL** | No REVIEW flags for unverified claims (port numbers, component names, dual-workload "no special setup") |
| 6.6 | veracityStatus honest | **FAIL** | Field missing entirely |
| 6.7 | Authoritative vs AI glossary | PASS | No glossary references |
| 6.8 | Source staleness check | INFO | Protocol-level claims relatively stable |
| 6.9 | No open-ended research tasks | PASS | |

**Category 6 verdict: FAIL - 4 issues**

---

### Category 7 - Navigation & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | |
| 7.2 | Navigation matches file system | PASS | |
| 7.3 | Tab entry portal routes to all sections | PASS | |
| 7.4 | No structural orphans | PASS | |
| 7.5 | Audience journey complete | PASS | Role -> Capabilities -> Architecture -> Business Model |
| 7.6 | Cross-tab graduation paths exist | PASS | Links to Orchestrators tab |
| 7.7 | File in correct lane | PASS | In `v2/gateways/concepts/` (publishable) |
| 7.8 | File naming conventions | PASS | |
| 7.9 | _workspace/ TTL compliance | N/A | |
| 7.10 | No links to dep- files | PASS | |

**Category 7 verdict: PASS**

---

### Category 8 - Links & Rendering

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | Spot-checked all cross-links |
| 8.2 | All external links live | N/A | No external links |
| 8.3 | All snippet imports resolve | PASS | All standard component imports valid |
| 8.4 | All images load | PASS | OG fallback only |
| 8.5 | Page renders without error | PASS | Syntax clean |
| 8.6 | No TODO/TBD/Coming Soon | PASS | |

**Category 8 verdict: PASS**

---

### Category 9 - Process & Governance

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | INFO | No sign-off marker in file |
| 9.2 | Consuming decisions in registry | INFO | Unverifiable from file alone |
| 9.3 | Gate prerequisites met | **FAIL** | `status: current` but missing required governance fields |
| 9.4 | Phase ordering respected | **FAIL** | Missing complexity/lifecycleStage suggests incomplete Phase 1 |
| 9.5 | Findings gathered before fixes | INFO | |
| 9.6 | Feedback routed | INFO | |

**Category 9 verdict: FAIL - 2 issues**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter & Taxonomy | 7 | 4 | 13 |
| 2. Voice & Copy | 11 | 0 | 11 |
| 3. Section Naming & Headings | 7 | 0 | 7 |
| 4. Page Structure | 8 | 0 | 11 |
| 5. Layout & Components | 10 | 0 | 11 |
| 6. Veracity | 3 | 4 | 9 |
| 7. Navigation & IA | 9 | 0 | 10 |
| 8. Links & Rendering | 5 | 0 | 6 |
| 9. Process & Governance | 0 | 2 | 6 |
| **Total** | **60** | **10** | **84** |

**Overall verdict: NEEDS WORK**

**Top 3 issues:**
1. **CRITICAL: Missing required frontmatter fields** (complexity, lifecycleStage, veracityStatus). Fix: add `complexity: intermediate`, `lifecycleStage: evaluate`, `veracityStatus: unverified`
2. **HIGH: Unverified factual claims without REVIEW flags** (port 8935, component names, "no special setup" for dual-workload). Fix: add REVIEW comment flags, set veracityStatus: unverified
3. **MEDIUM: Incomplete gate tracking.** `status: current` without governance evidence. Fix: update status to draft until gates completed
