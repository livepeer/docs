# 02 — Page briefs (Delegators tab)

One block per page. Every page in the tab. No subset.

**Field key:**
- `path` — production route
- `audience` — always `delegator` unless flagged
- `persona` — primary persona for this page (P1–P5 from `01-tab-brief.md`)
- `purpose` — 15-enum: `orient`, `explain`, `learn`, `choose`, `evaluate`, `start`, `build`, `configure`, `operate`, `troubleshoot`, `verify`, `integrate`, `optimise`, `reference`, `update`
- `pageType` — 7-enum: `concept`, `tutorial`, `guide`, `instruction`, `navigation`, `reference`, `resource`
- `outcome` — one sentence: what the reader can do after reading
- `arriving knowledge` — what they bring
- `arriving question` — what they want answered
- `prev / next` — neighbours in nav
- `key facts` — 3–7 bullets the page must contain
- `out of scope` — at least 2 things this page does NOT do
- `word budget` — target range
- `dependency disclosure required` — flag for pages that quote earnings, returns, or yield
- `rewards-placement note` — flag for pages affected by the open IA decision

---

## START HERE

### `v2/delegators/portal`

- **audience**: delegator
- **persona**: P1 + P5 (entry / evaluator)
- **purpose**: orient
- **pageType**: navigation
- **outcome**: After reading, the reader can identify which path matches their situation (first delegation, returning, governance, L1) and follow the right card.
- **arriving knowledge**: holds LPT or interest in LPT; does not yet know which page to open
- **arriving question**: "I have LPT — where do I go?"
- **prev**: (tab entry)
- **next**: `concepts/overview` (default route)
- **key facts**:
  - LPT gives a delegator three things: a share of inflation, a share of ETH fees from their orchestrator, and voting weight in governance.
  - Delegation runs on Arbitrum One — LPT on Ethereum mainnet must be bridged before bonding.
  - Livepeer Explorer is the primary live destination for bonding, claiming, voting.
  - Four reader paths: understand LPT, delegate, vote, follow treasury.
- **out of scope**: detailed economics; orchestrator hardware; gateway routing; Studio API.
- **word budget**: 80–200 words (cards plus one short orientation paragraph)
- **dependency disclosure required**: no (no earnings claims here)

---

## CONCEPTS

### `v2/delegators/concepts/overview`

- **audience**: delegator
- **persona**: P1 + P5
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can describe what LPT is, where it lives (Arbitrum One), and the five things the protocol uses it for.
- **arriving knowledge**: knows LPT exists; uncertain about its function
- **arriving question**: "What does LPT actually do in the protocol?"
- **prev**: `portal`
- **next**: `concepts/purpose`
- **key facts**:
  - LPT is the protocol-layer asset that secures, governs, and economically regulates the network. It runs on Arbitrum One.
  - Five functional domains: staking security, inflation-based reward distribution, delegated capital allocation, governance voting, treasury stewardship.
  - LPT is not a payment token (ETH pays for video work) and not equity in a company.
  - Bonded stake determines an orchestrator's economic weight, and a delegator earns a share of that orchestrator's rewards.
  - Verifiable supply / inflation values live on `resources/reference/protocol-parameters`.
- **out of scope**: how to delegate (downstream pages); orchestrator hardware; treasury allocations.
- **word budget**: 300–450 words
- **dependency disclosure required**: yes — any sentence that says "delegators earn" must name reward cut, orchestrator performance, and inflation as drivers

### `v2/delegators/concepts/purpose`

- **audience**: delegator
- **persona**: P1 + P5
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can name the three core functions of LPT (security collateral, reward distribution, governance) and explain how the supply, inflation, and treasury cut combine.
- **arriving knowledge**: has read overview; understands LPT exists on Arbitrum
- **arriving question**: "Why does LPT exist? What problem does it solve?"
- **prev**: `concepts/overview`
- **next**: `concepts/tokenomics`
- **key facts**:
  - Three core functions: security collateral, reward distribution, governance.
  - Genesis supply 25.8 million LPT; supply expands via dynamic inflation that adjusts around a target bonding rate of 50%.
  - As of LIP-92, 10% of round issuance flows to the treasury; the remaining 90% is shared between orchestrators and delegators.
  - Bonded LPT secures the network economically; slashing is currently disabled but the bondable token enables future economic penalty.
  - Treasury funds do not auto-distribute — spending requires governance approval.
- **out of scope**: detailed maths model (covered in `tokenomics`); contract-level mechanics (`mechanics`); how to bond (`delegation/*`).
- **word budget**: 350–500 words
- **dependency disclosure required**: yes — for any reward distribution claim

### `v2/delegators/concepts/tokenomics`

- **audience**: delegator
- **persona**: P1 + P5 with finance/research lean
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can describe the inflation issuance model, the bonding-rate feedback loop, how delegator and orchestrator rewards split, and the dilution effect on unbonded LPT.
- **arriving knowledge**: knows LPT functions; wants the quantitative model
- **arriving question**: "How is LPT issued, and what determines my share?"
- **prev**: `concepts/purpose`
- **next**: `concepts/mechanics`
- **key facts**:
  - Inflation rate adjusts each round: under-bonded → rate rises; over-bonded → rate falls. Target bonding rate is 50%.
  - Round length is approximately 21 hours of Arbitrum block time. Round timing is governance-controlled.
  - Issuance per round splits: treasury cut → orchestrator pool → delegator pool, weighted by stake and reward cut.
  - Unbonded LPT is diluted every round it stays unbonded, because new LPT flows to bonded participants.
  - Live rate values: `Minter.inflation()` on Arbiscan or the protocol-parameters reference page.
- **out of scope**: bridging steps; orchestrator selection; governance voting.
- **word budget**: 400–600 words
- **dependency disclosure required**: yes — explicit per claim
- **veracity flags**: every numeric value carries a `verify-live` source per `05-source-of-truth.md`

### `v2/delegators/concepts/mechanics`

- **audience**: delegator
- **persona**: P1 + P5 (technically-curious lean)
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can describe the on-chain state transitions: bonding, delegation attribution, unbonding, the round lifecycle, reward checkpointing, and withdrawal.
- **arriving knowledge**: understands LPT economics; wants to know what happens at the contract level
- **arriving question**: "What changes on-chain when I bond, claim, or unbond?"
- **prev**: `concepts/tokenomics`
- **next**: `delegation/overview`
- **key facts**:
  - Bonding is non-custodial: LPT moves to the BondingManager contract on Arbitrum One. The orchestrator cannot move it.
  - Each round, the BondingManager calls `reward()` for every active orchestrator and mints new LPT proportional to bonded stake.
  - Delegators receive a share filtered by the orchestrator's reward cut. Reward must be claimed via `claimEarnings()` to land in the wallet.
  - Unbonding starts the thawing period — currently 7 rounds per the on-chain `BondingManager.unbondingPeriod()`.
  - Rebonding moves stake to a new orchestrator without going through the full thawing period.
- **out of scope**: how to execute the transactions (covered in `delegate-your-lpt` and `manage-your-delegation`); reward economics maths (in `delegation-economics`).
- **word budget**: 400–600 words
- **dependency disclosure required**: not directly (mechanics, not earnings)

---

## DELEGATING LPT

### `v2/delegators/delegation/overview`

- **audience**: delegator
- **persona**: P1 (route hub for the section)
- **purpose**: orient
- **pageType**: navigation
- **outcome**: After reading, the reader can identify which delegation page applies to their situation: first-time bond, bridging, choosing an orchestrator, executing the bond, or managing.
- **arriving knowledge**: has decided to delegate or is evaluating it
- **arriving question**: "What is the path from holding LPT to having a live bonded position?"
- **prev**: `concepts/mechanics`
- **next**: `about-delegation`
- **key facts**:
  - Six steps in the canonical path: understand what bonding means → bridge if needed → understand economics → choose orchestrator → delegate → manage.
  - Path branches: L1 holders bridge first; existing delegators jump to manage.
  - Hard prerequisites: LPT on Arbitrum One; ETH on Arbitrum for gas; a connected wallet.
- **out of scope**: full economics maths; orchestrator comparison criteria; governance.
- **word budget**: 200–350 words
- **dependency disclosure required**: no
- **rewards-placement note**: this page lists the section pages — do not order them in body prose. Use a route table or card group only.

### `v2/delegators/delegation/about-delegation`

- **audience**: delegator
- **persona**: P1
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can state exactly what changes the moment they bond: control (still theirs), liquidity (locked until thawing completes), governance weight (active), reward stream (begins next round).
- **arriving knowledge**: understands LPT exists; has not yet bonded
- **arriving question**: "What am I actually committing to when I delegate?"
- **prev**: `delegation/overview`
- **next**: `delegation/bridge-lpt-to-arbitrum` (P4) or `delegation/delegation-economics` (Ordering A) or `delegation/choose-an-orchestrator` (Ordering B)
- **key facts**:
  - Bonding is non-custodial. LPT moves to the BondingManager smart contract; the orchestrator cannot withdraw or move it.
  - Liquidity is locked until unbonding completes. Current thawing period is 7 rounds (`BondingManager.unbondingPeriod()`).
  - Governance weight activates at bond time. The delegator can vote with their own stake or override their orchestrator's vote.
  - Rewards begin to accrue from the next round in which the orchestrator calls `reward()`.
  - Rebonding is available — moves stake to a different orchestrator without going through the full thawing period.
- **out of scope**: bridging steps; how to choose; transaction steps.
- **word budget**: 350–500 words
- **dependency disclosure required**: yes — any "you earn" claim must name reward cut, orchestrator reward-call consistency, and inflation rate

### `v2/delegators/delegation/bridge-lpt-to-arbitrum`

- **audience**: delegator
- **persona**: P4 (L1 Stranded — primary)
- **purpose**: start
- **pageType**: instruction
- **outcome**: After reading, the reader has moved their LPT from Ethereum mainnet to Arbitrum One and confirmed the balance is visible in their wallet on Arbitrum.
- **arriving knowledge**: holds LPT on Ethereum mainnet; cannot bond from L1
- **arriving question**: "How do I move my LPT to Arbitrum so I can delegate?"
- **prev**: `delegation/about-delegation` or `delegation/overview`
- **next**: `delegation/delegation-economics` (Ordering A) or `delegation/choose-an-orchestrator` (Ordering B)
- **key facts**:
  - Two routes: the Arbitrum Bridge UI at `https://bridge.arbitrum.io` for any LPT, and the Livepeer Migration Tool at `https://explorer.livepeer.org/migrate` if the LPT was previously bonded on L1.
  - L1 LPT contract address and L2 LPT gateway address are listed on the contracts page — copyable values acceptable here as on-chain interaction data.
  - Both ETH for gas on L1 and ETH for gas on Arbitrum are required before starting.
  - Bridging from L1 to L2 takes ~10 minutes for the deposit transaction; withdrawal back to L1 takes ~7 days due to the Arbitrum challenge period.
  - Once bridged, the wallet must be switched to the Arbitrum One network to see the balance.
- **out of scope**: orchestrator selection; bonding transaction; governance.
- **word budget**: 500–700 words
- **dependency disclosure required**: no
- **interface exception**: contract addresses and bridge URL paths are acceptable copyable on-chain values

### `v2/delegators/delegation/delegation-economics`

- **audience**: delegator
- **persona**: P1 + P5 (decision support); P2 returning
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can describe how each round's issuance flows to them, name reward cut and fee share, run a worked example, and identify the dependencies that change actual yield.
- **arriving knowledge**: knows what bonding means; wants the numbers and the dependencies
- **arriving question**: "What determines what I actually earn?"
- **prev**: `delegation/about-delegation` (Ordering A) or `delegation/delegate-your-lpt` (Ordering B)
- **next**: `delegation/choose-an-orchestrator` (Ordering A) or `delegation/manage-your-delegation` (Ordering B)
- **key facts**:
  - Two reward streams: inflationary LPT (always on while the orchestrator calls reward) and ETH fees (only when the orchestrator earns gateway work).
  - Reward cut: orchestrator's share of inflationary LPT. Lower is better for delegators. Range 0–100%.
  - Fee share: percentage of ETH fees passed through to delegators (logically equivalent to "1 minus fee cut" depending on which framing the source uses — define on first use, use one term consistently per page).
  - Worked example: 900 LPT round issuance to delegator/orchestrator pool, orchestrator at 5% of total bonded stake, reward cut 10%, delegator holds 10% of that orchestrator's bonded stake → delegator round reward 4.05 LPT.
  - Treasury cut: 10% of round issuance routes to the treasury under LIP-92 (verify live via `BondingManager.treasuryRewardCutRate()`).
  - Dependencies that change yield: orchestrator reward-call consistency, reward cut changes, fee share changes, total bonded stake (yours and the network's), inflation adjustment, ETH fee volume earned by the orchestrator.
- **out of scope**: how to execute transactions; orchestrator hardware; governance.
- **word budget**: 500–800 words
- **dependency disclosure required**: yes — every yield, reward, or earnings claim names the dependency in the same sentence
- **rewards-placement note**: this page must read fluently in either Ordering A or Ordering B. Do not write "now that you have chosen an orchestrator" or "before you choose an orchestrator" in body prose. Link forward and backward neutrally.

### `v2/delegators/delegation/choose-an-orchestrator`

- **audience**: delegator
- **persona**: P1
- **purpose**: choose
- **pageType**: guide
- **outcome**: After reading, the reader has selected a specific orchestrator using a defensible criteria set: reward call consistency, reward cut, fee share, total stake, active set position, and recent parameter stability.
- **arriving knowledge**: has LPT on Arbitrum; understands rewards depend on the orchestrator
- **arriving question**: "How do I pick an orchestrator I can justify?"
- **prev**: `delegation/delegation-economics` (Ordering A) or `delegation/bridge-lpt-to-arbitrum` (Ordering B)
- **next**: `delegation/delegate-your-lpt`
- **key facts**:
  - Primary signals on Livepeer Explorer: reward call ratio (last 30 / 90 rounds), reward cut, fee share, total stake, active-set rank.
  - Reward call ratio is the single biggest driver of inflationary yield — an orchestrator that stops calling `reward()` zeroes out delegator inflation rewards for that round.
  - Reward cut and fee share can be changed by the orchestrator at any time. Recent stability (no recent step-up changes) is a positive signal.
  - Active set membership matters: only active orchestrators receive new work and can call reward. Bonding to an inactive orchestrator earns nothing until they re-enter.
  - Diversification is a personal choice — the protocol does not require a single orchestrator. Splitting stake means more decision overhead and more claim transactions.
- **out of scope**: orchestrator hardware (cross-link to Orchestrators tab); governance criteria for orchestrators; the actual bond transaction.
- **word budget**: 500–800 words
- **dependency disclosure required**: yes — every comparison criterion names what it changes in the reader's outcome
- **rewards-placement note**: do not assume the reader has read `delegation-economics`. Define reward cut, fee share, and reward call inline on first use, then use freely.

### `v2/delegators/delegation/delegate-your-lpt`

- **audience**: delegator
- **persona**: P1
- **purpose**: start
- **pageType**: instruction
- **outcome**: After reading, the reader has executed the bond transaction in the Livepeer Explorer and confirmed their delegated position is live.
- **arriving knowledge**: has LPT on Arbitrum, ETH for gas, an orchestrator chosen, a connected wallet
- **arriving question**: "How do I actually delegate?"
- **prev**: `delegation/choose-an-orchestrator`
- **next**: `delegation/manage-your-delegation` (or `delegation-economics` in Ordering B)
- **key facts**:
  - The interface is Livepeer Explorer at `https://explorer.livepeer.org`. No CLI required.
  - Two transactions on first bond: token approval, then bond. Both are signed in the wallet.
  - Confirmation is immediate on Arbitrum — typically a few seconds. The position appears in the connected account view.
  - Verify the position by checking the orchestrator profile and the connected account dashboard.
  - Gas cost: a few cents in ETH on Arbitrum per transaction.
- **out of scope**: orchestrator comparison; governance; reward maths.
- **word budget**: 400–600 words
- **dependency disclosure required**: not directly (transaction steps); but any "you'll earn" callout names dependencies
- **interface exception**: the page can show step labels and screenshots; no shell commands

### `v2/delegators/delegation/manage-your-delegation`

- **audience**: delegator
- **persona**: P2 (Reallocator)
- **purpose**: operate
- **pageType**: guide
- **outcome**: After reading, the reader can claim earnings, rebond to a different orchestrator, top up stake, or initiate unbonding — and they know the cost and timeline of each action.
- **arriving knowledge**: has a live bonded position; has a reason to act
- **arriving question**: "How do I claim, rebond, or exit?"
- **prev**: `delegation/delegate-your-lpt`
- **next**: `guides/governance/overview`
- **key facts**:
  - Claim earnings: `claimEarnings()` collects accumulated LPT and ETH to the wallet. Required if the delegator has gone many rounds without bonding activity.
  - Rebond: moves stake from one orchestrator to another. Does not require a full unbonding cycle. Rewards continue accruing through the move.
  - Top up: bonds additional LPT to the same orchestrator. Counts toward the same delegated position.
  - Initiate unbonding: starts the thawing period (7 rounds at last verification). Stake is illiquid until withdrawal completes.
  - Withdraw: after the thawing period closes, withdraws principal and any unclaimed rewards to the wallet.
- **out of scope**: orchestrator hardware; governance voting; treasury.
- **word budget**: 500–700 words
- **dependency disclosure required**: no, unless the page quotes yield outcomes; if it does, name the dependency

---

## GUIDES — LIVEPEER GOVERNANCE

### `v2/delegators/guides/governance/overview`

- **audience**: delegator
- **persona**: P3 (Treasury-and-Vote Participant)
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can name what governance can change, where proposals live, and how their bonded stake maps to vote weight.
- **arriving knowledge**: bonded LPT or considering bonding for governance; familiar with DAO governance from elsewhere
- **arriving question**: "What is at stake in a Livepeer governance vote, and how do I participate?"
- **prev**: `delegation/manage-your-delegation`
- **next**: `guides/governance/model`
- **key facts**:
  - Governance scope: protocol parameters (inflation, target bonding rate, treasury cut), contract upgrades, treasury allocations, role-controlled actions.
  - Voting power tracks bonded stake on a per-round snapshot. Vote weight = bonded stake at the snapshot block.
  - Vote detachment lets a delegator override their orchestrator's vote on the delegator's portion of stake. This is Livepeer-specific — define on first use.
  - Hybrid model: off-chain LIP discussion + on-chain binding vote via the LivepeerGovernor contract.
  - Quorum 33.33%, approval threshold simple majority (>50%), per current `LivepeerGovernor` parameters.
- **out of scope**: how to execute the vote transaction (in `processes`); treasury detail; orchestrator-side voting.
- **word budget**: 400–600 words
- **dependency disclosure required**: no (governance, not earnings)

### `v2/delegators/guides/governance/model`

- **audience**: delegator
- **persona**: P3 (research-leaning)
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can describe the formal governance decision model: quorum, threshold, timelock, proposer bond, and the security implications of each.
- **arriving knowledge**: understands governance scope; wants the formal mechanics
- **arriving question**: "What rules govern proposal acceptance and execution?"
- **prev**: `guides/governance/overview`
- **next**: `guides/governance/processes`
- **key facts**:
  - Quorum: 33.33% of bonded voting power must vote (for or against) for the proposal to be valid.
  - Approval threshold: simple majority of votes cast.
  - Timelock: minimum delay between vote success and execution. Current value `0` per `Treasury.getMinDelay()` — verify live before quoting.
  - Proposer bond: LPT a proposer must hold to submit a proposal. Currently 100 LPT bonded threshold — verify against `LivepeerGovernor.proposalThreshold()` before quoting.
  - Security risks named: stake concentration, voter apathy, executor centralisation. Each is a known design tradeoff.
- **out of scope**: how to vote step-by-step (in `processes`); treasury operations; off-chain discussion mechanics.
- **word budget**: 450–700 words
- **dependency disclosure required**: no
- **veracity flags**: every numeric threshold carries `verify-live` source

### `v2/delegators/guides/governance/processes`

- **audience**: delegator
- **persona**: P3
- **purpose**: operate
- **pageType**: guide
- **outcome**: After reading, the reader can find an open proposal, cast a vote, override an orchestrator's vote on their portion of stake, and check the execution result.
- **arriving knowledge**: bonded LPT; wants to act on a proposal
- **arriving question**: "How do I cast a vote, and how do I override my orchestrator?"
- **prev**: `guides/governance/model`
- **next**: `guides/treasury/overview`
- **key facts**:
  - Off-chain stage: proposals discussed on the Livepeer governance forum and as Livepeer Improvement Proposals (LIPs) in the LIPs GitHub repo. Sentiment can be checked via Snapshot signal votes.
  - On-chain stage: proposal submitted via `LivepeerGovernor` contract. Voting delay 1 round, voting period 10 rounds — verify live.
  - Voting interface: Livepeer Explorer voting view at `https://explorer.livepeer.org/voting`. No CLI.
  - Vote detachment: a delegator votes through the Explorer with their own bonded stake — this overrides any vote their orchestrator cast on that portion.
  - Execution: after success and timelock, anyone can call execute. The proposal action runs on-chain.
- **out of scope**: how to draft a LIP from scratch; treasury proposal payload structure (in `treasury/proposals`).
- **word budget**: 500–800 words
- **dependency disclosure required**: no

---

## GUIDES — LIVEPEER TREASURY

### `v2/delegators/guides/treasury/overview`

- **audience**: delegator
- **persona**: P3
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can describe what the treasury is, how it is funded, who controls spending, and how delegators participate.
- **arriving knowledge**: understands governance basics
- **arriving question**: "What is the treasury, and how does it spend?"
- **prev**: `guides/governance/processes`
- **next**: `guides/treasury/proposals`
- **key facts**:
  - Funding: 10% of each round's inflationary issuance routes to the treasury (LIP-92, verify live via `BondingManager.treasuryRewardCutRate()`).
  - Control: governance-approved spending only. The treasury is on-chain and not a company budget.
  - Stewardship: the Livepeer Foundation operates as steward; allocations are still gated by governance vote.
  - Special-purpose entities (SPEs): scoped projects funded by approved allocations, with milestone reporting back to governance.
  - Live state: balances and historical allocations are visible at `https://explorer.livepeer.org/treasury`.
- **out of scope**: proposal payload structure (in `proposals`); allocation taxonomy detail (in `allocations`); voting mechanics (in `governance/processes`).
- **word budget**: 400–600 words
- **dependency disclosure required**: yes — note that treasury cut directly reduces the delegator/orchestrator pool

### `v2/delegators/guides/treasury/proposals`

- **audience**: delegator
- **persona**: P3
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can describe what a treasury proposal looks like on-chain, how it gets authorised, and how it executes.
- **arriving knowledge**: knows treasury exists; wants to understand proposal mechanics
- **arriving question**: "What is a treasury proposal, and what happens when one passes?"
- **prev**: `guides/treasury/overview`
- **next**: `guides/treasury/allocations`
- **key facts**:
  - Treasury proposals are governance-authorised on-chain transactions: a payload, a target contract, and a value to transfer.
  - Authorisation flow: proposal submitted → quorum + threshold reached → timelock queue → executable.
  - Failure modes named: calldata error, insufficient treasury balance, target contract revert, asset transfer semantics, timelock misconfiguration.
  - Submission requires the proposer to meet the proposal threshold (currently 100 LPT bonded — verify live).
  - Live proposals visible at `https://explorer.livepeer.org/voting`; treasury balance at `https://explorer.livepeer.org/treasury`.
- **out of scope**: how to draft proposal calldata in code; voting mechanics; allocation taxonomy.
- **word budget**: 450–700 words
- **dependency disclosure required**: no

### `v2/delegators/guides/treasury/allocations`

- **audience**: delegator
- **persona**: P3
- **purpose**: explain
- **pageType**: concept
- **outcome**: After reading, the reader can describe how allocations are evaluated, the categories of spending, and the failure modes that can prevent a successful allocation.
- **arriving knowledge**: knows treasury and proposals exist
- **arriving question**: "How are spending decisions made and audited?"
- **prev**: `guides/treasury/proposals`
- **next**: `resources/glossary`
- **key facts**:
  - Allocation categories: ecosystem development, R&D, infrastructure, community programmes, strategic.
  - Evaluation framework: impact, feasibility, risk, alignment with protocol direction.
  - Failure modes: protocol-level (transaction failure), governance-level (decision quality), outcome-level (delivery failure).
  - On-chain verification: every allocation is a traceable transaction. Off-chain outcome verification is non-deterministic.
  - SPEs report milestones back to governance — public and on-chain where possible.
- **out of scope**: proposal mechanics (in `proposals`); voting mechanics (in `governance/processes`).
- **word budget**: 450–700 words
- **dependency disclosure required**: no

---

## RESOURCES

### `v2/delegators/resources/glossary`

- **audience**: delegator (canonical glossary may also serve `everyone`)
- **persona**: any (reference)
- **purpose**: reference
- **pageType**: reference
- **outcome**: After reading any entry, the reader has a precise, scoped definition of one term and a link to where the term is used in context.
- **arriving knowledge**: encountered an unfamiliar term; wants the definition
- **arriving question**: "What does X mean exactly in Livepeer?"
- **prev**: (entered from any page)
- **next**: (returns to source page)
- **key facts**:
  - Each entry: term (bold), one-sentence definition, where it appears (link), aliases or deprecated synonyms if any.
  - Group order matches reader's mental model: protocol terms → roles → tokenomics → reward terms → treasury → governance → bridging → infrastructure.
  - All terminology-locked terms from `audience-design.md` appear here exactly once with a single canonical definition.
- **out of scope**: tutorial-style explanation; how-to content.
- **word budget**: 200–500 words for the wrapper + entries (the glossary itself is data-driven and rendered from a list)

### `v2/delegators/resources/reference/protocol-parameters`

- **audience**: delegator
- **persona**: any (technical reference)
- **purpose**: reference
- **pageType**: reference
- **outcome**: After reading, the reader has a current value and a verifiable on-chain source for every governance-controlled parameter that affects delegator outcomes.
- **arriving knowledge**: needs a specific number
- **arriving question**: "What is the current value of X, and where can I check?"
- **prev**: (entered from any page)
- **next**: `resources/reference/contracts`
- **key facts**:
  - Parameters covered: unbonding period, treasury reward cut, target bonding rate, inflation adjustment step, current inflation rate, proposal threshold, quorum, voting delay, voting period, timelock minimum delay.
  - Every value cites its source contract method (e.g. `BondingManager.unbondingPeriod()`) and links to the Arbiscan view.
  - The page is dated with `lastVerified` so a reader knows how stale a value may be.
  - Active set size is currently described publicly as 100 — re-check `numActiveTranscoders()` for live operational use.
- **out of scope**: explanation of why a parameter matters in detail (cross-link to the relevant concept page).
- **word budget**: 200–500 words plus the parameter table

### `v2/delegators/resources/reference/contracts`

- **audience**: delegator
- **persona**: any (technical reference)
- **purpose**: reference
- **pageType**: reference
- **outcome**: After reading, the reader has the canonical address for every Livepeer protocol contract that affects delegators, on Arbitrum One and Ethereum mainnet, with a one-line statement of why it matters.
- **arriving knowledge**: needs an address to verify or to interact with
- **arriving question**: "What is the address of the BondingManager / Minter / Governor / token / bridge?"
- **prev**: `resources/reference/protocol-parameters`
- **next**: `resources/compendium/exchanges`
- **key facts**:
  - Arbitrum One contracts named: BondingManager, Minter, RoundsManager, BondingVotes, LivepeerGovernor, L2LPTGateway, LivepeerToken.
  - Ethereum mainnet contracts named: L1Escrow, LivepeerToken (L1).
  - Each row: contract name → address → why it matters to a delegator.
  - All addresses sourced from the repo's contract-address dataset; copyable inline values.
- **out of scope**: how to interact with the contract directly (delegators use Explorer, not raw contract calls).
- **word budget**: 150–350 words plus the contract table
- **interface exception**: contract addresses are copyable on-chain values — code-formatted addresses are acceptable here

### `v2/delegators/resources/compendium/exchanges`

- **audience**: delegator
- **persona**: any
- **purpose**: reference
- **pageType**: resource
- **outcome**: After reading, the reader knows where LPT is listed for purchase and where to find the live, automation-fed list.
- **arriving knowledge**: wants to acquire LPT or find a venue
- **arriving question**: "Where can I buy LPT?"
- **prev**: `resources/reference/contracts`
- **next**: `resources/compendium/lpt-eth-usage`
- **key facts**:
  - Centralised exchanges and decentralised exchanges both list LPT — exact venue list is fed from an automation pipeline (CoinGecko weekly).
  - Contract addresses on each chain are listed once on this page so the reader can verify any DEX listing.
  - The list is dynamic; the date stamp on the page reflects when it was last refreshed.
- **out of scope**: trading advice; how to use a specific exchange; bridging.
- **word budget**: 200–400 words plus the data tables (data renders from the pipeline)

### `v2/delegators/resources/compendium/lpt-eth-usage`

- **audience**: delegator
- **persona**: any
- **purpose**: reference
- **pageType**: reference
- **outcome**: After reading, the reader can describe which token (LPT or ETH) is used for which protocol action and why.
- **arriving knowledge**: confused by the two-token model
- **arriving question**: "What is LPT used for and what is ETH used for in Livepeer?"
- **prev**: `resources/compendium/exchanges`
- **next**: `resources/knowledge-hub/delegator-videos-and-blogs`
- **key facts**:
  - LPT: staking, governance, inflationary rewards.
  - ETH (on Arbitrum): gas for all protocol transactions; payments from gateways to orchestrators for video and AI work; ETH fee share to delegators.
  - Why two tokens: LPT secures and coordinates; ETH is the unit of demand-side payment.
  - Bridging: LPT must be on Arbitrum to stake; ETH on Arbitrum is needed for any transaction.
- **out of scope**: trading; pricing; specific exchanges.
- **word budget**: 250–400 words

### `v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs`

- **audience**: delegator
- **persona**: P5 (evaluator) and P1 starting out
- **purpose**: reference
- **pageType**: resource
- **outcome**: After reading, the reader has at least one external tutorial source (video or blog) that explains delegation in a non-protocol register.
- **arriving knowledge**: wants a third-party perspective or a different format
- **arriving question**: "Where else can I learn about delegation outside the docs?"
- **prev**: `resources/compendium/lpt-eth-usage`
- **next**: (return to portal or section)
- **key facts**:
  - Curated list — videos and written guides from third parties.
  - Official Livepeer destinations: Explorer, governance forum, LIPs repo.
  - Each entry: title, source, format (video/blog), one-line summary of what it covers.
  - Curation is reviewed periodically; mark stale entries.
- **out of scope**: deep technical tutorials; orchestrator content; gateway content.
- **word budget**: 200–400 words plus entries
