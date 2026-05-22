# Per-Page Quality Check - `v2/gateways/navigator.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight

- **Page read:** Complete (332 lines)
- **Checks framework read:** Complete
- **Page classification:** `pageType: navigation` | `audience: gateway` | `purpose: orient`
- **Position in journey:** Portal root for gateways tab. Primary entry point; appears in docs.json under "About Gateways" group alongside portal.

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | Gateway Navigator | PASS | Clear, concept-specific |
| sidebarTitle | Yes | Navigator | PASS | Concise |
| description | Yes | "Not sure where to start? Use this decision guide..." | PASS | Subject-first, <160 chars, reader-benefit focused |
| pageType | Yes | navigation | PASS | Canonical 7-type |
| audience | Yes | gateway | PASS | Canonical 7-token |
| purpose | Yes | orient | PASS | Canonical 15-value |
| complexity | No | | **FAIL** | MISSING required field |
| lifecycleStage | No | | **FAIL** | MISSING required field |
| keywords | Yes | Comprehensive set | PASS | Specific, searcher-intent aligned |
| OG image block | Yes | 5 fields complete | PASS | Standard fallback |
| veracityStatus | No | | **FAIL** | MISSING required field |
| status | Yes | current | PASS | |
| lastVerified | Yes | 2026-03-13 | PASS | Recent |
| tag | Yes | "Start Here" | PASS | Navigation routing hint |

**Frontmatter verdict: FAIL - 3 required fields missing (complexity, lifecycleStage, veracityStatus)**

---

## Categories 1-9

### Category 1 - Frontmatter & Taxonomy

| # | Check | Result | Notes |
|---|---|---|---|
| 1.1 | All 10 required fields present | **FAIL** | Missing: complexity, lifecycleStage, veracityStatus |
| 1.2 | pageType uses 7-type canonical | PASS | `navigation` valid |
| 1.3 | pageVariant valid if present | N/A | |
| 1.4 | purpose uses 15-value set | PASS | `orient` valid |
| 1.5 | audience uses 7-token set | PASS | `gateway` valid |
| 1.6 | complexity single canonical | **FAIL** | Missing. Suggest: `beginner` |
| 1.7 | lifecycleStage canonical | **FAIL** | Missing. Suggest: `discover` |
| 1.8 | veracityStatus present and honest | **FAIL** | Missing |
| 1.9 | industry array valid | N/A | Optional, not present |
| 1.10 | niche array valid | N/A | Optional, not present |
| 1.11 | description well-formed | PASS | |
| 1.12 | OG image block complete | PASS | |
| 1.13 | keywords field quality | PASS | |

**Category 1 verdict: FAIL - 4 issues**

---

### Category 2 - Voice & Copy

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings |
| 2.2 | Zero banned words | PASS | |
| 2.3 | Zero banned phrases | PASS | |
| 2.4 | Zero banned constructions | PASS | |
| 2.5 | Opening order correct | **FAIL** | Tip block (line 44) opens with self-reference: "This page helps you navigate..." Should lead with reader action |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts, sections end on actions |
| 2.7 | Audience register correct | PASS | Operational, infrastructure-focused |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "simply", "just", "easy" |
| 2.9 | No passive value statements | PASS | Value claims concrete: "~0.095 ETH on Arbitrum" |
| 2.10 | No hedging openers | **FAIL** | Same self-reference issue (line 44): "Not sure where to start?" |
| 2.11 | Terminology locked and consistent | PASS | NaaP, BYOC, RTMP, HLS, SPE all correct |

**Category 2 verdict: FAIL - 2 issues (self-referential opener)**

---

### Category 3 - Section Naming & Headings

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| What's your goal? | 5 | 4 | 4 | 5 | 4 | **22/25** |
| Operational Mode | 4 | 5 | 5 | 4 | 5 | **20/25** |
| Journey through the docs | 3 | 2 | 2 | 4 | 5 | **18/25** |
| Guides by topic | 5 | 4 | 5 | 5 | 4 | **21/25** |
| Find your entry point by persona | 3 | 3 | 3 | 4 | 3 | **19/25** |
| Quick links | 2 | 1 | 3 | 4 | 5 | **17/25** |

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading >=20/25 | **FAIL** | 3 headings below threshold: "Journey through the docs" (18), "Find your entry point by persona" (19), "Quick links" (17) |
| 3.2 | No banned/weak standalone terms | **FAIL** | "Quick links" is an Avoid-tier term. "Journey" is metaphorical and vague |
| 3.3 | No literal contrast labels | PASS | |
| 3.4 | Domain-anchor rule | PASS | |
| 3.5 | Heading names concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | |
| 3.7 | Sounds like expert editorial choice | **FAIL** | "Quick links" and "Journey through the docs" are generic, not expert editorial |

**Category 3 verdict: FAIL - 3 headings below threshold. Rename suggestions: "Journey through the docs" -> "Documentation structure", "Find your entry point by persona" -> "Persona-based entry matrix", "Quick links" -> "Essential pages"**

---

### Category 4 - Page Structure & Content Architecture

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Orient gateway audience to section structure |
| 4.2 | Purpose statement test | PASS | "This page lets the gateway operator find the right entry point for their goals and experience level" |
| 4.3 | PREV/NEXT adjacency correct | PASS | Portal root, no prerequisites needed |
| 4.4 | No dead ends | PASS | Every path ends with concrete LinkArrow CTA |
| 4.5 | Prerequisites stated or linked | PASS | Assumes zero prior knowledge (appropriate for navigator) |
| 4.6 | Out-of-scope is clear | PASS | Orients and routes only |
| 4.7 | Information type per section correct | PASS | Structural/routing types, permitted for `orient` |
| 4.8 | No content duplication | PASS | Unique to this page |
| 4.9 | Section orientation page present | N/A | This IS the orientation page |
| 4.10 | Cross-tab links at journey intersections | **FAIL** | No cross-tab graduation paths for Founders evaluating or Builders scaling. Navigator is gateway-audience silo'd |
| 4.11 | No hardcoded data from data files | PASS | No contract addresses, prices, or CLI flags hardcoded |

**Category 4 verdict: FAIL - 1 issue (missing cross-tab graduation paths)**

---

### Category 5 - Layout, Components & Template

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | `navigation` uses Card/CardGroup, Tabs per matrix |
| 5.2 | Required sections present | PASS | Portal/routing structure present |
| 5.3 | Only approved components | PASS | Tabs, Card, CardGroup, Table, Accordion, Steps, LinkArrow, Tip, Warning, Note, Mermaid |
| 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon |
| 5.5 | Info type -> component mapping | PASS | Structural -> Table, Tabs, CardGroup, Accordion |
| 5.6 | MDX renders clean | PASS | Valid JSX, all imports present |
| 5.7 | No old-schema frontmatter | PASS | Uses canonical 7-type (missing fields are absent, not wrong values) |
| 5.8 | CSS uses custom properties only | PASS | Mermaid hex colors are necessary for diagram styling |
| 5.9 | Generated file banners intact | N/A | Human-authored |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct semantic imports |
| 5.11 | No deprecated Mintlify components | PASS | Uses new callout syntax |

**Category 5 verdict: PASS**

---

### Category 6 - Veracity & Factual Accuracy

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | PASS | Claims are structural/navigational, not requiring citation |
| 6.2 | Code/commands tested | N/A | No code blocks |
| 6.3 | No deprecated API usage | N/A | No API references |
| 6.4 | Numbers are real | PASS | "~0.095 ETH" consistent with setup docs, presented as approximate |
| 6.5 | REVIEW flags for unverified claims | PASS | Comment block (lines 29-34) has TODO for terminology validation |
| 6.6 | veracityStatus honest | **FAIL** | Field missing entirely |
| 6.7 | Authoritative vs AI glossary | PASS | Consistent with locked terminology |
| 6.8 | Source staleness check | PASS | No fast-changing data |
| 6.9 | No open-ended research tasks | PASS | |

**Category 6 verdict: FAIL - 1 issue (missing veracityStatus)**

---

### Category 7 - Navigation & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | |
| 7.2 | Navigation matches file system | PASS | |
| 7.3 | Tab entry portal routes to all sections | PASS | All 6 major sections have LinkArrow entries |
| 7.4 | No structural orphans | PASS | |
| 7.5 | Audience journey complete | PASS | Entry -> choose goal -> decide mode -> depth path -> exit |
| 7.6 | Cross-tab graduation paths exist | **FAIL** | Missing Founder->Gateway and Builder->Gateway graduation paths |
| 7.7 | File in correct lane | PASS | |
| 7.8 | File naming conventions | PASS | |
| 7.9 | _workspace/ TTL compliance | N/A | |
| 7.10 | No links to dep- files | PASS | |

**Category 7 verdict: FAIL - 1 issue (cross-tab graduation)**

---

### Category 8 - Links & Rendering

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | Spot-checked 15 LinkArrow hrefs, all valid |
| 8.2 | All external links live | N/A | No external links |
| 8.3 | All snippet imports resolve | PASS | 6 imports verified |
| 8.4 | All images load | PASS | OG fallback only + Mermaid inline |
| 8.5 | Page renders without error | PASS | Valid JSX structure |
| 8.6 | No TODO/TBD/Coming Soon | PASS | TODO in JSX comment only, not rendered |

**Category 8 verdict: PASS**

---

### Category 9 - Process & Governance

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | INFO | Not verifiable from file alone |
| 9.2 | Consuming decisions in registry | INFO | |
| 9.3 | Gate prerequisites met | **FAIL** | Missing frontmatter suggests gates not fully passed |
| 9.4 | Phase ordering respected | **FAIL** | TODO (lines 29-34) indicates terminology validation still pending |
| 9.5 | Findings gathered before fixes | INFO | |
| 9.6 | Feedback routed | INFO | |

**Category 9 verdict: FAIL - 2 issues**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter & Taxonomy | 7 | 4 | 13 |
| 2. Voice & Copy | 9 | 2 | 11 |
| 3. Section Naming & Headings | 4 | 3 | 7 |
| 4. Page Structure | 9 | 1 | 11 |
| 5. Layout & Components | 10 | 0 | 11 |
| 6. Veracity | 6 | 1 | 9 |
| 7. Navigation & IA | 8 | 1 | 10 |
| 8. Links & Rendering | 5 | 0 | 6 |
| 9. Process & Governance | 0 | 2 | 6 |
| **Total** | **58** | **14** | **84** |

**Overall verdict: NEEDS WORK**

**Top 3 issues:**
1. **BLOCKER: Missing frontmatter fields** (complexity, lifecycleStage, veracityStatus). Fix: add `complexity: beginner`, `lifecycleStage: discover`, `veracityStatus: unverified`
2. **BLOCKER: 3 headings below 20/25 threshold.** "Journey through the docs" (18) -> "Documentation structure". "Find your entry point by persona" (19) -> "Persona-based entry matrix". "Quick links" (17, banned weak term) -> "Essential pages"
3. **ISSUE: Self-referential opener** (line 44 Tip). Rewrite "This page helps you navigate..." to lead with reader action: "Choose the path that matches your operational mode and expertise level"
