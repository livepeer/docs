# Glossary — LP Token Tab

**Tab folder**: `v2/lpt/`
**Date**: 2026-03-20
**Terms**: 98
**Source**: Agent deep-read + classified-by-tag.md

---

### Active Set

**Definition**: The top 100 orchestrators ranked by total bonded stake that are eligible to receive work and earn rewards each round.
**Also known as**: Active set election
**Context**: Orchestrators must be in the Active Set to participate in reward calling and job routing; the set is re-elected at the start of each round based on cumulative stake.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `lpt/staking`, `lpt/protocol`

---

### AI Inference

**Definition**: Running a trained machine learning model on new input data to produce predictions or generated outputs, as opposed to the training phase.
**External**: [Inference — Wikipedia](https://en.wikipedia.org/wiki/Inference_engine)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `lpt/protocol`, `lpt/economics`

---

### Arbitrum One

**Definition**: A Layer 2 Optimistic Rollup that settles to Ethereum, processing transactions off-chain while inheriting Ethereum-grade security guarantees.
**External**: [Arbitrum documentation](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `lpt/protocol`, `lpt/bridging`

---

### Atomic Execution

**Definition**: A guarantee that a set of on-chain operations either all succeed or none execute, preventing partial state changes.
**External**: [Atomic commit — Wikipedia](https://en.wikipedia.org/wiki/Atomic_commit)
**Tags**: `web3:governance`
**Status**: current
**Pages**: `lpt/governance`, `lpt/contracts`

---

### Bonding

**Definition**: The act of locking (staking) LPT tokens to an orchestrator in Livepeer's delegated proof-of-stake system.
**Context**: Bonding is the primary mechanism by which delegators participate in the protocol — bonded LPT secures the network, confers governance weight, and entitles the holder to a proportional share of inflationary rewards and ETH fees.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/staking`, `lpt/delegation`

---

### Bonded Stake

**Definition**: The total amount of LPT currently locked across the network through active bonding relationships between delegators and orchestrators.
**Context**: Bonded stake is the aggregate input to Livepeer's economic weight calculations; a higher bonded stake means a higher bonding rate and lower inflation.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/staking`, `lpt/protocol`

---

### Bonding Rate (beta)

**Definition**: The ratio of total bonded LPT to total token supply; Livepeer targets a 50% participation rate.
**Context**: The current bonding rate (beta) is the live metric compared against the Target Bonding Rate to determine whether inflation should increase or decrease each round.
**Tags**: `economic:reward`, `web3:tokenomics`
**Status**: current
**Pages**: `lpt/economics`, `lpt/inflation`

---

### BondingManager

**Definition**: The core Livepeer smart contract managing all bonding, delegation, stake accounting, and fund ownership logic.
**Context**: BondingManager is the authoritative on-chain source for stake balances, reward-cut parameters, and delegator relationships; it is called during reward calls and unbonding.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `lpt/contracts`, `lpt/staking`

---

### BondingVotes

**Definition**: The Livepeer smart contract that tracks historical stake snapshots for governance, enabling stake-weighted voting power to be calculated at any past checkpoint.
**Context**: BondingVotes implements the ERC-5805 checkpoint standard and feeds bonded stake data into LivepeerGovernor for on-chain proposal votes.
**Tags**: `livepeer:contract`, `web3:governance`
**Status**: current
**Pages**: `lpt/contracts`, `lpt/governance`

---

### Bridge

**Definition**: Infrastructure connecting two blockchain ecosystems that enables token and information transfer between them.
**External**: [Bridges — ethereum.org](https://ethereum.org/developers/docs/bridges/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `lpt/bridging`, `lpt/arbitrum`

---

### Bridging

**Definition**: The process of moving LPT tokens between Ethereum L1 and Arbitrum L2 using the canonical bridge contracts.
**Context**: LPT must be bridged to Arbitrum to participate in Livepeer staking; bridging is handled via the L2LPTGateway contract and the canonical Arbitrum bridge.
**Tags**: `web3:concept`
**Status**: current
**Pages**: `lpt/bridging`, `lpt/arbitrum`

---

### Capital-backed Sybil Resistance

**Definition**: A security mechanism where staking capital is required to participate, making Sybil attacks economically costly because each fake identity must fund real stake.
**External**: [Proof of stake — ethereum.org](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/security`, `lpt/protocol`

---

### Capital Efficiency

**Definition**: The degree to which staked capital generates productive returns through protocol inflation rewards, ETH fees, or work allocation.
**External**: [Cryptoeconomics — Wikipedia](https://en.wikipedia.org/wiki/Cryptoeconomics)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/economics`, `lpt/staking`

---

### Checkpoint

**Definition**: An on-chain snapshot of stake state recorded by the BondingVotes contract, used as the reference point for governance voting power calculations.
**Context**: Checkpoints are written each round so that governance votes can reference stake at the block when a proposal was created, preventing manipulation by bonding immediately before a vote.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `lpt/protocol`, `lpt/contracts`

---

### Claim Earnings

**Definition**: The on-chain action a delegator or orchestrator takes to collect accumulated inflationary LPT rewards and ETH fees that have been assigned to their stake.
**Context**: Earnings accumulate through pending reward pools and must be explicitly claimed; claiming through the BondingManager updates the delegator's bonded balance.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `lpt/staking`, `lpt/delegation`

---

### Commission Rate

**Definition**: The combined percentage of inflationary rewards and ETH fees that an orchestrator retains before distributing the remainder to delegators.
**Context**: Commission rate is expressed as two separate parameters — reward cut and fee cut — which orchestrators can update between rounds.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `lpt/staking`, `lpt/economics`

---

### Community Treasury

**Definition**: The on-chain fund governed by LPT stakeholders via LivepeerGovernor, funded by a governable percentage of per-round inflation.
**Context**: The Community Treasury receives a configurable Treasury Reward Cut Rate of inflation each round and is spent via governance-approved proposals for ecosystem development.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `lpt/treasury`, `lpt/governance`

---

### Concentration Risk

**Definition**: The risk arising when a disproportionate share of total bonded stake is held by a small number of orchestrators, reducing network decentralization and resilience.
**External**: [Proof of stake — Wikipedia](https://en.wikipedia.org/wiki/Proof_of_stake)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/staking`, `lpt/security`

---

### Delegation

**Definition**: The act of LPT holders staking their tokens toward orchestrators they trust, sharing proportionally in rewards without running any infrastructure themselves.
**Context**: Delegation is the primary way for passive LPT holders to participate in network security and earn yield; delegators can redelegate or unbond at any time subject to the thawing period.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/delegation`, `lpt/staking`

---

### Delegator

**Definition**: A token holder who bonds LPT to an orchestrator in order to secure the network, earn a share of rewards and fees, and participate in on-chain governance.
**Context**: Delegators do not need to run infrastructure; they earn yield proportional to their bonded stake minus the orchestrator's commission rate, and their voting power equals their bonded stake.
**Tags**: `livepeer:role`, `web3:tokenomics`
**Status**: current
**Pages**: `lpt/delegation`, `lpt/staking`

---

### Dilution

**Definition**: The reduction in proportional ownership experienced by non-staking token holders when new LPT is minted each round through inflation.
**Context**: Delegators and orchestrators avoid dilution by bonding; unbonded LPT holders see their ownership percentage decrease as inflationary rewards are distributed only to active participants.
**Tags**: `economic:reward`, `web3:tokenomics`
**Status**: current
**Pages**: `lpt/inflation`, `lpt/economics`

---

### Economic Weight

**Definition**: An orchestrator's total active bonded stake, which determines their proportional share of inflationary rewards and their probability of being selected for job routing.
**Context**: Economic weight is central to Livepeer's security model — orchestrators with more delegated stake have higher economic weight and receive more work and rewards.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/economics`, `lpt/protocol`

---

### ETH Fees

**Definition**: Ether paid by gateways to orchestrators as compensation for completed transcoding or AI inference work, distributed to delegators after the fee cut.
**Context**: ETH fees are the demand-side revenue stream in Livepeer's dual-token model; orchestrators earn fees from work and LPT from inflation, passing both to delegators at their configured commission rates.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `lpt/economics`, `lpt/payments`

---

### Fee Cut

**Definition**: The percentage of ETH fees earned from work that an orchestrator retains before distributing the remainder to their delegators.
**Also known as**: Fee share (the portion passed to delegators)
**Context**: Fee cut is set by the orchestrator and is distinct from reward cut; it applies to ETH fees rather than inflationary LPT rewards.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `lpt/staking`, `lpt/economics`

---

### Fee Share

**Definition**: The portion of ETH fees earned by an orchestrator that is distributed to delegators proportionally to their bonded stake.
**Also known as**: Fee cut (the complementary orchestrator-retained portion)
**Context**: Fee share = 100% minus fee cut; delegators with larger stake receive a proportionally larger share of the fee pool distributed each round.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `lpt/staking`, `lpt/economics`

---

### Fee Switch

**Definition**: A governance-controlled mechanism that enables or adjusts the redirection of protocol fees to the community treasury or other designated destinations.
**Context**: The fee switch is a proposed parameter change subject to on-chain governance; enabling it would direct a portion of ETH fees to the treasury rather than solely to orchestrators and delegators.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `lpt/economics`, `lpt/governance`

---

### Gateway

**Definition**: A protocol node that submits jobs to the network, routes work to orchestrators, manages payment flows, and serves as the interface between applications and the Livepeer Protocol.
**Context**: In the LPT context, gateways pay ETH fees to orchestrators for work, which then flow through to delegators; gateways are the demand side of the two-sided marketplace.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `lpt/protocol`, `lpt/architecture`

---

### Genesis Supply

**Definition**: The initial 10 million LPT tokens created at protocol launch and distributed via the Merkle Mine mechanism.
**Context**: The genesis supply was the starting point for LPT tokenomics; total supply has grown from 10M through inflation since the mainnet launch in 2018.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `lpt/tokenomics`, `lpt/history`

---

### Governor

**Definition**: The Livepeer smart contract that executes approved governance proposals after a Timelock delay, enforcing parameter changes and treasury spending on-chain.
**Also known as**: LivepeerGovernor
**Context**: Governor (LivepeerGovernor) is based on OpenZeppelin's Governor framework and reads voting power from BondingVotes; it is the authoritative contract for all on-chain protocol governance.
**Tags**: `livepeer:contract`, `web3:governance`
**Status**: current
**Pages**: `lpt/contracts`, `lpt/governance`

---

### Governance

**Definition**: The on-chain system of rules and processes by which LPT stakeholders make decisions about protocol changes, treasury spending, and parameter updates through token-weighted voting.
**External**: [Livepeer governance wiki](https://github.com/livepeer/wiki/wiki/Governance)
**Tags**: `web3:governance`
**Status**: current
**Pages**: `lpt/governance`, `lpt/protocol`

---

### Inflation

**Definition**: The dynamic issuance of new LPT each round, distributed to active orchestrators and delegators proportional to their bonded stake.
**Context**: Livepeer's inflation mechanism adjusts the per-round mint rate (Inflation Adjustment) up or down by 0.00005% per round to push the Bonding Rate toward the 50% Target Bonding Rate.
**Tags**: `livepeer:protocol`, `economic:reward`, `web3:tokenomics`
**Status**: current
**Pages**: `lpt/inflation`, `lpt/economics`

---

### Inflation Adjustment (alpha)

**Definition**: The fixed per-round rate (0.00005%) by which the inflation rate increases or decreases based on whether the current Bonding Rate is below or above the Target Bonding Rate.
**Also known as**: alpha
**Context**: The inflation adjustment parameter ensures the system self-corrects: when fewer than 50% of LPT is bonded, inflation rises to attract stakers; when more is bonded, inflation falls.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/inflation`, `lpt/economics`

---

### Inflation Rate

**Definition**: The per-round percentage of the total LPT supply that is newly minted and distributed to active orchestrators and delegators.
**Context**: The inflation rate adjusts dynamically each round via the Inflation Adjustment mechanism; it is not a fixed annual rate but rather a per-round rate compounded over approximately 5,760 rounds per year.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `lpt/inflation`, `lpt/economics`

---

### Inflationary Rewards

**Definition**: Newly minted LPT tokens distributed each round proportionally to active orchestrators and their delegators based on bonded stake.
**Context**: Inflationary rewards are the supply-side incentive for participation; orchestrators must call the reward function each round to mint and distribute them, otherwise that round's allocation is forfeited.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `lpt/inflation`, `lpt/staking`

---

### Issuance

**Definition**: The minting of new LPT tokens each round as the mechanism for distributing inflationary rewards to protocol participants.
**Context**: Total LPT issuance per round equals inflation rate multiplied by current total supply; it flows first to orchestrators who called reward, then to their delegators proportionally.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/inflation`, `lpt/economics`

---

### L2LPTGateway

**Definition**: The bridge contract deployed on Arbitrum that enables LPT token transfers between Ethereum L1 and Arbitrum L2.
**Context**: L2LPTGateway is the on-chain entry point for bridging LPT to Arbitrum, where Livepeer's staking and governance contracts live; it pairs with an L1 Escrow contract on Ethereum mainnet.
**Tags**: `livepeer:contract`, `web3:chain`
**Status**: current
**Pages**: `lpt/bridging`, `lpt/arbitrum`

---

### LIP (Livepeer Improvement Proposal)

**Definition**: A formal design document proposing changes to the Livepeer protocol, governance, or ecosystem, analogous to Ethereum's EIP process.
**Context**: LIPs must follow a defined process — draft, discussion, formal proposal on-chain, community vote — before being implemented; key examples include LIP-89 (on-chain governance) and LIP-91/92 (treasury).
**Tags**: `livepeer:protocol`, `operational:governance`
**Status**: current
**Pages**: `lpt/governance`, `lpt/protocol`

---

### Liquidity Risk

**Definition**: The risk that bonded LPT tokens cannot be quickly converted to liquid assets due to the mandatory unbonding period before withdrawal.
**External**: [Liquidity risk — Wikipedia](https://en.wikipedia.org/wiki/Liquidity_risk)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/staking`, `lpt/economics`

---

### Livepeer Explorer

**Definition**: The official Livepeer protocol explorer for viewing on-chain state including orchestrator information, staking data, delegator positions, and governance proposals.
**Context**: Livepeer Explorer is the primary UI for delegators to bond, unbond, claim earnings, and vote on governance proposals without interacting directly with contracts.
**Tags**: `livepeer:tool`
**Status**: current
**Pages**: `lpt/staking`

---

### Livepeer Foundation

**Definition**: The non-profit Cayman Islands Foundation Company that stewards Livepeer's long-term vision, ecosystem growth, grant programs, and core protocol development.
**Context**: The Livepeer Foundation holds a mandate from the community to coordinate SPEs, manage the governance process alongside GovWorks, and represent the ecosystem externally.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `lpt/governance`, `lpt/ecosystem`

---

### LivepeerGovernor

**Definition**: The OpenZeppelin-based on-chain governor contract for Livepeer that enables stake-weighted voting on protocol proposals using checkpointed BondingVotes data.
**Also known as**: Governor
**Context**: LivepeerGovernor was introduced in LIP-89 and is the authoritative contract for all binding on-chain governance decisions affecting the Livepeer protocol and treasury.
**Tags**: `livepeer:contract`, `web3:governance`
**Status**: current
**Pages**: `lpt/contracts`, `lpt/governance`

---

### LPT (Livepeer Token)

**Definition**: The ERC-20 governance and staking token used to coordinate, incentivize, and secure the Livepeer Network; staked LPT determines orchestrator selection, work allocation, and reward distribution.
**Also known as**: Livepeer Token
**Context**: LPT is the foundational cryptoeconomic primitive of the protocol — it serves simultaneously as a staking bond (security), a governance weight (voting power), and an inflation-distributed reward token.
**Tags**: `livepeer:protocol`, `web3:token`
**Status**: current
**Pages**: `lpt/staking`, `lpt/economics`, `lpt/governance`, `lpt/tokenomics`

---

### Minter

**Definition**: The Livepeer smart contract responsible for minting new LPT tokens during reward calls and for holding ETH accumulated from winning probabilistic micropayment tickets.
**Also known as**: Minter contract
**Context**: The Minter is called by the BondingManager at the start of each round's first reward call to calculate and mint the round's inflationary LPT allocation.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `lpt/contracts`, `lpt/inflation`

---

### Non-custodial

**Definition**: A staking model in which users retain control of their private keys and token ownership while their LPT is bonded, so they are never required to transfer custody to a third party.
**External**: [Proof of stake — ethereum.org](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `lpt/staking`, `lpt/security`

---

### On-chain Treasury

**Definition**: A smart-contract-governed pool of LPT funded by a percentage of inflation and disbursed through community-approved governance proposals for ecosystem development.
**Also known as**: Community Treasury
**Context**: The On-chain Treasury was established by LIP-91/92 and is administered via LivepeerGovernor; it enables the community to fund SPEs, grants, and other public goods without relying on Livepeer Inc.
**Tags**: `livepeer:protocol`, `economic:treasury`
**Status**: current
**Pages**: `lpt/treasury`, `lpt/governance`

---

### Operator Market

**Definition**: The competitive ecosystem of orchestrators offering differentiated services to gateways and delegators, distinguished by price, performance, reliability, and commission rates.
**Context**: The operator market is Livepeer's two-sided marketplace dynamic — delegators allocate stake to orchestrators they trust, creating economic incentives for operators to compete on quality and price.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `lpt/staking`, `lpt/economics`

---

### Orchestrator

**Definition**: A supply-side operator that contributes GPU resources, receives jobs from gateways, performs transcoding or AI inference, earns ETH fees, and distributes inflationary LPT rewards to their delegators.
**Context**: Orchestrators are the active participants in Livepeer's protocol; their total bonded stake (own + delegated) determines their place in the Active Set and their proportional reward share.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `lpt/staking`, `lpt/protocol`

---

### Payment Ticket

**Definition**: A signed off-chain data structure sent from a gateway to an orchestrator representing a probabilistic payment redeemable on-chain for ETH if it is a winning ticket.
**Context**: Payment tickets are the mechanism by which gateways pay orchestrators without incurring on-chain gas fees per job; only the rare winning tickets are submitted to the TicketBroker contract.
**Tags**: `livepeer:protocol`, `economic:payment`
**Status**: current
**Pages**: `lpt/payments`, `lpt/protocol`

---

### Per Round

**Definition**: The Livepeer protocol's fundamental time unit, approximately equal to one day of Ethereum blocks; reward minting, activations, and delegator earnings accrue on a per-round basis.
**Context**: Key unit for orchestrator reward calculations, delegator stake checkpoints, and LPT inflation scheduling.
**Tags**: `livepeer:economics`
**Status**: current
**Pages**: `lpt/protocol`, `lpt/staking`

---

### Price Per Pixel

**Definition**: The fundamental pricing unit for Livepeer transcoding work, expressed as the cost in wei for processing one pixel of video.
**Context**: Price per pixel allows standardized comparison between orchestrators regardless of resolution or bitrate; gateways filter orchestrators by MaxPrice, and orchestrators advertise their pricePerUnit.
**Tags**: `economic:pricing`
**Status**: current
**Pages**: `lpt/economics`, `lpt/pricing`

---

### Proposer Bond

**Definition**: The minimum bonded LPT balance (100 LPT) required to submit a formal on-chain governance proposal.
**Context**: The proposer bond deters spam proposals by requiring skin-in-the-game from proposal authors; it does not lock additional tokens — the proposer simply needs at least 100 LPT bonded.
**Tags**: `web3:governance`, `economic:treasury`
**Status**: current
**Pages**: `lpt/governance`, `lpt/proposals`

---

### Quadratic Funding

**Definition**: A public goods funding mechanism where matching funds amplify small individual contributions so that projects with broad community support receive disproportionately larger allocations.
**External**: [Quadratic voting — Wikipedia](https://en.wikipedia.org/wiki/Quadratic_voting)
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `lpt/treasury`, `lpt/proposals`

---

### Quorum

**Definition**: The minimum percentage of total participating bonded stake required for a governance vote to produce a binding result.
**Context**: Livepeer's on-chain governance requires a quorum threshold to be met before a proposal outcome is valid; if quorum is not reached, the proposal fails regardless of the for/against split.
**Tags**: `livepeer:protocol`, `web3:governance`, `operational:governance`
**Status**: current
**Pages**: `lpt/governance`

---

### Rebond

**Definition**: The action of moving bonded LPT stake from one orchestrator to a different orchestrator without going through the unbonding thawing period.
**Context**: Rebonding (also called redelgation in some contexts) lets delegators switch orchestrators immediately, keeping their LPT in the active bonded state and avoiding the 7-round thawing period.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/staking`, `lpt/delegation`

---

### Retroactive Funding

**Definition**: A funding model that rewards past contributions or completed projects based on demonstrated impact, reducing speculative risk for the treasury.
**External**: [Optimism retroactive public goods funding](https://blog.ethereum.org/en/2026/02/27/project-odin)
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `lpt/treasury`, `lpt/proposals`

---

### Reward Call

**Definition**: The on-chain transaction that an active orchestrator must submit each round to mint the round's inflationary LPT allocation and distribute it to themselves and their delegators.
**Context**: Reward calling is optional per round but forfeits that round's rewards if skipped; many orchestrators automate reward calling with monitoring tools to avoid missing rounds.
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: current
**Pages**: `lpt/staking`, `lpt/protocol`

---

### Reward Cut

**Definition**: The percentage of inflationary LPT rewards that an orchestrator retains before distributing the remainder proportionally to their delegators.
**Context**: Reward cut is set by the orchestrator and can range from 0% to 100%; a 10% reward cut means delegators collectively receive 90% of the round's inflationary reward pool proportional to their stake.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `lpt/staking`, `lpt/economics`

---

### Round

**Definition**: A discrete time interval measured in Ethereum/Arbitrum blocks during which staking rewards are calculated, active sets are determined, and protocol state advances.
**Context**: A Livepeer round is approximately 5,760 Arbitrum blocks (roughly one day); reward calls, active set elections, and inflation adjustments all occur on round boundaries.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `lpt/protocol`, `lpt/staking`

---

### RoundsManager

**Definition**: The Livepeer smart contract that tracks round progression, stores the current round number, and coordinates round-based protocol state transitions.
**Context**: RoundsManager is called at the start of each round initialization and interacts with BondingManager and Minter to trigger reward distribution and inflation calculation.
**Tags**: `livepeer:contract`
**Status**: current
**Pages**: `lpt/contracts`, `lpt/protocol`

---

### Slashing

**Definition**: A penalty mechanism that destroys a portion of an orchestrator's bonded LPT stake as punishment for protocol violations such as failing verification or underperforming.
**External**: [Proof of stake — ethereum.org](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)
**Tags**: `livepeer:protocol`, `economic:reward`, `web3:tokenomics`
**Status**: current
**Pages**: `lpt/protocol`, `lpt/security`

---

### SPE (Special Purpose Entity)

**Definition**: A treasury-funded organizational unit with a defined scope, budget, and accountability period, used to execute specific ecosystem development tasks.
**Context**: SPEs are the primary mechanism through which the Livepeer treasury funds ongoing work; each SPE submits a proposal, receives staged funding, and reports progress back to the community via the governance forum.
**Tags**: `livepeer:entity`, `operational:governance`
**Status**: current
**Pages**: `lpt/governance`, `lpt/treasury`

---

### Stake

**Definition**: LPT bonded to an orchestrator through the protocol, representing a commitment that secures the network and determines the holder's proportional share of rewards and governance power.
**Also known as**: Bonded stake
**Context**: Stake is the core unit of participation in Livepeer — all economic weight, voting power, and reward distribution derive from how much LPT is staked to active orchestrators.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/staking`, `lpt/protocol`

---

### Staking

**Definition**: The act of locking tokens in a proof-of-stake protocol to participate in network security, governance, and earn inflationary rewards and fee income.
**External**: [Proof of stake — ethereum.org](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)
**Tags**: `web3:tokenomics`, `economic:reward`
**Status**: current
**Pages**: `lpt/staking`

---

### Supply

**Definition**: The total number of LPT tokens in existence at any given time, starting from a genesis supply of 10 million and growing continuously through inflationary issuance.
**Context**: Total supply growth is governed by the per-round inflation rate; because inflation is distributed only to active stakers, non-stakers experience dilution as supply increases.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/economics`, `lpt/tokenomics`

---

### Target Bonding Rate

**Definition**: The 50% participation threshold for the ratio of bonded LPT to total supply; the inflation mechanism adjusts the per-round issuance rate to push toward this target.
**Context**: The Target Bonding Rate is the equilibrium point of Livepeer's inflation model — if bonding rate is below 50%, inflation rises to incentivize more staking; if above, inflation falls.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/economics`, `lpt/inflation`

---

### Thawing Period

**Definition**: The mandatory waiting period of approximately 7 rounds after initiating an unbond before the freed LPT becomes withdrawable to the holder's wallet.
**Context**: The thawing period is a security mechanism that prevents delegators from immediately withdrawing stake after misbehavior, giving the protocol time to apply any pending slashing.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `lpt/staking`, `lpt/delegation`

---

### Timelock

**Definition**: A smart contract mechanism that enforces a mandatory delay between when a governance proposal passes and when it can be executed on-chain.
**Context**: The Timelock in LivepeerGovernor gives the community time to review approved changes before they take effect, providing a safety window to react to malicious or erroneous proposals.
**Tags**: `web3:governance`
**Status**: current
**Pages**: `lpt/governance`, `lpt/contracts`

---

### Transcoding

**Definition**: The direct digital-to-digital conversion of video from one encoding format to another, producing multiple adaptive renditions for cross-device delivery.
**External**: [Transcoding — Wikipedia](https://en.wikipedia.org/wiki/Transcoding)
**Tags**: `video:processing`
**Status**: current
**Pages**: `lpt/protocol`, `lpt/economics`

---

### Treasury

**Definition**: The on-chain pool of LPT and ETH held in protocol smart contracts for funding public goods, SPEs, grants, and ecosystem development through community governance.
**Context**: The Livepeer treasury is funded by the Treasury Reward Cut Rate and governed by LPT stakeholders through LivepeerGovernor; it is the successor to centralized foundation grants.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `lpt/treasury`, `lpt/governance`

---

### Treasury Allocation

**Definition**: A governance-approved distribution of treasury funds to a specific proposal, SPE, or grant recipient.
**Context**: Treasury allocations are enacted via on-chain proposals that pass through the LivepeerGovernor voting process and execute after the Timelock delay; they typically fund SPEs in milestone tranches.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `lpt/treasury`, `lpt/governance`

---

### Treasury Reward Cut Rate

**Definition**: The governable percentage of per-round inflationary LPT that is diverted to the community treasury instead of being distributed directly to orchestrators and delegators.
**Context**: The Treasury Reward Cut Rate is set via governance (currently 10%); it is deducted from the round's total inflation before the remainder flows to active participants through reward calls.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `lpt/treasury`, `lpt/economics`

---

### Unbonding

**Definition**: The process by which a delegator or orchestrator initiates withdrawal of bonded LPT from the protocol, triggering the mandatory thawing period before tokens become liquid.
**Also known as**: Unbonding period
**Context**: Unbonding does not immediately return LPT to the wallet; tokens remain locked for approximately 7 rounds (the thawing period), during which they can still be rebonded but earn no new rewards.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/staking`, `lpt/delegation`

---

### USD (United States Dollar)

**Definition**: The official currency of the United States; used as the reference denomination for Livepeer gateway fees, grant amounts, treasury allocations, and market data.
**External**: [Wikipedia](https://en.wikipedia.org/wiki/United_States_dollar)
**Tags**: `economic:currency`
**Status**: current
**Pages**: `lpt/economics`, `lpt/governance`

---

### USDT (Tether)

**Definition**: A US-dollar-pegged ERC-20 stablecoin issued by Tether Limited; available on some centralised exchanges as a trading pair for LPT.
**Also known as**: Tether
**External**: [Tether](https://tether.to/)
**Tags**: `web3:token`
**Status**: current
**Pages**: `lpt/economics`, `lpt/token-portal`

---

### veLPT (Vote-Escrowed LPT)

**Definition**: A proposed mechanism that would allow LPT holders to lock tokens for an extended period in exchange for enhanced governance voting power, aligning long-term incentives.
**Context**: veLPT is a governance proposal (not yet implemented) inspired by Curve Finance's veToken model; it would give long-term committed holders outsized influence relative to short-term holders.
**Tags**: `economic:treasury`, `web3:governance`
**Status**: draft
**Pages**: `lpt/governance`, `lpt/proposals`

---

### Vesting

**Definition**: A schedule controlling when token allocations — such as founder or team grants — become available over time, often with an initial cliff period followed by pro-rata release.
**External**: [Vesting — Wikipedia](https://en.wikipedia.org/wiki/Vesting)
**Tags**: `web3:tokenomics`, `economic:reward`
**Status**: current
**Pages**: `lpt/tokenomics`, `lpt/history`

---

### Voting Power

**Definition**: The weight of a participant's vote in Livepeer on-chain governance, determined by their total bonded LPT stake at the block when the proposal was created.
**Context**: Voting power in Livepeer is stake-weighted, not one-token-one-vote; delegators can override their orchestrator's vote with their own stake-proportional vote via vote detachment.
**Tags**: `livepeer:protocol`, `web3:governance`
**Status**: current
**Pages**: `lpt/governance`, `lpt/staking`

---

### Wei

**Definition**: The smallest denomination of Ether, where 1 ETH equals 10^18 Wei; used in Livepeer for precise on-chain price calculations such as price per pixel.
**External**: [Wei — ethereum.org glossary](https://ethereum.org/glossary/)
**Tags**: `web3:token`
**Status**: current
**Pages**: `lpt/pricing`, `lpt/payments`

---

## Draft Terms

*The following terms appear in agent-lpt.md but are not fully defined in classified-by-tag.md. Definitions are best-effort.*

---

### Active Set Election

**Definition**: The process at the start of each round that selects the top 100 orchestrators by total bonded stake to form the Active Set eligible to receive work.
**Context**: Active Set Election runs deterministically from the BondingManager's stake rankings; orchestrators that fall out of the top 100 between rounds do not earn inflationary rewards for that round.
**Tags**: `livepeer:protocol`
**Status**: draft
**Pages**: `lpt/staking`, `lpt/protocol`

---

### AI Inference (Network Work Type)

**Definition**: Running trained AI models as the newer category of on-network compute work alongside transcoding, with orchestrators earning ETH fees for completed inference jobs.
**Context**: AI inference expanded Livepeer beyond video transcoding; orchestrators that register AI capabilities are routed inference jobs from AI gateways and earn ETH fees paid by requesters.
**Tags**: `ai:concept`, `livepeer:protocol`
**Status**: current
**Pages**: `lpt/protocol`, `lpt/economics`

---

### Bonding Rate Target

**Definition**: The 50% threshold used by the inflation model as the reference point to determine whether per-round issuance should increase or decrease.
**Context**: Equivalent to Target Bonding Rate; some documentation uses this form when referring to the model parameter rather than the current observed rate.
**Tags**: `web3:tokenomics`
**Status**: draft
**Pages**: `lpt/economics`, `lpt/inflation`

---

### Delegation Model

**Definition**: Livepeer's delegated proof-of-stake system in which token holders choose orchestrators to delegate stake to, earning rewards without running infrastructure.
**Context**: The delegation model separates capital provision (delegators) from operational work (orchestrators), enabling a broad token holder base to participate in network security proportionally to their stake.
**Tags**: `livepeer:protocol`, `web3:tokenomics`
**Status**: draft
**Pages**: `lpt/delegation`

---

### Dilution Protection

**Definition**: The benefit that active stakers receive by bonding — because inflationary rewards accrue only to bonded participants, stakers maintain their proportional ownership while non-stakers are diluted.
**Context**: Dilution protection is the primary economic argument for delegating LPT; an unbonded holder loses ownership percentage each round as new tokens are distributed to active participants.
**Tags**: `web3:tokenomics`, `economic:reward`
**Status**: draft
**Pages**: `lpt/economics`, `lpt/inflation`

---

### Fee Pool

**Definition**: The accumulated ETH fees earned by an orchestrator from completed work in a given round, split between the orchestrator and their delegators according to fee cut and fee share parameters.
**Context**: The fee pool is distinct from the inflationary reward pool; it originates from gateway payments for real work performed, making it the demand-driven complement to inflation-driven rewards.
**Tags**: `economic:payment`
**Status**: current
**Pages**: `lpt/staking`, `lpt/economics`

---

### Governance Forum

**Definition**: The Forum's governance category at forum.livepeer.org where LIPs, pre-proposals, and protocol governance discussions take place before on-chain voting.
**Context**: The Governance Forum is the primary off-chain deliberation space; proposals typically spend time in Forum discussion before being formalized as on-chain LIPs.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `lpt/governance`

---

### Inflation Model

**Definition**: Livepeer's algorithmic mechanism that adjusts the per-round LPT issuance rate dynamically based on the gap between the current Bonding Rate and the 50% Target Bonding Rate.
**Context**: The inflation model was designed so the protocol is self-regulating — no manual parameter changes are needed; the Inflation Adjustment (alpha) automatically nudges issuance each round.
**Tags**: `web3:tokenomics`, `economic:reward`
**Status**: draft
**Pages**: `lpt/inflation`, `lpt/economics`

---

### L1 Escrow

**Definition**: The Ethereum mainnet contract that holds LPT in escrow during cross-chain bridging to Arbitrum, locking L1 tokens as L2 equivalents are minted on Arbitrum.
**Context**: The L1 Escrow pairs with L2LPTGateway to form the canonical LPT bridge; tokens bridged to Arbitrum are locked in L1 Escrow until bridged back.
**Tags**: `livepeer:contract`, `web3:chain`
**Status**: current
**Pages**: `lpt/bridging`, `lpt/arbitrum`

---

### Merkle Mine

**Definition**: Livepeer's decentralized token distribution algorithm used at genesis, where eligible Ethereum addresses could claim LPT by submitting Merkle proofs.
**Context**: The Merkle Mine was used to distribute genesis supply broadly across the Ethereum community without a traditional ICO, forming the initial base of LPT holders.
**Tags**: `web3:concept`
**Status**: current
**Pages**: `lpt/tokenomics`, `lpt/history`

---

### Pending Rewards

**Definition**: Inflationary LPT and ETH fees that have been earned through staking but not yet claimed by calling the claim earnings function.
**Context**: Pending rewards accumulate each round an orchestrator calls reward; delegators do not need to claim every round but must claim before certain actions (such as moving stake) to avoid losing accrued amounts.
**Tags**: `economic:reward`
**Status**: draft
**Pages**: `lpt/staking`, `lpt/delegation`

---

### Proof-of-Stake

**Definition**: A blockchain consensus mechanism where validators stake cryptocurrency as collateral to propose and validate blocks, replacing the energy-intensive Proof-of-Work model.
**External**: [Proof of stake — ethereum.org](https://ethereum.org/developers/docs/consensus-mechanisms/pos/)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `lpt/protocol`

---

### Reward Calling

**Definition**: The operational practice of regularly submitting the reward transaction on-chain each round to mint and distribute inflationary LPT to an orchestrator and their delegators.
**Context**: Reward calling is a critical orchestrator responsibility; missing rounds forfeits that round's inflation permanently. Automated tools and community watchers help orchestrators avoid missed calls.
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: draft
**Pages**: `lpt/staking`, `lpt/protocol`

---

### Stake-Weighted

**Definition**: A mechanism where each participant's voting power, reward allocation, or selection probability is proportional to their staked token balance rather than equal per-participant.
**Context**: Used in Livepeer governance votes, orchestrator selection, and reward distribution — delegators with more staked LPT have proportionally greater influence.
**Tags**: `livepeer:governance`
**Status**: current
**Pages**: `lpt/governance`, `lpt/staking`

---

### Stake-Weighted Voting

**Definition**: A governance voting system in which each participant's vote counts in proportion to their total bonded LPT stake rather than one-address-one-vote.
**External**: [Livepeer governance wiki](https://github.com/livepeer/wiki/wiki/Governance)
**Tags**: `web3:governance`
**Status**: current
**Pages**: `lpt/governance`

---

### Token Distribution

**Definition**: The allocation and dispersal of LPT tokens across founders, team, investors, and the public through mechanisms including the Merkle Mine, vesting schedules, and inflationary issuance.
**Context**: Livepeer's initial token distribution used a combination of team/investor allocations with vesting and the open Merkle Mine; ongoing distribution occurs through per-round inflation to active stakers.
**Tags**: `web3:tokenomics`
**Status**: draft
**Pages**: `lpt/tokenomics`, `lpt/history`

---

### Tokenomics

**Definition**: The economic design of the LPT token system encompassing total supply, genesis distribution, inflation schedule, staking incentives, governance rights, and deflationary mechanisms.
**External**: [Cryptoeconomics — Wikipedia](https://en.wikipedia.org/wiki/Cryptoeconomics)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `lpt/tokenomics`

---

### Treasury Governance

**Definition**: The on-chain process by which LPT stakeholders propose, vote on, and execute allocation of community treasury funds for ecosystem development.
**Context**: Treasury governance uses the LivepeerGovernor contract; proposals require a Proposer Bond, pass through a voting period, meet Quorum, and execute after a Timelock delay.
**Tags**: `economic:treasury`, `web3:governance`
**Status**: draft
**Pages**: `lpt/treasury`, `lpt/governance`

---

### Vote Detachment

**Definition**: The ability for a delegator to override their orchestrator's governance vote with their own individual stake-weighted vote on a specific proposal.
**Context**: Vote detachment ensures delegators retain final governance authority even when their stake is bonded to an orchestrator; the orchestrator's vote applies only to stake whose delegators have not individually voted.
**Tags**: `web3:governance`, `operational:governance`
**Status**: current
**Pages**: `lpt/governance`

---

### Yield

**Definition**: The annualized return on staked LPT expressed as a percentage, combining inflationary LPT rewards and any ETH fee share earned through the bonded orchestrator.
**Context**: Yield for delegators varies by orchestrator commission rates, the current inflation rate, and the total bonded supply; the Livepeer documentation provides yield calculators for delegators.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `lpt/staking`, `lpt/economics`
