# Review: livepeer-protocol-and-network.mdx (concepts1)

**Page**: `v2/about/concepts1/livepeer-protocol-and-network.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` valid |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: explain` valid |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: community` valid |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `beginner` valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `discover` valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, under 160 chars |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic and self-repeating: `livepeer`, `about`, `livepeer protocol`, `protocol overview`, `protocol`, `overview`. Three of six are variations of "protocol" |
| 1. Frontmatter | 1.14 | Multi-audience flag | FAIL | Tabs cover Overview/Protocol/Network/Participants — multiple audience perspectives — no flagging |
| 2. Voice | 2.1 | UK English | FAIL | Accordion summary uses "centralized" (lines 43, 47, 91), "monetization" (line 81), "decentralized" (line 91) — many US spellings imported from external transcript |
| 2. Voice | 2.2 | Zero banned words | PASS | None |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None in body. Accordion summary uses "essential" once but as adjective |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None |
| 2. Voice | 2.5 | Opening order correct | FAIL | Page opens with YouTube video + 100+ line podcast Accordion summary BEFORE the actual page content. Mechanism (external interview) before fact |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Accordion summary is dense bullet list interleaved with paragraphs of unverified claims |
| 2. Voice | 2.7 | Audience register correct | FAIL | Mixes founder framing ($250B market, ROI) with community framing inside the same Accordion |
| 2. Voice | 2.8 | Per-audience prohibited | FAIL | "Big tech and regulatory dominance" + "Decentralized AI models promote trust" — borderline founder-pitch-y for community register |
| 2. Voice | 2.9 | No passive value statements | FAIL | "Stakers earn about 40% annual returns" with no source or REVIEW flag |
| 2. Voice | 2.10 | No hedging openers | FAIL | Page proper opens with another `<Tip>` (after the lengthy Accordion) restating the DePIN intro. Then `<Danger>SIMPLIFY & POINT TO PAGES</Danger>` author directive. Then a Tabs block where 3 of 4 tabs render composables |
| 2. Voice | 2.11 | Terminology locked | PASS | Body uses Gateway/Orchestrator/Delegator |
| 2. Voice | 2.12 | No em-dashes | PASS | None |
| 2. Voice | 2.13 | Entity-led voice | PASS | Body opener is entity-led ("Livepeer is...") |
| 2. Voice | 2.14 | No hedging verbs | PASS | None |
| 2. Voice | 2.15 | Description not self-referential | PASS | Subject-first |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | Commented-out scratch (lines 218–271) contains "Gateways (aka Broadcasters)" — even if commented, signals draft state |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Body terms consistent (commented blocks excluded) |
| 2. Voice | 2.18 | Spell check | FAIL | "incenticises" (commented line 215), "mergin" (commented lines 149, 174, 197), "Decentralizing" (line 39) — typos and inconsistent spelling |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Body terms |
| 2. Voice | 2.20 | Per-tab terminology | PASS | About-tab register held in body |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "DePIN" used in Tip (line 97) — only the Stanford article link, no definition. "LPT", "go-livepeer" used without inline definition |
| 2. Voice | 2.22 | Terminology lock | N/A | None |
| 3. Headings | 3.1 | Heading score >= 20/25 | N/A | Page has only the H1 title (frontmatter) — no body H2s outside commented-out scratch. Tabs titles are evaluated separately |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No headings in body |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None |
| 3. Headings | 3.4 | Domain-anchor rule | N/A | No body headings |
| 3. Headings | 3.5 | Names concept not examples | N/A | Same |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Protocol and Network" — 4 words, concept |
| 3. Headings | 3.7 | Expert editorial choice | N/A | No body headings to evaluate |
| 3. Headings | 3.8 | Per-pageType naming | N/A | Same |
| 3. Headings | 3.9 | Per-audience register | N/A | Same |
| 3. Headings | 3.10 | Domain-anchor applied | N/A | Same |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Author flagged `<Danger>SIMPLIFY & POINT TO PAGES</Danger>` line 105 — admits scope is wrong. Tabs present 4 different perspectives |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Cannot state — author has flagged for simplification |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Not in docs.json |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages section |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Boundary undefined; entire page is delegated to composables |
| 4. Structure | 4.7 | Info type per section correct | PASS | Conceptual + structural via composables |
| 4. Structure | 4.8 | No content duplication | FAIL | Tabs use composables Overview/Protocol/Network/Actors — composables likely reproduce content from `concepts0/about-livepeer-all.mdx`, `concepts2/core-concepts.mdx`, `concepts2/livepeer-overview.mdx`. The Tip/intro paragraph is identical to `concepts1/core-concepts.mdx` |
| 4. Structure | 4.9 | Section orientation page | N/A | Not orientation index |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab graduation links in body (commented blocks have some) |
| 4. Structure | 4.11 | Discord test | FAIL | Linking gives 100-line podcast summary before any answer. `<Danger>` directive visible |
| 4. Structure | 4.12 | Page size appropriate | PASS | ~6KB visible content (composables expand at runtime) |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | `<Danger>SIMPLIFY & POINT TO PAGES</Danger>` is a published author note. Massive commented-out scratch (lines 125–271) |
| 4. Structure | 4.14 | Flat layout | PASS | Flat |
| 4. Structure | 4.15 | Trade-offs present | FAIL | None visible |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Author flagged scope wrong |
| 4. Structure | 4.17 | Multi-audience handoff | FAIL | Tabs present 4 perspectives without explicit handoff per audience |
| 5. Layout | 5.1 | Correct template | FAIL | Not a recognisable concept template — composable-driven |
| 5. Layout | 5.2 | Required sections | FAIL | No standalone Overview, no Related Pages |
| 5. Layout | 5.3 | Only approved components | PASS | All approved |
| 5. Layout | 5.4 | Avoided components absent | FAIL | `<Danger>` used as author directive |
| 5. Layout | 5.5 | Info type → component | PASS | Tabs in BorderedBox is appropriate for parallel-structure content |
| 5. Layout | 5.6 | MDX renders clean | PASS | Should render (composables resolve) |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | New schema |
| 5. Layout | 5.8 | CSS custom properties only | PASS | None used in this file |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | PASS | Composables imported with correct paths |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Not template-aligned |
| 5. Layout | 5.12 | Section blocks from library | FAIL | None |
| 5. Layout | 5.13 | Section ordering | FAIL | YouTube + Accordion + Tip + Tabs — no recognisable concept ordering |
| 5. Layout | 5.14 | Multi-view layout rules | PASS | Tabs are 1-dimension (perspective) |
| 5. Layout | 5.15 | Data imports not hardcoded | FAIL | Hardcoded "$250 billion market", "3 million+ video minutes weekly", "40% annual returns", "10x cheaper" in Accordion |
| 5. Layout | 5.16 | Related Pages footer | FAIL | Missing |
| 5. Layout | 5.17 | Related Pages format | N/A | Not present |
| 5. Layout | 5.18 | Tab icon prop | FAIL | Tabs all use `icon="cube"` for Overview, Protocol; `icon="circle-nodes"` for Network; `icon="users"` for Participants. Two Tabs share the same `cube` icon — should be distinct |
| 5. Layout | 5.19 | Accordion icon prop | PASS | Has `icon="video"` |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | None |
| 5. Layout | 5.22 | Navigation cards | N/A | None |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | None |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | None |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One Tabs block |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | One CustomDivider with `style={{ margin: '-1rem 0 -2rem 0' }}` — violates 5.34 |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | None |
| 5. Layout | 5.28 | Import section ordering | PASS | Components → Page imports — correct |
| 5. Layout | 5.29 | Media placeholders | N/A | None |
| 5. Layout | 5.30 | Fact-check flags | FAIL | All Accordion claims unflagged |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Tabs visible |
| 5. Layout | 5.32 | Reference tables at end | N/A | None |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Heavy commented-out scratch (lines 125–271 — over 50% of file) |
| 5. Layout | 5.34 | No inline styles | FAIL | CustomDivider inline style |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "$250 billion market", "3 million+ minutes weekly", "40% annual returns", "10x cheaper", "10x to 100x usage increase" — none cited |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | N/A | No API |
| 6. Veracity | 6.4 | Numbers are real | FAIL | Numbers are from a podcast transcript, not primary sources |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | None |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.7 | Authoritative glossary | FAIL | No cross-reference |
| 6. Veracity | 6.8 | Source staleness | FAIL | "Plans to add generative AI" — already shipped; transcript stale |
| 6. Veracity | 6.9 | No open-ended research | FAIL | `<Danger>SIMPLIFY & POINT TO PAGES</Danger>` IS an open task |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | YouTube interview is T3 |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No definitions in body |
| 6. Veracity | 6.12 | Glossary verified | N/A | Same |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | Not registered |
| 7. Navigation | 7.2 | Nav matches filesystem | FAIL | Orphan |
| 7. Navigation | 7.3 | Tab entry routes | N/A | Not portal |
| 7. Navigation | 7.4 | No structural orphans | FAIL | This file is one |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | No journey |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No cross-tab links |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Should be `_workspace/drafts/` |
| 7. Navigation | 7.8 | File naming conventions | PASS | Acceptable |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in workspace |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | Not in nav |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not resources |
| 8. Links | 8.1 | Internal links resolve | N/A | Only links are inside composables and commented blocks |
| 8. Links | 8.2 | External links live | PASS | YouTube, Stanford links live |
| 8. Links | 8.3 | Snippet imports resolve | PASS | Composables likely resolve (4 paths under /snippets/composables/pages/about/concepts/) |
| 8. Links | 8.4 | Images load | N/A | None |
| 8. Links | 8.5 | Page renders | PASS | Should render |
| 8. Links | 8.6 | No TODO/TBD | FAIL | `<Danger>` directive |
| 9. Process | 9.1–9.6 | All process checks | FAIL | No sign-off, no decisions |
| 10. Completeness | 10.1 | Every question has a page | FAIL | Page defers to composables — does not directly answer protocol/network distinction |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Podcast wall first |
| 10. Completeness | 10.3 | Persona paths unblocked | FAIL | No clear exits |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Author admits scope unclear |
| 10. Completeness | 10.5 | Self-containment | FAIL | Defers most content to composables |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | None |

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 8 | 3 | 3 | 8/11 |
| 2. Voice | 22 | 9 | 10 | 3 | 9/19 |
| 3. Headings | 10 | 2 | 0 | 8 | 2/2 |
| 4. Structure | 17 | 3 | 13 | 1 | 3/16 |
| 5. Layout | 34 | 9 | 13 | 12 | 9/22 |
| 6. Veracity | 12 | 0 | 10 | 2 | 0/10 |
| 7. Navigation | 11 | 2 | 5 | 4 | 2/7 |
| 8. Links | 6 | 4 | 1 | 1 | 4/5 |
| 9. Process | 6 | 0 | 6 | 0 | 0/6 |
| 10. Completeness | 6 | 0 | 6 | 0 | 0/6 |

**Overall**: 37/104 applicable checks passed (~36%)
**Verdict**: REWRITE REQUIRED

## Critical Issues

1. **CRITICAL** — `<Danger>SIMPLIFY & POINT TO PAGES</Danger>` author directive shipped in body (line 105). Page admits its scope is unresolved.
2. **CRITICAL** — 100-line podcast Accordion summary leads the page with unverified numerical claims (`$250B`, `40% returns`, `3M minutes/week`, `10x to 100x`) and US spellings imported wholesale from transcript.
3. **HIGH** — Over 50% of file is commented-out scratch (lines 125–271).
4. **HIGH** — Page is an orphan, not in docs.json.
5. **HIGH** — Two Tabs share `icon="cube"` — visually ambiguous.
6. **HIGH** — Missing `veracityStatus`, no Related Pages footer, no cross-tab graduation.

## Cross-Page Duplication Notes

- The Tip + DePIN intro paragraph is identical to `concepts1/core-concepts.mdx`.
- Tabs render composables `Overview/Protocol/Network/Actors` from `/snippets/composables/pages/about/concepts/` — these composables overlap conceptually with `concepts2/livepeer-overview.mdx`, `concepts0/about-livepeer-all.mdx`, and `concepts/livepeer-stack.mdx`.
- The commented-out scratch (lines 125–271) is the body of `concepts2/livepeer-overview.mdx` near-verbatim.
- The Accordion summary content overlaps with podcast-derived material in `concepts1/livepeer-capabilities.mdx`.

## Recommendation

Delete or move to `_workspace/drafts/`. Author already declared the page should be simplified. Canonical concept-tier pages now live in `concepts/`. If the Tabs+composables pattern is the intended end state, that pattern belongs on `concepts/livepeer-stack.mdx` (the canonical lane) — not in a draft folder.
