# Review of Check Report — `v2/orchestrators/concepts/role.mdx`

**Date:** 2026-03-24
**Reviewer:** Claude Sonnet 4.6
**Source check report:** `v2/orchestrators/_workspace/canonical/check/concepts/role.md`
**Original page:** `v2/orchestrators/concepts/role.mdx`

---

## Issues Found

---

### Issue 1

**Type:** False positive
**Location in report:** Category 3 check 3.1; Heading Score Table
**What's wrong:** Check 3.1 (line 99) states: `"Who Should Operate One" scores 13/25. "Related Pages" scores 14/25 (see Heading Score Table)`. The Heading Score Table (lines 272-280) does not include "Related Pages" in its scored rows. The table notes on line 273: "H1/title and 'Related Pages' are excluded from scoring per instructions." There is no 14/25 score for "Related Pages" anywhere in the document. The check table references a score that does not exist.
**What should have been said/done:** Check 3.1 should read: `"Who Should Operate One" scores 13/25 (see Heading Score Table)`. The "Related Pages" score reference must be removed entirely.

---

### Issue 2

**Type:** False positive (partially corrected but residually broken)
**Location in report:** Category 3 check 3.2; Category 3 verdict; check 3.7; Self-Consistency Review lines 399-401
**What's wrong:** Check 3.2 is marked FAIL for "Related Pages" as a generic descriptor. The Self-Consistency Review section (lines 399-401) acknowledges this was wrong per the known approved exceptions and says: "Removing that flag... Revised 3.2 assessment: No other generic descriptor headings found. 3.2 verdict: PASS." However, the correction is incomplete in three ways:

1. The check table at line 100 still reads `3.2 | FAIL` with the original fix text ("Fix: remove the H2 entirely and leave the CardGroup without a heading, or rename to `Concepts in This Section`"). The check table is never updated.
2. The Category 3 verdict at line 109 still reads "FAIL — 3 issues" and implicitly includes the withdrawn 3.2 finding in that count.
3. Check 3.7 (line 105) still includes "Related Pages" in its failure rationale ("'Who Should Operate One' and 'Related Pages' are both bureaucratic safe labels").

An agent executing from the check table will act on a retracted finding, removing or renaming the "Related Pages" heading that is specifically approved as a structural element.

**What should have been said/done:** Update the check 3.2 table cell to PASS with note: "Related Pages heading is an approved structural element — exempt per known exceptions." Remove the fix text. Remove "Related Pages" from check 3.7. Update Category 3 verdict to "FAIL — 2 issues" (check 3.1: "Who Should Operate One" 13/25; checks 3.5 and 3.7 both expressing the same root cause for that heading).

---

### Issue 3

**Type:** Severity miscalibration / category misattribution
**Location in report:** Category 2 check 2.2; Self-Consistency Review line 397
**What's wrong:** `significantly` (line 294: "The incentives, pricing strategy, and operational requirements differ significantly") is flagged under check 2.2 as a banned word. The banned word in CLAUDE.md and checks.mdx check 2.2 is `significant` (the adjective). The adverb `significantly` does not appear on either list. The spirit of the rule is clear — vague intensifiers should be replaced with numbers — but the letter of the rule does not cover this form, and the checker cites the banned words list as the authority.

More precisely, the failing sentence is an unquantified comparative claim: "differ significantly" states no specific difference. That is a check 2.9 issue (no passive value statements / every value claim quantified or concrete), not a check 2.2 issue. The finding is listed under both check 2.2 and check 2.9 in the report, which is double-counting. The fix text is correct but the primary category is wrong.

**What should have been said/done:** Remove `significantly` from the check 2.2 failure. The check 2.2 result should be PASS. Flag the sentence only under check 2.9: "Line 294: unquantified comparative claim — 'differ significantly' states no specific difference. Delete the sentence; the Incentive Model link carries the reader. If retained, replace with concrete distinctions e.g. 'Commercial operators negotiate SLA pricing directly with Gateways; fee-share mechanics and LPT reward structure differ from solo GPU operation.'" Update Category 2 verdict count accordingly.

---

### Issue 4

**Type:** Process issue (incomplete correction)
**Location in report:** Category 3 check 3.6
**What's wrong:** Check 3.6 is marked FAIL in the check table then immediately self-downgraded to INFO within the same cell: "INFO — sidebarTitle passes; title length is borderline acceptable given its OG purpose." The Category 3 verdict counts "3 issues" but does not include check 3.6 in its enumeration, creating an inconsistency between the FAIL verdict in the table and the INFO treatment in the count.

Additionally, checks.mdx check 3.6 sits in Category 3 (Section Naming & Headings) and its "1-3 words" rule applies to H2/H3 section headings. The frontmatter `title` field serves SEO and OG display and is not a section heading. Applying a heading word-count rule to the frontmatter `title` is a category error. The `sidebarTitle: Role` (1 word) is the nav-rendered heading and is correctly assessed as PASS. There is also a conflict between CLAUDE.md heading rules ("3-6 words, 8 max") and checks.mdx check 3.6 ("1-3 words") that the report does not acknowledge.

**What should have been said/done:** Mark check 3.6 as INFO: "sidebarTitle 'Role' passes at 1 word. Frontmatter `title` field is not subject to section naming rules (check 3.6 governs H2/H3 body headings). No action." Do not count in the FAIL total. Note the CLAUDE.md vs checks.mdx word-count discrepancy as an open question for the framework.

---

### Issue 5

**Type:** Vague fix
**Location in report:** Root Cause F; Category 4 check 4.5 notes
**What's wrong:** The fix for Cascade undefined at first use proposes: "add a Note below the timeline: 'Cascade is Livepeer's distributed routing layer for job distribution across worker pools.'" This definition is AI-generated and not verified against any authoritative source. The report flags Cascade as NOT-TESTED in the veracity claims inventory (it does not appear in the claims table, which is itself a missed finding — see Issue 6), yet proposes an unverified definition string as an executable fix. Proposing unverified content as a ready-to-execute fix contradicts the report's own veracity standards.

**What should have been said/done:** Fix text should read: "Add a Note below the timeline defining Cascade at first use. The definition text requires verification against authoritative Livepeer source before insertion. Placeholder: `{/* REVIEW: Cascade — verify definition against official Livepeer documentation before adding Note */}`." Do not propose a specific definition string.

---

### Issue 6

**Type:** Missed finding
**Location in report:** Category 6 veracity claims inventory
**What's wrong:** The veracity claims table inventories 10 claims, but does not include "Cascade" as a claim even though it is used as a technical term in the timeline without definition or source. Cascade is used in the same timeline as AIServiceRegistry (which is correctly listed as NOT-TESTED). The omission means Cascade has no NOT-TESTED flag and no REVIEW comment is proposed for it in the non-blocking fixes list.

**What should have been said/done:** Add Cascade to the veracity claims table: "Cascade | 163 | technical | NOT-TESTED — term and definition not verified against any authoritative source. Add `{/* REVIEW: Cascade — verify against official Livepeer source */}` at line 163."

---

### Issue 7

**Type:** Missed finding
**Location in report:** Cross-Category Connections Root Cause E; Category 4 check 4.10
**What's wrong:** Checks.mdx check 4.10 specifies: "At least 3 cross-tab links where audience journeys intersect (tab-level check)." Root Cause E proposes only 2 fixes. The report does not acknowledge that the standard requires 3 and that the proposed remediation leaves the page 1 short.

**What should have been said/done:** Root Cause E should state: "Check 4.10 requires a minimum of 3 cross-tab links. Proposed fixes cover 2. A third intersection is needed. Candidate: line 199 'Orchestrators participate in protocol governance via LPT voting weight' — natural cross-tab link to the About tab or Delegators tab governance entry. Add a third cross-tab link here. Note: target paths for Delegators and Gateways tabs are not locked (tab-status: Draft only). Do not add placeholder links to unlocked paths. Log as blocked in blocking-items.md until Delegators and Gateways IA is approved."

---

### Issue 8

**Type:** Process issue (wrong line citation)
**Location in report:** Category 6 veracity claims inventory row for ServiceRegistry; Root Cause C; Blocking Decision BD-1
**What's wrong:** Root Cause C and BD-1 both state the ServiceRegistry conflict is between "line 160" and "lines 201, 208." Line 208 in the original page is `C -->|"ETH payment tickets"| B` inside the Network Role mermaid flowchart — it contains no mention of ServiceRegistry. ServiceRegistry appears at line 201 and at lines 215-216 (inside the Note block). The "line 208" citation is incorrect.

**What should have been said/done:** Correct all references to cite line 201 and lines 215-216 for ServiceRegistry, not line 208.

---

### Issue 9

**Type:** Severity miscalibration
**Location in report:** Category 5 check 5.3; Component Matrix table
**What's wrong:** `ScrollableDiagram` and `CenteredContainer` are marked FAIL under check 5.3 with the note "Verify against docs-guide/policies/component-layout-decisions.mdx before shipping at scale." The check was not verified against the authoritative source. Marking a finding FAIL without checking the authoritative approval list is not a valid check result. These are project-standard components used throughout the codebase. The checker had sufficient reason to verify — the file path is provided — but did not.

An unverified conditional finding should be logged as NOT-TESTED, not FAIL. Counting these as FAIL inflates the Category 5 failure count.

**What should have been said/done:** Mark checks 5.3 for ScrollableDiagram and CenteredContainer as NOT-TESTED: "Not verified against `docs-guide/policies/component-layout-decisions.mdx`. Must verify before counting as FAIL or PASS. These are standard project components; likely approved." Do not include in the FAIL count until verified.

---

### Issue 10

**Type:** Internal contradiction
**Location in report:** Category 3 check 3.2 fix; Heading Score Table suggestion for "Who Should Operate One"
**What's wrong:** Check 3.2 in checks.mdx lists `Profiles` as a prohibited generic descriptor heading ("No standalone: Types, Profiles, Modes, Overview, Basics, Details, Information, Getting Started"). The checker recommends `Operator Profiles` as the fix for "Who Should Operate One." The word "Profiles" appears verbatim in check 3.2's prohibited list.

The checker correctly penalises "Related Pages" under check 3.2 for being generic, then recommends a fix for a different heading that itself contains one of check 3.2's prohibited terms.

**What should have been said/done:** The suggested fix should not use "Profiles." Options that avoid both the pronoun ambiguity and the prohibited term: `Operator Types`, `Who Operates`, `Operator Configurations`. Note that `Types` is also on the prohibited list, so `Operator Configurations` or a domain-specific name derived from the section's actual content (persona-based scenario matching) is safer.

---

### Issue 11

**Type:** Missed finding
**Location in report:** Category 2 check 2.11 (terminology consistency)
**What's wrong:** The report flags BYOC as undefined at first use and cites line 176. Reading the page, BYOC first appears at line 164 ("BYOC container support") inside the Mermaid timeline block, before line 176 (Technical Role section). The checker identified the second occurrence and called it first use. The definition fix should be applied at the actual first use in visible text: the timeline label at line 164, or — since Mermaid timeline labels cannot contain inline definitions — a Note immediately following the timeline block, before BYOC appears again in prose at line 176 where the inline definition should also appear.

**What should have been said/done:** Note that BYOC first appears at line 164 (timeline label, uneditable inline). The fix has two parts: (1) add a Note after the timeline block (before line 170) defining BYOC, or (2) add the inline definition at line 176 as the first prose occurrence. The report's line 176 fix is correct as the prose fix but incomplete without acknowledging the earlier occurrence.

---

## Summary Verdict

The check report is **not reliable enough to use for remediation as-is.** It requires targeted corrections before an agent executes against it.

**Must fix before any agent acts on this report:**

1. Issue 1: Remove the "Related Pages" score reference (14/25) from check 3.1 — the score does not exist in the scoring table.
2. Issue 2: Correct check 3.2 to PASS in the check table (the retraction in the Self-Consistency section is incomplete). Remove fix text. Update check 3.7 rationale. Update Category 3 verdict to "FAIL — 2 issues."
3. Issue 10: The proposed fix `Operator Profiles` uses a prohibited term from the very check (3.2) the report is enforcing. Replace with `Operator Configurations` or equivalent.

**Correct before using for remediation:**

4. Issue 3: Move `significantly` from check 2.2 to check 2.9 only. Update Category 2 verdict.
5. Issue 4: Change check 3.6 from FAIL to INFO in the check table. Remove from Category 3 verdict count.
6. Issue 5: Remove the unverified Cascade definition string from Root Cause F. Replace with a REVIEW placeholder instruction.
7. Issue 7: Add third cross-tab link requirement to Root Cause E. Note fix is blocked until Delegators/Gateways IA is locked.
8. Issue 8: Correct line citation in Root Cause C and BD-1 from "lines 201, 208" to "lines 201 and 215-216."
9. Issue 9: Change ScrollableDiagram/CenteredContainer from FAIL to NOT-TESTED in Category 5.
10. Issue 11: Update BYOC first-use line citation to note line 164 (timeline) as the actual first appearance.

**Lower priority (correct in next revision):**

- Issue 6: Add Cascade to the veracity claims inventory with NOT-TESTED status.

**Findings in the report that are correct and actionable without changes:**

- All Category 1 frontmatter failures (7 fields) — specific and executable.
- Category 2 check 2.4 (line 275 `can` value-claim) — specific fix, executable.
- Category 2 check 2.11 (AIServiceRegistry vs ServiceRegistry conflict) — correctly identified.
- Category 6 veracity claims inventory — thorough for the claims it covers. The contract name conflict is a genuine CRITICAL finding.
- Category 8 check 8.6 (TODO blocks at lines 30-44 and 296) — correct.
- Blocking Decisions BD-1 and BD-2 — correctly framed, actionable once line citations are corrected.
- All Category 8 link verifications — correct and verified.
- Accordion title exclusion from heading scoring rules — correctly applied.

---

_Reviewed: 2026-03-24 | Reviewer: Claude Sonnet 4.6_
_Check report path: `v2/orchestrators/_workspace/canonical/check/concepts/role.md`_
_Original page: `v2/orchestrators/concepts/role.mdx`_
