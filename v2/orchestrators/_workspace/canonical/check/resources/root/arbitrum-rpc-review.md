# Critical Review — `v2/orchestrators/resources/arbitrum-rpc.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/arbitrum-rpc.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** Not stated

---

## Overall Rating

MOSTLY RELIABLE

---

## Corrections Required

**C-01 — Check 6.5: PASS is wrong — must be FAIL**

Original stated: `6.5 PASS — "No REVIEW flags present; the TODO block is the review tracking mechanism."`

Correction: Check 6.5 requires that any claim which cannot yet be verified has an inline `{/* REVIEW: [claim] — [what needs checking] */}` flag. The provider table contains specific unverified numeric claims — Alchemy 300 CU/s (line 78), Infura 100k req/day (line 84), Chainstack 25 req/s (line 102), Infura Arbitrum add-on requirement (line 85) — none of which carry inline REVIEW flags. These are HIGH-staleness provider-pricing figures. The TODO block at lines 25–47 contains the instruction "REVIEW flags are in JSX comments for a human" as an unfulfilled directive, not actual REVIEW flags on specific claims. Absence of inline REVIEW flags on the specific provider rate-limit cells IS the check 6.5 failure. Result must be FAIL.

P-rule: checks.mdx §6.5, P61
Fail count impact: +1 (6.5 added to FAIL list)

**C-02 — Category 6 verdict count: "6 checks fail" but only 5 IDs listed**

Original stated: `Category 6 verdict: FAIL — 6 checks fail: 6.1, 6.4, 6.6, 6.8, 6.9`

Correction: The stated count (6) does not match the listed IDs (5). With C-01 applied (6.5 now FAIL), the corrected verdict is: `Category 6 verdict: FAIL — 6 checks fail: 6.1, 6.4, 6.5, 6.6, 6.8, 6.9`. The count of 6 now matches the 6 IDs.

P-rule: P49
Fail count impact: Net 0 (count stays 6 but list is corrected by adding 6.5).

**C-03 — Check 5.7 FAIL: wrong check category for `status: review`**

Original stated: `5.7 FAIL — "status: review non-canonical"`

Correction: Check 5.7 tests for deprecated 12-type `pageType` values and old-schema frontmatter. A non-canonical `status` value is not old-schema frontmatter in the check 5.7 sense. The x-guides check report (same batch, consistent with P28) correctly marks 5.7 PASS with reasoning: "`status: review` is a wrong-enum value (flagged in 1.8), not an old-schema remnant." Check 5.7 should be PASS. The `status: review` wrong-enum is already caught at check 1.8 (FAIL) and in the Frontmatter Table.

P-rule: P28
Fail count impact: -1 (5.7 removed from FAIL list)

**C-04 — Frontmatter Table P66 inconsistency: `status: review` = INFO vs check 5.7 = FAIL**

Original stated: Frontmatter Table marks `status: review` as INFO; check 5.7 marks FAIL.

Correction: Per P66, both sections must agree on pass/fail for every field. With C-03 applied (5.7 → PASS), the check table now aligns with the INFO/non-FAIL treatment of `status: review` in the Frontmatter Table. However, the correct treatment per P57 is that any non-canonical status value is a wrong-enum error and should be FAIL in the Frontmatter Table (not INFO). The Frontmatter Table should use FAIL for `status: review`, check 1.8 retains FAIL, and check 5.7 is PASS. The INFO designation in the Frontmatter Table is a downgrade that obscures a schema error.

P-rule: P57, P66
Fail count impact: 0 (1.8 already FAIL; the issue is severity framing in the Frontmatter Table row).

**C-05 — Check 3.2: "Requirements" and "Configuration" incorrectly characterised as Avoid-tier**

Original stated: `3.2 FAIL — "Requirements and Configuration are borderline Avoid-tier (generic standalone terms)."`

Correction: The Avoid tier per checks.mdx §4.1 is: `Overview`, `Details`, `Information`, `Introduction`, `Summary`, `Options`, `Background`, `Next Steps`, `Further Reading`. Neither `Requirements` nor `Configuration` appears in the Avoid tier. `Configuration` is explicitly in the OK tier (along with `Setup`, `Types`, `Modes`, etc.). The correct check for `Requirements`, `Configuration`, and `Common Issues` lacking context is check 3.4 (domain-anchor rule: heading must include the domain noun when needed to be interpretable in isolation). The check 3.2 FAIL result is still correct (because `## See Also` IS Banned-tier), but the rationale incorrectly pulls in 3.4 issues as 3.2 violations. This inflates the apparent scope of the 3.2 finding.

P-rule: P28 (rationale must accurately characterise the failure)
Fail count impact: 0 (3.2 remains FAIL due to `See Also`; rationale requires correction).

**C-06 — P84 atomicity: F-01 correctly atomic**

Original stated: F-01 bundles `status: draft` change + `veracityStatus: unverified` addition + missing taxonomy fields in one fix item.

Assessment: P39/P84 requires the status → draft and veracityStatus: unverified changes to be atomic. F-01 includes both in the same item. Verified. No correction needed.

**C-07 — P94 gap: no Pre-Check file integrity section**

This page IS in docs.json (confirmed at line 2979). P94 requires the docs.json check BEFORE Category 1. The report has no `## Pre-Check: File Integrity` section (P81). The docs.json confirmation is embedded in the report header metadata. This is a structural gap but does not affect findings since the page is registered. No CRITICAL NAVIGATION ORPHAN applies.

P-rule: P81, P94
Fail count impact: 0 (informational).

---

## Corrected Fail Count

**Original report fail count:** 22
**Adjustments:** +1 addition (6.5), -1 removal (5.7)
**Corrected fail count:** 22
**Corrected FAIL IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 6.1, 6.4, 6.5, 6.6, 6.8, 6.9, 8.6, 9.1, 9.3, 9.4, 9.6

---

## New Findings (P90–P96 gaps)

**P90:** Not applicable. `status: review` is not `status: published`. Wrong-enum correctly caught at check 1.8.

**P91:** Source page uses StyledTable (provider table, troubleshooting table), code blocks, CustomDivider, CardGroup. No Accordion or Tabs. Table cells in the provider table (Alchemy, Infura rate limits) are visible text and were partially covered in the veracity claims inventory. The Banned Word Scan does not appear to have explicitly scanned table cell content in StyledTable rows — though the content is low-risk for banned words. Minimal P91 gap.

**P92:** `purpose: reference` — valid. Not applicable.

**P93:** No apparent content contradictions were flagged. The Note about public Arbitrum RPC being suitable for testing only (line 109) is internally consistent with the VRAM/production guidance elsewhere. Not triggered.

**P94:** Page IS in docs.json (line 2979). No CRITICAL NAVIGATION ORPHAN header needed. P81 Pre-Check section absent — structural gap only.

**P95:** No content overlap with sibling pages at BD level. `arbitrum-exchanges.mdx` covers a different topic (acquiring tokens, not configuring RPC). No P95 trigger.

**P96:** Source headings: `## Requirements`, `## Provider Options`, `## Configuration`, `## Verify Your Endpoint`, `## Common Issues`, `## See Also`. None match the known-failing patterns `## Overview`, `## Introduction`, `## Summary`, `## Next steps`, `## What happened`, `## Related`. The only P96-applicable heading is `## See Also` (Banned-tier) which was correctly caught. P96 fully covered.

---

## Proposed Learnings

No new patterns identified beyond what is already in P1–P96. The C-05 finding (Avoid-tier mischaracterisation of Requirements/Configuration) reinforces the need for explicit mapping of heading terms against the §4.1 tier tables before flagging check 3.2. The 3.2 Avoid tier list should be restated verbatim in the check prompt to prevent "sounds generic therefore Avoid-tier" reasoning.
