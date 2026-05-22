# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/advanced-operations/gateway-relationships.md`

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
**Check affected:** 1.8 / Frontmatter Table / F-07
**Finding in original:** F-07 states "`status: published` is inconsistent with missing veracityStatus and unresolved FACT CHECK." The fix recommends changing `status` to `draft`. The Frontmatter Table row shows `status: published` as FAIL, citing checks.mdx §1.8 equivalence with `status: current`.
**What is wrong:** The report treats `status: published` as functionally equivalent to `status: current` but does not flag that `published` is itself a non-canonical value. Per checks.mdx §1.8, the valid values are `verified`, `unverified`, `stale` for `veracityStatus`, and separately, `current` and `draft` are the valid `status` values. `published` is not in either set. The report's fix (change to `draft`) is directionally correct but incomplete — it does not identify the additional non-canonical value error. Check 1.8 should note this as a two-part failure: (a) `published` is not a valid `status` value; (b) even the intended `current` equivalent would require `veracityStatus: verified`. The finding severity is appropriate but the diagnosis is incomplete.
**Correction:** F-07 should read: "`status: published` is a non-canonical value. Valid `status` values are `current` and `draft`. Additionally, the intended `current` state requires `veracityStatus: verified` AND zero REVIEW flags per checks.mdx §1.8. Fix: change `status` to `draft` and add `veracityStatus: unverified`."

### Issue 2: Verdict count verified (P26/P49)
**Severity:** NONE
**Check affected:** Verdict Summary
**Finding in original:** "Checks failing (count: 22): 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 3.1, 3.2, 3.4, 3.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3"
**What is wrong:** Counting the listed IDs: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (7), 2.2, 2.4 (2), 3.1, 3.2, 3.4, 3.7 (4), 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9 (7), 9.1, 9.3 (2) = 22 IDs. Count is correct. No error.
**Correction:** Confirmed correct. **No change required.**

### Issue 3: Heading score for "Gateway Loki API — understanding selection decisions" — em-dash also fails check 2.4 scope (P30)
**Severity:** MEDIUM
**Check affected:** 2.4 (Banned Construction Scan) / 3.1 / F-15
**Finding in original:** The em-dash in the heading "Gateway Loki API — understanding selection decisions" is correctly flagged in the Banned Construction Scan (as F-15 under check 3.1 / heading score). The report notes "em-dash" in the heading.
**What is wrong:** Per P30, em-dash prohibition applies to ALL visible text including H2/H3 headings. The Banned Construction Scan table correctly lists this heading as a flag for em-dash (YES — F-15). The check 2.4 scan table entry for this heading reads "em-dash (—) | banned (CLAUDE.md: no em-dashes) | YES — F-15." However, the check 2.4 category result row in Category 2 states: "FAIL | See Banned Construction Scan. Multiple `can [verb]` and `if [condition]` instances. See F-09, F-10" — the heading em-dash finding (F-15) is NOT referenced in the Category 2 check table detail for 2.4. The scan table catches it, but the check table row for 2.4 does not cite F-15.
**Correction:** Check 2.4 detail should read: "FAIL — See Banned Construction Scan. Confirmed flags: F-08 (`meaningfully`/check 2.2), F-01 (em-dash in description/check 1.11), F-15 (em-dash in H2 heading 'Gateway Loki API'). Multiple BORDERLINE `if [condition]` instances reviewed and accepted." Note that F-01 (description em-dash) overlaps with check 1.11, and F-15 (heading em-dash) should also be cited under check 2.4 per P30. This does not change the FAIL verdict but makes the check table complete and traceable.

### Issue 4: Check 2.2 failure source — `meaningfully` attributed to wrong check (P46)
**Severity:** MEDIUM
**Check affected:** 2.2 vs 2.4
**Finding in original:** Check 2.2 FAIL for `meaningfully` (F-08). The Banned Construction Scan table at line 251 also lists `meaningfully` as banned word (YES — F-08).
**What is wrong:** `meaningfully` is a banned WORD, correctly in check 2.2. P46 specifically addresses `not [X] as primary statement` belonging in 2.4 not 2.2, but that is not the issue here. The issue is whether the Banned Construction Scan table — which is scoped to constructions — should also be listing banned words. Per the scan's scope statement ("body prose, headings, description..."), it scans for ALL visible text issues including banned words. The Banned Construction Scan verdict statement says "Two confirmed flags (F-01 em-dash in description, F-08 'meaningfully', F-15 em-dash in heading)" — listing three items and calling it "two." This is a minor count error in the scan verdict sentence.
**Correction:** The Banned Construction Scan verdict sentence should read: "Three confirmed flags (F-01 em-dash in description, F-08 'meaningfully', F-15 em-dash in heading)." This does not change any check result or finding ID.

### Issue 5: F-09 and F-10 severity classification (P36)
**Severity:** LOW
**Check affected:** F-09, F-10 in Finding Register
**Finding in original:** F-09 is MEDIUM, F-10 is INFO.
**What is wrong:** F-09 is a BORDERLINE `if [condition]` flagged for human review. MEDIUM is appropriate for a borderline finding requiring human decision. F-10 is "capability statement, not a value claim. No action needed" — INFO is appropriate. Both severity classifications are correct per P36's four-level scale (CRITICAL/HIGH/MEDIUM/INFO). No error.
**Correction:** Confirmed correct. **No change required.**

### Issue 6: P15 compliance — `purpose` field reading
**Severity:** NONE
**Check affected:** 1.4
**Finding in original:** "1.4 | `purpose` uses 15-value canonical set | PASS | `explain` is valid. Read directly from frontmatter"
**What is wrong:** Per P15, purpose must be read directly from frontmatter and the exact value stated. The report states "Read directly from frontmatter" and confirms `explain`. The source file frontmatter at line 28 confirms `purpose: explain`. P15 compliance verified.
**Correction:** Confirmed correct. **No change required.**

### Issue 7: check 1.2 PASS for `concept` — P50 compliance
**Severity:** NONE
**Check affected:** 1.2
**Finding in original:** "1.2 | `pageType` uses 7-type canonical schema | PASS | `concept` is a valid canonical value"
**What is wrong:** Per P50, `concept` is a valid 7-type value and check 1.2 must PASS. The report correctly passes check 1.2. No error.
**Correction:** Confirmed correct. **No change required.**

---

## Confirmed Correct Findings

1. **F-01 (description length + em-dash):** Confirmed. Source frontmatter lines 4–7 show 226-character description containing em-dash.
2. **F-07 (`status: published` inconsistency):** Directionally correct — fix (change to `draft`) is right. Incomplete diagnosis (see Issue 1 above), but actionable.
3. **F-08 (`meaningfully` banned word):** Source line 199 confirmed: "Being in the top 10 by stake vs top 50 means meaningfully more job volume from stake-weighted gateways."
4. **F-11 through F-15 (heading renames):** All five failing headings identified correctly. Scores verified with per-dimension breakdown present. Proposed renames are concept-anchored. No renames introduce prohibited terms from the check 3.2 banned/avoid list (Discovery Mechanisms, Selection Algorithm, Improving Selection Probability, Gateway Loki API, Capability Advertisement — all pass check 3.2 validation).
5. **P41 `industry`/`niche` fields:** Correctly flagged as required FAIL with concrete proposed values.
6. **P51 compliance:** All proposed frontmatter values formatted as "Proposed: X — confirm before applying."
7. **P37 not applicable:** No wrong-field errors other than correctly noted absence of required fields.
8. **Navigation sequence:** Confirmed from docs.json with specific line citations (2938–2942).
9. **`veracityStatus` absent:** Correctly flagged. The FACT CHECK comment at line 245 confirms unverified content.

---

## Corrected Verdict
**Rating: MOSTLY RELIABLE**

One confirmed issue: the `status: published` diagnosis (Issue 1) is incomplete. The report identifies the consequences correctly and recommends the right fix, but does not name `published` as itself a non-canonical value. This is a diagnostic gap, not an execution error — the fix as written would produce a correct result. The Banned Construction Scan verdict has a minor three-vs-two count error (Issue 4). All other findings are substantiated against the source file. Verdict counts are correct.

**Corrected fail count:** 22 checks fail — count is accurate as stated: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 2.4, 3.1, 3.2, 3.4, 3.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3
