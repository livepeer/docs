# Critical Review of Check Report
## `v2/orchestrators/setup/rs-install.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/setup/rs-install.md`
**Original page verified against:** `v2/orchestrators/setup/rs-install.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** Result/detail contradiction (P26/P31 violation)
**Location in report:** Check 3.1 vs Heading Score Table
**What's wrong:** Check 3.1 states `"Verify your installation" scores 18/25 (FAIL)`. The Heading Score Table at the bottom of the report scores the same heading `16/25`. The dimension breakdown (3+2+3+4+4 = 16) confirms 16 is correct. The "18" figure in check 3.1 was not copied from the table — it was restated from memory and is wrong.
**What should have been said/done:** Per P31, heading scores cited in narrative or check rows must be copied from the Heading Score Table, not restated independently. Check 3.1 should read: `"Verify your installation" scores 16/25 (FAIL).`

---

### Issue 2
**Type:** Result/detail contradiction + category verdict miscounting (P28 violation)
**Location in report:** Category 5 verdict
**What's wrong:** The check table for Category 5 shows: 5.1 PASS, 5.2 PASS, 5.4 PASS, 5.5 PASS, 5.6 PASS, 5.7 PASS, 5.10 PASS = 7 PASS. 5.3 = NOT-TESTED. 5.8, 5.9 = 2 N/A. The verdict states "6 PASS, 1 FAIL (NOT-TESTED for component approval), 3 N/A." This is wrong in three ways: (1) PASS count should be 7, not 6; (2) N/A count should be 2, not 3; (3) NOT-TESTED is classified as FAIL in the verdict, which is incorrect — NOT-TESTED is a distinct result state meaning the check was not executed, not that it failed.
**What should have been said/done:** Category 5 verdict: 7 PASS, 1 NOT-TESTED, 2 N/A. Per P28, result column entries must match the detail conclusion. A NOT-TESTED entry must not be relabelled FAIL in the verdict count.

---

### Issue 3
**Type:** Result/detail contradiction (P28 violation)
**Location in report:** Check 3.2, Category 3 verdict
**What's wrong:** Check 3.2 is marked PASS in the result column. The detail text identifies "Next steps" (H2, line 455) as falling in the Avoid tier per check 3.2 and attaches a FLAG with a rename recommendation. A check that finds an Avoid-tier term and recommends a fix should be marked FAIL or at minimum BORDERLINE — not PASS. The PASS result is inconsistent with the detail concluding there is a problem requiring a rename. This propagates into the Category 3 verdict: the report states "4 PASS, 2 FAIL, 1 conditional FLAG" when the actual counts from the check table are 5 PASS (3.2, 3.3, 3.4, 3.5, 3.6), 2 FAIL (3.1, 3.7). The "(1 conditional FLAG)" in the verdict is accounting for the 3.2 issue by creating a third verdict category that does not exist in the framework.
**What should have been said/done:** Check 3.2 should be FAIL (Avoid-tier term present, rename required). Category 3 verdict: 4 PASS (3.3, 3.4, 3.5, 3.6), 3 FAIL (3.1, 3.2, 3.7). The "conditional FLAG" pseudo-category should not exist in the verdict line.

---

### Issue 4
**Type:** Missed finding (P49 violation)
**Location in report:** Final Verdict
**What's wrong:** The Final Verdict does not enumerate individual check IDs that fail. P49 requires the verdict summary to count individual check IDs and list them explicitly. The report lists 10 numbered issues in the verdict but groups them by category root cause, not by check ID. The actual FAIL check IDs across the report are: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 3.1, 3.7, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.8, 6.9, 8.1, 8.2, 9.1, 9.3 = 25 individual FAIL check IDs. The verdict gives no count of these.
**What should have been said/done:** Final Verdict must include: "25 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 3.1, 3.7, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.8, 6.9, 8.1, 8.2, 9.1, 9.3" per P49.

---

### Issue 5
**Type:** Severity miscalibration / missed finding
**Location in report:** Check 3.2 detail, rename suggestion "Continue From Here"
**What's wrong:** The check 3.2 detail proposes `"Continue From Here"` as an alternative rename for "Next steps." Per P18, every heading rename suggestion must be validated against the check 3.2 prohibited list. "Continue From Here" does not contain a banned or Avoid-tier term — that part passes. However, the report does not validate `"After Install"` (proposed in the Heading Score Table) against the prohibited list either. More critically, check 3.2 in the banned list explicitly includes `What's Next` (banned), and `Next Steps` (Avoid) — both with capitals. The page uses lowercase "Next steps". The report correctly identifies "Next steps" as Avoid-tier. No issue with the identification. The issue is the inconsistency: PASS result vs flagged detail (see Issue 3 above). Rename proposals themselves are clean.
**What should have been said/done:** No additional action needed on the rename proposals themselves. This is subsumed by Issue 3.

---

### Issue 6
**Type:** Inconsistency / borderline missed finding
**Location in report:** Check 2.4, Banned Construction Scan, line 417
**What's wrong:** The Banned Construction Scan correctly flags line 417: `"...so you can stop the process after the device lines appear."` as a `can [verb]` construction (FAIL). However, the report's proposed fix is `"Press Ctrl+C after the device lines appear."` and notes this is `"Already present as preNote at line 423"` — meaning the fix already exists on the page. The report does not make this clearly actionable: if the proposed fix (the direct imperative) is already present as `preNote`, the actual fix may be to delete the redundant prose sentence at line 417 entirely, not to rewrite it. The fix proposal is ambiguous on what should be deleted vs rewritten.
**What should have been said/done:** The fix should state: "Delete the sentence at line 417 ('...so you can stop the process after the device lines appear.') — the equivalent instruction is already present as `preNote` at line 423. Retain the preNote, remove the redundant prose."

---

### Issue 7
**Type:** Missed finding — proposed fix introduces banned construction (P44 violation)
**Location in report:** Check 1.11, proposed description fix
**What's wrong:** The report proposes a replacement description: `'Install go-livepeer on Linux, macOS, Windows, or Docker. Covers GPU driver requirements, binary install, and verification.'` The word "Covers" in the proposed replacement is noted as "borderline but acceptable for an instruction page description" in the same check 1.11 detail. However, "Covers" describes the page's scope — it is the same self-referential content pattern that check 1.11 is supposed to eliminate (the original description also uses "Covers"). A proposed fix that retains the same structural problem it was fixing is not a valid canonical fix (P45).
**What should have been said/done:** The proposed description should lead with the outcome, not the scope. Example: `'Install go-livepeer on Linux, macOS, Windows, or Docker. Includes GPU driver requirements and binary verification.'` This removes the scope-describing "Covers" opener while staying under 160 chars.

---

### Issue 8
**Type:** Missed finding — link verification gap (P47 borderline)
**Location in report:** Check 8.1, link at line 461
**What's wrong:** The report identifies `/v2/orchestrators/get-started/quickstart` as broken and proposes `/v2/orchestrators/quickstart/guide` as a fix (with a note to confirm). docs.json confirms that `v2/orchestrators/quickstart/guide` exists at line 2850. The report correctly flags the broken link but asks for confirmation on the fix when the fix is already verifiable. Verified: docs.json line 2850 contains `"v2/orchestrators/quickstart/guide"`. The correct fix is confirmed, not hypothetical.
**What should have been said/done:** The fix for line 461 should be stated as confirmed: change to `/v2/orchestrators/quickstart/guide` (docs.json line 2850). No human confirmation needed for this link — only for the choice between quickstart entry paths.

---

## Summary

**Issue count:** 7 substantive issues (Issue 5 is informational)
**False positives:** 0
**Missed findings:** 2 (Issue 6: ambiguous fix instruction; Issue 7: fix introduces problem it was resolving)
**Result/detail contradictions:** 3 (Issues 1, 2, 3)
**Count errors:** 3 (Issues 2, 3, 4)
**Other errors:** 1 (Issue 8: confirmation hedge on verifiable fix)
**Report overall quality:** MOSTLY RELIABLE
**Recommended action:** Use with corrections noted above. Core findings (broken links, missing frontmatter, REVIEW flag / status conflict, heading failures) are all correct and actionable. The errors are in score consistency (18 vs 16), category verdict miscounts, and a self-defeating proposed description fix. None of the substantive findings are false positives. Corrections to Issues 1, 2, 3, and 4 should be applied before handing to a remediation agent.
