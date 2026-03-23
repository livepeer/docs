# Orchestrator Tab: Journey & Persona Review

## Executive Summary

The v2 Orchestrator tab has a solid structural foundation with 5 well-defined personas, 4 concept pages, 8 setup pages, 7 guide sub-sections (32 guide pages), and a resources section. However, there are significant journey gaps compared to the refined Gateway tab: empty glossary, empty payments-and-pricing and roadmap-and-funding sections, 7 draft-status pages, missing pricing configuration guidance, and incomplete cross-tab references. The content is substantially more complete than typical v2 drafts but needs journey alignment and gap-filling.

---

## 1. Current Tab Structure

```
Orchestrators Tab
├── Start Here
│   ├── portal (landing hero)
│   └── navigator (decision tree: setup type: pool vs solo vs enterprise, operational mode (off-chain/on-chain), workloads, maybe rewards section (how to get - crucial Q for all personas))
│
├── Concepts (4 pages - all status: current)
│   ├── role - What IS an orchestrator?
│   ├── capabilities - What can it DO?
│   ├── architecture - How does it WORK?
│   └── rcs-incentives - Why should I CARE? (renamed to Incentive-Model)
│
├── Quickstart (2 pages -> 3 (matching gateways))
│   ├── guide (REMOVE)
│   └── video-transcoding (REPURPOSE & RENAME 'Orchestrator Quickstart' - BASIC GPU SETUP PATH FOR VIDEO & AI GOES HERE)
|   └── Tutorial (REVIEW - repurposed from gateways, may need alternate)
|   └── AI Prompt Setup - Experimental AI Prompt for adding a GPU to Livepeer
│
├── Setup (8 pages)
│   ├── guide (overview)
│   ├── rcs-requirements (checklist)
│   ├── rs-install (install go-livepeer)
│   ├── r-configure (configuration)
│   ├── sc-connect (Arbitrum connection) [connect & activate similar?]
│   ├── activate (on-chain activation)
│   ├── test (verification)
│   └── r-monitor (monitoring basics)
│
├── Guides (7 sub-sections, 32 pages)
│   ├── Operator Considerations (4)
│   │   ├── feasibility-economics (renamed to value-proposition -> focused on economics / earnings potential vs overheads & maintenance time)
│   │   ├── hardware-reference (rename to requirements & MOVE to deployment-details - all operational & node modes -> technical & non-technical)
│   │   ├── benchmarking (weird?? -purpose? )
│   │   └── session-limits (?? weird? - purpose? )
│   │   └── MISSING ? Business-case (for orchestrators that serve application workloads - this is very different to just earning inflation rewards - requires customer relationships and a different mental model)
│   │   └── MISSING ? Commercial Orchestrators (serving Daydream, other products?)
│   │
│   ├── Deployment Options (4) -> Rename to Deployment Details
│   │   ├── setup-navigator (remove / merge to root/navigator)
│   │   ├── requirements (from operator considerations)
│   │   ├── find-your-path (rename to setup-options)
│   │   ├── join-a-pool
│   │   └── siphon-setup (specifics - mergeable to setup-options?)
│   ├── Staking & Rewards (5)
│   │   ├── earnings
│   │   ├── rewards-and-fees
│   │   ├── attracting-delegates
│   │   ├── payments
│   │   └── governance
│   ├── Workloads & AI (6)
│   │   ├── job-types
│   │   ├── video-transcoding
│   │   ├── ai-workloads-guide
│   │   ├── batch-ai-setup
│   │   ├── realtime-ai-setup
│   │   └── model-vram-reference
│   ├── Monitoring & Tools (4)
│   │   ├── tools
│   │   ├── explorer-guide
│   │   ├── metrics-monitoring
│   │   └── troubleshooting
│   ├── Advanced Operations (4)
│   │   ├── run-a-pool
│   │   ├── gateways-orchestrators
│   │   ├── large-scale-operations
│   │   └── orchestrator-transcoder-setup
│   └── Tutorials (3 imported + 1 native)
│
└── Resources
    ├── faq
    ├── community-guides
    ├── community-pools
    ├── glossary (EMPTY - 0 bytes)
    └── Technical Reference (8 pages, some x-prefixed)
```

---

## 2. Persona Mapping

### Defined Personas (from personas-and-pages.mdx)

| Persona | Name | Core Question | Current Coverage |
|---------|------|--------------|-----------------|
| A | The Solo GPU Operator ("The Miner") | "Can I earn from my GPU?" | Good - setup, quickstart, join-a-pool |
| B | The Pool Worker ("The Easy Earner") | "Simplest path to earnings?" | Good - join-a-pool, siphon-setup |
| C | The Infrastructure Engineer ("The Pro Operator") | "How do I add AI to my setup?" | Good - AI workloads section, batch/realtime setup |
| D | The Enterprise ("The Business") | "What's the business case at scale?" | Partial - large-scale-operations exists but feasibility-economics is the main page. Missing cost modelling depth. |
| E | The AI Native ("The AI Native") | "How does Livepeer AI work?" | Good - AI workloads guide, batch/realtime setup, BYOC tutorial |

### Persona Journey Assessment

**Persona A (Solo Miner):**
- Portal → Navigator → Join a Pool or Setup Guide → Install → Configure → Activate → Test → Monitor
- **Gap:** No clear "earnings estimator" or "what will I earn?" page. feasibility-economics covers this partially but from an evaluation perspective, not a calculator/planning perspective.

**Persona B (Pool Worker):**
- Portal → Navigator → Join a Pool → Done (simple path)
- **Gap:** join-a-pool exists but community-pools (resources) may need updating. No guidance on evaluating pool operators.

**Persona C (Pro Operator):**
- Portal → Navigator → Setup Guide → Full setup path → AI Workloads → Batch/Realtime Setup
- **Coverage is strong.** The AI workloads section is well-structured.

**Persona D (Enterprise):**
- Portal → Navigator → large-scale-operations → orchestrator-transcoder-setup
- **Gap:** No pricing strategy guide (how to set competitive prices). No payments deep-dive. No cost/revenue modelling. The `payments.mdx` in staking-and-rewards is thin compared to the Gateway pricing-strategy page.

**Persona E (AI Native):**
- Portal → AI workloads guide → batch-ai-setup or realtime-ai-setup
- **Coverage is strong** for setup. Missing: how AI earnings work differently from video earnings.

---

## 3. Journey Completeness Assessment

### What's Complete

1. **Concept pages (4)** - Role, Capabilities, Architecture, Incentives. All status: current. Good coverage of the 4-page concepts pattern.
2. **Setup path (8 pages)** - Requirements → Install → Configure → Connect → Activate → Test → Monitor. Linear, logical.
3. **Workloads & AI section (6 pages)** - Job types, video transcoding, AI overview, batch setup, realtime setup, VRAM reference. Strong.
4. **Staking & Rewards section (5 pages)** - Earnings, rewards-and-fees, attracting-delegates, payments, governance. Covers the staking lifecycle.
5. **Deployment Options (4 pages)** - Pool, solo, siphon, path-finder. Good persona routing.
6. **Monitoring & Tools (4 pages)** - Tools, Explorer, Prometheus, troubleshooting. Parallel to gateway monitoring section.

### What's Missing or Incomplete

#### Critical Gaps

**1. Pricing Configuration Guide - MISSING**
The v1 `set-pricing.mdx` covers Wei per pixel pricing, overhead adjustment, and competitive positioning. The v2 tab has no equivalent. `payments.mdx` in staking-and-rewards covers payment mechanics but NOT how to set prices competitively. This is a critical gap for Personas C, D, and E.

**Recommendation:** Create `guides/staking-and-rewards/pricing-strategy.mdx` or expand `payments.mdx` to cover pricing configuration (analogous to gateway `pricing-strategy.mdx`).

**2. Payments & Pricing Section - EMPTY**
The `guides/payments-and-pricing/` directory exists but contains no files. The gateway tab has a full 5-page payments section (payment-guide, funding-guide, pricing-strategy, remote-signers, clearinghouse-guide). The orchestrator equivalent should cover:
- How orchestrators receive payments (PM tickets, redemption)
- How to set pricing (`-pricePerUnit`, `-pricePerGateway`, `autoAdjustPrice`)
- Deposit/reserve mechanics from the orchestrator perspective
- On-chain payment settlement

**Recommendation:** Either populate this section or merge its content into staking-and-rewards. The gateway model has 5 pages; orchestrators need at minimum a pricing guide and a payment flow explainer.

**3. Roadmap & Funding Section - EMPTY**
The `guides/roadmap-and-funding/` directory exists but contains no files. The gateway tab has operator-support, NaaP, SPE, and showcase pages. Orchestrators should have:
- SPE/grant opportunities for orchestrator operators
- AI compute opportunity framing
- Community ecosystem from the orchestrator perspective

**Recommendation:** Add at minimum an operator-support page covering SPE grants and AI Video Startup Programme from the orchestrator perspective.

**4. Glossary - EMPTY (0 bytes)**
The gateway glossary defines 9 key terms with the three-axis deployment model (operational mode, setup type, node type). The orchestrator glossary is a 0-byte file. Orchestrators need terminology definitions for:
- Orchestrator vs Transcoder (and when they split)
- Reward cut / Fee cut
- Active set / Active orchestrator
- Stake / Self-stake / Delegated stake
- Rounds / Reward rounds
- Session / Segment
- PM tickets (from the receiver perspective)
- AI Worker / AI Runner
- Pipeline / Capability
- BYOC container
- Pool / Pool operator
- Siphon

**Recommendation:** Build an orchestrator glossary analogous to the gateway glossary, with orchestrator-specific deployment axes.

**5. Reward Calling Configuration - MISSING**
The v1 `configure-reward-calling.mdx` covers automatic vs manual reward calling, gas cost considerations, and the `-reward` flag. No v2 equivalent exists. This is operationally important - misconfigured reward calling wastes gas.

**Recommendation:** Add to `staking-and-rewards/rewards-and-fees.mdx` or create a separate page.

#### Secondary Gaps

**6. Migration Guides - MISSING**
v1 has `migrate-from-contract-wallet.mdx` and `migrate-to-arbitrum.mdx`. These may still be needed for operators migrating from L1 or contract wallets. If migration is complete, these can be archived. If still relevant, they need v2 equivalents.

**7. Dual Mining - DEPRECATED but undocumented**
v1 `dual-mine.mdx` covers running crypto mining alongside transcoding. This is largely obsolete (ETH is PoS) but AI workloads create a new "dual use" pattern. The concept of GPU sharing between Livepeer and other workloads is relevant for Persona A and D.

**8. Gateway Introspection - MISSING**
v1 `gateway-introspection.mdx` covers the Loki-based log aggregation API. No v2 equivalent. This is useful for orchestrators debugging gateway interactions.

**9. 7 Pages in Draft Status**
Seven pages across the tab have `status: draft`. These need review and promotion to `current` or removal from nav.

---

## 4. Duplication Assessment

### Within the Orchestrator Tab

1. **Deployment Options duplication:** `setup-navigator.mdx` and `find-your-path.mdx` appear to serve similar routing purposes. Both route personas to setup paths. May be consolidatable.

2. **Tutorials duplication:** The tutorials section has `imported-tutorial-1/2/3` files that are copies of the gateway tutorials. These should either be shared snippets or clearly differentiated as orchestrator-perspective tutorials.

3. **guide.mdx at guides/ root:** This is titled "Advanced Operations Guide" but sits outside the advanced-operations/ subdirectory. Potentially confusing.

### Cross-Tab Duplication

4. **Tutorials are gateway tutorials imported wholesale.** The BYOC and transcoding tutorials show gateway+orchestrator combined setups. They're correctly shared but the orchestrator tab should frame them from the orchestrator perspective ("this is how your orchestrator receives and processes these jobs").

5. **Contract addresses, Arbitrum RPC, and Arbitrum exchanges** pages exist in BOTH the gateway and orchestrator resources sections. These should be shared snippets or a single source of truth.

---

## 5. Cross-Tab References Needed (-> AS WELL AS BRIDGING CONTENT)

### Orchestrator → Gateway

| From (Orchestrator) | To (Gateway) | Why |
|---------------------|-------------|-----|
| gateways-orchestrators.mdx | Gateway Architecture | How gateways select and route to orchestrators |
| payments.mdx | Payment Guide | PM ticket mechanics from both sides |
| ai-workloads-guide.mdx | AI Pipelines | How gateways route AI jobs to orchestrators |
| pricing (needed) | Pricing Strategy | Pricing from both buyer and seller perspectives |

### Orchestrator → Delegator

| From (Orchestrator) | To (Delegator) | Why |
|---------------------|---------------|-----|
| attracting-delegates.mdx | Delegation Guide | Both sides of the delegation relationship |
| earnings.mdx | Delegator Rewards | How earnings split between orchestrator and delegators |
| governance.mdx | Voting Guide | Shared governance mechanics |

### Gateway → Orchestrator

| From (Gateway) | To (Orchestrator) | Why |
|----------------|------------------|-----|
| Orchestrator Selection | Capabilities, Pricing | How gateways evaluate orchestrators |
| BYOC Pipelines | BYOC from orchestrator perspective | Both sides of BYOC routing |
| Pipeline Configuration | Job Types | What orchestrators actually process |

---

## 6. Terminology Framework Needed

### Orchestrator Deployment Axes (analogous to Gateway's 3 axes)

The gateway glossary defines: Operational Mode (on-chain/off-chain), Setup Type (go-livepeer/SDK/GWID/Hosted), Node Type (Video/AI/Dual).

Orchestrators need an equivalent framework:

| Axis | Options | What it decides |
|------|---------|----------------|
| **Workload type** | Video / AI / Dual | What jobs the orchestrator accepts |
| **Setup type** | Solo operator / Pool worker / Pool operator / Split (O+T) | How the infrastructure is organised |
| **Scale** | Single GPU / Multi-GPU / Fleet | Hardware scope and operational complexity |
| **Network role** | Active set member / Candidate / Inactive | Protocol participation level |

### Key Terms to Define

**Protocol terms:** Active set, round, reward call, stake, self-stake, delegated stake, reward cut, fee cut, activation, deactivation, slashing (if applicable)

**Operational terms:** Orchestrator, transcoder, O-T split, session, segment, capability, pipeline, BYOC, AI worker, AI runner, warm model, cold model

**Economic terms:** PM ticket (receiver side), ticket redemption, fee pool, reward pool, pricing (pricePerUnit, pricePerGateway, autoAdjustPrice), earnings, ROI

---

## 7. Journey Order Assessment

### Current Guide Section Order

1. Operator Considerations (feasibility, hardware, benchmarking, sessions)
2. Deployment Options (path finding, join pool, siphon)
3. Staking & Rewards (earnings, rewards, delegates, payments, governance)
4. Workloads & AI (job types, video, AI batch, AI realtime, VRAM)
5. Monitoring & Tools (tools, explorer, metrics, troubleshooting)
6. Advanced Operations (pools, gateway relations, fleet, O-T split)
7. Tutorials

### Recommended Order (following Gateway pattern)

1. **Operator Considerations** - "Should I?" (keep)
2. **Deployment Options** - "Which path?" (keep)
3. **Workloads & AI** - "What do I run?" (move up from 4→3)
4. **Staking & Rewards** - "How do I earn?" (move from 3→4)
5. **Payments & Pricing** - "How do I get paid and set prices?" (NEW - currently empty)
6. **Monitoring & Tools** - "How do I monitor?" (keep)
7. **Advanced Operations** - "How do I optimise?" (keep)
8. **Roadmap & Funding** - "What's next?" (NEW - currently empty)
9. **Tutorials** - "Show me" (keep)

**Rationale:** Workloads should come before staking/rewards because the operator needs to understand WHAT they're running before understanding HOW they earn from it. Payments & Pricing is a critical gap that should sit after earning mechanics. The gateway tab ordering (pipelines → payments → monitoring → advanced → opportunities) is proven and should be mirrored.

---

## 8. Flags and Issues

### Draft Pages (7)
Need review: which are ready for `current` status?

### Empty Sections (2)
- `guides/payments-and-pricing/` - no files
- `guides/roadmap-and-funding/` - no files

### Empty Glossary (1)
- `resources/glossary.mdx` - 0 bytes

### Broken or Stale Links (needs audit)
- Imported tutorials may have gateway-perspective links that don't work in orchestrator context
- `x-` prefixed resource pages in nav (x-contract-addresses, x-troubleshooting, x-changelog, x-support-status) - are these placeholders?

### V1 Content Not Yet Migrated
- `set-pricing.mdx` - pricing configuration (CRITICAL)
- `configure-reward-calling.mdx` - reward calling (IMPORTANT)
- `migrate-from-contract-wallet.mdx` - migration (IF STILL RELEVANT)
- `migrate-to-arbitrum.mdx` - migration (IF STILL RELEVANT)
- `dual-mine.mdx` - GPU sharing (MINOR - concept still relevant for AI dual-use)
- `gateway-introspection.mdx` - Loki API (MINOR)

---

## 9. Final Recommendations

### Priority 1: Critical Journey Gaps
1. **Create pricing guide** - How orchestrators set competitive prices (`-pricePerUnit`, `-pricePerGateway`, `autoAdjustPrice`, per-capability AI pricing)
2. **Build glossary** - Define all orchestrator-specific terms using the deployment axes framework
3. **Populate payments section** - Payment flow from orchestrator perspective (receiving PM tickets, redemption, deposit mechanics)

### Priority 2: Section Structure
4. **Reorder guide sections** - Move Workloads & AI before Staking & Rewards
5. **Resolve deployment-options duplication** - Consolidate setup-navigator and find-your-path
6. **Move guide.mdx** into advanced-operations or remove (confusing at root level)

### Priority 3: Content Gaps
7. **Add reward calling guide** - Migrate from v1 configure-reward-calling.mdx
8. **Populate roadmap-and-funding** - At minimum SPE/grant opportunities for orchestrators
9. **Review 7 draft pages** - Promote to current or remove from nav
10. **Audit imported tutorials** - Ensure they work from orchestrator perspective with correct links

### Priority 4: Cross-Tab Coherence
11. **Add cross-tab links** per the table in Section 5
12. **Share contract addresses and Arbitrum references** - Single source of truth, not duplicated per tab
13. **Align terminology** - Ensure gateway and orchestrator glossaries use consistent terms for shared concepts (PM, sessions, capabilities, operational mode)
