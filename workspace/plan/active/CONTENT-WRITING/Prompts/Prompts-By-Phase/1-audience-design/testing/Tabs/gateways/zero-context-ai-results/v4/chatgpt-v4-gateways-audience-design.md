# Gateways — Audience Design

**Tab**: Gateways
**Audience**: gateway
**TERMINOLOGY_LOCK**: [Gateway, Orchestrator, on-chain gateway, off-chain gateway, remote signer, probabilistic micropayments, micropayment ticket, TicketBroker, ServiceRegistry, orchestrator discovery, capability, pipeline, transcoding, AI inference, per-pixel pricing, per-request pricing, MaxPricePerUnit [verify-against: https://github.com/livepeer/go-livepeer], MaxPricePerCapability [verify-against: https://github.com/livepeer/go-livepeer], Gateway-as-a-Service, Network as a Platform (NaaP) [verify-against: https://github.com/livepeer/go-livepeer], dual mode, session, failover, deposit [verify-live: Livepeer Explorer / Arbiscan], reserve [verify-live: Livepeer Explorer / Arbiscan], GatewayHost [verify-against: https://github.com/livepeer/go-livepeer/releases]]
**Generated**: 2026-03-23
**Status**: DRAFT — awaiting checkpoint

---

## Phase 0 Anchors

**AUDIENCE**: `gateway`
**TERMINOLOGY_LOCK**: `[Gateway, Orchestrator, on-chain gateway, off-chain gateway, remote signer, probabilistic micropayments, micropayment ticket, TicketBroker, ServiceRegistry, orchestrator discovery, capability, pipeline, transcoding, AI inference, per-pixel pricing, per-request pricing, MaxPricePerUnit [verify-against: https://github.com/livepeer/go-livepeer], MaxPricePerCapability [verify-against: https://github.com/livepeer/go-livepeer], Gateway-as-a-Service, Network as a Platform (NaaP) [verify-against: https://github.com/livepeer/go-livepeer], dual mode, session, failover, deposit [verify-live: Livepeer Explorer / Arbiscan], reserve [verify-live: Livepeer Explorer / Arbiscan], GatewayHost [verify-against: https://github.com/livepeer/go-livepeer/releases]]`

1. This audience calls themselves: infrastructure operators, platform operators, API providers, or backend teams running routing and billing infrastructure.
2. Core job actions: receive application jobs, choose compute suppliers, route work reliably, manage payment and spend controls, expose a usable service to internal teams or customers.
3. Terms with network-specific meanings that differ from industry default:
   - **Gateway** — not just an API edge or reverse proxy; it is the demand-side network node that submits jobs, routes work, and manages settlement flows. fileciteturn0file2L173-L180
   - **Off-chain gateway** — not merely “not on blockchain”; it is a valid production operating mode using a remote signer and manual supplier configuration rather than protocol discovery. fileciteturn0file2L312-L317
   - **Capability** — not a generic feature; it is the advertised pipeline/model ability that governs which orchestrators can accept a job. fileciteturn0file2L57-L63
   - **Session** — not just a login or HTTP session; it is an active gateway-orchestrator processing relationship reused across jobs for performance. fileciteturn0file2L437-L442
   - **Probabilistic micropayments / micropayment ticket** — not standard invoicing; it is a lottery-based payment system backed by deposit and reserve in TicketBroker. fileciteturn0file2L361-L366 fileciteturn0file2L271-L276

---

## Arriving Question

> "What kind of gateway should I run, and what do I need to decide first so I can get to a working, economically sensible setup without choosing the wrong operating model?"

---

## Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Vol | Depth | Impact | Total |
|---|---|---|---|---|---|---|---|---|
| 1 | Self-hosted gateway launcher | Search result, repo link, or CTA from Developers | A product or internal service that now needs its own routing layer; knows they need more control than a hosted API | A chosen operating model and a first working gateway path | 3 | 3 | 3 | 9 |
| 2 | Service builder packaging gateway access for others | Strategy discussion, forum link, partner referral, or internal product planning | Intent to expose Livepeer capacity to customers or teams, with auth, billing, and margin | A clear architecture for turning a gateway into a sellable service | 2 | 3 | 3 | 8 |
| 3 | Existing operator improving cost, routing, and reliability | Return visit from production ops, Discord/forum, or incident/debugging trail | A live gateway that works, but needs better orchestrator selection, spend control, or uptime behaviour | Specific tuning and operating guidance for a production gateway | 2 | 3 | 3 | 8 |
| 4 | Builder graduating from API use to gateway operation | CTA from Developers or Solutions | Familiarity with Livepeer as an API consumer, but not with operating network-side infrastructure | A decision on whether to stay hosted or run gateway infrastructure, plus the minimum path if they graduate | 2 | 2 | 2 | 6 |

**Primary persona**: Self-hosted gateway launcher — this persona drives the section structure.

**Self-identification**: This audience usually calls itself an infrastructure team, platform team, API provider, or backend operator. That label can describe at least three materially different paths: self-hosted routing for an internal product, commercial gateway-as-a-service / NaaP, and live-ops optimisation of an existing deployment. A dedicated disambiguation section is required as the first content section because the reader cannot identify the correct path without first understanding operating model, workload type, and service ambition.

**Entry blockers**:
- **Path ambiguity**: the reader must choose self-hosted vs service-provider path, and on-chain vs off-chain operating mode, before setup steps are meaningful.
- **Payment prerequisite**: on-chain operation requires funding and settlement setup before the gateway can run production payments; off-chain requires a signer path before the node can behave as intended. The payment-model section must precede operational setup.
- **Workload and pricing fit**: video, AI, and dual mode imply different routing, pricing, and operational expectations; the workload-fit section must appear before configuration and operating sections.

_Assumption used for scoring_: volume is inferred from the Product Context and Gateways tab ownership rather than analytics data; self-hosted launch and production-ops needs are treated as the dominant demand because the tab explicitly owns concepts, setup, operations, and business model content for all gateway types. fileciteturn0file0L70-L74

---

## Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | When I decide hosted access is not enough for my product, I want to determine whether I should run a gateway at all and which operating model fits me | so I can avoid building the wrong infrastructure path |
| 2 | When I am choosing between on-chain and off-chain operation, I want to understand the settlement and discovery implications of each | so I can launch without blocking myself on the wrong payment architecture |
| 3 | When I am preparing a first deployment, I want to get a gateway into a minimal working state | so I can submit real jobs and validate the path quickly |
| 4 | When I am selecting suppliers for jobs, I want to know how routing, capability matching, and spend controls work | so I can choose orchestrators that meet my cost and performance goals |
| 5 | When I want to offer access to other teams or customers, I want to design authentication, billing, and markup around a gateway | so I can turn the node into a usable service business |
| 6 | When my live gateway is costing too much or behaving inconsistently, I want to tune pricing, sessions, and failover behaviour | so I can improve margins, reliability, and request success |
| 7 | When I return later, I want to quickly find current configuration names, pricing controls, and payment mechanics | so I can make precise changes without rereading the whole journey |

---

## Ideal Journey

**Linear**:

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identify the gateway path that matches the business | `discover` | Determining whether they are self-hosting, commercialising access, or still better served by a hosted product |
| 2 | Choose the operating and workload model | `evaluate` | Deciding on on-chain vs off-chain, and video vs AI vs dual mode |
| 3 | Prepare settlement, discovery, and control assumptions | `evaluate` | Understanding how payment, supplier discovery, and spend limits will work before setup |
| 4 | Launch a first working gateway | `setup` | Reaching a minimal working deployment that can submit jobs |
| 5 | Configure routing and commercial controls | `build` | Setting capability, pricing, and selection behaviour to match the intended service |
| 6 | Run the gateway as a dependable service | `operate` | Managing sessions, failover, observability, scaling, and customer-facing behaviour |
| 7 | Improve economics and reliability | `optimise` | Tuning cost, performance, and packaging once the system is live |

**On-demand**:
- Current payment mechanics and what deposit / reserve mean in practice
- Current discovery and supplier-selection controls
- Current pricing controls by workload type
- Capability and pipeline matching rules
- Session and failover behaviour
- NaaP / gateway-as-a-service architecture patterns
- Operational checks for a live gateway
- Configuration names and current flag semantics

**Cross-tab**:

| Direction | From / To | Why |
|---|---|---|
| From | Developers → Gateways | Builders graduate here when API consumption becomes infrastructure ownership or custom routing |
| From | Solutions → Gateways | Founders and builders arrive here when they decide hosted products are insufficient and they need operator-level control |
| To | Gateways → Orchestrators | Gateway operators need supplier-side depth when evaluating how orchestration, pricing, and capabilities appear from the compute side |
| To | Gateways → Developers | Gateway operators route back when they need SDK and application-integration depth for consumers of their gateway |
| To | Gateways → About | Gateway operators route here for deeper protocol and token-economic substrate once gateway-specific decisions are already grounded |

---

## Ideal Section Structure

| Section | Reader question | Job | purpose | pageType | Entry state | Exit state | lifecycleStage |
|---|---|---|---|---|---|---|---|
| 1. Gateway path finder | Which gateway path applies to me before I touch setup? | Job 1 | `orient` | `navigation` | Knows they need more control than a hosted endpoint, but has not identified the right gateway path | Has identified whether they are launching a self-hosted gateway, commercialising gateway access, or not yet ready to operate a gateway | `discover` |
| 2. Should I run a gateway and what kind? | Is a gateway the right move, and what am I actually operating if I do? | Job 1 | `evaluate` | `guide` | Has picked a likely path, but has not yet decided whether the control gained is worth the operational responsibility | Has decided whether to operate a gateway and which broad gateway role they are taking on | `evaluate` |
| 3. Operating modes and workload fit | Should I run on-chain or off-chain, and am I serving video, AI, or dual mode traffic? | Job 2 | `choose` | `guide` | Has decided to operate a gateway, but has not chosen settlement/discovery mode or workload shape | Has chosen operating mode and workload type for the first deployment | `evaluate` |
| 4. Payments, discovery, and supplier trust model | How will this gateway find orchestrators, pay them, and control exposure before launch? | Job 2 | `explain` | `concept` | Has chosen an operating mode, but lacks the mechanism-level view needed to avoid a broken setup | Has selected a payment/discovery model and can state what dependencies must exist before launch | `evaluate` |
| 5. First working gateway quickstart | What is the shortest path to a working gateway for my chosen mode? | Job 3 | `start` | `instruction` | Has made the key path decisions and knows the dependencies that must be in place | Has completed a minimal working gateway deployment that can submit jobs | `setup` |
| 6. Routing, capabilities, and price controls | How do I control which orchestrators get my jobs and what I am willing to pay? | Job 4 | `configure` | `guide` | Has a working gateway but default routing and spend behaviour | Has configured supplier-selection and price-control behaviour for the intended workload | `build` |
| 7. Turning a gateway into a service | How do I package this gateway for internal teams or external customers? | Job 5 | `build` | `guide` | Has a working gateway and intends to expose access beyond a single internal application | Has chosen a service architecture for auth, billing, markup, and tenant exposure | `build` |
| 8. Running the gateway in production | What do I need to monitor and manage day to day to keep this gateway dependable? | Job 6 | `operate` | `guide` | Has a configured gateway and now needs live-system discipline | Can run a live gateway with defined checks for availability, routing health, and service continuity | `operate` |
| 9. Improving cost, margin, and reliability | What should I tune when the gateway works but costs too much, routes poorly, or fails under load? | Job 6 | `optimise` | `guide` | Has a live gateway and a concrete performance, margin, or reliability problem to improve | Has chosen specific tuning actions for spend, sessions, failover, or supplier strategy | `optimise` |
| 10. Gateway reference facts | Where do I look up exact configuration, payment, and routing facts when I need precision? | Job 7 | `reference` | `reference` | Needs an exact parameter, mechanism detail, or current term while building or operating | Has found the exact fact needed to continue configuration or operations | `build` |

---

## Persona Path Validation

| Persona | Enters at | Exits at | Structural block | Knowledge gap | Missing section |
|---|---|---|---|---|---|
| Self-hosted gateway launcher | 1. Gateway path finder | 6. Routing, capabilities, and price controls | None | Needs plain-language explanation in Sections 3–4 that gateway-specific terms differ from standard infra language | None |
| Service builder packaging gateway access for others | 1. Gateway path finder | 7. Turning a gateway into a service | None | Needs explicit distinction that service architecture sits on top of, not instead of, core gateway mechanics | None |
| Existing operator improving cost, routing, and reliability | 6. Routing, capabilities, and price controls | 9. Improving cost, margin, and reliability | None | Needs direct access paths from section indexes into tuning content without repeating beginner setup | None |
| Builder graduating from API use to gateway operation | 1. Gateway path finder | 5. First working gateway quickstart | None | Needs a clear “stay hosted vs graduate” decision in Sections 1–2 so they do not over-commit prematurely | None |

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

- **[Phase 0 / Step 0.2]**: The per-tab glossary contains useful gateway terms, but several entries make implementation-specific claims that are not safe to treat as fact without checking tagged code or a primary release source. I kept those terms only where they were central and marked them `verify-against` rather than asserting the glossary wording as authoritative. fileciteturn0file2L248-L257 fileciteturn0file2L289-L317 fileciteturn0file3L43-L51
- **[Phase 0 / Step 0.2]**: The glossary defines BYOC as "Bring-Your-Own-Container," which is more specific than the term itself and not established by the Product Context block alone. I excluded BYOC from the lock to avoid anchoring the rest of the design to an unverified expansion. fileciteturn0file2L28-L35
- **[Phase 0 / Step 0.2]**: `Broadcaster` appears in the glossary but is explicitly deprecated and replaced by `Gateway`; I excluded it from the lock and treated it as historical-only language. fileciteturn0file1L8-L13 fileciteturn0file2L37-L43
- **[Phase 0 / Step 0.2]**: `GatewayHost` was included because a recent tagged `go-livepeer` release notes it as a gateway-relevant flag, but the release page alone is not enough to lock exact semantics. It remains marked `verify-against` pending tagged code confirmation. citeturn924490search0
- **[Phase 0 / Step 0.2]**: I treated deposit and reserve values as live-state concepts rather than fixed facts because the authority registry explicitly requires on-chain verification for governance-controlled or deployed state. fileciteturn0file3L9-L18 fileciteturn0file3L23-L31
- **[Phase 1]**: No analytics data was provided for persona volume, so persona ranking uses reasoned assumptions from the tab ownership model and product context rather than measured traffic. fileciteturn0file0L70-L74
- **[Phase 2C]**: A dedicated disambiguation section was necessary because “gateway” covers multiple setup paths at once: operating mode, workload shape, and commercial packaging. Without putting that section first, later setup guidance would force the reader to infer prerequisites too late.
- **[Phase 0 / Web source suggestion]**: Suggested additions to `veracity-sources.md` for future runs:
  - `[SUGGESTED SOURCE: go-livepeer releases — https://github.com/livepeer/go-livepeer/releases — tagged release notes for gateway-relevant changes such as GatewayHost and real-time AI gateway updates — suggested tier: primary]` citeturn924490search0
  - `[SUGGESTED SOURCE: ai-runner repo — https://github.com/livepeer/ai-runner — current AI runner architecture, runner API surface, and gateway/AI worker interaction context — suggested tier: primary]` citeturn924490search2
  - `[SUGGESTED SOURCE: Metrics and SLA Foundations for NaaP — https://forum.livepeer.org/t/metrics-and-sla-foundations-for-naap/3189 — current public framing of network-level SLA and NaaP metrics work relevant to gateway service operators; acceptable as a dated governance/community source — suggested tier: acceptable]` citeturn924490search3
