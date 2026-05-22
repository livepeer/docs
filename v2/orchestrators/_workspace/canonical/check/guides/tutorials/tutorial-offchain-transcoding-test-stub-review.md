# Critical Review — `tutorial-offchain-transcoding-test-stub.md`

**Original check report:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/orchestrators/_workspace/canonical/check/guides/tutorials/tutorial-offchain-transcoding-test-stub.md`
**Review date:** 2026-03-24
**Reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1-P77

---

## Errors Found in Original Report

### Error 1 — P62: Em-dashes used as sole basis for check 2.4 FAIL

**What the report said:** Check 2.4 is marked FAIL. The Banned Construction Scan table lists 13 rows. Examining each:

- Description field: em-dash (`—`) — P74 target 1 (check 1.11 scope), not check 2.4 scope
- H1 title: no em-dash — correctly PASS
- "What you'll build" heading: weak heading, not a banned construction — correctly noted "See Cat 3"
- `Step 1 — Start a local orchestrator`: em-dash in heading text — P48/check 3.1 scope
- `Step 2 — Start your gateway`: em-dash in heading text — P48/check 3.1 scope
- `Step 3 — Send a test stream`: em-dash in heading text — P48/check 3.1 scope
- `Step 4 — Verify the output`: em-dash in heading text — P48/check 3.1 scope
- "What just happened": generic heading, not a banned construction — correctly noted "See Cat 3"
- "Next steps": avoid-tier heading term, not a banned construction — correctly noted "See Cat 3"
- Three `→` notation instances: flagged for editorial review, correctly noted as not prohibited
- `no [X]` in prerequisites: correctly classified as acceptable in prerequisites context
- `→` in description notation: correctly classified as acceptable in technical notation

**What the correct finding is:** P62 states: em-dashes alone are NOT a check 2.4 violation. None of the 13 rows contains a canonical check 2.4 pattern (`not [X] as primary statement`, `rather than`, `if [condition]` in body prose, `can/may [verb]` in value claims, `That means`/`This shows`, `This page [verb]`). All substantive flags are em-dashes in heading text (check 3.1 scope) or the description field (check 1.11 scope).

**P74 confirmation:** The Banned Construction Scan explicitly covers all three required targets: (1) description field — row 1; (2) H2/H3 heading text — step heading rows; (3) body prose / inline notes — arrow notation rows. P74 scan coverage is satisfied. The error is attributing em-dash findings to check 2.4.

**Correction:** Check 2.4 result must change from FAIL to PASS. Per P69, the check 2.4 row must note: "Em-dashes tracked under P30 — see F-02 (description), F-05 (step headings) in fix list. `→` notation and `no [X]` prerequisites are not check 2.4 violations — flagged for editorial review in developed content only."

**Impact:** Check 2.4 is a confirmed false FAIL. It must be removed from the FAIL count. Category 2 verdict changes to 0 confirmed fails, 7 NOT-TESTED.

---

### Error 2 — P75: F-06 proposes `Pipeline Overview` — contains Avoid-tier term

**What the report said:** F-06 proposes renaming "What you'll build" to `Pipeline Overview`.

**What the correct finding is:** P75 states: before recording a proposed fix, run the proposed replacement text through the same prohibition scan. P18 states: every heading rename suggestion must be validated against the check 3.2 prohibited list. `Overview` appears in the Avoid tier ("flag, suggest stronger") in Frameworks.mdx §4.1. Proposing a rename that introduces an Avoid-tier term does not resolve the original violation — it substitutes one quality failure for a classified weakness.

**Correction:** `Pipeline Overview` must be replaced with a proposed rename that avoids the Avoid-tier term list. Proposed alternative: `Off-chain Pipeline` (estimated 22/25, domain-anchored, names the thing built, no prohibited terms). Confirm before applying; verify no existing heading conflicts per P38. The other F-06 renames are clean: `Off-chain Lifecycle` (no prohibited terms) and the Related Pages pattern suggestion (explicitly approved per P53/P16).

---

### Error 3 — P34: `→` notation findings orphaned — no fix or explicit closure

**What the report said:** The Banned Construction Scan table flags three `→` notation instances (`→ Page 2: Add AI...`, `→ Configuration guide: customise...`, `→ Setup Paths: decide...`) as "informal notation — FLAG for review in developed content only." No corresponding entry appears in the Prioritised Fix List and no explicit closure is provided.

**What the correct finding is:** P34 states: a finding raised in the check category section must appear in all applicable report sections, or be explicitly closed with a reason. The `→` notation findings are orphaned — they appear in the Banned Construction Scan table but have no fix list entry and no explicit closure statement.

**Correction:** Add explicit closure to the Banned Construction Scan table: "Not in fix list — informal notation acceptable in outline context; revisit when prose is developed." Alternatively, add as a low-priority fix list entry. Either form satisfies P34. The finding does not constitute a check 2.4 FAIL (correctly noted as acceptable notation by the original checker).

---

### Error 4 — P77: go-livepeer binary syntax note missing staleness tier

**What the report said:** The Veracity Claims Inventory includes: "The CLI commands in the outline use go-livepeer binary syntax (`-network offchain`), not Docker. Check against current go-livepeer release when developing content — verify binary path syntax."

**What the correct finding is:** P77 states: when flagging an unverified protocol-state figure or procedural claim, include the Frameworks.mdx §3.4 staleness tier. The `-network offchain` flag syntax is a CLI procedure that changes with go-livepeer releases. Staleness tier: **HIGH** (CLI flags change with releases — syntax, defaults, and available flags are release-dependent). This tier controls priority in the veracity pass and must be included in the finding.

**Correction:** Amend the Veracity Claims Inventory note to: "CLI command syntax (`-network offchain`) — staleness tier: HIGH. Verify flag against current go-livepeer release before developing content."

---

### Error 5 — P66/P67: `title` field marked FAIL in Frontmatter Table on editorial grounds

**What the report said:** Frontmatter Table marks `title` as FAIL with note: "Em-dash absent: PASS on that. Colon construction names two things. 'Your First Gateway' is a possessive framing (informal)."

**What the correct finding is:** P67 states the Frontmatter Table pass/fail column evaluates schema compliance only. `title` is present, is a required field, and has a string value — it passes schema compliance. The concern about possessive framing and colon construction is editorial. The `title` row should be PASS in the Frontmatter Table. The editorial concern is already correctly captured in check 3.6 detail text.

**Impact:** No change to total FAIL count (check 1.1 fails due to the other 9 absent fields). P66 consistency requires the `title` row to show PASS.

---

### Error 6 — P49 / Category 5 verdict count mismatch

**What the report said:** The Category 5 verdict states "3 confirmed fails: 5.1, 5.2, 5.4, 5.10" — the word "3" appears but 4 IDs are listed.

**What the correct finding is:** The ID list has 4 entries (5.1, 5.2, 5.4, 5.10) but the verbal count says "3." The Verdict Summary FAIL list correctly includes all 4 IDs, so the overall total count of 35 is correct. The Category 5 sub-verdict text must be corrected to "4 confirmed fails" to match the listed IDs.

**Impact:** No change to overall FAIL count. Category 5 sub-verdict word "3" must be corrected to "4."

---

### Error 7 — P65: Fix list is clean beyond Error 2 — no other phantom entries

All fix entries except the F-06 issue in Error 2 are concrete and executable. F-07 correctly conditions the title fix on BD-1 outcome without prejudging. P65 is satisfied for all entries except the `Pipeline Overview` proposed value in F-06 (corrected in Error 2).

---

### Error 8 — P68: BD sections — no "Recommendation:" lines

BD-1 (three options: duplicate-delete, separate orchestrators version, move to `_workspace/`), BD-2 (docs.json entry after BD-1), and BD-3 (pageType decision) each present options with downstream consequences. No section contains a "Recommendation:" line. P68 is satisfied. Confirmed.

---

### Error 9 — P59: NOT-TESTED entries correctly excluded from FAIL count

The Verdict Summary FAIL list does not include any NOT-TESTED checks. All NOT-TESTED checks (2.5–2.11, 4.4–4.10, 5.5–5.9, 6.1–6.4, 6.7, 6.8, 7.5, 7.6, 7.9, 8.1–8.4, 9.5, 9.6) are correctly excluded. P59 is satisfied. Confirmed.

---

## Verdict Corrections

| Item | Original | Corrected | Reason |
|------|----------|-----------|--------|
| Overall verdict | REWRITE REQUIRED | REWRITE REQUIRED | Confirmed — stub with no content, likely duplicate of published gateway tutorial page |
| Confirmed FAIL count | 35 | 34 | Check 2.4 removed (P62: em-dashes alone are not a check 2.4 violation) |
| Check 2.4 result | FAIL | PASS | No canonical check 2.4 patterns found; em-dashes are P30/check 1.11/3.1 scope |
| Category 5 sub-verdict word count | "3 confirmed fails" | "4 confirmed fails" | ID list has 4 entries (P49) |
| NOT-TESTED count | Not stated as total | Correctly excluded — no P59 violation | Confirmed |
| BORDERLINE count | 0 | 0 | No borderline findings in original report |

---

## Fix List Corrections

**F-06: Replace `Pipeline Overview` proposed rename with `Off-chain Pipeline`**
- Original: "What you'll build" → `Pipeline Overview`
- Corrected: "What you'll build" → `Off-chain Pipeline` (estimated 22/25; domain-anchored, no Avoid-tier terms)
- Reason: `Overview` is Avoid-tier per Frameworks.mdx §4.1. P75 and P18 require fix proposals to pass the same prohibition scan as the original violation.

**Add closure for `→` notation findings (P34):**
- Add to the Banned Construction Scan table: "Not in fix list — informal notation acceptable in outline context; revisit when prose is developed."

---

## Corrected Verdict Summary

**Overall verdict:** REWRITE REQUIRED

**Confirmed FAIL checks (34):**
1.1, 1.2, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 3.1, 3.2, 3.6, 3.7, 4.3, 5.1, 5.2, 5.4, 5.10, 6.5, 6.6, 6.9, 7.1, 7.2, 7.3, 7.4, 7.7, 8.6, 9.1, 9.2, 9.3, 9.4

**Check 2.4:** PASS (P62 correction applied; em-dashes tracked under P30 — see F-02, F-05)

**NOT-TESTED checks (correctly excluded from FAIL count):**
2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 5.5, 5.6, 5.7, 5.8, 5.9, 6.1, 6.2, 6.3, 6.4, 6.7, 6.8, 7.5, 7.6, 7.9, 8.1, 8.2, 8.3, 8.4, 9.5, 9.6

**BORDERLINE checks:** None

---

## Amendments Required to Original Report Before Remediation

1. Check 2.4 result: change FAIL to PASS. Add note: "Em-dashes tracked under P30 — see F-02 (description), F-05 (step headings) in fix list. `→` notation and `no [X]` prerequisites are not check 2.4 violations."
2. Category 2 verdict: change to "0 confirmed fails. 7 NOT-TESTED."
3. Category 5 verdict text: change "3 confirmed fails" to "4 confirmed fails."
4. Frontmatter Table `title` row: change FAIL to PASS (schema-compliant). Move editorial concern to check 3.6 detail text.
5. F-06: replace `Pipeline Overview` with `Off-chain Pipeline` (Avoid-tier `Overview` term removed).
6. Banned Construction Scan table: add explicit closure for `→` notation findings: "Not in fix list — informal notation acceptable in outline context; revisit when prose is developed."
7. Veracity Claims Inventory: add staleness tier HIGH to go-livepeer binary syntax note.
8. Verdict Summary: update FAIL count from 35 to 34 and remove 2.4 from the listed IDs.

---

_Critical reviewer: Claude Code · 2026-03-24_
