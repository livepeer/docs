# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/config-and-optimisation/reward-call-tuning.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: `status: current` flagged as a FAIL on the frontmatter field — but `status` is not one of the 10 required fields in checks.mdx
**Severity:** MEDIUM
**Check affected:** Frontmatter Table, 1.8
**Finding in original:** The Frontmatter Table lists `status: current` as FAIL with: "`status: current` requires `veracityStatus: verified` AND zero REVIEW flags (checks.mdx §1.8). Page has 3 FACT CHECK blocks. The combination is incoherent."
**What is wrong:** The `status` field itself does not fail independently — its value (`current`) creates an incoherence when combined with missing `veracityStatus` and open FACT CHECK blocks. The FAIL correctly belongs to check 1.8 (`veracityStatus present and honest`) which the report also flags. The Frontmatter Table FAIL row on `status` is an additional call-out that isn't a separate check — it's part of the 1.8 root cause. However, the report handles this correctly in the check table by folding the `status` incoherence into check 1.8. The Frontmatter Table row adds clarity even if it isn't a canonical check. This is a framing issue, not a false positive or false negative.
**What is right:** The check 1.8 finding is correctly cited to checks.mdx §1.8. P21 is satisfied — the schema rule is cited. P39 is satisfied — the fix does NOT recommend `status: current` + `veracityStatus: unverified`; it correctly recommends either downgrading status or verifying content.
**Correction:** No content change required. Noting that the `status` Frontmatter Table FAIL row is a narrative aid, not an independent check violation. The report correctly folds it into check 1.8.

---

### Issue 2: Category 1 verdict count — "9 checks fail" but the stated list has 8 IDs
**Severity:** HIGH
**Check affected:** Category 1 verdict, P26/P49
**Finding in original:** "Category 1 verdict: 9 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10 (plus `status` incoherence — cross-referenced to BD-1)"
**What is wrong:** The list contains 8 IDs (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10). The stated count is 9. The parenthetical `status` incoherence is not a separate check ID — it is part of check 1.8, as the report itself acknowledges. Check 1.11 is PASS in the check table (description 159 chars, well-formed). So the correct count is 8 failing checks in Category 1, not 9. Per P42, check 1.3 is N/A (co-fix of 1.2) and should not be counted. The "plus `status` incoherence" is redundant with check 1.8. No additional check ID justifies the count of 9.
**Correction:** Category 1 verdict: 8 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10

---

### Issue 3: Verdict Summary total is 17 — this should be 16 given Issue 2
**Severity:** MEDIUM
**Check affected:** Verdict Summary, P26/P49
**Finding in original:** "Count: 17 checks fail. Individual IDs: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 3.1, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9"
**What is wrong:** Counting the listed IDs: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 3.1, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9 = 17 IDs. The arithmetic is internally consistent with the stated count. However, if Category 1 has 8 failing checks (not 9 per Issue 2), the total changes. Looking at the breakdown: 8 (Cat1) + 1 (Cat2: 2.4) + 1 (Cat3: 3.1) + 1 (Cat5: 5.7) + 6 (Cat6: 6.1, 6.2, 6.4, 6.5, 6.6, 6.9) = 17. The discrepancy in Issue 2 (stating 9 when the list has 8) may be a Category 1 verdict typo that does not propagate to the final count (since the final count counts actual listed IDs, not the Category 1 verdict number). The final list of 17 IDs is internally consistent; the Category 1 verdict phrasing "9 checks fail" is the isolated error.
**Correction:** Category 1 verdict: change "9 checks fail" to "8 checks fail" — this does not change the final total of 17 IDs. The 17 is correct.

---

### Issue 4: `how_to` migration — no pageVariant required; correctly handled (confirmation)
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.2, 1.3, P42
**Finding in original:** Check 1.3: "N/A (co-fix) — Not present; co-fix of 1.2. For `purpose: configure` or `purpose: operate`, no pageVariant required"
**What is wrong:** Nothing. Frameworks.mdx §1.1 shows `how_to` → `instruction` with no pageVariant ("—"). Correctly treated as N/A co-fix. P42 satisfied.
**Correction:** Confirmed correct.

---

### Issue 5: Check 2.8 row contains a 2.4 finding — structural misclassification
**Severity:** MEDIUM
**Check affected:** 2.8, 2.4, P46
**Finding in original:** Check 2.8 row: "PASS — No 'easy to set up', 'the network rewards you for' found. Line 40: 'Use this page to calculate profitability...' — FAIL: this is a `This page [verb]` self-referential construction. Check 2.4 catch. (See Banned Construction Scan.)"
**What is wrong:** Check 2.8 is for per-audience prohibited phrases. The `Use this page to...` construction is a banned construction under check 2.4 (`This page [verb]` self-reference). It should not appear in the check 2.8 row at all — it is correctly identified as a check 2.4 violation and the note says "Check 2.4 catch." But the check 2.8 result says PASS while the row contains a violation note that applies to a different check. The 2.8 row is internally inconsistent — PASS result with a FAIL note for a different violation. Per P28, the result column must match the detail text conclusion. Since the 2.8 violation is actually a 2.4 violation (not a 2.8 violation), check 2.8 result should be PASS with no qualifying note, and the `Use this page` finding should appear only in check 2.4 and the Banned Construction Scan.
**Correction:** Check 2.8 row: Remove the cross-reference note about line 40. The `Use this page` construction is exclusively a check 2.4 matter. Check 2.8 result: PASS with detail "No 'easy to set up', 'the network rewards you for', or other per-audience prohibited phrases found."

---

### Issue 6: Heading score for "Timing considerations" — report flags it as 20/25 threshold but recommendation in Finding Index uses different heading
**Severity:** LOW
**Check affected:** 3.1, F-10, P38
**Finding in original:** Heading Score Table: "Timing considerations (H2) | 4 | 3 | 4 | 5 | 4 | 20/25 — threshold." F-10 proposes rename to `Round timing`. Check 3.1 notes this as "marginal" and F-10 labels it MEDIUM severity.
**What is wrong:** "Timing considerations" scores 20/25 — this is exactly at the threshold (not below it), so it technically passes check 3.1 (≥20/25). The report correctly flags it as a MEDIUM recommendation rather than a FAIL. However, F-10 is logged as a check 3.1 finding. Check 3.1 requires ≥20/25 — this heading passes. F-10 should either be removed from the Finding Index (since 3.1 PASSES for this heading at 20/25) or reframed as an editorial recommendation (INFO severity) separate from the check 3.1 fail. The check 3.1 verdict says only "When to skip calling intentionally" fails — which is correct. F-10 in the Finding Index pointing to check 3.1 for an at-threshold heading is misleading.
**Correction:** F-10 should be reclassified as INFO severity and noted as an editorial improvement recommendation, not a check 3.1 failure. The check 3.1 verdict should remain: 1 check fails for "When to skip calling intentionally" only.

---

### Issue 7: Rename suggestion for "When to skip calling intentionally" → "Reward call threshold" — P38 overlap check needed
**Severity:** MEDIUM
**Check affected:** F-09, P38
**Finding in original:** F-09 proposes "Reward call threshold" as replacement for "When to skip calling intentionally." The report adds a note: "check for overlap. `Profitability calculation` covers the maths; `Reward call threshold` names the decision. No overlap conflict."
**What is wrong:** The overlap check is performed and the conclusion (no overlap) is stated. The report satisfies P38 by explicitly checking. Confirmed: source has H2 "Profitability calculation" (line 44) and the proposed H3 "Reward call threshold" addresses the decision boundary rather than the calculation mechanics. The distinction is defensible.
**Correction:** Confirmed correct. P38 satisfied.

---

### Issue 8: Dead import finding (F-12) — verified against source
**Severity:** INFO (confirmation)
**Check affected:** F-12, 5.10
**Finding in original:** F-12: "Dead imports: `StyledTable`, `TableRow`, `TableCell` imported but not used. Remove lines 30 import."
**What is wrong:** Verified against source line 30: `import { StyledTable, TableRow, TableCell } from '/snippets/components/wrappers/tables/Tables.jsx'` — confirmed present. Scanning source body: no `<StyledTable>`, `<TableRow>`, or `<TableCell>` tags found in the page body. The Related Pages section uses `<CardGroup>` and `<Card>`, not table components. The dead import finding is correct.
**Correction:** Confirmed correct.

---

### Issue 9: P51 compliance — confirmed correct (confirmation)
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.4, 1.6, 1.7, 1.9, 1.10, P51
**Finding in original:** All proposed values formatted "Proposed: `purpose: configure` — confirm before applying" etc. The report notes `purpose` as potentially `configure` OR `operate` and flags it as a blocking decision.
**What is wrong:** Nothing. Both proposed values are presented as options requiring confirmation. P51 satisfied.
**Correction:** Confirmed correct.

---

### Issue 10: P39 compliance — confirmed correct (confirmation)
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.8, BD-1, P39
**Finding in original:** Blocking Decision BD-1 correctly states two options: (A) change `status: current` to `status: draft` + `veracityStatus: unverified`, or (B) verify all claims and set `status: current` + `veracityStatus: verified`. The recommended path is Option A.
**What is wrong:** Nothing. The report does not recommend `status: current` + `veracityStatus: unverified` as a fix combination. P39 is satisfied.
**Correction:** Confirmed correct.

---

### Issue 11: `Use this page to...` construction verified against source (confirmation)
**Severity:** LOW (confirmation)
**Check affected:** 2.4, F-08, P29
**Finding in original:** F-08: "Line 40: `Use this page to...` — banned `This page [verb]` construction. Delete line 40 entirely."
**What is wrong:** Nothing. Source line 40 confirmed: "Use this page to calculate profitability, configure the `-reward` flag, choose between automatic and manual calling, and decide when skipping rounds is justified." This is a `This page [verb]` (via `Use this page to [verb]`) self-referential banned construction per checks.mdx §2.4. Correct FAIL.
**Correction:** Confirmed correct. Fix (delete line 40) is appropriate and does not introduce new violations.

---

## Confirmed Correct Findings

- **Check 1.1**: All 6 missing fields confirmed absent from source frontmatter (lines 1–26). Correct FAIL.
- **Check 1.2**: `pageType: how_to` at source line 22. Deprecated alias. Migration to `instruction` correct. No pageVariant per Frameworks.mdx §1.1.
- **Check 1.8**: `status: current` at source line 24, `veracityStatus` absent, 3 FACT CHECK blocks confirmed (lines 72, 125, 151). Incoherence per checks.mdx §1.8 correctly identified. P21 satisfied (cited to §1.8).
- **Check 1.11**: Description confirmed at source lines 4–6: "Calculate whether reward calling is profitable at your stake level, configure automatic vs manual calling, and optimise timing to minimise gas costs on Arbitrum." 159 characters (within limit). Correct PASS.
- **Check 2.1 / P54**: `optimise` and `minimise` confirmed UK spellings in description. No US spelling violations in source. Correct PASS.
- **Check 2.4**: `Use this page to...` at source line 40 confirmed. Correct FAIL. Correctly placed in 2.4, not 2.2 (P46 satisfied).
- **P41**: `industry` and `niche` both flagged FAIL with concrete proposed values. P41 satisfied.
- **P37**: `how_to` characterised as "Deprecated alias" — correct.
- **Heading score table**: All headings scored with per-dimension breakdown. P2 satisfied. "When to skip calling intentionally" confirms 17/25 below threshold. Score math: 3+3+4+4+3=17. Correct FAIL.
- **P16/P53**: `Related Pages` heading excluded from score table and from checks 3.2 and 3.7. Total exemption applied correctly.
- **Link verification**: All 4 Related pages cards verified against docs.json with specific line citations. `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` confirmed at docs.json line 2911. P33/P47 satisfied.
- **P42**: pageVariant absence treated as co-fix of 1.2, not independent finding. Correct.
- **Category 9 check 9.1**: `status: current` without sign-off + FACT CHECK blocks = correctly flagged FAIL. Linked to BD-1 resolution.
- **P48**: No StyledStep components used — no step titles. Correct N/A.
- **Banned Construction Scan scope**: CustomDivider `middleText` props scanned (Profitability Threshold, Automatic vs Manual, Timing Strategies, Monitoring) — no em-dashes. P20 satisfied.
- **BD-1 framing**: Both options presented neutrally. P52 satisfied — no prejudgment of the blocking decision outcome.
- **Dead import detection (F-12)**: Correctly identifies unused StyledTable/TableRow/TableCell imports. P9 satisfied.
- **F-09 rename check**: P38 satisfied — overlap with "Profitability calculation" H2 explicitly checked and resolved.
- **P28**: Result column/detail text consistency holds across all check rows except the structural issue in check 2.8 (Issue 5 above).

---

## Corrected Verdict

**Corrected fail count:** 17 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 3.1, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9

The original count of 17 and the listed IDs are correct. The defects are:
1. Category 1 verdict phrasing "9 checks fail" when the list has 8 IDs (Issue 2) — isolated wording error, does not change final total
2. Check 2.8 row contains a 2.4 finding note while stating PASS — structural noise, not a count error (Issue 5)
3. F-10 framed as check 3.1 failure when 20/25 is at-threshold PASS — should be INFO (Issue 6)

The report is MOSTLY RELIABLE. The 17-check fail count is correct. All substantive content findings are accurate and actionable. BD-1 is correctly escalated. P39 is correctly satisfied — the report does not recommend the incoherent `status: current` + `veracityStatus: unverified` combination.
