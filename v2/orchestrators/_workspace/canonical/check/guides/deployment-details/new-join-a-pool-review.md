# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/deployment-details/new-join-a-pool.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

NEEDS REWORK

---

## Issues Found

### Issue 1: Verdict Summary count stated as "21 checks fail" but the list contains 27 IDs — and the count contradicts check tables
**Severity:** HIGH
**Check affected:** Verdict Summary (P26/P49)
**Finding in original:** "21 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.4 (BORDERLINE), 2.11, 3.1, 3.2, 3.4, 3.7, 4.5, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 7.4, 7.8, 9.1, 9.3"
**What is wrong:** Count the listed IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13 = 9; 2.4, 2.11 = 2; 3.1, 3.2, 3.4, 3.7 = 4; 4.5 = 1; 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9 = 7; 7.4, 7.8 = 2; 9.1, 9.3 = 2 = total 27. Stated as "21 checks fail." Additionally: 2.4 is listed in the verdict as BORDERLINE — a BORDERLINE is not a FAIL. If 2.4 is BORDERLINE (not FAIL), the failing count should be 26, not 21 or 27. Per P49, verdict summary must count individual failing check IDs. Per P28, a BORDERLINE is not a FAIL.
**Correction:** Corrected fail count (excluding 2.4 BORDERLINE): 26 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.11, 3.1, 3.2, 3.4, 3.7, 4.5 (if confirmed fail), 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 7.4, 7.8, 9.1, 9.3. 2.4 remains BORDERLINE pending human review.

---

### Issue 2: Check 2.3 result/detail mismatch — FAIL in result, PASS conclusion in detail
**Severity:** HIGH
**Check affected:** 2.3 (P28)
**Finding in original:** Check 2.3 result column: "FAIL" — but the detail text concludes: "All clean — PASS."
**What is wrong:** Per P28, the result column must match the detail text conclusion. The detail for check 2.3 walks through every banned phrase candidate, finds none, and concludes "All clean — PASS." But the result column says "FAIL." This is a phantom FAIL that should be PASS. An executing agent reading the check table would act on a non-existent violation.
**Correction:** Check 2.3 result should be PASS. Remove from failing check ID list. This reduces the count by 1.

---

### Issue 3: P37 — `purpose: guide` error type characterised correctly as P37-b (wrong field value) — confirmed correct
**Severity:** N/A (confirmed correct)
**Check affected:** 1.4
**Finding in original:** "Error type (P37-b): pageType value placed in purpose field. Canonical fix: `purpose: start`"
**What is wrong:** Nothing. `guide` is a valid 7-type canonical pageType per Frameworks.mdx §1.1. Placing it in the purpose field is a P37 type (b) error — valid value, wrong field. Check 1.2 is correctly PASS (P50 compliant). The error type characterisation is correct.
**Correction:** Confirmed correct.

---

### Issue 4: `Pool Worker vs Solo Orchestrator` heading — check 3.3 called PASS but treatment is inconsistent with sibling report
**Severity:** MEDIUM
**Check affected:** 3.3
**Finding in original:** "PASS — `Pool Worker vs Solo Orchestrator` is a comparison heading — not `X vs Y` in the sense of the rule... BORDERLINE — the heading does use literal `vs`. Request human review."
**What is wrong:** The sibling check (join-a-pool.md) calls this same heading a check 3.3 FAIL ("prohibited"). This report calls it PASS (with BORDERLINE note). Both cannot be correct simultaneously. Per P35, findings evaluate current state. The heading contains literal `vs` — the rule says "No literal contrast labels." The check 3.3 result here should either be FAIL or BORDERLINE, not PASS. The join-a-pool sibling is arguably more consistent with the rule as written. Calling it PASS when it matches the rule's pattern ("X vs Y") while also noting it as BORDERLINE is self-contradictory.
**Correction:** Check 3.3 should be BORDERLINE (not PASS) for `Pool Worker vs Solo Orchestrator` — same treatment as the join-a-pool sibling. This does not change the fail count if BORDERLINE is treated as non-FAIL, but the result column should say BORDERLINE rather than PASS to flag for human review.

---

### Issue 5: P39 — fix at check 1.8 recommends `status: draft` + `veracityStatus: unverified` — confirmed correct
**Severity:** N/A (confirmed correct)
**Check affected:** 1.8
**Finding in original:** "Proposed: `status: draft`, `veracityStatus: unverified` pending verification (P39)"
**What is wrong:** Nothing. P39 compliant. The fix does not recommend the prohibited `status: current` + `veracityStatus: unverified` combination.
**Correction:** Confirmed correct.

---

### Issue 6: P41 — `industry`/`niche` correctly flagged FAIL with concrete proposed values
**Severity:** N/A (confirmed correct)
**Check affected:** 1.9, 1.10
**Finding in original:** "Proposed: `industry: ["technical", "economics"]` — confirm before applying" and "Proposed: `niche: ["infrastructure", "web3"]` — confirm before applying"
**What is wrong:** Nothing. Both absent fields flagged FAIL with concrete values and P51 confirmation gates.
**Correction:** Confirmed correct.

---

### Issue 7: P42 — `pageVariant` correctly N/A (no deprecated pageType co-fix required)
**Severity:** N/A (confirmed correct)
**Check affected:** 1.3
**Finding in original:** "N/A — not present, no migration needed"
**What is wrong:** Nothing. `pageType: guide` is a valid 7-type value — no pageVariant co-fix required per P42. Correct.
**Correction:** Confirmed correct.

---

### Issue 8: Check 4.3 — duplicate docs.json entries confirmed from docs.json; both lines verified
**Severity:** N/A (confirmed correct)
**Check affected:** 4.3, 7.4
**Finding in original:** "Both `join-a-pool` (line 2889) and `new-join-a-pool` (line 2890) appear in docs.json"
**What is wrong:** Nothing. Verified against docs.json: `join-a-pool` at line 2889, `new-join-a-pool` at line 2890. Both present. Finding is factually correct.
**Correction:** Confirmed correct. BD-1 is correctly identified.

---

### Issue 9: P46 — `not [X]` placed only in check 2.4 — confirmed correct
**Severity:** N/A (confirmed correct)
**Check affected:** 2.4
**Finding in original:** "(1) Line 44–48: '…without running a full Orchestrator.' — `not [X]` adjacent / `without [X]` — BORDERLINE"
**What is wrong:** Nothing. `not [X]` adjacent construction is examined in check 2.4, not check 2.2. Check 2.2 result is PASS. Per P46 compliant.
**Correction:** Confirmed correct.

---

### Issue 10: Check 5.4 result — FAIL for TODO in MDX comment is questionable
**Severity:** MEDIUM
**Check affected:** 5.4
**Finding in original:** "FAIL — `{/* TODO: Verify: ... */}` block at lines 31–36 is a TODO in MDX comment. Not rendered."
**What is wrong:** Check 5.4 is "Avoided components absent." A TODO in an MDX comment is not a rendered component. The check notes it is "Not rendered" but still calls it FAIL. Per the checks framework, 5.4 applies to rendered components, not comments. The actual issue (status: current + unresolved TODO = incoherence) is already logged as part of the status/veracity incoherence cluster (F-17). Logging it additionally as a check 5.4 FAIL is a misclassification — it inflates the fail count with a finding that belongs in Category 1 or Category 9, not Category 5.
**Correction:** Check 5.4 should be PASS (TODO is in MDX comment, not rendered). The status/veracity incoherence remains in its correct home at checks 1.8 and 9.1. Remove 5.4 from the fail list.

---

### Issue 11: P47 — link verification for `/v2/orchestrators/setup/guide` — confirmed present in docs.json
**Severity:** N/A (confirmed correct)
**Check affected:** 8.1
**Finding in original:** "`/v2/orchestrators/setup/guide` — checking: `v2/orchestrators/setup/guide` present at docs.json (confirmed in separate search of setup section). PASS."
**What is wrong:** Nothing. The check confirms presence via docs.json search. P47 compliant.
**Correction:** Confirmed correct.

---

### Issue 12: `Frequently Asked Questions` rename proposal — `FAQ` proposed as rename
**Severity:** MEDIUM
**Check affected:** 3.2, F-11 rename proposal
**Finding in original:** "Rename to `FAQ` or restructure"
**What is wrong:** The check correctly identifies `Frequently Asked Questions` as banned-tier (check 3.2). The proposed rename `FAQ` is also a form of the same pattern — the Frameworks.mdx §4.1 check 3.2 prohibited form includes `faq` as a deprecated pageType. While `FAQ` as a heading is not explicitly in the check 3.2 prohibited terms list (which covers `Types`, `Profiles`, `Modes`, etc.), the original learnings.md Batch 3 entry P18 notes rename suggestions must be validated against the prohibited list. The check itself notes this ambiguity ("or restructure"). The proposed fix `FAQ` is weaker than the earlier Finding Registry text which says "rename section; or migrate to AccordionGroup heading anchor only." The single-word `FAQ` risks being treated as equivalent to the banned `Frequently Asked Questions` form. The fix should recommend a domain-specific label or structural absorption, not just `FAQ`.
**Correction:** The rename proposal for `Frequently Asked Questions` should not default to `FAQ`. Recommended fix: absorb FAQ content into the Pool Architecture or Pool Selection sections as specific sub-questions, removing the standalone FAQ heading entirely. If the heading must be kept, propose `Pool Worker Questions` as the minimum specificity to avoid the banned generic form.

---

## Confirmed Correct Findings

- **P37 error type (b)** correctly applied to `purpose: guide` (valid pageType in wrong field).
- **P39 compliance** — recommended fix is `status: draft` + `veracityStatus: unverified`.
- **P41** — both `industry` and `niche` flagged FAIL with concrete proposed values and P51 gates.
- **P42** — check 1.3 N/A (no deprecated pageType).
- **P46** — `not [X]` only in check 2.4.
- **P47** — all 5 internal links verified against docs.json.
- **P50** — `pageType: guide` PASS on check 1.2 (valid 7-type value).
- **Structural duplicate (BD-1)** confirmed at docs.json lines 2889–2890.
- **P51 confirmation gates** on all proposed frontmatter values.
- **P53** — only exact `Related Pages` exempt; `Frequently Asked Questions` correctly scored.
- **Category 6 veracity** findings specific and correctly flag unreviewed procedural claims.

---

## Corrected Verdict

**Rating: NEEDS REWORK**

Three systematic errors identified: (1) check 2.3 has FAIL in result column but PASS conclusion in detail — phantom FAIL; (2) verdict summary count states "21 checks fail" when the list contains 27 IDs; (3) check 5.4 FAIL for a non-rendered MDX comment is a misclassification. Additionally, the `Pool Worker vs Solo Orchestrator` heading is treated inconsistently with the sibling join-a-pool check. The `FAQ` rename proposal is weaker than required.

**Corrected fail count: 24 checks fail** (removing 2.3 phantom FAIL and 5.4 misclassification, and treating 2.4 as BORDERLINE not FAIL): **1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.11, 3.1, 3.2, 3.4, 3.7, 4.5, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 7.4, 7.8, 9.1, 9.3**

Note: 2.3 and 5.4 removed as false positives; 2.4 remains BORDERLINE pending human review.
