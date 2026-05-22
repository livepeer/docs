# Per-Page Quality Check - `v2/gateways/portal.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight

- **Page read:** Complete (159 lines)
- **Checks framework read:** Complete
- **Page classification:** `pageType: navigation` | `audience: gateway` | `purpose: orient`
- **Position in journey:** Tab root for Gateways. First page under "About Gateways" group, preceding Navigator. Entry point for all gateway content.

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | "Gateway Home Portal" | PASS | |
| sidebarTitle | Yes | "Portal" | PASS | |
| description | Yes | "Welcome To The Gateway Portal: Explore, Navigate, Create" | **FAIL** | Self-referential. Should be benefit-focused, subject-first |
| pageType | Yes | `navigation` | PASS | Canonical 7-type |
| audience | Yes | `gateway` | PASS | Canonical 7-token |
| purpose | Yes | `orient` | PASS | Canonical 15-value |
| complexity | No | | **FAIL** | MISSING required field. Suggest: `beginner` |
| lifecycleStage | No | | **FAIL** | MISSING required field. Suggest: `discover` |
| keywords | Yes | 24 terms | PASS | Present |
| OG image block | Yes | 5 fields complete | PASS | |
| veracityStatus | No | | **FAIL** | MISSING; `status: current` requires this field |
| status | Yes | current | PASS | |
| lastVerified | Yes | 2026-03-17 | PASS | |
| mode | Yes | frame | INFO | Custom field for frame-mode rendering |

**Frontmatter verdict: FAIL - 3 required fields missing + description self-referential**

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
| 1.9 | industry array valid | N/A | |
| 1.10 | niche array valid | N/A | |
| 1.11 | description well-formed | **FAIL** | "Welcome To The Gateway Portal: Explore, Navigate, Create" is self-referential. Fix: "Find video transcoding, AI inference setup, and operational guides for running a Livepeer Gateway." |
| 1.12 | OG image block complete | PASS | |
| 1.13 | keywords field quality | PASS | |

**Category 1 verdict: FAIL - 5 issues**

---

### Category 2 - Voice & Copy

| # | Check | Result | Notes |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | |
| 2.2 | Zero banned words | PASS | |
| 2.3 | Zero banned phrases | PASS | |
| 2.4 | Zero banned constructions | PASS | |
| 2.5 | Opening order correct | PASS | Portal pages use component-driven structure; hero delivers value at line 82 |
| 2.6 | Paragraph discipline | PASS | Card descriptions concise |
| 2.7 | Audience register correct | PASS | Technical, action-oriented for gateway operators |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "simply", "just", "easy" |
| 2.9 | No passive value statements | PASS | Statements concrete |
| 2.10 | No hedging openers | PASS | Hero opens with "Gateways serve as the primary demand aggregation layer" |
| 2.11 | Terminology locked and consistent | PASS | |

**Category 2 verdict: PASS**

---

### Category 3 - Section Naming & Headings

Portal pages use component-based structure (Cards, PortalCardsHeader) rather than markdown headings. Single text header:

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Gateway Portal (PortalCardsHeader) | 5 | 3 | 4 | 5 | 5 | **22/25** |

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading >=20/25 | PASS | 22/25 |
| 3.2 | No banned/weak standalone terms | PASS | |
| 3.3 | No literal contrast labels | N/A | |
| 3.4 | Domain-anchor rule applied | PASS | "Gateway" present |
| 3.5 | Heading names concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | |
| 3.7 | Sounds like expert editorial choice | PASS | |

**Category 3 verdict: PASS**

---

### Category 4 - Page Structure & Content Architecture

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Route gateway operators to appropriate subsections |
| 4.2 | Purpose statement test | PASS | "This page lets the gateway operator find the right entry point within the tab" |
| 4.3 | PREV/NEXT adjacency correct | PASS | Tab root; links to concepts, navigator, quickstart, setup, guides, resources |
| 4.4 | No dead ends | PASS | Every card links to a valid next page |
| 4.5 | Prerequisites stated or linked | N/A | Navigation page, no prerequisites |
| 4.6 | Out-of-scope is clear | PASS | Orients and routes only |
| 4.7 | Information type per section correct | PASS | Structural/navigation, matches `navigation` pageType |
| 4.8 | No content duplication | PASS | |
| 4.9 | Section orientation page present | N/A | This IS the orientation page |
| 4.10 | Cross-tab links at journey intersections | PASS | "Developer Level Up" badge suggests gateway->developer graduation |
| 4.11 | No hardcoded data from data files | PASS | No structured data present |

**Category 4 verdict: PASS**

---

### Category 5 - Layout, Components & Template

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | Navigation portal template |
| 5.2 | Required sections present | PASS | Hero + Card routing group |
| 5.3 | Only approved components | PASS | HeroSectionContainer, Card, Columns, LinkArrow, Badge all approved for `navigation` |
| 5.4 | Avoided components absent | PASS | |
| 5.5 | Info type -> component mapping | PASS | Structural -> Card routing |
| 5.6 | MDX renders clean | PASS | |
| 5.7 | No old-schema frontmatter | PASS | |
| 5.8 | CSS uses custom properties only | PASS | Commented CSS not rendered (line 88 is JSX comment) |
| 5.9 | Generated file banners intact | N/A | Human-authored |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct imports |
| 5.11 | No deprecated Mintlify components | PASS | |

**Category 5 verdict: PASS**

---

### Category 6 - Veracity & Factual Accuracy

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | **FAIL** | Lines 82-87: architectural claims about demand aggregation and gateway role uncited |
| 6.2 | Code/commands tested | N/A | No code blocks |
| 6.3 | No deprecated API usage | N/A | |
| 6.4 | Numbers are real | N/A | No numbers present |
| 6.5 | REVIEW flags for unverified claims | **FAIL** | No REVIEW flags on lines 82-87 |
| 6.6 | veracityStatus honest | **FAIL** | Missing entirely |
| 6.7 | Authoritative vs AI glossary | N/A | |
| 6.8 | Source staleness check | N/A | No time-sensitive content |
| 6.9 | No open-ended research tasks | **FAIL** | Lines 38-43: TODO for terminology validation still open |

**Category 6 verdict: FAIL - 4 issues**

---

### Category 7 - Navigation & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | |
| 7.2 | Navigation matches file system | PASS | |
| 7.3 | Tab entry portal routes to all sections | PASS | 6 cards cover: concepts, navigator, quickstart, setup, guides, resources |
| 7.4 | No structural orphans | PASS | |
| 7.5 | Audience journey complete | PASS | |
| 7.6 | Cross-tab graduation paths exist | PASS | Developer Level Up badge |
| 7.7 | File in correct lane | PASS | |
| 7.8 | File naming conventions | PASS | |
| 7.9 | _workspace/ TTL compliance | N/A | |
| 7.10 | No links to dep- files | PASS | |

**Category 7 verdict: PASS**

---

### Category 8 - Links & Rendering

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | **FAIL** | Lines 108, 144: relative links (`./concepts/`, `./guides/`) not verified against docs.json. Recommend absolute paths |
| 8.2 | All external links live | PASS | go-livepeer GitHub URL valid |
| 8.3 | All snippet imports resolve | PASS | All from `/snippets/components/` |
| 8.4 | All images load | PASS | OG fallback only |
| 8.5 | Page renders without error | PASS | |
| 8.6 | No TODO/TBD/Coming Soon | **FAIL** | Lines 38-43: TODO comment in published file. Even though not rendered, signals incomplete work |

**Category 8 verdict: FAIL - 2 issues**

---

### Category 9 - Process & Governance

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | INFO | lastVerified suggests review |
| 9.2 | Consuming decisions in registry | INFO | |
| 9.3 | Gate prerequisites met | INFO | Missing frontmatter suggests incomplete |
| 9.4 | Phase ordering respected | INFO | |
| 9.5 | Findings gathered before fixes | INFO | |
| 9.6 | Feedback routed | INFO | |

**Category 9 verdict: INFO - cannot verify**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter & Taxonomy | 6 | 5 | 13 |
| 2. Voice & Copy | 11 | 0 | 11 |
| 3. Section Naming & Headings | 7 | 0 | 7 |
| 4. Page Structure | 8 | 0 | 11 |
| 5. Layout & Components | 10 | 0 | 11 |
| 6. Veracity | 0 | 4 | 9 |
| 7. Navigation & IA | 9 | 0 | 10 |
| 8. Links & Rendering | 4 | 2 | 6 |
| 9. Process & Governance | 0 | 0 | 6 |
| **Total** | **55** | **11** | **84** |

**Overall verdict: NEEDS WORK**

**Top 3 issues:**
1. **Missing frontmatter fields** (complexity, lifecycleStage, veracityStatus) + self-referential description. Fix: add `complexity: beginner`, `lifecycleStage: discover`, `veracityStatus: unverified`. Rewrite description to "Find video transcoding, AI inference setup, and operational guides for running a Livepeer Gateway."
2. **Unresolved TODO in published file** (lines 38-43: terminology validation). Fix: complete the terminology audit or move to decision registry with owner and deadline
3. **Unverified architectural claims** (lines 82-87) without REVIEW flags. Fix: add REVIEW flags or cite sources (go-livepeer docs, whitepaper)

**Additional notes:**
- Line 70: "Build - Create - Innovate" tagline uses en-dash characters; confirm whether design text is exempt from dash prohibition
- Lines 108, 144: relative links should be converted to absolute paths or verified against docs.json
