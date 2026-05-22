# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/config-and-optimisation/pricing-strategy.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Category 2 verdict states check 2.4 FAILS, then the Banned Construction Scan retracts this — P28 violation
**Severity:** HIGH
**Check affected:** 2.4, Category 2 verdict, P28
**Finding in original:** Category 2 check table: check 2.4 "FAIL — See Banned Construction Scan below — 2 flagged items." But the Banned Construction Scan summary states: "No flagged violations. 3 BORDERLINE items (lines 67, 102, 252–255) — all in configuration instruction contexts, all acceptable." Then: "Corrected Category 2 verdict: 0 checks fail. (F-check 2.4 removed — was stated as FAIL in Category 2 but scan finds no violations.)"
**What is wrong:** The check table has check 2.4 as FAIL, but the detailed scan finds no violations and the report itself corrects this at the end. Per P28, the result column must match the detail text conclusion — if the scan finds no violations, the check 2.4 row must say PASS, not FAIL. The self-correction at the end of the report is present (which is good) but the uncorrected FAIL in the check table creates a contradiction. An executing agent reading the check table would act on a FAIL that the report's own analysis withdrew.
**Correction:** Check 2.4 result must be changed to PASS in the check table row. The category verdict must be updated to "0 checks fail." The Finding Index must not contain a check 2.4 entry. The final total failing check IDs must remove any 2.4 entry.

---

### Issue 2: Final fail list inconsistency — check 2.4 appears in the fail list despite being retracted
**Severity:** HIGH
**Check affected:** Verdict Summary, P26/P49
**Finding in original:** "Total failing check IDs: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9" — "Count: 16 checks fail."
**What is wrong:** The report correctly removed 2.4 from the final list (the Corrected Category 2 verdict section states 0 checks fail in Category 2). The final fail list of 16 IDs is: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9. Counting these: 16. This is internally consistent with the self-correction. However, the check 2.4 row in the check table still says FAIL, which means the check table and the final fail list disagree. The fail list is the corrected version; the check table is not corrected.
**Correction:** The check table row for 2.4 must be updated to PASS to be consistent with the final fail list. The category verdict correction note at the bottom does not substitute for correcting the check table.

---

### Issue 3: Gateways link verification — the report flags a caveat but the link can be confirmed
**Severity:** LOW
**Check affected:** 8.1, P33/P47
**Finding in original:** "Gateways link verification note: `/v2/gateways/guides/payments-and-pricing/pricing-strategy` — this path follows the gateways tab structure. Confirming presence requires checking the gateways section of docs.json. The path pattern is consistent with docs.json gateways entries. Mark as PASS with caveat: exact path should be verified against gateways docs.json entries before publishing. Full docs.json gateways section not fully read."
**What is wrong:** The report marks this PASS with a caveat that the full docs.json was not read for gateways. Per P33, a link must be verified against docs.json before declaring PASS. This link is declared PASS but the verifying work was not done. The correct result would be PASS (confirmed: docs.json line 2691 contains `"v2/gateways/guides/payments-and-pricing/pricing-strategy"`) — but the report's methodology was incomplete. The conclusion happens to be right; the process was wrong.
**Correction:** The PASS is factually correct (path confirmed at docs.json line 2691). The caveat note should be removed and replaced with: "Confirmed at docs.json line 2691."

---

### Issue 4: `how_to` migration — no pageVariant required; correctly handled (confirmation)
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.2, 1.3, P42
**Finding in original:** Check 1.3: "N/A (co-fix) — Not present; co-fix of 1.2. For `purpose: configure`, no pageVariant required"
**What is wrong:** Nothing. Frameworks.mdx §1.1 shows `how_to` → `instruction` with no pageVariant ("—"). Correctly treated as N/A co-fix, not independent FAIL. P42 satisfied.
**Correction:** Confirmed correct.

---

### Issue 5: Cross-Category Connections section states "6 required frontmatter fields absent" but only 6 are listed in Category 1
**Severity:** LOW
**Check affected:** Cross-Category Connections
**Finding in original:** "Root Cause 2: 6 required frontmatter fields absent + description over-length / Affects: Cat 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11"
**What is wrong:** The cross-category note says "6 required frontmatter fields absent" and then lists 8 affected check IDs (1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11). The 6 absent fields are: `purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. The 8 checks correspond to: 1.1 (overall missing count), 1.4 (purpose), 1.6 (complexity), 1.7 (lifecycleStage), 1.8 (veracityStatus), 1.9 (industry), 1.10 (niche), 1.11 (description over-length). Description over-length is a separate issue from field absence. The "6 absent" count is correct for the absent fields, but 1.11 is a different root cause (description too long, not a missing field). The cross-category connection conflates them.
**Correction:** Root Cause 2 should split into: "Root Cause 2a: 6 required fields absent (1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10). Root Cause 2b: description over-length (1.11)." This is a minor structural issue, not a content error.

---

### Issue 6: P51 compliance — confirmed correct (confirmation)
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.4, 1.6, 1.7, 1.9, 1.10, P51
**Finding in original:** All proposed values: "Proposed: `purpose: configure` — confirm before applying" etc.
**What is wrong:** Nothing. All proposed values correctly formatted per P51.
**Correction:** Confirmed correct.

---

### Issue 7: P39 compliance — confirmed correct (confirmation)
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.8, P39
**Finding in original:** Report recommends `veracityStatus: unverified` with `status: draft` already present.
**What is wrong:** Nothing. The page has `status: draft`. The fix to add `veracityStatus: unverified` is coherent per checks.mdx §1.8. P39 not violated.
**Correction:** Confirmed correct.

---

## Confirmed Correct Findings

- **Check 1.1**: All 6 missing fields confirmed absent from source frontmatter (lines 1–27). Correct FAIL.
- **Check 1.2**: `pageType: how_to` at source line 23. Deprecated alias. Migration to `instruction` correct. No pageVariant per Frameworks.mdx §1.1.
- **Check 1.11**: Description confirmed at source lines 4–7: "Set competitive pricing for video and AI workloads on a Livepeer orchestrator. Covers pricePerUnit, per-pipeline AI pricing in aiModels.json, pricePerGateway, autoAdjustPrice, and market positioning methodology." Approximately 202 characters, confirming the over-length FAIL.
- **Check 2.1 / P54**: No US spelling violations in source text. Correct PASS. `significantly` not present in source (confirmed). P54 applied correctly.
- **Check 2.2**: Banned word scan result PASS confirmed. Candidates checked; none present in source.
- **Gateways link**: `/v2/gateways/guides/payments-and-pricing/pricing-strategy` confirmed at docs.json line 2691. PASS correct.
- **P41**: `industry` and `niche` both flagged FAIL with concrete proposed values. P41 satisfied.
- **P37**: `how_to` characterised as "Deprecated alias" — correct characterisation.
- **Heading score table**: All 11 headings scored with per-dimension breakdown. All ≥20/25. Check 3.1 PASS confirmed.
- **P16/P53**: `Related Pages` heading excluded from score table. Not referenced in check 3.2 or 3.7. Correct total exemption applied.
- **Check 3.2**: No `See Also` heading. No Banned-tier terms present. Correct PASS.
- **Category 4 PASS**: Nav sequence confirmed from docs.json. `pricing-strategy` is first in config-and-optimisation group per docs.json line 2921. Correct.
- **Category 7 PASS**: Page exists at docs.json line 2921. Confirmed.
- **Check 5.7**: Same root cause as 1.2. Not independently logged in fail count.
- **Category 6 FAIL**: 4 FACT CHECK blocks confirmed in source (lines 52, 78, 104, 173). FAIL for 6.1, 6.2, 6.4, 6.5, 6.6, 6.9 correct.
- **P42**: pageVariant absence treated as co-fix of 1.2, not independent finding. Correct.
- **Inline markdown table at lines 91–94**: Confirmed present in source (lines 90–94 use raw markdown table syntax). INFO-level finding correct.
- **P48**: No StyledStep components used — no step titles. Correct N/A.
- **Banned Construction Scan scope**: Explicitly includes CustomDivider `middleText` props (Video Pricing, AI Pricing, Per-Gateway Pricing, Pricing Flag Reference), Tabs `title` props — P20 satisfied.

---

## Corrected Verdict

**Corrected fail count:** 15 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9

Wait — the original final list already excludes 2.4: "1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9" = 16 IDs. Count verified: 16.

The original count of 16 is factually correct for the fail list as stated. The issues are structural (check 2.4 table row not updated, gateways link caveat) rather than count errors.

**Corrected fail count: 16 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9**

The count is correct. The defects requiring rework are: check 2.4 row must show PASS (Issues 1 and 2), gateways link verification must cite docs.json line 2691 (Issue 3). The report is MOSTLY RELIABLE for content findings; structural consistency in the check table requires correction.
