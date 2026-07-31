# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/ai-and-job-workloads/llm-pipeline-setup.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

RELIABLE

---

## Issues Found

### Issue 1: Check 2.4 initial FAIL then self-correction — correction only appears in one location
**Severity:** MEDIUM
**Check affected:** 2.4
**Finding in original:** Check 2.4 in the check table reads FAIL with "See Banned Construction Scan. `can [verb]` candidate found at line 219. See F-01." The Banned Construction Scan concludes: "No banned constructions found. Revise check 2.4 result to PASS." The Fix List F-01 states: "Withdrawn — full scan found no banned constructions. Check 2.4 PASS." The Category 2 verdict states "1 check FAIL: 2.4."
**What is wrong:** P17 requires that self-consistency corrections enumerate every location where the corrected finding appears and update ALL of them before closing the report. The correction "Revise check 2.4 result to PASS" appears in the Banned Construction Scan and in F-01, but the check table row itself still reads FAIL and the Category 2 verdict still states "1 check FAIL: 2.4." P28 also requires that the Result column match the detail text conclusion. The detail text for 2.4 concludes non-violation; the Result column must be updated to PASS. Three locations have the correction applied (BCS narrative, F-01 withdrawal, a standalone correction note), but two locations do not (check table Result column and Category 2 verdict). This creates an ambiguous report state.
**Correction:** Check 2.4 Result column must be corrected to PASS. Category 2 verdict must be corrected to "0 checks FAIL." The overall fail count in the Verdict must be reduced by 1: from 24 to 23. Remove 2.4 from the Verdict's failing check ID list. The correction narrative in the BCS section is correct and should be retained.

---

### Issue 2: Check 3.4 — finding present in narrative but not in Category 3 verdict ID list
**Severity:** MEDIUM
**Check affected:** 3.4
**Finding in original:** "3.4 | Domain-anchor rule applied | FAIL | `## Setup` lacks domain anchor — interpretable as anything." The Category 3 verdict states "3 checks FAIL: 3.1, 3.2, 3.7 (includes 3.4 as a finding under 3.2/3.7)."
**What is wrong:** Check 3.4 is independently listed in the check table with a FAIL result. Per P34, a finding raised in the check category section must appear in all applicable report sections or be explicitly closed. The Category 3 verdict attempts to subsume 3.4 into 3.1/3.2/3.7 with the parenthetical "(includes 3.4 as a finding under 3.2/3.7)" — but check 3.4 is a separate check with its own result row, and if it returns FAIL, it must be counted as a separate failing check ID. The verdict text is ambiguous: does the 3-check count include or exclude 3.4? The parenthetical suggests the checker chose to not count it independently. P49 requires counting individual failing check IDs. If 3.4 is FAIL in the check table, it must appear in the Verdict's failing ID list.
**Correction:** If 3.4 is FAIL (which the check table states), it must be added to the Verdict's failing ID list. Category 3 verdict should read "4 checks FAIL: 3.1, 3.2, 3.4, 3.7." The overall fail count increases by 1: from 23 (after Issue 1 correction) to 24. Alternatively, if the checker intended 3.4 as a sub-finding already captured by 3.2 (which it partially is — domain anchor failure also fails check 3.2), the checker must explicitly state "3.4 captured under 3.2 — not counted separately" and change the 3.4 Result column to a cross-reference rather than an independent FAIL. The current report does neither cleanly.

---

### Issue 3: `Related pages` heading — P16/P53 exemption correctly identified but scored
**Severity:** LOW
**Check affected:** 3.1 (heading score table)
**Finding in original:** The Heading Score Table includes `Related pages` scored at 18/25, with the note: "Per P16, only the exact text `Related Pages` (capital P) is exempt. `Related pages` (lowercase p) — checking P53: 'only the exact heading text `Related Pages`' — capital P is the canonical form. `Related pages` with lowercase p is NOT the exact match."
**What is wrong:** P16 states: "Related Pages heading is excluded from the Heading Score Table entirely — no row, no N/A, no score." The instruction is total exclusion, not conditional exclusion based on capitalisation. Even `Related pages` (lowercase p) should have no row in the score table per P16. The checker's interpretation (that the capitalisation deviation means it's not exempt and should be scored) contradicts P16's total exclusion. The correct treatment is: if the heading is functionally `Related Pages` (which it is — it is the structural navigation footer heading), apply the P16 exemption regardless of capitalisation and omit the row entirely from the score table. If the checker believes the capitalisation is a separate FAIL, that belongs as an INFO note outside the score table — not as a scored table row.
**Correction:** Remove the `Related pages` row from the Heading Score Table. If the lowercase-p capitalisation is flagged, it belongs as an INFO note in the check narrative: "Heading reads `## Related pages` — recommend capitalising to `## Related Pages` to match sitewide convention (INFO only, not scored)." This does not change any FAIL results since `Related pages` scored 18/25 and was not in the failing headings list.

---

### Issue 4: F-09 in Fix List — `Related pages` capitalisation fix included as a numbered fix
**Severity:** LOW
**Check affected:** Fix List F-09
**Finding in original:** "F-09 | INFO | 3.1 | `## Related pages` heading — consider capitalising to `## Related Pages` for exact exemption alignment, or leave as is (minor)."
**What is wrong:** Given P16's total exclusion of `Related Pages` from scoring, F-09 having INFO severity and "or leave as is" framing is acceptable as an editorial note. However, per Issue 3, the exemption should have been applied rather than conditional on exact capitalisation matching. The F-09 entry as an INFO item is harmless and the practical suggestion (capitalise) is reasonable. This is a low-priority inconsistency rather than a harmful error.
**Correction:** Retain F-09 as an INFO note. Reframe it as: "Capitalise `## Related pages` to `## Related Pages` for sitewide convention consistency (INFO — no scoring impact)." The "or leave as is" qualifier should be removed — convention consistency should be applied.

---

### Issue 5: Verdict fail count needs adjustment after corrections
**Severity:** MEDIUM
**Check affected:** Verdict Summary
**Finding in original:** "24 checks fail" with ID list including 2.4 and treating 3.4 as subsumed.
**What is wrong:** After Issue 1 (2.4 is PASS) and Issue 2 (3.4 should be in the list independently): remove 2.4, add 3.4. Net change: 0 (one removed, one added). Corrected count remains 24, but the list changes.
**Correction:** Corrected fail count: 24 checks fail. Failing IDs: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 4.8, 5.1, 5.7, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3 (2.4 removed, 3.4 added).

---

## Confirmed Correct Findings

- **Check 1.2 FAIL:** `how_to` correctly identified as deprecated 12-type value. `pageType: instruction` is the correct migration target.
- **P42 compliance:** Check 1.3 correctly logged as N/A with co-fix dependency note on pageVariant. Not an independent FAIL.
- **P15 compliance:** `purpose` field reported as ABSENT (not inferred from pageType). Correctly absent = FAIL for 1.4 with proposed value.
- **P41 compliance:** `industry` and `niche` both flagged as FAIL with concrete proposed values and "confirm before applying" per P51. Not N/A or INFO.
- **Check 4.5 PASS:** Prerequisites section (lines 67–72) is explicitly present and complete. Docker, NVIDIA Container Toolkit, go-livepeer with `-aiWorker`, 8 GB VRAM minimum all stated. Correctly identified as the strongest of the four pages in this batch on this check.
- **Check 5.2 PASS:** Correctly notes that Prerequisites + StyledSteps + CardGroup structure means the template requirement is structurally met for `instruction` post-migration, even though current pageType is deprecated.
- **P50 compliance:** `pageType: how_to` is correctly failed on check 1.2 (deprecated alias). No valid 7-type pageType was incorrectly failed.
- **Dead import detection (5.10):** `LinkArrow` correctly identified as imported but unused. Source line 32 confirms the import; no `LinkArrow` usage in the page body.
- **Llama 3.1 70B Q4 VRAM inconsistency (6.4):** This page shows `~40 GB`; model-demand-reference shows `~35–40 GB`. Correctly flagged as a range-vs-point inconsistency for SME alignment. Not asserted as an error (the correct value is unknown).
- **All internal links verified with docs.json line references:** Four links confirmed at specific docs.json lines.
- **P47 full-path compliance:** Link verification uses full path, not just page slug.
- **P39 compliance:** No `status: current` + `veracityStatus: unverified` combination recommended. The fix recommends `veracityStatus: unverified` without changing the `status: draft` that the page already has. This is a coherent recommendation.
- **Category verdict counts match check table (except 2.4 issue):** Category 1: 9 fails (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11) — confirmed. Category 4: 1 fail (4.8) — confirmed. Category 5: 3 fails (5.1, 5.7, 5.10) — confirmed. Category 6: 5 fails (6.1, 6.4, 6.6, 6.8, 6.9) — confirmed.
- **Overall quality assessment accurate:** This page is correctly characterised as the best-structured of the four. The prerequisites are present, the steps are complete, the voice is clean, and the scope is well-bounded.

---

## Corrected Verdict

**Corrected fail count:** 24 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 4.8, 5.1, 5.7, 5.10, 6.1, 6.4, 6.6, 6.8, 6.9, 9.1, 9.3

**Net change from original:** 0 (2.4 removed, 3.4 added). Count stays at 24 but the composition changes.

**Rating justification:** The report is structurally sound. P1–P54 are broadly applied. The three issues found are: (1) a P17/P28 self-correction applied in the scan section but not propagated back to the check table and verdict, (2) a P49 count ambiguity on check 3.4, and (3) a P16 misapplication on the `Related pages` scoring. None materially alter the diagnosis. This is the most reliable report of the batch.
