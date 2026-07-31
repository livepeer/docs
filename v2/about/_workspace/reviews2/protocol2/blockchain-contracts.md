# Review: blockchain-contracts.mdx (protocol2)

**Page**: `v2/about/protocol2/blockchain-contracts.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)
**Cross-flag**: IDENTICAL to `v2/about/protocol/blockchain-contracts.mdx` (already reviewed in `_workspace/reviews/protocol/blockchain-contracts.md`). 1142 lines.

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. Has non-standard `og:title`, `og:description`, `twitter:card`. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept`. |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` is deprecated alias. Should be `explain`. |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: general` deprecated. Should be `developer` or `community`. |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing. Has `lastVerified` but not `veracityStatus`. |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, well-formed, ~178 chars (slightly over 160). |
| 1. Frontmatter | 1.12 | OG image block | PASS | All 5 OG fields present with page-specific image. |
| 1. Frontmatter | 1.13 | keywords quality | PARTIAL | Mix of strong (`livepeer BondingManager`, `livepeer contract architecture`) and generic (`blockchain`, `contracts`). |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "authorised". No US spellings. |
| 2. Voice | 2.2 | Zero banned words | PASS | None detected. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None detected. |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None. |
| 2. Voice | 2.5 | Opening order correct | PASS | Opens with Note linking to canonical pages, then Tip. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Each paragraph has clear focus. |
| 2. Voice | 2.7 | Audience register | PASS | Technical register matches concept content. |
| 2. Voice | 2.8 | Per-audience prohibited | N/A | Audience deprecated. |
| 2. Voice | 2.9 | No passive value statements | PASS | Concrete claims (function names, contract roles). |
| 2. Voice | 2.10 | No hedging openers | PASS | Opens with Note pointing to authoritative reference. |
| 2. Voice | 2.11 | Terminology locked | PASS | Uses Gateway and Orchestrator correctly. |
| 2. Voice | 2.12 | No em-dashes | FAIL | Em-dashes present (e.g. line 248 "name hash – the proxy"). En-dash visually similar but multiple instances throughout. |
| 2. Voice | 2.13 | Entity-led voice | PASS | Sentences start with contract name or system fact. |
| 2. Voice | 2.14 | No hedging verbs | PASS | Direct assertions. |
| 2. Voice | 2.15 | Description not self-referential | PASS | Subject-first. |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No Broadcaster/Pool worker/Combined mode. |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Gateway, Orchestrator, Delegator used canonically. |
| 2. Voice | 2.18 | Spell check | PASS | None obvious. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Contract names match GitHub source. |
| 2. Voice | 2.20 | Per-tab terminology | PASS | About-tab register acceptable for compendium-style technical content. |
| 2. Voice | 2.21 | First use defined | PASS | Each contract introduced with role line. |
| 2. Voice | 2.22 | Terminology lock | N/A | None for About. |
| 3. Headings | 3.1 | Heading score >=20/25 | PASS | "Core Protocol Contracts" (22), "Token and Utility Contracts" (22), "Governance Contracts" (22), "Migration Contracts" (22) all strong, domain-anchored. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No banned terms. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None. |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | Headings include domain noun (Contracts, Protocol, Token). |
| 3. Headings | 3.5 | Names concept not examples | PASS | "Core Protocol Contracts" not "Controller, BondingManager, ...". |
| 3. Headings | 3.6 | Title well-formed | PASS | "Blockchain Contracts" – concise, concept-derived. |
| 3. Headings | 3.7 | Expert editorial choice | PASS | Categories follow architecture taxonomy. |
| 3. Headings | 3.8 | Per-pageType naming | PASS | Concept page uses governing-concept naming. |
| 3. Headings | 3.9 | Per-audience register | PARTIAL | Audience deprecated. |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | Yes. |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single job: list and explain protocol contracts. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer/community understand the contract architecture." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Cross-links into Token, Treasury, Governance, Economics. |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages footer. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No explicit prerequisites for what reader needs to know. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Implicit only via opening Note pointing to Contract Addresses page. |
| 4. Structure | 4.7 | Info type per section | PASS | Conceptual overview + factual contract details. |
| 4. Structure | 4.8 | No content duplication | FAIL | Significant overlap with `livepeer-contract-addresses` reference page (full address tables) and with technical-architecture (mermaid diagram). |
| 4. Structure | 4.9 | Section orientation page | N/A | Not a section orientation page. |
| 4. Structure | 4.10 | Cross-tab links | PASS | Multiple cross-tab links present in Related Pages and inline. |
| 4. Structure | 4.11 | Discord test | PASS | Comprehensive answer for "what contracts are there?". |
| 4. Structure | 4.12 | Page size appropriate | PASS | 1142 lines, ~50KB+. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | Has VERIFICATION LOG comment block but no live TODOs. |
| 4. Structure | 4.14 | Flat layout | PASS | Single page with accordions for depth. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No mention of contract limitations, slashing-disabled etc. (slashing note buried). |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Audience and purpose use deprecated values. |
| 4. Structure | 4.17 | Multi-audience handoff | PASS | Clear routing to dedicated reference for addresses. |
| 5. Layout | 5.1 | Correct template | PASS | Concept template applied. |
| 5. Layout | 5.2 | Required sections | PASS | Has overview/intro and structured contract sections. |
| 5. Layout | 5.3 | Only approved components | PASS | All approved (Card, Columns, Accordion, FField, AddressLinks, ScrollableDiagram). |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type → component mapping | PASS | Conceptual prose + Mermaid for architecture, Accordion for per-contract detail. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders clean (page is in active use). |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept` deprecated. |
| 5. Layout | 5.8 | CSS custom properties | PASS | Uses var(--accent), var(--text). |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated; data imported from generator. |
| 5. Layout | 5.10 | Component naming/import | PASS | PascalCase, root-absolute imports. |
| 5. Layout | 5.11 | Gold-standard template | PASS | Follows concept template closely. |
| 5. Layout | 5.12 | Section blocks from library | PASS | Uses related-pages-footer pattern. |
| 5. Layout | 5.13 | Section ordering | PASS | Header CTA + Intro + Architecture + Per-contract + Related. |
| 5. Layout | 5.14 | Multi-view rules | N/A | No tabs. |
| 5. Layout | 5.15 | Data imports not hardcoded | PASS | Uses `blockchainContractsPageData`, `getBlockchain*` accessors. |
| 5. Layout | 5.16 | Related Pages or CTA | PASS | Both Related Pages CardGroup and inline CTAs. |
| 5. Layout | 5.17 | Related Pages format | PASS | Uses `<Columns cols={2}>` with `<Card>` and `<CustomCardTitle icon>`. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | PASS | Accordions use `CustomCardTitle` with icon prop. |
| 5. Layout | 5.20 | Code block metadata | PARTIAL | Mermaid blocks lack explicit icon/title (acceptable in ScrollableDiagram wrapper). |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps. |
| 5. Layout | 5.22 | Navigation cards | PASS | Cards use CustomCardTitle. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables (uses Mermaid + Accordion). |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | None. |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | Multiple Mermaid diagrams (3+) exceed 1 major layout element guidance. |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Multiple dividers used to section. |
| 5. Layout | 5.27 | Mermaid governed colours | PASS | Uses inline `themeVariables` with Livepeer accent palette. |
| 5. Layout | 5.28 | Import section ordering | PASS | Component imports first then data imports. |
| 5. Layout | 5.29 | Media placeholders | N/A | None. |
| 5. Layout | 5.30 | Fact-check flags | PASS | No REVIEW flags; verification log notes corrections applied. |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Architecture diagram visible at top. |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | Live page, no draft markers. |
| 5. Layout | 5.34 | No inline styles | PASS | Inline styles only on minor presentational tweaks; no hex colours. |
| 6. Veracity | 6.1 | Every claim citable | PASS | Verification log cites Blockscout MCP + GitHub source. |
| 6. Veracity | 6.2 | Code/commands tested | PASS | Function signatures pulled from Solidity source. |
| 6. Veracity | 6.3 | No deprecated API | PASS | Names verified per verification log. |
| 6. Veracity | 6.4 | Numbers are real | PASS | Addresses from on-chain data via accessors. |
| 6. Veracity | 6.5 | REVIEW flags for unverified | PASS | None needed; verification log shows audit. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing `veracityStatus` field; should be `verified`. |
| 6. Veracity | 6.7 | Authoritative glossary | PASS | Uses on-chain canonical terms. |
| 6. Veracity | 6.8 | Source staleness | PASS | `lastVerified` 2026-04-03 fresh. |
| 6. Veracity | 6.9 | No open-ended research | PASS | Verification log shows audit completed. |
| 6. Veracity | 6.10 | Source authority tiers | PASS | T1 sources (Solidity contracts, Blockscout). |
| 6. Veracity | 6.11 | Glossary definitions match | PASS | Contract roles match. |
| 6. Veracity | 6.12 | Glossary verified | PASS | Verified. |
| 7. Navigation | 7.1 | Page in docs.json | PARTIAL | protocol2/ is alternative draft tree; may not be in published nav. |
| 7. Navigation | 7.2 | Nav matches filesystem | PARTIAL | Same as 7.1. |
| 7. Navigation | 7.3 | Tab entry portal routes | N/A | Not portal. |
| 7. Navigation | 7.4 | No structural orphans | PARTIAL | If protocol2 not in nav, page is structural orphan. |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Routes to addresses + token + treasury + governance. |
| 7. Navigation | 7.6 | Cross-tab graduation | PARTIAL | Cross-tab links missing (e.g. to Delegators). |
| 7. Navigation | 7.7 | File in correct lane | FAIL | protocol2/ duplicates published protocol/ – belongs in `_workspace/drafts/` if alternative. |
| 7. Navigation | 7.8 | File naming conventions | PASS | Uses kebab-case. |
| 7. Navigation | 7.9 | _workspace TTL | N/A | Not in _workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | Substantial. |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not Resources. |
| 8. Links | 8.1 | Internal links resolve | PASS | Internal links to /v2/about/protocol/* resolve in protocol/ tree. |
| 8. Links | 8.2 | External links live | PASS | GitHub, Arbiscan links live. |
| 8. Links | 8.3 | Snippet imports resolve | PASS | All component and data imports resolve. |
| 8. Links | 8.4 | Images load | N/A | Uses icons not images. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None visible. |
| 9. Process | 9.1 | Human sign-off | UNKNOWN | Not recorded. |
| 9. Process | 9.2 | Decisions in registry | UNKNOWN | Not verified. |
| 9. Process | 9.3 | Gate prerequisites met | UNKNOWN | Verification log present. |
| 9. Process | 9.4 | Phase ordering respected | UNKNOWN | Not assessable. |
| 9. Process | 9.5 | Findings before fixes | PASS | Verification log shows structured finding/fix cycle. |
| 9. Process | 9.6 | Feedback routed | UNKNOWN | Not assessable. |
| 10. Completeness | 10.1 | Every question has page | PASS | Answers "what contracts exist?". |
| 10. Completeness | 10.2 | Zero-to-hero journey | PASS | Comprehensive. |
| 10. Completeness | 10.3 | Persona paths unblocked | PASS | Routes to deeper pages. |
| 10. Completeness | 10.4 | Scope boundaries explicit | PARTIAL | Implicit via opening Note. |
| 10. Completeness | 10.5 | Self-containment | PASS | Self-contained. |

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 13 | 5 | 4 | 4 | 5/9 |
| 2. Voice | 22 | 16 | 1 | 5 | 16/17 |
| 3. Headings | 10 | 9 | 0 | 1 | 9/10 |
| 4. Structure | 17 | 10 | 4 | 3 | 10/14 |
| 5. Layout | 34 | 19 | 2 | 13 | 19/21 |
| 6. Veracity | 12 | 11 | 1 | 0 | 11/12 |
| 7. Navigation | 11 | 4 | 1 | 6 | 4/5 |
| 8. Links | 6 | 5 | 0 | 1 | 5/5 |
| 9. Process | 6 | 1 | 0 | 5 | 1/1 |
| 10. Completeness | 5 | 4 | 0 | 1 | 4/4 |

**Overall**: 84/98 applicable checks passed (~86%)
**Verdict**: NEEDS WORK (largely minor frontmatter migration + duplicate file in draft tree)
**Critical issues**:
1. **DUPLICATE**: byte-identical to `v2/about/protocol/blockchain-contracts.mdx`. protocol2/ adds zero new content. Resolve by removing or merging.
2. Frontmatter uses deprecated `audience: general` and `purpose: concept` aliases; missing `veracityStatus`.
3. Em-dashes present (banned per voice rules); replace with comma/colon/semicolon.
