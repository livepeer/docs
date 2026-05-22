# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/payments-and-pricing/payment-receipts.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54
**Source page verified:** `v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx`

---

## Rating

MOSTLY RELIABLE

3 issues found: one wrong line number in the Banned Construction Scan that creates a false secondary finding (P29), one Result/Detail inconsistency on check 3.1 (P28), and one verdict count item that conflates two scan entries into one finding. All are correctible without structural rework. No false CRITICAL findings that corrupt the remediation plan. All primary failures (missing frontmatter, duplicate table, embedded draft heading, open FACT CHECK items) are correctly identified and accurately characterised.

---

## Issues Found

### Issue 1: Banned construction at "line 39" does not exist — wrong line number creates a phantom second occurrence
**Severity:** MEDIUM
**Check affected:** 2.4, Banned Construction Scan
**Finding in original report:**
> Line 39: `Use this page for the receiver-side mechanics of PM tickets` — self-referential banned construction (check 2.4) — YES — F-03

and later in the Banned Construction Scan summary:
> `Use this page` opener at line 38 in the overlapping scope paragraph. This is a self-referential `This page [verb]` construction.

**What is wrong:** Line 39 in the actual source file contains the factual opener paragraph: "Gateways pay orchestrators using **probabilistic micropayments (PM)**: a system where each job generates a signed ticket..." This is not a banned construction — it is a clean, fact-first opening sentence. The `Use this page for the receiver-side mechanics` text appears only once, at line 240, inside the `### Overlapping scope with payments.mdx` section. The check report lists it at "line 39" in the scan table and then again at "lines 238–240" — creating the impression of two occurrences. There is only one. (P29: every cited occurrence must be verified against the actual file before reporting; cite line number only after quoting the content there.)

**Correction:** The Banned Construction Scan should contain a single entry for F-03 (not two), at line 240. The scan table entry for "line 39" should be removed. The summary should read: "One banned construction found: `Use this page for the receiver-side mechanics…` at line 240 (within the `### Overlapping scope with payments.mdx` section). Consistent with F-01 root cause — removing that section resolves the construction automatically."

---

### Issue 2: Check 3.1 — Result column says "PASS (with one FAIL)" but the category verdict lists it as a plain FAIL
**Severity:** LOW
**Check affected:** 3.1
**Finding in original report:**
> Category 3 FAIL checks (from verdict): 3.1 (partial)
> Check 3.1 Result: PASS (with one FAIL) | See Heading Score Table below. `## Overlapping scope with payments.mdx` scores 10/25 — FAIL.

**What is wrong:** A "PASS (with one FAIL)" Result value is self-contradictory. A check either passes or fails. If any scored heading fails the 20/25 threshold, check 3.1 is FAIL — not "PASS with caveat." The heading score table shows four headings below the threshold: `## Monitoring payment receipts` (17/25), `### Verifying redemption is working` (15/25), `### Zero earnings for a long period` (19/25), and `## Overlapping scope with payments.mdx` (6/25). All four fail. The Result column should read FAIL with a note of how many headings failed. The check count in the verdict (18 failing checks) is not affected since 3.1 is listed as FAIL there — but the Result field itself is incorrect. (P28: Result column must match the detail text conclusion.)

**Correction:** Check 3.1 Result: **FAIL** | 4 headings score below 20/25 threshold. See Heading Score Table. (The verdict count of 18 is accurate as-is — 3.1 is already listed as FAIL.)

---

### Issue 3: Heading Score Table note for `## Monitoring payment receipts` — proposed rename uses incomplete score justification
**Severity:** LOW
**Check affected:** 3.1
**Finding in original report:**
> Proposed: `## Redemption Monitoring` (P | D | S | C | Con: 4/4/5/5/5 = 23)

**What is wrong:** The score breakdown for the proposed rename is formatted as "P | D | S | C | Con: 4/4/5/5/5 = 23" — this is a non-standard partial format. The report's own Heading Score Table uses full column entries (Precision, Depth, Stability, Clarity, Conciseness). While this is a minor formatting inconsistency, the proposed score is internally consistent (4+4+5+5+5 = 23) and the proposal is actionable. This is a trivial formatting issue, not a correctness problem.

**Correction:** Reformat as standard row if the score table is updated: `## Redemption Monitoring` | 4 | 4 | 5 | 5 | 5 | 23 | PASS. The substance is correct.

---

## Confirmed Correct Findings

The following findings were verified against the source file and are accurate:

**Frontmatter:**
- Checks 1.1, 1.4, 1.6, 1.7: `purpose`, `complexity`, `lifecycleStage` are genuinely absent from the frontmatter. Confirmed.
- Checks 1.8, 1.9, 1.10: `veracityStatus`, `industry`, `niche` genuinely absent. Two open `{/* FACT CHECK: */}` comments exist at lines 158 and 226. Confirmed.
- Check 1.2 PASS: `pageType: concept` is canonical. Confirmed.
- Check 1.5 PASS: `audience: orchestrator` is canonical. Confirmed.
- P15 compliance: `purpose` correctly reported as absent (field not in frontmatter) — not inferred from pageType.
- P42 compliance: `pageVariant` absence correctly treated as N/A (no deprecated pageType present, no migration needed).
- P51 compliance: All proposed frontmatter values formatted as "Proposed: `field: value` — confirm before applying."

**Voice and copy:**
- Check 2.4 FAIL: The `Use this page for the receiver-side mechanics` banned construction at line 240 is confirmed present in source. Correctly flagged.
- Checks 2.1, 2.2, 2.3 PASS: No US spellings, no banned words, no banned phrases found. The scan table shows the work (P24 complied with). `behaviour` at line 34 correctly identified as UK English.
- P30 compliance: Em-dash scan covered headings, description, body prose, component props, CustomDivider middleText props. No em-dashes found in any location — PASS verdict correct.
- P48 compliance: CustomDivider middleText props (`How Tickets Arrive`, `Win Condition`, `The Redeemer`, `Monitoring`) included in banned construction scan scope.

**Headings:**
- `## Overlapping scope with payments.mdx` scores 6/25 — correct. The heading is a draft note embedded in published content.
- `## Related pages` (line 244, lowercase) correctly exempted per P16. The heading uses `Related` as an OK-tier term even without the exemption, so no 3.2 issue.
- `### Verifying redemption is working` (15/25) and `### Zero earnings for a long period` (19/25) — both below threshold. Scores verified as consistent with rubric dimensions.
- P18 compliance: Proposed renames `## Redemption Monitoring`, `### Redemption Verification`, `### Earnings Gaps` do not use prohibited terms (`Types`, `Profiles`, `Modes`, `Overview`, `Basics`, `Details`, `Information`, `Getting Started`). Confirmed.
- P38 compliance: `### Earnings Gaps` and `### Redemption Verification` checked — no near-identical headings on the same page.

**Structure:**
- Check 4.1 FAIL: `## Overlapping scope with payments.mdx` is meta-documentation embedded in content. Correctly flagged.
- Check 4.8 FAIL: The 7-field ticket structure table is present in both `payment-receipts.mdx` (lines 68–105) and `payments.mdx` (lines 92–125). Confirmed exact duplication. Correctly escalated as BD-1.
- Check 4.3 PASS: docs.json sequence `reward-mechanics → payment-receipts → payments` confirmed at docs.json line 2912.

**Links:**
- Check 8.1 PASS: All verified links confirmed in docs.json — `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (line 2921), `/v2/orchestrators/guides/payments-and-pricing/payments` (line 2913), `/v2/gateways/guides/payments-and-pricing/payment-guide` (line 2689), `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` (line 2911). All valid (P33 compliance confirmed).
- Check 7.6 PASS: Cross-tab link to `/v2/gateways/guides/payments-and-pricing/payment-guide` correctly confirmed at docs.json line 2689.

**Veracity:**
- Checks 6.1, 6.5, 6.8, 6.9 FAIL: Two open `{/* FACT CHECK: */}` comments present (lines 158, 226). Gas cost figures and log message strings both unverified. Correctly characterised as FACT CHECK format rather than the required `{/* REVIEW: [claim] — [what needs checking] */}` per checks.mdx §6.5.
- P39 compliance: The recommendation is `veracityStatus: unverified` on a page with `status: draft`. This is internally consistent — no violation.

**Process:**
- Checks 9.1, 9.3 FAIL: `status: draft` with no sign-off and IA not yet approved. Correctly flagged. No P21 violation — the check correctly notes gate status without inventing a schema constraint.

**Verdict count:** 18 failing check IDs listed — accurate. All 18 can be verified against the check table entries.

---

## Corrected Verdict

The original verdict stands: **NEEDS WORK**

**Corrected fail count:** 18 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 2.4, 3.1, 4.1, 4.8, 6.1, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3

The remediation plan (F-01 through F-05) is correct and executable. The F-03 finding (remove the `## Overlapping scope with payments.mdx` section) resolves both the banned construction and the structural issue — the check report correctly identifies this dependency. No findings should be added or removed based on this review. The only correction needed is removing the phantom "line 39" entry from the Banned Construction Scan and marking check 3.1 as FAIL (not "PASS with one FAIL").
