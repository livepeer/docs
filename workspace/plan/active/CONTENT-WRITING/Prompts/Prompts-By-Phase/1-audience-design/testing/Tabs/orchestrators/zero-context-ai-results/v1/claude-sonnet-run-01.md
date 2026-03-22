# Orchestrators — Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**TERMINOLOGY_LOCK**: `LPT, active set, stake weight, reward cut, fee cut, go-livepeer, AI inference, transcoding, probabilistic micropayment, performance score, service URI, pool, dual mode, reward call, capability advertisement`
**Generated**: 2026-03-22
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `orchestrator`

**TERMINOLOGY_LOCK**: `LPT, active set, stake weight, reward cut, fee cut, go-livepeer, AI inference, transcoding, probabilistic micropayment, performance score, service URI, pool, dual mode, reward call, capability advertisement`

1. **This audience calls themselves**: GPU operators, node operators, or compute providers. In the GPU mining and infrastructure community they identify as operators or node runners — not "orchestrators," which is Livepeer's protocol-specific label for the role.

2. **Core job actions** (in their language):
   - Connect GPU hardware to a network and keep it earning
   - Set and adjust pricing so the hardware stays competitive
   - Monitor job throughput and fix failures before they erode reputation
   - Accumulate stake (or attract delegated stake) so the node stays in the competitive set
   - Decide which workload types to serve and configure the node accordingly

3. **Terms with Livepeer-specific meanings that differ from the industry default**:
   - **Active set**: In most distributed systems "active set" is informal. In Livepeer it is a formally defined, stake-ranked list of exactly 100 orchestrators eligible for video transcoding work in a given round. Being outside it is not a degraded state for AI inference (AI routing does not require active set membership), but it is a hard exclusion from video work. This distinction is non-obvious and must be explained before use.
   - **Reward call**: Industry default would interpret "reward call" as receiving a payment passively. In Livepeer it is an on-chain transaction the orchestrator must actively submit once per round to mint inflation rewards. Missing it permanently forfeits that round's rewards. The active obligation is easily missed.
   - **Probabilistic micropayment**: No industry-default meaning. This is a lottery-ticket payment scheme unique to the Livepeer protocol where most tickets carry no immediate cash value; only winning tickets are redeemable on-chain. Operators accustomed to direct per-job payments will find this counter-intuitive.
   - **Stake weight**: In standard proof-of-stake contexts this describes a validator's proportional voting power. In Livepeer it also directly controls which orchestrators receive video transcoding work (active set rank) and the share of inflationary LPT rewards — it is simultaneously a work-routing mechanism and an earnings multiplier. Its dual function needs explicit introduction.
   - **Capability advertisement**: Has no meaningful industry parallel. It is the mechanism by which an orchestrator tells gateways what AI pipelines and models it can serve, either on-chain via a registry contract or off-chain via webhook. A new operator would assume their node is discovered automatically by running it; the requirement to advertise capabilities is a non-obvious activation step.

---

## Arriving Question

> "I have GPU hardware — can I connect it to this network and earn from it, and if so, what do I need to do first?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with |
|---|---|---|---|---|
| 1 | GPU operator evaluating supply-side participation | Search result or external article about GPU monetisation / decentralised compute | General knowledge that Livepeer pays GPU operators; no understanding of stake, roles, or activation requirements | A clear decision: this is viable for my hardware and situation, and I know the next concrete step to take |
| 2 | Crypto-native node runner ready to activate | Discord/forum link or another operator's referral; already holds or can acquire LPT | Understands the stake/reward model in outline; ready to set up a node but needs the specific activation sequence | A running node registered on-chain, advertising its service URI, and receiving its first job |
| 3 | Existing video-only operator expanding into AI inference | Homepage or AI-focused changelog/announcement link | Already operating a Livepeer node for video transcoding; wants to add AI workloads without disrupting existing setup | Confirmed dual mode configuration running, AI capabilities advertised, and first AI job completed |
| 4 | GPU contributor joining an existing pool | Community/Discord link from pool operator or forum | Has GPU hardware but insufficient LPT to self-stake into the active set; knows they want to contribute compute without on-chain setup burden | Connected as a pool node to an operator they trust, contributing compute and receiving earnings |
| 5 | Operational return visitor | Direct URL / bookmark | Running orchestrator in production; encountered a specific problem or needs to verify a configuration parameter | The exact parameter value, flag name, or diagnostic answer they came for |

**Self-identification**: Operators use labels like "GPU operator", "node runner", or "compute provider". The label "orchestrator" maps cleanly to one audience token, but within that audience there are at least two structurally different situations: operators who self-stake and operate solo (Personas 1, 2, 3) and operators who contribute GPU compute under another entity's stake (Persona 4). These two paths diverge at setup: solo operators must acquire LPT and perform on-chain activation; pool nodes do not. **Disambiguation required**: a routing section at the start of the tab must separate "I want to run my own node" from "I want to join an existing pool" before any setup content. Flag: disambiguation routing page needed as the tab's first content section.

**Entry blockers**:
- **LPT acquisition and staking** is a hard-stop blocker for solo operators (Personas 1, 2, 3). No solo orchestrator can enter the active set or earn video transcoding rewards without bonded LPT. The section explaining stake requirements must come before the section describing node setup — an operator who builds the full setup first and only then discovers the stake requirement has been blocked after significant effort.
- **Hardware requirements** (GPU with sufficient VRAM) is a hard-stop blocker for AI inference work. An operator without a compatible GPU cannot run AI pipelines regardless of stake. Hardware requirements must be surfaced in the evaluation section before any AI setup instructions.
- **Public network reachability** (a valid service URI reachable from the internet) is a hard-stop blocker for receiving any jobs. An operator whose machine cannot be reached externally will never receive work. This must be resolved before or during setup, not discovered post-activation.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I am evaluating whether to connect my GPU hardware to this network | understand exactly what stake I need, what hardware qualifies, and what I will realistically earn | make a yes/no decision with confidence before committing time or capital |
| 2 | I have decided to participate and am setting up for the first time | follow a complete activation sequence from hardware to first job received | reach a working state in one session without missing a step that blocks me later |
| 3 | My node is running but I am not receiving work | diagnose why — whether it is a pricing issue, a capability advertisement gap, a stake position problem, or a reachability failure | restore job flow without guessing between unrelated causes |
| 4 | I want to add AI inference to my existing video transcoding node | configure dual mode, load the correct models, and advertise my AI capabilities | earn from AI jobs without disrupting my existing video transcoding revenue |
| 5 | I want to improve my earnings from a running node | understand the levers available — pricing, stake growth, reward cut, and performance score — and adjust them rationally | increase revenue without accidentally making my node less competitive |
| 6 | I need to verify my node is correctly set up after a configuration change | run a known check sequence against each critical component (reachability, capabilities, stake, reward automation) | confirm the node is ready before I walk away, without waiting for job failures to surface problems |
| 7 | I am returning to look up a specific parameter or protocol rule | find the exact value, flag name, or contract behaviour without reading surrounding narrative | apply it immediately and close the tab |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Deciding whether this network is right for their hardware and situation | `evaluate` | Reading about what orchestrators do, what stake is required, what hardware qualifies, and what earnings look like — forming a go/no-go decision |
| 2 | Choosing their participation path | `evaluate` | Deciding between running a solo node (requires LPT stake) and joining an existing pool as a pool node (no stake required) — understanding the trade-offs of each |
| 3 | Acquiring stake and preparing on-chain identity | `setup` | Getting the LPT required to enter the active set (or confirming pool path), setting up an Ethereum wallet, and funding for gas on Arbitrum |
| 4 | Installing and configuring the node software | `setup` | Downloading and configuring go-livepeer, setting up the service URI, configuring pricing, and connecting to the network |
| 5 | Activating on-chain and verifying the node is reachable | `setup` | Registering the service URI, bonding LPT, and confirming the node appears in the active set and is reachable by gateways |
| 6 | Configuring the workload type and advertising capabilities | `build` | Choosing video, AI, or dual mode; configuring AI model files and capability advertisement if running AI workloads |
| 7 | Reaching first job and verifying correct operation | `build` | Confirming the node receives, processes, and settles its first job successfully; verifying reward call automation is in place |
| 8 | Operating the node day-to-day | `operate` | Monitoring throughput, performance score, and earnings; running reward calls; keeping software current; adjusting pricing as market conditions change |
| 9 | Improving a running node | `optimise` | Analysing earnings against hardware cost; adjusting reward cut and fee cut to manage delegator relationships; tuning pricing and model selection for AI workloads |

**On-demand**:
- Specific CLI flag names and their default values
- Current active set size and the stake required to enter it
- Reward call timing, gas cost estimates, and automation methods
- Pricing calculation for a given hardware configuration and GPU generation
- AI model IDs and VRAM requirements for each supported pipeline
- orchSecret setup and O-T split configuration parameters
- Contract addresses and the on-chain activation transaction sequence
- Performance score calculation method and how to interpret a declining score

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | Reader identified as a GPU operator from the homepage routing |
| Inbound | About → Orchestrators | Reader finished reading protocol/tokenomics context and is ready to act as an operator |
| Inbound | Community → Orchestrators | Reader encountered an operator community and wants the technical setup path |
| Inbound | External (search, Discord, articles) → Orchestrators | Most common entry — operator arrived from outside the docs site entirely |
| Outbound | Orchestrators → Delegators | Operator wants to understand delegation dynamics to set competitive reward cut and fee cut |
| Outbound | Orchestrators → Gateways | Operator wants to understand how gateways select orchestrators — pricing, routing, and capability matching — to optimise selection |
| Outbound | Orchestrators → About | Operator wants deeper protocol economics or governance context than is appropriate to repeat in this tab |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| What orchestrators do and how they earn | "What exactly does running an orchestrator involve, and how does the money actually work?" | Job 1 — evaluate viability before committing | `explain` | `concept` | Arrived knowing GPU hardware can earn on this network; does not yet know the mechanism, roles, or stake requirement | Has decided whether the earnings model and role responsibilities are a fit for their situation; can articulate the three levers (stake, pricing, performance) and what each controls | `evaluate` |
| Hardware and stake requirements | "Do I have — or can I get — what I need to participate?" | Job 1 — evaluate viability before committing | `evaluate` | `concept` | Understands how orchestrators earn; does not yet know minimum hardware specs or stake thresholds | Has confirmed whether their GPU generation and VRAM qualify, and whether they can reach the stake level needed for the active set; has made a participation path decision (solo vs pool) | `evaluate` |
| Choosing a participation path: solo node or pool node | "Should I run my own node or join an existing pool?" | Job 1 — evaluate viability; Job 2 — set up for the first time | `choose` | `guide` | Understands earnings model and requirements; aware two paths exist | Has chosen either the solo node path or the pool node path and knows the first concrete action on that path | `evaluate` |
| Acquiring LPT and setting up your on-chain identity *(solo path)* | "How do I get the LPT I need and set up my wallet before I touch the node software?" | Job 2 — complete activation sequence | `start` | `instruction` | Has decided on the solo node path; does not yet have LPT or an Arbitrum-funded wallet | Has acquired LPT, has an Ethereum wallet configured for Arbitrum, and has funded it with ETH for gas — ready to proceed to node setup | `setup` |
| Installing and configuring go-livepeer | "What do I actually install, and how do I configure it before starting it?" | Job 2 — complete activation sequence | `configure` | `instruction` | Has LPT and wallet ready (solo path) or has pool operator connection details (pool path); does not yet have software installed | Has go-livepeer installed, basic flags configured (service URI, pricing, workload type), and the node running locally | `setup` |
| Activating on-chain and confirming reachability | "How do I register my node on-chain and verify that gateways can actually reach it?" | Job 2 — complete activation sequence; Job 6 — verify correct setup | `verify` | `instruction` | Has go-livepeer running locally with configuration set | Has bonded LPT, registered the service URI, confirmed the node is visible in the active set, and verified external reachability | `setup` |
| Configuring AI workloads and advertising capabilities | "How do I set up AI pipelines, and how do gateways discover that I can serve them?" | Job 4 — add AI inference to an existing node | `configure` | `instruction` | Has a running and activated node (video mode or new); has compatible GPU hardware for AI | Has configured aiModels.json with at least one pipeline and warm model, enabled capability advertisement, and confirmed an AI job completes end-to-end | `build` |
| Reaching your first job and verifying settlement | "How do I know my node is working and actually earning?" | Job 2 — complete activation; Job 6 — verify correct setup | `verify` | `instruction` | Has an activated, reachable node with capabilities advertised | Has observed at least one successful job, confirmed settlement via the probabilistic micropayment system, and confirmed reward call automation is in place | `build` |
| Operating your node day-to-day | "What do I need to check regularly, and what breaks if I ignore it?" | Job 3 — diagnose why work stopped; Job 5 — improve earnings from a running node | `operate` | `guide` | Has a working node in production; wants a repeatable operational routine | Has a defined set of daily/weekly checks in place, has automated the reward call, and can identify the three most common failure modes from log output alone | `operate` |
| Diagnosing and fixing common problems | "My node stopped receiving work — where do I start?" | Job 3 — diagnose why work stopped | `troubleshoot` | `guide` | Has a running node that is underperforming or not receiving jobs; knows something is wrong but not what | Has identified which of the four root-cause categories (pricing, stake/active set position, reachability, capability advertisement) is causing the problem, and has taken the corrective action for it | `troubleshoot` |
| Improving your earnings | "What are the actual levers I can pull, and what is the trade-off of each?" | Job 5 — improve earnings from a running node | `optimise` | `guide` | Has a working node that is earning; wants to do better | Has adjusted at least one lever (pricing, reward cut, fee cut, or model selection) with a clear hypothesis and knows how to measure the result | `optimise` |
| Configuration and CLI reference | "What is the exact flag name / default value / parameter range for X?" | Job 7 — look up a specific parameter | `reference` | `reference` | Returning visitor who knows what they are looking for | Has found the exact value or parameter definition needed and can apply it without reading surrounding content | `operate` |

*Note on cross-tab gate*: Protocol economics depth (tokenomics, inflation model, governance mechanics, treasury) is owned by the About tab. Each section above that touches these topics introduces the concept in the context of operator decision-making and links to About for depth — it does not reproduce About's canonical content. Delegation mechanics and delegator perspective on reward cut and fee cut are owned by the Delegators tab; the "Improving your earnings" and "What orchestrators do" sections reference these levers and link out rather than explaining the delegator side in full. Gateway selection and routing logic is owned by the Gateways tab; the "Capability advertisement" and "Diagnosing problems" sections describe the operator-facing side only and link to Gateways for the demand-side view.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Blocked at | Gap |
|---|---|---|---|---|
| 1 — GPU operator evaluating participation | What orchestrators do and how they earn | Choosing a participation path | None — hardware/stake requirements section resolves the stake blocker before setup content begins | None |
| 2 — Crypto-native node runner ready to activate | Choosing a participation path (skips evaluation, already decided) | Reaching your first job and verifying settlement | None — LPT acquisition section resolves on-chain funding blocker before node setup; reachability section resolves network blocker before job reception | None |
| 3 — Existing video-only operator expanding into AI | Configuring AI workloads and advertising capabilities | Reaching your first job and verifying settlement | Hardware requirements check needed before AI configuration — resolved by hardware and stake requirements section appearing earlier in the structure; operator can re-enter there if needed | None — hardware section covers VRAM requirements for AI |
| 4 — Pool node contributor | Choosing a participation path | Installing and configuring go-livepeer (pool path variant) | None — the participation path section explicitly routes pool contributors away from the LPT acquisition step; pool-specific configuration is covered in the install section | Pool path variant of install/configuration section must contain pool-specific flags (-orchAddr, -orchSecret) and not require on-chain activation steps. This is addressed within the install section scope, not a missing section. |
| 5 — Operational return visitor | Configuration and CLI reference (or Operating your node day-to-day, or Diagnosing common problems — depending on purpose) | Same section they entered | None | None — all three destination sections exist in the structure |

All personas have complete, unblocked paths through the structure.

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + per-tab glossary only — no training-data additions?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation page flagged if needed?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — no content duplicated from other tabs?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?
