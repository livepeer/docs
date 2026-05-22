# Review: overview.mdx (comfystream)

**Page**: `v2/developers/build/ai-and-agents/realtime-ai/comfystream/overview.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `concept`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `explain`
**Bytes**: 10,360
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1.1 | 10 fields | PASS | All present |
| 1.2 | pageType canonical | PASS | `concept` |
| 1.4 | purpose canonical | PASS | `explain` |
| 1.5-1.8 | audience/complexity/lifecycle/veracity | PASS | developer / intermediate / discover / verified |
| 1.11 | description well-formed | PASS | "ComfyStream turns any ComfyUI workflow into a real-time video pipeline. Phase 4 hardened it for production: multimodal output, dynamic warm-up, BYOC packaging." 155 chars, subject-led |
| 1.12 | OG block | PASS | |
| 1.13 | keywords specific | PASS | `comfystream`, `phase 4`, `streamdiffusion`, `pytrickle` |
| 1.14 | audience match | PASS | |
| 2.1-2.22 | Voice (universal) | PASS | |
| 2.4 | Conditional gatekeeping | MIXED | Line 178: "If you want to | Use" — this is a table header asking conditional. Acceptable as a table-of-choices but matches the conditional-gatekeeping grep pattern |
| 2.D1 | Code-first | N/A | concept |
| 2.D2 | API/method has code or link | PASS | |
| 2.D3 | Versions explicit | PASS | "Phase 4 (January 2026)" pinned; "CUDA 12.8 with NVIDIA driver 570.124.06 or later" pinned |
| 2.D4 | Errors in main | N/A | |
| 2.D5-D6 | | PASS | |
| 2.D7 | Note for primary | N/A | No `<Note>` used |
| 3.1 | Score ≥20/25 | PASS | "Pipeline Modes" (23), "Node Ecosystem" (22), "Workflow Format" (22), "Data-Channel Output" (23), "Performance Characteristics" (22), "Hardware Requirements" (23), "Relationship to BYOC" (23), "Next Steps" (avoid — line 189) |
| 3.2 | Banned/weak | FAIL | "Next Steps" (line 189) |
| 3.3-3.10 | | PASS | |
| 3.6 | Title well-formed | PASS | "ComfyStream Overview" — 2 words |
| 4.1-4.4 | | PASS | |
| 4.5 | Prerequisites | N/A | concept |
| 4.6-4.9 | | PASS | |
| 4.10 | ≥3 cross-tab | FAIL | Zero cross-tab links |
| 4.11-4.13 | | PASS | |
| 4.14 | Flat layout | PASS | |
| 4.15 | Trade-offs named | PASS | Hardware Requirements + Performance Characteristics + Relationship to BYOC all name trade-offs |
| 4.16-4.20 | | PASS / N/A | |
| 5.1 | Correct template | PASS | concept |
| 5.2 | Required sections | PASS | |
| 5.3-5.4 | | PASS | |
| 5.5 | Info-type → component | MIXED | 6 raw markdown tables; should be `<StyledTable>` (5.23) |
| 5.6 | Renders | PASS (presumed) | |
| 5.7 | Old-schema | FAIL | `status: current` (line 25) |
| 5.8-5.10 | | PASS | |
| 5.13 | Section ordering | PASS | |
| 5.14 | Multi-view | MIXED | Pipeline Modes + Node Ecosystem could be Tabs by category |
| 5.15 | Data imports | FAIL | Node names (`StreamDiffusionCheckpoint`, `LoadTensor`, etc.) hardcoded; should import from a shared `snippets/data/comfystream/nodes.json` |
| 5.16 | Related Pages OR Next Step | FAIL | Both: closing prose at line 187 ("The [ComfyStream quickstart]... is the fastest path...") AND `<CardGroup>` at line 191 |
| 5.17 | Related Pages format | FAIL | `<CardGroup>` not `<Columns>`; plain Cards |
| 5.18 | Tab icon | N/A | No Tabs |
| 5.19 | Accordion icon | N/A | No Accordions |
| 5.20 | Code block icon+title | N/A | No fenced code blocks on page |
| 5.21 | StyledSteps | N/A | concept |
| 5.22 | Nav cards CustomCardTitle | FAIL | All 4 Next Steps Cards plain |
| 5.23 | StyledTable | FAIL | 6 raw markdown tables: lines 52, 71 (Core I/O), 80 (Real-Time Control), 93 (StreamDiffusion), 145 (Performance), 163 (Hardware), 178 (Relationship to BYOC) — 7 actually |
| 5.24 | Max 1-2 tables | FAIL | 7 tables |
| 5.25 | Max 1 major element | MIXED | Acceptable given concept's scope |
| 5.26 | CustomDivider | PASS | Imported + used |
| 5.27 | Mermaid | MIXED | No diagram. ComfyStream → ComfyUI → Stream → Output flow would benefit from a Mermaid diagram |
| 5.28-5.34 | | PASS | |
| 6.1 | Claims citable | MIXED | "Daydream and Embody both run on ComfyStream infrastructure" (line 42) — no link to either deployment. "Phase 4 (January 2026) hardened" — no PR link |
| 6.2 | Code TESTED | N/A | No code |
| 6.3 | Deprecated API | PASS | |
| 6.4 | Numbers real | PASS | |
| 6.5 | REVIEW flags | N/A | |
| 6.6 | veracityStatus | PASS | `verified` |
| 6.7 | Glossary | PASS | |
| 6.8 | Source staleness | MIXED | docs.comfystream.org named as canonical install reference 3 times — fine; ComfyUI version not pinned |
| 6.9 | Open-ended | PASS | |
| 6.10 | Source authority | MIXED | Upstream `livepeer/comfystream` named twice (lines 44, 64) without link |
| 6.11-6.12 | | PASS / NOT-TESTED | |
| 7.1 | docs.json | PASS | line 2528 |
| 7.2-7.5 | | PASS | |
| 7.6 | ≥3 cross-tab | FAIL | |
| 7.7-7.12 | | PASS | |
| 8.1 | Internal | PASS | All resolve |
| 8.2 | External | NOT-TESTED | `docs.comfystream.org` not curl-tested |
| 8.3-8.6 | | PASS / N/A | |
| 9-10 | | NOT-TESTED / PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "ComfyStream Overview" | PASS | |
| sidebarTitle | Yes | "Overview" | PASS | |
| description | Yes | "ComfyStream turns any ComfyUI workflow..." | PASS | |
| pageType | Yes | concept | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | explain | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | discover | PASS | |
| keywords | Yes | array | PASS | |
| og:image (5) | Yes | — | PASS | |
| veracityStatus | Yes | verified | PASS | |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | Legacy |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (8×) | Required | OK |
| `<StyledTable>` | No | Required | 7 raw markdown tables |
| `<Tabs>` | No | Recommended | Pipeline Modes / Node Ecosystem could benefit |
| `<Columns cols={2}>` Related Pages | No | Required | Uses CardGroup |
| `<CustomCardTitle>` | No | Required | Cards plain |
| Fenced code | No | — | None on page (intentional concept page) |
| `<Tip>` (header CTA) | Yes (line 35) | — | OK |
| Mermaid | No | Recommended | |

## Cross-page duplication and link gaps

- **OVERLAP**: ComfyStream summary on `realtime-ai/overview.mdx` lines 62-75 repeats the same first-paragraph claims. Acceptable as router; the canonical detail lives here.
- **OVERLAP**: Hardware requirements (lines 163-166) duplicated in `comfystream-quickstart.mdx` lines 54-56. Both should pull from the same data snippet.
- **LINK GAPS**: First mention of `livepeer/comfystream` (line 44) and `livepeer/comfyui-base:stable` (line 44) lack repo/registry links. First mention of `livepeer/ComfyUI-Stream-Pack` implied via custom nodes — not linked. Daydream + Embody references (line 42) lack links.
- **STRANDED**: Reader who wants to add a custom node has no path — the page lists node names but not how to author one.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Conditional gatekeeping | 1 | line 178: "If you want to | Use" (table header — acceptable) |
| Banned heading | 1 | "Next Steps" (line 189) |

## Heading Score Table

| Heading | Total |
|---|---|
| Pipeline Modes | 23 |
| Node Ecosystem | 22 |
| Core I/O Nodes (H3) | 22 |
| Real-Time Control Nodes (H3) | 23 |
| StreamDiffusion Nodes (Phase 4) (H3) | 22 |
| Phase 4 Additions (H3) | 22 |
| Workflow Format | 22 |
| Data-Channel Output | 23 |
| Performance Characteristics | 22 |
| Hardware Requirements | 23 |
| Relationship to BYOC | 23 |
| Next Steps | 14 — banned/weak |

## Code Block Audit

No fenced code blocks on page. (Intentional — concept page; code lives in quickstart.)

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** Page is a feature catalogue ("4 pipeline modes", "11 nodes", "Phase 4 additions") but doesn't help the reader decide "should I use ComfyStream at all?" The "Relationship to BYOC" table (line 178) is the closest, but it sits 175 lines into the page.
- **Fix step:** Move a condensed version of "Relationship to BYOC" decision matrix to immediately after the header CTA at line 38. Three rows: "Use ComfyStream directly when... / Use ComfyStream-as-BYOC when... / Use PyTrickle when...". Add a `<Tip>` above the matrix: "ComfyStream fits if you have a ComfyUI workflow and need real-time video processing."
- **Source/exemplar:** `agents/overview.md` review Layer 1 — "decision matrix before mechanism".

### Layer 2 — Composition
- **Gap:** 7 raw markdown tables (5.23 FAIL, 5.24 FAIL); no Tabs; no Mermaid; Related Pages uses `<CardGroup>` not `<Columns>` (5.17, 5.22 FAIL). Node Ecosystem section is 3 H3s with 3 tables — would be better as `<AccordionGroup>` with `<Accordion title="Core I/O Nodes" icon="puzzle">` so the page scans faster.
- **Fix step:** Convert all 7 tables to `<StyledTable variant="bordered">`. Wrap the 3 Node Ecosystem subsection tables in `<AccordionGroup>` so the page collapses by default. Add a Mermaid diagram for the input-output mode mapping (Pipeline Modes table). Convert Related Pages to `<Columns cols={2}>` + `<CustomCardTitle>`.
- **Source/exemplar:** `ai-pipelines.mdx` lines 65-297 — exemplary AccordionGroup-per-pipeline pattern is the in-house style to mirror.

### Layer 3 — Cross-page integration
- **Gap:** First mention of `livepeer/comfystream` repo (line 44) unlinked. ComfyUI mentioned ~15 times — not linked. Daydream, Embody named without links. `docs.comfystream.org` named 3 times — no inline link the first time it appears (only in Related Pages cards). No graduation to Gateways or Solutions tabs.
- **Fix step:** Add inline links: line 44 `[livepeer/comfystream](https://github.com/livepeer/comfystream)`; line 40 `[ComfyUI](https://github.com/comfyanonymous/ComfyUI)`; line 42 Daydream + Embody links; line 44 `[docs.comfystream.org](https://docs.comfystream.org)`. Add ≥3 cross-tab Related Pages cards.
- **Source/exemplar:** All upstream repos + docs URLs.

### Layer 4 — Veracity and source authority
- **Gap:** "Phase 4 (January 2026) hardened" — no PR / release link. "14-15 fps at 640x360" performance number sourced as "community testing" — no community-testing artefact linked. CUDA 12.8 + driver 570.124.06 pinned — good but the source (release notes) not linked.
- **Fix step:** Add line 42 inline citation: "Phase 4 ([REVIEW: link to PR or release notes], January 2026) hardened...". Replace community-testing text with a link to a benchmarking gist or community thread, or label `NOT-TESTED`.
- **Source/exemplar:** `livepeer/comfystream` releases.

### Layer 5 — Product-forward depth
- **Gap:** No production-readiness signal in the header (Beta? GA?). Hardware/cost not framed as "is this affordable" — VRAM matrix is technical but no "approximate $/hour to run on cloud GPU" data. No "what could go wrong" beyond Hardware Requirements. No model licence guidance (some ComfyUI nodes ship with non-commercial-licence models).
- **Fix step:** Add `<Badge>Beta — production-tested with Daydream + Embody</Badge>` near line 36. Add §"Production checklist" or "Costs" with concrete cloud GPU $/hour reference (RunPod A40 ~$0.40/hr at time of writing). Add §"Licence considerations" with one sentence per StreamDiffusion / SDXL licence note.
- **Source/exemplar:** RunPod pricing page; HF model licence headers.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 5 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. 7 raw markdown tables instead of `<StyledTable>` (5.23, 5.24).
2. Related Pages: in-prose closing paragraph (line 187) AND `<CardGroup>` (line 191) both present (5.16); CardGroup not Columns (5.17); plain Cards not CustomCardTitle (5.22).
3. Banned heading "Next Steps" (line 189).
4. Zero cross-tab graduation links (4.10, 7.6).
5. First mentions of upstream repos (livepeer/comfystream, ComfyUI) and consumers (Daydream, Embody) lack links.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Convert 7 markdown tables to `<StyledTable variant="bordered">` | 52, 71, 80, 93, 145, 163, 178 | HIGH | L | check 5.23 |
| 2 | Convert `<CardGroup cols={2}>` (line 191) to `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />`; rename H2 "Next Steps" → "Related Pages" | 189-204 | HIGH | M | check 5.16+5.17+5.22+3.2 |
| 3 | Delete closing prose paragraph at line 187 ("The [ComfyStream quickstart] gets you to a working pipeline in under 30 minutes. Start there.") | 187 | HIGH | S | check 5.16 |
| 4 | Add ≥3 cross-tab graduation cards in Related Pages: `/v2/gateways/setup/connect`, `/v2/about/network/architecture`, `/v2/solutions/managed-gateway` | new cards | HIGH | S | check 4.10+7.6 |
| 5 | Move condensed decision matrix from line 178 to line 38 (before §Pipeline Modes); add `<Tip>` "ComfyStream fits if you have a ComfyUI workflow and need real-time video processing" | 38 / 178 | HIGH | M | layer 1 |
| 6 | Add inline upstream links: `[livepeer/comfystream](https://github.com/livepeer/comfystream)` (line 44), `[ComfyUI](https://github.com/comfyanonymous/ComfyUI)` (line 40), `[docs.comfystream.org](https://docs.comfystream.org)` (line 44), Daydream + Embody links (line 42) | 40, 42, 44 | MEDIUM | S | check 6.1+6.10 |
| 7 | Remove legacy `status: current` field | 25 | MEDIUM | S | check 5.7 |
| 8 | Wrap 3 Node Ecosystem subsections in `<AccordionGroup>` with `<Accordion icon="puzzle">` to make page scan faster | 67-107 | MEDIUM | M | layer 2; ai-pipelines.mdx pattern |
| 9 | Add Mermaid diagram for the 4 pipeline modes (input → process → output) | new at line 50 | MEDIUM | M | check 5.27 |
| 10 | Add Phase 4 PR/release citation; replace community-testing fps figure with a sourced benchmark or label NOT-TESTED | 42, 154-156 | MEDIUM | S | check 6.1+layer 4 |
| 11 | Add `<Badge>Beta</Badge>` near line 36; add §"Costs" with cloud GPU $/hour reference | header / new H2 | INFO | M | layer 5 |
| 12 | Extract node lists to `snippets/data/comfystream/nodes.json` and render | 71-107 | INFO | L | check 5.15 |
