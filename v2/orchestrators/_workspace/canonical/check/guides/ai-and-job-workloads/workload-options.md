# Per-Page Quality Check Report
## `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2894–2905

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Workload Options` | PASS | |
| `sidebarTitle` | Yes | `Workload Options` | PASS | |
| `description` | Yes | `The four job types an orchestrator can process — transcoding, batch AI inference, Cascade live-video AI, and LLM inference — with hardware requirements, pricing models, routing mechanics, and how to choose which workloads to run.` | FAIL | Em-dash (`—`) present — prohibited in all visible text (P30) |
| `pageType` | Yes | `concept` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | Yes | `explain` | PASS | Valid 15-value canonical value; `explain` fits a concept page building a mental model |
| `complexity` | No | — | FAIL | Required field absent |
| `lifecycleStage` | No | — | FAIL | Required field absent |
| `keywords` | Yes | 12 entries | PASS | Specific terms: `Cascade`, `VRAM`, `pipeline`, `routing` |
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
| 1.4 | `purpose` uses 15-value canonical set | PASS | `explain` is canonical; correct for a concept page building mental model of workload types |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying (P51) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: evaluate` — confirm before applying (P51). (Reader is evaluating which workloads to run before committing to hardware/config) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: published` with JSX draft note and unverified pipeline VRAM figures — set `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Field absent. Required (P41). Proposed: `industry: [AI, technical]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Field absent. Required (P41). Proposed: `niche: [AI, video]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | Em-dash (`—`) in description: "…transcoding, batch AI inference, Cascade live-video AI, and LLM inference — with hardware requirements…". Replace with comma or colon. Also: 175 chars exceeds ≤160 char limit |
| 1.12 | OG image block complete | PASS | All 5 OG fields present with correct path |
| 1.13 | `keywords` field quality | PASS | `Cascade`, `VRAM`, `pipeline`, `routing` — domain-specific, searcher-intent-aligned |

**Category 1 verdict: FAIL** — Failing checks: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — VOICE & COPY

### Banned Construction Scan

Scope: all visible text — body prose, headings, Tips, Notes, Warnings, table cells, card descriptions, CustomDivider `middleText` props, AccordionGroup `title` props.

Every `can`, `may`, `could`, `might`, `should` sentence; every `if [condition]`; every `not [X]` statement:

| Line | Sentence | Word/Pattern | Classification | Flag? |
|------|----------|--------------|----------------|-------|
| 39 | "Orchestrators on Livepeer earn fees from four distinct categories of work." | — | Factual | No |
| 86 | "This means **new or low-stake orchestrators are at a structural disadvantage for transcoding**" | `means` (not banned) | Analytical — factual consequence | No |
| 87 | "Being in the active set (top 100 by stake) is a prerequisite, and even within the active set, high-stake nodes capture disproportionate transcoding volume." | — | Factual | No |
| 92 | "Stake plays a much smaller role." | — | Factual comparative | No |
| 96 | "This matters for operators: **a new orchestrator with 24 GB VRAM and correctly configured AI pipelines competes for AI jobs immediately**…" | — | Factual assertion, no hedge | No |
| 98 | "The barrier to entry for AI earnings is hardware and configuration, with delegation history playing a much smaller role." | — | Factual | No |
| 102 | "Persistent streaming jobs cannot tolerate high jitter or cold model loads, so gateways select orchestrators with the right workflow already warm and with low round-trip latency." | `cannot` | Factual constraint — not a value claim | No |
| 108 | "**The practical upshot:** Low-stake nodes still earn AI fees while transcoding demand stays concentrated in higher-stake nodes." | `still earn` | Value claim — no hedge (`can/may`) | PASS |
| 109 | "A capable GPU plus sound AI configuration is the faster route to active earnings." | — | Value claim, direct assertion | No |
| 118 | "GPU-accelerated transcoding via NVIDIA hardware is strongly recommended" | `recommended` | Guidance — not a banned construction | No |
| 118 | "CPU transcoding remains viable for tests but rarely stays cost-competitive at current network prices." | `rarely` | Evaluative hedge — acceptable |  No |
| 202 | "Cascade is the network's strategic name for live-video AI." | — | Factual | No |
| 204 | "The latency constraint is what separates this from batch inference: a 30 fps video stream must process each frame in roughly 33 ms or less." | `must` | Constraint statement — not a value claim | No |
| 218 | "Quantised LLMs are VRAM-efficient." | — | Factual | No |
| 220 | "Start with a network-tested model such as `meta-llama/Meta-Llama-3.1-8B-Instruct`." | — | Procedural guidance | No |
| 228 | "Focused coverage beats trying to run every workload poorly." | — | Direct assertion | No |
| **Note (line 108):** | "Low-stake nodes still earn AI fees while transcoding demand stays concentrated in higher-stake nodes. A capable GPU plus sound AI configuration is the faster route to active earnings." | — | Direct factual assertions | No |
| **Accordion title:** | "8–12 GB VRAM — entry-level GPU (GTX 1080, RTX 2060, 3060)" | — | No em-dashes, no banned constructions | No |
| **Accordion title:** | "16 GB VRAM — mid-range (RTX 3080, 4080, A4000)" | — | No em-dashes (hyphens, not em-dashes) | No |
| **Accordion title:** | "24 GB VRAM — high-end (RTX 3090, 4090, A5000, A6000)" | — | No em-dashes | No |
| **Accordion title:** | "Multiple GPUs or data-centre class" | — | PASS | No |
| **Table cell (line 70):** | "`Per frame / per stream unit`" | — | Backtick in table cell — styling artifact in source, not a prose issue | No |

**CustomDivider middleText props:** None present with text content — all CustomDivider instances appear without middleText.

**Checking `not [X]` as primary statements (check 2.4):**
- Line 86: "low-stake orchestrators are at a structural disadvantage" — positive framing. PASS.
- Accordion section "8–12 GB VRAM": "Skip: `text-to-image`, `image-to-image`, `image-to-video`, `audio-to-text` — all require 12–24 GB minimum." — `Skip:` is an imperative guidance label, not a `not [X]` value statement. BORDERLINE. Acceptable in context as a labelled list.

**Checking `can/may` in value claims:**
- Line 200: "Current use cases on the network include live avatar generation…" — no `can/may`. PASS.
- Accordion "8–12 GB VRAM": "LLM inference — quantised 7–8B models run well at 8 GB." — direct assertion. PASS.

**Banned word scan:**
Candidates: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (as intensifier), `various`, `several`, `obviously`, `clearly`

Full scan of all body prose:
- Line 86: "high-stake nodes capture disproportionate transcoding volume" — `disproportionate` not banned. PASS.
- Line 200: "Current use cases on the network include live avatar generation, style transfer overlays, live-video agents, and AI-enhanced scene analysis." — no banned words.
- Line 204: "The latency constraint is what separates this from batch inference" — no banned words.
- Accordion sections: no instances found.

No banned words found.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | `data-centre` (Accordion title, line 265) — correct UK spelling. No -ize endings, no -or vs -our errors |
| 2.2 | Zero banned words | PASS | No instances of banned words found |
| 2.3 | Zero banned phrases | PASS | No "This page", "This section", "rather than", "etc.", "and so on". JSX draft note is invisible |
| 2.4 | Zero banned constructions | PASS | No unresolved `if [condition]` in body prose; no `This page [verb]`; no `can/may` in value claims; `not [X]` patterns not used as primary value statements |
| 2.5 | Opening order correct | PASS | "Orchestrators on Livepeer earn fees from four distinct categories of work." — subject-first, value-first |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; lead sentences state facts; endings are concrete or link to next step |
| 2.7 | Audience register correct | PASS | Hardware-specific, earnings-anchored, operational — correct for `orchestrator` |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "the network rewards you", "easy to set up", "automatically" (unverified). Note on line 108 avoids "can earn rewards" pattern |
| 2.9 | No passive value statements | PASS | Value claims are concrete: "active set (top 100 by stake)", "a 30 fps video stream must process each frame in roughly 33 ms" |
| 2.10 | No hedging openers | PASS | Opens with factual earnings statement |
| 2.11 | Terminology locked and consistent | PASS | `aiModels.json`, `BYOC`, `Cascade`, `ComfyStream`, `active set` used consistently throughout |

**Category 2 verdict: PASS** — No failing checks.

---

## Category 3 — SECTION NAMING & HEADINGS

`Related Pages` heading exempted per P16 — not present; no exemption needed.

**Accordion titles included in heading scan per P20 (visible text):**

| Heading | Level | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---------|-------|-----------|-------|-----------|---------|-------------|-------|
| At a glance | H2 | 2 | 2 | 3 | 3 | 4 | **14/25 FAIL** |
| How routing works — and why it differs per job type | H2 | 4 | 4 | 4 | 3 | 2 | **17/25 FAIL** |
| Video transcoding | H2 (section) | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Batch AI inference | H2 (section) | 4 | 3 | 5 | 5 | 5 | 22/25 |
| Cascade live-video AI | H2 (section) | 5 | 4 | 5 | 5 | 5 | 24/25 |
| LLM inference | H2 (section) | 5 | 4 | 5 | 5 | 5 | 24/25 |
| What should I run? | H2 | 1 | 1 | 2 | 3 | 4 | **11/25 FAIL** |
| Setup guides | H2 | 2 | 2 | 3 | 3 | 5 | **15/25 FAIL** |

**Em-dash check in headings:** "How routing works — and why it differs per job type" contains an em-dash. Prohibited per P30/CLAUDE.md.

**Check 3.2 scan for banned/weak terms:**
- "At a glance" — not in the banned list (`Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`) but falls under `Avoid` as a generic structural label. `Overview` is listed as Avoid — "At a glance" is functionally equivalent.
- "What should I run?" — question heading; Frameworks prohibit questions in headings. Also: check 3.2 prohibits `What's Next` but "What should I run?" is not that exact term; however, the CLAUDE.md voice rules prohibit questions in headings universally.
- "Setup guides" — `Guides` is not explicitly banned but is a weak structural label. Functionally similar to `Further Reading`.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | Four headings below threshold: "At a glance" (14/25), "How routing works — and why it differs per job type" (17/25), "What should I run?" (11/25), "Setup guides" (15/25) |
| 3.2 | No banned or weak standalone heading terms | FAIL | "At a glance" is a weak structural label (equivalent to Avoid-tier `Overview`). "Setup guides" is a weak structural label |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | FAIL | "At a glance", "What should I run?", "Setup guides" lack domain anchoring. Could appear on any docs page |
| 3.5 | Heading names the concept, not examples | PASS | Workload-type section headings name the concept directly |
| 3.6 | Title well-formed | PASS | "Workload Options" — 2 words, concept-derived |
| 3.7 | Sounds like an expert editorial choice | FAIL | "What should I run?" is a question (prohibited in headings per CLAUDE.md voice rules). "At a glance" is marketing/overview language. "Setup guides" is a bureaucratic structural label |

**Category 3 verdict: FAIL** — Failing checks: 3.1, 3.2, 3.4, 3.7

---

## Category 4 — PAGE STRUCTURE

Nav sequence confirmed from docs.json lines 2894–2905:
**`workload-options`** → `video-transcoding-operations` → `ai-inference-operations` → `diffusion-pipeline-setup` → `llm-pipeline-setup` → `realtime-ai-setup` → `audio-and-vision-pipelines` → `model-demand-reference` → `model-hosting`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Page gives orchestrators a complete overview of all four workload types and their routing/hardware characteristics |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator understand all four job types, their routing mechanics, and choose which workloads to run given their hardware." — passes |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | INFO | `workload-options` is the first page in the "Workloads and AI" group (docs.json line 2896). No defined predecessor in this group. The reader arrives from the Guides entry page or portal. Exit to `video-transcoding-operations` is logical |
| 4.4 | No dead ends | PASS | "Setup guides" CardGroup links to Video Transcoding, AI Workloads Overview, Batch AI Setup, Cascade Setup |
| 4.5 | Prerequisites stated or linked | INFO | No explicit prerequisites section. Page assumes node is running. The `workload-options` first-position in the group suggests it may be read before setup — prerequisites may not apply at this stage |
| 4.6 | Out-of-scope is clear | PASS | Each workload type section explicitly routes to a dedicated page for setup details |
| 4.7 | Information type per section is correct | PASS | `purpose: explain` permits `conceptual, technical` as primary types with `factual, analytical` secondary. Content is predominantly conceptual and analytical — correct |
| 4.8 | No content duplication from adjacent sections | INFO | "Video transcoding" section (H2) partly duplicates content from `video-transcoding-operations`. "Batch AI inference" pipeline table partly duplicates `ai-inference-operations`. This is an overview/concept page — some summary overlap is expected, but depth of duplication should be reviewed |
| 4.9 | Section orientation page present | N/A | Section-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: PASS** — No failing checks. Three INFO items.

---

## Category 5 — LAYOUT & COMPONENTS

**Matrix applied:** `component-layout-decisions.mdx` for `concept`:
- Required: `Overview`
- Preferred: `Accordion`, `AccordionGroup`, `CodeGroup`, `Tabs`, `Note`, `Info`, `Tip`
- Avoid: TODO/TBD placeholders

**Components used:** `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `AccordionGroup`, `Accordion`, `Card`, `CardGroup`, `Note`

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | PASS | `concept` template: Overview present (opening paragraph); H2 section structure; AccordionGroup for detailed/optional content |
| 5.2 | Required sections present | PASS | `concept` requires `Overview` — present in opening paragraph through "At a glance" table |
| 5.3 | Only approved components used | PASS | `StyledTable`/`TableRow`/`TableCell`, `AccordionGroup`/`Accordion`, `Card`/`CardGroup`, `Note` — all within `concept` preferred set or standard Mintlify components. `StyledTable` maps to `Table`. `Card`/`CardGroup` not in preferred list for `concept` but not in Avoid list either — NOT-TESTED as unapproved status (per P22: not reading the file would leave this as NOT-TESTED; component-layout-decisions.mdx for `concept` lists `Card`/`CardGroup` as not preferred but not avoided) |
| 5.4 | Avoided components absent | PASS | No TODO/TBD visible text. JSX draft note is invisible. JSX PURPOSE comment at end is invisible |
| 5.5 | Information type → component mapping correct | PASS | Comparison data uses `StyledTable`; workload details use prose + `Card` links; VRAM tiers use `AccordionGroup` |
| 5.6 | MDX renders clean | PASS | All imports used (`StyledTable`, `TableRow`, `TableCell`, `CustomDivider`); no unclosed tags or JSX errors visible |
| 5.7 | No old-schema frontmatter | PASS | `pageType: concept`, `purpose: explain`, `audience: orchestrator` — all valid 7-type values |
| 5.8 | CSS uses custom properties only | N/A | No inline styles present |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports; correct subdirectories |

**Category 5 verdict: PASS** — No failing checks.

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Type | Status |
|-------|------|--------|
| "AI Subnet launched in Q3 2024" | factual | Verifiable from Livepeer blog/release notes — no REVIEW flag |
| Transcoding routing: stake weight + price + performance score | technical | Verifiable from go-livepeer source — no REVIEW flag |
| Active set = top 100 by stake | factual | Verifiable from protocol contracts — no REVIEW flag |
| AI routes on capability match + price ceiling | technical | Verifiable from go-livepeer source — no REVIEW flag |
| `text-to-image` minimum VRAM: 24 GB | factual | Stated in table and accordion. Consistent with ai-inference-operations but unverified here |
| `audio-to-text` VRAM: 12 GB | factual | Stated in pipeline table. Inconsistent with workload-options table which says "Model-dependent" for `upscale` but 12 GB for audio-to-text |
| `segment-anything-2` minimum VRAM: 6 GB | factual | Stated in table; ai-inference-operations page lists 12 GB for SAM2. Inconsistency across pages |
| "Cascade Phase 1 shipped in December 2024" | factual | Verifiable from Livepeer blog/release notes — not flagged |
| "ComfyStream integrated with Livepeer network payments in January 2025" | factual | Verifiable from GitHub/blog — not flagged |
| "30 fps video stream must process each frame in roughly 33 ms or less" | technical | Mathematical derivation — correct (1000ms/30fps = 33.3ms) |
| `image-to-text` minimum VRAM: 4 GB in pipeline table | factual | Consistent with ai-inference-operations |
| 7B LLM model fits 8 GB VRAM | factual | Generally correct for 4-bit quantised — no source cited |
| `meta-llama/Meta-Llama-3.1-8B-Instruct` as network-tested model | evaluative | Plausible; no source |

**Critical inconsistency found:**
- `segment-anything-2` VRAM: `workload-options.mdx` line 170 states 6 GB; `ai-inference-operations.mdx` line 328 states 12 GB. These pages are adjacent in the same nav group. One is wrong.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | VRAM figures for `segment-anything-2` (6 GB here vs 12 GB in ai-inference-operations) are inconsistent. Neither page cites a primary source (SAM2 model card or go-livepeer AI runner specs) |
| 6.2 | Code/commands tested | N/A | No code blocks or CLI commands on this page |
| 6.3 | No deprecated API usage | PASS | No deprecated flags or endpoints cited |
| 6.4 | Numbers are real | FAIL | `segment-anything-2` 6 GB VRAM inconsistency. No REVIEW flag on this discrepancy |
| 6.5 | REVIEW flags for unverified claims | FAIL | No REVIEW JSX flags on this page despite multiple unverified factual claims (VRAM figures, subnet launch dates, active set = top 100) |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` absent. `status: published` with unverified claims and no REVIEW flags is incoherent. Set `veracityStatus: unverified` and `status: draft` |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references |
| 6.8 | Source staleness check | INFO | "Q3 2024" AI Subnet launch date and Cascade Phase 1 (December 2024) are specific dates. If the network has moved on, these become stale quickly |
| 6.9 | No open-ended research tasks | FAIL | SAM2 VRAM inconsistency (6 GB vs 12 GB) has no named source and no REVIEW flag. This is an open research task that should be resolved before publication |

**Category 6 verdict: FAIL** — Failing checks: 6.1, 6.4, 6.5, 6.6, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/ai-and-job-workloads/workload-options` confirmed at docs.json line 2896 |
| 7.2 | Navigation matches file system | PASS | File path matches nav entry |
| 7.3 | Tab entry portal routes to all sections | N/A | Section-level check |
| 7.4 | No structural orphans | PASS | First entry in the "Workloads and AI" group; linked from other pages in the group |
| 7.5 | Audience journey complete | PASS | Serves as the orientation/comparison entry for the workloads section; routes to all four workload types |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | Published content in `v2/orchestrators/` |
| 7.8 | File naming conventions | PASS | `workload-options.mdx` — no incorrect prefix |
| 7.9 | `_workspace/` TTL compliance | N/A | Not a workspace file |

**Category 7 verdict: PASS** — No failing checks.

---

## Category 8 — LINKS & RENDERING

**Internal links to verify against docs.json:**
- `/v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations` → docs.json line 2897: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` → docs.json line 2898: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` → docs.json line 2899: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` → docs.json line 2901: CONFIRMED
- `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` → docs.json line 2903: CONFIRMED
- `/v2/orchestrators/guides/advanced-operations/pool-operators` → docs.json line 2941: CONFIRMED
- `/v2/orchestrators/guides/advanced-operations/scale-operations` → docs.json line 2942: CONFIRMED

**External links:**
- `https://github.com/livepeer/comfystream` — GitHub repo link (line 202)

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | All 7 internal links confirmed in docs.json |
| 8.2 | All external links live | INFO | ComfyStream GitHub link not auto-tested; repo appears active |
| 8.3 | All snippet imports resolve | PASS | `StyledTable`, `TableRow`, `TableCell`, `CustomDivider` — standard confirmed paths |
| 8.4 | All images load | N/A | No inline images beyond OG block |
| 8.5 | Page renders without error | PASS | All imports used; no unclosed tags or JSX errors visible |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | JSX PURPOSE and draft comments are invisible |

**Category 8 verdict: PASS** — No failing checks.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: published` with no veracity pass, VRAM inconsistency, and missing frontmatter fields — no sign-off record |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions requiring registry entry identified |
| 9.3 | Gate prerequisites met | FAIL | Per tab-status.md: Orchestrators IA not approved, terminology not locked. `status: published` without those gates closed is premature |
| 9.4 | Phase ordering respected | INFO | Cannot confirm without session history |
| 9.5 | Findings gathered before fixes | N/A | Review only |
| 9.6 | Feedback routed | N/A | Review only |

**Category 9 verdict: FAIL** — Failing checks: 9.1, 9.3

---

## Cross-Category Connections

- **C1:** Em-dash in `description` (1.11) is the same policy violation as the em-dash in "How routing works — and why it differs per job type" (3.1/3.7). Both are covered by P30. Fix both together.
- **C2:** `status: published` + absent `veracityStatus` (1.8, 6.6) = same root: page has not been through veracity pass. Fix as one: add `veracityStatus: unverified`, change `status` to `draft`.
- **C3:** Missing `complexity`, `lifecycleStage`, `industry`, `niche` (1.1, 1.6, 1.7, 1.9, 1.10) are co-located in frontmatter. Resolve as one batch edit.
- **C4:** SAM2 VRAM inconsistency (6 GB here vs 12 GB in `ai-inference-operations`) (6.1, 6.4, 6.9) needs cross-page resolution — this is not a single-page fix. Flag as a cross-page veracity task.
- **C5:** "What should I run?" heading (3.1/3.7) is also a voice rule violation (CLAUDE.md prohibits questions in headings). Same fix: rename to concept-first heading.

---

## Blocking Decisions

**BD-1:** SAM2 VRAM — 6 GB (this page) vs 12 GB (`ai-inference-operations`). One is wrong. This is a cross-page blocking decision requiring SME resolution before either page can be published.

**BD-2:** `lifecycleStage` — `evaluate` vs `discover`. The reader may be discovering what jobs exist (discover) or evaluating which to prioritise (evaluate). Requires Alison sign-off.

---

## Verdict Summary

**Overall: NEEDS WORK**

**18 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 6.1, 6.4, 6.5, 6.6, 6.9, 9.1, 9.3**

---

## Prioritised Fix List

**F-01** — CRITICAL — SAM2 VRAM inconsistency across pages (6 GB here vs 12 GB in `ai-inference-operations`)
This page states `segment-anything-2` requires 6 GB VRAM (line 170 in pipeline table). `ai-inference-operations.mdx` states 12 GB (Hardware by workload type table). One is wrong. Do not publish either page until SME resolves this with a primary source (SAM2 model card or go-livepeer AI runner test results). Add REVIEW flag to both pages until resolved.
Proposed: `{/* REVIEW: segment-anything-2 VRAM — verify against SAM2 model card and go-livepeer AI runner requirements before publishing */}`

**F-02** — CRITICAL — `status: published` + absent `veracityStatus` (incoherent state, P39)
Change `status: published` to `status: draft`. Add `veracityStatus: unverified`.

**F-03** — CRITICAL — Missing required frontmatter fields
Add to frontmatter block:
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: evaluate` — confirm before applying (see BD-2)

**F-04** — CRITICAL — Missing required `industry` and `niche` fields
Proposed:
- `industry: [AI, technical]` — confirm before applying
- `niche: [AI, video]` — confirm before applying

**F-05** — HIGH — Em-dash in `description` field and in H2 heading (P30)
Description: Replace `—` with `:`.
Proposed: `The four job types an orchestrator can process: transcoding, batch AI inference, Cascade live-video AI, and LLM inference, with hardware requirements, pricing models, routing mechanics, and how to choose which workloads to run.` — also trim to ≤160 chars.
Shorter: `Four orchestrator job types: transcoding, batch AI inference, Cascade live-video AI, and LLM inference — hardware requirements, pricing models, routing mechanics, and selection guidance.` — still has em-dash. Fix:
Proposed: `Four orchestrator job types: video transcoding, batch AI inference, Cascade live-video AI, and LLM inference. Hardware requirements, pricing models, routing mechanics, and selection guidance.` (153 chars) — confirm before applying.

Heading: Replace "How routing works — and why it differs per job type" em-dash.
Proposed: `Routing Mechanics by Job Type`

**F-06** — HIGH — Heading "What should I run?" (question heading, 11/25 score)
Rename to concept-first heading. No questions in headings per CLAUDE.md.
Proposed: `Workload Selection by Hardware Tier`

**F-07** — HIGH — Heading "At a glance" scores 14/25
Rename to domain-anchored heading.
Proposed: `Job Type Comparison`

**F-08** — HIGH — Heading "Setup guides" scores 15/25
Rename to domain-anchored heading.
Proposed: `Setup Paths`

**F-09** — HIGH — No REVIEW flags on unverified VRAM claims
Add REVIEW JSX flag inline for each VRAM figure that lacks a primary source citation. Minimum: SAM2 (BD-1 above), and any pipeline VRAM values not verified against the go-livepeer AI runner hardware requirements.

**F-10** — MEDIUM — Heading "How routing works — and why it differs per job type" scores 17/25 (em-dash fix above also improves score)
After F-05 em-dash fix to "Routing Mechanics by Job Type" — re-score expected: 5/4/5/5/4 = 23/25. No further action needed after F-05.

**F-11** — MEDIUM — `description` exceeds 160 characters (175 chars)
Addressed in F-05. Proposed fix is 153 chars — confirm before applying.
