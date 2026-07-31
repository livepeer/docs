# Per-Page Quality Check Report
## `v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2919–2925

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `'Capacity Planning'` | PASS | |
| `sidebarTitle` | Yes | `'Capacity Planning'` | PASS | |
| `description` | Yes | `'Determine the correct -maxSessions value for your orchestrator using livepeer_bench, bandwidth calculations, and NVENC hardware session limits. Covers GPU and CPU transcoding capacity, AI VRAM budgeting, and session limit configuration.'` | FAIL | ~210 chars — exceeds 160-char limit. Second sentence is enumerative |
| `pageType` | Yes | `how_to` | FAIL | Deprecated 12-type alias. Canonical replacement: `pageType: instruction` |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | No | — | FAIL | Field absent. Proposed: `purpose: configure` — confirm before applying. Page guides operator to set `-maxSessions` for their hardware |
| `complexity` | No | — | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying |
| `lifecycleStage` | No | — | FAIL | Field absent. Proposed: `lifecycleStage: optimise` — confirm before applying |
| `keywords` | Yes | 11-item array | PASS | `maxSessions`, `livepeer_bench`, `NVENC`, `VRAM`, `concurrent sessions`, `bandwidth`, `benchmarking`, `session limits` — specific and searcher-intent-aligned |
| OG image block | Yes | All 5 fields present | PASS | Correct path |
| `industry` | No | — | FAIL | Required per P41. Proposed: `industry: [technical, broadcast]` — confirm before applying |
| `niche` | No | — | FAIL | Required per P41. Proposed: `niche: [hardware, infrastructure]` — confirm before applying |
| `veracityStatus` | No | — | FAIL | Field absent. 6 open FACT CHECK flags present. Must be `unverified`. `status: draft` is consistent (P39 satisfied) |

**Required field count:** 4/10 canonical fields present. **Missing: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`, `veracityStatus`. `pageType` deprecated. `description` overlength.**

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1.1 | All 10 required frontmatter fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`, `veracityStatus`. 6 fields absent |
| 1.2 | `pageType` uses 7-type canonical schema | FAIL | `how_to` is a deprecated 12-type alias. Canonical replacement: `pageType: instruction` |
| 1.3 | `pageVariant` valid if present | N/A | Field absent. `how_to → instruction` migration does not require `pageVariant` (P42) |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent. Proposed: `purpose: configure` — confirm before applying (P51) |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent. Proposed: `complexity: intermediate` — confirm before applying (P51) |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent. Proposed: `lifecycleStage: optimise` — confirm before applying (P51) |
| 1.8 | `veracityStatus` present and honest | FAIL | Field absent. 6 open FACT CHECK flags (lines 82, 95, 167, 185, 193, 201, 278, 337, 378). Must be `veracityStatus: unverified`. `status: draft` is consistent (P39 satisfied) |
| 1.9 | `industry` array valid if present | FAIL | Required per P41. Proposed: `industry: [technical, broadcast]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Required per P41. Proposed: `niche: [hardware, infrastructure]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | ~210 chars — exceeds 160-char limit. Proposed: `Determine the correct -maxSessions value for your orchestrator using livepeer_bench, bandwidth calculations, and NVENC session limits.` (133 chars) — confirm before applying |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | PASS | `maxSessions`, `livepeer_bench`, `NVENC`, `VRAM`, `concurrent sessions`, `bandwidth`, `benchmarking`, `session limits` are specific and searcher-intent-aligned |

**Category 1 verdict: FAIL** — 9 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — VOICE & COPY

**Banned word scan (P24 — show all candidates):**
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
- `significantly` — FOUND at line 191: "CPU transcoding produces significantly higher ratios per session than GPU."

**Banned phrase scan:**
- "This section covers" — not found
- "This page covers…" — FOUND at line 51: "This page covers video transcoding sessions." — banned construction `This page [verb]`; see check 2.4
- "rather than" — not found
- "etc." / "and so on" — not found
- "can generate" / "may produce" in value claims — not found

**Banned construction candidates (P6):**
- Line 51: "This page covers video transcoding sessions. AI capacity is configured per pipeline via the `capacity` field in `aiModels.json`." — `This page [verb]` is a banned construction (check 2.4). Fix: delete the first sentence. The second sentence is factual and should be retained but rewritten to avoid self-reference: "AI capacity is configured per pipeline via the `capacity` field in `aiModels.json`." (already clean — just delete the first sentence).
- No `can/may [verb]` in value claims found.
- No `not [X]` as primary value statement found.

**Em-dash scan (P30 — all visible text):**
- Body prose: `0.0768` ratio in benchmark output is code text, not prose. No em-dashes found.
- StyledStep `title` props (P48): `"Download the test stream"`, `"Download the rendition config"`, `"Run at increasing concurrency"` — no em-dashes. PASS.
- Headings H2/H3: no em-dashes
- `description` field: no em-dashes
- CustomDivider `middleText` props (P20): `"Hardware Limit"`, `"Bandwidth Limit"`, `"Deriving the Limit"`, `"AI VRAM Budget"`, `"Tuning Live"` — no em-dashes. PASS.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 2.1 | UK English throughout (P54 — only flag US spellings) | PASS | No US `-ize`, `-or`, `-er` endings in prose. `quantised` (UK form, line 319) is correct. `concurrentSessions` is a CLI flag identifier — exempt |
| 2.2 | Zero banned words | FAIL | Line 191: `significantly` — `significantly` is a banned word (Frameworks.mdx §3.1 lists `significant`; `significantly` is its adverb form, same register). Quote: "CPU transcoding produces **significantly** higher ratios per session than GPU." Fix: "CPU transcoding produces higher ratios per session than GPU." The comparative "higher" is sufficient without the intensifier |
| 2.3 | Zero banned phrases | PASS | No banned phrases found |
| 2.4 | Zero banned constructions | FAIL | Line 51: "This page covers video transcoding sessions." — `This page [verb]` self-reference. Fix: delete this sentence. The following sentence ("AI capacity is configured per pipeline via the `capacity` field in `aiModels.json`") is standalone-readable and retains the scope clarification |
| 2.5 | Opening order correct | PASS | Tip leads with consequence (incorrect `-maxSessions` → segments pile up, reputation score suffers). Body opens with definition of `-maxSessions` and the measurement requirement. Fact-first |
| 2.6 | Paragraph discipline | PASS | Single-job paragraphs; fact-first leads; no hedge endings |
| 2.7 | Audience register correct | PASS | Hardware-specific (NVENC, VRAM, GPU IDs, bandwidth Mbps), CLI-focused, benchmarking-oriented. Correct `orchestrator` register |
| 2.8 | Per-audience prohibited phrases absent | PASS | No "Your orchestrator will automatically…", "Easy to set up", or unquantified earnings hedges |
| 2.9 | No passive value statements | PASS | Benchmark threshold (0.8) stated as a specific number with rationale. VRAM figures tabulated |
| 2.10 | No hedging openers | PASS | Tip leads with concrete consequence; body opens with definition |
| 2.11 | Terminology locked and consistent | PASS | `livepeer_bench`, `-maxSessions`, `-concurrentSessions`, `NVENC`, `NVDEC`, `capacity` (aiModels.json field), VRAM used consistently |

**Category 2 verdict: FAIL** — 2 checks fail: 2.2, 2.4

---

## Category 3 — SECTION NAMING & HEADINGS

**Heading inventory (exempt: `## Related pages` — P53 note: lowercase `pages` vs exact exempt form `Related Pages`. INFO only — see F-10):**

| Heading | Level | Precision (1–5) | Depth (1–5) | Stability (1–5) | Clarity (1–5) | Conciseness (1–5) | Total | Pass? |
|---------|-------|-----------------|-------------|-----------------|---------------|--------------------|-------|-------|
| Measuring hardware capacity | H2 | 4 | 3 | 5 | 5 | 4 | 21/25 | PASS |
| Installing livepeer_bench | H3 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Setting up the benchmark | H3 | 3 | 2 | 4 | 4 | 4 | 17/25 | FAIL |
| Reading the output | H3 | 3 | 2 | 4 | 4 | 4 | 17/25 | FAIL |
| NVENC hardware session caps | H3 | 5 | 5 | 5 | 5 | 4 | 24/25 | PASS |
| CPU transcoding | H3 | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Calculating bandwidth capacity | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Setting maxSessions | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| AI inference and VRAM capacity | H2 | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Tuning after going live | H2 | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |

Failing headings analysis:
- **"Setting up the benchmark"** (17/25): Generic process-verb label. Could apply to any tool setup. Low Precision (3): does not signal the content (configuring livepeer_bench with test stream and rendition config). Low Depth (2). Proposed: `Benchmark Configuration` — confirm before applying. (P18 check: `Configuration` is in the check 3.2 OK list.)
- **"Reading the output"** (17/25): Generic. Low Precision (3) and Depth (2). Does not signal what the output means or how to interpret the ratio. Proposed: `Interpreting Benchmark Results` — confirm before applying.
- **"Tuning after going live"** (18/25): Low Conciseness (3), low Depth (3). "After going live" is a temporal qualifier that weakens the heading. The content is about live monitoring and iterative `-maxSessions` adjustment. Proposed: `Live Tuning` — confirm before applying.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 3.1 | Every heading scores ≥20/25 | FAIL | 3 headings below threshold: "Setting up the benchmark" (17/25), "Reading the output" (17/25), "Tuning after going live" (18/25) |
| 3.2 | No banned or weak standalone heading terms | PASS | No Banned-tier terms. No Avoid-tier terms |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | PASS | "NVENC hardware session caps", "AI inference and VRAM capacity" interpretable in isolation |
| 3.5 | Heading names the concept, not examples | PASS | "Calculating bandwidth capacity" not "100 Mbps vs 500 Mbps vs 1 Gbps" |
| 3.6 | Title well-formed | PASS | `Capacity Planning` — 2 words, concept-derived, no banned forms |
| 3.7 | Sounds like an expert editorial choice | FAIL | "Setting up the benchmark" and "Reading the output" are generic instructional labels. "Tuning after going live" is verbose. A senior technical editor would anchor to the governing concept |

**Category 3 verdict: FAIL** — 2 checks fail: 3.1, 3.7

---

## Category 4 — PAGE STRUCTURE

Nav sequence from docs.json lines 2919–2925: `pricing-strategy` (pos 1) → `capacity-planning` (pos 2) → `ai-model-management` (pos 3) → `reward-call-tuning` (pos 4).

This page is position 2 of 4 in the config-and-optimisation group.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 4.1 | One purpose, one audience, one job | PASS | Single job: measure and configure `-maxSessions` (video) and understand VRAM capacity (AI) |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator operator determine the correct `-maxSessions` value using benchmark results and bandwidth calculations." — states cleanly |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | Previous: `pricing-strategy` (revenue configuration) → reader knows price settings. Next: `ai-model-management` (warm/cold model management) → reader needs VRAM budget established first. This page establishes VRAM budget and capacity limits. Correct sequence |
| 4.4 | No dead ends | PASS | Related pages link to ai-inference-operations, ai-model-management, metrics-and-alerting, gpu-support |
| 4.5 | Prerequisites stated or linked | INFO | No explicit Prerequisites section. Implicitly requires: go-livepeer installed, `livepeer_bench` on PATH. Installation check covered within the page (line 61–67). Reasonable |
| 4.6 | Out-of-scope is clear | PASS | Line 51: "Video transcoding capacity and AI inference capacity use separate limits and separate mechanisms. This page covers video transcoding sessions. AI capacity is configured per pipeline via the `capacity` field in `aiModels.json`." — clear scope boundary (despite the banned construction in the first sentence, the scoping information is correct) |
| 4.7 | Information type per section correct | PASS | `purpose: configure` (proposed). Permitted types: `procedural`, `technical`, `factual` (primary); `conceptual` (secondary). Sections: benchmark procedure (procedural + technical), output interpretation (analytical/factual), bandwidth calculation (technical/factual), maxSessions derivation (procedural + technical), AI VRAM (factual + technical), live tuning (procedural) — all within permitted range |
| 4.8 | No content duplication from adjacent sections | INFO | VRAM table (lines 288–333) overlaps with the VRAM table in `ai-model-management.mdx` (lines 75–125). Values are consistent but the same data appears in two pages. See also cross-category connection C4 |
| 4.9 | Section orientation page present | N/A | Page-level check |
| 4.10 | Cross-tab links at journey intersections | N/A | Tab-level check |

**Category 4 verdict: PASS**

---

## Category 5 — LAYOUT & COMPONENTS

Component matrix for `pageType: how_to` per `docs-guide/policies/component-layout-decisions.mdx`: Preferred: `Steps`, `Step`, `CodeGroup`, `Warning`, `Check`, `Tip`. Avoid: `Coming Soon`, `PreviewCallout`.
When migrated to `pageType: instruction`: same matrix.

Components used: `CustomDivider`, `LinkArrow`, `StyledTable`/`TableRow`/`TableCell`, `StyledSteps`/`StyledStep`, `Tip`, `Warning`.

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 5.1 | Correct template for pageType + pageVariant | INFO | `how_to` deprecated. When migrated to `instruction`: requires Prerequisites and Steps. Page uses `StyledSteps`/`StyledStep` for the benchmark procedure — this is the Steps pattern with a custom component |
| 5.2 | Required sections present | PASS | Steps structure present via `StyledSteps`/`StyledStep` (lines 71–125). No explicit Prerequisites heading but the page opens with context before procedural steps |
| 5.3 | Only approved components used | NOT-TESTED | `Tip`, `Warning` approved for `instruction`. `CustomDivider`, `StyledTable`/`TableRow`/`TableCell`, `StyledSteps`/`StyledStep`, `LinkArrow` are custom components not listed in component-layout-decisions.mdx Preferred or Avoid columns. Per P22: NOT-TESTED |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`, no rendered TODO/TBD |
| 5.5 | Information type → component mapping correct | PASS | Benchmark steps in `StyledSteps` (procedural → Steps correct). Tables in `StyledTable` (factual → table correct). `Warning` for operational risk |
| 5.6 | MDX renders clean | PASS (inferred) | No unclosed tags; all imports present |
| 5.7 | No old-schema frontmatter | FAIL | `pageType: how_to` deprecated (same root cause as check 1.2) |
| 5.8 | CSS uses custom properties only | PASS | No hardcoded hex colours |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct paths from `/snippets/components/` |

**Category 5 verdict: FAIL** — 1 check fails: 5.7

---

## Category 6 — VERACITY

**Veracity Claims Inventory:**

| Claim | Type | Line | TESTED/NOT-TESTED | Source needed |
|-------|------|------|-------------------|---------------|
| Benchmark stream URL (Google Storage) | technical | 76 | NOT-TESTED | FACT CHECK flag (line 82): Rick to test |
| Benchmark rendition config URL (GitHub) | technical | 89–91 | NOT-TESTED | FACT CHECK flag (line 95): confirm 1080p inclusion |
| 0.8 ratio threshold = community convention | analytical | 101, 165, 167 | NOT-TESTED | FACT CHECK flag (line 167): Discord #orchestrators to confirm |
| NVENC consumer driver hard limit: 3–8 concurrent sessions | technical | 183–185 | NOT-TESTED | FACT CHECK flag (line 185): Rick to verify range and RTX uniformity |
| CPU sessions: ~5 rule-of-thumb from 2021 hardware (noted as historical) | analytical | 191, 193 | NOT-TESTED | FACT CHECK flag (line 193): community figures for modern CPUs |
| 5.65 Mbps upload per stream (sum of rendition set) | technical | 199, 201 | NOT-TESTED | FACT CHECK flag (line 201): Rick to confirm / 1080p source question |
| `OrchestratorCapped` error string in current go-livepeer | technical | 376, 378 | NOT-TESTED | FACT CHECK flag (line 378): Rick / current source |
| `livepeer_transcode_duration_seconds` metric name | technical | 363 | NOT-TESTED | go-livepeer metrics source |
| `livepeer_real_time_seg_transcoded` metric name | technical | 367 | NOT-TESTED | go-livepeer metrics source |
| "Drops below 1 when segments fall behind" for `livepeer_real_time_seg_transcoded` | technical | 368 | NOT-TESTED | go-livepeer source |
| "Should stay below 2 seconds per session" for `livepeer_transcode_duration_seconds` | technical | 364 | NOT-TESTED | Segment duration is 2s — plausible; needs confirmation |
| Beta constraint: one warm model per GPU | factual | 335–336 | NOT-TESTED | FACT CHECK flag (line 337): Rick / ai-runner team |
| NVENC/NVDEC use dedicated hardware blocks, consume minimal VRAM | technical | 339 | NOT-TESTED | NVIDIA hardware specs |

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 6.1 | Every factual claim citable | FAIL | 13 claims NOT-TESTED; 7 have FACT CHECK flags; 6 additional claims lack flags |
| 6.2 | Code/commands tested | NOT-TESTED | `wget` URLs, `livepeer_bench` invocation, `docker` commands not verified against current release. `livepeer_bench -help` output not confirmed |
| 6.3 | No deprecated API usage | PASS (inferred) | `-maxSessions`, `-nvidia`, `-concurrentSessions`, `livepeer_bench` consistent with other pages |
| 6.4 | Numbers are real | FAIL | 0.8 ratio threshold acknowledged as community convention in FACT CHECK (not a go-livepeer hard limit). NVENC session limit range (3–8) unverified. 5.65 Mbps figure noted as derived from transcodingOptions.json in FACT CHECK |
| 6.5 | REVIEW flags for unverified claims | FAIL | 7 FACT CHECK flags present. 6 additional claims lack flags: Prometheus metric names (lines 363, 367), metric threshold values (lines 364, 368), NVENC/NVDEC VRAM claim (line 339), `livepeer_real_time_seg_transcoded` semantics (line 368) |
| 6.6 | veracityStatus honest | FAIL | `veracityStatus` absent. Given 7 FACT CHECK flags and untested procedural claims, correct value is `unverified`. `status: draft` is consistent |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary citations |
| 6.8 | Source staleness check | INFO | Benchmark stream URL (Google Storage) could change. NVENC driver limits may vary by driver version. 5.65 Mbps rendition total is from a specific transcodingOptions.json snapshot |

**Category 6 verdict: FAIL** — checks 6.1, 6.4, 6.5, 6.6 fail

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/config-and-optimisation/capacity-planning` confirmed at docs.json line 2922 |
| 7.2 | Navigation matches file system | PASS | File at declared path |
| 7.3 | Tab entry portal routes to all sections | N/A | Tab-level check |
| 7.4 | No structural orphans | PASS | Reachable from docs.json nav and from `ai-model-management` Related pages card |
| 7.5 | Audience journey complete | PASS | Position 2 of 4; fits between pricing (revenue configuration) and model management (VRAM allocation) |
| 7.6 | Cross-tab graduation paths exist | N/A | Tab-level check |
| 7.7 | File in correct lane | PASS | `v2/orchestrators/guides/` |
| 7.8 | File naming conventions | PASS | No incorrect prefix |
| 7.9 | _workspace/ TTL compliance | N/A | Not in _workspace/ |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 8.1 | All internal links resolve | PASS | `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — confirmed docs.json line 2898. `/v2/orchestrators/guides/config-and-optimisation/ai-model-management` — confirmed docs.json line 2923. `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` — confirmed docs.json line 2932. `/v2/orchestrators/resources/gpu-support` — confirmed docs.json line 2978. All 4 Related pages cards verified |
| 8.2 | All external links live | NOT-TESTED | `https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz` and `https://raw.githubusercontent.com/livepeer/go-livepeer/master/cmd/livepeer_bench/transcodingOptions.json` — live status not verified in static review. FACT CHECK flag at line 82 already flags the GCS URL |
| 8.3 | All snippet imports resolve | PASS | Standard import paths consistent with other pages |
| 8.4 | All images load | PASS | OG image standard path |
| 8.5 | Page renders without error | PASS (inferred) | No unclosed tags; all imports present |
| 8.6 | No TODO/TBD/Coming Soon in published content | PASS | FACT CHECK comments are MDX `{/* */}` — not rendered output |

**Category 8 verdict: PASS** (8.2 NOT-TESTED — external URLs require live verification)

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 9.1 | Human sign-off recorded | FAIL | `status: draft`; no sign-off recorded |
| 9.2 | All consuming decisions in registry | N/A | No structural decisions consumed |
| 9.3 | Gate prerequisites met | FAIL | Orchestrators tab IA not approved, terminology not locked |
| 9.4 | Phase ordering respected | N/A | Cannot confirm |
| 9.5 | Findings gathered before fixes | N/A | First formal check |
| 9.6 | Feedback routed | N/A | First formal check |

**Category 9 verdict: FAIL** — checks 9.1, 9.3 fail (expected pre-publication state)

---

## Cross-Category Connections

- **C1:** Missing `purpose`, `complexity`, `lifecycleStage` (checks 1.1, 1.4, 1.6, 1.7) → affects check 4.7 (evaluated against proposed `purpose: configure`) and check 5.1 (template compliance)
- **C2:** `pageType: how_to` deprecated (checks 1.2, 5.7) → single root cause, one fix
- **C3:** Missing `veracityStatus` (check 1.8) + 7 FACT CHECK flags (check 6.5) + untested procedural claims (checks 6.1, 6.4) → single veracity debt
- **C4:** `description` overlength (check 1.11) — standalone fix
- **C5:** `significantly` banned word (check 2.2) + `This page covers` banned construction (check 2.4) — both on adjacent lines (191, 51); separate fixes
- **C6:** 3 headings below threshold (check 3.1) + editorial quality (check 3.7) — same three headings
- **C7:** VRAM table in this page (lines 288–333) duplicates VRAM table in `ai-model-management.mdx` (lines 75–125) — check 4.8 INFO; maintenance risk if values diverge

---

## Blocking Decisions

None. All FACT CHECK items are SME verifications, not structural decisions. 7 FACT CHECK flags constitute the largest veracity debt in this group (vs 4 in pricing-strategy, 4 in reward-call-tuning, 2 in ai-model-management).

---

## Verdict Summary

**Overall: NEEDS WORK**

**19 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 3.1, 3.7, 5.7, 6.1, 6.4, 6.5, 6.6, 9.1, 9.3**

Category verdicts: Cat 1 FAIL | Cat 2 FAIL | Cat 3 FAIL | Cat 4 PASS | Cat 5 FAIL | Cat 6 FAIL | Cat 7 PASS | Cat 8 PASS | Cat 9 FAIL

---

## Prioritised Fix List

**F-01 — CRITICAL — Add missing frontmatter fields**
Six fields absent. Proposed values:
- Proposed: `purpose: configure` — confirm before applying
- Proposed: `complexity: intermediate` — confirm before applying
- Proposed: `lifecycleStage: optimise` — confirm before applying
- Proposed: `industry: [technical, broadcast]` — confirm before applying
- Proposed: `niche: [hardware, infrastructure]` — confirm before applying
- Proposed: `veracityStatus: unverified` — apply immediately given 7 open FACT CHECK flags
*(Fixes: 1.1, 1.4, 1.6, 1.7, 1.9, 1.10, 1.8)*

**F-02 — HIGH — Migrate `pageType: how_to` to `pageType: instruction`**
Replace `pageType: how_to` with `pageType: instruction`. No `pageVariant` co-fix required.
*(Fixes: 1.2, 5.7)*

**F-03 — HIGH — Shorten `description` to ≤160 chars**
Current: ~210 chars. Proposed: `Determine the correct -maxSessions value for your orchestrator using livepeer_bench, bandwidth calculations, and NVENC session limits.` (133 chars) — confirm before applying.
*(Fixes: 1.11)*

**F-04 — HIGH — Remove banned word `significantly` (line 191)**
Line 191: "CPU transcoding produces **significantly** higher ratios per session than GPU." Fix: "CPU transcoding produces higher ratios per session than GPU." The comparative is sufficient.
*(Fixes: 2.2)*

**F-05 — HIGH — Delete `This page covers` banned construction (line 51)**
Line 51, first sentence: "This page covers video transcoding sessions." — delete this sentence. The scope boundary is preserved by the second sentence ("AI capacity is configured per pipeline via the `capacity` field in `aiModels.json`.") which is a standalone factual statement.
*(Fixes: 2.4)*

**F-06 — HIGH — Rename failing headings**
- "Setting up the benchmark" (17/25) → Proposed: `Benchmark Configuration` — confirm before applying
- "Reading the output" (17/25) → Proposed: `Interpreting Benchmark Results` — confirm before applying
- "Tuning after going live" (18/25) → Proposed: `Live Tuning` — confirm before applying
*(Fixes: 3.1, 3.7)*

**F-07 — HIGH — Add REVIEW flags to unverified claims lacking them**
Claims without FACT CHECK flags: Prometheus metric name `livepeer_transcode_duration_seconds` (line 363), metric name `livepeer_real_time_seg_transcoded` (line 367), threshold "below 2 seconds per session" (line 364), "drops below 1" behaviour (line 368), NVENC/NVDEC VRAM claim (line 339). Add `{/* REVIEW: [claim] — verify against [source] before publishing */}` inline at each (P19).
*(Fixes: 6.5)*

**F-08 — MEDIUM — Resolve FACT CHECK at line 82 (benchmark stream URL)**
Verify the GCS test stream URL is still live before publishing. Rick to test.
*(Contributes to: 6.1, 8.2)*

**F-09 — MEDIUM — Resolve FACT CHECK at line 95 (rendition config and 1080p question)**
Confirm whether 1080p jobs still appear from some gateways, and whether the benchmark rendition set reflects current network requirements. Rick to advise.
*(Contributes to: 6.1, 6.4)*

**F-10 — MEDIUM — Resolve FACT CHECK at line 167 (0.8 ratio threshold)**
Confirm 0.8 is the current community convention. Discord #orchestrators.
*(Contributes to: 6.1, 6.4)*

**F-11 — MEDIUM — Resolve FACT CHECK at line 185 (NVENC session limit range)**
Confirm current NVENC session limit range (3–8) for consumer cards, and whether it applies uniformly across RTX series. Rick to advise, including whether to document the driver patch.
*(Contributes to: 6.1, 6.4)*

**F-12 — MEDIUM — Resolve FACT CHECK at line 193 (CPU transcoding sessions)**
Community figures for modern CPUs (Ryzen 9 7950X, Threadripper PRO) session counts. Replace or remove the 2021 rule-of-thumb reference.
*(Contributes to: 6.1, 6.4)*

**F-13 — MEDIUM — Resolve FACT CHECK at line 201 (5.65 Mbps figure)**
Confirm 5.65 Mbps figure and 1080p source bandwidth requirements. Rick / transcodingOptions.json.
*(Contributes to: 6.1, 6.4)*

**F-14 — MEDIUM — Resolve FACT CHECK at line 378 (`OrchestratorCapped` error string)**
Confirm `OrchestratorCapped` is the correct error string in current go-livepeer when MaxSessions is exceeded. Rick / go-livepeer source.
*(Contributes to: 6.1, 6.2)*

**F-15 — MEDIUM — Resolve FACT CHECK at line 337 (Beta constraint on AI warm models)**
Confirm whether the one-warm-model-per-GPU Beta constraint is still in effect. Rick / ai-runner team. (Shared with ai-model-management.mdx FACT CHECK.)
*(Contributes to: 6.1)*

**F-16 — INFO — `## Related pages` heading capitalisation**
All four pages in this group use `## Related pages` (lowercase p). The exact exempt form per P16/P53 is `Related Pages` (capital P). Either capitalise to match the approved structural element form, or confirm lowercase is intentional.

**F-17 — INFO — VRAM table duplication with ai-model-management.mdx**
VRAM table (lines 288–333) appears in both this page and `ai-model-management.mdx` (lines 75–125). Values are consistent but create maintenance risk if they diverge. Consider consolidating to one page with a link from the other.
