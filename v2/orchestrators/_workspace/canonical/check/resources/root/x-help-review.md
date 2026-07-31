# Critical Review — `v2/orchestrators/resources/x-help.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/x-help.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** P1–P90 (stated in report header)

---

## Overall Rating

NEEDS CORRECTION

---

## Corrections Required

**C-01 — Draft artefacts exposed in the report body: two Frontmatter Tables, raw arithmetic in Verdict Summary**

The report contains:
1. A first draft Frontmatter Table (lines 60–74) with `audience: developer` as FAIL
2. An inline self-correction paragraph (line 76)
3. A corrected Frontmatter Table (lines 80–95) with `audience: developer` as PASS

The Verdict Summary contains visible arithmetic working: "Wait — counting from check tables: Category 1: 11 (...) = 10. Category 2: 3 (...) = 3. ... Total = 10 + 3 + 2 + 4 + 3 + 1 + 4 + 0 + 2 = **29 FAILs**."

A check report is a record for executing agents and human reviewers. Raw draft working and self-correction text must be removed before the report is finalised. An executing agent following the first Frontmatter Table would apply a wrong fix (marking `audience: developer` as a schema error requiring change, when it is schema-valid). The corrected Table at lines 80–95 and the corrected count of 29 are the canonical outputs, but the draft artefacts make the report ambiguous and double-length.

The corrected Frontmatter Table (lines 80–95) and corrected count (29) should be retained. The first draft table, self-correction paragraph, and arithmetic working should be removed.

P-rule: P17 (self-consistency corrections must enumerate every location and update ALL of them before closing the report — the draft artefacts are the residue of a partial self-correction)
Fail count impact: 0 (the 29 FAIL count in the corrected section is the operative count)

**C-02 — Category 1 verdict count error: states 11, lists 10**

Original stated: `Category 1 verdict: FAIL — 11 checks fail (1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13). (P66: Frontmatter Table and check table aligned.)`

Count: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13 = 10 items, not 11. The original draft Frontmatter Table included check 1.5 as FAIL (audience: developer), but the corrected check table marks 1.5 as PASS. The Category 1 verdict was not updated when 1.5 was corrected. The corrected count is 10 checks fail.

P-rule: P49, P17
Fail count impact: The 29-FAIL overall count uses the arithmetic working in the Verdict Summary which correctly counts Category 1 as 10. The category-level verdict saying "11" is wrong; the overall count of 29 is right. The category verdict must be corrected to "10 checks fail."

**C-03 — P94: CRITICAL NAVIGATION ORPHAN not written as a standalone section before Category 1**

Page is NOT in docs.json (confirmed at lines 2968–2987). The report notes this in the header metadata line (`NOT in docs.json`) and in the Pre-Check: File Integrity section. However, P94 requires a standalone `CRITICAL NAVIGATION ORPHAN` heading in the report body BEFORE Category 1, not only in the header metadata. The current report has a Pre-Check section (P81 satisfied) but does not produce the required P94 block.

Impact: The navigational finding is correctly captured in Category 7 (checks 7.1, 7.4, 7.7, 7.8 all FAIL). The structural placement per P94 is absent. Format violation only.

P-rule: P94
Fail count impact: 0

**C-04 — P87: `pageType: landing` is not a TYPE-CONFUSION error — correct framing**

x-help has `pageType: landing`, not `pageType: overview`. P87 specifically applies to `pageType: overview` (a pageVariant value placed in the wrong field with no migration path). `landing` IS a deprecated 12-type schema value with a migration path (closest canonical = `navigation` or `resource`). The report correctly flags `landing` as a deprecated alias (check 1.2 FAIL) and raises BD-1 for the correct pageType. P87 does not apply here.

**C-05 — `audience: developer` handling: check table correct, first Frontmatter Table wrong**

The corrected Frontmatter Table (lines 80–95) correctly shows `audience: developer` as PASS (schema-valid per P67/P50). Check 1.5 in the check table correctly shows PASS with an INFO note about editorial mismatch. Check 2.7 notes the audience register mismatch as a separate check. The inter-check consistency (1.5 PASS for schema, 2.7 N/A for content because page is empty) is correct. No correction to the operative content — the draft artefacts are the problem (C-01).

**C-06 — The operative FAIL count is 29 (not 44)**

The first read of this report (lines 1–249) appeared to show 44 confirmed FAILs. That number came from a different, earlier version of the report that appeared at the top of the file but was superseded by the corrected version. The Verdict Summary at line 338+ shows two verdicts — an initial "30" and a corrected "29" with working. The correct operative count is 29.

This is a critical structural problem: the report as a file contains both an earlier version (with inflated counts and a wrong audience FAIL) and a corrected version. There is no clear demarcation between the two. Any executing agent reading the full file would encounter contradictory instructions.

P-rule: P17, P43 (finding IDs must be unique — having two full reports in one file creates ID ambiguity)
Fail count impact: The corrected count is 29. An earlier count of 44 appeared in what turned out to be a superseded draft section.

---

## Corrected Fail Count

**Original report fail count:** 29 (from corrected section in the report)
**Adjustments:** 0 additions, 0 removals
**Corrected fail count:** 29
**Corrected FAIL IDs:** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.5, 2.6, 2.10, 3.6, 3.7, 4.1, 4.2, 4.4, 4.5, 5.1, 5.2, 5.7, 6.6, 7.1, 7.4, 7.7, 7.8, 9.1, 9.3

**Category 1 corrected verdict:** 10 checks fail (not 11 — 1.5 is PASS, see C-02)

---

## New Findings (P90–P96 gaps)

**P90:** Not applicable. `status: draft` is a canonical value. No P90 trigger.

**P91:** Page body is empty. No components, no Accordion, no Card content to scan. P91 not triggered.

**P92:** `purpose: landing` — not in the 15-value canonical set, correctly flagged as FAIL at check 1.4 (invalid value, not a wrong-field error like `purpose: guide`). `landing` is not a pageType value repurposed in a purpose field — it is simply not in either schema's purpose set. P92 targets `purpose: guide` specifically. Not applicable.

**P93:** No content, no contradictions. Not triggered.

**P94:** Page is NOT in docs.json. CRITICAL NAVIGATION ORPHAN block required before Category 1 — absent. See C-03.

**P95:** No content overlap — page is empty. Not triggered.

**P96:** Page has no H2/H3 headings. Title only (`X-help`). Known-failing heading patterns are not applicable on an empty stub. Correctly N/A in the check table.

---

## Proposed Learnings

**Proposed P-97 (candidate, structural):** A check report that contains self-corrections must eliminate all superseded content before finalising. The report must contain exactly one Frontmatter Table, one verdict per category, and one overall Verdict Summary. Arithmetic working and self-correction commentary must be removed. If the agent caught its own error and corrected it, only the corrected version survives in the final report. Leaving both versions creates execution risk for downstream agents.

Note: This report surfaces a recurring pattern across multiple batches. The x-help case is severe because the full file contains what appears to be an earlier version (44 FAILs with `audience: developer` as schema FAIL) alongside the corrected version (29 FAILs with `audience: developer` as PASS). P17 covers correction propagation but does not explicitly address the need to DELETE superseded content from the report body. The proposed learning fills this gap.
