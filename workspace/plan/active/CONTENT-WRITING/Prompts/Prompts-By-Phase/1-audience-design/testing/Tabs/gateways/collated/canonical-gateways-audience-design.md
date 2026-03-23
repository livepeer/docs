# Gateways — Canonical Audience Design

**Tab**: Gateways
**Audience**: `gateway`
**Synthesised from**:
  - `chatgpt-v4-gateways-audience-design.md`
  - `claude-web-v4-gateways-audience-design.md`
  - `perplexity-TAB_ Gateways_TASK_ Execute the audience-design-br.md`
**Synthesised**: 2026-03-23
**Status**: CANONICAL — ready for Phase 2 input

---

## Terminology Lock

| Term | Definition | Flags | Consensus |
|---|---|---|---|
| Gateway | A node that submits jobs, routes work to orchestrators, manages payment flows, and provides a protocol interface between applications and the Livepeer network. Does not perform compute. No GPU required. Replaces the deprecated term "Broadcaster." | — | 3-run consensus |
| Orchestrator | A supply-side node contributing GPU resources; receives jobs from gateways, performs video transcoding or AI inference, earns ETH fees. From the gateway's perspective, the compute provider to which work is routed. | — | 3-run consensus |
| On-chain gateway | A gateway node connected to the Livepeer protocol on Arbitrum, managing its own Ethereum wallet and using on-chain probabilistic micropayments and protocol-based orchestrator discovery. | [verify-against: https://github.com/livepeer/protocol — confluence branch] | 3-run consensus |
| Off-chain gateway | A gateway node using a remote signer for payment operations and specifying orchestrators manually rather than via protocol discovery. Valid production configuration — not a test mode or lesser form of operation. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] | 3-run consensus |
| Remote signer | A separate service that holds an Ethereum private key and signs payment tickets on behalf of an off-chain gateway, so the gateway itself holds no ETH directly. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] | 3-run consensus |
| Probabilistic micropayments | A lottery-based payment mechanism where gateways send signed tickets to orchestrators; only winning tickets are redeemed on-chain, amortising gas costs. The expected value is fully fair — orchestrators are paid correctly on average; the mechanism reduces gas costs, not payment reliability. | [verify-against: https://github.com/livepeer/protocol — confluence branch; cross-check relevant LIPs at https://github.com/livepeer/LIPs] | 3-run consensus |
| Micropayment ticket | A signed probabilistic payment instrument issued by a gateway to an orchestrator per job segment; redeemed on-chain only if a winning ticket. | [verify-against: https://github.com/livepeer/protocol — confluence branch] | 2-run consensus |
| TicketBroker | The Arbitrum smart contract managing gateway deposits, reserves, and winning ticket redemptions for the probabilistic micropayment system. | [verify-against: https://arbiscan.io/accounts/label/livepeer + https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js] | 3-run consensus |
| Deposit | ETH locked by a gateway into the TicketBroker smart contract to fund outstanding probabilistic micropayment tickets. | [verify-live: https://explorer.livepeer.org] | 3-run consensus |
| Reserve | ETH collateral held in the TicketBroker contract backstopping the deposit if it is depleted. | [verify-live: https://explorer.livepeer.org] | 3-run consensus |
| ServiceRegistry | The Arbitrum smart contract where orchestrators register their service URI so that on-chain gateways can discover and contact them via protocol-based discovery. | [verify-against: https://arbiscan.io/accounts/label/livepeer + https://github.com/livepeer/protocol — confluence branch] | 3-run consensus |
| Orchestrator discovery | The process by which a gateway finds and evaluates available orchestrators — automatically via the on-chain ServiceRegistry (on-chain path), or via manually configured addresses (off-chain path). | [verify-against: https://github.com/livepeer/protocol — confluence branch] | 3-run consensus |
| Capability | The pipeline/model pair an orchestrator advertises to the network; the routing key used by gateways to match AI requests to capable orchestrators. Not a generic feature — a precisely defined protocol concept. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] | 3-run consensus |
| Pipeline | A configured AI processing workflow defined by pipeline type and model ID, routed by the gateway to orchestrators advertising the corresponding capability. Not a CI/CD pipeline — a specific AI workload type. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release; AI config surface changes frequently] | 3-run consensus |
| Transcoding | Digital-to-digital conversion of a video stream from one encoding/resolution/bitrate to one or more output renditions; one of the two compute types the gateway routes. | — | 3-run consensus |
| AI inference | Running a trained ML model on new input data to produce output (images, video, text); the second compute type the gateway routes. Distinct from video transcoding. | — | 3-run consensus |
| Session | An active, persistent connection between a gateway and an orchestrator across which one or more compute jobs (segments or AI requests) are processed. Not a web/HTTP session — session affinity keeps warm models loaded and reduces per-job overhead. | — | 3-run consensus |
| Dual mode | A deployment configuration where a single gateway node operates both video transcoding and AI inference workloads simultaneously. "Combined mode" and "Hybrid" are deprecated — do not use. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] | 3-run consensus |
| MaxPricePerUnit | A CLI flag setting the maximum price per pixel unit the gateway will accept from orchestrators; orchestrators priced above this threshold are excluded from selection. Controls cost ceiling and available orchestrator pool size. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release — flag names and defaults change between releases] | 3-run consensus |
| MaxPricePerCapability | A CLI flag setting the maximum price per AI pipeline/model pair the gateway will accept, overriding MaxPricePerUnit for that specific capability. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] | 3-run consensus |
| Per-pixel pricing | A cost model for transcoding work charging based on total pixels processed (width × height × frame count). | [verify-against: https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 — acceptable tier; verify specific values via Explorer] | 2-run consensus |
| Per-request pricing | A cost model for AI inference work charging per individual request; used where pixel count is not a meaningful unit. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release; AI pricing model may change] | 2-run consensus |
| Gateway-as-a-Service | A hosted deployment model where a third party runs gateway infrastructure on the operator's behalf; the user receives an API endpoint rather than running go-livepeer directly. Examples: Livepeer Studio, Livepeer Cloud. | — | 3-run consensus |
| NaaP (Network as a Platform) | A multi-tenant gateway architecture with authentication and per-user usage tracking, enabling gateway operators to expose Livepeer capacity to third-party developers as a platform service. | [verify-against: https://github.com/livepeer/naap] [DEFINITION CONFLICT: see Collation Notes — NaaP acronym expansion inconsistent across glossary source; "Network as a Platform" vs "Network-as-a-Product"] | 3-run consensus |
| Arbitrum | The Ethereum L2 network hosting Livepeer's protocol smart contracts; the chain gateways interact with for on-chain payment and discovery. | — | 3-run consensus |
| Failover | The gateway's behaviour when a selected orchestrator becomes non-responsive mid-session; determines whether jobs are re-routed and session state is preserved. | [verify-against: https://github.com/livepeer/go-livepeer — latest tagged release] | 2-run consensus |
| GatewayHost | A gateway-relevant CLI flag noted in recent go-livepeer tagged release notes. Exact semantics require confirmation against tagged source. | [verify-against: https://github.com/livepeer/go-livepeer/releases] | [single-run: ChatGPT only — included because it is a primary-source-flagged CLI term with no substitute in other runs] |

**Terms excluded from canonical lock:**
- `BYOC (Bring Your Own Compute / Bring-Your-Own-Container)` — acronym expansion inconsistent across glossary; excluded pending resolution. [See Collation Notes — Terminology Conflicts]
- `Broadcaster` — deprecated term; replaced by Gateway. Excluded per deprecated-terms guidance.
- `Combined mode` / `Hybrid` — deprecated terms; replaced by Dual mode. Excluded.
- `LPT (Livepeer Token)` — relevant context for orchestrator stake-weight routing, but gateways do not hold or manage LPT operationally. [2-run consensus] — excluded from lock because its gateway relevance is indirect (understanding why stake weight affects routing) rather than an operator action. Flagged for authoring note in Section 7 (routing).
- `Weight factors` — [2-run consensus] — CLI-level detail; flag names and values change between releases. Included implicitly under MaxPricePerUnit/MaxPricePerCapability; specific flag names (`selectRandWeight`, `selectStakeWeight`, `selectPriceWeight`) should be verified against the latest tagged release before use in content.

---

## Arriving Question

> "I want to route AI or video jobs through Livepeer — what type of gateway do I need to run, which setup path applies to my situation, and what do I need to have in place before I start?"

**Synthesis note**: All three runs produced questions centred on two shared cores: (1) identifying the correct gateway type/path before starting setup, and (2) understanding the prerequisites for that path. ChatGPT emphasised operating model and economic fit; Claude Web emphasised the routing/funding/cost trio; Perplexity emphasised setup path selection and prerequisites. The canonical question unifies all three emphases without losing specificity.

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Self-Hosted Gateway Launcher** — An infrastructure or platform engineer who has outgrown a hosted API and needs to run their own routing layer for cost control, custom routing logic, or higher throughput. | Developer tab CTA ("graduate to your own gateway"), technical blog post, Discord referral, external article | Familiarity with the product surface from hosted use or evaluation; general web3/infrastructure knowledge; may have misconception that a GPU or ETH is required to start | A chosen operating mode (on-chain or off-chain), a running gateway node, and first jobs routing with a clear cost model in place | 3 | 3 | 3 | 9 | 3/3 unanimous |
| 2 | **Platform Reseller / NaaP Builder** — An operator who wants to expose Livepeer capacity to third-party developers or internal teams as a platform service, with auth, usage billing, and margin layered on top. | Solutions tab, external blog post, investor/founder referral, partner channel | Business model clarity and intent to commercialise; limited deep protocol knowledge; may be uncertain whether NaaP is something they buy or something they build | A clear architecture for multi-tenant gateway operation; confirmation the model supports their commercial use case; a concrete entry point into the NaaP setup path | 2 | 3 | 3 | 8 | 3/3 unanimous |
| 3 | **Existing Operator Tuning Production** — A gateway operator already running a live deployment, returning to improve routing efficiency, reduce costs, fix a payment issue, or enable a new workload type. | Return visit (direct URL, bookmark), Discord/forum thread, incident debugging trail, search for a specific error | A running gateway; specific operational context (a problem, a degraded metric, or a known gap to fill) | The specific tuning action, configuration value, or operational fix needed — self-contained, without re-reading the full journey | 2 | 3 | 3 | 8 | 3/3 unanimous |
| 4 | **Builder Graduating from API Use** — A developer who has been using a hosted gateway (Livepeer Studio or a third-party API) and is evaluating whether to migrate to self-hosted infrastructure for access to specific pipelines, custom models, or lower latency. | Developers tab cross-link, AI docs cross-link, hosted gateway API reference | API-consumer fluency; has used a hosted gateway; needs to understand how self-hosted differs and what extra setup it requires | A confident decision on whether to stay hosted or graduate, plus the minimum setup path if they graduate | 2 | 2 | 2 | 6 | 3/3 unanimous |

**Primary persona**: Self-Hosted Gateway Launcher — confirmed unanimous across all three runs. Drives the section structure. All other personas are accommodated within that structure and do not add sections unless their path is otherwise blocked.

**Self-identification**: This audience arrives calling themselves "infrastructure teams," "platform operators," "API providers," or "backend operators" — not "gateway operators." That self-description maps onto at least three materially distinct setup paths: on-chain self-hosted routing, off-chain self-hosted routing, and commercial gateway-as-a-service / NaaP. A reader arriving with "I want to run a gateway" cannot identify the correct path without first-content-section guidance. **A dedicated disambiguation section is required as the first content section.** Decision is unanimous across all three runs (3/3).

**Entry blockers** (union across all runs — none dropped):

1. **Path ambiguity** — reader must choose on-chain vs off-chain operating mode, and single-workload vs dual, before any setup steps are meaningful. Resolving section: Disambiguation (S1). Must be the first content section.
2. **ETH / deposit prerequisite for on-chain path** — on-chain operation requires ETH on Arbitrum and a funded TicketBroker deposit before the gateway can route any production jobs. This blocker must be surfaced explicitly as a pre-step *before* the on-chain quickstart instructions begin, not as a footnote after the reader is already mid-setup.
3. **Remote signer prerequisite for off-chain path** — off-chain operation requires a working remote signer endpoint before the gateway can sign payment tickets. The community-hosted signer endpoint must be referenced; readers without an existing signer are silently blocked if it is not surfaced.
4. **NaaP architecture ambiguity** — Platform Reseller persona may not know whether NaaP is a product they purchase or an architecture they build. Resolving section: Disambiguation (S1) must explicitly surface the NaaP path and route there; S1 must name NaaP or this persona has no path forward.
5. **Workload-type and pricing fit** — video, AI, and dual mode imply different routing, pricing, and operational configurations; the workload-fit determination must precede configuration and operation sections.

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I am evaluating whether to run my own gateway or use a hosted service | Understand the distinct gateway paths (on-chain self-hosted, off-chain self-hosted, gateway-as-a-service, NaaP) and the hard prerequisites for each | Make a confident decision about which path applies to my situation before beginning any setup |
| J2 | I have decided to run a self-hosted gateway and am starting from zero | Get a minimal gateway node running — connected to the network and dispatching real jobs to orchestrators | Validate that the stack works in my environment before investing time in production configuration |
| J3 | I am configuring what my gateway pays per job and how it selects orchestrators | Set MaxPricePerUnit, per-capability price limits, and routing weight factors accurately | Control per-job costs, maintain an adequate orchestrator pool, and meet my workload's performance requirements |
| J4 | I want to monitor and maintain my gateway's payment layer | Top up the TicketBroker deposit and reserve correctly, check current balance, and understand when to act | Keep payments flowing without orchestrator payment failures or gateway downtime from a depleted deposit |
| J5 | I want to expose my gateway as a platform to third-party developers or internal teams | Design and implement authentication, usage accounting, and per-user billing on top of my gateway (NaaP or equivalent architecture) | Run a commercial multi-tenant service on top of my gateway node |
| J6 | I need to route AI inference jobs to orchestrators running a specific model | Configure the gateway to discover orchestrators advertising the matching pipeline/model capability and confirm jobs are dispatching end-to-end | Deliver AI output through my product reliably, with acceptable latency |
| J7 | My gateway's job success rate has dropped, latency has spiked, or it has stopped routing altogether | Diagnose whether the root cause is a payment state problem, orchestrator selection issue, pipeline capability gap, or network/session failure | Identify and resolve the specific failure without guessing and restore service to my downstream application |

**Coverage check**:
- Arrival jobs: J1 (path selection / evaluate) — covered
- Active-use / setup jobs: J2 (first deployment), J3 (cost and routing config), J4 (payment operations) — covered
- Build/extend jobs: J5 (NaaP / platform), J6 (AI pipeline routing) — covered
- Return-visit / reference jobs: J3 and J4 serve return visits for config and payment lookup; J7 serves incident diagnosis — covered
- Edge cases specific to Gateways tab: dual-mode configuration is a distinct edge case — covered implicitly within J2/J3 (it is a configuration variant of the self-hosted setup path, not a separate job category)

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Choosing a gateway path | `evaluate` | Reading the disambiguation section; identifying whether they need on-chain, off-chain, hosted, or NaaP; understanding the hard prerequisites for their chosen path |
| 2 | Understanding what a gateway does | `discover` | Forming a working mental model of the gateway's role — routing demand, issuing payments, managing sessions — and distinguishing it from orchestrators, hosted APIs, and protocol infrastructure they do not operate |
| 3 | Preparing for setup | `evaluate` | Understanding payment model and prerequisites specific to the chosen path — ETH + Arbitrum wallet (on-chain), or remote signer access (off-chain) — before any install steps begin |
| 4 | Launching a first working gateway | `setup` | Following a path-specific quickstart to install go-livepeer, configure the node in the chosen mode, connect to the orchestrator network, and route a first confirmed job |
| 5 | Configuring routing and cost controls | `build` | Setting MaxPricePerUnit, per-capability price limits, orchestrator selection weight factors, and workload-specific routing behaviour |
| 6 | Configuring production operations | `build` | Verifying payment flow, confirming routing health, setting up monitoring and alerting, establishing operational baselines |
| 7 | Running the gateway in production | `operate` | Managing deposit balance, monitoring throughput and latency, responding to routing failures or payment issues, maintaining orchestrator pool health |
| 8 | Improving cost, routing efficiency, and reliability | `optimise` | Tuning weight factors, adjusting price parameters, reviewing session patterns, enabling NaaP or dual mode, scaling capacity |

**On-demand**:
- Current CLI flag names, accepted values, and defaults for gateway configuration
- TicketBroker deposit and reserve top-up procedures
- Per-capability price limit configuration for specific AI pipelines
- Orchestrator selection weight factor names, values, and interaction effects
- Failover behaviour and session management settings
- Payment failure diagnosis and remediation steps
- NaaP API key management and usage accounting configuration
- Dual mode prerequisites and OS constraints
- Remote signer setup options and community-hosted signer endpoint
- Available AI pipeline types and supported model IDs
- Troubleshooting job dispatch failures by error category

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| Inbound | Developers → Gateways | Developers building with hosted gateways graduate here when API consumption becomes infrastructure ownership or custom routing |
| Inbound | Solutions → Gateways | Founders and builders evaluating the platform model arrive here when they decide hosted products are insufficient and they need operator-level control |
| Inbound | Home → Gateways | General audience routing — Home routes "route jobs into the network" visitors to this tab |
| Outbound | Gateways → Orchestrators | Gateway operators need supplier-side depth when evaluating how orchestration, pricing, capability advertisement, and stake weight appear from the compute side |
| Outbound | Gateways → Developers | Gateway operators route back when they need SDK and application-integration depth for consumers of their gateway, or for custom middleware |
| Outbound | Gateways → About | Protocol economics depth (LPT staking, governance, tokenomics) is introduced in Gateways as context; About is the deep reference for operators who need the full substrate |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| S1. Gateway path finder (Disambiguation) | "I want to run a gateway — which of the three paths applies to my situation, and what do I need before I start?" | J1 | `orient` | `navigation` | Has arrived knowing they want to operate or use a gateway; does not yet know whether on-chain, off-chain, hosted (gateway-as-a-service), or NaaP best fits their needs and constraints | Has identified their path (on-chain / off-chain / hosted / NaaP) and is routed to the correct first step; knows the hard prerequisites for that path | `evaluate` |
| S2. What a gateway does | "What does this node actually do — and what doesn't it do?" | J1 | `explain` | `concept` | Has chosen a path; needs a working mental model of gateway behaviour before setup instructions make sense | Can describe the gateway's role — routing jobs, issuing probabilistic payments, managing sessions — and has resolved any confusion between gateway and orchestrator, or between self-hosted and hosted; can explain what no-GPU and no-compute means for their infrastructure decisions | `discover` |
| S3. Payments, deposits, and the funding prerequisite | "How do payments work, and what must I have in place before my gateway can route production jobs?" | J1, J4 | `explain` | `concept` | Has chosen an operating mode; needs the payment mechanism understood before any setup step that depends on it | Has selected the payment path (ETH deposit + reserve on Arbitrum for on-chain; remote signer configuration for off-chain); knows what to acquire; can describe the probabilistic ticket lifecycle and when a deposit runs low | `evaluate` |
| S4. On-chain gateway quickstart | "How do I install and run a go-livepeer on-chain gateway connected to the network?" | J2 | `start` | `instruction` | Has chosen the on-chain path; has ETH on Arbitrum (pre-step explicitly surfaced at the top of this section before any install instruction); has read S3 | Has a running on-chain gateway node that has dispatched at least one confirmed job to an orchestrator; deposit and reserve funded and confirmed | `setup` |
| S5. Off-chain gateway quickstart | "How do I run a gateway without managing an Arbitrum wallet, using a remote signer?" | J2 | `start` | `instruction` | Has chosen the off-chain path; has a remote signer endpoint available (community-hosted signer option explicitly referenced in this section before routing instructions); has read S3 | Has a running off-chain gateway connected via remote signer that has dispatched at least one confirmed job to an orchestrator | `setup` |
| S6. Pricing and cost control | "How do I set what my gateway pays per job, and how do I prevent overspending?" | J3 | `configure` | `guide` | Has a working gateway operating at defaults; wants to control per-job spend and maintain an adequate orchestrator pool | Has set MaxPricePerUnit and, where applicable, MaxPricePerCapability values for the intended workload types; can reason about the trade-off between the cost ceiling and orchestrator pool size | `build` |
| S7. Orchestrator selection and routing | "How does my gateway decide which orchestrators to use, and how do I tune selection behaviour?" | J3 | `configure` | `guide` | Pricing is configured; wants to understand and tune orchestrator selection beyond the cost filter | Has reviewed and adjusted weight factors for the workload; can explain how the scoring algorithm ranks orchestrators and what levers control the cost/performance/decentralisation trade-off | `build` |
| S8. AI pipeline routing | "How do I route AI inference requests to orchestrators running the specific pipeline and model I need?" | J6 | `configure` | `instruction` | Gateway is routing jobs; wants to add or verify AI pipeline routing with a specific capability; understands that pipelines are capability-targeted | Has confirmed AI inference requests dispatching to capable orchestrators; knows how to check capability availability and address cold-start latency [⚠ Design flag: cold-start latency must be explicitly addressed — readers graduating from hosted gateways may not be aware it exists in self-hosted deployments] | `build` |
| S9. Dual mode configuration | "Can I run both video transcoding and AI inference on the same gateway, and how do I configure it?" | J3 | `configure` | `instruction` | Has a running single-mode gateway and wants to add the second workload type | Has configured dual mode; is aware of the OS constraint (Linux required for AI component); has verified both workload types are routing correctly | `build` |
| S10. Payment operations and deposit management | "How do I keep my gateway funded — how do I top up the deposit, check balance, and manage reserve?" | J4 | `operate` | `guide` | Has a running on-chain gateway; needs day-to-day payment management procedures | Has topped up deposit and reserve on TicketBroker; knows how to read current balances; can identify the signal to top up before running dry | `operate` |
| S11. Running the gateway in production | "What do I need to monitor and manage day-to-day to keep this gateway dependable?" | J7 | `operate` | `guide` | Has a configured, operational gateway; needs an operational framework for monitoring, alerting, and routine maintenance | Has a defined monitoring and maintenance routine; knows which metrics signal problems (throughput, latency, ticket redemption rate, deposit balance) and what the first-response action is for each [⚠ Design flag: may need to split into a monitoring section and a separate operations checklist as content load is assessed] | `operate` |
| S12. Troubleshooting job failures | "My gateway isn't routing jobs, or routing is degraded — how do I diagnose the cause?" | J7 | `troubleshoot` | `guide` | Gateway is failing or degraded; reader needs a structured diagnostic path | Has identified the root-cause category (payment state, orchestrator selection, pipeline capability, network/session failure) and the corrective action for each; gateway is routing again or the blocker is clearly identified for escalation | `troubleshoot` |
| S13. Turning a gateway into a platform (NaaP) | "How do I expose my gateway to multiple users with API keys, usage billing, and access control?" | J5 | `build` | `guide` | Has a running, stable gateway; has decided to run a multi-tenant platform service on top of it | Has a clear picture of the NaaP architecture and what is required to stand it up; has an actionable entry point into NaaP setup; can distinguish NaaP from hosted gateway-as-a-service [⚠ Design flag: section accumulates evaluate (choosing between NaaP vs clearinghouse vs custom) and build (implementation) — likely two pages in detailed design; flag carried from two runs] | `build` |

**Section count**: 13 sections — one above the 8–12 target range. The overage is justified:
- S4 and S5 are parallel quickstarts for on-chain and off-chain paths; they cannot be merged without creating a branching instruction structure that blocks one path.
- S9 (Dual mode) serves a distinct job (J3 variant) with a separate OS constraint and configuration surface; collapsing it into S6 or S7 would block dual-mode operators without a clean path.
- Flagged for human review: if dual mode is substantially simpler in practice and can be treated as a configuration note within S6/S7, S9 could be reduced to a subsection, bringing the count to 12. This is a content-writing determination.

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Self-Hosted Gateway Launcher (on-chain) | S1 — is routed to S2 → S3 → S4 | S11 (production ops); returns on-demand to S10, S12, S6 | None | S4 must explicitly surface the ETH deposit prerequisite as a pre-step before any install instruction — failure to do so creates a silent mid-setup blocker | None |
| Self-Hosted Gateway Launcher (off-chain) | S1 — is routed to S2 → S3 → S5 | S11 (production ops); returns on-demand to S10, S12, S6 | None | S5 must explicitly reference the community remote signer endpoint and state that off-chain is a valid production path (not a test mode) — without both, this persona either hits a practical blocker or under-values the path | None |
| Platform Reseller / NaaP Builder | S1 (must surface NaaP path explicitly) → S2 → S3 → S13 | S13 | None — provided S1 names the NaaP path; if S1 does not name NaaP, this persona has no clear routing | S13 must introduce NaaP architecturally before describing how to set it up — arriving from S1, this persona may have no prior knowledge of NaaP | None — S13 handles this; S1 authoring requirement is a content gap, not a structural one |
| Existing Operator Tuning Production | S10, S12, S6, or S7 — direct deep-link or search entry | Exits immediately after resolving specific problem | None | S6, S7, S10, and S12 must be self-contained enough to use without re-reading S1–S3; return operators must not be forced to navigate through orientation content to complete a targeted operational task | None |
| Builder Graduating from API Use | S1 → S2 | S4 or S5 (quickstart for chosen mode) | None | S1–S2 must include a clear "stay hosted vs graduate" decision signal so this persona does not over-commit to self-hosted infrastructure prematurely | None |

**Gate result**: All five personas have a complete, unblocked path through the canonical section structure. Three content-authoring requirements identified (ETH pre-step in S4; off-chain production-path framing and remote signer reference in S5; NaaP path visibility in S1); none require a new section — all are authoring instructions for existing sections.

---

## ⏸ Checkpoint

- [x] TERMINOLOGY_LOCK: all verify flags carried through from any run?
- [x] Arriving question specific — not a topic?
- [x] Personas: consensus ≥ 2 for all included; single-run archetypes justified if included?
- [x] Primary persona confirmed across runs or tie-broken with reasoning?
- [x] Self-identification decision: 3+ run consensus or defaulted to dedicated section?
- [x] Entry blockers: union of all runs — none dropped?
- [x] Jobs: full coverage of arrival, active-use, return-visit, and edge cases?
- [x] Every section: all fields populated, no "understands" exit states, canonical enum values?
- [x] Design flags and verify flags: carried through from any run?
- [x] All personas unblocked?
