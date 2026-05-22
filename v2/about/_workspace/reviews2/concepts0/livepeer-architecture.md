# Review: livepeer-architecture.mdx (concepts0)

**Page**: `v2/about/concepts0/livepeer-architecture.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (10 categories, ~135 checks)

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Livepeer Open Infrastructure Stack" | FAIL | DUPLICATE of `concepts0/architecture-stack.mdx` title (same string). |
| sidebarTitle | Yes | "Architecture Layers" | PASS | |
| description | Yes | "A high-level introduction to the Livepeer open, on-demand AI & Media infrastructure substrate and the distributed crypto-primitive coordination system." | FAIL | DUPLICATE of `concepts0/architecture-stack.mdx` description. |
| pageType | Yes | concept | PASS | |
| audience | Yes | general | FAIL | DEPRECATED. |
| purpose | Yes | concept | FAIL | DEPRECATED ALIAS. |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | livepeer, about, core concepts, mental model, introduction, key, architecture | FAIL | "key" not a keyword; same as architecture-stack.mdx. |
| OG image | Yes | fallback.png | INFO | Uses fallback. |
| veracityStatus | No | -- | FAIL | Missing. |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing veracityStatus; deprecated audience/purpose. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `concept` deprecated. |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `general` deprecated. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic + "key". |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Zero banned words | PASS | |
| 2. Voice | 2.3 | Zero banned phrases | PASS | |
| 2. Voice | 2.4 | Zero banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order correct | PASS | Opens with Quote definition. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | INFO | Audience deprecated. |
| 2. Voice | 2.9 | No passive value statements | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | FAIL | "Gateway (Broadcaster)" line 149 — explicitly invokes deprecated term. |
| 2. Voice | 2.12 | No em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcaster" line 149. |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | Same. |
| 2. Voice | 2.18 | Spell check | PASS | |
| 2. Voice | 2.19 | Terms match canonical | FAIL | Broadcaster non-canonical. |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "LPT", "ETH tickets", "TicketBroker" undefined. |
| 3. Headings | 3.1 | Heading score >=20/25 | INFO | "Livepeer Infrastructure Layers" (20/25), "Infrastructure Layers" (h3 - 14/25 duplicates parent), "Livepeer Protocol and Network Architecture" (h1 inside body — 18/25), "Actors and Roles" (16/25). |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | |
| 3. Headings | 3.7 | Expert editorial choice | INFO | "Actors and Roles" generic. |
| 3. Headings | 3.8 | Per-pageType naming | PASS | |
| 3. Headings | 3.9 | Per-audience register | INFO | |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | |
| Structural | -- | h1 inside body | FAIL | Line 136 uses `# Livepeer Protocol and Network Architecture` — second h1 in body breaks single-H1 rule. |
| 4. Structure | 4.1 | One purpose, one job | FAIL | Conflates "infrastructure layers" + "actor roles" + "protocol/network architecture diagrams" — three jobs. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | concepts0 not in nav. |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages footer. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | |
| 4. Structure | 4.7 | Info type per section | FAIL | Mixes structural/conceptual/factual without clear sectioning. |
| 4. Structure | 4.8 | No content duplication | FAIL | NEAR-DUPLICATE of concepts0/architecture-stack.mdx (same title, same Quote opener, same Infrastructure Layers QuadGrid block). Stripped of layer Accordions and middleware section. Adds three SVG diagrams + actor table that overlap with concepts/livepeer-stack.mdx. |
| 4. Structure | 4.9 | Section orientation | FAIL | |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero. |
| 4. Structure | 4.11 | Discord test | FAIL | Stops abruptly after a third diagram with no closure. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~6KB but appears truncated. |
| 4. Structure | 4.13 | No TODO/REVIEW | FAIL | Commented-out Accordion block (lines 54-91) of "Crypto-Primitive Advantages". |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs present | FAIL | |
| 4. Structure | 4.16 | Content pass context | FAIL | Audience deprecated. |
| 5. Layout | 5.1 | Correct template | FAIL | Truncated; no Related/Next CTA; no proper closure. |
| 5. Layout | 5.2 | Required sections | FAIL | |
| 5. Layout | 5.3 | Only approved components | INFO | QuadGrid, BorderedBox, BadgeWrapper, DynamicTableV2, Image, ScrollableDiagram (imported but used only as Image) — verify catalog. |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info type → component | INFO | Layered concept rendered as 4 BorderedBoxes (good). |
| 5. Layout | 5.6 | MDX renders clean | INFO | Raw markdown table inside MDX (lines 127-132) — should be StyledTable. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | audience: general; purpose: concept. |
| 5. Layout | 5.8 | CSS custom properties only | PASS | |
| 5. Layout | 5.10 | Component imports | INFO | StyledSteps imported (not used); ScrollableDiagram imported (not used). |
| 5. Layout | 5.11 | Gold-standard template | FAIL | |
| 5. Layout | 5.12 | Section blocks from library | FAIL | |
| 5. Layout | 5.13 | Section ordering | FAIL | Page ends with image, no Related. |
| 5. Layout | 5.14 | Multi-view layout | N/A | |
| 5. Layout | 5.15 | Data imports not hardcoded | INFO | layerBadges imported correctly. |
| 5. Layout | 5.16 | Related Pages footer | FAIL | Missing. |
| 5. Layout | 5.17 | Related Pages format | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Raw markdown table (lines 127-132). DynamicTableV2 used elsewhere — check catalog. |
| 5. Layout | 5.24 | Max 1-2 tables | INFO | One markdown + one Dynamic = 2. |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | QuadGrid + DynamicTableV2 + raw table + 3× Image. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | One present after Quote; missing before what would be Related. |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | |
| 5. Layout | 5.28 | Import section ordering | INFO | |
| 5. Layout | 5.29 | Media placeholders | INFO | 3 SVG diagrams referenced — verify all 3 exist. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | "3 main actor roles" framed as definitive without LIP citation. |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Layer info visible without interaction. |
| 5. Layout | 5.32 | Reference tables at end | INFO | Table is mid-page. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | concepts0 = drafts. Truncated state confirms. |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Every claim citable | FAIL | Actor table claims unsourced. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | |
| 6. Veracity | 6.10 | Source authority | FAIL | |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | |
| 7. Navigation | 7.7 | File in correct lane | FAIL | |
| 8. Links | 8.1 | Internal links resolve | N/A | |
| 8. Links | 8.4 | Images load | INFO | 3 SVG paths to verify: livepeer_network_protocol_layperson.svg, livepeer_network_protocol_technical.svg, livepeer_actors_bridge_protocol_network.svg. |
| 8. Links | 8.5 | Page renders | INFO | |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Process | 9.1-9.5 | -- | FAIL | |
| 10. Completeness | 10.1 | Every question has a page | FAIL | Truncates; doesn't close the architecture story. |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | |

## Summary

**Verdict**: REWRITE REQUIRED — content is a truncated/abandoned partial duplicate of architecture-stack.mdx with three additional diagrams and an actor table glued on. No Related, no closure. Best content here (the 3 diagrams + actor table) belongs migrated into the canonical concepts/livepeer-stack.mdx page.

**Critical issues**:
1. Title and description are EXACT duplicates of `concepts0/architecture-stack.mdx`.
2. First 134 lines are near-identical to architecture-stack.mdx.
3. Page ends abruptly after a third image with no closure, no Related, no Next.
4. `# Livepeer Protocol and Network Architecture` line 136 is a second H1 inside the body (Mintlify single-H1 violation).
5. Frontmatter uses deprecated `audience: general` and `purpose: concept`.
6. "Gateway (Broadcaster)" parenthetical reintroduces deprecated term.
7. Raw markdown table (lines 127-132) bypasses StyledTable.
8. Imports for StyledSteps and ScrollableDiagram declared but unused.
