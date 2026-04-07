# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/staking-and-rewards/reward-mechanics.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54

---

## Rating
NEEDS REWORK

---

## Issues Found

### Issue 1: `## Related` flagged as check 3.2 and 3.7 violation — false positive (checks.mdx §3.2 OK tier)
**Severity:** HIGH
**Check affected:** 3.2, 3.7, Heading Score Table, Fix List F-11, Verdict count
**Finding in original:**
- Check 3.2: "No Banned or Avoid-tier terms in isolation. `Setting your commission` — not in the banned list. `Commission rate strategy` — not banned. `Related` at line 368 — see below"
- The check 3.2 table itself shows PASS, but the note at line 91 states: "Per P53, `Related Pages` (exact match) is exempt. `Related` alone is NOT exempt. It must be scored and flagged."
- Heading Score Table: `Related` scored at 11/25 — FAIL
- Check 3.7 FAIL: `## Related` — "generic label, 11/25. See F-04."
- Fix List F-11: "H2: `Related` — 11/25 — `Related` alone is not exempt (P53) | Rename to `## Related Pages` — confirmed approved structural element"

**What is wrong:** checks.mdx §3.2 (read at line 96) explicitly lists `Related` in the **OK tier**: `**OK**: Types, Modes, Profiles, Prerequisites, Configuration, Setup, Resources, Related, etc.` This is the canonical definition. `Related` is not banned, not Avoid-tier — it passes check 3.2.

P53 clarifies that the *exemption* (making the heading invisible to all checks) applies only to `Related Pages` (exact match). P53 does not say `Related` is Avoid-tier or prohibited. It means `Related` must be scored and assessed like any heading — and when assessed against check 3.2, it passes because it is in the OK tier.

The check 3.2 result row is PASS — that is correct. But the note below the check 3.2 table says "`Related` alone is NOT exempt. It must be scored and flagged" — this language incorrectly implies a violation. The heading must be scored (check 3.1) and that score can legitimately fail (11/25 < 20/25). But check 3.2 does not fail for `Related`.

Check 3.7 fails for `## Related` because it is "generic." This is an editorial judgment independent of check 3.2 — 3.7 evaluates whether the heading sounds like an expert editorial choice. A single-word structural label may legitimately fail 3.7. However, check 3.7 in this report currently reads: "FAIL — `## Related` — generic label, 11/25. See F-04." This conflates a check 3.1 score (11/25) with a check 3.7 editorial judgment. These are separate findings.

Fix F-11 recommends renaming to `## Related Pages`. This treats the correction as a compliance fix, but `Related` is compliant with check 3.2. The rename to `Related Pages` would adopt the approved structural element, which may be appropriate given the content (a footer navigation CardGroup). However, the rationale must be framed as: "adopt the approved structural element for this navigation role" — not "fix a check 3.2 violation."

**Correction:**
- The check 3.2 note must be rewritten: "`Related` is in the OK tier per checks.mdx §3.2. Check 3.2 PASS. `Related` is not exempt from check 3.1 scoring or check 3.7 assessment per P53, but it passes check 3.2."
- Check 3.7 can remain FAIL, but the rationale must be editorial judgment (generic single-word label) without citing check 3.2.
- F-11 rename to `## Related Pages` may be appropriate, but the stated rationale must change from "not exempt" to "adopt the approved structural element for footer navigation role — confirm intent before applying."
- Check 3.2 result remains PASS (it was already PASS in the table). No verdict count impact.

---

### Issue 2: Three `not [X]` constructions — categorisation under 2.4 is correct (P46)
**Severity:** N/A — confirming correctness
**Check affected:** 2.4 / Banned Construction Scan
**Finding in original:** Three `not [X]` constructions flagged:
- Line 61: "There is no catch-up mechanism." — flagged as F-07
- Lines 96–98 (Warning): "There is no retry." — flagged as F-07
- Line 209: "There is no universally correct setting." — flagged as F-08

All three are placed under check 2.4 and the Banned Construction Scan table. Check 2.2 is PASS.

**What is correct:** Per P46, `not [X] as primary statement` is a banned construction, not a banned word. It belongs in check 2.4. Check 2.2 must not fail for this. The report correctly categorises all three instances under check 2.4 and the Banned Construction Scan. Check 2.2 is PASS. No error.

**Verification against source file:**
- Line 61: `**You only earn for rounds in which you successfully call `Reward()`.** There is no catch-up mechanism.` — confirmed present at line 61.
- Lines 96–98 (Warning): `Nodes offline at round initialisation miss that round's reward. There is no retry.` — confirmed at lines 96–98.
- Line 209: `There is no universally correct setting.` — confirmed at line 209.

All three are correctly identified and correctly categorised. P46 is satisfied.

---

### Issue 3: Proposed fixes for `not [X]` constructions — CC-3 fix for line 61 is clean; Warning fix needs checking (P44)
**Severity:** LOW
**Check affected:** Fix List F-07 / CC-3
**Finding in original:** CC-3 proposes:
- Line 61: Delete "There is no catch-up mechanism." as redundant (positive restatement already present)
- Lines 96–98 Warning: "There is no retry." → "Nodes offline at round initialisation forfeit that round's reward permanently."
- Line 209: "There is no universally correct setting." → "The optimal setting depends on your growth stage and delegation target."

**What is correct for line 61:** The positive restatement "A missed round is a permanently forfeited allocation." is already present. Deleting "There is no catch-up mechanism." removes a redundant `not [X]` without losing content. Clean fix.

**What needs attention for the Warning fix:** The proposed replacement "Nodes offline at round initialisation forfeit that round's reward permanently." is a positive assertion. No banned words, no em-dashes, no `not [X]`. Clean.

**What needs attention for line 209:** "The optimal setting depends on your growth stage and delegation target." — no banned words, no em-dashes. However, `depends on` without a ranked list is a banned construction per CLAUDE.md: `'depends on' without ranked list — Add weighting and thresholds`. The fix introduces a `depends on` construction. P44 violation.

**Correction:** F-08 proposed fix must not use `depends on` without ranked weighting. Proposed alternative: "Commission strategy balances immediate per-job earnings against delegator attraction. Match your setting to your growth stage using the table below." — confirm before applying.

---

### Issue 4: Em-dash in description field not flagged (P30)
**Severity:** MEDIUM
**Check affected:** 2.4 / Banned Construction Scan
**Finding in original:** The Banned Construction Scan scope statement includes "frontmatter description." No em-dash was found there.
**What is wrong:** The frontmatter description at line 4–8 of the source file contains an em-dash:
`Protocol reward mechanics for Livepeer orchestrators — how LPT inflation flows, calling Reward() automatically and manually, gas thresholds on Arbitrum, fee redemption, setting commission, and monitoring for missed rounds.`
P30 explicitly covers the frontmatter description field. This is a missed violation.

Additionally, there are em-dashes in body prose that were correctly caught (line 59: `The more stake you have bonded — your own plus delegated`, line 69: `declining — bonded participation...`, line 75 heading `Calling Reward() — your options`). Wait — the heading `## Calling Reward() — your options` at line 75 contains an em-dash. P30 covers H2/H3 headings. This heading was scored in the Heading Score Table at 20/25 (boundary pass) but the em-dash in the heading text was not flagged as a P30 violation.

**Verification:** Source file line 75: `## Calling Reward() — your options` — confirmed em-dash present.

**Correction:** F-03 (currently: "Delete `Read this page to...`") does not cover em-dashes. The em-dash violations need a new finding (or extension of existing em-dash scope). Specifically:
- Description field line 5: em-dash must be replaced with colon or restructured
- Heading at line 75: `## Calling Reward() — your options` → `## Calling Reward(): Your Options` or `## Reward() Calling Options` — confirm before applying

Note: The description field em-dash means F-01 (shorten description) must also produce a replacement without em-dashes. The proposed F-01 fix `How LPT reward calling works for Livepeer orchestrators — automatic and manual options, Arbitrum gas costs, commission setting, and monitoring for missed rounds.` also contains an em-dash. Both F-01 and the new em-dash finding must produce clean replacement text.

---

### Issue 5: P39 — veracityStatus fix is internally consistent
**Severity:** N/A — confirming correctness
**Check affected:** 1.8
**Finding in original:** Recommends adding `veracityStatus: unverified` to a page with `status: published`.
**What is correct:** P39 applies to `status: current`. The file uses `status: published`. No P39 constraint is violated. The fix is correct.

---

### Issue 6: Verdict fail count — 3.2 result PASS is correct; overall count holds
**Severity:** LOW
**Check affected:** Verdict / P49
**Finding in original:** "21 checks fail (1 BORDERLINE): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 2.5, 3.1, 3.7, 4.7 (BORDERLINE), 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1"

**What is correct:** Check 3.2 is PASS in the report (the check table row says PASS). It does not appear in the failing IDs. The `Related` issue (Issue 1 above) affects the note text and F-11 rationale but does not change the verdict count — check 3.2 is not in the failing list.

The missed em-dash violations (description field, heading at line 75) are sub-findings of the already-failing check 2.4. No new check IDs are added. The count of 21 failing check IDs is numerically correct given the checks as assessed.

The F-08 proposed fix for line 209 introduces a `depends on` construction (Issue 3 above) — this is a fix quality problem, not a count problem.

**Adjusted count:** 21 checks fail (IDs unchanged). No count correction needed.

---

### Issue 7: H3 headings in scope for check 3.1 — blocking decision correctly raised
**Severity:** N/A — confirming correctness
**Check affected:** Blocking Decisions / check 3.1
**Finding in original:** Blocking Decision raised: "Confirm whether H3 headings are in scope for the 20/25 threshold. If in scope: apply F-12. If out of scope: mark F-12 N/A."
**What is correct:** The check correctly escalates this as a blocking decision rather than assuming. Per P52, blocking decisions with two options must present both neutrally. The framing here is "If in scope / If out of scope" — neutral and correct. No error.

---

## Confirmed Correct Findings

- P41 (industry/niche): Both flagged as FAIL with concrete proposed values. Correct.
- P15 (purpose read directly): `purpose: guide` read from frontmatter directly. Correct.
- P37 (purpose: guide): Correctly characterised as wrong-field error type (b) — valid pageType value in purpose field. Not deprecated alias. Correct.
- P42 (pageVariant): N/A with reason. Correct.
- P50 (valid pageType): `guide` is canonical 7-type; check 1.2 PASS. Correct.
- P51 (proposed values format): All frontmatter proposals follow "Proposed: `field: value` — confirm before applying". Correct.
- P46 (`not [X]` under 2.4, not 2.2): All three instances correctly categorised under check 2.4. Confirmed. Check 2.2 PASS is correct.
- P29 (line numbers verified): All three `not [X]` instances verified against source at cited lines (61, 96–98, 209). Content quoted matches. Correct.
- P28 (result column matches detail): Check 3.2 shows PASS in result column and detail text notes no 3.2 violations before the note paragraph. Check 3.7 shows FAIL. Consistent. Correct.
- P33 (broken link verification): Internal links verified against docs.json with specific line citations. Correct.
- P35 (findings against current state): All findings evaluate current file state. Correct.
- P36 (severity levels): Only CRITICAL/HIGH/MEDIUM/INFO. Correct.
- P43 (finding IDs): F-01 through F-13 unique and sequential. Correct.
- P45 (one canonical fix per finding): CC-3 has one canonical fix per `not [X]` instance. Correct.
- P48 (step titles in scope): No step title props (StyledStep) used in this file. N/A — no missed scope.
- P52 (INFO rows neutral): Category 9 INFO rows and blocking decision framing are neutral. Correct.
- P54 (check 2.1 UK English only): Check 2.1 covers only UK/US spelling. Correct.
- P39 (veracityStatus fix consistent): `status: published` not `status: current` — P39 does not apply. Correct.
- Heading score for `Calling Reward() — your options`: Scored at 20/25 boundary pass. The em-dash in the heading is a P30 violation flagged separately in Issue 4, not a scoring issue per se. The score itself may be reasonable.

---

## Corrected Verdict

**Rating:** NEEDS REWORK — one significant mischaracterisation in note text (check 3.2 note for `Related`), one fix that introduces a new violation (F-08 `depends on`), and two missed em-dash instances (description field, H2 heading at line 75).

**Corrected fail count:** 21 checks fail (IDs unchanged): 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 2.5, 3.1, 3.7, 4.7 (BORDERLINE), 5.7, 6.1, 6.2, 6.4, 6.5, 6.6, 6.8, 6.9, 9.1

**Required corrections before this report is used for remediation:**
1. Rewrite the check 3.2 note: `Related` is OK tier per checks.mdx §3.2. Remove "must be scored and flagged" language that implies a 3.2 violation. Check 3.1 failure (11/25) and check 3.7 failure (editorial judgment) are independent and may stand.
2. Rewrite F-11 rationale: rename to `## Related Pages` is valid if the intent is to adopt the approved structural element — reframe accordingly.
3. Rewrite F-08 proposed fix: remove `depends on` construction. Propose alternative without the banned pattern.
4. Add new finding for em-dashes in the description field (line 5) and H2 heading at line 75 (`## Calling Reward() — your options`). These are sub-findings of check 2.4 which already fails — no new check ID, but Fix List must include these instances.
5. Revise F-01 proposed description text: the current replacement contains an em-dash and would fail P30.
