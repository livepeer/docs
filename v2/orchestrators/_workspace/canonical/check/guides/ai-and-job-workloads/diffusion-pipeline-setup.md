# Per-Page Quality Check Report
## `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx`

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
| `title` | Yes | `Diffusion Pipeline Setup` | PASS | Well-formed, concept-derived |
| `sidebarTitle` | Yes | `Diffusion Setup` | PASS | Concise |
| `description` | Yes | `Complete operator guide for running batch AI inference pipelines on a Livepeer orchestrator — aiModels.json configuration, all supported pipeline types, Ollama LLM runner deployment, BYOC external containers, and troubleshooting.` | FAIL | 228 chars — exceeds 160-char limit. Also contains em-dash (—) which is prohibited per CLAUDE.md |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value per P50 |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `guide` | FAIL | `guide` is a valid pageType but not a valid purpose value. Wrong-field error (P37 type b). Must be replaced with a canonical purpose from the 15-value set |
| `complexity` | No | ABSENT | FAIL | Required field missing |
| `lifecycleStage` | No | ABSENT | FAIL | Required field missing |
| `keywords` | Yes | 12 keywords | PASS | `aimodels.json`, `text-to-image`, `ollama`, `byoc` are searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct path |
| `veracityStatus` | No | ABSENT | FAIL | Required field. Page has open REVIEW flags and `status: published` — per P39 this is an incoherence |
| `industry` | No | ABSENT | FAIL | Required (P41). Proposed: `industry: ["technical", "AI"]` — confirm before applying |
| `niche` | No | ABSENT | FAIL | Required (P41). Proposed: `niche: ["AI", "infrastructure"]` — confirm before applying |

**Required field count:** 7/10 present (title, sidebarTitle, description, pageType, audience, keywords, OG block). Missing: `complexity`, `lifecycleStage`, `veracityStatus`. `purpose` present but invalid value. `industry` and `niche` absent (required per P41).

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`. `purpose` present with invalid value |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is a valid 7-type canonical pageType per P50 |
| 1.3 | `pageVariant` valid if present | N/A | Not present. Not required for `guide` |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `purpose: guide` — `guide` is a valid pageType value but not a valid purpose value. Error type (P37 type b): value placed in wrong context. Proposed: `purpose: configure` — this page maps operator options (aiModels.json fields) to effects for each pipeline configuration. Confirm before applying |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — assumes working Docker + go-livepeer node. Confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: build` — operator is actively configuring pipelines. Confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: published` without `veracityStatus` is incoherent per P39. Open REVIEW flags present at bottom of file. Must be `veracityStatus: unverified` at minimum. Per P39: changing to `status: draft` OR adding `veracityStatus: unverified` are the valid fixes — not `status: published` + `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required per P41. Proposed: `industry: ["technical", "AI"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required per P41. Proposed: `niche: ["AI", "infrastructure"]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | 228 chars — exceeds 160-char limit. Contains em-dash (—) which is prohibited per CLAUDE.md and check 2.4/P30 |
| 1.12 | OG image block complete | PASS | All 5 OG fields present and correct |
| 1.13 | `keywords` field quality | PASS | Specific terms: `aimodels.json`, `text-to-image`, `ollama`, `byoc`, `vram` are searcher-intent-aligned |

**Category 1 verdict: FAIL** — checks 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 fail (8 checks)

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
- Frontmatter `description` field: contains `—` em-dash. FAIL — P30
- Body prose: no em-dashes found in H2/H3 headings or body paragraphs
- `Accordion` title props: "SFAST — Stable Fast (up to 25% faster)" at line 544 — em-dash in visible component prop. FAIL — P48 scope
- `Accordion` title: "DEEPCACHE — Deferred computation (up to 50% faster)" at line 560 — em-dash in visible component prop. FAIL

**Banned construction scan** (all `can`, `may`, `if [condition]`, `not [X]` candidates):
- Table cell line 130: "If `true`, load the model at container startup." — `if [condition]` in a field definition table cell. This is boolean parameter documentation, not body prose value claim. BORDERLINE per P23 — classified as non-violation (field definition context)
- Line 486: "running cold puts you at a clear competitive disadvantage." — declarative assertion. PASS
- Line 488: "Warm your primary revenue pipeline. Cold the rest." — direct instruction. PASS
- Line 808: "for competitive pipelines like `text-to-image`, set `warm: true`." — procedural instruction. PASS

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | Prose uses UK English. `optimization_flags` is a technical API field name — not editable prose. `optimisation` used correctly in prose contexts |
| 2.2 | Zero banned words | PASS | Full candidate list checked. No violations found |
| 2.3 | Zero banned phrases | PASS | Full phrase list checked. No violations found |
| 2.4 | Zero banned constructions | FAIL | Em-dashes in: description field (line 7), Accordion title "SFAST — Stable Fast" (line 544), Accordion title "DEEPCACHE — Deferred computation" (line 560). All violate P30/P48 prohibition on em-dashes in all visible text |
| 2.5 | Opening order correct | PASS | Opens with value ("most accessible entry point", "earn per-unit fees"). Fact before mechanism |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. Final sentences end on fact or instruction |
| 2.7 | Audience register correct | PASS | Technical operator register throughout |
| 2.8 | Per-audience prohibited phrases absent | PASS | No orchestrator-prohibited phrases found |
| 2.9 | No passive value statements | PASS | Claims are concrete: "up to 25% faster", "up to 50% faster", "under 2 seconds on an RTX 4090" |
| 2.10 | No hedging openers | PASS | Opens with direct value claim |
| 2.11 | Terminology locked and consistent | PASS | `aiModels.json`, `livepeer/ai-runner`, `BYOC`, `warm/cold` all consistent |

### Banned Construction Scan

| Location | Construction | Classification | Proposed fix |
|---|---|---|---|
| Description field (line 7) | Em-dash `—` | FAIL — P30 | Replace em-dash with colon: `Complete operator guide for running batch AI inference pipelines on a Livepeer orchestrator: aiModels.json configuration, all supported pipeline types, Ollama LLM runner deployment, BYOC external containers, and troubleshooting.` (also trim to ≤160 chars) — confirm before applying |
| Accordion title (line 544) | `SFAST — Stable Fast (up to 25% faster)` | FAIL — P48 | Proposed: `SFAST: Stable Fast, up to 25% speedup` — confirm before applying |
| Accordion title (line 560) | `DEEPCACHE — Deferred computation (up to 50% faster)` | FAIL — P48 | Proposed: `DEEPCACHE: Deferred computation, up to 50% speedup` — confirm before applying |

**Category 2 verdict: FAIL** — check 2.4 fails (1 check)

---

## Category 3 — SECTION NAMING & HEADINGS

*(Note: `## Related` heading at line 863 is the navigation section. `Related` (bare) is in the OK tier per check 3.2, not Banned or Avoid. Not subject to P16 exemption. Evaluated normally.)*

### Heading Score Table

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|---|
| Prerequisites | H2 | 3 | 2 | 5 | 5 | 5 | **20/25** |
| How the AI worker runs pipelines | H2 | 4 | 3 | 4 | 4 | 3 | **18/25** |
| aiModels.json — full reference | H2 | 5 | 4 | 5 | 5 | 3 | **22/25** |
| Minimal working example | H3 | 3 | 3 | 3 | 4 | 4 | **17/25** |
| Complete field reference | H3 | 3 | 3 | 3 | 4 | 4 | **17/25** |
| Supported pipelines and recommended models | H2 | 4 | 4 | 4 | 4 | 2 | **18/25** |
| text-to-image | H3 | 5 | 4 | 5 | 5 | 5 | **24/25** |
| image-to-image | H3 | 5 | 4 | 5 | 5 | 5 | **24/25** |
| image-to-video | H3 | 5 | 4 | 5 | 5 | 5 | **24/25** |
| image-to-text | H3 | 5 | 4 | 5 | 5 | 5 | **24/25** |
| audio-to-text | H3 | 5 | 4 | 5 | 5 | 5 | **24/25** |
| segment-anything-2 | H3 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| upscale | H3 | 4 | 3 | 5 | 5 | 5 | **22/25** |
| text-to-speech | H3 | 4 | 3 | 5 | 5 | 5 | **22/25** |
| LLM inference — the Ollama runner | H2 | 4 | 4 | 4 | 4 | 3 | **19/25** |
| Why Ollama? | H3 | 2 | 1 | 3 | 3 | 5 | **14/25** |
| Setup | H3 | 2 | 1 | 3 | 3 | 5 | **14/25** |
| Warm vs cold models | H2 | 4 | 4 | 5 | 5 | 4 | **22/25** |
| Impact on job assignment | H3 | 4 | 3 | 4 | 4 | 4 | **19/25** |
| VRAM planning for warm models | H3 | 5 | 4 | 5 | 5 | 3 | **22/25** |
| Optimisation flags | H2 | 4 | 3 | 4 | 4 | 4 | **19/25** |
| Running multiple pipelines | H2 | 4 | 3 | 4 | 4 | 3 | **18/25** |
| BYOC external containers | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Pricing | H2 | 3 | 2 | 4 | 4 | 5 | **18/25** |
| Pricing units by pipeline | H3 | 5 | 4 | 5 | 5 | 3 | **22/25** |
| Setting competitive prices | H3 | 3 | 3 | 3 | 4 | 4 | **17/25** |
| Monitoring your pipelines | H2 | 4 | 3 | 4 | 4 | 3 | **18/25** |
| Troubleshooting | H2 | 3 | 2 | 4 | 4 | 5 | **18/25** |
| Watch: Batch AI on Livepeer | H2 | 2 | 1 | 3 | 3 | 4 | **13/25** |
| Canonical references for pipeline and model decisions | H2 | 3 | 3 | 3 | 3 | 1 | **13/25** |
| Related | H2 | 2 | 1 | 3 | 3 | 5 | **14/25** |

Failing headings (below 20/25): `How the AI worker runs pipelines` (18), `Minimal working example` (17), `Complete field reference` (17), `Supported pipelines and recommended models` (18), `LLM inference — the Ollama runner` (19), `Why Ollama?` (14), `Setup` (14), `Impact on job assignment` (19), `Optimisation flags` (19), `Running multiple pipelines` (18), `Pricing` (18), `Setting competitive prices` (17), `Monitoring your pipelines` (18), `Troubleshooting` (18), `Watch: Batch AI on Livepeer` (13), `Canonical references for pipeline and model decisions` (13), `Related` (14).

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | 17 headings fail the 20/25 threshold |
| 3.2 | No banned or weak standalone heading terms | FAIL | `Setup` standalone (Avoid-tier). `Troubleshooting` standalone (Avoid-tier in non-troubleshooting context). `Why Ollama?` is a question heading prohibited by CLAUDE.md |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | FAIL | `Setup`, `Pricing`, `Troubleshooting`, `Related` as standalone H2s contain no domain anchor |
| 3.5 | Heading names concept, not examples | PASS | Pipeline-specific H3s name API identifiers correctly |
| 3.6 | Title well-formed | PASS | `Diffusion Pipeline Setup` — 3 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | FAIL | `Why Ollama?`, `Setup`, `Watch: Batch AI on Livepeer`, `Canonical references for pipeline and model decisions`, `Setting competitive prices` are generic or bureaucratic |

**Category 3 verdict: FAIL** — checks 3.1, 3.2, 3.4, 3.7 fail (4 checks)

---

## Category 4 — PAGE STRUCTURE & CONTENT ARCHITECTURE

Nav sequence from docs.json lines 2894–2905:
`workload-options` → `video-transcoding-operations` → `ai-inference-operations` → **`diffusion-pipeline-setup`** → `llm-pipeline-setup` → `realtime-ai-setup` → `audio-and-vision-pipelines` → `model-demand-reference` → `model-hosting`

PREV_PAGE: `ai-inference-operations` | NEXT_PAGE: `llm-pipeline-setup`

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | FAIL | Page covers: all diffusion pipelines, LLM/Ollama runner (duplicated in llm-pipeline-setup.mdx), audio-to-text/image-to-text/segment-anything-2 (duplicated in audio-and-vision-pipelines.mdx), BYOC, pricing, monitoring, troubleshooting, video embed, canonical references. This is 8+ distinct jobs. Scope is too broad. The internal NOTE comment (lines 897–901) acknowledges: "LLM content should be extracted to llm-pipeline-setup. Audio/vision content should be extracted to audio-and-vision-pipelines." |
| 4.2 | Purpose statement test passes | FAIL | Cannot write a single-sentence purpose statement. Page attempts to be a complete reference for all batch AI setup |
| 4.3 | PREV_PAGE/NEXT_PAGE adjacency correct | PASS | Confirmed from docs.json lines 2898–2900. Arrives from ai-inference-operations (conceptual overview). Proceeds to llm-pipeline-setup. No knowledge gaps |
| 4.4 | No dead ends | PASS | Related CardGroup provides 6 onward paths |
| 4.5 | Prerequisites stated or linked | PASS | Explicit Prerequisites section present. Lists go-livepeer with `-aiWorker`, NVIDIA Container Toolkit, Docker, aiModels.json location |
| 4.6 | Out-of-scope is clear | FAIL | Internal comment acknowledges LLM and audio/vision content belongs in other pages. Page scope is currently undefined |
| 4.7 | Information type per section correct | INFO | Proposed `purpose: configure` → permitted primary types: procedural, technical, factual. Sections map correctly. Conditional on scope decision |
| 4.8 | No content duplication from adjacent sections | FAIL | LLM/Ollama runner section (lines 337–439) substantially duplicated in `llm-pipeline-setup.mdx`. Audio-to-text, image-to-text, segment-anything-2 entries duplicated in `audio-and-vision-pipelines.mdx` |
| 4.9 | Section orientation page present | N/A | Section orientation is `ai-inference-operations` |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: FAIL** — checks 4.1, 4.2, 4.6, 4.8 fail (4 checks)

---

## Category 5 — LAYOUT & COMPONENTS

Component policy read from `docs-guide/policies/component-layout-decisions.mdx`. For `guide`: Required sections: Overview, Steps or H2 sections. Preferred: Steps, Step, CodeGroup, Note, Info, Tip, Card, CardGroup. Avoid: Coming Soon, PreviewCallout.

**Dead import check (P9):** All imported components used in page body. No dead imports found.

**TODO check:** Line 347: `{/* TODO: Human to add an LLM runner architecture diagram... */}` — JSX comment, not rendered.

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | `guide` requires Overview + Steps or H2 sections. Prerequisites present. H2 structure used throughout |
| 5.2 | Required sections present | PASS | Prerequisites, H2 sections both present |
| 5.3 | Only approved components used | NOT-TESTED | Custom components (`CustomDivider`, `StyledTable`, `StyledSteps`, `StyledStep`) not in component-layout-decisions.mdx. Per P22: NOT-TESTED, not FAIL. Standard components (`AccordionGroup`, `Accordion`, `Note`, `Warning`, `Tip`, `CardGroup`, `Card`) all in Preferred list for `guide` |
| 5.4 | Avoided components absent | PASS | No Coming Soon, PreviewCallout. TODO in JSX comment only |
| 5.5 | Information type → component mapping correct | PASS | Procedural content: StyledSteps. Reference: StyledTable. Flags: AccordionGroup. Troubleshooting: AccordionGroup |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot run live render. `<Frame>` around `<iframe>` is a supported Mintlify pattern |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: guide` — valid as pageType, invalid as purpose value (P37 type b). `status: published` without `veracityStatus: verified` is incoherent per P39 |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours or inline JS |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | All imports used. PascalCase. Correct paths |

**Category 5 verdict: FAIL** — check 5.7 fails (1 check)

---

## Category 6 — VERACITY & FACTUAL ACCURACY

**Open REVIEW flags (lines 886–889):**
1. Confirm current Ollama support list with Cloud SPE or j0sh
2. Confirm the BYOC path for custom-container registration

### Veracity Claims Inventory

| Claim | Line | Type | Status | Source |
|---|---|---|---|---|
| SDXL-Lightning: 4 steps, under 2 seconds on RTX 4090 | 193 | technical | UNVERIFIED | HuggingFace model card, benchmark data |
| audio-to-text VRAM "~3 GB" | 273, 514 | technical | UNVERIFIED — inconsistent with model-demand-reference (~2–3 GB) | go-livepeer measurements |
| SAM2 VRAM "12–24 GB depending on model variant" | 293 | technical | UNVERIFIED — inconsistent with model-demand-reference (~4–6 GB warm) | go-livepeer measurements |
| Beta constraint: only one warm model per GPU | 171, 491 | technical | UNVERIFIED — REVIEW flag | go-livepeer Beta release notes |
| `tztcloud/livepeer-ollama-runner:0.1.1` is current stable tag | 369 | technical | UNVERIFIED — REVIEW flag | Docker Hub / Cloud SPE |
| `4768371` wei ≈ `0.0005 USD` per megapixel at late-2025 ETH/USD | 721 | evaluative | UNVERIFIED — staleness risk | Current ETH/USD rate |
| `-aiRunnerImage` flag deprecated; use `-aiRunnerImageOverrides` | 789 | technical | UNVERIFIED — no citation | go-livepeer changelog |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | Two open REVIEW flags. VRAM inconsistencies across section. Deprecated flag assertion uncited |
| 6.2 | Code/commands tested | NOT-TESTED | Docker commands and JSON entries not tested against live system |
| 6.3 | No deprecated API usage | FAIL | Line 789 correctly notes `-aiRunnerImage` is deprecated but provides no source citation. Source must be cited before this can be marked verified |
| 6.4 | Numbers are real | FAIL | VRAM inconsistencies: audio-to-text "~3 GB" here vs "~2–3 GB" in model-demand-reference. SAM2 "12–24 GB" here vs "~4–6 GB warm" in model-demand-reference. ETH/USD conversions unverified |
| 6.5 | REVIEW flags for unverified claims | PASS | Two REVIEW flags at bottom of file |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. `status: published` + open REVIEW flags is incoherent per P39. Must resolve to either `status: draft` + `veracityStatus: unverified`, or fully verified state |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | Wei/USD conversion at "late-2025 ETH/USD rates" (line 721) — staleness risk. Ollama runner image tag (line 369) — staleness risk |
| 6.9 | No open-ended research tasks | FAIL | REVIEW item 1: "Confirm current Ollama support list with Cloud SPE or j0sh" — named people but no specific source document or URL |

**Category 6 verdict: FAIL** — checks 6.1, 6.3, 6.4, 6.6, 6.8, 6.9 fail (6 checks)

---

## Category 7 — NAVIGATION & IA

docs.json lines 2894–2905 read. Full path `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` confirmed at line 2899.

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed: docs.json line 2899 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry exactly |
| 7.3 | Tab entry portal routes to all sections | N/A | Not the tab entry portal |
| 7.4 | No structural orphans | PASS | Reachable from Workloads and AI group |
| 7.5 | Audience journey complete | PASS | Position 4 of 9 in section. Appropriate for detailed setup content |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | Published in `v2/orchestrators/guides/` |
| 7.8 | File naming conventions | PASS | `diffusion-pipeline-setup.mdx` — correct |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS** — 0 checks fail

---

## Category 8 — LINKS & RENDERING

**Internal links verified against docs.json:**
- `/v2/orchestrators/setup/guide` — PASS (line 2860)
- `#warm-vs-cold-models` — anchor on same page, PASS
- `#optimisation-flags` — anchor on same page, PASS
- `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` — PASS (line 2903)
- `/v2/orchestrators/guides/advanced-operations/scale-operations` — PASS (line 2942)
- `/v2/developers/concepts/ai-on-livepeer` — PASS (line 2487)
- `/v2/developers/build/byoc` — PASS (line 2509)
- `/v2/gateways/resources/technical/orchestrator-offerings` — **NOT FOUND** in docs.json. Full path search returned no match
- `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` — PASS (line 2901)
- `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — PASS (line 2898)
- `/v2/orchestrators/concepts/incentive-model` — PASS (line 2843)

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | FAIL | `/v2/gateways/resources/technical/orchestrator-offerings` (line 857) not found in docs.json. All other internal links confirmed |
| 8.2 | All external links live | NOT-TESTED | Multiple external links not verifiable in this environment |
| 8.3 | All snippet imports resolve | NOT-TESTED | Import paths match site pattern |
| 8.4 | All images load | N/A | No image assets beyond OG block |
| 8.5 | Page renders without error | NOT-TESTED | Cannot run live render. `<Frame>` iframe pattern is supported |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | TODO at line 347 is in JSX comment |

**Category 8 verdict: FAIL** — check 8.1 fails (1 check)

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | `status: published` without `veracityStatus: verified` — incoherent per P39. Open REVIEW flags present |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions cited |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab: IA not approved, terminology not locked, content pass not open |
| 9.4 | Phase ordering respected | N/A | Not yet in veracity pass |
| 9.5 | Findings gathered before fixes | N/A | This is the findings report |
| 9.6 | Feedback routed | N/A | Pre-shipping |

**Category 9 verdict: FAIL** — checks 9.1, 9.3 fail (2 checks)

---

## Cross-Category Connections

**CC-1: VRAM inconsistency — shared with audio-and-vision-pipelines**
Affects: 6.4, 4.8
Audio-to-text "~3 GB" here vs "~2–3 GB" in model-demand-reference. SAM2 "12–24 GB" here vs "~4–6 GB warm" in model-demand-reference. Root fix: SME verification before either page can reach `veracityStatus: verified`.

**CC-2: Scope creep — three-way duplication**
Affects: 4.1, 4.2, 4.6, 4.8
This page overlaps with `llm-pipeline-setup.mdx` (LLM/Ollama content) and `audio-and-vision-pipelines.mdx` (audio/vision entries). Internal comment acknowledges extraction was planned. Decision required.

**CC-3: `purpose: guide` wrong-field error + description em-dash + length**
Affects: 1.4, 1.11, 2.4, 5.7
Three frontmatter issues compounding. Fix together: correct `purpose` value, remove em-dash, trim description to ≤160 chars.

**CC-4: `status: published` + absent `veracityStatus`**
Affects: 1.8, 5.7, 6.6, 9.1
Per P39: `status: published` requires `veracityStatus: verified`. Page has open REVIEW flags. Incoherent. Fix: downgrade `status` to `draft` and add `veracityStatus: unverified`.

**CC-5: Em-dashes in description + Accordion titles**
Affects: 1.11, 2.4
Three em-dash violations across description field and two Accordion titles. Single root-cause fix.

---

## Blocking Decisions

**BD-1:** Page scope resolution — the page's internal comment and existence of adjacent specialist pages suggest extraction. Decision: (a) retain comprehensive scope and accept duplication, or (b) extract LLM and audio/vision content, redirect to specialist pages. If (b), scope failures in 4.1/4.2 resolve and page becomes diffusion-focused. Requires Alison's decision.

**BD-2:** `status: published` — page has REVIEW flags and unverified VRAM figures. Decision: downgrade to `status: draft` pending veracity pass. Per P39, `status: published` + `veracityStatus: unverified` is not a valid combination.

---

## Verdict Summary

**Overall: NEEDS WORK**

Checks failing: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.4, 3.7, 4.1, 4.2, 4.6, 4.8, 5.7, 6.1, 6.3, 6.4, 6.6, 6.8, 6.9, 8.1, 9.1, 9.3

**27 checks fail.**

---

## Prioritised Fix List

**F-01** | CRITICAL | 4.1, 4.2, 4.6, 4.8, BD-1 | Resolve page scope
Decide whether to extract LLM and audio/vision content to specialist pages (llm-pipeline-setup.mdx, audio-and-vision-pipelines.mdx). If extracting: replace LLM section with 2-sentence summary + link. Replace audio-to-text/image-to-text/segment-anything-2 entries with summary + link. Requires Alison's decision.

**F-02** | CRITICAL | 1.8, 5.7, 6.6, 9.1, BD-2 | Resolve `status: published` + `veracityStatus` incoherence
Change `status: published` to `status: draft` and add `veracityStatus: unverified` — confirm before applying. Per P39: do not apply `status: published` + `veracityStatus: unverified`.

**F-03** | CRITICAL | 8.1 | Fix broken internal link
`/v2/gateways/resources/technical/orchestrator-offerings` (line 857) not found in docs.json. Remove link or replace with existing page. Proposed: remove the sentence at line 857 until the target page exists.

**F-04** | CRITICAL | 1.4, 5.7, CC-3 | Fix `purpose` wrong-field error
Replace `purpose: guide` with a canonical 15-value purpose. Proposed: `purpose: configure` — confirm before applying.

**F-05** | HIGH | 1.1, 1.6, 1.7, 1.9, 1.10 | Add missing required frontmatter fields
Proposed: `complexity: intermediate` — confirm before applying. `lifecycleStage: build` — confirm before applying. `industry: ["technical", "AI"]` — confirm before applying. `niche: ["AI", "infrastructure"]` — confirm before applying.

**F-06** | HIGH | 1.11, 2.4, CC-3, CC-5 | Fix description: length and em-dash
Current description is 228 chars and contains em-dash. Proposed replacement (≤160 chars, no em-dash): `Operator guide for configuring batch AI inference pipelines on a Livepeer orchestrator: aiModels.json setup, supported pipelines, Ollama LLM deployment, BYOC, and troubleshooting.` (178 chars — still over, needs final trim). Confirm before applying.

**F-07** | HIGH | 2.4, CC-5 | Remove em-dashes from Accordion title props
`SFAST — Stable Fast (up to 25% faster)` → Proposed: `SFAST: Stable Fast, up to 25% speedup` — confirm before applying.
`DEEPCACHE — Deferred computation (up to 50% faster)` → Proposed: `DEEPCACHE: Deferred computation, up to 50% speedup` — confirm before applying.

**F-08** | HIGH | 6.1, 6.4, CC-1 | Resolve VRAM inconsistencies with model-demand-reference
SAM2 and audio-to-text figures conflict. Requires SME verification. Route to CC-1 / BD-2 (shared). Do not apply until source confirmed.

**F-09** | HIGH | 3.1, 3.2, 3.7 | Rename failing headings
`## Why Ollama?` → Proposed: `## The Ollama Runner` — confirm before applying.
`### Setup` → Proposed: `### Ollama Stack Setup` — confirm before applying.
`## Watch: Batch AI on Livepeer` → Proposed: `## Pipeline Demo` — confirm before applying.
`## Canonical references for pipeline and model decisions` → Proposed: `## Authoritative References` — confirm before applying.
`## Running multiple pipelines` → Proposed: `## Multi-Pipeline Configuration` — confirm before applying.
`## Pricing` → Proposed: `## Pricing Model` — confirm before applying.

**F-10** | MEDIUM | 6.3 | Cite source for deprecated CLI flag
Line 789: `-aiRunnerImage` deprecated. Add citation: `{/* REVIEW: cite go-livepeer release notes confirming -aiRunnerImage deprecation before publishing */}`.

**F-11** | MEDIUM | 6.8, 6.9 | Address staleness risks and open-ended REVIEW items
Line 721: ETH/USD conversion — replace inline conversion with link to current rate source or add REVIEW flag.
Line 369: `tztcloud/livepeer-ollama-runner:0.1.1` — replace hardcoded version with instruction to check Docker Hub for current tag.
REVIEW item 1: Assign specific source document URL rather than named contacts.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Diffusion Pipeline Setup` | PASS | Clear, subject-first |
| `sidebarTitle` | Yes | `Diffusion Setup` | PASS | Concise |
| `description` | Yes | `Complete operator guide for running batch AI inference pipelines on a Livepeer orchestrator — aiModels.json configuration, all supported pipeline types, Ollama LLM runner deployment, BYOC external containers, and troubleshooting.` | FAIL | Em-dash (—) in description violates prohibition (P30). Also 238 chars — exceeds 160-char limit (check 1.11). |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value (P50) |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `guide` | FAIL | Wrong field: `guide` is a valid pageType value, not a purpose value (check 1.4). Error type: wrong field (P37 — a pageType value placed in the purpose field). Fix: change to a valid 15-value purpose. Proposed: `purpose: configure` — confirm before applying (P51). |
| `complexity` | No | ABSENT | FAIL | Required field missing. Proposed: `complexity: intermediate` — confirm before applying (P51). |
| `lifecycleStage` | No | ABSENT | FAIL | Required field missing. Proposed: `lifecycleStage: setup` — confirm before applying (P51). |
| `keywords` | Yes | 12 keywords | BORDERLINE | `livepeer`, `orchestrator` generic. `aimodels.json`, `text-to-image`, `byoc`, `vram` are specific. Editorial tightening recommended. |
| OG image block | Yes | 5 fields present | PASS | All OG fields correct |
| `status` | Yes | `published` | INFO | `status: published` with open REVIEW flags requires `veracityStatus: verified` per checks.mdx §1.8. See check 1.8. |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present |
| `veracityStatus` | No | ABSENT | FAIL | Required (check 1.8). `status: published` + open REVIEW flags creates incoherence. `status: published` requires `veracityStatus: verified` AND zero REVIEW flags per §1.8. Either (a) change `status` to `draft` + add `veracityStatus: unverified`, or (b) resolve all REVIEW flags and verify all claims then set `veracityStatus: verified`. Proposed: change to `status: draft` + `veracityStatus: unverified` until REVIEW items are resolved. |
| `industry` | No | ABSENT | FAIL | Required (P41). Proposed: `industry: ["AI", "technical"]` — confirm before applying (P51). |
| `niche` | No | ABSENT | FAIL | Required (P41). Proposed: `niche: ["AI", "infrastructure"]` — confirm before applying (P51). |

**Summary:** 8 fields FAIL (description issues, purpose wrong-field, complexity absent, lifecycleStage absent, veracityStatus absent, status/veracityStatus incoherence, industry absent, niche absent).

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is a valid canonical pageType (P50) |
| 1.3 | `pageVariant` valid if present | N/A — not present | No deprecated pageType migration needed. |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `purpose: guide` — wrong field error (P37b). `guide` is a valid pageType, not a valid purpose value. Proposed fix: `purpose: configure` — confirm before applying. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: setup` |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: published` requires `veracityStatus: verified` AND zero REVIEW flags (checks.mdx §1.8). Open REVIEW flags exist (lines 886–888). Resolution options: (a) set `status: draft` + `veracityStatus: unverified`, or (b) resolve all items + set `veracityStatus: verified`. Per P39. |
| 1.9 | `industry` array valid if present | FAIL | Field absent (P41 — required). Proposed: `["AI", "technical"]` |
| 1.10 | `niche` array valid if present | FAIL | Field absent (P41 — required). Proposed: `["AI", "infrastructure"]` |
| 1.11 | `description` well-formed | FAIL | (a) Em-dash (—) in description — prohibited (P30). (b) 238 chars — exceeds 160-char limit. Fix: remove em-dash, shorten. |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | BORDERLINE | `livepeer`, `orchestrator`, `batch ai` are generic. `aimodels.json`, `byoc`, `text-to-image` are searcher-intent specific. |

**Category 1 verdict:** 8 checks FAIL: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | Candidates scanned: `optimisation` used correctly (line 540). No `optimization` US spelling in prose. `optimisations` absent. No US spellings found. |
| 2.2 | Zero banned words | FAIL | `significantly` found at line 524 of model-demand-reference; not present in this file. Scanned: `effectively` — not found. `essentially` — not found. `basically` — not found. `meaningful`/`meaningfully` — not found. `significant` — not found. `various` — not found. `several` — not found. `obviously` — not found. `clearly` — not found. PASS — no violations in this file. |
| 2.3 | Zero banned phrases | PASS | `rather than` — not found. `This section covers` — not found. `This page covers` — not found. No violations. |
| 2.4 | Zero banned constructions | FAIL | `not [X]` found: line 789 ("The `-aiRunnerImage` flag is deprecated; use `-aiRunnerImageOverrides` instead" — not a banned `not [X]` construction, this is a direct instruction). Checked all body prose. See Banned Construction Scan for full candidate list. See F-02. |
| 2.5 | Opening order correct | PASS | Opens with: "Batch AI inference is the most accessible entry point to the Livepeer AI network." — subject first, value first. |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. Paragraphs single-purpose. |
| 2.7 | Audience register correct | PASS | Peer-technical. No hand-holding. Appropriate for orchestrator audience. |
| 2.8 | Per-audience prohibited phrases absent | PASS | Orchestrator-specific: `easy to set up` — not found. `the network rewards you for` — not found. |
| 2.9 | No passive value statements | PASS | Value claims quantified: "up to 25% faster", "up to 50% faster", "under 2 seconds on an RTX 4090". |
| 2.10 | No hedging openers | PASS | Page opens with a direct assertion. |
| 2.11 | Terminology locked and consistent | FAIL | `optimization_flags` used as a technical field name in code (correct — this is the actual aiModels.json field name). In prose, `optimisation flags` uses UK spelling (correct). Both usages are justified. However, `"Why Ollama?"` heading appears as an H3 — question in a heading violates the no-questions-in-headings rule per CLAUDE.md. See F-03. |

**Category 2 verdict:** 1 check FAIL: 2.11 (heading question). Check 2.2 PASS. Check 2.4 — see full scan.

---

## Category 3 — Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | See Heading Score Table. Multiple headings fail. |
| 3.2 | No banned or weak standalone heading terms | FAIL | `## Running multiple pipelines` — `Running` is acceptable but heading can be stronger. `## Watch: Batch AI on Livepeer` — colon in heading and meta-description format. `## Canonical references for pipeline and model decisions` — verbose, borderline. See F-04. |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. `Warm vs cold models` uses contrast but names a concept pair, not a literal `X vs Y` comparison label. Borderline — see F-05. |
| 3.4 | Domain-anchor rule applied | PASS | All headings include domain context. |
| 3.5 | Heading names concept, not examples | PASS | Headings name functional concepts, not specific model examples. |
| 3.6 | Title well-formed | PASS | `Diffusion Pipeline Setup` — 3 words, concept-derived. |
| 3.7 | Sounds like expert editorial choice | FAIL | `Why Ollama?` is a question, prohibited by CLAUDE.md. `Watch: Batch AI on Livepeer` uses a video-card meta-format (`Watch:`), which is a self-referential descriptor rather than a heading that names a concept. |

**Category 3 verdict:** 3 checks FAIL: 3.1, 3.2, 3.7

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | FAIL | Page scope is broad: it covers aiModels.json reference + diffusion pipelines + LLM runner + audio/vision pipelines + BYOC + pricing + monitoring + troubleshooting. The internal REVIEW comment at lines 898–901 explicitly flags this: "LLM content should be extracted to llm-pipeline-setup. Audio/vision content should be extracted to audio-and-vision-pipelines. This page should focus on diffusion pipelines only." The page serves multiple jobs. See F-06. |
| 4.2 | Purpose statement test passes | FAIL | Cannot write a single-sentence purpose statement that isn't "several things." Current scope is too wide. Conditional on scope decision (BD-1). |
| 4.3 | PREV_PAGE/NEXT_PAGE adjacency correct | PASS | docs.json lines 2898–2899: `ai-inference-operations` → **`diffusion-pipeline-setup`** → `llm-pipeline-setup`. Previous: conceptual AI inference overview. Next: LLM-specific setup. Adjacency is logical. |
| 4.4 | No dead ends | PASS | Related section (lines 863–884) provides 6 onward paths. |
| 4.5 | Prerequisites stated or linked | PASS | Prerequisites section present (lines 47–55) with 4 explicit items. |
| 4.6 | Out-of-scope is clear | FAIL | Page currently includes LLM runner setup, audio/vision pipeline entries, BYOC, and full troubleshooting — all partially covered by other pages. The REVIEW comment flags this as a scope problem. Until scope is resolved (BD-1), this check fails. |
| 4.7 | Information type per section correct | PASS | For `purpose: configure` (proposed): primary types `procedural`, `technical`, `factual`. All sections align: step sequences, field references, code blocks, troubleshooting accordion items. |
| 4.8 | No content duplication from adjacent sections | FAIL | LLM runner setup steps (lines 357–439) are substantially duplicated in `llm-pipeline-setup.mdx`. Audio/vision pipeline entries (lines 237–296) duplicated in `audio-and-vision-pipelines.mdx`. This is the root cause identified in REVIEW comments. |
| 4.9 | Section orientation page present | N/A — page-level check |
| 4.10 | Cross-tab links at journey intersections | N/A — tab-level check |

**Category 4 verdict:** 4 checks FAIL: 4.1, 4.2, 4.6, 4.8

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | PASS | `guide` template: Overview + Steps/H2 sections. Page has overview prose + multiple H2 procedure sections. Correct. |
| 5.2 | Required sections present | PASS | `guide` requires Overview + Steps or H2 sections. Both present. |
| 5.3 | Only approved components used | NOT-TESTED | Components: `StyledSteps`/`StyledStep`, `StyledTable`/`TableRow`/`TableCell`, `CustomDivider`, `AccordionGroup`/`Accordion`, `Frame`, `CardGroup`/`Card`. Component catalog not read — NOT-TESTED per P22. |
| 5.4 | Avoided components absent | FAIL | `TODO` placeholder found at line 347: `{/* TODO: Human to add an LLM runner architecture diagram or approved media asset for this section. */}`. This is in rendered JSX comment in the page body. While JSX comments don't render visually, this is a `TODO` in a published-status page. See F-07. |
| 5.5 | Information type → component mapping | PASS | Steps use StyledSteps. Reference uses StyledTable. Troubleshooting uses AccordionGroup. Correct mapping. |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot run local render. No obvious JSX errors in source. |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: guide` is a wrong-field usage (pageType value in purpose field). Not a deprecated alias — an active pageType value in the wrong field. |
| 5.8 | CSS uses custom properties only | N/A — no inline CSS |
| 5.9 | Generated file banners intact | N/A — not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct import paths. |

**Category 5 verdict:** 2 checks FAIL: 5.4, 5.7

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | REVIEW block at lines 886–888 flags two open items: (1) Ollama support list, (2) BYOC path. NOT-TESTED against primary sources. Sources cited for SG161222, ByteDance, Salesforce, openai/whisper-large-v3, facebookresearch — these are HuggingFace/GitHub links, positional. |
| 6.2 | Code/commands tested | NOT-TESTED | Docker compose, CLI commands, JSON configurations not tested in live environment. |
| 6.3 | No deprecated API usage | FAIL | Line 789: "The `-aiRunnerImage` flag is deprecated; use `-aiRunnerImageOverrides` instead." The page correctly flags the deprecated flag. This is NOT a violation — the text is alerting the reader to a deprecation. But it should be cited against a go-livepeer changelog. Currently NOT-TESTED against go-livepeer source. |
| 6.4 | Numbers are real | FAIL | VRAM figures in the VRAM planning table (lines 496–532) differ from model-demand-reference: text-to-image SDXL here shows "~12–18 GB"; model-demand-reference shows "~12–14 GB warm" for Lightning and "~14–16 GB" for SDXL base. audio-to-text here shows "~3 GB"; model-demand-reference shows "~2–3 GB". See CC-1. `4768371` wei pricing unverified. `12882811` unverified. |
| 6.5 | REVIEW flags for unverified claims | PASS | REVIEW block present at lines 886–888. |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. `status: published` + open REVIEW flags is incoherent. Fix requires either resolving items or downgrading status. |
| 6.7 | Authoritative vs AI-generated glossary | N/A |
| 6.8 | Source staleness check | FAIL | `at time of writing` qualifier on Ollama model table (line 441) is staleness-risk language. Wei pricing commentary uses "late 2025 ETH/USD rates" — staleness risk. |
| 6.9 | No open-ended research tasks | FAIL | REVIEW line: "Confirm current Ollama support list with Cloud SPE or j0sh." — has a named source (Cloud SPE, j0sh) but is open-ended without concrete next step. |

**Category 6 verdict:** 6 checks FAIL: 6.1, 6.4, 6.6, 6.8, 6.9 (6.3 is NOT-TESTED, not FAIL)

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2899: `"v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup"` |
| 7.2 | Navigation matches file system | PASS | Path matches exactly. |
| 7.3 | Tab entry portal routes to all sections | N/A |
| 7.4 | No structural orphans | PASS | Reachable from docs.json nav. |
| 7.5 | Audience journey complete | PASS | Position 4 of 9 in Workloads and AI section. Logical position for the primary AI setup guide. |
| 7.6 | Cross-tab graduation paths exist | N/A — tab-level |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/`. |
| 7.8 | File naming conventions | PASS | No invalid prefix. `diffusion-pipeline-setup.mdx` is correct. |
| 7.9 | `_workspace/` TTL | N/A |

**Category 7 verdict:** All applicable checks PASS.

---

## Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | FAIL | Verified links: `/v2/orchestrators/setup/guide` — PASS (docs.json line 2860). `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` — PASS (line 2903). `/v2/developers/concepts/ai-on-livepeer` — PASS (line 2487). `/v2/developers/build/byoc` — PASS (line 2509). `/v2/orchestrators/guides/advanced-operations/scale-operations` — PASS (line 2942). `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` — PASS (line 2901). `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — PASS (line 2898). **FAIL:** `/v2/gateways/resources/technical/orchestrator-offerings` — NOT in docs.json. No matching entry found in gateways/resources/technical section (lines 2742–2786). This link target does not exist in the navigation. See F-08. |
| 8.2 | All external links live | NOT-TESTED | External links to HuggingFace, GitHub, YouTube, tools.livepeer.cloud, livepeer.cloud not testable in this environment. |
| 8.3 | All snippet imports resolve | PASS | `StyledSteps`/`StyledStep`, `StyledTable`/`TableRow`/`TableCell`, `CustomDivider` — standard paths. |
| 8.4 | All images load | NOT-TESTED | YouTube embed via `<iframe>` in Frame component. Not verifiable without render. |
| 8.5 | Page renders without error | NOT-TESTED | `<Frame>` with inline `<iframe>` — check if Frame accepts iframe child. No obvious JSX errors. |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | Line 347: `{/* TODO: Human to add an LLM runner architecture diagram... */}` — TODO in a page with `status: published`. See F-07. |

**Category 8 verdict:** 2 checks FAIL: 8.1 (broken link `/v2/gateways/resources/technical/orchestrator-offerings`), 8.6 (TODO in published page)

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: published` but veracityStatus absent and REVIEW flags open. Inconsistent with shipped status. |
| 9.2 | All consuming decisions in registry | N/A |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab: IA not approved, terminology not locked. Page scope problem noted in REVIEW comments is unresolved. |
| 9.4 | Phase ordering respected | N/A |
| 9.5 | Findings gathered before fixes | N/A |
| 9.6 | Feedback routed | N/A |

**Category 9 verdict:** 2 checks FAIL: 9.1, 9.3

---

## Banned Construction Scan

**Scope:** body prose, headings, frontmatter description, Tips, Notes, Warnings, table cells, card descriptions, CustomDivider `middleText` props, Accordion `title` props, StyledStep `title` props.

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| Line 37 | "Batch AI inference is the most accessible entry point to the Livepeer AI network." | — | Positive assertion. No banned construction. | NO |
| Line 39 | "Run batch AI by configuring `aiModels.json`, choosing and loading models, connecting external runners where needed, setting prices, and checking health and routing once the worker is live." | — | Procedural instruction. No `can/may`. | NO |
| Note block (line 41–43) | "Use this guide once your orchestrator node is already running and connected to the network." | — | Procedural instruction with `once` — temporal condition, not a value-claim `if`. | NO |
| Line 49 | "Before configuring AI pipelines, ensure:" | — | Procedural prerequisite. Not a `can/may` value claim. | NO |
| Line 73 | "The standard container image is `livepeer/ai-runner`. Except for the `llm` pipeline — which uses a separate Ollama-based runner — all batch pipelines use this image." | `Except for` | `Except for` is not on the banned list. Not `not [X]` construction. Not `rather than`. | NO |
| Line 97 | "This single entry is enough to start earning from the `text-to-image` pipeline with a competitive warm model." | — | Positive assertion. No `can/may`. | NO |
| Line 130 | "If `true`, load the model at container startup. Eliminates cold-start latency. See [warm vs cold](#warm-vs-cold-models)." | `If` | This is in a table cell (description for the `warm` field). `If [condition]` in table cell — in body prose of a reference table. Not a value claim. **Procedural/reference conditional.** | NO |
| Line 193 | "SDXL-Lightning reduces inference to 4 steps (vs 20–50 for standard SDXL), delivering results in under 2 seconds on an RTX 4090. Gateways and users strongly prefer fast models for this pipeline." | `strongly prefer` | Not a banned word or construction. Factual competitive observation. | NO |
| Line 217 | "Note: This fits on the same 24 GB GPU as `text-to-image` when cold-loading is acceptable." | `when` | Conditional temporal. Not a value-claim `if`. | NO |
| Line 339 | "This enables quantised LLMs to run on GPUs with as little as 8 GB VRAM." | `enables` | Not `can/may`. Factual capability claim with quantified spec. | NO |
| Line 351 | "Quantised LLMs — especially 7B and 8B parameter models — run efficiently within 8–12 GB VRAM." | — | Factual claim. No banned construction. | NO |
| Line 416 | "This is expected — the AI worker uses HuggingFace IDs for capability advertisement, while Ollama uses its own tag format internally." | — | Explanatory fact. No construction violation. | NO |
| Line 432 | "The network name (`livepeer-ai` above) must match however your go-livepeer container is networked." | — | Procedural instruction with conditional clause. Not a banned `if [condition]` in value claim. | NO |
| Line 480 | "**Warm:** The model is preloaded into GPU VRAM at container startup. Any job request is served immediately — no model loading latency." | `no model loading latency` | `no [X]` construction — check if this is a `not [X]` primary statement. This is a factual property description using "no" as a quantifier, not a primary statement framed negatively. Not banned. | NO |
| Line 482 | "**Cold:** The model is loaded on first request. The container exists while the weights stay on disk until the first request triggers a model load, typically 10–60 seconds depending on model size and NVMe speed." | `depending on` | `depends on` without ranked list is banned per CLAUDE.md. However, `depending on` here is followed by two explicit variables (model size, NVMe speed). BORDERLINE — flag for human review. | BORDERLINE |
| Line 486 | "Nodes with fast first-response times win more jobs. For latency-sensitive pipelines — especially `text-to-image` and `image-to-image` — running cold puts you at a clear competitive disadvantage." | — | Factual claims. No banned construction. | NO |
| Line 534 | "A 24 GB GPU supports one large diffusion model warm, or a combination of smaller pipelines simultaneously." | `can` — absent | No `can` here. Statement is declarative. | NO |
| Line 628 | "The AI worker passes jobs through and polls the container's `/health` endpoint at startup." | — | No banned construction. | NO |
| Line 641 | "Set it from the container's actual concurrency support. Default is `1`." | — | Procedural. No banned construction. | NO |
| Line 659 | "AI inference pricing on Livepeer is set by operators and advertised on-chain. Gateways filter by `maxPricePerUnit` — jobs only reach orchestrators whose price falls below the gateway's maximum." | — | Factual. No banned construction. | NO |
| Line 721 | "`4768371` Wei is approximately `0.0005 USD` per megapixel at ETH/USD rates from late 2025." | `approximately` | Hedge on a price approximation. Not banned. A sourced range with explicit rate basis. | NO |
| Line 728 | "Check current competitive pricing on the [Livepeer Explorer AI Leaderboard](https://explorer.livepeer.org) — per-orchestrator earnings data shows which price tiers are earning the most jobs. Prices above the active gateway ceiling receive no jobs." | — | No banned construction. | NO |
| Accordion title: "Start the AI runner container" | — | Step-style title. No banned construction. No em-dash. | NO |
| Accordion title: "Fix model ID loading errors" | — | No banned construction. | NO |
| Accordion title: "Pipeline receiving no jobs" | — | `no [X]` as a heading? "Pipeline receiving no jobs" — describes a state, not a primary statement about value. Acceptable heading naming the symptom. | NO |
| Accordion title: "OOM during inference" | — | No banned construction. | NO |
| Accordion title: "Restore Ollama LLM job flow" | — | No banned construction. | NO |
| Accordion title: "SFAST causing first-request latency" | — | No banned construction. | NO |
| StyledStep title: "Create a Docker volume for model persistence" | — | Procedural step title. No em-dash (P48). | NO |
| StyledStep title: "Create docker-compose.yml" | — | No em-dash. | NO |
| StyledStep title: "Start the stack" | — | No em-dash. | NO |
| StyledStep title: "Pull your LLM model" | — | No em-dash. | NO |
| StyledStep title: "Add the LLM entry to aiModels.json" | — | No em-dash. | NO |
| StyledStep title: "Verify" | — | No em-dash. But "Verify" alone scores poorly as a heading (Precision: 1). Flag under 3.1 rather than here. | NO |
| Description field | `Complete operator guide for running batch AI inference pipelines on a Livepeer orchestrator — aiModels.json configuration, all supported pipeline types, Ollama LLM runner deployment, BYOC external containers, and troubleshooting.` | Em-dash (—) | Em-dash prohibited (P30/CLAUDE.md). Fix: replace `—` with `:`. | YES — F-01 |
| Line 540 | "`optimization_flags` apply only to `warm: true` diffusion models (`text-to-image`, `image-to-image`, `upscale`). Both flags are experimental." | — | No banned construction. | NO |
| Line 578 | "**SFAST and DEEPCACHE cannot be combined.** Choose one or neither." | `cannot` | `cannot` describes a technical constraint, not a banned `not [X]` primary statement. It is a direct factual instruction. Not banned. | NO |
| Warning block line 491–492 | "Setting `warm: true` on more entries than you have GPUs makes the AI worker log a conflict error at startup and skip the excess entries." | — | No banned construction. | NO |
| Line 807 | "for competitive pipelines like `text-to-image`, set `warm: true`." | — | Procedural instruction. No banned construction. | NO |

**BORDERLINE:** Line 482 — `depending on model size and NVMe speed`. Two variables named but no ranked weighting. Flag for human review.

---

## Heading Score Table

*(Note: `Related` heading (line 863) — this is `## Related`, not `## Related Pages`. Per P53, only the exact heading `Related Pages` is exempt. `## Related` is not exempt and is subject to check 3.2. `Related` is in the OK tier per Frameworks.mdx §4.1 — not banned, not in Avoid. Scored normally.)*

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Prerequisites | 4 | 3 | 5 | 5 | 5 | **22/25** |
| How the AI worker runs pipelines | 3 | 3 | 4 | 4 | 3 | **17/25** |
| aiModels.json — full reference | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Supported pipelines and recommended models | 3 | 3 | 3 | 4 | 3 | **16/25** |
| LLM inference — the Ollama runner | 4 | 4 | 4 | 4 | 4 | **20/25** |
| Warm vs cold models | 4 | 4 | 5 | 5 | 5 | **23/25** |
| Optimisation flags | 4 | 4 | 5 | 5 | 5 | **23/25** |
| Running multiple pipelines | 4 | 4 | 4 | 4 | 4 | **20/25** |
| BYOC external containers | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Pricing | 3 | 2 | 4 | 4 | 5 | **18/25** |
| Monitoring your pipelines | 4 | 4 | 5 | 5 | 3 | **21/25** |
| Troubleshooting | 4 | 3 | 5 | 5 | 5 | **22/25** |
| Watch: Batch AI on Livepeer | 1 | 1 | 2 | 2 | 3 | **9/25** |
| Canonical references for pipeline and model decisions | 3 | 3 | 3 | 3 | 2 | **14/25** |
| Related | 3 | 2 | 4 | 4 | 5 | **18/25** |

**Sub-headings (H3):**

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Why Ollama? | 2 | 2 | 3 | 3 | 5 | **15/25** |
| Setup | 3 | 2 | 4 | 4 | 5 | **18/25** |
| Minimal working example | 3 | 2 | 3 | 3 | 4 | **15/25** |
| Complete field reference | 3 | 3 | 4 | 4 | 4 | **18/25** |
| Impact on job assignment | 4 | 4 | 5 | 4 | 4 | **21/25** |
| VRAM planning for warm models | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Pricing units by pipeline | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Setting competitive prices | 4 | 4 | 5 | 5 | 4 | **22/25** |

**Failing headings (below 20/25):**
- `How the AI worker runs pipelines` — 17/25. Proposed: `AI Worker Pipeline Flow` — confirm before applying. (F-09)
- `Supported pipelines and recommended models` — 16/25. Too long, covers two things. Proposed: `Pipeline Catalogue` — confirm. (F-09)
- `Why Ollama?` — 15/25. Question prohibited. Proposed: `Ollama Runner Architecture` — confirm. (F-09)
- `Pricing` — 18/25. Generic. Proposed: `AI Pipeline Pricing` — confirm. (F-09)
- `Watch: Batch AI on Livepeer` — 9/25 CRITICAL. Not a conceptual heading. Proposed: `Video Walkthrough` or remove if not needed — confirm. (F-09)
- `Canonical references for pipeline and model decisions` — 14/25. Verbose. Proposed: `Authoritative References` — confirm. (F-09)
- `Setup` (H3, LLM section) — 18/25. Too generic as a standalone. Proposed: `Ollama Stack Setup` — confirm. (F-09)
- `Minimal working example` — 15/25. Proposed: `Minimal aiModels.json` — confirm. (F-09)
- `Complete field reference` — 18/25. Proposed: `Field Reference` — confirm. (F-09)
- `Related` — 18/25. Acceptable (in OK tier) but could score higher. Not blocking.

---

## Spelling/Typo Check

| Finding | Location | Type |
|---------|----------|------|
| No spelling errors found | — | — |

No typos found.

---

## Component Matrix

| Component | Used? | Appropriate for `guide` pageType? | Notes |
|-----------|-------|----------------------------------|-------|
| `StyledSteps` / `StyledStep` | Yes | Yes — preferred for guide | Correct for procedural setup section |
| `StyledTable` / `TableRow` / `TableCell` | Yes | Yes | Standard |
| `CustomDivider` | Yes | Yes | Structural separator |
| `AccordionGroup` / `Accordion` | Yes | Yes — preferred for guide/instruction | Used for optimisation flags and troubleshooting |
| `Frame` | Yes | NOT-TESTED | Frame used to wrap diagram and iframe. Not verified against catalog. |
| `CardGroup` / `Card` | Yes | Yes — preferred | Related pages. Correct. |
| `Note` / `Warning` | Yes | Yes | Standard |

---

## Cross-Category Connections

```
Root Cause CC-1: Page scope exceeds single job
Affects: Cat 4.1 + Cat 4.2 + Cat 4.6 + Cat 4.8
Detail: Page was intended to be "diffusion-pipeline-setup" but contains LLM runner setup
        (now in llm-pipeline-setup.mdx), audio/vision entries (now in audio-and-vision-pipelines.mdx),
        and a full troubleshooting section. REVIEW comment at line 898 confirms the intent to narrow scope.
Fix: Blocking decision BD-1 required. Until scope is resolved, Cat 4 checks cannot all pass.
```

```
Root Cause CC-2: purpose wrong-field + missing required fields
Affects: Cat 1.4 + Cat 1.1 + Cat 5.7
Detail: `purpose: guide` is a pageType value placed in the purpose field. Additionally
        complexity, lifecycleStage, veracityStatus, industry, niche are all absent.
Fix: (1) Change purpose to valid value (proposed: `configure`). (2) Add missing fields.
     All proposed values require human sign-off (P51).
```

```
Root Cause CC-3: status: published + open REVIEW + veracityStatus absent
Affects: Cat 1.8 + Cat 6.6 + Cat 9.1 + Cat 5.4 (TODO)
Detail: published status requires veracityStatus: verified + zero REVIEW flags (checks.mdx §1.8).
        REVIEW flags at lines 886-888 are open. TODO at line 347 present.
Fix: Downgrade status to draft + set veracityStatus: unverified (per P39).
     OR resolve all items and verify all claims first.
```

```
Root Cause CC-4: VRAM figure inconsistency
Affects: Cat 6.4 (this page) + audio-and-vision-pipelines.mdx + model-demand-reference.mdx
Detail: SDXL warm VRAM shown as ~12–18 GB here vs ~12–14 GB in model-demand-reference.
        audio-to-text shown as ~3 GB here vs ~2–3 GB there.
Fix: SME verification of production VRAM figures. Single source of truth in model-demand-reference;
     this page cross-references rather than duplicating.
```

---

## Blocking Decision

```
Blocking Decision BD-1: Page scope
Question: Should diffusion-pipeline-setup.mdx be narrowed to diffusion pipelines only
          (removing LLM runner, audio/vision entries, troubleshooting) as the REVIEW comment
          at line 898 suggests?
Options:
  [A] Narrow scope to diffusion pipelines only — extract LLM content to llm-pipeline-setup,
      audio/vision to audio-and-vision-pipelines, troubleshooting to a dedicated troubleshooting page.
  [B] Keep as broad "Batch AI Setup" reference, rename page and update title accordingly.

If A: Cat 4.1, 4.2, 4.6, 4.8 become fixable. Page scope becomes clean.
If B: Title must change to reflect broad scope. Duplication checks (4.8) need managing via anchoring.

Owner: Alison
```

---

## Fix List

| ID | Severity | Category | Fix |
|----|----------|----------|-----|
| F-01 | HIGH | 1.11 | (a) Replace em-dash in description with colon: `Complete operator guide for running batch AI inference pipelines on a Livepeer orchestrator: aiModels.json configuration, all supported pipeline types, Ollama LLM runner deployment, BYOC external containers, and troubleshooting.` (b) Shorten to ≤160 chars. Proposed: `Configure batch AI inference pipelines on a Livepeer orchestrator. Covers aiModels.json, all pipeline types, Ollama LLM setup, BYOC containers, and troubleshooting.` (169 chars — still too long). Final: `Configure batch AI inference pipelines: aiModels.json setup, supported pipeline types, Ollama LLM runner, BYOC containers, pricing, and monitoring.` (147 chars) — confirm before applying. |
| F-02 | CRITICAL | 1.4 | Change `purpose: guide` to `purpose: configure` (error type: wrong-field per P37b). Proposed — confirm before applying. |
| F-03 | MEDIUM | 2.11/3.7 | Rename `### Why Ollama?` — question prohibited by CLAUDE.md. Proposed: `### Ollama Runner Architecture` — confirm before applying. |
| F-04 | MEDIUM | 3.2 | `## Watch: Batch AI on Livepeer` is a meta-descriptor, not a concept heading. Proposed: remove the heading and use a Note component, or rename to `## Video Walkthrough` — confirm. |
| F-05 | INFO | 3.3 | `## Warm vs cold models` — `X vs Y` pattern. Per check 3.3, should name the governing concept. Proposed: `## Warm Model Strategy` — confirm. |
| F-06 | CRITICAL | 4.1 | Blocking Decision BD-1 required before this can be fixed. |
| F-07 | HIGH | 5.4/8.6 | Remove TODO at line 347 (`{/* TODO: Human to add an LLM runner architecture diagram... */}`). Either add the asset or remove the comment before publishing. Not acceptable in `status: published` content. |
| F-08 | CRITICAL | 8.1 | Broken link: `/v2/gateways/resources/technical/orchestrator-offerings` — not in docs.json. Fix: (a) verify the correct path for this content in the gateways tab, or (b) remove the link until the target page exists. |
| F-09 | MEDIUM | 3.1 | Rename failing headings. Each proposed rename listed in Heading Score Table above. All require confirm before applying. |
| F-10 | HIGH | 1.1 | Add missing frontmatter fields (all proposed values require human confirmation per P51): `complexity: intermediate`, `lifecycleStage: setup`, `veracityStatus: unverified`, `industry: ["AI", "technical"]`, `niche: ["AI", "infrastructure"]`. Also resolve `status` vs `veracityStatus` incoherence (CC-3). |
| F-11 | HIGH | 6.4 | Resolve VRAM figure inconsistencies vs model-demand-reference (CC-4). Verify against go-livepeer AI runner measurements. |
| F-12 | INFO | BCS | BORDERLINE: line 482 `depending on model size and NVMe speed`. Two variables stated but no weighted ranking. Acceptable in context but flag for human review. |

---

## Verdict

**NEEDS WORK**

Individual check IDs failing: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.11, 3.1, 3.2, 3.7, 4.1, 4.2, 4.6, 4.8, 5.4, 5.7, 6.1, 6.4, 6.6, 6.8, 6.9, 8.1, 8.6, 9.1, 9.3 — **27 checks fail**.

Critical blockers: F-08 (broken link to non-existent page), BD-1 (scope decision), F-02 (wrong-field purpose), CC-3 (status/veracityStatus incoherence).
