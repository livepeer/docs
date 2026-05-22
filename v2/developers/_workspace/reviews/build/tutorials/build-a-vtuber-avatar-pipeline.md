# Review: build-a-vtuber-avatar-pipeline.mdx

**Page**: `v2/developers/build/tutorials/build-a-vtuber-avatar-pipeline.mdx`
**Review date**: 2026-05-11
**Reviewer**: agent A8
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 13,342
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | all present |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `tutorial` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | optional |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `build` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity | PASS | `advanced` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` |
| 1. Frontmatter | 1.9–1.10 | industry / niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Build a real-time VTuber avatar pipeline on ComfyStream. Pose-conditioned StreamDiffusion, sub-100ms latency, 25 FPS on an RTX 4090." subject-led, 138 chars |
| 1. Frontmatter | 1.12 | OG block complete | PASS | |
| 1. Frontmatter | 1.13 | keywords | PASS | specific (vtuber, streamdiffusion, dwpose, controlnet) |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | "stylised", "artefacts" used; no US hits |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | MIXED | line 41 "By the end of this tutorial you'll have..."; line 43 self-ref "This is the Persona 1 and Persona 4 join" |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | developer-coded |
| 2. Voice | 2.8–2.16 | banned / hedging / deprecated | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | 0 |
| 2. Voice | 2.13 | Entity-led voice | MIXED | early paragraphs reader-led; later entity-led |
| 2. Voice | 2.17–2.22 | terminology | PASS | StreamDiffusion, ComfyStream, DWPose preserved |
| 2. Voice | 2.D1 | Code-first opening | N/A | This tutorial is workflow-authoring inside a GUI (ComfyUI), not code-first; opening with workflow shape is appropriate. No fenced commands until line 124 (the prompt examples), then JSON export at line 142. Procedural Steps not code-first by design |
| 2. Voice | 2.D2 | API methods linked | MIXED | DWPose, StreamDiffusion, ComfyStream named — no inline link to ComfyStream repo at first mention (line 41); workflow-authoring link present (line 237) |
| 2. Voice | 2.D3 | Versions explicit | MIXED | "RTX 3090 minimum; RTX 4090 recommended" pinned; "SD 1.5 LCM", "SDXL Lightning" pinned. No ComfyStream version, no `ComfyUI-controlnet-aux` version |
| 2. Voice | 2.D4 | Errors in main | PASS | Common Errors AccordionGroup at line 212 in main flow |
| 2. Voice | 2.D5–D6 | self-evident / marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | PASS | no `<Note>` for primary |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Required Tools" (22), "Pipeline Shape" (23), "Workflow Authoring" (24), "First Run" (22), "Latency Tuning" (24), "Agent-Controlled Avatars" (24), "Production Considerations" (23), "Common Errors" (21), "Next Steps" (banned). 8 pass / 1 fail |
| 3. Headings | 3.2 | Banned/weak | FAIL | line 234: "## Next Steps" |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Concept not examples | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "VTuber Avatar Pipeline" — 3 words |
| 3. Headings | 3.7–3.10 | register / per-pageType | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT | PASS | depends on ComfyStream Quickstart (linked at line 49) |
| 4. Structure | 4.4 | No dead ends | MIXED | Next Steps cards present but plain |
| 4. Structure | 4.5 | Prerequisites stated | PASS | line 47 §Required Tools — explicit hardware floor, ComfyStream dependency stated |
| 4. Structure | 4.6 | Out-of-scope | PASS | delegates to ComfyStream Quickstart and Realtime AI Setup |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | PASS | content distinct from other tutorials |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | MIXED | 1 cross-tab card (Realtime AI Setup → Orchestrators tab) at line 246; needs ≥3 total. Only one present |
| 4. Structure | 4.11 | Discord test | MIXED | tutorial answers it but assumes ComfyStream + ComfyUI familiarity (mitigated by Step 1 linking to Quickstart) |
| 4. Structure | 4.12 | Page size | PASS | 13.3 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | 2 Steps blocks for 2 distinct phases (Workflow Authoring + First Run); justified |
| 4. Structure | 4.15 | Trade-offs named | PASS | line 74-82 lists 3 conditioning paths; line 168-178 names latency levers |
| 4. Structure | 4.17 | Every code block has lang tag | PASS | only 2 fenced blocks (lines 124, 130 — both untagged prompt text). The diagram block at lines 62-70 is markdown-style ASCII inside a fenced block — also untagged |
| 4. Structure | 4.18 | Code-first opening | N/A | not a code-first tutorial |
| 4. Structure | 4.19 | Errors in main | PASS | |
| 4. Structure | 4.20 | API methods linked | MIXED | |
| 5. Layout | 5.1 | Correct template | MIXED | tutorial scaffold partial — Prerequisites (mis-named), Steps, no Verification H2, Next Steps |
| 5. Layout | 5.2 | Required sections | MIXED | Prerequisites (named "Required Tools"), Steps (raw), Verification (Step 3 "Press Run" doubles as verify but no dedicated section), Related (named "Next Steps") |
| 5. Layout | 5.3–5.4 | components | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | procedural — but raw `<Steps>` (5.21 FAIL); 1 markdown table at line 76 not `<StyledTable>` (5.23 FAIL) |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | line 26 `status: current` |
| 5. Layout | 5.8 | CSS custom props | N/A | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase imports | PASS | |
| 5. Layout | 5.11 | Gold-standard template | MIXED | partial |
| 5. Layout | 5.12 | Section blocks | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view rules | MIXED | 3 conditioning paths (DWPose / Depth / Canny) at line 74-82 are presented as a table; this is 1D variant — could be `<Tabs>` per 5.14 if the tutorial wanted to surface depth/canny as alternatives. Current form (table + "swap nodes" prose) is acceptable but lighter |
| 5. Layout | 5.15 | Data imports | MIXED | hardware table (line 76) and latency-tuning numbers hardcoded |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | "Next Steps" `<CardGroup>` — should be `<Columns>` named "Related Pages" |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup>` not `<Columns>`; no CustomCardTitle |
| 5. Layout | 5.18 | Tab icon | N/A | no Tabs |
| 5. Layout | 5.19 | Accordion icon | FAIL | 5 `<Accordion>` at lines 213, 216, 219, 222, 225 — all missing `icon` |
| 5. Layout | 5.20 | Code icon+title | FAIL | 3 fenced blocks: pipeline diagram (62), positive prompt (124), negative prompt (130) — all missing icon + title + language tag |
| 5. Layout | 5.21 | StyledSteps used | FAIL | Raw `<Steps>` x2 at lines 88 and 150 — should be `<StyledSteps>` |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | Next Steps cards plain |
| 5. Layout | 5.23 | StyledTable | FAIL | Markdown table at line 76-82 — should be `<StyledTable>` |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider | PASS | |
| 5. Layout | 5.27 | Mermaid | MIXED | Pipeline shape diagram (lines 62-70) is ASCII art inside an untagged fenced block — should be a Mermaid graph LR or graph TD using `MermaidColours.jsx` |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29–5.34 | media / styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "sub-100ms end-to-end" (line 41) — no source for the timing budget. "25 FPS at 512x512" / "~20 FPS at 768" / "~12 FPS at 1024" (lines 174-176) — no source. "first compilation 2-10 minutes" (line 152) — no source. "TensorRT 2-4x speedup" (line 176) — no source. "Agent SPE production avatar pipeline" referenced (line 43, 190) — no link |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No code block labelled TESTED (limited blocks — prompts only) |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | latency/FPS figures plausible but unsourced |
| 6. Veracity | 6.5 | REVIEW flags | PASS | |
| 6. Veracity | 6.6 | veracityStatus honest | PASS | `verified` (but unsourced numbers weaken) |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | ComfyStream version unpinned; `ComfyUI-controlnet-aux` unpinned |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | ComfyStream Quickstart linked; ComfyStream upstream repo + StreamDiffusion paper/repo not linked at first mention |
| 6. Veracity | 6.11-6.12 | glossary | PASS | |
| 7. Nav | 7.1 | docs.json | PASS | line 2632 |
| 7. Nav | 7.2–7.5 | mirrors / orphans | PASS | |
| 7. Nav | 7.6 | ≥3 cross-tab | MIXED | 1 cross-tab card present, needs ≥3 |
| 7. Nav | 7.7–7.12 | lane / TTL | PASS | |
| 8. Links | 8.1 | Internal | PASS | comfystream-quickstart, gpu-support, ai-pipelines, eliza-livepeer-plugin links resolve |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8. Links | 8.3 | Snippet imports | PASS | |
| 8. Links | 8.4 | Images | N/A | no images (page is heavily prose + diagram — could benefit from a screenshot of the ComfyUI workflow) |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1–9.6 | governance | NOT-TESTED | |
| 10. Completeness | 10.1–10.7 | coverage | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "VTuber Avatar Pipeline" | PASS | |
| sidebarTitle | Yes | "VTuber Pipeline" | PASS | |
| description | Yes | "Build a real-time VTuber avatar pipeline..." | PASS | |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | advanced | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | unsourced FPS/latency claims |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | legacy field |
| pageVariant | No | — | INFO | n/a |

## Component Audit

| Component | Used? | Required for tutorial? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (8×) | Required | placement OK |
| `<Tip>` (header CTA) | Yes (36) | Recommended | OK |
| `<Steps>` / `<Step>` (raw) | Yes (lines 88, 150) | — | FAIL 5.21 — should be StyledSteps |
| `<StyledSteps>` | No | Required | not imported |
| `<Tabs>` / `<Tab icon>` | No | Recommended | could be used for 3 conditioning paths (DWPose / Depth / Canny) |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (1 + 5) | — | FAIL 5.19 — Accordions missing icons |
| `<StyledTable>` | No | Required | FAIL 5.23 — markdown table at 76 |
| Fenced code with icon+title | No | Required | FAIL 5.20 — 3 blocks missing |
| `<CardGroup cols={2}>` / `<Card>` | Yes (236) | — | FAIL 5.16+5.17 — should be Columns |
| `<CustomCardTitle>` | No | Required | FAIL |
| `<CenteredContainer>` | Yes (35) | — | OK |
| `<LinkArrow>` | Yes (49, 54, 186, 188, 192, 206) | — | OK |
| Mermaid | No | Recommended for diagram | The ASCII pipeline diagram (lines 62-70) should be Mermaid |

## Cross-page duplication and link gaps

- **OVERLAP**: None significant with other tutorials in this batch. The VTuber pipeline is a specialised flow that builds on ComfyStream tutorial outputs.
- **LINK GAPS**: ComfyStream repo (`https://github.com/livepeer/comfystream`) not linked at first mention (line 41). StreamDiffusion upstream not linked. `ComfyUI-controlnet-aux` repo not linked at first mention (line 105). DWPose model card not linked. The "Agent SPE production avatar pipeline" (line 43, 190) has no link to a case study or source.
- **STRANDED**: 4 Next Steps cards; 3 point to developer-tab tutorials, 1 to orchestrators tab. Reader who wants to ship avatar-driven content to a stream platform has no link to a streaming-platform integration guide or OBS recipe.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | "stylised", "artefacts" used |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned constructions | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| Self-reference | 2 | line 41 "By the end of this tutorial..."; line 43 "This is the Persona 1 and Persona 4 join" |
| Banned heading | 1 | line 234: "## Next Steps" |
| Deprecated terms | 0 | — |

## Heading Score Table

| Heading | Total |
|---|---|
| Required Tools | 22 |
| Pipeline Shape | 23 |
| Workflow Authoring | 24 |
| First Run | 22 |
| Latency Tuning | 24 |
| Agent-Controlled Avatars | 24 |
| Production Considerations | 23 |
| Common Errors | 21 |
| Next Steps | 14 — banned/weak |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 62 | (none) | ✗ | ✗ | — | ASCII pipeline diagram — should be Mermaid (5.27); language tag missing (4.17) |
| 124 | (none) | ✗ | ✗ | NOT-TESTED | positive prompt text — language `text` acceptable; missing icon+title |
| 130 | (none) | ✗ | ✗ | NOT-TESTED | negative prompt text — same |

Page is light on fenced code; primary medium is procedural prose. FAIL 5.20 + 4.17 + 5.27.

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Outcome statement is "working VTuber pipeline" at 25 FPS sub-100ms. Tutorial gets the reader to the moment the avatar appears (line 161 "the avatar appears in the output panel, posed as you are") but stops short of: how to publish the avatar to Twitch/YouTube Live (Production Considerations names OBS / MediaMTX but no command); how to swap avatars without rebuilding the workflow; how to recover when the pipeline drifts. Reader has a working demo, not a working VTuber rig.
- **Fix step:** Add a brief Step 4 in §"First Run" (after line 162) titled "Publish to OBS" with one concrete recipe: 1) install OBS, 2) add a browser source pointing to the ComfyStream WebRTC stream URL, 3) crop to the avatar viewport. Plus link to a streaming-platform integration guide if one exists; otherwise mark `{/* REVIEW: link OBS / MediaMTX recipe */}`.
- **Source/exemplar:** ComfyStream README's "Stream out" section if it has one; `vod-upload-and-playback.mdx` shows the "demo → ship-ready" hand-off pattern.

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` x2 (5.21). 3 fenced blocks missing icon+title+language (5.20, 4.17). 5 Accordions missing icon (5.19). Markdown table at 76 not StyledTable (5.23). ASCII pipeline diagram should be Mermaid (5.27). Next Steps mis-named + CardGroup not Columns + plain Cards (5.16/5.17/5.22). No Verification H2. 3 conditioning paths (DWPose/Depth/Canny) could be `<Tabs>`.
- **Fix step:**
  1. Replace `<Steps>` (lines 88, 150) with `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`.
  2. Add `icon` + `title` + language to fenced blocks (62, 124, 130). The ASCII pipeline diagram (62-70) should be replaced with a Mermaid `graph LR` block using `MermaidColours.jsx` per 5.27.
  3. Add `icon="circle-question"` to each `<Accordion>` (213, 216, 219, 222, 225).
  4. Replace markdown table at lines 76-82 with `<StyledTable variant="bordered">` using `TableRow`/`TableCell`.
  5. Convert `<CardGroup>` (236) to `<Columns cols={2}>`; rename §"Next Steps" → §"Related Pages"; add `<CustomCardTitle icon title horizontal>` per Card.
  6. Add `## Verification` H2 between "First Run" (148) and "Latency Tuning" (168) — list 4 signals: workflow loads, compilation completes, avatar appears, pose tracking matches movement.
  7. Optional: convert the conditioning-path table at 76-82 to `<Tabs>` with `<Tab title="DWPose" icon="user">`, `<Tab title="Depth" icon="cube">`, `<Tab title="Canny" icon="pencil">`.
- **Source/exemplar:** `huggingface-to-livepeer.mdx` for icon+title; `ai-agent-on-livepeer.mdx` for StyledSteps; `MermaidColours.jsx` for diagram colours.

### Layer 3 — Cross-page integration
- **Gap:** ComfyStream repo not linked at first mention. StreamDiffusion source/paper not linked. Agent SPE case study not linked. OBS / MediaMTX integration unaddressed beyond the prose mention. Cross-tab graduation underweight (1 card only).
- **Fix step:** Add inline links: line 41 `[ComfyStream](https://github.com/livepeer/comfystream)`; line 73 `[StreamDiffusion](https://github.com/cumulo-autumn/StreamDiffusion)` (verify URL); line 105 `[ComfyUI-controlnet-aux](https://github.com/Fannovel16/comfyui_controlnet_aux)` (verify URL). Add to Related Pages: `/v2/gateways/setup/connect` ("Self-host the ComfyStream-enabled orchestrator"); `/v2/about/network/architecture` ("How real-time AI routes"). Reduce a developer-tab card to make room.
- **Source/exemplar:** Upstream repos; `huggingface-to-livepeer.mdx` line 72 inline-source pattern.

### Layer 4 — Veracity and source authority
- **Gap:** FPS figures (25/20/12) and latency budget (sub-100ms) are unsourced. "TensorRT 2-4x speedup" unsourced. "First compilation 2-10 minutes" unsourced. ComfyStream version unpinned. ControlNet-aux version unpinned. No code block carries TESTED.
- **Fix step:**
  1. Source the FPS / latency figures — link either to a benchmark file in `livepeer/comfystream` or mark `{/* REVIEW: source FPS benchmarks */}`. If the Agent SPE case study is the source, link it.
  2. Pin ComfyStream image: refer to a specific tag (`livepeer/comfystream:v<X>`).
  3. Pin `ComfyUI-controlnet-aux`: cite a git ref.
  4. Label the prompt examples (124, 130) with provenance (Agent SPE template, or `{/* REVIEW: source prompt */}`).
- **Source/exemplar:** `livepeer/comfystream` benchmarks if available; `huggingface-to-livepeer.mdx` §Sources accordion.

### Layer 5 — Product-forward depth
- **Gap:** No screenshot of a finished VTuber output (page is text-only — a single image or a short looped GIF would do enormous orientation work). No statement of "what makes a good avatar prompt vs a bad one" (the prompts at 124, 130 are reasonable but reader has no comparison set). No cost expectation: a 4090 + ComfyStream all-day-streaming = how many kWh? Where do you run this in production — local box, RunPod, gateway? "Maturity" signal missing — Agent SPE built it but anyone else? No "what could go wrong" beyond Common Errors (which is solid).
- **Fix step:**
  1. Add a `<Frame>` or `<Img>` placeholder at line 41 with a TODO JSX comment: `{/* TODO: insert avatar output screenshot */}`. The page needs visual hero content. Reference `.claude/references/layout/exemplars.md` Frame usage.
  2. Add `<Tip>` near Workflow Authoring (after line 87): "Prompt structure: subject + style + render-quality + negative-suppression. Avoid weights-by-token (`(green hair:1.4)`) — they fight StreamDiffusion's CFG range."
  3. Add §"Where to run this" sub-block in Production Considerations (after line 196): three rows — local workstation, RunPod, dedicated orchestrator — with cost-signal estimates.
  4. Add a `<Badge>Advanced — production-tested</Badge>` near header CTA since complexity is `advanced`.
- **Source/exemplar:** `.claude/references/layout/exemplars.md` flagship-tutorial pattern (Frame + Badge); `comfystream/overview.mdx` for maturity-signal precedent.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 3
**Critical findings (1–5)**:
1. Raw `<Steps>` x2 not StyledSteps (5.21).
2. ASCII pipeline diagram (lines 62-70) should be a Mermaid diagram with `MermaidColours.jsx` (5.27); fenced blocks missing icon+title+language (5.20, 4.17).
3. 5 Accordions missing icon (5.19); markdown table at 76 not StyledTable (5.23).
4. Next Steps banned + CardGroup not Columns + plain Cards (3.2, 5.16, 5.17, 5.22). Only 1 cross-tab card (4.10/7.6 MIXED — needs ≥3).
5. FPS / latency / compile-time / TensorRT speedup all unsourced (6.1, 6.4); ComfyStream + controlnet-aux unpinned (6.8).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Replace `<Steps>` blocks (lines 88, 150) with `<StyledSteps iconColor titleColor>` + `<StyledStep title icon>`; import `StyledSteps, StyledStep` from `/snippets/components/displays/steps/Steps.jsx` | 31, 88-144, 150-162 | HIGH | M | check 5.21; `ai-agent-on-livepeer.mdx` line 61 |
| 2 | Replace ASCII pipeline diagram (lines 62-70) with Mermaid `graph LR` block using `MermaidColours.jsx`; add prose before the diagram | 62-70 | HIGH | M | check 5.27; `comfystream/overview.mdx` Mermaid usage |
| 3 | Add `icon` + `title` + language tag to remaining fenced blocks (124, 130 — language `text`) | 124, 130 | MEDIUM | S | check 5.20+4.17 |
| 4 | Add `icon="circle-question"` (or topical icon) to each `<Accordion>` | 213, 216, 219, 222, 225 | HIGH | S | check 5.19 |
| 5 | Convert markdown table at lines 76-82 to `<StyledTable variant="bordered">` with `TableRow`/`TableCell` | 76-82 | HIGH | S | check 5.23 |
| 6 | Convert `<CardGroup>` (236) to `<Columns cols={2}>`; rename §"Next Steps" → §"Related Pages"; add `<CustomCardTitle icon title horizontal>` per Card | 234-249 | HIGH | M | check 5.16+5.17+5.22 |
| 7 | Add `## Verification` H2 between "First Run" (148) and "Latency Tuning" (168); list 4 observable success signals | new H2 | MEDIUM | M | tutorial matrix |
| 8 | Rename §"Required Tools" → §"Prerequisites" | 47 | MEDIUM | S | check 4.5+5.2 |
| 9 | Add ≥2 more cross-tab cards to Related Pages (Gateways + About) to reach the ≥3 threshold | Related Pages | HIGH | S | check 4.10+7.6 |
| 10 | Remove legacy `status: current` | 26 | MEDIUM | S | check 5.7 |
| 11 | Pin ComfyStream image (`livepeer/comfystream:v<tag>`) and `ComfyUI-controlnet-aux` (git ref); reference Agent SPE source for the FPS / latency numbers | 41 (intro), 105, 195 | HIGH | M | check 2.D3+6.1+6.8 |
| 12 | Add inline links at first mention: ComfyStream repo (line 41), `ComfyUI-controlnet-aux` (line 105), StreamDiffusion upstream | 41, 73, 105 | MEDIUM | S | check 6.10 |
| 13 | Add a `<Frame>` hero block at line 41 with TODO JSX comment for avatar output screenshot | 41 | INFO | M | layer 5 |
| 14 | Add §"Publish to OBS" mini-step in §First Run (after line 162) with concrete browser-source recipe | after 162 | INFO | M | layer 1 |
| 15 | Add §"Where to run this in production" cost-signal block in Production Considerations | after 196 | INFO | M | layer 5 |
| 16 | Optional: convert 3 conditioning paths (76-82) to `<Tabs>` with `<Tab icon>` if maintenance burden is acceptable | 74-82 | INFO | M | check 5.14 |
