# Critical Review of Check Report
## `v2/orchestrators/setup/r-monitor.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/setup/r-monitor.md`
**Original page verified against:** `v2/orchestrators/setup/r-monitor.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** False negative — invented exemption (P16 misapplication)
**Location in report:** Check 3.2, Heading Score Table note, Category 3 verdict
**What's wrong:** The report treats `## See also` (r-monitor.mdx line 64) as exempt from all heading checks, citing learnings.md P16 and treating it as a "Related Pages equivalent structural element." This is incorrect. P16 exempts exactly one heading: `Related Pages`. checks.mdx check 3.2 explicitly lists `See Also` in the **Banned** (never) tier: `Basics`, `Notes`, `How It Works`, `See Also`, `Conclusion`, `What's Next`. `See Also` is not `Related Pages`. The exemption does not extend to `See Also`. The heading `## See also` on r-monitor.mdx is a check 3.2 FAIL under the Banned tier. The report's exemption is fabricated — it has no basis in checks.mdx or P16.
**What should have been said/done:** Check 3.2 should include a FAIL finding for `## See also` (line 64) — Banned tier term. The Heading Score Table exemption note should read only: "Related Pages heading is exempt from scoring per checks.mdx check 3.1 and P16. `See also` is NOT exempt — it is a Banned tier term per check 3.2 and must be renamed." The Category 3 verdict must add this additional check 3.2 FAIL to the count.

---

### Issue 2
**Type:** Result/detail contradiction + category verdict miscounting (P28 violation)
**Location in report:** Category 2 verdict
**What's wrong:** The Category 2 check table shows: 2.1 PASS, 2.2 PASS, 2.3 PASS, 2.4 FAIL, 2.5 PASS, 2.6 FAIL, 2.7 PASS, 2.8 PASS, 2.9 PASS, 2.10 PASS, 2.11 FAIL = 8 PASS, 3 FAIL. The verdict states "7 PASS, 3 FAIL" — the PASS count is understated by 1.
**What should have been said/done:** Category 2 verdict: 8 PASS, 3 FAIL.

---

### Issue 3
**Type:** Result/detail contradiction + category verdict miscounting (P28 violation)
**Location in report:** Category 3 verdict
**What's wrong:** The Category 3 check table shows: 3.1 FAIL, 3.2 FAIL, 3.3 PASS, 3.4 FAIL, 3.5 FAIL, 3.6 FAIL, 3.7 FAIL = 1 PASS, 6 FAIL. The verdict states "1 PASS, 5 FAIL, 1 exempt." The "1 exempt" is the `See also` heading being counted as a verdict slot — but (a) the exemption is wrong per Issue 1, and (b) even if it were exempt, exemptions do not occupy a verdict slot; they are invisible to all heading checks per P16. The FAIL count is 6, not 5 — the `See also` Banned-tier violation is being counted as the exempt slot instead of as a FAIL.
**What should have been said/done:** Once the Issue 1 correction is applied: Category 3 verdict: 1 PASS, 7 FAIL (adding the `See also` FAIL to the existing 6). Even if the `See also` finding were not added, the verdict "5 FAIL" misses the 6 FAILs already present in the check table (3.1, 3.2, 3.4, 3.5, 3.6, 3.7).

---

### Issue 4
**Type:** Miscategorisation of finding
**Location in report:** Check 2.11 detail
**What's wrong:** Check 2.11 is "Terminology locked and consistent." The report uses check 2.11 to report two broken links (lines 67, 68) — `./install-go-livepeer` and `../advanced/rewards-and-fees`. Broken links are a Category 8 (Links & Rendering) issue, specifically check 8.1. They are not a terminology consistency issue. The checker has placed link-resolution failures under terminology, which inflates check 2.11's failure scope and muddies the check 8.1 record. The links ARE correctly identified in check 8.1 as well — so they are logged in the right place too, but the 2.11 placement is an additional miscategorisation that could mislead a remediation agent into treating link fixes as terminology fixes.
**What should have been said/done:** Check 2.11 should pass (or note only genuine terminology items). The broken link findings belong exclusively in check 8.1. The 2.11 FAIL caused by this miscategorisation inflates the Category 2 FAIL count. If the link findings are removed from 2.11, check 2.11 should be reviewed for any genuine terminology violations. On the actual page, "active set" is used consistently and correctly at lines 44, 55. No genuine terminology failures are present. Check 2.11 should be PASS.

---

### Issue 5
**Type:** Missed finding — proposed fix introduces banned construction (P44 violation)
**Location in report:** Banned Construction Scan, finding at line 49, proposed fix
**What's wrong:** The Banned Construction Scan correctly flags the `if [condition]` construction at line 49 (Warning block). The proposed fix is: "Reward() must be called every round. Missed rounds forfeit inflation rewards — automate or use a service." This proposed replacement contains an em-dash (`—`). CLAUDE.md explicitly prohibits em-dashes in all visible text. A fix that introduces a banned construction is worse than no fix (P44).
**What should have been said/done:** The proposed fix must not contain an em-dash. A compliant alternative: "Reward() must be called every round. Missed rounds forfeit inflation rewards. Automate reward calls or use a service that does it." This breaks the em-dash construction into two sentences while preserving the meaning.

---

### Issue 6
**Type:** Result/detail contradiction + category verdict miscounting (P28 violation)
**Location in report:** Category 5 verdict
**What's wrong:** The Category 5 check table shows: 5.4 PASS, 5.6 PASS, 5.10 PASS = 3 PASS. 5.1 FAIL, 5.2 FAIL, 5.5 FAIL = 3 FAIL. 5.3 NOT-TESTED. 5.7 N/A, 5.8 N/A, 5.9 N/A = 3 N/A. The verdict states "2 PASS, 3 FAIL, 1 NOT-TESTED, 4 N/A" — PASS count is 2 instead of 3, N/A count is 4 instead of 3.
**What should have been said/done:** Category 5 verdict: 3 PASS, 3 FAIL, 1 NOT-TESTED, 3 N/A.

---

### Issue 7
**Type:** Missed finding (P49 violation)
**Location in report:** Final Verdict
**What's wrong:** The Final Verdict does not enumerate individual FAIL check IDs. P49 requires the verdict to count individual check IDs that fail and list them explicitly. The FAIL check IDs across this report are (applying Issue 1 correction): 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 2.4, 2.6, 2.11 (under miscategorisation caveat from Issue 4), 3.1, 3.2, 3.4, 3.5, 3.6, 3.7, 4.4, 4.5, 4.7, 5.1, 5.2, 5.5, 6.1, 6.2, 6.3, 6.5, 6.6, 6.8, 6.9, 7.5, 8.1, 9.1, 9.3. The verdict gives no enumeration.
**What should have been said/done:** Final Verdict must include the full FAIL check ID list with count, per P49.

---

### Issue 8
**Type:** Missed finding — `veracityStatus` fix consistency (P39 borderline)
**Location in report:** Cross-Category CC-2
**What's wrong:** CC-2 proposes adding `status: 'draft'` and `veracityStatus: 'unverified'` to the frontmatter. This is correct and P39-compliant. However, the Frontmatter Table entry for `status` says "FAIL — Required field absent" and then gives no proposed value in the table row. The concrete proposed value (`'draft'`) only appears buried in CC-2. Per P3 and P51, fixes must specify concrete values and be findable where the finding is reported. A remediation agent reading only the Frontmatter Table would not know what value to add for `status`.
**What should have been said/done:** The Frontmatter Table row for `status` should state: `FAIL — Required field absent. Proposed: status: 'draft' (content NOT-TESTED; use 'current' only after veracityStatus: 'verified' — confirm before applying).` This is already present in CC-2 but should also appear in the table row per P51.

---

## Summary

**Issue count:** 8
**False positives:** 0
**Missed findings:** 3 (Issue 1: `See also` is Banned — not exempt; Issue 5: proposed fix contains em-dash; Issue 7: no P49 check ID enumeration)
**Result/detail contradictions:** 4 (Issues 2, 3, 6 — verdict miscounts; Issue 4 — 2.11 miscategorisation)
**Other errors:** 1 (Issue 8: proposed value not surfaced at point of finding)
**Report overall quality:** NEEDS REWORK
**Recommended action:** Discard and re-run, or apply corrections before handing to a remediation agent. The most serious error is Issue 1: `See also` is an explicitly Banned heading per check 3.2, and the report exempts it using a rule that applies only to `Related Pages`. This is a false negative on a Banned-tier violation. Issues 2, 3, and 6 are consistent category miscount errors (PASS counts understated, N/A counts overstated) that will misdirect any agent counting failures. Issue 5 embeds a banned construction in a proposed fix for a banned construction. The underlying page-level findings (thin content, missing frontmatter, broken links, heading quality failures) are correctly identified — the report's diagnostic conclusions are sound, but the counts, the `See also` exemption error, and the P44 violation in the proposed fix must be corrected before the report can be used as a remediation input.
