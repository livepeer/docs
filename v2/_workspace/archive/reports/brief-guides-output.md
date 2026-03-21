# Brief Output — Orchestrator Guides Index
`v2/orchestrators/guides/guides.mdx`

**Status:** Research complete · Draft MDX ready
**Date:** March 2026
**No commits. No repo writes. Human review required.**

---

## Part 1 — Research Report

### 1.1 Internal Pages — Link Status

All candidates checked against IA - All Sections (Notion) and IA Confirmed database.

| Page | File path | Status | Linkable? |
|---|---|---|---|
| Join a Pool | `get-started/join-a-pool` | ✅ Complete — best page in tab | YES |
| Run a Pool | `advanced/run-a-pool` | Exists, thin | YES (with caveat) |
| Add AI to Your Node | `get-started/AI-prompt-start` | **Missing — page does not exist** | NO |
| Hardware Requirements | `setup/hardware-requirements` | Exists | YES |
| AI Pipelines | `advanced/ai-pipelines` | Exists (Brief 10 rewrite queued) | YES |
| Staking LPT | `advanced/staking-LPT` | Exists | YES |
| Rewards and Fees | `advanced/rewards-and-fees` | Exists | YES |
| Earnings | `advanced/earnings` (orphaned at root) | Exists, weak | YES |
| Tools | `guides/tooling` | Exists (Brief 11 rewrite done) | YES |
| CLI Flags Reference | `resources/cli-flags` | Exists | YES |
| FAQ and Troubleshooting | `resources/faq` | Exists but empty of troubleshooting | YES (with caveat) |
| Community Pools | `resources/community-pools` | Exists | YES |
| Install go-livepeer | standalone page | **Missing — embedded in quickstart only** | NO |
| Configure Your Orchestrator | standalone page | **Missing** | NO |
| Connect to Arbitrum | standalone page | **Missing** | NO |

Notes:
- `AI-prompt-start` does not exist. Do not link. Placeholder note in draft.
- `earnings.mdx` is currently orphaned at root rather than in `advanced/` — link path needs REVIEW against actual docs.json nav.

---

### 1.2 External Sources — Verified Live

| Source | URL | Status | Notes |
|---|---|---|---|
| Cloud SPE — Ollama/LLM runner guide | `https://www.livepeer.cloud/self-hosting-livepeers-llm-pipeline-deploying-an-ollama-based-gpu-runner-for-ai-orchestrators/` | ✅ LIVE | Nov 2025, Mike Zupper (@mike_zoop) |
| Speedy Bird — Monitoring guide | `https://www.speedybird.xyz/?page_id=339` | ✅ LIVE | Prometheus + Grafana + Loki + Alertmanager for orchestrators |
| Forum — Bash script to update Livepeer | `https://forum.livepeer.org/t/bash-script-to-update-livepeer/1513` | ✅ LIVE | 2021 (v0.5.21 era) — **REVIEW: still relevant?** |
| Forum — Transcoders category | `https://forum.livepeer.org/c/transcoders/7` | ✅ LIVE | Active community category |
| Discord | `https://discord.gg/livepeer` | ✅ Standard link | `#orchestrating` channel |

**Not included — reasons:**
- `livepeer.tools` — confirmed DOWN (nginx default page)
- `livepioneersbeta.com` — not verified live; Notion flags it as gap example only, not a recommendation
- Titan Node / Video Miner guides — no verified published operator guide URL found (REVIEW: check directly)
- Forum posts from 2018–2020 — outdated for Arbitrum-era orchestrating

---

### 1.3 SME Review Items

| # | Item | Owner |
|---|---|---|
| 1 | Forum bash script (2021) — still relevant for current go-livepeer update workflow? | Community / Rick |
| 2 | Titan Node and/or Video Miner published operator guides — URLs? | Titan-Node / Video Miner |
| 3 | Actual file path for `earnings.mdx` — `advanced/earnings` or root? Verify against nav | Alison |
| 4 | Actual file path for `join-a-pool` — `get-started/join-a-pool` or other? Verify against IA Confirmed | Alison |
| 5 | Any additional Cloud SPE guides published since Nov 2025? | Cloud SPE blog |
| 6 | `livepioneersbeta.com` — worth linking with community caveat? | Community |

---

## Part 2 — Draft MDX: `guides.mdx`

```mdx
---
title: 'Orchestrator Guides'
description: 'Curated guides for running and optimising a Livepeer orchestrator — setup references, earnings strategy, community how-tos, and Discord resources.'
sidebarTitle: 'Guides'
pageType: 'reference'
audience: 'orchestrator'
status: 'current'
---

A curated index of guides for running a Livepeer orchestrator. Official guides live within this documentation site; community resources are external and maintained independently.

---

## Official guides

<CardGroup cols={2}>
  <Card
    title="Join a Pool"
    href="/v2/orchestrators/get-started/join-a-pool"
    icon="users"
  >
    Connect as a pool worker. Covers pool types, connection modes, and reward mechanics.
  </Card>
  <Card
    title="Run a Pool"
    href="/v2/orchestrators/advanced/run-a-pool"
    icon="server"
  >
    Operate an orchestrator pool with separate worker nodes. Architecture, setup, and limitations.
  </Card>
  <Card
    title="AI Pipelines"
    href="/v2/orchestrators/advanced/ai-pipelines"
    icon="cpu"
  >
    Configure AI inference pipelines on your node. All pipeline types, aiModels.json reference, and the LLM runner.
  </Card>
  <Card
    title="Hardware Requirements"
    href="/v2/orchestrators/setup/hardware-requirements"
    icon="microchip"
  >
    GPU, CPU, RAM, and bandwidth requirements for transcoding and AI inference workloads.
  </Card>
  <Card
    title="Staking LPT"
    href="/v2/orchestrators/advanced/staking-LPT"
    icon="coins"
  >
    Stake and self-delegate LPT to improve your position in the active orchestrator set.
  </Card>
  <Card
    title="Rewards and Fees"
    href="/v2/orchestrators/advanced/rewards-and-fees"
    icon="chart-line"
  >
    How inflation rewards and transcoding/AI fees are earned, distributed, and claimed.
  </Card>
  <Card
    title="Maximise Your Earnings"
    href="/v2/orchestrators/advanced/earnings"
    icon="arrow-trend-up"
  >
    Pricing strategy, stake optimisation, and fee vs reward trade-offs.
  </Card>
  <Card
    title="Tools and Dashboards"
    href="/v2/orchestrators/guides/tooling"
    icon="gauge"
  >
    Explorer, Prometheus metrics, payout dashboards, and capability testing tools.
  </Card>
  <Card
    title="CLI Flags Reference"
    href="/v2/orchestrators/resources/cli-flags"
    icon="terminal"
  >
    Complete reference for go-livepeer command-line flags.
  </Card>
  <Card
    title="FAQ and Troubleshooting"
    href="/v2/orchestrators/resources/faq"
    icon="circle-question"
  >
    Common issues: not receiving jobs, port forwarding, Arbitrum RPC errors, and more.
  </Card>
</CardGroup>

<!-- REVIEW: Add "Add AI to Your Node" card once get-started/AI-prompt-start is created (Phase 1 gap) -->

---

## Community resources

These guides are maintained by community members and SPEs, not the Livepeer Foundation. They are not officially reviewed or guaranteed to be current.

| Guide | Source | What it covers |
|---|---|---|
| [LLM Pipeline: Deploying an Ollama-Based GPU Runner](https://www.livepeer.cloud/self-hosting-livepeers-llm-pipeline-deploying-an-ollama-based-gpu-runner-for-ai-orchestrators/) | Cloud SPE (Nov 2025) | Running LLM inference on 8 GB VRAM GPUs via Ollama and aiModels.json |
| [Orchestrator Monitoring with Prometheus, Grafana and Loki](https://www.speedybird.xyz/?page_id=339) | Speedy Bird (community) | Full monitoring and alerting stack for orchestrators, including log analytics |
| [Bash Script to Update Livepeer](https://forum.livepeer.org/t/bash-script-to-update-livepeer/1513) | Forum (community, 2021) | Shell script for updating go-livepeer binaries on Linux <!-- REVIEW: verify still current for recent go-livepeer versions --> |

<!-- REVIEW: Add Titan Node and Video Miner operator guides here if URLs can be verified -->

---

## Discord and forum

The primary community support channel for orchestrators is Discord. Most active troubleshooting, pricing discussion, and operational knowledge lives there.

- **Discord** — [discord.gg/livepeer](https://discord.gg/livepeer) — join `#orchestrating` for operator discussion
- **Forum** — [forum.livepeer.org/c/transcoders](https://forum.livepeer.org/c/transcoders/7) — archived threads and longer-form operator knowledge

For troubleshooting, check the [FAQ](/v2/orchestrators/resources/faq) first.

---

## See Also

<CardGroup cols={3}>
  <Card title="Tools" href="/v2/orchestrators/guides/tooling" />
  <Card title="Community Pools" href="/v2/orchestrators/resources/community-pools" />
  <Card title="FAQ and Troubleshooting" href="/v2/orchestrators/resources/faq" />
</CardGroup>
```
