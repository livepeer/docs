# Review: core-concepts.mdx

**Page**: `v2/about/concepts/core-concepts.mdx`
**Review date**: 2026-04-09
**Checks reference**: checks.mdx (2026-04-09, 135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. `audience` and `purpose` use deprecated values (see 1.5, 1.4). All other required fields present |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` -- valid 7-type value |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | No `pageVariant` present, none required |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` -- deprecated alias. Should be one of the 15-value canonical set (likely `explain`) |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: general` -- deprecated value. Should be one of the 7-token set (likely `community`) |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: beginner` -- valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` -- valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Field missing entirely |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present (optional) |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present (optional) |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "A high-level introduction to the key concepts and architecture of the Livepeer Real-time AI & Video Network" -- subject-first, under 160 chars |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present: og:image, og:image:alt, og:image:type, og:image:width, og:image:height |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Keywords are generic single words: "livepeer", "about", "core concepts", "introduction", "key", "architecture". Should be searcher-intent phrases like "livepeer protocol vs network", "livepeer core architecture" |
| 2. Voice & Copy | 2.1 | UK English | PASS | "decentralised", "behaviour" used correctly. No US spellings found |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No instances of effectively, essentially, basically, meaningful, significant, various, several, obviously, clearly |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No banned phrases found in body text |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | No "This page [verb]" self-reference, no unresolved `if [condition]`, no `not [X]` value statements |
| 2. Voice & Copy | 2.5 | Opening order correct | FAIL | Page opens with "### Overview and separation" then immediately dives into architecture. No value or outcome statement first. Reader gets mechanism before benefit |
| 2. Voice & Copy | 2.6 | Paragraph discipline | FAIL | Lines 62-73: "Definitions" section has three heading-only stubs ("The protocol is the ruleset + on-chain logic governing:" with nothing following). One paragraph = one job is violated -- paragraphs trail off without conclusions |
| 2. Voice & Copy | 2.7 | Audience register correct | FAIL | `audience: general` is undefined register. Page mixes protocol jargon ("probabilistic payment tickets", "slashing") with overview language without calibrating to a specific reader |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | N/A | Cannot assess -- audience is deprecated `general`, no per-audience rules exist for it |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | No value claims made -- page is descriptive/definitional |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | Page does not open with a caveat or disclaimer |
| 2. Voice & Copy | 2.11 | Terminology locked | FAIL | Uses "broadcasters" (lines 36, 39) -- deprecated term, should be "Gateways" |
| 2. Voice & Copy | 2.12 | No em-dashes | PASS | No em-dashes found. Uses non-breaking hyphens which are acceptable |
| 2. Voice & Copy | 2.13 | Entity-led voice | FAIL | Lines 62-73: bare label stubs ("The protocol is the ruleset + on-chain logic governing:" / "The network is the actual running system of machines performing work:") are not entity-led prose |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No hedging verbs in value claims |
| 2. Voice & Copy | 2.15 | Description not self-referential | PASS | Description starts with "A high-level introduction to" -- subject-first |
| 2. Voice & Copy | 2.16 | Deprecated terms absent | FAIL | "broadcasters" on lines 36 and 39. Should be "Gateways" per canonical terminology |
| 2. Voice & Copy | 2.17 | Universal terms consistent | FAIL | "Broadcasters" used instead of "Gateways". Inconsistent capitalisation of role names throughout |
| 2. Voice & Copy | 2.18 | Spell check | FAIL | Line 41: trailing "U" character ("on-chainU") -- typo. Line 135: "whitpaper" -- should be "whitepaper" |
| 2. Voice & Copy | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | "Broadcasters" does not match canonical terminology |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | N/A | About tab terminology file would need to be checked |
| 2. Voice & Copy | 2.21 | First use specialised term defined | FAIL | "LPT" first used (line 39) without definition. "Probabilistic tickets" used without definition. "Slashing" used without definition or glossary link |
| 2. Voice & Copy | 2.22 | Terminology lock respected | N/A | No terminology lock identified for About tab |
| 3. Headings | 3.1 | Heading score >=20/25 | FAIL | 5 of 9 headings score below 20/25 (see Heading Score Table) |
| 3. Headings | 3.2 | No banned/weak headings | FAIL | "Overview" (line 76, H1) is in the "Avoid" tier. "Definitions" (line 61, H3) is weak/generic |
| 3. Headings | 3.3 | No literal contrast labels | FAIL | "Protocol vs Network" (line 113, H2) and "On-chain vs Off-chain" (line 121, H1) use literal X vs Y contrast |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Overview" and "Definitions" lack domain anchoring -- could appear on any documentation page |
| 3. Headings | 3.5 | Names concept not examples | PASS | Headings generally name concepts rather than examples |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Core Concepts" -- concept-derived, appropriate length |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Overview", "Definitions", "Core Concepts" are bureaucratic labels, not expert editorial choices |
| 3. Headings | 3.8 | Per-pageType naming style | FAIL | `concept` pages should use governing-concept naming. "Overview" and "Definitions" are generic labels not anchored to a governing concept |
| 3. Headings | 3.9 | Per-audience register in headings | FAIL | Register undefined due to deprecated `general` audience value |
| 3. Headings | 3.10 | Domain-anchor rule applied | FAIL | "Overview", "Definitions" not anchored to Livepeer domain -- identical headings could appear on any project |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Page tries to serve multiple jobs: overview + definitions + protocol/network comparison + actor taxonomy. Duplicates content between the "Overview and separation" intro and the "Core Concepts" H1 section |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Cannot cleanly state "This page lets the [AUDIENCE] [concrete action]" -- scope too broad, overlaps heavily with livepeer-overview.mdx |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | No explicit prev/next handoffs. In docs.json this follows mental-model.mdx but no content link or transition exists |
| 4. Structure | 4.4 | No dead ends | FAIL | Page ends abruptly with visible placeholder notes. No next step, no related pages, no exit link |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Concept page for general audience -- no prerequisites expected |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Scope unclear -- page covers the same ground as livepeer-overview.mdx with significant overlap |
| 4. Structure | 4.7 | Information type per section correct | FAIL | "Definitions" section (lines 62-73) consists of heading-only stubs with no content. Multiple sections are incomplete |
| 4. Structure | 4.8 | No content duplication | FAIL | Lines 82-118 duplicate content from lines 31-41 (protocol/network/actors definitions appear in intro AND again in Core Concepts H1). Entire "Core Concepts" H1 restates the intro |
| 4. Structure | 4.9 | Section orientation page | N/A | Section-level check, not page-level |
| 4. Structure | 4.10 | Cross-tab links present | FAIL | Zero cross-tab links anywhere on the page |
| 4. Structure | 4.11 | Discord test | FAIL | Cannot link this page as a complete answer to any question -- definitions are incomplete, content is duplicated, actor section ends with placeholder stubs |
| 4. Structure | 4.12 | Page size appropriate | PASS | 5464 bytes -- meets 5KB minimum for concept page (barely) |
| 4. Structure | 4.13 | No TODO/REVIEW without tracking | FAIL | Line 135: visible `<Note>INSERT LIVEPEER ACTOR DIAGRAM HERE [THIS ONE LOOKS OLD (whitpaper)</Note>`. Line 137: visible `<Note>Actor diagram placeholder removed pending final approved asset.</Note>` |
| 4. Structure | 4.14 | Flat layout | PASS | Single page, no sub-folders |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs, limitations, or failure conditions mentioned anywhere |
| 4. Structure | 4.16 | Content pass context block | FAIL | `audience: general` (deprecated) and `purpose: concept` (deprecated) prevent proper pipeline classification |
| 5. Layout | 5.1 | Correct template | FAIL | Does not follow concept template structure at all |
| 5. Layout | 5.2 | Required sections present | FAIL | Concept pages require a well-formed Overview. Page has a nominal one but it is poorly structured with duplicate content |
| 5. Layout | 5.3 | Only approved components | PASS | Uses Tabs (approved for concept), Note (approved) |
| 5. Layout | 5.4 | Avoided components absent | FAIL | Visible `<Note>` used as TODO placeholder (lines 135, 137) -- inappropriate use of Note component |
| 5. Layout | 5.5 | Info type to component mapping | PASS | Tabs used for multi-path content (protocol/network/actors) -- appropriate for concept page |
| 5. Layout | 5.6 | MDX renders clean | FAIL | `<Overview />` component referenced in Tabs (line 46) but never imported. Only `Protocol`, `Network`, `Actors` are imported. Will cause render error |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `purpose: concept` is deprecated alias, `audience: general` is deprecated value |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No inline styles present |
| 5. Layout | 5.9 | Generated file banners | N/A | Not a generated file |
| 5. Layout | 5.10 | Component naming/imports | PASS | PascalCase imports, correct root-absolute paths with extensions |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow concept-template.mdx structure |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No gold-standard section blocks used |
| 5. Layout | 5.13 | Section ordering | FAIL | Concept ordering should be Header CTA + Intro + Explanation + Comparison + Accordion + Related. Page has: bare H3 intro, Tabs, empty definitions, repeated H1 content, table, actors stubs |
| 5. Layout | 5.14 | Multi-view layout rules | PASS | Tabs used for single dimension -- correct |
| 5. Layout | 5.15 | Data imports, not hardcoded | N/A | No data-file-dependent content |
| 5. Layout | 5.16 | Related Pages or Next Step CTA | FAIL | Neither present at page end |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages section exists |
| 5. Layout | 5.18 | Tab icon prop | FAIL | `<Tab title="Overview">`, `<Tab title="Protocol">`, `<Tab title="Network">`, `<Tab title="Actors">` -- none have `icon` prop |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions used |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks present |
| 5. Layout | 5.21 | StyledSteps used | N/A | No step sequences |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | N/A | No navigation cards |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Raw markdown table at lines 114-118 used instead of StyledTable |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One table |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One major element (Tabs) |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No opening CustomDivider after imports. No CustomDivider anywhere on page |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid diagrams |
| 5. Layout | 5.28 | Import section ordering | PASS | Component imports grouped correctly at top |
| 5. Layout | 5.29 | Media placeholders in TODO comments | FAIL | Line 135: visible `<Note>` placeholder for actor diagram instead of JSX comment `{/* TODO: ... */}` |
| 5. Layout | 5.30 | Fact-check flags in JSX comments | N/A | No REVIEW flags needed or present |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | Protocol vs Network table visible on page load |
| 5. Layout | 5.32 | Reference tables at end | PASS | Table appears after explanatory content |
| 5. Layout | 5.33 | Drafts in workspace | N/A | Not a draft |
| 5. Layout | 5.34 | No inline styles or hardcoded hex | PASS | No inline styles |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "Livepeer protocol = Arbitrum One (L2)" and "Livepeer token (LPT) = Ethereum mainnet (L1)" (lines 123-125) presented as bare assertions without source citation |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code blocks |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers cited |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | Lines 123-125 present L1/L2 chain deployment assertions without REVIEW flags |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | `veracityStatus` field missing entirely |
| 6. Veracity | 6.7 | Authoritative glossary used | N/A | No glossary references |
| 6. Veracity | 6.8 | Source staleness check | FAIL | Chain deployment info (Arbitrum L2) has staleness risk -- no staleness flag or date |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Line 135: "INSERT LIVEPEER ACTOR DIAGRAM HERE" -- open-ended task with no concrete resolution step |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No sources cited for any factual claim |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No inline glossary definitions to verify |
| 6. Veracity | 6.12 | Glossary verified against primary | N/A | No glossary definitions present |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Present at `v2/about/concepts/core-concepts` in docs.json |
| 7. Navigation | 7.2 | Nav matches file system | PASS | File exists at expected path |
| 7. Navigation | 7.3 | Tab entry portal routes | N/A | Not a portal page |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable via docs.json navigation |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Page is a dead end -- no links to previous or next page in the audience journey |
| 7. Navigation | 7.6 | Cross-tab graduation paths | FAIL | Zero cross-tab links anywhere |
| 7. Navigation | 7.7 | File in correct lane | PASS | In `v2/about/concepts/` -- publishable location |
| 7. Navigation | 7.8 | File naming conventions | PASS | `core-concepts.mdx` -- valid naming, no disallowed prefixes |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in _workspace |
| 7. Navigation | 7.10 | No stubs in published nav | FAIL | Page contains significant stub content (empty definitions section, visible placeholder notes). Marginal quality for published nav |
| 7. Navigation | 7.11 | Guides section | N/A | Not a guides section page |
| 8. Links | 8.1 | Internal links resolve | N/A | No internal links in page body (composable snippets may contain links but parent page provides none) |
| 8. Links | 8.2 | External links live | N/A | No external links |
| 8. Links | 8.3 | Snippet imports resolve | FAIL | `<Overview />` used at line 46 but not imported. File exists at `/snippets/composables/pages/about/concepts/overview.mdx` but import statement is missing |
| 8. Links | 8.4 | Images load | N/A | No images referenced beyond OG fallback |
| 8. Links | 8.5 | Page renders without error | FAIL | Missing `Overview` import will cause render error at the `<Overview />` JSX tag in Tab component |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | FAIL | Line 135: visible "INSERT LIVEPEER ACTOR DIAGRAM HERE". Line 137: visible "Actor diagram placeholder removed pending final approved asset" |
| 9. Process | 9.1 | Human sign-off | FAIL | No evidence of human sign-off |
| 9. Process | 9.2 | Decisions in registry | N/A | No consuming decisions identified |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence of gate passage (audience design, content pass, veracity pass, layout pass) |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence of pipeline phase execution |
| 9. Process | 9.5 | Findings before fixes | N/A | Page appears to be in early draft state |
| 9. Process | 9.6 | Feedback routed | N/A | No review feedback trail exists |
| 10. Completeness | 10.1 | Every question has a page | N/A | Section-level check -- requires cross-reference against About tab question list |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Page is a dead end with no handoffs. Reader cannot continue a journey from this page |
| 10. Completeness | 10.3 | Primary persona paths unblocked | FAIL | Empty definitions, placeholder content, no exit links -- any persona path through this page is blocked |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Scope overlaps heavily with livepeer-overview.mdx. No explicit scope boundaries stated. Reader cannot tell what this page covers that the overview does not |
| 10. Completeness | 10.5 | Self-containment | FAIL | Definitions section is empty stubs. Reader cannot understand core concepts from this page alone |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 33 | "The protocol manages assets and incentives on Ethereum, while the off-chain network performs the heavy lifting of transcoding and AI processing." | None | Declarative | No |
| 37 | "They compete on price, quality and latency." | None | Declarative | No |
| 41 | "Any proposed change must respect this separation" | "must" | Procedural obligation | No |
| 78 | "Livepeer is a full-stack platform for video streaming & AI." | None | Declarative | No |

No banned constructions (can/may/could value claims, if-conditions in body, not-X value statements) found.

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Overview and separation (H3, L30) | 3 | 2 | 3 | 3 | 3 | 14/25 |
| Definitions (H3, L61) | 1 | 1 | 4 | 2 | 5 | 13/25 |
| Overview (H1, L76) | 1 | 1 | 4 | 2 | 5 | 13/25 |
| Core Concepts (H1, L82) | 2 | 1 | 4 | 3 | 4 | 14/25 |
| Livepeer Protocol (H2, L84) | 4 | 3 | 5 | 4 | 4 | 20/25 |
| Livepeer Network (H2, L98) | 4 | 3 | 5 | 4 | 4 | 20/25 |
| Protocol vs Network (H2, L113) | 3 | 2 | 4 | 4 | 3 | 16/25 |
| On-chain vs Off-chain (H1, L121) | 3 | 2 | 4 | 4 | 3 | 16/25 |
| Livepeer Actors (H1, L127) | 4 | 3 | 5 | 4 | 4 | 20/25 |

5 of 9 headings score below 20/25.

## Spelling/Typo Check

- Line 41: Trailing "U" character -- "on-chainU" (typo)
- Line 135: "whitpaper" should be "whitepaper"

## Component Matrix

| Component | Used? | Appropriate for `concept`? | Notes |
|---|---|---|---|
| Tabs | Yes | Yes (Preferred) | Missing `icon` prop on all 4 tabs |
| Note | Yes | Yes (Preferred) | Used as visible TODO placeholder -- inappropriate use |
| Raw markdown table | Yes | Should use StyledTable | Lines 114-118 |

## Cross-Category Connections

```
Root Cause 1: Page is an incomplete draft published as live content
Affects: Cat 4.1 + 4.7 + 4.8 + 4.11 + 4.13 + 5.4 + 7.10 + 8.6 + 10.3 + 10.5
Fix: Full rewrite required. Resolve scope overlap with livepeer-overview.mdx first (blocking decision), then write a focused concept page with complete definitions.

Root Cause 2: Deprecated frontmatter values
Affects: Cat 1.1 + 1.4 + 1.5 + 4.16 + 5.7
Fix: Update audience to canonical 7-token value (likely `community`), purpose to canonical 15-value set (likely `explain`), add `veracityStatus: unverified`.

Root Cause 3: Missing Overview import
Affects: Cat 5.6 + 8.3 + 8.5
Fix: Add `import Overview from "/snippets/composables/pages/about/concepts/overview.mdx"` to import block.
```

## Blocking Decision

```
Blocking Decision: What is the distinct purpose of core-concepts.mdx vs livepeer-overview.mdx?
Options: [A] Merge into livepeer-overview.mdx (recommended -- significant content duplication) / [B] Differentiate scopes explicitly and rewrite both
Impact: All other fixes are conditional on this decision. Rewriting without resolving the scope overlap reproduces the same problems.
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 13 | 5 | 5 | 3 | 5/10 |
| 2. Voice & Copy | 22 | 9 | 10 | 3 | 9/19 |
| 3. Headings | 10 | 2 | 8 | 0 | 2/10 |
| 4. Structure | 16 | 3 | 10 | 3 | 3/13 |
| 5. Layout | 34 | 9 | 12 | 13 | 9/21 |
| 6. Veracity | 12 | 0 | 6 | 6 | 0/6 |
| 7. Navigation | 11 | 4 | 3 | 4 | 4/7 |
| 8. Links | 6 | 0 | 3 | 3 | 0/3 |
| 9. Process | 6 | 0 | 3 | 3 | 0/3 |
| 10. Completeness | 5 | 0 | 4 | 1 | 0/4 |

**Overall**: 32/96 applicable checks passed (33%)
**Verdict**: REWRITE REQUIRED
**Critical issues**:
1. Scope overlap with livepeer-overview.mdx -- the two pages cover nearly identical ground with duplicated content. Blocking decision required before any rewrite.
2. Broken render -- `<Overview />` component used in Tab but never imported. Page will fail to render.
3. Incomplete/stub content -- empty definitions section, visible TODO placeholders in published nav, no journey handoffs, duplicated content blocks.
