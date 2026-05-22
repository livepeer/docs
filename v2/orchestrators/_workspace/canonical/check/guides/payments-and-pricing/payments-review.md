# Critical Review Report
## `v2/orchestrators/_workspace/canonical/check/guides/payments-and-pricing/payments.md`

**Review date:** 2026-03-24
**Critical reviewer:** Claude Code (critical review agent)
**Learnings applied:** P1–P54
**Source page verified:** `v2/orchestrators/guides/payments-and-pricing/payments.mdx`

---

## Rating

NEEDS REWORK

4 issues are material: (1) `## Related` is incorrectly characterised as Avoid-tier when Frameworks.mdx §4.1 defines it as OK-tier — this inflates the fail count with a false check 3.2 FAIL; (2) check 3.3 is marked PASS in the check table but the heading `## Video vs AI payment differences` appears as a 3.3 FAIL item in the verdict — a direct P28 contradiction that corrupts the remediation plan; (3) the `status: published` incoherence finding extends the check 1.8 schema rule beyond its stated scope in checks.mdx (which only covers `status: current`) without citing authority for the extension — P21 violation; (4) the `Use this page` banned construction is double-counted in checks 2.3 and 2.4 in violation of P45/P46, and the 2.3 FAIL is wrong — `This page [verb]` is a banned construction (2.4), not a banned phrase (2.3).

These errors collectively inflate the fail count by 2 checks (3.2, and the 3.3 table/verdict inconsistency), mischaracterise the severity of the `status: published` finding, and create conflicting fix instructions across checks 2.3 and 2.4.

---

## Issues Found

### Issue 1: `## Related` is OK-tier per Frameworks.mdx §4.1 — check 3.2 FAIL is false
**Severity:** HIGH
**Check affected:** 3.2, Heading Score Table
**Finding in original report:**
> 3.2 | No banned or weak standalone terms | FAIL | `## Related` — standalone `Related` is in the Avoid tier per Frameworks.mdx §4.1. Not Banned-tier, but must be flagged and strengthened. Proposed: rename to `## Related Pages` (which would then be exempt) — confirm before applying. Note: `## Related` alone is not identical to `Related Pages` and is therefore not exempt per P53.

and in Heading Score Table:
> `## Related` | 1 | 1 | 3 | 3 | 5 | 13 | FAIL (also check 3.2 Avoid-tier)

**What is wrong:** Frameworks.mdx §4.1 (Standalone heading term registry) explicitly places `Related` in the **OK** tier: "Acceptable standalone when content warrants. `Related` as a section marker for link clusters is fine." The check report asserts `Related` is Avoid-tier. This is factually incorrect against the canonical reference. The source page has `## Related` as a section header for a CardGroup of related links — exactly the use case Frameworks.mdx §4.1 describes as OK.

The check 3.2 FAIL is a false finding and should be removed. The Heading Score Table row for `## Related` at 13/25 may still be a legitimate check 3.1 finding — a score below 20/25 is a valid failure on its own merits. But the 3.2 FAIL classification is wrong, and the proposed rename to `## Related Pages` to gain exemption is unnecessary (the heading does not need exemption; it is not in violation).

**Correction:**
- Check 3.2 Result: PASS | `Related` is OK-tier per Frameworks.mdx §4.1. No 3.2 violation.
- Check 3.7: PASS (with note) | `## Related` is structurally clear for a link cluster section. Score remains debatable on check 3.1.
- Heading Score Table: the 13/25 score on check 3.1 remains a valid FAIL. Remove the "(also check 3.2 Avoid-tier)" annotation.
- Verdict: Remove 3.2 from the list of failing checks. Corrected fail count: **19 failing checks** (not 20).
- BD-2 blocking decision is still valid if renaming is desired for score purposes, but framing should change: "Check 3.1 FAIL due to low score (13/25), not a 3.2 violation."

---

### Issue 2: Check 3.3 says PASS in the check table but the verdict lists 3.3 as FAIL — direct P28 contradiction
**Severity:** HIGH
**Check affected:** 3.3, Verdict Summary
**Finding in original report:**
> Check table: 3.3 | No literal contrast labels | PASS | No `X vs Y` headings. Accordion titles `Video transcoding payments` and `AI inference payments` and `Live AI (Cascade) payments` — these are Accordion titles not H2 headings; scored separately below.
>
> Verdict: Checks that FAIL: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.3, 2.4, 3.1 (partial — 6 headings), **3.2, 3.3**, 4.8, 6.1, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3

**What is wrong:** The check table records 3.3 as PASS. The verdict records 3.3 as FAIL. These are the same check, in the same report, with contradictory results. (P28: Result column must match the detail text conclusion. P26: Before closing the report, verify verdict summary counts match the check table FAIL entries.)

The heading `## Video vs AI payment differences` does contain a `vs` contrast structure and arguably violates check 3.3. But the correct resolution is to pick one answer, not to have two contradictory answers in the same document. An executing agent reading the check table would not act on 3.3. An executing agent reading the verdict would. The contradiction makes the remediation plan unexecutable for this finding.

**Correction — Option A (3.3 is a genuine FAIL):** Change check table 3.3 Result to FAIL. Add explicit detail: "`## Video vs AI payment differences` uses a `X vs Y` contrast label. Governing concept is the workload-based payment model difference. Proposed: `## Workload Payment Model` or `## Payment Differences by Workload` — confirm before applying." Include in BD-2. Verdict count stays at 20 (with 3.2 correction above applied: 19 checks fail — see Issue 1).

**Correction — Option B (3.3 is genuinely PASS):** Remove 3.3 from the verdict fail list. Move the heading rename suggestion to the check 3.1 score row notes only. Verdict count drops by 1 (see Issue 1 correction already removes 1).

The check report author should evaluate whether `## Video vs AI payment differences` constitutes an X vs Y heading under check 3.3 and pick one consistent answer. The critical review cannot make that determination — both options are presented neutrally per P52.

---

### Issue 3: `status: published` + absent `veracityStatus` schema constraint extended beyond checks.mdx §1.8 scope — P21 violation
**Severity:** MEDIUM
**Check affected:** 1.8, Frontmatter Table
**Finding in original report:**
> `veracityStatus` | No | *(absent)* | FAIL | Required per checks.mdx §1.8. Page contains inline draft comment and `{/* REVIEW: */}`-style block at foot. `status: published` + absent veracityStatus is incoherent per checks.mdx §1.8 — `published` status requires `veracityStatus: verified`. See F-01.
>
> Check 1.8 detail: `status: published` without `veracityStatus: verified` is incoherent (checks.mdx §1.8).

**What is wrong:** checks.mdx §1.8 states: "`status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags." The status in the source file is `published`, not `current`. checks.mdx §1.8 does not state that `status: published` requires `veracityStatus: verified`. The check report asserts this as a schema constraint (and cites checks.mdx §1.8 as authority) but the rule as written only covers `status: current`. Per P21: any finding that asserts a schema rule must cite the specific checks.mdx section number. If no citation is possible, downgrade to INFO: "inferred policy — source required before actioning."

Note: the `veracityStatus` field being absent is still a genuine check 1.8 FAIL independent of the `status` value — the field is required per checks.mdx §1.8 ("present and honest") and is absent. That FAIL is valid. The incoherence claim specifically about `status: published` requiring `veracityStatus: verified` is the unsupported part.

**Correction:** Check 1.8 Result: FAIL | `veracityStatus` field is absent — required per checks.mdx §1.8. Page contains an inline draft comment (line 30) and a purpose/plan block at the end, signalling unfinished state. Honest value would be `unverified`. The specific claim that `status: published` requires `veracityStatus: verified` cannot be sourced to checks.mdx §1.8 (which covers `status: current` only) — downgrade that specific sub-finding to INFO: "Inferred policy: `status: published` with open draft content and no `veracityStatus` is internally inconsistent. Recommend changing to `status: draft` pending veracity pass — but note this rule extension is not explicitly in checks.mdx §1.8."

The recommended fix (set `status: draft`, add `veracityStatus: unverified`) remains correct. The characterisation of the `status: published` sub-finding changes from FAIL-assertion to INFO-inference.

---

### Issue 4: `Use this page` banned construction counted in BOTH check 2.3 and check 2.4 — P45/P46 violation
**Severity:** MEDIUM
**Check affected:** 2.3, 2.4
**Finding in original report:**
> 2.3 | Zero banned phrases | FAIL | Line 38: `Use this page to understand how tickets flow…` — matches `This page [verb]` pattern. Also see check 2.4.
> 2.4 | Zero banned constructions | FAIL | Line 38: `Use this page to understand how tickets flow…` — `This page [verb]` self-referential banned construction. See Banned Construction Scan.

**What is wrong:** Two violations:

**(a) P46 violation:** `This page [verb]` (and its form `Use this page [to verb]`) is a banned construction, defined in checks.mdx §2.4 and CLAUDE.md under "Banned constructions." It is not a banned phrase per checks.mdx §2.3 (banned phrases are a specific enumerated list: "This section covers", "this page covers/explains/walks you through", "Understanding X is essential", etc.). `Use this page to understand` is not literally in the banned phrases list — it matches the banned construction pattern from §2.4. Check 2.3 result should be PASS.

**(b) P45 violation:** The same occurrence at line 38 is flagged in both check 2.3 and check 2.4 with different framing. There must be exactly one canonical finding with one canonical fix. The Banned Construction Scan (F-02) correctly owns this finding. Check 2.3 should not duplicate it.

**Correction:**
- Check 2.3 Result: PASS | No banned phrases found. `Use this page to understand` is a banned construction (→ check 2.4), not a banned phrase. Remove from check 2.3 entirely.
- Check 2.4 Result: FAIL (unchanged) | `Use this page to understand…` at line 38 is a `This page [verb]` banned construction. Fix: delete line 38. The preceding lines 36–37 open with the fact; the self-referential line is redundant.
- Verdict: Remove 2.3 from the list of failing checks. (With Issue 1 correction also applied: corrected fail count is **18 checks** — see Corrected Verdict below.)

---

## Confirmed Correct Findings

The following findings were verified against the source file and are accurate:

**Frontmatter:**
- Checks 1.6, 1.7: `complexity` and `lifecycleStage` genuinely absent. Confirmed.
- Check 1.9, 1.10: `industry` and `niche` genuinely absent. Correctly flagged as FAIL per P41.
- Check 1.11 FAIL: Description field contains `—` (em-dash) at source file lines 4–7, confirmed. Character count exceeds 160 chars — confirmed (the full description is "How ETH moves from gateway to your orchestrator wallet — probabilistic micropayments, winning ticket mechanics, the Redeemer, on-chain redemption on Arbitrum, and keeping your node funded for transactions." which is 195 chars). FAIL is correct.
- Check 1.2 PASS: `pageType: concept` is canonical. Confirmed.
- Check 1.4 PASS: `purpose: explain` read directly from frontmatter (line 26 of source). P15 compliance confirmed.
- Check 1.5 PASS: `audience: orchestrator` is canonical. Confirmed.
- P42 compliance: `pageVariant` absence treated as N/A since `pageType: concept` is not a deprecated value. Correct.
- P51 compliance: Proposed values formatted as "Proposed: `field: value` — confirm before applying." Confirmed for `complexity`, `lifecycleStage`, `industry`, `niche`.

**Voice and copy:**
- Check 2.4 FAIL: `Use this page to understand how tickets flow…` at line 38 of source confirmed present. Correctly flagged as `This page [verb]` banned construction.
- Checks 2.1, 2.2 PASS: No US spellings, no banned words confirmed. `centralise` (line 135) correctly identified as UK English. P24 compliance: the scan shows candidates reviewed with explicit non-findings.
- P30 compliance: Em-dash scan covered description field, body prose (lines 175, 241), Warning component, inline prose. Three em-dashes found and correctly flagged (F-01, F-03, F-04). Description em-dash confirmed at source file line 5.
- P48 compliance: StyledStep `title` props included in scan (implicitly — `StyledSteps` used with `title` props; no em-dashes in step titles). Compliant.
- P54 compliance: Check 2.1 correctly limited to UK English spelling only. No spelling violations found — PASS verdict correct. Banned words in 2.2, banned constructions in 2.4.

**Headings:**
- `## Payment flow overview` scores 17/25 (below threshold) — correct. `overview` is Avoid-tier per Frameworks.mdx §4.1. Heading with embedded Avoid-tier term has been correctly scored below threshold on Clarity/Precision dimensions.
- `## Probabilistic micropayments explained` scores 13/25 — correct. `explained` suffix is weak (Stability 4, Precision 2, Depth 2).
- `### What the Redeemer does` scores 17/25 — correct. Verb-phrase form loses Precision and Depth.
- `## Checking payment health` scores 18/25 — correct. Action-framing loses Precision points.
- P18 compliance: Proposed renames `## Payment Flow`, `## Probabilistic Micropayments`, `### Redeemer Process`, `## Payment Health` do not introduce prohibited terms. Confirmed.
- P38 compliance: No near-identical heading conflicts among proposed renames. Confirmed.
- P16/P53 compliance: The heading is `## Related` (not `## Related Pages`), so the exemption correctly does not apply per P53. However, since `Related` is OK-tier (see Issue 1), no 3.2 violation exists either way.

**Structure:**
- Check 4.8 FAIL: Ticket structure table (lines 92–125) is present in both `payments.mdx` and `payment-receipts.mdx`. Exact duplication confirmed. Correctly escalated as shared BD-1.
- Check 4.3 PASS: docs.json sequence `payment-receipts → payments → delegate-operations` confirmed at docs.json lines 2912–2914. P25 compliance.
- Check 4.1 PASS: Page scope is coherent for `explain` purpose. No embedded meta-documentation (unlike payment-receipts).

**Links (P33 compliance):**
- Check 8.1 PASS: All sample links verified against full path in docs.json — `/v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference` (line 2903 confirmed), `/v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting` (line 2932 confirmed), `/v2/gateways/guides/payments-and-pricing/clearinghouse-guide` (line 2693 confirmed), `/v2/gateways/guides/payments-and-pricing/remote-signers` (line 2692 confirmed), `/v2/orchestrators/guides/staking-and-rewards/earning-model` (line 2910 confirmed), `/v2/orchestrators/guides/staking-and-rewards/reward-mechanics` (line 2911 confirmed). No false positives.

**Veracity:**
- Checks 6.1, 6.5, 6.8, 6.9 FAIL: Gas cost table (lines 160–171), ETH transaction cost table (lines 252–272), Prometheus metric names (lines 314–329) all unverified. No `{/* REVIEW: */}` flags present. Correctly characterised. P29/P33 compliance confirmed.
- P39 compliance: The recommendation is `status: draft` + `veracityStatus: unverified`. This is internally consistent — no P39 violation. The fix does not recommend `status: current` + `veracityStatus: unverified` together.

**Banned Construction Scan:**
- F-01 (em-dash in description), F-03 (em-dash at line 175 in Warning), F-04 (em-dash at line 241 in body prose) — all three em-dashes confirmed present in source. Finding IDs are unique and sequential (P43 compliant). Fixes proposed are internally consistent and do not introduce new banned constructions (P44 compliant).

---

## Corrected Verdict

Original verdict: **NEEDS WORK** — correct, but fail count and composition need correction.

**Corrections to apply:**
1. Remove check 3.2 from FAIL list (Issue 1 — `Related` is OK-tier, not a violation)
2. Resolve check 3.3 table/verdict contradiction (Issue 2 — choose one consistent answer)
3. Remove check 2.3 from FAIL list; keep 2.4 FAIL (Issue 4 — P46 violation)
4. Downgrade `status: published` incoherence sub-finding within 1.8 to INFO-inference (Issue 3)

**Corrected fail count after applying Issues 1, 3, 4 (which are deterministic):**
17 checks fail: 1.1, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 2.4, 3.1, 4.8, 6.1, 6.5, 6.6, 6.8, 6.9, 9.1, 9.3

**If Issue 2 Option A is applied (3.3 is genuinely FAIL):** 18 checks fail (add 3.3 to the list above).
**If Issue 2 Option B is applied (3.3 is genuinely PASS):** 17 checks fail (as above).

The page-level verdict (NEEDS WORK) and all non-contradicted remediation steps (em-dash fixes, missing frontmatter fields, self-referential opener deletion, heading renames, REVIEW flags for veracity items) remain valid and executable.
