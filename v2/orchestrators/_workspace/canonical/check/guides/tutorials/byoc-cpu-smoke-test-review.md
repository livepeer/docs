# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/tutorials/byoc-cpu-smoke-test.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P58

---

## Rating
MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Verdict count contradicts the listed IDs
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "15 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4"
**What is wrong:** The introductory sentence says "15 checks fail" but then immediately corrects itself in the following note: "Note: 9.1, 9.3, 9.4 included in count = 16 checks fail." Counting the listed IDs: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4 = 18 IDs. Neither "15" nor "16" matches the 18 listed IDs. P49 requires the count to exactly match the listed IDs.
**Correction:** "18 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4." Verify: Category 6 verdict says "4 checks fail: 6.1, 6.2, 6.6, 6.8" — only 4 checks (no 6.4 this page, confirmed by check table where 6.4 is PASS). Category 1 = 8, Category 3 = 2, Category 6 = 4, Category 8 = 1, Category 9 = 3. Total = 18.

---

### Issue 2: `veracityStatus` fix violates P39
**Severity:** HIGH
**Check affected:** F-02, F-03
**Finding in original:** F-02 includes "Add: `veracityStatus: unverified` (until F-01 is resolved)." F-03 says "Change `status` to `draft` and add `veracityStatus: unverified` until veracity pass completes (P39)."
**What is wrong:** Same structural P39 violation as other tutorials in this batch. F-02 proposes `veracityStatus: unverified` without simultaneously requiring `status: current` to change to `draft`. Applied independently, this produces the incoherent combination. The two fixes must be atomic.
**Correction:** Merge F-02 and F-03: "Change `status: current` to `status: draft` AND add `veracityStatus: unverified`. Apply together. These are not independent steps."

---

### Issue 3: Check 2.4 result is BORDERLINE — but check table shows PASS
**Severity:** MEDIUM
**Check affected:** Check 2.4 (P28, P58)
**Finding in original:** Check table row 2.4 shows "BORDERLINE" as the result. Category 2 verdict states "PASS (with borderline flag on 2.4)."
**What is wrong:** P28 requires the result column to be PASS or FAIL — it must match the detail text conclusion. "BORDERLINE" is not a valid result value. The check framework has two states: PASS or FAIL. If the checker cannot determine definitively, it should flag as BORDERLINE in the notes/detail column but must assign either PASS or FAIL in the result column. Additionally, P58 says check 2.4 result is determined after the Banned Construction Scan completes — the scan notes the Tip block "This tutorial proves..." as a borderline case. The checker is correct to flag it for human review, but the result column must be one of: PASS (if the construction is not a definitive violation) or FAIL (if it is). The checker's note explains the nuance well; it just cannot leave the result column as BORDERLINE.
**Correction:** Change check 2.4 result column to PASS (the checker concluded PASS based on the component context) and add: "Note: Tip block 'This tutorial proves...' is borderline `This [noun] [verb]` pattern — flag for human review per P23."

---

### Issue 4: Category 3 verdict check count is stated as 2 but matches correctly
**Severity:** LOW
**Check affected:** Category 3 verdict
**Finding in original:** "Category 3 verdict: FAIL — 2 checks fail: 3.1, 3.7"
**What is wrong:** Check table has 3.1 FAIL and 3.7 FAIL — count of 2 is correct. No error.
**Correction:** N/A — correct.

---

### Issue 5: F-08 "This tutorial proves..." proposed rewrite contains a mild violation check
**Severity:** LOW
**Check affected:** F-08 proposed fix (P44)
**Finding in original:** F-08 proposes: "Run a complete Livepeer gateway and orchestrator on one machine — CPU only, no wallet, no on-chain registration. A job enters a gateway, routes to the orchestrator, executes in a CPU Docker container, and returns a response."
**What is wrong:** The proposed replacement contains an em-dash (—) in "CPU only — no wallet". P44 requires proposed fix text to be self-checked against banned construction rules before including. Em-dashes are prohibited per CLAUDE.md and P30. The proposed replacement introduces a banned construction.
**Correction:** Rewrite the proposed replacement without the em-dash: "Run a complete Livepeer gateway and orchestrator on one machine. CPU only, no wallet, no on-chain registration. A job enters a gateway, routes to the orchestrator, executes in a CPU Docker container, and returns a response."

---

## Confirmed Correct Findings

- P41 applied correctly: `industry` and `niche` flagged FAIL with concrete proposed values.
- P15 applied correctly: `purpose` absence confirmed from frontmatter directly.
- P16 applied correctly: `Related Pages` fully exempt — not in score table, not in check 3.2.
- P22 applied correctly: custom components marked NOT-TESTED.
- P25 applied correctly: docs.json sequence confirmed (lines 2955–2956) with line references.
- P30 applied correctly: em-dash scan covers all visible text including StyledStep title props.
- P42 applied correctly: check 1.3 N/A since `pageType: tutorial` is not deprecated.
- P47 applied correctly: all 4 internal links verified with docs.json line numbers.
- P48 applied correctly: StyledStep title props scanned for em-dashes.
- P50 applied correctly: `tutorial` is valid canonical — check 1.2 PASS.
- P51 applied correctly: proposed frontmatter values carry "confirm before applying."
- P53 applied correctly: `Related Pages` is the only exempt heading.
- P58 applied (though result column format has an issue — see Issue 3): 2.4 determination made after scan.
- Dead import check (P9): `LinkArrow` suspected dead import flagged.
- Check 6.4 correctly PASS: page has no problematic quantitative numbers beyond port numbers.
- Overlap with `byoc-cpu-tutorial.mdx` correctly flagged as a structural blocking decision (BD-1).

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — findings are substantively accurate. Three material errors: count wrong (15/16 stated vs 18 actual), P39 split fix risk, and invalid BORDERLINE result column value. The proposed rewrite in F-08 also introduces a prohibited em-dash. Individual check logic is sound throughout.

**Corrected fail count:** 18 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4
