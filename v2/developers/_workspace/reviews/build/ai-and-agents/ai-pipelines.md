# Review: ai-pipelines.mdx

**Page**: `v2/developers/build/ai-and-agents/ai-pipelines.mdx`
**Review date**: 2026-05-17
**Reviewer**: agent A3
**pageType (from frontmatter)**: `reference`
**Audience (from frontmatter)**: `developer`
**Purpose (from frontmatter)**: `reference`
**Bytes**: 13,367
**Checks reference**: `v2/developers1/_workspace/canonical/checks.mdx`

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | 10 required fields | MIXED | Missing `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `reference` (line 16) |
| 1. Frontmatter | 1.3 | pageVariant | N/A | `specification` recommended |
| 1. Frontmatter | 1.4 | purpose canonical | PASS | `reference` |
| 1. Frontmatter | 1.5 | audience canonical | PASS | `developer` |
| 1. Frontmatter | 1.6 | complexity canonical | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage canonical | PASS | `build` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing (line 26 only `status: current` + line 27 `lastVerified`) |
| 1. Frontmatter | 1.9 | industry | N/A | |
| 1. Frontmatter | 1.10 | niche | N/A | |
| 1. Frontmatter | 1.11 | description well-formed | PASS | "Full reference for the batch AI pipelines on the Livepeer network..." subject-led, 153 chars |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords specific | MIXED | `livepeer`, `api` too generic |
| 1. Frontmatter | 1.14 | audience match | PASS | |
| 2. Voice | 2.1 | UK English | PASS | |
| 2. Voice | 2.2 | Banned words | PASS | |
| 2. Voice | 2.3 | Banned phrases | PASS | |
| 2. Voice | 2.4 | Banned constructions | PASS | |
| 2. Voice | 2.5 | Opening order | PASS | Line 41 opens "The Livepeer AI gateway exposes nine batch pipelines..." subject-led |
| 2. Voice | 2.6 | Paragraph discipline | PASS | |
| 2. Voice | 2.7 | Audience register | PASS | |
| 2. Voice | 2.8 | Prohibited phrases | PASS | |
| 2. Voice | 2.9 | No passive value | PASS | |
| 2. Voice | 2.10 | Hedging openers | PASS | |
| 2. Voice | 2.11 | Terminology | PASS | |
| 2. Voice | 2.12 | Em-dashes | PASS | |
| 2. Voice | 2.13 | Entity-led | PASS | "The Livepeer AI gateway..." "Every pipeline accepts..." |
| 2. Voice | 2.14 | Hedging verbs | PASS | |
| 2. Voice | 2.15 | description not self-ref | PASS | |
| 2. Voice | 2.16 | Deprecated | PASS | |
| 2. Voice | 2.17 | Universal terms | PASS | |
| 2. Voice | 2.18 | Spell check | NOT-TESTED | |
| 2. Voice | 2.19 | Glossary | PASS | |
| 2. Voice | 2.20 | Per-tab term | PASS | |
| 2. Voice | 2.21 | First-use defined | PASS | |
| 2. Voice | 2.22 | Terminology lock | PASS | |
| 2. Voice | 2.D1 | Code-first on instruction | N/A | reference, not instruction |
| 2. Voice | 2.D2 | API method has code | PASS | Every pipeline has curl + schema table |
| 2. Voice | 2.D3 | Versions explicit | MIXED | Model IDs versioned (e.g. `parler-tts-large-v1`, `whisper-large-v3`) but no `ai-runner` version pin |
| 2. Voice | 2.D4 | Errors in main | MIXED | Error response details (line 57) in Shared Conventions; per-pipeline errors absent except for "Cold model latency" |
| 2. Voice | 2.D5 | Self-evident prose | PASS | |
| 2. Voice | 2.D6 | Marketing | PASS | |
| 2. Voice | 2.D7 | Note for primary | FAIL | Multiple `<Note>` blocks carry primary content: line 126 (image-to-image requires multipart/form-data — primary fact), line 153 (SVD outputs 14-25 frames — primary fact), line 218 (text-to-speech requires pipeline-specific runner — primary requirement), line 294 (LLM beta + supported models — primary list). All should be inline prose or `<Warning>` not `<Note>` |
| 3. Headings | 3.1 | Score ≥20/25 | MIXED | "Shared conventions" (22), "Pipeline reference" (23), "Operational notes" (22) |
| 3. Headings | 3.2 | Banned/weak | PASS | No "Next Steps" or banned heading |
| 3. Headings | 3.3 | Contrast labels | PASS | |
| 3. Headings | 3.4 | Domain-anchor | PASS | |
| 3. Headings | 3.5 | Names concept | PASS | |
| 3. Headings | 3.6 | Title well-formed | PASS | "AI Pipelines" — 2 words |
| 3. Headings | 3.7 | Editorial | PASS | |
| 3. Headings | 3.8 | pageType naming | PASS | reference = literal/findability |
| 3. Headings | 3.9 | Audience register | PASS | |
| 3. Headings | 3.10 | Domain-anchor | PASS | |
| 4. Structure | 4.1 | One purpose | PASS | API reference for batch pipelines |
| 4. Structure | 4.2 | Purpose test | PASS | "lets the developer find the right pipeline request shape" |
| 4. Structure | 4.3 | PREV/NEXT | PASS | |
| 4. Structure | 4.4 | No dead ends | MIXED | Final paragraph (line 309) routes to quickstart but no Related Pages / CardGroup footer at all |
| 4. Structure | 4.5 | Prerequisites | N/A | reference |
| 4. Structure | 4.6 | Out-of-scope | PASS | Real-time AI routed at line 41 |
| 4. Structure | 4.7 | Info type | PASS | |
| 4. Structure | 4.8 | No duplication | MIXED | Per-pipeline tables overlap with `model-support.mdx` (warm models + VRAM) — but ai-pipelines is the request reference, model-support is the architecture reference; they serve different jobs and the cross-links exist |
| 4. Structure | 4.9 | Section orientation | PASS | |
| 4. Structure | 4.10 | ≥3 cross-tab links | FAIL | Zero cross-tab links |
| 4. Structure | 4.11 | Discord test | PASS | |
| 4. Structure | 4.12 | Page size | PASS | 13.4 KB substantive |
| 4. Structure | 4.13 | Zero TODO | PASS | |
| 4. Structure | 4.14 | Flat layout | PASS | |
| 4. Structure | 4.15 | Trade-offs named | MIXED | "Multipart vs JSON" (line 303) is a trade-off; "Gateway selection" mentions paid alternative; but per-pipeline limits (max audio size, max TTS text length) are scattered or absent |
| 4. Structure | 4.16 | Content-pass block | PASS | |
| 4. Structure | 4.17 | Code language tag | PASS | All 9 curl blocks have `bash` |
| 4. Structure | 4.18 | Code-first opening | N/A | reference |
| 4. Structure | 4.19 | Error states main | MIXED | Error response codes named at line 57 (shared); per-pipeline error states not named |
| 4. Structure | 4.20 | API has code/link | PASS | |
| 5. Layout | 5.1 | Correct template | MIXED | reference pageType — recommended `<ParamField>` / `<ResponseField>` not used. Page uses raw markdown parameter tables inside Accordions |
| 5. Layout | 5.2 | Required sections | PASS | Reference data; Related Pages missing (see 5.16) |
| 5.3-5.4 | | Components | PASS | |
| 5. Layout | 5.5 | Info-type → component | FAIL | Parameter schemas use raw markdown tables, not `<ParamField>` / `<ResponseField>` per reference matrix |
| 5. Layout | 5.6 | Renders | PASS (presumed) | |
| 5. Layout | 5.7 | Old-schema | FAIL | `status: current` (line 26) legacy |
| 5. Layout | 5.8 | CSS custom | PASS | |
| 5. Layout | 5.10 | PascalCase | PASS | |
| 5. Layout | 5.13 | Section ordering | PASS | Reference at end via Accordions |
| 5. Layout | 5.14 | Multi-view | PASS | AccordionGroup per pipeline |
| 5. Layout | 5.15 | Data imports | FAIL | Model IDs hardcoded in 9 curl examples and 9 default values; should be `import WARM_MODELS from '/snippets/data/ai-runner/warm-models.json'` and rendered |
| 5. Layout | 5.16 | Related Pages OR Next Step | FAIL | Neither dedicated Related Pages CardGroup nor a clean Next Step CTA — just a closing prose paragraph at line 309. Reference page should end with `<Columns>` Related Pages |
| 5. Layout | 5.17 | Related Pages format | FAIL | No Columns / Card / CustomCardTitle present |
| 5. Layout | 5.18 | Tab icon | N/A | No Tabs |
| 5. Layout | 5.19 | Accordion icon | PASS | All 9 Accordions HAVE `icon` prop (lines 66, 101, 130, 157, 177, 196, 222, 245, 269) — best-practice example in section |
| 5. Layout | 5.20 | Code block icon+title | MIXED | All 9 curl blocks have `icon="terminal"` (correct) — but no `title=` attribute. Check 5.20 requires BOTH icon AND title |
| 5. Layout | 5.21 | StyledSteps | N/A | reference, no procedural |
| 5. Layout | 5.22 | Nav cards | N/A | No nav cards (no Related Pages) |
| 5. Layout | 5.23 | StyledTable | FAIL | 9 raw markdown parameter tables inside Accordions; `<ParamField>` better, `<StyledTable>` minimum |
| 5. Layout | 5.24 | Max 1-2 tables | FAIL | 9 tables on the page (one per Accordion). Inside Accordions, each is gated behind a click — slightly mitigated but still raw markdown |
| 5. Layout | 5.25 | Max 1 major element | MIXED | AccordionGroup is the major element; defensible for reference |
| 5. Layout | 5.26 | CustomDivider placement | MIXED | No final divider before a Related Pages section (since none exists) |
| 5. Layout | 5.27 | Mermaid | N/A | |
| 5. Layout | 5.28 | Import order | PASS | |
| 5. Layout | 5.29 | Media placeholders | N/A | |
| 5. Layout | 5.30 | REVIEW flags | N/A | |
| 5. Layout | 5.31 | Decision-critical visible | MIXED | Multipart vs JSON distinction sits in `<Note>` at line 126, not top-of-section. Beta status of LLM in `<Note>` |
| 5. Layout | 5.32 | Reference tables end | MIXED | Parameter tables are inline per Accordion — design choice; rubric prefers end-of-page summary table |
| 5. Layout | 5.33 | Drafts | PASS | |
| 5. Layout | 5.34 | Inline styles | PASS | |
| 6. Veracity | 6.1 | Claims citable | MIXED | Pipeline defaults hardcoded; no link to `aiModels.json` for verification |
| 6. Veracity | 6.2 | Code TESTED | NOT-TESTED | No labels |
| 6. Veracity | 6.3 | Deprecated API | PASS | |
| 6. Veracity | 6.4 | Numbers real | MIXED | "30 seconds to 5 minutes" cold-start; "14-25 frames"; "Max 50 MB" — concrete but no source linked |
| 6. Veracity | 6.5 | REVIEW flags | N/A | |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | veracityStatus missing (line 26 only `status: current` and `lastVerified`). Honest value is `unverified` or `verified` with date |
| 6. Veracity | 6.7 | Glossary | PASS | |
| 6. Veracity | 6.8 | Source staleness | MIXED | No `ai-runner` version pin; reference to "ai-runner" twice without versioned link |
| 6. Veracity | 6.9 | Open-ended | PASS | |
| 6. Veracity | 6.10 | Source authority | MIXED | T1 source (`aiModels.json` in `livepeer/ai-runner`) not linked |
| 6. Veracity | 6.11 | Glossary defs | PASS | |
| 6. Veracity | 6.12 | Veracity-sources | NOT-TESTED | |
| 7. Nav/IA | 7.1 | docs.json | PASS | line 2518 |
| 7.2-7.5 | | Nav | PASS | |
| 7. Nav/IA | 7.6 | ≥3 cross-tab | FAIL | |
| 7. Nav/IA | 7.7-7.12 | Lane/naming/TTL/stubs/resources/guides | PASS | |
| 8. Links | 8.1 | Internal links | PASS | model-support, ai-sdks-overview, realtime-ai/overview, ai-jobs-direct-quickstart all verified |
| 8. Links | 8.2 | External | NOT-TESTED | |
| 8. Links | 8.3 | Snippets | PASS | |
| 8. Links | 8.4 | Images | N/A | |
| 8. Links | 8.5 | Renders | PASS (presumed) | |
| 8. Links | 8.6 | TODO | PASS | |
| 9. Process | 9.1-9.6 | | NOT-TESTED | |
| 10. Completeness | 10.1-10.7 | | PASS | |

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| title | Yes | "AI Pipelines" | PASS | |
| sidebarTitle | Yes | "AI Pipelines" | PASS | |
| description | Yes | "Full reference for the batch AI pipelines..." | PASS | |
| pageType | Yes | reference | PASS | |
| audience | Yes | developer | PASS | |
| purpose | Yes | reference | PASS | |
| complexity | Yes | intermediate | PASS | |
| lifecycleStage | Yes | build | PASS | |
| keywords | Yes | array | MIXED | livepeer, api too generic |
| og:image (5 fields) | Yes | — | PASS | |
| lastVerified | Yes | 2026-05-14 | PASS | |
| veracityStatus | No | — | FAIL | Missing |
| status | Yes | current | FAIL | Legacy |
| pageVariant | No | — | INFO | `specification` recommended |

## Component Audit

| Component | Used? | Required for pageType? | Recommended? | Notes |
|---|---|---|---|---|
| `<CustomDivider />` | Yes (3×) | Required | — | Opening + between sections; no final divider |
| `<AccordionGroup>`/`<Accordion icon>` | Yes (1 group, 9 items, all with icon) | Recommended | — | EXEMPLARY — every Accordion has icon prop |
| `<Note>` | Yes (4×) | — | Avoid for primary | FAIL 2.D7 — used for primary content |
| Fenced code w/ icon | Yes (9 curl blocks, all with `icon="terminal"`) | Required | — | Missing `title` attribute |
| `<StyledTable>` / `<ParamField>` / `<ResponseField>` | No | Required for reference | — | 9 raw markdown tables instead |
| `<Tabs>` | No | Recommended | — | Could group "multipart vs JSON" or "warm vs cold" |
| `<Columns cols={2}>` Related Pages | No | Required | — | Missing entirely |
| `<CustomCardTitle>` | No | Required (in nav cards) | — | No nav cards |

## Cross-page duplication and link gaps

- **OVERLAP**: Warm model + endpoint table here vs `model-support.mdx` table (lines 50-60). The two tables serve different concerns (request shape vs architecture); shared cross-link exists at line 43. Acceptable.
- **OVERLAP**: LLM pipeline section overlaps with `agents/llm-provider-routing.mdx` (which lists Livepeer LLM endpoint). No cross-link to that page.
- **LINK GAPS**: No link to `livepeer/ai-runner` repo on first mention (line 207). No link to `aiModels.json` (the source of truth for defaults + warm models). No link to OpenAPI spec when "OpenAPI-derived" implied (line 38, no inline mention; better placed). Parler-TTS, Whisper, SAM 2 mentioned without upstream model card links.
- **STRANDED**: Reference page has no Related Pages footer — readers land here from search and have no next-step paths.

## Voice & Copy violations

| Type | Count | Examples (line: text) |
|---|---|---|
| Em-dashes | 0 | — |
| US spellings | 0 | — |
| Banned words | 0 | — |
| Banned phrases | 0 | — |
| Question headings | 0 | — |
| Studio refs | 0 | — |
| `<Note>` for primary | 4 | line 126 (multipart fact), line 153 (SVD output spec), line 218 (TTS runner requirement), line 294 (LLM beta + model list) — FAIL 2.D7 |

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Shared conventions | 4 | 4 | 5 | 5 | 4 | 22 |
| Pipeline reference | 5 | 4 | 4 | 5 | 5 | 23 |
| Operational notes | 4 | 4 | 5 | 5 | 4 | 22 |

## Code Block Audit

| Line | Language tag? | Icon? | Title? | TESTED? | Notes |
|---|---|---|---|---|---|
| 70 | bash | ✓ terminal | ✗ | NOT-TESTED | Add `title="curl-text-to-image.sh"` |
| 105 | bash | ✓ terminal | ✗ | NOT-TESTED | Add `title="curl-image-to-image.sh"` |
| 134 | bash | ✓ terminal | ✗ | NOT-TESTED | Add `title="curl-image-to-video.sh"` |
| 161 | bash | ✓ terminal | ✗ | NOT-TESTED | Add `title` |
| 181 | bash | ✓ terminal | ✗ | NOT-TESTED | Add `title` |
| 200 | bash | ✓ terminal | ✗ | NOT-TESTED | Add `title` |
| 226 | bash | ✓ terminal | ✗ | NOT-TESTED | Add `title` |
| 249 | bash | ✓ terminal | ✗ | NOT-TESTED | Add `title` |
| 273 | bash | ✓ terminal | ✗ | NOT-TESTED | Add `title` |

## Depth analysis (5 layers)

### Layer 1 — Reader outcome
- **Gap:** The page lists 9 pipelines but doesn't give the reader a way to pick one. There's no "by use case" entry point ("I want to caption images → image-to-text", "I want speech transcription → audio-to-text"). The 9-Accordion list is alphabetical-ish but a developer arriving at a reference page already knows the pipeline name; the page should also serve readers who don't know the pipeline name yet.
- **Fix step:** Add a §"Pick a pipeline" map before the AccordionGroup. Two columns: "If you want to..." + "Use pipeline". Eight rows: caption an image → image-to-text; create an image → text-to-image; etc. Wrap in `<StyledTable variant="bordered">`. Place at line 47 (before Shared conventions).
- **Source/exemplar:** `model-support.mdx` line 50 — similar pipeline catalogue with one extra column would solve this.

### Layer 2 — Composition
- **Gap:** Parameter tables are raw markdown inside Accordions. Reference pageType matrix requires `<ParamField>` / `<ResponseField>` for structured schemas; `<StyledTable>` is the minimum.
- **Fix step:** Convert each 9 parameter tables to `<ParamField name="model_id" type="string" required={false}>Default: ...</ParamField>` blocks. This adds: (1) anchor links per field; (2) consistent rendering; (3) easier OpenAPI auto-gen later. Group response shapes in matching `<ResponseField>` per Accordion.
- **Source/exemplar:** Any Mintlify docs page using `<ParamField>` — e.g. `v2/developers/resources/reference/apis.mdx` (verify the pattern in-repo). Mintlify global, no import needed.

### Layer 3 — Cross-page integration
- **Gap:** No link to `aiModels.json` (source of warm models + defaults), no link to OpenAPI spec, no link to upstream model cards (Parler-TTS, Whisper-large-v3, SAM 2). No graduation card to self-hosted gateway with `-aiModels` flag.
- **Fix step:** Add inline links: line 86 default `SG161222/RealVisXL_V4.0_Lightning` → `[model card](https://huggingface.co/SG161222/RealVisXL_V4.0_Lightning)`; line 189 → whisper-large-v3 model card; line 213 → Parler-TTS card; line 251 → SAM 2 card. Add §"Source of truth" or footnote linking to `[ai-runner/aiModels.json](https://github.com/livepeer/ai-runner/blob/main/aiModels.json)`. Add Related Pages cards at EOF.
- **Source/exemplar:** `livepeer/ai-runner` repo; Hugging Face model pages.

### Layer 4 — Veracity and source authority
- **Gap:** `veracityStatus` missing from frontmatter. Cold-start "30 seconds to 5 minutes" and SVD "14-25 frames at 576x1024" have no source. Default model_id values change in `ai-runner` releases; this page risks drift. No code block TESTED.
- **Fix step:** Add `veracityStatus: verified` + `lastVerified: 2026-05-14`. Replace hardcoded model IDs with an import from `snippets/data/ai-runner/warm-models.json` (create if missing) so a single source updates all 9 pipelines. Label each curl TESTED with the gateway it was tested against (`dream-gateway.livepeer.cloud`) and date.
- **Source/exemplar:** `livepeer/ai-runner/aiModels.json`.

### Layer 5 — Product-forward depth
- **Gap:** No latency or cost per pipeline. No "typical use case" framing. No "production-readiness per pipeline" — text-to-speech `<Note>` says runner-pipeline-specific, but no Beta/Stable badge on each Accordion. No "what to expect" — average response time for a warm SDXL request? VRAM cost? Per-pipeline rate limits on the community gateway?
- **Fix step:** Add a "Status" column to a top-of-page catalogue table: pipeline | endpoint | warm model | typical latency | status (Beta/Stable). Per-Accordion, add a 1-line "Typical use case" intro and a "Limits" subsection (max file size, max characters, rate limit). Add `<Badge>Beta</Badge>` next to each pipeline name to make maturity scannable.
- **Source/exemplar:** OpenAI/Anthropic API reference pages — every endpoint shows model, latency, status badge in the header.

## Summary

**Verdict**: MAJOR
**Severity counts**: CRITICAL 0 / HIGH 7 / MEDIUM 6 / INFO 2
**Critical findings (1–5)**:
1. No Related Pages / Next Step CardGroup footer at all — page strands the reader (5.16).
2. 9 raw markdown parameter tables instead of `<ParamField>` / `<ResponseField>` / `<StyledTable>` for a reference page (5.5+5.23). Also exceeds 1-2 tables (5.24).
3. 4 `<Note>` blocks carrying primary content (2.D7); should be inline prose or `<Warning>`.
4. `veracityStatus` missing despite `lastVerified` present (1.8+6.6); `status: current` legacy field (5.7).
5. Code blocks have `icon` but no `title` — half-compliance with 5.20.

## Prioritised remediation

| # | Step | Lines affected | Severity | Effort | Source/exemplar |
|---|---|---|---|---|---|
| 1 | Add `<CustomDivider />` before EOF; add `<Columns cols={2}>` Related Pages CardGroup with 4 cards: AI Jobs Quickstart, AI SDKs Overview, Model Support, Real-Time AI Overview | end of file | HIGH | M | check 5.16+5.17 |
| 2 | Convert 9 parameter tables to `<ParamField name="..." type="..." required={...}>` blocks. Add `<ResponseField>` for response shape per Accordion | 84-95 + 8 more | HIGH | L | check 5.5; Mintlify globals |
| 3 | Convert primary-content `<Note>` to inline prose (line 153 SVD), `<Warning>` (line 218 TTS runner requirement, line 294 LLM beta), `<Info>` (line 126 multipart) — none should be `<Note>` | 126, 153, 218, 294 | HIGH | S | check 2.D7 |
| 4 | Add `veracityStatus: verified` to frontmatter; remove `status: current` legacy field | 26-27 | HIGH | S | check 1.8+5.7+6.6 |
| 5 | Add `title` attribute to every code block: ` ```bash icon="terminal" title="curl-text-to-image.sh"` (9 total) | 70, 105, 134, 161, 181, 200, 226, 249, 273 | HIGH | S | check 5.20 |
| 6 | Add ≥3 cross-tab graduation cards in new Related Pages: `/v2/gateways/setup/connect`, `/v2/about/network/architecture`, `/v2/solutions/managed-gateway` | EOF | HIGH | S | check 4.10+7.6 |
| 7 | Add §"Pick a pipeline" use-case lookup table before Pipeline reference (line 63) | 47-63 | HIGH | M | layer 1 |
| 8 | Add inline upstream model-card links at first mention (Parler-TTS, Whisper, SDXL Lightning, SAM 2) | 86, 189, 213, 251 | MEDIUM | S | check 6.10 |
| 9 | Add link to `[ai-runner aiModels.json](https://github.com/livepeer/ai-runner/blob/main/aiModels.json)` in Shared conventions (line 55) as the source-of-truth note | 55 | MEDIUM | S | check 6.1+6.10 |
| 10 | Extract warm model IDs and defaults to `snippets/data/ai-runner/warm-models.json`; import on this page; render via data | 70-296 | MEDIUM | L | check 5.15 |
| 11 | Add `pageVariant: specification` to frontmatter | 16 | MEDIUM | S | check 1.3 |
| 12 | Add "Status" + "Typical latency" + "Limits" rows to each Accordion | 9 Accordions | MEDIUM | M | layer 5 |
| 13 | Label each curl block TESTED with date + gateway URL or NOT-TESTED with reason | 9 code blocks | MEDIUM | S | check 6.2 |
| 14 | Tighten keywords: drop `livepeer`, `api`; add `dream-gateway`, `parler-tts`, `whisper-large-v3`, `sam-2`, `parameter schema` | 6-15 | INFO | S | check 1.13 |
| 15 | Add `<Badge>Beta</Badge>` after each Accordion title in `title=` attribute (or via `tag` prop if supported) | 9 Accordions | INFO | M | layer 5 |
