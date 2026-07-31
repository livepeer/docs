# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/ai-and-job-workloads/diffusion-pipeline-setup.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: `status: published` — schema rule invented without citation from checks.mdx
**Severity:** HIGH
**Check affected:** 1.8, 9.1, CC-3
**Finding in original:** "status: published requires veracityStatus: verified AND zero REVIEW flags per §1.8." This rule is applied in the Frontmatter Table, check 1.8 detail, CC-3, and the Fix List.
**What is wrong:** P21 requires that any finding asserting a schema rule must cite the specific checks.mdx section number. checks.mdx §1.8 states: "`status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags." The canonical value is `status: current` — not `status: published`. The page under review has `status: published`. There is no checks.mdx rule that states `status: published` requires `veracityStatus: verified`. `published` is not a canonical `status` value — the valid values are `current` and `draft`. The check report conflates two separate issues: (a) `status: published` is a non-canonical value (not `current`, not `draft`), and (b) the incoherence between a "published" claim and absent `veracityStatus`. The report's conclusion that the fix is "change to `status: draft` + `veracityStatus: unverified`" is correct in practical terms, but the legal basis for the FAIL is wrong: it is not a `status: published` → `veracityStatus: verified` schema rule. The actual violation is (a) `status` uses a non-canonical value (`published` is not in the valid enum), and (b) separately, `veracityStatus` is absent (always a FAIL per 1.8). The report should be corrected to cite both violations accurately: (1) `status: published` is a non-canonical enum value — valid values are `current` and `draft`; (2) `veracityStatus` is absent regardless of what `status` value is set.
**Correction:** Remove the invented rule "status: published requires veracityStatus: verified per §1.8." Replace with: "`status: published` is a non-canonical value — valid enum values are `current` and `draft`. Additionally, `veracityStatus` is absent (required per check 1.8 regardless of status value). Proposed: change `status` to `draft` and add `veracityStatus: unverified` — confirm before applying." The same correction applies to CC-3, the Fix List item F-10, and the 9.1 finding. This does not change any FAIL result — 1.8 remains a FAIL because `veracityStatus` is absent. But the cited rule is corrected to accurately represent what checks.mdx says.

---

### Issue 2: P37 — `purpose: guide` error type characterisation — CORRECT, confirmed
**Severity:** CONFIRMED CORRECT (not an error in the report)
**Check affected:** 1.4
**Finding in original:** "Error type: wrong field (P37 — a pageType value placed in the purpose field)."
**What is wrong:** Nothing. This is correctly characterised as a type (b) wrong-field error per P37. The report does NOT describe it as a deprecated alias. Per learnings.md Batch 4 item 9, the failure mode for `purpose: guide` is "valid pageType value in the wrong field" — not a deprecated alias. The report gets this right. Confirmed.
**Correction:** No correction needed. This finding is a confirmed correct application of P37.

---

### Issue 3: Check 2.4 result column contradicts the detail text
**Severity:** HIGH
**Check affected:** 2.4
**Finding in original:** "2.4 | Zero banned constructions | FAIL | `not [X]` found: line 789 ('The `-aiRunnerImage` flag is deprecated; use `-aiRunnerImageOverrides` instead' — not a banned `not [X]` construction, this is a direct instruction). Checked all body prose. See Banned Construction Scan for full candidate list. See F-02."
**What is wrong:** P28 requires that the Result column match the detail text conclusion. The detail text in check 2.4 says "not a banned `not [X]` construction, this is a direct instruction." The Banned Construction Scan (at the bottom of the report) concludes: "No banned constructions found." The Fix List item F-02 states: "Withdrawn — no banned constructions confirmed after full scan. Check 2.4 PASS." The detail text in 2.4 concludes non-violation; F-02 is withdrawn; yet the Result column reads FAIL. This is a P28 violation: the Result says FAIL but every piece of evidence in the report concludes PASS. The Category 2 verdict text then reports "1 check FAIL: 2.11" — which also contradicts the check table where 2.4 says FAIL and 2.11 says FAIL (the Category 2 verdict would be 2 FAILs, not 1). The report is self-contradictory on this point.
**Correction:** Check 2.4 Result must be corrected to PASS. The Category 2 verdict must be corrected: checks failing = 2.11 only (1 check). The overall fail count in the Verdict must decrease by 1: from 27 to 26 checks failing. The ID 2.4 must be removed from the Verdict's failing check ID list.

---

### Issue 4: Check 2.11 — heading question violation logged under wrong check
**Severity:** MEDIUM
**Check affected:** 2.11 vs 3.7
**Finding in original:** "2.11 | Terminology locked and consistent | FAIL | `optimization_flags` used as a technical field name in code (correct). However, `'Why Ollama?'` heading appears as an H3 — question in a heading violates the no-questions-in-headings rule per CLAUDE.md. See F-03."
**What is wrong:** The no-questions-in-headings rule is a heading structure rule — it belongs in Category 3 (Section Naming), specifically check 3.7 ("Sounds like expert editorial choice") or check 3.2 ("No banned or weak standalone heading terms"). It does NOT belong in check 2.11, which covers terminology consistency. The violation is real and correctly identified, but it is miscategorised: it should appear as a check 3.7 finding (or 3.2), not 2.11. Check 2.11 should read PASS for terminology consistency (the terminology itself is consistent) with a cross-reference note: "Question heading `### Why Ollama?` flagged under check 3.7." The `optimization_flags` vs `optimisation` distinction is correctly resolved in the detail text and is not a violation.
**Correction:** Move the `### Why Ollama?` question-heading finding from check 2.11 to check 3.7 (already flagged there as F-03). Correct check 2.11 Result to PASS. Remove 2.11 from the failing check IDs list. The Category 2 verdict changes from "1 check FAIL: 2.11" to "0 checks FAIL." The `### Why Ollama?` violation remains in Category 3. Overall fail count decreases by 1 additional check: from 26 (after Issue 3 correction) to 25.

---

### Issue 5: P39 — `status: published` + `veracityStatus: unverified` recommended as fix
**Severity:** MEDIUM
**Check affected:** 1.8, Fix List F-10
**Finding in original:** F-10 says: "Resolve `status` vs `veracityStatus` incoherence (CC-3)." CC-3 says: "Proposed: change to `status: draft` + `veracityStatus: unverified` (per P39)."
**What is wrong:** P39 states: "Never recommend `status: current` + `veracityStatus: unverified`." The report recommends `status: draft` + `veracityStatus: unverified`, which is the correct combination — there is no violation here. The P39 rule prohibits the specific combination `status: current` + `veracityStatus: unverified`. The proposed fix (`status: draft` + `veracityStatus: unverified`) is internally consistent. No error.
**Correction:** No correction needed. The fix recommendation is consistent with P39.

---

### Issue 6: Broken link `/v2/gateways/resources/technical/orchestrator-offerings` — confirmed CRITICAL
**Severity:** CONFIRMED CRITICAL (not an error in the report)
**Check affected:** 8.1
**Finding in original:** "FAIL: `/v2/gateways/resources/technical/orchestrator-offerings` — NOT in docs.json. No matching entry found in gateways/resources/technical section (lines 2742–2786). This link target does not exist in the navigation."
**What is wrong:** Nothing. Confirmed independently: searching docs.json for `orchestrator-offerings` returns no matches. The link target does not exist. The F-08 CRITICAL finding is correct. P47 full-path verification was applied correctly.
**Correction:** No correction needed. This is a confirmed correct CRITICAL finding.

---

### Issue 7: Verdict fail count off by 2 (after correcting Issues 3 and 4)
**Severity:** HIGH
**Check affected:** Verdict Summary
**Finding in original:** "27 checks fail" with ID list including 2.4 and 2.11.
**What is wrong:** Per Issues 3 and 4 above: check 2.4 should be PASS (result column contradicts detail + scan + fix withdrawal), and check 2.11 should be PASS (heading question belongs in check 3.7, not 2.11). Removing both from the failing list reduces the count from 27 to 25.
**Correction:** Corrected fail count: 25 checks fail. Remove 2.4 and 2.11 from the failing ID list.

---

## Confirmed Correct Findings

- **Check 1.2 PASS:** `guide` is a valid 7-type canonical pageType. Correctly not failed on check 1.2. P50 compliant.
- **Check 1.4 FAIL:** `purpose: guide` is correctly identified as a wrong-field error (P37 type b). The purpose field requires a value from the 15-value purpose set, not a pageType value.
- **Check 3.3 PASS:** `Warm vs cold models` — the report correctly identifies this as a borderline but does not fail check 3.3 (which covers literal contrast labels). Logged as INFO F-05 instead. Correct treatment.
- **Check 4.1/4.2/4.6/4.8 FAIL:** Scope problems correctly identified. The REVIEW comment at line 898 confirms the page absorbs LLM, audio/vision, and troubleshooting content that belongs in other pages. BD-1 is correctly escalated.
- **Check 5.4 FAIL:** TODO block at line 347 in a `status: published` page is a real violation. Correctly flagged.
- **P42 compliance — pageVariant:** Check 1.3 correctly logged as N/A (no deprecated pageType migration needed for `guide`).
- **P16/P53 compliance — `Related` heading:** The check correctly notes `## Related` is not `## Related Pages` and is subject to normal scoring. `Related` in the OK tier is logged as 18/25 — not failed on 3.2. Correct treatment.
- **All internal links verified with docs.json line references:** Six passing links confirmed at specific docs.json lines. One broken link confirmed absent. P47 compliant.
- **P51 compliance:** All proposed frontmatter values carry "confirm before applying."
- **P41 compliance:** `industry` and `niche` correctly flagged as FAIL (not N/A or INFO) with concrete proposed values.
- **Category 6 VRAM inconsistencies:** Correctly identified without asserting which value is correct. SME verification correctly required.

---

## Corrected Verdict

**Corrected fail count:** 25 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.7, 4.1, 4.2, 4.6, 4.8, 5.4, 5.7, 6.1, 6.4, 6.6, 6.8, 6.9, 8.1, 8.6, 9.1, 9.3

**Checks removed from fail list:** 2.4 (Result column contradicts detail + scan + F-02 withdrawal — PASS), 2.11 (heading question belongs in 3.7, not 2.11 — PASS for terminology consistency)

**Schema rule correction:** The `status: published` requires `veracityStatus: verified` rule does not exist in checks.mdx. The actual violations are: (a) `status: published` is a non-canonical enum value, (b) `veracityStatus` is absent. Both are valid FAIL reasons for 1.8 and the practical fix recommendation is unchanged.

**Rating justification:** The report correctly identifies the critical broken link, the wrong-field purpose error, the scope problem, and the `status`/`veracityStatus` incoherence. Two check results are wrong (2.4 and 2.11) due to P28 and miscategorisation errors. The schema rule for `status: published` is cited incorrectly but the fix is correct. Substantively reliable with two countable errors.
