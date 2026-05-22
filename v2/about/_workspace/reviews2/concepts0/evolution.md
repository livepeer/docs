# Review: evolution.mdx (concepts0)

**Page**: `v2/about/concepts0/evolution.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (10 categories, ~135 checks)

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Protocol Evolution" | PASS | |
| sidebarTitle | Yes | "Evolution" | PASS | |
| description | Yes | "Livepeer's four protocol versions: Whitepaper, Streamflow, Confluence, and Cascade." | PASS | Subject-first, under 160 chars. |
| pageType | Yes | concept | PASS | |
| audience | Yes | community | PASS | |
| purpose | Yes | explain | PASS | |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | No | -- | FAIL | Field MISSING entirely. |
| OG image | No | -- | FAIL | Block MISSING entirely. |
| veracityStatus | No | -- | FAIL | Missing. |
| lastVerified | Yes | 2026-05-02 | INFO | Most recent of the set. |

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing keywords, OG image block, veracityStatus. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | |
| 1. Frontmatter | 1.5 | audience 7-token | PASS | |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.11 | description well-formed | PASS | |
| 1. Frontmatter | 1.12 | OG image complete | FAIL | Entirely missing. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Field absent. |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Zero banned words | PASS | |
| 2. Voice | 2.3 | Zero banned phrases | PASS | |
| 2. Voice | 2.4 | Zero banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order correct | PASS | "The Livepeer protocol has gone through four named phases..." — direct subject. |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Tight one-sentence facts. |
| 2. Voice | 2.7 | Audience register | PASS | Community-appropriate. |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value statements | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | No em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | Description not self-referential | PASS | |
| 2. Voice | 2.16 | Deprecated terms absent | PASS | "Transcoder" used in V1 historical context only — acceptable. |
| 2. Voice | 2.17 | Universal terms consistent | PASS | |
| 2. Voice | 2.18 | Spell check | PASS | |
| 2. Voice | 2.19 | Terms match canonical | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "Truebit", "Active Set", "probabilistic micropayments", "L1-L2 Bridge" undefined; "Arbitrum One" used without inline link. |
| 3. Headings | 3.1 | Heading score >=20/25 | INFO | "Evolution Diagram" (16/25 — generic structural label), "Key Changes by Version" (22/25, strong). |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Protocol Evolution" — 2 words, concept-derived. |
| 3. Headings | 3.7 | Expert editorial choice | PASS | |
| 3. Headings | 3.8 | Per-pageType naming | PASS | |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | |
| 4. Structure | 4.1 | One purpose, one job | PASS | Single job: orient reader on 4 protocol phases. |
| 4. Structure | 4.2 | Purpose statement test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | concepts0 not in nav. |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages or Next Step CTA. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | INFO | Implicitly bounded to protocol phases. |
| 4. Structure | 4.7 | Info type per section | PASS | Change/historical (factual). |
| 4. Structure | 4.8 | No content duplication | INFO | Some overlap with concepts/about-livepeer.mdx evolution mention; this page is the dedicated treatment. |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab links. |
| 4. Structure | 4.11 | Discord test | INFO | Could pass — comprehensive on its single topic. Lacks "what next" exit. |
| 4. Structure | 4.12 | Page size appropriate | INFO | ~6KB (small but information-dense). |
| 4. Structure | 4.13 | No TODO/REVIEW | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs present | INFO | Mentions limits per version (gas costs capped V1 at 10-15) — implicit trade-offs. |
| 4. Structure | 4.16 | Content pass context | PASS | |
| 5. Layout | 5.1 | Correct template | PASS | Concept template. |
| 5. Layout | 5.2 | Required sections | PASS | |
| 5. Layout | 5.3 | Only approved components | INFO | DynamicTableV2, ScrollableDiagram, Update — Update component verify catalog. |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info type → component | PASS | Change-history → Mermaid + Update + Comparison Table. |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | |
| 5. Layout | 5.8 | CSS custom properties only | INFO | Mermaid uses hardcoded hex colours (acceptable per check 5.27 if from MermaidColours.jsx). |
| 5. Layout | 5.9 | Generated file banners | N/A | |
| 5. Layout | 5.10 | Component imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | PASS | |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | N/A | |
| 5. Layout | 5.15 | Data imports not hardcoded | FAIL | Version data hardcoded in JSX rather than imported from a data file. |
| 5. Layout | 5.16 | Related Pages footer | FAIL | None. |
| 5. Layout | 5.17 | Related Pages format | N/A | |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | INFO | Mermaid block in ScrollableDiagram has title prop. |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Navigation cards | N/A | |
| 5. Layout | 5.23 | Tables use StyledTable | INFO | DynamicTableV2 used — verify catalog acceptance. |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One. |
| 5. Layout | 5.25 | Max 1 major layout element | INFO | Mermaid + Table + 4× Update — borderline. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | None present. |
| 5. Layout | 5.27 | Mermaid governed colours | INFO | Hardcoded hex (`#18794E`, `#3CB540`) — verify against `snippets/components/config/MermaidColours.jsx`. |
| 5. Layout | 5.28 | Import section ordering | INFO | Two imports, no comment headers but trivial. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Dates ("April 2017", "December 2018", "2022", "2024"), "100x gas reduction", "10-15 transcoders" cap — none flagged for verification. |
| 5. Layout | 5.31 | Decision-critical visible | PASS | Comparison table visible. |
| 5. Layout | 5.32 | Reference tables at end | PASS | |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | concepts0 = alternative drafts. |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Every claim citable | FAIL | Phase dates and gas-cost reduction claims unsourced. |
| 6. Veracity | 6.4 | Numbers are real | FAIL | "10-15 transcoders" (V1 cap), "100x" gas reduction — need citation to LIPs / blog. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing field. |
| 6. Veracity | 6.8 | Source staleness | INFO | Cascade dated 2024 — stable. |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No citations to whitepaper, LIPs, or release notes. |
| 7. Navigation | 7.1 | Page in docs.json | FAIL | concepts0 not in nav. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Zero links. |
| 7. Navigation | 7.7 | File in correct lane | FAIL | |
| 7. Navigation | 7.8 | File naming | PASS | |
| 8. Links | 8.1 | Internal links resolve | N/A | None present. |
| 8. Links | 8.2 | External links live | N/A | None. |
| 8. Links | 8.5 | Page renders | PASS | |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Process | 9.1-9.5 | -- | FAIL | No sign-off etc. |
| 10. Completeness | 10.1 | Every question has a page | PASS | "What were the protocol phases?" answered cleanly. |
| 10. Completeness | 10.2 | Zero-to-hero journey | INFO | Self-contained but no exit ramp. |
| 10. Completeness | 10.3 | Persona paths unblocked | FAIL | No links to next step. |
| 10. Completeness | 10.4 | Scope boundaries | INFO | |
| 10. Completeness | 10.5 | Self-containment | PASS | |

## Summary

**Verdict**: NEEDS WORK — strong, focused, well-structured content; cleanest of the concepts0 set in voice and structure. Blocked primarily by missing frontmatter fields, missing Related Pages, and lack of citations.

**Critical issues**:
1. Frontmatter missing: `keywords`, OG image block, `veracityStatus`.
2. Phase dates and "100x gas reduction" claim need T1 citations (LIPs, releases).
3. No Related Pages footer or Next Step CTA — dead end.
4. Zero cross-tab links.
5. "Truebit", "Active Set", "probabilistic micropayments" used without first-use definition or link.

**Strengths**:
- Strong Mermaid diagram with version characteristics.
- Clean comparison table with 8 dimensions.
- Update component used effectively for changelog-style entries.
- Concise, factual register.
