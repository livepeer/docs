# Review: overview.mdx (pytrickle)

**Page**: `v2/developers/build/ai-and-agents/realtime-ai/pytrickle/overview.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `overview` (NON-CANONICAL — should be `concept`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: missing
**Bytes**: 7,326
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1.1 | 10 fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | pageType canonical | FAIL | `overview` (line 22) — set `concept` |
| 1.4-1.8 | | FAIL | 4 fields missing |
| 1.11 | description well-formed | PASS | "PyTrickle is the Python SDK for building real-time video processing services over the trickle protocol, using the FrameProcessor abstraction." subject-led, 142 chars |
| 1.12 | OG block | PASS | |
| 1.13 | keywords | PASS | `FrameProcessor`, `StreamServer`, `asyncio` — specific |
| 1.14 | audience match | PASS | |
| 2.1-2.22 | Voice (universal) | PASS | |
| 2.D1 | Code-first | N/A | concept |
| 2.D2 | API methods | PASS | |
| 2.D3 | Versions explicit | FAIL | "Python 3.8+" pinned but no PyTrickle version; no PyTorch version |
| 2.D4-D6 | | PASS | |
| 2.D7 | Note for primary | N/A | |
| 3.1 | Score ≥20/25 | MIXED | "FrameProcessor" (24), "StreamServer" (24), "SDK Responsibilities" (23), "Prerequisites" (24), "Related Pages" (exempt) |
| 3.2 | Banned/weak | PASS | |
| 3.3-3.10 | | PASS | |
| 3.6 | Title well-formed | PASS | "PyTrickle" — 1 word |
| 4.1-4.4 | | PASS | |
| 4.5 | Prerequisites | PASS | §"Prerequisites" at line 158 |
| 4.6-4.9 | | PASS | |
| 4.10 | ≥3 cross-tab | FAIL | |
| 4.11 | Discord test | PASS | |
| 4.12 | Page size | PASS | 7.3 KB |
| 4.13 | Zero TODO | PASS | |
| 4.14 | Flat layout | PASS | |
| 4.15 | Trade-offs named | MIXED | ComfyStream vs PyTrickle distinction at line 38; PyTrickle responsibilities table names what is/isn't user responsibility — good. Missing: production-vs-development trade-off, when NOT to use PyTrickle |
| 4.16-4.20 | | PASS / N/A | |
| 5.1 | Correct template | MIXED | concept; pageType non-canonical |
| 5.2 | Required sections | PASS | |
| 5.3-5.4 | | PASS | |
| 5.5 | Info-type → component | PASS | StyledTable used for responsibilities |
| 5.6 | Renders | PASS (presumed) | |
| 5.7 | Old-schema | FAIL | `pageType: overview`; `status: current` (line 24) |
| 5.8-5.10 | | PASS | |
| 5.13 | Section ordering | PASS | |
| 5.14 | Multi-view | N/A | |
| 5.15 | Data imports | MIXED | Code block (python class skeleton) duplicates other pages |
| 5.16 | Related Pages OR Next Step | FAIL | Both: closing prose at line 169 ("Use the [PyTrickle quickstart]...") AND CardGroup at line 171 |
| 5.17 | Related Pages format | MIXED | `<CardGroup cols={2}>` not `<Columns cols={2}>`; Cards with `arrow horizontal` props, not `<CustomCardTitle>` |
| 5.18 | Tab icon | N/A | |
| 5.19 | Accordion icon | N/A | |
| 5.20 | Code block icon+title | FAIL | Both code blocks (lines 48, 82) missing `icon` + `title` |
| 5.21 | StyledSteps | N/A | concept |
| 5.22 | Nav cards CustomCardTitle | FAIL | |
| 5.23 | StyledTable | PASS | SDK Responsibilities table uses `<StyledTable>` (line 104) — exemplary |
| 5.24 | Max 1-2 tables | PASS | 1 table |
| 5.25 | Max 1 major element | PASS | |
| 5.26 | CustomDivider | MIXED | No `<CustomDivider />` import; markdown `---` (line 36, 42, 100, 156, 165) — but the page DOES NOT import CustomDivider despite using `<CustomDivider />` wait... let me re-check. Line 28-30 imports LinkArrow, CenteredContainer, StyledTable; line 42 + 100 + 156 + 165 use the markdown `---` not the JSX component. Could be by-design; rubric prefers JSX |
| 5.27 | Mermaid | MIXED | No diagram; PyTrickle architecture (orchestrator → SDK → processor → output) would benefit from one |
| 5.28-5.34 | | PASS | |
| 6.1 | Claims citable | MIXED | "FrameProcessor is the base class" — no source link to `livepeer/pytrickle` repo on first mention |
| 6.2 | Code TESTED | NOT-TESTED | |
| 6.3 | Deprecated API | PASS | |
| 6.4 | Numbers real | PASS | |
| 6.5 | REVIEW flags | N/A | |
| 6.6 | veracityStatus | FAIL | Missing |
| 6.7 | Glossary | PASS | |
| 6.8 | Source staleness | FAIL | No PyTrickle version pinned |
| 6.9-6.12 | | PASS / NOT-TESTED | |
| 7.1 | docs.json | PASS | line 2537 |
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
| title | Yes | "PyTrickle" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "PyTrickle is the Python SDK..." | PASS | |
| pageType | Yes | overview | FAIL | Non-canonical → `concept` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | |
| complexity | No | — | FAIL | |
| lifecycleStage | No | — | FAIL | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Legacy |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Not imported (markdown `---`) | Required | Should import |
| `<StyledTable>` | Yes | Required | EXEMPLARY |
| Fenced code with icon+title | No | Required | 2 missing |
| `<Columns cols={2}>` Related Pages | No | Required | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav cards | |
| `<Tip>` (header CTA) | Yes | — | OK |
| Mermaid | No | Recommended | |

## Cross-page duplication and link gaps

- **OVERLAP**: FrameProcessor class skeleton (lines 48-74) duplicates `frame-processor.mdx` (line 46+) and `ai-and-agents/overview.mdx` (lines 102-130) — same class shown 3 times across the tree.
- **OVERLAP**: StreamServer wrapper (lines 82-96) duplicates `frame-processor.mdx` lines 188-220.
- **LINK GAPS**: First `livepeer/pytrickle` mention (line 38) lacks repo link. PyPI / git install paths not given. http-trickle from line 163 prerequisites unlinked even though the repo is named.
- **STRANDED**: Reader arrives at Prerequisites and learns about http-trickle but the next step in the page is just Related Pages — no inline "next, install http-trickle via the quickstart" link.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | (only Python `initialize` identifier in code) |
| Banned words | 0 | — |
| Banned phrases | 0 | — |

## Heading Score Table

| Heading | Total |
|---|---|
| FrameProcessor | 24 |
| StreamServer | 24 |
| SDK Responsibilities | 23 |
| Prerequisites | 24 |
| Related Pages | exempt |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 48 | python | ✗ | ✗ | NOT-TESTED | FrameProcessor class — duplicated content |
| 82 | python | ✗ | ✗ | NOT-TESTED | StreamServer wrapper |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Concept page shows FrameProcessor + StreamServer + a responsibilities table — but doesn't position PyTrickle against alternatives. When does a reader pick PyTrickle vs ComfyStream-as-BYOC vs the new BYOC client SDK? The decision is implied at line 38 ("where ComfyStream wraps ComfyUI, PyTrickle provides the lower-level abstraction") but no concrete matrix.
- **Fix step:** Add §"When to use PyTrickle" decision matrix immediately after the header CTA (line 36): three rows — "Custom Python model that isn't ComfyUI → PyTrickle"; "ComfyUI workflow → ComfyStream-as-BYOC"; "Just consuming a real-time pipeline → @muxionlabs/byoc-sdk".
- **Source/exemplar:** `comfystream/overview.mdx` Relationship to BYOC table is the in-house pattern.

### Layer 2 — Composition
- **Gap:** pageType non-canonical (1.2, 5.7); code blocks missing icon+title (5.20); Related Pages format wrong (5.17, 5.22). The architecture is described in prose at line 40 but no diagram. No Mermaid showing the SDK boundary (decoder + queue + processor + encoder).
- **Fix step:** Change pageType to `concept`. Add icon+title to code blocks. Convert Related Pages to Columns. Add Mermaid showing the PyTrickle SDK boundary (input stream → FFmpeg decoder → frame queue → FrameProcessor.process_video_async → encoder → output stream) so the SDK Responsibilities table has a visual anchor.
- **Source/exemplar:** `frame-processor.mdx` for icon+title usage on python blocks.

### Layer 3 — Cross-page integration
- **Gap:** `livepeer/pytrickle` not linked at first mention (line 38). `livepeer/http-trickle` not linked at line 163. No graduation to BYOC compute pages. No link to the BYOC quickstart from §"Prerequisites".
- **Fix step:** Add inline links: line 38 `[livepeer/pytrickle](https://github.com/livepeer/pytrickle)`; line 163 `[http-trickle](https://github.com/livepeer/http-trickle)`. Add inline reference to the BYOC overview from §"SDK Responsibilities" for context.
- **Source/exemplar:** Upstream URLs.

### Layer 4 — Veracity and source authority
- **Gap:** `veracityStatus` missing. PyTrickle version not pinned anywhere. PyTorch + FFmpeg versions not pinned ("PyTorch — install separately"). Code samples not TESTED.
- **Fix step:** Add `veracityStatus: unverified` until pinned. Add line 161 PyTorch version range. Add line 163 http-trickle make build pinned to a commit/tag. Label code TESTED with date or NOT-TESTED.
- **Source/exemplar:** `livepeer/pytrickle` releases page.

### Layer 5 — Product-forward depth
- **Gap:** Page tells the reader what PyTrickle is but not whether to trust it for production. No maturity signal (Beta? Stable?). No performance characteristics (what's the SDK overhead per frame? memory footprint? max throughput at 1080p?). No "what could go wrong" (FFmpeg incompatibility, asyncio blocking, audio sample rate mismatch).
- **Fix step:** Add `<Badge>Beta — used in Embody / Streamplace production</Badge>` near header. Add §"Performance characteristics" with: SDK overhead per frame (ms), max sustained fps at 720p / 1080p on common GPUs. Add §"What can go wrong" with: blocking calls in process_video_async (already noted at line 33 — promote to its own subsection), audio channel mismatch, FFmpeg version mismatch.
- **Source/exemplar:** `comfystream/overview.mdx` Performance Characteristics + Hardware Requirements pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 6 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. `pageType: overview` non-canonical (1.2); 4 required frontmatter fields missing (1.1, 1.4, 1.6, 1.7, 1.8).
2. Both code blocks missing `icon` + `title` (5.20).
3. Related Pages: both closing prose (line 169) and CardGroup (line 171) present (5.16); CardGroup not Columns (5.17); plain Cards (5.22).
4. Duplication of FrameProcessor class skeleton across overview / frame-processor / ai-and-agents-overview (3 pages, same class).
5. Zero cross-tab graduation links (4.10, 7.6); first `livepeer/pytrickle` mention has no repo link (6.10).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: overview` → `pageType: concept`; add `pageVariant: overview` | 22 | HIGH | S | check 1.2 |
| 2 | Add missing frontmatter: `purpose: explain`, `complexity: intermediate`, `lifecycleStage: discover`, `veracityStatus: unverified` | 23-25 | HIGH | S | check 1.1+1.8 |
| 3 | Add `icon` + `title` to both code blocks: python → `icon="code" title="frame_processor.py"`; python → `icon="code" title="stream_server.py"` | 48, 82 | HIGH | S | check 5.20 |
| 4 | Convert `<CardGroup cols={2}>` (line 171) to `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` | 171-208 | HIGH | M | check 5.17+5.22 |
| 5 | Delete closing prose at line 169 ("Use the [PyTrickle quickstart]...") | 169 | HIGH | S | check 5.16 |
| 6 | Add ≥3 cross-tab graduation cards: `/v2/orchestrators/setup/connect`, `/v2/gateways/setup/connect`, `/v2/about/network/architecture` | new cards | HIGH | S | check 4.10+7.6 |
| 7 | De-duplicate FrameProcessor class skeleton: keep canonical version in `frame-processor.mdx`; replace lines 48-74 here with 5-line tease + LinkArrow | 48-74 | MEDIUM | M | check 4.8 |
| 8 | Add §"When to use PyTrickle" decision matrix after header CTA | line 36 | MEDIUM | M | layer 1 |
| 9 | Add inline upstream links: line 38 `[livepeer/pytrickle](https://github.com/livepeer/pytrickle)`; line 163 `[http-trickle](https://github.com/livepeer/http-trickle)` | 38, 163 | MEDIUM | S | check 6.1+6.10 |
| 10 | Import `<CustomDivider />` and replace markdown `---` (5 places) | imports + rules | MEDIUM | S | check 5.26 |
| 11 | Remove legacy `status: current` field | 24 | MEDIUM | S | check 5.7 |
| 12 | Add Mermaid diagram in §"SDK Responsibilities" showing the SDK boundary | new at line 102 | INFO | M | check 5.27; layer 2 |
| 13 | Add §"Performance characteristics" + §"What can go wrong" | new H2s | INFO | M | layer 5 |
| 14 | Pin PyTrickle + PyTorch + FFmpeg + http-trickle versions in Prerequisites | 158-163 | INFO | S | check 2.D3+6.8 |
