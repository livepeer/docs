# Per-Page Quality Check - `v2/gateways/concepts/architecture.mdx`

**Date:** 2026-04-06
**Reviewer:** Claude (automated)
**Verdict:** NEEDS WORK

---

## Pre-flight

- **Page read:** Complete (371 lines)
- **Checks framework read:** Complete
- **Page classification:** `pageType: concept` | `audience: gateway` | `purpose: explain`
- **Position in journey:** Third in Concepts section (after Capabilities, before Business Model)

---

## 1. Frontmatter Table

| Field | Present | Value | Pass/Fail | Note |
|---|---|---|---|---|
| title | Yes | "Gateway Architecture" | PASS | Clear, concept-appropriate |
| sidebarTitle | Yes | "Architecture" | PASS | |
| description | Yes | 160 chars, subject-first | PASS | Well-formed |
| pageType | Yes | `concept` | PASS | Canonical 7-type |
| audience | Yes | `gateway` | PASS | Canonical 7-token |
| purpose | Yes | `explain` | PASS | Canonical 15-value |
| complexity | No | | **FAIL** | MISSING required field |
| lifecycleStage | No | | **FAIL** | MISSING required field |
| keywords | Yes | 12 terms | PASS | Specific, intent-aligned |
| OG image block | Yes | 5 fields complete | PASS | |
| veracityStatus | No | | **FAIL** | MISSING; page has unverified technical claims |
| status | Yes | current | PASS | |
| lastVerified | Yes | 2026-03-13 | PASS | |

**Frontmatter verdict: FAIL - 3 required fields missing (complexity, lifecycleStage, veracityStatus)**

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
| 1.6 | complexity single canonical | **FAIL** | Missing. Suggest: `intermediate` |
| 1.7 | lifecycleStage canonical | **FAIL** | Missing. Suggest: `evaluate` |
| 1.8 | veracityStatus present and honest | **FAIL** | Missing; technical claims unverified |
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
| 2.1 | UK English throughout | PASS | |
| 2.2 | Zero banned words | PASS | |
| 2.3 | Zero banned phrases | PASS | |
| 2.4 | Zero banned constructions | **FAIL** | Line 268: "Both pipelines share..." leads with mechanism before outcome |
| 2.5 | Opening order correct | **FAIL** | Line 37: "Gateways sit at the application layer..." places position before value |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs |
| 2.7 | Audience register correct | **FAIL** | Register is architect-to-architect, not operator-to-operator. Gateway audience expects operational clarity |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "simply", "just", "easy" |
| 2.9 | No passive value statements | **FAIL** | Line 123: "retries with the next-best option" unquantified. Line 296: "produces the stated output" vague |
| 2.10 | No hedging openers | **FAIL** | Line 38: parenthetical defers value |
| 2.11 | Terminology locked and consistent | PASS | BroadcastSessionsManager, AISessionManager, TicketBroker, BYOC all correct. Note: "remote signer" may not be in locked set |

**Category 2 verdict: FAIL - 5 issues**

---

### Category 3 - Section Naming & Headings

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Gateway Layer Context | 4 | 4 | 5 | 5 | 5 | **23/25** |
| Gateway Interactions | 5 | 5 | 5 | 5 | 4 | **24/25** |
| Applications | 5 | 4 | 5 | 5 | 5 | **24/25** |
| Orchestrators | 5 | 5 | 5 | 5 | 5 | **25/25** |
| Remote Signer | 5 | 4 | 5 | 5 | 5 | **24/25** |
| Arbitrum Protocol | 4 | 5 | 5 | 5 | 5 | **24/25** |
| Dual Pipeline Architecture | 5 | 5 | 5 | 5 | 4 | **24/25** |
| Video vs AI Pipelines | 5 | 5 | 5 | 5 | 5 | **25/25** |
| Job Lifecycle | 5 | 4 | 5 | 5 | 5 | **24/25** |
| Lifecycle Steps | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Software Components | 5 | 4 | 5 | 5 | 5 | **24/25** |
| go-livepeer | 5 | 5 | 5 | 5 | 5 | **25/25** |
| livepeer_cli | 5 | 4 | 5 | 5 | 5 | **24/25** |
| Remote Signer (off-chain) | 4 | 5 | 5 | 5 | 4 | **23/25** |
| Arbitrum Contracts (on-chain) | 5 | 5 | 5 | 5 | 4 | **24/25** |
| Related Pages | EXEMPT | | | | | EXEMPT |

| # | Check | Result | Notes |
|---|---|---|---|
| 3.1 | Every heading >=20/25 | PASS | All 15 scored headings pass (23-25 range) |
| 3.2 | No banned/weak standalone terms | PASS | |
| 3.3 | No literal contrast labels | PASS | |
| 3.4 | Domain-anchor rule applied | PASS | |
| 3.5 | Heading names concept, not examples | PASS | |
| 3.6 | Title well-formed | PASS | |
| 3.7 | Sounds like expert editorial choice | PASS | |

**Category 3 verdict: PASS - all headings 23-25/25**

---

### Category 4 - Page Structure & Content Architecture

| # | Check | Result | Notes |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | **FAIL** | Page serves two jobs: (1) explain how gateways fit into Livepeer architecture (lines 37-98, structural) and (2) explain internal gateway components (lines 159-333, operational). These should be separate pages |
| 4.2 | Purpose statement test | **FAIL** | Cannot write clean single-purpose sentence. Page reads as "understand how gateways fit in AND how to build one" |
| 4.3 | PREV/NEXT adjacency correct | PASS | Role -> Architecture -> Capabilities -> Business Model |
| 4.4 | No dead ends | PASS | CardGroup with 4 related pages |
| 4.5 | Prerequisites stated or linked | **FAIL** | Assumes reader knows orchestrators and Arbitrum contracts without linking to prerequisite pages |
| 4.6 | Out-of-scope is clear | PASS | Lines 39-40 signal Capabilities and Business Model are separate |
| 4.7 | Information type per section correct | **FAIL** | Job Lifecycle (lines 290-300) is procedural ("1. Job arrives..."); `explain` purpose does not permit procedural. Should reframe as conceptual |
| 4.8 | No content duplication | PASS | |
| 4.9 | Section orientation page present | N/A | |
| 4.10 | Cross-tab links at journey intersections | **FAIL** | All links within gateway tab only. Missing cross-tab links to About/Network, About/Protocol, Developer/Builder pages |
| 4.11 | No hardcoded data from data files | PASS | Port numbers (1935, 8935, 7935) are architectural constants |

**Category 4 verdict: FAIL - 5 issues (scope ambiguity is the most significant)**

---

### Category 5 - Layout, Components & Template

| # | Check | Result | Notes |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | Concept template with diagrams, tables, prose |
| 5.2 | Required sections present | **FAIL** | Concept requires Overview section; lines 37-41 act as overview but not explicitly titled |
| 5.3 | Only approved components | PASS | ScrollableDiagram, StyledTable, Note, CardGroup all approved |
| 5.4 | Avoided components absent | PASS | |
| 5.5 | Info type -> component mapping | **FAIL** | Lifecycle Steps (lines 290-300) are numbered procedural items but should use Steps component, not prose numbering |
| 5.6 | MDX renders clean | PASS | |
| 5.7 | No old-schema frontmatter | PASS | |
| 5.8 | CSS uses custom properties only | PASS | Mermaid hex colours are within its theme system |
| 5.9 | Generated file banners intact | N/A | Human-authored |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct imports |
| 5.11 | No deprecated Mintlify components | PASS | Uses Note not Callout |

**Category 5 verdict: FAIL - 2 issues (missing Overview H2, Steps component needed)**

---

### Category 6 - Veracity & Factual Accuracy

| # | Check | Result | Notes |
|---|---|---|---|
| 6.1 | Every factual claim citable | **FAIL** | Layer architecture (lines 45-96) needs whitepaper citation. Gateway components (lines 57-65) need go-livepeer source link. Commit hash 5691cb48 (line 314) age unknown |
| 6.2 | Code/commands tested | N/A | No code blocks |
| 6.3 | No deprecated API usage | INFO | Contract names (TicketBroker, ServiceRegistry) should be verified as current |
| 6.4 | Numbers are real | **FAIL** | Lines 258-259: "Wei per pixel or per millisecond" pricing units stated without source |
| 6.5 | REVIEW flags for unverified claims | **FAIL** | No REVIEW flags anywhere. Needed on: layer architecture, component names, pricing units, commit hash |
| 6.6 | veracityStatus honest | **FAIL** | Missing entirely |
| 6.7 | Authoritative vs AI glossary | PASS | No glossary references |
| 6.8 | Source staleness check | **FAIL** | Line 314: commit hash 5691cb48 may be stale. Port 7935 needs verification |
| 6.9 | No open-ended research tasks | **FAIL** | Implicit: verify layer architecture, component names, contract interactions, pricing models |

**Category 6 verdict: FAIL - 6 issues**

---

### Category 7 - Navigation & IA

| # | Check | Result | Notes |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | |
| 7.2 | Navigation matches file system | PASS | |
| 7.3 | Tab entry portal routes to all sections | PASS | |
| 7.4 | No structural orphans | PASS | |
| 7.5 | Audience journey complete | **FAIL** | No link to getting started/quickstart/setup. Page ends at Related Pages without actionable next step |
| 7.6 | Cross-tab graduation paths exist | **FAIL** | No cross-tab links. Missing: About/Network, About/Protocol, Developer pages |
| 7.7 | File in correct lane | PASS | |
| 7.8 | File naming conventions | PASS | |
| 7.9 | _workspace/ TTL compliance | N/A | |
| 7.10 | No links to dep- files | PASS | |

**Category 7 verdict: FAIL - 2 issues**

---

### Category 8 - Links & Rendering

| # | Check | Result | Notes |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | Capabilities, business-model, remote-signers, contract-addresses paths verified |
| 8.2 | All external links live | PASS | github.com/livepeer/go-livepeer is live |
| 8.3 | All snippet imports resolve | PASS | |
| 8.4 | All images load | PASS | OG fallback only; Mermaid inline |
| 8.5 | Page renders without error | PASS | Clean JSX |
| 8.6 | No TODO/TBD/Coming Soon | PASS | |

**Category 8 verdict: PASS**

---

### Category 9 - Process & Governance

| # | Check | Result | Notes |
|---|---|---|---|
| 9.1 | Human sign-off recorded | INFO | lastVerified suggests review |
| 9.2 | Consuming decisions in registry | INFO | |
| 9.3 | Gate prerequisites met | INFO | Missing frontmatter suggests incomplete |
| 9.4 | Phase ordering respected | INFO | Headings finalised but veracity incomplete |
| 9.5 | Findings gathered before fixes | INFO | |
| 9.6 | Feedback routed | INFO | |

**Category 9 verdict: INFO - cannot verify**

---

## Summary

| Category | Pass | Fail | Total |
|---|---|---|---|
| 1. Frontmatter & Taxonomy | 7 | 4 | 13 |
| 2. Voice & Copy | 6 | 5 | 11 |
| 3. Section Naming & Headings | 7 | 0 | 7 |
| 4. Page Structure | 4 | 5 | 11 |
| 5. Layout & Components | 8 | 2 | 11 |
| 6. Veracity | 1 | 6 | 9 |
| 7. Navigation & IA | 6 | 2 | 10 |
| 8. Links & Rendering | 6 | 0 | 6 |
| 9. Process & Governance | 0 | 0 | 6 |
| **Total** | **45** | **24** | **84** |

**Overall verdict: NEEDS WORK**

**Top 3 issues:**
1. **CRITICAL: Scope ambiguity / dual purpose.** Page serves two jobs: (1) structural architecture (lines 37-98) and (2) internal components and implementation (lines 159-333). Cannot write clean purpose statement. Consider splitting into "Gateway Architecture" (structural) and "Gateway Components" (operational), or refocusing to one job
2. **CRITICAL: Veracity crisis (6 fails).** Layer architecture, component names, pricing units, and commit hash all unverified. No REVIEW flags. Fix: add REVIEW flags on all technical claims, set `veracityStatus: unverified`, source key claims against go-livepeer codebase
3. **Missing frontmatter fields** (complexity, lifecycleStage, veracityStatus). Fix: add `complexity: intermediate`, `lifecycleStage: evaluate`, `veracityStatus: unverified`

**Additional issues:**
- Voice register is architect-to-architect, should be operator-to-operator (check 2.7)
- Job Lifecycle section is procedural but page purpose is `explain` (check 4.7); should use Steps component (check 5.5)
- No cross-tab links (check 7.6); no link to quickstart/setup (check 7.5)
- Opening (line 37) leads with position not value (check 2.5)
