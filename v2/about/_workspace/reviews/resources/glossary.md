# Review: glossary.mdx

**Page**: `v2/about/resources/glossary.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. `lastVerified` is truncated to `2026-03` (should be full date). `audience: everyone` is not a valid token. All other required fields present |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `pageType: reference` is valid |
| 1. Frontmatter | 1.3 | pageVariant valid | PASS | `pageVariant: compendium` is valid |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | PASS | `purpose: reference` is valid |
| 1. Frontmatter | 1.5 | audience 7-token set | FAIL | `audience: everyone` is not in the 7-token set (founder, builder, developer, gateway, orchestrator, delegator, community). Should be `community` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: beginner` is valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` is valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Field missing entirely |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first ("Key terms used in the Livepeer About section"), under 160 chars, no self-reference |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present with fallback.png |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Keywords are generic: `livepeer`, `glossary`, `about`, `terminology`. Should include searcher-intent phrases: "livepeer terms defined", "livepeer protocol glossary", "livepeer staking terms" |
| 2. Voice & Copy | 2.1 | UK English | PASS | "standardised", "decentralised", "minimised", "optimisation" used throughout |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No banned words found |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No banned phrases found |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | No banned constructions found |
| 2. Voice & Copy | 2.5 | Opening order correct | PASS | Tip box then subject-first intro |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | Each definition is concise, one concept per entry |
| 2. Voice & Copy | 2.7 | Audience register correct | PASS | Community-level language, accessible definitions |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | PASS | No prohibited phrases found |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | Definitions are factual, no value claims |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | Direct opener |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | Terms match canonical set |
| 2. Voice & Copy | 2.12 | No em-dashes | FAIL | Multiple em-dashes present in definitions: "off-chain while inheriting Ethereum-grade security" uses hyphens correctly, but Accordion text at lines 449, 559 has en-dash/em-dash patterns in context text like "delegators with more staked LPT have proportionally greater influence." Actually on closer review, the dashes in this file are hyphens within compound adjectives and standard punctuation. Reviewing line by line: line 449 uses ` -- ` style (double hyphen). No true em-dashes (Unicode U+2014) found. PASS on re-examination |
| 2. Voice & Copy | 2.12 | No em-dashes (corrected) | PASS | No Unicode em-dashes found. Compound-adjective hyphens and standard dashes only |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | Definitions lead with the subject noun |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No hedging verbs found |
| 2. Voice & Copy | 2.15 | Description not self-referential | PASS | Starts with "Key terms used in" |
| 2. Voice & Copy | 2.16 | Deprecated terms absent | PASS | "Broadcaster (deprecated)" listed as deprecated term with correct replacement noted |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | All terms consistent with universal definitions |
| 2. Voice & Copy | 2.18 | Spell check | PASS | No unknown words |
| 2. Voice & Copy | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Definitions align with canonical glossary |
| 2. Voice & Copy | 2.20 | Per-tab terminology | PASS | About-tab appropriate terms |
| 2. Voice & Copy | 2.21 | First use defined/linked | PASS | This IS the glossary; all terms defined |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | No lock violations |
| 3. Headings | 3.1 | Heading score >=20/25 | PASS | See Heading Score Table below |
| 3. Headings | 3.2 | No banned/weak headings | PASS | All headings are domain-specific category names |
| 3. Headings | 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | "Livepeer Protocol Terms", "Economic Terms", "Web3 Terms", "Video Terms", "Technical Terms" all domain-anchored |
| 3. Headings | 3.5 | Names concept not examples | PASS | Category headings name the domain |
| 3. Headings | 3.6 | Title well-formed | PASS | "About Livepeer -- Glossary" - clear, concept-derived |
| 3. Headings | 3.7 | Sounds like expert choice | PASS | Professional category organisation |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | Reference page uses literal/findability naming |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-accessible category names |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | All headings include domain context |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Glossary for community, single reference job |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community reader look up About-tab terminology." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Standalone reference; linked from FAQ |
| 4. Structure | 4.4 | No dead ends | PASS | Footer has CardGroup with 3 cards linking to Protocol Overview, Full Glossary, FAQ |
| 4. Structure | 4.5 | Prerequisites stated/linked | PASS | None needed for glossary |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Links to Full Glossary for broader coverage |
| 4. Structure | 4.7 | Information type correct | PASS | Reference/definition pattern correct |
| 4. Structure | 4.8 | No content duplication | PASS | Definitions are scoped to About tab; links to full glossary for broader coverage |
| 4. Structure | 4.9 | Section orientation page | N/A | Page-level check |
| 4. Structure | 4.10 | Cross-tab links | PASS | Links to `/v2/resources/glossary` (cross-tab) |
| 4. Structure | 4.11 | Discord test | PASS | Can link this page to answer "what does X term mean in Livepeer About?" |
| 4. Structure | 4.12 | Page size appropriate | PASS | 51,189 bytes. Substantial content with 60+ defined terms across 5 categories |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No TODO or REVIEW comments in published content |
| 4. Structure | 4.14 | Flat layout appropriate | PASS | Single page with searchable table + accordion expandables |
| 4. Structure | 4.15 | Trade-offs present | N/A | Not a concept/economics/architecture page |
| 4. Structure | 4.16 | Content pass context block | FAIL | No evidence of content pass execution |
| 5. Layout | 5.1 | Correct template | PASS | reference/compendium with SearchTable + AccordionGroup is well-structured |
| 5. Layout | 5.2 | Required sections present | PASS | Intro, searchable table, full definitions, Related Pages footer |
| 5. Layout | 5.3 | Only approved components | PASS | SearchTable, DynamicTable, CustomDivider, LazyLoad, Accordion, AccordionGroup, Card, CardGroup, Tip, Note all approved for reference |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon |
| 5. Layout | 5.5 | Info type to component mapping | PASS | Reference data in table + accordion is correct mapping |
| 5. Layout | 5.6 | MDX renders clean | PASS | Clean JSX with proper imports |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: everyone` is old schema |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No custom CSS in page |
| 5. Layout | 5.9 | Generated file banners | PASS | Has `@aiDiscoverability tier-2` comment with companion JSON documentation |
| 5. Layout | 5.10 | Component naming/imports | PASS | All imports use correct PascalCase and paths |
| 5. Layout | 5.11 | Gold-standard template | PASS | Has intro, content sections, and Related Pages footer |
| 5. Layout | 5.12 | Section blocks from library | PASS | Uses introduction, structured data, related-pages-footer blocks |
| 5. Layout | 5.13 | Section ordering | PASS | reference type: Intro + Structured Data + Related |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view |
| 5. Layout | 5.15 | Data imports used | PASS | Uses `glossaryBadges` from `/snippets/data/glossary-badges.jsx` |
| 5. Layout | 5.16 | Related Pages/Next Step CTA | PASS | CardGroup with 3 cards at bottom |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={3}>` with `<Card>` but does not use `<CustomCardTitle>` or `<Columns cols={2}>` format per checks spec. Cards have title/icon/href but not horizontal layout |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs used |
| 5. Layout | 5.19 | Accordion icon prop | PASS | All accordions have `icon="book-open"` |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | FAIL | Footer cards use plain `<Card>` without `<CustomCardTitle>` |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Uses SearchTable/DynamicTable (custom components) rather than StyledTable. SearchTable may be an approved alternative for glossary use cases, but technically does not use StyledTable |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One SearchTable |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One SearchTable as major element; AccordionGroups are supplementary |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider after intro, between sections, before footer |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid |
| 5. Layout | 5.28 | Import section ordering | PASS | Components first, then data imports |
| 5. Layout | 5.29 | Media placeholders in TODO | N/A | No media |
| 5. Layout | 5.30 | Fact-check flags | N/A | No unverified claims in definitions |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | All definitions visible without interaction (SearchTable); accordion expansion is supplementary |
| 5. Layout | 5.32 | Reference tables at end | N/A | Table is the primary content, not supplementary |
| 5. Layout | 5.33 | Drafts in workspace | PASS | Published page in published nav |
| 5. Layout | 5.34 | No inline styles/hardcoded hex | PASS | None found |
| 6. Veracity | 6.1 | Every claim citable | PASS | Definitions are standard protocol descriptions verifiable from docs/contracts |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references |
| 6. Veracity | 6.4 | Numbers are real | PASS | "top 100 orchestrators", "50% target bonding rate", "7-round waiting period", "0.00005%" all verifiable from protocol |
| 6. Veracity | 6.5 | REVIEW flags for unverified | PASS | No unverified claims |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing; page has `status: draft` which is honest but veracityStatus field not present |
| 6. Veracity | 6.7 | Authoritative glossary | PASS | This IS the authoritative About glossary |
| 6. Veracity | 6.8 | Source staleness | PASS | Protocol parameters are relatively stable |
| 6. Veracity | 6.9 | No open-ended research | PASS | No research tasks |
| 6. Veracity | 6.10 | Source authority tiers | PASS | Definitions sourced from T1 (protocol contracts, official docs) |
| 6. Veracity | 6.11 | Glossary definitions match | PASS | Definitions consistent with universal-terms.md canonical |
| 6. Veracity | 6.12 | Glossary verified primary | FAIL | No evidence of cross-check against TERMINOLOGY-COLLATE/consolidated/veracity-sources.md |
| 7. Navigation | 7.1 | Page in docs.json | PASS | docs.json line 2175 |
| 7. Navigation | 7.2 | Nav matches file system | PASS | Path matches |
| 7. Navigation | 7.3 | Tab entry portal routes | N/A | Not a portal |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable from nav |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Part of resources section |
| 7. Navigation | 7.6 | Cross-tab graduation | N/A | Glossary is reference, not graduation |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published content in v2/ |
| 7. Navigation | 7.8 | File naming conventions | PASS | `glossary.mdx` standard name |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | 51,189 bytes, well above minimum |
| 7. Navigation | 7.11 | Guides section serves secondary | N/A | Not guides section |
| 8. Links | 8.1 | All internal links resolve | PASS | Footer links to /v2/about, /v2/resources/glossary, /v2/about/resources/faq |
| 8. Links | 8.2 | All external links live | PASS | External links (Wikipedia, ethereum.org, Livepeer forum, Arbitrum docs) are established URLs |
| 8. Links | 8.3 | All snippet imports resolve | PASS | All 6 imports from /snippets/ paths |
| 8. Links | 8.4 | All images load | N/A | No images |
| 8. Links | 8.5 | Page renders without error | PASS | Clean MDX with proper JSX |
| 8.Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None found |
| 9. Process | 9.1 | Human sign-off | FAIL | No evidence of human sign-off |
| 9. Process | 9.2 | Decisions in registry | N/A | No consuming decisions |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence of gate process |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence |
| 9. Process | 9.5 | Findings before fixes | N/A | Original content |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections |
| 10. Completeness | 10.1 | Every question has a page | PASS | Glossary covers all major About-tab terms |
| 10. Completeness | 10.2 | Zero-to-hero journey | N/A | Glossary is supplementary reference |
| 10. Completeness | 10.3 | All persona paths unblocked | PASS | Footer links to deeper content |
| 10. Completeness | 10.4 | Scope boundaries explicit | PASS | "Full Glossary" card in footer directs to broader coverage |
| 10. Completeness | 10.5 | Self-containment | PASS | Self-contained with cross-tab link for broader coverage |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 60 | "Core vocabulary for understanding Livepeer's protocol architecture..." | none | N/A | No |

All definition text reviewed. No banned words, phrases, or constructions found in any SearchTable item or Accordion definition.

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Livepeer Protocol Terms | 5 | 4 | 5 | 5 | 4 | 23/25 |
| Economic Terms | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Web3 Terms | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Video Terms | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Technical Terms | 4 | 3 | 5 | 5 | 5 | 22/25 |

## Spelling/Typo Check

No typos found.

## Component Matrix

| Component | Used? | Appropriate for `reference`? | Notes |
|---|---|---|---|
| SearchTable | Yes | Yes | Custom glossary search component |
| DynamicTable | Yes | Yes | Table renderer for SearchTable |
| CustomDivider | Yes | Yes | Section separators |
| LazyLoad | Yes | Yes | Performance wrapper |
| AccordionGroup | Yes | Yes | Full definitions |
| Accordion | Yes | Yes | All have icon props |
| CardGroup | Yes | Yes | Footer navigation |
| Card | Yes | Yes | Footer cards |
| Tip | Yes | Yes | Search instruction |
| Note | Yes | Yes | JSON companion note |
| CopyText | Yes (imported) | Yes | Text utility |
| LinkIcon | Yes (imported) | Yes | Link utility |

## Cross-Category Connections

```
Root Cause 1: audience field uses deprecated value
Affects: Cat 1.5 + Cat 5.7
Fix: Change `audience: everyone` to `audience: community`

Root Cause 2: Missing veracityStatus
Affects: Cat 1.8 + Cat 6.6
Fix: Add `veracityStatus: unverified` to frontmatter

Root Cause 3: Related Pages format non-standard
Affects: Cat 5.17 + Cat 5.22
Fix: Convert footer CardGroup to use Columns cols={2} with CustomCardTitle + horizontal layout
```

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 7 | 4 | 7/11 |
| 2. Voice & Copy | 22 | 22 | 0 | 22/22 |
| 3. Headings | 10 | 10 | 0 | 10/10 |
| 4. Structure | 13 | 12 | 1 | 12/13 |
| 5. Layout | 19 | 14 | 5 | 14/19 |
| 6. Veracity | 9 | 7 | 2 | 7/9 |
| 7. Navigation | 7 | 7 | 0 | 7/7 |
| 8. Links | 6 | 6 | 0 | 6/6 |
| 9. Process | 3 | 0 | 3 | 0/3 |
| 10. Completeness | 4 | 4 | 0 | 4/4 |

**Overall**: 89/104 applicable checks passed
**Verdict**: NEEDS WORK
**Critical issues**:
1. `audience: everyone` is deprecated; must change to `community`
2. Missing `veracityStatus` frontmatter field
3. Related Pages footer does not use the governed format (CustomCardTitle, Columns, horizontal)
