# Review: index.mdx

**Page**: `v2/about/index.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Pre-flight Notes

This is an **auto-generated file** produced by `operations/scripts/generators/content/catalogs/generate-pages-index.js`. It has a `generated-file-banner:v1` block and a visible `<Note>` banner. Per checks.mdx reporting rules, the generation script is the root cause for any structural issues. This page is **NOT registered in docs.json** navigation (confirmed: docs.json lines 2112-2114 list only `v2/about/portal` and `v2/about/navigator` under the "About Livepeer" group). It functions as an internal generated TOC, not a published page.

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| title | Yes | `About Index` | PASS | |
| sidebarTitle | Yes | `About Index` | PASS | |
| description | Yes | `Generated table of contents for docs pages under v2/about.` | PASS | Subject-first, under 160 chars, no self-reference |
| pageType | Yes | `navigation` | PASS | Valid 7-type value |
| audience | No | -- | FAIL | Missing required field |
| purpose | Yes | `orient` | PASS | Valid 15-value canonical value |
| complexity | Yes | `beginner` | PASS | Valid value |
| lifecycleStage | Yes | `discover` | PASS | Valid value |
| keywords | Yes | `['livepeer', 'generated index', 'table of contents', 'v2/about']` | PASS | Present; quality is low (generic) but acceptable for generated internal page |
| og:image | No | -- | FAIL | No OG image block present |
| og:image:alt | No | -- | FAIL | Missing |
| og:image:type | No | -- | FAIL | Missing |
| og:image:width | No | -- | FAIL | Missing |
| og:image:height | No | -- | FAIL | Missing |
| veracityStatus | No | -- | FAIL | Missing |
| status | No | -- | N/A | Not required |
| lastVerified | No | -- | N/A | Not required |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing: `audience`, OG image block (all 5 fields). 5 of 10 required fields absent |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `navigation` is valid 7-type value |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | No pageVariant present |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `orient` is valid 15-value |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | Field missing entirely |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `beginner` is valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `discover` is valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Field missing |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first ("Generated table of contents..."), under 160 chars, no self-reference, UK English |
| 1. Frontmatter | 1.12 | OG image block complete | FAIL | No OG fields present |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic terms: "livepeer", "generated index", "table of contents", "v2/about". None are searcher-intent-aligned. However, this is an internal generated page, so impact is low |
| 2. Voice | 2.1 | UK English | N/A | Auto-generated file; no prose content to evaluate |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words found in generated content |
| 2. Voice | 2.3 | Zero banned phrases | PASS | No banned phrases found |
| 2. Voice | 2.4 | Zero banned constructions | PASS | No constructions present |
| 2. Voice | 2.5 | Opening order | N/A | Auto-generated; no prose opening |
| 2. Voice | 2.6 | Paragraph discipline | N/A | No paragraphs; link list only |
| 2. Voice | 2.7 | Audience register | N/A | No prose content |
| 2. Voice | 2.8 | Per-audience prohibited phrases | N/A | No prose content |
| 2. Voice | 2.9 | No passive value statements | N/A | No value statements |
| 2. Voice | 2.10 | No hedging openers | N/A | No prose opening |
| 2. Voice | 2.11 | Terminology locked | N/A | No terminology usage beyond link titles |
| 2. Voice | 2.12 | No em-dashes | PASS | None found |
| 2. Voice | 2.13 | Entity-led voice | N/A | No prose content |
| 2. Voice | 2.14 | No hedging verbs in value claims | N/A | No value claims |
| 2. Voice | 2.15 | Description not self-referential | PASS | "Generated table of contents for docs pages under v2/about." — subject-first |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | No deprecated terms found |
| 2. Voice | 2.17 | Universal terms consistent | N/A | No term usage in body |
| 2. Voice | 2.18 | Spell check | PASS | No spelling issues in visible text |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | N/A | No Livepeer-specific terms in body |
| 2. Voice | 2.20 | Per-tab terminology | N/A | No terminology in body |
| 2. Voice | 2.21 | First use of specialised term | N/A | No specialised terms in body |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No terminology in body |
| 3. Headings | 3.1 | Heading scores >= 20/25 | N/A | Auto-generated file; headings are section groupings from file system ("Design", "Concepts", "Network", "Protocol", "Resources"). Exempt from scoring as generated content |
| 3. Headings | 3.2 | No banned heading terms | PASS | None of the generated headings use banned terms. "Resources" is in the OK tier |
| 3. Headings | 3.3 | No literal contrast labels | PASS | No "X vs Y" headings |
| 3. Headings | 3.4 | Domain-anchor rule | N/A | Generated headings mirror folder names |
| 3. Headings | 3.5 | Names concept not examples | N/A | Generated file |
| 3. Headings | 3.6 | Title well-formed | PASS | "Table of contents" — functional for generated index |
| 3. Headings | 3.7 | Expert editorial choice | N/A | Auto-generated; not editorially authored |
| 3. Headings | 3.8 | Per-pageType naming style | N/A | Generated navigation page |
| 3. Headings | 3.9 | Per-audience register | N/A | Generated file |
| 3. Headings | 3.10 | Domain-anchor rule applied | N/A | Generated file |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Single job: generated table of contents for v2/about |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the [internal user] [find all pages under v2/about]." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | N/A | Not in docs.json navigation; no prev/next sequence |
| 4. Structure | 4.4 | No dead ends | PASS | Every link leads to a page. Page itself is a directory |
| 4. Structure | 4.5 | Prerequisites stated | N/A | No prerequisites needed for a TOC |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Scope is implicit — it lists everything under v2/about |
| 4. Structure | 4.7 | Information type per section | N/A | Generated list, not authored content |
| 4. Structure | 4.8 | No content duplication | PASS | No duplicated content |
| 4. Structure | 4.9 | Section orientation page | N/A | This IS the orientation page (generated) |
| 4. Structure | 4.10 | Cross-tab links | N/A | Internal index; cross-tab links not expected |
| 4. Structure | 4.11 | Discord test | N/A | Internal generated page; not intended for reader-facing answers |
| 4. Structure | 4.12 | Page size appropriate | PASS | 3,539 bytes. Acceptable for a generated TOC page |
| 4. Structure | 4.13 | No TODO/REVIEW comments | PASS | No TODO or REVIEW comments found |
| 4. Structure | 4.14 | Flat layout | N/A | Generated index |
| 4. Structure | 4.15 | Trade-offs present | N/A | Not a concept/economics/architecture page |
| 4. Structure | 4.16 | Content pass context block | N/A | Auto-generated file; not subject to content pipeline |
| 5. Layout | 5.1 | Correct template for pageType | PASS | Navigation page with link list — appropriate for generated index |
| 5. Layout | 5.2 | Required sections present | N/A | Generated page; no required sections beyond the list |
| 5. Layout | 5.3 | Only approved components | PASS | Uses only `<Note>` (approved for all pageTypes) |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon placeholders |
| 5. Layout | 5.5 | Info type to component mapping | N/A | Generated list |
| 5. Layout | 5.6 | MDX renders clean | NOT-TESTED | No render test run |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | `navigation` is valid 7-type |
| 5. Layout | 5.8 | CSS uses custom properties only | N/A | No CSS in this file |
| 5. Layout | 5.9 | Generated file banners intact | PASS | `generated-file-banner:v1` comment block present (lines 12-18) and visible `<Note>` banner present (lines 20-25) |
| 5. Layout | 5.10 | Component naming/import conventions | N/A | No component imports |
| 5. Layout | 5.11 | Gold-standard template | N/A | Generated file exempt from gold-standard template |
| 5. Layout | 5.12 | Section blocks from library | N/A | Generated file |
| 5. Layout | 5.13 | Section ordering matches pageType | N/A | Generated file |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view layout |
| 5. Layout | 5.15 | Data imports used | N/A | No data to import |
| 5. Layout | 5.16 | Related Pages or Next Step CTA | FAIL | No Related Pages footer or Next Step CTA. However, as a generated internal index, this is low priority |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages present |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs used |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions used |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | No steps |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | N/A | No Card components used |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | No tables |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | No major layout elements |
| 5. Layout | 5.26 | CustomDivider placement | N/A | No CustomDivider used |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid diagrams |
| 5. Layout | 5.28 | Import section ordering | N/A | No imports |
| 5. Layout | 5.29 | Media placeholders in TODO | N/A | No media |
| 5. Layout | 5.30 | Fact-check flags | N/A | No factual claims |
| 5. Layout | 5.31 | Decision-critical info visible | N/A | No decision content |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables |
| 5. Layout | 5.33 | Drafts in workspace | PASS | This is a published generated file at the correct path |
| 5. Layout | 5.34 | No inline styles or hardcoded hex | PASS | None found |
| 6. Veracity | 6.1 | Every factual claim citable | N/A | No factual claims; generated link list |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code/commands |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers |
| 6. Veracity | 6.5 | REVIEW flags for unverified | N/A | No claims to verify |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | veracityStatus missing; should be present |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary references |
| 6. Veracity | 6.8 | Source staleness | N/A | No external sources |
| 6. Veracity | 6.9 | No open-ended research | N/A | No research items |
| 6. Veracity | 6.10 | Source authority tiers | N/A | No sourced claims |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No glossary content |
| 6. Veracity | 6.12 | Glossary verified against primary | N/A | No glossary content |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | `v2/about/index` is NOT in docs.json. Only `v2/about/portal` and `v2/about/navigator` are listed under "About Livepeer" (docs.json line 2114). This is expected for a generated internal index |
| 7. Navigation | 7.2 | Nav matches file system | N/A | Page is intentionally outside nav |
| 7. Navigation | 7.3 | Tab entry portal routes to all sections | N/A | This is not the tab entry; portal.mdx is |
| 7. Navigation | 7.4 | No structural orphans | FAIL | Page is not reachable from docs.json navigation. However, it is a generated internal index — intentionally orphaned from published nav |
| 7. Navigation | 7.5 | Audience journey complete | N/A | Internal page; not part of reader journey |
| 7. Navigation | 7.6 | Cross-tab graduation paths | N/A | Internal page |
| 7. Navigation | 7.7 | File in correct lane | FAIL | This is a generated internal TOC at `v2/about/index.mdx`. If not intended for publishing, it should be in `_workspace/`. If intended as a Mintlify index, its absence from docs.json is a concern. Currently in an ambiguous lane |
| 7. Navigation | 7.8 | File naming conventions | PASS | `index.mdx` is standard for folder index pages |
| 7. Navigation | 7.9 | _workspace/ TTL compliance | N/A | Not in _workspace |
| 7. Navigation | 7.10 | No stubs in published nav | N/A | Not in published nav |
| 7. Navigation | 7.11 | Guides section serves secondary personas | N/A | Not a guides section page |
| 8. Links | 8.1 | All internal links resolve | FAIL | Uses relative `.mdx` links (e.g., `navigator.mdx`, `portal.mdx`, `concepts/core-concepts.mdx`). Mintlify requires root-absolute paths without file extensions. NOT-TESTED whether these resolve at runtime |
| 8. Links | 8.2 | All external links live | N/A | No external links |
| 8. Links | 8.3 | All snippet imports resolve | N/A | No snippet imports |
| 8. Links | 8.4 | All images load | N/A | No images |
| 8. Links | 8.5 | Page renders without error | NOT-TESTED | No render verification performed |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None found |
| 9. Process | 9.1 | Human sign-off recorded | N/A | Auto-generated file; human sign-off applies to the generator script, not individual outputs |
| 9. Process | 9.2 | Consuming decisions in registry | N/A | No structural decisions consumed |
| 9. Process | 9.3 | Gate prerequisites met | N/A | Generated file; not subject to content pipeline gates |
| 9. Process | 9.4 | Phase ordering respected | N/A | Generated file |
| 9. Process | 9.5 | Findings before fixes | N/A | Generated file |
| 9. Process | 9.6 | Feedback routed | N/A | Generated file |
| 10. Completeness | 10.1 | Every question has a page | N/A | This is a generated TOC, not a content page answering questions |
| 10. Completeness | 10.2 | Zero-to-hero journey complete | N/A | Internal index, not part of reader journey |
| 10. Completeness | 10.3 | All primary persona paths unblocked | N/A | Not a reader-facing page |
| 10. Completeness | 10.4 | Scope boundaries explicit | N/A | Internal generated page |
| 10. Completeness | 10.5 | Self-containment holds | N/A | Internal generated page |

## Banned Construction Scan

No prose content to scan. The page consists of a generated `<Note>` banner and a markdown link list. No sentences containing "can", "may", "could", "might", "should", no `if [condition]` constructions, no `not [X]` statements.

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| -- | (none found) | -- | -- | No |

## Heading Score Table

All headings are auto-generated from the file system directory structure. Exempt from editorial scoring per pre-flight determination.

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Table of contents | 4 | 2 | 5 | 5 | 4 | 20 |
| Design | 3 | 2 | 5 | 4 | 5 | 19 |
| Concepts | 4 | 2 | 5 | 5 | 5 | 21 |
| Network | 4 | 2 | 5 | 5 | 5 | 21 |
| Protocol | 4 | 2 | 5 | 5 | 5 | 21 |
| Resources | 4 | 2 | 5 | 5 | 5 | 21 |

Note: These are auto-generated from folder names. Scores are informational only; no editorial fix is appropriate since the generator script is the source.

## Spelling/Typo Check

No typos found in the generated content.

## Component Matrix

| Component | Used? | Appropriate for `navigation`? | Notes |
|-----------|-------|-------------------------------|-------|
| Note | Yes | Yes | Used for generated file banner — correct |

## Cross-Category Connections

```
Root Cause 1: Auto-generated file with incomplete frontmatter template
Affects: Cat 1.1 (missing audience, OG image) + Cat 1.8 (missing veracityStatus) + Cat 1.12 (missing OG block)
Fix: Update the generator script (generate-pages-index.js) to include all 10 required frontmatter fields in its template, including audience, OG image block, and veracityStatus

Root Cause 2: Generated links use relative .mdx paths
Affects: Cat 8.1 (link format)
Fix: Update generator script to output root-absolute paths without .mdx extension (e.g., `/v2/about/navigator` not `navigator.mdx`)

Root Cause 3: File lane ambiguity
Affects: Cat 7.1 (not in docs.json) + Cat 7.4 (orphaned) + Cat 7.7 (wrong lane?)
Fix: Decision needed — if this is an internal tool, move to _workspace/. If it should be published, add to docs.json
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 13 | 7 | 5 | 1 | 7/12 |
| 2. Voice | 22 | 5 | 0 | 17 | 5/5 |
| 3. Headings | 10 | 2 | 0 | 8 | 2/2 |
| 4. Structure | 16 | 5 | 0 | 11 | 5/5 |
| 5. Layout | 34 | 4 | 1 | 29 | 4/5 |
| 6. Veracity | 12 | 0 | 1 | 11 | 0/1 |
| 7. Navigation | 11 | 1 | 3 | 7 | 1/4 |
| 8. Links | 6 | 1 | 1 | 4 | 1/2 |
| 9. Process | 6 | 0 | 0 | 6 | 0/0 |
| 10. Completeness | 5 | 0 | 0 | 5 | 0/0 |

**Overall**: 25/36 applicable checks passed (99 checks N/A — auto-generated file)
**Verdict**: NEEDS WORK
**Critical issues**:
1. Missing required frontmatter fields (audience, OG image block, veracityStatus) — fix in generator script template
2. Relative `.mdx` link format instead of root-absolute paths — fix in generator script
3. File lane ambiguity — decision needed on whether this belongs in `v2/about/` or `_workspace/`
