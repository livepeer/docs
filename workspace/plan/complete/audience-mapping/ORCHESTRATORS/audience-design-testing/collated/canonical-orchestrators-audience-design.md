# Orchestrators — Canonical Audience Design

**Tab**: Orchestrators
**Audience**: `orchestrator`
**Synthesised from**:
- `v4-orchestrators-audience-design-agent.md` (RUN-A)
- `CLAUDEWEB-v4-orchestrators-audience-design.md` (RUN-B)
- `chatgpt-v4-orchestrators-audience-design.md` (RUN-C)
- `PERPLEXITY-TAB_ Orchestrators_TASK_ Execute the audience-desi.md` (RUN-D)
**Synthesised**: 2026-03-23
**Status**: CANONICAL — ready for Phase 2 input

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| Orchestrator | A GPU hardware operator who connects their machine to the Livepeer network, receives compute jobs from gateways, and earns ETH service fees plus LPT inflation rewards. The network's canonical term for this role — not the vocabulary operators arrive with. | — | 4/4 |
| LPT (Livepeer Token) | The network's ERC-20 staking and governance token. Orchestrators running video transcoding must hold and stake LPT to compete for active set eligibility. AI inference routing does not require LPT stake. | `[verify-live: https://explorer.livepeer.org]` for current staking amounts | 4/4 |
| Active Set | The governance-controlled group of top-ranked orchestrators by total bonded stake (self-stake plus delegated stake) eligible to receive video transcoding jobs in a given round. AI inference routing does not use active set selection. | `[verify-live: https://explorer.livepeer.org]` — size is governance-controlled; do not hard-code the value | 4/4 |
| Staking / Bonding | Locking LPT on-chain into the BondingManager contract to establish eligibility for video transcoding job routing and inflation reward distribution. The unbonding process has a governance-controlled delay. | `[verify-against: https://github.com/livepeer/protocol]` — BondingManager contract; `[verify-live: https://explorer.livepeer.org]` for unbonding delay | `[2-run consensus]` |
| Stake weight | Total bonded LPT (operator's own self-stake plus delegated stake from external delegators) determining active set rank, reward distribution share, and governance influence. | — | 4/4 |
| Reward cut | The percentage of LPT inflation rewards the orchestrator retains before distributing the remainder to delegators. Set on-chain by the orchestrator. | `[verify-live: https://explorer.livepeer.org]` | 4/4 |
| Fee cut | The percentage of ETH service fees the orchestrator retains before distributing the remainder to delegators. Set independently from reward cut. | `[verify-live: https://explorer.livepeer.org]` | 4/4 |
| Reward call | On-chain transaction (`Reward()`) submitted once per round by an active orchestrator to mint and claim their inflation share for that round. Missing it permanently forfeits that round's rewards — it is an active operational requirement, not a passive payout. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release — for automation flags and gas estimates | 4/4 |
| Gateway | The demand-side network node that routes AI or video transcoding jobs to orchestrators and issues payment. Selects orchestrators based on stake weight, performance score, and pricing. Not a generic API gateway — it is the primary source of work and payment for orchestrators. | — | 4/4 |
| Video transcoding | Converting live or on-demand video from one encoding format to multiple renditions at different resolutions and bitrates. One of two compute workload types on the network. Requires active set membership for stake-rank-based job routing. | — | 4/4 |
| AI inference | Running a trained machine learning model on input data to produce outputs (images, video, audio, text). The second compute workload type on the network. Routing is capability- and price-based, not stake-rank-based — active set membership is not required. | — | 4/4 |
| Dual mode | Deployment configuration where a single orchestrator process handles both video transcoding and AI inference simultaneously. Replaces deprecated terms "combined mode" and "hybrid." | `[verify-against: https://github.com/livepeer/go-livepeer]` for flag combinations | 4/4 |
| O-T split | The orchestrator–transcoder architectural separation (introduced in Streamflow) where the orchestrator process handles protocol interaction and job routing, and a separate worker process handles GPU compute. Foundation for pool and multi-machine architectures. | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` | 4/4 |
| Pool | An arrangement where operators with insufficient stake or preference for contributing GPU capacity without managing on-chain operations connect their machines to a pool operator's orchestrator. The pool operator holds stake and handles reward calling; pool nodes contribute compute and receive off-chain payouts. | `[verify-against: https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md]` | 4/4 |
| Pool node | An operator who contributes GPU capacity to an orchestrator pool rather than operating solo. Current term — "pool worker" is deprecated per `deprecated-terms.md`. | — | 4/4 |
| go-livepeer | The official Go binary implementing all Livepeer network roles. Orchestrators, pool nodes, and standalone workers all run different CLI flag combinations of the same binary. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release | 4/4 |
| Probabilistic micropayment (PM) | Lottery-based payment mechanism where gateways issue signed tickets; winning tickets are redeemed on-chain via the TicketBroker contract for ETH. Amortises per-job gas costs across many small payments. | `[verify-against: https://github.com/livepeer/protocol]` — TicketBroker contract; `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` | 4/4 |
| TicketBroker | The named on-chain contract that handles probabilistic micropayment ticket redemption and ETH payouts to orchestrators. | `[verify-against: https://github.com/livepeer/protocol]` — contract existence is a factual claim; `[verify-against: https://arbiscan.io/accounts/label/livepeer]` | `[2-run consensus]` |
| BondingManager | The named on-chain contract that manages staking, delegation, active set determination, and reward distribution. | `[verify-against: https://github.com/livepeer/protocol]` — contract existence is a factual claim; `[verify-against: https://arbiscan.io/accounts/label/livepeer]` | `[2-run consensus]` |
| Service URI | Publicly reachable URL registered on-chain (ServiceRegistry contract) that gateways use to discover and connect to an orchestrator node. A node without a reachable service URI cannot receive routed work. | `[verify-against: https://github.com/livepeer/go-livepeer]` — format and registration steps | 4/4 |
| Performance score | Composite metric (latency score × success rate) that gateways use alongside stake weight and price when selecting orchestrators. Acts as a soft routing factor with gateway-specific thresholds. | `[verify-against: https://github.com/livepeer/go-livepeer]` — specific formula is a technical claim | 4/4 |
| pricePerUnit / pixelsPerUnit | CLI parameters setting the orchestrator's transcoding price in wei per pixel unit. Gateways apply a hard MaxPrice gate — orchestrators priced above a gateway's threshold receive no work from that gateway. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release — flag names and defaults change between releases | 4/4 |
| Capability advertisement | The mechanism by which an orchestrator informs gateways of the AI pipelines and models it can process — on-chain via AI service registry or off-chain via discovery webhook. Required for AI inference job routing. Note: the specific LIP number governing this mechanism is flagged as a source conflict — see Open Item 1 in Collation Notes. | `[verify-against: https://github.com/livepeer/LIPs]` — do not cite LIP-92 as the AI capability registry LIP until Open Item 1 is resolved | 4/4 |
| aiModels.json | The primary configuration file for AI orchestrators, specifying which models to load, at what price, whether to pre-warm them, and related AI runner parameters. Schema changes with go-livepeer releases — high staleness risk. | `[verify-against: https://github.com/livepeer/go-livepeer]` latest tagged release | 4/4 |
| Warm model | An AI model pre-loaded into GPU VRAM at node startup, ready to serve inference requests without cold-start latency. Status declared in `aiModels.json`. One warm model per GPU is current behaviour but may change. | `[verify-against: https://github.com/livepeer/go-livepeer]` — beta behaviour, high staleness risk | 4/4 |
| Cold model | An AI model not pre-loaded in GPU VRAM; must be loaded on first request, incurring latency of seconds to minutes. Affects performance score and earnings for time-sensitive inference requests. | `[verify-against: https://github.com/livepeer/go-livepeer]` | `[single-run: RUN-A — included because the warm/cold distinction is incomplete without both terms; all runs reference cold start latency in AI section content]` |
| Delegation | The mechanism by which external LPT holders (delegators) stake tokens to an orchestrator, increasing the orchestrator's bonded stake and therefore its active set rank and reward share. Delegators receive a share of the orchestrator's inflation rewards and fees per the reward cut and fee cut settings. | `[verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md]` | `[2-run consensus]` |
| ETH | Ethereum's native token, used as the settlement currency for orchestrator service fees on Livepeer (which runs on Arbitrum). Orchestrators require ETH for gas on all on-chain operations. | — | `[2-run consensus]` |
| Arbitrum | The Ethereum Layer 2 network where Livepeer's protocol contracts are deployed. All orchestrator on-chain operations (staking, reward calls, ticket redemptions) occur on Arbitrum. | `[verify-against: https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js]` for contract addresses | `[2-run consensus]` |
| VRAM | GPU video memory. Determines how many AI models can be loaded simultaneously and which model pipelines an operator can serve. Relevant to pipeline selection and warm/cold model configuration decisions. | — | 4/4 |

**Terms excluded from lock**: "BYOC" (single-run, RUN-B only — flagged as AI detail design question). "Slashing", "round", "unbonding period" (single-run, RUN-A only — operational concerns covered at section-content level). "Siphon" (glossary definition is internally inconsistent — excluded pending verification). Specific AI model names excluded as implementation-layer details.

---

## Arriving Question

> "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?"

**Synthesis note**: All four runs produced variants of a GPU-hardware-to-earning question. RUN-A and RUN-D produced the most direct formulation; RUN-B added the "don't miss rewards" emphasis (reward call concern); RUN-C emphasised the path-selection decision ("given my hardware, capital, and goals"). The canonical question synthesises the hardware-to-earning core (unanimous) with the path-selection element (strong 3-run presence).

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Independent GPU operator — choosing a path | Search ("livepeer orchestrator setup", "earn with GPU"), Discord referral, mining/crypto community forum, Foundation blog post | GPU hardware available; knows how to run Linux servers; no Livepeer-specific knowledge; unclear whether solo video, AI, dual mode, or pool node applies to their situation | A clear participation path identified and a first working node running and receiving work | 3 | 3 | 3 | 9 | 4/4 |
| 2 | AI inference specialist — adding Livepeer as a demand channel | Livepeer AI blog post, Discord `#ai-video`, AI/ML community referral | Existing ML inference infrastructure; familiar with model serving; no knowledge of Livepeer's payment mechanics, staking, or capability advertisement | AI pipelines configured, capabilities advertised, first AI inference job received, pricing set | 2 | 3 | 3 | 8 | 4/4 |
| 3 | Capital-constrained operator — solo vs pool decision | Discord thread, search ("join Livepeer without staking", "pool node livepeer"), referral from pool operator | GPU hardware available; has learned or suspects they lack sufficient LPT to compete independently for video transcoding work | A clear decision: join a pool, start on AI-first path (no stake required), or delay solo operation — and if pool, knows how to proceed | 3 | 2 | 3 | 8 | 4/4 |
| 4 | Running operator — returning to configure, optimise, or troubleshoot | Bookmark, direct URL, Discord link to specific doc, search for specific error message | A node running in production; needs a specific answer (CLI flag, parameter value, diagnosis of a specific problem) | Specific problem resolved or configuration change applied | 3 | 2 | 2 | 7 | 3/4 (RUN-A, RUN-C, RUN-D — RUN-B covers as part of primary persona return-visit behaviour) |
| 5 | Delegator-turned-operator — evaluating hardware operation | Delegators tab CTA, forum thread, community discussion | Understands LPT, delegation, and reward mechanics; lacks operational setup knowledge and hardware-requirement awareness | A go/no-go decision on running a node versus continuing to delegate — based on hardware cost, operational overhead, and economics of solo vs delegator returns | 1 | 1 | 2 | 4 | 2/4 (RUN-B, RUN-D) |

**Primary persona**: Independent GPU operator — unanimous across all four runs. Drives section structure. All other personas accommodated within this structure.

**Self-identification**: Four out of four runs determined that a dedicated disambiguation section is required as the first content section. Self-identifying label "GPU operator" or "node operator" maps to at least three meaningfully different setup paths (solo video/dual, AI-focused, pool node) with different requirements, economics, and configuration surfaces. The reader cannot identify their correct path without reading some content first. Canonical decision: **dedicated disambiguation section** as S1.

**Entry blockers**:
- **LPT stake** (solo video transcoding path): Hard-stop blocker for active set eligibility. A reader who discovers mid-setup that they need significant bonded stake will stall. The section explaining LPT acquisition and staking must appear before the solo video setup section. The pool node path and AI-only path bypass this blocker — the disambiguation section must make this visible before either path begins.
- **ETH for gas** (all on-chain paths): All reward calls, ticket redemptions, and activation transactions cost ETH gas on Arbitrum. Must be addressed in prerequisites before setup instructions begin.
- **Publicly reachable service URI** (all paths): A node without a reachable service URI cannot receive routed work. Network and firewall configuration must be resolved before the node is registered on-chain.
- **VRAM capacity** (AI inference path): AI pipelines require minimum VRAM to load models. Affects which pipelines an operator can configure and must be addressed in AI setup before model selection.
- **Pool membership arrangement** (pool node path): A pool node candidate must find and arrange a connection with a pool operator before any setup makes sense. This is not self-serviceable from the documentation alone.
- **Capability advertisement** (AI path): An AI operator who configures models but does not understand capability advertisement cannot verify that gateways will route AI work to them. Must be covered before verification section.

Section order consequence: Disambiguation → path viability assessment → payment mechanics → prerequisites → solo node setup OR pool node section → AI pipeline setup → verification → operations → optimisation → troubleshooting.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have GPU hardware and have just heard about this network | assess whether my hardware qualifies, what I'd realistically earn, and what each participation path actually requires | make a go/no-go decision and choose the right path before investing any setup time or capital |
| J2 | I've decided to participate but don't know which path applies | identify whether I should go solo video, AI-only, dual mode, or join a pool — based on my hardware, LPT, and goals | start the correct setup path without wasting time on the wrong one |
| J3 | I'm ready to set up but haven't yet done any on-chain prerequisites | complete wallet funding, LPT acquisition and staking, and ETH bridging in the right order | unblock myself so the node software can actually receive jobs |
| J4 | I have prerequisites in place and want a working node | follow a complete, ordered setup sequence (install, configure, register, verify) for my chosen path | reach a state where my hardware is live, discoverable, and processing jobs |
| J5 | My node is running but I'm not getting enough work | diagnose why — pricing too high, not in active set, performance score low, AI capabilities not advertised | fix the correct variable and start receiving jobs without guessing |
| J6 | I want to configure AI inference on my GPU | set up aiModels.json, configure warm models, and advertise my capabilities to gateways | earn from AI inference jobs alongside or instead of video transcoding |
| J7 | I'm operating a node and need a specific current value | look up the exact current parameter, CLI flag name, active set threshold, or reward cut setting | make a confident configuration change without having to reread narrative content |

**Coverage check**: Arrival jobs (J1, J2), active-use jobs (J3, J4), reference/return-visit jobs (J7), edge cases (J5 for low-work diagnosis, J6 for AI-specific path). Full coverage confirmed.

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identifying the right operating path | `discover` | Working out whether solo video, AI/dual, or pool participation is the right model for their hardware, capital, and goals |
| 2 | Evaluating viability and hardware fit | `evaluate` | Checking hardware requirements, income mechanics, LPT stake implications, and economic fit before committing |
| 3 | Understanding how work and payment reach them | `evaluate` | Mapping stake-based routing (video), capability-based routing (AI), probabilistic micropayments, inflation rewards, and reward/fee cut mechanics |
| 4 | Clearing prerequisites | `setup` | Acquiring and staking LPT (solo video), bridging ETH to Arbitrum, registering on-chain — all blockers resolved before software setup |
| 5 | Standing up the first working node | `setup` | Installing go-livepeer, setting base configuration flags, starting the process, confirming connectivity |
| 6 | Verifying reachability and live routing | `setup` | Confirming active set membership (video) or capability advertisement (AI); receiving and completing first test job |
| 7 | Configuring AI workloads | `build` | Writing aiModels.json, setting warm model configuration, advertising capabilities — for AI or dual-mode operators |
| 8 | Operating day-to-day | `operate` | Managing reward calls, monitoring performance metrics, software updates, ticket redemptions |
| 9 | Optimising earnings and performance | `optimise` | Adjusting pricing competitiveness, improving performance score, tuning cuts to attract delegation, managing model warmth and VRAM allocation |

**On-demand**:
- Current active set size and minimum viable stake threshold to enter or maintain membership
- pricePerUnit and pixelsPerUnit benchmark ranges and how to check whether price is above gateway MaxPrice thresholds
- Reward call timing, automation options, and gas cost on Arbitrum
- AI pipeline types currently routable, model IDs, and VRAM requirements per pipeline
- CLI flag reference — current flag names, defaults, and accepted values for the installed go-livepeer release
- Performance score: how it is calculated, which thresholds affect routing, and how to improve it
- Ticket redemption mechanics and current win probability parameters
- Reward cut and fee cut: what values are competitive, how to change them on-chain, and when changes take effect
- Pool operator contacts or registry for operators with insufficient LPT
- Governance vote schedule and treasury contribution rates affecting orchestrator economics

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | Homepage CTA routes GPU operators and compute providers to this tab |
| Inbound | About → Orchestrators | Readers who came to understand the protocol and now want to participate as compute providers |
| Inbound | Delegators → Orchestrators | Delegators evaluating which orchestrator to stake to, or delegators considering running their own node |
| Inbound | Community → Orchestrators | Community members directed here after expressing interest in running infrastructure |
| Outbound | Orchestrators → Delegators | Operators who want to understand how to attract delegators and what delegators look for in cut settings |
| Outbound | Orchestrators → Gateways | Operators who want to understand how gateway selection logic works, pricing signals, and MaxPrice behaviour |
| Outbound | Orchestrators → Developers | Operators who want to build custom AI or video flows rather than just operate supply-side infrastructure |
| Outbound | Orchestrators → Resource HUB | CLI reference, changelog, protocol glossary, governance records |
| Outbound | Orchestrators → About | Operators who want deeper protocol architecture, tokenomics, or governance mechanics beyond operational needs |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Which path is mine? | "I have GPU hardware — am I a solo operator, an AI-focused operator, or a pool node? Do I need to buy LPT?" | J2 | `orient` | `navigation` | Arrived at the tab; has GPU hardware; does not yet know which setup path applies or whether LPT is required | Has identified which of three paths applies (solo video/dual, AI-focused, pool node) and has navigated to the correct starting section | `discover` |

> **Cross-tab decision D-NAV-01**: S1 is a shared navigation file (not per-persona). All paths on this tab reference this single file as their entry point. pageType: navigation is locked.

| S2 — Is this viable for my hardware and situation? | "Will my GPU and capital actually qualify for meaningful income on this network — and what would I need to invest?" | J1 | `evaluate` | `concept` | Has identified their candidate path from S1; has not yet assessed hardware requirements or economic fit | Has made a go/no-go decision: hardware meets path requirements, income model is understood, participation cost (LPT stake or pool arrangement) is assessed | `evaluate` |
| S3 — How does work reach me and how do I get paid? | "What determines whether gateways send me jobs, and how do fees and inflation rewards actually arrive?" | J1 | `explain` | `concept` | Has decided to proceed; does not yet understand routing mechanics, probabilistic micropayments, or how reward calls work | Can describe the two income streams (inflation rewards and service fees), how video routing (stake weight) differs from AI routing (capability advertisement), and what reward cut and fee cut affect — sufficient to make configuration decisions later | `evaluate` |
| S4 — Prerequisites: what must be in place before setup | "What hardware, tokens, wallet, and network access do I need to have ready before I install anything?" | J3 | `learn` | `concept` | Has decided which path to take; has not yet acquired LPT, ETH, or confirmed hardware/network prerequisites | Has confirmed: hardware meets path requirements, ETH wallet is funded for gas, LPT is acquired and staked (solo video path) or pool arrangement is confirmed (pool node path), service URI is publicly reachable | `setup` |
| S5 — Get your node running | "How do I install go-livepeer, configure my flags, register on-chain, and confirm my node is live?" | J4 | `start` | `instruction` | Prerequisites from S4 confirmed; go-livepeer not yet installed | Has a running, registered go-livepeer node; service URI is reachable; reward calling is configured or automated; node is confirmed reachable from the network | `setup` |
| S6 — Join as a pool node | "I don't have enough stake to go solo — how does pool participation work and how do I connect?" | J2 | `orient` | `guide` | Identified via S1 as pool node candidate; no setup started | Has decided whether pool participation suits their situation; if proceeding: understands the connection architecture, how fees are split, and has the information needed to engage with a pool operator | `evaluate` |
| S7 — Set your pricing and cuts | "What should I charge for transcoding and AI inference, and what reward cut and fee cut should I set?" | J4, J5 | `configure` | `guide` | Node installed and running (S5 complete); no deliberate pricing or cut strategy set yet | Has set pricePerUnit (and AI pricing) to a value they can justify against network benchmarks; has set reward cut and fee cut with a clear understanding of the trade-off between personal earnings and delegator attractiveness | `setup` |
| S8 — Set up AI pipelines | "How do I configure AI inference, choose which pipelines to support, and advertise my capabilities to gateways?" | J6 | `build` | `instruction` | go-livepeer installed and running (S5 complete); AI configuration not yet started; VRAM capacity confirmed for target pipelines | Has aiModels.json configured with at least one pipeline; warm model behaviour understood; capabilities advertised; at least one AI inference request successfully processed | `build` |
| S9 — Verify your node is working end to end | "How do I confirm my node is discoverable, correctly priced, and actually receiving the work it should get?" | J4 | `verify` | `instruction` | Node set up and configured; not yet confirmed receiving work through the full routing path | Has confirmed node is discoverable, priced within gateway MaxPrice thresholds, performance score is tracking, reward calls are succeeding, and first job has been received | `setup` |
| S10 — Monitor and operate day-to-day | "What should I watch, what alerts matter, and what routine tasks must I do to keep earning?" | J7 | `operate` | `guide` | Node live and receiving work; no monitoring or operations workflow yet in place | Has a monitoring routine in place (metrics, reward call status, performance score, session volume); knows the routine operational tasks and their cadence | `operate` |
| S11 — Optimise earnings and performance | "I'm running but I want more work, better margins, or better AI throughput — what levers do I have?" | J5, J7 | `optimise` | `guide` | Node operating in production with monitoring in place; wants to increase earnings or efficiency | Has identified the variable most affecting earnings or job volume (pricing, stake position, cut settings, AI model warmth, VRAM allocation) and made a targeted adjustment with a framework for future decisions | `optimise` |
| S12 — Diagnose and fix problems | "My node stopped receiving work / a reward call failed / performance score dropped — what do I do?" | J5 | `troubleshoot` | `guide` | Node in production but experiencing a specific problem (no jobs, failed reward call, AI inference errors, performance drop) | Has diagnosed the root cause from a structured checklist (pricing gate, active set rank, service URI reachability, performance score, capability advertisement, software version) and applied or queued the appropriate fix | `troubleshoot` |

**Section count**: 12 sections. Within the 8–12 target range at the upper boundary. Justification: The tab covers two workload types (video transcoding and AI inference) with materially different configuration surfaces — S8 (AI pipelines) cannot be folded into S5 (node setup) without creating an unworkable mixed-instruction page for operators who are on the video-only path. The pool node path (S6) requires a dedicated section rather than a callout because pool node candidates have a distinct decision gate that cannot be resolved within a setup section designed for solo operators. These two additions (S6 and S8) are the primary drivers of the count above 10.

**Design flags carried through**:
- S5 `[⚠ Design flag: may need to split]` — flagged in RUN-A: S5 serves both solo operators and pool node operators; if both paths are included in a single instruction page, the section load may be unworkable. S6 (pool node section) partially resolves this by routing pool node candidates out early. However, the flag is retained: S5 should be reviewed during detailed design for whether a solo-specific instruction page is warranted.
- S8 `[⚠ Design flag: may need to split]` — flagged in RUN-B and RUN-D: the AI configuration section (aiModels.json, warm models, capability advertisement, BYOC) may be substantially longer than the video configuration surface. Review during detailed design.
- S8 `[⚠ Design flag: BYOC path not covered]` — flagged in RUN-A: BYOC (custom Docker containers for non-standard AI models) is a distinct setup path that may warrant its own page within the AI section.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Independent GPU operator (solo video/dual) | S1 (disambiguation) | S9 (verify) for initial goal; returns to S10–S11 for ongoing operations | None — prerequisite sections (S2, S3, S4) precede setup (S5, S7, S9) | S4 must explicitly cover LPT acquisition path (not just definition) — an operator who arrives with no LPT must understand how to obtain and stake it, not just what LPT is; S3 must clarify that reward calls are an active requirement (not passive payout) | None |
| AI inference specialist | S1 (disambiguation) | S9 (verify) or S8 (AI configuration) | None — S8 (AI pipeline setup) is a dedicated section | S3 must clarify that active set membership is not required for AI inference routing — an AI-only operator who reads S3 without this clarification may incorrectly conclude they need LPT stake before they can participate; S4 must distinguish AI prerequisites from video prerequisites; S8 must address VRAM capacity planning before pipeline selection | None |
| Capital-constrained operator (pool node path) | S1 (disambiguation) → S6 (pool node section) | S6 — pool node candidates exit after making their decision | None — S6 is a dedicated section positioned before S5 (solo setup) so pool candidates exit cleanly | S4 must make clear that LPT is not required for pool node operators — if S4 reads as "everyone needs LPT," pool node candidates may incorrectly abandon the tab; S6 must resolve the "enough stake?" question with sufficient context to make the pool vs solo vs AI-first decision, not just say "join a pool" | None |
| Running operator (return visit) | Enters directly at S10 (operations), S11 (optimise), or S12 (troubleshoot) | S10, S11, or S12 | None — on-demand and operational sections serve this persona without needing prior sections | S12 (troubleshoot) must distinguish low demand, low selection, and low margin as separate diagnostic paths so this persona can navigate directly to the relevant root cause | None |
| Delegator-turned-operator | S2 (viability assessment) — can skip S1 as they already know LPT | S4 (prerequisites) or S5 (setup) | None | S2 must surface the cost-of-operation framing (hardware cost, operational overhead, ETH for gas, comparison of solo operator earnings vs. continued delegation) — this persona needs that comparison to make their decision; S7 must address setting cuts from the operator's perspective, not the delegator's, as this persona may conflate the two roles | None |

**All personas have unblocked paths through the canonical section structure. No missing sections.**

**Gap notes carried through for Phase 2 content briefs**:
1. S3: Add explicit statement that active set membership is NOT required for AI inference routing.
2. S4: Separate LPT acquisition instructions from general prerequisites; clearly mark LPT section as "solo video path only."
3. S4: Make explicit that pool node operators do not need LPT.
4. S7: Address cut settings from the operator's perspective (what to set and why) — not from the delegator's perspective (what the cut means to delegators).
5. S12: Structure as three distinct diagnostic paths: low work volume, operational errors (reward calls, ticket redemptions), and performance score degradation.

---

## Checkpoint

- [x] TERMINOLOGY_LOCK: all verify flags carried through from any run?
- [x] Arriving question specific — not a topic?
- [x] Personas: consensus ≥ 2 for all included; single-run archetypes justified if included?
- [x] Primary persona confirmed across all four runs?
- [x] Self-identification decision: 4/4 run consensus for dedicated disambiguation section?
- [x] Entry blockers: union of all runs — none dropped?
- [x] Jobs: full coverage of arrival (J1, J2), active-use (J3, J4), return-visit (J7), and edge cases (J5 low-work diagnosis, J6 AI path)?
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values?
- [x] Design flags carried through from any run (S5, S8 load flags; S8 BYOC flag)?
- [x] All personas unblocked?
- [x] No single-run section included where the job is already served by an on-demand category, another section, or a cross-tab route?
- [x] LIP-92 conflict documented — capability advertisement term does not cite a specific LIP number pending resolution of Open Item 1?
- [x] Active set size value not hard-coded — marked verify-live?
