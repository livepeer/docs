# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/ai-and-job-workloads/workload-options.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: Duplicate check 2.2 and 2.8 rows — self-correction visible in report but not resolved cleanly
**Severity:** MEDIUM
**Check affected:** 2.2, 2.8 (P28)
**Finding in original:** Check 2.2 appears twice — first as FAIL, then immediately corrected to PASS. Check 2.8 appears twice — first as FAIL with "Line 118: not prohibited. However line 86: 'key insight' — BORDERLINE at best, not a clear violation. No prohibited phrases found", then immediately corrected to PASS.
**What is wrong:** Per P28, the result column must match the detail text conclusion. When the checker self-corrects, the first entry (FAIL) must be removed entirely. Leaving both rows in the report creates a contradiction that an executing agent would act on — it would see a FAIL row for check 2.2 and potentially act on it. The final table must contain only one row per check ID, showing the final determination. This is the P28 / P17 self-consistency violation pattern documented in Batch 3 learnings.
**Correction:** Remove the first FAIL row for check 2.2 and the first FAIL row for check 2.8. The table must show only the final PASS row for each. The corrected category 2 table has no FAIL rows.

---

### Issue 2: Check 2.4 FAIL — detail does not identify actual banned-construction violations
**Severity:** HIGH
**Check affected:** 2.4 (P28, P46)
**Finding in original:** Check 2.4: "FAIL — See Banned Construction Scan. Multiple `can [verb]` candidates and one `if [condition]` construction identified"
**What is wrong:** The result says FAIL and references the Banned Construction Scan. However, the Banned Construction Scan table does not surface any confirmed `can [verb]` value claims or `if [condition]` body prose violations. The flagged items are: F-08 (self-referential opener "Use this page" — BORDERLINE), F-09 (inline hyphens as dashes — BORDERLINE), F-10–F-13 (em-dashes in Accordion titles and description), F-14 (em-dash in heading). None of these are banned-construction violations under check 2.4. Em-dashes are a P30 concern. "Use this page" is a `This page [verb]`-adjacent construction — that IS a banned construction under check 2.4. But the report labels it BORDERLINE and does not confirm it as a FAIL.

Re-examining: "Use this page to compare the workload types, understand their routing logic, and choose the setup path that fits your hardware." (line 38). CLAUDE.md bans `This page [verb]` — the construction "Use this page" is functionally identical ("Use this page" = self-referential page-as-subject opener). This should be a confirmed check 2.4 FAIL, not BORDERLINE.

However, the check 2.4 result of FAIL is correct in outcome, but the rationale should be grounded in the confirmed "Use this page" construction, not the vague "multiple `can [verb]` candidates" that are not shown in the scan.
**Correction:** Check 2.4 detail should read: "FAIL — Line 38: 'Use this page to compare the workload types…' — `Use this page` is a self-referential opener (`This page [verb]` pattern). Fix F-08 as specified. Em-dash violations are logged in Banned Construction Scan but are a P30 concern, not check 2.4." The result (FAIL) is correct. The rationale needs to cite the confirmed violation, not unspecified `can [verb]` candidates that do not appear in the scan.

---

### Issue 3: `status: published` — non-canonical value not flagged under check 1.2
**Severity:** HIGH
**Check affected:** 1.2 (P39, task brief)
**Finding in original:** Check 1.2: "PASS — `concept` is canonical"
**What is wrong:** `pageType: concept` is correctly passed. However, `status: published` is present in the frontmatter (confirmed in source file read: `status: published`). Per the task brief: "Valid values for `status` are `current` and `draft`. If a page uses `status: published`, that is an invalid value and should be flagged under check 1.2 or 1.8." The report logs `status: published` only as INFO in the Frontmatter Table and does not flag it as an invalid-value error under any FAIL check. This is a missing FAIL.
**Correction:** Add to check 1.2 or log as an additional sub-finding under check 1.8: "`status: published` is a non-canonical status value (P37 type c: invalid value — not in valid set `current`/`draft`). Fix: change to `status: draft`." This adds one check to the FAIL count.

---

### Issue 4: `Options` in title — flagged under check 3.6 as FAIL, but `Options` is Avoid-tier not Banned-tier
**Severity:** LOW (INFO)
**Check affected:** 3.6
**Finding in original:** Check 3.6: "FAIL — 'Workload Options' — `Options` is in the Avoid list per Frameworks.mdx §4.1. Proposed: `Workload Types` or `Job Types` — confirm before applying"
**What is wrong:** This is debatable but the report's finding is defensible. Frameworks.mdx §4.1 confirmed: `Options` is in the Avoid tier ("Use only when no stronger descriptor exists"), and `Types` is in the OK tier. Check 3.6 states: "1–3 words, concept-derived, no banned forms." The title is 2 words and concept-derived. Avoid-tier terms are not Banned — using them is discouraged but not an automatic violation. The report flags this as FAIL, which is a strict reading. A more precise application of the rules would be: the title uses an Avoid-tier term in the standalone position, which is a check 3.2 concern (not 3.6). Check 3.6 evaluates title formation rules. However, the checks.mdx 3.2 language includes "Avoid" terms in its scope, and failing 3.6 for this reason is within the checker's discretion. The finding and proposed fix are well-formed. No action required — but the severity is closer to MEDIUM than a hard FAIL that blocks publication.
**Correction:** No change required. The finding is defensible. Note that `Options` is Avoid-tier (not Banned), so this is not a blocking issue.

---

### Issue 5: Heading rename "Workload Comparison" proposed for "At a glance" — `Comparison` not in prohibited list
**Severity:** INFO
**Check affected:** P18 compliance for rename suggestion
**Finding in original:** "Proposed: `Workload Comparison` — confirm before applying. P18 check: `Comparison` is not in the prohibited-term list for rename suggestions"
**What is wrong:** The report correctly applies P18 — it checks that the proposed rename does not introduce a banned term and explicitly notes `Comparison` is not prohibited. The rename is also checked against P38: no other heading on the page is named "Workload Comparison" or similar. This is handled correctly.
**Correction:** No correction needed.

---

### Issue 6: VRAM inconsistency (F-07) — Cascade discrepancy correctly identified but line citations for source files not provided
**Severity:** MEDIUM
**Check affected:** 6.4 (P29)
**Finding in original:** "Line 69: '8 GB+' for Cascade VRAM minimum — table row says '8 GB+ (model-dependent)'. But later in 'What should I run?' section, Cascade appears in the 16 GB tier and 24 GB recommendation. VRAM figure for Cascade is inconsistent within the page. In ai-inference-operations.mdx, Cascade recommended VRAM is 24 GB."
**What is wrong:** The finding is substantively correct — there is a real VRAM inconsistency for Cascade on the page. However, per P29, every cited occurrence must be verified against the actual file. The report references "Line 69" for the 8 GB claim and "ai-inference-operations.mdx" for the 24 GB recommendation without citing specific line numbers in that file. The internal page inconsistency is the primary finding; the cross-page reference to ai-inference-operations.mdx is a supporting context. For the check report purpose, verifying the internal inconsistency (page cites 8 GB+ in the table, then places Cascade in the 16 GB tier in the accordion) is sufficient. The cross-page claim about "24 GB recommended" in ai-inference-operations is secondary context and does not require line citation if not making it a primary finding.
**Correction:** No substantive change needed. The finding is real. If the checker intended the cross-page reference as a FAIL finding, it should cite the specific line in ai-inference-operations.mdx where 24 GB is stated (confirmed: ai-inference-operations.mdx, the Accordion for image-to-video at line 215 states "Minimum VRAM: 24 GB" for that pipeline, but Cascade-specific VRAM is a separate figure). Flag for SME confirmation remains appropriate.

---

### Issue 7: Check 7.8 FAIL — filename `workload-options` is not a naming-convention violation
**Severity:** MEDIUM
**Check affected:** 7.8 (P35)
**Finding in original:** Check 7.8: "FAIL — REVIEW comment (line 304) notes planned rename from `job-types` — current file is `workload-options`. File is correctly named as-is; the note is editorial. However, `Options` in title/filename hits the Avoid list (check 3.6). Rename to `workload-types` pending check 3.6 decision"
**What is wrong:** Check 7.8 tests file naming conventions: "Prefixes used correctly: `s-` (setup), `r-` (reference), `rs-` (ref+setup), `rcs-` (ref+config+setup), `x-` (deprecated), `dep-` (deprecated). No `-index.mdx` suffix." The file `workload-options.mdx` has no incorrect prefix and no `-index` suffix. The check 7.8 pass criteria does not include "filename must not use Avoid-tier terms." The `Options` avoidance concern is a title/heading issue (check 3.6), not a naming-convention issue (check 7.8). Per P35, findings must evaluate the current state against the actual check criteria. Check 7.8 should be PASS.
**Correction:** Change check 7.8 to PASS. Retain the note about the editorial rename discussion (if desired) as an INFO note, not a FAIL. Remove 7.8 from the failing check list. Update the verdict count.

---

### Issue 8: Verdict count includes 7.8 — needs correction
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "Failing checks: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.6, 3.7, 6.1, 6.4, 6.6, 6.9, 7.8, 9.1, 9.3 — 19 checks fail."
**What is wrong:** Three changes apply: (a) 7.8 should be removed (Issue 7 above); (b) `status: published` as invalid value should add a new failure to check 1.2 (Issue 3 above); (c) duplicate check 2.2 and 2.8 rows are a formatting issue, not a count issue — PASS does not add to the count. The check 2.4 FAIL remains valid (Issue 2 — "Use this page" is a confirmed banned construction). Net: remove 7.8 (−1), add 1.2 as an additional FAIL dimension. If the `status: published` flag is captured as a sub-dimension of existing 1.2 PASS → convert 1.2 to FAIL (net +1). Result: 19 − 1 + 1 = 19 (no net change to count, but 7.8 exits and 1.2 enters).

However: check 1.2 was PASS for `pageType: concept`. Adding `status: published` as a 1.2 violation would be non-standard — `status` is not part of the pageType schema check. More correctly, `status: published` is a check 1.8 sub-dimension (the 1.8 FAIL is already in the list). The `published` value is already captured implicitly within 1.8's "fix requires decision" language. In this case: remove 7.8, 19 − 1 = 18 checks fail. But flagging `status: published` as an explicit additional violation adds to the report's completeness.
**Correction:** Remove 7.8 from the failing list. Add explicit flag for `status: published` invalid value within check 1.8 (already FAIL). Final count: 18 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.6, 3.7, 6.1, 6.4, 6.6, 6.9, 9.1, 9.3

---

## Confirmed Correct Findings

- **P15**: `purpose: explain` and `pageType: concept` read directly from source frontmatter. Confirmed in source file read.
- **P41**: `industry` and `niche` flagged as FAIL with concrete proposed values. Correct.
- **P51**: All proposed values formatted "Proposed: `field: value` — confirm before applying." Clean.
- **P50**: `pageType: concept` correctly passed check 1.2. Valid 7-type canonical value.
- **P30**: Em-dash prohibition applied to frontmatter description (F-13), Accordion title props (F-10, F-11, F-12), and heading (F-14). All correctly identified.
- **P20/P30**: AccordionGroup title props scanned for em-dashes — all four Accordion titles (lines 233, 242, 254, 265) explicitly listed in scan. Correct scope.
- **P53**: No incorrect heading exemptions. `Related Pages` is correctly exempted (listed in Heading Score Table note). No other heading exempted.
- **P28**: Final PASS/FAIL result rows (after the self-correction issue) match detail conclusions.
- **P33**: All 7 internal links verified against docs.json with specific line citations. Full path verification performed. No false positives.
- **P39**: `status: published` + missing `veracityStatus` correctly identified as incoherent. Fix options stated correctly per P39.
- **P44**: Proposed fixes for F-08 through F-13 checked — none introduce em-dashes or banned words. F-10 through F-12 propose colon replacement; F-08 proposes removal of self-referential sentence.
- **P45**: One canonical fix per finding. No conflicting fixes across sections.
- **P43**: Finding IDs F-07 through F-14 are unique and sequential within this report.
- **P49**: Check IDs listed explicitly (count error addressed in Issue 8 above).
- **P18**: Rename suggestions checked — "Workload Comparison", "Routing Mechanics", "Hardware Selection", "Workload Setup Paths" — none introduce terms from the prohibited list.
- **P38**: "Hardware Selection" rename for "What should I run?" — no existing heading named "Hardware Selection" on this page. Clean.
- **P52**: Blocking decision section correctly states "Decision: Rename title/filename" with equal options [A] and [B]. No pre-emption of the outcome in INFO rows.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — Three substantive issues: (1) duplicate check rows create result ambiguity; (2) check 2.4 FAIL rationale references unspecified `can [verb]` candidates not shown in the scan (though "Use this page" is a valid confirmed FAIL basis); (3) check 7.8 incorrectly FAIL for an Avoid-tier title term when the check tests naming conventions only. `status: published` as invalid value is a missing flag (captured within 1.8 but not explicitly characterised as invalid-value). Core content findings are correct.

**Corrected fail count:** 18 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.6, 3.7, 6.1, 6.4, 6.6, 6.9, 9.1, 9.3
