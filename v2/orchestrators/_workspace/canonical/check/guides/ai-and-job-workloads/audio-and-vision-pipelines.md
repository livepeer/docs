# Per-Page Quality Check Report
## `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2894–2905
**Component policy:** `docs-guide/policies/component-layout-decisions.mdx`
**Learnings applied:** P1–P54

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `'Audio and Vision Pipelines'` | PASS | Well-formed |
| `sidebarTitle` | Yes | `'Audio & Vision'` | PASS | Concise |
| `description` | Yes | `Set up audio-to-text (Whisper), text-to-speech, image-to-text, and segment-anything-2 pipelines on a Livepeer orchestrator. Covers VRAM requirements, aiModels.json entries, pricing units, and testing commands for each pipeline.` | FAIL | 219 chars — exceeds 160-char limit. Check 1.11 |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type value. Maps to `pageType: instruction` per schema |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | No | ABSENT | FAIL | Required field missing |
| `complexity` | No | ABSENT | FAIL | Required field missing |
| `lifecycleStage` | No | ABSENT | FAIL | Required field missing |
| `keywords` | Yes | 11 keywords | PASS | `audio-to-text`, `Whisper`, `SAM2`, `aiModels.json` are searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct fallback path |
| `veracityStatus` | No | ABSENT | FAIL | Required. Content has open REVIEW flags — must be `unverified` |
| `industry` | No | ABSENT | FAIL | Required (P41). Proposed: `industry: ["AI", "technical"]` — confirm before applying |
| `niche` | No | ABSENT | FAIL | Required (P41). Proposed: `niche: ["AI", "infrastructure"]` — confirm before applying |

**Required field count:** 6/10 present. Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. (`industry` and `niche` also required per P41.)

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is a deprecated 12-type value. Fix: `pageType: instruction`. Per P50, this is a schema violation not an editorial preference |
| 1.3 | `pageVariant` valid if present | N/A | Not present. Per P42, `pageVariant` is a co-fix of 1.2 — not an independent finding |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: configure` — page maps aiModels.json options per pipeline. Confirm before applying |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — assumes working go-livepeer node. Confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: build` — operator actively implementing pipelines. Confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Four open REVIEW flags in JSX comment block. Default must be `unverified`. Per P39: `status: draft` + `veracityStatus: unverified` is coherent |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required per P41. Proposed: `industry: ["AI", "technical"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required per P41. Proposed: `niche: ["AI", "infrastructure"]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | 219 chars — exceeds 160-char limit. Subject-first, no self-reference, UK English — those pass. Length fails |
| 1.12 | OG image block complete | PASS | All 5 OG fields present with correct fallback path |
| 1.13 | `keywords` field quality | PASS | Specific, searcher-intent-aligned terms present alongside two generic entries (`livepeer`, `orchestrator`) |

**Category 1 verdict: FAIL** — checks 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 fail (9 failing check IDs)

---

## Category 2 — VOICE & COPY

**Banned word scan** (all candidates checked against actual file):
- `effectively` — not found
- `essentially` — not found
- `basically` — not found
- `meaningful` — not found
- `significant` — not found
- `real` (intensifier) — not found
- `various` — not found
- `several` — not found
- `obviously` — not found
- `clearly` — not found

**Banned phrase scan:**
- "This section covers" — not found
- "This page covers / explains / walks you through" — not found
- "Understanding X is essential" — not found
- "It is important to note" — not found
- "and so on" / "etc." — not found
- "rather than" — not found
- "can generate" / "may produce" in value claims — not found

**Em-dash scan** (all visible text: headings, description, body prose, component props):
- Frontmatter description: no em-dashes found
- H2/H3 headings: no em-dashes found
- Body prose: no em-dashes found
- CustomDivider `middleText` props: `"Pipeline Summaries"`, `"audio-to-text"`, `"text-to-speech"`, `"image-to-text"`, `"segment-anything-2"`, `"Multi-Pipeline Configuration"` — no em-dashes found

**Banned construction scan** (all `can`, `may`, `if [condition]`, `not [X]` candidates):
- Line 95: "A 12 GB or 24 GB card supports a warm Whisper deployment alongside a diffusion model when those workloads are split across available GPU headroom." — `when` conditional in factual operational context, not `if [condition]` in a value claim. PASS
- Line 91: "Running a non-standard model means fewer jobs routed your way." — positive declarative assertion. PASS
- Line 162: "Operators below the 24 GB diffusion threshold still participate through `image-to-text` and `audio-to-text`." — positive assertion. PASS
- Warning block line 249: "During the Beta phase, only one warm model per GPU is supported." — factual constraint statement. PASS

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found. `synthesises` (line 132) correctly UK English |
| 2.2 | Zero banned words | PASS | Full candidate list checked. No violations found |
| 2.3 | Zero banned phrases | PASS | Full phrase list checked. No violations found |
| 2.4 | Zero banned constructions | PASS | Full construction scan conducted. No `not [X]` value statements, no `if [condition]` in value claims, no `This page [verb]`, no `can/may [verb]` value claims. All candidates classified as non-violations |
| 2.5 | Opening order correct | PASS | Tip opens with strategic value (less competition, earnings from underserved market). Lead paragraph states fact (four pipelines, standard container) |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. Final sentences end on fact, number, or instruction |
| 2.7 | Audience register correct | PASS | Peer-technical operator register throughout. No hand-holding |
| 2.8 | Per-audience prohibited phrases absent | PASS | `easy to set up` not found. `the network rewards you for` not found |
| 2.9 | No passive value statements | PASS | Value claims are specific: "~3 GB warm", "12 GB recommended; runs on 8 GB", wei values with dollar conversions |
| 2.10 | No hedging openers | PASS | Opens with Tip then factual statement |
| 2.11 | Terminology locked and consistent | PASS | `audio-to-text`, `text-to-speech`, `image-to-text`, `segment-anything-2`, `aiModels.json` consistent throughout |

**Category 2 verdict: PASS** — 0 checks fail

---

## Category 3 — SECTION NAMING & HEADINGS

*(Note: `## Related pages` heading at line 254 — the P16/P53 exemption covers only the exact text `Related Pages` with both words capitalised. The heading here reads `Related pages` with lowercase "p". This is a capitalisation deviation. See BD-1. For this report, the heading is treated as a structural navigation element and excluded from scoring, pending BD-1 resolution.)*

### Heading Score Table

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|---|
| Pipeline overview | H2 | 2 | 2 | 3 | 3 | 4 | **14/25** |
| audio-to-text (Whisper) | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| aiModels.json entry | H3 (×4) | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Testing | H3 (×4) | 2 | 2 | 3 | 3 | 5 | **15/25** |
| text-to-speech | H2 | 4 | 3 | 5 | 5 | 5 | **22/25** |
| image-to-text | H2 | 4 | 3 | 5 | 5 | 5 | **22/25** |
| segment-anything-2 | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Running multiple pipelines | H2 | 4 | 3 | 4 | 4 | 3 | **18/25** |

**Failing headings (below 20/25):**
- `Pipeline overview` — 14/25 FAIL. `overview` is in the Avoid tier per check 3.2. Rename proposed: `Pipeline VRAM and Pricing` — confirm before applying
- `Testing` (×4) — 15/25 FAIL. Generic standalone heading. No domain anchor. Applies to each of four pipeline sections
- `Running multiple pipelines` — 18/25 FAIL. Describes an action rather than naming the concept

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | `Pipeline overview` 14/25, `Testing` ×4 15/25, `Running multiple pipelines` 18/25 all fail |
| 3.2 | No banned or weak standalone heading terms | FAIL | `Pipeline overview` — `overview` is Avoid-tier. `Testing` (×4) — generic, no domain anchor, fails specificity standard |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | FAIL | `Testing` contains no domain noun. Cannot be understood in isolation. `Running multiple pipelines` is generic |
| 3.5 | Heading names concept, not examples | PASS | Pipeline-level H2s name the pipeline APIs correctly |
| 3.6 | Title well-formed | PASS | `Audio and Vision Pipelines` — 4 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | FAIL | `Pipeline overview`, `Testing` ×4, `Running multiple pipelines` are bureaucratic labels. A senior technical editor would choose pipeline-specific, action-free headings |

**Category 3 verdict: FAIL** — checks 3.1, 3.2, 3.4, 3.7 fail (4 checks)

---

## Category 4 — PAGE STRUCTURE & CONTENT ARCHITECTURE

Nav sequence from docs.json lines 2894–2905:
`workload-options` → `video-transcoding-operations` → `ai-inference-operations` → `diffusion-pipeline-setup` → `llm-pipeline-setup` → `realtime-ai-setup` → **`audio-and-vision-pipelines`** → `model-demand-reference` → `model-hosting`

PREV_PAGE: `realtime-ai-setup` | NEXT_PAGE: `model-demand-reference`

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: configure the four non-diffusion, non-LLM AI pipelines via aiModels.json |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator configure audio-to-text, text-to-speech, image-to-text, and segment-anything-2 pipelines." — passes |
| 4.3 | PREV_PAGE/NEXT_PAGE adjacency correct | PASS | Docs.json lines 2901–2903 confirmed. Reader arrives from realtime-ai-setup knowing pipeline architecture; leaves for model-demand-reference to plan VRAM/demand strategy. Logical sequence, no knowledge gaps |
| 4.4 | No dead ends | PASS | CardGroup provides four onward paths |
| 4.5 | Prerequisites stated or linked | FAIL | No explicit Prerequisites section. The page assumes go-livepeer running with `-aiWorker` enabled, Docker with GPU access, NVIDIA Container Toolkit. All unstated. `diffusion-pipeline-setup` and `llm-pipeline-setup` both include explicit prerequisite sections |
| 4.6 | Out-of-scope is clear | PASS | Scope limited to four named pipelines. Tip positions them relative to diffusion explicitly |
| 4.7 | Information type per section correct | PASS | Proposed `purpose: configure` → permitted primary types: procedural, technical, factual. Sections contain aiModels.json entries (technical/procedural), VRAM figures (factual), testing commands (procedural). Correct mapping |
| 4.8 | No content duplication from adjacent sections | FAIL | `audio-to-text` entry (`openai/whisper-large-v3`, `12882811` wei, `pixels_per_unit: 1`) duplicated in `diffusion-pipeline-setup.mdx` lines 262–277. `image-to-text` entry (`Salesforce/blip-image-captioning-large`, `1192093` wei) duplicated in `diffusion-pipeline-setup.mdx` lines 242–255. `segment-anything-2` entry (`facebook/sam2-hiera-large`, `4768371`) duplicated in `diffusion-pipeline-setup.mdx` lines 284–296 |
| 4.9 | Section orientation page present | N/A | Section-level check — `ai-inference-operations` serves as orientation page |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: FAIL** — checks 4.5, 4.8 fail (2 checks)

---

## Category 5 — LAYOUT & COMPONENTS

Component policy read from `docs-guide/policies/component-layout-decisions.mdx`. For `how_to` (current deprecated pageType): Required sections: Prerequisites, Steps. Preferred: Steps, Step, CodeGroup, Warning, Check, Tip. After migration to `instruction` (7-type): same template.

**Dead import check (P9):**
- Line 32: `import { LinkArrow } from '/snippets/components/elements/links/Links.jsx'` — `LinkArrow` not used anywhere in page body
- Line 34: `import { BorderedBox } from '/snippets/components/wrappers/containers/Containers.jsx'` — `BorderedBox` not used anywhere in page body

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | FAIL | `how_to`/`instruction` requires Prerequisites and Steps sections. Neither present as named sections. Content uses H2-per-pipeline structure instead |
| 5.2 | Required sections present | FAIL | No `Prerequisites` section. No `Steps` wrapper. Required for `how_to`/`instruction` per component-layout-decisions.mdx |
| 5.3 | Only approved components used | NOT-TESTED | `CustomDivider`, `StyledTable`, `BorderedBox`, `LinkArrow` are custom components. Per P22: component-layout-decisions.mdx does not list these in the Preferred or Avoid columns for `how_to`. Result is NOT-TESTED, not FAIL |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, Coming Soon, or PreviewCallout in rendered content. REVIEW flags are in JSX comments only |
| 5.5 | Information type → component mapping correct | PASS | Procedural content uses code blocks and structured sections. Reference content uses StyledTable |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot run live render. Dead imports may produce warnings but not render errors |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` is old-schema. All other fields comply or are absent (separate failures) |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours or inline JS found |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | FAIL | Dead imports: `LinkArrow` (line 32) and `BorderedBox` (line 34) imported but not used in page body |

**Category 5 verdict: FAIL** — checks 5.1, 5.2, 5.7, 5.10 fail (4 checks)

---

## Category 6 — VERACITY & FACTUAL ACCURACY

**Open REVIEW flags in file (lines 256–262):**
1. Verify the audio-to-text pricing unit implementation
2. Confirm the preferred text-to-speech model and its pricing unit
3. Confirm the SAM2 HuggingFace model ID format
4. Confirm whether the one-warm-model-per-GPU constraint applies per GPU or per container

### Veracity Claims Inventory

| Claim | Line | Type | Status | Source |
|---|---|---|---|---|
| `audio-to-text` VRAM "~3 GB warm" | 63, 93 | technical | UNVERIFIED — REVIEW flag | go-livepeer AI runner measurements |
| "~3 GB" vs "~2–3 GB" in model-demand-reference line 120 | 63 | technical | INCONSISTENT | Cross-page reconciliation needed |
| `12882811` wei ≈ $0.0000014/sec at late-2025 ETH/USD | 109 | evaluative | UNVERIFIED — staleness risk | Current ETH/USD rate from Explorer |
| `text-to-speech` VRAM "Varies by model" | 68 | technical | UNVERIFIED — REVIEW flag | Pipeline documentation |
| `suno/bark` is documented baseline for text-to-speech | 136 | factual | UNVERIFIED — REVIEW flag | Livepeer AI pipeline docs |
| `image-to-text` VRAM "~1–2 GB (BLIP)" | 75, 160 | technical | UNVERIFIED | go-livepeer AI runner measurements |
| `1192093` wei ≈ $0.000125/megapixel at late-2025 ETH/USD | 175 | evaluative | UNVERIFIED — staleness risk | Current ETH/USD rate |
| `segment-anything-2` VRAM "12–24 GB depending on model variant" | 80, 191 | technical | INCONSISTENT — model-demand-reference line 133–137 says "~4–6 GB warm / ~6–8 GB peak" for SAM2 large | SME verification needed |
| One warm model per GPU during Beta | 248 | technical | UNVERIFIED — REVIEW flag | go-livepeer Beta release notes |
| Line 246 states text-to-image + audio-to-text both warm simultaneously on 24 GB | 246 | technical | CONTRADICTS line 248 | Internal contradiction — cannot both be true on single GPU |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | 4 open REVIEW flags. ETH/USD pricing calculations unverified. VRAM inconsistencies with model-demand-reference. Line 246/248 internal contradiction |
| 6.2 | Code/commands tested | NOT-TESTED | Docker commands not tested against live system. Line 180: `docker logs image-to-text-container` uses a placeholder name that will not match an actual AI runner container |
| 6.3 | No deprecated API usage | PASS | No deprecated CLI flags referenced |
| 6.4 | Numbers are real | FAIL | VRAM inconsistency: audio-to-text "~3 GB" here vs "~2–3 GB" in model-demand-reference. SAM2: "12–24 GB" here vs "~4–6 GB warm" in model-demand-reference. These are materially different claims about the same hardware state |
| 6.5 | REVIEW flags for unverified claims | PASS | Four REVIEW flags present in JSX comment block |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Open REVIEW flags and unverified numbers require `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references in this page |
| 6.8 | Source staleness check | FAIL | ETH/USD pricing estimates at "late-2025 rates" — staleness risk. No expiry mechanism or live-data link |
| 6.9 | No open-ended research tasks | FAIL | REVIEW item 2: "Confirm the preferred text-to-speech model and its pricing unit" has no named authoritative source or concrete next step |

**Category 6 verdict: FAIL** — checks 6.1, 6.4, 6.6, 6.8, 6.9 fail (5 checks)

---

## Category 7 — NAVIGATION & IA

docs.json lines 2894–2905 read. Full path `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines` confirmed at line 2902.

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed: docs.json line 2902 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry exactly |
| 7.3 | Tab entry portal routes to all sections | N/A | Not the tab entry portal |
| 7.4 | No structural orphans | PASS | Reachable from Workloads and AI group in docs.json |
| 7.5 | Audience journey complete | PASS | Position 7 of 9 in section. Logical progression |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | Published in `v2/orchestrators/guides/` — correct publishable lane |
| 7.8 | File naming conventions | PASS | `audio-and-vision-pipelines.mdx` — no invalid prefix, no `-index` suffix |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS** — 0 checks fail

---

## Category 8 — LINKS & RENDERING

**Internal links verified against docs.json:**
- `/v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup` — PASS (docs.json line 2900)
- `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` — PASS (docs.json line 2899)
- `/v2/orchestrators/guides/config-and-optimisation/ai-model-management` — PASS (docs.json line 2923)
- `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` — PASS (docs.json line 2921)

**External links found:**
- `https://tools.livepeer.cloud/ai/network-capabilities` — appears at lines 126, 152, 183, 215 (×4)

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 4 internal links confirmed in docs.json with specific line references |
| 8.2 | All external links live | NOT-TESTED | `tools.livepeer.cloud` not verifiable in this environment |
| 8.3 | All snippet imports resolve | NOT-TESTED | Import paths match pattern of other pages. Cannot confirm without filesystem check of each snippet file |
| 8.4 | All images load | N/A | No image assets beyond OG block |
| 8.5 | Page renders without error | NOT-TESTED | Dead imports may produce warnings. Cannot run live render |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | REVIEW flags are in JSX comments only. No rendered placeholders |

**Category 8 verdict: PASS** — 0 checks fail

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | `status: draft` — no human sign-off |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions consumed by this page |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab: IA not approved, terminology not locked, content pass not open (tab-status.md) |
| 9.4 | Phase ordering respected | N/A | Not yet in veracity pass |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report |
| 9.6 | Feedback routed | N/A | Pre-shipping |

**Category 9 verdict: FAIL** — checks 9.1, 9.3 fail (expected at current pipeline stage)

---

## Cross-Category Connections

**CC-1: VRAM inconsistency — audio-to-text and segment-anything-2**
Affects: 6.4, 4.8, and indirectly 6.1 and 6.6
- Audio-to-text: "~3 GB warm" (this page) vs "~2–3 GB warm / ~3–4 GB peak" (model-demand-reference lines 120–122)
- SAM2: "12–24 GB depending on model variant" (this page) vs "~4–6 GB warm / ~6–8 GB peak for SAM2 large" (model-demand-reference lines 133–137)
- Root fix: SME verification. Until resolved, both pages must stay `veracityStatus: unverified`

**CC-2: Internal contradiction — warm model example vs Beta constraint**
Affects: 6.1, 6.4
- Line 246 shows text-to-image + audio-to-text both warm on a 24 GB card
- Line 248 (Warning) states only one warm model per GPU during Beta
- These are mutually exclusive on a single GPU. The multi-pipeline JSON example must be annotated to clarify two GPUs are required, or the example must be restructured

**CC-3: pageType deprecation → missing sections → template failure**
Affects: 1.2, 5.1, 5.2, 5.7
- Root cause: `how_to` must be migrated to `instruction`
- Co-fix: add Prerequisites section; consider StyledSteps structure
- Per P42: `pageVariant` is part of the same root-cause fix, not independent

**CC-4: Missing frontmatter fields → governance block**
Affects: 1.1, 1.4, 1.6, 1.7, 1.8, 9.1, 9.3
- `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all absent
- All proposed values require human confirmation per P51

---

## Blocking Decisions

**BD-1:** `## Related pages` capitalisation — heading reads `Related pages` (lowercase "p"). Per P53, the exemption applies only to the exact string `Related Pages` (both capitalised). Strictly this heading requires evaluation. However, it is functionally the structural navigation element. Decision: apply P53 exemption to case-insensitive match, or require capitalisation fix first. Proposed fix pending: capitalise to `## Related Pages` to match the exemption and sitewide convention.

**BD-2:** VRAM figure reconciliation — SAM2 and audio-to-text figures conflict between this page and model-demand-reference. Requires SME sign-off before either page can advance to `veracityStatus: verified`.

---

## Verdict Summary

**Overall: NEEDS WORK**

Checks failing: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 4.5, 4.8, 5.1, 5.2, 5.7, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3

**26 checks fail.**

---

## Prioritised Fix List

**F-01** | CRITICAL | 1.2, 5.7, 5.1, 5.2 | Migrate deprecated pageType
Replace `pageType: how_to` with `pageType: instruction`. Per P42, co-fix: decide whether `pageVariant` applies (omit if no specific variant needed). Add `## Prerequisites` section after opening paragraph: document that go-livepeer with `-aiWorker` enabled, Docker with GPU access, and NVIDIA Container Toolkit are required prerequisites.

**F-02** | CRITICAL | 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10 | Add missing required frontmatter fields
Proposed: `purpose: configure` — confirm before applying. `complexity: intermediate` — confirm before applying. `lifecycleStage: build` — confirm before applying. `veracityStatus: unverified` — confirm before applying. `industry: ["AI", "technical"]` — confirm before applying. `niche: ["AI", "infrastructure"]` — confirm before applying.

**F-03** | CRITICAL | 6.1, 6.4, CC-1 | Resolve VRAM inconsistencies with model-demand-reference
SAM2: this page says "12–24 GB"; model-demand-reference says "~4–6 GB warm". Whisper: "~3 GB" here vs "~2–3 GB" there. Requires SME verification. Route to BD-2. Do not apply fix until source confirmed.

**F-04** | CRITICAL | 6.1, CC-2 | Fix internal contradiction on warm model example
Line 246 shows text-to-image + audio-to-text warm simultaneously. Line 248 Warning states only one warm model per GPU during Beta. Proposed: annotate the multi-pipeline JSON block to state it requires two GPUs (one per warm model). Exact annotation: add comment line `// Requires two separate GPUs — one warm slot per GPU during Beta` inside the JSON block. Confirm before applying.

**F-05** | HIGH | 1.11 | Shorten description to ≤160 chars
Current: 219 chars. Proposed: `Configure audio-to-text, text-to-speech, image-to-text, and segment-anything-2 pipelines on a Livepeer orchestrator — aiModels.json entries, VRAM requirements, and testing commands.` (183 chars — still over limit, needs further trimming). Confirm before applying.

**F-06** | HIGH | 3.1, 3.2, 3.4, 3.7 | Rename failing headings
`## Pipeline overview` (14/25) → Proposed: `## Pipeline VRAM and Pricing` — confirm before applying.
`### Testing` (×4, 15/25) → Proposed per pipeline: `### Container Health Check` (audio-to-text), `### Registration Check` (text-to-speech), `### Container Inspection` (image-to-text), `### Container Health Check` (segment-anything-2) — confirm before applying.
`## Running multiple pipelines` (18/25) → Proposed: `## Multi-Pipeline Configuration` — confirm before applying.

**F-07** | HIGH | 5.10 | Remove dead imports
Remove `import { LinkArrow } from '/snippets/components/elements/links/Links.jsx'` (line 32) — not used in page body.
Remove `import { BorderedBox } from '/snippets/components/wrappers/containers/Containers.jsx'` (line 34) — not used in page body.

**F-08** | HIGH | 6.9 | Resolve open-ended REVIEW item
REVIEW item 2: "Confirm the preferred text-to-speech model and its pricing unit" has no named source. Assign to SME with specific source (Livepeer AI pipeline documentation or Cloud SPE docs). Replace with `{/* REVIEW: text-to-speech model ID — verify against [specific source URL] before publishing */}` until resolved.

**F-09** | MEDIUM | 4.5 | Add Prerequisites section
Add before the pipeline table: a Prerequisites section stating required: go-livepeer running with `-aiWorker`, Docker with GPU access, NVIDIA Container Toolkit. Link to `setup/guide` for operators starting fresh.

**F-10** | MEDIUM | 4.8 | Audit and resolve content duplication with diffusion-pipeline-setup
The audio-to-text, image-to-text, and segment-anything-2 JSON entries with identical values appear in both `audio-and-vision-pipelines.mdx` and `diffusion-pipeline-setup.mdx`. Decision: canonical single location + cross-reference, or differentiate coverage. Requires Alison's input.

**F-11** | MEDIUM | 6.2 | Fix placeholder container name in test command
Line 180: `docker logs image-to-text-container --tail 30` — `image-to-text-container` is not the container name the AI worker creates. Replace with: `docker ps --filter name=livepeer-ai-runner` followed by instruction to identify the image-to-text container from output, consistent with pattern on lines 115–118 and 211–213.

**F-12** | MEDIUM | 6.8 | Address ETH/USD pricing staleness
Lines 109 and 175 include ETH/USD conversions at "late-2025 ETH/USD rates". Replace inline conversions with link to current rate reference or add REVIEW flag: `{/* REVIEW: ETH/USD conversion — verify against current rates before publishing */}`.

**F-13** | INFO | BD-1 | Capitalise `## Related pages`
Change `## Related pages` to `## Related Pages` to match the P16/P53 exemption string exactly and sitewide convention.
