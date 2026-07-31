# Review: scaling.mdx

**Page**: `v2/about/network/scaling.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `pageType`, `purpose`. Has title, sidebarTitle, description, lifecycleStage, complexity, audience, keywords, OG block. |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | FAIL | Missing entirely. |
| 1. Frontmatter | 1.3 | pageVariant valid if present | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | FAIL | Missing entirely. |
| 1. Frontmatter | 1.5 | audience 7-token set | PASS | `community` is valid. |
| 1. Frontmatter | 1.6 | complexity single value | PASS | `advanced` is valid. |
| 1. Frontmatter | 1.7 | lifecycleStage single value | PASS | `discover` is valid. |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | "Learn about the Livepeer scaling." is self-referential, generic, and grammatically awkward ("the Livepeer scaling"). |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present with fallback. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Extremely generic: `scaling`, `learn`. |
| 2. Voice | 2.1 | UK English | N/A | No prose. |
| 2. Voice | 2.2 | Zero banned words | PASS | None. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None. |
| 2. Voice | 2.4 | Zero banned constructions | FAIL | "This page describes:" is self-referential. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Self-referential opener. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | No paragraphs. |
| 2. Voice | 2.7 | Audience register | FAIL | No content. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | N/A | No prose. |
| 2. Voice | 2.9 | No passive value statements | N/A | No content. |
| 2. Voice | 2.10 | No hedging openers | FAIL | "This page describes:". |
| 2. Voice | 2.11 | Terminology locked | N/A | No terms. |
| 2. Voice | 2.12 | No em-dashes | PASS | None. |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Opens with "This page". |
| 2. Voice | 2.14 | No hedging verbs | N/A | No claims. |
| 2. Voice | 2.15 | Description not self-referential | FAIL | "Learn about..." self-referential. |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | None. |
| 2. Voice | 2.17 | Universal terms consistent | N/A | No terms. |
| 2. Voice | 2.18 | Spell check | PASS | No errors. |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | N/A | No terms. |
| 2. Voice | 2.20 | Per-tab terminology | N/A | No content. |
| 2. Voice | 2.21 | First use defined or linked | N/A | No terms. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No content. |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | No body headings. |
| 3. Headings | 3.2 | No banned/weak standalone terms | N/A | No headings. |
| 3. Headings | 3.3 | No literal contrast labels | N/A | No headings. |
| 3. Headings | 3.4 | Domain-anchor rule | N/A | No headings. |
| 3. Headings | 3.5 | Names concept not examples | N/A | No headings. |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Scaling" is 2 words, concept-derived. |
| 3. Headings | 3.7 | Expert editorial choice | N/A | No headings. |
| 3. Headings | 3.8 | Per-pageType naming style | N/A | No pageType. |
| 3. Headings | 3.9 | Per-audience register | N/A | No headings. |
| 3. Headings | 3.10 | Domain-anchor rule applied | N/A | No headings. |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | No content. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | No content. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Previous is supply-side (also a stub). Last page in section. No transition. |
| 4. Structure | 4.4 | No dead ends | FAIL | Complete dead end. Last page in nav section with no links. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | None. |
| 4. Structure | 4.7 | Info type per section correct | FAIL | No sections. |
| 4. Structure | 4.8 | No content duplication | PASS | Nothing to duplicate. |
| 4. Structure | 4.9 | Section orientation page | FAIL | Not an orientation page. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | None. |
| 4. Structure | 4.11 | Discord test | FAIL | Zero value. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~537 bytes. Stub. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | None. |
| 4. Structure | 4.14 | Flat layout | PASS | No sub-folders. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No content. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Cannot fill pageType, purpose. |
| 5. Layout | 5.1 | Correct template | FAIL | None. |
| 5. Layout | 5.2 | Required sections | FAIL | None. |
| 5. Layout | 5.3 | Only approved components | PASS | None used. |
| 5. Layout | 5.4 | Avoided components absent | PASS | None. |
| 5. Layout | 5.5 | Info type -> component mapping | FAIL | No components. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders. |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | No deprecated values present. |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling. |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming/import | N/A | No imports. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | None. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | None. |
| 5. Layout | 5.13 | Section ordering | FAIL | No sections. |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | None. |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | No data. |
| 5. Layout | 5.16 | Related Pages footer | FAIL | None. |
| 5. Layout | 5.17 | Related Pages format | FAIL | None. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | N/A | No code. |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps. |
| 5. Layout | 5.22 | Navigation cards | N/A | No cards. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables. |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | No tables. |
| 5. Layout | 5.25 | Max 1 major layout element | N/A | None. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | None. |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No diagrams. |
| 5. Layout | 5.28 | Import section ordering | N/A | No imports. |
| 5. Layout | 5.29 | Media placeholders | N/A | No media. |
| 5. Layout | 5.30 | Fact-check flags | N/A | No claims. |
| 5. Layout | 5.31 | Decision-critical visible | N/A | None. |
| 5. Layout | 5.32 | Reference tables at end | N/A | None. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Stub in live path. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1 | Every claim citable | N/A | No claims. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code. |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No APIs. |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers. |
| 6. Veracity | 6.5 | REVIEW flags for unverified | N/A | No claims. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | None. |
| 6. Veracity | 6.8 | Source staleness | N/A | None. |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Entire page is an open outline. |
| 6. Veracity | 6.10 | Source authority tiers | N/A | None. |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | None. |
| 6. Veracity | 6.12 | Glossary verified | N/A | None. |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Listed at `v2/about/network/scaling`. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists. |
| 7. Navigation | 7.3 | Tab entry routes to sections | N/A | Not an entry page. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Stub breaks journey. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No links. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Stub in published path. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `scaling.mdx` acceptable. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in _workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | FAIL | ~537 bytes. Stub in nav. |
| 7. Navigation | 7.11 | Guides section | N/A | Not guides. |
| 8. Links | 8.1 | Internal links resolve | N/A | No links. |
| 8. Links | 8.2 | External links live | N/A | No links. |
| 8. Links | 8.3 | Snippet imports resolve | N/A | No imports. |
| 8. Links | 8.4 | Images load | N/A | No images. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None visible. |
| 9. Process | 9.1 | Human sign-off | FAIL | None. |
| 9. Process | 9.2 | Decisions in registry | FAIL | None. |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | None. |
| 9. Process | 9.4 | Phase ordering respected | FAIL | None. |
| 9. Process | 9.5 | Findings before fixes | FAIL | None. |
| 9. Process | 9.6 | Feedback routed | N/A | Nothing. |
| 10. Completeness | 10.1 | Every question has a page | FAIL | Answers nothing. |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Dead end. |
| 10. Completeness | 10.3 | All persona paths unblocked | FAIL | Dead end. |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | None. |
| 10. Completeness | 10.5 | Self-containment | FAIL | No content. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 10 | 4 | 6 | 4/10 |
| 2. Voice | 10 | 4 | 6 | 4/10 |
| 3. Headings | 2 | 1 | 1 | 1/2 |
| 4. Structure | 14 | 3 | 11 | 3/14 |
| 5. Layout | 10 | 5 | 5 | 5/10 |
| 6. Veracity | 2 | 0 | 2 | 0/2 |
| 7. Navigation | 8 | 4 | 4 | 4/8 |
| 8. Links | 2 | 2 | 0 | 2/2 |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 5 | 0 | 5 | 0/5 |

**Overall**: 23/68 checks passed (applicable checks only)
**Verdict**: REWRITE REQUIRED
**Critical issues**:
1. Empty stub (~537 bytes) with only a numbered outline; no actual content
2. In published nav as last page in section, creating a dead-end journey terminus
3. Missing critical frontmatter fields (pageType, purpose, veracityStatus)
