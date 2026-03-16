Revised Guides Structure
Group 1: Is It Worth It? (Feasibility)
For: someone browsing, not yet committed

Page	What it answers	Source
Feasibility & Economics	"Do I have the right GPU? Can I be competitive? What will I earn vs spend?" Cost categories (hardware, stake, gas, bandwidth), profitability thresholds, GPU tier guidance.	p-feasibility.mdx (placeholder) + v1 set-pricing.mdx (gas/redemption costs), v1 configure-reward-calling.mdx (gas thresholds), v1 yield-calculation.mdx (full ROI math), v1 assess-capabilities.mdx (GPU support matrix)
Hardware & Capabilities	"What GPU do I need for which workloads?" NVIDIA support matrix, VRAM by pipeline, bandwidth requirements, session limits per GPU model.	v1 assess-capabilities.mdx, v1 set-session-limits.mdx (bandwidth formulas: 6Mbps down + 5.6Mbps up per stream), v1 benchmark-transcoding.mdx, updated model-vram-reference.mdx (AI VRAM tiers)
Group 2: Setup Paths
For: decided to run, choosing how

Page	What it answers	Source
Navigator (Find Your Path)	Decision tree: pool worker vs solo orchestrator vs pool operator vs siphon split setup.	rc-alternate-setups.mdx (already good)
Join a Pool	Lowest-friction GPU contribution. Due diligence, connect GPU, earn.	join-a-pool.mdx (already solid)
Run a Pool	Aggregating workers behind your orchestrator identity.	r-run-a-pool.mdx (already solid)
Siphon Setup	Split keystore/rewards from workload processing — the non-go-livepeer path.	x-siphon-setup.mdx (needs writing)
Group 3: Workloads
For: running operator configuring what jobs to accept

Page	What it answers	Source
Job Types Overview	All workload categories side by side — transcoding, batch AI, realtime AI, LLM.	rs-workloads.mdx (clean up REVIEW flags)
Video Transcoding	"How do I configure and optimize transcoding?" Pricing (wei/pixel, fiat via Chainlink), session limits, benchmarking, GPU vs CPU.	v1 set-pricing.mdx, v1 benchmark-transcoding.mdx, v1 set-session-limits.mdx — this is the missing video transcoding guide
AI Workloads Overview	Batch vs realtime distinction, how the network routes AI jobs, all 10 pipelines.	updated ai-workloads-guide.mdx
Batch AI Setup	aiModels.json config, Ollama LLM runner, warm/cold models, BYOC, pricing, troubleshooting.	updated batch-ai-setup.mdx
Realtime AI Setup	Cascade architecture, ComfyStream, WebRTC, multi-stream capacity.	updated realtime-ai-setup.mdx
Models & VRAM Reference	VRAM planning by pipeline, GPU tier recs, aiModels.json schema, pricing reference.	updated model-vram-reference.mdx
Group 4: Staking & Rewards
For: earning and growing stake weight

Two distinct concerns: your stake/rewards mechanics vs getting delegates to increase your stake weight.

Page	What it answers	Source
Earnings Explained	Revenue streams (ETH fees + LPT inflation), commission parameters, what wins jobs.	earnings.mdx (already comprehensive)
Rewards & Fees	Protocol rewards vs job fees mechanics, reward() calls, gas costs.	rs-rewards-and-fees.mdx + v1 configure-reward-calling.mdx (gas estimation: 350k-450k, economic thresholds)
Getting Delegates	How to attract and retain delegators — competitive rates, uptime, reputation, what delegators evaluate when choosing you. The orchestrator's marketing/operations page.	New page, informed by v1 yield-calculation.mdx (what delegators calculate), rcs-staking-lpt.mdx (current content on attracting delegators)
Payments	Probabilistic micropayments flow, gateway-to-orchestrator payment mechanics.	x-payments.mdx (needs writing)
Governance & Voting	Voting on LIPs via livepeer_cli.	v1 vote.mdx (complete guide with contract addresses) — short page
Group 5: Monitoring & Troubleshooting
For: running operator keeping things healthy

Page	What it answers	Source
Orchestrator Tools	Overview of all available tools and when to use each.	rcs-tooling.mdx (already good)
Livepeer Explorer	Full Explorer walkthrough — every metric, how to interpret it, what actions to take. Deliverable-level page.	New page, informed by v1 Explorer references throughout + x-explorer.mdx
Metrics & Monitoring	Prometheus setup, Grafana dashboards, Docker monitoring stack, per-stream metrics, verbose logging.	v1 monitor-metrics.mdx (complete Prometheus/Grafana/Docker guide)
Troubleshooting	Common errors and fixes: OrchestratorCapped, memory allocation, GPU limits, TicketParams, networking/NAT/hairpinning, service address issues.	v1 troubleshoot.mdx (15+ documented errors with solutions) + AI Pipelines troubleshooting accordions
Group 6: Advanced Operations
For: scaling up

Page	What it answers	Source
Gateway Relationships	How gateways discover you, capability advertisement, serviceAddr.	p-gateways.mdx
Fleet Operations	Multi-node, data centre, capacity management.	p-fleet-ops.mdx
Split Orchestrator-Transcoder	Running separate O and T machines for scale.	v1 o-t-split.mdx (complete guide with secret management, multi-transcoder setup)
V1 Pages Worth Pulling Content From
V1 Page	Use in V2
troubleshoot.mdx	Direct port — 15+ real errors with real fixes
monitor-metrics.mdx	Direct port — Prometheus/Grafana setup
benchmark-transcoding.mdx	Into Video Transcoding workload page
set-pricing.mdx	Into Video Transcoding + Feasibility
set-session-limits.mdx	Into Video Transcoding + Hardware & Capabilities
assess-capabilities.mdx	Into Hardware & Capabilities
configure-reward-calling.mdx	Into Rewards & Fees
yield-calculation.mdx	Into Getting Delegates (what delegators calculate)
vote.mdx	Into Governance & Voting
o-t-split.mdx	Into Advanced Ops
gateway-introspection.mdx	Into Gateway Relationships
Total: ~20 pages across 6 groups
Each page has a clear user question it answers, a clear audience, and identified source content. The flow:

Am I in? → How do I set up? → What do I run? → How do I earn? → Is it healthy? → How do I scale?
