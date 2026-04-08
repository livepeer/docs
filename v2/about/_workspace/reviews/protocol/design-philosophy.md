# Review: design-philosophy.mdx

**Page**: `v2/about/protocol/design-philosophy.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. Has all other required fields |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: community` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing. Has `status: draft` which partially indicates state but is not the canonical field |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first ("Why the Livepeer protocol uses staking..."), 130 chars, no self-reference |
| 1. Frontmatter | 1.12 | OG image block | PASS | All 5 OG fields with page-specific about image |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: "livepeer", "protocol", "design philosophy". Better: "why livepeer uses staking", "protocol design decisions" |
| 2. Voice | 2.1 | UK English | PASS | "authorised" correctly UK |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No banned phrases |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No banned constructions |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with "This page is being developed" -- hedging/disclaimer opener |
| 2. Voice | 2.6 | Paragraph discipline | N/A | Only placeholder content |
| 2. Voice | 2.7 | Audience register | PASS | Community register |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | No violations |
| 2. Voice | 2.9 | No passive value statements | N/A | No value statements (stub page) |
| 2. Voice | 2.10 | No hedging openers | FAIL | "This page is being developed" is a hedging opener |
| 2. Voice | 2.11 | Terminology locked | PASS | No terminology issues |
| 2. Voice | 2.12 | No em-dashes | PASS | None |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "This page is being developed" is self-referential, not entity-led |
| 2. Voice | 2.14 | No hedging verbs | N/A | No value claims |
| 2. Voice | 2.15 | Description not self-referential | PASS | Subject-first |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No deprecated terms |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Correct |
| 2. Voice | 2.18 | Spell check | PASS | No issues |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Consistent |
| 2. Voice | 2.20 | Per-tab terminology | PASS | Appropriate |
| 2. Voice | 2.21 | First use defined/linked | N/A | No body prose with specialised terms |
| 2. Voice | 2.22 | Terminology lock respected | PASS | No violations |
| 3. Headings | 3.1 | Heading score >=20/25 | FAIL | "What this page will cover" scores 14/25 -- "Best pages to read now" scores 15/25 |
| 3. Headings | 3.2 | No banned headings | FAIL | "What this page will cover" is a self-referential heading pattern |
| 3. Headings | 3.3 | No literal contrast | PASS | No X vs Y |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | Headings lack domain context |
| 3. Headings | 3.5 | Concept not examples | PASS | Concept-level |
| 3. Headings | 3.6 | Title well-formed | PASS | "Design Philosophy" -- 2 words |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "What this page will cover" is bureaucratic |
| 3. Headings | 3.8 | Per-pageType naming | FAIL | Should use governing-concept naming |
| 3. Headings | 3.9 | Per-audience register | PASS | Community accessible |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | No domain nouns |
| 4. Structure | 4.1 | One purpose, one audience | PASS | Design philosophy for community |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community understand why the protocol is designed the way it is" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Last in protocol group (docs.json line 2137) |
| 4. Structure | 4.4 | No dead ends | PASS | Links to 4 related pages via CardGroup |
| 4. Structure | 4.5 | Prerequisites stated | PASS | No prerequisites for a stub page |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | "Its role is to explain why...not just what the contracts do" |
| 4. Structure | 4.7 | Information type correct | FAIL | Placeholder/stub content, not actual concept content |
| 4. Structure | 4.8 | No duplication | PASS | No duplication |
| 4. Structure | 4.9 | Section orientation | N/A | Not section entry |
| 4. Structure | 4.10 | Cross-tab links | N/A | Stub page |
| 4. Structure | 4.11 | Discord test | FAIL | Page is a stub; cannot answer any question |
| 4. Structure | 4.12 | Page size appropriate | FAIL | 2.0KB -- exactly at the 2KB minimum, well below 5KB for concept page |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No TODO/REVIEW |
| 4. Structure | 4.14 | Flat layout | PASS | Flat |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs (stub) |
| 4. Structure | 4.16 | Content pass context block | PASS | Fields are canonical |
| 5. Layout | 5.1 | Correct template | FAIL | Stub page, no template |
| 5. Layout | 5.2 | Required sections present | FAIL | No concept Overview section |
| 5. Layout | 5.3 | Only approved components | PASS | CardGroup, Card, CustomDivider |
| 5. Layout | 5.4 | Avoided components absent | PASS | No avoided components |
| 5. Layout | 5.5 | InfoType to component mapping | N/A | Stub |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | Not verified |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | All values canonical |
| 5. Layout | 5.8 | CSS custom properties | PASS | No CSS used |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | PASS | Correct |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Not following any template |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No standard blocks |
| 5. Layout | 5.13 | Section ordering | FAIL | Placeholder list then CardGroup; not a valid ordering |
| 5. Layout | 5.14 | Multi-view layout | N/A | None |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | No data |
| 5. Layout | 5.16 | Related Pages footer | PASS | CardGroup at end with 4 related pages |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses CardGroup with cols={2}, not Columns with Card. Card descriptions are full sentences rather than max 10 words |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block metadata | N/A | No code |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | FAIL | Cards in CardGroup do not use CustomCardTitle |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Maximum 1-2 tables | N/A | None |
| 5. Layout | 5.25 | Maximum 1 major layout | PASS | No major elements |
| 5. Layout | 5.26 | CustomDivider placement | PASS | One CustomDivider after import |
| 5. Layout | 5.27 | Mermaid colours governed | N/A | No Mermaid |
| 5. Layout | 5.28 | Import ordering | PASS | Components only |
| 5. Layout | 5.29 | Media placeholders | N/A | None |
| 5. Layout | 5.30 | Fact-check flags | N/A | Stub |
| 5. Layout | 5.31 | Decision-critical visible | N/A | None |
| 5. Layout | 5.32 | Reference tables at end | N/A | None |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Has `status: draft` in frontmatter but is published in docs.json nav. Should be in workspace until ready |
| 5. Layout | 5.34 | No inline styles in MDX | PASS | No inline styles |
| 6. Veracity | 6.1 | Claims citable | N/A | No claims (stub) |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | N/A | None |
| 6. Veracity | 6.4 | Numbers real | N/A | None |
| 6. Veracity | 6.5 | REVIEW flags | PASS | None needed |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | None |
| 6. Veracity | 6.8 | Source staleness | N/A | Stub |
| 6. Veracity | 6.9 | No open research | PASS | None |
| 6. Veracity | 6.10 | Source authority tiers | N/A | No claims |
| 6. Veracity | 6.11 | Glossary match | N/A | None |
| 6. Veracity | 6.12 | Glossary verified | N/A | None |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2137 |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | Correct |
| 7. Navigation | 7.3 | Tab entry portal | N/A | Not tab entry |
| 7. Navigation | 7.4 | No structural orphans | PASS | In nav |
| 7. Navigation | 7.5 | Audience journey | FAIL | Stub page breaks the journey |
| 7. Navigation | 7.6 | Cross-tab graduation | N/A | Stub |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Draft page should not be in published nav per check 7.10 |
| 7. Navigation | 7.8 | File naming | PASS | Standard |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace |
| 7. Navigation | 7.10 | No stubs in nav | FAIL | 2.0KB is at the absolute minimum; effectively a stub with zero substantive content |
| 7. Navigation | 7.11 | Guides section | N/A | Not guides |
| 8. Links | 8.1 | Internal links resolve | PASS | Links to protocol sub-pages verified in docs.json |
| 8. Links | 8.2 | External links | N/A | No external links |
| 8. Links | 8.3 | Snippet imports | PASS | Standard paths |
| 8. Links | 8.4 | Images load | N/A | No images |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Not verified |
| 8. Links | 8.6 | No TODO/TBD published | PASS | No visible TODO |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off |
| 9. Process | 9.2 | Decisions in registry | FAIL | No entry |
| 9. Process | 9.3 | Gate prerequisites | FAIL | No evidence |
| 9. Process | 9.4 | Phase ordering | FAIL | No evidence |
| 9. Process | 9.5 | Findings before fixes | N/A | Initial review |
| 9. Process | 9.6 | Feedback routed | N/A | Initial review |
| 10. Completeness | 10.1 | Question list coverage | FAIL | Page answers no questions; it only lists what it WILL cover |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Stub breaks the journey |
| 10. Completeness | 10.3 | Primary persona paths | FAIL | Dead end for design philosophy questions |
| 10. Completeness | 10.4 | Scope boundaries | PASS | States what it will cover |
| 10. Completeness | 10.5 | Self-containment | FAIL | No actual content |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| What this page will cover | 2 | 2 | 3 | 3 | 4 | 14 |
| Best pages to read now | 3 | 2 | 3 | 3 | 4 | 15 |

## Spelling/Typo Check

No typos found.

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 6 | 4 | 6/10 |
| 2. Voice | 17 | 13 | 3 | 13/17 |
| 3. Headings | 10 | 4 | 6 | 4/10 |
| 4. Structure | 13 | 7 | 5 | 7/13 |
| 5. Layout | 16 | 7 | 8 | 7/16 |
| 6. Veracity | 3 | 2 | 1 | 2/3 |
| 7. Navigation | 8 | 4 | 3 | 4/8 |
| 8. Links | 4 | 3 | 0 | 3/4 |
| 9. Process | 4 | 0 | 4 | 0/4 |
| 10. Completeness | 5 | 1 | 4 | 1/5 |

**Overall**: 47/90 applicable checks passed (38 FAIL)
**Verdict**: REWRITE REQUIRED
**Critical issues**:
1. This is a stub page (2.0KB) in published nav with zero substantive content
2. Opens with "This page is being developed" -- should not be published in this state
3. Should either be written or removed from docs.json nav and moved to _workspace/drafts/
