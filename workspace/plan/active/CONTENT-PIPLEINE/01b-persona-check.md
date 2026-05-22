# 01b - Persona Check: Orchestrators Tab

**Date**: 2026-03-23
**Source**: orchestrators-research-pack.md cross-referenced against canonical IA personas

---

## IA Personas (canonical)

1. Independent GPU operator -- choosing a path
2. AI inference specialist -- adding Livepeer as demand channel
3. Capital-constrained operator -- solo vs pool decision
4. Running operator -- returning to configure/optimise/troubleshoot
5. Delegator-turned-operator -- evaluating hardware operation

---

## Research Pack Content Topics Mapped to Personas

| Content topic/pattern | Source | Maps to persona | Notes |
|------------------------|--------|-----------------|-------|
| V1 get-started (full step-by-step node setup) | v1 guides | Persona 1 (Independent GPU operator) | Core setup flow |
| V1 install-go-livepeer (multi-platform binary install) | v1 guides | Persona 1, 4 | Platform-specific install details |
| V1 connect-to-arbitrum (RPC setup) | v1 guides | Persona 1 | Prerequisites |
| V1 configure-reward-calling | v1 guides | Persona 4 (Running operator) | Operational config |
| V1 set-session-limits (maxSessions, benchmarking) | v1 guides | Persona 4 | Optimisation |
| V1 set-pricing (wei/pixel, fiat pricing) | v1 guides | Persona 1, 4 | Configuration and tuning |
| V1 benchmark-transcoding (livepeer_bench) | v1 guides | Persona 1, 4 | Hardware assessment |
| V1 o-t-split (orchestrator-transcoder separation) | v1 guides | Persona 1 (advanced), 4 | Scale architecture |
| V1 dual-mine (ethash + transcoding) | v1 guides | OBSOLETE | ETH moved to PoS; no persona served |
| V1 migrate-to-arbitrum | v1 guides | OBSOLETE | Migration completed Feb 2022 |
| V1 gateway-introspection (Loki API) | v1 guides | Persona 4 | Advanced diagnostics |
| V1 troubleshoot | v1 guides | Persona 4 | Return-visit diagnostics |
| V1 vote on proposals | v1 guides | Persona 4 | Governance participation |
| V2 portal/navigator | v2 entry | Persona 1, 3 | Path selection |
| V2 concepts (role, capabilities, architecture, incentive model) | v2 concepts | Persona 1, 2, 5 | Evaluation content |
| V2 quickstart (smoke tests) | v2 quickstart | Persona 1 | Hardware verification |
| V2 setup flow (install, configure, connect, test) | v2 setup | Persona 1 | Core setup |
| V2 operator-considerations (rationale, business case, impact, requirements) | v2 guides | Persona 1, 5 | Go/no-go evaluation |
| V2 deployment-details (setup options, pool, siphon, O-T, dual mode) | v2 guides | Persona 1, 3 | Path-specific setup |
| V2 AI workloads (9 pages: diffusion, LLM, realtime, model hosting, etc.) | v2 guides | Persona 2 | AI-specific configuration |
| V2 staking-and-rewards (earning model, reward mechanics, delegate ops, governance) | v2 guides | Persona 1, 4, 5 | Economics and operations |
| V2 payments (PM tickets, receipts) | v2 guides | Persona 1, 4 | Payment mechanics |
| V2 config-and-optimisation (pricing, capacity, AI models, reward tuning) | v2 guides | Persona 4 | Optimisation |
| V2 monitoring (troubleshooting, metrics, explorer, toolbox) | v2 guides | Persona 4 | Operations |
| V2 advanced-operations (gateway relationships, pool operators, scale) | v2 guides | Persona 4 (advanced) | Scale and advanced |
| V2 tutorials (BYOC, zero-to-reward, AI quickstart, add-AI, full pipeline, realtime) | v2 tutorials | Persona 1, 2 | Guided paths |
| V2 resources (FAQ, glossary, community guides, pools, GPU support, CLI flags, etc.) | v2 resources | Persona 3, 4 | Reference |
| Pool operator content (running a pool, accepting workers) | v2 advanced-ops | **Not directly a persona** | See note below |
| Siphon setup (lightweight transcoder routing) | v2 deployment | Persona 3 (variant) | Capital-constrained alternative |
| Commercial/business case content | v2 operator-considerations | Persona 1 (commercial variant) | See note below |
| Orchestrator profiles/showcase | v2 roadmap-and-funding | Cross-persona (community) | Not persona-specific |
| Funding and support (grants, SPE) | v2 roadmap-and-funding | Cross-persona | Not persona-specific |

---

## Gaps and Flags

### Pool operator persona

The research pack and existing v2 content include a dedicated `pool-operators.mdx` page for operators who *run* a pool (accept external workers, manage stake, distribute rewards). This is materially different from Persona 3 (capital-constrained operator *joining* a pool). A pool operator is an advanced variant of Persona 1 (independent GPU operator) who has scaled beyond solo operation. The canonical IA handles this within S5 (node setup) and the advanced operations cross-tab route. **No new persona needed** -- the pool operator is served as an advanced path within Persona 1's journey, with S6 handling the pool *node* side and advanced-operations handling the pool *operator* side.

### Commercial operator

The business-case.mdx page serves a commercially-oriented variant of Persona 1 who earns primarily from service fees rather than inflation. This is not a distinct persona -- it is a depth variant of the independent GPU operator. **No new persona needed.**

### BYOC developer

The BYOC tutorials (byoc-cpu-smoke-test, byoc-cpu-tutorial) serve a developer building custom AI containers. This crosses into the Developers tab audience. The canonical IA flags BYOC as a design question within S8 (AI pipelines). The audience is partially served by cross-tab routing to Developers. **No new persona needed**, but S8 should include a BYOC callout that routes to the Developers tab for custom container development.

### Siphon operator

Siphon setup content serves operators with GPUs in locations that cannot run a full orchestrator (residential connections, shared hosting). This is a variant of Persona 3 (capital-constrained) with a different constraint (network access rather than LPT). The canonical IA handles this within the deployment-details content. **No new persona needed.**

---

## Result

**No new personas needed.** All content topics in the research pack map to one of the 5 canonical personas or to cross-persona reference content. The pool operator, commercial operator, BYOC developer, and siphon operator patterns are all served as variants within existing personas or via cross-tab routing.
