# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/monitoring-and-tooling/explorer-operations.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Category 1 verdict count is ambiguous and potentially inflated
**Severity:** MEDIUM
**Check affected:** Category 1 verdict / P49
**Finding in original:** "FAIL. 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10 (7 distinct check IDs, 1.1 is the aggregate). Unique failing check IDs: 1.4, 1.6, 1.7, 1.8, 1.9, 1.10 (6 individual fields; 1.1 is the summary check)."
**What is wrong:** P49 requires the verdict to count individual failing check IDs. Check 1.1 is a real check ID in checks.mdx (the "all 10 required fields present" check). It fails here because fields are missing. That is a genuine FAIL on check 1.1. The report then lists 6 more individual checks that also fail (1.4, 1.6, 1.7, 1.8, 1.9, 1.10). The total unique failing check IDs is 7: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10. The report opens stating "8 checks fail" then immediately self-corrects to "7 distinct check IDs." The inconsistency in the same sentence is confusing and violates P26 (verdict counts must be consistent). The correct count is 7.
**Correction:** Category 1 verdict should read: "FAIL. 7 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10."

---

### Issue 2: P37 correctly applied — confirmed
**Severity:** N/A (confirmation)
**Check affected:** 1.4 / P37
**Finding in original:** "`purpose: guide` — wrong-field error (type b per P37): `guide` is a pageType value, not a purpose value."
**Status:** CORRECT. The page has `purpose: guide` in frontmatter (confirmed at line 25 of source). P37 specifies this is a "wrong-field error (type b)" — a valid pageType value placed in the purpose field. The report correctly does NOT characterise it as a deprecated alias. No issue here.

---

### Issue 3: P39 check — status fix recommendation is internally consistent
**Severity:** N/A (confirmation)
**Check affected:** status INFO row / P39
**Finding in original:** "Fix: add `veracityStatus: unverified` and keep `status` as-is..."
**Status:** CORRECT. P39 requires that `status: current` + `veracityStatus: unverified` never be recommended together. This page has `status: published` (not `status: current`). The recommendation to add `veracityStatus: unverified` while keeping `status: published` is internally consistent. No violation.

---

### Issue 4: P41 — industry/niche correctly flagged FAIL with concrete values
**Severity:** N/A (confirmation)
**Check affected:** 1.9, 1.10 / P41
**Finding in original:** "`industry` — Required (P41, learnings Batch 1). Proposed: `industry: [technical, livepeer]` — confirm before applying." Same pattern for `niche`.
**Status:** CORRECT. Both fields are flagged FAIL (not N/A or INFO) with concrete proposed values. P41 satisfied.

---

### Issue 5: P42 — pageVariant correctly handled as N/A
**Severity:** N/A (confirmation)
**Check affected:** 1.3 / P42
**Finding in original:** "`pageVariant` valid if present — N/A. `pageVariant` not present; pageType is canonical (no migration needed)."
**Status:** CORRECT. `pageType: guide` is a canonical 7-type value. No migration is required, so no pageVariant co-fix is needed. P42 correctly satisfied.

---

### Issue 6: P50 — pageType: guide correctly passed on check 1.2
**Severity:** N/A (confirmation)
**Check affected:** 1.2 / P50
**Finding in original:** "`guide` is a valid canonical value (P50)"
**Status:** CORRECT. `guide` is in the 7-type canonical schema. Check 1.2 is PASS.

---

### Issue 7: P51 — proposed frontmatter values formatted correctly
**Severity:** N/A (confirmation)
**Check affected:** All proposed values / P51
**Finding in original:** All proposed values use format "Proposed: `field: value` — confirm before applying."
**Status:** CORRECT throughout. P51 satisfied.

---

### Issue 8: Banned construction scan — P46 check: `not [X]` classification location
**Severity:** MEDIUM
**Check affected:** 2.4 / P46
**Finding in original:** Check 2.4 FAIL: "One `not [X]` primary statement identified at line 218." The Banned Construction Scan at line 213 identifies "What it leaves out" as BORDERLINE. The Overall Verdict lists check 2.4 as FAIL.
**What is wrong:** There are two distinct items flagged: (1) "What it leaves out" at lines 213 and 262 in the Banned Construction Scan — correctly classified BORDERLINE, correctly placed under check 2.4. (2) Check 2.4 detail text says "One `not [X]` primary statement identified at line 218" but line 218 in the scan table is the `if [condition]` entry about service URI mismatch — not a `not [X]` statement. The primary flag for `not [X]` is the "What it leaves out" heading at line 213. The cross-reference between check 2.4 and the scan table line numbers is internally inconsistent. The check 2.4 note "at line 218" points to the wrong entry. Also: "What it leaves out" is a bold sub-label inside a section, not a heading. Classifying it as BORDERLINE is correct per P23 (no invented exemptions — BORDERLINE + human review is the right call for genuinely ambiguous cases). However, citing line 218 as the `not [X]` finding is a P29 violation (cited line does not contain what is claimed).
**Correction:** Check 2.4 detail should read: "BORDERLINE `not [X]` construction found: 'What it leaves out' bold label at line 52–56 (within 'Explorer scope' section). See Banned Construction Scan." The line 218 citation should be removed from check 2.4 — line 218 is an `if [condition]` in a diagnostic trigger, correctly classified No-flag in the scan. Check 2.4 verdict of FAIL should be downgraded to BORDERLINE pending human review per the scan table's own recommendation.

---

### Issue 9: Overall verdict check list inconsistency — P26
**Severity:** MEDIUM
**Check affected:** Overall Verdict / P26
**Finding in original:** "Failing checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4 (BORDERLINE), 5.7 (same root as 1.4), 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3."
**What is wrong:** Check 2.4 is listed as FAIL (BORDERLINE) in the verdict. P23 requires BORDERLINE to be flagged for human review, not counted as a FAIL. The verdict should acknowledge the BORDERLINE status separately from the confirmed FAIL list. Additionally, check 5.7 is noted as "(same root as 1.4)" — cross-referencing is correct per P13, but listing it as a distinct FAIL ID inflates the count since it shares a root cause with 1.4 and the 5.7 content is identical. It should be listed but noted as "co-fail with 1.4, same root."
**Correction:** Total confirmed FAILs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3 (16 checks). Check 2.4 is BORDERLINE — awaiting human review, not a confirmed FAIL. Verdict should separate these.

---

### Issue 10: P29 — line citation verification
**Severity:** MEDIUM
**Check affected:** 1.8 / P29
**Finding in original:** "Field absent. Page has `{/* FACT CHECK */}` flags at lines 75 and 287 (implicit comment)."
**What is wrong:** Line 75 is confirmed — the source file at line 75 contains `{/* FACT CHECK: Confirm "top 100" is still the current active set size... */}`. However, "line 287 (implicit comment)" — the source was read only to line 100 in this review session. The original checker cites line 287 as a second FACT CHECK flag but marks it "(implicit comment)" which is unexplained. This is either a second FACT CHECK flag in the lower portion of the file (not visible in this review) or a fabricated citation. The P29 requirement is that cited line numbers be verified against the actual file.
**Correction:** If the file contains a second FACT CHECK at line 287, the citation is valid — but the parenthetical "(implicit comment)" needs explanation. If no second flag exists, the citation should be removed. This requires reading lines 281–295 of the source. The finding count in 1.8 and 6.9 should note the single confirmed flag at line 75; the line 287 citation should be verified before treating as fact.

---

## Confirmed Correct Findings

- P15: `purpose: guide` read directly from frontmatter, stated in Frontmatter Table at line 19.
- P25: Navigation sequence confirmed from docs.json with line references (2930–2933).
- P33: All internal links verified against full path in docs.json with specific line citations.
- P37: `purpose: guide` error correctly characterised as wrong-field error (type b), not deprecated alias.
- P39: `status: published` + `veracityStatus: unverified` recommendation is internally consistent (not `status: current`).
- P41: `industry` and `niche` flagged FAIL with concrete proposed values.
- P42: `pageVariant` absent correctly handled as N/A (no deprecated migration needed).
- P46: No instance of `not [X]` placed under check 2.2. The `not [X]` finding is in check 2.4 and the Banned Construction Scan only.
- P47: Full path link verification against docs.json. All 5 sampled links include docs.json line numbers.
- P50: `pageType: guide` passed check 1.2 as valid canonical value.
- P51: All proposed frontmatter values use "Proposed: `field: value` — confirm before applying" format.
- P54: Check 2.1 covers only UK/US spelling patterns. No banned words or constructions folded into 2.1.
- Category 2 through Category 9 findings are internally consistent (aside from 2.4 BORDERLINE issue above).
- Veracity findings are specific: named claims, named locations, named pending-source types.
- Cross-Category Connections section correctly groups Root Cause 1–3.

---

## Corrected Verdict

**Corrected fail count:** 16 confirmed checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3.

**BORDERLINE (human review required, not confirmed FAIL):** 2.4 — "What it leaves out" bold label. Human sign-off needed before counting as FAIL.

**Line 287 citation in check 1.8:** Requires verification against source file before treating as confirmed.

**Overall page assessment stands:** NEEDS WORK. The report's substantive findings are sound. The issues above are presentational and count-level, not substantive misreadings.
