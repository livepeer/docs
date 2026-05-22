# Concepts Section — Summary Index

**Date:** 2026-03-24
**Section:** `v2/orchestrators/concepts/`
**Pages reviewed:** role.mdx, capabilities.mdx, architecture.mdx, incentive-model.mdx
**Overall section verdict:** NEEDS WORK — all 4 pages fail. No page is ready to ship. Frontmatter and veracity failures are universal; copy and heading failures vary by page.

---

## Overview Table

Post-correction (false positives removed, missed findings added per critical reviews).

| Page | Overall Verdict | Frontmatter | Copy | Headings | Structure | Links | Veracity | Other Issues | Critical Review Quality |
|---|---|---|---|---|---|---|---|---|---|
| `role.mdx` | NEEDS WORK | FAIL — 6 fields missing/deprecated | FAIL — 1 banned construction, 2 undefined terms | FAIL — 1 heading below threshold | FAIL — no cross-tab links | PASS — all 5 links verified | FAIL — CRITICAL contract name conflict; 10 unverified claims | TODO block (lines 30–44, 296) | Partially reliable — 11 issues found; 3 must-fix before acting |
| `capabilities.mdx` | NEEDS WORK | FAIL — 4 fields missing | FAIL — 1 banned phrase; 1 missed CustomDivider construction | FAIL — 2 headings below threshold | PASS — cross-tab link present | FAIL — 2 broken links | FAIL — 5 unverified claims; 1 open REVIEW flag | TODO block (lines 34–48) | Not reliable as-is — 1 CRITICAL false positive corrupts top fix |
| `architecture.mdx` | NEEDS WORK | FAIL — 4 fields missing | FAIL — 3 banned constructions (1 originally missed; 2 missed by check) | FAIL — 6 headings below threshold (corrected from 7) | FAIL — no cross-tab link to Gateway | FAIL — 2 broken links (CRITICAL) | FAIL — 2 open REVIEW flags; CLI flags unverified | TODO block (lines 35–48) | Not reliable as-is — 7 issues including false positives and missed findings |
| `incentive-model.mdx` | NEEDS WORK | FAIL — 4 fields missing | FAIL — 6 banned constructions; 2 undefined terms | FAIL — 9 headings below threshold | FAIL — missing Quickstart handoff | FAIL — 3 broken links | FAIL — 8 veracity checks fail; 2 unverified factual claims without REVIEW flags | TODO block (lines 34–47); F-11 numbering collision | Partially reliable — mostly accurate but misdiagnoses pricing-strategy link; 3 arithmetic errors |

---

## Full Details Per Page

### `role.mdx`

**Post-correction findings (false positives removed; missed findings added):**

**Finding 1 — CRITICAL: Contract name conflict**
`AIServiceRegistry` (line 160) and `ServiceRegistry` (lines 201, 215–216) appear on the same page. One name is wrong. The checker originally cited lines 201 and 208, but line 208 contains no contract name; the correct citations are lines 201 and 215–216. Resolution requires go-livepeer source or the contract-addresses reference page. Until resolved, add `{/* REVIEW: verify AIServiceRegistry vs ServiceRegistry — same contract or different? Source: go-livepeer repo or contract-addresses reference */}` at both locations.

**Finding 2 — HIGH: Frontmatter failures (6 fields)**
`pageType: overview` is deprecated — fix to `pageType: concept`, add `pageVariant: overview`. `purpose: overview` is not in the 15-value set — fix to `purpose: explain`. Add `complexity: beginner`, `lifecycleStage: discover`, `veracityStatus: unverified`. Change `status: current` to `status: draft`. These are all non-blocking fixes executable without human decision.

**Finding 3 — HIGH: No cross-tab links; 3 required by check 4.10**
Zero cross-tab links on the page. Check 4.10 requires a minimum of 3. Candidate intersections: LPT staking mention (line 197–198) → Delegators tab; Gateway selection (lines 57–58, 193) → Gateways tab; governance participation (line 199) → About or Delegators tab. Blocked until Delegators and Gateways IA is approved — log in blocking-items.md until target paths are locked.

**Post-correction notes:**
- `related pages` heading: check 3.2 flag withdrawn — approved structural element, exempt.
- `significantly` (line 294): remove from check 2.2 (not a listed banned word); flag under check 2.9 only as an unquantified comparative claim. Fix: delete the sentence.
- `Operator Profiles` fix for "Who Should Operate One": `Profiles` is itself a prohibited standalone term per check 3.2. Better replacement: `Operator Configurations` or a domain-specific label.
- `ScrollableDiagram`/`CenteredContainer`: downgrade from FAIL to NOT-TESTED; authoritative list not read.
- BYOC first use: occurs at line 164 (Mermaid timeline label, inline definition not possible) and line 176 (prose, where the definition fix applies). Address both locations.
- Cascade: unverified technical term — add REVIEW placeholder at line 163; do not insert AI-generated definition.

---

### `capabilities.mdx`

**Post-correction findings (false positives removed; missed findings added):**

**Finding 1 — CRITICAL: 2 broken internal links**
Line 262: `href="/v2/orchestrators/guides/payments-and-pricing/pricing-strategy"` — wrong path prefix. Canonical docs.json path: `v2/orchestrators/guides/config-and-optimisation/pricing-strategy`. Fix: update the href.
Line 319: `href="/v2/orchestrators/guides/workloads-and-ai/job-types"` — neither the directory nor the page exists. The correct section is `v2/orchestrators/guides/ai-and-job-workloads/`. Fix: change href to `/v2/orchestrators/guides/ai-and-job-workloads/workload-options`, update label to `Workload Options`.

**Finding 2 — HIGH: Frontmatter failures (4 fields)**
`purpose: 'explain'` is already correct — the check report falsely read this as `'concept'`; the value is fine. Real missing fields: `complexity` (add `intermediate`), `lifecycleStage` (add `evaluate`), `veracityStatus` (add `unverified`). Change `status: draft`. Three fields to add, one to change.

**Finding 3 — MEDIUM: 2 headings below threshold + 1 missed banned construction**
"How Capabilities Are Advertised" scores 16/25 — rename to `Capability Advertisement`. "How Gateways Select Orchestrators" scores 15/25 — rename to `Gateway Selection Factors`. "Related Pages" heading: exempt from scoring — do not remove.
Missed by check: `CustomDivider middleText="What Orchestrators Don't Do"` (line 264) is a `not [X]` primary construction — fix to `Capability Boundaries` to match the H2 immediately below it.

**Post-correction notes:**
- Banned phrase at line 218 (`"Understanding Gateway selection is essential"`): fix is correct — delete line 218. The finding is correctly classified as a banned phrase, not a banned word.
- `if [condition]` at line 302: the check excused this under a self-invented "boundary-setter" exemption not in the framework. Flag as BORDERLINE for human review.
- The check's `status: current` rule (asserting it requires `veracityStatus: verified`) was cited without a source. Treat the `status: draft` change as process-correct but not a schema violation.

---

### `architecture.mdx`

**Post-correction findings (false positives removed; missed findings added):**

**Finding 1 — CRITICAL: 2 broken internal links**
Line 462: `href="/v2/orchestrators/resources/technical/contract-addresses"` — not in docs.json. Correct path: `/v2/orchestrators/resources/technical/x-contract-addresses`. Fix: update href.
Line 478: `href="/v2/orchestrators/guides/payments-and-pricing/payment-flow"` — does not exist on disk or in docs.json. Requires human decision: Option A — redirect to `/v2/orchestrators/guides/payments-and-pricing/payments`; Option B — create stub and hold card until it exists.

**Finding 2 — HIGH: Frontmatter failures (3 real fields) + 2 missed banned constructions**
`purpose: 'explain'` is already correct — same false positive as capabilities. Real missing fields: `complexity: advanced`, `lifecycleStage: evaluate`, `veracityStatus: unverified`. Change `status: draft`.
Missed by check: Line 374 — `"several physical configurations"` — `several` is a listed banned word. Fix: "The go-livepeer binary supports three deployment configurations." Line 156 — `"If the Orchestrator fails or is slow, the Gateway will deprioritise it"` — `if [condition]` in body prose. Fix: "Gateways deprioritise Orchestrators that fail jobs or exceed latency thresholds." Line 158 — `"The Orchestrator does not choose which Gateways to work with"` — `not [X]` as primary statement. Fix: "Gateways choose Orchestrators based on capability, price, and performance — selection runs from Gateway to Orchestrator."
Self-referential opener at line 58 (`"This page explains..."`) was correctly caught — delete line 58; reposition line 61 cross-reference after the CustomDivider.
Line 328 — `"This is what happens when a Gateway sends a job..."` — missed by check; same pattern as line 58. Delete: the H2 "Request Flow" covers this.

**Finding 3 — MEDIUM: 6 headings below threshold (corrected from 7)**
"Related Pages" is exempt — do not count or rename. Remaining 6 failures with confirmed fixes: "Orchestrator Layer Context" → `Network Layer Position`; "Orchestrator Interactions" → `Actor Relationships`; "Video vs AI Pipelines" → `Pipeline Comparison` (violates check 3.3 directly); "Lifecycle Steps" → `Job Execution Sequence`; "Setup Configurations" → `Deployment Configurations` (matches existing CustomDivider label); "Software Components" → `Node Software Stack`.

**Post-correction notes:**
- `purpose: 'concept'` false positive affects Cat 1.4, Cat 5.7, CC-4, and fix item 1 — all must be dropped.
- Heading fail count corrects from "7 of 16" to "6 of 15 scored headings" once Related Pages exemption is applied.
- Docs.json sequence is `role → capabilities → architecture → incentive-model`, not `role → architecture → capabilities → incentive-model` as the check states.
- BD-1 (Mermaid hardcoded hex): escalated correctly; TODO comment block on this page explicitly notes this as a known constraint.

---

### `incentive-model.mdx`

**Post-correction findings (false positives removed; missed findings added):**

**Finding 1 — CRITICAL: 3 broken links + misdiagnosed path**
Line 187: `/v2/orchestrators/guides/staking-and-rewards/rewards-and-fees` — absent from docs.json.
Line 408 and Related Pages card: link uses path prefix `payments-and-pricing/pricing-strategy`. The check report states this page is entirely absent — this is incorrect. The page exists at `v2/orchestrators/guides/config-and-optimisation/pricing-strategy` (docs.json line 2921). Fix: update href to `/v2/orchestrators/guides/config-and-optimisation/pricing-strategy` on both lines 408 and 441.
Related Pages card: `/v2/orchestrators/guides/staking-and-rewards/attracting-delegates` — absent from docs.json.

**Finding 2 — HIGH: 9 headings below threshold; 6 banned constructions**
Failing headings with fixes: "Two Revenue Streams" → `Earnings Structure`; "Pricing units" → `Workload Pricing Units`; "Fee distribution" → `Fee Cut Mechanics`; "The reward call" → `Reward Call Mechanics`; "Reward distribution" → `Reward Cut Mechanics`; "Payment Flow End-to-End" → `Earnings Flow`; "Operator Models" → `Operating Contexts`; "Configuring Prices" → `Pricing Configuration` (note: creates visual duplication with CustomDivider at line 354 — either rename the CustomDivider or use a distinct H2 label); "Base price" → `Base Price Flag`; "Attracting Delegators" → `Delegator Relationship`.
Note: the check narrative cites wrong scores of 17/25 and 18/25 for two headings; the score table arithmetic is correct at 15/25 for both — use the table, not the narrative.
Banned constructions confirmed: Line 182 (`not recoverable` → rewrite positive); Line 277 (`do not pay` primary Note statement → rewrite positive); Line 285 (self-referential section opener — delete); Line 310 (`if [condition]` in body prose — rewrite as assertion); Lines 323 and 346 (`rather than` — both instances). For line 310, the check's proposed fix introduces `can add` which is itself a banned construction — correct rewrite: "Operators with GPU hardware already running for mining, rendering, or other workloads add Livepeer Orchestrator processes to convert spare capacity into ETH service fees and LPT rewards."

**Finding 3 — HIGH: Veracity failures — 8 checks fail**
Two open REVIEW flags (lines 171, 274) plus unverified factual claims without REVIEW flags: line 107 "~22 hours" round duration (needs citation); line 234 "top 100 Orchestrators" (high-staleness governance parameter); pricing JSON values (lines 383–395, need CLI verification). Add REVIEW flags at all three locations. `livepeer_cli` reference at line 157 needs verification against current go-livepeer release.

**Post-correction notes:**
- F-11 numbering collision: the check uses F-11 twice (TODO comment block finding and a heading rename). Alison to decide which is authoritative before executing.
- Check 2.9 FAIL for line 63 ("structurally independent") is a false positive — that sentence is a structural description, not a passive value claim under the checks.mdx §2.9 definition.
- Check 2.4 FAIL note incorrectly attributes failure to `can/may` instances; actual violations are `rather than` (×2) and `not [X]` constructions. The FAIL verdict is correct but the attribution is wrong.
- Check 8.6 FAIL for JSX TODO comment block: the critical review argues JSX comments are not "published content" under checks.mdx §8.6, and that removing the block destroys task tracking while REVIEW flags are still open. Recommend retaining the comment block until all REVIEW flags are cleared.
- Check 9.2 logged as N/A without reading the decision registry — invalid exemption; treat as NOT-TESTED pending registry review.

---

## Common Patterns

These issues appear across all 4 pages or 3 of 4 pages:

**1. Missing required frontmatter fields — all 4 pages**
`complexity`, `lifecycleStage`, and `veracityStatus` are absent on every page. `status: current` appears on every page despite none of them having `veracityStatus: verified`. This is a systematic frontmatter completion failure, not per-page oversight. A single pass across all 4 pages can resolve it.

**2. `purpose: 'concept'` false positive — 2 of 4 pages (capabilities, architecture)**
The automated checks misread the `purpose` field on two pages, reporting `'concept'` when the actual value is `'explain'`. This false positive corrupted the top priority fix on both check reports and cascaded into multiple secondary failures. Reviewers executing against those reports must verify the actual frontmatter value before acting.

**3. TODO comment blocks in published files — all 4 pages**
Every page has a JSX `{/* TODO: */}` comment block. These do not render but indicate incomplete pre-publication prep. Whether they constitute a check 8.6 FAIL (not rendered content) is disputed by the incentive-model critical review; disposition requires a framework clarification. Pragmatically: retain until REVIEW flags are cleared, then remove as part of publication prep.

**4. Veracity failures with no REVIEW flags on specific claims — all 4 pages**
Every page has factual claims that lack `{/* REVIEW: */}` annotations — round duration (~22 hours), active set size (top 100), contract names (AIServiceRegistry vs ServiceRegistry), CLI flags. The REVIEW flag standard requires annotating every unverified claim; the pages are inconsistently annotated. Requires a systematic REVIEW-flag pass before veracity status can be set to anything other than `unverified`.

**5. Cross-tab link gaps — 3 of 4 pages (role, architecture, incentive-model)**
`capabilities.mdx` is the only page with a confirmed cross-tab link to the Gateway tab. The other three pages have weak or absent cross-tab routing. The standard requires a minimum of 3 cross-tab links per page (check 4.10). Some links are blocked until Gateways and Delegators IA is approved — these must be logged in blocking-items.md, not silently skipped.

**6. `purpose: 'concept'` deprecated alias — 1 real instance (architecture.mdx only)**
Despite appearing as a false positive on two pages, architecture.mdx has a genuine `purpose: 'concept'` deprecated alias that must be corrected to `purpose: 'explain'`. The same false positive pattern makes it easy to confuse real and phantom instances — verify frontmatter directly before executing.

**7. Heading failures concentrated at the H2 level — all 4 pages**
Every page has at least one H2 below the 20/25 threshold. The most common failure mode is process/description framing ("How X Are Advertised", "How Gateways Select Orchestrators", "What Orchestrators Don't Do") rather than concept naming. The incentive-model page has 9 failing headings — the highest count. The architecture page has 6 confirmed failing content headings (after "Related Pages" exemption correction).

**8. "Related Pages" heading exemption not applied consistently — capabilities and architecture check reports**
Both reports flagged "Related Pages" as a check 3.1/3.2 failure and included it in fix lists and failure counts. This is an approved structural element exempt from heading scoring. Both check reports required correction before remediation.

---

## Recommendations

Priority order for fixes across the Concepts section:

**Priority 1 — CRITICAL (block all other work until resolved)**

1. Resolve `AIServiceRegistry` vs `ServiceRegistry` contract naming conflict in `role.mdx` (BD-1 on that page). One name is wrong; requires go-livepeer source verification. This is a factual error in a published-path file.
2. Fix broken links in `capabilities.mdx` (pricing-strategy path prefix wrong; workloads-and-ai directory does not exist).
3. Fix broken links in `architecture.mdx` (`contract-addresses` → `x-contract-addresses`; `payment-flow` — requires human decision on BD-5: redirect to `payments.mdx` or create stub).
4. Fix mislinked pricing-strategy path in `incentive-model.mdx` (wrong prefix; the page exists at the correct location in docs.json).

**Priority 2 — HIGH (batch frontmatter pass)**

A single frontmatter-only pass across all 4 pages can resolve the universal missing-field problem. For each page, add: `complexity: [value]`, `lifecycleStage: [value]`, `veracityStatus: unverified`, change `status: draft`. Confirm the correct value for `purpose` by reading the actual frontmatter — do not assume it matches the check report. For `architecture.mdx` only: change `purpose: 'concept'` → `purpose: 'explain'` (genuine instance). For `role.mdx` only: also add `pageType: concept`, `pageVariant: overview`.

**Priority 3 — HIGH (veracity REVIEW-flag pass)**

Add `{/* REVIEW: */}` annotations to every unverified factual claim lacking one, across all 4 pages. Priority targets: contract names (all pages where they appear), CLI flags (architecture, incentive-model), round duration ~22 hours (incentive-model), active set size 100 (role, incentive-model). Requires checking against go-livepeer source. Assign to a verifier with access to the current binary and contract-addresses reference.

**Priority 4 — MEDIUM (heading renames — batch per page)**

Execute heading renames in order from most-failures to fewest: incentive-model (9 renames), architecture (6 renames after exemption correction), capabilities (2 renames + 1 CustomDivider label), role (1 rename). Confirm that "Pricing Configuration" CustomDivider and proposed H2 rename on incentive-model do not create visual duplication before executing.

**Priority 5 — MEDIUM (banned constructions — batch per page)**

Incentive-model has the highest count (6 confirmed). Architecture has 4 (including 2 missed by the original check). Capabilities has 2 (1 banned phrase, 1 missed CustomDivider construction). Role has 2 (1 banned construction, 1 banned word/unquantified claim). Execute per page; do not use the check-report fix for incentive-model line 310 as written — it introduces another banned construction.

**Priority 6 — MEDIUM (human decisions required before closing)**

These items cannot be resolved by an agent:
- BD-1 (role): AIServiceRegistry vs ServiceRegistry — SME resolution
- BD-2 (role): Commercial orchestrator target page existence
- BD-3 (role): Cascade definition — verified source required before inserting a definition string
- BD-5 (architecture): payment-flow card — create stub or redirect to payments.mdx
- BD-2 (architecture): AIServiceRegistry detached-from-controller status (Mehrdad)
- BD-3 (architecture): AI Runner container lifecycle (j0sh)
- BD-4 (architecture/capabilities): CLI flag currency — verify against current binary
- BD-1 (incentive-model): Missing Quickstart handoff at end of Concepts sequence — page needs a forward exit path to Quickstart; no card currently links there
- BD-2 (incentive-model): `rewards-and-fees` and `attracting-delegates` target pages — create or replace with valid current targets

**Priority 7 — LOW (cleanup after above)**

- Remove TODO comment blocks from all 4 pages once associated REVIEW flags are resolved.
- Add cross-tab links as target paths become available (Gateways, Delegators IA approval required).
- Add `industry` and `niche` optional fields (all pages, low priority, correctly labelled INFO).
- Verify `ScrollableDiagram` and `CenteredContainer` approval status against `docs-guide/policies/component-layout-decisions.mdx` — if approved, close those findings; if not, replace.

---

_Generated: 2026-03-24 | Input: 4 check reports + 4 critical reviews for `v2/orchestrators/concepts/`_
_Output path: `v2/orchestrators/_workspace/canonical/check/concepts/summary.md`_
