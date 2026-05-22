# Review: infra-stack.mdx

**Page**: `v2/developers/concepts/infra-stack.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A1
**pageType (from frontmatter)**: concept
**Audience (from frontmatter)**: developer
**Purpose (from frontmatter)**: explain
**Bytes**: 17,874
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `veracityStatus`. Lines 1–23 list 9 of 10 required fields. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` (line 5). |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | Not declared; should be `compendium` or `specification` given the 5-map structure. INFO. |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: explain` (line 7). |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 6). |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` (line 8). |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` (line 9). |
| 1. Frontmatter | 1.8 | veracityStatus present and honest | FAIL | Field missing entirely. `lastVerified: '2026-05-14'` (line 22) is present but `veracityStatus` is not. Given the migration-note flags (lines 27–37 acknowledge unresolved violations), the status would honestly be `unverified`. |
| 1. Frontmatter | 1.9 | industry array valid | N/A | Not present. |
| 1. Frontmatter | 1.10 | niche array valid | N/A | Not present. |
| 1. Frontmatter | 1.11 | description subject-first, ≤160 chars, no "this page", UK English | PASS | Line 4: "Maps the infrastructure each of the five developer personas touches and the guides each persona needs." 109 chars. Subject-first. |
| 1. Frontmatter | 1.12 | OG image block complete | PASS | All 5 OG fields present (lines 16–20). |
| 1. Frontmatter | 1.13 | keywords specific and search-aligned | MIXED | "developer personas" is generic; "livepeer infra map", "gateway selection", "byoc", "persona infrastructure" are specific. |
| 1. Frontmatter | 1.14 | Developer/builder split honoured | FAIL | `audience: developer` but content explicitly addresses *all five* personas P1–P5 including builder-equivalent (P1 AI Persona "OpenAI for video AI"), node-operator (P5), and protocol contributor. The page does not honour a single-audience split. Should either be `audience: builder` (since P1–P4 dominate) OR split the page. |
| 2. Voice & Copy | 2.1 | UK English throughout | PASS | No US-spelling matches in narrative prose. Mermaid `color:` hex literals are CSS, not narrative. |
| 2. Voice & Copy | 2.2 | Zero banned words | PASS | No `effectively / essentially / basically / various / several / clearly / obviously / meaningful / significant`. |
| 2. Voice & Copy | 2.3 | Zero banned phrases | PASS | No matches. |
| 2. Voice & Copy | 2.4 | Zero banned constructions | PASS | No matches in narrative. |
| 2. Voice & Copy | 2.5 | Opening order subject-first | FAIL | Line 40 opens with metadata: "**Project:** Livepeer docs-v2 \n**Branch:** `docs-v2-dev` \n**Purpose:** Map all available infrastructure…". This is a workspace-style preamble, not a published-page intro. The migration note explicitly flags this is unresolved. |
| 2. Voice & Copy | 2.6 | Paragraph discipline | MIXED | Each persona section has tight intro lines but the section ends with the Mermaid block, no closing summary. |
| 2. Voice & Copy | 2.7 | Audience register matches token | FAIL | See 1.14. The page is a multi-audience reference, not a single-developer page. |
| 2. Voice & Copy | 2.8 | Per-audience prohibited phrases absent | PASS | No prohibited phrases. |
| 2. Voice & Copy | 2.9 | No passive value statements | PASS | Lines 70, 128, 194, 276, 359 (persona intros) all use concrete language. |
| 2. Voice & Copy | 2.10 | No hedging openers | PASS | No "If…" / "When…" / "To…" openers. |
| 2. Voice & Copy | 2.11 | Terminology locked | PASS | BYOC, NaaP, ComfyStream, PyTrickle, trickle protocol, FrameProcessor used correctly. |
| 2. Voice & Copy | 2.12 | Zero em-dashes | PASS | Zero `—` characters anywhere. The file uses `–` (EN-dash) instead — see 2.13 below. |
| 2. Voice & Copy | 2.13 | Entity-led voice | FAIL | Lines 69, 127, 193, 275, 358 — H2 headings use EN-dash separator `Persona 1 – AI Persona`. Body paragraphs at lines 70 ("Looking for an inference API…"), 128, 194, 276, 359 open with reader-state ("Looking for…", "Building Twitch-shaped live experiences…") rather than system fact. The persona descriptors prefer the reader's mindset over the system's behaviour. |
| 2. Voice & Copy | 2.14 | No hedging verbs in value claims | PASS | No "can help" / "allows you to". |
| 2. Voice & Copy | 2.15 | description not self-referential | PASS | Description starts with "Maps…" (subject-first). |
| 2. Voice & Copy | 2.16 | Zero deprecated terms (Broadcaster) | MIXED | Lines 138, 287, 301 — "broadcaster" used as `go-livepeer` runtime mode (architectural), not as deprecated synonym for Gateway. Acceptable. INFO. |
| 2. Voice & Copy | 2.17 | Universal terms consistent | PASS | All canonical. |
| 2. Voice & Copy | 2.18 | Spell check passes | N/A | Visual scan clean; not run live. |
| 2. Voice & Copy | 2.19 | Terms match glossary | PASS | |
| 2. Voice & Copy | 2.20 | Per-tab terminology correct | PASS | |
| 2. Voice & Copy | 2.21 | First use of specialised term defined | FAIL | First-use definitions missing for: `T2I/I2I/I2V/I2T/A2T/TTS/SAM2/LV2V` (line 85 in Mermaid label — readers without AI background will not parse these abbreviations); `TicketBroker` (lines 92, 152, 305, 411 — never defined inline, never linked to glossary); `AISR / AIServiceRegistry` (line 386, never explained); `LL-HLS` (line 290, never defined); `Catalyst` (line 303, "(media-server, optional)" is the only signal). |
| 2. Voice & Copy | 2.22 | Terminology lock respected | PASS | |
| 2.D | 2.D1 | Code-first opening on instruction/tutorial pages | N/A | Concept page. |
| 2.D | 2.D2 | Every function/API/method named has code/link | FAIL | All Mermaid nodes referencing repos/SDKs/binaries (`@livepeer/ai`, `livepeer-ai-python`, `go-livepeer`, `ai-worker`, `ai-runner`, `lpms`, `catalyst`, `@livepeer/react`, `webrtmp-sdk`, `livepeer-js`, `@muxionlabs/byoc-sdk`, `pytrickle`, `livepeer/comfystream`, `ComfyUI Stream Pack`, `ComfyUI-RTC`, `livepeer/protocol`, `livepeer/subgraph`, `arbitrum-lpt-bridge`, `livepeer/coordination`) are present as labels but not hyperlinked. The reader cannot click through to source. |
| 2.D | 2.D3 | Versions stated explicitly | FAIL | No version pins anywhere. `go-livepeer`, `ai-runner`, `comfystream`, SDKs all referenced without version. |
| 2.D | 2.D4 | Error states and edge cases in main content | N/A | No procedural content. |
| 2.D | 2.D5 | No prose explanations of self-evident code | N/A | |
| 2.D | 2.D6 | No marketing language adjacent to technical | PASS | |
| 2.D | 2.D7 | Note/Info not used for primary content | PASS | No `<Note>` on this page. |
| 3. Headings | 3.1 | Every heading scores ≥20/25 | MIXED | See Heading Score Table. The H2 "Colour convention (consistent across all five)" is parenthetically padded; the persona H2s carry editorial nicknames in quotes (e.g. `Persona 2 – Video Platform Persona ("Mux with AI bolted on")`) which inflate length but add scanability. "Cross-persona observations" is borderline. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | No banned/avoid terms in H2s. |
| 3. Headings | 3.3 | No literal contrast labels (X vs Y) | PASS | No `vs` patterns. |
| 3. Headings | 3.4 | Domain-anchor rule applied | PASS | Every H2 carries Persona + domain. |
| 3. Headings | 3.5 | Names the concept, not examples | PASS | Persona N + role. |
| 3. Headings | 3.6 | Title well-formed (1–3 words, concept-derived) | MIXED | `title: Persona infrastructure maps` (3 words, concept-derived). `sidebarTitle: 'Infra Stack'` (2 words). Mismatch between title ("Persona infrastructure maps") and sidebar/anchor ("Infra Stack") may confuse readers — the sidebar is the human-facing label. |
| 3. Headings | 3.7 | Editorial choice | PASS | The persona-with-nickname pattern is editorial. |
| 3. Headings | 3.8 | Per-pageType naming style applied | PASS | concept = governing-concept heading style. |
| 3. Headings | 3.9 | Per-audience register | MIXED | Same as 1.14. |
| 3. Headings | 3.10 | Domain-anchor rule applied | PASS | |
| 4. Structure | 4.1 | One purpose, one audience, one job | FAIL | One job (map infra per persona), but the page covers FIVE audiences explicitly (P1 AI Persona, P2 Video Platform, P3 Compute, P4 Live Video, P5 Protocol). This violates "one audience, one job". Should either route P5 to a separate page or accept multi-audience and switch audience token to `community` or split. |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer see which infrastructure their persona touches and which guides to read." |
| 4. Structure | 4.3 | PREV/NEXT adjacency correct | PASS | prev = landscape, next = repo-map. |
| 4. Structure | 4.4 | No dead ends | MIXED | Each persona map ends with the Mermaid diagram and an implicit pointer to guides. No CardGroup at end of page. No Related Pages footer. Reader is stranded on the last persona observation. |
| 4. Structure | 4.5 | Prerequisites stated or linked | FAIL | Reader needs to have read `landscape.mdx` to interpret the persona model. No prereq pointer at top. |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Lines 132, 281, 364 each name boundary (Studio acknowledged via routing only; Protocol Persona content lives in About + Community + Orchestrators + LP Token). |
| 4. Structure | 4.7 | Information type correct | PASS | Conceptual/analytical, matches `concept` pageType. |
| 4. Structure | 4.8 | No content duplication | FAIL | The five-persona model and naming overlap landscape.mdx's five-mental-model sections. P1 here ≅ "AI Inference Mental Model" there; P2 ≅ "Video Platform Mental Model"; P3 ≅ "Compute Primitives Mental Model"; P4 ≅ "Live Video Mental Model"; P5 ≅ "Protocol Mental Model". Two pages, same taxonomy, different rendering. |
| 4. Structure | 4.9 | Section orientation entry present | PASS | Page itself is an orientation entry for infra. |
| 4. Structure | 4.10 | ≥3 cross-tab links to expected graduations | MIXED | Routing nodes inside Mermaid blocks (R_STUDIO → Solutions tab; R_ABOUT, R_COMM, R_ORCH, R_LPT inside P5 diagram) reference cross-tab destinations but as text labels inside SVG, NOT as clickable links. From a clickability standpoint, the page has zero cross-tab links in narrative or footer. FAIL on clickable cross-tab links. |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "which infra does my persona touch?" if the reader already accepts the persona model. Does not stand alone — assumes landscape.mdx has been read. |
| 4. Structure | 4.12 | Page size appropriate | PASS | 17.8KB — substantive. |
| 4. Structure | 4.13 | Zero TODO/REVIEW comments | FAIL | Lines 27–37: Live `{/* MIGRATION NOTE… */}` JSX comment in the page body explicitly listing FOUR unresolved violations to address on next pass ("Violations to resolve on next pass: …"). Comment is non-rendering but is a TODO-equivalent. |
| 4. Structure | 4.14 | Flat layout where appropriate | PASS | Persona H2s are flat. |
| 4. Structure | 4.15 | Trade-offs/limitations/failure-conditions named | FAIL | Maps show what each persona touches but not what *limits* them. P1: no mention of model-availability variance or rate limits. P2: no mention of encode latency baseline. P3: no mention of GPU availability or settlement timing. P4: no dropout/reconnect framing. P5: scope correctly bounded but no failure modes. |
| 4. Structure | 4.16 | Content-pass context block completable | MIXED | Purpose stated; audience ambiguous. |
| 4. Structure | 4.17 | Every code block has language tag | PASS | Five Mermaid blocks (lines 74, 134, 200, 283, 366) all carry `mermaid` language tag. |
| 4. Structure | 4.18 | Code-first opening on instruction/tutorial | N/A | concept page. |
| 4. Structure | 4.19 | Error states in main content | N/A | |
| 4. Structure | 4.20 | Every function/API/method named has code/link | FAIL | Duplicate of 2.D2 — every repo/binary/SDK node is unlinked. |
| 5. Layout | 5.1 | Correct template for pageType + pageVariant | MIXED | concept matches; no `pageVariant` declared. |
| 5. Layout | 5.2 | Required sections present per pageType | FAIL | concept template requires Related Pages at footer (component-matrix.md line 65: "`<Card>` / `<Columns cols={2}>` Related Pages — Required — At footer"). Missing entirely. Also missing prereq pointer at top per check 4.5. |
| 5. Layout | 5.3 | Only approved components used | PASS | `<CustomDivider />` only. |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Information-type → component mapping | FAIL | Page is reference-style content (infra maps with consistent structure per persona) rendered as five repeated H2 + Mermaid. Should use `<Tabs>` per persona, OR `<AccordionGroup>` with one Accordion per persona, OR a single `<StyledTable>` summary with diagrams collapsed. The current scroll-five-Mermaid layout is the worst presentation. |
| 5. Layout | 5.6 | MDX renders clean | MIXED | Migration note states two duplicate H1 lines were stripped — assumed clean now. Not live-verified. |
| 5. Layout | 5.7 | No old-schema frontmatter values | PASS | |
| 5. Layout | 5.8 | CSS custom properties only | FAIL | Lines 116–123, 181–188, 262–271, 345–353, 425–432 — Mermaid `classDef` blocks contain 20+ hardcoded hex colours (`#0b66ff`, `#0a4cc6`, `#fff`, `#e1f5ee`, `#0f6e56`, etc.). Check 5.27 requires `MermaidColours.jsx`. Migration note already acknowledges this is unresolved. |
| 5. Layout | 5.9 | Generated file banners intact | N/A | Not generated. |
| 5. Layout | 5.10 | Component naming conventions | PASS | |
| 5. Layout | 5.11 | Gold-standard template followed | FAIL | No opening `<CustomDivider />` after imports — first divider is at line 67. No Header CTA (`<Tip>` / `<Quote>`). No closing Related Pages section. The migration note JSX comment block (lines 27–37) breaks the convention. |
| 5. Layout | 5.12 | Section blocks from gold-standard | FAIL | No gold-standard section blocks used. |
| 5. Layout | 5.13 | Section ordering matches pageType | MIXED | Intro → persona body sections → "Cross-persona observations". Missing Related Pages at end. |
| 5. Layout | 5.14 | Multi-view layout rules | FAIL | This is genuinely a 1D multi-view (variant = persona). Should be `<Tabs>` not five repeated H2s. |
| 5. Layout | 5.15 | Data imports used | FAIL | Persona list (P1–P5), class definitions, Mermaid node labels, repo names all hardcoded. Should import from `snippets/data/developers/personas.json` (does not yet exist — flag as creator gap) AND `MermaidColours.jsx`. |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | FAIL | Page ends with line 444 prose paragraph "Persona 1's path graduates to Persona 3. …" — no CardGroup, no Columns, no Related Pages. Reader is stranded. |
| 5. Layout | 5.17 | Related Pages format | FAIL | Section missing entirely — see 5.16. |
| 5. Layout | 5.18 | Tab icon prop present | N/A | No Tabs (but Tabs are recommended — see 5.14). |
| 5. Layout | 5.19 | Accordion icon prop present | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block icon + title | N/A | Mermaid blocks do not require icon/title (Mintlify convention is mermaid blocks are special-cased). |
| 5. Layout | 5.21 | StyledSteps used, not raw Steps | N/A | |
| 5. Layout | 5.22 | Navigation cards use CustomCardTitle | N/A | No Cards on this page (related gap — see 5.16). |
| 5. Layout | 5.23 | Tables use StyledTable | FAIL | Lines 49–66 — Colour convention table is raw markdown (16 rows × 2 columns). Should be `<StyledTable>`. |
| 5. Layout | 5.24 | Max 1–2 tables per page | PASS | One table (colour convention). |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | Five Mermaid diagrams + one table — heavy for one page. Should split into Tabs per persona. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | No opening `<CustomDivider />` after imports. First divider at line 67 (after colour-convention table). Then between persona H2s (lines 125, 191, 273, 356). Last at line 434 (after P5). No divider before missing Related Pages. |
| 5. Layout | 5.27 | Mermaid uses governed colours | FAIL | Five Mermaid blocks each redeclare `classDef` with hardcoded hex (lines 116–123, 181–188, 262–271, 345–353, 425–432). Should use values from `snippets/components/config/MermaidColours.jsx`. Migration note acknowledges. Prose IS present before each diagram (PASS that part); `<ScrollableDiagram>` wrapper NOT used (FAIL that part) — diagrams 3, 4, 5 are wide and likely overflow on mobile. |
| 5. Layout | 5.28 | Import section ordering | PASS | Single element import. |
| 5. Layout | 5.29 | Media placeholders in TODO JSX | N/A | No media placeholders. |
| 5. Layout | 5.30 | Fact-check flags as REVIEW JSX | FAIL | Lines 27–37 contain a `MIGRATION NOTE` JSX comment that doubles as a TODO — should be replaced by either `veracityStatus: unverified` + a tracked decision-registry entry, or by addressing the four flagged violations. Per check 5.30, REVIEW JSX comments must be paired with `veracityStatus: unverified` (also missing — see 1.8). |
| 5. Layout | 5.31 | Decision-critical info visible without interaction | PASS | All five personas flat, no hidden Tabs/Accordions. |
| 5. Layout | 5.32 | Reference tables at end | FAIL | Colour-convention table is at the very top (lines 49–66) before any persona content. As a reference legend for the diagrams below, it correctly belongs near the diagrams it explains — but it should be either inside each Mermaid block (impossible) or at the bottom as a legend reference. Better: replace the legend table with `MermaidColours.jsx` import + a footnote. |
| 5. Layout | 5.33 | Drafts in workspace | PASS | This is the live page. |
| 5. Layout | 5.34 | No inline styles, no hardcoded hex | FAIL | Mermaid `classDef` blocks — see 5.8, 5.27. |
| 6. Veracity | 6.1 | Every factual claim citable | FAIL | Many claims unsourced: "11 native pipelines" (line 85 — `aiModels.json`?); "12 plugins live" (line 223 — NaaP repo PR list?); "Activation: first BYOC container completing a paid job" — definition source? "PR #3641" referenced via class label but not as a link; "AT Protocol live video" (line 307); "40 AI models" referenced in storyboard data (not on this page but cross-cuts to repo-map). |
| 6. Veracity | 6.2 | Code tested | N/A | No code. |
| 6. Veracity | 6.3 | No deprecated API usage | PASS | |
| 6. Veracity | 6.4 | Numbers are real | FAIL | "12 plugins live" (line 223) — needs source. "11 native pipelines" (line 85) — needs source. "Activation: first BYOC container completing a paid job" subjective. |
| 6. Veracity | 6.5 | REVIEW flags for unverified claims | MIXED | Migration note (lines 27–37) flags four unresolved violations but is not paired with `veracityStatus: unverified`. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | `veracityStatus` missing entirely. Given the unresolved migration violations, honest value is `unverified`. |
| 6. Veracity | 6.7 | Uses resources/glossary | MIXED | Glossary not linked from page. |
| 6. Veracity | 6.8 | Source staleness check | FAIL | No SDK/binary versions named anywhere. |
| 6. Veracity | 6.9 | No open-ended "needs more research" | FAIL | The migration note (lines 27–37) is exactly this: open-ended unresolved issues left visible in source. |
| 6. Veracity | 6.10 | Source authority tiers respected | MIXED | T1 repos referenced as labels but unlinked. |
| 6. Veracity | 6.11 | Glossary definitions match universal-terms | N/A | No glossary on page. |
| 6. Veracity | 6.12 | Glossary verified against veracity-sources | N/A | |
| 7. Navigation | 7.1 | Page exists in docs.json | PASS | `v2/developers/concepts/infra-stack` at docs.json line 2498. |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | PASS | |
| 7. Navigation | 7.3 | Portal routes to section | PASS | |
| 7. Navigation | 7.4 | No structural orphans | PASS | |
| 7. Navigation | 7.5 | Audience journey complete | PASS | Five personas mapped. |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation paths | FAIL | Zero clickable cross-tab links on this page. The R_STUDIO/R_ABOUT/R_COMM/R_ORCH/R_LPT routing nodes appear inside Mermaid SVG but are not hyperlinks. See 4.10. |
| 7. Navigation | 7.7 | File in correct lane | PASS | Published. |
| 7. Navigation | 7.8 | File naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL compliance | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | 17.8KB. |
| 7. Navigation | 7.11 | Resources sub-structure correct | N/A | |
| 7. Navigation | 7.12 | Guides scope correct | N/A | |
| 8. Links & Rendering | 8.1 | All internal links resolve | N/A | Page has zero clickable markdown/JSX links — only Mermaid label text. Nothing to verify. |
| 8. Links & Rendering | 8.2 | All external links live | N/A | Zero clickable external links. |
| 8. Links & Rendering | 8.3 | All snippet imports resolve | PASS | Single import (Divider) resolves. |
| 8. Links & Rendering | 8.4 | All images load | N/A | No inline images. |
| 8. Links & Rendering | 8.5 | Page renders without error | MIXED | Migration note states two duplicate H1 lines were stripped. Not live-verified post-fix. |
| 8. Links & Rendering | 8.6 | No TODO/TBD/Coming Soon | FAIL | Migration note (lines 27–37) is TODO-equivalent listing "Violations to resolve on next pass". |
| 9. Process & Governance | 9.1–9.6 | | N/A | Outside this review's scope. |
| 10. Content Completeness | 10.1 | Every question in job list has a page | PASS | Persona infra map answers "what infra does my persona touch?" |
| 10. Content Completeness | 10.2 | Zero-to-hero journey complete | FAIL | Page maps infra but provides no clickable handoff to the guides it names. Reader sees `Guide: BYOC Quickstart` as a Mermaid label but cannot click it. |
| 10. Content Completeness | 10.3 | All primary persona paths unblocked | MIXED | Maps exist; clickable graduations missing. |
| 10. Content Completeness | 10.4 | Scope boundaries explicit | PASS | Boundary statements lines 132, 281, 364, 438. |
| 10. Content Completeness | 10.5 | Self-containment holds | FAIL | Page assumes the reader has internalised the five-persona model (introduced in landscape.mdx). No prereq link. |
| 10. Content Completeness | 10.6 | Code samples have working language path | N/A | |
| 10. Content Completeness | 10.7 | Persona-specific guides present | MIXED | Guides named in Mermaid labels but unlinked. |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Persona infrastructure maps" | PASS | Lowercase persona — inconsistent capitalisation vs `sidebarTitle: 'Infra Stack'`. |
| sidebarTitle | Yes | "Infra Stack" | PASS | |
| description | Yes | "Maps the infrastructure each of the five developer personas touches and the guides each persona needs." | PASS | 109 chars. |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | FAIL | See 1.14 — multi-audience content. |
| purpose | Yes | explain | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | 5 keywords | MIXED | |
| og:image | Yes | /snippets/assets/media/og-images/fallback.png | PASS | Fallback OG — not the developers-tab OG used by landscape.mdx. Inconsistent. |
| og:image:alt | Yes | "Livepeer Docs social preview image" | PASS | Generic alt — landscape.mdx uses tab-specific alt. Inconsistent. |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | NO | — | FAIL | Missing. Should be `unverified` given the migration note. |
| lastVerified | Yes | 2026-05-14 | MIXED | Present but contradicts the missing veracityStatus and the unresolved migration violations. |
| status | Yes | current | PASS | |
| pageVariant | No | — | INFO | Should declare `compendium` or `specification`. |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | Placement wrong — no opening divider after imports; first divider is after the colour table. Missing one before Related Pages (which doesn't exist). |
| `<Tabs>` / `<Tab icon>` | NO | Required for 1D variant content | Yes | Five-persona layout is the canonical use case for `<Tabs>`. Currently five flat H2s — see 5.14. |
| `<StyledSteps>` | N/A | — | — | |
| `<Card>` / `<Columns cols={2}>` Related Pages | NO | Required at footer | — | Missing entirely. FAIL 5.16. |
| `<CustomCardTitle icon ... />` | N/A | — | — | No Cards. |
| Fenced code with icon + title | N/A | — | — | Mermaid blocks; icon/title not required. |
| `<Note>` / `<Tip>` / `<Warning>` | NO | — | Recommended | No header CTA. Adding `<Tip>` near top would help orient. |
| `<Accordion>` / `<Accordion icon>` | NO | Recommended for collapsible detail | Yes | Five Mermaid blocks would compose better as an AccordionGroup. |
| `<StyledTable>` | NO | Required for tables | — | Lines 49–66 colour table is raw markdown. FAIL 5.23. |
| `<ScrollableDiagram>` | NO | Required for wide Mermaid | — | Personas 3 + 4 + 5 diagrams have many nodes and likely overflow on narrow viewports. Missing wrapper. FAIL 5.27. |
| `<CenteredContainer>` | NO | — | — | landscape.mdx uses CenteredContainer for header CTA; infra-stack has no header CTA at all. |
| `<LinkArrow>` | NO | — | — | Zero `<LinkArrow>` usage despite many named guides/repos. FAIL 2.D2. |

## Cross-page duplication and link gaps

- **OVERLAP**: Five-persona model (P1–P5) here ≅ five Mental Models in landscape.mdx. Same taxonomy, parallel framing.
- **OVERLAP**: P3 BYOC infra map lists repos (`muxionlabs/byoc-example-apps`, `muxionlabs/byoc-sdk`, `livepeer/comfystream`, `livepeer/ComfyUI-Stream-Pack`, `livepeer/pytrickle`) that are also catalogued in repo-map.mdx's "Real-Time Pipeline Repositories" section. Should cross-reference.
- **OVERLAP**: P5 Protocol map lists repos (`livepeer/protocol`, `livepeer/go-livepeer`, `livepeer/ai-worker`, `livepeer/ai-runner`, `livepeer/lpms`, `livepeer/coordination`) that are catalogued in repo-map.mdx's "Core Runtime" and "On-Chain Protocol" sections. Should cross-reference, NOT duplicate.
- **LINK GAPS**: Every `Guide:` label inside every Mermaid block is a phantom link — the guide name is shown but the diagram label is not a hyperlink. `Guide: AI Jobs Quickstart`, `Guide: AI Pipelines`, `Guide: AI Authentication`, `Guide: AI SDKs Overview`, `Guide: Pricing & rate limits`, `Guide: Transcoding Direct Quickstart`, `Guide: Ingest & Playback`, `Guide: Live Events`, `Guide: VOD & Recording`, `Guide: React Player`, `Guide: Gateway Decision`, `Guide: BYOC Quickstart`, `Guide: BYOC Architecture`, `Guide: BYOC Production`, `Guide: PyTrickle`, `Guide: ComfyStream + RunPod`, `Guide: Trickle Protocol`, `Guide: Building a Plugin`, `Guide: Per-second pricing`, `Guide: Live Streaming Quickstart`, `Guide: Ingest Setup`, `Guide: ABR Configuration`, `Guide: Low-Latency Tuning`, `Guide: Player Embedding`, `Guide: Codec Selection`, `Guide: Gateway Decision`. Each persona section should reproduce these as a clickable list under the Mermaid block.
- **LINK GAPS**: Repo references inside diagrams (`livepeer/protocol`, `livepeer/go-livepeer`, `livepeer/comfystream`, `livepeer/pytrickle`, `arbitrum-lpt-bridge`, `livepeer/subgraph`, `livepeer/coordination`) are unlinked. Cross-reference `repo-map.mdx` or hyperlink directly.
- **LINK GAPS**: No prereq link to `landscape.mdx` at the top — yet the persona model is introduced there.
- **LINK GAPS**: P5 names About / Community / Orchestrators / LP Token tabs but provides no clickable link to any of them.
- **STRANDED**: Page ends with "Persona 1's path graduates to Persona 3" prose paragraph. No CardGroup. No next step. Reader is dumped.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| EN-dashes (informal, may be flagged downstream) | 13 | line 31, 34, 69, 127, 193, 198, 275, 277, 358, 360, 364, 438, 444. Many in narrative ("This persona has the densest infra map – they touch every modular surface…"). Rubric specifies em-dash zero-tolerance; EN-dash is not covered explicitly but voice rules dislike dash separators. Wonderland's "no em dashes" voice rule (CLAUDE.md) should be interpreted to also exclude EN-dashes in narrative — flag as MEDIUM. |
| US spellings | 0 | (CSS `color:` in Mermaid classDef ignored as protected zone) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | (Mermaid label `If you want Studio…` on line 161 is inside Mermaid block — protected zone) |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs (project rule 3) | 6 routing-only | line 132 ("Studio-shaped infra"), line 161 ("If you want Studio, see Solutions tab"), line 165 ("R_STUDIO"), line 281 ("Studio Streaming acknowledged via routing only"), line 317 ("Studio Streaming → Solutions tab"), line 321 ("R_STUDIO"). All routing/disambiguation — acceptable. INFO. |
| Hedging openers | 0 | — |
| Self-reference (workspace preamble) | 3 | line 40 "**Project:** Livepeer docs-v2"; line 41 "**Branch:** `docs-v2-dev`"; line 42 "**Purpose:** Map all available infrastructure…". Page-as-meta lines. FAIL 2.5 (opening order). |
| Deprecated terms (Broadcaster) | 3 mode-context | lines 138, 287, 301. Architectural mode references. INFO. |
| Reader-state openings | 5 | "Looking for…" (lines 70, 128, 194, 276, 359) — FAIL 2.13 entity-led voice. |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Colour convention (consistent across all five) | 3 | 3 | 4 | 4 | 2 | 16 — FAIL (parenthetic padding; verbose) |
| Persona 1 – AI Persona ("OpenAI for video AI") | 4 | 4 | 4 | 5 | 3 | 20 PASS-borderline |
| Persona 2 – Video Platform Persona ("Mux with AI bolted on") | 4 | 4 | 4 | 5 | 3 | 20 PASS-borderline |
| Persona 3 – Compute Primitives Persona ("Modal/RunPod, but cheaper") | 4 | 4 | 4 | 5 | 3 | 20 PASS-borderline |
| Persona 4 – Live-Video-First Persona ("real-time streaming backend") | 4 | 4 | 4 | 5 | 3 | 20 PASS-borderline |
| Persona 5 – Protocol Persona ("crypto network contributor") | 4 | 4 | 4 | 5 | 3 | 20 PASS-borderline |
| Cross-persona observations | 4 | 4 | 4 | 4 | 5 | 21 PASS |

Title "Persona infrastructure maps": 4/4/5/4/4 = 21 PASS.

The colour-convention heading needs renaming. Persona headings benefit from clarity but lose on conciseness — at the borderline.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 74 | mermaid | N/A | N/A | — | Mermaid; classDef uses hardcoded hex (5.27 FAIL). |
| 134 | mermaid | N/A | N/A | — | Same. |
| 200 | mermaid | N/A | N/A | — | Same. |
| 283 | mermaid | N/A | N/A | — | Same. |
| 366 | mermaid | N/A | N/A | — | Same. |

All five Mermaid blocks: classDef hex literals fail 5.8, 5.27, 5.34. No `<ScrollableDiagram>` wrapper (5.27 partial FAIL).

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The page shows "what infra each persona touches" but does not deliver "what should I read next, in what order?". The Mermaid label `Guide: BYOC Quickstart` looks like a navigation aid but is a phantom — no link, no priority order, no graduation chain. A reader who self-identifies as Persona 3 sees 8 named guides in the diagram and has zero signal which to start with.
- **Fix step:** Below each persona Mermaid, add a "Read in this order" `<StyledSteps>` or numbered card list with the top three guides as `<Card>` links. P1: 1. AI Jobs Quickstart → 2. AI Pipelines → 3. AI Authentication. P3: 1. BYOC Quickstart → 2. PyTrickle → 3. Trickle Protocol. Etc.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` "Multi-Path Layout Pattern"; `v2/about/concepts/architecture.md` ends each persona section with a clickable ordered handoff.

### Layer 2 — Composition
- **Gap:** Five repeated H2 + Mermaid blocks (445-line scroll wall) is the worst case for a multi-variant compendium. Component-matrix.md line 60 explicitly says concept pageType should use `<Tabs>` "When concept has multiple variants (e.g. workload types)". Five personas = five workload variants.
- **Fix step:** Refactor body into a `<Tabs>` block: `<Tab icon="brain" title="AI Persona">` / `<Tab icon="video" title="Video Platform">` / `<Tab icon="cube" title="Compute Primitives">` / `<Tab icon="signal-stream" title="Live Video">` / `<Tab icon="cubes-stacked" title="Protocol">`. Each Tab body holds (intro lines + Mermaid diagram + "Read in this order" steps from Layer 1). The Cross-Persona observations stay as flat prose below the Tabs. The colour-convention table moves out as an inline footnote inside each Tab OR (preferred) is deleted in favour of importing `MermaidColours.jsx`.
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx` lines 99–106 + component-matrix.md concept-table line 60.

### Layer 3 — Cross-page integration
- **Gap:** The page is a knowledge island. No links in: zero clickable internal links, zero external links, zero glossary anchors, zero cross-tab graduations (despite naming all four destination tabs). The page literally is the persona-routing hub but does no routing.
- **Fix step:** (a) Replace every `Guide: X` Mermaid label that has a real target page with a Mintlify-supported clickable Mermaid syntax: `click G_QS "/v2/developers/build/ai-and-agents/ai-jobs-direct-quickstart" "AI Jobs Quickstart"` (one click line per labelled guide). (b) Where Mermaid clicks are unsupported, add a `<Columns cols={2}>` `<Card>` list below each Mermaid as the actual navigation handoff. (c) Add a Related Pages footer with cross-tab graduation Cards to `/v2/about/concepts/about-livepeer` (P5), `/v2/gateways/concepts/role` (P2/P4), `/v2/orchestrators/concepts/role` (P5), `/v2/solutions/portal` (P1/P2/P4). (d) Add prereq pointer at top: "Prereq: read [Developer Landscape](/v2/developers/concepts/landscape) first if you have not yet identified your persona."
- **Source/exemplar:** Mermaid `click` syntax in Mintlify (canonical reference: `livepeer/comfystream` Wiki uses it); `v2/about/concepts/livepeer-stack.mdx` for cross-tab graduation Card patterns.

### Layer 4 — Veracity and source authority
- **Gap:** Five high-load claims are sourceless. (a) "11 native pipelines" (line 85) — should cite `ai-runner` `aiModels.json`. (b) "12 plugins live" inside NaaP label (line 223) — should cite `livepeer/naap` repo plugin list / PR #. (c) "post-#3641" inside Pay label (line 224) — should hyperlink the PR. (d) "AT Protocol live video" inside streamplace label (line 307) — should cite streamplace ATProto integration page. (e) Subsumption claims in the JSX migration note (E under P3, F under P1) need a decision-registry entry, not a JSX comment. `veracityStatus` is missing — should be `unverified` until these are sourced.
- **Fix step:** (a) Add a footnote table at the foot of the page citing the source URL for each numerical claim and each named repo. Alternatively, after each Mermaid, render a `<StyledTable>` with columns `Node | Source`. (b) Add `veracityStatus: unverified` to frontmatter. (c) Replace the JSX migration note (lines 27–37) with a `decisions/registry.md` entry, then delete the JSX block.
- **Source/exemplar:** `livepeer/ai-runner/aiModels.json`; `livepeer/naap` package.json + readme; `livepeer/go-livepeer` PR #3641; `streamplace.streamio` ATProto integration page; `docs-guide/decisions/registry.md`.

### Layer 5 — Product-forward depth
- **Gap:** The page reads like a reference diagram exported from a whiteboard, not a product page. It shows the infra but does not tell the reader (a) which persona is "most production-ready" today, (b) which persona is biggest by community, (c) which persona to abandon if your use case shifts, (d) which infrastructure is shared vs. unique per persona (the cross-persona observations at the bottom hint at this but bury the lede). Compare to `gateways/concepts/architecture.mdx` which leads with a single hero diagram and a maturity-signal block. Compare to `about/concepts/livepeer-stack.mdx` which uses a single decision table for actor selection.
- **Fix step:** (a) Add a hero block at the top: a single `<StyledTable>` summarising five personas across columns `Persona | Activation cost | Maturity | Shared infra | Unique infra | Top guide`. This becomes the scannable "where am I?" answer before the reader dives into any individual map. (b) Move the existing "Cross-persona observations" section (lines 436–445) to the top as a sidebar `<Note>` block — its content (Persona 3 is the densest, Persona 1 graduates to Persona 3, etc.) is product insight that's currently buried at the bottom. (c) Add a `<Badge>` per persona: P1 Production, P2 Production, P3 Beta, P4 Beta, P5 Reference.
- **Source/exemplar:** `.claude/references/layout/exemplars.md`; `v2/gateways/concepts/architecture.mdx` hero pattern; `v2/about/concepts/livepeer-stack.mdx` actor-decision table.

## Summary

**Verdict**: NEEDS WORK
**Severity counts**: CRITICAL 0 / HIGH 11 / MEDIUM 7 / INFO 4

**Critical findings (top 5)**:
1. **Audience mismatch (1.14 / 4.1)**: `audience: developer` but page covers five personas spanning developer + builder + orchestrator + delegator + community. Violates "one audience". HIGH.
2. **No Related Pages footer (5.16 / 5.17 / 7.6 / 10.2)**: Page ends in mid-prose. Reader stranded. HIGH.
3. **No clickable links anywhere (2.D2 / 4.10 / 4.20 / 7.6 / 8.1)**: 26+ named guides in Mermaid labels, all phantom. Zero internal links, zero external links, zero glossary anchors. The page is structurally a routing hub that does no routing. HIGH.
4. **Live JSX migration note in body (4.13 / 5.30 / 6.5 / 6.9 / 8.6)**: Lines 27–37 are a "Violations to resolve on next pass" comment listing four unresolved issues — TODO-equivalent left in a published page. HIGH.
5. **Mermaid hardcoded hex (5.8 / 5.27 / 5.34)**: Five Mermaid classDef blocks contain 100+ hardcoded hex literals. Repo rule: use `MermaidColours.jsx`. HIGH.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Resolve the migration JSX note: address the four flagged violations OR move them to `decisions/registry.md` and delete the JSX comment block. | 27–37 | HIGH | M | check 4.13, 5.30, 6.9 |
| 2 | Replace workspace preamble (lines 40–44) with a normal published-page intro paragraph. Suggested first sentence: "Five persona maps connect the developer mental models from [Landscape](/v2/developers/concepts/landscape) to the specific repositories, SDKs, and guides each persona reaches for." | 40–44 | HIGH | S | check 2.5, 4.5 |
| 3 | Add `veracityStatus: unverified` to frontmatter (between lines 21 and 22). | 21–22 | HIGH | S | check 1.8, 6.6 |
| 4 | Replace every `classDef … fill:#... stroke:#... color:#...` in the five Mermaid blocks with values imported from `snippets/components/config/MermaidColours.jsx`. | 116–123, 181–188, 262–271, 345–353, 425–432 | HIGH | M | check 5.8, 5.27, 5.34 |
| 5 | Wrap each Mermaid block in `<ScrollableDiagram>`. | 74–123, 134–189, 200–271, 283–354, 366–432 | HIGH | S | check 5.27 |
| 6 | Add Related Pages footer with `<CustomDivider />` + `## Related Pages` + `<Columns cols={2}>` + four `<Card>` with `<CustomCardTitle icon ... horizontal />`: 1) Landscape (prereq), 2) Repo Map (sibling), 3) `/v2/about/concepts/about-livepeer` (P5 graduation), 4) `/v2/gateways/concepts/role` (P2/P4 graduation). | after line 445 | HIGH | M | check 5.16, 5.17, 7.6 |
| 7 | Convert the colour-convention raw markdown table (lines 49–66) to `<StyledTable>`. Better: delete the table entirely once classDefs import from `MermaidColours.jsx`. | 49–66 | HIGH | M | check 5.23 |
| 8 | Add clickable graduation lists below each Mermaid diagram. For each persona, render the top three named guides as `<Columns cols={2}>` `<Card href="..." title="...">` blocks. | after each Mermaid | HIGH | L | check 4.20, 7.6, 10.2 |
| 9 | Refactor body into a `<Tabs>` block — one `<Tab icon="..." title="...">` per persona. Moves five-persona content into single-pane selectable view. | 69–432 | HIGH | XL | check 5.14, Layer 2 |
| 10 | Replace H2 "Colour convention (consistent across all five)" with "Diagram legend" once colours are imported. Better: remove the section entirely. | 46 | MEDIUM | S | check 3.1 (score 16 → FAIL) |
| 11 | Rewrite persona-body intro lines (70, 128, 194, 276, 359) from reader-state ("Looking for…") to entity-led ("The AI persona reaches Livepeer through the AI Gateway API…"). | 70, 128, 194, 276, 359 | MEDIUM | M | check 2.13 |
| 12 | Replace EN-dashes `–` in narrative prose (lines 31, 34, 198, 277, 364, 438, 444) with colon or comma. EN-dashes in H2 separators (lines 69, 127, 193, 275, 358) can stay as styled separators or be replaced with `:`. | 13 lines | MEDIUM | M | CLAUDE.md "No em dashes" — interpreted to cover EN-dash in narrative. |
| 13 | Add prereq link at top of page: "Read [Landscape](/v2/developers/concepts/landscape) first if you have not identified your persona." | new line near 40 | MEDIUM | S | check 4.5, 10.5 |
| 14 | Add first-use definitions or glossary links: `T2I/I2I/I2V/I2T/A2T/TTS/SAM2/LV2V` (line 85), `TicketBroker` (line 92 et al), `AISR/AIServiceRegistry` (line 386), `LL-HLS` (line 290), `Catalyst` (line 303). | 85, 92, 290, 303, 386 | MEDIUM | M | check 2.21 |
| 15 | Add citation links: line 85 "11 native pipelines" → `https://github.com/livepeer/ai-runner/blob/main/aiModels.json`; line 223 "12 plugins live" → NaaP repo plugin list URL; line 224 "post-#3641" → `https://github.com/livepeer/go-livepeer/pull/3641`. Implement as a Sources footnote section above Related Pages. | 85, 223, 224 + new footnote section | MEDIUM | M | check 6.1, 6.4 |
| 16 | Align OG image with landscape.mdx: change `og:image: /snippets/assets/media/og-images/fallback.png` to `/snippets/assets/site/og-image/en/developers.png` and align `og:image:alt`. | 16, 17 | INFO | S | landscape.mdx parity |
| 17 | Declare `pageVariant: compendium` in frontmatter. | between 8 and 9 | INFO | S | check 1.3 |
| 18 | Move "Cross-persona observations" content (lines 436–445) to top of page as a `<Note>` block — it's product insight, currently buried. | 436–445 | INFO | M | Layer 5 |
| 19 | Add per-persona `<Badge>` (Production / Beta / Reference) inside each Tab body header. | top of each Tab (post-refactor) | INFO | S | Layer 5 |
