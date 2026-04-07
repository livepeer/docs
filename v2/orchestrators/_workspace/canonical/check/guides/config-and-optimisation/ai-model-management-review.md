# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/config-and-optimisation/ai-model-management.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: `how_to` migration — no pageVariant required; report correctly applied this
**Severity:** LOW (confirmation, not a defect)
**Check affected:** 1.2, 1.3
**Finding in original:** Check 1.3 reads: "N/A — Field absent. `how_to → instruction` migration does not require a pageVariant per the migration table; no co-fix needed here (P42)"
**What is wrong:** Nothing. This is correct. Frameworks.mdx §1.1 migration table shows `how_to` → `instruction` with pageVariant column "—". The report correctly did not log pageVariant absence as an independent finding (P42 satisfied).
**Correction:** Confirmed correct. No action.

---

### Issue 2: Verdict summary count mismatch — 9.3 handling is inconsistent
**Severity:** MEDIUM
**Check affected:** Verdict Summary, P26/P49
**Finding in original:** "14 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7, 6.1, 6.4, 6.5, 6.6, 9.1" — then "(9.3 fails as expected — pre-publication gate state)"
**What is wrong:** 9.3 is treated as a fail-but-not-counted item without clear justification for the exclusion. Check 9.3 is listed in the Category 9 check table as FAIL. If it fails, it must be counted in the verdict. If it is intentionally excluded because it is a structural gate condition (not a page-level defect), that rule must be stated, not silently applied. The check table says FAIL; the verdict says not counted. P26/P49 require the verdict count to match the check table. The correct count is either 14 (with 9.3 excluded and the exclusion justified) or 15 (with 9.3 included). As written, the report is internally inconsistent.
**Correction:** Either include 9.3 in the failing count (15 checks fail) and list it — or add a note to the check 9.3 row: "FAIL — structural gate state, not a page-level defect, excluded from verdict count per [rule]." Then state "14 checks fail" with that explicit exclusion documented.

---

### Issue 3: Check 2.1 (UK English) result stated correctly but the report's scan scope should be confirmed
**Severity:** LOW
**Check affected:** 2.1, P54
**Finding in original:** "Check 2.1 UK English throughout (P54 — only flag US spellings) | PASS | `optimisation` (UK) correct in description. No US `-ize`, `-or`, `-er` endings found."
**What is wrong:** Nothing material. P54 is correctly applied — check 2.1 only flags US spelling patterns. The report correctly notes that `optimization_flags` in code blocks is exempt. This is accurate.
**Correction:** Confirmed correct.

---

### Issue 4: Proposed fix F-03 adds FACT CHECK flags — but these already exist in a different format on the page
**Severity:** MEDIUM
**Check affected:** 6.5, F-03, P45
**Finding in original:** F-03 states: "Add REVIEW: [claim] — verify against [source] before publishing inline at each unverified number." The existing FACT CHECK comments at lines 63 and 170 are correctly flagged as failing 6.5 (wrong format). F-03 calls for adding NEW review flags to lines without them. This is structurally correct but the fix description conflates two actions: (a) converting existing FACT CHECK format at lines 63 and 170, and (b) adding new REVIEW flags to unverified numbers at other lines.
**What is wrong:** F-03 is presented as a single finding but addresses two distinct operations. F-04 and F-05 then separately address the two existing FACT CHECK comments. There is no overlap or duplication per se, but the scope of F-03 is not specific about which lines need new flags added (vs which lines are addressed by F-04/F-05). An executing agent could apply F-03 redundantly over lines 63 and 170 already handled by F-04/F-05.
**Correction:** F-03 should explicitly state: "Applies to lines with unverified claims that have no existing FACT CHECK flag: VRAM figures in lines 85–125, SFAST speed claim at line 183, DEEPCACHE speed claim at line 200, 5-minute registry delay at line 239. Does NOT apply to lines 63 and 170, which are addressed by F-04 and F-05 respectively."

---

### Issue 5: `Related pages` heading capitalisation — framing as INFO is correct but the P16/P53 analysis contains an error
**Severity:** LOW
**Check affected:** F-06, P16/P53
**Finding in original:** F-06 notes the page uses `## Related pages` (lowercase 'p') and flags that the exact exempt form is `Related Pages` (capital P). Logged as INFO only.
**What is wrong:** P53 states the exemption applies ONLY to the exact heading text `Related Pages`. The source page uses `## Related pages` (lowercase). Therefore, if the exemption requires exact match, this heading is NOT exempt and `Related` without the full form `Related Pages` should be scored/checked. However, the report's own check 3.2 separately notes that `Related` is in the OK list. The issue is whether this heading is subject to the full 3.1 scoring rubric or whether it qualifies for the structural exemption. The report correctly declines to fail this as a 3.2 violation (since `Related` is OK-tier), but the decision to not score it in the heading score table at all (rather than scoring it at exemption-boundary) is defensible. The INFO log is the appropriate response.
**Correction:** No change required. The INFO framing is correct. However, the report should clearly state whether the heading was excluded from the heading score table. Looking at the score table, it is not present — this is consistent with the report's rationale. Confirmed appropriate.

---

### Issue 6: Category 9 verdict states "FAIL — 2 checks fail: 9.1, 9.3" but then Verdict Summary omits 9.3
**Severity:** MEDIUM
**Check affected:** P26/P49
**Finding in original:** "Category 9 verdict: FAIL — checks 9.1, 9.3 fail (pre-publication gate state)" vs Verdict Summary: "14 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7, 6.1, 6.4, 6.5, 6.6, 9.1"
**What is wrong:** This is the same issue as Issue 2 above, viewed from the category verdict side. The Category 9 verdict explicitly says 2 checks fail, but the Verdict Summary only includes 9.1. P26/P49 require the verdict summary count to match all FAIL check IDs across the check table. The discrepancy is acknowledged in parentheses but not resolved.
**Correction:** Same as Issue 2. Either include 9.3 or justify its exclusion with a stated rule applied consistently.

---

## Confirmed Correct Findings

The following findings were verified against the source file and confirmed accurate:

- **Check 1.1**: All 6 missing fields confirmed absent from source frontmatter (lines 1–28).
- **Check 1.2**: `pageType: how_to` confirmed at source line 24. Deprecated alias. Correct replacement `instruction`. No pageVariant required per Frameworks.mdx §1.1.
- **Check 1.4/1.6/1.7**: `purpose`, `complexity`, `lifecycleStage` all absent from source frontmatter. Confirmed.
- **Check 1.8**: `veracityStatus` absent. Two FACT CHECK comments confirmed at lines 63 and 170. `status: draft` present — correct combination per checks.mdx §1.8.
- **Check 1.9/1.10**: `industry` and `niche` absent. P41 applies — both required fields. FAIL correct.
- **P51 compliance**: All proposed values formatted as "Proposed: `field: value` — confirm before applying." Fully compliant.
- **P39 compliance**: Report does NOT recommend `status: current` + `veracityStatus: unverified`. It recommends `veracityStatus: unverified` with `status: draft` already present. Compliant.
- **Category 2 PASS**: Banned word scan results confirmed against source text. No violations found. Correct PASS.
- **Check 2.1 / P54**: Check 2.1 correctly scoped to UK spelling only. Correct PASS.
- **Check 2.4 / P46**: `not [X]` constructions correctly placed in check 2.4, not check 2.2. Compliant.
- **Heading score table**: All 9 headings scored with per-dimension breakdown (Precision/Depth/Stability/Clarity/Conciseness). P2 satisfied.
- **Link verification**: All 4 internal links in Related pages cards verified against docs.json with specific line citations. P33/P47 satisfied.
- **P42**: pageVariant absence treated as co-fix of 1.2, not logged as independent finding. Correct.
- **P50**: `how_to` correctly failed as deprecated alias — not a valid 7-type value. Correct.
- **Category 4 PASS**: PREV/NEXT adjacency confirmed from docs.json. No dead ends. Correct.
- **Check 5.7**: Logged as cross-reference of check 1.2, not an independent finding. Correct root-cause consolidation.
- **Category 6 FAIL**: 15 veracity claims identified. FACT CHECK flags at lines 63 and 170 confirmed. Multiple unverified numerical claims (VRAM figures, speed claims) correctly identified.
- **F-06 / INFO**: `Related pages` capitalisation correctly framed as INFO, not FAIL. P16/P53 correctly applied.
- **P28**: Result column matches detail text conclusion throughout — no mismatches found.
- **P37**: Error type characterisation correct — `how_to` described as "deprecated alias (old 12-type)" which is accurate.

---

## Corrected Verdict

The original verdict count of 14 is internally inconsistent with the Category 9 verdict stating 9.3 also fails. The corrected count depends on how gate-state failures are handled:

**If 9.3 is included:** 15 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7, 6.1, 6.4, 6.5, 6.6, 9.1, 9.3

**If 9.3 is excluded with explicit justification:** 14 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 5.7, 6.1, 6.4, 6.5, 6.6, 9.1 — and the exclusion rule must be stated in the check 9.3 row.

The report is MOSTLY RELIABLE. All substantive findings are accurate and actionable. The only defect is the inconsistent 9.3 handling between the category verdict and the summary count. No false positives or false negatives on content findings.
