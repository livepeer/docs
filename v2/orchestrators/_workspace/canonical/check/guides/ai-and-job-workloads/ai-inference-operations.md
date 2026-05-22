# Per-Page Quality Check Report
## `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2894–2905

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `AI Inference Operations` | PASS | |
| `sidebarTitle` | Yes | `AI Inference` | PASS | |
| `description` | Yes | `How AI inference works on the Livepeer network — pipeline types, the batch vs live-video distinction, hardware requirements, and how jobs flow from application to your GPU node.` | FAIL | Em-dash (`—`) present — prohibited in all visible text (P30) |
| `pageType` | Yes | `concept` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | Yes | `explain` | PASS | Valid canonical value; correct for a concept page explaining AI inference mechanics |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | 10 entries | PASS | `cascade`, `live-video-to-video`, `gpu inference`, `comfystream` — strong searcher-intent terms |
| OG image block | Yes | All 5 fields present | PASS | |
| `industry` | No | — | FAIL | Required field absent (P41) |
| `niche` | No | — | FAIL | Required field absent (P41) |
| `veracityStatus` | No | — | FAIL | Required field absent |
| `status` | Yes | `published` | INFO | `status: published` with `veracityStatus` absent and JSX draft note present is incoherent (P39). Recommend `status: draft` + `veracityStatus: unverified` |

**Required field count:** 5/10. Missing: `complexity`, `lifecycleStage`, `veracityStatus`. Additionally: absent `industry`, absent `niche`.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `concept` is valid 7-type canonical value |
| 1.3 | `pageVariant` valid if present | N/A | Not present; not required |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `explain` is canonical |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying (P51) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: evaluate` — confirm before applying (P51). (Reader is evaluating AI as a workload option before configuring) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: published` with absent `veracityStatus` and JSX draft note is incoherent (P39). Set `veracityStatus: unverified`, change `status` to `draft` |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required (P41). Proposed: `industry: [AI, technical]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required (P41). Proposed: `niche: [AI, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | Em-dash (`—`) in description (P30). Also: 165 chars exceeds ≤160 char limit |
| 1.12 | OG image block complete | PASS | All 5 OG fields present with correct path |
| 1.13 | `keywords` field quality | PASS | `live-video-to-video`, `comfystream`, `gpu inference`, `cascade` — searcher-intent-aligned |

**Category 1 verdict: FAIL** — Failing checks: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — VOICE & COPY

### Banned Construction Scan

Scope: all visible text — body prose, headings, Tips, Notes, Warnings, table cells, card descriptions, CustomDivider `middleText` props, AccordionGroup `title` props, Accordion `title` props, BorderedBox content.

Every `can`, `may`, `could`, `might`, `should` sentence; every `if [condition]`; every `not [X]` statement:

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 36–37 | "It turns GPU nodes into open, composable inference infrastructure that serves image generation, live-video effects, and large language model completions." | — | Factual | No |
| 44–46 | "AI pipelines sit beside an existing video orchestrator. The usual delta is: keep the existing go-livepeer service…" | — | Procedural list | No |
| 56 | "**Low-LPT entry path:** AI inference is often a better starting point than solo video orchestration when stake is limited." | `often` | Evaluative hedge — not a banned construction | BORDERLINE |
| 57 | "Capability, pricing, and latency matter more than active-set position for many AI jobs." | — | Factual claim, direct | No |
| 63 | "Applications never communicate with orchestrators directly." | `never` | Factual constraint | No |
| 77 | "You never build a marketplace, billing system, or authentication layer." | `never` | Factual — direct assertion | No |
| 79 | "When a gateway selects your orchestrator, it is because your combination of capability, pricing, latency, and uptime made you the best option for that specific request." | — | Factual | No |
| 113 | "**Gateway pricing is a hard gate.** Gateways configure a maximum price they will pay per capability using the `-maxPricePerCapability` JSON flag." | — | Factual | No |
| 113 | "A pipeline priced above that maximum receives no jobs from that gateway, regardless of hardware quality." | `not [X]` pattern (implicit: receives no = does not receive) | This is a positive factual statement ("receives no jobs") not a negation-as-primary-value-statement. PASS | No |
| 115 | "Before setting prices in `aiModels.json`, check what prices the major gateways are using." | — | Procedural guidance | No |
| 188 | "Livepeer's AI worker supports ten pipeline types." | — | Factual | No |
| 204 | "The latency constraint is what separates this from batch inference: a 30 fps video stream must process each frame in roughly 33 ms or less." | `must` | Constraint — not a value claim | No |
| 295 | "These are minimum requirements. Running at the minimum will result in longer cold-start times and reduced job competitiveness." | — | Factual consequence | No |
| 367–381 | "**You do need to:** … **The network already supplies:** Build a marketplace or API…" | — | Parallel list structure | FAIL — see below |
| 429 | "Next steps" heading section | — | See check 3.2 — "Next steps" is Avoid-tier |  |

**Critical construction issue at lines 367–381:**

The "What you build and what the network supplies" section contains:

```
**The network already supplies:**
- Build a marketplace or API
- Implement authentication or billing
- Handle service discovery
- Build brand recognition
```

This is structurally broken: the list items under "The network already supplies:" use imperative verbs ("Build a marketplace", "Implement authentication", "Handle service discovery", "Build brand recognition"). These read as instructions to the reader, not as things the network supplies. The intended meaning is "the network already does these things, so you don't have to build them" but the prose does not state this. This is a content logic error — the list items should be noun phrases (e.g., "Marketplace and billing infrastructure", "Authentication layer", "Service discovery") or the framing should be "The network already handles: marketplace and billing, authentication and billing, service discovery, brand distribution."

Also: "**You do need to:**" / "**The network already supplies:**" is a `not [X]` / implied contrast structure — while not technically a banned construction, it creates an unusual inversion where the reader's obligations appear first in a positive list and the network's contributions appear as an imperative-verb list. Flag as BORDERLINE structural issue.

**Duplicate card detected:**
- Line 432: `Card title="Batch AI Setup" icon="gears" href="…/diffusion-pipeline-setup"` (under "Next steps")
- Line 441: `Card title="Batch AI Setup" icon="rocket" href="…/diffusion-pipeline-setup"` (also under "Next steps")

Two cards with the same title ("Batch AI Setup") linking to the same page (`diffusion-pipeline-setup`) in the same CardGroup. One is redundant.

**CustomDivider props:** No `middleText` attributes found on CustomDivider instances — all are self-closing with no visible text props.

**Accordion titles scan for banned constructions:**
- "Already running video?" — question in Accordion title. CLAUDE.md prohibits questions in headings. However, the Accordion `title` prop renders as a heading-equivalent visible text. Flag under check 3.7/voice rules.
- "text-to-image — Generate images from text prompts" — em-dash in Accordion title (P48/P30).
- "image-to-image — Style transfer and transformation" — em-dash in Accordion title.
- "image-to-video — Animate a still image" — em-dash in Accordion title.
- "image-to-text — Vision-language captioning" — em-dash in Accordion title.
- "audio-to-text — Speech recognition and transcription" — em-dash in Accordion title.
- "segment-anything-2 — Promptable segmentation" — em-dash in Accordion title.
- "text-to-speech — Natural speech synthesis" — em-dash in Accordion title.
- "upscale — Resolution enhancement" — em-dash in Accordion title.
- "llm — Large language model inference" — em-dash in Accordion title.
- "live-video-to-video — Cascade streaming AI" — em-dash in Accordion title.

**All 10 AI pipeline Accordion titles contain em-dashes.** This is a systematic P30/P48 violation.

**Banned word scan:**
Candidates: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`

Full scan of body prose and visible component props:
- Line 216: "Diffusion models (Stable Diffusion, SDXL variants) run natively on the managed `livepeer/ai-runner` container." — no banned words.
- Accordion "llm": "OpenAI-compatible text completion endpoint backed by an Ollama-based runner. Runs quantised LLMs with as little as 8 GB VRAM, making it accessible to operators with older consumer GPUs that are unsuitable for diffusion pipelines." — no banned words.
- Line 380: "Your competitive advantage is performance: lower latency, better-tuned models, higher uptime, specialised capabilities." — `specialised` is UK English (PASS on 2.1); no banned words.

No banned words found in body prose or component props.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | `specialised` (line 381), no -ize endings, no -or/-ou errors detected |
| 2.2 | Zero banned words | PASS | No instances of banned words found |
| 2.3 | Zero banned phrases | PASS | No "This page", "This section", "rather than", "etc.", "and so on" |
| 2.4 | Zero banned constructions | FAIL | "What you build and what the network supplies" section: list items under "The network already supplies:" use imperative verbs ("Build a marketplace or API") — these read as reader instructions, not network-supplied capabilities. Content logic error that also functions as an unclear/misleading construction |
| 2.5 | Opening order correct | PASS | "Livepeer's AI subnet launched in Q3 2024 and has grown into a major source of new fee revenue for orchestrators." — subject-first, value-first |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; lead sentences state facts |
| 2.7 | Audience register correct | PASS | Hardware-specific, operational, earnings-anchored — correct for `orchestrator` |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you", "automatically" (unverified). Note callouts use direct factual framing |
| 2.9 | No passive value statements | PASS | "AI inference is often a better starting point" — `often` is a hedge but not a passive value statement |
| 2.10 | No hedging openers | PASS | Opens with factual historical claim, not caveat |
| 2.11 | Terminology locked and consistent | PASS | `aiModels.json`, `BYOC`, `Cascade`, `ComfyStream`, `live-video-to-video` used consistently |

**Category 2 verdict: FAIL** — Failing check: 2.4

---

## Category 3 — SECTION NAMING & HEADINGS

`Related Pages` heading not present; no exemption needed.

**Note:** Accordion `title` props are visible H-level text and are included in the heading scan. Em-dashes in Accordion titles are flagged per P48/P30.

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-------|-----------|-------|-----------|---------|-------------|-------|
| How the network routes AI jobs | H2 | 4 | 4 | 5 | 5 | 4 | 22/25 |
| How gateway selection actually works | H3 | 4 | 4 | 5 | 5 | 4 | 22/25 |
| The two workload types | H2 | 3 | 3 | 4 | 4 | 4 | **18/25 FAIL** |
| Comparison | H3 | 2 | 2 | 3 | 3 | 4 | **14/25 FAIL** |
| AI pipeline types | H2 | 4 | 4 | 5 | 5 | 5 | 23/25 |
| Hardware by workload type | H2 | 4 | 4 | 5 | 5 | 4 | 22/25 |
| What you build and what the network supplies | H2 | 3 | 3 | 4 | 4 | 2 | **16/25 FAIL** |
| Network participation | H2 | 3 | 3 | 4 | 4 | 5 | **19/25 FAIL** |
| Watch: AI on Livepeer | H2 | 3 | 3 | 3 | 4 | 4 | **17/25 FAIL** |
| Next steps | H2 | 1 | 1 | 2 | 3 | 5 | **12/25 FAIL** |

**Accordion titles (visible text, included in scan):**
All 10 Accordion titles follow the pattern `[pipeline] — [description]` with an em-dash. These are not separately scored for 3.1 but are flagged for 2.1/P30 violations.
- "Already running video?" — question construction in Accordion title. Not scored in heading table (it is inside a BorderedBox, not a doc-level heading), but voice rule prohibits questions in headings.

**Check 3.2 — banned/weak terms:**
- "Next steps" — in the `Avoid` list (check 3.2 lists `Next Steps` as Avoid-tier). FAIL.
- "Comparison" — not explicitly in the banned list but is a weak structural label similar to `Details`. Functionally `Avoid`-tier. FAIL.
- "Watch: AI on Livepeer" — not in banned list but is a media-type label rather than a concept heading.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | Six headings below threshold: "The two workload types" (18/25), "Comparison" (14/25), "What you build and what the network supplies" (16/25), "Network participation" (19/25), "Watch: AI on Livepeer" (17/25), "Next steps" (12/25) |
| 3.2 | No banned or weak standalone heading terms | FAIL | "Next steps" is Avoid-tier (explicitly listed in check 3.2). "Comparison" is a weak structural label. "Watch: [X]" is a media-type descriptor, not a concept heading |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings (the "Batch AI vs Live-video" comparison is in a table under "Comparison", not as a heading) |
| 3.4 | Domain-anchor rule applied | FAIL | "The two workload types", "Network participation", "Next steps", "Comparison" all lack domain anchoring — could appear on any docs page |
| 3.5 | Heading names the concept, not examples | PASS | Most headings name the concept; Accordion titles name the pipeline directly |
| 3.6 | Title well-formed | PASS | "AI Inference Operations" — concept-derived, no banned forms |
| 3.7 | Sounds like an expert editorial choice | FAIL | "Comparison" is a placeholder label. "Next steps" is a bureaucratic structural convention. "Watch: AI on Livepeer" is media-labelling language. "What you build and what the network supplies" is a wordy conversational phrase |

**Category 3 verdict: FAIL** — Failing checks: 3.1, 3.2, 3.4, 3.7

---

## Category 4 — PAGE STRUCTURE

Nav sequence confirmed from docs.json lines 2894–2905:
`workload-options` → `video-transcoding-operations` → **`ai-inference-operations`** → `diffusion-pipeline-setup` → `llm-pipeline-setup` → `realtime-ai-setup` → `audio-and-vision-pipelines` → `model-demand-reference` → `model-hosting`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | INFO | Page is broad — covers routing, both workload types, all 10 pipeline types, hardware requirements, and network participation. This may be appropriate for a concept/orientation page, but it is serving multiple reader jobs simultaneously |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator understand how AI inference works, how jobs reach their node, and what hardware is needed for each pipeline type." — passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | `video-transcoding-operations` (transcoding config) → `ai-inference-operations` (AI overview) is a logical progression. Exits to `diffusion-pipeline-setup` (specific AI config) — correct |
| 4.4 | No dead ends | FAIL | Duplicate "Batch AI Setup" card in "Next steps" CardGroup (two cards with identical title and href). One card is a dead variant — not broken, but content quality issue. Also: the YouTube embed and two YouTube cards add a media section that doesn't have a clear "next step" exit |
| 4.5 | Prerequisites stated or linked | PASS | BorderedBox "Already running video?" accordion provides the prerequisite bridge for existing video operators. Note callout provides low-LPT context |
| 4.6 | Out-of-scope is clear | PASS | Each pipeline section explicitly defers setup to dedicated pages |
| 4.7 | Information type per section is correct | PASS | `purpose: explain` permits `conceptual, technical` primary with `factual, analytical` secondary. Content is predominantly conceptual and technical — correct |
| 4.8 | No content duplication from adjacent sections | INFO | Pipeline types table duplicates the pipeline summary from `workload-options`. Hardware table duplicates content from `model-demand-reference`. Some overlap is expected in a concept page, but the depth here may be excessive |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links at journey intersections | INFO | Line 117 links to `v2/gateways/resources/technical/orchestrator-offerings` which does NOT appear in docs.json. This may be a broken cross-tab link. Verified: searching docs.json for `orchestrator-offerings` returns no results — BROKEN LINK |

**Category 4 verdict: FAIL** — Failing check: 4.4. INFO items: 4.1, 4.8, 4.10 (broken link)

---

## Category 5 — LAYOUT & COMPONENTS

**Matrix applied:** `component-layout-decisions.mdx` for `concept`:
- Required: `Overview`
- Preferred: `Accordion`, `AccordionGroup`, `CodeGroup`, `Tabs`, `Note`, `Info`, `Tip`
- Avoid: TODO/TBD placeholders

**Components used:** `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `AccordionGroup`, `Accordion`, `Card`, `CardGroup`, `Note`, `BorderedBox`, `Frame` (iframe embed)

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | PASS | `concept` template: Overview present; H2 section structure; AccordionGroup for pipeline detail |
| 5.2 | Required sections present | PASS | `concept` requires `Overview` — present in opening two paragraphs plus BorderedBox orientation callout |
| 5.3 | Only approved components used | INFO | `BorderedBox` (with `variant="accent"`) — not in the `component-layout-decisions.mdx` list for any pageType. Per P22: cannot mark FAIL without confirming approval status. NOT-TESTED. `Frame` (iframe embed for YouTube) — not in preferred list. NOT-TESTED. `Card`/`CardGroup` — not in preferred list for `concept` but not in Avoid. NOT-TESTED |
| 5.4 | Avoided components absent | PASS | No TODO/TBD visible text. JSX comments are invisible |
| 5.5 | Information type → component mapping correct | PASS | Reference data uses `StyledTable`; pipeline details use `AccordionGroup`; callouts use `Note`; `Card`/`CardGroup` for navigation links |
| 5.6 | MDX renders clean | PASS | All 3 imports used (`StyledTable`/`TableRow`/`TableCell`, `CustomDivider`, `BorderedBox`); no unclosed tags; iframe inside Frame appears complete |
| 5.7 | No old-schema frontmatter | PASS | All frontmatter values are valid 7-type schema |
| 5.8 | CSS uses custom properties only | N/A | No inline styles present |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports; correct subdirectories |

**Category 5 verdict: PASS** — No failing checks. Three NOT-TESTED component items.

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Type | Status |
|-------|------|--------|
| "AI Subnet launched in Q3 2024" | factual | Verifiable from Livepeer blog/release notes |
| "grown into a major source of new fee revenue" | narrative | Unquantified — "major" is vague; no REVIEW flag |
| Gateway routes: capability + price ceiling, not stake | technical | Verifiable from go-livepeer source |
| `capabilities_prices` / `hardware` / `price_info` field names in `OrchestratorInfo` | technical | Verifiable from go-livepeer source; no REVIEW flag |
| `text-to-image` VRAM: 24 GB | factual | Consistent with hardware table; no primary source |
| `audio-to-text` VRAM: 12 GB | factual | Consistent with hardware table |
| `segment-anything-2` VRAM: 12 GB | factual | **Inconsistency**: workload-options.mdx states 6 GB. One is wrong |
| `image-to-text` VRAM: 4 GB | factual | Consistent across pages |
| `llm` VRAM: 8 GB | factual | Consistent with workload-options |
| `upscale` VRAM: 16 GB | factual | Not in workload-options table; hardware table here lists 16 GB |
| "Cascade Phase 1 shipped in December 2024" | factual | Referenced in workload-options; verifiable from Livepeer blog |
| "ComfyStream integrated with Livepeer network payments in January 2025" | factual | Verifiable from GitHub/blog |
| "30 fps stream must process each frame in roughly 33 ms or less" | technical | Mathematical derivation — correct |
| "RTX 2060 (8 GB) for LLM; RTX 3090/4090 for diffusion" — table row for batch AI | evaluative | Hardware recommendation — plausible but no source |
| "SG161222/RealVisXL_V4.0_Lightning" — recommended model for text-to-image | evaluative | Community-used; no REVIEW flag; may become stale |
| "openai/whisper-large-v3" — recommended for audio-to-text | evaluative | Widely used; verifiable from HuggingFace |
| Cloud SPE Ollama runner blog post (external link in Accordion) | structural | External URL — volatility risk |
| `v2/gateways/resources/technical/orchestrator-offerings` — cross-tab link | structural | NOT in docs.json — broken link |
| `v2/developers/concepts/ai-on-livepeer` — cross-tab link | structural | Confirmed in docs.json line 2487 |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | `segment-anything-2` VRAM 12 GB (here) vs 6 GB (`workload-options`) — inter-page inconsistency with no primary source citation on either page |
| 6.2 | Code/commands tested | N/A | No code blocks or CLI commands on this page |
| 6.3 | No deprecated API usage | PASS | No deprecated flags or endpoints cited |
| 6.4 | Numbers are real | FAIL | SAM2 VRAM inconsistency (same as 6.1). `upscale` VRAM: 16 GB not cross-verified. "grown into a major source" — unquantified superlative |
| 6.5 | REVIEW flags for unverified claims | FAIL | No REVIEW JSX flags on this page despite unverified VRAM figures, unverified `OrchestratorInfo` field names, and volatile external link (Cloud SPE blog post) |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. `status: published` with unverified claims and no REVIEW flags is incoherent (P39). Set `veracityStatus: unverified`, change `status` to `draft` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | Cloud SPE blog post URL (in llm Accordion) is an external URL with volatility risk. `SG161222/RealVisXL_V4.0_Lightning` recommendation may become stale as network-preferred models evolve |
| 6.9 | No open-ended research tasks | FAIL | SAM2 VRAM inconsistency (6 GB vs 12 GB) has no named source and no resolution path on this page |

**Category 6 verdict: FAIL** — Failing checks: 6.1, 6.4, 6.5, 6.6, 6.8, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` confirmed at docs.json line 2898 |
| 7.2 | Navigation matches file system | PASS | File path matches nav entry |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check |
| 7.4 | No structural orphans | PASS | Linked in docs.json and referenced from workload-options, model-hosting, and other pages |
| 7.5 | Audience journey complete | PASS | Clear concept orientation page before moving to specific pipeline setup pages |
| 7.6 | Cross-tab graduation paths exist | INFO | Line 117 links to `v2/gateways/resources/technical/orchestrator-offerings` — BROKEN (not in docs.json). The intended cross-tab link to the gateway capability discovery documentation is correct in concept but broken in implementation |
| 7.7 | File in correct lane | PASS | Published content in `v2/orchestrators/` |
| 7.8 | File naming conventions | PASS | `ai-inference-operations.mdx` — no incorrect prefix |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: FAIL** — Failing check: 7.6 (broken cross-tab link; linked to from check 8.1)

---

## Category 8 — LINKS & RENDERING

**Internal links to verify against docs.json:**
- `/v2/orchestrators/guides/deployment-details/dual-mode-configuration` → docs.json line 2887: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` → docs.json line 2899: CONFIRMED (appears 3 times)
- `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` → docs.json line 2901: CONFIRMED (appears twice)
- `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` → docs.json line 2903: CONFIRMED (appears as "Model Hosting and VRAM" and "Model and VRAM Reference")
- `/v2/gateways/resources/technical/orchestrator-offerings` → docs.json: NOT FOUND — BROKEN LINK
- `/v2/developers/concepts/ai-on-livepeer` → docs.json line 2487: CONFIRMED

**External links:**
- `https://www.youtube.com/embed/UKWdvJBqrNw` — YouTube embed in Frame
- `https://www.youtube.com/watch?v=UKWdvJBqrNw` — YouTube watch link
- `https://www.youtube.com/watch?v=7a6kBrL0RYg` — YouTube watch link
- `https://github.com/facebookresearch/segment-anything-2` — GitHub
- `https://huggingface.co/SG161222/RealVisXL_V4.0_Lightning` — HuggingFace
- `https://huggingface.co/openai/whisper-large-v3` — HuggingFace
- `https://www.livepeer.cloud/self-hosting-livepeers-llm-pipeline-deploying-an-ollama-based-gpu-runner-for-ai-orchestrators/` — Cloud SPE blog
- `https://github.com/livepeer/comfystream` — GitHub
- `https://tools.livepeer.org` (implicit via `explorer.livepeer.org` reference in line 390) — live site
- `https://explorer.livepeer.org` — live site
- `https://tools.livepeer.cloud/ai/network-capabilities` — live tool

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | FAIL | `/v2/gateways/resources/technical/orchestrator-offerings` NOT found in docs.json — broken internal link |
| 8.2 | All external links live | INFO | Multiple external links not auto-tested; Cloud SPE blog URL is long and domain-specific — volatility risk |
| 8.3 | All snippet imports resolve | PASS | `StyledTable`/`TableRow`/`TableCell`, `CustomDivider`, `BorderedBox` — standard confirmed paths |
| 8.4 | All images load | N/A | No inline image files; YouTube embed via iframe |
| 8.5 | Page renders without error | PASS | All 3 imports used; no unclosed tags; iframe appears complete. BorderedBox+AccordionGroup nesting appears valid |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | JSX comments invisible; no visible placeholder text |

**Category 8 verdict: FAIL** — Failing check: 8.1 (broken internal link)

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: published` without veracity pass, broken link, or resolved frontmatter fields — no sign-off record |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions requiring registry entry identified |
| 9.3 | Gate prerequisites met | FAIL | Per tab-status.md: Orchestrators IA not approved, terminology not locked. `status: published` with broken link and open veracity items is premature |
| 9.4 | Phase ordering respected | INFO | Cannot confirm without session history |
| 9.5 | Findings gathered before fixes | N/A | Review only |
| 9.6 | Feedback routed | N/A | Review only |

**Category 9 verdict: FAIL** — Failing checks: 9.1, 9.3

---

## Cross-Category Connections

- **C1:** Em-dash in `description` (1.11) and em-dashes in all 10 Accordion `title` props (P30/P48) share the same policy violation. Both must be fixed.
- **C2:** `status: published` + absent `veracityStatus` (1.8, 6.6) = same root: not through veracity pass. Fix as one: `veracityStatus: unverified`, `status: draft`.
- **C3:** Missing `complexity`, `lifecycleStage`, `industry`, `niche` (1.1, 1.6, 1.7, 1.9, 1.10) are co-located in frontmatter. Resolve as one batch edit.
- **C4:** SAM2 VRAM inconsistency (6.1, 6.4, 6.9) is a cross-page blocking issue shared with `workload-options.mdx`. Cannot be resolved on this page alone — requires coordinated fix across both pages with SME input.
- **C5:** Broken link `/v2/gateways/resources/technical/orchestrator-offerings` (4.10/7.6/8.1) = same root cause. Three check IDs, one fix: replace with a valid cross-tab link or remove if the target page does not exist.
- **C6:** "What you build and what the network supplies" section (2.4 FAIL): the broken parallel structure (imperative verbs in the "network supplies" list) also contributes to the heading score failure for that H2 (3.1). The section is confusing from both copy and heading perspectives.
- **C7:** Duplicate "Batch AI Setup" cards in "Next steps" CardGroup (4.4 FAIL). The duplication also creates an information architecture issue — the reader sees the same destination twice in the same CardGroup.

---

## Blocking Decisions

**BD-1:** SAM2 VRAM — 12 GB (this page) vs 6 GB (`workload-options.mdx`). Cross-page inconsistency requiring SME resolution with primary source (SAM2 model card or go-livepeer AI runner specs). Neither page can be published until resolved.

**BD-2:** `/v2/gateways/resources/technical/orchestrator-offerings` — this page does not exist in docs.json. The intended cross-tab link to the gateway capability discovery documentation needs either: (a) the page to be created and added to docs.json, or (b) replacement with an existing page that covers capability discovery from the gateway perspective. Requires team input.

---

## Verdict Summary

**Overall: NEEDS WORK**

**22 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.4, 3.7, 4.4, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 7.6, 8.1, 9.1, 9.3**

---

## Prioritised Fix List

**F-01** — CRITICAL — Broken internal link: `/v2/gateways/resources/technical/orchestrator-offerings`
This page does not exist in docs.json. The link at line 115 is broken. Options: (a) create the target page, (b) replace with the closest existing gateway page, (c) remove the link. See BD-2.
Until resolved: remove the link reference from line 115 and note the missing cross-tab resource.

**F-02** — CRITICAL — SAM2 VRAM inconsistency across pages (12 GB here vs 6 GB in workload-options)
Same root as workload-options F-01. Add REVIEW flag on the `segment-anything-2` hardware table row.
Proposed: `{/* REVIEW: SAM2 VRAM — 12 GB here vs 6 GB in workload-options.mdx. Verify against SAM2 model card and go-livepeer AI runner hardware requirements before publishing. */}`

**F-03** — CRITICAL — `status: published` + absent `veracityStatus` (P39)
Change `status: published` to `status: draft`. Add `veracityStatus: unverified`.

**F-04** — CRITICAL — Missing required frontmatter fields
Add to frontmatter block:
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: evaluate` — confirm before applying

**F-05** — CRITICAL — Missing required `industry` and `niche` fields
Proposed:
- `industry: [AI, technical]` — confirm before applying
- `niche: [AI, infrastructure]` — confirm before applying

**F-06** — HIGH — Em-dashes in all 10 Accordion `title` props (P30/P48)
All 10 AI pipeline Accordion titles use the pattern `[pipeline] — [description]`. Replace em-dash with colon.
Proposed pattern: `[pipeline]: [description]`
Example: `text-to-image: Generate images from text prompts`
Apply to all 10 accordion titles.

**F-07** — HIGH — Em-dash in `description` field (P30)
Replace: "How AI inference works on the Livepeer network — pipeline types, the batch vs live-video distinction, hardware requirements, and how jobs flow from application to your GPU node."
With: "How AI inference works on the Livepeer network: pipeline types, the batch vs live-video distinction, hardware requirements, and how jobs flow from application to your GPU node." (165 chars — still exceeds 160)
Trim to ≤160: "How AI inference works on the Livepeer network: pipeline types, batch vs live-video distinction, hardware requirements, and job flow from application to GPU node." (162 chars)
Further trim: "AI inference on the Livepeer network: pipeline types, batch vs live-video distinction, hardware requirements, and how jobs reach your GPU node." (143 chars) — confirm before applying.

**F-08** — HIGH — Broken parallel structure in "What you build and what the network supplies" section (check 2.4)
The list under "The network already supplies:" uses imperative verbs ("Build a marketplace or API", "Implement authentication or billing") that read as reader instructions. Rewrite as noun phrases.
Proposed replacement:
```
**The network already supplies:**
- Marketplace and job routing infrastructure
- Authentication and billing
- Service discovery and orchestrator selection
- Gateway brand distribution and buyer relationships
```

**F-09** — HIGH — Duplicate "Batch AI Setup" cards in "Next steps" CardGroup
Lines 432 and 441 both link to `diffusion-pipeline-setup` with title "Batch AI Setup". Remove one. The second card (icon="rocket") appears to have been intended as a different page (upgrade path for existing transcoding orchestrators per JSX comment). Replace with the correct target page or remove.

**F-10** — HIGH — Heading "Next steps" scores 12/25 and is Avoid-tier (check 3.2)
Rename to domain-anchored heading. Proposed: `Setup Paths` or `Configure Your Pipeline`

**F-11** — HIGH — Heading "Comparison" scores 14/25 (check 3.1)
Rename to domain-anchored concept heading. Proposed: `Batch vs Live-video AI`

**F-12** — HIGH — Heading "The two workload types" scores 18/25 (check 3.1)
Rename to domain-anchored heading. Proposed: `Batch AI and Live-video AI`

**F-13** — HIGH — Heading "What you build and what the network supplies" scores 16/25 (check 3.1)
Rename to more precise heading. Proposed: `Operator Responsibilities`

**F-14** — HIGH — Heading "Watch: AI on Livepeer" scores 17/25 (check 3.1)
Rename to concept-anchored heading. Proposed: `Livepeer AI Video Resources`

**F-15** — HIGH — Heading "Network participation" scores 19/25 (just below threshold, check 3.1)
Rename to more specific heading. Proposed: `Verify Pipeline Registration`

**F-16** — MEDIUM — "Already running video?" Accordion title — question heading prohibited per CLAUDE.md
Rename to non-question form. Proposed: `Existing video node upgrade`

**F-17** — MEDIUM — No REVIEW flags on unverified claims
Add REVIEW JSX flags for: `OrchestratorInfo` field names (verify against go-livepeer source), VRAM figures without primary source citations, Cloud SPE blog post URL (staleness risk).
