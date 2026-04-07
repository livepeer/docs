**Verdict**: [ APPROVE / AMEND / REJECT ]
**Notes**:

---

## Canonical 10-section IA structure (synthesis from 3 design runs)

| # | Section name | Purpose | Page type | Lifecycle stage | Current status |
|---|---|---|---|---|---|
| **S0** | **Portal & Orientation** | Orient visitor, state purpose, route by role | `navigation` | `discover` | 🔴 MISSING — token-portal.mdx exists but not canonical |
| **S1** | **What LPT is & why delegate** | Explain value prop, why staking matters, risk disclosure | `concept` | `evaluate` | ⚠️ fragmented across about/overview.mdx + about/purpose.mdx |
| **S2** | **How much can I earn** | Realistic yield calculation, economics modeling, variables | `concept` / `econ` | `evaluate` | 🔴 STUB — delegation-economics.mdx (736 bytes) |
| **S3** | **Getting LPT onto Arbitrum** | Bridge tutorial, wallet setup, L1→L2 mechanics | `instruction` / `tutorial` | `setup` | ✅ bridge-lpt-to-arbitrum.mdx (strong) |
| **S4** | **Choosing an orchestrator** | Comparison framework, what to look for, Explorer walkthrough | `guide` / `how-to` | `evaluate` | ⚠️ choose-a-delegate.mdx exists, unpublished |
| **S5** | **Bonding your LPT** | Step-by-step delegation, thawing period, verification | `instruction` / `tutorial` | `setup` | ✅ getting-started.mdx (good but needs Arbitrum prereq) |
| **S6** | **How rewards accumulate & claim** | Reward mechanism, claim process, performance tracking | `guide` / `how-to` | `operate` | ⚠️ delegation-rewards.mdx exists, unpublished |
| **S7** | **Managing your stake** | Redelegation, top-up, performance monitoring, orchestrator changes | `guide` / `how-to` | `optimise` | ⚠️ delegation-management.mdx exists, unpublished |
| **S8** | **Undelegation & exit** | Unbonding period, reward handling, exit flow, recovery paths | `guide` / `how-to` | `optimise` | 🔴 MISSING — undelegation.mdx |
| **S9** | **Governance participation** | How to vote, submit proposals, treasury mechanics, SPEs | `guide` / `how-to` | `operate` | ✅ governance/* (good, some scope cleanup needed) |
| **S10** | **Treasury & ecosystem funding** | Treasury overview, what's been funded, SPE system | `concept` / `reference` | `operate` | ⚠️ treasury/* (good framework, allocations page stale) |

**Legend:**
- ✅ = good, ready
- ⚠️ = ready but needs work (unpublished, stale, needs scope clarification)
- 🔴 = missing or critical stub

---

## Current v2/lpt/ structure (as of this analysis)

```
v2/lpt/
├── index.mdx (2 KB)                      ✅ routing
├── token-portal.mdx (4.3 KB)             ⚠️  repurpose or replace
│
├── about/
│   ├── overview.mdx (5.3 KB)             ✅ LPT overview
│   ├── mechanics.mdx (5 KB)              ✅ how it works
│   ├── purpose.mdx (9.7 KB)              ✅ why LPT exists
│   └── tokenomics.mdx (5.7 KB)           ⚠️  inflation data changing (LIP-107/100)
│
├── delegation/
│   ├── overview.mdx (6.4 KB)             ✅ delegation overview
│   ├── about-delegators.mdx (7.7 KB)     ✅ what delegators are
│   ├── delegation-guide.mdx (6.3 KB)     ✅ guide
│   ├── getting-started.mdx (9.2 KB)      ⚠️  good but needs Arbitrum context upfront
│   ├── bridge-lpt-to-arbitrum.mdx (26.3 KB) ✅ strong, tabbed
│   ├── delegation-economics.mdx (736 B)  🔴 CRITICAL STUB
│   └── TO-ADD/ (not published)
│       ├── choose-a-delegate.mdx (16.6 KB)
│       ├── delegation-management.mdx (12 KB)
│       ├── delegation-rewards.mdx (9.8 KB)
│       ├── overview.mdx (6.3 KB, revised)
│       ├── section-analysis.md
│       └── sources.md
│
├── governance/
│   ├── overview.mdx (6.4 KB)             ✅ good
│   ├── model.mdx (7.2 KB)                ✅ good (scope overlap with About/governance-model.mdx)
│   └── processes.mdx (8.9 KB)            ✅ good
│
├── treasury/
│   ├── overview.mdx (4.9 KB)             ✅ good
│   ├── allocations.mdx (6.1 KB)          ⚠️  stale (post-Sept 2025 data missing)
│   └── proposals.mdx (6.5 KB)            ✅ good
│
└── resources/
    ├── exchanges.mdx (56.6 KB)           ✅ where to buy LPT
    ├── lpt-eth-usage.mdx (1.9 KB)        ✅ ETH usage
    ├── delegator-videos-and-blogs.mdx (3.9 KB) ⚠️  needs recency audit
    └── compendium/ (status unclear)      ⚠️  verify contents
```

**Summary:** 17 pages live + 4 ready in TO-ADD. 10 good, 5 need work, 3 critical gaps, 4 unpublished ready pages.

---

## Recommended v2/lpt/ structure (post-launch IA)

```
v2/lpt/
├── index.mdx                             ✅ (routing, minimal)
├── portal.mdx                            🔴 CREATE (replaces token-portal.mdx)
│
├── about/
│   ├── overview.mdx                      ✅
│   ├── mechanics.mdx                     ✅
│   ├── purpose.mdx                       ✅
│   └── tokenomics.mdx                    ⚠️  add [REVIEW-LIP-107/100] flag
│
├── delegation/
│   ├── overview.mdx                      ✅ (use TO-ADD revised version)
│   ├── about-delegators.mdx              ✅
│   ├── getting-started.mdx               ⚠️  prepend Arbitrum prerequisite
│   ├── bridge-lpt-to-arbitrum.mdx        ✅
│   ├── new-crypto-user-guide.mdx         🟡 CREATE or integrate into bridge guide
│   ├── delegation-economics.mdx          🔴 CREATE — highest priority
│   ├── choose-a-delegate.mdx             ⚠️  PROMOTE from TO-ADD
│   ├── delegation-guide.mdx              ✅
│   ├── delegation-rewards.mdx            ⚠️  PROMOTE from TO-ADD
│   ├── delegation-management.mdx         ⚠️  PROMOTE from TO-ADD
│   └── undelegation.mdx                  🔴 CREATE
│
├── governance/
│   ├── overview.mdx                      ✅ (trim scope vs About/governance-model.mdx)
│   ├── model.mdx                         ✅ (trim scope vs About)
│   ├── processes.mdx                     ⚠️  add [EMBED OR LINK to live proposals]
│   └── how-to-vote.mdx                   🟡 CLARIFY — is this separate from processes.mdx?
│
├── treasury/
│   ├── overview.mdx                      ✅
│   ├── allocations.mdx                   ⚠️  [REVIEW-STALE] or frame as "examples"
│   ├── proposals.mdx                     ✅
│   └── spe-system.mdx                    🟡 CREATE if SPE mechanics not covered elsewhere
│
└── resources/
    ├── exchanges.mdx                     ✅
    ├── lpt-eth-usage.mdx                 ✅
    ├── delegator-videos-and-blogs.mdx    ⚠️  [AUDIT-RECENCY]
    ├── glossary.mdx                      🟡 CREATE or verify exists
    ├── protocol-parameters.mdx           🟡 CREATE (round duration, active set size, inflation rate)
    ├── contract-addresses.mdx            🟡 CREATE (delegator-relevant contracts)
    └── compendium/                       ⚠️  verify contents
```

---

## Key IA decisions

1. **Portal as S0, separate from About:** Visitor needs role identification BEFORE reading "what is LPT". Portal should ask: "First time bonding? | Already staked? | Governance-focused? | Just researching?"

2. **Delegation-economics pre-orchestrator-choice:** Stage 2-3-4 ordering (Value Prop → Economics → Bridge → Choose). Reader must understand yield variables before comparing orchestrators.

3. **Four ready pages (TO-ADD) must be promoted immediately.** These are not drafts; they're publication-ready. Blocking them creates a ghost story for delegators (getting-started → dead end on reward tracking).

4. **Undelegation as distinct section, not subsection of management:** The unbonding period, reward handling, and exit flow deserve dedicated space. This is a trust/confidence question ("can I get my LPT back?").

5. **Governance nested in LPT, not separate tab:** Rationale: 90%+ of governance participants are delegators. Separate tab orphans governance content and forces navigation friction.

6. **New Crypto User path integrated into bridge or standalone:** Decision pending on scope. If standalone, it becomes `delegation/new-crypto-user-guide.mdx` (350 words max). If integrated, becomes substantial primer section in `bridge-lpt-to-arbitrum.mdx`.

---

## Review questions

1. **Is S0 (Portal) the right place to route by role?** Or should index.mdx do this? Recommendation: Portal is clearer (explicit hero section). Index can be minimal routing.

2. **Should S1 (Value Prop) and S2 (Economics) be combined?** Both answer "why delegate?" but at different detail levels. Recommendation: keep separate. S1 is narrative ("here's what you'll accomplish"), S2 is calculation ("here's the math").

3. **Is governance in the right place as S9?** Consider: governance can happen before delegation is complete. But most governance content (voting, proposal submission) requires staked LPT. Recommendation: keep in LPT tab; possibly add nav note in portal.

4. **Should resources section be longer?** Currently minimal. Candidates: FAQ by persona, troubleshooting, security best practices, common mistakes. Recommendation: post-launch, build FAQ and troubleshooting sections.

---