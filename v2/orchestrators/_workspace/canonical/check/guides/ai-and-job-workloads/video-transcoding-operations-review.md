# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/ai-and-job-workloads/video-transcoding-operations.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating

MOSTLY RELIABLE

---

## Issues Found

### Issue 1: `purpose: guide` error characterisation — partially correct, but mislabelled in one location
**Severity:** MEDIUM
**Check affected:** 1.4, 5.7 (P37)
**Finding in original (1.4):** "`purpose: guide` — wrong-field error. `guide` is a pageType, not a purpose value."
**Finding in original (5.7):** "`purpose: guide` is a wrong-field value (pageType value in purpose field). `status: published` inconsistent with open REVIEW flags"
**What is wrong:** Check 1.4 correctly characterises the error as "wrong-field" (P37 type b: value is valid but placed in the wrong field). This is the correct characterisation per the task brief and P37. The Frontmatter Table row also correctly states "wrong-field (P37 category b)." So the core finding is correct. However, check 5.7 conflates two separate issues into one finding: (a) the `purpose: guide` wrong-field issue, and (b) the `status: published` / missing `veracityStatus` issue. These are different root causes and should be logged as separate findings in 5.7 rather than conflated in one detail cell. Per P34, each finding must trace through all applicable sections consistently.
**Correction:** Check 5.7 detail should read: "Two separate issues: (1) `purpose: guide` is a wrong-field value (pageType value in purpose field — root cause shared with check 1.4); (2) `status: published` is a non-canonical status value (valid values are `current` and `draft`) — this is an independent violation."

---

### Issue 2: `status: published` — non-canonical value not flagged under check 1.2
**Severity:** HIGH
**Check affected:** 1.2, 1.8 (P39)
**Finding in original:** Check 1.2 PASS. `status: published` addressed only in the Frontmatter Table row as "INFO — Not a required field; value is inconsistent with missing `veracityStatus`..."
**What is wrong:** The task brief explicitly states: "Note on `status: published`: This is a non-canonical `status` value. Check whether this is flagged. Valid values for `status` are `current` and `draft`. If a page uses `status: published`, that is an invalid value and should be flagged under check 1.2 or 1.8." The report treats `status: published` as INFO only. It does not flag it as an invalid value under any FAIL check. Checks.mdx §1.8 states valid values for `veracityStatus` (`verified`, `unverified`, `stale`) but does not explicitly enumerate valid `status` values in its text — the §1.8 note specifically mentions `status: current`. The report correctly identifies the incoherence between `status: published` and missing `veracityStatus`, but fails to flag `published` as an outright invalid status value under check 1.2 (schema validity). This is a missing FAIL.
**Correction:** Add a FAIL finding: check 1.2 should note as an additional sub-item: "`status: published` is a non-canonical value — valid values are `current` and `draft`. This is an invalid-value error (P37 type c)." Alternatively flag under check 1.8 since P39's guidance specifically addresses the status/veracityStatus relationship. The verdict count must be updated to include this additional failure.

---

### Issue 3: Check 2.4 FAIL — detail describes em-dashes, but em-dashes are NOT banned constructions (check 2.4 scope)
**Severity:** MEDIUM
**Check affected:** 2.4 (P46)
**Finding in original:** Check 2.4: "FAIL — See Banned Construction Scan. Line 64: 'GPU transcoding is possible but rarely competitive' — `rarely` is not banned; the framing is acceptable. Line 166: 'Auto-adjustment is on by default.' — factual positive. Line 210: 'Any orchestrator with a price above that maximum receives zero work from that gateway.' — positive statement. Line 211: 'This threshold is a hard binary — above it you are invisible to that gateway' — em-dash present in body prose. Multiple em-dashes found throughout (see scan)"
**What is wrong:** Check 2.4 covers banned constructions: `not [X]` as primary statement, unresolved `if [condition]` in body prose, `This page [verb]` self-reference, `can/may [verb]` in value claims. Em-dashes are not a banned construction under check 2.4. They are an em-dash prohibition under P30, which applies across all visible text and is a separate concern from banned constructions. The check 2.4 result should be PASS or FAIL based solely on the four banned-construction patterns. The em-dash violations belong in the Banned Construction Scan table as their own category (they are correctly logged there) but should not drive the check 2.4 FAIL result. The detail text for 2.4 does not identify any actual banned-construction violation — only em-dashes. Per P28, if the detail concludes no banned constructions, the result must be PASS.

Verifying: the Banned Construction Scan table shows three em-dash violations (F-04, F-05, F-06) but no `not [X]` primary statements, no unresolved `if [condition]` in body prose, no `This page [verb]`, no `can/may [verb]` in value claims. The check 2.4 result should be PASS.
**Correction:** Change check 2.4 result to PASS. Detail: "No `not [X]` primary statements, no unresolved `if [condition]` in body prose, no `This page [verb]`, no `can/may [verb]` in value claims. Em-dash violations are logged separately in Banned Construction Scan and affect check 1.11 (description field) and the heading/prose scan." Update the verdict count: remove 2.4 from the failing check IDs.

---

### Issue 4: `purpose: guide` — wrong-field error does not require `pageVariant` co-fix
**Severity:** LOW (INFO)
**Check affected:** 1.3 (P42)
**Finding in original:** Check 1.3: "N/A — Not present"
**What is wrong:** This is correctly handled. Check 1.3 fires only when a deprecated pageType is being migrated (P42: pageVariant is a co-fix dependency of check 1.2). The `pageType: guide` value is canonical and valid — no migration needed. The `purpose: guide` wrong-field error does not trigger check 1.3. The N/A result is correct.
**Correction:** No correction needed.

---

### Issue 5: Verdict count — check 2.4 FAIL inflates the count
**Severity:** MEDIUM
**Check affected:** Verdict Summary (P49)
**Finding in original:** "Failing checks: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 3.2, 3.7, 5.4, 5.7, 6.1, 6.4, 6.6, 6.9, 8.1, 9.1, 9.3 — 21 checks fail."
**What is wrong:** Check 2.4 should be PASS (Issue 3 above). The `status: published` invalid-value issue should add an additional failure (Issue 2 above). Net change: remove 2.4, and depending on where `status: published` is flagged, add one to the appropriate check (1.2 or 1.8). The count moves from 21 to 21 (net neutral if the new flag is added to 1.8 as a sub-item of existing failures). However, the current 1.8 is already FAIL — so removing 2.4 would change the count to 20 failing checks if `status: published` is captured within the existing 1.8 FAIL. Per P49, the list of IDs must be accurate.
**Correction:** Remove 2.4 from the failing list. The `status: published` invalid-value issue is an additional dimension of check 1.2 (not previously flagged). Update to: "20 failing checks: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.7, 5.4, 5.7, 6.1, 6.4, 6.6, 6.9, 8.1, 9.1, 9.3" — wait, that is 21 IDs. Recount: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11 (9) + 3.1, 3.2, 3.7 (3) + 5.4, 5.7 (2) + 6.1, 6.4, 6.6, 6.9 (4) + 8.1 (1) + 9.1, 9.3 (2) = 21 checks fail after removing 2.4.

---

### Issue 6: P54 — check 2.1 correctly scoped to UK English only — confirmed clean
**Severity:** INFO
**Check affected:** 2.1
**Finding in original:** Check 2.1: "PASS — No US spellings found. 'Stabilize' not present. No -ize endings in body prose."
**What is wrong:** None. The check 2.1 result is PASS and the detail correctly restricts itself to UK English spelling patterns. Per P54, check 2.1 must only flag actual US spelling patterns. No banned words or constructions are folded into check 2.1. This is correct.
**Correction:** No correction needed.

---

## Confirmed Correct Findings

- **P37 applied correctly** to `purpose: guide`: Characterised as "wrong-field (P37 category b)" — correct. This is not a deprecated alias; `guide` is a valid 7-type canonical pageType value placed in the wrong field.
- **P50 compliance**: `pageType: guide` correctly passed check 1.2. The 7-type canonical value is schema-valid.
- **P41**: `industry` and `niche` flagged FAIL with concrete proposed values. Confirmed required fields.
- **P51**: All proposed values formatted "Proposed: `field: value` — confirm before applying." Clean.
- **P15**: `purpose` field read directly from frontmatter — value `guide` stated exactly as found. Confirmed in source file read.
- **P30**: Em-dash prohibition applied to frontmatter description field (1.11), body prose (lines 74, 211), and headings (line 208). All three locations correctly flagged.
- **P30/P48**: StyledStep title headings scanned in em-dash check — all StyledStep titles listed in Banned Construction Scan table with results. Confirmed clean (no em-dashes in step titles).
- **P33**: All internal links verified against docs.json with specific line citations. Full path verification.
- **P39**: `status: published` + missing `veracityStatus` correctly identified as incoherent. The fix options are stated correctly: (a) change `status` to `draft` + `veracityStatus: unverified`, or (b) verify all claims then `veracityStatus: verified`. The report explicitly states "Never `status: published` + `veracityStatus: unverified` (P39)" — correct.
- **P42**: Check 1.3 correctly N/A (no deprecated pageType migration needed).
- **P43**: Finding IDs are sequential. F-03 through F-06 unique and non-repeating (F-01, F-02 absent — acceptable, the report uses numbered root causes rather than F-series for some items, but the explicit fix labels F-03–F-06 in the Banned Construction Scan are unique).
- **P44**: Proposed fixes checked — F-04, F-05, F-06 proposed replacements contain no em-dashes or banned words. F-03 (duplicate card destination) fix is correctly scoped.
- **P45**: One canonical fix per finding — fixes appear in Banned Construction Scan and are cross-referenced in the fix list consistently.
- **P46**: `not [X]` correctly not placed in check 2.2. (No `not [X]` violations found on this page.)
- **P52**: No blocking decisions with unresolved equal options. Correctly stated "None."
- **P38**: Heading rename suggestions checked against other headings. "Gateway Price Ceiling" does not conflict with any existing heading on the page.
- **P18**: Rename suggestions: "Transcoding Flow", "USD Pricing", "Gateway Price Ceiling", "maxSessions Formula", "Transcoding Optimisation" — none introduce terms from the prohibited list.

---

## Corrected Verdict

**Rating: MOSTLY RELIABLE** — Two substantive issues: (1) check 2.4 incorrectly FAIL (should be PASS — em-dashes are not banned constructions); (2) `status: published` as an invalid status value not explicitly flagged as a check 1.2 violation. All other findings are correct and well-evidenced.

**Corrected fail count:** 21 checks fail: 1.1, 1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.7, 5.4, 5.7, 6.1, 6.4, 6.6, 6.9, 8.1, 9.1, 9.3
