# Review: landscape.mdx

**Page**: `v2/developers/concepts/landscape.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A1
**pageType (from frontmatter)**: concept
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: explain
**Bytes**: 8,677
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | title/sidebarTitle/description/pageType/audience/purpose/complexity/lifecycleStage/keywords/OG block all present (lines 2–28). |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` (line 15). |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | No `pageVariant` field; allowed. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: explain` (line 17). |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 16). |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: beginner` (line 18). |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` (line 19). |
| 1. Frontmatter | 1.8 | veracityStatus present and honest | PASS | `veracityStatus: verified` (line 27); `lastVerified: 2026-05-12` (line 26). |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Field not present; optional. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Field not present; optional. |
| 1. Frontmatter | 1.11 | description subject-first, ≤160 chars, no "this page", UK English | FAIL | Line 4–5: "Five developer mental models for the Livepeer network: AI inference, video platform, compute primitives, live-video-first, and protocol. Each maps to a network-direct surface." Length is ~193 chars — exceeds the 160-char SEO ceiling. Subject-first OK. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present (lines 20–24). |
| 1. Frontmatter | 1.13 | keywords specific and search-aligned | MIXED | "livepeer network" and "developer landscape" are generic; "mental model", "byoc", "real-time video" are specific (lines 6–14). |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | MIXED | `audience: developer` set, but the page reads as a discovery/orientation page — closer to `builder` register (mental models, "Coming From OpenAI/Mux/Modal"). Suggests audience may be miscoded. |
| 2. Voice & Copy | 2.1 | UK English throughout | PASS | No US-spelling matches outside protected zones (`color:` in CSS, JSX prop names). |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No matches for `effectively / essentially / basically / various / several / clearly / obviously / meaningful / significant`. |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No matches for `this page covers / rather than / as mentioned / depends on various / etc.`. |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | No `not [X]` value claims; no `can/may` hedging in value claims. |
| 2. Voice & Copy | 2.5 | Opening order subject-first | PASS | Line 40 opens "Livepeer is a decentralised compute network for video and AI." Subject-first, fact-led. |
| 2. Voice & Copy | 2.6 | Paragraph discipline | PASS | Each H2 section opens with system fact, ends with the activation moment. |
| 2. Voice & Copy | 2.7 | Audience register matches token | FAIL | Token says `developer`. Content reads as `builder` register: hosted-API comparisons ("Coming From OpenAI/Mux/Modal"), no code blocks, no SDK method names. See 1.14. |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | No "with just a few lines", "as you know", "built on blockchain technology". |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | Claims like "Eleven native pipelines ship with `ai-runner`" (line 94) are concrete. |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | Body opens with a fact, not "If" / "When". |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | BYOC, NaaP terms used correctly. |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | Zero `—` characters anywhere in the file. |
| 2. Voice & Copy | 2.13 | Entity-led voice | FAIL | Five of the H2 bodies open with "You're treating Livepeer as…" (lines 48, 56, 64, 72, 80). This is reader-addressed, not system-fact or API-behaviour entity-led. Per check 2.13, paragraphs should start with system fact. Acceptable as a stylistic device for the mental-model framing, but rubric is strict. |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No "can help" / "allows you to" / "enables you to". |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | Description does not start with "This" / "Learn" / "Discover". |
| 2. Voice & Copy | 2.16 | Zero deprecated terms (Broadcaster) | MIXED | Line 56 "in broadcaster mode"; line 58 "configured as a broadcaster"; line 74 "in broadcaster mode"; line 76 "between broadcaster tab". `broadcaster` is used as a `go-livepeer` runtime-mode flag (architectural), not as a synonym for Gateway. Acceptable under the conventional reading of 2.16 (mode name, not entity name), but reader confusion risk is real because Gateway/Broadcaster historically overlapped. INFO. |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | Orchestrator, Gateway, LPT, Arbitrum One used as canon. |
| 2. Voice & Copy | 2.18 | Spell check passes | N/A | Not run live in review; visual scan clean. |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | "BYOC", "trickle protocol", "Arbitrum One" match canonical. |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | Developer-tab terminology consistent. |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | MIXED | `BYOC` first appears line 40, defined inline on line 66 ("a container contract, a capability ID…"). 26 lines is too far between first-use and definition for a beginner page. `LL-HLS` (line 58) never defined. `Webhooks` (line 56) never defined. `WebRTC` (lines 58, 72) never defined. |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | "Hosted Solutions", "Solutions tab", "trickle protocol" consistent. |
| 2.D | 2.D1 | Code-first opening on instruction/tutorial pages | N/A | Concept page; no body code. |
| 2.D | 2.D2 | Every function/API/method named in prose has code/link | FAIL | `@livepeer/react` Player (line 58); `<Broadcast.Root>` and `<Player.Root>` (line 74); `@muxionlabs/byoc-sdk` (line 66); `@livepeer/ai` (implied throughout). None linked to repo or code example. |
| 2.D | 2.D3 | Versions stated explicitly | FAIL | "PR #3641" is named (line 66) but the protocol version (`go-livepeer` v0.7.x?) is not stated. `@livepeer/react` version not pinned. |
| 2.D | 2.D4 | Error states and edge cases in main content | N/A | No procedural content. |
| 2.D | 2.D5 | No prose explanations of self-evident code | N/A | No code blocks. |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | Sober throughout; no "powerful", "revolutionary". |
| 2.D | 2.D7 | Note/Info not used for primary content | PASS | One `<Tip>` in header CTA (line 35); appropriate. |
| 3. Headings | 3.1 | Every heading scores ≥20/25 | MIXED | See Heading Score Table. 9/10 H2s pass; "After Choosing a Model" is a marginal pass at ~20/25. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No `Basics / Notes / How It Works / See Also / Conclusion / What's Next`. No `Overview / Details / Summary / Background`. |
| 3. Headings | 3.3 | No literal contrast labels (X vs Y) | PASS | "Coming From OpenAI / Mux / Modal" is migration framing, not contrast. |
| 3. Headings | 3.4 | Domain-anchor rule applied | PASS | Every heading carries a domain noun ("Pipeline", "Platform", "Compute", "Mental Model"). |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | "AI Inference Mental Model" not "Text-to-image, image-to-video". |
| 3. Headings | 3.6 | Title well-formed (1–3 words, concept-derived) | PASS | `title: 'Developer Landscape'`. Two words, concept-derived. |
| 3. Headings | 3.7 | Editorial choice | PASS | Mental-model framing is a deliberate editorial pattern. |
| 3. Headings | 3.8 | Per-pageType naming style applied | PASS | concept = governing-concept; headings deliver that. |
| 3. Headings | 3.9 | Per-audience register | MIXED | Mental-model register suits `builder`; the `audience: developer` token in frontmatter is the mismatch (see 1.14). |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | Duplicate of 3.4. |
| 4. Structure | 4.1 | One purpose, one audience, one job | MIXED | Job is clear (orient by mental model). Audience oscillates between `developer` (token) and `builder` (content). |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer pick the mental model that fits their use case." Implied throughout. |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | PASS | Page is concepts/landscape; prev = portal/index, next = concepts/infra-stack. After-section link (line 120) hands off to infra-stack. |
| 4. Structure | 4.4 | No dead ends | PASS | Five mental models → five quickstarts; "After Choosing a Model" CardGroup at end. |
| 4. Structure | 4.5 | Prerequisites stated or linked | N/A | Orientation page; no prerequisites needed. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | "Hosted Solutions sit above; the Developers tab covers everything below" (line 40, line 96). "Protocol Mental Model: The Developers tab is not your home" (line 80). |
| 4. Structure | 4.7 | Information type correct | PASS | Conceptual / analytical, matches `concept` pageType. |
| 4. Structure | 4.8 | No content duplication | MIXED | Line 96 ("Hosted Solutions wrap a gateway…") and the intro line 40 say similar things in different words. Layer Disambiguation section overlaps with About-tab "actors-and-capabilities". Acceptable for an orientation page; flag as INFO. |
| 4. Structure | 4.9 | Section orientation entry present | PASS | This IS the orientation page for the concepts subgroup. |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | FAIL | Two cross-tab references: Solutions (line 96, prose only), About (line 82, LinkArrow). Missing: Orchestrators tab, Gateways tab self-host, Community tab for governance. The cross-tab footer CardGroup at line 124 has zero cross-tab links (both Cards point inside concepts/). |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "which mental model fits me?" cleanly. Does NOT answer "what should I do next?" with depth — line 120 + the 2-Card After-Choosing block is the only handoff. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 8,677 bytes — substantive concept page. |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | PASS | No `TODO` / `TBD` / `Coming Soon` / `REVIEW:` matches. |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | No nested folder content; H2-flat. |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | FAIL | The page tells you which model fits but not what you *give up* by picking it. AI Inference Mental Model: no statement of cost ceiling, rate limits, or model-availability variance. Compute Primitives: no statement of GPU availability variance or settlement delay. Video Platform: no statement on encode latency baseline. Live Video: no statement on dropout/reconnect behaviour. This is the single biggest product-forward gap. |
| 4. Structure | 4.16 | Content-pass context block completable | PASS | Clear purpose, audience, scope. |
| 4. Structure | 4.17 | Every code block has language tag | N/A | No fenced code blocks in body. |
| 4. Structure | 4.18 | Code-first opening on instruction/tutorial | N/A | concept page. |
| 4. Structure | 4.19 | Error states in main content | N/A | No procedural content. |
| 4. Structure | 4.20 | Every function/API/method named has code/link | FAIL | Duplicate of 2.D2. |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | MIXED | concept pageType matches template structure; no `pageVariant` declared (likely `overview` given the orientation role). |
| 5. Layout | 5.2 | Required sections present per pageType | PASS | Intro + H2 governing-concept body + Related Pages handoff (CardGroup at line 124). |
| 5. Layout | 5.3 | Only approved components used | PASS | `<Tip>`, `<CenteredContainer>`, `<CustomDivider>`, `<LinkArrow>`, `<CardGroup>`, `<Card>` — all approved. |
| 5. Layout | 5.4 | Avoided components absent | PASS | No `<PreviewCallout>` or banned wrappers. |
| 5. Layout | 5.5 | Information-type → component mapping | MIXED | Five mental models cry out for `<Tabs>` (one Tab per model) or an `<AccordionGroup>` decision panel. Instead presented as five repeated H2s. See Layer 2 depth analysis. |
| 5. Layout | 5.6 | MDX renders clean | PASS | (Assumed — no obvious JSX errors; not live-verified.) |
| 5. Layout | 5.7 | No old-schema frontmatter values | PASS | All values canonical. |
| 5. Layout | 5.8 | CSS custom properties only | PASS | No inline `style=` / no hex literals in body. |
| 5. Layout | 5.9 | Generated file banners intact | N/A | Not a generated file. |
| 5. Layout | 5.10 | Component naming conventions | PASS | PascalCase, correct imports. |
| 5. Layout | 5.11 | Gold-standard template followed | MIXED | Concept gold-standard template uses opening `<CustomDivider />` after imports; this page uses `---` Markdown HR (line 38) instead. Inconsistent with the rest of the repo. |
| 5. Layout | 5.12 | Section blocks from gold-standard | PASS | Standard intro → body → CardGroup. |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | Intro → H2 body → footer. |
| 5. Layout | 5.14 | Multi-view layout rules | N/A | No variant layout. |
| 5. Layout | 5.15 | Data imports used | FAIL | Persona names ("AI Inference / Video Platform / Compute Primitives / Live Video / Protocol"), gateway URLs (`dream-gateway.livepeer.cloud`), repo references (`muxionlabs/byoc-example-apps`, `@muxionlabs/byoc-sdk`) and PR number (PR #3641) are hardcoded. If `snippets/data/developers/` has personas or repos data file, this should import. (Note: `infra-stack.mdx` shares the persona list verbatim → duplication.) |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | FAIL | Line 122 H2 "After Choosing a Model" with `<CardGroup cols={2}>` is a quasi-Related-Pages section but uses raw `<CardGroup>` not `<Columns cols={2}>`, and uses bare `<Card title=...>` not `<CustomCardTitle>`. Fails 5.17 format. The H2 heading "After Choosing a Model" is also non-standard — rubric exemption only covers "Related Pages". |
| 5. Layout | 5.17 | Related Pages format | FAIL | Missing `<Columns cols={2}>` wrapper (uses `<CardGroup cols={2}>`). Missing `<CustomCardTitle icon ... horizontal>` (uses bare `<Card title icon href>`). Card descriptions OK length (≤10 words). |
| 5. Layout | 5.18 | Tab icon prop present | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop present | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block icon + title | N/A | No fenced code blocks. |
| 5. Layout | 5.21 | StyledSteps used, not raw Steps | N/A | No Steps. |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | FAIL | Lines 124–131 use bare `<Card title="..." icon="..." href="...">` — should use `<CustomCardTitle icon="..." title="..." horizontal />` inside the Card. |
| 5. Layout | 5.23 | Tables use StyledTable | N/A | No tables. |
| 5. Layout | 5.24 | Max 1–2 tables per page | N/A | No tables. |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | One CardGroup. |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Line 38 uses `---` (Markdown HR) instead of opening `<CustomDivider />`. Lines 44, 84, 98, 118 use `<CustomDivider />` between H2s appropriately. Missing one before the line 124 footer. |
| 5. Layout | 5.27 | Mermaid uses governed colours | N/A | No diagrams on this page. |
| 5. Layout | 5.28 | Import section ordering | PASS | Element imports first; no data imports needed in current form. |
| 5. Layout | 5.29 | Media placeholders in TODO JSX | N/A | No media. |
| 5. Layout | 5.30 | Fact-check flags as REVIEW JSX | N/A | None present. |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | PASS | All five mental models are flat H2s, not hidden in Tabs/Accordions. |
| 5. Layout | 5.32 | Reference tables at end | N/A | No reference tables. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | This is the live page. |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | PASS | None. |
| 6. Veracity | 6.1 | Every factual claim citable | FAIL | "eleven native pipelines" (line 94) — source? `aiModels.json`? `seven more native pipelines" (line 48) — same. "12 plugins live" referenced in infra-stack but landscape says "BYOC … per-second compute billing under PR #3641" without linking the PR. |
| 6. Veracity | 6.2 | Code tested | N/A | No code. |
| 6. Veracity | 6.3 | No deprecated API usage | PASS | No code; nothing to deprecate. |
| 6. Veracity | 6.4 | Numbers are real | MIXED | "eleven" and "seven more" need a source citation. "sub-three-second" glass-to-glass (line 76) — what's the measured baseline? |
| 6. Veracity | 6.5 | REVIEW flags for unverified claims | N/A | No flags present; claims should ideally have citations not flags. |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | Set to `verified` — but several claims (pipeline counts, PR refs, sub-3s latency) lack source links, so the weakest section is not strictly verified. |
| 6. Veracity | 6.7 | Uses resources/glossary, not compendium | PASS | First-use terms are inline-defined, not cross-linked to compendium. |
| 6. Veracity | 6.8 | Source staleness check | FAIL | No SDK or binary versions named anywhere. `go-livepeer` mode names referenced without version pin. |
| 6. Veracity | 6.9 | No open-ended "needs more research" | PASS | None present. |
| 6. Veracity | 6.10 | Source authority tiers respected | MIXED | Repos referenced (T1) but not linked. Community sources OK where used. |
| 6. Veracity | 6.11 | Glossary definitions match universal-terms | PASS | Inline definitions consistent with `universal-terms.md`. |
| 6. Veracity | 6.12 | Glossary verified against veracity-sources | N/A | No glossary block on this page. |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | `v2/developers/concepts/landscape` at docs.json line 2497. |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | PASS | Confirmed. |
| 7. Navigation | 7.3 | Portal routes to section | PASS | Section accessible from concepts subgroup. |
| 7. Navigation | 7.4 | No structural orphans | PASS | Linked to from at least one parent. |
| 7. Navigation | 7.5 | Audience journey complete (5 personas) | PASS | All five personas have explicit mental models. |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation paths | FAIL | Only two (Solutions, About); missing Orchestrators, Gateways, Community. See 4.10. |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published in `v2/`. |
| 7. Navigation | 7.8 | File naming conventions | PASS | `landscape.mdx`. |
| 7. Navigation | 7.9 | _workspace TTL compliance | N/A | This is the live file. |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | 8KB substantive. |
| 7. Navigation | 7.11 | Resources sub-structure correct | N/A | Not a resources page. |
| 7. Navigation | 7.12 | Guides scope correct | N/A | Not a guide. |
| 8. Links & Rendering | 8.1 | All internal links resolve | PASS | Verified: ai-jobs-direct-quickstart.mdx, transcoding-direct-quickstart.mdx, byoc-quickstart.mdx, low-latency-live-streaming-app.mdx, alt-gateways/overview.mdx, infra-stack.mdx, repo-map.mdx, /v2/about all exist. |
| 8. Links & Rendering | 8.2 | All external links live | N/A | No external URLs on this page. |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | PASS | Three imports — Links, Divider, Containers — all standard. |
| 8. Links & Rendering | 8.4 | All images load | N/A | OG image is fallback, page has no inline images. |
| 8. Links & Rendering | 8.5 | Page renders without error | PASS | Assumed (not live-verified in this review). |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | PASS | None. |
| 9. Process & Governance | 9.1 | Human sign-off recorded | N/A | Outside this review's scope. |
| 9. Process & Governance | 9.2 | Consuming decisions in registry | N/A | Outside this review's scope. |
| 9. Process & Governance | 9.3 | Gate prerequisites met | N/A | Outside this review's scope. |
| 9. Process & Governance | 9.4 | Phase ordering respected | N/A | Outside this review's scope. |
| 9. Process & Governance | 9.5 | Findings gathered before fixes | PASS | This review is findings-only; no edits. |
| 9. Process & Governance | 9.6 | Feedback routed | N/A | Routing to fixer is downstream. |
| 10. Content Completeness | 10.1 | Every question in tab's job list has a page | PASS | Landscape answers "which mental model fits me?" |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | MIXED | Landscape → quickstart per model: PASS. But no link from each mental model to a deeper concept page (e.g., AI Inference → ai-pipelines.mdx). |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | PASS | Five paths named, each has a quickstart link. |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | PASS | Lines 40, 80, 96 state Solutions vs Developers boundary. |
| 10. Content Completeness | 10.5 | Self-containment holds | PASS | Page reads end-to-end without prereqs. |
| 10. Content Completeness | 10.6 | Code samples have working language path | N/A | No code on this page. |
| 10. Content Completeness | 10.7 | Persona-specific guides present | N/A | This page routes to them. |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Developer Landscape" | PASS | |
| sidebarTitle | Yes | "Landscape" | PASS | |
| description | Yes | "Five developer mental models for the Livepeer network: AI inference, video platform, compute primitives, live-video-first, and protocol. Each maps to a network-direct surface." | FAIL | ~193 chars — over the 160-char ceiling (check 1.11). |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | FAIL | Content is builder-register; see 1.14 / 2.7. |
| purpose | Yes | explain | PASS | |
| complexity | Yes | beginner | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | 7 keywords | MIXED | "livepeer network" / "developer landscape" generic; rest specific. |
| og:image | Yes | /snippets/assets/site/og-image/en/developers.png | PASS | |
| og:image:alt | Yes | "Livepeer Docs social preview image for Developers" | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | Yes | verified | MIXED | See 6.6 — claim citations are weak. |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | PASS | |
| pageVariant | No | — | INFO | Should declare `overview` for a portal-style concept page. |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (4×) | Required | — | Opening `---` Markdown HR (line 38) instead of `<CustomDivider />`. Inconsistent. Internal dividers correct. Missing one before line 124 footer. |
| `<Tabs>` / `<Tab icon>` | No | — | Yes for 5-variant content | Five mental models would benefit from `<Tabs>` switch or `<AccordionGroup>` decision panel. |
| `<StyledSteps>` | No | N/A | — | Not a procedural page. |
| `<Card>` / `<Columns cols={2}>` Related Pages | MIXED | Required | — | Footer uses `<CardGroup cols={2}>` not `<Columns cols={2}>`. H2 heading "After Choosing a Model" non-standard; should be "Related Pages". |
| `<CustomCardTitle icon ... />` | No | Required inside nav `<Card>` | — | Footer cards use bare `title=` and `icon=` props directly on `<Card>`. Fails 5.17 + 5.22. |
| Fenced code with icon + title | None present | N/A | — | |
| `<Note>` / `<Tip>` / `<Warning>` | `<Tip>` line 35 | — | OK | Acceptable header CTA. |
| `<Accordion>` / `<Accordion icon>` | No | — | Recommended | Five mental models would benefit from `<AccordionGroup>` decision-tree below intro. |
| `<StyledTable>` | No | N/A | — | |
| `<LinkArrow>` | Yes (7×) | — | Approved element | Used for in-line CTAs to quickstarts. |
| `<CenteredContainer preset="readable90">` | Yes | — | Approved | Wraps header `<Tip>`. |

## Cross-page duplication and link gaps

- **OVERLAP**: The persona/model framing in landscape.mdx (five H2 sections, lines 46–82) overlaps the persona framing in `infra-stack.mdx` (five Persona H2 sections, lines 69–432). Same five archetypes, different presentation. Should share a `personas.json` data file or one should reference the other rather than re-listing.
- **OVERLAP**: "Hosted Solutions" framing (line 40, 96) overlaps the boundary statement on `about/concepts/livepeer-stack.mdx` and `solutions/portal.mdx`. Acceptable for an orientation page but should be canonicalised in one place.
- **LINK GAPS**: AI Inference Mental Model (lines 46–52) does not link to `build/ai-and-agents/ai-pipelines.mdx` or `model-support.mdx`. Compute Primitives section does not link to `build/compute/byoc/overview.mdx`. Live Video does not link to `build/video/live-events.mdx`. Video Platform does not link to `build/video/ingest-and-playback.mdx`. Each mental model section ends with a quickstart link but no deeper concept link.
- **LINK GAPS**: No Orchestrators tab link, no Gateways tab link, no Community tab link. Only About and (implicit) Solutions.
- **LINK GAPS**: Upstream repos named in prose (`go-livepeer`, `@livepeer/react`, `@muxionlabs/byoc-sdk`, `ai-runner`) but never linked. Compare with repo-map.mdx which links them — these two pages should cross-reference.
- **STRANDED**: A reader who picks "Protocol Mental Model" (line 78) is told "The Developers tab is not your home" and pointed to About — but only via a generic /v2/about link. No specific entry route is offered.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | (CSS `color:` / JSX prop names ignored as protected zones) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | (No `If you want to…` body phrasing) |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs (project rule 3) | 3 acceptable | line 40: "Hosted Solutions like Studio and Daydream sit above"; line 50: "gateways operated by Studio or other Solutions providers"; line 56: "The hosted-API closest fit is Studio (documented in Solutions)". All disambiguation/routing — acceptable. INFO. |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms (Broadcaster) | 4 mode-context | lines 56, 58, 74, 76. Used as `go-livepeer` runtime-mode flag, not as gateway-synonym. INFO. |
| Reader-addressed openings | 5 | "You're treating Livepeer as…" (lines 48, 56, 64, 72, 80). FAIL 2.13 (entity-led voice). |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| AI Inference Mental Model | 5 | 4 | 5 | 5 | 4 | 23 |
| Video Platform Mental Model | 5 | 4 | 5 | 5 | 4 | 23 |
| Compute Primitives Mental Model | 5 | 4 | 5 | 5 | 4 | 23 |
| Live Video Mental Model | 5 | 4 | 5 | 5 | 4 | 23 |
| Protocol Mental Model | 5 | 4 | 5 | 5 | 4 | 23 |
| Layer Disambiguation | 5 | 5 | 5 | 4 | 5 | 24 |
| Coming From OpenAI | 4 | 4 | 4 | 5 | 5 | 22 |
| Coming From Mux | 4 | 4 | 4 | 5 | 5 | 22 |
| Coming From Modal or RunPod | 4 | 4 | 4 | 5 | 5 | 22 |
| After Choosing a Model | 3 | 3 | 4 | 4 | 5 | 19 — FAIL |

Title "Developer Landscape": 5/4/5/5/5 = 24 PASS.

## Code Block Audit

No fenced code blocks in body. N/A for 4.17 / 5.20.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The page successfully tells the reader which of five mental models matches their use case, but it does not deliver the next-most-important question: *what does each model cost me, and what are the trade-offs?* A developer who picks "AI Inference Mental Model" still does not know what they give up by not picking BYOC. Activation-moment is named (line 52: "your first successful API call") but the cost of getting there is hidden.
- **Fix step:** After line 84 (end of five-model body), before "Layer Disambiguation", add a single comparison `<StyledTable>` with columns: `Model | Activation cost | Best for | Not for | Graduation path`. Five rows, one per model. Replace the duplicated three "Coming From X" sections with that one table — the migration text is too prose-heavy for orientation work.
- **Source/exemplar:** `v2/gateways/concepts/business-model.mdx` uses a five-column trade-off table at section start; `v2/about/concepts/livepeer-stack.mdx` uses a comparison table for actors. `.claude/references/layout/best-practice.md` "Decision panels" pattern.

### Layer 2 — Composition
- **Gap:** Five mental-model H2s structurally identical (entry surface → activation moment → quickstart link), but rendered as five flat prose sections. This is the canonical use case for `<Tabs>` or `<AccordionGroup>` decision-panel. The reader has to scroll five times to compare; with Tabs they can toggle and decide.
- **Fix step:** Replace lines 46–82 (five `## Mental Model` sections) with a `<Tabs>` block: `<Tab icon="brain" title="AI Inference">` / `<Tab icon="video" title="Video Platform">` / `<Tab icon="cube" title="Compute Primitives">` / `<Tab icon="signal-stream" title="Live Video">` / `<Tab icon="cubes-stacked" title="Protocol">`. Each Tab body contains exactly what the H2 body contains today. Keep the Layer Disambiguation H2 below as flat prose.
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx` "Tabs for variants" + component-matrix.md concept-table line "`<Tabs>` for variants — Recommended — When concept has multiple variants (e.g. workload types)".

### Layer 3 — Cross-page integration
- **Gap:** Each mental-model section terminates at a single quickstart link. A reader who has picked the Compute Primitives model has six pages they need to graduate to (`build/compute/byoc/overview`, `build/compute/byoc/architecture`, `guides/transport/trickle-protocol`, `build/plugins-and-extensions/overview`, `guides/payments`, `repo-map`). The page should offer the *graduation chain* per model, not just an activation link.
- **Fix step:** Inside each Tab body (per Layer 2 fix), append a `<Columns cols={2}>` mini-card-pair with two next pages per model. AI Inference → `build/ai-and-agents/ai-pipelines` + `build/ai-and-agents/model-support`. Compute → `build/compute/byoc/overview` + `guides/transport/trickle-protocol`. Live Video → `build/video/live-events` + `build/video/codec-support`. Video Platform → `build/video/ingest-and-playback` + `build/video/vod-and-recording`. Protocol → `/v2/about` + `/v2/orchestrators`.
- **Source/exemplar:** `v2/about/concepts/livepeer-stack.mdx` ends each section with a `<Columns cols={2}>` mini-CTA pair. `.claude/references/layout/best-practice.md` "Multi-Path Layout Pattern".

### Layer 4 — Veracity and source authority
- **Gap:** Three load-bearing factual claims are not sourced. Line 48: "eleven more native pipelines" — should cite `livepeer/ai-runner` `aiModels.json`. Line 66: "per-second compute billing under PR #3641" — should link the PR. Line 76: "sub-three-second glass-to-glass" — should cite the latency measurement source (Tutorials repo? Frameworks doc?). `veracityStatus: verified` is overclaimed.
- **Fix step:** (a) On line 48, replace "Text-to-image, image-to-video, audio-to-text, LLM completions, and seven more native pipelines" with "[Eleven native pipelines](https://github.com/livepeer/ai-runner/blob/main/aiModels.json)". (b) On line 66, change "PR #3641" to "[PR #3641](https://github.com/livepeer/go-livepeer/pull/3641)". (c) On line 76, append "(measured in `tutorials/low-latency-live-streaming-app`)" or link a tested-latency report.
- **Source/exemplar:** `livepeer/ai-runner` repo `aiModels.json`; `livepeer/go-livepeer` PR list; the canonical exemplar `v2/about/network/architecture.md` reviewed file cites every numerical claim.

### Layer 5 — Product-forward depth
- **Gap:** The page reads like a wiki on mental models, not a product page that helps a developer pick *Livepeer over its competitors*. The "Coming From" sections (lines 100–116) gesture toward this but do not say *why* Livepeer is the right answer when leaving OpenAI/Mux/Modal — they only describe what changes. Missing the "what makes this worth the migration" hook. Also missing: maturity signal per model (Beta? Production-tested? How many integrations live today?), cost expectation per model, "when not to use Livepeer for X" trade-off.
- **Fix step:** (a) Add a `<Badge>` row near the top of each mental-model Tab body: `<Badge>Production</Badge>` for AI Inference; `<Badge>Production</Badge>` for Video Platform; `<Badge>Beta</Badge>` for Compute Primitives + Live Video (per Wonderland's "BYOC is per-second billing under PR #3641" framing); `<Badge>Reference</Badge>` for Protocol. (b) Add a one-paragraph "When not to pick this model" callout in each Tab body — e.g., AI Inference: "If you need GPU exclusivity or sub-100ms first-token latency, choose Compute Primitives instead". (c) Reframe the three "Coming From" sections as a single Decision Table comparing Livepeer vs incumbent on five axes: pricing, model availability, lock-in, latency, control. Use `<StyledTable>`.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — gateway-quickstart uses maturity badges in the header; About-tab `architecture.md` uses Decision Tables for actor comparison. `v2/gateways/concepts/business-model.mdx` is the gold-standard "should I use this at all" framing for the docs-v2 set.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 5 / MEDIUM 4 / INFO 5

**Critical findings (top 5)**:
1. **Audience mismatch (1.14 / 2.7 / 4.1)**: `audience: developer` but content register is `builder` (mental-model framing, hosted-API comparisons, no SDK method names). HIGH — re-brief audience before re-write, OR change token to `builder`.
2. **Related Pages footer wrong format (5.16 / 5.17 / 5.22)**: Footer uses `<CardGroup cols={2}>` + bare `<Card title icon href>` instead of `<Columns cols={2}>` + `<CustomCardTitle icon title horizontal />`. Also two cards both point inside the concepts subgroup — no cross-tab graduation. HIGH.
3. **No trade-off / limitation framing (4.15)**: The five mental models are described but their *costs* (rate limits, GPU availability variance, latency baselines, dropout behaviour) are not. This is the single biggest product-forward gap. HIGH.
4. **Description overruns 160-char SEO ceiling (1.11)**: Description ~193 chars. HIGH for search ranking.
5. **Cross-tab graduation paths insufficient (4.10 / 7.6)**: Only Solutions + About referenced. Missing Orchestrators, Gateways, Community. HIGH.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Decide audience token. If page stays as-is, change `audience: developer` → `audience: builder` (line 16). If audience stays `developer`, rewrite the five mental-model bodies to lead with API behaviour / system fact ("The AI gateway accepts JSON over HTTP and returns a Job ID…") rather than reader-addressed ("You're treating Livepeer as…"). | 16, 48, 56, 64, 72, 80 | HIGH | M | check 1.14, 2.7, 2.13 |
| 2 | Compress `description` to ≤160 chars. Suggested: "Pick the developer mental model that fits your build: AI inference, video platform, compute primitives, live video, or protocol." (132 chars). | 4–5 | HIGH | S | check 1.11 |
| 3 | Replace footer (lines 122–131) with canonical Related Pages: `<CustomDivider />` then `## Related Pages` heading, then `<Columns cols={2}>` with `<Card>` wrappers each holding `<CustomCardTitle icon="..." title="..." horizontal />`. Replace the two same-subgroup links with one in-subgroup link (infra-stack) plus one cross-tab graduation link (`/v2/gateways/concepts/role` or `/v2/about`). | 122–131 | HIGH | S | check 5.16, 5.17, 5.22, 7.6 |
| 4 | Add trade-off framing per mental model. For each of the five model sections (lines 46–82), append one paragraph: "Trade-off: <quantified cost>" — e.g., AI Inference: "Cost: per-pipeline pricing, rate-limited at the community gateway, model availability tracks the active orchestrator set." | 52, 60, 68, 76, 82 | HIGH | M | check 4.15, Layer 5 |
| 5 | Replace the five mental-model H2 sections with a `<Tabs>` block. One Tab per model, `icon="brain|video|cube|signal-stream|cubes-stacked"`. Body of each Tab keeps the current "entry surface → activation moment → quickstart link" structure plus the new trade-off paragraph from step 4. | 46–82 | MEDIUM | L | Layer 2 |
| 6 | Add citation links for three load-bearing claims. Line 48: link "eleven native pipelines" to `https://github.com/livepeer/ai-runner/blob/main/aiModels.json`. Line 66: link "PR #3641" to `https://github.com/livepeer/go-livepeer/pull/3641`. Line 76: cite the latency source for "sub-three-second glass-to-glass". | 48, 66, 76 | MEDIUM | S | check 6.1, 6.4 |
| 7 | Replace opening Markdown HR `---` (line 38) with `<CustomDivider />` for consistency with the rest of the file and the repo. | 38 | MEDIUM | S | check 5.26 |
| 8 | Move repeated persona/model names into a `snippets/data/developers/personas.json` import and render from it, so landscape.mdx and infra-stack.mdx share one source of truth. | 46–82 + 30 (imports) | MEDIUM | M | check 5.15, CLAUDE.md "no hardcoded data" rule |
| 9 | Add prereq-glossary links: first use of LL-HLS (line 58), WebRTC (line 58), webhooks (line 56) should each link to `resources/glossary.mdx#term`. | 56, 58 | MEDIUM | S | check 2.21 |
| 10 | Rename H2 "After Choosing a Model" (line 122) to "Related Pages" — `Related Pages` is the rubric-exempt approved structural heading. | 122 | INFO | S | check 3.2, 5.16 |
| 11 | Replace each "Coming From X" prose section (lines 100–116) with one `<StyledTable>` comparing Livepeer vs incumbent (OpenAI / Mux / Modal-RunPod) on pricing, model availability, lock-in, latency, control. | 100–116 | INFO | M | Layer 5, check 5.5 |
| 12 | Add maturity badges per mental model (Production / Beta / Reference) in the Tab body header. | 46–82 (post-Tabs refactor) | INFO | S | Layer 5 |
| 13 | Declare `pageVariant: overview` in frontmatter. | After line 15 | INFO | S | check 1.3 |
