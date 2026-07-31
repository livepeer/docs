# Review: data-channels.mdx

**Page**: `v2/developers/build/ai-and-agents/realtime-ai/pytrickle/data-channels.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: missing
**Bytes**: 3,122
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1.1 | 10 fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | pageType canonical | PASS | `reference` |
| 1.4 | purpose | FAIL | Missing |
| 1.5-1.8 | | PASS / FAIL | `developer` / FAIL / FAIL / FAIL |
| 1.11 | description well-formed | PASS | "Read and write non-media data (text, JSON, binary) alongside video/audio in PyTrickle real-time sessions." subject-led, 109 chars |
| 1.12 | OG block | PASS | |
| 1.13 | keywords | PASS | `TrickleSubscriber`, `events_url`, `non-media data` — specific |
| 1.14 | audience match | PASS | |
| 2.1-2.22 | Voice (universal) | PASS | |
| 2.3 | banned phrases | MIXED | Line 87: "The [data channels concept](...) page covers the trickle data channel architecture." — matches "page covers" pattern (2.3) |
| 2.4 | banned constructions | MIXED | Line 87 borderline (referencing another page); not strict 2.4 |
| 2.D1 | Code-first | N/A | reference |
| 2.D2 | API methods | PASS | |
| 2.D3 | Versions explicit | FAIL | No PyTrickle version pinned; `TrickleSubscriber` introduced with no version reference |
| 2.D4-D6 | | PASS | |
| 2.D7 | Note for primary | N/A | |
| 3.1 | Score ≥20/25 | MIXED | "Reading data channel output" (23), "Writing data from a FrameProcessor" (22) |
| 3.2 | Banned/weak | PASS | |
| 3.3-3.10 | | PASS | |
| 3.6 | Title well-formed | MIXED | "PyTrickle data channels" — 3 words; lowercase "data channels" makes it look casual; sidebarTitle "Data Channels" is fine |
| 4.1-4.4 | | PASS | |
| 4.5 | Prerequisites | N/A | reference |
| 4.6 | Out-of-scope | PASS | |
| 4.7 | Info type | PASS | |
| 4.8 | No duplication | PASS | Distinct scope |
| 4.9 | Orientation | PASS | |
| 4.10 | ≥3 cross-tab | FAIL | |
| 4.11 | Discord test | MIXED | Reader learns the read/write pattern but not when this is needed vs a regular FrameProcessor |
| 4.12 | Page size | FAIL | 3.1 KB — under the 5 KB substantive threshold for concept/reference pages (4.12). Page is thin |
| 4.13 | Zero TODO | PASS | |
| 4.14 | Flat layout | PASS | |
| 4.15 | Trade-offs named | FAIL | No trade-off / failure mode / when-to-use guidance |
| 4.16-4.20 | | PASS / N/A | |
| 5.1 | Correct template | MIXED | reference; no Related Pages footer at all |
| 5.2 | Required sections | FAIL | Reference pageType matrix requires Related Pages footer — missing entirely. Page ends with a single in-prose closing paragraph (line 87) with no CardGroup or `<Columns>` |
| 5.3-5.4 | | PASS | |
| 5.5 | Info-type → component | MIXED | No `<ParamField>` for `events_url`, `payload` structure; no `<StyledTable>` for `payload` schema |
| 5.6 | Renders | PASS (presumed) | |
| 5.7 | Old-schema | FAIL | `status: current` (line 9) |
| 5.8-5.10 | | PASS | |
| 5.13 | Section ordering | PASS | |
| 5.14-5.15 | | N/A / MIXED | |
| 5.16 | Related Pages OR Next Step | FAIL | Neither dedicated Related Pages nor a `<Columns>` footer. Single closing prose paragraph that mentions two links (line 87) |
| 5.17 | Related Pages format | FAIL | No Related Pages section at all |
| 5.18 | Tab icon | N/A | |
| 5.19 | Accordion icon | N/A | |
| 5.20 | Code block icon+title | FAIL | Both python blocks (lines 39, 64) missing `icon` + `title` |
| 5.21 | StyledSteps | N/A | reference |
| 5.22 | Nav cards CustomCardTitle | N/A | No nav cards (5.16 FAIL) |
| 5.23 | StyledTable | N/A | No tables |
| 5.24-5.25 | | PASS | |
| 5.26 | CustomDivider | PASS | `<CustomDivider />` imported (line 24) and used 4 times (lines 31, 36, 58, 85) |
| 5.27 | Mermaid | MIXED | Data flow alongside video could be a Mermaid diagram |
| 5.28-5.34 | | PASS | |
| 6.1 | Claims citable | MIXED | `LiveVideoToVideo` referenced on line 56 — no link to source. `publish_data` method on line 73 referenced — not documented elsewhere on the page nor linked |
| 6.2 | Code TESTED | NOT-TESTED | |
| 6.3 | Deprecated API | PASS | |
| 6.4 | Numbers real | PASS | |
| 6.5 | REVIEW flags | N/A | |
| 6.6 | veracityStatus | FAIL | Missing |
| 6.7 | Glossary | PASS | |
| 6.8 | Source staleness | FAIL | No version pin |
| 6.9 | Open-ended | PASS | |
| 6.10 | Source authority | FAIL | Page describes the PyTrickle data-channel API but never links upstream `livepeer/pytrickle` repo or any PR/release that introduced data channels |
| 6.11-6.12 | | PASS / NOT-TESTED | |
| 7.1 | docs.json | PASS | line 2540 |
| 7.2-7.5 | | PASS | |
| 7.6 | ≥3 cross-tab | FAIL | |
| 7.7-7.12 | | PASS | |
| 8.1 | Internal | PASS | trickle-protocol + frame-processor both resolve |
| 8.2 | External | NOT-TESTED | |
| 8.3-8.6 | | PASS / N/A | |
| 9-10 | | NOT-TESTED / MIXED | Page size + missing Related Pages constitute incomplete coverage |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "PyTrickle data channels" | MIXED | Lowercase "data channels" |
| sidebarTitle | Yes | "Data Channels" | PASS | |
| description | Yes | "Read and write non-media data..." | PASS | |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | |
| complexity | No | — | FAIL | |
| lifecycleStage | No | — | FAIL | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | |
| lastVerified | Yes | 2026-05-15 | PASS | |
| status | Yes | current | FAIL | Legacy |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (4×, imported) | Required | OK |
| Fenced code with icon+title | No | Required | 2 missing |
| `<Columns cols={2}>` Related Pages | No | Required (reference) | FAIL — missing entire footer |
| `<CustomCardTitle>` | No | Required for nav cards | No cards |
| `<StyledTable>` / `<ParamField>` | No | Recommended for `payload` schema | |
| `<Tip>` (header CTA) | Yes (line 27) | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: None — data channels concept is unique here.
- **LINK GAPS**: First mention of `TrickleSubscriber` (line 40) — no link to source. `LiveVideoToVideo` referenced (line 56) — no link to source. `publish_data` method (line 73) — no link to where it's defined or to the `StreamServer` reference. `pts_time` (line 76) — no docs.
- **STRANDED**: Page has 2 outbound links in the closing paragraph; no Related Pages CardGroup; reader hits EOF and has no clear navigation.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 1 | line 87: "The [data channels concept] page covers the trickle data channel architecture." — "page covers" |
| Self-reference | 0 | — |

## Heading Score Table

| Heading | Total |
|---|---|
| Reading data channel output | 23 |
| Writing data from a FrameProcessor | 22 |

## Code Block Audit

| Line | Lang | Icon | Title | TESTED | Notes |
|---|---|---|---|---|---|
| 39 | python | ✗ | ✗ | NOT-TESTED | TrickleSubscriber read example |
| 64 | python | ✗ | ✗ | NOT-TESTED | TranscriptionPipeline write example |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page shows how to read/write data channels but doesn't say WHEN this is useful. A reader landing here from a search for "data channel" needs to know: (1) when is this the right pattern (transcription, frame metadata)? (2) when not (use return tensor for video). (3) what's the alternative — a Mermaid showing data-vs-media flow. Currently the reader leaves with two code snippets and no context.
- **Fix step:** Add §"When to use a data channel" before §"Reading data channel output". Three bullets: (a) "Returning structured data alongside processed video — e.g., transcription text, detection boxes"; (b) "Streaming metadata at a different cadence to the video frame rate"; (c) "When the output is purely data (no transformed video)". Add a Mermaid showing video channel + data channel sharing one trickle connection.
- **Source/exemplar:** `comfystream/overview.mdx` Data-Channel Output (line 127) — already names use cases; this page should re-cite/parallel them.

### Layer 2 — Composition
- **Gap:** Tiny page (3.1 KB — under the 5 KB substantive threshold for non-navigation pages, check 4.12); missing Related Pages entirely (5.16, 5.17). 4 frontmatter fields missing. Code blocks missing icon+title. No `<ParamField>` for payload schema. No diagram.
- **Fix step:** Promote the closing paragraph into a Related Pages section: `<CustomDivider />` then `<Columns cols={2}>` with 4 Cards — trickle-protocol, frame-processor, pytrickle/overview, pytrickle/pytrickle-quickstart. Add `icon` + `title` to both code blocks. Add a `<ParamField>` block describing the payload structure (type field, fields per type). Add `purpose: reference`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified`.
- **Source/exemplar:** Any complete reference page in the sibling tree (e.g., frame-processor.mdx).

### Layer 3 — Cross-page integration
- **Gap:** `TrickleSubscriber` (line 40) — first mention, no link to source or reference. `LiveVideoToVideo` (line 56) — same. `publish_data` (line 73) — same. The closing line 87 mentions `trickle-protocol` (concept page) and `frame-processor` (reference page) — fine, but they belong in a Related Pages CardGroup not a closing prose.
- **Fix step:** Add inline link to `livepeer/pytrickle` at line 33: "PyTrickle data channels...". Add per-class source links to `TrickleSubscriber`, `LiveVideoToVideo`, `publish_data` (GitHub source). Add ≥3 cross-tab graduation cards in Related Pages.
- **Source/exemplar:** Upstream source URLs.

### Layer 4 — Veracity and source authority
- **Gap:** `veracityStatus` missing. No PyTrickle version pinned. `LiveVideoToVideo.events_url` claim (line 56) unsourced. `publish_data` method exists on StreamServer — not documented on `frame-processor.mdx` (which is supposed to be the reference) — internal inconsistency: this page asserts `await self.publish_data(...)` but `frame-processor.mdx` doesn't list a `publish_data` method on FrameProcessor or StreamServer.
- **Fix step:** Add `veracityStatus: verified` with proof. Pin PyTrickle version where the data channel API was introduced (PR link if possible). Update `frame-processor.mdx` to document `publish_data` (or update this page to remove the contradiction). Mark `{/* REVIEW: publish_data not in frame-processor.mdx reference */}` until reconciled.
- **Source/exemplar:** Upstream `livepeer/pytrickle` source.

### Layer 5 — Product-forward depth
- **Gap:** Page is 86 lines and shows two code samples. No production guidance: what happens when the data subscriber disconnects? Is data buffered or dropped? What's the max payload size? Is the channel reliable (TCP-like) or best-effort? Is order preserved? Is the channel encrypted? Does the orchestrator forward it through unchanged?
- **Fix step:** Add §"Data-channel guarantees" with: ordering (preserved or not), reliability (lossy or not), max payload size (REVIEW), encryption (TLS via WebRTC DTLS?), buffering policy when subscriber disconnects.
- **Source/exemplar:** WebRTC DataChannel docs; upstream PyTrickle source for the data-channel implementation.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 6 / MEDIUM 4 / INFO 2
**Critical findings (1–5)**:
1. Page lacks a Related Pages footer entirely (5.16, 5.17) — only a single closing prose line 87 with two inline links. Reference page MUST have a Columns Related Pages section.
2. 4 required frontmatter fields missing (1.1, 1.4, 1.6, 1.7, 1.8).
3. Both code blocks missing `icon` + `title` (5.20); no PyTrickle version pinned (2.D3, 6.8).
4. Page-size FAIL (3.1 KB) — below substantive threshold (4.12); page is structurally incomplete.
5. Internal inconsistency: `publish_data` method asserted at line 73 but not documented in `frame-processor.mdx` reference — drift risk (6.6).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add missing frontmatter: `purpose: reference`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` | 7-10 | HIGH | S | check 1.1+1.8 |
| 2 | Add `<CustomDivider />` before EOF; add `<Columns cols={2}>` Related Pages with 4 Cards using `<CustomCardTitle icon="..." title="..." horizontal />`: trickle-protocol, frame-processor, pytrickle/overview, pytrickle/pytrickle-quickstart | EOF | HIGH | M | check 5.16+5.17 |
| 3 | Remove closing in-prose paragraph at line 87 — Related Pages CardGroup replaces it | 87 | HIGH | S | check 5.16 |
| 4 | Add `icon="code"` + `title="data_channel_read.py"` / `"transcription_pipeline.py"` to both code blocks | 39, 64 | HIGH | S | check 5.20 |
| 5 | Add ≥3 cross-tab graduation cards in the new Related Pages section | EOF | HIGH | S | check 4.10+7.6 |
| 6 | Reconcile `publish_data` method: add it to `frame-processor.mdx` reference under StreamServer OR FrameProcessor; add `{/* REVIEW: confirm publish_data is on FrameProcessor not StreamServer */}` comment on this page until resolved | 73 | HIGH | M | check 6.6 + cross-page |
| 7 | Add §"When to use a data channel" with 3 bullets before §"Reading data channel output" | line 38 | MEDIUM | M | layer 1 |
| 8 | Add §"Data-channel guarantees" before Related Pages: ordering, reliability, max payload, encryption, buffering | new H2 | MEDIUM | M | layer 5 |
| 9 | Add inline upstream links: line 40 `[TrickleSubscriber](https://github.com/livepeer/pytrickle/blob/...)`; line 56 `[LiveVideoToVideo](...)`; line 73 `[publish_data](...)` | 40, 56, 73 | MEDIUM | S | check 6.10 |
| 10 | Remove legacy `status: current` field | 9 | MEDIUM | S | check 5.7 |
| 11 | Add Mermaid diagram showing video + data channels sharing a trickle connection | new at line 38 | INFO | M | check 5.27; layer 1 |
| 12 | Label both code blocks TESTED with date / NOT-TESTED with reason | 39, 64 | INFO | S | check 6.2 |
| 13 | Capitalise "Data Channels" in title to match sidebarTitle | 2 | INFO | S | check 1.11 |
| 14 | Reword line 87 (if kept as an inline LinkArrow): replace "page covers" with subject-led "[trickle-protocol] documents the underlying transport" | 87 | INFO | S | check 2.3 |
