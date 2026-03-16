# Orchestrator Tab Review v2 (incorporating user feedback)

## Proposed Tab Structure

Based on the gateway model, user annotations, and journey analysis, the recommended structure is:

```
Orchestrators Tab
├── Start Here
│   ├── portal (landing hero)
│   └── navigator (decision tree)
│       SCOPE: setup type (pool/solo/enterprise), workload type (video/AI/dual),
│       "how do I earn?" section (crucial Q for ALL personas), earnings preview
│
├── Concepts (4 pages)
│   ├── role - What IS an Orchestrator?
│   ├── capabilities - What can it DO?
│   ├── architecture - How does it WORK?
│   └── incentive-model (rename from rcs-incentives) - Why should I CARE?
│
├── Quickstart (3 pages - matching gateway pattern)
│   ├── orchestrator-quickstart (repurposed video-transcoding → unified GPU setup for video + AI)
│   ├── tutorial (repurposed from gateway tutorials or new orchestrator-specific)
│   └── ai-prompt-setup (experimental AI prompt for adding GPU to Livepeer)
│   NOTE: Remove current "guide" page (it's a redundant overview)
│
├── Setup (7 pages - connect+activate merged)
│   ├── guide (overview)
│   ├── rcs-requirements (checklist)
│   ├── rs-install (install go-livepeer)
│   ├── r-configure (configuration)
│   ├── connect-and-activate (MERGED: Arbitrum connection + on-chain activation)
│   ├── test (verification)
│   └── r-monitor (monitoring basics)
│
├── Guides
│   ├── Operator Considerations (refocused)
│   │   ├── value-proposition (rename feasibility-economics → focus on earnings potential vs costs)
│   │   ├── business-case (NEW - for orchestrators serving application workloads,
│   │   │   customer relationships, commercial orchestrator mental model)
│   │   └── commercial-orchestrators (NEW - who serves Daydream, products, etc.)
│   │   NOTE: benchmarking and session-limits → merge into deployment-details
│   │
│   ├── Deployment Details (rename from Deployment Options)
│   │   ├── setup-options (rename find-your-path, absorb setup-navigator + siphon content)
│   │   ├── requirements (MOVE hardware-reference here + add non-technical requirements)
│   │   └── join-a-pool
│   │   NOTE: benchmarking/session-limits → either here or monitoring (decide during section review)
│   │
│   ├── Workloads & AI (move UP from position 4 → 3)
│   │   ├── job-types (overview of all workload types)
│   │   ├── video-transcoding
│   │   ├── ai-workloads-guide
│   │   ├── batch-ai-setup
│   │   ├── realtime-ai-setup
│   │   └── model-vram-reference
│   │
│   ├── Staking & Rewards (move DOWN from position 3 → 4)
│   │   ├── earnings (distinguish video vs AI earning models)
│   │   ├── rewards-and-fees (include reward calling config from v1)
│   │   ├── attracting-delegates
│   │   └── governance
│   │   NOTE: payments → moves to new Payments & Pricing section
│   │
│   ├── Payments & Pricing (NEW section - currently empty dir)
│   │   ├── payment-flow (how orchestrators receive PM tickets, redemption, settlement)
│   │   ├── pricing-strategy (how to set -pricePerUnit, -pricePerGateway,
│   │   │   autoAdjustPrice, per-capability AI pricing, competitive positioning)
│   │   └── payments (MOVE from staking-and-rewards, expand)
│   │
│   ├── Monitoring & Tools (keep)
│   │   ├── tools
│   │   ├── explorer-guide
│   │   ├── metrics-monitoring
│   │   └── troubleshooting
│   │
│   ├── Advanced Operations (keep + absorb guide.mdx)
│   │   ├── guide (MOVED from guides/ root - for review)
│   │   ├── orchestrator-transcoder-setup (O-T split)
│   │   ├── run-a-pool
│   │   ├── gateways-orchestrators (rename: "Working with Gateways")
│   │   └── large-scale-operations (fleet/enterprise)
│   │
│   ├── Roadmap & Funding (NEW section - currently empty dir)
│   │   ├── operator-support (SPE grants, AI Video Startup Programme, community resources)
│   │   └── orchestrator-showcase (who's operating, what they've built)
│   │
│   └── Tutorials (SKIP for now - gateway tutorials not orchestrator-focused)
│       NOTE: Orchestrator operators want on-chain setup + rewards, not BYOC CPU tests.
│       Revisit when orchestrator-specific tutorial content is justified.
│
└── Resources
    ├── faq
    ├── glossary (MUST BUILD - currently 0 bytes)
    ├── community-guides
    ├── community-pools
    └── Technical Reference
        ├── cli-flags
        ├── contract-addresses
        ├── gpu-support
        ├── arbitrum-rpc
        └── arbitrum-exchanges
```

---

## Key Changes from v1 Review

### User-annotated changes incorporated

1. **Navigator scope expanded:** Not just "pool vs solo" but also operational mode, workload type, AND earnings preview ("how do I earn?" is the crucial question for every persona)

2. **Incentives concept page renamed:** `rcs-incentives` → `incentive-model` (clearer, less jargon)

3. **Quickstart restructured to 3 pages** (matching gateway pattern):
   - Remove the redundant "guide" overview
   - Repurpose `video-transcoding` as a unified orchestrator quickstart covering both video AND AI basic GPU setup
   - Keep tutorial (review whether gateway tutorials work or need orchestrator-specific version)
   - Keep AI prompt setup as experimental

4. **Operator Considerations refocused:**
   - `feasibility-economics` → `value-proposition` (earnings potential vs costs, not dry feasibility)
   - `hardware-reference` → MOVE to deployment-details as `requirements` (technical + non-technical)
   - `benchmarking` and `session-limits` → fold into deployment-details (they're operational details, not "should I?" considerations)
   - **NEW: `business-case`** - for orchestrators serving application workloads. This is fundamentally different from earning inflation rewards. Requires customer relationships, SLAs, pricing strategy, different mental model.
   - **NEW: `commercial-orchestrators`** - who serves Daydream, Livepeer Studio, other products? What does it look like to be a commercial orchestrator?

5. **Deployment Options → Deployment Details:**
   - `setup-navigator` removed (content merges to root navigator)
   - `find-your-path` → `setup-options`
   - `siphon-setup` - keep as separate page or merge into setup-options as accordion
   - `requirements` moved here from operator-considerations

6. **Section reorder:**
   - Workloads & AI moves UP (position 4→3): understand what you run before how you earn
   - Staking & Rewards moves DOWN (position 3→4)
   - NEW Payments & Pricing section after Staking & Rewards
   - NEW Roadmap & Funding section as final guide section

7. **Payments & Pricing populated:**
   - `payment-flow` - how orchestrators receive and redeem PM tickets
   - `pricing-strategy` - competitive pricing configuration (from v1 set-pricing.mdx)
   - `payments` - moved from staking-and-rewards, expanded

---

## Persona Journey Gaps Addressed

### Persona A (Solo Miner) - "Can I earn from my GPU?"
- **Before:** Portal → Navigator → Join Pool or Setup → ... → Monitor
- **After:** Portal → Navigator (with earnings preview) → value-proposition → Setup → Quickstart → earnings
- **Gap filled:** Navigator now includes "how to earn" routing. value-proposition replaces dry feasibility with earnings focus.

### Persona B (Pool Worker) - "Simplest path to earnings?"
- **Before:** Portal → Navigator → Join Pool → Done
- **After:** Same path but Navigator has clearer earnings preview so the decision to join a pool is better informed
- **Gap filled:** community-pools in Resources should show which pools are active and how to evaluate them

### Persona C (Pro Operator) - "How do I add AI to my setup?"
- **Before:** Good coverage via AI workloads section
- **After:** Same + business-case page helps operators thinking about serving commercial AI workloads
- **Gap filled:** Commercial orchestrator framing, AI-specific earnings in earnings page

### Persona D (Enterprise) - "What's the business case at scale?"
- **Before:** Only large-scale-operations + feasibility-economics
- **After:** business-case + commercial-orchestrators + pricing-strategy + payment-flow + large-scale-operations
- **Gap filled:** Full commercial orchestrator journey from business case through pricing to fleet operations

### Persona E (AI Native) - "How does Livepeer AI work?"
- **Before:** Strong setup coverage, weak on earnings
- **After:** Same setup + earnings page distinguishes AI vs video earnings + pricing-strategy covers AI-specific pricing
- **Gap filled:** AI earnings model clearly differentiated

---

## Critical Content to Create

### Must-write pages (Priority 1)

| Page | Section | Source material | Effort |
|------|---------|----------------|--------|
| `pricing-strategy.mdx` | Payments & Pricing | v1 set-pricing.mdx + gateway pricing-strategy as mirror | Medium |
| `payment-flow.mdx` | Payments & Pricing | gateway payment-guide as mirror (orchestrator perspective) | Medium |
| `glossary.mdx` | Resources | Gateway glossary as template + orchestrator-specific terms | Medium |
| `value-proposition.mdx` | Operator Considerations | Refactor feasibility-economics.mdx | Small |
| `business-case.mdx` | Operator Considerations | New content - commercial orchestrator model | Medium |

### Must-move/rename pages (Priority 2)

| Action | From | To |
|--------|------|-----|
| Rename | `feasibility-economics.mdx` | `value-proposition.mdx` |
| Rename | `rcs-incentives.mdx` | `incentive-model.mdx` |
| Move | `hardware-reference.mdx` | `deployment-details/requirements.mdx` |
| Move | `payments.mdx` | `payments-and-pricing/payments.mdx` (expand) |
| Remove | `guides/deployment-options/setup-navigator.mdx` | Merge content into root navigator |
| Rename | `find-your-path.mdx` | `setup-options.mdx` (absorb siphon content) |
| Merge | `sc-connect.mdx` + `activate.mdx` | `connect-and-activate.mdx` |
| Move | `guides/guide.mdx` | `guides/advanced-operations/guide.mdx` (for review) |
| Decide | `benchmarking.mdx` + `session-limits.mdx` | deployment-details OR monitoring (during section review) |

### Should-write pages (Priority 3)

| Page | Section | Notes |
|------|---------|-------|
| `commercial-orchestrators.mdx` | Operator Considerations | CONDITIONAL: only if SME info available on who serves Daydream etc. Drop if not. |
| `operator-support.mdx` | Roadmap & Funding | SPE grants, programmes |
| `orchestrator-showcase.mdx` | Roadmap & Funding | Active operators, what they've built |
| Reward calling content | Fold into rewards-and-fees.mdx | From v1 configure-reward-calling.mdx |

---

## Terminology Framework

### Orchestrator Deployment Axes

| Axis | Options | What it decides |
|------|---------|----------------|
| **Workload type** | Video / AI / Dual | What jobs the Orchestrator accepts |
| **Setup type** | Solo operator / Pool worker / Pool operator / Split (O+T) / Siphon | How the infrastructure is organised |
| **Scale** | Single GPU / Multi-GPU / Fleet | Hardware scope and operational complexity |
| **Network role** | Active set / Candidate / Inactive | Protocol participation level |

### Key Terms for Glossary

**Protocol:** Active set, round, reward call, reward cut, fee cut, stake, self-stake, delegated stake, activation, deactivation

**Operational:** Orchestrator, transcoder, O-T split, siphon, session, segment, capability, pipeline, BYOC, AI worker, AI runner, warm model, cold model, pool, pool operator

**Economic:** PM ticket (receiver side), ticket redemption, fee pool, reward pool, pricePerUnit, pricePerGateway, autoAdjustPrice, earnings, ROI, inflation rewards, service fees

---

## Cross-Tab Bridge Content Needed

### Orchestrator → Gateway bridges

| Topic | Orchestrator page | Gateway page | Bridge needed |
|-------|------------------|-------------|---------------|
| Pricing | pricing-strategy (sell side) | pricing-strategy (buy side) | "How gateways evaluate your price" callout |
| Payment flow | payment-flow (receive tickets) | payment-guide (send tickets) | "The other side" cross-ref |
| AI routing | ai-workloads-guide | ai-pipelines | "How gateways find your capabilities" |
| BYOC | batch-ai-setup / realtime-ai-setup | byoc-pipelines | "Container requirements from gateway perspective" |
| Selection | (needed) | orchestrator-selection | "How to be selected: what gateways look for" |

### Orchestrator → Delegator bridges

| Topic | Orchestrator page | Delegator page | Bridge needed |
|-------|------------------|---------------|---------------|
| Delegation | attracting-delegates | delegation guide | Both sides of relationship |
| Earnings split | earnings | delegator rewards | How rewards flow |
| Governance | governance | voting guide | Shared mechanics |

---

## Section Order Rationale (Final)

```
1. Operator Considerations → "Should I operate?"
2. Deployment Details     → "What do I need and which path?"
3. Workloads & AI         → "What jobs do I run?"
4. Staking & Rewards      → "How do I earn?"
5. Payments & Pricing     → "How do I get paid and set prices?"
6. Monitoring & Tools     → "How do I keep it running?"
7. Advanced Operations    → "How do I optimise and scale?"
8. Roadmap & Funding      → "What support and funding exists?"
9. Tutorials              → "Show me"
```

This mirrors the gateway guide flow:
```
Gateway:  Considerations → Deployment → Pipelines → Payments → Monitoring → Advanced → Funding
Orch:     Considerations → Deployment → Workloads → Staking → Payments → Monitoring → Advanced → Funding
```

The only structural difference is that orchestrators have a **Staking & Rewards** section (no gateway equivalent since gateways don't stake) inserted between Workloads and Payments. This is correct because staking is a prerequisite for understanding orchestrator payments.

---

## Resolved Questions

1. **Connect vs Activate in Setup:** **MERGE.** Combine into a single page covering Arbitrum connection + on-chain activation as a continuous flow.

2. **Benchmarking and Session Limits:** **Move to deployment-details OR monitoring.** These are operational capacity concerns, not "should I?" considerations. They may fit better as monitoring items (capacity planning under monitoring-and-tooling) or as deployment-details subsections. Decide during section review - either location is defensible.

3. **Siphon setup:** **Merge into setup-options.** Not as an accordion but as a section within the setup-options page. Keep the technical detail but don't give it a standalone nav entry unless the content is substantially different from a standard split setup.

4. **Tutorials:** **Skip for now.** The BYOC CPU tutorial is gateway-focused (operators want rewards via on-chain setup and/or business relationships, not running CPU test jobs). Orchestrator operators care about on-chain activation and earning, which is a different framing. Do not plan orchestrator-specific tutorials at this stage.

5. **Commercial orchestrators:** **Conditional.** If sufficient public information exists about who serves Daydream, Livepeer Studio, etc., write the page. If not, drop it from the plan and revisit when SME input is available.

6. **guide.mdx at guides/ root:** **Move to advanced-operations** for review later. It's a planning/overview page that should not sit at the guides root.
