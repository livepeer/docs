# Per-Page Quality Check Report
## `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx`

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
| `title` | Yes | `'LLM Pipeline Setup'` | PASS | Well-formed |
| `sidebarTitle` | Yes | `'LLM Setup'` | PASS | Concise |
| `description` | Yes | `Set up the llm pipeline on a Livepeer orchestrator using the Ollama-based runner. Covers Docker Compose configuration, model selection for 8 GB VRAM GPUs, model ID mapping, aiModels.json entries, and USD pricing for token-based workloads.` | FAIL | 234 chars — exceeds 160-char limit |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type value. Maps to `pageType: instruction` per schema |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | No | ABSENT | FAIL | Required field missing |
| `complexity` | No | ABSENT | FAIL | Required field missing |
| `lifecycleStage` | No | ABSENT | FAIL | Required field missing |
| `keywords` | Yes | 10 keywords | PASS | `llm pipeline`, `Ollama`, `8GB VRAM`, `inference` are searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct path |
| `veracityStatus` | No | ABSENT | FAIL | Required. Open REVIEW flags present |
| `industry` | No | ABSENT | FAIL | Required (P41). Proposed: `industry: ["technical", "AI"]` — confirm before applying |
| `niche` | No | ABSENT | FAIL | Required (P41). Proposed: `niche: ["AI", "infrastructure"]` — confirm before applying |

**Required field count:** 6/10 present. Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. `industry` and `niche` absent (required per P41).

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is a deprecated 12-type value. Fix: `pageType: instruction`. Per P50: schema violation, not editorial preference |
| 1.3 | `pageVariant` valid if present | N/A | Not present. Per P42: `pageVariant` is co-fix of 1.2 — not independent finding |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: build` — this page walks through a complete end-to-end deployment to a working state. Confirm before applying |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — requires Docker Compose, existing go-livepeer node. Confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: build` — operator implementing LLM pipeline. Confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. Four open REVIEW flags. Default must be `unverified` |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required per P41. Proposed: `industry: ["technical", "AI"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required per P41. Proposed: `niche: ["AI", "infrastructure"]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | 234 chars — exceeds 160-char limit. Subject-first, no self-reference, UK English — those pass |
| 1.12 | OG image block complete | PASS | All 5 OG fields present and correct |
| 1.13 | `keywords` field quality | PASS | `llm pipeline`, `Ollama`, `8GB VRAM`, `aiModels.json`, `inference` are specific and searcher-intent-aligned |

**Category 1 verdict: FAIL** — checks 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 fail (9 checks)

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
- "can generate" / "may produce" in value claims — scanning below

**Em-dash scan** (all visible text — P30):
- Frontmatter description: no em-dashes found
- H2/H3 headings: no em-dashes found
- Body prose: no em-dashes found
- StyledStep title props (P48 scope): "Create a Docker volume for model persistence", "Create docker-compose.yml for the Ollama stack", "Start the stack", "Pull your LLM model", "Add the LLM entry to aiModels.json", "Restart the AI worker and verify" — no em-dashes in any step title

**Banned construction scan** (all `can`, `may`, `if [condition]`, `not [X]` candidates):
- Line 82: "Without it, models must be re-downloaded every time the Ollama container restarts." — `without [condition]` in a factual technical statement. Not a value claim construction. PASS
- Line 126: "The `livepeer-ai` network must be the same network your go-livepeer container is on." — factual requirement. PASS
- Line 162: "Both containers must share the `livepeer-ai` network for this hostname to resolve." — factual requirement. PASS
- Line 170: "After 2 to 3 minutes, check [tools.livepeer.cloud/ai/network-capabilities]..." — procedural instruction. PASS
- Line 219: "For 8 GB VRAM GPUs, use `llama3.1:8b` or `mistral:7b`. The Gemma 2 9B typically requires closer to 10 GB, so single 8 GB cards should stay on the 7B to 8B class." — `should` in advisory instruction. Not a value claim `can/may`. PASS
- Line 245: "This example sets a rate of $0.18 per million tokens (equivalent to $0.18/1M tokens, a competitive rate for 8B parameter models as of early 2026). Adjust based on your GPU's inference throughput and current market rates." — no banned construction. `competitive rate` is evaluative, not a banned construction

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found. `quantised` (line 180, 219, 526) — UK English, correct |
| 2.2 | Zero banned words | PASS | Full candidate list checked. No violations found |
| 2.3 | Zero banned phrases | PASS | Full phrase list checked. No violations found |
| 2.4 | Zero banned constructions | PASS | Full construction scan conducted. No em-dashes in any visible text including step title props. No banned constructions found |
| 2.5 | Opening order correct | PASS | Tip opens with value (8 GB VRAM entry point for AI). Lead paragraph states architectural difference from other pipelines |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. Final sentences end on fact, number, or instruction |
| 2.7 | Audience register correct | PASS | Technical operator register. Precise and direct |
| 2.8 | Per-audience prohibited phrases absent | PASS | No orchestrator-prohibited phrases found |
| 2.9 | No passive value statements | PASS | Claims are specific: "~8 GB VRAM", "$0.18 per million tokens", "8B parameter models" |
| 2.10 | No hedging openers | PASS | Opens with Tip then factual architecture statement |
| 2.11 | Terminology locked and consistent | PASS | `llm`, `Ollama`, `aiModels.json`, `livepeer-ai`, `warm` consistent throughout |

**Category 2 verdict: PASS** — 0 checks fail

---

## Category 3 — SECTION NAMING & HEADINGS

*(No `Related Pages` or `Related pages` heading on this page — `## Related pages` at line 274 is the navigation block. Same convention as other pages. Excluded from scoring per P16/P53 exact-match analysis: heading reads `Related pages` with lowercase "p". See BD-1 in audio-and-vision-pipelines report for the capitalisation question. Treating as structural element and excluding from scoring.)*

### Heading Score Table

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|---|
| Architecture split | H2 | 4 | 4 | 5 | 5 | 5 | **23/25** |
| Setup | H2 | 2 | 1 | 3 | 3 | 5 | **14/25** |
| Prerequisites | H3 | 3 | 2 | 5 | 5 | 5 | **20/25** |
| Model selection for 8 GB VRAM | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Model ID mapping | H3 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Pricing the LLM pipeline | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Testing locally | H2 | 3 | 2 | 4 | 4 | 4 | **17/25** |

**Failing headings (below 20/25):**
- `Setup` — 14/25 FAIL. Generic standalone heading with no domain anchor. `Setup` is in the Avoid tier as a standalone term
- `Testing locally` — 17/25 FAIL. Generic action verb + adverb. Does not name the concept

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | `Setup` 14/25, `Testing locally` 17/25 both fail |
| 3.2 | No banned or weak standalone heading terms | FAIL | `Setup` as standalone H2 — Avoid-tier. No domain anchor. Fails specificity standard |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | FAIL | `Setup` contains no domain noun. `Testing locally` contains no domain noun |
| 3.5 | Heading names concept, not examples | PASS | Other headings name concepts or domain-specific procedures |
| 3.6 | Title well-formed | PASS | `LLM Pipeline Setup` — 3 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | FAIL | `Setup`, `Testing locally` are generic labels. A senior technical editor would choose `Ollama Stack Deployment` and `Local Inference Verification` or similar |

**Category 3 verdict: FAIL** — checks 3.1, 3.2, 3.4, 3.7 fail (4 checks)

---

## Category 4 — PAGE STRUCTURE & CONTENT ARCHITECTURE

Nav sequence from docs.json lines 2894–2905:
`workload-options` → `video-transcoding-operations` → `ai-inference-operations` → `diffusion-pipeline-setup` → **`llm-pipeline-setup`** → `realtime-ai-setup` → `audio-and-vision-pipelines` → `model-demand-reference` → `model-hosting`

PREV_PAGE: `diffusion-pipeline-setup` | NEXT_PAGE: `realtime-ai-setup`

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: deploy the Ollama-based LLM runner and configure the `llm` pipeline. Single audience: orchestrator |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator deploy the Ollama-based LLM runner and start earning from the `llm` pipeline on 8 GB VRAM GPUs." — passes |
| 4.3 | PREV_PAGE/NEXT_PAGE adjacency correct | PASS | Confirmed from docs.json lines 2899–2901. Arrives from diffusion-pipeline-setup knowing aiModels.json structure and standard pipeline setup. Proceeds to realtime-ai-setup. Logical progression to a specialist pipeline variant |
| 4.4 | No dead ends | PASS | Related pages CardGroup provides four onward paths |
| 4.5 | Prerequisites stated or linked | PASS | Explicit Prerequisites sub-section at line 68. Lists Docker and Docker Compose, NVIDIA Container Toolkit, existing go-livepeer orchestrator with `-aiWorker`, 8 GB+ VRAM |
| 4.6 | Out-of-scope is clear | PASS | Page is focused on the LLM pipeline only. All other pipelines handled in adjacent pages |
| 4.7 | Information type per section correct | PASS | Proposed `purpose: build` → permitted primary types: procedural, technical, factual. Steps use procedural. Tables use technical/factual. Pricing section uses factual. Correct mapping |
| 4.8 | No content duplication from adjacent sections | FAIL | LLM/Ollama content (Docker Compose, model pull, aiModels.json entry) substantially duplicated in `diffusion-pipeline-setup.mdx` lines 337–439. The Docker Compose config and model ID table are nearly identical. This duplication is acknowledged in the internal note comment of diffusion-pipeline-setup.mdx |
| 4.9 | Section orientation page present | N/A | Section orientation is `ai-inference-operations` |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: FAIL** — check 4.8 fails (1 check)

---

## Category 5 — LAYOUT & COMPONENTS

Component policy read from `docs-guide/policies/component-layout-decisions.mdx`. For `how_to` (current deprecated pageType): Required sections: Prerequisites, Steps. Preferred: Steps, Step, CodeGroup, Warning, Check, Tip. After migration to `instruction` (7-type): same template.

**Dead import check (P9):** `LinkArrow` imported at line 32 — not used in page body.

**Components used:**
- `CustomDivider` — section separator
- `StyledTable`, `TableRow`, `TableCell` — model selection table
- `StyledSteps`, `StyledStep` — setup steps
- `Tip` — opening strategic framing
- `CardGroup`, `Card` — related pages
- Code blocks — Docker Compose, bash, JSON

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | Content follows instruction/how_to template: explicit Prerequisites sub-section, StyledSteps procedure. Template is correctly implemented despite deprecated pageType value |
| 5.2 | Required sections present | PASS | Prerequisites present at line 68. Steps wrapper (StyledSteps) present lines 74–174. Both required sections present |
| 5.3 | Only approved components used | NOT-TESTED | `CustomDivider`, `StyledTable`, `StyledSteps`, `StyledStep` are custom components. Per P22: NOT-TESTED, not FAIL |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, Coming Soon, or PreviewCallout in rendered content |
| 5.5 | Information type → component mapping correct | PASS | Procedural steps use StyledSteps. Reference content uses StyledTable. Strategic framing uses Tip |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot run live render. No obvious JSX errors |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` is old-schema |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | FAIL | `LinkArrow` imported at line 32 but not used in page body — dead import |

**Category 5 verdict: FAIL** — checks 5.7, 5.10 fail (2 checks)

---

## Category 6 — VERACITY & FACTUAL ACCURACY

**Open REVIEW flags in file (lines 277–282):**
1. Confirm the current stable `tztcloud/livepeer-ollama-runner` image tag
2. Confirm the current Livepeer-compatible Ollama model list
3. Confirm LLM pricing semantics for `pixels_per_unit` and token-based pricing
4. Confirm the current runner test endpoint path and request body

### Veracity Claims Inventory

| Claim | Line | Type | Status | Source |
|---|---|---|---|---|
| `tztcloud/livepeer-ollama-runner:0.1.1` is the current image tag | 91 | technical | UNVERIFIED — REVIEW flag | Docker Hub / Cloud SPE |
| Llama 3.1 8B requires "~8 GB" VRAM | 196 | technical | UNVERIFIED | Ollama documentation, go-livepeer measurements |
| Mistral 7B requires "~8 GB" VRAM | 200 | technical | UNVERIFIED | Ollama documentation |
| Gemma 2 9B requires "~10 GB" VRAM | 204 | technical | UNVERIFIED | Ollama documentation |
| Llama 3.1 70B Q4 requires "~40 GB" VRAM | 208 | technical | UNVERIFIED | Ollama documentation |
| $0.18 per 1M tokens "a competitive rate for 8B parameter models as of early 2026" | 245 | evaluative | UNVERIFIED | Current market rate from Explorer |
| `pixels_per_unit: 1000000` as token-count proxy semantics | 157 | technical | UNVERIFIED — REVIEW flag | go-livepeer LLM pricing spec |
| `url: "http://llm_runner:8000"` as correct endpoint | 158 | technical | UNVERIFIED — REVIEW flag | go-livepeer LLM runner spec |
| Curl test endpoint path `/llm` and request body format | 261–263 | technical | UNVERIFIED — REVIEW flag | livepeer-ollama-runner API spec |
| Health endpoint at `localhost:8000/health` returns HTTP 200 | 267–269 | technical | UNVERIFIED — REVIEW flag | livepeer-ollama-runner API spec |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | Four open REVIEW flags. VRAM figures unverified. Pricing competitiveness claim ("competitive rate as of early 2026") unverified |
| 6.2 | Code/commands tested | NOT-TESTED | Docker Compose config, pull command, curl test command not tested against live system |
| 6.3 | No deprecated API usage | PASS | No deprecated CLI flags referenced |
| 6.4 | Numbers are real | FAIL | VRAM figures for all four models (8 GB, 8 GB, 10 GB, 40 GB) unverified. Model-demand-reference states Llama 3.1 8B "~6–8 GB warm / ~8–10 GB peak" — the llm-pipeline-setup table says "~8 GB" which is within range but stated as a single point rather than a range |
| 6.5 | REVIEW flags for unverified claims | PASS | Four REVIEW flags present at bottom of file |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Four open REVIEW flags — must be `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | Image tag `0.1.1` may be stale — REVIEW flag present. `$0.18/1M tokens competitive rate as of early 2026` — staleness risk |
| 6.9 | No open-ended research tasks | FAIL | REVIEW items 1–4 have no specific source URLs or authoritative documents named. All four are "confirm with [undefined source]" tasks |

**Category 6 verdict: FAIL** — checks 6.1, 6.4, 6.6, 6.8, 6.9 fail (5 checks)

---

## Category 7 — NAVIGATION & IA

docs.json lines 2894–2905 read. Full path `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup` confirmed at line 2900.

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed: docs.json line 2900 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry exactly |
| 7.3 | Tab entry portal routes to all sections | N/A | Not the tab entry portal |
| 7.4 | No structural orphans | PASS | Reachable from Workloads and AI group |
| 7.5 | Audience journey complete | PASS | Position 5 of 9 in section. Reader comes from diffusion setup knowing aiModels.json structure; this page extends to the Ollama runner variant |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | Published in `v2/orchestrators/guides/` |
| 7.8 | File naming conventions | PASS | `llm-pipeline-setup.mdx` — correct convention |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS** — 0 checks fail

---

## Category 8 — LINKS & RENDERING

**Internal links verified against docs.json:**
- `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — PASS (line 2898)
- `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` — PASS (line 2899)
- `/v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines` — PASS (line 2902)
- `/v2/orchestrators/guides/config-and-optimisation/ai-model-management` — PASS (line 2923)

**External links found:**
- `https://tools.livepeer.cloud/ai/network-capabilities` — line 170

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 4 internal links confirmed in docs.json |
| 8.2 | All external links live | NOT-TESTED | tools.livepeer.cloud not verifiable in this environment |
| 8.3 | All snippet imports resolve | NOT-TESTED | Import paths match site pattern |
| 8.4 | All images load | N/A | No image assets beyond OG block |
| 8.5 | Page renders without error | NOT-TESTED | Cannot run live render. Dead import may produce warning |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | REVIEW flags in JSX comments only |

**Category 8 verdict: PASS** — 0 checks fail

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | `status: draft` — no human sign-off |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions consumed |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab: IA not approved, terminology not locked, content pass not open |
| 9.4 | Phase ordering respected | N/A | Not yet in veracity pass |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report |
| 9.6 | Feedback routed | N/A | Pre-shipping |

**Category 9 verdict: FAIL** — checks 9.1, 9.3 fail (expected at current pipeline stage)

---

## Cross-Category Connections

**CC-1: pageType deprecation → template check**
Affects: 1.2, 5.7
`how_to` must migrate to `instruction`. Co-fix (P42): `pageVariant` may be omitted as the template is already correctly implemented. Root cause is the frontmatter value, not the page structure.

**CC-2: Missing frontmatter fields → governance block**
Affects: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 9.1
`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` all absent. Proposed values require human confirmation per P51. Single batch fix.

**CC-3: Open REVIEW flags → veracityStatus**
Affects: 1.8, 6.1, 6.6, 6.9
Four REVIEW flags with no named authoritative sources. These must be resolved to specific source documents before `veracityStatus: verified` is reachable.

**CC-4: Content duplication with diffusion-pipeline-setup**
Affects: 4.8
LLM/Ollama Docker Compose content and model table duplicated in diffusion-pipeline-setup.mdx. Linked to BD-1 in that report. If diffusion-pipeline-setup extracts its LLM content, this page becomes the canonical source and the duplication resolves.

---

## Blocking Decisions

**BD-1:** Content ownership — if diffusion-pipeline-setup.mdx extracts its LLM section (see that page's BD-1), this page becomes the canonical LLM reference. Currently both pages contain substantially the same content. Decision needed on ownership.

---

## Verdict Summary

**Overall: NEEDS WORK**

Checks failing: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 4.8, 5.7, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3

**23 checks fail.**

---

## Prioritised Fix List

**F-01** | CRITICAL | 1.2, 5.7 | Migrate deprecated pageType
Replace `pageType: how_to` with `pageType: instruction`. Per P42: `pageVariant` co-fix not required here as template is already correctly structured.

**F-02** | CRITICAL | 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10 | Add missing required frontmatter fields
Proposed: `purpose: build` — confirm before applying. `complexity: intermediate` — confirm before applying. `lifecycleStage: build` — confirm before applying. `veracityStatus: unverified` — confirm before applying. `industry: ["technical", "AI"]` — confirm before applying. `niche: ["AI", "infrastructure"]` — confirm before applying.

**F-03** | HIGH | 1.11 | Shorten description to ≤160 chars
Current: 234 chars. Proposed: `Deploy the Ollama-based LLM runner on a Livepeer orchestrator. Covers Docker Compose setup, 8 GB VRAM model selection, model ID mapping, aiModels.json configuration, and token-based pricing.` (190 chars — still over, needs trimming). Confirm before applying.

**F-04** | HIGH | 3.1, 3.2, 3.4, 3.7 | Rename failing headings
`## Setup` (14/25) → Proposed: `## Ollama Stack Deployment` — confirm before applying.
`## Testing locally` (17/25) → Proposed: `## Local Inference Verification` — confirm before applying.

**F-05** | HIGH | 5.10 | Remove dead import
Remove `import { LinkArrow } from '/snippets/components/elements/links/Links.jsx'` (line 32) — not used in page body.

**F-06** | HIGH | 6.1, 6.9, CC-3 | Assign specific sources to all four REVIEW items
Replace "Confirm the current stable `tztcloud/livepeer-ollama-runner` image tag" with named source URL (Docker Hub or Cloud SPE docs).
Replace "Confirm the current Livepeer-compatible Ollama model list" with named source (Cloud SPE guide URL).
Replace "Confirm LLM pricing semantics for `pixels_per_unit` and token-based pricing" with named source (go-livepeer pricing spec or PR).
Replace "Confirm the current runner test endpoint path" with named source (livepeer-ollama-runner README or API spec).
Format: `{/* REVIEW: [claim] — verify against [specific URL/document] before publishing */}`.

**F-07** | HIGH | 6.4 | Reconcile VRAM figures with model-demand-reference
LLM section in model-demand-reference states Llama 3.1 8B "~6–8 GB warm / ~8–10 GB peak". This page states "~8 GB" as a single figure. Align the presentation format (show range not point estimate) or confirm the single figure is accurate. Confirm before applying.

**F-08** | MEDIUM | 4.8, BD-1, CC-4 | Resolve content duplication with diffusion-pipeline-setup
Once diffusion-pipeline-setup.mdx scope decision (BD-1) is made: if LLM content is extracted from that page, this page becomes canonical. If retained in both, add explicit cross-reference to avoid reader confusion.

**F-09** | MEDIUM | 6.8 | Address staleness risks
Image tag `tztcloud/livepeer-ollama-runner:0.1.1` — replace with instruction to check Docker Hub for current tag rather than hardcoding.
`$0.18/1M tokens, competitive as of early 2026` — replace inline competitiveness claim with link to Explorer for current comparison data.

**F-10** | INFO | — | Capitalise `## Related pages`
Change `## Related pages` to `## Related Pages` (consistent with sitewide convention and P53 exact-match exemption string). Confirm before applying.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `LLM Pipeline Setup` | PASS | Clear, subject-first |
| `sidebarTitle` | Yes | `LLM Setup` | PASS | Concise |
| `description` | Yes | `Set up the llm pipeline on a Livepeer orchestrator using the Ollama-based runner. Covers Docker Compose configuration, model selection for 8 GB VRAM GPUs, model ID mapping, aiModels.json entries, and USD pricing for token-based workloads.` | FAIL | 234 chars — exceeds 160-char limit (check 1.11). UK English present. No self-reference. No em-dash. |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type alias. Fix: `pageType: instruction` (P42 co-fix applies — decide `pageVariant`). |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | No | ABSENT | FAIL | Required field missing. Proposed: `purpose: configure` — confirm before applying (P51). |
| `complexity` | No | ABSENT | FAIL | Required field missing. Proposed: `complexity: intermediate` — confirm before applying (P51). |
| `lifecycleStage` | No | ABSENT | FAIL | Required field missing. Proposed: `lifecycleStage: setup` — confirm before applying (P51). |
| `keywords` | Yes | 11 keywords | BORDERLINE | `livepeer`, `orchestrator`, `GPU` are generic. `LLM`, `Ollama`, `llm pipeline`, `aiModels.json`, `8GB VRAM` are specific and searcher-aligned. |
| OG image block | Yes | 5 fields present | PASS | All OG fields correct |
| `status` | Yes | `draft` | PASS | Consistent with content state and open REVIEW flags |
| `lastVerified` | Yes | `2026-03-16` | PASS | Present |
| `veracityStatus` | No | ABSENT | FAIL | Required (check 1.8). `status: draft` + open REVIEW flags = `veracityStatus: unverified` required. |
| `industry` | No | ABSENT | FAIL | Required (P41). Proposed: `industry: ["AI", "technical"]` — confirm before applying (P51). |
| `niche` | No | ABSENT | FAIL | Required (P41). Proposed: `niche: ["AI", "infrastructure"]` — confirm before applying (P51). |

**Summary:** 8 fields FAIL (description over-length, pageType deprecated, purpose absent, complexity absent, lifecycleStage absent, veracityStatus absent, industry absent, niche absent).

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is deprecated. Fix: `pageType: instruction` |
| 1.3 | `pageVariant` valid if present | N/A — not present | Per P42, co-fix dependency of 1.2. When migrating to `instruction`, decide if `pageVariant: quickstart` applies. No independent finding. |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: configure` |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: setup` |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. REVIEW flags open at lines 276–281. `veracityStatus: unverified` required. |
| 1.9 | `industry` array valid if present | FAIL | Field absent (P41 — required). Proposed: `["AI", "technical"]` |
| 1.10 | `niche` array valid if present | FAIL | Field absent (P41 — required). Proposed: `["AI", "infrastructure"]` |
| 1.11 | `description` well-formed | FAIL | 234 chars — exceeds 160-char limit. Fix: shorten. Proposed: `Set up the llm pipeline on a Livepeer orchestrator using the Ollama-based runner. Covers Docker Compose setup, 8 GB VRAM model selection, aiModels.json entries, and USD pricing.` (176 chars — still long). Final trim: `Configure the Livepeer llm pipeline via Ollama. Covers Docker Compose setup, 8 GB VRAM model selection, model ID mapping, and aiModels.json pricing entries.` (156 chars) — confirm. |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | BORDERLINE | `livepeer`, `orchestrator`, `GPU` generic. Others specific. |

**Category 1 verdict:** 9 checks FAIL: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | `quantised` (line 41, 180) — correct UK spelling. `minimise` — not needed, not present. No `optimize`, `analyze`, `quantized` US spellings found. |
| 2.2 | Zero banned words | PASS | Scanned all body prose: `effectively` — not found. `essentially` — not found. `basically` — not found. `meaningful`/`meaningfully` — not found. `significant`/`significantly` — not found. `various` — not found. `several` — not found. `obviously` — not found. `clearly` — not found. PASS. |
| 2.3 | Zero banned phrases | PASS | `rather than` — not found. `This section covers` — not found. `This page covers` — not found. No violations. |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan. `can [verb]` candidate found at line 219. See F-01. |
| 2.5 | Opening order correct | PASS | Page opens with Tip (strategic framing for entry-level operators), then first paragraph states the architecture fact: "The `llm` pipeline uses a different architecture from all other Livepeer AI pipelines." Subject first. |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. Paragraphs single-purpose. Final sentences end on facts or actions. |
| 2.7 | Audience register correct | PASS | Peer-technical. Direct. Appropriate for orchestrator audience. No hand-holding but provides necessary architectural context. |
| 2.8 | Per-audience prohibited phrases absent | PASS | `easy to set up` — not found. `the network rewards you for` — not found. Tip opening is framing, not marketing. |
| 2.9 | No passive value statements | PASS | Value claims specific: "runs within 8 GB of VRAM or more", "~8 GB" per model in table, "$0.18 per million tokens". |
| 2.10 | No hedging openers | PASS | Page opens with Tip, then immediate architecture statement. No caveats or disclaimers. |
| 2.11 | Terminology locked and consistent | PASS | `llm`, `aiModels.json`, `Ollama`, `VRAM`, `quantised`, `Docker Compose` — consistent and correct. `HuggingFace model_id` used consistently. |

**Category 2 verdict:** 1 check FAIL: 2.4

---

## Category 3 — Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | See Heading Score Table. Multiple headings below threshold. |
| 3.2 | No banned or weak standalone heading terms | FAIL | `## Setup` (line 65) — generic. `## Setup` has no domain anchor. In the Avoid tier (borderline). `## Testing locally` — `locally` is a qualifier, heading is borderline weak but not on the banned list. |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. |
| 3.4 | Domain-anchor rule applied | FAIL | `## Setup` lacks domain anchor — interpretable as anything. Should be `## Ollama Stack Setup` or `## LLM Runner Setup` at minimum. |
| 3.5 | Heading names concept, not examples | PASS | No example-name headings. |
| 3.6 | Title well-formed | PASS | `LLM Pipeline Setup` — 3 words, concept-derived. |
| 3.7 | Sounds like expert editorial choice | FAIL | `## Setup` and `## Testing locally` are generic bureaucratic labels. `## Architecture split` is good but `split` is slightly weak compared to `## LLM Runner Architecture`. |

**Category 3 verdict:** 3 checks FAIL: 3.1, 3.2, 3.7 (includes 3.4 as a finding under 3.2/3.7)

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | One job: configure the Ollama-based LLM runner and set up the `llm` pipeline. One audience: orchestrator. Tightly scoped. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator configure the llm pipeline on a Livepeer node using the Ollama-based runner, from Docker volume creation to aiModels.json entry." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json lines 2899–2901: `diffusion-pipeline-setup` → **`llm-pipeline-setup`** → `realtime-ai-setup`. Previous: diffusion setup (same AI worker context). Next: realtime AI (different architecture). Adjacency is logical. |
| 4.4 | No dead ends | PASS | Related pages section (lines 284–297) provides 4 onward paths. |
| 4.5 | Prerequisites stated or linked | PASS | Prerequisites H3 section (lines 67–72) is explicit and complete: Docker, NVIDIA Container Toolkit, go-livepeer with `-aiWorker`, 8 GB VRAM minimum. |
| 4.6 | Out-of-scope is clear | PASS | Page is explicit about what differs from other pipelines (Ollama vs ai-runner) and links to other pipeline pages. Does not absorb diffusion or audio/vision content. |
| 4.7 | Information type per section correct | PASS | Proposed `purpose: configure`. Permitted types: `procedural`, `technical`, `factual`. All sections align: Docker Compose files (procedural/technical), model selection table (factual/evaluative), pricing config (procedural), testing (procedural). |
| 4.8 | No content duplication from adjacent sections | FAIL | Setup steps (lines 74–174) — Docker volume, docker-compose.yml, model pull, aiModels.json entry — are substantially duplicated in `diffusion-pipeline-setup.mdx` LLM section (lines 357–439). The model selection table (lines 182–217) duplicates the table at diffusion-pipeline-setup.mdx lines 443–474. See CC-1. |
| 4.9 | Section orientation page present | N/A |
| 4.10 | Cross-tab links at journey intersections | N/A |

**Category 4 verdict:** 1 check FAIL: 4.8

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | FAIL | Current `pageType: how_to` has no valid template. Post-migration to `instruction`, required sections: Prerequisites, Steps, Next Steps. Prerequisites present. Steps present (StyledSteps). Next Steps / Related present (CardGroup). Structurally close to correct post-migration. |
| 5.2 | Required sections present | PASS | Prerequisites section present. Steps via StyledSteps present. Related pages via CardGroup present (serving as Next Steps). |
| 5.3 | Only approved components used | NOT-TESTED | Components: `CustomDivider`, `StyledTable`/`TableRow`/`TableCell`, `StyledSteps`/`StyledStep`. Not-tested per P22. |
| 5.4 | Avoided components absent | PASS | No TODO, TBD, Coming Soon, PreviewCallout in rendered content. REVIEW flags in JSX comments. |
| 5.5 | Information type → component mapping | PASS | Procedural content uses StyledSteps. Reference content uses StyledTable. Correct. |
| 5.6 | MDX renders clean | NOT-TESTED | No obvious JSX errors visible. `LinkArrow` imported (line 32) but not visibly called in body content — possible dead import. |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` is old-schema. See check 1.2. |
| 5.8 | CSS uses custom properties only | N/A |
| 5.9 | Generated file banners intact | N/A |
| 5.10 | Component naming/import conventions | FAIL | `LinkArrow` imported at line 32 but not used in body content — dead import. See F-02. |

**Category 5 verdict:** 3 checks FAIL: 5.1, 5.7, 5.10

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | REVIEW block at lines 276–281 flags 4 open items: (1) current stable `tztcloud/livepeer-ollama-runner` image tag, (2) current Livepeer-compatible Ollama model list, (3) LLM pricing semantics for `pixels_per_unit`, (4) runner test endpoint path and request body. NOT-TESTED. |
| 6.2 | Code/commands tested | NOT-TESTED | Docker commands, curl test, docker-compose.yml not tested in live environment. |
| 6.3 | No deprecated API usage | NOT-TESTED | `tztcloud/livepeer-ollama-runner:0.1.1` image tag — REVIEW flags this as potentially stale. Cannot verify without checking Docker Hub. |
| 6.4 | Numbers are real | FAIL | (a) `tztcloud/livepeer-ollama-runner:0.1.1` — flagged as needing verification. (b) `$0.18 per million tokens` described as "competitive rate for 8B parameter models as of early 2026" — this is a time-qualified pricing claim; staleness risk. (c) Gemma 2 9B VRAM "~10 GB" — stated in table at line 208. Model-demand-reference shows the same figure (~10 GB) for Gemma 2 9B. Consistent. (d) Llama 3.1 70B Q4 VRAM "~40 GB" vs model-demand-reference "~35–40 GB" — slight range difference. See F-03. |
| 6.5 | REVIEW flags for unverified claims | PASS | REVIEW block at lines 276–281 covers 4 items. Present. |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. With open REVIEW flags, `veracityStatus: unverified` required. |
| 6.7 | Authoritative vs AI-generated glossary | N/A |
| 6.8 | Source staleness check | FAIL | (a) Docker image tag `0.1.1` — staleness risk; tag may have been superseded. REVIEW flags this. (b) `$0.18/1M tokens` pricing — time-qualified as "early 2026". Staleness risk. |
| 6.9 | No open-ended research tasks | FAIL | REVIEW item 2: "Confirm the current Livepeer-compatible Ollama model list" — no named source beyond the Ollama public model library. Needs a specific authority (go-livepeer documentation, Cloud SPE comms). |

**Category 6 verdict:** 5 checks FAIL: 6.1, 6.4, 6.6, 6.8, 6.9

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2900: `"v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup"` |
| 7.2 | Navigation matches file system | PASS | Path matches exactly. |
| 7.3 | Tab entry portal routes to all sections | N/A |
| 7.4 | No structural orphans | PASS | Reachable from docs.json nav. |
| 7.5 | Audience journey complete | PASS | Position 5 of 9 in Workloads and AI section. Logical: diffusion → LLM → realtime. |
| 7.6 | Cross-tab graduation paths exist | N/A |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/`. |
| 7.8 | File naming conventions | PASS | `llm-pipeline-setup.mdx` — correct. No invalid prefix. |
| 7.9 | `_workspace/` TTL | N/A |

**Category 7 verdict:** All applicable checks PASS.

---

## Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | Verified: `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — PASS (docs.json line 2898). `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` — PASS (line 2899). `/v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines` — PASS (line 2902). `/v2/orchestrators/guides/config-and-optimisation/ai-model-management` — PASS (line 2923). All internal Card links verified. External links (tools.livepeer.cloud) not in docs.json by nature — external. |
| 8.2 | All external links live | NOT-TESTED | `tools.livepeer.cloud/ai/network-capabilities` appears twice. Not testable. |
| 8.3 | All snippet imports resolve | PASS | All import paths standard. |
| 8.4 | All images load | N/A — no image assets |
| 8.5 | Page renders without error | NOT-TESTED | `LinkArrow` imported but not used — possible unused import warning. No visible JSX errors. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | `status: draft`. REVIEW flags in JSX comments. No rendered TODO. |

**Category 8 verdict:** All applicable checks PASS (external links NOT-TESTED).

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: draft`. Pre-approval. Expected at this stage. |
| 9.2 | All consuming decisions in registry | N/A |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab gates not yet passed. Expected at current pipeline stage. |
| 9.4 | Phase ordering respected | N/A |
| 9.5 | Findings gathered before fixes | N/A |
| 9.6 | Feedback routed | N/A |

**Category 9 verdict:** 2 checks FAIL: 9.1, 9.3 (expected at current stage).

---

## Banned Construction Scan

**Scope:** body prose, headings, frontmatter description, Tips, Notes, Warnings, table cells, card descriptions, CustomDivider `middleText` props, StyledStep `title` props.

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| Tip block | "The `llm` pipeline is the entry point for operators with older or smaller GPUs. A quantised 8B parameter model runs within 8 GB VRAM — opening AI participation to cards that cannot run diffusion models at all." | `cannot run` | `cannot` — describes hardware incapacity, not a value claim. Factual constraint statement. Not `not [X]` as primary value statement. | NO |
| Line 41 | "Where diffusion and audio pipelines use the standard `livepeer/ai-runner` container, the LLM pipeline routes through an **Ollama-based runner** maintained by Cloud SPE." | — | No banned construction. | NO |
| Line 41 | "This enables quantised large language models to run on consumer GPUs with 8 GB of VRAM or more." | `enables` | Factual capability claim. Not `can/may`. | NO |
| Line 55 | "The `llm` pipeline requires you to run the Ollama stack manually:" | `requires` | Procedural statement. Not `can/may`. | NO |
| Line 61 | "go-livepeer connects to the `livepeer-ollama-runner` via the `url` field. The runner must be reachable on a shared Docker network." | `must` | Procedural instruction. Not a value claim. | NO |
| Line 82 | "Without it, models must be re-downloaded every time the Ollama container restarts." | `must` | Procedural consequence. Not a value claim. | NO |
| Line 126 | "The `livepeer-ai` network must be the same network your go-livepeer container is on." | `must` | Procedural requirement. Not a value claim. | NO |
| Line 162 | "Both containers must share the `livepeer-ai` network for this hostname to resolve." | `must` | Procedural requirement. | NO |
| Line 170 | "After 2 to 3 minutes, check [tools.livepeer.cloud/ai/network-capabilities]... The `llm` pipeline should appear with **Warm** status." | `should appear` | `should` — expected operational outcome. BORDERLINE: could be read as `can/may [verb]` approximation. However, it is a temporal/expected-outcome statement after a specific action, not a general value claim. Classify as conditional caveat (procedural). | BORDERLINE |
| Line 180 | "Quantised models reduce precision (typically from float32 to 4-bit integer) to fit within smaller VRAM budgets with minimal quality reduction." | `typically`, `minimal` | `typically` — not banned. `minimal` — not banned. | NO |
| Line 180 | "Ollama handles quantisation automatically via its model tags." | — | Factual statement. No banned construction. | NO |
| Line 219 | "For 8 GB VRAM GPUs, use `llama3.1:8b` or `mistral:7b`. The Gemma 2 9B typically requires closer to 10 GB, so single 8 GB cards should stay on the 7B to 8B class." | `should stay` | `should` — prescriptive recommendation following technical reasoning. Not a `can/may` value claim. Procedural prescription. | NO |
| Line 223 | "Ollama uses its own tag format internally; go-livepeer uses HuggingFace IDs for on-chain capability advertisement." | — | Factual. No banned construction. | NO |
| Line 245 | "This example sets a rate of $0.18 per million tokens (equivalent to $0.18/1M tokens, a competitive rate for 8B parameter models as of early 2026)." | — | Factual claim with time qualification. No `can/may`. | NO |
| Line 245 | "Adjust based on your GPU's inference throughput and current market rates." | — | Procedural instruction with implicit `if` (no banned `if [condition]` construction). | NO |
| Line 247 | "Check [tools.livepeer.cloud/ai/network-capabilities] for current LLM pipeline pricing from other orchestrators before setting your rate." | — | Procedural instruction. No banned construction. | NO |
| Line 253 | "After the stack is running, test the Ollama runner directly before routing live traffic:" | — | Procedural. No banned construction. | NO |
| CustomDivider props | `"Architecture Difference"`, `"Setup"`, `"Model Selection"`, `"Pricing"`, `"Testing"` | — | All are section identifiers. No banned constructions. | NO |
| StyledStep title: "Create a Docker volume for model persistence" | — | No em-dash (P48). | NO |
| StyledStep title: "Create docker-compose.yml for the Ollama stack" | — | No em-dash. | NO |
| StyledStep title: "Start the stack" | — | No em-dash. | NO |
| StyledStep title: "Pull your LLM model" | — | No em-dash. | NO |
| StyledStep title: "Add the LLM entry to aiModels.json" | — | No em-dash. | NO |
| StyledStep title: "Restart the AI worker and verify" | — | No em-dash. | NO |

**BORDERLINE:** Line 170 — `should appear`. Procedural expected-outcome. Not flagged as FAIL. Human review acceptable.

**No banned constructions found.** Revise check 2.4 result to PASS.

---

**Correction to Category 2:** Check 2.4 result is PASS. No banned constructions found on full scan. Initial FAIL was provisional; full scan clears it.

---

## Heading Score Table

*(Note: `Related pages` heading — `## Related pages` appears at line 274. Per P16, only the exact text `Related Pages` (capital P) is exempt. `Related pages` (lowercase p) — checking P53: "only the exact heading text `Related Pages`" — capital P is the canonical form. `Related pages` with lowercase p is NOT the exact match. However, this is a borderline typographical distinction; flag as INFO. Score normally.)*

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Architecture split | 4 | 4 | 4 | 4 | 5 | **21/25** |
| Setup | 2 | 2 | 4 | 3 | 5 | **16/25** |
| Model selection for 8 GB VRAM | 5 | 5 | 5 | 5 | 4 | **24/25** |
| Pricing the LLM pipeline | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Testing locally | 3 | 2 | 4 | 4 | 5 | **18/25** |
| Related pages | 3 | 2 | 4 | 4 | 5 | **18/25** |

**Sub-headings (H3):**

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Prerequisites | 4 | 3 | 5 | 5 | 5 | **22/25** |
| Model ID mapping | 5 | 4 | 5 | 5 | 5 | **24/25** |

**Failing headings (below 20/25):**
- `## Setup` — 16/25 FAIL. Generic, no domain anchor. Proposed: `## Ollama Stack Setup` — confirm before applying. (F-04)
- `## Testing locally` — 18/25. Borderline. Proposed: `## Local Test Commands` — confirm. (F-04)
- `## Related pages` — 18/25. Low Precision/Depth. INFO: this is a structural navigation heading. If it is serving the function of `Related Pages`, consider exact form `Related Pages` for exemption, or replace with a more specific heading that scores higher.

---

## Spelling/Typo Check

| Finding | Location | Type |
|---------|----------|------|
| No spelling errors found | — | — |

No typos found. `quantised` (UK spelling) confirmed correct. `behaviour` not needed here. No US spellings.

---

## Component Matrix

| Component | Used? | Appropriate for `instruction` (post-migration)? | Notes |
|-----------|-------|------------------------------------------------|-------|
| `CustomDivider` | Yes | Yes | Standard separator |
| `StyledTable` / `TableRow` / `TableCell` | Yes | Yes — for model selection reference table | Correct |
| `StyledSteps` / `StyledStep` | Yes | Yes — preferred for instruction | Core setup workflow |
| `LinkArrow` | Imported, NOT visibly used in body | N/A | Dead import — see F-02. |
| `CardGroup` / `Card` | Yes | Yes | Related pages section |
| `Tip` | Yes | Yes | Appropriate framing for opening |

---

## Cross-Category Connections

```
Root Cause CC-1: Content duplication with diffusion-pipeline-setup.mdx
Affects: Cat 4.8
Detail: LLM setup steps (Docker volume, compose file, model pull, aiModels.json entry, verify)
        are duplicated in diffusion-pipeline-setup.mdx. Model selection table also duplicated.
        This page is the more focused, better-scoped version of the two.
Fix: Resolve BD-1 in diffusion-pipeline-setup report. Once diffusion-pipeline-setup is narrowed
     to diffusion-only scope, this page becomes the canonical LLM setup location.
```

```
Root Cause CC-2: pageType deprecation → missing Prerequisites template requirement
Affects: Cat 1.2 + Cat 5.1
Detail: `how_to` → `instruction`. Prerequisites section is already present, so the template
        requirement is structurally met. Co-fix: decide pageVariant.
Fix: (1) Change pageType to `instruction`. (2) Decide pageVariant (quickstart or omit). No
     structural changes needed.
```

```
Root Cause CC-3: Missing frontmatter fields + open REVIEW items
Affects: Cat 1.1 + Cat 1.4 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 6.1 + Cat 6.6
Detail: purpose, complexity, lifecycleStage, veracityStatus all absent. REVIEW flags open.
        All proposed values require human sign-off (P51).
Fix: Add fields after human confirmation. Set veracityStatus: unverified until REVIEW resolved.
```

---

## Blocking Decisions

None. Page scope is clear and well-bounded. All fixes are conditional on human confirmation per P51.

---

## Fix List

| ID | Severity | Category | Fix |
|----|----------|----------|-----|
| F-01 | INFO | 2.4 | Withdrawn — full scan found no banned constructions. Check 2.4 PASS. |
| F-02 | INFO | 5.10 | Remove `LinkArrow` from import block (line 32) — imported but not used. |
| F-03 | MEDIUM | 6.4 | Llama 3.1 70B Q4 VRAM: this page shows `~40 GB`; model-demand-reference shows `~35–40 GB`. Align to the ranged figure `~35–40 GB` after SME verification. |
| F-04 | MEDIUM | 3.1/3.2 | Rename failing headings: `## Setup` → `## Ollama Stack Setup`; `## Testing locally` → `## Local Test Commands`. Confirm before applying. |
| F-05 | CRITICAL | 1.2 | Change `pageType: how_to` to `pageType: instruction`. Co-fix: decide `pageVariant`. |
| F-06 | HIGH | 1.1 | Add missing frontmatter fields (all proposed values require human confirmation): `purpose: configure`, `complexity: intermediate`, `lifecycleStage: setup`, `veracityStatus: unverified`, `industry: ["AI", "technical"]`, `niche: ["AI", "infrastructure"]`. |
| F-07 | HIGH | 1.11 | Shorten description to ≤160 chars. Proposed: `Configure the Livepeer llm pipeline via Ollama. Covers Docker Compose setup, 8 GB VRAM model selection, model ID mapping, and aiModels.json pricing entries.` (156 chars) — confirm before applying. |
| F-08 | HIGH | 6.1 | REVIEW flags (lines 276–281) require SME resolution: (1) confirm `tztcloud/livepeer-ollama-runner` current tag, (2) confirm compatible Ollama model list (source: Cloud SPE or go-livepeer docs), (3) confirm `pixels_per_unit` token semantics, (4) confirm test endpoint path. |
| F-09 | INFO | 3.1 | `## Related pages` heading — consider capitalising to `## Related Pages` for exact exemption alignment, or leave as is (minor). |

---

## Verdict

**NEEDS WORK**

Individual check IDs failing: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 4.8, 5.1, 5.7, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3 — **24 checks fail**.

This is the best-structured of the four pages in this batch. Scope is clean, prerequisites are present, steps are complete, voice is correct. Primary remediation is frontmatter completion and REVIEW resolution.

Critical blockers: F-05 (deprecated pageType), F-06 (missing required frontmatter), F-08 (open REVIEW items). No broken links.
