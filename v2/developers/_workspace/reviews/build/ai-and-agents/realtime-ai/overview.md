# Review: overview.mdx (realtime-ai)

**Page**: `v2/developers/build/ai-and-agents/realtime-ai/overview.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `overview` (NON-CANONICAL — should be `concept`)
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: missing
**Bytes**: 7,535
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | FAIL | Missing `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | FAIL | `pageType: overview` (line 22) — canonical is `concept|tutorial|guide|instruction|navigation|reference|resource` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | `overview` would fit if `pageType: concept` was set |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | Missing — should be `explain` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | FAIL | Missing |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | FAIL | Missing |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.9-1.10 | industry/niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | MIXED | "How the Cascade architecture transforms live video streams..." opens with "How" — borderline, not strict subject-first |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords specific | PASS | `Cascade`, `live-video-to-video`, `trickle protocol`, `WebRTC` — specific |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2.2-2.22 | | | PASS | |
| 2.D1 | Code-first | N/A | concept |
| 2.D2 | API has code | MIXED | Names `POST /live/video-to-video` (line 53) and `POST /live/video-to-video/update` (line 58) without code or link to a reference |
| 2.D3 | Versions explicit | MIXED | "github.com/j0sh/http-trickle" linked at line 48; no go-livepeer or ai-runner version pin |
| 2.D4-D7 | | | PASS / FAIL | `<Note>` at line 99-101 carries primary content (Beta status + capabilities check) — should be `<Warning>` (FAIL 2.D7) |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Cascade Architecture" (24), "ComfyStream" (23), "PyTrickle" (23), "Getting a Real-Time Pipeline Running" (21), "Related Pages" (exempt) |
| 3.2 | Banned/weak | PASS | No banned heading |
| 3.3-3.10 | | | PASS | |
| 3.6 | Title well-formed | PASS | "Real-Time AI" — 2 words |
| 4.1-4.4 | | | PASS | |
| 4.5 | Prerequisites | N/A | concept |
| 4.6 | Out-of-scope | PASS | |
| 4.7 | Info type | PASS | |
| 4.8 | No duplication | MIXED | ComfyStream summary (lines 62-75) duplicates `comfystream/overview.mdx` first 3 sections; defensible as one-page-out router but the same facts (Phase 4, livepeer/comfystream repo, install command) are restated |
| 4.9 | Orientation | PASS | |
| 4.10 | ≥3 cross-tab | FAIL | Zero cross-tab links |
| 4.11 | Discord test | PASS | |
| 4.12 | Page size | PASS | 7.5 KB substantive |
| 4.13 | Zero TODO | PASS | |
| 4.14 | Flat layout | PASS | |
| 4.15 | Trade-offs named | MIXED | Beta status in Note; community vs paid gateway noted; but no production-vs-development trade-off, no ComfyStream-vs-PyTrickle decision |
| 4.16-4.20 | | | PASS / N/A | |
| 5.1 | Correct template | FAIL | concept page (correct intent) but `pageType: overview` non-canonical |
| 5.2 | Required sections | PASS | Header CTA, intro, H2s, Related Pages |
| 5.3-5.4 | | | PASS | |
| 5.5 | Info-type → component | MIXED | Cascade architecture flow (lines 50-58) is a numbered list; could be `<StyledSteps>` or a Mermaid sequence diagram |
| 5.6 | Renders | PASS (presumed) | |
| 5.7 | Old-schema | FAIL | `pageType: overview` legacy; `status: current` (line 24) legacy |
| 5.8-5.10 | | | PASS | |
| 5.13 | Section ordering | PASS | |
| 5.14 | Multi-view | MIXED | ComfyStream + PyTrickle paths could be `<Tabs>` |
| 5.15 | Data imports | MIXED | Install command hardcoded (line 73) |
| 5.16 | Related Pages OR Next Step | FAIL | Both: closing prose at line 105 ("The [ComfyStream quickstart]... is the fastest path...") AND `<CardGroup>` at line 109 |
| 5.17 | Related Pages format | MIXED | Uses `<CardGroup cols={2}>` not `<Columns cols={2}>`; Cards use `<Card title=... icon=... href=... arrow horizontal>` not `<CustomCardTitle>` wrapper |
| 5.18 | Tab icon | N/A | No Tabs |
| 5.19 | Accordion icon | N/A | |
| 5.20 | Code block icon+title | N/A | No fenced code blocks on page |
| 5.21 | StyledSteps | MIXED | "1. A source sends..." numbered list at line 52-56 — should be `<StyledSteps>` for sequence clarity OR a Mermaid sequence diagram |
| 5.22 | Nav cards CustomCardTitle | FAIL | Cards plain |
| 5.23 | StyledTable | N/A | No tables |
| 5.24-5.25 | | | PASS | |
| 5.26 | CustomDivider | MIXED | No JSX `<CustomDivider />` import; uses markdown `---` (line 36, 42, 60, 77, 87, 103) |
| 5.27 | Mermaid | FAIL | Cascade architecture (lines 50-58) is described in prose + numbered list; would benefit from a Mermaid sequence diagram with the 5 components (source → gateway → orchestrator → ai-runner → trickle) |
| 5.28 | Import order | PASS | |
| 5.29-5.34 | | | N/A / PASS | |
| 6.1 | Claims citable | MIXED | "Daydream uses Cascade" — no link to Daydream. "VTuber avatar pipelines and StreamDiffusionTD" named without links |
| 6.2 | Code TESTED | N/A | No code |
| 6.3 | Deprecated API | PASS | |
| 6.4 | Numbers real | PASS | |
| 6.5 | REVIEW flags | N/A | |
| 6.6 | veracityStatus | FAIL | Missing |
| 6.7 | Glossary | PASS | |
| 6.8 | Source staleness | MIXED | "current Cascade" + "Phase 4" implied via cross-link but not pinned here |
| 6.9 | Open-ended | PASS | |
| 6.10 | Source authority | MIXED | `github.com/j0sh/http-trickle` linked (T1); no link to `livepeer/pytrickle` or `livepeer/comfystream` |
| 6.11-6.12 | | | PASS / NOT-TESTED | |
| 7.1 | docs.json | PASS | line 2524 |
| 7.2-7.5 | | | PASS | |
| 7.6 | ≥3 cross-tab | FAIL | |
| 7.7-7.12 | | | PASS | |
| 8.1 | Internal | PASS | comfystream-quickstart, comfystream-as-byoc, pytrickle/overview, ai-pipelines, workflow-authoring all resolve |
| 8.2 | External | NOT-TESTED | `tools.livepeer.cloud/ai/network-capabilities` not curl-tested |
| 8.3-8.6 | | | PASS / N/A | |
| 9. Process | | | NOT-TESTED | |
| 10.1-10.7 | | | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "Real-Time AI" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "How the Cascade architecture..." | MIXED | Opens "How" — borderline |
| pageType | Yes | overview | FAIL | Non-canonical — set `concept` |
| audience | Yes | developer | PASS | |
| purpose | No | — | FAIL | |
| complexity | No | — | FAIL | |
| lifecycleStage | No | — | FAIL | |
| keywords | Yes | array | PASS | |
| og:image (5 fields) | Yes | — | PASS | |
| veracityStatus | No | — | FAIL | |
| lastVerified | Yes | 2026-05-13 | PASS | |
| status | Yes | current | FAIL | Legacy |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Not imported (markdown `---` used instead) | Required | Should import + use JSX component |
| `<Tabs>` | No | Recommended | ComfyStream vs PyTrickle would fit |
| `<StyledSteps>` | No | — | Cascade flow numbered list at line 50 could become StyledSteps |
| `<Columns cols={2}>` Related Pages | No | Required | Uses `<CardGroup>` |
| `<CustomCardTitle>` | No | Required for nav cards | |
| Fenced code | No | — | None on page |
| `<Note>` | Yes (line 99) | Avoid for primary | FAIL 2.D7 — Beta status + capability check is primary |
| `<Tip>` | Yes (line 32 header CTA) | — | OK |
| `<StyledTable>` | No | — | |
| Mermaid | No | Recommended | Cascade architecture would benefit from a sequence diagram |

## Cross-page duplication and link gaps

- **OVERLAP**: ComfyStream section (lines 62-75) summarises `comfystream/overview.mdx`'s first three sections. Acceptable as a router teaser but the install command duplicate (line 73) should not be here.
- **OVERLAP**: PyTrickle section (lines 79-85) summarises `pytrickle/overview.mdx`. Same concern.
- **LINK GAPS**: No link to upstream `livepeer/comfystream` repo at first ComfyStream mention. No link to `livepeer/pytrickle`. No link to Daydream. No link to a Phase 4 PR / release.
- **STRANDED**: Reader who wants to deploy ComfyStream isn't told about ComfyStream-as-BYOC until the Related Pages — should be linked inline from the ComfyStream H2.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| `<Note>` for primary | 1 | line 99-101: Beta + capability check |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Cascade Architecture | 5 | 5 | 4 | 5 | 5 | 24 |
| ComfyStream | 5 | 4 | 5 | 5 | 4 | 23 |
| PyTrickle | 5 | 4 | 5 | 5 | 4 | 23 |
| Getting a Real-Time Pipeline Running | 4 | 4 | 4 | 5 | 4 | 21 |
| Related Pages | — | — | — | — | — | exempt |

## Code Block Audit

No fenced code blocks on this page. (Cascade architecture flow is in prose + numbered list; line 73 install command is inline backtick.)

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page promises Cascade architecture but doesn't show a developer how to decide which tool fits. ComfyStream and PyTrickle are described side-by-side as two SDKs; no clear "use this when..." decision matrix. Reader leaves not knowing which path to start with unless they read the closing sentence.
- **Fix step:** Add a `<StyledTable>` decision matrix after the Cascade Architecture section: "If you have ComfyUI workflow → ComfyStream. If you have a Python model that isn't ComfyUI → PyTrickle. If you want a managed real-time API → Daydream/Solutions." Place at line 60.
- **Source/exemplar:** `comfystream/overview.mdx` lines 178-184 — "Relationship to BYOC" decision table is the in-house pattern.

### Layer 2 — Composition
- **Gap:** No Mermaid diagram for Cascade (5.27 FAIL); Cascade flow is a numbered prose list. No `<Tabs>` for ComfyStream vs PyTrickle. No `<CustomDivider />` (markdown `---` used instead). Related Pages uses `<CardGroup>` not `<Columns>`. `<Note>` carries primary content (2.D7).
- **Fix step:** Replace prose flow (lines 50-58) with a Mermaid sequence diagram using `MermaidColours.jsx` showing Source → Gateway → Orchestrator → ai-runner → Trickle. Convert ComfyStream + PyTrickle sections into `<Tabs>` with `<Tab title="ComfyStream" icon="diagram-project">` and `<Tab title="PyTrickle" icon="python">`. Import `<CustomDivider />` and use it in place of all `---`. Replace `<Note>` (line 99) with `<Warning>`.
- **Source/exemplar:** `snippets/components/config/MermaidColours.jsx`; in-repo Mermaid examples.

### Layer 3 — Cross-page integration
- **Gap:** No upstream repo links. No Daydream link. No graduation to Gateways (self-host) or Solutions (managed).
- **Fix step:** Add line 64 inline: "[livepeer/comfystream](https://github.com/livepeer/comfystream)". Add line 80 inline: "[livepeer/pytrickle](https://github.com/livepeer/pytrickle)". Add line 41 inline: "Daydream uses Cascade for its [generative video platform](https://daydream.live)". Add ≥3 cross-tab Related Pages cards.
- **Source/exemplar:** GitHub repos; Daydream homepage.

### Layer 4 — Veracity and source authority
- **Gap:** `veracityStatus` missing. Cascade architecture not linked to a spec. trickle protocol cited (line 48 `github.com/j0sh/http-trickle`) — good. But "VTuber avatar pipelines" and "StreamDiffusionTD" named without source.
- **Fix step:** Add `veracityStatus: verified` + `lastVerified`. Link Daydream + named pipelines. Add a Cascade spec link if one exists in `go-livepeer/docs/` or PR.
- **Source/exemplar:** `livepeer/go-livepeer` Cascade design doc (if exists).

### Layer 5 — Product-forward depth
- **Gap:** No production-readiness signal. No latency targets (Cascade aims for sub-second — the comfystream overview says sub-second; this page doesn't). No cost signal. No "what could go wrong" — WebRTC negotiation failures, GPU starvation, pipeline cold-start are real concerns.
- **Fix step:** Add §"Latency targets" with concrete numbers (sub-second end-to-end is the design goal; per-frame compile + inference timings live in comfystream/overview lines 142-148 — restate here). Add `<Badge>Beta</Badge>` near the page title. Add §"What can go wrong" with 3 callouts: WebRTC ICE blocked, GPU OOM under concurrency, cold-start on first request.
- **Source/exemplar:** `comfystream/overview.mdx` Performance Characteristics; `.claude/references/layout/exemplars.md` for maturity-signal patterns.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 4 / INFO 2
**Critical findings (1–5)**:
1. `pageType: overview` non-canonical (1.2, 5.7); 4 required frontmatter fields missing (1.1, 1.4, 1.6, 1.7, 1.8).
2. Related Pages: both in-prose closing paragraph (line 105) and `<CardGroup>` (line 109) present (5.16). Plain `<Card>` not `<CustomCardTitle>` (5.17, 5.22).
3. Cascade architecture flow is prose+numbered list; no Mermaid diagram (5.27) — this is the natural place for one.
4. `<Note>` at line 99 carries primary Beta + capability-check content (2.D7).
5. Zero cross-tab graduation links (4.10, 7.6).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Change `pageType: overview` → `pageType: concept`, add `pageVariant: overview` | 22 | HIGH | S | check 1.2 |
| 2 | Add missing frontmatter: `purpose: explain`, `complexity: intermediate`, `lifecycleStage: discover`, `veracityStatus: verified` | 23-26 | HIGH | S | check 1.1+1.8 |
| 3 | Replace prose+numbered Cascade flow (lines 50-58) with a Mermaid sequence diagram using `MermaidColours.jsx`; wrap in `<ScrollableDiagram>` if overflow | 50-58 | HIGH | M | check 5.27 |
| 4 | Replace `<Note>` (line 99-101) with `<Warning>` for the Beta status + capability check | 99-101 | HIGH | S | check 2.D7 |
| 5 | Convert `<CardGroup cols={2}>` at line 109 to `<Columns cols={2}>` with `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />`; drop the `arrow` + `horizontal` props from `<Card>` | 109-146 | HIGH | M | check 5.17+5.22 |
| 6 | Delete in-prose closing paragraph at line 105 — check 5.16 forbids both | 105 | HIGH | S | check 5.16 |
| 7 | Add ≥3 cross-tab graduation cards in Related Pages | 109-146 | HIGH | S | check 4.10+7.6 |
| 8 | Remove legacy `status: current` field | 24 | MEDIUM | S | check 5.7 |
| 9 | Convert markdown `---` (6 places) to `<CustomDivider />`; add `import { CustomDivider } from '/snippets/components/elements/spacing/Divider.jsx'` | imports + 6 rules | MEDIUM | S | check 5.26 |
| 10 | Add inline upstream links: line 64 `[livepeer/comfystream](https://github.com/livepeer/comfystream)`; line 80 `[livepeer/pytrickle](https://github.com/livepeer/pytrickle)`; line 41 Daydream link | 41, 64, 80 | MEDIUM | S | check 6.1+6.10 |
| 11 | Add §"Decide which tool" `<StyledTable>` after Cascade Architecture | line 60 | MEDIUM | M | layer 1 |
| 12 | Add §"Latency targets" + §"What can go wrong" before Related Pages | new H2s | INFO | M | layer 5 |
| 13 | Reword description from "How the Cascade..." to subject-first ("The Cascade architecture transforms...") | 4-5 | INFO | S | check 1.11+2.5 |
