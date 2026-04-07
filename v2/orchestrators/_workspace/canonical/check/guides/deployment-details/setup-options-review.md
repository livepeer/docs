# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/deployment-details/setup-options.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

NEEDS REWORK

---

## Issues Found

### Issue 1: CRITICAL — `pageType: overview` mischaracterised as "deprecated alias" — it is a type-confusion failure
**Severity:** HIGH
**Check affected:** 1.2
**Finding in original:** "FAIL — `overview` is a **pageVariant**, not a pageType. Per Frameworks.mdx §1.1: '`overview` is a pageVariant, never a pageType.' Canonical migration: pageType must be determined by content."
**What is wrong:** The finding identifies the correct problem (pageVariant used as pageType) but does NOT characterise it as the critical type-confusion failure it is. Per the audit instructions, `pageType: overview` should be characterised as CRITICAL under check 1.2, and specifically identified as a "type-confusion failure" — not a deprecated alias (the deprecated aliases table in Frameworks.mdx §1.1 lists `overview` as "Migrate explicitly to correct new type" — which is different from a simple alias migration with a known target). The check calls it a "CRITICAL classification error" in the check 1.2 detail and in F-02, which is correct. However:

1. The check's severity for F-02 in the Finding Registry is listed as "CRITICAL" — this is correct.
2. The check's Category 1 verdict says "10 FAIL" and lists check 1.2 — this is correct.
3. The check does not characterise the migration as requiring a "blocking decision since there's no automatic migration path" — it does identify BD-1 for this. Correct.

**Assessment:** The finding IS characterised as CRITICAL and the BD is correctly identified. The specific language "type-confusion failure" is not used but the substance is correct. The check is adequate here.
**Correction:** The characterisation is functionally correct. "CRITICAL classification error" is acceptable equivalent to "type-confusion failure." No correction required on the substance. Add note: the migration path for `overview` pageType in Frameworks.mdx §1.1 is "Migrate explicitly to correct new type" — meaning the target type is not predetermined. BD-1 correctly captures this.

---

### Issue 2: `pageType: overview` — check 1.2 says CRITICAL but the check 1.3 result says FAIL (independent finding) — P42 violation
**Severity:** HIGH
**Check affected:** 1.3 (P42)
**Finding in original:** Check 1.3: "FAIL — `overview` should be `pageVariant`, not `pageType`. When 1.2 resolved, set `pageVariant: overview` as co-fix (P42)."
**What is wrong:** Per P42, check 1.3 (pageVariant) is a co-fix dependency of check 1.2 when pageType is deprecated. The check correctly notes "When 1.2 resolved, set `pageVariant: overview` as co-fix (P42)" — but then lists check 1.3 as FAIL in the check table and includes it in the Category 1 verdict count. Per P42, check 1.3 should be listed as co-fix/N/A, not as an independent FAIL. The Category 1 verdict claims "10 FAIL (1.1, 1.2, 1.3, 1.4, ...)" — including 1.3 as an independent FAIL inflates the count by 1.
**Correction:** Check 1.3 should be N/A (co-fix of 1.2, per P42). Remove 1.3 from the FAIL count. The Frontmatter Table row for `pageVariant` says "FAIL — When pageType is corrected, set `pageVariant: overview` as co-fix" — this should be changed to N/A (co-fix of 1.2).

---

### Issue 3: Verdict Summary count — stated "24 checks fail" but listed IDs total 27, and 1.3 is a false FAIL
**Severity:** HIGH
**Check affected:** Verdict Summary (P26/P49)
**Finding in original:** "24 checks fail: 1.1, 1.2, 1.3, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.5, 3.1, 3.2, 3.4, 3.7, 5.1, 5.2, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 8.3, 9.1, 9.3"
**What is wrong:** Count the listed IDs: 1.1, 1.2, 1.3, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13 = 11; 2.5 = 1; 3.1, 3.2, 3.4, 3.7 = 4; 5.1, 5.2, 5.7 = 3; 6.1, 6.4, 6.5, 6.6, 6.8 = 5; 8.3 = 1; 9.1, 9.3 = 2 = total 27. Stated as "24 checks fail." Off by 3. Additionally, 1.3 is a co-fix (should be N/A per Issue 2), so the genuine fail count is 26. Per P49.
**Correction:** Corrected fail count: 26 checks fail (removing 1.3 co-fix): 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.5, 3.1, 3.2, 3.4, 3.7, 5.1, 5.2, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 8.3, 9.1, 9.3

---

### Issue 4: P37 — `purpose: orientation` characterised as "deprecated alias" — confirmed correct (type a)
**Severity:** N/A (confirmed correct)
**Check affected:** 1.4
**Finding in original:** "`orientation` is a deprecated alias. Fix: `purpose: orient`"
**What is wrong:** Nothing. `orientation` is in the Frameworks.mdx §1.2 deprecated aliases table (`orientation` → `orient`). This is a P37 type (a) error (deprecated alias in old schema). Correct. Per P37 the check should state the type — it does not explicitly label it "type (a)" but the characterisation as "deprecated alias" is functionally correct.
**Correction:** Confirmed correct. Recommend adding "type (a): deprecated alias" label for consistency with P37.

---

### Issue 5: P50 — `pageType: overview` correctly failed on check 1.2 (it is NOT a valid 7-type canonical pageType)
**Severity:** N/A (confirmed correct)
**Check affected:** 1.2
**Finding in original:** "FAIL — `overview` is a **pageVariant**, not a pageType."
**What is wrong:** Nothing. Per P50, `overview` is NOT one of the seven canonical pageType values (navigation, concept, tutorial, guide, instruction, reference, resource). It is a pageVariant. Check 1.2 FAIL is correct and appropriate. Per P50 note: `pageType: overview` IS deprecated in the sense that it is a pageVariant value used as pageType — this should be CRITICAL in check 1.2. The check correctly flags it as CRITICAL.
**Correction:** Confirmed correct.

---

### Issue 6: P39 — `status: current` + absent `veracityStatus` fix
**Severity:** MEDIUM
**Check affected:** 1.8
**Finding in original:** "Proposed: `status: current`, `veracityStatus: unverified` initially — run veracity check before setting to `verified`"
**What is wrong:** Per P39, `status: current` + `veracityStatus: unverified` is an INCOHERENT combination and must never be recommended. The check explicitly recommends this combination as an initial state. This is a P39 violation. The valid fix is: change `status` to `draft` and set `veracityStatus: unverified`. The check should not suggest keeping `status: current` alongside `veracityStatus: unverified` at any point.
**Correction:** The 1.8 fix must be: `status: draft`, `veracityStatus: unverified` — not `status: current`, `veracityStatus: unverified`. The F-09 entry in the Finding Registry also states: "`veracityStatus: unverified` until VRAM figures confirmed" — this is correct for the veracityStatus direction but must be paired with `status: draft` (not `status: current`). Update F-09 fix to: "Fix: `status: draft`, `veracityStatus: unverified`. Add REVIEW flags to VRAM numbers."

---

### Issue 7: P41 — `industry`/`niche` correctly flagged FAIL with concrete proposed values
**Severity:** N/A (confirmed correct)
**Check affected:** 1.9, 1.10
**Finding in original:** "Proposed: `industry: ["technical"]` — confirm" and "Proposed: `niche: ["infrastructure", "web3"]` — confirm"
**What is wrong:** Nothing. Both absent fields flagged FAIL with concrete values and P51 confirmation gates.
**Correction:** Confirmed correct.

---

### Issue 8: P42 — `pageVariant` absence logged as independent FAIL — violation
**Severity:** HIGH
**Check affected:** 1.3 (already captured in Issue 2 above)
**What is wrong:** Same as Issue 2. This is the primary P42 violation. The Finding Registry does not have a separate finding for check 1.3 (it is folded into F-02 "Resolve BD-1"). This is actually correct — F-02 is the root-cause finding for both 1.2 and 1.3. However, the check table and verdict count still list 1.3 as an independent FAIL.
**Correction:** Same as Issue 2 — remove 1.3 from check table FAIL and verdict count.

---

### Issue 9: Check 5.2 FAIL — "Required sections present" fails because BD-1 is unresolved
**Severity:** MEDIUM
**Check affected:** 5.2
**Finding in original:** "FAIL — depends on BD-1. If `navigation`: needs portal/routing structure. If `guide`: needs Overview + sections. Current structure has neither a clean navigation structure nor a clear guide structure."
**What is wrong:** Per P35, findings evaluate the current state of the page, not a proposed future state. Check 5.2 ("Required sections present") is evaluated against the current page structure — which does have sections (Setup Type, Software Path, Operational Mode, Workload Mode, Next Steps), a CardGroup summary at bottom, and a Tip orientation block. The current structure could be judged against the current `pageType: overview` (deprecated), in which case there are no required sections for that type, or against the closest canonical type. The check says "current structure has neither a clean navigation structure nor a clear guide structure" — this is an evaluation of fit to proposed types, not current state. Per P35, the check should evaluate the current page as it exists. However, the FAIL is defensible: since `pageType: overview` is deprecated and has no valid template, check 5.2 cannot be assessed against a standard — FAIL is appropriate pending BD-1 resolution.
**Correction:** The 5.2 FAIL is defensible as a BD-1-dependent finding. The explanation should be reframed: "Check 5.2 cannot be assessed because `pageType: overview` has no canonical template. FAIL pending BD-1 resolution — evaluate against the resolved pageType."

---

### Issue 10: Check 2.10 — listed as FAIL in Category 2 verdict but the check table shows only check 2.5 as FAIL
**Severity:** HIGH
**Check affected:** 2.10, Category 2 verdict (P28)
**Finding in original:** "Category 2 verdict: 2 FAIL (2.4 PASS on review, 2.5, 2.10). Corrected: 1 FAIL (2.5)"
**What is wrong:** The Category 2 narrative initially states "2 FAIL (2.4 PASS on review, 2.5, 2.10)" then self-corrects to "1 FAIL (2.5)." However, check 2.10 in the check table shows: "FAIL — Opening Tip block frames page as a decision list before grounding the reader. Not a caveat, but not ideal. Logged in 2.5." So 2.10 is listed as FAIL in the check table but the verdict says only 1 FAIL (2.5). Per P28, the result column must match the detail conclusion — if 2.10 says "FAIL" in the result column, it should be in the fail count. The Category 2 verdict self-corrects to "1 FAIL (2.5)" but the check 2.10 result says FAIL. This is an internal inconsistency. The verdict count in the main fail list does include only 2.5 from Category 2 — which means 2.10 was removed from the fail list but the check table still shows FAIL.
**Correction:** Per P28, either: (a) change check 2.10 result from FAIL to PASS (since the issue is the same as 2.5 — both concern the Tip block opener) and note "same root cause as 2.5, not a separate failure"; or (b) add 2.10 to the fail count. The self-correction in the Category 2 verdict suggests (a) is intended — but the check table result was not updated. Update check 2.10 result to PASS (duplicate of 2.5) and leave the main fail count excluding 2.10.

---

### Issue 11: `Next Steps` heading — correctly flagged as Avoid-tier, not just low score
**Severity:** N/A (confirmed correct)
**Check affected:** 3.2, F-08
**Finding in original:** "`Next Steps` — in the Avoid-tier list per checks.mdx §3.2"
**What is wrong:** Nothing. Per P53, the `Related Pages` exemption applies only to the exact string `Related Pages`. `Next Steps` is not exempt. The check correctly scores it (13/25) and flags it under check 3.2 as Avoid-tier. Correct.
**Correction:** Confirmed correct.

---

### Issue 12: P52 — BD-1 blocking decision has two options; co-fix notes frame both options
**Severity:** N/A (confirmed correct)
**Check affected:** BD-1
**Finding in original:** "Options: (a) `pageType: navigation + pageVariant: overview` if this is a pure routing page, (b) `pageType: guide + pageVariant: overview` if it contains substantive orientation content."
**What is wrong:** Nothing. BD-1 correctly presents both options as equal without defaulting to one. Per P52 compliant.
**Correction:** Confirmed correct.

---

## Confirmed Correct Findings

- **P37 type (a)** correctly applied to `purpose: orientation` (deprecated alias).
- **P41** — `industry` and `niche` both flagged FAIL with concrete proposed values.
- **P47** — all 9 internal links verified against docs.json (all PASS — solid navigation foundation).
- **P50** — `pageType: overview` correctly FAIL on check 1.2 (not a valid 7-type canonical value; type-confusion CRITICAL).
- **P51 confirmation gates** on all proposed frontmatter values.
- **P52 compliance** — BD-1 presents both `navigation` and `guide` options without defaulting.
- **P53** — `Next Steps` correctly scored and flagged (not exempt); `Related Pages` not present and correctly not referenced.
- **Category 6 veracity** findings specific (VRAM numbers named, "missed reward round" claim named).
- **Dead import detection** — `Quote` import correctly identified (P9 compliant).
- **`Icon`/`Badge`** without explicit imports correctly marked NOT-TESTED per P22.

---

## Corrected Verdict

**Rating: NEEDS REWORK**

Three systematic errors: (1) check 1.3 listed as independent FAIL — P42 violation (should be N/A co-fix); (2) P39 violation — recommends `status: current` + `veracityStatus: unverified` at check 1.8 (prohibited combination); (3) verdict count arithmetic wrong (stated 24, actual 27, corrected to 26 after removing 1.3). Additionally, check 2.10 result column says FAIL but verdict excludes it — P28 inconsistency.

**Corrected fail count: 26 checks fail** (removing 1.3 co-fix): **1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.5, 3.1, 3.2, 3.4, 3.7, 5.1, 5.2, 5.7, 6.1, 6.4, 6.5, 6.6, 6.8, 8.3, 9.1, 9.3**

**Critical fix required before executing:** Update the 1.8 / F-09 fix recommendation from "`status: current`, `veracityStatus: unverified`" to "`status: draft`, `veracityStatus: unverified`."
