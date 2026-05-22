**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## Journey 1: Sub-type A (Yield-Seeking Delegator)

### Canonical 8-stage journey

| Position | Stage | Reader's question | Content need | Lifecycle stage | Page |
|---|---|---|---|---|---|
| 1 | **Identify path** | Which LPT holder am I? (first-time vs. returning? L1 vs L2? New crypto vs experienced?) | Role navigator — "which section is mine?" | `discover` | portal.mdx |
| 2 | **Decide participation** | Does delegation fit my goals and risk? What am I actually committing to? | Value proposition + risk explanation | `evaluate` | about/overview.mdx, about/purpose.mdx |
| 3 | **Understand earnings model** | How much can I earn? What variables affect my yield? | Economic mechanics and realistic projections | `evaluate` | delegation/delegation-economics.mdx |
| 4 | **Get tokens in position** | I have LPT on L1/CEX — how do I get it to Arbitrum? | Bridge tutorial + wallet setup for L1-stranded users | `setup` | delegation/bridge-lpt-to-arbitrum.mdx |
| 5 | **Choose orchestrator** | Which orchestrator should I delegate to? What should I look for? | Comparison framework + Explorer walkthrough + top-N orchs | `evaluate` | delegation/choose-a-delegate.mdx |
| 6 | **Complete first bond** | How do I actually delegate? What happens next? What is thawing period? | Step-by-step on-chain delegation + verification | `setup` | delegation/getting-started.mdx |
| 7 | **Watch & operate** | How do I monitor my yield? How do I claim rewards? Is my orchestrator performing? | Reward tracking + claim process + performance evaluation | `operate` | delegation/delegation-rewards.mdx, delegation/delegation-management.mdx |
| 8 | **Manage & exit** | How do I change orchestrators? How do I undelegate? What's the unbonding period? | Redelegation guide + unbonding mechanics + exit flow | `optimise` | delegation/delegation-management.mdx, delegation/undelegation.mdx |

### Question sequence (what delegator asks at each stage)

**Stage 1 (Discovery):**
- Q: What is this tab for?
- Q: What role am I? (first-timer vs. existing delegator vs. governance-focused)
- Q: Where do I start?

**Stage 2 (Evaluate: Value & Risk):**
- Q: What does staking actually do?
- Q: What am I committing to by delegating?
- Q: What can go wrong?
- Q: How is this different from holding?

**Stage 3 (Evaluate: Economics):**
- Q: How much will I earn?
- Q: What's the current yield?
- Q: How is yield calculated?
- Q: Does my orchestrator choice matter financially?
- Q: What about inflation vs. fees?

**Stage 4 (Setup: Bridge):**
- Q: Where is my LPT right now? (L1 vs L2 vs CEX)
- Q: Do I need to bridge?
- Q: How do I bridge? (step-by-step)
- Q: How much does bridging cost?
- Q: What could go wrong?
- Q: [If new crypto user] What is a wallet? Do I need one?

**Stage 5 (Evaluate: Choose Orchestrator):**
- Q: How do I choose an orchestrator?
- Q: What metrics matter? (commission, stake, reward history, Active Set standing)
- Q: How do I compare them?
- Q: Can I see their performance history?
- Q: What if I pick wrong?
- Q: Can I change later?

**Stage 6 (Setup: Delegate):**
- Q: How do I actually delegate on-chain?
- Q: Which wallet/interface do I use?
- Q: What is this "thawing period"?
- Q: When do I start earning?
- Q: How do I verify it worked?

**Stage 7 (Operate: Track & Claim):**
- Q: Where can I see my rewards?
- Q: How often do I earn?
- Q: How do I claim my rewards?
- Q: What if I forget to claim?
- Q: Is my orchestrator still performing?

**Stage 8 (Optimise: Manage & Exit):**
- Q: How do I switch orchestrators?
- Q: What happens to my rewards if I undelegate?
- Q: How long is the unbonding period?
- Q: Can I get my LPT back?
- Q: What happens after unbonding completes?

### Journey map: current coverage

| Stage | Page | Status | Gap |
|---|---|---|---|
| 1 | portal.mdx | 🔴 MISSING | Must create proper entry point |
| 2 | about/overview.mdx, about/purpose.mdx | ⚠️ FRAGMENTED | Consolidate or create dedicated page |
| 3 | delegation/delegation-economics.mdx | 🔴 STUB (736 bytes) | **HIGHEST PRIORITY WRITE** |
| 4 | delegation/bridge-lpt-to-arbitrum.mdx | ✅ GOOD (26.3 KB) | Strong content, tabbed layout |
| 5 | delegation/choose-a-delegate.mdx | ⚠️ READY BUT UNPUBLISHED (16.6 KB) | Promote from TO-ADD/ |
| 6 | delegation/getting-started.mdx | ⚠️ GOOD CONTENT (9.2 KB) but missing Arbitrum context upfront | Add prerequisite framing |
| 7 | delegation/delegation-rewards.mdx | ⚠️ READY BUT UNPUBLISHED (9.8 KB) | Promote from TO-ADD/ |
| 7 | delegation/delegation-management.mdx | ⚠️ READY BUT UNPUBLISHED (12 KB) | Promote from TO-ADD/ |
| 8 | delegation/undelegation.mdx | 🔴 MISSING | Must create |

---

## Journey 2: Sub-type B (Governance Participant)

### Canonical 5-stage journey

| Position | Stage | Reader's question | Content need | Lifecycle stage | Page |
|---|---|---|---|---|---|
| 1 | **Understand governance structure** | How does Livepeer governance work? How can I participate? | Governance model explanation | `evaluate` | governance/overview.mdx, governance/model.mdx |
| 2 | **Find active proposals** | What proposals are live right now? | Live proposal listing or embed | `discover` | governance/overview.mdx OR embed in governance/processes.mdx |
| 3 | **Learn to vote** | How do I vote on a proposal? | Step-by-step voting tutorial | `setup` | governance/processes.mdx |
| 4 | **Understand treasury & SPEs** | What is the treasury? What are SPEs? How do they get funded? | Treasury mechanics + SPE explanation | `evaluate` | treasury/overview.mdx, treasury/allocations.mdx |
| 5 | **Submit proposal (if interested)** | How do I submit an SPE proposal? What is the process? | Proposal submission tutorial | `operate` | treasury/proposals.mdx |

### Question sequence

**Stage 1 (Understand Structure):**
- Q: How does Livepeer governance work?
- Q: What can I vote on?
- Q: Can I vote independent of my orchestrator?
- Q: What is a LIP?
- Q: How does voting power work?

**Stage 2 (Find Active Proposals):**
- Q: What proposals are live right now?
- Q: When do voting windows close?
- Q: Where do I see proposal details?

**Stage 3 (Vote):**
- Q: How do I vote?
- Q: Can I vote multiple times?
- Q: Can I change my vote?
- Q: When do results get counted?

**Stage 4 (Understand Treasury):**
- Q: What is the treasury?
- Q: Where does treasury funding come from?
- Q: What are SPEs?
- Q: What has the treasury funded?
- Q: How do I propose a treasury allocation?

**Stage 5 (Submit Proposal):**
- Q: How do I submit an SPE proposal?
- Q: What information do I need?
- Q: What's the voting process?
- Q: What happens if it passes?

### Journey map: current coverage

| Stage | Page | Status | Gap |
|---|---|---|---|
| 1 | governance/overview.mdx, governance/model.mdx | ✅ GOOD (6.4 + 7.2 KB) | Scope overlap with About tab should be addressed |
| 2 | governance/processes.mdx (partial) | ⚠️ PARTIAL | No live proposal embed or clear link to live Explorer voting |
| 3 | governance/processes.mdx | ✅ GOOD (8.9 KB) | Clear voting tutorial |
| 4 | treasury/overview.mdx, treasury/allocations.mdx | ⚠️ GOOD FRAMEWORK BUT STALE (6.1 KB) | Allocations page likely outdated; needs REVIEW flag or link to live data |
| 5 | treasury/proposals.mdx | ✅ GOOD (6.5 KB) | Clear proposal submission process |

---

## Canonical journey step matrix (JTBD format)

| # | When... | I want to... | So I can... | Current coverage |
|---|---|---|---|---|
| **Yield Journey** | | | | |
| J1A | I have LPT and want to earn | understand what staking does and what I'm committing to | decide whether to proceed | ⚠️ fragmented across about/* |
| J2A | I'm ready to stake but my LPT is on L1/CEX | bridge to Arbitrum | actually delegate | ✅ bridge-lpt-to-arbitrum.mdx |
| J3A | I need to choose an orchestrator | compare operators on commission, reliability, Active Set standing | choose well (wrong choice costs money) | ⚠️ choose-a-delegate.mdx exists but unpublished |
| J4A | I'm bonded and want to track | see what I'm earning and whether my orchestrator is performing | know whether to stay or redelegate | ⚠️ delegation-rewards.mdx + delegation-management.mdx unpublished |
| J5A | I want to exit | understand unbonding period and what happens to earned rewards | get my LPT back without surprises | 🔴 MISSING |
| **Governance Journey** | | | | |
| J1B | A governance proposal is live | vote with my stake independently of my orchestrator | participate meaningfully | ✅ governance/processes.mdx |
| J2B | I want to understand the treasury | see what allocations have been made and how | evaluate governance decisions | ⚠️ treasury/allocations.mdx (stale) |
| J3B | I want to propose a treasury allocation | understand the SPE process | submit my proposal | ✅ treasury/proposals.mdx |

---

## Blocking decision: Rewards placement

**Question:** Should `delegation-economics.mdx` (rewards calculation) appear:
- **Option A (Pre-selection):** Before `choose-a-delegate.mdx` — reader needs to understand yield drivers (commission, inflation, fees) before choosing
- **Option B (Post-bonding):** After `getting-started.mdx` — reader has real position to apply numbers to

**Recommendation:** **Option A (pre-selection)**. Reasoning:
- The decision "should I delegate at all?" requires understanding realistic yields
- The decision "which orchestrator?" requires understanding how commission affects yield
- Reader needs economic context before they can evaluate trade-offs
- Post-bonding economics feels like "how to track" not "how to decide"

**Implementation:** Place `delegation-economics.mdx` at Stage 3 (between "value proposition" and "choose orchestrator").

---

## Review questions

1. **Is 8-stage journey for Sub-type A the right granularity?** Could combine stages 7-8 (operate + manage). Could split stage 2-3 (value + economics). What feels right?

2. **Should Sub-type B (governance) be own tab?** Recommendation: keep in LPT tab. Most governance participants are delegators; separate tab would orphan governance content.

3. **Are question sequences complete?** What questions are we missing at each stage?

4. **For L1-Stranded users, is Stage 4 (bridge) sufficient?** Or do they need Stage 4a (wallet setup) beforehand? Recommend: embedded wallet primer in `bridge-lpt-to-arbitrum.mdx`.

5. **What about returning delegators?** (already bonded, want to redelegate/claim/exit). Should they have separate entry? Recommendation: portal.mdx should ask "first time bonding?" and route accordingly.

---