# Section Summary — `monitoring-and-tooling`

**Subfolder:** `v2/orchestrators/guides/monitoring-and-tooling/`
**Pages reviewed:** 4 (operator-toolbox, explorer-operations, metrics-and-alerting, troubleshooting)
**Summary date:** 2026-03-24
**Source documents:** Per-page check reports + critical review corrections (all four pages)
**Critical reviews applied:** P1–P54; corrected verdicts are ground truth for this summary

---

## 1. Overview Table

| Page | Verdict | Corrected fail count | Primary issues |
|---|---|---|---|
| `operator-toolbox.mdx` | NEEDS WORK | 19 | Missing 5 frontmatter fields; 5 open FACT CHECK comments; 3 weak headings; check 6.5 FAIL corrected by review |
| `explorer-operations.mdx` | NEEDS WORK | 16 | Missing 5 frontmatter fields; `purpose: guide` wrong-field error; 3 weak headings; 1 BORDERLINE `not [X]` construction (human review pending) |
| `metrics-and-alerting.mdx` | NEEDS WORK | 25 | Missing 5 frontmatter fields; `purpose: guide` wrong-field error; self-link to own page; Prometheus metric names unverified; 4 weak headings; cross-report duplication conflict |
| `troubleshooting.mdx` | NEEDS WORK | 21 | Missing 5 frontmatter fields; `purpose: guide` wrong-field error; 3 sub-threshold H3 headings; em-dash in body prose; 7 veracity fails; 2 BORDERLINE `not [X]` constructions |

**Critical review corrections applied:**
- `explorer-operations`: corrected from 19 raw fails to 16 (check 2.4 BORDERLINE downgraded, line 287 citation unverified, category 1 count corrected)
- `metrics-and-alerting`: corrected from 27 raw fails to 25 (checks 6.2 and 6.3 removed as NOT-TESTED, not confirmed FAILs)
- `operator-toolbox`: corrected from 18 raw fails to 19 (check 6.5 upgraded from PASS to FAIL — `{/* FACT CHECK */}` is not `{/* REVIEW: */}` format)
- `troubleshooting`: corrected from 24 raw fails to 21 (check 2.3 downgraded to BORDERLINE; check 3.6 downgraded to INFO; check 6.2 removed as NOT-TESTED)

---

## 2. Shared Root Causes

These findings appear on multiple pages. Fix once per-root-cause, not per-page.

**RC-1: Missing required frontmatter fields (all 4 pages)**
Every page in this subfolder is missing `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, and `niche`. All pages have `status: published` while `veracityStatus` is absent — this combination is incoherent per checks.mdx §1.8. Proposed values across the subfolder are consistent: `complexity: intermediate`, `lifecycleStage: operate` (or `troubleshoot` for troubleshooting.mdx). Fix as a single batch operation.

**RC-2: `purpose: guide` wrong-field error (3 pages: explorer-operations, metrics-and-alerting, troubleshooting)**
All three `pageType: guide` pages have `purpose: guide` — a wrong-field error (P37 type b: valid pageType value placed in the purpose field). `operator-toolbox` is the only page with a correct purpose value (`purpose: reference`). Proposed corrections: `purpose: operate` for explorer-operations and metrics-and-alerting; `purpose: troubleshoot` for troubleshooting. All require human sign-off before applying.

**RC-3: Description field overlength and em-dash (all 4 pages)**
Every description exceeds the 160-char limit (164, 186, 191, 201 chars respectively). Three of four contain em-dashes in the description field (P30). Proposed replacement descriptions have been drafted in each check report; all are under 160 chars and em-dash-free.

**RC-4: Weak `keywords` field (3 pages: operator-toolbox, explorer-operations, metrics-and-alerting)**
Generic terms — `livepeer`, `orchestrator`, `monitoring`, `metrics`, `tools` — appear across all three keyword sets. These are not searcher-intent-aligned. Troubleshooting.mdx is the sole exception: its error-specific keywords pass. Replacement keywords have been proposed per-page in the check reports.

**RC-5: Veracity — `status: published` with open FACT CHECK comments (all 4 pages)**
Every page carries open `{/* FACT CHECK */}` comments at publication status. Operator-toolbox has 5, metrics-and-alerting has 2, explorer-operations has 1 (active set size), troubleshooting has 2. None have `veracityStatus` set. All four pages must move to `veracityStatus: unverified` immediately. SME sign-off required from Mehrdad or Rick on protocol parameters; Rick on Prometheus metric names; Cloud SPE on tool repo status.

**RC-6: `{/* FACT CHECK */}` format is not `{/* REVIEW: */}` (all 4 pages)**
Check 6.5 fails across all four pages. The project-standard inline flag format is `{/* REVIEW: [claim] — verify against [source] */}`. All FACT CHECK comments must be reformatted. (This was inconsistently passed on operator-toolbox in the original report; the critical review corrects this to FAIL.)

**RC-7: Sub-threshold headings — H2 section naming (3 pages)**
Three pages have headings below the 20/25 threshold. Pattern: structural labels ("Option A", "Option B", "General diagnostics"), generic descriptors ("Explorer scope", "What metrics are exposed"), and question-form H3s ("How to confirm...", "How to capture..."). Operator-toolbox is mildest (3 headings); metrics-and-alerting is worst (4 headings). Proposed renames are detailed per-page in the check reports.

**RC-8: Process and governance — premature `status: published` (all 4 pages)**
All four pages fail checks 9.1 (no human sign-off) and 9.3 (Orchestrators tab gate prerequisites not met per tab-status.md). No page should carry `status: published` until the tab gates open and veracity passes complete.

---

## 3. Blocking Decisions

| BD-ID | Decision | Page(s) | Blocks |
|---|---|---|---|
| BD-M01 | `purpose` field value: confirm `operate` for explorer-operations and metrics-and-alerting | explorer-operations, metrics-and-alerting | Frontmatter batch fix; information-type mapping for Cat 4.7 |
| BD-M02 | `purpose` field value: confirm `troubleshoot` for troubleshooting | troubleshooting | Frontmatter batch fix; information-type mapping |
| BD-M03 | Content duplication resolution: metrics-and-alerting check 4.8 rated FAIL; operator-toolbox check 4.8 rated INFO for same Docker stack content. Both cannot be correct. Requires human judgment: is the overlap verbatim (FAIL) or summary-level (INFO)? | metrics-and-alerting, operator-toolbox | Fix scope for Docker monitoring stack section on both pages |
| BD-M04 | Self-link on metrics-and-alerting line 86: "The full reference is at [Prometheus Metrics Reference](...)" links to own page. No separate metrics reference page exists. Decision: delete the sentence, or create a distinct reference page and redirect. | metrics-and-alerting | Structural navigation fix; cannot proceed without knowing whether a reference page will be created |
| BD-M05 | BORDERLINE `not [X]` constructions on troubleshooting lines 89 and 95: "They are not errors..." and "not with your orchestrator." Human review to accept diagnostic negation or reframe to positive statements. | troubleshooting | Check 2.4 resolution |
| BD-M06 | BORDERLINE `not [X]` on explorer-operations: "What it leaves out" bold label. Human review to classify as structural label (acceptable) or `not [X]` primary statement (reframe). | explorer-operations | Check 2.4 resolution |
| BD-M07 | Prometheus metric names on metrics-and-alerting are "best-effort approximations from v1 documentation." Rick to verify `livepeer_current_sessions_total`, `livepeer_max_sessions`, `livepeer_transcode_success_total`, `livepeer_transcode_failed_total`, `livepeer_eth_balance` against `go-livepeer/monitor/census.go` | metrics-and-alerting | Check 6.1, 6.4, 6.8; page cannot pass veracity without this |
| BD-M08 | NVENC Ada Lovelace session cap: confirm whether RTX 40xx generation removed the NVENC session cap or whether consumer driver patching is still required. Rick to verify against NVIDIA matrix. | troubleshooting | Check 6.1, 6.9 |
| BD-M09 | Per-pipeline dimension limits in go-livepeer or ai-runner: confirm whether orchestrators can reject oversize requests. Rick / Peter to verify against go-livepeer/cmd or go-livepeer/ai codebase. | troubleshooting | Check 6.1, 6.9 |
| BD-M10 | Active set size "top 100": Mehrdad / Rick to confirm current protocol parameter. Affects explorer-operations (FACT CHECK at line 75) and operator-toolbox (FACT CHECK on Explorer card). | explorer-operations, operator-toolbox | Check 6.1, 6.4 on both pages |
| BD-M11 | Livepeer Forum URL: confirmed offline March 2026. Affects metrics-and-alerting and operator-toolbox. Decision: remove references entirely, or replace with an alternative community link. | metrics-and-alerting, operator-toolbox | Checks 6.1, 6.8, 8.2 |
| BD-M12 | Dune dashboard URLs (3 URLs) on operator-toolbox: verify public and current before publication. FACT CHECK comment present. | operator-toolbox | Check 6.1, 8.2 |
| BD-M13 | `mikezupper/livepeer-ai-job-tester` repo: Cloud SPE to confirm maintained and compatible. FACT CHECK comment present. | operator-toolbox | Check 6.1, 8.2 |

---

## 4. Prioritised Recommendations

### CRITICAL

**CRIT-1: Add missing frontmatter fields to all 4 pages (batch operation)**
Affects: checks 1.1, 1.6, 1.7, 1.8, 1.9, 1.10 on every page.
Add `complexity: intermediate`, `lifecycleStage: operate` (or `troubleshoot` for troubleshooting.mdx), `veracityStatus: unverified`, `industry: [technical, livepeer]` (or `[technical, economics]` for explorer-operations), and `niche: [infrastructure, hardware]` (or `[protocol, tokenomics]` for explorer-operations). All proposed values require human sign-off before applying. This is the highest-impact single action across the subfolder — resolves 5 failing checks per page (20 check fails total) in one batch.

**CRIT-2: Fix `purpose: guide` wrong-field error on 3 pages**
Affects: check 1.4 on explorer-operations, metrics-and-alerting, troubleshooting.
Proposed values: `purpose: operate` (2 pages), `purpose: troubleshoot` (1 page). Pending BDs BD-M01 and BD-M02. Requires human sign-off.

**CRIT-3: Fix description field on all 4 pages (length + em-dash)**
Affects: checks 1.11 and P30 on every page.
Proposed replacement descriptions are in each check report. No human sign-off needed for descriptions — these are mechanical fixes.

**CRIT-4: Resolve self-link on metrics-and-alerting line 86**
Affects: checks 4.4 and 8.1 on metrics-and-alerting.
The page links to itself via `[Prometheus Metrics Reference]`. Pending BD-M04. Until resolved this page has a navigation dead loop.

**CRIT-5: Verify Prometheus metric names before metrics-and-alerting can pass veracity**
Affects: checks 6.1, 6.4, 6.8 on metrics-and-alerting.
Pending BD-M07. The Alerting section's alert rule templates use metric names flagged as "best-effort approximations from v1 documentation." This is the single highest-stakes veracity issue in the subfolder.

### HIGH

**HIGH-1: Convert all `{/* FACT CHECK */}` comments to `{/* REVIEW: */}` format (all 4 pages)**
Affects: check 6.5 on every page. 10 comments across the subfolder need reformatting with specific claim text and named source.

**HIGH-2: Rename weak headings (3 pages)**
Pages, headings, and proposed renames:
- `explorer-operations`: "Explorer scope" → "Explorer Data Scope"; "Active Set status" → "Active Set Rank"; "Common patterns to act on" → "Diagnostic Signal Reference"
- `metrics-and-alerting`: "Enabling node metrics" → "Metrics Endpoint Setup"; "What metrics are exposed" → "Exported Metric Categories"; "Option A: Docker monitoring stack (fastest setup)" → "Docker Monitoring Stack"; "Option B: Custom Prometheus and Grafana" → "Custom Prometheus Configuration"
- `operator-toolbox`: "Docker monitoring stack (fastest setup)" → "Docker Monitoring Stack"; "Custom Prometheus setup" → "Custom Prometheus Configuration"; "Tool selection guide" → "Diagnostic Tool Reference"
- `troubleshooting`: "General diagnostics" → "Status and Log Commands"; H3 "How to confirm your node is receiving work" → "Confirming Job Receipt"; H3 "How to capture logs to a file" → "Log File Capture"

**HIGH-3: Fix em-dash in troubleshooting body prose (line 173)**
"Arbitrum gas is very cheap — reward calls cost approximately $0.01–$0.12 each." → "Arbitrum gas is very cheap; reward calls cost approximately $0.01–$0.12 each." Single character change.

**HIGH-4: Fix opening self-reference on metrics-and-alerting line 35**
"Use this page to instrument the node..." is a `This page [verb]` banned construction.
Fix: "Instrument the node, collect the metrics that matter, and wire up alerts before failures turn into missed jobs or missed rewards."

**HIGH-5: Fix em-dashes in operator-toolbox body (lines 57, 71)**
Two em-dash instances in Card descriptions and body prose. Replacements drafted in check report F-03.

**HIGH-6: Remove or replace Livepeer Forum references (metrics-and-alerting, operator-toolbox)**
Forum confirmed offline March 2026. Pending BD-M11.

**HIGH-7: Review `status` field on all 4 pages**
`status: published` is premature. All pages should move to `status: draft` until veracity pass completes and tab gate prerequisites are met.

**HIGH-8: Resolve active set size "top 100" claim (explorer-operations, operator-toolbox)**
Pending BD-M10. Affects multiple sections and cards across both pages.

---

## 5. Cross-Page Structural Notes

**Docker stack / Prometheus content duplication (operator-toolbox vs metrics-and-alerting)**
This is the key cross-page structural issue in the subfolder. Operator-toolbox summarises the Docker monitoring stack and `-monitor` flag at discovery level. Metrics-and-alerting covers the same stack in depth with `docker run` commands, port mappings, Grafana setup, and alert rule configuration. The original check reports disagree: metrics-and-alerting rates this FAIL at check 4.8; operator-toolbox rates it INFO. The critical review for metrics-and-alerting flags this as a cross-report contradiction requiring human resolution (BD-M03). The intended scope split (discovery vs full setup) is structurally sound in principle — but if the operator-toolbox coverage is "nearly verbatim" (as metrics-and-alerting claims), the toolbox section needs to be reduced to summary-only with an explicit "full setup in Metrics and Alerting" link. This cannot be resolved without reading both sections side-by-side.

**AccordionGroup component approval discrepancy**
Explorer-operations uses AccordionGroup and fails check 5.3 for it (not in the preferred list for `guide` pageType). Troubleshooting.mdx also uses AccordionGroup and PASSES check 5.3 — the troubleshooting check report notes "guide permits AccordionGroup" while the explorer-operations report says it is "not in preferred list for guide." The component-layout-decisions.mdx file was not read on every page before flagging. This is inconsistent across the batch (see confirmed finding in operator-toolbox critical review: operator-toolbox is the only report that read the component approval file before flagging at P22). Resolution: read component-layout-decisions.mdx once and apply a consistent ruling to AccordionGroup usage across all four pages in the layout pass.

**Service URI mismatch content overlap (explorer-operations and troubleshooting)**
The service URI mismatch error and fix appears in both pages (explorer-operations around line 218, troubleshooting lines 304–316). Explorer-operations presents it preventively; troubleshooting presents it as a diagnosed fix. Overlap is minor and framing is different enough to be defensible. Noted in troubleshooting check 4.8 as an INFO item. No action required now; monitor during content pass.

**Navigation sequence and CardGroup exit handoffs**
The four-page sequence (operator-toolbox → explorer-operations → metrics-and-alerting → troubleshooting) is logically sound per all four check reports. Exit CardGroups are present on each page. No dead ends except the metrics-and-alerting self-link (BD-M04). No pages in the section are structural orphans. Cross-tab links are absent across all four pages — noted as INFO items at check 4.10, not hard fails at page level.

**tools.livepeer.cloud URL appears on 3 pages**
`https://tools.livepeer.cloud/ai/network-capabilities` is cited on explorer-operations, metrics-and-alerting, and operator-toolbox. It is marked NOT-TESTED on all three. A single live verification resolves all three simultaneously.

**`livepeer/monitoring:latest` Docker image tag**
This image tag is cited on both metrics-and-alerting and operator-toolbox. Currency is unverified on both. A single Docker Hub check resolves both.

---

## 6. Learnings for Future Batches

The following patterns were observed in this batch that are not yet in the learnings.md catalogue (P1–P62).

**L-NEW-01: NOT-TESTED must never appear in the confirmed FAIL count**
Three reports in this batch (metrics-and-alerting, troubleshooting, operator-toolbox) included NOT-TESTED check results in their FAIL list. Critical reviews corrected all three. Pattern: the original checker conflates "I cannot confirm this" with "this is wrong." NOT-TESTED is a separate status category. The verdict section must partition: confirmed FAILs / NOT-TESTED / BORDERLINE / INFO. Apply from the next batch onward.

**L-NEW-02: BORDERLINE must never appear in the confirmed FAIL count**
Four reports listed BORDERLINE items (2.3, 2.4, 3.6) as FAIL in the overall verdict. Per P23, a BORDERLINE finding requires human review before being treated as a confirmed FAIL. The verdict must segregate BORDERLINE items into a separate list. This is consistent with how NOT-TESTED must be segregated (see L-NEW-01 above). Together, the rule is: only confirmed FAILs (where the framework provides clear grounds) enter the failing check count.

**L-NEW-03: Check 6.5 requires `{/* REVIEW: */}` format — `{/* FACT CHECK */}` is not equivalent**
Operator-toolbox passed check 6.5 on the basis that `{/* FACT CHECK */}` is "functionally equivalent" to `{/* REVIEW: */}`. The critical review correctly overturned this. The check framework requires the specific REVIEW format per checks.mdx §6.5. Any non-standard comment format (FACT CHECK, TODO, TBD, open note) is a §6.5 fail. Applies to all future batches.

**L-NEW-04: Cross-report consistency must be verified within a batch**
This batch produced directly contradictory verdicts on the same content (Docker stack duplication rated FAIL on metrics-and-alerting, INFO on operator-toolbox). The critical review caught this only because the reviewer was looking across reports. Future batches should include a cross-report consistency pass as a final step before the summary is written: scan all check 4.8 and check 4.10 findings across the batch for contradictions.

**L-NEW-05: Component-layout-decisions.mdx must be read once per batch, not per page**
The operator-toolbox critical review confirmed operator-toolbox is the only report in the batch that read the component approval file before flagging (P22). The other three reports cited the component matrix from memory or approximation. For multi-page batch runs, the correct process is to read component-layout-decisions.mdx once at batch start and apply a consistent ruling. The per-page note "approval file was read before flagging (P22)" should still appear but the component ruling should not vary between pages in the same batch unless the pages have different `pageType` values.

**L-NEW-06: Self-links must be caught in the Banned Construction Scan, not only in Cat 4.4 / Cat 8.1**
The metrics-and-alerting self-link was caught at Category 4 and Category 8 but not surfaced in Category 2 (structural issues in prose). A page linking to itself is both a navigation failure (4.4) and a prose/copy quality failure — the sentence that contains the self-link typically reads as if a real destination exists. The self-link sentence should appear in the Category 2 banned construction scan as a structural anomaly even if no banned word or phrase is technically present.

---

_Summary generated: 2026-03-24_
_Source reports: check reports + critical reviews for all 4 pages in `monitoring-and-tooling`_
_Reviewer: Claude Code (summary index agent)_
