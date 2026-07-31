# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/advanced-operations/dep-guide.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

**Note on file existence:** `dep-guide.md` exists at the stated path. The check file was found and is reviewed below.

---

## Rating
NEEDS REWORK

---

## Issues Found

### Issue 1: Verdict count mismatch — stated 27, listed 33 IDs (P26/P49)
**Severity:** HIGH
**Check affected:** Verdict Summary
**Finding in original:** "27 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.4, 3.5, 3.6, 3.7, 4.3, 4.4, 4.10, 5.1, 5.2, 5.7, 6.6, 7.1, 7.2, 7.4, 7.5, 7.7, 7.8, 8.1, 9.1, 9.2, 9.3" followed by "_(32 total checks fail when BD-1 is unresolved — listed for completeness.)_"
**What is wrong:** Counting the IDs listed in the "27 checks fail" sentence: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13 (10), 3.1, 3.2, 3.4, 3.5, 3.6, 3.7 (6), 4.3, 4.4, 4.10 (3), 5.1, 5.2, 5.7 (3), 6.6 (1), 7.1, 7.2, 7.4, 7.5, 7.7, 7.8 (6), 8.1 (1), 9.1, 9.2, 9.3 (3) = 33 IDs. The stated count of 27 does not match the 33 IDs listed. The parenthetical "32 total checks fail" adds a further different number. All three counts (27, 33, 32) disagree. Per P49, the verdict summary must state the count of individual failing check IDs, and that count must match the list.
**Correction:** Count the listed IDs accurately: 33 IDs are listed. The parenthetical "32 total checks fail" implies a slightly different count but the body of the statement gives 33. Remove the parenthetical (which is unclear) and state "33 checks fail" with the full ID list as written. If some IDs were excluded intentionally from the 27 count, the report must explain the exclusion explicitly rather than adding a parenthetical.

### Issue 2: Category 1 verdict count inconsistency
**Severity:** MEDIUM
**Check affected:** Category 1 verdict statement
**Finding in original:** "Category 1 verdict: FAIL — 9 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13"
**What is wrong:** The text states "9 checks fail" but lists 10 IDs: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13. The count and the list disagree.
**Correction:** Change "9 checks fail" to "10 checks fail."

### Issue 3: Category 7 verdict count inconsistency
**Severity:** MEDIUM
**Check affected:** Category 7 verdict statement
**Finding in original:** "Category 7 verdict: FAIL — 5 checks fail: 7.1, 7.2, 7.4, 7.5, 7.7, 7.8"
**What is wrong:** The text states "5 checks fail" but lists 6 IDs: 7.1, 7.2, 7.4, 7.5, 7.7, 7.8. The count and the list disagree.
**Correction:** Change "5 checks fail" to "6 checks fail."

### Issue 4: `purpose: guide` characterisation — P37 compliance
**Severity:** NONE — confirming correctness
**Check affected:** 1.4
**Finding in original:** "purpose: guide is not in the 15-value canonical purpose set. `guide` is a valid `pageType` value placed in the wrong field — error type (b): wrong field."
**What is wrong:** Per P37, the error characterisation must distinguish: (a) deprecated alias, (b) wrong field, (c) invalid value. The report correctly identifies this as error type (b): a valid pageType value placed in the purpose field. This matches what checks.mdx §1.4 requires. P37 is correctly applied.
**Correction:** Confirmed correct. **No change required.**

### Issue 5: `pageType: overview` characterisation — deprecated alias (P37/P50)
**Severity:** NONE — confirming correctness
**Check affected:** 1.2
**Finding in original:** "`overview` is a deprecated alias. Per Frameworks.mdx §1.1 migration table: `overview` → migrate explicitly to correct new type."
**What is wrong:** Per Frameworks.mdx §1.1 migration table, `overview` maps to "Migrate explicitly to correct new type" — it has no single canonical replacement. The check correctly identifies this as a deprecated alias (error type a per P37). Check 1.2 correctly fails because `overview` is not in the 7-type canonical schema. This is not a P50 issue because P50 applies to valid 7-type values; `overview` is not valid.
**Correction:** Confirmed correct. **No change required.**

### Issue 6: `pageVariant` handling — P42 compliance
**Severity:** NONE — confirming correctness
**Check affected:** 1.3
**Finding in original:** "1.3 | `pageVariant` valid if present | N/A | `pageVariant` is absent. Per P42, this is a co-fix dependency of check 1.2 — when `pageType` is migrated from `overview`, the appropriate `pageVariant` (if any) must be set as part of the same root cause fix. Not an independent finding."
**What is wrong:** Per P42, check 1.3 (pageVariant) is a co-fix dependency of check 1.2 when pageType is deprecated. The report correctly records this as N/A and not an independent FAIL. P42 is correctly applied.
**Correction:** Confirmed correct. **No change required.**

### Issue 7: Proposed heading fix introduces potentially avoided-tier term (P18)
**Severity:** MEDIUM
**Check affected:** F-05 (heading `## Sections`)
**Finding in original:** F-05 proposes renaming `## Sections` to `## Advanced Topics`.
**What is wrong:** Per P18 and checks.mdx §3.2, the Avoid-tier terms include `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`. "Advanced Topics" is not on the explicit banned/avoid list in checks.mdx. However, `Topics` functions as a generic structural label similar to `Details` or `Information` in that it could appear on any page. The scoring rubric for the proposed `Advanced Topics` would rate: Precision (3): "Advanced" narrows by audience level but "Topics" is generic; Depth (3): moderate signal; Stability (4): stable if section is always advanced; Clarity (4): clear; Conciseness (5): short = approximately 19/25 — below the 20/25 threshold. The proposed fix may not pass the heading score check it is meant to resolve. An alternative "Advanced Operations" (same as the section title) would score higher: Precision (5), Depth (4), Stability (5), Clarity (5), Conciseness (5) = 24/25 — but risks redundancy with the page title. The fix needs a stronger anchor.
**Correction:** F-05 should propose a stronger heading. Options: (a) Drop the heading entirely — for a `navigation` pageType page, a heading above the card group is optional if cards self-explain; (b) Use the domain concept directly: `## Section Map` (Precision 4, Depth 3, Stability 4, Clarity 4, Conciseness 5 = 20/25 — passes). Note that "Topics" in proposed heading `## Advanced Topics` may score below threshold; verify before applying.

### Issue 8: check 1.8 links `veracityStatus` required to `status: draft` inconsistency
**Severity:** LOW
**Check affected:** 1.8
**Finding in original:** "1.8 | `veracityStatus` present and honest | FAIL | Field absent entirely. Required field. `status: draft` is present, which is consistent. However, `veracityStatus` is a required field per checks.mdx §1.8."
**What is wrong:** The report notes "`status: draft` is consistent" — this is correct because checks.mdx §1.8 says `status: current` requires `veracityStatus: verified`. `status: draft` does not require `verified`. But `veracityStatus` is still a required field regardless of `status` value. The report correctly flags `veracityStatus` as absent. The note about consistency is accurate. No error.
**Correction:** Confirmed correct. **No change required.**

### Issue 9: BD-1 disposition — check report is appropriate for a dep- file
**Severity:** NONE — confirming correctness
**Check affected:** BD-1 / Overall treatment
**Finding in original:** "BD-1: This file carries a `dep-` prefix and all its linked targets are broken. Decision required: Is `dep-guide.mdx` intended to be permanently deprecated and moved to `x-deprecated/`, or does it need to be updated?"
**What is wrong:** The check correctly identifies the file as a structural orphan with a `dep-` prefix and all broken links. It escalates BD-1 as a human decision (move to x-deprecated vs revive). This is the appropriate treatment for a deprecated file — the checker does not presume to action the deprecation without human sign-off.
**Correction:** Confirmed correct. The file is genuinely an orphan (not in docs.json), all 11 links are broken, and the dep- prefix signals intended deprecation. BD-1 is correctly escalated.

### Issue 10: Proposed description fix violates description self-reference rule (check 1.11)
**Severity:** LOW
**Check affected:** F-07
**Finding in original:** F-07 proposes: `Advanced Operations covers AI pipeline setup, earnings optimisation, governance participation, monitoring, and fleet-scale operations for orchestrators past the default setup path.`
**What is wrong:** The proposed description opens with the section name "Advanced Operations covers" — this is a structural label opener ("Advanced Operations covers X") which is equivalent to the banned "This page covers X" pattern. The description should open subject-first with what the reader gains. The fix introduces a structural-label opener that would fail check 1.11 for self-reference.
**Correction:** Rework the proposed description to open with reader outcome or content: "AI pipeline setup, earnings optimisation, governance participation, fleet monitoring, and scale operations for orchestrators past the default setup path." (137 chars, subject-first, passes 1.11) — confirm before applying.

---

## Confirmed Correct Findings

1. **Orphan status:** Confirmed. `dep-guide.mdx` is not present in docs.json. All 11 internal card and table links point to non-existent paths.
2. **`pageType: overview` deprecated alias:** Correctly identified as error type (a) per P37.
3. **`purpose: guide` wrong-field error:** Correctly identified as error type (b) per P37.
4. **All 11 internal links broken:** Confirmed against docs.json — none of the paths (`/v2/orchestrators/concepts/rs-workloads`, `/v2/orchestrators/operations/rc-ai-pipelines`, etc.) appear in docs.json.
5. **`## Sections` heading (11/25) and `## Recommended entry points` (14/25):** Both below 20/25 threshold. Per-dimension breakdowns present.
6. **Missing required fields:** `complexity`, `lifecycleStage`, `industry`, `niche`, `veracityStatus` all absent. Correctly flagged as FAIL with concrete proposed values per P41 and P51.
7. **File placement in wrong directory:** `dep-guide.mdx` is in `v2/orchestrators/guides/advanced-operations/` rather than `x-deprecated/`. Correctly flagged under checks 7.7 and 7.8.
8. **Overall verdict REWRITE REQUIRED:** Appropriate for a file that is an orphan, has all links broken, deprecated pageType, invalid purpose, and 6/10 required fields missing or invalid.
9. **Category 2 PASS:** All voice/copy checks pass — correctly noted. The page has minimal body content (one intro sentence + cards) which limits exposure to voice violations.

---

## Corrected Verdict
**Rating: NEEDS REWORK**

Three count errors require correction before this report is reliable:

1. **Issue 1:** Verdict says "27 checks fail" but 33 IDs are listed. Corrected count: 33.
2. **Issue 2:** Category 1 verdict says "9 checks fail" but 10 IDs are listed. Corrected count: 10.
3. **Issue 3:** Category 7 verdict says "5 checks fail" but 6 IDs are listed. Corrected count: 6.

Additionally: Issue 7 (proposed heading fix `## Advanced Topics` may score below threshold) and Issue 10 (proposed description fix opens with structural label) should be corrected before the fix list is executed.

The core findings — orphan status, all links broken, deprecated pageType, wrong-field purpose, missing required fields — are all confirmed correct and well-evidenced. The count errors are the primary reliability concern.

**Corrected fail count:** 33 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.13, 3.1, 3.2, 3.4, 3.5, 3.6, 3.7, 4.3, 4.4, 4.10, 5.1, 5.2, 5.7, 6.6, 7.1, 7.2, 7.4, 7.5, 7.7, 7.8, 8.1, 9.1, 9.2, 9.3
