**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## Audience: Who lands on the DELEGATORS tab

### Arriving token: `delegator` / `lpt-holder`

| Arriving type | Entry vector | Arriving state | Routing need | Persona match |
|---|---|---|---|---|
| **LPT holder wanting to stake** | Exchange purchase, search "LPT staking", Home/About routing | Has LPT (or ETH to swap), moderate crypto literacy, comfortable with wallets, no DeFi experience required | Stays — primary persona path A | Yield-Seeking Delegator |
| **Governance participant** | Proposal link, forum, governance discussion, Discord governance channel | Has staked LPT, wants to vote on protocol proposals, may be long-time holder | Stays — primary persona path B | Governance Participant |
| **New crypto user (L1 stranded)** | CEX purchase (Binance, Kraken), Discord, search "what do I do with LPT" | Has LPT on L1 Ethereum or CEX, no crypto infrastructure knowledge, zero bridge/wallet experience | Stays — needs extreme clarity, highest support burden | New Crypto User / L1 Stranded |
| **Protocol analyst / investor** | Messari, CoinDesk, search "Livepeer tokenomics", Twitter/X research | Doing tokenomics research: supply mechanics, inflation schedule, fee-revenue gap, historical data | May read then leave — evaluation only, no onboarding needed | Protocol Analyst / Investor |
| **Orchestrator cross-referencing delegation** | Orchestrators tab cross-reference, wants to understand delegator economics | Wants to understand what delegators see, how reward cuts affect yields, redelegation triggers | Reads concepts only, returns to Orchestrators tab | Orchestrator Understanding Delegator Experience |

### Arriving question (canonical)

> "I have LPT — how do I put it to work, and what am I actually committing to?"

### Secondary arriving questions (by persona)

**Yield-Seeking Delegator:**
- "How much can I earn?"
- "Is this better than holding?"
- "What can go wrong?"
- "How do I start?"

**Governance Participant:**
- "How do I vote on proposals?"
- "What is the treasury?"
- "How do proposals get funded?"
- "What if I disagree with my orchestrator's votes?"

**L1 Stranded:**
- "I'm on Binance — do I need to move my LPT somewhere?"
- "What is Arbitrum?"
- "Do I need a special wallet?"
- "Will I lose my LPT if I bridge it?"

**Protocol Analyst:**
- "What is the token supply model?"
- "How does inflation work?"
- "What is the fee-capture mechanism?"
- "Is delegation incentive-aligned long-term?"

---

## Review questions

1. **Is "L1 Stranded" sized correctly as primary vs secondary?** Index/forum data shows this is high-volume (CEX users are majority of new LPT acquirers), but support burden suggests dedicated onboarding path vs. folding into main journey.

2. **Should "Fiat Onramp User" (LISAR SPE, Sept 2025) be a distinct arriving type?** This is a new entry vector (fiat-to-delegation gateway) that creates fundamentally different setup path.

3. **Are the arriving vectors complete?** Missing: governance proposal email notifications, bot alerts, token airdrop claimers (if any), institutional investors evaluating protocol.

4. **Orchestrator cross-referencing — should this redirect to Orchestrators tab?** Or should we embed delegator-relevant concepts (yield calculation, reward cuts) in the Orchestrators tab itself?

---