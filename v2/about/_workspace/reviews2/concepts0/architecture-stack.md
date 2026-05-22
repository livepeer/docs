# Review: architecture-stack.mdx (concepts0)

**Page**: `v2/about/concepts0/architecture-stack.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (10 categories, ~135 checks)

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Livepeer Open Infrastructure Stack" | PASS | |
| sidebarTitle | Yes | "Architecture" | PASS | |
| description | Yes | "A high-level introduction to the Livepeer open, on-demand AI & Media infrastructure substrate and the distributed crypto-primitive coordination system." | PASS | |
| pageType | Yes | concept | PASS | |
| audience | Yes | general | FAIL | DEPRECATED — should be `community`. |
| purpose | Yes | concept | FAIL | DEPRECATED ALIAS — should be `explain`. |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | livepeer, about, core concepts, mental model, introduction, key, architecture | FAIL | "key" is not a meaningful keyword; mostly generic. |
| OG image | Yes | Complete (uses fallback.png) | INFO | Uses fallback rather than tab-specific OG. |
| veracityStatus | No | -- | FAIL | Missing. |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing veracityStatus; `audience: general` (deprecated); `purpose: concept` (deprecated alias). |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `concept` is deprecated alias of `explain`. |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `general` is deprecated. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | "key" is not a keyword. |
| 1. Frontmatter | other | -- | PASS | All other fields valid. |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "optimised", "incentivised" all UK. |
| 2. Voice | 2.2 | Zero banned words | PASS | |
| 2. Voice | 2.3 | Zero banned phrases | PASS | |
| 2. Voice | 2.4 | Zero banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order correct | PASS | Opens with definition Quote. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | INFO | Cannot fully assess — audience is deprecated `general`. Register reads as community-leaning. |
| 2. Voice | 2.8 | Per-audience prohibited | N/A | |
| 2. Voice | 2.9 | No passive value statements | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | FAIL | "Broadcasters / application operators" line 328 — "Broadcasters" is deprecated. |
| 2. Voice | 2.12 | No em-dashes | PASS | None found. |
| 2. Voice | 2.13 | Entity-led voice | PASS | |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | Description not self-referential | PASS | |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcasters" (line 328); "incentivizes" (US spelling, line 281, 248) — mixed UK/US. |
| 2. Voice | 2.17 | Universal terms consistent | PASS | Mostly. |
| 2. Voice | 2.18 | Spell check | FAIL | "incentivizes" (US, line 248, 281), "monetization" (US, line 50 commented), "mergin" typo line 498 (`mergin="medium"` should be `margin`). |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | Broadcaster non-canonical. |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "BYOC", "NaaP", "ComfyUI", "ComfyStream", "pymthouse", "Trickle protocol", "Active Set" — used without inline definition or link to glossary in some cases. |
| 2. Voice | 2.22 | Terminology lock | N/A | |
| 3. Headings | 3.1 | Heading score >=20/25 | INFO | "Livepeer Infrastructure Layers" (20/25), "Infrastructure Layers" (h3 duplicates parent — 14/25), "Livepeer as an OSI-Like Stack" (22/25, strong), "Network & Protocol Stack" (20/25), "Platform and Application Stack" (18/25), "Middleware & Integrations" (22/25), "Related pages" (exempt). Layer titles are descriptive (Layer 1: Physical Compute & Resource Layer = 22/25). |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | |
| 3. Headings | 3.7 | Expert editorial choice | PASS | OSI mapping is editorial choice. |
| 3. Headings | 3.8 | Per-pageType naming | PASS | |
| 3. Headings | 3.9 | Per-audience register | INFO | |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | |
| 4. Structure | 4.1 | One purpose, one job | PASS | Job: explain Livepeer architecture as OSI-like stack. |
| 4. Structure | 4.2 | Purpose statement test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | concepts0 not in published nav. |
| 4. Structure | 4.4 | No dead ends | PASS | Related pages CardGroup. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Boundary unclear. |
| 4. Structure | 4.7 | Info type per section | PASS | Conceptual + structural. |
| 4. Structure | 4.8 | No content duplication | FAIL | Heavy overlap with concepts/livepeer-stack.mdx (canonical version of same content) AND concepts0/livepeer-architecture.mdx (near-identical sibling). |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | Cross-tab links | PASS | Related Pages → developers + solutions. |
| 4. Structure | 4.11 | Discord test | PASS | Self-contained explanation. |
| 4. Structure | 4.12 | Page size appropriate | PASS | ~17KB. |
| 4. Structure | 4.13 | No TODO/REVIEW | FAIL | "image would be good" comment line 41; multiple commented blocks throughout. |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs present | INFO | OSI mapping caveat ("doesn't map perfectly") present line 139. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Audience deprecated value. |
| 4. Structure | 4.17 | Multi-audience handoff | N/A | Single audience. |
| 5. Layout | 5.1 | Correct template | PASS | Concept template. |
| 5. Layout | 5.2 | Required sections | PASS | |
| 5. Layout | 5.3 | Only approved components | INFO | QuadGrid, BorderedBox, BadgeWrapper, AccordionLayout, StyledTable, StyledSteps, ScrollableDiagram — verify against catalog. |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info type → component | PASS | Layered concept rendered as Accordions per layer (good for depth). |
| 5. Layout | 5.6 | MDX renders clean | INFO | Likely renders; `mergin` typo at line 498 is invalid prop name. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept`. |
| 5. Layout | 5.8 | CSS custom properties only | PASS | Uses var(--accent), var(--lp-spacing-6). |
| 5. Layout | 5.9 | Generated file banners | N/A | |
| 5. Layout | 5.10 | Component naming/import | PASS | |
| 5. Layout | 5.11 | Gold-standard template | PASS | |
| 5. Layout | 5.12 | Section blocks from library | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout rules | PASS | Single dimension (layer) → AccordionGroup OK. |
| 5. Layout | 5.15 | Data imports not hardcoded | PASS | layerBadges imported from `../data/badges.jsx`. |
| 5. Layout | 5.16 | Related Pages footer | PASS | |
| 5. Layout | 5.17 | Related Pages format | INFO | Uses `<CardGroup cols={2}>` with horizontal arrow Cards but plain `title="..."` not CustomCardTitle. |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | FAIL | Many Accordions (Layer 1-10) lack `icon` prop on the outer Accordion (uses description block instead). The "More on Crypto-Primitive Advantages" Accordion line 54 has icon. |
| 5. Layout | 5.20 | Code block metadata | N/A | |
| 5. Layout | 5.21 | StyledSteps used | PASS | |
| 5. Layout | 5.22 | Navigation cards | INFO | |
| 5. Layout | 5.23 | Tables use StyledTable | PASS | |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | StyledTable + StyledSteps + 10× Accordion + QuadGrid + ScrollableDiagram — many major elements. |
| 5. Layout | 5.26 | CustomDivider placement | INFO | One after Quote opening, one before Related (mostly OK). |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | |
| 5. Layout | 5.28 | Import section ordering | INFO | Imports grouped at top but no comment headers. |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Claims about Trickle protocol, pymthouse, NaaP routing, "10x cheaper" not flagged for verification. |
| 5. Layout | 5.31 | Decision-critical visible | FAIL | Layer details all hidden behind Accordions. |
| 5. Layout | 5.32 | Reference tables at end | PASS | Middleware table at end. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | concepts0/ is alternative-draft area. |
| 5. Layout | 5.34 | No inline styles | PASS | Uses CSS variables. |
| 6. Veracity | 6.1 | Every claim citable | FAIL | OSI mapping is interpretive; pymthouse, NaaP, ComfyStream attributions need source links. |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing. |
| 6. Veracity | 6.8 | Source staleness | INFO | OSI model citation static. |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | INFO | Wikipedia link to OSI model (T3); GitHub repos cited. |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | concepts0 not in nav. |
| 7. Navigation | 7.6 | Cross-tab graduation | PASS | Related → developers + solutions. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | Draft state. |
| 7. Navigation | 7.8 | File naming | PASS | |
| 8. Links | 8.1 | Internal links resolve | INFO | `../solutions/portal` (line 363) — relative path may break; `/v2/home/solutions/showcase` (lines 389, 409) needs verification. |
| 8. Links | 8.2 | External links live | INFO | Wikipedia, github.com/livepeer/* — likely live. |
| 8. Links | 8.5 | Page renders | INFO | `mergin="medium"` invalid prop won't break render but signals incompleteness. |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Process | 9.1-9.5 | -- | FAIL | No sign-off / registry / gates. |
| 10. Completeness | 10.1 | Every question has a page | PASS | |
| 10. Completeness | 10.2 | Zero-to-hero journey | PASS | OSI metaphor scaffolds the journey. |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | |

## Summary

**Verdict**: NEEDS WORK — strong content (OSI metaphor is editorial gold), but blocked by deprecated frontmatter and direct duplication with concepts0/livepeer-architecture.mdx and concepts/livepeer-stack.mdx.

**Critical issues**:
1. Frontmatter uses deprecated `audience: general` and `purpose: concept` — block ship.
2. Missing veracityStatus.
3. `mergin="medium"` typo line 498 (should be `margin`).
4. "Broadcasters" used as deprecated synonym line 328.
5. US spellings ("incentivizes", "monetization") mixed with UK throughout.
6. Near-total duplication with concepts0/livepeer-architecture.mdx (sibling file with same title `Livepeer Open Infrastructure Stack`).
7. Layer Accordions missing `icon` prop (check 5.19).
8. Decision-critical layer info hidden inside Accordions (check 5.31).
