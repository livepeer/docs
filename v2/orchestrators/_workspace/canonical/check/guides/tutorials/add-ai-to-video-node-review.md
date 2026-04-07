# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/tutorials/add-ai-to-video-node.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P58

---

## Rating
MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Verdict count is off by one
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "17 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4"
**What is wrong:** The listed IDs are 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4 — that is 19 IDs, not 17. The introductory count is wrong. P49 requires the count to match the listed IDs exactly.
**Correction:** "19 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4"

---

### Issue 2: `veracityStatus` fix recommendation violates P39
**Severity:** HIGH
**Check affected:** F-02 / F-03 (Fix List)
**Finding in original:** F-02 says "Add: `veracityStatus: unverified` (until F-01 is resolved)"; F-03 says "Change `status` to `draft` and add `veracityStatus: unverified`"
**What is wrong:** P39 states: the valid fixes are change `status` to `draft`, OR add `veracityStatus: verified` only when content is actually verified. Recommending `status: current` + `veracityStatus: unverified` is the self-contradictory combination P39 was introduced to prevent. F-02 proposes adding `veracityStatus: unverified` without simultaneously changing `status` to `draft`, which would produce the incoherent `status: current` + `veracityStatus: unverified` combination checks.mdx §1.8 prohibits. F-03 does correctly say to change `status` to `draft`, but F-02 does not and the two fixes are presented as separate steps — an executing agent following F-02 before F-03 would create the bad state.
**Correction:** Consolidate into a single fix: "Change `status` to `draft` AND add `veracityStatus: unverified`. These two changes must be applied together. Do not add `veracityStatus: unverified` while `status: current` remains."

---

### Issue 3: Category 1 check count stated as 8 but is actually 8 — borderline accuracy
**Severity:** LOW
**Check affected:** Category 1 verdict
**Finding in original:** "Category 1 verdict: FAIL — 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13"
**What is wrong:** The count and IDs are consistent: eight IDs listed, count states 8. This is correct. However, the Frontmatter Table counts "5/10 required frontmatter fields present" and lists 6 missing fields (`purpose`, `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`). If `veracityStatus` counts as a required field, that is 6 missing, making 4 present. If the table lists 10 required fields, and 6 are absent, then only 4 are present — but the checker states 5. Verified against source: the source file has `title`, `sidebarTitle`, `description`, `pageType`, `audience`, `keywords`, OG image block, `status`, `lastVerified` — of the 10 required fields per check 1.1 (`title`, `sidebarTitle`, `description`, `pageType`, `audience`, `purpose`, `complexity`, `lifecycleStage`, `keywords`, OG image block), the source has 6 of 10 present. The checker states 5/10. The OG image block counts as one field — that makes `title`, `sidebarTitle`, `description`, `pageType`, `audience`, `keywords`, OG = 7 present. Missing: `purpose`, `complexity`, `lifecycleStage` (3 absent from the required-10 set). `veracityStatus`, `industry`, `niche` are additional fields that check 1.1 does not list in its required-10. The checker's "5/10" and "Missing: purpose, complexity, lifecycleStage, veracityStatus, industry, niche" conflates the required-10 list with the additional required fields. This is an accounting error but does not change the FAIL verdicts.
**Correction:** Clarify that `veracityStatus`, `industry`, `niche` are additional required fields beyond the check 1.1 required-10, or confirm that the check 1.1 definition in use includes more than 10 fields. The field-level FAILs are all correct.

---

### Issue 4: Proposed frontmatter values lack explicit "confirm before applying" on two entries
**Severity:** MEDIUM
**Check affected:** F-02 (P51)
**Finding in original:** F-02 lists `purpose: build`, `complexity: intermediate`, `lifecycleStage: setup`, `industry: ["technical", "AI"]`, `niche: ["infrastructure", "AI"]` — each with "— confirm before applying". This is correct per P51.
**What is wrong:** This is actually CORRECT — the checker applies P51 properly. No issue here.
**Correction:** N/A — this is a false concern on re-read. The format is compliant.

---

### Issue 5: `borderline` verdict in check 2.4 but check table shows PASS — the result/detail match is correct
**Severity:** LOW
**Check affected:** Check 2.4 (P28, P58)
**Finding in original:** Check table shows check 2.4 as PASS. The Banned Construction Scan finds no violations. PASS is correct.
**What is wrong:** No error — P58 says 2.4 result is determined after the scan completes. The scan found no violations, result is PASS. This is correct.
**Correction:** N/A — compliant.

---

### Issue 6: `status: current` incoherence finding (check 1.8) cites checks.mdx §1.8 but P57 nuance not tested
**Severity:** LOW
**Check affected:** Check 1.8
**Finding in original:** "Field absent. `status: current` requires `veracityStatus: verified` (checks.mdx §1.8)."
**What is wrong:** The source file has `status: current`, not `status: published`. P57 applies only to `status: published`. For `status: current`, checks.mdx §1.8 directly applies and the citation is correct. No error here.
**Correction:** N/A — P57 not applicable to this page.

---

## Confirmed Correct Findings

- P41 applied correctly: `industry` and `niche` flagged FAIL with proposed values (not N/A or INFO).
- P15 applied correctly: `purpose` absence read directly from frontmatter, not inferred from `pageType`.
- P16 applied correctly: `Related Pages` heading fully exempt — not in score table, not mentioned in check 3.2.
- P22 applied correctly: custom components marked NOT-TESTED, not FAIL.
- P25 applied correctly: docs.json sequence confirmed with specific line numbers (lines 2957–2959).
- P30 applied correctly: em-dash scan covers H2 headings, description, StyledStep title props, body prose, table cells.
- P42 applied correctly: check 1.3 marked N/A since `pageType: tutorial` is not deprecated — no co-fix required.
- P47 applied correctly: full path link verification against docs.json with line citations.
- P48 applied correctly: StyledStep `title` props included in em-dash scan.
- P50 applied correctly: `tutorial` is a valid canonical 7-type value — check 1.2 PASS.
- P51 applied correctly: proposed frontmatter values formatted with "confirm before applying."
- P53 applied correctly: only "Related Pages" exempted; no other heading is exempt.
- P58 applied correctly: check 2.4 determined after Banned Construction Scan completes.
- Category 2 verdict: all 11 checks show PASS with correct scan tables — no verdict/detail mismatches.
- Dead import check (P9): `BorderedBox` suspected dead import correctly flagged.
- docs.json path verification: `byoc-cpu-tutorial` not present in orchestrators tutorial group — this page confirmed at line 2958.
- Check 6.9 absent (this batch's check set starts at 6.1–6.8): no over-check.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — findings are substantively accurate. One count error (17 vs 19 fails) and a split fix for the veracityStatus/status pair introduce execution risk for an agent following the fix list. All check logic, link verification, scan methodology, and severity assignments are correct.

**Corrected fail count:** 19 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.13, 3.1, 3.7, 6.1, 6.2, 6.4, 6.6, 6.8, 8.6, 9.1, 9.3, 9.4
