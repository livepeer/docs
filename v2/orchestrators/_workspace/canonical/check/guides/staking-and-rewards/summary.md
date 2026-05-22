# Section Summary — staking-and-rewards
## `v2/orchestrators/guides/staking-and-rewards/`

**Generated:** 2026-03-24
**Pages covered:** earning-model, reward-mechanics, delegate-operations, network-participation
**Source:** Check reports + critical review reports, all 2026-03-24
**Corrections applied:** per task brief (Related §3.2 false positive; veracityStatus: unverified is valid; phantom fixes excluded; BORDERLINE ≠ confirmed FAIL)

---

## 1. Overview Table

| Page | Verdict | Corrected fail count | Primary issues |
|------|---------|----------------------|----------------|
| `earning-model.mdx` | NEEDS WORK | 15 checks | Five missing frontmatter fields (CC-1); unverified bonding % and inflation figures without inline REVIEW flags (CC-2); `X vs Y` heading (check 3.3); `not [X]` construction; em-dashes in body prose (4 instances total, including description) |
| `reward-mechanics.mdx` | NEEDS WORK | 21 checks (1 BORDERLINE) | `purpose: guide` wrong-field error + five missing fields (CC-1); `Read this page to` banned construction; three `not [X]` constructions; six headings below 20/25; extensive unverified procedural/factual claims without inline REVIEW flags; description 214 chars; em-dashes in description and H2 heading (`## Calling Reward() — your options`) |
| `delegate-operations.mdx` | NEEDS WORK | 24 checks (corrected from stated 14) | `purpose: guide` wrong-field error + three missing fields; nine headings below 20/25; broken cross-tab link (`/v2/lpt/delegation`); six unverified factual claims; `significantly` banned word; `active set` undefined at first use; em-dashes in five locations |
| `network-participation.mdx` | NEEDS WORK | 26 checks (1 BORDERLINE) | `purpose: guide` wrong-field error + six missing fields; `Use this page to` banned construction; four em-dash instances (including description); five headings below 20/25; v1 image paths (HIGH risk); CLI vote options and LIP effects unverified; `## Summary` Avoid-tier heading |

**Corrected fail count notes:**
- `delegate-operations`: check report stated 14, critical review confirmed 24 (FAIL count included wrong check IDs in original; reviewer also missed 5 em-dash instances and 1 heading FAIL)
- `earning-model`: 15 is correct per critical review (check 2.4 already fails; 3 additional em-dash instances are sub-findings, not new IDs)
- `reward-mechanics`: 21 is correct; check 3.2 result is PASS (critical review confirmed); `Related` false positive affects note text and F-11 rationale only, not the count
- `network-participation`: 26 is correct; check 3.2 fails only for `## Summary` — `## Related` passes check 3.2 per checks.mdx §3.2 OK tier

---

## 2. Shared Root Causes

### RC-1: `purpose: guide` wrong-field error — three of four pages
**Pages:** reward-mechanics, delegate-operations, network-participation
**Pattern:** `guide` is a valid 7-type canonical `pageType` value. All three pages place it in the `purpose` field, where it is not a valid value. The 15-value purpose set contains no `guide` entry. This is a P37 type-b error: a valid pageType value placed in the wrong field.
**Impact:** Fails checks 1.4 and 5.7 on all three pages. Blocks check 4.7 (information type mapping) until the correct purpose is confirmed. Proposed replacement on all three: `purpose: operate` — requires human confirmation before applying.

### RC-2: Missing frontmatter fields — all four pages
**Fields absent on all four pages:** `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`
**Additional on delegate-operations (original check report only, pre-correction):** `industry` and `niche` were marked N/A (optional) in the delegate-operations check report but are required per P41. This is a discrepancy between the two check reports — earning-model, reward-mechanics, and network-participation all mark them as required FAILs. Treat as FAIL for consistency.
**Shared proposed values:**
- `complexity: intermediate` (earning-model, reward-mechanics, delegate-operations); `complexity: beginner` (network-participation)
- `lifecycleStage: operate` (all four)
- `veracityStatus: unverified` (all four — content on all four pages contains unverified factual claims)
- `industry: ["economics", "technical"]` (earning-model, reward-mechanics, delegate-operations); `industry: ["governance", "economics"]` (network-participation)
- `niche: ["tokenomics", "protocol"]` (all four)
All proposed values require human confirmation before applying.

### RC-3: Em-dashes across all four pages
**Pattern:** Every page in this subfolder contains em-dashes in body prose, and three of four contain them in the frontmatter description field. CLAUDE.md explicitly prohibits em-dashes in all visible text and the description field. The banned construction scan on all four pages missed at least some instances.
**Confirmed instances missed by original check reports (added by critical reviews):**
- `earning-model`: description field (line 5), body prose lines 60 and 105 — total 4 instances, only 2 originally flagged
- `reward-mechanics`: description field (line 5), H2 heading at line 75 (`## Calling Reward() — your options`) — total not fully counted in original
- `network-participation`: description field em-dash in both original text AND the proposed F-01 replacement (proposed replacement also contained an em-dash)
- `delegate-operations`: description field and body prose (5 total instances)

### RC-4: Unverified protocol-state figures without inline REVIEW flags — all four pages
**Pattern:** All four pages contain protocol-state figures stated as fact with no inline `{/* REVIEW: */}` flag in the body near the claim. Hidden comment blocks (FACT CHECK or similar) are present on three pages but do not substitute for inline flags.
**High-staleness figures present across pages:**
- LPT bonding percentage ("approximately 61%" — earning-model)
- Inflation rate direction and current rate (earning-model, reward-mechanics)
- Gas cost ranges for reward calls and governance votes (reward-mechanics, network-participation)
- Unbonding period "approximately 7 days" (delegate-operations)
- LIP-89 10% treasury claim (earning-model, reward-mechanics — citable but not verified)
- Commission range table "as of early 2026" (delegate-operations — no source)
- Vote option identifiers 0=Yes/1=No and CLI menu (network-participation)

### RC-5: Heading quality failures — all four pages
**Pattern:** Every page has multiple headings scoring below 20/25. Shared failure modes:
- Verbose parenthetical headings ("The four things delegators look at", "Common pitfalls for delegators (and what they mean for you)")
- Action-frame headings ("Why delegators matter", "Where to follow governance", "Resources to share")
- Option-numbered headings ("Option 1: Automatic (default, recommended)")
- Generic structural labels ("Summary", "Related", "Continue in this section", "Watch: [title]")
Total headings below 20/25 across the four pages: 4 (earning-model) + 6 (reward-mechanics) + 9 (delegate-operations) + 5 (network-participation) = 24 heading failures.

### RC-6: Human sign-off absent — all four pages
**Check 9.1 FAIL on all four pages.** No `veracityStatus: verified` or sign-off marker in frontmatter. Expected: all four currently have `status: published` without `veracityStatus` — the critical reviews confirm this is incoherent per checks.mdx §1.8 but does not trigger the P39 constraint (which applies only to `status: current`).

---

## 3. Blocking Decisions

| BD-ID | Decision | Page(s) | Blocks |
|-------|----------|---------|--------|
| BD-SR-01 | Confirm `purpose` value for reward-mechanics: `operate` (worked example may be out of scope for `operate` — evaluative content type not permitted) OR `explain` (worked example fits; pageType stays `guide`, purpose switches) | reward-mechanics | Check 4.7 resolution; worked example content scope |
| BD-SR-02 | Confirm `purpose` value for network-participation: `operate` confirmed OR alternative (LIP reference table uses `change` information type, not listed as permitted for `operate`) | network-participation | Check 4.7 resolution; LIP table content scope |
| BD-SR-03 | Confirm `purpose` value for delegate-operations: `operate` OR `optimise` (page has majority `operate` content with one `optimise` section — reward-call strategy) | delegate-operations | Check 4.7 resolution |
| BD-SR-04 | Confirm broken cross-tab link target in delegate-operations: `/v2/lpt/delegation` 404s — no index.mdx in directory. Candidates: `/v2/lpt/delegation/delegation-guide` or `/v2/lpt/delegation/getting-started` | delegate-operations | Check 8.1 fix |
| BD-SR-05 | Confirm v1 image paths in network-participation: `/v1/images/poll.png`, `/v1/images/vote-livepeer-cli.png`, `/v1/images/vote-livepeer-cli-instructions.png` — verify existence in v2 context or replace with v2-compatible paths / text-only alternatives | network-participation | Check 8.4 fix (HIGH risk) |
| BD-SR-06 | Confirm whether H3 headings are in scope for the 20/25 threshold (check 3.1). Affects reward-mechanics F-12 (`## Via livepeer_cli`, 19/25). If in scope: apply rename. If out of scope: mark F-12 N/A | reward-mechanics | F-12 disposition |
| BD-SR-07 | Confirm `industry` and `niche` as required fields for delegate-operations (the check report marked them N/A optional; three other pages treat them as required per P41). Confirm whether P41 applies uniformly | delegate-operations | Frontmatter completeness |

---

## 4. Prioritised Recommendations

Ordered by impact. CRITICAL = blocks pipeline or renders page unpublishable. HIGH = veracity risk or structural problem. MEDIUM = voice/heading quality. Items marked [BD] require human sign-off before execution.

### CRITICAL

**C-1. Resolve `purpose` field wrong-field error — reward-mechanics, delegate-operations, network-participation**
All three pages have `purpose: guide`. This blocks check 4.7 information-type mapping on all three and propagates through checks 1.4 and 5.7.
Fix: Resolve BD-SR-01 through BD-SR-03 first. Then replace `purpose: guide` with the confirmed value on each page.

**C-2. Add five missing frontmatter fields — all four pages**
Blocks veracityStatus honesty (check 1.8), taxonomy pipeline (checks 1.6, 1.7, 1.9, 1.10), and sign-off tracking (check 9.1).
Fix: Add `complexity`, `lifecycleStage`, `veracityStatus: unverified`, `industry`, `niche` to all four pages with proposed values confirmed by Alison. One operation per page.

**C-3. Add inline REVIEW flags to all unverified protocol-state figures — all four pages**
Hidden FACT CHECK comments are not substitutes for inline flags. Any agent or reviewer executing fixes will miss these claims without flags.
Priority targets:
- earning-model line 113: bonding percentage, inflation rate direction
- reward-mechanics lines 69, 165–166, 305–346, 282–294: inflation direction, gas units, worked example figures, Prometheus metric name
- delegate-operations lines 56, 68–100, 177, 124–143, 92, 210, 183: historical claim, ROI formula, delegator complaint, commission table, rounds/year, unbonding period, AI v_daily claim
- network-participation: LIP effects table, gas cost table, vote option identifiers

### HIGH

**H-1. Fix broken cross-tab link in delegate-operations** [BD-SR-04]
`/v2/lpt/delegation` at line 246 will 404. Also fix the link text (`[v2/lpt/delegation]` displays a path as visible text).
Fix: Confirm target with Alison, then update to `/v2/lpt/delegation/delegation-guide` (or confirmed path) with readable link text.

**H-2. Verify or replace v1 image paths in network-participation** [BD-SR-05]
Three `Frame`-wrapped images use `/v1/images/` paths. If not served in v2 context, these will 404.
Fix: Verify file existence. Replace with v2-compatible paths or provide text-only fallback.

**H-3. Fix description overlength on reward-mechanics, delegate-operations, network-participation**
reward-mechanics: 214 chars. delegate-operations: 203 chars. network-participation: 192 chars.
All exceed the 160-char limit. Proposed trimmed versions exist in the check reports.
Critical: The proposed replacement for network-participation F-01 contains an em-dash — the replacement text must be revised to remove it before applying.

**H-4. Shorten and clean earning-model description**
earning-model description passes length (154 chars) but contains an em-dash in the description field (missed by original check, added by critical review). Replace `—` with `:` in the description.

**H-5. Delete self-referential opening sentences — reward-mechanics, network-participation**
- reward-mechanics line 36: "Read this page to tune automatic and manual calls..."
- network-participation line 37: "Use this page to follow active proposals..."
Both are check 2.4 banned constructions. Delete only the self-referential sentence; keep factual openers.
For network-participation, the revised opener must also remove the em-dash at line 35 (separate from CC-3 fix).

**H-6. Resolve `not [X]` constructions in reward-mechanics**
Three instances: line 61 ("There is no catch-up mechanism"), Warning at lines 96–98 ("There is no retry"), line 209 ("There is no universally correct setting").
Note: F-08 proposed fix for line 209 (`"The optimal setting depends on your growth stage and delegation target."`) introduces a `depends on` without ranked list — another banned construction per CLAUDE.md. Use the alternative from the critical review: "Commission strategy balances immediate per-job earnings against delegator attraction. Match your setting to your growth stage using the table below."

### MEDIUM

**M-1. Fix em-dashes — all four pages**
Present in description fields and body prose across all pages. Full instance lists are in check reports and critical reviews. Apply per-instance fixes (colon, period, comma, or restructure) — do not bulk replace without checking each.
Note for earning-model: critical review confirmed 4 total instances (lines 5, 60, 105, 154/201). The check report only caught 2.

**M-2. Rename failing headings — all four pages**
24 headings total below 20/25 across the subfolder. Specific proposed renames are in the individual check reports. High-value renames (common failure modes):
- `## Summary` → `## Voting Checklist` (network-participation, Avoid-tier prohibited)
- `## Continue in this section` → `## Related Pages` (earning-model, 12/25)
- `## Watch: [title]` → `## Video: [shortened title]` (earning-model and reward-mechanics)
- `## The four things delegators look at` → `## Yield Signal Factors` (delegate-operations, 10/25)
- `## Common pitfalls for delegators (and what they mean for you)` → `## Delegation Risk Factors` (delegate-operations, 12/25)
Note: `## Related` passes check 3.2 (it is in the OK tier per checks.mdx §3.2). It may fail check 3.1 (scored 11/25) and check 3.7 (generic editorial judgment). The rename to `## Related Pages` is valid if the intent is to adopt the approved structural element for footer navigation, but must not be framed as a 3.2 compliance fix.

**M-3. Fix `X vs Y` heading in earning-model**
`## Transcoding vs AI fees in practice` fails check 3.3. Proposed: `## Fee Profile by Workload`.

**M-4. Define `active set` at first use in delegate-operations**
Listed in CLAUDE.md as jargon requiring definition at first use on every page. First use is in a code block at line 47; first prose use is line 56. Add definition note after the code block.

**M-5. Fix `significantly` (earning-model) and `rewardShare` term (delegate-operations)**
- earning-model: `significantly` at line 149 — remove and replace with mechanism description
- delegate-operations: `rewardShare` presented as if a protocol parameter; clarify it is a formula variable (`1 - rewardCut`)

**M-6. Add prerequisite note to delegate-operations**
Page dives into total stake mechanics without stating the prerequisite (active orchestrator in active set). Add a prerequisite note linking to setup guide. Requires human to confirm correct link target.

---

## 5. Cross-Page Structural Notes

**5.1 Navigation sequence**
The four pages form a coherent section sequence in docs.json: earning-model (position 1) → reward-mechanics (2) → payment-receipts (3, different subfolder) → delegate-operations (4) → network-participation (5, terminal).

The check reports confirm:
- earning-model → reward-mechanics handoff is explicit (reward-mechanics assumes earning-model has been read)
- delegate-operations → network-participation handoff is coherent (delegation then governance)
- network-participation is the terminal page in the section; it has a cross-tab exit to `/v2/lpt/governance/overview` (confirmed valid in docs.json)

No navigation gaps within the sequence. The gap between reward-mechanics and delegate-operations (payment-receipts is between them in docs.json) is not a problem — each page routes forward via CardGroup.

**5.2 LIP-89 10% treasury — shared claim, shared verification requirement**
LIP-89 appears in both earning-model (line 115) and reward-mechanics (line 51). Both pages state the 10% treasury allocation as fact. If verified, both pages can be updated simultaneously. If the figure has changed, both must be corrected. Tag these for joint verification.

**5.3 `## Related` heading treatment — consistent false positive across reward-mechanics and network-participation**
Both reward-mechanics and network-participation check reports incorrectly flag `## Related` as a check 3.2 violation. Critical reviews on both pages confirm this is a false positive — `Related` is in the OK tier per checks.mdx §3.2. The check 3.1 failure (11/25 on both pages) is independently valid. Downstream agents acting on these reports must apply the correction before executing F-11 (reward-mechanics) and F-07 (network-participation).

**5.4 `purpose: guide` wrong-field error — three pages, single pattern**
The same error appears on reward-mechanics, delegate-operations, and network-participation. This is likely a template default or copy-paste artefact from an early content pass. A single search-and-replace of `purpose: guide` in this subfolder would catch all three instances, but the replacement value differs per page (all three have `purpose: operate` proposed, but BD-SR-01 through BD-SR-03 must be resolved first).

**5.5 Earning-model is the only page without a `purpose: guide` error**
earning-model correctly has `purpose: explain` — a valid canonical purpose value. This page also has fewer voice failures than the others. It is the strongest page in the subfolder by quality score.

**5.6 Delegate-operations has the highest heading failure count**
Nine headings below 20/25 — more than any other page in the subfolder. Many headings use question-frame or blog-post patterns ("Why delegators matter", "What delegators actually evaluate", "The four things delegators look at"). The review also notes a potential heading name collision: F-3.1a proposes renaming `## Why delegators matter` to `Delegation Mechanics`, but the page already contains `## The delegation mechanics (what delegators actually do)` later in the same page. These must be resolved together to avoid reader confusion.

**5.7 Earning-model description field PASS in check report — overturned by critical review**
The check report scores the earning-model description PASS (154 chars, subject-first). The critical review adds that the description contains an em-dash, which the banned construction scan missed. The description passes on length and structure but fails on the em-dash prohibition. A corrected version must omit the em-dash.

---

## 6. Learnings for Future Batches

The following patterns are not yet captured in learnings.md P1–P65.

**L-66: Em-dash scan scope — description field and heading text are systematically missed**
All four pages in this batch had em-dashes in the frontmatter description field. All four check reports claimed to scan the description as part of the banned construction scan but missed the em-dash in that field. H2/H3 heading text is also being missed (reward-mechanics: `## Calling Reward() — your options`). Add an explicit scan step for description field and heading text, separately from body prose, in the banned construction scan procedure.

**L-67: Proposed fixes must themselves be checked against the prohibition being fixed**
The network-participation F-01 proposed a replacement description that still contained an em-dash. The reward-mechanics F-01 proposed replacement also contained an em-dash. When generating a replacement for a banned construction, the replacement text must be independently verified against the same prohibition. Add to fix generation procedure: "Run the replacement text through the banned construction scan before recording it."

**L-68: `depends on` without ranked list — frequently introduced by fixes**
The reward-mechanics CC-3 fix for line 209 introduced a `depends on` construction. CLAUDE.md lists "`depends on` without ranked list" as a banned construction requiring "weighting and thresholds." Fix text for any `not [X]` rewrite must avoid `depends on` unless a ranked list immediately follows.

**L-69: `## Related` OK tier — do not score or characterise as check 3.2 violation**
Both reward-mechanics and network-participation flagged `## Related` as a check 3.2 violation. checks.mdx §3.2 explicitly places `Related` in the OK tier. P53's statement that only `Related Pages` is exempt means `Related` must be *scored* (check 3.1) and may fail on score — but it cannot fail check 3.2. Future check reports must not raise check 3.2 findings for `Related`.

**L-70: Phantom fix entries — "no action required" findings must be closed at source, not in the Fix List**
network-participation F-08 was a Fix List entry concluding "no action required — link is valid." Per P34, the correct process is to close the finding in the category check row itself (mark the link valid with the docs.json citation) and omit it from the Fix List entirely. Fix List entries that resolve to no-action create ambiguity for executing agents.

**L-71: Protocol-state figures require explicit staleness tier in the finding**
Gas cost ranges, bonding percentages, and inflation rates all appeared in this batch as unverified claims. Frameworks.mdx §3.4 defines staleness tiers for specific figure types. When flagging an unverified number, the finding must cite the applicable staleness tier (HIGH/MEDIUM/LOW) so the veracity pass can prioritise appropriately. Two pages in this batch had gas cost figures without a staleness-tier label — the only risk label was "NOT-TESTED."

**L-72: H3-in-scope question for check 3.1 — should be resolved once and locked**
Both delegate-operations and reward-mechanics scored H3 headings against the 20/25 threshold, and reward-mechanics raised a blocking decision on whether H3s are in scope. This ambiguity should be resolved once and recorded in decisions/decision-registry.md to prevent the same blocking decision re-appearing on every future batch.

---

_Summary agent: Claude Code (summary-index agent) · 2026-03-24_
