# Review: core-concepts.mdx (concepts1)

**Page**: `v2/about/concepts1/core-concepts.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. `audience` and `purpose` use deprecated values |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` is valid |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` is a deprecated alias. Should be `explain` |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: general` is deprecated. Should be `community` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `beginner` is valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `discover` is valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing entirely |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, under 160 chars, no self-reference |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic single tokens: `livepeer`, `about`, `core concepts`, `introduction`, `key terms`, `architecture` |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | Audience is deprecated |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "behaviour" used. No US spellings |
| 2. Voice | 2.2 | Zero banned words | PASS | None found |
| 2. Voice | 2.3 | Zero banned phrases | FAIL | Line 71: "respect this separation-heavy compute must remain off-chain" — broken construction |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None found |
| 2. Voice | 2.5 | Opening order correct | FAIL | Opens with `<Danger>Fold into Protocol & Network page</Danger>` editorial directive — should be hidden in JSX comment |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Lines 75–85: "Definitions" subsection has 3 heading-only stubs ("**Livepeer Protocol**" / "The protocol is the ruleset + on-chain logic governing:" with NOTHING following the colon). Trail-off prose |
| 2. Voice | 2.7 | Audience register correct | FAIL | `audience: general` undefined. Mixes founder-pitch ("DePIN", "AI agents") with technical jargon ("probabilistic payment tickets", "slashing") without calibration |
| 2. Voice | 2.8 | Per-audience prohibited | N/A | Audience is deprecated `general` |
| 2. Voice | 2.9 | No passive value statements | PASS | None |
| 2. Voice | 2.10 | No hedging openers | FAIL | Opens with `<Danger>` editorial directive then a video, then a tip — buries the lead |
| 2. Voice | 2.11 | Terminology locked | FAIL | Uses "broadcasters" (line 65, 69) — deprecated; should be "Gateways" |
| 2. Voice | 2.12 | No em-dashes | PASS | Uses non-breaking hyphen (‑) — acceptable |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Lines 75–85 are bare label stubs, not entity-led prose |
| 2. Voice | 2.14 | No hedging verbs | PASS | None |
| 2. Voice | 2.15 | Description not self-referential | PASS | "A high-level introduction to..." is subject-first |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "broadcasters" (lines 65, 69) |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | "Broadcasters" mixed with "Gateways" |
| 2. Voice | 2.18 | Spell check | FAIL | Line 71: "on-chainU */}" — stray U + dangling `*/}` (broken JSX comment terminator) |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | "Broadcasters" not canonical |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | Mixes raw protocol primitives with about-tab register |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "DePIN", "LPT", "probabilistic payment tickets", "slashing" undefined on first use |
| 2. Voice | 2.22 | Terminology lock | N/A | No lock identified |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | "Core Concepts" (16/25 — generic), "Definitions" (12/25 — weak/avoid tier) |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "Definitions" is in the avoid tier per Frameworks.mdx §4.1 |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None |
| 3. Headings | 3.4 | Domain-anchor rule | FAIL | "Core Concepts" and "Definitions" lack domain anchor |
| 3. Headings | 3.5 | Names concept not examples | PASS | Concept-named |
| 3. Headings | 3.6 | Title well-formed | FAIL | "Livepeer Core Concepts and Terminology Guide" — 5 words, includes "Guide" suffix that bloats |
| 3. Headings | 3.7 | Expert editorial choice | FAIL | "Definitions" is bureaucratic/safe |
| 3. Headings | 3.8 | Per-pageType naming | PASS | concept page uses governing-concept naming attempt |
| 3. Headings | 3.9 | Per-audience register | FAIL | Audience deprecated |
| 3. Headings | 3.10 | Domain-anchor applied | FAIL | Same as 3.4 |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Author flagged in `<Danger>` "Fold into Protocol & Network page" — page admits its own scope is wrong |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Cannot state — author has indicated the page should be merged |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Not in docs.json — orphan |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages, no exits |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None stated |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Boundary with Protocol/Network page is the entire reason for the `<Danger>` directive |
| 4. Structure | 4.7 | Info type per section correct | FAIL | Mixes conceptual + structural + reference (broken stubs) |
| 4. Structure | 4.8 | No content duplication | FAIL | Content overlaps with `concepts/about-livepeer.mdx`, `concepts/livepeer-stack.mdx`, `concepts1/livepeer-protocol-and-network.mdx`, `concepts2/core-concepts.mdx`, `concepts2/livepeer-overview.mdx`, and `concepts/core-concepts.mdx` (now deleted) |
| 4. Structure | 4.9 | Section orientation page | N/A | Not a section index |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab graduations |
| 4. Structure | 4.11 | Discord test | FAIL | Linking this page returns truncated stubs ending mid-sentence |
| 4. Structure | 4.12 | Page size appropriate | FAIL | Substantive content under 2KB once commented sections are excluded |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | `<Danger>` editorial directive in published-style content. Massive commented-out blocks (lines 49–59, 86–147) |
| 4. Structure | 4.14 | Flat layout | PASS | Flat |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Audience/purpose deprecated, scope unresolved |
| 4. Structure | 4.17 | Multi-audience handoff | FAIL | None |
| 5. Layout | 5.1 | Correct template | FAIL | No recognisable concept template |
| 5. Layout | 5.2 | Required sections | FAIL | No proper introduction; "Definitions" stubs are not a Reference section |
| 5. Layout | 5.3 | Only approved components | PASS | All used components are approved |
| 5. Layout | 5.4 | Avoided components absent | FAIL | `<Danger>` used as editorial-directive placeholder |
| 5. Layout | 5.5 | Info type → component | FAIL | Definition stubs as bare bold labels — should be `ParamField` or `<dl>` |
| 5. Layout | 5.6 | MDX renders clean | FAIL | Line 71: stray `*/}` outside any open `{/*` opener — likely renders garbled |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept` deprecated |
| 5. Layout | 5.8 | CSS custom properties only | N/A | No styling |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | PASS | Imports correct |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow concept template |
| 5. Layout | 5.12 | Section blocks from library | FAIL | None |
| 5. Layout | 5.13 | Section ordering | FAIL | Hero+Tip+H2 then orphan H3 stubs |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | None |
| 5. Layout | 5.15 | Data imports not hardcoded | N/A | No data |
| 5. Layout | 5.16 | Related Pages footer | FAIL | Missing |
| 5. Layout | 5.17 | Related Pages format | N/A | Not present |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | None |
| 5. Layout | 5.22 | Navigation cards | N/A | None |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | None |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | None |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | One CustomDivider near top with negative margin override `style={{ margin: '-1rem 0 -2rem 0' }}` — violates check 5.34 (no inline style) |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No diagrams |
| 5. Layout | 5.28 | Import section ordering | PASS | Imports in correct order |
| 5. Layout | 5.29 | Media placeholders | N/A | YouTubeVideo embedded inline (live media, not placeholder) |
| 5. Layout | 5.30 | Fact-check flags | FAIL | "10x lower cost", "70% lower" claims (in canonical refs) — no REVIEW flags here |
| 5. Layout | 5.31 | Decision-critical visible | N/A | No decision content |
| 5. Layout | 5.32 | Reference tables at end | N/A | None |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Page is clearly draft scratch (huge commented blocks, `<Danger>` author note) but lives outside `_workspace/drafts/` |
| 5. Layout | 5.34 | No inline styles | FAIL | `style={{ margin: '-1rem 0 -2rem 0' }}` on CustomDivider |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "ETH deposits", "probabilistic payment tickets", "LPT staking" — no inline citations |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | N/A | No API references |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | None |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.7 | Authoritative glossary | FAIL | No glossary cross-reference |
| 6. Veracity | 6.8 | Source staleness | FAIL | Not flagged |
| 6. Veracity | 6.9 | No open-ended research | FAIL | `<Danger>Fold into Protocol & Network page</Danger>` IS an open research task |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No sources |
| 6. Veracity | 6.11 | Glossary definitions match | FAIL | Definitions are blank stubs |
| 6. Veracity | 6.12 | Glossary verified | FAIL | Same as 6.11 |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | Not registered |
| 7. Navigation | 7.2 | Nav matches filesystem | FAIL | Orphan |
| 7. Navigation | 7.3 | Tab entry routes | N/A | Not portal |
| 7. Navigation | 7.4 | No structural orphans | FAIL | This file is one |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | No journey |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | None |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Should be `_workspace/drafts/` |
| 7. Navigation | 7.8 | File naming conventions | PASS | Acceptable |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in workspace |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | Not in nav |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not resources |
| 8. Links | 8.1 | Internal links resolve | N/A | No internal links |
| 8. Links | 8.2 | External links live | PASS | Stanford blockchain review link is live |
| 8. Links | 8.3 | Snippet imports resolve | PASS | All component imports valid |
| 8. Links | 8.4 | Images load | N/A | None |
| 8. Links | 8.5 | Page renders | FAIL | Stray `*/}` on line 71 likely breaks render |
| 8. Links | 8.6 | No TODO/TBD | FAIL | `<Danger>` directive is effectively a TODO |
| 9. Process | 9.1–9.6 | All process checks | FAIL | No sign-off, no decision registry entry, no gate evidence |
| 10. Completeness | 10.1 | Every question has a page | FAIL | This page does not answer its own question |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Truncated stubs break journey |
| 10. Completeness | 10.3 | Persona paths unblocked | FAIL | No exits |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Author admits scope is wrong |
| 10. Completeness | 10.5 | Self-containment | FAIL | Not self-contained |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | None |

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 4 | 7 | 3 | 4/11 |
| 2. Voice | 22 | 6 | 13 | 3 | 6/19 |
| 3. Headings | 10 | 2 | 7 | 1 | 2/9 |
| 4. Structure | 17 | 1 | 14 | 2 | 1/15 |
| 5. Layout | 34 | 4 | 11 | 19 | 4/15 |
| 6. Veracity | 12 | 0 | 11 | 1 | 0/11 |
| 7. Navigation | 11 | 2 | 5 | 4 | 2/7 |
| 8. Links | 6 | 2 | 2 | 2 | 2/4 |
| 9. Process | 6 | 0 | 6 | 0 | 0/6 |
| 10. Completeness | 6 | 0 | 6 | 0 | 0/6 |

**Overall**: 21/103 applicable checks passed (~20%)
**Verdict**: REWRITE REQUIRED

## Critical Issues

1. **CRITICAL** — Author flagged `<Danger>Fold into Protocol & Network page</Danger>` at line 31. The page admits its own scope is wrong.
2. **CRITICAL** — Broken JSX comment terminator at line 71 (`on-chainU */}` with no preceding `{/*`). Likely render-breaking.
3. **HIGH** — "Definitions" subsection (lines 75–85) contains three heading-only stubs with empty content under each label.
4. **HIGH** — Deprecated frontmatter (`audience: general`, `purpose: concept`); missing `veracityStatus`.
5. **HIGH** — Deprecated term "broadcasters" used; "LPT", "DePIN", "slashing" undefined on first use.

## Cross-Page Duplication Notes

- The intro paragraphs (DePIN tip, full-stack substrate sentence) are word-for-word duplicates of `concepts1/livepeer-protocol-and-network.mdx`.
- The "On-chain protocol / Off-chain network / Bridge" three-block (lines 63–71) appears verbatim in `concepts2/core-concepts.mdx`.
- The commented-out lower section (lines 86–147) duplicates `concepts2/livepeer-overview.mdx` and the deleted `concepts/core-concepts.mdx` in git history.

## Recommendation

Delete or move to `_workspace/drafts/`. Author has already declared the page should be folded into Protocol & Network. The canonical concept-tier landing pages now live at `concepts/about-livepeer.mdx`, `concepts/livepeer-stack.mdx`, and `concepts/core-principles.mdx`.
