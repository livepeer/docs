# Gateways Tab — Audience, Persona & Journey Research Summary

> Collated: 2026-04-06
> Sources: 27 files across 8 repo locations (see Sources Index below)
> Status: Collated from all known repo sources. Canonical audience design (Phase 1) is complete and validated (Check B passed). Two terminology conflicts remain open (NaaP, BYOC).

---

## 1. Audience Token & Arriving Question

**Token:** `gateway`

**Arriving question:**
> "I want to route AI or video jobs through Livepeer — what type of gateway do I need to run, which setup path applies to my situation, and what do I need to have in place before I start?"

**Key distinction from other tabs:** "Am I building an application that uses a gateway, or am I the one running the gateway?" The Gateways tab owns the latter.

---

## 2. Primary Persona

**Name:** Self-Hosted Gateway Launcher (3/3 unanimous consensus)

**Who:** An infrastructure or platform engineer who has outgrown a hosted API and needs to run their own routing layer for cost control, custom routing logic, or higher throughput. Strong DevOps skills. Has deliberately decided NOT to use the managed Studio API.

**Self-identification:** Arrives calling themselves "infrastructure teams," "platform operators," "API providers," or "backend operators" — not "gateway operators."

**What they need (in order):**
1. Confirmation this is the right path (vs Studio API) — the decision boundary
2. What a gateway does at a technical level — role, responsibilities, payment mechanics
3. Installation and initial configuration
4. Network registration and ETH deposit mechanics
5. Pricing and pipeline selection configuration
6. Production operations: monitoring, uptime, upgrading, incident response
7. How their gateway relates to the orchestrators it selects and pays

**Three distinct intents within this persona:**

| Intent | Who | What they need |
|---|---|---|
| Private gateway operator | Running gateway for their own application only | Setup, config, operations — focused on their own stack |
| Public gateway operator | Running a gateway for third-party developers | All above plus: discovery/listing, SLA, client management |
| Commercial gateway / NaaP builder | Building a multi-tenant platform on top | All above plus: auth, billing, usage tracking, NaaP architecture |

---

## 3. Secondary Personas

| Rank | Persona | Entry vector | Arriving with | Wants to leave with | Consensus |
|---|---|---|---|---|---|
| 2 | **Platform Reseller / NaaP Builder** | Solutions tab, external blog, investor referral | Business model clarity; limited protocol knowledge; uncertain if NaaP is buy-or-build | Clear NaaP architecture, confirmed commercial viability, concrete entry point | 3/3 |
| 3 | **Existing Operator Tuning Production** | Direct URL, Discord thread, search for specific error | Running gateway, specific operational context | Specific tuning action, config value, or operational fix — self-contained | 3/3 |
| 4 | **Builder Graduating from API Use** | Developers tab cross-link, AI docs cross-link | API-consumer fluency from hosted use; needs self-hosted trade-offs | Confident stay-hosted-vs-graduate decision, plus minimum setup path if they graduate | 3/3 |

**Excluded personas** (documented in collation-notes, consensus < 2):
- Off-Chain Explorer (Perplexity only) — covered by Self-Hosted Launcher off-chain variant
- Hosted Service User (Perplexity only) — routing-out handled by S1 disambiguation
- Return Operator (ChatGPT only) — subsumed by Existing Operator Tuning Production
- Protocol-Native Operator (ChatGPT only) — covered by Self-Hosted Launcher
- AI Pipeline Tester (Claude Web only) — covered by Builder Graduating from API Use

---

## 4. Cross-Tab Routing

| Direction | From / To | Why |
|---|---|---|
| Inbound | Developers → Gateways | Developer graduated from hosted API to self-hosted gateway |
| Inbound | Solutions → Gateways | Operator-level control needed beyond hosted products |
| Inbound | Home → Gateways | General routing — "route jobs into the network" visitors |
| Outbound | Gateways → Orchestrators | Supplier depth — how orchestrators are selected/paid |
| Outbound | Gateways → Developers | SDK integration for gateway clients |
| Outbound | Gateways → About | Protocol economics, architecture depth |

---

## 5. Entry Blockers (union of all runs)

1. **Path ambiguity** — must choose on-chain vs off-chain, single vs dual, before setup steps are meaningful. Resolving: S1 disambiguation
2. **ETH/deposit prerequisite** — on-chain path requires ETH on Arbitrum and funded TicketBroker deposit before routing. Must be surfaced as pre-step before install
3. **Remote signer prerequisite** — off-chain path requires working remote signer endpoint before signing tickets. Community signer must be referenced
4. **NaaP architecture ambiguity** — may not know if NaaP is buy-or-build. S1 must name the NaaP path
5. **Workload-type and pricing fit** — video, AI, and dual mode imply different configs; determination must precede configuration

---

## 6. Jobs to be Done

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | Evaluating whether to run my own gateway | Understand the gateway paths and hard prerequisites for each | Make a confident path decision before any setup |
| J2 | Starting from zero with a chosen path | Get a minimal gateway running, dispatching real jobs | Validate the stack works before investing in production config |
| J3 | Configuring pricing and orchestrator selection | Set MaxPricePerUnit, per-capability limits, routing weights | Control costs and maintain adequate orchestrator pool |
| J4 | Managing the payment layer | Top up TicketBroker deposit/reserve, check balance | Keep payments flowing without unexpected failures |
| J5 | Exposing gateway as a platform | Implement auth, usage accounting, per-user billing (NaaP) | Run a commercial multi-tenant service |
| J6 | Routing AI jobs to a specific model | Configure gateway to discover matching pipeline/model capability | Deliver AI output reliably with acceptable latency |
| J7 | Gateway degraded or failing | Diagnose root cause (payment, selection, capability, network) | Restore service without guessing |

---

## 7. Ideal Journey

### Linear journey

| Position | Stage | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Choosing a gateway path | `evaluate` | Reading disambiguation; identifying on-chain, off-chain, hosted, or NaaP |
| 2 | Understanding what a gateway does | `discover` | Forming mental model — routing, payments, sessions; distinguishing from orchestrators |
| 3 | Preparing for setup | `evaluate` | Payment prerequisites for chosen path — ETH + Arbitrum (on-chain) or remote signer (off-chain) |
| 4 | Launching first working gateway | `setup` | Path-specific quickstart — install, configure, connect, route first job |
| 5 | Configuring routing and cost controls | `build` | Setting pricing, selection weights, workload-specific routing |
| 6 | Configuring production operations | `build` | Payment flow, routing health, monitoring, alerting, baselines |
| 7 | Running in production | `operate` | Deposit management, throughput/latency monitoring, failure response |
| 8 | Optimising | `optimise` | Tuning weights, adjusting prices, NaaP/dual mode, scaling |

### On-demand (direct-entry reference)
- CLI flag names, values, defaults
- TicketBroker deposit/reserve top-up
- Per-capability price limits for specific AI pipelines
- Orchestrator selection weight factors
- Failover behaviour and session management
- Payment failure diagnosis
- NaaP API key management
- Dual mode prerequisites and OS constraints
- Remote signer setup
- Available AI pipelines and model IDs
- Troubleshooting by error category

---

## 8. Canonical Section Structure (Phase 1 output)

| Section | Reader question | Job | purpose | pageType | lifecycleStage |
|---|---|---|---|---|---|
| S1. Gateway path finder | "Which of the paths applies to me?" | J1 | `orient` | `navigation` | `evaluate` |
| S2. What a gateway does | "What does this node do — and not do?" | J1 | `explain` | `concept` | `discover` |
| S3. Payments, deposits, funding | "How do payments work, what must I have?" | J1, J4 | `explain` | `concept` | `evaluate` |
| S4. On-chain quickstart | "How do I run an on-chain gateway?" | J2 | `start` | `instruction` | `setup` |
| S5. Off-chain quickstart | "How do I run with a remote signer?" | J2 | `start` | `instruction` | `setup` |
| S6. Pricing and cost control | "How do I control per-job spend?" | J3 | `configure` | `guide` | `build` |
| S7. Orchestrator selection and routing | "How does my gateway pick orchestrators?" | J3 | `configure` | `guide` | `build` |
| S8. AI pipeline routing | "How do I route AI to specific models?" | J6 | `configure` | `instruction` | `build` |
| S9. Dual mode configuration | "Can I run both video and AI?" | J3 | `configure` | `instruction` | `build` |
| S10. Payment operations | "How do I keep my gateway funded?" | J4 | `operate` | `guide` | `operate` |
| S11. Production operations | "What do I monitor day-to-day?" | J7 | `operate` | `guide` | `operate` |
| S12. Troubleshooting | "Why isn't my gateway routing?" | J7 | `troubleshoot` | `guide` | `troubleshoot` |
| S13. NaaP / Platform | "How do I expose this to multiple users?" | J5 | `build` | `guide` | `build` |

13 sections (one above 8–12 target range; justified by parallel quickstarts S4/S5 and distinct dual-mode S9).

---

## 9. Voice Rules (gateway audience)

**Register:** Peer-to-peer technical. Operator-to-operator. As if a senior engineer wrote notes for another senior engineer. Not tutorial-style.

**Do:**
- Lead with what the gateway gets (output, earnings, routing performance) before how to achieve it
- Use concrete numbers: "routes ~40 jobs/second at 4% margin" not "can handle high throughput"
- Assume familiarity with: networking concepts, load balancing, configuration files, CLI tooling, gas/fees conceptually
- State commands imperatively: "Run `go-livepeer -gateway`" — not "You can run..."
- Multi-path pages: majority operator path (standard gateway setup) first and fully described

**Don't:**
- Do not explain what a terminal is or how to SSH into a server
- Do not use "simply", "just", "easy" — these are meaningless to experienced operators
- Do not soften warnings — state the risk directly
- Do not use questions as section headings
- Do not use "thriving ecosystem", "powerful solution", "exciting opportunity"

**Prohibited phrases:**
- "Don't worry, this is easy to configure"
- "As a gateway operator, you will..."
- "This document will guide you through"
- "Remember that..." / "Keep in mind that..."
- "The gateway simply..." (with "simply" as filler)

---

## 10. Terminology Lock (44 terms)

Status: Canonical — 3-run consensus. Two conflicts unresolved.

### Locked terms (key subset)

| Term | Definition (abbreviated) | Flags |
|---|---|---|
| Gateway | Node that submits jobs, routes work to orchestrators, manages payments. No GPU. Replaces "Broadcaster" | — |
| On-chain gateway | Connected to Livepeer protocol on Arbitrum, manages own wallet, uses on-chain micropayments | verify |
| Off-chain gateway | Uses remote signer, specifies orchestrators manually. Valid production config, not test mode | verify |
| Probabilistic micropayments | Lottery-based payment — only winning tickets redeemed on-chain; amortises gas | verify |
| Dual mode | Single gateway running both video transcoding and AI inference. "Combined mode" and "Hybrid" are deprecated | verify |
| MaxPricePerUnit | CLI flag — max price per pixel unit; controls cost ceiling and orchestrator pool size | verify |
| MaxPricePerCapability | CLI flag — max price per AI pipeline/model pair; overrides MaxPricePerUnit for that capability | verify |
| Pipeline | AI processing workflow defined by type + model ID; routed by gateway. Not a CI/CD pipeline | verify |
| Capability | Pipeline/model pair an orchestrator advertises; the routing key gateways use | verify |

### Unresolved conflicts

| Term | Conflict | Action required |
|---|---|---|
| **NaaP** | "Network as a Platform" (heading) vs "Network-as-a-Product" (glossary body) | Verify against `github.com/livepeer/naap` repo |
| **BYOC** | "Bring Your Own Compute" vs "Bring-Your-Own-Container" | Verify against go-livepeer repo; unclear if gateway or orchestrator concept |

### Excluded terms
- `Broadcaster` — deprecated, replaced by Gateway
- `Combined mode` / `Hybrid` — deprecated, replaced by Dual mode
- `LPT` — indirect gateway relevance only (stake-weight routing context)

Full 44-term lock table: `workspace/plan/active/CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/testing/Tabs/gateways/collated/canonical-gateways-audience-design.md`

---

## 11. Persona Path Validation (all clear)

| Persona | Enters at | Structural block | Content gap |
|---|---|---|---|
| Self-Hosted Launcher (on-chain) | S1 → S2 → S3 → S4 | None | S4 must surface ETH deposit as pre-step |
| Self-Hosted Launcher (off-chain) | S1 → S2 → S3 → S5 | None | S5 must reference community remote signer; state off-chain is valid production |
| Platform Reseller / NaaP | S1 → S2 → S3 → S13 | None (if S1 names NaaP) | S13 must introduce NaaP architecturally before setup |
| Existing Operator | S10/S12/S6/S7 direct | None | S6/S7/S10/S12 must be self-contained |
| Builder Graduating | S1 → S2 → S4 or S5 | None | S1–S2 must include "stay hosted vs graduate" signal |

---

## 12. Sources Index

### HIGH usefulness
| File | Location | Content |
|---|---|---|
| 05b-tab-gateways.md | `_MY_PROCESS/.../TABS/` | Primary persona, needs, gap analysis |
| GATEWAYS/index.md | `_MY_PROCESS/.../RESEARCH/GATEWAYS/` | Master index — tokens, arrival vectors, routing table |
| canonical-gateways-audience-design.md | `CONTENT-WRITING/.../gateways/collated/` | Terminology lock (44 terms), S1–S13, personas, jobs |
| voice-rules.md | `CONTENT-WRITING/Prompts/` | Gateway voice: register, do/don't, prohibited phrases |
| audience-design.md | `CONTENT-WRITING/collated/gateways/` | Canonical audience design (same as above) |
| collation-notes-gateways.md | `CONTENT-WRITING/.../gateways/collated/` | Terminology conflicts (NaaP, BYOC), excluded personas |

### MEDIUM-HIGH usefulness
| File | Location | Content |
|---|---|---|
| gateways-research-pack.md | `CONTENT-WRITING/context-packs/` | V1/V2 inventory, CLI flags, ports, contracts, economics |
| gateways-ia-prereq.md | `CONTENT-WRITING/context-packs/` | Folder tree, nav tree, metadata tables, structure validation |
| agent-v5 audience design | `gateways/zero-context-ai-results/v5/` | Agent-generated design — 27 terms, section requirements |
| v4.md learnings | `gateways/learnings/` | Two parallel quickstarts confirmed non-negotiable; NaaP flag |
| research-sources.md | `v2/gateways/_workspace/` | 3-tier source authority hierarchy |

### MEDIUM usefulness
| File | Location | Content |
|---|---|---|
| gateways-content-scan.md | `CONTENT-WRITING/context-packs/` | 98-page inventory, frontmatter audit, heading structure |
| gateways-full-content.md | `CONTENT-WRITING/context-packs/` | Full content extraction of all v2/gateways MDX |
| glossary-gateways.md | `gateways/input-pack/` | 75-term gateway glossary with tags and status |
| cross-tab-journeys.md | `CONTENT-WRITING/decisions/` | Cross-tab journey stub |
| gateways-v1-content.md | `CONTENT-WRITING/context-packs/` | V1 historical content |
