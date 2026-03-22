# Orchestrators — IA Map

**Status**: DRAFT — awaiting checkpoint
**Tab**: Orchestrators
**Audience**: orchestrator
**Generated**: 2026-03-21

---

## Part 1 — Existing Resources

What's already been done for this tab. Used as design inputs — informs the audience design but does NOT anchor it to current nav structure.

### Persona Research

| Resource | Path | Quality | What it covers |
|---|---|---|---|
| Personas and Journeys | `v2/orchestrators/_workspace/plans/dep-personas-and-pages.mdx` | High — sourced from forum, Discord, Messari, Live Pioneers, GitHub | 5 detailed personas (Solo Miner, Pool Worker, Pro Operator, Enterprise, AI Native): background, motivations, entry points, key questions per stage, pain points, hardware profiles. Includes persona summary matrix with LPT background, technical level, GPU scale, primary job type, entry blocker, critical doc, journey stage. |

### Tab / IA Research

| Resource | Path | Quality | What it covers |
|---|---|---|---|
| Orchestrator Tab Journey & Persona Review | `v2/orchestrators/_workspace/research/orchestrator-tab-review.md` | High — systematic audit with gaps, cross-tab refs, and priorities | Current tab structure map, per-persona journey assessment, journey completeness assessment, critical/secondary gaps, duplication audit (within tab + cross-tab), cross-tab references needed, terminology framework, guide section ordering rationale, priority recommendations (P1–P4). |

### Review Packets

| Resource | Path | Date | What it covers |
|---|---|---|---|
| — | — | — | No formal review packets exist for this tab |

### Key Findings from Existing Research

*The load-bearing insights — pain points, entry states, misconceptions, what they come to do, where they get stuck.*

- **LPT acquisition is the primary entry blocker for Persona A (Solo Miner).** Must acquire/stake LPT before earning — this blocks many entrants from ever activating. This is confirmed from forum and community sources, not just assumption.
- **Pool vs solo confusion is a critical misrouting problem.** The distinction between "running an orchestrator" and "joining a pool as a worker" is buried. Persona B (Pool Worker) is nearly invisible — most pool documentation lives outside Livepeer's docs.
- **Pricing configuration is the #1 operational gap.** No v2 equivalent to the v1 `set-pricing.mdx` exists. Operators across Personas C, D, and E discuss competitive pricing extensively on Discord precisely because the docs don't cover it. The `payments-and-pricing/` section directory exists but is empty.
- **AI pipeline setup is underdocumented and scattered.** `aiModels.json` format and valid model IDs are poorly documented; Docker container management for AI Runner is complex; VRAM requirements vary by pipeline and change frequently. Persona E (AI Native) arrives with no Livepeer background — the AI-first entry path is not well served.
- **The "realtime AI" vs "batch AI" distinction is not explained before the quickstart** — operators attempt the wrong path based on unclear framing.
- **Two entire sections exist as empty directories.** `guides/payments-and-pricing/` and `guides/roadmap-and-funding/` both have 0 files. The glossary is a 0-byte file.
- **Section ordering is inverted for the reader's journey.** Staking/Rewards comes before Workloads & AI — but operators need to understand *what* they're running before understanding *how* they earn from it.
- **7 pages are in draft status** and need review/promotion before the tab can be considered production-ready.

---

## Part 2 — Audience Design

First-principles design of what SHOULD exist for this audience. Informed by Part 1 but not constrained by the current nav structure. The goal is the ideal — gaps between ideal and reality surface in Part 3.

### Arriving Question

The single question this audience is trying to answer when they land on this tab:

> "Can my GPU earn on this network, and what do I need to do to get there?"

### Personas

Named archetypes with motivation built in — not role tokens. Ranked by arrival likelihood.

| Rank | Persona | Arriving with | Wants to leave with |
|---|---|---|---|
| 1 | **The Solo Miner** — former GPU miner, 1–4 consumer GPUs, financially motivated, community-oriented | A GPU and a question: "is this worth it and how do I start?" | First working node OR a clear decision that pool is the better path |
| 2 | **The AI Native** — ML engineer/researcher, arrived via AI subnet, no Livepeer background | Confidence in AI compute, no knowledge of protocol/staking/transcoding | Working AI pipeline node, clear earnings path for AI inference |
| 3 | **The Pool Worker** — has GPU hardware, lacks LPT stake to compete solo, wants simplest path | Awareness that a simpler path exists, no idea how to find it | Joined a pool and contributing GPU compute |
| 4 | **The Pro Operator** — already running 4–20 GPUs, strong devops background, wants AI on top | Existing transcoding setup, looking to add AI revenue stream | AI pipelines configured, pricing strategy set, monitoring in place |
| 5 | **The Enterprise Operator** — business decision maker, GPU cloud or colo, evaluating at scale | A business question: ROI, compliance, SLA reliability at 100+ GPU scale | Business case validated, enterprise setup path identified |

### Jobs to be Done

Format: "When [X], I want to [Y] so I can [Z]."

| # | When... | I want to... | So I can... |
|---|---|---|---|
| 1 | I arrive with a GPU and no knowledge of Livepeer | understand whether running solo, joining a pool, or focusing on AI is right for my hardware and goals | start the right setup path without wasting time on the wrong one |
| 2 | I've decided to run a node | complete install, configure, and activate in a logical sequence | reach a working, job-receiving node with confidence it's set up correctly |
| 3 | I have a running node and want to earn competitively | understand how to set pricing for video and AI workloads | stop leaving earnings on the table and not get overlooked by gateways |
| 4 | I want to add AI inference to my existing transcoding node | follow a clear setup path for AI runner, models, and pipelines | earn additional fee revenue from AI workloads alongside transcoding |
| 5 | My node is running but not receiving jobs | diagnose the most likely causes quickly | get back to earning without spelunking Discord |
| 6 | I have GPU hardware but not enough LPT to compete as a solo orchestrator | understand the pool worker path and join a pool | earn from my GPU without the LPT barrier |
| 7 | I'm running at scale (10+ GPUs or fleet) | understand large-scale operations, pool management, and enterprise economics | operate professionally and evaluate long-term business viability |

### Ideal Journey

**Linear** (discovery → competency — must be served in sequence):

| Position | Stage name | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Orient | discover | Learning what orchestrators are, whether this is for them, and which path matches their situation |
| 2 | Evaluate | evaluate | Assessing hardware fit, LPT requirements, economics, and time commitment before committing |
| 3 | Set up | setup | Following their chosen path: solo quickstart, pool join, or AI-first setup |
| 4 | Activate | setup | Connecting to the network, staking, registering, confirming first job receipt |
| 5 | Operate | operate | Monitoring health, managing pricing, handling rewards and payments |
| 6 | Optimise | optimise | Tuning pricing, adding workloads, scaling infrastructure, managing delegation |

**On-demand** (reference needs — not sequential):

- CLI flags and runtime parameters
- Pricing guidance (what's competitive for video vs AI workloads)
- VRAM requirements by pipeline/model
- Contract addresses and network references
- Troubleshooting by symptom
- Explorer usage and earnings verification

**Cross-tab** (graduation paths and entry points):

| Direction | From/To | Why |
|---|---|---|
| → | Orchestrators → LP Token | Staking, delegation mechanics, governance — orchestrators are governance actors |
| → | Orchestrators → About | Architecture depth, protocol economics, tokenomics — conceptual substrate |
| ← | LP Token → Orchestrators | Delegators need to evaluate orchestrators to choose where to delegate |
| ← | Developers → Orchestrators | Developers building custom pipelines may graduate to running their own orchestrator |
| ↔ | Orchestrators ↔ Gateways | Gateways select orchestrators; orchestrators price and configure for gateways; payment mechanics are shared (PM tickets from both sides) |

### Section Shape

The ideal section structure for this tab. Each section has a clear job — what it delivers and who it serves at that point in the journey.

| Section | Job | Audience entry state | Audience exit state | lifecycleStage |
|---|---|---|---|---|
| Landing | Route personas to the right path (solo/pool/AI/enterprise) with minimal friction | Knows nothing about the tab structure; may not even know which path they are | Directed to the correct starting point | discover |
| Concepts | Answer "what is this and why does it matter?" before asking anything of the reader | Curious but uncommitted; evaluating whether to continue | Understands the role, capabilities, incentives, and governance of orchestrators | discover / evaluate |
| Get Started | Deliver the first working outcome for each path — no more context than necessary | Has decided to proceed; needs the shortest safe path to a working node | Has a running node OR has joined a pool | setup |
| Setup | Cover the full installation and activation sequence for those who want depth | Following up from Get Started OR came direct from Concepts | Installed, configured, connected, activated, tested, monitoring basics in place | setup |
| Guides | Serve operational jobs grouped by what the operator needs to do next | Operational — already running a node, now improving it | Pricing set, AI configured, payments understood, monitoring in place, advanced ops known | operate / optimise |
| Resources | Provide reference material, glossary, FAQ, and community paths on demand | Any stage — arrived with a specific lookup need | Found the fact, term, or path they needed | any |

### Structural Options Evaluated

**Option A — Current structure**: Landing → Concepts → Quickstart → Setup → Guides (7 subsections) → Resources. Has the right layers but ordering issues within Guides and two empty sections that break the journey.

**Option B — Flatten to 4 sections**: Landing → Learn → Do → Reference. Loses the distinction between first-time setup (Get Started) and operational improvement (Guides) — blurs the path selection problem.

**Option C — Chosen — current structure with section ordering fixed**: Keep the 6-section shape (Landing, Concepts, Get Started, Setup, Guides, Resources) but: (1) rename Guides subsections to reflect jobs not topics, (2) move Workloads & AI before Staking & Rewards, (3) fill the Payments & Pricing and Roadmap & Funding sections, (4) build the glossary. This preserves existing content investment while correcting the journey order and filling the gaps.

---

## Part 3 — Gap Analysis

Comparison of the ideal section shape (Part 2) against what currently exists. This feeds directly into the Level 1 Prompt B audit.

| Gap | Type | Priority | Action |
|---|---|---|---|
| Pricing configuration guide — no page explaining how to set `-pricePerUnit`, `-pricePerGateway`, `autoAdjustPrice`, or competitive AI pricing | missing | P0 | add `guides/payments-and-pricing/pricing-guide.mdx` — analogue to gateway `pricing-strategy.mdx` |
| `guides/payments-and-pricing/` section — directory exists, 0 files | missing | P0 | add: payment flow from orchestrator perspective (PM tickets, redemption, deposit mechanics) |
| Pool worker path — "join a pool" is buried; Persona B has no visible entry point from the tab landing | misplaced | P0 | surface pool path in Landing section and Get Started as a first-class option alongside solo and AI |
| Glossary — 0 bytes | missing | P0 | build orchestrator glossary with deployment axes (workload type, setup type, scale, network role) + ~15 protocol/operational/economic terms |
| Guide section ordering — Staking & Rewards before Workloads & AI inverts the learning sequence | wrong-type | P1 | reorder: Operator Considerations → Deployment Options → Workloads & AI → Staking & Rewards → Payments & Pricing → Monitoring & Tools → Advanced Operations |
| `guides/roadmap-and-funding/` section — directory exists, 0 files | missing | P1 | add: SPE/grant opportunities, AI compute opportunity framing from orchestrator perspective |
| Reward calling configuration — operationally important (`-reward` flag, gas cost, automatic vs manual) — not migrated from v1 | missing | P1 | add to `staking-and-rewards/rewards-and-fees.mdx` or create separate page |
| Realtime AI vs batch AI distinction — not explained before the AI quickstart | missing | P1 | add framing page or section to Get Started AI path before the quickstart splits |
| 7 pages in draft status | wrong-type | P1 | review each — promote to current or remove from nav |
| `aiModels.json` documentation — format and valid model IDs underdocumented | missing | P2 | expand AI pipeline operational page with schema reference |
| Cross-tab links — Orchestrators ↔ Gateways (payments, AI routing, pricing), Orchestrators → LP Token (staking, governance) | missing | P2 | add cross-tab cards/links per Section 5 of the tab review |
| Deployment options duplication — `setup-navigator.mdx` and `find-your-path.mdx` serve overlapping routing purposes | merge | P2 | consolidate into one setup options page |
| Contract addresses and Arbitrum references — duplicated across gateway and orchestrator resource sections | misplaced | P2 | move to shared snippet or Resource HUB; both tabs reference rather than duplicate |
| Imported tutorials — 3 gateway tutorials imported wholesale without orchestrator-perspective framing | wrong-type | P2 | add orchestrator-perspective framing for each imported tutorial |
| Migration guides (v1 `migrate-from-contract-wallet.mdx`, `migrate-to-arbitrum.mdx`) — relevance not assessed | missing | P3 | assess whether still needed; add if relevant operators remain on L1 or contract wallets |

---

## ⏸ CHECKPOINT

- [ ] Existing resources correctly identified — nothing significant missed?
- [ ] Key findings extracted — do they represent genuine insight, not just restating content?
- [ ] Arriving question is specific — not a topic area, an actual question?
- [ ] Personas are named archetypes with motivation — not role tokens?
- [ ] Jobs-to-be-done are first-principles — not derived from current nav structure?
- [ ] Section shape serves the identified jobs?
- [ ] Cross-tab paths correctly identified?
- [ ] Gap analysis is actionable — each gap has a clear recommended action?
