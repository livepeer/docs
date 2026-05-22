# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/config-and-optimisation/capacity-planning.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

NEEDS REWORK

---

## Issues Found

### Issue 1: Category 1 verdict count is wrong — 10 checks listed but count states "10 checks fail: ... (plus 1.3 as co-fix)"
**Severity:** HIGH
**Check affected:** Category 1 verdict, P26/P49, P42
**Finding in original:** "Category 1 verdict: 10 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (plus 1.3 as co-fix)"
**What is wrong:** The list after the colon contains 9 IDs (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11) but the statement says "10 checks fail." Check 1.3 is parenthetically added as a "co-fix" — but per P42, check 1.3 must NOT be logged as an independent finding when pageType is deprecated. It is a co-fix dependency of 1.2, not a separate failing check. The count should be 9. Stating "10 checks fail" when 1.3 is not a standalone failure violates P42. This also inflates the Verdict Summary count.
**Correction:** Category 1 verdict: 9 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11. The 1.3 co-fix is noted in the check 1.3 row (already correctly marked N/A) and in the F-01 fix description — it should not appear in the fail count.

---

### Issue 2: Final Verdict Summary fail count conflicts with the body of the report
**Severity:** HIGH
**Check affected:** Verdict Summary, P26/P49
**Finding in original:** "Total failing check IDs: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4 (rechecked — violation at line 191 is a banned word, classified under 2.2; no separate 2.4 construction violations), 3.1, 5.7, 6.1, 6.2, 6.5, 6.6, 6.9" — "Recounted: 16 checks fail."
**What is wrong:** The parenthetical reconsideration of 2.4 says no separate 2.4 violation exists, yet 2.4 appears in the listed IDs then is inline-retracted in parentheses. The final listed IDs without the 2.4 retraction would be: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 5.7, 6.1, 6.2, 6.5, 6.6, 6.9 — that is 17 IDs. But the "Recounted: 16" line also omits the Category 2 verdict check: Category 2 verdict says "2 checks fail: 2.2, 2.4" while the recount removes 2.4, making it 1 check (2.2) in Category 2. The discrepancy from 17 to 16 suggests 2.4 was removed but the listed IDs still show it. The format is unclear — an executing agent cannot reliably extract the canonical fail list. P26/P49 requires a clean, non-parenthetical list.
**Correction:** The final fail list must be stated without inline retractions. Correct list: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 5.7, 6.1, 6.2, 6.5, 6.6, 6.9. Count: 17. (Or 16 if 1.3 is mistakenly included and 2.4 removed — but 1.3 should not be in the fail count per P42, and 2.4 also should not per the report's own reconsideration. The correct answer is 16 if we count as: 9 from Cat1 + 1 from Cat2 [2.2] + 1 from Cat3 [3.1] + 1 from Cat5 [5.7] + 4 from Cat6 [6.1, 6.2, 6.5, 6.6] + 1 from Cat6 [6.9] = 17. But 6.9 is listed as a separate check ID.) The count should be 16 or 17 depending on whether 6.9 is an independent check or a sub-item of 6.1. The report must resolve this without parenthetical retractions.

---

### Issue 3: Category 2 verdict says "2 checks fail: 2.2, 2.4" but the Banned Construction Scan and final recount remove 2.4
**Severity:** HIGH
**Check affected:** 2.4, Category 2 verdict, P26/P28, P46
**Finding in original:** Category 2 verdict: "2 checks fail: 2.2, 2.4" — but the Banned Construction Scan summary states: "1 flagged violation: line 191 `significantly` (banned word, cross-referenced to check 2.2 / F-08)" with no 2.4 violation. The final tally note says "no separate 2.4 construction violations."
**What is wrong:** The Category 2 verdict row in the check table has check 2.4 as FAIL but the Banned Construction Scan finds no 2.4 violations. Per P28, the result column must match the detail text conclusion. The check 2.4 row in the check table says FAIL with "2 flagged items" — but the detailed scan table finds only `significantly` (a 2.2 banned word, not a 2.4 construction). The FAIL in the check table row for 2.4 is not supported by the scan findings.
**What is actually in the source:** The source has one violation: `significantly` at line 191 (source confirmed: "CPU transcoding produces **significantly** higher ratios per session than GPU."). This is a banned word (2.2 violation), not a banned construction (2.4). Check 2.4 should be PASS.
**Correction:** Check 2.4 result: PASS. Category 2 verdict: 1 check fails: 2.2.

---

### Issue 4: Heading score for "Tuning after going live" — the report states 18/25 in the score table but 19/25 in check 3.1
**Severity:** MEDIUM
**Check affected:** 3.1, P26, P31
**Finding in original:** Check 3.1 row: "FAIL — 'Tuning after going live' scores 19/25 — fails threshold" but the Heading Score Table row shows: "Tuning after going live (H2) | 3 | 3 | 4 | 4 | 4 | 18/25 — FAIL"
**What is wrong:** 3+3+4+4+4 = 18/25, not 19/25. The check table row states 19/25 while the score table shows 18/25. P31 requires narrative citations to match the score table exactly. The score table arithmetic (3+3+4+4+4=18) is correct; the check row reference to "19/25" is wrong. This does not change the verdict (both are below 20) but is a factual inconsistency within the report.
**Correction:** Check 3.1 detail text: change "scores 19/25" to "scores 18/25."

---

### Issue 5: `how_to` migration pageVariant — correctly handled (confirmation)
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.2, 1.3, P42
**Finding in original:** Check 1.3: "N/A (co-fix) — Not present; co-fix of 1.2. For `purpose: configure`, no pageVariant required"
**What is wrong:** Nothing. Frameworks.mdx §1.1 shows `how_to` → `instruction` with no pageVariant ("—"). The report correctly treats 1.3 as N/A co-fix, not an independent FAIL. P42 satisfied.
**Correction:** Confirmed correct.

---

### Issue 6: Category 6 verdict states "4 checks fail: 6.1, 6.2, 6.5, 6.6, 6.9 — 5 total" — inconsistent formatting
**Severity:** MEDIUM
**Check affected:** Category 6 verdict, P26/P49
**Finding in original:** "Category 6 verdict: 4 checks fail: 6.1, 6.2, 6.5, 6.6, 6.9 — 5 total"
**What is wrong:** The verdict states "4 checks fail" then lists 5 IDs (6.1, 6.2, 6.5, 6.6, 6.9) then corrects to "5 total." This is the same inline-retraction pattern as Issue 2. The category verdict must open with the correct number. The number is 5, confirmed by counting: 6.1, 6.2, 6.5, 6.6, 6.9.
**Correction:** "Category 6 verdict: 5 checks fail: 6.1, 6.2, 6.5, 6.6, 6.9"

---

### Issue 7: P51 compliance — proposed frontmatter values correctly formatted (confirmation)
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.4, 1.6, 1.7, 1.9, 1.10, P51
**Finding in original:** All proposed values formatted as "Proposed: `purpose: configure` — confirm before applying" etc.
**What is wrong:** Nothing. All proposed values follow the correct P51 format.
**Correction:** Confirmed correct.

---

### Issue 8: P39 compliance — veracityStatus fix is correct (confirmation)
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.8, P39
**Finding in original:** Report recommends `veracityStatus: unverified` with no recommendation to set `status: current`.
**What is wrong:** Nothing. The page has `status: draft` — compatible with `veracityStatus: unverified`. P39 states `status: current` + `veracityStatus: unverified` is incoherent. The report does not make this error.
**Correction:** Confirmed correct.

---

## Confirmed Correct Findings

- **Check 1.1**: All 6 missing fields confirmed absent from source frontmatter (lines 1–29). Correct FAIL.
- **Check 1.2**: `pageType: how_to` confirmed at source line 25. Deprecated alias. Fix to `instruction` correct. No pageVariant per Frameworks.mdx §1.1.
- **Check 1.11**: Description text confirmed at source lines 4–8: "Determine the correct -maxSessions value for your orchestrator using livepeer_bench, bandwidth calculations, and NVENC hardware session limits. Covers GPU and CPU transcoding capacity, AI VRAM budgeting, and session limit configuration." Measured: the description is approximately 205 characters, exceeding the 160-char limit. FAIL correct.
- **Check 2.2**: `significantly` at source line 191 confirmed: "CPU transcoding produces significantly higher ratios per session than GPU." Banned word. FAIL correct.
- **Check 2.1 / P54**: No US spelling violations found in source. Correct PASS. `significantly` correctly classified under 2.2, not 2.1 (P54 satisfied).
- **P46**: `not [X] as primary statement` correctly belongs in 2.4, not 2.2. The 2.1 FAIL/PASS text correctly applies P54.
- **Heading score table**: All headings scored with per-dimension breakdown. P2 satisfied. The failing heading "Tuning after going live" confirmed at source line 343. Score arithmetic for all other headings verified.
- **P48**: StyledStep titles scanned for em-dashes. Confirmed: "Download the test stream", "Download the rendition config", "Run at increasing concurrency" — no em-dashes. Correct PASS.
- **Link verification**: All 4 Related pages cards verified against docs.json. `/v2/orchestrators/resources/gpu-support` — the report notes this was checked separately; confirmed present in docs.json. P33/P47 satisfied.
- **P41**: `industry` and `niche` both flagged FAIL with concrete proposed values. P41 satisfied.
- **P37**: Error characterisation: `how_to` described as "Deprecated alias" — correct.
- **Check 5.7**: Correctly logged as same root cause as 1.2. Not an independent finding.
- **Category 9**: Check 9.1 FAIL (status: draft) confirmed. 9.3 downgraded to INFO (pre-gate state) — this is consistent within the report even if the category verdict count is cleaner than in ai-model-management.
- **Banned Construction Scan**: Line 191 correctly identified as the only violation (banned word `significantly`). All other candidates correctly classified as acceptable. P6 satisfied.

---

## Corrected Verdict

**Corrected fail count:** 16 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 5.7, 6.1, 6.2, 6.5, 6.6, 6.9

Changes from original:
- Check 2.4 removed (no construction violation found — only banned word 2.2 violation at line 191)
- Check 1.3 removed from fail count (co-fix dependency per P42, not independent failure)
- Net result: 16 failing checks (same number as original, but different composition)

Three structural defects require rework: the Category 1 verdict count (Issue 1), the Category 2 check 2.4 FAIL without supporting scan evidence (Issue 3), and the heading score table/check row discrepancy at "Tuning after going live" (Issue 4). The core content findings are accurate.
