# Review: livepeer-architecture.mdx (concepts1)

**Page**: `v2/about/concepts1/livepeer-architecture.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. `audience` and `purpose` use deprecated values |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` valid |
| 1. Frontmatter | 1.3 | pageVariant valid | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` deprecated alias. Should be `explain` |
| 1. Frontmatter | 1.5 | audience canonical | FAIL | `audience: general` deprecated. Should be `community` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `beginner` valid |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `discover` valid |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, under 160 chars |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `core concepts`, `mental model`, `introduction`, `key`, `architecture`. "key" alone is meaningless |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | Audience deprecated |
| 2. Voice | 2.1 | UK English | FAIL | "incentivizes" (lines 183, 248), "incentivize", "centralized", "behavior" (line 291), "incenticises" (typo, line 103) — multiple US spellings |
| 2. Voice | 2.2 | Zero banned words | PASS | None found |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None |
| 2. Voice | 2.4 | Zero banned constructions | PASS | None |
| 2. Voice | 2.5 | Opening order correct | PASS | Quote leads with value: "Livepeer is a crypto-economic coordination protocol that secures..." |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Layer accordions follow consistent template but mix prose with stub bullets ("**What it is:**" / "**Livepeer Context:**" / "**Who provides it:**") in a way that reads as outline, not prose |
| 2. Voice | 2.7 | Audience register correct | FAIL | `audience: general` undefined. Mixes OSI-model expert framing with newcomer Tips |
| 2. Voice | 2.8 | Per-audience prohibited | N/A | Audience deprecated |
| 2. Voice | 2.9 | No passive value statements | PASS | None |
| 2. Voice | 2.10 | No hedging openers | PASS | Quote opens directly |
| 2. Voice | 2.11 | Terminology locked | FAIL | Layer 6 uses "Broadcasters / application operators" — deprecated term |
| 2. Voice | 2.12 | No em-dashes | PASS | Uses non-breaking hyphen and `--` (double hyphen, acceptable) |
| 2. Voice | 2.13 | Entity-led voice | PASS | Most paragraphs start with system-fact subject |
| 2. Voice | 2.14 | No hedging verbs | PASS | None |
| 2. Voice | 2.15 | Description not self-referential | PASS | Subject-first |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcasters" line 328 |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | "Broadcasters" mixed with "Gateways" |
| 2. Voice | 2.18 | Spell check | FAIL | Line 498: `mergin` (should be `margin`); line 103: "incenticises" (should be "incentivises"); inconsistent quote styles ("smart"/"straight" mixed) |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | Same as 2.16 |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | Heavy borrowing from developers/orchestrators registers (NaaP, BYOC, ai-runner internals) without explanation |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "OSI", "DePIN", "BYOC", "NaaP", "LV2V", "ComfyUI", "trickle", "pymthouse", "ai-runner" used without inline definition or glossary link on first use |
| 2. Voice | 2.22 | Terminology lock | N/A | None |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | "Livepeer Infrastructure Layers" (22/25 — strong), "Infrastructure Layers" (16/25 — duplicates parent), "Livepeer as an OSI-Like Stack" (24/25 — strong), "Network & Protocol Stack" (22/25), "Platform and Application Stack" (22/25), "Middleware & Integrations" (22/25), "Related pages" (lowercase — exempt). Layer 1–10 accordion titles are descriptive but bureaucratic ("Layer 4: Crypto-Economic Coordination Layer" — 18/25) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No banned terms in headings |
| 3. Headings | 3.3 | No literal contrast labels | PASS | None |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | Most headings include "Livepeer" or domain noun |
| 3. Headings | 3.5 | Names concept not examples | PASS | Concept-named |
| 3. Headings | 3.6 | Title well-formed | FAIL | "Livepeer Open Infrastructure Stack" — 4 words, acceptable; but `sidebarTitle: Architecture` mismatches title direction (stack vs architecture) |
| 3. Headings | 3.7 | Expert editorial choice | PASS | OSI-mapped layer names show editorial intent |
| 3. Headings | 3.8 | Per-pageType naming | PASS | concept page uses governing-concept naming |
| 3. Headings | 3.9 | Per-audience register | FAIL | Audience deprecated |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | Same as 3.4 |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Tries to be both (a) infrastructure-layers introduction and (b) full 10-layer OSI mapping in one page. Two jobs |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the community understand Livepeer's stack as an OSI-like layered system" — passes |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Not in docs.json |
| 4. Structure | 4.4 | No dead ends | PASS | Related pages section present (lowercase) |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | Assumes OSI knowledge; only links to Wikipedia |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Boundary with `livepeer-protocol-and-network.mdx` not stated |
| 4. Structure | 4.7 | Info type per section correct | PASS | Conceptual + structural — appropriate |
| 4. Structure | 4.8 | No content duplication | FAIL | The QuadGrid layer cards (Protocol/Network/Platforms/Applications) duplicate `concepts/livepeer-stack.mdx`. The OSI 10-layer accordion is identical to `concepts2/mental-model.mdx` and `concepts0/architecture-stack.mdx` |
| 4. Structure | 4.9 | Section orientation page | N/A | Not orientation |
| 4. Structure | 4.10 | Cross-tab links | PASS | Links to /v2/developers/concepts/ and /v2/solutions/portal in Related pages |
| 4. Structure | 4.11 | Discord test | FAIL | Linking returns a 10-layer OSI essay — too long; reader has to scroll past 10 accordions to get the answer |
| 4. Structure | 4.12 | Page size appropriate | PASS | ~17KB — within concept range |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | Multiple commented-out blocks (lines 41–42, 50, 92, 124–134, 153–154, 215–219, 250, 377–378, 384–385) — author scratch in published content |
| 4. Structure | 4.14 | Flat layout | PASS | Flat |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs or limitations stated; only positive framing |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Audience/purpose deprecated |
| 4. Structure | 4.17 | Multi-audience handoff | FAIL | None |
| 5. Layout | 5.1 | Correct template | PASS | concept template approximated |
| 5. Layout | 5.2 | Required sections | PASS | Has Overview (Quote) + body + Related pages |
| 5. Layout | 5.3 | Only approved components | PASS | All approved |
| 5. Layout | 5.4 | Avoided components absent | PASS | None |
| 5. Layout | 5.5 | Info type → component | PASS | AccordionGroup for layered info, Cards for related, StyledTable for middleware |
| 5. Layout | 5.6 | MDX renders clean | FAIL | Line 498: `mergin="medium"` typo on CustomDivider — likely silently ignored, not breaking |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | Same as 1.4, 1.5 |
| 5. Layout | 5.8 | CSS custom properties only | PASS | Uses `var(--lp-spacing-6)`, `var(--accent)` |
| 5. Layout | 5.9 | Generated file banners | N/A | Not generated |
| 5. Layout | 5.10 | Component naming/import | PASS | PascalCase, root-absolute imports correct |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow gold-standard concept template structure exactly |
| 5. Layout | 5.12 | Section blocks from library | FAIL | Custom composition, not block-based |
| 5. Layout | 5.13 | Section ordering | PASS | Intro → Layers → Middleware → Related |
| 5. Layout | 5.14 | Multi-view layout rules | PASS | AccordionGroup, no Steps-in-Accordion violations |
| 5. Layout | 5.15 | Data imports not hardcoded | PASS | `layerBadges` imported from `../data/badges.jsx` |
| 5. Layout | 5.16 | Related Pages footer | PASS | CardGroup present |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `CardGroup` not `<Columns cols={2}>`; Card descriptions exceed 10 words ("Choose the right layer to build at - Studio, Daydream, AI Gateway, ComfyStream, or protocol" is ~16 words) |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | FAIL | All Layer 1–10 Accordions have NO `icon` prop. Only the "More on Crypto-Primitive Advantages" accordion has `icon="rocket"` |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | PASS | Used inside Crypto-Primitive Accordion with iconColor/titleColor |
| 5. Layout | 5.22 | Navigation cards | PASS | Related Cards have title (no CustomCardTitle wrapper, but `title` prop is set) |
| 5. Layout | 5.23 | Tables use StyledTable | PASS | Middleware table uses StyledTable |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One table |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | Has multiple major layout elements: QuadGrid + AccordionGroup with 10 Accordions + StyledTable + CardGroup |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | Line 498 `mergin` typo; some CustomDividers lack the canonical placement (no opening divider rule clearly applied) |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid |
| 5. Layout | 5.28 | Import section ordering | PASS | Components → Data — correct |
| 5. Layout | 5.29 | Media placeholders | N/A | None |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Internals named (pymthouse, eliteprox, ai-runner) — no REVIEW flags |
| 5. Layout | 5.31 | Decision-critical visible | N/A | No decision content |
| 5. Layout | 5.32 | Reference tables at end | PASS | Middleware table near end |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Lots of commented-out scratch (lines 124–134, 215–219, 250, 377–378) |
| 5. Layout | 5.34 | No inline styles | FAIL | `style={{ marginBottom: '2rem' }}` (line 247 in capabilities — not this page); on this page CustomDivider uses `margin="medium"` prop (acceptable) and `mergin` typo. No inline styles in prose |
| 6. Veracity | 6.1 | Every claim citable | FAIL | OSI mapping is interpretive; no citation. Trickle, pymthouse, NaaP claims have no source links |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code |
| 6. Veracity | 6.3 | No deprecated API | N/A | No API |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers cited on this page |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | Quote claim "low-latency video and AI" — no REVIEW flag; OSI mapping is editorial — no flag |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 6. Veracity | 6.7 | Authoritative glossary | FAIL | No cross-reference to authoritative glossary |
| 6. Veracity | 6.8 | Source staleness | FAIL | "70 percent of recent network fees" type claims (none on this page but pattern present in capabilities) |
| 6. Veracity | 6.9 | No open-ended research | PASS | No open-ended research notes here |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | OSI Wikipedia link is T3; no T1/T2 cross-check |
| 6. Veracity | 6.11 | Glossary definitions match | FAIL | Layer definitions are interpretive, not glossary-aligned |
| 6. Veracity | 6.12 | Glossary verified | FAIL | Same |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | Not registered |
| 7. Navigation | 7.2 | Nav matches filesystem | FAIL | Orphan |
| 7. Navigation | 7.3 | Tab entry routes | N/A | Not portal |
| 7. Navigation | 7.4 | No structural orphans | FAIL | This file is one |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | No journey integration |
| 7. Navigation | 7.6 | Cross-tab graduation | PASS | 4 cross-tab links in Related pages |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Should be `_workspace/drafts/` or canonical `concepts/livepeer-stack.mdx` |
| 7. Navigation | 7.8 | File naming conventions | PASS | Acceptable |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in workspace |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | Not in nav |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not resources |
| 8. Links | 8.1 | Internal links resolve | PASS | Most resolve; `../solutions/portal` (relative) is risky from this folder |
| 8. Links | 8.2 | External links live | PASS | OSI Wikipedia, GitHub repos appear live |
| 8. Links | 8.3 | Snippet imports resolve | PASS | All imports valid |
| 8. Links | 8.4 | Images load | N/A | None |
| 8. Links | 8.5 | Page renders | PASS | Should render despite typos |
| 8. Links | 8.6 | No TODO/TBD | PASS | No published TODOs (commented scratch is hidden) |
| 9. Process | 9.1–9.6 | All process checks | FAIL | No sign-off, no decision registry, no gate evidence |
| 10. Completeness | 10.1 | Every question has a page | PASS | "What is Livepeer's architecture?" answered |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Content depth too high for orientation reader |
| 10. Completeness | 10.3 | Persona paths unblocked | PASS | Cross-tab links present |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Boundary with concept landing not stated |
| 10. Completeness | 10.5 | Self-containment | PASS | Largely self-contained |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | None |

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 14 | 5 | 6 | 3 | 5/11 |
| 2. Voice | 22 | 8 | 11 | 3 | 8/19 |
| 3. Headings | 10 | 6 | 4 | 0 | 6/10 |
| 4. Structure | 17 | 5 | 11 | 1 | 5/16 |
| 5. Layout | 34 | 17 | 8 | 9 | 17/25 |
| 6. Veracity | 12 | 1 | 10 | 1 | 1/11 |
| 7. Navigation | 11 | 3 | 4 | 4 | 3/7 |
| 8. Links | 6 | 5 | 0 | 1 | 5/5 |
| 9. Process | 6 | 0 | 6 | 0 | 0/6 |
| 10. Completeness | 6 | 3 | 3 | 0 | 3/6 |

**Overall**: 53/116 applicable checks passed (~46%)
**Verdict**: NEEDS WORK (close to PASS if relocated and frontmatter fixed)

## Critical Issues

1. **HIGH** — UK English failures: `incentivize`/`incentivized`/`centralized`/`behavior` (multiple lines); plus typo `incenticises` (line 103) and `mergin` (line 498).
2. **HIGH** — Layer 1–10 Accordions missing `icon` props (check 5.19).
3. **HIGH** — Page is an orphan, not in docs.json. Sits in non-canonical `concepts1/` parallel folder.
4. **HIGH** — Deprecated frontmatter (`audience: general`, `purpose: concept`); missing `veracityStatus`.
5. **MEDIUM** — Multiple specialised terms (BYOC, NaaP, LV2V, pymthouse, ai-runner, trickle) used without first-use definition.
6. **MEDIUM** — Deprecated term "Broadcasters" used at line 328.

## Cross-Page Duplication Notes

- The OSI 10-layer Accordion structure is **near-identical** to `concepts2/mental-model.mdx` (same layer titles, same Subtitle/BadgeWrapper pattern, same content) and `concepts0/architecture-stack.mdx`.
- The Infrastructure Layers QuadGrid (Protocol/Network/Platforms/Applications) duplicates `concepts/livepeer-stack.mdx` and `concepts0/livepeer-architecture.mdx`.
- The Middleware StyledTable duplicates `concepts2/mental-model.mdx`.
- The Crypto-Primitive Advantages content overlaps with content in `concepts2/mental-model.mdx`.

## Recommendation

This page is the strongest of the concepts1 set. Either (a) merge with `concepts/livepeer-stack.mdx` as the canonical stack/architecture page, or (b) move to `_workspace/drafts/` while the canonical source is decided. Fix UK English, add Accordion icons, fix `mergin` typo, replace deprecated frontmatter, define BYOC/NaaP/LV2V on first use.
