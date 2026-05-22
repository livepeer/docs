# Review: core-mechanisms.mdx

**Page**: `v2/about/protocol/core-mechanisms.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`, missing `sidebarTitle` (present as "Core Mechanisms"). Actually has sidebarTitle. Missing `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` is not in the 15-value canonical set. Deprecated alias. Closest: `explain` |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: general` is not in the 7-token set |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | 368 chars, massively exceeds 160-char limit. Also uses "This page details" pattern (self-referential) |
| 1. Frontmatter | 1.12 | OG image block | PASS | All 5 OG fields with fallback |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: "livepeer", "about", "livepeer protocol", "protocol". Not searcher-intent-aligned |
| 2. Voice | 2.1 | UK English | FAIL | "behavior" (line 92) should be "behaviour". "misbehavior" (line 92) should be "misbehaviour" |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No banned phrases |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No banned constructions in rendered content |
| 2. Voice | 2.5 | Opening order correct | PASS | Opens with GitHub link then mechanism objectives |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Multiple sections have thin, incomplete paragraphs ("**Mechanisms** **Functions** **Implementation Mechanics**" at lines 298-300 are empty headers) |
| 2. Voice | 2.7 | Audience register | PASS | Technical register appropriate for intermediate concept |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | No prohibited phrases |
| 2. Voice | 2.9 | No passive value statements | PASS | No unquantified value claims |
| 2. Voice | 2.10 | No hedging openers | PASS | Opens directly |
| 2. Voice | 2.11 | Terminology locked | PASS | Terms correct |
| 2. Voice | 2.12 | No em-dashes | PASS | Uses en-dashes in compounds (e.g. "off-chain") |
| 2. Voice | 2.13 | Entity-led voice | PASS | System-first paragraphs |
| 2. Voice | 2.14 | No hedging verbs | PASS | Direct assertions |
| 2. Voice | 2.15 | Description not self-referential | FAIL | "This page details each core mechanism" |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Gateways/Broadcasters" at lines 60, 98, 129. "Broadcaster" appears as standalone at lines 296, 303, 314, 368. Should use "Gateway" consistently |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | "transcoders" used to mean orchestrators in several places (lines 245-246, 274, etc.) |
| 2. Voice | 2.18 | Spell check | FAIL | Line 341: "hight throughput" should be "high throughput" |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | "transcoderPool" (line 147) mixes deprecated "transcoder" with current usage |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | About tab should not be using "Broadcaster" as primary term |
| 2. Voice | 2.21 | First use defined/linked | FAIL | "transcoderPool" (line 147), "SortedDoublyLL" (never defined), "EarningsPool" (never defined) |
| 2. Voice | 2.22 | Terminology lock respected | FAIL | "transcoder" used as synonym for "orchestrator" in multiple places |
| 3. Headings | 3.1 | Heading score >=20/25 | FAIL | "Protocol Features" (17/25), "Protocol Actors" (17/25), "Protocol Mechanisms" (18/25), "Mechanism Details" (17/25) all below 20 |
| 3. Headings | 3.2 | No banned headings | PASS | No banned terms |
| 3. Headings | 3.3 | No literal contrast | PASS | No X vs Y |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | "Protocol" prefix on most headings |
| 3. Headings | 3.5 | Concept not examples | PASS | Concept-level |
| 3. Headings | 3.6 | Title well-formed | PASS | "Core Mechanisms and Functions" |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Protocol Features", "Protocol Actors", "Protocol Mechanisms" are generic |
| 3. Headings | 3.8 | Per-pageType naming | FAIL | Concept page should use governing-concept naming, not generic labels |
| 3. Headings | 3.9 | Per-audience register | PASS | Technical register |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | Domain nouns present |
| 4. Structure | 4.1 | One purpose, one audience | FAIL | Page tries to cover all mechanisms (staking, rewards, payments, upgrades) in one page; scope is very broad |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Hard to state one concrete action this page enables |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | After overview, before livepeer-token (docs.json lines 2129-2131) |
| 4. Structure | 4.4 | No dead ends | FAIL | Page does not end with a clear next step or Related Pages section |
| 4. Structure | 4.5 | Prerequisites stated | PASS | Implies familiarity with protocol overview |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | AI vs Video note separates the two systems |
| 4. Structure | 4.7 | Information type correct | PASS | Technical/conceptual for mechanisms |
| 4. Structure | 4.8 | No duplication | FAIL | Staking section (Tabs "Staking") repeats content nearly verbatim from its own intro section (lines 219-256 vs 229-256) |
| 4. Structure | 4.9 | Section orientation | N/A | Not section entry |
| 4. Structure | 4.10 | Cross-tab links | PASS | GitHub link, forum link |
| 4. Structure | 4.11 | Discord test | FAIL | Too sprawling to serve as a complete answer to any specific question |
| 4. Structure | 4.12 | Page size appropriate | PASS | 25.1KB, above 5KB |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No visible TODO/REVIEW (commented-out content is in JSX comments) |
| 4. Structure | 4.14 | Flat layout | PASS | Tabs provide depth within flat structure |
| 4. Structure | 4.15 | Trade-offs present | PASS | AI vs Video trade-off comparison table, slashing discussed |
| 4. Structure | 4.16 | Content pass context block | FAIL | `purpose: concept` and `audience: general` are deprecated |
| 5. Layout | 5.1 | Correct template | FAIL | No clear template; mixes AccordionGroup, Tabs, DynamicTable without pattern |
| 5. Layout | 5.2 | Required sections present | FAIL | No clear Overview section; starts with "Mechanism Objectives" |
| 5. Layout | 5.3 | Only approved components | PASS | AccordionGroup, Tabs, Tab, DynamicTable, BorderedBox all approved for concept |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD |
| 5. Layout | 5.5 | InfoType to component mapping | PASS | Tabs for multi-path mechanism details |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | Not verified |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `purpose: concept` deprecated |
| 5. Layout | 5.8 | CSS custom properties | PASS | Uses var(--accent) |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | PASS | Correct |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow concept template |
| 5. Layout | 5.12 | Section blocks from library | FAIL | Custom structure |
| 5. Layout | 5.13 | Section ordering | FAIL | Objectives, Features, Actors, Mechanisms, Details -- no clear concept-page ordering |
| 5. Layout | 5.14 | Multi-view layout | PASS | Tabs used for mechanism details (1 dimension = Tabs) |
| 5. Layout | 5.15 | Data imports not hardcoded | PASS | DynamicTable with inline data (acceptable for small tables) |
| 5. Layout | 5.16 | Related Pages footer | FAIL | No Related Pages or Next Step CTA at page end |
| 5. Layout | 5.17 | Related Pages format | N/A | Not present |
| 5. Layout | 5.18 | Tab icon prop | FAIL | Tabs lack icon props (Rounds, Staking, Rewards, Payments, Upgrades, Other -- no icons) |
| 5. Layout | 5.19 | Accordion icon prop | PASS | All Accordions have icon props |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks outside comments |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | N/A | No navigation cards |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Uses DynamicTable, not StyledTable |
| 5. Layout | 5.24 | Maximum 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Maximum 1 major layout | FAIL | DynamicTable + BorderedBox with Tabs -- 2 major layout elements at same level |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | CustomDivider with inline style: `style={{margin: 0, marginBottom: "-1rem"}}` |
| 5. Layout | 5.27 | Mermaid colours governed | N/A | No Mermaid |
| 5. Layout | 5.28 | Import ordering | PASS | Components first |
| 5. Layout | 5.29 | Media placeholders | N/A | None |
| 5. Layout | 5.30 | Fact-check flags | N/A | Not needed |
| 5. Layout | 5.31 | Decision-critical visible | FAIL | AI vs Video incentive comparison is in a DynamicTable but the mechanism details are hidden in Tabs |
| 5. Layout | 5.32 | Reference tables at end | PASS | Table is appropriately placed |
| 5. Layout | 5.33 | Drafts in workspace | N/A | Live page |
| 5. Layout | 5.34 | No inline styles in MDX | FAIL | CustomDivider style, Subtitle style, margins on DynamicTable |
| 6. Veracity | 6.1 | Claims citable | PASS | Protocol mechanism facts align with contract source |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | PASS | References current functions |
| 6. Veracity | 6.4 | Numbers real | PASS | "5760 blocks" (line 197) is correct mainnet round length |
| 6. Veracity | 6.5 | REVIEW flags | PASS | No unverified claims visible |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary refs |
| 6. Veracity | 6.8 | Source staleness | PASS | lastVerified 2026-03-17 |
| 6. Veracity | 6.9 | No open research | PASS | None |
| 6. Veracity | 6.10 | Source authority tiers | PASS | References contract source code |
| 6. Veracity | 6.11 | Glossary match | N/A | None |
| 6. Veracity | 6.12 | Glossary verified | N/A | None |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2130 |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | Correct |
| 7. Navigation | 7.3 | Tab entry portal | N/A | Not tab entry |
| 7. Navigation | 7.4 | No structural orphans | PASS | In nav |
| 7. Navigation | 7.5 | Audience journey | PASS | Second in protocol section |
| 7. Navigation | 7.6 | Cross-tab graduation | PASS | GitHub, forum links |
| 7. Navigation | 7.7 | File in correct lane | PASS | v2/about/protocol/ |
| 7. Navigation | 7.8 | File naming | PASS | Standard |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace |
| 7. Navigation | 7.10 | No stubs in nav | PASS | 25.1KB |
| 7. Navigation | 7.11 | Guides section | N/A | Not guides |
| 8. Links | 8.1 | Internal links resolve | PASS | Links verified in docs.json |
| 8. Links | 8.2 | External links | NOT-TESTED | Not verified |
| 8. Links | 8.3 | Snippet imports | PASS | Standard paths |
| 8. Links | 8.4 | Images load | N/A | No images |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Not verified |
| 8. Links | 8.6 | No TODO/TBD published | PASS | No visible TODO/TBD |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off |
| 9. Process | 9.2 | Decisions in registry | FAIL | No entry |
| 9. Process | 9.3 | Gate prerequisites | FAIL | No evidence |
| 9. Process | 9.4 | Phase ordering | FAIL | No evidence |
| 9. Process | 9.5 | Findings before fixes | N/A | Initial review |
| 9. Process | 9.6 | Feedback routed | N/A | Initial review |
| 10. Completeness | 10.1 | Question list coverage | NOT-TESTED | Not checked |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Several Tab sections have empty/placeholder headers ("**Mechanisms** **Functions** **Implementation Mechanics**") |
| 10. Completeness | 10.3 | Primary persona paths | FAIL | Incomplete Tab content (Payments, Upgrades, Other tabs have thin content) |
| 10. Completeness | 10.4 | Scope boundaries | PASS | AI vs Video boundary stated |
| 10. Completeness | 10.5 | Self-containment | PASS | Self-contained for mechanisms |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Mechanism Objectives | 4 | 3 | 5 | 4 | 4 | 20 |
| Protocol Features | 3 | 2 | 4 | 4 | 4 | 17 |
| Protocol Actors | 3 | 2 | 5 | 4 | 4 | 18 |
| Protocol Mechanisms | 3 | 2 | 4 | 4 | 4 | 17 |
| Mechanism Details | 3 | 3 | 4 | 3 | 4 | 17 |

## Spelling/Typo Check

- Line 92: "misbehavior" should be "misbehaviour" (UK English)
- Line 341: "hight throughput" should be "high throughput"

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 4 | 6 | 4/10 |
| 2. Voice | 22 | 12 | 10 | 12/22 |
| 3. Headings | 10 | 6 | 4 | 6/10 |
| 4. Structure | 14 | 8 | 6 | 8/14 |
| 5. Layout | 23 | 9 | 12 | 9/23 |
| 6. Veracity | 5 | 4 | 1 | 4/5 |
| 7. Navigation | 8 | 8 | 0 | 8/8 |
| 8. Links | 4 | 3 | 0 | 3/4 |
| 9. Process | 4 | 0 | 4 | 0/4 |
| 10. Completeness | 4 | 2 | 2 | 2/4 |

**Overall**: 56/104 applicable checks passed (45 FAIL)
**Verdict**: NEEDS WORK
**Critical issues**:
1. "Broadcaster" used throughout instead of "Gateway"; "transcoder" used as synonym for "orchestrator"
2. Multiple Tab sections have empty/placeholder headers with no content
3. Self-referential description, 368 chars (exceeds 160 limit by 2x)
