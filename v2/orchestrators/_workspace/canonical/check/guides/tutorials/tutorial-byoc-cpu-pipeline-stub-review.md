# Critical Review — `tutorial-byoc-cpu-pipeline-stub.md`

**Original check report:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/orchestrators/_workspace/canonical/check/guides/tutorials/tutorial-byoc-cpu-pipeline-stub.md`
**Review date:** 2026-03-24
**Reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1-P77

---

## Errors Found in Original Report

### Error 1 — P62: Em-dashes used as sole basis for check 2.4 FAIL

**What the report said:** Check 2.4 is marked FAIL. The Banned Construction Scan table contains 6 em-dash entries (`—`) in outline step headings and one inline note. These em-dashes are the entire stated basis for the FAIL.

**What the correct finding is:** P62 states: em-dashes alone are NOT a check 2.4 violation. Check 2.4 covers: `not [X] as primary statement`, `rather than`, `if [condition]` in body prose, `can/may [verb]` in value claims, `That means`/`This shows`, `This page [verb]`. The Banned Construction Scan found none of these patterns. All flagged items are em-dashes in heading text (check 3.1 scope per P48) or the description field (check 1.11 scope per P74).

**Correction:** Check 2.4 result must change from FAIL to PASS. Per P69, the check 2.4 row must note: "Em-dashes tracked under P30 — see F-05 (description), F-06 (step headings) in fix list." The em-dash violations remain captured under checks 1.11 and 3.1.

**Impact:** Check 2.4 is a confirmed false FAIL. It must be removed from the FAIL count. Category 2 verdict changes to 0 confirmed fails, 7 NOT-TESTED.

---

### Error 2 — P74: Description field em-dash not explicitly listed in Banned Construction Scan table

**What the report said:** The Banned Construction Scan table lists em-dashes in "Outline Step headings" and one inline note. The description field em-dash (`Build a custom AI pipeline container and route jobs through your gateway — no GPU required`) is correctly caught in check 1.11 (Frontmatter Table) but does not appear as a separate row in the Banned Construction Scan table.

**What the correct finding is:** P74 requires the em-dash scan to include three explicit separate scan targets: (1) `description:` frontmatter field text, (2) all H2/H3 heading text, (3) body prose — listed as separate rows. The description field em-dash is caught in check 1.11 but absent from the Banned Construction Scan table as a distinct row.

**Correction needed:** Add a row to the Banned Construction Scan table for the description field em-dash, cross-referencing check 1.11. The finding is already captured; this is a traceability gap only. No change to FAIL count.

---

### Error 3 — P66/P67: `title` field marked FAIL in Frontmatter Table on editorial grounds

**What the report said:** Frontmatter Table marks `title` as FAIL with note "Non-canonical field for rendered pages — present but see notes."

**What the correct finding is:** P67 states the Frontmatter Table pass/fail column evaluates schema compliance only. `title` is present, is a required field, and has a string value — it passes schema compliance. The note "non-canonical field for rendered pages" is editorial, not a schema violation. The `title` row should be PASS in the Frontmatter Table. The editorial concern about title quality belongs in check 3.6 detail text.

**Impact:** The total FAIL count for check 1.1 is unaffected (check 1.1 fails because 9 other required fields are absent). No change to the overall FAIL count. The Frontmatter Table consistency with check table (P66) requires the `title` row to show PASS.

---

### Error 4 — P65: Fix list is clean — no phantom entries

All fix entries F-01 through F-07 contain concrete, executable actions. No entry concludes "no action required." P65 is satisfied. Confirmed.

---

### Error 5 — P68: BD sections — no "Recommendation:" lines

BD-1 and BD-2 each present options with downstream consequences. Neither contains a "Recommendation:" line. P68 is satisfied. Confirmed.

---

### Error 6 — P59: NOT-TESTED entries correctly excluded from FAIL count

The Verdict Summary FAIL list does not include any NOT-TESTED checks. All NOT-TESTED checks (2.5–2.11, 4.1, 4.2, 4.5–4.10, 5.5–5.7, 6.1–6.4, 6.7, 6.8, 7.5, 7.6, 7.9, 8.1–8.4, 9.5, 9.6) are correctly excluded. P59 is satisfied. Confirmed.

---

### Error 7 — Check 5.3 misclassification (internal inconsistency, no count impact)

**What the report said:** Check 5.3 row reads FAIL: "`<Note>` is present with stub content — check 5.4: TODO/stub placeholder in published content."

**What the correct finding is:** `<Note>` is an approved Mintlify component (it appears in the Preferred column for multiple pageTypes in the component matrix). The violation is using it as a TODO placeholder — that is a check 5.4 issue, not a check 5.3 issue. Check 5.3 should be PASS. Check 5.4 correctly captures the violation. The Verdict Summary already excludes 5.3 from the FAIL list — so the total count is unaffected. However, the check 5.3 row must be corrected to PASS to avoid a P28 result/detail inconsistency.

---

## Verdict Corrections

| Item | Original | Corrected | Reason |
|------|----------|-----------|--------|
| Overall verdict | REWRITE REQUIRED | REWRITE REQUIRED | Confirmed — stub with no content, structural orphan, all frontmatter absent |
| Confirmed FAIL count | 37 | 36 | Check 2.4 removed (P62: em-dashes alone are not a check 2.4 violation) |
| Check 2.4 result | FAIL | PASS | No canonical check 2.4 patterns found in scan; em-dashes are P30/check 3.1 scope |
| NOT-TESTED count | Not stated as a total | Correctly excluded from FAIL count — no P59 violation | Confirmed |
| BORDERLINE count | 0 | 0 | No borderline findings in original report |

---

## Fix List Corrections

No fixes to remove from original F-01 through F-07.

**One traceability addition required (P69):** The check 2.4 row (now PASS) must note: "Em-dashes tracked under P30 — see F-05 (description), F-06 (step headings) in fix list." This is a cross-reference note, not a new fix.

---

## Corrected Verdict Summary

**Overall verdict:** REWRITE REQUIRED

**Confirmed FAIL checks (36):**
1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 3.1, 3.2, 3.5, 3.6, 3.7, 4.3, 4.4, 5.1, 5.2, 5.4, 5.10, 6.5, 6.6, 6.9, 7.1, 7.2, 7.3, 7.4, 7.7, 8.6, 9.1, 9.2, 9.3, 9.4

**Check 2.4:** PASS (P62 correction applied; em-dashes tracked under P30 — see F-05, F-06)

**NOT-TESTED checks (correctly excluded from FAIL count):**
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 4.1, 4.2, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 5.5, 5.6, 5.7, 6.1, 6.2, 6.3, 6.4, 6.7, 6.8, 7.5, 7.6, 7.9, 8.1, 8.2, 8.3, 8.4, 9.5, 9.6

**BORDERLINE checks:** None

---

## Amendments Required to Original Report Before Remediation

1. Check 2.4 result: change FAIL to PASS. Add note: "Em-dashes tracked under P30 — see F-05 (description), F-06 (step headings) in fix list."
2. Category 2 verdict: change to "0 confirmed fails. 7 NOT-TESTED."
3. Check 5.3 result: change FAIL to PASS. Note: "`<Note>` is an approved component; placeholder violation is correctly captured in check 5.4."
4. Frontmatter Table `title` row: change FAIL to PASS. Move editorial concern about title quality to check 3.6 detail text.
5. Banned Construction Scan table: add explicit row for description field em-dash (cross-reference check 1.11 and F-05).
6. Verdict Summary: update FAIL count from 37 to 36 and remove 2.4 from the listed IDs.

---

_Critical reviewer: Claude Code · 2026-03-24_
