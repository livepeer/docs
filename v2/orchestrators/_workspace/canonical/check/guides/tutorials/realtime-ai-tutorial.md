# Check Report: realtime-ai-tutorial.mdx

**File:** `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx`
**Check date:** 2026-03-24
**Reviewer:** Quality check agent (Batch 6, P1–P54)
**docs.json nav position:** Tutorials group, position 6 of 6 (PREV: `full-ai-pipeline-tutorial`, NEXT: none / end of Tutorials group)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `'Realtime AI Tutorial'` | PASS | Clear and specific |
| `sidebarTitle` | Yes | `'Realtime AI'` | PASS | Acceptable |
| `description` | Yes | `Set up live video-to-video AI processing using ComfyStream and the Cascade pipeline. A video stream enters, a transformed stream exits in under 100ms per frame.` | PASS | Subject-first, 153 chars, UK English, no self-reference. Within 160-char limit. |
| `pageType` | Yes | `tutorial` | PASS | Canonical 7-type value |
| `audience` | Yes | `orchestrator` | PASS | Canonical token |
| `purpose` | MISSING | — | FAIL | Required field absent |
| `complexity` | MISSING | — | FAIL | Required field absent |
| `lifecycleStage` | MISSING | — | FAIL | Required field absent |
| `keywords` | Yes | `[livepeer, orchestrator, realtime ai, cascade, comfystream, live-video-to-video, tutorial, StreamDiffusion]` | PASS | Present; specific; searcher-intent-aligned |
| `veracityStatus` | MISSING | — | FAIL | `status: current` present without `veracityStatus` — P39 violation |
| `industry` | MISSING | — | FAIL (P41) | Required. Proposed: `industry: [technical, AI]` — confirm before applying |
| `niche` | MISSING | — | FAIL (P41) | Required. Proposed: `niche: [infrastructure, AI]` — confirm before applying |
| OG image block | Yes (5 fields) | All 5 present | PASS | Standard orchestrators OG image |

**Proposed frontmatter additions (confirm before applying):**
- `purpose: build` — confirm before applying (end-to-end live streaming AI setup)
- `complexity: advanced` — confirm before applying (RTX 4090 required, ComfyStream, StreamDiffusion, 3-hour setup)
- `lifecycleStage: setup` — confirm before applying
- `veracityStatus: unverified` — required; 2 open FACT CHECK flags
- `industry: [technical, AI]` — confirm before applying
- `niche: [infrastructure, AI]` — confirm before applying

---

## Category 1: Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `tutorial` canonical |
| 1.3 | `pageVariant` valid if present | N/A | Not present |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | `status: current` + `veracityStatus` absent + 2 FACT CHECK flags |
| 1.9 | `industry` valid if present | FAIL (P41) | Absent; required |
| 1.10 | `niche` valid if present | FAIL (P41) | Absent; required |
| 1.11 | `description` well-formed | PASS | 153 chars, subject-first, UK English, no self-reference |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | PASS | Specific; "comfystream", "live-video-to-video", "StreamDiffusion", "cascade" are strong searcher terms |

**Category 1 verdict: FAIL** — 7 failing checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10

---

## Category 2: Voice & Copy

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spelling patterns. Candidates scanned: `optimize` — not present; `utilize` — not present; `behavior` — not present. All clean. |
| 2.2 | Zero banned words | FAIL | Line 87: "StreamDiffusion's architecture is **purpose-built** for this" — `purpose-built` is not a banned word. Rescan: `effectively` — not present; `essentially` — not present; `basically` — not present; `significant` — not present; `various` — not present; `several` — not present; `obviously` — not present; `clearly` — not present. All clean. PASS. |
| 2.3 | Zero banned phrases | PASS | "This section covers" — not present; "rather than" — not present; "depends on various" — not present; "and so on" — not present. All clean. |
| 2.4 | Zero banned constructions | PASS | `not [X]` primary statements: "Cards below 24 GB are typically insufficient" (line 103) — factual assessment in prerequisites. Not a value claim. PASS. `can/may [verb]` value claims: see Banned Construction Scan. `This page [verb]` — not present. `if [condition]` in body prose: see Banned Construction Scan. |
| 2.5 | Opening order correct | PASS | Tip opens with what realtime AI is and how it differs (value before mechanism). Intro states the tutorial outcome and time estimate. |
| 2.6 | Paragraph discipline | PASS | Paragraphs are concise. Lead sentences state facts. |
| 2.7 | Audience register correct | PASS | Hardware-specific (RTX 4090 named), VRAM-specific, performance-aware (33ms frame budget, 30+ fps stated). Correct for `orchestrator` audience. |
| 2.8 | Per-audience prohibited phrases absent | PASS | "Easy to set up" — not present; "The network rewards you for" — not present. |
| 2.9 | No passive value statements | PASS | "StreamDiffusion's architecture is purpose-built for this: stream batching, residual CFG, and stochastic similarity filtering combine to achieve 30+ fps on an RTX 4090." — concrete and specific. |
| 2.10 | No hedging openers | PASS | Tip opens with a direct technical distinction. |
| 2.11 | Terminology locked and consistent | PASS | Cascade, ComfyStream, StreamDiffusion, live-video-to-video, `live-base` image, `-livePaymentInterval` — all used consistently. First use: Cascade defined implicitly via context; BYOC not used (correct). |

**Category 2 verdict: PASS**

---

## Category 3: Section Naming & Headings

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| How realtime AI differs from batch | 4 | 4 | 4 | 4 | 3 | 19/25 | FAIL |
| Prerequisites | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Step 1: Verify GPU and Docker access | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Step 2: Pull the live-base AI runner image | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Step 3: Download ComfyStream model weights | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Step 4: Configure aiModels.json for live pipeline | 4 | 4 | 4 | 4 | 2 | 18/25 | FAIL |
| Step 5: Start go-livepeer with live AI flags | 5 | 4 | 5 | 5 | 3 | 22/25 | PASS |
| Step 6: Set up the gateway for live routing | 4 | 4 | 4 | 4 | 3 | 19/25 | FAIL |
| Step 7: Send a test stream | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Step 8: Verify the transformed output | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| Troubleshooting | 4 | 4 | 5 | 5 | 5 | 23/25 | PASS |
| What happened | 3 | 2 | 3 | 3 | 4 | 15/25 | FAIL |

**Check 3.2:**
- "How realtime AI differs from batch" — question-like framing, describes comparison rather than naming the concept. Proposed: `Realtime vs Batch Architecture`. Check 3.2 prohibited list: none present. PASS validation. Check 3.3: this is a comparison heading but names the concept (architecture difference). Not a banned `X vs Y` contrast label because it names the governing concept. BORDERLINE — prefer `Realtime vs Batch Architecture` or `Cascade Architecture Comparison`.
- "Step 4: Configure aiModels.json for live pipeline" — "for live pipeline" is scope qualifier adding verbosity. Proposed: `Step 4: Configure aiModels.json`. Em-dash check (P48): none. PASS.
- "Step 6: Set up the gateway for live routing" — "for live routing" adds qualifier. Proposed: `Step 6: Configure the Gateway`. Em-dash check (P48): none. PASS.
- "What happened" — generic. Proposed: `Cascade Pipeline Result`. Check 3.2 prohibited list: none present. PASS.

**Check 3.3:** "How realtime AI differs from batch" has comparison framing but is not a banned `X vs Y` literal label. BORDERLINE — see above. Flag for human review.

**Check 3.6:** Title "Realtime AI Tutorial" — 3 words, concept-derived. PASS.
**Check 3.7:** Most headings strong. "What happened" and "How realtime AI differs from batch" are weaker choices.

**Category 3 verdict: FAIL** — Failing: 3.1 (4 headings), 3.2 (4 headings), 3.7

---

## Category 4: Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single audience: `orchestrator`. Single job: set up a live-video-to-video AI pipeline using Cascade/ComfyStream. |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator set up a live-video-to-video AI streaming pipeline and verify it processes frames in real time." Passes. |
| 4.3 | PREV/NEXT adjacency correct | PASS | PREV: `full-ai-pipeline-tutorial` (batch inference pipeline). This is the final tutorial — live streaming. NEXT: none (end of Tutorials group). Logical: batch → streaming. Reader needs `full-ai-pipeline-tutorial` context. |
| 4.4 | No dead ends | PASS | Related Pages: Realtime AI Setup, Full AI Pipeline Tutorial, Capacity Planning, Gateway-Orchestrator Interface. Relevant. Page is end of group but has onward links. |
| 4.5 | Prerequisites stated | PASS | Prerequisites table with GPU, CUDA drivers, Docker, go-livepeer, disk space, ffmpeg, CPU. Prerequisites reference AI Earning Quickstart for base AI setup. |
| 4.6 | Out-of-scope clear | INFO | Does not explicitly state what is out of scope. Implicitly: not a production multi-stream setup (covered in Realtime AI Setup). |
| 4.7 | Information type per section correct | PASS | `build` purpose: primary `procedural`, secondary `technical/factual`. Comparison table (realtime vs batch) is `evaluative` — secondary type for `build`. Fits. |
| 4.8 | No content duplication | INFO | Step 1 (GPU verify), model download pattern overlap with other tutorials. Acceptable — different pipeline context. |
| 4.9 | Section orientation | N/A | Page-level. |
| 4.10 | Cross-tab links | INFO | No cross-tab links. Acceptable at this depth. |

**Category 4 verdict: PASS**

---

## Category 5: Layout, Components & Template

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | Prerequisites, Steps 1–8, Troubleshooting, What happened, Related pages. Tutorial structure. |
| 5.2 | Required sections present | PASS | All required sections present. Troubleshooting added as bonus — appropriate for hardware-intensive tutorial. |
| 5.3 | Only approved components used | NOT-TESTED | StyledSteps/StyledStep, StyledTable, CustomDivider, LinkArrow, Tip, Warning, Note, CardGroup/Card — NOT-TESTED against component-layout-decisions.mdx. |
| 5.4 | Avoided components absent | PASS | No TODO/TBD in rendered content. FACT CHECK flags are MDX comments. |
| 5.5 | Information type → component mapping | PASS | Comparison table uses StyledTable. Steps in StyledSteps. Warning for hardware requirement. Note for production pricing guidance. |
| 5.6 | MDX renders clean | NOT-TESTED | Not run locally. No dead imports. |
| 5.7 | No old-schema frontmatter | PASS | `tutorial` canonical. |
| 5.8 | CSS custom properties | N/A | No inline CSS. |
| 5.9 | Generated file banners | N/A | Not generated. |
| 5.10 | Component conventions | PASS | No dead imports. Consistent with other tutorials. |

**Category 5 verdict: PASS**

---

## Category 6: Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | FACT CHECK at line 164: `live-base` tag stability in livepeer/ai-runner not confirmed. FACT CHECK at line 199: ComfyStream download script not confirmed. FACT CHECK at line 228: `model_id: "streamdiffusion"` correct value not confirmed. FACT CHECK at line 376: gateway output HLS endpoint path not confirmed. 4 open FACT CHECK flags. |
| 6.2 | Code/commands tested | FAIL | 4 FACT CHECK flags covering image tag, download script, model_id value, HLS endpoint. Multiple procedural claims unverified. |
| 6.3 | No deprecated API usage | NOT-TESTED | `-v 6` flag in orchestrator start command, `-rtmpAddr`, `-livePaymentInterval` not verified against current go-livepeer. |
| 6.4 | Numbers are real | FAIL | "30+ fps on an RTX 4090" (line 87) — stated with precision but not cited. "< 100ms per frame" and "33ms frame budget" — technically correct (1000ms/30fps = 33ms) but the 30+ fps claim needs SME confirmation. "15 to 20 GB" for ComfyStream models — approximate; FACT CHECK present. |
| 6.5 | REVIEW flags for unverified claims | PASS | 4 FACT CHECK flags placed correctly at lines 164, 199, 228, 376. |
| 6.6 | veracityStatus honest | FAIL | `status: current` + `veracityStatus` absent + 4 FACT CHECK flags. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references. |
| 6.8 | Source staleness check | FAIL | `livepeer/go-livepeer:latest`, `livepeer/ai-runner:live-base` — `:latest`/floating tags. `signer.eliteencoder.net` third-party. `github.com/livepeer/comfystream` — repository structure may change. |
| 6.9 | No open-ended research tasks | FAIL | 4 FACT CHECK flags reference "Rick" and "j0sh" without document paths. |

**Category 6 verdict: FAIL** — 6 failing checks: 6.1, 6.2, 6.4, 6.6, 6.8, 6.9

---

## Category 7: Navigation & Information Architecture

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Found at docs.json line 2960: `"v2/orchestrators/guides/tutorials/realtime-ai-tutorial"` |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry. |
| 7.3 | Tab entry portal routes | N/A | Page-level. |
| 7.4 | No structural orphans | PASS | Reachable from Tutorials group. |
| 7.5 | Audience journey complete | PASS | Final tutorial — ends with concrete next steps in Related Pages. |
| 7.6 | Cross-tab graduation | N/A | Page-level. |
| 7.7 | File in correct lane | PASS | Published in `v2/orchestrators/`. |
| 7.8 | Naming conventions | PASS | `realtime-ai-tutorial.mdx` — correct. |
| 7.9 | TTL | N/A | Published page. |

**Category 7 verdict: PASS**

---

## Category 8: Links & Rendering

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | `/v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup` — confirmed in docs.json. `/v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial` — docs.json line 2959. `/v2/orchestrators/guides/config-and-optimisation/capacity-planning` — confirmed. `/v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` — confirmed. All 4 internal links valid. |
| 8.2 | All external links live | NOT-TESTED | `tools.livepeer.cloud/ai/network-capabilities`, `signer.eliteencoder.net`, `discord.gg/livepeer`, `github.com/livepeer/comfystream` — not live-checked. |
| 8.3 | Snippet imports resolve | NOT-TESTED | Component imports not verified. |
| 8.4 | All images load | PASS | OG image standard path. |
| 8.5 | MDX renders clean | NOT-TESTED | Not run locally. |
| 8.6 | No TODO/TBD in published content | PASS | 4 FACT CHECK flags are MDX comments, not rendered. |

**Category 8 verdict: NOT-TESTED** (internal links verified via docs.json)

---

## Category 9: Process & Governance

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | No evidence. |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions identified. |
| 9.3 | Gate prerequisites met | FAIL | `status: current` with open FACT CHECK flags. |
| 9.4 | Phase ordering | N/A | Cannot verify. |
| 9.5 | Findings before fixes | N/A | This is the findings report. |
| 9.6 | Feedback routed | N/A | Post-fix. |

**Category 9 verdict: FAIL** — 2 failing checks: 9.1, 9.3

---

## Banned Construction Scan

**`can/may [verb]` value claim candidates:**
| Location | Sentence | Type | Classification |
|---|---|---|---|
| Line 395 | "StreamDiffusion at 2 steps is the minimum viable configuration for 30 fps on an RTX 4090." | Factual assertion | Not banned. Concrete minimum stated. PASS. |
| Line 426 | "Payment for live streams uses an interval-based model instead of per-frame settlement" | Factual statement | Not banned. Direct assertion. PASS. |

**`not [X]` primary statement candidates:**
- "there is no request-response cycle" (Tip, line 34) — factual distinction about realtime vs batch. BORDERLINE: acceptable in a comparison context. PASS.
- "Cards below 24 GB VRAM ... are typically insufficient" (Warning, line 133) — hardware assessment. Not a value claim. PASS.

**`if [condition]` in body prose:**
- "If the pipeline does not appear" (line 400) — troubleshooting routing. PASS.
- "If you encounter connection errors" (via Note context) — conditional in a Note. PASS.

**Em-dash scan (P30, P48):**
- Step titles scanned: no em-dashes. PASS.
- H2 headings: no em-dashes. PASS.
- Description: no em-dashes. PASS.
- Body prose: "Realtime AI is Livepeer's highest-value compute offering." (Tip, line 34) — no em-dash. PASS.
- CustomDivider middleText props: "Realtime vs Batch", "Prerequisites", "Step 1: Verify GPU", "Step 2: Pull Live Runner", "Step 3: Download Pipeline Models", "Step 4: Configure aiModels.json", "Step 5: Start the Orchestrator", "Step 6: Configure the Gateway", "Step 7: Send a Live Stream", "Step 8: Verify Output", "Troubleshooting", "What Just Happened" — no em-dashes. PASS.
- "What Just Happened" vs H2 "What happened" — batch-wide inconsistency. INFO.

---

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? | Proposed fix |
|---|---|---|---|---|---|---|---|---|
| How realtime AI differs from batch | 4 | 4 | 4 | 4 | 3 | 19/25 | FAIL | `Cascade Architecture` |
| Prerequisites | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS | — |
| Step 1: Verify GPU and Docker access | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS | — |
| Step 2: Pull the live-base AI runner image | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS | — |
| Step 3: Download ComfyStream model weights | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS | — |
| Step 4: Configure aiModels.json for live pipeline | 4 | 4 | 4 | 4 | 2 | 18/25 | FAIL | `Step 4: Configure aiModels.json` |
| Step 5: Start go-livepeer with live AI flags | 5 | 4 | 5 | 5 | 3 | 22/25 | PASS | — |
| Step 6: Set up the gateway for live routing | 4 | 4 | 4 | 4 | 3 | 19/25 | FAIL | `Step 6: Configure the Gateway` |
| Step 7: Send a test stream | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS | — |
| Step 8: Verify the transformed output | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS | — |
| Troubleshooting | 4 | 4 | 5 | 5 | 5 | 23/25 | PASS | — |
| What happened | 3 | 2 | 3 | 3 | 4 | 15/25 | FAIL | `Cascade Pipeline Result` |

*(Related Pages exempt per P16.)*

---

## Spelling/Typo Check

All visible text scanned: headings, table cells (comparison table), body prose, card titles, step titles, Warning/Note/Tip content, CustomDivider props.

| Item | Finding |
|---|---|
| Prose | No typos found |
| Comparison table cells | No typos found |
| Card titles | "Realtime AI Setup", "Full AI Pipeline Tutorial", "Capacity Planning", "Gateway-Orchestrator Interface" — no typos |
| Step titles | No typos found |
| Troubleshooting headings (H2 bold text) | "Frames dropping or high latency", "Pipeline job registration check", "ComfyStream container failing to start" — no typos |

**Spelling verdict: PASS**

---

## Component Matrix

| Component | Used | In tutorial preferred list? | Status |
|---|---|---|---|
| `Tip` | Yes | Yes | PASS |
| `Warning` | Yes | Yes | PASS |
| `Note` | Yes | Yes | PASS |
| `StyledSteps/StyledStep` | Yes | Custom wrapper — NOT-TESTED | NOT-TESTED |
| `StyledTable` | Yes | Custom wrapper — NOT-TESTED | NOT-TESTED |
| `CustomDivider` | Yes | Not in preferred list — NOT-TESTED | NOT-TESTED |
| `LinkArrow` | Yes | Not in preferred list — NOT-TESTED | NOT-TESTED |
| `CardGroup/Card` | Yes | Not in preferred list for tutorial — NOT-TESTED | NOT-TESTED |

---

## Cross-Category Connections

| Connection | Categories | Notes |
|---|---|---|
| Missing `veracityStatus` + `status: current` + 4 FACT CHECK flags | 1.8, 6.5, 6.6, 9.3 | Most FACT CHECK flags in the batch (4). Root cause: complex tutorial with many external dependencies. Fix: `veracityStatus: unverified`, `status: draft`. |
| Missing 6 frontmatter fields | 1.1, 1.4, 1.6, 1.7, 1.9, 1.10 | Single action. |
| "What happened" vs CustomDivider "What Just Happened" | 3.1, 3.7 | Batch-wide. Fix both with `Cascade Pipeline Result`. |
| 4 heading failures | 3.1, 3.2, 3.7 | All stem from verbose qualifiers or generic retrospective labels. |
| Floating Docker tags + external repo | 6.8 | `comfystream` repo structure especially volatile. |

---

## Blocking Decisions

| ID | Decision required | Blocks | Owner |
|---|---|---|---|
| BD-1 | Confirm `purpose`, `complexity`, `lifecycleStage` values | Frontmatter completion | Alison |
| BD-2 | Resolve 4 FACT CHECK flags (live-base tag, ComfyStream download script, model_id value, HLS endpoint path) | `veracityStatus` | Rick / j0sh |
| BD-3 | Confirm `industry` and `niche` values | 1.9, 1.10 | Alison |

---

## Verdict

**NEEDS WORK**

**Individual failing check IDs (P49):** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 3.1(x4 headings), 3.2(x4 headings), 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3 — **21 failing check IDs**

**Critical:** None
**High:** 1.8, 6.6 (status/veracity incoherence); 6.1, 6.2 (4 open FACT CHECK flags — highest in the batch)
**Medium:** Missing frontmatter fields, 4 heading failures, veracity issues
**Info:** Floating Docker tags, external repo stability, cross-tab links
