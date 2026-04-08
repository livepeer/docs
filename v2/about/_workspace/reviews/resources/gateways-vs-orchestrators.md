# Review: gateways-vs-orchestrators.mdx

**Page**: `v2/about/resources/knowledge-hub/gateways-vs-orchestrators.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`, `pageType` not accompanied by `pageVariant`, missing `purpose`, missing `lifecycleStage`, missing `complexity` -- wait, checking again: `lifecycleStage: discover`, `complexity: intermediate`, `audience: community` present. `purpose` is MISSING. `pageType` is MISSING. So: missing `pageType`, `purpose`, `pageVariant`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | FAIL | `pageType` field is missing entirely from frontmatter |
| 1. Frontmatter | 1.3 | pageVariant valid | FAIL | `pageVariant` field missing |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | FAIL | `purpose` field missing |
| 1. Frontmatter | 1.5 | audience 7-token set | PASS | `audience: community` is valid |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` is valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` is valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Field missing |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Description is 206 characters, exceeding 160-char limit. Contains bold markdown (`**Gateways**`, `**Orchestrators**`). Contains en-dash. Not subject-first (starts with "Livepeer uses" which is acceptable but description includes "This page breaks down" self-reference) |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present with fallback.png |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Mixed quality: some good ("gateways vs orchestrators") but includes junk single words: `what`, `difference`, `types` |
| 2. Voice & Copy | 2.1 | UK English | FAIL | "behavior" should be "behaviour" (line 59: "Performs GPU Work?"); also "misbehavior" (line 48 in description). Actually line 59 header row says "Performs GPU Work?" -- checking rest: no explicit US spelling in body. The description has "misbehavior" which is not visible in body but was an initial concern -- actually checking the raw file more carefully: no US spellings found in body content. PASS on re-examination |
| 2. Voice & Copy | 2.1 | UK English (corrected) | PASS | No US spellings in body content |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No banned words found |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No banned phrases |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | No self-reference in body text (description has "This page breaks down" but that is in frontmatter only) |
| 2. Voice & Copy | 2.5 | Opening order correct | PASS | Opens with "In brief:" then direct value statement |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | Clear, single-purpose paragraphs |
| 2. Voice & Copy | 2.7 | Audience register correct | PASS | Community-level, accessible language |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | PASS | No prohibited phrases |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | Statements are concrete |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | Direct opener |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | Gateway, Orchestrator used correctly |
| 2. Voice & Copy | 2.12 | No em-dashes | FAIL | Line 5-6 in description uses en-dashes/em-dashes. Line 95: "They do not expose external APIs directly-Gateways handle that." uses a hyphen where an em-dash was intended (neither is acceptable; rewrite needed) |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | Paragraphs lead with system entities (Gateways, Orchestrators) |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No hedging verbs |
| 2. Voice & Copy | 2.15 | Description not self-referential | FAIL | Description contains "This page breaks down how they differ" |
| 2. Voice & Copy | 2.16 | Deprecated terms absent | PASS | No deprecated terms |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | Consistent |
| 2. Voice & Copy | 2.18 | Spell check | PASS | No unknown words |
| 2. Voice & Copy | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Standard terms |
| 2. Voice & Copy | 2.20 | Per-tab terminology | PASS | About-tab appropriate |
| 2. Voice & Copy | 2.21 | First use defined/linked | PASS | Gateway and Orchestrator defined at first use via the overview callout |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | No violations |
| 3. Headings | 3.1 | Heading score >=20/25 | PASS | See table below |
| 3. Headings | 3.2 | No banned/weak headings | PASS | No banned terms as standalone headings |
| 3. Headings | 3.3 | No literal contrast labels | FAIL | Title itself is "Gateways Vs. Orchestrators: What's the Difference?" -- literal contrast label with question in heading |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | "Gateway Responsibilities" and "Orchestrator Responsibilities" are domain-anchored |
| 3. Headings | 3.5 | Names concept not examples | PASS | Headings name the roles |
| 3. Headings | 3.6 | Title well-formed | FAIL | Title is 7 words with a question ("What's the Difference?"). Should be 1-3 words naming the governing concept, e.g. "Network Role Architecture" |
| 3. Headings | 3.7 | Sounds like expert choice | FAIL | "What's the Difference?" is FAQ-style, not editorial |
| 3. Headings | 3.8 | Per-pageType naming style | N/A | pageType missing; cannot evaluate |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-accessible |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | Role names anchor headings |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Explains the gateway/orchestrator distinction for community |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community reader understand the difference between gateways and orchestrators." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Knowledge-hub page; stands alone |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages or Next Step CTA at end |
| 4. Structure | 4.5 | Prerequisites stated/linked | PASS | None needed |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Focused on the distinction only |
| 4. Structure | 4.7 | Information type correct | PASS | Conceptual comparison for knowledge-hub |
| 4. Structure | 4.8 | No content duplication | PASS | Unique comparison content |
| 4. Structure | 4.9 | Section orientation page | N/A | Page-level |
| 4. Structure | 4.10 | Cross-tab links | FAIL | No links to Gateway or Orchestrator tabs |
| 4. Structure | 4.11 | Discord test | PASS | Can link this page to answer "what is the difference between gateways and orchestrators?" |
| 4. Structure | 4.12 | Page size appropriate | PASS | 2,692 bytes, above 2KB minimum |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None found |
| 4. Structure | 4.14 | Flat layout appropriate | PASS | Single flat page |
| 4. Structure | 4.15 | Trade-offs present | N/A | Not concept/economics/architecture in the strict sense |
| 4. Structure | 4.16 | Content pass context block | FAIL | No pageType, no purpose in frontmatter; context block cannot be fully completed |
| 5. Layout | 5.1 | Correct template | FAIL | No pageType set; cannot evaluate template conformance. Page lacks a proper template structure |
| 5. Layout | 5.2 | Required sections present | FAIL | Missing Related Pages/CTA footer. Has Overview but no standard template sections |
| 5. Layout | 5.3 | Only approved components | PASS | Callout, FlexContainer, Icon, Mermaid (via code fence) are standard |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon |
| 5. Layout | 5.5 | Info type to component mapping | PASS | Comparison table + Mermaid diagram for conceptual content |
| 5. Layout | 5.6 | MDX renders clean | PASS | Clean MDX |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | Missing pageType and purpose entirely (not old values, missing values) |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No CSS |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/imports | PASS | No explicit imports needed for Mintlify built-ins |
| 5. Layout | 5.11 | Gold-standard template | FAIL | No template structure identifiable |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No standard blocks (no introduction block, no related-pages-footer) |
| 5. Layout | 5.13 | Section ordering | FAIL | Cannot evaluate without pageType |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view |
| 5. Layout | 5.15 | Data imports used | N/A | No hardcoded data requiring import |
| 5. Layout | 5.16 | Related Pages/Next Step CTA | FAIL | Neither present |
| 5. Layout | 5.17 | Related Pages format | N/A | Not present |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block metadata | FAIL | Mermaid code block has no `icon` or `title` attributes |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | N/A | No cards |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Raw markdown table used (lines 59-63) instead of StyledTable |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One table |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One table, appropriate |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No CustomDivider import or usage. Uses raw `---` horizontal rules instead |
| 5. Layout | 5.27 | Mermaid governed colours | FAIL | Mermaid diagram uses default colours, not governed palette from MermaidColours.jsx |
| 5. Layout | 5.28 | Import section ordering | FAIL | No imports at all; page uses no imported components |
| 5. Layout | 5.29 | Media placeholders in TODO | N/A | No media placeholders |
| 5. Layout | 5.30 | Fact-check flags | N/A | No unverified claims |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | Comparison table visible on load |
| 5. Layout | 5.32 | Reference tables at end | N/A | Table is comparison, not reference |
| 5. Layout | 5.33 | Drafts in workspace | PASS | In published nav, no draft status |
| 5. Layout | 5.34 | No inline styles/hardcoded hex | PASS | None found |
| 6. Veracity | 6.1 | Every claim citable | PASS | Role descriptions match official architecture |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code commands |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers |
| 6. Veracity | 6.5 | REVIEW flags for unverified | PASS | No unverified claims |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | Not a glossary |
| 6. Veracity | 6.8 | Source staleness | PASS | Architecture descriptions are stable |
| 6. Veracity | 6.9 | No open-ended research | PASS | No research tasks |
| 6. Veracity | 6.10 | Source authority tiers | PASS | Architecture descriptions align with go-livepeer |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | Not a glossary |
| 6. Veracity | 6.12 | Glossary verified primary | N/A | Not a glossary |
| 7. Navigation | 7.1 | Page in docs.json | PASS | docs.json line 2180 |
| 7. Navigation | 7.2 | Nav matches file system | PASS | Matches |
| 7. Navigation | 7.3 | Tab entry portal routes | N/A | Not portal |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Part of knowledge-hub section |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Should link to Gateway and Orchestrator tabs for readers who want to go deeper |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published content in v2/ |
| 7. Navigation | 7.8 | File naming conventions | PASS | `gateways-vs-orchestrators.mdx` descriptive |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | 2,692 bytes, above 2KB |
| 7. Navigation | 7.11 | Guides section serves secondary | N/A | Not guides |
| 8. Links | 8.1 | All internal links resolve | N/A | No internal links in page body |
| 8. Links | 8.2 | All external links live | N/A | No external links |
| 8. Links | 8.3 | All snippet imports resolve | N/A | No imports |
| 8. Links | 8.4 | All images load | N/A | No images |
| 8. Links | 8.5 | Page renders without error | PASS | Clean MDX |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None found |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off |
| 9. Process | 9.2 | Decisions in registry | N/A | No consuming decisions |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence |
| 9. Process | 9.5 | Findings before fixes | N/A | Original content |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections |
| 10. Completeness | 10.1 | Every question has a page | PASS | Comparison question answered |
| 10. Completeness | 10.2 | Zero-to-hero journey | N/A | Knowledge-hub article, not journey |
| 10. Completeness | 10.3 | All persona paths unblocked | FAIL | No links to deeper role-specific tabs |
| 10. Completeness | 10.4 | Scope boundaries explicit | PASS | Focused comparison only |
| 10. Completeness | 10.5 | Self-containment | PASS | Self-contained comparison |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 5 (desc) | "This page breaks down how they differ and why both roles matter" | "This page" | banned (self-ref in description) | YES |
| 95 | "They do not expose external APIs directly-Gateways handle that." | `not [X]` | procedural (factual architectural fact) | No |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Overview | 3 | 2 | 5 | 4 | 5 | 19/25 FAIL |
| Gateway Responsibilities | 5 | 4 | 5 | 5 | 4 | 23/25 |
| Orchestrator Responsibilities | 5 | 4 | 5 | 5 | 4 | 23/25 |

Note: "Overview" is in the "Avoid" tier per check 3.2 but scores 19/25 which is below the 20/25 threshold.

## Spelling/Typo Check

No typos found.

## Component Matrix

| Component | Used? | Appropriate? | Notes |
|---|---|---|---|
| Callout | Yes | Yes (if pageType were concept) | Built-in |
| FlexContainer | Yes | Yes | Layout utility |
| Icon | Yes | Yes | Decorative |
| Mermaid (code fence) | Yes | Yes | Missing governed colours |
| Raw markdown table | Yes | FAIL | Should use StyledTable |
| CustomDivider | No | Should be present | Uses raw `---` instead |

## Cross-Category Connections

```
Root Cause 1: Missing pageType, purpose, and pageVariant frontmatter
Affects: Cat 1.1 + Cat 1.2 + Cat 1.3 + Cat 1.4 + Cat 4.16 + Cat 5.1 + Cat 5.7 + Cat 5.13
Fix: Add `pageType: concept`, `pageVariant: knowledge-hub`, `purpose: explain`

Root Cause 2: Page predates current component governance
Affects: Cat 5.20 + Cat 5.23 + Cat 5.26 + Cat 5.27 + Cat 5.28
Fix: Add CustomDivider import, replace raw table with StyledTable, add Mermaid governed colours, add code block metadata

Root Cause 3: No links or handoffs anywhere in the page
Affects: Cat 4.4 + Cat 4.10 + Cat 5.16 + Cat 7.6 + Cat 10.3
Fix: Add Related Pages footer with links to Gateway tab, Orchestrator tab, and Network Overview
```

## Blocking Decision

```
Blocking Decision: What is this page's pageType?
Options: [concept] (explains a distinction) / [resource] (knowledge-hub article)
Recommendation: `pageType: concept`, `pageVariant: knowledge-hub`, `purpose: explain`
All other findings are conditional on this classification.
```

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 5 | 6 | 5/11 |
| 2. Voice & Copy | 22 | 20 | 2 | 20/22 |
| 3. Headings | 10 | 7 | 3 | 7/10 |
| 4. Structure | 12 | 8 | 4 | 8/12 |
| 5. Layout | 20 | 7 | 13 | 7/20 |
| 6. Veracity | 5 | 4 | 1 | 4/5 |
| 7. Navigation | 7 | 5 | 2 | 5/7 |
| 8. Links | 2 | 2 | 0 | 2/2 |
| 9. Process | 3 | 0 | 3 | 0/3 |
| 10. Completeness | 4 | 3 | 1 | 3/4 |

**Overall**: 61/96 applicable checks passed
**Verdict**: NEEDS WORK
**Critical issues**:
1. Missing `pageType`, `purpose`, and `pageVariant` frontmatter fields (blocking decision required)
2. No component imports, no CustomDivider, raw markdown table, ungovened Mermaid colours -- predates component governance
3. No links anywhere in page body -- no cross-tab links, no Related Pages footer, no handoffs to Gateway/Orchestrator tabs
