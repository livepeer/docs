# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/tutorials/realtime-ai-tutorial.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P58

---

## Rating
MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Verdict count overcounts by treating per-heading instances as separate check IDs
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "Individual failing check IDs (P49): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 3.1(x4 headings), 3.2(x4 headings), 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3 — 21 failing check IDs"
**What is wrong:** Same error pattern as full-ai-pipeline-tutorial check. `3.1(x4 headings)` is one check ID (3.1), not four. `3.2(x4 headings)` is one check ID (3.2), not four. The unique failing check IDs are: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 3.1, 3.2, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3 = 18 unique check IDs. Counting `(x4)` instances as 4 IDs each would give 21 — confirming the error. P49 requires counting check IDs, not heading instances.
**Correction:** "18 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 3.1, 3.2, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3"

---

### Issue 2: Check 3.2 in the check table shows FAIL but Category 3 verdict count lists it — consistency check
**Severity:** LOW
**Check affected:** Category 3 verdict, check 3.2 table row
**Finding in original:** "Category 3 verdict: FAIL — Failing: 3.1 (4 headings), 3.2 (4 headings), 3.7." The Category 3 check table is not reproduced fully in the report — the report uses only the Heading Score Table and check 3.3 forward. Looking at check 3.2 commentary: "How realtime AI differs from batch" is borderline (contains `vs` conceptually but framed as comparison heading), "Step 4: Configure aiModels.json for live pipeline" — verbose qualifier, "Step 6: Set up the gateway for live routing" — verbose qualifier, "What happened" — generic. These are 4 headings discussed under check 3.2.
**What is wrong:** The report does not include a standard check table for Category 3 (only a Heading Score Table and individual check annotations). Without the full Category 3 check table, it is impossible to confirm whether check 3.2 was marked FAIL vs PASS in the result column. This is a structural report format issue — Category 3 should have both the Heading Score Table AND the check table (3.1 through 3.7). The check commentary is thorough but the table format required by the check protocol is absent.
**Correction:** The finding logic is sound. For format compliance: Category 3 should include a standard check table with result columns for 3.1–3.7. The substantive verdict (3.1 FAIL, 3.2 FAIL, 3.7 FAIL) appears supported by the commentary.

---

### Issue 3: `veracityStatus` fix violates P39
**Severity:** HIGH
**Check affected:** Proposed frontmatter additions
**Finding in original:** Proposed additions include "`veracityStatus: unverified` — required; 2 open FACT CHECK flags"
**What is wrong:** The source file has `status: current`. Adding `veracityStatus: unverified` without simultaneously changing `status` to `draft` creates the prohibited combination per P39. The proposed frontmatter additions do not include `status: draft`.
**Correction:** Add to proposed frontmatter: `status: draft` (change from `current`). Full paired fix: "Change `status: current` to `status: draft` AND add `veracityStatus: unverified`. Apply together."

---

### Issue 4: Check 3.3 borderline finding for "How realtime AI differs from batch"
**Severity:** LOW
**Check affected:** Check 3.3
**Finding in original:** "Check 3.3: 'How realtime AI differs from batch' has comparison framing but is not a banned `X vs Y` literal label. BORDERLINE — see above. Flag for human review."
**What is wrong:** Check 3.3 prohibits "literal contrast labels" — the rule is against `X vs Y` headings as labelled contrast. The heading "How realtime AI differs from batch" is a description of what the section covers, not a literal `X vs Y` label like "Realtime vs Batch" would be. The checker correctly identifies this as a check 3.3 PASS while also noting it as a potential heading quality issue (which is correctly a 3.1/3.7 matter). The BORDERLINE flag is over-cautious for check 3.3 specifically — but the 3.1/3.7 FAIL for this heading is correct. No error in the check 3.3 result.
**Correction:** Clarify check 3.3 = PASS (not borderline). The heading failure is correctly captured under 3.1 (score 19/25) and 3.7 (not an expert editorial choice).

---

### Issue 5: Check 2.2 analysis contains a false positive mid-analysis
**Severity:** LOW
**Check affected:** Check 2.2
**Finding in original:** "2.2 Zero banned words: FAIL — Line 87: 'StreamDiffusion's architecture is purpose-built for this' — `purpose-built` is not a banned word. Rescan: [all candidates] — all clean. PASS."
**What is wrong:** The check table row 2.2 initially reads FAIL in the analysis text, then self-corrects to PASS after the rescan. The final result is PASS (correct). However, per P28, the result column must match the detail text conclusion. The detail text shows a self-correction process — the final conclusion is PASS. If the check table result column shows PASS (the final state), then P28 is satisfied. The issue is the mid-analysis false positive that was visible to the reader, which could create confusion. This is not a P28 violation if the final row result says PASS.
**Correction:** No correction needed if the check 2.2 row shows PASS. The self-correction process is visible but harmless.

---

### Issue 6: Category 8 verdict "NOT-TESTED" — same issue as full-ai-pipeline-tutorial
**Severity:** LOW
**Check affected:** Category 8 verdict
**Finding in original:** "Category 8 verdict: NOT-TESTED (internal links verified via docs.json)"
**What is wrong:** Same issue as full-ai-pipeline-tutorial: checks 8.1 and 8.4 are PASS; 8.2, 8.3, 8.5 are NOT-TESTED; 8.6 is PASS. Labelling the entire category NOT-TESTED is misleading. Category 8 does not contribute to fail counts, but the verdict misrepresents what was and was not checked.
**Correction:** "Category 8 verdict: PASS (with NOT-TESTED items: 8.2, 8.3, 8.5)"

---

### Issue 7: Check 6.4 finding on "30+ fps on an RTX 4090" — factual but framing is over-cautious
**Severity:** LOW
**Check affected:** Check 6.4
**Finding in original:** "Numbers are real: FAIL — '30+ fps on an RTX 4090' (line 87) — stated with precision but not cited. '< 100ms per frame' and '33ms frame budget' — technically correct (1000ms/30fps = 33ms) but the 30+ fps claim needs SME confirmation."
**What is wrong:** The check correctly identifies the 30+ fps claim as needing SME confirmation. The checker also notes that `< 100ms` and `33ms` are mathematically derivable from 30fps. The check 6.4 FAIL is correct for the 30+ fps performance claim without a benchmark source. No error.
**Correction:** N/A — finding is correct.

---

## Confirmed Correct Findings

- P41 applied correctly: `industry` and `niche` flagged FAIL with concrete proposed values.
- P15 applied correctly: `purpose` absence confirmed from frontmatter directly.
- P16 applied correctly: `Related Pages` exempt — excluded from Heading Score Table.
- P22 applied correctly: components marked NOT-TESTED.
- P25 applied correctly: docs.json line 2960 confirmed.
- P30 applied correctly: em-dash scan covers description, headings, step title props, CustomDivider middleText props.
- P42 applied correctly: check 1.3 N/A.
- P47 applied correctly: all 4 internal links verified with docs.json references.
- P48 applied correctly: step title props scanned.
- P50 applied correctly: `tutorial` valid — check 1.2 PASS.
- P51 applied correctly: proposed values carry "confirm before applying."
- P53 applied correctly: only `Related Pages` exempt.
- P54 applied correctly: check 2.1 PASS — `purpose-built` correctly excluded from UK English check.
- P58 applied correctly: check 2.4 result (PASS) determined after Banned Construction Scan.
- Check 6.9 applied correctly: 4 FACT CHECK flags reference SMEs without document paths — correctly FAIL.
- Check 6.5 PASS is correct: 4 FACT CHECK flags are present at lines 164, 199, 228, 376.
- Heading score table: 4 headings below 20/25 threshold correctly identified and scored.
- "What Just Happened" vs "What happened" prop/heading inconsistency noted as batch-wide INFO item.
- Page correctly identified as NEEDS WORK (not REWRITE REQUIRED) — structure and voice are sound.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — the report is methodologically sound with one systematic count error (21 vs 18 unique check IDs), one P39 risk on the veracityStatus fix, and minor format issues in Category 8 verdict. All substantive findings, scan results, and blocking decisions are correct.

**Corrected fail count:** 18 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 3.1, 3.2, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3
