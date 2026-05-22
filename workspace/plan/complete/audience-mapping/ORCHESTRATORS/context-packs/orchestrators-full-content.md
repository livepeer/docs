# Orchestrators Full Content Collation

Generated: 2026-03-23
Source: v2/orchestrators/ (all .mdx files, including _workspace)
Purpose: Complete content collation for AI-assisted content work.

Each file entry uses the format:

---FILE---
PATH: <relative path from v2/orchestrators/>
---FRONTMATTER---
<frontmatter>
---BODY---
<body>
---END FILE---

---

---FILE---
PATH: index.mdx
---FRONTMATTER---
title: 'Orchestrators Index'
sidebarTitle: 'Orchestrators Index'
description: 'Generated table of contents for docs pages under v2/orchestrators.'
pageType: overview
keywords: ['livepeer', 'generated index', 'table of contents', 'v2/orchestrators']
---BODY---
[Generated TOC - see index.mdx. Lists all pages under v2/orchestrators/ grouped by section. Key entries: navigator.mdx, portal.mdx, concepts/, guides/ (advanced-operations, ai-and-job-workloads, config-and-optimisation, deployment-details, monitoring-and-tooling, operator-considerations, payments-and-pricing, roadmap-and-funding, staking-and-rewards, tutorials), quickstart/, resources/, setup/]
---END FILE---

---FILE---
PATH: navigator.mdx
---FRONTMATTER---
title: 'Find Your Path'
sidebarTitle: 'Navigator'
description: 'Choose the right orchestrator path based on your situation - hardware, stake, workload goals, and operational model.'
keywords: [livepeer, orchestrator, navigator, path, pool, solo, AI, video, dual mode]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: landing
audience: orchestrator
purpose: orientation
status: current
lastVerified: '2026-03-16'
---BODY---
Routes to the right starting point based on the operator's current situation. Seven accordion entries:

1. "I have a GPU and want to try Livepeer" - Start with Quickstart. Off-chain, no staking, hardware verification.
2. "I want to earn from my GPU with minimal setup" - Join a pool. No LPT, no activation. Find pool via Discord/community directory.
3. "I have a 24 GB+ GPU and want to earn from AI" - AI inference does not require active set membership. Capability-based routing. Register on AIServiceRegistry.
4. "I already run video transcoding and want to add AI" - Dual mode is additive. Add -aiWorker, -aiModels, AI runner container. NVENC/NVDEC (video) uses dedicated silicon; both share VRAM.
5. "I want to run a solo orchestrator (full control)" - Standard path. Requires LPT, ETH gas, ongoing ops commitment.
6. "I run a business that needs GPU compute at scale" - Commercial operation. Per-gateway pricing, O-T split, fleet patterns.
7. "I want to influence the protocol's direction" - Governance weight via bonded stake (self + delegated).

Quick Reference path matrix table: Situation | Start here | Then - covering 6 scenarios.

All Sections CardGroup (9 cards): Operator Considerations, Deployment Details, Workloads and AI, Staking and Earning, Config and Optimisation, Monitoring and Tools, Advanced Operations, Roadmap and Funding, Tutorials.
---END FILE---

---FILE---
PATH: portal.mdx
---FRONTMATTER---
mode: frame
title: Orchestrator Portal
sidebarTitle: Portal
description: 'Welcome To The Orchestrator Portal: Explore, Earn, Operate'
pageType: landing
audience: orchestrator
purpose: landing
status: current
lastVerified: '2026-03-16'
keywords: [home, index, landing, gpu, earn, rewards, orchestrator, orchestrators, livepeer orchestrator, livepeer orchestrators, livepeer orchestrator portal, livepeer orchestrators portal]
og:image: /snippets/assets/domain/SHARED/LivepeerDocsLogo.svg
---BODY---
Landing page with hero section. Hero: "GPUs for AI Video / Run - Provide - Earn". Orchestrators are the GPU compute nodes powering the Livepeer network. Anyone can add a GPU to earn from idle GPU downtime - pool or solo orchestrator.

Hero docker pull command: `docker pull livepeer/go-livepeer:master`

Portal cards (6):
- Find Your Path - choose starting point based on situation
- Quickstart: Verify Your Hardware - test transcoding and AI on GPU, under 1 hour, off-chain
- Full Setup Guide - install, configure, connect to Arbitrum, verify
- Is It Worth It? - costs, revenue streams, break-even analysis
- AI and Workloads - video, diffusion, LLM, live AI, audio
- Earning and Staking - service fees, inflation rewards, delegation, reward calling, governance
---END FILE---

---FILE---
PATH: concepts/architecture.mdx
---FRONTMATTER---
title: 'Orchestrator Architecture'
sidebarTitle: 'Architecture'
description: 'How Orchestrators fit into the Livepeer stack - layer position, internal components, request flow, GPU worker management, and protocol interactions.'
keywords: [livepeer, orchestrator, orchestrator architecture, go-livepeer, LivepeerNode, AI runner, transcoder, O-T split, request flow, session management, ServiceRegistry, AIServiceRegistry, BondingManager, TicketBroker, Arbitrum]
og:image: /snippets/assets/site/og-image/fallback.png
pageType: 'concept'
audience: 'orchestrator'
purpose: 'concept'
status: 'current'
lastVerified: '2026-03-15'
---BODY---
Orchestrators sit between Gateways and the Arbitrum protocol layer. They receive jobs, coordinate GPU workers, return results, handle staking, registry, and payment flows.

## Orchestrator Layer Context

Four layers: Application (developers/platforms) > Gateway (job intake, orchestrator selection, payments) > Compute/Orchestrator (execute video+AI on GPUs, manage workers, receive payment tickets) > Protocol (Arbitrum: BondingManager, TicketBroker, ServiceRegistry, RoundsManager).

Orchestrators are the only participants that interact with all layers below the Gateway.

## Orchestrator Interactions

### Gateways
Gateway establishes session with Orchestrator, agreeing on price and verifying capability. Jobs arrive as segments (video) or HTTP requests (AI inference) with probabilistic micropayment tickets. Orchestrator processes job, returns result, accumulates tickets. Gateways choose Orchestrators (not the reverse) based on capability, price, performance.

### GPU Workers
- Transcoder: handles video transcoding. Raw segments -> NVENC GPU encoding -> encoded segments. Runs in-process or as separate O-T split process.
- AI Runner: handles AI inference. Docker container managed by Orchestrator process. Receives inference requests, routes to loaded model (or loads on demand), returns results.

### Arbitrum Protocol - four contracts:
- BondingManager: Stake LPT (self-bond), receive delegated stake, set reward cut and fee cut, call rewards each round
- RoundsManager: Track active rounds; reward call triggered once per round per Orchestrator
- TicketBroker: Redeem winning probabilistic micropayment tickets for ETH
- ServiceRegistry: Register service URI so Gateways can discover the Orchestrator on-chain

AIServiceRegistry (0x04C0b249740175999E5BF5c9ac1dA92431EF34C5 on Arbitrum Mainnet) is separate, used for AI subnet registration. Enable with -aiServiceRegistry flag. Currently detached from main protocol controller.

## Dual Pipeline Architecture

Video pipeline (blue): Gateway segments -> Orchestrator Session Manager -> Transcoder -> encoded segments -> ticket accumulated per segment
AI pipeline (purple): Gateway AI requests -> Orchestrator Session Manager -> AI Runner (Docker container) -> inference results -> ticket accumulated per pixel or ms

Video vs AI comparison:
- Input: raw segments vs HTTP inference request
- Worker: Transcoder (NVENC GPU or CPU) vs AI Runner (Docker container)
- Output: encoded segment vs inference result (image, video clip, JSON, audio)
- Payment unit: Wei per pixel per segment vs Wei per pixel or per millisecond
- Session duration: long-lived (entire stream) vs short-lived (single request or batch)
- Model warm-up: N/A vs cold model incurs warm-up; loaded models respond immediately

## Request Flow (Job Lifecycle)

1. Job arrives - Gateway sends video segment or AI request with attached probabilistic micropayment ticket
2. Ticket verification - Orchestrator verifies ticket validity (correct signer, sufficient face value)
3. Pipeline routing - routes to video pipeline (transcoder) or AI pipeline (AI runner)
4. Execution - worker processes job
5. Result return - Orchestrator returns result to Gateway over HTTP
6. Ticket accumulation - ticket stored; each ticket has probability of being "winning" ticket
7. On-chain redemption - winning tickets submitted to TicketBroker on Arbitrum, releasing ETH

## Setup Configurations

Combined (solo): Orchestrator + Transcoder as single process on one machine. Default for solo operators. `livepeer -orchestrator -transcoder -datadir /path/to/data`

O-T Split: Orchestrator and Transcoder as separate processes. Orchestrator handles session management, payment, protocol. Transcoder handles only video encoding. Multiple Transcoders can register with single Orchestrator.

Pool Operator: Pool Orchestrator registers on-chain, accepts GPU workers from external contributors. Workers earn share of revenue without managing LPT staking. Revenue distribution managed off-chain or via pool software.

## Software Components

go-livepeer: core node software. Handles session management, worker coordination, AI Runner container management, payment ticket accumulation/redemption, Prometheus metrics (port 7935), protocol interactions.

AI Runner: Docker container for AI inference. Spawned and managed by go-livepeer Orchestrator process per pipeline/model. -aiModels flag specifies pipelines and models.

livepeer_cli: CLI tool connecting to running node. Used for: activating on-chain, configuring reward cut/fee cut, setting price per unit/per gateway, viewing status and earnings.

Arbitrum Contracts: see contract addresses reference.
---END FILE---

---FILE---
PATH: concepts/capabilities.mdx
---FRONTMATTER---
title: 'Orchestrator Capabilities'
sidebarTitle: 'Capabilities'
description: 'What Orchestrators can do - workload types, pipeline support, capability advertisement, and how Gateways select Orchestrators.'
keywords: [livepeer, orchestrator, capabilities, transcoding, AI inference, pipelines, aiModels.json, NVENC, CUDA, Gateway selection, capability advertisement, workload types]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: 'concept'
audience: 'orchestrator'
purpose: 'concept'
status: 'current'
lastVerified: '2026-03-15'
---BODY---
Orchestrators offer three categories of compute: Video Transcoding, AI Inference, and Real-time AI.

## Workload Types

### Video Transcoding
Converts incoming video segments to multiple output formats. Hardware: NVIDIA NVENC/NVDEC (hardware-accelerated, recommended) or CPU (software, lower performance). Input: raw video segments from RTMP ingest. Output: encoded segments in requested profiles (resolution, bitrate, codec). Pricing: -pricePerUnit (wei per pixel).

Sessions: continuous for duration of stream. Multiple simultaneous sessions possible (limited by NVENC session cap or GPU VRAM for CPU). Consumer GPUs: typically 3 concurrent NVENC sessions. Workstation/data-centre: uncapped.

### AI Inference (Batch)
Processes single AI requests. Nine supported pipelines:
- text-to-image: 24 GB VRAM. Pricing per output pixel. Warm model: SG161222/RealVisXL_V4.0_Lightning
- image-to-image: 24 GB VRAM. Pricing per output pixel.
- image-to-video: 24 GB VRAM. Pricing per output pixel.
- image-to-text: 4 GB VRAM. Pricing per input pixel. Warm model: Salesforce/blip-image-captioning-large
- audio-to-text: 12 GB VRAM. Pricing per ms of audio. Warm model: openai/whisper-large-v3
- segment-anything-2: Pricing per input pixel.
- text-to-speech: Pricing per character/ms.
- upscale: Pricing per input pixel. Warm model: stabilityai/stable-diffusion-x4-upscaler
- llm: 8 GB VRAM (quantised). Pricing per custom unit. Uses Ollama-based runner (tztcloud/livepeer-ollama-runner).

### Real-time AI (Cascade / live-video-to-video)
Frame-by-frame video transformation on a live stream. Uses ComfyStream (ComfyUI backend). GPU remains allocated for duration of stream. Architecture: distinct from batch AI - closer to transcoding session than inference request.

## Capability Advertisement

Video capabilities: set via startup flags (-pricePerUnit, -serviceAddr). Registered in ServiceRegistry on Arbitrum.

AI capabilities: configured in aiModels.json. pipeline, model_id, price_per_unit, warm, pixels_per_unit, currency, url, token, capacity, optimization_flags. Registered in AIServiceRegistry.

## Gateway Selection Factors

Gateways select Orchestrators based on:
1. Price - pricePerUnit within Gateway's maxPricePerUnit threshold
2. Performance history - transcoding success rate, latency, uptime
3. Capability match - supports requested pipeline, model, resolution
4. Stake weight - higher total stake = higher probability for video jobs
5. Model warmth - warm models win AI jobs over cold models

For video: stake-weighted selection (active set = top 100 by total stake).
For AI: capability-based routing, not stake-weighted.
---END FILE---

---FILE---
PATH: concepts/incentive-model.mdx
---FRONTMATTER---
title: 'Orchestrator Incentive Model'
sidebarTitle: 'Incentive Model'
description: 'How Orchestrators earn on Livepeer - service fees, inflation rewards, commission parameters, and the economic structure of orchestrator operation.'
keywords: [livepeer, orchestrator, incentive model, LPT rewards, ETH fees, reward cut, fee cut, inflation, staking, delegation, service fees, probabilistic micropayments]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: 'concept'
audience: 'orchestrator'
purpose: 'concept'
status: 'current'
lastVerified: '2026-03-15'
---BODY---
Two revenue streams: ETH service fees (demand-driven) + LPT inflation rewards (protocol-level).

## Revenue Stream 1: ETH Service Fees

Every transcoding segment or AI inference job generates an ETH fee via probabilistic micropayment tickets. Gateway sends tickets with each job; Orchestrator redeems winning tickets on-chain for ETH.

Fee drivers: stake weight (video jobs), price competitiveness, model warmth (AI jobs), performance history (latency, uptime, success rate).

## Revenue Stream 2: LPT Inflation Rewards

Each round (~22 hours), protocol mints new LPT distributed proportionally to staked Orchestrators. Must call reward() each round to claim. Missing a round = missing that round's inflation.

Inflation rate: dynamic. Increases when <50% LPT bonded, decreases when >50% bonded.

10% of each round's issuance goes to Livepeer Treasury (as of 02-March-2026).

## Commission Parameters

Reward Cut: percentage of LPT rewards the Orchestrator keeps. Delegators receive remainder proportional to their stake.
- Formula: Orch LPT = Round inflation share × rewardCut; Delegator LPT = Round inflation share × (1 - rewardCut) × (delegator stake / total stake)

Fee Cut: percentage of ETH job fees the Orchestrator keeps. Delegators receive (1 - feeCut) proportional to their stake.

Commission affects delegator attraction: competitive rates attract more delegators -> higher stake -> more inflation allocation and better job selection probability.

## Cost Structure

Hardware: GPU (NVENC for video, CUDA for AI), CPU, RAM, storage for model weights.
Operational: electricity, internet bandwidth (6 Mbps symmetric per video session), monitoring.
On-chain: arbETH for gas (reward calls, ticket redemptions, registration transactions).
LPT: stake (minimum to enter active set = stake of 100th-ranked Orchestrator).

## Active Set Economics

Top 100 orchestrators by total stake receive video jobs. AI job routing is capability-based. Being ranked 50th vs 1st affects video job probability but not AI job routing.

New orchestrators with minimal stake receive few video jobs initially; improves as delegation grows and performance history accumulates.

## Delegation Dynamic

Attracting delegators compounds earnings: more delegation -> higher stake -> more inflation rewards -> better video job selection. Creates network effect for well-run nodes.
---END FILE---

---FILE---
PATH: concepts/role.mdx
---FRONTMATTER---
title: 'The Orchestrator Role in the Livepeer Network'
sidebarTitle: 'Role'
description: 'What Orchestrators are, how the role has evolved from video transcoding to AI inference, and their position in the Livepeer network.'
keywords: [livepeer, orchestrator, role, GPU, transcoding, AI inference, Cascade, network participant, LPT, staking, governance]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: 'concept'
audience: 'orchestrator'
purpose: 'concept'
status: 'current'
lastVerified: '2026-03-15'
---BODY---
An Orchestrator is a GPU node operator that processes compute work for the Livepeer network. Originally built for video transcoding (since 2017), the role expanded to include AI inference with the AI Subnet launch (Q3 2024) and real-time AI with Cascade Phase 1 (December 2024).

## What Orchestrators Do

Core functions:
1. Process video transcoding (NVENC GPU-accelerated or CPU software encoding)
2. Run AI inference pipelines (text-to-image, audio-to-text, LLM, etc.)
3. Provide real-time AI video transformation (Cascade/ComfyStream)
4. Stake LPT and earn inflation rewards
5. Receive ETH service fees from Gateways
6. Participate in protocol governance (vote on LIPs with stake weight)
7. Attract delegators and manage commission parameters

## Evolution of the Role

2017: Video transcoding only. RTMP ingest, segment-based encoding.
2024 Q3: AI Subnet launch. Batch AI inference pipelines added.
2024 Dec: Cascade Phase 1. Real-time frame-by-frame AI video added.
2025 Jan: ComfyStream integrated with Livepeer network payments.
2025: LLM pipeline added (Cloud SPE Ollama runner).

## Position in the Network

Orchestrators are supply-side participants. They provide compute capacity that Gateways consume and route to application developers.

Relationship to other participants:
- Gateways: send jobs, pay service fees via probabilistic tickets
- Delegators: bond LPT to Orchestrator, receive share of inflation rewards and job fees
- Other Orchestrators: compete for jobs based on price, capability, performance, stake
- Protocol: Arbitrum smart contracts manage staking, rewards, payment settlement, registration

## Operator Profiles

Solo operator: one machine, self-managed, full protocol participation.
Pool operator: one on-chain identity, multiple GPU workers connected as remote transcoders.
O-T split: Orchestrator controller process separate from Transcoder worker process.
Siphon (OrchestratorSiphon): separate keystore management machine for reward calling, GPU machine for workloads.
---END FILE---

---FILE---
PATH: concepts/composable/orchestratorRole.mdx
---FRONTMATTER---
title: 'Orchestrator Role Diagram'
status: draft
---BODY---
[Composable/composable diagram page - orchestrator role visual. Status: draft/warning flag in index.]
---END FILE---

---FILE---
PATH: setup/guide.mdx
---FRONTMATTER---
title: 'Run an Orchestrator'
sidebarTitle: 'Setup Overview'
description: 'Complete setup guide for running a Livepeer orchestrator - from installation to on-chain activation and verification.'
purpose: overview
keywords: [livepeer, orchestrator, setup, guide, production]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: overview
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Four-step setup flow: (1) Install go-livepeer - Docker recommended; (2) Configure - flags for video/AI/dual, generates docker-compose; (3) Connect to Arbitrum - fund wallet, stake LPT, register service URI, activate on-chain (LPT acquisition can take hours to days); (4) Verify - on-chain, transcoding, AI inference, reward calling, metrics.

What you will need: NVIDIA GPU (any for video; 24 GB for AI diffusion; 8 GB for LLM), Docker + NVIDIA Container Toolkit, arbETH + LPT on Arbitrum One (~0.05 ETH for gas), public IP/domain with port 8935 open, Arbitrum One RPC endpoint. Time: 2-4 hours video; 4-8 hours AI or dual mode.

After setup cards: Staking and Earning, Config and Optimisation, Monitoring and Tools, Workloads and AI, Deployment Details, Troubleshooting.
---END FILE---

---FILE---
PATH: setup/rcs-requirements.mdx
---FRONTMATTER---
title: 'Setup Checklist'
sidebarTitle: 'Prerequisites'
description: 'Pre-flight checklist for orchestrator setup - hardware, software, network, wallet, and tokens by node mode before installing go-livepeer.'
purpose: how_to
keywords: [livepeer, orchestrators, hardware, GPU, requirements, checklist, prerequisites, CUDA, NVIDIA]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: how_to
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Tabbed by node mode (Video/AI/Dual). Confirms all prerequisites before installing go-livepeer.

Hardware by mode:
- Video: any NVIDIA NVENC/NVDEC GPU, 4 GB VRAM min (8 GB+ recommended), 16 GB RAM, 50 GB SSD
- AI: NVIDIA CUDA GPU, 8 GB VRAM min (LLM only via Ollama), 24 GB+ for diffusion; 100 GB SSD (250 GB+ for models)
- Dual: NVIDIA NVENC+CUDA GPU, 16 GB VRAM min, 24 GB+ recommended; NVENC/NVDEC uses dedicated silicon separate from CUDA

Software: Linux Ubuntu 22.04+ (AI/Dual require Linux; Video works Windows WSL2/macOS), NVIDIA driver 525+ (Linux)/527+ (Windows), CUDA 12.0+, Docker + NVIDIA Container Toolkit.

Network: Port 8935 TCP open to internet, static IP or hostname, 100 Mbps symmetric min (1 Gbps for multi-stream), <50 ms latency to major regions.

Wallet/Tokens: Ethereum wallet (auto-created on first run), 0.05+ ETH on Arbitrum One for gas, LPT on Arbitrum One for staking (AI-only: minimal; Video: active set threshold), Arbitrum RPC endpoint. LPT acquisition may take hours to days.

Quick verification commands: nvidia-smi, nvcc --version, docker run --gpus all nvidia/cuda:12.0-base nvidia-smi, curl -k https://YOUR_IP:8935/status (from different machine).
---END FILE---

---FILE---
PATH: setup/rs-install.mdx
---FRONTMATTER---
title: 'Install go-livepeer'
sidebarTitle: 'Install'
description: 'Install go-livepeer via Docker (recommended) or pre-built binary - Linux, Windows, and macOS with GPU support.'
purpose: how_to
keywords: [livepeer, orchestrator, install, Docker, go-livepeer, GPU, NVIDIA]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: how_to
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Docker (recommended): Install NVIDIA Container Toolkit, configure runtime, pull livepeer/go-livepeer:stable. For AI/dual also pull livepeer/ai-runner:latest. Pin to specific version tag in production (e.g. v0.8.9). go-livepeer spawns AI runner containers via Docker-out-of-Docker - image must be pulled before start.

Linux binary: Download from github.com/livepeer/go-livepeer/releases. GPU build (livepeer-linux-gpu-amd64.tar.gz) when NVIDIA GPU present. CPU build (livepeer-linux-amd64.tar.gz) for CPU-only. arm64 variants available. Verify checksum before install. Installs livepeer, livepeer_cli, livepeer_bench to /usr/local/bin.

Windows: download livepeer-windows-amd64.zip. AI runner requires Linux - use Docker Desktop + WSL2 for Windows AI workloads.

macOS: darwin-arm64 (Apple Silicon) or darwin-amd64 (Intel). macOS primarily supports livepeer_cli and local dev against remote node.

Verify install: `docker run --rm livepeer/go-livepeer:stable livepeer -version` (Docker) or `livepeer --version` (binary). Expected: "Livepeer Node Version: v0.8.9".
---END FILE---

---FILE---
PATH: setup/configure.mdx
---FRONTMATTER---
title: 'Configure Your Orchestrator'
sidebarTitle: 'Configure'
description: 'Set operational flags for video transcoding, AI inference, or dual mode - docker-compose templates, pricing, networking, and GPU assignment.'
keywords: [livepeer, orchestrator, configure, docker-compose, flags, video, AI, dual mode]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: how_to
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Three mode tabs: Video | AI | Dual Mode. Each tab provides a docker-compose template.

Video mode flags: -network=arbitrum-one-mainnet, -ethUrl (Alchemy/Infura), -orchestrator, -transcoder, -nvidia=0 (GPU ID), -maxSessions=10 (benchmarked limit), -pricePerUnit=1000 (wei per pixel; 500-2000 range), -serviceAddr=PUBLIC_IP:8935, -monitor (Prometheus), -v=6 (verbose logging).

AI mode: same as video plus -aiWorker, -aiModels=/root/.lpData/aiModels.json, -aiModelsDir=/root/.lpData/models, and volume mount for /var/run/docker.sock (required for Docker-out-of-Docker). Requires aiModels.json before start. First start downloads model weights from HuggingFace (5-30 min). LLM pipeline uses Ollama runner separately.

Dual mode: all video + all AI flags combined. VRAM planning: 24 GB supports text-to-image + video; 16 GB supports audio-to-text + video; 8-12 GB supports LLM via Ollama + video.

Common configuration:
- serviceAddr: IP or domain name (domain preferred - survives IP changes). Test from external machine before connecting on-chain.
- GPU selection: nvidia-smi -L lists device IDs. Use 0 (single), 0,1 (two), all.
- Pricing: -pricePerUnit in wei per pixel. AI pricing in aiModels.json per pipeline.
- Persistent data: always mount ~/.lpData:/root/.lpData. Without it, go-livepeer creates new ETH account on every container start (loses bonded LPT).
- aiModelsDir must be HOST path (not container path) - passed directly to AI runner containers.

Verify configuration: `docker compose up -d` then check logs for "Transcoding on Nvidia GPU 0" (video) or "Warm model loaded" (AI). Resolve FATAL errors before connecting on-chain.
---END FILE---

---FILE---
PATH: setup/connect-and-activate.mdx
---FRONTMATTER---
title: 'Connect to Arbitrum'
sidebarTitle: 'Connect'
description: 'Connect the orchestrator to the Livepeer protocol on Arbitrum - fund the wallet, stake LPT, register the service URI, and activate on-chain.'
keywords: [livepeer, orchestrator, Arbitrum, connect, stake, LPT, activate, service URI]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: how_to
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
8 steps to connect and activate:

1. Set up Arbitrum RPC endpoint: Alchemy (300M CU/month free), Infura (100K req/day free), or public endpoint (testing only). Verify: eth_chainId should return "0xa4b1" (Arbitrum One, chain 42161).

2. Identify orchestrator wallet address: appears in startup logs or via livepeer_cli -> Get node status. CRITICAL: back up ~/.lpData/arbitrum-one-mainnet/keystore to offline storage immediately.

3. Fund wallet with arbETH: 0.05+ ETH recommended. Buy on exchange with Arbitrum One withdrawals or bridge from L1 at bridge.arbitrum.io (10-15 min). Verify on arbiscan.io.

4. Acquire and stake LPT: check active set threshold on Explorer first. Active set = top 100 by total stake. Get LPT via Uniswap on Arbitrum or bridge from L1. Bond via livepeer_cli (approve + bond transactions).

5. Activate on-chain: livepeer_cli -> "Invoke multi-step 'become an orchestrator'". Set reward cut (10%), fee cut (95%), service address (YOUR_IP:8935). Activation transaction costs arbETH gas. Node joins active set at START OF NEXT ROUND (~22 hours later).

6. Register AI capabilities (AI/dual mode): -aiServiceRegistry flag enables automatic registration. Verify via curl http://localhost:7935/getNetworkCapabilities or tools.livepeer.cloud/ai/network-capabilities.

7. Verify on Livepeer Explorer: Status Active/Registered, Service URI matches -serviceAddr, Stake reflects bonded LPT, commission rates correct. Update service URI via livepeer_cli if wrong.

8. Enable reward calling: -reward=false must NOT be in startup command. Very low-stake orchestrators: disable and call manually via livepeer_cli once per round until stake grows (gas cost may exceed LPT reward). Missed round = permanent loss of that round's LPT allocation.

Troubleshooting: RPC connection failing (verify API key, Arbitrum network enabled), Service URI reachability (test from external machine), Active-set eligibility (check stake vs threshold), Transactions failing with gas errors (keep 0.01+ ETH balance).
---END FILE---

---FILE---
PATH: setup/test.mdx
---FRONTMATTER---
title: 'Verify Your Setup'
sidebarTitle: 'Verify'
description: 'Verify the orchestrator is on-chain, processing jobs, and healthy - video transcoding test, AI inference test, Explorer check, and basic monitoring confirmation.'
purpose: how_to
keywords: [livepeer, orchestrator, verify, test, health check, monitoring, Prometheus]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: how_to
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
7 verification checks (run all applicable to configured mode):

1. Check node status: curl -s http://localhost:7935/status | python3 -m json.tool -> JSON with nodeType, version, ETH address, balance. Also check GPU: docker compose logs 2>&1 | grep -i "transcoding on nvidia"

2. Verify on Livepeer Explorer: Status (Active or Registered if recent), Service URI (matches -serviceAddr), Stake, Reward cut/fee cut. AI nodes: check tools.livepeer.cloud/ai/network-capabilities for pipeline warm/cold status.

3. Verify port 8935 from DIFFERENT machine: curl -k https://YOUR_IP:8935/status. Any response = open. Timeout = firewall blocking.

4. Test video transcoding: ffmpeg test stream to localhost:1935/test_stream, check logs for "Got segment" and "Transcode result OK", verify HLS output via ffprobe.

5. Test AI inference: POST to /text-to-image, save as verify-output.png, check file is PNG. Confirm ai-runner container shows "Up" in docker ps. Ensure warm model loaded before testing.

6. Confirm reward calling: startup command should omit -reward=false. After first full round: verify reward() transaction on Arbiscan.

7. Verify basic monitoring: curl -s http://localhost:7935/metrics | head -30 -> Prometheus metric lines. Key metrics: segment_source_appeared_total, segment_transcoded_total, reward_call_count, current_round. AI: ai_request_count, ai_request_latency_seconds. GPU: nvidia-smi health check (temperature, VRAM).

Quick-reference checklist (11 items): Node status, GPU detected, RPC connected, Port 8935, Explorer Active, Service URI, Video transcoding, AI inference, AI capabilities, Reward calling, Prometheus metrics.

Common issues: No transcoding output (check GPU detection, port 8935, logs), AI inference error (check ai-runner container, logs, aiModels.json validity, model_id case-sensitive), Explorer listing delay (wait one round), Reward-call visibility (check -reward=false absent, arbETH balance, logs), No jobs after 48 hours (port 8935 reachability #1 cause, then price vs gateway caps, then active set rank).
---END FILE---

---FILE---
PATH: setup/r-monitor.mdx
---FRONTMATTER---
title: 'Set Up Monitoring'
sidebarTitle: 'Monitor'
description: 'Set up basic Prometheus monitoring for a Livepeer orchestrator - enable metrics, check key signals, and connect to Explorer.'
purpose: how_to
keywords: [livepeer, orchestrator, monitoring, Prometheus, metrics, grafana, alerting, DCGM]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: how_to
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Enable Prometheus metrics with -monitor flag. Full Grafana/alerting/DCGM setup in Guides > Monitoring and Tools > Metrics and Alerting.

Enable: add -monitor to startup command, restart. Metrics at http://localhost:7935/metrics.

Key metrics: segment_source_appeared_total, segment_transcoded_total, reward_call_count, current_round, winning_ticket_count, max_sessions, ai_request_count, ai_request_latency_seconds.

Explorer checks: Status Active/Registered, Service URI, Reward call history, Earnings (ETH fees + LPT rewards).

GPU monitoring: nvidia-smi --query-gpu=utilization.gpu,utilization.memory,memory.used,memory.total,temperature.gpu --format=csv,noheader. Watch: temperature >85°C, VRAM >95%.

Quick symptom guide: no segments 48h+ (port 8935, pricing, active set rank), reward count not increasing (-reward=false absent, arbETH balance, uptime during round init), AI requests not arriving (tools.livepeer.cloud, pipeline registration, price), high latency (GPU temp, VRAM pressure, bandwidth).

Minimal Prometheus+Grafana: docker-compose with prom/prometheus and grafana/grafana images, prometheus.yml scraping localhost:7935 with /metrics path.
---END FILE---

---FILE---
PATH: quickstart/guide.mdx
---FRONTMATTER---
title: 'Orchestrator Quickstart'
sidebarTitle: 'Overview'
description: 'Verify Livepeer works on your hardware - off-chain video and AI smoke tests that run in under an hour with no financial commitment.'
purpose: overview
keywords: [livepeer, orchestrator, quickstart, smoke test, verify, GPU]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: overview
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Off-chain hardware verification pass. Runs two smoke tests: video transcoding (20-30 min) and AI inference (35-65 min). Both run locally with Docker. No LPT, no ETH, no Arbitrum.

Test choices:
- Video Transcoding Test (20-30 min): verify GPU transcoding. Runs orchestrator + gateway on same machine, sends test stream via ffmpeg, confirms HLS output.
- AI Inference Test (35-65 min): verify AI inference. Runs orchestrator + AI runner with one warm model. Requires 24 GB VRAM for diffusion or 8 GB for LLM alternative.

Requirements: NVIDIA GPU, Docker Engine + NVIDIA Container Toolkit, ffmpeg (video test), Linux (required for AI test; video also works WSL2/macOS Docker). No wallet, no LPT, no ETH.

After quickstart cards: Setup Guide, Operator Rationale, Join a Pool, Workload Options.
---END FILE---

---FILE---
PATH: quickstart/video-transcoding.mdx
---FRONTMATTER---
title: 'Quickstart: Verify Your Hardware'
sidebarTitle: 'Verify Your Hardware'
description: 'Run off-chain video transcoding and AI inference tests to verify Livepeer works on your GPU - no staking, no ETH, no Arbitrum required.'
purpose: tutorial
keywords: [livepeer, orchestrator, quickstart, smoke test, video transcoding, AI inference, off-chain, Docker]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: quickstart
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Two smoke tests on one page. Both entirely off-chain.

## Video Transcoding Test (20-30 min)

Prerequisites: NVIDIA GPU (nvidia-smi), Docker + NVIDIA Container Toolkit, ffmpeg, Linux or WSL2/macOS.

Step 1: Pull go-livepeer: `docker pull livepeer/go-livepeer:stable`
Step 2: Start local orchestrator (off-chain):
```bash
docker run -d --name lp-orch-test --gpus all --network host livepeer/go-livepeer:stable \
  -orchestrator -transcoder -network offchain -nvidia 0 -serviceAddr 127.0.0.1:8936 -cliAddr 127.0.0.1:7936
```
Watch for: "Transcoding on Nvidia GPU 0"
Step 3: Start local gateway: `docker run -d --name lp-gw-test --network host livepeer/go-livepeer:stable -gateway -network offchain -orchAddr http://127.0.0.1:8936 -rtmpAddr 0.0.0.0:1935 -httpAddr 0.0.0.0:8935 -cliAddr 127.0.0.1:7935`
Step 4: Send test stream: `ffmpeg -re -f lavfi -i testsrc=size=1280x720:rate=30 -c:v libx264 -preset ultrafast -tune zerolatency -f flv rtmp://127.0.0.1:1935/test_stream` (10-15 seconds)
Step 5: Verify output: `ffprobe http://127.0.0.1:8935/stream/test_stream.m3u8` (valid stream metadata = success). Logs: "Got segment for stream test_stream" and "Transcode result OK"
Step 6: Clean up: `docker stop lp-orch-test lp-gw-test && docker rm lp-orch-test lp-gw-test`

## AI Inference Test (35-65 min)

Requires 24 GB VRAM for diffusion. LLM alternative for 8-16 GB VRAM.
Most time is model download (~6 GB for SDXL-Lightning).

Step 1: Pull AI runner: `docker pull livepeer/ai-runner:latest`
Step 2: Create dirs and aiModels.json:
```bash
mkdir -p ~/.lpData/models
```
aiModels.json: `[{"pipeline": "text-to-image", "model_id": "ByteDance/SDXL-Lightning", "warm": true, "price_per_unit": 4768371}]`

Step 3: Start orchestrator with AI worker:
```bash
docker run -d --name lp-ai-test --gpus all --network host \
  -v ~/.lpData/:/root/.lpData/ -v /var/run/docker.sock:/var/run/docker.sock \
  livepeer/go-livepeer:stable \
  -orchestrator -transcoder -network offchain -nvidia 0 \
  -serviceAddr 127.0.0.1:8935 -cliAddr 127.0.0.1:7935 \
  -aiWorker -aiModels /root/.lpData/aiModels.json -aiModelsDir /root/.lpData/models
```
CRITICAL: -aiModelsDir must be HOST path. /var/run/docker.sock mount required.

Step 4: Wait for "Warm model loaded: ByteDance/SDXL-Lightning" in logs (5-30 min, depends on download speed and GPU).

Step 5: Test inference:
```bash
curl -X POST http://127.0.0.1:8935/text-to-image -H "Content-Type: application/json" \
  -d '{"model_id": "ByteDance/SDXL-Lightning", "prompt": "a test image of a mountain at sunrise", "width": 512, "height": 512, "num_inference_steps": 4}' \
  -o test-output.png --max-time 30
file test-output.png  # Expected: "PNG image data"
```

Step 6: Clean up. Model weights remain in ~/.lpData/models/ for production reuse.

LLM alternative (8-16 GB VRAM accordion): Use tztcloud/livepeer-ollama-runner:0.1.1 + ollama/ollama. Pull model: `docker exec -it ollama ollama pull llama3.1:8b`. aiModels.json entry: pipeline=llm, model_id=meta-llama/Meta-Llama-3.1-8B-Instruct, url=http://llm_runner:8000.
---END FILE---

---FILE---
PATH: quickstart/AI-prompt-start.mdx
---FRONTMATTER---
title: 'Add AI to Your Node'
sidebarTitle: 'AI Prompt: Orchestrator Setup'
description: 'Add AI inference pipelines to an existing go-livepeer transcoding node with a hardware check, aiModels.json configuration, and startup command update.'
keywords: [livepeer, orchestrator, AI inference, AI runner, aiModels.json, VRAM, batch AI, GPU]
pageType: guide
audience: orchestrator
status: review
lastVerified: '2026-03-16'
og:image: /snippets/assets/domain/SHARED/LivepeerDocsLogo.svg
---BODY---
Extends an existing transcoding node with AI inference. Prerequisites: go-livepeer running as transcoding orchestrator on Arbitrum mainnet, Docker with nvidia-container-toolkit, 4+ GB free VRAM, model directory at ~/.lpData/models.

VRAM check table: image-to-text (4 GB), segment-anything-2 (6 GB), llm (8 GB, Ollama runner), audio-to-text (12 GB), image-to-video (16 GB+), image-to-image (20 GB), text-to-image (24 GB).

Step 1: Pull AI runner: `docker pull livepeer/ai-runner:latest`
Step 2: Create aiModels.json (configure pipeline, model_id, price_per_unit, warm). Fields: pipeline (required), model_id (required), price_per_unit (required), warm (optional), capacity (optional), optimization_flags (optional, SFAST/DEEPCACHE), url (external containers), token (bearer auth for external containers).
Step 3: Update startup command - add -aiWorker, -aiModels, -aiModelsDir, and Docker socket volume mount.
Step 4: Verify AI active - check logs for "Warm model loaded", test inference via curl, check docker ps for ai-runner container.

Note: Beta - only one warm model per GPU supported.
---END FILE---

---FILE---
PATH: quickstart/tutorial.mdx
---FRONTMATTER---
title: 'Quickstart Tutorial'
sidebarTitle: 'Tutorial'
description: 'Follow the quickest guided path to verify Livepeer video or AI workloads on your hardware before moving to production setup.'
keywords: [livepeer, orchestrator, quickstart tutorial, smoke test, hardware verification]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: tutorial
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Guided path: (1) Read Quickstart overview to confirm path matches hardware/time budget; (2) Run video transcoding smoke test to verify Docker, GPU passthrough, and local off-chain routing; (3) Use Add AI to Your Node to extend same machine with AI inference. Quickstart stays off-chain. Move to Setup Guide after smoke test passes.
---END FILE---

---FILE---
PATH: quickstart/dep-x-setup-paths.mdx
---FRONTMATTER---
title: 'How to Get Started'
sidebarTitle: 'Setup Paths'
description: 'Deprecated setup paths page.'
status: deprecated
---BODY---
[Deprecated/warning flag page. Redirects to current setup guidance.]
---END FILE---

---FILE---
PATH: guides/operator-considerations/operator-rationale.mdx
---FRONTMATTER---
title: 'Operating Rationale'
sidebarTitle: Operator Rationale
description: 'Cost categories, revenue sources, viability thresholds, and a decision matrix for evaluating whether running a Livepeer Orchestrator makes sense for your situation.'
keywords: [livepeer, orchestrator, feasibility, worth it, economics, lpt stake, cost analysis, earnings potential, pool worker, solo orchestrator, ai inference, operating rationale]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
purpose: evaluation
status: current
lastVerified: '2026-03-15'
---BODY---
Decision guide for evaluating whether and which Orchestrator path fits a given operator. Directs to Incentive Model for mechanics and Navigator for setup paths.

Quick path summary table: Pool worker (any NVIDIA GPU, little LPT, lower commitment / lower control+ceiling); Solo AI Orchestrator (24 GB+ VRAM, limited LPT, manage warm models / AI demand shifts fast); Solo video Orchestrator (reliable GPU+bandwidth, enough LPT for active set / active-set stake is biggest barrier); Commercial/pool operator (multiple GPUs or Gateway demand, 99%+ standards / relationship-building + monitoring + disciplined pricing).

What Orchestrators Earn table: ETH job fees (Gateways pay per transcoding segment or AI inference job via PM tickets / capability, pricing, performance, uptime, Gateway selection); LPT inflation rewards (protocol mints LPT each round ~22 hours, active Orchestrators claim by calling Reward() once per round / total bonded stake, inflation rate, reward call reliability).

Cost Categories (AccordionGroup):
- Hardware: video transcoding any NVENC GPU, batch AI 8-24 GB VRAM, Cascade AI 24 GB min. Break-even example: £800 RTX 4090 + £30/month = >2 year hardware break-even before electricity.
- LPT Stake: active set required for video. No borrowing. Alternatives: pool worker (no LPT) or AI-only (capability-based routing).
- ETH for Gas: Reward() ~$0.01-0.12/call; ticket redemptions ~$0.01-0.05/batch; activation one-time. Budget ~$5-15/month.
- Bandwidth: ~6 Mbps down + ~5.6 Mbps up per concurrent stream. AI inference much lighter.
- Electricity: RTX 3060 ~150-170W, RTX 3090 ~300-350W, RTX 4090 ~350-450W, A100 80GB ~250-400W. RTX 4090 24/7 ~£30-60/month UK or $35-70/month US.
- Ongoing Time: initial setup 4-16h, maintenance 1-3h/week, updates 30-60 min/release.

Three Viability Questions:
1. Is reward calling profitable? Check Explorer "Estimated Reward This Round" vs gas cost ~0.00005 ETH threshold.
2. Can node compete on pricing? Video: -pricePerUnit below Gateway maxPricePerUnit. AI: capability first then price; stake matters less.
3. Is setup stable enough? Missing reward rounds = permanent LPT loss. Production-grade not required but ~95%+ uptime needed. Pool worker path better for home setups with unreliable infra.

Decision Matrix (mermaid flowchart + table): Pool worker (any GPU / none / low) → Solo video (GPU+100Mbps / active-set threshold / high 8-16h) → Solo AI (24GB VRAM / minimal to activate / medium 4-8h) → Pool operator (multiple GPUs + infra / active-set + buffer / very high).

Video vs AI comparison table: active set required (yes video / no AI), revenue stability (stable continuous / variable demand-dependent), GPU dependency (recommended / required VRAM-constrained), competition (mature / growing less saturated early 2026), revenue per job (low per segment high volume / higher per job lower volume), setup complexity (lower / higher aiModels.json + VRAM management).

Research Tools: explorer.livepeer.org/orchestrators, tools.livepeer.cloud/ai/network-capabilities, Livepeer Discord #orchestrators, Livepeer Forum.
---END FILE---

---FILE---
PATH: guides/operator-considerations/requirements.mdx
---FRONTMATTER---
title: 'Requirements'
sidebarTitle: 'Requirements'
description: 'GPU support policy, NVENC session limits by card tier, VRAM requirements by AI pipeline, system stack minimums, capacity testing with livepeer_bench, and a pre-launch readiness checklist.'
keywords: [livepeer, orchestrator, hardware, gpu, nvidia, nvenc, nvdec, vram, cuda, livepeer_bench, transcoding hardware, ai inference hardware, requirements, capacity]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: reference
audience: orchestrator
purpose: reference
status: current
lastVerified: '2026-03-15'
---BODY---
Readiness filter before investing in setup. Does machine, network, and system stack support the workload path?

GPU Vendor Support: NVIDIA only. AMD/Intel not supported. CUDA required for both NVENC video transcoding and AI pipelines. Minimum CUDA version: 12.0. Driver check: `nvidia-smi` (output: driver version, CUDA version, GPU name, memory).

NVENC/NVDEC Session Limits: Consumer GeForce RTX 2-3 concurrent sessions (hardware licensing cap). RTX Workstation/Quadro uncapped. NVIDIA A-series (A100, A4000, A5000) uncapped. L-series (L4, L40) uncapped. H-series (H100) uncapped. Source of truth: developer.nvidia.com/video-encode-decode-gpu-support-matrix.

Hardware Tiers by Workload:
Video: Consumer (RTX 3060-4090) 2-3 sessions capped; Data centre (A4000, A5000, RTX 6000, L4) uncapped 10-20+; High-end DC (A100, H100) uncapped max. CPU possible but not competitive.
Batch AI: 8-12GB (RTX 3060, RTX 2060 Super) → audio-to-text, image-to-text, segment-anything-2, small LLMs; 24GB (RTX 3090, RTX 4090, A5000) → all diffusion pipelines; 40-80GB (A100, H100) → multiple large models simultaneously.
Cascade AI: minimum 12-16 GB VRAM (StreamDiffusion SD 1.5), competitive 24 GB (SDXL), frame buffer overhead +1-2 GB, fast PCIe bandwidth, models must stay warm.

System Requirements table: CPU (4 cores min / 8-16 recommended), RAM (16 GB / 32-64 GB), Storage (100 GB SSD / 1 TB NVMe SSD more for AI model weights), Network (100 Mbps / 1 Gbps symmetric), OS (Ubuntu 22.04 LTS / 22.04 or 24.04), CUDA (12.0 / 12.4+), Docker (required for AI runner), NVIDIA Container Toolkit (required for AI runner).

Storage note: single SDXL model ~7-8 GB; budget 100 GB per 4-5 models.
Network note: latency to Gateways matters more than raw throughput for AI jobs.

Testing Capacity with livepeer_bench:
Step 1: Download test stream from storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz
Step 2: Run scaling test (for loop 1..20, livepeer_bench -in bbb/source.m3u8 -nvidia 0 -concurrentSessions $i, grep Duration Ratio >> bench.log)
Step 3: Duration Ratio interpretation: <1.0 headroom available; =1.0 no headroom; >1.0 overloaded. Last session count with ratio ≤0.8 = practical hardware limit. Use this value for -maxSessions.

Pre-launch Checklist (8 steps): verify GPU (nvidia-smi), verify Docker GPU access (docker run --gpus all), install NVIDIA Container Toolkit if needed (full apt install command), confirm ports open (8935 RPC public, 7935 CLI localhost), confirm Arbitrum RPC access (curl eth_blockNumber test), check static IP or DDNS (serviceAddr must be stable), run capacity test (livepeer_bench), confirm ETH balance on Arbitrum (min 0.01 ETH for activation + initial reward calls).
---END FILE---

---FILE---
PATH: guides/operator-considerations/business-case.mdx
---FRONTMATTER---
title: 'Business Case'
sidebarTitle: 'Business Case'
description: 'How commercial Orchestrators operate - earning from service fees instead of inflation, building Gateway relationships, and positioning for application workloads.'
keywords: [livepeer, orchestrator, commercial orchestrator, business case, service fees, SLA, gateway relationship, pricing strategy, pricePerGateway, application workloads, commercial GPU, professional operation]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
purpose: evaluation
status: current
lastVerified: '2026-03-15'
---BODY---
Commercial Orchestrator operation: node as paid infrastructure for Gateways and applications. Fee-driven service delivery vs inflation-first participation.

Hobbyist vs Commercial comparison table: Primary income (LPT inflation / ETH service fees); Revenue lever (total bonded stake / job volume + pricing discipline + uptime); Uptime (95% / 99%+); Gateway relationship (passive get selected / active build relationships); Hardware (existing repurposed / dedicated investment planned); Monitoring (periodic Prometheus optional / automated alerting SLA dashboards); Model loading (on demand cold starts acceptable / pre-loaded warm cold starts = SLA failures).

Why Service Fees Scale: large-stake Orchestrator earns fixed % of round inflation regardless of jobs processed. ETH fees scale linearly with volume. For high-volume AI inference serving, monthly ETH fee income can exceed LPT inflation. Mermaid: Service Fee Income (jobs × price → ETH scales with volume) vs Inflation Reward Income (stake × inflation rate → LPT fixed % of round).

Commercial Operation Requirements:
- Uptime 99%+: automated monitoring+restart, stable redundant connectivity, consistent power (UPS or colo), hardware health monitoring.
- Model warm-up: cold starts break user-facing SLAs. VRAM requirements = sum of ALL simultaneously loaded models, not just largest.
- Latency targets: Gateways rank by response latency, uptime history, job success rate. Optimise for: network proximity to high-volume Gateways, dedicated GPU (not shared), fast NVMe storage.

Working with Gateways:
- Per-Gateway pricing: -pricePerGateway='{"0xGatewayEthAddress": 800, "0xOtherGateway": 950}' - negotiated rate for specific high-volume Gateways.
- Capability signalling: declare only loaded+warm models. Remove slow-start models from active set. Use -aiModels to control startup loading.
- Building relationships: consistent Explorer performance history, Discord #orchestrators, direct outreach to Gateway SPEs, demonstrated capability support.

Positioning for Commercial Workloads (AccordionGroup): Capability selection (pipelines with few Orchestrators + active demand, high-VRAM models, Cascade AI); Pricing discipline (maxPricePerUnit ceiling awareness, no floor-pricing signal, -pricePerGateway for volume discounts, -autoAdjustPrice risks); Infrastructure investment (colo/cloud GPU, dedicated GPUs, redundant connectivity, UPS/colo power); Monitoring and alerting (Prometheus port 7935, Grafana/PagerDuty, alert on: node offline, GPU memory pressure, reward call failures, session failure rates).

Commercial Operator Landscape: Pool operators (manage Orchestrator registration + staking + reward calling for GPU worker fleet, earn margin on job income). Enterprise GPU operators (dedicated fleets for AI application workloads, SLA-level commitments, DC-grade hardware). Dual-workload operators (video + AI from same infrastructure).
---END FILE---

---FILE---
PATH: guides/operator-considerations/operator-impact.mdx
---FRONTMATTER---
title: 'Operator Impact'
sidebarTitle: 'Operator Impact'
description: 'How Orchestrators shape the Livepeer protocol - governance weight, what gets voted on, the sovereign compute thesis, and why open video infrastructure matters.'
keywords: [livepeer, orchestrator, governance, protocol influence, LPT voting, LIPs, livepeer improvement proposals, sovereign compute, open infrastructure, treasury, decentralised governance, delegator voting]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
purpose: evaluation
status: current
lastVerified: '2026-03-15'
---BODY---
Governance weight proportional to total bonded stake (self-stake + delegated). Every LPT staked to an Orchestrator = voting influence over protocol rules, network priorities, and infrastructure.

Governance Mechanics (mermaid flowchart): LIP proposal drafted → submitted to livepeer/LIPs → on-chain poll created (costs 100 LPT) → polling period ~10 rounds/~10 days → threshold check (33.33% of staked LPT + 50% of votes cast) → implemented or fails.

Key mechanics: voting weight = total bonded stake; passing threshold = 33.33% all staked LPT support + 50% votes cast approve; delegator override - Delegators can vote independently overriding Orchestrator position; poll creation = 100 LPT (anti-spam).

Scope of Governance table: Protocol parameters (inflation rate targets, active set size, unbonding periods, slashing / directly affects earnings and competitive dynamics); Fee structures (ticket pricing models, PM mechanics, fee distribution / how ETH service fees flow); Technical upgrades (new workload types, contract upgrades, AI subnet, capability expansions / which workloads network supports + how priced); Treasury allocation (SPE grants, development funding, ecosystem programmes / funds Orchestrator tooling, community pools, ecosystem growth); Governance process (quorum thresholds, voting periods, Foundation structure / shapes how future decisions are made).

Livepeer Foundation launched 2025, coordinates ecosystem development. Does NOT replace stake-weighted governance. Governance tracked at forum.livepeer.org/c/governance/17 and github.com/livepeer/LIPs.

Stake as Governance Capital: good operation → more delegated stake → higher total stake → greater governance vote weight → influence protocol decisions → feedback loop back to operate well.

Sovereign Compute Case: dominant alternative = centralised cloud (AWS, Azure, GCP). Centralised compute creates: single points of control, censorship vectors, vendor lock-in, pricing power. Livepeer Orchestrators = decentralised alternative governed by token holders, no single provider able to suspend/censor/price out entire market.

Accordions: For independent media (content policies, permissionless compute substrate); For AI researchers (GPU access gatekeeping, any application can access GPU compute by paying ETH market rate, no account approval); For platforms avoiding lock-in (multiple competing Orchestrators distributes risk, no single Orchestrator failure disrupts well-configured Gateway); For developers building on open compute (uncensorable media archives, AI apps with no usage monitoring, cross-jurisdiction platforms).

Practical Governance Participation: follow Forum proposals (before on-chain vote, operator perspectives needed); vote on LIPs via explorer.livepeer.org/voting; communicate governance positions to Delegators (most delegators don't vote independently, their stake defaults to Orchestrator's position); engage with SPE proposals (treasury resources allocation affects tooling, infrastructure, growth programmes).
---END FILE---

---FILE---
PATH: guides/operator-considerations/feasibilits-sources.md
---FRONTMATTER---
[Research log - .md file, not published]
---BODY---
Research log for feasibility-economics.mdx, hardware-reference.mdx, benchmarking.mdx, session-limits.mdx. Documents sources: uploaded v2 files (p-feasibility.mdx placeholder, rcs-requirements.mdx, assess-capabilities.mdx v1, benchmark-transcoding.mdx v1, set-session-limits.mdx v1, set-pricing.mdx v1, configure-reward-calling.mdx v1), go-livepeer GitHub source verification (livepeer_bench.go flags confirmed, transcodingOptions.json current profiles 240p/360p/480p/720p - 1080p REMOVED, MaxSessions=10 default confirmed), project internal files, ecosystem tools (Explorer, tools.livepeer.cloud, NVIDIA matrix). Unverified items table with flag person assignments (Rick/community). Version notes: all go-livepeer verification against master March 2026. v1 content predates Arbitrum migration, AI inference addition, transcodingOptions.json profile change, CSV schema update.
---END FILE---

---FILE---
PATH: guides/staking-and-rewards/earning-model.mdx
---FRONTMATTER---
title: Earning Model
sidebarTitle: Earning Model
description: 'How orchestrators earn on Livepeer — ETH service fees, LPT inflationary rewards, commission parameters, what wins jobs, and how AI changes the fee landscape.'
keywords: [livepeer, orchestrator earnings, lpt rewards, eth fees, reward cut, fee share, transcoding fees, ai inference fees, orchestrator income, commission]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: concept
audience: orchestrator
purpose: concept
status: published
lastVerified: 2026-03-13
---BODY---
Two distinct revenue streams with different mechanics.

ETH Service Fees: Gateways pay per transcoding or AI inference job via probabilistic micropayment signed tickets redeemed on Arbitrum. Video: per segment (~2s), low (commoditised), GPU recommended. AI inference: per inference job (pixel/ms/token), higher (GPU-intensive), GPU required.

What determines work won: Stake weight (higher stake = larger active set position = more segments); Capability match (support requested pipeline/resolution?); Performance history (transcoding success rate, AI inference latency, uptime); Pricing (below Gateway maxPricePerUnit?); Model warmth AI (warm models win over cold for latency-sensitive jobs).

LPT Inflationary Rewards: Protocol mints LPT each round (~22h on Arbitrum). Three requirements to receive: (1) in active set (top orchestrators by stake weight), (2) successfully call Reward() on-chain that round, (3) LPT bonded (self-stake).
- Inflation rate: rises when bonded LPT <~50% total supply; falls when >~50%. As of early 2026 ~61% bonded so rate gradually declining toward floor.
- Treasury allocation: LIP-89 (March 2026) 10% of each round's minted LPT goes to Livepeer Treasury before distribution. Remaining 90% distributed to Orchestrators.
- Missing Reward() = permanently lost. No catch-up mechanism.

Commission Parameters:
- Reward cut: % of LPT inflation Orchestrator keeps. Formula: Your LPT = Round issuance share × rewardCut; Delegator LPT = Round issuance share × (1 − rewardCut) × (their stake / total stake). Example: 100 LPT earned, 20% rewardCut → you keep 20 LPT, delegators split 80 LPT.
- Fee share: % of ETH job fees shared with delegators. Formula: Delegator ETH = Job fees × feeShare × (their stake / total stake); Your ETH = Job fees × (1 − feeShare). Example: 0.1 ETH, 50% feeShare → you keep 0.05 ETH, delegators split 0.05 ETH.

Transcoding vs AI Fees comparison table: Fee source (live stream demand / application API calls); Pricing unit (per segment / per pixel/ms/token); Revenue (continuous lower margin / per-request higher margin); Competitiveness (stake + price / capability + model warmth + price); GPU dependency (recommended / required); Stake affects routing (yes stake-weighted / partially capability first price second).

Key distinction: for video, stake weight determines routing queue position. For AI, Gateway filters by capability and price first - stake matters less than having right pipeline at competitive price.

Payment flow summary: Gateway routes job → completion → PM ticket sent → winning tickets accumulate → Redeemer submits on-chain (Arbitrum) → ETH arrives in Orchestrator wallet.

Monitoring: explorer.livepeer.org (stake, delegator list, reward call history, fee revenue, active set status); tools.livepeer.cloud (AI pipeline capability coverage); go-livepeer Prometheus metrics (current job counts, success rates, ticket values).

YouTube embed: OVMjzJKMJnI (Orchestrator Economics — How to Earn LPT and ETH).
---END FILE---

---FILE---
PATH: guides/staking-and-rewards/reward-mechanics.mdx
---FRONTMATTER---
title: Reward Mechanics
sidebarTitle: Reward Mechanics
description: 'Protocol reward mechanics for Livepeer orchestrators — how LPT inflation flows, calling Reward() automatically and manually, gas thresholds on Arbitrum, fee redemption, setting commission, and monitoring for missed rounds.'
keywords: [livepeer, orchestrator, reward calling, lpt inflation, reward cut, fee share, arbitrum gas, livepeer_cli, ticket redemption, missed rounds]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
Reward calling mechanics. Assumes Earnings Explained read. Active orchestrator node required.

How LPT Rewards Flow: Round initialises → protocol calculates proportional share (total stake: self-bond + delegated) → 10% to Treasury (LIP-89) → 90% to active Orchestrators → each calls Reward() on-chain → rewardCut % to operator, remainder to delegators. Share = (your total stake / total active stake).

Inflation rate: dynamic. Increases when bonded LPT <~50%; decreases when >~50%. 2026: declining. Check Explorer for current rate.

Calling Reward() Options:
Option 1 (default - automatic): go-livepeer calls Reward() at start of each new round. Requirements: node running at round init, ETH wallet has sufficient Arbitrum ETH for gas, Orchestrator in active set. DO NOT use -reward=false. Nodes offline at round init miss that round - no retry. Use systemd or Docker restart policies.

Option 2 (manual): Disable with -reward=false. Estimate profitability: gather current Arbitrum gas price (arbiscan.io), gas used per call (350k-450k), LPT value from Explorer "Estimated Reward This Round". Formula: ETH cost = gas_used × gas_price_in_ETH; profitable if LPT earned (in ETH) > ETH cost. Call manually: `livepeer_cli` → "Invoke reward" → confirm tx. Re-enable: remove -reward=false flag.

Gas Costs on Arbitrum table: gas units per call (350k-450k), typical gas price (0.01-0.1 gwei), typical ETH cost (~0.000005-0.00005 ETH), at ETH=$2,500 (~$0.01-$0.12 USD per call). Keep ETH on Arbitrum in wallet - depletion causes silent failures.

Setting Commission via livepeer_cli: `livepeer_cli` → "Set orchestrator config" → update rewardCut (% LPT inflation kept, 0-100%) and feeShare (% ETH fees shared with delegators, 0-100%). Takes effect next round.

Commission Strategy table: Delegator-attractive (rewardCut 0-10%, feeShare 50-100%, best for building stake from zero); Balanced (15-25%, 20-50%, mid-stage with some delegation); Operator-heavy (50%+, 0-20%, high self-stake few delegators). Warning: changing rates after attracting delegators is primary way Orchestrators damage reputation. Delegators monitor and migrate.

ETH Fee Flow: Gateway routes job → completion → PM tickets sent → winning tickets accumulate → Redeemer submits on-chain → ETH confirmed in Arbitrum wallet → feeShare % flows to delegators' claimable balances. Redeemer is go-livepeer component handling on-chain submission automatically.

Monitoring for Missed Rounds: Explorer shows reward call history on Orchestrator profile. Gaps = missed rounds. Prometheus alert example: `livepeer_orchestrator_reward_call_status` metric, alert on `increase(...{status="failed"}[2h]) > 0`. Explorer reward call ratio (rewardCalls / n over 90 rounds) visible to delegators - affects their yield calculation.

Worked example (illustrative): 10,000 LPT total stake (3k self + 7k delegated), 2M LPT total network active stake, 0.5% fraction, 0.05% inflation rate, 30M LPT total supply → 15,000 LPT minted/round → after 10% treasury = 13,500 distributed → your allocation = 67.5 LPT → you keep (15% rewardCut) ~10 LPT → delegators receive ~57.5 LPT total.

YouTube embed: OVMjzJKMJnI (Reward Calling and LPT Earning).
---END FILE---

---FILE---
PATH: guides/staking-and-rewards/delegate-operations.mdx
---FRONTMATTER---
title: Delegate Operations
sidebarTitle: Delegate Operations
description: 'How to attract and retain LPT delegators as a Livepeer orchestrator — what delegators evaluate, the Explorer ROI formulas explained, commission strategy, reputation, and the compounding stake flywheel.'
keywords: [livepeer, orchestrator, delegators, lpt delegation, stake, reward cut, fee share, orchestrator reputation, yield calculation, roi]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
How to grow delegated LPT stake. Total stake = self-bonded LPT + delegated LPT from third parties. Compounding dynamic: more total stake → larger inflation share + higher active set position → more ETH fee revenue → higher v_daily → more attractive to delegators.

Explorer ROI Calculation (exact formulas):
ETH (fee) yield: yield_ETH = (v_daily × 365) × s_fees × (p / (p + l_orch))
Where v_daily = 90-day avg daily fee volume ETH, s_fees = feeShare decimal, p = delegator's stake, l_orch = current total active stake.

LPT (inflation) yield: yield_LPT = (l_total × (1+r_inf)^417 - l_total) / l_active × ((p + l_orch) × r_rewards) × (s_rewards × (p / (p + l_orch)))
Where l_total = current LPT supply, r_inf = inflation rate per round, l_active = total LPT bonded network, r_rewards = rewardCalls/n (up to 90 rounds), s_rewards = rewardShare (1-rewardCut), 417 = approx rounds/year.

Combined yield: yield_total = yield_LPT + yield_ETH × price_LPT/ETH. ETH converted to LPT for comparison. Formula implementation: github.com/livepeer/explorer blob/main/lib/roi.ts.

Four things delegators evaluate:
1. Reward call ratio (rewardCalls/n over 90 rounds) - visible on Explorer, feeds yield formula. Below 1.0 = signal of unreliability. Delegators migrate from declining ratios.
2. Fee share and reward share - competitive range early 2026: rewardCut (Very competitive 0-10% / Moderate 10-25% / Operator-heavy 25-100%); feeShare (Very competitive 75-100% / Moderate 30-75% / Operator-heavy 0-30%). New Orchestrators should start at competitive end.
3. Daily fee volume v_daily (90-day avg). Higher = more ETH in fee share calculation. Improve by: competitive session limits, popular AI models warm at competitive prices, high uptime low latency.
4. Active stake dilution: delegator yield diluted by (p / (p + l_orch)). Smaller Orchestrators offer higher yield per unit of delegated stake because smaller denominator.

Building Reputation: transparency (Forum post, Discord announcements, on-chain commission change with advance notice - 1 round min, 1 week better); commission stability (most common delegator complaint = rate change after delegation; Explorer shows commission change history; delegators check this); AI capabilities (since Q3 2024 AI Orchestrators have higher v_daily than transcoding-only nodes, compounding advantage).

Delegation Mechanics (delegator side): connect wallet to Explorer → browse Active Orchestrators table → evaluate profile (stake history, daily fee volume graph, delegator count, reward call ratio, commission change history, yield calculator with custom p) → bond LPT (holds in wallet while bonded) → unbonding period ~7 days (natural stickiness).

Common Pitfalls: variable commission (solution: treat rates as public commitment, announce changes in advance with reasons); inflation rate changes (solution: explain protocol-level factors, link to Explorer inflation rate); missed reward rounds (solution: automate, monitor with alerts, maintain ETH balance).

Resources to share with delegators: Explorer yield calculator, v2/lpt/delegation guide, livepeer.org/primer.
---END FILE---

---FILE---
PATH: guides/payments-and-pricing/payments.mdx
---FRONTMATTER---
title: Payments
sidebarTitle: Payments
description: 'How ETH moves from gateway to your orchestrator wallet — probabilistic micropayments, winning ticket mechanics, the Redeemer, on-chain redemption on Arbitrum, and keeping your node funded for transactions.'
keywords: [livepeer, orchestrator, payments, probabilistic micropayments, winning ticket, redeemer, arbitrum, eth fees, ticket redemption, clearinghouse]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: concept
audience: orchestrator
purpose: concept
status: published
lastVerified: 2026-03-13
---BODY---
Probabilistic micropayments (PM) system. Gateways send lightweight signed tickets; fraction are winners redeemable for larger ETH payout. All steps from ticket receipt to on-chain submission happen automatically inside go-livepeer.

PM Mechanics: win probability (e.g. 1/1000) × face value (e.g. 1000 × per-segment fee) = expected value = fee per segment. Only winning tickets trigger on-chain action. Gas costs batched implicitly - one redemption covers hundreds or thousands of segments. Busy orchestrator redeems ETH in few batched submissions/day.

Ticket Structure fields: Face value (ETH amount payable on win), Win probability (e.g. 1e-5), Sender address (gateway's ETH address), Recipient address (Orchestrator's ETH address), Sender deposit (gateway's on-chain deposit backing all tickets), Expiry (block number after which ticket cannot be redeemed), Signature (gateway's ETH signature authorising payment).

Node verifies signature + checks sender deposit + evaluates win condition using deterministic random function. Winning tickets go to Redeemer queue.

Redeemer: go-livepeer component submitting winning tickets to Arbitrum PM contract. Standard single-node setup: runs as part of main process. Multi-node/high-volume: often separate service to centralise on-chain redemption across worker nodes.

Redemption flow: Winning ticket → Redeemer batches pending winners → submits batch tx to Arbitrum PM contract → contract verifies (valid sig, sufficient sender deposit, not expired) → ETH transferred from gateway deposit to your wallet.

Gas: ~100k-200k gas per redemption, 0.01-0.1 gwei, ~$0.01-$0.05 USD. Minimum 0.01 ETH on Arbitrum. Winning tickets expire at expiry block - depleted wallet = permanent ETH loss.

Video vs AI Payment Differences (AccordionGroup):
- Video transcoding: per segment (~2s), continuous for active streams, one ticket per segment delivered, stake-weighted routing, low per-segment fee. Pricing: -pricePerUnit in Wei per pixel.
- AI inference: per inference job, per-request bursts, one ticket per completed job, capability first+price second routing, higher per-job than transcoding. Pricing: aiModels.json price_per_unit.
- Live AI (Cascade): per second of active stream, periodic PM tickets at regular intervals during session, gateway maintains running session state. Live AI payment state managed by remote signer component (PRs #3791 and #3822).

Clearinghouses: third-party operator manages PM deposit and ticket signing on behalf of Gateways that don't want crypto infrastructure. From Orchestrator's perspective: identical to direct PM payments (same ticket structure, same Redeemer, same Arbitrum redemption). Clearinghouse = transparent to Orchestrators. Enables browser/mobile Gateways, enterprise fiat settlement.

Funding Your Node (ETH needed for): Reward() call (~0.000005-0.00005 ETH/round, once per ~22h); Ticket redemption (~0.00002-0.0001 ETH/batch, multiple times daily at volume); Activation/re-registration (~0.0001 ETH one-time, rare). Recommended minimum: 0.01 ETH. Replenish when <0.005 ETH.

Bridging ETH to Arbitrum (4 steps): bridge.arbitrum.io → connect wallet → Ethereum to Arbitrum One → wait ~15 min → verify on arbiscan.io. Also available direct from exchanges supporting Arbitrum One withdrawal.

Payment Health Prometheus Metrics: livepeer_pm_winning_tickets_received, livepeer_pm_winning_tickets_redeemed, livepeer_pm_ticket_redemption_errors, livepeer_eth_balance. Healthy: redeemed tracks closely behind received, zero sustained redemption_errors.
---END FILE---

---FILE---
PATH: guides/payments-and-pricing/payment-receipts.mdx
---FRONTMATTER---
title: 'Payment Receipts'
sidebarTitle: 'Payment Receipts'
description: 'How probabilistic micropayment tickets arrive, when they win, how the Redeemer submits them on-chain, and how to verify ticket redemption is working correctly.'
keywords: [livepeer, orchestrator, probabilistic micropayments, winning ticket, ticket redemption, redeemer, arbitrum, eth fees, gas costs, payment verification]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: concept
audience: orchestrator
status: draft
lastVerified: '2026-03-16'
---BODY---
Receiver-side mechanics of PM tickets. ETH earnings arrive in discrete redemption steps when winning tickets redeemed on-chain - stepped pattern is expected behaviour.

Receipt flow: node processes job → sends result to gateway → gateway sends signed PM ticket back → node evaluates ticket (winner/non-winner) → non-winning discarded → winning tickets queued → Redeemer submits to Arbitrum TicketBroker → ETH credited to Orchestrator wallet.

Ticket fields same as payments.mdx. Node verifies signature + checks gateway on-chain deposit + evaluates win condition (deterministic pseudorandom function seeded by ticket contents + current block hash, compared against winProbability threshold). Expected value: win_prob × face_value = fee per job.

At low volumes: high variance (node with 10 jobs/day might see zero some days, two others). Variance decreases with volume.

Redeemer: runs as part of main process on single-node setup, no separate config. Redemption tx gas: ~100k-200k gas, 0.01-0.1 gwei, ~$0.01-$0.05 USD. Batches pending winners - busy Orchestrator redeems ETH in few batched submissions/day. Maintain minimum 0.01 ETH on Arbitrum; replenish at <0.005 ETH. Winning tickets carry expiry block - depleted wallet = permanent ETH loss.

Monitoring Payment Receipts:
- Expected ETH per round = jobs_per_round × per_job_fee × (1 - gas_overhead). Low volume = high divergence.
- Verify redemption: check Orchestrator wallet on arbiscan.io for incoming transactions from TicketBroker. Filter logs: `journalctl -u livepeer -f | grep -i "ticket|redeem|winning"`.
- Key log messages: "Winning ticket" (passed win condition, queued); "Redeemed ticket" (submission succeeded, ETH credited); "Failed to redeem ticket" (check ETH balance + RPC); "Ticket expired" (permanent ETH loss).
- Zero earnings possible causes: low job volume (<20/day normal zero-win rounds), ETH balance depleted, RPC connectivity issue, node offline during job routing, price above gateway caps.

Overlapping scope note: this page = receiver-side ticket mechanics. payments.mdx = broader PM architecture, full ETH funding, video vs AI payment differences, clearinghouses.
---END FILE---

---FILE---
PATH: guides/roadmap-and-funding/funding-and-support.mdx
---FRONTMATTER---
title: 'Funding and Support'
sidebarTitle: 'Funding & Support'
description: 'Funding programmes, grants, and community resources for Livepeer orchestrator operators - SPE grants, AI Video Startup Programme.'
keywords: [livepeer, orchestrator, grants, SPE, funding, operator support]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
status: draft
lastVerified: 2026-03-16
---BODY---
[Draft stub. Will consolidate current funding programmes, grant paths, and support channels relevant to Orchestrator operators once confirmed for publication. Planned content: SPE grants (what they fund, how to apply, milestone accountability), AI Video Startup Programme, treasury proposals, community support channels (Discord #orchestrating, Forum /c/transcoders), Livepeer Foundation resources.]
---END FILE---

---FILE---
PATH: guides/roadmap-and-funding/orchestrator-profiles.mdx
---FRONTMATTER---
title: 'Orchestrator Profiles'
sidebarTitle: 'Operator Profiles'
description: 'Active orchestrator operators on the Livepeer network - who is operating, what they have built, and community highlights.'
keywords: [livepeer, orchestrator, showcase, community, operators]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
status: draft
lastVerified: 2026-03-16
---BODY---
[Draft stub. Will collect operator profiles, working examples, and community highlights once source material ready. Planned: hardware/workloads/earnings range/operating model per operator, pool operator profiles, commercial operator examples, community highlights.]
---END FILE---

---FILE---
PATH: guides/monitoring-and-tooling/operator-toolbox.mdx
---FRONTMATTER---
title: Operator Toolbox
sidebarTitle: Operator Toolbox
description: 'Every tool for monitoring, verifying, and operating your Livepeer orchestrator — Explorer, Prometheus metrics, Docker monitoring stack, community dashboards, and capability testing utilities.'
keywords: [livepeer, orchestrator, explorer, prometheus, grafana, monitoring, tools, dune, tools.livepeer.cloud, metrics]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: reference
audience: orchestrator
purpose: reference
status: published
lastVerified: 2026-03-13
---BODY---
Tool selection guide for operations. After node is running.

Livepeer Explorer (explorer.livepeer.org): authoritative on-chain dashboard from Arbitrum subgraph. Profile URL: explorer.livepeer.org/accounts/<address>/orchestrating. Shows: Active Set and Stake (top 100, rank by total stake), Reward Call History (round-by-round, target 100% call rate), Earnings (cumulative ETH fees + LPT rewards), Governance (vote on LIPs + treasury proposals), reward cut + fee share settings, delegator list, rounds active. Note: Explorer shows on-chain data only; AI model warm status at tools.livepeer.cloud; pool worker contributions invisible.

Node Metrics (Prometheus): enable with -monitor flag (plus -metricsPerStream, -metricsClientIP). Endpoint: localhost:7935/metrics. Key categories: session count + capacity utilisation, segment success/failure rates, winning ticket counts, job processing latency, GPU utilisation.

Docker monitoring stack (fastest): `docker run --net=host --env LP_MODE=standalone --env LP_NODES=localhost:7935 livepeer/monitoring:latest`. Open Grafana at localhost:3000. Multi-node: comma-separate LP_NODES. Modes: standalone, docker-compose, kubernetes. GitHub: livepeer/livepeer-monitoring.

Custom Prometheus: add job_name=livepeer scrape target at localhost:7935, scrape_interval 15s to prometheus.yml.

Cloud SPE Tools (tools.livepeer.cloud): community-built suite. Key sections: /ai/network-capabilities (all AI-capable Orchestrators by pipeline, which models warm), payout reports (daily/weekly/monthly earnings per address), Orchestrator view (per-Orchestrator stats including pricing + job activity). Warning: community infra, intermittent availability.

Network Dashboards (Dune Analytics): Growth Dashboard (dune.com/rickstaa/livepeer-growth-dashboard), Governance Dashboard (dune.com/rickstaa/livepeer-governance-dashboard), Token Dashboard Arbitrum (dune.com/stronk/livepeer-arbitrum).

Capability Testing: stream-tester (github.com/livepeer/stream-tester, submits transcoding jobs, measures response times and success rates), livepeer-ai-job-tester (github.com/mikezupper/livepeer-ai-job-tester, community Cloud SPE, submits AI inference jobs, records performance metrics).

Tool Selection Guide table: Am I in active set (Explorer → orchestrator list); Missed reward rounds (Explorer → reward call history); Node processing jobs now (Prometheus /metrics → session count; or -v 6 logs); Not receiving AI jobs (tools.livepeer.cloud/ai/network-capabilities); Transcoding pipeline working (stream-tester); Network-wide inflation rate (Dune dashboards); Pricing competitive (Explorer → compare top 20 Orchestrators).
---END FILE---

---FILE---
PATH: guides/monitoring-and-tooling/explorer-operations.mdx
---FRONTMATTER---
title: Explorer Operations
sidebarTitle: Explorer Guide
description: 'A walkthrough of every metric on your Livepeer Explorer orchestrator page — what each number means, what healthy looks like, and what to do when something is wrong.'
keywords: [livepeer, explorer, orchestrator, stake, reward, earnings, delegators, active set, monitoring]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
On-chain state readout from Arbitrum. Profile URL: explorer.livepeer.org/accounts/<address>/orchestrating.

Explorer Scope: Shows (on-chain state, protocol-level data, registered service URI, active/inactive status, delegators + individual stake amounts). Leaves out (live node health/uptime - use Prometheus; pool worker contributions invisible; AI model warm status - use tools.livepeer.cloud; which gateways routing to you - use Loki gateway API).

Active Set Status: top 100 Orchestrators by total stake at each round boundary. Watch: rank, active/inactive status, 30-day trend. Outside active set: gap to 100th-place = amount needed. Options: increase self-stake directly, attract more delegators.

Total Stake: sum of self-stake + delegated stake. Most important variable for active set ranking and proportion of video transcoding work. Self-stake vs delegated: self-bonded LPT you bonded to yourself; delegated from LPT holders who chose you. Pending stake: submissions not yet taken effect at next round boundary. AI routing: capability-based + price-based, stake smaller role.

Reward Cut and Fee Share: public service terms visible to potential delegators. Reward cut (% of LPT inflation you keep, rest to delegators proportionally); Fee share (% of ETH transcoding fees shared with delegators). Competitive benchmarks: check top 20 active Orchestrators. Typical competitive: reward cut 5-15%, fee share 0-10%. Changes require on-chain tx, take effect next round boundary, via livepeer_cli or Explorer UI.

Reward Call History: most operationally important metric. Each round ~22h, node must call reward() to claim inflation. Any missed round = permanently lost LPT for you and delegators. Target 100% call rate.

Diagnosing missed rounds (AccordionGroup): reward calling disabled (-reward=false), depleted ETH wallet (gas fails silently - keep 0.02-0.05 ETH buffer), node offline at round boundary (~22h, compare maintenance windows), using OrchestratorSiphon (consider split setup for recurrent missed rewards).

Fees Earned: cumulative ETH from transcoding + AI fees. Low/zero despite active set: (1) price too high (-pricePerUnit exceeds gateway maxPricePerUnit - compare at Explorer); (2) node unreachable (curl -v https://<service-uri>:8935/status, port 8935 must be publicly accessible); (3) capabilities not registered (check tools.livepeer.cloud/ai/network-capabilities).

Delegator List: watch unbonding status (stake reduction at next round), new delegations (incoming stake), large single-delegator dependence (destabilising if they leave). Delegators leave due to: missed reward calls, reward cut competitiveness.

Service URI: what gateways use to connect. Must resolve to current IP/hostname, port 8935 publicly accessible, match what node is actually serving. Mismatch error: "Service address https://127.0.0.1:4433 did not match discovered address https://121.5.10.8:8935; set the correct address in livepeer_cli or use -serviceAddr".

Rounds Active: how long registered. Soft trust signal for delegators.

Common Patterns table: active set rank dropping (relative stake declining / attract delegators or increase self-stake); missed reward rounds (reward calling failing / ETH balance, -reward flag, consider Siphon); zero fee earnings despite active (not receiving work / check pricing, reachability, capabilities); delegator count falling (delegators unbonding / check reward call rate, review reward cut); service URI mismatch (on-chain URI doesn't match node IP / update -serviceAddr or on-chain URI).
---END FILE---

---FILE---
PATH: guides/monitoring-and-tooling/metrics-and-alerting.mdx
---FRONTMATTER---
title: Metrics and Alerting
sidebarTitle: Metrics & Alerting
description: 'How to set up Prometheus, Grafana, and the Docker monitoring stack for your Livepeer orchestrator. Covers the -monitor flag, key metrics, AI runner container monitoring, and log capture.'
keywords: [livepeer, orchestrator, prometheus, grafana, monitoring, metrics, docker, -monitor, livepeer-monitoring, ai-runner]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
Instrument node, collect metrics that matter, wire alerts before failures cause missed jobs or missed rewards.

Enabling Node Metrics: `-monitor` flag activates /metrics path on port 7935. Also: `-metricsPerStream` (groups per stream, for diagnosing individual sessions), `-metricsClientIP` (includes client IP in labels, identifies which gateway is routing work). Split setups: pass -monitor on both processes.

Metrics categories (act-on): Session metrics (current active sessions, max session capacity, sessions per GPU - node at capacity or idle?); Segment metrics (received/transcoded/failed, success rate = core transcoding health signal); Ticket metrics (winning tickets received and redeemed - gap between two = ETH balance or redemption issue); Latency metrics (processing time per segment - high = GPU saturated or pipeline slow, affects gateway scoring). Also: GPU utilisation, ETH balance and pending fees, round number and reward call status.

Option A: Docker Monitoring Stack: `docker run --net=host --env LP_MODE=standalone --env LP_NODES=localhost:7935 livepeer/monitoring:latest`. Open Grafana at localhost:3000 (admin/admin). Multi-node: comma-separate nodes. LP_MODE values: standalone, docker-compose, kubernetes. LP_KUBE_NAMESPACES for K8s namespace filter. LP_PROMETHEUS_KUBE_SCRAPE for custom scrape annotation. Kubernetes: pods with prometheus.io/scrape label auto-discovered. Source: github.com/livepeer/livepeer-monitoring.

Option B: Custom Prometheus: add job_name=livepeer-orchestrator, static_configs targets=[localhost:7935], scrape_interval: 15s, metrics_path: /metrics to prometheus.yml. Useful Grafana panels: Session capacity (livepeer_current_sessions_total vs livepeer_max_sessions), Segment success rate (rate(livepeer_transcode_success_total[5m])), Reward call tracker (alerts on missed rounds), AI job latency (AI pipeline processing time).

Monitoring AI Runner Containers: `docker ps --filter name=livepeer-ai-runner`, `docker logs -f livepeer-ai-runner`, `docker stats livepeer-ai-runner`. Key log messages: "Starting AI worker" (normal initialisation), "Loaded model <model-id>" (ready to process), "RunAI request pipeline=<name>" (job received), "Error loading model" (check VRAM, model ID spelling), "Container health check failed", "CUDA out of memory" (reduce -maxSessions or capacity in aiModels.json). Verify AI pipelines registered: `curl http://localhost:7935/getNetworkCapabilities | jq`. Also check tools.livepeer.cloud/ai/network-capabilities.

Log Capture: `livepeer ... 2>&1 | tee /var/log/livepeer/livepeer.log`. Verbose debug: `-v 6` (individual segment reception + transcoding activity). Useful log search patterns: grep -i "reward", grep -i "transcode|session", grep -i "error|fail|crit", grep -i "received|segment". systemd: `journalctl -u livepeer -f`.

Alerting (Prometheus rules): OrchestratorAtCapacity (livepeer_current_sessions_total >= livepeer_max_sessions for 5m, warning); LowETHBalance (livepeer_eth_balance < 0.02 for 1m, critical); TranscodeFailureRate (rate(livepeer_transcode_failed_total[10m]) > 0.1 for 10m, warning).
---END FILE---

---FILE---
PATH: guides/monitoring-and-tooling/troubleshooting.mdx
---FRONTMATTER---
title: Troubleshooting
sidebarTitle: Troubleshooting
description: 'Diagnostic guide for common Livepeer orchestrator errors — transcoding failures, GPU issues, reward calling problems, AI runner errors, networking issues, and account errors. With causes and actionable fixes.'
keywords: [livepeer, orchestrator, troubleshooting, error, OrchestratorCapped, cannot allocate memory, NVENC, reward, TicketParams, AI runner, networking, NAT, service URI]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
Symptom-first diagnostic guide. Sections: Transcoding errors, GPU and memory errors, Reward and gas errors, AI runner errors, Networking and connectivity, Account and keystore errors, General diagnostics.

External references used: H.264 levels (Wikipedia AVC levels), NVIDIA video encode/decode support matrix (developer.nvidia.com), Arbiscan (arbiscan.io), Explorer (explorer.livepeer.org/orchestrators), tools.livepeer.cloud, Ollama version endpoint (localhost:11434/api/version).

Transcoding Errors:
- OrchestratorCapped: node at session limit, rejecting work. Check SessionLimit: `curl localhost:7935/status | jq '.SessionLimit'`. If spare GPU capacity: increase -maxSessions. If at VRAM limits: cannot safely increase without reducing model size/output dims or adding GPU. Check both O and T processes in split setup.
- Transcode loop timed out / Segment loop timed out: NORMAL. Session cleaned up when stream ends/pauses. Not errors.
- MB rate > Level limit warning: source bitrate exceeds H.264 level limit for resolution. Transcoding usually completes despite warning. Fault with gateway/broadcaster input, not Orchestrator.
- Unable to transcode errors: unsupported codec, unusual params, or corrupt segment. No action required - gateway responsibility.
- Unsupported input pixel format: go-livepeer requires YUV 4:2:0. Any other format → error. No Orchestrator action possible.

GPU and Memory Errors:
- Cannot allocate memory (startup with -nvidia): GPU test failed - max concurrent NVENC/NVDEC sessions reached. Check nvidia-smi for what's using sessions. Stop competing processes. Options: nvenc-patch or upgrade to data centre GPU. Reference: NVIDIA Video Encode and Decode GPU Support Matrix.
- CUDA out of memory (AI inference): VRAM exhausted during model load or run. Check nvidia-smi memory. Reduce capacity in aiModels.json. Make some warm models cold. Check request dimensions.
- Node not using GPU despite -nvidia flag: check nvidia-smi, go-livepeer startup logs for GPU detection, LD_LIBRARY_PATH includes CUDA libs if not in /usr/local/cuda, NVIDIA Container Toolkit installed (`docker run --gpus all nvidia/cuda:11.0-base nvidia-smi`).

Reward and Gas Errors:
- insufficient funds for gas: wallet depleted. Check Arbiscan. Bridge ETH. Keep 0.02-0.05 ETH minimum. If using OrchestratorSiphon: configure eth_warn + eth_minval thresholds.
- Node still calling reward despite -reward=false (split setup): -reward=false must be on EVERY launch command. Audit: `ps aux | grep livepeer`. Also consider removing -ethUrl from transcoder process sharing same wallet.
- Missing reward rounds despite -reward=true: (1) ETH balance - check localhost:7935/status or Arbiscan; (2) node was offline - check systemd/service uptime logs; (3) multiple processes competing. Consider Siphon split setup for persistent issue.
- TicketParams expired: gateway sent ticket that expired by time node processed it. No action - gateway retries automatically with fresh params. Transient + self-resolving. High rate from one gateway = slow L1 block polling at that gateway.

AI Runner Errors:
- Container not starting: wrong Docker image tag, VRAM insufficient (CUDA OOM at startup), NVIDIA Container Toolkit missing (`docker run --gpus all nvidia/cuda:11.0-base nvidia-smi`), Docker not in GPU mode (pass --gpus all).
- Wrong model ID: case-sensitive, must include org prefix (stabilityai/stable-diffusion-xl-base-1.0). Ollama LLM models: use HuggingFace format in aiModels.json, NOT Ollama model tags.
- AI pipeline registered but no jobs: (1) outside active set (top 100 check Explorer), (2) price too high (compare tools.livepeer.cloud), (3) model cold (warm models listed in aiModels.json warm section, cold starts 30-120s), (4) capability not registered (`curl localhost:7935/getNetworkCapabilities | jq`).
- OOM during AI inference (job starts then fails): inference job started but VRAM exhausted during processing - output dimensions exceed VRAM headroom during forward pass. Reduce capacity, reduce maxSessions, consider restricting accepted request dimensions.
- ComfyStream container failing (live-video AI): check model weights accessible, CUDA toolkit version matches container, sufficient VRAM for resident model during stream, `docker logs -f <comfystream-container>` for Python exception.
- LLM pipeline (Ollama) not receiving jobs: verify Ollama running (`curl localhost:11434/api/version`), go-livepeer can reach Ollama endpoint (same Docker network needed for containerised deployments), restart go-livepeer to force capability re-advertisement, model ID in aiModels.json matches installed Ollama model (`ollama list`).

Networking and Connectivity:
- Service address mismatch warning: "Service address https://127.0.0.1:4433 did not match discovered address https://121.5.10.8:8935". Fix: update on-chain service URI via livepeer_cli, or override with -serviceAddr <public-ip>:8935, confirm reachable with `curl -v https://<service-uri>:8935/status`.
- Node not receiving jobs despite active set: diagnostic checklist: (1) curl -v https://<service-uri>:8935/status, (2) curl localhost:7935/status | jq '.PricePerUnit', (3) curl localhost:7935/getNetworkCapabilities | jq, (4) verify on-chain service URI on Explorer. Step 1 timeout = port 8935 not reachable; check firewall + NAT port forwarding.
- Running behind NAT/home router: options: port forwarding (forward 8935 to node's local IP), DMZ (place node in router DMZ, less secure), hairpinning (iptables -t nat -A POSTROUTING rule if needed for internal-to-external traffic loops). Warning: VPS or dedicated server strongly recommended for production.
- Service URI: IP address (https://121.5.10.8:8935) or DNS name (https://orch.yourdomain.com:8935 - recommended for IP flexibility). Stored on-chain, update via livepeer_cli.

Account and Keystore Errors:
- Error creating Ethereum account manager: keystore file wrong location/permissions/wrong network. Default location: ~/.lpData/arbitrum-one-mainnet/keystore/. Fix: list directory, confirm UTC-- file present, chmod 600 keystore file, check -datadir history.

General Diagnostics:
- Confirm receiving work: `curl localhost:7935/status | jq`, `livepeer -orchestrator -transcoder -v 6 ...`, `journalctl -u livepeer -f`, `tail -f /var/log/livepeer/livepeer.log`.
- CLI port checks: curl localhost:7935/status | jq (node status), curl localhost:7935/getNetworkCapabilities | jq (registered capabilities), curl localhost:7935/metrics (Prometheus metrics).
- Log capture: `livepeer ... 2>&1 | tee /var/log/livepeer/livepeer.log`.

Escalation paths: Livepeer Discord (#orchestrators + #support), go-livepeer GitHub Issues (search open + closed for error message).
---END FILE---

---FILE---
PATH: guides/monitoring-and-tooling/monitoring-sources.md
---FRONTMATTER---
[Research log - .md file, not published]
---BODY---
Research log for Group 5 (Monitoring & Troubleshooting) and Group 6 (Advanced Operations). Lists primary verified sources: go-livepeer official docs (doc/gpu.md, doc/selection.md, doc/multi-o.md, monitor/census.go, doc/redeemer.md), livepeer-monitoring repository (README, env vars), v1 source files. Supporting: Explorer, NVIDIA matrix, H.264 reference, hairpinning, Grafana Loki, GitHub issue #1343. Community: Titan Node (titan-node.com), tools.livepeer.cloud, Forum Prometheus guide, Dune Analytics. Unresolved REVIEW flags: AI leaderboard in Explorer, Loki endpoint loki.livepeer.report, Forum accessibility, Dune URLs, AI job tester maintenance status, Prometheus metric names against census.go, Ada Lovelace NVENC cap status, per-pipeline dimension limits, doc/multi-o.md full content review.
---END FILE---

---FILE---
PATH: guides/staking-and-rewards/network-participation.mdx
---FRONTMATTER---
title: Network Participation
sidebarTitle: Network Participation
description: 'How Livepeer protocol governance works and how orchestrators vote on Livepeer Improvement Proposals (LIPs) — finding polls, voting via livepeer_cli, verifying your vote on Explorer, and where to follow active proposals.'
keywords: [livepeer, governance, lip, livepeer improvement proposal, voting, livepeer_cli, orchestrator vote, lpt governance, protocol parameters]
og:image: /snippets/assets/site/og-image/en/orchestrators.png
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
LIPs (Livepeer Improvement Proposals) = protocol change mechanism. Stake-weighted voting. Orchestrator vote weight = total stake including delegated LPT.

Governance flow: Author drafts LIP on GitHub → community discussion Forum + Discord → on-chain poll created via Explorer → voting window opens → stake-weighted outcome → accepted LIPs implemented in go-livepeer + contracts.

Recent LIPs affecting Orchestrators table: LIP-89 (10% of each round's LPT inflation to Livepeer Treasury before distribution); LIP-73 (treasury governance established); LIP-91/LIP-92 (AI pipeline support formalised in protocol, AI inference fee parameters introduced).

Where to follow governance: explorer.livepeer.org/voting (active and past on-chain polls, find poll contract addresses); forum.livepeer.org (pre-on-chain discussion, core governance deliberation); github.com/livepeer/LIPs (versioned proposal text). #governance Discord = fastest moving discussion.

How to Vote (8-step process):
1. Find poll at explorer.livepeer.org/voting - note poll contract address
2. Ensure livepeer node is running (`docker ps | grep livepeer` or `systemctl status livepeer`)
3. Run `livepeer_cli` (or `livepeer_cli -http 127.0.0.1:7935` for custom port)
4. Select "Vote on a poll"
5. Enter poll contract address
6. Choose: 0 = Yes, 1 = No, then confirm
7. Wait for tx confirmation - see hash in logs (e.g. "Invoking transaction: 'vote'. Inputs: '_choiceID: 0'")
8. Verify on Explorer - address should appear in voter list with choice and stake weight in tally

Remote key voting: `livepeer_cli -http <orchestrator-ip>:7935`. Private keys stay on node.

Governance Weight and Delegators: vote weight = total stake including delegated LPT. When Orchestrator votes Yes, all that stake counts as Yes. Delegators have no separate vote unless they undelegate and vote independently. Abstaining carries no protocol penalty but removes stake weight from decisions.

Gas costs: ~150k-250k gas units, typical ETH cost ~$0.01-$0.05.

Quick reference checklist accordion: 1. Find poll → 2. Copy contract address → 3. Read full LIP + follow Forum → 4. Node running + ETH on Arbitrum → 5. livepeer_cli → Vote on poll → paste address → 0/1 → 6. Confirm tx, wait → 7. Verify on Explorer.

Missed votes: no protocol penalty. Voting window cannot be retroactively opened. Check open/close dates on Explorer.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx
---FRONTMATTER---
title: 'AI Model Management'
sidebarTitle: 'Model Management'
description: Manage warm and cold model strategy, VRAM allocation, model rotation by demand, and optimisation flags for diffusion pipelines on a Livepeer orchestrator.
keywords: livepeer, orchestrator, AI model management, warm model, cold model, VRAM, SFAST, DEEPCACHE, aiModels.json, model rotation, optimisation flags
pageType: how_to
audience: orchestrator
status: draft
lastVerified: '2026-03-16'
---BODY---
Warm = model weights loaded into GPU VRAM at container startup (serve immediately). Cold = weights out of VRAM, first request triggers model load (10-60 seconds depending on model size and NVMe speed).

Impact on job routing: gateways track first-response latency per orchestrator. Cold loading creates competitive disadvantage on latency-sensitive pipelines (text-to-image, image-to-image). Practical rule: warm your primary revenue pipeline; keep secondary cold until VRAM allows.

Beta constraint: only one warm model per GPU is supported. Multiple "warm": true entries beyond GPU count causes AI worker to log conflict and skip excess entries. Check logs: `docker logs <ai-runner-container> 2>&1 | grep -i "warm\|conflict\|error"`. "Error loading warm model" = warm model conflict.

VRAM allocation table:
- text-to-image (SDXL-Lightning): ~12-18 GB (Lightning leans 12 GB)
- image-to-image (SDXL): ~12-18 GB
- image-to-video (SVD): ~24 GB+, 32 GB preferred for longer clips
- audio-to-text (Whisper large-v3): ~3 GB, pairs well on 24 GB GPU
- image-to-text (BLIP): ~1-2 GB, runs warm on 4 GB GPU
- llm (Llama 3.1 8B q4): ~8 GB via Ollama runner
- upscale (SD x4): ~8 GB
- segment-anything-2 (large): ~12-24 GB, variant-dependent

Model rotation by demand: visit tools.livepeer.cloud/ai/network-capabilities weekly; filter by pipeline to see which models active gateways request most. Update aiModels.json with new warm model, restart AI worker container. Cold models remain available with first-request latency.

Rotation procedure: update aiModels.json ("warm": true on desired model, "warm": false on previous); `docker restart <ai-runner-container-name>`. Leave go-livepeer process running.

Optimisation flags (apply to warm diffusion models only - text-to-image, image-to-image, upscale with "warm": true; no effect on cold or non-diffusion pipelines):
- SFAST (Stable Fast): compiles compute graph on first run, up to 25% faster inference, no quality reduction. First inference after startup slower due to compilation overhead. JSON: {"optimization_flags": {"SFAST": true}}. Best for: frequent repeated requests where compilation overhead amortises.
- DEEPCACHE: caches intermediate diffusion steps, up to 50% faster, minor quality reduction (fine detail at high step counts). DO NOT use on Lightning/Turbo variants (1-4 steps already optimised; DEEPCACHE degrades output). JSON: {"optimization_flags": {"DEEPCACHE": true}}. Best for: standard-step SDXL base models at 20+ steps.
- SFAST and DEEPCACHE cannot be combined. Set only one or neither.

Monitoring model loading: `docker logs <ai-runner-container> 2>&1 | grep -E "warm|loaded|error" | tail -30`. Verify via tools.livepeer.cloud/ai/network-capabilities (should appear with Warm status within 5 minutes). Warm model missing after 5 minutes: warm conflict, container restart loops (check docker ps restart counts), or model download still in progress.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx
---FRONTMATTER---
title: 'Capacity Planning'
sidebarTitle: 'Capacity Planning'
description: Determine the correct -maxSessions value for your orchestrator using livepeer_bench, bandwidth calculations, and NVENC hardware session limits. Covers GPU and CPU transcoding capacity, AI VRAM budgeting, and session limit configuration.
keywords: livepeer, orchestrator, maxSessions, livepeer_bench, capacity planning, NVENC, VRAM, concurrent sessions, bandwidth, benchmarking, session limits
pageType: how_to
audience: orchestrator
status: draft
lastVerified: '2026-03-16'
---BODY---
-maxSessions = ceiling on concurrent transcoding streams. Default is 10 (usually too conservative or too aggressive). Formula: min(hardware_limit, bandwidth_limit). Video transcoding and AI inference are separate: -maxSessions for video, `capacity` field in aiModels.json per pipeline for AI.

Hardware limit measurement (livepeer_bench): simulates network workloads with segments at live pace. Reports Duration Ratio = total transcoding time / total source duration. Below 1.0 = keeping up; above 1.0 = falling behind.

Benchmark setup:
1. Download test stream: `wget -c https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz && tar -xvf bbb_1080p_30fps_1min_2sec_hls.tar.gz`
2. Download rendition config (4 renditions: 240p/360p/480p/720p): `wget -O transcodingOptions.json https://raw.githubusercontent.com/livepeer/go-livepeer/master/cmd/livepeer_bench/transcodingOptions.json`
3. Scaling loop:
```
#!/bin/bash
for i in {1..20}
do
    livepeer_bench -in bbb/source.m3u8 -transcodingOptions transcodingOptions.json -nvidia 0 -concurrentSessions $i |& grep "Duration Ratio" >> bench.log
done
```
For CPU-only: omit -nvidia flag. Multi-GPU: `-nvidia 0,1`.

Duration Ratio interpretation:
- <1.0: GPU has headroom
- =1.0: exactly on live pace, no headroom
- >1.0: overloaded

Production threshold: last session count where ratio stays at or below 0.8 (community convention, 20% headroom for upload/download overhead).

Sample output (hardware limit = 4 in this example):
```
| * Real-Time Duration Ratio * | 0.058  |    # 1 session
| * Real-Time Duration Ratio * | 0.783  |    # 4 sessions — last below 0.8
| * Real-Time Duration Ratio * | 1.102  |    # 5 sessions — exceeds threshold
```

NVENC hardware session caps: Consumer NVIDIA GPUs (GTX/RTX series) have driver-enforced limit of 3-8 concurrent NVENC sessions regardless of VRAM or compute. Professional GPUs (A100, H100) are outside this restriction. The benchmark reflects this cap with a sharp ratio jump at the NVENC ceiling.

Bandwidth calculation: ~5.65 Mbps upload per stream (240p 250kbps + 360p 800kbps + 480p 1600kbps + 720p 3000kbps). Budget ~6 Mbps symmetric with margin.

Bandwidth capacity table:
- 100 Mbps: ~16 theoretical / ~13 with 20% margin
- 500 Mbps: ~83 theoretical / ~66 with 20% margin
- 1 Gbps: ~166 theoretical / ~133 with 20% margin
Upload is primary constraint (residential: 20-30 Mbps upload with 100 Mbps download).

Setting maxSessions: `livepeer -orchestrator -transcoder -maxSessions 12 -network arbitrum-one-mainnet ...`. For O-T split: set -maxSessions on both nodes.

AI VRAM capacity: capacity field in aiModels.json per pipeline. Beta constraint: one warm model per GPU. NVENC/NVDEC use dedicated hardware blocks (minimal VRAM), so video sessions and warm AI models coexist on same GPU.

Live tuning Prometheus metrics:
- livepeer_transcode_duration_seconds: should stay below 2 seconds per session
- livepeer_real_time_seg_transcoded: drops below 1 when segments fall behind live cadence
- CPU/GPU utilisation sustained above 95%: reduce limit
OrchestratorCapped error in logs = session ceiling is blocking new jobs.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx
---FRONTMATTER---
title: 'Pricing Strategy'
sidebarTitle: 'Pricing Strategy'
description: Set competitive pricing for video and AI workloads on a Livepeer orchestrator. Covers pricePerUnit, per-pipeline AI pricing in aiModels.json, pricePerGateway, autoAdjustPrice, and market positioning methodology.
keywords: livepeer, orchestrator, pricing, pricePerUnit, pricePerGateway, autoAdjustPrice, aiModels.json, wei, USD
pageType: how_to
audience: orchestrator
status: draft
lastVerified: '2026-03-16'
---BODY---
Two pricing domains: video transcoding (single global price per pixel via -pricePerUnit) and AI inference (per-pipeline, per-model in aiModels.json). Commercial relationships add per-gateway custom pricing via -pricePerGateway.

Video pricing: priced in wei per pixel (1 ETH = 1e18 wei). Pixel count = width × height × output_renditions.

Set at startup:
```
livepeer -orchestrator -transcoder -pricePerUnit 1000 -pixelsPerUnit 1 ...
```
-pixelsPerUnit is denominator (leave at 1 unless preferring price over larger pixel batch for readability).

USD notation: `-pixelsPerUnit 1000000000000 -pricePerUnit 0.41USD`. go-livepeer converts using Chainlink ETH/USD price feed on Arbitrum. -pixelsPerUnit supports exponential notation (1e12); -pricePerUnit does not.

Market survey: check Livepeer Explorer orchestrators page for current price distribution. Start in lower half of active prices, then adjust upward only after confirming job volume holds.

autoAdjustPrice (default=true): automatically adjusts advertised price for ticket redemption overhead as gas prices rise:
- 1% overhead → base 1000 wei → advertised 1010 wei
- 20% overhead → base 1000 wei → advertised 1200 wei
- 50% overhead → base 1000 wei → advertised 1500 wei
Disable for fixed price: `-autoAdjustPrice=false`. Appropriate for commercial relationships or manual per-gateway pricing. For general participation, keep default on.

AI pricing (aiModels.json per pipeline/model):
Pricing units by pipeline:
- text-to-image: per output pixel, ~4,768,371 wei typical
- image-to-image: per output pixel, ~4,768,371 wei typical
- image-to-video: per output pixel, ~9,536,742 wei typical
- upscale: per input pixel, ~4,768,371 wei typical
- audio-to-text: per millisecond of audio, ~12,882,811 wei typical
- segment-anything-2: per input pixel, ~4,768,371 wei typical
- image-to-text: per input pixel, ~1,192,093 wei typical
- text-to-speech: per character or per ms audio, ~5,960,465 wei typical
- llm: per custom unit (typically per 1M tokens), USD-denominated

aiModels.json pricing fields: price_per_unit (integer wei or USD string e.g. "0.5e-3USD"), pixels_per_unit (granularity, default 1), currency ("USD" when using USD notation).

USD notation examples:
- LLM: {"price_per_unit": 0.18, "currency": "USD", "pixels_per_unit": 1000000}
- Image: {"price_per_unit": "0.5e-3USD", "currency": "USD"} (= $0.0005 per megapixel at runtime ETH/USD rate)

Per-gateway pricing: `-pricePerGateway` overrides global -pricePerUnit for jobs from specific gateway address. JSON payload or path to JSON file:
```json
{"gateways": [{"ethaddress": "0xGatewayAddress1", "priceperunit": 1000, "pixelsperunit": 1}]}
```
Use for: commercial negotiated rates, operator-controlled gateway routing, preferential partner rates.

Pricing flag reference:
- -pricePerUnit: video, required, wei per pixel or USD string
- -pixelsPerUnit: video, default 1
- -autoAdjustPrice: video, default true
- -pricePerGateway: video, none, custom per gateway address
- -priceFeedAddr: both (USD mode), default Arbitrum ETH/USD feed (Chainlink)
- price_per_unit (aiModels.json): AI, required per entry
- pixels_per_unit (aiModels.json): AI, default 1
- currency (aiModels.json): AI, none (wei), set "USD" for USD notation
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx
---FRONTMATTER---
title: 'Reward Call Tuning'
sidebarTitle: 'Reward Tuning'
description: Calculate whether reward calling is profitable at your stake level, configure automatic vs manual calling, and optimise timing to minimise gas costs on Arbitrum.
keywords: livepeer, orchestrator, reward calling, LPT inflation, gas costs, Arbitrum, reward cut, stake threshold, -reward flag
pageType: how_to
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Every round (~22 hours on Arbitrum), active orchestrators call Reward() on-chain to claim proportional share of newly minted LPT. Small-stake operators reach break-even threshold where gas overtakes LPT value received.

Profitability calculation:
- Gas cost (ETH) = gas_used × gas_price_in_ETH
- Typical gas used: 350,000-450,000 gas
- Arbitrum gas price: 0.01-0.1 gwei
- Approximate ETH cost: 0.0000035-0.000045 ETH per call

LPT value per round formula: LPT earned = (your total stake / total active stake) × round_issuance × 0.90 (0.90 = 90% after LIP-89 10% Treasury allocation)

Break-even: at ~0.00002 ETH gas cost and LPT ~$4 USD, minimum stake for profitable calling is approximately a few thousand LPT. Exact threshold moves with ETH/LPT price ratio and gas conditions. Use Explorer "Estimated Reward This Round" on your orchestrator page as operational reference.

Automatic calling (default): go-livepeer calls Reward() automatically at round start. Requirements: node running at round initialisation, sufficient ETH on Arbitrum, node in active set that round. Use systemd service or Docker restart policy (restart: unless-stopped) to keep node running continuously. Missed round = permanently forfeited LPT (no catch-up mechanism).

Manual calling: disable with `-reward=false`. Manual call via livepeer_cli → "Invoke reward" option. Monitor logs: `journalctl -u livepeer -f | grep -i "reward"`.

Timing: for most operators, leave automatic calling enabled. Gas savings from optimal timing are negligible on Arbitrum vs risk of missed round. For low-stake operators evaluating profitability: run -reward=false for 3-5 rounds, check Arbiscan for gas costs, compare to Explorer LPT value for those rounds.

When to skip intentionally: only when profitability calculation is definitively negative. On Arbitrum gas prices, break-even is much lower than historical Ethereum L1. Most operators with >a few thousand LPT delegated will find automatic calling profitable.

Only claimed LPT compounds. Unclaimed LPT stops accruing immediately.

Monitoring: Prometheus metric livepeer_round_last_claim (value fixed across rounds = missed call). Explorer shows per-round reward call history (succeeded/skipped/missed). Arbiscan shows ETH outbound tx every ~22 hours when automatic calling is active.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/advanced-operations/dep-guide.mdx
---FRONTMATTER---
title: Advanced Operations Guide
sidebarTitle: Guide
description: Overview of advanced orchestrator operations, including AI pipelines, economics, governance, monitoring, and fleet-scale concerns.
keywords: livepeer, orchestrator, advanced operations, ai pipelines, governance, monitoring, fleet ops
pageType: overview
audience: orchestrator
purpose: guide
status: draft
lastVerified: 2026-03-12
---BODY---
Navigator/overview page for Advanced Operations section. Points to: Setups and Workloads, AI Pipelines, Staking and Rewards, Delegates and Governance, Monitoring and Optimising, More Guides. Entry point table: AI runtime planning → rc-ai-pipelines; Model and VRAM fit → p-models-and-vram; Economic viability → p-feasibility; Live verification → p-smoke-test; Fleet or enterprise guidance → p-fleet-ops.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx
---FRONTMATTER---
title: (from prior session - not re-read header, see full body below)
status: published
lastVerified: 2026-03-13
---BODY---
Four gateway discovery mechanisms:
1. On-chain registration: gateway reads active orchestrator list from ServiceRegistry on Arbitrum. Requires on-chain activation.
2. Direct config (-orchAddr): gateway uses specified address, bypassing protocol discovery. Off-chain only.
3. Webhook (-orchWebhookUrl): gateway queries external HTTP endpoint for orchestrator list. Off-chain only.
4. Network Capabilities API: gateway queries network capability registry to find orchestrators supporting specific AI pipeline.

OrchestratorInfo protobuf fields gateways receive: transcoder, ticket_params, price_info, address, capabilities, auth_token, hardware, capabilities_prices.

Five selection factors table (from gateway perspective):
1. Capability matching: gateway filters by pipeline/model requested
2. Price constraints: gateway rejects orchestrators above -maxPricePerUnit / -maxPricePerCapability
3. Performance score: gateways track latency, error rate, success rate per orchestrator
4. Stake weight: higher stake = higher probability of selection (probabilistic, not deterministic)
5. Random factor: -selectRandFreq introduces random orchestrator selection to avoid routing monopoly

Five control points from orchestrator side (AccordionGroup):
1. Price competitively within gateway caps
2. Keep service URI correct and reachable
3. Register AI capabilities via aiModels.json
4. Maintain performance scores (low error rate, low latency)
5. Build stake for video workload selection weighting

Gateway Loki API: Foundation operates public Loki instance at https://loki.livepeer.report exposing gateway logs. Query examples for all regions, specific region (e.g. nyc), specific orchestrator IP, timestamp range. "What to look for": selection events, price rejection messages, capability mismatch messages, connection failures. Uses Grafana Loki query syntax. (FACT CHECK flag: Loki endpoint may be unavailable - Rick to confirm.)

Debugging missing jobs (mermaid flowchart): In active set but no jobs → Service URI reachable? (curl -v https://uri:8935/status) → Price within gateway limits? (compare to Explorer market rates) → Capabilities registered? (curl localhost:7935/getNetworkCapabilities) → Network demand low? (Check Dune/Explorer) → Check Loki API for gateway selection logs.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/advanced-operations/pool-operators.mdx
---FRONTMATTER---
title: (from prior session - status: published, lastVerified: 2026-03-13)
status: published
lastVerified: 2026-03-13
---BODY---
Pool architecture: single on-chain identity (one orchestrator address, one keystore, one reward call), workers connected via gRPC. Workers are invisible to the Livepeer protocol. All reputation, stake, and on-chain fees flow to the pool operator.

Worker connection models:
1. BYO Container: worker runs full go-livepeer with -transcoder flag pointing to orchestrator. Full command: `livepeer -transcoder -orchAddr <orch-ip>:8935 -orchSecret <secret> -nvidia 0`.
2. Managed pool client (Titan Node model): lightweight client connects to pool coordinator; hides go-livepeer complexity from workers.
3. Cloud GPU: temporary GPU instances connect as workers for spot capacity.

Accepting workers: `-orchSecret <secret>` flag on orchestrator startup. Orchestrator runs without -transcoder flag to act as coordinator only. Log confirmation: "Got a RegisterTranscoder request".

Fee distribution: entirely off-chain. Protocol does not split fees to workers. Operator tracks contributions and pays from wallet. Per-session tracking approaches: track sessions-per-worker via logs, custom payout client, manual payout schedule.

On-chain identity and transparency: pool performance (sessions, fees) reflects aggregate work of all workers. Delegators see pool as single entity. Building delegator trust requires transparency work: public website, Forum campaign posts, public payout dashboard (Titan Node model).

Ongoing operational responsibilities (AccordionGroup):
- Worker connection management: workers reconnect automatically on restart (new "Got a RegisterTranscoder request" log). No manual reconnection required.
- NVENC session caps on consumer GPUs: 3-8 session cap hardware-enforced in driver. Titan Node patches NVIDIA driver on worker machines to remove cap.
- Session routing: go-livepeer distributes sessions across connected workers internally. No manual load balancing needed for basic deployments. For large pools, see doc/multi-o.md.
- Node updates: updating go-livepeer on orchestrator drops all workers and in-flight sessions. Workers reconnect automatically after restart. For SLA commitments: coordinate updates during low-traffic periods, communicate planned downtime.
- Payout/worker communication: establish Discord/Telegram/mailing list. Workers need notice of: downtime, payout schedule, fee changes, issue reporting. Poor communication = most common cause of worker churn.
- orchSecret rotation: if compromised, all existing worker connections drop on restart. No zero-downtime rotation mechanism. Communicate new secret to workers before restarting.

Key facts:
- One on-chain entity: all reputation/stake/fees to operator address
- Fee distribution is operator's responsibility
- Anyone with -orchSecret can connect as a worker; keep it private
- Workers need no LPT, no ETH for protocol, no RPC endpoint
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx
---FRONTMATTER---
title: (from prior session - status: draft, lastVerified: 2026-03-16)
status: draft
lastVerified: 2026-03-16
---BODY---
Three deployment patterns:
1. Off-chain gateway + on-chain orchestrator (most common): gateway uses -orchAddr to route to specific orchestrator(s), bypassing protocol discovery. Orchestrator registered on-chain for reward calls. Port layout: Gateway on :7935 (HTTP) and :1935 (RTMP). Orchestrator on :8935 (serviceAddr). No port conflict.
2. Same machine (combined): both gateway and orchestrator as separate go-livepeer processes on one machine. Port conflict risk is high - assign distinct ports.
3. Separate machines: gateway and orchestrator on separate machines over network. Gateway uses -orchAddr <orchestrator-ip>:8935 for off-chain, or on-chain discovery. Appropriate at scale.

Port allocation table:
- Gateway: -httpAddr :7935 (Gateway HTTP API for client connections)
- Gateway: -rtmpAddr :1935 (RTMP ingest for video streams)
- Orchestrator: -serviceAddr :8935 (public address gateways connect to for job execution)
- Orchestrator: -cliAddr :7936 (internal livepeer_cli management interface)
Check ports: `ss -tlnp | grep -E ':7935|:8935|:1935|:7936'`

Self-routing: configure gateway with `-orchAddr <your-orchestrator-ip>:8935` → all jobs routed to that address. Appropriate for: testing AI inference quality, running dedicated internal service, guaranteed routing without protocol selection.
On-chain gateway discovering own orchestrator: still competitive (must win on price/stake/performance).

Pricing alignment: gateway -maxPricePerUnit must be >= orchestrator -pricePerUnit. Same for AI: gateway -maxPricePerCapability >= aiModels.json price_per_unit per pipeline. Set gateway cap 20-30% above orchestrator base price to absorb autoAdjustPrice headroom during gas spikes.
Example: orchestrator -pricePerUnit 1000 + -autoAdjustPrice=true → gateway -maxPricePerUnit 1300.

Monitoring both roles: each role produces own Prometheus metrics; on single machine ensure different export ports to avoid collision.
Orchestrator metrics: livepeer_transcode_duration_seconds, livepeer_winning_ticket_count, livepeer_reward_call_success.
Gateway metrics: livepeer_broadcaster_sessions_total, livepeer_broadcaster_upload_errors.
Separate log streams per process (separate systemd units or Docker containers) to avoid log interleaving.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/advanced-operations/scale-operations.mdx
---FRONTMATTER---
title: (from prior session - status: published, lastVerified: 2026-03-13)
status: published
lastVerified: 2026-03-13
---BODY---
Multi-orchestrator architecture: each node has own keypair; multiple nodes behind single on-chain identity; separation patterns (single GPU per node, GPU cluster per node, role-specific nodes). See doc/multi-o.md in go-livepeer repo.

GPU worker scaling: connect via -orchSecret; orchestrator logs confirm "Got a RegisterTranscoder request from...". Fleet capacity management Prometheus metrics table.

Rolling update procedure:
1. Remove one node from active routing (lower -maxSessions to 0 or stop)
2. Update go-livepeer binary
3. Verify updated node connects and receives sessions before proceeding
4. Repeat for remaining nodes
Requires at least two workload nodes for service continuity.

Network and key management at scale:
- Each orchestrator node needs access to same Ethereum keystore (distribute only over encrypted channels, restricted file permissions)
- Reward calling: designate exactly ONE node for reward(), set -reward=false on all others (duplicate submissions = wasted gas)
- Ticket redemption: Redeemer can run as separate process (see doc/redeemer.md)
- Static IPs or stable DNS names essential at fleet scale (service URI stored on-chain)

Enterprise and data-centre onboarding: Livepeer Foundation offers direct engagement support. SPE programme for professional GPU operators (current SPEs: Titan Node for video mining, MuxionLabs for AI). Contact livepeer.org/contact.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx
---FRONTMATTER---
title: Workload Options
sidebarTitle: Workload Options
description: The four job types an orchestrator can process — transcoding, batch AI inference, Cascade live-video AI, and LLM inference — with hardware requirements, pricing models, routing mechanics, and how to choose which workloads to run.
keywords: livepeer, orchestrator, job types, transcoding, batch AI inference, live-video ai, Cascade, LLM, VRAM, pipeline, workloads, routing
pageType: concept
audience: orchestrator
purpose: concept
status: published
lastVerified: 2026-03-13
---BODY---
Four job types: Video Transcoding, Batch AI Inference, Cascade live-video AI, LLM Inference. At-a-glance table: job type / what it does / min VRAM / pricing unit / configured via.

Routing differences:
- Video transcoding: stake weight + price + performance score. New/low-stake orchestrators at structural disadvantage; active set membership (top 100 by stake) required; high-stake nodes capture disproportionate volume.
- Batch AI inference: capability match + price ceiling. Stake plays much smaller role. New orchestrator with 24 GB VRAM + correct AI config competes for AI jobs immediately. Gateway hard gate: price_per_unit above -maxPricePerCapability = zero jobs from that gateway.
- Cascade live-video AI: latency as primary factor alongside capability and price. Geographic proximity matters.
- LLM inference: same as batch AI via capability match and price. Runs quantised 7B models on 8 GB cards.

Key insight: Low-stake nodes earn AI fees while transcoding demand stays concentrated in higher-stake nodes. Capable GPU + sound AI configuration is faster route to active earnings.

Video transcoding: gateway segments stream into ~2-second chunks, routes to orchestrator. Node receives raw segment, decodes (NVDEC), re-encodes to output profiles (NVENC), returns results. Sessions last hours. GPU-accelerated transcoding strongly recommended.

Batch AI pipelines (9): text-to-image (24 GB), image-to-image (24 GB), image-to-video (24 GB), image-to-text (4 GB), audio-to-text (12 GB), upscale (model-dependent), segment-anything-2 (6 GB), text-to-speech (model-dependent), llm (8 GB via Ollama).

Cascade: Cascade is the network's strategic name for live-video AI. Underlying implementation: ComfyStream running ComfyUI workflows on live video frames. Phase 1 shipped December 2024; ComfyStream integrated with network payments January 2025. Latency constraint: 30 fps requires processing each frame in ~33ms or less. Use cases: live avatar generation, style transfer overlays, live-video agents, AI-enhanced scene analysis.

LLM: uses separate livepeer-ollama-runner container (not standard livepeer/ai-runner). Quantised LLMs VRAM-efficient. 4-bit 7B fits 8 GB VRAM (GTX 1080/RTX 2060 class).

Hardware selection guidance (AccordionGroup):
- 8-12 GB VRAM: transcoding + LLM inference + image-to-text + segment-anything-2. Skip text-to-image, image-to-image, image-to-video, audio-to-text.
- 16 GB VRAM: full batch AI suite except most VRAM-heavy diffusion. Cascade lightweight workflows possible.
- 24 GB VRAM: full suite. Warm highest-fee pipeline (text-to-image typically most sought after).
- Multiple GPUs/data-centre: pool architecture, different GPUs serve different pipelines, fleet operations.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx
---FRONTMATTER---
title: AI Inference Operations
sidebarTitle: AI Inference
description: How AI inference works on the Livepeer network — pipeline types, the batch vs live-video distinction, hardware requirements, and how jobs flow from application to your GPU node.
keywords: livepeer, orchestrator, ai workloads, batch ai, live-video ai, cascade, live-video-to-video, ai pipelines, gpu inference, comfystream
pageType: concept
audience: orchestrator
purpose: concept
status: published
lastVerified: 2026-03-13
---BODY---
AI subnet launched Q3 2024. Job flow: Application/User → Gateway (routing, auth, pricing, QoS) → Orchestrator (go-livepeer + AI Worker) → AI Runner container (GPU + model) → Result returned through gateway. Operator never builds marketplace/billing/auth.

OrchestratorInfo key fields: capabilities (which pipelines supported), capabilities_prices (price per pipeline/model, must be below gateway -maxPricePerCapability), hardware (GPU specs, auto-populated), price_info (base transcoding price).

Low-LPT entry: AI inference is often better starting point than solo video orchestration when stake limited. Capability, pricing, latency matter more than active-set position for many AI jobs.

Two workload types:
1. Batch AI: request-response inference. Text prompt/media file → process → return result. Pipelines: text-to-image, audio-to-text, image-to-video, LLM, etc. Latency: seconds per request. Runtime: livepeer/ai-runner containers. Min VRAM: 4-24 GB depending on pipeline. Pricing: per pixel, per token, or per ms.
2. Cascade live-video AI: continuous frame-by-frame video transformation. Live video in → processed video out with <100ms latency. Runtime: livepeer/ai-runner:live-base + ComfyStream. Min VRAM: 24 GB recommended. Pricing: per frame. Good for: streaming AI effects, generative video overlays, streaming AI agents.

Ten pipeline types (AccordionGroup): text-to-image (24 GB, per output pixel, RealVisXL Lightning), image-to-image (24 GB, per output pixel, SDXL-Lightning), image-to-video (24 GB, per output pixel), image-to-text (4 GB, per input pixel, BLIP), audio-to-text (12 GB, per ms audio, whisper-large-v3), segment-anything-2 (SAM2), text-to-speech, upscale (SD x4), llm (8 GB via Ollama, meta-llama/Meta-Llama-3.1-8B-Instruct), live-video-to-video (24 GB rec., per frame, livepeer/ai-runner:live-base + ComfyStream; powers Cascade architecture).

Hardware by pipeline table: llm 8 GB (GTX 1080/RTX 2060), image-to-text 4 GB (any NVIDIA), audio-to-text 12 GB (RTX 3060 12GB), segment-anything-2 12 GB, upscale 16 GB (RTX 3080), text-to-image/image-to-image/image-to-video/live-video-to-video 24 GB (RTX 3090/4090).

What operator builds vs what network supplies: operator builds GPU infrastructure + aiModels.json config + warm model management + competitive price/latency. Network supplies: marketplace, authentication, billing, service discovery, brand recognition. Gateways provide all of that.

Verification: tools.livepeer.cloud/ai/network-capabilities (all registered orchestrators + advertised pipelines). Orchestrator must appear there under at least one pipeline before receiving AI jobs.

YouTube embeds: UKWdvJBqrNw (Encode Club Live Video AI Bootcamp), 7a6kBrL0RYg (ComfyStream Demo).
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx
---FRONTMATTER---
title: Diffusion Pipeline Setup
sidebarTitle: Diffusion Setup
description: Complete operator guide for running batch AI inference pipelines on a Livepeer orchestrator — aiModels.json configuration, all supported pipeline types, Ollama LLM runner deployment, BYOC external containers, and troubleshooting.
keywords: livepeer, orchestrator, batch ai, aimodels.json, ai runner, ollama, llm, text-to-image, audio-to-text, byoc, vram, pricing
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
Prerequisites: go-livepeer with -aiWorker flag, NVIDIA Container Toolkit (test: docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi), Docker with GPU access, ~/.lpData/aiModels.json or create one.

How AI worker runs: reads aiModels.json → pulls livepeer/ai-runner containers → GPU containers start per pipeline entry → each container loads model → AI worker advertises capabilities → gateways route matching jobs. Standard container: livepeer/ai-runner (except llm pipeline which uses Ollama-based runner).

aiModels.json location: ~/.lpData/aiModels.json (default), override with -aiModels flag. Minimal working example:
```json
[{"pipeline": "text-to-image", "model_id": "SG161222/RealVisXL_V4.0_Lightning", "price_per_unit": 4768371, "warm": true}]
```

Full field reference table: pipeline (required, string), model_id (required, string, case-sensitive with org prefix), price_per_unit (required, integer wei or USD string), warm (boolean, default false, one per GPU during Beta), pixels_per_unit (integer), currency (string, "USD" for USD notation), url (string, external container URL, must expose /health), token (string, bearer auth for external), capacity (integer, default 1, max concurrent tasks), optimization_flags (object, SFAST or DEEPCACHE for warm diffusion only).

model_id must match HuggingFace ID exactly: "SG161222/RealVisXL_V4.0_Lightning" ✅, "RealVisXL_V4.0_Lightning" ❌ (missing org prefix), wrong case ❌.

Pipeline-specific configurations:
- text-to-image: SG161222/RealVisXL_V4.0_Lightning, 24 GB, per output pixel, price_per_unit 4768371, warm true. Why Lightning: 4 steps vs 20-50 for standard SDXL, under 2s on RTX 4090. Alt models: ByteDance/SDXL-Lightning, stabilityai/stable-diffusion-xl-base-1.0.
- image-to-image: ByteDance/SDXL-Lightning, 24 GB, per output pixel, price_per_unit 4768371.
- image-to-video: stabilityai/stable-video-diffusion-img2vid-xt-1-1, 24 GB (32 GB/multi-GPU preferred), per output pixel, price_per_unit 9536742.
- image-to-text: Salesforce/blip-image-captioning-large, 4 GB, per input pixel, price_per_unit 1192093. Accessible to 8-12 GB operators.
- audio-to-text: openai/whisper-large-v3, 12 GB, per ms audio, price_per_unit 12882811, pixels_per_unit 1, warm true.
- segment-anything-2: facebook/sam2-hiera-large, 12-24 GB, per input pixel, price_per_unit 4768371.
- upscale: stabilityai/stable-diffusion-x4-upscaler, 16-24 GB, per input pixel, price_per_unit 4768371, optimization_flags SFAST.

BYOC (Bring Your Own Container): url field in aiModels.json points to any inference server. Only requirement: /health endpoint + matching AI worker request format. Use cases: non-HuggingFace catalogue models, fine-tuned proprietary models, custom inference architectures (TensorRT/ONNX/OpenVINO), K8s/GPU farm clusters.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx
---FRONTMATTER---
title: Cascade Setup
sidebarTitle: Cascade Setup
description: Deploy the live-video-to-video pipeline on a Livepeer orchestrator — Cascade architecture, ComfyStream setup, live-video frame processing, WebRTC streaming, hardware requirements, and custom pipeline development.
keywords: livepeer, orchestrator, live-video ai, cascade, live-video-to-video, comfystream, comfyui, webrtc, frame processing, streaming ai, byoc pipeline
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
Cascade = Livepeer's live-video AI architecture. live-video-to-video pipeline: continuous frame-by-frame transformation of live video streams with <100ms per-frame latency. Powered by ComfyStream.

Cascade differs from batch AI: input is continuous WebRTC stream (not discrete file), output is processed WebRTC stream, latency <100ms per frame, continuous frame loop (not request → process → respond), runtime livepeer/ai-runner:live-base, Pipeline interface (async frame queue), models are StreamDiffusion/ComfyUI DAGs/ControlNet. At 30 fps = 33ms budget per frame.

Real-world applications: Daydream (generative AI video platform), StreamDiffusionTD (TouchDesigner), ComfyStream (browser-based ComfyUI with live video input), OBS plugins.

Prerequisites: RTX 4090 (24 GB) strongly recommended, CPU 8+ cores, low-latency network (WebRTC packet-loss sensitive), CUDA 12.0+, Docker with NVIDIA Container Toolkit, go-livepeer with -aiWorker enabled. Warning: GPUs below 24 GB typically insufficient (RTX 3080 10 GB, RTX 3060 12 GB).

Architecture: Live video source → WebRTC ingest → Livepeer Gateway → go-livepeer AI Worker → ai-runner:live-base container → ComfyStream/custom pipeline → Frame processing loop (receive → inference → emit) → Processed WebRTC stream → Application/viewer.

ComfyStream: wraps ComfyUI workflow system for continuous frame processing. Adds WebRTC frame ingestion/emission, async frame queue, warm model management, Livepeer AI worker integration. Repo: github.com/livepeer/comfystream.

Setup (6 steps):
1. Verify GPU and driver: `nvidia-smi`, `docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi`
2. Pull live-base image: `docker pull livepeer/ai-runner:live-base`
3. Configure aiModels.json: {"pipeline": "live-video-to-video", "model_id": "streamdiffusion", "price_per_unit": 500, "warm": true}. model_id refers to ComfyUI workflow/pipeline name, not HuggingFace ID. Price must be <= gateway -maxPricePerCapability for live-video-to-video.
4. Download pipeline model weights: `git clone https://github.com/livepeer/comfystream && cd comfystream && pip install -r requirements.txt && python scripts/download_models.py`
5. Start go-livepeer with: -orchestrator -network arbitrum-one-mainnet -aiWorker -aiModels /root/.lpData/cfg/aiModels.json -aiModelsDir /root/.lpData/models -v 6
6. Verify at tools.livepeer.cloud/ai/network-capabilities (should show Warm under live-video-to-video).

StreamDiffusion: primary model architecture for live-video AI. Achieves 30+ fps on RTX 4090. Techniques: Stream Batch (process multiple frames as batch), Residual CFG (approximate CFG with fewer forward passes), Stochastic Similarity Filter (skip inference on similar frames), TinyVAE (faster latency). lcm-lora variants for fastest inference; SD 1.5 base with Lightning LoRA; SDXL Turbo at reduced resolution.

ControlNet variants: Depth (MiDaS/DepthAnything), Canny/Sketch, Pose (DWPose), Normal. IP-Adapter for style reference conditioning.

Performance tuning: use 1-2 step LCM/Lightning models. Resolution tradeoffs: 512×512 = ~30 fps on RTX 4090; 768×768 = ~20 fps; 1024×1024 = ~12 fps. TensorRT compilation: 2-4× speedup one-time compilation. Stochastic Similarity Filter: lift fps for static/slow-moving content.

VRAM management: keep total loaded model + adapter below 20 GB on 24 GB GPU for headroom. Model weights (~8-18 GB SDXL), frame buffers (~500 MB-1 GB per resolution), ControlNet/LoRA adapters (~1-3 GB each), StreamDiffusion batch buffer.

Multi-stream capacity: RTX 4090 handles 1-2 concurrent streams. Scale: multiple GPUs (AI worker dispatches across GPUs), scale-out (multiple orchestrator instances behind gateway load balancer).

Custom Pipeline interface (Python): extend Pipeline abstract class from runner.live.pipelines. Methods: initialize(**params), put_video_frame(frame, request_id), get_processed_video_frame(), update_params(**params), stop(), prepare_models(). Integration requirements: (1) add to ai-worker/runner/dl_checkpoints.sh; (2) add to go-livepeer/ai/worker/docker.go livePipelineToImage map.

Troubleshooting (AccordionGroup): frames dropping/high latency (model too slow, VRAM OOM on frame buffer, CPU bottleneck, network jitter), restore live-video job flow (check tools.livepeer.cloud, verify live-base container, confirm serviceAddr reachable, WebRTC port access), ComfyStream container failing (model weights path, CUDA driver, test: docker run --gpus all --rm livepeer/ai-runner:live-base python -c "import torch; print(torch.cuda.is_available())"), custom pipeline registration (check livePipelineToImage, dl_checkpoints.sh, model_id matches PipelineSpec name).
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx
---FRONTMATTER---
title: 'Audio and Vision Pipelines'
sidebarTitle: 'Audio & Vision'
description: Set up audio-to-text (Whisper), text-to-speech, image-to-text, and segment-anything-2 pipelines on a Livepeer orchestrator. Covers VRAM requirements, aiModels.json entries, pricing units, and testing commands for each pipeline.
keywords: livepeer, orchestrator, audio-to-text, Whisper, text-to-speech, image-to-text, segment-anything-2, SAM2, VRAM, aiModels.json, AI pipeline
pageType: how_to
audience: orchestrator
status: draft
lastVerified: '2026-03-16'
---BODY---
Four non-diffusion, non-LLM pipelines: audio-to-text, text-to-speech, image-to-text, segment-anything-2. All use standard livepeer/ai-runner container. go-livepeer manages container lifecycle automatically.

Pipeline overview table: audio-to-text (~3 GB Whisper, per ms audio, 12 GB rec/runs on 8 GB), text-to-speech (varies, per character or per ms audio, 8 GB+), image-to-text (~1-2 GB BLIP, per input pixel, 4 GB), segment-anything-2 (12-24 GB, per input pixel, 12 GB+).

Competitive note: Audio and vision pipelines have lower competition than diffusion pipelines. Entry for operators who keep GPU idle between diffusion jobs.

audio-to-text (Whisper): standard model openai/whisper-large-v3 (most gateways request this by default). VRAM ~3 GB warm. aiModels.json: {"pipeline": "audio-to-text", "model_id": "openai/whisper-large-v3", "price_per_unit": 12882811, "pixels_per_unit": 1, "warm": true}. 12882811 wei ≈ $0.0000014 per second of audio at late-2025 ETH/USD. Pairs well on 24 GB GPU alongside diffusion model.

text-to-speech: suno/bark documented baseline. aiModels.json: {"pipeline": "text-to-speech", "model_id": "suno/bark", "price_per_unit": 5960465}.

image-to-text: Salesforce/blip-image-captioning-large, VRAM ~1-2 GB, 4 GB GPU minimum. aiModels.json: {"pipeline": "image-to-text", "model_id": "Salesforce/blip-image-captioning-large", "price_per_unit": 1192093, "warm": true}. 1192093 wei ≈ $0.000125 per megapixel at late-2025 rates. Accessible to operators below 24 GB diffusion threshold.

segment-anything-2 (SAM2): facebook/sam2-hiera-large, VRAM 12-24 GB variant-dependent, per input pixel, lower competition than diffusion. aiModels.json: {"pipeline": "segment-anything-2", "model_id": "facebook/sam2-hiera-large", "price_per_unit": 4768371}. Usually stays cold until demand justifies VRAM cost.

Running multiple pipelines: text-to-image warm + audio-to-text warm + image-to-text cold example for 24 GB card. Warning: Beta constraint (one warm model per GPU) means split text-to-image vs audio-to-text across separate GPUs, or keep one cold. Error: "Error loading warm model" = conflict.

Testing: `docker ps --filter name=livepeer-ai-runner`, `docker logs <container> --tail 50`. Verify registration at tools.livepeer.cloud/ai/network-capabilities.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx
---FRONTMATTER---
title: 'LLM Pipeline Setup'
sidebarTitle: 'LLM Setup'
description: Set up the llm pipeline on a Livepeer orchestrator using the Ollama-based runner. Covers Docker Compose configuration, model selection for 8 GB VRAM GPUs, model ID mapping, aiModels.json entries, and USD pricing for token-based workloads.
keywords: livepeer, orchestrator, LLM, Ollama, llm pipeline, aiModels.json, llama3, 8GB VRAM, GPU, inference
pageType: how_to
audience: orchestrator
status: draft
lastVerified: '2026-03-16'
---BODY---
LLM pipeline uses different architecture. Standard livepeer/ai-runner for all other pipelines; LLM uses Ollama-based runner (tztcloud/livepeer-ollama-runner) maintained by Cloud SPE. Enables quantised LLMs on 8 GB+ VRAM GPUs.

Flow: go-livepeer → livepeer-ollama-runner → ollama container → quantised model. go-livepeer connects via `url` field in aiModels.json; Ollama runner and container run as separate Docker services.

Setup (6 steps):
1. Create Docker volume: `docker volume create ollama`
2. docker-compose.yml: ollama-ai-runner (image: tztcloud/livepeer-ollama-runner:0.1.1, container_name: llm_runner, runtime: nvidia, network: livepeer-ai) + ollama (image: ollama/ollama:latest, runtime: nvidia, volume: ollama:/root/.ollama, OLLAMA_GPU_ENABLED=true, network: livepeer-ai)
3. Start stack: `docker compose up -d`
4. Pull LLM model: `docker exec -it ollama ollama pull llama3.1:8b`
5. Add to aiModels.json: {"pipeline": "llm", "model_id": "meta-llama/Meta-Llama-3.1-8B-Instruct", "warm": true, "price_per_unit": 0.18, "currency": "USD", "pixels_per_unit": 1000000, "url": "http://llm_runner:8000"}
6. Restart AI worker, verify at tools.livepeer.cloud/ai/network-capabilities (should show Warm under llm after 2-3 minutes).

Model selection table (8 GB VRAM):
- Llama 3.1 8B: Ollama tag llama3.1:8b, HuggingFace meta-llama/Meta-Llama-3.1-8B-Instruct, ~8 GB
- Mistral 7B: Ollama tag mistral:7b, HuggingFace mistralai/Mistral-7B-Instruct-v0.3, ~8 GB
- Gemma 2 9B: Ollama tag gemma2:9b, HuggingFace google/gemma-2-9b-it, ~10 GB
- Llama 3.1 70B Q4: Ollama tag llama3.1:70b, HuggingFace meta-llama/Meta-Llama-3.1-70B-Instruct, ~40 GB

For 8 GB VRAM: use llama3.1:8b or mistral:7b. Gemma 2 9B needs ~10 GB.

Model ID mapping: Ollama tag (llama3.1:8b) and Livepeer model_id (meta-llama/Meta-Llama-3.1-8B-Instruct) are different naming conventions for same model family. aiModels.json uses HuggingFace ID in model_id; `ollama pull` command uses Ollama tag.

Pricing: USD notation with pixels_per_unit as token-count proxy. $0.18 per million tokens example. Current competitive rate for 8B models as of early 2026.

Testing: `docker exec -it ollama ollama list`, test via curl to runner health endpoint (`curl http://localhost:8000/health` → HTTP 200), test inference: `curl -X POST http://localhost:8000/llm -H "Content-Type: application/json" -d '{"model": "llama3.1:8b", "prompt": "Hello"}'`.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx
---FRONTMATTER---
title: Model and Demand Reference
sidebarTitle: Model Reference
description: Operator reference for GPU memory planning on Livepeer — VRAM requirements by pipeline, warm model strategy, multi-GPU configuration, aiModels.json complete schema, pricing reference, and earnings optimisation.
keywords: livepeer, orchestrator, models, vram, gpu memory, aimodels.json, warm models, multi gpu, pricing, earnings, rtx 4090, a100
pageType: reference
audience: orchestrator
purpose: reference
status: published
lastVerified: 2026-03-13
---BODY---
VRAM is primary constraint for AI inference operators. Key question: which pipeline-model combinations are currently being routed by gateways, and does your hardware keep one warm at a competitive price?

Demand signals: (1) tools.livepeer.cloud/ai/network-capabilities - which models/pipelines visible on network, warm/cold status of competitors; (2) Livepeer Explorer orchestrators page - which operators earning fees and current price distribution.

VRAM by pipeline table (warm VRAM / peak inference VRAM):
- text-to-image RealVisXL Lightning (SDXL): ~12-14 GB / ~16-18 GB (Lightning leaner than full SDXL)
- text-to-image SDXL base 1.0: ~14-16 GB / ~18-20 GB
- image-to-image SDXL-Lightning: ~12-14 GB / ~16-18 GB
- image-to-video SVD XT 1.1: ~16-20 GB / ~22-24 GB
- audio-to-text Whisper large-v3: ~2-3 GB / ~3-4 GB (VRAM-efficient)
- image-to-text BLIP large: ~1-2 GB / ~2-3 GB
- segment-anything-2 SAM2 large: ~4-6 GB / ~6-8 GB
- upscale SD x4: ~6-8 GB / ~8-12 GB
- llm Llama 3.1 8B (Q4): ~6-8 GB / ~8-10 GB
- llm Llama 3.1 70B (Q4): ~35-40 GB / ~45 GB (requires A100 80 GB or dual 40 GB)
- live-video-to-video StreamDiffusion + SD 1.5: ~8-12 GB / ~14-18 GB (+ 1-2 GB frame buffers)
- live-video-to-video StreamDiffusion + SDXL: ~14-18 GB / ~20-24 GB

GPU reference by persona:
- Consumer (8-12 GB): llm (Llama 8B Q4 ~6-8 GB), image-to-text (BLIP ~2 GB), audio-to-text (Whisper ~3 GB ✅ fits 8 GB), segment-anything-2 (SAM2 base ~4-6 GB). Strategy: warm audio-to-text + image-to-text simultaneously, add llm on separate GPU.
- Mid tier (24 GB): text-to-image SDXL Lightning warm, image-to-image cold, audio-to-text warm simultaneously (only 3 GB), upscale warm.
- High tier (24 GB+ / multiple GPUs): RTX 4090 × 2: SDXL warm on GPU0, Whisper + LLM on GPU1. A100 80 GB: warms multiple diffusion models + live-video simultaneously.

Warm vs cold: Competitive critical (warm required): text-to-image (cold SDXL load 30-90 seconds), live-video-to-video (cold mid-stream causes interruption), image-to-image. Acceptable cold: audio-to-text (Whisper loads in 3-5 seconds), image-to-text (BLIP very fast), segment-anything-2.

Beta constraint: one warm model per GPU. Multi-entry example: RTX 4090 × 1: text-to-image warm, audio-to-text cold (Whisper 3 GB may co-warm on some hardware, check logs).

Multi-GPU configuration: explicit GPU assignment via CUDA device environment variable. GPU 0 for diffusion, GPU 1 for Whisper + LLM via external containers. aiModels.json url field routes to appropriate container.

aiModels.json complete schema (AccordionGroup): pipeline (required, all 10 values listed), model_id (required, HuggingFace ID, case-sensitive, org prefix required), price_per_unit (required, integer wei or USD string, pricing unit per pipeline table included), warm (boolean, default false, Beta constraint), pixels_per_unit (integer, per-ms for audio, per-million-tokens for LLM), currency (string "USD" required for USD notation), url (string, external container, must expose /health, poll at startup), token (string, bearer auth), capacity (integer, default 1), optimization_flags (object, SFAST or DEEPCACHE, one only, not for Lightning/Turbo).

Model selection heuristics: maximum text-to-image jobs → SG161222/RealVisXL_V4.0_Lightning warm; entry with 8 GB → Whisper + BLIP; LLM income with older card → meta-llama/Meta-Llama-3.1-8B-Instruct via Ollama; live-video premium → StreamDiffusion via ComfyStream; diversified single 24 GB → text-to-image warm, audio-to-text cold, image-to-image cold.

Reference pricing (late 2025): text-to-image 3-8M wei (~$0.0003-0.0008/megapixel), image-to-image 3-8M wei, audio-to-text 8-15M wei (~$0.0008-0.0015/ms), image-to-text 1-3M wei, llm 0.1-0.3 USD ($0.10-0.30/1M tokens).
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx
---FRONTMATTER---
title: 'Model Hosting'
sidebarTitle: 'Model Hosting'
description: Source, download, and store AI models for Livepeer orchestrator pipelines. Covers HuggingFace model IDs, automatic vs manual download, storage layout, gated model access via tokens, and the Livepeer verified model list.
keywords: livepeer, orchestrator, model hosting, HuggingFace, model download, aiModels.json, model storage, gated models, HuggingFace token, BYOC
pageType: how_to
audience: orchestrator
status: draft
lastVerified: '2026-03-16'
---BODY---
Model sourcing covers how models reach GPU; warm/cold strategy in AI Model Management page.

HuggingFace (primary source): model_id = organisation/model-name format, case-sensitive including org prefix. Examples: SG161222/RealVisXL_V4.0_Lightning, openai/whisper-large-v3, Salesforce/blip-image-captioning-large, meta-llama/Meta-Llama-3.1-8B-Instruct.

External containers (BYOC): url field in aiModels.json. Only requirement: /health endpoint returning HTTP 200. Common uses: Ollama runner for LLM, custom PyTorch/TensorRT/ONNX inference, GPU clusters/auto-scaling behind load balancer, fine-tuned/proprietary models outside HuggingFace.

Download mechanics:
- Automatic: livepeer/ai-runner downloads from HuggingFace on first use. Warm models download immediately at container startup; cold models download when first job arrives.
- Manual pre-download: `docker run --rm -v ~/.lpData/models:/root/.lpData/models livepeer/ai-runner python download_model.py --pipeline text-to-image --model_id SG161222/RealVisXL_V4.0_Lightning`. Recommended for large models (5 GB+), unreliable internet, production deployments.

Storage location: ~/.lpData/models/ (default), override with -aiModelsDir flag. Use NVMe storage for model directory (loading from spinning disk significantly slower).

Storage sizing (per model): SDXL-Lightning ~6-7 GB, SVD ~10 GB, Whisper large-v3 ~3 GB, BLIP large ~1.5 GB, SAM2 large ~2.5 GB, Llama 3.1 8B Q4 (Ollama) ~4.7 GB.

Docker-out-of-Docker: -aiModelsDir must point to HOST machine path (Docker uses it to mount model files into spawned AI Runner containers).

Gated model access: some HuggingFace models require account acceptance. Steps: (1) create HuggingFace account; (2) accept usage terms on model page; (3) generate access token (huggingface.co/settings/tokens, Read scope); (4) add "token" field to aiModels.json entry. Warning: keep aiModels.json with tokens out of version control.

Livepeer verified model list: gateways route only models they recognise/price against. Configuring model outside verified list = gateways route no traffic to it. Check tools.livepeer.cloud/ai/network-capabilities for current network-visible models.

Verifying model load: `docker ps --filter name=livepeer-ai-runner`, `docker logs <container_name> --tail 100`. Common errors: OOM/CUDA out of memory (model exceeds VRAM), Failed to load model (model_id mismatch or network error), model lookup failed (HuggingFace model not found or gated access missing). Registration: appears at tools.livepeer.cloud/ai/network-capabilities within 2-5 minutes. Missing after 10 minutes: check container running, logs for errors, orchestrator reachability.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx
---FRONTMATTER---
title: Video Transcoding Operations
sidebarTitle: Video Transcoding
description: Configure video transcoding on your Livepeer orchestrator — wei and USD pricing, automatic price adjustment, session limits, bandwidth calculation, NVENC session caps, and output rendition profiles.
keywords: livepeer, orchestrator, video transcoding, pricing, pricePerUnit, pixelsPerUnit, wei per pixel, USD pricing, Chainlink, autoAdjustPrice, maxSessions, NVENC, session limits, bandwidth, ABR ladder, transcodingOptions
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
Transcoding pipeline: gateway segments stream into ~2-second chunks → orchestrator receives raw segment, decodes (NVDEC), re-encodes to multiple output renditions (NVENC), returns results. Sessions persist for stream duration (hours). GPU transcoding (NVENC/NVDEC) strongly recommended; CPU rarely competitive.

Pricing options:
A) Wei pricing: -pricePerUnit 500 -pixelsPerUnit 1. Per-pixel rate = pricePerUnit / pixelsPerUnit. -pixelsPerUnit is denominator.
B) USD pricing (go-livepeer 0.8.0+): -pixelsPerUnit 1e12 -pricePerUnit 0.41USD (= $4.10×10⁻¹³ per pixel). Converts via Chainlink ETH/USD feed on Arbitrum. -pixelsPerUnit supports exponential notation; -pricePerUnit does not. USD pricing auto-syncs with Livepeer Studio's -maxPricePerUnit. Custom feed: -priceFeedAddr (for Ethereum mainnet, BTC, non-Arbitrum).

autoAdjustPrice (default on): adjusts advertised price upward for ticket redemption overhead as Arbitrum gas rises. Disable for fixed price: -autoAdjustPrice=false. Table: 1% overhead→1010 wei, 20% overhead→1200 wei, 50% overhead→1500 wei.

Update price via livepeer_cli (without restart): livepeer_cli → Set orchestrator config → set pixelsPerUnit → set pricePerUnit (use "0.41USD" for USD notation).

Gateway pricing hard gate: orchestrators above -maxPricePerUnit receive ZERO work from that gateway. Market survey: Livepeer Explorer orchestrators page for current price distribution.

Session limits: -maxSessions (default 10). Correct value = min(hardware_capacity, bandwidth_capacity). Too high = degrade transcoding quality + gateway penalty. Too low = leave money on table. OrchestratorCapped error = ceiling blocking new jobs.

Hardware capacity (livepeer_bench): scaling loop from 1-20 concurrent sessions; Duration Ratio at or below 0.8 = hardware limit. Multi-GPU: benchmark one GPU × count. See capacity-planning.mdx for full procedure.

Bandwidth capacity per session: download ~6 Mbps (1080p30fps source), upload ~5.6 Mbps (full 5-rendition ABR). Formula: min(connection_download ÷ 6, connection_upload ÷ 5.6). 100 Mbps symmetric → 16 sessions theoretical, ~19 with realistic stagger.

NVENC session caps: consumer GPUs (GTX/RTX series) hard-enforced 3-8 concurrent sessions per GPU. Professional (RTX A-series, Quadro) and datacenter (A100, H100) = unlimited. Impact: Cannot allocate memory on startup or runtime rejection. Workaround: NVIDIA driver patch (removes cap; outside NVIDIA support). Practical: set maxSessions no higher than NVENC cap.

ABR output ladder (standard, from transcodingOptions.json): P720p30fps 3000 kbps, P480p30fps 1600 kbps, P360p30fps 800 kbps, P240p30fps 250 kbps. Total upload: 5.65 Mbps per stream. Default -transcodingOptions flag: P240p30fps16x9,P360p30fps16x9,P720p30fps16x9. More renditions = more NVENC passes per segment. Custom profiles via transcodingOptions.json JSON array.

Optimisation tips: always use GPU transcoding; derive maxSessions from benchmarks (RTX 4090 often 30+, RTX 3060 often ~8); monitor Duration Ratio in production via Prometheus; use domain name for serviceAddr (IP changes require on-chain update transaction); USD pricing for long-term stability; leave autoAdjustPrice on during gas spikes.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/ai-and-job-workloads/ai-sources.md
---FRONTMATTER---
(Research log .md file - no frontmatter)
---BODY---
Research log for ai-workloads-overview.mdx, batch-ai-setup.mdx, realtime-ai-setup.mdx, and model-vram-reference.mdx. 61 sources total. Key sources: livepeer/go-livepeer (ai/worker/docker.go), livepeer/ai-worker (pipeline interface, dl_checkpoints.sh), livepeer/comfystream, daydreamlive/scope-runner (reference Pipeline implementation). HuggingFace models: RealVisXL Lightning, Whisper large-v3, BLIP large, SAM2 large, SVD XT 1.1, Llama 3.1 8B, suno/bark, Mistral 7B, Gemma 2 9B. Docker Hub: livepeer/ai-runner, tztcloud/livepeer-ollama-runner:0.1.1, ollama/ollama. Papers: StreamDiffusion (arXiv 2312.12491), ControlNet (arXiv 2302.05543). Community: tools.livepeer.cloud/ai/network-capabilities, Cloud SPE Ollama runner blog, Livepeer Forum orchestrators, Discord. Videos embedded: UKWdvJBqrNw (Encode Club bootcamp), 7a6kBrL0RYg (ComfyStream demo), Kf3fV00XFRU (batch AI setup). REVIEW flags: ComfyUI-Stream-Pack canonical nodes, live-video-to-video model_id format, VRAM figures validation, pricing figures vs current Explorer, Ollama compatibility table, BYOC hosting path.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/advanced-operations/advanced-sources.md
---FRONTMATTER---
(Research log .md file - no frontmatter)
---BODY---
Research log for Group 5 (Monitoring & Troubleshooting) and Group 6 (Advanced Operations) sections. Primary verified sources: go-livepeer doc/gpu.md (GPU support/CUDA requirements/YUV 4:2:0/driver versions), doc/selection.md (gateway selection algorithm), doc/multi-o.md (multi-orchestrator architecture), monitor/census.go (Prometheus metrics categories), doc/redeemer.md (separate redeemer architecture). livepeer/livepeer-monitoring repo README for Docker monitoring stack. Community sources: Titan Node (titan-node.com, app.titan-node.com), tools.livepeer.cloud, Livepeer Forum Prometheus monitoring guide, Dune Analytics dashboards (rickstaa, stronk). Unresolved REVIEW flags: AI leaderboard in Explorer (Rick High), Loki endpoint loki.livepeer.report still live (Rick High), Prometheus alert metric names vs monitor/census.go (Rick High), Ada Lovelace RTX 40xx NVENC cap (Rick High). Video content search queries for: Prometheus monitoring, Explorer orchestrator reading, pool worker setup, troubleshooting GPU, Titan Node pool client, split O-T setup.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx
---FRONTMATTER---
title: 'Dual Mode Configuration'
sidebarTitle: 'Dual Mode'
description: >-
  Configure your orchestrator node to serve both video transcoding and AI
  inference jobs from a single go-livepeer process.
keywords:
  - livepeer
  - orchestrator
  - dual mode
  - dual-workload
  - video transcoding
  - AI inference
  - aiWorker
  - aiModels
  - GPU
  - NVENC
  - setup
pageType: how_to
audience: orchestrator
purpose: setup
status: draft
lastVerified: '2026-03-16'
---BODY---
A Dual Mode orchestrator serves video transcoding and AI inference jobs from a single go-livepeer process. Video transcoding routes through NVENC and NVDEC. AI inference runs on CUDA compute. These use separate hardware resources, so adding AI requires no changes to on-chain registration, staking, or transcoding configuration. Dual Mode requires Linux (AI Runner container is Linux-only).

What changes: same go-livepeer binary, three additional flags and one aiModels.json file. Video only: ETH transcoding fees + LPT rewards, -pricePerUnit, NVENC/NVDEC, minimal VRAM, active set required. AI only: ETH AI fees, aiModels.json per pipeline, CUDA compute, 8-24 GB VRAM, capability advertisement. Dual Mode: both streams, both pricing configs, both paths, 16 GB recommended (8 GB for LLM-only), Linux only.

Prerequisites: NVIDIA GPU 16 GB VRAM+ (8 GB viable for LLM via Ollama); Linux; Docker + NVIDIA Container Toolkit; Arbitrum wallet funded with ETH; model weights pre-downloaded.

Setup - Starting fresh (4 steps):
1. Download model weights: docker run --rm -v ~/.lpData/models:/models --gpus all livepeer/ai-runner:latest bash -c "PIPELINE=text-to-image MODEL_ID=ByteDance/SDXL-Lightning bash /app/dl_checkpoints.sh"
2. Create aiModels.json: [{"pipeline":"text-to-image","model_id":"ByteDance/SDXL-Lightning","price_per_unit":4768371,"warm":true}]
3. Start go-livepeer: docker run --name livepeer_dual_orchestrator -v ~/.lpData/:/root/.lpData/ -v /var/run/docker.sock:/var/run/docker.sock --network host --gpus all livepeer/go-livepeer:master -network arbitrum-one-mainnet -ethUrl <ARBITRUM_RPC_URL> -ethAcctAddr <ETH_ACCOUNT_ADDRESS> -orchestrator -transcoder -nvidia 0 -pricePerUnit <WEI_PER_PIXEL> -serviceAddr <YOUR_PUBLIC_IP>:8935 -aiWorker -aiModels /root/.lpData/aiModels.json -aiModelsDir ~/.lpData/models
   Three AI flags: -aiWorker (enables AI inference mode), -aiModels (path to aiModels.json inside container), -aiModelsDir (path to model weights on host, required for Docker-out-of-Docker)
4. Activate on-chain via livepeer_cli, "Invoke multi-step become an orchestrator"

Setup - Adding AI to existing node (3 steps):
1. Download model weights as above
2. Create aiModels.json as above
3. Add three AI flags + Docker socket mount (-v /var/run/docker.sock:/var/run/docker.sock) to existing start command

Verify: curl http://localhost:7935/getNetworkCapabilities | jq - response includes pipelines array. External visibility at tools.livepeer.cloud/ai/network-capabilities. Missing pipelines after 2-3 min: inspect docker logs livepeer_dual_orchestrator 2>&1 | grep -i "ai-runner|container|pipeline|error"

Resource management: NVENC/NVDEC are separate silicon from CUDA. VRAM constraint set by AI model weights.
GPU class table: RTX 2060/3060 (8-12 GB) - LLM via Ollama, audio-to-text, image-to-text, light diffusion with SFAST; RTX 3080/4070 (10-12 GB) - most batch pipelines, text-to-image SDXL-Lightning; RTX 3090/4090/A5000 (24 GB) - all batch pipelines including image-to-video, multiple warm models, live-video-to-video.

Earnings: two independent revenue streams, both ETH via probabilistic micropayments. Current rates at Livepeer Explorer and tools.livepeer.cloud.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/siphon-setup.mdx
---FRONTMATTER---
title: 'Siphon Split Setup'
sidebarTitle: 'Siphon Setup'
description: >-
  Separate reward claiming and keystore management from GPU workload processing
  using OrchestratorSiphon - two-machine architecture, installation, config.ini
  setup, systemd service, and day-to-day operations.
keywords:
  - livepeer
  - orchestrator
  - siphon
  - OrchestratorSiphon
  - split setup
  - keystore
  - reward calling
  - key isolation
  - two-machine
  - go-livepeer
  - arbitrum
pageType: guide
audience: orchestrator
purpose: guide
status: current
lastVerified: '2026-03-15'
---BODY---
Problem: GPU machine reboot mid-round loses that round's LPT inflation reward permanently. GPU machine processing untrusted media is a poor keystore host.

Solution: OrchestratorSiphon on a small secure machine handles all on-chain actions (reward calling, fee withdrawal, governance voting, service URI updates). GPU machine runs go-livepeer in transcoder mode. Two machines are independent - GPU restarts without interrupting reward claims.

Architecture: Secure machine (OrchestratorSiphon, holds keystore, calls reward each round ~22 hours, withdraws fees, votes, updates service URI). GPU machine (go-livepeer -transcoder, processes video segments, runs AI inference, no keystore). Siphon calls reward() on-chain. Service URI points at GPU machine.

Machine table: Secure machine - OrchestratorSiphon (keystore, reward, fees, on-chain actions), no GPU required (small VPS). GPU machine - go-livepeer transcoder mode (segment processing, AI inference), GPU required.

Use Siphon when: GPU machine uptime uncertain; keystore isolation needed; multiple GPU machines behind one Orchestrator; LPT rewards needed before GPU ready.
Use combined go-livepeer when: single machine sufficient, reward calling alongside workloads fits model.

Prerequisites table: Secure machine: Linux Ubuntu 20.04+, Python 3 + pip, outbound to Arbitrum RPC, Orchestrator keystore + ETH for gas, LPT staked. GPU machine: Linux with NVIDIA GPU, go-livepeer binary, static IP or stable DNS + port 8935 open, small ETH for ticket redemption, stake handled by secure machine.

Part 1 - Secure Machine (5 steps):
1. git clone https://github.com/Stronk-Tech/OrchestratorSiphon.git && cd OrchestratorSiphon
2. python3 -m venv .venv && source .venv/bin/activate && pip install web3 eth-utils setuptools (Ubuntu 24.04+: python3 -m pip install --break-system-packages web3 eth-utils setuptools). Verify: python3 -m pip show web3 requests urllib3. RequestsDependencyWarning fix: pip install --upgrade "requests>=2.31" "urllib3>=2.0" web3
3. Configure config.ini: [keystore1] keystore=/path/to/UTC--file, password= (empty = interactive prompt), source_address=0x..., receiver_address_eth=0x..., receiver_address_lpt=0x.... [thresholds] lpt_threshold=100, eth_threshold=0.20, eth_minval=0.020, eth_warn=0.010. [rpc] l2=https://arb1.arbitrum.io/rpc. Multi-orchestrator: duplicate [keystore1] as [keystore2]. All fields also support env vars (always override file). Warning: never share keystore/password.
4. Test manually: .venv/bin/python3 OrchestratorSiphon.py - enter password when asked, enter 0 to launch standard mode. Output shows pending rewards, ETH balance, current round.
5. systemd service at /etc/systemd/system/orchSiphon.service: ExecStart=/path/to/.venv/bin/python3 -u OrchestratorSiphon.py. sudo systemctl daemon-reload && enable && start && status. journalctl -u orchSiphon -f

Part 2 - GPU Machine (3 steps):
1. Install go-livepeer per standard guide
2. livepeer -transcoder -orchAddr <this-machine-hostname>:8935 -nvidia 0 -maxSessions 10 -network arbitrum-one-mainnet. For AI: add -aiModels /path/to/aiModels.json
3. Update service URI: trigger Siphon interactive mode via SIGINT (Ctrl+C), select service URI update. Verify at https://explorer.livepeer.org/accounts/<address>/orchestrating

Verification: Secure machine - journalctl -u orchSiphon --since "24 hours ago" | grep -i "reward|round" (reward call ~once every 22 hours). GPU machine - journalctl -u livepeer --since "1 hour ago" | grep -i "transcode|segment|session". Quiet node after 15-20 min: check service URI, port 8935 open.

Day-to-day: Secure machine (mostly automatic) - Siphon calls reward() each round, ETH fees swept when threshold met, check journalctl periodically, keep ETH above eth_warn. GPU machine - standard Orchestrator operations, monitor metrics, restart after upgrades.

Scaling: add second GPU machine - install go-livepeer transcoder mode, point -orchAddr at same service URI or load balancer, capacity increases. Siphon config stays unchanged.

Troubleshooting (AccordionGroup):
- Gas error: ETH balance dropped below gas cost. Top up Orchestrator wallet on Arbitrum One. Siphon resumes automatically.
- GPU machine idle: verify service URI resolves, port 8935 open, go-livepeer started in transcoder mode (check GPU detection in logs), check Explorer active set and service URI, confirm pricing in range.
- IP address change: update DNS/IP first, trigger Siphon interactive mode to update service URI, wait propagation, verify on Explorer.
- Siphon while GPU offline: yes, Siphon manages on-chain actions independently. LPT rewards continue regardless of GPU machine state.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx
---FRONTMATTER---
title: 'Orchestrator-Transcoder Split Setup'
sidebarTitle: 'O-T Split'
description: >-
  Run go-livepeer's Orchestrator and Transcoder as separate processes on separate
  machines - isolating protocol operations from GPU workload, scaling Transcoders
  independently, and connecting multiple GPU machines to one Orchestrator.
keywords:
  - livepeer
  - orchestrator
  - transcoder
  - split
  - o-t split
  - orchSecret
  - orchAddr
  - standalone transcoder
  - separate machines
  - multi-transcoder
  - split setup
pageType: guide
audience: orchestrator
purpose: guide
status: current
lastVerified: '2026-03-15'
---BODY---
Default: go-livepeer runs Orchestrator and Transcoder as single combined process. Split: one machine handles protocol (on-chain interactions, job routing, reward calling), one or more machines handle GPU work. Connect over network using shared secret (-orchSecret). Foundation for running a pool.

Reasons to split: Security isolation (keystore only on Orchestrator, compromised worker cannot drain funds); Independent scaling (add/remove Transcoder machines without touching Orchestrator); Stable reward calling (small stable VPS, independent of GPU); Role-optimised hardware.

Architecture: Gateway → port 8935 (public) → Orchestrator (VPS/stable server, Ethereum keystore, reward calling, job routing, no GPU) → port 8935 (orchSecret) → Transcoder 1/2/3 (GPU machines). Protocol sees only the Orchestrator.

Data flow: Gateway connects to Orchestrator port 8935 → Orchestrator dispatches to available Transcoder via gRPC → Transcoder processes and returns → Orchestrator returns to Gateway.

Part 1 - Orchestrator Machine:
livepeer -network arbitrum-one-mainnet -ethUrl <RPC_URL> -ethAcctAddr <ADDRESS> -orchestrator -orchSecret <SECRET> -serviceAddr <HOST>:8935 -pricePerUnit <PRICE>

Flags: -orchestrator (handles Gateway connections + job routing, local transcoding disabled); -orchSecret (shared secret for Transcoder authentication, pass as plaintext or file path -orchSecret /path/to/secret.txt); -serviceAddr (public hostname:port, must match on-chain service URI); -pricePerUnit (wei per pixel).

Note: use file-based orchSecret in production. Plaintext visible via ps aux. echo "my-secret-value" > /etc/livepeer/orchsecret.txt && chmod 600 /etc/livepeer/orchsecret.txt

Part 2 - Transcoder Machines:
livepeer -transcoder -nvidia <GPU_IDs> -orchSecret <SECRET> -orchAddr <ORCH_HOST>:8935 -maxSessions <N>

Flags: -transcoder (GPU work, Orchestrator handles protocol/on-chain); -nvidia (comma-separated GPU IDs: 0 or 0,1); -orchSecret (must match Orchestrator exactly, case-sensitive); -orchAddr (Orchestrator hostname:port); -maxSessions (max concurrent sessions).

Verifying connection: Orchestrator logs show "Got a RegisterTranscoder request from transcoder=10.3.27.1 capacity=10". capacity = -maxSessions value. Job routing starts after this line appears.

Multiple Transcoders: any number connect with same -orchSecret. Each appears in Orchestrator logs. Orchestrator distributes across all connected Transcoders automatically. Effective capacity = sum of all. New Transcoders added at any time.

Pool relationship: O-T split and worker pool are same architecture. O-T split: operator owns all machines, Transcoders internal. Pool: external workers connect own machines, third-party workers, off-chain payout tracking required.

Security (AccordionGroup):
- orchSecret: only authentication between O and T. Any node with this secret can connect as Transcoder. Keep private: not in Docker images, config files, version control. Use file-based with restricted permissions.
- Transcoders stay off-chain: keystore-free, workload-only flags. Only Orchestrator submits on-chain transactions.
- Port 8935 on Orchestrator: must be publicly accessible for both Gateway and Transcoder connections (both connect inbound).
- Rotating orchSecret: generate new secret, update Orchestrator command, communicate to all Transcoder operators, restart Orchestrator. Existing connections drop, reconnect with new secret.

Troubleshooting: Status endpoint https://<orchestrator-host>:8935/status, metrics http://localhost:7935/metrics.
- Transcoder never reaches logs: check port 8935 reachable (curl -v https://<host>:8935/status), orchSecret matches exactly, TLS cert trusted, GPU test succeeded at Transcoder startup.
- Transcoder connects but stays idle: check maxSessions not fully used, check Orchestrator metrics, idle Orchestrator points to Gateway routing.
- Cannot allocate memory: NVENC session cap reached on GPU.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/setup-options.mdx
---FRONTMATTER---
title: 'Setup Options'
sidebarTitle: 'Setup Options'
description: 'A guide to Livepeer GPU setup options - including installing with go-livepeer, using Siphon, joining a pool or operating concurrent workloads.'
keywords:
  - livepeer
  - orchestrator
  - setup options
  - on-chain
  - off-chain
  - go-livepeer
  - siphon
  - pool node
  - solo
  - dual mode
pageType: overview
audience: orchestrator
purpose: orientation
status: current
lastVerified: '2026-03-17'
---BODY---
Four key decisions: Setup Mode (on-chain vs off-chain network), Software Path (go-livepeer only vs go-livepeer + Siphon), Operational Mode (Solo/Pool Node/O-T Split), Workload Mode (Video/AI/Dual).

Setup Type table:
- On-chain: connected to Livepeer on Arbitrum, Gateways find node via protocol registry, LPT inflation rewards each round, requires Arbitrum RPC + arbETH + LPT stake. Use for production orchestrators.
- Off-chain: no blockchain connection, only gateways with explicit -orchAddr, no rewards, requires GPU + gateway to serve. Use for private orchestrators, development, testing.

Software Path: go-livepeer is the Livepeer protocol implementation, runs as single process or split O/T mode. All paths use go-livepeer for compute. OrchestratorSiphon is Python companion for keystore operations, reward calling, governance on separate secure machine. GPU machine still runs go-livepeer in transcoder mode. Siphon exists because GPU machines restart and missed reward rounds are permanent LPT loss.

go-livepeer only vs go-livepeer + Siphon: Machines (1 or 2+ vs 2), Keystore (same machine as GPU vs isolated on secure machine), Reward calling (tied to GPU machine vs independent), Complexity (lower vs higher).

Operational Mode table:
- Solo: one go-livepeer process, full control over pricing/workloads/stake/earnings, direct on-chain payouts, governance weight, single point of failure for rewards. LPT: active set threshold (video) or minimal (AI). Machines: 1.
- Pool node: go-livepeer transcoder mode, connected to pool operator. No staking, no reward calling, no pricing decisions, no keystore, no upgrade responsibility. Passive GPU earnings distributed off-chain. LPT: none. Machines: 1.
- O-T split: Orchestrator process (protocol, routing, no GPU) + transcoder process (GPU compute) on separate machines. Keystore isolated from GPU. GPU machines scale independently. Reward calling from stable server. Foundation for pool. LPT: active set threshold. Machines: 2+.
Note: Running a pool (accepting external GPU operators) is extension of O-T split.

Workload Mode table:
- Video: segment transcoding via NVENC/NVDEC, min 4 GB VRAM, -pricePerUnit (wei per pixel)
- AI: inference via CUDA compute, min 8-24 GB VRAM, aiModels.json per pipeline
- Dual: both pipelines one process, min 16-24 GB VRAM, both pricing methods
NVENC/NVDEC (video) and CUDA (AI) use separate execution paths. 24 GB card runs both with one warm AI model.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/join-a-pool.mdx
---FRONTMATTER---
title: Join a Pool
sidebarTitle: Join a Pool
description: Contribute GPU capacity to an existing Livepeer orchestrator and earn rewards without running protocol infrastructure.
pageType: quickstart
audience: orchestrator
purpose: faq
keywords:
  - livepeer
  - orchestrators
  - setting up an orchestrator
  - join a pool
  - join
  - pool
---BODY---
Orchestrator pools are operator-run GPU pools where multiple GPU providers contribute hardware to a single Livepeer orchestrator, which aggregates capacity, routes jobs, and distributes rewards.

Pool vs Orchestrator Comparison table: Setup & Maintenance (pool: no protocol setup, connects to existing infrastructure; orchestrator: install/configure/maintain node). LPT required (pool: no staking/delegation/on-chain; orchestrator: required). Operational lift (pool: operator handles node/upgrades/routing/monitoring; orchestrator: full responsibility). Pricing control (pool: set at pool level, no individual pricing; orchestrator: full control). Rewards (pool: shared, pool takes percentage; orchestrator: keep 100%). Protocol reputation (pool: accrues to orchestrator not individual; orchestrator: direct to your address). Flexibility (pool: join/leave without affecting on-chain identity; orchestrator: unbonding periods reduce flexibility).

Step 1 - Choose a Pool: Joining is an operational partnership, not a permissionless action. No canonical directory - discovery is off-chain/social, like mining pools. Currently Titan Node (titan-node.com) is the primary public pool.

Finding a pool: Discord (discord.gg/livepeer), Forum (forum.livepeer.org), direct outreach, infrastructure/GPU communities.

Pool due diligence checklist: how earnings are calculated, how usage is measured, how disputes are handled, whether GPUs can be removed at any time, what happens during downtime. Pool should publish: whether it accepts external GPUs, supported hardware (GPU models, VRAM, single/multi), supported workloads (transcoding, AI, realtime ComfyUI/ComfyStream, batch vs latency), revenue split (% paid to GPU owner vs operator), payout details (asset type, frequency, minimum thresholds), operational requirements (uptime, monitoring, geographic constraints).

Step 2 - Connect your GPU: three connection models:
- BYO Container (preferred): orchestrator provides container image and configuration, container exposes standardised endpoints, orchestrator schedules work. Pros: security boundaries, reproducible, easy upgrades, minimal trust. Cons: slightly more complex, slight perf overhead.
- Bare Metal: orchestrator provides SSH/VPN access, GPU owner provisions Linux machine with drivers, orchestrator provides setup instructions. Pros: full hardware control, no vendor lock-in, lower latency. Cons: physical presence, sysadmin experience required.
- Cloud GPU: launch cloud GPU instance, install drivers, orchestrator connects. Pros: fast to scale. Cons: higher cost, margin depends on utilisation.

Step 3 - Orchestrator Aggregates: GPU added to internal capacity tracking, aggregate capacity advertised to gateways, load-balanced across pooled GPUs. Protocol sees one orchestrator with pooled stake. Uptime/pricing/reputation managed at pool level.

Step 4 - Earn Rewards: all rewards earned by Orchestrator and distributed off-chain to GPU contributors. No on-chain rewards for individual GPUs. Reward sources: usage fees (paid by applications/gateways based on actual work), inflation rewards (minted by protocol, earned by orchestrator stake, typically shared). Payouts defined by pool terms: asset type (ETH/USDC/fiat), schedule (daily/weekly/monthly), performance adjustments, minimum thresholds.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx
---FRONTMATTER---
title: 'Join a Pool'
sidebarTitle: 'Join a Pool'
description: >-
  How to contribute GPU compute to an existing Livepeer Orchestrator pool - what
  pools are, how to evaluate one, how to connect as a worker, and what to expect
  from payouts.
keywords:
  - livepeer
  - orchestrator
  - pool
  - GPU pool
  - video mining
  - titan node
  - transcoding pool
  - GPU earnings
  - passive income
  - pool worker
pageType: guide
audience: orchestrator
purpose: guide
status: current
lastVerified: '2026-03-15'
---BODY---
A pool lets GPU compute contribute to the Livepeer network without running a full Orchestrator. Pool operator handles staking, on-chain registration, reward calling, and job routing. Workers provide GPU hardware and earn for the work it processes. Lowest-barrier entry point.

Pool Architecture: single registered Orchestrator aggregates compute from multiple GPU contributors. Network sees one Orchestrator with one stake. Pool operator: holds stake, sets prices/capabilities, receives work from Gateways, routes segments to workers, distributes payouts. Worker: runs transcoding worker (go-livepeer transcoder mode or pool's own client), processes segments, receives off-chain payouts. Payouts tracked in pool-side systems.

Pool Worker vs Solo table: LPT stake (no vs yes); On-chain registration (no vs yes); Set own prices (no vs yes); Direct on-chain payouts (no vs yes); Operational complexity (low vs medium-high); Trust requirement (pool operator vs yourself); Reward calling (pool operator vs solo operator or Siphon); Best for (passive earnings vs full control).

Step 1 - Choose a Pool: Titan Node Pool (github.com/Titan-Node/Titan-Node-Pool) - Docker-based worker client, public dashboard at app.titan-node.com, payout tracking managed by pool operator. Also Livepeer Discord #orchestrators.

Evaluating a pool (AccordionGroup):
- Payout formula: per-segment, proportional share, or pool token. Confirm what is actually paid.
- Payout frequency and minimum: most pools weekly or monthly with minimum balance. High minimum + low demand = long wait for first payout.
- Worker requirements: legitimate pools provide clear GPU type/VRAM/OS/bandwidth requirements. A legitimate pool NEVER asks for keystore or private key. "A request for a keystore or private key is a scam. Stop there."
- Pool maintenance: check GitHub recency, Discord presence, community activity.

Step 2 - Connect GPU:
Option A - Docker worker (recommended): git clone https://github.com/Titan-Node/Titan-Node-Pool.git && cd Titan-Node-Pool/docker && docker compose up -d. Container connects to pool operator's Orchestrator, processes segments, reports completed work.
Option B - go-livepeer transcoder mode: livepeer -transcoder -orchAddr <pool-orchestrator-address>:8935 -nvidia 0 -maxSessions 10. Pass -transcoder only when joining a pool.
Option C - Cloud GPU: RunPod, Lambda Labs, AWS. Only viable if compute cost stays below expected earnings. Check Discord for current network demand.

Step 3 - Verify Work: look for "Received transcode request segment=0" and "Transcoded segment segment=0" in worker logs. No activity after 10-15 min: verify pool Orchestrator address, nvidia-smi shows GPU, GPU detection line in go-livepeer startup, port 8935 reachable from pool Orchestrator, ask in pool Discord.

Step 4 - Track Earnings: payouts off-chain. Titan Node: app.titan-node.com shows per-worker stats and pending payout. Most pools: Discord bot or web dashboard with segment count and pending balance.

FAQ:
- LPT needed: no, pool operator handles staking and on-chain actions.
- GPU on-chain: no, tracked in pool operator's systems.
- LPT rewards sharing: some pools share portion; ask pool operator.
- AI inference pools: AI subnet requires capability registration tied to Orchestrator node. As of early 2026, publicly documented pools primarily handle video transcoding. AI inference currently requires solo Orchestrator path.
- Multiple GPUs: yes, -nvidia 0,1,2. Pool Orchestrator sees single endpoint with higher capacity.
- vs PoW mining: earnings tied to actual segments processed, not fixed hardware-output curve. Primary variable is transcoding demand from applications.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/reports-audits/notes.md
---FRONTMATTER---
(Research notes .md file - no frontmatter)
---BODY---
Comparison of dual-mode-configuration.mdx vs orchestrator-transcoder-setup.mdx. Verdict: NOT duplicates. Dual mode: single process, single machine, video + AI combined, flags -aiWorker/-aiModels/-aiModelsDir, wallet + GPU on same machine, J2 job story. O-T split: two separate processes on separate machines, flags -orchSecret/-orchAddr, wallet isolated from GPU, J4 job story. Keep both. The dual-mode PURPOSE comment still says target is Config & Optimisation but execution plan locked to Deployment Details - Phase 3 cleanup item.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/reports-audits/setup-sources.md
---FRONTMATTER---
(Research log .md file - no frontmatter)
---BODY---
Sources for find-your-path.mdx, join-a-pool.mdx, siphon-setup.mdx. Uploaded sources: rc-alternate-setups.mdx (Navigator page, Option A/B, Mermaid diagram, Siphon GitHub link), rs-workloads.mdx (workload selection, job types table, hardware minimums, pricing models, gateway selection), x-siphon-setup.mdx (empty placeholder), orchestrator-offerings.mdx (OrchestratorInfo protobuf, capabilities_prices field), pricing-configuration.mdx (-maxPricePerUnit, per-capability AI price limits). OrchestratorSiphon repo: README confirmed clone URL, pip dependencies (web3, eth-utils, setuptools), virtualenv, Ubuntu 24.04+ --break-system-packages, systemd, interactive mode via SIGINT/SIGQUIT/SIGTSTP; config.ini confirmed all fields and defaults (lpt_threshold=100, eth_threshold=0.20, eth_minval=0.020, eth_warn=0.010, l2=https://arb1.arbitrum.io/rpc), multi-keystore support, env var override. Titan Node pool: Docker files at docker/, dashboard app.titan-node.com, ETH + LPT + LTNT earnings. go-livepeer: MaxSessions=10, OrchestratorInfo/capabilities_prices. Unverified SME items: active set top 100 (Mehrdad/Rick), Titan Node still active and accepting workers 2026, LTNT still issued, LPT distribution policy, Siphon interactive mode service URI update, -orchAddr flag validity, AI workload pools.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx
---FRONTMATTER---
title: 'Zero to First Reward'
sidebarTitle: 'Zero to Reward'
description: >-
  End-to-end tutorial: install go-livepeer, configure video transcoding, fund
  and stake LPT, activate on the Livepeer network, and claim a first LPT reward.
keywords:
  - livepeer
  - orchestrator
  - tutorial
  - reward
  - lpt
  - staking
  - activate
  - arbitrum
pageType: tutorial
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Goal: production video orchestrator on Arbitrum One, active set entry, first LPT reward. Estimated time: 4-8 hours (LPT acquisition usually takes longest). Success criteria: node on Explorer in active set, at least one reward round completed.

Prerequisites: Linux server (Ubuntu 22.04/24.04), NVIDIA GPU with CUDA 12.0+ (min driver 525.60.13), Docker + NVIDIA Container Toolkit, public static IP or hostname (port 8935 open), Arbitrum One RPC endpoint (Alchemy/Infura), ~0.01 ETH on Arbitrum One for gas, LPT on Arbitrum One (enough to stake into top 100).

Step 1 - Install go-livepeer: docker pull livepeer/go-livepeer:latest. docker volume create livepeer-data.

Step 2 - Configure: nvidia-smi -L to get GPU index. First start: docker run -d --name livepeer-orchestrator -v livepeer-data:/root/.lpData --network host --gpus all livepeer/go-livepeer:latest -network arbitrum-one-mainnet -ethUrl https://arb-mainnet.g.alchemy.com/v2/YOUR_API_KEY -orchestrator -transcoder -nvidia 0 -maxSessions 10 -pricePerUnit 1000 -serviceAddr YOUR_PUBLIC_IP:8935. On first start, go-livepeer creates Ethereum keystore and prompts for passphrase via container logs. WARNING: back up keystore to offline storage - loss = permanent loss of staked LPT. Note orchestrator Ethereum address from startup logs.

Step 3 - Fund wallet: ETH (gas, reward calls, ticket redemption, keep 0.01+ ETH) + LPT (active set = top 100 by total stake). Bridge ETH from L1 at bridge.arbitrum.io (10-15 min) or CEX. LPT from exchange. This is the waiting step.

Step 4 - Activate: docker exec -it livepeer-orchestrator livepeer_cli. Select "Invoke multi-step become an orchestrator". Prompts for: reward cut (% of LPT inflation kept, 0% attracts delegation, 100% keeps all yourself), fee cut (% of ETH fees kept), service URI (must match -serviceAddr exactly), LPT to self-delegate. Activation transaction on Arbitrum, 1-3 min confirmation. Verify: docker logs ... | grep -i "activate|active|registered". Expected: "Registered orchestrator on chain", "Transcoding on Nvidia GPU 0", "Listening for RPC on :8935", "Received Ping request".

Step 5 - Verify on Explorer: explorer.livepeer.org/orchestrators, search Ethereum address. Status shows Active after next round (~22 hours). Service URI and price per pixel should match. Active-set entry starts at next round boundary. External port test: curl -k https://YOUR_PUBLIC_IP:8935/status (any response = port open, timeout = firewall blocking 8935).

Step 6 - Claim first reward: LPT inflation distributed once per round (~22 hours). go-livepeer calls Reward() automatically by default (confirm -reward=false is NOT in command). Wait for next round (timing on Explorer). Verify: docker logs ... | grep -i "reward" → "Called Reward() for round XXXXX". Rewards accrue only in rounds where node was in active set before round started.

Reward income formula: LPT earned per round = (your total stake / network active stake) × round_issuance × 0.90 × your_reward_cut. ETH fee income separate, scales with job volume.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx
---FRONTMATTER---
title: 'AI Earning Quickstart'
sidebarTitle: 'AI Quickstart'
description: >-
  Start earning from AI inference in under 2 hours - one GPU, one warm model,
  no active set membership required.
keywords:
  - livepeer
  - orchestrator
  - ai
  - quickstart
  - tutorial
  - gpu
  - text-to-image
  - aiModels.json
pageType: tutorial
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
AI inference routing follows capability and price. A node with 24 GB GPU + warm model enters routing pool as soon as registration propagates, without waiting for active-set entry or large LPT bond. Estimated time: 1.5-2.5 hours (most is model download ~6 GB).

Prerequisites: Linux Ubuntu 22.04+, NVIDIA GPU (24 GB VRAM for diffusion, 8 GB for LLM/audio), CUDA 12.0+ (driver 525.60.13+), Docker + NVIDIA Container Toolkit (verify: docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi), Arbitrum One RPC, ~0.005 ETH for AI registration gas, 20 GB free disk.

Step 1 - Install: docker pull livepeer/go-livepeer:latest. docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi (GPU must be visible inside container). mkdir -p ~/.lpData/models && docker volume create livepeer-ai-data.

Step 2 - Create aiModels.json: Recommended starting model for 24 GB GPU: ByteDance/SDXL-Lightning (fast, 4 inference steps, ~6 GB, high demand). Check tools.livepeer.cloud/ai/network-capabilities for current demand. Create: [{"pipeline":"text-to-image","model_id":"ByteDance/SDXL-Lightning","price_per_unit":4768371,"warm":true}]. price_per_unit field: 4768371 ≈ $0.0005 per megapixel at late-2025 ETH rates. warm:true = load model into VRAM at startup. Check competitive pricing before finalising - gateways skip orchestrators priced above their cap.

Step 3 - Pre-download model: docker run --rm -v ~/.lpData/models:/models --gpus all livepeer/ai-runner:latest bash -c "PIPELINE=text-to-image MODEL_ID=ByteDance/SDXL-Lightning bash /app/dl_checkpoints.sh". ~6 GB, 8-12 min on 100 Mbps. Warm model must be present at startup or AI worker attempts on-demand download.

Step 4 - Start go-livepeer with AI worker: docker run -d --name livepeer-ai-orchestrator -v ~/.lpData/:/root/.lpData/ -v /var/run/docker.sock:/var/run/docker.sock --network host --gpus all livepeer/go-livepeer:latest -network arbitrum-one-mainnet -ethUrl https://arb-mainnet.g.alchemy.com/v2/YOUR_API_KEY -orchestrator -transcoder -nvidia 0 -pricePerUnit 1000 -serviceAddr YOUR_PUBLIC_IP:8935 -aiWorker -aiModels /root/.lpData/aiModels.json -aiModelsDir /root/.lpData/models. -aiModelsDir must be HOST path (Docker mounts into AI runner containers). Watch startup: docker logs -f livepeer-ai-orchestrator 2>&1 | grep -i "ai-runner|pipeline|warm|model|container". Expected: "Starting AI worker", "Pulling livepeer/ai-runner container", "Pipeline text-to-image started", "Warm model loaded: ByteDance/SDXL-Lightning" (2-5 min). Missing after 10 min: check errors.

Step 5 - Register AI capabilities: existing video orchestrators keep current on-chain registration. New AI-only nodes: docker exec -it livepeer-ai-orchestrator livepeer_cli → "Invoke multi-step become an orchestrator". Minimal LPT self-delegation sufficient for AI-only (active set threshold applies to video routing, not AI). Verify local: curl http://localhost:7935/getNetworkCapabilities | python3 -m json.tool → pipelines array with text-to-image. Verify external: tools.livepeer.cloud/ai/network-capabilities → node appears with Warm status within 2-5 min. Missing after 10 min: docker ps --filter name=livepeer (livepeer-ai-orchestrator AND ai-runner container both should show Up, restarting AI runner = model load failure).

Step 6 - Test local inference: curl -X POST http://localhost:8935/text-to-image -H "Content-Type: application/json" -d '{"model_id":"ByteDance/SDXL-Lightning","prompt":"a blue mountain lake at sunrise","width":512,"height":512,"num_inference_steps":4}' -o test-output.png. Expected: "test-output.png: PNG image data" with non-zero size. First inference slower (CUDA kernel warm-up). From second request: SDXL-Lightning at 512x512 should complete in under 5 seconds.

What happened: go-livepeer read aiModels.json, pulled livepeer/ai-runner container, mounted model weights, loaded SDXL-Lightning as warm model. Capability advertisement registered text-to-image pipeline and warm model status on-chain via AI Service Registry. Earning begins when gateway routes a job - each completed job sends PM ticket worth approximately price_per_unit × pixels_in_output wei. AI routing ignores active-set rank - checks capability advertisement and price instead. New node with warm model + competitive price starts receiving AI jobs same day it registers.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx
---FRONTMATTER---
title: 'Add AI to a Video Node'
sidebarTitle: 'Add AI to Video'
description: >-
  Add AI inference to an existing video orchestrator. Covers the exact
  configuration delta, VRAM headroom check, and dual earnings verification.
keywords:
  - livepeer
  - orchestrator
  - ai
  - video
  - dual mode
  - tutorial
  - aiWorker
  - VRAM
pageType: tutorial
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Adding AI to a running video orchestrator is an additive change. On-chain registration, staking, reward calling, and all transcoding flags stay unchanged. Three new flags and one new file are all that change. Estimated time: 1 hour plus model download (6-10 GB).

Prerequisites: working video orchestrator on Arbitrum One mainnet. Fresh nodes should start with Zero to First Reward.

What changes/stays the same: On-chain registration (unchanged), staking/LPT bond (unchanged), reward cut and fee cut (unchanged), -pricePerUnit video (unchanged), -serviceAddr same port 8935 (unchanged), -maxSessions video (unchanged). NEW: -aiWorker flag, -aiModels flag, -aiModelsDir flag, aiModels.json file, Docker socket mount (required for AI runner containers).

VRAM headroom check while video node is running: nvidia-smi --query-gpu=name,memory.total,memory.free,memory.used --format=csv,noheader,nounits. Example: RTX 4090 → 24564 total, 22100 free, 2464 used. Choose model that fits with 2 GB headroom.

VRAM table: 24 GB (RTX 4090/A10G) - text-to-image, image-to-image, image-to-video, audio-to-text warm; 16 GB (RTX 4080/A10) - text-to-image SDXL-Lightning warm + audio-to-text warm; 12 GB (RTX 4070 Ti/3080) - audio-to-text warm, image-to-text warm, llm via Ollama; 8 GB (RTX 3070/2070) - audio-to-text warm, image-to-text warm, llm via Ollama 8B quantised.

Step 1 - Download model weights: docker run --rm -v ~/.lpData/models:/models --gpus all livepeer/ai-runner:latest bash -c "PIPELINE=text-to-image MODEL_ID=ByteDance/SDXL-Lightning bash /app/dl_checkpoints.sh". Must download before restarting node. Verify: ls -lh ~/.lpData/models/

Step 2 - Create aiModels.json: cat > ~/.lpData/aiModels.json << 'EOF'
[{"pipeline":"text-to-image","model_id":"ByteDance/SDXL-Lightning","price_per_unit":4768371,"warm":true}]
EOF. Set price_per_unit from tools.livepeer.cloud/ai/network-capabilities current market rates.

Step 3 - Add AI flags to start command: docker stop livepeer-orchestrator && docker rm livepeer-orchestrator. Restart with same video flags plus: -v /var/run/docker.sock:/var/run/docker.sock -aiWorker -aiModels /root/.lpData/aiModels.json -aiModelsDir /root/.lpData/models (use HOST path for -aiModelsDir).

Step 4 - Verify both workloads (5 sub-steps):
1. docker logs livepeer-orchestrator 2>&1 | grep -E "GPU|pipeline|warm|Transcoding|error" | head -20. Expected: "Transcoding on Nvidia GPU 0", "Starting AI worker", "Pipeline text-to-image started", "Warm model loaded: ByteDance/SDXL-Lightning"
2. curl -k https://YOUR_PUBLIC_IP:8935/status → JSON with transcoding capabilities
3. curl http://localhost:7935/getNetworkCapabilities → pipelines array includes text-to-image
4. tools.livepeer.cloud/ai/network-capabilities → text-to-image with Warm status within 2-5 min; if missing: docker ps --filter name=livepeer, docker logs <ai-runner-container>
5. Local test: curl -X POST http://localhost:8935/text-to-image -H "Content-Type: application/json" -d '{"model_id":"ByteDance/SDXL-Lightning","prompt":"a lighthouse at sunset","width":512,"height":512,"num_inference_steps":4}' -o test-ai.png. Expected: "test-ai.png: PNG image data"

What happened: node now in dual-workload configuration. Video transcoding via NVENC/NVDEC (dedicated silicon, negligible VRAM). AI inference via CUDA compute (model weights in VRAM). Income from two sources: ETH from video transcoding (PM tickets per segment) + ETH from AI inference (PM tickets per inference job). Both streams use same wallet, same Reward() call, same on-chain registration.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx
---FRONTMATTER---
title: 'BYOC CPU Smoke Test'
sidebarTitle: 'BYOC Smoke Test'
description: >-
  Verify the Livepeer orchestrator framework works on your machine in under
  20 minutes - no GPU, no wallet, no on-chain registration required.
keywords:
  - livepeer
  - orchestrator
  - byoc
  - cpu
  - tutorial
  - smoke test
pageType: tutorial
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Smoke test: complete Livepeer gateway and orchestrator on one machine using CPU-only Docker container as BYOC pipeline. No GPU, no wallet, no on-chain registration. Estimated time: 20 minutes.

Prerequisites: Docker Engine 24+, Python 3.10+, go-livepeer binary (Linux amd64), ports 7935 and 8935 free (verify: ss -tlnp | grep -E ':7935|:8935').

Part 1 - Build CPU BYOC container: pipeline is CPU-only Python passthrough (frames in, frames out unchanged). Files created: pipeline.py (PassthroughPipeline class implementing Pipeline interface: put_video_frame, get_processed_video_frame, update_params, stop, prepare_models), main.py (PipelineSpec with name="passthrough-cpu"), Dockerfile (FROM livepeer/ai-runner:live-base, ENV HF_HUB_OFFLINE=1). docker build -t byoc-cpu-passthrough:latest .

Part 2 - Start orchestrator: install go-livepeer binary. Start BYOC container first: docker run -d --name byoc-cpu-passthrough --network host -p 8000:8000 byoc-cpu-passthrough:latest. Then orchestrator: ./livepeer -orchestrator -serviceAddr 0.0.0.0:8935 -cliAddr 127.0.0.1:7935 -byoc -byocContainerURL http://localhost:8000 -byocModelID passthrough-cpu -pricePerUnit 1 -network offchain -datadir ./data-orchestrator. Expected logs: "Orchestrator registered with service address 0.0.0.0:8935", "BYOC capability registered: passthrough-cpu".

Part 3 - Start gateway: ./livepeer -gateway -cliAddr 127.0.0.1:7936 -httpAddr 0.0.0.0:8936 -orchAddr http://localhost:8935 -remoteSignerAddr https://signer.eliteencoder.net -network offchain -datadir ./data-gateway. Community remote signer at signer.eliteencoder.net handles payment operations. Verify: curl http://localhost:8936/health → {"status":"ok"}. curl http://localhost:7936/registeredOrchestrators → JSON array with orchestrator at localhost:8935.

Part 4 - Send test job: curl -X POST http://localhost:8936/live/video-to-video -H "Content-Type: application/octet-stream" --data-binary @/dev/urandom --max-time 10 -o response.bin. Non-zero response.bin = full roundtrip completed. Gateway logs: "Calling remote signer: getOrchInfoSig", "Calling remote signer: signTicket". Orchestrator logs: "Received BYOC job: passthrough-cpu", "Job complete".

What happened: 3 processes handled complete job lifecycle. BYOC container registered as passthrough-cpu at :8000. Orchestrator off-chain registered BYOC capability, listened for jobs at :8935. Gateway off-chain connected to community remote signer for payment ticket signing, pointed at local orchestrator. Test request: gateway (:8936) → orchestrator (:8935, PM ticket via remote signer) → BYOC container → result back through chain. Off-chain has no on-chain settlement; production orchestrators submit winning tickets to Arbitrum TicketBroker.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx
---FRONTMATTER---
title: 'Full AI Pipeline Tutorial'
sidebarTitle: 'Full AI Pipeline'
description: >-
  End-to-end tutorial: gateway routes an inference request to an orchestrator,
  the AI runner processes it, and the result returns through the full pipeline.
  Covers off-chain local setup with a HuggingFace model.
keywords:
  - livepeer
  - orchestrator
  - gateway
  - ai pipeline
  - huggingface
  - tutorial
  - end-to-end
pageType: tutorial
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Complete local AI inference pipeline: gateway receives request → routes to local orchestrator → orchestrator processes through AI runner container → result returns to caller. Both on one machine, off-chain. Estimated time: 2-3 hours (mostly model download).

Architecture: Client (curl) → POST /text-to-image → Gateway (port 8936) → routes job + PM ticket → Orchestrator (port 8935) → dispatches to AI runner → AI runner container (SDXL-Lightning inference on GPU) → Orchestrator → result + ticket evaluation → Gateway → PNG response → Client.

Prerequisites: Linux with NVIDIA GPU (24 GB VRAM), Docker + NVIDIA Container Toolkit, go-livepeer Docker image (docker pull livepeer/go-livepeer:latest), ports 7935/7936/8935/8936 free, 20 GB free disk. No ETH wallet, Arbitrum RPC, or on-chain registration required.

Step 1 - Download model: mkdir -p ~/.lpData/models ~/.lpData-gateway. docker run --rm -v ~/.lpData/models:/models --gpus all livepeer/ai-runner:latest bash -c "PIPELINE=text-to-image MODEL_ID=ByteDance/SDXL-Lightning bash /app/dl_checkpoints.sh". ~6 GB. ls -lh ~/.lpData/models/ to verify.

Step 2 - Write aiModels.json: [{"pipeline":"text-to-image","model_id":"ByteDance/SDXL-Lightning","price_per_unit":4768371,"warm":true}]. price_per_unit is sell-side; gateway buy-side cap must be at or above for job to route.

Step 3 - Start orchestrator (off-chain): docker run -d --name livepeer-orchestrator -v ~/.lpData/:/root/.lpData/ -v /var/run/docker.sock:/var/run/docker.sock --network host --gpus all livepeer/go-livepeer:latest -orchestrator -transcoder -nvidia 0 -pricePerUnit 1000 -serviceAddr 127.0.0.1:8935 -cliAddr 127.0.0.1:7935 -network offchain -aiWorker -aiModels /root/.lpData/aiModels.json -aiModelsDir /root/.lpData/models. Wait for warm model (2-5 min): docker logs -f livepeer-orchestrator 2>&1 | grep -i "warm|pipeline|ai-runner|error". Expected: "Starting AI worker", "Pipeline text-to-image started", "Warm model loaded: ByteDance/SDXL-Lightning". Verify: curl http://localhost:7935/registeredOrchestrators → JSON array with orchestrator at 127.0.0.1:8935.

Step 4 - Start gateway (off-chain): docker run -d --name livepeer-gateway -v ~/.lpData-gateway/:/root/.lpData/ --network host livepeer/go-livepeer:latest -gateway -cliAddr 127.0.0.1:7936 -httpAddr 0.0.0.0:8936 -orchAddr http://127.0.0.1:8935 -httpIngest -remoteSignerAddr https://signer.eliteencoder.net -network offchain. Key: -orchAddr bypasses on-chain discovery, -httpIngest enables AI inference HTTP endpoints, -remoteSignerAddr community signer. Verify: curl http://localhost:8936/health → {"status":"ok"}.

Step 5 - Send inference through gateway: curl -X POST http://localhost:8936/text-to-image -H "Content-Type: application/json" -d '{"model_id":"ByteDance/SDXL-Lightning","prompt":"a coastal town in evening light, photorealistic","width":512,"height":512,"num_inference_steps":4}' -o pipeline-output.png --max-time 60. First inference 5-15 sec (VRAM kernel warm-up), subsequent 2-4 sec. Verify: file pipeline-output.png → PNG image data.

Step 6 - Trace logs: Gateway: "Routing job to orchestrator: 127.0.0.1:8935", "Calling remote signer: getOrchInfoSig", "Calling remote signer: signTicket". Orchestrator: "Received AI job: text-to-image", "Dispatching to AI runner container", "Inference complete", "Ticket received". AI runner container: find with docker ps, check logs for inference steps.

What happened: curl → gateway (:8936) → selected orchestrator (:8935) via -orchAddr → payment ticket signed by remote signer → orchestrator forwarded to AI runner via Docker-out-of-Docker → AI runner loaded SDXL-Lightning from VRAM (pre-warmed) → 4 diffusion steps → PNG returned → orchestrator evaluated ticket (off-chain = remote signer instead of Arbitrum TicketBroker) → gateway returned PNG to curl. In production: orchestrator registered on-chain, gateway discovers via Livepeer protocol, tickets settle on Arbitrum TicketBroker.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx
---FRONTMATTER---
title: 'Realtime AI Tutorial'
sidebarTitle: 'Realtime AI'
description: >-
  Set up live video-to-video AI processing using ComfyStream and the Cascade
  pipeline. A video stream enters, a transformed stream exits in under 100ms
  per frame.
keywords:
  - livepeer
  - orchestrator
  - realtime ai
  - cascade
  - comfystream
  - live-video-to-video
  - tutorial
  - StreamDiffusion
pageType: tutorial
audience: orchestrator
status: current
lastVerified: '2026-03-16'
---BODY---
Sets up working live-video-to-video pipeline using Cascade architecture and ComfyStream. By end: live stream enters orchestrator, StreamDiffusion transforms each frame, output stream viewable. Estimated time: 3 hours (mostly model download 15-20 GB).

Realtime vs Batch: Batch (discrete file/prompt, result returned once, seconds per request, livepeer/ai-runner, 4-24 GB VRAM). Realtime Cascade (continuous WebRTC stream, continuous processed stream, <100ms per frame, livepeer/ai-runner:live-base, 24 GB recommended). At 30 fps, frame budget = 33 ms. StreamDiffusion: stream batching + residual CFG + stochastic similarity filtering → 30+ fps on RTX 4090.

Prerequisites: NVIDIA GPU 24 GB VRAM (RTX 4090 strongly recommended; RTX 3090 functional with less headroom; A100/H100 for production multi-stream; below 24 GB typically insufficient), CUDA 12.0+ (driver 525.60.13+), Docker + NVIDIA Container Toolkit, go-livepeer running with -aiWorker, 30 GB free disk, ffmpeg (apt-get install ffmpeg), CPU 8+ cores (WebRTC frame encode/decode is CPU-bound). Warning: RTX 3080 10 GB and RTX 3060 12 GB are typically insufficient.

Step 1 - Verify GPU: nvidia-smi (note name, VRAM, driver). docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi.

Step 2 - Pull live-base image: docker pull livepeer/ai-runner:live-base. Includes ComfyStream, ComfyUI, StreamDiffusion dependencies (separate from standard livepeer/ai-runner batch image). Verify CUDA: docker run --gpus all --rm livepeer/ai-runner:live-base python -c "import torch; print(f'CUDA available: {torch.cuda.is_available()}, GPU: {torch.cuda.get_device_name(0)}')" → "CUDA available: True".

Step 3 - Download ComfyStream models: git clone https://github.com/livepeer/comfystream && cd comfystream && pip install -r requirements.txt && python scripts/download_models.py. ~15-20 GB. ls -lh ~/.lpData/models/ to verify.

Step 4 - Configure aiModels.json for live pipeline: [{"pipeline":"live-video-to-video","model_id":"streamdiffusion","price_per_unit":500,"warm":true}]. model_id names the ComfyUI workflow. price_per_unit for live pipeline is charged per frame (not per pixel like batch). Set at or below gateway caps for live-video-to-video. Check tools.livepeer.cloud.

Step 5 - Start go-livepeer with live AI flags: same Docker command as standard AI node (includes -aiWorker, -aiModels, -aiModelsDir). Add -v 6 for verbose logging. Warm-up takes longer (5-10 min, ComfyStream loads full ComfyUI + StreamDiffusion). Expected: "Starting AI worker", "Starting live-video-to-video pipeline: streamdiffusion", "ComfyStream container started", "Warm model loaded: streamdiffusion". Check containers: docker ps | grep livepeer → livepeer-orchestrator AND AI runner container.

Step 6 - Start gateway for live routing: docker run with -gateway -rtmpAddr 0.0.0.0:1935 -httpIngest -remoteSignerAddr https://signer.eliteencoder.net -network offchain. Expected: "Gateway started on :8936", "RTMP server listening on :1935". Note: production gateway routing live AI jobs on-chain: configure -maxPricePerCapability for live-video-to-video.

Step 7 - Send test stream: ffmpeg -re -f lavfi -i "testsrc=size=512x512:rate=30" -f lavfi -i "sine=frequency=440:sample_rate=44100" -vcodec libx264 -preset ultrafast -tune zerolatency -b:v 2000k -acodec aac -f flv rtmp://localhost:1935/live/test-stream-key. Watch: docker logs -f livepeer-orchestrator 2>&1 | grep -i "frame|stream|cascade|inference". Expected: "Received live stream: test-stream-key", "Dispatching to live-video-to-video pipeline", "Processing frame 0", "Processing frame 1"...

Step 8 - Verify output: curl -o output-manifest.m3u8 http://localhost:8936/hls/test-stream-key/index.m3u8 (non-empty manifest = live pipeline processing). ffplay http://localhost:8936/hls/test-stream-key/index.m3u8 to view. Check tools.livepeer.cloud → live-video-to-video with Warm status. Latency check: docker logs ... | grep -i "frame.*ms|latency|processing time" - each frame should be <33 ms at 30 fps.

Troubleshooting: frames dropping/high latency (model too slow for fps, try reducing resolution; VRAM OOM: reduce stream_batch_size; CPU bottleneck: WebRTC is CPU-bound, monitor with htop). ComfyStream container failing: docker run --gpus all --rm livepeer/ai-runner:live-base python -c "import torch; print(torch.cuda.is_available())" → must return True.

What happened (Cascade end-to-end): ffmpeg → RTMP → gateway (:1935) → orchestrator (:8935, live-video-to-video capability match) → livepeer/ai-runner:live-base container → ComfyStream received each frame via WebRTC → StreamDiffusion workflow → processed frame emitted → orchestrator collected frames → output stream through gateway → HLS at /hls/ endpoint. Payment: live streams use interval-based model (periodic PM tickets at -livePaymentInterval, default 5 seconds) instead of per-frame settlement.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx
---FRONTMATTER---
title: 'BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain)'
sidebarTitle: 'BYOC CPU tutorial'
description: 'Run a complete Livepeer gateway and orchestrator on one machine using a CPU Docker container as a BYOC pipeline, test end-to-end with off-chain payments via a remote signer, then graduate to a production on-chain setup.'
keywords: ["livepeer", "BYOC", "gateway", "orchestrator", "CPU", "tutorial", "off-chain", "remote signer", "Docker"]
---BODY---
Complete end-to-end test of Livepeer gateway + orchestrator pipeline using BYOC with CPU-only Docker container. No GPU required.

Architecture: Gateway (port 8935, off-chain) → job request/result ↔ Orchestrator (port 7935) with BYOC Container (CPU pipeline). Gateway → signTicket → Remote Signer (external). Gateway holds no Ethereum operations; all payment signing delegated to community remote signer.

Note: BYOC vs LV2V: BYOC does not use gRPC to fetch OrchestratorInfo - discovery via HTTP capability query. Gateway's start-stream request can set allow-list/block-list of orchestrators. Well-suited to browser and CPU-only deployments.

Prerequisites: Docker Engine 24+, go-livepeer binary (latest from github.com/livepeer/go-livepeer/releases), Python 3.10+ (optional, for Python gateway SDK), free ports 7935 (orchestrator HTTP), 8935 (gateway AI API), 9090 (metrics, optional). No GPU, ETH wallet, Arbitrum RPC, or on-chain registration needed.

Part 1 - Build CPU BYOC container: same PassthroughPipeline Python code as byoc-cpu-smoke-test.mdx. Dockerfile: FROM livepeer/ai-runner:live-base, ENV HF_HUB_OFFLINE=1. docker build -t byoc-cpu-passthrough:latest .

Part 2 - Run orchestrator: install go-livepeer binary. Start BYOC container (docker run -d --name byoc-cpu-passthrough --network host -p 8000:8000 byoc-cpu-passthrough:latest). Start orchestrator: ./livepeer -orchestrator -serviceAddr 0.0.0.0:8935 -cliAddr 127.0.0.1:7935 -byoc -byocContainerURL http://localhost:8000 -byocModelID passthrough-cpu -pricePerUnit 1 -network offchain -datadir ./data-orchestrator. Flags: -byoc (BYOC mode), -byocContainerURL, -byocModelID (must match name in PipelineSpec). Logs: "Orchestrator registered with service address 0.0.0.0:8935", "BYOC capability registered: passthrough-cpu".

Part 3 - Run gateway (off-chain): ./livepeer -gateway -cliAddr 127.0.0.1:7936 -httpAddr 0.0.0.0:8935 -orchAddr http://localhost:8935 -remoteSignerAddr https://signer.eliteencoder.net -network offchain -datadir ./data-gateway. Remote signer = community-hosted (John/Elite Encoder), free ETH for testing. Logs: "Gateway started on :8935", "Connected to remote signer at https://signer.eliteencoder.net", "Registered orchestrator: localhost:8935". Verify: curl http://localhost:8935/health → {"status":"ok"}.

Part 4 - Send test job: via Python SDK (pip install git+https://github.com/j0sh/livepeer-python-gateway.git) or via curl: curl -X POST http://localhost:8935/live/video-to-video -H "Content-Type: application/octet-stream" --data-binary @/dev/urandom --max-time 10. Python SDK: GatewayClient(gateway_url="http://localhost:8935", model_id="passthrough-cpu") → start_byoc_job() → send/receive frames. Gateway logs: "Calling remote signer: getOrchInfoSig", "Calling remote signer: signTicket", "Ticket sent to orchestrator localhost:8935". Orchestrator logs: "BYOC job received: model_id=passthrough-cpu", "Forwarding to container at http://localhost:8000", "Job complete".

Part 5 - Troubleshooting: gateway cannot connect to remote signer (curl https://signer.eliteencoder.net/health, fallback: run own signer with -remoteSigner flag); orchestrator not registering BYOC capability (check container running + reachable at http://localhost:8000/health); port conflict (lsof -i :8935); gateway cannot find orchestrator (curl http://localhost:8935/getOrchestrators); BYOC container exits immediately (docker logs byoc-cpu-passthrough, common: missing live-base image or Python import error).

Part 6 - Graduate to on-chain production: acquire ETH on Arbitrum (~0.065 ETH PM deposit + ~0.03 ETH reserve), create dedicated Ethereum wallet (livepeer_cli), set up Arbitrum RPC (Alchemy/Infura), deposit PM funds on-chain via livepeer_cli menu "Deposit broadcasting funds (ETH)", register orchestrator on-chain + activate via livepeer_cli "Activate orchestrator", switch gateway to on-chain (remove -network offchain and -remoteSignerAddr, add -ethUrl). On-chain gateway: discovers orchestrators from on-chain registry, signs PM tickets directly using wallet's signing key.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx
---FRONTMATTER---
title: "Add AI: BYOC CPU Pipeline"
description: "Build a custom AI pipeline container and route jobs through your gateway — no GPU required"
status: stub
tutorial: 2-of-3
---BODY---
STUB PAGE - content to be developed. Outline: Build BYOC pipeline using PyTrickle, CPU-only passthrough (green tint/grayscale), route gateway → orchestrator → container → result, optional swap in whisper-tiny. Steps: build PyTrickle FrameProcessor, package as Docker (python:3.11-slim, not nvidia/cuda), test locally with http-trickle, wire into gateway/orchestrator. Reference files: pytrickle/async_processor_example.py green-tint, j0sh/http-trickle, v2/gateways/guides-and-resources/gateway-job-pipelines/byoc.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx
---FRONTMATTER---
title: "Go Production: On-chain, GPU, and Network Connect"
description: "Take your tested gateway live — add on-chain registration, GPU pipelines, and connect to the public network"
status: stub
tutorial: 3-of-3
---BODY---
STUB PAGE - content to be developed. Outline: three independent upgrades from off-chain localhost to live network: (1) On-chain registration (ETH staking, PM deposits, activate via activateBroadcaster), (2) GPU pipelines (switch to -nvidia 0, load real AI models), (3) Network connect (remove -orchAddr localhost, switch to network discovery). Decision matrix by persona: Persona A (AI app) - optional on-chain, yes GPU, yes network; Persona B (GaaS) - yes all three; Persona C (SDK Builder) - no/remote signer, depends GPU, yes network; Persona D (Video Operator) - yes on-chain, no GPU, yes network; Persona E (Platform Builder) - optional on-chain, yes GPU, yes network. Reference: on-chain registration page, fund-gateway page, discover-offerings page.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx
---FRONTMATTER---
title: "Your First Gateway: Off-chain Transcoding Test"
description: "Prove the gateway-orchestrator pipeline works in ~15 minutes — CPU only, no ETH, no GPU"
status: stub
tutorial: 1-of-3
---BODY---
STUB PAGE - content to be developed. Outline: local gateway → orchestrator pipeline that transcodes a test video stream, proves full job lifecycle, 15 minutes single machine zero cost. Steps: start local orchestrator (go-livepeer -orchestrator -transcoder -network offchain -serviceAddr 127.0.0.1:8936, no -nvidia = CPU), start gateway (-gateway -network offchain -orchAddr 127.0.0.1:8936), send test stream (ffmpeg -re -f lavfi -i "testsrc=duration=30:size=1280x720:rate=30" -c:v libx264 -f flv rtmp://127.0.0.1:1935/test), verify HLS output at gateway HTTP port. Concepts: session, segment, ticket (even in offchain mode). Reference: content-brief-gwd-offchain-quickstart.md, go-livepeer CLI reference.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/faq.mdx
---FRONTMATTER---
title: FAQ and Troubleshooting
sidebarTitle: FAQ
description: Answers to common orchestrator questions and step-by-step fixes for the most frequent errors — installation, networking, job routing, AI pipelines, and earnings.
keywords: [livepeer, orchestrator, troubleshooting, FAQ, not receiving jobs, GPU, serviceAddr, pricePerUnit, AI runner, earnings]
pageType: reference
audience: orchestrator
lastVerified: 2026-03-17
purpose: faq
status: review
---BODY---
This page covers the most common errors orchestrators encounter and answers the questions that come up most often. Find your symptom or question in the relevant section.

## Troubleshooting — Installation and GPU Detection

GPU not detected (-nvidia flag returns no devices): Driver below minimum; fix by updating driver (nvidia-driver-<version>) and installing NVIDIA Container Toolkit for Docker (docker run --gpus all nvidia/cuda:12.0-base nvidia-smi). Use -nvidia 0 or -nvidia all.

OrchestratorCapped error: Session limit reached via -maxSessions or hardware NVENC limit. Increase -maxSessions via livepeer_cli or startup flag. Consumer GPU NVENC limit varies by model (3-5 for RTX series).

Binary not found: chmod +x livepeer livepeer_cli; sudo mv livepeer livepeer_cli /usr/local/bin/. Verify with livepeer --version.

CUDA mismatch: Check nvcc --version vs go-livepeer release notes. Use official Docker image which bundles correct CUDA.

## Troubleshooting — Networking and Connectivity

"Service address did not match discovered address": On-chain registered address differs from current IP. Update via livepeer_cli (costs gas) or pass -serviceAddr at startup. Use domain name instead of bare IP to avoid repeat on-chain updates.

Port 8935 not reachable: sudo ufw allow 8935/tcp; configure router port forwarding or cloud security group. Verify with curl -k https://YOUR_PUBLIC_IP:8935/status.

Arbitrum RPC connection failing: Verify -ethUrl is Arbitrum One (not Ethereum L1). Test with curl POST eth_chainId expecting 0xa4b1. Free-tier rate limits hit by active orchestrators.

## Troubleshooting — Not Receiving Jobs

Not in active set (top 100 by stake): Check Explorer 100th orchestrator stake. Self-delegate more LPT or attract delegators. Re-activate via livepeer_cli multi-step "become an orchestrator" option.

pricePerUnit too high: Check livepeer.tools for market rates. -pricePerUnit is in wei per pixel not ETH. Update via livepeer_cli or restart (typical: few hundred to few thousand wei/pixel).

Node not activated via livepeer_cli: Activation requires one-time on-chain transaction. livepeer_cli → "Invoke multi-step become an orchestrator". Set reward cut, fee cut, pricePerUnit, serviceAddr, LPT stake amount. Each step = on-chain tx, costs ETH gas.

serviceAddr not externally reachable after activation: IP changed or firewall rule added. Update on-chain service URI (costs gas).

## Troubleshooting — AI Pipeline Errors

AI Runner container not starting: Verify docker run --gpus all; install NVIDIA Container Toolkit; check docker logs <container>. OOM → use smaller model or higher-VRAM GPU. Port conflict → change host port in docker run and update url field in aiModels.json.

aiModels.json errors: Required fields per entry: pipeline, model_id, warm, price_per_unit, pixels_per_unit. For external containers add url field. Validate with curl http://localhost:8000/health. Restart go-livepeer after changes (no hot-reload).

Model fails to load (VRAM/memory errors): Check nvidia-smi. Multiple warm models = additive VRAM. Set some to "warm": false. Use DEEPCACHE or SFAST optimization_flags (not together; DEEPCACHE not for Lightning/Turbo variants).

AI jobs routed to wrong pipeline/model: model_id must exactly match Hugging Face IDs in Livepeer-verified model list. Verify via curl -k https://YOUR_IP:8935/status.

## Troubleshooting — Earnings and Payments

Earnings not appearing in Explorer: Up to 24h indexing delay. Staking rewards require reward call each round. Verify correct network (Arbitrum One, not testnet).

Reward call not being made: Split O+T: add -reward=false to transcoder, remove -ethUrl from transcoder. Ensure Arbitrum ETH balance for gas.

Pool worker earnings not showing: Pool earnings tracked and distributed by pool operator — check their dashboard.

## FAQ — General Questions

Orchestrator vs transcoder: Orchestrator = on-chain participant (stake, registry, job routing, reward calls). Transcoder = compute process (GPU encoding/inference, no on-chain identity). Typically run together; advanced: separate processes.

livepeer_cli after activation: No. livepeer_cli is for one-time on-chain actions. The livepeer daemon must keep running.

Time to appear in active set: After activation tx confirmed, eligible at next round start (~22-24 hours). Requires top-100 stake threshold.

Minimum LPT stake: No fixed minimum — dynamic based on 100th orchestrator's stake. Check Explorer.

Windows support: Video transcoding yes; AI pipelines require Linux.

"Transcode loop timed out" / "Segment loop timed out": Normal — stream ended or gateway disconnected. Not an error.

"ticket parameters" error: Gateway sent ticket with stale parameters. Usually transient — check Arbitrum RPC if persistent.

Home network: Port forwarding required for 8935. Dynamic IP → use dynamic DNS hostname. Upload bandwidth limits concurrent sessions. VPS recommended for production.

Still stuck: Discord #orchestrating (discord.gg/livepeer), Livepeer Forum transcoding category, GitHub Issues for confirmed bugs.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/glossary.mdx
---FRONTMATTER---
title: Orchestrator Terminology Glossary
sidebarTitle: Glossary
description: Terminology and concept definitions for Livepeer orchestrators - deployment axes, node modes, staking terms, and key infrastructure concepts.
audience: orchestrator
pageType: glossary
purpose: reference
status: current
lastVerified: 2026-03-16
keywords: [livepeer, orchestrator glossary, dual mode, node mode, deployment type, active set, reward call, terminology]
---BODY---
## Deployment

A deployment is defined by three independent axes:
- Node mode (Video/AI/Dual): what workloads the orchestrator processes
- Deployment type (Solo/Pool node/Pool operator/O-T split/Siphon): how infrastructure is organised
- Scale (Single GPU/Multi-GPU/Fleet): hardware scope and operational complexity

## Node Mode

Video: -orchestrator, -transcoder flags. Any NVIDIA GPU with NVENC. Video transcoding only.
AI: -orchestrator, -transcoder, -aiWorker, -aiModels flags. NVIDIA GPU with sufficient VRAM. AI inference only.
Dual: All video + AI flags combined. Both workloads from single orchestrator process. Most common production config for 24 GB+ VRAM GPUs.

Dual Mode notes: Not a separate protocol mode — same binary, additive flag configuration. Also called "combined mode" (deprecated, ambiguous) and "hybrid" (informal). Canonical term: dual mode.

## Deployment Type

Solo operator: Single operator, full control, full responsibility, full earnings. Standard for most operators. LPT: active set threshold for video; minimal for AI-only.
Pool node: go-livepeer in transcoder mode, connected to pool operator's orchestrator. No LPT required.
Pool operator: Orchestrator accepting external workers. Manages on-chain ops, distributes earnings. LPT: active set threshold + buffer.
O-T split: Separate orchestrator and transcoder processes (typically different machines). Security isolation, multi-GPU scaling. LPT: active set threshold on orchestrator.
Siphon: Lightweight transcoder connecting to remote orchestrator. No LPT required.

Deployment type is independent of node mode. Any combination is valid.

## Protocol Terms

Active set: Top 100 orchestrators by total bonded stake eligible for video transcoding work per round. AI inference does not require active set — uses capability and price routing.
Round: ~22 hours (5760 Ethereum L1 blocks). Active orchestrators call Reward() each round.
Reward call: On-chain transaction minting LPT for that round. Missing forfeits permanently. Gas ~$0.01-0.12 on Arbitrum.
Reward cut: % inflation rewards orchestrator keeps; remainder to delegators.
Fee cut: % ETH service fees orchestrator keeps; set independently from reward cut.
Stake (self-stake): LPT bonded directly by orchestrator to its own address.
Delegated stake: LPT bonded by delegators to orchestrator.
Activation/deactivation: On-chain transaction registering/unregistering orchestrator.
Service URI: Public URL advertised on-chain. Format: https://your-domain:8935.

## Operational Terms

Orchestrator (process): go-livepeer with -orchestrator flag. Protocol interaction, job routing, payment negotiation, capability advertisement.
Transcoder (process): go-livepeer with -transcoder flag. Actual GPU compute work.
AI worker / AI runner: Container executing AI inference jobs via HTTP. Configured via aiModels.json and -aiWorker/-aiModels flags.
Session: Logical connection gateway-orchestrator for a job. -maxSessions limits concurrent sessions.
Segment: Short video chunk (~2 seconds). Unit of work for video transcoding.
Capability: Specific workload type. Video capabilities implicit (NVENC). AI capabilities explicit — registered per pipeline/model via aiModels.json.
Warm/cold model: Warm = loaded in VRAM, ready immediately. Cold = loaded from disk on first request (seconds to minutes latency).
Pipeline: AI workload type: text-to-image, image-to-image, image-to-video, audio-to-text, LLM, live-video-to-video.
BYOC: Custom AI inference containers conforming to Livepeer AI worker API spec.
Pool: Shared infrastructure — pool operator runs orchestrator, multiple workers provide GPU compute.

## Economic Terms

PM ticket (probabilistic micropayment): Lottery tickets from gateways. Most non-winning; winning tickets redeemable on-chain for ETH. Expected value = fair payment.
Ticket redemption: On-chain redemption of winning ticket via Arbitrum TicketBroker. Costs gas.
pricePerUnit: Flag -pricePerUnit sets transcoding price in wei per pixel.
pricePerGateway: Per-gateway-address pricing for commercial relationships.
autoAdjustPrice: Dynamic price adjustment based on session utilisation.
Inflation rewards: Newly minted LPT per round. Proportional to bonded stake. Requires Reward() call.
Service fees: ETH earned from actual jobs. Paid via PM tickets.
Earnings: Combined inflation rewards (LPT) + service fees (ETH). Split with delegators per reward/fee cut settings.

## Deprecated Terms

Broadcaster (deprecated): Pre-2023 name for gateway. livepeer_cli still displays "BROADCASTER STATS".
Combined mode (ambiguous — avoid): Use "single-process deployment" for O+T architecture; "dual mode" for workloads.
Hybrid (informal — use Dual Mode): Community shorthand for video+AI.
Pool worker (renamed — use Pool Node): Earlier v2 term. go-livepeer flag is -transcoder in all cases.

## Operational Mode Asymmetry: Gateways vs Orchestrators

Off-chain gateway: Viable production config using remote signer. No ETH wallet, no staking, no blockchain interaction.
Off-chain orchestrator: Testing/development only. No protocol discoverability, no inflation rewards, no active set.

On-chain requirements — Gateway: ETH deposit + reserve on Arbitrum. No LPT staking. No active set. No reward calling.
On-chain requirements — Orchestrator: LPT stake (active set threshold for video). arbETH for gas. On-chain activation. Reward calling each round. Service URI registration.

This asymmetry means gateway documentation needs genuine on-chain/off-chain fork; orchestrator documentation does not (off-chain = testing only).
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/gpu-support.mdx
---FRONTMATTER---
title: GPU Support Matrix
sidebarTitle: GPU Support
description: NVIDIA GPU compatibility, NVENC/NVDEC session limits, driver requirements, and CUDA versions for Livepeer orchestrators.
keywords: [livepeer, orchestrator, GPU, NVIDIA, NVENC, NVDEC, CUDA, session limits, RTX, transcoding, AI inference]
pageType: reference
audience: orchestrator
purpose: reference
status: review
lastVerified: 2026-03-13
---BODY---
Livepeer orchestrators use NVIDIA GPUs for video transcoding (NVENC/NVDEC) and AI inference (CUDA/Tensor cores). AMD and Intel GPUs not supported.

## Supported GPU Families

GeForce RTX 40xx (Ada Lovelace): Transcoding yes, AI yes. Best consumer option. AV1 encode support.
GeForce RTX 30xx (Ampere): Transcoding yes, AI yes. Widely used. Good price-performance.
GeForce RTX 20xx (Turing): Transcoding yes, AI yes. Supported but older.
GeForce GTX 16xx (Turing): Transcoding yes, AI limited. No Tensor cores.
GeForce GTX 10xx (Pascal): Transcoding yes, AI limited. Legacy. NVENC Gen 6. No Tensor cores.
Tesla T4: Transcoding yes, AI yes. Data centre, 16 GB VRAM. Common in cloud.
Tesla V100: Transcoding yes, AI yes. Data centre, 16/32 GB VRAM.
A100: Transcoding yes, AI yes. Data centre, 40/80 GB VRAM. Highest throughput.
A10 / A10G: Transcoding yes, AI yes. Cloud-optimised (AWS G5 etc.), 24 GB VRAM.
L4: Transcoding yes, AI yes. Ada Lovelace data centre, 24 GB VRAM.
L40 / L40S: Transcoding yes, AI yes. 48 GB VRAM. High-end AI and transcoding.
H100: Transcoding works but overkill, AI yes. 80 GB VRAM. Primarily for LLM and large model inference.

## NVENC Session Limits

Consumer NVIDIA GPUs enforce hard limit on concurrent NVENC encoding sessions.

GTX 10xx: 2 (can be patched)
GTX 16xx: 3 (can be patched)
RTX 20xx: 3 (can be patched)
RTX 30xx: 3-5 varies by model (can be patched)
RTX 40xx: 3-8 varies by model (can be patched)
Tesla/Quadro/A-series: Unlimited (no session limit on professional and data centre cards)

Removing session limit: community-maintained nvidia-patch (github.com/keylase/nvidia-patch). Widely used by orchestrators and pool operators (Titan Node uses this). Must re-apply after driver updates. Not officially supported by NVIDIA.

## CUDA and Driver Requirements

NVIDIA Driver minimum: 525+
CUDA Toolkit minimum: 12.0+
NVIDIA Container Toolkit: Latest (required for Docker-based deployments)

Check versions: nvidia-smi, nvcc --version, docker run --gpus all nvidia/cuda:12.0-base nvidia-smi

## VRAM Requirements by Workload

Video transcoding only: min 4 GB, recommended 8 GB. NVENC/NVDEC uses minimal VRAM.
Batch AI (single warm model): min 8 GB, recommended 16 GB. SDXL needs ~7 GB.
Batch AI (multiple warm models): min 16 GB, recommended 24 GB+. Each warm model consumes VRAM simultaneously.
LLM inference (quantised): min 8 GB, recommended 16 GB. Via Ollama runner with quantised weights.
LLM inference (full precision): min 24 GB+, recommended 48 GB+.
Real-time AI (ComfyStream): min 12 GB, recommended 16 GB+. Latency-sensitive — VRAM headroom improves stability.

## GPU Selection Guidance

Transcoding only: Any supported NVIDIA GPU. RTX 3060 12GB or RTX 4060 Ti 16GB efficient. GTX 1660 Super budget pick (6 GB).
Transcoding + AI: 16 GB VRAM minimum. RTX 4070 Ti Super (16 GB) or RTX 3090 (24 GB) common. RTX 3090 24 GB best value (widely available used, high VRAM, strong community track record).
AI-Heavy/LLM: 24 GB+ VRAM. RTX 4090 (24 GB) or A100/L40S in data centre.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/community-pools.mdx
---FRONTMATTER---
title: Community Orchestrator Pools
description: Compare community orchestrator pools, how they work, and what to review before joining one.
pageType: reference
audience: orchestrator
lastVerified: 2026-03-17
purpose: reference
status: review
sidebarTitle: Community Pools
keywords: [livepeer, orchestrators, orchestrator pools, pools]
---BODY---
Stub/placeholder page. Note: not reviewed or endorsed by Livepeer team. Community effort to help GPU providers find pools. Uses automation to pull data from Google Sheet. Placeholder Pool Name card visible. Cross-refs: Deployment Details > Join a Pool, Advanced Operations > Run a Pool.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/arbitrum-exchanges.mdx
---FRONTMATTER---
title: Arbitrum Exchanges
sidebarTitle: Exchanges & Bridges
description: Where to acquire ETH (for gas) and LPT (for staking) on Arbitrum One — exchanges, bridges, and DEXs for Livepeer orchestrators.
keywords: [livepeer, orchestrator, arbitrum, exchanges, LPT, ETH, bridge, Uniswap, staking]
pageType: reference
audience: orchestrator
purpose: reference
status: review
lastVerified: 2026-03-13
---BODY---
Orchestrators need two tokens on Arbitrum One: ETH (gas for reward calls, ticket redemption, service registration, staking transactions) and LPT (staking to enter active orchestrator set).

## ETH on Arbitrum

Getting ETH to Arbitrum:
- Arbitrum Bridge (bridge.arbitrum.io): Official bridge. L1→L2 ~10 min, L2→L1 ~7 days.
- Hop Protocol (hop.exchange): Cross-chain bridge. Faster L2→L1 (minutes).
- Stargate (stargate.finance): Cross-chain via LayerZero.
- Direct CEX withdrawal: Binance, Coinbase, Kraken, OKX support direct Arbitrum One withdrawal.

## LPT on Arbitrum

Acquiring LPT:
- Uniswap (Arbitrum) (app.uniswap.org/swap?chain=arbitrum): Primary DEX for LPT/ETH. Deepest liquidity.
- Arbitrum Bridge: Bridge LPT from Ethereum L1 if already held there.
- CEXs: Some list LPT — check whether they support Arbitrum One withdrawals directly.

LPT Contract Address (Arbitrum One): 0x289ba1701C2F088cf0faf8B3705246331cB8A839
Warning: Always verify contract address before swapping. Scam tokens with similar names exist on DEXs.

## How Much Do You Need?

ETH: 0.01-0.05 ETH sufficient for weeks of operation at current Arbitrum gas prices.
LPT: Check Explorer for current 100th orchestrator stake — that is the minimum threshold. Historically ranged from few hundred to multiple thousand LPT.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/arbitrum-rpc.mdx
---FRONTMATTER---
title: Arbitrum RPCs
sidebarTitle: Arbitrum RPCs
description: Arbitrum One RPC endpoint options for Livepeer orchestrators — provider comparison, rate limits, and configuration.
keywords: [livepeer, orchestrator, arbitrum, RPC, ethUrl, Alchemy, Infura, Ankr]
pageType: reference
audience: orchestrator
purpose: reference
status: review
lastVerified: 2026-03-13
---BODY---
Orchestrators require Arbitrum One RPC endpoint for staking, reward calls, ticket redemption, service registration. Configured via -ethUrl flag.

Requirements: Connect to Arbitrum One (chain ID 42161 / 0xa4b1 — not Ethereum L1). Support eth_call, eth_sendRawTransaction, eth_getBlockByNumber, eth_getLogs. Handle request volume — active orchestrators may exceed free-tier limits.

## Provider Options

Alchemy: Free tier yes. Rate limit 300 CU/s (~100 req/s). Most commonly used by orchestrators. Arbitrum One native support.
Infura: Free tier yes. Rate limit 100k req/day. Requires separate Arbitrum add-on in dashboard.
Ankr: Free public endpoint. https://rpc.ankr.com/arbitrum. No API key needed. Shared best-effort.
QuickNode: Paid. Low-latency for high-volume orchestrators.
Chainstack: Free tier yes. Rate limit 25 req/s. Arbitrum One supported.
Public Arbitrum RPC (arb1.arbitrum.io/rpc): Free, shared rate-limited. Testing only — not recommended for production.

## Configuration

livepeer -network arbitrum-one-mainnet -ethUrl https://arb-mainnet.g.alchemy.com/v2/YOUR_API_KEY -orchestrator -transcoder ...

Verify endpoint: curl -X POST eth_chainId — expected response "result":"0xa4b1" (42161 decimal = Arbitrum One).

## Common Issues

dial tcp: connection refused → Wrong URL or provider down. Verify, test with curl, try alternate provider.
could not retrieve chain ID → Using Ethereum L1 endpoint instead of Arbitrum. Switch to Arbitrum One endpoint.
context deadline exceeded → Rate-limited or slow provider. Upgrade plan or switch provider.
Reward calls failing intermittently → Free-tier rate limit hit during peak. Upgrade to paid tier or use dedicated node.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/community-guides.mdx
---FRONTMATTER---
title: Community Guides & Tutorials
sidebarTitle: Community Guides
description: Curated external tutorials, video walkthroughs, and community-maintained resources for Livepeer orchestrators — from setup through advanced operations.
keywords: [livepeer, orchestrator, community, tutorials, guides, Titan Node, Video Miner, Daydream, ComfyStream, monitoring, Prometheus, Grafana]
pageType: reference
audience: orchestrator
purpose: reference
status: review
lastVerified: 2026-03-13
---BODY---
Community-maintained guides, tutorials, and resources. Not maintained by the Livepeer Foundation — verify currency before following.

## Setup & Installation

LLM Pipeline: Deploying an Ollama-Based GPU Runner (Cloud SPE, Nov 2025): Running LLM inference on 8 GB VRAM GPUs via Ollama and aiModels.json.
Bash Script to Update Livepeer (Forum, 2021): Shell script for updating go-livepeer binaries on Linux.

## AI Workloads

ComfyStream — Real-Time AI Video (Livepeer/Daydream, github.com/livepeer/comfystream): Real-time AI video processing with ComfyUI workflows on Livepeer.
AI Inference Operations (Official docs).
Model Support Reference (Official docs).
BYOC — Bring Your Own Container (Official docs).

## Monitoring & Operations

Orchestrator Monitoring with Prometheus, Grafana and Loki (Speedy Bird, speedybird.xyz): Full monitoring and alerting stack including log analytics.
Gateway Introspection API (Official docs v1): Public Loki log queries for gateway selection visibility.
livepeer.tools (Community): Per-pixel pricing dashboard, network-wide orchestrator stats.
Livepeer Explorer (Livepeer Foundation): On-chain metrics: stake, earnings, sessions, active set ranking.
Stronk Orchestrator Tools (Stronk-Tech, github.com/stronk-tech): OrchestratorSiphon and companion monitoring tools.

## Economics & Strategy

Yield Calculation (Official docs v1): How delegators calculate ROI — the math behind attracting delegates.
Titan Node Campaign Posts (Livepeer Forum): Pool transparency reports, architecture disclosure, payout history.
Orchestrator Pricing Discussion (Discord #orchestrating): Community pricing norms and strategy discussion.

## Pool Operators & Workers

Titan Node (titannode.io): Largest community pool. Custom pool client (Windows+Linux), worker onboarding, payout dashboard.
Video Miner (videominer.org): Pool operations and GPU worker programme.
LivePool (livepool.io): Pool service with worker dashboard.
Pool Operators (Official docs): Architecture, worker connections, fee distribution.
Join a Pool (Official docs): Worker perspective for connecting GPU to existing pool.

## Video & Educational Content

Livepeer YouTube (youtube.com/@LivepeerOrg): Official video walkthroughs and protocol explainers.
Livepeer Community Streams: Recorded community calls and presentations.

## Developer & Research Resources

go-livepeer (github.com/livepeer/go-livepeer): Source code, issues, releases.
ai-worker (github.com/livepeer/ai-worker): AI Runner container source and Dockerfiles.
Livepeer Improvement Proposals (github.com/livepeer/LIPs): Protocol governance proposals and specifications.
Livepeer Subgraph (The Graph): On-chain data queries for orchestrator analytics.
Awesome Livepeer (Official docs): Curated list of Livepeer projects, tools, and resources.

Discord: discord.gg/livepeer, join #orchestrating. Forum: forum.livepeer.org/c/transcoders/7.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/x-guides.mdx
---FRONTMATTER---
title: Orchestrator Guides
description: Curated guides for running and optimising a Livepeer orchestrator — setup references, earnings strategy, community how-tos, and Discord resources.
purpose: reference
sidebarTitle: Guides
pageType: reference
audience: orchestrator
status: review
lastVerified: 2026-03-10
---BODY---
Curated index of official guides and community resources for running a Livepeer orchestrator.

Official guides (CardGroup): Join a Pool, Pool Operators, AI Pipelines, Hardware Requirements, Earning Model, Reward Mechanics, Pricing Strategy, Tools and Dashboards, CLI Flags Reference, FAQ and Troubleshooting.

Community resources (not officially reviewed): LLM Pipeline: Deploying an Ollama-Based GPU Runner (Cloud SPE, Nov 2025), Orchestrator Monitoring with Prometheus/Grafana/Loki (Speedy Bird), Bash Script to Update Livepeer (Forum 2021).

Discord: discord.gg/livepeer, #orchestrating. Forum: forum.livepeer.org/c/transcoders/7.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/x-help.mdx
---FRONTMATTER---
title: X-help
sidebarTitle: X-help
description: Describe x-help
audience: developer
lastVerified: 2026-03-17
pageType: landing
purpose: landing
status: draft
keywords: [livepeer, keyword]
---BODY---
(Empty body — draft stub page)
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/x-payments.mdx
---FRONTMATTER---
title: Orchestrator Payments
sidebarTitle: Payments
description: Payment setup guidance for Livepeer orchestrators.
keywords: [livepeer, orchestrators, payments, clearinghouse, arbitrum, eth, lpt]
pageType: overview
audience: orchestrator
lastVerified: 2026-03-17
purpose: landing
status: review
---BODY---
This section is being finalized for orchestrator-focused payment operations.

Cards: Gateway Clearinghouse Reference (/v2/gateways/guides/payments-and-pricing/clearinghouse-guide) — current clearinghouse workflow while orchestrator-specific guidance is in progress. Arbitrum Exchanges (/v2/orchestrators/resources/arbitrum-exchanges) — funding options for on-chain orchestration.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/technical/cli-flags.mdx
---FRONTMATTER---
title: CLI Flags Reference
sidebarTitle: CLI Flags
description: CLI flags and gRPC field mapping for go-livepeer orchestrators.
keywords: [livepeer, orchestrators, references, cli flags, flags, reference]
pageType: reference
audience: orchestrator
lastVerified: 2026-03-17
purpose: reference
status: review
---BODY---
## Mintlify-compatible OpenAPI (reference-only, derived from gRPC)

Warning: Documentation reference only. Generated from go-livepeer gRPC messages. Not a supported public API. Fields may change with protocol upgrades.

OpenAPI 3.0.3 spec derived from Gateway <-> Orchestrator gRPC interfaces. Server: https://{orchestrator-host} (default: orchestrator.example.com:8935).

Path: /orchestrator/info (GET) — Logical representation of OrchestratorInfo gRPC message. Gateways use this to evaluate pricing, capabilities, and routing.

OrchestratorInfo schema fields:
- transcoder (string): Public service URI reachable by Gateways
- ticket_params (TicketParams): Probabilistic payment ticket configuration
- price_info (PriceInfo): pricePerUnit (Wei), pixelsPerUnit (pricing granularity)
- address (string, hex): ETH payout address
- capabilities (Capabilities): Supported job types and codecs
- auth_token (AuthToken): Optional gateway authentication metadata
- hardware (array HardwareInformation): GPU/CPU/RAM characteristics
- storage (array OSInfo): Storage and OS characteristics
- capabilities_prices (array PriceInfo): AI model pricing

## CLI flags to proto field mapping

-serviceURI → OrchestratorInfo.transcoder (public gRPC endpoint)
-pricePerUnit → PriceInfo.pricePerUnit (base pricing)
-pixelsPerUnit → PriceInfo.pixelsPerUnit (pricing granularity)
-blockRewardCut → on-chain Orchestrator params (not part of gRPC)
-feeShare → on-chain Orchestrator params (delegator economics)
(implicit) → OrchestratorInfo.address (ETH signer/payout)
(derived) → capabilities_prices (AI model pricing)

Key point: not everything configurable is gRPC — some is purely on-chain economics.

## Capability matrix: Transcoding vs AI jobs

Gateway routing: both yes.
pricePerUnit: transcoding yes (pixels), AI no.
capabilities_prices: transcoding no, AI yes (per model).
Codec support: transcoding yes, AI no.
Model selection: transcoding no, AI yes.
GPU specs: transcoding optional, AI required.
Storage (OSInfo): transcoding minimal, AI important.
Deterministic pricing: transcoding yes, AI often variable.
Session duration: transcoding stream-based, AI job/batch based.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/technical/x-changelog.mdx
---FRONTMATTER---
title: X-changelog
sidebarTitle: X-changelog
description: Describe x-changelog
audience: developer
lastVerified: 2026-03-17
pageType: landing
purpose: landing
status: draft
keywords: [livepeer, keyword]
---BODY---
(Empty body — draft stub page)
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/technical/x-contract-addresses.mdx
---FRONTMATTER---
title: Livepeer Arbitrum Contract Addresses
sidebarTitle: Livepeer Contract Addresses
description: Description of x-contract-addresses
audience: developer
pageType: landing
purpose: landing
status: draft
lastVerified: 2026-03-11
keywords: [livepeer, keyword]
---BODY---
Draft stub. Purpose: smart contract addresses for Livepeer protocol contracts on Arbitrum. Reference for operators interacting with on-chain components. Cross-refs: Setup > Connect and Activate, Payments & Pricing > Payments (TicketBroker contract). Body content not yet written.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/technical/x-support-status.mdx
---FRONTMATTER---
title: Support Status
sidebarTitle: Support Status
description: Planned status page clarifying what is supported, experimental, deprecated, or still consolidating in orchestrator docs.
keywords: [livepeer, orchestrator, support status, experimental, deprecated, supported]
pageType: guide
audience: orchestrator
purpose: operations
status: draft
lastVerified: 2026-03-12
---BODY---
This placeholder will become the operator-facing status page for supported, experimental, and deprecated paths.

Planned scope: supported vs draft vs deprecated orchestrator paths; which AI paths are still stabilizing; which legacy pages have been carried forward under dep- paths; where to look for canonical page when older guidance still exists.

Recommended now: Review AI Inference Operations, Realtime AI Setup, Diffusion Pipeline Setup, FAQ and Troubleshooting.
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/technical/x-troubleshooting.mdx
---FRONTMATTER---
title: Troubleshooting
sidebarTitle: Troubleshooting
description: Description of troubleshooting
audience: developer
pageType: landing
purpose: landing
status: draft
lastVerified: 2026-03-11
keywords: [livepeer, keyword]
---BODY---
(Empty body — draft stub page)
---END FILE---

---FILE---
PATH: v2/orchestrators/resources/compendium/glossary.mdx
---FRONTMATTER---
title: Orchestrator Glossary
sidebarTitle: Glossary
description: Key terms for Livepeer orchestrator operators — GPU setup, AI pipelines, staking, payment mechanics, monitoring, and protocol roles.
keywords: [livepeer, glossary, orchestrators, terminology]
audience: orchestrator-operator
pageType: reference
pageVariant: compendium
purpose: reference
status: draft
lastVerified: 2026-03
---BODY---
Companion: glossary-data.json (auto-generated by pre-commit script). Mechanism: Tier 2 — Pre-commit script parses SearchTable itemsList props, extracts term data, writes glossary-data.json for crawler/AI agent indexing. CI check: fails if companion JSON is missing or stale.

Terms covering GPU setup, AI pipeline configuration, staking mechanics, payment flows, monitoring, and protocol roles for operators running Livepeer orchestrator nodes.

## SearchTable Terms (abridged — key entries)

Active Set: The top 100 orchestrators by total bonded stake eligible to receive video transcoding work in the current round. (livepeer:protocol)
AI Inference: Running a trained neural network model on new input data to produce predictions or generated outputs. (ai:concept)
AI Runner: The container process that executes AI model inference jobs; go-livepeer communicates with it via HTTP and it loads models into GPU memory to process requests. (livepeer:config)
AIServiceRegistry: Smart contract registering AI service capabilities for orchestrators on the Livepeer AI network. (livepeer:contract)
aiModels.json: JSON configuration file specifying available AI models including pipeline type, model ID, pricing, and warm status for an orchestrator node. (livepeer:config)
aiWorker: CLI flag starting a go-livepeer node as a dedicated AI worker process that connects to an orchestrator and handles AI inference jobs. (livepeer:config)
Arbitrum: A Layer 2 Optimistic Rollup settling to Ethereum, processing transactions off-chain while inheriting Ethereum-grade security. (web3:chain)
Audio-to-Text: AI pipeline converting spoken language audio into written text. (ai:pipeline)
Batch AI Inference: Running a trained model on a group of inputs asynchronously, optimising GPU utilisation through parallelisation. (ai:pipeline)
BondingManager: Core smart contract managing bonding, delegation, staking logic, and fund ownership on the Livepeer protocol. (livepeer:contract)
BYOC (Bring Your Own Container): Deployment pattern enabling orchestrators to run custom Docker containers for AI workloads alongside standard Livepeer pipelines. (livepeer:deployment)
Capability Advertisement: Mechanism by which orchestrators inform gateways of the AI services, pipelines, and models they can process. (livepeer:protocol)
Capability Matching: Process by which a gateway routes an AI task to an appropriate orchestrator based on advertised capabilities. (livepeer:protocol)
Cascade: Strategic vision for Livepeer to become the leading platform for real-time AI video pipelines, representing the current phase of protocol development. (livepeer:upgrade)
Clearinghouse: Contract or system handling settlement of payments between gateways and orchestrators. (livepeer:contract)
Cold Model / Cold Start: Latency incurred when an AI model must be loaded from storage into GPU memory before the first request, typically 5 to 90 seconds. (ai:concept)
ComfyStream: Livepeer project running ComfyUI workflows as a real-time media processing backend for live streams. (livepeer:product)
ComfyUI: Open-source node-based graphical interface for building and executing AI image and video generation workflows. (ai:framework)
CUDA: NVIDIA's parallel computing platform and programming API enabling GPUs for general-purpose processing and deep learning. (ai:framework)
Daydream: Livepeer's hosted real-time AI video platform turning live camera input into AI-transformed visuals with sub-second latency. (livepeer:product)
Delegator: LPT token holder who stakes tokens to an orchestrator to secure the network, participate in governance, and earn rewards. (livepeer:role)
Diffusion: Class of generative models that learn to produce data by reversing a gradual noising process. (ai:concept)
Dual Mode: Deployment configuration where a single orchestrator process handles both video transcoding and AI inference simultaneously. (livepeer:deployment)
ETH: Native cryptocurrency of Ethereum, used to pay gas fees and as settlement currency for orchestrator service fees. (web3:token)
Face Value: The payout amount assigned to a probabilistic micropayment ticket if it is drawn as a winner. (economic:payment)
Fee Cut: The percentage of ETH service fees that an orchestrator retains before distributing the remainder to delegators. (economic:reward)
Gateway: Node that submits jobs to the network, routes work to orchestrators, manages payment flows, and provides protocol interface for applications. (livepeer:role)
go-livepeer: Official Go implementation of the Livepeer protocol containing Broadcaster, Orchestrator, Transcoder, Gateway, and Worker roles in a single binary. (livepeer:sdk)
GPU Worker: Subprocess running AI inference on a dedicated GPU, managed by the go-livepeer orchestrator process. (livepeer:deployment)
Hard Gate: Strict filter that immediately disqualifies orchestrators failing a required criterion such as exceeding the gateway's maximum price threshold. (livepeer:config)
HLS: Streaming protocol by Apple that encodes video into multiple quality levels and delivers them via standard HTTP with M3U8 index playlist. (video:protocol)
HuggingFace: AI platform and open-source community providing model repositories, datasets, and inference APIs; primary source for AI models deployed on Livepeer. (ai:platform)
Image-to-Image: AI pipeline transforming an input image into a modified output image guided by text prompt or conditioning signal. (ai:pipeline)
Image-to-Text: AI pipeline generating textual description from an input image. (ai:pipeline)
Image-to-Video: AI pipeline generating a short video clip conditioned on a single input image. (ai:pipeline)
Inflation: Dynamic issuance of new LPT tokens each protocol round, distributed to orchestrators and delegators. (economic:reward)
LLM (Large Language Model): Neural network trained on massive text corpora to understand and generate human language. (ai:concept)
Loki: Horizontally scalable log aggregation system by Grafana Labs. (operational:monitoring)
LPT (Livepeer Token): ERC-20 governance and staking token used to coordinate, incentivise, and secure the Livepeer network. (livepeer:protocol)
Mainnet: The primary public production blockchain where actual-value transactions occur. (web3:chain)
MaxPrice: CLI flag setting the maximum transcoding price per pixelsPerUnit that a gateway will accept; orchestrators above this threshold are excluded. (livepeer:config)
Micropayment: Small-value payment represented as a signed probabilistic ticket with a chance of being a winner redeemable for ETH. (economic:payment)
Model Warmth: Status indicating whether an AI model is currently loaded in GPU memory (warm) or must be loaded from storage on demand (cold). (ai:concept)
NVDEC: NVIDIA hardware video decoder that offloads video decoding from CPU to dedicated silicon on NVIDIA GPUs. (technical:infra)
NVENC: NVIDIA hardware video encoder that offloads H.264 and H.265 encoding from CPU to dedicated silicon on NVIDIA GPUs. (technical:infra)
O-T Split: Architectural separation of Orchestrator and Transcoder processes, typically on different machines, where orchestrator handles protocol interaction and transcoder handles GPU compute. (livepeer:deployment)
Ollama: Open-source tool for running large language models locally with CLI and OpenAI-compatible REST API. (ai:model)
Orchestrator: Supply-side network node contributing GPU resources, receiving jobs from gateways, performing transcoding or AI inference, and earning rewards. (livepeer:role)
OrchestratorInfo: Data structure advertised by orchestrators containing capabilities, pricing, service URI, and metadata used by gateways for selection decisions. (livepeer:config)
orchSecret: Shared secret used to authenticate communication between orchestrator process and standalone transcoder/worker nodes in O-T split deployment. (livepeer:config)
Per Pixel (Price Per Pixel): Livepeer's unit-based pricing mechanism where fees are calculated based on the number of pixels processed. (livepeer:economics)
Per Round: The Livepeer protocol's fundamental time unit, approximately one day of Ethereum blocks. (livepeer:economics)
Performance Score: Composite metric rating orchestrator reliability and speed, calculated as latency score multiplied by success rate. (livepeer:protocol)
pixelsPerUnit: CLI parameter defining the number of pixels constituting one billable work unit. (livepeer:config)
PM (Probabilistic Micropayment): Lottery-based payment scheme where gateways send signed tickets and only winning tickets are redeemed on-chain, amortising transaction costs. (economic:payment)
Pool: Group of transcoder/worker nodes coordinated under a single orchestrator for increased capacity and redundancy. (livepeer:deployment)
Pool Operator: Entity running an orchestrator that coordinates a pool of transcoder/worker nodes, managing on-chain operations and distributing earnings to workers. (livepeer:deployment)
Pool Worker: Individual machine within an orchestrator pool, running go-livepeer in transcoder mode. Also known as Pool Node. (livepeer:deployment)
Price Feed: External data source providing real-time ETH/USD exchange rates for USD-denominated pricing. (livepeer:config)
pricePerCapability: CLI flag setting price per unit for a specific AI pipeline and model pair, overriding default pricePerUnit. (livepeer:config)
pricePerGateway: JSON configuration allowing orchestrators to set customised per-gateway-address pricing. (livepeer:config)
pricePerUnit: CLI flag setting the transcoding price in wei per pixelsPerUnit that an orchestrator advertises to gateways. (livepeer:config)
Redeemer: Service or entity submitting a winning PM ticket to the TicketBroker contract to claim its face value in ETH. (livepeer:role)
Remote Signer: External service that holds private keys securely and signs Ethereum transactions on behalf of a node. (technical:security)
Rendition: Single encoded version of a source video at specific resolution, bitrate, and codec configuration. (video:processing)
RTMP: Protocol for streaming audio, video, and data over TCP on port 1935, used as primary ingest protocol. (video:protocol)
RTX (NVIDIA RTX): NVIDIA's current consumer GPU product line featuring dedicated Tensor cores that accelerate AI/ML inference workloads. (technical:hardware)
Reward Call: On-chain transaction (Reward()) that an active orchestrator submits once per round to mint and distribute new LPT inflation rewards. (livepeer:protocol)
Reward Cut: The percentage of inflationary LPT rewards that an orchestrator keeps before distributing the remainder to delegators. (economic:reward)
RoundsManager: Smart contract tracking round progression and coordinating round-based protocol state. (livepeer:contract)
Segment: Short time-sliced chunk of a video stream (~2 seconds) representing the unit of work for video transcoding. (livepeer:protocol)
Service URI: Public URL registered on-chain that gateways use to discover and connect to an orchestrator node. (livepeer:config)
ServiceRegistry: Smart contract where orchestrators register their service URI for gateway discovery. (livepeer:contract)
Session: Active logical connection between a gateway and an orchestrator during which one or more jobs are processed. (livepeer:protocol)
Siphon: Lightweight component directing incoming work to the correct processing path; or minimal transcoder deployment connecting to remote orchestrator to expose local GPU resources. (livepeer:deployment)
Slashing: Penalty mechanism destroying a portion of an orchestrator's bonded LPT stake for protocol violations. Both self-stake and delegated stake at risk. (livepeer:protocol)
Solo Operator: Orchestrator deployment where a single operator runs a complete orchestrator node with all components on one machine, without pool workers. (livepeer:deployment)
SPE (Special Purpose Entity): Treasury-funded organisational unit with defined scope, budget, and accountability for executing ecosystem initiatives. (livepeer:entity)
Stable Diffusion: Open-source latent diffusion model for text-to-image generation. (ai:model)
Stake Weight: Orchestrator's proportional influence determined by total bonded LPT. (economic:reward)
StreamDiffusion: Optimised real-time diffusion pipeline using stream batching and stochastic similarity filtering for interactive frame rates on live video transformation. (ai:model)
Text-to-Image: AI pipeline generating an image from a natural language text prompt. (ai:pipeline)
Text-to-Speech: AI pipeline synthesising spoken audio from written text input. (ai:pipeline)
TicketBroker: Smart contract managing the probabilistic micropayment system, holding gateway funds and processing winning ticket redemptions. (livepeer:contract)
Throughput: Rate of successful data processing per unit time. (operational:monitoring)
Titan Node: Community orchestrator group in Western North America providing education, Start Up Grants, and pre-configured hardware. (livepeer:tool)
Transcoding: Direct digital-to-digital conversion of video from one encoding to another, producing multiple adaptive renditions. (video:processing)
Transcode Fail Rate: Percentage of source segments that an orchestrator fails to transcode successfully. (operational:monitoring)
Treasury: On-chain pool of LPT and ETH governed by token holder votes, used for funding public goods and ecosystem development. (economic:treasury)
Upscale / Upscaling: AI pipeline increasing image or video frame resolution using neural models. (ai:pipeline)
USD Pricing: Pricing approach where orchestrators denominate work costs in US dollars using a price feed for dynamic wei conversion. (economic:pricing)
VRAM (Video RAM): Dedicated memory on a GPU used to store AI model weights, intermediate tensors, and video frames during processing. (technical:infra)
Warm Model: AI model already loaded into GPU memory and ready to serve inference requests immediately. (ai:concept)
Webhook Discovery: Mechanism for orchestrators to dynamically advertise AI capabilities to gateways via HTTP webhook callbacks. (livepeer:protocol)
Wei: The smallest denomination of Ether, where 1 ETH equals 10^18 Wei; used in Livepeer pricing parameters. (web3:token)
Whisper: OpenAI's encoder-decoder transformer model for speech recognition and translation, pretrained on 680,000 hours of multilingual audio. (ai:model)
Win Probability: The configured likelihood that any given micropayment ticket is a winning ticket. (economic:payment)
Winning Ticket: Probabilistic payment ticket whose random outcome meets the configured threshold, entitling the holder to redeem its face value in ETH on-chain. (economic:payment)
Workload: Total amount of work assigned to an orchestrator — aggregate of active sessions, concurrent segments, and AI inference requests. (operational:process)
Yield: Return earned from staking LPT and performing work, expressed as annual percentage combining inflationary LPT rewards and ETH service fees. (economic:reward)

## Full Definitions (Livepeer Protocol Terms — AccordionGroup)

Active Set: Context: AI inference routing does not require active set membership — prioritises capability and price over stake position.
AIServiceRegistry: Context: Orchestrators optionally advertise AI pipelines/models on-chain via this contract, enabling capability-based routing.
aiModels.json: Context: Primary config file for AI orchestrators. Each entry defines pipeline, model to load, price, and warm-on-startup setting.
AI Runner: Context: Configured via aiModels.json and -aiWorker/-aiModels CLI flags. Each handles one or more pipelines on a dedicated GPU.
aiWorker: Context: Enables orchestrator to offload GPU inference work to a separate subprocess. Multiple aiWorker processes can be connected for multi-GPU setups.
BondingManager: Context: Central contract for all LPT stake operations — bonding, unbonding, delegation, reward distribution, and slash execution.
BYOC: Context: Must conform to Livepeer AI worker API specification. Used by teams deploying proprietary or experimental models.
Capability Advertisement: Context: Orchestrators broadcast capabilities on-chain via AIServiceRegistry or off-chain via webhook discovery.
Capability Matching: Context: Gateway compares requested pipeline/model against each orchestrator's advertised capabilities and selects best match based on price, performance score, and availability.
Cascade: Context: Introduced AI inference as a first-class network capability, enabling orchestrators to advertise and earn from AI workloads alongside video transcoding.
Clearinghouse: Context: Resolves PM tickets on-chain via TicketBroker contract, converting winning tickets into ETH for orchestrators.
ComfyStream: Context: Enables orchestrators to expose ComfyUI-based diffusion pipelines as live-video-to-video capabilities on the Livepeer network.
Daydream: Context: Both a Livepeer product and a showcase of AI inference on the network, demonstrating live-video-to-video pipelines for interactive creative use cases.
Delegator: Context: Do not run infrastructure. Bond LPT to orchestrator of their choice and receive proportional share of inflation rewards and service fees.
Dual Mode: Context: Most common production config for 24 GB+ VRAM hardware. Workload configuration, not a separate protocol mode.
Gateway: Context: Demand side of the Livepeer network. Receive streams or AI requests from users/applications and select orchestrators to fulfil the work.
go-livepeer: Context: Canonical node software for running any Livepeer network role. Orchestrators, gateways, and transcoders all run go-livepeer with different flag combinations.
GPU Worker: Context: In AI or dual-mode deployments, each GPU runs a dedicated AI runner subprocess. Orchestrator routes inference jobs to available GPU workers.
Hard Gate: Context: Binary — orchestrator excluded entirely if condition not met. MaxPrice is the most common hard gate in practice.
LPT: Context: Orchestrators must bond LPT to enter the active set for video transcoding work. Delegators bond LPT to orchestrators to earn rewards.
MaxPrice: Context: Acts as a hard gate in orchestrator selection. Orchestrators set pricePerUnit; gateways set MaxPrice to filter orchestrators whose prices exceed budget.
O-T Split: Context: Enables security isolation and multi-GPU scaling. Orchestrator uses -orchestrator flag; transcoder uses -transcoder. Authentication uses orchSecret shared secret.
Orchestrator: Context: Canonical Livepeer compute node. Handles protocol interaction, job routing, payment negotiation, capability advertisement. May run own transcoder subprocess or delegate to remote transcoder workers.
OrchestratorInfo: Context: Exchanged during gateway-orchestrator negotiation. Includes pricePerUnit, supported AI capabilities, ticket parameters, and service URI.
orchSecret: Context: Set via -orchSecret CLI flag on both orchestrator and transcoder. Must match exactly. Prevents unauthorised nodes from connecting as transcoders.
Performance Score: Context: Tracked per-gateway and influences routing decisions. Low score from failed transcodes or high latency reduces probability of future job selection.
pixelsPerUnit: Context: Used in conjunction with pricePerUnit. Larger pixelsPerUnit effectively lowers per-pixel price while keeping per-unit number manageable. Defaults to 1.
Pool: Context: Pool operator runs on-chain orchestrator node and handles staking, reward calling, ticket redemption. Pool workers contribute GPU compute and receive off-chain payouts.
Pool Operator: Context: Requires infrastructure reliability and community trust. Stakes LPT to active set threshold and distributes earnings to pool workers via off-chain agreements.
Pool Worker: Also known as Pool Node. Context: Do not hold LPT or interact with protocol directly. Pool operator stakes on their behalf. Connect to orchestrator using -orchAddr and -orchSecret flags.
Price Feed: Context: Orchestrators using USD pricing fetch current ETH/USD rate from price feed service to dynamically adjust wei-denominated pricePerUnit.
pricePerCapability: Context: Allows orchestrators to charge different rates for different AI pipelines based on compute intensity.
pricePerGateway: Context: Configured as JSON map from gateway Ethereum addresses to price overrides.
pricePerUnit: Context: Primary pricing parameter for video transcoding. Can be set in wei directly or with USD target using price feed.
Redeemer: Context: In production deployments, orchestrators typically run automated redeemer process that monitors for winning tickets and submits them on-chain.
Reward Call: Context: Missing a reward call permanently forfeits that round's rewards. Gas cost ~$0.01-$0.12 per call. Typically automated via cron job or dedicated service.
RoundsManager: Context: Each protocol round is approximately 22 hours (5,760 Ethereum L1 blocks). Must be initialised at the start of each round before reward calls can be submitted.
Segment: Context: Gateways split incoming live streams into segments and distribute to orchestrators. Segment-level parallelism enables distributed transcoding at scale.
Service URI: Context: Format typically https://your-domain:8935. Registered via ServiceRegistry contract. Unreachable or incorrect URI prevents gateways from routing work.
ServiceRegistry: Context: Orchestrators call ServiceRegistry when activating or updating service endpoint. Gateways query this contract to build list of reachable orchestrators.
Session: Context: Video sessions are stream-based (one per active stream); AI sessions are job-based (one per inference request or batch). -maxSessions controls maximum throughput.
Siphon: Context: Routes incoming jobs between video transcoding and AI inference paths. Can also describe minimal transcoder deployment connecting to remote orchestrator to expose local GPU resources.
Slashing: Context: Slashing conditions include failing transcoding verification, skipping required verifications, or sustained underperformance. Both self-stake and delegated stake are at risk.
Solo Operator: Context: Standard deployment for most individual orchestrators. Full control and full responsibility for staking, reward calling, ticket redemption, and compute. Can run in video, AI, or dual mode.
SPE: Context: Orchestrator-relevant SPEs include LiveInfra (infrastructure), LISAR (contributions), and AI Video SPE (compute scaling). Approved via on-chain governance.
TicketBroker: Context: Holds gateway deposits and reserves, validates winning ticket signatures, and transfers ETH to orchestrators when tickets are redeemed. On-chain settlement layer for all Livepeer service payments.
Titan Node: Context: Operates as both community resource and hardware supply partner. Pre-configured nodes lower barrier to entry for new orchestrator operators.
Treasury: Context: Funded by a governable percentage of per-round inflation (treasury reward cut rate). Orchestrators appear in treasury governance pages as stake-weighted voters.
Webhook Discovery: Context: Provides flexible, off-chain channel for capability advertisement. Gateways can call a registered webhook endpoint to retrieve orchestrator's current capability set, enabling real-time updates without on-chain transactions.

## AI Terms (AccordionGroup — partial, full file has additional AI pipeline and hardware terms)

AI Inference, Audio-to-Text, Batch AI Inference, BLIP, Cold Model/Cold Start, ComfyUI, ControlNet, CUDA, Diffusion, HuggingFace, Image-to-Image, Image-to-Text, Image-to-Video, Live-Video-to-Video, LLM, Loki, Model Warmth, NVDEC, NVENC, Ollama, PyTorch, RTX, Stable Diffusion, StreamDiffusion, Text-to-Image, Text-to-Speech, Warm Model, Whisper — all with Livepeer context, status: current, external links to Wikipedia/vendor documentation.
---END FILE---

---FILE---
PATH: v2/orchestrators/setup/s-guide.mdx
---FRONTMATTER---
title: Setting up an Orchestrator
sidebarTitle: Guide
description: What it means to run an orchestrator and a setup checklist.
keywords: [livepeer, orchestrators, setup, checklist]
pageType: overview
audience: orchestrator
purpose: overview
---BODY---
Running an orchestrator means operating a go-livepeer node that provides GPU compute (video transcoding and/or AI inference) to the Livepeer network. Earn from protocol rewards (LPT) and job fees (ETH).

Setup checklist:
1. Hardware - hardware requirements
2. Install - Install go-livepeer
3. Connect - Connect to Arbitrum
4. Configure - Configure your node
5. Run and activate - Activate on the network
6. Monitor - Orchestrator stats and monitoring

Links: hardware-requirements, install-go-livepeer, connect-to-arbitrum, orch-config, orchestrator-stats, publish-offerings
Related: About orchestrators, Join a pool, Staking LPT, Rewards and fees

Note: Older overview page; canonical setup flow now lives in setup/guide.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/setup/x-test.mdx
---FRONTMATTER---
title: Testing Your Orchestrator Setup
sidebarTitle: Test
description: Instructions for testing your orchestrator setup.
audience: developer
pageType: landing
purpose: landing
status: draft
lastVerified: 2026-03-11
keywords: [livepeer, keyword]
---BODY---
(Empty body — draft stub page)
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/reports-audits/review.md
---FRONTMATTER---
(No frontmatter — markdown notes file)
---BODY---
Working notes and analysis from deployment-details section review. Key content:

setup-options purpose clarification: Documents alternative deployment configurations (not standard single-machine combined mode). Alternatives: Pool worker (no LPT, passive earnings, just -transcoder pointing at a pool), O-T split (multi-GPU, separate control plane and data plane), Siphon (key isolation, GPU machine can go down without missing rewards), Enterprise/fleet (multi-node commercial scale).

Decision/routing function lives in Navigator; setup-options is a guide covering the four non-standard configurations.

Section coherence analysis: Deployment Details forms a clean linear flow: Setup Options (which path?) → Requirements (what do I need?) → Benchmarking (how does it perform?) → Session Limits (how many jobs?) → Join a Pool (lowest-barrier path).

Journey gaps: Siphon setup had no page in section (now resolved). AI benchmarking absent (no AI inference benchmark tool exists currently). No section landing page (setup-options serves this function).

Persona coverage: A (Miner no LPT) → join-a-pool route, B (Easy Earner) → same, C (Pro Operator adding AI) → setup-options workload section, D (Business at scale) → enterprise row, E (AI Native) → AI VRAM tiers.

Benchmarking and session-limits placement discussion: Both misplaced in Deployment Details. benchmarking.mdx belongs in Requirements (livepeer_bench essentials as section at bottom) or Monitoring & Tools. session-limits belongs in Setup > r-configure (-maxSessions is a configuration flag, not a deployment architecture decision).

Systematic fixes applied: StyledTable <thead><tbody> added, Card arrow horizontal, "Related" → "Related Pages" heading, old section paths updated, accordion icons replaced, second-person voice rewritten, sidebarTitle conflicts resolved.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/operator-considerations/review.md
---FRONTMATTER---
(No frontmatter — markdown notes file)
---BODY---
Working notes from operator-considerations section review.

Section coherence: Three pages form a clean decision arc: financial evaluation (operator-rationale) → commercial model (business-case) → mission/stewardship (protocol-influence). Each page is self-contained but links forward and back cleanly.

Persona coverage: A (Miner) → operator-rationale fully served (decision matrix, cost breakdown, decision flowchart). B (Easy Earner) → routes to join-a-pool. C (Pro Operator) → operator-rationale + business-case. D (Business) → all three pages. E (AI Native) → operator-rationale (video vs AI comparison) + business-case (capability selection accordion).

New in business-case: Hobbyist vs commercial comparison diagram, service fee vs inflation scaling explanation, -pricePerGateway flag with code example, commercial operations requirements, AccordionGroup covering capability selection/pricing discipline/infrastructure investment/monitoring.

New in protocol-influence: Governance mechanics (33.33% quorum of staked LPT + 50% of votes cast, 100 LPT poll creation cost, ~10-day polling period, Delegator override mechanic). Governance scope table (5 categories). "Stake as governance capital" section. Sovereign compute thesis (4 AccordionGroups). Practical governance participation section.

Issues fixed: Boilerplate opening in operator-rationale rewritten. Accordion icons replaced. Missing imports added. CustomDividers labelled. StyledTable with thead/tbody fixed. Cards with arrow horizontal. Stale paths updated.
---END FILE---

---FILE---
PATH: v2/orchestrators/concepts/x-deprecated/dep-architecture.mdx
---FRONTMATTER---
title: Orchestrator Architecture
sidebarTitle: Architecture
description: How orchestrators fit into the Livepeer stack — layer position, system interactions, request flow, and key components.
keywords: [livepeer, orchestrators, architecture, gateway, transcoder, AI runner, go-livepeer, Arbitrum, protocol, request flow]
pageType: concept
audience: orchestrator
status: current
lastVerified: 2026-03-13
---BODY---
DEPRECATED COPY. Canonical: v2/orchestrators/concepts/architecture.mdx.

Content summary: Three-layer architecture (Application: developers/gateways, Compute: orchestrators/transcoders/AI runners, Protocol: Arbitrum smart contracts). Orchestrators interact with all three layers. Mermaid flowchart and sequence diagram showing request flow (Application → Gateway → Orchestrator → GPU Worker → Arbitrum). Step-by-step request lifecycle: job submission, orchestrator selection, work dispatch, execution, result delivery, payment settlement, reward minting. Key components: go-livepeer (port 7935 Prometheus metrics), livepeer_cli, AI Runner container, Arbitrum smart contracts (BondingManager, RoundsManager, TicketBroker, ServiceRegistry), Livepeer Explorer. GPU worker configurations: Combined (single process, -orchestrator -transcoder), Split O/T, AI Runner.
---END FILE---

---FILE---
PATH: v2/orchestrators/concepts/x-deprecated/dep-capabilities.mdx
---FRONTMATTER---
title: Orchestrator Capabilities
sidebarTitle: Capabilities
description: What orchestrators do on the Livepeer network - transcoding, AI inference, real-time AI, LLM, and custom workloads - plus governance and delegation.
keywords: [livepeer, orchestrators, orchestrator capabilities, transcoding, AI inference, real-time AI, Cascade, ComfyStream, LLM, BYOC, GPU compute, governance, delegation]
pageType: concept
audience: orchestrator
status: current
lastVerified: 2026-03-13
---BODY---
DEPRECATED COPY. Canonical: v2/orchestrators/concepts/capabilities.mdx.

Content summary: Four workload types: Video transcoding (wei/pixel, no min VRAM), Batch AI (4-24GB, wei/pixel or per ms), Real-time AI/Cascade (8GB+, TBC pricing), LLM inference (8GB quantised, wei/token unit). Workloads per GPU tier table. Boundaries: orchestrators provide compute; gateways route/schedule/manage customer relationships. Protocol capabilities: staking, delegation, governance voting (LIPs), reward calls. GPU tier tabs (Consumer 8-12GB, Mid-range 16GB, High-end 24GB+). Example services: Daydream, Embody, video streaming, BYOC workloads.
---END FILE---

---FILE---
PATH: v2/orchestrators/concepts/x-deprecated/dep-incentive-model.mdx
---FRONTMATTER---
title: Orchestrator Economics and Incentives
sidebarTitle: Incentive Model
description: Understand how orchestrators earn revenue, what it costs to operate, the stake-for-access model, and why operators participate in the Livepeer network.
keywords: [livepeer, orchestrators, orchestrator economics, orchestrator incentives, LPT rewards, ETH fees, staking, stake-for-access, delegation, reward cut, fee cut, GPU earnings]
pageType: concept
audience: orchestrator
status: current
lastVerified: 2026-03-13
---BODY---
DEPRECATED COPY. Canonical: v2/orchestrators/concepts/incentive-model.mdx.

Content summary: Stake-for-access (SFA) model from DePIN networks. Staking serves three purposes: Access (register as orchestrator), Selection weight (higher stake = higher gateway selection probability), Economic security (financial commitment to good behaviour). Total stake = self-stake + delegated LPT. Two revenue streams: LPT protocol rewards (inflationary, per round, requires reward() call, proportional to stake, kept per reward cut) and ETH service fees (usage-based, PM tickets per job, proportional to volume and price, kept per fee cut). Cost structure: GPU hardware, hosting, bandwidth, energy (200-400W per GPU), ETH for gas (Arbitrum), LPT for staking. Operational costs: uptime commitment, maintenance, delegation management, risk. Reward/fee cut example: 10% reward cut → orchestrator keeps 10% LPT, 90% to delegators. Why operate: financial incentives (LPT rewards, ETH fees, compounding stake), strategic incentives (governance influence, ecosystem position, AI infrastructure opportunity, monetise idle GPUs).
---END FILE---

---FILE---
PATH: v2/orchestrators/concepts/x-deprecated/dep-role.mdx
---FRONTMATTER---
title: The Orchestrator Role in the Livepeer Network
sidebarTitle: Role
description: Learn what orchestrators are, how they earn, their dual role as compute providers and economic actors, and which setup path fits your GPU resources.
keywords: [livepeer, orchestrators, about orchestrators, orchestrator role, overview, GPU compute, staking, delegation, governance, DePIN]
pageType: overview
audience: orchestrator
purpose: overview
status: current
lastVerified: 2026-03-13
---BODY---
DEPRECATED COPY. Canonical: v2/orchestrators/concepts/role.mdx.

Content summary: Orchestrators are both general-purpose GPU compute providers and economic actors. Timeline: 2017-2023 transcoding era, Q3 2024 AI Subnet (9 pipelines, BYOC), Q4 2024 Cascade (real-time AI, ComfyStream, LLM Ollama), Today unified compute provider. Four roles: Technical (receive/execute/return work, manage workers), Economic (LPT rewards via reward(), ETH service fees, delegation economics via reward cut/fee cut), Governance (vote on LIPs, weight proportional to stake), Business (partnerships, SLA-based pricing, preferred orchestrator status). Mental models via AccordionGroup: Cloud background (GPU fleet like EC2, protocol = AWS billing), Ethereum background (like PoS validator but earns per job not just stake), Contractor analogy (tools+capabilities+rates → jobs through marketplace).
---END FILE---

---FILE---
PATH: v2/orchestrators/concepts/x-deprecated/dep-workloads.mdx
---FRONTMATTER---
title: Orchestrator Core Services and Workloads
sidebarTitle: Workloads
description: The job types an orchestrator can process — transcoding, batch AI inference, real-time AI (Cascade), and LLM inference — with hardware requirements, pricing models, and how to choose which to run.
keywords: [livepeer, orchestrator, job types, transcoding, AI inference, Cascade, LLM, batch AI, real-time AI, GPU, VRAM, pipeline, ComfyStream, aiModels.json]
pageType: concept
audience: orchestrator
status: current
---BODY---
DEPRECATED COPY. This content is a more detailed version of the Job Types page.

Content summary: Four job categories with hardware and pricing details. Transcoding: high-throughput short-duration, NVENC/NVDEC GPU-accelerated recommended, -pricePerUnit flag in wei/pixel. Batch AI (9 pipelines): text-to-image (24GB, 1.9073484e-08 USD/pixel), image-to-image (20GB), image-to-video (16GB+), image-to-text (4GB), audio-to-text (12GB, per ms), upscale (REVIEW), segment-anything-2 (6GB, 3.22e-11 USD/pixel), text-to-speech (REVIEW). Real-time AI/Cascade: ComfyStream, ComfyUI workflows, persistent stream, 8GB+ min/16-24GB recommended, latency-sensitive (33ms per frame for 30fps), use cases: VTuber avatars, style transfer, real-time video agents. LLM: Ollama-based runner (not standard ai-runner), quantised 7-8B models in 8GB VRAM, pricing per token unit (pixels_per_unit = 1000000 tokens), example model: meta-llama/Meta-Llama-3.1-8B-Instruct. Choosing your setup table by GPU tier/goal.
---END FILE---

---FILE---
PATH: v2/orchestrators/concepts/x-deprecated/rs-workloads.mdx
---FRONTMATTER---
title: Job Types
description: The job types an orchestrator can process — transcoding, batch AI inference, real-time AI (Cascade), and LLM inference — with hardware requirements, pricing models, and how to choose which to run.
keywords: [livepeer, orchestrator, job types, transcoding, AI inference, Cascade, LLM, batch AI, real-time AI, GPU, VRAM, pipeline, ComfyStream, aiModels.json]
pageType: concept
audience: orchestrator
status: current
---BODY---
DEPRECATED COPY. Duplicate/alternate version of dep-workloads.mdx. Same content structure. Title simplified to "Job Types".
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-options.mdx
---FRONTMATTER---
title: Setup Options to Running an Orchestrator
sidebarTitle: Navigator
description: Not sure where to start? Answer three questions about your goals, resources, and risk tolerance — then follow the path that fits. Covers pool worker, solo orchestrator, and the Siphon split-setup.
keywords: [livepeer, orchestrator, GPU, setup, pool, siphon, go-livepeer, start here, navigator, path, decision]
tag: start here
audience: orchestrator
purpose: orientation
pageType: landing
status: published
lastVerified: 2026-03-13
---BODY---
DEPRECATED COPY. Earlier version of setup-options.mdx (v1). Navigator/orientation page guiding operators to the right setup path based on three questions (goals, resources, risk tolerance). Covers pool worker, solo orchestrator, and Siphon split-setup paths. Canonical: v2/orchestrators/guides/deployment-details/setup-options.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-siphon-setup.mdx
---FRONTMATTER---
title: Split Setup with OrchestratorSiphon
sidebarTitle: Siphon Setup
description: How to separate reward claiming and keystore management from workload processing using OrchestratorSiphon. Covers two-machine architecture, installation, config.ini setup, running as a systemd service, and day-to-day operations.
keywords: [livepeer, orchestrator, siphon, OrchestratorSiphon, split setup, keystore, reward calling, security, two-machine, go-livepeer, arbitrum]
pageType: guide
audience: orchestrator
purpose: guide
status: published
lastVerified: 2026-03-13
---BODY---
DEPRECATED COPY. Earlier version of siphon-setup.mdx. Canonical: v2/orchestrators/guides/deployment-details/siphon-setup.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-orchestrator-transcoder-setup.mdx
---FRONTMATTER---
title: Split Orchestrator-Transcoder Setup
---BODY---
DEPRECATED COPY. Earlier version of orchestrator-transcoder-setup.mdx. Canonical: v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-setup-navigator.mdx
---FRONTMATTER---
title: Find Your Orchestrator Path
---BODY---
DEPRECATED COPY. Earlier navigator/orientation page. Canonical functionality now in v2/orchestrators/navigator.mdx and setup-options.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-requirements.mdx
---FRONTMATTER---
title: GPU and Hardware Reference
---BODY---
DEPRECATED COPY. Earlier version of hardware requirements content. Canonical: v2/orchestrators/setup/rcs-requirements.mdx and v2/orchestrators/resources/gpu-support.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-requirements.mdx
---FRONTMATTER---
title: Hardware Requirements
---BODY---
DEPRECATED COPY. Second iteration of hardware requirements. Canonical: v2/orchestrators/setup/rcs-requirements.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/benchmarking.mdx
---FRONTMATTER---
title: Benchmarking Your Setup
---BODY---
DEPRECATED COPY. Earlier benchmarking guide covering livepeer_bench tool for measuring GPU transcoding capacity. Proposed relocation: absorb into requirements.mdx as "Testing Your Hardware Capacity" section. Content includes livepeer_bench command syntax and NVENC session capacity testing.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-benchmarking.mdx
---FRONTMATTER---
title: Benchmarking Your Setup
---BODY---
DEPRECATED COPY. Earlier iteration of benchmarking.mdx. Same content scope.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-benchmarking.mdx
---FRONTMATTER---
title: Benchmarking Your Setup
---BODY---
DEPRECATED COPY. Second iteration of benchmarking content.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/session-limits.mdx
---FRONTMATTER---
title: Session Limits
---BODY---
DEPRECATED COPY. Covers -maxSessions flag, hardware NVENC session limits, bandwidth-based session capacity calculation. Proposed relocation: absorb into setup/configure.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-session-limits.mdx
---FRONTMATTER---
title: Bandwidth and Session Limits
---BODY---
DEPRECATED COPY. Earlier version of session-limits.mdx with bandwidth-based framing.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-2-session-limits.mdx
---FRONTMATTER---
title: Session Limits
---BODY---
DEPRECATED COPY. Second iteration of session limits content.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep-3-setup-options.mdx
---FRONTMATTER---
title: Alternate Deployment Options and Setup Paths
---BODY---
DEPRECATED COPY. Third iteration of setup-options content with "Alternate Deployment Options" framing. Canonical: v2/orchestrators/guides/deployment-details/setup-options.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/deployment-details/x-deprecated/dep4-setup-options.mdx
---FRONTMATTER---
title: Setup Options
---BODY---
DEPRECATED COPY. Fourth iteration of setup-options content. Canonical: v2/orchestrators/guides/deployment-details/setup-options.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/operator-considerations/x-deprecated/dep-operator-rationale.mdx
---FRONTMATTER---
title: Operator Rationale
---BODY---
DEPRECATED COPY. Earlier version of operator-rationale.mdx. Canonical: v2/orchestrators/guides/operator-considerations/operator-rationale.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/operator-considerations/x-deprecated/dep-business-case.mdx
---FRONTMATTER---
title: Business Case
---BODY---
DEPRECATED COPY. Earlier version/stub of business-case.mdx. Canonical: v2/orchestrators/guides/operator-considerations/business-case.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/operator-considerations/x-deprecated/dep-protocol-influence.mdx
---FRONTMATTER---
title: Protocol Influence
---BODY---
DEPRECATED COPY. Earlier version of operator impact/protocol influence content. Canonical: v2/orchestrators/guides/operator-considerations/operator-impact.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/x-deprecated/imported-tutorial-1-byoc-cpu-pipeline.mdx
---FRONTMATTER---
title: "Add AI: BYOC CPU pipeline"
---BODY---
DEPRECATED COPY. Imported earlier version of BYOC CPU pipeline tutorial. Canonical: v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx and v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/x-deprecated/imported-tutorial-2-offchain-transcoding-test.mdx
---FRONTMATTER---
title: "Your first gateway: off-chain transcoding test"
---BODY---
DEPRECATED COPY. Imported earlier version of off-chain transcoding test tutorial. Canonical stub: v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/guides/tutorials/x-deprecated/imported-tutorial-3-go-production.mdx
---FRONTMATTER---
title: "Go production: on-chain, GPU, and network connect"
---BODY---
DEPRECATED COPY. Imported earlier version of go-production tutorial. Canonical stub: v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/setup/x-deprecated/dep-s-guide.mdx
---FRONTMATTER---
title: Setting up an Orchestrator
---BODY---
DEPRECATED COPY. Earlier version of setup guide overview. Canonical: v2/orchestrators/setup/guide.mdx and v2/orchestrators/setup/s-guide.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/setup/x-deprecated/dep-config.mdx
---FRONTMATTER---
title: Configure Your Orchestrator
---BODY---
DEPRECATED COPY. Earlier version of configure.mdx. Canonical: v2/orchestrators/setup/configure.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/setup/x-deprecated/dep-activate.mdx
---FRONTMATTER---
title: Activate on the Network
---BODY---
DEPRECATED COPY. Earlier version of on-chain activation guide. Canonical: v2/orchestrators/setup/connect-and-activate.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/setup/x-deprecated/r-configure.mdx
---FRONTMATTER---
title: Configuring Your Orchestrator
---BODY---
DEPRECATED COPY. Earlier version of configure page with different title variant. Canonical: v2/orchestrators/setup/configure.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-ai-workloads/rc-ai-pipelines.mdx
---FRONTMATTER---
title: AI Pipelines
description: Configure and optimise AI inference pipelines on your orchestrator — pipeline types, aiModels.json reference, custom models, Ollama LLM runner, and remote workers.
keywords: [livepeer, orchestrator, AI pipelines, aiModels.json, AI runner, Cascade, LLM, Ollama, text-to-image, VRAM, custom models, BYOC]
pageType: guide
audience: orchestrator
status: published
lastVerified: 2026-03-10
---BODY---
ARCHIVED COPY. Substantive AI pipelines reference with full aiModels.json field documentation.

Supported pipelines: text-to-image (24GB VRAM, per output pixel), image-to-image (24GB, per output pixel), image-to-video (24GB, per output pixel), image-to-text (4GB, per input pixel, recommended: Salesforce/blip-image-captioning-large), audio-to-text (12GB, per ms audio, recommended: openai/whisper-large-v3), segment-anything-2 (per input pixel), text-to-speech, upscale (recommended: stabilityai/stable-diffusion-x4-upscaler), llm (8GB, per custom unit, Ollama runner), live-video-to-video/Cascade (ComfyUI/StreamDiffusion, per frame).

aiModels.json field reference:
- pipeline (required): pipeline identifier e.g. "text-to-image"
- model_id (required): HuggingFace model ID
- price_per_unit (required): integer = Wei; string e.g. "0.5e-2USD" = USD notation
- warm (optional bool): if true, preload at startup; one warm model per GPU during Beta
- pixels_per_unit (optional int): units of work per pricing unit
- currency (optional): set "USD" when using USD notation
- url (optional): external container URL; must expose /health endpoint
- token (optional): bearer token for external container authentication
- capacity (optional int): max concurrent inference tasks; default 1
- optimization_flags (optional object): SFAST (up to +25% speed, Stable Fast) or DEEPCACHE (up to +50%, caches diffusion steps — do NOT use with Lightning/Turbo models); cannot combine both

Multi-pipeline config: each warm model occupies VRAM continuously; rule of thumb: warm primary revenue pipeline, cold the rest. Beta constraint: only one warm model per GPU supported.

LLM pipeline (Ollama runner): image tztcloud/livepeer-ollama-runner:0.1.1 + ollama/ollama:latest. docker-compose stack. Pull model: docker exec -it ollama ollama pull llama3.1:8b. Model name (llama3.1:8b) and Livepeer model_id (meta-llama/Meta-Llama-3.1-8B-Instruct) are different identifiers. Verify at tools.livepeer.cloud/ai/network-capabilities.

External containers/BYOC: url field connects any external container; used for Ollama runner, K8s clusters, custom inference servers, auto-scaling stacks.

Troubleshooting: AI worker container not starting (wrong image tag, insufficient VRAM, Docker/NVIDIA Container Toolkit not configured). Model not loading (model_id must match HuggingFace exactly). Pipeline receiving no jobs (not registered, price_per_unit too high, model cold in latency-competitive pipeline, not in active set). OOM during inference (reduce maxSessions, set capacity: 1, use DEEPCACHE or SFAST). Ollama runner not receiving LLM jobs (registration, container reachability, Docker network, network-capabilities check).
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-ai-workloads/p-ai-models.mdx
---FRONTMATTER---
title: AI Models
sidebarTitle: AI Models
description: Planned operator guide for aiModels.json, compatibility, custom models, and model-serving choices.
pageType: guide
audience: orchestrator
purpose: guide
status: draft
lastVerified: 2026-03-12
---BODY---
Placeholder/stub. Planned scope: aiModels.json structure and operator-specific examples, compatibility rules and model selection, custom models and BYOC considerations, warm models, runtime strategy, and model-serving tradeoffs. Recommended: AI Pipelines, Hosting AI Models on an Orchestrator, CLI flags reference.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-ai-workloads/r-hosting-models.mdx
---FRONTMATTER---
title: Hosting AI Models on an Orchestrator
sidebarTitle: Hosting AI Models
description: How to host AI models on a Livepeer orchestrator node — runtime setup, capability advertisement, pricing, and gateway integration.
audience: orchestrator
purpose: concept
---BODY---
ARCHIVED COPY. Substantive guide to AI model hosting on orchestrators.

Architecture note: consumers never talk to orchestrators directly — all traffic flows through gateways (routing, auth, pricing, QoS → Orchestrator GPU + model + runtime).

Models best suited: diffusion models (Stable Diffusion, StreamDiffusion), image-to-image and video-to-video, ControlNet pipelines, vision models (depth, pose, segmentation), ComfyUI DAG workflows, real-time video AI effects. Not ideal: large batch LLM inference, long-running training, stateful fine-tuning.

Orchestrators do NOT need to build: marketplace, auth systems, billing, service discovery, brand/user trust — these handled by Gateways. Compete on performance: lower latency, better GPUs, higher uptime, better-optimised pipelines, specialised/niche models.

Setup steps:
1. Run orchestrator with -aiWorker -aiModels /root/.lpData/cfg/aiModels.json -aiModelsDir /root/.lpData/models
2. Install AI runtime: Option A ComfyUI (most common) + ComfyStream; Option B custom inference server (FastAPI/Torch/TensorRT/ONNX)
3. Advertise capabilities via aiModels.json (machine-readable capability descriptors: image-to-image, video-to-video, depth, segmentation, style-transfer)
4. Set pricing (per-request, per-frame, or per-second; USD denominated)
5. Gateways automatically discover orchestrator, route jobs based on cost/performance/capability

Capability table: image-to-image (SDXL, SD 1.5, SD-Turbo), video-to-video (StreamDiffusion, AnimateDiff), depth (DepthAnything, MiDaS), segmentation (SAM, SAM2), style-transfer (ControlNet + IP-Adapter).

Hosting multiple models: cold swap (higher latency, lower VRAM), warm multi-model concurrent (small models like depth + segmentation + ControlNet), dedicated GPU per model (high-throughput production). Warning: cold starts reduce job assignment.

Developer consumption: HTTP API calls (image/video in → output out), WebRTC streams for real-time video. Real-world examples: Daydream (generative AI video), StreamDiffusionTD (TouchDesigner), ComfyStream (browser-based ComfyUI), OBS plugins (live stream AI effects).

Gateway partnerships: commercial arrangement outside protocol for guaranteed routing and exclusive pipeline access.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-ai-workloads/p-realtime-vs-batch.mdx
---FRONTMATTER---
title: Realtime vs Batch
sidebarTitle: Realtime vs Batch
description: Planned operator decision page for choosing between realtime AI and batch AI workload paths.
pageType: guide
audience: orchestrator
purpose: guide
status: draft
lastVerified: 2026-03-12
---BODY---
Placeholder/stub. Planned scope: latency and runtime differences, hardware and VRAM implications, operational differences in setup/monitoring/economics, when to start with one path before adding the other. Recommended: AI Pipelines, Realtime AI Orchestrator Quickstart, Batch AI Orchestrator Quickstart, Job Types.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-ai-workloads/p-models-and-vram.mdx
---FRONTMATTER---
title: Models and VRAM
sidebarTitle: Models and VRAM
description: Planned operator reference for model fit, VRAM planning, and workload-to-hardware matching.
pageType: guide
audience: orchestrator
purpose: reference
status: draft
lastVerified: 2026-03-12
---BODY---
Placeholder/stub. Planned scope: pipeline-by-pipeline VRAM guidance, warm vs cold model tradeoffs, how to pick models for hardware you already have, operator-side fit guidance for video, realtime AI, and batch AI. Recommended: AI Pipelines, Hosting AI Models on an Orchestrator, Add AI to Your Node.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-ai-workloads/x-ai.mdx
---FRONTMATTER---
title: AI Orchestration Quickstart
sidebarTitle: AI
description: Get your orchestrator up and running with AI orchestration capabilities.
audience: developer
pageType: quickstart
purpose: guide
status: draft
lastVerified: 2026-03-11
---BODY---
(Empty body — draft stub page)
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-ai-workloads/x-batch-ai.mdx
---FRONTMATTER---
title: Batch AI Orchestrator Quickstart
description: Setup path for batch AI orchestrators on Livepeer (coming soon).
pageType: quickstart
audience: orchestrator
purpose: tutorial
sidebarTitle: Batch AI
---BODY---
ARCHIVED STUB. Batch AI setup is pipeline-dependent and will document supported deployment patterns as they stabilise. Links to Job Types and go-livepeer box.md.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-ai-workloads/x-realtime-ai.mdx
---FRONTMATTER---
title: Realtime AI Orchestrator Quickstart
description: Setup path for realtime AI orchestrators on Livepeer (coming soon).
pageType: quickstart
audience: orchestrator
purpose: tutorial
sidebarTitle: Realtime AI
---BODY---
ARCHIVED STUB. Realtime AI setup requires additional runtime and streaming components beyond baseline transcoding. Links to Job Types and go-livepeer box.md.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-staking-and-rewards/rs-rewards-and-fees.mdx
---FRONTMATTER---
title: Rewards and Fees
sidebarTitle: Rewards and Fees
description: How orchestrators earn — LPT inflation rewards and ETH job fees; reward cut and fee share.
audience: orchestrator
---BODY---
ARCHIVED COPY. Concise rewards and fees reference.

Two distinct sources: protocol rewards (LPT inflation) and job fees (ETH). Do not conflate them.

LPT rewards: inflation minted each round; share proportional to stake; must call reward() every round; reward cut = % you keep (rest to delegators).

ETH fees: gateways/broadcasters pay via probabilistic micropayments (tickets); winning tickets redeemed on Arbitrum for ETH; fee share = % shared with delegators (you keep remainder).

Reward cut and fee share set via livepeer_cli or Explorer at activation or update. Affect delegator attractiveness.

Video vs AI: Video — ETH fees + LPT inflation, stake-weighted selection. AI — per-job payments, routing by capability and price not stake, AI does not depend on inflation for routing.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-staking-and-rewards/earnings.mdx
---FRONTMATTER---
title: Orchestrator Earnings Explained
sidebarTitle: Earnings Explained
description: How orchestrators earn ETH fees and LPT rewards on Livepeer — fee types, reward calculation, commission parameters, and what affects your income.
purpose: concept
pageType: guide
audience: orchestrator
status: current
---BODY---
ARCHIVED COPY. Comprehensive earnings explanation.

Two revenue streams: ETH service fees (demand-driven, per transcoding/AI job via probabilistic micropayments/tickets), LPT inflationary rewards (protocol-level, minted each round, must call Reward() each round, stake-proportional).

Currency summary: ETH from gateways paying for jobs (win jobs, redeem winning payment tickets on-chain), LPT from protocol inflation (bond LPT, activate, call Reward() each round).

Commission parameters:
- Reward Cut: % of LPT rewards you keep. Formula: Orchestrator LPT = Round inflation share × rewardCut; Delegator LPT = Round inflation share × (1 - rewardCut) × (delegator stake / total stake). Example: 100 LPT, 20% rewardCut → you keep 20 LPT, delegators split 80 LPT.
- Fee Share: % of ETH fees shared with delegators. Formula: Delegator ETH = Job fee revenue × feeShare × (delegator stake / total stake); Orchestrator ETH = Job fee revenue × (1 - feeShare).

Job routing factors: stake weight (higher = more inflation and higher in active set), capability matching (supports requested pipeline/model/resolution?), performance history (transcoding success rate, latency, uptime), pricing (competitive vs others?), model warmth (warm models win AI jobs over cold models).

AI vs transcoding fees table: Video (per segment, low fees, GPU recommended not required, continuous, no model setup), AI (per inference job, higher fees, GPU required, per-request, warm model = faster jobs = more wins).

Payment mechanics: PM tickets — gateway sends ticket per job, each has probability of being "winning ticket" worth larger ETH amount, redeem winning tickets on-chain, expected value over many jobs = agreed fee. Redeemer service handles on-chain redemption.

Inflation details: dynamic rate — increases when <~50% LPT bonded, decreases when >~50%. As of 02-March-2026, 10% of each round's issuance goes to Livepeer Treasury.

Reward calling automation: -reward=true enables automatic reward calling; ensure sufficient ETH on Arbitrum for gas; monitor for missed rounds on Explorer.

Yield calculation formula (from yield-calculation.mdx): yield_LPT = [l_total × (1 + r_inf)^417 - l_total] / l_active × ((p + l_orch) × r_rewards) × (s_rewards × p / (p + l_orch)); yield_ETH = (v_daily × 365) × s_fees × p/(p + l_orch). Combined yield uses price_LPT/ETH from Uniswap.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-staking-and-rewards/rcs-staking-lpt.mdx
---FRONTMATTER---
title: Staking and Delegation
sidebarTitle: Staking and Delegation
audience: developer
pageType: landing
purpose: landing
status: draft
lastVerified: 2026-03-11
---BODY---
ARCHIVED COPY. Staking and delegation reference (merged file).

Staking LPT: protocol requirement for participating as orchestrator. Provides Sybil resistance, economic collateral for slashing, determines video work allocation (active set = top 100 by stake). AI job routing is NOT stake-weighted — based on capability, price, and latency.

Bonding: must bond LPT to yourself to register as transcoder, earn inflation rewards, and receive video work. Use livepeer_cli or Explorer to bond. Bonded stake becomes active in the next round. Unbonding starts a lock-up period.

Delegated stake: total active stake = self-stake + delegated stake. Sets share of inflation rewards and probability of video job selection. Attract delegators via competitive reward cut and fee share.

Video vs AI: Video selection proportional to bonded stake. AI inference routing based on price, latency, GPU capability — stake does NOT determine AI job assignment.

Delegators: LPT holders who bond to your orchestrator. Receive share of LPT rewards and ETH fees per reward cut and fee share. Your responsibility: call reward() each round for both you and delegators. Slashing affects delegated stake proportionally.

Attracting delegators: set competitive reward cut and fee share, maintain uptime and reliability, compare metrics with Explorer.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-delegates-voting-pools/r-run-a-pool.mdx
---FRONTMATTER---
title: Run a Pool
description: Operate a Livepeer GPU pool — accept external worker connections, manage job routing across multiple GPUs, and handle fee distribution.
pageType: guide
audience: orchestrator
status: current
---BODY---
ARCHIVED COPY. Comprehensive pool operations guide.

How a pool works: protocol sees only one entity (orchestrator address, single stake, single service URI). Pool accepts connections from remote transcoders (workers) via gRPC streaming RPC. Workers process segments and return results; orchestrator handles protocol-level interaction. Workers have no on-chain presence.

Worker connection models:
- BYO Container: workers run go-livepeer in transcoder mode, connect via -orchAddr and -orchSecret. No ETH account/LPT/RPC needed. Command: livepeer -transcoder -orchAddr <HOST>:8935 -orchSecret <SECRET> -nvidia 0 -maxSessions 10
- Pool client (managed): custom binary (e.g. Titan Node pool binary). Worker provides GPU, driver, ETH address for payout. Operator builds/maintains client tooling (engineering investment).
- Cloud GPU (Vast.ai, Lambda Labs, CoreWeave, RunPod): no owned hardware; workers pay GPU time and earn back. Note: cloud GPU unit economics tight at current transcoding pricing.

Accepting workers: replace -orchestrator -transcoder with -orchestrator -orchSecret. Workers authenticate with shared secret. -transcoder omitted puts orchestrator in standalone mode (dispatches to workers, no local transcoding). Port 8935 must be open for both gateway and worker connections. Keep -orchSecret private — rotate if compromised.

Fee distribution: ENTIRELY OFF-CHAIN. Protocol pays all fees and rewards to orchestrator ETH address. Approaches: per-session tracking (log sessions per worker ETH address, pay proportionally), custom pool client (track ethAddr + nickname + sessions, automate payouts), manual distribution.

On-chain identity: on Explorer, delegators see total stake/reward cut/fee cut/performance; workers not visible; pool performance reflects aggregate of all connected workers.

Ongoing responsibilities: monitor worker connections (disconnected worker fails its session), session limits/NVENC caps (Titan Node patches driver), routing (go-livepeer distributes sessions internally), node updates (drops all workers + in-flight sessions), payout/communication channels (Discord, Telegram, forum), key rotation (no zero-downtime rotation).

Key takeaways: one orchestrator on-chain, multiple workers behind it. Fee distribution to workers is entirely off-chain. Workers need no LPT, Ethereum account, or RPC endpoint. Public pool requires payout tooling, worker communication, uptime monitoring, transparent reporting.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-delegates-voting-pools/rcs-delegates.mdx
---FRONTMATTER---
title: Staking and Delegation
audience: developer
pageType: landing
purpose: landing
status: draft
lastVerified: 2026-03-11
---BODY---
ARCHIVED COPY. Same content as rcs-staking-lpt.mdx (merged file — both contain identical content about staking requirements, bonding, delegated stake, Video vs AI routing, and delegator responsibilities).
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-delegates-voting-pools/x-governance.mdx
---FRONTMATTER---
title: X-governance
sidebarTitle: X-governance
audience: developer
pageType: landing
purpose: landing
status: draft
lastVerified: 2026-03-11
---BODY---
(Empty body — draft stub page)
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-setups-and-workloads/rc-alternate-setups.mdx
---FRONTMATTER---
title: Find Your Path to Becoming a Livepeer Orchestrator
sidebarTitle: Navigator
description: Not sure where to start? Use this guide to find the best path for your goals and experience level.
tag: start here
audience: orchestrator
purpose: orientation
pageType: landing
---BODY---
ARCHIVED COPY. Earlier navigator/setup-paths page. Contains Mermaid flowchart (Orchestrator → Option A: Full go-livepeer Setup vs Option B: Split Setup) and detailed content for both options.

Option A — Full go-livepeer Setup: single machine, all-in-one. Install go-livepeer → register and activate on-chain → configure GPU and process workloads.

Option B — Split Setup (OrchestratorSiphon + go-livepeer): separate concerns across two machines. Secure machine runs OrchestratorSiphon (lightweight Python toolkit: claims rewards, votes on proposals, updates service URI, keystore stays on secure isolated machine). GPU machine runs go-livepeer for workload processing (no keystore needed). Advantage: avoids missing rewards because reward claiming runs independently. Can start with OrchestratorSiphon alone as passive orchestrator while setting up GPU infrastructure, then deploy go-livepeer and update service URI. OrchestratorSiphon repo: github.com/Stronk-Tech/OrchestratorSiphon.

Operator path options: hobbyist → join a pool (Quick Setup); data center/full control → run own Orchestrator node (Advanced Setup). Enterprise providers: contact Foundation directly.

Later section: decision tree noting if new to Livepeer and want to contribute GPU without full orchestrator, join an existing pool.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-setups-and-workloads/rs-workloads.mdx
---FRONTMATTER---
title: Job Types
description: The job types an orchestrator can process — transcoding, batch AI inference, real-time AI (Cascade), and LLM inference — with hardware requirements, pricing models, and how to choose which to run.
pageType: concept
audience: orchestrator
status: current
---BODY---
ARCHIVED COPY. Detailed job types reference (same scope as concepts/x-deprecated/rs-workloads.mdx already collated in canonical tree). Four job categories:

Transcoding: original job type since 2017. Per-segment, high-throughput, short-duration. GPU-accelerated via NVIDIA NVENC/NVDEC strongly recommended. Priced in wei per pixel (-pricePerUnit flag, -pixelsPerUnit defaults to 1). Configured via -pricePerUnit flag.

Batch AI Inference: stateless single-request AI jobs. 9 pipelines. Arrives as HTTP request to ai-runner Docker container. Pricing per pipeline with recommended USD prices: text-to-image (24GB, 1.9073484e-08 USD/output pixel), image-to-image (20GB, 1.9073484e-08 USD/input pixel), image-to-video (16GB+, ~3.39e-06 USD/pixel), image-to-text (4GB, 2.5e-10 USD/input pixel), audio-to-text (12GB, 0.02e-06 USD/ms), upscale (TBC), segment-anything-2 (6GB, 3.22e-11 USD/input pixel), text-to-speech (TBC). Configured via aiModels.json.

Real-time AI (Cascade): persistent continuous stream. Gateway establishes persistent connection; ComfyStream holds ComfyUI workflow in memory, processes each incoming video frame, returns transformed frame before next arrives. GPU remains allocated for stream duration. Cascade Phase 1 shipped December 2024; ComfyStream integrated with Livepeer network payments 30 January 2025. Min 8GB VRAM (lightweight workflows), recommended 16-24GB (production style transfer and avatar workflows). Pricing unit TBC. Configured via aiModels.json + ComfyStream instance.

LLM Inference: separate Ollama-based runner (tztcloud/livepeer-ollama-runner). Ollama wraps quantised LLMs; 7-8B quantised (Q4) runs in 8GB VRAM (GTX 1080, 2060 class). aiModels.json config: "pipeline": "llm", "pixels_per_unit": 1000000, "url": "http://llm_runner:8000".

Choosing your setup table: GPU 8-12GB → transcoding + LLM; 16GB → transcoding + batch AI (image-to-text, audio-to-text, SA2); 24GB+ → full batch AI suite; existing transcoding node → add AI; dedicated AI inference realtime video → batch + Cascade; ML workstation new to Livepeer → start batch AI, add Cascade.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-setups-and-workloads/x-running-workloads.mdx
---FRONTMATTER---
title: Running Workloads on Your GPU Node
sidebarTitle: Running Workloads
audience: developer
pageType: landing
purpose: landing
status: draft
lastVerified: 2026-03-11
---BODY---
(Empty body — draft stub with comment notes about planned content: what workloads can be run, AI pipelines, real-time video, BYOC/ComfyStream, examples like Daydream/Titan)
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-setups-and-workloads/x-siphon-setup.mdx
---FRONTMATTER---
(empty file — 1 line)
---BODY---
(Empty file)
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-tooling-and-monitoring/rcs-tooling.mdx
---FRONTMATTER---
title: Orchestrator Tools
sidebarTitle: Tools
description: Tools for monitoring, verifying, and operating your Livepeer orchestrator — Explorer, payout dashboards, Prometheus metrics, and community tools.
pageType: reference
purpose: reference
audience: orchestrator
status: review
lastVerified: 2026-03-10
---BODY---
ARCHIVED COPY. Comprehensive orchestrator tooling reference.

Livepeer Explorer (explorer.livepeer.org, operated by Livepeer Inc): active set status (top 100 by stake), reward call history, earnings (cumulative fees ETH + inflation LPT), delegator list, fee and reward cut settings, governance (vote on LIPs and treasury proposals), AI performance leaderboard. Underwent maintenance engagement (RaidGuild, late 2025).

Node Metrics (Prometheus): enable with -monitor flag. Endpoint: http://localhost:7935/metrics. Exposes: session counts and capacity utilisation, segment success and failure rates, winning ticket counts, job processing latency, GPU utilisation. Official monitoring Docker: livepeer/monitoring:latest with LP_MODE=standalone LP_NODES=localhost:7935. Repo: github.com/livepeer/livepeer-monitoring. Multi-node: comma-separated LP_NODES.

Cloud SPE Tools (tools.livepeer.cloud, community-operated): AI network capabilities (/ai/network-capabilities — lists all AI-capable orchestrators by pipeline with warm model status), payout reports (daily/weekly/monthly earnings per orchestrator address), orchestrator view (per-orchestrator stats including pricing and job activity). Warning: community infrastructure, not Foundation-operated, intermittent availability in past.

Network Dashboards (Dune Analytics): Growth Dashboard (dune.com/rickstaa/livepeer-growth-dashboard), Governance Dashboard (dune.com/rickstaa/livepeer-governance-dashboard), Token Dashboard (dune.com/stronk/livepeer-arbitrum). For macro network trends not per-node monitoring.

Capability Testing: stream-tester (github.com/livepeer/stream-tester) — submits transcoding jobs, measures response times and success rates. AI job tester (github.com/mikezupper/livepeer-ai-job-tester) — community-built, submits AI inference jobs, verifies AI pipeline availability.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-tooling-and-monitoring/p-smoke-test.mdx
---FRONTMATTER---
title: Smoke Test
sidebarTitle: Smoke Test
description: Planned validation checklist for confirming an orchestrator is actually live after setup and activation.
pageType: troubleshooting
audience: orchestrator
purpose: troubleshooting
status: draft
lastVerified: 2026-03-12
---BODY---
Planned smoke test checklist covering: Reachability (verify serviceAddr, activation details, public-facing node path), First job (confirm node accepts first workload with expected logs and health signals), First earnings (confirm first visible on-chain or Explorer signal). Recommended: Testing Your Orchestrator Setup, Monitoring Your Orchestrator Setup, FAQ and Troubleshooting.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-tooling-and-monitoring/x-explorer.mdx
---FRONTMATTER---
title: Livepeer Explorer
sidebarTitle: Explorer
description: Explore the Livepeer network with our block explorer, providing insights into transactions, blocks, and network activity.
audience: orchestrator
pageType: guide
---BODY---
(Empty body — stub with "missing" and "potential match" comments)
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-tooling-and-monitoring/x-optimise.mdx
---FRONTMATTER---
title: Optimising Your Orchestrator Setup
sidebarTitle: Optimise
audience: developer
pageType: landing
purpose: landing
status: draft
lastVerified: 2026-03-11
---BODY---
(Empty body — draft stub page)
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-tooling-and-monitoring/x-troubleshooting.mdx
---FRONTMATTER---
title: Troubleshooting
sidebarTitle: Troubleshooting
audience: developer
pageType: landing
purpose: landing
status: draft
lastVerified: 2026-03-11
---BODY---
(Empty body — draft stub page)
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-integrations-other/p-fleet-ops.mdx
---FRONTMATTER---
title: Fleet Ops
sidebarTitle: Fleet Ops
description: Planned enterprise-facing guide for data-centre, multi-node, and fleet-scale orchestrator operations.
pageType: guide
audience: orchestrator
purpose: guide
status: draft
lastVerified: 2026-03-12
---BODY---
Placeholder/stub. Planned scope: fleet and multi-node operating models, data-centre and hosted deployment concerns, capacity management/regions/operational process, enterprise routing into advanced operations section. Recommended: Data Centre Setup, Enterprise Operations, Advanced Operations Guide.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/dep-integrations-other/p-gateways.mdx
---FRONTMATTER---
title: Gateways
sidebarTitle: Gateways
description: Planned guide covering how orchestrators relate to gateways operationally, including discovery, pricing, routing, and visibility.
pageType: guide
audience: orchestrator
purpose: guide
status: draft
lastVerified: 2026-03-12
---BODY---
Placeholder/stub. Planned scope: how gateways discover orchestrators, how pricing/reachability/capability affect routing, operational role of serviceAddr, what operators should verify when visibility or routing is weak. Recommended: Configuring Your Orchestrator, Livepeer Explorer, CLI flags reference.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/unclassified/dep-orchestrator-functions.mdx
---FRONTMATTER---
title: Orchestrator Functions
sidebarTitle: Functions
description: Learn what orchestrators do across compute, AI inference, staking, delegation, and governance on the Livepeer network.
audience: orchestrator
purpose: concept
---BODY---
ARCHIVED COPY. High-level conceptual overview of orchestrator functions (note: compared with concepts/rs-workloads.mdx, this page is more conceptual/overview while rs-workloads is more operational/detailed).

Orchestrators are: general purpose GPU compute providers AND economic actors (stake LPT, earn rewards, vote in governance). Also host and provide AI models and inference endpoints (including BYOC) which power novel services like AI avatars and agent workloads. May manage delegated LPT. Can have significant governance influence by voting as a block with delegators.

General Compute Functions: Transcoding (convert video from one format to another) and AI Inference (running a model to make a prediction). Also custom workloads.

AI Pipeline Functions: BYOC, AI Models (sections in progress).

Delegation and Governance Services: earn rewards by delegating LPT tokens.

Example Services Powered by Orchestrators: Interactive AI Video (Daydream), Real-Time Avatars and Virtual Agents (Embody, Sarah), Workflow Automation and Agent Workflows, Interactive Live Experiences (AR/VR, Gaming, Metaverse, Live Streaming Games, Interactive Live Events).
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/unclassified/dep-quickstart-add-your-gpu-to-livepeer.mdx
---FRONTMATTER---
title: Configure your Orchestrator
sidebarTitle: Add your GPU to Livepeer
description: Configure go-livepeer after installation — Arbitrum connection, pricing, service address, and optional transcoding or AI config.
audience: orchestrator
purpose: tutorial
keywords: [livepeer, orchestrators, configuration, pricePerUnit, serviceAddr, transcoding, AI]
---BODY---
ARCHIVED COPY. Legacy configuration page retained for reference after new quickstart and setup guides became canonical.

Core configuration flags: -ethUrl (Arbitrum RPC URL), -ethAcctAddr (optional ETH account address), -network (use arbitrum-one-mainnet for production), -serviceAddr (public hostname:port e.g. orchestrator.example.com:8935), -pricePerUnit (Wei per pixel), -pixelsPerUnit (default 1), -orchestrator (orchestrator mode), -transcoder (enable GPU transcoding), -nvidia (comma-separated NVIDIA GPU IDs).

Example minimal run: livepeer -orchestrator -transcoder -network arbitrum-one-mainnet -ethUrl <ETH_URL> -serviceAddr <HOST:8935> -pricePerUnit <WEI_PER_PIXEL> -nvidia 0,1

Optional transcoding profiles: transcodingOptions.json with name/width/height/bitrate/fps/profile fields.
Optional AI models: aiModels.json with pipeline/model_id/warm fields.

Verification: Listening for RPC on :8935 in logs, Explorer shows node after activation, nvidia-smi GPU usage increases under load.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/unclassified/dep-connect-to-arbitrum.mdx
---FRONTMATTER---
title: Connect to Arbitrum
description: Connect go-livepeer to Arbitrum — RPC endpoint setup, Ethereum account import, and testnet vs mainnet configuration.
audience: orchestrator
purpose: how_to
---BODY---
ARCHIVED COPY. Earlier version of setup/connect-and-activate.mdx. Content covers: -ethUrl flag with Arbitrum One RPC URL, -network arbitrum-one-mainnet for production, -ethAcctAddr for existing keystore, Arbitrum RPC provider options (Alchemy, Infura, Ankr public endpoint), testnet (Rinkeby was deprecated, use Arbitrum testnet), account import/keystore management. Canonical page: v2/orchestrators/setup/connect-and-activate.mdx.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/unclassified/dep-rcs-06-add-ai-to-node-output.mdx
---FRONTMATTER---
title: Add AI to Your Node
sidebarTitle: Add AI Pipelines
description: Add AI inference pipelines to an existing go-livepeer transcoding node — hardware check, aiModels.json configuration, and startup command update.
pageType: tutorial
audience: orchestrator
status: current
---BODY---
ARCHIVED COPY. Step-by-step guide for adding AI to an existing transcoding node.

Prerequisites: go-livepeer running on Arbitrum mainnet, in Top 100 active set, Docker with nvidia-container-toolkit, GPU with 4GB+ VRAM, model weights pre-downloaded.

Hardware check command: nvidia-smi --query-gpu=index,name,memory.total,memory.free --format=csv

VRAM requirements table: image-to-text (4GB), segment-anything-2 (6GB), LLM/llm (8GB, Ollama runner), audio-to-text (12GB), image-to-video (16GB+), image-to-image (20GB), text-to-image (24GB).

Step 1: Pull AI runner image: docker pull livepeer/ai-runner:latest (also livepeer/ai-runner:segment-anything-2 for SA2).

Step 2: Configure aiModels.json at ~/.lpData/aiModels.json with at least one pipeline entry. Minimal example: pipeline "text-to-image", model_id "ByteDance/SDXL-Lightning", price_per_unit 4768371, warm true. aiModels.json field reference table with all fields and descriptions.

Step 3: Update startup command — add -aiWorker, -aiModels ~/.lpData/aiModels.json, -aiModelsDir ~/.lpData/models. Docker mode requires mounting Docker socket (-v /var/run/docker.sock:/var/run/docker.sock). Note: -aiModelsDir must be host machine path, not container path (docker-out-of-docker).

Step 4: Verify AI active — look for "Starting managed container" log line per warm model; test via http://localhost:8000/docs Swagger UI; test AI runner with curl POST to /text-to-image endpoint.

Outstanding items (pre-publication): safe VRAM headroom for transcoding + AI on same GPU, common errors from Discord, livepeer_cli AI capability command, Top 100 Mainnet requirement clarification, go-livepeer minimum version, image-to-video/upscale/text-to-speech VRAM, internal link path confirmations.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/unclassified/p-feasibility.mdx
---FRONTMATTER---
title: Feasibility
sidebarTitle: Feasibility
description: Planned operator-focused feasibility page covering worth-it analysis, competitiveness, capacity, and practical economics.
pageType: guide
audience: orchestrator
purpose: guide
status: draft
lastVerified: 2026-03-12
---BODY---
Placeholder/stub. Planned scope: worth-it analysis for solo/pool/AI/fleet operators, capacity and competitiveness framing before setup, cost categories, how stake/job type/hardware profile change viability. Recommended: Orchestrator Earnings Explained, Rewards and Fees, Staking and Delegation.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/unclassified/rcs-connect-activate-publish.mdx
---FRONTMATTER---
title: Activate on the Network
description: Activate your orchestrator on the Livepeer network using livepeer_cli — set reward cut, fee cut, and service URI, and verify you are in the active set.
pageType: how_to
audience: orchestrator
status: current
---BODY---
ARCHIVED COPY. Activation guide using livepeer_cli.

Prerequisites: go-livepeer running connected to Arbitrum One, LPT available to stake, small amount of arbETH for gas.

Activation flow via livepeer_cli: "Invoke multi-step 'become an orchestrator'" option.
Steps:
1. Set reward cut: % of LPT block rewards you keep (default 10%). Remainder distributed to delegators.
2. Set fee cut: % of ETH transcoding and inference fees you keep (default 95%). Remainder to delegators.
3. Set pixels per unit: accept default (1).
4. Set price per unit: match -pricePerUnit startup flag value (Wei per pixel). Warning: too high means gateways route elsewhere.
5. Set service address: publicly accessible hostname_or_ip:port matching -serviceAddr flag (e.g. myorchestrator.example.com:8935). Must be externally reachable; configure port forwarding for port 8935 before activating.
6. Set stake amount: denominated in LPTU (1 LPT = 1e18 LPTU). To stake 5 LPT enter 5000000000000000000.
7. Confirm: livepeer_cli submits approve + bond transactions. Node joins active set at start of FOLLOWING round.

Verify active set: Explorer → search ETH address → look for "Active" status. "Registered" but not "Active" = total stake not in top 100. After activation transactions confirm, may take until next round (~24 hours) for status change in Explorer.

Active set: top 100 by total LPT stake. Find minimum stake on Explorer (100th-ranked orchestrator's stake). If drops below top 100: re-register transaction OR increase stake via self-bonding/delegation.

Not receiving jobs troubleshooting: service address not externally reachable (most common), price set too high (exceeds gateway -maxPricePerUnit), stake at edge of active set (new orchestrators with minimal stake/no history receive few jobs initially — improves over time), activation transaction not yet propagated (wait for round change ~24 hours).
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/unclassified/rcs-requirements.mdx
---FRONTMATTER---
title: Operational and Hardware Requirements for Orchestrators
---BODY---
ARCHIVED COPY. Earlier requirements page. Covers hardware, network, software, and economic requirements for running a Livepeer orchestrator. Canonical: v2/orchestrators/setup/rcs-requirements.mdx (in setup/ section).
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/assess-capabilities.mdx
---FRONTMATTER---
title: Assess concurrent stream
icon: signal-stream
---BODY---
V1 SOURCE. Assessing concurrent stream capacity: hardware functionality and constraints, NVIDIA session caps (link to developer.nvidia.com/video-encode-decode-gpu-support-matrix), recommendation to check latest driver version before benchmarking. Note on artificial restrictions via TOS (users should read/comply with hardware TOS). Testing: use livepeer_bench benchmarking tool.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/benchmark-transcoding.mdx
---FRONTMATTER---
title: Benchmark Transcoding
icon: server
---BODY---
V1 SOURCE. livepeer_bench guide for measuring GPU transcoding capacity.

Purpose: simulate live-mode, gauge local transcoding capacity, output real-time segment ratio and stream duration ratio.

Key metric: transcode time should be lower than total segment duration (faster than real-time).

Steps:
1. Download test stream: wget -c https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz
2. Download transcodingOptions.json from github.com/livepeer/go-livepeer/blob/master/cmd/livepeer_bench/transcodingOptions.json
3. Run: livepeer_bench -in bbb/source.m3u8 -transcodingOptions transcodingOptions.json -nvidia <GPU_IDs> -concurrentSessions <N>

Flags: -nvidia (only for NVIDIA GPUs, comma-delimited IDs), -concurrentSessions (default 1), -live (default true for live mode; set false for VOD/all-segments-at-once).

Output: CSV per segment (timestamp, session, segment, seg_dur, transcode_time). Final metrics: Real-Time Segs Ratio (segs transcoded in real-time), Real-Time Duration Ratio (total transcode time / total source duration). Export CSV: > output.csv.

Example output: 10 segments, Real-Time Duration Ratio 0.05583 (very fast). Target: ratio ≤ 0.8 for ~20% buffer for upload/download.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/configure-reward-calling.mdx
---FRONTMATTER---
title: Reward Calls
icon: coins
---BODY---
V1 SOURCE. Reward calling guide.

Auto reward call: active orchestrator automatically calls reward() each round, submitting Arbitrum transaction distributing newly minted LPT. Amount depends on orchestrator stake (own + delegators). Note: for very low stake, ETH transaction cost may exceed LPT rewards distributed.

Disable automatic reward calls: -reward=false flag.
Manually call reward: livepeer_cli → "Invoke 'reward'" option. Gas cost typically 350k-450k. Ensure sufficient ETH for gas.
Enable automatic reward calls: omit -reward=false (enabled by default).

Recommendation for new operators: start with manual reward calls to evaluate economic sense (especially low-stake operations), then enable automatic reward calling once LPT/ETH ratio justifies it.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/set-pricing.mdx
---FRONTMATTER---
title: Set Pricing
icon: tag
---BODY---
V1 SOURCE. Pricing configuration guide (original v1 docs).

WEI price: price per pixel denominated in Wei (1 ETH = 1e18 Wei), advertised to gateways off-chain. Set via -pricePerUnit flag or livepeer_cli "Set orchestrator config" option.

Auto price adjustments: default behavior adjusts advertised price based on estimated overhead for ticket redemption (redemption tx cost / ticket face value × base price). Examples: 1% overhead → 1010 wei from 1000 base; 20% → 1200 wei; 50% → 1500 wei. Disable with -autoAdjustPrice=false for constant price.

USD-denominated pricing (go-livepeer v0.8.0+): -pricePerUnit with USD suffix e.g. -pricePerUnit 0.41USD. Use -pixelsPerUnit to set a human-friendly denominator (recommended constant over time). -pixelsPerUnit supports exponential notation (e.g. 1e12), -pricePerUnit does not. Chainlink ETH/USD price feed auto-configured on Arbitrum mainnet. Custom currency/network: -priceFeedAddr with Chainlink price feed address + currency suffix.

USD examples: $4.10E-13 = -pixelsPerUnit 1e12 -pricePerUnit 0.41USD. $6.65E-14 = -pixelsPerUnit 1e12 -pricePerUnit 0.0665USD.

BTC pricing example: -priceFeedAddr 0xc5a90A6d7e4Af242dA238FFe279e9f2BA0c64B2e -pricePerUnit 1BTC.

Recommendation: keep USD configuration in sync with rest of network (Livepeer Studio pegs -maxPricePerPixel to USD).
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/set-session-limits.mdx
---FRONTMATTER---
title: Set Session Limits
icon: wand-magic-sparkles
---BODY---
V1 SOURCE. Session limits guide.

Default limit: 10 concurrent sessions. When exceeded, orchestrator returns OrchestratorCapped error to gateway. Set -maxSessions based on minimum of hardware capacity and bandwidth.

Hardware capacity determination: use livepeer_bench script iterating -concurrentSessions 1 to 20+, collecting Real-Time Duration Ratio. Hardware limit = concurrent session value where ratio ≤ 0.8 (leaves 20% buffer for upload/download). Script: bash loop with livepeer_bench | grep "Duration Ratio" >> bench.log. Multiple identical GPUs: benchmark single GPU then multiply by count. Different GPUs: benchmark each uniquely.

Bandwidth capacity: common ABR ladder per stream: Download 6 Mbps (6000 kbps source), Upload 5.6 Mbps (5600 kbps output renditions: 1080p 6000kbps, 720p 3000kbps, 480p 1600kbps, 360p 800kbps, 240p 250kbps). 100 Mbps upstream/downstream → ~16 streams (extend +20% since not all segments concurrent).

Session limit = min(hardware limit, bandwidth limit). Set via -maxSessions flag.

Note: session management constantly improving; may require adjustment after live network operation.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/o-t-split.mdx
---FRONTMATTER---
title: Connect to Transcoders
icon: plug
---BODY---
V1 SOURCE. O-T split setup guide.

Standalone orchestrator command: livepeer -network arbitrum-one-mainnet -ethURL <ETH_URL> -orchestrator -orchSecret <ORCH_SECRET> -pricePerUnit <PRICE> -serviceAddr <ADDR>. -orchSecret: shared secret for transcoder authentication (plaintext or file via -orchSecret secret.txt).

Standalone transcoder command: livepeer -transcoder -nvidia <NVIDIA_GPU_IDs> -orchSecret <ORCH_SECRET> -orchAddr <SERVICE_ADDR>. On startup, transcoder runs self-test to confirm GPU transcoding capability; exits if test fails. Success message: "Registering transcoder to my-orchestrator.com:443".

Connection confirmation in orchestrator logs: "Got a RegisterTranscoder request from transcoder=<IP> capacity=<N>". Once connected, orchestrator dispatches jobs to transcoder.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/gateway-introspection.mdx
---FRONTMATTER---
title: Gateway Introspection
icon: tower-broadcast
---BODY---
V1 SOURCE. Public API for gateway introspection via Grafana Loki.

API: public Loki instance at https://loki.livepeer.report/loki/api/v1/

Example queries:
- All regions: curl -G -s https://loki.livepeer.report/loki/api/v1/query --data-urlencode "query={region=~\".+\"}" | jq
- Time range (UNIX nanoseconds): query_range endpoint with start= and end= params
- Specific region (e.g. NYC): --data-urlencode "query={region=~\"nyc\"}"
- Specific orchestrator IP: add |= "clientIP=<IP>" filter
- List all regions: /loki/api/v1/label/region/values

Purpose: review activity inside Livepeer Gateway nodes and understand selection algorithms for assigning work to Orchestrators. Initial release; operators encouraged to open PRs to enable additional logs.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/monitor-metrics.mdx
---FRONTMATTER---
title: Monitor Metrics
icon: monitor-waveform
---BODY---
V1 SOURCE. Metrics monitoring guide.

Enable monitoring: -monitor flag (enables metrics monitoring), -metricsPerStream (groups performance metrics per stream), -metricsClientIP (exposes client IP in metrics).

Prometheus + Grafana: follow monitoring guide at forum.livepeer.org/t/guide-transcoder-monitoring-with-prometheus-grafana/1225.

Docker monitoring: livepeer/livepeer-monitoring container — bundles Prometheus, Grafana, and starter Grafana dashboard templates. GitHub: github.com/livepeer/livepeer-monitoring.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/troubleshoot.mdx
---FRONTMATTER---
title: Troubleshoot
icon: triangle-exclamation
---BODY---
V1 SOURCE. Troubleshooting guide for video miners/orchestrators.

Errors and issues:
- OrchestratorCapped: hit session limit, not accepting work; see session limit guide.
- Cannot allocate memory (startup with -nvidia flag): hit max NVENC/NVDEC sessions for GPU; check developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new.
- insufficient funds for gas × price + value: not enough ETH in account; add ETH.
- Transcode loop timed out / Segment loop timed out: session cleanup logs, not errors, expected.
- MB rate > Level limit: source video warning, typically does not impact operation.
- Unable to transcode errors: unsupported source video properties; gateway responsible for sending supported segments, no operator action needed.
- reward=false not taking effect: add -reward=false as override in launch command even with .conf file; if O-T split, add to all processes; optionally remove -ethUrl from Transcoder process to prevent on-chain actions.
- TicketParams expired: gateway sent payment ticket with too-old parameters; no operator action, gateway retries with updated params.
- Error creating Ethereum account manager: cannot find ETH account; check ~/.lpData/<network>/keystore/ for account matching -ethAcctAddr; check file permissions; copy keystore from old datadir/network if needed.
- Unsupported input pixel format: no operator action, video format cannot be transcoded.

Common questions:
- Publicly accessible: only port 8935 required public. NAT/home router: configure port forwarding or DMZ. Hairpinning iptables solution described.
- Service URI: discovery mechanism; stored on-chain as URI format; IP or hostname allowed; prefer static IP or DNS name.
- serviceAddr mismatch error ("Service address did not match discovered address"): set -serviceAddr IP:port matching blockchain-registered address; ensure actually accessible at that address.
- How to know if transcoding: -v 6 flag for verbose logs indicating transcoding activity; setup metrics monitoring.
- Keep log records: livepeer ... 2>&1 | tee livepeer.log
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/vote.mdx
---FRONTMATTER---
title: Vote on proposals
icon: check-to-slot
---BODY---
V1 SOURCE. Governance voting guide using livepeer_cli.

Steps:
1. Find poll contract address in Livepeer Explorer (explorer.livepeer.org/voting) poll page.
2. Run livepeer_cli.
3. Select option to "Vote on a poll".
4. Enter poll contract address.
5. Choose voting option (0=Yes, 1=No).
6. Confirm vote (y/n prompt).
7. Wait for transaction confirmation; vote reflected in Explorer poll page.

Can vote without exporting keys from the orchestrator machine. Transaction example shows "Invoking transaction: 'vote'" with _choiceID and tx hash.
---END FILE---

---FILE---
PATH: v2/orchestrators/_workspace/x-archived/v1/yield-calculation.mdx
---FRONTMATTER---
title: Yield Calculation on Explorer
icon: calculator
---BODY---
V1 SOURCE. Explorer yield calculation methodology.

Orchestrator parameters: fee share (s_fees), reward share (s_rewards), reward call ratio (r_rewards = rewardCalls / n, where n = rounds up to 90), active stake (l_orch), daily fee volume average (v_daily, 90-day, denominated in ETH).

Protocol parameters: inflation rate (r_inf, increases when participation < ~50% bonded, decreases when > ~50%), total token supply (l_total), current active stake (l_active).

Transcoding fees yield: yield_ETH = (v_daily × 365) × s_fees × p/(p + l_orch)

Inflationary rewards yield: yield_LPT = [l_total × (1 + r_inf)^417 - l_total] / l_active × ((p + l_orch) × r_rewards) × (s_rewards × p/(p + l_orch))
Where 417 = rounds per year (L1 block-based). p = principal (amount of LPT delegator wants to stake).

Combined yield: yield_total = yield_LPT + yield_ETH × price_LPT/ETH (Uniswap)

Implementation: github.com/livepeer/explorer/blob/main/lib/roi.ts

Inaccuracies/pitfalls: variable orchestrator parameters (malicious orchestrator could change fee/reward cuts after attracting delegators — delegators should monitor changes), inflation rate change (assumes current participation stays constant).
---END FILE---

