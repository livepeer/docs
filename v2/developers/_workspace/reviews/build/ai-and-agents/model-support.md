# Review: model-support.mdx

**Page**: `v2/developers/build/ai-and-agents/model-support.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `reference`
**Bytes**: 9,939
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | PASS | All present |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference` |
| 1. Frontmatter | 1.3 | pageVariant | N/A | |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `reference` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `evaluate` |
| 1. Frontmatter | 1.8 | veracityStatus | PASS | `verified` |
| 1. Frontmatter | 1.9-1.10 | industry/niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Reference for every AI pipeline on the Livepeer network..." subject-led, 142 chars |
| 1. Frontmatter | 1.12 | OG block | PASS | |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | `livepeer`, `reference` too generic |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | MIXED | Line 42: "This page lists the architectures each pipeline accepts..." — matches "this page [verb]" banned construction 2.4 |
| 2. Voice | 2.4 | Banned constructions | FAIL | Line 42: `This page lists` — self-reference + banned construction |
| 2. Voice | 2.5 | Opening order | PASS | Line 40 "The Livepeer network supports three pipeline categories..." subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Prohibited phrases | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology | PASS | |
| 2. Voice | 2.12 | Em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led voice | MIXED | Line 42 starts "This page lists..." |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary | PASS | |
| 2. Voice | 2.20 | Per-tab | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | "BYOC" defined (line 102 "BYOC is a container onboarding mechanism") |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first | N/A | reference |
| 2. Voice | 2.D2 | API methods | PASS | |
| 2. Voice | 2.D3 | Versions explicit | MIXED | Model versions explicit (`whisper-large-v3`, `parler-tts-large-v1`) but `ai-runner` not pinned; "current ComfyStream releases" (cross-ref to overview line 170) is the pinning surface |
| 2. Voice | 2.D4 | Errors in main | N/A | |
| 2. Voice | 2.D5 | Self-evident prose | PASS | |
| 2. Voice | 2.D6 | Marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | N/A | No Note used |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Batch AI Pipelines" (22), "Per-Pipeline Notes" (22), "Real-Time AI Pipelines" (22), "Bring Your Own Container" (22), "Warm-up and Cold Start" (22), "Requesting a Specific Model" (22), "Next Steps" (avoid) |
| 3. Headings | 3.2 | Banned/weak | FAIL | "Next Steps" (line 151) |
| 3. Headings | 3.3-3.10 | | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "AI Model Support" — 3 words |
| 4. Structure | 4.1 | One purpose | PASS | |
| 4. Structure | 4.2 | Purpose test | PASS | |
| 4. Structure | 4.3 | PREV/NEXT | PASS | |
| 4. Structure | 4.4 | No dead ends | PASS | |
| 4. Structure | 4.5 | Prerequisites | N/A | reference |
| 4. Structure | 4.6 | Out-of-scope | PASS | |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | MIXED | Batch pipelines table (lines 50-60) overlaps with `ai-pipelines.mdx` warm-model column; cross-referenced |
| 4. Structure | 4.9 | Orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab | FAIL | Zero cross-tab links |
| 4. Structure | 4.11 | Discord test | PASS | |
| 4. Structure | 4.12 | Page size | PASS | 9.9 KB |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | VRAM-headroom note (line 92) and warm-vs-cold trade-off (line 112) named; gateway selection trade-offs missing |
| 4. Structure | 4.16 | Content-pass | PASS | |
| 4. Structure | 4.17 | Code language tag | PASS | bash on the curl block |
| 4. Structure | 4.18-4.20 | | PASS / N/A | |
| 5. Layout | 5.1 | Correct template | MIXED | reference but no `<ParamField>` or `<ResponseField>` |
| 5. Layout | 5.2 | Required sections | MIXED | Reference data PASS; Related Pages missing (uses Next Steps) |
| 5. Layout | 5.3-5.4 | | PASS | |
| 5. Layout | 5.5 | Info-type → component | FAIL | 4 raw markdown reference tables; should be `<StyledTable>` minimum |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 25) |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | |
| 5. Layout | 5.14 | Multi-view | N/A | |
| 5. Layout | 5.15 | Data imports | FAIL | All 9 pipeline rows + warm models hardcoded; should import from a shared `snippets/data/ai-runner/warm-models.json` — and ideally THIS page is the canonical render of that data |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Both present: closing prose at line 149 ("Use the [AI pipelines]... page for the request schemas...") AND a CardGroup "Next Steps" at line 153 |
| 5. Layout | 5.17 | Related Pages format | FAIL | `<CardGroup cols={2}>` not `<Columns cols={2}>`; plain `<Card title="..." icon="..." href="...">` not `<CustomCardTitle>` |
| 5. Layout | 5.18 | Tab icon | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon | N/A | No Accordions |
| 5. Layout | 5.20 | Code block icon+title | FAIL | Line 132 bash curl block missing both `icon` and `title` |
| 5. Layout | 5.21 | StyledSteps | N/A | |
| 5. Layout | 5.22 | Nav cards CustomCardTitle | FAIL | 4 Next Steps cards plain `<Card>` |
| 5. Layout | 5.23 | StyledTable | FAIL | 4 raw markdown tables (lines 50-60, 88-90, 104-106, none-table fences) |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 3 tables (Batch, Real-Time, BYOC) |
| 5. Layout | 5.25 | Max 1 major element | PASS | |
| 5. Layout | 5.26 | CustomDivider | PASS | |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29 | Media | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical | PASS | |
| 5. Layout | 5.32 | Reference tables end | MIXED | Tables sit mid-page interspersed with prose; reference matrix prefers tables at END |
| 5. Layout | 5.33-5.34 | | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | "12 GB minimum, 16 GB+ recommended" with source link to ComfyStream overview (line 92) — good; per-pipeline VRAM figures uncited |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | PASS | |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | MIXED | `verified` — but per-pipeline VRAM figures need a source pin |
| 6.7-6.12 | | | PASS / NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | line 2519 |
| 7.2-7.5 | | | PASS | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | |
| 7.7-7.12 | | | PASS | |
| 8. Links | 8.1 | Internal | PASS | All resolve |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8.3-8.6 | | | PASS / N/A | |
| 9. Process | | | NOT-TESTED | |
| 10. Completeness | | | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "AI Model Support" | PASS | |
| sidebarTitle | Yes | "Model Support" | PASS | |
| description | Yes | "Reference for every AI pipeline..." | PASS | |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | reference | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | evaluate | PASS | |
| keywords | Yes | array | MIXED | |
| og:image (5 fields) | Yes | — | PASS | |
| veracityStatus | Yes | verified | MIXED | |
| lastVerified | Yes | 2026-05-12 | PASS | |
| status | Yes | current | FAIL | Legacy |

## Component Audit

| Component | Used? | Required? | Notes |
|---|---|---|---|
| `<CustomDivider />` | Yes (6×) | Required | OK |
| `<StyledTable>` / `<ParamField>` | No | Required for reference | 3 raw markdown tables |
| `<Tabs>` | No | Recommended | Could group Batch vs Real-Time vs BYOC |
| `<Columns cols={2}>` Related Pages | No | Required | Uses `<CardGroup>` |
| `<CustomCardTitle>` | No | Required for nav cards | Missing |
| Fenced code with icon+title | No | Required (1 block) | FAIL — single bash block at line 132 missing both |
| `<Tip>` | Yes (line 35 header CTA) | — | OK |

## Cross-page duplication and link gaps

- **OVERLAP**: Batch pipelines table (lines 50-60) duplicates the warm-model + endpoint columns in `ai-pipelines.mdx`. Different concerns; cross-linked. Acceptable.
- **OVERLAP**: Real-Time AI VRAM figure (line 90 "12 GB minimum, 16 GB+ recommended") duplicates `comfystream/overview.mdx` line 165. Sourced + cross-linked. Acceptable.
- **OVERLAP**: BYOC section (lines 100-108) restates `compute/byoc/overview.mdx` content one level above; one-paragraph teaser is OK.
- **LINK GAPS**: No link to `aiModels.json` (the source of truth for warm model + VRAM). No link to ai-runner releases. No link to individual model cards on Hugging Face. ComfyStream overview link (line 92) does double duty as VRAM citation, but the per-pipeline VRAM claim should link directly to a source (`aiModels.json` per-pipeline `min_vram` field if present).
- **STRANDED**: Reader who learns VRAM requirements has no obvious "next: pick a GPU" path. Could link to a hardware-recommendations page.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned constructions | 1 | line 42: "This page lists the architectures..." — `This page [verb]` |
| Self-reference | 1 | line 42 — see above |
| Banned headings | 1 | line 151: "Next Steps" |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Batch AI Pipelines | 5 | 4 | 4 | 5 | 4 | 22 |
| Per-Pipeline Notes | 4 | 4 | 4 | 5 | 5 | 22 |
| Real-Time AI Pipelines | 5 | 4 | 4 | 5 | 4 | 22 |
| Bring Your Own Container | 5 | 4 | 5 | 5 | 3 | 22 |
| Warm-up and Cold Start | 4 | 4 | 5 | 5 | 4 | 22 |
| Requesting a Specific Model | 5 | 4 | 4 | 5 | 4 | 22 |
| Next Steps | 1 | 1 | 3 | 4 | 5 | 14 — banned/weak |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 132 | bash | ✗ | ✗ | NOT-TESTED | FAIL 5.20 |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The page is structured around three categories (Batch / Real-Time / BYOC) but the developer arriving here usually has a model in hand and wants to ask "is mine supported, and what does it cost?" The page doesn't index by model architecture or use case. SD 1.5 user has to read 3 sections to find their answer.
- **Fix step:** Add a §"Lookup by model" table at top: model architecture column (SD 1.5, SDXL, Flux, Whisper, Parler, etc.) → pipeline → endpoint → VRAM → status. One table, sortable mentally. Place at line 47.
- **Source/exemplar:** Cloudflare AI catalogue: indexed by model, not by category.

### Layer 2 — Composition
- **Gap:** 3 raw markdown tables, no `<StyledTable>` despite being a pure reference page (5.23). The Real-Time AI table has one row only — should be folded into the master catalogue. The BYOC "table" (lines 104-106) has one row and is mostly prose — should be a one-line statement, not a table.
- **Fix step:** Convert Batch table to `<StyledTable variant="bordered">`. Drop the 1-row Real-Time and BYOC tables; merge into Master catalogue with a "category" column. Convert "Requesting a Specific Model" curl block (line 132) into a `<CodeBlock>` with `icon="terminal"` + `title="curl-model-id.sh"`.
- **Source/exemplar:** `ai-sdks-overview.mdx` lines 191-246 — in-repo `<StyledTable>` usage to mirror.

### Layer 3 — Cross-page integration
- **Gap:** No link to `aiModels.json`. No link to ai-runner releases page. No link to upstream model cards (Hugging Face for SDXL, Whisper, Parler, SAM 2). No link to a "request a new model" flow (issue template, feature request). No graduation card to Gateways setup or Solutions managed.
- **Fix step:** Add line 42 inline: "Source of truth: `[aiModels.json](https://github.com/livepeer/ai-runner/blob/main/aiModels.json)`". Add per-pipeline links to HF model card at first warm-model column. Add new H2 §"Request a new model" with a link to `https://github.com/livepeer/ai-runner/issues/new` (or appropriate template). Add ≥3 Related Pages cross-tab cards.
- **Source/exemplar:** `livepeer/ai-runner` issues; Hugging Face model card URLs.

### Layer 4 — Veracity and source authority
- **Gap:** Per-pipeline VRAM column (24 GB, 20 GB, 12 GB, 4 GB, etc.) — no source. These values vary by precision (FP16 vs FP32) and runner config; without a source, readers can't verify or update. ComfyStream VRAM is cited via cross-link (line 92), good — but the Batch VRAM column lacks the same.
- **Fix step:** Each VRAM cell should cite either `aiModels.json` `min_vram` field (if present in upstream) or an ai-runner README section. If figures come from `ai-runner` orchestrator config, link the relevant Helm chart / docker-compose default. Mark `veracityStatus: unverified` until verified, or pin the source.
- **Source/exemplar:** `livepeer/ai-runner/aiModels.json`; ai-runner docker-compose configs.

### Layer 5 — Product-forward depth
- **Gap:** No "which pipelines are production-ready vs beta", no $/pipeline cost signal, no "what about $MY_MODEL" decision tree. The "BYOC" section is one-paragraph and just routes the reader elsewhere — fine, but it should make BYOC's value visible ("if your model isn't here, BYOC takes it"). No mention of model licence compatibility (some SD models are non-commercial).
- **Fix step:** Add a "Status" column (Beta / Stable / Deprecated) to the master table. Add a `<Warning>` at line 219 (where commercial licence is hinted) calling out SD-Turbo + SDXL-Turbo as research-licence-only and unsuitable for production. Reframe BYOC section to lead with "Your model not listed?" header. Add a §"Pipeline maturity" with a per-pipeline-status note.
- **Source/exemplar:** Replicate.com model status badges; `comfystream/overview.mdx` Phase-4 + Beta phrasing pattern.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 5 / INFO 2
**Critical findings (1–5)**:
1. 3 raw markdown tables instead of `<StyledTable>` (5.23) for a reference page; also exceeds 1-2 tables (5.24).
2. Related Pages: both closing in-prose paragraph (line 149) and `<CardGroup>` (line 153) present (5.16). `<CardGroup>` not `<Columns>` (5.17); plain Cards not `<CustomCardTitle>` (5.22).
3. Banned construction "This page lists..." at line 42 (2.4) — self-reference; banned heading "Next Steps" at line 151 (3.2).
4. Single code block at line 132 missing both `icon` and `title` (5.20).
5. Zero cross-tab graduation links (4.10+7.6); per-pipeline VRAM figures uncited (6.1).

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Convert Batch AI Pipelines table (lines 50-60) to `<StyledTable variant="bordered">` with `<TableRow>` and `<TableCell>` per row | 50-60 | HIGH | M | check 5.23; ai-sdks-overview line 191 |
| 2 | Replace `<CardGroup cols={2}>` at line 153 with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon="..." title="..." horizontal />`; rename H2 "Next Steps" to "Related Pages" | 151-166 | HIGH | M | check 5.16+5.17+5.22 |
| 3 | Delete closing prose paragraph at line 149 ("Use the [AI pipelines]... page for the request schemas...") — 5.16 forbids both | 149 | HIGH | S | check 5.16 |
| 4 | Add `icon="terminal"` + `title="curl-model-id.sh"` to bash block at line 132 | 132 | HIGH | S | check 5.20 |
| 5 | Reword line 42: replace "This page lists the architectures each pipeline accepts..." with subject-led "The catalogue below lists every supported architecture..." or similar | 42 | HIGH | S | check 2.4+2.13 |
| 6 | Drop the 1-row Real-Time AI table (lines 88-94) and 1-row BYOC "Path" table (lines 104-106); inline as prose | 88-106 | MEDIUM | S | check 5.24 |
| 7 | Add ≥3 cross-tab graduation cards: `/v2/gateways/setup/connect`, `/v2/about/network/architecture`, `/v2/solutions/managed-gateway` | new cards | HIGH | S | check 4.10+7.6 |
| 8 | Add inline citation in §Batch AI Pipelines intro: "Source: `[ai-runner aiModels.json](https://github.com/livepeer/ai-runner/blob/main/aiModels.json)`" | 47 | MEDIUM | S | check 6.1+6.10 |
| 9 | Remove legacy `status: current` field | 25 | MEDIUM | S | check 5.7 |
| 10 | Add a "Status" column (Beta/Stable) to the master catalogue table | catalogue table | MEDIUM | M | layer 5 |
| 11 | Add §"Request a new model" with link to ai-runner issue tracker | EOF before Related Pages | MEDIUM | S | layer 3 |
| 12 | Add Hugging Face model-card links inline for each named warm model | catalogue rows | INFO | M | layer 3 |
| 13 | Extract pipeline catalogue to `snippets/data/ai-runner/pipeline-catalogue.json`; render via data | catalogue | INFO | L | check 5.15 |
| 14 | Tighten keywords: drop `livepeer`, `reference`; add `aiModels.json`, `whisper-large-v3`, `sdxl-lightning`, `vram-requirements` | 6-14 | INFO | S | check 1.13 |
