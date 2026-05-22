# Review: overview.mdx

**Page**: `v2/about/protocol/overview.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. Has title, sidebarTitle, description, pageType, audience, purpose, complexity, lifecycleStage, keywords, OG block. Non-standard field `aim` present |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` is deprecated in 7-type schema. Should be `concept` with `pageVariant: overview` or `navigation` with `pageVariant: overview` |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present; would be needed after 1.2 fix |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: overview` is not in the 15-value canonical set. Closest: `orient` |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: general` is not in the 7-token set. Should be `community` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: beginner` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing entirely |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Starts with "This section outlines" (self-referential). 265 chars, exceeds 160-char limit |
| 1. Frontmatter | 1.12 | OG image block | PASS | All 5 OG fields present with fallback path |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: "livepeer", "about", "protocol overview", "protocol", "overview". Not searcher-intent-aligned |
| 2. Voice | 2.1 | UK English | FAIL | "cyrptoeconomic" (line 51) is a typo. "incentivising" and "Decentralisation" are correct UK forms |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words found |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No banned phrases in visible body |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No active violations in rendered content |
| 2. Voice | 2.5 | Opening order correct | PASS | Opens with GitHub link then Quote stating protocol purpose directly |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Paragraphs are generally focused |
| 2. Voice | 2.7 | Audience register | PASS | General/community tone appropriate |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | No prohibited phrases for community audience |
| 2. Voice | 2.9 | No passive value statements | FAIL | "cost-effective, performant real-time media streaming" (line 172) unquantified value claim |
| 2. Voice | 2.10 | No hedging openers | PASS | Opens directly |
| 2. Voice | 2.11 | Terminology locked | PASS | Correct terms used |
| 2. Voice | 2.12 | No em-dashes | PASS | No em-dashes found |
| 2. Voice | 2.13 | Entity-led voice | PASS | Paragraphs lead with system facts |
| 2. Voice | 2.14 | No hedging verbs | FAIL | "enabling permissionless, global, open participation" (line 172) uses enabling-as-value-claim |
| 2. Voice | 2.15 | Description not self-referential | FAIL | Starts with "This section outlines" |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Gateway (Broadcaster)" in actors table (line 208). Should lead with Gateway only |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Core terms used correctly |
| 2. Voice | 2.18 | Spell check | FAIL | "cyrptoeconomic" (line 51), "its essential" (line 111, should be "it's essential") |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Consistent |
| 2. Voice | 2.20 | Per-tab terminology | PASS | About tab terms appropriate |
| 2. Voice | 2.21 | First use defined/linked | FAIL | "Streamflow" (line 158) and "probabilistic micropayments" (line 158) undefined at first use |
| 2. Voice | 2.22 | Terminology lock respected | PASS | No violations |
| 3. Headings | 3.1 | Heading score >=20/25 | FAIL | "Guiding Principles" scores 17/25, "Livepeer Protocol" scores 17/25 (see table) |
| 3. Headings | 3.2 | No banned headings | PASS | No banned terms |
| 3. Headings | 3.3 | No literal contrast | PASS | No X vs Y |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | Domain context present |
| 3. Headings | 3.5 | Concept not examples | PASS | All concept-level |
| 3. Headings | 3.6 | Title well-formed | PASS | "Protocol Overview" is 2 words, concept-derived |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Guiding Principles" and "Livepeer Protocol" are vague/generic for their section content |
| 3. Headings | 3.8 | Per-pageType naming | PASS | Overview naming style |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-accessible |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | Domain nouns present |
| 4. Structure | 4.1 | One purpose, one audience | PASS | Protocol overview for community |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community orient to the protocol's scope and child pages" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | First in protocol group (docs.json line 2129); next is core-mechanisms |
| 4. Structure | 4.4 | No dead ends | PASS | Card grid links all sub-pages |
| 4. Structure | 4.5 | Prerequisites stated | PASS | No prerequisites needed |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Protocol vs network boundary implied via comments |
| 4. Structure | 4.7 | Information type correct | PASS | Conceptual + structural, appropriate for orient |
| 4. Structure | 4.8 | No duplication | FAIL | "Core Design Goals" (line 146) and "Guiding Principles" (line 152) overlap substantially |
| 4. Structure | 4.9 | Section orientation | PASS | This IS the section orientation page |
| 4. Structure | 4.10 | Cross-tab links | PASS | GitHub, whitepaper, external resources |
| 4. Structure | 4.11 | Discord test | FAIL | Too thin as standalone answer; primarily a section map. Useful but not complete for "what is the Livepeer protocol?" |
| 4. Structure | 4.12 | Page size appropriate | PASS | 14.6KB meets 5KB minimum |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No visible TODO/REVIEW |
| 4. Structure | 4.14 | Flat layout | PASS | Appropriate structure |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs, limitations, or failure conditions mentioned |
| 4. Structure | 4.16 | Content pass context block | FAIL | Non-standard `aim` field; pageType/purpose use deprecated values |
| 5. Layout | 5.1 | Correct template | FAIL | Mixes navigation cards with concept prose; no clear template |
| 5. Layout | 5.2 | Required sections present | FAIL | No distinct Overview section heading |
| 5. Layout | 5.3 | Only approved components | PASS | Card, Columns, Quote, DynamicTable all approved |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon |
| 5. Layout | 5.5 | InfoType to component mapping | PASS | Conceptual uses prose, structural uses cards |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | Not verified |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `pageType: overview` is deprecated |
| 5. Layout | 5.8 | CSS custom properties | PASS | Uses var(--accent) |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | PASS | Correct |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow any gold-standard template |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No gold-standard section blocks |
| 5. Layout | 5.13 | Section ordering | FAIL | Card grid first, then concept prose; inconsistent for either type |
| 5. Layout | 5.14 | Multi-view layout | N/A | Not applicable |
| 5. Layout | 5.15 | Data imports not hardcoded | PASS | Uses DynamicTable for actor data |
| 5. Layout | 5.16 | Related Pages footer | FAIL | No Related Pages or Next Step CTA at end |
| 5. Layout | 5.17 | Related Pages format | N/A | Not present |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | FAIL | Cards in Columns do not use CustomCardTitle |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Uses DynamicTable, not StyledTable |
| 5. Layout | 5.24 | Maximum 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Maximum 1 major layout | PASS | 1 DynamicTable |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | Inline style overrides: `style={{ margin: 0, marginBottom: "-2rem" }}` |
| 5. Layout | 5.27 | Mermaid colours governed | N/A | No Mermaid |
| 5. Layout | 5.28 | Import ordering | PASS | Components first |
| 5. Layout | 5.29 | Media placeholders | N/A | None |
| 5. Layout | 5.30 | Fact-check flags | N/A | Not needed |
| 5. Layout | 5.31 | Decision-critical visible | N/A | Not applicable |
| 5. Layout | 5.32 | Reference tables at end | PASS | Table after prose |
| 5. Layout | 5.33 | Drafts in workspace | N/A | Live page |
| 5. Layout | 5.34 | No inline styles in MDX | FAIL | CustomDivider style prop: `style={{ margin: 0, marginBottom: "-2rem" }}` |
| 6. Veracity | 6.1 | Claims citable | PASS | General protocol facts, citable to whitepaper and repos |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | N/A | No APIs |
| 6. Veracity | 6.4 | Numbers real | N/A | No specific numbers |
| 6. Veracity | 6.5 | REVIEW flags | PASS | No unverified claims visible |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary references |
| 6. Veracity | 6.8 | Source staleness | PASS | Stable content |
| 6. Veracity | 6.9 | No open research | PASS | None |
| 6. Veracity | 6.10 | Source authority tiers | PASS | Links to primary sources |
| 6. Veracity | 6.11 | Glossary match | N/A | None |
| 6. Veracity | 6.12 | Glossary verified | N/A | None |
| 7. Navigation | 7.1 | In docs.json | PASS | docs.json line 2129 |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | Correct |
| 7. Navigation | 7.3 | Tab entry portal | N/A | Section entry, not tab entry |
| 7. Navigation | 7.4 | No structural orphans | PASS | In nav |
| 7. Navigation | 7.5 | Audience journey | PASS | Entry to depth via cards |
| 7. Navigation | 7.6 | Cross-tab graduation | PASS | Links to GitHub, whitepaper |
| 7. Navigation | 7.7 | File in correct lane | PASS | v2/about/protocol/ |
| 7. Navigation | 7.8 | File naming | PASS | Standard |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in workspace |
| 7. Navigation | 7.10 | No stubs in nav | PASS | 14.6KB |
| 7. Navigation | 7.11 | Guides section | N/A | Not guides |
| 8. Links | 8.1 | Internal links resolve | PASS | Links to protocol sub-pages verified in docs.json |
| 8. Links | 8.2 | External links | NOT-TESTED | Not verified |
| 8. Links | 8.3 | Snippet imports | PASS | Standard paths |
| 8. Links | 8.4 | Images load | N/A | No images |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Not verified |
| 8. Links | 8.6 | No TODO/TBD published | PASS | Clean |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off recorded |
| 9. Process | 9.2 | Decisions in registry | FAIL | No registry entry |
| 9. Process | 9.3 | Gate prerequisites | FAIL | No evidence |
| 9. Process | 9.4 | Phase ordering | FAIL | No evidence |
| 9. Process | 9.5 | Findings before fixes | N/A | Initial review |
| 9. Process | 9.6 | Feedback routed | N/A | Initial review |
| 10. Completeness | 10.1 | Question list coverage | NOT-TESTED | Not checked |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | Links all sub-pages |
| 10. Completeness | 10.3 | Primary persona paths | PASS | Community can navigate |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | No explicit out-of-scope statement |
| 10. Completeness | 10.5 | Self-containment | PASS | Self-contained within About tab |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Protocol Section Map | 4 | 3 | 5 | 4 | 4 | 20 |
| Protocol Design 101 | 3 | 3 | 4 | 4 | 4 | 18 |
| Livepeer Whitepaper | 5 | 3 | 5 | 5 | 4 | 22 |
| Core Design Goals | 4 | 4 | 5 | 4 | 4 | 21 |
| Guiding Principles | 3 | 3 | 4 | 3 | 4 | 17 |
| Livepeer Protocol | 3 | 2 | 5 | 3 | 4 | 17 |
| Actors and Roles | 4 | 3 | 5 | 5 | 4 | 21 |
| Protocol Architecture | 4 | 3 | 5 | 4 | 4 | 20 |

## Spelling/Typo Check

- Line 51: "cyrptoeconomic" should be "cryptoeconomic"
- Line 111: "its essential" should be "it's essential" (missing apostrophe)

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 3 | 7 | 3/10 |
| 2. Voice | 22 | 14 | 8 | 14/22 |
| 3. Headings | 10 | 8 | 2 | 8/10 |
| 4. Structure | 16 | 10 | 5 | 10/16 |
| 5. Layout | 22 | 9 | 10 | 9/22 |
| 6. Veracity | 5 | 4 | 1 | 4/5 |
| 7. Navigation | 8 | 8 | 0 | 8/8 |
| 8. Links | 4 | 3 | 0 | 3/4 |
| 9. Process | 4 | 0 | 4 | 0/4 |
| 10. Completeness | 4 | 3 | 1 | 3/4 |

**Overall**: 62/105 applicable checks passed (38 FAIL)
**Verdict**: NEEDS WORK
**Critical issues**:
1. `pageType: overview`, `audience: general`, `purpose: overview` are all deprecated/invalid values
2. Description is self-referential ("This section outlines") and exceeds 160 chars
3. "Guiding Principles" and "Core Design Goals" sections duplicate content
