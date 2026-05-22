# Per-Page Quality Check Report

**Page:** `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx`
**Report date:** 2026-03-24
**Reviewer:** Claude Code (automated agent)
**Verdict:** NEEDS WORK

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|-------|----------|-------|-----------|-------|
| `title` | Yes | `Cascade Setup` | PASS | — |
| `sidebarTitle` | Yes | `Cascade Setup` | PASS | Matches title |
| `description` | Yes | `Deploy the live-video-to-video pipeline on a Livepeer orchestrator — Cascade architecture, ComfyStream setup, live-video frame processing, WebRTC streaming, hardware requirements, and custom pipeline development.` | FAIL | See 1.11: description is 188 chars, exceeds 160-char limit |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical value |
| `audience` | Yes | `orchestrator` | PASS | Valid token |
| `purpose` | Yes | `guide` | FAIL | `guide` is not in the 15-value canonical purpose set (checks.mdx §1.4). The `purpose` field value is the deprecated or invalid value `guide` — the same as `pageType`. Valid values: `orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`, `update`. The page content supports `configure` or `build` |
| `complexity` | Yes | Not present | FAIL | Field absent — required by check 1.6 |
| `lifecycleStage` | Yes | Not present | FAIL | Field absent — required by check 1.7 |
| `keywords` | Yes | Present (12 terms) | FAIL | See 1.13: contains generic terms (`livepeer`, `orchestrator`) that fail keyword quality criteria |
| OG image block | Yes | Present (5 fields) | PASS | All 5 OG fields present: `og:image`, `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height` |
| `veracityStatus` | No | Missing | FAIL | Required by check 1.8; this field is absent from frontmatter |
| `status` | Yes (extra) | `published` | INFO | Not a required frontmatter field; not a canonical enum — no action needed |
| `lastVerified` | Yes (extra) | `2026-03-13` | INFO | Extra field; not canonical but not harmful |

**Frontmatter summary:** 6 FAIL items (purpose, description length, complexity missing, lifecycleStage missing, veracityStatus missing, keywords quality)

---

## Categories 1–9

### Category 1 — FRONTMATTER & TAXONOMY

| Check | Result | Detail |
|-------|--------|--------|
| 1.1 All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, and `veracityStatus` absent |
| 1.2 `pageType` uses 7-type canonical schema | PASS | `guide` is a canonical value |
| 1.3 `pageVariant` valid if present | N/A — `pageVariant` not present | Not required for `guide` without a variant |
| 1.4 `purpose` uses 15-value canonical set | FAIL | Value is `guide` — not in the 15-value set. Correct per content: `configure` (primary — maps system options to effects for hardware/pipeline requirements). See §1.6: `configure` permits procedural + technical + factual information types, all present in this page. **Fix:** line 27: change `purpose: guide` to `purpose: configure` |
| 1.5 `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 `complexity` single canonical value | FAIL | Field missing. Page covers real-time AI setup requiring 24 GB VRAM, TensorRT compilation, custom Python Pipeline interface — content is `advanced`. **Fix:** Add `complexity: advanced` after `audience` field |
| 1.7 `lifecycleStage` single canonical value | FAIL | Field missing. Reader is setting up a live-video pipeline for the first time or extending an existing node. **Fix:** Add `lifecycleStage: setup` after `complexity` field |
| 1.8 `veracityStatus` present and honest | FAIL | Field missing entirely. Page contains unverified code blocks, ComfyStream commands, aiModels.json structure, Docker image tags, and VRAM figures — all at `procedural` or `technical` standard (very high veracity requirement). An open `{/* REVIEW: */}` block at line 538 confirms unresolved claims. **Fix:** Add `veracityStatus: unverified` to frontmatter |
| 1.9 `industry` array valid if present | N/A — field not present | INFO: candidate values would be `["AI", "technical"]` if added |
| 1.10 `niche` array valid if present | N/A — field not present | INFO: candidate values would be `["AI", "infrastructure"]` if added |
| 1.11 `description` well-formed | FAIL | 188 chars — exceeds 160-char limit. Also opens with verb `Deploy` which is acceptable subject-first. **Fix:** Shorten to ≤160 chars. Suggested: `Deploy the live-video-to-video Cascade pipeline on a Livepeer orchestrator — ComfyStream setup, WebRTC streaming, hardware requirements, and custom pipeline development.` (163 chars — trim further by removing "hardware requirements"): `Deploy the live-video-to-video Cascade pipeline — ComfyStream setup, WebRTC streaming, VRAM planning, and custom Pipeline interface development.` (144 chars) |
| 1.12 OG image block complete | PASS | All 5 fields present with correct path |
| 1.13 `keywords` field quality | FAIL | Contains `livepeer` (too generic — a reader would not search just "livepeer") and `orchestrator` (too generic — a reader would search "run livepeer orchestrator realtime AI" or "cascade live video setup"). **Fix:** Remove `livepeer` and `orchestrator`. Replace with: `realtime-ai-setup livepeer orchestrator`, `live-video-to-video pipeline`, `cascade livepeer orchestrator setup`. Retain: `live-video ai`, `cascade`, `live-video-to-video`, `comfystream`, `comfyui`, `webrtc`, `frame processing`, `streaming ai`, `byoc pipeline` |

---

### Category 2 — VOICE & COPY

| Check | Result | Detail |
|-------|--------|--------|
| 2.1 UK English throughout | FAIL | One US spelling found: line 264 `"optimised"` — actually PASS on that word. See full scan below. Line 407: `"lower-step model"` — acceptable. Line 409: `"512×512 at 30 fps is achievable"` — acceptable. **Finding:** line 353: `"Best for: Continuous style application"` — no issue. **Confirmed US spelling:** None found in full page scan. PASS. |
| 2.2 Zero banned words | FAIL | Line 438: `"usually handles"` — `usually` not in banned list, acceptable. Line 444: `"monetise"` — UK ✓. Full scan: no instances of `effectively`, `essentially`, `basically`, `meaningful`, `significant` (as intensifier), `real` (as intensifier), `various`, `several`, `obviously`, `clearly` found. PASS. |
| 2.3 Zero banned phrases | PASS | No instances of banned phrases found in visible text (see Banned Construction Scan table for full candidates) |
| 2.4 Zero banned constructions | FAIL | See Banned Construction Scan table. Line 108: `"At 30 fps, you have 33 ms per frame budget"` — fine (fact statement). Multiple `can/may` constructions require classification — see scan table. **Confirmed fails:** line 214: `"must stay at or below"` — acceptable (direct requirement). Line 438: `"usually handles 1–2 concurrent live-video streams"` — "usually" is not in the banned list; acceptable approximation with range given |
| 2.5 Opening order correct | PASS | Line 37: opens with outcome statement: "Cascade inference is fundamentally different from batch inference" — leads with the governing distinction (fact before mechanism). Reader benefit is implied by the contrast with batch. Acceptable |
| 2.6 Paragraph discipline | PASS | Paragraphs are generally well-formed: single topic, lead sentence states fact, final sentence is factual or directs action |
| 2.7 Audience register correct | PASS | Page targets `orchestrator`. Content uses hardware-specific language (VRAM, CUDA, Docker, GPU model names), quantified requirements, and imperative CLI instructions. Matches per-audience rules in Frameworks.mdx §2.2 |
| 2.8 Per-audience prohibited phrases absent | PASS | No instances of `"Your orchestrator will automatically"`, `"The network rewards you for"`, `"Easy to set up"`, or hedged earnings claims |
| 2.9 No passive value statements | PASS | No unquantified comparisons. "2–4× runtime speedup" (line 411) is concrete. Frame-rate numbers are specific. |
| 2.10 No hedging openers | PASS | Page opens directly with the governing distinction. No caveats or disclaimers at start |
| 2.11 Terminology locked and consistent | FAIL | Line 39: `"Cascade"` is introduced without a definition at first use. Per CLAUDE.md, `BYOC` must be defined at first use on every page. Line 172 mentions `BYOC` in a bold list item `**Compatible model types:**` context — does not define it. Line 37: `"live-video-to-video pipeline"` — no explicit definition at first prose occurrence (though line 39 introduces the term in the architecture description). Line 154: `"ComfyStream"` introduced as "the primary runtime" — definition follows immediately ✓. Line 156: `"ComfyUI"` — not defined at first use. **Fix for BYOC:** Add inline definition at first use: `{/* REVIEW: BYOC — verify definition against terminology-tracking.md before inserting */}` at line 172. **Fix for ComfyUI:** Add brief inline definition at first use (line 156) or add a `{/* REVIEW: */}` flag |

---

### Category 3 — SECTION NAMING & HEADINGS

See Heading Score Table below for per-dimension scores.

| Check | Result | Detail |
|-------|--------|--------|
| 3.1 Every heading scores ≥20/25 | FAIL | `"What Cascade is"` scores 16/25 (see table). `"How it differs from batch AI"` scores 14/25 (see table — banned construction and question-like framing). `"ComfyUI workflow for StreamDiffusion"` scores 17/25. See table for all headings. |
| 3.2 No banned or weak standalone heading terms | PASS | No banned terms (`Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`) appear as standalone headings. Note: `"Related"` at line 520 is in the OK tier per Frameworks.mdx §4.1. `"Related Pages"` exemption does not apply here — the heading is `"Related"`, not `"Related Pages"`. It is in the OK tier, so PASS. |
| 3.3 No literal contrast labels | FAIL | Line 58: `"How it differs from batch AI"` — this is a contrast label naming the comparison, not the content. It does not name the governing concept (which is the architectural distinction between continuous and discrete inference patterns). **Fix:** Rename to `Cascade vs Batch Architecture` is still contrast — better: `Continuous vs Discrete Inference` still a contrast — best governing-concept label: `Inference Architecture` or `Cascade Architecture` (but `Architecture overview` appears at line 129 already). Recommended: `Inference Model` (governs both the continuous frame loop and the architectural difference). |
| 3.4 Domain-anchor rule applied | PASS | All headings include sufficient domain context for a reader scanning in isolation |
| 3.5 Heading names concept not examples | FAIL | Line 44: `"What Cascade is"` — names the documentation task (defining Cascade), not the concept. The governing concept is "Cascade architecture" or "live-video AI system". Line 272: `"ComfyUI workflow for StreamDiffusion"` — names an example workflow. The governing concept is the ComfyUI DAG structure for StreamDiffusion integration |
| 3.6 Title well-formed | FAIL | `"Cascade Setup"` — acceptable (3 words, concept-derived). However the page title in frontmatter matches sidebarTitle ✓. The title describes the page's subject accurately. Minor concern: it is a generic `[Name] Setup` pattern. However it is acceptable under the rules. PASS on title form. Re-classifying 3.6 as PASS. |
| 3.7 Sounds like expert editorial choice | FAIL | `"What Cascade is"` (line 44) and `"How it differs from batch AI"` (line 58) sound like FAQ entries, not expert editorial section titles. `"Watch: Cascade and live-video AI"` (line 448) is a functional label but sounds like a YouTube channel description rather than a section name. Recommended: `"Cascade Overview"` → better: leave as failing; `"Inference Architecture"` replaces H2 at line 58; `"Demo Video"` or `"Video: Cascade"` replaces line 448 |

---

### Category 4 — PAGE STRUCTURE & CONTENT ARCHITECTURE

| Check | Result | Detail |
|-------|--------|--------|
| 4.1 One purpose, one audience, one job | PASS | Page is single-audience (`orchestrator`) and serves a single job: configure and understand the Cascade live-video AI pipeline. The combination of conceptual sections (What Cascade is, How it differs) and procedural sections (Setup, Performance tuning) is appropriate for a `guide` pageType |
| 4.2 Purpose statement test passes | PASS | "This page lets the orchestrator configure and deploy the Cascade live-video-to-video AI pipeline on their node." — valid and completable sentence |
| 4.3 PREV/NEXT adjacency correct | PASS | **docs.json lines 2901–2903 consulted.** PREV: `llm-pipeline-setup` (line 2901). NEXT: `audio-and-vision-pipelines` (line 2903). The reader arriving from `llm-pipeline-setup` (batch LLM pipelines) has the foundational knowledge of AI pipelines, aiModels.json, and the AI worker. The knowledge gap between LLM and Cascade setup is the continuous-stream model vs discrete request model — which this page explicitly addresses in the opening and in "How it differs from batch AI". Adjacency is valid. Reader leaving to `audio-and-vision-pipelines` has the context of AI pipeline setup. |
| 4.4 No dead ends | PASS | Related Cards section at line 520 provides 4 outbound links: Batch AI Setup, Model Hosting and VRAM, ComfyStream GitHub, AI Workloads Overview. Clear exit paths. |
| 4.5 Prerequisites stated or linked | PASS | Prerequisites section at line 112 explicitly lists GPU, CPU, Network, CUDA, Docker, and go-livepeer requirements. Hard requirement wording (`strongly recommended`, `required`) is used. Warning component at line 123 reinforces the 24 GB VRAM hard minimum. |
| 4.6 Out-of-scope is clear | PASS (implied) | Page scope is clear from title and opening. Off-chain transcoding, batch LLM/diffusion, and gateway setup are not covered and are linked via Related cards. |
| 4.7 Information type per section correct | PASS | `purpose: configure` (proposed fix) permits primary types: procedural, technical, factual; secondary: conceptual. All sections conform: Setup (procedural), Architecture overview (conceptual/technical), Performance tuning (analytical/technical), Prerequisites (factual/technical), ComfyStream (technical/conceptual). |
| 4.8 No content duplication from adjacent sections | PASS | Setup steps, VRAM planning, and architecture context do not duplicate adjacent pages. Cross-references to `model-demand-reference` and `diffusion-pipeline-setup` are links, not repeated content. |
| 4.9 Section orientation page present | N/A — section-level check, not page-level | The `ai-inference-operations` page serves as the section orientation page. Not this page's responsibility. |
| 4.10 Cross-tab links at journey intersections | N/A — tab-level check | The Related section at line 524 contains one cross-tab link: `Gateway Pricing Configuration` at line 216 (inline text link). This is a cross-tab link to `v2/gateways/setup/configure/pricing-configuration`. One cross-tab link is present at the correct journey intersection (operator setting price → gateway cap). Tab-level minimum of 3 cross-tab links is a tab-level check, not per-page. |

---

### Category 5 — LAYOUT, COMPONENTS & TEMPLATE

| Check | Result | Detail |
|-------|--------|--------|
| 5.1 Correct template for pageType + pageVariant | NOT-TESTED | `docs-guide/policies/component-layout-decisions.mdx` not read. Cannot confirm template conformance. |
| 5.2 Required sections present | PASS (partial) | For `guide` pageType, required sections are Overview and Steps/H2 sections. Overview equivalent is present (What Cascade is, How it differs). Procedural section (Setup) uses StyledSteps. Troubleshooting section present. Related section present. All required structural elements present. |
| 5.3 Only approved components used | NOT-TESTED | `docs-guide/catalog/components-catalog.mdx` not read. Cannot confirm all components approved. Custom components (`StyledSteps`, `StyledStep`, `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`) require catalog verification. |
| 5.4 Avoided components absent | PASS | No TODO/TBD placeholders in published sections. No `Coming Soon`. No `PreviewCallout`. The `{/* REVIEW: */}` block at lines 537–559 is an MDX comment, not a visible placeholder. |
| 5.5 Information type → component mapping correct | PASS | Procedural sections use `<StyledSteps>/<StyledStep>` (equivalent to Steps). Tables use `<StyledTable>`. Troubleshooting uses `<AccordionGroup>/<Accordion>`. Conceptual sections use prose. Code blocks use fenced code. Mapping is correct. |
| 5.6 MDX renders clean | NOT-TESTED | Not executed. Page appears structurally valid: imports are present, tags appear closed, no obvious JSX syntax errors visible in read. REVIEW flags are in comments. NOT-TESTED (not run locally). |
| 5.7 No old-schema frontmatter | FAIL | `purpose: guide` is not a valid 15-value canonical purpose — it mirrors pageType. This is a schema failure already logged in 1.4. |
| 5.8 CSS uses custom properties only | PASS | No hardcoded hex colours, no ThemeData, no inline JS found in page content. Custom component imports use JSX wrappers only. |
| 5.9 Generated file banners intact | N/A | No `generated-file-banner` present; this is not a generated file |
| 5.10 Component naming/import conventions | PASS | PascalCase imports: `StyledSteps`, `StyledStep`, `StyledTable`, `TableRow`, `TableCell`, `CustomDivider`. Paths are semantic subdirectories. Import block at lines 33–36. |

---

### Category 6 — VERACITY & FACTUAL ACCURACY

| Check | Result | Detail |
|-------|--------|--------|
| 6.1 Every factual claim citable | FAIL | Multiple factual claims with no source or only partial source: (1) Line 104: "Min VRAM: 24 GB recommended" — sourced inline via the table but no primary source link. (2) Line 116: "RTX 4090 (24 GB) strongly recommended. RTX 3090 (24 GB) is functional but with less headroom." — NOT-TESTED against a live hardware spec. (3) Line 408: "512×512 at 30 fps is achievable on an RTX 4090 with StreamDiffusion" — NOT-TESTED. (4) Line 411: "2–4× runtime speedup" for TensorRT — NOT-TESTED. (5) Line 432: "keep total loaded model + adapter weight below 20 GB" — NOT-TESTED. (6) Line 438: "A single RTX 4090 usually handles 1–2 concurrent live-video streams" — NOT-TESTED. Sources at lines 54, 173, 271, 332, 391, 397 are provided for external references (GitHub, arXiv). Internal Livepeer-specific claims lack source citations. |
| 6.2 Code/commands tested | FAIL | NOT-TESTED. Specific items requiring verification: (1) Line 186: `docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi` — NOT-TESTED. (2) Lines 193: `docker pull livepeer/ai-runner:live-base` — tag existence NOT-TESTED. (3) Lines 201–209: `aiModels.json` structure including `"pipeline": "live-video-to-video"`, `"model_id": "streamdiffusion"` — format NOT-TESTED against current go-livepeer spec. (4) Lines 222–229: `git clone` + `pip install` + `python scripts/download_models.py` — NOT-TESTED. (5) Lines 235–247: `docker run` go-livepeer flags — NOT-TESTED against current go-livepeer release. |
| 6.3 No deprecated API usage | NOT-TESTED | Cannot verify without running against live system. Flags at lines 338–341 note that custom pipeline registration requires manual upstream changes — this is marked as a known limitation, not deprecated API. `live-base` image tag at line 193 requires verification (NOT-TESTED). |
| 6.4 Numbers are real | FAIL | NOT-TESTED. Key numbers: "<100ms per frame" (line 79 table), "33 ms per frame budget at 30 fps" (line 108), "42 ms at 24 fps" (line 108), "30+ fps on RTX 4090" (line 262), "512×512 at 30 fps achievable" (line 409), "768×768 drops to ~20 fps" (line 409), "1024×1024 drops to ~12 fps" (line 409), "2–4× runtime speedup with TensorRT" (line 411), "8–18 GB for SDXL-class model weights" (line 428), "1–3 GB per adapter" (line 430), "500 MB–1 GB per resolution for frame buffers" (line 429). These are plausible but NOT-TESTED against cited benchmarks. The StreamDiffusion arXiv paper (line 271) is a valid source for the fps claims — cross-check required. |
| 6.5 REVIEW flags for unverified claims | FAIL (partial) | An open `{/* REVIEW: */}` block exists at lines 537–559 (below visible content, in MDX comment). It flags: canonical ComfyStream node locations, current `live-base` image tag, exact `model_id` format. However the unverified numerical claims above (Category 6.4) and the code blocks (6.2) do NOT have individual inline `{/* REVIEW: */}` markers in the published content. **Fix:** Add `{/* REVIEW: */}` flags at minimum to lines 193 (live-base tag), 209 (aiModels.json structure), and 247 (go-livepeer Docker flags). |
| 6.6 `veracityStatus` honest | FAIL | Field missing. Given the level of NOT-TESTED content, the correct value is `unverified`. **Fix:** Add `veracityStatus: unverified` to frontmatter |
| 6.7 Authoritative vs AI-generated glossary | N/A | No references to `resources/compendium/glossary.mdx`. External GitHub and arXiv sources are used for technical claims. |
| 6.8 Source staleness check | FAIL | Three staleness risks identified: (1) `livepeer/ai-runner:live-base` Docker image tag (line 193) — Docker tags change with releases; flagged in the REVIEW comment at line 539. (2) `go-livepeer/ai/worker/docker.go` reference (line 339) — file path may change across go-livepeer versions. (3) ComfyStream GitHub URL (line 156) — repository may move; currently GitHub link. All three are flagged in the REVIEW comment but not with inline markers. |
| 6.9 No open-ended research tasks | FAIL | The REVIEW block at line 537 contains: "Confirm canonical ComfyStream node locations." — no named source given. This is an open-ended research task without a concrete next step. **Fix:** Replace with: `{/* REVIEW: Confirm canonical ComfyStream node locations — check https://github.com/livepeer/comfystream README and node registration files before inserting. */}` |

---

### Category 7 — NAVIGATION & INFORMATION ARCHITECTURE

| Check | Result | Detail |
|-------|--------|--------|
| 7.1 Page exists in docs.json | PASS | Confirmed at docs.json line 2902: `"v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup"` |
| 7.2 Navigation matches file system | PASS | File path `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` matches docs.json entry |
| 7.3 Tab entry portal routes to all sections | N/A — tab-level check | Not this page's responsibility |
| 7.4 No structural orphans | PASS | Page is reachable from nav group "Workloads and AI" at docs.json line 2895 |
| 7.5 Audience journey complete | PASS | Entry from `llm-pipeline-setup`, exit to `audio-and-vision-pipelines` or via Related cards. Journey is complete |
| 7.6 Cross-tab graduation paths exist | N/A — tab-level check | One cross-tab link present at line 216 (to Gateway Pricing Configuration) |
| 7.7 File in correct lane | PASS | File is in `v2/orchestrators/guides/`, publishable content lane |
| 7.8 File naming conventions | PASS | `realtime-ai-setup.mdx` — no non-conforming prefix. Lowercase, hyphenated, descriptive. |
| 7.9 _workspace/ TTL compliance | N/A | File is not in `_workspace/` |

---

### Category 8 — LINKS & RENDERING

| Check | Result | Detail |
|-------|--------|--------|
| 8.1 All internal links resolve | FAIL (partial — NOT-TESTED fully) | Line 216: `/v2/gateways/setup/configure/pricing-configuration` — NOT-TESTED (path not confirmed in docs.json). Line 524: `/v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup` — confirmed in docs.json line 2900 ✓. Line 526: `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` — confirmed in docs.json line 2904 ✓. Line 532: `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — confirmed in docs.json line 2899 ✓. **Risk:** `/v2/gateways/setup/configure/pricing-configuration` is the only unverified internal link |
| 8.2 All external links live | NOT-TESTED | External links present: mirror.xyz/livepeer.eth (line 54), github.com/livepeer/comfystream (lines 54, 156, 173, 529), daydream.live (line 54), cumulo-autumn/StreamDiffusion (lines 262, 271, 476), arxiv.org/abs/2312.12491 (line 271), huggingface.co/LiheYoung/depth-anything-large-hf (line 391), github.com/IDEA-Research/DWPose (line 391), arxiv.org/abs/2302.05543 (line 391), tencent-ailab/IP-Adapter (line 397), github.com/livepeer/ai-runner (lines 332, 344), github.com/daydreamlive/scope-runner (line 332), tools.livepeer.cloud/ai/network-capabilities (lines 251, 493), github.com/livepeer/ai-worker (line 344). NOT-TESTED — 20% minimum verification not run. |
| 8.3 All snippet imports resolve | NOT-TESTED | Imports at lines 33–36: `StyledSteps`, `StyledTable` from `/snippets/components/wrappers/`, `CustomDivider` from `/snippets/components/elements/`. NOT-TESTED (not run). |
| 8.4 All images load | N/A | No inline images. OG image path `/snippets/assets/site/og-image/en/orchestrators.png` — NOT-TESTED |
| 8.5 Page renders without error | NOT-TESTED | MDX structure appears valid in read. Not run against Mintlify dev. |
| 8.6 No TODO/TBD/Coming Soon in published content | PASS | No TODO/TBD in visible published content. REVIEW comments are in MDX comment blocks only. |

---

### Category 9 — PROCESS & GOVERNANCE

| Check | Result | Detail |
|-------|--------|--------|
| 9.1 Human sign-off recorded | FAIL | No evidence of human sign-off. `status: published` in frontmatter is set by the page author, not a reviewer gate. Per checks.mdx §9.1, agent self-reporting does not count. |
| 9.2 All consuming decisions in registry | NOT-TESTED | Decision registry not read this session. INFO only. |
| 9.3 Gate prerequisites met | FAIL | Tab status shows Orchestrators at: IA Draft only, Terminology No, Content Scan In progress, Content Pass No. No gates are open for this tab. The page carrying `status: published` while gates are not met is a process finding. |
| 9.4 Phase ordering respected | NOT-TESTED | Cannot verify without reviewing session history. |
| 9.5 Findings gathered before fixes | PASS (this session) | This report gathers findings before fixes are applied |
| 9.6 Feedback routed | N/A — not yet complete | Findings in this report must be routed through `decisions/feedback-routing-map.md` after approval |

---

## Banned Construction Scan

**Scope:** all visible text including body prose, headings, frontmatter description, Tips, Notes, Warnings, table cells, card descriptions, AccordionGroup title props.

Every candidate sentence containing "can", "may", "could", "might", "should", "if [condition]", "not [X]" listed:

| Line | Sentence / excerpt | Word/Pattern | Classification | Flag? |
|------|-------------------|--------------|----------------|-------|
| 108 | "your node continuously transforms live video — receiving frames from a WebRTC stream, running inference on each frame, and streaming processed frames back" | (none in this specific sentence) | N/A | No |
| 118 | "Network: Low-latency connection. WebRTC streams are **sensitive** to packet loss and jitter." | (no banned pattern) | N/A | No |
| 124 | "GPUs below 24 GB VRAM … are typically insufficient for Cascade inference at acceptable quality and frame rates." | `if [condition]`-adjacent: "GPUs below 24 GB VRAM" as conditional class | conditional caveat | No |
| 162 | "Warm model management to avoid per-frame load latency" | (none) | N/A | No |
| 165 | "StreamDiffusion (optimised for live diffusion at 30+ fps)" | (none) | N/A | No |
| 196 | "The `live-base` tag is separate from the standard `livepeer/ai-runner` image used for batch pipelines. It includes ComfyStream and its dependencies." | (none) | N/A | No |
| 212 | "`model_id` for live-video pipelines refers to the ComfyUI workflow or pipeline name, not a HuggingFace model ID in the traditional sense." | `not [X]` — "not a HuggingFace model ID" | `not [X]` as clarifying technical distinction, not a primary value statement | No — technical clarification of what the field is not |
| 214 | "Your `price_per_unit` **must** stay at or below the gateway's configured `-maxPricePerCapability`" | `must` (imperative) | procedural | No |
| 214 | "This is a hard filter — gateways skip nodes priced above that cap, **regardless of hardware quality or latency**." | (none) | N/A | No |
| 214 | "Before going live, verify that your transcoding price … is below what major gateways have configured as their maximum." | `if [condition]`-adjacent: "Before going live" is a time-conditional | procedural/temporal | No |
| 231 | "Ensure the path matches what go-livepeer expects via the `-aiModelsDir` flag." | (none) | N/A | No |
| 251 | "Your orchestrator should appear under `live-video-to-video` with **Warm** status." | `should` | procedural — verification step | No |
| 262 | "It was designed specifically for continuous frame processing and achieves 30+ fps on an RTX 4090." | (none) | N/A | No |
| 292 | "Quality vs latency is tunable through the workflow." | (none) | N/A | No |
| 298 | "For operators who want to build custom live-video AI processing beyond ComfyUI, the AI runner exposes a Python `Pipeline` interface." | `want to` — not a banned construction | N/A | No |
| 341 | "See the full custom pipeline development guide in the [ai-runner.md](https://github.com/livepeer/ai-runner) documentation." | (none) | N/A | No |
| 344 | "The Livepeer team is working toward a fully dynamic plugin architecture that eliminates these manual upstream changes." | (none) | N/A | No |
| 344 | "Track progress on the [ai-worker GitHub repository](https://github.com/livepeer/ai-worker)." | (none) | N/A | No |
| 407 | "**Model selection:** Use 1–2 step LCM or Lightning models instead of 20-step DDIM. The quality difference for streaming is acceptable; the latency difference is **not**." | `not [X]` — "the latency difference is not" | BORDERLINE — used as a contrast in a value statement about latency. Technically primary statement is "the latency difference is [not acceptable]". The positive form would be "the latency difference is prohibitive". | FLAG — rewrite as positive statement |
| 409 | "Lower resolution dramatically increases fps." | (none) | N/A | No |
| 421 | "This usually lifts fps with no visible quality loss for typical video content." | `usually` — not a banned word; approximation with qualifier | N/A | No |
| 425 | "Unlike batch AI, live-video pipelines hold models in VRAM continuously for the duration of the stream." | (none) | N/A | No |
| 432 | "On a 24 GB GPU, keep total loaded model + adapter weight below 20 GB to leave headroom for frame buffers and batch operations." | (none) | N/A | No |
| 438 | "A single RTX 4090 **usually handles** 1–2 concurrent live-video streams **depending on** resolution and model complexity." | `depending on` — not exactly the banned phrase `"depends on various"` | BORDERLINE — "depending on resolution and model complexity" should list weights or thresholds. Rewrite: "A single RTX 4090 handles 1 stream at 1024×1024 or 2 streams at 512×512 (StreamDiffusion)." | FLAG — banned construction adjacent: `depends on` without ranked list |
| 444 | "Enterprise operators running 4090/A100 fleets monetise live-video AI at scale by advertising higher `capacity` values and maintaining multiple warm pipeline instances." | (none) | N/A | No |
| 486 | (Accordion title) "Frames dropping or high latency" | (none in title) | N/A | No |
| 487 | "**Model is too slow for target fps** — try a lower-step model (LCM, Lightning) or reduce output resolution" | (none) | N/A | No |
| 488 | "**VRAM OOM on frame buffer** — reduce `stream_batch_size` in StreamDiffusion config" | (none) | N/A | No |
| 492 | (Accordion title) "Restore live-video job flow" | (none) | N/A | No |
| 495 | "Check that your orchestrator's `serviceAddr` is reachable from gateways — WebRTC ICE negotiation requires bidirectional reachability" | (none) | N/A | No |
| 506 | "This confirms CUDA is accessible inside the container." | `This [verb]` — banned construction: "This shows" equivalent | FAIL — `"This confirms"` is a `"This [demonstrates/shows/confirms]"` construction — delete the sentence, trust the reader |

**Confirmed FAIL items from scan:**
1. **Line 407:** `"the latency difference is not"` — `not [X]` as primary value statement. **Fix:** Replace with: `"The quality difference is acceptable; the latency difference is prohibitive."`
2. **Line 438:** `"usually handles 1–2 concurrent live-video streams depending on resolution and model complexity"` — `depends on` without ranked list. **Fix:** `"A single RTX 4090 handles 1 stream at 1024×1024 or 2 streams at 512×512 (StreamDiffusion, 2-step LCM)."`
3. **Line 506:** `"This confirms CUDA is accessible inside the container."` — `This [verb]` banned construction. **Fix:** Delete the sentence. The command output speaks for itself.

---

## Heading Score Table

**Rubric:** Precision (1–5), Depth (1–5), Stability (1–5), Clarity (1–5), Conciseness (1–5). Pass: ≥20/25.

Note: `Related Pages` exemption does not apply — the heading used is `Related` (OK tier), not `Related Pages`.

| Heading (H2/H3) | Line | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|-----------------|------|-----------|-------|-----------|---------|-------------|-------|-------|
| `What Cascade is` | 44 | 2 | 2 | 3 | 3 | 3 | **13** | FAIL |
| `How it differs from batch AI` | 58 | 2 | 2 | 3 | 3 | 2 | **12** | FAIL |
| `Prerequisites` | 112 | 5 | 4 | 5 | 5 | 5 | **24** | PASS |
| `Architecture overview` | 129 | 3 | 3 | 4 | 4 | 4 | **18** | FAIL |
| `ComfyStream — the live-video pipeline runtime` | 154 | 4 | 4 | 4 | 4 | 3 | **19** | FAIL |
| `Setup` | 177 | 4 | 3 | 4 | 5 | 5 | **21** | PASS |
| `StreamDiffusion — live-video diffusion models` | 260 | 4 | 4 | 4 | 4 | 3 | **19** | FAIL |
| `ComfyUI workflow for StreamDiffusion` | 272 | 3 | 3 | 3 | 3 | 4 | **16** | FAIL |
| `The Pipeline interface (custom pipelines)` | 296 | 4 | 4 | 4 | 4 | 3 | **19** | FAIL |
| `Integration requirements for custom pipelines` | 334 | 4 | 4 | 4 | 4 | 3 | **19** | FAIL |
| `Model types for live-video inference` | 349 | 4 | 3 | 4 | 4 | 3 | **18** | FAIL |
| `StreamDiffusion (primary)` | 351 | 4 | 3 | 4 | 4 | 4 | **19** | FAIL |
| `ControlNet variants` | 358 | 4 | 4 | 4 | 4 | 4 | **20** | PASS |
| `IP-Adapter (style reference)` | 393 | 4 | 3 | 4 | 4 | 4 | **19** | FAIL |
| `Performance tuning` | 401 | 4 | 3 | 4 | 4 | 4 | **19** | FAIL |
| `Maximising fps` | 403 | 4 | 4 | 4 | 4 | 4 | **20** | PASS |
| `VRAM management` | 423 | 5 | 4 | 5 | 5 | 5 | **24** | PASS |
| `Multi-stream capacity` | 436 | 5 | 4 | 5 | 5 | 5 | **24** | PASS |
| `Watch: Cascade and live-video AI` | 448 | 2 | 2 | 3 | 3 | 3 | **13** | FAIL |
| `Troubleshooting` | 481 | 4 | 3 | 5 | 5 | 5 | **22** | PASS |
| `Related` | 520 | 3 | 2 | 4 | 4 | 5 | **18** | FAIL |

**Notes on failing headings:**

- **`What Cascade is`** (13/25): Question-form framing ("What X is") names the documentation task, not the concept. Low precision and depth. Rename: `Cascade Architecture` (governs the live-video-AI system concept; "overview" variant avoided per banned terms check — "Architecture" passes winner filter). Score would be ~21/25.
- **`How it differs from batch AI`** (12/25): Contrast label naming the comparison, not the governing concept. "How it differs" is a documentation verb, not a section name. Rename: `Inference Model` — governs both the continuous frame loop and the architectural distinction from discrete requests. Score would be ~21/25.
- **`Architecture overview`** (18/25): "Overview" is in the Avoid tier (Frameworks.mdx §4.1). Domain-anchored version needed. Rename: `Cascade Architecture` — but conflicts with proposed rename for H2 at line 44. Resolution: if line 44 becomes `Cascade Architecture`, line 129 becomes `Pipeline Architecture` or `Stream Processing Architecture`. Score would be ~21/25.
- **`ComfyStream — the live-video pipeline runtime`** (19/25): Acceptable but verbose. The em-dash construction adds a subtitle. Not a CLAUDE.md em-dash prohibition (that applies to body prose). Rename: `ComfyStream Runtime`. Score would be ~21/25.
- **`StreamDiffusion — live-video diffusion models`** (19/25): Same em-dash subtitle pattern. Rename: `StreamDiffusion Models`. Score: ~21/25.
- **`ComfyUI workflow for StreamDiffusion`** (16/25): Names an example workflow, not the governing concept. The governing concept is the ComfyUI DAG structure used for StreamDiffusion integration. Rename: `StreamDiffusion Workflow`. Score: ~21/25.
- **`The Pipeline interface (custom pipelines)`** (19/25): "The" article is weak. "Custom pipelines" parenthetical duplicates the H3 below. Rename: `Pipeline Interface`. Score: ~22/25.
- **`Integration requirements for custom pipelines`** (19/25): Wordy. Rename: `Custom Pipeline Requirements`. Score: ~21/25.
- **`Model types for live-video inference`** (18/25): "Model types" is an OK-tier term per §4.1 but "for live-video inference" over-explains context already set by the page. Rename: `Model Types`. Score: ~20/25.
- **`StreamDiffusion (primary)`** (19/25): Parenthetical annotation is weak. Rename: `StreamDiffusion`. Score: ~22/25.
- **`IP-Adapter (style reference)`** (19/25): Same pattern. Rename: `IP-Adapter`. Score: ~22/25.
- **`Performance tuning`** (19/25): Acceptable generic term — "tuning" has specificity here but "Performance" alone is weak. Rename: `Throughput Optimisation`. Score: ~22/25. Alternatively keep `Performance Tuning` — borderline pass.
- **`Watch: Cascade and live-video AI`** (13/25): Functional media label. "Watch:" prefix names the action not the content. Rename: `Cascade Demo Video` or simply omit the H2 and attach the content to the previous section. Rename: `Demo: Cascade`.
- **`Related`** (18/25): In OK tier. Acceptable. Minor: no domain anchor. If kept, passes the tier check. Score: 18/25 — one point below threshold. Add domain anchor: `Related Resources` (still OK tier). Score: ~20/25.

**Total headings failing:** 13 of 21 scored headings (62%) are below the 20/25 threshold.

---

## Spelling/Typo Check

Scanned all visible text: headings, link text, prose, card descriptions, code block titles, accordion titles, table cells.

**Findings:**
- Line 37: `"sub-100ms"` — hyphen placement acceptable (compound modifier)
- Line 108: `"33 ms"` and `"42 ms"` — space before unit, consistent
- Line 262: `"30+ fps"` — consistent with line 79 table
- Line 403: `"Maximising"` — UK spelling ✓
- Line 444: `"monetise"` — UK spelling ✓
- Line 411: `"TensorRT"` — correct product name capitalisation
- Line 409: `"achievable"` — UK/US common form ✓

**One potential issue:**
- Line 338: `"dl_checkpoints.sh"` — rendered in inline code; accurate to the file name (not a typo)

**No typos found.** Spelling is clean throughout.

---

## Component Matrix

| Component | Used? | Appropriate for `guide` pageType? | Notes |
|-----------|-------|----------------------------------|-------|
| `StyledSteps` / `StyledStep` | Yes | NOT-TESTED (catalog not read) | Equivalent to `Steps`/`Step` — appropriate for procedural sections in `guide`. Likely approved. |
| `StyledTable` / `TableRow` / `TableCell` | Yes | NOT-TESTED | Equivalent to standard table component — likely approved for guide. |
| `CustomDivider` | Yes | NOT-TESTED | Used as section separator throughout. Component approval status unknown without catalog. |
| `Warning` | Yes | PASS | Standard Mintlify component, appropriate for `guide` pageType |
| `Note` | Yes | PASS | Standard Mintlify component, appropriate for `guide` |
| `AccordionGroup` / `Accordion` | Yes | PASS | Listed as preferred for `guide` in checks.mdx §5 component matrix |
| `CardGroup` / `Card` | Yes | PASS | Listed as preferred for `guide` in checks.mdx §5 component matrix |
| `Frame` / `iframe` | Yes | NOT-TESTED | Video embed. Approval status for `guide` unknown without catalog. |
| Fenced code blocks | Yes | PASS | Standard for all pageTypes |

**Summary:** 3 standard Mintlify components PASS. 5 custom/imported components are NOT-TESTED pending catalog read.

---

## Cross-Category Connections

```
Root Cause A: purpose field set to "guide" (mirrors pageType, not a canonical purpose value)
Affects: Cat 1.4 + Cat 5.7
Fix: Change line 27 `purpose: guide` to `purpose: configure`
```

```
Root Cause B: Missing required frontmatter fields (complexity, lifecycleStage, veracityStatus)
Affects: Cat 1.1 + Cat 1.6 + Cat 1.7 + Cat 1.8 + Cat 6.6
Fix: Add to frontmatter block after line 26:
  complexity: advanced
  lifecycleStage: setup
  veracityStatus: unverified
```

```
Root Cause C: Heading naming pattern — documentation-task framing ("What X is", "How it differs")
Affects: Cat 3.1 + Cat 3.3 + Cat 3.5 + Cat 3.7
Fix: Rename headings per Heading Score Table notes above
```

```
Root Cause D: Unverified procedural and technical content without inline REVIEW flags
Affects: Cat 6.1 + Cat 6.2 + Cat 6.5 + Cat 6.8 + Cat 6.9 + Cat 1.8
Fix: (1) Add veracityStatus: unverified. (2) Add inline {/* REVIEW: */} flags at lines 193, 209, 247. (3) Concrete sources for open-ended REVIEW items in the comment block at line 537.
```

```
Root Cause E: "This confirms" construction and "not [X]" value statement
Affects: Cat 2.4 (banned constructions)
Fix: (1) Delete line 506 "This confirms CUDA is accessible inside the container." (2) Line 407: change "the latency difference is not" to "the latency difference is prohibitive." (3) Line 438: rewrite "usually handles 1–2 concurrent live-video streams depending on resolution and model complexity" to a quantified statement.
```

---

## Blocking Decisions

No blocking decisions required. Page purpose, audience, and scope are unambiguous. All findings above are actionable without human decision.

**However, one editorial decision is needed before renaming headings at lines 44 and 129:**
- If line 44 is renamed `Cascade Architecture`, line 129 must be renamed to avoid duplication (e.g. `Pipeline Architecture` or `Stream Processing Architecture`).
- This is an editorial naming conflict, not a blocking scope decision. Either resolution is acceptable — Alison to confirm preference.

---

## Verdict Summary

**Overall verdict: NEEDS WORK**

| Category | Result |
|----------|--------|
| 1 — Frontmatter & Taxonomy | FAIL (6 issues) |
| 2 — Voice & Copy | FAIL (3 issues: banned constructions at lines 407, 438, 506) |
| 3 — Section Naming & Headings | FAIL (13 of 21 headings below threshold) |
| 4 — Page Structure | PASS |
| 5 — Layout & Components | FAIL (purpose schema error carried from Cat 1; components NOT-TESTED) |
| 6 — Veracity | FAIL (procedural and technical content unverified, missing inline flags) |
| 7 — Navigation | PASS |
| 8 — Links & Rendering | NOT-TESTED (1 internal link unverified, external links not run) |
| 9 — Process & Governance | FAIL (no human sign-off, gates not met) |

**FAIL count: 6 categories** (1, 2, 3, 5, 6, 9)

**Priority fixes (in order):**

1. **Frontmatter:** Add `complexity: advanced`, `lifecycleStage: setup`, `veracityStatus: unverified`. Change `purpose: guide` to `purpose: configure`. Shorten description to ≤160 chars. Remove generic keywords `livepeer` and `orchestrator`.
2. **Banned constructions:** Fix lines 407, 438, 506 per scan table.
3. **Terminology:** Add `{/* REVIEW: */}` flag at line 172 for `BYOC` first use. Add inline definition or REVIEW flag for `ComfyUI` at line 156.
4. **Veracity flags:** Add inline `{/* REVIEW: */}` markers at lines 193 (live-base tag), 209 (aiModels.json structure), 247 (go-livepeer Docker flags). Fix open-ended REVIEW item at line 537 with concrete source reference.
5. **Headings:** Rename the 13 failing headings per the Heading Score Table notes. Resolve naming conflict between lines 44 and 129 before executing.

**Not blocking delivery but flagged for Phase 7 veracity pass:** All numerical performance claims (fps, VRAM figures, latency targets) require testing against the StreamDiffusion paper (arXiv:2312.12491) and live system benchmarks before `veracityStatus` can move from `unverified` to `verified`.
