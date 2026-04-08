AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| canonical-lp-token-audience-design.md | `CONTENT-WRITING/.../testing/Tabs/lp-token/collated/` | Audience, Persona, Journey, IA |
| chatgpt-canonical, claude-web-canonical | `...lp-token/collated/` | Audience, IA |
| collation-notes (chatgpt + claude-web) | `...lp-token/collated/` | Prompt/Skill |
| agent-v5, chatgpt-v4, claude-web-v4 | `...lp-token/zero-context-ai-results/` | Audience, Persona, Journey, IA |
| glossary-lpt.md | `...lp-token/input-pack/` | Content |
| v4.md, collation-v2.md (learnings) | `...lp-token/learnings/` | Prompt/Skill |
| delegators-content-scan.md | `CONTENT-WRITING/context-packs/` | Content, IA |
| delegators-research-pack.md | `CONTENT-WRITING/context-packs/` | Content |
| delegators-v1-content.md | `CONTENT-WRITING/context-packs/` | Content |
| delegators-full-content.md | `CONTENT-WRITING/context-packs/` | Content |
| delegators-ia-prereq.md | `CONTENT-WRITING/context-packs/` | IA |
| collated/delegators/ (10 files) | `CONTENT-WRITING/collated/delegators/` | Audience, IA |
| token-portal.mdx | `v2/delegators/` | Content |
| getting-started.mdx | `v2/delegators/delegation/` | Content, Journey |
| 02-tab-lpt.md | `_MY_PROCESS/.../FULL-FILES/TABS/` | Persona, Journey, Plan |

---

# AUDIENCE — Who lands on this tab

**Audience token**: `delegator`

| Arriving type | Entry vector | Arriving state | Routing need |
|---|---|---|---|
| **LPT holder wanting to stake** | Exchange purchase, search "LPT staking", Home/About routing | Has LPT (or ETH to swap), moderate crypto literacy, comfortable with wallets | Stays — primary persona |
| **Governance participant** | Proposal link, forum, governance discussion | Has staked LPT, wants to vote on protocol proposals | Stays — secondary persona |
| **New crypto user who bought LPT on Binance** | CEX purchase, Discord, search | Has LPT on L1 Ethereum or CEX, no idea what to do with it. Highest support burden | Stays — needs bridging guide + extreme clarity |
| **Protocol analyst / investor** | Messari, CoinDesk, search "Livepeer tokenomics" | Doing tokenomics research: supply, emission, inflation, fee-revenue gap | May read then leave — evaluation-only |
| **Orchestrator cross-referencing delegation** | Orchestrators tab cross-reference | Wants to understand what delegators see, how reward cuts affect yields, redelegation triggers | Reads concepts, returns to Orchestrators |

### Arriving question

> "I have LPT — how do I put it to work, and what am I actually committing to?"

---

# PERSONAS — Who this tab actually serves

### Source: 02-tab-lpt.md (process analysis)

**Primary persona: The LPT Holder**

Someone who holds LPT — or is seriously considering acquiring it — and wants to make it work. Primary intent is economic participation: earn staking rewards by delegating to an orchestrator. May also want to vote, but that is secondary to earn-first motivation.

**Sub-type A: The Yield-Seeking Delegator**
- Has LPT (or ETH to swap), wants to stake, wants to earn
- Moderate crypto literacy — comfortable with wallets, bridging, Arbitrum
- Does not want to run a node
- **Question sequence:**
  1. What does staking do for me?
  2. How do I bridge my LPT to Arbitrum?
  3. How do I pick an orchestrator?
  4. How do I delegate?
  5. How do I track and claim my rewards?
  6. How do I unstake when I want to exit?

**Sub-type B: The Governance Participant**
- Has LPT staked (or is the orchestrator themselves)
- Wants to vote on protocol proposals
- May be long-time holder (Karolak-type: bought in Merkle Mine, still active in governance)
- **Wants to understand:** what proposals are live, how to vote, what is the treasury, how do proposals get funded

**Secondary personas:**

| Persona | Who | What they need from this tab |
|---|---|---|
| **The Protocol Analyst / Investor** | Doing tokenomics research | Supply mechanics, emission schedule, inflation model, fee-revenue vs inflation gap, historical data |
| **The New Crypto User** | Just bought LPT on Binance, on L1 or CEX | Bridging guide, wallet setup, extremely clear step-by-step. **Highest support burden, currently extremely poorly served** |
| **The Orchestrator Cross-referencing** | Wants to understand what delegators see | Reward cuts, delegator yields, redelegation triggers |

### Source: canonical (3-run synthesis)

| Rank | Persona | Score | Consensus |
|---|---|---|---|
| 1 | First Bond Seeker / Yield Seeker | **9** | 3/3 unanimous |
| 2 | Reallocator / Active Stakeholder | **8** | 3/3 unanimous |
| 3 | Treasury-and-Vote / Governance Entrant | **7** | 3/3 unanimous |
| 4 | L1 Stranded | **7** | 2/3 |
| 5 | Token Participation Evaluator | **6** | 1/3 (inclusion pending human review) |

---

# JOURNEYS — What each persona needs to accomplish through this tab

## Sub-type A (Yield-Seeking Delegator) journey

**Source**: 02-tab-lpt.md

| Step | Reader's question | Current page | Coverage |
|---|---|---|---|
| 1 | What does staking do for me? | `about/overview.mdx`, `about/purpose.mdx` | ⚠️ exists but fragmented |
| 2 | How much can I earn? | `delegation/delegation-economics.mdx` (736B) | 🔴 **STUB — critical** |
| 3 | I have LPT on L1/CEX — what now? | `delegation/bridge-lpt-to-arbitrum.mdx` (26.3KB) | ✅ good |
| 4 | How do I pick an orchestrator? | `delegation/TO-ADD/choose-a-delegate.mdx` (16.6KB) | ⚠️ exists but **NOT PUBLISHED** |
| 5 | How do I actually delegate? | `delegation/getting-started.mdx` (9.2KB) | ✅ exists — needs Arbitrum prereq upfront |
| 6 | How do I track my rewards? | `delegation/TO-ADD/delegation-rewards.mdx` (9.8KB) | ⚠️ exists but **NOT PUBLISHED** |
| 7 | How do I manage/change my stake? | `delegation/TO-ADD/delegation-management.mdx` (12KB) | ⚠️ exists but **NOT PUBLISHED** |
| 8 | How do I undelegate? | Nothing | 🔴 **MISSING — must create** |
| 9 | How do I vote on proposals? | `governance/processes.mdx` (8.9KB) | ✅ exists |
| 10 | What is the treasury? | `treasury/overview.mdx` (4.9KB) | ✅ exists |

**Steps 2, 8 fully missing. Steps 4, 6, 7 exist but unpublished (TO-ADD/).**

## Sub-type B (Governance Participant) journey

| Step | Reader's question | Current page | Coverage |
|---|---|---|---|
| 1 | How does governance work? | `governance/overview.mdx`, `model.mdx` | ✅ good |
| 2 | What proposals are active? | Community tab (trending-topics.mdx) | ⚠️ not in LPT tab — handoff unclear |
| 3 | How do I vote? | `governance/processes.mdx` | ✅ exists |
| 4 | How do I submit a proposal? | `treasury/proposals.mdx` | ✅ exists |
| 5 | What has the treasury funded? | `treasury/allocations.mdx` | ⚠️ exists but likely stale |

## Canonical ideal journey (8 stages)

| Position | Stage | lifecycleStage |
|---|---|---|
| 1 | Identify path (first bond / returning / governance / L1-stranded) | `discover` |
| 2 | Decide participation (does delegation fit my goals/risk?) | `evaluate` |
| 3 | Get tokens in position (bridge L1→L2 if needed) | `setup` |
| 4 | Understand outcome drivers (reward cut, fee cut, dilution, inflation) | `evaluate` |
| 5 | Choose orchestrator (compare commission, reward call history, Active Set) | `evaluate` |
| 6 | Complete first bond (execute bonding, verify position, understand Thawing Period) | `setup` |
| 7 | Watch, claim, track (monitor yield, claim earnings, check reward calls) | `operate` |
| 8 | Manage stake & governance (rebond, top up, unbond, vote on proposals) | `optimise` |

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have LPT and want to earn | understand what staking does and what I'm committing to | decide whether to proceed |
| J2 | I'm ready to stake but my LPT is on L1/CEX | bridge to Arbitrum | actually delegate |
| J3 | I need to choose an orchestrator | compare operators on commission, reliability, Active Set standing | choose well (wrong choice costs money) |
| J4 | I'm bonded and want to track | see what I'm earning and whether my orchestrator is performing | know whether to stay or redelegate |
| J5 | I want to exit | understand unbonding period and what happens to earned rewards | get my LPT back without surprises |
| J6 | A governance proposal is live | vote with my stake independently of my orchestrator | participate meaningfully |

---

# IA — All section structures found

## Canonical 10-section structure (3-run synthesis)

| # | Section | purpose | pageType | lifecycleStage |
|---|---|---|---|---|
| S1 | Which situation is mine? | `orient` | `navigation` | `discover` |
| S2 | What bonding actually means | `explain` | `concept` | `evaluate` |
| S3 | Getting LPT onto Arbitrum | `start` | `instruction` | `setup` |
| S4 | What drives my outcome | `explain` | `concept` | `evaluate` |
| S5 | Choosing an orchestrator | `choose` | `guide` | `evaluate` |
| S6 | Bonding your LPT | `start` | `instruction` | `setup` |
| S7 | How rewards accumulate | `operate` | `guide` | `operate` |
| S8 | Managing your stake | `operate` | `guide` | `optimise` |
| S9 | Participating in governance | `operate` | `guide` | `operate` |
| S10 | Treasury & ecosystem funding | `explain` | `concept` | `operate` |

**BLOCKING**: Rewards placement — S4 pre-selection (ChatGPT) vs post-bonding (Claude Web). Both defensible.

## Current live v2/lpt/ structure

```
v2/lpt/
├── token-portal.mdx (4.3KB)           ⚠️ not proper portal per canonical spec
├── about/
│   ├── overview.mdx (5.3KB)           ✅
│   ├── mechanics.mdx (5KB)            ✅
│   ├── purpose.mdx (9.7KB)            ✅
│   └── tokenomics.mdx (5.7KB)         ⚠️ needs LIP-107/100 review
├── delegation/
│   ├── overview.mdx (6.4KB)           ✅
│   ├── about-delegators.mdx (7.7KB)   ✅
│   ├── delegation-guide.mdx (6.3KB)   ✅
│   ├── getting-started.mdx (9.2KB)    ⚠️ needs Arbitrum prereq upfront
│   ├── bridge-lpt-to-arbitrum.mdx (26.3KB) ✅ strong
│   ├── delegation-economics.mdx (736B) 🔴 STUB — highest priority write
│   └── TO-ADD/ (4 ready pages: choose-a-delegate 16.6KB, delegation-management 12KB,
│       delegation-rewards 9.8KB, overview 6.3KB) — NOT PUBLISHED
├── governance/
│   ├── overview.mdx (6.4KB)           ✅ — scope trim vs About needed
│   ├── model.mdx (7.2KB)             ✅ — scope trim vs About needed
│   └── processes.mdx (8.9KB)          ✅
├── treasury/
│   ├── overview.mdx (4.9KB)           ✅
│   ├── allocations.mdx (6.1KB)        ⚠️ likely stale
│   └── proposals.mdx (6.5KB)          ✅
└── resources/
    ├── exchanges.mdx (56.6KB)         ✅
    ├── lpt-eth-usage.mdx (1.9KB)      ✅
    ├── delegator-videos-and-blogs.mdx (3.9KB) ⚠️ needs recency audit
    └── compendium/                    ⚠️ confirm contents
```

17 pages in nav + 4 ready in TO-ADD. 13 current, 3 stubs, 4 deprecated pageType, 9 incomplete frontmatter.

---

# OPEN ITEMS & BLOCKING DECISIONS

1. **BLOCKING — Rewards placement**: Pre-operator-selection (S4, ChatGPT — reader needs evaluation criteria before choosing) vs post-bonding (after S6, Claude Web — reader has real position to apply numbers to). Human decision required.
2. **NON-BLOCKING — Token Participation Evaluator persona**: Single-run inclusion (1/3). Ambiguous at Impact=2.
3. **NON-BLOCKING — Treasury vs Community Treasury label**: Two collation runs used different terms. "Treasury" canonical, "Community Treasury" acceptable variant.
4. **NON-BLOCKING — Proposer Bond value**: v5 cites 100 LPT minimum. Requires verification against LivepeerGovernor contract.
5. **NON-BLOCKING — Governance-controlled values**: Active Set size, Treasury Reward Cut Rate, Thawing Period — all flagged `[verify-live]`.
6. **CRITICAL CONTENT GAPS**: delegation-economics.mdx (🔴 stub — highest priority write), undelegation/exit flow (🔴 missing), 4 TO-ADD pages need promotion, fiat onramp (LISAR SPE) undocumented, portal needs canonical refresh.

# RESEARCH GAP — Missing Personas

- **The New Crypto User / L1 Stranded** — identified in process notes as "highest support burden, currently extremely poorly served" but only given 2/3 consensus as a canonical persona. Their journey is fundamentally different (starts with bridging, may need wallet setup help, needs extreme clarity). May need a dedicated onboarding path rather than being folded into the main yield-seeking journey.
- **The Fiat Onramp User** — LISAR SPE (September 2025) built fiat-to-delegation gateway for USD/EUR/GBP/NGN. Not documented anywhere. This is a new entry vector that creates a new persona type.
