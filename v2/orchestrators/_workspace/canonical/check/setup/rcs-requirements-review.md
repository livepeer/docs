# Critical Review of Check Report
## `v2/orchestrators/_workspace/canonical/check/setup/rcs-requirements.md`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/setup/rcs-requirements.md`
**Original page verified against:** `v2/orchestrators/setup/rcs-requirements.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** False positive / Result-category misfire
**Location in report:** Category 2 — Voice & Copy, check 2.2 (FAIL)
**What's wrong:** Check 2.2 is scoped to banned words only: `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`. The check report marks 2.2 FAIL and cites the `not [X]` construction at line 61 as the reason. That construction is not a banned word — it is a banned construction, which belongs exclusively under check 2.4. The page contains zero actual banned words. Check 2.2 should be PASS.

The report then also correctly flags the same occurrence under check 2.4. The result is that a single finding is reported as two separate failures (2.2 and 2.4) inflating the FAIL count by one. Per P13 (deduplicate cross-category findings), the finding should appear once under 2.4 with a cross-reference note at 2.2.

**What should have been said/done:** Check 2.2 result: PASS. Detail: "No banned words found. No instance of `effectively`, `essentially`, `basically`, `meaningful`, `significant`, `real` (intensifier), `various`, `several`, `obviously`, `clearly`." The `not [X]` construction at line 61 should appear only under check 2.4.

---

### Issue 2
**Type:** Missed finding — `industry` and `niche` not treated as required
**Location in report:** Frontmatter Table (rows for `industry` and `niche`) and Category 1 checks 1.9 and 1.10
**What's wrong:** The report marks `industry` and `niche` as `INFO` with the note "Optional. Not required." This directly contradicts the standing user instruction recorded in `learnings.md` Batch 1, item 1: "CORRECTION: User confirmed these ARE required. The critical reviews were wrong. The original check reports were correct to flag them." Both fields are absent from the page. They should be flagged as FAIL with the requirement to supply concrete values.

Additionally, the report's frontmatter summary states "5 required fields completely missing" but does not count `industry` or `niche`. The correct count per learnings.md is 7 required fields missing: `pageType`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. Check 1.1 (all 10 required fields present) should also reflect this: the count of present required fields is lower than reported.

**What should have been said/done:** Mark `industry` as FAIL with a concrete value such as `["technical", "hardware"]`. Mark `niche` as FAIL with a concrete value such as `["hardware", "infrastructure"]`. Update the frontmatter summary to reflect 7 missing required fields. Update check 1.1 accordingly.

---

### Issue 3
**Type:** False positive — `not [X]` construction severity and framing
**Location in report:** Check 2.4, Banned Construction Scan table (line 61)
**What's wrong:** The finding is legitimate — `not [X]` as the primary statement is a banned construction. However, the proposed fixes within the report are internally inconsistent. The check 2.4 entry proposes: "Fix: 'AI job routing responds to capability and price, not stake.'" The report itself then notes "the more complete fix removes it entirely." The Banned Construction Scan table then proposes a two-sentence fix that drops the negative entirely.

The issue: the check 2.4 entry's first proposed fix still contains `not stake` and would re-introduce the banned construction. An executing agent reading only the check table (not the Banned Construction Scan table) would apply the first fix and ship a page that still fails 2.4. Per REPORTING RULES: "Fixes must be executable. No ambiguity. Another agent must be able to execute the fix with zero additional context." Two different fixes for the same issue in two sections creates ambiguity.

**What should have been said/done:** State one canonical fix once. The Banned Construction Scan table's two-sentence version ("AI job routing is determined by registered capabilities and price. Stake level does not affect AI workload routing.") is the stronger fix but still contains "does not" — a second `not [X]` construction. The cleaner fix is: "AI job routing is determined by registered capabilities and price. Stake level is irrelevant for AI workload routing." The check table entry and the Banned Construction Scan table should state the same fix.

---

### Issue 4
**Type:** Missed finding — Banned Construction Scan omits mandatory candidate listing
**Location in report:** Banned Construction Scan table
**What's wrong:** Per the mandatory report format (checks.mdx Reporting Rules and P24 from learnings.md): "list every candidate match considered, even when the result is PASS. A PASS with no candidates listed is not verifiable." The scan trigger list requires listing every sentence containing `can`, `may`, `could`, `might`, `should`. The report's Banned Construction Scan table lists prose lines by their content but does NOT enumerate `can`/`may`/`could`/`might`/`should` candidates. It jumps straight to commentary on specific lines without showing the trigger-word scan pass.

The page has no `can/may/could/might/should` in body prose (verified against the actual file). However, there is one candidate that the scan table did not include: line 77, `"<50 ms to major regions helps streaming and gateway selection."` While `helps` is not on the trigger list, the table should demonstrate the work was done by listing candidates scanned.

**What should have been said/done:** Add a preamble to the Banned Construction Scan confirming the trigger-word scan was run, state zero matches found for can/may/could/might/should, then list the `not [X]` at line 61 as the only flagged item.

---

### Issue 5
**Type:** Inconsistency — `industry`/`niche` treatment contradicts check 1.1 count
**Location in report:** Category 1, check 1.1 detail
**What's wrong:** Check 1.1 states "Only 5 of 10 required fields present." The 10 required fields per checks.mdx are: `title`, `sidebarTitle`, `description`, `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `keywords`, OG image block. Of these, 5 are missing (`pageType`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`). The count of 5 missing is correct against the 10-field list in checks.mdx 1.1 — but `veracityStatus` is listed as the 10th required field in the check 1.1 criterion. The report lists "5 of 10 required fields present" but then says 5 are missing: `pageType`, `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`. That is 5 missing out of 10, so 5 present — the count is internally consistent. However, per Issue 2 above, if `industry` and `niche` are also required (per learnings.md), the count must be updated.

This issue is secondary to Issue 2 and is documented here to show the dependency: the count in 1.1 must be recalculated once `industry` and `niche` are correctly classified as required.

**What should have been said/done:** The Issue 2 correction resolves this. Update the check 1.1 count to reflect that `industry` and `niche` are also missing required fields.

---

### Issue 6
**Type:** Missed finding — T4 VRAM claim framing
**Location in report:** Category 6, check 6.4 and Spelling/Typo Check
**What's wrong:** The report correctly identifies the T4 VRAM discrepancy (T4 has 16GB; page states 8GB) but in two separate locations with slightly different framing. The Spelling/Typo Check section labels it "a factual error, not a typo" and re-flags it separately from the Category 6 treatment. Per P13 (deduplicate cross-category findings), this should be logged once in Category 6 and cross-referenced in the Spelling/Typo section with: "See Category 6, check 6.4 — T4 VRAM factual error." The duplication is minor but adds noise for executing agents.

More substantively: the report's Category 6 check 6.4 treatment phrases the T4 issue as uncertain ("appears to be incorrect for the T4 specifically") when NVIDIA's datasheet is unambiguous — the T4 has 16GB GDDR6 VRAM. The learnings.md entry B3.4 and the reporting rules state that a veracity finding should be `TESTED:` or `NOT-TESTED:`. The T4 VRAM figure is a datasheet fact. The report should state `NOT-TESTED against NVIDIA datasheet` rather than hedging "appears to be."

The report correctly flags the RTX 3060 VRAM claim as potentially valid (8GB configurations exist). This nuance is handled well. The 3060 claim is not a clean false positive — the report correctly avoids asserting it is wrong.

**What should have been said/done:** State the T4 VRAM discrepancy as a FAIL with `NOT-TESTED:` label: "NVIDIA T4 datasheet specifies 16GB GDDR6 VRAM. Page states 8GB. NOT-TESTED against NVIDIA datasheet directly, but this is a widely documented spec. REVIEW flag required." Cross-reference in Spelling/Typo section only; do not re-analyse there.

---

### Issue 7
**Type:** Missed finding — `not [X]` fix in Cross-Category Connections conflicts with fix in check table
**Location in report:** Cross-Category Connections, Root Cause 2 and Root Cause 4
**What's wrong:** Root Cause 4 (page scope conflict) and Root Cause 2 (headings) are listed correctly as separate root causes. However, the fix for the `not [X]` banned construction (Cat 2.4 finding) is not listed in the Cross-Category Connections section at all. It is a non-blocking item listed in the "Non-blocking items that can be fixed regardless of decision" section under the Blocking Decision, but it is not in the Cross-Category Connections fix list. This is correct structure — the banned construction only affects one category (2.4 and 2.2 per Issue 1 above). However, the absence from the Cross-Category Connections does not create a gap in itself.

This is a minor observation rather than a hard error, but it is noted: the `not [X]` construction appears as a non-blocking fix at the end of the report without being surfaced in the Cross-Category Connections section, which is where an executing agent would look first.

**What should have been said/done:** Minor. Either add a root-cause entry for the line 61 banned construction or confirm its absence is intentional because it is a single-cause finding.

---

### Issue 8
**Type:** Severity — `industry` and `niche` downgraded to INFO
**Location in report:** Frontmatter Table rows for `industry` (line 27) and `niche` (line 28)
**What's wrong:** This is a consequence of Issue 2. By marking `industry` and `niche` as INFO, the report prevents executing agents from acting on them. Per learnings.md, they are required. The severity must be FAIL. No valid level between FAIL and INFO exists for required fields (per checks.mdx severity rules: CRITICAL / HIGH / MEDIUM / INFO only — there is no "required but optional" tier).

**What should have been said/done:** Mark both rows FAIL. Provide concrete suggested values (see Issue 2 above).

---

## Summary

**Issue count:** 7 substantive issues (Issues 1-6, 8) + 1 minor observation (Issue 7)
**False positives:** 1 — check 2.2 FAIL for `not [X]` (belongs in 2.4 only)
**Missed findings:** 2 — `industry` and `niche` not treated as required (Issues 2 and 8); Banned Construction Scan does not show trigger-word candidate pass (Issue 4)
**Other errors:** 4 — check 2.4 / Banned Construction Scan fix inconsistency (Issue 3); T4 VRAM framing hedged incorrectly (Issue 6); duplicate T4 VRAM logging (Issue 6); `industry`/`niche` count inconsistency cascading into check 1.1 (Issue 5)

**Report overall quality:** MOSTLY RELIABLE

**Recommended action:** Use with corrections noted above. The report's core findings are substantively correct: 5 missing required frontmatter fields, all 6 H2 headings fail, 3 broken card links, 1 banned construction, T4 VRAM factual error, 1 unresolved pageType blocking decision. These findings and the Cross-Category Connections / Blocking Decision structure are solid and actionable. The corrections needed before executing are:

1. Reclassify `industry` and `niche` as FAIL with concrete suggested values
2. Change check 2.2 to PASS; move the `not [X]` finding to check 2.4 only
3. Consolidate the `not [X]` fix to a single canonical version that does not re-introduce the banned construction
4. Add trigger-word candidate listing to the Banned Construction Scan
5. Remove the T4 VRAM re-analysis from the Spelling/Typo section (cross-reference only)
