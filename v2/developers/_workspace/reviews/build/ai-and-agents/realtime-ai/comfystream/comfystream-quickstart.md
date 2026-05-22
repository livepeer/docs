# Review: comfystream-quickstart.mdx

**Page**: `v2/developers/build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `tutorial`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `build`
**Bytes**: 10,569
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1.1 | 10 fields | PASS | All present |
| 1.2 | pageType canonical | PASS | `tutorial` |
| 1.3 | pageVariant | N/A | `quickstart` recommended |
| 1.4-1.8 | | PASS | `build` / `developer` / `intermediate` / `build` / `verified` |
| 1.11 | description well-formed | PASS | "Run ComfyStream on RunPod, Docker, or local install. First real-time AI effect on a webcam in fifteen minutes." subject-led, 130 chars |
| 1.12 | OG block | PASS | |
| 1.13 | keywords | PASS | `comfystream`, `runpod`, `docker`, `streamdiffusion`, `webcam`, `webrtc` — specific |
| 1.14 | audience match | PASS | |
| 2.1-2.22 | Voice (universal) | PASS | |
| 2.D1 | Code-first | FAIL | Body opens with 75 words of prose (lines 40-48) plus a 3-row markdown table before any code. Quickstart should put a single command above the fold |
| 2.D2 | API methods | PASS | |
| 2.D3 | Versions explicit | MIXED | "CUDA 12.0+", "CUDA 12.8", "NVIDIA driver 570.124.06" — pinned. "ComfyStream" Docker image not version-pinned (line 91 `docker pull livepeer/comfystream` pulls `latest`). Git install at line 129 unpinned |
| 2.D4 | Errors in main | PASS | Common Errors AccordionGroup at line 181, in main flow |
| 2.D5-D6 | | PASS | |
| 2.D7 | Note for primary | N/A | |
| 3.1 | Score ≥20/25 | MIXED | "Required Tools" (22), "RunPod Path" (24), "Docker Path" (23), "Local Install Path" (22), "Workflow Loading" (22), "Pipeline Verification" (23), "Common Errors" (21), "Network Connection" (22), "Production-Ready Pipelines" (22), "Next Steps" (avoid — line 230) |
| 3.2 | Banned/weak | FAIL | "Next Steps" (line 230) |
| 3.3-3.10 | | PASS | |
| 3.6 | Title well-formed | PASS | "ComfyStream Quickstart" — 2 words |
| 4.1-4.4 | | PASS | |
| 4.5 | Prerequisites | MIXED | "Required Tools" section (line 52) acts as prerequisites but is named differently; tutorial matrix wants "Prerequisites" |
| 4.6 | Out-of-scope | PASS | |
| 4.7 | Info type | PASS | |
| 4.8 | No duplication | MIXED | Hardware/VRAM requirements (lines 54-56) duplicate `comfystream/overview.mdx` (lines 163-166) and `model-support.mdx` line 90; cross-referenced but data should be shared |
| 4.9 | Orientation | PASS | |
| 4.10 | ≥3 cross-tab | FAIL | Zero cross-tab links |
| 4.11 | Discord test | PASS | |
| 4.12 | Page size | PASS | 10.6 KB |
| 4.13 | Zero TODO | PASS | |
| 4.14 | Flat layout | MIXED | 3 deployment paths (RunPod / Docker / Local) are 3 separate H2 sections with 3 separate `<Steps>` blocks; should be `<Tabs>` per check 5.14 multi-view rule (3 variant paths = 1D = Tabs) |
| 4.15 | Trade-offs named | MIXED | Path-choice table (lines 44-48) lists trade-offs; common errors AccordionGroup covers failure modes; but no production-vs-development boundary |
| 4.16-4.20 | | PASS / N/A | |
| 5.1 | Correct template | MIXED | tutorial; Verification section present (line 167) — GOOD, in-house exemplar |
| 5.2 | Required sections | PASS | Prerequisites (named "Required Tools"), Steps, Verification, Related |
| 5.3-5.4 | | PASS | |
| 5.5 | Info-type → component | MIXED | Path-choice table at line 44 is markdown; should be `<StyledTable>`. Network Connection table at line 205 is markdown |
| 5.6 | Renders | PASS (presumed) | |
| 5.7 | Old-schema | FAIL | `status: current` (line 25) |
| 5.8-5.10 | | PASS | |
| 5.13 | Section ordering | PASS | |
| 5.14 | Multi-view | FAIL | 3 deployment paths should be a single `<Tabs>` block, not 3 sequential H2 sections |
| 5.15 | Data imports | FAIL | Hardware requirements + path-choice content hardcoded; should pull from shared snippets |
| 5.16 | Related Pages OR Next Step | FAIL | Both: closing prose at line 228 + Next Steps CardGroup at line 232 |
| 5.17 | Related Pages format | FAIL | `<CardGroup>` not `<Columns>`; plain Cards |
| 5.18 | Tab icon | N/A | No Tabs (which is the problem — see 5.14) |
| 5.19 | Accordion icon | FAIL | 5 `<Accordion>` (lines 182, 185, 188, 191, 194) missing `icon` prop |
| 5.20 | Code block icon+title | FAIL | All 7 bash blocks (lines 90, 95, 122, 128, 136, 141) missing `icon` + `title` |
| 5.21 | StyledSteps | FAIL | Uses raw `<Steps>` four times (lines 66, 88, 120, 153); rubric requires `<StyledSteps>` with `iconColor` + `titleColor` |
| 5.22 | Nav cards CustomCardTitle | FAIL | All 4 Next Steps Cards plain |
| 5.23 | StyledTable | FAIL | 3 raw markdown tables (lines 44, 205, 218 is a bullet list) — 2 actual tables |
| 5.24 | Max 1-2 tables | PASS | 2 tables |
| 5.25 | Max 1 major element | MIXED | 4 separate Steps blocks + 1 AccordionGroup + 2 tables — busy |
| 5.26 | CustomDivider | PASS | OK |
| 5.27 | Mermaid | N/A | |
| 5.28-5.34 | | PASS | |
| 6.1 | Claims citable | MIXED | "First compilation can take up to ten minutes" — no source; "RunPod A4000 or A40 is a reasonable starting point" — opinion not cited |
| 6.2 | Code TESTED | NOT-TESTED | All 7 bash blocks unlabelled |
| 6.3 | Deprecated API | PASS | |
| 6.4 | Numbers real | PASS | |
| 6.5 | REVIEW flags | N/A | |
| 6.6 | veracityStatus | PASS | `verified` |
| 6.7 | Glossary | PASS | |
| 6.8 | Source staleness | MIXED | Docker image not pinned (`livepeer/comfystream` pulls `latest`); git install at line 129 unpinned |
| 6.9 | Open-ended | PASS | |
| 6.10 | Source authority | MIXED | docs.comfystream.org cited 3 times (line 102, 134); `livepeer/comfystream` not linked at first mention |
| 6.11-6.12 | | PASS / NOT-TESTED | |
| 7.1 | docs.json | PASS | line 2529 |
| 7.2-7.5 | | PASS | |
| 7.6 | ≥3 cross-tab | FAIL | |
| 7.7-7.12 | | PASS | |
| 8.1 | Internal | PASS | All resolve |
| 8.2 | External | NOT-TESTED | |
| 8.3-8.6 | | PASS / N/A | |
| 9-10 | | NOT-TESTED / PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "ComfyStream Quickstart" | PASS | |
| sidebarTitle | Yes | "Quickstart" | PASS | |
| description | Yes | "Run ComfyStream on RunPod, Docker..." | PASS | |
| pageType | Yes | tutorial | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | build | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | Unpinned installs erode the claim |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | Legacy |
| pageVariant | No | — | INFO | `quickstart` recommended |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (9×) | Required | OK |
| `<Steps>` / `<Step>` (raw) | Yes (4 blocks) | — | FAIL 5.21 — should be `<StyledSteps>` |
| `<StyledSteps>` | No | Required | Missing |
| `<Tabs>` / `<Tab icon>` | No | Required for 3 path variants | FAIL 5.14 — 3 H2 paths should be 1 Tabs block |
| `<AccordionGroup>` / `<Accordion icon>` | Yes (1 + 5) | — | FAIL 5.19 — Accordions missing icons |
| Fenced code with icon+title | No | Required | FAIL 5.20 — 7 blocks missing |
| `<Columns cols={2}>` Related Pages | No | Required | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav cards | Cards plain |
| `<StyledTable>` | No | Required | 2 raw tables |
| `<Tip>` (header CTA) | Yes (line 35) | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: Hardware requirements (lines 54-56) duplicate `comfystream/overview.mdx` Hardware Requirements (lines 160-170) and `model-support.mdx` line 90.
- **OVERLAP**: "Pipeline Verification" section (line 167) overlaps with Common Errors. Both name "GPU VRAM exhausted" symptoms.
- **OVERLAP**: §"Production-Ready Pipelines" (line 216) restates `comfystream/overview.mdx` §"Phase 4 Additions" (lines 103-106) — should be link, not restated.
- **LINK GAPS**: First `livepeer/comfystream` mention has no repo link (line 91, line 129). First `docs.comfystream.org` mention (line 102) has no link. No link to RunPod template page. No link to `--media-ports` flag reference in upstream.
- **STRANDED**: Reader who hits a common error and the AccordionGroup doesn't help has no link to a Discord / issue tracker.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Banned heading | 1 | line 230: "Next Steps" |

## Heading Score Table

| Heading | Total |
|---|---|
| Required Tools | 22 |
| RunPod Path | 24 |
| Docker Path | 23 |
| Local Install Path | 22 |
| Workflow Loading | 22 |
| Pipeline Verification | 23 |
| Common Errors | 21 |
| Network Connection | 22 |
| Production-Ready Pipelines | 22 |
| Next Steps | 14 — banned/weak |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 90 | bash | ✗ | ✗ | NOT-TESTED | docker pull — unpinned image |
| 95 | bash | ✗ | ✗ | NOT-TESTED | docker run |
| 122 | bash | ✗ | ✗ | NOT-TESTED | conda create |
| 128 | bash | ✗ | ✗ | NOT-TESTED | pip install — unpinned git |
| 136 | bash | ✗ | ✗ | NOT-TESTED | setup_models.py |
| 141 | bash | ✗ | ✗ | NOT-TESTED | server/app.py |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises "15 minutes to first effect on a webcam". The reader has to scroll past 65 lines of prose + path-choice table + Required Tools before reaching the first command (line 90). A scannable quickstart should put the RunPod one-click above the fold and only show paths on demand.
- **Fix step:** Restructure: keep the header CTA Tip; immediately after, show a `<Tabs>` block with three Tabs (RunPod, Docker, Local Install). The first Tab (RunPod) should contain the one-click action and start the timer at line 35. Move Required Tools into a collapsible `<Accordion title="Hardware requirements" icon="microchip">` above the Tabs. Move Common Errors into the same Tabs structure so each path has its own troubleshooting.
- **Source/exemplar:** Multi-path tutorial pattern; `.claude/references/layout/best-practice.md` Multi-Path Layout Pattern.

### Layer 2 — Composition
- **Gap:** Raw `<Steps>` x4 (5.21 FAIL); 3 deployment paths as separate H2s instead of `<Tabs>` (5.14 FAIL); Accordions missing icons (5.19); code blocks missing icon+title (5.20); Related Pages CardGroup not Columns (5.17). The page has 4 separate `<Steps>` blocks for 3 paths and a "Workflow Loading" — should be 1 Tabs block with each Tab containing one `<StyledSteps>`.
- **Fix step:** Wrap RunPod / Docker / Local Install paths in `<Tabs>`: `<Tab title="RunPod" icon="cloud">`, `<Tab title="Docker" icon="docker">`, `<Tab title="Local install" icon="terminal">`. Replace all four `<Steps>` with `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">`. Add `icon` to every `<Accordion>`. Add `icon` + `title` to every code block. Convert Related Pages to `<Columns cols={2}>` + `<CustomCardTitle>`.
- **Source/exemplar:** `workflow-authoring.mdx` (sibling) lines 55-83 — correct `<StyledSteps iconColor titleColor>` usage already in-repo.

### Layer 3 — Cross-page integration
- **Gap:** No link to `livepeer/comfystream` repo on first mention. No link to docs.comfystream.org on first mention (only in Cards at EOF). No link to RunPod template URL. No cross-tab graduation.
- **Fix step:** Add inline links: line 91 `[livepeer/comfystream](https://github.com/livepeer/comfystream)`; line 102 `[docs.comfystream.org](https://docs.comfystream.org)`; line 68 `[livepeer-comfystream RunPod template](https://runpod.io/console/explore?template=livepeer-comfystream)` (verify URL). Add ≥3 cross-tab graduation cards in Related Pages.
- **Source/exemplar:** Upstream URLs.

### Layer 4 — Veracity and source authority
- **Gap:** Docker image unpinned (`livepeer/comfystream` → `latest`). Git install unpinned. "First compilation can take up to ten minutes" not sourced. RunPod GPU recommendations (A4000, A40) unsourced. No code TESTED.
- **Fix step:** Pin Docker tag: `docker pull livepeer/comfystream:vX.Y.Z` with `{/* REVIEW: pin tag */}`. Pin git ref: `pip install git+https://github.com/livepeer/comfystream.git@vX.Y.Z`. Label every code block TESTED with date + environment or NOT-TESTED with reason. Link RunPod template page for hardware recommendations.
- **Source/exemplar:** `livepeer/comfystream` releases page.

### Layer 5 — Product-forward depth
- **Gap:** Quickstart is the activation moment but doesn't surface signals beyond "you see the transformed webcam". No latency claim ("frames at ~14-15 fps for SD 1.5 + DepthControlNet"). No cost signal. No "first 60 seconds after success" — try a different workflow, swap a node, change a prompt. The "Network Connection" section (line 201) hints at production but no concrete steps for the BYOC path beyond a link.
- **Fix step:** Add §"What success looks like" with: expected fps for the starter workflow + first-compile time benchmark + GPU memory headroom. Add §"Take it further" with 3 quick experiments (load a different workflow, change StreamDiffusion prompt mid-stream, drop resolution to 384x384 for higher fps). Reframe Network Connection as Tabs (Daydream Tab + BYOC Tab) with one command per Tab to make the choice visible.
- **Source/exemplar:** Replicate / Hugging Face quickstart "next experiments" sections.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Raw `<Steps>` x4 instead of `<StyledSteps>` (5.21) — repo has correct usage at `workflow-authoring.mdx`.
2. 3 deployment paths as separate H2s instead of `<Tabs>` (5.14) — violates 1D multi-view rule.
3. Code blocks missing `icon` + `title` (5.20); Accordions missing `icon` (5.19); Docker image unpinned (2.D3, 6.8).
4. Related Pages: both closing prose (line 228) and CardGroup (line 232) present (5.16); CardGroup not Columns (5.17); plain Cards (5.22).
5. Zero cross-tab graduation links (4.10, 7.6).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Wrap RunPod / Docker / Local Install paths in single `<Tabs>` block with `<Tab icon="cloud">`, `<Tab icon="docker">`, `<Tab icon="terminal">` | 62-147 | HIGH | L | check 5.14+5.18; multi-path pattern |
| 2 | Replace all four raw `<Steps>` blocks with `<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">`; replace `<Step>` with `<StyledStep title="..." icon="...">` | 66, 88, 120, 153 | HIGH | M | check 5.21; `workflow-authoring.mdx` line 55 |
| 3 | Add `icon="circle-question"` to each of 5 `<Accordion>` | 182, 185, 188, 191, 194 | HIGH | S | check 5.19 |
| 4 | Add `icon` + `title` to every fenced code block (7 total): `\`\`\`bash icon="terminal" title="docker-run.sh"` etc. | 90, 95, 122, 128, 136, 141 | HIGH | M | check 5.20 |
| 5 | Pin Docker image at line 91: `docker pull livepeer/comfystream:<latest-tag>`; pin git install at line 129: `pip install git+https://github.com/livepeer/comfystream.git@<tag>`; add `{/* REVIEW: pin tag */}` if version unknown | 91, 129 | HIGH | S | check 2.D3+6.8 |
| 6 | Convert `<CardGroup cols={2}>` (line 232) to `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />`; rename H2 "Next Steps" → "Related Pages" | 230-245 | HIGH | M | check 5.16+5.17+5.22 |
| 7 | Delete closing prose paragraph at line 228 ("You have a working ComfyStream pipeline...") | 228 | HIGH | S | check 5.16 |
| 8 | Add ≥3 cross-tab graduation cards: `/v2/gateways/setup/connect`, `/v2/about/network/architecture`, `/v2/solutions/managed-gateway` | new cards | HIGH | S | check 4.10+7.6 |
| 9 | Add inline upstream links: `[livepeer/comfystream](https://github.com/livepeer/comfystream)` (line 91), `[docs.comfystream.org](https://docs.comfystream.org)` (line 102), RunPod template URL (line 68) | 68, 91, 102 | MEDIUM | S | check 6.1+6.10 |
| 10 | Remove legacy `status: current` field | 25 | MEDIUM | S | check 5.7 |
| 11 | Convert 2 markdown tables (lines 44, 205) to `<StyledTable variant="bordered">` | 44, 205 | MEDIUM | S | check 5.23 |
| 12 | Rename §"Required Tools" → §"Prerequisites" to match tutorial matrix | 46 | MEDIUM | S | check 4.5+5.2 |
| 13 | Add `pageVariant: quickstart` | 15 | MEDIUM | S | check 1.3 |
| 14 | Label code blocks TESTED with date / NOT-TESTED with reason | 7 code blocks | MEDIUM | M | check 6.2 |
| 15 | Add §"Take it further" with 3 quick experiments before Related Pages | new H2 | INFO | M | layer 5 |
| 16 | Extract hardware-requirements data to a shared snippet shared with comfystream/overview + model-support | 54-56 | INFO | M | check 5.15 |
