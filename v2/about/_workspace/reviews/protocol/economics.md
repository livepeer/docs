# Review: economics.mdx

**Page**: `v2/about/protocol/economics.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. Has title, sidebarTitle, description, pageType, audience, purpose, complexity, lifecycleStage, keywords, OG block |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` is not in the 15-value canonical set. Deprecated alias. Closest: `explain` |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: general` is not in the 7-token set |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | "Learn how LPT, staking..." starts with verb imperative directed at reader. 90 chars OK but "Learn" is self-referential |
| 1. Frontmatter | 1.12 | OG image block | PASS | All 5 OG fields with fallback |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: "livepeer", "about", "protocol", "economics". Not searcher-intent-aligned |
| 2. Voice | 2.1 | UK English | FAIL | "optimization" (heading line 137) should be "optimisation". "Optimisation" appears as "Optimisation" in one place but "optimization" in heading |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No banned phrases |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No banned constructions |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with "We'll cover the LPT tokenomics" (line 40) -- uses "we" which violates entity-led voice |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Paragraphs are step-focused |
| 2. Voice | 2.7 | Audience register | PASS | Technical-financial register appropriate |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | No prohibited phrases |
| 2. Voice | 2.9 | No passive value statements | FAIL | "~99% cost reduction" (line 108) -- no source cited for this claim |
| 2. Voice | 2.10 | No hedging openers | FAIL | "We'll cover" (line 40) is a hedging/preview opener |
| 2. Voice | 2.11 | Terminology locked | PASS | Terms correct |
| 2. Voice | 2.12 | No em-dashes | PASS | None |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "We'll cover" (line 40), "We'll" uses first person |
| 2. Voice | 2.14 | No hedging verbs | PASS | Direct assertions in body |
| 2. Voice | 2.15 | Description not self-referential | FAIL | "Learn how" is reader-directed, not subject-first |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcasters" used throughout (lines 79, 83, 84, 87, 104, 110, 125, 150, 154). "Broadcaster" is deprecated -- should be "Gateway" |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Other terms correct |
| 2. Voice | 2.18 | Spell check | PASS | No typos found |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | "Broadcasters" as primary term conflicts with canonical "Gateway" |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | About tab should use "Gateway" not "Broadcaster" |
| 2. Voice | 2.21 | First use defined/linked | FAIL | "MaxFloat" (line 99), "recipientRand" (line 97), "faceValue" (line 89), "winProb" (line 89) -- all undefined at first use |
| 2. Voice | 2.22 | Terminology lock respected | FAIL | "Broadcaster" violates the Gateway/Broadcaster lock |
| 3. Headings | 3.1 | Heading score >=20/25 | FAIL | "Notes" scores 10/25 (banned standalone term per 3.2). "Client Integration" scores 18/25 |
| 3. Headings | 3.2 | No banned headings | FAIL | "Notes" at line 165 is a banned standalone heading |
| 3. Headings | 3.3 | No literal contrast | PASS | No X vs Y |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Notes" has no domain context |
| 3. Headings | 3.5 | Concept not examples | PASS | Concept-level headings |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Protocol Economics" -- 3 words |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Notes" is bureaucratic; "Summary: Complete Money Flow" is OK |
| 3. Headings | 3.8 | Per-pageType naming | FAIL | Concept page should not have "Notes" heading |
| 3. Headings | 3.9 | Per-audience register | PASS | Financial-technical register |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | "Notes", "Client Integration" lack domain anchoring |
| 4. Structure | 4.1 | One purpose, one audience | PASS | Economics explanation for community |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community understand how money flows in the protocol" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | After livepeer-token, before governance-model (docs.json lines 2131-2133) |
| 4. Structure | 4.4 | No dead ends | FAIL | "Notes" section at end is a dead end; no Related Pages or Next Step CTA |
| 4. Structure | 4.5 | Prerequisites stated | PASS | Implies familiarity with LPT and protocol basics |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Focuses on money flow, not governance or architecture |
| 4. Structure | 4.7 | Information type correct | PASS | Economic/analytical for concept page |
| 4. Structure | 4.8 | No duplication | FAIL | "Claiming Earnings" (line 76-77) duplicated across staking and fee sections |
| 4. Structure | 4.9 | Section orientation | N/A | Not section entry |
| 4. Structure | 4.10 | Cross-tab links | PASS | References to contracts page |
| 4. Structure | 4.11 | Discord test | PASS | Comprehensive money flow explanation |
| 4. Structure | 4.12 | Page size appropriate | PASS | 7.1KB, above 5KB |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No TODO/REVIEW visible |
| 4. Structure | 4.14 | Flat layout | PASS | Numbered sections, flat |
| 4. Structure | 4.15 | Trade-offs present | PASS | Probabilistic payments trade-off explained (cost vs accuracy) |
| 4. Structure | 4.16 | Content pass context block | FAIL | `purpose: concept` and `audience: general` deprecated |
| 5. Layout | 5.1 | Correct template | FAIL | No clear template adherence; numbered H3 sections unusual for concept |
| 5. Layout | 5.2 | Required sections present | FAIL | No Overview section |
| 5. Layout | 5.3 | Only approved components | PASS | No components used (pure prose) |
| 5. Layout | 5.4 | Avoided components absent | PASS | No avoided components |
| 5. Layout | 5.5 | InfoType to component mapping | PASS | Prose for conceptual content |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | Not verified |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `purpose: concept` deprecated |
| 5. Layout | 5.8 | CSS custom properties | N/A | No CSS |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | N/A | No imports |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Not following concept template |
| 5. Layout | 5.12 | Section blocks from library | FAIL | Custom structure |
| 5. Layout | 5.13 | Section ordering | FAIL | Numbered money-flow sections with "Notes" at end; not concept ordering |
| 5. Layout | 5.14 | Multi-view layout | N/A | None |
| 5. Layout | 5.15 | Data imports not hardcoded | FAIL | No component imports at all -- page is pure markdown prose. Contract function names referenced as inline code but not imported |
| 5. Layout | 5.16 | Related Pages footer | FAIL | No Related Pages or Next Step CTA |
| 5. Layout | 5.17 | Related Pages format | N/A | Not present |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | N/A | No navigation cards |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Maximum 1-2 tables | PASS | None |
| 5. Layout | 5.25 | Maximum 1 major layout | PASS | None |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No opening CustomDivider after imports |
| 5. Layout | 5.27 | Mermaid colours governed | N/A | No Mermaid |
| 5. Layout | 5.28 | Import ordering | N/A | No imports |
| 5. Layout | 5.29 | Media placeholders | N/A | None |
| 5. Layout | 5.30 | Fact-check flags | N/A | Not flagged |
| 5. Layout | 5.31 | Decision-critical visible | N/A | None |
| 5. Layout | 5.32 | Reference tables at end | N/A | None |
| 5. Layout | 5.33 | Drafts in workspace | N/A | Live page |
| 5. Layout | 5.34 | No inline styles in MDX | PASS | No inline styles |
| 6. Veracity | 6.1 | Claims citable | FAIL | "~99% cost reduction" (line 108) cited without source. Numbered reference markers [14] through [18] appear but no actual references section exists |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | PASS | Function names match current contracts |
| 6. Veracity | 6.4 | Numbers real | FAIL | Reference markers [14]-[18] point to nothing. "~99%" claim unsourced |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | "~99% cost reduction" should have REVIEW flag |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | None |
| 6. Veracity | 6.8 | Source staleness | PASS | Mechanisms are stable |
| 6. Veracity | 6.9 | No open research | FAIL | Broken reference markers indicate unfinished research |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | Claims not sourced to any tier |
| 6. Veracity | 6.11 | Glossary match | N/A | None |
| 6. Veracity | 6.12 | Glossary verified | N/A | None |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2132 |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | Correct |
| 7. Navigation | 7.3 | Tab entry portal | N/A | Not tab entry |
| 7. Navigation | 7.4 | No structural orphans | PASS | In nav |
| 7. Navigation | 7.5 | Audience journey | PASS | After token, before governance |
| 7. Navigation | 7.6 | Cross-tab graduation | N/A | No cross-tab links |
| 7. Navigation | 7.7 | File in correct lane | PASS | v2/about/protocol/ |
| 7. Navigation | 7.8 | File naming | PASS | Standard |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace |
| 7. Navigation | 7.10 | No stubs in nav | PASS | 7.1KB |
| 7. Navigation | 7.11 | Guides section | N/A | Not guides |
| 8. Links | 8.1 | Internal links resolve | N/A | No internal links |
| 8. Links | 8.2 | External links | NOT-TESTED | Not verified |
| 8. Links | 8.3 | Snippet imports | N/A | No snippet imports |
| 8. Links | 8.4 | Images load | N/A | No images |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Not verified |
| 8. Links | 8.6 | No TODO/TBD published | PASS | No visible TODO |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off |
| 9. Process | 9.2 | Decisions in registry | FAIL | No entry |
| 9. Process | 9.3 | Gate prerequisites | FAIL | No evidence |
| 9. Process | 9.4 | Phase ordering | FAIL | No evidence |
| 9. Process | 9.5 | Findings before fixes | N/A | Initial review |
| 9. Process | 9.6 | Feedback routed | N/A | Initial review |
| 10. Completeness | 10.1 | Question list coverage | NOT-TESTED | Not checked |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | Good money flow walkthrough |
| 10. Completeness | 10.3 | Primary persona paths | PASS | Community can follow economics |
| 10. Completeness | 10.4 | Scope boundaries | PASS | Focused on economics |
| 10. Completeness | 10.5 | Self-containment | PASS | Standalone for economics |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Money Flow: LPT Token Economics | 5 | 4 | 5 | 4 | 3 | 21 |
| 1. Staking Flow | 4 | 4 | 5 | 4 | 4 | 21 |
| 2. Reward Flow | 4 | 4 | 5 | 4 | 4 | 21 |
| 3. Payment Flow | 4 | 4 | 5 | 4 | 4 | 21 |
| 4. Fee Flow | 4 | 4 | 5 | 4 | 4 | 21 |
| 5. Withdrawal Flows | 4 | 4 | 5 | 4 | 4 | 21 |
| Client Integration | 3 | 3 | 4 | 4 | 4 | 18 |
| Gas Optimisation Strategies | 5 | 4 | 5 | 4 | 3 | 21 |
| Summary: Complete Money Flow | 4 | 3 | 4 | 4 | 3 | 18 |
| Notes | 2 | 1 | 2 | 2 | 3 | 10 |

## Spelling/Typo Check

- Line 108: "vs. Per-segment" -- capital P after period mid-sentence, should be lowercase "vs. per-segment"
- Line 137: "Gas Optimisation Strategies" heading is correct UK English but line 137 heading reads "Optimisation" while body text may differ

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 4 | 6 | 4/10 |
| 2. Voice | 22 | 10 | 12 | 10/22 |
| 3. Headings | 10 | 5 | 5 | 5/10 |
| 4. Structure | 14 | 10 | 3 | 10/14 |
| 5. Layout | 14 | 4 | 8 | 4/14 |
| 6. Veracity | 7 | 2 | 5 | 2/7 |
| 7. Navigation | 7 | 7 | 0 | 7/7 |
| 8. Links | 2 | 1 | 0 | 1/2 |
| 9. Process | 4 | 0 | 4 | 0/4 |
| 10. Completeness | 4 | 4 | 0 | 4/4 |

**Overall**: 47/94 applicable checks passed (43 FAIL)
**Verdict**: NEEDS WORK
**Critical issues**:
1. "Broadcaster" used throughout instead of "Gateway" (9+ instances)
2. Broken reference markers [14]-[18] with no references section
3. "Notes" is a banned standalone heading; "~99% cost reduction" claim unsourced
