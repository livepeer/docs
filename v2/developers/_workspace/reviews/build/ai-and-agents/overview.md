# Review: overview.mdx (ai-and-agents)

**Page**: `v2/developers/build/ai-and-agents/overview.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `concept`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `explain`
**Bytes**: 11,339
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | Has 9 of 10 — `keywords` array (lines 6-14) does not include `lastVerified`; `veracityStatus` present (line 27). `purpose: explain` present |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `pageType: concept` (line 15) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | Not used |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `purpose: explain` (line 17) |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `audience: developer` (line 16) |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `complexity: intermediate` (line 18) |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `lifecycleStage: discover` (line 19) |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `veracityStatus: verified` (line 27) |
| 1. Frontmatter | 1.9 | industry array | N/A | Not used |
| 1. Frontmatter | 1.10 | niche array | N/A | Not used |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Bring Your Own Container runs any Python AI model on the Livepeer network through a containerised trickle protocol interface." 142 chars, subject-led |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 fields (lines 20-24) |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `byoc`, `pytrickle`, `frame processor`, `capability`, `docker` — specific |
| 1. Frontmatter | 1.14 | audience register match | PASS | Developer-leaning prose, code samples present |
| 2. Voice | 2.1 | UK English | PASS | No US hits (only Python `initialize` identifier in code) |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 40: "Bring Your Own Container (BYOC) extends what runs on Livepeer..." |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | BYOC, PyTrickle, ComfyStream consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "BYOC extends...", "A BYOC container does..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | Gateway, Orchestrator consistent |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | "Bring Your Own Container (BYOC)" line 40 |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | concept page |
| 2. Voice | 2.D2 | API/method has code or link | PASS | FrameProcessor + endpoints both shown |
| 2. Voice | 2.D3 | Versions explicit | MIXED | "Phase 4 (January 2026)" pinned; but "PyTrickle" install from `git+https://github.com/livepeer/pytrickle.git` (line 220) is unpinned — no commit/tag |
| 2. Voice | 2.D4 | Errors in main content | N/A | No error states; concept |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing adjacent | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No Note |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "BYOC Selection Criteria" (22), "Container Contract" (22), "FrameProcessor Contract" (23), "Capability Registration" (24), "Per-Second Compute" (22), "Production Deployments" (22), "Container Hosting" (22), "Client-Side Integration" (22), "Local Development" (21), "Next Steps" (avoid — see 3.2) |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "Next Steps" (line 230) — Avoid list per rubric. Use "Related Pages" or a more specific Card title |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor applied | PASS | |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "BYOC Overview" — 2 words |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming style | PASS | governing-concept |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Concept page on BYOC |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer evaluate BYOC vs. alternatives" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | Selection criteria links across siblings |
| 4. Structure | 4.4 | No dead ends | PASS | Next Steps CardGroup |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Concept page; readers route via Selection Criteria |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Routes to byoc-quickstart, comfystream-as-byoc |
| 4. Structure | 4.7 | Info type per section | PASS | Concept + factual |
| 4. Structure | 4.8 | No content duplication | MIXED | FrameProcessor code (lines 102-130) duplicates `pytrickle/overview.mdx` (lines 48-74) and `pytrickle/frame-processor.mdx` (lines 46+) — same class shape three times |
| 4. Structure | 4.9 | Section orientation page | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links — no Gateways (self-host), no Solutions (managed), no About (protocol). All eight `LinkArrow` targets stay in `developers/` |
| 4. Structure | 4.11 | Discord test | MIXED | Page answers "what is BYOC" but does not answer "do I need BYOC instead of ComfyStream-as-BYOC?" with a one-line decision |
| 4. Structure | 4.12 | Page size | PASS | 11.3 KB substantive |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | Page lists who runs BYOC (Embody, Streamplace, ComfyStream) but no "when not to use BYOC", no production-readiness signal beyond "Phase 4 hardened" claim with no link to a PR/release |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | FAIL | Line 73 ASCII flow diagram is a fenced block with no language tag; line 219 bash block missing icon/title (see 5.20) |
| 4. Structure | 4.18 | Code-first opening | N/A | concept |
| 4. Structure | 4.19 | Error states in main | N/A | |
| 4. Structure | 4.20 | API/method has code or link | PASS | |
| 5. Layout | 5.1 | Correct template | PASS | concept |
| 5. Layout | 5.2 | Required sections present | PASS | Header CTA, intro, H2s, Next Steps |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | The four `<LinkArrow>`-decision tables (lines 52-59, 87-92, 142-146, 183-186, 205-211) are raw markdown tables; rubric requires `<StyledTable>` (5.23) |
| 5. Layout | 5.6 | MDX renders clean | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 25: `status: current` legacy; superseded by `veracityStatus` |
| 5. Layout | 5.8 | CSS custom properties | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks from gold-standard | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports used | FAIL | `-byoc`, `-byocContainerURL`, `-byocModelID` flags hardcoded (lines 144-146) — should import from a flags data module (cross-tab parallels exist in gateways/orchestrators) |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | "Next Steps" CardGroup AND closing prose paragraph "The BYOC quickstart walks through... Start there." (line 228) — both present; check 5.16 forbids both. Also heading "Next Steps" violates 3.2 |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; uses plain `title=` not `<CustomCardTitle icon ... horizontal>` per check 5.17 |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs on page |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions on page |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All four code blocks missing icon+title: line 73 (ascii), 102 (python class), 198 (ts SDK), 219 (bash install) |
| 5. Layout | 5.21 | StyledSteps used | N/A | No procedural section |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | FAIL | Lines 233-244 use plain `<Card title="..." icon="..." href="...">` — not `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable not raw markdown | FAIL | 5 raw markdown tables (lines 52, 87, 142, 183, 205). Rubric requires `<StyledTable>` (this also exceeds 1-2 per page, 5.24) |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 5 tables on page; rubric max 1-2 |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider line 38 OK; dividers between H2s (5.26 says optional, fine); but final divider line 226 separates closing prose from "Next Steps" — divider should be BEFORE Related Pages (which this isn't) |
| 5. Layout | 5.27 | Mermaid | FAIL | Line 73-83 is an ASCII protocol-flow diagram inside a plain fenced block. Should be a Mermaid sequence/flow diagram per check 5.27 + governed colours |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical info visible | PASS | |
| 5. Layout | 5.32 | Reference tables at end | N/A | concept |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Factual claims citable | MIXED | "Phase 4 (January 2026) hardened BYOC for production" — no PR or release link to anchor the claim; "Embody and Streamplace currently run production BYOC workloads" — no link to either deployment |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No TESTED/NOT-TESTED labels on any of the 4 code blocks |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | PASS | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | Marked `verified`; but PyTrickle install (line 220) pulls from `main` HEAD — version drift risk |
| 6. Veracity | 6.7 | Glossary source | PASS | |
| 6. Veracity | 6.8 | Source staleness | MIXED | `@muxionlabs/byoc-sdk` referenced — no version; "TypeScript SDK for client-side BYOC consumption" with no npm version pin |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers | MIXED | go-livepeer flags named but no link to flag reference in go-livepeer source |
| 6. Veracity | 6.11 | Glossary defs match | PASS | |
| 6. Veracity | 6.12 | Defs vs veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | In docs.json | PASS | line 2516 in docs.json |
| 7. Nav/IA | 7.2 | docs.json mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | No orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | PASS | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab graduation | FAIL | All links internal to `developers/` |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | File naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs in nav | PASS | |
| 7. Nav/IA | 7.11 | Resources structure | N/A | |
| 7. Nav/IA | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | All 8 LinkArrow + 4 Card hrefs resolve to existing files |
| 8. Links | 8.2 | External links live | NOT-TESTED | `muxionlabs/byoc-example-apps`, `muxionlabs/livepeer-app-pipelines`, `docs.comfystream.org` referenced; not curl-tested |
| 8. Links | 8.3 | Snippets resolve | PASS | LinkArrow, CustomDivider, CenteredContainer imports resolve |
| 8. Links | 8.4 | Images load | N/A | OG image only |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | Out of reviewer scope |
| 10. Completeness | 10.1 | Job-list coverage | PASS | |
| 10. Completeness | 10.2 | Zero-to-hero | PASS | |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope explicit | MIXED | Doesn't explicitly say "for the integration path, see ComfyStream-as-BYOC" until line 44 — buried |
| 10. Completeness | 10.5 | Self-containment | PASS | |
| 10. Completeness | 10.6 | Language paths | PASS | Python + TS shown |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "BYOC Overview" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "Bring Your Own Container runs any Python AI model on the Livepeer network through a containerised trickle protocol interface." | PASS | Subject-first, 142 chars |
| pageType | Yes | concept | PASS | Canonical |
| audience | Yes | developer | PASS | |
| purpose | Yes | explain | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | [array] | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | Yes | verified | PASS | |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | Legacy field — drop per 5.7 |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (10×) | Required | — | Final divider before "Next Steps" OK; placement broadly correct |
| `<Tabs>` / `<Tab icon>` | No | Recommended for variants | Yes | Could group `process_video_async` / `process_audio_async` examples under Tabs |
| `<StyledSteps>` / `<StyledStep>` | No | — | — | concept page, not procedural |
| `<Columns cols={2}>` Related Pages | No | Required | Yes | Uses `<CardGroup>` not `<Columns>`; uses plain `Card title=...` not `<CustomCardTitle>` |
| `<CustomCardTitle>` | No | Required inside nav `<Card>` | — | Missing on all 4 Next Steps cards |
| Fenced code with icon + title | No | Required | — | All 4 code blocks missing icon+title (lines 73, 102, 198, 219) |
| `<Note>` / `<Tip>` / `<Warning>` | Yes (`<Tip>` line 35) | — | — | Header CTA only, OK |
| `<Accordion>` / icon | No | Recommended for FAQ | — | Could group BYOC selection rules into Accordion |
| `<StyledTable>` | No | Required for data tables | — | 5 raw markdown tables present — all should be `<StyledTable>` |
| `<CenteredContainer>` | Yes | — | — | Used for header CTA only |
| `<LinkArrow>` | Yes (8×) | — | — | In-prose link decoration |
| ASCII diagram block | Yes (line 73) | — | — | Should be Mermaid per 5.27 |

## Cross-page duplication and link gaps

- **OVERLAP**: FrameProcessor class skeleton (lines 102-130) duplicates `realtime-ai/pytrickle/overview.mdx` lines 48-74 and `realtime-ai/pytrickle/frame-processor.mdx` lines 46+. Same class shape, three pages.
- **OVERLAP**: BYOC capability flag table (lines 142-146) overlaps with the BYOC architecture page (`build/compute/byoc/byoc-architecture.mdx`) — needs cross-link rather than re-print.
- **LINK GAPS**: No link to upstream `livepeer/pytrickle` README on first PyTrickle mention. No link to `livepeer/comfystream` repo on first ComfyStream mention. Phase 4 claim has no PR/release reference.
- **LINK GAPS**: Embody and Streamplace named as production users — neither linked to a deployment page, case study, or company URL.
- **STRANDED**: Reader who decides "I need BYOC" is sent to byoc-quickstart but not to "before you start" / "is my model a fit?" decision. No risk-acknowledgement card.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | (only Python `initialize` identifier in code, not narrative) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Conditional gatekeeping | 0 | — |
| Hand-holding | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Hedging openers | 0 | — |
| Self-reference | 0 | — |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| BYOC Selection Criteria | 5 | 4 | 4 | 5 | 4 | 22 |
| Container Contract | 4 | 4 | 5 | 5 | 5 | 23 |
| FrameProcessor Contract | 5 | 4 | 4 | 5 | 5 | 23 |
| Capability Registration | 5 | 5 | 5 | 5 | 4 | 24 |
| Per-Second Compute | 5 | 4 | 4 | 5 | 4 | 22 |
| Production Deployments | 5 | 4 | 4 | 5 | 4 | 22 |
| Container Hosting | 4 | 4 | 5 | 5 | 4 | 22 |
| Client-Side Integration | 4 | 4 | 5 | 5 | 4 | 22 |
| Local Development | 4 | 4 | 5 | 4 | 4 | 21 |
| Next Steps | 1 | 1 | 3 | 4 | 5 | 14 — banned/weak |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 73 | None | ✗ | ✗ | — | FAIL 4.17 + 5.20 + 5.27 — ASCII flow diagram should be Mermaid |
| 102 | python | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 198 | ts | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 219 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20; install command unpinned (uses HEAD) |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises "BYOC overview" but never answers the real question a developer arriving here asks: "Should I use BYOC, ComfyStream-as-BYOC, or AI Jobs?" The Selection Criteria table (lines 52-59) lists three outcomes but doesn't compare cost, complexity, or time-to-first-job across paths.
- **Fix step:** Insert a decision matrix `<StyledTable>` at line ~50 comparing: Time to first job (BYOC: ~25 min via byoc-quickstart; ComfyStream-as-BYOC: ~15 min if workflow exists; AI Jobs: 5 min). Add rows for "container image to ship", "GPU required by you?", "model freedom".
- **Source/exemplar:** Pattern in `v2/about/_workspace/reviews2/network/architecture.md` § "Layer 1" — decision matrix before mechanism.

### Layer 2 — Composition
- **Gap:** Five raw markdown tables, no `<Tabs>`, no `<Accordion>`, no `<StyledTable>`, no `<Columns>` Related Pages. Page is prose+table-heavy without the components rubric requires for a concept page.
- **Fix step:** Convert tables at lines 52, 87, 142, 183, 205 to `<StyledTable variant="bordered">`. Replace the closing `<CardGroup>` (lines 232-245) with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="rocket" title="BYOC Quickstart" horizontal />`. Replace the H2 "Next Steps" (line 230) with H2 "Related Pages". Add `<CustomDivider />` immediately before line 230.
- **Source/exemplar:** `snippets/templates/pages/page-composition-framework.mdx` Related Pages format; `.claude/references/layout/best-practice.md` "Related Pages footer".

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links. No link to upstream `livepeer/pytrickle` repo at first PyTrickle mention (line 42); no link to `livepeer/comfystream` (line 44 only links to internal page). No link to Phase 4 PR or release notes. No "graduation to Gateways" for self-host operators or "graduation to Solutions" for managed alternatives.
- **Fix step:** Add to line 42: `the integration layer is [livepeer/pytrickle](https://github.com/livepeer/pytrickle); the SDK...`. Add to line 174: `[muxionlabs/byoc-example-apps](https://github.com/muxionlabs/byoc-example-apps)`. Add a Related Pages card linking to `/v2/gateways/setup/connect` (self-host graduation) and `/v2/about/network/architecture` (protocol context).
- **Source/exemplar:** Upstream `https://github.com/livepeer/pytrickle` README; `v2/gateways/setup/connect.mdx`.

### Layer 4 — Veracity and source authority
- **Gap:** "Phase 4 (January 2026) hardened BYOC for production" — no link to a PR, release notes, or changelog. "Embody and Streamplace currently run production BYOC workloads" — no case study or deployment link. PyTrickle install (line 220) pulls HEAD from `main` — no version pin despite `veracityStatus: verified`. No code block TESTED.
- **Fix step:** Replace line 42 Phase 4 sentence with citation: "Phase 4 ([PR #NNN](https://github.com/livepeer/go-livepeer/pull/NNN), January 2026) hardened BYOC...". Pin line 220 install: `pip install git+https://github.com/livepeer/pytrickle.git@v0.X.Y`. Label code blocks NOT-TESTED with reason or TESTED with date.
- **Source/exemplar:** `livepeer/pytrickle` releases page; go-livepeer Phase 4 changelog entry.

### Layer 5 — Product-forward depth
- **Gap:** Page reads as a feature list, not a product-evaluation page. No "When BYOC is the wrong choice" section. No production-readiness signal (no Beta/Stable badge, no SLO). No cost expectations beyond "pay per second" — no $/hour figure or comparison to AWS GPU rental. No mention of operational concerns (image registry private vs public security, GPU sharing, container restart policy).
- **Fix step:** Add a header-level `<Badge>Beta — production-tested with Embody, Streamplace, ComfyStream</Badge>` near the opening Tip. Add a §"When BYOC is the wrong choice" with three bullets ("If your model is in the native AI Jobs catalogue, use AI Jobs — same network, simpler interface"; "If your workflow is ComfyUI, use ComfyStream-as-BYOC — pre-built image"; "If you don't need persistent compute, use Solutions managed gateways"). Add §"Operational cost reference" linking to per-second-compute pricing.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` — gateway-quickstart pattern for maturity badge; the existing `comfystream/overview.mdx` "Relationship to BYOC" decision table is the in-house pattern to mirror.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 6 / INFO 2
**Critical findings (1–5)**:
1. Related Pages footer uses `<CardGroup>` + plain `<Card>` instead of `<Columns cols={2}>` + `<CustomCardTitle>` (checks 5.16, 5.17, 5.22) — and ships both an in-prose Next Step paragraph (line 228) AND a Next Steps CardGroup (line 232) — 5.16 forbids both.
2. All 4 code blocks missing `icon` + `title` metadata (5.20). ASCII protocol diagram at line 73 should be Mermaid per 5.27 + has no language tag (4.17).
3. 5 raw markdown tables — should be `<StyledTable>` per 5.23; also exceeds 1-2-tables-per-page limit (5.24).
4. Zero cross-tab graduation links (4.10, 7.6) — page never sends reader to Gateways/Solutions/About.
5. Veracity gap: "Phase 4" claim has no PR/release link; PyTrickle install pulls HEAD (no version pin) despite `veracityStatus: verified` (1.8, 6.6).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Convert `<CardGroup>` (lines 232-245) to `<Columns cols={2}>` with `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` per check 5.17; rename H2 from "Next Steps" to "Related Pages" (line 230) | 230-245 | HIGH | M | check 5.16+5.17+5.22; agents/eliza-integration review |
| 2 | Remove the closing prose paragraph at line 228 ("The BYOC quickstart walks through... Start there.") — check 5.16 forbids both Next-Step prose AND Related Pages | 228 | HIGH | S | check 5.16 |
| 3 | Add `icon="terminal"` + `title="processor.py"` to python block line 102; `icon="code"` + `title="byoc-client.ts"` to ts block line 198; `icon="terminal"` + `title="install.sh"` to bash block line 219 | 102, 198, 219 | HIGH | S | check 5.20 |
| 4 | Replace ASCII diagram at lines 73-83 with a Mermaid sequence diagram using `MermaidColours.jsx`; add language tag and `<ScrollableDiagram>` wrapper | 73-83 | HIGH | M | check 4.17+5.27 |
| 5 | Convert 5 markdown tables to `<StyledTable variant="bordered">`; reduce table count to 2 (consolidate Selection Criteria + Hosting Options into one decision matrix; collapse the 4-endpoint and 3-flag tables into a single capability table) | 52, 87, 142, 183, 205 | HIGH | M | check 5.23+5.24 |
| 6 | Pin PyTrickle install: replace `git+https://github.com/livepeer/pytrickle.git` with `git+https://github.com/livepeer/pytrickle.git@v<latest-tag>` | 220 | HIGH | S | check 2.D3+6.8 |
| 7 | Add Phase 4 citation: change line 42 to "Phase 4 ([REVIEW: link to PR #NNN], January 2026)"; add `{/* REVIEW: source */}` comment | 42 | HIGH | S | check 6.1+6.5 |
| 8 | Add ≥3 cross-tab graduation cards in Related Pages: `/v2/gateways/setup/connect` (self-host), `/v2/about/network/architecture` (protocol context), `/v2/solutions/managed-gateway` (or equivalent managed path) | 230-245 | HIGH | S | check 4.10+7.6 |
| 9 | Remove legacy `status: current` field (line 25) | 25 | MEDIUM | S | check 5.7 |
| 10 | Insert upstream repo links inline at first mention: line 42 (`livepeer/pytrickle`); line 174 (`muxionlabs/byoc-example-apps`, `muxionlabs/livepeer-app-pipelines`, `@muxionlabs/byoc-sdk`); line 190 (`livepeer/comfystream`) | 42, 174, 190 | MEDIUM | S | check 6.1+layer 4 |
| 11 | Add §"When BYOC is the wrong choice" before §"BYOC Selection Criteria" — three bullets routing readers to AI Jobs, ComfyStream-as-BYOC, or Solutions managed | line 48 | MEDIUM | S | check 4.15; layer 5 |
| 12 | Label every code block TESTED with date or NOT-TESTED with reason | 102, 198, 219 | MEDIUM | S | check 6.2 |
| 13 | Extract `-byoc`, `-byocContainerURL`, `-byocModelID` flag rows to a shared go-livepeer flags snippet/data module (search `snippets/data/orchestrators/` for parallels) | 142-146 | INFO | M | check 5.15 |
| 14 | De-duplicate FrameProcessor code: keep canonical version in `pytrickle/frame-processor.mdx`; replace lines 102-130 with a 6-line tease + LinkArrow to the reference page | 102-130 | INFO | S | check 4.8 |
