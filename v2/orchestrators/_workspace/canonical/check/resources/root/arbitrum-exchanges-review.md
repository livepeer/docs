# Critical Review — `v2/orchestrators/resources/arbitrum-exchanges.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/arbitrum-exchanges.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** Not stated

---

## Overall Rating

MOSTLY RELIABLE

---

## Corrections Required

**C-01 — Check 6.5: PASS is wrong — must be FAIL**

Original stated: `6.5 PASS — "No REVIEW flags present; the TODO block is the review tracking mechanism."`

Correction: Check 6.5 requires that any claim which cannot yet be verified has an inline `{/* REVIEW: [claim] — [what needs checking] */}` flag. The page body contains multiple unverified factual claims — bridge times (line 73), Uniswap liquidity ("Deepest liquidity", line 103), ETH gas estimate (lines 135–137), LPT active-set threshold (line 147), CEX network support (line 85) — none of which carry inline REVIEW flags. The TODO block at lines 26–48 contains the instruction "REVIEW flags are in JSX comments for a human" as an unfulfilled directive, not actual REVIEW flags on specific claims. Absence of REVIEW flags on unverified claims IS the check 6.5 failure. The check 6.5 result must be FAIL.

P-rule: checks.mdx §6.5, P61 (non-standard formats do not satisfy 6.5)
Fail count impact: +1 (6.5 added to FAIL list)

**C-02 — Category 6 verdict count: "6 checks fail" but only 5 IDs listed**

Original stated: `Category 6 verdict: FAIL — 6 checks fail: 6.1, 6.4, 6.6, 6.8, 6.9`

Correction: The stated count (6) does not match the listed IDs (5: 6.1, 6.4, 6.6, 6.8, 6.9). With C-01 applied (6.5 now FAIL), the correct verdict becomes: `Category 6 verdict: FAIL — 6 checks fail: 6.1, 6.4, 6.5, 6.6, 6.8, 6.9`. The count of 6 was stated but the supporting list was wrong. The corrected list now matches.

P-rule: P49 (verdict count must equal the count of FAIL IDs listed)
Fail count impact: Net 0 on verdict count (6 stays 6 but list gains 6.5 and loses none — the stated 6 happened to match after adding 6.5).

**C-03 — Check 5.7 FAIL: wrong check category for `status: review`**

Original stated: `5.7 FAIL — "status: review non-canonical"`

Correction: Check 5.7 tests for deprecated 12-type `pageType` values and old-schema frontmatter (e.g., `landing`, `overview` in pageType, deprecated purpose aliases). A non-canonical `status` value is not old-schema frontmatter in the check 5.7 sense. The `status: review` wrong-enum is correctly caught under check 1.8 (already FAIL). The x-guides check report (same batch) correctly marks 5.7 PASS with the reasoning: "`status: review` is a wrong-enum value (flagged in 1.8), not an old-schema remnant." Check 5.7 should be PASS here.

Consequence: removing 5.7 from FAIL list.

P-rule: P28 (result column must match detail text — the rationale for 5.7 FAIL does not align with what check 5.7 actually tests)
Fail count impact: -1 (5.7 removed from FAIL list)

**C-04 — Frontmatter Table P66 inconsistency: `status: review` marked INFO vs check 5.7 FAIL**

Original stated: Frontmatter Table row for `status` = INFO; check 5.7 result = FAIL.

Correction: These two sections must agree per P66. With C-03 applied (5.7 becomes PASS), the inconsistency partially resolves but the underlying issue remains: the Frontmatter Table uses INFO (a non-standard result state for that table), while the check table uses FAIL/PASS. The Frontmatter Table should have used FAIL for `status: review` (wrong-enum, same as x-guides) since it IS a schema error — or PASS if the view is that it belongs to 1.8 and is not a Frontmatter Table issue. The correct resolution: Frontmatter Table = FAIL (wrong-enum, per P57 logic that applies to any non-canonical status value, not only `published`); check 1.8 = FAIL (same root cause); check 5.7 = PASS (not old-schema).

P-rule: P66, P57
Fail count impact: No net change (1.8 already FAIL; 5.7 changes to PASS per C-03).

**C-05 — P84 atomicity: F-02 correctly atomic (status + veracityStatus together)**

Original stated: F-02 bundles `status: draft`, `veracityStatus: unverified`, and missing taxonomy fields (complexity, lifecycleStage, industry, niche) into one fix item.

Assessment: The P39/P84 requirement is that the `status: current → draft` change and the `veracityStatus: unverified` addition must be atomic. F-02 satisfies this: both changes are in the same fix item. No correction needed. Verified.

**C-06 — P94 gap: no Pre-Check file integrity section; no CRITICAL NAVIGATION ORPHAN header check**

This page IS in docs.json (confirmed at line 2980). P94 requires the docs.json check BEFORE Category 1, but for pages that ARE registered, no CRITICAL NAVIGATION ORPHAN header is needed. However: the report has no `## Pre-Check: File Integrity` section (P81). The docs.json check is embedded in the report header metadata rather than as a dedicated Pre-Check step. This is a structural gap but does not affect findings on this page since the registration is confirmed.

P-rule: P81, P94
Fail count impact: 0 (informational)

**C-07 — F-05 rename: "Related Reference" for `## See Also`**

Original proposed: `## See Also` → `## Related Reference`

Assessment: Per P55, `## Related` is OK-tier. "Related Reference" uses "Related" (OK-tier) + "Reference" (not banned). No banned terms introduced. P75 check passes. However, the rename suggestion for "How Much Do You Need?" → "Token Requirements" is also valid: "Requirements" is not in the Avoid or Banned tier per checks.mdx §4.1 (Avoid list: Overview, Details, Information, Introduction, Summary, Options, Background, Next Steps, Further Reading — Requirements is absent). F-05 is valid.

---

## Corrected Fail Count

**Original report fail count:** 22
**Adjustments:** +1 addition (6.5), -1 removal (5.7)
**Corrected fail count:** 22
**Corrected FAIL IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.2, 3.1, 3.2, 3.7, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 8.6, 9.1, 9.3, 9.4, 9.6

---

## New Findings (P90–P96 gaps)

**P90:** Not applicable. `status: review` is a non-canonical value but is not `status: published`. The P90 rule targets the specific `published` wrong-enum. `review` is a different wrong-enum — caught correctly under check 1.8 as absent/non-canonical. No P90 issue.

**P91:** Source page uses StyledTable, Card, CardGroup, Warning, Note, CustomDivider. No Accordion or Tabs components. P91 requires scanning Accordion bodies and Tab content, but these are not present. Table cell content was scanned in the Banned Construction Scan table. P91 gap is minimal for this page.

**P92:** `purpose: reference` — valid. P92 targets `purpose: guide` wrong-field error. Not applicable here.

**P93:** No content contradictions were flagged. The Warning block at lines 120–122 (scam tokens) was read correctly in the check. P93 not triggered.

**P94:** Page IS in docs.json (line 2980). CRITICAL NAVIGATION ORPHAN header not required. However, the report has no `## Pre-Check: File Integrity` section (P81 gap). This does not change any finding on this registered page, but the structural step was skipped.

**P95:** No content overlap with sibling pages identified that would require a Blocking Decision. The `x-contract-addresses` and `arbitrum-rpc` linked from the See Also section have distinct scope. No P95 trigger.

**P96:** Source heading scan for known-failing patterns: `## How Much Do You Need?` — correctly caught and scored 14/25. `## See Also` — correctly caught as Banned-tier. `## ETH on Arbitrum`, `## LPT on Arbitrum`, `## Getting ETH to Arbitrum`, `## Acquiring LPT`, `## LPT Contract Address (Arbitrum One)` — none are known-failing patterns. P96 patterns `## Overview`, `## Introduction`, `## Summary`, `## Next steps`, `## What happened` — not present. P96 fully covered.

---

## Proposed Learnings

No new patterns identified. C-03 (status: review wrong-enum belongs in check 1.8, not check 5.7) is already covered by the x-guides batch comparison. It would be worth adding an explicit note in the next batch prompt: "Non-canonical `status` values (review, published, etc.) are wrong-enum errors for check 1.8. Check 5.7 covers deprecated 12-type pageType values and deprecated purpose aliases only. Do not fail check 5.7 for status field issues."
