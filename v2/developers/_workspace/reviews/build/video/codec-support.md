# Review: codec-support.mdx (build/video)

**Page**: `v2/developers/build/video/codec-support.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A5
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: — (missing)
**Bytes**: 3,228
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference` (line 7) — canonical |
| 1. Frontmatter | 1.3 | pageVariant | FAIL | Absent; `specification` would suit |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Absent |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Absent |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Absent |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Absent |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Lines 4-6: "Video and audio codecs supported by the Livepeer network for transcoding, ingest, and playback. Container formats, codec profiles, and limitations." 156 chars, subject-led |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "H.264", "VP8", "HEVC", "container format", "transcoding codec" — specific |
| 1. Frontmatter | 1.14 | audience register match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | No US hits in narrative |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 30: "Livepeer transcoding supports a range of video and audio codecs..." subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | PASS | |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Livepeer transcoding supports…", "H.264 is the default output codec…", "AAC is the default audio codec…" |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | PASS | |
| 2. Voice | 2.20 | Per-tab terminology | PASS | |
| 2. Voice | 2.21 | First-use defined | MIXED | "LPMS" (line 30) expanded inline ("Livepeer Media Server") — good; "AVC", "HEVC", "AAC", "Opus", "NVENC", "NVDEC", "MPEG-TS", "ABR" not expanded |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | reference |
| 2. Voice | 2.D2 | API/method has code or link | N/A | No API methods named |
| 2. Voice | 2.D3 | Versions explicit | FAIL | go-livepeer / LPMS version not pinned; NVIDIA driver/CUDA versions not stated; FFmpeg version not stated |
| 2. Voice | 2.D4 | Errors in main content | N/A | |
| 2. Voice | 2.D5 | No prose explaining self-evident code | N/A | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | N/A | No `<Note>` |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "Video codecs" (22), "Container formats" (22), "Audio codecs" (22) — all OK |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "Codec support" — 2 words. Title sentence-case (line 2) vs sidebarTitle title-case "Codec Support" — inconsistent capitalisation per project rules but neither is wrong-form |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming style | MIXED | reference style prefers literal/findable headings; "Container formats" is good; "Video codecs" / "Audio codecs" are noun-led but the table inside them carries the structure — fine |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | Reference page for codec support |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer look up which codec/container is supported for ingest/transcode/playback" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | |
| 4. Structure | 4.4 | No dead ends | MIXED | Closing prose paragraph (line 103) is a 2-link breadcrumb — works but is in-prose Next-Step style. No Related Pages footer. Check 5.16 |
| 4. Structure | 4.5 | Prerequisites stated | N/A | Reference page; reader doesn't run anything |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | Linked to transcoding and LPMS pages |
| 4. Structure | 4.7 | Info type per section | PASS | Reference data |
| 4. Structure | 4.8 | No content duplication | PASS | |
| 4. Structure | 4.9 | Section orientation page | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | The 2 closing-paragraph links stay inside `developers/`. No Gateways/Solutions/About |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "is HEVC supported?" but not "what's the cost difference between H.264 and HEVC output" or "when does NVENC fail back to software" |
| 4. Structure | 4.12 | Page size | MIXED | 3.2 KB — under the 5 KB substantive threshold for a published reference. Compare against `codec-support` in `livepeer/go-livepeer` README or a richer reference |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | NVENC/NVDEC vs software fallback named for video codecs — good. No trade-offs for container formats (e.g. "MP4 output supports VOD download only" — implied by table but no clarifying prose). VP9 "Limited" transcode output — not defined |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | N/A | No code blocks |
| 4. Structure | 4.18 | Code-first opening | N/A | reference |
| 4. Structure | 4.19 | Error states in main | N/A | |
| 4. Structure | 4.20 | API/method has code/link | N/A | |
| 5. Layout | 5.1 | Correct template | PASS | reference template |
| 5. Layout | 5.2 | Required sections present | MIXED | Intro + body H2s present; Related Pages footer absent (closing prose paragraph at line 103 substitutes — fails the structural requirement) |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Video codecs table IS `<StyledTable>` (good); Container formats and Audio codecs tables (lines 79-86, 93-97) are RAW markdown — should be `<StyledTable>` |
| 5. Layout | 5.6 | MDX renders | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 9: `status: current` legacy |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | Video → Container → Audio |
| 5. Layout | 5.14 | Multi-view layout | N/A | |
| 5. Layout | 5.15 | Data imports | FAIL | Codec/container/audio matrices are reference data; should live in `snippets/data/lpms/codec-matrix.json` (or similar) and be imported. Pure-table reference content is the canonical case for data imports |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | No formal Related Pages section; closing prose paragraph (line 103) does the routing in 2 inline links. Reference pageType matrix REQUIRES Related Pages footer |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Related Pages at all (5.17 implicitly fails) |
| 5. Layout | 5.18 | Tab icon prop | N/A | |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon+title | N/A | No code blocks |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | N/A (no nav cards) | But should add Related Pages with CustomCardTitle per 5.17 |
| 5. Layout | 5.23 | StyledTable | FAIL | 2 raw markdown tables (Container formats lines 79-86; Audio codecs lines 93-97); 1 `<StyledTable>` (Video codecs lines 36-71) |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 3 tables on page (rubric max 1-2 per page) |
| 5. Layout | 5.25 | Max 1 major layout element | MIXED | 3 tables is the major-element count; consolidating into 1 unified codec/container matrix with type rows would help |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | Opening divider line 28 OK; between H2s; the final divider line 101 separates audio codec section from closing prose — there's no Related Pages section to precede |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | PASS | All info visible without interaction |
| 5. Layout | 5.32 | Reference tables at end | MIXED | Tables ARE the page content — placement OK; but the "Reference tables at end" rule is for pages mixing prose+tables, not pure tables |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | FAIL | NO citations on any codec support claim. "H.264 (AVC) — Yes ingest / Yes transcode (default) / NVENC/NVDEC" — where in go-livepeer or LPMS does this claim hold? Should link to a config or capability list. "VP9 — Limited transcode output" — "Limited" is unsourced and undefined. "Files up to 10 GB" (line 87) — no citation. "WebRTC sessions use Opus" (line 99) — no spec link |
| 6. Veracity | 6.2 | Code TESTED | N/A | |
| 6. Veracity | 6.3 | No deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | 10 GB upload limit plausible; need citation |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent — for a reference page that ships unsourced claims, `unverified` is mandatory |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | FAIL | No version pin on go-livepeer / LPMS / NVIDIA driver / CUDA / FFmpeg. Codec capability is build-dependent — without versions the table is unverifiable |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | FAIL | No links to `livepeer/lpms`, `livepeer/go-livepeer`, FFmpeg codec docs, NVIDIA video codec SDK |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | docs.json line 2577 |
| 7. Nav/IA | 7.2 | Mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | Orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | PASS | Reference page; reader arrives looking for fact |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | All in-prose links internal |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | MIXED | 3.2 KB is on the low side for a reference but not stub-level |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | PASS | Both in-prose links resolve |
| 8. Links | 8.2 | External | N/A | |
| 8. Links | 8.3 | Snippets | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | Codec/container/audio matrices covered; missing: codec profile (H.264 baseline/main/high), codec level, max resolution per codec, max bitrate per codec |
| 10. Completeness | 10.2 | Zero-to-hero | N/A | |
| 10. Completeness | 10.3 | Persona paths | PASS | |
| 10. Completeness | 10.4 | Scope | PASS | |
| 10. Completeness | 10.5 | Self-containment | PASS | |
| 10. Completeness | 10.6 | Language paths | N/A | |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Codec support" | PASS | 2 words, sentence case |
| sidebarTitle | Yes | "Codec Support" | PASS | Title case |
| description | Yes | "Video and audio codecs supported by the Livepeer network for transcoding, ingest, and playback. Container formats, codec profiles, and limitations." | PASS | 156 chars, subject-led |
| pageType | Yes | reference | PASS | Canonical |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Required |
| complexity | No | — | FAIL | Required |
| lifecycleStage | No | — | FAIL | Required |
| keywords | Yes | array | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt/type/width/height | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Required for reference page with unsourced claims |
| lastVerified | Yes | '2026-05-15' | PASS | |
| status | Yes | current | FAIL | Legacy field |
| pageVariant | No | — | INFO | `specification` would suit |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (5×) | Required | — | Placement broadly OK; no Related Pages divider needed if no section added |
| `<StyledTable>` | Yes (1×) | Required where tables present | — | Used for Video codecs (good); MISSING for Container formats and Audio codecs (5.23 FAIL) |
| `<Columns cols={2}>` Related Pages | No | Required (reference pageType) | — | Missing — closing prose paragraph (line 103) is the only routing |
| `<CustomCardTitle>` | No | Required for nav Cards | — | No nav cards at all |
| `<Note>` / `<Tip>` / `<Warning>` | No | — | — | A `<Warning>` about NVENC fallback would help |
| `<AccordionGroup>` | No | Recommended | — | Profile/level deep-detail would suit |
| Fenced code | No | — | — | |

## Cross-page duplication and link gaps

- **OVERLAP**: None — codec data is reference-exclusive on this page.
- **LINK GAPS**: No links to `livepeer/lpms`, `livepeer/go-livepeer`, FFmpeg codec reference, NVIDIA Video Codec SDK. Page is asserting LPMS+FFmpeg capability without any upstream source.
- **LINK GAPS**: Closing prose links to `transcoding-direct-quickstart` and `lpms-integration` — good sibling routing; no cross-tab.
- **STRANDED**: Reader who needs codec profile (H.264 Baseline vs Main vs High) leaves empty-handed. That detail is in `ingest-and-playback.mdx` line 120 — should be linked here.

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
| Video codecs | 4 | 4 | 5 | 5 | 4 | 22 |
| Container formats | 5 | 4 | 5 | 5 | 4 | 23 |
| Audio codecs | 4 | 4 | 5 | 5 | 4 | 22 |

## Code Block Audit

(No code blocks on this page.)

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** A reader landing on Codec Support needs more than yes/no/limited — they need decision data: which codec to use when, what's the cost difference, what's the quality difference, what fails on the network. The "Limited" cell for VP9 is the most-visible signal of imprecision on the whole page — what does Limited mean?
- **Fix step:** Replace each `Limited` with a specific qualifier ("VP9: transcode output not supported for live, supported for VOD" or similar). Add a "Choosing a codec" callout above the Video codecs table with 3 bullets: H.264 for compatibility, HEVC for bitrate savings (40% smaller files at equivalent quality), VP8/VP9 for WebRTC. Add a max-resolution column.
- **Source/exemplar:** `livepeer/lpms` capability matrix or README; FFmpeg codec documentation for empirical bitrate-savings.

### Layer 2 — Composition
- **Gap:** 3 tables, 2 of them raw markdown (5.23 FAIL); page exceeds 1-2 tables limit (5.24); no Related Pages footer (5.16+5.17 FAIL); reference data is hardcoded inline instead of imported from a data module (5.15). No `<AccordionGroup>` for codec-profile / level deep-detail. No `<Warning>` for NVENC fallback semantics.
- **Fix step:** (a) Convert Container formats (lines 79-86) and Audio codecs (lines 93-97) markdown tables to `<StyledTable variant="bordered">`. (b) Extract all three codec tables to `snippets/data/lpms/codec-matrix.json` (or similar). Import + render to keep data central. (c) Add a `<Columns cols={2}>` Related Pages section with `<CustomCardTitle>` cards at the end — siblings + cross-tab. (d) Add an `<AccordionGroup>` after Video codecs containing H.264 Baseline/Main/High profile detail, codec levels, max res per codec.
- **Source/exemplar:** `snippets/data/` directory pattern; `MermaidColours.jsx` for data-module structure.

### Layer 3 — Cross-page integration
- **Gap:** No upstream repo links (`livepeer/lpms`, `livepeer/go-livepeer`). No link to FFmpeg or NVIDIA codec docs (the authoritative sources for the claims on this page). No Related Pages cross-tab cards. The codec profile detail exists on `ingest-and-playback.mdx` line 120 (`H264Baseline`, `H264Main`, `H264High`, `H264ConstrainedHigh`) but is not linked from this codec reference page.
- **Fix step:** (a) Inline link at line 30 first LPMS mention: `[LPMS (livepeer/lpms)](https://github.com/livepeer/lpms)`. (b) Inline link at line 73 first NVENC/NVDEC mention to NVIDIA Video Codec SDK page. (c) Inline link to FFmpeg codec reference where appropriate. (d) Add Related Pages cards: `transcoding-direct-quickstart` (sibling), `lpms-integration` (sibling), `/v2/gateways/setup/configure` (cross-tab, operator codec config), `/v2/about/network/architecture` (cross-tab). (e) Inline link in Video codecs table notes to `ingest-and-playback.mdx#transcoding-profiles` for H.264 profile values.
- **Source/exemplar:** `livepeer/lpms` README; FFmpeg.org codec docs.

### Layer 4 — Veracity and source authority
- **Gap:** Every codec support claim is unsourced. "H.264 transcode output (default)" — citation? "Files up to 10 GB" — citation? "VP9 — Limited" — what's the definition of Limited? "MOV, AVI, MKV, WMV" — does LPMS actually accept all four? "WebRTC sessions use Opus" — link to spec? No version pins on go-livepeer/LPMS/FFmpeg/NVIDIA driver. `veracityStatus` absent on a pure-reference page. This is the highest veracity-fragility page in the section.
- **Fix step:** (a) Add `veracityStatus: unverified` to frontmatter. (b) For every table cell, add a footnote or inline link to the source (LPMS capability matrix, go-livepeer release notes, FFmpeg compile flags). (c) Pin versions in the intro: "Codec support verified against `livepeer/go-livepeer v0.8.x` + `livepeer/lpms` HEAD + FFmpeg v7.x". (d) Replace "Limited" with a precise statement. (e) Add `lastVerified` discipline — re-run a TESTED check whenever LPMS releases.
- **Source/exemplar:** `livepeer/lpms` `core/lpms.go` capability constants; `livepeer/go-livepeer` releases page.

### Layer 5 — Product-forward depth
- **Gap:** Page reads as a yes/no matrix. No signal on cost (HEVC encoding is more expensive, NVENC saves cycles), no signal on production reality (what % of orchestrators have NVENC?), no signal on which combinations actually run end-to-end vs which are theoretical-only. No "when to pick which" framing. No max-resolution per codec. No bitrate ceilings. A developer making an encoding choice for a real product needs all of this and gets none of it.
- **Fix step:** Add a §"Choosing a codec" before the Video codecs table with 3-4 bullets per use case (browser playback / mobile / live / archival). Add columns to Video codecs: "Max resolution", "Typical bitrate range", "Orchestrator availability". Add a §"Operational notes" near the end with: NVENC vs software trade-offs, NVENC orchestrator distribution, software fallback latency penalty, when LPMS will refuse to transcode (e.g. unsupported profile).
- **Source/exemplar:** `.claude/references/layout/exemplars.md`; `livepeer/lpms` README for operational notes.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. Frontmatter: missing 4 required fields (`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`); retains legacy `status: current` (5.7). A reference page shipping unsourced claims MUST be `veracityStatus: unverified` until citations are added.
2. **No Related Pages footer** at all (5.16+5.17 FAIL). Reference pageType matrix requires it. Closing prose paragraph (line 103) is in-prose Next-Step style — not equivalent.
3. 2 of 3 tables are raw markdown not `<StyledTable>` (5.23 FAIL); page has 3 tables exceeding the 1-2 max per rubric 5.24.
4. **Zero citations** on codec/container/audio claims (6.1, 6.10 FAIL). "Limited" cell for VP9 is unsourced and undefined. No version pins on LPMS/go-livepeer/FFmpeg/NVIDIA SDK. No upstream repo links anywhere on the page.
5. Reference data hardcoded in MDX (5.15 FAIL) — codec matrix is the canonical case for `snippets/data/lpms/...` data module import.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `purpose: reference`, `complexity: intermediate`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter; remove `status: current`; add `pageVariant: specification` | 7-10 | HIGH | S | check 1.1+1.4+1.6+1.7+1.8+5.7 |
| 2 | Add a `<Columns cols={2}>` Related Pages section at EOF with `<CustomCardTitle>` cards: 2 siblings (transcoding-direct-quickstart, lpms-integration) + 2 cross-tab (`/v2/gateways/setup/configure`, `/v2/about/network/architecture`) | append | HIGH | M | check 5.16+5.17+5.22+4.10 |
| 3 | Convert Container formats table (lines 79-86) and Audio codecs table (lines 93-97) to `<StyledTable variant="bordered">` | 79-86, 93-97 | HIGH | M | check 5.23+5.24 |
| 4 | Add inline citations to every codec support claim: link `livepeer/lpms` README + go-livepeer release notes + FFmpeg/NVIDIA SDK refs. Add intro sentence stating which versions the matrix was verified against | 30, 36-71, 79-86, 93-97 | HIGH | L | check 6.1+6.10 |
| 5 | Replace ambiguous "Limited" (VP9 transcode output, line 67) with a specific qualifier — e.g. "VOD only" or "off by default in stable builds" | 67 | HIGH | S | check 6.1; Layer 1 |
| 6 | Extract all three codec/container/audio matrices to `snippets/data/lpms/codec-matrix.json` (or similar) and import; render via component to keep data central | 36-71, 79-86, 93-97 | HIGH | L | check 5.15 |
| 7 | Add a §"Choosing a codec" subsection above the Video codecs table with 3 bullets per use case (browser, mobile, live, archival) | before 34 | HIGH | M | Layer 5 |
| 8 | Add Max resolution + Typical bitrate range columns to Video codecs table | 36-71 | MEDIUM | M | Layer 5 |
| 9 | Inline link upstream repos at first mention: line 30 `[LPMS](https://github.com/livepeer/lpms)`; line 73 NVIDIA Video Codec SDK; FFmpeg.org codec ref where used | 30, 73 | MEDIUM | S | check 6.10 |
| 10 | Inline link to `ingest-and-playback.mdx#transcoding-profiles` from Video codecs notes for H.264 profile/level detail | 73 | MEDIUM | S | check 8.1 |
| 11 | Delete closing in-prose paragraph at line 103 once Related Pages footer is in place (5.16 forbids both) | 103 | MEDIUM | S | check 5.16 |
| 12 | Pin versions in intro: "Codec support verified against `livepeer/go-livepeer v0.8.x` + `livepeer/lpms` HEAD + FFmpeg v7.x" | 30 | MEDIUM | S | check 2.D3+6.8 |
| 13 | Add an `<AccordionGroup>` with H.264 profile detail, codec level, max res per codec, software fallback latency | after Video codecs table | INFO | M | Layer 2 |
| 14 | Define abbreviations on first use: AVC, HEVC, AAC, Opus, NVENC, NVDEC, MPEG-TS, ABR | 30, 36, 71, 73, 91, 99 | INFO | S | check 2.21 |
