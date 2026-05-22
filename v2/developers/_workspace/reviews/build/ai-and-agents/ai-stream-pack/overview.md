# Review: overview.mdx (AI Stream Pack)

**Page**: `v2/developers/build/ai-and-agents/ai-stream-pack/overview.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A4
**pageType (from frontmatter)**: `overview` (NON-CANONICAL — should be `concept`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING (required)
**Bytes**: 6,419
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. `status: current` present (legacy field) |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 22) — canonical set is `concept\|tutorial\|guide\|instruction\|navigation\|reference\|resource`. Should be `concept` |
| 1. Frontmatter | 1.3 | pageVariant canonical | N/A | Not present |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `orient` or `explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` valid |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `build` |
| 1. Frontmatter | 1.8 | veracityStatus present | FAIL | Missing — should be `unverified` at minimum |
| 1. Frontmatter | 1.9 | industry valid | N/A | Not present |
| 1. Frontmatter | 1.10 | niche valid | N/A | Not present |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first ("The Livepeer ComfyUI-Stream-Pack..."), 138 chars, no "this page" |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 OG fields present (lines 17–21) |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "ComfyUI custom nodes", "Foundation Nodes", "Control Nodes" — specific |
| 1. Frontmatter | 1.14 | audience register match | PASS | Developer register; code-adjacent voice |
| 2. Voice | 2.1 | UK English | PASS | No US spellings found (CenteredContainer is a component name) |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | No "not [X]" value statements, no unresolved "if" |
| 2. Voice | 2.5 | Opening order | PASS | Body opens "The Livepeer `ComfyUI-Stream-Pack`..." subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Tight body; bullets are minimal |
| 2. Voice | 2.7 | Audience register | PASS | Developer-adjacent |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | None |
| 2. Voice | 2.9 | No passive value | PASS | Claims concrete (e.g. "introduces node categories that accept live streams as first-class inputs") |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | ComfyStream, ComfyUI-Stream-Pack, AI Stream Pack consistent |
| 2. Voice | 2.12 | Zero em-dashes | PASS | None |
| 2. Voice | 2.13 | Entity-led voice | PASS | Paragraphs start with system facts ("The node pack uses…", "Control Nodes are…") |
| 2. Voice | 2.14 | No hedging verbs in value claims | PASS | |
| 2. Voice | 2.15 | description not self-referential | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms consistent | N/A | No protocol terms |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | Not run |
| 2. Voice | 2.19 | Glossary alignment | N/A | No glossary-routed terms |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | `ComfyStream` introduced without inline link to ComfyStream overview; `LoadTensor`/`LoadAudioTensor` defined inline (good) |
| 2. Voice | 2.22 | Terminology lock respected | PASS | |
| 2. Voice | 2.D1 | Code-first opening | N/A | concept page, not instruction |
| 2. Voice | 2.D2 | Every API/method has code or link | MIXED | `LoadTensor` and `LoadAudioTensor` named in prose; no code example showing them in a workflow JSON; no GitHub permalink to node source |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No version pin for ComfyUI-Stream-Pack repo (no commit, tag, or branch) |
| 2. Voice | 2.D4 | Errors in main content | N/A | No error states named |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing adjacent to tech | PASS | |
| 2. Voice | 2.D7 | Note/Info not for primary content | MIXED | Line 80–82 `<Note>` IS primary content (it states the maturity reality of Foundation/Light nodes — "have no shipped implementations"). This is a critical product-truth and should be a `<Warning>` or body sentence, not buried in a Note |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Node Categories" (22), "Control Nodes" (22), "Installation" (avoid-tier — 17), "Using Stream Pack Nodes in a Workflow" (24), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | MIXED | "Installation" is avoid-tier per rubric; rest OK |
| 3. Headings | 3.3 | No literal contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor applied | PASS | |
| 3. Headings | 3.5 | Names concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "AI Stream Pack" — 3 words, concept-derived |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming style | PASS | concept-style governing nouns |
| 3. Headings | 3.9 | Per-audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose, one audience | PASS | Concept overview of the node pack |
| 4. Structure | 4.2 | Purpose statement test | PASS | "Lets the developer understand what ComfyUI-Stream-Pack adds to ComfyUI" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | MIXED | No prereq breadcrumb to `realtime-ai/comfystream/overview` (this is parent context). Links to it ONLY inside Related Pages |
| 4. Structure | 4.4 | No dead ends | PASS | CardGroup at footer with 4 next steps |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No "Prerequisites" section. Needs ComfyUI installed, ComfyStream runtime, GPU. Reader is dropped into install steps line 92 without prereqs |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Workflow-authoring + BYOC linked, not recreated |
| 4. Structure | 4.7 | Info type per section | PASS | Conceptual + procedural mix appropriate |
| 4. Structure | 4.8 | No content duplication | PASS | Distinct from ComfyStream overview |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links (no Gateways for self-host, no Solutions for managed, no About for orchestrator role) |
| 4. Structure | 4.11 | Discord test | MIXED | Reader knows what the pack does, but cannot evaluate "is this for me?" — no decision/maturity signal |
| 4. Structure | 4.12 | Page size | PASS | 6.4 KB substantive |
| 4. Structure | 4.13 | Zero TODO/REVIEW | PASS | None |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | Note on line 80 names the Foundation/Light reality but it is buried. No "when not to use" section. No maturity badge |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Code blocks have language tag | PASS | Single fenced block at line 92 tagged `bash` |
| 4. Structure | 4.18 | Code-first opening on instruction | N/A | Concept page |
| 4. Structure | 4.19 | Error states in main content | N/A | |
| 4. Structure | 4.20 | API/method has code or link | MIXED | `LoadTensor`/`LoadAudioTensor` referenced but no link to source node files in repo |
| 5. Layout | 5.1 | Correct template | MIXED | concept structure OK, but `pageType: overview` is non-canonical |
| 5. Layout | 5.2 | Required sections present | MIXED | Concept does not require Prerequisites, but installation block needs Prerequisites for usability |
| 5. Layout | 5.3 | Approved components only | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component mapping | MIXED | Numbered list at lines 105–108 should be `<StyledSteps>` per check 5.21 |
| 5. Layout | 5.6 | MDX renders clean | PASS (presumed) | No JSX errors visible |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `pageType: overview`, `status: current` are legacy schema |
| 5. Layout | 5.8 | CSS custom properties | PASS | No inline styles |
| 5. Layout | 5.9 | Generated banners intact | N/A | Not generated |
| 5. Layout | 5.10 | Component PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | Not compared |
| 5. Layout | 5.12 | Section blocks from gold-standard | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering matches pageType | PASS | |
| 5. Layout | 5.14 | Multi-view rules | N/A | No multi-view |
| 5. Layout | 5.15 | Data imports used | FAIL | Repo URL `https://github.com/livepeer/ComfyUI-Stream-Pack.git` (line 94) hard-coded — should be data import or linkable constant per check 5.15 |
| 5. Layout | 5.16 | Related Pages footer OR Next Step CTA | PASS | Related Pages present (line 116) |
| 5. Layout | 5.17 | Related Pages format | MIXED | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>` per check 5.17. Card uses plain `title=` prop, not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs used |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon + title | FAIL | Line 92 fenced ` ```bash ` block has no `icon` and no `title` attribute |
| 5. Layout | 5.21 | StyledSteps not raw Steps | FAIL | Numbered list at lines 105–108 ("1. Add a `LoadTensor` node... 2. Connect it... 3. Export... 4. Point ComfyStream...") is markdown numbered list — should be `<StyledSteps>` |
| 5. Layout | 5.22 | Nav Card uses CustomCardTitle | FAIL | Related Pages Cards use `title=` directly, not `<CustomCardTitle icon ...>` |
| 5. Layout | 5.23 | StyledTable used | PASS | Lines 46–67 use `<StyledTable variant="bordered">` |
| 5. Layout | 5.24 | Max 1–2 tables | PASS | One table |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening divider at line 36; before Related Pages; between H2s |
| 5. Layout | 5.27 | Mermaid governed | N/A | No mermaid |
| 5. Layout | 5.28 | Import ordering | MIXED | Imports at lines 28–30: `LinkArrow` (elements), `CenteredContainer` (wrappers), `StyledTable/TableRow/TableCell` (displays) — order is not strictly component → data → page → composable; ordering by folder is mixed |
| 5. Layout | 5.29 | Media placeholders in TODO JSX | N/A | No media |
| 5. Layout | 5.30 | Fact-check flags as REVIEW JSX | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | FAIL | The Foundation/Light "no shipped implementations" fact is the most important product signal on the page and it is buried inside `<Note>` at line 80 |
| 5. Layout | 5.32 | Reference tables at end | PASS | |
| 5. Layout | 5.33 | Drafts in workspace | PASS | |
| 5. Layout | 5.34 | No inline styles | PASS | |
| 6. Veracity | 6.1 | Every claim citable | MIXED | "Three categories" claim is from upstream pack README — not cited inline; LoadTensor/LoadAudioTensor names match repo but no permalink |
| 6. Veracity | 6.2 | Code tested | NOT-TESTED | Install block has no TESTED label |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | N/A | No quantitative claims |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing — file has no veracityStatus field at all |
| 6. Veracity | 6.7 | Uses resources/glossary.mdx | N/A | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No version, tag, or commit reference for ComfyUI-Stream-Pack |
| 6. Veracity | 6.9 | No open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority tiers | MIXED | Upstream repo named but only inline backtick, not a clickable link |
| 6. Veracity | 6.11 | Glossary matches universal-terms | N/A | |
| 6. Veracity | 6.12 | Glossary verified against veracity-sources | N/A | |
| 7. Navigation | 7.1 | Page in docs.json | PASS | `docs.json` line 2548 |
| 7. Navigation | 7.2 | docs.json mirrors filesystem | MIXED | Folder has only this one file plus 5 stubs; only this file is registered. Stubs are not registered |
| 7. Navigation | 7.3 | Portal/index routes | PASS | |
| 7. Navigation | 7.4 | No structural orphans | MIXED | The 5 stub siblings in this folder are file-orphans (not registered in nav) |
| 7. Navigation | 7.5 | Audience journey complete | MIXED | Builder-from-zero is incomplete — no prereq breadcrumb |
| 7. Navigation | 7.6 | ≥3 cross-tab graduation | FAIL | No cross-tab links at all |
| 7. Navigation | 7.7 | Correct lane (publishable) | PASS | |
| 7. Navigation | 7.8 | Naming conventions | PASS | |
| 7. Navigation | 7.9 | _workspace TTL | N/A | |
| 7. Navigation | 7.10 | No stubs in published nav | PASS | Only the overview is registered; stubs are unregistered (good) |
| 7. Navigation | 7.11 | Resources sub-structure | N/A | |
| 7. Navigation | 7.12 | Guides scope | N/A | |
| 8. Links | 8.1 | Internal links resolve | PASS | `/v2/developers/build/ai-and-agents/realtime-ai/comfystream/workflow-authoring`, `/.../comfystream/overview`, `/.../comfystream-as-byoc`, `/.../pytrickle/overview` all exist |
| 8. Links | 8.2 | External links live | NOT-TESTED | `github.com/livepeer/ComfyUI-Stream-Pack` not 200-tested |
| 8. Links | 8.3 | Snippet imports resolve | PASS | LinkArrow, CenteredContainer, StyledTable all real paths |
| 8. Links | 8.4 | Images load | N/A | |
| 8. Links | 8.5 | Page renders | NOT-TESTED | Smoke test not run |
| 8. Links | 8.6 | No TODO/TBD | PASS | |
| 9. Process | 9.1 | Human sign-off | NOT-TESTED | |
| 9. Process | 9.2 | Consuming decisions | NOT-TESTED | |
| 9. Process | 9.3 | Gate prerequisites met | NOT-TESTED | |
| 9. Process | 9.4 | Phase ordering | NOT-TESTED | |
| 9. Process | 9.5 | Findings before fixes | NOT-TESTED | |
| 9. Process | 9.6 | Feedback routed | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list question covered | PASS | "What is ComfyUI-Stream-Pack?" |
| 10. Completeness | 10.2 | Zero-to-hero journey | FAIL | This page is the entry to a 6-page section where 5 siblings are stubs. The page cannot deliver a zero-to-hero journey for any of the pipelines (streamdiffusion, super-resolution, audio-transcription, comfyui-rtc) because the leaves don't exist |
| 10. Completeness | 10.3 | Persona paths unblocked | MIXED | Concept persona unblocked; build persona stranded at "Installation" step |
| 10. Completeness | 10.4 | Scope boundaries explicit | MIXED | "Foundation/Light not shipped" is the scope but buried in Note |
| 10. Completeness | 10.5 | Self-containment | MIXED | Section overview pretends section is fleshed out — but every leaf is a stub |
| 10. Completeness | 10.6 | Code samples working language | MIXED | Single bash install line; no JS/TS/Python integration example |
| 10. Completeness | 10.7 | Persona-specific guides | N/A | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "AI Stream Pack" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "The Livepeer ComfyUI-Stream-Pack..." | PASS | 138 chars, subject-first |
| pageType | Yes | overview | FAIL | NON-CANONICAL — should be `concept` |
| pageVariant | No | — | N/A | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Required — should be `orient` or `explain` |
| complexity | No | — | FAIL | Required — should be `intermediate` |
| lifecycleStage | No | — | FAIL | Required — should be `build` |
| keywords | Yes | array of 9 specific terms | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt | Yes | "..." | PASS | |
| og:image:type | Yes | image/png | PASS | |
| og:image:width | Yes | 1200 | PASS | |
| og:image:height | Yes | 630 | PASS | |
| veracityStatus | No | — | FAIL | Required — should be `unverified` |
| status | Yes | current | INFO | Legacy schema field — superseded by veracityStatus |
| lastVerified | Yes | 2026-05-13 | PASS | |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | — | Placement OK |
| `<CenteredContainer>` | Yes (1×) | — | OK | Header `<Tip>` wrap |
| `<Tip>` | Yes (1×) | Recommended | OK | Header CTA |
| `<Tabs>` / `<Tab icon>` | No | Recommended for variants | — | Not needed — single pack |
| `<StyledSteps>` / `<StyledStep>` | No | Recommended (procedural at lines 105–108) | FAIL | Numbered markdown list 1–4 should be StyledSteps per check 5.21 |
| `<Card>` / `<Columns cols={2}>` | Used `<CardGroup cols={2}>` not `<Columns>` | Related Pages required | FAIL | Should be `<Columns cols={2}>` per check 5.17 |
| `<CustomCardTitle icon ... />` | No | Required inside nav `<Card>` | FAIL | Cards use plain `title=` prop |
| Fenced code with icon + title | No | Required where code present | FAIL | Line 92 bash block has no `icon` and no `title` |
| `<Note>` | Yes (1×, lines 80–82) | — | FAIL | Carries primary product-truth (Foundation/Light nodes not shipped) — should be inline or a `<Warning>` |
| `<AccordionGroup>` / `<Accordion icon>` | No | Recommended for trade-offs/FAQ | — | Could surface "when not to use" |
| `<StyledTable>` | Yes (1×) | Recommended | OK | |
| `<LinkArrow>` | Yes (1×) | — | OK | |

## Cross-page duplication and link gaps

- **OVERLAP**: minor with `realtime-ai/comfystream/overview.mdx` on installation flow (both reference cloning custom_nodes). This is acceptable because audiences differ — but cross-link required.
- **LINK GAPS**:
  - No inline GitHub link to `livepeer/ComfyUI-Stream-Pack` repo — only a raw `git clone` URL in code (line 94) and an inline backtick mention (line 38)
  - No cross-tab link to Solutions (managed alternative to self-running ComfyStream)
  - No cross-tab link to Gateways (orchestrators that consume these pipelines)
  - No link to ComfyStream upstream docs
  - No link to source files for `LoadTensor` / `LoadAudioTensor` in the repo
  - `realtime-ai/comfystream/overview` is the implicit prerequisite — not linked at top of page
- **STRANDED**: Builder arriving from a search query gets installation steps but no "is this for me?" signal, no maturity badge, and no production-readiness statement. Note on line 80 is the critical product caveat (5/6 node categories are scaffold-only) and is hidden in a `<Note>`.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | None |
| US spellings | 0 | (component name `CenteredContainer` is not a spelling) |
| Banned words | 0 | None |
| Banned phrases | 0 | None |
| Banned constructions | 0 | None |
| Conditional gatekeeping | 0 | None |
| Hand-holding | 0 | None |
| Question headings | 0 | None |
| Studio refs | 0 | None |
| Hedging openers | 0 | None |
| Self-reference | 0 | None |
| Deprecated terms | 0 | None |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Node Categories | 4 | 4 | 5 | 5 | 5 | 23 |
| Control Nodes | 4 | 4 | 5 | 5 | 5 | 23 |
| Installation | 3 | 2 | 5 | 5 | 5 | 20 (avoid-tier) |
| Using Stream Pack Nodes in a Workflow | 5 | 5 | 5 | 5 | 4 | 24 |
| Related Pages | exempt | | | | | — |

"Installation" sits on the avoid-tier line — not banned but flagged in §3.2.

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 92 | bash | NO | NO | NOT-TESTED | Two-line clone; FAIL 5.20 (no `icon="terminal"`, no `title="install.sh"`) and 6.2 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The page introduces three node categories but only one (Control Nodes) actually ships. The 5/6 stub leaves in this section mean a developer who lands here cannot evaluate or run any of the named pipelines (streamdiffusion, super-resolution, audio-transcription, comfyui-rtc). They cannot answer "is this for me?" because the page does not state production-readiness, performance numbers, or supported model count.
- **Fix step:** Add a "Status" or "When to use" block immediately after the opening intro (around line 39), with three bullets: (1) what ships today (2 Control Nodes + ComfyStream integration), (2) what is scaffold-only (Foundation/Light categories), (3) production-readiness signal (Beta — used in `daydream.live` / `dream-gateway` workflows). Promote the Note on lines 80–82 to this block.
- **Source/exemplar:** `.claude/references/layout/best-practice.md` — "maturity badge" pattern; the worked example in `_packet/5-whys-prompt.md` lines 132–135 (ComfyStream maturity-badge fix).

### Layer 2 — Composition
- **Gap:** Per component-matrix.md, concept pages benefit from `<Tabs>` for variant content and `<AccordionGroup>` for edge-cases/FAQ. The page has neither. Procedural section "Using Stream Pack Nodes in a Workflow" (lines 102–110) uses a markdown numbered list where `<StyledSteps>` is required (check 5.21). The Related Pages CardGroup uses `<CardGroup cols={2}>` not `<Columns cols={2}>` and Cards use plain `title=` not `<CustomCardTitle>` (checks 5.17, 5.22).
- **Fix step:** Convert lines 105–108 to `<StyledSteps>` with `<StyledStep iconColor titleColor>`. Convert the Related Pages `<CardGroup>` to `<Columns cols={2}>` and wrap each Card title in `<CustomCardTitle icon=... title=... />`.
- **Source/exemplar:** `_packet/component-matrix.md` lines 53–67 (concept block); `snippets/templates/pages/page-composition-framework.mdx` Related Pages format.

### Layer 3 — Cross-page integration
- **Gap:** No inline clickable GitHub link to `livepeer/ComfyUI-Stream-Pack`. No prerequisite breadcrumb to `realtime-ai/comfystream/overview` at the top of the page (the pack only works inside ComfyStream). No cross-tab graduation paths (Solutions for managed, Gateways for self-host, About for orchestrator role). No link to ComfyUI upstream docs.
- **Fix step:** Add an opening "Source" line under the Tip block: `Source: [`livepeer/ComfyUI-Stream-Pack`](https://github.com/livepeer/ComfyUI-Stream-Pack)`. Add a prerequisite Tip before "Node Categories": `Pack runs inside [ComfyStream](/v2/developers/build/ai-and-agents/realtime-ai/comfystream/overview).` Add to Related Pages: cross-tab card to `/v2/solutions` and `/v2/gateways/setup/connect`.
- **Source/exemplar:** `livepeer/ComfyUI-Stream-Pack` README; check 7.6 (≥3 cross-tab links).

### Layer 4 — Veracity and source authority
- **Gap:** "Three categories" classification has no citation. `LoadTensor` and `LoadAudioTensor` claim no permalink to source files. No pinned version, tag, or commit for the pack (check 2.D3 + 6.8). Install block at line 92 has no TESTED label. `veracityStatus` field missing entirely (check 6.6).
- **Fix step:** Add citation footnote referencing `nodes/control/` directory of the pack repo. Pin a tag or commit SHA in the clone instruction or in a "Tested against" line. Label install block `<!-- TESTED 2026-05-11 against tag vX.Y -->`. Add `veracityStatus: unverified` and `lastVerified: 2026-05-11` to frontmatter.
- **Source/exemplar:** `github.com/livepeer/ComfyUI-Stream-Pack` — repo tree.

### Layer 5 — Product-forward depth
- **Gap:** Page reads like a node-pack manifest, not a product page. It does not answer: (a) why does this exist (what would the developer build with it) — i.e. example outcomes; (b) when not to use it (batch ComfyUI is sufficient when …); (c) what is the cost model (this is community / self-host / pay-as-you-go on the network); (d) is there a hosted entry point for builders who do not want to run ComfyUI. The Foundation/Light non-shipped fact, which is the single biggest "what's the catch?" signal, is hidden in `<Note>` at line 80.
- **Fix step:** Add §"When to use AI Stream Pack" after the intro: two-bullet decision block (`If you have a ComfyUI workflow + need real-time streaming + can run a GPU node → use AI Stream Pack. If you need hosted real-time inference without ComfyUI → use the LV2V endpoint directly.`). Add §"Status" or in-prose maturity sentence promoting the Note content. Add §"Costs / Run model" — one paragraph noting community gateway vs. self-host vs. orchestrator.
- **Source/exemplar:** `_packet/5-whys-prompt.md` worked example lines 109–135 (ComfyStream overview pattern: maturity badge + when-not-to-use + costs).

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 2
**Critical findings (top 5)**:
1. `pageType: overview` is non-canonical — should be `concept` (HIGH, check 1.2 + 5.7)
2. 4 required frontmatter fields missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` (HIGH, check 1.1)
3. Numbered list at lines 105–108 should be `<StyledSteps>` (HIGH, check 5.21)
4. Code block at line 92 missing `icon` and `title` (HIGH, check 5.20)
5. Section's product truth (5/6 node categories not yet shipped) buried in a `<Note>` instead of being a top-of-page status signal (HIGH, check 5.31 + Layer 5)

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: overview` → `pageType: concept`. Add `purpose: orient`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter | 22 | HIGH | S | check 1.2 + 1.4–1.8 |
| 2 | Add §"Status" or `<Warning>` block after line 39 stating Foundation/Light node categories are scaffold-only; promote Note line 80 into it | 39 / 80 | HIGH | S | check 5.31, Layer 5 |
| 3 | Replace numbered list lines 105–108 with `<StyledSteps>` containing 4 `<StyledStep iconColor titleColor title=...>` blocks | 105–108 | HIGH | S | check 5.21 |
| 4 | Add `icon="terminal"` and `title="install-stream-pack.sh"` to bash block | 92 | HIGH | S | check 5.20 |
| 5 | Convert `<CardGroup cols={2}>` to `<Columns cols={2}>`; wrap each Card title with `<CustomCardTitle icon="..." title="..." />`; ensure cards `horizontal` | 120–157 | HIGH | M | check 5.17, 5.22 |
| 6 | Add inline source link to ComfyUI-Stream-Pack repo (`Source: [livepeer/ComfyUI-Stream-Pack](https://github.com/livepeer/ComfyUI-Stream-Pack)`) below header Tip | ~36 | HIGH | S | check 6.10 |
| 7 | Add prereq Tip linking to `comfystream/overview` before "Node Categories" | ~42 | MEDIUM | S | check 4.3 |
| 8 | Add §"When to use AI Stream Pack" decision block after intro | ~39 | MEDIUM | M | Layer 5 |
| 9 | Add ≥3 cross-tab links (Solutions, Gateways, About) into Related Pages | 120–157 | MEDIUM | S | check 7.6 |
| 10 | Pin a version/tag or commit for the pack (`Tested against tag v0.X.Y`) and add `TESTED` label to install block | 90–95 | MEDIUM | S | check 2.D3 + 6.2 |
| 11 | Rename "Installation" → e.g. "Installing the Pack" or "Setup" to remove avoid-tier term | 86 | INFO | S | check 3.2 |
| 12 | Remove legacy `status: current` field (superseded by `veracityStatus`) | 24 | INFO | S | check 5.7 |
