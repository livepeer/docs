# v4-orchestrators-audience-design.md

# Orchestrators — Audience Design

**Tab**: Orchestrators  
**Audience**: orchestrator  
**TERMINOLOGY_LOCK**: [Orchestrator, Gateway, LPT, Active Set [verify-live: Livepeer Explorer], stake weight, Service URI, TicketBroker, probabilistic micropayment, pricePerUnit [verify-against: go-livepeer latest tagged release], AI inference, transcoding, dual mode, O-T split, pool, pool node, aiModels.json [verify-against: go-livepeer latest tagged release], warm model [verify-against: go-livepeer latest tagged release], reward call [verify-live: Livepeer Explorer], fee cut [verify-live: Livepeer Explorer], reward cut [verify-live: Livepeer Explorer]]  
**Generated**: 2026-03-23  
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`  
**TERMINOLOGY_LOCK**: `[Orchestrator, Gateway, LPT, Active Set [verify-live: Livepeer Explorer], stake weight, Service URI, TicketBroker, probabilistic micropayment, pricePerUnit [verify-against: go-livepeer latest tagged release], AI inference, transcoding, dual mode, O-T split, pool, pool node, aiModels.json [verify-against: go-livepeer latest tagged release], warm model [verify-against: go-livepeer latest tagged release], reward call [verify-live: Livepeer Explorer], fee cut [verify-live: Livepeer Explorer], reward cut [verify-live: Livepeer Explorer]]`

1. This audience calls themselves: GPU operators, node operators, or infrastructure operators.
2. Core job actions: provision hardware; connect machines to the network; set pricing; keep jobs flowing reliably; earn from compute without getting filtered out.
3. Terms with network-specific meanings that differ from industry default:
   - **Orchestrator** — not just a generic scheduler; it is the supply-side Livepeer node that receives work from gateways and earns protocol-linked rewards and fees.
   - **Gateway** — not a generic API proxy; it is the demand-side network actor that routes jobs and payments to orchestrators.
   - **Active Set** — not a general “currently online nodes” list; it is a stake-ranked eligibility set for video work and its size is governance-sensitive, so it must be treated as live state.
   - **probabilistic micropayment** — not ordinary per-request settlement; payment is ticket-based and only winning tickets settle on-chain.
   - **reward call / fee cut / reward cut** — these are protocol-specific operator economics controls, not generic payout settings, and live values should be verified before publication.

---

## Arriving Question

> "Given my hardware, capital, and goals, what is the right way for me to run supply on Livepeer — and what do I need to do first to start earning work reliably?"

---

## Personas

_Assumption: no analytics data was provided, so scoring is reasoned from the Product Context, tab scope, and the glossary’s apparent depth of coverage for each path._

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Independent operator choosing a viable path | Home/role tab CTA, search, referral from community | GPU hardware, some DevOps confidence, unclear whether solo, pool, video, AI, or dual mode is viable | a clear operating path and a first working setup plan | 3 | 3 | 3 | 9 |
| 2 | Existing video operator expanding into AI | Search, Discord/forum link, upgrade-related referral | running or familiar with transcoding, but unclear on AI inference config, model handling, and routing | a concrete AI expansion plan with config and operational changes required | 2 | 3 | 3 | 8 |
| 3 | Capital-constrained operator deciding between solo and pool participation | Search, community referral, another operator’s link | hardware but insufficient LPT to compete independently for video work | a decision on whether to join a pool, run AI-first, or delay solo operation | 3 | 2 | 3 | 8 |
| 4 | Pool operator scaling beyond one machine | Discord/forum link, operations troubleshooting trail | one working node and demand for more capacity or redundancy | a scalable pool architecture and operating model | 2 | 3 | 2 | 7 |
| 5 | Live operator tuning economics and reliability | Bookmark/return visit, search | running supply already, but underperforming on work acquisition, uptime, or economics | specific levers to improve selection, reliability, and earnings | 2 | 3 | 2 | 7 |

**Primary persona**: Independent operator choosing a viable path — this persona drives section structure.  
**Self-identification**: “node operator” or “GPU operator” can describe multiple materially different paths with different setup and economics, so a **dedicated disambiguation section is required** as the first content section.  
**Entry blockers**:
- Path ambiguity: reader cannot tell whether they should run solo, join a pool, run video, run AI, or run dual mode.
- Capital barrier: insufficient LPT can block independent video competitiveness.
- Reachability barrier: a node cannot receive routed work if networking and Service URI are not viable.
- Operational barrier: payment and reward mechanics must be understood before production assumptions are made.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | When I first arrive with hardware but no clear operating model | determine which path fits my constraints | avoid building the wrong node |
| 2 | When I am deciding whether this is economically viable | understand what drives work allocation and earnings | judge whether solo operation is realistic |
| 3 | When I choose a path | complete the minimum setup for that path | receive and process live work |
| 4 | When I move from video-only to broader supply | add AI inference or dual mode safely | expand earning opportunities without breaking my existing node |
| 5 | When I am not getting enough work | identify the pricing, stake, capability, or reliability reason | fix the bottleneck instead of guessing |
| 6 | When I am scaling beyond one machine | choose a pool or split architecture | increase capacity without creating operational fragility |
| 7 | When I return later | look up exact economic and operational levers | tune a live system with confidence |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identify the right operating path | discover | Working out whether they should run solo, pool, video, AI, or dual mode |
| 2 | Judge viability and prerequisites | evaluate | Checking hardware, LPT, networking, and economic fit |
| 3 | Learn how work and money flow | evaluate | Mapping stake, routing, pricing, payment, and reward mechanics |
| 4 | Stand up the first node | setup | Completing the first working configuration |
| 5 | Verify reachability and readiness | setup | Confirming the node can actually receive and complete work |
| 6 | Run live supply reliably | operate | Managing day-to-day operations, uptime, payments, and rewards |
| 7 | Improve selection and returns | optimise | Tuning the live node for throughput, reliability, and economics |
| 8 | Expand architecture or workload mix | optimise | Adding AI, dual mode, O-T split, or pool scale |

**On-demand**:
- Current live eligibility and Active Set details
- Exact pricing levers and price parameter meanings
- Payment ticket and redemption mechanics
- Reward timing, reward call, fee cut, and reward cut details
- Hardware and workload fit by path
- AI model configuration and warm-model behaviour
- Reachability and Service URI requirements
- Pool and O-T split connection parameters
- Common failure modes for low work volume
- Monitoring and performance signals to watch

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| From | Home → Orchestrators | Reader has identified as supply-side infrastructure |
| From | About → Orchestrators | Reader understands the network conceptually and now wants to operate supply |
| From | Community → Orchestrators | Reader has arrived from ecosystem discussion or operator conversation |
| To | Orchestrators → Delegators | Reader needs the full staking/delegation and governance depth from the delegator side |
| To | Orchestrators → Gateways | Reader needs demand-side routing, buyer logic, or bilateral pricing context |
| To | Orchestrators → Developers | Reader wants to build custom AI or video flows rather than just operate supply |
| To | Orchestrators → Resource HUB | Reader needs glossary, changelog, or reference collections |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Choose your operating path | Which operating path actually fits my hardware, stake, and goals? | 1 | orient | navigation | Reader knows they want to supply compute but not which path applies | has identified the correct setup path for their situation | discover |
| 2. Is solo operation viable for me? | Can I realistically compete independently, or should I join a pool or start with a narrower path? | 2 | choose | guide | Reader knows their candidate path | has decided solo vs pool participation and video vs AI vs dual mode | evaluate |
| 3. How does work reach me and how do I get paid? | What determines whether gateways send me jobs, and how do fees and rewards actually arrive? | 2 | explain | concept | Reader has chosen a path but does not yet understand the operating economics | can judge what levers matter before configuring a live node | evaluate |
| 4. What must be true before setup? | What hardware, stake, network access, and account prerequisites do I need in place first? | 3 | configure | guide | Reader understands the target path and economics | has assembled all prerequisites required to begin setup | evaluate |
| 5. How do I stand up the first working node? | What exact sequence gets my node online for the path I chose? | 3 | start | instruction | Reader has prerequisites in place | has a first working node running in the chosen mode | setup |
| 6. How do I verify that the node is actually routable and ready? | How do I confirm that my node is reachable, configured correctly, and capable of receiving work? | 3 | verify | guide | Reader has a running node | has confirmed the node is operational and externally usable | setup |
| 7. How do I run it day to day without losing money or rewards? | What do I need to monitor and maintain once this is live? | 6 | operate | guide | Reader has a verified node | can run the node as an ongoing service with routine operational checks | operate |
| 8. How do I get more work or better returns? | If work volume or returns are weak, what should I tune first? | 5 | optimise | guide | Reader has a live node and some operating data | can change the right levers to improve selection, reliability, or economics | optimise |
| 9. How do I add AI, dual mode, or scale-out architecture? | When should I add AI inference, dual mode, O-T split, or a pool structure? | 4 / 6 | choose | guide | Reader has one stable operating path | has decided the right expansion architecture and knows what changes it requires | optimise |
| 10. How do I implement scale or expansion safely? | What do I need to change to move from one machine to pool or split architecture without breaking service? | 4 / 6 | build | guide | Reader has chosen an expansion path | has completed the required architecture changes for scale or workload expansion | optimise |
| 11. Operator reference | What exact parameters, terms, and live checks do I need to look up quickly? | 7 | reference | reference | Reader is already operating or tuning | can retrieve the exact fact or parameter needed without rereading narrative content | operate |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Independent operator choosing a viable path | 1. Choose your operating path | 6. How do I verify that the node is actually routable and ready? | None | Needs plain-language explanation in Section 1 before protocol terms appear | None |
| Existing video operator expanding into AI | 3. How does work reach me and how do I get paid? | 10. How do I implement scale or expansion safely? | None | Section 9 must clearly separate “add AI” from “add scale” so expansion choice is obvious | None |
| Capital-constrained operator deciding between solo and pool participation | 1. Choose your operating path | 5. How do I stand up the first working node? | None | Section 2 must state clearly when insufficient LPT changes the recommended path | None |
| Pool operator scaling beyond one machine | 9. How do I add AI, dual mode, or scale-out architecture? | 10. How do I implement scale or expansion safely? | None | Section 10 must include role split and trust boundary content, not just mechanical steps | None |
| Live operator tuning economics and reliability | 7. How do I run it day to day without losing money or rewards? | 11. Operator reference | None | Section 8 must distinguish low demand, low selection, and low margin as separate tuning problems | None |

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation section added if required?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2]**: The per-tab glossary contains at least one direct source conflict. It assigns **LIP-92** to AI capability discovery, but the current LIPs index shows **LIP-92 = Treasury Contribution Percentage**. I treated the glossary claim as incorrect and excluded that specific mapping from the lock.
- **[Phase 0 / Step 0.2]**: `deprecated-terms.md` says **Pool worker** has been renamed to **pool node**, but the orchestrators glossary still uses “Pool Worker” as the main term. I normalised to **pool node** in the lock and structure.
- **[Phase 0 / Step 0.2]**: Several glossary entries cite exact flags or live values, but the source authority registry requires those to be checked against the latest tagged `go-livepeer` release or live on-chain state. I therefore marked `pricePerUnit`, `aiModels.json`, `warm model`, `reward call`, `fee cut`, `reward cut`, and `Active Set` as verification-sensitive.
- **[Phase 0 / Web check]**: Recent primary-source confirmation found that the latest tagged `go-livepeer` release is **v0.8.10** on 2026-03-10, which reinforces the brief’s instruction to verify current CLI/config behaviour against the latest tagged release rather than older docs or `main`.
- **[Phase 0 / Web check]**: [SUGGESTED SOURCE: go-livepeer Releases — GitHub releases page — latest tagged release history, release dates, and change summaries for config/AI surface verification — suggested tier: primary adjunct to the repo tag source].
- **[Phase 1 / Scoring]**: The brief does not provide analytics. I assumed the broadest and highest-impact entry state is the operator who knows they want to supply compute but does not yet know which path is viable; that assumption drove the choice to make disambiguation the first content section.
- **[Phase 2C / Structure]**: The brief excludes universal portal/index/resources elements, but the orchestrator audience clearly needs a dense quick-reference surface. I kept that need as **Operator reference** inside the designed content structure because the tab’s return-visit behaviour depends on it.
- **[Phase 2C / Structure]**: The strongest structural insight from this run is that this tab should be organised around **path choice first**, not around protocol concepts first. Without that, solo/pool and video/AI/dual readers get intermixed too early.

## Brief feedback

- The brief explicitly requires an output document and output filename, but it does not explicitly state whether the assistant should also return it as an attached downloadable file in chat. I should still have done that because you asked to execute the brief and the filename/output requirement strongly implies a concrete artifact, not just inline text.
- The brief could be tighter by explicitly saying: “Return the final document inline **and** as a downloadable `.md` artifact named exactly as specified.”
