# LPT / Delegators — Collation Notes

**Synthesised from**: `chatgpt-v4-delegators-audience-design.md`, `claude-web-v4-delegators-audience-design.md`  
**Date**: 2026-03-23

---

## Terminology Conflicts

No definition conflicts were found. The following near-conflicts were resolved by applying decision rules:

- **Treasury vs Community Treasury** — one run used `Treasury`, the other used `Community Treasury`. Canonical lock uses **Community Treasury** because it is the more precise label for the governed on-chain fund.
- **Rebond vs Rebonding** — one run used `Rebond`, the other used `Rebonding`. Canonical lock uses **Rebonding** as the clearer action label.
- **Voting Power vs Stake-Weighted Voting / Vote Detachment** — one run used a broad governance term, the other split the mechanic into narrower labels. Canonical lock keeps **Voting Power** as the umbrella term and treats override behaviour as explanatory copy inside governance content rather than a separate lock term.
- **Inflation vs Inflation Rate / Inflation Adjustment / Dilution** — the runs disagreed on granularity, not on the underlying concept. Canonical structure resolves this at the section level by keeping an outcome-drivers section instead of expanding the lock with a larger inflation-term family.

---

## Excluded Personas

- **Token Participation Evaluator** — appeared in `chatgpt-v4-delegators-audience-design.md`; excluded because it was single-run, Impact=2, and its fit-decision concern is already covered by canonical Sections 2–3.
- **The Active Stakeholder** — appeared in `claude-web-v4-delegators-audience-design.md`; excluded as a separate canonical persona because its underlying path is already covered by **Reallocator Under Review** plus the governance path. The concern this persona raises is covered within Sections 8–10.

---

## Excluded Sections

- **Dedicated bridging page** — appeared in `claude-web-v4-delegators-audience-design.md`; excluded because its function is served by **Section 6. What Must Be Ready Before I Act?**, which keeps the bridge-first path without creating a standalone single-run section.
- **Dedicated rewards-claim / yield-tracking page** — appeared in `claude-web-v4-delegators-audience-design.md`; excluded because its function is served by **Section 8. How Do I Claim, Move, or Exit My Position?** plus **Section 10. What Should I Watch Ongoing?**
- **Dedicated governance-proposal-submission page** — appeared in `claude-web-v4-delegators-audience-design.md`; excluded because it was single-run and not the only coverage required for a primary or high-impact persona.
- **Dedicated treasury-concept page** — appeared in `claude-web-v4-delegators-audience-design.md`; excluded because its function is served by **Section 9. How Do I Use Stake in Governance and Treasury Decisions?** and the **Delegators → Community** cross-tab route.

---

## Structural Disagreements

### 1. Decision layer vs mechanics layer

1. What each run said  
   - `chatgpt-v4-delegators-audience-design.md`: split “Should I Put This LPT to Work?” and “What Changes When I Bond?” into separate sections.  
   - `claude-web-v4-delegators-audience-design.md`: combined why staking matters and what bonding changes into one early concept section.

2. Canonical decision  
   - Keep **two** sections: one fit/decision layer, then one mechanics/consequences layer.

3. Reasoning for the canonical decision  
   - Separating the fit decision from the commitment mechanics prevents the user from having to absorb liquidity/custody/governance detail before they have even decided whether participation is appropriate. It also preserves a cleaner “yes/no” branch for the low-commitment evaluator while still surfacing consequences before any on-chain action.

### 2. Bridging as a standalone page vs a prerequisite block

1. What each run said  
   - `chatgpt-v4-delegators-audience-design.md`: treated wallet, chain, and action readiness as one prerequisite section, with bridging carried as a blocker and on-demand path.  
   - `claude-web-v4-delegators-audience-design.md`: created a dedicated “Getting LPT onto Arbitrum” section before operator selection and bonding.

2. Canonical decision  
   - Keep **one prerequisites section** and explicitly include the bridge-first path inside it; do not keep a standalone bridging page.

3. Reasoning for the canonical decision  
   - The L1 bridge problem is real, but it is still a prerequisite, not a distinct enduring content domain. Folding it into prerequisites preserves the L1 hard-stop path while avoiding a single-run section whose job is already covered elsewhere.

### 3. Where rewards education sits relative to operator choice

1. What each run said  
   - `chatgpt-v4-delegators-audience-design.md`: put outcome drivers before operator selection.  
   - `claude-web-v4-delegators-audience-design.md`: put reward mechanics after bonding, closer to claiming and monitoring.

2. Canonical decision  
   - Keep **outcome drivers before operator selection**.

3. Reasoning for the canonical decision  
   - Readers cannot compare operators intelligently unless they already know how reward cut, fee cut, dilution, and treasury flows affect them. Placing reward mechanics only after bonding would silently force first-time readers to choose an operator without the criteria needed to justify that choice.

### 4. Governance split into multiple pages vs one decision page

1. What each run said  
   - `chatgpt-v4-delegators-audience-design.md`: used one governance-and-treasury action section.  
   - `claude-web-v4-delegators-audience-design.md`: split governance into voting, proposal submission, and treasury-context sections.

2. Canonical decision  
   - Keep **one governance-and-treasury section**.

3. Reasoning for the canonical decision  
   - Voting and treasury decisions are the recurring high-impact governance actions surfaced across both runs; proposal authoring was single-run. One combined section preserves the canonical governance path while avoiding two extra single-run pages that do not unblock the primary audience.

### 5. Standalone claim-and-track page vs integrated position management

1. What each run said  
   - `chatgpt-v4-delegators-audience-design.md`: folded claim/rebond/unbond into one stake-management section plus an ongoing-review section.  
   - `claude-web-v4-delegators-audience-design.md`: separated “How rewards work,” “Claiming earnings and tracking yield,” and “Managing your stake.”

2. Canonical decision  
   - Keep **one action section for claim / move / exit**, plus one ongoing-review section.

3. Reasoning for the canonical decision  
   - Claiming is an operational action, but not a large enough standalone domain to justify a dedicated canonical page when the same user will usually revisit it alongside rebonding, unbonding, or performance review. The integrated structure keeps the action surface intact without multiplying low-consensus sections.

---

## Single-Run Flags

- **The L1 Stranded** — included despite appearing in one run because it scored Impact=3 and represents a distinct setup path with no substitute. Without it, the bridge-first reader is only implied rather than explicitly modeled.
- **Bridging** in the Terminology Lock — retained as a single-run-required term because the bridge-first path is materially different from every other setup path and cannot be replaced by a more generic prerequisite label without losing the actual action the reader must take.

---

## Open Items (require human resolution before Phase 2)

### 1. Treasury label preference — NON-BLOCKING

The runs used both `Treasury` and `Community Treasury`. The collation rules allow a precision-based resolution, so the canonical file uses `Community Treasury`, but publication copy should still align with the wider docs style guide.

**Resolution path**: check the house style used in the wider Livepeer terminology registry / style guide and standardise the label before publication.

### 2. Governance mechanic terminology depth — NON-BLOCKING

The runs diverged on whether the lock should use an umbrella term (`Voting Power`) or narrower terms (`Stake-Weighted Voting`, `Vote Detachment`). The canonical file resolved this at the lock level, but Phase 2 content may still need an explicit copy choice for section language.

**Resolution path**: verify the preferred user-facing wording against the current governance docs and terminology guidance before final publication copy is written.

---

## Run Quality Notes

### `chatgpt-v4-delegators-audience-design.md`

- **Key strength** — strong path architecture for multiple reader states. Specific example: it cleanly separated first activation, reallocation, and governance into distinct personas while still keeping one shared disambiguation-first flow.
- **Key weakness** — it under-modeled the bridge-first reader as a dedicated persona or section. Specific example: bridging was treated as a prerequisite blocker, but the L1-holder path was not given its own explicit persona.

### `claude-web-v4-delegators-audience-design.md`

- **Key strength** — strong edge-case specificity. Specific example: it identified the L1 mainnet holder as a distinct blocked setup path and surfaced concrete term-level confusion such as reward-cut directionality and vote-detachment assumptions.
- **Key weakness** — it over-split the architecture into single-run pages. Specific example: governance was broken into voting, proposal submission, and treasury pages even though only voting and treasury decision-making had cross-run support.

### Model pairing recommendation

Use **ChatGPT-first, Claude-second** for tabs of similar complexity.

Specific reason: ChatGPT’s stronger information architecture is more valuable for tabs with multiple overlapping entry states, while Claude’s strongest contribution is as an adversarial edge-case pass that catches blocked setup paths, terminology confusion, and reader-state exceptions after the skeleton already exists.
