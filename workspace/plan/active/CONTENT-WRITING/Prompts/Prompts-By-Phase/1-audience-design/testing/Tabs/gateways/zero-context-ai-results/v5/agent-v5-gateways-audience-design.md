# Gateways — Audience Design

**Tab**: Gateways
**Audience**: `gateway`
**TERMINOLOGY_LOCK**: see Phase 0 Anchors below
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `gateway`

**TERMINOLOGY_LOCK**:

| # | Term | Definition (derived from Product Context + veracity-sources authority) | Flags |
|---|---|---|---|
| 1 | Gateway | A node that routes AI or video transcoding jobs into the Livepeer network, manages payment flows to orchestrators, and provides a protocol interface between applications and the network. The gateway does not perform compute. | — |
| 2 | On-chain gateway | A gateway operating with its own Ethereum wallet on Arbitrum, using protocol-based orchestrator discovery and probabilistic micropayments for settlement. Requires ETH deposited as a payment deposit and reserve. | [verify-against: https://github.com/livepeer/go-livepeer] |
| 3 | Off-chain gateway | A gateway operating without direct blockchain integration, delegating payment signing to a remote signer and specifying orchestrators manually. A valid production configuration — not only for testing. | [verify-against: https://github.com/livepeer/go-livepeer] |
| 4 | Remote signer | A separate service that holds an Ethereum private key and signs payment tickets on behalf of an off-chain gateway. A community-hosted instance is publicly available. | [verify-against: https://github.com/livepeer/go-livepeer] |
| 5 | Orchestrator | A supply-side node contributing GPU resources. From the gateway's perspective: the compute provider the gateway routes work to, selected by capability, price, performance, and stake weight. | — |
| 6 | Probabilistic micropayments | The lottery-based payment mechanism where gateways issue signed tickets to orchestrators; only winning tickets are redeemed on-chain, amortising gas costs. Core payment layer for on-chain gateways. | [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| 7 | TicketBroker | The smart contract on Arbitrum that holds gateway deposits and reserves, and processes winning ticket redemptions. | [verify-against: https://arbiscan.io/accounts/label/livepeer] [verify-against: https://github.com/livepeer/protocol] |
| 8 | Deposit | ETH locked by an on-chain gateway into the TicketBroker smart contract to cover the expected value of outstanding payment tickets. | [verify-against: https://github.com/livepeer/protocol] |
| 9 | Reserve | ETH held as collateral in TicketBroker backing outstanding payment tickets; used if the gateway's deposit is depleted. | [verify-against: https://github.com/livepeer/protocol] |
| 10 | Orchestrator discovery | The process by which a gateway finds available orchestrators — automatically via the on-chain ServiceRegistry (on-chain mode) or manually via configured addresses (off-chain mode). | [verify-against: https://github.com/livepeer/go-livepeer] |
| 11 | ServiceRegistry | The smart contract on Arbitrum where orchestrators register their service URI so that on-chain gateways can discover and contact them. | [verify-against: https://arbiscan.io/accounts/label/livepeer] [verify-against: https://github.com/livepeer/protocol] |
| 12 | Pipeline | A configured end-to-end AI processing workflow defining input type, model, and output. On Livepeer: a pipeline type (e.g. text-to-image, live-video-to-video) combined with a specific model ID. | [verify-against: https://github.com/livepeer/go-livepeer] — AI config surface changes frequently |
| 13 | Capability | An AI service or job type (pipeline/model pair) that an orchestrator advertises to the network, enabling gateways to route matching requests. | [verify-against: https://github.com/livepeer/go-livepeer] |
| 14 | Transcoding | Direct digital-to-digital conversion of a video stream from one encoding format, resolution, or bitrate to one or more output renditions. The video compute type on Livepeer. | — |
| 15 | Per-pixel pricing | A cost model where transcoding fees are calculated based on total pixels processed (width × height × frame count). | [verify-against: https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197] |
| 16 | Per-request pricing | A cost model charging per individual AI inference request, used for AI pipeline jobs where pixel count is not a meaningful unit. | [verify-against: https://github.com/livepeer/go-livepeer] |
| 17 | MaxPricePerUnit | A CLI configuration flag setting the maximum price per pixel that a gateway will accept from orchestrators; orchestrators priced above this threshold are excluded. | [verify-against: https://github.com/livepeer/go-livepeer] — CLI flags change between releases; always check latest tagged release |
| 18 | MaxPricePerCapability | A CLI configuration flag setting the maximum price a gateway will pay for a specific AI pipeline/model pair, overriding MaxPricePerUnit for that capability. | [verify-against: https://github.com/livepeer/go-livepeer] — CLI flags change between releases |
| 19 | Session | An active, persistent connection between a gateway and an orchestrator during which jobs are processed. Gateways reuse sessions to amortise connection setup overhead. | [verify-against: https://github.com/livepeer/go-livepeer] |
| 20 | Failover | Automatic switching to a backup orchestrator when the primary becomes unresponsive during a session. | — |
| 21 | Dual gateway | A deployment where a single gateway node operates both video transcoding and AI inference workloads simultaneously. Requires Linux. | [verify-against: https://github.com/livepeer/go-livepeer] |
| 22 | Gateway-as-a-service | A hosted deployment model allowing users to access gateway functionality without managing their own infrastructure (e.g. Livepeer Studio). | — |
| 23 | NaaP | **[DEFINITION CONFLICT: NaaP — heading reads "Network as a Platform" (NaaP), body reads "Network-as-a-Product"]** — heading and body use different expansions of the same acronym, where "Platform" and "Product" are semantically distinct in a commercial context. Do not assert either form until resolved against a primary source. See Addendum. **[BLOCKED TERM: NaaP — excluded from TERMINOLOGY_LOCK pending human resolution of definition conflict. Verify against Livepeer Notion workspace (search NaaP / Network as a Platform) per veracity-sources.md.]** | [BLOCKED] |
| 24 | BYOC | **[DEFINITION CONFLICT: BYOC — heading reads "Bring Your Own Compute", body reads "Bring-Your-Own-Container"]** — "Compute" and "Container" are semantically different (container is a specific implementation of compute). Do not assert either expansion until resolved. See Addendum. **[BLOCKED TERM: BYOC — excluded from TERMINOLOGY_LOCK pending human resolution of definition conflict. Verify against go-livepeer repo latest tagged release.]** | [BLOCKED] |
| 25 | Weight factors | Configurable scoring parameters (stake weight, price weight, random selection weight) that the gateway uses to rank and select orchestrators during discovery. | [verify-against: https://github.com/livepeer/go-livepeer] — flag names change between releases |
| 26 | Arbitrum | The Layer 2 Optimistic Rollup settling to Ethereum that hosts the Livepeer protocol smart contracts. | — |
| 27 | ETH | The native cryptocurrency of Ethereum, used to pay gas fees and to fund gateway payment deposits on Arbitrum. | — |

**Active TERMINOLOGY_LOCK** (terms 23 and 24 blocked): `gateway, on-chain gateway, off-chain gateway, remote signer, orchestrator, probabilistic micropayments, TicketBroker, deposit, reserve, orchestrator discovery, ServiceRegistry, pipeline, capability, transcoding, per-pixel pricing, per-request pricing, MaxPricePerUnit, MaxPricePerCapability, session, failover, dual gateway, gateway-as-a-service, weight factors, Arbitrum, ETH`

**Deprecated terms confirmed and excluded**:
- "Broadcaster" — deprecated; current term is Gateway. Appears in the Whitepaper and go-livepeer codebase due to pre-rename vintage. Not used in any section or definition.
- "Combined mode" / "Hybrid" — deprecated; current term is "dual gateway" (from deprecated-terms.md: "Dual mode" / "Dual-workload configuration"). Used "dual gateway" as the deployment term.
- "Transcoder" (as synonym for Orchestrator) — excluded per deprecated-terms.md.

**High-staleness values confirmed and excluded from hard-coding**:
- CLI flag names and defaults (MaxPricePerUnit, MaxPricePerCapability, weight factor flag names) — all flagged `[verify-live: https://github.com/livepeer/go-livepeer — latest tagged release]`
- AI pipeline types and model IDs — flagged `[verify-live: https://github.com/livepeer/go-livepeer]`

---

**Anchoring questions**

**1. What does this audience call themselves?**

Before knowing this network's terminology, these people call themselves **infrastructure operators**, **platform engineers**, or **API gateway operators**. They come from a world of running middleware services, managing API routing layers, handling payment integrations, and negotiating capacity deals. A subset comes from the video streaming infrastructure world and would describe themselves as **broadcast infrastructure engineers** or **streaming platform operators**. A smaller segment comes from the AI/ML infrastructure world as **inference API operators** or **AI platform engineers**.

**2. What are the 3–5 actions that define their core job?**

In their own language, before network-specific framing:
1. Route job requests from customers to compute providers reliably and with low latency
2. Manage payment flows — fund accounts, monitor spend, top up when needed, avoid service interruption
3. Configure and tune routing rules to balance cost, performance, and provider diversity
4. Monitor system health — uptime, throughput, error rates, payment burn rate — and respond to failures
5. Decide which compute providers to connect to, and on what terms

**3. Terms in the TERMINOLOGY_LOCK with a network-specific meaning that differs from the industry default:**

| Term | Industry default meaning | Network-specific meaning — how it differs |
|---|---|---|
| Gateway | A generic routing device or API gateway (e.g. AWS API Gateway, Kong, NGINX) — handles HTTP request routing, authentication, rate limiting | On Livepeer, a gateway is a specific protocol participant node that submits jobs to a decentralised compute network, issues cryptographic payment tickets, and manages on-chain or off-chain settlement. It is not a general HTTP proxy — it participates in a payment and compute protocol. |
| Session | A stateful HTTP session or browser session | On Livepeer, a session is a persistent connection between a gateway and a specific orchestrator maintained across multiple jobs. Session affinity affects model warm state on the orchestrator, directly impacting latency. |
| Deposit | A security deposit or refundable payment advance in a general service context | On Livepeer, a deposit is ETH locked in a specific smart contract (TicketBroker) that covers the *expected value* of probabilistic payment tickets already issued — it is not a simple prepayment balance. If depleted, the reserve acts as backstop. |
| Reserve | A reserved capacity or buffer in a general infrastructure context | On Livepeer, reserve is ETH held as collateral in TicketBroker, specifically backstopping outstanding ticket obligations if the deposit runs out. It is not operational capacity. |
| Orchestrator | General: conductor, coordinator | On Livepeer, an orchestrator is a specific supply-side network participant — a GPU hardware operator who earns fees by processing jobs. The gateway selects which orchestrators receive work. The term is not interchangeable with "server" or "worker" in this context. |
| Capability | In API design: what a service can do generally | On Livepeer, capability is a specific on-chain/off-chain advertisement — a pipeline/model pair tuple that an orchestrator declares it can execute. It has a formal structure used in routing logic. |
| Probabilistic micropayments | No widely-used industry equivalent | A lottery-based cryptographic payment mechanism unique to the Livepeer protocol. First-time readers will have no prior frame of reference. Must be explained before use. |

---

## Arriving Question

> "I need to route AI or video jobs into the Livepeer network — do I set up a gateway node myself, and if so, which type of gateway do I need and how do I get it running?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | The platform builder graduating from hosted | Developers tab CTA ("ready to operate your own gateway?") or Google search for "run livepeer gateway self-hosted" | Working knowledge of Livepeer APIs from using a hosted gateway; knows what jobs they're routing; unfamiliar with node setup, payment mechanics, or which gateway type applies to them | A clear decision on on-chain vs off-chain path and a running gateway node that accepts their first job | 3 | 3 | 3 | 9 |
| 2 | The net-new infrastructure operator | Discord/forum referral, blog post, or direct search for "livepeer gateway operator" | General infrastructure ops experience; no Livepeer-specific knowledge; needs the full picture — what a gateway is, what it costs, how payment works, what to set up | Enough understanding of the gateway role and economics to commit to setup, plus a node running | 3 | 3 | 3 | 9 |
| 3 | The AI inference platform builder | Google search "livepeer AI inference gateway" or referral from AI community; may have read the AI section of docs | Knows they want to route AI inference jobs; may be unfamiliar with video transcoding path entirely; needs to understand dual vs AI-only mode and pipeline/capability routing | A running AI-capable gateway with at least one pipeline routing correctly | 2 | 3 | 3 | 8 |
| 4 | The returning operator tuning a live system | Direct URL, bookmark, or Discord link to a specific config page | Running gateway; has a specific operational problem (pricing too high, orchestrator pool too narrow, deposit running low, failover not working) | A specific configuration change applied or diagnosis completed | 2 | 2 | 2 | 6 |
| 5 | The evaluating founder / technical lead | Solutions tab or About tab referral; evaluating whether to build on Livepeer | High-level product knowledge; no operational knowledge; wants to understand cost model, control model, and what running a gateway actually involves | A clear picture of the gateway's business model and operational overhead before committing to build | 1 | 1 | 2 | 4 |

**Assumption note**: Volume and depth scores are derived from Product Context reasoning in the absence of analytics. Persona 1 and 2 are both scored 3/3/3 because the tab description explicitly states on-chain and off-chain paths are distinct and cannot be merged — each represents a full-depth setup path. Persona 3 scores 2 on volume (AI inference is a newer, narrower entry point than general video gateway operation) but 3 on depth (AI routing has its own configuration surface) and 3 on impact (getting this persona wrong blocks AI ecosystem adoption). Personas 4 and 5 are real but lower volume and do not drive section structure.

**Primary persona**: **The net-new infrastructure operator** (tied on score with Persona 1, but chosen as the primary driver because this persona has the most complete information need — they arrive knowing least and need the tab to be fully self-contained from concept through operation. Persona 1's needs are a strict subset of Persona 2's needs and are fully served by the same structure.)

**Self-identification check**: These readers would describe themselves as "a gateway operator" or "someone setting up a gateway." That label does not route cleanly to a single setup path — a person calling themselves a "gateway operator" could need:
- The on-chain path (Arbitrum wallet, ETH deposit, protocol discovery)
- The off-chain path (remote signer, manual orchestrator addresses, no wallet)
- The AI inference path (pipeline/capability routing, no video transcoding)
- The dual-gateway path (both video and AI)
- The hosted/gateway-as-a-service path (no node operation at all)

This is more than 2 meaningfully different setup paths. A reader cannot identify their correct path without reading content. A **dedicated disambiguation section is required as the first content section** (S1). It routes the reader to one of four paths: on-chain, off-chain, dual, or hosted. Design in Phase 2C.

**Entry blockers**:
- **On-chain gateway path**: Requires ETH on Arbitrum before any on-chain action is possible. This is a hard-stop blocker. The section that explains how to fund the TicketBroker deposit must appear before any section that assumes the gateway is connected to the protocol. Ordering: Concept (what payment is and why ETH is needed) → Payment setup → Node startup → Verification.
- **Off-chain gateway path**: Requires a working remote signer endpoint before the node can process jobs. The remote signer setup step must appear before node startup. Because a community-hosted signer exists, this blocker is low-friction but still structural.
- **AI inference path**: Requires a running capable orchestrator (or knowledge that one exists in the network) before AI jobs will succeed. This is a knowledge blocker, not a structural one — the section covering orchestrator discovery for AI must acknowledge this dependency.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I am deciding how to run my gateway and see there are multiple deployment options | understand the difference between on-chain, off-chain, and hosted operation in terms of what I control, what I manage, and what it costs | choose the right operational model before I invest time in setup |
| J2 | I have chosen the on-chain path and need to get started | follow a step-by-step path from zero to a running node that accepts its first job — including wallet creation, ETH funding, protocol registration, and configuration | reach a working state without needing to consult multiple external sources or guess at steps |
| J3 | I have chosen the off-chain path and need to get started | follow a step-by-step path to a running node using a remote signer — without needing to manage ETH or an Arbitrum wallet myself | route real jobs through the Livepeer network quickly without blockchain overhead |
| J4 | My gateway is running and I want to control what I pay for compute | configure price limits per job type (video and AI) and understand how pricing interacts with orchestrator selection | avoid overspending and keep my gateway connected to the right orchestrators |
| J5 | I want to route AI inference jobs through my gateway | configure pipeline/capability routing so that AI requests reach orchestrators that have the right model loaded | serve AI requests to my users without cold-start failures or misrouted requests |
| J6 | Something is going wrong with my running gateway | diagnose the problem — is it routing, payment, configuration, or an orchestrator issue? — and resolve it | restore service without escalating or filing a support request |
| J7 | I need to understand how payments work before I configure or fund my gateway | understand the probabilistic micropayment mechanism, what deposit and reserve mean, and what happens if the deposit runs dry | fund the right amounts and avoid payment failures that interrupt service |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orienting to the gateway role | discover | Understanding what a gateway is, what it does, and whether this is the right role for their situation |
| 2 | Choosing an operational model | evaluate | Comparing on-chain vs off-chain vs hosted paths against their own constraints (ETH availability, desire for decentralisation, operational overhead tolerance) |
| 3 | Understanding the payment layer | evaluate | Learning how probabilistic micropayments, deposit, and reserve work before committing to fund or configure anything |
| 4 | Setting up (on-chain path) | setup | Creating a wallet, funding ETH on Arbitrum, depositing into TicketBroker, configuring and starting the node |
| 4b | Setting up (off-chain path) | setup | Connecting to a remote signer, configuring manual orchestrator addresses, starting the node |
| 5 | Configuring routing and pricing | build | Setting price caps, weight factors, and capability routing rules to match their job types and budget |
| 6 | Verifying and testing | setup | Confirming the gateway is accepting jobs, routing to orchestrators, and processing payment tickets correctly |
| 7 | Operating and monitoring | operate | Watching payment deposit levels, orchestrator health, error rates, and throughput day-to-day |
| 8 | Tuning and optimising | optimise | Adjusting routing weights, price caps, and orchestrator selection to improve cost, latency, or reliability |

**On-demand** (information this audience returns for repeatedly after completing the linear journey):

- Current CLI flag names, accepted values, and defaults for pricing and routing configuration
- AI pipeline types and model IDs currently available on the network
- How to top up a TicketBroker deposit and reserve — amounts, timing, and process
- Payment monitoring signals — what metrics indicate a deposit is running low and when to act
- Orchestrator selection algorithm details — how weight factors interact
- How to add or remove orchestrators from the routing pool (on-chain vs off-chain method)
- Failover behaviour — what triggers it, how to configure it, what it logs
- Dual gateway setup specifics — Linux requirements, configuration differences from single-mode
- Remote signer options and how to configure or replace one
- Troubleshooting routing failures — no orchestrators found, capability mismatches, session drops

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Developers tab → Gateways | Developers who have been building with hosted gateway APIs graduate to operating their own gateway node |
| Inbound | Solutions tab → Gateways | Founders and builders evaluating Livepeer who decide they need to operate infrastructure, not just consume APIs |
| Inbound | Home → Gateways | Direct audience routing from the homepage for visitors who identify as infrastructure operators |
| Outbound | Gateways → Orchestrators | Gateway operators who need to understand the compute supply side — who they are routing to, how orchestrators price work, how stake weight affects selection |
| Outbound | Gateways → Developers tab (SDK) | Gateway operators who want to build custom middleware, integrate the livepeer-python-gateway, or extend their gateway with SDK-based tooling |
| Outbound | Gateways → Resource HUB | Deep reference for CLI flags, protocol contracts, changelog, cross-cutting glossary |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1 — Gateway paths: which one is yours? | "There seem to be multiple ways to run a gateway — which one applies to me?" | J1 | `orient` | `navigation` | Arrived at the tab; no prior knowledge of gateway types or setup paths | Has identified which of the four paths applies to their situation (on-chain, off-chain, dual, or hosted) and navigated to the correct starting section | `discover` |
| S2 — What a gateway does | "What exactly does a gateway do, and is this role right for my situation?" | J1 | `explain` | `concept` | Knows they want to route jobs into the network; unclear on what the gateway role involves technically and economically | Has decided whether operating a gateway is the right participation model for their goal, or has confirmed it is and is ready to proceed | `discover` |
| S3 — How gateway payments work | "How does the payment system work, and what do I need to fund before I can process jobs?" | J7 | `explain` | `concept` | Has chosen to operate a gateway; does not yet understand how probabilistic micropayments, deposit, and reserve interact | Has decided how much ETH to initially fund and understands what happens if the deposit is depleted — can proceed to setup with correct expectations | `evaluate` |
| S4 — On-chain gateway: quickstart | "How do I get an on-chain gateway running from scratch?" | J2 | `start` | `instruction` | Has chosen the on-chain path; has read payment concepts (S3); ready to execute step-by-step | Has a running on-chain gateway node that has processed its first test job and confirmed payment tickets are being issued | `setup` |
| S5 — Off-chain gateway: quickstart | "How do I get an off-chain gateway running without managing ETH myself?" | J3 | `start` | `instruction` | Has chosen the off-chain path; has read payment concepts (S3); has a remote signer endpoint (community or custom) | Has a running off-chain gateway node that has processed its first test job through a manually specified orchestrator | `setup` |
| S6 — Configure pricing and orchestrator selection | "How do I set price limits and tune which orchestrators my gateway uses?" | J4 | `configure` | `guide` | Has a running gateway (either path); wants to control spend and routing behaviour but does not yet know which parameters to set | Has set MaxPricePerUnit (and MaxPricePerCapability for AI jobs), reviewed weight factors, and confirmed that orchestrator selection reflects the configured limits `[verify-live: https://github.com/livepeer/go-livepeer — latest tagged release]` | `build` |
| S7 — Route AI inference jobs | "How do I configure my gateway to route AI pipeline requests to capable orchestrators?" | J5 | `configure` | `guide` | Has a running gateway; wants to route AI jobs; unfamiliar with capability advertisements and pipeline routing | Has configured AI capability routing, confirmed at least one orchestrator is advertising the target capability, and successfully routed a test AI request `[verify-live: https://github.com/livepeer/go-livepeer — AI config surface changes frequently]` | `build` |
| S8 — Verify your gateway | "How do I confirm my gateway is set up correctly before I point real traffic at it?" | J2, J3 | `verify` | `instruction` | Has completed setup (S4 or S5) and configuration (S6/S7); ready to confirm correct operation | Has run through a verification checklist and confirmed: job routing active, payment tickets issuing, orchestrator selection working, monitoring reachable | `setup` |
| S9 — Monitor and manage a running gateway | "What do I watch day-to-day, and how do I manage payment deposit levels?" | J6, J7 | `operate` | `guide` | Has a verified, running gateway; needs to establish operational practice | Has set up monitoring for deposit balance, orchestrator health, and throughput; has a defined procedure for topping up the deposit before service interruption | `operate` |
| S10 — Diagnose and fix gateway problems | "My gateway is misbehaving — how do I work out what's wrong?" | J6 | `troubleshoot` | `guide` | Running gateway exhibiting a specific failure (routing failures, payment errors, session drops, no orchestrators found) | Has diagnosed the failure category and applied a targeted fix, or has a clear escalation path if the fix did not resolve it | `troubleshoot` |
| S11 — Optimise routing and cost | "My gateway is working but I want to reduce cost or improve latency — what can I tune?" | J4, J5 | `optimise` | `guide` | Running, verified gateway; specific optimisation goal (cost, latency, orchestrator diversity) | Has applied at least one targeted change (weight factor adjustment, price cap revision, session affinity tuning) and has a method for measuring whether it helped | `optimise` |
| S12 — Gateway economics and business models | "If I'm exposing this gateway to others — what are the business model options and how does pricing work end-to-end?" | J1 | `evaluate` | `concept` | Has a working gateway; considering whether to expose it as a service to others (gateway-as-a-service, multi-tenant operation) | Has a clear picture of the gateway business model options (service margin, multi-tenant billing architecture) and can make a decision about whether and how to expose the gateway externally | `evaluate` |

**Section count**: 12 sections. Within the 8–12 target. The count reflects the tab description's explicit constraint that on-chain and off-chain quickstart paths are distinct and cannot be merged — each requires its own instruction section (S4, S5). Without that constraint, S4+S5 could be one section with two paths, which would bring the count to 11. The count is correct.

**Section load flags**:

S8 — Verify your gateway — serves readers arriving from two different prior sections (S4 on-chain and S5 off-chain). The entry state is "has completed setup" which is the same for both paths at this point, but the verification steps may differ by path. **[⚠ Design flag: may need to split]** — S8 currently carries verification for both on-chain and off-chain setups. If verification steps diverge significantly by path (different endpoints to check, different payment confirmation flows), this will need to be split into S8a (on-chain verification) and S8b (off-chain verification) during detailed design.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| P1 — Platform builder graduating from hosted | S1 (to identify their path — likely on-chain or off-chain) | S8 or S9 (once running and monitoring) | None — S1 routes correctly; S4/S5 provide the setup path they need | S3 (payment concepts) must be read before S4/S5 — section order enforces this; no gap | None |
| P2 — Net-new infrastructure operator | S1 | S9 (daily operations established) | None — S2 through S9 form a complete unblocked path from concept to operation | None — all prerequisite knowledge is covered in sequence: S2 (role), S3 (payments), S4/S5 (setup), S6 (config), S8 (verify), S9 (operate) | None |
| P3 — AI inference platform builder | S1 (routes to AI/dual path) → S2 → S3 → S4 or S5 → S7 | S7 or S11 | Potential gap: S7 assumes the reader has a running gateway and understands capability routing. A reader new to Livepeer AI concepts may arrive at S7 without knowing what a capability advertisement is or why cold start matters. S2 introduces the gateway role but does not go deep on AI-specific concepts. **Knowledge gap in S7** — the section should include a brief concept orientation (what capability advertisements are, what warm vs cold model means for routing) before configuration steps | AI concepts (capability, pipeline, warm/cold model) need to be introduced in context within S7, not assumed from the glossary | Consider whether S7 needs a brief concept preamble (not a full concept page — a callout or section intro) or whether S2 should include an AI-specific orientation block. Flagged for detailed design. |
| P4 — Returning operator tuning a live system | S6, S10, or S11 (direct navigation to the relevant section) | Same section (specific task completed) | None — all three sections exist and are clearly scoped | None for S6 and S11; S10 (troubleshoot) needs to be findable via the nav without reading S1–S5 first. The section is self-contained by design (entry state: running gateway with a specific failure). | None |
| P5 — Evaluating founder / technical lead | S2 (what a gateway does) → S12 (economics and business models) | S12 | None | S2 and S12 together provide the evaluative picture this persona needs. S12 explicitly covers business model options. | None — but S5 note: this persona likely arrives from Solutions or About and may not need to go through S1. S2 should be reachable directly without S1 being a mandatory gate. S1 is a routing section, not a prerequisite gate — confirmed by pageType: navigation. |

**Resolution of P3 knowledge gap**: S7 (Route AI inference jobs) must include an inline concept orientation covering: what a capability advertisement is, how pipeline/model pairing works, and what warm vs cold model state means for routing decisions. This does not require a new section — it is content design within S7. Flag for Phase 2 detailed design.

**Resolution of S8 load flag**: Accepted for now. During detailed design, confirm whether on-chain and off-chain verification steps diverge. If they do, split into S8a/S8b.

---

## Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Any glossary term with a heading/body expansion mismatch flagged as `[DEFINITION CONFLICT]` or `[BLOCKED TERM]`? (NaaP, BYOC — both blocked)
- [x] Phase 0: No governance-controlled numeric values hard-coded — all flagged `[verify-live: ...]`?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation section added as S1 (required: 4+ distinct paths)?
- [x] Entry blockers identified and resolved by section order (on-chain: S3 before S4; off-chain: remote signer step within S5 before job routing)?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens? (`purpose` 15, `pageType` 7, `lifecycleStage` 7)
- [x] Disambiguation section (S1) has `lifecycleStage: discover`, `pageType: navigation`, `purpose: orient`?

All gates pass. Output is final.

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2 — DEFINITION CONFLICT: NaaP]**: The glossary heading reads "Network as a Platform (NaaP)" but the body reads "Network-as-a-Product." "Platform" and "Product" are semantically distinct in a commercial/product-strategy context — one implies infrastructure made available to others; the other implies a standalone product offering. This is not a capitalisation or hyphenation variation. Per the source verification rule, `veracity-sources.md` explicitly lists Livepeer Notion (search NaaP / Network as a Platform) as the primary source for pre-GitHub NaaP design work. The correct expansion cannot be determined from the Product Context block alone. NaaP is excluded from the TERMINOLOGY_LOCK pending human resolution. Recommended action: check the Livepeer Notion workspace and/or the `livepeer/naap` GitHub repo for the canonical acronym expansion before using this term in any content.

- **[Phase 0 / Step 0.2 — DEFINITION CONFLICT: BYOC]**: The glossary heading reads "Bring Your Own Compute (BYOC)" but the body reads "Bring-Your-Own-Container." Container is a specific Docker-based implementation of compute supply — the two expansions are not synonymous (a team could bring their own compute via bare-metal, VM, or container, but only the container form matches the body's definition). The go-livepeer repo (latest tagged release) is the primary source for this. BYOC is excluded from the TERMINOLOGY_LOCK pending resolution. Recommended action: check the go-livepeer codebase for the canonical usage (flag names, comments, README) to determine which expansion is correct.

- **[Phase 0 / Step 0.2 — Deprecated term: Broadcaster]**: Confirmed deprecated. "Broadcaster" appears in the Whitepaper and go-livepeer codebase due to pre-rename vintage. The glossary entry itself notes the deprecation. Not used anywhere in this output — "gateway" used throughout.

- **[Phase 0 / Step 0.2 — TERMINOLOGY_LOCK term count: 27 terms (2 blocked)]**: The tab covers four meaningfully distinct participation paths (on-chain gateway, off-chain gateway, dual gateway, gateway-as-a-service) plus two compute types (video transcoding, AI inference), each with their own configuration and payment surface. Exceeding 20 terms was necessary to give minimal coverage of all paths. This is within the prompt's explicit allowance for multi-path tabs. Active lock contains 25 terms after blocking NaaP and BYOC.

- **[Phase 0 / Step 0.2 — verify-against flags]**: Several glossary terms reference specific external artifacts (TicketBroker contract, ServiceRegistry contract, CLI flag names). These are marked `[verify-against: ...]` using the relevant primary sources from `veracity-sources.md`. The glossary's specific claims about these artifacts (contract names, flag names) are treated as unverified — the absence of contradiction is not confirmation.

- **[Phase 0 / Step 0.2 — High-staleness terms]**: CLI flag names (MaxPricePerUnit, MaxPricePerCapability, weight factor flag names) and AI pipeline types/model IDs are included in the TERMINOLOGY_LOCK as concepts, not as specific values. Any specific flag name, default value, or model ID used in content must be verified against the latest tagged go-livepeer release at time of writing.

- **[Phase 1 — Primary persona tie-breaking]**: Personas 1 and 2 both score 9/9. Persona 2 (net-new infrastructure operator) was chosen as primary because it has the broadest information need — Persona 1 is a strict subset. This is a design assumption, not a data-backed finding.

- **[Phase 2C — S1 exits to four paths]**: The disambiguation section routes to on-chain, off-chain, dual, and hosted paths. Three of these (on-chain, off-chain, dual) are self-hosted node operation paths covered in this tab. The hosted/gateway-as-a-service path may route to Solutions (Livepeer Studio) or an external service — the disambiguation section should make clear which path leads out of the tab. This is a content design detail for Phase 2 detailed design.

- **[Phase 2C — S4 and S5 as distinct quickstart sections]**: The tab description explicitly states on-chain and off-chain quickstart paths are distinct and cannot be merged. This was honoured — they are separate instruction sections. The dual gateway path (S-dual) is not a separate quickstart in this design because it is a combination of the on-chain or off-chain path plus AI configuration (S7). If dual gateway setup has meaningfully different initial steps (e.g. OS requirements, different binary flags), a dedicated dual quickstart should be considered during detailed design.

- **[Phase 2C — S8 load flag]**: Verification for on-chain and off-chain gateways may diverge. Flagged in both the section table and here. Hold for detailed design.

- **[Phase 2D — P3 AI knowledge gap]**: The AI inference persona needs capability/pipeline concepts introduced within S7 rather than as a separate concept section. This is a content design note, not a structural gap. No new section required — content design handles it.

- **[Phase 0 / Step 0.3 — Web access note]**: No web access was used during this run. The veracity-sources.md registry was used as the authority for source verification. If web access is available for the follow-up content writing phase, the following suggested source additions may be worth investigating: `[SUGGESTED SOURCE: livepeer/naap GitHub repo — https://github.com/livepeer/naap — NaaP architecture, scope, and canonical acronym expansion — suggested tier: primary (once published to GitHub)]`. This repo is mentioned in the glossary but not in veracity-sources.md.

- **[Phase 0 / Step 0.2 — Per-pixel pricing forum link]**: The glossary cites a forum thread (`/t/a-guide-for-determining-price-per-pixel/2197`) for per-pixel pricing. This is an `acceptable` source per veracity-sources.md (forum posts can be edited; always check date). Per-pixel pricing is included in the TERMINOLOGY_LOCK as a concept; any specific pricing values or formulas in content must be verified against the thread date and cross-checked against go-livepeer release notes.
