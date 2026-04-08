AIM: consolidate all audience, personas, journeys for each tab & determine a final mapping.

# ALL FILES

| Name | Location | Category |
|------|----------|----------|
| canonical-orchestrators-audience-design.md | `CONTENT-WRITING/.../testing/Tabs/orchestrators/collated/` | Audience, Persona, Journey, IA |
| collation-notes-orchestrators.md | `...orchestrators/collated/` | Prompt/Skill |
| validation-check.md | `...testing/Tabs/orchestrators/` | Plan |
| agent-v5-orchestrators-audience-design.md | `...orchestrators/zero-context-ai-results/v5/` | Audience, Persona, Journey, IA |
| glossary-orchestrators.md | `...orchestrators/input-pack/` | Content |
| v5.md (learnings) | `...orchestrators/learnings/` | Prompt/Skill |
| orchestrators-audience-doc.md | `CONTENT-WRITING/context-packs/` | Audience, Persona |
| orchestrators-content-scan.md | `CONTENT-WRITING/context-packs/` | Content, IA |
| orchestrators-ia-prereq.md | `CONTENT-WRITING/context-packs/` | IA |
| orchestrators-ia-mapping.md | `CONTENT-WRITING/context-packs/` | IA |
| orchestrators-research-pack.md | `CONTENT-WRITING/context-packs/` | Content |
| collated/orchestrators/ (11 files) | `CONTENT-WRITING/collated/orchestrators/` | Audience, IA |
| 02-personas.md | `v2/orchestrators/_workspace/canonical/review/` | Persona |
| 03-jobs.md | `v2/orchestrators/_workspace/canonical/review/` | Journey |
| 04-journey.md | `v2/orchestrators/_workspace/canonical/review/` | Journey |
| 05-section-structure.md | `v2/orchestrators/_workspace/canonical/review/` | IA |
| audience-personas-orchestrators.mdx | `v2/orchestrators/_workspace/canonical/research/` | Persona |
| dep-personas-and-pages.mdx | `v2/orchestrators/_workspace/plans/` | Persona, IA |
| L0-hybrid-operator-product-exercise.md | `v2/orchestrators/_workspace/research/` | Journey |
| dual-mode-orchestrator-planning.md | `v2/orchestrators/_workspace/research/` | IA |
| 05-setup-paths.md | `v2/orchestrators/_workspace/research/Orchestrators_new/` | Journey, IA |
| portal.mdx | `v2/orchestrators/` | Content |
| navigator.mdx | `v2/orchestrators/` | Content, Journey |
| 01b-persona-check.md | `CONTENTI-PIPLEINE/` | Persona |
| 01-ia-verification.md | `CONTENTI-PIPLEINE/` | IA |
| S01-which-path-is-mine.mdx | `CONTENTI-PIPLEINE/content/` | Content, Journey |
| 05a-tab-orchestrators.md | `_MY_PROCESS/.../FULL-FILES/TABS/` | Persona, Journey, Plan |
| orchestrators-ia-map.md | `CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/` | IA |
| IA.mdx | `v2/orchestrators/_workspace/canonical/` | IA |

---

# AUDIENCE — Who lands on this tab

**Audience token**: `orchestrator`

### Who arrives and from where

| Arriving type | Entry vector | Arriving state | Routing need |
|---|---|---|---|
| **Prospective GPU operator** | Search "earn with GPU" / "Livepeer orchestrator setup"; Discord; mining/crypto communities | Has GPU hardware, Linux/DevOps skills; no Livepeer knowledge; unclear which path applies (solo/AI/pool) | Needs disambiguation (S1) then stays — this is their tab |
| **AI/ML engineer** | Search "decentralised AI inference" / "GPU compute earnings"; AI communities | ML background, no crypto background; wants to earn from AI models | Needs to understand that AI-only path exists without LPT staking requirement — stays |
| **Delegators evaluating orchestrators** | Cross-reference from LP Token tab | Has staked LPT, wants to understand: what reward cut means, how reliable reward calls are, orchestrator quality signals | Reads concepts/guides then returns to LP Token tab |
| **Developers understanding supply side** | Cross-reference from Developers tab | Wants to know what capabilities orchestrators expose, BYOC routing, AI pipelines available | Reads concepts then returns to Developers tab |
| **About tab readers doing diligence** | Routed from About after evaluating protocol | Has protocol understanding, now evaluating whether to become an orchestrator | Stays if convinced |

### Cross-tab routing

| Direction | From / To | Why |
|---|---|---|
| Inbound | Home → Orchestrators | GPU operator CTA |
| Inbound | About → Orchestrators | Protocol readers confirmed orchestrator path |
| Inbound | Delegators → Orchestrators | Delegators evaluating orchestrators or considering running own node |
| Inbound | Community → Orchestrators | Infrastructure interest |
| Outbound | Orchestrators → Delegators | How to attract delegation |
| Outbound | Orchestrators → Gateways | Gateway selection logic |
| Outbound | Orchestrators → Developers | Custom AI/video flows |
| Outbound | Orchestrators → Resource Hub | CLI reference, changelog, glossary |
| Outbound | Orchestrators → About | Protocol architecture, tokenomics |

### Arriving question

> "I have GPU hardware — how do I connect it to the Livepeer network and start earning from it, and which path is right for my hardware and capital situation?"

---

# PERSONAS — Who this tab actually serves

### Source: 05a-tab-orchestrators.md (process analysis)

**Primary persona: The GPU Node Operator**

Someone who owns or has access to GPU infrastructure — dedicated server, cloud GPU, or home rig — and wants to earn LPT and ETH by providing transcoding and/or AI inference capacity. Has Linux and DevOps competence, comfortable with CLI tools, motivated by economics.

**Two sub-types:**

**Sub-type A: The Prospective Orchestrator**
- Does not yet have a node running. In evaluation phase
- Key question: "Is this worth it with my hardware, and can I actually earn meaningful rewards?"
- Will read incentive model, economics, hardware requirements BEFORE touching a setup guide
- If they cannot answer the economics question quickly, they leave

**Sub-type B: The Existing Orchestrator Operator**
- Already running a node — possibly since the video transcoding era
- Uses the tab for: upgrade instructions, AI pipeline configuration, reward call tuning, troubleshooting, governance weight understanding
- Knows the basics, needs depth

**What they need (in order):**
1. Can I earn money doing this? (economics first)
2. Does my hardware qualify? (GPU specs, bandwidth, uptime requirements)
3. How do I get set up? (installation, activation, network registration)
4. How do I add AI pipeline support? (the main income differentiator in 2025-2026)
5. How do I operate reliably? (reward calls, monitoring, upgrades)
6. What is my governance role? (stake-weighted voting, how to influence protocol direction)

**Top frustration points** (from forum/Discord):
- AI models frequently stop responding to jobs, require manual reboots — no troubleshooting page exists
- Dual-mode page (video + AI) has 4 pending SME review flags — most important setup path may be unpublished
- Hardware requirements for AI pipelines lack specificity by pipeline type
- Reward call automation/failure recovery guidance incomplete

### Source: canonical-about-audience-design.md (4-run synthesis)

| Rank | Persona | Vol | Depth | Impact | Total | Consensus |
|---|---|---|---|---|---|---|
| 1 | Independent GPU operator | 3 | 3 | 3 | **9** | 4/4 unanimous |
| 2 | AI inference specialist | 2 | 3 | 3 | **8** | 3/4 |
| 3 | Capital-constrained operator (pool node) | 2 | 3 | 3 | **8** | 3/4 |
| 4 | Running operator (return-visit) | 2 | 2 | 3 | **7** | 3/4 |
| 5 | Delegator-turned-operator | 1 | 2 | 1 | **4** | 2/4 |

### Source: orchestrators-audience-doc.md (alternative demographic framework)

| Persona | Description | Hardware | Capital | Entry vector |
|---|---|---|---|---|
| Solo Miner | Former PoW miner, 1-4 GPUs | Personal rig | Has or will acquire LPT | Mining communities |
| AI Native | ML engineer, no crypto background | Cloud GPU or workstation | No LPT, no crypto knowledge | AI/ML communities |
| Pool Worker | GPU owner, no LPT capital | Any GPU | Cannot acquire LPT | Pool operator referral |
| Pro Operator | 4-20 GPUs, DevOps background | Server rack | Has LPT or capital | Infrastructure communities |
| Governance Participant | Existing operator focused on protocol direction | Running node | Staked LPT | Forum, governance proposals |

Note: Enterprise persona (100+ GPUs) was researched but dropped from canonical.

### Source: dep-personas-and-pages.mdx (earlier planning)

5 demographic personas (Solo Miner, Pool Worker, Pro Operator, Enterprise, AI Native) with hardware specs, pain points, entry vectors. Also contains situational JTBD framework critiquing demographic approach and proposing job story replacement. Comparison table in 02-personas.md shows alignment: Solo Miner ↔ Independent GPU operator, AI Native ↔ AI specialist, etc.

---

# JOURNEYS — What each persona needs to accomplish through this tab

## Sub-type A (Prospective Orchestrator) journey

**Source**: 05a-tab-orchestrators.md

| Step | Reader's question | What they need |
|---|---|---|
| 1 | Can I earn money doing this? | Economics: fee revenue, inflation rewards, realistic income expectations |
| 2 | Does my hardware qualify? | GPU specs by pipeline type, bandwidth, uptime requirements |
| 3 | How do I get set up? | Installation, activation, network registration |
| 4 | How do I add AI pipeline support? | aiModels.json, warm models, capability advertisement |
| 5 | How do I operate reliably? | Reward calls, monitoring, upgrades |
| 6 | What is my governance role? | Stake-weighted voting, protocol influence |

## Canonical ideal linear journey

**Source**: canonical-orchestrators-audience-design.md, 04-journey.md

| Position | Stage | lifecycleStage | What they're doing |
|---|---|---|---|
| 1 | Identify path | `discover` | S1 disambiguation: solo/AI/pool |
| 2 | Evaluate viability | `evaluate` | S2 go/no-go on hardware fit and economics |
| 3 | Understand payments | `evaluate` | S3 how work routes (stake-based video, capability-based AI), how fees/rewards arrive |
| 4 | Clear prerequisites | `setup` | S4 LPT acquisition/staking (solo video only), ETH bridging, network setup |
| 5 | Node setup | `setup` | S5 install, configure, register on-chain |
| 6 | Verify live | `setup` | S9 confirm active set or AI capability advertisement, receive first job |
| 7 | Configure AI | `build` | S8 aiModels.json, warm models, capability advertisement (optional for non-AI paths) |
| 8 | Operate daily | `operate` | S10 monitoring, reward calls, ticket redemptions |
| 9 | Optimise | `optimise` | S11 pricing, performance, delegation attraction, VRAM allocation |

## On-demand content (return visits)

- Active set size, minimum viable stake threshold
- Pricing benchmarks, gateway MaxPrice thresholds
- Reward call timing, automation, gas costs
- AI pipeline types, model IDs, VRAM requirements
- CLI flag reference, defaults, accepted values
- Performance score calculation and improvement
- Ticket redemption mechanics, win probability
- Reward/fee cut competitive values, on-chain change procedures
- Pool operator registry
- Governance vote schedule, treasury contribution rates

## Jobs to be Done

**Source**: canonical, 03-jobs.md

| # | When... | I want to... | So I can... |
|---|---|---|---|
| J1 | I have GPU hardware and found Livepeer | know whether this network pays enough to justify running a node | commit or walk away within one session |
| J2 | I've decided to proceed but don't know which path | identify which operating mode fits my hardware and capital | avoid starting down the wrong setup path |
| J3 | I know my path and want to get running | install, configure, and register my node | start receiving jobs and earning |
| J4 | My node is running but I need to add AI | configure AI pipelines and advertise capabilities | earn from AI inference (where the fees are) |
| J5 | I'm operating and want better returns | optimise pricing, attract delegation, tune performance | increase earnings without adding hardware |
| J6 | Something is broken | diagnose and fix the problem | get back to earning |
| J7 | I want to understand my governance weight | know how my stake and delegation affect protocol votes | participate meaningfully in governance |

Missing from canonical (flagged in 03-jobs.md): "upgrade to multi-GPU", "add AI to existing video node" (O1 gap, score 72), "yield optimisation framing" (O2, score 54).

## Entry blockers (resolved by section order)

| Blocker | Path affected | Resolved in |
|---|---|---|
| LPT stake (solo video path) | Active set eligibility | S2 (viability) + S4 (prerequisites) before S5 (setup). Pool/AI paths bypass this — must be visible in S1 |
| ETH for gas (all on-chain) | Any on-chain operation | S4 prerequisites |
| Publicly reachable service URI | All paths | S4 prerequisites |
| VRAM capacity (AI path) | Pipeline selection | S2 + S4 |
| Pool membership arrangement | Pool node path | S1 routing + S6 |
| Capability advertisement (AI) | AI verification | S8 before S9 |

## Persona path validation

**Source**: canonical

| Persona | Enters at | Exits at | Block | Knowledge gap |
|---|---|---|---|---|
| Independent GPU operator | S1 → S2 → S3 → S4 → S5 → S9 | S9 (first job) | None | S2 must state LPT stake requirement for video; S3 must state active set NOT required for AI |
| AI specialist | S1 → S2 → S4 → S5 → S8 → S9 | S9 (AI job) | None | S1 must surface AI-only path explicitly; S4 must separate LPT from general prerequisites |
| Capital-constrained (pool) | S1 → S6 → S5 → S9 | S9 (pool job) | None | S1 must surface pool as first-class option; S6 must explain pool mechanics |
| Running operator | S10 or S11 or S12 (direct entry) | Varies | None | On-demand sections must be self-contained for return visitors |
| Delegator-turned-operator | S1 → S2 → S4 → S5 | S5 | None | S2 must explain what changes when moving from delegator to operator |

---

# IA — All section structures found

## Canonical 12-section structure (4-run synthesis)

| Section | Reader question | Job | purpose | pageType | lifecycleStage |
|---|---|---|---|---|---|
| S1 — Which path is mine? | Solo/AI/pool/LPT required? | J2 | `orient` | `navigation` | `discover` |
| S2 — Is this viable? | Hardware qualify? Income realistic? | J1 | `evaluate` | `concept` | `evaluate` |
| S3 — How do I get paid? | Routing mechanics? Payment arrival? | J1 | `explain` | `concept` | `evaluate` |
| S4 — Prerequisites | Hardware/wallet/tokens/network/LPT? | J3 | `learn` | `concept` | `setup` |
| S5 — Get node running | Install, configure, register, verify? | J4 | `start` | `instruction` | `setup` |
| S6 — Join pool | Pool mechanics? How to connect? | J2 | `orient` | `guide` | `evaluate` |
| S7 — Pricing & cuts | What to charge? Cuts to set? | J4, J5 | `configure` | `guide` | `setup` |
| S8 — AI pipelines | aiModels.json? Capabilities advertise? | J6 | `build` | `instruction` | `build` |
| S9 — Verify working | Discoverable? Priced right? Receiving work? | J4 | `verify` | `instruction` | `setup` |
| S10 — Monitor & operate | What to watch? Routine tasks? | J7 | `operate` | `guide` | `operate` |
| S11 — Optimise earnings | More work? Better margins? | J5, J7 | `optimise` | `guide` | `optimise` |
| S12 — Troubleshoot | Node not receiving work? Reward call failed? | J5 | `troubleshoot` | `guide` | `troubleshoot` |

**Design flags**: S5 may split (solo + pool). S8 may split (AI surface large). S8 BYOC path not covered. S3 must state "active set NOT required for AI inference." S4 must separate LPT from general prerequisites. S7 must address cuts from operator perspective.

## Agent v5 run — 10 sections

Pool node folded into disambiguation (no dedicated S6). Pricing merged into production setup. v5 does NOT supersede v4 canonical — pool node path structural difference is CRITICAL.

## Current live v2/orchestrators/ structure

**Source**: 05a-tab-orchestrators.md

```
v2/orchestrators/
├── portal.mdx                          ✅ exists — hero landing, deprecated pageType
├── navigator.mdx                       ✅ exists — role-based "Find Your Path" with accordions
├── index.mdx                           ✅ exists
├── concepts/                           ✅ exists
│   └── incentive-model.mdx             ⚠️ needs LIP REVIEW flag
├── quickstart/                         ✅ exists
│   └── zero-to-first-reward            ✅ confirmed live
├── setup/                              ✅ exists
│   └── deployment-options/dual-mode.mdx 🔴 confirm publish status — 4 SME flags pending
│   └── hardware-requirements           ⚠️ needs AI pipeline specificity
├── guides/
│   ├── config-and-optimisation/reward-call-tuning    ✅ live
│   ├── staking-and-rewards/network-participation     ✅ live
│   ├── operator-considerations/operator-impact       ✅ live
│   ├── ai-and-job-workloads/audio-and-vision-pipelines ⚠️ needs currency check
│   └── ai-and-job-workloads/troubleshooting-ai-pipelines 🔴 MISSING — must create
└── resources/                          ✅ exists
```

**Orchestrators is the reference template** — most complete canonical IA in the entire site. No structural changes needed. All gaps are content-quality issues.

---

# OPEN ITEMS & BLOCKING DECISIONS

1. **BLOCKING — LIP-92 attribution conflict**: Glossary assigns LIP-92 to "AI model registry and capability discovery." Deprecated-terms register assigns LIP-92 to "Treasury Contribution Percentage." Current LIPs index shows LIP-92 = Treasury Contribution %. Cannot both be correct. Must resolve before Phase 2 content cites any LIP number in AI capability context.
2. **BLOCKING — Dual-mode page publish status**: `setup/deployment-options/dual-mode.mdx` has 4 pending SME review flags (Rick). Most important setup path may be unpublished.
3. **NON-BLOCKING — Active set size**: Currently 100 per glossary but governance-controlled. Must verify before publication.
4. **NON-BLOCKING — Pool node term**: "Pool worker" still primary in glossary; "Pool node" should be primary.
5. **DESIGN FLAG — S5 may split**: Solo and pool operators have different setup flows.
6. **DESIGN FLAG — S8 may split**: AI configuration surface large; BYOC path not covered.
7. **CRITICAL CONTENT GAPS**: AI pipeline troubleshooting (🔴 missing), hardware requirements matrix by pipeline type (insufficient), reward call automation/failure recovery (incomplete).

# RESEARCH GAP — Missing Personas

Similar to About, the canonical audience design may underserve:
- **The Hybrid Operator** — running both video and AI simultaneously. L0-hybrid-operator-product-exercise.md identifies this as highest-opportunity gap (O1 score 56). No content exists for "add AI to existing video node" path. This is a persona the tab serves but has no journey documented.
- **The Enterprise/Data Centre Operator** — dropped from canonical but was researched in dep-personas-and-pages.mdx. May need revisiting as AI demand scales and larger operators enter.
