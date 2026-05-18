# Review: overview.mdx (guides/)

**Page**: `v2/developers/guides/overview.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A12
**pageType (from frontmatter)**: `guide`
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: `orient`
**Bytes**: 7,038
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | Missing `veracityStatus`. Has legacy `status: current` (line 28). |
| 1. Frontmatter | 1.2 | pageType canonical | MIXED | Line 9 `pageType: guide` — canonical but this page is the section ROOT routing to other guides, with zero procedural body. `navigation` would be more accurate per `pageType.navigation` matrix (header CTA + intro + nav cards + no content components). |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | Not declared. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: orient` (line 27). |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 25). |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` (line 8). |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | MIXED | `lifecycleStage: operate` (line 7). For an orient page, `discover` or `build` is more appropriate. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.9 | industry array | N/A | |
| 1. Frontmatter | 1.10 | niche array | N/A | |
| 1. Frontmatter | 1.11 | description subject-first ≤160 | PASS | Lines 4-6: "A curated library of how-to guides, tutorials, and walkthroughs for building with Livepeer – from first API call to production AI pipelines." 145 chars. Subject-first. NOTE: contains EN-DASH (`–`) on line 6: "Livepeer – from first API call" — see 2.12. |
| 1. Frontmatter | 1.12 | OG image block complete | MIXED | Uses `/snippets/assets/media/og-images/fallback.png` (line 20) — fallback rather than developer-tab specific. Inconsistent with `local-development/` siblings using `developers.png`. |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | "livepeer", "developers", "guides" generic. Rest specific. |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | PASS | |
| 2. Voice & Copy | 2.1 | UK English throughout | PASS | "decentralised" line 140 — UK. |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | |
| 2. Voice & Copy | 2.4 | Zero banned constructions | MIXED | Line 31: "Use this page to jump into the right task flow…" — soft directive on the reader; not strictly banned but mildly hand-holding. INFO. |
| 2. Voice & Copy | 2.5 | Opening order subject-first | PASS | Line 31: "A curated map of the Developers guides surface." Subject-first. |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | |
| 2. Voice & Copy | 2.7 | Audience register matches token | PASS | |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | |
| 2. Voice & Copy | 2.12 | Zero em-dashes | MIXED | Zero `—` (em-dash). One EN-DASH `–` in description (line 6). Style guide spirit: dashes of either kind banned in narrative — MEDIUM. |
| 2. Voice & Copy | 2.13 | Entity-led voice | MIXED | Line 31: "A curated map…" subject-led. Card descriptions mostly entity-led ("Get an API key…", "Ship a first video workflow…"). Line 31 self-references "Use this page" (see 2.15). |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | |
| 2. Voice & Copy | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | |
| 2. Voice & Copy | 2.18 | Spell check | N/A | |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | PASS | |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening | N/A | navigation/orient page. |
| 2.D | 2.D2 | Every function/API named has code/link | N/A | |
| 2.D | 2.D3 | Versions stated explicitly | N/A | |
| 2.D | 2.D4 | Error states in main content | N/A | |
| 2.D | 2.D5 | No prose explanations of self-evident code | N/A | |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | |
| 2.D | 2.D7 | Note/Info not used for primary content | FAIL | Line 33-35 `<Info>` carries primary content about content authority ("For precise API, SDK, and product behaviour, prefer the routed pages in this section over older community tutorials. External resources still exist in the knowledge hub, but the internal guides below are the maintained path."). This is a load-bearing editorial statement about source authority — should be either prose paragraph or a `<Tip>` callout (Tip is for guidance; Info is for adjacent context only). |
| 3. Headings | 3.1 | Every heading ≥20/25 | MIXED | "Opportunities and Resources" weak — see Heading Score Table. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No `Basics/Notes/Overview/Background/Conclusion`. |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor rule applied | MIXED | "Choose a Guide Path", "AI Guides", "Video Guides", "Tutorials", "Opportunities and Resources" — partial domain anchor. "Tutorials" alone is generic; would be stronger as "Build Tutorials" or "End-to-End Tutorials". "Opportunities and Resources" is a portmanteau without strong anchor. |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Developer Guides" — 2 words. |
| 3. Headings | 3.7 | Editorial choice | MIXED | "Tutorials" + "Opportunities and Resources" feel like Notion section labels. |
| 3. Headings | 3.8 | Per-pageType naming style | MIXED | Navigation/orient page; map-language style applied via "Choose a Guide Path" — PASS. Other H2s mix taxonomy (AI/Video) with format (Tutorials) inconsistently. |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor rule applied | MIXED | |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Job: route the developer to the right guide. Clean. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer choose which guide to read next." |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | PASS | Section root; routes via cards. |
| 4. Structure | 4.4 | No dead ends | MIXED | Closing `<Tip>` (line 185) routes to GitHub issues — that's an off-tab handoff. No on-tab footer Related Pages. Acceptable as nav root but underweight. |
| 4. Structure | 4.5 | Prerequisites stated or linked | N/A | Navigation. |
| 4. Structure | 4.6 | Out-of-scope clear | MIXED | `<Info>` (line 33) hints at scope but does not name what falls OUT of these guides (e.g. protocol governance — covered in About; orchestrator setup — Orchestrators tab; etc.). |
| 4. Structure | 4.7 | Information type correct | PASS | Routing. |
| 4. Structure | 4.8 | No content duplication | MIXED | "Video Quickstart" card (line 121) duplicates "Create a Livestream" card (line 97) target target — both point to video build pages. Could consolidate. Line 113 "Webhooks" card points to `live-events` — same target as "Create a Livestream"; redundant. |
| 4. Structure | 4.9 | Section orientation entry present | PASS | This IS the orientation entry for `guides/`. |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | FAIL | Zero cross-tab links — every card points to `/v2/developers/...`. Should graduate to `/v2/about/...` (for protocol/governance), `/v2/orchestrators/...` (for node operators), `/v2/solutions/...` (for managed platforms). |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "where do I find a guide?" — yes. Does NOT answer "where should I START as a new developer?" — the AI Quickstart card is at position 2/4 in the first card group, but the page does not name AI vs Video as the primary fork. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 7KB substantive. |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | N/A | |
| 4. Structure | 4.16 | Content-pass context block completable | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | N/A | No code blocks. |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states in main content | N/A | |
| 4. Structure | 4.20 | Every function/API named has code/link | N/A | |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | MIXED | `guide` declared but page acts as `navigation` per matrix. Either change pageType or treat as guide-with-only-routing (rare). |
| 5. Layout | 5.2 | Required sections present per pageType | MIXED | If `navigation`: header CTA + intro + nav cards — present. Related Pages footer — MISSING. If `guide`: needs body H2 with procedural / reference content — none on this page. |
| 5. Layout | 5.3 | Only approved components used | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Information-type → component mapping | PASS | Routing → CardGroup (though CardGroup wrapper itself is the wrong format — see 5.17). |
| 5. Layout | 5.6 | MDX renders clean | PASS | |
| 5. Layout | 5.7 | No old-schema frontmatter values | MIXED | `status: current` (line 28) legacy field — should be removed; use `veracityStatus`. |
| 5. Layout | 5.8 | CSS custom properties only | PASS | |
| 5. Layout | 5.9 | Generated file banners intact | N/A | |
| 5. Layout | 5.10 | Component naming conventions | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | MIXED | No imports declared at top — uses Mintlify globals (`<Info>`, `<CardGroup>`, `<Card>`, `<CustomDivider />`, `<Tip>`) implicitly. `<CustomDivider />` is a custom snippet — typically needs an import unless registered as a global. Verify against `mintlify-repo-best-practices.md`. INFO/MEDIUM. |
| 5. Layout | 5.12 | Section blocks from gold-standard | PASS | |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | |
| 5. Layout | 5.15 | Data imports used | MIXED | Card list (5 CardGroups × multiple cards) hardcoded. Could be a `snippets/data/developers/guides-index.json` (or similar) imported and rendered. The card list is the canonical "library" of guides — high-value data extraction target. |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | MIXED | No `## Related Pages` footer; closing `<Tip>` (line 185) acts as Next Step CTA pointing to GitHub issues. Acceptable per "one or the other" — but a navigation page would benefit from a Related Pages footer linking cross-tab. |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages section. |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon + title | N/A | |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | FAIL | 26 navigation `<Card>` instances (lines 45-179) — all bare `title=` not `<CustomCardTitle icon="..." title="..." />`. This is the primary surface of the page (5 CardGroups). |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | |
| 5. Layout | 5.24 | Max 1-2 tables | N/A | |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | 5 `<CardGroup>` blocks; navigation page exempt. |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Dividers at lines 37, 63, 89, 127, 149, 183 — between major H2s. PASS pattern. No opening `<CustomDivider />` before intro line 31 — FAIL "ONE opening divider after imports". |
| 5. Layout | 5.27 | Mermaid uses governed colours | N/A | |
| 5. Layout | 5.28 | Import section ordering | MIXED | No imports declared. If `<CustomDivider />` is treated as a global, no import needed; if it's a custom snippet, import is missing — render risk. |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | Fact-check flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | PASS | |
| 6. Veracity | 6.1 | Every factual claim citable | N/A | Routing only. |
| 6. Veracity | 6.2 | Code tested | N/A | |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | |
| 6. Veracity | 6.4 | Numbers are real | N/A | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field missing. |
| 6. Veracity | 6.7 | Uses resources/glossary | N/A | |
| 6. Veracity | 6.8 | Source staleness check | N/A | |
| 6. Veracity | 6.9 | No open-ended needs-research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers respected | PASS | |
| 6. Veracity | 6.11-6.12 | Glossary | N/A | |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | docs.json line 2649. |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Navigation | 7.3 | Portal routes to section | PASS | This page IS the portal route for guides. |
| 7. Navigation | 7.4 | No structural orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | MIXED | Cards route to most developer guides. OSS contributor link via Contributor Quickstart (line 57). Persona coverage acceptable. |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation paths | FAIL | Zero cross-tab cards. |
| 7. Navigation | 7.7 | File in correct lane | PASS | |
| 7. Navigation | 7.8 | File naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL compliance | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | All cards link to live pages (verified). |
| 7. Navigation | 7.11 | Resources sub-structure correct | PASS | "Opportunities and Resources" section links into resources/. |
| 7. Navigation | 7.12 | Guides scope correct | PASS | |
| 8. Links & Rendering | 8.1 | All internal links resolve | PASS | All 26 card href values verified resolvable (see Link audit). |
| 8. Links & Rendering | 8.2 | All external links live | N/A | One external link: `https://github.com/livepeer/docs/issues` (line 186). Assumed live. |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | N/A | None declared. |
| 8. Links & Rendering | 8.4 | All images load | N/A | |
| 8. Links & Rendering | 8.5 | Page renders without error | PASS | |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | PASS | |
| 9. Process & Governance | 9.1-9.6 | | N/A | |
| 10. Content Completeness | 10.1 | Every question in job list has page | MIXED | "How do I start as a new developer?" → not surfaced as a primary path; first 4 cards mix orientation and quickstart. Could lead with a "First time? Start here" hero card. |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | MIXED | Cards route to most quickstarts. Missing: no card for "Local Development" (the sibling group) — readers landing here who need OSS-contribution path see "Contributor Quickstart" but not the local-development overview. |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | PASS | |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | MIXED | |
| 10. Content Completeness | 10.5 | Self-containment holds | PASS | |
| 10. Content Completeness | 10.6 | Code samples have working language path | N/A | |
| 10. Content Completeness | 10.7 | Persona-specific guides present | PASS | AI / Video / Contributor personas all routed. |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Developer Guides" | PASS | |
| sidebarTitle | Yes | "Developer Guides" | PASS | |
| description | Yes | 145 chars | PASS | Contains EN-DASH — see 2.12. |
| pageType | Yes | guide | MIXED | Should likely be `navigation` per matrix; page has no procedural body. |
| audience | Yes | developer | PASS | |
| purpose | Yes | orient | PASS | |
| complexity | Yes | intermediate | MIXED | Beginner more likely for an orient page. |
| lifecycleStage | Yes | operate | MIXED | `discover` or `build` more appropriate. |
| keywords | Yes | 9 keywords | MIXED | "livepeer", "developers", "guides" generic. |
| og:image | Yes | fallback.png | MIXED | Inconsistent with sibling pages. |
| og:image:alt | Yes | "Livepeer Docs social preview image" | MIXED | |
| og:image:type/width/height | Yes | image/png 1200×630 | PASS | |
| veracityStatus | No | — | FAIL | Add `unverified`. |
| lastVerified | Yes | 2026-03-17T00:00:00.000Z | MIXED | Older than other pages reviewed; cards inventory may have drifted. |
| status | Yes | current | FAIL | Legacy; remove. |
| pageVariant | No | — | INFO | If pageType becomes `navigation`, no variant needed. |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | No opening divider before intro line 31 — FAIL placement. Subsequent placements OK. |
| `<Tabs>` | No | — | — | |
| `<StyledSteps>` | No | — | — | |
| `<Card>` / `<Columns>` | `<CardGroup>` × 5 (lines 43, 69, 95, 133, 155) | — | — | navigation matrix permits `<CardGroup>` or `<Columns>`; convention in this repo is `<Columns cols={2}>` for Related Pages footer and `<CardGroup>` for body navigation grids. CURRENT IS OK; verify against latest matrix. |
| `<CustomCardTitle>` | NO | Required (per 5.22 for navigation cards) | — | 26 cards bare `title=`. |
| Fenced code | N/A | — | — | |
| `<Note>` / `<Info>` / `<Tip>` / `<Warning>` | `<Info>` line 33 (FAIL 2.D7); `<Tip>` line 185 | — | — | Info carries primary editorial content. |
| `<Accordion>` | No | — | Recommended | Could use AccordionGroup to collapse sections (AI/Video/Tutorials) and reduce scroll length. |
| `<StyledTable>` | No | — | — | |
| `<LinkArrow>` | No | — | — | |
| `<CenteredContainer>` | No | — | — | Other developer-tab pages wrap header `<Tip>` in CenteredContainer. |

## Cross-page duplication and link gaps

- **OVERLAP**: "Video Quickstart" card (lines 121-123) and "Create a Livestream" card (line 97) and "Webhooks" card (line 113) all point at video-related pages with overlapping intent. Could consolidate or differentiate by purpose.
- **OVERLAP**: "AI Quickstart" card target `/v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart` (line 49) is a quickstart, not a guide — appears at top of "Choose a Guide Path" rather than under "AI Guides" where it more naturally lives.
- **LINK GAPS**: Zero cross-tab links. Missing graduation cards to About / Orchestrators / Solutions.
- **LINK GAPS**: No card pointing to `Local Development` overview (`/v2/developers/guides/local-development/overview`) despite that being a sibling group in the same nav cluster.
- **LINK GAPS**: "Contributor Quickstart" card (line 57) points to `/v2/developers/resources/contributing` — but the OSS-contribution journey for "I want to run protocol contracts locally" is the local-testnet page; not surfaced.
- **STRANDED**: Closing `<Tip>` (line 185) routes the reader to GitHub issues — acceptable as a Next Step CTA but does not give the reader an on-tab next move.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | (zero `—`) |
| En-dashes (`–`) | 1 | line 6 (description): "Livepeer – from first API call to production AI pipelines." MEDIUM. |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | (line 31 "Use this page to jump…" mild — INFO) |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 2 | line 31: "Use this page to jump into the right task flow without relying on older external roundups." — mild self-reference, acceptable for navigation page. line 34: "the routed pages in this section" — self-reference inside `<Info>`. INFO. |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Choose a Guide Path | 5 | 4 | 5 | 5 | 4 | 23 PASS |
| AI Guides | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Video Guides | 5 | 4 | 5 | 5 | 5 | 24 PASS |
| Tutorials | 3 | 3 | 5 | 4 | 5 | 20 borderline (no domain anchor) |
| Opportunities and Resources | 3 | 3 | 4 | 4 | 3 | 17 FAIL (portmanteau, no anchor, weak Precision) |

Title "Developer Guides": 4/4/5/5/5 = 23 PASS.

## Code Block Audit

No fenced code blocks. N/A.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Reader's outcome on landing here is "show me which guide to read next". The page does that competently — 5 card groups, 26 cards, all linked. But there's no signal of *priority* or *first move*. A new developer arriving for the first time sees the same visual weight on "AI Quickstart" (the most likely first move) as on "Build an AI Agent on Livepeer" (a deep tutorial). Missing: a "First time? Start here" hero block and a recommended order. Compare to npm docs / Vercel docs portal pages which surface the canonical "10-minute path" at the top.
- **Fix step:** Add a hero `<Card>` or `<Tip>` callout BEFORE the first `<CardGroup>` (around line 38), titled "New to Livepeer?" with a 2-line description and a single LinkArrow to `/v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart` (or the navigator). Below it, keep the 4-card "Choose a Guide Path" as the secondary navigation. This gives first-time readers a clear primary path and experienced readers the full nav grid.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` Hero CTA pattern; `v2/developers/navigator.mdx` (the canonical setup-paths router).

### Layer 2 — Composition
- **Gap:** 26 `<Card>` instances bare `title=` not `<CustomCardTitle icon="..." title="..."/>` (FAIL 5.22). `<Info>` (line 33) carries primary editorial content (FAIL 2.D7) — should be either `<Tip>` or prose. EN-DASH in frontmatter description (line 6). No opening `<CustomDivider />` before intro (line 31). No imports declared — render risk if `<CustomDivider />` is not registered as a global. No `<CenteredContainer>` wrapper around the closing `<Tip>` (line 185) — sibling pages use this wrapper. 5 CardGroups with no internal grouping; "Tutorials" only has 3 cards while "Video Guides" has 7 — visual asymmetry.
- **Fix step:** (a) Replace every `<Card title="X">` with `<Card href="..."><CustomCardTitle icon="..." title="X" /></Card>` per 5.22. Each card needs a matching FontAwesome icon. (b) Convert line 33 `<Info>` to either prose (preferred) or `<Tip>`. (c) Replace EN-DASH on line 6 with comma. (d) Add `<CustomDivider />` immediately before line 31 intro. (e) Add explicit imports for any custom snippets. (f) Wrap line 185 `<Tip>` in `<CenteredContainer preset="readable90">`. (g) Group cards more evenly OR add a sixth `<CardGroup>` "Local Development" between "Tutorials" and "Opportunities and Resources" linking to local-dev pages.
- **Source/exemplar:** `_packet/component-matrix.md` lines 38-50 (navigation matrix); `_packet/component-matrix.md` line 165 (Card with CustomCardTitle).

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links — every card stays inside `developers/`. Missing graduations: (a) `/v2/about/network/architecture` (for protocol context the AI cards reference), (b) `/v2/orchestrators/concepts/role` (for OSS contributors / payment-flow learners), (c) `/v2/solutions/portal` (for managed-platform readers). Also missing on-tab: no card to `local-development/overview.mdx` despite being a sibling group; no card to `navigator.mdx` (the canonical setup-paths router).
- **Fix step:** Add a 6th `<CardGroup>` titled "Cross-tab paths" with 4 cards: (a) `/v2/about/network/architecture` "Protocol architecture", (b) `/v2/orchestrators/concepts/role` "Run an orchestrator", (c) `/v2/solutions/portal` "Managed gateways", (d) `/v2/developers/guides/local-development/overview` "Local development". Place between "Tutorials" (line 147) and "Opportunities and Resources" (line 151) OR replace "Opportunities and Resources" with this cross-tab group since opportunity links are already in `resources/`.
- **Source/exemplar:** `_packet/review-rubric.md` check 4.10 + 7.6.

### Layer 4 — Veracity and source authority
- **Gap:** This is a navigation page so veracity reduces to card-target accuracy. All 26 internal hrefs verified resolve (Bash audit confirmed). `lastVerified: 2026-03-17` is older than the most recent developer-tab content additions (e.g. local-development was scaffolded 2026-05-12 per brief). The page's `<Info>` (line 33) asserts "the internal guides below are the maintained path" — a load-bearing claim about source authority that itself should be verifiable against the docs-guide governance index.
- **Fix step:** (a) Bump `lastVerified` to today's date after a card-inventory audit. (b) Add `veracityStatus: unverified` until cards are audited fresh. (c) Add a `{/* REVIEW: re-verify card inventory monthly */}` placeholder. (d) Replace the `<Info>` line 33 editorial claim with prose that names the maintenance signal explicitly: "Guides linked from this page are routed via `docs.json` and tested by the docs CI. External tutorials in the knowledge hub are community-maintained."
- **Source/exemplar:** `docs-guide/policies/governance-index.mdx`; `docs-guide/decisions/registry.md`.

### Layer 5 — Product-forward depth
- **Gap:** This is the developer-tab guides ROOT — the page every developer hits first. It currently reads as a Notion table of contents. Missing: visual hierarchy that surfaces the canonical 5-minute first move; signal of how many guides exist (one of the strongest "is this a product?" signals); a "what's new" surface (last 3 updated guides); the canonical persona-fork — AI / Video / Contributor — as the page's first visual axis instead of card position 1/2/3/4 in the same group.
- **Fix step:** (a) Add a hero block above the first CardGroup: 1 line of fact ("23 maintained guides across AI, Video, and Contributor paths.") + 1 CTA card "New to Livepeer? Start with AI Quickstart". (b) Replace the first `<CardGroup>` ("Choose a Guide Path") with a 3-card persona fork: AI / Video / Contributor — each with its top-3-guide list as an inline Accordion. (c) Add a "Recently updated" `<Tip>` near the top listing the 3 most-recently-touched guides (driven by a snippet that reads `lastVerified` from each frontmatter). (d) Replace the closing `<Tip>` (line 185) with a more structured "Missing a guide?" card linking to GitHub Discussions + the issues tracker — gives the reader an action, not just a link.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` portal-page exemplars; npm / Vercel docs portal patterns.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 5 / MEDIUM 7 / INFO 5

**Critical findings (top 5)**:
1. **26 navigation cards bare `title=` (5.22)** — should use `<CustomCardTitle icon title />`. The primary surface of the page fails the rubric. HIGH.
2. **`<Info>` carries primary content (2.D7)** — line 33-35 carries load-bearing editorial claim about source authority. HIGH.
3. **Zero cross-tab links (4.10 / 7.6)** — every card stays inside developers/. HIGH.
4. **`pageType: guide` mismatched (1.2 / 5.1)** — page has no procedural body; should be `navigation`. MEDIUM/HIGH.
5. **EN-DASH in description (2.12 spirit)** + **legacy `status: current` (5.7)** + **`lifecycleStage: operate` for orient page (1.7)**. MEDIUM. |

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace all 26 `<Card title="X">` with `<Card href="..."><CustomCardTitle icon="..." title="X" /></Card>`. Each card needs a matching FontAwesome icon (most already have a sibling icon attribute that can move into CustomCardTitle). | 45-181 | HIGH | L | check 5.22, component-matrix Card rules |
| 2 | Convert `<Info>` (lines 33-35) to either prose paragraph or `<Tip>` callout. Rewrite content to avoid self-reference and name maintenance signal explicitly. | 33-35 | HIGH | S | check 2.D7 |
| 3 | Add a 6th `<CardGroup>` (or replace "Opportunities and Resources") for cross-tab graduations: About / Orchestrators / Solutions / Local Development. | After 147 | HIGH | M | check 4.10, 7.6 |
| 4 | Change `pageType: guide` → `pageType: navigation`. Or keep `guide` and add procedural H2 body (less likely intent). Remove legacy `status: current`. | 9, 28 | HIGH | S | check 1.2, 5.7 |
| 5 | Replace EN-DASH on line 6 with comma: "...building with Livepeer, from first API call..." | 6 | HIGH | S | check 2.12 spirit |
| 6 | Add `veracityStatus: unverified` to frontmatter. Bump `lastVerified` to today after card-inventory audit. | After 26 | MEDIUM | S | check 1.8, 6.6 |
| 7 | Change `lifecycleStage: operate` → `lifecycleStage: discover`. Change `complexity: intermediate` → `complexity: beginner`. | 7, 8 | MEDIUM | S | check 1.6, 1.7 |
| 8 | Add opening `<CustomDivider />` before line 31 intro. | Before 31 | MEDIUM | S | check 5.26 |
| 9 | Wrap closing `<Tip>` (line 185) in `<CenteredContainer preset="readable90">` to match sibling pages. | 184-187 | MEDIUM | S | check 5.11 |
| 10 | Add explicit imports for any custom snippets (`<CustomDivider />` if not registered as a global). | After line 29 | MEDIUM | S | check 5.28 |
| 11 | Replace OG image to match siblings: `/snippets/assets/site/og-image/en/developers.png` + alt "...for Developers". | 20, 21 | INFO | S | check 1.12 |
| 12 | Drop generic keywords "livepeer", "developers", "guides". | 10-19 | INFO | S | check 1.13 |
| 13 | Rename `## Tutorials` → `## Build Tutorials` or `## End-to-End Tutorials` (domain anchor). Rename `## Opportunities and Resources` → `## Resources and Programmes` (single domain). | 129, 151 | MEDIUM | S | check 3.4, 3.10 |
| 14 | Add hero "New to Livepeer? Start here" block before the first `<CardGroup>` with single CTA to AI Jobs Quickstart. | After line 35 | MEDIUM | M | Layer 1 |
| 15 | Consolidate / differentiate the 3 overlapping video cards (Create a Livestream / Webhooks / Video Quickstart) — either consolidate or distinguish purpose more clearly. | 97-123 | INFO | M | 4.8 |
| 16 | Drop "AI Quickstart" card from "Choose a Guide Path" (where it's mis-categorised as orientation, not guide) and keep it only under "AI Guides". | 49-51 | INFO | S | 4.8 |
| 17 | Add `<Badge>23 maintained guides — updated {DATE}</Badge>` near the title surfacing inventory + freshness. | After title | INFO | M | Layer 5 |
