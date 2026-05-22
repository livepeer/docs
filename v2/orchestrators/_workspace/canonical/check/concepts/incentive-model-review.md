# Critical Review of Check Report
## `v2/orchestrators/concepts/incentive-model.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (meta-review agent)
**Report under review:** `v2/orchestrators/_workspace/canonical/check/concepts/incentive-model.md`
**Original page verified against:** `v2/orchestrators/concepts/incentive-model.mdx`
**Framework verified against:** `v2/orchestrators/_workspace/canonical/checks.mdx`

---

## Issues Found

---

### Issue 1
**Type:** False positive (broken link misdiagnosed)
**Location in report:** Check 4.4; Check 8.1; Root Cause C; F-09; Blocking Decisions item 2
**What's wrong:** The report states that `/v2/orchestrators/guides/payments-and-pricing/pricing-strategy` is "absent from docs.json (confirmed absent — searched lines)." This is incorrect. `docs.json` line 2921 contains `"v2/orchestrators/guides/config-and-optimisation/pricing-strategy"`. The page exists in the navigation — it uses a different path prefix (`config-and-optimisation`, not `payments-and-pricing`). The page links at lines 408 and 441 use the wrong path prefix; the target page is not absent. The report misdiagnoses a mislinking error as a missing-page error. F-09 proposes replacing the links with placeholder comments — the correct fix is to update the href to the correct path.
**What should have been said/done:** "Link at lines 408 and 441 uses wrong path prefix: `payments-and-pricing` should be `config-and-optimisation`. Correct path: `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (docs.json line 2921). Fix: update the href. Do not replace with a placeholder comment — the target page exists."

---

### Issue 2
**Type:** Result/detail contradiction (check 2.3 PASS masks two confirmed violations)
**Location in report:** Check 2.3 (PASS result), Banned Construction Scan (F-19 flagged at lines 323 and 346), F-03 category field
**What's wrong:** Check 2.3 returns PASS with "None of the banned phrases from Frameworks.mdx §3.2 found." But `rather than` is explicitly listed under check 2.3 in checks.mdx line 60, and it appears twice in the original page: line 323 ("Revenue is primarily from service fees rather than inflation rewards") and line 346 ("earns primarily from inflation rewards rather than service fees"). Both are confirmed. Check 2.3 should be FAIL. Additionally, F-03 in the Prioritised Fix List correctly identifies `rather than` as the violation but assigns `Category: 2.4` (banned constructions) — the wrong category. Per P34 from learnings.md, a finding raised in one section must appear in all applicable sections consistently.
**What should have been said/done:** Check 2.3 result: FAIL. Note: "`rather than` (banned phrase per checks.mdx §2.3) at lines 323 and 346. See F-03." F-03 category field: change from `2.4` to `2.3`.

---

### Issue 3
**Type:** Result/detail contradiction (check 2.4 FAIL reason does not match evidence)
**Location in report:** Check 2.4 (line 69)
**What's wrong:** Check 2.4 states FAIL for "Multiple `can/may [verb]` instances in value claims." The Banned Construction Scan shows only two `can` instances in the entire page (lines 185 and 235), both classified as BORDERLINE or acceptable — neither is confirmed as a value-claim violation. The actual confirmed FAIL drivers for check 2.4 are: `not [X]` primary statements (F-15 at line 182, F-16 at line 277), `if [condition]` in body prose (F-18 at line 310), and the self-referential opener (F-17 at line 285). The cited reason for the FAIL does not match the actual violations found.
**What should have been said/done:** Check 2.4 FAIL note should read: "Confirmed violations: `not [X]` primary statements at lines 182 and 277 (F-15, F-16); `if [condition]` in body prose at line 310 (F-18); self-referential opener at line 285 (F-17). `can [verb]` instances at lines 185 and 235 are BORDERLINE — flagged for human review, not confirmed FAIL."

---

### Issue 4
**Type:** False positive (check 2.9 FAIL on a non-violation)
**Location in report:** Check 2.9 (line 74), Fix cross-reference "F-04"
**What's wrong:** Check 2.9 is defined in checks.mdx as "No passive value statements: Every value claim is quantified or concrete." The flagged sentence at line 63 is "An Orchestrator's total earnings combine two streams that are structurally independent." This is a structural description, not a value claim. It does not assert "cost-effective," "fast," or any other unquantified benefit. The checker's own note hedges: "Minor." Additionally, the check cross-references "F-04" for this finding, but F-04 in the fix list addresses the missing `complexity` frontmatter field — a completely unrelated finding. Check 2.9 should PASS.
**What should have been said/done:** Check 2.9 result: PASS. Remove the FAIL entry and the F-04 cross-reference from the check 2.9 note. If the prose concern about "structurally independent" being unsubstantiated is worth recording, add it as an INFO prose-quality note, not a check 2.9 FAIL.

---

### Issue 5
**Type:** Verdict/count mismatch (FAIL count)
**Location in report:** Verdict Summary — "FAIL count (blocking): 9 FAIL checks"
**What's wrong:** Counting individual FAIL entries across the check tables: Category 1 (1.1, 1.6, 1.7, 1.8, 1.11, 1.13 = 6), Category 2 (2.4, 2.9, 2.11 = 3), Category 3 (3.1, 3.4, 3.5, 3.7 = 4), Category 4 (4.3, 4.4 = 2), Category 6 (6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.8, 6.9 = 8), Category 7 (7.5 = 1), Category 8 (8.1, 8.6 = 2), Category 9 (9.1, 9.3 = 2) = 28 individual FAIL checks across 8 categories. The stated "9 FAIL checks" is wrong. The figure 9 appears to conflate "number of categories with at least one FAIL" (which is 8, not 9) with "number of FAIL checks."
**What should have been said/done:** Per P26 from learnings.md, the verdict count must match the check table. Corrected: "FAIL count: 28 individual checks FAIL across 8 categories."

---

### Issue 6
**Type:** Verdict/count mismatch (HIGH severity count)
**Location in report:** Verdict Summary — "High-severity fixes: 9 (F-03 through F-09)"
**What's wrong:** F-03 through F-09 is 7 items: F-03, F-04, F-05, F-06, F-07, F-08, F-09. The stated count is 9.
**What should have been said/done:** "High-severity fixes: 7 (F-03 through F-09)"

---

### Issue 7
**Type:** Verdict/count mismatch (INFO count)
**Location in report:** Verdict Summary — "INFO: 3"
**What's wrong:** The Prioritised Fix List contains 5 INFO-severity items: F-19, F-20, F-21, F-26, F-29. The summary states 3.
**What should have been said/done:** "INFO: 5"

---

### Issue 8
**Type:** Result/detail contradiction (heading scores inconsistent between sections)
**Location in report:** Check 3.1 narrative note (line 86) vs Heading Score Table (lines 255 and 264)
**What's wrong:** The check 3.1 note states: "'Two Revenue Streams' scores 17/25" and "'Payment Flow End-to-End' scores 18/25." The Heading Score Table shows both at 15/25 (P=3, D=2, S=3, C=4, Concise=3 = 15 for both). The score table arithmetic is correct. The narrative values (17 and 18) are wrong. Per P31 from learnings.md, heading scores cited in narrative text must match the score table exactly.
**What should have been said/done:** Check 3.1 note should read: "'Two Revenue Streams' scores 15/25. 'Payment Flow End-to-End' scores 15/25. See Heading Score Table." Both headings still FAIL the ≥20 threshold, so the FAIL disposition is unchanged — but the stated scores are wrong and would corrupt any automated tracking.

---

### Issue 9
**Type:** Missed finding (industry/niche treated as optional, confirmed required by learnings.md)
**Location in report:** Checks 1.9 and 1.10 (marked N/A); F-29 (INFO severity)
**What's wrong:** Checks 1.9 and 1.10 are marked N/A with "Not present; not required." Per learnings.md Batch 1 correction: "User confirmed these ARE required. The critical reviews were wrong. The original check reports were correct to flag them. 'Valid if present' means validate the value when present — it does NOT mean optional." The checker has repeated the exact error that learnings.md Batch 1 documented and corrected. F-29 records these as an optional INFO suggestion, which further underweights the finding.
**What should have been said/done:** Checks 1.9 and 1.10 should both be FAIL. Note for 1.9: "Required field absent. Add `industry: ['economics', 'technical']`." Note for 1.10: "Required field absent. Add `niche: ['protocol', 'tokenomics', 'infrastructure']`." F-29 should be promoted to MEDIUM severity. Concrete values are already present in the suggestion — severity is the only correction needed.

---

### Issue 10
**Type:** Fabricated occurrence / inaccurate character count
**Location in report:** Fix list F-01 (line 380)
**What's wrong:** F-01 states the proposed description rewrite is "154 chars." Counting the proposed text: "How Orchestrators earn: the two revenue streams, cost structure, payment flow, pricing configuration, and what the earnings case looks like in practice." = 152 characters. Per P32 from learnings.md, proposed description fix character counts must be counted from the actual proposed text.
**What should have been said/done:** State the correct count: "(152 chars)."

---

### Issue 11
**Type:** Proposed fix introduces new violation
**Location in report:** Fix list F-18 (line 397)
**What's wrong:** F-18 addresses the `if [condition]` construction at line 310. The proposed rewrite is: "GPU hardware already running for mining, rendering, or sitting idle **can add** Livepeer Orchestrator workloads to convert spare capacity into ETH service fees and LPT rewards." The fix introduces `can add` — a `can [verb]` construction on a value/capability claim, which is a banned construction under check 2.4. The Banned Construction Scan flagged line 185's `can be configured` as BORDERLINE for the same reason. The proposed fix trades one banned construction for another.
**What should have been said/done:** Propose an assertive rewrite that avoids both `if [condition]` and `can [verb]`. Example: "Operators with GPU hardware already running for mining, rendering, or other workloads add Livepeer Orchestrator processes to convert spare capacity into ETH service fees and LPT rewards."

---

### Issue 12
**Type:** Missed finding (line 235 `can receive` not scanned)
**Location in report:** Banned Construction Scan table
**What's wrong:** Line 235 of the original page reads: "Only active set members receive inflation rewards and **can receive** Gateway jobs." This is a `can [verb]` construction in a value-claim context — it asserts capability that determines whether an operator earns. The Banned Construction Scan includes line 185 (`can be configured`) as BORDERLINE but does not include line 235 at all, despite `can receive` being a stronger value-claim candidate. Per P24 from learnings.md, every candidate match must be listed even when the result is PASS.
**What should have been said/done:** Add to Banned Construction Scan: `| 235 | "Only active set members receive inflation rewards and can receive Gateway jobs." | can receive | Value-claim candidate: capability determining earnings eligibility | BORDERLINE — same pattern as line 185; flag for human review |`

---

### Issue 13
**Type:** Fix numbering collision
**Location in report:** Check 8.6 note (cross-refs "F-11"); Prioritised Fix List F-11 row
**What's wrong:** F-11 is used for two different findings. In the check 8.6 note (report line 171): "Comment-only TODO blocks are a borderline case. Flagging as MEDIUM... F-11." In the Prioritised Fix List (line 391): `F-11 | MEDIUM | 3.1 | 303 | "Operator Models" scores 15/25 | Rename H2 to Operating Contexts`. These are different findings — one is about the TODO comment block, one is a heading rename. A remediation executor following the fix list would apply the heading rename but the check 8.6 cross-reference points to the same ID. Per P34 from learnings.md, findings must not be orphaned or ambiguously numbered.
**What should have been said/done:** Renumber one of the F-11 entries. The TODO comment finding (check 8.6) should be renumbered (e.g., F-11a or reassigned a fresh number) to avoid collision with the Operator Models heading rename.

---

## Summary

**Issue count:** 13
**False positives:** 2 (Issue 1 — `pricing-strategy` link misdiagnosed as missing page; Issue 4 — check 2.9 FAIL on a structural description that is not a value claim)
**Missed findings:** 3 (Issue 2 — check 2.3 PASS despite two confirmed `rather than` violations; Issue 9 — `industry`/`niche` treated as optional despite learnings.md confirmation they are required; Issue 12 — line 235 `can receive` not scanned)
**Other errors:** 8 (Issues 3, 5, 6, 7, 8, 10, 11, 13 — check 2.4 wrong stated reason, three verdict count mismatches, two score inconsistencies, wrong character count, fix introduces new violation, ID numbering collision)
**Report overall quality:** MOSTLY RELIABLE
**Recommended action:** Use with corrections noted above. The core content findings are sound — missing frontmatter fields, veracityStatus absence, heading scores (use Score Table not check 3.1 narrative), active set size needing REVIEW flags, and most banned constructions are correctly identified. Three corrections are required before executing: (1) F-09 pricing-strategy fix must be a path correction, not a placeholder comment; (2) check 2.3 must be changed to FAIL; (3) the F-18 proposed rewrite must be replaced to avoid introducing `can [verb]`. All verdict count figures should be corrected before this report is used to track remediation progress.
