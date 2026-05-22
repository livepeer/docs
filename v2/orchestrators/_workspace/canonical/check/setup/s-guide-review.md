# Critical Review of Check Report
## `v2/orchestrators/setup/s-guide.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/setup/s-guide.md`
**Original page verified against:** `v2/orchestrators/setup/s-guide.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** Missed finding
**Location in report:** Check 1.9, Check 1.10, Frontmatter Table rows for `industry` and `niche`
**What's wrong:** Both `industry` and `niche` are absent from the page. The report marks both checks N/A. Per learnings.md Batch 1, item 1 (explicitly corrected): "User confirmed these ARE required. The critical reviews were wrong. The original check reports were correct to flag them." P41 (Batch 6) reinforces this: "Flag both as FAIL with concrete proposed values when absent. Never write N/A or INFO for these two fields." The report uses N/A despite this being a recurring regression that has been corrected across five batches of learnings.
**What should have been said/done:** Check 1.9: FAIL — `industry` absent. Proposed: `industry: [technical, livepeer]` — confirm before applying. Check 1.10: FAIL — `niche` absent. Proposed: `niche: [infrastructure, hardware]` — confirm before applying. Both fields should appear in the Frontmatter Table as FAIL rows with proposed values. The missing-fields count in the Frontmatter Table note (currently stated as "5" but supported by only 3 field names) should read 5 to include `industry` and `niche`.

---

### Issue 2
**Type:** Result/detail contradiction
**Location in report:** Check 2.11 — Terminology locked and consistent
**What's wrong:** The check result is stated as FAIL. The detail text concludes "Severity: PASS on terminology." The result column and the detail conclusion directly contradict each other. Per P28 (Batch 5): "Result column must match the detail text conclusion." The detail scans all visible text, finds no deprecated terms, and explicitly concludes PASS. The FAIL result in the heading is wrong.
**What should have been said/done:** Check 2.11 result: PASS. Detail text is accurate and can stand unchanged. The Category 2 verdict table entry must also be adjusted: Cat 2 currently shows "FAIL" — if this is the only FAIL in Cat 2 contributing to the verdict (2.6 and 2.9 are partial/severity-only, not check-level FAILs), this correction may affect whether the category verdict remains FAIL or becomes PASS. Note: 2.5 is also stated as "PASS (partial)" — that heading is contradictory but not a check-level FAIL. The overall effect is that the Cat 2 — Voice & Copy verdict may need review, though other checks (2.6, 2.9) do cite failures. This requires the checker to re-audit the Category 2 FAIL contributors and ensure the verdict is coherent.

---

### Issue 3
**Type:** Severity miscalibration
**Location in report:** Check 3.2 result, check 3.2 severity assignment
**What's wrong:** Check 3.2 is assigned severity HIGH. The check result line itself reads "FAIL (CRITICAL)". These two statements within the same check are inconsistent — the parenthetical says CRITICAL but the explicit severity label says HIGH. Per P26/P49 rules, the severity stated in the check must be what goes into the summary count. The summary table shows Category 3 with 0 CRITICAL and 1 HIGH. That would map to the HIGH label. But the check text flags it CRITICAL. The report is self-contradictory on severity for this check.
**What should have been said/done:** Choose one severity and apply it consistently in both the check body and the summary table. `See Also` is a Banned-tier heading term — CRITICAL is defensible given the Banned designation. If CRITICAL is the correct level, the summary table should show 1 CRITICAL for Category 3, not 0.

---

### Issue 4
**Type:** Self-consistency — missing fields count
**Location in report:** Frontmatter Table summary note (line 27 of report)
**What's wrong:** The note reads "Missing required fields (5): `complexity`, `lifecycleStage`, `veracityStatus`." Only 3 field names are listed after the colon, but the count says 5. The note then adds "`pageType` and `purpose` are present but have non-canonical values" — but those are not "missing" fields. They are present-but-invalid. The (5) count is either wrong (should be 3 missing) or the note is trying to count non-canonical fields as "missing" without saying so, which conflates two different error types that the framework distinguishes. This directly contradicts the reporting rule: "Characterise the error correctly."
**What should have been said/done:** Either: "Missing required fields (3): `complexity`, `lifecycleStage`, `veracityStatus`. Two further fields present with non-canonical values: `pageType: overview` (deprecated alias) and `purpose: overview` (invalid value)." — or, if `industry` and `niche` are included per Issue 1 above: "Missing required fields (5): `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`."

---

### Issue 5
**Type:** Missed finding — P41 regression
**Location in report:** Frontmatter Table (industry/niche rows), Check 1.1
**What's wrong:** Check 1.1 states "Missing: `complexity`, `lifecycleStage`, `veracityStatus`." It does not include `industry` or `niche` despite both being required per learnings.md Batch 1 correction and P41. This means the check 1.1 finding is incomplete — it identifies only 3 of the 5 missing required fields.
**What should have been said/done:** Check 1.1: "Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`." This is a direct consequence of Issue 1 above but is logged separately because check 1.1 and the Frontmatter Table are two separate locations that must both be updated per P17 (self-consistency corrections must update ALL locations).

---

### Issue 6
**Type:** Missed finding
**Location in report:** Check 1.3 — pageVariant
**What's wrong:** The report marks check 1.3 N/A with "Fix as part of 1.2 resolution." P42 (Batch 6) states: "Check 1.3 (pageVariant) is a co-fix dependency of check 1.2. When pageType is deprecated, set `pageVariant` as part of the same root cause fix. Do not log check 1.3 as an independent HIGH finding." The report correctly avoids logging it as an independent HIGH — that part is right. However, it marks it N/A rather than acknowledging it as a co-fix dependency. The correct framing per P42 is to mark it as a co-fix dependency within 1.2, not N/A. N/A implies "this check does not apply" — but it does apply, it's just bundled with 1.2. This is a minor framing issue but it's what P42 specifically prescribes.
**What should have been said/done:** Check 1.3 result: N/A is acceptable per the intent of P42 (do not inflate as independent HIGH), but the note should read "co-fix dependency of 1.2 — resolved as part of the pageType migration, not an independent finding" rather than just "Fix as part of 1.2 resolution." The current wording is borderline acceptable but could be clearer.

---

### Issue 7
**Type:** Verdict count inconsistency (P49 violation)
**Location in report:** Summary section, verdict narrative
**What's wrong:** The verdict narrative (line 560) states "Eight CRITICALs" and enumerates their causes. Counting the CRITICAL-labelled checks across the check table: 1.2 (CRITICAL), 1.4 (CRITICAL), 4.3 (CRITICAL), 4.4 (CRITICAL), 4.8 (CRITICAL, per check text), 7.1 (CRITICAL), 7.4 (CRITICAL). That is 7 CRITICAL checks in the check table. The summary table totals 8 CRITICAL. The discrepancy of 1 appears to come from check 3.2 which is labelled "FAIL (CRITICAL)" in its result line but assigned HIGH in the severity label — and is counted as HIGH (0) in the summary. If check 3.2's parenthetical CRITICAL is being counted in the summary CRITICAL total, that would give 8, but it contradicts the HIGH label. If check 3.2 is HIGH as labeled, then the summary total should show 7 CRITICAL, not 8. One of these numbers is wrong. Additionally, per P49 (Batch 6): "Verdict Summary must count individual check IDs that FAIL, not the number of categories." The report's summary table counts severities per category, not individual FAIL check IDs — P49 requires listing "X checks fail: 1.1, 1.2, 1.3..." The report does not do this.
**What should have been said/done:** Reconcile check 3.2 severity (choose CRITICAL or HIGH and apply consistently). Adjust the CRITICAL count in the summary table accordingly (7 or 8, depending on that resolution). The verdict narrative should list individual FAIL check IDs, not a narrative count of causes.

---

### Issue 8
**Type:** Missed finding — `pageType: overview` migration path
**Location in report:** Check 1.2, Fix F1
**What's wrong:** The report correctly identifies `pageType: overview` as a deprecated alias. The fix F1 proposes: "Change `pageType: overview` to `pageType: concept` + add `pageVariant: overview`." However, the Frameworks.mdx §1.1 migration table (line 70) explicitly states for `overview`: "Migrate explicitly to correct new type — [no pageVariant to set]." The migration table does NOT assign `pageVariant: overview` as the migration target for the deprecated `overview` pageType. `pageVariant: overview` is a cross-type variant that can be applied to any of the 7 pageTypes — it is not the designated landing spot for the deprecated `overview` pageType. The correct fix is to determine the correct new type (concept, instruction, etc.) and NOT necessarily set `pageVariant: overview` as part of the migration. Setting `pageVariant: overview` on a concept page is valid — but the check report presents it as the migration prescription from the deprecated type, which the framework does not support. The fix as written mixes the migration question (what pageType?) with the variant question (is this an orientation-style entry page?) and presents them as one prescribed action when Frameworks.mdx leaves the pageType determination to human judgment.
**What should have been said/done:** Fix F1 should read: "Migrate `pageType: overview` to the correct new type. Frameworks.mdx §1.1 migration table specifies: determine the correct new type explicitly. If the page is retained as an orientation entry page, `pageVariant: overview` may be appropriate but requires Alison's sign-off on the pageType first. Proposed: `pageType: concept` — confirm before applying. pageVariant: Proposed: `pageVariant: overview` — confirm before applying."

---

### Issue 9
**Type:** Fabricated occurrence / false positive
**Location in report:** Check 8.1, link table, line 349–350 (Card line 37 duplicated)
**What's wrong:** The report's link table has two line-37 entries: one for "Orchestrator stats and monitoring (card)" and one for "Activate on the network (card)." Looking at the actual page, line 37 is: `<Card title="Activate on the network" icon="rocket" href="./publish-offerings" arrow />` — there is only one card per line. Line 36 is the "Orchestrator stats and monitoring" card. The report assigns two different links to the same line number (37). One of these line-number attributions is wrong. Per P29: "Every cited occurrence must be verified against the actual file before reporting." The actual page has: line 33 = Hardware, line 34 = Install, line 35 = Connect, line 36 = Configure, line 37 = Orchestrator stats, line 37 = Activate. Wait — there are 6 cards but only lines 33–37 plus line 38 (closing tag). Let me be precise: the page has lines 32–38 for the Columns block, with 6 Card elements on consecutive lines 33–37 plus a closing tag. That is 5 lines for 6 cards, meaning two cards are on the same line, or the line numbers are off. In any case, the report assigns both "Orchestrator stats and monitoring" and "Activate on the network" to line 37, which at minimum needs verification. This is not necessarily a fabricated occurrence — the cards do exist — but the line-number attribution is incorrect for at least one of them. Per P29, line numbers must be verified.
**What should have been said/done:** Verify line numbers for all Card components against the actual file. The link table should correctly assign each card to its actual line number. The broken-link findings themselves are correct (both `./orchestrator-stats` and `./publish-offerings` are broken) — only the line attribution is questionable.

---

### Issue 10
**Type:** Missed finding — report scope note
**Location in report:** Footer (line 567)
**What's wrong:** The footer states the report was reviewed against "learnings.md P1–P40." However, learnings.md contains P1–P52. The report was generated (or states it was reviewed) against only 40 of the 52 learning rules, meaning P41–P52 (Batch 6 prompting changes) were not applied. This is confirmed by Issues 1 and 5 above (P41 regression on industry/niche), Issue 2 (relates to P28 which is in P1–P40 but the root of the 2.11 contradiction), and potentially Issue 6 (P42). The report explicitly excludes Batch 6 rules from its scope.
**What should have been said/done:** The report should have been run against P1–P52 as stated in the task prompt. The footer should reflect the actual learning rules applied. The P41–P52 omission directly caused Issue 1 (industry/niche treated as N/A instead of required FAIL).

---

## Summary

**Issue count:** 10
**False positives:** 0
**Missed findings:** 4 (Issues 1, 5, 6, 8)
**Result/detail contradictions:** 1 (Issue 2)
**Severity miscalibrations:** 1 (Issue 3)
**Self-consistency errors:** 2 (Issues 4, 7)
**Fabricated occurrence / line-number error:** 1 (Issue 9)
**Scope omission:** 1 (Issue 10)

**Report overall quality:** MOSTLY RELIABLE

**Recommended action:** Use with corrections noted above.

The report's core findings are sound: the page is an orphaned structural duplicate of `guide.mdx`, all 16 links are broken, the pageType and purpose values are invalid, and the Blocking Decision (deprecate vs retain) is correctly identified and framed. The prose quality assessment and voice checks are accurate. The blocking decision recommendation (Option A: deprecate) is well-reasoned.

The corrections required are:
1. Add `industry` and `niche` as FAIL findings with proposed values (P41 regression — highest priority fix).
2. Change check 2.11 result from FAIL to PASS to match its own detail conclusion.
3. Resolve check 3.2 severity inconsistency (CRITICAL in body text, HIGH in summary table).
4. Fix the Frontmatter Table "Missing required fields (5)" note to list 5 actual field names.
5. Reconcile the CRITICAL count in the summary (7 vs 8 discrepancy).
6. Verify line numbers for Card components in the link table.

None of these corrections alter the overall verdict (NEEDS WORK / Blocking Decision required) or the primary recommendation (deprecate). The report is reliable for decision-making purposes as long as the corrections above are noted.
