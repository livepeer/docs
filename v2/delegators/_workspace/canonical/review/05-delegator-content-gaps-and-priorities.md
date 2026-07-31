**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## Critical gaps (blocking primary journey)

### 1. 🔴 MISSING: Proper portal (S0)

**Current state:** `token-portal.mdx` exists but functions as secondary navigation page, not a hero entry point.

**What's needed:**
- Role identification hero ("What brings you here?")
- Three clear paths:
  - "I want to earn rewards by delegating"
  - "I want to vote on governance proposals"
  - "I'm just researching LPT"
- Navigation to stage-1 content for each path
- Clear value prop: "Bridge LPT, choose an orchestrator, delegate, see rewards — without asking anyone"

**Canonical spec:** Follow orchestrators format. Lead with persona selection. Each path links to stage-1 content.

**Effort estimate:** 2-3 hours (portal template + persona routing logic)

---

### 2. 🔴 CRITICAL STUB: delegation-economics.mdx (S2)

**Current state:** 736-byte placeholder. This is THE most important conceptual page for yield-seeking delegators.

**What's needed:**
- Realistic yield calculation framework
- Key variables: orchestrator commission, inflation rate, fee cut, reward cut
- Current numbers: current inflation schedule, current fee-to-inflation ratio (89:1), current active set average yield
- Examples: delegate 1000 LPT to orchestrator X, what's my expected annual yield?
- Why this matters: inflation decreases over time; how does that affect long-term sustainability?
- LIP-107 impact: "If LIP-107 passes, inflation mechanics change. Here's how that affects you."
- Fee mechanics: "You earn both from inflation AND from network fees. Here's the current split."
- Risk disclosure: "Orchestrator might not call rewards. Here's why that matters and how to avoid it."
- Comparison: "Is 5% yield good? How does Livepeer compare to Ethereum staking, Lido, other L1 staking?"

**Content sources:**
- Livepeer Explorer (current inflation, fees, active set yield)
- Protocol spec (inflation formula, fee mechanics)
- Mehrdad (LIP-107/100 impact review)
- Community FAQ (common questions about yield)

**Canonical structure:**
```
# Delegation Economics

## How do delegators earn?

### The two sources of yield
- Inflation-based rewards (LPT newly minted)
- Fee-based rewards (portion of network fees)

### Calculating your yield
- Formula: (delegated_stake / orchestrator_stake) × (inflation_per_round + fee_cut)
- Current numbers: [live data]
- What affects yield: commission rate, orchestrator performance, your delegation size

## Real-world examples

### Example 1: Delegating 1000 LPT
- Chosen orchestrator: [example]
- Commission: 10%
- Expected annual yield: [calculation]
- Risks: [what could go wrong]

### Example 2: Comparing orchestrators
- Orch A: 5% commission, 50000 LPT staked, 4x reward call history
- Orch B: 10% commission, 100000 LPT staked, 2x reward call history
- Which is better? [economic analysis]

## Long-term sustainability

### How inflation works
- Current inflation: [rate]
- Historical trend: [chart]
- Future projection: [LIP-107 impact]

### Fee-capture mechanism
- Current network fee volume: [number]
- Proportion going to delegators: [%]
- Why this matters: "As inflation decreases, fee capture becomes more important"

## Risk: What if your orchestrator doesn't call rewards?
- Performance history: how to check
- Triggers for redelegation: "If my orch doesn't call 2 rounds in a row, I should move"
- Economic impact of missed calls

## How this compares to other staking
- Ethereum staking: [yield]
- Lido: [yield]
- Livepeer: [yield + justification]

## What's changing (LIP-107)
- Current mechanics [described above]
- New mechanics under LIP-107
- How this affects you
```

**Effort estimate:** 6-8 hours (research + writing + SME review with Mehrdad + live data integration)

**Priority:** 1/5 (highest)

---

### 3. 🔴 MISSING: undelegation.mdx (S8)

**Current state:** No page explains how to undelegate, what the unbonding period is, what happens to rewards.

**What's needed:**
- Clear answer: "How long until I get my LPT back?"
- Unbonding period mechanics: 7 rounds ≈ ~7 days (with variance explanation)
- Reward handling during unbonding: do earned rewards get locked? when can I claim?
- Step-by-step undelegate process (on-chain transaction)
- Recovery paths: "What if my unbonding gets stuck?"
- Comparison to other protocols: Ethereum unstaking (1-2 weeks), Lido (no unbonding), others

**Canonical structure:**
```
# Undelegation & Exit

## How to undelegate

### When you might want to undelegate
- Orchestrator is not calling rewards
- You want to exit the protocol
- You want to switch orchestrators (hint: redelegation is better)

### The unbonding process
- Step 1: Initiate unbonding (on-chain transaction)
- Step 2: Unbonding period (7 rounds ≈ ~7 days)
- Step 3: Claim your LPT (after unbonding completes)

### Important: Reward handling
- Q: Do I lose my earned rewards if I undelegate?
  A: No, you keep them. But you must claim before unbonding expires.
- Q: When can I claim my rewards?
  A: During the unbonding period, but not until you've called the claim transaction.
- Q: What if I undelegate and don't claim within the unbonding period?
  A: [Check if there's a recovery mechanism — [VERIFY-PROTOCOL]]

## Step-by-step: undelegate on-chain

[Use Explorer screenshot + tx walkthrough, like getting-started.mdx]

1. Open Livepeer Explorer
2. Navigate to your stake
3. Click "Undelegate"
4. Confirm transaction
5. Wait 7 rounds (~7 days)
6. Claim your LPT

## Recovery: What if something goes wrong?

### Stuck in unbonding?
- Check Explorer for your position
- Verify your transaction landed on-chain
- [Contact support if needed]

### Lost access to your wallet?
- [Recovery options if any]

## Comparison: How long is this vs other protocols?

| Protocol | Unstaking time |
|---|---|
| Ethereum 2.0 | 1-2 weeks |
| Lido (stETH) | None (liquid) |
| Cosmos | 21 days |
| Livepeer | ~7 days (7 rounds) |

## Next steps after undelegation
- Reclaim your LPT from Arbitrum
- Bridge back to Ethereum if desired
```

**Effort estimate:** 3-4 hours (protocol spec + Explorer verification + SME review)

**Priority:** 2/5 (high)

---

### 4. ⚠️ BLOCKED: Four ready pages in TO-ADD/ must be promoted

**Current state:** Four pages are publication-ready but gated in `TO-ADD/` directory:
- `choose-a-delegate.mdx` (16.6 KB) — orchestrator selection guide
- `delegation-management.mdx` (12 KB) — managing stake, redelegation
- `delegation-rewards.mdx` (9.8 KB) — tracking, claiming, performance
- `overview.mdx` (6.3 KB) — revised delegation overview

**What's needed:**
- Audit each for:
  - Accuracy (current numbers, protocol mechanics)
  - Completeness against canonical journey
  - Link health (all references current)
  - Frontmatter (metadata, breadcrumb routing)
- Publish to main directories:
  - `delegation/choose-a-delegate.mdx`
  - `delegation/delegation-management.mdx`
  - `delegation/delegation-rewards.mdx`
  - `delegation/overview.mdx` (replace current)
- Update nav.json to route all four
- Update portal.mdx to link appropriately

**Canonical order in nav:**
1. getting-started.mdx (first bond)
2. delegation-rewards.mdx (operating)
3. delegation-management.mdx (managing)
4. choose-a-delegate.mdx (strategy/comparison) — OR pre-getting-started depending on decision

**Effort estimate:** 2-3 hours (audit + nav updates + testing)

**Priority:** 2/5 (high) — these unblock the yield-seeking journey

---

## High-priority gaps (blocking secondary paths)

### 5. ⚠️ NEEDED: delegation-economics.mdx content finalization

**Status:** Listed in critical gap #2 above. Flagging again for emphasis.

---

### 6. 🟡 NEEDED: New crypto user guide (L1 stranded path)

**Current state:** No dedicated guide for users arriving with LPT on Binance/L1/no wallet knowledge.

**What's needed (lightweight option):**
- Prepend to `bridge-lpt-to-arbitrum.mdx`:
  - "Do you need a wallet?" (explanation of what a wallet is, why)
  - Link to MetaMask setup guide OR phrase as "If you're new to self-custody, start here"
  - Pre-bridge checklist: "Before you start, you'll need: [MetaMask], [some ETH for gas], [LPT on Binance/L1]"

**Effort estimate:** 1-2 hours (primer writing + integration)

**Priority:** 3/5 (addresses high-volume, high-support-burden persona)

**Alternative (standalone):** Create `delegation/new-crypto-user-guide.mdx` (≈500 words) as dedicated entry point. Routes from portal.

---

### 7. ⚠️ STALE: treasury/allocations.mdx needs refresh

**Current state:** Lists funded proposals. Transformation SPE (Sept 2025), Protocol R&D SPE (Jan 2026), LiveInfra Q1 2026 are all post-likely-content-freeze.

**What's needed:**
- Option A (update): Refresh allocations list with current/recent SPEs. Effort: 2-3 hours.
- Option B (frame as examples): Add note: "For a live list of treasury allocations, see [link to Explorer]." Add 2-3 recent examples. Effort: 1 hour.

**Recommendation:** Option B (lighter lift, more sustainable). Frame page as "how the treasury works" with examples, link to live data.

**Effort estimate:** 1 hour

**Priority:** 4/5

---

### 8. ⚠️ NEEDS REVIEW: tokenomics.mdx (LIP-107/100 impact)

**Current state:** Describes inflation mechanics. LIP-107 (Feb 2026) proposes changes. LIP-100 proposes additions.

**What's needed:**
- Add [REVIEW-LIP-107] flag at top
- Add [REVIEW-LIP-100] flag at top
- Include note: "These parameters are subject to active governance and may change."
- Link to live LIP documents or snapshot vote results
- Flag for Mehrdad to review and update post-vote

**Effort estimate:** 0.5 hours (flagging + link insertion)

**Priority:** 4/5 (needed before launch)

---

### 9. ⚠️ NEEDS CONTEXT: getting-started.mdx (Arbitrum prerequisite)

**Current state:** Good content but buries the critical blocker: LPT must be on Arbitrum to delegate.

**What's needed:**
- Prepend 1-2 sentences: "**Prerequisite: Your LPT must be on Arbitrum One.** If you have LPT on Ethereum mainnet or a CEX, [link to bridge guide]."
- Optionally: Add flow diagram showing "Your LPT location → which guide to follow"

**Effort estimate:** 0.5 hours (editing + link verification)

**Priority:** 3/5 (high-friction fix)

---

### 10. 🟡 NEEDS CREATION: Governance-to-Treasury bridge (active proposals)

**Current state:** No live proposal listing in LPT tab. Governance/processes.mdx links to voting mechanics, not active proposals.

**What's needed:**
- Option A: Embed Explorer voting UI in governance/processes.mdx or governance/overview.mdx
- Option B: Create clear link/CTA: "See active proposals → [link to Explorer]"
- Option C: Create `governance/active-proposals.mdx` that pulls from live source (requires automation)

**Recommendation:** Option B (lowest effort, sufficient). Effort: 0.5 hours.

**Priority:** 4/5

---

## Summary: Priority matrix

| Priority | Gap | Effort | Blocking? |
|---|---|---|---|
| 1/5 | delegation-economics.mdx creation | 6-8 hrs | YES — journey stage 2 |
| 2/5 | undelegation.mdx creation | 3-4 hrs | YES — journey stage 8 |
| 2/5 | Promote 4 ready TO-ADD pages | 2-3 hrs | YES — stages 5-7 |
| 3/5 | New crypto user guide | 1-2 hrs | INDIRECT — support burden |
| 3/5 | getting-started.mdx: Arbitrum prereq | 0.5 hrs | CRITICAL FRICTION |
| 4/5 | treasury/allocations.mdx: frame or refresh | 1 hr | Staleness risk |
| 4/5 | tokenomics.mdx: LIP-107 flag | 0.5 hrs | Pre-launch requirement |
| 4/5 | Governance: active proposal link | 0.5 hrs | UX friction |

**Total effort to close all gaps:** ~17-21 hours

**Critical path (must-do before launch):** 1, 2, 2 (top three) = 11-15 hours

---

## Review questions

1. **Is delegation-economics.mdx really the #1 priority?** Yes — it gates the yield-seeking decision. Without realistic yield data, delegators make uninformed choices.

2. **Should undelegation be own page or subsection of delegation-management?** Recommendation: own page. The unbonding period and exit flow deserve dedicated focus (builds trust/confidence).

3. **Are the effort estimates realistic?** These assume:
   - SME access available (Mehrdad, protocol team)
   - Live data sources accessible (Explorer, LIPs)
   - No design/structure debates
   - Review cycle ≤1 round

4. **What's the launch blocker?** Delegation-economics.mdx. Without it, primary journey is incomplete. Recommend: don't launch without 1, 2, and at least 2 of the 4 TO-ADD pages.

---