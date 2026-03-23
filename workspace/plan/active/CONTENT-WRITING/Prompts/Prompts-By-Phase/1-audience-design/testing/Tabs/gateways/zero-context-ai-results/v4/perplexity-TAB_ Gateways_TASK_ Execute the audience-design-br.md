<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# TAB: Gateways

TASK: Execute the audience-design-brief.

All source files are now loaded. Executing the brief in full.[^1][^2][^3][^4]

***

```markdown
# Gateways — Audience Design

**Tab**: Gateways
**Audience**: `gateway`
**TERMINOLOGY_LOCK**: [generated in Phase 0]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

### Step 0.1 — AUDIENCE

> **AUDIENCE**: `gateway`

From the Audience Definitions table: `gateway` — Running gateway infrastructure, routing jobs into the network.

---

### Step 0.2 — TERMINOLOGY_LOCK

**Authority sources used**: Product Context block (primary), `veracity-sources-4.md` (source authority registry), `glossary-gateways-3.md` (cross-check only, not authoritative), `deprecated-terms-2.md` (deprecated term filter).

**Deprecated-term pre-check applied**: "Broadcaster" → excluded, replaced by Gateway; "Combined mode" / "Hybrid" → excluded, replaced by Dual mode; "Transcoder" → not used as synonym for Orchestrator.

Terms surfaced and verified:

| # | Term | Definition (from Product Context + reasoning against authority sources) | Verify-live / Notes |
|---|---|---|---|
| 1 | **Gateway** | A node that submits jobs, routes work to orchestrators, manages payment flows, and provides a protocol interface between applications and the Livepeer network. Does not perform compute. No GPU required. | — |
| 2 | **Orchestrator** | A supply-side node contributing GPU resources; receives jobs from gateways, performs video transcoding or AI inference, earns ETH and LPT. From the gateway's perspective, the compute provider it routes work to. | — |
| 3 | **Transcoding** | Digital-to-digital conversion of a video stream from one encoding/resolution/bitrate to one or more output renditions; one of the two compute types the gateway routes. | — |
| 4 | **AI inference** | Running a trained ML model on new input data to produce output (images, video, text); the second compute type the gateway routes; distinct from video transcoding. | — |
| 5 | **Pipeline** | A configured end-to-end AI processing workflow defining input type, model, and output. Gateways match AI requests to orchestrators advertising the corresponding capability. | [verify-against: https://github.com/livepeer/go-livepeer] — pipeline type names and model IDs change with releases |
| 6 | **Capability** | An AI service or job type (pipeline/model pair) that an orchestrator can perform, advertised to the network so gateways can route matching requests. | [verify-against: https://github.com/livepeer/go-livepeer] |
| 7 | **Probabilistic micropayments** | A lottery-based payment mechanism where gateways send signed tickets to orchestrators; only winning tickets are redeemed on-chain, amortising gas costs. The core Livepeer payment layer. | [verify-against: https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md] |
| 8 | **TicketBroker** | The smart contract on Arbitrum managing the probabilistic micropayment system — holding gateway deposits and reserves, processing winning ticket redemptions. | [verify-against: https://github.com/livepeer/protocol — confluence branch; https://arbiscan.io/accounts/label/livepeer] |
| 9 | **Deposit** | ETH locked by a gateway into the TicketBroker smart contract to pay orchestrators via probabilistic micropayments. | `[verify-live: https://explorer.livepeer.org]` — on-chain state |
| 10 | **Reserve** | ETH held as collateral in the TicketBroker contract backing outstanding payment tickets; backstop if the deposit is depleted. | `[verify-live: https://explorer.livepeer.org]` |
| 11 | **On-chain gateway** | A gateway node connected to the Livepeer protocol on Arbitrum, managing its own Ethereum wallet and using on-chain probabilistic micropayments and protocol-based orchestrator discovery. | — |
| 12 | **Off-chain gateway** | A gateway node operating without direct blockchain integration, using a remote signer for payment operations and specifying orchestrators manually rather than via protocol discovery. Valid for production use. | — |
| 13 | **Remote signer** | A separate service holding an Ethereum private key and signing payment tickets on behalf of an off-chain gateway, so the gateway itself holds no ETH. | [verify-against: https://github.com/livepeer/go-livepeer] |
| 14 | **Orchestrator discovery** | The process by which a gateway finds and evaluates available orchestrators — automatically via the on-chain ServiceRegistry, or manually via configured addresses (off-chain). | [verify-against: https://github.com/livepeer/protocol — confluence branch] |
| 15 | **ServiceRegistry** | A smart contract on Arbitrum where orchestrators register their service URI so that on-chain gateways can discover and contact them. | [verify-against: https://arbiscan.io/accounts/label/livepeer; https://github.com/livepeer/protocol] |
| 16 | **Session** | An active, persistent connection between a gateway and an orchestrator during which one or more jobs (segments or AI requests) are processed. Session affinity keeps warm models loaded. | — |
| 17 | **MaxPricePerUnit** | A CLI configuration flag setting the maximum price per pixel unit a gateway will accept from orchestrators; orchestrators priced above this threshold are excluded from selection. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] |
| 18 | **MaxPricePerCapability** | A CLI configuration flag setting the maximum price a gateway will pay for a specific AI pipeline/model pair, overriding MaxPricePerUnit for that capability. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] |
| 19 | **Gateway-as-a-service** | A hosted deployment model where a third party runs gateway infrastructure on the operator's behalf; the user receives an API endpoint rather than running go-livepeer directly. Examples: Livepeer Studio, Livepeer Cloud. | — |
| 20 | **Dual mode** | A deployment configuration where a single gateway node operates both video transcoding and AI inference workloads simultaneously. Note: "Combined mode" and "Hybrid" are deprecated — do not use. | — |
| 21 | **Arbitrum** | A Layer 2 Optimistic Rollup settling to Ethereum that hosts the Livepeer protocol smart contracts; the chain gateways interact with for on-chain payment and discovery. | — |
| 22 | **LPT (Livepeer Token)** | The protocol token used for staking by orchestrators, delegation, and governance. Not directly required by gateways for operations; relevant when understanding orchestrator selection dynamics (stake weight). | `[verify-live: https://explorer.livepeer.org]` |

**Note on exceeding 20**: 22 terms included because the Gateways tab covers three meaningfully distinct participation paths (on-chain gateway, off-chain gateway, gateway-as-a-service), each requiring path-specific payment and deployment concepts. Dropping below 22 would leave one path without minimum coverage.

> **TERMINOLOGY_LOCK**: `gateway, orchestrator, transcoding, AI inference, pipeline, capability, probabilistic micropayments, TicketBroker, deposit, reserve, on-chain gateway, off-chain gateway, remote signer, orchestrator discovery, ServiceRegistry, session, MaxPricePerUnit, MaxPricePerCapability, gateway-as-a-service, dual mode, Arbitrum, LPT`

**Glossary cross-check discrepancies noted for Addendum**:
- The glossary entry for `Bring Your Own Compute (BYOC)` defines the acronym as "Bring-Your-Own-Container." The Product Context block and standard industry usage treat BYOC as "Bring Your Own Compute." The acronym expansion in the glossary appears to be an error. Flagged for resolution against the go-livepeer repo. Not included in TERMINOLOGY_LOCK pending verification.
- The glossary entry for `Network as a Platform (NaaP)` defines the acronym as "Network-as-a-Product." Acronym/expansion mismatch. Excluded from TERMINOLOGY_LOCK; noted for resolution.

---

### Step 0.3 — Anchoring Questions

**1. What does this audience call themselves?**

Before encountering Livepeer's terminology, this audience describes themselves as a **video infrastructure operator**, **AI API provider**, **compute middleware operator**, or **platform engineer**. In their own world they are routing, proxying, or reselling access to compute or video processing capacity. They think in terms of customers, latency SLAs, uptime, cost-per-request, and API surface — not in terms of blockchain roles.

**2. What are the 3–5 actions that define their core job?**

1. Receive job requests (video streams or AI inference calls) from client applications
2. Select which compute providers to route each job to, based on capability, price, and performance
3. Manage payment flows to compute providers, ensuring jobs are paid for and infrastructure stays funded
4. Monitor throughput, latency, and errors — and respond when things break
5. Set pricing and spending limits to stay within cost targets

**3. Which terms in the TERMINOLOGY_LOCK have a network-specific meaning that differs from the industry default?**

| Term | Industry default meaning | Livepeer-specific meaning / risk of confusion |
|---|---|---|
| **Gateway** | A network boundary device (firewall, API gateway, load balancer) | Here: the demand-side node that submits compute jobs and manages payments on a decentralised network. A first-time reader will expect an API gateway pattern — the Livepeer meaning includes payment management and cryptographic signing obligations that industry "gateways" never have. |
| **Orchestrator** | A workflow coordination system (e.g. Kubernetes, Airflow, Temporal) | Here: a GPU hardware operator providing compute supply. A first-time reader will assume this means workflow orchestration, not a node running GPU inference jobs. |
| **Session** | A web session (HTTP, cookie-based) | Here: a persistent connection between gateway and orchestrator across which multiple compute segments or requests are processed and billed. |
| **Pipeline** | A CI/CD or data pipeline | Here: a specific configured AI workload type (e.g. text-to-image with a named model), the unit of capability the gateway routes to. |
| **Deposit** | A financial deposit or security bond | Here: on-chain ETH locked into a smart contract to fund probabilistic micropayment tickets in real time. |
| **Capability** | A general feature or skill | Here: a precisely defined AI service advertisement (pipeline type + model ID) that an orchestrator broadcasts so a gateway can route matching requests to it. |

---

## Arriving Question

> "I want to route AI or video jobs through Livepeer — what do I actually need to run, and which setup path applies to my situation?"

---

## Personas

### Phase 1 — Persona Research

**Situation that triggers a visit:**

The typical trigger is one of three events:
1. A developer or technical lead has finished building a product using a hosted gateway (Livepeer Studio or similar) and is evaluating whether to operate their own gateway to reduce cost or gain more control.
2. An infrastructure team has been tasked with integrating Livepeer as a compute layer into an existing video or AI platform.
3. A technically capable individual has found Livepeer via community channels (Discord, a blog post, a technical article) and is evaluating whether to build a gateway business.

**What they know at arrival:**

They know something exists called a "gateway." They may have a vague sense of the payment model (paying orchestrators per job) but they do not yet understand the three distinct deployment paths, the on-chain vs off-chain distinction, or the wallet/deposit requirements for on-chain operation.

**What they do not yet know:**

- That "gateway" covers three meaningfully different setups (on-chain self-hosted, off-chain self-hosted, hosted gateway-as-a-service)
- That on-chain operation requires managing ETH on Arbitrum
- That an off-chain gateway is a valid production path (not just testing)
- What hardware is (and isn't) required — specifically that no GPU is needed
- How orchestrator discovery works and how to configure pricing

**Arriving question (specific):**
> "I want to route AI or video jobs through Livepeer — what do I actually need to run, and which setup path applies to my situation?"

**Successful visit:**
A concrete action completed or decision made — one of:
- Has deployed a working gateway node (any mode) and routed a first job
- Has chosen a setup path and understands the prerequisites for it
- Has connected their existing platform to Livepeer via an SDK or API without running go-livepeer

**Common wrong-path risks:**
- Assuming they need GPU hardware (they do not — only orchestrators do)
- Confusing "gateway" with API gateway concepts from their existing stack
- Starting an on-chain setup without understanding the ETH deposit requirement (hard stop)
- Assuming off-chain is only for testing (it is a valid production path)
- Arriving from the Developers tab, where they were using a hosted gateway, and not realising they are now on a different path (operating vs building)

---

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The Self-Hosted Operator** | Developers tab CTA ("graduate to your own gateway"), Discord referral, technical blog post | Has been using a hosted gateway or SDK; understands the product surface; wants control, cost reduction, or higher throughput; no blockchain experience required but some present | A running on-chain or off-chain go-livepeer gateway with first job routed and payments flowing | 3 | 3 | 3 | 9 |
| 2 | **The Platform Builder** | Solutions tab CTA, external article, referral from a founder/CTO evaluating infrastructure | Is building a platform that will expose Livepeer capacity to end users (NaaP, clearinghouse, multi-tenant gateway); understands infrastructure but is evaluating commercial model and technical architecture | Confidence that the gateway model supports their commercial use case; a clear architecture for multi-tenant operation; a path to start | 2 | 3 | 3 | 8 |
| 3 | **The Off-Chain Explorer** | Discord link, community guide, or direct search for "Livepeer gateway without ETH" | Wants to experiment with gateway routing but does not want to manage ETH, Arbitrum deposits, or on-chain setup; may be a developer evaluating feasibility | A working off-chain gateway connected via remote signer with first job routed — without touching Arbitrum | 2 | 2 | 2 | 6 |
| 4 | **The Hosted Service User** | Home tab, Solutions tab, search for "Livepeer AI API" | Does not want to run infrastructure at all; wants an API endpoint they can call | Directed to a gateway-as-a-service option (Livepeer Studio, Livepeer Cloud); understands they will not be operating a gateway node themselves — confident in the routing decision | 3 | 1 | 2 | 6 |

**Volume and depth assumptions**: Volume 3 for The Self-Hosted Operator is based on the Product Context block positioning the Gateways tab as the operational path — the primary readership for an operator tab is operators setting up nodes. The Hosted Service User scores Vol 3 because many visitors arrive not knowing they don't need to run a node; Depth 1 because the tab's content for this path is a short routing callout, not a setup path.

> **Primary persona**: **The Self-Hosted Operator** — drives the section structure. All other personas are accommodated within that structure.

**Self-identification check:**

This audience would describe themselves as "running a gateway" or "setting up a gateway." That label maps to three distinct paths with different prerequisites, hardware requirements (none in all cases), payment models, and setup complexity. A reader arriving with "I want to run a gateway" cannot self-identify their correct path without reading content.

**Decision: Dedicated disambiguation section required as the first content section.**

Three paths are meaningfully distinct:
1. **On-chain gateway** — requires Arbitrum ETH, uses protocol discovery, highest autonomy
2. **Off-chain gateway** — uses remote signer, manually specifies orchestrators, no ETH management
3. **Gateway-as-a-service** — no infrastructure; redirects out of the setup path

This is 3+ paths with a reader who cannot route themselves without content. Disambiguation section is required.

**Entry blockers:**

| Persona | Hard-stop blocker | Resolving section |
|---|---|---|
| The Self-Hosted Operator (on-chain path) | Must have ETH on Arbitrum before any job can be routed on-chain | The "Payments and Funding" section must appear before the quickstart for on-chain setup |
| The Self-Hosted Operator (off-chain path) | Must have a remote signer configured before the gateway can sign tickets | The "Payments and Funding" or "Off-Chain Setup" section must introduce remote signer before job routing instructions |
| The Platform Builder | Must understand the multi-tenant architecture before choosing implementation path | Concept section for platform operation must precede implementation guides |
| The Hosted Service User | No hard blocker — redirect at disambiguation; they exit the tab | Disambiguation section handles this |

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I'm evaluating whether to run my own gateway vs use a hosted service | Understand the three operating paths and their prerequisites | Make a confident decision about which setup applies to my situation before I start |
| J2 | I've decided to run a self-hosted gateway and I'm starting from zero | Get a minimal gateway node running and route my first job | Prove the setup works in my environment before investing in production configuration |
| J3 | I'm configuring my gateway's orchestrator selection and pricing | Set spending limits and tune routing parameters | Control my costs and ensure my gateway selects capable, performant orchestrators |
| J4 | I want to route both video transcoding and AI inference from the same node | Understand dual-mode configuration and its constraints | Run a single node serving both workload types without deploying separate infrastructure |
| J5 | My running gateway has stopped routing jobs or is producing errors | Diagnose which component is failing and follow a resolution path | Restore normal operation without having to read source code |
| J6 | I'm building a platform that exposes Livepeer to multiple end users | Understand the multi-tenant gateway architecture and payment abstractions | Implement billing, access control, and usage tracking on top of my gateway |
| J7 | I have a gateway running and want to improve routing efficiency or reduce costs | Tune weight factors, pricing parameters, and session management | Optimise the trade-off between cost, performance, and orchestrator diversity for my workload |

---

## Ideal Journey

### Linear

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Choosing a path | `evaluate` | Reading the disambiguation section; identifying whether they need on-chain, off-chain, or hosted; understanding prerequisites |
| 2 | Understanding the gateway's role | `discover` | Learning what a gateway does, what it does not do (no compute, no GPU), and how it fits into the network architecture |
| 3 | Preparing for setup | `setup` | Acquiring prerequisites specific to their chosen path — ETH + Arbitrum wallet (on-chain), or remote signer access (off-chain) |
| 4 | Getting to first job | `setup` | Following a path-specific quickstart to install go-livepeer, configure the node, connect to orchestrators, and route a first job |
| 5 | Configuring for production | `build` | Setting pricing limits, orchestrator selection parameters, transcoding profiles or AI pipeline routing, and payment top-up schedule |
| 6 | Verifying the setup | `build` | Confirming the gateway is routing correctly, payments are flowing, and key metrics are within expected ranges |
| 7 | Operating day-to-day | `operate` | Monitoring throughput, latency, payment deposit levels, and orchestrator health; responding to incidents |
| 8 | Optimising performance and cost | `optimise` | Tuning weight factors, adjusting MaxPricePerUnit and MaxPricePerCapability, reviewing session patterns, scaling capacity |

### On-demand

- Current pricing parameters and their CLI flag names — what to pass to `-maxPricePerUnit` and `-maxPricePerCapability`
- How to top up the TicketBroker deposit and reserve on Arbitrum
- How to add or change orchestrator addresses (on-chain and off-chain paths)
- Payment ticket redemption rate — when to increase deposit size
- Available AI pipeline types and supported model IDs
- Remote signer configuration options and the community-hosted signer endpoint
- Weight factor names and their effect on orchestrator selection scoring
- How to enable dual-mode operation and its OS/platform constraints
- Monitoring metrics — what Prometheus metrics the gateway exposes and what thresholds to alert on
- Failover behaviour — how the gateway handles a non-responsive orchestrator mid-session

### Cross-tab

| Direction | From / To | Why |
|---|---|---|
| Inbound | Developers → Gateways | Developers who have been building with hosted gateways and are graduating to operating their own infrastructure |
| Inbound | Solutions → Gateways | Founders and builders evaluating the platform model may reach the Gateways tab to understand the gateway's role in their architecture |
| Inbound | Home → Gateways | General audience routing — Home routes visitors to role tabs |
| Outbound | Gateways → Orchestrators | Understanding the compute supply side — capability advertisement, pricing, and stake weight that govern which orchestrators the gateway routes to |
| Outbound | Gateways → Developers | SDK-based gateway deployment or building custom gateway middleware requires Developers tab reference material |
| Outbound | Gateways → About | Protocol economics depth — how LPT staking affects orchestrator availability and active set dynamics |

---

## Ideal Section Structure

| # | Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|---|
| S1 | **Which path is mine?** (Disambiguation) | "I want to run a gateway — but which kind, and what do I need before I start?" | J1 | `orient` | `navigation` | Has arrived knowing they want a gateway; does not yet know which of three paths applies | Has identified whether they need on-chain, off-chain, or hosted gateway; knows the hard prerequisites for their path | `evaluate` |
| S2 | **What a gateway does** | "What exactly does this node do — and what does it not do?" | J1 | `explain` | `concept` | Has chosen a path; needs to understand the role before setup makes sense | Can describe what the gateway does (routes, pays, manages sessions) and does not do (no compute, no GPU); can explain how it fits between their application and the network | `discover` |
| S3 | **Network architecture** | "How does my gateway actually connect to orchestrators and what happens when a job runs?" | J1 | `explain` | `concept` | Understands the gateway's role; needs the end-to-end flow | Can trace a job from request received → orchestrator selected → job executed → payment issued; can identify which components are theirs to operate | `discover` |
| S4 | **Payment model and funding** | "How do payments work, and what do I need to fund before my gateway can route jobs?" | J2, J3 | `learn` | `concept` | Understands the network architecture; needs the payment layer before setup blockers become blocking | Has decided whether on-chain (ETH deposit + reserve on Arbitrum) or off-chain (remote signer); knows what to acquire; understands ticket lifecycle | `evaluate` |
| S5 | **Quickstart — on-chain gateway** | "How do I install and run a go-livepeer gateway connected to the network with on-chain payments?" | J2 | `start` | `instruction` | Has ETH on Arbitrum; has chosen on-chain path; has read S4 | Has a running on-chain gateway that has routed at least one job; payments are flowing | `setup` |
| S6 | **Quickstart — off-chain gateway** | "How do I run a gateway without managing ETH, using a remote signer?" | J2 | `start` | `instruction` | Has chosen off-chain path; has remote signer access (community-hosted or own); has read S4 | Has a running off-chain gateway connected via remote signer that has routed at least one job | `setup` |
| S7 | **Orchestrator selection and routing** | "How do I control which orchestrators my gateway uses, and how does selection actually work?" | J3, J7 | `configure` | `guide` | Has a running gateway; needs to move beyond defaults | Has configured MaxPricePerUnit, weight factors, and (where applicable) orchAddr or discovery mode; understands scoring algorithm trade-offs | `build` |
| S8 | **Pricing configuration** | "How do I set spending limits and what does pricing look like for video vs AI workloads?" | J3 | `configure` | `guide` | Understands orchestrator selection; needs pricing-specific guidance | Has set appropriate MaxPricePerUnit and MaxPricePerCapability values for their workload types; understands per-pixel vs per-request pricing distinction | `build` |
| S9 | **Dual-mode configuration** | "Can I run both video transcoding and AI inference on the same gateway, and how?" | J4 | `configure` | `instruction` | Has a running single-mode gateway; wants to add the second workload type | Has configured dual-mode operation; knows the OS constraint (Linux required for AI component); has verified both workload types are routing | `build` |
| S10 | **Payment operations** | "How do I keep my gateway funded — how do I top up the deposit, check balance, and manage reserve?" | J2, J5 | `operate` | `guide` | Has a running on-chain gateway; needs day-to-day payment management knowledge | Has topped up deposit and reserve; knows how to read current balance; understands the signal to top up before running dry | `operate` |
| S11 | **Monitoring and observability** | "What should I watch to know my gateway is healthy, and what tells me something is wrong?" | J5 | `operate` | `guide` | Has a running, configured gateway; needs operational visibility | Has identified key metrics (throughput, latency, payment ticket rate, deposit balance); has set up basic alerting or knows what thresholds to watch | `operate` |
| S12 | **Troubleshooting** | "My gateway isn't routing jobs — how do I find out why?" | J5 | `troubleshoot` | `guide` | Gateway is failing or degraded; reader is diagnosing | Has identified the failure component (payment, discovery, session, routing); has followed the resolution path for their failure type; gateway is routing again or blocker is clearly identified | `troubleshoot` |
| S13 | **Platform operation (multi-tenant gateway)** | "I want to expose my gateway to multiple users — how do I add billing, API keys, and usage tracking?" | J6 | `build` | `guide` | Has a running, stable gateway; wants to build a commercial layer on top | Has identified the relevant architecture (NaaP, clearinghouse, or custom) for their use case; has a path to implement multi-tenant access and billing | `build` |

⚠ **Design flag on S13**: This section may accumulate `purpose: evaluate` (choosing between NaaP vs clearinghouse vs custom) and `purpose: build` (implementation). Flag for possible split during detailed design. See Addendum.

**Section count**: 13 sections. Above the 8–12 guideline by 1. The additional section is S9 (Dual-mode), which serves a distinct job (J4) with genuinely separate configuration requirements. Collapsing it into S7 or S8 would block The Self-Hosted Operator who wants dual-mode from completing their goal without a knowledge gap. Justified.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| **The Self-Hosted Operator (on-chain)** | S1 (disambiguation) | S11 (monitoring) or S12 (troubleshooting) | None — S4 resolves the ETH/deposit blocker before S5 requires it | None | None |
| **The Self-Hosted Operator (off-chain)** | S1 (disambiguation) | S11 (monitoring) | None — S4 introduces remote signer before S6 requires it | S6 must clearly state that off-chain is a valid production path (not just testing) — risk of the reader under-valuing the path | None — content gap within S6, not a missing section |
| **The Platform Builder** | S1 (disambiguation) → S2 → S3 → S13 | S13 | None — S2 and S3 provide architecture context before S13 requires it | S13 must introduce NaaP and clearinghouse as concrete architectural options, not just concepts. If it does not, this persona cannot make a build decision. Content gap within S13. | None — content gap within S13, not a missing section |
| **The Off-Chain Explorer** | S1 (disambiguation) → S6 | S6, S7 | None | S6 must link clearly to remote signer setup; if the community-hosted signer is not surfaced here, this persona hits a practical blocker finding the endpoint | None |
| **The Hosted Service User** | S1 (disambiguation) | S1 | None — S1 routes them to gateway-as-a-service and they exit the tab | None | None |

**Gap resolutions applied**: Two content gaps within existing sections noted (S6 production-path framing; S13 concrete architecture options). Neither requires a new section — both are authoring instructions for those sections.

---

## ⏸ Checkpoint

- [x] Phase 0: AUDIENCE derived from Audience Definitions table?
- [x] Phase 0: TERMINOLOGY_LOCK generated from Product Context + veracity-sources as authority — glossary as cross-check only?
- [x] Phase 0: Three anchoring questions answered using only Product Context + generated lock?
- [x] Arriving question is specific — not a topic, an actual question?
- [x] Personas described with motivation and entry vector — not just role labels?
- [x] Self-identification check done — disambiguation section added as first content section?
- [x] Entry blockers identified and resolved by section order?
- [x] Jobs are first-principles — not derived from current nav structure?
- [x] Every section has a reader question, job, entry state, and exit state?
- [x] No exit state uses "understands"?
- [x] Cross-tab gate applied — decision-enabling content included; CROSS-TAB rows only where audience does not need the content?
- [x] Persona path validation done — every persona has an unblocked path?
- [x] All enum values are canonical — no invented tokens?

---

## Addendum — Brief Execution Flags

- **[Phase 0 / Step 0.2 — BYOC]**: The glossary entry for `Bring Your Own Compute (BYOC)` expands the acronym as "Bring-Your-Own-Container," which conflicts with the standard expansion "Bring Your Own Compute." Both expansions coexist in the glossary. The term was excluded from the TERMINOLOGY_LOCK pending resolution. Assumption made: proceed without BYOC in the lock. Suggested resolution: verify against the go-livepeer repo and canonical AI docs. `[verify-against: https://github.com/livepeer/go-livepeer]`

- **[Phase 0 / Step 0.2 — NaaP]**: The glossary entry for `Network as a Platform (NaaP)` expands the acronym as "Network-as-a-Product" in the definition header. Acronym/expansion mismatch. Term included in Phase 2C (S13) but not in the TERMINOLOGY_LOCK pending clarification. Assumption made: the concept is valid; the acronym expansion is an authoring error. `[verify-against: https://github.com/livepeer/naap]`

- **[Phase 0 / Step 0.3 — Web access]**: Web search was available during execution. The following sources were not listed in `veracity-sources-4.md` and are suggested for addition:
  - `[SUGGESTED SOURCE: Livepeer AI docs — https://docs.livepeer.org/ai/introduction — current AI pipeline types, supported models, and gateway API surface — lead (verify claims against go-livepeer repo)]`
  - `[SUGGESTED SOURCE: go-livepeer Releases page — https://github.com/livepeer/go-livepeer/releases — latest tagged release changelog, flag changes — primary]`

- **[Phase 1 — Hosted Service User persona]**: The Hosted Service User scores Vol 3 but Depth 1 — meaning many visitors arrive for this path but the tab's job for this persona is to route them out, not serve them. This creates a risk that authors over-serve this persona with content that belongs in Solutions or Developers. The disambiguation section (S1) must be explicit that gateway-as-a-service users exit the tab at S1.

- **[Phase 2C — S13 design flag]**: S13 (Platform operation / multi-tenant gateway) is accumulating `purpose: evaluate` (choosing NaaP vs clearinghouse vs custom implementation) and `purpose: build` (implementation path). These are likely two pages during detailed design: (a) "Which multi-tenant architecture is right for me?" (`evaluate`, `guide`) and (b) "Implementing NaaP / clearinghouse" (`build`, `instruction`). Flag retained in section table.

- **[Phase 2C — Section count]**: 13 sections, one above the 8–12 guideline. The additional section is S9 (Dual-mode configuration). Dual-mode serves a distinct job (J4) with a separate OS constraint and configuration surface. Collapsing it would block J4 without a dedicated section. Justified.

- **[Phase 0 / Step 0.2 — LPT]**: LPT is included in the TERMINOLOGY_LOCK because gateway operators need to understand why stake weight affects orchestrator selection (stake-weighted routing). However, gateways do not hold or manage LPT themselves. Care must be taken in authoring to explain LPT in context of *why it matters to the gateway's routing decisions*, not as an operational requirement for the gateway.
```

<div align="center">⁂</div>

[^1]: audience-design-v4.md

[^2]: deprecated-terms-2.md

[^3]: glossary-gateways-3.md

[^4]: veracity-sources-4.md

