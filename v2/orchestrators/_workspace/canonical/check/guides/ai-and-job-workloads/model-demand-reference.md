# Per-Page Quality Check Report
## `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx`

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
| `title` | Yes | `Model and Demand Reference` | PASS | Well-formed |
| `sidebarTitle` | Yes | `Model Reference` | PASS | Concise |
| `description` | Yes | `Operator reference for GPU memory planning on Livepeer — VRAM requirements by pipeline, warm model strategy, multi-GPU configuration, aiModels.json complete schema, pricing reference, and earnings optimisation.` | FAIL | 213 chars — exceeds 160-char limit. Also contains em-dash (—) prohibited per CLAUDE.md |
| `pageType` | Yes | `reference` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `reference` | PASS | Valid 15-value canonical purpose |
| `complexity` | No | ABSENT | FAIL | Required field missing |
| `lifecycleStage` | No | ABSENT | FAIL | Required field missing |
| `keywords` | Yes | 12 keywords | PASS | `vram`, `gpu memory`, `aimodels.json`, `warm models`, `pricing` are searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct path |
| `veracityStatus` | No | ABSENT | FAIL | Required. `status: published` without `veracityStatus` is incoherent per P39. Open REVIEW flags present |
| `industry` | No | ABSENT | FAIL | Required (P41). Proposed: `industry: ["technical", "AI"]` — confirm before applying |
| `niche` | No | ABSENT | FAIL | Required (P41). Proposed: `niche: ["AI", "hardware"]` — confirm before applying |

**Required field count:** 8/10 present (title, sidebarTitle, description, pageType, audience, purpose, keywords, OG). Missing: `complexity`, `lifecycleStage`, `veracityStatus`. `industry` and `niche` absent (required per P41).

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is a valid 7-type canonical pageType |
| 1.3 | `pageVariant` valid if present | N/A | Not present. Not required for `reference` |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` is a valid 15-value canonical purpose |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — requires working knowledge of Docker, GPU, and go-livepeer. Confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` — operator consulting reference data for a running system. Confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: published` with open REVIEW flags is incoherent per P39. Must be `veracityStatus: unverified` or verified state |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required per P41. Proposed: `industry: ["technical", "AI"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required per P41. Proposed: `niche: ["AI", "hardware"]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | 213 chars — exceeds 160-char limit. Contains em-dash (—) prohibited per CLAUDE.md/P30 |
| 1.12 | OG image block complete | PASS | All 5 OG fields present and correct |
| 1.13 | `keywords` field quality | PASS | Specific, searcher-intent-aligned terms present |

**Category 1 verdict: FAIL** — checks 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 fail (7 checks)

---

## Category 2 — VOICE & COPY

**Banned word scan** (all candidates checked against actual file):
- `effectively` — not found
- `essentially` — not found
- `basically` — not found
- `meaningful` — not found
- `significant` — found at line 524: "Nodes with identical hardware but different warm model selections often show **significantly** different earnings" — FAIL (banned word)
- `real` (intensifier) — not found
- `various` — not found
- `several` — not found
- `obviously` — not found
- `clearly` — not found

**Banned phrase scan:**
- "This section covers" — not found
- "This page covers / explains / walks you through" — not found
- "Use this reference" at line 39 — "Use this reference for pipeline-level VRAM figures, warm model strategy, multi-GPU patterns, and complete `aiModels.json` field documentation." — FAIL: "Use this reference" is a meta-document description opener. Per check 2.4: `This page [verb]` construction. Also see check 2.4 scan
- "and so on" / "etc." — not found
- "rather than" — not found
- "can generate" / "may produce" in value claims — scanning below

**Em-dash scan** (all visible text — P30):
- Frontmatter `description` field (line 7): `—` em-dash — FAIL
- Body prose: no em-dashes found in H2/H3 headings
- AccordionGroup titles: "pipeline (required)", "model_id (required)", "price_per_unit (required)", "warm (optional)", "pixels_per_unit (optional)", "currency (optional)", "url (optional)", "token (optional)", "capacity (optional)", "optimization_flags (optional)" — no em-dashes
- Note block line 78: no em-dash
- Tip block line 67: no em-dash

**Banned construction scan** (all `can`, `may`, `if [condition]`, `not [X]` candidates):
- Line 39: "Use this reference for..." — self-referential opener. `This page [verb]` class per check 2.4. FAIL
- Line 68: "A lightweight pipeline with visible demand usually beats an impressive model sitting outside current gateway routing." — no banned construction. Declarative assertion
- Line 237: "The Beta warm model constraint" section — no banned constructions
- Line 262: "**Exception:** Whisper is small enough (3 GB) that some operators co-warm it alongside a diffusion model without conflict, but that result stays hardware-dependent." — `that result stays hardware-dependent` is a hedged caveat but not a banned construction
- Line 484: "For Ollama with multiple loaded models or hardware built for parallel inference, increasing capacity improves throughput." — no banned construction

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found. `optimisations` not present; `optimise` used correctly in heading (line 510) |
| 2.2 | Zero banned words | FAIL | `significantly` at line 524: "often show **significantly** different earnings" — `significantly` is banned as an intensifier. Verified against file |
| 2.3 | Zero banned phrases | PASS | Banned phrase list checked. "Use this reference" is addressed in 2.4. No other banned phrases |
| 2.4 | Zero banned constructions | FAIL | Line 39: "Use this reference for pipeline-level VRAM figures, warm model strategy, multi-GPU patterns, and complete `aiModels.json` field documentation." — self-referential opener (`This page [verb]` class). Description field em-dash also captured here via P30 |
| 2.5 | Opening order correct | FAIL | Line 37 opens with a factual assertion ("GPU memory (VRAM) is the primary constraint") — PASS. But line 39 follows immediately with "Use this reference for..." which is a self-referential meta-description. The value-first opening at line 37 is good; line 39 undermines it |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. Sections end on fact or instruction |
| 2.7 | Audience register correct | PASS | Technical operator register. Reference-page tone appropriate |
| 2.8 | Per-audience prohibited phrases absent | PASS | No orchestrator-prohibited phrases found |
| 2.9 | No passive value statements | PASS | Value claims are specific: earnings figures link to live Explorer, VRAM ranges stated as estimates with caveat |
| 2.10 | No hedging openers | PASS | Page opens with factual constraint statement |
| 2.11 | Terminology locked and consistent | PASS | `BYOC`, `aiModels.json`, `warm/cold`, `active set` consistent. `BYOC` first appears at line 612 in prose with inline definition — correct per first-use rule |

### Banned Construction Scan

| Location | Construction | Classification | Proposed fix |
|---|---|---|---|
| Line 39 | "Use this reference for pipeline-level VRAM figures, warm model strategy, multi-GPU patterns, and complete `aiModels.json` field documentation." | FAIL — `This page [verb]` class per check 2.4 | Delete the sentence. The page purpose is evident from the title and preceding sentence. Proposed: remove line 39 entirely — confirm before applying |
| Line 524 | "often show **significantly** different earnings" | FAIL — banned word (2.2) | Proposed: "often show materially different earnings" — but `materially` is in the same register. Better: "often show large earnings differences" — confirm before applying |
| Description field (line 7) | Em-dash `—` | FAIL — P30 | Replace em-dash with colon: `Operator reference for GPU memory planning on Livepeer: VRAM requirements by pipeline, warm model strategy, multi-GPU configuration, aiModels.json complete schema, pricing reference, and earnings optimisation.` (also trim to ≤160 chars) — confirm before applying |

**Category 2 verdict: FAIL** — checks 2.2, 2.4, 2.5 fail (3 checks)

---

## Category 3 — SECTION NAMING & HEADINGS

*(Note: `## Related` heading at line 626 — same convention as diffusion-pipeline-setup.mdx. `Related` is OK tier. Evaluated normally.)*

### Heading Score Table

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|---|
| Demand signals | H2 | 4 | 4 | 5 | 5 | 5 | **23/25** |
| VRAM by pipeline | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| GPU reference by persona | H2 | 4 | 4 | 5 | 4 | 4 | **21/25** |
| Consumer GPU tier (8–12 GB VRAM) | H3 | 5 | 4 | 5 | 5 | 3 | **22/25** |
| Mid tier (16–20 GB VRAM) | H3 | 4 | 4 | 5 | 5 | 4 | **22/25** |
| High tier (24 GB+ per GPU, multiple GPUs) | H3 | 5 | 4 | 5 | 5 | 2 | **21/25** |
| Warm vs cold — when it matters | H2 | 4 | 4 | 4 | 5 | 4 | **21/25** |
| Pipelines where warm is competitively critical | H3 | 4 | 4 | 4 | 5 | 3 | **20/25** |
| Pipelines where cold loading is acceptable | H3 | 4 | 4 | 4 | 5 | 3 | **20/25** |
| The Beta warm model constraint | H3 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Multi-GPU configuration | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| aiModels.json complete schema | H2 | 5 | 5 | 5 | 5 | 4 | **24/25** |
| Model selection and earnings | H2 | 4 | 4 | 4 | 5 | 4 | **21/25** |
| Tracking performance | H3 | 3 | 3 | 4 | 4 | 4 | **18/25** |
| Model selection heuristics | H3 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Pricing strategy | H2 | 4 | 3 | 4 | 4 | 4 | **19/25** |
| Understanding the market | H3 | 3 | 3 | 3 | 3 | 4 | **16/25** |
| Reference pricing (late 2025) | H3 | 4 | 3 | 3 | 4 | 4 | **18/25** |
| GPU economics at scale | H3 | 4 | 4 | 4 | 4 | 4 | **20/25** |
| Hosting custom models (BYOC) | H2 | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Related | H2 | 2 | 1 | 3 | 3 | 5 | **14/25** |

**Failing headings (below 20/25):**
- `Tracking performance` — 18/25. Generic gerund + noun. No domain anchor
- `Pricing strategy` — 19/25. Generic topic label
- `Understanding the market` — 16/25. "Understanding X" is a flagged pattern per check 2.3. As a heading: gerund form, no domain anchor. Also conceptually vague
- `Reference pricing (late 2025)` — 18/25. Stability concern: "(late 2025)" will become stale
- `Related` — 14/25. Bare `Related` — functional but minimal

Note: `Warm vs cold — when it matters` (H2) contains an em-dash. P30/P48 scope: this is an H2 heading — em-dashes are prohibited in all visible text. FAIL — separate from score.

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading scores ≥20/25 | FAIL | `Tracking performance` 18, `Pricing strategy` 19, `Understanding the market` 16, `Reference pricing (late 2025)` 18, `Related` 14 fail |
| 3.2 | No banned or weak standalone heading terms | FAIL | `Understanding the market` — "Understanding" as a gerund opener is a known weak pattern. No domain anchor. `Pricing strategy` — generic topic label. `Related` — bare single-word heading |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | FAIL | `Tracking performance`, `Understanding the market`, `Pricing strategy` contain no Livepeer-domain noun |
| 3.5 | Heading names concept, not examples | PASS | GPU tier headings correctly name hardware tiers with VRAM specs |
| 3.6 | Title well-formed | PASS | `Model and Demand Reference` — 4 words, concept-derived |
| 3.7 | Sounds like expert editorial choice | FAIL | `Understanding the market`, `Tracking performance`, `Watch: Batch AI on Livepeer` absent here. `Understanding the market` is the weakest heading on this page — vague, not expert-editorial |

**Em-dash in headings (P30):**
`## Warm vs cold — when it matters` — em-dash in H2 heading. FAIL. See Banned Construction Scan.

| Location | Construction | Classification | Proposed fix |
|---|---|---|---|
| H2: `Warm vs cold — when it matters` | Em-dash in heading | FAIL — P30 | Proposed: `Warm vs Cold: When It Matters` or rename to concept-based heading: `Warm Model Priority` — confirm before applying |

**Category 3 verdict: FAIL** — checks 3.1, 3.2, 3.4, 3.7 fail (4 checks)

---

## Category 4 — PAGE STRUCTURE & CONTENT ARCHITECTURE

Nav sequence from docs.json lines 2894–2905:
`workload-options` → `video-transcoding-operations` → `ai-inference-operations` → `diffusion-pipeline-setup` → `llm-pipeline-setup` → `realtime-ai-setup` → `audio-and-vision-pipelines` → **`model-demand-reference`** → `model-hosting`

PREV_PAGE: `audio-and-vision-pipelines` | NEXT_PAGE: `model-hosting`

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | INFO | Page covers VRAM by pipeline, GPU tiers, warm/cold strategy, multi-GPU configuration, aiModels.json complete schema, pricing, and BYOC. This is a reference page (`pageType: reference`, `purpose: reference`) — breadth is appropriate for this page type. Reference pages serve lookup, not single-task |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator look up VRAM requirements, pricing guidance, and aiModels.json field documentation for any pipeline." — passes for a reference page |
| 4.3 | PREV_PAGE/NEXT_PAGE adjacency correct | PASS | Confirmed from docs.json lines 2902–2904. Arrives from audio-and-vision-pipelines (pipeline setup). Proceeds to model-hosting. Reference position in the section is correct — after setup guides, before model hosting specifics |
| 4.4 | No dead ends | PASS | Related CardGroup provides four onward paths |
| 4.5 | Prerequisites stated or linked | INFO | No explicit Prerequisites section. For a reference page, this is appropriate — reader arrives with an existing system. Opening paragraph sets context |
| 4.6 | Out-of-scope is clear | PASS | Scope is VRAM/demand reference. aiModels.json schema and pricing. Clear from structure |
| 4.7 | Information type per section correct | PASS | `purpose: reference` → permitted primary types: factual, technical, structural. VRAM tables (factual/technical), GPU tiers (technical), aiModels.json schema (technical), pricing tables (factual) — all within permitted types |
| 4.8 | No content duplication from adjacent sections | FAIL | aiModels.json complete schema section (lines 316–506) duplicates substantial content from `diffusion-pipeline-setup.mdx` (lines 99–168) — field reference table is nearly identical. VRAM figures overlap with `audio-and-vision-pipelines.mdx`. This page is positioned as the canonical reference, but duplication exists |
| 4.9 | Section orientation page present | N/A | Section orientation is `ai-inference-operations` |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: FAIL** — check 4.8 fails (1 check)

---

## Category 5 — LAYOUT & COMPONENTS

Component policy read from `docs-guide/policies/component-layout-decisions.mdx`. For `reference`: Required sections: Reference. Preferred: ParamField, ResponseField, CodeGroup, Tabs, Table. Avoid: TODO/TBD/Coming Soon.

**Dead import check (P9):** No unused imports. `StyledTable`, `TableRow`, `TableCell`, `CustomDivider` all used in page body.

**Components used:**
- `StyledTable`, `TableRow`, `TableCell` — VRAM table, pricing tables, model heuristics
- `CustomDivider` — section separator
- `AccordionGroup`, `Accordion` — aiModels.json schema fields
- `Note`, `Tip` — callout blocks
- `CardGroup`, `Card` — related pages
- Code blocks — JSON examples, bash commands

**Note:** For `reference` pageType, preferred components include `ParamField` and `ResponseField` for structured field documentation. The aiModels.json schema section uses `AccordionGroup/Accordion` instead. Per P22: AccordionGroup is not in the Preferred list for `reference` but is in the Preferred list for `concept`. The use here is NOT-TESTED against approval status.

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | INFO | `reference` requires Reference section. Page is structured as a reference with multiple lookup tables. Template is approximated. Preferred `ParamField` not used for field documentation — `AccordionGroup` used instead |
| 5.2 | Required sections present | PASS | Reference content (VRAM tables, schema, pricing) present throughout |
| 5.3 | Only approved components used | NOT-TESTED | `CustomDivider`, `StyledTable` are custom components. `AccordionGroup` is standard but not in Preferred list for `reference`. Per P22: NOT-TESTED |
| 5.4 | Avoided components absent | PASS | No TODO/TBD, Coming Soon. REVIEW flags in JSX comments only |
| 5.5 | Information type → component mapping correct | PASS | Factual reference data uses tables. Schema uses AccordionGroup (functional choice). Operational context uses Note/Tip |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot run live render. No obvious JSX errors |
| 5.7 | No old-schema frontmatter | PASS | `pageType: reference`, `purpose: reference` — both valid canonical values. `status: published` without `veracityStatus` is incoherent per P39 but that is covered by check 1.8 |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | All imports used. PascalCase. Correct paths |

**Category 5 verdict: PASS** — 0 checks fail (NOTE on template and component choices — see INFO items)

---

## Category 6 — VERACITY & FACTUAL ACCURACY

**Open REVIEW flags in file (lines 641–663):**
1. Validate VRAM figures against current go-livepeer AI runner container measurements
2. Validate illustrative pricing figures against current Explorer data before publication

### Veracity Claims Inventory

| Claim | Line | Type | Status | Source |
|---|---|---|---|---|
| VRAM figures for all pipelines in main table | 82–173 | technical | UNVERIFIED — REVIEW flag | go-livepeer AI runner container measurements |
| audio-to-text Whisper "~2–3 GB warm / ~3–4 GB peak" | 120–122 | technical | INCONSISTENT with audio-and-vision-pipelines.mdx ("~3 GB") and diffusion-pipeline-setup.mdx ("~3 GB") | SME verification needed |
| SAM2 large "~4–6 GB warm / ~6–8 GB peak" | 133–137 | technical | INCONSISTENT with audio-and-vision-pipelines.mdx ("12–24 GB") and diffusion-pipeline-setup.mdx ("12–24 GB") | SME verification needed |
| audio-to-text cold load "~3–5 seconds" | 232 | technical | UNVERIFIED | Live system testing |
| Beta constraint: only one warm model per GPU | 237–239 | technical | UNVERIFIED | go-livepeer Beta release notes |
| SFAST speedup "up to 25%" | 491–492 | technical | UNVERIFIED | Stable Fast benchmark data |
| DEEPCACHE speedup "up to 50%" | 497 | technical | UNVERIFIED | DeepCache benchmark data |
| Reference pricing table (late 2025) | 569–599 | evaluative | UNVERIFIED — REVIEW flag | Current Explorer data |
| `significantly` different earnings claim | 524 | evaluative | FAIL — banned word. Also unverified |
| Whisper "3 GB" exception for co-warming | 261 | technical | UNVERIFIED — "hardware-dependent" caveat present | Live system testing |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | Two open REVIEW flags. VRAM inconsistencies across three pages (CC-1). Multiple unverified benchmark claims (SFAST 25%, DEEPCACHE 50%) |
| 6.2 | Code/commands tested | NOT-TESTED | Docker bash commands and JSON examples not tested against live system |
| 6.3 | No deprecated API usage | PASS | No deprecated CLI flags referenced |
| 6.4 | Numbers are real | FAIL | VRAM inconsistencies: audio-to-text "~2–3 GB" here vs "~3 GB" in audio-and-vision-pipelines and diffusion-pipeline-setup. SAM2: "~4–6 GB warm" here vs "12–24 GB" in audio-and-vision-pipelines and diffusion-pipeline-setup. This page is the most detailed and range-based — likely the more accurate source, but all three pages need reconciliation. Pricing table labelled "late 2025" — staleness risk |
| 6.5 | REVIEW flags for unverified claims | PASS | Two REVIEW flags at bottom of file |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. `status: published` with open REVIEW flags is incoherent per P39 |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | FAIL | Pricing table "Reference pricing (late 2025)" — staleness risk. "late-2025 ETH/USD rates" across multiple pricing annotations |
| 6.9 | No open-ended research tasks | PASS | REVIEW items 1 and 2 are specific: validate VRAM against go-livepeer measurements, validate pricing against current Explorer data. Both have named sources. Passes on specificity, though no URLs provided |

**Category 6 verdict: FAIL** — checks 6.1, 6.4, 6.6, 6.8 fail (4 checks)

---

## Category 7 — NAVIGATION & IA

docs.json lines 2894–2905 read. Full path `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` confirmed at line 2903.

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Confirmed: docs.json line 2903 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry exactly |
| 7.3 | Tab entry portal routes to all sections | N/A | Not the tab entry portal |
| 7.4 | No structural orphans | PASS | Reachable from Workloads and AI group |
| 7.5 | Audience journey complete | PASS | Position 8 of 9. Reference page placed after setup guides — correct. Operator has set up pipelines and now needs reference data |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | Published in `v2/orchestrators/guides/` |
| 7.8 | File naming conventions | PASS | `model-demand-reference.mdx` — correct convention |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS** — 0 checks fail

---

## Category 8 — LINKS & RENDERING

**Internal links verified against docs.json:**
- `/v2/orchestrators/concepts/incentive-model` — PASS (line 2843)
- `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` — PASS (line 2899)
- `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` — PASS (line 2901)
- `/v2/orchestrators/setup/rcs-requirements` — PASS (line 2861)
- `/v2/orchestrators/guides/advanced-operations/scale-operations` — PASS (line 2942)

**External links found:**
- `https://tools.livepeer.cloud/ai/network-capabilities` — lines 56, 521
- `https://explorer.livepeer.org` — lines 62, 521, 567, 606
- `https://explorer.livepeer.org/orchestrators` — line 62
- `https://github.com/chengzeyi/stable-fast` — line 503
- `https://github.com/horseee/DeepCache` — line 503

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | All 5 internal links confirmed in docs.json |
| 8.2 | All external links live | NOT-TESTED | External links not verifiable in this environment |
| 8.3 | All snippet imports resolve | NOT-TESTED | Import paths match site pattern |
| 8.4 | All images load | N/A | No image assets beyond OG block |
| 8.5 | Page renders without error | NOT-TESTED | Cannot run live render. No obvious JSX errors. AccordionGroup double-space before attribute noted at lines 322 (`<Accordion  title=`) — may be a style issue but not a render error |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | REVIEW flags in JSX comments only |

**Category 8 verdict: PASS** — 0 checks fail

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

**CC-1: VRAM inconsistency — canonical reference vs setup pages**
Affects: 6.4, 4.8
This page is the most detailed VRAM reference on the site. It gives ranges (warm VRAM / peak inference VRAM), while the setup pages give single-point estimates. Specifically:
- Audio-to-text Whisper: "~2–3 GB warm / ~3–4 GB peak" (this page) vs "~3 GB warm" (audio-and-vision-pipelines, diffusion-pipeline-setup)
- SAM2 large: "~4–6 GB warm / ~6–8 GB peak" (this page) vs "12–24 GB depending on model variant" (audio-and-vision-pipelines, diffusion-pipeline-setup)
This page's figures appear more carefully stated (range format, warm vs peak distinction). Root fix: treat this page as authoritative and update the setup pages to match after SME verification.

**CC-2: `status: published` + absent `veracityStatus`**
Affects: 1.8, 6.6, 9.1
Same pattern as diffusion-pipeline-setup. Per P39: `status: published` requires `veracityStatus: verified`. Fix: downgrade `status` to `draft` and add `veracityStatus: unverified` until REVIEW flags resolved.

**CC-3: Em-dash in description + H2 heading**
Affects: 1.11, 2.4
Two em-dash violations: description field and `## Warm vs cold — when it matters`. Root fix: replace both with colons or restructure.

**CC-4: `significantly` banned word + unverified earnings claim**
Affects: 2.2, 6.1
"often show **significantly** different earnings" — both a banned word violation and an unverified evaluative claim. Fix both together: remove banned word and either cite the claim or restructure as a conditional.

---

## Blocking Decisions

**BD-1:** VRAM authority — this page appears to be the most accurate VRAM reference (range format, warm/peak distinction). If this is the canonical source, the setup pages should be updated to match its figures after SME verification. Decision: confirm this page as the VRAM authority before updating downstream pages.

---

## Verdict Summary

**Overall: NEEDS WORK**

Checks failing: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 2.5, 3.1, 3.2, 3.4, 3.7, 4.8, 6.1, 6.4, 6.6, 6.8, 9.1, 9.3

**21 checks fail.**

---

## Prioritised Fix List

**F-01** | CRITICAL | 1.8, 6.6, 9.1, CC-2 | Resolve `status: published` + `veracityStatus` incoherence
Change `status: published` to `status: draft` and add `veracityStatus: unverified` — confirm before applying. Per P39: `status: published` + `veracityStatus: unverified` is not a valid combination.

**F-02** | CRITICAL | 6.1, 6.4, CC-1 | Confirm as canonical VRAM authority and reconcile with setup pages
VRAM figures in this page (ranges with warm/peak distinction) are more precise than the setup pages. SME verification needed. Once verified: treat this page as authoritative source and update audio-and-vision-pipelines and diffusion-pipeline-setup to match. Route to BD-1. Do not apply until confirmed.

**F-03** | HIGH | 1.1, 1.6, 1.7, 1.9, 1.10 | Add missing required frontmatter fields
Proposed: `complexity: intermediate` — confirm before applying. `lifecycleStage: operate` — confirm before applying. `industry: ["technical", "AI"]` — confirm before applying. `niche: ["AI", "hardware"]` — confirm before applying.

**F-04** | HIGH | 1.11, 2.4, CC-3 | Fix description: length and em-dash
Current description is 213 chars and contains em-dash. Proposed (≤160 chars, no em-dash): `Operator reference for GPU memory planning on Livepeer: VRAM requirements by pipeline, warm model strategy, multi-GPU configuration, and aiModels.json field documentation.` (169 chars — needs final 9-char trim). Confirm before applying.

**F-05** | HIGH | 2.2, CC-4 | Fix banned word `significantly`
Line 524: "often show **significantly** different earnings" → Proposed: "often show markedly different earnings" — confirm before applying. (Note: `markedly` is not on the banned list but check before applying that it does not introduce a similar intensifier problem.)

**F-06** | HIGH | 2.4 | Remove self-referential opener
Line 39: "Use this reference for pipeline-level VRAM figures, warm model strategy, multi-GPU patterns, and complete `aiModels.json` field documentation." — delete this sentence. The content purpose is conveyed by the surrounding sentences. (Resolves 2.4 and 2.5.)

**F-07** | HIGH | 2.4, 3.1, CC-3 | Remove em-dash from H2 heading
`## Warm vs cold — when it matters` → Proposed: `## Warm Model Priority` (concept-based rename at 20/25) — confirm before applying. This also resolves the 19/25 heading score concern for `Pricing strategy`.

**F-08** | HIGH | 3.1, 3.2, 3.4, 3.7 | Rename failing headings
`## Pricing strategy` (19/25) → Proposed: `## Pricing Reference` — confirm before applying.
`### Understanding the market` (16/25, "Understanding" gerund) → Proposed: `### Market Conditions` — confirm before applying.
`### Tracking performance` (18/25) → Proposed: `### Performance Monitoring` — confirm before applying.
`### Reference pricing (late 2025)` (18/25, stale date in heading) → Proposed: `### Reference Pricing` (remove date) — confirm before applying.

**F-09** | MEDIUM | 4.8 | Resolve aiModels.json schema duplication with diffusion-pipeline-setup
The complete field reference table in diffusion-pipeline-setup.mdx and the `AccordionGroup` schema here cover the same content. Once the scope decision for diffusion-pipeline-setup is made (that page's BD-1), decide whether this page is the canonical schema reference and diffusion-pipeline-setup links here instead.

**F-10** | MEDIUM | 6.8 | Address pricing staleness
`Reference pricing (late 2025)` heading and ETH/USD conversion annotations — remove the date from the heading (see F-08). Add REVIEW flag to pricing table: `{/* REVIEW: validate all pricing figures against current Explorer data before publication */}`.

**F-11** | INFO | — | Double space in Accordion attribute
Lines 322, 341, 354, etc.: `<Accordion  title=` (two spaces before `title`). Not a render error but a style inconsistency. Clean up whitespace.

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Model and Demand Reference` | PASS | Subject-first |
| `sidebarTitle` | Yes | `Model Reference` | PASS | Concise |
| `description` | Yes | `Operator reference for GPU memory planning on Livepeer — VRAM requirements by pipeline, warm model strategy, multi-GPU configuration, aiModels.json complete schema, pricing reference, and earnings optimisation.` | FAIL | (a) Em-dash (—) in description violates P30 prohibition. (b) 214 chars — exceeds 160-char limit (check 1.11). |
| `pageType` | Yes | `reference` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid 7-token value |
| `purpose` | Yes | `reference` | PASS | Valid 15-value canonical purpose |
| `complexity` | No | ABSENT | FAIL | Required field missing. Proposed: `complexity: intermediate` — confirm before applying (P51). |
| `lifecycleStage` | No | ABSENT | FAIL | Required field missing. Proposed: `lifecycleStage: operate` — confirm before applying (P51). This is a reference page for active operators making model decisions. |
| `keywords` | Yes | 11 keywords | BORDERLINE | `livepeer`, `orchestrator`, `models`, `gpu memory` generic. `aimodels.json`, `warm models`, `rtx 4090`, `a100` are specific. |
| OG image block | Yes | 5 fields present | PASS | All OG fields correct |
| `status` | Yes | `published` | INFO | `status: published` with open REVIEW flags requires `veracityStatus: verified` per checks.mdx §1.8. Conflict with veracityStatus absent. |
| `lastVerified` | Yes | `2026-03-13` | PASS | Present |
| `veracityStatus` | No | ABSENT | FAIL | Required (check 1.8). `status: published` + open REVIEW flags = incoherent. Per P39: either (a) set `status: draft` + `veracityStatus: unverified`, or (b) resolve all items and set `veracityStatus: verified`. Proposed: `status: draft` + `veracityStatus: unverified` — confirm before applying. |
| `industry` | No | ABSENT | FAIL | Required (P41). Proposed: `industry: ["AI", "technical"]` — confirm before applying (P51). |
| `niche` | No | ABSENT | FAIL | Required (P41). Proposed: `niche: ["AI", "hardware"]` — confirm before applying (P51). |

**Summary:** 7 fields FAIL (description issues, complexity absent, lifecycleStage absent, veracityStatus absent, status incoherence, industry absent, niche absent).

---

## Category 1 — Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is valid (P50) |
| 1.3 | `pageVariant` valid if present | N/A — not present | No migration needed for `reference`. |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` read directly from frontmatter. Valid. |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: operate` |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: published` + open REVIEW flags at lines 641–663 is incoherent per checks.mdx §1.8. Fix: `status: draft` + `veracityStatus: unverified` (P39). |
| 1.9 | `industry` array valid if present | FAIL | Field absent (P41 — required). Proposed: `["AI", "technical"]` |
| 1.10 | `niche` array valid if present | FAIL | Field absent (P41 — required). Proposed: `["AI", "hardware"]` |
| 1.11 | `description` well-formed | FAIL | Em-dash in description (P30). 214 chars exceeds 160-char limit. |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | BORDERLINE | `livepeer`, `orchestrator` generic. `aimodels.json`, `warm models`, `rtx 4090`, `a100` strong. |

**Category 1 verdict:** 7 checks FAIL: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — Voice & Copy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | `optimisation` (line 7, line 524 — see below) — wait. Line 524 body text: "Nodes with identical hardware but different warm model selections often show **significantly** different earnings" — `significantly` is a BANNED WORD (check 2.2), not a UK English issue. No US spellings found. Check 2.1 PASS. |
| 2.2 | Zero banned words | FAIL | `significantly` found at line 524 (body prose): "often show significantly different earnings — the warm pipeline choice matters more than raw GPU performance." `significantly` is a banned word per CLAUDE.md. See F-01. |
| 2.3 | Zero banned phrases | PASS | `rather than` — not found. `This section covers` — not found. `depends on various` — checked: line 37 uses "all follow from that VRAM budget" (not `depends on`). No violations. |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan. `not [X]` construction found at lines 189–190. `if [condition]` candidates found. See F-02. |
| 2.5 | Opening order correct | PASS | Opens with: "GPU memory (VRAM) is the primary constraint for AI inference operators on Livepeer." Subject and constraint stated immediately. |
| 2.6 | Paragraph discipline | PASS | Lead sentences state facts. Final sentences end on facts, numbers, or actions. |
| 2.7 | Audience register correct | PASS | Peer-technical. Direct. No hand-holding. Correct for orchestrator reference page. |
| 2.8 | Per-audience prohibited phrases absent | PASS | `easy to set up` — not found. `the network rewards you for` — not found. |
| 2.9 | No passive value statements | PASS | Value claims quantified: "~12–14 GB warm VRAM", "30–90 seconds cold load", "up to 25% speedup", "up to 50% speedup". |
| 2.10 | No hedging openers | PASS | Direct opening with factual constraint. |
| 2.11 | Terminology locked and consistent | PASS | `BYOC`, `aiModels.json`, `VRAM`, `Ollama`, `warm`/`cold` — consistent. `BYOC` defined at first use (line 612). |

**Category 2 verdict:** 2 checks FAIL: 2.2, 2.4

---

## Category 3 — Section Naming & Headings

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | See Heading Score Table. Multiple headings fail. |
| 3.2 | No banned or weak standalone heading terms | FAIL | `## Related` (line 624) — `Related` is in the OK tier per Frameworks.mdx §4.1. Not banned. However, as a standalone, it provides limited signal. INFO only, not FAIL. Correct check 3.2 to PASS. |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. |
| 3.4 | Domain-anchor rule applied | FAIL | `## GPU reference by persona` — `persona` is not a domain term in the locked taxonomy. The section is about GPU tiers, not personas in the UX sense. Confusing domain signal. See F-03. |
| 3.5 | Heading names concept, not examples | FAIL | `### Consumer GPU tier (8–12 GB VRAM)`, `### Mid tier (16–20 GB VRAM)`, `### High tier (24 GB+ per GPU, multiple GPUs)` — these include parenthetical VRAM specs inline in the heading. While informative, the pattern mixes concept and example. Not a hard FAIL but flagged for scoring impact. |
| 3.6 | Title well-formed | PASS | `Model and Demand Reference` — 4 words, concept-derived. |
| 3.7 | Sounds like expert editorial choice | FAIL | `## GPU reference by persona` — `persona` is a UX/product term, not an operator domain term. `## Model selection and earnings` — acceptable. `## Warm vs cold — when it matters` — em-dash in heading violates P30/P48 prohibition. See F-04. |

**Category 3 verdict:** 3 checks FAIL: 3.1, 3.4, 3.7

*(Check 3.2 corrected to PASS — `Related` is in the OK tier.)*

---

## Category 4 — Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | One job: look up VRAM requirements, model-demand signals, warm/cold strategy, aiModels.json schema, and pricing by pipeline. One audience: orchestrator. Well-scoped as a reference page. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator look up pipeline VRAM budgets, current demand signals, warm strategy, aiModels.json field schema, and reference pricing for each pipeline." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json lines 2902–2904: `audio-and-vision-pipelines` → **`model-demand-reference`** → `model-hosting`. Previous: audio/vision pipeline setup (specific configurations). Next: model hosting / BYOC. This reference page consolidates lookup data the reader needs after configuring specific pipelines. Adjacency is logical. |
| 4.4 | No dead ends | PASS | `## Related` section (lines 624–639) provides 4 onward paths. |
| 4.5 | Prerequisites stated or linked | N/A | Reference page — no prerequisites needed. Reader arrives with a lookup intent. |
| 4.6 | Out-of-scope is clear | PASS | Scope is reference data: VRAM, demand signals, pricing, schema. Operational decisions are linked, not absorbed. |
| 4.7 | Information type per section correct | PASS | `purpose: reference`. Permitted primary types: `factual`, `technical`. Secondary: `structural`. All sections: VRAM table (factual/technical), demand signals (factual/evaluative), GPU tiers (factual/analytical), warm/cold (factual/analytical), aiModels.json schema (technical), pricing reference (factual). All align. |
| 4.8 | No content duplication from adjacent sections | FAIL | aiModels.json complete schema (lines 316–506) is substantially duplicated in `diffusion-pipeline-setup.mdx` (lines 101–168, aiModels.json field reference table). VRAM figures also duplicated across pages. See CC-1. |
| 4.9 | Section orientation page present | N/A |
| 4.10 | Cross-tab links at journey intersections | N/A |

**Category 4 verdict:** 1 check FAIL: 4.8

---

## Category 5 — Layout, Components & Template

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | PASS | `reference` template: Reference section. Page uses AccordionGroup for schema entries, StyledTable for data tables, CustomDivider for section breaks. Consistent with reference pageType. |
| 5.2 | Required sections present | PASS | `reference` requires Reference section. The aiModels.json schema (lines 316–506) is the central reference section. Present. |
| 5.3 | Only approved components used | NOT-TESTED | Components: `StyledTable`/`TableRow`/`TableCell`, `CustomDivider`, `AccordionGroup`/`Accordion`, `CardGroup`/`Card`, `Note`, `Tip`. Not-tested per P22. |
| 5.4 | Avoided components absent | PASS | No TODO, TBD, Coming Soon. REVIEW flags in JSX comments at bottom. |
| 5.5 | Information type → component mapping | PASS | Factual data in tables. Schema entries in AccordionGroup. Conceptual notes in Note/Tip. Code blocks for examples. Correct mapping. |
| 5.6 | MDX renders clean | NOT-TESTED | No obvious JSX errors. StyledTable used without `<thead>` wrapper in some places (lines 50–65) — using TableRow directly inside StyledTable. Inconsistent with usage pattern in other pages. May cause render issues depending on component implementation. Flag as risk. See F-05. |
| 5.7 | No old-schema frontmatter | PASS | `pageType: reference` and `purpose: reference` are both valid canonical values. |
| 5.8 | CSS uses custom properties only | N/A |
| 5.9 | Generated file banners intact | N/A |
| 5.10 | Component naming/import conventions | PASS | PascalCase. Correct import paths. |

**Category 5 verdict:** 1 potential issue: 5.6 (NOT-TESTED, flagged as render risk)

---

## Category 6 — Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | REVIEW block at lines 641–663 flags 2 open items: (1) validate VRAM figures against go-livepeer AI runner container measurements, (2) validate illustrative pricing figures against current Explorer data. NOT-TESTED against primary sources. |
| 6.2 | Code/commands tested | NOT-TESTED | CUDA device assignment commands (lines 270–276) not tested. |
| 6.3 | No deprecated API usage | NOT-TESTED | No CLI flags referenced. `url` field with `whisper-runner:8001` in multi-GPU example (line 298) — non-standard usage (Whisper normally uses standard ai-runner, not a URL-based runner). See F-06. |
| 6.4 | Numbers are real | FAIL | Multiple unverified figures: (a) Diffusion VRAM: `text-to-image` SDXL Lightning "~12–14 GB warm" here vs "~12–18 GB" in diffusion-pipeline-setup.mdx — inconsistency. (b) `segment-anything-2` SAM2 large "~4–6 GB warm" here vs "12–24 GB" in audio-and-vision-pipelines.mdx — significant inconsistency across pages. (c) `live-video-to-video` StreamDiffusion + SD 1.5 "~8–12 GB warm" — REVIEW flagged. (d) `audio-to-text` Whisper "~2–3 GB" here vs "~3 GB" in audio-and-vision-pipelines.mdx — minor inconsistency. (e) RTX 2060 listed as "6 GB" at line 181 (the RTX 2060 has 6 GB; RTX 2060 Super has 8 GB — distinction matters for accuracy). |
| 6.5 | REVIEW flags for unverified claims | PASS | REVIEW block at lines 641–663 covers veracity and sourcing items. |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. `status: published` + open REVIEW items = incoherent. |
| 6.7 | Authoritative vs AI-generated glossary | N/A |
| 6.8 | Source staleness check | FAIL | Pricing reference table (lines 569–600) is "Reference pricing (late 2025)" — explicitly time-qualified, staleness risk. REVIEW block flags this. `$0.18 per million tokens` — staleness risk. |
| 6.9 | No open-ended research tasks | FAIL | REVIEW item: "Validate VRAM figures against current go-livepeer AI runner container measurements." No named source authority (go-livepeer GitHub? Community benchmarks?). Open-ended. |

**Category 6 verdict:** 5 checks FAIL: 6.1, 6.4, 6.6, 6.8, 6.9

---

## Category 7 — Navigation & Information Architecture

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2903: `"v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference"` |
| 7.2 | Navigation matches file system | PASS | Path matches exactly. |
| 7.3 | Tab entry portal routes to all sections | N/A |
| 7.4 | No structural orphans | PASS | Reachable from nav. |
| 7.5 | Audience journey complete | PASS | Position 8 of 9 in Workloads and AI. Reference page sits correctly after all pipeline setup pages — operators consult it while configuring. |
| 7.6 | Cross-tab graduation paths exist | N/A |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/`. |
| 7.8 | File naming conventions | PASS | `model-demand-reference.mdx` — correct. |
| 7.9 | `_workspace/` TTL | N/A |

**Category 7 verdict:** All applicable checks PASS.

---

## Category 8 — Links & Rendering

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | FAIL | Verified: `/v2/orchestrators/concepts/incentive-model` — PASS (docs.json line 2843). `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` — PASS (line 2899). `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` — PASS (line 2901). `/v2/orchestrators/setup/rcs-requirements` — PASS (line 2861). **FAIL:** `/v2/orchestrators/guides/advanced-operations/scale-operations` — labelled as "Hosting Models (BYOC)" in Card text. docs.json line 2942 confirms `scale-operations` exists. PASS. **FAIL check:** `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` (line 627 in Card href) — PASS. All verified internal links PASS. No broken internal links found. |
| 8.2 | All external links live | NOT-TESTED | `tools.livepeer.cloud/ai/network-capabilities` (×2), `explorer.livepeer.org` (×2), `github.com/chengzeyi/stable-fast`, `github.com/horseee/DeepCache` — not testable. |
| 8.3 | All snippet imports resolve | PASS | `StyledTable`/`TableRow`/`TableCell`, `CustomDivider` — standard. |
| 8.4 | All images load | N/A |
| 8.5 | Page renders without error | NOT-TESTED | StyledTable usage at lines 50–65 uses `<TableRow header>` directly inside `<StyledTable>` without a `<thead>` wrapper — unlike other pages that wrap headers in `<thead>`. Risk of render inconsistency. See F-05. |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | No TODO in rendered content. REVIEW in JSX comments. |

**Correction to 8.1:** All internal links PASS after verification. Check 8.1 PASS.

**Category 8 verdict:** 1 potential issue: 8.5 (NOT-TESTED render risk from StyledTable thead inconsistency). No confirmed FAILs.

---

## Category 9 — Process & Governance

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: published` but veracityStatus absent, REVIEW items open. Inconsistent. |
| 9.2 | All consuming decisions in registry | N/A |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab gates not yet passed. |
| 9.4 | Phase ordering respected | N/A |
| 9.5 | Findings gathered before fixes | N/A |
| 9.6 | Feedback routed | N/A |

**Category 9 verdict:** 2 checks FAIL: 9.1, 9.3

---

## Banned Construction Scan

**Scope:** body prose, headings, frontmatter description, Tips, Notes, Warnings, table cells, card descriptions, CustomDivider `middleText` props, Accordion `title` props.

| Line | Sentence / Text | Word/Pattern | Classification | Flag? |
|------|-----------------|--------------|----------------|-------|
| Description | `Operator reference for GPU memory planning on Livepeer — VRAM requirements by pipeline...` | Em-dash (—) | Em-dash in description — prohibited (P30). Flag F-01a. | YES — F-07 |
| Line 37 | "The models you run, the number of pipelines you keep warm simultaneously, and your latency profile all follow from that VRAM budget." | — | No banned construction. | NO |
| Line 39 | "Use this reference for pipeline-level VRAM figures, warm model strategy, multi-GPU patterns, and complete `aiModels.json` field documentation." | — | Imperative instruction. No banned construction. | NO |
| Line 45 | "Start with a better question: **which pipeline-model combinations are currently being routed by gateways, and does your hardware keep one of them warm at a competitive price?**" | — | Rhetorical question in body prose. Not a heading question. Not a banned construction. | NO |
| Line 68 | "A lightweight pipeline with visible demand usually beats an impressive model sitting outside current gateway routing. Start from demand, then validate that the warm VRAM footprint fits your GPU with headroom." | `usually` | Not a banned word. | NO |
| Line 75 | "These figures are production estimates based on operator deployments and community benchmarks. Actual usage varies with model variant, batch size, and resolution." | `varies with` | `depends on` equivalent. However, `varies with` is not on the banned list. The CLAUDE.md rule bans `depends on without ranked list`. `varies with` without ranked weighting — BORDERLINE. Flag for human review. | BORDERLINE |
| Note block (lines 77–79) | `"Warm VRAM" = memory occupied while the model is resident and idle. "Peak inference VRAM" = maximum VRAM during active inference, and it often exceeds the idle footprint because of KV cache, activations, and output buffers.` | `often exceeds` | Factual observation. Not `can/may` in value claim. | NO |
| Line 183 | "**Viable pipelines:**" / "**Leave off this tier:** `text-to-image`, `image-to-image`, `image-to-video`, `live-video-to-video`" | `Leave off` | `Leave off` is a direct instruction, not a `not [X]` primary statement. However, this is a negative instruction (`Leave off this tier`). Per P46, `not [X] as primary statement` belongs in check 2.4. But `Leave off` is an imperative, not a statement of absence. Not banned. | NO |
| Line 189 | "**Leave off this tier:** `text-to-image`, `image-to-image`, `image-to-video`, `live-video-to-video`" | `not [X]` equivalent | This is a `Leave off` instruction, not `not [X]` construction. But the **Note at line 197–199**: "The effective threshold for diffusion pipelines is 24 GB. A nominal 16 GB card leaves insufficient headroom for SDXL warm + inference peaks." — uses `insufficient headroom` which is a negative framing but not `not [X]` as primary. Not banned construction. | NO |
| Line 207 | "Co-warm `audio-to-text` as a secondary — they barely overlap in VRAM." | `barely` | Not a banned word. | NO |
| Line 219 | "**Rule of thumb:** Warm your primary revenue pipeline. Cold the rest." | — | Direct instruction. No banned construction. | NO |
| Line 226 | "Cold load on SDXL takes 30–90 seconds." | — | Factual with specific range. | NO |
| Line 226 | "Running cold puts the node out of contention." | — | Positive statement of consequence. Not `not [X]`. | NO |
| Line 238 | "Setting `warm: true` on more `aiModels.json` entries than you have GPUs causes the AI worker to log a conflict at startup and skip the excess warm entries." | — | Factual. No banned construction. | NO |
| Line 262 | "this result stays hardware-dependent" | `depends on` equivalent | `hardware-dependent` — passive framing without ranked list. BORDERLINE: implies dependency without quantifying. Flag for human review. | BORDERLINE |
| Line 268 | "The AI worker assigns GPU resources based on the order of entries in `aiModels.json` and available device IDs." | — | Factual. No banned construction. | NO |
| Line 512 | "Model earnings diverge for four clear reasons:" | `clear` | `clearly` is banned but `clear` here is an adjective quantifying the reasons (four clear reasons). Not the banned pattern `clearly [state]`. | NO |
| Line 517 | "prices above the gateway's `maxPricePerUnit` receive zero jobs" | — | Positive statement. Not `not [X]`. | NO |
| Line 524 | "Nodes with identical hardware but different warm model selections often show **significantly** different earnings — the warm pipeline choice matters more than raw GPU performance." | `significantly` | Banned word (check 2.2 — already flagged at F-01). Also: `— the warm pipeline choice matters` — em-dash in body prose. PROHIBITED (CLAUDE.md). See F-08. | YES — F-08 |
| Line 560 | "Prices above the active gateway ceiling receive no jobs." | — | Positive framing of a negative outcome. Not `not [X]` as primary statement. | NO |
| Line 563 | "Setting prices too high means no jobs. Setting prices too low reduces earnings unnecessarily." | `unnecessarily` | Not a banned word. Clear factual cause/effect. | NO |
| Line 604 | "A fully utilised RTX 4090 running `text-to-image` at competitive pricing and warm load earns strong fee revenue when demand, active-set position, and gateway routing align." | `strong`, `when` | `strong` — not banned (banned list: `real`, `meaningful`, `significant` etc. — `strong` not present). Conditional `when` — temporal condition in an analytical context, not `if [condition]` in a value claim. | NO |
| Accordion title: "pipeline (required)" | — | No banned construction. | NO |
| Accordion title: "model_id (required)" | — | No banned construction. | NO |
| Accordion title: "price_per_unit (required)" | — | No banned construction. | NO |
| Accordion title: "warm (optional)" | — | No banned construction. | NO |
| Accordion title: "pixels_per_unit (optional)" | — | No banned construction. | NO |
| Accordion title: "currency (optional)" | — | No banned construction. | NO |
| Accordion title: "url (optional)" | — | No banned construction. | NO |
| Accordion title: "token (optional)" | — | No banned construction. | NO |
| Accordion title: "capacity (optional)" | — | No banned construction. | NO |
| Accordion title: "optimization_flags (optional)" | `optimization_flags` | This is the actual JSON field name (`optimization_flags`) — not a UK English violation (it's a code identifier, not prose). Correct to use the actual field name here. | NO |
| Heading: `## Warm vs cold — when it matters` | Em-dash (—) | Em-dash in heading — prohibited (P30, P48). See F-04. | YES — F-04 |

**Confirmed violations:**
- F-07: Em-dash in description
- F-08: Em-dash in body prose at line 524 + `significantly` at same line (already F-01)
- F-04: Em-dash in heading `## Warm vs cold — when it matters`

**BORDERLINE:**
- Line 75: `varies with` — not ranked. Human review.
- Line 262: `hardware-dependent` — implicit dependency, unquantified.

---

## Heading Score Table

*(Note: `## Related` heading — not exempt per P53. `Related` is in the OK tier per Frameworks.mdx §4.1. Score normally.)*

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Demand signals | 4 | 4 | 5 | 5 | 5 | **23/25** |
| VRAM by pipeline | 5 | 4 | 5 | 5 | 5 | **24/25** |
| GPU reference by persona | 3 | 3 | 3 | 3 | 4 | **16/25** |
| Warm vs cold — when it matters | 4 | 4 | 4 | 4 | 3 | **19/25** |
| Multi-GPU configuration | 5 | 4 | 5 | 5 | 5 | **24/25** |
| aiModels.json complete schema | 5 | 5 | 5 | 5 | 4 | **24/25** |
| Model selection and earnings | 4 | 4 | 5 | 5 | 4 | **22/25** |
| Pricing strategy | 4 | 4 | 5 | 5 | 5 | **23/25** |
| Hosting custom models (BYOC) | 5 | 5 | 5 | 5 | 4 | **24/25** |
| Related | 3 | 2 | 4 | 4 | 5 | **18/25** |

**Sub-headings (H3):**

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-----------|-------|-----------|---------|-------------|-------|
| Consumer GPU tier (8–12 GB VRAM) | 4 | 3 | 4 | 4 | 3 | **18/25** |
| Mid tier (16–20 GB VRAM) | 3 | 3 | 4 | 4 | 4 | **18/25** |
| High tier (24 GB+ per GPU, multiple GPUs) | 4 | 3 | 4 | 4 | 2 | **17/25** |
| Pipelines where warm is competitively critical | 4 | 4 | 4 | 4 | 2 | **18/25** |
| Pipelines where cold loading is acceptable | 4 | 4 | 4 | 4 | 2 | **18/25** |
| The Beta warm model constraint | 5 | 4 | 5 | 5 | 4 | **23/25** |
| Tracking performance | 3 | 3 | 4 | 4 | 5 | **19/25** |
| Model selection heuristics | 4 | 4 | 5 | 5 | 4 | **22/25** |
| Understanding the market | 3 | 3 | 4 | 4 | 4 | **18/25** |
| Reference pricing (late 2025) | 4 | 3 | 3 | 4 | 4 | **18/25** |
| GPU economics at scale | 4 | 4 | 5 | 5 | 5 | **23/25** |

**Failing headings (below 20/25):**
- `## GPU reference by persona` — 16/25. `persona` is wrong domain term. Proposed: `## GPU Tier Reference` — confirm. (F-09)
- `## Warm vs cold — when it matters` — 19/25 (em-dash also violates P30). Proposed: `## Warm vs Cold` — confirm. (F-04)
- `### Consumer GPU tier (8–12 GB VRAM)` — 18/25. VRAM spec in parentheses adds length without scoring. Proposed: `### Consumer GPU Tier` — confirm. (F-09)
- `### Mid tier (16–20 GB VRAM)` — 18/25. Proposed: `### Mid-Range GPU Tier` — confirm. (F-09)
- `### High tier (24 GB+ per GPU, multiple GPUs)` — 17/25. Proposed: `### High-End GPU Tier` — confirm. (F-09)
- `### Pipelines where warm is competitively critical` — 18/25. Verbose. Proposed: `### Warm-Critical Pipelines` — confirm. (F-09)
- `### Pipelines where cold loading is acceptable` — 18/25. Verbose. Proposed: `### Cold-Acceptable Pipelines` — confirm. (F-09)
- `### Tracking performance` — 19/25. Generic. Proposed: `### Performance Tracking` — confirm. (F-09)
- `### Understanding the market` — 18/25. Generic. Proposed: `### Price and Market Dynamics` — confirm. (F-09)
- `### Reference pricing (late 2025)` — 18/25. Parenthetical date unstable. Proposed: `### Reference Pricing` — confirm. (F-09)
- `## Related` — 18/25. Structural. Low signal. Acceptable in context.

---

## Spelling/Typo Check

| Finding | Location | Type |
|---------|----------|------|
| `optimisation` | Line 7 (description), line 503 | UK spelling — correct. Not a typo. |
| No actual typos found | — | — |

No typos found.

---

## Component Matrix

| Component | Used? | Appropriate for `reference` pageType? | Notes |
|-----------|-------|--------------------------------------|-------|
| `StyledTable` / `TableRow` / `TableCell` | Yes | Yes — preferred for reference | Used for VRAM tables, pricing tables, schema tables |
| `CustomDivider` | Yes | Yes — structural separator | Standard |
| `AccordionGroup` / `Accordion` | Yes | Yes — preferred for reference (specification) | Used for aiModels.json schema entries |
| `CardGroup` / `Card` | Yes | Yes | Related pages section |
| `Note` | Yes | Yes | Definitional note on warm vs peak VRAM |
| `Tip` | Yes | Yes | Demand-first framing |
| Code blocks | Yes | Yes | Schema examples in accordions |

StyledTable used without `<thead>` wrapper at lines 50–65 (demand signals table). Other StyledTable usages on the page do use header via `<TableRow header>`. Inconsistent pattern — see F-05.

---

## Cross-Category Connections

```
Root Cause CC-1: aiModels.json schema duplicated across pages
Affects: Cat 4.8 (this page) + Cat 4.8 (diffusion-pipeline-setup)
Detail: The complete aiModels.json schema is presented in both model-demand-reference.mdx (as
        AccordionGroup) and diffusion-pipeline-setup.mdx (as StyledTable). They are not identical
        but cover the same fields. This is the canonical reference location; diffusion-pipeline-setup
        should reference this page rather than duplicating.
Fix: Resolve BD-1 in diffusion-pipeline-setup. Direct field-reference traffic to this page.
```

```
Root Cause CC-2: VRAM figure inconsistencies across pages
Affects: Cat 6.4 (this page) + all three other pages in this batch
Detail: SAM2 large: "~4–6 GB warm" here vs "12–24 GB" in audio-and-vision-pipelines.
        SDXL Lightning: "~12–14 GB warm" here vs "~12–18 GB" in diffusion-pipeline-setup.
        Whisper: "~2–3 GB" here vs "~3 GB" in audio-and-vision-pipelines.
        This page should be the single source of truth for VRAM figures.
Fix: SME verification. Once verified, this page becomes authoritative; all other pages
     cross-reference rather than embed their own figures.
```

```
Root Cause CC-3: status: published + veracityStatus absent + open REVIEW items
Affects: Cat 1.8 + Cat 6.6 + Cat 9.1
Detail: Same pattern as diffusion-pipeline-setup. Fix: status: draft + veracityStatus: unverified
        until REVIEW items resolved and figures verified.
```

```
Root Cause CC-4: Em-dashes in description + heading + body prose
Affects: Cat 1.11 + Cat 3.7 + Cat 2.4
Detail: Three separate em-dash violations:
        (a) description field (P30 — prohibited in all visible text)
        (b) heading `## Warm vs cold — when it matters` (P30/P48)
        (c) body prose line 524 (CLAUDE.md prohibition)
Fix: Replace all three em-dashes. Per CLAUDE.md: rewrite or use hyphens.
```

---

## Blocking Decisions

None. Page scope is clear and appropriate. VRAM figure verification is an SME decision, not a structural one.

---

## Fix List

| ID | Severity | Category | Fix |
|----|----------|----------|-----|
| F-01 | HIGH | 2.2 | Remove `significantly` at line 524. Exact text: "often show significantly different earnings". Fix: "often show markedly different earnings" — but `markedly` is not banned. Alternative: "the earnings gap is often substantial" — `substantial` not banned. Proposed: "warm pipeline choice drives a larger earnings difference than raw GPU performance." Confirm before applying. |
| F-02 | MEDIUM | 2.4 | See Banned Construction Scan. No `not [X]` or `if [condition]` banned constructions confirmed after full scan. Check 2.4 result: PASS. Withdraw F-02. |
| F-03 | MEDIUM | 3.4/3.7 | Rename `## GPU reference by persona` → `## GPU Tier Reference`. `persona` is UX terminology, not operator domain vocabulary. Confirm before applying. |
| F-04 | HIGH | 3.7 | Rename `## Warm vs cold — when it matters` → `## Warm vs Cold` (remove em-dash per P30/P48 and reduce verbiage). Confirm before applying. |
| F-05 | MEDIUM | 5.6/8.5 | StyledTable at lines 50–65 (demand signals) uses `<TableRow header>` directly without `<thead>` wrapper. Other StyledTable instances on the page are consistent. Verify the component accepts both patterns or add `<thead>` wrapper for consistency. NOT-TESTED — requires render check. |
| F-06 | MEDIUM | 6.3 | Line 298: `"url": "http://whisper-runner:8001"` in multi-GPU example. Whisper (`audio-to-text`) uses the standard `livepeer/ai-runner` container, not an external URL-based runner (that pattern is for the Ollama LLM runner). Flag as potentially incorrect example. Verify with SME before publication. |
| F-07 | HIGH | 1.11 | (a) Remove em-dash from description: replace `—` with `:`. (b) Shorten to ≤160 chars. Proposed: `Reference for GPU memory planning on Livepeer: VRAM requirements by pipeline, warm model strategy, multi-GPU configuration, aiModels.json schema, and pricing.` (155 chars) — confirm. |
| F-08 | HIGH | 2.2/2.4 | Line 524: Remove em-dash in body prose (`—`) and fix `significantly`. Proposed full sentence: "Nodes with identical hardware but different warm model selections show different earnings. The warm pipeline choice matters more than raw GPU performance." Confirm before applying. |
| F-09 | MEDIUM | 3.1 | Rename failing headings per Heading Score Table proposals. All require confirm before applying. |
| F-10 | HIGH | 1.1 | Add missing frontmatter fields (all proposed values require human confirmation per P51): `complexity: intermediate`, `lifecycleStage: operate`, `veracityStatus: unverified`, `industry: ["AI", "technical"]`, `niche: ["AI", "hardware"]`. Resolve `status`/`veracityStatus` incoherence (CC-3). |
| F-11 | HIGH | 6.4 | Resolve VRAM figure inconsistencies against SME source of truth (CC-2). This page should become the single authoritative reference. |
| F-12 | INFO | BCS | BORDERLINE line 75: `varies with model variant, batch size, and resolution`. Not ranked. Flag for editorial review. |
| F-13 | INFO | BCS | BORDERLINE line 262: `hardware-dependent`. Acceptable in context but note unquantified dependency. |

---

## Verdict

**NEEDS WORK**

Individual check IDs failing: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 3.4, 3.7, 4.8, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3 — **19 checks fail**.

This is the most content-complete page of the four. The reference section (aiModels.json schema) is thorough and well-structured. Primary issues are frontmatter completeness, VRAM figure verification (this page should be the canonical source), and three em-dash violations.

Critical blockers: F-10 (missing required fields), F-11 (VRAM inconsistencies — this page must be verified before it can anchor other pages), F-07/F-08 (em-dash violations), F-06 (potentially incorrect URL example for Whisper).
