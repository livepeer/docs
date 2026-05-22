# Delegators / LP Token — Information Architecture

**Tab**: Delegators / LP Token
**Audience**: `delegator`
**Generated**: 2026-04-06
**Status**: DRAFT — based on audience-design v4, Agreed IA (March 2026), TO-ADD section-analysis, Notion research, GitHub repo state
**Authoritative IA reference**: Agreed IA Notion page `31e660222d0881aeb656d8c27a9753d5`

---

## 1. Confirmed Tab Structure (from Agreed IA)

The Agreed IA March 2026 confirmed five top-level sections for LP Token:

```
LP TOKEN TAB
├── 1. Hub (About LPT)
│   ├── [landing] LP Token Portal
│   └── [concepts] Overview · Purpose · Tokenomics · Mechanics
├── 2. Delegating LPT              ← PRIMARY PERSONA SECTION
│   ├── [navigation] Section landing / disambiguation
│   ├── [concepts] What bonding means + reward mechanics
│   ├── [instruction] Getting LPT onto Arbitrum (bridge)
│   ├── [guide] Choosing an orchestrator
│   ├── [instruction] First delegation (tutorial candidate)
│   ├── [guide] Managing your delegation
│   └── [instruction] Exiting delegation / unbonding
├── 3. Governance & Treasury       ← CONSOLIDATED (was two sections)
│   ├── [concept] Governance overview
│   ├── [concept] Governance model
│   ├── [guide] Governance processes / voting
│   ├── [concept] Treasury overview
│   ├── [instruction] Submitting a proposal
│   └── [reference] Treasury allocations
├── 4. Guides & Resources
│   ├── [resource] Videos & Blogs
│   ├── [resource] LPT Exchanges
│   └── [resource] Protocol Token Flows
└── 5. Technical References        ← MISSING — must create
    ├── [reference] Contract addresses
    ├── [reference] Glossary (or link to Resource HUB)
    └── [reference] Key protocol parameters (live-verified)
```

**Note from Agreed IA**: Concept pages open question — own "Concepts" section vs folded into Hub. Same open Q applies to LP Token. Decision deferred. This IA treats them as a Concepts sub-group within the Hub pending resolution.

---

## 2. All Personas + Full Journey Maps

### 2.1 Primary Persona — The Yield Seeker (Score: 9)

**Who**: Holds LPT (from exchange, referral, or community reward). Wants passive income. Will not run a node. Moderate crypto literacy — comfortable with MetaMask and Arbitrum but not with protocol internals.

**Entry vector**: Exchange purchase → search "how to stake LPT" → Home routing CTA or direct search result

**Arriving question**: "My LPT is sitting idle — how do I stake it to earn rewards, and is there a catch?"

**Full question sequence (5 phases)**:

*Phase 1 — Should I care?*
1. Is LPT a real asset with a purpose or just a governance token?
2. What do I actually get from delegating — how much, in what token, how often?
3. What happens if I just hold it? Am I losing value?
4. Is this safe? Can I lose my tokens?
5. How is this different from ETH staking or Cosmos?

*Phase 2 — How does it work?*
6. What am I doing when I delegate — am I lending, voting, something else?
7. Where does new LPT come from? What drives the rate?
8. What is rewardCut, in plain English with an example?
9. What is feeShare and why does higher = better for me?
10. How long is my money locked up?
11. How much does it cost in gas on Arbitrum?
12. What is the 10% treasury allocation and does it affect my returns?

*Phase 3 — Which orchestrator do I pick? (highest-friction point)*
13. Where do I find orchestrators?
14. What is the active set and how do I know if one is in it?
15. What do the metrics mean — which ones actually matter?
16. How do I read reward call history?
17. What does a good vs bad orchestrator look like? Give me examples.
18. What red flags should I avoid?
19. Can I split between orchestrators? (No — surprises people)
20. What if my orchestrator goes inactive?

*Phase 4 — How do I do it?*
21. What do I need before starting? (Wallet, ETH for gas, LPT on Arbitrum)
22. My LPT is on Ethereum mainnet — what do I do?
23. What transactions do I sign and what does each one do?
24. How long does this take?
25. How do I confirm it worked?
26. Can I undo it immediately if I change my mind?

*Phase 5 — Now what?*
27. Do rewards accrue automatically or do I need to do something?
28. What is claimEarnings and when should I call it?
29. CRITICAL: What happens if I claim before my orchestrator calls reward()? (Can forfeit that round's rewards — Explorer PR #613 warning pending)
30. Should I compound or withdraw?
31. How do I switch orchestrators without unbonding?
32. How do I exit completely (unbond → wait → withdraw)?
33. How do I track performance?
34. What governance is there and should I participate?

**Success state**: Has bonded LPT to an orchestrator, understands the thawing period before committing, knows how to claim earnings, and can monitor their position.

---

### 2.2 Secondary Persona — The Active Stakeholder (Score: 8)

**Who**: Already bonded. Returns to manage stake or act on a governance proposal.

**Entry vectors**: Bookmark / Explorer notification / Discord governance proposal link

**Question sequences** (return-visit, not linear):
- "Is my orchestrator still performing? Should I move?"
- "A governance proposal is live — what does it propose and how do I vote independently?"
- "My orchestrator raised their reward cut — what are my options?"
- "I want to add more LPT to my existing position without unbonding"
- "I want to exit — how long will it take?"

**Path through tab**: Enters at Manage Your Delegation or Governance Processes — no need for Phase 1–3 content.

---

### 2.3 The L1 Stranded (Score: 7)

**Who**: Holds LPT on Ethereum mainnet. Doesn't know staking requires Arbitrum. Highest support burden alongside The New Crypto User.

**Entry vector**: Search / Discord / CEX purchase

**Hard-stop blocker**: Must bridge to Arbitrum before any staking action. The bridge section must appear before the bonding section (ordering constraint is met in the current proposed structure).

**Question sequence**:
1. Why can't I stake from my Ethereum wallet?
2. How do I bridge — what tool, what steps, how long does it take?
3. How much ETH do I need on Arbitrum for gas?
4. How do I confirm the bridge worked?
5. Now what? (→ routes to Yield Seeker Phase 3+)

**Special need**: Clear disambiguation section that identifies this situation. Currently no page explicitly addresses "my LPT is on L1" as a starting state.

---

### 2.4 The Governance Entrant (Score: 7)

**Who**: Holds LPT primarily for governance rights. May or may not be yield-motivated. Familiar with DAO governance from other protocols.

**Entry vector**: Governance forum link / community referral / LIP announcement

**Question sequence**:
1. How is my voting power calculated?
2. Can I vote independently of my orchestrator? (Vote detachment)
3. What proposals are currently active?
4. How do I vote — what transactions do I sign?
5. What is the quorum requirement?
6. Can I submit a proposal? What do I need?
7. What is the treasury and how does funding work?

**Blocker**: Must be bonded for meaningful voting power. Routing callout in Governance section acknowledges unbonded readers (they can read proposals but not vote).

---

### 2.5 The New Crypto User / CEX Buyer (High support burden)

**Who**: Bought LPT on Binance, Coinbase, or another CEX. LPT may be on the exchange, on L1 Ethereum, or already on Arbitrum but the user doesn't know the difference. Limited DeFi experience.

**Entry vector**: CEX purchase → Discord → community forum

**Additional needs vs Yield Seeker**:
- Needs wallet setup basics (what wallet to use, how to add Arbitrum network)
- May need to withdraw from CEX to wallet before bridging
- Gas confusion (why do I need ETH to do things with LPT?)
- Needs extreme clarity — no assumed knowledge of DeFi mechanics

**This persona currently has NO page that serves them.** The bridging guide assumes wallet setup is complete. A dedicated onboarding section or callout within the disambiguation page should address "I just bought LPT on an exchange — start here."

---

### 2.6 The Fiat Onramp User — NEW PERSONA (Currently undocumented)

**Who**: Entering via fiat gateway (USD/EUR/GBP/NGN) built by the LISAR SPE (September 2025). May have no prior crypto experience — purchased exposure to LPT staking directly with fiat currency.

**Status**: LISAR SPE built this fiat-to-delegation gateway. **No documentation exists anywhere in the repo, docs site, or Notion.** This persona is entirely unserved.

**What this persona needs**:
- Confirmation that their fiat purchase has been converted to staked LPT
- How to view their position (which interface — may not be the standard Explorer)
- How to understand their yield
- How to manage or exit their position
- Who to contact for support

**Gap severity**: Critical if the LISAR gateway is live and in use. Content must be created from scratch. Requires product owner input to understand the actual fiat gateway UX before documentation can be written.

---

### Persona Priority Stack (audience-needs-first)

| Rank | Persona | Drives structural decisions? | Content depth required |
|---|---|---|---|
| 1 | Yield Seeker | ✅ Yes — primary | Full 5-phase journey, all content sections |
| 2 | Active Stakeholder | Partially | Management and governance sections |
| 3 | L1 Stranded | Partially | Bridge section must be first-class, not buried |
| 4 | Governance Entrant | No | Governance section only |
| 5 | New Crypto User | No (served by existing path + callouts) | Disambiguation + onboarding callout |
| 6 | Fiat Onramp User | No (needs dedicated page once product documented) | TBD — requires LISAR SPE input |

---

## 3. Resolving the Rewards Placement Debate

**The question**: Should the "how rewards work" concept page appear BEFORE orchestrator selection or AFTER bonding?

**The debate**:
- ChatGPT recommendation: Pre-selection. The reader needs to understand rewardCut and feeShare before they can evaluate orchestrators. Putting economics after selection forces backtracking.
- Claude Web recommendation: Post-bonding. The reader has a real position to apply the numbers to, making the concepts stick better.

**Recommendation: Pre-selection. Here's why.**

The primary persona's highest-friction point is Phase 3 — choosing an orchestrator. The two most important evaluation criteria are rewardCut and feeShare. If the reader doesn't understand that lower rewardCut = more rewards and higher feeShare = more fees before they look at an orchestrator list, they cannot evaluate what they're seeing. They will either skip the economics entirely (choose badly) or have to read the economics page, go back to the orchestrator list, and re-evaluate.

More fundamentally: understanding that a 0% rewardCut orchestrator who misses reward calls delivers less than a 10% rewardCut orchestrator who calls every round is the most important conceptual prerequisite for orchestrator selection. This understanding cannot be deferred to post-bonding without harming the primary persona.

**Resolved placement**: Delegation economics concept → Orchestrator selection → Bonding transaction

The economics page should be short (concept + worked example), not a reference dump. The full reward formula reference can live in Technical References or in an accordion on the economics page itself.

---

## 4. Full Journey Map (Linear → Operational)

### Linear (Yield Seeker primary — covers all personas)

| Position | Stage | Section | lifecycleStage |
|---|---|---|---|
| 1 | Identify path | Disambiguation / Where do I start? | `discover` |
| 2 | Decide participation | What bonding means + dilution risk | `evaluate` |
| 3 | Get tokens in position | Bridge LPT to Arbitrum (if needed) | `setup` |
| 4 | Understand economics | Delegation economics — rewards, rewardCut, feeShare | `evaluate` |
| 5 | Choose orchestrator | Orchestrator evaluation + selection | `evaluate` |
| 6 | Complete first bond | First delegation transaction | `setup` |
| 7 | Verify and watch | Confirm delegation, monitor rewards | `operate` |
| 8 | Claim and manage | Claim earnings, compound, redelegate, unbond | `operate` |
| 9 | Governance participation | Vote on proposals, understand treasury | `operate` |

### On-Demand (Return visits — Active Stakeholder primary)

- Current yield for their orchestrator (inflation + commission math)
- How to check reward call status this round
- Claim earnings without triggering unintended unbond
- Thawing period current value + exit timeline
- Live governance proposals and voting
- How to redelegate without unbonding
- Bridge flow (gas cost, confirmation time)
- Treasury status and active proposals

### Cross-Tab

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → LP Token | Audience routing CTA for LPT holders |
| Inbound | About → LP Token | Protocol economics depth → delegate action |
| Inbound | Orchestrators → LP Token | Operators recruit delegators; reward cut info links here |
| Outbound | LP Token → Orchestrators | Delegators evaluating operators want deeper context |
| Outbound | LP Token → About | Protocol economics architecture depth |
| Outbound | LP Token → Resource HUB | Changelog, glossary, cross-cutting reference |

---

## 5. Ideal Section Structure

Mapped to the Agreed IA six-position taxonomy. Section numbers reference the full flat list; group labels reference the Mintlify nav structure.

---

### GROUP: Hub (About LPT)

**Position 1 — Landing**

#### S1. LP Token Portal
**Reader question**: "Where do I go? Is this the right tab for me?"
**purpose**: `orient`
**pageType**: `navigation`
**lifecycleStage**: `discover`
**Entry state**: Just arrived — doesn't know which section applies
**Exit state**: Routed to the correct section for their situation (delegating, governance, or bridging)
**Existing**: `token-portal.mdx` (4.3KB) — not per canonical portal spec; needs rebuild
**Gap**: No audience routing cards; not structured as a true portal with disambiguation

---

**Position 2 — Concepts**

#### S2. LPT Overview
**Reader question**: "What is LPT and what is it actually for?"
**purpose**: `explain`
**pageType**: `concept`
**lifecycleStage**: `discover`
**Entry state**: Has heard of LPT; doesn't know its protocol role
**Exit state**: Can describe LPT's three functions (staking, governance, inflation) and knows why delegation exists
**Existing**: `about/overview.mdx` (5.3KB) ✅

#### S3. LPT Purpose
**Reader question**: "Why does this token exist — what problem does it solve?"
**purpose**: `explain`
**pageType**: `concept`
**lifecycleStage**: `discover`
**Entry state**: Knows what LPT is; wants to understand the design intent
**Exit state**: Understands dilution risk of not staking and the network security rationale for delegation
**Existing**: `about/purpose.mdx` (9.7KB) ✅

#### S4. Tokenomics
**Reader question**: "How is the LPT supply managed and where do new tokens come from?"
**purpose**: `explain`
**pageType**: `concept`
**lifecycleStage**: `evaluate`
**Entry state**: Interested in staking; wants to understand inflation model before committing
**Exit state**: Knows how inflation adjusts (target bonding rate, adjustment alpha), where genesis supply came from, and how treasury allocation affects yield
**Existing**: `about/tokenomics.mdx` (5.7KB) ⚠️ needs LIP-107/100 review
**Gap**: Treasury Reward Cut Rate reference needs live-verify; LIP-107/100 coverage unclear

#### S5. Mechanics
**Reader question**: "How does the protocol actually work at a technical level?"
**purpose**: `explain`
**pageType**: `concept`
**lifecycleStage**: `evaluate`
**Entry state**: Understands delegation at a high level; wants to understand rounds, BondingManager, checkpoints
**Exit state**: Can explain how rounds work, why missed reward calls matter, how claimEarnings interacts with the cumulative factor
**Existing**: `about/mechanics.mdx` (5KB) ✅ — may need claims timing edge case added (from Notion signal)

---

### GROUP: Delegating LPT

**Position 3 — Get Started / Quickstart (primary persona path)**

#### S6. Which Situation Is Mine? (Disambiguation)
**Reader question**: "I hold LPT — which of these situations is mine?"
**purpose**: `orient`
**pageType**: `navigation`
**lifecycleStage**: `discover`
**Entry state**: Has LPT somewhere; doesn't know which path applies
**Exit state**: Has identified whether their LPT is on L1, Arbitrum, or a CEX — routed to correct next section
**Existing**: Nothing. `delegation/overview.mdx` exists but is not structured as a disambiguation page.
**Gap**: 🔴 MISSING — most critical structural gap. Every persona needs this before proceeding.
**Required content**:
- Three-path routing: "LPT on Arbitrum → start here", "LPT on L1 Ethereum → bridge first", "LPT on a CEX → withdraw to wallet first"
- "New to crypto? Start here" callout
- Fiat onramp routing (if LISAR gateway documented)
- Quick facts box: what delegation is, what you're committing to, what you get

#### S7. What Bonding Actually Means
**Reader question**: "What does bonding my LPT actually do — for me and for the network?"
**purpose**: `explain`
**pageType**: `concept`
**lifecycleStage**: `discover` → `evaluate`
**Entry state**: Has been routed here from disambiguation; knows they want to stake but doesn't understand the mechanics
**Exit state**: Knows what bonding is (not lending, not transferring ownership), understands dilution risk of not staking, understands the thawing period exists before committing
**Existing**: Content is scattered across `about-delegators.mdx`, `overview.mdx`, and `getting-started.mdx` — no single clean page
**Gap**: 🟡 Needs consolidation. Prior analysis recommends merging into a clean overview page.
**Required content**:
- Plain-English bonding explanation (non-custodial, attributed to orchestrator, earns share of rewards)
- Dilution risk — why unbonded LPT loses proportional ownership over time
- What happens to your tokens (BondingManager holds them; you retain ownership)
- The thawing period — name it early before they commit
- What you can and cannot do while bonded
- Safety: slashing disabled on mainnet; the real risk is missed reward calls

#### S8. Getting LPT onto Arbitrum
**Reader question**: "My LPT is on Ethereum mainnet — how do I get it to where staking happens?"
**purpose**: `build`
**pageType**: `instruction`
**lifecycleStage**: `setup`
**Entry state**: Holds LPT on L1 Ethereum or a CEX; cannot stake until on Arbitrum
**Exit state**: LPT balance visible on Arbitrum; wallet connected and ready to bond
**Existing**: `bridge-lpt-to-arbitrum.mdx` (26.3KB) ✅ — described as "strong" in prior analysis
**Gap**: 🟡 Needs CEX withdrawal path added (for New Crypto User). Currently assumes wallet-held LPT.
**Required content**:
- Path A: LPT in MetaMask/wallet on L1 → Arbitrum bridge → verify
- Path B: LPT on CEX → withdraw to wallet → bridge (or direct to Arbitrum if CEX supports it)
- Arbitrum bridge tool link + Livepeer L2 migration tool link
- Gas requirements (small ETH on both L1 for bridge tx and Arbitrum for future txs)
- How to verify arrival (Arbiscan / Explorer balance)
- Estimated time (minutes, not hours for Arbitrum bridge)

**Position 4 — Operational / How-To**

#### S9. How Delegation Economics Work
**Reader question**: "How much will I earn, and what are the variables that affect my return?"
**purpose**: `explain`
**pageType**: `concept`
**lifecycleStage**: `evaluate`
**Entry state**: Ready to evaluate orchestrators; needs to understand rewardCut and feeShare before they can interpret what they're looking at
**Exit state**: Can calculate approximate yield given commission rates and inflation; understands that reward call consistency matters more than commission rate; knows rewardCut direction (lower = better) and feeShare direction (higher = better)
**Existing**: `delegation-economics.mdx` — 🔴 736B STUB. Highest priority write.
**Source content**: Notion `2bf66022-2d08-81e5-9a99-e076c4a3c3ee` (cumulative reward factor), TO-ADD `delegation-rewards.mdx` (9.8KB), `overview.mdx` (LaTeX formulas to extract)
**Required content**:
- Two income streams: LPT inflation rewards + ETH fees (demand-driven)
- rewardCut: plain English + directional (lower = better for delegator) + worked example
- feeShare: plain English + directional (higher = better for delegator) + worked example
- Treasury Reward Cut Rate: what the 10% treasury allocation means for delegator yield `[verify-live: LIPs repo]`
- Why reward call consistency beats commission rate (0% rewardCut orchestrator who misses 1/3 rounds = 33% rewardCut orchestrator who calls every round)
- How the cumulative reward factor works (simplified, not LaTeX)
- Approximate yield range (do not hard-code — link to Explorer for live figures) `[verify-live: explorer]`
- The earnings claim timing edge case: claim before orchestrator calls reward() = forfeit that round. Explorer warning pending (PR #613). `[verify-live: github.com/livepeer/explorer/pull/613]`
- What compounding looks like over time

#### S10. Choosing an Orchestrator
**Reader question**: "Which orchestrator should I delegate to, and what should I actually check before deciding?"
**purpose**: `choose`
**pageType**: `guide`
**lifecycleStage**: `evaluate`
**Entry state**: Understands rewardCut and feeShare; ready to evaluate real orchestrators
**Exit state**: Has identified an orchestrator meeting their criteria (reward call history ≥ 28/30 rounds, rewardCut competitive, feeShare meaningful, active set confirmed) and is ready to bond
**Existing**: `TO-ADD/choose-a-delegate.mdx` (16.6KB) 🟡 NOT PUBLISHED — near-complete, ready for promotion after SME review
**Gap**: Needs video embed with real ID; unbonding period duration needs SME confirmation; active set size needs live verify
**Required content** (already in TO-ADD file):
- Researched vs blind delegation comparison table
- Pre-delegation checklist (LPT on Arbitrum, ETH for gas, compatible wallet)
- Active set explanation (top 100 `[verify-live]` by bonded stake)
- Reward call history — how to read, what "good" looks like, why it matters more than commission
- rewardCut evaluation with directional guidance
- feeShare evaluation with directional guidance
- Commission change risk (orchestrators can change anytime — monitor your position)
- Stake concentration / network health considerations
- Longevity and alignment signals
- Checklist before bonding
- ⚠️ Risk callout: reward cut rug pull risk (orchestrators can raise commission without notice; Notion suggestion `22b92e61`)

#### S11. First Delegation — Tutorial
**Reader question**: "How do I actually bond my LPT to an orchestrator — step by step?"
**purpose**: `start`
**pageType**: `tutorial` (learns by building — completes a real bonding transaction)
**lifecycleStage**: `setup`
**Entry state**: Has chosen an orchestrator; LPT is on Arbitrum; has ETH for gas
**Exit state**: Has signed Approve + Bond transactions; delegation confirmed in Explorer; knows what to do next
**Existing**: Steps exist in `choose-a-delegate.mdx` (Step 6 section) and `getting-started.mdx` — but not structured as a standalone tutorial
**Gap**: 🔴 No dedicated tutorial page. The closest content is TO-ADD/choose-a-delegate.mdx Step 6 — can be extracted as the tutorial basis.
**Tutorial structure** (real delegation transaction as outcome):
- Prerequisites confirmation (checklist)
- Step 1: Connect wallet to Explorer
- Step 2: Navigate to chosen orchestrator profile
- Step 3: Confirm active status
- Step 4: Click Delegate, enter amount
- Step 5: Sign Approve transaction — what it does, gas cost
- Step 6: Sign Bond transaction — what it does, gas cost
- Step 7: Verify delegation — what to look for in Explorer + Arbiscan
- Step 8: What happens next (rewards start accruing; first claim available next round)
- Video walkthrough `[placeholder — needs recording]`
- FAQ: Can I undo this immediately? (No — thawing period applies)

**Position 5 — Guides / Advanced**

#### S12. Managing Your Delegation
**Reader question**: "How do I claim rewards, switch orchestrators, and exit my position?"
**purpose**: `operate`
**pageType**: `guide`
**lifecycleStage**: `operate` / `optimise`
**Entry state**: Has bonded stake; wants to manage ongoing position
**Exit state**: Has claimed earnings at least once; knows how to redelegate without unbonding; knows the unbond → wait → withdraw flow
**Existing**: `TO-ADD/delegation-management.mdx` (12KB) 🟡 NOT PUBLISHED — near-complete, ready for promotion after SME review of unbonding period duration
**Required content** (already in TO-ADD file):
- How rewards accumulate (automatic; no action needed to accrue)
- ⚠️ CRITICAL CALLOUT: Claim timing edge case — claim AFTER orchestrator calls reward() for the round. (Notion signal, Explorer PR #613)
- How to claim earnings via Explorer
- Compound vs withdraw decision
- How to redelegate (no unbonding required; takes effect next round)
- When to switch orchestrators (signal list)
- Full unbonding flow: unbond → thawing period `[verify-live: BondingManager]` → withdraw
- Partial unbonding (supported)
- Cancel unbonding with rebond()
- Monitor signals: reward call rate drop, commission change, active set exit, governance proposals

---

### GROUP: Governance & Treasury (consolidated per Agreed IA)

**Position 5 — Guides**

#### S13. How Governance Works
**Reader question**: "How does LPT token governance work — who votes and on what?"
**purpose**: `explain`
**pageType**: `concept`
**lifecycleStage**: `operate`
**Entry state**: Bonded delegator; curious about governance
**Exit state**: Knows that governance is stake-weighted, that vote detachment allows independent voting, and that proposals go through a forum → on-chain → timelock flow
**Existing**: `governance/overview.mdx` (6.4KB) + `governance/model.mdx` (7.2KB) ✅ — may have scope overlap with About; content review needed

#### S14. Participating in Governance
**Reader question**: "How do I vote on a proposal and can I vote independently of my orchestrator?"
**purpose**: `operate`
**pageType**: `guide`
**lifecycleStage**: `operate`
**Entry state**: Bonded; a proposal is live; doesn't know how to vote or whether their orchestrator votes for them
**Exit state**: Has cast a vote on an open proposal (or knows exactly how to); knows vote detachment means their vote overrides their orchestrator's on their stake
**Existing**: `governance/processes.mdx` (8.9KB) ✅

#### S15. Treasury Overview
**Reader question**: "What is the Livepeer treasury and where does the money come from?"
**purpose**: `explain`
**pageType**: `concept`
**lifecycleStage**: `operate`
**Entry state**: Governance-aware delegator; wants to understand treasury funding and purpose
**Exit state**: Knows Treasury Reward Cut Rate feeds the treasury `[verify-live]`, what SPEs are, how proposals are approved and disbursed
**Existing**: `treasury/overview.mdx` (4.9KB) ✅

#### S16. Submitting a Governance Proposal
**Reader question**: "How do I put a formal proposal to the community and what do I need to qualify?"
**purpose**: `build`
**pageType**: `instruction`
**lifecycleStage**: `operate`
**Entry state**: Has minimum bonded stake (Proposer Bond `[verify-live: LivepeerGovernor]`); has a proposal to advance
**Exit state**: Has submitted a formal proposal or confirmed they meet the requirements; understands voting period, quorum, timelock
**Existing**: `treasury/proposals.mdx` (6.5KB) ✅

#### S17. Treasury Allocations
**Reader question**: "What has the treasury funded?"
**purpose**: `reference`
**pageType**: `reference`
**lifecycleStage**: `operate`
**Entry state**: Governance participant wanting historical context
**Exit state**: Can see recent allocations and SPE funding history
**Existing**: `treasury/allocations.mdx` (6.1KB) ⚠️ likely stale — needs update

---

### GROUP: Guides & Resources

#### S18. Videos & Blogs
**purpose**: `reference` / `resource`
**pageType**: `resource`
**Existing**: `resources/delegator-videos-and-blogs.mdx` (3.9KB) ⚠️ needs recency audit

#### S19. LPT Exchanges
**purpose**: `reference`
**pageType**: `reference`
**Existing**: `resources/exchanges.mdx` (56.6KB) ✅

#### S20. Protocol Token Flows
**purpose**: `explain`
**pageType**: `concept`
**Existing**: `resources/lpt-eth-usage.mdx` (1.9KB) ✅ — likely thin; may need expansion

---

### GROUP: Technical References ← MISSING SECTION

**Gap**: Confirmed missing in Agreed IA. Must be created.

#### S21. Protocol Parameters Reference
**Reader question**: "What are the current values for the protocol parameters that affect my delegation?"
**purpose**: `reference`
**pageType**: `reference`
**lifecycleStage**: Any
**Entry state**: Delegator wanting to verify specific values
**Exit state**: Has confirmed current values for active set size, unbonding period, treasury rate, inflation parameters
**Required content**:
- Active set size `[verify-live: BondingManager numActiveTranscoders]`
- Unbonding period `[verify-live: BondingManager unbondingPeriod]`
- Target bonding rate `[verify-live: LIPs + Explorer]`
- Inflation adjustment alpha `[verify-live: LIPs]`
- Treasury Reward Cut Rate `[verify-live: LIP-92 + Explorer]`
- Proposer Bond minimum `[verify-live: LivepeerGovernor]`
- Quorum threshold `[verify-live: LivepeerGovernor]`
- Link to Arbiscan for live on-chain verification
- Link to Explorer for live state

#### S22. Contract Addresses
**Reader question**: "What are the deployed Livepeer contract addresses on Arbitrum?"
**purpose**: `reference`
**pageType**: `reference`
**Required content**:
- BondingManager
- Minter
- RoundsManager
- LivepeerGovernor / BondingVotes
- L2LPTGateway
- LPT token contract
- Source: Arbiscan label page + governor-scripts addresses.js
- `[verify-live against Arbiscan before publishing]`

#### S23. Glossary (or link to Resource HUB glossary)
**purpose**: `reference`
**pageType**: `reference`
**Note**: Per Resource HUB design, glossary may live in Resource HUB and link from here. Decision deferred to Resource HUB open Q resolution.

---

## 6. Tutorial Candidate Assessment

**Brief requirement**: At least one tutorial in this tab (learns by building — completes a real bonding transaction).

**Best existing source material**:
- `TO-ADD/choose-a-delegate.mdx` Step 6 section (Step-by-step delegation in Explorer with `<Steps>` components) — ready content
- `getting-started.mdx` — Explorer steps, StyledSteps pattern
- Notion `2bf66022-2d08-81bb-837e-e56104f67496` — rewards accumulation context for post-tutorial understanding

**Tutorial structure**: The delegation tutorial (S11) should be a standalone page extracted from the choose-a-delegate.mdx content + getting-started.mdx pattern. The tutorial outcome is a confirmed, on-chain delegation transaction. This is the only tutorial needed for the primary persona's linear journey.

**Video requirement**: A screen recording of the full delegation flow in Explorer is needed. The TO-ADD file has a placeholder embed. Sourcing this video is a dependency for the tutorial page.

---

## 7. Content Status Summary

| Section | Existing content | Status |
|---|---|---|
| S1. LP Token Portal | token-portal.mdx | ⚠️ Needs rebuild per portal spec |
| S2–S5. Hub Concepts | about/overview, mechanics, purpose, tokenomics | ✅ Mostly good; tokenomics needs LIP review |
| S6. Disambiguation | — | 🔴 MISSING — highest structural priority |
| S7. What bonding means | Scattered across 3 files | 🟡 Needs consolidation into one page |
| S8. Bridge LPT | bridge-lpt-to-arbitrum.mdx | ✅ Strong — needs CEX path |
| S9. Delegation economics | delegation-economics.mdx | 🔴 STUB — must write from scratch |
| S10. Choosing orchestrator | TO-ADD/choose-a-delegate.mdx | 🟡 Unpublished, near-complete |
| S11. First delegation tutorial | — | 🔴 MISSING — extract from TO-ADD content |
| S12. Managing delegation | TO-ADD/delegation-management.mdx | 🟡 Unpublished, near-complete |
| S13. Governance overview/model | governance/overview + model | ✅ Needs scope trim vs About |
| S14. Governance processes | governance/processes.mdx | ✅ |
| S15. Treasury overview | treasury/overview.mdx | ✅ |
| S16. Proposal submission | treasury/proposals.mdx | ✅ |
| S17. Treasury allocations | treasury/allocations.mdx | ⚠️ Likely stale |
| S18. Videos & Blogs | resources/delegator-videos-and-blogs.mdx | ⚠️ Recency audit needed |
| S19. LPT Exchanges | resources/exchanges.mdx | ✅ |
| S20. Token Flows | resources/lpt-eth-usage.mdx | ✅ Likely thin |
| S21. Protocol Parameters | — | 🔴 MISSING — new Technical References section |
| S22. Contract Addresses | — | 🔴 MISSING |
| S23. Glossary | — | Depends on Resource HUB decision |

**Legend**: ✅ Exists and functional · ⚠️ Exists but needs work · 🟡 Exists unpublished (TO-ADD) · 🔴 Missing

---

## 8. Priority Work Order

**P0 — Blocking (must exist before others make sense)**
1. S6: Disambiguation / "Where do I start?" — structural entry to the whole tab
2. S9: Delegation economics — prerequisite for orchestrator evaluation

**P1 — Core primary persona path (Yield Seeker)**
3. S7: What bonding means — consolidate existing scattered content
4. Promote S10: choose-a-delegate.mdx from TO-ADD (SME review required)
5. S11: First delegation tutorial — extract from TO-ADD, add video
6. Promote S12: delegation-management.mdx from TO-ADD (unbonding period SME review)

**P2 — Supporting sections**
7. S1: Rebuild token-portal.mdx per canonical portal spec
8. S8: Bridge page — add CEX withdrawal path
9. S4: Tokenomics — LIP-107/100 review
10. S21 + S22: Technical References (Protocol Parameters, Contract Addresses)

**P3 — Governance & Treasury (secondary persona)**
11. S13: Governance — scope trim vs About
12. S17: Treasury allocations — staleness update

**P4 — Resources**
13. S18: Videos & Blogs — recency audit
14. S23: Glossary — pending Resource HUB decision

---

## 9. Critical Accuracy Issues (from prior section-analysis — still unresolved)

### feeShare vs Fee Cut direction
`getting-started.mdx` has a labelling confusion between feeShare (what orchestrator passes to delegators) and Fee Cut. The TO-ADD files have the correct interpretation but this must be verified against the current Explorer UI label before any page is published.

**Correct model:**
- `rewardCut` = % of LPT inflation orchestrator keeps (lower = better for delegator)
- `feeShare` = % of ETH fees distributed to delegators (higher = better for delegator)

### Earnings claim timing edge case
If a delegator calls `claimEarnings()` before the orchestrator has called `reward()` for the current round, `lastClaimRound` is set to the current round and the delegator forfeits that round's rewards and fees. This is a live bug/UX gap (Explorer PR #613 adds a warning, not yet deployed as of April 2026). **Must be documented as a warning callout on S9 and S12.**

### Unbonding period duration
The protocol has historically used 7 rounds (~7 days at ~21 hours per round). `getting-started.mdx` stated "approximately 21 hours" which is likely referring to one round, not the full unbonding period. Requires SME confirmation (Mehrdad or Rick) against `BondingManager.unbondingPeriod` before any page is published.
