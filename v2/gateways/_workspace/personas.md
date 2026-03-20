# Part 1 — Persona Research

## Sources

- Livepeer Mirror blog (2024–2025)
- livepeer.cloud SPE reports
- Messari State of Livepeer Q1–Q3 2025
- go-livepeer GitHub issues + PRs
- Discord `#local-gateways` channel
- Remote Signers design doc (Notion Weir doc + PRs #3791 and #3822)
- livepeer.org/network
- livepeer.org docs existing pages
- Livepeer 2024 Treasury Review (Mirror)
- Livepeer **"A Real-time Update to Network Vision"** (Nov 2025 blog post)
- community SPE proposals
- go-livepeer Python gateway repo examples
- `livepeer-python-gateway` (j0sh)
- NaaP dashboard repo

---

## Gateway Operator Personas — Overview

The Gateways tab serves operators who run nodes that route jobs into the network, not developers who consume the network API. This is distinct from Developers/AI Builders tabs.

However, the gateway operator audience is bifurcated:

- some run gateways embedded in their own app (**demand-side**)
- others run public gateway services others can connect to (**supply-side**)

This split is poorly documented and creates significant IA ambiguity that this plan resolves.

There are also two sub-persona axes layered across all profiles:

- **Video gateway** (RTMP/HLS transcoding workloads) vs **AI gateway** (inference workloads via `ai-runner` pipelines)
- **On-chain gateway** (manages own ETH keys, full PM stack) vs **off-chain gateway** (delegates signing to a remote signer / clearinghouse)

The remote signer / clearinghouse architecture (shipped Q4 2025, PRs #3791/#3822) fundamentally changes the gateway operator journey for AI workloads — the gateway docs have not yet incorporated this shift.

---

## Persona A — The App Developer Graduating to Self-Hosted (*"The Graduate"*)

### Background

Has been building a video or AI-powered application using a hosted gateway service (Daydream API, Livepeer.Cloud, Livepeer Studio). As usage scales, the cost/latency/control tradeoffs of a hosted service shift in favour of running their own gateway.

This transition path is explicitly described in the Livepeer Network Vision blog post (Nov 2025):
> "users of Daydream... may ultimately choose to run their own gateways to recognise the cost savings and control... that comes from doing so."

### Motivations

- Cost savings at scale vs hosted API pricing
- Full feature access (custom orchestrator lists, dual AI + video config, middleware)
- Lower latency via proximity control of orchestrator selection
- No dependency on a third-party gateway operator's reliability or SLA

### Entry Points

- Daydream API docs (outbound: "run your own gateway for cost savings")
- Livepeer Blog (**"A Real-time Update to the Livepeer Network Vision"**)
- Livepeer.Cloud **"Gateway Node"** article (`livepeer.cloud/how-to-run-a-livepeer-gateway-node`)
- go-livepeer releases GitHub page (looking for binary to download)
- Livepeer Foundation BD / AI Video Startup Program alumni

### Prior technical context

Comfortable with Docker, REST APIs, basic Linux. Likely already using the Livepeer AI JS/Python SDK. Has an ETH wallet but is not a crypto-native. Reads GitHub READMEs.

### Key Questions at Each Stage

- **Orienting:** What exactly does "running my own gateway" mean vs using Daydream? What do I gain?
- **Decision:** Is this for video, AI, or both? Do I need an on-chain gateway or can I stay off-chain? What does "remote signer" mean and do I need one?
- **Activation:** What's the minimum setup? Docker vs binary? What flags do I actually need?
- **Operational:** How do I connect to orchestrators? How do I configure for my specific use case (image-to-video, text-to-image, LLM, transcoding)?
- **Deepening:** How do I set `maxPricePerUnit`? How do I monitor throughput and errors? How do I add middleware for auth?
- **Reference:** CLI flags, configuration options, API endpoints

### Pain Points (confirmed from sources)

- Video vs AI gateway confusion — docs treat them as one thing but the setup differs significantly; especially port numbers, flags, and orchestrator discovery
- "Off-chain" mode — most new operators don't need on-chain setup for AI workloads, but docs lead with on-chain config
- Remote signer decision — new architecture (PRs #3791/#3822) is underdocumented; operators don't know whether to self-sign or use a clearinghouse
- Orchestrator discovery — off-chain gateway needs orchestrator list from somewhere; this is not documented for the off-chain case (see Discord: "I'll also try to publish docs soon. There are some good examples in the Python gateway examples repo")
- Dual gateway config — running AI + video on same node or separate nodes is a common operational question with no clear guide

### Hardware / Infra Profile

Small VPS or cloud instance (2–8 vCPU, 8–32GB RAM), no GPU required for gateway role. Typically Linux/Docker. May be running alongside app infrastructure.

---

## Persona B — The Gateway-as-Service Provider (*"The Provider"*)

### Background

Runs a public gateway as a network-level infrastructure business. Examples: Livepeer.Cloud SPE (operates the Livepeer Cloud gateway), LLM SPE (runs LLM-focused gateway), NaaP (Network as a Platform — developing gateway with auth + billing).

Receives payment for routing jobs between applications and orchestrators. Has commercial relationships with both ends of the pipeline.

### Motivations

- Earn fees from routing (ETH micropayments from application-side demand)
- Build a gateway-SaaS product with API key management, usage metering, rate limiting
- Contribute to network health by expanding public gateway capacity
- Position as the "Heroku / Vercel" layer for Livepeer apps (referenced in blog post)

### Entry Points

- Livepeer ecosystem engagement (Foundation BD, grants, SPE proposals)
- Livepeer Treasury proposals (Cloud SPE model, LLM SPE model)
- Livepeer.Cloud **"Get Started"** page (existing operator showing the path)
- Go-livepeer GitHub (looking at broadcaster/gateway mode implementation)

### Prior technical context

Strong devops / infrastructure background. Familiar with Ethereum, smart contracts, and crypto payment flows. Comfortable running production services. May be building a product layer (billing, auth, API management) on top of the go-livepeer gateway binary.

### Key Questions at Each Stage

- **Orienting:** How does the gateway fee model work? How does ETH flow from application to gateway to orchestrator? What is a probabilistic micropayment (PM)?
- **Decision:** On-chain vs off-chain gateway? Remote signer vs direct ETH key management? Clearinghouse model?
- **Activation:** How do I fund a gateway? How do I set pricing? How do I accept jobs from external developers (not just my own apps)?
- **Operational:** How do I publish my gateway to the network? How does auth/API key management work with the gateway? How do I monitor at scale?
- **Deepening:** How does the clearinghouse architecture work? How do I operate remote signers for production security? How do I build user management on top of the gateway?
- **Reference:** Payment mechanics, contract addresses, PM ticket specs, configuration flags

### Pain Points (confirmed from sources)

- Clearinghouse architecture is undocumented — Discord confirms: "Yeah that would basically be the clearinghouse (which is the remote signer + user management / auth + accounting + a bunch of other things)" — no complete documentation
- ETH price volatility impacting operations — documented by remote signers design doc: "Ethereum price volatility has caused Daydream service reliability issues" — not addressed in current docs
- Orchestrator discovery for off-chain gateways — no documented discovery endpoint or on-chain registry query mechanism
- Publishing to the network — unclear how a gateway operator advertises their endpoint to potential application developers
- Auth + billing integration — NaaP dashboard shows developer API key integration but no docs cover this pattern
- Production PM operation — understanding the payment ticket lifecycle is not documented for providers; they have to read source code

### Hardware / Infra Profile

Multi-region cloud (AWS/GCP/Azure), load-balanced gateway instances, managed ETH infrastructure, monitoring stack (Prometheus/Grafana). May have dedicated redeemer nodes for ETH ticket redemption.

---

## Persona C — The SDK / Alternative Gateway Developer (*"The Builder"*)

### Background

ML engineer, platform engineer, or developer building non-Go implementations of the Livepeer gateway. Uses the remote signer architecture to implement a Python, browser, mobile, or embedded gateway client without requiring deep Ethereum integration.

Active in `#local-gateways` Discord. The remote signer design doc explicitly targets this persona:
> "we need many gateway implementations in order to have direct integration with the Livepeer network natively on different platforms."

### Motivations

- Embed gateway-like functionality directly in an application (edge deployments, browser apps, mobile apps)
- Build Livepeer integration for a Python ML pipeline without shipping Go binary dependencies
- Contribute open-source gateway tooling to the ecosystem
- Create BYOC (Bring Your Own Compute) integrations for specific AI workloads

### Entry Points

- go-livepeer GitHub (reading gateway source)
- `livepeer-python-gateway` (j0sh) repo and examples
- Discord `#local-gateways` channel
- Remote Signers design doc (Notion Weir doc)
- Cloud SPE Ollama runner guide (livepeer.cloud, Nov 2025)

### Prior technical context

Strong software engineering background. Comfortable reading protocol specifications, Go source code, and Ethereum documentation. Likely building in Python, JavaScript/TypeScript, or Rust. May not have prior Livepeer operational experience.

### Key Questions at Each Stage

- **Orienting:** What exactly does a gateway do at the protocol level? What is the minimum I need to implement?
- **Decision:** Do I implement payments myself or use a remote signer? What is the remote signing protocol?
- **Activation:** How do I use the remote signer service? What endpoints does it expose? What is the signing state machine?
- **Operational:** How does orchestrator discovery work for off-chain gateways? How does session management work?
- **Deepening:** How do I handle BYOC vs standard pipeline payments? How does the LV2V payment flow differ from batch AI?
- **Reference:** Remote signer protocol spec, PM ticket format, go-livepeer source references, Python SDK API

### Pain Points (confirmed from Discord `#local-gateways`)

- No documentation for remote signer protocol — only available in the design doc (Notion, not in docs) and PR comments
- Orchestrator discovery for off-chain use — "I'll also try to publish docs soon" (j0sh in Discord) — not yet done
- Payment state machine complexity — Discord discussion of bookkeeping states is highly complex; design doc helps but isn't user-facing docs
- LV2V vs batch AI vs BYOC payment differences — each has different payment flows, none well documented
- SDK entry point fragmentation — `OrchestratorSession`, `PaymentSession`, `StartJobRequest` are in flux; no stable API reference

### Hardware / Infra Profile

Varies: developer machine for prototyping, cloud or embedded for production. May run go-livepeer remote signer as a sidecar service. No on-chain requirements for the gateway itself.

---

## Persona D — The Video Infrastructure Operator (*"The Broadcaster-Turned-Operator"*)

### Background

Coming from traditional live streaming / broadcast infrastructure. Previously using cloud transcoding (Mux, AWS MediaLive, Wowza). Evaluates Livepeer gateway as a cost-effective alternative for transcoding their video content at scale. Interested primarily in the video/transcoding side of the gateway.

The **"Gateway was previously called the Broadcaster"** note in the existing docs is directly relevant — this is the original gateway persona.

### Motivations

- 50x cost reduction in video transcoding vs centralised cloud providers
- Platform-neutral technology (no vendor lock-in to AWS/GCP streaming services)
- Censorship-resistant broadcasting infrastructure
- OBS/RTMP → HLS transcoding pipeline replacement

### Entry Points

- Livepeer.org homepage (broadcaster framing)
- Livepeer.Cloud blog posts (**"Livepeer + Owncast"** integration)
- `livepeer.cloud/get-started` (existing tutorial targeting this persona)
- Owncast integration documentation (self-hosted streaming server)
- Reddit communities (`r/selfhosted`, `r/streaming`)
- Video mining community references

### Prior technical context

Comfortable with OBS, RTMP, streaming protocols. Varies from consumer-level (home streamer) to professional (broadcast engineer). May have minimal Ethereum/crypto experience — the on-chain fund-gateway step is a significant friction point.

### Key Questions at Each Stage

- **Orienting:** Is this a replacement for my cloud transcoding? How much cheaper is it? What's the catch?
- **Decision:** What's the on-chain requirement? Do I need ETH? How do I fund the gateway deposit?
- **Activation:** How do I connect OBS/RTMP to the gateway? How do I set up transcoding profiles?
- **Operational:** How do I monitor transcoding quality? How do I choose/filter orchestrators for my content?
- **Deepening:** How do I optimise for low-latency streaming? Can I add AI overlay capabilities alongside transcoding?
- **Reference:** RTMP config, HLS output, transcoding profile specs, `maxPricePerUnit` guidance

### Pain Points (confirmed from docs and community)

- On-chain funding requirement is a hard stop for non-crypto users — fund-gateway step requires bridging ETH to Arbitrum
- "Broadcaster" → "Gateway" rename confusion — legacy commands still use `-broadcaster` flag; this is explicitly noted in current docs
- Orchestrator selection for quality — no guidance on how to select orchestrators for specific content types or required transcoding profiles
- Dual gateway (AI + video) — when operators want to add AI capabilities to their existing video setup, the dual-config docs are thin
- Windows setup — the Windows gateway guide has a `.bat` file approach that works but is confusing for non-devops users

### Hardware / Infra Profile

VPS (2–8 vCPU), or dedicated server. No GPU required for gateway (transcoding happens on orchestrator GPUs). Linux or Windows. Needs static IP and port forwarding for `serviceAddr`.

---

## Persona E — The Enterprise / AI Platform Operator (*"The Platform Builder"*)

### Background

Building or operating an AI-native product that routes significant volume through the Livepeer network. Examples: Daydream (Livepeer Inc), Embody Avatars, NaaP (Network as a Platform SPE), AI agents built on Livepeer.

Needs production-grade gateway infrastructure: auth, billing, multi-tenancy, SLA monitoring, orchestrator SLA data, and the ability to manage multiple gateway instances. This is the persona the **"Gateway Improvement Roadmap (target May 2026)"** and **"Simplify Crypto Payments & SDKs (February 2026)"** milestones are aimed at.

### Motivations

- Power a commercial AI product on Livepeer network infrastructure
- Manage multi-user access with API key authentication (NaaP model)
- SLA guarantees for production workloads
- Route different workload types to different orchestrator tiers

### Entry Points

- Foundation BD engagement, SPE grant processes
- NaaP dashboard (JWT + API key demo)
- Existing Daydream platform (internal Foundation team)
- AI Video Startup Program (Foundation program for AI startups)

### Prior technical context

Strong engineering organisation. Multiple engineers, devops, product. Deep crypto knowledge not assumed (gateway should abstract this). Primarily interested in product metrics (latency, error rate, cost per job) not protocol mechanics.

### Key Questions at Each Stage

- **Orienting:** What is the gateway's role in a production AI platform? What does the clearinghouse architecture enable?
- **Decision:** Should we operate our own gateway or use a public one? What is the NaaP model?
- **Activation:** How do we set up auth (JWT/API key) on a gateway? How does billing integrate?
- **Operational:** How do we monitor per-user usage and costs? How do we handle orchestrator failures and fallbacks?
- **Deepening:** How do we build orchestrator tiers (SLA-based routing)? How do we handle BYOC?
- **Reference:** NaaP architecture, clearinghouse API spec, gateway monitoring metrics

### Pain Points (confirmed from Discord `#local-gateways`)

- NaaP/clearinghouse is under active development — Discord: "I've drafted the solution into the NaaP dashboard and implemented a demo in the Developer API Keys section" — no stable docs
- Multi-tenancy pattern — no documentation on how to operate a gateway that serves multiple application clients with separate billing/auth
- Orchestrator discovery and tiering — Discord: "Different tiers of Orchestrators for different job types. Would be great to be accompanied with SLA performance data for the orchs" — not documented
- Production gateway reliability — ETH price volatility, ticket expiry handling, fallback orchestrator selection all need documented patterns
- BYOC payments — different payment flow from standard AI; no docs
