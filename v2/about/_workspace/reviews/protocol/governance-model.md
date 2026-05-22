# Review: governance-model.mdx

**Page**: `v2/about/protocol/governance-model.mdx`
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
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Starts with "This page describes" (self-referential). 283 chars, exceeds 160-char limit |
| 1. Frontmatter | 1.12 | OG image block | PASS | All 5 OG fields with fallback |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: "livepeer", "about", "livepeer network", "livepeer governance", "governance", "learn". Not searcher-intent-aligned |
| 2. Voice | 2.1 | UK English | FAIL | "formalized" (line 81) should be "formalised". "decentralised" used correctly elsewhere |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No banned phrases |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No banned constructions |
| 2. Voice | 2.5 | Opening order correct | PASS | Opens with GitHub link then Quote stating governance purpose |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Focused paragraphs |
| 2. Voice | 2.7 | Audience register | PASS | Community/governance register appropriate |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | No violations |
| 2. Voice | 2.9 | No passive value statements | PASS | Direct factual statements |
| 2. Voice | 2.10 | No hedging openers | PASS | Opens directly |
| 2. Voice | 2.11 | Terminology locked | PASS | Correct terms |
| 2. Voice | 2.12 | No em-dashes | PASS | Uses en-dashes correctly |
| 2. Voice | 2.13 | Entity-led voice | PASS | System-first paragraphs |
| 2. Voice | 2.14 | No hedging verbs | PASS | Direct assertions |
| 2. Voice | 2.15 | Description not self-referential | FAIL | "This page describes the on-chain governance model" |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No deprecated terms |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Correct |
| 2. Voice | 2.18 | Spell check | PASS | No typos |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Consistent |
| 2. Voice | 2.20 | Per-tab terminology | PASS | Appropriate |
| 2. Voice | 2.21 | First use defined/linked | PASS | LIP defined and linked on first use (line 116). SPE linked to ecosystem page |
| 2. Voice | 2.22 | Terminology lock respected | PASS | No violations |
| 3. Headings | 3.1 | Heading score >=20/25 | PASS | All headings >=20 (see table) |
| 3. Headings | 3.2 | No banned headings | PASS | No banned terms |
| 3. Headings | 3.3 | No literal contrast | PASS | No X vs Y |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | "Governance" anchors most headings |
| 3. Headings | 3.5 | Concept not examples | PASS | Concept-level |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Governance Model" -- 3 words |
| 3. Headings | 3.7 | Expert editorial choice | PASS | Professional headings |
| 3. Headings | 3.8 | Per-pageType naming | PASS | Concept naming |
| 3. Headings | 3.9 | Per-audience register | PASS | Community/governance register |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | Domain nouns present |
| 4. Structure | 4.1 | One purpose, one audience | PASS | Governance model for community |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community understand how governance works" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | After economics, before treasury (docs.json lines 2132-2134) |
| 4. Structure | 4.4 | No dead ends | PASS | Related Resources section at end with 2 cards |
| 4. Structure | 4.5 | Prerequisites stated | PASS | Implies familiarity with LPT |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Focused on governance process |
| 4. Structure | 4.7 | Information type correct | PASS | Process/conceptual content |
| 4. Structure | 4.8 | No duplication | FAIL | LIP-69 appears twice in "Governance Framework" list at line 122 |
| 4. Structure | 4.9 | Section orientation | N/A | Not section entry |
| 4. Structure | 4.10 | Cross-tab links | PASS | GitHub LIPs, Forum, Explorer links |
| 4. Structure | 4.11 | Discord test | PASS | Complete governance process explanation |
| 4. Structure | 4.12 | Page size appropriate | PASS | 15.9KB, above 5KB |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No visible TODO/REVIEW |
| 4. Structure | 4.14 | Flat layout | PASS | Steps + Accordions for depth |
| 4. Structure | 4.15 | Trade-offs present | PASS | Quorum requirements, threshold trade-offs discussed |
| 4. Structure | 4.16 | Content pass context block | FAIL | `purpose: concept` and `audience: general` deprecated |
| 5. Layout | 5.1 | Correct template | PASS | Concept page with Steps for process |
| 5. Layout | 5.2 | Required sections present | PASS | Overview (Governance), process, details |
| 5. Layout | 5.3 | Only approved components | PASS | Steps, Step, Accordion, Card, Columns, Quote, LinkArrow all approved |
| 5. Layout | 5.4 | Avoided components absent | PASS | No avoided components |
| 5. Layout | 5.5 | InfoType to component mapping | PASS | Process in Steps, details in Accordion |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | Not verified |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `purpose: concept` deprecated |
| 5. Layout | 5.8 | CSS custom properties | PASS | Uses var(--accent) |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | PASS | Correct |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not strictly follow concept template |
| 5. Layout | 5.12 | Section blocks from library | FAIL | Custom structure |
| 5. Layout | 5.13 | Section ordering | PASS | Overview, Process, LIPs, Contracts, Roles, Visualisation, Resources |
| 5. Layout | 5.14 | Multi-view layout | N/A | None |
| 5. Layout | 5.15 | Data imports not hardcoded | PASS | No hardcoded data (governance parameters in prose) |
| 5. Layout | 5.16 | Related Pages footer | PASS | "Related Resources" section at end |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses Columns cols={2} but Card descriptions are full sentences, not max 10 words. Second card links to GitHub for "Delegate LPT" which is mismatched |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | PASS | All Accordions have icon props |
| 5. Layout | 5.20 | Code block metadata | FAIL | Mermaid code block lacks icon and title attributes |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Uses raw Steps/Step, not StyledSteps |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | FAIL | Related Resources cards do not use CustomCardTitle |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Maximum 1-2 tables | PASS | None |
| 5. Layout | 5.25 | Maximum 1 major layout | PASS | Steps is the one major element |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | CustomDivider with inline style: `style={{margin: 0, marginBottom: "-2rem" }}` |
| 5. Layout | 5.27 | Mermaid colours governed | PASS | Uses green-themed governed palette |
| 5. Layout | 5.28 | Import ordering | PASS | Components first |
| 5. Layout | 5.29 | Media placeholders | N/A | None |
| 5. Layout | 5.30 | Fact-check flags | N/A | Not needed |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Governance parameters visible on page load |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables |
| 5. Layout | 5.33 | Drafts in workspace | N/A | Live page |
| 5. Layout | 5.34 | No inline styles in MDX | FAIL | CenteredContainer preset, Accordion title with inline style: `style={{color: "var(--accent)"}}` |
| 6. Veracity | 6.1 | Claims citable | PASS | Governance parameters match LIPs and Governor contract |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | PASS | Current contracts referenced |
| 6. Veracity | 6.4 | Numbers real | PASS | 30 rounds voting period, 33% quorum, 100 LPT threshold -- all match contract parameters |
| 6. Veracity | 6.5 | REVIEW flags | PASS | No unverified claims |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | None |
| 6. Veracity | 6.8 | Source staleness | PASS | Governance parameters are stable |
| 6. Veracity | 6.9 | No open research | PASS | None |
| 6. Veracity | 6.10 | Source authority tiers | PASS | LIPs and contract source as T1 |
| 6. Veracity | 6.11 | Glossary match | N/A | None |
| 6. Veracity | 6.12 | Glossary verified | N/A | None |
| 7. Navigation | 7.1 | In docs.json | PASS | Line 2133 |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | Correct |
| 7. Navigation | 7.3 | Tab entry portal | N/A | Not tab entry |
| 7. Navigation | 7.4 | No structural orphans | PASS | In nav |
| 7. Navigation | 7.5 | Audience journey | PASS | After economics, before treasury |
| 7. Navigation | 7.6 | Cross-tab graduation | PASS | Links to explorer, forum, GitHub |
| 7. Navigation | 7.7 | File in correct lane | PASS | v2/about/protocol/ |
| 7. Navigation | 7.8 | File naming | PASS | Standard |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace |
| 7. Navigation | 7.10 | No stubs in nav | PASS | 15.9KB |
| 7. Navigation | 7.11 | Guides section | N/A | Not guides |
| 8. Links | 8.1 | Internal links resolve | PASS | ./treasury relative link resolves |
| 8. Links | 8.2 | External links | NOT-TESTED | GitHub LIP links not verified |
| 8. Links | 8.3 | Snippet imports | PASS | Standard paths |
| 8. Links | 8.4 | Images load | N/A | No images |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Not verified |
| 8. Links | 8.6 | No TODO/TBD published | PASS | Clean |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off |
| 9. Process | 9.2 | Decisions in registry | FAIL | No entry |
| 9. Process | 9.3 | Gate prerequisites | FAIL | No evidence |
| 9. Process | 9.4 | Phase ordering | FAIL | No evidence |
| 9. Process | 9.5 | Findings before fixes | N/A | Initial review |
| 9. Process | 9.6 | Feedback routed | N/A | Initial review |
| 10. Completeness | 10.1 | Question list coverage | NOT-TESTED | Not checked |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | Complete governance flow from idea to execution |
| 10. Completeness | 10.3 | Primary persona paths | PASS | Community can understand full governance process |
| 10. Completeness | 10.4 | Scope boundaries | PASS | Focused on governance |
| 10. Completeness | 10.5 | Self-containment | PASS | Self-contained |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Governance | 4 | 3 | 5 | 5 | 5 | 22 |
| Governance Functions | 4 | 4 | 5 | 4 | 4 | 21 |
| Governance Process | 4 | 4 | 5 | 5 | 4 | 22 |
| Livepeer Improvement Proposals (LIPs) | 5 | 5 | 5 | 5 | 3 | 23 |
| On-Chain Contracts | 4 | 4 | 5 | 4 | 4 | 21 |
| Key Roles and Stakeholders | 4 | 4 | 5 | 4 | 3 | 20 |
| Visualising the Governance Process | 4 | 3 | 5 | 5 | 3 | 20 |
| Related Resources | -- | -- | -- | -- | -- | EXEMPT |

## Spelling/Typo Check

- Line 81: "formalized" should be "formalised" (UK English)
- Line 122: LIP-69 URL is broken: `href="https://github.com"` -- incomplete URL, missing the full path
- Line 122: LIP-19 and LIP-25 duplicated in the same list

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 4 | 6 | 4/10 |
| 2. Voice | 22 | 19 | 3 | 19/22 |
| 3. Headings | 10 | 10 | 0 | 10/10 |
| 4. Structure | 14 | 12 | 2 | 12/14 |
| 5. Layout | 22 | 12 | 8 | 12/22 |
| 6. Veracity | 5 | 4 | 1 | 4/5 |
| 7. Navigation | 8 | 8 | 0 | 8/8 |
| 8. Links | 4 | 3 | 0 | 3/4 |
| 9. Process | 4 | 0 | 4 | 0/4 |
| 10. Completeness | 4 | 4 | 0 | 4/4 |

**Overall**: 76/103 applicable checks passed (24 FAIL)
**Verdict**: NEEDS WORK
**Critical issues**:
1. `audience: general` and `purpose: concept` are invalid/deprecated values
2. LIP-69 URL is broken (line 122): `href="https://github.com"` with no path
3. LIP-19 and LIP-25 duplicated in the Governance Framework list
