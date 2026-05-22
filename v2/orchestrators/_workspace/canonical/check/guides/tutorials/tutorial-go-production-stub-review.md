# Critical Review — `tutorial-go-production-stub.md`

**Original check report:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/orchestrators/_workspace/canonical/check/guides/tutorials/tutorial-go-production-stub.md`
**Review date:** 2026-03-24
**Reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1-P77

---

## Errors Found in Original Report

### Error 1 — P62: Em-dashes used as sole basis for check 2.4 FAIL

**What the report said:** Check 2.4 is marked FAIL. The Banned Construction Scan table lists 11 items: 1 em-dash in the description field, 3 em-dashes in outline headings (`Upgrade 1 — On-chain Registration`, `Upgrade 2 — GPU Pipelines`, `Upgrade 3 — Network Connect`), 1 em-dash in `What's next — the Guides`, and 5 em-dashes in decision table persona cells (`Persona A — Graduate (AI app)` etc.). These are the entire basis for the check 2.4 FAIL.

**What the correct finding is:** P62 states: em-dashes alone are NOT a check 2.4 violation. Check 2.4 covers: `not [X] as primary statement`, `rather than`, `if [condition]` in body prose, `can/may [verb]` in value claims, `That means`/`This shows`, `This page [verb]`. None of these patterns is present in any of the 11 flagged items. All are em-dashes only.

- Description field em-dash: check 1.11 scope (P74 target 1)
- Heading text em-dashes: check 3.1 scope (P48, P74 target 2)
- Table cell em-dashes: P30 scope (visible text, P74 target 3)

**P74 confirmation:** The Banned Construction Scan table in the original report explicitly covers all three required targets: (1) description field — row 2; (2) heading text — rows 3-5; (3) table cells/prose — rows 6-11. P74 scan coverage is satisfied. The error is attributing these findings to check 2.4 rather than their correct homes.

**Correction:** Check 2.4 result must change from FAIL to PASS. Per P69, the check 2.4 row must note: "Em-dashes tracked under P30 — see F-02 (description), F-05 (headings, table cells) in fix list." The em-dash violations remain captured under checks 1.11 and 3.1.

**Impact:** Check 2.4 is a confirmed false FAIL. It must be removed from the FAIL count. Category 2 verdict changes to 0 confirmed fails, 7 NOT-TESTED.

---

### Error 2 — P66/P67: `title` field marked FAIL in Frontmatter Table on editorial grounds

**What the report said:** Frontmatter Table marks `title` as FAIL with note about the colon construction and comma list: "contains a comma list — 3 concepts, not one concept."

**What the correct finding is:** P67 states the Frontmatter Table pass/fail column evaluates schema compliance only. `title` is present, is a required field, and has a string value — it passes schema compliance. The concern about a comma-list title naming three concepts is editorial, not a schema violation. The `title` row should be PASS in the Frontmatter Table. The editorial concern belongs in check 3.6 detail text, where it is already correctly captured.

**Impact:** No change to total FAIL count (check 1.1 fails due to the other 9 absent fields). P66 consistency requires the `title` row to show PASS to match the correct determination.

---

### Error 3 — P49 / Category 5 verdict count mismatch

**What the report said:** The Category 5 verdict states "3 confirmed fails: 5.1, 5.2, 5.4, 5.10" — the word "3" appears but 4 IDs are listed.

**What the correct finding is:** The ID list has 4 entries (5.1, 5.2, 5.4, 5.10) but the verbal count says "3." The Verdict Summary FAIL list correctly includes all 4 IDs, so the overall total count of 38 is correct. However, the Category 5 sub-verdict text must be corrected to "4 confirmed fails" to match the listed IDs (P49 principle: counts must match lists).

**Impact:** No change to overall FAIL count. Category 5 sub-verdict word "3" must be corrected to "4."

---

### Error 4 — P65: Fix list is clean — no phantom entries

All fix entries F-01 through F-07 contain concrete, executable actions. No entry concludes "no action required." P65 is satisfied. Confirmed.

---

### Error 5 — P68: BD sections — no "Recommendation:" lines

BD-1, BD-2, and BD-3 each present options with downstream consequences. No section contains a "Recommendation:" line. P68 is satisfied. BD-3 correctly presents three options ([A] single guide, [B] three separate pages, [C] current structure) with downstream consequences for each, without prejudging. Confirmed.

---

### Error 6 — P59: NOT-TESTED entries correctly excluded from FAIL count

The Verdict Summary FAIL list does not include any NOT-TESTED checks. All NOT-TESTED checks (2.5–2.11, 4.4–4.10, 5.5–5.9, 6.1–6.4, 6.7, 6.8, 7.5, 7.6, 7.9, 8.1–8.4, 9.5, 9.6) are correctly excluded. P59 is satisfied. Confirmed.

---

### Error 7 — Additional finding: BD-3 Option [C] consequence understated

**What the report said:** BD-3 Option [C] states: "scope problem persists — the page cannot pass check 4.1."

**What is missing:** The consequence of choosing Option [C] should state explicitly that checks 4.1 and 4.2 will be permanent FAILs and the page cannot be certified to pass under any review standard while the three-job scope is retained. The current wording implies this but does not state it plainly. This is an editorial gap in the BD section, not a systematic error from the learnings catalog. No catalog error number applies. Flagged for human awareness.

---

### Error 8 — Additional finding: `activateBroadcaster` is supporting evidence for BD-1 audience assignment

**What the report said:** The Veracity Claims Inventory flags `activateBroadcaster` as "this appears to be a gateway-side command" with NOT-TESTED status.

**What is missing:** `activateBroadcaster` is a gateway-side activation call, not an orchestrator command. Its presence in an orchestrators-directory stub is strong evidence that the content was authored for the gateways tab. This finding should be cross-referenced in BD-1 as supporting evidence for `audience: gateway` (Option A). The original check notes the BD-1 question but does not connect the `activateBroadcaster` finding to it. BD-1 Options section should add: "Note: the `activateBroadcaster` command in the Veracity Claims Inventory is gateway-side — provides additional evidence for Option [A]." Not a systematic learnings error; flagged for remediation context.

---

## Verdict Corrections

| Item | Original | Corrected | Reason |
|------|----------|-----------|--------|
| Overall verdict | REWRITE REQUIRED | REWRITE REQUIRED | Confirmed — stub with no content, critical structural scope problem (3 jobs), structural orphan |
| Confirmed FAIL count | 38 | 37 | Check 2.4 removed (P62: em-dashes alone are not a check 2.4 violation) |
| Check 2.4 result | FAIL | PASS | No canonical check 2.4 patterns found; em-dashes are P30/check 1.11/3.1 scope |
| Category 5 sub-verdict word count | "3 confirmed fails" | "4 confirmed fails" | ID list has 4 entries (P49) |
| NOT-TESTED count | Not stated as total | Correctly excluded — no P59 violation | Confirmed |
| BORDERLINE count | 0 | 0 | No borderline findings in original report |

---

## Fix List Corrections

No fixes to remove from original F-01 through F-07.

**One traceability addition required (P69):** The check 2.4 row (now PASS) must note: "Em-dashes tracked under P30 — see F-02 (description), F-05 (headings, table cells) in fix list."

---

## Corrected Verdict Summary

**Overall verdict:** REWRITE REQUIRED

**Confirmed FAIL checks (37):**
1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 3.1, 3.2, 3.5, 3.6, 3.7, 4.1, 4.2, 4.3, 5.1, 5.2, 5.4, 5.10, 6.5, 6.6, 6.9, 7.1, 7.2, 7.3, 7.4, 7.7, 8.6, 9.1, 9.2, 9.3, 9.4

**Check 2.4:** PASS (P62 correction applied; em-dashes tracked under P30 — see F-02, F-05)

**NOT-TESTED checks (correctly excluded from FAIL count):**
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 5.5, 5.6, 5.7, 5.8, 5.9, 6.1, 6.2, 6.3, 6.4, 6.7, 6.8, 7.5, 7.6, 7.9, 8.1, 8.2, 8.3, 8.4, 9.5, 9.6

**BORDERLINE checks:** None

---

## Amendments Required to Original Report Before Remediation

1. Check 2.4 result: change FAIL to PASS. Add note: "Em-dashes tracked under P30 — see F-02 (description), F-05 (headings, table cells) in fix list."
2. Category 2 verdict: change to "0 confirmed fails. 7 NOT-TESTED."
3. Category 5 verdict text: change "3 confirmed fails" to "4 confirmed fails" (the ID list already has all four).
4. Frontmatter Table `title` row: change FAIL to PASS (schema-compliant field present). Move editorial concern about comma-list title to check 3.6 detail text only.
5. BD-3: add explicit statement that Option [C] makes checks 4.1 and 4.2 permanent FAILs — the page cannot be certified while three-job scope is retained.
6. BD-1: cross-reference the `activateBroadcaster` command from the Veracity Claims Inventory as supporting evidence for `audience: gateway` assignment.
7. Verdict Summary: update FAIL count from 38 to 37 and remove 2.4 from the listed IDs.

---

_Critical reviewer: Claude Code · 2026-03-24_
