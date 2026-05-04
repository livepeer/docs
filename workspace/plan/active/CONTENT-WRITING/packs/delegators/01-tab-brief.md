# 01 — Tab brief: Delegators

**Tab**: Delegators
**Live folder**: `v2/delegators/`
**Anchor / dropdown**: Delegators (icon: `coins`)
**docs.json tab**: `Delegators` (icon: `hand-holding-dollar`)
**Production page count**: 23 pages in nav, plus the portal
**IA status**: rebuild completed 2026-04-06; one open decision (see below)

---

## What this tab is

The Delegators tab is the canonical surface for everyone who holds LPT and wants to put it to work without running infrastructure. It covers four jobs end to end:

1. **Understand LPT** — what the token does, how the protocol uses it, what bonding actually means.
2. **Delegate LPT** — bridge if needed, choose an orchestrator, complete the on-chain delegation transaction, manage the position.
3. **Use bonded stake in governance** — vote on proposals, override an orchestrator's vote, follow the on-chain decision process.
4. **Follow the treasury** — see how the treasury is funded, what spending proposals look like, how delegators participate in those decisions.

It does not cover orchestrator setup (that is the Orchestrators tab), gateway operations (Gateways tab), or developer integration with the Studio API (Developers tab). When a delegator topic touches one of those, the page links out.

---

## Primary audience

`delegator` — singular audience for every page in the tab.

Reader profile, locked from `audience-design.md` and `voice-rules.md`:

- Smart and finance-aware. Understands risk, return, dilution, governance.
- May have experience with DeFi (other staking protocols, DAOs) but not necessarily protocol-level web3.
- Does not write code. Does not run nodes. Does not use a CLI.
- Decision-making, not building.

A delegator on this tab is making a choice with their own capital. They want to know what they get, what they give up, what depends on what, and exactly what to do next.

---

## Personas inside the delegator audience

Three return-visit personas, one entry persona, one edge persona. From `audience-design.md`:

| # | Persona | What they hold | What they want |
|---|---|---|---|
| P1 | First Bond Seeker (primary) | LPT in wallet (Arbitrum or L1), no live bonded position | A completed first delegation; clear view of what they committed to |
| P2 | Reallocator / Active Stakeholder | A live bonded position, accumulated rewards | A completed rebond, unbond, claim, or vote — driven by the trigger that brought them back |
| P3 | Treasury-and-Vote Participant | Bonded or unbonded LPT; familiarity with DAO governance from other protocols | A cast vote or a confirmed understanding of how their vote weight is calculated |
| P4 | L1 Stranded | LPT on Ethereum mainnet | LPT bridged to Arbitrum and a route into first bonding |
| P5 | Token Participation Evaluator | LPT or interest in LPT, no commitment yet | A yes/no on whether delegation fits their goals and risk tolerance |

P1 is primary across every Concepts and Delegating LPT page. P2 is primary for `manage-your-delegation`. P3 is primary for governance and treasury pages. P4 is primary for `bridge-lpt-to-arbitrum`. P5 routes through the portal and `concepts/overview`, decision-supports through `delegation-economics`.

The page brief in `02-page-briefs.md` names the persona for that specific page.

---

## Page list (canonical, from `docs.json` and the live tab)

Group: **Start Here**
- `v2/delegators/portal`

Group: **Concepts**
- `v2/delegators/concepts/overview`
- `v2/delegators/concepts/purpose`
- `v2/delegators/concepts/tokenomics`
- `v2/delegators/concepts/mechanics`

Group: **Delegating LPT**
- `v2/delegators/delegation/overview`
- `v2/delegators/delegation/about-delegation`
- `v2/delegators/delegation/bridge-lpt-to-arbitrum`
- `v2/delegators/delegation/delegation-economics`
- `v2/delegators/delegation/choose-an-orchestrator`
- `v2/delegators/delegation/delegate-your-lpt`
- `v2/delegators/delegation/manage-your-delegation`

Group: **Guides → Livepeer Governance**
- `v2/delegators/guides/governance/overview`
- `v2/delegators/guides/governance/model`
- `v2/delegators/guides/governance/processes`

Group: **Guides → Livepeer Treasury**
- `v2/delegators/guides/treasury/overview`
- `v2/delegators/guides/treasury/proposals`
- `v2/delegators/guides/treasury/allocations`

Group: **Resources**
- `v2/delegators/resources/glossary`
- `v2/delegators/resources/reference/protocol-parameters`
- `v2/delegators/resources/reference/contracts`
- `v2/delegators/resources/compendium/exchanges`
- `v2/delegators/resources/compendium/lpt-eth-usage`
- `v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs`

Total: 23 production pages plus the portal.

---

## Scope rules — what this tab does NOT do

- **Not orchestrator setup.** When a page touches "what makes a good orchestrator", the criteria are reader-facing decision support (reward call consistency, reward cut, active set standing). Hardware, GPU, and node operation belong in Orchestrators — link out.
- **Not gateway operation or routing.** Gateways are mentioned only as the source of ETH fees and as the entity orchestrators serve.
- **Not Studio API integration.** Developers tab covers that.
- **Not protocol-level Solidity walk-throughs.** Concepts pages explain mechanism and outcome; deep contract internals belong in the protocol repo.
- **No CLI or shell instructions.** Delegators use a wallet and a UI — Livepeer Explorer or the Arbitrum bridge UI. Contract addresses and copyable on-chain values are acceptable on bridging and contract-reference pages.

---

## Open IA decision (carry forward to `02-page-briefs.md`)

**Rewards-placement decision** — unresolved as of 2026-04-30.

The two upstream collation runs reached opposite conclusions on where the rewards/economics page (`delegation-economics`) belongs in the Delegating LPT sequence:

- **Ordering A (current canonical):** rewards before orchestrator selection. Reader needs reward cut, fee share, and inflation grounding before they can compare orchestrators.
  - Sequence: `overview` → `about-delegation` → `bridge-lpt-to-arbitrum` → **`delegation-economics`** → `choose-an-orchestrator` → `delegate-your-lpt` → `manage-your-delegation`
- **Ordering B (alternate):** rewards after bonding. Reader has a real position to apply numbers to.
  - Sequence: `overview` → `about-delegation` → `bridge-lpt-to-arbitrum` → `choose-an-orchestrator` → `delegate-your-lpt` → **`delegation-economics`** → `manage-your-delegation`

Both orderings serve P1 (First Bond Seeker). Ordering A is stronger for evaluation and decision quality. Ordering B is stronger for return-visit recall and post-bond comprehension.

**Decision authority**: Alison Haire. Sign-off required before Phase 3.

**How `02-page-briefs.md` handles this**: pages in the affected sequence (`delegation-economics`, `choose-an-orchestrator`, `delegate-your-lpt`) list both prev/next options. Body prose for each affected page must work in either ordering — link forward and backward without naming a specific predecessor in running prose.

---

## What ships when this tab is done

23 production pages plus the portal, each:

- with `audience: delegator` voice applied throughout
- with no CLI, no shell syntax (except contract addresses on bridging and contract-reference pages)
- with every protocol term defined on first use, then used naked
- with every earnings claim stating the dependency
- with at least one number, percentage, dependency, action, or named mechanism per paragraph
- inside its word budget per `02-page-briefs.md`
