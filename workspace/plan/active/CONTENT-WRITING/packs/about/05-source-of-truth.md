# 05 — Source of Truth

The only place facts come from without flagging. Every claim here is sourced from existing About content, the whitepaper, or governance-confirmed values.

If a fact is needed and **not** in this file, flag it with `{/* REVIEW: [exact claim] — verify with: [named source] */}`. Do not invent.

Sources collated: `attachments/v1-content.md`, `attachments/v2-content.md`, `attachments/research-pack.md`, `attachments/audience-design.md`, `attachments/ia-design.md`, and the live `v2/about/` pages cross-referenced. Where a value is governance-controlled or time-sensitive, it is flagged inline.

---

## Section 1 — What Livepeer is

- Livepeer is a decentralised video and AI compute infrastructure network. It coordinates GPU operators worldwide to provide transcoding and AI inference services through an open marketplace.
- The protocol launched in 2017 (whitepaper) with the production network operating from 2018.
- Livepeer was one of the earliest DePIN (Decentralised Physical Infrastructure Network) projects.
- The protocol now operates primarily on Arbitrum One after the Confluence migration (LIP-73). Ethereum mainnet retains a role for the LPT token bridge and historical state.

## Section 2 — Protocol versus network

- **Protocol** = on-chain coordination layer. Smart contracts on Arbitrum One enforce staking, delegation, inflation, rewards, slashing, probabilistic payments, and governance. The protocol does not transcode, route jobs, or hold media.
- **Network** = off-chain execution layer. GPU operators (orchestrators) run compute. Gateways accept jobs from applications and route them. Workers (transcoders, AI inference) attach to orchestrators.
- **Bridge between them:** gateways fund ETH reserves on-chain (TicketBroker); orchestrators redeem winning tickets on-chain for ETH; LPT inflation is minted on-chain and claimed by orchestrators and delegators each round.

## Section 3 — Core actors

| Role | Stake required | Pays | Earns | Where they live |
|---|---|---|---|---|
| Orchestrator | Yes (LPT, self-bonded) | — | ETH fees per ticket redeemed; share of LPT inflation per round | GPU node running `go-livepeer` |
| Delegator | Yes (LPT, bonded to an orchestrator) | — | Share of orchestrator's rewards minus reward cut and fee cut | LPT holder; no infrastructure |
| Gateway | No | ETH or credit per job | Margin between job price and orchestrator price (operator economics) | Node accepting RTMP / API jobs |
| Transcoder / AI worker | No (operates under an orchestrator) | — | Paid by attached orchestrator | Compute node attached to an orchestrator |
| Foundation | n/a | n/a | n/a | Non-profit; coordinates strategy, SPE oversight |
| SPE (Special Purpose Entity) | n/a | n/a | Treasury-funded grants | Community-funded teams (e.g. LiveInfra, LISAR) |

## Section 4 — LPT (Livepeer Token)

- LPT is an ERC-20 token bridged between Ethereum mainnet (L1) and Arbitrum (L2).
- Three functions: staking (bond to BondingManager), governance (stake-weighted voting), security (slashable collateral).
- LPT is **not** used for service payments. Compute is paid in ETH or via gateway credit balances.
- Genesis supply: 10,000,000 LPT in 2018, distributed via Merkle Mine. **No ICO or pre-mine.**
- Initial distribution: community Merkle Mine 63.44%, team & founders 19.00%, early backers 12.35%, protocol treasury 5.21%.
- Current circulating supply: approximately 37.9 million LPT — `{/* REVIEW: cited as ~37.9M as of early 2025; verify at livepeer.org/lpt or Livepeer Explorer */}`.
- Bonded ratio: approximately 44% as of mid-2025 — `{/* REVIEW: cited as ~44% staked as of June 2025; verify at Livepeer Explorer */}`.
- LPT contract address (Arbitrum One): `0x289ba1701C2F088cf0faf8B3705246331cB8A839` — verify on Arbiscan; flag if cited stale.

## Section 5 — Inflation and rewards

- Dynamic inflation model. Each round, the inflation rate adjusts toward a target bonded ratio (50%).
- Rule: if `B/S < β*` (bonded supply less than target), inflation rate steps up by Δ next round, capped at `r_max`. If `B/S > β*`, inflation steps down by Δ, floored at `r_min`.
- Δ, `r_min`, `r_max`, and β* are governance-controlled parameters — `{/* REVIEW: verify current values at explorer.livepeer.org */}`.
- Rewards distributed proportionally to bonded stake among active orchestrators each round.
- Each orchestrator keeps a `rewardCut` (LPT inflation share) and `feeShare` (ETH fee share); the remainder is distributed to its delegators in proportion to their stake.
- 10% of newly minted LPT each round routes to the treasury (LIP-92).
- Delegators claim accumulated rewards via `claimEarnings(endRound)`.

## Section 6 — Probabilistic micropayments

- Gateways fund a deposit and reserve via `fundDepositAndReserve()` on the TicketBroker contract.
- For each video segment or AI job, the gateway signs an off-chain ticket with a `faceValue` and `winProb`.
- Most tickets do not win. Only winning tickets are redeemed on-chain via `redeemWinningTicket()`.
- Expected payout over many tickets equals the true cost of work.
- The scheme reduces on-chain transaction volume by approximately 99% versus per-segment payments. (Cited in `economics.mdx`.)

## Section 7 — Rounds and the active set

- A round is the protocol's epoch. Round length: 5760 blocks on the mainnet config — approximately 24 hours.
- New rounds advance via `initializeRound()` on the RoundsManager contract.
- Operations such as bonding, unbonding, and reward claims take effect from the next round.
- Active set: stake-weighted election. Size is a governance parameter — `{/* REVIEW: do not hard-code; verify current size at explorer.livepeer.org */}`.
- Reward function (`reward()`) can be called once per round per active orchestrator.

## Section 8 — Governance

- Hybrid on-chain / off-chain governance.
- LIP (Livepeer Improvement Proposal) lifecycle: forum discussion → RFP draft → LIP design doc on GitHub → on-chain submission via Governor contract.
- Submission threshold: ≥100 LPT. Stake is returned if the proposal passes.
- Voting period: 30 rounds (approximately 3.75 days) — `{/* REVIEW: governance-controlled, verify current */}`.
- Voting power: stake-weighted. Delegators may withdraw delegation temporarily to vote independently; otherwise they vote via their orchestrator.
- Quorum: ≥33% of staked LPT participates. Threshold: >50% "for" majority.
- Execution: Governor automatically queues and executes approved proposals.

### Notable LIPs

- LIP-1 — governance process.
- LIP-73 — Confluence; migration of canonical activity from Ethereum to Arbitrum One.
- LIP-89 — Treasury creation.
- LIP-92 — 10% of newly minted LPT routes to treasury each round.
- LIP-100 — monetary policy; treasury reward cut adjustments.
- LIP-107 — `{/* REVIEW: review status pending Mehrdad */}`.
- Earlier monetary policy: LIP-34, LIP-35, LIP-40, LIP-83 (inflation parameter changes).

## Section 9 — Treasury

- Created by LIP-89 (treasury contract) and LIP-92 (allocation rule).
- Funded by:
  - 10% of newly minted LPT each round (per LIP-92) — `{/* REVIEW: cited 25% in early treasury.mdx drafts; resolve to 10% per LIP-92 unless governance has revised */}`.
  - 50% of slashed LPT (the other 50% burned).
  - Fee-pool remainders (where applicable).
  - Direct LIP transfers.
- Disbursement governed by the same LIP process as protocol upgrades.
- Spending categories: core development, ecosystem grants, public goods, security and audits, community programmes, contributor payments.
- Foundation acts as steward; it does not vote.
- Transparency: Livepeer Explorer, Arbiscan.

## Section 10 — Key contracts

- **Controller** — registry mapping contract IDs to implementation addresses. Discovered via Keccak256 hash of contract name.
- **BondingManager** — staking, delegation, reward and fee distribution. Functions include `bond()`, `unbond()`, `withdrawStake()`, `reward()`, `claimEarnings()`.
- **RoundsManager** — round transitions; `initializeRound()`.
- **TicketBroker** — probabilistic payment redemption; `fundDepositAndReserve()`, `redeemWinningTicket()`, `unlock()`, `withdraw()`.
- **Minter** — calculates and mints LPT inflation per round; `currentMintableTokens()`.
- **ServiceRegistry** — orchestrator service URI registry.
- **AIServiceRegistry** — AI service URI registry. AI services are architecturally separate from video orchestrator economics.
- **LivepeerToken** — ERC-20 token contract.
- **BridgeMinter, L1LPTGateway, L2LPTGateway** — token bridge between Ethereum L1 and Arbitrum L2.
- **LivepeerTokenFaucet** — testnet utility.
- **Governor / LivepeerGovernor / BondingVotes** — governance voting and execution.
- **Treasury** — community-controlled fund.

Contract addresses live in `livepeer-contract-addresses-data.json`. Pages must import addresses from this data file and never hardcode them in MDX prose.

## Section 11 — AI services architecture

- AI services do **not** participate in round-based reward distribution.
- AI services do **not** require LPT staking.
- AI services are **not** subject to active-set election.
- Payment for AI inference is per frame, per token, or per session in ETH or via credit, settled through the gateway.
- The AI compute system uses `AIServiceRegistry` and is architecturally separate from the video transcoding system.
- Cascade is the framework for coordinating multi-step AI workflows (e.g. Daydream's webcam → Stable Diffusion pipeline).

## Section 12 — Public products and platforms

- **Livepeer Studio** — public gateway service. REST API at `https://livepeer.studio/api`. Endpoints include `POST /stream`, `POST /transcode`, `POST /ai/infer`.
- **Daydream** — public AI gateway. Real-time webcam → AI pipelines.
- **Cascade** — load balancer and AI workflow coordinator.
- **Streamplace** — managed gateway service.
- These run on the Livepeer Network. They do not constitute the network.

## Section 13 — Interfaces

| Interface | Use case | Endpoint or invocation |
|---|---|---|
| REST API | App developer transcoding and AI session control | `https://livepeer.studio/api` |
| gRPC API | Gateway-to-orchestrator session control | `gateway.proto` |
| GraphQL | Network state, rewards, rounds | `https://explorer.livepeer.org/graphql` |
| JS SDK | Frontend playback, ingest, AI session | `@livepeer/sdk` |
| CLI | Orchestrator and delegator operations | `livepeer_cli`, `livepeer_exporter` |
| Smart contracts | Direct staking, redemption, voting | BondingManager, TicketBroker, Governor on Arbitrum |

## Section 14 — Foundation and SPEs

- The Livepeer Foundation is a non-profit. It coordinates strategy, supports core protocol development, runs ecosystem programmes, and oversees SPE governance.
- SPEs (Special Purpose Entities) are community-approved teams funded by the on-chain treasury. They build public goods. Examples: LiveInfra (infrastructure tooling), LISAR (AI / R&D).
- The Foundation does not vote on protocol governance proposals; it acts as a steward and operational coordinator.

## Section 15 — Locked terminology

Use these terms exactly. Never substitute the disallowed alternatives.

| Use | Never |
|---|---|
| LPT | "tokens", "crypto" |
| orchestrator | "miner", "node" generically |
| gateway | "API gateway" |
| broadcaster | superseded — use "gateway" |
| active set | "top orchestrators" |
| reward cut | "commission" |
| fee cut / fee share | "commission" |
| probabilistic micropayments | "payments" generically |
| on-chain / off-chain | payment mode — never workload type |
| dual | workload config — not a payment type |
| pool worker | (define on first use, every page) |
| SPE | "team" |
| LIP | "improvement proposal" only |
| Confluence | the LIP-73 migration to Arbitrum One — proper noun |

## Section 16 — Time-sensitive values that always require flagging

Never assert as fact without a `{/* REVIEW */}` flag and a verification source:

- Active set size
- Current inflation rate
- Current bonded ratio (% of LPT staked)
- Total circulating supply
- Voting period length (currently cited as 30 rounds — verify if used)
- Unbonding period length (currently cited as 7 rounds — verify if used)
- Treasury reward-cut rate (10% per LIP-92, but verify governance changes)
- Δ, `r_min`, `r_max`, β* parameters
- Submission threshold (currently cited as 100 LPT — verify)
- Quorum and approval thresholds (currently 33% / >50% — verify)

These are all governance-controlled. Verify at `https://explorer.livepeer.org` or via the Governor contract before publishing.

## Section 17 — Verified-from-research

The whitepaper (Petkanics & Tang, 2017) is the primary citation for original protocol design. Truebit-style verification was specified at the time. The current verification model uses perceptual hashing and economic incentives via slashing — a deviation from the original specification.

The Mental Model page's 10-layer OSI analogy is original to the v2 docs and not from external sources.
