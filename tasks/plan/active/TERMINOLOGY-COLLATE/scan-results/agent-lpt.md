# LPT Tab — Agent Term Extraction

**Pages scanned**: All MDX files in `v2/lpt/`
**Terms found**: ~120

| Term | Type | Page(s) Found | Notes |
|------|------|---------------|-------|
| Bonding | economic | lpt/staking, lpt/delegation | Locking LPT to an orchestrator to participate in staking |
| Unbonding | economic | lpt/staking, lpt/delegation | Process of withdrawing bonded LPT after a waiting period |
| Delegation | economic | lpt/delegation, lpt/staking | Assigning staked LPT to a chosen orchestrator |
| Delegator | livepeer-specific | lpt/delegation, lpt/staking | LPT holder who bonds stake to an orchestrator |
| Orchestrator | livepeer-specific | lpt/staking, lpt/protocol | Node performing work and distributing rewards to delegators |
| Active Set | livepeer-specific | lpt/staking, lpt/protocol | Top orchestrators eligible to receive work each round |
| Reward Cut | economic | lpt/staking, lpt/economics | Percentage of inflationary rewards kept by the orchestrator |
| Fee Cut | economic | lpt/staking, lpt/economics | Percentage of earned ETH fees kept by the orchestrator |
| Fee Share | economic | lpt/staking, lpt/economics | Portion of earned fees distributed to delegators |
| Commission Rate | economic | lpt/staking, lpt/economics | Combined reward cut and fee cut set by the orchestrator |
| Round | livepeer-specific | lpt/protocol, lpt/staking | Fixed block interval defining reward and work cycles |
| Checkpoint | livepeer-specific | lpt/protocol, lpt/contracts | On-chain snapshot of stake state for governance voting |
| Claim Earnings | livepeer-specific | lpt/staking, lpt/delegation | Action collecting accumulated rewards and fees |
| Rebond | economic | lpt/staking, lpt/delegation | Moving bonded stake to a different orchestrator |
| Economic Weight | economic | lpt/economics, lpt/protocol | Influence proportional to total bonded LPT stake |
| Bonding Rate (beta) | economic | lpt/economics, lpt/inflation | Current percentage of total LPT supply that is bonded |
| Target Bonding Rate | economic | lpt/economics, lpt/inflation | Desired bonding rate the inflation model targets |
| Inflation Rate | economic | lpt/inflation, lpt/economics | Percentage of new LPT minted per round |
| Inflation Adjustment (alpha) | economic | lpt/inflation, lpt/economics | Rate at which inflation changes toward the target |
| Issuance | economic | lpt/inflation, lpt/economics | Total new LPT created through inflationary minting |
| Supply | economic | lpt/economics, lpt/tokenomics | Total number of LPT tokens in existence |
| Stake | economic | lpt/staking, lpt/protocol | LPT bonded to an orchestrator securing the network |
| Bonded Stake | economic | lpt/staking, lpt/protocol | Total LPT currently locked in bonding across the network |
| Slashing | economic | lpt/protocol, lpt/security | Penalty mechanism destroying stake for misbehavior |
| Capital-backed Sybil Resistance | web3 | lpt/security, lpt/protocol | Using staked capital to prevent identity-based attacks |
| Governance | web3 | lpt/governance, lpt/protocol | On-chain decision-making process for protocol changes |
| Voting Power | livepeer-specific | lpt/governance, lpt/staking | Influence in governance proportional to bonded stake |
| LIP | livepeer-specific | lpt/governance, lpt/protocol | Livepeer Improvement Proposal for protocol changes |
| SPE | livepeer-specific | lpt/governance, lpt/treasury | Special Purpose Entity managing treasury operations |
| Quorum | livepeer-specific | lpt/governance | Minimum participation threshold for a valid vote |
| Timelock | web3 | lpt/governance, lpt/contracts | Delay period before an approved proposal can execute |
| Non-custodial | web3 | lpt/staking, lpt/security | Users retain control of their tokens while staking |
| Thawing Period | livepeer-specific | lpt/staking, lpt/delegation | Waiting time required before unbonded LPT is withdrawable |
| Bridge | web3 | lpt/bridging, lpt/arbitrum | Infrastructure transferring LPT between L1 and L2 chains |
| Bridging | web3 | lpt/bridging, lpt/arbitrum | Process of moving LPT tokens across blockchain layers |
| Arbitrum One | web3 | lpt/protocol, lpt/bridging | Specific Arbitrum rollup chain hosting Livepeer contracts |
| Treasury | economic | lpt/treasury, lpt/governance | On-chain fund for ecosystem grants and development |
| Treasury Allocation | economic | lpt/treasury, lpt/governance | Portion of inflationary rewards directed to the treasury |
| Community Treasury | economic | lpt/treasury, lpt/governance | Collectively managed fund for community-approved spending |
| Treasury Reward Cut Rate | economic | lpt/treasury, lpt/economics | Percentage of round rewards allocated to the treasury |
| BondingManager | livepeer-specific | lpt/contracts, lpt/staking | Smart contract managing stake bonding and delegation |
| Minter | livepeer-specific | lpt/contracts, lpt/inflation | Smart contract responsible for issuing new LPT tokens |
| RoundsManager | livepeer-specific | lpt/contracts, lpt/protocol | Smart contract tracking round progression and state |
| Governor | livepeer-specific | lpt/contracts, lpt/governance | Smart contract executing approved governance proposals |
| LivepeerGovernor | livepeer-specific | lpt/contracts, lpt/governance | OpenZeppelin-based governor contract for on-chain voting |
| BondingVotes | livepeer-specific | lpt/contracts, lpt/governance | Contract tracking historical stake for governance snapshots |
| Livepeer Foundation | livepeer-specific | lpt/governance, lpt/ecosystem | Organization overseeing ecosystem development and grants |
| Transcoding | video | lpt/protocol, lpt/economics | Converting video formats — the original work type on-network |
| AI Inference | ai | lpt/protocol, lpt/economics | Running trained AI models — newer work type on the network |
| ETH Fees | economic | lpt/economics, lpt/payments | Ethereum paid to orchestrators for completed work |
| Payment Ticket | economic | lpt/payments, lpt/protocol | Off-chain probabilistic ticket redeemable for ETH |
| Gateway | livepeer-specific | lpt/protocol, lpt/architecture | Node routing user requests to orchestrators |
| Inflationary Rewards | economic | lpt/inflation, lpt/staking | New LPT minted and distributed to active participants |
| Genesis Supply | economic | lpt/tokenomics, lpt/history | Initial LPT tokens created at protocol launch |
| Vesting | economic | lpt/tokenomics, lpt/history | Gradual release of locked tokens over a defined schedule |
| Dilution | economic | lpt/inflation, lpt/economics | Reduction in ownership percentage from new token issuance |
| Fee Switch | economic | lpt/economics, lpt/governance | Mechanism enabling or adjusting protocol fee collection |
| veLPT | economic | lpt/governance, lpt/proposals | Proposed vote-escrowed LPT for enhanced governance power |
| Quadratic Funding | economic | lpt/treasury, lpt/proposals | Matching fund distribution favoring broad community support |
| Retroactive Funding | economic | lpt/treasury, lpt/proposals | Rewarding past contributions based on demonstrated impact |
| Concentration Risk | economic | lpt/staking, lpt/security | Risk from too much stake concentrated on few orchestrators |
| Liquidity Risk | economic | lpt/staking, lpt/economics | Risk from reduced token liquidity during bonding periods |
| Operator Market | livepeer-specific | lpt/staking, lpt/economics | Competitive landscape of orchestrators offering services |
| Price Per Pixel | economic | lpt/economics, lpt/pricing | Unit cost for transcoding based on total pixels processed |
| Wei | web3 | lpt/pricing, lpt/payments | Smallest unit of ETH used in on-chain price calculations |
| Atomic Execution | web3 | lpt/governance, lpt/contracts | Multiple actions executed as a single indivisible transaction |
| Proposer Bond | economic | lpt/governance, lpt/proposals | LPT staked by a proposal author as a good-faith deposit |
| Capital Efficiency | economic | lpt/economics, lpt/staking | Maximizing returns relative to the amount of capital locked |
