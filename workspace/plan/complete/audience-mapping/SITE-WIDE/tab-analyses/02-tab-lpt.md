# LP Token tab (Delegators): audience analysis and gap report

Tab path: `v2/lpt/`
Branch: `docs-v2-dev`

---

## 1. Primary audience persona

**Name:** The LPT Holder

**Who they are:** Someone who holds LPT — or is seriously considering acquiring it — and wants to make it work. Their primary intent is economic participation: they want to earn staking rewards by delegating their LPT to an orchestrator. They may also want to vote on governance proposals, but that is secondary to the earn-first motivation.

Two distinct sub-types exist within this persona:

**Sub-type A: The Yield-Seeking Delegator**
Has LPT (or ETH to swap), wants to stake, wants to earn. Has moderate crypto literacy — comfortable with wallets, bridging, and interacting with Arbitrum. Does not want to run a node. Their question sequence is:
1. What does staking do for me?
2. How do I bridge my LPT to Arbitrum?
3. How do I pick an orchestrator?
4. How do I delegate?
5. How do I track and claim my rewards?
6. How do I unstake when I want to exit?

**Sub-type B: The Governance Participant**
Has LPT staked (or is the orchestrator themselves). Wants to vote on protocol proposals. May be a long-time holder (Karolak-type: bought in Merkle Mine, still active in governance). Wants to understand: what proposals are live, how do I vote, what is the treasury, how do proposals get funded.

---

## 2. Secondary visitor personas

**The protocol analyst / investor:** Doing tokenomics research. Needs: supply mechanics, emission schedule, inflation model, the fee-revenue vs inflation gap, historical and current data. Probably arrives from Messari, CoinDesk, or a search.

**The orchestrator cross-referencing delegation:** Wants to understand what their delegators see, how reward cuts affect delegator yields, what triggers delegators to redelegate. Arrives from Orchestrators tab.

**The new crypto user who just bought LPT on Binance:** Has LPT on L1 (Ethereum mainnet) or on a CEX, no idea what to do with it. High potential value; highest support burden. Needs: bridging guide, wallet setup, extremely clear step-by-step. Currently this persona is extremely poorly served.

---

## 3. What the tab currently contains (inventory)

### Root level
- `index.mdx` (2KB) — minimal
- `token-portal.mdx` (4.3KB) — exists but not functioning as a true portal per canonical spec

### about/
- `overview.mdx` (5.3KB) — what LPT is
- `mechanics.mdx` (5KB) — how it works
- `purpose.mdx` (9.7KB) — why LPT exists
- `tokenomics.mdx` (5.7KB) — supply, inflation, bonding rate

### delegation/
- `overview.mdx` (6.4KB) — delegation overview
- `about-delegators.mdx` (7.7KB) — what delegators are
- `delegation-guide.mdx` (6.3KB) — how to delegate
- `getting-started.mdx` (9.2KB) — ✅ most important page in this section
- `bridge-lpt-to-arbitrum.mdx` (26.3KB) — ✅ substantial, confirmed tabbed layout
- `delegation-economics.mdx` (736 bytes) — 🔴 STUB

### delegation/TO-ADD/ (not yet published)
- `choose-a-delegate.mdx` (16.6KB) — ready, needs promotion out of TO-ADD
- `delegation-management.mdx` (12KB) — ready, needs promotion
- `delegation-rewards.mdx` (9.8KB) — ready, needs promotion
- `overview.mdx` (6.3KB) — appears to be a revised overview
- `section-analysis.md` + `sources.md` — workspace files, correctly in TO-ADD but should move to `_workspace/`

### governance/
- `overview.mdx` (6.4KB) — governance overview
- `model.mdx` (7.2KB) — governance model
- `processes.mdx` (8.9KB) — how proposals work, LIPs, voting

### treasury/
- `overview.mdx` (4.9KB) — what the treasury is
- `allocations.mdx` (6.1KB) — what has been funded
- `proposals.mdx` (6.5KB) — how to submit

### resources/
- `delegator-videos-and-blogs.mdx` (3.9KB) — external content links
- `exchanges.mdx` (56.6KB) — where to buy LPT
- `lpt-eth-usage.mdx` (1.9KB) — ETH usage on the network
- `compendium/` — empty or near-empty

---

## 4. Gap analysis

### 4.1 Critical gaps — missing pages that block the primary journey

**MISSING: `portal.mdx` — the canonical tab entry point**
`token-portal.mdx` exists but does not function as a proper portal in the canonical sense. It appears to be a secondary navigation page rather than a hero entry point that orients the reader, states the tab's purpose, and provides clear role-based routing ("I want to earn rewards" / "I want to vote" / "I want to understand what LPT is").
- Action: Rename or replace `token-portal.mdx` with a proper `portal.mdx` per the canonical spec

**MISSING: `delegation-economics.mdx` content (736-byte stub)**
This is the single most important conceptual page for a yield-seeking delegator: how much will I earn? The page must explain: inflation-based vs fee-based yield, reward cuts, the current 89:1 inflation-to-fees ratio, why this matters, and what sustainable yield looks like long-term as inflation decreases. Post-LIP-107, the mechanics will change — this page needs REVIEW flags for Mehrdad.
- Action: Full content page. One of the highest-priority writes in the entire docs project.

**MISSING: Undelegation / exit flow**
The delegation journey currently has no page explaining how to undelegate, what the unbonding period is (7 rounds ≈ ~7 days), and what happens to earned rewards during unbonding. This is a critical trust question — "can I get my LPT back?" — that every new delegator has.
- Canonical location: `v2/lpt/delegation/undelegation.mdx`
- Content source: Livepeer protocol spec, Explorer unbonding UI, community FAQ answers

**MISSING: Orchestrator selection guide (gated in TO-ADD)**
`choose-a-delegate.mdx` at 16.6KB exists and is reportedly ready. It is currently in `TO-ADD/` — a non-published bucket. This is arguably the most practical page the tab needs after the basic delegation guide. Choosing the wrong orchestrator (one that doesn't call rewards) directly costs delegators money.
- Action: Promote from `TO-ADD/` to `v2/lpt/delegation/choose-a-delegate.mdx` immediately

**MISSING: Delegation management and rewards pages (gated in TO-ADD)**
`delegation-management.mdx` (12KB) and `delegation-rewards.mdx` (9.8KB) are both in `TO-ADD/` and reportedly ready. These cover the operational phase of delegation — managing stake, tracking rewards, redelegating — which the current published section entirely skips.
- Action: Promote both from `TO-ADD/` to `v2/lpt/delegation/`

**MISSING: Fiat onramp explanation**
The LISAR SPE (treasury-funded, September 2025) built a fiat-to-delegation gateway supporting USD/EUR/GBP/NGN. This is a major accessibility improvement for new delegators. It is not documented anywhere in the LP Token tab.
- Canonical location: Section in `getting-started.mdx` or a dedicated `v2/lpt/delegation/fiat-onramp.mdx`

### 4.2 Content gaps in existing published pages

**`tokenomics.mdx` — inflation data is changing**
LIP-107 (voted February 2026) proposes reducing `targetBondingRate` from 50% to 46% and accelerating `inflationChange`. LIP-100 proposes adding inflation ceiling and floor. If either passes before launch, the current inflation mechanics description will be wrong.
- Action: Add REVIEW flag with SME: Mehrdad. Add note that parameters are subject to active governance.

**`getting-started.mdx` — no mention of the Arbitrum requirement up front**
This page exists (9.2KB) but buries the critical prerequisite: LPT must be on Arbitrum One to delegate. Users who arrive from a CEX with L1 Ethereum LPT will be immediately stuck. The page should open with this context and link directly to `bridge-lpt-to-arbitrum.mdx`.

**`governance/overview.mdx` and `model.mdx` — scope overlap with About tab**
The About tab has `livepeer-protocol/governance-model.mdx`. The LP Token tab has `governance/model.mdx`. These must not duplicate each other. The LP Token versions should focus on: how to participate as a delegator (voting, overriding orchestrator votes, proposal discussion). The About version should explain the on-chain mechanics. Currently there is content overlap.

**`treasury/allocations.mdx` — likely outdated**
Lists funded proposals. The Transformation SPE (September 2025), Protocol R&D SPE (January 2026), and LiveInfra Q1 2026 are all post any likely content freeze. This page will be stale on launch unless updated.
- Action: REVIEW flag with SME: honestly_rich / Foundation. Either update or frame as "for illustrative examples" with link to live Explorer.

**`resources/delegator-videos-and-blogs.mdx`** — this page links to external content that may be outdated. All linked resources need recency audit.

### 4.3 Journey step analysis — the Sub-type A (yield-seeking delegator) path

The reader's expected journey and current documentation coverage:

| Step | Reader's question | Current page | Coverage |
|---|---|---|---|
| 1 | What does staking do for me? | `about/overview.mdx`, `about/purpose.mdx` | ⚠️ exists but fragmented |
| 2 | How much can I earn? | `delegation/delegation-economics.mdx` | 🔴 STUB — critical |
| 3 | I have LPT on L1/CEX — what now? | `delegation/bridge-lpt-to-arbitrum.mdx` | ✅ good |
| 4 | How do I pick an orchestrator? | `delegation/TO-ADD/choose-a-delegate.mdx` | ⚠️ exists but not published |
| 5 | How do I actually delegate? | `delegation/getting-started.mdx` | ✅ exists, needs Arbitrum prereq upfront |
| 6 | How do I track my rewards? | `delegation/TO-ADD/delegation-rewards.mdx` | ⚠️ exists but not published |
| 7 | How do I manage/change my stake? | `delegation/TO-ADD/delegation-management.mdx` | ⚠️ exists but not published |
| 8 | How do I undelegate? | Nothing | 🔴 MISSING — must create |
| 9 | How do I vote on proposals? | `governance/processes.mdx` | ✅ exists |
| 10 | What is the treasury? | `treasury/overview.mdx` | ✅ exists |

Steps 2, 8 are fully missing. Steps 4, 6, 7 exist but are unpublished. Step 3 is the only part of the operational journey that is complete.

### 4.4 Journey step analysis — the Sub-type B (governance participant) path

| Step | Reader's question | Current page | Coverage |
|---|---|---|---|
| 1 | How does governance work? | `governance/overview.mdx`, `model.mdx` | ✅ good |
| 2 | What proposals are active? | Community tab (trending-topics.mdx) | ⚠️ not in LPT tab — handoff unclear |
| 3 | How do I vote? | `governance/processes.mdx` | ✅ exists |
| 4 | How do I submit a proposal? | `treasury/proposals.mdx` | ✅ exists |
| 5 | What has the treasury funded? | `treasury/allocations.mdx` | ⚠️ exists but likely stale |

This journey is comparatively well served. The biggest gap is step 2 — there is no page in the LP Token tab that surfaces live governance activity. This requires either a live embed of Explorer voting or a clear handoff to the Community tab's trending topics.

---

## 5. Recommended IA for LP Token tab

```
v2/lpt/
├── portal.mdx                          🔴 MISSING — must create (replace token-portal.mdx)
├── token-portal.mdx                    ⚠️  repurpose or remove after portal.mdx created
├── index.mdx                           ✅ (routing)
│
├── about/
│   ├── overview.mdx                    ✅ exists
│   ├── purpose.mdx                     ✅ exists
│   ├── mechanics.mdx                   ✅ exists
│   └── tokenomics.mdx                  ⚠️  needs LIP-107/LIP-100 REVIEW flag
│
├── delegation/
│   ├── overview.mdx                    ✅ (use TO-ADD revised version)
│   ├── about-delegators.mdx            ✅ exists
│   ├── getting-started.mdx             ⚠️  needs Arbitrum prereq upfront
│   ├── bridge-lpt-to-arbitrum.mdx      ✅ exists — strong page
│   ├── delegation-economics.mdx        🔴 STUB — highest priority write
│   ├── delegation-guide.mdx            ✅ exists
│   ├── choose-a-delegate.mdx           ⚠️  promote from TO-ADD
│   ├── delegation-rewards.mdx          ⚠️  promote from TO-ADD
│   ├── delegation-management.mdx       ⚠️  promote from TO-ADD
│   └── undelegation.mdx                🔴 MISSING — must create
│
├── governance/
│   ├── overview.mdx                    ✅ exists — scope trim vs About
│   ├── model.mdx                       ✅ exists — scope trim vs About
│   └── processes.mdx                   ✅ exists
│
├── treasury/
│   ├── overview.mdx                    ✅ exists
│   ├── allocations.mdx                 ⚠️  likely stale — needs update or live link
│   └── proposals.mdx                   ✅ exists
│
└── resources/
    ├── exchanges.mdx                   ✅ exists
    ├── lpt-eth-usage.mdx               ✅ exists
    ├── delegator-videos-and-blogs.mdx  ⚠️  needs recency audit
    └── compendium/                     ⚠️  confirm contents
```

Legend: ✅ good | ⚠️ needs work | 🔴 critical gap
