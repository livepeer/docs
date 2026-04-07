# Per-Page Quality Check - `v2/gateways/concepts/role.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight

- **Page read:** Complete (352 lines)
- **Checks framework read:** Complete
- **Page classification:** `pageType: concept` | `audience: gateway` | `purpose: orient`
- **Position in journey:** First in Concepts section (after Navigator, before Capabilities). Feeds into Capabilities, Architecture, and Business Model.

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | "The Gateway Role in the Livepeer Network" | PASS | Clear, concept-focused |
| sidebarTitle | Yes | "Role" | PASS | Concise |
| description | Yes | "Learn how gateways connect applications to Livepeer..." | PASS | Subject-first, 137 chars, no self-reference |
| pageType | Yes | `concept` | PASS | Canonical 7-type |
| audience | Yes | `gateway` | PASS | Canonical 7-token |
| purpose | Yes | `orient` | PASS | Canonical 15-value |
| complexity | No | | **FAIL** | MISSING required field |
| lifecycleStage | No | | **FAIL** | MISSING required field |
| keywords | Yes | Array of 10 | PASS | Specific, intent-aligned |
| OG image block | Yes | 5 fields complete | PASS | Correct fallback path |
| veracityStatus | No | | **FAIL** | MISSING required field |
| status | Yes | current | PASS | |
| lastVerified | Yes | 2026-03-13 | PASS | Recent |

**Frontmatter verdict: FAIL - 3 required fields missing (complexity, lifecycleStage, veracityStatus)**

---

## Categories 1-9

### Category 1 - Frontmatter & Taxonomy

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required fields present | **FAIL** | Missing: complexity, lifecycleStage, veracityStatus |
| 1.2 | pageType uses 7-type canonical | PASS | `concept` valid |
| 1.3 | pageVariant valid if present | N/A | |
| 1.4 | purpose uses 15-value set | PASS | `orient` valid |
| 1.5 | audience uses 7-token set | PASS | `gateway` valid |
| 1.6 | complexity single canonical | **FAIL** | Missing. Suggest: `intermediate` |
| 1.7 | lifecycleStage canonical | **FAIL** | Missing. Suggest: `discover` |
| 1.8 | veracityStatus present and honest | **FAIL** | Missing. Content is well-sourced; suggest: `verified` |
| 1.9 | industry array valid | N/A | Optional |
| 1.10 | niche array valid | N/A | Optional |
| 1.11 | description well-formed | PASS | |
| 1.12 | OG image block complete | PASS | |
| 1.13 | keywords field quality | PASS | Good mix of specific and foundational terms |

**Category 1 verdict: FAIL - 4 issues**

---

### Category 2 - Voice & Copy

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings |
| 2.2 | Zero banned words | PASS | None found |
| 2.3 | Zero banned phrases | PASS | None found |
| 2.4 | Zero banned constructions | PASS | No self-reference, no hedging |
| 2.5 | Opening order correct | PASS | Value before mechanism throughout |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts, endings on facts/next steps |
| 2.7 | Audience register correct | PASS | Technical + business voice for operators |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "simply", "just", "easy" |
| 2.9 | No passive value statements | PASS | Concrete: "0.065 ETH deposit", "Q4 2025", "Minutes" vs "Hours" |
| 2.10 | No hedging openers | PASS | Factual, subject-first |
| 2.11 | Terminology locked and consistent | PASS | BYOC, NaaP, off-chain, on-chain, remote signer all correct |

**Category 2 verdict: PASS**

---

### Category 3 - Section Naming & Headings

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Technical Role (H2) | 5 | 4 | 5 | 5 | 5 | **23/25** |
| Business Role (H2) | 5 | 5 | 5 | 5 | 5 | **25/25** |
| Network Role (H2) | 5 | 5 | 5 | 5 | 5 | **25/25** |
| Operational Mode (H2) | 5 | 4 | 4 | 5 | 5 | **23/25** |
| Related Pages (H2) | EXEMPT | | | | | EXEMPT |

Note: Accordion titles ("From a Cloud Background?", "From an Ethereum Background?", "Neither?") are component-level labels, exempt from heading rubric.

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading >=20/25 | PASS | All scored headings pass (23-25 range) |
| 3.2 | No banned/weak standalone terms | PASS | |
| 3.3 | No literal contrast labels | PASS | |
| 3.4 | Domain-anchor rule applied | PASS | "Technical", "Business", "Network" are domain anchors |
| 3.5 | Heading names concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | |
| 3.7 | Sounds like expert editorial choice | PASS | Clean three-layer framework (Technical/Business/Network) |

**Category 3 verdict: PASS - average score 24/25**

---

### Category 4 - Page Structure & Content Architecture

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Orient gateway operators to "what role does a gateway play?" |
| 4.2 | Purpose statement test | PASS | "This page lets the gateway operator understand what a gateway does and where it fits in the network" |
| 4.3 | PREV/NEXT adjacency correct | PASS | Navigator -> Role -> Capabilities: logical knowledge flow |
| 4.4 | No dead ends | PASS | Related Pages CardGroup with 4 next steps |
| 4.5 | Prerequisites stated or linked | PASS | Accordion frames serve as entry points for diverse backgrounds |
| 4.6 | Out-of-scope is clear | PASS | Conceptual only, does not cover setup/config |
| 4.7 | Information type per section correct | PASS | Conceptual, reference, evaluative all permitted for `orient` |
| 4.8 | No content duplication | PASS | Distinct from Capabilities, Architecture, Business Model |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |
| 4.11 | No hardcoded data from data files | PASS | ETH amounts (0.065, 0.03) are protocol constants; port numbers standard |

**Category 4 verdict: PASS**

---

### Category 5 - Layout, Components & Template

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | `concept` template with Accordion, Tip, Tabs, Table, CardGroup |
| 5.2 | Required sections present | PASS | Overview (accordions), depth sections, Related Pages |
| 5.3 | Only approved components | PASS | AccordionGroup, Tip, CustomDivider, Tabs, StyledTable, Note, CardGroup |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon |
| 5.5 | Info type -> component mapping | PASS | Conceptual -> Accordion; reference -> Table; multi-path -> Tabs |
| 5.6 | MDX renders clean | PASS | All JSX closed, Mermaid blocks correct |
| 5.7 | No old-schema frontmatter | PASS | Canonical 7-type values |
| 5.8 | CSS uses custom properties only | PASS | Mermaid theme vars only |
| 5.9 | Generated file banners intact | N/A | Human-authored |
| 5.10 | Component naming/import conventions | PASS | PascalCase, proper imports |
| 5.11 | No deprecated Mintlify components | PASS | Modern callout syntax |

**Category 5 verdict: PASS**

---

### Category 6 - Veracity & Factual Accuracy

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | PASS | Q4 2025 shipping (GitHub PRs #3791, #3822), ETH requirements from spec, standard ports |
| 6.2 | Code/commands tested | N/A | No code blocks |
| 6.3 | No deprecated API usage | N/A | No API references |
| 6.4 | Numbers are real | PASS | 0.065 + 0.03 = 0.095 ETH (correct sum), ports 1935/8935 standard |
| 6.5 | REVIEW flags for unverified claims | PASS | No unverified claims detected |
| 6.6 | veracityStatus honest | **FAIL** | Field missing. Content is sourced; suggest `verified` |
| 6.7 | Authoritative vs AI glossary | PASS | Uses locked terminology |
| 6.8 | Source staleness check | PASS | Protocol-level info, stable sources |
| 6.9 | No open-ended research tasks | PASS | |

**Category 6 verdict: FAIL - 1 issue (missing veracityStatus field)**

---

### Category 7 - Navigation & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | |
| 7.2 | Navigation matches file system | PASS | |
| 7.3 | Tab entry portal routes to all sections | PASS | |
| 7.4 | No structural orphans | PASS | Reachable from nav and from Navigator page |
| 7.5 | Audience journey complete | PASS | Role -> Capabilities -> Architecture -> Business Model |
| 7.6 | Cross-tab graduation paths | N/A | Within-tab page |
| 7.7 | File in correct lane | PASS | `v2/gateways/concepts/` |
| 7.8 | File naming conventions | PASS | |
| 7.9 | _workspace/ TTL compliance | N/A | |
| 7.10 | No links to dep- files | PASS | All links point to live pages |

**Category 7 verdict: PASS**

---

### Category 8 - Links & Rendering

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | Capabilities, architecture, business-model, dual-configuration, navigator all valid |
| 8.2 | All external links live | PASS | GitHub PRs cited as references, no direct URLs to test |
| 8.3 | All snippet imports resolve | PASS | LinkArrow, CustomDivider, ScrollableDiagram, CenteredContainer |
| 8.4 | All images load | PASS | OG fallback only; Mermaid is inline |
| 8.5 | Page renders without error | PASS | Clean JSX |
| 8.6 | No TODO/TBD/Coming Soon | PASS | |

**Category 8 verdict: PASS**

---

### Category 9 - Process & Governance

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | INFO | lastVerified suggests review but no explicit marker |
| 9.2 | Consuming decisions in registry | INFO | |
| 9.3 | Gate prerequisites met | INFO | status: current and recent lastVerified suggest gates passed |
| 9.4 | Phase ordering respected | PASS | No orphaned veracity markers, headings finalised |
| 9.5 | Findings gathered before fixes | INFO | |
| 9.6 | Feedback routed | INFO | |

**Category 9 verdict: PASS (with caveats)**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter & Taxonomy | 7 | 4 | 13 |
| 2. Voice & Copy | 11 | 0 | 11 |
| 3. Section Naming & Headings | 7 | 0 | 7 |
| 4. Page Structure | 8 | 0 | 11 |
| 5. Layout & Components | 10 | 0 | 11 |
| 6. Veracity | 7 | 1 | 9 |
| 7. Navigation & IA | 8 | 0 | 10 |
| 8. Links & Rendering | 6 | 0 | 6 |
| 9. Process & Governance | 1 | 0 | 6 |
| **Total** | **65** | **5** | **84** |

**Overall verdict: NEEDS WORK**

**Top 3 issues:**
1. **Missing frontmatter fields** (complexity, lifecycleStage, veracityStatus). Fix: add `complexity: intermediate`, `lifecycleStage: discover`, `veracityStatus: verified`
2. **Missing veracityStatus despite strong sourcing.** Content is well-sourced (GitHub PRs, protocol specs, standard ports). Once field is added as `verified`, this page is close to shipping.
3. **ETH amounts in Operational Mode table** (0.065, 0.03, 0.095) should be confirmed against current on-chain parameters at next verification cycle. Not blocking, but flag for staleness monitoring.

**Estimated fix time:** 2 minutes (add 3 frontmatter fields). Re-review scope: Category 1 only.
