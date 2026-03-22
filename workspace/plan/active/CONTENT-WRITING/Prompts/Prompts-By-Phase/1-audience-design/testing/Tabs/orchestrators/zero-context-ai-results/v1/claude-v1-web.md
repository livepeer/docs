# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**TERMINOLOGY_LOCK**: `Active Set, LPT, Bonding, Reward Call, Reward Cut, Fee Cut, Performance Score, Dual Mode, Pool, Pool Worker, Capability Advertisement, Probabilistic Micropayment, go-livepeer, AI Runner, aiModels.json, VRAM, Transcoding, O-T Split, Yield`
**Generated**: 2026-03-22
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**: `Active Set, LPT, Bonding, Reward Call, Reward Cut, Fee Cut, Performance Score, Dual Mode, Pool, Pool Worker, Capability Advertisement, Probabilistic Micropayment, go-livepeer, AI Runner, aiModels.json, VRAM, Transcoding, O-T Split, Yield`

1. **This audience calls themselves**: GPU operators, node operators, or compute providers. Operators who have worked in crypto mining or GPU rental markets may say "miner" or "host." Those coming from ML infrastructure say "inference provider." The Livepeer-specific label "orchestrator" is not how they identify before arriving — it is a term they will learn here.

2. **Core job actions** (in their own language):
   - Point GPU hardware at a network and make it earn
   - Keep nodes online and healthy so they keep getting work
   - Set prices that win enough jobs to cover costs and turn profit
   - Scale hardware up or swap between workload types as demand shifts
   - Claim earnings and keep the on-chain accounting tidy

3. **Terms with Livepeer-specific meanings that differ from industry default** (must be explained before use):
   - **Active Set** — in most contexts "active" simply means "running." In Livepeer it means specifically the top 100 orchestrators by total bonded LPT eligible for _video_ transcoding work. An operator's node can be running and receiving AI inference work without being in the Active Set. This distinction is non-obvious and will cause confusion if not flagged explicitly.
   - **Bonding** — in general finance, bonding means issuing debt. In Livepeer (and most DPoS protocols), it means locking tokens as stake. Operators familiar with PoW mining have no prior frame for this; operators from PoS staking contexts will have a frame but need to understand the delegation model specifically.
   - **Reward Call** — has no industry analogue. Operators cannot assume rewards are automatic; they must submit an on-chain transaction once per round or forfeit that round's inflation. This is a critical operational requirement with no parallel in cloud compute or mining.
   - **Probabilistic Micropayment** — not how cloud compute is paid. Operators accustomed to invoicing or per-job settlement need to understand the lottery-ticket payment model before they can reason about cash flow, float, or redemption strategy.
   - **Performance Score** — not a self-reported metric. It is calculated by gateways from the operator's actual latency and success rate, and it directly affects whether they receive future jobs. Operators who conflate this with a dashboard metric they control will be confused by how work routing actually works.

---

## Arriving Question

> "I have GPU hardware — can I actually earn money running it on this network, and what do I have to do to get there?"

---

## Personas

| Rank | Persona                                 | Entry vector                                                                                      | Arriving with                                                                                                                                                                                  | Wants to leave with                                                                                                                        |
| ---- | --------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | **The Hardware Investor**               | Search ("GPU compute network earn," "run Livepeer node"), or referral from a crypto/GPU community | GPU hardware already deployed or planned, some familiarity with staking concepts from other chains, no Livepeer-specific knowledge, economic question is front-and-centre: "is this worth it?" | A concrete earnings estimate for their specific hardware and stake position, and a decision on whether to proceed                          |
| 2    | **The Transitioning Miner**             | Discord or forum link, often after a mining profitability drop event (e.g. post-Ethereum merge)   | Operational GPU infrastructure, experience running nodes and monitoring hardware, unfamiliar with DPoS staking and probabilistic payment, skeptical about new learning curve                   | A running node earning real income, with the staking and payment model understood well enough to operate independently                     |
| 3    | **The ML Infrastructure Operator**      | Livepeer blog post, AI-track conference talk, or referral from an ML community                    | Strong AI/GPU technical background, comfort with model configuration and containerised workloads, no knowledge of Livepeer protocol, token mechanics, or video transcoding                     | A node configured for AI inference pipelines, with model warmth and pricing set up, earning AI inference fees                              |
| 4    | **The Pool Worker**                     | Direct referral from a pool operator, or community post about joining an existing pool            | GPU hardware, no LPT, no desire to manage on-chain operations                                                                                                                                  | Configured as a pool worker connected to a specific operator's orchestrator, earning off-chain payouts without requiring token acquisition |
| 5    | **The Running Operator** (return visit) | Bookmark, direct URL, internal search                                                             | An already-running node; a specific problem, configuration question, or optimisation goal                                                                                                      | A specific answer: CLI flag value, pricing calculation, troubleshooting resolution, or governance context                                  |

**Self-identification**: This audience self-identifies as "node operator," "GPU operator," or simply "operator." The label "orchestrator" is Livepeer-specific and learned on arrival. The single label "operator" could describe personas 1–3 with substantially different needs and entry states. **Disambiguation is required**: a reader arriving knowing only that they want to "run a node" cannot be assumed to be on the solo-staking path — they may have no LPT, making the Pool Worker path the correct one. This tab requires an early routing section that separates the solo operator path (requires LPT) from the pool worker path (no LPT required).

**Entry blockers**:

- **Solo operator path**: acquiring and staking LPT is a hard-stop blocker before a node can enter the Active Set for video work. A reader who has not yet acquired LPT cannot complete setup and earn from transcoding without first resolving this. The section that explains LPT acquisition and bonding mechanics must appear _before_ the setup walkthrough.
- **AI-only path**: no LPT is required to receive AI inference work (the Active Set constraint does not apply to AI routing). This path must be clearly distinguished so operators who want to start with AI inference are not blocked by the staking requirement.
- **Pool Worker path**: no LPT or on-chain interaction required. This path must be reachable without passing through the LPT/bonding sections.

---

## Jobs to be Done

| #   | When...                                                                        | I want to...                                                                                             | So I can...                                                                        |
| --- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 1   | I have GPU hardware and have heard about Livepeer                              | evaluate whether the economics work for my specific situation (hardware type, stake level, workload mix) | decide whether to invest time setting this up before I touch a CLI                 |
| 2   | I have decided to proceed and have hardware ready                              | get a node running and earning in a single session without getting lost in advanced configuration        | prove the basic loop works before I commit further                                 |
| 3   | My node is running but I am not getting as much work as expected               | understand what gateways actually look at when they decide to route work to me                           | adjust my stake, pricing, or capability advertisement to start receiving more jobs |
| 4   | I want to run AI inference workloads alongside or instead of video transcoding | configure the AI runner, load models, and set per-pipeline pricing correctly                             | start earning from AI jobs without breaking my existing transcoding setup          |
| 5   | I am earning but my profitability is lower than expected                       | audit my pricing, reward cut, gas overhead, and redemption cadence against my actual on-chain activity   | identify and close the specific gap between expected and actual yield              |
| 6   | My hardware is outgrowing a single machine                                     | understand the pool architecture and how to add workers behind my orchestrator                           | scale capacity without changing my on-chain identity or staking position           |
| 7   | A protocol upgrade, governance vote, or new AI capability has been released    | find out what changed and whether it requires action on my node                                          | stay current without having to monitor every upstream repository                   |

---

## Ideal Journey

**Linear**:

| Position | Stage name                     | lifecycleStage | What they're doing                                                                                                                          |
| -------- | ------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | Making the call                | `evaluate`     | Assessing whether the network is worth entering — hardware fit, earning potential, staking requirements, and operational commitment         |
| 2        | Choosing their path            | `evaluate`     | Deciding between solo operation (requires LPT), AI-only operation (no LPT required), or pool worker participation (no LPT, no on-chain ops) |
| 3        | Getting prerequisites in place | `setup`        | Acquiring and staking LPT if on the solo path; preparing hardware, dependencies, and wallet regardless of path                              |
| 4        | Standing the node up           | `setup`        | Installing go-livepeer, running initial configuration, confirming the node is visible and receiving test jobs                               |
| 5        | Getting the economics right    | `build`        | Setting pricing, reward cut, fee cut, and capability advertisement to a viable starting configuration                                       |
| 6        | Confirming the loop closes     | `build`        | Verifying that work is being routed to the node, tickets are arriving, reward calls are landing, and earnings are accumulating correctly    |
| 7        | Running in production          | `operate`      | Day-to-day monitoring, reward calling, ticket redemption, and responding to gateway performance signals                                     |
| 8        | Growing and optimising         | `optimise`     | Adding AI pipelines, expanding to multi-GPU or pool architecture, tuning pricing strategy, and improving performance score                  |

**On-demand** (reference needs after the linear journey):

- Current CLI flag names, defaults, and valid values for go-livepeer
- Active Set size, current bonded LPT total, and gateway-visible performance metrics
- AI pipeline type identifiers and model IDs available for `aiModels.json` configuration
- Governance vote status and upcoming LIP decisions requiring operator action
- Gas cost estimates for reward calls and ticket redemption on current Arbitrum state
- Pricing benchmarks — what active orchestrators are charging per pixelsPerUnit by workload type
- Troubleshooting reference — common failure modes mapped to diagnostic steps

**Cross-tab**:

| Direction       | From / To      | Why                                                                                                                                               |
| --------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| → Orchestrators | From Home      | Homepage routes "run a node" CTA to Orchestrators                                                                                                 |
| → Orchestrators | From About     | Protocol economics and tokenomics depth sends readers here when they want to act                                                                  |
| → Orchestrators | From Community | Forum and Discord discussions about running nodes link here for technical depth                                                                   |
| Orchestrators → | To Delegators  | Operators setting reward cut and fee cut need to understand what delegators see when evaluating them; operators interested in delegating idle LPT |
| Orchestrators → | To Gateways    | Operators wanting to understand how gateways select them, set MaxPrice, and interpret performance score                                           |
| Orchestrators → | To About       | Protocol mechanics (LIP history, inflation model, governance structure) owned by About; introduce-and-link pattern                                |

---

## Ideal Section Structure

| Section                                                                                                         | Reader question                                                                                                      | Job                                                       | purpose     | pageType      | Entry state                                                                                                      | Exit state                                                                                                                                              | lifecycleStage |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------- | ------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **Which path is mine?**                                                                                         | "I want to run a node — do I need tokens first, or can I just plug in my GPU?"                                       | J1: evaluate economics and fit                            | `orient`    | `navigation`  | Reader knows they want to participate; doesn't know the solo/AI-only/pool distinction                            | Has identified which of the three paths applies to them and clicked through to path-specific content                                                    | `evaluate`     |
| **Is this worth it for my hardware?**                                                                           | "What can I realistically earn running my specific GPU setup at current network conditions?"                         | J1: evaluate economics and fit                            | `evaluate`  | `concept`     | Knows their hardware spec; does not yet know Livepeer economics or stake requirements                            | Has run or reviewed the earnings estimate tool with their own inputs and formed a go/no-go position                                                     | `evaluate`     |
| **How the network pays you**                                                                                    | "How does money actually move from a gateway to my wallet?"                                                          | J1 / J5: evaluate and audit profitability                 | `explain`   | `concept`     | Has decided to proceed; has not encountered probabilistic micropayment before                                    | Can describe the ticket → winning ticket → redemption flow and explain why most tickets don't hit their wallet immediately                              | `evaluate`     |
| **Staking and the Active Set**                                                                                  | "How much LPT do I need and what does staking actually do for me?"                                                   | J1: evaluate economics and fit                            | `explain`   | `concept`     | On the solo path; unfamiliar with DPoS staking or Active Set mechanics                                           | Has staked LPT (or confirmed a stake position plan) and can explain how Active Set rank affects work allocation                                         | `setup`        |
| _[CROSS-TAB: LPT acquisition mechanics — owned by Delegators / About — this section links, does not duplicate]_ |                                                                                                                      |                                                           |             |               |                                                                                                                  |                                                                                                                                                         |                |
| **Quickstart: Solo operator**                                                                                   | "What's the minimum I need to do to get a node running and receiving work?"                                          | J2: get a node running in one session                     | `start`     | `instruction` | Has hardware, has staked LPT, has installed dependencies                                                         | Has a running go-livepeer node visible on the network and confirmed as reachable by gateways                                                            | `setup`        |
| **Quickstart: AI-only operator**                                                                                | "How do I get an AI inference node running without staking anything?"                                                | J2: get a node running in one session                     | `start`     | `instruction` | Has GPU hardware with sufficient VRAM; no LPT; knows which AI pipelines they want to serve                       | Has a running AI Runner configured with at least one warm model and confirmed as receiving AI inference requests                                        | `setup`        |
| **Quickstart: Pool worker**                                                                                     | "How do I connect my GPU to an existing orchestrator's pool?"                                                        | J2: get a node running in one session                     | `start`     | `instruction` | Has hardware; has a pool operator address and orchSecret from their pool operator                                | Is connected to the pool operator's orchestrator, processing jobs, and receiving off-chain payouts                                                      | `setup`        |
| **Setting your price**                                                                                          | "What should I charge, and how do I set it without pricing myself out of work or leaving money on the table?"        | J3: understand routing decisions; J5: audit profitability | `configure` | `guide`       | Node is running; has not yet set a deliberate pricing strategy                                                   | Has set pricePerUnit, pixelsPerUnit, and (if running AI) pricePerCapability with a defensible rationale against current network benchmarks              | `build`        |
| **Reward cut and fee cut**                                                                                      | "What percentages should I set, and what happens to my delegators if I change them?"                                 | J5: audit profitability                                   | `configure` | `guide`       | Running node; unfamiliar with the cut mechanics or their effect on delegation attractiveness                     | Has set reward cut and fee cut values and can articulate the trade-off between retaining earnings and attracting delegation                             | `build`        |
| **Advertising your capabilities**                                                                               | "How do gateways know what I can process, and how do I make sure I show up in their routing decisions?"              | J3: understand routing decisions                          | `explain`   | `concept`     | Node is running; unclear on how capability advertisement and gateway discovery work                              | Has configured on-chain capability advertisement (AIServiceRegistry) or webhook discovery and confirmed gateway visibility                              | `build`        |
| **Confirming work is flowing**                                                                                  | "How do I verify the loop is actually closed — am I getting work, are tickets arriving, are rewards landing?"        | J2 / J5: get node running; audit profitability            | `verify`    | `instruction` | Setup complete; no confirmation yet that the full earning loop is functional                                     | Has checked each signal (gateway selection, ticket arrival, reward call success, fee accumulation) and confirmed or diagnosed any gap                   | `build`        |
| **Configuring AI pipelines**                                                                                    | "Which AI pipelines can I run on my GPU, how do I configure them, and what does the aiModels.json file need to say?" | J4: configure AI inference                                | `configure` | `guide`       | Has decided to add AI inference; has sufficient VRAM; not yet familiar with AI Runner or aiModels.json structure | Has a valid aiModels.json with at least one warm model configured, AI Runner running, and at least one test AI inference job completed successfully     | `build`        |
| **Running your node day-to-day**                                                                                | "What do I need to do on a regular basis to keep earning and stay in good standing?"                                 | J6: operate in production                                 | `operate`   | `guide`       | Node earning; no systematic operational practice established                                                     | Has a recurring routine covering reward calls, ticket redemption, performance monitoring, and log review                                                | `operate`      |
| **Understanding your performance score**                                                                        | "Why am I losing work, and how do gateways decide to stop or start routing to me?"                                   | J3: understand routing decisions                          | `explain`   | `concept`     | Operational node; experiencing unexpected drop in work volume or investigating routing behaviour                 | Has identified which factor (latency, success rate, price) is suppressing their score and has a specific action to address it                           | `operate`      |
| **Scaling to multiple GPUs or a pool**                                                                          | "How do I add more machines without duplicating my on-chain identity and staking overhead?"                          | J6: scale with pool architecture                          | `build`     | `guide`       | Single-node operator; wants to add capacity                                                                      | Has set up an O-T Split or pool architecture with at least one additional worker connected and confirmed receiving work                                 | `optimise`     |
| **Tuning profitability**                                                                                        | "I'm running, I'm earning, but my actual yield is lower than I expected — where's the gap?"                          | J5: audit profitability                                   | `optimise`  | `guide`       | Operational node with measurable earnings history; specific profitability concern                                | Has identified the specific gap (gas overhead, pricing mismatch, missed reward calls, suboptimal cut settings) and made a targeted configuration change | `optimise`     |
| **Staying current**                                                                                             | "There was a protocol upgrade / new AI pipeline / governance vote — what do I need to do?"                           | J7: stay current without monitoring every upstream repo   | `update`    | `resource`    | Operational node; notified of a change or returning to check for updates                                         | Has reviewed the relevant changelog or governance update and either confirmed no action required or completed required action                           | `operate`      |

---

## Persona Path Validation

| Persona                        | Enters at                                                                              | Exits at                                                              | Blocked at                                                                                                                                                                                                                                                                               | Gap                                                                                                         |
| ------------------------------ | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| The Hardware Investor          | "Which path is mine?"                                                                  | "Is this worth it for my hardware?" — forms go/no-go before any setup | None — the evaluation section exists before any setup requirement                                                                                                                                                                                                                        | None                                                                                                        |
| The Transitioning Miner        | "Which path is mine?" → Solo path → "Is this worth it?" → "Staking and the Active Set" | "Confirming work is flowing" — first earning confirmation             | Could be blocked at Staking if they arrive without LPT and there is no clear path to acquiring it. Resolved: cross-tab link to Delegators/About for acquisition, with explicit note in the Staking section that acquisition is covered there. No hard structural block in section order. | None                                                                                                        |
| The ML Infrastructure Operator | "Which path is mine?" → AI-only path                                                   | "Configuring AI pipelines" → "Confirming work is flowing"             | Could be confused by staking sections if they enter the wrong path. Resolved by routing page placing them directly on AI-only quickstart.                                                                                                                                                | None                                                                                                        |
| The Pool Worker                | "Which path is mine?" → Pool worker path                                               | "Quickstart: Pool worker"                                             | Blocked if they encounter LPT/bonding sections before finding the pool worker path. Resolved: routing page must be the first section, preceding all staking content.                                                                                                                     | None                                                                                                        |
| The Running Operator           | Any on-demand reference section                                                        | The specific section answering their question                         | None — on-demand sections cover the reference space                                                                                                                                                                                                                                      | "Staying current" section needed (already included). Changelog/governance index confirms no additional gap. |

---

## Quality Gate Verification

- [x] Arriving question is specific — not a topic, an actual question the reader would ask
- [x] At least 3 distinct personas, each with a different arriving state and entry vector (5 defined)
- [x] Self-identification check done — "operator" is ambiguous, disambiguation routing page flagged and placed first
- [x] Entry blockers identified — LPT hard-stop, AI-only path exception, and pool worker no-LPT path all resolved by section order
- [x] At least 5 jobs, first-principles, not derived from current nav structure (7 defined)
- [x] Every section has a reader question, job, entry state, and exit state
- [x] No exit state uses "understands" — all are concrete actions or decisions
- [x] Cross-tab gate applied to every section — LPT acquisition correctly routed to Delegators/About; no duplication
- [x] Persona path validation complete — every persona has an unblocked path
- [x] All enum values are from the canonical lists — no invented tokens

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + per-tab glossary only — no training-data additions?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation page flagged and placed as first section?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — LPT acquisition routed out; no content duplicated from other tabs?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

# Addendum / Flags

Now I have everything I need. Let me also read the truncated section of the brief.Now I have full context. Executing all phases.I now have sufficient coverage. Executing the full brief.I now have enough to execute the full brief. Writing the output document.Complete. A few things worth flagging from the run:

**Biggest structural finding — the routing page is load-bearing.** The self-identification check surfaced that "operator" covers three genuinely incompatible paths: solo (requires LPT), AI-only (no LPT, Active Set irrelevant), and pool worker (no LPT, no on-chain ops at all). If a pool worker lands on the staking sections first they have no actionable path. The routing section must be the literal first section — not a nice-to-have.

**Cross-tab gate caught one exclusion.** LPT acquisition mechanics (buying, bridging) were flagged as owned by Delegators/About. The Orchestrators tab introduces _why_ LPT matters for staking rank and links out — it does not reproduce the acquisition guide. Everything else the operator needs is self-contained here per the self-containment principle.

**One term from the TERMINOLOGY_LOCK needs disambiguation in copy.** "Active Set" is the highest-risk term in the tab — operators will encounter AI inference work flowing to their node _before_ they enter the Active Set (since AI routing bypasses the Active Set rank requirement). Any page that introduces Active Set needs to call this out explicitly, or the reader will wrongly conclude they cannot earn until they hit the top 100.

Here's everything I noticed, written inline against the relevant section of the brief. Grouped by severity.

---

**Structural ambiguities that affect output quality**

> `## Phase 0 — Terminology Anchoring`
> _Surface 5–10 terms that are central to this audience's work on the network_

The 5–10 cap is too tight for tabs with large, specific glossaries. The Orchestrators glossary has 123 terms, many with Livepeer-specific meanings that will appear throughout content. I hit 19 terms that are genuinely load-bearing before I applied the cap. Recommend raising to 10–20, or splitting the lock into a "core" set (used to constrain Phase 0 reasoning) and an "extended" set (available for use in Phase 2 section design without triggering the "introduce fresh" rule).

---

> `## Phase 2C — Ideal Section Structure`
> _Universal elements — do not include: Every tab has a portal/landing page, a secondary navigation page, and a resources/compendium section (FAQ, glossary)._

"Secondary navigation page" is undefined. It's not in the pageType enum, and it's not clear whether this refers to a section-level nav page (e.g. a "Getting Started" landing within the tab), a tab-level sub-nav, or something else. The exclusion rule is clear — don't include it — but without knowing what it is, there's a risk the AI designs content that belongs in this structural constant instead of creating it as a distinct section. Recommend defining "secondary navigation page" explicitly, or replacing the phrase with a concrete example.

---

> `## Phase 2C`
> _Cross-tab gate: before placing any section, confirm which tab owns this content in the site ownership map. If another tab owns it, replace the row with: [CROSS-TAB: content owned by {tab} — this section links, does not duplicate]_

The cross-tab gate instruction and the self-containment principle are in direct tension and the brief doesn't resolve it. Self-containment says: "Every piece of information a reader needs to achieve their goal must be present in their tab. Intentional duplication between tabs is correct." The cross-tab gate says: if another tab owns it, don't duplicate. The introduce-and-link exception partially resolves this, but "briefly introduce" is not defined — there's no guidance on how much is "brief" vs duplication. In practice I made a judgment call (LPT acquisition: link, don't duplicate), but a different AI run could legitimately decide the opposite. Recommend stating explicitly: the cross-tab gate applies to _deep-reference content_ (multi-step guides, canonical definitions), not to _contextual summaries_ that let the reader proceed without tab-switching.

---

**Underspecified rules that produce inconsistent outputs**

> `## Phase 1 — Persona Research`
> _Rank by volume (most common first)_

"Volume" is unverifiable from the inputs provided. The brief forbids training-data knowledge of the current docs site, but volume ranking requires knowing which persona type visits more frequently — which is either analytics data (not provided) or an inference from general knowledge about who runs GPU nodes. Recommend either removing the volume ranking requirement (order by dependency/journey instead), or explicitly permitting reasonable inference here as a named exception to the no-prior-knowledge rule.

---

> `## Phase 2B — Ideal Journey`
> _On-demand (information this audience returns for repeatedly, outside the linear sequence): List 4–8 types._

"Types" is not defined. In my run I interpreted this as categories of reference need (e.g. "current CLI flag values"), but it could reasonably mean page types, topic areas, or user intent patterns. The 4–8 range is also narrow for a tab like Orchestrators where return-visit reference needs are extensive. Recommend replacing "types" with a concrete example of what a good on-demand entry looks like, and consider loosening the upper bound.

---

> `## Phase 2D — Persona Path Validation`
> _"Blocked at": any section where this persona lacks the prerequisite knowledge or context to proceed — what's missing?_

The "Blocked at" column conflates two different kinds of block: (1) structural blocks where a section requires completing a prior section that doesn't exist yet (a gap), and (2) knowledge blocks where the persona doesn't understand a concept introduced in the section. These are resolved differently — the first by adding a section, the second by adding content within an existing section. Recommend splitting into two columns: "Structural block" and "Knowledge gap."

---

**Minor precision issues**

> `## Framework Enums — pageType`
> _`guide` — Practical understanding of a system_

The distinction between `guide` and `concept` is thin. "Concept: Explains a mechanism or system" vs "Guide: Practical understanding of a system" — in practice these are often the same reader goal approached at different depths. In my run I used `guide` for operational "how to set your price" content and `concept` for mechanism explanations, but I'm not confident that distinction would hold consistently across runs or authors. Recommend adding one concrete example to each definition, e.g. "Concept: how the probabilistic micropayment system works. Guide: how to configure your pricing for profitability."

---

> `## Output — Checkpoint`

The checkpoint is a self-attestation — the AI marks its own boxes. There's no instruction for what to do if a gate fails. Recommend adding: _"If any gate fails, do not produce the output document. Instead, list the failing gates and the specific corrections required."_ Currently the brief implies the document is always produced regardless.

---

> `## Phase 0 — No existing terminology rule`
> _All terminology — including what you call personas — must emerge from this prompt's reasoning only._

This rule applies to persona _names_ but the brief's own output template uses role labels in the persona table ("Rank | Persona | Entry vector...") without clarifying whether the persona name itself must be fresh or can use the TERMINOLOGY_LOCK terms. In my run I used descriptive coined phrases ("The Hardware Investor") which felt correct, but the constraint isn't explicit about persona naming specifically. A one-line clarification would prevent drift.
