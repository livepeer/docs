# Delegators / LP Token — Source Registry

**Purpose**: All sources identified across GitHub, Notion, web, and existing docs relevant to the Delegators tab.
**Generated**: 2026-04-06
**Convention**: Tiers follow veracity-sources.md — primary / acceptable / lead / not-permitted

---

## GitHub — livepeer/docs (docs-v2 branch)

| Path | What it contains | Size | Status | Tier |
|---|---|---|---|---|
| `v2/lpt/token-portal.mdx` | Tab portal / landing page | 4.3KB | Published — not per canonical portal spec | primary (existing content) |
| `v2/lpt/index.mdx` | Section index | 1.9KB | Published | primary |
| `v2/lpt/about/overview.mdx` | LPT overview — what LPT is and its role | 5.3KB | Published ✅ | primary |
| `v2/lpt/about/mechanics.mdx` | Protocol mechanics — bonding, rounds, rewards | 5KB | Published ✅ | primary |
| `v2/lpt/about/purpose.mdx` | Why LPT exists — network purpose | 9.7KB | Published ✅ | primary |
| `v2/lpt/about/tokenomics.mdx` | Supply, inflation, token distribution | 5.7KB | Published ⚠️ needs LIP-107/100 review | primary |
| `v2/lpt/delegation/overview.mdx` | Section landing for Delegating LPT | 6.4KB | Published | primary |
| `v2/lpt/delegation/about-delegators.mdx` | Formal definitions, rights, risk list | 7.7KB | Published — LaTeX-heavy, poor UX | primary |
| `v2/lpt/delegation/delegation-economics.mdx` | Economics page | 736B | 🔴 STUB — single Warning component | primary |
| `v2/lpt/delegation/delegation-guide.mdx` | Contract-level tx mechanics (approve, bond, unbond, withdraw) | 6.3KB | Published — written for contract integrators, not users | primary |
| `v2/lpt/delegation/getting-started.mdx` | Best existing page — Explorer steps, risk factors | 9.2KB | Published ⚠️ feeShare accuracy issue, needs Arbitrum prereq | primary |
| `v2/lpt/delegation/TO-ADD/choose-a-delegate.mdx` | BEST CONTENT — full orchestrator evaluation + delegation transaction guide | 16.6KB | 🟡 NOT PUBLISHED — ready for promotion | primary |
| `v2/lpt/delegation/TO-ADD/delegation-management.mdx` | Claim, compound, redelegate, unbond/withdraw, governance | 12KB | 🟡 NOT PUBLISHED — ready for promotion | primary |
| `v2/lpt/delegation/TO-ADD/delegation-rewards.mdx` | Reward accumulation mechanics and worked examples | 9.8KB | 🟡 NOT PUBLISHED — ready for promotion | primary |
| `v2/lpt/delegation/TO-ADD/overview.mdx` | Rewritten delegation section landing | 6.3KB | 🟡 NOT PUBLISHED — ready for promotion | primary |
| `v2/lpt/delegation/TO-ADD/section-analysis.md` | Prior gap analysis — 5-phase journey map, file verdicts, proposed structure | 11.5KB | Internal — March 2026 | primary (process) |
| `v2/lpt/delegation/TO-ADD/sources.md` | Prior sources log from March 2026 rewrite session | 11KB | Internal | primary (process) |
| `v2/lpt/governance/overview.mdx` | Governance system overview | 6.4KB | Published ✅ — scope overlap with About | primary |
| `v2/lpt/governance/model.mdx` | Governance model detail | 7.2KB | Published ✅ — scope overlap with About | primary |
| `v2/lpt/governance/processes.mdx` | How to vote, submit proposals | 8.9KB | Published ✅ | primary |
| `v2/lpt/treasury/overview.mdx` | Treasury overview | 4.9KB | Published ✅ | primary |
| `v2/lpt/treasury/allocations.mdx` | Treasury allocations | 6.1KB | Published ⚠️ likely stale | primary |
| `v2/lpt/treasury/proposals.mdx` | How to submit proposals | 6.5KB | Published ✅ | primary |
| `v2/lpt/resources/exchanges.mdx` | LPT exchange listings | 56.6KB | Published ✅ — large | primary |
| `v2/lpt/resources/lpt-eth-usage.mdx` | LPT and ETH usage flows | 1.9KB | Published ✅ | primary |
| `v2/lpt/resources/delegator-videos-and-blogs.mdx` | Community knowledge hub | 3.9KB | Published ⚠️ needs recency audit | acceptable |
| `v2/lpt/todo.txt` | Internal task notes | 1.7KB | Internal | lead |

**Missing from repo entirely:**
- Undelegation/exit flow page — `MISSING`
- Tutorial page — `MISSING`
- Fiat onramp / LISAR entry path — `MISSING`
- Technical References section — `MISSING` (flagged as gap in Agreed IA)
- Yield calculator — `MISSING`
- Orchestrator evaluation quick-reference — exists in TO-ADD but not surfaced as standalone

---

## GitHub — livepeer/docs (docs-v2-dev branch)

| Path | Notes | Tier |
|---|---|---|
| Not separately enumerated | docs-v2-dev branch appears to mirror docs-v2 for the lpt/ path — no additional delegator content found | primary |

---

## GitHub — livepeer/protocol

| What | URL / ref | Freshness | Tier |
|---|---|---|---|
| BondingManager.sol — bond(), unbond(), rebond(), withdrawStake(), claimEarnings(), pendingStake(), pendingFees() | `github.com/livepeer/protocol` — `confluence` branch is deployed version | High | primary |
| BondingVotes.sol — ERC-5805 checkpoint standard, governance voting power calculation | Same repo | High | primary |
| LivepeerGovernor.sol — on-chain governance contract | Same repo | High | primary |
| Minter.sol — inflation minting per round | Same repo | High | primary |
| RoundsManager.sol — round tracking, ~5760 blocks/round | Same repo | High | primary |
| `numActiveTranscoders` governance parameter (active set size — verify before hardcoding "100") | BondingManager | Verify live | primary |
| `unbondingPeriod` governance parameter (thawing period — historically 7 rounds, ~7 days) | BondingManager | Verify live | primary |

---

## GitHub — livepeer/LIPs

| LIP | What it changed | Relevance | Tier |
|---|---|---|---|
| LIP-89 | Introduced on-chain governance, LivepeerGovernor, stake-weighted voting, vote detachment | Critical — governs the governance section | primary |
| LIP-91 | Introduced Community Treasury | Critical — governs the treasury section | primary |
| LIP-92 | Treasury Reward Cut Rate — portion of inflation diverted to treasury | Critical — affects delegator yield; rate is `[verify-live]` | primary |
| LIP-107 | Protocol upgrade — affects tokenomics.mdx | Verify coverage | primary |
| LIP-100 | Protocol upgrade — affects tokenomics.mdx | Verify coverage | primary |

---

## GitHub — livepeer/explorer

| What | URL | Tier |
|---|---|---|
| Explorer PR #613 — warning for claim-before-reward() edge case (in progress as of April 2026) | `github.com/livepeer/explorer/pull/613` | primary |
| ROI formula — `lib/roi.ts` | `github.com/livepeer/explorer` | primary |
| Explorer live site | `https://explorer.livepeer.org` | primary |
| L2 Migration Tool | `https://explorer.livepeer.org/migrate` | primary |

---

## GitHub — livepeer/arbitrum-lpt-bridge

| What | Tier |
|---|---|
| L2LPTGateway contract — canonical LPT bridge | primary |
| L1 Escrow contract — L1 side of bridge | primary |
| Arbitrum bridge reference | `https://bridge.arbitrum.io` | primary |

---

## Livepeer Explorer (live on-chain)

| What it verifies | URL | Tier |
|---|---|---|
| Active set membership, stake rankings, orchestrator profiles | `https://explorer.livepeer.org` | primary |
| Governance proposals and voting | `https://explorer.livepeer.org/treasury` or governance section | primary |
| Delegator account positions, pending rewards | Connected wallet view | primary |
| Reward call history per orchestrator | Orchestrator profile pages | primary |
| Current inflation rate, bonding rate | Protocol stats section | primary |

---

## Livepeer Whitepaper

| What | URL | Freshness | Tier |
|---|---|---|---|
| Protocol architecture, segment model, bonding mechanics, job lifecycle | `github.com/livepeer/wiki/blob/master/WHITEPAPER.md` | Low staleness for concepts; high for specific params | primary |

---

## Notion Workspace (accessed via Notion MCP — April 2026)

| Page | What it contains | Freshness | Tier |
|---|---|---|---|
| **Livepeer Protocol Reward Calculation** (`2bf66022-2d08-81e5-9a99-e076c4a3c3ee`) | Full cumulative reward factor explanation, claimEarnings() mechanics, pendingStake(), pendingFees(), worked examples. Critical content for delegation-economics page. | Dec 2025 | primary (pre-GitHub) |
| **Livepeer Rewards Accumulation Mechanism** (`2bf66022-2d08-81bb-837e-e56104f67496`) | Deeper explanation of accumulation, bonding/unbonding accounting, minter interaction | Dec 2025 | primary (pre-GitHub) |
| **🔍 Delegator Earnings Claim Timing Edge Case** (`9497ab56-2b62-47b7-b25a-b2c9208ea580`) | CRITICAL: If delegator claims before orchestrator calls reward() in a round, they forfeit that round's rewards. lastClaimRound set to current round. Explorer PR #613 adds warning (not yet deployed). Rick/Foundation Engineering confirmed. | April 2026 | primary |
| **Suggestion — Delegator Analytics Dashboard Integration** (`65cacb0e-b879-4a04-8b3d-11d80f353d73`) | Proposal to integrate better delegator analytics; references PR #217 to subgraph for cumulative pending stake views | March 2026 | acceptable |
| **Suggestion — Delegator Protection Against Reward Cut Rug Pulls** (`22b92e61-7f1c-4d51-946e-b4c3eface125`) | Feature suggestion: commission cut history visibility, protocol-level delay for cuts. Documents real delegator risk — orchestrators can raise cuts with no notice. | March 2026 | acceptable |
| **Delegation** (marketing content, `31366022-2d08-80db-aad1-ef7121416ddf`) | Social thread — good framing of why Livepeer delegation ≠ generic staking: "your stake helps determine how work gets distributed." Stats: 14.2M LPT staked, $838.9k in fees paid, 3,492 delegators. | Feb 2026 | acceptable |
| **Activate Token & Delegation Projects** (`32566022-2d08-81bc-8451-ed757bbb0cb4`) | Foundation delegation power strategy, quality participation incentives | March 2026 | lead |
| **Reward Delegation Specification** (`2bf66022-2d08-81ff-8ea2-e184beba9c0c`) | Spec for reward delegation feature — context for future governance section | Jan 2026 | primary (pre-GitHub) |
| **📐 Agreed IA** (`31e660222d0881aeb656d8c27a9753d5`) | Tab structure decisions March 2026. LP Token confirmed sections: Hub · Delegating LPT · Governance & Treasury · Guides & Resources · Technical References. Technical References currently missing. | March 2026 | primary |
| **Delegating channel Discord signals** (`32866022-2d08-80e4-a0a4-d647ae1402db`) | Discord extracts March 2026 — delegator questions, confusion points | March 2026 | acceptable |

**LISAR SPE note**: Searched Notion for "LISAR SPE fiat onramp delegation" — no matching page found. The LISAR SPE referenced in index.md may predate current Notion workspace contents, may be under a different name, or may not have been documented in Notion. No fiat onramp content found in the repo either. This persona and path are currently **undocumented everywhere** — content must be created from scratch.

---

## Livepeer Forum (forum.livepeer.org)

| Thread | URL | Relevance | Tier |
|---|---|---|---|
| An Overview of Bonding | `/t/an-overview-of-bonding/97` | Foundational bonding explanation — useful for delegation-economics | acceptable |
| Inflation-focused LIP discussion | `/t/inflation-focused-lip-discussion-thread/2753` | Inflation model debate and history | acceptable |
| Treasury strategy thread | `/t/its-time-to-act-accumulation-the-treasury-ceiling/3153` | Treasury context for governance section | acceptable |
| Pricing per pixel guide | `/t/a-guide-for-determining-price-per-pixel/2197` | Orchestrator economics — delegator evaluation context | acceptable |

---

## Official Documentation (current live docs.livepeer.org)

| What | URL | Tier |
|---|---|---|
| Current live delegators section | `https://docs.livepeer.org/delegators/` | lead |
| Delegator yield guide | `https://docs.livepeer.org/delegators/guides/yield-calculation` | acceptable (verify values) |
| Bridge LPT guide | `https://docs.livepeer.org/delegators/guides/bridge-lpt` | acceptable |

---

## Arbiscan

| What | URL | Tier |
|---|---|---|
| Livepeer contract addresses on Arbitrum | `https://arbiscan.io/accounts/label/livepeer` | primary |
| BondingManager deployed contract | Via Arbiscan — cross-reference with governor-scripts | primary |

---

## Secondary / Community Sources

| Source | What it covers | Freshness | Tier |
|---|---|---|---|
| Livepeer Foundation blog (`blog.livepeer.org`) | Delegation program announcements, ecosystem context | Variable | acceptable |
| Livepeer Discord `#delegating` | Real delegator questions, confusion points, edge cases. Earnings claim timing issue surfaced here. | Ongoing | acceptable |
| Livepeer Discord `#orchestrators` | Orchestrator community — reward call status, commission changes, community SPEs | Ongoing | acceptable |
| Livepeer YouTube | Delegation walkthroughs — outdated but source material for tutorial video brief | Variable | acceptable |
| Livepeer Whitepaper tokenomics section | Genesis supply (10M LPT), inflation model conceptual basis | Low staleness for concepts | primary |
| `governor-scripts/updates/addresses.js` | Canonical contract addresses — cross-reference against Arbiscan | High | primary |
| Shtuka Research `livepeer-data-geography` | Orchestrator geography, stake distribution | Check last-updated | primary |
| Dune Analytics | Livepeer community dashboards — stake distribution, delegator trends | Variable | acceptable |
| Messari Livepeer profile | Tokenomics analysis, market data | Dated | acceptable |

---

## Live Data Points Requiring Verification Before Publishing

All of these are governance-controlled or change with network state. **Never hard-code without a live check.**

| Claim | Where to verify | Priority |
|---|---|---|
| Active set size (currently referenced as 100) | Explorer / BondingManager `numActiveTranscoders` | 🔴 Critical |
| Unbonding period duration (7 rounds / ~7 days) | BondingManager `unbondingPeriod` | 🔴 Critical |
| Treasury Reward Cut Rate (referenced as 10%) | LIP-92 + Explorer treasury | 🔴 Critical |
| Inflation Adjustment alpha (0.00005% per round) | LIPs / veracity-sources | 🟡 High |
| Target Bonding Rate (50%) | LIPs / veracity-sources | 🟡 High |
| Current inflation rate | Explorer protocol stats | 🟡 High |
| Rounds per year (~5,760 blocks/round → ~417 rounds/year) | verify against current Arbitrum block timing | 🟡 High |
| Proposer Bond minimum (referenced as 100 LPT) | LivepeerGovernor contract / Arbiscan | 🟡 High |
| Gas cost estimates on Arbitrum | Arbiscan / current gas prices | 🟢 Low |
| Explorer PR #613 status (claim warning deployed?) | `github.com/livepeer/explorer` | 🟡 High |
| feeShare / Fee Cut UI label in current Explorer | Explorer live UI | 🔴 Critical |

---

## Sources NOT Found / Gaps

| What was searched | Result |
|---|---|
| LISAR SPE / fiat onramp documentation | Not found in Notion, GitHub, or web. Must be created. |
| Yield calculator tool | No existing tool found in repo. Referenced in veracity-sources as `docs.livepeer.org/delegators/guides/yield-calculation` — check if live. |
| Video tutorial for delegation flow | Video embed placeholder in choose-a-delegate.mdx — no actual video ID. Needs recording. |
| veLPT documentation | Correctly excluded — proposal not implemented |
| Delegator-specific analytics dashboard | Referenced in Notion suggestion — not built yet |
