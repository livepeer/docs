# Delegators / LPT Content Research Pack

**Generated:** 2026-03-23
**Scope:** All content for the Delegators / LPT tab (v1 and v2), plus deprecated content still relevant to the rewrite.

---

## Purpose

This pack collects every existing page in the Delegators / LPT content domain — both the live v1 "Delegators" dropdown and the live v2 "Delegators & LPT" tab — along with relevant deprecated material. It is the primary reference for content writers producing the rewritten Delegators / LPT section. It includes a gap analysis, extracted technical facts, and a critical section on rewards placement that requires a human structural decision before writing begins.

---

## Content Location Map

### V1 (Legacy — "Delegators" dropdown in docs.json)

**Important note:** The v1 "Delegators" dropdown in the nav actually serves double duty. The "Getting Started" group (`v1/delegators/introduction`, `v1/delegators/quick-start`, `v1/delegators/livepeer-studio-cli`) contains Studio/developer content — API keys, SDK setup, React video player. These files were clearly misrouted into the Delegators dropdown and contain no staking content. The genuine v1 delegator content is three pages in the Guides group.

Live v1 delegator pages:
- `v1/delegators/guides/bridge-lpt-to-arbitrum.mdx`
- `v1/delegators/guides/migrate-stake-to-arbitrum.mdx`
- `v1/delegators/guides/yield-calculation.mdx`

### V2 (Current — "Delegators & LPT" tab in docs.json, path prefix `v2/lpt/`)

Published in nav:
- `v2/lpt/token-portal.mdx`
- `v2/lpt/about/overview.mdx`
- `v2/lpt/about/purpose.mdx`
- `v2/lpt/about/tokenomics.mdx`
- `v2/lpt/about/mechanics.mdx`
- `v2/lpt/delegation/getting-started.mdx`
- `v2/lpt/delegation/overview.mdx`
- `v2/lpt/delegation/delegation-economics.mdx` (placeholder — redirects to Overview and Tokenomics)
- `v2/lpt/delegation/about-delegators.mdx`
- `v2/lpt/delegation/delegation-guide.mdx`
- `v2/lpt/governance/overview.mdx`
- `v2/lpt/governance/model.mdx`
- `v2/lpt/governance/processes.mdx`
- `v2/lpt/treasury/overview.mdx`
- `v2/lpt/treasury/proposals.mdx`
- `v2/lpt/treasury/allocations.mdx`
- `v2/lpt/resources/delegator-videos-and-blogs.mdx`
- `v2/lpt/resources/exchanges.mdx`
- `v2/lpt/resources/lpt-eth-usage.mdx`
- `v2/lpt/resources/compendium/glossary.mdx`

Drafted but NOT in nav (held in `v2/lpt/delegation/TO-ADD/`):
- `v2/lpt/delegation/TO-ADD/overview.mdx` — reader-facing delegation overview (replaces nav overview)
- `v2/lpt/delegation/TO-ADD/choose-a-delegate.mdx` — orchestrator evaluation + delegation transaction
- `v2/lpt/delegation/TO-ADD/delegation-rewards.mdx` — full delegation economics with worked examples
- `v2/lpt/delegation/TO-ADD/delegation-management.mdx` — managing position post-delegation

### Deprecated content (no longer in nav, lives in `_dep-docs/`)

- `_dep-docs/about/livepeer-network/livepeer-actors/delegators.mdx`
- `_dep-docs/resources/lpt/delegator-dashboard.mdx`
- `_dep-docs/orchestrators_v1/advanced-setup/delegation.mdx`
- `_dep-docs/developers/moved-to-about-livepeer-protocol/livepeer-actors/delegators.mdx`

---

## V1 Content Inventory

### Page: Bridge LPT to Arbitrum

| Field | Value |
|---|---|
| Path | `v1/delegators/guides/bridge-lpt-to-arbitrum.mdx` |
| Title | Bridge LPT to Arbitrum |
| Status | Legacy — operational steps partially outdated (references Rinkeby testnet) |
| Page type | How-to guide |
| Audience | LPT holders bridging from Ethereum mainnet to Arbitrum |

**Content summary:** Step-by-step instructions for moving LPT from Ethereum L1 to Arbitrum via the Arbitrum Bridge UI. Covers the deposit (L1→L2) flow and the L2→L1 withdrawal flow. Notes that the L1→L2 approval transaction takes approximately 10 minutes to confirm; the L2→L1 withdrawal requires approximately one week (Arbitrum challenge period). Includes troubleshooting for bridging failures caused by gas fluctuations, with link to the Arbitrum retryable transaction panel.

**Key technical facts:**
- L1 LPT contract address: `0x58b6a8a3302369daec383334672404ee733ab239`
- L2 LPT Gateway: `0x6D2457a4ad276000A615295f7A80F79E48CcD318`
- L2 LPTGateway approve address: `0x289ba1701C2F088cf0faf8B3705246331cB8A839`
- L1→L2 bridge time: ~10 minutes confirmation for approval, then deposit
- L2→L1 bridge time: ~1 week challenge/withdrawal period
- Manual approval step required for L2→L1 via Arbiscan (unit conversion: amounts in Wei)
- Bridging failures may require resubmission via Arbitrum retryable tx panel
- **Status note:** Rinkeby testnet references are obsolete.

---

### Page: Migrate Stake to Arbitrum

| Field | Value |
|---|---|
| Path | `v1/delegators/guides/migrate-stake-to-arbitrum.mdx` |
| Title | Migrate stake to Arbitrum |
| Status | Legacy — historical migration guide; migration was a one-time event (Feb 14, 2022) |
| Page type | How-to guide |
| Audience | Delegators who had bonded LPT on Ethereum mainnet before Feb 14, 2022 |

**Content summary:** Explains how to claim delegated stake and ETH earnings from Ethereum mainnet onto Arbitrum after the L2 migration cutover. Uses the Livepeer Explorer claim flow. Warns that as of Feb 14, 2022, mainnet withdrawals were disabled and all rewards/fees began disbursing on Arbitrum. Notes a separate contract wallet flow exists for non-EOA accounts.

**Key technical facts:**
- Migration deadline: February 14, 2022
- Post-migration: all inflationary rewards and ETH fees disbursed on Arbitrum only
- Mainnet withdrawals disabled post-cutover
- Migration tool: Livepeer Explorer claim function
- arbETH required in wallet for gas before migration
- **Status note:** This is a historical one-time event. The guide is obsolete for any delegator whose migration is complete. New delegators never need this.

---

### Page: Yield Calculation on Explorer

| Field | Value |
|---|---|
| Path | `v1/delegators/guides/yield-calculation.mdx` |
| Title | Yield Calculation on Explorer |
| Status | Legacy — formulas still accurate but hardcoded round count (417 rounds/year) requires verification |
| Page type | Reference / explanation |
| Audience | Delegators evaluating orchestrators via ROI estimate |

**Content summary:** Explains how the Explorer calculates estimated yield for delegating to a specific orchestrator. Covers two revenue streams (transcoding fees in ETH, inflationary LPT rewards) and how they are blended into a combined estimate. Includes the full formula derivation and identifies accuracy caveats: orchestrator parameters can change, inflation rate is assumed constant.

**Key technical facts extracted:**

Orchestrator parameters used:
- `s_fees` = fee share percentage (delegators' fraction of ETH fees)
- `s_rewards` = reward share percentage (delegators' fraction of LPT inflation)
- `r_rewards` = reward call success rate = `rewardCalls / n` (n = up to 90 rounds)
- `l_orch` = orchestrator's active stake
- `v_daily` = average daily ETH fee volume (90-day average, denominated in ETH)

Protocol parameters used:
- `r_inf` = current inflation rate (assumed constant in calculation)
- `l_total` = total token supply
- `l_active` = current active stake (total bonded LPT)

ETH fee yield formula:
```
yield_ETH = (v_daily * 365) * s_fees * (p / (p + l_orch))
```

LPT inflation yield formula (417 rounds/year assumption):
```
yield_LPT = [l_total * (1 + r_inf)^417 - l_total] / l_active
              * ((p + l_orch) * r_rewards)
              * (s_rewards * p / (p + l_orch))
```

Combined yield (price from Uniswap):
```
yield_total = yield_LPT + yield_ETH * price_LPT/ETH
```

Explorer ROI implementation: `https://github.com/livepeer/explorer/blob/main/lib/roi.ts`

Accuracy caveats noted in v1:
- Orchestrators can change fee/reward cuts at any time; a malicious operator could set low rates to attract delegators and then raise them
- Inflation rate assumed constant but adjusts based on participation rate
- **417 rounds/year** — based on Ethereum block timing; requires verification for current Arbitrum block timing

---

### V1 Deprecated Content: Delegators Actor Page

| Field | Value |
|---|---|
| Path | `_dep-docs/about/livepeer-network/livepeer-actors/delegators.mdx` |
| Title | Delegators |
| Status | Deprecated — replaced by v2 concept pages |
| Page type | Concept overview |

**Content summary:** A concise "what is a delegator" reference. Delegators bond LPT to orchestrators instead of running infrastructure. They provide economic backing that secures participation and aligns incentives. Core responsibilities: select orchestrators, monitor performance, reallocate stake, participate in governance. Earnings: share in protocol rewards where applicable and usage-based fee outcomes per orchestrator economics. Risks: operator underperformance, market volatility, governance and concentration risk. Explicitly notes returns depend on operator behavior, stake distribution, and network usage.

**Note:** This page has no specific technical formulas — it is a plain-language concept introduction. It was previously linked from the "about the Livepeer network" section.

---

### V1 Deprecated Content: Delegator Dashboard

| Field | Value |
|---|---|
| Path | `_dep-docs/resources/lpt/delegator-dashboard.mdx` |
| Title | Delegator Dashboards |
| Status | Deprecated but content remains valid |
| Page type | Resource / link list |

**Key links listed:**
- Official delegator dashboard: `https://delegator.livepeer.org`
- Community dashboard: `https://paulieb14.github.io/livepeer-delegator-dashboard/`
- Livepeer Explorer: `https://explorer.livepeer.org`

---

### V1 Deprecated Content: Delegation (Orchestrator Perspective)

| Field | Value |
|---|---|
| Path | `_dep-docs/orchestrators_v1/advanced-setup/delegation.mdx` |
| Title | Delegation |
| Status | Deprecated — orchestrator-audience version; useful for cross-checking reward cut / fee share mechanics |
| Page type | Concept (orchestrator-facing) |
| Audience | Orchestrators |

**Content summary:** Explains how delegators help orchestrators by increasing total active stake (which increases work allocation share and inflation reward share). Orchestrators must call `reward()` each round for both themselves and their delegators to receive inflation. Slashing affects delegated stake proportionally — delegators share operator risk. Attracting delegators: competitive reward cut and fee share, high uptime, consistent reward calls.

**Key note for rewrite:** The v1 orchestrator delegation page makes explicit that slashing (when activated) affects delegated stake proportionally — delegators share misbehaviour risk. This is not prominently surfaced in many v2 delegator-facing pages.

---

## V2 Content Inventory

### Page: LP Token Home Portal

| Field | Value |
|---|---|
| Path | `v2/lpt/token-portal.mdx` |
| Title | LP Token Home Portal |
| pageType | landing |
| Status | Live — current |
| Purpose | Section entry point / navigation hub |

**Content summary:** Hero portal page with animated starfield background. Tagline: "Shape the Future of Livepeer — Learn - Vote - Earn." Describes LPT as the native ERC-20 token that secures the Livepeer Network and enables community-driven governance. Links to four primary paths: learn about LPT, delegate to earn, vote on governance, propose via treasury. Live network section links to Explorer (live staking stats, bonding rate), Treasury (balance and proposals), and Governance Voting interface.

**Key facts:** "Earn a share of network fees and inflationary rewards" and "influence the network's direction through governance votes."

---

### Page: LPT Overview

| Field | Value |
|---|---|
| Path | `v2/lpt/about/overview.mdx` |
| Title | LPT Overview |
| pageType | overview |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current (technical reference depth) |

**Content summary:** Architectural and economic overview of LPT. Defines LPT as "a stake-weighted coordination asset that provides economic security, governance authority, and treasury control." Identifies five functional domains: staking security, inflation-based reward distribution, delegated capital allocation, governance voting, treasury stewardship. Maps LPT to specific smart contracts (BondingManager, Minter, RoundsManager, Governor, Treasury). Uses formal math notation for economic weight, inflation mechanism, delegation model, governance authority, and security model. Contains a system interaction mermaid diagram. Explicitly states: "LPT does not execute work. It economically secures actors who perform work."

**Key technical facts:**
- Economic weight formula: `W_i = B_i / B_T`
- Inflation per round: `R_t = S_t × r_t`
- Total orchestrator stake: `B_O = B_self_O + Σ b_D_O`
- Governance weight: `V_i = B_i / B_T`
- Security scales with `B_T`
- Contracts: BondingManager, Minter, RoundsManager, Governor, Treasury
- Network: Arbitrum One
- Operational considerations noted: bonding/unbonding delays, commission structures, inflation parameter adjustments, governance quorum thresholds

**Tone note:** This page is written at technical/architectural depth. Heavy use of formal math. Likely not suitable as a delegator-friendly entry point without significant simplification.

---

### Page: Livepeer Token Purpose

| Field | Value |
|---|---|
| Path | `v2/lpt/about/purpose.mdx` |
| Title | Livepeer Token Purpose |
| pageType | concept |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current (most readable "about" page) |

**Content summary:** Three functions of LPT: (1) security collateral — orchestrators must bond LPT to participate; stake acts as collateral against misbehaviour; slashing currently disabled but mechanism exists; (2) reward distribution — inflation distributed proportionally to bonded stake; delegators share via `rewardCut` parameter; ETH fees split by `feeShare`; (3) governance power — voting weight proportional to bonded LPT; delegators influence governance by choosing orchestrators who represent their preferences.

Explains why LPT is NOT used to pay for work (Gateways pay in ETH). This separation avoids conflating supply/demand dynamics with security incentives.

Covers supply and inflation in detail: genesis supply 25.8 million; adaptive inflation targeting ~50% bonded; if below 50%, rate increases; if above 50%, rate decreases. Formula: `inflation := inflation ± inflationChangeRate`. InflationChangeRate adjusts each round (roughly every 21 hours). Early inflation exceeded 13%/year; community voted to reduce to ~6–8%; 10% of issuance diverted to treasury.

Covers Community Treasury: routes a share of inflation to an on-chain treasury; initial rate 10% of newly minted LPT; contributions pause if treasury balance exceeds a ceiling; funds require governance approval to spend.

Covers rewards distribution: two streams (ETH fees via `feeShare`, LPT inflation via `rewardCut`). Delegators call `claimEarnings()` to collect accumulated LPT and ETH. Unbonding takes one thawing period (currently ~21 hours) — **NOTE: this contradicts other sources that state 7 rounds; see open questions**.

Mentions "fee switch" discussion: routing ETH fees to treasury or burning them; as of 02-March-2026 not enacted.

**Key technical facts:**
- LPT genesis supply: 25.8 million tokens
- Target bonding rate: ~50% of circulating supply
- Early inflation: exceeded 13%/year; now ~6–8%
- InflationChangeRate: 0.0005 per round (example figure)
- Treasury cut: 10% of newly minted LPT (governed by LIP-89)
- Treasury balance ceiling: 750,000 LPT (when reached, cut can be set to zero)
- `rewardCut`: percentage of LPT inflation orchestrator keeps (higher = less for delegators)
- `feeShare`: percentage of ETH fees passed to delegators (higher = more for delegators)
- `claimEarnings()`: required to realize accrued rewards
- Thawing period: "currently ~21 hours" — **flagged as contradicted by other sources**
- Round duration: ~21 hours
- Fee switch: under discussion, not enacted as of 2026-03-02

---

### Page: LPT Tokenomics

| Field | Value |
|---|---|
| Path | `v2/lpt/about/tokenomics.mdx` |
| Title | LPT Tokenomics |
| pageType | concept |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current (formal/mathematical depth) |

**Content summary:** Formal economic model using math notation throughout. Defines the bonding-rate feedback mechanism: if `β < β*` (bonding rate below target), `r_{t+1} = r_t + α` (inflation increases); if `β > β*`, inflation decreases. System seeks equilibrium at `β ≈ β*`. Reward distribution formula: `R_O = R_t × (B_O / B_T)` and `R_D_O = R_O × (1 - c_O) × (b_D_O / B_O)`. Notes issuance is protocol-determined; fees are market-driven. Security equilibrium: attack capital must exceed `θ × B_T`.

**Key technical facts:**
- Variables: `S_t` (total supply at round t), `B_T` (total bonded LPT), `β` (bonding rate = B_T/S_t), `β*` (target bonding rate), `r_t` (inflation rate), `α` (inflation adjustment coefficient), `c_O` (commission rate)
- Issuance: `R_t = S_t × r_t`
- Supply update: `S_{t+1} = S_t + R_t`
- Orchestrator allocation: `R_O = R_t × (B_O / B_T)`
- Delegator net allocation: `R_D_O = R_O × (1 - c_O) × (b_D_O / B_O)`
- Total delegator return: `Reward_i = Issuance_i + Fees_i`
- Tradeoffs table: dynamic inflation (stability vs responsiveness), delegated staking (accessibility vs centralization), capital-weighted rewards (security vs wealth concentration)

**Tone note:** Dense formal math. Requires an accordion for the technical reference block. Not appropriate as standalone reader-facing content without a narrative layer.

---

### Page: LPT Mechanics

| Field | Value |
|---|---|
| Path | `v2/lpt/about/mechanics.mdx` |
| Title | LPT Mechanics |
| pageType | concept |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current (contract-level mechanics reference) |

**Content summary:** Describes the deterministic contract-level mechanics of bonding, unbonding, round processing, and reward checkpointing. Defines round as the atomic accounting unit. Bonding: `B_i^new = B_i^old + x` and `B_T^new = B_T^old + x`. Unbonding initiates a withdrawal period; stake does not earn rewards during unbonding; delay prevents rapid stake manipulation. Round lifecycle: (1) inflation calculation, (2) reward distribution eligibility, (3) checkpoint processing. Reward checkpointing: rewards are NOT automatically transferred — must be checkpointed first. Claiming: liquid withdrawal or rebonding (compounding). State diagram: Bonded → Unbonding → Withdrawable → exit; or Bonded → Bonded (checkpoint/rebond).

**Key technical facts:**
- Bonding: immediate effect on accounting state
- Unbonding: stake exits earning state; enters pending withdrawal
- Checkpointing: updates accounting but does NOT automatically transfer tokens
- Claiming: must explicitly call claim to realize rewards
- Rebonding: adds rewards back to bonded stake (compounding)
- Unbonding delay protects against short-term manipulation
- Round transition: triggered by protocol timing logic (not block-by-block)

---

### Page: Delegating LPT: Getting Started

| Field | Value |
|---|---|
| Path | `v2/lpt/delegation/getting-started.mdx` |
| Title | Delegating LPT: Getting Started |
| pageType | guide |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current |

**Content summary:** Reader-friendly guide covering the full delegation process end to end. Prereqs: LPT in wallet, ETH on Arbitrum for gas, orchestrator shortlist. Six steps: (1) go to Explorer, (2) choose orchestrator (key metrics: Reward Cut, Fee Cut, Delegated Stake, Activation Status, Performance), (3) approve and bond LPT (two transactions: Approve and Bond), (4) monitor position via Explorer, (5) claim earnings via `claimEarnings`, (6) unbond when ready (21-hour wait, then withdraw). Includes reward formulas and risk factors section.

**Key technical facts:**
- Wallet: MetaMask, Coinbase Wallet, WalletConnect-compatible
- Network: Arbitrum One
- LPT must be on Arbitrum (not Ethereum mainnet)
- Gas: small amount of ETH on Arbitrum (a few cents per transaction)
- Non-custodial: LPT stays in BondingManager contract
- One orchestrator at a time
- Unbonding period: "approximately 21 hours (one round)" — **flagged as potentially wrong; see open questions**
- `claimEarnings`: required; does not happen automatically; missing many rounds does not forfeit rewards but reduces compounding
- Dilution risk: unbonded LPT is diluted by inflation earned by active delegators
- Inflation target: ~50% bonded; if below, inflation rate increases

**Reward formulas included:**
```
LPT per round = Orchestrator's inflation reward × (1 - rewardCut) × (your stake / total orchestrator stake)
ETH per round = Orchestrator's ETH fee revenue × feeShare × (your stake / total orchestrator stake)
```

**Risk factors:**
- Operator underperformance (missed Reward() calls = zero LPT inflation)
- Slashing (currently disabled; mechanism exists)
- Market volatility
- Concentration risk
- Unbonding delay (~21 hours lock)

---

### Page: Delegation Overview (nav version)

| Field | Value |
|---|---|
| Path | `v2/lpt/delegation/overview.mdx` |
| Title | Delegation Overview |
| pageType | overview |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current (formal/technical depth) |

**Content summary:** Protocol-level overview using formal math. Defines delegation as a protocol-layer (on-chain) action that modifies stake-weighted outcomes. Covers: formal stake attribution model, architectural context (protocol vs network layer separation), economic weight and security, reward allocation formula, fee revenue, delegation as capital allocation (competitive operator market), liquidity constraints and unbonding state model, risks and failure modes.

**Key distinctions from Getting Started page:** This page is formal and architecture-focused. Getting Started is practical and step-focused. These serve different reader needs.

---

### Page: Delegation Economics (placeholder)

| Field | Value |
|---|---|
| Path | `v2/lpt/delegation/delegation-economics.mdx` |
| Title | Delegation Economics |
| pageType | concept |
| Status | Live but PLACEHOLDER — contains only a warning redirecting to Overview and Tokenomics |

**Note for rewrite:** This page is a stub. The TO-ADD version (`delegation/TO-ADD/delegation-rewards.mdx`) contains the complete economics content and appears to be the intended replacement.

---

### Page: About Delegators

| Field | Value |
|---|---|
| Path | `v2/lpt/delegation/about-delegators.mdx` |
| Title | About Delegators |
| pageType | concept |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current (formal/technical depth) |

**Content summary:** Formal definition of a delegator using math notation. Defines delegator, orchestrator, stake variables. Three protocol goals: (1) security participation — delegation increases B_T; (2) capital allocation — shapes operator market structure via W_O = B_O / B_T; (3) governance participation — V_i = B_i / B_T. Full reward model (issuance + fees). Rights and constraints: can bond/unbond/rebond/withdraw/claim; cannot accelerate unbonding, guarantee job flow, or override orchestrator decisions. Practical responsibilities: monitor commission, reward checkpoint consistency, stake concentration, governance proposals. Orchestrator selection modeled as multi-objective utility function. Risks: commission, checkpoint, liquidity, concentration, slashing.

---

### Page: Delegation Guide (nav version)

| Field | Value |
|---|---|
| Path | `v2/lpt/delegation/delegation-guide.mdx` |
| Title | Delegation Guide |
| pageType | guide |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current (contract-level / technical) |

**Content summary:** Contract-accurate walkthrough of bonding, stake attribution, reward checkpointing, unbonding, and withdrawal. Focuses on on-chain mechanics. Steps: (1) preconditions (hold LPT, correct network, understand unbonding delay), (2) approve token transfer, (3) `bond(x, O)`, (4) verify on-chain state, (5) reward accrual/checkpointing formula, (6) optional rebond, (7) initiate `unbond(x)`, (8) unbonding delay (state model), (9) `withdraw()`. Risk review checklist. Mermaid sequence diagram for full approve→bond→unbond→withdraw flow.

**Note:** This page is more technical than Getting Started and less step-by-step friendly. It reads as a reference for technically sophisticated delegators or developers.

---

### Page: Governance Overview

| Field | Value |
|---|---|
| Path | `v2/lpt/governance/overview.mdx` |
| Title | Livepeer Governance Overview |
| pageType | overview |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current |

**Content summary:** Stake-weighted on-chain governance controls protocol parameter updates, contract upgrades, and treasury allocations. Governance authority derives exclusively from bonded LPT. Voting power: `V_i = B_i / B_T`. Scope: inflation parameters, contract implementations, treasury disbursements, protocol configuration constants. Does NOT control: GPU scheduling, job routing, gateway pricing, off-chain operations. Hybrid on-chain/off-chain model: LIPs go through idea → discussion → SPE formation → draft → formal review → Snapshot signaling → on-chain vote. Proposers must have at least 100 LPT bonded to submit a LIP.

**Key parameters:**
- Quorum: 33% of all staked LPT must participate
- Majority: >50% of participating votes
- LIP submission requirement: 100 LPT bonded minimum
- Timelock: delay between approval and execution (duration at protocol level)

---

### Page: Governance Model

| Field | Value |
|---|---|
| Path | `v2/lpt/governance/model.mdx` |
| Title | Livepeer Governance Model |
| pageType | concept |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current |

**Content summary:** Formal governance model. Proposal lifecycle: creation → voting delay → voting period → quorum check → threshold check → queue (timelock) → execution. Quorum: `V_cast ≥ Q × B_T`. Majority: `V_for > V_against`. Timelock delay protects against sudden parameter changes. Key governance contracts: Governor, LivepeerGovernor (proxy/target), BondingVotes, Treasury. Treasury parameters table.

**Key governance parameters:**
- `treasuryRewardCutRate`: ~10% of inflationary rewards routed to treasury each round
- `treasuryBalanceCeiling`: 750,000 LPT — once treasury exceeds this, cut can be set to zero
- Governance risks: low participation, executor centralisation, slashing disabled

---

### Page: Governance Processes

| Field | Value |
|---|---|
| Path | `v2/lpt/governance/processes.mdx` |
| Title | Livepeer Governance Processes |
| pageType | concept |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current |

**Content summary:** Full governance lifecycle: off-chain (idea formation, LIP drafting, social signaling) and on-chain (proposal submission, voting, quorum/threshold checks, timelock, execution). How-to-vote steps included. Livepeer Foundation: incorporated as nonprofit 2025; responsibilities include protocol maintenance, research, grants, ecosystem advocacy; requires governance approval for major decisions. Alternative governance mechanisms discussed (dynamic quorum, conviction voting, quadratic voting) — not yet adopted.

---

### Page: Treasury Overview

| Field | Value |
|---|---|
| Path | `v2/lpt/treasury/overview.mdx` |
| Title | Treasury Overview |
| pageType | overview |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current |

**Content summary:** Governance-controlled pool funds ecosystem development, security research, infrastructure, and other strategic allocations. On-chain enforcement via governance execution. Purpose: fund public goods, reduce underinvestment in shared infrastructure, support long-horizon R&D, enable strategic ecosystem interventions. Security inherits governance security model. Includes embedded PDF for "Using the Livepeer Community Treasury."

---

### Page: Treasury Proposals

| Field | Value |
|---|---|
| Path | `v2/lpt/treasury/proposals.mdx` |
| Title | Treasury Proposals |
| pageType | concept |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current |

**Content summary:** Defines a treasury proposal as a tuple of executable contract actions: `P = {a_1, ... a_n}` where each action `a_k = (Target_k, Value_k, Data_k)`. Governance authorization uses same quorum (33%) and threshold (>50%) as all governance. Timelock before execution. How-to-submit-proposal steps included (forum discussion → LIP draft → on-chain submit → voting → timelock/execution). Failure modes: calldata error, insufficient balance, target contract revert, asset transfer semantics, timelock misconfiguration.

---

### Page: Treasury Allocations

| Field | Value |
|---|---|
| Path | `v2/lpt/treasury/allocations.mdx` |
| Title | Treasury Allocations |
| pageType | concept |
| audience | delegator |
| lastVerified | 2026-03-17 |
| Status | Live — current |

**Content summary:** Formal allocation accounting model: `T' = T - A_k`. Allocation taxonomy: ecosystem development, protocol R&D, infrastructure support, community programs, strategic interventions. Evaluation framework: `Score_k = w1×Impact + w2×Feasibility - w3×Risk + w4×Alignment`. Security model inherits governance security. Failure modes at protocol, governance, and outcome levels. Verification split: on-chain (deterministic, auditable via transaction logs) and off-chain (milestone reporting, public deliverables).

---

### Pages: Resources (lpt-eth-usage, exchanges, delegator-videos-and-blogs, glossary)

**lpt-eth-usage.mdx** — Reference table: ETH used for service payments (Gateways → Orchestrators); LPT used for staking, governance, rewards (Orchestrators, Delegators). Contains a raw authoring note: "This is wild to me that Gateways do not use LPT to pay orchestrators." This is not production-quality content — it is a partially complete reference page.

**exchanges.mdx** — Large file (exceeded read limit). Listed in nav as "Exchanges with LPT Listed."

**delegator-videos-and-blogs.mdx** — Listed in nav but not inventoried (not yet read; likely a curated link list).

**glossary.mdx** (`resources/compendium/glossary.mdx`) — LPT token glossary. Not yet read in detail.

---

### Pages: TO-ADD (drafted, not yet in nav)

These four pages appear to be a newer, more reader-friendly rewrite of the delegation content. They are held in `v2/lpt/delegation/TO-ADD/` and not currently published in the nav.

#### TO-ADD: Delegation Overview (`overview.mdx`)

| Status | Drafted — awaiting promotion to nav |
| Purpose | Reader-facing section overview for the Delegating LPT section |

**Content summary:** What delegation is, what you earn (LPT inflation, ETH fees, governance weight), what happens if you do not delegate (dilution), key facts (non-custodial, Arbitrum-only, one orchestrator at a time, unbonding not instant, slashing currently disabled). Delegation mechanism diagram (mermaid sequenceDiagram). State lifecycle diagram (mermaid stateDiagram). In-this-section card group linking to: Delegation Economics, Choose an Orchestrator, Manage Your Delegation, Bridge LPT to Arbitrum.

**Tone:** Practical, plain-language. Clearly intended as the primary reader entry point.

#### TO-ADD: Delegation Rewards (`delegation-rewards.mdx`)

| Status | Drafted — awaiting promotion to nav |
| Purpose | Complete delegation economics with worked examples |
| lastVerified | 2026-03-13 |

**Content summary:** Full economics page. Covers LPT inflation rewards (where new LPT comes from, target participation 50%, formula with LIP-89 treasury cut of 10%, worked numerical example) and ETH fee revenue (demand-driven via probabilistic micropayment tickets, feeShare parameter). Plain English comparison table for rewardCut vs feeShare. Critical explanation of the `Reward()` call requirement. Combined yield formula and Explorer ROI calculation. How rewards accrue (accumulate in BondingManager; must call `claimEarnings`; can rebond for compounding). Factors affecting returns in practice (inflation rate changes, commission changes, fee volatility, stake concentration dilution).

**Key note:** This page is the most complete and accurate economics reference in the entire tab. It explicitly cites LIP-89 and includes the 10% treasury diversion. The worked example is accessible and accurate.

#### TO-ADD: Choose a Delegate (`choose-a-delegate.mdx`)

| Status | Drafted — awaiting promotion to nav |
| Purpose | Orchestrator evaluation guide + delegation transaction steps |
| lastVerified | 2026-03-13 |

**Content summary:** Strong comparison table (researched vs blind delegation — 15 min vs 2 min). Five evaluation steps: (1) open Explorer, understand active set (top 100 by bonded stake); (2) check reward call history — single most important signal; (3) evaluate commission settings (rewardCut and feeShare, direction warning); (4) check stake concentration (decentralisation considerations); (5) consider alignment and longevity. Then delegation transaction: go to orchestrator profile → click Delegate → sign Approve transaction → sign Bond transaction → verify delegation. Extensive FAQ (add more LPT, change orchestrators without unbonding, no rewards yet, risk of losing LPT).

**Key technical facts:**
- Active set: top 100 orchestrators by bonded stake — **NOTE: "REVIEW: verify numActiveTranscoders parameter" comment in source**
- `Reward()` call requirement: missed call = zero rewards for that round, forever lost
- Reward call evaluation threshold: 28+ of last 30 rounds considered reliable
- rewardCut direction: lower is better for delegators
- feeShare direction: higher is better for delegators
- Commission can change at any time, effective next round
- Gas for approval + bond: well under $0.10 on Arbitrum One
- Redelegation (change orchestrator without unbonding): instant, no waiting period
- Slashing: currently disabled; LPT cannot be seized by orchestrator
- ETH needed: 0.001 ETH sufficient for two delegation transactions

#### TO-ADD: Delegation Management (`delegation-management.mdx`)

| Status | Drafted — awaiting promotion to nav |
| Purpose | Managing position post-delegation (claim, compound, switch, exit) |
| lastVerified | 2026-03-13 |

**Content summary:** How rewards accumulate (automatic per round when orchestrator calls Reward(); sits in BondingManager until claimed). Claim earnings (Explorer steps, frequency guidance, compounding rationale). Rebond rewards for compounding. Switch orchestrators (redelegation, no unbonding required, claim first as precaution). Unbond and withdraw (two-step: initiate unbond → wait → withdraw; partial unbond supported; can rebond during wait to cancel). Monitor position (Explorer dashboard, signals to watch: reward call rate drop, commission increase, drop from active set, governance proposals affecting returns). Governance participation overview. Extensive FAQ (31+ questions covered).

**Critical authoring note found in source:** There is a `{/* REVIEW: Unbonding period — verify exact round count... getting-started.mdx stated "approximately 21 hours (one round)". Historical protocol documentation states 7 rounds (~7 days). */}` comment in this file. This is a known open question requiring verification before publication.

---

## Migration Gap Analysis

### Content that exists in v1 but needs v2 coverage

| V1 Content | V2 Status | Gap |
|---|---|---|
| Bridge LPT to Arbitrum (full guide) | Linked from TO-ADD pages but no dedicated v2 page found under `v2/lpt/` | Gap: no dedicated v2 bridge guide under the LPT tab; link goes to `/v2/lpt/about/bridge-lpt` which appears not to exist in the current file set |
| L2→L1 bridge withdrawal (~1 week) | Not covered in v2 delegation content | Gap |
| Bridge failure / retryable transactions | Not covered in v2 | Gap |
| Mainnet migration (obsolete) | Appropriately absent from v2 | No gap — historical only |

### Content that exists in v2 TO-ADD but is not yet in nav

The four TO-ADD pages represent a significant, high-quality rewrite of the delegation section that is ready or near-ready for promotion. Key comparison:

| Nav (current) | TO-ADD (drafted) |
|---|---|
| `getting-started.mdx` — complete but informal, some technical debt | `TO-ADD/overview.mdx` — reader-facing section overview (replaces nav overview and getting-started) |
| `delegation-economics.mdx` — PLACEHOLDER (stub) | `TO-ADD/delegation-rewards.mdx` — complete economics page with worked examples |
| `delegation-guide.mdx` — technical/contract level | `TO-ADD/choose-a-delegate.mdx` — evaluation + transaction guide (reader-facing) |
| `about-delegators.mdx` — formal/mathematical | `TO-ADD/delegation-management.mdx` — managing position (operational) |
| `overview.mdx` (nav) — formal/architectural | Replaced by TO-ADD/overview.mdx |

### Structural duplication

There are currently multiple overlapping pages covering the same ground:

- Reward formulas appear in: `purpose.mdx`, `tokenomics.mdx`, `about-delegators.mdx`, `overview.mdx`, `delegation-guide.mdx`, `getting-started.mdx`, `TO-ADD/delegation-rewards.mdx`. Each has slight variations in notation and framing.
- Orchestrator selection guidance appears in: `getting-started.mdx` (brief) and `TO-ADD/choose-a-delegate.mdx` (comprehensive). The TO-ADD version is the clear winner.
- Unbonding state diagram appears in: `mechanics.mdx`, `about-delegators.mdx`, `overview.mdx`, `delegation-guide.mdx`, `TO-ADD/overview.mdx`, `TO-ADD/delegation-management.mdx`.

### Content that is missing entirely

- Dedicated page for bridging LPT (referenced in TO-ADD pages as `/v2/lpt/about/bridge-lpt` but file not found)
- Practical "what to do if your orchestrator stops performing" guide (partially in TO-ADD/delegation-management.mdx but could be a standalone FAQ or scenario guide)
- LIP-89 explanation for non-technical readers (treasury cut of 10% affects yield calculations; only mentioned in TO-ADD/delegation-rewards.mdx)
- Delegator tax / accounting considerations (absent from both v1 and v2)
- Comparison of delegation vs not delegating (dilution cost) — present in TO-ADD/overview.mdx but absent from nav pages

---

## Technical Facts Extracted

### Inflation and supply

| Fact | Source | Confidence |
|---|---|---|
| LPT genesis supply: 25.8 million | `purpose.mdx` | High |
| Target bonding rate: ~50% of circulating supply | `purpose.mdx`, `getting-started.mdx`, `TO-ADD/overview.mdx`, `TO-ADD/delegation-rewards.mdx` | High |
| If bonding < target: inflation rate increases each round | Multiple | High |
| If bonding > target: inflation rate decreases each round | Multiple | High |
| InflationChangeRate example: 0.0005 per round | `purpose.mdx` | Medium — "example figure" |
| Early inflation: exceeded 13%/year | `purpose.mdx` | High |
| Current inflation: ~6–8% (community voted reduction) | `purpose.mdx` | Medium — narrative description |
| Round duration: ~21 hours | `purpose.mdx`, `getting-started.mdx` | High |
| Rounds per year: 417 (used in v1 yield calculation) | `v1/delegators/guides/yield-calculation.mdx` | Low — based on Ethereum block timing, requires Arbitrum verification |
| Treasury cut: 10% of each round's issuance (LIP-89) | `TO-ADD/delegation-rewards.mdx` | High — cited to LIP |
| Delegator-accessible issuance per round: 90% | `TO-ADD/delegation-rewards.mdx` | High |
| Treasury balance ceiling: 750,000 LPT | `governance/model.mdx` | High |
| `treasuryRewardCutRate` parameter: ~10% | `governance/model.mdx` | High |

### Bonding mechanics

| Fact | Source | Confidence |
|---|---|---|
| Bonding is non-custodial: LPT stays in BondingManager contract | Multiple | High |
| Delegator cannot bond to more than one orchestrator per address | Multiple | High |
| Can add to existing bonded position without unbonding | `TO-ADD/choose-a-delegate.mdx` | High |
| Redelegation (change orchestrator): instant, no unbonding wait | `TO-ADD/choose-a-delegate.mdx`, `TO-ADD/delegation-management.mdx` | High |
| Partial unbonding supported | `TO-ADD/delegation-management.mdx` | High |
| Can cancel unbonding and rebond during waiting period | `TO-ADD/delegation-management.mdx` | High |
| Rewards accumulate in BondingManager (not in wallet) | Multiple | High |
| `claimEarnings()` required to realize rewards; not automatic | Multiple | High |
| Not claiming for many rounds does NOT forfeit rewards | `getting-started.mdx`, `TO-ADD/delegation-rewards.mdx` | High |
| Unclaimed rewards reduce compounding (not absolute value) | Multiple | High |

### Unbonding period (DISPUTED — see open questions)

| Claim | Source | Notes |
|---|---|---|
| "approximately 21 hours (one round)" | `getting-started.mdx`, `purpose.mdx` | Asserted as current value |
| "7 rounds (~7 days)" | `TO-ADD/delegation-management.mdx` review comment | Historical protocol documentation cited in a REVIEW comment |
| "unbonding period" parameter in BondingManager | All sources | Actual on-chain parameter; needs verification |

### Reward mechanics

| Fact | Source | Confidence |
|---|---|---|
| `Reward()` must be called each round by the orchestrator | Multiple | High |
| Missed `Reward()` call = zero inflation rewards that round, forever lost | Multiple | High |
| `rewardCut`: % of LPT inflation orchestrator keeps; lower is better for delegators | Multiple | High |
| `feeShare`: % of ETH fees passed to delegators; higher is better for delegators | Multiple | High |
| Both parameters can be changed by orchestrator at any time, effective next round | Multiple | High |
| Active set: top 100 orchestrators by bonded stake | `TO-ADD/choose-a-delegate.mdx`, `TO-ADD/overview.mdx` | High — but NOTE: `numActiveTranscoders` is a governance parameter; REVIEW comment in source |
| Inactive orchestrators earn zero regardless of settings | Multiple | High |
| ETH fees use probabilistic micropayment system (PM tickets) | `TO-ADD/delegation-rewards.mdx` | High |
| Fee revenue is demand-driven (not guaranteed) | Multiple | High |
| Some orchestrators run bots to claim earnings for delegators | `getting-started.mdx`, `TO-ADD/delegation-management.mdx` | High |

### Reward formulas

Full LPT delegator reward per round (with LIP-89 treasury diversion):
```
R_delegator = R_round × 0.9 × (B_O / B_T) × (1 - c_O) × (b_D / B_O)
```

ETH delegator reward per round:
```
F_delegator = F_O × f_O × (b_D / B_O)
```

Where:
- `R_round` = total LPT minted that round
- `B_O` = total stake bonded to orchestrator
- `B_T` = total bonded stake across network
- `c_O` = orchestrator's `rewardCut`
- `f_O` = orchestrator's `feeShare`
- `b_D` = delegator's bonded stake
- `F_O` = total ETH fee revenue earned by orchestrator that round

### Governance parameters

| Parameter | Value | Source |
|---|---|---|
| Quorum requirement | 33% of all bonded LPT must participate | `governance/processes.mdx`, `governance/model.mdx`, `treasury/proposals.mdx` |
| Majority threshold | >50% of participating votes | Multiple |
| LIP proposal requirement | 100 LPT bonded minimum | `governance/overview.mdx` |
| Timelock delay | Protocol-level; specific duration not stated in content | Multiple |
| `numActiveTranscoders` | 100 (active set size; governance-configurable parameter) | `TO-ADD/choose-a-delegate.mdx` — with REVIEW note |
| Livepeer Foundation incorporated | 2025 | `governance/processes.mdx` |

### Slashing

- Slashing mechanism exists in protocol
- Currently **disabled** on Livepeer mainnet
- If enabled, would affect delegated stake proportionally (delegators share orchestrator misbehaviour risk)
- Delegator LPT cannot be seized by orchestrator regardless

### Contract addresses and network

- Staking protocol network: Arbitrum One
- Core contracts: BondingManager, Minter, RoundsManager, Governor, Treasury, BondingVotes, LivepeerGovernor
- Contract addresses: `https://docs.livepeer.org/references/contract-addresses`
- Explorer: `https://explorer.livepeer.org`
- Official delegator dashboard: `https://delegator.livepeer.org`
- L1 LPT contract: `0x58b6a8a3302369daec383334672404ee733ab239`

---

## Rewards Placement Decision Context

**STATUS: BLOCKING — Human structural decision required before content writing begins for the Delegating LPT section.**

### The question

Rewards mechanics content currently exists in two competing positions within the delegation section. A structural decision is needed: does rewards education serve the **EVALUATIVE reader** (placed before orchestrator selection, to help them understand what they are choosing between) or the **OPERATIONAL reader** (placed after bonding, to tell them what happens once they are in)?

---

### Where rewards content currently lives

#### In the published nav (current state)

**Before orchestrator selection:**
- `getting-started.mdx` includes a "What You Earn" section (brief — two revenue streams described at two paragraphs) appearing BEFORE the six-step delegation process. This is approximately 200 words before the orchestrator selection step.
- `about-delegators.mdx` (formal concept page) places the full reward model (Section 4) after the economic role (Section 3) but there is no explicit "choose an orchestrator" step — this page is a reference, not a guide.
- `purpose.mdx` places rewards distribution content after supply/inflation content. No orchestrator selection content on this page.

**After orchestrator selection:**
- `delegation-guide.mdx` (technical guide) places reward accrual and checkpointing (Section 5) after the bond/delegate steps (Sections 2–4). Rewards content is clearly post-bonding in this page structure.

**Standalone (no clear before/after):**
- `delegation-economics.mdx` — PLACEHOLDER, no content.
- `overview.mdx` — formal overview, rewards formula appears in the technical reference accordion (Section 4), no explicit flow before/after selection.

---

#### In the TO-ADD drafts (newer content)

**TO-ADD/overview.mdx (delegation section landing):**
- Rewards are positioned in the first card group: "LPT inflation rewards," "ETH fee revenue," and "governance weight" are three of three cards shown immediately, before any orchestrator discussion. The "What happens if you do not delegate" section (dilution) follows immediately.
- There is no orchestrator evaluation content on this page at all — it acts as a pure overview landing.
- **Structure implies:** rewards education comes BEFORE the reader encounters orchestrator selection.

**TO-ADD/delegation-rewards.mdx (economics page):**
- The card links at the bottom of `TO-ADD/overview.mdx` list "Delegation Economics" as the FIRST card, BEFORE "Choose an Orchestrator" (second card). This ordering strongly implies the intent is: reader learns economics FIRST, then chooses orchestrator.
- The rewards page itself contains no orchestrator selection content. It is a pure economics reference.

**TO-ADD/choose-a-delegate.mdx (orchestrator evaluation + transaction):**
- Reward mechanics appear only as evaluation criteria WITHIN the orchestrator selection process. Specifically: the "Why missed reward calls hurt you more than commission" accordion appears DURING the orchestrator evaluation step (Step 2: check reward call history). Commission formulas appear DURING Step 3.
- There is no standalone "here's how rewards work" section — it is embedded in evaluation guidance.
- **Structure implies:** the reader is expected to already understand what they are evaluating. The detailed economics page (`delegation-rewards.mdx`) is assumed prerequisite reading.

---

### The two viable positions

**Option A: Rewards Education BEFORE Orchestrator Selection**

Arguments for:
- Delegators cannot meaningfully evaluate orchestrators without understanding what `rewardCut` and `feeShare` do, what `Reward()` calls are, and what "active set" means in economic terms.
- The TO-ADD draft structure already implies this ordering (economics → choose orchestrator → manage position).
- Confusion about "lower rewardCut vs higher feeShare" is specifically called out as a trap in `TO-ADD/choose-a-delegate.mdx` ("do not confuse the two"). This implies the reader needs grounding in economics before they encounter these parameters.
- Addresses the EVALUATIVE reader: "I have LPT, I want to delegate — what will I earn and what do I need to understand to make a good choice?"

Arguments against:
- Rewards mechanics is complex; front-loading it may overwhelm readers who just want to get started quickly.
- Some readers may prefer to delegate first to something reasonable and optimize later.
- `getting-started.mdx` (current live page) takes this approach but gives only a brief 200-word rewards summary before the steps — a compromise position rather than a full economics section.

---

**Option B: Rewards Education AFTER Bonding**

Arguments for:
- The operational reader (just bonded, now wants to know "what happens next") needs to understand: how rewards accumulate, when to claim, what compounding means, what to watch for.
- `delegation-guide.mdx` (current live formal guide) uses this structure.
- Reduces cognitive load at decision point: reader just needs to pick an active orchestrator with low rewardCut and high feeShare; deeper economics can wait.

Arguments against:
- Leaves the reader making a financial decision without the information needed to make it well.
- `rewardCut` and `feeShare` are core evaluation criteria; presenting them as post-bonding operations content is structurally odd.
- The TO-ADD choose-a-delegate page explicitly says: "Choosing an orchestrator is the most consequential decision you make as a delegator." If it's the most consequential decision, it deserves pre-decision education.

---

### What the TO-ADD content implies about intent

The TO-ADD drafts were authored after the nav pages. Their implied reading order is:

1. `overview.mdx` (TO-ADD) — what delegation is, three things you earn, dilution cost if you don't
2. `delegation-rewards.mdx` (TO-ADD) — how LPT inflation and ETH fees are calculated, rewardCut/feeShare explained, worked example
3. `choose-a-delegate.mdx` (TO-ADD) — evaluate orchestrators (using the economics knowledge just gained) and execute the transaction
4. `delegation-management.mdx` (TO-ADD) — manage your position after bonding

This is **Option A** (rewards before selection). The author of these pages implicitly chose this position. However, this was a drafting decision, not a confirmed content strategy decision. It has not been reviewed against the nav structure.

---

### Impact on nav structure

**If Option A (rewards before selection):**
Nav order for the Delegating LPT group would be:
1. Overview / landing (what delegation is, the three benefits, dilution cost)
2. Delegation Economics / Rewards (full mechanics, formulas, worked example)
3. Choose an Orchestrator (evaluation + transaction)
4. Manage Your Delegation (post-bonding operations)

**If Option B (rewards after selection):**
Nav order for the Delegating LPT group would be:
1. Overview / landing (what delegation is, the key facts)
2. Choose an Orchestrator (evaluation criteria explained inline + transaction)
3. Delegation Economics / Rewards (what you earned and why, now that you're bonded)
4. Manage Your Delegation (how to compound, switch, exit)

**Hybrid option:** Brief rewards intro on the overview/landing page (as in current `getting-started.mdx`) with a link to full economics, followed by orchestrator selection, followed by full economics as a reference — this matches current live nav but may create structural confusion about which page is "the" economics reference.

---

## Open Questions for Content Writers

### Blocking questions (require verification before writing)

1. **Unbonding period (critical):** What is the current `unbondingPeriod` parameter in the BondingManager contract on Arbitrum One mainnet? Content currently states two different values:
   - "approximately 21 hours (one round)" — in `getting-started.mdx` and `purpose.mdx`
   - "7 rounds (~7 days)" — cited in a REVIEW comment in `TO-ADD/delegation-management.mdx` as "historical protocol documentation"
   This must be verified against the live contract before any page mentioning unbonding is published. Contact: Mehrdad or Rick (named in REVIEW comment). See also: BondingManager contract on Arbiscan.

2. **Active set size (numActiveTranscoders):** Is the active set currently 100 orchestrators? The TO-ADD content includes an inline REVIEW comment flagging this as needing verification: "verify against current protocol parameter `numActiveTranscoders` before publishing. This was confirmed in gpu-nodes-ia-planning.md but the protocol parameter is configurable via governance." Needs current confirmation.

3. **Rounds per year for yield calculation:** The v1 yield-calculation page uses 417 rounds/year based on Ethereum block timing (~13 seconds/block). This figure is explicitly flagged in a code comment in `TO-ADD/delegation-rewards.mdx` as needing verification for Arbitrum One block timing. Since Arbitrum has different block cadence, this affects any APY calculation. Verify against current BondingManager round duration.

4. **Rewards placement structural decision:** See the full Rewards Placement Decision Context section above. The nav structure for the "Delegating LPT" group cannot be finalized until a human decision is made on whether rewards education precedes or follows orchestrator selection content.

5. **Delegation economics placeholder page:** `delegation/delegation-economics.mdx` is a live placeholder that redirects to other pages. It should either be replaced with `TO-ADD/delegation-rewards.mdx` (which covers the same ground completely) or removed from the nav. The slug `delegation-economics` may have incoming links.

### Content quality questions

6. **lpt-eth-usage.mdx authoring note:** The live resource page `resources/lpt-eth-usage.mdx` contains an un-removed authoring note ("This is wild to me that Gateways do not use LPT to pay orchestrators. Need to dig into the why more"). This is a raw draft note visible to readers. It should be removed before the page is considered production-quality. The page content itself (ETH for service payments, LPT for staking/governance) is accurate but incomplete.

7. **TO-ADD pages promotion:** Four complete delegation pages exist in `TO-ADD/` that are not yet in the nav. What is the promotion path? Are these replacements for the current nav pages, or additions? The current nav has `getting-started.mdx` and `delegation-guide.mdx` which overlap substantially with `TO-ADD/overview.mdx` and `TO-ADD/choose-a-delegate.mdx`.

8. **Bridge LPT page missing:** Multiple TO-ADD pages link to `/v2/lpt/about/bridge-lpt` but no such file was found in the `v2/lpt/about/` directory. Is this page planned, or should these links point elsewhere (e.g., to the v1 bridge guide or to a gateways section page)?

9. **Governance: delegator vs orchestrator voting distinction:** `governance/processes.mdx` states "Delegators exercise governance indirectly by delegating to orchestrators whose values align with their own; orchestrators must publicly declare their positions and can cast votes accordingly." This implies orchestrators vote on behalf of their delegators, not that delegators vote directly. Is this accurate for the current governance implementation? If so, delegator-facing governance content should clarify whether delegators can vote independently or only through orchestrator proxy.

10. **Fee switch status:** `purpose.mdx` mentions discussions about a "fee switch" to route ETH fees to the treasury or burn them. As of 2026-03-02, not enacted. This should be confirmed as still accurate before publication — governance proposals can move quickly.

11. **Commission history visibility on Explorer:** `TO-ADD/choose-a-delegate.mdx` suggests checking "the orchestrator's commission history if the Explorer exposes it." Does the Explorer currently display commission change history? If not, this guidance may mislead readers into looking for data that isn't there.

12. **Scope overlap — delegator content in orchestrators tab:** `v2/orchestrators/guides/staking-and-rewards/delegate-operations` exists in the nav (found in docs.json) and may cover delegation from the orchestrator perspective. Confirm whether content in that page duplicates delegator-tab content and whether cross-linking is needed.

### Strategic questions

13. **Audience for About LPT group:** Pages like `overview.mdx`, `tokenomics.mdx`, and `mechanics.mdx` (About LPT group) are written at formal/architectural depth with heavy math notation. Who is the intended reader? If it is the general delegator, the tone and depth are mismatched. If it is a technical researcher or developer, these pages should be framed accordingly and the delegator-facing conceptual content should live elsewhere (or on `purpose.mdx`, which is more accessible).

14. **v1 "Getting Started" nav group mismatch:** The v1 Delegators dropdown "Getting Started" group (`v1/delegators/introduction`, `v1/delegators/quick-start`, `v1/delegators/livepeer-studio-cli`) contains Studio developer content entirely unrelated to network delegation. This is a legacy navigation bug. The rewrite is an opportunity to correct this label or remove the v1 dropdown entirely once v2 content is complete.

15. **Glossary completeness:** `v2/lpt/resources/compendium/glossary.mdx` exists but was not read in detail. Writers should review for coverage of: `rewardCut`, `feeShare`, `claimEarnings`, `Reward()`, `BondingManager`, `active set`, `numActiveTranscoders`, `unbondingPeriod`, `thawing period`, `LIP`, `SPE`, `treasury`, `bonding rate`, `inflation rate`, `probabilistic micropayment tickets`.
