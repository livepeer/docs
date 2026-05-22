# Per-Page Quality Check Report
## `v2/orchestrators/guides/operator-considerations/requirements.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2874–2880

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Requirements'` | PASS | — |
| `sidebarTitle` | Yes | `'Requirements'` | PASS | — |
| `description` | Yes | ~154 chars, subject-first | PASS | Within 160 chars; specific and searcher-intent-aligned |
| `pageType` | Yes | `reference` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid token |
| `purpose` | Yes | `reference` | PASS | Valid 15-value canonical purpose; consistent with `pageType: reference` |
| `complexity` | No | — | FAIL | Required field missing |
| `lifecycleStage` | No | — | FAIL | Required field missing |
| `keywords` | Yes | 13 entries | PASS | Specific, hardware-specific, searcher-intent-aligned |
| `og:image` block | Yes | All 5 OG fields present | PASS | — |
| `industry` | No | — | FAIL | Required field per P41 |
| `niche` | No | — | FAIL | Required field per P41 |
| `veracityStatus` | No | — | FAIL | Required; page has 6 TODO flags for unverified claims |
| `status` | Yes | `current` | FAIL | `status: current` requires `veracityStatus: verified` AND zero REVIEW flags (checks.mdx §1.8, P39). Page has 6 inline TODO flags requiring human verification. |
| `lastVerified` | Yes | `'2026-03-15'` | INFO | Not a required field; present |

**Required field count:** 7/10. Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`.

Note: `pageType: reference` + `purpose: reference` is a valid and internally consistent combination. `reference` pages use this pairing per Frameworks.mdx §1.2.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required fields present | FAIL | Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `reference` is a valid 7-type value |
| 1.3 | `pageVariant` valid if present | N/A | Field absent; not required unless migrating from deprecated pageType. `reference` is not a deprecated pageType so no migration needed. |
| 1.4 | `purpose` uses 15-value canonical set | PASS | `reference` is a valid purpose value |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` valid |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying. (Page covers technical specifications; some sections reach advanced level for AI inference operators.) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: setup` — confirm before applying. (Page is used during the hardware evaluation stage before activation.) |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. Page has 6 TODO flags covering unverified technical specifications. Must be `veracityStatus: unverified`. `status: current` is incoherent per checks.mdx §1.8 and P39. Change `status` to `draft`. |
| 1.9 | `industry` array valid | FAIL | Absent. Required per P41. Proposed: `industry: [technical]` — confirm before applying. |
| 1.10 | `niche` array valid | FAIL | Absent. Required per P41. Proposed: `niche: [hardware, infrastructure]` — confirm before applying. |
| 1.11 | `description` well-formed | PASS | Subject-first, ~154 chars, no self-reference ("GPU support policy, NVENC session limits by card tier…"). Specific and useful. |
| 1.12 | OG image block complete | PASS | All 5 fields present |
| 1.13 | `keywords` quality | PASS | `nvenc`, `nvdec`, `vram`, `cuda`, `livepeer_bench`, `ai inference hardware` — strong, hardware-specific, searcher-intent-aligned |

**Category 1 verdict: FAIL** — 5 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10. (`status` incoherence under 1.8.)

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — show the work):**
- `effectively` — not found.
- `essentially` — not found.
- `basically` — not found.
- `meaningful` — not found.
- `significant` — line 184: "CPU transcoding is possible without a GPU, but throughput is **significantly** lower." — FOUND. Banned word.
- `real` (intensifier) — not found as intensifier.
- `various` — not found.
- `several` — not found.
- `obviously` / `clearly` — not found.

**Banned phrase scan:**
- "This page covers/explains/walks you through" — line 55: "Use this page as a readiness filter before investing more time in setup." — BORDERLINE. Not the exact banned phrase ("This page covers") but "Use this page as" is self-referential. Check 2.4 below.
- "The reason is straightforward" — not found.
- "among other factors" — not found.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout | PASS | No US spellings found. No -ize endings. |
| 2.2 | Zero banned words | FAIL | One violation: "significantly" — line 184 |
| 2.3 | Zero banned phrases | PASS | No banned phrases from the canonical list found. |
| 2.4 | Zero banned constructions | FAIL | See Banned Construction Scan below |
| 2.5 | Opening order correct | FAIL | Line 55: "Use this page as a readiness filter before investing more time in setup. It is here to answer a simple question: does your machine, network, and system stack actually support the workload path you want to run on Livepeer?" — Opens with a self-referential "Use this page" instruction followed by a question restatement. Should open with the answer or the threshold statement directly. |
| 2.6 | Paragraph discipline | PASS | Most sections are reference-format tables with brief prose anchors. Lead prose sentences state the fact. |
| 2.7 | Audience register correct | PASS | Hardware-specific, engineering-precise, no hand-holding. Correct orchestrator register. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "easy to set up", "the network rewards you for" found. |
| 2.9 | No passive value statements | PASS | Specifications stated concretely: CUDA 12.0 minimum, port 8935, ratio ≤ 0.8 threshold. |
| 2.10 | No hedging openers | FAIL | Line 55: "It is here to answer a simple question: does your machine…" — meta-description of what the page does before stating the requirement. |
| 2.11 | Terminology consistent | PASS | `NVENC`, `NVDEC`, `CUDA`, `livepeer_bench`, `Cascade`, `Arbitrum One` — all consistent with locked terminology set. `NVENC` and `NVDEC` are defined in context (line 63–65: "NVENC (hardware video encoder) and NVDEC (hardware video decoder)"). |

### Banned Construction Scan

**Scope:** body prose, headings, frontmatter `description`, Notes, Warnings, table cells, StyledStep `title` props, CustomDivider `middleText` props.

| Line | Sentence / Text | Pattern | Classification | Flag? |
|------|-----------------|---------|----------------|-------|
| 55 | "Use this page as a readiness filter…" | `This page [verb]` (indirect) | self-reference | YES — check 2.4 |
| 55 | "It is here to answer a simple question: does your machine…" | meta-description | self-reference | YES — check 2.4 (same construction) |
| 77 | "If `nvidia-smi` fails or is missing, install NVIDIA drivers for the target OS before proceeding." | `if [condition]` in body prose | procedural | OK — procedural instruction, not a value claim or body prose condition. PASS. |
| 80 | "Earlier versions are not supported by the AI runner containers." | `not [X]` as primary statement | value-claim | YES — check 2.4. "are not supported" is a negative primary statement. Fix: state positively: "The AI runner containers require CUDA 12.0 or later." |
| 97 | "Consumer cards are typically limited to **2-3 concurrent NVENC encode sessions** before throttling or failing…" | factual | OK | PASS. |
| 144 | "Treat the NVIDIA matrix as the source of truth and the table below as a planning shortcut." | instruction | OK | PASS. |
| 145 | "For most consumer-card operators, this cap is the binding limit until benchmarking proves otherwise." | `until [condition]` | conditional | BORDERLINE — "until benchmarking proves otherwise" is concrete advice, not an unresolved condition. PASS. |
| 184 | "CPU transcoding is possible without a GPU, but throughput is **significantly** lower." | banned word | — | Already logged under 2.2. |
| 290 | "A single SDXL model is approximately 7-8 GB." | factual | OK | PASS. |
| 293 | "A 100 Mbps connection with sub-20ms latency to major regions outperforms a 1 Gbps connection with high latency for Cascade AI workloads." | factual | OK | PASS — direct assertion, no hedging. |
| 303 | "Do not set `-maxSessions` from guesswork or marketing specs." | instruction | OK | PASS. |
| 362 | "The last concurrent session count at which ratio ≤ 0.8 is the practical **hardware limit** many operators use." | factual | OK | PASS. |

**StyledStep `title` props (P48 scan — step headings):**
- "Verify GPU is visible" — no em-dash. PASS.
- "Verify Docker can access the GPU" — no em-dash. PASS.
- "Install NVIDIA Container Toolkit if needed" — no em-dash. PASS.
- "Confirm required ports are open" — no em-dash. PASS.
- "Confirm Arbitrum RPC access" — no em-dash. PASS.
- "Check static IP or DDNS" — no em-dash. PASS.
- "Run the capacity test" — no em-dash. PASS.
- "Confirm ETH balance on Arbitrum" — no em-dash. PASS.

All step titles: PASS. No em-dashes found.

**CustomDivider `middleText` props (P20 scan):**
- "GPU Support", "Session Limits", "Hardware Tiers", "System Stack", "Testing Capacity", "Pre-launch Checklist" — no em-dashes, no banned terms. All PASS.

**Em-dash scan (P30 — all visible text):**
Scanned full body text, headings, step titles, table cells, and component props. No em-dash characters (`—`) found. PASS.

**Category 2 verdict: FAIL** — Fails 2.2, 2.4, 2.5, 2.10.

---

## Category 3 — SECTION NAMING & HEADINGS

`Related Pages` heading is fully exempt from all heading checks (P16).

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---------|-----------|-------|-----------|---------|-------------|-------|-------|
| GPU Vendor Support | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Driver requirements (H3) | 4 | 3 | 5 | 5 | 4 | 21/25 | PASS |
| NVENC/NVDEC Session Limits | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Hardware Tiers by Workload | 4 | 4 | 5 | 5 | 4 | 22/25 | PASS |
| Video transcoding (H3) | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Batch AI inference (H3) | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Cascade AI inference (H3) | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| System Requirements | 4 | 3 | 5 | 5 | 4 | 21/25 | PASS |
| Testing Your Capacity | 3 | 3 | 4 | 4 | 4 | 18/25 | FAIL |
| Checklist Before Going Live | 3 | 3 | 4 | 4 | 4 | 18/25 | FAIL |

**Score rationale notes:**
- "Testing Your Capacity": "Your" is second-person and mildly weak. Better: "Capacity Testing" or "Benchmark Procedure".
- "Checklist Before Going Live": verbose. Better: "Pre-launch Checklist" (which is already the CustomDivider middleText — the heading and divider are redundant). Or: "Launch Readiness".

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading ≥20/25 | FAIL | 2 of 10 scored headings fail: "Testing Your Capacity" (18/25), "Checklist Before Going Live" (18/25) |
| 3.2 | No banned/weak standalone heading terms | PASS | No Banned-tier terms. No Avoid-tier terms found in isolation. |
| 3.3 | No literal contrast labels | PASS | No X vs Y headings |
| 3.4 | Domain-anchor rule applied | PASS | "GPU Vendor Support", "NVENC/NVDEC Session Limits" — fully interpretable out of context |
| 3.5 | Heading names concept, not examples | PASS | "Hardware Tiers by Workload" names the concept, not examples. PASS per Frameworks.mdx §4.1: "Hardware Architecture Tiers" pattern. |
| 3.6 | Title well-formed | PASS | "Requirements" — 1 word, concept-derived, clear |
| 3.7 | Sounds like expert editorial choice | PASS | Most headings are technically precise labels. "Checklist Before Going Live" is the weakest but still reasonable. |

**Category 3 verdict: FAIL** — Fails 3.1 (2 headings below threshold).

---

## Category 4 — PAGE STRUCTURE

Navigation context (docs.json lines 2876–2879):
Sequence: `operator-rationale` → `business-case` → `operator-impact` → `requirements`
This is the last page in the Operator Considerations group.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Serves an orchestrator looking up hardware, software, and network requirements. One job: determine what their system needs before setup. |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator look up the exact hardware, software, and network specifications for their intended workload path." |
| 4.3 | PREV/NEXT adjacency correct | PASS | Arriving from `operator-impact` (final step in operator considerations). This is the last page in the group before users proceed to setup guides. Nav confirmed from docs.json line 2879. Related Pages links to Configure (setup/configure) and Model VRAM Reference as next steps. |
| 4.4 | No dead ends | PASS | Related Pages section links to 4 destinations. All verified in Category 8. |
| 4.5 | Prerequisites stated or linked | PASS | Page is self-contained as a reference. All terms defined inline: NVENC/NVDEC at line 63–65, `livepeer_bench` in context. No undefined jargon at first use. |
| 4.6 | Out-of-scope clear | PASS | Page references AI runner requirements but explicitly links out to Model Demand Reference for per-pipeline VRAM. Does not try to cover all AI specifics. |
| 4.7 | Information type per section correct | PASS | `purpose: reference`. Primary types: factual, technical — correct per Frameworks.mdx §1.6 (reference purpose: primary types factual, technical; secondary: structural). The pre-launch checklist uses procedural type — acceptable as secondary for a reference page providing a readiness procedure. |
| 4.8 | No content duplication | INFO | CUDA minimum (12.0) appears in both the System Requirements table (line 273) and the GPU Support section (line 80). Same fact, different contexts (system-level spec vs driver requirement). Technically not duplication — different framing. |
| 4.9 | Section orientation page present | N/A — section-level check |
| 4.10 | Cross-tab links at journey intersections | N/A — tab-level check |

**Category 4 verdict: PASS**

---

## Category 5 — LAYOUT & COMPONENTS

**Component matrix for `reference`** (component-layout-decisions.mdx):
- Required sections: Reference
- Preferred: ParamField, ResponseField, CodeGroup, Tabs, Table
- Avoid: TODO/TBD/Coming Soon

| Component | Used? | Appropriate for `reference`? | Notes |
|-----------|-------|------------------------------|-------|
| `CustomDivider` | Yes | NOT-TESTED | Not in component-layout-decisions.mdx. P22 applies. |
| `LinkArrow` | Yes | NOT-TESTED | Not in matrix. P22 applies. |
| `StyledSteps` / `StyledStep` | Yes | NOT-TESTED | Not in matrix explicitly. For a `reference` page this is borderline — procedure belongs in `instruction`. See check 5.1. |
| `StyledTable` / `TableRow` / `TableCell` | Yes | PASS | Enhanced version of Table — preferred for `reference`. |
| `Warning` | Yes | PASS | Not in preferred list but not in Avoid list either. Warning is used appropriately. |
| `Card` / `CardGroup` | Yes | PASS | Not in preferred list for `reference` but used only in Related Pages. Acceptable. |
| Code blocks (bash) | Yes | PASS | `CodeGroup` preferred for `reference`. |
| TODO block (lines 35–46) | Yes | FAIL | Explicitly avoided for `reference` |

A notable structural issue: the "Checklist Before Going Live" section uses `StyledSteps` / `StyledStep` components. A reference page with a procedural checklist is potentially over-scoped — this section's information type is `procedural`, which is not a primary or secondary type for `reference` purpose (Frameworks.mdx §1.6: `reference` primary types: factual, technical; secondary: structural). See check 4.7 note above — the checklist is borderline.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType | PASS | Reference-format tables as primary content, with supplementary procedural checklist. Structurally aligned with `reference` pageType template. |
| 5.2 | Required sections present | PASS | "Reference" content present throughout (GPU support table, session limit table, hardware tier tables, system requirements table, livepeer_bench procedure). |
| 5.3 | Only approved components used | NOT-TESTED | `CustomDivider`, `LinkArrow`, `StyledSteps` not in the matrix. P22: cannot mark FAIL without full component framework review. |
| 5.4 | Avoided components absent | FAIL | TODO block (lines 35–46) present. Explicitly avoided for `reference`. 5 inline TODO comments also present. |
| 5.5 | Information type → component mapping correct | PASS | Factual/technical content uses tables (StyledTable). Procedural checklist uses Steps. Code testing procedure uses code blocks. |
| 5.6 | MDX renders clean | NOT-TESTED | Cannot run dev server. No dead imports found — all imports appear used. |
| 5.7 | No old-schema frontmatter | PASS | All frontmatter values are valid canonical values |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours. Margin values in CustomDivider acceptable. |
| 5.9 | Generated file banners | N/A — not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase, correct import paths from `/snippets/` |

**Category 5 verdict: FAIL** — Fails 5.4.

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Line | Info type | Status |
|-------|------|-----------|--------|
| "CUDA 12.0 minimum. Earlier versions are not supported by the AI runner containers." | 80 | technical | UNVERIFIED — TODO at line 82 |
| "Consumer GPUs capped at 2-3 concurrent NVENC sessions" | 97 | technical | UNVERIFIED — TODO at line 105 |
| "RTX 3060 12GB, RTX 3060 Ti 8GB, RTX 2060 Super 8GB" at 8-12 GB tier | 204 | technical | UNVERIFIED — see previous VRAM inconsistency flags in REVIEW-REGISTRY.md |
| "12-16 GB (StreamDiffusion with SD 1.5)" for Cascade minimum | 226 | technical | UNVERIFIED |
| "24 GB (StreamDiffusion with SDXL)" for Cascade competitive | 227 | technical | UNVERIFIED |
| "Frame buffer overhead: add 1-2 GB" for Cascade | 228 | technical | UNVERIFIED |
| CPU minimum: 4 cores; recommended: 8-16 cores | 249–251 | technical | UNVERIFIED |
| RAM minimum 16 GB; recommended 32-64 GB | 252–254 | technical | UNVERIFIED |
| "Ubuntu 22.04 LTS" as minimum OS | 267 | technical | UNVERIFIED — TODO at line 41 confirms need for CUDA minimum verification |
| "Docker required for AI runner" | 279 | technical | UNVERIFIED — standard requirement but not explicitly sourced |
| "Port 8935 — Orchestrator RPC; Port 7935 — CLI HTTP interface" | 419–420 | technical | UNVERIFIED — TODO at line 45 |
| "SDXL model is approximately 7-8 GB" | 290 | technical | UNVERIFIED |
| "Budget at least 100 GB per 4-5 models served simultaneously" | 291 | technical | UNVERIFIED |
| Test stream URL: `storage.googleapis.com/lp_testharness_assets/...` | 314 | technical | UNVERIFIED — TODO at line 318 |
| "0.8 ratio threshold" as practical hardware limit | 362 | technical | UNVERIFIED — TODO at line 365 |
| "Budget at least 0.01 ETH for activation transaction and initial reward calls" | 457 | factual | UNVERIFIED |

**TODO flags (inline):**
1. Line 82: "Confirm the CUDA 12.0 minimum against the current AI runner base image."
2. Line 105: "Recheck the consumer-card session cap for Ada Lovelace GPUs."
3. Line 318: "Verify this test-stream URL before publishing."
4. Line 365: "Recheck the 0.8 ratio threshold with current operator guidance."
5. Line 41 (in block TODO, lines 35–46): "Confirm the NVENC consumer-card session cap for RTX 40xx hardware."
6. Line 43 (in block TODO): "Verify the CUDA minimum version against the current AI runner image."
7. Line 44 (in block TODO): "Verify the test-stream URL before publishing."
8. Line 45 (in block TODO): "Recheck the 0.8 ratio threshold with current operator guidance."
9. Line 46 (in block TODO): "Confirm port numbers (8935 orchestrator RPC, 7935 CLI) are still current go-livepeer defaults."

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | CUDA minimum, NVENC session caps, Cascade VRAM requirements, port numbers, test stream URL, and 0.8 threshold — all have explicit TODO flags confirming they are unverified |
| 6.2 | Code/commands tested | FAIL | `livepeer_bench` script (lines 320–332) and Docker GPU test (lines 388–390) have not been confirmed as tested per the TODO block. `nvidia-smi` is standard Linux tooling — PASS for that command. |
| 6.3 | No deprecated API usage | NOT-TESTED | CLI flags and `livepeer_bench` not verified against current go-livepeer version |
| 6.4 | Numbers are real | FAIL | Multiple numeric specifications unverified: Cascade VRAM (12-16 GB, 24 GB), NVENC session cap (2-3), CUDA minimum (12.0), ports (8935/7935), ETH budget (0.01 ETH), SDXL model size (7-8 GB) |
| 6.5 | REVIEW flags for unverified claims | FAIL | Unverified claims use TODO format, not the canonical `{/* REVIEW: [claim] — [source needed] */}` format |
| 6.6 | `veracityStatus` honest | FAIL | Field absent. Must be `unverified`. Multiple TODO-flagged technical claims cannot support `status: current`. |
| 6.7 | Authoritative vs AI-generated glossary | N/A — no glossary references |
| 6.8 | Source staleness check | FAIL | GPU driver requirements, CUDA versions, go-livepeer CLI ports, and Docker requirements are all version-dependent. No staleness flag. NVIDIA NVENC session limits change with GPU generations (Ada Lovelace explicitly flagged). |

**Category 6 verdict: FAIL** — Fails 6.1, 6.2, 6.4, 6.5, 6.6, 6.8.

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/operator-considerations/requirements` confirmed at docs.json line 2879 |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry |
| 7.3 | Tab entry portal routes to all sections | N/A — tab-level check |
| 7.4 | No structural orphans | PASS | Reachable from Operator Considerations group |
| 7.5 | Audience journey complete | PASS | Final step in Operator Considerations. Related Pages links forward to Configure (setup), Model Demand Reference (AI specs), Alternate Deployments, and Operating Rationale (back-link). |
| 7.6 | Cross-tab graduation paths | INFO | No explicit cross-tab links. All Related Pages links are within the orchestrators tab. Acceptable for a hardware reference page. |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/`, not in `_workspace/` |
| 7.8 | File naming conventions | PASS | `requirements.mdx` — no deprecated prefix. Consistent with `rcs-requirements.mdx` naming convention for the setup version. |
| 7.9 | `_workspace/` TTL | N/A — not a workspace file |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

**Link verification (P47 — full path against docs.json):**

| href | Full path in docs.json? | docs.json line | Status |
|------|------------------------|----------------|--------|
| `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` | Yes | 2903 | PASS |
| `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` | Yes | 2901 | PASS |
| `/v2/orchestrators/setup/configure` | — | Check needed |
| `/v2/orchestrators/guides/payments-and-pricing/payment-receipts` | Yes | 2912 | PASS |
| `/v2/orchestrators/guides/operator-considerations/operator-rationale` | Yes | 2876 | PASS |
| `/v2/orchestrators/guides/deployment-details/setup-options` | Yes | 2885 | PASS |

Check `/v2/orchestrators/setup/configure`:

`/v2/orchestrators/setup/configure` confirmed at docs.json line 2863.

| href | Full path in docs.json? | docs.json line | Status |
|------|------------------------|----------------|--------|
| `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` | Yes | 2903 | PASS |
| `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` | Yes | 2901 | PASS |
| `/v2/orchestrators/setup/configure` | Yes | 2863 | PASS |
| `/v2/orchestrators/guides/payments-and-pricing/payment-receipts` | Yes | 2912 | PASS |
| `/v2/orchestrators/guides/operator-considerations/operator-rationale` | Yes | 2876 | PASS |
| `/v2/orchestrators/guides/deployment-details/setup-options` | Yes | 2885 | PASS |
| External: developer.nvidia.com/video-encode-decode-gpu-support-matrix | External | — | NOT-TESTED |
| External: docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html | External | — | NOT-TESTED |
| External: storage.googleapis.com/lp_testharness_assets/... (test stream) | External | — | NOT-TESTED (also flagged as unverified in TODO) |
| External: arb1.arbitrum.io/rpc | External | — | NOT-TESTED |

All internal links verified. No broken internal links found.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | All 6 internal links confirmed in docs.json |
| 8.2 | All external links live | NOT-TESTED | External links not verified. Test stream URL explicitly flagged as requiring verification. |
| 8.3 | All snippet imports resolve | NOT-TESTED | Import paths use correct `/snippets/` convention; cannot verify without build |
| 8.4 | All images load | N/A — no inline images |
| 8.5 | Page renders without error | NOT-TESTED | No garbage characters or obvious MDX syntax errors found. Likely renders clean. |
| 8.6 | No TODO/TBD/Coming Soon in published content | FAIL | TODO block (lines 35–46) and 4 inline TODO comments (lines 82, 105, 318, 365) present in publishable content |

**Category 8 verdict: FAIL** — Fails 8.6.

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | TODO block (lines 35–46) lists 5 items requiring human verification before publishing. No sign-off recorded. |
| 9.2 | Consuming decisions in registry | NOT-TESTED | Cannot verify without reading decision registry |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators IA not approved, terminology not locked, content pass not open (tab-status.md). Page not eligible for publication. |
| 9.4 | Phase ordering respected | INFO | Veracity pass (Phase 7) not yet run |
| 9.5 | Findings gathered before fixes | INFO | Page is in-progress per TODO block |
| 9.6 | Feedback routed | INFO | No routing evidence; not a current blocker |

**Category 9 verdict: FAIL** — Fails 9.1, 9.3.

---

## Spelling/Typo Check

Visible text scanned:
- "NVENC" / "NVDEC" — correctly and consistently capitalised.
- "livepeer_bench" — correct casing (lowercase, underscore).
- "nvidia-smi" — correct casing (lowercase, hyphen).
- "NvEncOpenEncodeSessionEx" — correctly cased API error string (line 98).
- "DDNS" — correctly spelled.
- "NVMe" — correctly cased.
- "StreamDiffusion" — correctly cased.
- No typos found in headings, body prose, table cells, step titles, or code blocks.

---

## Cross-Category Connections

```
Root Cause A: Missing frontmatter fields + status/veracityStatus incoherence
Affects: 1.1 + 1.6 + 1.7 + 1.8 + 1.9 + 1.10 + 6.6
Fix: Add complexity, lifecycleStage, veracityStatus, industry, niche; change status to draft.
All proposed values require human confirmation before applying.
```

```
Root Cause B: Unverified technical specifications (CUDA, NVENC, ports, URLs)
Affects: 6.1 + 6.2 + 6.4 + 6.8 + 9.1
Fix: Resolve TODO items (lines 82, 105, 318, 365, block 35–46) before publishing. Convert TODOs to REVIEW: flags while in-progress.
```

```
Root Cause C: TODO block + inline TODOs in published content
Affects: 5.4 + 8.6 + 9.1
Fix: Move TODO block to _workspace/; convert inline TODOs to REVIEW: format. Do not remove until claims are verified.
```

```
Root Cause D: Self-referential opener
Affects: 2.4 + 2.5 + 2.10
Fix: Delete "Use this page as a readiness filter before investing more time in setup. It is here to answer a simple question:" and replace with a direct statement of the primary qualification threshold.
```

---

## Blocking Decisions

None. All issues have clear fixes. No blocking decisions required.

---

## Verdict Summary

**Overall: NEEDS WORK**

**Checks that fail:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 2.2, 2.4, 2.5, 2.10, 3.1, 5.4, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 8.6, 9.1, 9.3.

**21 checks fail.** The page content is well-structured and technically specific — GPU tiers, session limits, and the `livepeer_bench` procedure are all substantive and useful. All failures are mechanical: missing frontmatter, unverified technical claims, TODO blocks, two weak heading names, banned word, and self-referential opener.

Not a REWRITE. This is a fixable page.

---

## Prioritised Fix List

**CRITICAL**

**F-01** — `status: current` incoherent with unverified content
Location: frontmatter line 30
Fix: Change `status: current` to `status: draft`. Do not revert to `current` until all TODO-flagged technical claims are verified against current go-livepeer and NVIDIA documentation.

**F-02** — Add `veracityStatus: unverified`
Location: frontmatter (add after `status`)
Fix: Add `veracityStatus: unverified`. Required field per check 1.8.

**HIGH**

**F-03** — Add 5 missing required frontmatter fields
Location: frontmatter
Fix (confirm all values before applying):
- Proposed: `complexity: intermediate` — confirm before applying.
- Proposed: `lifecycleStage: setup` — confirm before applying.
- Proposed: `industry: [technical]` — confirm before applying.
- Proposed: `niche: [hardware, infrastructure]` — confirm before applying.
- `veracityStatus: unverified` — also covered by F-02.

**F-04** — Self-referential opener
Location: lines 55–57
Current text: "Use this page as a readiness filter before investing more time in setup. It is here to answer a simple question: does your machine, network, and system stack actually support the workload path you want to run on Livepeer?"
Fix: Delete both sentences. Replace with a direct threshold statement. Example: "NVIDIA CUDA is the hard dependency. If the target machine cannot pass the GPU visibility check, no other requirement is worth evaluating." (Proposed example — confirm wording before applying.)

**F-05** — Banned construction: `not supported` as primary statement
Location: line 80
Fix: "Earlier versions are not supported by the AI runner containers." → "The AI runner containers require CUDA 12.0 or later."
Note: subject to CUDA version confirmation (TODO at line 82).

**F-06** — Convert TODO flags to REVIEW: format
Location: lines 82, 105, 318, 365 (inline TODOs)
Fix: Convert each to canonical REVIEW: format before publishing:
- Line 82: `{/* REVIEW: CUDA 12.0 minimum — confirm against current AI runner base image tag on Docker Hub */}`
- Line 105: `{/* REVIEW: NVENC consumer-card session cap for Ada Lovelace (RTX 40xx) — confirm against developer.nvidia.com/video-encode-decode-gpu-support-matrix */}`
- Line 318: `{/* REVIEW: test-stream URL storage.googleapis.com/lp_testharness_assets/... — verify URL is still live and asset is current */}`
- Line 365: `{/* REVIEW: 0.8 ratio threshold for livepeer_bench — confirm with current go-livepeer operator guidance or community norms */}`

**F-07** — TODO block in published content
Location: lines 35–46
Fix: Move the block to a `_workspace/` notes file, or delete once all 5 verification items are resolved. Do not publish with this block.

**MEDIUM**

**F-08** — Banned word: "significantly"
Location: line 184
Fix: "CPU transcoding is possible without a GPU, but throughput is **significantly** lower." → "CPU transcoding is possible without a GPU, but throughput is a fraction of GPU output."

**F-09** — Rename: "Testing Your Capacity"
Location: H2 heading (line 302)
Fix: Rename to "Capacity Testing"

**F-10** — Rename: "Checklist Before Going Live"
Location: H2 heading (line 372)
Fix: Rename to "Launch Readiness"
Note: The CustomDivider above it already has `middleText="Pre-launch Checklist"` — aligning the H2 to "Launch Readiness" differentiates the two labels.

**INFO**

**F-11** — Port numbers require staleness flag
Location: lines 419–420 (checklist step "Confirm required ports are open")
Note: Port 8935 (Orchestrator RPC) and 7935 (CLI HTTP) are flagged in the TODO block (line 46) as requiring confirmation. Current values may be correct but should be verified against go-livepeer defaults before publication.

**F-12** — `developer.nvidia.com` link should reference the stable URL
Location: line 103
Note: The NVIDIA encode/decode support matrix URL is referenced as a `**bold-link**`. Verify that the URL is the stable/permalink version and not a session-specific or redirecting URL. Not a breaking issue but worth confirming.

**F-13** — Comment block at end of file
Location: lines 483–501 (the `/* PURPOSE: ... */` block)
Note: This contains draft planning notes. While not rendered, it adds file noise. Consider moving to `_workspace/` or deleting before final publication.
