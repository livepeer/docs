# Critical Review — `v2/orchestrators/resources/technical/x-troubleshooting.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/technical/x-troubleshooting.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** P1–P90 (stated in report header)

---

## Overall Rating

MOSTLY RELIABLE

---

## Corrections Required

### Correction 1 — Check 5.7: `purpose: landing` classification error (P37, P67)

**Check ID affected:** 5.7
**Original statement:** Check 5.7 FAIL: "`pageType: landing` and `purpose: landing` are both deprecated/invalid schema values."
**Correction:** `pageType: landing` IS an old-schema value (it was valid in the deprecated 12-type schema) — check 5.7 FAIL is correct for `pageType: landing`. However, `purpose: landing` was never a valid purpose value in any schema version — the 15-value canonical set and no prior schema version includes `landing` as a purpose value. It is an invalid value (P37c), not a deprecated alias (P37a). The distinction matters for check 5.7: check 5.7 catches deprecated aliases from the prior schema. `purpose: landing` is not an old alias — it is an erroneous value that maps to the `pageType` concept rather than any purpose concept.

The practical effect: check 5.7 correctly FAILs on `pageType: landing` (a genuine old-schema value). The `purpose: landing` failure belongs in check 1.4 only. The check report conflates both under check 5.7. The FAIL result for check 5.7 stands — because `pageType: landing` alone is sufficient to FAIL it — but the rationale must be corrected: "`pageType: landing` is a deprecated old-schema value (check 5.7 FAIL). `purpose: landing` is an invalid value with no schema history — captured by check 1.4 only."

No FAIL count change; rationale correction only.
**P-rule:** P37, P67
**Fail count impact:** 0

---

### Correction 2 — P84/P39 atomic fix: not applicable but correctly identified as non-applicable

**Check ID affected:** F-08
**Original statement:** F-08: "Add `veracityStatus: unverified` to frontmatter (atomic fix — `status` is already `draft`, no P39 incoherence)." The "Note on P39" in the Frontmatter Table confirms: `status: draft` with absent `veracityStatus` is NOT a P39 violation.
**Correction:** Correct. The check agent correctly identifies that P39 governs `status: current` only. `status: draft` + absent `veracityStatus` requires only adding `veracityStatus: unverified` — this is NOT an atomic P84 fix situation. The fix is correct and isolated. No correction needed.
**P-rule:** P84, P39
**Fail count impact:** 0

---

### Correction 3 — Check 9.1 mischaracterisation in Fix List (F-14)

**Check ID affected:** 9.1, F-14
**Original statement:** F-14: "INFO — Page requires human sign-off before status can move beyond draft placeholder." Check 9.1 FAIL: "No sign-off — empty draft placeholder, never reviewed."
**Correction:** Check 9.1 is a confirmed FAIL in the check table and correctly appears in the FAIL list. The corresponding fix F-14 is correctly marked INFO severity — this is appropriate because it requires human action, not an agent-executable fix. However, F-14 is the correct fix for check 9.1. The issue: check 9.1 is in the FAIL list (check table) and in the verdict FAIL IDs, which is correct. No correction needed on the check 9.1 evaluation. F-14 as INFO is appropriate — P65 requires every fix list entry to have a concrete, executable fix; "requires human sign-off" is a valid human-action fix that cannot be automated. No issue here.
**P-rule:** P65
**Fail count impact:** 0

---

### Correction 4 — Verdict count arithmetic verification (P49)

**Original statement:** "Total FAIL count: 20 / FAIL check IDs: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 4.1, 4.2, 4.4, 5.1, 5.2, 5.7, 8.4, 9.1"
**Verification:** Count from category verdicts:
- Cat 1: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13 = 11
- Cat 2: 2.4 = 1
- Cat 3: none (PASS)
- Cat 4: 4.1, 4.2, 4.4 = 3
- Cat 5: 5.1, 5.2, 5.7 = 3
- Cat 6: 6.6 logged once per P13 (shares root with 1.8, cross-referenced to F-08) — not double-counted; not in FAIL list
- Cat 7: none (PASS)
- Cat 8: 8.4 = 1
- Cat 9: 9.1 = 1

Total: 11+1+3+3+1+1 = 20. Arithmetic verified correct.
**P-rule:** P49
**Fail count impact:** 0

---

### Correction 5 — P94: Pre-check section present and correctly structured

**Check ID affected:** Report header
**Original statement:** "Pre-Check: File Integrity" section reads lines 1–10 and confirms no corrupt prefix, confirms empty body, confirms `x-` prefix is not in docs.json.
**Correction:** P81 and P94 compliance is correct. The pre-check section exists, documents the file integrity finding, and confirms nav status before Category 1 analysis. This is the same correct pattern as x-support-status — better than cli-flags and x-changelog in this batch.
**P-rule:** P81, P94
**Fail count impact:** 0

---

### Correction 6 — P87: `pageType: landing` migration treatment

**Check ID affected:** 1.2
**Original statement:** "Migration: `pageType: instruction` + `pageVariant: troubleshooting` (co-fix per P42) — confirm before applying. Note in parentheses: `(P87 does not apply — 'landing' has a migration path unlike 'overview')`."
**Correction:** The check agent is correct to distinguish `landing` from `overview`. P87 applies to `pageType: overview` (type-confusion, no migration path). `pageType: landing` is a deprecated alias with a migration path. The report correctly notes this distinction. However, the §1.1 migration table does not explicitly map `landing` → `instruction` + `troubleshooting` — this is an editorial inference based on the page's intended content (troubleshooting). The fix is framed as "confirm before applying" per P51. This is correctly handled.
**P-rule:** P87, P51
**Fail count impact:** 0

---

## Corrected Fail Count

**Original stated:** 20
**Adjustments:** 0
**Corrected:** 20

**Corrected FAIL IDs:** 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.4, 4.1, 4.2, 4.4, 5.1, 5.2, 5.7, 8.4, 9.1

---

## New Findings (P90–P96 gaps)

### NF-1 — P91: component content scan N/A — correctly documented

No components present. The report does not explicitly cite P91 but marks all component-related checks as N/A. Substantively correct.

### NF-2 — P96 heading scan: no headings, N/A correctly handled

No H2/H3 headings — P96 scan is trivially N/A. The report marks all heading checks N/A except 3.6 and 3.7 (title-level checks). Title `Troubleshooting` passes 3.6 and 3.7. Correct.

### NF-3 — Check 6.3 N/A but not explicitly cited as deprecated-API check

Same systematic pattern as the other reports in this batch. Check 6.3 per checks.mdx is "No deprecated API usage." The report marks it N/A with "No API references." For an empty page, N/A is correct — but the reasoning should state "no CLI flags, API endpoints, or SDK methods present" rather than the vague "No API references." Minor framing issue; result is correct.

### NF-4 — BD-2 (IA placement) should reference the existing monitors/troubleshooting guide

The report flags BD-2: "IA placement if activated — Option A: Keep in Technical Reference subgroup under Resources / Option B: Move to a dedicated section in Guides." Per the check framework, BD options should not include recommendations (P68). The options are neutrally stated here — this is compliant. However, there is a relevant context item the BD section could surface: `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx` already exists in the orchestrators guide as an active troubleshooting page. If `x-troubleshooting.mdx` is ever activated, there is a content overlap risk with the existing guide (P95 would apply — content overlap between sibling pages is a BD, not a MEDIUM finding). The check report does not surface this. This is a missed P95 finding.

The activation BD should note: "If activating, check content overlap with existing `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx` — per P95, overlap requires a human merge/deprecate/distinguish decision before both pages can be active."

### NF-5 — SVG OG image pattern: cross-page joint note missing (P88 spirit)

Both x-troubleshooting and x-contract-addresses use `/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg` as their OG image. The check reports flag this independently. Per P88's spirit (joint verification for shared issues), a cross-page note would group the fix. The x-troubleshooting check does note "same issue as `x-contract-addresses.mdx`" in check 8.4 — this is a good cross-reference. Correctly handled.

### NF-6 — F-13 (INFO) references checks 7.3 and 9.3 incorrectly

**F-13:** "INFO — Resolve BD-2 before adding to docs.json: confirm IA placement in Technical Reference vs Guides section." This is linked to "Check(s): 7.3, 9.3."

Check 7.3 per checks.mdx is "Tab entry portal routes to all sections." This is a section-level check that is N/A for a non-nav file — it is incorrectly cited as the basis for F-13. Check 9.3 per checks.mdx is "Gate prerequisites met" — the report marked this as INFO ("x-prefixed pages are not subject to standard gate sequencing"), not FAIL. Citing a PASS/INFO check as the basis for a fix list entry is a P65 issue (fix list entries must be anchored to FAIL checks). F-13 should be anchored to the BD-2 blocking decision and to check 7.1 (not in docs.json) as the eventual resolution target, not to checks 7.3 and 9.3.

This is a minor fix-list traceability issue that does not affect remediation correctness.

---

## Proposed Learnings

**NEW-P101: When an empty stub (`x-`-prefixed, draft) is being assessed for potential activation, check whether an active page with overlapping scope already exists in the tab before writing the blocking decision. If a scope-equivalent active page exists, the BD must include content overlap assessment per P95 and cite the existing page by path. A BD that ignores an existing sibling page may create a duplicate-content decision after activation.**
