AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| canonical-gateways-audience-design.md | `CONTENT-WRITING/.../testing/Tabs/gateways/collated/` | Audience, Persona, Journey, IA |
| collation-notes-gateways.md | `...gateways/collated/` | Prompt/Skill |
| validation-check.md | `...testing/Tabs/gateways/` | Plan |
| agent-v5-gateways-audience-design.md | `...gateways/zero-context-ai-results/v5/` | Audience, Persona, Journey, IA |
| glossary-gateways.md | `...gateways/input-pack/` | Content |
| v4.md, collation-v2.md (learnings) | `...gateways/learnings/` | Prompt/Skill |
| gateways-content-scan.md | `CONTENT-WRITING/context-packs/` | Content, IA |
| gateways-research-pack.md | `CONTENT-WRITING/context-packs/` | Content |
| gateways-v1-content.md | `CONTENT-WRITING/context-packs/` | Content |
| gateways-full-content.md | `CONTENT-WRITING/context-packs/` | Content |
| gateways-ia-prereq.md | `CONTENT-WRITING/context-packs/` | IA |
| collated/gateways/ (8 files) | `CONTENT-WRITING/collated/gateways/` | Audience, IA |
| gateways-IA.md | `ORCHESTRATOR-CONTENT-WRITING/` | IA, Plan |
| gateways-COMPLETION-STATUS.md | `ORCHESTRATOR-CONTENT-WRITING/` | Plan |
| S01-S13 gateway pages | `ORCHESTRATOR-CONTENT-WRITING/gateways/` | Content, Journey |
| personas.md | `v2/gateways/_workspace/notes/` | Persona |
| portal.mdx | `v2/gateways/` | Content |
| navigator.mdx | `v2/gateways/` | Content, Journey |
| 05b-tab-gateways.md | `_MY_PROCESS/.../FULL-FILES/TABS/` | Persona, Journey, Plan |
| personas.md (historical) | `CONTENT-WRITING/Prompts/Previous Prompts Used/personas-and-journeys/` | Persona |
| gateways.json | `workspace/research/claims/` | Content |

---

# AUDIENCE — Who lands on this tab

**Audience token**: `gateway`

### Who arrives and from where

| Arriving type | Entry vector | Arriving state | Routing need |
|---|---|---|---|
| **Developer graduating from hosted API** | Developers tab `concepts/running-a-gateway.mdx` — decided to run own gateway | Has used Studio API, wants direct network access, custom routing, pricing control | Stays — this is their tab now |
| **Existing gateway operator** | Direct URL / bookmark / search "Livepeer gateway config" | Already running a gateway, needs upgrade/config/operations content | Stays — return visitor |
| **Developers evaluating** self-hosted vs Studio | Developers tab cross-reference | Wants to understand trade-offs before committing | May read concepts then return to Developers |
| **Orchestrators understanding demand side** | Orchestrators tab cross-reference | Wants to understand gateway pricing expectations, capability broadcasts, job routing | Reads concepts, returns to Orchestrators |
| **Protocol researchers/analysts** | About tab cross-reference | Wants to understand gateway layer architecture | Reads concepts, may return to About |

### Cross-tab routing

| Direction | From / To | Why |
|---|---|---|
| Inbound | Developers → Gateways | Developer decided to run own gateway (graduation) |
| Inbound | Solutions → Gateways | Operator-level control needed beyond hosted |
| Outbound | Gateways → Orchestrators | Supplier depth — how orchestrators are selected/paid |
| Outbound | Gateways → Developers | SDK integration for gateway clients |
| Outbound | Gateways → About | Protocol economics, architecture depth |

### Arriving question

> "I want to route AI or video jobs through Livepeer — which gateway type do I need, and how do I set it up?"

---

# PERSONAS — Who this tab actually serves

### Source: 05b-tab-gateways.md (process analysis)

**Primary persona: The Gateway Infrastructure Operator**

An operator who wants to run their own Livepeer gateway — either as infrastructure for their own application, or as a public/commercial gateway. Has strong DevOps skills. Has deliberately decided NOT to use the managed Studio API — they want direct network access, custom routing logic, pricing control, and the ability to keep fees.

This is a smaller and more technically sophisticated audience than the Developers tab persona. The key distinguishing question is: **"Am I building an application that uses a gateway, or am I the one running the gateway?"** The Gateways tab owns the latter.

**Three distinct intents within this persona:**

| Intent | Who | What they need |
|---|---|---|
| **Private gateway operator** | Running gateway for their own application only | Setup, config, operations — focused on their own stack |
| **Public gateway operator** | Running a gateway accessible to third-party developers, listed on the network | All of the above plus: discovery/listing, SLA considerations, client management |
| **Commercial gateway / NaaP builder** | Building a multi-tenant platform on top of their gateway | All of the above plus: auth, billing, usage tracking, NaaP architecture |

**What they need (in order):**
1. Confirmation this is the right path (vs Studio API) — the decision boundary
2. What a gateway actually does at a technical level — role, responsibilities, payment mechanics
3. Installation and initial configuration
4. Network registration and ETH deposit mechanics
5. Pricing and pipeline selection configuration
6. Production operations: monitoring, uptime, upgrading, incident response
7. How their gateway relates to the orchestrators it selects and pays

**Top frustration points** (from forum/Discord):
- ETH deposit mechanics confuse new operators (how much to deposit, how deposits draw down, what happens when empty)
- On-chain vs off-chain gateway distinction not clear enough at entry
- go-livepeer v0.8.9 added WHEP server, v0.8.10 added AI/Live Remote Signer — setup docs may not reflect these
- sdk-gateway.mdx in Developers tab is critically thin (1.8KB) for operators who are also developers

### Source: canonical-gateways-audience-design.md (3-run synthesis)

| Rank | Persona | Score | Consensus |
|---|---|---|---|
| 1 | Self-Hosted Gateway Launcher | Primary | 3/3 |
| 2 | Platform Reseller / NaaP Builder | Secondary | 3/3 |
| 3 | Existing Operator Tuning Production | Secondary | 3/3 |
| 4 | Builder Graduating from API Use | Secondary | 3/3 |

5 personas excluded with reasoning: Off-Chain Explorer, Hosted Service User, Return Operator, Protocol-Native Operator, AI Pipeline Tester.

### Source: personas.md (historical, Discord/GitHub/Messari sourced)

5 gateway operator archetypes from community research:

| Persona | Description | Source |
|---|---|---|
| Graduate | Developer who outgrew Studio API | Discord #local-gateways |
| Provider | Running gateway as a service for others | GitHub issues |
| Builder | Building platform on top of gateway | Messari reports |
| Enterprise | Large-scale commercial gateway operation | Messari reports |
| Broadcaster (deprecated) | Legacy v1 term — now Gateway | — |

---

# JOURNEYS — What each persona needs to accomplish through this tab

## The Gateway Infrastructure Operator's journey

**Source**: 05b-tab-gateways.md (gap analysis)

| Step | Reader's question | What they need |
|---|---|---|
| 1 | Is this the right path for me? (vs Studio API) | Decision boundary: when to self-host vs use hosted |
| 2 | What does a gateway actually do? | Technical role, responsibilities, payment mechanics |
| 3 | How do I install and configure? | go-livepeer gateway mode, initial config |
| 4 | How do I register and fund? | Network registration, ETH deposit mechanics |
| 5 | How do I configure pricing and pipelines? | MaxPricePerUnit, pipeline selection, cost control |
| 6 | How do I run in production? | Monitoring, uptime, upgrading, incident response |
| 7 | How does my gateway relate to orchestrators? | Selection, pricing, capability matching |

## Canonical ideal journey (8 stages)

**Source**: canonical-gateways-audience-design.md

| Position | Stage | lifecycleStage |
|---|---|---|
| 1 | Orient to gateway role | `discover` |
| 2 | Choose operational model (on-chain / off-chain / hosted / NaaP) | `evaluate` |
| 3 | Understand payment layer (probabilistic micropayments, deposit/reserve) | `evaluate` |
| 4a | On-chain setup (wallet, ETH funding, TicketBroker deposit, node config) | `setup` |
| 4b | Off-chain setup (remote signer connection, manual orchestrator config) | `setup` |
| 5 | Configure routing and pricing (price caps, weight factors, workload routing) | `build` |
| 6 | Configure production operations (monitoring, alerting, baselines) | `build` |
| 7 | Run in production (deposit management, failover, orchestrator health) | `operate` |
| 8 | Improve efficiency (weight factors, NaaP/dual-mode, scaling) | `optimise` |

## Entry blockers

| Blocker | Path affected | Resolution |
|---|---|---|
| Path ambiguity (on-chain vs off-chain vs hosted vs NaaP) | All | S1 disambiguates |
| ETH prerequisite (on-chain: 0.36 ETH production minimum on Arbitrum) | On-chain path | S3 (payments) before S4 (setup) |
| Remote signer prerequisite (off-chain) | Off-chain path | S5 |

## Jobs to be Done

**Source**: canonical

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | Evaluating deployment paths | choose on-chain, off-chain, hosted, or NaaP with clear prerequisites | commit to correct path before setup |
| J2 | Zero to first job | get minimal gateway running and validate stack | confirm setup works in my environment |
| J3 | Configuring production | set price limits and routing weights | control per-job costs and orchestrator pool quality |
| J4 | Operating daily | top up deposit/reserve and know when to act | prevent payment failures |
| J5 | Building platform (NaaP) | design and implement multi-tenant architecture | expose Livepeer as managed service |
| J6 | Adding AI routing | configure AI pipeline capability matching | deliver AI output reliably with acceptable latency |
| J7 | Something broken | diagnose payment/routing/capability/network failures | identify and resolve root cause without guessing |

---

# IA — All section structures found

## Canonical 13-section structure (3-run synthesis) — PHASE 2 IA LOCKED

| # | Section | purpose | pageType | lifecycleStage |
|---|---|---|---|---|
| S1 | Gateway Path Finder | `orient` | `navigation` | `evaluate` |
| S2 | What a Gateway Does | `explain` | `concept` | `discover` |
| S3 | Payments and Funding | `explain` | `concept` | `evaluate` |
| S4 | On-Chain Gateway Quickstart | `start` | `instruction` | `setup` |
| S5 | Off-Chain Gateway Quickstart | `start` | `instruction` | `setup` |
| S6 | Pricing and Cost Control | `configure` | `guide` | `build` |
| S7 | Orchestrator Selection and Routing | `configure` | `guide` | `build` |
| S8 | AI Pipeline Routing | `configure` | `instruction` | `build` |
| S9 | Dual Mode Configuration | `configure` | `instruction` | `build` |
| S10 | Payment Operations | `operate` | `guide` | `operate` |
| S11 | Running in Production | `operate` | `guide` | `operate` |
| S12 | Troubleshooting | `troubleshoot` | `guide` | `troubleshoot` |
| S13 | Gateway as a Platform (NaaP) | `build` | `guide` | `build` |

**Design flags**: S11 may split (monitoring + operations checklist). S13 likely splits (evaluate + build). Parallel quickstarts (S4/S5) unanimous 3/3 consensus.

**ALL 13 PAGES WRITTEN** (9,482 words total). ~48 veracity REVIEW markers placed. Pending: naming audit, full veracity pass, layout pass (MDX), universal pages, human review.

## Current live v2/gateways/ structure

```
v2/gateways/
├── portal.mdx               ✅ exists — deprecated pageType, audit developer handoff
├── navigator.mdx             ✅ most comprehensive navigator in site (19.1KB)
├── index.mdx                 ✅ substantial (12.5KB)
├── concepts/
│   └── role.mdx              ✅ confirmed live
│   └── [payment mechanics]   ⚠️ confirm ETH/payment depth
├── quickstart/               ✅ exists — confirm vs v0.8.10
├── setup/
│   └── [ETH deposit]         ⚠️ confirm depth
│   └── [WHEP server]         ⚠️ needs v0.8.9 update
│   └── [Remote Signer]       ⚠️ needs v0.8.10 update
├── guides/
│   └── production-gateways   ✅ live — confirm public/private/commercial modes covered
└── resources/                ✅ exists — add SDK cross-reference
```

98 pages scanned. 22 stubs. 98 missing lifecycleStage. 10 deprecated pageType.

---

# OPEN ITEMS & BLOCKING DECISIONS

1. **RESOLVED — NaaP acronym**: "Network-as-a-Product" LOCKED.
2. **RESOLVED — BYOC acronym**: "Bring Your Own Container" LOCKED.
3. **NON-BLOCKING — Community remote signer endpoint**: signer.eliteencoder.net referenced but unverified.
4. **NON-BLOCKING — 0.36 ETH production minimum**: Sourced from GitHub #3744, flagged REVIEW.
5. **NON-BLOCKING — S13 split decision**: NaaP evaluate + build may need separate pages during detailed design.
6. **CRITICAL CONTENT GAPS**: ETH deposit mechanics depth, WHEP server config (v0.8.9), Remote Signer config (v0.8.10), public vs private vs commercial mode coverage.

# RESEARCH GAP — Missing Personas

The canonical work may underserve:
- **The NaaP Platform Builder** — treated as a section (S13) but may warrant distinct persona treatment. Building a multi-tenant platform on Livepeer is architecturally different from running a simple gateway. Auth, billing, usage tracking, multi-tenancy are entirely different concerns. The 05b process notes identify private/public/commercial as three modes but don't fully develop the NaaP builder as a persona with their own journey.
