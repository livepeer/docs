# Section Summary — config-and-optimisation
**Subfolder:** `v2/orchestrators/guides/config-and-optimisation/`
**Pages reviewed:** 4 (pricing-strategy, capacity-planning, ai-model-management, reward-call-tuning)
**Date:** 2026-03-24
**Sources:** Per-page check reports + critical reviews. Critical review verdicts are ground truth where they differ from check reports.

---

## 1. Overview Table

| Page | Verdict | Corrected fail count | Primary issues |
|------|---------|----------------------|----------------|
| `pricing-strategy` | NEEDS WORK | 16 | 1. Six required frontmatter fields absent + description overlength; 2. Two headings below scoring threshold; 3. Four open FACT CHECK flags with additional unverified claims lacking flags |
| `capacity-planning` | NEEDS WORK | 16 | 1. Six required frontmatter fields absent + description overlength; 2. Banned word `significantly` at line 191; 3. Five veracity checks fail with six FACT CHECK comments in wrong format |
| `ai-model-management` | NEEDS WORK | 15 | 1. Six required frontmatter fields absent; 2. Two open FACT CHECK flags plus fifteen additional unverified numerical claims; 3. VRAM table duplicated from capacity-planning |
| `reward-call-tuning` | NEEDS WORK | 17 | 1. `status: current` + absent `veracityStatus` + four FACT CHECK flags = P39 incoherence (highest-severity unique finding); 2. Three headings below scoring threshold; 3. Banned construction `Use this page to...` at line 40 |

**Corrected counts note:**
- `ai-model-management`: original check said 14 (or 15 with 9.3 included). Critical review confirmed all substantive findings accurate; the only defect was the inconsistent 9.3 gate-state handling. Corrected count uses 15 (9.3 included as a standard FAIL). Check 2.4 was correctly PASS throughout.
- `capacity-planning`: original check said 16 but with a 2.4 false FAIL and a 1.3 co-fix inflation. Critical review corrected: check 2.4 is PASS (no construction violation; the `significantly` at line 191 is a 2.2 violation only); check 1.3 is N/A co-fix per P42. Net count: 16 (same number, corrected composition: 2.4 removed, 1.3 removed from count, 6.9 confirmed as independent check ID).
- `pricing-strategy`: original check said 16. Critical review confirmed the count is correct. Check 2.4 must be changed to PASS in the check table (it was pre-filled FAIL but scan found no violations). The 16-count final list already excluded 2.4. Count stands at 16.
- `reward-call-tuning`: original check said 17. Critical review confirmed 17 is correct. Category 1 verdict phrasing ("9 checks fail" when 8 IDs are listed) is an isolated wording error that does not change the total.

---

## 2. Shared Root Causes

The following problems appear across three or four pages. Log once; apply fix to all affected pages.

**RC-1 — Six required frontmatter fields absent (all four pages)**
Fields missing on every page: `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche`, `veracityStatus`.
- `pageType: how_to` deprecated alias on all four pages — replace with `pageType: instruction` on all four.
- Proposed values (all require confirmation before applying):

| Page | purpose | complexity | lifecycleStage | industry | niche | veracityStatus |
|------|---------|------------|----------------|----------|-------|----------------|
| pricing-strategy | configure | intermediate | optimise | [technical, economics] | [protocol, infrastructure] | unverified |
| capacity-planning | configure | intermediate | optimise | [technical, broadcast] | [hardware, infrastructure] | unverified |
| ai-model-management | operate | intermediate | optimise | [AI, technical] | [AI, hardware] | unverified |
| reward-call-tuning | optimise | intermediate | optimise | [technical, economics] | [protocol, tokenomics] | unverified |

`veracityStatus: unverified` is not a proposed value — it is the required fix on all four pages given open FACT CHECK flags on every page.

**RC-2 — `pageType: how_to` deprecated (all four pages)**
Single root cause, single fix per page: replace `pageType: how_to` with `pageType: instruction`. No `pageVariant` co-fix required per Frameworks.mdx §1.1 migration table (`how_to → instruction`, pageVariant column is "—"). This is a co-fix of RC-1 above.

**RC-3 — FACT CHECK comments in wrong format (all four pages)**
All four pages use `{/* FACT CHECK: ... */}` inline comments. The correct format is `{/* REVIEW: [claim] — verify against [source] before publishing */}`. Convert all FACT CHECK blocks to REVIEW format on all pages.
- pricing-strategy: 4 FACT CHECK flags (lines 52, 78, 104, 173) + additional claims without any flag
- capacity-planning: 6 FACT CHECK flags (lines 82, 95, 167, 185, 193, 201, 278) + additional claims
- ai-model-management: 2 FACT CHECK flags (lines 63, 170) + 13 additional unverified claims without any flag
- reward-call-tuning: 4 FACT CHECK flags (lines 72, 125, 151 — check report cites 3 blocks in this count) + additional claims

**RC-4 — `veracityStatus` absent (all four pages)**
Cascades from RC-3. Every page has open FACT CHECK flags, making `veracityStatus: unverified` the required immediate fix. This is not a proposed value requiring confirmation — it must be applied.

**RC-5 — `description` overlength (pricing-strategy, capacity-planning)**
Both pages exceed the 160-char limit.
- pricing-strategy: ~210 chars. Proposed: `Set competitive pricing for video and AI workloads on a Livepeer orchestrator, covering pricePerUnit, aiModels.json, pricePerGateway, and autoAdjustPrice.` (156 chars) — confirm before applying.
- capacity-planning: 205 chars. Proposed: `Set the correct -maxSessions for your orchestrator using livepeer_bench, bandwidth calculations, NVENC limits, and AI VRAM budgeting.` (133 chars) — confirm before applying.

**RC-6 — `## Related pages` heading capitalisation inconsistency (all four pages)**
All four pages use `## Related pages` (lowercase p). The exact exempt form per P16/P53 is `Related Pages` (capital P). Consistent across the group — flag for resolution. INFO severity; not a structural fail given `Related` is in the OK tier per Frameworks.mdx §4.1.

---

## 3. Blocking Decisions

| BD-ID | Decision | Page(s) | Blocks |
|-------|----------|---------|--------|
| BD-C01 | `status: current` on reward-call-tuning with 4 open FACT CHECK flags violates checks.mdx §1.8 (P39). Two options: (A) change `status: current` to `status: draft` + add `veracityStatus: unverified` immediately; (B) complete full veracity pass first, then set `status: current` + `veracityStatus: verified`. Option A is the recommended path. Requires human decision before publishing. | reward-call-tuning | Publication of reward-call-tuning; accurate representation of page's verified state |
| BD-C02 | Confirm proposed `purpose` values for all four pages before applying. The correct `purpose` for pricing-strategy and capacity-planning (configure vs operate) requires human confirmation. reward-call-tuning `purpose` is proposed as `optimise` but could be `configure`. | all four | Frontmatter completion; downstream check 4.7 evaluation |
| BD-C03 | VRAM table appears in both `capacity-planning` (lines 288–333) and `ai-model-management` (lines 75–125) with the same data. Editorial decision: consolidate to one canonical location (model-demand-reference is one option) and link from the other, or maintain both with an explicit statement that they are kept in sync. | capacity-planning, ai-model-management | Maintenance risk if values diverge; veracity scope for both pages |
| BD-C04 | All FACT CHECK claims across the four pages require SME verification (Rick / ai-runner team / Mehrdad / protocol data) before `veracityStatus` can be changed from `unverified` to `verified`. Specifically: NVENC session cap range (3–8), benchmark URL liveness, 0.8 threshold community convention, reward call gas cost figures (350,000–450,000 gas, 0.01–0.1 gwei), `livepeer_cli` option name for manual reward calling, Prometheus metric `livepeer_round_last_claim`, SDXL-Lightning/SVD/audio-to-text/SAM2 VRAM figures, SFAST/DEEPCACHE speed claims, autoAdjustPrice production-stability, per-pipeline wei pricing figures, `-priceFeedAddr` requirement on Arbitrum. | all four | Veracity pass completion |

---

## 4. Prioritised Recommendations

**CRITICAL**

1. **BD-C01: Resolve `status: current` incoherence — reward-call-tuning**
Change `status: current` to `status: draft`. Add `veracityStatus: unverified`. The current state violates checks.mdx §1.8 (P39). Applies only to reward-call-tuning; the other three pages already have `status: draft`.

2. **Add `veracityStatus: unverified` to all four pages**
All four pages have open FACT CHECK flags and/or unverified numerical claims. This field must be set before any page can be considered publication-ready. Does not require human sign-off — it is the only honest value given the current state.

**HIGH**

3. **Migrate `pageType: how_to` to `pageType: instruction` — all four pages**
Single mechanical fix. No `pageVariant` required. Fixes check 1.2 and check 5.7 (same root cause) on all four pages.

4. **Add missing frontmatter fields — all four pages**
Add `purpose`, `complexity`, `lifecycleStage`, `industry`, `niche` to all four pages. Use the proposed values in RC-1 table as starting points. All require human confirmation before applying.

5. **Fix `description` overlength — pricing-strategy, capacity-planning**
Shorten to ≤160 chars. Use the proposed replacements in RC-5. Confirm before applying.

6. **Delete `Use this page to...` self-reference — reward-call-tuning line 40**
Line 40: "Use this page to calculate profitability, configure the `-reward` flag, choose between automatic and manual calling, and decide when skipping rounds is justified." Delete this line entirely. The following content makes the page purpose clear without the self-reference.

7. **Remove banned word `significantly` — capacity-planning line 191**
Line 191: "CPU transcoding produces **significantly** higher ratios per session than GPU."
Fix: "CPU transcoding produces higher ratios per session than GPU." Delete the intensifier.

8. **Rename failing headings — pricing-strategy**
Two headings below 20/25 threshold:
- "Setting the price" (17/25) → Proposed: `pricePerUnit Configuration` — confirm before applying
- "Checking competitive AI rates" (18/25) → Proposed: `AI Rate Survey` — confirm before applying

9. **Rename failing headings — capacity-planning**
One heading below 20/25 threshold:
- "Tuning after going live" (18/25) → Proposed: `Live session tuning` — confirm before applying

10. **Rename failing headings — reward-call-tuning**
Two headings below 20/25 threshold (third is at-threshold):
- "Timing considerations" (17/25) → Proposed: `Timing and Gas Strategy` — confirm before applying
- "When to skip calling intentionally" (17/25) → Proposed: `Skip Conditions` — confirm before applying
- "Automatic calling (default)" (18/25) → Proposed: `Automatic Calling` — confirm before applying

11. **Convert all FACT CHECK comments to REVIEW format — all four pages**
See RC-3 for specific line numbers per page. Format: `{/* REVIEW: [claim] — verify against [source] before publishing */}`.

12. **Add REVIEW flags to unverified claims currently lacking them — all four pages**
Claims with no flag at all (not even in FACT CHECK format):
- ai-model-management: VRAM figures throughout lines 85–125, SFAST speed claim (line 183), DEEPCACHE speed claim (line 200), 5-minute registry delay (line 239)
- pricing-strategy: autoAdjustPrice overhead table (lines 90–94), pixel count formula (lines 48–49), `-pixelsPerUnit` exponential notation note (line 76), USD AI Chainlink feed claim (lines 221–222)
- reward-call-tuning: round duration 22 hours (line 38), LPT formula (lines 61–63), LIP-89 10% allocation (line 63), Explorer history visibility (line 155)

13. **Remove dead imports — reward-call-tuning**
`StyledTable`, `TableRow`, `TableCell` are imported at line 30 but no table components are used in the page body. Remove the import line.

**MEDIUM**

14. **Resolve BD-C03 VRAM table duplication — capacity-planning, ai-model-management**
Human editorial decision required. Choose one canonical location for the VRAM reference table and link from the other page.

15. **SME verification of all FACT CHECK / REVIEW flags — all four pages (BD-C04)**
Coordinate with Rick, Mehrdad, and protocol data sources to resolve all outstanding factual claims before setting any page to `veracityStatus: verified`.

---

## 5. Cross-Page Structural Notes

**5.1 Navigation sequence and page boundaries**
docs.json order within config-and-optimisation: `pricing-strategy` (pos 1) → `capacity-planning` (pos 2) → `ai-model-management` (pos 3) → `reward-call-tuning` (pos 4). All four check reports confirmed this sequence from docs.json. The ordering is logical: set revenue parameters → set capacity limits → manage AI model state → tune reward calling. No adjacency gaps identified.

**5.2 VRAM table duplication (ownership ambiguity)**
The same VRAM-by-model table appears in both `capacity-planning` (lines 288–333, positioned as VRAM budget planning) and `ai-model-management` (lines 75–125, positioned as model warm/cold strategy reference). Both purposes are defensible but the duplication creates a maintenance risk: if model VRAM figures change, they must be updated in two places. Neither page currently owns this data canonically. `model-demand-reference` (linked from ai-model-management) is a candidate for the canonical location.

**5.3 Scope boundaries between pages**
- `capacity-planning` explicitly scopes out AI inference capacity, pointing to `aiModels.json capacity field` and by extension `ai-model-management`. The boundary is stated.
- `ai-model-management` explicitly scopes out model sourcing/downloading, pointing to `model-hosting`. The boundary is stated.
- `reward-call-tuning` implicitly scopes out fee income (handled in `payment-receipts`, linked). No explicit scope statement, but the Related pages structure compensates.
- `pricing-strategy` has no explicit prerequisites section. All other pages in the group also lack formal Prerequisites headings; this is a group-level pattern to address in the layout pass.

**5.4 Cross-tab links**
- `pricing-strategy` is the only page in the group with a cross-tab link: `/v2/gateways/guides/payments-and-pricing/pricing-strategy` in Related pages. This is correct and verified at docs.json line 2691.
- `reward-call-tuning` has no cross-tab link despite the reward cut setting having direct implications for delegators. The delegators tab is a candidate for an outbound link at the journey intersection. INFO; not a blocker.
- The other two pages have no cross-tab links but their subject matter (hardware capacity, AI model management) does not have an obvious cross-tab graduation path.

**5.5 Related pages card link coverage**
All four pages use Related pages cards. All internal links in all four pages were verified against docs.json with specific line citations. No broken internal links found across the group.

**5.6 Component consistency**
All four pages use the same custom component set: `CustomDivider`, `LinkArrow`, `StyledTable`/`TableRow`/`TableCell`, `Tip`. `reward-call-tuning` has `Warning` in addition. `capacity-planning` uses `StyledSteps`/`StyledStep` (procedural steps). `ai-model-management` uses `Tabs`/`Tab` and `BorderedBox`. No `Coming Soon`, `PreviewCallout`, or other avoided components found on any page.

---

## 6. Learnings for Future Batches

The following patterns appeared in this batch and are not already covered by P1–P58 in learnings.md.

**L-B8-01: Check 2.4 pre-filled before Banned Construction Scan completes**
Two of four check reports (capacity-planning, pricing-strategy) pre-marked check 2.4 as FAIL before the Banned Construction Scan ran, then found no violations but did not correct the table row. This is a P28 violation and the root cause of inflated failure counts in both reports. P58 was added to learnings.md to address this. Confirmed effective partial fix: the two reports where it persisted were from the same batch, and the critical reviews caught both. Pattern to monitor in Batch 9.

**L-B8-02: Category 1 verdict count inflated by including `status` field incoherence as an independent check**
reward-call-tuning Category 1 verdict said "9 checks fail" but listed 8 IDs. The `status: current` incoherence was noted parenthetically as if it were a 9th check. `status` is not one of the 10 required checks — the incoherence is captured under check 1.8. Recommendation: add a rule that the Category 1 verdict count equals the count of check IDs 1.1–1.13 that have FAIL result, and no other entries should inflate this count.

**L-B8-03: Blocking decision raised but not consistently propagated to fix list**
`reward-call-tuning` raised BD-1 (`status: current` incoherence) correctly in the Blocking Decisions section and in F-01. The pattern was well-handled in this report. However, the cross-category connection section (C1) explained the issue clearly and linked to the BD. This is the correct structure for other reports to follow: blocking decisions that arise from a category finding should be referenced in the Cross-Category Connections section and in the fix list, not only in the Blocking Decisions section.

**L-B8-04: Dead import detection applied correctly on one of four pages**
`reward-call-tuning` correctly identified unused `StyledTable`/`TableRow`/`TableCell` imports. The other three pages were not explicitly checked for dead imports in their check reports. P9 (add dead import check) should be applied to all pages, not just pages where the checker happens to look. This is a consistent under-application of P9 rather than a new pattern.

**L-B8-05: `status: current` + open FACT CHECK flags is a compound violation requiring a single atomic fix**
The combination of `status: current` (or any status that implies verified content) + absent `veracityStatus` + open FACT CHECK flags requires treating all three as one compound violation with one atomic fix. Check reports in this batch that encountered the pattern on reward-call-tuning handled it correctly by naming it as a P39 violation (BD-1) with two resolution options. This is the correct template for any future page with a premature `status: current`.

**L-B8-06: Proposed `purpose` value for ai-model-management (`operate`) differs from pricing-strategy and capacity-planning (`configure`)**
All four pages in the config-and-optimisation group use the same `lifecycleStage: optimise`, but purpose values differ: `operate` (ai-model-management) vs `configure` (pricing-strategy, capacity-planning) vs `optimise` (reward-call-tuning). This differentiation is correct — the pages have genuinely different operational intents — but it means reviewers should not assume the same `purpose` value across a group. Each page's purpose must be evaluated against its actual page job, not inferred from its group membership.

---

_Summary generated: 2026-03-24_
_Check reports: Batch 8 (P1–P58 applied)_
_Critical reviews: MOSTLY RELIABLE (ai-model-management, pricing-strategy, reward-call-tuning), NEEDS REWORK (capacity-planning)_
