# Critical Review — `v2/orchestrators/resources/technical/x-changelog.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/technical/x-changelog.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** P1–P90 (header does not state version; report format consistent with P1–P90 batch, no P81 pre-check section)

---

## Overall Rating

NEEDS CORRECTION

---

## Corrections Required

### Correction 1 — CRITICAL: OG image block incorrectly assessed as partial (P29, P66)

**Check ID affected:** 1.12, OG image block in Frontmatter Table
**Original statement:** Frontmatter Table row: "OG image block — Yes (partial) — `og:image` only — FAIL — Only `og:image` field present; missing `og:image:alt`, `og:image:type`, `og:image:width`, `og:image:height`." Check 1.12 FAIL with same rationale.
**Source verification:** The actual `x-changelog.mdx` file contains:
```
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
```
All 5 OG fields are present. The check report is factually wrong: it states only `og:image` is present when all 5 fields exist. Check 1.12 must be PASS. The check report failed this field based on incorrect reading of the source file.

**Secondary observation:** The OG image uses `/snippets/assets/site/og-image/fallback.png` — the fallback path, not a page-specific social preview image. This is technically correct schema (5 fields present) but uses a generic fallback. This is at most an INFO-level editorial note, not a check 1.12 FAIL.

**P-rule:** P29 (every cited finding must be verified against the actual file)
**Fail count impact:** -1 (remove 1.12 from FAIL list)

---

### Correction 2 — CRITICAL: Check 1.1 FAIL count needs adjustment from Correction 1

**Check ID affected:** 1.1
**Original statement:** Check 1.1 FAIL: "Missing: `complexity`, `lifecycleStage`, `veracityStatus`. OG block incomplete (1/5 fields)."
**Correction:** The "(1/5 fields)" rationale is wrong. OG block has all 5 fields. Check 1.1 still FAILs — but the rationale must be corrected: "Missing: `complexity`, `lifecycleStage`, `veracityStatus`. OG block is complete." The FAIL on 1.1 stands because of the three missing required fields, but not for the OG block reason.
**P-rule:** P29, P66
**Fail count impact:** 0 (1.1 remains FAIL, rationale corrected)

---

### Correction 3 — Verdict FAIL count arithmetic error (P49, P26)

**Original statement:** "Confirmed fail checks (17):" — then recounts inline to "(22)" and lists: `1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 3.6, 3.7, 4.1, 4.2, 4.4, 5.1, 5.2, 5.7, 7.4, 9.1`
**Correction:** The same "(17)" header artifact as in cli-flags — the corrected count of "(22)" is stated and a 22-ID list provided. With Correction 1 removing 1.12: correct count becomes 21. The report's arithmetic shows `11 + 1 + 2 + 3 + 3 + 1 + 1 = 22` — subtract 1 for 1.12 correction: **21 FAIL checks**.

**Revised FAIL list (21):** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.4, 3.6, 3.7, 4.1, 4.2, 4.4, 5.1, 5.2, 5.7, 7.4, 9.1
**P-rule:** P49, P26
**Fail count impact:** -1 (per Correction 1)

---

### Correction 4 — Check 1.5: audience BORDERLINE incorrectly included in FAIL list (P60)

**Check ID affected:** 1.5
**Original statement:** Category 1 verdict lists "Confirmed fail checks: 1.1, 1.2, 1.4, **1.5** (BORDERLINE on audience), 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13" — 1.5 is in the FAIL list with "(BORDERLINE on audience)" annotation.
**Correction:** P60 states: "BORDERLINE findings are not confirmed FAILs. When a check is classified BORDERLINE, the Verdict Summary must list it as BORDERLINE (pending human review), not FAIL." Check 1.5 is a schema-valid BORDERLINE — `developer` is canonical but editorially questionable in the Orchestrators tab. It must not appear in the confirmed FAIL list. The Verdict Summary correctly omits 1.5 from the FAIL list (it is listed under BORDERLINE: "1.5 (audience token — schema-valid but editorial question)") — so the Verdict Summary is correct. However, the Category 1 verdict line explicitly includes 1.5 in the "Confirmed fail checks" list. This is a Category-level count vs Verdict-level inconsistency. The category verdict "Confirmed fail checks" line must not include BORDERLINE items.
**P-rule:** P60, P66
**Fail count impact:** 0 for the overall Verdict Summary (1.5 already excluded there), but Category 1 verdict is internally inconsistent

---

### Correction 5 — P94 not applied: no Pre-Check docs.json header for non-nav file

**Check ID affected:** Report header
**Original statement:** "File status note" section correctly states the file is not in docs.json and notes this is expected for `x-` prefix. However, P94 requires that after the P81 file integrity step, docs.json verification occurs before category analysis and is structured as a named pre-check step. No P81 section exists.
**Correction:** The report correctly identifies the file's nav status, but P81 and P94 compliance requires: (1) a named "Pre-Check: File Integrity" section reading lines 1–10, (2) explicit "NAVIGATION ORPHAN" or "in docs.json" determination documented before Category 1. For `x-changelog`, the pre-check determination is: no corrupt prefix; not in docs.json (navigation orphan — expected for `x-` prefix, not a CRITICAL finding). This is a format gap.
**P-rule:** P81, P94
**Fail count impact:** 0

---

### Correction 6 — P87 not applied to `pageType: landing` migration call

**Check ID affected:** 1.2
**Original statement:** Check 1.2 FAIL: "`landing` is deprecated. Correct migration for a changelog: `pageType: reference` + `pageVariant: changelog`."
**P87 rule:** "When check 1.2 finds a `pageType: overview` value, flag it as a TYPE-CONFUSION error." P87 applies specifically to `overview`. `landing` has an established migration path in the §1.1 migration table (it is a deprecated pageType, not a type-confusion like `overview`). The check report's migration to `pageType: reference` + `pageVariant: changelog` is editorially reasonable but is presented as definitive when the §1.1 migration table does not list `landing` → `reference` + `changelog` as an explicit entry. The canonical migration for `landing` per the task brief context is `pageType: navigation` — but for a changelog page, the check agent has correctly reasoned that `navigation` is wrong and `reference` + `changelog` is more appropriate. This is an editorial inference, not a schema-defined migration. Per P51, the fix should be framed as "Proposed: confirm before applying" — which the report does ("confirm before applying"). This is correctly handled.
**P-rule:** P87, P51
**Fail count impact:** 0

---

## Corrected Fail Count

**Original stated:** 22 (with "(17)" header artifact)
**Adjustments:** -1 (1.12 incorrect — OG block is complete)
**Corrected:** 21

**Corrected FAIL IDs:** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 2.4, 3.6, 3.7, 4.1, 4.2, 4.4, 5.1, 5.2, 5.7, 7.4, 9.1

**BORDERLINE (not in FAIL count):** 1.5

---

## New Findings (P90–P96 gaps)

### NF-1 — P81/P94 pre-check sections absent

Same format gap as cli-flags: no "Pre-Check: File Integrity" section. For `x-changelog`, the source confirms: frontmatter opens at line 1 with `---`, no corrupt prefix, body is two blank lines. The "File status note" partially serves this function but is not structured as a P81/P94 pre-check.

### NF-2 — P96 heading scan not applicable but not documented

P96 requires explicit checking for known-failing heading patterns. `x-changelog` has no H2/H3 headings — the report correctly marks all heading checks as N/A. However, P96 compliance is not explicitly cited as having been applied. For empty pages, the scan is trivially N/A, but it should be documented.

### NF-3 — Fix list item F-08 (veracityStatus) should follow P84 atomic fix pattern

**F-08:** "Add `veracityStatus: unverified` to frontmatter." The `status` field is already `draft` — so P84/P39 atomic fix concern does not apply here (P39 governs `status: current` only). The fix is correctly isolated to adding `veracityStatus: unverified`. This is correct per P79.

### NF-4 — Category 1 FAIL count inconsistency with Verdict Summary

Category 1 verdict states: "Confirmed fail checks: 1.1, 1.2, 1.4, 1.5 (BORDERLINE on audience), 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13" — that is 12 check IDs listed (including BORDERLINE 1.5). After removing 1.12 (Correction 1) and 1.5 (Correction 4), the actual category 1 FAIL count is 10. This category-level over-count compounds with the verdict-level over-count. Executing agents reading only the category verdict lines would act on phantom findings.

---

## Proposed Learnings

**NEW-P98: When a check report states an OG image block is partial, the critical reviewer must independently verify by reading the source file's frontmatter. OG block misreads are high-impact because they generate a check 1.12 FAIL and contribute to the check 1.1 FAIL rationale — both cascade into fix list entries.**

This pattern appeared in x-changelog (all 5 OG fields present, checker reported only 1) and may indicate a scanning error where the checker read only the first OG line before moving on. Adding this as a verification point for critical reviews.
