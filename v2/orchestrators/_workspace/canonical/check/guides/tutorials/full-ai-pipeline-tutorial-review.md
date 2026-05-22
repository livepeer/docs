# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/tutorials/full-ai-pipeline-tutorial.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P58

---

## Rating
MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Verdict count cannot be reconciled — overcounts check 3.2
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "Individual failing check IDs (P49): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1(x2 headings), 3.2(x2 headings), 3.7, 6.1, 6.2, 6.6, 6.8, 6.9, 9.1, 9.3 — 19 failing check IDs"
**What is wrong:** P49 requires counting individual check IDs, not instances of failures within a check. `3.1(x2 headings)` is still check 3.1 — one failing check ID, not two. `3.2(x2 headings)` is still check 3.2 — one failing check ID, not two. The checker appears to count these as 2+2=4 IDs when they are 1+1=2. The actual unique failing check IDs are: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.7, 6.1, 6.2, 6.6, 6.8, 6.9, 9.1, 9.3 = 18 unique check IDs. However, the verdict body states "19 failing check IDs" which may have been computed by adding the (x2) instances. The verdict paragraph also states: "Failing: 3.1 (2 headings), 3.2 (2 headings), 3.7" — the check table for Category 3 should have one row for 3.1 and one row for 3.2, each FAIL.
**Correction:** "18 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.7, 6.1, 6.2, 6.6, 6.8, 6.9, 9.1, 9.3"

---

### Issue 2: Check 3.2 appears in the verdict but is absent from the check table
**Severity:** HIGH
**Check affected:** Check 3.2 / Category 3 verdict (P28, P34)
**Finding in original:** Category 3 verdict states "Failing: 3.1 (2 headings), 3.2 (2 headings), 3.7." The heading section includes check 3.2 commentary: "Step 5: Send an inference request through the gateway — verbose" and "What happened — generic retrospective." But the Category 3 check table shows: 3.1 FAIL, 3.2 PASS, 3.3 PASS, 3.4 PASS, 3.5 PASS, 3.6 PASS, 3.7 FAIL.
**What is wrong:** The check table row for 3.2 says PASS, but the Category 3 verdict says 3.2 FAIL. This is a P28 violation: the result column (PASS) contradicts the verdict conclusion (FAIL). Looking at the heading commentary, the checker correctly identifies "Step 5: Send an inference request through the gateway" as verbose and "What happened" as generic — both are valid 3.2 concerns depending on the specific rule triggered. However, the check table row for 3.2 says PASS. The result/verdict mismatch means a remediation agent following the check table would miss the 3.2 finding entirely.
**Correction:** Update check 3.2 result to FAIL in the check table, with detail: "Two headings fail 3.2 Avoid-tier: 'Step 5: Send an inference request through the gateway' — verbose/enumeration of action rather than concept name (borderline); 'What happened' — generic retrospective. Proposed renames: 'Step 5: Send Inference Request' (22/25); 'Pipeline Trace Result' (22/25)."

---

### Issue 3: `veracityStatus` fix violates P39
**Severity:** HIGH
**Check affected:** Proposed frontmatter additions
**Finding in original:** Proposed additions include "`veracityStatus: unverified` — required; 2 open FACT CHECK flags."
**What is wrong:** The source file has `status: current`. Adding `veracityStatus: unverified` without simultaneously changing `status` to `draft` produces the prohibited `status: current` + `veracityStatus: unverified` combination per P39. The proposed frontmatter additions do not include `status: draft`. The blocking decisions section (BD-2) says to resolve FACT CHECK flags before setting `veracityStatus` — but does not say to change `status` to `draft` in the interim.
**Correction:** Add to proposed frontmatter: `status: draft` (change from `current`). The complete paired fix: "Change `status: current` to `status: draft` AND add `veracityStatus: unverified`. Apply together."

---

### Issue 4: Check 8.6 result is PASS — but the original check's Category 8 verdict is NOT-TESTED
**Severity:** LOW
**Check affected:** Category 8 verdict
**Finding in original:** Check 8.6 shows PASS ("FACT CHECK flags are MDX comments"). Category 8 verdict: "NOT-TESTED (internal links verified via docs.json)."
**What is wrong:** A single NOT-TESTED check (8.5: MDX renders clean) does not justify labelling the entire Category 8 verdict as NOT-TESTED. Categories 8.1 through 8.4 are all PASS or N/A; 8.5 and 8.3 are NOT-TESTED; 8.6 is PASS. The category verdict should be "PASS (with NOT-TESTED items)" — not a blanket NOT-TESTED that implies nothing in Category 8 was checked. This does not change any failing check IDs.
**Correction:** "Category 8 verdict: PASS (with NOT-TESTED items: 8.3, 8.5)" — or equivalent phrasing. Category 8 does not contribute to the fail count.

---

### Issue 5: "What Just Happened" vs "What happened" inconsistency noted as INFO but not included in any finding
**Severity:** LOW
**Check affected:** Cross-Category Connections / heading scan (P34)
**Finding in original:** The Banned Construction Scan notes: "'What Just Happened' vs H2 'What happened' — prop/heading inconsistency. INFO." This inconsistency is raised in the Banned Construction Scan section but does not appear in the fix list or cross-category connections. P34 requires findings raised in any section to appear in all applicable report sections or be explicitly closed.
**What is wrong:** The INFO item about prop/heading inconsistency is abandoned mid-report. It should either appear as an INFO entry in the fix list or be explicitly closed: "Not in fix list — inconsistency between CustomDivider prop and H2 heading is batch-wide; will be resolved by renaming 'What happened' to 'Pipeline Trace Result' (fixing the H2 heading aligns it with the CustomDivider prop)."
**Correction:** Add to cross-category connections: "The 'What Just Happened' CustomDivider prop vs 'What happened' H2 inconsistency is resolved by renaming the H2 (see heading rename fix). No separate fix item needed."

---

## Confirmed Correct Findings

- P41 applied correctly: `industry` and `niche` flagged FAIL with concrete proposed values.
- P15 applied correctly: `purpose` absence confirmed from frontmatter.
- P16 applied correctly: `Related Pages` exempt — excluded from Heading Score Table.
- P22 applied correctly: components marked NOT-TESTED.
- P25 applied correctly: docs.json line reference (2959) cited.
- P30 applied correctly: em-dash scan covers description, headings, step title props, CustomDivider props.
- P42 applied correctly: check 1.3 N/A.
- P47 applied correctly: all 4 internal links verified with docs.json line references.
- P48 applied correctly: step title props and CustomDivider props scanned.
- P50 applied correctly: `tutorial` is valid canonical — check 1.2 PASS.
- P51 applied correctly: proposed values carry "confirm before applying."
- P53 applied correctly: only `Related Pages` exempt.
- P54 applied correctly: check 2.1 PASS for UK English (no `purpose-built` false flag — correctly identified as not a banned word).
- P58 applied correctly: check 2.4 determined after Banned Construction Scan — result PASS is correct.
- Check 6.9 applied correctly: FACT CHECK flags reference named SMEs but no document path — open-ended research task.
- Check 1.11 FAIL correctly applied: 192-character description exceeds the 160-character limit per checks.mdx §1.11.
- Category 4 PASS is well-reasoned: gateway setup Step 4 is within scope for an integrated tutorial, not a gateway production setup guide (correctly distinguished from tab-scope violation).

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — findings are substantively sound. Three material errors: the check 3.2 table/verdict mismatch (P28 violation), the P39 split fix risk, and the verdict count issue (19 vs 18 unique check IDs). None of these affect the overall NEEDS WORK verdict or the substantive remediation items.

**Corrected fail count:** 18 checks fail (after fixing check 3.2 to FAIL in table): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.7, 6.1, 6.2, 6.6, 6.8, 6.9, 9.1, 9.3
