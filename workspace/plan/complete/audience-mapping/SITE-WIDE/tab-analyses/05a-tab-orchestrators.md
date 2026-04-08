# Orchestrators tab: audience analysis and gap report

Tab path: `v2/orchestrators/`
Branch: `docs-v2-dev`

---

## 1. Primary audience persona

**Name:** The GPU Node Operator

**Who they are:** Someone who owns or has access to GPU infrastructure — a dedicated server, cloud GPU instance, or home rig — and wants to earn LPT and ETH by providing transcoding and/or AI inference capacity to the Livepeer network. They have Linux and DevOps competence, are comfortable with CLI tools, and are motivated by economics.

Two sub-types exist within this persona:

**Sub-type A: The prospective orchestrator**
Does not yet have a node running. In an evaluation phase. Key question: "Is this worth it with my hardware, and can I actually earn meaningful rewards?" They will read the incentive model, economics, and hardware requirements before touching a setup guide. If they cannot answer the economics question quickly, they leave.

**Sub-type B: The existing orchestrator operator**
Already running a node — possibly since the video transcoding era. Uses the tab primarily for: upgrade instructions, AI pipeline configuration, reward call tuning, troubleshooting, and understanding their governance weight. This reader knows the basics and needs depth.

**What they need (in order):**
1. Can I earn money doing this? (economics first)
2. Does my hardware qualify? (GPU specs, bandwidth, uptime requirements)
3. How do I get set up? (installation, activation, network registration)
4. How do I add AI pipeline support? (the main income differentiator in 2025-2026)
5. How do I operate reliably? (reward calls, monitoring, upgrades)
6. What is my governance role? (stake-weighted voting, how to influence protocol direction)

---

## 2. Secondary visitor personas

**Delegators evaluating which orchestrator to stake to.** They cross-reference the Orchestrators tab to understand: what a reward cut means, how reliable reward calls are, what signals indicate a good operator. They won't stay long but the information they need lives here.

**Developers understanding the supply side.** Want to know what capabilities orchestrators expose, how BYOC container routing works, what AI pipelines are available. Arrive from Developers tab and cross-reference.

**About tab readers doing diligence.** Arrived at About to understand the protocol, are now evaluating whether to become an orchestrator. About sends them here at the end of their research phase.

---

## 3. What the tab currently contains (inventory)

### Root level
- `index.mdx` (7.9KB) — tab index
- `portal.mdx` (6.7KB) — ✅ tab entry point with hero
- `navigator.mdx` (12KB) — ✅ role-based navigator with explicit pathways

### concepts/
- Directory confirmed, full contents not individually confirmed
- Expected content: incentive model, active set mechanics, dual-mode orchestrator concept, orchestrator vs gateway distinction
- Live docs MCP confirms `incentive-model` is surfaced and substantive

### quickstart/
- Directory confirmed
- Expected: first-node quickstart (get registered and earning in minimum steps)
- Live docs MCP confirms `zero-to-first-reward` tutorial is live — this is the main quickstart equivalent

### setup/
- Directory confirmed
- Expected: go-livepeer installation, configuration flags, network activation, AI worker setup, dual-mode deployment options
- The `dual-mode.mdx` page is referenced in memory as having four SME review flags pending Rick verification — publish status must be confirmed before launch

### guides/
- Directory confirmed
- Live docs MCP confirms the following are live:
  - `guides/config-and-optimisation/reward-call-tuning` — reward call management
  - `guides/staking-and-rewards/network-participation` — governance participation
  - `guides/operator-considerations/operator-impact` — how votes work
  - `guides/operator-considerations/production-gateways` — production operating considerations
  - `guides/ai-and-job-workloads/audio-and-vision-pipelines` — AI pipeline types

### resources/
- Directory confirmed
- Expected: community RPC endpoint reference, troubleshooting, performance specs, changelog pointers

---

## 4. Gap analysis

### 4.1 Critical gaps — content that is missing or blocking

**AI pipeline reliability: no troubleshooting page**
The single most-reported operational pain point (forum user Authority_Null, Discord evidence): AI models on orchestrators frequently stop responding to jobs and require manual reboots. There is no page in the Orchestrators tab that explains:
- What causes AI pipeline failures
- How to detect them (monitoring signals)
- How to recover (restart procedures, container health checks)
- How to prevent them (warmup settings, resource limits)

This is a critical trust gap. If orchestrators can't keep AI pipelines reliable, they lose jobs and reputation. If the docs don't address it, it looks like the network doesn't take the problem seriously.
- Canonical location: `v2/orchestrators/guides/ai-and-job-workloads/troubleshooting-ai-pipelines.mdx`
- Content sources: AI SPE Phase 4 retrospective, go-livepeer v0.8.7-v0.8.10 release notes, forum threads

**Dual-mode page publish status — must confirm**
`setup/deployment-options/dual-mode.mdx` is referenced with four pending SME review flags (Rick). This page is fundamental to the current network model — most orchestrators should be running both transcoding and AI. If it is not published, the most important setup path is missing.
- Action: Confirm publish status with Rick before launch. Do not proceed with launch if this page is still flagged.

**Hardware requirements for AI pipelines — insufficient specificity**
The current hardware requirements content likely dates from before the AI pivot. AI pipeline requirements vary significantly by pipeline type:
- StreamDiffusion with TensorRT: requires NVIDIA GPU with TensorRT support (RTX 3090+ recommended)
- LLM inference: requires larger VRAM (24GB+ for most models)
- Audio transcription (Whisper): lower VRAM requirements
- Batch image pipelines: moderate requirements

Without a clear hardware matrix, prospective orchestrators cannot evaluate whether their hardware qualifies for AI work (where the fees are). This is a direct barrier to supply-side growth.
- Canonical location: Section in `concepts/` or a dedicated `setup/hardware-requirements.mdx`

**Reward call automation — gap in operations guidance**
New orchestrators frequently miss reward calls, which is a permanently forfeited LPT allocation with no catch-up mechanism (confirmed by `reward-call-tuning` page). The existing guide explains tuning but it is unclear whether it covers:
- Automated reward call services/scripts
- What happens when a reward call fails on-chain
- Setting up monitoring alerts for missed rounds

This is an operational reliability gap that costs orchestrators money and damages delegator trust.

### 4.2 Content currency issues

**AI pipeline list in `audio-and-vision-pipelines` — may be outdated**
go-livepeer v0.8.7 (September 2025) through v0.8.10 (March 2026) shipped significant pipeline additions. The supported pipeline list needs to reflect the current ai-worker release state. REVIEW flag with SME: Rick / j0sh.

**Incentive model economics — LIP-107 / LIP-100 sensitivity**
If LIP-107 passes (reducing `targetBondingRate` to 46%), the inflation mechanics that underpin orchestrator staking rewards will change. The incentive model page needs a REVIEW flag referencing both LIPs with SME: Mehrdad.

### 4.3 Structural observations

**Orchestrators is the reference template — this is confirmed**
This tab has the most complete implementation of the canonical IA in the entire docs site:
- `portal.mdx` ✅
- `navigator.mdx` ✅ (with explicit role-based pathways — "I want to earn", "I want to run AI", "I want to influence the protocol")
- `concepts/` ✅
- `quickstart/` ✅
- `setup/` ✅
- `guides/` ✅
- `resources/` ✅

No structural changes needed. All gaps are content-quality issues, not IA issues.

---

## 5. IA status summary

```
v2/orchestrators/
├── portal.mdx                                        ✅ exists
├── navigator.mdx                                     ✅ exists — role-based, comprehensive
├── index.mdx                                         ✅ exists
│
├── concepts/                                         ✅ exists
│   └── incentive-model.mdx                           ⚠️  needs LIP REVIEW flag
│
├── quickstart/                                       ✅ exists
│   └── zero-to-first-reward (tutorial)               ✅ confirmed live
│
├── setup/                                            ✅ exists
│   └── deployment-options/dual-mode.mdx              🔴 confirm publish status — SME review pending
│   └── hardware-requirements                         ⚠️  needs AI pipeline specificity
│
├── guides/
│   ├── config-and-optimisation/reward-call-tuning    ✅ confirmed live
│   ├── staking-and-rewards/network-participation     ✅ confirmed live
│   ├── operator-considerations/operator-impact       ✅ confirmed live
│   ├── ai-and-job-workloads/audio-and-vision-pipelines ⚠️  needs currency check
│   └── ai-and-job-workloads/troubleshooting-ai-pipelines 🔴 MISSING — must create
│
└── resources/                                        ✅ exists — confirm contents
```

Legend: ✅ good | ⚠️ needs work | 🔴 critical gap
