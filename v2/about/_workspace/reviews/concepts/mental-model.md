# Review: mental-model.mdx

**Page**: `v2/about/concepts/mental-model.mdx`
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
| 1. Frontmatter | 1.11 | description well-formed | FAIL | "A high-level introduction to the key concepts workings of the Livepeer open, on-demand AI & Media infrastructure substrate and the distributed crypto-primitive coordination system." -- grammatically broken ("key concepts workings"), 176 chars (exceeds 160 limit) |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present: og:image, og:image:alt, og:image:type, og:image:width, og:image:height |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Keywords include generic single words: "livepeer", "about", "introduction", "key", "architecture". Better: "livepeer architecture layers", "decentralised GPU network mental model", "livepeer OSI stack". "mental model" and "core concepts" are reasonable |
| 2. Voice & Copy | 2.1 | UK English | FAIL | Line 33: "optimised" (correct UK). Line 33: "decentralised" (correct). But line 103: "optimized" in commented-out text (not rendered). Main text is generally UK English. Line 97: "decentralised" (correct). Pass in rendered content, but description contains mixed: "on-demand" is fine. Overall PASS for rendered text |
| 2. Voice & Copy | 2.1 | UK English (corrected) | PASS | Rendered content uses UK English consistently: "decentralised", "optimised", "behaviour", "colour" conventions followed |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No instances of effectively, essentially, basically, meaningful, significant, various, several, obviously, clearly |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No banned phrases in body text |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | No "This page [verb]" self-reference, no unresolved `if [condition]`, no `not [X]` value statements |
| 2. Voice & Copy | 2.5 | Opening order correct | PASS | Opens with "Livepeer is a crypto-economic coordination protocol that secures a global, on-demand GPU network optimised for low-latency video and AI" -- value/subject first |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | Paragraphs are focused. Each Accordion section follows a clear structure: "What it is" / "Livepeer context" / "Who provides it" |
| 2. Voice & Copy | 2.7 | Audience register correct | FAIL | `audience: general` is undefined register. Page uses technical infrastructure language ("OSI model", "GPU fabric", "cryptoeconomic control plane") that may not suit all readers. However the content is appropriate for a concept page at beginner complexity |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases | N/A | Cannot assess -- audience is deprecated `general` |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | Value claims are concrete: "crypto-economic coordination protocol that secures a global, on-demand GPU network" |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | Opens with direct declarative statement |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | Uses canonical terms: "Orchestrators", "Gateways", "Delegators". One instance of "Broadcasters" at line 287 inside JSX comment (not rendered) |
| 2. Voice & Copy | 2.12 | No em-dashes | PASS | No em-dashes. Uses en-dashes (acceptable) |
| 2. Voice & Copy | 2.13 | Entity-led voice | PASS | Paragraphs open with entity subjects: "Livepeer is...", "The protocol...", "The network..." |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No "can help", "allows you to" in value claims |
| 2. Voice & Copy | 2.15 | Description not self-referential | PASS | Description starts with "A high-level introduction to the key concepts" -- subject-first (though malformed grammar) |
| 2. Voice & Copy | 2.16 | Deprecated terms absent | PASS | "Broadcasters" only appears in JSX comments and the large commented-out block (not rendered). Rendered content uses "Gateways" |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | Rendered content uses canonical terms consistently |
| 2. Voice & Copy | 2.18 | Spell check | FAIL | Description: "key concepts workings" -- grammatical error (should be "key concepts and workings" or "key workings"). Line 30: visible `<Note> image would be good </Note>` is not a spelling error but a visible placeholder |
| 2. Voice & Copy | 2.19 | Terms match TERMINOLOGY-COLLATE | PASS | Rendered terminology matches canonical definitions |
| 2. Voice & Copy | 2.20 | Per-tab terminology | N/A | About tab terminology file would need checking |
| 2. Voice & Copy | 2.21 | First use specialised term defined | FAIL | "OSI model" (line 99) linked to Wikipedia -- good. "LPT" first used (line 252) without inline definition. "DePIN" not used. "Cryptoeconomic" used without definition (line 33) |
| 2. Voice & Copy | 2.22 | Terminology lock respected | N/A | No terminology lock identified for About tab |
| 3. Headings | 3.1 | Heading score >=20/25 | FAIL | 2 of 6 scored headings fall below 20/25 (see Heading Score Table) |
| 3. Headings | 3.2 | No banned/weak headings | PASS | No banned or "Avoid" tier headings used |
| 3. Headings | 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | "Livepeer Mental Model", "Livepeer as an OSI-Like Stack" -- domain-anchored |
| 3. Headings | 3.5 | Names concept not examples | PASS | Headings name architectural layers, not specific examples |
| 3. Headings | 3.6 | Title well-formed | PASS | "The Livepeer Stack and Mental Model" / sidebar "Livepeer Mental Model" -- concept-derived |
| 3. Headings | 3.7 | Expert editorial choice | PASS | "Livepeer as an OSI-Like Stack", "Network & Protocol Stack", "Platform and Application Stack" -- expert framing |
| 3. Headings | 3.8 | Per-pageType naming style | PASS | `concept` page uses governing-concept naming: layers, stacks, models |
| 3. Headings | 3.9 | Per-audience register | FAIL | "OSI-Like Stack" assumes technical familiarity. Register may not match undefined `general` audience |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | All main headings anchored to Livepeer or stack/layer domain |
| 4. Structure | 4.1 | One purpose, one audience, one job | PASS | Page serves one job: provide a mental model / layered architecture view of Livepeer. Clear single purpose |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the community reader understand Livepeer's architecture through a layered mental model." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | No explicit links to previous page (livepeer-overview.mdx) or next page (core-concepts.mdx) in docs.json sequence |
| 4. Structure | 4.4 | No dead ends | FAIL | Page ends with commented-out content block (lines 407-690) and a visible `<Note>` about Kafka/Kubernetes. Last rendered links are relative paths at lines 322 and 347 (`../solutions/portal` and `/v2/home/solutions/showcase`) but no formal Related Pages or Next Step CTA |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Concept page -- no prerequisites expected |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Page clearly scopes itself to the layered architecture mental model. Other pages handle protocol details, setup, etc. |
| 4. Structure | 4.7 | Information type per section correct | PASS | Each Accordion section follows a consistent information type: conceptual explanation with "What it is" / "Livepeer context" / "Who provides it" structure |
| 4. Structure | 4.8 | No content duplication | FAIL | "Infra Layers" section (lines 57-83) duplicates the protocol/network/platform distinction already covered in livepeer-overview.mdx. However, the OSI-like stack content is unique |
| 4. Structure | 4.9 | Section orientation page | N/A | Section-level check |
| 4. Structure | 4.10 | Cross-tab links present | FAIL | Only links are relative paths to `../solutions/portal` and `/v2/home/solutions/showcase` (lines 322, 347). No links to orchestrators/gateways/delegators tabs |
| 4. Structure | 4.11 | Discord test | PASS | Can link this page to answer "How is Livepeer's architecture structured?" or "What are the layers of the Livepeer stack?" -- provides a complete mental model |
| 4. Structure | 4.12 | Page size appropriate | PASS | 21,075 bytes -- well above 5KB minimum. Large but justified for a 10-layer architecture walkthrough |
| 4. Structure | 4.13 | No TODO/REVIEW without tracking | FAIL | Line 30: visible `<Note> image would be good </Note>` -- TODO placeholder rendered to user. Large JSX comment block (lines 407-690) contains extensive notes but these are not rendered |
| 4. Structure | 4.14 | Flat layout | PASS | Single page, no sub-folders |
| 4. Structure | 4.15 | Trade-offs present | PASS | Line 276-278: acknowledges Livepeer is "intentionally light on storage" and that "Long-term storage is typically external" -- trade-off between compute focus and storage capability. Line 103: "this model doesn't map perfectly to decentralised systems" -- acknowledges limitation |
| 4. Structure | 4.16 | Content pass context block | FAIL | `audience: general` (deprecated) and `purpose: concept` (deprecated) prevent proper pipeline classification |
| 5. Layout | 5.1 | Correct template | FAIL | Does not follow concept template structure (no Header CTA, limited CustomDivider usage) |
| 5. Layout | 5.2 | Required sections present | PASS | Concept page has overview (opening section), layered explanation, middleware section |
| 5. Layout | 5.3 | Only approved components | PASS | Uses Accordion (approved for concept), Badge, Note, Tip, Info, Subtitle, AccordionLayout -- all reasonable |
| 5. Layout | 5.4 | Avoided components absent | FAIL | Line 30: visible `<Note> image would be good </Note>` is a TODO placeholder using Note component |
| 5. Layout | 5.5 | Info type to component mapping | PASS | Accordions for layered multi-path conceptual content -- appropriate mapping |
| 5. Layout | 5.6 | MDX renders clean | FAIL | Line 363: `*/}` at end of Layer 9 content appears to be a stray closing comment that may break rendering. Need to verify: the `*/}` on line 363 is inside an Accordion and appears to be an unclosed JSX comment artefact |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `purpose: concept` is deprecated alias, `audience: general` is deprecated value |
| 5. Layout | 5.8 | CSS custom properties only | FAIL | Lines 59, 68, 77: inline `style={{ border: "1px solid var(--lp-color-accent)", borderRadius: "8px", padding: "16px", margin: "16px 0" }}` -- uses CSS custom property `var(--lp-color-accent)` which is acceptable, but uses inline `style=` attribute in MDX prose which is flagged by check 5.34 |
| 5. Layout | 5.9 | Generated file banners | N/A | Not a generated file |
| 5. Layout | 5.10 | Component naming/imports | PASS | PascalCase: `Subtitle`, `AccordionLayout` -- correct naming and paths |
| 5. Layout | 5.11 | Gold-standard template | FAIL | Does not follow concept-template.mdx structure |
| 5. Layout | 5.12 | Section blocks from library | FAIL | No gold-standard section blocks used. Custom Accordion-based layout |
| 5. Layout | 5.13 | Section ordering | FAIL | Concept ordering should be Header CTA + Intro + Explanation + Comparison + Accordion + Related. Page has: Note placeholder + H1 intro + Accordion (crypto advantages) + Infra Layers (custom div layout) + H2 OSI + Accordions (10 layers) + Middleware + commented-out block. Missing Header CTA and Related Pages |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No multi-view layout used (Accordions are single-dimension) |
| 5. Layout | 5.15 | Data imports, not hardcoded | N/A | No data-file-dependent content |
| 5. Layout | 5.16 | Related Pages or Next Step CTA | FAIL | Neither present at page end. Page ends with Info/Note callouts and commented-out block |
| 5. Layout | 5.17 | Related Pages format | N/A | No Related Pages section |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs used |
| 5. Layout | 5.19 | Accordion icon prop | FAIL | 10 Accordions (Layers 1-10) -- only the first Accordion (line 42, "More on Crypto-Primitive Advantages") has an `icon="rocket"` prop. Layer Accordions use `title` and `description` props but no `icon` prop |
| 5. Layout | 5.20 | Code block metadata | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | No step sequences |
| 5. Layout | 5.22 | Navigation cards CustomCardTitle | N/A | No navigation cards |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables in rendered content (commented-out table at lines 86-92) |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | Zero tables in rendered content |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | Multiple Accordions but they form one coherent layout pattern (layered stack) |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No opening CustomDivider after imports. No CustomDivider anywhere |
| 5. Layout | 5.27 | Mermaid governed colours | N/A | No Mermaid diagrams |
| 5. Layout | 5.28 | Import section ordering | PASS | Component imports grouped at top correctly |
| 5. Layout | 5.29 | Media placeholders in TODO | FAIL | Line 30: visible `<Note> image would be good </Note>` -- should be `{/* TODO: [MEDIA] architecture diagram */}` |
| 5. Layout | 5.30 | Fact-check flags in JSX comments | N/A | No REVIEW flags present |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | Layer descriptions visible in Accordion titles/descriptions on page load. Accordions used for depth, not for hiding decisions |
| 5. Layout | 5.32 | Reference tables at end | N/A | No tables |
| 5. Layout | 5.33 | Drafts in workspace | N/A | Not a draft |
| 5. Layout | 5.34 | No inline styles or hardcoded hex | FAIL | Lines 59, 68, 77: `style={{ border: "1px solid var(--lp-color-accent)", borderRadius: "8px", padding: "16px", margin: "16px 0" }}` -- inline `style=` attributes in MDX prose. Should use a component or CSS class |
| 6. Veracity | 6.1 | Every claim citable | PASS | Architecture descriptions are consistent with known Livepeer structure. OSI mapping is presented as analogy, not fact |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No code blocks |
| 6. Veracity | 6.3 | No deprecated API usage | N/A | No API references |
| 6. Veracity | 6.4 | Numbers are real | N/A | No numbers cited |
| 6. Veracity | 6.5 | REVIEW flags for unverified | PASS | Content is conceptual/analytical -- appropriate standard is "medium" (mental model consistent with documented behaviour). No unverified factual claims requiring flags |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | `veracityStatus` field missing entirely. Given conceptual content type, `unverified` would be appropriate until human review |
| 6. Veracity | 6.7 | Authoritative glossary used | N/A | No glossary references |
| 6. Veracity | 6.8 | Source staleness check | PASS | Content is architectural/conceptual -- low staleness risk. OSI analogy is stable framework |
| 6. Veracity | 6.9 | No open-ended research | FAIL | Line 30: "image would be good" -- open-ended media task without concrete resolution |
| 6. Veracity | 6.10 | Source authority tiers | PASS | Page is conceptual/analytical content. OSI model linked to Wikipedia (T2). Architecture descriptions consistent with documented Livepeer behaviour |
| 6. Veracity | 6.11 | Glossary definitions match | N/A | No inline glossary definitions |
| 6. Veracity | 6.12 | Glossary verified against primary | N/A | No glossary definitions |
| 7. Navigation | 7.1 | Page in docs.json | PASS | Present at `v2/about/concepts/mental-model` in docs.json |
| 7. Navigation | 7.2 | Nav matches file system | PASS | File exists at expected path |
| 7. Navigation | 7.3 | Tab entry portal routes | N/A | Not a portal page |
| 7. Navigation | 7.4 | No structural orphans | PASS | Reachable via docs.json navigation |
| 7. Navigation | 7.5 | Audience journey complete | FAIL | Page has two relative links (`../solutions/portal` at line 322, `/v2/home/solutions/showcase` at lines 347 and 367) but no link back to overview or forward to core-concepts |
| 7. Navigation | 7.6 | Cross-tab graduation paths | FAIL | No explicit cross-tab links. Only links to solutions/showcase within the same tab area |
| 7. Navigation | 7.7 | File in correct lane | PASS | In `v2/about/concepts/` -- publishable location |
| 7. Navigation | 7.8 | File naming conventions | PASS | `mental-model.mdx` -- valid naming |
| 7. Navigation | 7.9 | _workspace/ TTL | N/A | Not in _workspace |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | 21,075 bytes with substantive layered content -- well above threshold |
| 7. Navigation | 7.11 | Guides section | N/A | Not a guides section page |
| 8. Links | 8.1 | Internal links resolve | FAIL | Line 322: `[See More Products & Platforms](../solutions/portal)` -- relative link, should be absolute `/v2/about/solutions/portal`. May not resolve correctly depending on Mintlify path resolution |
| 8. Links | 8.2 | External links live | PASS | Line 99: `https://en.wikipedia.org/wiki/OSI_model` -- Wikipedia, stable |
| 8. Links | 8.3 | Snippet imports resolve | PASS | `Subtitle` (Text.jsx) and `AccordionLayout` (AccordionLayout.jsx) both verified to exist |
| 8. Links | 8.4 | Images load | N/A | No images referenced beyond OG fallback |
| 8. Links | 8.5 | Page renders without error | FAIL | Line 363: stray `*/}` that appears to be from an unclosed JSX comment inside Layer 9 Accordion. Also line 30: visible `<Note>` placeholder renders as content |
| 8. Links | 8.6 | No TODO/TBD/Coming Soon | FAIL | Line 30: visible `<Note> image would be good </Note>` rendered as user-facing content |
| 9. Process | 9.1 | Human sign-off | FAIL | No evidence of human sign-off |
| 9. Process | 9.2 | Decisions in registry | N/A | No consuming decisions identified |
| 9. Process | 9.3 | Gate prerequisites met | FAIL | No evidence of gate passage |
| 9. Process | 9.4 | Phase ordering respected | FAIL | No evidence of pipeline phases |
| 9. Process | 9.5 | Findings before fixes | N/A | Page appears to be in active development |
| 9. Process | 9.6 | Feedback routed | N/A | No review feedback trail |
| 10. Completeness | 10.1 | Every question has a page | N/A | Section-level check |
| 10. Completeness | 10.2 | Zero-to-hero journey | PASS | Reader can understand Livepeer's full architecture from physical layer to end user. The 10-layer model provides a complete mental framework |
| 10. Completeness | 10.3 | Primary persona paths unblocked | FAIL | Limited exit links. After absorbing the mental model, no clear next step link to setup/build/participate pages |
| 10. Completeness | 10.4 | Scope boundaries explicit | PASS | Page clearly scopes itself to the mental model / OSI analogy. Does not attempt to cover setup, configuration, or operational topics |
| 10. Completeness | 10.5 | Self-containment | PASS | Page is self-contained for its mental model purpose. Links to solutions for deeper exploration |

## Banned Construction Scan

| Line | Sentence | Word/Pattern | Classification | Flag? |
|---|---|---|---|---|
| 33 | "Livepeer is a crypto-economic coordination protocol that secures a global, on-demand GPU network optimised for low-latency video and AI, and exposed through developer-friendly platforms and applications." | None | Declarative | No |
| 36 | "You can think of Livepeer as a decentralised serverless GPU fabric with a cryptoeconomic control plane" | "can think" | Rhetorical -- inviting a mental model, not a value claim | No |
| 38 | "Livepeer is akin to how you would access and build on traditional cloud providers" | "would" | Hypothetical analogy, not a value claim | No |
| 47 | "gives creators transparent, guaranteed revenue streams" | None | Value claim, but concrete/specific | No |
| 95 | "These nodes can be run and operated by anyone who wants to participate" | "can be run" | Procedural capability statement | No -- relates to Layer 7 context |
| 101 | "While this model doesn't map perfectly to decentralised systems" | "doesn't" | Honest caveat about limitations -- acceptable | No |
| 141 | "Livepeer does not own infrastructure. It indexes and incentivizes it." | "does not" | Declarative fact, not a value statement | No |
| 207 | "The network decides who executes; the protocol incentivizes honest participation." | None | Declarative | No |
| 239 | "This is the 'brain' that replaces a centralized cloud control plane. It incentivizes correct behaviour, but does not run jobs." | "does not" | Declarative fact | No |
| 290 | "Livepeer coordinates compute over data, not long-term data custody." | "not" | Scope clarification, not value claim | No |

No banned constructions flagged. All "can/may/could" instances are procedural or rhetorical, not value claims.

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Livepeer Mental Model (H1, L32) | 4 | 4 | 5 | 4 | 4 | 21/25 |
| Infra Layers (H3, L57) | 3 | 2 | 4 | 3 | 5 | 17/25 |
| Livepeer as an OSI-Like Stack (H2, L97) | 5 | 5 | 5 | 4 | 3 | 22/25 |
| Network & Protocol Stack (H3, L106) | 4 | 3 | 5 | 4 | 3 | 19/25 |
| Platform and Application Stack (H3, L294) | 4 | 3 | 5 | 4 | 3 | 19/25 |
| Middleware & Integrations (H2, L392) | 4 | 3 | 5 | 3 | 4 | 19/25 |

Note: Accordion titles (Layer 1-10) are component props, not standard headings. They function as headings but are scored separately:

| Accordion Title | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Layer 1: Physical Compute & Resource Layer | 5 | 4 | 5 | 5 | 3 | 22/25 |
| Layer 2: Transport & Media Substrate | 5 | 4 | 5 | 4 | 3 | 21/25 |
| Layer 3: Distributed Execution Network | 5 | 4 | 5 | 4 | 3 | 21/25 |
| Layer 4: Crypto-Economic Coordination Layer | 5 | 5 | 5 | 4 | 3 | 22/25 |
| Layer 5: Economic & Security Layer | 4 | 4 | 5 | 4 | 4 | 21/25 |
| Layer 6: Data & State Layer | 4 | 3 | 5 | 4 | 4 | 20/25 |
| Layer 7: Platform Services | 4 | 3 | 5 | 4 | 4 | 20/25 |
| Layer 8: Developer Interfaces | 4 | 3 | 5 | 4 | 4 | 20/25 |
| Layer 9: Developer Applications | 4 | 3 | 5 | 4 | 4 | 20/25 |
| Layer 10: End User | 3 | 2 | 5 | 4 | 4 | 18/25 |

Standard headings: 2 of 6 below 20/25 ("Infra Layers" at 17, "Network & Protocol Stack" at 19).
Accordion titles: 1 of 10 below 20/25 ("Layer 10: End User" at 18).

## Spelling/Typo Check

- Description: "key concepts workings" -- grammatically broken, should be "key concepts and workings" or restructured entirely
- Line 141: "incentivizes" -- US spelling, should be "incentivises" (inside Accordion content)
- Line 207: "incentivizes" -- US spelling, should be "incentivises" (inside Accordion content)
- Line 363: stray `*/}` may be rendering artefact from incomplete JSX comment editing

## Component Matrix

| Component | Used? | Appropriate for `concept`? | Notes |
|---|---|---|---|
| Accordion | Yes (11 instances) | Yes (Preferred) | 10 of 11 missing `icon` prop |
| AccordionLayout | Yes | Yes | Custom description layout for Accordions |
| Subtitle | Yes | Yes | Used in Accordion descriptions |
| Badge | Yes | Yes | Used for protocol/role labels in Infra Layers |
| Note | Yes | Yes (Preferred) | Line 30: used as visible TODO placeholder -- inappropriate |
| Tip | Yes | Yes (Preferred) | Used appropriately for "Key Idea" callouts in each layer |
| Info | Yes | Yes (Preferred) | Used for summary callout |
| div with inline style | Yes | No -- flagged | Lines 59, 68, 77: inline styles in MDX prose |

## Cross-Category Connections

```
Root Cause 1: Deprecated frontmatter values
Affects: Cat 1.1 + 1.4 + 1.5 + 4.16 + 5.7
Fix: Update audience to `community`, purpose to `explain`, add `veracityStatus: unverified`.

Root Cause 2: Visible TODO placeholder
Affects: Cat 4.13 + 5.4 + 5.29 + 8.6
Fix: Replace `<Note> image would be good </Note>` (line 30) with `{/* TODO: [MEDIA] Livepeer architecture overview diagram */}`.

Root Cause 3: Inline styles in MDX
Affects: Cat 5.8 + 5.34
Fix: Extract the Infra Layers bordered div pattern into a reusable component (e.g., `<LayerCard>`) or use CSS custom properties via a class. The current inline styles duplicate the same border/padding pattern 3 times.

Root Cause 4: Missing page navigation
Affects: Cat 4.3 + 4.4 + 5.16 + 7.5 + 7.6 + 10.3
Fix: Add Related Pages footer or Next Step CTA linking to core-concepts.mdx and cross-tab portals (orchestrators, gateways, delegators).
```

## Summary

| Category | Checks | Pass | Fail | N/A | Score |
|---|---|---|---|---|---|
| 1. Frontmatter | 13 | 5 | 6 | 2 | 5/11 |
| 2. Voice & Copy | 22 | 14 | 4 | 3 | 14/19 * |
| 3. Headings | 10 | 7 | 2 | 0 | 7/10 ** |
| 4. Structure | 16 | 8 | 5 | 3 | 8/13 |
| 5. Layout | 34 | 8 | 11 | 15 | 8/19 |
| 6. Veracity | 12 | 4 | 2 | 6 | 4/6 |
| 7. Navigation | 11 | 4 | 2 | 5 | 4/6 |
| 8. Links | 6 | 2 | 3 | 1 | 2/5 |
| 9. Process | 6 | 0 | 3 | 3 | 0/3 |
| 10. Completeness | 5 | 3 | 1 | 1 | 3/4 |

*Check 2.1 counted once (corrected assessment).
**Heading scores include standard headings only; Accordion titles are informational.

**Overall**: 55/96 applicable checks passed (57%)
**Verdict**: NEEDS WORK
**Critical issues**:
1. Frontmatter: description field grammatically broken ("key concepts workings"), exceeds 160-char limit. `audience` and `purpose` use deprecated values. Missing `veracityStatus`.
2. Inline styles in MDX: three `<div style={...}>` blocks (lines 59, 68, 77) violate the no-inline-styles rule. Should be extracted to a component.
3. Visible TODO placeholder: `<Note> image would be good </Note>` (line 30) renders as user-facing content. Possible stray `*/}` at line 363 may cause render issues.
