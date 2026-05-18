# Review: reference-pipelines.mdx

**Page**: `v2/developers/build/compute/byoc/reference-pipelines.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A6
**pageType (from frontmatter)**: `reference` (line 8)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: MISSING
**Bytes**: 4,818
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference` |
| 1. Frontmatter | 1.3 | pageVariant | INFO | Absent; `compendium` would fit |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `reference` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing — should be `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing — should be `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Production BYOC pipelines running on the Livepeer network..." 142 chars, subject-led |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords specific | PASS | All specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | No US hits |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 34: "The following real-time AI pipelines are deployed..." — subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology | PASS | |
| 2. Voice | 2.12 | Em-dashes | PASS | Zero |
| 2. Voice | 2.13 | Entity-led voice | PASS | "The following real-time AI pipelines" leads; "All pipelines use" leads |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | NOT-TESTED | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "ComfyStream" (line 29) — no link to overview at first mention (linked later at 119); "ComfyUI workflow" (line 34) — no link to ComfyUI upstream; "StreamDiffusion", "ControlNet", "IPAdapter", "FaceID", "Whisper", "Gemma", "SuperResolution" — none linked to upstream model docs |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first opening | N/A | Reference |
| 2. Voice | 2.D2 | API/method has code | MIXED | Reference page — each pipeline is a real production deployment but no `model_id` strings, no example invocation, no orchestrator config sample |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No version pin for any pipeline; "Each pipeline is a ComfyUI workflow" but no pipeline version, no workflow JSON hash, no Docker image tag |
| 2. Voice | 2.D4 | Errors in main content | N/A | |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "Available pipelines" (22), "Building a custom pipeline" (23) |
| 3. Headings | 3.2 | Banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | "Available pipelines", "Building a custom pipeline" |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Reference pipelines" — 2 words |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Catalogue production BYOC pipelines |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer see and pick from production reference pipelines" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | FAIL | Parent compute/overview missing |
| 4. Structure | 4.4 | No dead ends | MIXED | Closing pointer at line 125; no Related Pages footer |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Reference |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Routes to ComfyStream + workflow-authoring + byoc-quickstart |
| 4. Structure | 4.7 | Info type per section | MIXED | Reference table good; "Building a custom pipeline" (lines 116-121) is a 4-step procedural list — should be `<StyledSteps>` per 5.21 |
| 4. Structure | 4.8 | No content duplication | MIXED | Pipeline VRAM/FPS overlaps with `realtime-ai/comfystream/overview.mdx` hardware-requirements section (per section-1 review) — should pull from one snippet |
| 4. Structure | 4.9 | Section orientation | FAIL | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero |
| 4. Structure | 4.11 | Discord test | MIXED | "What pipelines can I run?" answered ✓; "How do I run pipeline X?" not directly answered — reader has to follow workflow-authoring path |
| 4. Structure | 4.12 | Page size | PASS | 4.8 KB — borderline; rubric ≥5 KB for substantive reference. Close to threshold but under |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | VRAM and FPS named per pipeline ✓; cold-start time, network availability ("is this pipeline warm on enough orchestrators to be reliable?"), maintenance status — not named |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | N/A | No fenced blocks |
| 4. Structure | 4.18 | Code-first opening | N/A | |
| 4. Structure | 4.19 | Error states main | N/A | |
| 4. Structure | 4.20 | API/method has code/link | FAIL | Pipeline names listed — none with `model_id` string for `aiModels.json`, none with curl example, none with Docker image reference |
| 5. Layout | 5.1 | Correct template | MIXED | Reference template applied for the table; "Building a custom pipeline" subsection is loose |
| 5. Layout | 5.2 | Required sections | FAIL | Reference matrix requires Related Pages footer; this page has prose pointer (line 125) only |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | StyledTable used correctly (✓); procedural list (116-121) should be `<StyledSteps>` |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 10) legacy field |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | Reference table at start, building section after, pointer at end |
| 5. Layout | 5.14 | Multi-view | PASS | |
| 5. Layout | 5.15 | Data imports | FAIL | Pipeline catalogue hardcoded. Should pull from `aiModels.json` or `snippets/data/byoc/reference-pipelines.json`. This list overlaps `realtime-ai/comfystream/overview.mdx` |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | NEITHER — prose pointer at line 125 only |
| 5. Layout | 5.17 | Related Pages format | FAIL | No section |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon | N/A | |
| 5. Layout | 5.20 | Code block icon+title | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | FAIL | "Building a custom pipeline" numbered list (lines 118-121) — should be `<StyledSteps>` with `<StyledStep>` per 5.21 |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | N/A | |
| 5. Layout | 5.23 | StyledTable | PASS | Available pipelines table is `<StyledTable variant="bordered">` ✓ |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider line 32; divider line 36 between intro (line 34) and first H2 (line 38) — violates 5.26 |
| 5. Layout | 5.27 | Mermaid | N/A | Reference — diagram not strictly required |
| 5. Layout | 5.28 | Import ordering | PASS | display → element → wrapper |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | VRAM and FPS visible without interaction ✓ |
| 5. Layout | 5.32 | Reference tables end | MIXED | Table appears at top, not end. 5.32 says reference tables at END not beginning. For a catalogue page, the table IS the primary content — borderline. Rubric may need clarification but strict reading: FAIL |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | FAIL | "These pipelines run on the network today" (line 29) — no source. VRAM numbers, FPS ranges — no source for the measurements. "deployed on the Livepeer network as BYOC containers running through ComfyStream" (line 34) — no link to a network capabilities dashboard confirming current deployment |
| 6. Veracity | 6.2 | Code TESTED | N/A | |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | Numbers are plausible (StreamDiffusion 8GB / 20-30fps reasonable) but unverified |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary | NOT-TESTED | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No date of last measurement, no orchestrator-hardware baseline, no go-livepeer / ai-runner / ComfyStream version |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No upstream links to: StreamDiffusion paper/repo, ControlNet paper/repo, IPAdapter paper/repo, FaceID, Whisper model card, Gemma model card. ComfyStream pipeline source (`livepeer/comfystream` or `livepeer/livepeer-app-pipelines`) not linked |
| 6. Veracity | 6.11 | Glossary defs | NOT-TESTED | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | NOT-TESTED | |
| 7. Nav/IA | 7.2 | Mirrors fs | FAIL | Parent missing |
| 7. Nav/IA | 7.3 | Portal routes | FAIL | |
| 7. Nav/IA | 7.4 | Orphans | MIXED | |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | Zero |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | PASS | 4.8 KB borderline; substantive enough |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | PASS | Links to ComfyStream overview, comfystream-as-BYOC, workflow-authoring, byoc-quickstart all resolve |
| 8. Links | 8.2 | External | N/A | None |
| 8. Links | 8.3 | Snippets | PASS | All imports resolve |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | NOT-TESTED | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | "What pipelines can I use" answered; "what's the cost / FPS at orchestrator-class X / who maintains pipeline Y" not answered |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | |
| 10. Completeness | 10.3 | Persona paths | MIXED | |
| 10. Completeness | 10.4 | Scope | PASS | |
| 10. Completeness | 10.5 | Self-containment | MIXED | Reader must follow ComfyStream chain to actually run any pipeline |
| 10. Completeness | 10.6 | Language paths | N/A | |
| 10. Completeness | 10.7 | Persona guides | MIXED | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Reference pipelines" | PASS | 2 words |
| sidebarTitle | Yes | "Reference Pipelines" | PASS | |
| description | Yes | "Production BYOC pipelines..." | PASS | 142 chars |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Missing — `reference` |
| complexity | No | — | FAIL | Missing — `intermediate` |
| lifecycleStage | No | — | FAIL | Missing — `build` |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Missing |
| status | Yes | current | FAIL | Legacy |
| lastVerified | Yes | 2026-05-15 | PASS | |
| pageVariant | No | — | INFO | `compendium` recommended |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | — | Imported ✓; line 36 placement violates 5.26 |
| `<CenteredContainer>` | Yes (1×) | — | — | OK |
| `<Tip>` | Yes (1×) | Recommended | — | OK |
| `<StyledTable>` | Yes (1×) | Required | — | Used correctly with TableRow + TableCell ✓ |
| `<Columns>` / `<Card>` | No | Required (Related Pages) | — | None (FAIL 5.16) |
| `<CustomCardTitle>` | No | Required | — | |
| `<StyledSteps>` | No | Required for procedural lists | — | "Building a custom pipeline" 4-step list (118-121) raw markdown |
| `<ParamField>` / `<ResponseField>` | No | Recommended | — | Per-pipeline detail would benefit from structured params (`model_id`, Docker image, source repo) |
| `<AccordionGroup>` | No | Recommended for per-pipeline detail | — | An Accordion per pipeline could carry the extended spec without bloating the table |
| Fenced code w/ icon+title | No | — | — | No code |
| Mermaid | No | — | — | |

## Cross-page duplication and link gaps

- **OVERLAP**: Pipeline VRAM + FPS specs duplicate `realtime-ai/comfystream/overview.mdx` hardware-requirements section (per section-1 review found same duplication 3× across model-support.mdx + comfystream/overview.mdx + comfystream-quickstart.mdx). This page adds a 4th surface for the same data. Should pull from `snippets/data/byoc/reference-pipelines.json` or `aiModels.json` extract.
- **LINK GAPS**:
  - "ComfyStream" first mention (line 29) — no link.
  - "ComfyUI workflow" (line 34, 116) — no link to ComfyUI upstream.
  - Every pipeline name (StreamDiffusion, ControlNet, IPAdapter, FaceID, Whisper, Gemma, SuperResolution) — no upstream model card / paper / repo link.
  - Brief repos: `muxionlabs/StreamDiffusionV2` exists (per `byoc-sdk.mdx` line 59) but the StreamDiffusion V2 row (lines 59-64) doesn't link to it. `muxionlabs/livepeer-app-pipelines` (per brief) absent.
  - No `model_id` strings for `aiModels.json` registration — reader can see pipelines exist but can't register one without going elsewhere.
  - "network capability dashboard" not linked (referenced on `overview.mdx` but not propagated here despite this page being the catalogue).
- **STRANDED**: Page ends with prose pointer to workflow-authoring + byoc-quickstart. Reader who wants to deploy pipeline X specifically (e.g., "I want ControlNet for my app") has no per-pipeline path.

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

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Available pipelines | 4 | 4 | 5 | 5 | 4 | 22 |
| Building a custom pipeline | 5 | 4 | 5 | 5 | 4 | 23 |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| — | — | — | — | — | NO fenced code blocks. For a reference catalogue, `model_id` strings, Docker pulls, and curl invocations would be expected (see 4.20 + 10.5 findings) |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Catalogue answers "what pipelines exist" but not "how do I deploy pipeline X specifically". A reader scanning for "ControlNet" sees a row in the table but can't get to: the workflow JSON, the Docker image, the `model_id` for `aiModels.json`, the orchestrator config, or the upstream paper. The catalogue gives them shopping signal (VRAM, FPS) but no checkout path. Reader who wants ControlNet leaves to read workflow-authoring generically, then has to figure out the ControlNet specifics themselves.
- **Fix step:** Add per-pipeline rows of links: a column "How to deploy" in the StyledTable linking to a per-pipeline workflow / Docker image / model_id. OR add `<AccordionGroup>` after the table with one `<Accordion icon="microchip">` per pipeline, expanding to: `model_id` string, Docker image reference, workflow JSON URL, source paper/repo, network warmness signal ("currently warm on N orchestrators"). Each Accordion makes the pipeline runnable from this page.
- **Source/exemplar:** `_packet/component-matrix.md` reference row; `realtime-ai/comfystream/overview.mdx` decision matrix pattern.

### Layer 2 — Composition
- **Gap:** No Related Pages footer (5.16 FAIL). Procedural list (118-121) raw markdown not `<StyledSteps>` (5.21). Per-pipeline detail buried in table cells — no `<AccordionGroup>` to surface depth. No `<ParamField>` for per-pipeline reference data. Divider at line 36 between intro and first H2 (5.26 FAIL). Reference table at top (5.32 marginal).
- **Fix step:** (a) Add `<Columns cols={2}>` Related Pages footer with `<CustomCardTitle>` cards before EOF. (b) Convert procedural list (118-121) to `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">` + `<StyledStep title="..." icon="...">`. (c) Add `<AccordionGroup>` after the table with one Accordion per pipeline carrying full reference detail. (d) Remove divider at line 36.
- **Source/exemplar:** check 5.21; `realtime-ai/comfystream/workflow-authoring.mdx` line 55 correct StyledSteps in-repo.

### Layer 3 — Cross-page integration
- **Gap:** Page ends with prose pointer to two pages. Zero cross-tab. Per-pipeline upstream model documentation never linked (StreamDiffusion paper, ControlNet, IPAdapter, FaceID, Whisper, Gemma). `muxionlabs/StreamDiffusionV2` repo not linked (it's in `byoc-sdk.mdx` table but not propagated here). `muxionlabs/livepeer-app-pipelines` not linked despite being a brief-named repo containing these pipelines. ComfyStream first mention (line 29) not linked.
- **Fix step:** (a) Add `<Columns>` Related Pages with: byoc-quickstart, `realtime-ai/comfystream/overview`, `comfystream/workflow-authoring`, `/v2/orchestrators/setup/capabilities` (the operator-side of running these pipelines). (b) Inline link "ComfyStream" at first mention (line 29). (c) Add per-pipeline upstream link in the table or in the proposed Accordion (StreamDiffusion → paper + repo; ControlNet → paper + repo; etc.). (d) Link `muxionlabs/StreamDiffusionV2` from the StreamDiffusion V2 table row. (e) Add prose link `muxionlabs/livepeer-app-pipelines` as the canonical source repo for these pipelines.
- **Source/exemplar:** brief repos; `byoc-sdk.mdx` table already lists `muxionlabs/StreamDiffusionV2` — propagate the reference here.

### Layer 4 — Veracity and source authority
- **Gap:** "These pipelines run on the network today" (line 29) — no source. VRAM and FPS numbers — no measurement source, no orchestrator hardware baseline. "All pipelines use the `live-video-to-video` pipeline type and are accessible through any Livepeer gateway that routes to orchestrators with the pipeline warm" (line 110) — no link to network-capabilities dashboard, no orchestrator-count, no source for "any gateway". `veracityStatus` absent.
- **Fix step:** (a) Add `veracityStatus: unverified` to frontmatter. (b) Add date column / footer line: "Measurements taken {date} on {GPU model}; VRAM/FPS vary with prompt complexity and resolution". (c) Link the network-capabilities dashboard at line 110: `[network capabilities dashboard](https://tools.livepeer.cloud/ai/network-capabilities)`. (d) Source the pipeline list: "Catalogue extracted from `muxionlabs/livepeer-app-pipelines/aiModels.json` at commit/release {ref} — see [source](...)". (e) Add per-row provenance: each pipeline's VRAM/FPS should cite a benchmark run or the source `aiModels.json` `min_vram` field.
- **Source/exemplar:** brief muxionlabs/livepeer-app-pipelines; section-1 review same aiModels.json pattern.

### Layer 5 — Product-forward depth
- **Gap:** Catalogue reads as a feature list. Reader can't tell: (a) maintenance status per pipeline (StreamDiffusion is widely used; FaceID may be experimental; Gemma vision is brand-new), (b) network availability ("is ControlNet warm on enough orchestrators to be reliable for production?"), (c) cost per pipeline (FPS × GPU-second × `price_per_unit` = $X/hour), (d) production worked-example pointer (Daydream uses StreamDiffusion; Embody uses FaceID — which app uses which pipeline?). The brief calls out StreamDiffusion, ControlNet, IPAdapter, FaceID, Whisper, Gemma, SuperResolution as the catalogue — and this page lists them but doesn't differentiate by readiness.
- **Fix step:** (a) Add a "Maturity" column to the StyledTable: each row marked `<Badge>Production</Badge>` / `<Badge>Beta</Badge>` / `<Badge>Experimental</Badge>`. (b) Add a "Live network availability" line in the intro: "{N} orchestrators currently advertising at least 1 of these pipelines warm — see [dashboard](https://tools.livepeer.cloud/ai/network-capabilities)". (c) Add §"Reference apps using these pipelines": "Daydream — StreamDiffusion; Embody — FaceID; Streamplace — multiple" — with link to each app. (d) Add a §"Cost example" with one worked pipeline: "ControlNet at 12 FPS on RTX-4090 (~$0.40/GPU-hour at typical orchestrator pricing) ≈ $X per minute of output".
- **Source/exemplar:** section-1 review identifies Daydream / Embody / Streamplace as reference apps already named on `realtime-ai/overview.mdx`; brief catalogue list.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 9 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. **No per-pipeline runnability path** — catalogue lists names + VRAM + FPS but no `model_id`, Docker image, workflow JSON, or upstream paper for any of the 8 pipelines. 4.20 + 10.5 fail.
2. No Related Pages footer (5.16 + 5.17 FAIL).
3. 4 required frontmatter fields missing; legacy `status: current` present.
4. "Building a custom pipeline" procedural list (118-121) raw markdown not `<StyledSteps>` (5.21 FAIL).
5. Pipeline catalogue duplicates VRAM data already present on 2-3 other pages (section-1 found 3 surfaces); should pull from one snippet — `aiModels.json` extract or shared data file.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `<AccordionGroup>` after the table with one `<Accordion icon="microchip">` per pipeline (8 accordions): `model_id`, Docker image, workflow JSON URL, source paper/repo, current warmness count | after line 108 | HIGH | L | check 4.20, 10.5 |
| 2 | Add `<Columns cols={2}>` Related Pages footer with 4 `<Card>` + `<CustomCardTitle>` before EOF: byoc-quickstart, comfystream/overview, comfystream/workflow-authoring, `/v2/orchestrators/setup/capabilities` | EOF | HIGH | M | check 5.16, 5.17, 5.22 |
| 3 | Add `purpose: reference`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` | 8-22 | HIGH | S | check 1.1 |
| 4 | Remove `status: current` (line 10) | 10 | MEDIUM | S | check 5.7 |
| 5 | Convert "Building a custom pipeline" numbered list (118-121) to `<StyledSteps>` + `<StyledStep>` | 118-121 | HIGH | M | check 5.21 |
| 6 | Remove divider at line 36 (between intro and first H2) | 36 | MEDIUM | S | check 5.26 |
| 7 | Add inline link to ComfyStream overview at first mention (line 29) | 29 | HIGH | S | check 2.21, 6.10 |
| 8 | Add per-pipeline upstream links (paper / repo) in either table column or Accordion: StreamDiffusion, ControlNet, IPAdapter, FaceID, Whisper, Gemma, SuperResolution | table 50-107 | HIGH | M | check 6.10 |
| 9 | Link `muxionlabs/StreamDiffusionV2` from the StreamDiffusion V2 row | 59-64 | HIGH | S | brief |
| 10 | Add source citation for the catalogue: "Extracted from `muxionlabs/livepeer-app-pipelines/aiModels.json`" with `{/* REVIEW: confirm canonical source */}` | 34 or table footer | HIGH | M | brief; check 6.1 |
| 11 | Add Maturity column to StyledTable with per-row `<Badge>` (Production / Beta / Experimental) | table 41-49 | HIGH | M | check 4.15 |
| 12 | Add live network availability link in intro: "{N} orchestrators currently advertise these warm — [dashboard](https://tools.livepeer.cloud/ai/network-capabilities)" | 34 | MEDIUM | S | check 6.1 |
| 13 | Add §"Reference apps using these pipelines" with Daydream / Embody / Streamplace mapping | new section | MEDIUM | M | section-1 review |
| 14 | Add §"Cost example" with worked pipeline math (FPS × GPU-second × `price_per_unit`) linking to per-second-compute | new section | MEDIUM | M | brief; per-second-compute |
| 15 | Add ≥3 cross-tab graduation cards (covered in step 2) | EOF | HIGH | M | check 4.10, 7.6 |
| 16 | Add measurement provenance: date, GPU model, prompt-complexity caveat | table footer or intro | HIGH | S | check 6.8 |
| 17 | Extract pipeline catalogue to a shared snippet (de-duplicate from realtime-ai/comfystream/overview.mdx + comfystream-quickstart.mdx + model-support.mdx) | 41-107 | MEDIUM | M | check 4.8, 5.15 |
| 18 | Add `pageVariant: compendium` to frontmatter | 8 | INFO | S | check 1.3 |
| 19 | Consider repositioning the table — if 5.32 strict reading holds, move detail behind Accordions and lead with intro + decision frame | restructure | INFO | M | check 5.32 |
| 20 | Add ComfyUI upstream link at first mention (line 34) | 34 | MEDIUM | S | check 6.10 |
