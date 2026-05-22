# Section Summary — `guides/ai-and-job-workloads`

**Generated:** 2026-03-24
**Summary agent:** Claude Code (summary index agent)
**Learnings applied:** P1–P77
**Pages covered:** 9 (full group)
**Navigation sequence (docs.json):** workload-options → video-transcoding-operations → ai-inference-operations → diffusion-pipeline-setup → llm-pipeline-setup → realtime-ai-setup → audio-and-vision-pipelines → model-demand-reference → model-hosting
**Source files read:** 9 check reports + 9 critical review reports (18 total)
**Note on realtime-ai-setup:** Critical review rated this report "DO NOT USE AS-IS" — corrected fail count is approximate (~20). Do not use the original report for remediation without applying all critical review corrections first.

---

## 1. Overview Table

| Page | Corrected Fail Count | Critical Review Rating | Primary Issues |
|---|---|---|---|
| `workload-options.mdx` | 18 | MOSTLY RELIABLE | `status: published` non-canonical; em-dash in description + heading "How routing works — and why it differs per job type"; question heading "What should I run?" (11/25); SAM2 VRAM 6 GB vs 12 GB in ai-inference-operations; pipeline count "nine" (body) vs 10 (JSX comment); check 7.8 incorrectly FAIL (corrected per P62/P63); duplicate check rows 2.2/2.8 not propagated |
| `video-transcoding-operations.mdx` | 21 | MOSTLY RELIABLE | `status: published` non-canonical; em-dash in description + heading "What gateways pay — and what you need to know" (14/25); `purpose: guide` wrong-field error; check 2.4 corrected to PASS (em-dashes are not banned constructions per P62); duplicate CardGroup cards pointing to same page; `status: published` not flagged under check 1.2 (P57 violation) |
| `ai-inference-operations.mdx` | 22 | MOSTLY RELIABLE | **CRITICAL** broken link `/v2/gateways/resources/technical/orchestrator-offerings` absent from docs.json (checks 4.10, 7.6, 8.1); `status: published` non-canonical; `Significantly` banned word at line 215 (check 2.2 corrected to FAIL — self-correction in original was wrong); check 2.4 corrected to PASS (P62); SAM2 VRAM 12 GB vs 6 GB in workload-options; em-dashes in all 10 Accordion titles; pipeline count "ten" vs "nine" in workload-options; duplicate "Batch AI Setup" cards |
| `diffusion-pipeline-setup.mdx` | 25 | MOSTLY RELIABLE | **CRITICAL** scope too broad — LLM/Ollama and audio/vision content belongs in specialist pages (checks 4.1, 4.2, 4.6, 4.8 FAIL); **CRITICAL** broken link `/v2/gateways/resources/technical/orchestrator-offerings`; `status: published` non-canonical; `purpose: guide` wrong-field; em-dashes in description + 2 Accordion titles; check 2.4 corrected to PASS (P62); check 2.11 miscategorised (heading question belongs under 3.7, not 2.4) |
| `llm-pipeline-setup.mdx` | 24 | RELIABLE | `pageType: how_to` deprecated → `instruction`; dead import `LinkArrow`; description 234 chars (exceeds 160-char limit); content duplication with diffusion-pipeline-setup; four unresolved REVIEW flags; check 2.4 corrected to PASS (P62); check 3.4 added to corrected verdict (was in check table as FAIL but omitted from Verdict ID list — P49 violation); `Related pages` (lowercase p) — P16 exemption should apply regardless of capitalisation |
| `realtime-ai-setup.mdx` | ~20 (approximate) | DO NOT USE AS-IS | `purpose: guide` wrong-field; `status: published` non-canonical; description actual 212 chars (check report stated 188 — error); Fix 1 for description (169 chars) still non-compliant — use Fix 2 only (144 chars); 5 false positives in original (BYOC finding at line 172, gateway link 8.1, checks 2.1/2.2/3.6 Result columns unreconciled); em-dash in headings at lines 154 and 260 missed; 13 of 21 headings below threshold |
| `audio-and-vision-pipelines.mdx` | 26 | MOSTLY RELIABLE | `pageType: how_to` deprecated → `instruction`; dead imports (`LinkArrow`, `BorderedBox`); missing Prerequisites section; VRAM inconsistencies: SAM2 "12–24 GB" here vs "~4–6 GB warm" in model-demand-reference; Whisper "~3 GB" here vs "~2–3 GB warm" in model-demand-reference; content duplication with diffusion-pipeline-setup (3 identical JSON entries); F-04 (internal contradiction) WITHDRAWN by critical review — Warning block already resolves |
| `model-demand-reference.mdx` | 20 | MOSTLY RELIABLE | `status: published` non-canonical; VRAM range/warm/peak format most detailed in group — proposed canonical VRAM source after SME verification; `significantly` banned word at line 524; em-dash in description + H2 "Warm vs cold — when it matters"; check 2.4 corrected verdict adds this check (was in check table + Category 2 verdict but omitted from Verdict ID list — P49 violation); checks 3.2 and 8.1 Result columns not updated after self-correction |
| `model-hosting.mdx` | 23 | MOSTLY RELIABLE | `pageType: how_to` deprecated → `instruction`; `status: draft` (coherent — no P39 issue); missing purpose/complexity/lifecycleStage/veracityStatus/industry/niche; description 220 chars; `significantly` banned word at line 166; "Getting access" heading 14/25; missing Prerequisites section; four unresolved REVIEW flags |

**Section-level fail range:** 18–26 (approximate 20 for realtime-ai-setup). Median: 23. No page is in a publishable state.

---

## 2. Shared Root Causes

### RC-1: Missing frontmatter fields — universal across all 9 pages
Every page in this group is missing some combination of: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Per P41, `industry` and `niche` are required fields — N/A is not valid. No page is exempt. This is a structural gap in the authoring template used for this group, not individual author error.

**Affects:** All 9 pages
**Fix pattern:** Add missing fields to frontmatter using canonical taxonomy values. `veracityStatus: unverified` is correct for all pages in this group (open REVIEW flags, unverified technical figures). Proposed values: `industry: AI infrastructure` + `niche: decentralised compute`. Confirm before applying (P51).

### RC-2: `status: published` — invalid enum value appearing on 6 of 9 pages
`workload-options`, `video-transcoding-operations`, `ai-inference-operations`, `diffusion-pipeline-setup`, `realtime-ai-setup`, and `model-demand-reference` all carry `status: published`. Valid values are `current` and `draft` only (P57). This is a wrong-enum error — `published` is simply not in the enum. It is not a §1.8 coherence failure. The correct fix is `status: draft` + `veracityStatus: unverified` for all six pages pending veracity pass completion.

Note: several check reports cited §1.8 as the basis for this violation and stated "`status: published` requires `veracityStatus: verified`." That rule does not exist — §1.8 governs `status: current` + `veracityStatus` coherence. Future checkers must not invent schema rules.

**Affects:** workload-options, video-transcoding-operations, ai-inference-operations, diffusion-pipeline-setup, realtime-ai-setup, model-demand-reference
**Fix pattern:** Replace `status: published` with `status: draft` everywhere in this group pending veracity pass.

### RC-3: Em-dashes in visible text — systematic P30 violations
Em-dashes appear in: frontmatter `description` fields (multiple pages), H2 headings (workload-options, video-transcoding-operations, model-demand-reference), Accordion titles (all 10 in ai-inference-operations; additional titles in diffusion-pipeline-setup), and body prose (model-demand-reference line 524).

P30 prohibits em-dashes in all visible text including component props (Accordion titles, Card titles, Tab labels). Em-dashes alone do NOT constitute a check 2.4 FAIL (P62). They fail: check 1.11 (description), check 3.7 (heading/title visible text), or as a standalone P30 finding in body prose.

**Affects:** workload-options, video-transcoding-operations, ai-inference-operations, diffusion-pipeline-setup, model-demand-reference (confirmed); realtime-ai-setup (lines 154, 260 missed by check report — identified by critical review)
**Fix pattern:** Replace em-dash in descriptions with `;` or restructure sentence. Rename headings to direct noun-phrase form. Rewrite Accordion titles without em-dashes. Remove from body prose.

### RC-4: Check 2.4 systematically mis-applied — em-dashes are not banned constructions (P62)
Seven of nine check reports incorrectly flagged em-dashes as check 2.4 (banned constructions) violations. Check 2.4 covers only: `not [X]` as primary statement, `rather than`, `if [condition]` in body prose, `can/may [verb]` in value claims, `That means`/`This shows`, `This page [verb]`. Em-dashes belong under check 1.11, check 3.7, or as a standalone P30 finding in body prose. All critical reviews corrected this per P62.

**Affected reports:** workload-options, video-transcoding-operations, ai-inference-operations, diffusion-pipeline-setup, llm-pipeline-setup, model-demand-reference, audio-and-vision-pipelines
**Impact on counts:** Check 2.4 corrected from FAIL to PASS in all seven pages (unless body prose em-dash OR another banned construction independently confirms FAIL).

### RC-5: `purpose: guide` — wrong-field error (P37 type b)
`video-transcoding-operations`, `diffusion-pipeline-setup`, and `realtime-ai-setup` carry `purpose: guide`. `guide` is a `pageType` value, not a `pagePurpose` value. The canonical `purpose` set is 15 values: `orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`, `update`. This is a P37 type-b wrong-field error.

**Affects:** video-transcoding-operations, diffusion-pipeline-setup, realtime-ai-setup
**Proposed fixes:** video-transcoding-operations → `operate`; diffusion-pipeline-setup → `configure`; realtime-ai-setup → `configure`. Confirm before applying (P51).

### RC-6: Deprecated `pageType: how_to` — 3 pages not migrated
`audio-and-vision-pipelines`, `llm-pipeline-setup`, and `model-hosting` carry `pageType: how_to`. This is a deprecated 12-type alias. Migration target: `pageType: instruction` with `pageVariant` co-fix per P42.

**Affects:** audio-and-vision-pipelines, llm-pipeline-setup, model-hosting
**Fix pattern:** Replace `pageType: how_to` with `pageType: instruction` and co-fix `pageVariant`.

### RC-7: Self-correction propagation failures — universal pattern (P17/P28)
Every check report in this batch has at least one instance of a self-correction applied in a narrative section (Banned Construction Scan, link verification note, correction note below a table) that was not propagated back to ALL required locations: check table Result column, category verdict count, and Verdict ID list. This is a systematic P17/P28 compliance failure. Confirmed instances:
- workload-options: duplicate checks 2.2/2.8 correction note not propagated to Result columns
- ai-inference-operations: check 2.2 self-correction to PASS was wrong (banned word confirmed present) — and correction not propagated to Result column regardless
- diffusion-pipeline-setup: check 2.4 Result column contradicts detail, scan, and F-02 withdrawal
- llm-pipeline-setup: check 2.4 Result column not updated after BCS self-correction; check 3.4 FAIL in check table but omitted from Verdict ID list
- model-demand-reference: check 3.2 and 8.1 Result columns not updated after self-correction; check 2.4 in check table and Category 2 verdict but omitted from Verdict ID list (P49 violation)

### RC-8: Missing Prerequisites sections on procedural pages
`audio-and-vision-pipelines` and `model-hosting` lack a Prerequisites section despite being procedural pages with technical dependencies. `llm-pipeline-setup` (the highest-quality page in the batch) provides the reference implementation: Docker + NVIDIA Container Toolkit + go-livepeer with `-aiWorker` + VRAM minimum.

**Affects:** audio-and-vision-pipelines, model-hosting (confirmed missing)
**Fix pattern:** Add Prerequisites section following llm-pipeline-setup as the reference pattern.

### RC-9: Dead imports not removed
`audio-and-vision-pipelines` imports `LinkArrow` and `BorderedBox` without using them. `llm-pipeline-setup` imports `LinkArrow` without using it. Three dead imports total. These indicate pages were templated from a common source without cleanup.

**Affects:** audio-and-vision-pipelines (2 dead imports), llm-pipeline-setup (1 dead import)
**Fix pattern:** Remove dead import lines. Confirm no usage in full page body (including component props, Accordion titles, CardGroup entries) before removing.

### RC-10: Content duplication — diffusion-pipeline-setup absorbing sibling page content
`diffusion-pipeline-setup` contains LLM/Ollama Docker Compose content (belongs in `llm-pipeline-setup`) and audio/vision pipeline content (belongs in `audio-and-vision-pipelines`). The page's own internal comment acknowledges this should be extracted. Three JSON model table entries are identical across `diffusion-pipeline-setup` and `audio-and-vision-pipelines`. Until BD-SCOPE-1 is resolved, both copies exist without a declared source of truth.

**Affects:** diffusion-pipeline-setup, llm-pipeline-setup, audio-and-vision-pipelines
**Requires:** BD-SCOPE-1 decision before any fix can be applied.

### RC-11: Open REVIEW flags — veracity blockers across the group
REVIEW flags present across multiple pages represent veracity blockers, not editorial notes. Pages with open flags include: `llm-pipeline-setup` (4 flags), `model-hosting` (4 flags on model disk sizes), `realtime-ai-setup` (multiple), `diffusion-pipeline-setup`, `audio-and-vision-pipelines`. Pages cannot advance to `veracityStatus: verified` while REVIEW flags remain open.

**Fix pattern:** Each open REVIEW flag requires a blocking decision entry or SME verification. VRAM flags → BD-SME-1. Docker/runner image tag flags → BD-RUNNER-1. BYOC path flags → BD-BYOC-1.

---

## 3. Blocking Decisions

| BD-ID | Decision required | Page(s) affected | Blocks |
|---|---|---|---|
| BD-CRITICAL-1 | Broken link `/v2/gateways/resources/technical/orchestrator-offerings` confirmed absent from docs.json. Options: (1) create the target page and add to docs.json, (2) redirect to an existing equivalent gateways resource, (3) remove the link. | ai-inference-operations, diffusion-pipeline-setup | Publication of both pages. CRITICAL — no workaround. |
| BD-SME-1 | VRAM inconsistencies require SME resolution before any page can reach `veracityStatus: verified`. SAM2 large: 6 GB (workload-options) vs 12 GB (ai-inference-operations) vs ~4–6 GB warm/~6–8 GB peak (model-demand-reference). Whisper large-v3: ~3 GB (audio-and-vision-pipelines) vs ~2–3 GB warm/~3–4 GB peak (model-demand-reference). SDXL Lightning: ~12–14 GB warm (audio-and-vision-pipelines, diffusion) vs ~12–18 GB (model-demand-reference). Llama 3.1 70B Q4: ~40 GB (llm-pipeline-setup) vs ~35–40 GB (model-demand-reference). model-demand-reference is proposed as the section's canonical VRAM source given its range/warm/peak format. | workload-options, ai-inference-operations, audio-and-vision-pipelines, diffusion-pipeline-setup, llm-pipeline-setup, model-demand-reference | `veracityStatus: verified` on all affected pages. Do not resolve by choosing a figure — SME decision required. |
| BD-COUNT-1 | Pipeline count conflict: "nine" in workload-options line 130 vs "ten" in ai-inference-operations. Internal JSX comment in workload-options (line 299) enumerates 10 items. Confirm canonical pipeline count and update all references consistently. | workload-options, ai-inference-operations | Factual coherence between the two primary overview/reference pages. |
| BD-SCOPE-1 | diffusion-pipeline-setup scope: page absorbs LLM/Ollama Docker Compose content and audio/vision pipeline content. Internal comment acknowledges extraction is intended. Options: (1) extract LLM content to llm-pipeline-setup and audio/vision content to audio-and-vision-pipelines, keeping diffusion-only content here; (2) explicitly re-scope as a multi-pipeline general setup reference and rename/repurpose accordingly. | diffusion-pipeline-setup, llm-pipeline-setup, audio-and-vision-pipelines | Content architecture for this group. RC-10 cannot be resolved until this is decided. |
| BD-RUNNER-1 | Ollama runner image tag `tztcloud/livepeer-ollama-runner:0.1.1` — unverified, staleness risk. Confirm current tag or replace with an official image reference with version-pinning guidance. | llm-pipeline-setup, diffusion-pipeline-setup | `veracityStatus: verified` on both pages. |
| BD-BYOC-1 | BYOC custom-container registration path — open REVIEW flags in diffusion-pipeline-setup and model-hosting. Owner verification of current container registration procedure required. | diffusion-pipeline-setup, model-hosting | `veracityStatus: verified` on both pages. |
| BD-CARDGROUP-1 | video-transcoding-operations: two CardGroup cards pointing to the same target page. Replace duplicate with a distinct navigation target or remove one card. | video-transcoding-operations | Check 9.3 navigation coherence. |
| BD-CARDGROUP-2 | ai-inference-operations: duplicate "Batch AI Setup" cards in CardGroup (lines 432 and 441). Remove duplicate; confirm which entry is authoritative first. | ai-inference-operations | Check 9.3 navigation coherence. |
| BD-GITHUB-1 | video-transcoding-operations: GitHub `blob/master` link — GitHub changed default branch from `master` to `main` in 2021. Update link to current branch or pin to a commit hash. | video-transcoding-operations | Check 8.x link validity. |

---

## 4. Prioritised Recommendations

### CRITICAL — blocks publication

**REC-1: Resolve broken link to `/v2/gateways/resources/technical/orchestrator-offerings`**
BD-ID: BD-CRITICAL-1. Affects ai-inference-operations (checks 4.10, 7.6, 8.1) and diffusion-pipeline-setup (check 8.1). Identify the correct target page in gateways and update both links to its confirmed docs.json path. If no equivalent exists, remove the link and rewrite the surrounding sentence.

### HIGH — blocks `veracityStatus: verified`

**REC-2: SME resolution of VRAM inconsistencies**
BD-ID: BD-SME-1. Affects workload-options, ai-inference-operations, audio-and-vision-pipelines, diffusion-pipeline-setup, llm-pipeline-setup, model-demand-reference. Once SME confirms figures, declare model-demand-reference as the section's VRAM data authority (range/warm/peak format). All other pages align to it or link to it rather than restating raw figures.

**REC-3: Resolve pipeline count conflict — "nine" vs "ten"**
BD-ID: BD-COUNT-1. Likely canonical count is ten (JSX comment in workload-options enumerates 10). Update workload-options line 130 body text to "ten". If count is nine, update ai-inference-operations and the JSX comment.

**REC-4: Verify Ollama runner image tag**
BD-ID: BD-RUNNER-1. Confirm `tztcloud/livepeer-ollama-runner:0.1.1` is current in llm-pipeline-setup and diffusion-pipeline-setup. If stale, update both pages simultaneously.

**REC-5: Verify BYOC container registration path**
BD-ID: BD-BYOC-1. Owner verifies current registration procedure. Resolve open REVIEW flags in diffusion-pipeline-setup and model-hosting.

### HIGH — universal frontmatter remediation (applies to all 9 pages)

**REC-6: Frontmatter batch fix**
Apply per page as a single pass:
- Add `complexity`, `lifecycleStage`, `industry: AI infrastructure`, `niche: decentralised compute` (confirm before applying — P51)
- Add `veracityStatus: unverified` where absent
- Replace `status: published` with `status: draft` on 6 pages
- Replace `pageType: how_to` with `pageType: instruction` (+ `pageVariant` co-fix) on 3 pages
- Correct `purpose: guide` wrong-field error on 3 pages (propose: video-transcoding-operations → `operate`; diffusion-pipeline-setup → `configure`; realtime-ai-setup → `configure`)

### HIGH — em-dash remediation pass

**REC-7: Remove em-dashes across the group**
Priority order: (1) ai-inference-operations — all 10 Accordion titles; (2) H2 headings in video-transcoding-operations, model-demand-reference, workload-options; (3) descriptions on all affected pages; (4) body prose at model-demand-reference line 524. Rewrite as direct noun-phrase statements. Em-dashes are check 1.11 (description) or check 3.7 (heading/Accordion title) failures — NOT check 2.4.

### MEDIUM — heading score failures

**REC-8: Rework failing headings**
Worst offenders: "What should I run?" (workload-options, 11/25), "Pipeline overview" (audio-and-vision-pipelines, 14/25), "Testing" ×4 (audio-and-vision-pipelines, 15/25), "Setup" (llm-pipeline-setup, 14/25), "Getting access" (model-hosting, 14/25), "What gateways pay — and what you need to know" (video-transcoding-operations, 14/25). Apply heading rules: name the thing, 3–6 words, no questions, no em-dashes.

### MEDIUM — banned words

**REC-9: Remove banned intensifiers**
`significantly` at model-demand-reference line 524; `significantly` at model-hosting line 166; `Significantly` at ai-inference-operations line 215 (confirmed present — original self-correction to PASS was incorrect per critical review). Rewrite sentences to state claims directly.

### MEDIUM — scope and duplication

**REC-10: Resolve diffusion-pipeline-setup scope**
BD-ID: BD-SCOPE-1. Extract LLM/Ollama content to llm-pipeline-setup and audio/vision content to audio-and-vision-pipelines. This resolves RC-10, eliminates 4 check FAILs in diffusion-pipeline-setup, and removes duplicate content blocks in llm-pipeline-setup and audio-and-vision-pipelines.

**REC-11: Add missing Prerequisites sections**
Add to audio-and-vision-pipelines and model-hosting. Use llm-pipeline-setup as the reference implementation (Docker, NVIDIA Container Toolkit, go-livepeer with `-aiWorker`, VRAM minimum, OS requirement).

### LOW — component hygiene

**REC-12: Remove dead imports**
`LinkArrow` from llm-pipeline-setup and audio-and-vision-pipelines. `BorderedBox` from audio-and-vision-pipelines. Confirm no usage in full page body before removing.

**REC-13: Fix duplicate CardGroup cards**
video-transcoding-operations (BD-CARDGROUP-1): replace one duplicate card with a distinct navigation target.
ai-inference-operations (BD-CARDGROUP-2): remove duplicate "Batch AI Setup" card after confirming which entry is authoritative.

**REC-14: Update GitHub `blob/master` link**
BD-ID: BD-GITHUB-1. Update video-transcoding-operations GitHub link from `master` to `main` or pin to a commit hash.

---

## 5. Cross-Page Structural Notes

### model-demand-reference as canonical VRAM data authority
`model-demand-reference` uses range format with warm/peak distinction (e.g. "~4–6 GB warm, ~6–8 GB peak") — more precise than flat figures on other pages. Once SME verifies the figures, this page should be declared the group's canonical VRAM source. All other pages should align to it or link to it rather than restating raw numbers. Future drift prevention: one page to update if figures change.

### workload-options vs ai-inference-operations — scope overlap and pipeline count conflict
Both pages describe the full set of Livepeer AI pipelines: workload-options as a decision guide (what to run), ai-inference-operations operationally (how to set each up). The pipeline count conflict (nine vs ten) is a symptom of these pages evolving independently. Once BD-COUNT-1 is resolved, both pages should cross-reference each other and their scope boundary must be made explicit.

### diffusion-pipeline-setup as accretion target
diffusion-pipeline-setup shows the pattern of a page that accumulated content from multiple contributors over time. It now contains Stable Diffusion/SDXL content, Ollama/LLM content, and audio/vision content. The scope decision (BD-SCOPE-1) is structural and affects the group's overall page count and navigation routing.

### llm-pipeline-setup as quality reference for this group
`llm-pipeline-setup` received a RELIABLE rating (the only RELIABLE in the batch) and has the best Prerequisites implementation. When authoring or fixing Prerequisites sections for other pages, use llm-pipeline-setup as the reference pattern.

### realtime-ai-setup: check report must be re-run before remediation
This is the only report rated "DO NOT USE AS-IS." The specific issues: 5 false positives (including a BYOC finding at line 172 that misidentifies a valid term), unreconciled Result columns, and a description character count error (212 vs stated 188 chars). The corrected fail count (~20) is approximate. Any remediation work on this page must be preceded by correcting the check report per the critical review's issue list.

### audio-and-vision-pipelines: F-04 withdrawal confirmed correct
The critical review confirmed that F-04 (internal contradiction fix) was a false positive — the Warning block at the cited location already explicitly addresses the 2-GPU requirement, resolving the apparent tension. The WITHDRAWN status is correct and should not be re-opened.

### Cross-tab broken link pattern
Both `ai-inference-operations` and `diffusion-pipeline-setup` link to `/v2/gateways/resources/technical/orchestrator-offerings`, which does not exist in docs.json. This is the only confirmed broken cross-tab link in the group. A systematic audit of all cross-tab links in this group is recommended before the veracity pass begins — the same link appearing in two pages suggests it may have been copied from a common template.

---

## 6. Learnings for Future Batches

### L-NEW-1: `status: published` is a wrong-enum error — cite the enum violation, not §1.8
Multiple check reports cited §1.8 as the basis for `status: published` violations, stating "`status: published` requires `veracityStatus: verified`." That rule does not exist. §1.8 governs `status: current` + `veracityStatus` coherence only. `status: published` fails check 1.2 as a wrong-enum value — valid values are `current` and `draft`. Future reports must cite: "`status: published` is not a valid enum value. Valid values: `current`, `draft`. Additionally, `veracityStatus` is absent — separate check 1.8 issue."

### L-NEW-2: Em-dashes are not check 2.4 violations (P62)
Seven of nine reports in this batch incorrectly classified em-dashes as check 2.4 (banned constructions) FAILs. Check 2.4 covers only: `not [X]` as primary statement, `rather than`, `if [condition]` in body prose, `can/may [verb]` in value claims, `That means`/`This shows`, `This page [verb]`. Em-dashes fail check 1.11 (description) or check 3.7 (heading/visible text). Include an explicit P62 reminder at the start of check 2.4 in all future check instructions.

### L-NEW-3: Accordion titles are visible text — P30 applies
Check agents did not consistently flag em-dashes in Accordion titles as P30 violations. Accordion titles render as clickable heading text. P30 applies to all visible text including component props: Accordion titles, CardGroup card titles, Tab labels, Step titles, Callout headings. Future check instructions must include component props in the P30/em-dash scan scope.

### L-NEW-4: Self-correction propagation must update ALL locations before closing (P17/P28)
The pattern of "self-correction in the scan section but FAIL still in the check table" appeared in check 2.4 across four separate pages in this batch. Future check instructions must include a mandatory propagation checklist before closing each category: "If any result in this category was self-corrected, verify: (a) Result column updated, (b) category verdict count updated, (c) Verdict fail count updated, (d) Verdict ID list updated."

### L-NEW-5: `purpose: guide` is a high-frequency wrong-field error in this section
`guide` appears as a `purpose` value on 3 of 9 pages. `guide` is a `pageType` value. Because the two fields are adjacent in frontmatter, a visual scan can miss this. Future checkers must treat `purpose: guide` as a known high-frequency error and explicitly verify it as a cross-field check.

### L-NEW-6: Pipeline count figures require cross-page consistency verification
When a page states a total count of pipeline types or any enumerated set, that count must be verified against at least one other authoritative page in the same group. workload-options vs ai-inference-operations is the most visible example in this batch (nine vs ten). The same discipline applies to any page asserting a total count: model types, reward mechanisms, fee tiers, etc.

### L-NEW-7: VRAM figure format identifies the canonical source candidate
Flat VRAM figures (e.g. "12 GB") are less reliable than range/warm/peak figures (e.g. "4–6 GB warm, ~12–24 GB peak"). When a page uses range/warm/peak format, flag it as the candidate canonical source for that model's VRAM requirements in the batch. Flat-figure pages in the same batch should be noted as candidates for alignment to the more precise source, not treated as independent factual sources.

### L-NEW-8: `## Related` vs `## Related pages` vs `## Related Pages` — P53/P55 capitalisation rule
The batch encountered two variants: `## Related` (one word) and `## Related pages` (lowercase p). Critical reviews determined:
- `## Related Pages` (exact): P53 total exemption — no row in heading score table
- `## Related pages` (lowercase p): P16 total exemption should still apply (functional equivalence); if capitalisation is flagged, it belongs as an INFO note, not a scored row
- `## Related` (no "Pages"): NOT exempt — OK-tier per Frameworks.mdx §4.1, scored normally (not a check 3.2 FAIL)
Encode this distinction in the pre-check instructions for heading score tables.

### L-NEW-9: Warning blocks that resolve apparent contradictions must be read before flagging
`audio-and-vision-pipelines` received a false positive F-04 finding because the checker identified an apparent contradiction without reading the adjacent Warning block that explicitly resolves it. Before flagging an apparent content contradiction as a veracity issue, read all surrounding context: Warning blocks, Callouts, inline notes. A warning block that addresses the contradiction is resolution, not additional evidence of confusion.

### L-NEW-10: Dead import detection (check 5.10) must include component props scan
Dead imports were caught in this batch. To prevent false negatives: search the full page body for the imported component name — not just top-level JSX, but also component props: Card `href` and `title` props, Accordion `title` props, Step `title` props, all string values where a component name might appear. Short component names (e.g. `LinkArrow`) are easy to overlook in long pages.

### L-NEW-11: DO NOT USE AS-IS rating requires report correction before remediation
`realtime-ai-setup` received a "DO NOT USE AS-IS" rating — the only such rating in this batch. This means the check report contains systematic errors (false positives, unreconciled Result columns) that make it unsafe as a basis for remediation work. Future process rule: if a critical review rates a check report "DO NOT USE AS-IS," the check report must be corrected per the critical review's issue list before any remediation work is applied to the target page. Remediation based on a DO NOT USE AS-IS report risks introducing false fixes.

### L-NEW-12: Verify banned words in Accordion body content — not just page-level body prose
`ai-inference-operations` had a banned word (`Significantly`) in an Accordion body at line 215. The check report self-corrected check 2.2 to PASS without verifying this. The critical review confirmed the word is present. Accordion bodies, Tab content, and other nested component text must be included in the banned word scan scope — they render as visible page text.

---

*Generated by summary index agent — 2026-03-24 — learnings P1–P77 applied*
