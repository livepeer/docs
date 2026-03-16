# Orchestrator Guides Restructure Plan

## Agreed Structure (6 Groups, ~20 pages)

**Flow: Am I in? → How do I set up? → What do I run? → How do I earn? → Is it healthy? → How do I scale?**

---

### Group 1: Is It Worth It? (Feasibility)
*For: someone browsing, not yet committed*

| Page | What it answers | Source |
|------|----------------|--------|
| **Feasibility & Economics** | Do I have the right GPU? Can I be competitive? What will I earn vs spend? Cost categories (hardware, stake, gas, bandwidth), profitability thresholds, GPU tier guidance. | `p-feasibility.mdx` (placeholder) + v1 `set-pricing.mdx`, v1 `configure-reward-calling.mdx`, v1 `yield-calculation.mdx`, v1 `assess-capabilities.mdx` |
| **Hardware & Capabilities** | What GPU do I need for which workloads? NVIDIA support matrix, VRAM by pipeline, bandwidth requirements, session limits per GPU model. | v1 `assess-capabilities.mdx`, v1 `set-session-limits.mdx`, v1 `benchmark-transcoding.mdx`, updated `model-vram-reference.mdx` |

### Group 2: Setup Paths
*For: decided to run, choosing how*

| Page | What it answers | Source |
|------|----------------|--------|
| **Navigator (Find Your Path)** | Decision tree: pool worker vs solo orchestrator vs pool operator vs siphon split setup. | `rc-alternate-setups.mdx` (already good) |
| **Join a Pool** | Lowest-friction GPU contribution. Due diligence, connect GPU, earn. | `join-a-pool.mdx` (already solid) |
| **Siphon Setup** | Split keystore/rewards from workload processing — the non-go-livepeer path. | `x-siphon-setup.mdx` (needs writing) |

### Group 3: Workloads
*For: running operator configuring what jobs to accept*

| Page | What it answers | Source |
|------|----------------|--------|
| **Job Types Overview** | All workload categories side by side — transcoding, batch AI, realtime AI, LLM. | `rs-workloads.mdx` (clean up REVIEW flags) |
| **Video Transcoding** | How do I configure and optimize transcoding? Pricing (wei/pixel, fiat via Chainlink), session limits, benchmarking, GPU vs CPU. | v1 `set-pricing.mdx`, v1 `benchmark-transcoding.mdx`, v1 `set-session-limits.mdx` |
| **AI Workloads Overview** | Batch vs realtime distinction, how the network routes AI jobs, all 10 pipelines. | updated `ai-workloads-guide.mdx` |
| **Batch AI Setup** | aiModels.json config, Ollama LLM runner, warm/cold models, BYOC, pricing, troubleshooting. | updated `batch-ai-setup.mdx` |
| **Realtime AI Setup** | Cascade architecture, ComfyStream, WebRTC, multi-stream capacity. | updated `realtime-ai-setup.mdx` |
| **Models & VRAM Reference** | VRAM planning by pipeline, GPU tier recs, aiModels.json schema, pricing reference. | updated `model-vram-reference.mdx` |

### Group 4: Staking & Rewards
*For: earning and growing stake weight*

| Page | What it answers | Source |
|------|----------------|--------|
| **Earnings Explained** | Revenue streams (ETH fees + LPT inflation), commission parameters, what wins jobs. | `earnings.mdx` (already comprehensive) |
| **Rewards & Fees** | Protocol rewards vs job fees mechanics, reward() calls, gas costs. | `rs-rewards-and-fees.mdx` + v1 `configure-reward-calling.mdx` |
| **Getting Delegates** | How to attract and retain delegators — competitive rates, uptime, reputation, what delegators evaluate when choosing you. | New page, informed by v1 `yield-calculation.mdx`, `rcs-staking-lpt.mdx` |
| **Payments** | Probabilistic micropayments flow, gateway-to-orchestrator payment mechanics. | `x-payments.mdx` (needs writing) |
| **Governance & Voting** | Voting on LIPs via livepeer_cli. | v1 `vote.mdx` |

### Group 5: Monitoring & Troubleshooting
*For: running operator keeping things healthy*

| Page | What it answers | Source |
|------|----------------|--------|
| **Orchestrator Tools** | Overview of all available tools and when to use each. | `rcs-tooling.mdx` (already good) |
| **Livepeer Explorer** | Full Explorer walkthrough — every metric, how to interpret it, what actions to take. Deliverable-level page. | New page (deliverable) |
| **Metrics & Monitoring** | Prometheus setup, Grafana dashboards, Docker monitoring stack, per-stream metrics, verbose logging. | v1 `monitor-metrics.mdx` |
| **Troubleshooting** | Common errors and fixes: OrchestratorCapped, memory allocation, GPU limits, TicketParams, networking/NAT/hairpinning, service address issues. | v1 `troubleshoot.mdx` + AI Pipelines troubleshooting accordions |

### Group 6: Advanced Operations
*For: scaling up*

| Page | What it answers | Source |
|------|----------------|--------|
| **Run a Pool** | Aggregating workers behind your orchestrator identity. | `r-run-a-pool.mdx` (already solid) |
| **Gateway Relationships** | How gateways discover you, capability advertisement, serviceAddr. | `p-gateways.mdx` |
| **Fleet Operations** | Multi-node, data centre, capacity management. | `p-fleet-ops.mdx` |
| **Split Orchestrator-Transcoder** | Running separate O and T machines for scale. | v1 `o-t-split.mdx` |

---

## V1 Pages Copied to v2/orchestrators/v1/ (for reference)

| V1 File | Primary use in V2 |
|---------|-------------------|
| `troubleshoot.mdx` | → Troubleshooting (15+ real errors with fixes) |
| `monitor-metrics.mdx` | → Metrics & Monitoring (Prometheus/Grafana) |
| `benchmark-transcoding.mdx` | → Video Transcoding + Hardware & Capabilities |
| `set-pricing.mdx` | → Video Transcoding + Feasibility |
| `set-session-limits.mdx` | → Video Transcoding + Hardware & Capabilities |
| `assess-capabilities.mdx` | → Hardware & Capabilities |
| `configure-reward-calling.mdx` | → Rewards & Fees |
| `yield-calculation.mdx` | → Getting Delegates (what delegators calculate) |
| `vote.mdx` | → Governance & Voting |
| `o-t-split.mdx` | → Advanced Ops |
| `gateway-introspection.mdx` | → Gateway Relationships |

## Notes
- Run a Pool moved to Advanced Ops (per user feedback)
- Siphon kept in Setup Paths (most people not using go-livepeer want this)
- Staking & Delegates are separate concerns: staking = your mechanics, delegates = attracting them
- Explorer is a deliverable — full metrics walkthrough page
- Smoke Test belongs in Setup section (not guides)
- Feasibility group addresses "is it worth it / do I have the right GPU" browsing audience