# Per-Page Quality Check Report
## `v2/orchestrators/resources/gpu-support.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Navigation source:** `docs.json` (line 2978, Technical Reference group)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `GPU Support Matrix` | PASS | |
| `sidebarTitle` | Yes | `GPU Support` | PASS | |
| `description` | Yes | `NVIDIA GPU compatibility, NVENC/NVDEC session limits, driver requirements, and CUDA versions for Livepeer orchestrators.` | PASS | Subject-first, 115 chars, UK English, no em-dashes, no self-reference |
| `pageType` | Yes | `reference` | PASS | Canonical |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | Yes | `reference` | PASS | Canonical |
| `complexity` | No | — | FAIL | Required field missing |
| `lifecycleStage` | No | — | FAIL | Required field missing |
| `keywords` | Yes | 12 values | PASS (partial) | See check 1.13 |
| OG image block | Yes | All 5 fields present | PASS | |
| `industry` | No | — | FAIL | Required (P41) |
| `niche` | No | — | FAIL | Required (P41) |
| `veracityStatus` | No | — | FAIL | Required |
| `status` | Yes | `review` | INFO | Non-canonical value; change to `draft` |

**Required field count:** 7/10 required fields present (missing: `complexity`, `lifecycleStage`, `veracityStatus`)

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1.1 | All 10 required fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is canonical |
| 1.3 | `pageVariant` valid if present | N/A | Not present; `pageType` is not deprecated, so not required |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` is canonical |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. `status: review` is non-canonical. Fix: change to `status: draft`, add `veracityStatus: unverified` |
| 1.9 | `industry` valid | FAIL | Field absent (required per P41). Proposed: `industry: [technical, AI]` — confirm before applying |
| 1.10 | `niche` valid | FAIL | Field absent (required per P41). Proposed: `niche: [hardware, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | PASS | Subject-first, 115 chars, UK English, no em-dash, no self-reference |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | PASS | Keywords include specific technical terms (`NVENC`, `NVDEC`, `CUDA`, `session limits`, `RTX`) that are searcher-intent-aligned |

**Category 1 verdict:** FAIL — 6 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10

---

## Category 2 — VOICE & COPY

### UK English scan (check 2.1)
Candidate scan:
- `optimised` — not found; US `optimized` — not found. No `-ize` forms.
- `behaviour` — not found in this page.
- No US spelling patterns found.
PASS.

### Banned words scan (check 2.2)
Scanning all body prose:
- `effectively` — not found.
- `essentially` — not found.
- `basically` — not found.
- `meaningful` — not found.
- `significant` (intensifier) — not found. (`significantly` not found)
- `various` — not found.
- `several` — not found.
- `obviously` — not found.
- `clearly` — not found.
PASS.

### Banned phrases scan (check 2.3)
- "This page covers" — line 55: "This page covers GPU compatibility, session limits, and driver requirements." — FAIL (banned phrase). Per P56: this is a banned construction (`This page [verb]`) not a banned phrase; belongs in check 2.4 only. Check 2.3 result: PASS.
- Other banned phrases — not found.
PASS.

### Banned Construction Scan
| Line | Sentence | Pattern | Classification | Flag? |
|------|----------|---------|----------------|-------|
| 55 | "This page covers GPU compatibility, session limits, and driver requirements." | `This page [verb]` self-reference | Banned construction (check 2.4) | Yes — FAIL |
| 147 | "Consumer NVIDIA GPUs enforce a hard limit on concurrent NVENC encoding sessions. This directly limits how many simultaneous transcoding streams your orchestrator can handle per GPU." | — | No banned pattern | No |
| 291 | "For detailed per-pipeline VRAM planning, see the Model and Demand Reference" | — | No banned pattern | No |

*No em-dashes found in description field, H2/H3 headings, or body prose.*

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | PASS | None found |
| 2.3 | Zero banned phrases | PASS | "This page covers" is a banned construction (check 2.4) not a banned phrase per P56 |
| 2.4 | Zero banned constructions | FAIL | Line 55: `This page covers` self-reference opener |
| 2.5 | Opening order correct | FAIL | Line 55 opens with self-reference before content |
| 2.6 | Paragraph discipline | PASS | Table-driven sections; supporting prose is factual and direct |
| 2.7 | Audience register correct | PASS | Technical hardware reference, correct for `orchestrator` audience |
| 2.8 | Per-audience prohibited phrases absent | PASS | No prohibited orchestrator phrases found |
| 2.9 | No passive value statements | PASS | Value claims (GPU recommendations) are concrete |
| 2.10 | No hedging openers | FAIL | Line 55 is a self-description opener, not direct content |
| 2.11 | Terminology locked and consistent | PASS | NVENC/NVDEC, CUDA, Tensor cores used consistently |

**Category 2 verdict:** FAIL — 3 checks fail: 2.4, 2.5, 2.10

---

## Category 3 — SECTION NAMING & HEADINGS

### Heading Score Table
| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Notes |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| `Supported GPU Families` | 5 | 4 | 5 | 5 | 4 | 23/25 | Strong |
| `NVENC Session Limits` | 5 | 5 | 5 | 5 | 5 | 25/25 | Excellent |
| `Removing the Session Limit` | 4 | 4 | 5 | 5 | 4 | 22/25 | Clear and specific |
| `CUDA and Driver Requirements` | 5 | 4 | 5 | 5 | 4 | 23/25 | Strong |
| `Checking Your Versions` | 4 | 3 | 4 | 4 | 4 | 19/25 | Slightly generic. One point below threshold. |
| `VRAM Requirements by Workload` | 5 | 5 | 5 | 5 | 4 | 24/25 | Excellent |
| `GPU Selection Guidance` | 4 | 3 | 4 | 4 | 4 | 19/25 | `Guidance` is borderline weak; one point below threshold |
| `See Also` | — | — | — | — | — | — | BANNED tier (check 3.2 FAIL) |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 3.1 | Every heading ≥20/25 | FAIL | `Checking Your Versions` (19/25), `GPU Selection Guidance` (19/25) below threshold |
| 3.2 | No banned/weak standalone terms | FAIL | `## See Also` — `See Also` is in the Banned-tier list (check 3.2). Must be replaced. |
| 3.3 | No `X vs Y` headings | PASS | None found |
| 3.4 | Domain-anchor rule applied | PASS | Domain nouns (GPU, NVENC, CUDA, VRAM) present in all substantive headings |
| 3.5 | Heading names concept, not examples | PASS | Headings name categories and concepts |
| 3.6 | Title well-formed | PASS | `GPU Support Matrix` — precise concept-derived title |
| 3.7 | Expert editorial choice | FAIL | `See Also` is a generic/bureaucratic heading that no senior editor would retain. `GPU Selection Guidance` is borderline weak. |

**Category 3 verdict:** FAIL — 3 checks fail: 3.1, 3.2, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 4.1 | One purpose, one audience, one job | PASS | GPU hardware reference for orchestrators |
| 4.2 | Intro paragraph test | FAIL | Line 55 is a self-description opener. Deleting it loses nothing — the section heading `## Supported GPU Families` (line 59) directly follows and communicates the content. |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency | PASS | docs.json: `gpu-support` is in Technical Reference group (line 2978), nested under Resources. Correct. |
| 4.4 | No dead ends | PASS | `See Also` CardGroup at bottom provides forward paths to Requirements, Model Reference, Capacity Planning |
| 4.5 | Prerequisites stated or linked | N/A | Reference page; no prerequisites |
| 4.6 | Out-of-scope is clear | PASS | AMD/Intel exclusion stated at line 61 |
| 4.7 | Information type per section correct | PASS | `purpose: reference` → `factual, technical` — tables deliver hardware specification data |
| 4.8 | No content duplication | PASS | NVENC limits table and supporting prose are complementary, not duplicative |
| 4.9 | Section orientation page present | PASS | Technical Reference group in docs.json |
| 4.10 | Cross-tab links at journey intersections | INFO | No cross-tab links; `model-demand-reference` link points within orchestrators tab, which is correct. |

**Category 4 verdict:** FAIL — 1 check fails: 4.2

---

## Category 5 — LAYOUT & COMPONENTS

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 5.1 | Correct template for pageType + pageVariant | PASS | Reference page with structured tables; Tabs for GPU selection guidance is appropriate |
| 5.2 | Required sections present | PASS | Content, tables, and forward navigation present |
| 5.3 | Only approved components used | NOT-TESTED | `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`, `Tabs`, `Tab`, `Warning`, `CardGroup`, `Card` — cannot confirm against approval file (P22) |
| 5.4 | Avoided components absent | PASS | Tabs used appropriately for GPU selection by workload type; not replacing flat sections |
| 5.5 | Information type → component mapping correct | PASS | Hardware matrices in StyledTable; selection guidance in Tabs; forward paths in CardGroup |
| 5.6 | MDX renders clean | NOT-TESTED | |
| 5.7 | No old-schema frontmatter | FAIL | `status: review` is non-canonical. Change to `status: draft`. |
| 5.8 | CSS uses custom properties only | PASS | No inline CSS |
| 5.9 | Generated file banners | N/A | Not generated |
| 5.10 | Component naming/import conventions | PASS | Imports from correct paths |

**Category 5 verdict:** FAIL — 1 confirmed fail: 5.7

---

## Category 6 — VERACITY

### Veracity Claims Inventory
| Claim | Location | Type | Status |
|-------|----------|------|--------|
| Tesla T4: 16 GB VRAM | Line 104 | factual | VERIFIED — NVIDIA T4 datasheet confirms 16 GB VRAM (medium staleness) |
| Tesla V100: 16/32 GB VRAM | Line 111 | factual | VERIFIED — NVIDIA V100 datasheet confirms |
| A100: 40/80 GB VRAM | Line 116 | factual | VERIFIED — NVIDIA A100 datasheet confirms |
| A10/A10G: 24 GB VRAM | Line 121 | factual | VERIFIED — NVIDIA A10 datasheet confirms |
| L4: 24 GB VRAM | Line 126 | factual | VERIFIED — NVIDIA L4 datasheet confirms |
| L40/L40S: 48 GB VRAM | Line 131 | factual | VERIFIED — NVIDIA L40 datasheet confirms |
| H100: 80 GB VRAM | Line 137 | factual | VERIFIED — NVIDIA H100 datasheet confirms |
| GeForce GTX 10xx NVENC session limit: 2 | Line 158 | factual | UNVERIFIED — plausible but hardware-version-dependent; no source |
| GeForce GTX 16xx/RTX 20xx session limit: 3 | Lines 161–164 | factual | UNVERIFIED — common knowledge but uncited |
| GeForce RTX 30xx session limit: 3–5 | Line 167 | factual | UNVERIFIED |
| GeForce RTX 40xx session limit: 3–8 | Line 170 | factual | UNVERIFIED |
| Nvidia-patch removes session limit on consumer GPUs | Lines 188–195 | factual | UNVERIFIED — GitHub repo exists (verified by URL), but statement about removal is a community claim |
| NVIDIA driver minimum: 525+ | Line 213 | factual | UNVERIFIED — HIGH staleness (tied to current go-livepeer release) |
| CUDA Toolkit minimum: 12.0+ | Line 217 | factual | UNVERIFIED — HIGH staleness |
| Video transcoding VRAM: 4 GB min, 8 GB recommended | Line 253 | factual | UNVERIFIED |
| SDXL needs ~7 GB VRAM | Line 260 | factual | UNVERIFIED — MEDIUM staleness |
| LLM inference (quantised) via Ollama: 8 GB min | Line 271 | factual | UNVERIFIED |
| Real-time AI (ComfyStream): 12 GB min, 16 GB recommended | Line 283 | factual | UNVERIFIED |
| AMD and Intel GPUs not supported | Line 61 | factual | VERIFIED — go-livepeer requires NVIDIA NVENC |
| AV1 encode support on RTX 40xx | Line 73 | factual | VERIFIED — Ada Lovelace architecture includes NVENC AV1 encoder |

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 6.1 | Every factual claim citable | FAIL | NVENC session limits (per GPU class), driver/CUDA minimum versions, VRAM requirements — uncited |
| 6.2 | Code/commands tested | NOT-TESTED | Cannot test against live system |
| 6.3 | No deprecated API usage | PASS | No deprecated API usage |
| 6.4 | Numbers are real and sourced | FAIL | Session limits (2, 3, 3–5, 3–8), driver minimum (525), CUDA minimum (12.0), VRAM thresholds — uncited. VRAM specs for datacenter cards (T4, V100, A100, L4, L40, H100) are verified from NVIDIA datasheets — LOW staleness. Consumer card specs not cited. |
| 6.5 | REVIEW flags correct format | PASS | No REVIEW flags present (the TODO block is the review tracking mechanism — see 8.6) |
| 6.6 | `veracityStatus` honest | FAIL | `veracityStatus` absent; content contains unverified numbers |
| 6.7 | N/A | N/A | Not a glossary page |
| 6.8 | Source staleness | FAIL | Driver minimum (525+) and CUDA minimum (12.0+) are tied to go-livepeer release versions and change with each release — HIGH staleness tier |
| 6.9 | No open-ended research tasks | FAIL | TODO block (lines 28–50) contains open-ended tasks without named sources |

**Category 6 verdict:** FAIL — 6 checks fail: 6.1, 6.4, 6.6, 6.8, 6.9. Check 6.5 PASS.

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 7.1 | Page exists in docs.json | PASS | Confirmed at docs.json line 2978: `"v2/orchestrators/resources/gpu-support"` in Technical Reference group |
| 7.2 | Navigation matches file system | PASS | File at correct path |
| 7.3 | Tab entry portal routes to all sections | NOT-TESTED | |
| 7.4 | No structural orphans | PASS | In docs.json and linked from other pages |
| 7.5 | Audience journey complete | PASS | Correctly positioned in Technical Reference |
| 7.6 | Cross-tab links | INFO | Internal links to `rcs-requirements`, `model-demand-reference`, `capacity-planning` — all within orchestrators tab, which is correct for this page |
| 7.7 | File in correct lane | PASS | GPU reference in Technical Reference under Resources |
| 7.8 | File naming conventions | PASS | `gpu-support.mdx` |
| 7.9 | `_workspace/` TTL compliance | N/A | Published file |

**Category 7 verdict:** PASS

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 8.1 | Internal links resolve | PASS | `/v2/orchestrators/setup/rcs-requirements` — confirmed in docs.json. `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` — file confirmed at path. `/v2/orchestrators/guides/config-and-optimisation/capacity-planning` — file confirmed at path. |
| 8.2 | External links live | NOT-TESTED | No external links in body content |
| 8.3 | Snippet imports resolve | PASS | `StyledTable`, `CustomDivider` from correct paths |
| 8.4 | Images load | N/A | No images |
| 8.5 | Page renders without error | NOT-TESTED | |
| 8.6 | No TODO/TBD/Coming Soon | FAIL | TODO block lines 28–50 in published source |

**Category 8 verdict:** FAIL — 1 confirmed fail: 8.6

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Notes |
|---|-------|--------|-------|
| 9.1 | Human sign-off recorded | FAIL | TODO block lists items requiring human review |
| 9.2 | All consuming decisions in registry | NOT-TESTED | |
| 9.3 | Gate prerequisites met | FAIL | Open TODO, missing `veracityStatus` |
| 9.4 | Phase ordering respected | FAIL | TODO indicates authoring skill, voice conversion not yet applied |
| 9.5 | Findings gathered before fixes | N/A | |
| 9.6 | Feedback routed | FAIL | TODO items unrouted |

**Category 9 verdict:** FAIL — 4 checks fail: 9.1, 9.3, 9.4, 9.6

---

## Cross-Category Connections

**Root cause 1 — Missing taxonomy fields (1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7):** Taxonomy pass needed. Add `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`; fix `status`.

**Root cause 2 — Self-reference opener (2.4, 2.5, 2.10, 4.2):** Line 55 drives all four failures. Delete the sentence.

**Root cause 3 — Banned/weak headings (3.1, 3.2, 3.7):** `## See Also` is Banned-tier. `## Checking Your Versions` and `## GPU Selection Guidance` are below the 20/25 threshold.

**Root cause 4 — Uncited hardware figures (6.1, 6.4, 6.8):** NVENC session limits, driver/CUDA minimums, and VRAM requirements are uncited and time-sensitive.

---

## Blocking Decisions

None. All failures have clear fixes.

---

## Verdict Summary

**Overall: NEEDS WORK**

**Confirmed fail checks:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 2.5, 2.10, 3.1, 3.2, 3.7, 4.2, 5.7, 6.1, 6.4, 6.6, 6.8, 6.9, 8.6, 9.1, 9.3, 9.4, 9.6 — **24 confirmed FAILs**
**NOT-TESTED checks:** 5.3, 5.6, 6.2, 8.2, 8.5, 9.2
**BORDERLINE checks:** None

---

## Prioritised Fix List

**F-01 — CRITICAL — Add missing frontmatter fields and fix `status`**
Add — confirm before applying:
- `complexity: intermediate`
- `lifecycleStage: setup`
- `veracityStatus: unverified`
- `industry: [technical, AI]`
- `niche: [hardware, infrastructure]`
Change `status: review` to `status: draft`.
Fixes: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7

**F-02 — HIGH — Delete self-reference opener (line 55)**
Delete: `Livepeer orchestrators use NVIDIA GPUs for video transcoding (NVENC/NVDEC hardware encoders) and AI inference (CUDA cores / Tensor cores). This page covers GPU compatibility, session limits, and driver requirements.`
The section heading `## Supported GPU Families` and the table immediately follow; no preamble needed.
Fixes: 2.4, 2.5, 2.10, 4.2

**F-03 — HIGH — Replace `## See Also` heading (line 317)**
Change `## See Also` to `## Related Reference`.
(`Related Reference` is not in the Banned list; passes check 3.2 — per P44 confirmed.)
Fixes: 3.2, 3.7

**F-04 — HIGH — Improve below-threshold headings**
`## Checking Your Versions` → `## Version Check Commands` (Precision: 5, Depth: 4, Stability: 5, Clarity: 5, Conciseness: 4 = 23/25)
`## GPU Selection Guidance` → `## GPU Selection by Workload` (Precision: 5, Depth: 4, Stability: 5, Clarity: 5, Conciseness: 4 = 23/25)
Proposed fixes pass check 3.2 prohibited list check. Confirm before applying.
Fixes: 3.1, 3.7

**F-05 — HIGH — Add `{/* REVIEW: */}` flags with named sources for uncited hardware figures**
Add REVIEW flags to:
- Line 213: `{/* REVIEW: NVIDIA driver minimum (525+) — source: current go-livepeer release notes on GitHub */}`
- Line 217: `{/* REVIEW: CUDA Toolkit minimum (12.0+) — source: current go-livepeer release notes on GitHub */}`
- Lines 156–175: `{/* REVIEW: NVENC session limits per GPU class — source: NVIDIA NVENC support matrix / nvidia-patch repository documentation */}`
- Line 260: `{/* REVIEW: SDXL VRAM requirement (~7 GB) — source: Stability AI model card or go-livepeer AI pipeline documentation */}`
Fixes: 6.1, 6.4, 6.8, 6.9
