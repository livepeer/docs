AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| Audience & Persona Mapping & Definitions | `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/01_01.../index.md` | Persona |
| Personas Journey Alignment | `docs-guide/_workspace/02_Design-Specification/02_Audience-&-Personas/02_02.../index.md` | Journey |
| IA Structure & Purpose | `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/01_03.../index.md` | IA |
| IA Journey-Derived IA | `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/02_04.../index.md` | IA |
| IA Blueprint | `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/03_05.../index.md` | IA |
| usefulness-audience-normalization.json | `tools/config/` | Audience |
| usefulness-journeys.json | `tools/config/` | Journey |
| cross-tab-journeys.md | `CONTENT-WRITING/decisions/` | Journey |
| site-map.md | `CONTENT-WRITING/Prompts/Previous Prompts Used/site-map/` | IA |
| 08a-ia-per-tab.md | `CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/` | IA |
| TEMPLATE-tab-ia-map.md | `CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/` | Plan |
| personas.md (research) | `CONTENT-WRITING/Prompts/.../current-repo-resources/` | Persona |
| MASTER-AUDIENCE-SOURCES-CONTENT-GAP-REPORT.md | `CONTENT-WRITING/CONTENT/` | Content |
| voice-rules.md | `CONTENT-WRITING/Prompts/` | Prompt/Skill |
| 00-NEW-tab-ownership-map.md | `_MY_PROCESS/.../FULL-FILES/` | IA |
| personas.mdx | `v2/internal/overview/` | Persona |
| persona-routing.md | `ai-tools/ai-skills/docs-copy/skills/` | Prompt/Skill |
| audience-design-v5.md | `CONTENT-WRITING/Prompts/Prompts-By-Phase/1-audience-design/` | Prompt/Skill |

---

# AUDIENCE — Site-wide canonical model

### 7 canonical audiences

**Source**: usefulness-audience-normalization.json

| Token | Description | Primary tab |
|---|---|---|
| `founder` | Evaluating Livepeer for product/business | Solutions, About |
| `builder` | Building products ON TOP of Livepeer (Daydream, Streamplace, etc.) | Solutions |
| `developer` | Building apps/APIs/SDKs consuming Livepeer | Developers |
| `gateway` | Running gateway infrastructure | Gateways |
| `orchestrator` | GPU node operators providing compute | Orchestrators |
| `delegator` | LPT token holders staking + governance | Delegators |
| `community` | Contributors, governance participants, newcomers, everyone else | Community, Home, Resource Hub |

Deterministic precedence ordering. Synonym mapping. Section defaults.

### Self-containment principle

**Source**: site-map.md

Each tab is authored for one primary audience assuming they will NOT visit other tabs. If a gateway operator needs to understand AI selection, that content must exist in the Gateways tab — not just linked to Developers. **Intentional cross-tab duplication is correct and expected.**

### Tab-to-audience mapping

**Source**: 00-NEW-tab-ownership-map.md

| Tab | Owns | Does NOT own |
|---|---|---|
| **Home** | Narrative, value prop, routing, Foundation intro, ecosystem map, evolution, roadmap | Any role-specific task content |
| **About** | Protocol mechanics, actor definitions, tokenomics, governance model, economics, whitepaper reference | Task-oriented content (quickstarts, how-tos) |
| **Solutions** | Platform products (Daydream, Streamplace, Studio, etc.), full Studio docs as legacy anchor | Protocol mechanics, node operation |
| **Developers** | Custom AI + video development, BYOC, integration patterns, SDK/API reference, opportunities/grants | Gateway operation, node operation |
| **Gateways** | Gateway operator concepts, quickstart, setup, operational guides, business model, all 3 gateway types | Application development, orchestrator operation |
| **Orchestrators** | Orchestrator concepts, quickstart, setup, guides, hardware profiles | Gateway setup, application development |
| **Delegators** | LPT definition, delegation mechanics, governance participation, treasury, staking/earning | Protocol architecture, node operation |
| **Community** | Contribution guidelines, events, participation paths, forums, ecosystem participation | Governance mechanics (→ LP Token), protocol governance (→ About), code contribution (→ Developers) |
| **Resource Hub** | Cross-cutting reference: changelog, glossaries, docs guide, per-role reference indexes | Conceptual content, task-oriented content |

---

# PERSONAS — Site-wide model (8 personas by network function)

**Source**: Audience & Persona Mapping & Definitions (Design Specification)

### The core insight

> People self-identify with generic labels: "I'm a developer," "I'm an operator." **But Livepeer's roles don't map cleanly to those labels.** An orchestrator is also a delegate, also a model builder, also a governance voter. A "developer" could mean six different things.

### 8 personas by function

| # | Persona | Primary function | Self-identifies as | Primary tab | Activation moment |
|---|---|---|---|---|---|
| 1 | **Solution Integrator** | Consume services (call API, get results, don't run infra) | "Developer," "founder" | Solutions / Developers | First successful API call returning video/AI result |
| 2 | **Application Developer** | Provide workloads (build pipelines/BYOC that run on network GPUs) | "Developer," "founder," "builder," "AI engineer" | Developers | First working custom pipeline processing jobs |
| 3 | **Gateway Operator** | Route traffic (run gateway middleware between clients and orchestrators) | "Operator," "infra engineer" | Gateways | First job routed through their gateway to orchestrator |
| 4 | **Orchestrator** | Provide compute (run GPU hardware executing jobs) | "Operator," "miner," "node runner" | Orchestrators | First job processed with earnings visible in Explorer |
| 5 | **Delegator** | Provide capital (stake LPT, earn rewards, vote) | "Investor," "token holder," "staker" | Delegators | Active delegation with reward accrual visible |
| 6 | **Protocol Developer / Core Contributor** | Extend the protocol (smart contracts, go-livepeer core, LIPs) | "Protocol dev," "blockchain dev," "contributor" | Developers + About | First merged PR to go-livepeer or deployed improvement |
| 7 | **Community Builder** | Build ecosystem (docs, education, governance, SPE participation) | "Contributor," "community member" | Community | First visible contribution (doc PR, governance vote, SPE proposal) |
| 8 | **Researcher** | Evaluate (architecture, performance, economics for papers/benchmarks/analysis) | "Researcher," "analyst" | About + Resource Hub | Not building — studying |

### Real-world actor to function mapping

**Source**: Design Specification

| Real-world actor | Functions they perform | Tabs they need |
|---|---|---|
| AI startup founder | Consume + Provide workloads + Route traffic | Developers, Gateways |
| Indie app developer | Consume services (that's it) | Solutions or Developers (API only) |
| GPU farm operator | Provide compute + Provide capital | Orchestrators + Delegators |
| Long-time LPT holder | Provide capital + Governance | Delegators |
| Protocol engineer | Extend protocol | Developers + About |
| DePIN researcher | Evaluate | About + Resource Hub |

### Persona research status

**Source**: personas.md (research index)

| Persona | Sourced research exists? | Source |
|---|---|---|
| Gateway Operator | ✅ Yes — 5 archetypes | Discord #local-gateways, GitHub issues, Messari |
| Community | ✅ Yes — 20 JTBDs | community-tab-02 research |
| Developer | ⚠️ Partial — aspirational only | v2/internal/overview/personas.mdx |
| Orchestrator | ❌ No sourced persona file | Phase 1 requires human research |
| Delegator | ❌ No sourced persona file | Phase 1 requires human research |
| Founder | ❌ No sourced persona file | Phase 1 requires human research |
| Researcher | ❌ No sourced persona file | Thin coverage, Foundation targets this group |

---

# JOURNEYS — Site-wide model (8 persona journeys with success gates)

**Source**: usefulness-journeys.json, Personas Journey Alignment

| Journey | Success gate (binary test) | Known gaps |
|---|---|---|
| **Developer (AI)** | Tester follows only docs, sends text-to-image request, receives image | AI Jobs quickstart "coming soon" in some paths |
| **Developer (Video)** | Submit video file, receive transcoded output | Transcoding quickstart "coming soon"; Studio migration guide missing |
| **Gateway Operator** | Zero to running gateway routing first job + on-chain registration | On-chain registration incomplete; no end-to-end walkthrough |
| **Orchestrator** | Zero to registered node processing job with earnings visible | AI setup fragmented; no end-to-end walkthrough stages 3-6 |
| **Delegator** | Zero to active delegation with rewards visible | Guide exists but no interactive walkthrough; exchange/bridge info stale |
| **Newcomer** | Within 5 minutes, explain Livepeer in one sentence AND navigate to correct portal | Get Started sub-pages are placeholders |
| **Community** | Submit first contribution (doc PR, GitHub issue, governance vote) | Contribution guidelines placeholder; no "your first contribution" walkthrough |
| **Platform Builder** | Evaluate → design → prototype → operate at scale | Production operations doesn't exist |

### Cross-journey graduation paths

**Source**: cross-tab-journeys.md (stub), Personas Journey Alignment

- Founder → About → Builder → Developers/Gateways
- Delegator → About (protocol understanding) → LP Token (participation)
- Orchestrator → dual-mode (add gateway operation)
- Platform Builder → Developer → Gateways → About (multi-tab journey)

---

# IA — Site-wide structural model

### 6-position structural pattern (LOCKED)

**Source**: IA Structure & Purpose

| Position | Purpose type | Reader state | Job |
|---|---|---|---|
| 1 | **landing** | Just arrived | Route to right place |
| 2 | **overview** | Orienting, evaluating | Understand what this is, how it works, does it apply |
| 3 | **quickstart** | Ready to try | First success in 15 min |
| 4 | **how_to** | Active, specific task | One specific thing |
| 5 | **guide** | Active, system understanding | How does this work in practice |
| 6 | **reference** | Any stage, on-demand lookup | Exact specs/parameters/answers |

**Positions 1-3 are LINEAR** (first-time, sequential). **Positions 4-6 are ON-DEMAND** (jump from anywhere).

### Per-tab purpose skeletons

**Source**: IA Journey-Derived IA

| Tab | Required purpose types |
|---|---|
| Home | landing, overview |
| About | overview, reference (conceptual, not task-oriented) |
| Solutions | landing, overview (signpost only) |
| Developers | landing, overview, quickstart (×2: AI + Video), how_to, guide, reference — **FULL STACK** |
| Gateways | landing, overview, quickstart, how_to, guide, reference — **FULL STACK** |
| Orchestrators | landing, overview, quickstart, how_to, guide, reference — **FULL STACK** |
| Delegators | landing, overview, quickstart, how_to, reference (no guide needed) |
| Community | landing, overview, how_to, reference (lighter stack) |
| Resource Hub | reference only (no tutorials or concepts) |

### Locked section vocabulary

**Source**: 08a-ia-per-tab.md

Canonical folder names: portal, concepts, quickstart, setup, guides, resources/reference, resources/knowledge-hub.

### Page count target

**Source**: IA Blueprint

**~96 pages total** across site (down from 177 repo-contaminated count). Journey-first design produces ~45% fewer pages than repo-first design.

| Tab | Estimated pages |
|---|---|
| Home | 4 |
| About | 7 |
| Developers | 14 |
| Solutions | ~22 (2 shared + ~5 per platform × 4) |
| Gateways | 15 |
| Orchestrators | 12 |
| Delegators | 10 |
| Community | 6 |
| Resource Hub | 6 |

### Current IA alignment

**Source**: 00-NEW-tab-ownership-map.md

| Tab | Alignment to canonical |
|---|---|
| Orchestrators | ✅ Closest to canonical. Reference template. |
| Gateways | ✅ Close. Minor sub-section reorganisation needed |
| Developers | 🔴 Most problematic. Missing portal, quickstart scattered, no setup section, guides mix types |
| Delegators | ⚠️ Missing proper portal and quickstart |
| About | ⚠️ Non-task tab — custom IA correct |
| Home | ⚠️ Non-task tab — custom IA correct |
| Community | ⚠️ Lighter stack — custom IA correct |
| Solutions | ⚠️ Product-focused — custom IA correct |
| Resource Hub | ⚠️ Reference-only — custom IA correct |

---

# VOICE — Per-audience registers

**Source**: voice-rules.md

| Audience | Register | Key rules |
|---|---|---|
| `gateway` | Infrastructure operator | Peer-to-peer technical, direct/factual, assumes competence, concrete numbers, imperative commands |
| `orchestrator` | Node operator | Operational/numbers-driven, hardware-specific (VRAM, CPU, NVLink), performance-focused, respects investment |
| `developer` | Code-first builder | Code first, minimal prose, peer-level precision, function signatures as primary content, error states in main text |
| `builder` | Platform integrator | Outcome-before-mechanism, API-centric, full request/response, explicit prerequisites |
| `delegator` | LPT holder | Accessible, plain-language decision-support, financial context, actual steps, no CLI commands |

**Banned across all**: effectively, essentially, basically, meaningful, significant, various, obviously, clearly, "This page covers," "it is important to note," "rather than," marketing language adjacent to technical content.

---

# NETWORK STATE CONTEXT

**Source**: MASTER-AUDIENCE-SOURCES-CONTENT-GAP-REPORT.md

Key numbers affecting persona/journey design (March 2026):
- AI fees growing 21x ($7K → $147K/quarter) but 89:1 inflation:fees ratio ($18M staking vs $204K fees)
- LPT price collapsed $6 → $2, market cap ~$110M
- Delegators declining: 3,332 → 2,683
- Developer audience bifurcating: legacy video (Studio API) vs AI-native (ComfyStream, BYOC, Daydream)
- Governance: LIP-107 (emissions brake), LIP-101 (treasury restart), LIP-100 (inflation bounds)
- Orchestrator pain: AI models frequently don't respond — unreliable vs centralised providers
- Delegator motivation eroding: yield-based rewards losing appeal as token price drops

---

# PROMPT/SKILL FRAMEWORK

**Source**: audience-design-v5.md, persona-routing.md

### Execution pipeline

Phase 0 (Terminology Anchoring) → Phase 1 (Persona Research) → Phase 2 (Gap Analysis) → Phase 3 (IA Audit) → Phase 5 (Voice Check) → Phase 6 (Content Writing) → Phase 8a (Section Vocabulary) → Phase 12 (Cross-Tab Consistency)

### Key locked definitions

- 7 pageTypes: navigation, concept, tutorial, guide, instruction, reference, resource
- 7 lifecycleStages: discover, evaluate, setup, build, operate, optimise, troubleshoot
- 15 purpose enums: orient, explain, learn, choose, evaluate, start, build, configure, operate, troubleshoot, verify, integrate, optimise, reference, update

### Persona routing skill

Uses functional identifiers (hardware/LPT/goal), NOT persona names. Majority path is default, described first. Routing appears once near page top. Never routes to non-existent pages.

---

# PIPELINE STATUS BY TAB

| Tab | Phase 1 (Audience Design) | Collation | Check B | IA Locked | Content Written | Blocking Decision |
|---|---|---|---|---|---|---|
| **Gateways** | ✅ 3 runs | ✅ | ✅ Approved | ✅ LOCKED | ✅ 13/13 pages (9,482 words) | NaaP/BYOC RESOLVED |
| **Orchestrators** | ✅ 4 runs (most) | ✅ | ✅ Approved | ❌ Human review pending | ❌ | LIP-92 BLOCKING |
| **Developers** | ✅ 2 runs | ✅ | ❌ | ❌ | ❌ | S6 split BLOCKING |
| **About** | ✅ 3 runs | ✅ | ❌ | ❌ | ❌ | Audience token BLOCKING |
| **Delegators** | ✅ 3 runs | ✅ | ❌ | ❌ | ❌ | Rewards placement BLOCKING |
| **Home** | ⚠️ 1 run | ❌ | ❌ | ❌ | ❌ | — |
| **Community** | ⚠️ 2 runs | ❌ EMPTY | ❌ | ❌ | ❌ | — |
| **Solutions** | ⚠️ 1 run | ❌ EMPTY | ❌ | ❌ | ❌ | — |
| **Resource Hub** | ⚠️ 1 run | ❌ EMPTY | ❌ | ❌ | ❌ | — |
