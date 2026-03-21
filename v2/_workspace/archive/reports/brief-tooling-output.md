# Brief Output — Orchestrator Tools
`v2/orchestrators/guides/tooling.mdx`

**Status:** Research complete · Draft MDX ready  
**Date:** March 2026  
**No commits. No repo writes. Human review required.**

---

## Part 1 — Research Report

### 1.1 Live Tool Verification

| Tool | URL checked | Status | Notes |
|---|---|---|---|
| Livepeer Explorer | `explorer.livepeer.org` | ✅ LIVE | Primary on-chain dashboard |
| Cloud SPE Tools | `tools.livepeer.cloud` | ✅ LIVE | Active — `/ai/network-capabilities`, payout, orchestrator views confirmed |
| `livepeer.tools` | `livepeer.tools` | ❌ DOWN | Returns nginx default page only. App not serving. **Do not link.** |
| Prometheus/Grafana stack | `github.com/livepeer/livepeer-monitoring` | ✅ LIVE | Official Docker image `livepeer/monitoring:latest` |
| AI job tester | `github.com/mikezupper/livepeer-ai-job-tester` | REVIEW | Referenced in Cloud SPE treasury proposal — verify repo still active |
| Stream tester | `github.com/livepeer/stream-tester` | ✅ exists | Official repo — verify current maintenance status |
| AI compute visualiser | `livepeer-ai-compute-visualizer.streamlit.app` | REVIEW | Noted as incomplete per Notion |
| `livepioneersbeta.com` | not checked | REVIEW | Mentioned in Notion but as gap example, not recommendation |
| Dune dashboards | `dune.com/rickstaa/...` | REVIEW | From Notion Onboarding page — verify public and current |

---

### 1.2 Confirmed Technical Facts — Prometheus Monitoring

**Flag:** `-monitor` (not `-metrics`, not `-monitor=true`) — confirmed from live v1 docs and monitoring repo
**Metrics endpoint:** `localhost:7935/metrics` (default CLI port; same port, `/metrics` path)
**Official Docker image:** `github.com/livepeer/livepeer-monitoring` → `livepeer/monitoring:latest`
- Bundles Prometheus + Grafana with starter dashboard templates
- Run: `docker run --net=host --env LP_MODE=standalone --env LP_NODES=localhost:7935 livepeer/monitoring:latest`
- Multiple nodes: `--nodes=localhost:7935,localhost:7936`

**What it exposes:** session counts, segment success/failure rates, winning ticket counts, latency, GPU utilisation (when available), job throughput

**Alert rules in official stack (from Speedy Bird community guide — REVIEW):**
- `InstanceDown` — metrics unreachable
- `HighLoadSessionCapacity` — &gt;85% of maxSessions
- `ProcessTooManyRestarts` — &gt;2 restarts in 15 min
- `BlockwatchFailure` — Arbitrum RPC endpoint issue
- `OrchestratorOverloaded` — OrchestratorBusy errors in logs
- `GasPriceTooHigh` — gas price exceeds configured threshold

---

### 1.3 Confirmed Technical Facts — Livepeer Explorer

**URL:** `explorer.livepeer.org` ✅  
**Source:** Livepeer Inc — official, on-chain data from Arbitrum subgraph

**What it shows (confirmed from live site + docs):**
- Orchestrator list — all registered orchestrators, sortable by stake
- Active set indicator — top 100 by stake receive jobs; your rank shows whether you are in the set
- Individual orchestrator page: total stake, delegated stake, own stake, fee cut, reward cut, reward call history, delegator list, fees earned
- AI performance leaderboard — added Q4 2024 per Cloud SPE treasury proposal (verify current state)
- Staking UI — delegate/undelegate LPT
- Governance / voting — LIP voting, treasury proposals

**Known issues (from Notion Explorer Features + Audit Review):**
- Outdated `@livepeer/design-system` dependencies — performance and stability impact
- Some data inaccuracies in pending stake display (explorer/issues/244)
- Forecasted yield not including treasury cut (explorer/issues/308) — may be fixed under RFP
- Explorer RFP: maintenance + improvements contracted to RaidGuild, target completion Feb 2026. Status as of March 2026: REVIEW — some issues may be resolved. Do not mark specific bugs as fixed without verifying.
- `livepeer.tools` was separately noted as "not linked from the official explorer" — confirmed still not linked; now confirmed down.

---

### 1.4 tools.livepeer.cloud — Confirmed Features

Cloud SPE-built suite. `livepeer.tools` is dead. `tools.livepeer.cloud` is the current home.

Confirmed sections from URL structure + referenced content:
- `/ai/network-capabilities` — lists all AI-capable orchestrators per pipeline, warm/cold status
- Payout reports — daily/weekly/monthly earnings breakdowns
- Orchestrator view — per-orchestrator stats

**Status note from Notion (Sthuka data report):** "valuable but unstable and not linked from the official explorer." The instability note was from late 2025 under the `livepeer.tools` domain. With migration to `tools.livepeer.cloud` the situation may have improved, but this is Community SPE infrastructure, not Foundation-operated. Note this in the page.

---

### 1.5 Dune Dashboards — Status

From Notion Onboarding page (canonical reference):
- Growth Dashboard: `dune.com/rickstaa/livepeer-growth-dashboard`
- Governance Dashboard: `dune.com/rickstaa/livepeer-governance-dashboard`
- Token Dashboard: `dune.com/stronk/livepeer-arbitrum`

**REVIEW:** Verify all three are public and currently maintained before including. Rick Staa is `@rickstaa`, who is active — likely current. Include with REVIEW marker.

---

### 1.6 What Changed Since v1 Docs

**The original stub to overwrite:**
```
## Official Livepeer Tools & Dashboards
Explorer
Cloud.tools

## Community Tools
Collection of Community tooling (if available - titan?)
<Note> Automation from a google sheet </Note>
Add your Orchestrator helper to the [google sheet here]()
```

- `livepeer.tools` (linked in v1 docs as community tool) is now DOWN — do not carry forward
- Google Sheet link was broken — do not carry forward
- "if available - titan?" — remove entirely
- No Prometheus monitoring section existed — new content
- No AI-specific tools existed — new content
- Dune dashboards not in v1 — new content

---

### 1.7 SME Review Items

| # | Item | Owner |
|---|---|---|
| 1 | Explorer RFP completion status — which specific bugs/features were delivered? | Rich / Rick |
| 2 | AI performance leaderboard in Explorer — is it live and functional? | Rick / Cloud SPE |
| 3 | `github.com/mikezupper/livepeer-ai-job-tester` — still maintained? | Mike Zupper / Discord |
| 4 | Dune dashboards (3 links) — still public and current? | Rick / Stronk |
| 5 | `livepeer-ai-compute-visualizer.streamlit.app` — still live? Worth linking with caveats? | Cloud SPE |
| 6 | `livepioneersbeta.com` — still live? Worth linking? | Community |
| 7 | tools.livepeer.cloud stability status — has migration from livepeer.tools resolved instability? | Cloud SPE / Mike Zupper |

---

## Part 2 — Draft MDX: `tooling.mdx`

```mdx
---
title: 'Orchestrator Tools'
description: 'Tools for monitoring, verifying, and operating your Livepeer orchestrator — Explorer, payout dashboards, Prometheus metrics, and community tools.'
sidebarTitle: 'Tools'
pageType: 'reference'
audience: 'orchestrator'
status: 'current'
---

Once your node is running, these are the tools you will use to verify you are in the active set, track earnings, monitor node health, and diagnose issues.

---

## Livepeer Explorer

**URL:** [explorer.livepeer.org](https://explorer.livepeer.org)  
**Operated by:** Livepeer Inc

The Explorer is the primary on-chain dashboard for the Livepeer protocol. It reads directly from the Arbitrum subgraph and is the authoritative source for staking and earnings data.

**Key uses for orchestrators:**

- **Active set status** — the protocol allows up to 100 orchestrators to receive jobs at any time, determined by total stake (own + delegated). Check your rank on the orchestrator list to confirm whether you are in the active set.
- **Reward call history** — reward calls mint new LPT and are required each round. Missing calls loses inflation rewards. Your orchestrator page shows your call history.
- **Earnings** — cumulative fees earned, broken down by transcoding fees (ETH) and inflation rewards (LPT).
- **Delegator list** — see who has staked to you and their stake amounts.
- **Fee and reward cut settings** — verify your published cuts match what you configured on-chain.
- **Governance** — vote on Livepeer Improvement Proposals (LIPs) and treasury proposals.
- **AI performance leaderboard** — per-orchestrator performance metrics for AI inference jobs. <!-- REVIEW: verify this feature is live and functional post-RFP -->

The Explorer underwent a maintenance engagement (RaidGuild, contracted late 2025) to address dependency updates, performance issues, and data accuracy. Some known issues from prior to that work may have been resolved. <!-- REVIEW: confirm which specific fixes landed before publication -->

---

## Node Metrics (Prometheus)

go-livepeer exposes a Prometheus metrics endpoint that you can scrape with any standard monitoring stack.

**Enable with:**
```bash
livepeer \
  -orchestrator \
  -transcoder \
  -monitor \        # enables the /metrics endpoint
  ... other flags
```

**Metrics endpoint:** `http://localhost:7935/metrics`

The port is the same as the CLI port (`7935` by default). The `-monitor` flag activates the `/metrics` path on that port.

**What it exposes:**
- Session counts and capacity utilisation
- Segment success and failure rates
- Winning ticket counts (approximated from Prometheus scrape intervals)
- Job processing latency
- GPU utilisation (where available)

**Official monitoring stack:**

Livepeer maintains a Docker image that bundles Prometheus and Grafana with starter dashboard templates:

```bash
docker run --net=host \
  --env LP_MODE=standalone \
  --env LP_NODES=localhost:7935 \
  livepeer/monitoring:latest
```

Repo: [github.com/livepeer/livepeer-monitoring](https://github.com/livepeer/livepeer-monitoring)

For multi-node setups, pass a comma-separated list to `LP_NODES`. For Kubernetes deployments, the image supports automatic discovery via `prometheus.io/scrape` labels.

<Note>
For an example of a production monitoring setup with alerting (Alertmanager, Loki, Grafana), see the community guide at speedybird.xyz. [//]: # (REVIEW: verify URL before linking)
</Note>

---

## Cloud SPE Tools

**URL:** [tools.livepeer.cloud](https://tools.livepeer.cloud)  
**Operated by:** Livepeer Cloud SPE (community)

A community-built suite of orchestrator and network monitoring tools maintained by the Cloud SPE.

**Key sections:**

- **AI network capabilities** (`/ai/network-capabilities`) — lists all AI-capable orchestrators by pipeline, showing which models are warm. Use this to verify your AI pipeline registrations are visible to the network after configuring `aiModels.json`.
- **Payout reports** — daily, weekly, and monthly earnings breakdowns per orchestrator address.
- **Orchestrator view** — per-orchestrator statistics including pricing and job activity.

<Warning>
This is community infrastructure, not operated by the Livepeer Foundation. It has experienced intermittent availability in the past. Do not rely on it as your sole monitoring source.
</Warning>

---

## Network Dashboards (Dune Analytics)

For protocol-level data — inflation, staking participation, fee volumes, token distribution — the Foundation maintains Dune dashboards:

| Dashboard | URL |
|---|---|
| Growth Dashboard | [dune.com/rickstaa/livepeer-growth-dashboard](https://dune.com/rickstaa/livepeer-growth-dashboard) |
| Governance Dashboard | [dune.com/rickstaa/livepeer-governance-dashboard](https://dune.com/rickstaa/livepeer-governance-dashboard) |
| Token Dashboard | [dune.com/stronk/livepeer-arbitrum](https://dune.com/stronk/livepeer-arbitrum) |

[//]: # (REVIEW: verify all three are still public and current before publication)

These are most useful for understanding macro network trends — staking participation, inflation rate, total fees — rather than per-node operational monitoring.

---

## Capability Testing

These tools let you verify that your node is correctly serving jobs, either by submitting test transcoding segments or test AI inference requests.

**Stream tester** — [github.com/livepeer/stream-tester](https://github.com/livepeer/stream-tester)  
Submits transcoding jobs to an orchestrator and measures response times and success rates. Used for transcoding capability validation.

**AI job tester** — [github.com/mikezupper/livepeer-ai-job-tester](https://github.com/mikezupper/livepeer-ai-job-tester)  
Community-built tool (Cloud SPE) that submits AI inference jobs to an orchestrator and records performance. Used to verify AI pipeline availability before relying on network job routing.  
[//]: # (REVIEW: confirm repo is still maintained)

---

## See Also

<CardGroup cols={2}>
  <Card title="Earnings and Economics" href="/v2/orchestrators/advanced/earnings" />
  <Card title="AI Pipelines" href="/v2/orchestrators/advanced/ai-pipelines" />
  <Card title="FAQ and Troubleshooting" href="/v2/orchestrators/resources/faq" />
  <Card title="CLI Flags Reference" href="/v2/resources/cli-flags" />
</CardGroup>
```
