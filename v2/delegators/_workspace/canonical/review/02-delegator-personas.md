**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## Personas: Who this tab actually serves

### Primary persona: The LPT Holder

**Definition:** Someone who holds LPT — or is seriously considering acquiring it — and wants to make it work. Primary intent is **economic participation**: earn staking rewards by delegating to an orchestrator. May also want to vote, but that is secondary to earn-first motivation.

**Two distinct sub-types:**

#### Sub-type A: The Yield-Seeking Delegator

**Profile:**
- Has LPT (or ETH to swap for LPT)
- Wants to stake and earn rewards
- Moderate crypto literacy — comfortable with wallets, bridging, Arbitrum
- Does not want to run a node
- Time horizon: 3-24 months (medium-term allocation)
- Risk tolerance: moderate (willing to accept orchestrator-selection risk, unbonding period lock-up)

**Arrival patterns:**
- Search queries: "LPT staking", "how to stake LPT", "LPT yield farming"
- Referral: Messari, CoinGecko staking tabs, crypto yield aggregators
- Direct: Home page CTA, About tab

**Questions in sequence:**
1. What does staking do for me? (value proposition)
2. How much can I earn? (economic modeling)
3. I have LPT on L1/CEX — what now? (setup blocker)
4. How do I pick an orchestrator? (decision framework)
5. How do I actually delegate? (mechanics)
6. How do I track and claim my rewards? (operations)
7. How do I manage/change my stake? (ongoing)
8. How do I undelegate when I want to exit? (exit path)

**Success metric:** "LPT staked with chosen orchestrator on Arbitrum, first rewards claimed, monitoring dashboard bookmarked."

**Failure modes:**
- Stuck on L1 (bridge not found/attempted)
- Wrong orchestrator chosen (low commission but never calls rewards)
- Missed rewards claim deadline (if applicable)
- Unbonding surprises (duration, what happens to rewards)

#### Sub-type B: The Governance Participant

**Profile:**
- Has LPT staked (often with an orchestrator, sometimes solo)
- Wants to vote on protocol proposals meaningfully
- May be long-time holder (Merkle Mine era, still active)
- Moderate crypto knowledge (governance structure understood)
- Time horizon: ongoing (structural participant)
- Risk tolerance: moderate-high (governance carries tail risk)

**Arrival patterns:**
- Governance proposal announcement (forum, Discord, email)
- LIP discussion link
- Direct URL from governance portal
- CTA from staking dashboard

**Questions:**
1. How does governance work? (structure)
2. What proposals are live right now? (current state)
3. How do I vote on a proposal? (mechanics)
4. Can I override my orchestrator's vote? (power understanding)
5. How do I submit a proposal? (contribution)
6. What is the treasury? How is it funded? (funding model)
7. What are SPEs? (special allocation mechanism)

**Success metric:** "Voted on at least one proposal independently, understands treasury allocation mechanism, can identify conflicts of interest vs orchestrator."

**Failure modes:**
- Voting deadline missed
- Doesn't realize orchestrator can override their vote (misunderstands delegation model)
- Confusion between governance proposals and SPE proposals
- Treasury allocations feel opaque or politicized

---

### Secondary personas

#### The Protocol Analyst / Investor

**Profile:**
- Doing tokenomics research or protocol evaluation
- May be from research firm (Messari, Glassnode), fund, or independent researcher
- Deep crypto literacy; may lack Livepeer domain knowledge
- Time horizon: evaluation only (may or may not invest)
- Entry: Messari, CoinDesk, search "Livepeer tokenomics protocol analysis"

**Questions:**
- What is the token supply model?
- What is the inflation schedule and why?
- How does the fee-capture mechanism work?
- What is the current fee-to-inflation ratio?
- Is the incentive model sustainable long-term?
- How does LIP-107 / LIP-100 change these dynamics?
- What is the active delegator yield vs. broadcaster fee yield?

**Success metric:** "Completes analysis, cites Livepeer docs as source, may invest or recommend to fund."

**Failure modes:**
- Data is stale or contradicts on-chain reality
- Inflation parameters not clearly marked as governance-controlled
- Fee mechanics not clearly distinguished from inflation mechanics

#### The New Crypto User (L1 Stranded)

**Profile:**
- Just bought LPT on Binance, Kraken, or Kraken (CEX)
- LPT is on Ethereum L1 or sitting on exchange
- No wallet, no bridge experience, no Arbitrum knowledge
- Zero DeFi infrastructure (may not even know what a wallet is)
- Time horizon: immediate (wants to act now)
- Risk tolerance: low (afraid of losing funds during bridge)

**Arrival patterns:**
- CEX purchase → redirect to "what next?"
- Discord question: "I bought LPT on Binance, what do I do?"
- Search: "LPT Binance what now", "how to use LPT"

**Questions:**
1. Do I need to move my LPT somewhere? (awareness)
2. What is Arbitrum? Is it safe? (fear/trust)
3. Do I need a special wallet? (mechanics)
4. Will I lose my LPT if I bridge it? (risk)
5. How much does it cost to bridge? (friction)
6. Can I just delegate from Binance? (wish path)
7. What if something goes wrong? (safety net)

**Success metric:** "LPT bridged from L1 to Arbitrum, first delegation completed, no funds lost."

**Failure modes:**
- Bridge transaction fails or stuck (needs recovery help)
- Loses private keys during wallet setup (no recovery path)
- Delegates to bad orchestrator due to not understanding comparison
- Bridge costs surprise them (gas fees not front-loaded)

#### The Orchestrator Cross-Referencing Delegator

**Profile:**
- Running an orchestrator or about to
- Wants to understand delegator experience to attract/retain delegation
- Moderate technical depth; may lack economics intuition
- Entry: Orchestrators tab → "what do delegators see?"

**Questions:**
- What do delegators see when evaluating me?
- How does my reward cut affect their yield?
- What triggers redelegation? (performance threshold)
- How is my Active Set standing visible to them?
- What do they see in reward history?

**Success metric:** "Reads delegation-economics.mdx, understands reward-cut impact, updates own marketing accordingly."

**Failure modes:**
- Content is too delegator-focused, not translatable to orchestrator decision-making
- Missing the reward-cut economic calculation

---

## Consensus and scoring

| Rank | Persona | Type | Volume | Depth | Impact | Score | Consensus |
|---|---|---|---|---|---|---|---|
| 1 | Yield-Seeking Delegator | Primary A | 3 | 3 | 3 | **9/9** | 3/3 unanimous |
| 2 | Governance Participant | Primary B | 2 | 3 | 3 | **8/9** | 3/3 unanimous |
| 3 | L1 Stranded / New Crypto | Secondary | 3 | 2 | 3 | **8/9** | 2/3 (inclusion pending review) |
| 4 | Protocol Analyst / Investor | Secondary | 2 | 3 | 2 | **7/9** | 1/3 (inclusion pending review) |
| 5 | Orchestrator Cross-ref | Secondary | 1 | 2 | 2 | **5/9** | 1/3 (inclusion pending review) |

---

## Key design decisions

1. **Sub-type split (A/B):** The LPT Holder needs two distinct journeys. Yield-seeking is step-by-step mechanical (bridge → choose → delegate → track). Governance is conceptual (understand structure → participate → propose). Folding into one journey loses precision for both.

2. **L1 Stranded sizing:** Consensus was split 2/3. Index shows this is high-volume (majority of new LPT holders arrive via CEX). Support burden is acute (highest doc-reading time, most failure modes). Recommend: **dedicated onboarding path in Delegation section rather than secondary persona treatment**. Suggest: `delegation/new-crypto-user-guide.mdx` or integrate upfront into `getting-started.mdx`.

3. **Primary drives structure:** Both Sub-type A and Sub-type B are "primary" but require different section organization. Section structure should optimize for Sub-type A (Yield-Seeking) as Step 1, with B (Governance) as optional parallel path. Users who come for governance may bounce if delegation setup is blocking.

4. **Missing: Fiat Onramp User:** LISAR SPE (Sept 2025) built fiat→delegation gateway. This is a new arriving type with distinct setup path (no CEX, no bridge required, different on-ramp friction). Not currently documented. Recommend: **add as arriving type, minor section in getting-started.mdx**.

---

## Review questions

1. **Is L1 Stranded a secondary persona or primary sub-journey?** Current structure treats as secondary; recommendation is dedicated primary path.

2. **Should Governance Participant be own tab or nested in LPT tab?** Could argue for separate "Governance" tab. Recommendation: keep in LPT tab (most governance participants are delegators first).

3. **Is Protocol Analyst useful to serve?** Recommendation: yes, but minimal. Their success is "cites our docs correctly." Suggest: dedicated `/resources/tokenomics-for-analysts.mdx` one-pager with supply, inflation, fee model, and "what's changing" flags.

4. **Should we explicitly document failure modes for each persona?** These are high-risk areas (bridge loss, wrong orchestrator, governance complexity). Recommend: explicit FAQ section per persona.

---