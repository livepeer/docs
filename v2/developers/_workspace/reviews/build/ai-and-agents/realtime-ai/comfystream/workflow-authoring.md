# Review: workflow-authoring.mdx

**Page**: `v2/developers/build/ai-and-agents/realtime-ai/comfystream/workflow-authoring.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `how_to` (NON-CANONICAL — should be `guide` or `instruction`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: missing
**Bytes**: 6,678
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1.1 | 10 fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | pageType canonical | FAIL | `pageType: how_to` (line 22) — canonical set is `concept|tutorial|guide|instruction|navigation|reference|resource` |
| 1.4 | purpose canonical | FAIL | Missing |
| 1.5 | audience | PASS | `developer` |
| 1.6 | complexity | FAIL | Missing |
| 1.7 | lifecycleStage | FAIL | Missing |
| 1.8 | veracityStatus | FAIL | Missing |
| 1.11 | description well-formed | PASS | "How to build ComfyUI workflows for real-time video processing with ComfyStream and connect them to a live video source." subject-led, 130 chars — opens "How to" which is borderline |
| 1.12 | OG block | PASS | |
| 1.13 | keywords | MIXED | `livepeer`, `real-time AI` reasonable but `workflow authoring` could be specific |
| 1.14 | audience match | PASS | |
| 2.1-2.22 | Voice (universal) | PASS | |
| 2.3 | banned phrases | MIXED | Line 40: "This guide covers building a workflow..." — matches "This page/section covers" pattern (2.3 banned) |
| 2.4 | banned constructions | FAIL | Line 40 self-reference; "This guide covers..." |
| 2.D1 | Code-first | PASS | Tutorial structure with code blocks early |
| 2.D2 | API methods | PASS | |
| 2.D3 | Versions explicit | FAIL | "Python 3.10+ with PyTorch installed" — Python version OK; PyTorch version not pinned. Git install at line 60 unpinned. Docker image not version-pinned |
| 2.D4-D6 | | PASS | |
| 2.D7 | Note for primary | N/A | No Note |
| 3.1 | Score ≥20/25 | MIXED | "Prerequisites" (24), "Installation" (22), "Workflow Structure" (23), "Running ComfyStream" (22), "Gateway Integration" (23), "Related Pages" (exempt) |
| 3.2 | Banned/weak | PASS | No banned heading |
| 3.3-3.10 | | PASS | |
| 3.6 | Title well-formed | PASS | "Workflow Authoring" — 2 words |
| 4.1-4.4 | | PASS | |
| 4.5 | Prerequisites | PASS | Explicit Prerequisites section (line 44) |
| 4.6 | Out-of-scope | PASS | |
| 4.7 | Info type | PASS | |
| 4.8 | No duplication | MIXED | Installation (lines 54-83) duplicates `comfystream-quickstart.mdx` Local Install Path (lines 116-147); same install command + nodes + models |
| 4.9 | Orientation | PASS | |
| 4.10 | ≥3 cross-tab | FAIL | Zero cross-tab links |
| 4.11 | Discord test | PASS | |
| 4.12 | Page size | PASS | 6.7 KB |
| 4.13 | Zero TODO | PASS | |
| 4.14 | Flat layout | PASS | |
| 4.15 | Trade-offs named | MIXED | Streaming vs batch workflow trade-off named at line 88; UDP port range trade-off named at line 116 |
| 4.16-4.20 | | PASS / N/A | |
| 5.1 | Correct template | FAIL | pageType non-canonical; if instruction, missing Verification + Next Steps; if guide, OK |
| 5.2 | Required sections | MIXED | Has Prerequisites + Steps (StyledSteps) + Related; missing dedicated Verification |
| 5.3-5.4 | | PASS | |
| 5.5 | Info-type → component | PASS | Uses `<StyledSteps>` correctly |
| 5.6 | Renders | PASS (presumed) | |
| 5.7 | Old-schema | FAIL | `status: current` (line 24); `pageType: how_to` legacy |
| 5.8-5.10 | | PASS | |
| 5.13 | Section ordering | PASS | |
| 5.14 | Multi-view | PASS | |
| 5.15 | Data imports | MIXED | Hardware recommendation hardcoded; install commands hardcoded |
| 5.16 | Related Pages OR Next Step | FAIL | Both: closing prose at line 134 ("The workflow is ready for live use. Register it as a BYOC container...") AND `<CardGroup>` at line 136 |
| 5.17 | Related Pages format | MIXED | `<CardGroup cols={2}>` not `<Columns cols={2}>`; Cards use `<Card title=... icon=... href=... arrow horizontal>` not `<CustomCardTitle>` wrapper |
| 5.18 | Tab icon | N/A | No Tabs |
| 5.19 | Accordion icon | N/A | |
| 5.20 | Code block icon+title | FAIL | All 5 code blocks (lines 59, 68, 77, 107, 118) missing `icon` + `title` |
| 5.21 | StyledSteps | PASS | EXEMPLARY — `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">` with `<StyledStep title="..." icon="...">` on line 55-83. This is the in-repo template for other pages |
| 5.22 | Nav cards CustomCardTitle | FAIL | Cards plain |
| 5.23 | StyledTable | N/A | No tables |
| 5.24-5.25 | | PASS | |
| 5.26 | CustomDivider | MIXED | No `<CustomDivider />` import (line 28-30 imports LinkArrow, CenteredContainer, StyledSteps); uses markdown `---` |
| 5.27 | Mermaid | N/A | |
| 5.28-5.34 | | PASS | |
| 6.1 | Claims citable | MIXED | "RTX 3090 or later recommended" — no source. ComfyUI Save (API Format) instruction unsourced |
| 6.2 | Code TESTED | NOT-TESTED | |
| 6.3 | Deprecated API | PASS | |
| 6.4 | Numbers real | PASS | |
| 6.5 | REVIEW flags | N/A | |
| 6.6 | veracityStatus | FAIL | Missing |
| 6.7 | Glossary | PASS | |
| 6.8 | Source staleness | FAIL | Git install unpinned; Docker image not version-pinned |
| 6.9-6.12 | | PASS / NOT-TESTED | |
| 7.1 | docs.json | PASS | line 2530 |
| 7.2-7.5 | | PASS | |
| 7.6 | ≥3 cross-tab | FAIL | |
| 7.7-7.12 | | PASS | |
| 8.1 | Internal | PASS | |
| 8.2 | External | NOT-TESTED | |
| 8.3-8.6 | | PASS / N/A | |
| 9-10 | | NOT-TESTED / PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Workflow Authoring" | PASS | |
| sidebarTitle | Yes | "Workflow Authoring" | PASS | |
| description | Yes | "How to build ComfyUI workflows..." | PASS | |
| pageType | Yes | how_to | FAIL | Non-canonical — set `guide` or `instruction` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | |
| complexity | No | — | FAIL | |
| lifecycleStage | No | — | FAIL | |
| keywords | Yes | array | MIXED | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Legacy |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Not imported (markdown `---` used) | Required | Should import |
| `<StyledSteps>` / `<StyledStep>` | Yes | Required | EXEMPLARY — correct usage |
| `<Tabs>` | No | Recommended | Could group Docker / Local install / RunPod variants |
| `<Columns cols={2}>` Related Pages | No | Required | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav cards | |
| Fenced code with icon+title | No | Required | 5 missing |
| `<Tip>` (header CTA) | Yes (line 32) | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: Installation section (lines 54-83) overlaps with `comfystream-quickstart.mdx` Local Install Path (lines 116-147). Same `pip install git+...`, same auxiliary nodes step, same model download.
- **OVERLAP**: "Running ComfyStream" (line 107) overlaps with quickstart's "Start the server" (line 141).
- **OVERLAP**: Gateway Integration (lines 124-128) is a one-paragraph teaser pointing to comfystream-as-byoc — acceptable.
- **LINK GAPS**: `livepeer/comfystream` repo unlinked. `livepeer-comfystream` RunPod template unlinked. ComfyUI repo + Save (API Format) docs unlinked. PyTorch install docs unlinked.
- **STRANDED**: Reader who finishes the page is sent to comfystream-as-byoc — fine — but no link back to comfystream-quickstart for an end-to-end run.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned phrases | 1 | line 40: "This guide covers building a workflow..." |
| Banned constructions | 1 | line 40 self-reference |

## Heading Score Table

| Heading | Total |
|---|---|
| Prerequisites | 24 |
| Installation | 22 |
| Workflow Structure | 23 |
| Running ComfyStream | 22 |
| Gateway Integration | 23 |
| Related Pages | exempt |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 59 | bash | ✗ | ✗ | NOT-TESTED | pip install — unpinned |
| 68 | bash | ✗ | ✗ | NOT-TESTED | cp -r custom_nodes |
| 77 | bash | ✗ | ✗ | NOT-TESTED | bash scripts/download_models.sh |
| 107 | bash | ✗ | ✗ | NOT-TESTED | python server/app.py |
| 118 | bash | ✗ | ✗ | NOT-TESTED | --media-ports |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page covers "build a workflow + install + run" in one go but doesn't tell the reader what success looks like. There's no verification step ("the UI shows a webcam preview with the workflow applied"). The §"Running ComfyStream" gives the command but skips the part where the reader confirms it's working.
- **Fix step:** Add §"Verification" after §"Running ComfyStream" (line 121). Three bullets: (1) "Browser shows transformed webcam stream", (2) "Server logs show frame counts increasing", (3) "TensorRT compilation completed without error in first run". Add `<Check>` component for visual signal.
- **Source/exemplar:** `comfystream-quickstart.mdx` §"Pipeline Verification" (line 167) — sibling page already has the pattern to mirror.

### Layer 2 — Composition
- **Gap:** No `<CustomDivider />` JSX (uses markdown `---`); pageType non-canonical (1.2, 5.7); code blocks missing icon+title (5.20); Related Pages uses CardGroup not Columns (5.17). No diagram for the streaming-workflow vs batch-workflow difference (line 88) — would benefit from a side-by-side Mermaid showing input nodes / processing chain / output node for both.
- **Fix step:** Change `pageType: how_to` to `pageType: instruction` (this page IS instruction — does X). Import `<CustomDivider />` and use it. Add `icon` + `title` to every code block. Convert Related Pages. Add a Mermaid diagram in §"Workflow Structure" showing batch (input image → process → output image) vs streaming (input frame → process → output frame, repeated).
- **Source/exemplar:** `comfystream-as-byoc.mdx` (sibling) — same pageType issue but otherwise structurally similar.

### Layer 3 — Cross-page integration
- **Gap:** `livepeer/comfystream` repo first-mention unlinked (line 60). ComfyUI repo unlinked. RunPod template URL not given. PyTorch install docs (CUDA-version-specific) unlinked. Gateway Integration (line 128) only points to comfystream-as-byoc — could also link `realtime-ai/overview` for Cascade context.
- **Fix step:** Add inline links at first mentions. Add "Before you start" section recommending readers complete `comfystream-quickstart.mdx` first (or skip if they have ComfyUI installed already).
- **Source/exemplar:** Upstream URLs.

### Layer 4 — Veracity and source authority
- **Gap:** `veracityStatus` missing. Git install at line 60 unpinned. RTX 3090 recommendation unsourced. Save (API Format) instruction — no link to ComfyUI's Developer Mode docs. Model download script `bash scripts/download_models.sh` referenced — script not linked to repo path.
- **Fix step:** Pin git install: `pip install git+https://github.com/livepeer/comfystream.git@<tag>`. Add `veracityStatus: unverified` until pinning happens. Add link to ComfyUI Developer Mode toggle docs. Replace "RTX 3090 or later recommended" with source from `comfystream/overview.mdx` Hardware Requirements (line 165) or upstream.
- **Source/exemplar:** ComfyUI docs; livepeer/comfystream releases.

### Layer 5 — Product-forward depth
- **Gap:** Page treats workflow authoring as a copy-the-command task. No design guidance: which nodes work in streaming vs batch, what to avoid (stateful nodes that break across frames), how to tune for latency. The "streaming workflow differs from batch in one respect" (line 88) is the one design hint and it's vague — "one respect" should be three concrete constraints.
- **Fix step:** Expand §"Workflow Structure" with: (a) "Nodes that work" list (StreamDiffusionSampler, LoadTensor); (b) "Nodes to avoid" (anything caching across batches; anything that does file I/O per node); (c) "Latency budget" — total time per frame at 15 fps = 66ms, so each node's compute must fit within that minus overhead. Reference the Performance Characteristics table from `comfystream/overview.mdx`.
- **Source/exemplar:** `comfystream/overview.mdx` Node Ecosystem + Performance Characteristics sections.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. `pageType: how_to` non-canonical (1.2); 4 required frontmatter fields missing (1.1, 1.4, 1.6, 1.7, 1.8).
2. All 5 code blocks missing `icon` + `title` (5.20); git install unpinned (2.D3, 6.8).
3. Related Pages: both in-prose closing paragraph (line 134) and CardGroup (line 136) present (5.16); CardGroup not Columns (5.17); plain Cards (5.22).
4. Self-reference + banned phrase at line 40 ("This guide covers...") — 2.3, 2.4.
5. Zero cross-tab graduation links (4.10, 7.6); no verification section though page is instructional.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: how_to` → `pageType: instruction` (or `guide` if reference-leaning); add `pageVariant` if applicable | 22 | HIGH | S | check 1.2 |
| 2 | Add missing frontmatter: `purpose: build`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` | 23-25 | HIGH | S | check 1.1+1.8 |
| 3 | Reword line 40: replace "This guide covers building a workflow..." with subject-led "Building a streaming workflow takes three changes from a batch ComfyUI workflow..." or similar | 40-41 | HIGH | S | check 2.3+2.4 |
| 4 | Add `icon` + `title` to every code block: ` ```bash icon="terminal" title="install.sh"` etc. | 59, 68, 77, 107, 118 | HIGH | M | check 5.20 |
| 5 | Pin git install at line 60: `pip install git+https://github.com/livepeer/comfystream.git@<tag>`; add `{/* REVIEW: pin tag */}` if version unknown | 60 | HIGH | S | check 2.D3+6.8 |
| 6 | Convert `<CardGroup cols={2}>` (line 136) to `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` | 136-173 | HIGH | M | check 5.17+5.22 |
| 7 | Delete closing prose paragraph at line 134 — check 5.16 | 134 | HIGH | S | check 5.16 |
| 8 | Add §"Verification" after §"Running ComfyStream" with 3 success-signal bullets | line 121 | HIGH | M | check 5.2; sibling quickstart line 167 |
| 9 | Add ≥3 cross-tab graduation cards | new cards | HIGH | S | check 4.10+7.6 |
| 10 | Import `<CustomDivider />` and replace markdown `---` (lines 36, 42, 52, 85, 101, 122, 130) | imports + rules | MEDIUM | S | check 5.26 |
| 11 | Remove legacy `status: current` field | 24 | MEDIUM | S | check 5.7 |
| 12 | Add inline upstream links: `[livepeer/comfystream](https://github.com/livepeer/comfystream)` (line 60), ComfyUI Developer Mode docs (line 99) | 60, 99 | MEDIUM | S | check 6.1+6.10 |
| 13 | Expand §"Workflow Structure" with concrete "nodes that work / nodes to avoid / latency budget" guidance | line 87 | MEDIUM | M | layer 5 |
| 14 | Add Mermaid diagram showing batch vs streaming workflow node graphs | new at line 88 | INFO | M | check 5.27 |
| 15 | Label code blocks TESTED / NOT-TESTED with reason | 5 code blocks | INFO | S | check 6.2 |
