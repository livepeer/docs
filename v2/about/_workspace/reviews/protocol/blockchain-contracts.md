# Review: blockchain-contracts.mdx

**Page**: `v2/about/protocol/blockchain-contracts.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`, missing `sidebarTitle` differs from standard. Has extra non-standard fields: `og:title`, `og:description`, `twitter:card` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` is not in the 15-value canonical set. It is a deprecated alias. Closest: `explain` |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: general` is not in the 7-token set. Should be `community` or `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first ("Architecture overview of all Livepeer protocol smart contracts"), 157 chars, no self-reference |
| 1. Frontmatter | 1.12 | OG image block | PASS | All 5 OG fields present with page-specific image |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Mix of good ("livepeer contract architecture", "livepeer BondingManager") and generic ("blockchain", "contracts"). Several are too broad |
| 2. Voice | 2.1 | UK English | PASS | "initialise", "serialise" used correctly. No US spellings detected |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No banned phrases |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No banned constructions in body |
| 2. Voice | 2.5 | Opening order correct | PASS | Opens with Note directing to reference page, then Tip about automatic updates |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Each paragraph has clear focus |
| 2. Voice | 2.7 | Audience register | PASS | Technical register appropriate for concept page about contracts |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | No prohibited phrases |
| 2. Voice | 2.9 | No passive value statements | PASS | No unquantified value claims |
| 2. Voice | 2.10 | No hedging openers | PASS | Opens directly with factual statements |
| 2. Voice | 2.11 | Terminology locked | PASS | Correct terms used throughout |
| 2. Voice | 2.12 | No em-dashes | PASS | Uses en-dashes appropriately |
| 2. Voice | 2.13 | Entity-led voice | PASS | All paragraphs start with system facts |
| 2. Voice | 2.14 | No hedging verbs | PASS | Direct assertions |
| 2. Voice | 2.15 | Description not self-referential | PASS | Subject-first description |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | Uses "Gateway" consistently |
| 2. Voice | 2.17 | Universal terms consistent | PASS | All terms correct |
| 2. Voice | 2.18 | Spell check | FAIL | Line 136: "contacts" should be "contracts" ("migration contacts" typo) |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Consistent |
| 2. Voice | 2.20 | Per-tab terminology | PASS | Appropriate |
| 2. Voice | 2.21 | First use defined/linked | PASS | Key terms defined in context (BondingManager, TicketBroker, etc.) |
| 2. Voice | 2.22 | Terminology lock respected | PASS | No violations |
| 3. Headings | 3.1 | Heading score >=20/25 | PASS | All headings score >=20 (see table) |
| 3. Headings | 3.2 | No banned headings | PASS | No banned terms |
| 3. Headings | 3.3 | No literal contrast | PASS | No X vs Y |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | Contract names serve as domain anchors |
| 3. Headings | 3.5 | Concept not examples | PASS | Names governing concepts |
| 3. Headings | 3.6 | Title well-formed | PASS | "Blockchain Contracts" -- 2 words |
| 3. Headings | 3.7 | Expert editorial choice | PASS | Contract-specific headings are precise |
| 3. Headings | 3.8 | Per-pageType naming | PASS | Concept page with literal/technical naming |
| 3. Headings | 3.9 | Per-audience register | PASS | Technical register |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | Contract names anchor all sections |
| 4. Structure | 4.1 | One purpose, one audience | PASS | Contract architecture for developers/community |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer understand all protocol contract architecture" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | After technical-architecture (docs.json line 2135-2136) |
| 4. Structure | 4.4 | No dead ends | PASS | Links to Related Pages at bottom (token, treasury, governance, economics) |
| 4. Structure | 4.5 | Prerequisites stated | PASS | Note at top directing readers to reference page |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Focuses on contract architecture, not network operation |
| 4. Structure | 4.7 | Information type correct | PASS | Technical/factual for concept page |
| 4. Structure | 4.8 | No duplication | PASS | Unique contract-level detail not found elsewhere |
| 4. Structure | 4.9 | Section orientation | N/A | Not a section entry |
| 4. Structure | 4.10 | Cross-tab links | PASS | Links to GitHub repos, Arbiscan, OpenZeppelin docs |
| 4. Structure | 4.11 | Discord test | PASS | Comprehensive standalone reference for contract architecture |
| 4. Structure | 4.12 | Page size appropriate | PASS | 59.2KB -- well above 5KB minimum |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | VERIFICATION LOG in JSX comment is appropriate (not TODO) |
| 4. Structure | 4.14 | Flat layout | PASS | Accordion-based depth within flat structure |
| 4. Structure | 4.15 | Trade-offs present | PASS | Notes slashing is disabled, migration contracts are historical, proxy pattern trade-offs |
| 4. Structure | 4.16 | Content pass context block | FAIL | `purpose: concept` and `audience: general` are deprecated values |
| 5. Layout | 5.1 | Correct template | PASS | Concept page with accordions for depth |
| 5. Layout | 5.2 | Required sections present | PASS | Overview intro, then structured contract sections |
| 5. Layout | 5.3 | Only approved components | PASS | Accordion, Badge, Card, Columns, FField, ScrollableDiagram all appropriate |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD |
| 5. Layout | 5.5 | InfoType to component mapping | PASS | Reference data in FField, structural in Accordion |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | Not verified |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `purpose: concept` is deprecated |
| 5. Layout | 5.8 | CSS custom properties | PASS | Uses var(--accent), var(--arbitrum), var(--text), var(--hero-text) |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | PASS | PascalCase, correct paths |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow gold-standard concept template strictly |
| 5. Layout | 5.12 | Section blocks from library | FAIL | Custom section structure, not from library |
| 5. Layout | 5.13 | Section ordering | PASS | Intro, core contracts, token contracts, governance contracts, migration, full reference, related pages |
| 5. Layout | 5.14 | Multi-view layout | N/A | Not multi-view |
| 5. Layout | 5.15 | Data imports not hardcoded | PASS | All addresses imported from blockchainContractsPageData, view-model.jsx |
| 5. Layout | 5.16 | Related Pages footer | PASS | Related Pages section at bottom with 4 cards in Columns |
| 5. Layout | 5.17 | Related Pages format | PASS | Uses Columns cols={2} with Card children, CustomCardTitle with icons |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | FAIL | Accordions use CustomCardTitle with icons but not the `icon` prop directly on Accordion |
| 5. Layout | 5.20 | Code block metadata | FAIL | Mermaid code blocks lack `icon` and `title` attributes |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | PASS | Related Pages cards use CustomCardTitle |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No data tables (uses FField for contract functions) |
| 5. Layout | 5.24 | Maximum 1-2 tables | PASS | No tables |
| 5. Layout | 5.25 | Maximum 1 major layout | PASS | No major layout elements stacked |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | Multiple CustomDividers with inline style overrides (e.g., `style={{marginBottom: "-2rem"}}`) |
| 5. Layout | 5.27 | Mermaid colours governed | PASS | Uses green-themed palette consistent with governed colours |
| 5. Layout | 5.28 | Import ordering | PASS | Components then data imports |
| 5. Layout | 5.29 | Media placeholders | N/A | None |
| 5. Layout | 5.30 | Fact-check flags | PASS | VERIFICATION LOG documents what was verified |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Contract details visible on page load, accordions for depth only |
| 5. Layout | 5.32 | Reference tables at end | PASS | Full address reference at end |
| 5. Layout | 5.33 | Drafts in workspace | N/A | Live page |
| 5. Layout | 5.34 | No inline styles in MDX | FAIL | CustomDivider style props: `style={{margin: "0 0 -2rem 0"}}` and similar |
| 6. Veracity | 6.1 | Claims citable | PASS | Verification log at top cites Blockscout MCP, GitHub source, governor-scripts |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No CLI commands; contract functions are reference |
| 6. Veracity | 6.3 | No deprecated API | PASS | Function signatures from current delta branch |
| 6. Veracity | 6.4 | Numbers real | N/A | No performance/financial numbers |
| 6. Veracity | 6.5 | REVIEW flags | PASS | No unverified claims |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. Content appears well-verified per VERIFICATION LOG |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary references |
| 6. Veracity | 6.8 | Source staleness | PASS | lastVerified: 2026-04-03 |
| 6. Veracity | 6.9 | No open research | PASS | No open items |
| 6. Veracity | 6.10 | Source authority tiers | PASS | T1 sources: on-chain contracts, GitHub source |
| 6. Veracity | 6.11 | Glossary match | N/A | None |
| 6. Veracity | 6.12 | Glossary verified | N/A | None |
| 7. Navigation | 7.1 | In docs.json | PASS | docs.json line 2136 |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | Correct |
| 7. Navigation | 7.3 | Tab entry portal | N/A | Not tab entry |
| 7. Navigation | 7.4 | No structural orphans | PASS | In nav |
| 7. Navigation | 7.5 | Audience journey | PASS | Deep technical reference within protocol section |
| 7. Navigation | 7.6 | Cross-tab graduation | PASS | Links to GitHub, Arbiscan, OpenZeppelin |
| 7. Navigation | 7.7 | File in correct lane | PASS | v2/about/protocol/ |
| 7. Navigation | 7.8 | File naming | PASS | Standard |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace |
| 7. Navigation | 7.10 | No stubs in nav | PASS | 59.2KB |
| 7. Navigation | 7.11 | Guides section | N/A | Not guides |
| 8. Links | 8.1 | Internal links resolve | PASS | /v2/about/protocol/treasury, /v2/about/protocol/livepeer-token, etc. in docs.json |
| 8. Links | 8.2 | External links | NOT-TESTED | Many external links (Arbiscan, GitHub, OpenZeppelin) not verified |
| 8. Links | 8.3 | Snippet imports | PASS | All import paths follow standard patterns |
| 8. Links | 8.4 | Images load | N/A | No images (uses SVG icons via components) |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Not verified |
| 8. Links | 8.6 | No TODO/TBD published | PASS | No visible TODO/TBD |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off recorded |
| 9. Process | 9.2 | Decisions in registry | FAIL | No registry entry |
| 9. Process | 9.3 | Gate prerequisites | FAIL | No evidence |
| 9. Process | 9.4 | Phase ordering | FAIL | No evidence |
| 9. Process | 9.5 | Findings before fixes | N/A | Initial review |
| 9. Process | 9.6 | Feedback routed | N/A | Initial review |
| 10. Completeness | 10.1 | Question list coverage | NOT-TESTED | Not checked |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | Complete contract reference |
| 10. Completeness | 10.3 | Primary persona paths | PASS | Developer can understand full contract architecture |
| 10. Completeness | 10.4 | Scope boundaries | PASS | Focuses on contracts only; links to other pages for economics, governance |
| 10. Completeness | 10.5 | Self-containment | PASS | Self-contained for contract architecture |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Livepeer Contracts | 4 | 3 | 5 | 5 | 4 | 21 |
| Core Protocol Contracts | 5 | 4 | 5 | 5 | 4 | 23 |
| Controller | 5 | 4 | 5 | 5 | 5 | 24 |
| BondingManager | 5 | 4 | 5 | 5 | 5 | 24 |
| TicketBroker | 5 | 4 | 5 | 5 | 5 | 24 |
| RoundsManager | 5 | 4 | 5 | 5 | 5 | 24 |
| Minter | 5 | 4 | 5 | 5 | 5 | 24 |
| ServiceRegistry | 5 | 4 | 5 | 5 | 5 | 24 |
| AIServiceRegistry | 5 | 4 | 5 | 5 | 5 | 24 |
| Token and Utility Contracts | 5 | 4 | 5 | 5 | 4 | 23 |
| LivepeerToken (LPT) | 5 | 4 | 5 | 5 | 4 | 23 |
| BridgeMinter | 5 | 4 | 5 | 5 | 5 | 24 |
| Governance Contracts | 5 | 4 | 5 | 5 | 4 | 23 |
| BondingVotes | 5 | 4 | 5 | 5 | 5 | 24 |
| Governor | 5 | 4 | 5 | 5 | 5 | 24 |
| LivepeerGovernor | 5 | 4 | 5 | 5 | 5 | 24 |
| Treasury | 5 | 4 | 5 | 5 | 5 | 24 |
| Migration Contracts | 5 | 4 | 5 | 5 | 4 | 23 |
| Full Address Reference | 5 | 3 | 5 | 5 | 4 | 22 |
| Related Pages | -- | -- | -- | -- | -- | EXEMPT |

## Spelling/Typo Check

- Line 136: "migration contacts" should be "migration contracts"

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 5 | 5 | 5/10 |
| 2. Voice | 22 | 21 | 1 | 21/22 |
| 3. Headings | 10 | 10 | 0 | 10/10 |
| 4. Structure | 14 | 13 | 1 | 13/14 |
| 5. Layout | 23 | 14 | 7 | 14/23 |
| 6. Veracity | 5 | 4 | 1 | 4/5 |
| 7. Navigation | 8 | 8 | 0 | 8/8 |
| 8. Links | 4 | 3 | 0 | 3/4 |
| 9. Process | 4 | 0 | 4 | 0/4 |
| 10. Completeness | 4 | 4 | 0 | 4/4 |

**Overall**: 82/104 applicable checks passed (19 FAIL)
**Verdict**: NEEDS WORK
**Critical issues**:
1. `audience: general` and `purpose: concept` are invalid/deprecated values
2. Missing `veracityStatus` field
3. "migration contacts" typo (line 136)
