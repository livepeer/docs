# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/advanced-operations/pool-operators.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating
MOSTLY RELIABLE

---

## Issues Found

### Issue 1: `status: published` — non-canonical value not explicitly named (P39)
**Severity:** HIGH
**Check affected:** 1.8 / Frontmatter Table / F-08
**Finding in original:** The Frontmatter Table row for `status` reads: "`status: published` with `veracityStatus` absent is incoherent per checks.mdx §1.8. Change to `status: draft` until veracityStatus is set." F-08 recommends changing `status` to `draft`.
**What is wrong:** The report treats `status: published` as an incoherence in terms of the veracityStatus requirement, but does not name the additional problem: `published` is itself a non-canonical `status` value. Per checks.mdx §1.8, the valid status states are `current` and `draft` (with `veracityStatus` being a separate field with values `verified`, `unverified`, `stale`). `published` is not a valid `status` value. The recommended fix (change to `draft`) is correct, but the diagnosis should explicitly state that `published` is not a valid canonical value — not merely that it conflicts with missing veracityStatus.
**Correction:** F-08 and the Frontmatter Table row should state: "`status: published` is a non-canonical value. Valid `status` values are `current` and `draft`. Fix: change to `status: draft`. Separately, add `veracityStatus: unverified`."

### Issue 2: `purpose: guide` — P37 characterisation verified
**Severity:** NONE — confirming correctness
**Check affected:** 1.4 / F-02
**Finding in original:** "Error type: wrong field — `guide` is a valid pageType but not a valid purpose value. Error type (b): valid pageType value placed in wrong field."
**What is wrong:** Per P37, the characterisation of `purpose: guide` as error type (b) — wrong field — is exactly correct. `guide` is a valid 7-type canonical pageType value. It is not a deprecated alias (error type a) and not an invalid value (error type c). The check correctly distinguishes this from a deprecated-alias error. The source file at line 26 confirms `purpose: guide`. P37 is correctly applied.
**Correction:** Confirmed correct. **No change required.**

### Issue 3: Verdict count verified (P26/P49)
**Severity:** NONE
**Check affected:** Verdict Summary
**Finding in original:** "Checks failing (count: 22): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 3.1, 3.2, 3.7, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 9.1, 9.3"
**What is wrong:** Counting the IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (8), 2.2, 2.4 (2), 3.1, 3.2, 3.7 (3), 5.7 (1), 6.1, 6.2, 6.4, 6.5, 6.6, 6.8 (6), 9.1, 9.3 (2) = 22 IDs. Count is correct.
**Correction:** Confirmed correct. **No change required.**

### Issue 4: `not [X]` construction classification (P46)
**Severity:** NONE — confirming correctness
**Check affected:** 2.4 / F-10
**Finding in original:** F-10 flags line 82 "run **without** `-transcoder` but **with** `-orchSecret`" as a `not [X]` construction in check 2.4. Check 2.2 FAIL is for `significantly` only (line 109). The `not [X]` is not placed in check 2.2.
**What is wrong:** Per P46, `not [X] as primary statement` is a banned construction (check 2.4), not a banned word (check 2.2). The report correctly assigns the `not [X]` finding to check 2.4 (F-10) and check 2.2 fails only for `significantly`. P46 is correctly applied.
**Correction:** Confirmed correct. **No change required.**

### Issue 5: Em-dash in body prose at line 153 — check 2.4 vs body scan categorisation (P30)
**Severity:** LOW
**Check affected:** 2.4 / F-14
**Finding in original:** Line 153 em-dash flagged in the Banned Construction Scan table (YES — F-14). The Category 2 check 2.4 row reads: "FAIL | See Banned Construction Scan. `not [X]` construction at line 82. See F-10" — the em-dashes at lines 153 and 224 are not cited in the check 2.4 row detail, only in the Banned Construction Scan.
**What is wrong:** Per P30, em-dash prohibition applies to all visible text. The Banned Construction Scan correctly flags three em-dash locations (description F-01, line 153 F-14, line 224 F-15). However, the Category 2 check 2.4 detail row cites only F-10 (`not [X]`), not the em-dash findings. The scan table catches them, but the check table row for 2.4 is incomplete. A remediation executor reading only the check table would not see the em-dash body prose findings under 2.4.
**Correction:** Check 2.4 detail should read: "FAIL — See Banned Construction Scan. Confirmed flags: F-10 (`not [X]` construction at line 82), F-14 (em-dash at line 153), F-15 (em-dash at line 224). F-01 (em-dash in description) reported under check 1.11." This ensures all 2.4 violations are traceable from the check table.

### Issue 6: check 1.2 PASS for `guide` — P50 compliance
**Severity:** NONE — confirming correctness
**Check affected:** 1.2
**Finding in original:** "1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is a valid canonical value"
**What is wrong:** Per P50, `guide` is a valid 7-type canonical pageType and check 1.2 must PASS. The report correctly passes check 1.2. Source file line 24 confirms `pageType: guide`.
**Correction:** Confirmed correct. **No change required.**

### Issue 7: BORDERLINE at line 36 — "This page is for" flagged correctly but not cross-referenced in check 2.3 (P34)
**Severity:** LOW
**Check affected:** 2.3 / 2.4 / Banned Construction Scan
**Finding in original:** The Banned Construction Scan notes line 36 "This page is for experienced orchestrators" as BORDERLINE — "near-boundary" — and flags it for human review.
**What is wrong:** The Banned Construction Scan correctly identifies this as BORDERLINE. However, "This page is for" is structurally close to the banned phrase "This page [verb]" (check 2.3) but is not identical. The source reads: "This page is for experienced orchestrators who want to expand beyond their own hardware by accepting external worker connections." Per checks.mdx §2.3, the banned phrase is "This page covers/explains/walks you through" — the exact pattern `This page is for` is not in the banned phrase list. The BORDERLINE classification is appropriate. The Banned Construction Scan verdict states "one BORDERLINE (line 36 'This page is for')" which is correct. However, the check 2.3 result is PASS, meaning the checker decided this does not trigger 2.3. Check 2.4 result is FAIL for the `not [X]` construction. Neither check table row references the line 36 borderline. Per P34, a finding raised in the scan should appear in the fix list or be explicitly closed. The scan does close it ("Flag for human review") — acceptable.
**Correction:** No change required beyond noting that the BORDERLINE is appropriately handled. If a human reviewer agrees it is not a banned phrase, check 2.3 PASS stands.

### Issue 8: Proposed description fix character count not verified (P32)
**Severity:** LOW
**Check affected:** F-01
**Finding in original:** Proposed description trim: "Operating a Livepeer GPU pool: accept worker connections, route jobs across GPUs, distribute fees off-chain, and maintain operational transparency." — stated as 147 chars.
**What is wrong:** Per P32, proposed replacement character counts must be accurate. Counting: "Operating a Livepeer GPU pool: accept worker connections, route jobs across GPUs, distribute fees off-chain, and maintain operational transparency." = 147 characters including the trailing period. Count is correct.
**Correction:** Confirmed correct. **No change required.**

---

## Confirmed Correct Findings

1. **F-02 (`purpose: guide` wrong-field error):** Confirmed. Source file line 26: `purpose: guide`. This is a valid pageType value in the purpose field — error type (b) per P37. Proposed fix `purpose: operate` is concrete and formatted correctly per P51.
2. **F-09 (`significantly` banned word):** Source file lines confirmed (around line 109). The pool operators source contains "significantly more cost-efficient" — confirmed present.
3. **F-10 (`not [X]` construction):** Source line 82 area. "run **without** `-transcoder` but **with** `-orchSecret`" — confirmed present in source.
4. **F-11 and F-12 (heading renames):** Both failing headings have per-dimension score breakdowns. Proposed renames `Ongoing Operations` and `Pool Quick Reference` do not introduce check 3.2 banned terms.
5. **F-13 (NVENC session limit and Titan Node claims unverified with no REVIEW flag):** Correctly flagged as a check 6.5 failure with a concrete proposed REVIEW comment.
6. **F-14 and F-15 (em-dashes in body prose):** Both confirmed against source file. Line 153 contains `the \`capacity\` field is the worker's \`-maxSessions\` value — how many concurrent jobs it can handle.` Line 224 contains `a load balancer in front of multiple orchestrator instances is possible — see \`doc/multi-o.md\``.
7. **`status: published` fix:** Directionally correct. See Issue 1 for the incomplete diagnosis.
8. **P41 `industry`/`niche` fields:** Correctly flagged as required FAIL with concrete proposed values.
9. **P51 compliance:** All proposed frontmatter values formatted as "Proposed: X — confirm before applying."
10. **Navigation sequence:** Confirmed from docs.json with line citations.
11. **check 1.2 PASS:** `guide` is a valid 7-type canonical value. P50 correctly applied.

---

## Corrected Verdict
**Rating: MOSTLY RELIABLE**

One confirmed issue: the `status: published` diagnosis (Issue 1) is incomplete — the report identifies the veracityStatus conflict but does not name `published` as a non-canonical value. The fix is correct. Two minor completeness issues: the em-dash findings are not cross-referenced in the check 2.4 table row (Issue 5), and character counts for proposed fixes are correct (Issue 8 confirmed). All verdict counts are accurate. P37 is correctly applied for the wrong-field error.

**Corrected fail count:** 22 checks fail — count is accurate as stated: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 3.1, 3.2, 3.7, 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 9.1, 9.3
