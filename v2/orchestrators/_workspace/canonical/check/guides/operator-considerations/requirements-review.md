# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/operator-considerations/requirements.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: P39 — veracityStatus fix recommends `veracityStatus: unverified`
**Severity:** HIGH
**Check affected:** 1.8 (F-05), Cross-Category Connections, BD-1
**Finding in original:** Check 1.8: "Fix: change `status: draft`, add `veracityStatus: unverified`. See BD-1. F-05." BD-1 Option A: "Change `status: draft` + add `veracityStatus: unverified`." Cross-Category Connections: "Fix: change `status: draft`, add `veracityStatus: unverified`. F-05 is the canonical finding."
**What is wrong:** P39 states the valid fixes for the `status: current` + absent `veracityStatus` problem are: change `status` to `draft`, OR add `veracityStatus: verified` only when content is verified. The recommendation to add `veracityStatus: unverified` as a field value is not supported by checks.mdx §1.8, which defines valid values as `verified`, `partial`, or the field being absent. `unverified` is not a valid schema value. The correct Option A fix is simply: change `status: draft`, leave `veracityStatus` absent. This appears in all three reports in this batch as a systematic error; it is not specific to requirements.mdx.
**Correction:** F-05, check 1.8, Cross-Category Connections, and BD-1 Option A should read: "Fix: change `status: draft`. Leave `veracityStatus` absent until verification is complete, then set `veracityStatus: verified`." Remove the directive to add `veracityStatus: unverified`.

---

### Issue 2: description field — report states 167 chars but then marks check 1.11 FAIL twice
**Severity:** LOW (minor inconsistency)
**Check affected:** 1.11, Frontmatter Table
**Finding in original:** Frontmatter table row for `description`: "PASS | 167 chars — FAIL: exceeds 160 limit. F-02." Check 1.11: "FAIL | 167 chars (exceeds 160 limit). F-02."
**What is wrong:** The Frontmatter Table field-level entry for `description` says "PASS" in the Pass/Fail column but then says "FAIL" in the Notes column. This is a P28 violation — Result column must match the detail text conclusion. The result should be FAIL, not PASS (the notes make clear it fails). The check 1.11 row correctly says FAIL. The frontmatter table is internally inconsistent: it says PASS/FAIL simultaneously for the same row.
**Correction:** Frontmatter table `description` row Pass/Fail column should read: **FAIL** (not PASS). The Notes correctly explain the reason. This is a formatting inconsistency, not a substantive finding error.

---

### Issue 3: P46 — `not [X]` found at line 185 but placed under check 2.4, not 2.2
**Severity:** PASS (confirmed correct placement)
**Check affected:** 2.4 (F-21)
**Finding in original:** Line 185: `"Not competitive at scale."` — classified as `not [X]` as primary statement. Placed under check 2.4 in the Banned Construction Scan. Check 2.4 result: FAIL.
**What is wrong:** Nothing — this is correct per P46. `not [X] as primary statement` belongs in check 2.4. The checker correctly routes it there. The check 2.4 result is FAIL, not 2.2. Confirmed compliant.

---

### Issue 4: F-01 and F-13 duplicate the same title concern
**Severity:** LOW
**Check affected:** Finding Index (F-01, F-13)
**Finding in original:** F-01 (INFO): "`Requirements` title too generic. See BD-3." F-13 (MEDIUM): "Title `Requirements` too generic. See BD-3 and F-01."
**What is wrong:** F-13 explicitly cross-references F-01 but assigns a different severity (MEDIUM vs INFO) to what it describes as the same issue. Per P45, each finding has exactly one canonical fix. Two finding entries covering the same issue (generic title) create ambiguity about which ID is canonical. F-13 says "See BD-3 and F-01," effectively forwarding to both F-01 and BD-3, making F-13 a non-finding. An executing agent would act on F-01 (INFO) based on F-13's deferral, then encounter MEDIUM severity on F-13 for the same item.
**Correction:** Collapse F-01 and F-13 into a single finding. The severity should be MEDIUM (the title is a real structural issue — check 3.6 fails). Remove F-01 as a separate entry. Renumber subsequent findings. Alternatively, make F-01 the canonical finding with MEDIUM severity and explicitly close F-13 as "merged into F-01."

---

### Issue 5: Verdict count — verify 21 individual check IDs
**Severity:** MEDIUM
**Check affected:** Verdict Summary
**Finding in original:** "Total FAIL checks: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 2.5, 3.1, 3.6, 3.7, 5.4, 6.1, 6.2, 6.4, 6.9, 8.6, 9.1, 9.3 = 21 checks fail"
**What is wrong:** Counting the listed IDs: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (7), 2.2, 2.4, 2.5 (3), 3.1, 3.6, 3.7 (3), 5.4 (1), 6.1, 6.2, 6.4, 6.9 (4), 8.6 (1), 9.1, 9.3 (2) = 21. Count matches the listed IDs. However, check 6.5 appears in the Category 6 table with result FAIL ("7 inline TODO blocks confirm unverified claims. `status: current` incompatible. F-05 already logged.") but is absent from the verdict ID list. Check 6.6 (veracityStatus honest — FAIL) also appears in the category table as FAIL but is absent from the verdict list. Two FAIL checks (6.5, 6.6) are omitted from the verdict count. This gives a corrected total of 23 failing checks, not 21.
**Correction:** Corrected verdict should list: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 2.5, 3.1, 3.6, 3.7, 5.4, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9, 8.6, 9.1, 9.3 = **23 checks fail**. Note: the checker acknowledges F-05 covers 6.5 and 6.6 at the finding level (cross-referenced), but P49 requires individual failing check IDs listed in the verdict regardless of finding deduplication.

---

### Issue 6: P50 — `pageType: reference` correctly passed but category 2 verdict omits check 2.10
**Severity:** LOW
**Check affected:** Category 2 verdict
**Finding in original:** "Category 2 verdict: 3 checks fail: 2.2, 2.4, 2.5"
**What is wrong:** Check 2.10 ("No hedging openers") has result **FAIL** in the check table (F-11). The Category 2 verdict states "3 checks fail: 2.2, 2.4, 2.5" — omitting 2.10. The Category 2 verdict count should be 4 checks fail: 2.2, 2.4, 2.5, 2.10. This is a P26/P49 error — the verdict count contradicts the check table.
**Correction:** Category 2 verdict: "4 checks fail: 2.2, 2.4, 2.5, 2.10." The total FAIL check count in the Verdict Summary also needs updating (21 → 22, before applying the Issue 5 correction). With both corrections: 23 fail checks from Issue 5 plus the 2.10 addition from Issue 6 = **24 checks fail** total.

---

### Issue 7: F-11 description is confusing — flagged MEDIUM but "resolved by F-09"
**Severity:** LOW
**Check affected:** F-11 (2.5, 2.10)
**Finding in original:** "| F-11 | MEDIUM | 2.5, 2.10 | Opening is self-referential meta-description. Fix: apply F-09 (delete opener sentences). Covered by F-09. |" AND the note at end: "F-11 resolved by F-09 (same opener issue). Merged into one canonical fix per P13."
**What is wrong:** F-11 is listed as an active finding in the Finding Index with MEDIUM severity, then described as "Covered by F-09" and "Merged into one canonical fix per P13." A merged/resolved finding should not appear as an active finding row in the Finding Index. An executing agent sees F-11 as an action item, follows the "Fix: apply F-09" instruction, acts on F-09, but is unclear whether F-11 itself requires additional action. The note "resolved by F-09" belongs in the Cross-Category Connections section only; F-11 should either be removed from the Finding Index or clearly marked "(merged into F-09 — no separate action required)."
**Correction:** Either remove F-11 from the Finding Index and add a note to F-09: "Also resolves check 2.5 and 2.10 violations," or retain F-11 as a cross-reference entry with explicit "[No separate action — see F-09]."

---

## Confirmed Correct Findings

- **No corrupt prefix:** Correctly verified — requirements.mdx has no corrupt prefix at lines 1–2. Source file confirmed clean via check report's MDX renders clean finding.
- **P50:** `pageType: reference` correctly passed at check 1.2 as a valid 7-type canonical value.
- **P51:** All proposed frontmatter values formatted as "confirm before applying." Compliant.
- **P41:** `industry` and `niche` flagged FAIL with concrete proposed values. Compliant.
- **P15:** `purpose` read directly from frontmatter as `reference`. Compliant.
- **P16/P53:** "Related Pages" correctly exempted from heading scoring. No "See also" equivalent present or mis-exempted.
- **P28:** Result column matches detail text in category check tables (with exception noted in Issue 2 for the frontmatter table). Category-level check rows are consistent.
- **P29:** Banned word scan cites line 184 with quoted content `"but throughput is significantly lower"`. Correct line citation.
- **P30:** Em-dash scan is noted as covering all visible text. No em-dashes found in headings or description.
- **P36:** Only CRITICAL/HIGH/MEDIUM/INFO severity levels used. Compliant.
- **P37:** Error type characterised correctly in all frontmatter findings.
- **P43:** Finding IDs F-01 through F-21 are sequential (with F-01/F-13 duplication noted in Issue 4, but no duplicate ID numbers).
- **P46:** `not [X]` construction correctly placed under check 2.4 (F-21), not under check 2.2. Compliant.
- **P48:** StyledStep title headings correctly included in the heading score table per P48 ("StyledStep titles (P48)" header row present). Compliant.
- **P54:** Check 2.1 correctly passes — no UK English violations present. `significantly` correctly routed to check 2.2 only.
- **P18 rename proposals:** F-12 rename `Checklist Before Going Live` → `Pre-launch Checklist` (no banned terms); F-13 / title rename to `Hardware Requirements` or `Node Requirements` (no banned terms). Validated against checks.mdx §3.2 tiers.
- **P44:** Proposed fixes checked for violations. F-08 replacement text is factual and direct. F-09 replacement is a deletion directive. F-21 replacement states the positive ("CPU transcoding does not scale for production use: session counts are in low single digits") — this uses `does not` as the primary statement; however, the fix itself is better than the original since it pairs the negative with a specific threshold, which partially resolves the `not [X]` issue per the rule.
- **P47:** Link verification on requirements.mdx does not flag false positives. Unverified links correctly labelled INFO, not FAIL. No confirmed-broken links in the requirements page link table.
- **Category 1 verdict:** "7 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11" — correct.
- **Category 3 verdict:** "3 checks fail: 3.1, 3.6, 3.7" — correct.
- **Category 4 verdict:** "0 checks fail" — correct.
- **Category 5 verdict:** "2 checks fail/not-tested: 5.3, 5.4" — correct (5.10 passes because all imports are used).
- **Category 6 verdict as stated:** "4 checks fail: 6.1, 6.2, 6.4, 6.9" — this is what the category 6 verdict says, but 6.5 and 6.6 also fail in the table (Issue 5 above). The category verdict itself has the same omission.
- **Category 7 verdict:** "0 checks fail" — correct.
- **Category 8 verdict:** "1 check fails: 8.6" — correct.
- **Category 9 verdict:** "2 checks fail: 9.1, 9.3" — correct.
- **BD-2 (mixed pageType signals):** Correctly identified and escalated. The procedural checklist section within a `reference` page is a genuine structural decision that requires human input. Correctly marked as Alison-decision.
- **BD-3 (generic title):** Correctly identified and escalated with two concrete alternative proposals (`Hardware Requirements`, `Node Requirements`).

---

## Corrected Verdict

**Corrected fail count (accepting all issues above):**
24 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 2.5, 2.10, 3.1, 3.6, 3.7, 5.4, 6.1, 6.2, 6.4, 6.5, 6.6, 6.9, 8.6, 9.1, 9.3

**Change from original:** +3 (add 2.10, 6.5, 6.6 — all present as FAIL in their category check tables but omitted from the verdict count).

**Critical findings:** F-05 (status/veracityStatus incoherence) — valid, though fix text needs correction per Issue 1.

**Blocking before publication unchanged:** F-05 (incoherent status), F-14 (TODO blocks), F-19 (no sign-off). BD-1 requires Alison confirmation on status fix.

**Overall assessment:** The check report is mostly reliable. Core findings are well-structured and the detailed veracity inventory is thorough. The primary systematic errors are: the `veracityStatus: unverified` fix recommendation (P39 issue, shared across all three batch reports), three check ID omissions from the verdict count (P49), the frontmatter table Pass/Fail inconsistency for description (P28), and a duplicated finding for the generic title (P45). None of these affect the findings that block publication: F-05, F-14, F-19.
