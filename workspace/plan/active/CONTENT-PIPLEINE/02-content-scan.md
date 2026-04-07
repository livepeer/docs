# 02 - Content Scan: Orchestrators Tab

**Date**: 2026-03-23
**Scope**: All live MDX pages in v2/orchestrators/ (excluding _workspace, x-archived, x-deprecated)

---

## Entry Points

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 1 | v2/orchestrators/portal.mdx | Orchestrator Portal | landing | current | Hero landing page with card navigation to key sections. Docker pull CTA. React components (PortalHeroContent, Starfield). | Pre-S1 (landing) |
| 2 | v2/orchestrators/navigator.mdx | Find Your Path | landing | current | Decision tree navigator routing operators by situation: try Livepeer, evaluating, pool worker, solo setup, adding AI, scaling up. | S1 |
| 3 | v2/orchestrators/index.mdx | Orchestrators Index | overview | current | Auto-generated table of contents for all orchestrator pages. | Unmapped (generated index) |

## Concepts

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 4 | v2/orchestrators/concepts/role.mdx | The Orchestrator Role | overview | current | Three background accordions, role history timeline 2017-2026, five deployment types, four operator personas, protocol contract interactions. | S2, S3 |
| 5 | v2/orchestrators/concepts/capabilities.mdx | Orchestrator Capabilities | concept | current | Workload types, gateway selection signals, capability advertisement. | S3 |
| 6 | v2/orchestrators/concepts/architecture.mdx | Orchestrator Architecture | concept | current | Layer position, internal components, request flow, GPU worker management, protocol interactions. | S3 |
| 7 | v2/orchestrators/concepts/incentive-model.mdx | Orchestrator Incentive Model | concept | current | Two revenue streams (ETH fees + LPT rewards), pricing units, fee/reward cut mechanics, cost structure, payment flow, operator models. | S2, S3 |
| 8 | v2/orchestrators/concepts/composable/orchestratorRole.mdx | Orchestrator Role Diagram | (composable) | (varies) | Composable diagram component for orchestrator role. | Unmapped (component) |

## Quickstart

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 9 | v2/orchestrators/quickstart/guide.mdx | Orchestrator Quickstart | overview | current | Overview for two off-chain smoke tests (video 20-30 min, AI 35-65 min). Docker only. No Arbitrum, no LPT. | Pre-S4 (smoke test) |
| 10 | v2/orchestrators/quickstart/video-transcoding.mdx | Verify Your Hardware | quickstart | current | Video transcoding + AI inference smoke tests on one page. Docker-only, no on-chain. | Pre-S4 (smoke test) |
| 11 | v2/orchestrators/quickstart/tutorial.mdx | Quickstart Tutorial | tutorial | current | Shortest guided path from hardware check to off-chain smoke test. Routes to quickstart overview and video-transcoding test. | Pre-S4 (smoke test) |
| 12 | v2/orchestrators/quickstart/AI-prompt-start.mdx | Add AI to Your Node | guide | review | Add AI inference pipelines to existing node: hardware check, aiModels.json config, startup command update. | S8 |
| 13 | v2/orchestrators/quickstart/dep-x-setup-paths.mdx | How to Get Started | overview | current | Path selection table (pool worker, solo, pool operator, enterprise). Card navigation to each path. | S1 |

## Setup

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 14 | v2/orchestrators/setup/guide.mdx | Run an Orchestrator | overview | current | 4-step setup flow (Install -> Configure -> Connect -> Verify). Requirements table. | S4, S5 |
| 15 | v2/orchestrators/setup/prepare.mdx | Setup Checklist | how_to | current | Pre-flight checklist by node mode (Video/AI/Dual). Hardware tables per mode. | S4 |
| 16 | v2/orchestrators/setup/rs-install.mdx | Install go-livepeer | how_to | current | Docker install (recommended), binary install, NVIDIA Container Toolkit setup. | S5 |
| 17 | v2/orchestrators/setup/configure.mdx | Configure Your Orchestrator | how_to | current | docker-compose templates for three modes (video, AI, dual). Flag configuration. | S5 |
| 18 | v2/orchestrators/setup/connect-and-activate.mdx | Connect to Arbitrum | how_to | current | On-chain connection: Arbitrum RPC, wallet, stake LPT, register service URI, activate. | S4, S5 |
| 19 | v2/orchestrators/setup/test.mdx | Verify your setup | (verify) | current | Verification checklist: on-chain, transcoding, AI, reward calling, metrics. | S9 |
| 20 | v2/orchestrators/setup/r-monitor.mdx | Monitor | guide | current | Post-activation monitoring setup. | S10 |
| 21 | v2/orchestrators/setup/s-guide.mdx | Setting up an Orchestrator | overview | (varies) | Older setup checklist referencing different page paths (hardware-requirements, install-go-livepeer, etc.). Appears to be a deprecated variant. | S5 (duplicate) |
| 22 | v2/orchestrators/setup/x-test.mdx | Testing Your Orchestrator Setup | landing | draft | Stub/placeholder page for testing. Audience set to "developer". | Unmapped (stub) |

## Guides: Operator Considerations

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 23 | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | Operating Rationale | guide | current | Cost categories, revenue streams, viability thresholds, decision matrix (pool vs solo vs AI-first). | S2 |
| 24 | v2/orchestrators/guides/operator-considerations/business-case.mdx | Business Case | guide | current | Commercial orchestrator operations: service fees, gateway relationships, pricing strategy. | S2, S11 |
| 25 | v2/orchestrators/guides/operator-considerations/operator-impact.mdx | Operator Impact | guide | current | Governance weight, voting, sovereign compute thesis. | Unmapped (governance/community) |
| 26 | v2/orchestrators/guides/operator-considerations/requirements.mdx | Requirements | reference | (varies) | GPU support, NVENC session limits, VRAM by pipeline, system minimums, livepeer_bench, readiness checklist. | S4 |

## Guides: Deployment Details

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 27 | v2/orchestrators/guides/deployment-details/setup-options.mdx | Setup Options | overview | current | Overview of deployment configuration options: on-chain, off-chain, siphon, pool, solo, dual mode. | S1 |
| 28 | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | Join a Pool | quickstart | current | Pool vs solo comparison. Steps to join. Only known pool: Titan Node. | S6 |
| 29 | v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx | Join a Pool (new) | guide | current | Updated/expanded pool joining guide. | S6 |
| 30 | v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx | O-T Split | guide | current | Separate orchestrator and transcoder processes. Scaling transcoders independently. | S5 (advanced variant) |
| 31 | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | Dual-Mode Configuration | (varies) | current | Simultaneous video and AI workload configuration. | S5, S8 |
| 32 | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | Siphon Split Setup | guide | current | Two-machine architecture using OrchestratorSiphon: installation, config, systemd, operations. | S5 (variant) |

## Guides: AI and Job Workloads

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 33 | v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx | Workload Options | concept | published | Four job types (video, batch AI, live AI Cascade, LLM). Hardware, pricing model, routing per type. | S3 |
| 34 | v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx | Video Transcoding Operations | (varies) | published | Running video transcoding workloads operationally. | S5, S10 |
| 35 | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | AI Inference Operations | (varies) | published | Running AI inference workloads operationally. | S8, S10 |
| 36 | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | Diffusion Pipeline Setup | (varies) | published | Setting up Stable Diffusion / image generation pipelines. | S8 |
| 37 | v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx | LLM Pipeline Setup | (varies) | published | LLM (Ollama-based) pipeline configuration. | S8 |
| 38 | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | Realtime AI Setup | (varies) | published | Live AI (Cascade) setup. | S8 |
| 39 | v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx | Audio and Vision Pipelines | (varies) | published | Audio-to-text, image-to-image, segment-anything-2, upscale pipelines. | S8 |
| 40 | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | Model Demand Reference | (varies) | published | Which models have demand on the network. | S8, S11 |
| 41 | v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx | Model Hosting | (varies) | published | How to host models, VRAM management. | S8 |

## Guides: Staking and Rewards

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 42 | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | Earning Model | concept | published | Two streams: ETH fees + LPT rewards. PM ticket system. Both require active set. | S3 |
| 43 | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | Reward Mechanics | guide | published | LPT flow per round, LIP-89 Treasury 10%, auto vs manual calling, gas thresholds, missed rounds. | S3, S10 |
| 44 | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | Delegate Operations | (varies) | published | Attracting and retaining delegators: evaluation criteria, ROI formulas, commission strategy. | S7, S11 |
| 45 | v2/orchestrators/guides/staking-and-rewards/network-participation.mdx | Network Participation | (varies) | published | Governance voting via livepeer_cli, LIPs, finding polls, verifying votes. | Unmapped (governance) |

## Guides: Payments and Pricing

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 46 | v2/orchestrators/guides/payments-and-pricing/payments.mdx | Payments | (varies) | published | PM ticket mechanics, winning ticket, Redeemer, on-chain redemption on Arbitrum. | S3 |
| 47 | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | Payment Receipts | (varies) | published | Ticket arrival, win mechanics, Redeemer submission, verification. | S3, S10 |

## Guides: Config and Optimisation

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 48 | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | Pricing Strategy | how_to | draft | Video wei/pixel pricing, AI per-pipeline pricing, per-gateway pricing, autoAdjustPrice, market positioning. | S7 |
| 49 | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | Capacity Planning | (varies) | (varies) | maxSessions, livepeer_bench, bandwidth, NVENC limits, VRAM budgeting. | S4, S11 |
| 50 | v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx | AI Model Management | (varies) | (varies) | Warm/cold model strategy, VRAM allocation, model rotation, optimisation flags. | S8, S11 |
| 51 | v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx | Reward Call Tuning | (varies) | (varies) | Profitability calculation, auto vs manual calling, gas cost optimisation. | S10, S11 |

## Guides: Monitoring and Tooling

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 52 | v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx | Troubleshooting | guide | published | Categorised errors: transcoding, GPU/memory, reward/gas, AI runner, networking, account. | S12 |
| 53 | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | Metrics and Alerting | (varies) | published | Prometheus, Grafana, Docker monitoring stack, -monitor flag, AI runner monitoring. | S10 |
| 54 | v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx | Explorer Operations | (varies) | published | Every Explorer metric explained: what each number means, healthy ranges, actions. | S10 |
| 55 | v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | Operator Toolbox | (varies) | published | Tools index: Explorer, Prometheus, Docker monitoring, community dashboards, testing utilities. | S10 |

## Guides: Advanced Operations

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 56 | v2/orchestrators/guides/advanced-operations/dep-guide.mdx | Advanced Operations Guide | overview | (varies) | Overview of advanced operations: AI, economics, governance, monitoring, fleet. | Unmapped (overview) |
| 57 | v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx | Gateway-Orchestrator Interface | (varies) | published | gRPC interface between gateway and orchestrator. | S3 |
| 58 | v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx | Gateway Relationships | (varies) | published | How gateways discover and select orchestrators. Selection algorithm, Loki API. | S3, S11 |
| 59 | v2/orchestrators/guides/advanced-operations/pool-operators.mdx | Pool Operators | (varies) | published | Running a pool: accepting workers, managing stake, distributing rewards. | S6 (advanced) |
| 60 | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | Scale Operations | (varies) | published | Multi-node, fleet management, commercial scale. | S11 (advanced) |

## Guides: Roadmap and Funding

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 61 | v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx | Orchestrator Profiles | (varies) | current | Showcase of notable orchestrators. | Unmapped (community) |
| 62 | v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx | Funding and Support | (varies) | current | Funding programmes, grants, SPE, AI Video Startup Programme. | Unmapped (community) |

## Guides: Tutorials

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 63 | v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx | BYOC CPU Smoke Test | tutorial | (varies) | Verify Livepeer framework, no GPU, no wallet, no on-chain. Under 20 min. | Pre-S4 (smoke test) |
| 64 | v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx | Zero to First Reward | tutorial | (varies) | End-to-end: install, configure, fund, stake, activate, claim first reward. | S4, S5, S9 |
| 65 | v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx | AI Earning Quickstart | tutorial | (varies) | Start earning from AI inference in under 2 hours. One GPU, one warm model. | S8 |
| 66 | v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx | Add AI to Video Node | tutorial | (varies) | Extend video-only node to AI. Configuration delta, VRAM check, dual earnings verification. | S8 |
| 67 | v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx | Full AI Pipeline Tutorial | tutorial | (varies) | End-to-end: gateway routes inference to orchestrator, AI runner processes, result returns. | S8 |
| 68 | v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx | Realtime AI Tutorial | tutorial | (varies) | Live video-to-video AI with ComfyStream and Cascade. | S8 |
| 69 | v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx | BYOC CPU Tutorial | (varies) | (varies) | Complete gateway+orchestrator BYOC test. CPU Docker container. Off-chain to on-chain graduation. | S8, Pre-S4 |
| 70 | v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx | Add AI: BYOC CPU Pipeline | stub | stub | Stub page. Content to be developed. | Unmapped (stub) |
| 71 | v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx | Go Production | stub | stub | Stub page. Content to be developed. | Unmapped (stub) |
| 72 | v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx | First Gateway: Off-chain Test | stub | stub | Stub page. Content to be developed. | Unmapped (stub) |

## Resources

| # | File path | Title | pageType | status | Content summary | IA section |
|---|-----------|-------|----------|--------|-----------------|------------|
| 73 | v2/orchestrators/resources/faq.mdx | FAQ and Troubleshooting | reference | review | Common errors and FAQs. Symptom-indexed. | S12 |
| 74 | v2/orchestrators/resources/glossary.mdx | Orchestrator Glossary | glossary | current | Full terminology: deployment axes, node modes, protocol terms, operational terms, economic terms, deprecated terms. | Cross-section reference |
| 75 | v2/orchestrators/resources/compendium/glossary.mdx | Compendium Glossary | reference | draft | Expanded compendium-level glossary. | Cross-section reference |
| 76 | v2/orchestrators/resources/community-guides.mdx | Community Guides | (varies) | (varies) | External tutorials, video walkthroughs, community resources. | Cross-section reference |
| 77 | v2/orchestrators/resources/community-pools.mdx | Community Pools | reference | review | Pool listing page. Not endorsed. | S6 |
| 78 | v2/orchestrators/resources/gpu-support.mdx | GPU Support Matrix | (varies) | (varies) | NVIDIA GPU compatibility, NVENC/NVDEC session limits, driver requirements. | S4 |
| 79 | v2/orchestrators/resources/technical/cli-flags.mdx | CLI Flags Reference | reference | review | go-livepeer CLI flags and gRPC field mapping. | Cross-section reference |
| 80 | v2/orchestrators/resources/technical/x-changelog.mdx | X-changelog | landing | draft | Stub/placeholder. | Unmapped (stub) |
| 81 | v2/orchestrators/resources/technical/x-contract-addresses.mdx | Contract Addresses | landing | draft | Stub/placeholder with typo in title. | Cross-section reference |
| 82 | v2/orchestrators/resources/technical/x-support-status.mdx | Support Status | (varies) | (varies) | Planned status page for supported/experimental/deprecated features. | Unmapped (meta) |
| 83 | v2/orchestrators/resources/technical/x-troubleshooting.mdx | Troubleshooting | landing | draft | Stub/placeholder. Audience set to "developer". | Unmapped (stub) |
| 84 | v2/orchestrators/resources/x-guides.mdx | Orchestrator Guides | reference | review | Curated guide index. | Unmapped (index) |
| 85 | v2/orchestrators/resources/x-help.mdx | X-help | landing | draft | Stub/placeholder. | Unmapped (stub) |
| 86 | v2/orchestrators/resources/x-payments.mdx | Orchestrator Payments | (varies) | (varies) | Payment setup guidance. | S3 |
| 87 | v2/orchestrators/resources/arbitrum-rpc.mdx | Arbitrum RPCs | (varies) | (varies) | RPC endpoint options, provider comparison, rate limits. | S4 |
| 88 | v2/orchestrators/resources/arbitrum-exchanges.mdx | Arbitrum Exchanges | (varies) | (varies) | Where to acquire ETH and LPT on Arbitrum. | S4 |

---

## Summary

- **Total live MDX files scanned**: 88
- **Mapped to IA sections**: 68
- **Unmapped**: 20 (stubs, generated indexes, meta pages, community/governance content)
- **Stubs/placeholders**: 7 (x-test, x-changelog, x-help, x-contract-addresses, x-troubleshooting, 3 tutorial stubs)
- **Duplicate/variant pages**: 3 (s-guide.mdx, new-join-a-pool.mdx, dep-x-setup-paths.mdx)
