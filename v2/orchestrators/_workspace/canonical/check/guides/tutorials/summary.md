# Section Summary — tutorials
## `v2/orchestrators/guides/tutorials/`

**Generated:** 2026-03-24
**Pages covered:** add-ai-to-video-node, ai-earning-quickstart, byoc-cpu-smoke-test, byoc-cpu-tutorial, full-ai-pipeline-tutorial, realtime-ai-tutorial, zero-to-first-reward, tutorial-byoc-cpu-pipeline (stub), tutorial-go-production (stub), tutorial-offchain-transcoding-test (stub)
**Source:** Check reports + critical review reports, all 2026-03-24
**Corrections applied:** P39 (veracityStatus atomicity), P59 (NOT-TESTED ≠ FAIL), P60 (BORDERLINE ≠ FAIL), P62 (em-dashes not check 2.4), P64 (unverified is valid), P67 (schema compliance only in Frontmatter Table), P78 (MDX comments not rendered), P80 (tabulate FAILs directly), P85 (check 3.1 = one ID regardless of instance count), P86 (compound hyphens not em-dashes)

---

## 1. Overview Table

| Page | Verdict | Corrected fail count | Primary issues |
|------|---------|----------------------|----------------|
| `add-ai-to-video-node.mdx` | NEEDS WORK | 19 checks | Six missing frontmatter fields (CC-1); 3 open FACT CHECK comments; 4 headings below 20/25; dead `BorderedBox` import; floating Docker tags without container context |
| `ai-earning-quickstart.mdx` | NEEDS WORK | 19 checks | Six missing frontmatter fields (CC-1); 4 open FACT CHECK comments; 4 headings below 20/25; floating Docker tags without container context |
| `byoc-cpu-smoke-test.mdx` | NEEDS WORK | 18 checks | Six missing frontmatter fields (CC-1); 2 open FACT CHECK comments; `What happened` heading (17/25); suspected dead `LinkArrow` import; content overlap with byoc-cpu-tutorial |
| `byoc-cpu-tutorial.mdx` | NEEDS WORK | ~41 checks | CRITICAL NAVIGATION ORPHAN: registered in gateways tab only (docs.json line 2589); absent from orchestrators tutorials group (lines 2955–2960). Dual-audience scope (covers gateway operations while filed in orchestrators directory). Content overlap with byoc-cpu-smoke-test |
| `full-ai-pipeline-tutorial.mdx` | NEEDS WORK | 18 checks | Six missing frontmatter fields (CC-1); description 192 chars (exceeds 160); 2 open FACT CHECK comments; check 3.2 table/verdict mismatch (corrected by critical review) |
| `realtime-ai-tutorial.mdx` | NEEDS WORK | 18 checks | Six missing frontmatter fields (CC-1); 4 open FACT CHECK comments (most in batch); 4 headings below 20/25 |
| `zero-to-first-reward.mdx` | NEEDS WORK | 22 checks | Five missing frontmatter fields + veracityStatus (CC-1); 2 open FACT CHECK comments; dead `LinkArrow` import; `What happened` heading (17/25); no cross-tab links at LPT/Delegators junction (checks 4.10 + 7.6) |
| `stubs/tutorial-byoc-cpu-pipeline.mdx` | REWRITE REQUIRED | 36 checks | Structural orphan (directory not in docs.json); all frontmatter absent; audience ambiguous (gateway or orchestrator?); no content — outline only |
| `stubs/tutorial-go-production.mdx` | REWRITE REQUIRED | 37 checks | Structural orphan; all frontmatter absent; scope problem — 3 independent upgrade paths on one page (on-chain registration, GPU pipelines, network connect) violates one-purpose rule (check 4.1 FAIL). `activateBroadcaster` command present — gateway-side command, not orchestrator command |
| `stubs/tutorial-offchain-transcoding-test.mdx` | REWRITE REQUIRED | 34 checks | Structural orphan; all frontmatter absent; likely misfiled draft of published gateway tutorial `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test` — deletion candidate |

**Corrected fail count notes:**
- `add-ai-to-video-node`: original check stated 17; corrected to 19 (P39 split-fix violation not counted; count increase from P80 — F-07 veracityStatus/status must be atomic; critical review confirmed 19 confirmed FAIL IDs)
- `ai-earning-quickstart`: original check stated 17; corrected to 19 per same method as add-ai-to-video-node
- `byoc-cpu-smoke-test`: original check stated 15/16; corrected to 18 (check 2.4 result column was BORDERLINE — invalid result per P60; corrected to FAIL after scan; F-08 proposed fix contained em-dash — revision required)
- `byoc-cpu-tutorial`: ~41 FAIL IDs confirmed; navigation orphan status means structural decisions must precede any content remediation
- `full-ai-pipeline-tutorial`: original check stated 19; corrected to 18 (check 3.2 overcounted — table listed 2 instances as 2 IDs; P85: check 3.2 is one ID regardless of instance count)
- `realtime-ai-tutorial`: original check stated 21; corrected to 18 (P85: check 3.1 instances collapsed to one ID; check 3.2 instances collapsed to one ID; P80 tabulation used)
- `zero-to-first-reward`: original check stated 23; corrected to 22 (check 9.2 removed as false positive — page has no structural decisions; N/A not FAIL per critical review)
- `tutorial-byoc-cpu-pipeline stub`: original check stated 37; corrected to 36 (check 2.4 changed PASS per P62 — em-dashes alone are not a check 2.4 violation)
- `tutorial-go-production stub`: original check stated 38; corrected to 37 (check 2.4 changed PASS per P62)
- `tutorial-offchain-transcoding-test stub`: original check stated 35; corrected to 34 (check 2.4 changed PASS per P62)

---

## 2. Shared Root Causes

### RC-1: Missing frontmatter fields — all active tutorials (7 pages)
**Fields absent across all 7 active tutorial pages:** `complexity`, `lifecycleStage`, `industry`, `niche`, `informationType`
**Also absent on most pages:** `veracityStatus` (6 of 7 active tutorials — zero-to-first-reward also missing this field explicitly)
**Pattern:** These fields were not added during the original content pass. They are required per P41 and checks 1.6–1.10.
**Proposed shared values (require human confirmation before applying):**
- `complexity: intermediate` (all active tutorials)
- `lifecycleStage: build` (tutorials) or `lifecycleStage: operate` (zero-to-first-reward, byoc-cpu-smoke-test)
- `veracityStatus: unverified` (all seven — each page contains unverified factual claims)
- `industry: ["video", "ai"]` or `industry: ["technical"]` (confirm per page)
- `niche: ["protocol", "infrastructure"]` (confirm per page)
**P39 constraint:** `veracityStatus: unverified` must be added in the same operation as changing `status: current` to `status: draft`. These two changes are atomic — do not split across separate fix items.

### RC-2: `veracityStatus` / `status` split-fix violation — all 7 active tutorials
**Pattern:** All 7 active tutorial check reports split the `veracityStatus` fix and the `status: current` → `status: draft` change across two separate fix items (typically F-02 and F-03). Applied in sequence, this creates a transient incoherent state: `status: current` + `veracityStatus: unverified` simultaneously, which P39 was introduced to prevent.
**Correction required on all 7 reports:** Merge the two fix items into one atomic operation. The single fix item must add `veracityStatus: unverified` AND change `status: current` to `status: draft` in one operation, with a note: "These two changes are atomic — apply together."

### RC-3: `What happened` heading — present on 5 of 7 active tutorials
**Pattern:** `## What happened`, `## What just happened`, and similar retrospective headings appear on add-ai-to-video-node, ai-earning-quickstart, byoc-cpu-smoke-test, full-ai-pipeline-tutorial, and byoc-cpu-tutorial. All score 14–17/25 on the heading quality rubric. All fail checks 3.1 and 3.7.
**Root cause:** Retrospective heading pattern that names the act of reflection rather than the thing being confirmed. Reader-perspective construction — prohibited per headings standards.
**Shared fix pattern:** Replace with a heading naming the system state or outcome confirmed by the verification. Examples: `Gateway Routing Confirmed`, `Pipeline Output Verified`, `Off-chain Transcoding Verified`. All proposed renames must score ≥20/25 before applying.

### RC-4: Floating Docker tags without container context — add-ai-to-video-node, ai-earning-quickstart
**Pattern:** Both pages include Docker image tag references without surrounding explanation of what the container is, which binary it runs, or why that specific tag is correct. This is a veracity and comprehension issue — readers without Docker background cannot evaluate whether the tag is current or appropriate.
**Fix:** Each Docker tag reference must include a brief inline note confirming: (1) what the container does; (2) where to verify the current tag. This is also a staleness-tier HIGH issue — Docker tags change with releases.

### RC-5: Open FACT CHECK comments without inline REVIEW flags — all 7 active tutorials
**Pattern:** All 7 active tutorials contain MDX comment blocks (`{/* FACT CHECK: ... */}`) logging unresolved factual questions. Per P78, MDX comments are not rendered but they are not the same as inline `REVIEW:` flags that trigger a veracity pass. Comments alone do not satisfy check 6.2.
**Total open FACT CHECK comments across the 7 active tutorials:** approximately 20+ instances.
**High-priority unresolved claims:**
- add-ai-to-video-node: 3 open FACT CHECK comments (model paths, GPU memory flags, service endpoints)
- ai-earning-quickstart: 4 open FACT CHECK comments (pricing figures, ticket values, bandwidth claims, AI model availability)
- byoc-cpu-smoke-test: 2 open FACT CHECK comments (CLI flag syntax, binary path)
- full-ai-pipeline-tutorial: 2 open FACT CHECK comments (pipeline capability claims, Docker tag currency)
- realtime-ai-tutorial: 4 open FACT CHECK comments — most in batch (WebRTC endpoint, latency figures, model names, session limits)
- zero-to-first-reward: 2 open FACT CHECK comments (LPT acquisition step, reward call mechanics)
- byoc-cpu-tutorial: multiple FACT CHECK comments (gateway-side CLI flags not in orchestrator scope)
**Staleness tier:** All CLI flag syntax claims are HIGH. Protocol-state figures (ticket values, pricing) are HIGH. Model availability is MEDIUM.

### RC-6: Dead imports — byoc-cpu-smoke-test, zero-to-first-reward
**Pattern:** `byoc-cpu-smoke-test.mdx` has a suspected dead `LinkArrow` import (component used but the import may be stale). `zero-to-first-reward.mdx` has a confirmed dead `LinkArrow` import (identified in critical review; component not in registry). Dead imports cause render failures or lint errors.
**Fix:** Remove dead import declarations. If the `LinkArrow` component is still needed, replace with the current equivalent from the component registry.

### RC-7: Content overlap — byoc-cpu-smoke-test and byoc-cpu-tutorial
**Pattern:** Both pages cover near-identical BYOC CPU off-chain smoke test content. The smoke test is a sub-task within the tutorial. If both pages are retained, they need explicit scope differentiation. If byoc-cpu-tutorial is moved to gateways (see BD-TUT-01), the overlap with byoc-cpu-smoke-test in orchestrators may be resolved automatically.
**Decision dependency:** BD-TUT-01 must be resolved first. The overlap fix is downstream of the navigation orphan decision.

---

## 3. Blocking Decisions

| BD-ID | Decision | Page(s) | Blocks |
|-------|----------|---------|--------|
| BD-TUT-01 | CRITICAL — `byoc-cpu-tutorial.mdx` is a navigation orphan: registered in gateways tab (docs.json line 2589), absent from orchestrators tutorials group (lines 2955–2960). Three options: [A] Delete from orchestrators directory — it is already served under gateways; [B] Rewrite for orchestrators audience and register in orchestrators nav; [C] Move to `_workspace/` as draft and remove from both tabs pending scope decision. | byoc-cpu-tutorial | All byoc-cpu-tutorial remediation; RC-7 content overlap resolution |
| BD-TUT-02 | `stubs/tutorial-byoc-cpu-pipeline.mdx` — structural orphan in orchestrators directory. The gateway equivalent (`/v2/gateways/guides/tutorials/tutorial-byoc-cpu-pipeline`) already exists at docs.json lines 2634–2636 under gateways tab. Options: [A] Delete from orchestrators directory — gateway version is canonical; [B] Rewrite as orchestrators-scoped tutorial on BYOC CPU pipeline setup and register in orchestrators nav; [C] Move to `_workspace/`. | tutorial-byoc-cpu-pipeline stub | Stub remediation; docs.json registration |
| BD-TUT-03 | `stubs/tutorial-go-production.mdx` — structural orphan with three-upgrade-path scope problem (on-chain registration + GPU pipelines + network connect on one page). Options: [A] Split into three separate pages, one per upgrade path; [B] Rewrite as a single `Go to Production` page covering one integrated path only; [C] Move to `_workspace/` — no content yet. Additional note: `activateBroadcaster` command found in content — gateway-side command, not orchestrator command. Indicates content may have been authored for gateways tab. | tutorial-go-production stub | Stub remediation; one-purpose rule compliance (check 4.1) |
| BD-TUT-04 | `stubs/tutorial-offchain-transcoding-test.mdx` — structural orphan and likely misfiled draft of the published gateway tutorial `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test`. Options: [A] Delete — the gateway version is published and canonical; [B] Retain as an orchestrators-scoped variant and rewrite for orchestrators audience; [C] Move to `_workspace/` pending scope decision. Candidate for deletion. | tutorial-offchain-transcoding-test stub | Stub remediation |
| BD-TUT-05 | Confirm `veracityStatus` field population approach for all 7 active tutorials: all pages are `status: current` and will need to change to `status: draft` when `veracityStatus: unverified` is added (P39). Alison to confirm: apply the status demotion now, or wait until full veracity pass completion? | All 7 active tutorials | RC-2 atomic fix execution |
| BD-TUT-06 | Content overlap between `byoc-cpu-smoke-test.mdx` and `byoc-cpu-tutorial.mdx`: if BD-TUT-01 moves byoc-cpu-tutorial out of the orchestrators section, does byoc-cpu-smoke-test become the canonical BYOC CPU entry point for orchestrators? Or should smoke test content be promoted into a standalone first-run guide? | byoc-cpu-smoke-test | RC-7 resolution; navigation sequence |
| BD-TUT-07 | `zero-to-first-reward.mdx` — cross-tab links missing at LPT/Delegators junction (checks 4.10 and 7.6 both FAIL for same root cause). Proposed fix: add cross-tab link to `/v2/lpt/` at the LPT acquisition step (Step 3). Confirm target path and link text before applying. | zero-to-first-reward | Cross-tab navigation fix |

---

## 4. Prioritised Recommendations

Ordered by impact. CRITICAL = blocks pipeline or renders page unpublishable. HIGH = veracity risk or structural problem. MEDIUM = voice/heading quality. Items marked [BD] require human sign-off before execution.

### CRITICAL

**C-1. Resolve navigation orphan — byoc-cpu-tutorial.mdx** [BD-TUT-01]
File is physically in orchestrators directory but only registered in gateways tab in docs.json. This is a confirmed navigation failure (check 7.1 FAIL). No content remediation should proceed on this file until its tab home is decided. If deleted from orchestrators, also assess content overlap with byoc-cpu-smoke-test (RC-7).

**C-2. Decide fate of all three stubs** [BD-TUT-02, BD-TUT-03, BD-TUT-04]
All three stub files are in a `gateway-tutorial-composable-pages/stubs/` subdirectory that is not registered in docs.json under any orchestrators path. Gateway equivalents for all three already exist under the gateways tab. Until these decisions are made, no content remediation is possible — there is no valid orchestrators nav slot to write to.

**C-3. Fix P39 atomicity violation — all 7 active tutorials**
All 7 active tutorial check reports split the `veracityStatus` + `status` fix across two separate items. This creates a transient incoherent state. Before any page is remediated, the fix list for that page must be updated to make these two changes atomic. Resolve BD-TUT-05 (timing decision) first; then execute all 7 fix consolidations together.

**C-4. Add six missing frontmatter fields — all 7 active tutorials**
Blocks checks 1.6, 1.7, 1.8, 1.9, 1.10 on all seven pages. All proposed values in check reports are marked "confirm before applying." Resolve BD-TUT-05 first for `veracityStatus` timing; all other 5 fields (`complexity`, `lifecycleStage`, `industry`, `niche`, `informationType`) can proceed independently.

### HIGH

**H-1. Remove dead imports — byoc-cpu-smoke-test, zero-to-first-reward**
Dead `LinkArrow` imports cause render failures. `zero-to-first-reward` is confirmed; `byoc-cpu-smoke-test` is suspected. Verify against current component registry and remove. If a navigation component is still needed, replace with the current equivalent.

**H-2. Fix description overlength — full-ai-pipeline-tutorial**
Description is 192 chars, exceeding the 160-char limit (check 1.11 FAIL). Proposed trimmed version exists in the check report. Apply directly — no blocking decisions required.

**H-3. Resolve cross-tab link gap — zero-to-first-reward** [BD-TUT-07]
Checks 4.10 and 7.6 both FAIL for the same root cause: no cross-tab links to the Delegators section at the LPT acquisition step. These share one root fix (cross-reference per P13). Confirm target path with Alison, then add one cross-tab link in Step 3 (LPT acquisition).

**H-4. Address all open FACT CHECK comments — all 7 active tutorials**
Approximately 20+ open FACT CHECK comments across the batch. All map to check 6.2 FAIL (unverified protocol-state figures without inline flags). High-staleness-tier items to prioritise:
- realtime-ai-tutorial: WebRTC endpoint, latency figures (HIGH)
- ai-earning-quickstart: ticket values, pricing figures (HIGH)
- add-ai-to-video-node: model paths, GPU flags (HIGH)
- byoc-cpu-smoke-test and byoc-cpu-tutorial: CLI flag syntax for go-livepeer (HIGH)

**H-5. Fix floating Docker tags — add-ai-to-video-node, ai-earning-quickstart**
Both pages reference Docker image tags without container context or currency note. Staleness tier HIGH (tags change with releases). Add inline note for each tag confirming container purpose and where to verify currency.

### MEDIUM

**M-1. Rename `What happened` / `What just happened` headings — all instances**
Present on add-ai-to-video-node, ai-earning-quickstart, byoc-cpu-smoke-test, full-ai-pipeline-tutorial, byoc-cpu-tutorial. All score 14–17/25. Replace with headings naming the confirmed system state or outcome. Proposed renames must score ≥20/25 before applying. See RC-3 for fix pattern.

**M-2. Rename remaining failing headings — all active tutorials**
Each active tutorial has 2–4 additional headings below 20/25 beyond the `What happened` cluster. Specific proposed renames are in individual check reports. Common failure patterns:
- Step headings using em-dashes (`Step 1 — Start a local orchestrator`) — fix em-dash separately; evaluate heading score independently
- Generic `Next steps` headings (14/25) — replace with outcome-anchored navigation heading
- `Related` headings (11–14/25) — acceptable for check 3.2 (OK tier) but fail check 3.1; rename per rubric

**M-3. Remove dead `BorderedBox` import — add-ai-to-video-node**
Confirmed dead import (check 8.6 FAIL). Renders without error in some environments but is a lint issue. Remove the import declaration.

---

## 5. Cross-Page Structural Notes

**5.1 Navigation sequence**
The 7 active tutorials registered in docs.json under orchestrators form the tutorials group at lines 2955–2960. The confirmed sequence is:
- byoc-cpu-smoke-test (position 1)
- zero-to-first-reward (position 2)
- ai-earning-quickstart (position 3)
Per check report P25 verification (zero-to-first-reward confirmed), this sequence is correct. The three stubs are not in this group and are not accessible via orchestrators navigation.

**5.2 byoc-cpu-tutorial is NOT in the orchestrators tutorials group**
Despite being physically located in `v2/orchestrators/guides/tutorials/`, `byoc-cpu-tutorial.mdx` is absent from the orchestrators nav group at lines 2955–2960. It is registered only in the gateways tab at docs.json line 2589. This is not a mistake in the check report — it is confirmed navigation orphan status. BD-TUT-01 must resolve this before any content work on the file.

**5.3 All three stubs are structural orphans**
The `gateway-tutorial-composable-pages/stubs/` subdirectory is not registered anywhere in docs.json under orchestrators paths. The gateway equivalents (`/v2/gateways/guides/tutorials/tutorial-byoc-cpu-pipeline`, `tutorial-offchain-transcoding-test`, `tutorial-go-production`) already appear in the gateways nav group at docs.json lines 2634–2636. The existence of gateway equivalents for all three stubs makes these files strong deletion or consolidation candidates (BD-TUT-02, BD-TUT-03, BD-TUT-04).

**5.4 `activateBroadcaster` in tutorial-go-production stub**
The stub contains `activateBroadcaster` — a gateway-side activation call, not an orchestrator command. Its presence in an orchestrators-directory stub is evidence that the content was authored for the gateways tab. This supports BD-TUT-03 Option [A] (delete from orchestrators, gateway version is canonical) over Option [B] (rewrite for orchestrators audience).

**5.5 Batch-wide P39 violation — identical pattern across all 7 active tutorials**
Every active tutorial check report has the same split-fix structure: `veracityStatus: unverified` as one fix item, `status: current` → `status: draft` as a separate fix item. This is a template-level defect in the check report format, not a per-page error. When the check report template is next revised, the `veracityStatus` + `status` fix must be presented as a single atomic operation with the P39 constraint noted.

**5.6 Stub check reports have identical error patterns**
All three stub check reports were corrected in the same way: check 2.4 changed from FAIL to PASS (P62 — em-dashes alone are not a check 2.4 violation), `title` Frontmatter Table row changed from FAIL to PASS (P67 — schema compliance only). These corrections are mechanical and can be applied to stub check reports as a batch whenever the pattern appears.

**5.7 Realtime-ai-tutorial has the most FACT CHECK comments in the batch**
4 open FACT CHECK comments — more than any other page. WebRTC endpoint, latency figures, model names, and session limits are all unverified. This page should be prioritised for veracity pass work. The latency figure (`~200ms`) and WebRTC endpoint path are HIGH staleness tier.

**5.8 Zero-to-first-reward is the strongest tutorial in the batch**
By content quality and check pass rate, `zero-to-first-reward.mdx` has the fewest voice/structure failures of the 7 active tutorials. Its 22-check FAIL count is driven primarily by missing frontmatter fields (batch-wide pattern) and the cross-tab link gap, not by content quality. It is the closest to remediation-ready in this section.

---

## 6. Learnings for Future Batches

The following patterns were identified in this batch and are not yet captured in learnings.md P1–P89.

**L-90: Stub check reports — check 2.4 will always be PASS when content is outline-only**
Stub pages contain no body prose — only outline headings and structural notes. Check 2.4 (banned constructions) requires body prose to trigger a FAIL. Em-dashes in heading text and description fields are P30/check 3.1 scope, not check 2.4 scope. Future stub check reports should pre-apply this: if the page has no body prose, mark check 2.4 PASS immediately and note "No body prose — em-dashes tracked under check 3.1."

**L-91: Navigation orphan detection — check docs.json before writing any check report**
The `byoc-cpu-tutorial.mdx` navigation orphan was a critical finding that overrides all content-quality findings. Future check reports must verify docs.json registration as the first step, not a downstream finding. If a file is not in docs.json under its expected tab group, flag CRITICAL NAVIGATION ORPHAN in the report header before proceeding with content checks.

**L-92: `activateBroadcaster` and other gateway-side commands are audience signals**
When a page in the orchestrators directory contains gateway-side commands (`activateBroadcaster`, broadcaster-specific flags), this is evidence of misplaced content — not just a veracity issue. The presence of gateway-side commands should be logged in the check report as a structural signal (likely wrong tab), not only as a veracity concern.

**L-93: Content overlap between tutorial pages must be flagged as a blocking decision**
Two pages in this batch cover near-identical BYOC CPU content (`byoc-cpu-smoke-test` and `byoc-cpu-tutorial`). Content overlap of this degree must be raised as a blocking decision (BD) in the check report, not as a medium-priority finding. Reader confusion and duplication of maintenance effort are immediate concerns. Add to check procedure: if two pages in the same section have overlapping scope, raise a BD before logging individual page fixes.

**L-94: P39 atomicity violation is a template-level defect when present on every page in a batch**
When every page in a batch has the same P39 split-fix violation, the defect is in the check report template, not in individual page assessment. The section summary should flag this as a template correction, not a per-page correction. The fix: update the check report template so the `veracityStatus` + `status` atomic operation is always a single fix item with a P39 note.

**L-95: `What happened` heading pattern — add to pre-check scan list**
`## What happened` and variants appeared on 5 of 7 active tutorials in this batch. This pattern is predictable enough to scan for explicitly in step 3.1 (heading quality check) — add it to the list of known-failing heading patterns alongside `## Overview`, `## Introduction`, `## Summary`, and `## Next steps`.

**L-96: Stub three-upgrade-path scope problem — check 4.1 must be applied to stubs**
`tutorial-go-production.mdx` covers three independent upgrade paths on one page. Check 4.1 (one purpose rule) applies to stubs as well as developed content. When a stub outline names three or more distinct tasks as equivalent options on one page, raise check 4.1 FAIL in the check report and log a BD asking whether to split before content development begins. Resolving scope after content is written is significantly more costly.

---

_Summary agent: Claude Code · 2026-03-24_
