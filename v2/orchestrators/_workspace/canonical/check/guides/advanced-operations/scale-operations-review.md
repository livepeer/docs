# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/advanced-operations/scale-operations.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating
NEEDS REWORK

---

## Issues Found

### Issue 1: Verdict count mismatch — stated 20, listed 22 (P26/P49)
**Severity:** HIGH
**Check affected:** Verdict Summary / Findings Summary
**Finding in original:** "Checks failing (count: 20): 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.7, 4.1, 4.7, 4.8, 5.1, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 9.1, 9.3"
**What is wrong:** Counting the IDs listed: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (7), 2.4 (1), 3.1, 3.7 (2), 4.1, 4.7, 4.8 (3), 5.1 (1), 6.1, 6.2, 6.4, 6.5, 6.6, 6.8 (6), 9.1, 9.3 (2) = 22 IDs. The stated count of 20 is incorrect. Per P26 and P49, the verdict summary must count individual failing check IDs and the count must match the list.
**Correction:** Change "count: 20" to "count: 22." The full list of 22 failing check IDs is correct.

### Issue 2: check 1.2 PASS for `concept` — P50 compliance verified; but check report marks it as FAIL in Frontmatter Table
**Severity:** HIGH
**Check affected:** 1.2 / Frontmatter Table
**Finding in original:** The Frontmatter Table row for `pageType` reads: "FAIL | `concept` is a valid canonical pageType. However, content is primarily operational/procedural… Scope mismatch between pageType and content. See BD-1."
**What is wrong:** Per P50, any value from the 7-type canonical schema must PASS check 1.2. `concept` is a valid canonical pageType. Check 1.2 must PASS even if the editorial recommendation is to migrate to `guide`. The editorial concern about content mismatch belongs in BD-1 and in a separate INFO note, not as a check 1.2 FAIL. The Frontmatter Table records this as FAIL. The Category 1 check table at 1.2 correctly records PASS ("concept is a valid canonical value") — so the check table is correct, but the Frontmatter Table row records FAIL, creating a contradiction between the two sections of the report.
**Correction:** The Frontmatter Table row for `pageType` must be changed from FAIL to PASS, with a note: "Valid canonical value. Editorial recommendation to migrate to `guide` per BD-1 — see BD-1 for options." The Category 1 check table correctly records 1.2 as PASS. The Frontmatter Table contradicts it and must be corrected. This also means check 1.2 is not in the failing check count. The corrected fail list should remove 1.2 — but 1.2 is NOT listed in the verdict fail count (the list starts at 1.1, 1.6, 1.7… — 1.2 is absent), which means the Frontmatter Table FAIL for 1.2 was not counted. The inconsistency is between the Frontmatter Table (FAIL) and the check table + verdict (PASS/not listed). The Frontmatter Table must be corrected to match the check table.

### Issue 3: `purpose: explain` check 1.4 — same mismatch between Frontmatter Table and check table (P50/P35)
**Severity:** HIGH
**Check affected:** 1.4 / Frontmatter Table
**Finding in original:** The Frontmatter Table row for `purpose` reads: "FAIL | `explain` is valid but content is mostly `operate'… Mismatch between stated purpose and actual content. See BD-1. Value is read directly from frontmatter."
**What is wrong:** Per checks.mdx §1.4, the pass criterion for check 1.4 is: value uses the 15-value canonical set. `explain` is a valid value. The check must PASS for schema compliance. The Category 1 check table correctly records 1.4 as PASS ("explain is a valid value (read directly from frontmatter). Schema-valid, but see BD-1 for editorial concern"). The Frontmatter Table records FAIL for the same field. Same contradiction as Issue 2. The FAIL in the Frontmatter Table is an editorial judgement, not a schema failure. Per P50 (and by analogy to purpose field), schema-valid values pass the schema check; editorial recommendations go to BD-1 or INFO notes.
**Correction:** Change the Frontmatter Table row for `purpose` from FAIL to PASS with a note: "Valid canonical value. Content mismatch with stated purpose is an editorial concern — see BD-1." This aligns the Frontmatter Table with the check table.

### Issue 4: `status: published` — non-canonical value not explicitly named (P39)
**Severity:** HIGH
**Check affected:** 1.8 / Frontmatter Table / F-07
**Finding in original:** F-07 states "`status: published` inconsistent with absent veracityStatus. Change `status` to `draft`."
**What is wrong:** Same issue as gateway-relationships (Issue 1 in that report). `published` is not a valid `status` value. Valid values are `current` and `draft`. The report identifies the veracityStatus conflict but does not name the non-canonical value error explicitly. The fix (change to `draft`) is correct.
**Correction:** F-07 should read: "`status: published` is a non-canonical `status` value. Valid values are `current` and `draft`. Fix: change to `status: draft` and add `veracityStatus: unverified`."

### Issue 5: Duplicate card finding (F-10) — source file verified (P47)
**Severity:** NONE — confirming correctness
**Check affected:** 4.8 / 8.1 / F-10
**Finding in original:** "CardGroup cards 'Split O-T Setup' (line 220) and 'Siphon Setup' (line 223) both href `/v2/orchestrators/guides/deployment-details/siphon-setup`."
**What is wrong:** Reading scale-operations.mdx lines 220 and 223: both cards confirmed pointing to `/v2/orchestrators/guides/deployment-details/siphon-setup`. The finding is correct. Line numbers are accurate (220 and 223 in the source).
**Correction:** Confirmed correct. **No change required.**

### Issue 6: BD-1 recommendation pre-judges the resolution (P52)
**Severity:** MEDIUM
**Check affected:** BD-1
**Finding in original:** BD-1 presents two options ([A] keep concept/explain, [B] change to guide/operate) then closes with: "Recommendation: [B] is lower effort and better matches content. Page reads operationally throughout. Confirm before applying."
**What is wrong:** Per P52, when a blocking decision has two or more equal options, INFO rows and co-fix notes must frame both options neutrally. The BD-1 section explicitly recommends Option B. P52 applies because the recommendation can influence how downstream work is prioritised, potentially bypassing the human decision gate. A recommendation in a BD section is not prohibited by the letter of P52, which specifically targets INFO rows and co-fix notes — however the spirit of P52 is to avoid pre-judging unresolved decisions. More critically, the recommendation is framed as operational guidance ("lower effort") which is an editorial judgement beyond the checker's scope.
**Correction:** BD-1 should present both options without a recommendation. Remove the "Recommendation: [B]..." line. Both options have legitimate arguments; the decision belongs to Alison.

### Issue 7: Check 2.4 detail — em-dashes are the 2.4 items but F-08 claims otherwise (P30)
**Severity:** MEDIUM
**Check affected:** 2.4 / F-08
**Finding in original:** F-08 states: "Banned Construction Scan shows no confirmed `can [verb]` value claims. Check 2.4 result is FAIL only for em-dashes in body prose. Reclassification: em-dash findings (F-12, F-13, F-14) are the 2.4 items. Check 2.4 FAIL is tied to F-12/F-13/F-14."
**What is wrong:** This is a self-correction within the findings list — F-08 re-attributes check 2.4's failure from the unsubstantiated `can [verb]` instances to the em-dash findings. This is the correct action (per P30). However, the Category 2 check table row for 2.4 reads: "FAIL | See Banned Construction Scan. Multiple `can [verb]` instances. See F-08." The check table row still references `can [verb]` instances and F-08, when F-08 itself says the 2.4 items are F-12/F-13/F-14. The check table was not updated to match F-08's self-correction.
**Correction:** Check 2.4 detail row should read: "FAIL — See Banned Construction Scan. Check 2.4 failures are em-dashes in body prose: F-12 (line 123), F-13 (line 134), F-14 (line 195). No `can [verb]` value claims confirmed."

### Issue 8: check 8.1 result — PASS despite duplicate card (P35)
**Severity:** MEDIUM
**Check affected:** 8.1
**Finding in original:** "8.1 | All internal links resolve | FAIL | Issue: CardGroup at lines 216–228 has two cards both pointing to `/v2/orchestrators/guides/deployment-details/siphon-setup` (docs.json line 2886 ✓ — path exists). Both cards are valid links individually, but duplicate destination is a content quality issue (see F-10)."
**What is wrong:** The check table records check 8.1 as FAIL, then the Category 8 verdict states: "Category 8 verdict: PASS (link issue at 8.1 is a content quality issue, not a broken link — path resolves. External links NOT-TESTED)." The check table says 8.1 FAIL, the category verdict says PASS. This is a result column vs detail contradiction per the pattern identified in P28. The category verdict is correct (the links resolve, so 8.1 should PASS) but the check table records FAIL. The failing check list in the verdict summary does NOT include 8.1 (correctly).
**Correction:** Change check 8.1 Result from FAIL to PASS. Add a note: "Both links resolve. Duplicate destination is a content quality issue logged under F-10 (check 4.8), not a link resolution failure." The failing check count (22) does not include 8.1 — the count is correct for the intended verdict, but the check table is inconsistent with it.

---

## Confirmed Correct Findings

1. **F-10 (duplicate card destinations):** Confirmed. Source lines 220–223 show both "Split O-T Setup" and "Siphon Setup" point to `/v2/orchestrators/guides/deployment-details/siphon-setup`.
2. **F-01 (description em-dash):** Confirmed. Source frontmatter lines 4–7 contain em-dash in description.
3. **F-12, F-13, F-14 (body em-dashes):** Confirmed. Source line 123: "no configuration change on the orchestrator required — no configuration change"; line 134: "no manual load balancing step — go-livepeer"; line 195: "Distribute the keystore file carefully — only over encrypted channels".
4. **F-09 (heading rename for "When you need fleet operations"):** Per-dimension score breakdown present (18/25). Proposed rename `Fleet Decision Criteria` does not introduce check 3.2 banned terms.
5. **Missing frontmatter fields (`complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`):** All correctly flagged as FAIL with concrete proposed values per P41 and P51.
6. **F-11 (no REVIEW flags for multi-orchestrator claims):** Correctly flagged as check 6.5 failure with concrete proposed REVIEW comment.
7. **P50 compliance for check 1.2:** The check table correctly records 1.2 PASS for `pageType: concept`. The Frontmatter Table incorrectly records FAIL (see Issue 2).
8. **P15 compliance:** `purpose: explain` read directly from frontmatter; exact value stated.
9. **Navigation sequence:** Confirmed from docs.json with line citations (2939–2942).

---

## Corrected Verdict
**Rating: NEEDS REWORK**

Four issues require correction before this report can be used for remediation:

1. **Issue 1 (count mismatch):** Verdict says "count: 20" but 22 IDs are listed. Corrected count: 22.
2. **Issue 2 (Frontmatter Table `pageType` FAIL):** Frontmatter Table says FAIL for `concept`; check table correctly says PASS. Frontmatter Table must be corrected to PASS.
3. **Issue 3 (Frontmatter Table `purpose` FAIL):** Same contradiction as Issue 2. Frontmatter Table records FAIL for `explain`; check table correctly says PASS. Frontmatter Table must be corrected to PASS.
4. **Issue 8 (check 8.1 FAIL vs category verdict PASS):** Check table row records FAIL; Category 8 verdict and the failing check list both treat it as PASS. Check table row must be corrected to PASS.

Additionally: Issue 4 (`status: published` incomplete diagnosis), Issue 6 (BD-1 pre-judges the outcome), and Issue 7 (check 2.4 detail uncorrected after F-08 self-correction) require fixes for report integrity.

**Corrected fail count:** 22 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.7, 4.1, 4.7, 4.8, 5.1, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 9.1, 9.3
