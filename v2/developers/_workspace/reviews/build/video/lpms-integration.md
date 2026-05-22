# Review: lpms-integration.mdx (build/video)

**Page**: `v2/developers/build/video/lpms-integration.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A5
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: — (missing)
**Bytes**: 5,451
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference` (line 23) |
| 1. Frontmatter | 1.3 | pageVariant | FAIL | Absent; `specification` would suit |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Absent |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Absent |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Absent |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Absent |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Lines 4-6: "Livepeer Media Server (LPMS): the embeddable Go library for RTMP ingest, HLS output, and GPU-accelerated transcoding." 121 chars, subject-led |
| 1. Frontmatter | 1.12 | OG block complete | PASS | All 5 fields |
| 1. Frontmatter | 1.13 | keywords specific | PASS | "LPMS", "media server", "RTMP", "Go", "FFmpeg", "NVENC", "NVDEC" — specific |
| 1. Frontmatter | 1.14 | audience register match | PASS | Go code, FFmpeg flags, NVIDIA-specific detail |
| 2. Voice | 2.1 | UK English | PASS | No US hits in narrative |
| 2. Voice | 2.2 | Banned words | PASS | None |
| 2. Voice | 2.3 | Banned phrases | PASS | None |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 39: "LPMS (`livepeer/lpms`) is a Go library providing..." subject-first |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Per-audience prohibited | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | No hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology locked | FAIL | Line 39: "core media handling layer inside go-livepeer's broadcaster node"; line 168 (`<Note>`): "go-livepeer in broadcaster mode"; line 177 (card): "broadcaster gateway"; line 180 (card): "broadcaster gateway" — deprecated term in 4 places |
| 2. Voice | 2.12 | Zero em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | PASS | "LPMS is a Go library...", "LPMS exposes a GPU transcoding API...", "The build system detects GPU capability..." |
| 2. Voice | 2.14 | No hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Zero deprecated terms | FAIL | See 2.11 — 4 narrative uses |
| 2. Voice | 2.17 | Universal terms | MIXED | Mixed Gateway/broadcaster |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary alignment | FAIL | "broadcaster" not in glossary |
| 2. Voice | 2.20 | Per-tab terminology | FAIL | |
| 2. Voice | 2.21 | First-use defined | MIXED | "LPMS" expanded inline; "NVENC" / "NVDEC" used without expansion; "CUDA" used without expansion |
| 2. Voice | 2.22 | Terminology lock | FAIL | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | reference |
| 2. Voice | 2.D2 | API/method has code or link | MIXED | `LPMSOpts`, `lpms.New`, `HandleRTMPPublish`, `HandleRTMPPlay`, `transcoder.Transcode` all shown in code; but `core/lpms.go` referenced (line 143) without a link |
| 2. Voice | 2.D3 | Versions explicit | FAIL | No LPMS version, no Go version, no FFmpeg version, no CUDA version pinned. `git clone https://github.com/livepeer/lpms.git` (line 50) pulls HEAD — moving target |
| 2. Voice | 2.D4 | Errors in main content | N/A | |
| 2. Voice | 2.D5 | No prose explaining self-evident code | PASS | |
| 2. Voice | 2.D6 | No marketing | PASS | |
| 2. Voice | 2.D7 | Note not for primary | FAIL | `<Note>` at line 167-169 carries primary content: "For the full Livepeer protocol with orchestrator discovery, probabilistic micropayments, and network routing, run go-livepeer in broadcaster mode instead of using LPMS directly." This is the decision-critical scoping statement of the entire page — must be inline prose or `<Warning>`, not buried in a Note |
| 3. Headings | 3.1 | Heading score ≥20/25 | PASS | "Building LPMS" (22), "Default Endpoints" (23), "Embedding LPMS" (23), "GPU Transcoding" (23), "Related Pages" (exempt) |
| 3. Headings | 3.2 | No banned/weak terms | PASS | |
| 3. Headings | 3.3 | No literal contrast | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "LPMS" — 1 word |
| 3. Headings | 3.7 | Expert editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | Reference style, findable |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | LPMS reference page |
| 4. Structure | 4.2 | Purpose statement test | PASS | "lets the developer build and embed LPMS in a Go application" |
| 4. Structure | 4.3 | PREV/NEXT adjacency | PASS | |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | No Prerequisites section. Reader needs Go toolchain, libavcodec, optional NVIDIA Pascal+ GPU + CUDA — listed in body prose but not surfaced as a Prerequisites H2 per check 4.5 |
| 4. Structure | 4.6 | Out-of-scope clear | PASS | `<Note>` at line 167 names where LPMS is wrong choice — but the Note placement hides this scoping (see 2.D7) |
| 4. Structure | 4.7 | Info type per section | PASS | |
| 4. Structure | 4.8 | No content duplication | PASS | |
| 4. Structure | 4.9 | Section orientation page | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Both Related Pages cards stay inside `developers/`. No Gateways tab (where operating an LPMS-derived gateway happens), no About tab, no Solutions |
| 4. Structure | 4.11 | Discord test | MIXED | Answers "how do I embed LPMS" but not "what's the maintenance status of LPMS today", "is anyone using LPMS outside go-livepeer", "what's the API stability promise" |
| 4. Structure | 4.12 | Page size | PASS | 5.5 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | `<Note>` at line 167 names trade-off implicitly (LPMS = media layer only, no protocol); no statement of API stability, no statement of NVIDIA hardware requirements specifics, no statement of fallback path when CUDA absent |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Every code block has language tag | PASS | All 7 blocks tagged (`bash`, `go`) |
| 4. Structure | 4.18 | Code-first opening | N/A | reference |
| 4. Structure | 4.19 | Error states in main | N/A | |
| 4. Structure | 4.20 | API/method has code/link | MIXED | `core/lpms.go` referenced (line 143) without GitHub link; `cmd/transcoding/transcoding.go` referenced (line 165) without link |
| 5. Layout | 5.1 | Correct template | PASS | reference |
| 5. Layout | 5.2 | Required sections present | MIXED | Intro + H2s + Related Pages; Prerequisites absent |
| 5. Layout | 5.3 | Approved components | PASS | |
| 5. Layout | 5.4 | Avoided components absent | PASS | |
| 5. Layout | 5.5 | Info-type → component | MIXED | Default Endpoints table (lines 65-69) is raw markdown — should be `<StyledTable>` per 5.23 |
| 5. Layout | 5.6 | MDX renders | PASS (presumed) | |
| 5. Layout | 5.7 | No old-schema | FAIL | Line 25: `status: current` legacy |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.9 | Generated banners | N/A | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.11 | Gold-standard template | NOT-TESTED | |
| 5. Layout | 5.12 | Section blocks | NOT-TESTED | |
| 5. Layout | 5.13 | Section ordering | PASS | Build → Default Endpoints → Embed → GPU |
| 5. Layout | 5.14 | Multi-view layout | PASS | |
| 5. Layout | 5.15 | Data imports | FAIL | Ports (1935, 7935) and binary names hardcoded; `LPMSOpts` field names hardcoded — should reference an LPMS data module or LinkArrow to source |
| 5. Layout | 5.16 | Related Pages OR Next Step | PASS | Related Pages only |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` not `<Columns>`; plain `<Card>` not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon prop | N/A | |
| 5. Layout | 5.20 | Code block icon+title | FAIL | All 7 code blocks (lines 49, 73, 80, 90, 100, 151, 159) missing `icon` + `title` |
| 5. Layout | 5.21 | StyledSteps used | N/A | |
| 5. Layout | 5.22 | Nav cards use CustomCardTitle | FAIL | Both Related Pages cards plain |
| 5. Layout | 5.23 | StyledTable | FAIL | Default Endpoints table raw markdown |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | 1 table |
| 5. Layout | 5.25 | Max 1 major layout element | PASS | |
| 5. Layout | 5.26 | CustomDivider placement | PASS | Opening line 37; between H2s; before Related Pages |
| 5. Layout | 5.27 | Mermaid | FAIL | No diagram of LPMS architecture (RTMP ingest → segmenter → transcoder (CPU or NVENC) → HLS output) — this is exactly the kind of architecture diagram 5.27 wants and the page would benefit from one |
| 5. Layout | 5.28 | Import ordering | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | FAIL | The scoping statement that LPMS is the media layer only (not the protocol) is the decision-critical signal — hidden inside `<Note>` (line 167) per 2.D7 |
| 5. Layout | 5.32 | Reference tables at end | N/A | |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "Pascal or later GPU" (line 57) — no NVIDIA reference; "CUDA toolkit" — no version; `core/lpms.go` referenced (line 143) without link |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | All 7 code blocks unlabeled |
| 6. Veracity | 6.3 | No deprecated API | MIXED | LPMS API current; "broadcaster" term deprecated (4 uses) |
| 6. Veracity | 6.4 | Numbers real | PASS | Ports plausible |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Field absent |
| 6. Veracity | 6.7 | Glossary | PASS | LPMS itself glossed |
| 6. Veracity | 6.8 | Source staleness | FAIL | `git clone .../lpms.git` (line 50) HEAD; no LPMS tag/commit pin; no Go/CUDA/FFmpeg version pins. LPMS API surface can shift on `main` |
| 6. Veracity | 6.9 | Open-ended research | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | `livepeer/lpms` named in line 39 with `livepeer/lpms` prose anchor but no live URL/link at first mention; `livepeer/lpms/lpms` Go module path appears in code (line 104) — implicit upstream but no prose link |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | docs.json line 2579 |
| 7. Nav/IA | 7.2 | Mirrors fs | PASS | |
| 7. Nav/IA | 7.3 | Portal routes | PASS | |
| 7. Nav/IA | 7.4 | Orphans | PASS | |
| 7. Nav/IA | 7.5 | Audience journey | MIXED | Persona 3 (OSS / Go integrator) lands here; not signposted |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | All cards internal |
| 7. Nav/IA | 7.7 | Correct lane | PASS | |
| 7. Nav/IA | 7.8 | Naming | PASS | |
| 7. Nav/IA | 7.9 | TTL | N/A | |
| 7. Nav/IA | 7.10 | No stubs | PASS | |
| 7. Nav/IA | 7.11-7.12 | Resources/Guides | N/A | |
| 8. Links | 8.1 | Internal links | PASS | Both cards resolve |
| 8. Links | 8.2 | External | NOT-TESTED | `github.com/livepeer/lpms.git` not tested |
| 8. Links | 8.3 | Snippets | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | No TODO | PASS | |
| 9. Process | 9.1-9.6 | Governance | NOT-TESTED | |
| 10. Completeness | 10.1 | Job-list | MIXED | Build + endpoint + embed + GPU covered; missing: API stability/versioning policy, contributing/issue link, benchmarks, OS compatibility (Linux only? macOS dev tested?) |
| 10. Completeness | 10.2 | Zero-to-hero | MIXED | Persona 3 (OSS) lands here, no `go.mod`-level snippet for the embed example, no working `main.go` file |
| 10. Completeness | 10.3 | Persona paths | MIXED | Persona 3 unsigned |
| 10. Completeness | 10.4 | Scope | PASS (after fixing 2.D7) | |
| 10. Completeness | 10.5 | Self-containment | MIXED | Embed example references `getStreamIDFromPath` without defining it (line 121, 134) |
| 10. Completeness | 10.6 | Language paths | PASS | Go-only is correct for a Go library reference |
| 10. Completeness | 10.7 | Persona guides | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "LPMS" | PASS | 1 word |
| sidebarTitle | Yes | "LPMS" | PASS | |
| description | Yes | "Livepeer Media Server (LPMS): the embeddable Go library for RTMP ingest, HLS output, and GPU-accelerated transcoding." | PASS | 121 chars, subject-led |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | Required |
| complexity | No | — | FAIL | Required |
| lifecycleStage | No | — | FAIL | Required |
| keywords | Yes | array | PASS | |
| og:image | Yes | developers.png | PASS | |
| og:image:alt/type/width/height | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | Required |
| lastVerified | Yes | '2026-05-13' | PASS | |
| status | Yes | current | FAIL | Legacy field |
| pageVariant | No | — | INFO | `specification` would suit |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | — | Placement OK |
| `<Tabs>` / `<Tab icon>` | No | — | — | |
| `<StyledSteps>` | No | — | — | |
| `<Columns cols={2}>` Related Pages | No | Required | — | Uses CardGroup |
| `<CustomCardTitle>` | No | Required for nav Cards | — | Both cards plain |
| Fenced code with icon + title | No | Required | — | All 7 missing |
| `<Note>` | Yes (1×) | — | — | Carries primary scoping content (2.D7 FAIL) |
| `<Tip>` | Yes (header CTA) | — | — | OK |
| `<StyledTable>` | No | Required for tables | — | Default Endpoints raw markdown |
| Mermaid | No | Recommended | — | Architecture diagram absent |

## Cross-page duplication and link gaps

- **OVERLAP**: None significant.
- **LINK GAPS**: `livepeer/lpms` named in line 39 prose; no anchor link at first mention. `core/lpms.go` (line 143) and `cmd/transcoding/transcoding.go` (line 165) named without GitHub links. `LPMSOpts` referenced without doc link.
- **LINK GAPS**: `getStreamIDFromPath` used in embed example (lines 121, 134) without definition or link.
- **LINK GAPS**: No link to NVIDIA Video Codec SDK / NVENC docs when NVENC/NVDEC discussed.
- **LINK GAPS**: No link to FFmpeg compile-flag reference when `install_ffmpeg.sh` discussed.
- **STRANDED**: Persona 3 (OSS Go integrator) who finishes this page has no link to where LPMS is maintained, no link to contributing guide, no link to issue tracker, no maturity / API stability statement.

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
| **Deprecated terms** | **4** | line 39: "go-livepeer's broadcaster node"; line 168 (`<Note>`): "go-livepeer in broadcaster mode"; line 177 (card): "broadcaster gateway"; line 180 (card): "broadcaster gateway" |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Building LPMS | 4 | 4 | 5 | 5 | 4 | 22 |
| Default Endpoints | 5 | 4 | 5 | 5 | 4 | 23 |
| Embedding LPMS | 5 | 4 | 5 | 5 | 4 | 23 |
| GPU Transcoding | 5 | 4 | 5 | 5 | 4 | 23 |
| Related Pages | exempt | — | — | — | — | — |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 49 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20; git clone HEAD unpinned |
| 73 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 80 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 90 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 100 | go | ✗ | ✗ | NOT-TESTED | FAIL 5.20; embed example references undefined helper `getStreamIDFromPath` |
| 151 | go | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |
| 159 | go | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** A Persona 3 (Go OSS integrator) lands here wanting to know: should I depend on LPMS today? The page doesn't answer. It describes how to build and embed but never names the maintenance status, API stability promise, current contributors, or "who uses this in production outside go-livepeer". The scoping `<Note>` at line 167 says LPMS is the media layer — useful — but doesn't address whether LPMS itself is supported or experimental for external consumers.
- **Fix step:** Add a "Maintenance and API stability" subsection at the top (after the opening `<Tip>`) stating: who maintains LPMS, current tagged release, API stability promise (breaking changes accepted? semver?), known external users beyond go-livepeer. Add a `<Badge>` for maturity.
- **Source/exemplar:** `livepeer/lpms` repo CONTRIBUTING/README; `.claude/references/layout/exemplars.md` — gateway-quickstart maturity badge pattern.

### Layer 2 — Composition
- **Gap:** No `<StyledTable>` for Default Endpoints (5.23). All 7 code blocks missing `icon` + `title` (5.20). Related Pages CardGroup + plain Card (5.17, 5.22). No Mermaid for architecture (5.27). `<Note>` at line 167 carries decision-critical scoping content (2.D7, 5.31).
- **Fix step:** (a) Convert Default Endpoints markdown table to `<StyledTable variant="bordered">`. (b) Add `icon="terminal"` + descriptive `title` to bash blocks; `icon="code"` + descriptive `title` to Go blocks. (c) Replace `<CardGroup cols={2}>` (line 175) with `<Columns cols={2}>` + `<CustomCardTitle>`. (d) Add Mermaid sequence/component diagram of LPMS architecture: RTMP ingest → segmenter → transcoder (CPU branch / NVENC branch) → HLS output. (e) Promote the `<Note>` at line 167 to inline `<Warning>` or to body prose above GPU Transcoding (it's the page's primary scoping statement).
- **Source/exemplar:** `MermaidColours.jsx`; section-summary review of build/ai-and-agents Layer 2.

### Layer 3 — Cross-page integration
- **Gap:** `livepeer/lpms` (line 39) — no anchor link at first prose mention. `core/lpms.go` (line 143), `cmd/transcoding/transcoding.go` (line 165), `LPMSOpts` — all referenced without GitHub links. `getStreamIDFromPath` (lines 121, 134) — used without definition. NVENC/NVDEC discussed without NVIDIA SDK link. No cross-tab graduation: LPMS feeds operator gateways but no Gateways tab link; no About tab for protocol context.
- **Fix step:** (a) Line 39: change `livepeer/lpms` to `[livepeer/lpms](https://github.com/livepeer/lpms)`. (b) Line 143: change to `[core/lpms.go](https://github.com/livepeer/lpms/blob/main/core/lpms.go)`. (c) Line 165: change to `[cmd/transcoding/transcoding.go](https://github.com/livepeer/lpms/blob/main/cmd/transcoding/transcoding.go)`. (d) Define `getStreamIDFromPath` inline or footnote in the embed example. (e) Inline link NVIDIA Video Codec SDK at first NVENC mention. (f) Add ≥3 Related Pages cards including `/v2/gateways/setup/configure` (operator codec config), `/v2/about/network/architecture`, `/v2/orchestrators/setup/connect` (run an orchestrator with LPMS hardware).
- **Source/exemplar:** `livepeer/lpms` repo paths; in-repo pattern at `v2/developers/_workspace/reviews/build/ai-and-agents/overview.md` Layer 3.

### Layer 4 — Veracity and source authority
- **Gap:** `git clone https://github.com/livepeer/lpms.git` (line 50) pulls HEAD — moving target while page is `lastVerified: 2026-05-13`. No LPMS commit/tag pin. Go version, FFmpeg version, NVIDIA CUDA version — all unpinned. `LPMSOpts` fields named (line 109-113) without source link to `core/lpms.go`. "Pascal or later GPU" — no NVIDIA reference. Code blocks unlabelled TESTED. The 4 deprecated-term uses are veracity gaps too — the page mixes "broadcaster" (deprecated) with the canonical glossary.
- **Fix step:** (a) Pin `git clone` to a tag or commit: `git clone --branch v0.x.y https://github.com/livepeer/lpms.git`. (b) Add a "Verified against" intro line: "Tested against `livepeer/lpms` v0.x.y, Go 1.22, FFmpeg 7.x, CUDA 12.8 (NVIDIA driver 570+)." (c) Find-replace "broadcaster" → "gateway" / "Gateway" at lines 39, 168, 177, 180. (d) Add `veracityStatus: unverified` to frontmatter; raise to `verified` after pins. (e) Label every code block TESTED YYYY-MM-DD.
- **Source/exemplar:** `livepeer/lpms` releases page; glossary `Gateway`.

### Layer 5 — Product-forward depth
- **Gap:** Page reads like an API tour, not an evaluation. No statement of when to use LPMS vs go-livepeer (the `<Note>` at 167 says "use go-livepeer for the protocol" but doesn't address "use LPMS instead of FFmpeg directly when…"). No benchmark numbers (segments/sec on common hardware, NVENC throughput, software-fallback overhead). No statement of OS compatibility (Linux-only? macOS dev-only?). No statement of memory/CPU profile.
- **Fix step:** Add a §"When to use LPMS" subsection above Building LPMS with 2 bullets: (a) Embed LPMS when you're building a Go media server and need RTMP + HLS without rolling your own pipeline. (b) Don't embed LPMS if you need the Livepeer protocol — use go-livepeer in gateway mode. Add a §"Performance and operational notes" before Related Pages with benchmark, OS compatibility, memory profile.
- **Source/exemplar:** `livepeer/lpms` README; `.claude/references/layout/exemplars.md`.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 8 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. **Deprecated term "broadcaster" used 4 times** (lines 39, 168, 177, 180) per check 2.16. Two of these (lines 177, 180) sit in Related Pages card descriptions — every reader sees them.
2. Frontmatter: missing 4 required fields (`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`); retains legacy `status: current` (5.7).
3. `<Note>` at line 167 carries decision-critical scoping content forbidden by 2.D7 + 5.31 — "LPMS is the media layer only; use go-livepeer for the protocol" is the most important sentence on the page and is buried in a Note.
4. All 7 code blocks missing `icon` + `title` (5.20). Related Pages uses `<CardGroup>` + plain `<Card>` (5.17, 5.22). Default Endpoints raw markdown table (5.23). Zero cross-tab graduation links (4.10, 7.6).
5. `git clone https://github.com/livepeer/lpms.git` (line 50) pulls HEAD — moving target. No LPMS / Go / FFmpeg / CUDA version pins anywhere. `core/lpms.go` (line 143) and `cmd/transcoding/transcoding.go` (line 165) referenced without GitHub links — Layer 4 veracity gaps.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Find-replace "broadcaster" → "Gateway"/"gateway mode" at lines 39, 168, 177, 180 | 39, 168, 177, 180 | HIGH | S | check 2.16; glossary `Gateway` |
| 2 | Add `purpose: reference`, `complexity: advanced`, `lifecycleStage: build`, `veracityStatus: unverified` to frontmatter; remove `status: current`; add `pageVariant: specification` | 23-26 | HIGH | S | check 1.4+1.6+1.7+1.8+5.7 |
| 3 | Promote `<Note>` (lines 167-169) to inline `<Warning>` or to body prose immediately after the opening `<Tip>` — the LPMS-vs-go-livepeer scoping is the page's primary content and must not be buried | 167-169 | HIGH | M | check 2.D7+5.31 |
| 4 | Replace `<CardGroup cols={2}>` (line 175) with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />` | 173-182 | HIGH | M | check 5.17+5.22 |
| 5 | Convert Default Endpoints markdown table (lines 65-69) to `<StyledTable variant="bordered">` | 65-69 | HIGH | M | check 5.23+5.5 |
| 6 | Add `icon` + `title` to every code block: bash blocks `icon="terminal"` + `title="install-lpms.sh"`/`title="run-server.sh"`; go blocks `icon="code"` + `title="main.go"`/`title="transcode.go"` | 49, 73, 80, 90, 100, 151, 159 | HIGH | M | check 5.20 |
| 7 | Pin git clone at line 50 to a tag or commit: `git clone --branch v0.x.y https://github.com/livepeer/lpms.git`; add a "Verified against" line with Go, FFmpeg, CUDA versions | 49-55 | HIGH | M | check 2.D3+6.8 |
| 8 | Add Mermaid component diagram of LPMS architecture (RTMP ingest → segmenter → transcoder branches CPU/NVENC → HLS) before Embedding LPMS H2 | before 96 | HIGH | M | check 5.27 |
| 9 | Add Prerequisites H2 after intro (line 41): Go toolchain version, libavcodec/FFmpeg requirement, optional NVIDIA Pascal+ GPU + CUDA version | after 41 | HIGH | S | check 4.5+5.2 |
| 10 | Add ≥3 cross-tab Related Pages cards: `/v2/gateways/setup/configure`, `/v2/about/network/architecture`, `/v2/orchestrators/setup/connect` | 173-182 | HIGH | S | check 4.10+7.6 |
| 11 | Inline link `livepeer/lpms` at first prose mention (line 39): `[livepeer/lpms](https://github.com/livepeer/lpms)` | 39 | MEDIUM | S | check 6.10 |
| 12 | Inline link `core/lpms.go` (line 143) and `cmd/transcoding/transcoding.go` (line 165) to GitHub paths | 143, 165 | MEDIUM | S | check 6.10 |
| 13 | Define `getStreamIDFromPath` inline (or footnote) in the embed example — currently used without definition at lines 121, 134 | 100-141 | MEDIUM | S | check 10.5 |
| 14 | Add §"When to use LPMS" before Building LPMS with 2 bullets (use when / don't use when) | before 45 | MEDIUM | S | Layer 5 |
| 15 | Add §"Performance and operational notes" before Related Pages: benchmarks, OS compatibility, memory profile, API stability | before 173 | MEDIUM | M | Layer 5 |
| 16 | Label every code block `TESTED YYYY-MM-DD against livepeer/lpms@<tag>` once pinned | all code | INFO | M | check 6.2 |
| 17 | Define on first use: NVENC, NVDEC, CUDA | 30, 57, 149 | INFO | S | check 2.21 |
