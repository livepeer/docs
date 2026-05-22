# Check Report: full-ai-pipeline-tutorial.mdx

**File:** `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx`
**Check date:** 2026-03-24
**Reviewer:** Quality check agent (Batch 6, P1–P54)
**docs.json nav position:** Tutorials group, position 5 of 6 (PREV: `add-ai-to-video-node`, NEXT: `realtime-ai-tutorial`)

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `'Full AI Pipeline Tutorial'` | PASS | Clear and specific |
| `sidebarTitle` | Yes | `'Full AI Pipeline'` | PASS | Acceptable |
| `description` | Yes | `End-to-end tutorial: gateway routes an inference request to an orchestrator, the AI runner processes it, and the result returns through the full pipeline. Covers off-chain local setup with a HuggingFace model.` | FAIL | 192 chars — exceeds 160-char limit (checks.mdx §1.11). Proposed trim: `End-to-end AI pipeline tutorial: gateway routes an inference request to an orchestrator, the AI runner executes it, and the result returns.` (138 chars) — confirm before applying |
| `pageType` | Yes | `tutorial` | PASS | Canonical 7-type value |
| `audience` | Yes | `orchestrator` | PASS | Canonical token |
| `purpose` | MISSING | — | FAIL | Required field absent |
| `complexity` | MISSING | — | FAIL | Required field absent |
| `lifecycleStage` | MISSING | — | FAIL | Required field absent |
| `keywords` | Yes | `[livepeer, orchestrator, gateway, ai pipeline, huggingface, tutorial, end-to-end]` | PASS | Present; specific |
| `veracityStatus` | MISSING | — | FAIL | `status: current` present without `veracityStatus` — P39 violation |
| `industry` | MISSING | — | FAIL (P41) | Required. Proposed: `industry: [technical, AI]` — confirm before applying |
| `niche` | MISSING | — | FAIL (P41) | Required. Proposed: `niche: [infrastructure, AI]` — confirm before applying |
| OG image block | Yes (5 fields) | All 5 present | PASS | Standard orchestrators OG image |

**Proposed frontmatter additions (confirm before applying):**
- `purpose: build` — confirm before applying
- `complexity: intermediate` — confirm before applying
- `lifecycleStage: setup` — confirm before applying
- `veracityStatus: unverified` — required; 2 open FACT CHECK flags
- `industry: [technical, AI]` — confirm before applying
- `niche: [infrastructure, AI]` — confirm before applying

---

## Category 1: Frontmatter & Taxonomy

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required fields present | FAIL | Missing: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Description overlength. |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `tutorial` canonical |
| 1.3 | `pageVariant` valid if present | N/A | Not present |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | Field absent |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` canonical |
| 1.6 | `complexity` single canonical value | FAIL | Field absent |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Field absent |
| 1.8 | `veracityStatus` present and honest | FAIL | `status: current` + `veracityStatus` absent + 2 FACT CHECK flags |
| 1.9 | `industry` valid if present | FAIL (P41) | Absent; required |
| 1.10 | `niche` valid if present | FAIL (P41) | Absent; required |
| 1.11 | `description` well-formed | FAIL | 192 chars — exceeds 160-char limit |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | PASS | Specific; searcher-intent-aligned |

**Category 1 verdict: FAIL** — 8 failing checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2: Voice & Copy

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spelling patterns found. Candidates scanned: none. |
| 2.2 | Zero banned words | PASS | Candidates: `effectively` — not present; `essentially` — not present; `basically` — not present; `several` — not present; `various` — not present; `clearly` — not present. All clean. |
| 2.3 | Zero banned phrases | PASS | "This section covers" — not present; "walks you through" — not present; "rather than" — not present. All clean. |
| 2.4 | Zero banned constructions | PASS | `not [X]` primary statement: "No ETH wallet, Arbitrum RPC, or on-chain registration required." (line 103) — scope clarification in prerequisites section. BORDERLINE: PASS. `can/may [verb]` value claims: see Banned Construction Scan. `This page [verb]` — not present. |
| 2.5 | Opening order correct | PASS | Tip opens with who does what (gateway = routing/payment, orchestrator = compute). Value before mechanism. |
| 2.6 | Paragraph discipline | PASS | Paragraphs concise and single-purpose. |
| 2.7 | Audience register correct | PASS | Technical, hardware-aware, process-specific. Correct for `orchestrator`. Gateway setup Step 4 is within scope — this is an integrated tutorial, not a gateway production setup guide. |
| 2.8 | Per-audience prohibited phrases absent | PASS | No orchestrator prohibited phrases found. |
| 2.9 | No passive value statements | PASS | Mechanisms stated concretely in What happened section. |
| 2.10 | No hedging openers | PASS | Tip opens with a direct factual statement of the learning outcome. |
| 2.11 | Terminology locked and consistent | PASS | `aiModels.json`, `price_per_unit`, `off-chain`, `remote signer`, Docker-out-of-Docker used consistently. |

**Category 2 verdict: PASS**

---

## Category 3: Section Naming & Headings

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Pipeline architecture | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Prerequisites | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS |
| Step 1: Download the model | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Step 2: Write aiModels.json | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Step 3: Start the orchestrator | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Step 4: Start the gateway | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS |
| Step 5: Send an inference request through the gateway | 4 | 4 | 4 | 4 | 2 | 18/25 | FAIL |
| Step 6: Trace the request through logs | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS |
| What happened | 3 | 2 | 3 | 3 | 4 | 15/25 | FAIL |

**Check 3.2:**
- "Step 5: Send an inference request through the gateway" — verbose. Proposed: `Step 5: Send Inference Request`. Check 3.2 prohibited list: none present. PASS validation.
- "What happened" — generic retrospective. Proposed: `Pipeline Trace Result`. Check 3.2 prohibited list: none present. PASS validation.

**Check 3.3:** No `X vs Y` headings. PASS.
**Check 3.4:** Domain anchors adequate. PASS.
**Check 3.6:** Title "Full AI Pipeline Tutorial" — 4 words, concept-derived. PASS.
**Check 3.7:** Most headings strong editorial choices. "What happened" is generic.

**Category 3 verdict: FAIL** — Failing: 3.1 (2 headings), 3.2 (2 headings), 3.7

---

## Category 4: Page Structure & Content Architecture

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single audience: `orchestrator`. Single job: run a complete local AI pipeline and trace the request path end-to-end. |
| 4.2 | Purpose statement test | PASS | "This page lets the orchestrator run a complete local AI inference pipeline, see each hop in the logs, and verify the full gateway-orchestrator path." Passes. |
| 4.3 | PREV/NEXT adjacency correct | PASS | PREV: `add-ai-to-video-node`. NEXT: `realtime-ai-tutorial`. Logical progression: extend video node → trace full AI pipeline → live streaming pipeline. |
| 4.4 | No dead ends | PASS | Related Pages: Gateway-Orchestrator Interface, AI Inference Operations, Gateway Relationships, Realtime AI Tutorial. All relevant. |
| 4.5 | Prerequisites stated | PASS | Prerequisites table with GPU, Docker, go-livepeer image, free ports, disk space. Off-chain note explicit. |
| 4.6 | Out-of-scope clear | PASS | "No ETH wallet, Arbitrum RPC, or on-chain registration required." Stated clearly. |
| 4.7 | Information type per section correct | PASS | `build` purpose: primary `procedural`, secondary `technical/factual`. All sections fit. |
| 4.8 | No content duplication | INFO | Model download step overlaps with `ai-earning-quickstart.mdx`. Acceptable — different context. |
| 4.9 | Section orientation | N/A | Page-level. |
| 4.10 | Cross-tab links | INFO | No cross-tab links. Acceptable at this depth. |

**Category 4 verdict: PASS**

---

## Category 5: Layout, Components & Template

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType | PASS | Prerequisites, Steps 1–6, What happened, Related pages. Tutorial structure. |
| 5.2 | Required sections present | PASS | All required tutorial sections present. |
| 5.3 | Only approved components used | NOT-TESTED | StyledSteps/StyledStep, StyledTable, CustomDivider, LinkArrow, Note, Tip, CardGroup/Card — NOT-TESTED against component-layout-decisions.mdx. |
| 5.4 | Avoided components absent | PASS | No TODO/TBD in rendered content. FACT CHECK flags are MDX comments. |
| 5.5 | Information type → component mapping | PASS | Steps in StyledSteps. Note for community service advisory. |
| 5.6 | MDX renders clean | NOT-TESTED | Not run locally. No dead imports found. |
| 5.7 | No old-schema frontmatter | PASS | `tutorial` canonical. |
| 5.8 | CSS custom properties | N/A | No inline CSS. |
| 5.9 | Generated file banners | N/A | Not generated. |
| 5.10 | Component conventions | PASS | No dead imports. Consistent with other tutorials in this batch. |

**Category 5 verdict: PASS**

---

## Category 6: Veracity & Factual Accuracy

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | FACT CHECK at line 271: gateway AI inference endpoint path `/text-to-image` for off-chain gateway not confirmed against current release. |
| 6.2 | Code/commands tested | FAIL | FACT CHECK at line 125: `dl_checkpoints.sh` invocation not confirmed. FACT CHECK at line 271: gateway endpoint path not confirmed. 2 open FACT CHECK flags. |
| 6.3 | No deprecated API usage | NOT-TESTED | `-httpIngest` flag, gateway endpoint paths not verified against current go-livepeer. |
| 6.4 | Numbers are real | PASS | Time estimates are ranges ("5 to 15 seconds", "2 to 4 seconds"). No unsourced financial numbers. |
| 6.5 | REVIEW flags for unverified claims | PASS | 2 FACT CHECK flags placed correctly at lines 125 and 271. |
| 6.6 | veracityStatus honest | FAIL | `status: current` + `veracityStatus` absent + 2 FACT CHECK flags. |
| 6.7 | Authoritative vs AI-generated glossary | N/A | No glossary references. |
| 6.8 | Source staleness check | FAIL | `livepeer/go-livepeer:latest`, `livepeer/ai-runner:latest` — `:latest` tags volatile. `signer.eliteencoder.net` third-party. |
| 6.9 | No open-ended research tasks | FAIL | FACT CHECK lines 125 and 271 reference "Rick", "j0sh" without document paths. |

**Category 6 verdict: FAIL** — 5 failing checks: 6.1, 6.2, 6.6, 6.8, 6.9

---

## Category 7: Navigation & Information Architecture

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | Found at docs.json line 2959: `"v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial"` |
| 7.2 | Navigation matches file system | PASS | File path matches docs.json entry. |
| 7.3 | Tab entry portal routes | N/A | Page-level. |
| 7.4 | No structural orphans | PASS | Reachable from Tutorials group. |
| 7.5 | Audience journey complete | PASS | Logical position in sequence. |
| 7.6 | Cross-tab graduation | N/A | Page-level. |
| 7.7 | File in correct lane | PASS | Published in `v2/orchestrators/`. |
| 7.8 | Naming conventions | PASS | `full-ai-pipeline-tutorial.mdx` — correct. |
| 7.9 | TTL | N/A | Published page. |

**Category 7 verdict: PASS**

---

## Category 8: Links & Rendering

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | PASS | `/v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface` — confirmed. `/v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations` — confirmed. `/v2/orchestrators/guides/advanced-operations/gateway-relationships` — confirmed. `/v2/orchestrators/guides/tutorials/realtime-ai-tutorial` — docs.json line 2960. All 4 internal links valid. |
| 8.2 | All external links live | NOT-TESTED | `signer.eliteencoder.net`, `discord.gg/livepeer`, `tools.livepeer.cloud/ai/network-capabilities` — not live-checked. |
| 8.3 | Snippet imports resolve | NOT-TESTED | Component imports not verified. |
| 8.4 | All images load | PASS | OG image standard path. |
| 8.5 | MDX renders clean | NOT-TESTED | Not run locally. |
| 8.6 | No TODO/TBD in published content | PASS | FACT CHECK flags are MDX comments. |

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
| Line 273 | "A typical first inference takes 5 to 15 seconds (VRAM kernel warm-up on the first job)." | Technical | Concrete range, not a value claim. PASS. |

**`not [X]` primary statement candidates:**
- "No ETH wallet, Arbitrum RPC, or on-chain registration required." (line 103) — scope clarification. PASS.

**Em-dash scan (P30, P48):**
- Step titles: no em-dashes. PASS.
- H2 headings: no em-dashes. PASS.
- Description: no em-dashes. PASS.
- Body prose: no em-dashes found. PASS.
- CustomDivider middleText props scanned (P20): "Architecture", "Prerequisites", "Step 1: Prepare", "Step 2: Configure aiModels.json", "Step 3: Start Orchestrator", "Step 4: Start Gateway", "Step 5: Send Request Through Gateway", "Step 6: Trace the Log Trail", "What Just Happened" — no em-dashes. PASS. "What Just Happened" vs H2 "What happened" — prop/heading inconsistency. INFO.

---

## Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? | Proposed fix |
|---|---|---|---|---|---|---|---|---|
| Pipeline architecture | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS | — |
| Prerequisites | 4 | 3 | 5 | 5 | 5 | 22/25 | PASS | — |
| Step 1: Download the model | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS | — |
| Step 2: Write aiModels.json | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS | — |
| Step 3: Start the orchestrator | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS | — |
| Step 4: Start the gateway | 5 | 4 | 5 | 5 | 5 | 24/25 | PASS | — |
| Step 5: Send an inference request through the gateway | 4 | 4 | 4 | 4 | 2 | 18/25 | FAIL | `Step 5: Send Inference Request` |
| Step 6: Trace the request through logs | 5 | 4 | 5 | 5 | 4 | 23/25 | PASS | — |
| What happened | 3 | 2 | 3 | 3 | 4 | 15/25 | FAIL | `Pipeline Trace Result` |

*(Related Pages exempt per P16.)*

---

## Spelling/Typo Check

| Item | Finding |
|---|---|
| Prose | No typos found |
| Table cells | No typos found |
| Card titles/descriptions | No typos found |
| Step titles | No typos found |

**Spelling verdict: PASS**

---

## Component Matrix

| Component | Used | In tutorial preferred list? | Status |
|---|---|---|---|
| `Tip` | Yes | Yes | PASS |
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
| Missing `veracityStatus` + `status: current` + 2 FACT CHECK flags | 1.8, 6.6, 9.3 | Same root cause as other tutorials. Fix: `veracityStatus: unverified`, `status: draft` until resolved. |
| Missing 6 frontmatter fields + overlength description | 1.1, 1.4, 1.6, 1.7, 1.9, 1.10, 1.11 | Single action for taxonomy fields; description needs separate trim. |
| "What happened" vs CustomDivider "What Just Happened" | 3.1, 3.7 | Batch-wide inconsistency. Fix both. Proposed rename: `Pipeline Trace Result`. |

---

## Blocking Decisions

| ID | Decision required | Blocks | Owner |
|---|---|---|---|
| BD-1 | Confirm `purpose`, `complexity`, `lifecycleStage` values | Frontmatter completion | Alison |
| BD-2 | Resolve 2 FACT CHECK flags (dl_checkpoints.sh, gateway endpoint path) | `veracityStatus` | Rick / j0sh |
| BD-3 | Confirm `industry` and `niche` values | 1.9, 1.10 | Alison |
| BD-4 | Approve trimmed description (≤160 chars) | 1.11 | Alison |

---

## Verdict

**NEEDS WORK**

**Individual failing check IDs (P49):** 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1(x2 headings), 3.2(x2 headings), 3.7, 6.1, 6.2, 6.6, 6.8, 6.9, 9.1, 9.3 — **19 failing check IDs**

**Critical:** None
**High:** 1.8, 6.6 (status/veracity incoherence); 1.11 (description 20% over limit)
**Medium:** Missing frontmatter fields, heading failures, veracity issues
**Info:** `:latest` Docker tags, cross-tab link absence
