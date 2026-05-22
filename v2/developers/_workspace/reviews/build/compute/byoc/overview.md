# Review: overview.mdx

**Page**: `v2/developers/build/compute/byoc/overview.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A6
**pageType (from frontmatter)**: `overview` (line 22 — NON-CANONICAL)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 6,839
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 22) is not in canonical set `{concept, tutorial, guide, instruction, navigation, reference, resource}`. Should be `concept` (subgroup overview = governing concept) |
| 1. Frontmatter | 1.3 | pageVariant | INFO | Absent; `overview` variant would be appropriate |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Field missing — should be `orient` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` (line 23) |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing — should be `unverified` at minimum |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | MIXED | line 4-6: "How Bring Your Own Compute (BYOC) containers integrate..." — starts with "How", not strictly subject-first; 137 chars OK; no "this page"; UK English OK |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 fields present (lines 17-21) |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | line 8 `livepeer` too generic; rest specific |
| 1. Frontmatter | 1.14 | audience match | PASS | Developer register matches content |
| 2. Voice | 2.1 | UK English | PASS | No US spellings detected |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 38: "BYOC (Bring Your Own Compute) is the mechanism..." — subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology | MIXED | "Bring Your Own Compute" (line 4, 38) vs `byoc-quickstart.mdx` "Bring Your Own Container" (line 40) — naming collision within the same subgroup. Lock one expansion |
| 2. Voice | 2.12 | Em-dashes | PASS | Zero |
| 2. Voice | 2.13 | Entity-led voice | PASS | Paragraphs lead with "BYOC", "Every BYOC container", "PyTrickle's StreamServer" |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | Orchestrator, Gateway used correctly |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | NOT-TESTED | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "trickle protocol" (line 40) named but not defined or linked on first use; "AI Service Registry" (line 38, 122) named but no contract address or link |
| 2. Voice | 2.22 | Terminology lock | FAIL | Two BYOC expansions used: "Bring Your Own Compute" (this page) vs "Bring Your Own Container" (quickstart). Pick one and propagate |
| 2. Voice | 2.D1 | Code-first opening | N/A | Concept page |
| 2. Voice | 2.D2 | API/method has code | PASS | `/health`, `/api/stream/start` etc. shown |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No version pin for ai-runner, go-livepeer, PyTrickle, or BYOC PR #3641 (per-second compute). The Phase-4 PR per `task-3-rewrite-scope.md` should be cited |
| 2. Voice | 2.D4 | Errors in main content | N/A | Concept page — no error states discussed |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | All score ≥20 (see Heading Score Table) |
| 3. Headings | 3.2 | Banned/weak terms | PASS | No banned terms; no "Overview" used as H2 |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | "HTTP Contract", "Network Discovery", "Payment Flow" all domain-anchored |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "BYOC Overview" — 2 words |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | Concept-page governing-concept headings |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Orient developer to BYOC mechanism |
| 4. Structure | 4.2 | Purpose statement test | PASS | "This page lets the developer understand how a BYOC container integrates with the orchestrator" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | No parent `compute/overview.mdx` exists — orient-up edge broken (see IA gap below) |
| 4. Structure | 4.4 | No dead ends | PASS | Related Pages CardGroup at footer (lines 142-155) |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Concept page (prerequisites for the quickstart, not the concept) |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | PyTrickle link, real-time pipeline link at line 79 route out |
| 4. Structure | 4.7 | Info type per section | PASS | Technical + analytical, appropriate for concept |
| 4. Structure | 4.8 | No content duplication | MIXED | HTTP Contract endpoints (lines 71-77) overlap with `byoc-architecture.mdx` Health check + `pytrickle/frame-processor.mdx` endpoint table |
| 4. Structure | 4.9 | Section orientation | FAIL | No parent overview at `compute/overview.mdx` — this page is the section landing but presents only BYOC, not compute as a whole |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links. All 4 Related cards point inside `developers/` |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "what is BYOC" but not "should I use it" or "what does it cost" or "is it production-ready" |
| 4. Structure | 4.12 | Page size | PASS | 6.8 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | FAIL | No mention of container size, cold start time, debugging cost, GPU resource competition. Brief specifies these (per `task-3-rewrite-scope.md`) |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | `json` tag on line 87 block |
| 4. Structure | 4.18 | Code-first opening | N/A | Concept page |
| 4. Structure | 4.19 | Error states main | N/A | |
| 4. Structure | 4.20 | API/method has code/link | PASS | Endpoints shown with table |
| 5. Layout | 5.1 | Correct template | MIXED | `pageType: overview` non-canonical (5.7); content fits `concept` template |
| 5. Layout | 5.2 | Required sections | PASS | Concept template: Intro + governing-concept H2s + Related ✓ |
| 5. Layout | 5.3 | Approved components | PASS | `<CenteredContainer>`, `<Tip>`, `<CustomDivider>`, `<StyledTable>`, `<CardGroup>`, `<Card>`, `<LinkArrow>` all approved |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Real-time endpoints (lines 71-77) is raw markdown table — should be `<StyledTable>` (the first endpoints table at lines 48-68 correctly uses `<StyledTable>`); aiModels.json fields table (lines 108-114) also raw markdown |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 24) legacy field |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | HTTP Contract → Registration → Discovery → Payment is logical |
| 5. Layout | 5.14 | Multi-view | PASS | |
| 5. Layout | 5.15 | Data imports | FAIL | `aiModels.json` example (lines 87-104) hardcoded; should pull from a shared snippet (`snippets/data/byoc/aiModels-example.json`). Same example reappears on `byoc-architecture.mdx` (line 67) with different fields |
| 5. Layout | 5.16 | Related Pages OR Next Step | MIXED | Both present-ish: prose orientation line at line 138 ("[BYOC quickstart] walks through...") AND `## Related Pages` `<CardGroup>` at line 140. Line 138 reads more as a closing pointer than a duplicate Next-Step heading — borderline; 5.16 forbids both Related Pages footer AND Next-Step CTA — this page has Related Pages plus an inline pointer, marginal |
| 5. Layout | 5.17 | Related Pages format | FAIL | Uses `<CardGroup cols={2}>` (line 142) not `<Columns cols={2}>`. Cards lack `<CustomCardTitle>`; no `horizontal` prop on cards; using `arrow horizontal` shortcuts (not the `<CustomCardTitle>` pattern required by 5.17) |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon+title | FAIL | json block at line 87 missing both `icon` and `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | Concept page |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | All 4 Related Pages `<Card>` (lines 143-154) use plain `title` attribute, not `<CustomCardTitle>` |
| 5. Layout | 5.23 | StyledTable | FAIL | Real-time endpoints table (lines 72-77) and aiModels.json fields table (lines 108-114) are raw markdown |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 3 tables on the page (lines 48-68 StyledTable, 72-77 markdown, 108-114 markdown) — exceeds limit |
| 5. Layout | 5.25 | Max 1 major element | PASS | One StyledTable, one CardGroup |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider at line 36 OK; line 42 between intro paragraphs and first H2 — `5.26` says NO divider between intro and first H2. The line-42 divider violates placement |
| 5. Layout | 5.27 | Mermaid | FAIL | No diagram. A BYOC overview page should show the gateway→orchestrator→container flow as Mermaid sequenceDiagram, not prose alone. `byoc-architecture.mdx` ships an ASCII tree (line 40-53) — neither page meets 5.27 |
| 5. Layout | 5.28 | Import ordering | PASS | LinkArrow (element) → CenteredContainer (wrapper) → StyledTable (display) — acceptable |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | |
| 5. Layout | 5.32 | Reference tables end | N/A | Concept page |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 5. Layout | — | CustomDivider import | FAIL | `<CustomDivider />` used 5× (lines 36, 42, 81, 118, 128, 136) but NOT imported at the top — line 28-30 only imports LinkArrow, CenteredContainer, StyledTable. Will fail to render or pull a global if one exists |
| 6. Veracity | 6.1 | Claims citable | FAIL | "AI Service Registry on-chain" (line 38, 122) — no contract address. "Arbitrum One" (line 122) — no chain ID or contract link. "`tools.livepeer.cloud/ai/network-capabilities`" (line 126) — bare URL without `https://` or link |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | json example unlabelled |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | PASS | `price_per_unit: 1000000` realistic wei value |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent — cannot assess honesty |
| 6. Veracity | 6.7 | Glossary | NOT-TESTED | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No version pin for ai-runner, no Phase-4 PR reference (BYOC PR #3641 per brief) |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No T1 link to `livepeer/ai-runner`, `livepeer/go-livepeer`, or registry contract |
| 6. Veracity | 6.11 | Glossary defs | NOT-TESTED | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | NOT-TESTED | |
| 7. Nav/IA | 7.2 | Mirrors fs | FAIL | Parent `build/compute/overview.mdx` listed in IA but missing on disk (per brief) |
| 7. Nav/IA | 7.3 | Portal routes | FAIL | No `compute/overview.mdx` to act as section portal — see IA gap |
| 7. Nav/IA | 7.4 | Orphans | FAIL | This page is the de-facto section landing without a parent. Sibling pages (architecture, production, sdk, reference-pipelines) chain from here but the section root is empty |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Persona-3 journey starts here but has no orient-up to "what is compute?" |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | Zero cross-tab links |
| 7. Nav/IA | 7.7 | Correct lane | PASS | `v2/` publishable lane |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | PASS | 6.8 KB substantive |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | MIXED | Links to `byoc-quickstart`, `byoc-architecture`, `byoc-production`, `comfystream-as-byoc`, `pytrickle/overview` — all resolve. But `comfystream-as-byoc` href uses old singular slug; confirm path |
| 8. Links | 8.2 | External | FAIL | `tools.livepeer.cloud/ai/network-capabilities` (line 126) printed as bare text, not as a link |
| 8. Links | 8.3 | Snippets | FAIL | `<CustomDivider />` not imported (see 5.28 finding) |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | NOT-TESTED | CustomDivider import gap may prevent render |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | "What is BYOC" answered; "should I use it / what does it cost / how is it different from native ai-runner" not answered |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Orient → architecture → quickstart → production chain exists but lacks costs/trade-offs page |
| 10. Completeness | 10.3 | Persona paths | MIXED | Persona 3 (compute primitives) — densest path — but no decision matrix vs native ai-runner pipelines |
| 10. Completeness | 10.4 | Scope | PASS | Scope clear: BYOC as registration mechanism |
| 10. Completeness | 10.5 | Self-containment | MIXED | Real-time endpoints partly punted to PyTrickle page |
| 10. Completeness | 10.6 | Language paths | N/A | |
| 10. Completeness | 10.7 | Persona guides | MIXED | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "BYOC Overview" | PASS | 2 words |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "How Bring Your Own Compute..." | MIXED | 137 chars OK; opens with "How" not subject; reasonable |
| pageType | Yes | overview | FAIL | Non-canonical; should be `concept` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Missing — should be `orient` |
| complexity | No | — | FAIL | Missing — should be `intermediate` |
| lifecycleStage | No | — | FAIL | Missing — should be `build` |
| keywords | Yes | array | MIXED | `livepeer` too generic |
| og:image (5 fields) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Missing |
| status | Yes | current | FAIL | Legacy field — remove |
| lastVerified | Yes | 2026-05-13 | PASS | |
| pageVariant | No | — | INFO | `overview` variant recommended |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | — | NOT IMPORTED — render risk; placement at line 42 (between intro and first H2) violates 5.26 |
| `<CenteredContainer>` | Yes (1×) | — | — | Used for header `<Tip>` ✓ |
| `<Tip>` | Yes (1×) | Recommended for header CTA | — | OK |
| `<StyledTable>` | Yes (1×) | Required for data tables | — | Used for endpoints; 2 other tables remain raw markdown (FAIL 5.23) |
| `<CardGroup>` | Yes (1×) | — | — | Should be `<Columns cols={2}>` (FAIL 5.17) |
| `<Card>` | Yes (4×) | Required | — | All lack `<CustomCardTitle>` (FAIL 5.22) |
| `<CustomCardTitle>` | No | Required inside nav `<Card>` | — | FAIL 5.22 |
| `<LinkArrow>` | Yes (1×) | — | — | OK |
| Fenced code w/ icon+title | No | Required | — | json block at line 87 missing both |
| `<AccordionGroup>` | No | Recommended for FAQ/edges | — | Trade-offs section absent |
| `<Tabs>` | No | — | — | Not needed for this page |
| Mermaid | No | Recommended (5.27) | — | Should diagram the routing flow |

## Cross-page duplication and link gaps

- **OVERLAP**: HTTP Contract endpoints (lines 48-68 + 72-77) duplicate `byoc-architecture.mdx` "Three-layer architecture" + Health check + `pytrickle/frame-processor.mdx` endpoints table. Concept overview and architecture should diverge: this page = governing concept; architecture = implementation depth. Currently both describe the same `/health` + `/api/stream/*` set.
- **OVERLAP**: `aiModels.json` example here (lines 87-104) vs `byoc-architecture.mdx` line 67-76 — different fields shown each time, suggesting no canonical source. Should live in one snippet.
- **LINK GAPS**:
  - "AI Service Registry on-chain" (line 38, 122) — no contract address, no link to registry page, no Arbiscan link.
  - `tools.livepeer.cloud/ai/network-capabilities` (line 126) — printed as text, should be an anchor link.
  - "trickle protocol" (line 40) — no link; should point to a protocol spec or `pytrickle` overview.
  - "ai-runner" first mention (line 38) — not linked to `livepeer/ai-runner` repo.
  - `livepeer/go-livepeer` BYOC PR #3641 (per brief, per-second compute) — never referenced.
- **STRANDED**: Page ends with Related Pages but doesn't tell the reader "you are persona 3, your next move is byoc-quickstart". Implicit, not signposted.
- **IA-DRIFT (CRITICAL)**: Parent `v2/developers/build/compute/overview.mdx` missing. This BYOC overview sits one level below a nonexistent compute root. Persona-3 readers landing on `/build/compute/` get a 404 or a sibling redirect.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
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
| Terminology collision | 1 | "Bring Your Own Compute" vs `byoc-quickstart.mdx` line 40 "Bring Your Own Container" — lock one |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| HTTP Contract | 5 | 4 | 5 | 5 | 5 | 24 |
| Registering with an Orchestrator | 5 | 4 | 5 | 5 | 4 | 23 |
| Network Discovery | 5 | 4 | 5 | 5 | 5 | 24 |
| Payment Flow | 5 | 4 | 5 | 5 | 5 | 24 |
| Related Pages | — | — | — | — | — | exempt |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 87 | json | ✗ | ✗ | NOT-TESTED | FAIL 5.20; should be `icon="code" title="aiModels.json"` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page introduces BYOC as a mechanism but doesn't answer the senior-engineer question "should I use BYOC or extend native ai-runner?" There is no "when to use BYOC" decision frame. A developer landing here can't decide whether to invest in containerisation or contribute a native pipeline. The 25-minute quickstart is one click away, but the decision to invest in BYOC at all isn't supported.
- **Fix step:** Add a "When to use BYOC" `<Tip>` block after the opening, with 3 bullets: "Use BYOC when (a) your inference is non-CUDA / non-PyTorch (e.g. JAX, ggml), (b) your model isn't in ai-runner's catalogue, (c) you need framework isolation". And a contrasting "Use native ai-runner when (a) your model is SDXL/Whisper/etc., (b) you want zero container overhead, (c) you'll publish back upstream".
- **Source/exemplar:** `realtime-ai/comfystream/overview.mdx` lines 178-220 (decision matrix pattern); per `5-whys-prompt.md` Layer 1 worked example for ComfyStream.

### Layer 2 — Composition
- **Gap:** Concept page with a routing flow described in three prose paragraphs and a raw-markdown endpoint table. No Mermaid diagram (5.27 FAIL) for the gateway→orchestrator→container path. No `<AccordionGroup>` for trade-offs / edge cases / failure modes. Real-time endpoints table is markdown not `<StyledTable>` (5.23 FAIL). `<CardGroup>` not `<Columns>` (5.17 FAIL). All Cards lack `<CustomCardTitle>` (5.22 FAIL). `<CustomDivider />` not imported (8.3 FAIL — render risk).
- **Fix step:** Insert a Mermaid `sequenceDiagram` after the intro showing: Gateway → Orchestrator (capability lookup) → BYOC Container (`/health` + pipeline POST) → Orchestrator (payment settle) → Gateway. Use `MermaidColours.jsx`. Convert lines 72-77 markdown table to `<StyledTable>`. Convert lines 108-114 markdown table to `<StyledTable>`. Replace `<CardGroup cols={2}>` (line 142) with `<Columns cols={2}>` and wrap each Card title with `<CustomCardTitle icon="..." title="..." horizontal />`. Add `import { CustomDivider } from '/snippets/components/elements/spacing/Divider.jsx'` to imports. Remove the divider between lines 41-42 per 5.26 (no divider between intro and first H2). Add `<AccordionGroup>` §"Trade-offs" with three accordions: "Container size & cold start", "Debugging cost", "GPU resource competition".
- **Source/exemplar:** `_packet/component-matrix.md` concept pageType rows; `byoc-architecture.mdx` lines 40-53 ASCII tree (counter-example — also fails 5.27).

### Layer 3 — Cross-page integration
- **Gap:** Zero cross-tab links. No graduation to Gateways (self-host, where the orchestrator that runs the container lives), Solutions (managed alternative), Orchestrators (the node-op angle — operators register BYOC capabilities). No upstream repo links: `livepeer/ai-runner`, `livepeer/go-livepeer`, `livepeer/pytrickle`. No link to BYOC PR #3641 (per-second compute) per brief. `tools.livepeer.cloud/ai/network-capabilities` printed as plain text, not anchored.
- **Fix step:** Add to Related Pages footer (after format fix): card 1 = sibling `byoc-architecture`, card 2 = `/v2/orchestrators/setup/capabilities` (graduation: how operators advertise BYOC), card 3 = `/v2/gateways/setup/connect` (graduation: how gateways route to BYOC), card 4 = `/v2/developers/guides/payments/per-second-compute` (the billing model). Inline link `livepeer/ai-runner` on first mention (line 38). Inline link to BYOC PR #3641 / Phase-4 release notes near §"Payment Flow". Make `tools.livepeer.cloud/ai/network-capabilities` (line 126) an anchor: `[network capabilities dashboard](https://tools.livepeer.cloud/ai/network-capabilities)`.
- **Source/exemplar:** `_workspace/audit-2026-05-12/task-3-rewrite-scope.md` — Phase 4 / per-second compute references.

### Layer 4 — Veracity and source authority
- **Gap:** Multiple T1-grade claims unsupported. "AI Service Registry smart contract on Arbitrum One" (line 122) — no contract address. "Gateways query the registry when routing" (line 122) — no link to the registry contract or its ABI. "ai-runner pipelines" (line 38) — no repo link. `aiModels.json` example (lines 87-104) — no link to the canonical file in `livepeer/go-livepeer` or to the schema. `veracityStatus` field absent — the page implicitly claims authority it hasn't earned. No `TESTED:` label on json block.
- **Fix step:** Add `veracityStatus: unverified` (line 24-area, replace `status: current`). Add inline citation at line 122: "AI Service Registry on Arbitrum One ([contract `0x...`](https://arbiscan.io/address/0x...))". Replace `tools.livepeer.cloud/ai/network-capabilities` plain text with the actual link. Add citation for the json schema: "Schema defined in [`go-livepeer/server/ai_aiModels.go`](https://github.com/livepeer/go-livepeer/blob/master/...)" (placeholder for real path). Add `{/* TESTED: aiModels.json example matches PR #3641 schema, 2026-05-11 */}` above json block.
- **Source/exemplar:** `livepeer/go-livepeer` PR #3641 (per-second compute); registry contract on Arbiscan.

### Layer 5 — Product-forward depth
- **Gap:** Page reads as "here is the contract". No production-readiness signal. No cost signal. No maintenance signal. No "what could go wrong" section. The brief explicitly names container size, cold start, debugging cost as the three trade-offs every BYOC page should surface — and this overview, which orients the entire BYOC subgroup, names none of them. A senior engineer asking "should I commit a sprint to BYOC?" gets no decision-grade input from this page.
- **Fix step:** Add §"Trade-offs" with three accordions before Related Pages: (a) Container size & cold start — "2-8 GB images typical, 30s-2min cold-start versus 0s for native"; (b) Debugging cost — "Container logs only via orchestrator log forwarding; no native debugger attach"; (c) GPU resource competition — "Container shares GPU with other warm models; expect 20-40% throughput reduction vs dedicated GPU". Add `<Badge>Phase 4 — per-second compute, mainnet</Badge>` near header. Add §"Costs" one-liner: "Pricing follows per-second-compute (link)" with a numeric example.
- **Source/exemplar:** `_workspace/audit-2026-05-12/task-3-rewrite-scope.md` (trade-offs list); `.claude/references/layout/exemplars.md` — gateway-quickstart maturity badge pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 1 / HIGH 9 / MEDIUM 6 / INFO 2
**Critical findings (1–5)**:
1. **IA-DRIFT**: parent `v2/developers/build/compute/overview.mdx` missing on disk. This page acts as the de-facto section landing without a section root. Persona-3 orient-up is broken.
2. `pageType: overview` non-canonical (1.2 / 5.7); 4 required frontmatter fields missing (`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`). Page is governance-non-compliant.
3. `<CustomDivider />` used 5× but NOT imported. Render risk under strict Mintlify bundler.
4. Related Pages format wrong: `<CardGroup>` not `<Columns>`; no `<CustomCardTitle>`. Zero cross-tab links (4.10, 7.6).
5. Trade-offs absent. Brief specifies container-size / cold-start / debugging-cost trade-offs (per task-3-rewrite-scope.md); the orient page for BYOC names none.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Create parent `v2/developers/build/compute/overview.mdx` (section root); this BYOC overview becomes a child concept page | new file + this page | CRITICAL | M | IA-DRIFT; brief |
| 2 | Change `pageType: overview` → `pageType: concept`; add `purpose: orient`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` | 22 + add lines | HIGH | S | check 1.1, 1.2 |
| 3 | Remove legacy `status: current` (line 24) | 24 | MEDIUM | S | check 5.7 |
| 4 | Add `import { CustomDivider } from '/snippets/components/elements/spacing/Divider.jsx'` to imports | 28-30 | HIGH | S | check 8.3 |
| 5 | Remove divider at line 42 (between intro and first H2 — violates 5.26) | 42 | MEDIUM | S | check 5.26 |
| 6 | Replace `<CardGroup cols={2}>` (line 142) with `<Columns cols={2}>`; wrap each Card with `<CustomCardTitle icon="..." title="..." horizontal />`; remove the inline pointer at line 138 (5.16 forbids dual) | 138-155 | HIGH | M | check 5.17, 5.22, 5.16 |
| 7 | Convert raw markdown tables at lines 72-77 and 108-114 to `<StyledTable>` | 72-77, 108-114 | HIGH | M | check 5.23 |
| 8 | Reduce 3 tables to 2 (max per 5.24): merge real-time endpoints into the main HTTP Contract table OR move to `byoc-architecture.mdx` | 48-77 | MEDIUM | M | check 5.24 |
| 9 | Add Mermaid `sequenceDiagram` (Gateway → Orchestrator → Container → return) using `MermaidColours.jsx`, after line 41 intro | after 41 | HIGH | M | check 5.27 |
| 10 | Add `icon="code" title="aiModels.json"` to json block at line 87 | 87 | HIGH | S | check 5.20 |
| 11 | Add §"Trade-offs" AccordionGroup before Related Pages: container size / cold start, debugging cost, GPU resource competition | before line 140 | HIGH | M | check 4.15; task-3-rewrite-scope.md |
| 12 | Lock BYOC expansion: "Bring Your Own Compute" across all BYOC pages (or pick "Bring Your Own Container"); propagate | 4, 38 + sibling pages | HIGH | M | check 2.11, 2.22 |
| 13 | Add inline link to `livepeer/ai-runner` at first mention (line 38) | 38 | HIGH | S | check 6.10 |
| 14 | Add registry contract address + Arbiscan link at line 122 (`{/* REVIEW: confirm contract address */}` if unknown) | 122 | HIGH | S | check 6.1, 6.10 |
| 15 | Make `tools.livepeer.cloud/ai/network-capabilities` (line 126) an anchor link | 126 | MEDIUM | S | check 8.2 |
| 16 | Add ≥3 cross-tab graduation cards: `/v2/orchestrators/setup/capabilities`, `/v2/gateways/setup/connect`, `/v2/developers/guides/payments/per-second-compute` | 142-155 | HIGH | M | check 4.10, 7.6 |
| 17 | Define "trickle protocol" on first use (line 40) — link to pytrickle/overview or protocol spec | 40 | MEDIUM | S | check 2.21 |
| 18 | Extract `aiModels.json` example to a shared snippet; import here and on `byoc-architecture.mdx` | 87-104 | MEDIUM | M | check 5.15, 4.8 |
| 19 | Cite BYOC PR #3641 / Phase-4 release notes near §"Payment Flow" | near 130 | MEDIUM | S | check 6.8; brief |
| 20 | Drop `livepeer` keyword (line 8) | 8 | INFO | S | check 1.13 |
