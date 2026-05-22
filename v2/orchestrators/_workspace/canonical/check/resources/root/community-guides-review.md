# Critical Review — `v2/orchestrators/resources/community-guides.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/community-guides.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** P1–P90 (stated in report header: "Learnings applied: P1–P90")

---

## Overall Rating

RELIABLE

This is a well-executed check report. The learnings version (P1–P90) is explicitly stated. The report applies P78 correctly for the TODO block (check 5.4, 8.6), applies P62 correctly for em-dashes (check 2.4 PASS), applies P84 for the atomic fix (F-01), applies P56 correctly (check 2.3 PASS for banned-construction pattern), and applies P94 for docs.json pre-check. Three corrections required, all minor: a P91 gap on StyledTable cell scan, the FAIL count for check 1.13 which is BORDERLINE not FAIL, and a check 1.8 fix format issue.

---

## Corrections Required

**Correction 1 — Check 1.13 listed as FAIL in the category verdict but reported as BORDERLINE in the check table**
- **Check finding:** The check table row 1.13 says "BORDERLINE" in the result. The Category 1 verdict states "7 FAILs (1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11)" — 1.13 is not in that list, which is correct. The Verdict Summary FAIL ID list also does not include 1.13. However the Frontmatter Table row for `keywords` says "BORDERLINE" which is consistent with the check table.
- **Correction:** The handling is consistent throughout — 1.13 is BORDERLINE, not a confirmed FAIL, and is not in the FAIL ID list. Per P60, BORDERLINE findings are not confirmed FAILs. This is correct. No correction needed on this point.
- **Rule:** P60
- **Impact on fail count:** No change.

**Correction 2 — Check 1.8 fix applies P84 correctly but the "atomic fix" label references a non-applicable §1.8 case**
- **Check finding:** Check 1.8 notes: "Fix: change `status: review` to `status: draft` AND add `veracityStatus: unverified`. Do not keep `status: current` (not applicable here — current value is `review` which is wrong enum regardless)." F-01 applies both changes atomically.
- **Correction:** The report correctly identifies that `status: review` is a wrong-enum error (not a `status: current` §1.8 coherence case). The fix is atomic per P84. The parenthetical "(not applicable here — current value is `review` which is wrong enum regardless)" is accurate and clarifying. Per P90, the correct characterisation for `status: review` (like `status: published`) is wrong-enum error only. The report applies this correctly by pointing to P84 and P57 logic. No correction needed.
- **Rule:** P84, P90
- **Impact on fail count:** No change.

**Correction 3 — P91: StyledTable cell content and Note block content not explicitly confirmed as scanned**
- **Check finding:** The Banned Construction Scan states scope as "body prose, headings, description field, table cells, card titles, Note/Warning/Tip text, component props." The em-dash scan (P74) explicitly checks the three targets. The body prose em-dash at line 56 is caught.
- **Correction:** The report does state "table cells" in the scan scope, which is correct per P91. However the actual StyledTable content (column headers, row cell text across all resource rows) is not explicitly confirmed as scanned. The Note block text is confirmed in scope. Source file line 56 em-dash is caught. Given the page is mostly table-based with many rows, the executing agent for this check would need to scan all StyledTable rows. The report claims table cells in scope but does not demonstrate this was done row-by-row. This is a scan completeness concern, not a confirmed missed violation. The tables contain URL descriptions and tool names — these are unlikely to contain banned words, but should be explicitly confirmed.
- **Rule:** P91
- **Impact on fail count:** No confirmed change. Flag as incomplete confirmation.

**Correction 4 — P95: Content overlap between community-guides.mdx and community-pools.mdx**
- **Check finding:** Check 4.8 ("No content duplication from adjacent sections") is PASS: "No duplication with Glossary or Community Pools adjacent pages."
- **Correction:** Per P95, when two sibling pages have overlapping scope, this should be raised as a BD not a PASS/MEDIUM finding. Community-guides.mdx contains a `## Pool Operators & Workers` section linking to pool resources. Community-pools.mdx is the adjacent page directly about community pools. There is a potential scope boundary concern: community-guides has pool-operator content (links to Titan Node, Video Miner, LivePool) while community-pools exists as the dedicated pool directory. Whether this constitutes content overlap requiring a BD depends on whether the pool-operator resources section in community-guides duplicates the pool-directory function of community-pools. The check agent concluded PASS; this appears defensible if the guides page links out and the pools page is a directory — these are different functions. However the check report should note this boundary explicitly rather than a simple PASS, in case community-pools is eventually populated with pool data that duplicates what appears in community-guides. This is an INFO-level observation, not a FAIL or BD at this time.
- **Rule:** P95
- **Impact on fail count:** No change.

**Correction 5 — P96: Known-failing heading patterns check**
- **Check finding:** No explicit P96 scan noted. Headings include `See Also` (caught as Banned-tier), `Video & Educational Content`, `Developer & Research Resources`.
- **Correction:** Source file headings: `Setup & Installation`, `AI Workloads`, `Monitoring & Operations`, `Economics & Strategy`, `Pool Operators & Workers`, `Video & Educational Content`, `Developer & Research Resources`, `Discord & Forum`, `See Also`. None match the P96 known-failing list (`What happened`, `What just happened`, `Overview`, `Introduction`, `Summary`, `Next steps`, `Related`). `See Also` is correctly caught as Banned-tier under check 3.2. P96 satisfied — no missed violations.
- **Rule:** P96
- **Impact on fail count:** No change.

**Correction 6 — Verdict FAIL count must be verified by direct tally**
- **Check finding:** Report states "Total FAIL count: 16" with FAIL IDs: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 5.7, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3.
- **Correction:** Count the IDs: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 = 7; 3.1, 3.2 = 2; 5.7 = 1; 6.5, 6.6, 6.8, 6.9 = 4; 9.1, 9.3 = 2. Total = 16. Count matches the stated total. P49 compliant.
- **Rule:** P49
- **Impact on fail count:** No change.

---

## Corrected Fail Count

**Original report fail count:** 16
**Adjustments:** No additions or removals to confirmed FAILs.
**Corrected fail count:** 16
**Corrected FAIL IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 5.7, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3

---

## New Findings (gaps from P91–P96, not covered in P1–P90)

**P91 — StyledTable row content not explicitly confirmed as scanned:** As noted in Correction 3. The report claims table cells in scan scope but does not demonstrate row-by-row confirmation. Given the page has many StyledTable rows of external resource descriptions, this should be explicitly confirmed. No violations expected, but confirmation is required.

**P92 — No `purpose: guide` wrong-field error:** `purpose: reference` is canonical. No P92 issue.

**P93 — No false positive contradictions flagged:** Line 56 prose "These are not maintained by the Livepeer Foundation — verify currency before following instructions" is correctly noted as having both an em-dash (P30) and a `not maintained` clause (PASS as secondary clarification). No false positive. P93 compliant.

**P94 — docs.json pre-check performed correctly:** Report confirms docs.json line 2971 in the Navigation source header. No navigation orphan. Pre-check section explicitly present. P94 satisfied.

**P95 — Pool content boundary between community-guides and community-pools:** Noted in Correction 4 as an INFO-level boundary concern, not a BD. The two pages serve different functions (guides aggregator vs. pool directory). No BD warranted at this time; note the boundary for the executing agent.

**P96 — No known-failing heading patterns present:** Confirmed above. `See Also` is correctly caught as Banned-tier. All other headings are either passing or failing on rubric score (not on P96 known-failing list).

---

## Proposed Learnings

No new patterns not already in P1–P96. This report is the strongest in this batch — it explicitly states its learnings version, applies P78/P62/P84/P56/P94 correctly, and has a clean verdict count. The only gap is P91 explicit confirmation of table row scan, which is covered by the existing rule.
