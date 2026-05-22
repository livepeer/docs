# Delegators / LP Token — Page Content Map

**Purpose**: For each required page, defines what it MUST contain (audience-needs-first), current status, source material, and gaps.
**Generated**: 2026-04-06
**Companion files**: `delegators-IA.md` (structure), `sources.md` (source registry)

---

## How to read this document

Each page entry has:
- **Must contain**: The required H2 sections, data points, concepts, and callouts — the minimum for the page to serve its persona
- **Status**: EXISTS / STUB / UNPUBLISHED (TO-ADD/) / MISSING
- **Source material**: What existing content can feed this page
- **Gaps**: What is missing and where it might come from
- **SME review required**: Claims that must be verified before publishing

---

## GROUP: Hub (About LPT)

---

### S1. LP Token Portal
**Path**: `v2/lpt/token-portal.mdx`
**pageType**: navigation · **purpose**: orient · **lifecycleStage**: discover
**Status**: EXISTS — ⚠️ not per canonical portal spec

**Must contain**:
- Hero statement: what LPT is in one sentence
- Three audience routing cards (at minimum): "I want to stake my LPT" / "I want to participate in governance" / "I want to understand the economics"
- Fiat onramp card (once LISAR documented): "I bought LPT with fiat"
- Quick-stats block (live-verified): LPT staked, number of delegators, current inflation rate — link to Explorer
- "New to crypto?" callout → disambiguation page
- Navigation to all five top-level sections

**Source material**: Current token-portal.mdx (4.3KB); Notion Delegation marketing content (network stats: 14.2M LPT staked, $838.9k fees, 3,492 delegators — verify freshness)

**Gaps**: Needs full rebuild. Current portal is not audience-routing-first. Stats need live verification.

---

### S2. LPT Overview
**Path**: `v2/lpt/about/overview.mdx`
**Status**: EXISTS ✅

**Must contain**:
- What LPT is — token ticker, network, ERC-20 on Arbitrum One
- The three functions: staking bond / governance weight / inflation reward
- Why LPT is not "just a governance token" — it secures a working compute network
- Role map: how LPT connects Orchestrators ↔ Delegators ↔ Gateways
- Genesis supply fact (10M LPT) `[verify: Whitepaper]`
- How supply grows (inflation mechanism, brief)
- Cross-link: About tab for protocol depth; tokenomics page for supply detail

**Gaps**: Review for LIP-107/100 impact on overview framing.

---

### S3. LPT Purpose
**Path**: `v2/lpt/about/purpose.mdx`
**Status**: EXISTS ✅

**Must contain**:
- The network security argument: why stake-backing is necessary for Sybil resistance
- Dilution risk of not staking — proportional ownership decreases each round for unbonded holders
- Why delegation exists: separates capital provision from infrastructure operation
- The two-sided marketplace dynamic (Orchestrators compete for delegated stake by offering good commission)
- "Not your typical staking" framing — fees come from real work, not just inflation

**Gaps**: Review for current framing quality. May have scope overlap with S7 (What bonding means) — deduplicate.

---

### S4. Tokenomics
**Path**: `v2/lpt/about/tokenomics.mdx`
**Status**: EXISTS ⚠️ needs LIP-107/100 review

**Must contain**:
- Genesis supply: 10 million LPT `[verify: Whitepaper]`
- How Merkle Mine worked (brief — historical context)
- Inflation model: per-round minting, adjusts toward Target Bonding Rate `[verify-live: LIPs + Explorer]`
- Target Bonding Rate: 50% `[verify-live]`
- Inflation Adjustment alpha: 0.00005% per round `[verify-live]`
- Treasury Reward Cut Rate: currently diverts X% of per-round inflation to treasury `[verify-live: LIP-92]`
- What LIP-107 and LIP-100 changed (if anything affecting tokenomics)
- Live data callout: "Current inflation rate and bonding rate visible at [Explorer]"
- Do not hard-code any rate values — all `[verify-live]`

**Gaps**: LIP-107/100 coverage unknown. All live parameter values need verification pass before publish.

---

### S5. Mechanics
**Path**: `v2/lpt/about/mechanics.mdx`
**Status**: EXISTS ✅

**Must contain**:
- What a Round is — ~5,760 Arbitrum blocks, approximately one day `[verify: RoundsManager]`
- Active Set definition — top N orchestrators by bonded stake `[verify-live: numActiveTranscoders]`
- Reward() call — what it is, who calls it, what happens if missed
- BondingManager role — holds bonded tokens, manages accounting
- Cumulative reward factor — simplified (rewards compound automatically; claim moves balance)
- The earnings claim timing edge case: ⚠️ Claim AFTER orchestrator calls reward() for the round, not before. Claiming before forfeits that round's rewards (lastClaimRound set to current round). Explorer PR #613 adds warning (check if deployed).
- Governance mechanism: stake-weighted votes, BondingVotes checkpoints, vote detachment
- claimEarnings() — when called automatically (bond, unbond, rebond, withdraw) vs manually

**Source material**: Notion `2bf66022-2d08-81e5-9a99-e076c4a3c3ee` (full cumulative factor explanation); Discord signal `9497ab56` (earnings timing edge case — Rick/Foundation confirmed)

**Gaps**: Claims timing edge case should be added if not already in current file. Verify against current file content.

---

## GROUP: Delegating LPT

---

### S6. Disambiguation — Which Situation Is Mine?
**Path**: `v2/lpt/delegation/portal.mdx` (or `overview.mdx` rebuilt as disambiguation)
**pageType**: navigation · **purpose**: orient · **lifecycleStage**: discover
**Status**: 🔴 MISSING — highest structural priority

**Must contain**:

**H2: Where is your LPT right now?**
- Card: "On Arbitrum One in my wallet → Start at Step 1" → links to S9 (Economics) or S10 (Choose orchestrator)
- Card: "On Ethereum mainnet → Bridge first" → links to S8 (Bridge)
- Card: "On a centralised exchange (Coinbase, Binance, Kraken, etc.) → Withdraw first" → callout with brief withdrawal guidance then → S8
- Card: "I just bought with USD/EUR/GBP/NGN via the Livepeer fiat gateway → [LISAR path — TBD]"

**H2: New to this? Start here**
- "Never used a crypto wallet before" → brief onboarding callout (what wallet to get, how to add Arbitrum)
- "Already know the basics" → skip ahead

**H2: Returning delegator? Jump to**
- Claim earnings / compound → S12
- Switch orchestrators → S12
- Exit delegation → S12
- Vote on a governance proposal → S14

**Quick facts box** (non-negotiable — answers Phase 1 questions immediately):
- What you get: share of LPT inflation + share of ETH fees
- What you commit: LPT bonded to one orchestrator; thawing period to exit `[verify-live: BondingManager]`
- What you don't give up: custody of your tokens; governance rights
- Risk: missed reward calls by orchestrator = no income that round; slashing disabled on mainnet

**Source material**: No existing page. index.md notes provide routing logic. TO-ADD/section-analysis.md Phase 1 questions inform quick-facts content.

**Gaps**: 🔴 Must be created from scratch. Fiat onramp path cannot be documented until LISAR SPE product details are obtained.

---

### S7. What Bonding Actually Means
**Path**: `v2/lpt/delegation/about-delegation.mdx` (new consolidated page)
**pageType**: concept · **purpose**: explain · **lifecycleStage**: discover → evaluate
**Status**: 🔴 MISSING as standalone page — content scattered

**Must contain**:

**H2: Delegation is not lending**
- Your LPT goes to the BondingManager contract — not to the orchestrator directly
- You remain the owner; the contract is non-custodial
- You can exit at any time (with a waiting period)
- The orchestrator cannot access, move, or take your LPT

**H2: What bonding does**
- Attributes your stake to an orchestrator — increases their network weight
- Entitles you to a proportional share of their LPT inflation rewards
- Entitles you to a proportional share of their ETH fee revenue
- Gives you voting power in governance (stake-weighted)

**H2: The dilution problem**
- Each round, new LPT is minted and distributed to active stakers
- Unbonded LPT holders receive nothing — their ownership percentage decreases
- Illustration: if inflation is X% and you don't stake, your share of total supply shrinks by X% per round
- This is the primary economic argument for delegating

**H2: The thawing period**
- You cannot withdraw immediately — initiating unbonding starts a waiting period `[verify-live: BondingManager.unbondingPeriod — historically ~7 rounds]`
- During the wait, you earn no rewards
- You can cancel (rebond) during the wait if you change your mind
- Partial unbonding is supported — you can exit a portion while keeping the rest bonded

**H2: What you can do while bonded**
- Redelegate to a different orchestrator (no wait required)
- Add more LPT to your bonded position
- Claim earnings at any time
- Vote on governance proposals

**H2: Safety**
- Slashing is disabled on mainnet — you cannot lose tokens due to orchestrator misbehaviour
- The real risk is an orchestrator not calling Reward() — missed rounds = zero income that round
- Commission can be changed by the orchestrator without notice — monitor your position

**Source material**: `about-delegators.mdx` (risk list, rights/constraints — good but needs plain-English rewrite); `getting-started.mdx` (risk factors box); `purpose.mdx` (dilution framing); TO-ADD/section-analysis.md (Phase 1 analysis)

**Gaps**: Needs fresh writing — no single existing page covers this clearly in plain English.

---

### S8. Getting LPT onto Arbitrum
**Path**: `v2/lpt/delegation/bridge-lpt-to-arbitrum.mdx`
**pageType**: instruction · **purpose**: build · **lifecycleStage**: setup
**Status**: EXISTS ✅ (26.3KB, described as "strong") — needs CEX withdrawal path

**Must contain**:

**H2: Before you bridge — what you need**
- A compatible wallet (MetaMask, Coinbase Wallet, WalletConnect)
- ETH on Ethereum mainnet for bridge gas (typically $5–20 depending on gas prices)
- ETH on Arbitrum for future delegation transactions (a few cents)

**H2: Path A — LPT in your wallet on Ethereum mainnet**
- Use Arbitrum Bridge: `bridge.arbitrum.io`
- Or use Livepeer L2 Migration Tool: `explorer.livepeer.org/migrate`
- Step-by-step: connect wallet → select LPT token → enter amount → approve → bridge → wait → verify
- Estimated time: 10–30 minutes (Arbitrum optimistic rollup deposit)
- How to verify: check LPT balance on Arbitrum in Explorer or Arbiscan

**H2: Path B — LPT on a centralised exchange** ← MISSING from current page
- Most CEXes cannot bridge directly — you must withdraw to a wallet first
- Sub-path B1: CEX supports Arbitrum withdrawals → withdraw directly to Arbitrum address
- Sub-path B2: CEX only supports Ethereum withdrawals → withdraw to Ethereum → bridge via Path A
- Warning: confirm which network your CEX sends LPT on before withdrawing
- Getting ETH on Arbitrum: some CEXes support direct Arbitrum ETH withdrawals; otherwise bridge a small ETH amount

**H2: Verify your LPT arrived**
- Open Explorer, connect wallet → check balance
- Check Arbiscan with your wallet address → token transfers tab

**H2: Now what?**
- CTA → S10 (Choose an Orchestrator)

**Source material**: Existing bridge-lpt-to-arbitrum.mdx; Arbitrum bridge docs

**Gaps**: CEX withdrawal path must be added. Consider whether wallet setup basics need their own callout or sub-page.

---

### S9. How Delegation Economics Work
**Path**: `v2/lpt/delegation/delegation-economics.mdx`
**pageType**: concept · **purpose**: explain · **lifecycleStage**: evaluate
**Status**: 🔴 STUB (736 bytes, single warning component) — highest priority write

**Must contain**:

**H2: Two income streams**
- Stream 1: LPT inflation rewards — new LPT minted each round, distributed proportionally to bonded stake
- Stream 2: ETH fees — real payments from Gateways for video transcoding and AI inference work
- Why both matter: inflation is supply-side baseline; fees are demand-side signal of real network usage

**H2: rewardCut — your LPT inflation commission**
- Definition: the % of LPT inflation the orchestrator keeps before distributing the rest
- Direction: **lower rewardCut = more for delegators**
- Example: 10% rewardCut → orchestrator keeps 10%, delegators share 90% proportionally
- Worked example with numbers (do not hard-code inflation rate — use "let's say the round distributes X LPT")

**H2: feeShare — your ETH fee commission**
- Definition: the % of ETH fees the orchestrator distributes to delegators
- Direction: **higher feeShare = more for delegators**
- Example: 80% feeShare → delegators receive 80 cents of every $1 in fees earned
- ⚠️ Warning callout: rewardCut and feeShare move in opposite directions. Lower rewardCut is better; higher feeShare is better. Do not confuse them.

**H2: Why reward call consistency beats commission rate**
- If an orchestrator misses reward() for a round, zero LPT is distributed for that round — regardless of commission
- Example: 0% rewardCut orchestrator who calls reward 20/30 rounds vs 10% rewardCut orchestrator who calls 30/30 rounds → the 10% one delivers more income
- Formula intuition: effective_yield = headline_yield × (calls_made / total_rounds) × (1 - rewardCut)

**H2: The treasury allocation**
- A portion of each round's inflation is diverted to the Community Treasury `[verify-live: LIP-92]`
- Current rate: X% `[verify-live — do not hard-code; cite LIPs repo]`
- This reduces the amount available to delegators and orchestrators — it is deducted before distribution

**H2: How rewards accumulate**
- Simplified cumulative factor explanation (not LaTeX)
- Each round that reward() is called, your pending balance grows
- Rewards compound automatically — your growing bonded balance earns on a growing base
- You don't need to claim every round for compounding — but you must claim before you can withdraw

**H2: ⚠️ Critical: when to claim**
- Claim AFTER your orchestrator has called reward() for the current round
- If you claim before reward() is called in a round, your lastClaimRound advances past the current round and you forfeit that round's rewards and fees
- This is a known UX gap; an Explorer warning is being added (PR #613 — check deployment status `[verify-live]`)
- Recommended: claim at the end of rounds, not the beginning

**H2: What to expect**
- Yield varies with: inflation rate, total bonded supply, orchestrator commission, orchestrator reward call rate
- Live figures: see your orchestrator's profile on Explorer; yield calculator link `[if exists]`
- Do not use hard-coded APY figures — they are misleading given governance-controlled inflation

**Source material**: Notion `2bf66022-2d08-81e5-9a99-e076c4a3c3ee` (cumulative reward factor — full explanation with worked examples); TO-ADD/delegation-rewards.mdx (9.8KB); TO-ADD/section-analysis.md (feeShare accuracy analysis); Discord signal `9497ab56` (claim timing edge case)

**SME review required**:
- Treasury Reward Cut Rate current value — `[verify-live: LIP-92 + Explorer]`
- Rounds per year figure (417 — verify against current Arbitrum block timing)
- Explorer PR #613 — deployed or not?
- Current Explorer UI label: "Fee Share" or "Fee Cut"? `[verify against live UI]`

**Gaps**: Must be written from scratch using Notion source material. This is the single most important missing page.

---

### S10. Choosing an Orchestrator
**Path**: `v2/lpt/delegation/choose-an-orchestrator.mdx`
**pageType**: guide · **purpose**: choose · **lifecycleStage**: evaluate
**Status**: 🟡 UNPUBLISHED — `TO-ADD/choose-a-delegate.mdx` (16.6KB) is near-complete and ready for promotion

**Must contain** (all present in TO-ADD file):
- Researched vs blind delegation comparison table
- Prerequisites checklist (LPT on Arbitrum, ETH for gas, compatible wallet)
- Step 1: Open Explorer, understand active set filter
- Step 2: Check reward call history — what good/acceptable/reject looks like; why missed calls matter more than commission
- Step 3: Evaluate rewardCut with worked example + direction callout
- Step 4: Evaluate feeShare with worked example + direction callout
- Step 5: Check stake concentration and network health considerations
- Step 6: Optional — alignment, longevity, governance participation
- Pre-bond checklist
- ⚠️ Commission change risk callout: orchestrators can raise commission at any time with no notice (Notion suggestion `22b92e61`)

**Source material**: `TO-ADD/choose-a-delegate.mdx` — ready content

**Gaps**:
- Video embed placeholder → needs real recording ID (dependency: Foundation/marketing)
- Unbonding period SME confirmation before publishing (referenced in context)
- Active set size live-verify `[numActiveTranscoders]`
- feeShare UI label live-verify

**SME review required**: Active set size, unbonding period, video embed ID, current Explorer UI labels

---

### S11. First Delegation — Tutorial
**Path**: `v2/lpt/delegation/getting-started.mdx` (rebuilt) or `v2/lpt/delegation/delegate-your-lpt.mdx` (new)
**pageType**: tutorial · **purpose**: start · **lifecycleStage**: setup
**Status**: 🔴 MISSING as a dedicated tutorial — steps exist in choose-a-delegate.mdx Step 6 and getting-started.mdx but not structured as a tutorial

**Must contain**:

**H2: Before you start — prerequisites**
- Checklist: [ ] LPT on Arbitrum One [ ] ETH on Arbitrum for gas (~$0.10 or less) [ ] Compatible wallet connected [ ] Orchestrator chosen (link → S10)

**H2: Video walkthrough** (embed placeholder → real ID required)

**H2: Step-by-step (using `<Steps>` component)**
- Step 1: Go to explorer.livepeer.org, connect wallet
- Step 2: Navigate to your chosen orchestrator's profile
- Step 3: Confirm they show as "Active"
- Step 4: Click Delegate — enter amount; partial delegation is supported
- Step 5: Sign the Approve transaction — what it does (ERC-20 approval to BondingManager); gas cost
- Step 6: Wait for Approve to confirm
- Step 7: Sign the Bond transaction — what it does (executes delegation); gas cost
- Step 8: Wait for Bond to confirm
- Step 9: Verify — navigate to account page; check bonded balance and orchestrator attribution
- Step 10: Optional on-chain verification via Arbiscan

**H2: What happens next**
- Rewards accrue automatically from the next round your orchestrator calls reward()
- You don't need to do anything to earn — but you'll need to claim to access rewards
- ⚠️ Wait for orchestrator to call reward() before claiming — claiming first forfeits that round (link to S9 for explanation)
- Next step: Manage Your Delegation (link → S12)

**H2: FAQ**
- Can I undo this immediately? (No — thawing period applies to full exit; redelegation available without wait)
- How much gas did I just spend? (well under $0.10 on Arbitrum)
- I see no rewards yet — is something wrong? (Normal for first round; check orchestrator's reward call schedule)
- Can I add more LPT without unbonding? (Yes — bond() again from same wallet)

**Source material**: `TO-ADD/choose-a-delegate.mdx` Step 6 (ready Steps content); `getting-started.mdx` (StyledSteps pattern, risk factors)

**Gaps**: Video embed ID (external dependency). Needs standalone page creation — content is ready to extract.

---

### S12. Managing Your Delegation
**Path**: `v2/lpt/delegation/manage-your-delegation.mdx`
**pageType**: guide · **purpose**: operate · **lifecycleStage**: operate / optimise
**Status**: 🟡 UNPUBLISHED — `TO-ADD/delegation-management.mdx` (12KB) is near-complete

**Must contain** (all present in TO-ADD file):

**H2: How rewards accumulate**
- Automatic per-round; no action required to earn

**H2: ⚠️ When to claim — critical timing**
- Claim AFTER orchestrator calls reward() for the round (not before)
- Consequence of early claiming: forfeit that round's rewards (lastClaimRound set to current round)
- Explorer warning pending PR #613 `[verify deployment status]`
- How often to claim: no penalty for waiting; but unclaimed rewards don't compound

**H2: Claiming earnings via Explorer**
- Connect wallet → account page → Claim Earnings → sign transaction
- Gas cost (few cents on Arbitrum)

**H2: Compounding vs withdrawing**
- Compound: leave rewards in bonded balance → they earn alongside original stake next round
- Withdraw: initiate unbonding on reward portion → wait for thawing period → withdraw to wallet
- Decision guidance: long-term holders should compound; short-term should withdraw as needed

**H2: Switching orchestrators (redelegation)**
- No unbonding required — takes effect next round
- How to redelegate via Explorer
- ⚠️ Claim pending earnings before redelegating
- When to switch: missed reward calls, commission increase, active set exit, governance alignment

**H2: Exiting — the unbonding flow**
- Mermaid state diagram: Bonded → unbond() → Unbonding → [wait] → Withdrawable → withdrawStake()
- Step-by-step via Explorer
- Partial unbonding supported
- During wait: no rewards earned; can cancel with rebond()
- Unbonding period duration: `[verify-live: BondingManager.unbondingPeriod]` `[SME: confirm ~7 rounds]`

**H2: Monitoring signals**
- Reward call rate drop
- Commission change
- Active set exit
- Governance proposals affecting returns

**Source material**: `TO-ADD/delegation-management.mdx` — ready content; Discord signal `9497ab56` (claim timing — must add ⚠️ callout)

**SME review required**: Unbonding period exact duration (Rick/Mehrdad); claimEarnings bot practice (community confirmation); Explorer PR #613 deployment status

---

## GROUP: Governance & Treasury

---

### S13. Governance Overview + Model
**Path**: `v2/lpt/governance/overview.mdx` + `v2/lpt/governance/model.mdx`
**Status**: EXISTS ✅ (6.4KB + 7.2KB) — scope overlap with About tab; content trim needed

**Must contain**:
- What governance covers: inflation parameters, treasury spending, protocol upgrades, active set size
- Stake-weighted voting — how voting power is calculated (bonded LPT at proposal creation block)
- Vote detachment — delegators can override their orchestrator's vote on their stake
- Proposal lifecycle: forum discussion → on-chain proposal (requires Proposer Bond `[verify-live]`) → voting period → quorum check → timelock → execution
- Who can vote: any address with bonded stake
- Note: unbonded holders cannot vote

**Gaps**: Review scope vs About tab governance content. Trim what lives in About; keep what's action-oriented for delegators.

---

### S14. Participating in Governance
**Path**: `v2/lpt/governance/processes.mdx`
**Status**: EXISTS ✅ (8.9KB)

**Must contain**:
- How to vote via Explorer: connect wallet → governance section → open proposal → vote → sign transaction
- Vote detachment: how to vote independently of your orchestrator
- How quorum works and what happens if it isn't met
- How to find active proposals (Explorer + forum links)
- Governance participation is optional but your stake has voting weight regardless

**Gaps**: Check whether current page explains vote detachment clearly enough for a non-technical reader.

---

### S15. Treasury Overview
**Path**: `v2/lpt/treasury/overview.mdx`
**Status**: EXISTS ✅ (4.9KB)

**Must contain**:
- Treasury funding source: Treasury Reward Cut Rate diverts X% of per-round inflation `[verify-live: LIP-92]`
- What the treasury funds: SPEs (Special Purpose Entities), grants, ecosystem development
- What an SPE is — brief definition
- How treasury funds are governed: via LivepeerGovernor proposals
- Treasury balance: link to `explorer.livepeer.org/treasury` for live figures
- Effect on delegator yield: the treasury allocation is taken before rewards are distributed to participants

**Gaps**: Treasury Reward Cut Rate needs live-verify. Check if SPE definition is currently in the page.

---

### S16. Submitting a Governance Proposal
**Path**: `v2/lpt/treasury/proposals.mdx`
**Status**: EXISTS ✅ (6.5KB)

**Must contain**:
- Proposer Bond minimum `[verify-live: LivepeerGovernor — historically 100 LPT]`
- How to submit via Explorer or directly via contract
- Forum discussion step (recommended before on-chain submission)
- Proposal types: parameter changes, treasury spending, protocol upgrades
- Voting period duration `[verify-live: LivepeerGovernor]`
- Quorum threshold `[verify-live: LivepeerGovernor]`
- Timelock delay after passing `[verify-live: Timelock contract]`
- What happens if proposal fails

**Gaps**: All governance parameter values are governance-controlled and must be live-verified before publishing.

---

### S17. Treasury Allocations
**Path**: `v2/lpt/treasury/allocations.mdx`
**Status**: EXISTS ⚠️ likely stale (6.1KB)

**Must contain**:
- Historical list of treasury allocations with: recipient SPE/entity, amount, purpose, date approved
- Current treasury balance (live link to Explorer)
- How to read the governance record for each allocation (link to governance vote)

**Gaps**: Likely stale — needs full content review and update against recent SPE approvals (Transformation SPE, NaaP Engineering SPE, others visible in Notion).

---

## GROUP: Guides & Resources

---

### S18. Videos & Blogs
**Path**: `v2/lpt/resources/delegator-videos-and-blogs.mdx`
**Status**: EXISTS ⚠️ (3.9KB) — needs recency audit

**Must contain**:
- Official Livepeer Foundation content (YouTube, blog posts) related to delegation
- Community guides — with dates prominently displayed
- ⚠️ Any item older than 18 months should be flagged or removed — technical content about delegation mechanics can become inaccurate after protocol updates
- Delegation tutorial video link (once recorded — dependency for S11)

**Gaps**: Needs full recency audit. Add tutorial video once recorded.

---

### S19. LPT Exchanges
**Path**: `v2/lpt/resources/exchanges.mdx`
**Status**: EXISTS ✅ (56.6KB)

**Must contain**:
- Where to buy/sell LPT (CEX list, DEX list)
- Which exchanges support Arbitrum-native LPT withdrawal (important for onboarding path)
- Warning about CEX listing staleness

**Gaps**: Flag any exchanges that have delisted or changed Arbitrum support.

---

### S20. Protocol Token Flows
**Path**: `v2/lpt/resources/lpt-eth-usage.mdx`
**Status**: EXISTS ✅ (1.9KB) — likely thin

**Must contain**:
- Diagram: how LPT flows from inflation → orchestrators → delegators → treasury
- Diagram: how ETH flows from Gateways → TicketBroker → Minter → orchestrators → delegators
- Key insight: the dual-token model (LPT for supply-side incentive; ETH for demand-side payment)

**Gaps**: At 1.9KB this is likely a stub or very thin. May need substantial expansion, or a Mermaid diagram.

---

## GROUP: Technical References (MISSING SECTION — must create)

---

### S21. Protocol Parameters Reference
**Path**: `v2/lpt/resources/reference/protocol-parameters.mdx` (new)
**pageType**: reference · **purpose**: reference · **lifecycleStage**: any
**Status**: 🔴 MISSING

**Must contain**:

| Parameter | Description | Current value | Source to verify |
|---|---|---|---|
| Active set size | Max orchestrators earning per round | `[verify-live]` | BondingManager `numActiveTranscoders` via Arbiscan |
| Unbonding period | Rounds before withdrawal after unbond() | `[verify-live]` | BondingManager `unbondingPeriod` |
| Target Bonding Rate | Inflation aims for this % of supply staked | `[verify-live]` | LIPs + Explorer |
| Inflation Adjustment (alpha) | Per-round inflation change | `[verify-live]` | LIPs |
| Treasury Reward Cut Rate | % of per-round inflation to treasury | `[verify-live]` | LIP-92 + Explorer |
| Proposer Bond minimum | Bonded LPT required to submit proposals | `[verify-live]` | LivepeerGovernor |
| Quorum threshold | % bonded stake required for valid vote | `[verify-live]` | LivepeerGovernor |
| Vote period | Duration of on-chain voting | `[verify-live]` | LivepeerGovernor |
| Timelock delay | Post-pass wait before execution | `[verify-live]` | Timelock contract |

- All values must be sourced from on-chain / Arbiscan — never hard-coded from secondary sources
- Link to Explorer for live state; link to governor-scripts/addresses.js for contract addresses
- Add note: all parameters are governance-controlled and can change via approved LIPs

**Source material**: veracity-sources.md; Arbiscan; governor-scripts

---

### S22. Contract Addresses
**Path**: `v2/lpt/resources/reference/contracts.mdx` (new)
**pageType**: reference · **purpose**: reference · **lifecycleStage**: any
**Status**: 🔴 MISSING

**Must contain**:
- Arbitrum One (primary): BondingManager, Minter, RoundsManager, LivepeerGovernor, BondingVotes, L2LPTGateway, LPT token
- Ethereum Mainnet: L1 Escrow (bridge), original LPT deployment
- Source: `governor-scripts/updates/addresses.js` cross-referenced with `arbiscan.io/accounts/label/livepeer`
- ⚠️ Warning: always verify addresses on Arbiscan before interacting — do not copy from secondary sources
- Last-verified date must be displayed prominently

---

### S23. Glossary
**Path**: `v2/lpt/resources/reference/glossary.mdx`
**Status**: Not confirmed in repo — may link to Resource HUB

**Must contain** (if standalone page):
- Key delegator terms: Bonding, Delegation, Orchestrator, Active Set, Inflationary Rewards, ETH Fees, Reward Cut, Fee Share, Round, Thawing Period, Unbonding, Redelegation, Governance, Vote Detachment, Treasury, SPE, Claim Earnings, Yield

**Note**: Pending Resource HUB open Q resolution — may link to central glossary rather than maintain a separate one.

---

## Cross-Cutting Gaps Summary

| Gap | Severity | Dependencies |
|---|---|---|
| S6: Disambiguation page | 🔴 Critical structural | None — create immediately |
| S9: Delegation economics (stub) | 🔴 Critical content | Notion source material available |
| S11: Tutorial page | 🔴 Missing | Video recording (external dep); content extractable from TO-ADD now |
| Technical References section | 🔴 Missing | Live parameter verification from Arbiscan/Explorer |
| Fiat onramp path | 🔴 Missing | LISAR SPE product details needed |
| Promote TO-ADD files (S10, S12) | 🟡 High | SME review of unbonding period; video embed ID |
| S7: What bonding means (consolidate) | 🟡 High | Rewrite from scattered sources |
| S8 CEX withdrawal path | 🟡 High | None |
| feeShare/rewardCut UI label live-verify | 🔴 Blocking | Check Explorer live UI |
| Earnings claim timing warning | 🔴 Must add to S5, S9, S12 | Rick/Foundation confirmed — add now |
| Treasury allocations staleness | 🟠 Medium | Review against recent SPE approvals |
| Tokenomics LIP-107/100 review | 🟠 Medium | LIPs repo review |

---

## SME Review Required Before Any Page Publishes

| Claim | Page(s) | Who to ask | Source to check |
|---|---|---|---|
| Unbonding period: ~7 rounds (not 21 hours) | S12, S7, S21 | Rick or Mehrdad | BondingManager.unbondingPeriod |
| Active set size = 100 | S10, S21 | Mehrdad | BondingManager.numActiveTranscoders |
| Treasury Reward Cut Rate current % | S9, S15, S21 | LIPs repo | LIP-92 + Explorer treasury |
| Current feeShare/Fee Cut UI label in Explorer | S9, S10 | Joseph / live UI check | explorer.livepeer.org |
| Explorer PR #613 deployment status | S9, S12, S5 | Rick/Foundation Eng | github.com/livepeer/explorer |
| Proposer Bond = 100 LPT | S16, S21 | LivepeerGovernor contract | Arbiscan |
| Rounds per year figure (~417) | S9 | Rick | RoundsManager + Arbitrum block timing |
| LISAR fiat gateway — is it live? What's the UX? | S6, portal | Foundation / product owner | LISAR SPE contact |
| Video recording for tutorial | S11 | Foundation/marketing | To be produced |
