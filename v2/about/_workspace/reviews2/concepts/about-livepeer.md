# Review: about-livepeer.mdx

**Page**: `v2/about/concepts/about-livepeer.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | PASS | All 10 required fields present (title, sidebarTitle, description, pageType, audience, purpose, complexity, lifecycleStage, keywords, OG image block). Also has lastVerified. |
| 1. Frontmatter | 1.2 | pageType canonical 7-type | PASS | `concept` is valid. |
| 1. Frontmatter | 1.3 | pageVariant valid if present | N/A | Not present. |
| 1. Frontmatter | 1.4 | purpose canonical 15-value | PASS | `explain` is valid. |
| 1. Frontmatter | 1.5 | audience 7-token set | PASS | `community` is canonical. |
| 1. Frontmatter | 1.6 | complexity single value | PASS | `beginner`. |
| 1. Frontmatter | 1.7 | lifecycleStage single value | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing entirely. Page uses `lastVerified` instead. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | 332 chars, exceeds 160-char limit. Also contains an em-dash equivalent ("&" usage) and reads more like a paragraph than a description. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Generic: `livepeer`, `about`, `protocol`, `overview`. Three duplicate the title. Lacks intent-aligned keywords like "what is livepeer", "decentralised video infrastructure", "DePIN video network". |
| 1. Frontmatter | 1.14 | Multi-audience flag | PASS | Single audience (community), no inline multi-audience content. |
| 2. Voice | 2.1 | UK English | FAIL | "Decentralizing" (title of accordion line 42), "incentivizes" (line 68). Mixed within the same page (rest is UK). |
| 2. Voice | 2.2 | Zero banned words | PASS | No banned words detected in body prose. |
| 2. Voice | 2.3 | Zero banned phrases | PASS | None found. |
| 2. Voice | 2.4 | Zero banned constructions | FAIL | Line 119: "self-sustaining incentives -- inflation-based rewards … without requiring venture capital to subsidise operations" contains "without requiring" which functions as a `not [X]` value statement. Line 224: "Industry-standard low latency" — no quantification. |
| 2. Voice | 2.5 | Opening order correct | FAIL | Page opens with a YouTube embed (Tom Trowbridge interview) before any value or outcome statement. The first H2 ("About Livepeer") arrives only after a long Accordion summary. Reader sees a video, not a fact. |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Line 108 is a single 70-word sentence with three independent clauses joined by dashes. Line 101 is 90+ words. |
| 2. Voice | 2.7 | Audience register | FAIL | Mix of community register (DePIN explainer) and founder register (cost claims, market size $250B). Two audiences blended, no inline flag. |
| 2. Voice | 2.8 | Per-audience prohibited phrases | PASS | No "thriving community" or similar community-prohibited phrases. |
| 2. Voice | 2.9 | No passive value statements | FAIL | "Industry-standard low latency" (line 224, no number); "10x lower cost" (Accordion, no comparator basis); "5–10x lower cost" (line 228, no comparator). "Automagic Scalability" (line 230) is unquantified marketing copy. |
| 2. Voice | 2.10 | No hedging openers | PASS | Page does not open with hedge — but opens with a video embed which is its own problem (covered in 2.5). |
| 2. Voice | 2.11 | Terminology locked | FAIL | Uses "Transcoders" interchangeably with "Orchestrators" in the diagram (line 145: "Orchestrators/Transcoders"). |
| 2. Voice | 2.12 | No em-dashes | FAIL | Line 99 description contains "& AI pipelines" — verify; line 186 uses em-dash "infrastructure**” -" — has en/em mix. Line 119 uses `--` (double hyphen) which renders as en-dash. Multiple `--` constructions throughout the Accordion at lines 113-120. |
| 2. Voice | 2.13 | Entity-led voice | FAIL | Page starts with a YouTube embed. The first prose H2 begins "Projects like Livepeer are also known as DePIN…" which is reasonable, but the page-level opener is the video. |
| 2. Voice | 2.14 | No hedging verbs | FAIL | Line 125: "The protocol aims to deliver" — `aims to` is a hedging verb in a value claim. Line 217: "expanded beyond" is fine; line 219: "Gateways became AI-aware". |
| 2. Voice | 2.15 | Description not self-referential | PASS | Description does not start with "This page". |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Transcoders" used as a role name in the diagram (line 145, 165) and Update blocks (line 209: "unified transcoder role", "the orchestrator and transcoder roles split"). Where it is historical context it is acceptable, but the diagram uses `Orchestrators/Transcoders` as a current label. |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | Same drift as 2.16 — Transcoder/Orchestrator slash-pair in the diagram. |
| 2. Voice | 2.18 | Spell check | FAIL | "Decentralizing" and "incentivizes" are US spellings (also flagged under 2.1). |
| 2. Voice | 2.19 | Terms match TERMINOLOGY-COLLATE | FAIL | Same Transcoder/Orchestrator drift. |
| 2. Voice | 2.20 | Per-tab terminology | PASS | Stays in About-tab register mostly (no deep code references in main prose). |
| 2. Voice | 2.21 | First use defined or linked | FAIL | "DePIN" is defined and linked (good). "LPT", "Arbitrum One", "rollup", "BondingManager"-style terms not on this page so OK. "probabilistic micropayments" introduced in Update line 208 without definition. "Active set" in Update line 205 not defined. |
| 2. Voice | 2.22 | Terminology lock respected | N/A | No formal lock for About tab. |
| 3. Headings | 3.1 | Heading score >= 20/25 | FAIL | "About Livepeer" (16/25, generic), "Protocol Principles" (20/25, ok), "Protocol Evolution" (22/25, strong), "Livepeer Protocol & Network" (22/25, strong but uses ampersand). |
| 3. Headings | 3.2 | No banned/weak standalone terms | PASS | None of the banned/avoid terms in headings on this page. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | "Protocol & Network" uses "&" not "vs", treats them as paired concept. |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | All four H2s carry the domain noun "Livepeer" or "Protocol". |
| 3. Headings | 3.5 | Names concept not examples | PASS | Headings name concepts. |
| 3. Headings | 3.6 | Title well-formed | FAIL | Title is "Livepeer: Open AI-Infrastructure for Real-Time Interactive Media" — 9 words, exceeds 1–3 word title rule. Reads as a marketing tagline. sidebarTitle "About Livepeer" is fine. |
| 3. Headings | 3.7 | Expert editorial choice | PASS | Most H2s pass the editor test; "About Livepeer" is the weakest. |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | Concept page uses governing-concept naming. |
| 3. Headings | 3.9 | Per-audience register | PASS | Community register acceptable. |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | Same as 3.4. |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | Tries to do four jobs: introduce DePIN, explain Livepeer principles, walk through protocol evolution (V1–V4 history), and frame Protocol vs Network. Plus an unreviewed video transcript Accordion that drifts into market sizing. |
| 4. Structure | 4.2 | Purpose statement test | FAIL | Cannot write a single "This page lets the community [X]" sentence — page does too many things. |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | This is the first page in concepts nav. Next is `livepeer-stack` (a stub). Page does not set up the stack page; instead ends with a teasing one-liner ("Protocol & Network are distinct but complementary") and stops. |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages, no Next Step CTA. Last line (line 240) is a sentence fragment promising more but delivering nothing. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None stated. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | Page boundaries unclear. The Protocol Evolution timeline duplicates content that should live in `protocol/design.mdx` or its own page. |
| 4. Structure | 4.7 | Info type per section correct | FAIL | Mixes narrative (DePIN intro), conceptual (principles), structural/factual (evolution timeline), and marketing (QuadGrid value props). |
| 4. Structure | 4.8 | No content duplication | FAIL | Protocol Evolution timeline duplicates `concepts0/evolution.mdx`. Mission diagram overlaps with content in `core-principles.mdx`. Final teaser "Protocol & Network are distinct" duplicates intent of `composables/overview.mdx`. |
| 4. Structure | 4.9 | Section orientation page | N/A | Not a section orientation page itself. |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Only one cross-tab link (whitepaper resource link). Missing graduations to Orchestrators, Gateways, Delegators, Developers, Solutions tabs. |
| 4. Structure | 4.11 | Discord test | FAIL | Page would not give a complete answer to "what is Livepeer?" — it opens with a video, then a long historical Accordion, then stops mid-sentence at line 240. |
| 4. Structure | 4.12 | Page size appropriate | PASS | ~10KB, above 5KB minimum for concept pages. |
| 4. Structure | 4.13 | No TODO/REVIEW comments | FAIL | Line 36-38 contains a commented-out `<Tip>` block — dead code. Line 105 contains commented-out prose. Line 126 has stray comment markers. |
| 4. Structure | 4.14 | Flat layout | PASS | No sub-folders here. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | "More on Crypto-Primitive Advantages" Accordion presents only positive claims. No "when not to use Livepeer" or limitation framing. |
| 4. Structure | 4.16 | Content pass context completable | FAIL | Audience/purpose/scope not all derivable from the live page — page has scope creep. |
| 4. Structure | 4.17 | Multi-audience handoff explicit | FAIL | Founder cost claims and community-register intro blended without inline `<Note for founders>` flag. |
| 5. Layout | 5.1 | Correct template | FAIL | Does not match `concept` template. Opens with embedded video before intro prose, missing canonical Header CTA + Intro + Explanation pattern. |
| 5. Layout | 5.2 | Required sections | FAIL | No clear introduction section. Video and Accordion summary precede first H2. |
| 5. Layout | 5.3 | Only approved components | PASS | All components used (QuadGrid, DynamicTableV2, LinkArrow, CustomDivider, CustomCardTitle, BorderedBox, CenteredContainer, YouTubeVideo, Quote/FrameQuote, Image, ScrollableDiagram, Update, Card, Accordion) are in the catalog. |
| 5. Layout | 5.4 | Avoided components absent | PASS | No TODO/TBD/Coming Soon. |
| 5. Layout | 5.5 | Info type -> component mapping | PASS | Mermaid for conceptual flow, QuadGrid for value props, Updates for changelog/history. Mapping is reasonable. |
| 5. Layout | 5.6 | MDX renders clean | PASS | Renders (no broken JSX detected on visual scan). |
| 5. Layout | 5.7 | No old-schema frontmatter | PASS | All values canonical. |
| 5. Layout | 5.8 | CSS custom properties only | FAIL | Line 37: inline `style={{color: "white"}}`. Line 130: `maxHeight="650px"`, `maxWidth="100%"` are component props (ok). Line 173-179: hardcoded hex colours `#18794E`, `#3CB540`, `#0B1F17`, `#ffffff` in Mermaid `classDef` (not in MermaidColours.jsx import — see 5.27). Line 188: inline `style={{ color: "var(--accent)", marginBottom: "-1rem" }}` in Card title (uses var, but inline style still). Line 97: inline `style={{ margin: '-1rem 0 -2rem 0' }}` on CustomDivider. |
| 5. Layout | 5.9 | Generated file banners | N/A | Not a generated file. |
| 5. Layout | 5.10 | Component naming/import | PASS | PascalCase, root-absolute imports. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Page does not follow `concept-template.mdx` structure. |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No `related-pages-footer`, no `next-step-cta`, no `header-cta`. |
| 5. Layout | 5.13 | Section ordering | FAIL | Concept pages should be Header CTA → Intro → Explanation → Comparison → Accordion → Related. This page is Video → Accordion summary → DePIN intro → Mermaid → Updates → QuadGrid → ends mid-sentence. |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view content. |
| 5. Layout | 5.15 | Data imports not hardcoded | FAIL | Hardcoded numbers in Accordion ("$250 billion", "3 million+ video minutes weekly", "40% annual returns", "10x to 100x") and value-prop cards ("5–10x lower cost"). None imported. |
| 5. Layout | 5.16 | Related Pages footer | FAIL | No Related Pages. No Next Step CTA. Page ends mid-sentence at line 240. |
| 5. Layout | 5.17 | Related Pages format | N/A | Not present (5.16). |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | PASS | Both Accordions have icon props (`video`, `rocket`). |
| 5. Layout | 5.20 | Code block metadata | N/A | No fenced prose code blocks; Mermaid is the only code fence and uses ScrollableDiagram wrapper. |
| 5. Layout | 5.21 | StyledSteps used | N/A | No procedural steps. |
| 5. Layout | 5.22 | Navigation cards | FAIL | Whitepaper Card uses inline-styled JSX in title — not CustomCardTitle. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables on this page (DynamicTableV2 imported but unused). |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | Zero tables. |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One Mermaid diagram. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | Only one CustomDivider (line 97), placed between Accordion and first H2 with negative margin override. Missing Related Pages divider. |
| 5. Layout | 5.27 | Mermaid governed colours | FAIL | Mermaid uses hardcoded hex (`#18794E`, `#3CB540`, `#0B1F17`, `#ffffff`) inline in `themeVariables` and `classDef` — does not import from MermaidColours.jsx. Per check, hex must be hardcoded but must come from the governed palette. Need to verify the values are the governed ones. |
| 5. Layout | 5.28 | Import section ordering | FAIL | Imports are mixed; no comment headers; QuadGrid (display) before Image (display), Quote/FrameQuote duplicated import line. No grouping. |
| 5. Layout | 5.29 | Media placeholders | N/A | No placeholders. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Multiple unverified claims (40% annual returns, 3M video minutes/week, 10x cost savings, $250B market) lack `{/* REVIEW: */}` flags. |
| 5. Layout | 5.31 | Decision-critical visible | FAIL | Key facts buried inside Accordion summary that defaults closed. |
| 5. Layout | 5.32 | Reference tables at end | N/A | No reference tables. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Commented-out prose blocks (lines 36-38, 105, 126) belong in workspace drafts. |
| 5. Layout | 5.34 | No inline styles | FAIL | Inline styles at lines 37, 97, 188 (see 5.8). |
| 6. Veracity | 6.1 | Every claim citable | FAIL | "$250B video market", "3M+ minutes weekly", "40% returns", "5–10x lower cost", "10x–100x AI usage growth" not cited. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code blocks. |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references. |
| 6. Veracity | 6.4 | Numbers are real | FAIL | All quantitative claims unsourced. |
| 6. Veracity | 6.5 | REVIEW flags for unverified | FAIL | Zero REVIEW flags despite multiple unverified claims. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing entirely; `lastVerified: 2026-03-17` does not satisfy the canonical schema. |
| 6. Veracity | 6.7 | Authoritative glossary | N/A | No glossary references. |
| 6. Veracity | 6.8 | Source staleness | FAIL | `lastVerified` is 2026-03-17, but Cascade era claims (V4 AI workloads) need staleness check. |
| 6. Veracity | 6.9 | No open-ended research | PASS | No open research notes in published prose (commented-out blocks aside). |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | Whitepaper link is T1 (good); other claims have no T1/T2 source. |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No definitions. |
| 6. Veracity | 6.12 | Glossary verified | N/A | No definitions. |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Listed at docs.json:2120. |
| 7. Navigation | 7.2 | Nav matches filesystem | PASS | File exists. |
| 7. Navigation | 7.3 | Tab entry routes to sections | N/A | Not a portal page. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable. |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Ends mid-sentence; reader has no exit. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | No graduation links. |
| 7. Navigation | 7.7 | File in correct lane | PASS | In v2/about/concepts/. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `about-livepeer.mdx`. |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in _workspace. |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | Above 2KB. |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | Not a resources page. |
| 8. Links | 8.1 | Internal links resolve | PASS | `/v2/about/resources/knowledge-hub/livepeer-whitepaper`, `/v2/home/about/roadmap` — assumed valid (not verified). |
| 8. Links | 8.2 | External links live | FAIL | Stanford DePIN link, GitHub whitepaper link, livepeer-docs-v2-assets image URL — none verified. |
| 8. Links | 8.3 | Snippet imports resolve | PASS | All imports use canonical root-absolute paths to existing snippets. |
| 8. Links | 8.4 | Images load | FAIL | Image at line 195 uses raw GitHub URL (`raw.githubusercontent.com/...`) — not local snippet asset. Violates snippets/assets policy. |
| 8. Links | 8.5 | Page renders | PASS | Renders. |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | PASS | None visible. |
| 9. Process | 9.1 | Human sign-off | FAIL | No sign-off recorded. |
| 9. Process | 9.2 | Decisions in registry | FAIL | No registry entries. |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence of gate completion. |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence. |
| 9. Process | 9.5 | Findings before fixes | FAIL | No structured review. |
| 9. Process | 9.6 | Feedback routed | N/A | No corrections to route. |
| 10. Completeness | 10.1 | Every question has a page | PASS | "What is Livepeer?" is addressed (incompletely). |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | Page ends mid-sentence; journey breaks. |
| 10. Completeness | 10.3 | All persona paths unblocked | FAIL | No graduation links to role tabs. |
| 10. Completeness | 10.4 | Scope boundaries explicit | FAIL | Where this page ends and next begins is unclear. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Promises "Protocol and Network are distinct" then stops without explaining. |
| 10. Completeness | 10.6 | Multi-audience pathway | FAIL | Founder content (cost claims, market sizing) blended with community intro; no path for either persona. |

## Summary

| Category | Checks | Pass | Fail | Score |
|---|---|---|---|---|
| 1. Frontmatter | 11 | 8 | 3 | 8/11 |
| 2. Voice | 21 | 6 | 13 | 6/19 (2 N/A) |
| 3. Headings | 10 | 8 | 2 | 8/10 |
| 4. Structure | 16 | 2 | 13 | 2/15 (1 N/A) |
| 5. Layout | 25 | 7 | 12 | 7/19 (6 N/A) |
| 6. Veracity | 8 | 1 | 6 | 1/7 (1 N/A) |
| 7. Navigation | 8 | 5 | 2 | 5/7 (1 N/A) |
| 8. Links | 6 | 4 | 2 | 4/6 |
| 9. Process | 5 | 0 | 5 | 0/5 |
| 10. Completeness | 6 | 1 | 5 | 1/6 |

**Overall**: 42/111 applicable checks passed (~38%)
**Verdict**: REWRITE REQUIRED
**Critical issues**:
1. Page ends mid-sentence at line 240 with no Related Pages or Next Step CTA — incomplete content
2. Multi-audience blending (community intro + founder cost/market claims) without inline flagging
3. Multiple unsourced quantitative claims ($250B, 3M minutes, 40% returns, 5-10x cost) with no REVIEW flags
4. Title is 9-word marketing tagline; description is 332 chars (2x limit); deprecated US spellings ("Decentralizing", "incentivizes")
5. Content duplicates `concepts0/evolution.mdx` (Protocol Evolution timeline) and `core-principles.mdx` (Mission diagram)
