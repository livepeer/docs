# Review: livepeer-principles.mdx (concepts0)

**Page**: `v2/about/concepts0/livepeer-principles.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (10 categories, ~135 checks)

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Livepeer Guiding Principles" | PASS | |
| sidebarTitle | Yes | "About Livepeer" | FAIL | DUPLICATES sidebarTitle of concepts0/about-livepeer-all.mdx ("About Livepeer"). |
| description | Yes | "A high-level introduction to the key concepts and terminology of the Livepeer Real-time AI & Video Network" | FAIL | Description does not match title (Guiding Principles vs intro to concepts). |
| pageType | Yes | concept | PASS | |
| audience | Yes | general | FAIL | DEPRECATED. |
| purpose | Yes | concept | FAIL | DEPRECATED ALIAS. |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | livepeer, about, core concepts, livepeer core concepts, introduction, key terms, architecture | FAIL | Generic + duplicates ("core concepts" twice as one phrase and as standalone). |
| OG image | Yes | fallback.png | INFO | Fallback. |
| veracityStatus | No | -- | FAIL | Missing. |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing veracityStatus; deprecated audience/purpose; description-title mismatch. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `concept` deprecated. |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `general` deprecated. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Mismatched scope vs title. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic + redundant. |
| 2. Voice | 2.1 | UK English | FAIL | "Decentralizing Video Streaming" (Accordion title line 36); "centralized" (lines 40, 56), "decentralized" (line 39, 87), "monetization" (line 50), "incentivizes" (line 62), "data center" (line 73), "monetized" (line 79), "monetization" (line 80) — all in commented YouTube summary. Body uses "decentralised". |
| 2. Voice | 2.2 | Zero banned words | PASS | |
| 2. Voice | 2.3 | Zero banned phrases | PASS | |
| 2. Voice | 2.4 | Zero banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order correct | INFO | Opens with YouTubeVideo + Accordion summary then a single sentence. |
| 2. Voice | 2.6 | Paragraph discipline | INFO | Body content is very thin (~10 lines of actual prose). |
| 2. Voice | 2.7 | Audience register | INFO | Audience deprecated. |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | No em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | |
| 2. Voice | 2.17 | Universal terms consistent | PASS | |
| 2. Voice | 2.18 | Spell check | FAIL | "Livpeer's" line 93 ("Livpeer's core mission..."). |
| 2. Voice | 2.19 | Terms match canonical | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "LPT", "Orchestrators/Transcoders" used in mermaid without inline definition. |
| 3. Headings | 3.1 | Heading score >=20/25 | INFO | "Livepeer Mission" (18/25 — generic but acceptable). Only one H2 in body. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | |
| 3. Headings | 3.7 | Expert editorial choice | INFO | Title says "Guiding Principles" but body delivers "Mission". Mismatch. |
| 3. Headings | 3.8 | Per-pageType naming | PASS | |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | |
| 4. Structure | 4.1 | One purpose, one job | FAIL | Title promises "Guiding Principles" — body delivers Mission diagram and YouTube summary. Doesn't match its own promise. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Cannot say "Lets community understand Livepeer's guiding principles" because the page does not enumerate principles. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | concepts0 not in nav. |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages or Next CTA. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | |
| 4. Structure | 4.7 | Info type per section | FAIL | YouTube summary (narrative) + factor list (factual) + Mission Mermaid (structural) — under one H2. |
| 4. Structure | 4.8 | No content duplication | FAIL | The "Decentralizing Video Streaming for the Future of AI" Accordion is verbatim copy of same Accordion in concepts0/about-livepeer.mdx and concepts0/livepeer-protocol-and-network.mdx. |
| 4. Structure | 4.9 | Section orientation | FAIL | |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero. |
| 4. Structure | 4.11 | Discord test | FAIL | Page promises principles, delivers a thin mission statement and one diagram. |
| 4. Structure | 4.12 | Page size appropriate | FAIL | ~7KB but 80% is the YouTube summary Accordion + Mermaid; actual prose ~5 lines. |
| 4. Structure | 4.13 | No TODO/REVIEW | FAIL | Massive commented "Case for Decentralisation" block lines 161-193. |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs present | FAIL | |
| 4. Structure | 4.16 | Content pass context | FAIL | Audience deprecated + scope mismatch. |
| 5. Layout | 5.1 | Correct template | FAIL | Concept template requires Overview + Explanation + Comparison + Accordion + Related. Only Accordion + Mermaid present. |
| 5. Layout | 5.2 | Required sections | FAIL | No Related; no Explanation. |
| 5. Layout | 5.3 | Only approved components | INFO | YouTubeVideo, Accordion, ScrollableDiagram, Quote, FrameQuote (imported, unused), QuadGrid (imported, unused). |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info type → component | INFO | Conceptual content largely absent. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | audience: general; purpose: concept. |
| 5. Layout | 5.10 | Component imports | FAIL | 7 imports; CenteredContainer, BorderedBox, QuadGrid, FrameQuote unused. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | |
| 5. Layout | 5.12 | Section blocks | FAIL | |
| 5. Layout | 5.13 | Section ordering | FAIL | No closure. |
| 5. Layout | 5.14 | Multi-view layout | N/A | |
| 5. Layout | 5.15 | Data imports not hardcoded | INFO | |
| 5. Layout | 5.16 | Related Pages footer | FAIL | None. |
| 5. Layout | 5.17 | Related Pages format | N/A | |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | PASS | YouTube summary Accordion has icon="video". |
| 5. Layout | 5.20 | Code block metadata | N/A | |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | INFO | YouTubeVideo + Accordion + ScrollableDiagram. |
| 5. Layout | 5.26 | CustomDivider placement | INFO | Two dividers; placement loose. |
| 5. Layout | 5.27 | Mermaid governed colours | INFO | Custom hex colours `#ffffff`, `#d9d9d9`, `#2f2f2f` — verify against MermaidColours.jsx. |
| 5. Layout | 5.28 | Import section ordering | INFO | |
| 5. Layout | 5.30 | Fact-check flags | FAIL | YouTube summary contains many fact claims ("$250B market", "40% returns", "3M minutes weekly") in body-rendered Accordion — none flagged. |
| 5. Layout | 5.31 | Decision-critical visible | INFO | |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | concepts0 = drafts. |
| 5. Layout | 5.34 | No inline styles | INFO | Inline `style={{margin: "2rem 0"}}` on CustomDivider (line 100). |
| 6. Veracity | 6.1 | Every claim citable | FAIL | YouTube summary numbers unsourced. |
| 6. Veracity | 6.4 | Numbers are real | FAIL | "$250B", "40%", "3M minutes weekly", "10x lower", "10-100x usage" — all from YouTube paraphrase. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | |
| 6. Veracity | 6.10 | Source authority | INFO | YouTube video (T2/T3 — secondary). |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | |
| 7. Navigation | 7.7 | File in correct lane | FAIL | |
| 8. Links | 8.1 | Internal links resolve | N/A | None present. |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | PASS | |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Process | 9.1-9.5 | -- | FAIL | |
| 10. Completeness | 10.1 | Every question has a page | FAIL | "What are Livepeer's principles?" not really answered. |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | |

## Summary

**Verdict**: REWRITE REQUIRED — title-vs-content mismatch is fundamental. Page is titled "Guiding Principles" but delivers mission statement + YouTube summary + Mermaid. Concepts/core-principles.mdx is the canonical version; this is a stale alternative.

**Critical issues**:
1. Title "Guiding Principles" not delivered by body — page should be titled "Livepeer Mission" or rebuilt to enumerate principles.
2. sidebarTitle "About Livepeer" duplicates concepts0/about-livepeer-all.mdx and concepts0/about-livepeer.mdx.
3. Frontmatter deprecated values (`audience: general`, `purpose: concept`).
4. Description does not match title.
5. "Livpeer's" typo line 93.
6. Verbatim duplication of "Decentralizing Video Streaming" Accordion with concepts0/about-livepeer.mdx and concepts0/livepeer-protocol-and-network.mdx.
7. 4 imports (CenteredContainer, BorderedBox, QuadGrid, FrameQuote) declared but unused.
8. No Related Pages, no closure, body prose is ~5 lines.
