# Critical Review — `v2/orchestrators/resources/community-pools.mdx`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Source check report:** `check/resources/root/community-pools.md`
**Learnings applied:** P1–P96
**Original check agent learnings version:** Not stated

---

## Overall Rating

NEEDS CORRECTION

The report correctly identifies the page as a placeholder with a dead `href="#"` link and correctly raises BD-01 for the implementation decision. The `REWRITE REQUIRED` overall verdict is appropriate. However, five corrections are required: check 8.6 must be PASS per P78 (TODO is a non-rendered MDX comment), the description field PASS/FAIL is inconsistent between the Frontmatter Table and check 1.11 row, the FAIL count has an arithmetic error, a P95 BD for content overlap with community-guides is missing, and the check 2.6 FAIL is unwarranted for a page with intentionally minimal content.

---

## Corrections Required

**Correction 1 — Check 8.6 must be PASS per P78**
- **Check finding:** Check 8.6 FAIL — "TODO block lines 23–44. Note on line 52 says 'Uses an automation to pull in data from a google sheet' — describes future/in-progress state visible in published content."
- **Correction:** The TODO block (lines 23–44) is an MDX comment (`{/* TODO: ... */}`). Per P78, MDX comments are not rendered in page output and cannot constitute a check 8.6 failure. The check report acknowledges this for check 5.4 (correctly marking it PASS "MDX comment — not rendered (P78)") but then ignores P78 when applying check 8.6. This is inconsistent. The TODO block cannot fail 5.4 (MDX comment, not rendered) but simultaneously fail 8.6 (TODO in published content). The Note at line 52 is different — it is a rendered `<Note>` component that says "Uses an automation to pull in data from a google sheet." This Note IS rendered and describes an unimplemented state. However, the Note itself does not contain the word "TODO" or "TBD" or "Coming Soon" — check 8.6 pass criteria is "No TODO/TBD/Coming Soon in published content." The Note describes automation, which is an incomplete-page issue but not the specific pattern check 8.6 tests. Check 8.6 should be PASS (the MDX TODO is non-rendered; the Note does not contain TODO/TBD/Coming Soon text). The unimplemented automation is a check 4.1, 4.4, 4.7 and 9.3 issue — all correctly flagged elsewhere.
- **Rule:** P78
- **Impact on fail count:** -1 (remove 8.6 from FAIL list)

**Correction 2 — Frontmatter Table description row PASS/FAIL inconsistency**
- **Check finding:** The Frontmatter Table row for `description` says "FAIL" in the Pass/Fail column, but the detail text concludes "PASS for 1.11." The check 1.11 row in the category table says "PASS — Subject-first, 91 chars, UK English, no em-dash, no self-reference."
- **Correction:** Per P28/P66, the Frontmatter Table and check table must agree. The check table 1.11 is PASS; the Frontmatter Table row must also say PASS. The FAIL in the Frontmatter Table header is a report inconsistency. Source file description confirms: "Compare community orchestrator pools, how they work, and what to review before joining one." — no em-dash, subject-first, UK English, 91 chars. The correct result is PASS. The Category 1 verdict correctly does not include 1.11 in the FAIL list. No change to fail count.
- **Rule:** P28, P66
- **Impact on fail count:** No change (1.11 is already PASS in the check table and verdict).

**Correction 3 — Check 2.6 FAIL is not warranted**
- **Check finding:** Check 2.6 FAIL — "The page has no substantive content paragraphs. The single prose sentence (line 50) describes what the page should contain, not the content itself."
- **Correction:** Check 2.6 (Paragraph discipline) tests that paragraphs have a lead fact sentence and end on fact/number/next-step, not a hedge. A page that has no substantive paragraphs is not a check 2.6 failure — it is a check 4.1 failure (page does not fulfil its purpose). Check 2.6 can only fail when paragraphs exist and are poorly structured. The absence of paragraphs is not a paragraph-discipline failure; it is a content-absence failure. Check 2.6 should be N/A (no paragraphs to evaluate) or PASS (no paragraphs violate paragraph discipline because there are no paragraphs). The single prose sentence at line 50 is correctly flagged under checks 2.3 (banned `etc.`), 2.4 (meta-description construction), and 2.5 (opening order). It does not independently fail check 2.6.
- **Rule:** P35 (evaluate current state, not projected ideal state)
- **Impact on fail count:** -1 (remove 2.6 from FAIL list)

**Correction 4 — P49 arithmetic: stated fail count does not match the listed FAIL IDs**
- **Check finding:** "32 confirmed FAILs" listed with IDs: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.12, 1.13, 2.3, 2.4, 2.5, 2.10, 3.1, 3.7, 4.1, 4.2, 4.4, 4.7, 5.1, 5.2, 5.5, 5.7, 6.1, 6.6, 6.9, 7.5, 8.1, 8.6, 9.1, 9.3, 9.4, 9.6.
- **Correction:** Count: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.12, 1.13 = 8; 2.3, 2.4, 2.5, 2.10 = 4; 3.1, 3.7 = 2; 4.1, 4.2, 4.4, 4.7 = 4; 5.1, 5.2, 5.5, 5.7 = 4; 6.1, 6.6, 6.9 = 3; 7.5 = 1; 8.1, 8.6 = 2; 9.1, 9.3, 9.4, 9.6 = 4. Total = 32. The stated count of 32 matches the listed IDs. After applying Corrections 1 and 3 (remove 8.6 and 2.6), the corrected count is 30.
- **Rule:** P49
- **Impact on fail count:** Corrections 1 and 3 together reduce the count by 2.

**Correction 5 — P95: Content overlap between community-pools.mdx and community-guides.mdx should be a BD**
- **Check finding:** The cross-category connections section notes "Root cause 1 — Page is a placeholder" but does not raise a P95 BD for content overlap with community-guides.mdx.
- **Correction:** Per P95, when two sibling pages have overlapping scope, this should be raised as a BD. Community-guides.mdx has a `## Pool Operators & Workers` section containing pool-directory-type content (links to Titan Node, Video Miner, LivePool). Community-pools.mdx is the dedicated pool directory page. These pages have overlapping scope: both cover where to find/join community pools. Before community-pools.mdx is implemented, a BD should be raised: should community-pools.mdx become a proper pool directory distinct from the guides page, or should the pool-operator section in community-guides.mdx be removed once community-pools is live? This is a content architecture decision that blocks implementation of community-pools. The check report raises BD-01 for the implementation decision (automation vs. manual vs. remove) but does not note the content overlap with community-guides as a constraint on that decision.
- **Rule:** P95
- **Impact on fail count:** No change to FAIL count (this adds a BD, not a FAIL). The BD-01 should be expanded to include the content overlap dimension.

**Correction 6 — Check 6.5 should be FAIL (not N/A)**
- **Check finding:** Check 6.5 result is N/A — "No factual claims requiring REVIEW flags."
- **Correction:** The Note at line 52 states "Uses an automation to pull in data from a google sheet." This is a factual claim about how the page works — specifically that there is automation that has not been implemented. This is an unverified factual claim (the automation does not appear to exist). Per checks.mdx §6.5, unverified claims should have `{/* REVIEW: [claim] — [source] */}` flags. The absence of a REVIEW flag on an unverified factual claim is a check 6.5 FAIL. The report correctly identifies the automation claim as UNVERIFIED in the veracity inventory (check 6.1 FAIL) but then marks 6.5 as N/A. This is inconsistent — an unverified claim that lacks a REVIEW flag fails both 6.1 and 6.5.
- **Rule:** P61
- **Impact on fail count:** +1 (add 6.5 to FAIL list)

---

## Corrected Fail Count

**Original report fail count:** 32
**Adjustments:** -1 (8.6 removed per P78), -1 (2.6 removed — not a valid paragraph discipline failure), +1 (6.5 added — unverified automation claim lacks REVIEW flag)
**Net:** -1
**Corrected fail count:** 31
**Corrected FAIL IDs:** 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.12, 1.13, 2.3, 2.4, 2.5, 2.10, 3.1, 3.7, 4.1, 4.2, 4.4, 4.7, 5.1, 5.2, 5.5, 5.7, 6.1, 6.5, 6.6, 6.9, 7.5, 8.1, 9.1, 9.3, 9.4, 9.6

---

## New Findings (gaps from older learnings version)

**P90 — `status: review` is a wrong-enum error:** The report handles this correctly in check 1.8 (fixes to `status: draft` + `veracityStatus: unverified`). P90 logic applied correctly.

**P91 — Component content scan:** The page has minimal component content (one Note, one Columns/Card stub). The Note text at line 48 was effectively scanned (the report discusses it). The placeholder Card's title "Pool Name" and body "Pool Description" were noted. P91 is satisfied for this page given the minimal content.

**P92 — No `purpose: guide` wrong-field error:** `purpose: reference` is canonical. No P92 issue.

**P93 — No false positive contradictions flagged:** The automation claim (Note at line 52) is correctly identified as unverified without false positive from adjacent context. The disclaimer Note at line 48 was read correctly. P93 compliant.

**P94 — docs.json check performed:** Report header confirms docs.json line 2972. No navigation orphan. P94 satisfied.

**P95 — Community-guides content overlap raises a BD constraint:** As noted in Correction 5. The BD-01 should be expanded to note the pool-operator content in community-guides.mdx as a constraint. If Option A or B of BD-01 is chosen, the pool-operator section of community-guides may need to be trimmed to avoid duplication.

**P96 — No headings to apply known-failing pattern check to:** The page has no H2 or H3 headings in the body. The title-only heading `Community Orchestrator Pools` does not match any P96 known-failing pattern. P96 is not applicable here.

---

## Proposed Learnings

**New pattern — Check 2.6 N/A rule for content-absent pages:**
When a page has no substantive paragraphs (as in a placeholder page), check 2.6 (Paragraph discipline) should be marked N/A, not FAIL. Check 2.6 can only fail when paragraphs exist and violate the lead-fact/end-on-fact structure. A page with no paragraphs has nothing to evaluate. Add to check prompts: "If the page has no substantive prose paragraphs, mark check 2.6 as N/A — not FAIL."

**New pattern — Check 6.5 applies to rendered Note blocks containing unverified factual claims:**
When a rendered `<Note>` component contains an unverified factual claim (such as "Uses an automation to pull in data from a google sheet"), the absence of a `{/* REVIEW: */}` flag on that claim is a check 6.5 FAIL. Note blocks are rendered visible text — they are not exempt from the check 6.5 requirement. This applies to any rendered component block (Note, Warning, Callout, Tip) that makes a verifiable factual claim.
