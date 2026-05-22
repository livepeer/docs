# Review: contributor-orientation.mdx

**Page**: `v2/about/resources/knowledge-hub/contributor-orientation.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. All other 10 required fields present |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `pageType: resource` is valid |
| 1. Frontmatter | 1.3 | pageVariant valid | PASS | `pageVariant: knowledge-hub` is valid |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | PASS | `purpose: orient` is valid |
| 1. Frontmatter | 1.5 | audience 7-token set | PASS | `audience: community` is valid |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` is valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` is valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Field missing entirely |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first ("A curated About reading path..."), under 160 chars, no self-reference |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present with about.png |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Keywords are generic: `livepeer`, `contributor`, `orientation`, `protocol`, `network`, `oss`. Should be intent-driven: "livepeer contributor guide", "livepeer protocol development", "livepeer oss contribution" |
| 2. Voice & Copy | 2.1 | UK English | PASS | No US spellings found |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No banned words |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No banned phrases |
| 2. Voice & Copy | 2.4 | Zero banned constructions | FAIL | "This page is being developed as the contributor-focused reading path" (line 29) -- self-referential "This page" construction |
| 2. Voice & Copy | 2.5 | Opening order correct | FAIL | Opens with a caveat/disclaimer: "This page is being developed as..." |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | Brief, single-purpose paragraphs |
| 2. Voice & Copy | 2.7 | Audience register correct | PASS | Community/contributor register appropriate |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | PASS | No prohibited phrases |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | No value claims made |
| 2. Voice & Copy | 2.10 | No hedging openers | FAIL | Page opens with hedging: "This page is being developed" |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | Standard terms used |
| 2. Voice & Copy | 2.12 | No em-dashes | PASS | None found |
| 2. Voice & Copy | 2.13 | Entity-led voice | FAIL | Opens with "This page" self-reference, not entity-led |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No value claims |
| 2. Voice & Copy | 2.15 | Description not self-referential | PASS | "A curated About reading path for technical contributors..." |
| 2. Voice & Copy | 2.16 | Deprecated terms absent | PASS | No deprecated terms |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | Terms match canonical |
| 2. Voice & Copy | 2.18 | Spell check | PASS | No unknown words |
| 2. Voice & Copy | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Standard terms |
| 2. Voice & Copy | 2.20 | Per-tab terminology | PASS | About-tab appropriate |
| 2. Voice & Copy | 2.21 | First use defined/linked | PASS | Links provided for all referenced pages |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | No violations |
| 3. Headings | 3.1 | Heading score >=20/25 | PASS | See Heading Score Table below |
| 3. Headings | 3.2 | No banned/weak headings | FAIL | "What this guide will eventually add" uses weak phrasing and banned "What" interrogative style |
| 3. Headings | 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | "Recommended reading order" is contextually clear |
| 3. Headings | 3.5 | Names concept not examples | PASS | Headings name the concept |
| 3. Headings | 3.6 | Title well-formed | PASS | "Contributor Orientation" - 2 words, concept-derived |
| 3. Headings | 3.7 | Sounds like expert choice | FAIL | "What this guide will eventually add" is a placeholder, not an editorial choice |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | resource type; appropriate naming |
| 3. Headings | 3.9 | Per-audience register | PASS | Community-accessible |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | Headings interpretable in isolation |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Orientation for contributors, single reading-path job |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the technical contributor follow a curated reading path through the About section." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Knowledge-hub page; links to reading order pages |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages or Next Step CTA at end. Bullet list ends abruptly |
| 4. Structure | 4.5 | Prerequisites stated/linked | PASS | None needed for orientation |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | "where the work becomes role-specific" signals scope boundary |
| 4. Structure | 4.7 | Information type correct | PASS | Orientation/navigation content for resource type |
| 4. Structure | 4.8 | No content duplication | PASS | Links to pages rather than duplicating |
| 4. Structure | 4.9 | Section orientation page | N/A | Page-level check |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Mentions "operator, gateway, and developer tabs" but provides no actual cross-tab links |
| 4. Structure | 4.11 | Discord test | FAIL | Cannot link this page for a complete answer; it is a stub with promises of future content |
| 4. Structure | 4.12 | Page size appropriate | FAIL | 1,535 bytes. Under 2KB minimum. This is a stub |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No TODO comments |
| 4. Structure | 4.14 | Flat layout appropriate | PASS | Single flat page |
| 4. Structure | 4.15 | Trade-offs present | N/A | Not concept/economics/architecture |
| 4. Structure | 4.16 | Content pass context block | FAIL | `status: draft` and content is skeletal |
| 5. Layout | 5.1 | Correct template | FAIL | resource/knowledge-hub should have more structure than a numbered list and a bullet list |
| 5. Layout | 5.2 | Required sections present | FAIL | Missing intro prose, missing Related Pages/CTA footer |
| 5. Layout | 5.3 | Only approved components | PASS | CustomDivider is approved |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon components |
| 5. Layout | 5.5 | Info type to component mapping | FAIL | Navigation content should use Cards, not a bare numbered list |
| 5. Layout | 5.6 | MDX renders clean | PASS | Clean MDX |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | All values canonical |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No CSS |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/imports | PASS | CustomDivider import correct |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow resource template structure |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No standard blocks used (no introduction, no related-pages-footer) |
| 5. Layout | 5.13 | Section ordering | FAIL | resource type expects Intro+Content+Related; only has Content |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view |
| 5. Layout | 5.15 | Data imports used | N/A | No hardcoded data |
| 5. Layout | 5.16 | Related Pages/Next Step CTA | FAIL | Neither present |
| 5. Layout | 5.17 | Related Pages format | N/A | Not present |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps component (just a numbered markdown list) |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | N/A | No cards |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | No tables |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | No major layout element (stub) |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider after import |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid |
| 5. Layout | 5.28 | Import section ordering | PASS | Single import |
| 5. Layout | 5.29 | Media placeholders in TODO | N/A | No media |
| 5. Layout | 5.30 | Fact-check flags | N/A | No factual claims |
| 5. Layout | 5.31 | Decision-critical info visible | N/A | No decision content |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | `status: draft` but in published nav. Stubs should be in _workspace/ or removed from nav until complete |
| 5. Layout | 5.34 | No inline styles/hardcoded hex | PASS | None found |
| 6. Veracity | 6.1 | Every claim citable | PASS | Reading order links are real page paths |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers |
| 6. Veracity | 6.5 | REVIEW flags for unverified | PASS | No unverified claims |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | Not a glossary |
| 6. Veracity | 6.8 | Source staleness | PASS | Link paths are stable |
| 6. Veracity | 6.9 | No open-ended research | FAIL | "What this guide will eventually add" is an open-ended research placeholder |
| 6. Veracity | 6.10 | Source authority tiers | N/A | No factual claims |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | Not a glossary |
| 6. Veracity | 6.12 | Glossary verified primary | N/A | Not a glossary |
| 7. Navigation | 7.1 | Page in docs.json | PASS | docs.json line 2182 |
| 7. Navigation | 7.2 | Nav matches file system | PASS | Path matches |
| 7. Navigation | 7.3 | Tab entry portal routes | N/A | Not a portal |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable from nav |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Page is a stub; journey is incomplete |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Mentions other tabs but provides no links |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Published nav but is effectively a stub (1,535 bytes, status: draft) |
| 7. Navigation | 7.8 | File naming conventions | PASS | `contributor-orientation.mdx` descriptive |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not workspace |
| 7. Navigation | 7.10 | No stubs in published nav | FAIL | 1,535 bytes. Below 2KB minimum. Stub in published nav |
| 7. Navigation | 7.11 | Guides section serves secondary | N/A | Not guides section |
| 8. Links | 8.1 | All internal links resolve | PASS | 6 internal links to About pages |
| 8. Links | 8.2 | All external links live | N/A | No external links |
| 8. Links | 8.3 | All snippet imports resolve | PASS | CustomDivider path valid |
| 8. Links | 8.4 | All images load | N/A | No images |
| 8. Links | 8.5 | Page renders without error | PASS | Clean MDX |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | FAIL | "What this guide will eventually add" is effectively a Coming Soon section |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off recorded |
| 9. Process | 9.2 | Decisions in registry | N/A | No consuming decisions |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence of gate process |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence |
| 9. Process | 9.5 | Findings before fixes | N/A | Stub content |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections |
| 10. Completeness | 10.1 | Every question has a page | FAIL | "What this guide will eventually add" lists missing content |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Reading path exists but page content is skeletal |
| 10. Completeness | 10.3 | All persona paths unblocked | FAIL | No cross-tab links despite mentioning them |
| 10. Completeness | 10.4 | Scope boundaries explicit | PASS | Mentions role-specific tabs |
| 10. Completeness | 10.5 | Self-containment | FAIL | Incomplete; explicitly lists missing content |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 29 | "This page is being developed as the contributor-focused reading path through the About section." | "This page" self-reference | banned construction (2.4) | YES |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Recommended reading order | 4 | 3 | 5 | 5 | 4 | 21/25 |
| What this guide will eventually add | 2 | 1 | 2 | 3 | 2 | 10/25 FAIL |

## Spelling/Typo Check

No typos found.

## Component Matrix

| Component | Used? | Appropriate for `resource`? | Notes |
|---|---|---|---|
| CustomDivider | Yes | Yes | Opening divider only |

Missing: Cards for reading path, Related Pages footer.

## Cross-Category Connections

```
Root Cause 1: Page is a published stub
Affects: Cat 4.4 + Cat 4.11 + Cat 4.12 + Cat 5.33 + Cat 7.5 + Cat 7.7 + Cat 7.10 + Cat 10.1 + Cat 10.2 + Cat 10.3 + Cat 10.5
Fix: Either complete the page content or remove from published nav and move to _workspace/drafts/

Root Cause 2: Self-referential/hedging opener
Affects: Cat 2.4 + Cat 2.5 + Cat 2.10 + Cat 2.13
Fix: Replace "This page is being developed as..." with entity-led intro about the reading path itself

Root Cause 3: "What this guide will eventually add" section
Affects: Cat 3.2 + Cat 3.7 + Cat 6.9 + Cat 8.6
Fix: Remove the "eventually" section; either deliver the content or cut it
```

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 8 | 3 | 8/11 |
| 2. Voice & Copy | 22 | 18 | 4 | 18/22 |
| 3. Headings | 10 | 7 | 3 | 7/10 |
| 4. Structure | 13 | 7 | 6 | 7/13 |
| 5. Layout | 16 | 7 | 9 | 7/16 |
| 6. Veracity | 5 | 3 | 2 | 3/5 |
| 7. Navigation | 8 | 4 | 4 | 4/8 |
| 8. Links | 5 | 4 | 1 | 4/5 |
| 9. Process | 3 | 0 | 3 | 0/3 |
| 10. Completeness | 5 | 1 | 4 | 1/5 |

**Overall**: 59/98 applicable checks passed
**Verdict**: REWRITE REQUIRED
**Critical issues**:
1. 1,535-byte stub in published nav -- either complete or remove from nav
2. Self-referential hedging opener and "Coming Soon" section violate multiple voice checks
3. No Related Pages footer, no Cards for reading path, no cross-tab links despite mentioning them
