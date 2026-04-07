# Guides Section Rollup — `v2/orchestrators/guides/`

**Generated:** 2026-03-24
**Rollup agent:** Claude Code (guides-level rollup summary agent)
**Learnings applied:** P1–P96
**Subfolders covered:** 10
**Total pages covered:** 50 (44 active + 6 stubs/orphans)
**Source:** 10 subfolder summaries (all 2026-03-24)

---

## 1. Subfolder Status Table

| Subfolder | Page count | Fail range | Median fails | Blocking decisions (count) | Critical findings |
|---|---|---|---|---|---|
| `advanced-operations` | 5 | 22–33 | 22 | 6 | Factual RTMP port error; dep-guide orphan; structural orphan in wrong directory |
| `ai-and-job-workloads` | 9 | 18–26 | 23 | 9 | Broken cross-tab link (`/v2/gateways/resources/technical/orchestrator-offerings`); VRAM inconsistencies across 6 pages; realtime-ai-setup check report rated DO NOT USE AS-IS |
| `config-and-optimisation` | 4 | 15–17 | 16 | 4 | `status: current` + open FACT CHECK flags on reward-call-tuning (P39 incoherence); VRAM table duplicated between two pages |
| `deployment-details` | 6 | 22–27 | 24 | 13 | Dual docs.json entry for join-a-pool / new-join-a-pool; `pageType: overview` type-confusion on section entry page; 4 broken internal links; RTX 2060 confirmed factual error |
| `monitoring-and-tooling` | 4 | 16–25 | 20 | 13 | Self-link navigation loop on metrics-and-alerting; Prometheus metric names unverified from v1 docs; Livepeer Forum confirmed offline |
| `operator-considerations` | 4 | ~22–25 | 24 | 7 | Corrupt prefix bytes in operator-rationale (CRITICAL render risk); 4 broken internal links in business-case |
| `payments-and-pricing` | 2 | 17–18 | 17.5 | 3 | Verbatim content duplication across both pages; nav group mismatch (files not in any `payments-and-pricing` nav group) |
| `roadmap-and-funding` | 2 | 23–24 | 23.5 | 5 | Both pages are stubs in the publishable lane with visible placeholder Note callouts; no content dependency owners named |
| `staking-and-rewards` | 4 | 15–26 | 22 | 7 | Broken cross-tab link (`/v2/lpt/delegation`); v1 image paths on network-participation (HIGH render risk); LIP-89 figure shared across 2 pages unverified |
| `tutorials` | 10 | 18–41 (stubs: 34–37) | 19 | 7 | byoc-cpu-tutorial is a navigation orphan (gateways tab only); 3 stubs are structural orphans with gateway equivalents already published; P39 atomicity violation on all 7 active tutorials |

**Guides section overall:** 50 pages. No page is in a publishable state. Fail range: 15–41 across active pages (stubs: 34–37). Section-level median approximately 21–22 fails per page.

---

## 2. Cross-Subfolder Patterns

Patterns appearing across 4 or more subfolders. These are systemic section-level issues, not per-subfolder problems.

---

### PATTERN-1: Missing required frontmatter fields — universal across all 10 subfolders

**Name:** Absent `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`

**Subfolders affected:** All 10 (advanced-operations, ai-and-job-workloads, config-and-optimisation, deployment-details, monitoring-and-tooling, operator-considerations, payments-and-pricing, roadmap-and-funding, staking-and-rewards, tutorials)

**Root cause:** The authoring template used during the content pass did not include these five fields. Every page in the section was authored without them. This is a template-level omission, not per-author error.

**Section-level fix pattern:** A single batch frontmatter pass across all 50 pages adds the five missing fields. The values differ per page and require human confirmation before applying (P51). `veracityStatus: unverified` is the only field that does not require editorial judgement — it is the only honest value for every page given the volume of open REVIEW/FACT CHECK flags and unverified claims across the section. All other fields (`complexity`, `lifecycleStage`, `industry`, `niche`) need per-page decisions that can be batched once the decision matrix is confirmed. The P39 constraint applies: `veracityStatus: unverified` and `status: current` → `status: draft` must be applied atomically in the same operation (confirmed as a template-level defect in the tutorials summary — all 7 tutorials split these into two separate fix items, which creates a transient incoherent state).

---

### PATTERN-2: `purpose: guide` wrong-field error — 7 subfolders

**Name:** Valid `pageType` value placed in `purpose` field (P37 type-b error)

**Subfolders affected:** ai-and-job-workloads (3 pages), deployment-details (4 pages), monitoring-and-tooling (3 pages), operator-considerations (3 pages), staking-and-rewards (3 pages), advanced-operations (1 page), payments-and-pricing (implicit via wrong-field pattern)

**Root cause:** `guide` is a valid 7-type canonical `pageType` value. It is not a valid `purpose` value. The 15-value purpose set contains no `guide` entry. Pages authored from a common template — or copy-pasted from early content — carried `purpose: guide` as a default. It propagated across at least 7 subfolders.

**Section-level fix pattern:** A search for `purpose: guide` across all files in `v2/orchestrators/guides/` surfaces all instances in one operation. The replacement value differs per page (`operate`, `configure`, `troubleshoot`, `explain`, `start`, `evaluate`) — each requires human confirmation before applying. This cannot be batch-replaced with a single value, but instances can be inventoried and confirmation sought in one pass. Blocking decisions for purpose values are already logged in the relevant subfolder summaries.

---

### PATTERN-3: `status: published` / invalid status value — 6 subfolders

**Name:** `status: published` is not a valid enum value (valid values: `current`, `draft`)

**Subfolders affected:** advanced-operations, ai-and-job-workloads (6 of 9 pages), deployment-details (N/A — `status: current` is the pattern here), monitoring-and-tooling (all 4 pages), staking-and-rewards (3 of 4 pages), payments-and-pricing (payments.mdx)

**Root cause:** `published` was used as if it were a valid `status` value. It is not in the enum. Valid values are `current` and `draft` only. Multiple check reports across the section incorrectly cited §1.8 as the basis for this violation, stating "`status: published` requires `veracityStatus: verified`." That rule does not exist. §1.8 governs `status: current` + `veracityStatus` coherence. The `status: published` violation is a wrong-enum error under check 1.2.

**Section-level fix pattern:** Replace all instances of `status: published` with `status: draft` as a single search-and-replace pass. This does not require per-page human decisions — `draft` is the only correct value for unverified pre-gate content. Paired fix: add `veracityStatus: unverified` (atomic with status change per P39). Distinct but related: five pages in deployment-details carry `status: current` without `veracityStatus` — the fix is the same (`status: draft` + `veracityStatus: unverified`) but the violation is P39 incoherence, not a wrong-enum error.

---

### PATTERN-4: Em-dashes in visible text — 8 subfolders

**Name:** Em-dash prohibition violations in description fields, headings, Accordion titles, and body prose (P30)

**Subfolders affected:** advanced-operations, ai-and-job-workloads (all 9 pages — most severe: all 10 Accordion titles in ai-inference-operations), config-and-optimisation, deployment-details, monitoring-and-tooling (all 4 descriptions), operator-considerations, staking-and-rewards (all 4 descriptions), tutorials

**Root cause:** Em-dashes appear in three distinct locations across the section: (1) frontmatter `description` fields — systematic across at least 6 subfolders; (2) H2/H3 headings — present in at least 5 subfolders; (3) body prose and component props (Accordion titles, CardGroup cards) — ai-and-job-workloads is the most severe case. The check pipeline misclassified em-dashes as check 2.4 (banned constructions) violations across most batches — P62 corrects this. Em-dashes fail check 1.11 (description), check 3.7 (heading/visible text), or as a standalone P30 finding in body prose and component props. They do NOT fail check 2.4. Critically, proposed fix text in multiple reports itself contained em-dashes (staking-and-rewards, deployment-details) — a failure mode documented in P67 and L-67.

**Section-level fix pattern:** A three-pass approach: (1) description fields — scan all `description:` values across the section; (2) H2/H3 heading text — scan all heading lines; (3) component props — Accordion `title=`, Card `title=`, Tab labels, Step titles. Each instance requires a specific fix (colon, semicolon, period, or restructure) — bulk replacement is not safe. All proposed replacement text must itself be verified clean of em-dashes before applying (P80/L-67).

---

### PATTERN-5: `{/* FACT CHECK: */}` non-canonical comment format — 8 subfolders

**Name:** Non-canonical inline flag format — `FACT CHECK:` instead of `{/* REVIEW: [claim] — [source] */}`

**Subfolders affected:** advanced-operations, ai-and-job-workloads, config-and-optimisation (all 4 pages), deployment-details, monitoring-and-tooling (all 4 pages), operator-considerations (all 4 pages), staking-and-rewards, tutorials (all 7 active tutorials)

**Root cause:** The canonical in-progress veracity flag format per checks.mdx §6.5 is `{/* REVIEW: [specific claim] — verify against [named source] before publishing */}`. The `{/* FACT CHECK: */}` format is non-canonical and fails check 6.5 regardless of content. Many instances also lack a named source or named SME contact, independently failing check 6.9 (open-ended research task with no concrete next step). The two failures are independent — a comment can fail both check 6.5 (format) and check 6.9 (no named source) simultaneously (P70).

**Section-level fix pattern:** A search for `FACT CHECK` across all MDX files in `v2/orchestrators/guides/` surfaces all instances. Conversion to `{/* REVIEW: [claim] — verify against [source]. [Name] to confirm. */}` format requires knowing the specific claim and a named source per instance — this cannot be fully automated but the inventory can be built mechanically. Named SME contacts from subfolder summaries: Rick (Prometheus metrics, Loki endpoint, NVENC caps, active set size, go-livepeer flags), Mehrdad (protocol parameters, reward gas costs), protocol data sources (Arbiscan, Livepeer Explorer).

---

### PATTERN-6: Overlong description fields — 7 subfolders

**Name:** `description` field exceeds 160-character limit (check 1.11)

**Subfolders affected:** advanced-operations (4 of 5 pages), ai-and-job-workloads (multiple), config-and-optimisation (2 of 4 pages), deployment-details (4 of 6 pages), monitoring-and-tooling (all 4 pages — range 164–201 chars), payments-and-pricing (payments.mdx at 192 chars), staking-and-rewards (3 of 4 pages — range 192–214 chars), tutorials (full-ai-pipeline-tutorial at 192 chars)

**Root cause:** Descriptions were written without the 160-character constraint in mind. Many descriptions also contain em-dashes (PATTERN-4 overlap) and self-referential openers ("A guide to...", "Use this page to...").

**Section-level fix pattern:** A single character-count audit across all description fields identifies all violations. Proposed trimmed replacements exist in most per-page check reports. Replacements must be: (1) ≤160 characters; (2) em-dash-free; (3) subject-first, not self-referential; (4) independently verified for char count before applying (L-80: check reports in deployment-details batch had unverified char counts in proposed fixes).

---

### PATTERN-7: Heading quality failures — 9 subfolders

**Name:** Multiple headings per page scoring below 20/25 on the five-dimension rubric (check 3.1)

**Subfolders affected:** advanced-operations, ai-and-job-workloads, config-and-optimisation, deployment-details (33 failing headings across 6 pages), monitoring-and-tooling, operator-considerations, payments-and-pricing, staking-and-rewards (24 failing headings across 4 pages), tutorials

**Root cause:** Shared failure modes across the section: (a) question-form H2/H3 headings — prohibited per CLAUDE.md Voice; (b) reader-perspective retrospective headings (`## What happened`, `## Why delegators matter`); (c) generic structural labels (`## Architecture`, `## Setup`, `## Summary`, `## Next Steps`); (d) em-dash contrast constructions in headings (`## Calling Reward() — your options`); (e) verbose parenthetical headings. Note: `## Related` is in the OK tier per checks.mdx §3.2 and must not be classified as a check 3.2 violation (P53/L-69) — it may fail check 3.1 on score independently.

**Section-level fix pattern:** Headings cannot be batch-fixed without per-heading review — the fix requires knowing the domain concept the heading should name. Specific proposed renames exist in all subfolder summaries. A reliable pre-pass: scan for (1) headings ending in `?`; (2) headings beginning with `What`, `Why`, `How`, `When`; (3) headings matching the Avoid-tier list (`Summary`, `Next Steps`, `Frequently Asked Questions`, `Overview`, `Introduction`); (4) headings containing ` — `. All instances of these patterns can be inventoried mechanically; the renames require per-heading editorial decisions.

---

### PATTERN-8: Heading quality check — `## Related` false positives — 5 subfolders

**Name:** `## Related` incorrectly flagged as check 3.2 violation across multiple batches

**Subfolders affected:** ai-and-job-workloads, config-and-optimisation (all 4 pages use `## Related pages` with inconsistent capitalisation), staking-and-rewards (reward-mechanics, network-participation), payments-and-pricing (payments.mdx), tutorials (multiple pages)

**Root cause:** Check reports repeatedly flag `## Related` or `## Related pages` as check 3.2 violations. `Related` is in the OK tier per checks.mdx §3.2. `## Related Pages` (exact capitalisation) is fully exempt per P53/P55. `## Related pages` (lowercase p) should also be treated as functionally equivalent (P16). None of these forms fail check 3.2. They may independently fail check 3.1 (scored at 11/25 on the rubric). The confusion persists because the distinction between check 3.1 (rubric score) and check 3.2 (tier classification) is not consistently applied.

**Section-level fix pattern:** Add a standing rule to all check instructions: "`## Related`, `## Related Pages`, and `## Related pages` all pass check 3.2. If they fail check 3.1 (score below 20/25), note the score but do not raise a check 3.2 finding." This is a process fix, not a content fix. The capitalisation should be standardised to `## Related Pages` across the section as a low-priority hygiene pass.

---

### PATTERN-9: Self-correction propagation failures — 6 subfolders

**Name:** Self-corrections made in narrative sections not propagated to check table Result column, category verdict count, and Verdict ID list (P17/P28)

**Subfolders affected:** ai-and-job-workloads (most severe — present on 7 of 9 check reports), advanced-operations, config-and-optimisation, deployment-details, monitoring-and-tooling, staking-and-rewards

**Root cause:** The check process allows self-correction in narrative scan sections (Banned Construction Scan, link verification notes). When a self-correction changes a result from FAIL to PASS (or vice versa), it must be propagated to: (a) the Result column in the check table; (b) the category verdict count; (c) the Verdict ID list. Across this section, all three propagation steps were consistently missed after narrative-section corrections. The most frequent trigger: em-dashes self-corrected from check 2.4 FAIL to PASS (correctly per P62) without propagating the correction to the check table.

**Section-level fix pattern:** Process fix — add a mandatory propagation checklist before closing each category in the check report: "If any result was self-corrected in this category, verify: (a) Result column updated; (b) category verdict count updated; (c) Verdict fail count updated; (d) Verdict ID list updated." This is documented in L-NEW-4 (ai-and-job-workloads) and is a recurring theme across all critical reviews in the section.

---

## 3. Critical Blocking Decisions (Guides-Level)

Decisions that block multiple subfolders or structurally affect the guides section. Per-subfolder BDs are in individual summaries.

| BD-ID | Decision | Subfolders affected | Blocks |
|---|---|---|---|
| BD-GUIDES-01 | **VRAM canonical source.** VRAM figures are inconsistent across at least 4 subfolders: ai-and-job-workloads (SAM2: 6 GB vs 12 GB vs 4–6 GB warm; SDXL Lightning: 12–14 GB vs 12–18 GB; Whisper: 3 GB vs 2–3 GB warm), config-and-optimisation (VRAM table duplicated in capacity-planning and ai-model-management), deployment-details (RTX 2060 confirmed 6 GB base vs stated 8–12 GB), operator-considerations (requirements.mdx is the canonical reference per REVIEW-REGISTRY but has unverified figures). SME must confirm canonical values. Once confirmed: declare one page per model as the canonical VRAM source (model-demand-reference is the candidate given range/warm/peak format); all other pages align or link. | ai-and-job-workloads, config-and-optimisation, deployment-details, operator-considerations | `veracityStatus: verified` on any page with VRAM figures — currently blocks all four subfolders |
| BD-GUIDES-02 | **Broken cross-tab link to `/v2/gateways/resources/technical/orchestrator-offerings`.** This path is absent from docs.json and appears on two pages in ai-and-job-workloads (ai-inference-operations, diffusion-pipeline-setup). The same path appearing on two pages suggests it was copied from a common template. Options: (1) create the target page and register in docs.json; (2) redirect to an existing equivalent gateways resource; (3) remove the link. Requires gateways tab IA input. | ai-and-job-workloads | Publication of both affected pages (CRITICAL). Cross-tab link integrity |
| BD-GUIDES-03 | **H3 heading scope for check 3.1 threshold.** Whether H3 headings are in scope for the 20/25 scoring threshold has produced inconsistent BD entries in staking-and-rewards and deployment-details. This must be resolved once at the section level and recorded in decision-registry.md. Currently blocking: reward-mechanics F-12 (staking-and-rewards) and several headings in deployment-details. A per-page BD for the same question cannot be efficient at scale across 50 pages. | staking-and-rewards, deployment-details (and likely others) | Heading remediation scope; consistent check 3.1 application across the section |
| BD-GUIDES-04 | **`status: current` + absent `veracityStatus` — whether to demote all affected pages to `status: draft` now or wait for veracity pass completion.** At least 12 pages across 5 subfolders carry `status: current` without `veracityStatus`. The P39 constraint requires `status: current` to be paired with `veracityStatus: verified`. Options: (A) demote all to `status: draft` + `veracityStatus: unverified` immediately as a batch; (B) preserve `status: current` for pages closer to veracity completion and apply the fix per-page as the veracity pass proceeds. Option A is safer and prevents the prohibited combination from persisting. Option B requires per-page tracking. | deployment-details, operator-considerations, tutorials, config-and-optimisation (reward-call-tuning), staking-and-rewards | P39 compliance across the section; accurate status representation for all affected pages |
| BD-GUIDES-05 | **Livepeer Forum URL confirmed offline (March 2026).** References to the Livepeer Forum appear in monitoring-and-tooling (metrics-and-alerting, operator-toolbox) and potentially in other subfolders via FACT CHECK comments. Decision: remove all Livepeer Forum references section-wide, or replace with a confirmed alternative community link. A section-wide search for `forum.livepeer.org` (or equivalent) should be run before deciding how many pages are affected. | monitoring-and-tooling (confirmed); potentially others | Checks 6.1, 6.8, 8.2 on all affected pages |
| BD-GUIDES-06 | **`purpose: guide` replacement values — confirm the decision matrix before any batch application.** At least 14 pages across 7 subfolders have `purpose: guide`. The replacement value differs per page and requires per-page human confirmation. Options: produce a decision matrix (page, proposed purpose, alternative) and get a single batch sign-off, or confirm per-subfolder. | ai-and-job-workloads, deployment-details, monitoring-and-tooling, operator-considerations, staking-and-rewards, advanced-operations, payments-and-pricing | All check 1.4, 4.7, 5.7 fixes on affected pages |
| BD-GUIDES-07 | **Navigation orphans and stubs disposition — tutorials.** Four files in the tutorials subfolder are confirmed orphans: byoc-cpu-tutorial.mdx (registered under gateways only); tutorial-byoc-cpu-pipeline stub, tutorial-go-production stub, tutorial-offchain-transcoding-test stub (all absent from docs.json). Gateway equivalents for all three stubs already exist. Until disposition is decided, no content work on any of these four files is productive. | tutorials | All tutorials orphan remediation; docs.json integrity |
| BD-GUIDES-08 | **`join-a-pool.mdx` deprecation — session log decision not yet registered in decision-registry.md.** The 2026-03-24 session log identifies `new-join-a-pool.mdx` as canonical and `join-a-pool.mdx` as the page to deprecate. Per CLAUDE.md: "Decisions made in chat that are not written to the decision registry do not exist." This decision must be written to decision-registry.md before any execution. Until then, both pages remain in docs.json as duplicate sidebar entries. | deployment-details | All `join-a-pool`/`new-join-a-pool` remediation; docs.json duplicate resolution |

---

## 4. Prioritised Recommendations (Guides-Level)

Recommendations addressing cross-subfolder patterns or section-level structure. Per-page fixes are in subfolder summaries.

### CRITICAL — blocks publication of 2+ subfolders

**GR-CRIT-1: Resolve broken cross-tab link — BD-GUIDES-02**
`/v2/gateways/resources/technical/orchestrator-offerings` appears on two pages in ai-and-job-workloads and does not exist in docs.json. A section-wide search for this path should be run to confirm it does not appear elsewhere. Resolve BD-GUIDES-02 before any publication work on ai-and-job-workloads.

**GR-CRIT-2: Register join-a-pool deprecation decision — BD-GUIDES-08**
Write the session-log decision to decision-registry.md immediately. Until registered, the duplicate docs.json entry persists and all downstream deployment-details work on this page is blocked.

**GR-CRIT-3: Delete corrupt prefix bytes in operator-rationale.mdx**
Lines 1–2 (`glrw`, `pwrfs`) render as visible text before the frontmatter delimiter. This is a file integrity failure, not a content issue. The file should not be parsed for any purpose until lines 1–2 are removed. Action does not require a BD — the fix is unambiguous.

**GR-CRIT-4: Fix RTX 2060 base VRAM factual error — dual-mode-configuration**
NVIDIA datasheet confirms RTX 2060 base model is 6 GB. The page states 8–12 GB. This is an unambiguous factual error with a primary source. Fix does not require SME gating. Cross-check against setup-options VRAM table for consistency (BD-GUIDES-01 scope).

### HIGH — blocks `veracityStatus: verified` across 2+ subfolders

**GR-HIGH-1: SME VRAM verification — BD-GUIDES-01**
VRAM figures are inconsistent across at least 4 subfolders. No page in any affected subfolder can reach `veracityStatus: verified` until canonical figures are confirmed. Coordinate SME review (Rick, ai-runner team) on the model-demand-reference range/warm/peak values as the proposed canonical source. Run as a single verification session covering all models with inconsistencies documented across the section.

**GR-HIGH-2: Section-wide `status: published` replacement — PATTERN-3**
Replace all instances of `status: published` with `status: draft` across all 50 pages in one search-and-replace pass. This is the lowest-risk, highest-return single operation available — it corrects a wrong-enum value on approximately 15–20 pages with no editorial judgement required. Pair with `veracityStatus: unverified` addition (atomic per P39/BD-GUIDES-04).

**GR-HIGH-3: Section-wide `FACT CHECK` comment conversion — PATTERN-5**
Inventory all `{/* FACT CHECK: */}` comments across all 50 pages. Convert to `{/* REVIEW: [claim] — verify against [source]. [Name] to confirm. */}` format. This satisfies check 6.5 compliance across the section and makes all open veracity tasks executable. Named SME contacts: Rick (go-livepeer source, Prometheus metrics, NVENC, Loki), Mehrdad (protocol parameters), protocol data (Arbiscan, Livepeer Explorer). Approximately 50+ instances across the section based on subfolder summary counts.

**GR-HIGH-4: Resolve Livepeer Forum offline status section-wide — BD-GUIDES-05**
Run a section-wide search for all Forum URL references. Remove or replace all instances in one pass once BD-GUIDES-05 decision is made. monitoring-and-tooling has 2 confirmed pages; total count across 50 pages is unknown until the search runs.

**GR-HIGH-5: Decide `purpose: guide` replacement matrix — BD-GUIDES-06**
Produce a single decision table: one row per affected page, showing current `purpose: guide` and proposed replacement value from the subfolder summaries. Request batch sign-off in one session. This unblocks check 1.4, 4.7, 5.7 fixes on approximately 14 pages across 7 subfolders. More efficient than per-page sign-off.

**GR-HIGH-6: Resolve H3 heading scope for check 3.1 — BD-GUIDES-03**
Make one decision, register in decision-registry.md, and apply consistently across the section. This eliminates a recurring per-page BD from future batches.

### MEDIUM — structural coherence (navigation, cross-links, orphans)

**GR-MED-1: Decide fate of all 4 tutorials orphans — BD-GUIDES-07**
byoc-cpu-tutorial, tutorial-byoc-cpu-pipeline, tutorial-go-production, and tutorial-offchain-transcoding-test. Gateway equivalents for the three stubs already exist. Resolving all four in one decision session is more efficient than individual BDs. Likely outcome: 3 deletions + 1 rewrite-for-orchestrators decision.

**GR-MED-2: Section-wide cross-tab link audit**
Multiple subfolders note absent or broken cross-tab links: staking-and-rewards (`/v2/lpt/delegation` 404), tutorials (missing LPT cross-tab in zero-to-first-reward), ai-and-job-workloads (broken gateways link). A systematic check of all cross-tab links across 50 pages identifies broken links before the veracity pass begins and prevents the same link appearing on multiple pages from being corrected only on one (the pattern seen with `/v2/gateways/resources/technical/orchestrator-offerings`).

**GR-MED-3: roadmap-and-funding publishable lane decision — BD-RFG-01**
Both pages are stubs in the publishable lane. The Roadmap and Funding section also has no orientation page routing readers to it. Either move stubs to `_workspace/` or hold a minimal shell. This decision unblocks all structural checks on both pages and removes the visible placeholder Note callouts.

**GR-MED-4: payments-and-pricing nav group mismatch — BD-02 (payments-and-pricing)**
Both `payments-and-pricing` files are registered in the "Staking and Earning" nav group in docs.json, not in any `payments-and-pricing` group. This is an IA artefact. Decide whether to move files or create the correct nav group.

**GR-MED-5: Section-wide v1 image path audit**
network-participation (staking-and-rewards) uses `/v1/images/` paths for three images. A section-wide search for `/v1/images/` confirms whether this pattern exists elsewhere and prevents silent 404s across the section.

### LOW — cosmetic and hygiene (batchable)

**GR-LOW-1: Standardise `## Related pages` capitalisation to `## Related Pages`**
Present as `## Related pages` (lowercase p) on at least 4 subfolders (config-and-optimisation all 4 pages, payments-and-pricing, others). Standardise to `## Related Pages` across all 50 pages as a single search-and-replace.

**GR-LOW-2: Section-wide dead import scan**
Dead imports (`LinkArrow`, `BorderedBox`, `StyledTable`/`TableRow`/`TableCell`, `ScrollableDiagram`, `CenteredContainer`, `Quote`) were confirmed in at least 6 subfolders. A grep across all MDX files for import declarations followed by a usage scan removes all dead imports in one pass. Dead imports cause render failures or lint errors.

**GR-LOW-3: `keywords` field hygiene**
Generic keywords (`livepeer`, `orchestrator`, `monitoring`, `metrics`, `tools`) appear across at least 4 subfolders. Searcher-intent-aligned keywords require content-level knowledge to set correctly. Defer until content pass is complete; flag as a layout pass item.

---

## 5. Navigation and Structure Notes

**Total page count for guides section:** 50 (44 active pages registered in docs.json + 6 orphans/stubs not in docs.json under orchestrators)

**Navigation orphans identified:**
- `byoc-cpu-tutorial.mdx` — physically in tutorials subfolder, registered in gateways tab only (docs.json line 2589). Absent from orchestrators tutorials group. CRITICAL.
- `dep-guide.mdx` (advanced-operations) — `dep-` prefixed, absent from docs.json, all 11 internal links broken. Should be in `x-deprecated/`.
- `stubs/tutorial-byoc-cpu-pipeline.mdx` — not in docs.json under any orchestrators path. Gateway equivalent exists.
- `stubs/tutorial-go-production.mdx` — not in docs.json under any orchestrators path. Gateway equivalent exists.
- `stubs/tutorial-offchain-transcoding-test.mdx` — not in docs.json under any orchestrators path. Gateway equivalent exists.
- `join-a-pool.mdx` — duplicate in docs.json alongside `new-join-a-pool.mdx` under identical sidebar title. One must be deprecated. Decision not yet in decision-registry.md.

**Cross-tab link gaps:**
- Broken: `/v2/gateways/resources/technical/orchestrator-offerings` (ai-and-job-workloads — confirmed absent from docs.json; appears on 2 pages)
- Broken: `/v2/lpt/delegation` (staking-and-rewards/delegate-operations — 404; no index.mdx in directory)
- Missing: cross-tab link to LPT/Delegators tab at LPT acquisition step in tutorials/zero-to-first-reward
- No confirmed cross-tab links from roadmap-and-funding, config-and-optimisation (except pricing-strategy), or most operator-considerations pages

**Sections with no routing entry page:**
- `roadmap-and-funding` — no orientation page in docs.json routing readers to the two content pages. Both pages are stubs.
- The guides section as a whole: whether the portal/navigator adequately routes into all 10 subfolders is a tab-level IA question, not addressed here.

**Dead-end pages:**
- `metrics-and-alerting.mdx` — self-link at line 86 creates a navigation dead loop. The page links to itself as if linking to a separate reference page.
- Both roadmap-and-funding stubs — no CardGroups, no links, no Related Pages. Dead ends for any reader who arrives.
- `dep-guide.mdx` (advanced-operations) — all 11 internal links broken; absent from docs.json.

---

## 6. Remediation Sequencing

Sequenced work packages with preconditions. Packages within the same tier can run in parallel.

**Package 0: Immediate no-dependency fixes (run now, no BD required)**
- Remove corrupt prefix bytes from `operator-rationale.mdx` lines 1–2 (GR-CRIT-3)
- Fix RTX 2060 base VRAM factual error in `dual-mode-configuration.mdx` (GR-CRIT-4)
- Fix RTMP port error in `gateway-orchestrator-interface.mdx` (`:7935` → `:1935` for RTMP)
- Standardise `## Related pages` → `## Related Pages` section-wide (GR-LOW-1)
- Fix `purpose: evaluation` → `purpose: evaluate` on operator-considerations pages (three pages, one-line fix each)
- Fix `orchestrator-profiles` sidebarTitle: `Operator Profiles` → `Orchestrator Profiles`
- Fix description separator ` - ` → `: ` on roadmap-and-funding pages
*Precondition:* None. These are unambiguous mechanical fixes.

**Package 1: Decision registration (unblocks everything else)**
- Register `join-a-pool.mdx` deprecation decision in decision-registry.md (BD-GUIDES-08)
- Register H3 heading scope decision in decision-registry.md (BD-GUIDES-03)
*Precondition:* None — these are decisions, not content changes.

**Package 2: Status field batch pass (parallel with Package 1)**
- Replace all `status: published` with `status: draft` across all 50 pages (GR-HIGH-2 / PATTERN-3)
- Resolve BD-GUIDES-04 timing decision (demote `status: current` → `status: draft` now or per-page)
- Apply `veracityStatus: unverified` atomically with status changes (P39 constraint)
*Precondition:* BD-GUIDES-04 decision confirmed.

**Package 3: Purpose field decision matrix (parallel with Package 2)**
- Produce purpose-field decision matrix (14+ pages with `purpose: guide`) — one table for batch sign-off (GR-HIGH-5 / BD-GUIDES-06)
- After sign-off: apply all `purpose: guide` replacements across the section in one pass
*Precondition:* Human sign-off on the decision matrix.

**Package 4: Frontmatter completion batch (depends on Packages 2 and 3)**
- Add missing frontmatter fields (`complexity`, `lifecycleStage`, `industry`, `niche`) to all 50 pages
- This requires per-page proposed values, many of which already exist in subfolder summaries
- Produce a single confirmation table and get batch sign-off
*Precondition:* Packages 2 and 3 complete (status and purpose fields settled); human sign-off on values.

**Package 5: Critical navigation fixes (can run in parallel with Packages 2–4)**
- Execute join-a-pool deprecation per registered decision (BD-GUIDES-08 → Package 1 precondition)
- Resolve tutorials orphan dispositions (BD-GUIDES-07): 4 files, likely 3 deletions + 1 decision
- Resolve dep-guide.mdx disposition (BD-DD-02 from advanced-operations summary)
- Fix 4 broken internal links in orchestrator-transcoder-setup (typo fix is immediate; 3 require BD-DD-09)
- Fix broken cross-tab link BD-GUIDES-02 (requires gateways tab input)
*Precondition:* Package 1 for join-a-pool; other BDs resolved per subfolder summaries.

**Package 6: FACT CHECK conversion and REVIEW flag pass (depends on Package 4)**
- Section-wide inventory of all `FACT CHECK` comments (GR-HIGH-3)
- Convert all to `{/* REVIEW: [claim] — [source]. [Name] to confirm. */}` format
- Add inline REVIEW flags to unverified claims currently lacking any flag (RC-6 in operator-considerations, RC-5 in deployment-details, RC-4 in staking-and-rewards)
- Resolve Livepeer Forum offline status section-wide (BD-GUIDES-05 / GR-HIGH-4)
*Precondition:* Package 4 complete (frontmatter honest — `veracityStatus: unverified` set); named SME contacts confirmed per subfolder.

**Package 7: SME verification pass (depends on Package 6)**
- VRAM canonical values confirmed (BD-GUIDES-01): SME review of model-demand-reference figures
- Prometheus metric names verified against `go-livepeer/monitor/census.go` (BD-M07)
- Active set size "top 100" confirmed (BD-M10)
- go-livepeer CLI flags verified against current release (across deployment-details and tutorials)
- Titan Node URLs verified (join-a-pool / new-join-a-pool — if retained after Package 5)
- Loki endpoint reachability confirmed (BD-4 from advanced-operations)
*Precondition:* Package 6 complete (all veracity flags are in canonical REVIEW format with named sources, making the SME pass executable).

**Package 8: Em-dash, heading, and voice remediation (parallel with Package 7, independent)**
- Em-dash three-pass: descriptions, headings, component props (PATTERN-4)
- Heading renames: prioritise Avoid-tier first (`## Summary`, `## Next Steps`, `## Frequently Asked Questions`), then sub-20/25 headings
- Remove banned words and banned constructions per subfolder summaries
*Precondition:* Package 4 complete (frontmatter settled so pageType/purpose are correct for heading template rules). Heading renames require individual sign-off — batch by subfolder.

**Package 9: Layout and component hygiene (lowest dependency)**
- Dead import removal section-wide (GR-LOW-2)
- `keywords` field updates (GR-LOW-3) — defer to content completion
- Overlong descriptions trimmed to ≤160 chars (PATTERN-6) — draft replacements from subfolder summaries
- `Related pages` → `Related Pages` capitalisation (GR-LOW-1 — already in Package 0)
- Dead `Quote` import in setup-options; pin Docker `master`/`latest` tags
*Precondition:* Package 8 (em-dash clean on descriptions reduces rework here).

**Package 10: veracityStatus promotion (final — sequential dependency on all prior packages)**
- Per-page `veracityStatus: unverified` → `veracityStatus: verified` once all REVIEW flags resolved and SME sign-off obtained
- Per-page `status: draft` → `status: current` once verified
*Precondition:* Package 7 complete for each page.

---

## 7. Proposed Learnings

The following patterns are genuinely new systemic errors observed at the rollup level that are not captured in P1–P96.

**P97: Section-wide link targets must be searched across all pages before logging as per-page issues**
Two pages in ai-and-job-workloads link to `/v2/gateways/resources/technical/orchestrator-offerings`. If that link were logged only as a per-page issue, fixing it on one page and not the other would leave a broken link. When a cross-tab or external link appears in a check report, a section-wide search for the same path should be run before logging it as a per-page finding. The section summary agent should always flag shared link targets for joint verification.

**P98: When every page in a section shares a structural failure, it is a template-level defect — not page-level errors**
The P39 atomicity violation appeared on all 7 active tutorial check reports. Missing frontmatter fields appeared on all 50 pages. The `purpose: guide` wrong-field error appeared on at least 14 pages across 7 subfolders. When a failure is present on every page of a batch or section, the root cause is in the authoring template or check report template — not in individual pages. The remediation must target the template, and the section summary should flag this explicitly so future batches do not repeat the same finding.

**P99: Orphan detection at the section level requires a docs.json audit, not just a per-page audit**
byoc-cpu-tutorial was physically filed in the orchestrators tutorials directory but registered only in the gateways tab. Per-page check reports detected this, but the impact (all content remediation blocked) is only visible at the section level. A section-level docs.json audit — listing every file in every subfolder and verifying each has a corresponding docs.json entry under its expected tab — should be run as a pre-pass before any content check work begins. This prevents the situation where substantial check work is done on a page that turns out to be a navigation orphan.

---

_Generated: 2026-03-24_
_Rollup agent: Claude Code (guides-level rollup summary agent)_
_Learnings applied: P1–P96_
_Subfolders: 10 | Pages: 50 | Source: 10 subfolder summaries_
