# Review: faq.mdx

**Page**: `v2/about/resources/faq.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. All other 10 required fields present (title, sidebarTitle, description, pageType, audience, purpose, complexity, lifecycleStage, keywords, OG block) |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `pageType: reference` is valid |
| 1. Frontmatter | 1.3 | pageVariant valid | PASS | `pageVariant: compendium` is valid for reference/FAQ migration |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | PASS | `purpose: reference` is valid |
| 1. Frontmatter | 1.5 | audience 7-token set | PASS | `audience: community` is valid |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: beginner` is valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | `lifecycleStage: troubleshoot` is a valid enum but semantically wrong for a FAQ discovery page. Should be `discover` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Field missing entirely |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, 96 chars, no self-reference, UK English |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present with about.png path |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Keywords are generic single-word: `livepeer`, `about`, `faq`, `protocol`, `network`, `glossary`. Should be searcher-intent phrases like "livepeer faq", "what is livepeer protocol", "livepeer token use" |
| 2. Voice & Copy | 2.1 | UK English | PASS | "behaviour" used correctly (line 43) |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No banned words found |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No banned phrases found |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | No banned constructions found |
| 2. Voice & Copy | 2.5 | Opening order correct | PASS | Opens with value/purpose statement |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | Each accordion answer is concise, one job per answer |
| 2. Voice & Copy | 2.7 | Audience register correct | PASS | Community-level language, accessible, no jargon |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | PASS | No prohibited community phrases found |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | No vague value claims |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | Direct opener |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | LPT, staking, delegation used correctly |
| 2. Voice & Copy | 2.12 | No em-dashes | PASS | None found |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | Each answer leads with system fact |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No hedging verbs found |
| 2. Voice & Copy | 2.15 | Description not self-referential | PASS | Starts with "Common questions about" |
| 2. Voice & Copy | 2.16 | Deprecated terms absent | PASS | No deprecated terms |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | Terms used correctly |
| 2. Voice & Copy | 2.18 | Spell check | PASS | No unknown words |
| 2. Voice & Copy | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Standard terms used |
| 2. Voice & Copy | 2.20 | Per-tab terminology | PASS | About-tab appropriate |
| 2. Voice & Copy | 2.21 | First use defined/linked | PASS | LPT defined inline at first use |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | No lock violations |
| 3. Headings | 3.1 | Heading score >=20/25 | N/A | No H2/H3 headings; page uses Accordion titles only |
| 3. Headings | 3.2 | No banned/weak headings | N/A | No H2/H3 headings |
| 3. Headings | 3.3 | No literal contrast labels | N/A | No headings |
| 3. Headings | 3.4 | Domain-anchor rule | N/A | No headings |
| 3. Headings | 3.5 | Names concept not examples | N/A | No headings |
| 3. Headings | 3.6 | Title well-formed | PASS | "FAQ" - 1 word, concept-derived |
| 3. Headings | 3.7 | Sounds like expert choice | N/A | No headings |
| 3. Headings | 3.8 | Per-pageType naming style | N/A | No headings |
| 3. Headings | 3.9 | Per-audience register | N/A | No headings |
| 3. Headings | 3.10 | Domain-anchor rule applied | N/A | No headings |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | FAQ for community, single reference job |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community reader find quick answers to common About-tab questions." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Stands alone as reference; links out to deeper pages |
| 4. Structure | 4.4 | No dead ends | FAIL | Page has no Related Pages or Next Step CTA at end; final accordion just ends |
| 4. Structure | 4.5 | Prerequisites stated/linked | PASS | None needed for FAQ |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Implicit from FAQ format |
| 4. Structure | 4.7 | Information type correct | PASS | FAQ/reference pattern correct for compendium |
| 4. Structure | 4.8 | No content duplication | PASS | Points to deeper pages rather than duplicating |
| 4. Structure | 4.9 | Section orientation page | N/A | Page-level check, not section-level |
| 4. Structure | 4.10 | Cross-tab links | N/A | Tab-level check |
| 4. Structure | 4.11 | Discord test | PASS | Can link this page for common About-tab questions |
| 4. Structure | 4.12 | Page size appropriate | FAIL | 2923 bytes. For a reference/compendium FAQ, this is thin. Only 6 questions. Production FAQ needs 10-15 minimum |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None found |
| 4. Structure | 4.14 | Flat layout appropriate | PASS | Single flat page with accordions |
| 4. Structure | 4.15 | Trade-offs present | N/A | Not a concept/economics/architecture page |
| 4. Structure | 4.16 | Content pass context block | FAIL | No evidence of content pass execution; thin content suggests incomplete pipeline |
| 5. Layout | 5.1 | Correct template | PASS | reference/compendium with AccordionGroup is correct |
| 5. Layout | 5.2 | Required sections present | FAIL | Missing Related Pages or Next Step CTA footer |
| 5. Layout | 5.3 | Only approved components | PASS | AccordionGroup, Accordion, CustomDivider all approved for reference |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon |
| 5. Layout | 5.5 | Info type to component mapping | PASS | Reference content in Accordion is correct |
| 5. Layout | 5.6 | MDX renders clean | PASS | Clean JSX |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | All values canonical |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No CSS in this page |
| 5. Layout | 5.9 | Generated file banners | N/A | Not a generated file |
| 5. Layout | 5.10 | Component naming/imports | PASS | CustomDivider import is correct |
| 5. Layout | 5.11 | Gold-standard template | FAIL | No Related Pages footer section |
| 5. Layout | 5.12 | Section blocks from library | FAIL | Missing related-pages-footer block |
| 5. Layout | 5.13 | Section ordering | FAIL | resource type expects Intro+Content+Related; missing Related |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view |
| 5. Layout | 5.15 | Data imports used | N/A | No hardcoded data to import |
| 5. Layout | 5.16 | Related Pages/Next Step CTA | FAIL | Neither present |
| 5. Layout | 5.17 | Related Pages format | N/A | Section not present |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs used |
| 5. Layout | 5.19 | Accordion icon prop | PASS | All 6 accordions have icon props |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | N/A | No navigation cards |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | No tables |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One AccordionGroup |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider after import, before content |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid |
| 5. Layout | 5.28 | Import section ordering | PASS | Single component import |
| 5. Layout | 5.29 | Media placeholders in TODO | N/A | No media |
| 5. Layout | 5.30 | Fact-check flags | N/A | No unverified claims |
| 5. Layout | 5.31 | Decision-critical info visible | N/A | No decision-critical content |
| 5. Layout | 5.32 | Reference tables at end | N/A | No reference tables |
| 5. Layout | 5.33 | Drafts in workspace | PASS | Published page in published nav |
| 5. Layout | 5.34 | No inline styles/hardcoded hex | PASS | None found |
| 6. Veracity | 6.1 | Every claim citable | PASS | Statements are general orientation, pointing to deeper pages |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers |
| 6. Veracity | 6.5 | REVIEW flags for unverified | PASS | No unverified claims present |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing; should be present |
| 6. Veracity | 6.7 | Authoritative glossary | PASS | Links to correct glossary paths |
| 6. Veracity | 6.8 | Source staleness | PASS | No fast-changing data |
| 6. Veracity | 6.9 | No open-ended research | PASS | No research tasks |
| 6. Veracity | 6.10 | Source authority tiers | PASS | Orientation content only |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | Not a glossary page |
| 6. Veracity | 6.12 | Glossary verified primary | N/A | Not a glossary page |
| 7. Navigation | 7.1 | Page in docs.json | PASS | docs.json line 2174 |
| 7. Navigation | 7.2 | Nav matches file system | PASS | Path matches |
| 7. Navigation | 7.3 | Tab entry portal routes | N/A | Not a portal |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable from nav |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Part of resources section |
| 7. Navigation | 7.6 | Cross-tab graduation | N/A | Not applicable for FAQ |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published content in v2/ |
| 7. Navigation | 7.8 | File naming conventions | PASS | `faq.mdx` standard name |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | 2923 bytes, above 2KB |
| 7. Navigation | 7.11 | Guides section serves secondary | N/A | Not a guides section |
| 8. Links | 8.1 | All internal links resolve | PASS | 7 internal links to standard About paths |
| 8. Links | 8.2 | All external links live | N/A | No external links |
| 8. Links | 8.3 | All snippet imports resolve | PASS | CustomDivider import path valid |
| 8. Links | 8.4 | All images load | N/A | No images |
| 8. Links | 8.5 | Page renders without error | PASS | Clean MDX |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None found |
| 9. Process | 9.1 | Human sign-off | FAIL | No evidence of human sign-off recorded |
| 9. Process | 9.2 | Decisions in registry | N/A | No consuming decisions |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence of gate process |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence of phase process |
| 9. Process | 9.5 | Findings before fixes | N/A | Original content |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections to route |
| 10. Completeness | 10.1 | Every question has a page | FAIL | Only 6 questions. Common About questions missing: staking, governance, hardware, AI capabilities |
| 10. Completeness | 10.2 | Zero-to-hero journey | N/A | FAQ is supplementary, not journey |
| 10. Completeness | 10.3 | All persona paths unblocked | PASS | Links out to deeper content |
| 10. Completeness | 10.4 | Scope boundaries explicit | PASS | Implicit from FAQ format |
| 10. Completeness | 10.5 | Self-containment | PASS | Answers are self-contained with links for depth |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 29 | "This FAQ answers the most common About-tab questions and points to the deeper page when the short answer is not enough." | none | N/A | No |
| 49 | "LPT is not the token used to pay for ordinary video or AI jobs." | `not [X]` | procedural (factual distinction) | No |

## Heading Score Table

No H2/H3 headings present. Title only:

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| FAQ (title) | 4 | 3 | 5 | 5 | 5 | 22/25 |

## Spelling/Typo Check

No typos found.

## Component Matrix

| Component | Used? | Appropriate for `reference`? | Notes |
|---|---|---|---|
| AccordionGroup | Yes | Yes | Preferred for reference |
| Accordion | Yes | Yes | All have icon props |
| CustomDivider | Yes | Yes | Opening divider present |

## Cross-Category Connections

```
Root Cause 1: Missing Related Pages footer
Affects: Cat 4.4 + Cat 5.2 + Cat 5.11 + Cat 5.12 + Cat 5.13 + Cat 5.16
Fix: Add CardGroup with 2-3 related page cards at end

Root Cause 2: Missing veracityStatus frontmatter field
Affects: Cat 1.8 + Cat 6.6
Fix: Add `veracityStatus: unverified` to frontmatter
```

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 7 | 4 | 7/11 |
| 2. Voice & Copy | 22 | 22 | 0 | 22/22 |
| 3. Headings | 1 | 1 | 0 | 1/1 |
| 4. Structure | 12 | 8 | 4 | 8/12 |
| 5. Layout | 16 | 10 | 6 | 10/16 |
| 6. Veracity | 5 | 4 | 1 | 4/5 |
| 7. Navigation | 7 | 7 | 0 | 7/7 |
| 8. Links | 4 | 4 | 0 | 4/4 |
| 9. Process | 3 | 0 | 3 | 0/3 |
| 10. Completeness | 4 | 3 | 1 | 3/4 |

**Overall**: 66/85 applicable checks passed
**Verdict**: NEEDS WORK
**Critical issues**:
1. Missing Related Pages / Next Step CTA footer (affects 6 checks across Cat 4 and Cat 5)
2. Missing `veracityStatus` frontmatter field (affects Cat 1.8 and Cat 6.6)
3. Only 6 FAQ questions -- thin content for a production FAQ page; needs 10-15 minimum
