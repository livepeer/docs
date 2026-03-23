# Gateways — Audience Design

**Tab**: Gateways
**Audience**: `gateway`
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `gateway`

**TERMINOLOGY_LOCK**:

| Term | Definition (from Product Context + veracity-sources authority) | Verification flag |
|---|---|---|
| Gateway | A node that routes AI or video jobs into the Livepeer network, paying orchestrators per job. Does not perform compute. Replaces the deprecated term "Broadcaster." | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release, CLI flag names] |
| Orchestrator | A GPU hardware operator on the supply side; receives jobs from gateways, performs transcoding or AI inference, earns ETH fees. | — |
| On-chain gateway | A gateway node managing its own Arbitrum wallet, using on-chain probabilistic micropayments and protocol-based orchestrator discovery. | [verify-against: https://github.com/livepeer/protocol — `confluence` branch] |
| Off-chain gateway | A gateway node using a remote signer for payment operations and specifying orchestrators manually; does not require the operator to hold ETH directly. Valid production configuration. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] |
| Remote signer | A separate service that holds an Ethereum private key and signs payment tickets on behalf of an off-chain gateway. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] |
| Probabilistic micropayments | A lottery-based payment mechanism where gateways send signed tickets to orchestrators; only winning tickets are redeemed on-chain, amortizing gas costs. | [verify-against: https://github.com/livepeer/protocol — `confluence` branch; cross-check relevant LIPs at https://github.com/livepeer/LIPs] |
| TicketBroker | The Arbitrum smart contract managing gateway deposits, reserves, and ticket redemption. | [verify-against: https://arbiscan.io/accounts/label/livepeer + https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js] |
| Deposit | ETH locked by a gateway into TicketBroker to fund outstanding payment tickets. | [verify-live: https://explorer.livepeer.org] |
| Reserve | ETH collateral in TicketBroker backstopping the deposit if depleted. | [verify-live: https://explorer.livepeer.org] |
| Pipeline | A configured AI processing workflow defined by pipeline type and model ID, routed by the gateway to capable orchestrators. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release; AI config surface changes frequently] |
| Capability | The pipeline/model pair an orchestrator advertises to the network; used by gateways to route matching AI requests. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] |
| Orchestrator discovery | The process by which a gateway finds available orchestrators — via the on-chain ServiceRegistry or via manually specified addresses (`-orchAddr`). | [verify-against: https://github.com/livepeer/protocol — `confluence` branch] |
| ServiceRegistry | The Arbitrum smart contract where orchestrators register their service URI for protocol-based discovery. | [verify-against: https://arbiscan.io/accounts/label/livepeer + https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js] |
| Per-pixel pricing | A cost model charging for transcoding work based on total pixels processed (width × height × frame count). | [verify-against: https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 — acceptable tier; verify specific values via Explorer] |
| Per-request pricing | A cost model charging per individual AI inference request; used for AI pipelines where pixel count is not a meaningful unit. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release; AI pricing model may change] |
| MaxPricePerUnit | CLI flag setting the maximum price per unit the gateway will accept from orchestrators; controls cost ceiling and available orchestrator pool size. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release — flag names and defaults change between releases] |
| Dual gateway | A single gateway node operating both video transcoding and AI inference workloads simultaneously (replaces deprecated "Combined mode" / "Hybrid"). | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] |
| Video transcoding | Conversion of a video stream into one or more output renditions at different resolutions or bitrates. | — |
| AI inference | Running a trained ML model on new input data; Livepeer's second compute type alongside video transcoding. | — |
| Arbitrum | The Ethereum L2 network hosting Livepeer's protocol smart contracts. | — |
| ETH | The native Ethereum currency; required for on-chain gateway deposits and gas. | — |
| NaaP (Network as a Platform) | A multi-tenant gateway architecture with JWT-based authentication and per-user usage tracking, enabling gateway operators to expose Livepeer access to third-party developers as a platform. | [verify-against: https://github.com/livepeer/go-livepeer — repo: github.com/livepeer/naap] |
| Weight factors | Configurable gateway parameters tuning the trade-off between cost, decentralisation, and performance in orchestrator selection scoring. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release — flag names subject to change] |

**Terms with network-specific meanings that differ from industry default** (anchoring question 3, flagged for explanation before use):

- **Gateway**: In web infrastructure, "gateway" usually means an API gateway or network gateway — a routing device or proxy. On Livepeer, a gateway is specifically a protocol participant with an economic role: it issues probabilistic micropayments to orchestrators and routes compute jobs. The term does not imply a firewall, load balancer, or general network routing device.
- **Off-chain gateway**: In crypto contexts, "off-chain" typically implies something unofficial, unrecorded, or test-only. On Livepeer, an off-chain gateway is a *valid production mode* — it uses a remote signer rather than managing its own Arbitrum wallet. It is not a test mode or a lesser form of operation.
- **Probabilistic micropayments**: The word "probabilistic" may suggest unreliability or that payment is not guaranteed. In Livepeer, this means payments are structured as lottery tickets where the *expected value* is fully fair — orchestrators are paid correctly on average, and the mechanism reduces gas costs rather than reducing payment reliability.
- **Pipeline**: In general software engineering, a "pipeline" often means a CI/CD pipeline or a data processing chain. On Livepeer, a pipeline specifically means an AI inference workflow — a defined type (e.g. text-to-image, live-video-to-video) plus a model ID, routed to orchestrators that advertise that capability.
- **Capability**: In general engineering, "capability" is vague and informal. On Livepeer, Capability is a defined protocol concept: the pipeline/model pair an orchestrator advertises, used as the routing key by gateways.

---

**Anchoring questions answered (Product Context + TERMINOLOGY_LOCK only):**

1. **What does this audience call themselves?**
   Before encountering Livepeer's terminology, this audience would call themselves *infrastructure operators*, *platform engineers*, *API platform builders*, or *video infrastructure developers*. Those building AI product pipelines might call themselves *AI product engineers* or *ML infrastructure operators*. The network-specific term "Gateway operator" is not how they arrive — it is a label they acquire after reading.

2. **Core job actions in their own language (3–5):**
   - Route compute jobs (video encoding or AI inference) to available processing nodes
   - Manage spend and set cost limits so per-job fees stay within budget
   - Monitor job throughput and diagnose delivery failures
   - Expose a stable API or service endpoint to their own customers or applications
   - Scale capacity to match demand without degrading job success rates

3. **Terms with network-specific meanings that differ from industry default**: listed above.

---

## Arriving Question

> "I need to route video or AI jobs through a decentralised network — what type of gateway do I run, how do I get it funded and connected, and how do I control what it costs?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | **The Platform Builder** — An infrastructure engineer at a media or AI startup evaluating Livepeer as the compute layer for their product. Has evaluated hosted options and wants to run their own gateway for cost control or custom routing logic. | Developer tab CTA ("build → operate"), external article, Discord referral | General web3 and infrastructure fluency; no go-livepeer experience; may have misconception that they need ETH to start | A gateway node running, connected to orchestrators, routing real jobs, with a clear cost model in place | 3 | 3 | 3 | **9** |
| 2 | **The Protocol-Native Operator** — An experienced node operator already running an orchestrator who wants to add a gateway to control their own job routing, reduce dependency on third-party gateways, or capture the demand side. | Orchestrators tab, Discord | Deep go-livepeer familiarity; understands staking and payments; needs gateway-specific config, not fundamentals | An off-chain gateway configured against their own orchestrators with payment flow validated | 2 | 3 | 2 | **7** |
| 3 | **The Platform Reseller (NaaP path)** — An operator who wants to run a gateway as a multi-tenant platform service — charging third-party developers API access with usage billing and access control layered on top. | External blog, Solutions tab, investor/founder referral | Business model clarity; limited protocol knowledge; may be uncertain whether they need a gateway node or a hosted product | A clear decision on the NaaP architecture and what the setup path involves, with an entry point into the setup guide | 2 | 2 | 3 | **7** |
| 4 | **The AI Pipeline Tester** — A developer who has been using a hosted gateway (Livepeer Studio or a third-party API) and wants to move to self-hosted to access specific AI pipelines, custom models, or lower latency. | Developers tab, AI docs cross-link | API fluency; has used a hosted gateway; needs to know how self-hosted differs and what extra setup it requires | A self-hosted gateway routing AI inference requests with a specific pipeline confirmed working | 2 | 2 | 2 | **6** |
| 5 | **The Return Operator** — An existing gateway operator returning to resolve a specific problem: depleted deposit, routing performance issue, pricing misconfiguration, or a new pipeline they want to enable. | Direct URL, search ("livepeer gateway deposit depleted"), Discord thread | Running gateway; specific problem context | The specific piece of operational or config information needed to resolve the problem | 1 | 2 | 2 | **5** |

**Primary persona**: The Platform Builder — this persona drives the section structure. They arrive with the most unknowns, need the most orientation, and represent the largest volume of new gateway operators. All other personas are accommodated within that structure but do not add sections unless their path is otherwise blocked.

**Self-identification**: Readers arriving at this tab likely self-identify as "developers running infrastructure" or "platform operators" — not yet as "gateway operators." The critical ambiguity is **which gateway path applies**: on-chain vs off-chain, and single-workload (video or AI) vs dual. These choices affect setup path, tooling, and prerequisite knowledge meaningfully enough that a reader cannot proceed without making them. A dedicated disambiguation section is required as the first content section.

**Entry blockers**:

- **The Platform Builder** and **AI Pipeline Tester**: Hard blocker — they cannot decide whether to run on-chain or off-chain without understanding what each implies (ETH wallet required vs remote signer). This is resolved by the disambiguation / gateway type orientation section.
- **The Platform Builder** (on-chain path): Secondary blocker — they cannot start the on-chain setup without ETH on Arbitrum. This must be addressed explicitly in the setup section *before* the steps that require a funded wallet, not as a footnote.
- **The Platform Reseller**: Hard blocker — they may not know whether NaaP is a product they buy or an architecture they build. This is resolved by the disambiguation section routing them to the NaaP path, followed by the NaaP concept section.
- **The Protocol-Native Operator**: No hard blocker — they arrive with enough context to proceed directly, but they should be routed clearly from the disambiguation section to avoid re-reading fundamentals.

---

## Jobs to be Done

| # | When… | I want to… | So I can… |
|---|---|---|---|
| 1 | I'm evaluating whether to run my own gateway vs use a hosted service | Compare the three gateway paths (self-run node, off-chain node, hosted/NaaP) on cost, control, and setup complexity | Make a confident build-vs-buy decision without starting a setup I'll need to abandon |
| 2 | I've decided to run a self-hosted gateway for the first time | Get a node running and confirmed sending real jobs to orchestrators | Validate that the stack works before I invest time in production configuration |
| 3 | I need to control what my gateway spends per job | Configure MaxPricePerUnit and per-capability price limits accurately | Stay within budget and ensure my orchestrator pool is large enough to maintain throughput |
| 4 | My gateway's deposit is running low or I'm seeing payment failures | Top up the deposit and reserve on TicketBroker correctly | Restore job flow without downtime or unpaid orchestrators |
| 5 | I want to expose my gateway as a platform to third-party developers | Set up NaaP with API keys, usage accounting, and per-user billing | Run a commercial multi-tenant service on top of my gateway node |
| 6 | I need to route AI inference jobs with a specific model | Configure the gateway to discover orchestrators advertising that pipeline/model capability and confirm jobs are dispatching | Deliver AI output through my product reliably, with acceptable latency |
| 7 | My job success rate has dropped or latency has spiked | Diagnose whether the problem is orchestrator selection, weight factor configuration, payment state, or capacity | Fix the root cause without guessing and restore SLA to my downstream application |

---

## Ideal Journey

**Linear** (discovery → operating competency):

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Understanding what a gateway is and does | `discover` | Forming a clear mental model of the gateway's role — routing demand, not performing compute — and distinguishing it from orchestrators, hosted services, and API wrappers |
| 2 | Choosing their gateway type | `evaluate` | Comparing on-chain vs off-chain operation and single-workload vs dual against their technical constraints and business model; selecting the path before any setup begins |
| 3 | Setting up and connecting the node | `setup` | Installing go-livepeer, running the gateway process in the chosen mode, confirming it reaches the orchestrator network and dispatches test jobs |
| 4 | Configuring payments and cost controls | `setup` / `build` | Funding the deposit and reserve (on-chain path) or configuring the remote signer (off-chain path); setting MaxPricePerUnit and per-capability limits |
| 5 | Configuring routing and orchestrator selection | `build` | Tuning weight factors, capability targeting, and discovery settings to match workload requirements |
| 6 | Integrating AI pipelines (if applicable) | `build` | Configuring the gateway to route AI inference requests, selecting pipelines, targeting capable orchestrators, and validating end-to-end output |
| 7 | Operating and monitoring in production | `operate` | Monitoring deposit balance, job success rates, latency metrics, and orchestrator pool health; performing routine maintenance |
| 8 | Scaling or extending the deployment | `optimise` | Adding capacity, enabling NaaP for multi-tenant access, or adding the second workload type to a single-workload deployment |

**On-demand** (return visits after completing the linear journey):

- Current CLI flag names, accepted values, and defaults for gateway configuration
- Deposit and reserve top-up procedures and expected funding amounts
- Per-capability price limit configuration for specific AI pipelines
- Orchestrator selection weight factor values and their interactions
- Failover behaviour and session management settings
- Payment failure diagnosis and remediation steps
- NaaP API key management and usage accounting configuration
- Dual gateway prerequisites and Linux-only constraint details
- Remote signer setup and community-hosted signer endpoint details
- Troubleshooting job dispatch failures by error type

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Developers tab → Gateways | Developers building custom pipelines graduate to operating their own gateway for production deployments |
| Inbound | Solutions tab → Gateways | Founders evaluating the platform discover that operating a gateway is the path to full compute control |
| Inbound | Home → Gateways | Direct audience routing from the homepage for "I want to route jobs into the network" |
| Outbound | Gateways → Orchestrators | Gateway operators need to understand what orchestrators do, how they price work, and how to evaluate them — referenced in context, linked for depth |
| Outbound | Gateways → About | Protocol economics depth (tokenomics, LPT staking, governance) is referenced as context for payment flows — the Gateways tab introduces the minimum; About is the deep reference |
| Outbound | Gateways → Developers (SDK) | Gateway operators extending their deployment with SDK-based middleware or custom integrations are routed to the Developers tab for SDK reference |

---

## Ideal Section Structure

| Section | Reader question | Job it serves | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Gateway paths: which one is mine? ⚠ *[DISAMBIGUATION — required first section]* | "I want to route jobs through Livepeer — which type of gateway applies to my situation, and what does each path require?" | J1 (evaluate gateway paths) | `orient` | `navigation` | Reader knows they want to operate a gateway; does not yet know whether on-chain, off-chain, single-workload, dual, or hosted best fits their needs | Has identified their setup path (on-chain / off-chain / dual / NaaP / hosted) and is routed to the correct starting section | `evaluate` |
| 2. How a gateway works | "What does a gateway actually do — and what doesn't it do?" | J1 (evaluate gateway paths) | `explain` | `concept` | Has chosen a path; needs to build a working mental model of gateway behaviour before setup | Can describe the gateway's role accurately — routing jobs, not performing compute; has resolved any confusion between gateway and orchestrator, and between self-hosted and hosted | `discover` |
| 3. On-chain gateway quickstart | "How do I get an on-chain gateway running and dispatching real jobs?" | J2 (first gateway running) | `start` | `instruction` | Has chosen on-chain path; understands the role; needs ETH on Arbitrum before proceeding (blocker resolved explicitly in this section's pre-step) | Has a running on-chain gateway node dispatching confirmed test jobs to orchestrators; deposit and reserve funded | `setup` |
| 4. Off-chain gateway quickstart | "How do I get an off-chain gateway running without managing an Arbitrum wallet?" | J2 (first gateway running) | `start` | `instruction` | Has chosen off-chain path; understands the role; has a remote signer endpoint available (community signer referenced) | Has a running off-chain gateway node dispatching confirmed test jobs to orchestrators via remote signer | `setup` |
| 5. Payment configuration and funding | "How do I fund my gateway's payments and make sure orchestrators get paid?" | J4 (deposit top-up / payment management) | `configure` | `instruction` | Gateway node is running; needs to configure and fund payment layer correctly for sustained operation | Has correctly funded deposit and reserve on TicketBroker (on-chain) or confirmed remote signer is signing correctly (off-chain); knows how to monitor balance and when to top up | `setup` |
| 6. Pricing and cost control | "How do I set what my gateway pays per job, and how do I stop it from overspending?" | J3 (spend control) | `configure` | `guide` | Payment layer is operational; wants to control per-job cost and maintain an adequate orchestrator pool | Has set MaxPricePerUnit and (where applicable) per-capability price limits; can reason about the trade-off between cost ceiling and pool size | `build` |
| 7. Orchestrator selection and routing | "How does my gateway decide which orchestrators to use, and how do I tune that?" | J7 (diagnose and fix routing performance) | `configure` | `guide` | Pricing is configured; wants to understand and tune selection behaviour | Has reviewed and adjusted weight factors for their workload; can explain how the scoring algorithm ranks orchestrators and what levers exist | `build` |
| 8. AI pipeline routing | "How do I route AI inference requests to orchestrators running the specific model I need?" | J6 (route AI inference jobs) | `configure` | `instruction` | Gateway is routing jobs; wants to add AI pipeline routing with a specific model; understands that pipelines are capability-targeted | Has confirmed AI inference requests dispatching to capable orchestrators; knows how to check capability availability and handle cold-start latency | `build` |
| 9. Operating a gateway in production | "What do I need to monitor and maintain day-to-day once my gateway is live?" | J7 (diagnose and fix problems) | `operate` | `guide` | Gateway is live in production; wants an operational framework for monitoring, alerting, and routine maintenance | Has a defined monitoring and maintenance routine; knows what metrics signal problems and what the first-response action is for each | `operate` |
| 10. Troubleshooting job failures | "My jobs are failing or degraded — how do I diagnose the cause?" | J7 (diagnose and fix problems) | `troubleshoot` | `guide` | Gateway is live; specific problem is occurring; needs a structured diagnostic path | Has identified the root cause category (payment state, orchestrator selection, pipeline capability, network/latency) and the corrective action | `troubleshoot` |
| 11. NaaP: building a platform on top of your gateway | "How do I expose my gateway to third-party developers with API keys, usage billing, and access control?" | J5 (NaaP platform setup) | `build` | `guide` | Gateway is operational in production; has decided to run a multi-tenant platform service on top of it | Has a clear picture of the NaaP architecture and what is required to stand it up; has an actionable entry point into the NaaP setup path | `build` |
| 12. Scaling your gateway deployment | "When my gateway reaches capacity limits, how do I add capacity?" | J5 / J7 (platform growth; performance management) | `optimise` | `guide` | Gateway is in production; handling real load; beginning to encounter capacity or performance ceiling | Has identified whether horizontal or vertical scaling applies to their constraint; has a concrete next action for their scaling path | `optimise` |

**Section count**: 12 — within the 8–12 target. Sections 3 and 4 are parallel quickstarts serving two distinct setup paths (on-chain / off-chain); they cannot be combined without blocking one path. Section 12 is included because scaling is a distinct post-operate job that cannot fold cleanly into Section 9 without that section exceeding a single primary purpose.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| The Platform Builder (on-chain) | Section 1 (disambiguation) | Section 9 (operating in production), returns on-demand for Section 10 | None — Section 1 routes to Section 2 → 3 → 5 → 6 → 7 → 9 with no gaps | Section 3 must explicitly surface the ETH funding requirement as a pre-step before the first actionable instruction — failure to do so creates a silent blocker mid-setup | None |
| The Platform Builder (off-chain) | Section 1 (disambiguation) | Section 9 | None | Section 4 must explicitly reference the community remote signer endpoint (signer.eliteencoder.net) — without this, readers with no existing signer are blocked silently | None |
| The Protocol-Native Operator | Section 1 (disambiguation — routes them quickly past fundamentals) | Section 4 or 3 (depending on chosen mode) → Section 6 → Section 7 | None — Section 1 should offer a "skip fundamentals" routing signal for readers with existing go-livepeer knowledge | Section 2 should not require a reader who knows go-livepeer to read through basic role explanation — consider a "skip to setup" callout at Section 2's opening | None |
| The Platform Reseller (NaaP path) | Section 1 (disambiguation) | Section 11 (NaaP) | None — Section 1 must explicitly surface the NaaP path as an option and route there; if NaaP is not named in Section 1, this persona has no clear path forward | Section 11 must explain what NaaP is architecturally before describing how to set it up — arriving from Section 1, this persona may have no concept of NaaP at all | None — Section 11 handles this, but Section 1 must visibly surface the NaaP path |
| The AI Pipeline Tester | Section 1 (disambiguation) → Section 4 (off-chain quickstart, most likely) | Section 8 (AI pipeline routing) | None | Section 8 must address cold-start latency explicitly — AI Pipeline Testers migrating from hosted gateways may not be aware this latency exists in self-hosted deployments | None |
| The Return Operator | Section 10 (troubleshooting), Section 5 (payment top-up), or Section 6 (pricing config) — direct deep-link | Exits immediately after resolving specific problem | None | Sections 5, 6, and 10 must be self-contained enough to use without rereading prior sections — return operators should not need to re-read Sections 1–4 to execute a targeted operational task | None |

**Gate result**: All six personas have a complete, unblocked path through the structure. Two knowledge gaps identified (ETH funding pre-step in Section 3; cold-start latency in Section 8) and one routing requirement (NaaP path visible in Section 1) — these are content requirements for individual sections, not missing structural sections.

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

- **[Phase 0 / Step 0.2 — glossary cross-check]**: The glossary defines "Network as a Platform (NaaP)" as "Network-as-a-Product" in its definition line, then correctly describes it as a multi-tenant gateway architecture with API key management. The name expansion is internally inconsistent ("NaaP" initialises as "Network as a Platform" in the heading and "Network-as-a-Product" in the body). The Product Context block does not define NaaP by name, so the correct expansion cannot be confirmed from authority alone. Marked [verify-against: github.com/livepeer/naap]. **Discrepancy noted**: the glossary heading uses "Network as a Platform" but the body says "Network-as-a-Product" — these should be reconciled against the repo readme or a primary source.

- **[Phase 0 / Step 0.2 — high-staleness flags]**: `MaxPricePerUnit`, `MaxPricePerCapability`, weight factor flag names (`selectRandWeight`, `selectStakeWeight`, `selectPriceWeight`), and remote signer endpoint (`signer.eliteencoder.net`) are all CLI-level details that change between go-livepeer releases. All four are marked `[verify-against: go-livepeer latest tagged release]`. The remote signer endpoint in particular is community-hosted infrastructure — its availability should be verified before any page referencing it goes live.

- **[Phase 0 / Step 0.2 — BYOC scope]**: The glossary defines BYOC (Bring Your Own Compute / Bring Your Own Container) as a term relevant to the Gateways tab. The Product Context block describes BYOC in the context of Orchestrators (custom container deployment for AI pipelines). From the gateway's perspective, BYOC is an upstream infrastructure choice made by orchestrators — not a gateway configuration. BYOC was excluded from the TERMINOLOGY_LOCK because it describes an orchestrator-side capability that gateways consume (via capability targeting), not a gateway operator task. If BYOC gateway-side configuration emerges in content writing, it should be verified against the go-livepeer repo before being introduced.

- **[Phase 1 — Dual gateway as persona vs path]**: The brief's persona rules ask whether meaningfully different setup paths should be treated as distinct personas. The dual gateway (video + AI simultaneously) has distinct prerequisites (Linux-only, more complex routing configuration) but the same economic and payment model as either single-workload type. It was treated as a configuration variant of the Platform Builder persona rather than a separate persona, because the arriving motivation and entry vector are the same. If dual gateway setup is substantially more complex in practice, it may warrant a dedicated quickstart section (parallel to Sections 3 and 4). This is a flag for content writing to resolve.

- **[Phase 2C — Section count]**: Section count is 12, at the upper end of the 8–12 target. The two quickstart sections (Sections 3 and 4) are justified as parallel paths for on-chain and off-chain; combining them would require a branching instruction structure that degrades both paths. If the dual gateway path requires a third quickstart, the count would move to 13 — outside range. Noted for detailed design phase.

- **[Phase 0 / Step 0.3 — web search]**: A web search for recent (within 18 months) gateway-relevant primary sources not already in veracity-sources.md would be useful — particularly for any recent go-livepeer releases updating CLI flag names, and for any new LIPs affecting gateway payment mechanics. No search was performed during this run as the brief was executed from provided documents only.

  `[SUGGESTED SOURCE: go-livepeer releases page — https://github.com/livepeer/go-livepeer/releases — latest release notes for CLI flag changes affecting gateways — primary]`
  `[SUGGESTED SOURCE: Livepeer AI docs — https://docs.livepeer.org/ai/introduction — current AI pipeline types and model IDs for capability targeting — acceptable (lead to primary: go-livepeer repo)]`
