# Tier Questions: All Remaining Pages

Pre-work for section-by-section review. 5 Whys + tier questions per page completed BEFORE any editing session. Present to human for approval before writing.

Stubs and tutorials excluded (structure already defined in their PURPOSE comments).

<CustomDivider />

## Section 2: Deployment Details

### setup-options
**Real question**: "I'm ready to set up - which path matches my hardware, stake, and goals?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Which path fits me? | Solo. Pool node. O-T split. Siphon. Off-chain. |
| 1 | Why different paths? | Protocol control. GPU ownership. Keystore location. Reward responsibility. Capital requirement. Maintenance tolerance. |
| 2 | Risk per path? | Solo: single point of failure. Pool: payout dependency. O-T: infra overhead. Siphon: two-machine coordination. Off-chain: no discovery, no rewards. |
| 3 | What do I need? | LPT amount. GPU count. Machine count. Uptime tolerance. Protocol involvement preference. |
| 4 | Simplest for my situation? | No LPT/no ops → pool node. Full control → solo. Reward safety → siphon. GPU scaling → O-T. Private gateway → off-chain. |
| 5 | After choosing? | Solo → Setup Guide. Pool → Join a Pool. O-T → O-T Split. Siphon → Siphon Setup. |

### siphon-setup
**Real question**: "I want reward safety independent of GPU uptime - how does OrchestratorSiphon work and how do I set it up?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | What is Siphon? | Python tool on secure machine handles keystore + rewards. go-livepeer transcoder on GPU machine handles compute. |
| 1 | Why use it? | GPU restarts don't miss rewards. Keystore isolated from compute. Earn inflation before GPU ready. Independent upgrade cycles. Two-machine security model. |
| 2 | Tradeoffs? | Two machines to manage. Python dependency. Config sync between machines. Service URI updates when GPU changes. |
| 3 | What do I need? | LPT. 2 machines. Python on secure machine. Arbitrum RPC. GPU on compute machine. |
| 4 | How to set up? | Install OrchestratorSiphon. Configure config.ini. Start secure machine. Configure go-livepeer transcoder. Verify rewards. |
| 5 | After setup? | Monitor reward calls. GPU maintenance. Update service URI. |

### dual-mode-configuration
**Real question**: "I want to run both video and AI on one node - what changes and what stays the same?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | What changes? | Add -aiWorker, -aiModels, AI runner container. Everything else stays. |
| 1 | Why is this possible? | NVENC (video) and CUDA (AI) use separate execution paths. Dedicated silicon vs compute cores. VRAM shared but execution independent. |
| 2 | VRAM tradeoffs? | One warm AI model fits alongside video on 24 GB. Multiple models need more VRAM or cold loading. Model choice determines what fits. |
| 3 | What do I need? | Existing video setup. 16 GB+ VRAM (24 GB recommended). Docker. AI runner container. aiModels.json. |
| 4 | Fresh start vs adding to existing? | Fresh: unified docker-compose. Adding: three flags + container, no other changes. |
| 5 | After configuration? | Verify both workloads. Register AI capabilities. Monitor VRAM. |

### orchestrator-transcoder-setup
**Real question**: "I need to separate protocol operations from GPU compute across machines - how does the O-T split architecture work?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | What is O-T split? | Orchestrator process (protocol, routing, no GPU) on machine 1. Transcoder process (GPU compute) on machine 2+. Connected by shared secret. |
| 1 | Why split? | Keystore isolation. Independent GPU scaling. Stable reward calling from lightweight server. Role-optimised hardware. Foundation for pools. |
| 2 | Tradeoffs? | Two machines minimum. Shared secret management. Network between machines. More infrastructure to monitor. |
| 3 | What do I need? | LPT. 2+ machines. Shared orchSecret. Public IP on orchestrator. Arbitrum RPC on orchestrator. GPU on transcoder. |
| 4 | How to configure? | Orchestrator: -orchestrator -orchSecret. Transcoder: -transcoder -orchAddr -orchSecret -nvidia. |
| 5 | After setup? | Add more transcoders. Monitor both machines. Foundation for running a pool. |

### join-a-pool
**Real question**: "I want GPU earnings without protocol complexity - how do I find and join a pool?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | How to join? | Find a pool operator. Get orchAddr + orchSecret. Run go-livepeer -transcoder. |
| 1 | Why join a pool? | No LPT. No reward calling. No pricing decisions. No keystore. No protocol management. No upgrade responsibility. Passive GPU earnings. |
| 2 | Tradeoffs? | Dependent on pool operator for payouts. No on-chain earnings record. No pricing control. Must trust operator. Finding a pool is a social process (days). |
| 3 | What do I need? | NVIDIA GPU. Pool operator address + secret. Docker or go-livepeer binary. Nothing else. |
| 4 | How to evaluate pools? | Fee share %. Reliability/uptime history. Supported workloads. Operator reputation. Payout schedule. Discord/community presence. |
| 5 | After joining? | Monitor GPU. Check payouts. Consider going solo when LPT acquired. |

<CustomDivider />

## Section 3: Workloads and AI

### workload-options
**Real question**: "What types of compute work exist on Livepeer and which should I prioritise for my hardware?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | What work exists? | Video transcoding. Batch AI inference (10 pipelines). Live AI (Cascade). BYOC custom containers. |
| 1 | Why different types? | Protocol routes them through different mechanisms. Different GPU requirements. Different pricing models. Different demand levels. Different earning profiles. |
| 2 | Which earns most? | Video: steady, lower margin. AI: variable, higher margin. Live AI: highest per-second value, lowest volume. Demand shifts - check tools.livepeer.cloud. |
| 3 | What does my GPU support? | 4 GB: video only. 8 GB: video + LLM. 16 GB: video + basic diffusion. 24 GB+: all workloads including live AI. |
| 4 | Where to start? | Existing video operator → add AI (dual mode). New with 24 GB → diffusion setup. New with 8 GB → LLM setup. Any GPU → video transcoding. |
| 5 | Detail pages? | Video operations. AI inference operations. Diffusion setup. LLM setup. Realtime AI. Audio/vision. Model reference. |

### video-transcoding-operations
**Real question**: "How does video transcoding work from the orchestrator's perspective - segments, NVENC, pricing, and performance?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | How does it work? | Gateway sends 2-second segments. Node decodes (NVDEC), re-encodes to output profiles (NVENC), returns renditions. |
| 1 | Key mechanics? | Segment-based pipeline. NVENC hardware encoding. Codec support (H.264, VP8/VP9). Per-pixel pricing. Quality verification. |
| 2 | Capacity constraints? | NVENC concurrent session limits (3-8 on consumer GPUs). Bandwidth per stream (~6 Mbps down + ~5.6 Mbps up). Driver patch for session cap removal. |
| 3 | How is it priced? | -pricePerUnit in wei per pixel. Must be below gateway's -maxPricePerUnit. Check Explorer for competitive range. |
| 4 | Performance metrics? | Segments per second. Real-time duration ratio. Transcoding success rate. |
| 5 | Related? | Capacity planning. Pricing strategy. Workload options. |

### ai-inference-operations
**Real question**: "How does AI inference work from the orchestrator's perspective - architecture, pipelines, models, and capability registration?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | How does it work? | go-livepeer orchestrates. Separate AI runner containers execute inference. Gateways route by capability match + price. |
| 1 | Key mechanics? | Two runner types (livepeer/ai-runner for diffusion, Ollama for LLM). aiModels.json config. Model lifecycle (download, warm/cold, serve). 10 pipeline types. On-chain registration via -aiServiceRegistry. |
| 2 | What's different from video? | Capability-based routing (not stake-based). Per-pipeline pricing (not per-pixel). No active set requirement. Container-based execution. VRAM-constrained. |
| 3 | How to register? | aiModels.json defines pipelines + models + pricing. -aiServiceRegistry for on-chain advertisement. Verify at tools.livepeer.cloud. |
| 4 | Already running video? | Add -aiWorker, -aiModels, AI runner container. No other changes. See dual-mode-configuration. |
| 5 | Related? | Diffusion setup. LLM setup. Realtime AI. Model hosting. Model reference. Dual mode. |

### diffusion-pipeline-setup
**Real question**: "How do I set up text-to-image, image-to-image, upscale, and image-to-video pipelines?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | What to set up? | Docker-compose with livepeer/ai-runner. aiModels.json entries per pipeline. Model downloads from HuggingFace. |
| 1 | Pipeline options? | text-to-image. image-to-image. upscale. image-to-video. Each has different VRAM and pricing. |
| 2 | Model selection? | Lightning/Turbo for speed. Standard SDXL for quality. VRAM determines which fit. Check demand at tools.livepeer.cloud. |
| 3 | Optimisation? | SFAST: up to 25% faster, no quality loss. DEEPCACHE: up to 50% faster, minimal quality loss. Cannot combine. Not for Lightning/Turbo. |
| 4 | Verification? | curl test per pipeline. Check tools.livepeer.cloud for network visibility. Container logs for model loading. |
| 5 | Related? | AI inference operations. Model reference. Model hosting. AI model management. |

### llm-pipeline-setup
**Real question**: "How do I set up LLM inference using Ollama - the 8 GB VRAM entry point for AI earning?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | What's different? | Ollama runner, not livepeer/ai-runner. Different container. Different model IDs. Different pricing unit (per-token, not per-pixel). |
| 1 | Why separate? | Fundamentally different architecture. Ollama manages model loading. Model IDs differ from HuggingFace. 8 GB entry point vs 24 GB for diffusion. |
| 2 | Model options? | Quantised models for 8 GB (llama3.1:8b). Larger models for 24 GB+. Ollama ID format vs HuggingFace format - both valid. |
| 3 | Setup steps? | Docker-compose with Ollama + Ollama AI Runner. aiModels.json with url field. Pull model via Ollama. |
| 4 | Verification? | curl to /llm endpoint. Container logs. tools.livepeer.cloud. |
| 5 | Related? | AI inference operations. Diffusion setup. Model hosting. |

### realtime-ai-setup
**Real question**: "How do I set up live video-to-video AI processing - continuous streams, not batch requests?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | What's different from batch? | Continuous frame-by-frame transformation. WebRTC input/output. Payment intervals during stream, not per-request. |
| 1 | Key mechanics? | ComfyStream workflow engine. livepeer/ai-runner:live-base container. -livePaymentInterval for ongoing payment. Sub-100ms per-frame latency target. |
| 2 | Requirements? | 24 GB+ VRAM. Linux. Stable low-latency network. Workflow selection. |
| 3 | Setup? | Pull live-base container. Configure ComfyStream workflow. aiModels.json for live pipeline. Gateway setup for live routing. |
| 4 | Testing? | Send live stream (RTMP or WebRTC). View transformed output. Monitor frame latency. |
| 5 | Related? | AI inference operations. Capacity planning. Full AI pipeline tutorial. |

### audio-and-vision-pipelines
**Real question**: "How do I set up audio-to-text, text-to-speech, image-to-text, and SAM2 pipelines?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | What pipelines? | audio-to-text (Whisper, 12 GB). text-to-speech (varies). image-to-text (4 GB, vision-language). segment-anything-2 (12 GB+). |
| 1 | Why separate page? | Different from diffusion (different models, different pricing units). Niche but growing. Lower competition = potential higher margins. |
| 2 | Per-pipeline config? | aiModels.json entry per pipeline. Pricing unit differs (per-ms for audio, per-character for TTS, per-pixel for vision). |
| 3 | Setup? | Same pattern as diffusion: container, aiModels.json, model download, verify. Per-pipeline specifics. |
| 4 | Verification? | curl per pipeline endpoint. Container logs. tools.livepeer.cloud. |
| 5 | Related? | AI inference operations. Model reference. Model hosting. Diffusion setup. |

### model-demand-reference
**Real question**: "Which AI models fit my GPU AND are actually being requested by gateways?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Two-part answer | VRAM requirements by model family. Current demand data by pipeline. |
| 1 | VRAM tiers? | 8 GB: quantised LLMs. 12 GB: Whisper, SAM2. 16 GB: basic SDXL. 24 GB: full diffusion + live AI. 48 GB+: multi-model. |
| 2 | Demand data? | tools.livepeer.cloud for live pipeline demand. Which models are requested at what frequency and price. |
| 3 | Warm vs cold? | Warm: instant response, competitive advantage, VRAM locked. Cold: flexible, slow first response. One warm per GPU during beta. |
| 4 | Strategy? | Load what gateways request, not what sounds impressive. Check demand weekly. Rotate based on shifts. |
| 5 | Related? | AI model management. Diffusion setup. LLM setup. Model hosting. |

### model-hosting
**Real question**: "Where do AI models come from and how do I download, store, and serve them?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Sources | HuggingFace (primary). Custom/self-hosted via BYOC. |
| 1 | Download mechanics? | Automatic on first start. Manual pre-download via dl_checkpoints.sh. Disk space per model varies (2-20 GB). |
| 2 | Storage? | Local disk. Volume mount for Docker. Model weights directory (-aiModelsDir). |
| 3 | External hosting? | aiModels.json url field for BYOC/external containers. Gated models need HF token (token field). |
| 4 | Verified model list? | Models must be on Livepeer-verified list for gateway matching. Enforcement mechanism TBD. |
| 5 | Related? | AI inference operations. Model reference. AI model management. Diffusion setup. |

<CustomDivider />

## Section 4: Staking and Earning

### earning-model
**Real question**: "How do orchestrators earn on Livepeer - what are the revenue streams and what drives each?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Two streams | ETH service fees (paid per job via PM tickets). LPT inflation rewards (minted per round, proportional to stake). |
| 1 | What drives each? | Fees: workload volume, pricing, capability, performance, uptime. Rewards: total bonded stake, inflation rate, reward call reliability. |
| 2 | Video vs AI earning profiles? | Video: steady demand, lower margin, reliable volume. AI: variable demand, higher margin, capability-dependent. |
| 3 | Profitability threshold? | Earnings must exceed: hardware (amortised), electricity, gas, opportunity cost of staked LPT. |
| 4 | Strategic maximisation? | Competitive pricing. High uptime. Warm models in demand. Delegation growth. Diversified workloads. |
| 5 | Related? | Reward mechanics. Payment receipts. Pricing strategy. Delegate operations. Operator rationale. |

### reward-mechanics
**Real question**: "How do rounds, reward calls, and fee distribution work - and what happens when I miss one?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Round system | ~22 hours per round. Call Reward() once per round. Miss = permanent LPT loss. |
| 1 | Key mechanics? | Automatic (-reward flag) or manual (livepeer_cli). Gas cost ~$0.01-0.12 on Arbitrum. Fee distribution via reward cut + fee cut. |
| 2 | What's at risk? | Missed round = forfeited LPT, permanently. Affects delegator trust. Compounds over time. |
| 3 | Setting cuts? | Reward cut: % of LPT kept. Fee cut: % of ETH kept. Lower cuts attract more delegation. Balance: retain enough to cover costs. |
| 4 | Gas optimisation? | Profitability threshold calculation. Timing strategies. Automated alerting for misses. |
| 5 | Related? | Reward call tuning. Earning model. Delegate operations. Explorer operations. |

### payment-receipts
**Real question**: "How do I receive ETH from gateways - ticket mechanics, redemption, and why earnings look probabilistic?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | PM ticket system | Gateways send lottery tickets per job. Winning tickets redeemed on Arbitrum for ETH. Statistical convergence over time. |
| 1 | Key mechanics? | Ticket validation. Winning detection (cryptographic). Redemption on TicketBroker. Gas batching for efficiency. |
| 2 | Why probabilistic? | Not every ticket wins. Some rounds show zero ETH. Expected value converges over many tickets. Not broken - designed. |
| 3 | Monitoring? | Expected vs received over time. Redemption success. Unredeemed winning tickets = ETH left on table. |
| 4 | Troubleshooting? | Unredeemed tickets. Failed redemptions. Gas too low. |
| 5 | Related? | Earning model. Reward mechanics. Gateway payment guide (sender side). |

### payments
**Real question**: "How do I manage payment operations - deposits, redemption batching, and ETH flow?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Operational management | Monitor ETH flow. Batch redemptions. Track winning tickets. Manage gas for redemption. |
| 1-5 | TBD | Scope overlap with payment-receipts needs human review. May merge or differentiate. |

### delegate-operations
**Real question**: "How do I grow delegated stake and manage delegator relationships to strengthen my active set position?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Growing delegation | Set competitive cuts. Build reputation. Communicate transparently. Maintain high uptime. |
| 1 | Why delegation matters? | Active set position. Reward share increase. Governance weight. Compounding effect. Trust signal. |
| 2 | What delegators evaluate? | Reward cut. Fee cut. Uptime history. Performance consistency. Communication. Self-stake amount. Governance participation. |
| 3 | Reputation building? | Explorer profile. Discord presence. Social media. Transparent governance communication. Consistent reward calling. |
| 4 | When to adjust cuts? | New operator: lower cuts to attract. Established: balance retention vs earnings. Market shifts. Competitor analysis. |
| 5 | Related? | Earning model. Reward mechanics. Network participation. Explorer operations. |

### network-participation
**Real question**: "How do I vote on protocol proposals and why does governance participation matter for my operation?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | How to vote | LIPs via Livepeer Explorer. Stake-weighted votes. Quorum: 33.33% staked LPT + 50% votes cast. |
| 1 | Why participate? | Governance decisions affect earning parameters. Delegation signal (delegators want engaged operators). Protocol direction. Treasury allocation. |
| 2 | What gets voted on? | Protocol parameters. Fee structures. Technical upgrades. Treasury allocation (SPE). Governance process changes. |
| 3 | Delegator interaction? | Delegators can override operator vote. Communicate positions before voting. Transparency builds trust. |
| 4 | Where to follow? | Forum governance category. GitHub livepeer/LIPs. Discord governance channels. |
| 5 | Related? | Operator impact (concepts). Delegate operations. Earning model. |

<CustomDivider />

## Section 5: Config and Optimisation

### pricing-strategy
**Real question**: "How do I set prices that attract work from gateways without leaving money on the table?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Two pricing systems | Video: -pricePerUnit (wei per pixel). AI: aiModels.json price_per_unit per pipeline/model. |
| 1 | Why pricing matters? | Too high = invisible to gateways. Too low = unprofitable. Gateway's max determines the ceiling. |
| 2 | Competitive positioning? | Check Explorer for orchestrator pricing. Check tools.livepeer.cloud for AI rates. Find 25th-75th percentile range. |
| 3 | Advanced pricing? | -pricePerGateway for commercial relationships. -autoAdjustPrice for dynamic adjustment. USD string notation for AI. |
| 4 | Market dynamics? | Video: mature, compressed margins. AI: emerging, wider margins. Demand shifts - monitor weekly. |
| 5 | Related? | Earning model. Gateway relationships. AI model management. |

### capacity-planning
**Real question**: "How many concurrent jobs can my node handle and how do I maximise throughput without failures?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Two constraints | NVENC session limit (video, hardware-capped). VRAM allocation (AI, model-dependent). |
| 1 | Key mechanics? | -maxSessions flag. NVENC consumer cap (3-8 sessions). VRAM budget: warm models + video buffers + cold model headroom. |
| 2 | Benchmarking? | livepeer_bench tool. Real-time duration ratio (&gt;1.0 = GPU keeping up). Finding session ceiling. |
| 3 | Scaling triggers? | OrchestratorCapped error. High session utilisation (&gt;80%). GPU OOM. Latency increase. |
| 4 | When to add hardware? | Session limit consistently hit. VRAM prevents loading demanded models. Bandwidth saturated. |
| 5 | Related? | Requirements. Model demand reference. O-T split (for GPU scaling). Troubleshooting. |

### ai-model-management
**Real question**: "How do I choose, load, and rotate AI models to maximise earnings from available VRAM?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Core decision | Which models to keep warm. One warm per GPU during beta. Warm = competitive. Cold = flexible. |
| 1 | Strategy? | Load what gateways request. Check tools.livepeer.cloud weekly. Rotate based on demand shifts. |
| 2 | Optimisation flags? | SFAST: 25% faster, no quality loss. DEEPCACHE: 50% faster, minimal quality loss. Cannot combine. Not for Lightning/Turbo. |
| 3 | VRAM allocation? | Budget across: warm models + cold model headroom + video buffers (if dual mode). |
| 4 | Monitoring? | Model loading times. Inference latency. Cold-start frequency. Demand vs loaded model alignment. |
| 5 | Related? | Model demand reference. Model hosting. Diffusion setup. Capacity planning. |

### reward-call-tuning
**Real question**: "Is reward calling profitable at my stake level and how do I optimise gas costs?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Profitability check | (your_stake / total_stake) x round_inflation x LPT_price vs gas_cost_in_ETH. |
| 1 | Why tune? | Small operators may spend more on gas than they earn per round. Missing rounds costs real money. Timing affects gas cost. |
| 2 | Auto vs manual? | -reward flag for automatic. Manual via livepeer_cli for control. Auto recommended when profitable. |
| 3 | Timing strategies? | Early in round: guaranteed but potentially higher gas. Later: risk missing but potentially lower gas. |
| 4 | Monitoring? | Prometheus alert for missed rounds. Track gas spend vs rewards earned. Threshold recalculation as stake changes. |
| 5 | Related? | Reward mechanics. Earning model. Delegate operations. Metrics and alerting. |

<CustomDivider />

## Section 6: Monitoring and Tools

### operator-toolbox
**Real question**: "What tools exist for managing, monitoring, and debugging my orchestrator?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Available tools | Livepeer Explorer. tools.livepeer.cloud. livepeer_cli. Community tools (Speedy Bird, Titan Node). Prometheus endpoints. |
| 1 | What each does? | Explorer: stake, rank, sessions, fees, delegators. tools.livepeer.cloud: AI capabilities, demand, pricing. livepeer_cli: local management. Community: monitoring stacks, bots. |
| 2 | Diagnostic endpoints? | /status, /getOrchestrator, /getNetworkCapabilities, /metrics (Prometheus). |
| 3 | When to use which? | Day-to-day: Explorer + livepeer_cli. AI model check: tools.livepeer.cloud. Debugging: /status + logs. Monitoring: Prometheus. |
| 4 | Community tools? | Speedy Bird monitoring stack. Titan Node pool client. Orchestrator Watcher bots. |
| 5 | Related? | Explorer operations. Metrics and alerting. Troubleshooting. Community guides. |

### explorer-operations
**Real question**: "How do I use Livepeer Explorer as my day-to-day orchestrator management dashboard?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Key operations | View profile. Set cuts. Monitor delegators. Track round history. Compare competitors. |
| 1 | Profile management? | Service URI. Reward cut. Fee cut. Stake display. Performance score. |
| 2 | Delegator tracking? | Delegator list. Stake amounts. Unbonding status. Growth trends. |
| 3 | Performance monitoring? | Round history. Missed reward calls. Session count. Fee volume. |
| 4 | Competitive analysis? | Sort by fee volume. Compare pricing. Compare stake. Compare performance. |
| 5 | Related? | Operator toolbox. Delegate operations. Reward mechanics. |

### metrics-and-alerting
**Real question**: "How do I set up Prometheus monitoring with alerts so I catch problems before they cost money?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Setup | -monitor flag. Prometheus scrape at localhost:7935/metrics. Grafana dashboards. Alert rules. |
| 1 | Key metrics? | transcoding_success_rate. session_count. session_max_limit. ai_job_success_rate. go_memstats_heap_bytes. |
| 2 | Essential alerts? | Missed reward call. Session saturation &gt;80%. High error rate. OOM approaching. Zero sessions &gt;1 hour. |
| 3 | Per-stream metrics? | -metricsPerStream flag. Per-session diagnostics. Useful for debugging individual failures. |
| 4 | Docker monitoring? | AI runner container health. Memory. CPU. Restart count. |
| 5 | Related? | Operator toolbox. Troubleshooting. Capacity planning. |

### troubleshooting
**Real question**: "Something broke - what's the symptom and how do I fix it?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Symptom-based | Find the symptom. Get the checks. Apply the fix. Escalate if needed. |
| 1 | Common symptoms? | No video jobs. No AI jobs. OrchestratorCapped. GPU OOM. Missed rewards. NVENC limit. Network unreachable. Price not updated. Model download failed. |
| 2 | Diagnostic commands? | curl /status. docker logs. nvidia-smi. livepeer_cli. telnet port test. |
| 3 | Escalation? | Discord #orchestrating. Forum /c/transcoders. GitHub issues. |
| 4 | Prevention? | Monitoring + alerting. Capacity planning. Regular health checks. |
| 5 | Related? | Metrics and alerting. Operator toolbox. FAQ. |

<CustomDivider />

## Section 7: Advanced Operations

### gateway-relationships
**Real question**: "How do gateways discover and select my orchestrator - and how do I get selected for more work?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Discovery mechanisms | On-chain ServiceRegistry. Direct -orchAddr. Webhook discovery. AI service registry. |
| 1 | Selection criteria? | Price (must be below gateway max). Latency. Reliability (performance history). Capabilities. Stake weight (video). |
| 2 | Optimising for selection? | Competitive pricing. High uptime. Warm models. Fast response times. Geographic proximity. |
| 3 | Commercial relationships? | -pricePerGateway for dedicated pricing. SLAs. Direct communication with gateway operators. |
| 4 | AI capability advertisement? | aiModels.json defines capabilities. -aiServiceRegistry for on-chain. tools.livepeer.cloud for verification. |
| 5 | Related? | Pricing strategy. AI inference operations. Scale operations. Gateway-orchestrator interface. |

### gateway-orchestrator-interface
**Real question**: "I run both a gateway and an orchestrator - how do I configure them to work together?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Combined operation | Same machine or separate. Port allocation. Self-routing considerations. Monitoring both roles. |
| 1 | Why run both? | Test own inference end-to-end. Serve own products. Complete service offering. Development workflow. |
| 2 | Architecture? | Same machine: different ports. Separate machines: network between. Off-chain gateway + on-chain orchestrator (common pattern). |
| 3 | Self-routing? | Gateway can point -orchAddr at own orchestrator. Pricing alignment: gateway max >= orchestrator price. |
| 4 | Monitoring? | Separate metrics per role. Combined dashboard. Gateway-side and orchestrator-side logs. |
| 5 | Related? | Gateway relationships. Gateway tab setup. Dual mode configuration. |

### pool-operators
**Real question**: "How do I run a pool that accepts external GPU operators and manages their payouts?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Pool architecture | Orchestrator accepts remote -transcoder connections via -orchSecret. Workers contribute GPU. Operator distributes fees off-chain. |
| 1 | Responsibilities? | On-chain identity. Staking. Reward calling. Pricing. Worker onboarding. Performance monitoring. Fee distribution. Communication. |
| 2 | Fee distribution? | Entirely off-chain. Custom payout mechanism. No protocol support for splits. Trust-based. |
| 3 | Worker management? | Onboarding (share orchSecret). Performance tracking. Disconnection handling. Reliability expectations. |
| 4 | Economics? | Operator take vs worker share. Volume-based tiers. Scaling beyond own hardware. |
| 5 | Related? | O-T split (foundation). Join a pool (worker side). Community pools. Scale operations. |

### scale-operations
**Real question**: "How do I scale from a single machine to a multi-GPU, multi-machine, or multi-region fleet?"

| Tier | Question | Answer |
|------|----------|--------|
| 0 | Scaling patterns | Multi-GPU single machine. Multi-machine (O-T split). Multi-region (transcoders in different DCs). Fleet management. |
| 1 | When to scale? | Session limit hit consistently. VRAM prevents loading demanded models. Geographic latency issues. Revenue justifies hardware. |
| 2 | Architecture? | -nvidia flag for GPU assignment. O-T split for multi-machine. Single orchestrator identity across all. |
| 3 | Automation? | Config management (Ansible, Terraform). Standardised docker-compose. Centralised logging. |
| 4 | Cost optimisation? | Workload routing to lowest-cost hardware. Demand-based scaling. Geographic proximity to gateways. |
| 5 | Related? | O-T split. Pool operators. Capacity planning. Metrics and alerting. |

<CustomDivider />

## Flagged for follow-up

- **Payments page**: scope overlap with payment-receipts - defer tier questions until human reviews both
- **Stubs** (funding-and-support, orchestrator-profiles): content deferred, no tier questions needed yet
- **Tutorials**: structure defined in PURPOSE comments and writing pack, no tier questions needed
- **Build pre-flight script**: automate anti-pattern checking before presenting drafts
- **Present tier tables to human**: batch approval needed before any editing sessions
