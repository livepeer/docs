# Section Summary — `guides/payments-and-pricing`

**Generated:** 2026-03-24
**Source reports:** `payment-receipts.md`, `payments.md` (check reports) + `payment-receipts-review.md`, `payments-review.md` (critical reviews)
**Critical reviews applied:** P1–P54 (check reports), P1–P57 (critical reviews)
**Authority:** Critical review findings supersede check report findings where they conflict.

---

## 1. Overview Table

| Page | Verdict | Corrected fail count | Primary issues |
|---|---|---|---|
| `payment-receipts.mdx` | NEEDS WORK | 18 | Missing frontmatter fields (6); duplicate ticket structure table with payments.mdx (BD-01); draft meta-heading `## Overlapping scope` embedded in published content |
| `payments.mdx` | NEEDS WORK | 17–18 (see note) | `status: published` incoherent state; missing frontmatter fields (5); em-dashes in description, Warning, and body prose; 6 failing headings; no REVIEW flags on any unverified claim |

**Note on payments.mdx count:** The critical review corrects the check report's count of 22 down to 17 or 18. Deterministic corrections remove checks 2.3, 3.2, and reclassify 1.8 sub-finding to INFO (-3). Whether check 3.3 is FAIL or PASS is unresolved (Issue 2, Option A = 18, Option B = 17 — see BD-03 below).

---

## 2. Shared Root Causes

These root causes apply to both pages. Log once, remediate once where possible.

**Root Cause A — Missing frontmatter fields**
Both pages are missing `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. `payment-receipts.mdx` is additionally missing `purpose`. Same proposed values for both: `complexity: intermediate`, `lifecycleStage: operate`, `veracityStatus: unverified`, `industry: [technical, economics]`, `niche: [protocol, infrastructure]`. All values require human confirmation before applying (P51).

**Root Cause B — Duplicate ticket structure table (BD-01)**
The 7-field ticket structure table is identical, verbatim, in both pages:
- `payment-receipts.mdx` lines 68–105
- `payments.mdx` lines 92–125

Also duplicated: win condition formula (1/1000 × face value), Redeemer description, gas cost table (100k–200k gas, 0.01–0.1 gwei, $0.01–$0.05), and minimum 0.01 ETH requirement. This is one structural problem requiring one decision. Requires Alison sign-off before structural edits to either page.

**Root Cause C — File path / nav group mismatch (BD-02)**
Both files live in `v2/orchestrators/guides/payments-and-pricing/` but docs.json places both in the "Staking and Earning" nav group. No `payments-and-pricing` nav group exists for the orchestrators tab. Affects both pages identically (check 7.7 FAIL on both). Resolve once for both files.

**Root Cause D — Gate prerequisites not met**
Both pages fail checks 9.1 and 9.3: IA not approved, terminology not locked, content pass not open. These are project-level blockers, not page-level issues.

**Root Cause E — Unverified factual claims with no REVIEW flags**
Both pages contain unverified gas cost figures, ETH cost data, and technical claims with no `{/* REVIEW: [claim] — [source] */}` markers. `payment-receipts.mdx` uses a non-canonical `{/* FACT CHECK: */}` format instead. `payments.mdx` has no flags at all. Same underlying veracity problem, different surface expression.

---

## 3. Blocking Decisions

All blocking decisions require human sign-off before the relevant remediations can proceed.

| BD-ID | Decision | Page(s) | Blocks |
|---|---|---|---|
| BD-01 | Content overlap: which page owns ticket structure table, win condition formula, Redeemer description, gas costs, ETH minimum? Option A: hard boundary (payment-receipts owns receiver-side only; all shared content moves to payments). Option B: merge payment-receipts into payments and deprecate/redirect. | Both | All structural content edits to both pages (checks 4.1, 4.8 on payment-receipts; check 4.8 on payments) |
| BD-02 | File path vs nav group mismatch. Option A: move both files to `v2/orchestrators/guides/staking-and-rewards/` and update docs.json paths. Option B: accept directory/group mismatch as intentional. | Both | Check 7.7 on both pages |
| BD-03 | payments.mdx check 3.3: is `## Video vs AI payment differences` a literal contrast label violation? Check table says PASS; verdict says FAIL. Cannot be resolved without human judgement on whether `X vs Y` heading form violates 3.3 in this specific case. | `payments.mdx` | Final corrected fail count (17 vs 18); heading rename scope |

---

## 4. Prioritised Recommendations

Ordered by impact. CRITICAL preconditions resolved first, then HIGH fixes in dependency order.

| Priority | Severity | Fix | Page(s) | Checks resolved |
|---|---|---|---|---|
| 1 | CRITICAL | **Resolve BD-01** (content overlap / merge-or-split decision). No structural edits to either page until decided. | Both | 4.1, 4.8 (payment-receipts); 4.8 (payments) |
| 2 | CRITICAL | **Fix `status: published` → `status: draft`** on `payments.mdx` and add `veracityStatus: unverified`. Current state is incoherent: `status: published` with a draft comment on line 30, no veracity pass, no REVIEW flags. Confirm before applying. | `payments.mdx` | 1.8, 6.6, 9.1, 9.3 |
| 3 | HIGH | **Add missing frontmatter fields to both pages**: `complexity: intermediate`, `lifecycleStage: operate`, `veracityStatus: unverified`, `industry: [technical, economics]`, `niche: [protocol, infrastructure]`. Also add `purpose: explain` to `payment-receipts.mdx` (already present in payments.mdx). All values: confirm before applying (P51). | Both | 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10 (payment-receipts); 1.1, 1.6, 1.7, 1.8, 1.9, 1.10 (payments) |
| 4 | HIGH | **Fix payments.mdx description**: remove em-dash and trim to ≤160 chars. Current: 192 chars with em-dash. Proposed: `How ETH moves from gateway to orchestrator wallet via probabilistic micropayments, the Redeemer, on-chain Arbitrum redemption, and node funding requirements.` (157 chars, no em-dash). Confirm before applying. | `payments.mdx` | 1.11, 2.4 |
| 5 | HIGH | **Add REVIEW flags to all unverified claims on both pages.** payments.mdx has zero flags; payment-receipts.mdx uses non-canonical `{/* FACT CHECK: */}` format. Convert to `{/* REVIEW: [specific claim] — verify against [specific source] before publishing */}` at: gas cost tables, ETH cost tables, log message strings, Prometheus metric names, round duration (~22h), PR numbers (#3791, #3822). Named SME contact: Rick. | Both | 6.1, 6.4, 6.5, 6.8, 6.9 (both pages) |
| 6 | HIGH | **Remove self-referential openers.** payments.mdx line 38: `"Use this page to understand how tickets flow…"` — delete the line; the fact-first opener at lines 36–37 is correct. payment-receipts.mdx lines 238–240: `"Use this page for the receiver-side mechanics…"` — absorbed by F-04 below if the `## Overlapping scope` section is removed; if section survives BD-01, delete this sentence only. | Both | 2.4 |
| 7 | HIGH | **Fix three em-dashes in payments.mdx body.** (1) Line 175 Warning: replace `—` with period. Fix: `"…winning tickets expire before submission. The ETH is permanently lost."` (2) Line 241 body prose: replace `—` with period. Fix: `"…redeem them. The clearinghouse arrangement is transparent to you."` | `payments.mdx` | 2.4 |
| 8 | HIGH | **Remove `## Overlapping scope with payments.mdx` section from payment-receipts.mdx** (contingent on BD-01). The heading scores 6/25 and is a draft meta-note in published content. The cross-reference is already covered by Related Pages cards. Removing the section also resolves the banned construction at lines 238–240. | `payment-receipts.mdx` | 3.1, 3.7, 2.4 |
| 9 | MEDIUM | **Rename failing headings.** payment-receipts.mdx (3 headings): `## Monitoring payment receipts` → `## Redemption Monitoring`; `### Verifying redemption is working` → `### Redemption Verification`; `### Zero earnings for a long period` → `### Earnings Gaps`. payments.mdx (5–6 headings): `## Payment flow overview` → `## Payment Flow`; `## Probabilistic micropayments explained` → `## Probabilistic Micropayments`; `### What the Redeemer does` → `### Redeemer Process`; `## Video vs AI payment differences` → `## Workload Payment Model` (if BD-03 resolves as FAIL); `## Checking payment health` → `## Payment Health`; `## Related` → `## Related Pages`. All: confirm before applying (P51). | Both | 3.1, 3.7 (payment-receipts); 3.1, 3.2, 3.3, 3.7 (payments) |
| 10 | MEDIUM | **Resolve BD-02** (file path / nav group mismatch) once decided — move both files or accept mismatch. | Both | 7.7 (both pages) |

---

## 5. Cross-Page Structural Notes

**Content duplication (BD-01 — CRITICAL)**
Five content elements are duplicated verbatim across both pages: ticket structure table, win condition formula, Redeemer description, gas cost table, minimum ETH requirement. This is not coincidental overlap — it signals the pages were written without a clear content boundary. BD-01 must define that boundary before any content edits proceed on either page. The merge-or-split decision changes what each page owns.

**Ownership ambiguity — receiver-side vs full payment model**
`payment-receipts.mdx` currently contains conceptual PM mechanics AND operational monitoring guidance — two purposes in one page (check 4.1 FAIL). The monitoring content (Prometheus, log verification, zero-earnings diagnosis) partially overlaps with `payments.mdx`. The `## Overlapping scope` draft heading on payment-receipts.mdx is evidence that the authoring agent recognised this problem but did not resolve it. BD-01 resolution must also decide which page owns the monitoring content.

**Navigation gap — payments-and-pricing directory has no nav section**
Both files live in a directory that does not correspond to any nav group in docs.json. Readers navigating via the sidebar land in "Staking and Earning" but the files are in a `payments-and-pricing` folder. This is a structural IA artefact that will confuse future editors. BD-02 resolves it.

**Sequence coherence**
docs.json sequence `payment-receipts → payments` is logically sound: receiver-side mechanics (how tickets arrive and win) precedes full payment architecture (how ETH flows). This sequence should be preserved regardless of BD-01 outcome.

**Cross-tab links — present and valid on both pages**
Both pages carry cross-tab links to the Gateways tab (payment-guide, clearinghouse-guide, remote-signers) — all verified against docs.json. No cross-tab gap here.

---

## 6. Learnings for Future Batches

Patterns not already captured in P1–P57 that appeared in this batch's checks or reviews.

**L-1: Check 3.3 (contrast labels) — verdict/table contradiction not caught by P28**
The payments.mdx check recorded check 3.3 as PASS in the check table and FAIL in the verdict simultaneously. P28 (Result column must match detail conclusion) was insufficient to prevent this because the contradiction was between the check *table* entry and the *verdict summary* rather than within a single row. A targeted self-consistency check is needed: before finalising, the checker must verify that every check ID listed as FAIL in the Verdict Summary appears as FAIL in the check table, and vice versa.

**L-2: `status: published` is a non-canonical value — should be flagged as invalid, not merely incoherent**
Both check reports treated `status: published` as a valid status value and focused on the incoherence with missing `veracityStatus`. P57 (added in Batch 7) addresses the incoherence angle. The additional pattern: `published` is not a valid `status` value at all (valid values: `current`, `draft`). The check should flag it as an invalid value under check 1.8 before getting to the incoherence question.

**L-3: Draft meta-headings embedded in published content are a distinct failure mode**
`## Overlapping scope with payments.mdx` is not a weak heading — it is a draft authoring note that was never removed before publishing. Existing checks (3.1, 3.7) catch it through low heading scores and editorial judgement, but the root failure mode (draft scaffold left in published content) is different from a poorly written heading. Future checks should explicitly scan for headings that name other files, phases, or internal process objects as a separate structural check.

**L-4: `{/* FACT CHECK: */}` vs `{/* REVIEW: */}` format inconsistency is worth a dedicated check item**
`payment-receipts.mdx` uses a `{/* FACT CHECK: */}` format that names a person but not an authoritative source. checks.mdx §6.5 requires `{/* REVIEW: [claim] — [what needs checking] */}`. The non-canonical format passes MDX comment scanning (8.6) and is invisible to readers, but leaves open-ended human-named tasks instead of source-anchored verification steps. A format compliance check within check 6.5 would catch this pattern.

**L-5: Win probability example (1/1000) is illustrative — do not FAIL it as an unverified factual claim**
Both check reports noted the win probability formula `1/1000 × face value = fee per job` as NOT-TESTED but correctly exempted the `1/1000` figure as illustrative. Future checks should distinguish between: (a) illustrative examples used to explain a formula, and (b) claimed real-world values. Illustrative examples do not require source citations; claimed real-world values do. The distinction should be stated explicitly in the veracity claims inventory.
