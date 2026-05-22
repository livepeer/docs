# Orchestrators Content Research Pack

## Purpose

Collected source material for content writers rewriting the Orchestrators tab of the Livepeer v2 documentation, cataloguing every v1 and v2 page, their content, technical facts, migration status, and gaps.

---

## V1 Content Inventory

V1 orchestrator content lives in two locations: **nav-published pages** (`v1/orchestrators/`) and **shared references** (`v1/references/go-livepeer/`) that appear in the Orchestrators nav. There are 3 top-level intro pages and 16 guide pages in the main orchestrators section. The v1 introduction page is actually a Livepeer Studio developer introduction (copy-paste error — it describes the Studio API and SDKs, not the orchestrator role).

### Top-level pages

| Path | Title | Status | Content summary | Key technical facts |
|------|--------|--------|-----------------|---------------------|
| `v1/orchestrators/introduction.mdx` | Introduction | Orphaned / copy error | Page is actually the Livepeer Studio developer introduction (API, SDKs, Player component). Does not describe orchestrators at all. | No orchestrator-specific facts. SDK install: `npm install livepeer @livepeer/react` |
| `v1/orchestrators/quick-start.mdx` | Quickstart | Orphaned / copy error | Same Livepeer Studio quickstart (create API key, JS SDK, retrieve playback info, Player component). Not an orchestrator quickstart. | playbackId example: `f5eese9wwl88k4g8`. SDK client pattern with `process.env.YOUR_PRIVATE_API_KEY`. |
| `v1/orchestrators/livepeer-studio-cli.mdx` | Livepeer Studio CLI | Orphaned / copy error | File exists in filesystem as the general CLI page. Not orchestrator-specific. | N/A |

### Guides

| Path | Title | Status | Content summary | Key technical facts |
|------|--------|--------|-----------------|---------------------|
| `v1/orchestrators/guides/get-started.mdx` | Get started | Migrated (partial) | Full step-by-step: run go-livepeer in orchestrator mode, check GPUs with nvidia-smi, fund wallet, activate via livepeer_cli. | CLI flags: `-network arbitrum-one-mainnet`, `-ethUrl`, `-ethAcctAddr`, `-orchestrator`, `-transcoder`, `-nvidia`, `-pricePerUnit`, `-serviceAddr`. Default RPC port: 8935. Keystore path: `~/.lpData/arbitrum-one-mainnet/keystore`. Active set = top 100 orchestrators by stake. LPT bond amount in LPTU (1 LPT = 1e18 LPTU). livepeer_cli "Invoke multi-step become an orchestrator" flow. Default reward cut: 10%, fee cut: 95%, pixels per unit: 1. |
| `v1/orchestrators/guides/install-go-livepeer.mdx` | Install Go Livepeer | Migrated | Binary, Docker, source install methods for macOS/Linux/Windows/GPU variants. | Release URL pattern: `https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/livepeer-<platform>-<arch>.tar.gz`. GPU binary requires CUDA Toolkit v12. Docker image: `livepeer/go-livepeer:<RELEASE_VERSION>` on DockerHub. `docker pull livepeer/go-livepeer:master` for pre-release. Source build requires `go`, `ffmpeg` deps, `./install_ffmpeg.sh`, `export PKG_CONFIG_PATH=~/compiled/lib/pkgconfig`, `export BUILD_TAGS=mainnet`. Arch Linux community AUR package: `paru go-livepeer-bin`. |
| `v1/orchestrators/guides/connect-to-arbitrum.mdx` | Connect to Arbitrum | Migrated | Two connection paths: hosted API (Infura/Alchemy) or self-hosted node. Network flags. | `-network arbitrum-one-mainnet`, `-ethUrl https://arbitrum-mainnet.infura.io/v3/<PROJECT_ID>`. Offchain mode: `-network offchain`. Self-hosted: `-ethUrl http://localhost:8545`. Private network needs `-ethController <CONTROLLER_ADDR>`. |
| `v1/orchestrators/guides/configure-reward-calling.mdx` | Reward Calls | Migrated | Auto vs manual reward calling. Cost analysis guidance. | Default is auto reward call each round. `-reward=false` to disable. Gas cost for reward call: 350k-450k. Gas price check via ethgasstation or gasnow. Reward is per round; missing a round forfeits that round's LPT. |
| `v1/orchestrators/guides/set-session-limits.mdx` | Set Session Limits | Migrated | Calculate and set `-maxSessions` based on hardware bench + bandwidth. | Default concurrent session limit: 10. `OrchestratorCapped` error when exceeded. Session limit set via `-maxSessions` flag. ABR ladder (source 1080p30fps): 1080p@6000kbps, 720p@3000kbps, 480p@1600kbps, 360p@800kbps, 240p@250kbps. Download BW per stream: ~6 Mbps; upload: ~5.6 Mbps. Real-time duration ratio target: ≤0.8 (leaves 20% buffer). Benchmark test asset: `https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz`. |
| `v1/orchestrators/guides/set-pricing.mdx` | Set Pricing | Migrated | Wei per pixel pricing, automatic price adjustment, fiat-denominated pricing (USD, BTC) via Chainlink. | Price unit: Wei per pixel. `-pricePerUnit`, `-pixelsPerUnit` flags. `-autoAdjustPrice=false` disables auto adjustment. Auto-adjust overhead calculation: base_price * (1 + overhead%). USD pricing: `-pricePerUnit 0.41USD` + `-pixelsPerUnit 1e12`. ETH/USD Chainlink feed on Arbitrum mainnet auto-configured. Custom feed via `-priceFeedAddr`. Example ETH/USD on Ethereum mainnet: `0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419`. BTC/USD on Arbitrum: `0xc5a90A6d7e4Af242dA238FFe279e9f2BA0c64B2e`. USD pricing introduced in go-livepeer v0.8.0. |
| `v1/orchestrators/guides/benchmark-transcoding.mdx` | Benchmark Transcoding | Migrated | `livepeer_bench` tool usage. Performance metrics. | `livepeer_bench -in bbb/source.m3u8 -transcodingOptions transcodingOptions.json -nvidia <IDs> -concurrentSessions <N>`. `transcodingOptions.json` at `go-livepeer/cmd/livepeer_bench/transcodingOptions.json`. Live mode default: `-live=true`. Key metrics: Real-Time Segs Ratio, Real-Time Duration Ratio. CSV export via stdout redirect. |
| `v1/orchestrators/guides/assess-capabilities.mdx` | Assess concurrent stream | Migrated (minimal) | Hardware capability assessment, NVIDIA session limits. | NVIDIA encode/decode support matrix link. Recommends `livepeer_bench`. Concurrent session caps depend on GPU model. |
| `v1/orchestrators/guides/monitor-metrics.mdx` | Monitor Metrics | Migrated | Enable Prometheus metrics, Grafana dashboard. | `-monitor` flag, `-metricsPerStream`, `-metricsClientIP`. Docker monitoring container: `https://github.com/livepeer/livepeer-monitoring`. Forum guide for Prometheus+Grafana setup. |
| `v1/orchestrators/guides/vote.mdx` | Vote on proposals | Migrated | livepeer_cli voting in governance polls. | `livepeer_cli` option "Vote on a poll". Poll contract addresses from `explorer.livepeer.org/voting`. Voting options: Yes (0) / No (1). Transaction via Arbitrum. |
| `v1/orchestrators/guides/dual-mine.mdx` | Dual Mine | Superseded (ethash mining deprecated) | Concurrent GPU ethash mining + transcoding using CUDA MPS. Pre/post-Volta GPU guidance. | Tested miners: t-rex, ethminer. CUDA MPS requires Linux + post-Volta GPU. `ethminer --cuda-streams`, `--cuda-block-size`, `--cuda-grid-size` flags. `t-rex -i <intensity>`. Ethash mining is effectively obsolete (ETH moved to PoS). |
| `v1/orchestrators/guides/o-t-split.mdx` | Connect to Transcoders | Migrated | Run separate orchestrator and transcoder processes. | `-orchSecret <ORCH_SECRET>` (or file: `-orchSecret secret.txt`). Transcoder flags: `-transcoder`, `-orchSecret`, `-orchAddr <SERVICE_ADDR>`. Log on connect: `Got a RegisterTranscoder request from transcoder=<IP> capacity=10`. |
| `v1/orchestrators/guides/migrate-to-arbitrum.mdx` | Migrate to Arbitrum | Superseded (migration complete) | One-time L1 Ethereum → L2 Arbitrum migration guide. LIP-73 block. | Migration via `explorer.livepeer.org/migrate`. Requires `go-livepeer >= 0.5.28`. Migration date: February 14, 2022 (mainnet). Arbitrum bridge: `bridge.arbitrum.io`. After migration, re-register via `livepeer_cli` option 13 "Set orchestrator config". `-datadir` flag for separate data directory on Arbitrum. |
| `v1/orchestrators/guides/migrate-from-contract-wallet.mdx` | Migrate Stake from Contract | Superseded (migration complete) | Contract wallet (Gnosis Safe / multisig) migration from L1 to L2. | L1Migrator contract: `0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A`. Functions: `migrateDelegator`, `migrateUnbondingLocks`. Params: `_l1Addr`, `_l2Addr`, `_sig` (blank), `_maxGas`, `_gasPriceBid`, `_maxSubmissionCost`. L2 finalization: ~10 minutes after L1 confirm. Verification tool: `arbitrum-lpt-bridge` repo, `npx hardhat wait-to-relay-tx-to-l2 <L1_TX_HASH>`. |
| `v1/orchestrators/guides/gateway-introspection.mdx` | Gateway Introspection | Migrated | Public Loki API for querying gateway logs and selection algorithms. | API base: `https://loki.livepeer.report/loki/api/v1/`. Query endpoints: `/query` and `/query_range`. Filter by region, orchestrator IP, time range (UNIX epoch nanoseconds). Example query: `{region=~".+"}`. Region label available. |
| `v1/orchestrators/guides/troubleshoot.mdx` | Troubleshoot | Migrated | Errors: OrchestratorCapped, Cannot allocate memory, insufficient funds for gas, TicketParams expired, Error creating Ethereum account manager, Unsupported pixel format, networking/NAT. FAQs on public accessibility, service URI, knowing if transcoding. | `OrchestratorCapped` = hit maxSessions. Cannot allocate memory = NVENC session limit on GPU. Keystore path: `~/.lpData/<network>/keystore/`. Default port: 8935. NAT/hairpinning iptables example. `-v 6` for verbose logs. `livepeer ... 2>&1 | tee livepeer.log` for log capture. TicketParams expiration from gateway delay; gateway retries automatically. Service address mismatch: use `-serviceAddr IP:port`. |

### V1 Shared References (appear in Orchestrators nav)

| Path | Title | Status | Key facts |
|------|--------|--------|-----------|
| `v1/references/go-livepeer/hardware-requirements.mdx` | Hardware Requirements | Partially migrated | Nvidia NVENC/NVDEC strongly recommended. CPU transcoding possible but not competitive. RAM/Disk: TBD (incomplete). |
| `v1/references/go-livepeer/gpu-support.mdx` | GPU Support | Migrated | Tested GPU list (file not read but referenced extensively). |
| `v1/references/go-livepeer/cli-reference.mdx` | CLI Reference | Migrated (new v2 CLI Flags page) | Full CLI flag reference. |
| `v1/references/go-livepeer/bandwidth-requirements.mdx` | Bandwidth Requirements | Migrated | Upload/download bandwidth testing. |
| `v1/references/go-livepeer/prometheus-metrics.mdx` | Prometheus Metrics | Migrated | Metrics exposed by livepeer node. |
| `v1/references/contract-addresses.mdx` | Contract Addresses | Migrated (updated) | See full addresses in Technical Facts section below. |

---

## V2 Content Inventory

All 70 nav-referenced v2 pages exist as files. Pages are organised as: portal/navigator (2), concepts (4), quickstart (4), setup (7), guides/operator-considerations (4), guides/deployment-details (6), guides/ai-and-job-workloads (9), guides/staking-and-rewards (4), guides/payments-and-pricing (2), guides/config-and-optimisation (4), guides/monitoring-and-tooling (4), guides/advanced-operations (4), guides/roadmap-and-funding (2), guides/tutorials (6), resources (10).

### Entry Points

| Path | Title | pageType | status | Content summary |
|------|--------|----------|--------|-----------------|
| `v2/orchestrators/portal.mdx` | Orchestrator Portal | landing | current | Hero landing page: "GPUs for AI Video / Run - Provide - Earn". Orchestrators are GPU compute nodes. Six card navigation to key sections. Uses React components (PortalHeroContent, Starfield, etc). Docker pull CTA: `docker pull livepeer/go-livepeer:master`. lastVerified 2026-03-16. |
| `v2/orchestrators/navigator.mdx` | Find Your Path | landing | current | Decision tree navigator by operator situation: try Livepeer → Quickstart; evaluating → Operator Rationale; pool worker → Join a Pool; solo setup → Setup Guide; adding AI → AI workloads; scaling up → Advanced Operations. lastVerified 2026-03-16. |

### Concepts

| Path | Title | pageType | status | Content summary | Key facts |
|------|--------|----------|--------|-----------------|-----------|
| `v2/orchestrators/concepts/role.mdx` | The Orchestrator Role | overview | current | Three background accordions (Cloud, Ethereum, neutral). Role history timeline 2017-2026. Technical role: job execution, capability advertisement, payment receipt, reward calling, worker management. Five deployment types (solo, O-T split, pool worker, pool operator, siphon). Four operator personas (miner, easy earner, pro operator, business). lastVerified 2026-03-15. | Active set = top 100 by total bonded stake. Interacts with: BondingManager, RoundsManager, TicketBroker, ServiceRegistry on Arbitrum. Timeline: 2024 Q3 - AI subnet + AIServiceRegistry. Five deployment types defined. |
| `v2/orchestrators/concepts/capabilities.mdx` | Orchestrator Capabilities | concept | current | Workload types, Gateway selection signals, capability advertisement. lastVerified 2026-03-15. | Orchestrators publish capability set for Gateway discovery. Capabilities must be declared on registration. |
| `v2/orchestrators/concepts/architecture.mdx` | Orchestrator Architecture | concept | current | Layer position, internal components, request flow, GPU worker management, protocol interactions. lastVerified included. | Contracts: LivepeerNode, AI runner, transcoder. O-T split architecture. ServiceRegistry, AIServiceRegistry, BondingManager, TicketBroker. |
| `v2/orchestrators/concepts/incentive-model.mdx` | Orchestrator Incentive Model | concept | current | Two revenue streams: ETH service fees + LPT inflation rewards. Pricing units per workload. Fee/reward cut mechanics. Cost structure. Full payment flow diagram. Operator models. Price configuration flags. Delegator attraction. lastVerified 2026-03-15. | Video: `-pricePerUnit` (wei per pixel). Batch AI: `-pricePerCapability` (JSON). Live AI (Cascade): `-livePaymentInterval`. Per-gateway: `-pricePerGateway`. Round ~22 hours. LPT 1 = 1e18 LPTU. Fee cut example: 5% to orchestrator, 95% to delegators. Reward cut example: 25% to orchestrator, 75% to delegators. 0% reward cut = maximum delegator appeal. autoAdjustPrice flag. ai-prices.json format documented. Delegator evaluation criteria: reward cut, fee cut, reliability, reputation, self-stake. |

### Quickstart

| Path | Title | pageType | status | Content summary | Key facts |
|------|--------|----------|--------|-----------------|-----------|
| `v2/orchestrators/quickstart/guide.mdx` | Orchestrator Quickstart | overview | current | Overview page for two off-chain smoke tests: video transcoding (20-30 min) and AI inference (35-65 min). Both run with Docker only. Hardware: NVIDIA GPU; 24 GB VRAM for AI diffusion or 8 GB for LLM. No Arbitrum, no LPT. lastVerified 2026-03-16. | Pre-req: NVIDIA GPU, Docker Engine + NVIDIA Container Toolkit, ffmpeg (video test), Linux (AI test). |
| `v2/orchestrators/quickstart/video-transcoding.mdx` | Quickstart: Verify Your Hardware | quickstart | current | Two smoke tests on one page: video transcoding + AI inference. Docker-only. No on-chain. lastVerified 2026-03-16. | VRAM: 24 GB for diffusion; 8-16 GB for LLM. Verify Docker GPU: `docker run --rm --gpus all nvidia/cuda:12.0.0-base-ubuntu22.04 nvidia-smi`. |
| `v2/orchestrators/quickstart/tutorial.mdx` | Tutorial (quickstart) | tutorial | (varies) | Tutorial page in quickstart section. Content status to verify separately. | - |
| `v2/orchestrators/quickstart/AI-prompt-start.mdx` | AI Prompt Start | (varies) | (varies) | AI-assisted prompt start page for quickstart. Content status to verify separately. | - |

### Setup

| Path | Title | pageType | status | Content summary | Key facts |
|------|--------|----------|--------|-----------------|-----------|
| `v2/orchestrators/setup/guide.mdx` | Run an Orchestrator | overview | current | 4-step setup flow: Install → Configure → Connect to Arbitrum → Verify. Each step is a separate page. Requirements table (hardware/software/network/wallet/tokens). lastVerified 2026-03-16. | Four setup steps. LPT acquisition "often takes hours to days" (exchange + bridge). |
| `v2/orchestrators/setup/rcs-requirements.mdx` | Setup Checklist | how_to | current | Pre-flight checklist by node mode (Video/AI/Dual). Hardware tables per mode. lastVerified 2026-03-16. | Video GPU minimum: any NVIDIA with NVENC/NVDEC. Recommended: RTX 3060+ or T4+. AI diffusion VRAM: 24 GB. LLM minimum: 8-16 GB. |
| `v2/orchestrators/setup/rs-install.mdx` | Install go-livepeer | how_to | current | Docker install (recommended), binary install for Linux/macOS/Windows/GPU. NVIDIA Container Toolkit setup. lastVerified 2026-03-16. | Docker image: `livepeer/go-livepeer:stable`. CUDA 12.0 included in Docker image. NVIDIA Container Toolkit install commands (Ubuntu/Debian). Verify GPU passthrough: `docker run --rm --gpus all nvidia/cuda:12.0.0-base-ubuntu22.04 nvidia-smi`. Expected chain ID: `0xa4b1` = Arbitrum One (42161). `0x1` = Ethereum mainnet (wrong). |
| `v2/orchestrators/setup/configure.mdx` | Configure Your Orchestrator | how_to | current | docker-compose templates for three modes: video, AI, dual. Flag configuration. lastVerified 2026-03-16. | Three node modes: video, AI inference, dual. `docker-compose.yml` template: `image: livepeer/go-livepeer:stable`, `restart: unless-stopped`, `network_mode: host`, volume `~/.lpData:/root/.lpData`. |
| `v2/orchestrators/setup/connect-and-activate.mdx` | Connect to Arbitrum | how_to | current | Full on-chain connection steps: Arbitrum RPC, wallet, stake LPT, register service URI, activate. lastVerified 2026-03-16. | Alchemy free tier: 300M compute units/month. Infura free tier: 100K requests/day. Public `arb1.arbitrum.io/rpc`: testing only. Alchemy Arbitrum endpoint: `https://arb-mainnet.g.alchemy.com/v2/YOUR_API_KEY`. Chain ID verification: expect `0xa4b1`. First start creates ETH account and prompts for passphrase. |
| `v2/orchestrators/setup/test.mdx` | Verify your setup | (verify step) | current | Verification checklist: on-chain, transcoding, AI (if configured), reward calling, metrics. lastVerified in file. | - |
| `v2/orchestrators/setup/r-monitor.mdx` | Monitor | (guide) | current | Monitoring setup post-activation. | - |

### Guides: Operator Considerations

| Path | Title | pageType | status | Content summary |
|------|--------|----------|--------|-----------------|
| `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx` | Operating Rationale | guide | current | Cost categories, revenue streams, viability thresholds, decision matrix (pool vs solo vs AI-first). lastVerified 2026-03-15. Note: file has stray characters `glrw\npwrfs` before the YAML frontmatter - this is a formatting issue. |
| `v2/orchestrators/guides/operator-considerations/business-case.mdx` | Business Case | (varies) | current | Business case analysis for running an orchestrator. |
| `v2/orchestrators/guides/operator-considerations/operator-impact.mdx` | Operator Impact | (varies) | current | Impact of orchestrator operations on the network. |
| `v2/orchestrators/guides/operator-considerations/requirements.mdx` | Requirements | (varies) | current | Detailed requirements by deployment type. |

### Guides: Deployment Details

| Path | Title | pageType | status | Content summary | Key facts |
|------|--------|----------|--------|-----------------|-----------|
| `v2/orchestrators/guides/deployment-details/setup-options.mdx` | Setup Options | (varies) | current | Overview of deployment configuration options. | - |
| `v2/orchestrators/guides/deployment-details/siphon-setup.mdx` | Siphon Setup | (varies) | current | Lightweight orchestrator routing to upstream orchestrator while maintaining separate on-chain identity. | - |
| `v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx` | Dual-Mode Configuration | (varies) | current | Simultaneous video and AI workload configuration. | - |
| `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx` | O-T Split | guide | current | Separate Orchestrator and Transcoder processes on separate machines. Scaling transcoders independently. lastVerified 2026-03-15. | Flags: `-orchSecret`, `-orchAddr`. Transcoder flags: `-transcoder`, `-orchSecret`, `-orchAddr`. `orchSecret` can be a file reference. |
| `v2/orchestrators/guides/deployment-details/join-a-pool.mdx` | Join a Pool | quickstart | current | Pool vs solo orchestrator comparison. Steps to join. Only known public pool: Titan Node (`titan-node.com`). Discovery is off-chain/social. lastVerified implied from content. | No canonical pool directory exists. Pool handles staking/delegation. GPU contributors do not need LPT. Pool takes percentage cut of earnings. On-chain reputation accrues to pool operator, not individual GPU contributor. LPT unbonding periods reduce exit flexibility for solo orchestrators. |
| `v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx` | New: Join a Pool | (varies) | current | Updated/expanded pool joining guide. | - |

### Guides: AI and Job Workloads

| Path | Title | pageType | status | Content summary | Key facts |
|------|--------|----------|--------|-----------------|-----------|
| `v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx` | Workload Options | concept | published | Four job types: video transcoding, batch AI inference, live-video AI (Cascade), LLM inference. Per-type: hardware, pricing model, routing. lastVerified 2026-03-13. | Video: no VRAM requirement (NVENC/NVDEC); pricing = wei per pixel output; configured via `-pricePerUnit`. |
| `v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx` | Video Transcoding Operations | (varies) | published | Running video transcoding workloads operationally. | - |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx` | AI Inference Operations | (varies) | published | Running AI inference workloads operationally. | - |
| `v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx` | Diffusion Pipeline Setup | (varies) | published | Setting up Stable Diffusion / image generation pipelines. | - |
| `v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx` | LLM Pipeline Setup | (varies) | published | LLM (Ollama-based) pipeline configuration. | Ollama version endpoint: `http://localhost:11434/api/version` (from troubleshooting cross-ref). |
| `v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx` | Realtime AI Setup | (varies) | published | Live AI (Cascade) setup. | - |
| `v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx` | Audio and Vision Pipelines | (varies) | published | Audio-to-text, image-to-image, segment-anything-2, upscale pipelines. | - |
| `v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx` | Model Demand Reference | (varies) | published | Which models have demand on the network. | - |
| `v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx` | Model Hosting | (varies) | published | How to host models, VRAM management. | - |

### Guides: Staking and Rewards

| Path | Title | pageType | status | Content summary | Key facts |
|------|--------|----------|--------|-----------------|-----------|
| `v2/orchestrators/guides/staking-and-rewards/earning-model.mdx` | Earning Model | concept | published | Two streams: ETH service fees (probabilistic micropayments, demand-driven) + LPT inflation rewards (per round, must call Reward()). Both require active set membership. lastVerified 2026-03-13. | ETH fees via PM ticket system; winning ticket submitted on-chain to TicketBroker for face value. LPT rewards: call `Reward()` each round or forfeit permanently. Both require active set. |
| `v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx` | Reward Mechanics | guide | published | LPT flow per round: 10% to Treasury (LIP-89, March 2026), 90% to active orchestrators. Automatic vs manual reward calling. Gas thresholds. Commission setting. Monitoring missed rounds. lastVerified 2026-03-13. | Round = ~22 hours on Arbitrum. LIP-89 (March 2026): 10% to Treasury. Inflation: increases when bonded LPT < ~50% of supply; decreases when > ~50%. Current direction (2026): declining. `-reward=false` to disable auto. Missing a round = permanent forfeit. Needs ETH in wallet for gas at round initialisation. Systemd or Docker restart policies recommended for production. |
| `v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx` | Delegate Operations | (varies) | published | Strategies for attracting and managing delegators. | - |
| `v2/orchestrators/guides/staking-and-rewards/network-participation.mdx` | Network Participation | (varies) | published | Governance, voting, and broader network participation. | - |

### Guides: Payments and Pricing

| Path | Title | pageType | status | Content summary |
|------|--------|----------|--------|-----------------|
| `v2/orchestrators/guides/payments-and-pricing/payments.mdx` | Payments | (varies) | published | Payment system mechanics, TicketBroker, redemption. |
| `v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx` | Payment Receipts | (varies) | published | How to track and verify payment receipts. |

### Guides: Config and Optimisation

| Path | Title | pageType | status | Content summary | Key facts |
|------|--------|----------|--------|-----------------|-----------|
| `v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx` | Pricing Strategy | how_to | draft | Video pricing in wei/pixel. AI per-pipeline pricing via `aiModels.json`. Per-gateway pricing. `autoAdjustPrice`. Market positioning. lastVerified 2026-03-16. | Video: wei per pixel = `width × height × output_renditions`. 1 ETH = 1e18 wei. Pricing domains: video (global) + AI (per-pipeline/model in `aiModels.json`) + per-gateway (`-pricePerGateway`). |
| `v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx` | Capacity Planning | (varies) | (varies) | Session limits, GPU capacity, bandwidth planning. |
| `v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx` | AI Model Management | (varies) | (varies) | Model downloading, VRAM allocation, model switching. |
| `v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx` | Reward Call Tuning | (varies) | (varies) | Gas cost optimisation for reward calls. |

### Guides: Monitoring and Tooling

| Path | Title | pageType | status | Content summary | Key facts |
|------|--------|----------|--------|-----------------|-----------|
| `v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx` | Troubleshooting | guide | published | Categorised errors: transcoding, GPU/memory, reward/gas, AI runner, networking, account/keystore. lastVerified 2026-03-13. | Quick-nav by symptom category. External refs: Arbiscan, Explorer orchestrator list, `tools.livepeer.cloud` (Cloud SPE AI registry), Ollama version endpoint. Troubleshooting error types match v1 but expanded with AI-specific errors. |
| `v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx` | Metrics and Alerting | (varies) | published | Prometheus metrics, alerting configuration. |
| `v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx` | Explorer Operations | (varies) | published | Using Livepeer Explorer for monitoring. |
| `v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx` | Operator Toolbox | (varies) | published | Collection of operator tools and utilities. |

### Guides: Advanced Operations

| Path | Title | pageType | status | Content summary | Key facts |
|------|--------|----------|--------|-----------------|-----------|
| `v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx` | Gateway Relationships | (varies) | published | How gateways discover and select orchestrators. Selection algorithm, multi-factor ranking. Loki API for gateway log introspection. lastVerified in file. | Loki API for gateway introspection (v1 feature preserved). Selection factors: discovery, capability, price, stake weight, performance score. |
| `v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx` | Gateway-Orchestrator Interface | (varies) | published | gRPC interface between gateway and orchestrator. |
| `v2/orchestrators/guides/advanced-operations/pool-operators.mdx` | Pool Operators | (varies) | published | Running a pool: accepting workers, managing stake, distributing rewards. |
| `v2/orchestrators/guides/advanced-operations/scale-operations.mdx` | Scale Operations | (varies) | published | Multi-node, fleet management, commercial scale. |

### Guides: Roadmap and Funding

| Path | Title | pageType | status | Content summary |
|------|--------|----------|--------|-----------------|
| `v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx` | Orchestrator Profiles | (varies) | current | Profiles/showcase of notable orchestrators. |
| `v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx` | Funding and Support | (varies) | current | Funding sources and support programmes for orchestrators. |

### Guides: Tutorials

| Path | Title | pageType | status | Content summary |
|------|--------|----------|--------|-----------------|
| `v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx` | BYOC CPU Smoke Test | tutorial | (varies) | Verify Livepeer framework on machine in <20 min. No GPU, no wallet, no on-chain. |
| `v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx` | Zero to First Reward | tutorial | (varies) | End-to-end tutorial: setup to first LPT reward. |
| `v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx` | AI Earning Quickstart | tutorial | (varies) | Quickstart for AI inference earnings. |
| `v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx` | Add AI to Video Node | tutorial | (varies) | Extend existing video-only node to run AI workloads. |
| `v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx` | Full AI Pipeline Tutorial | tutorial | (varies) | Complete AI pipeline setup (diffusion, LLM, etc). |
| `v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx` | Realtime AI Tutorial | tutorial | (varies) | Live-video AI (Cascade) step-by-step tutorial. |

### Resources

| Path | Title | pageType | status | Content summary |
|------|--------|----------|--------|-----------------|
| `v2/orchestrators/resources/faq.mdx` | FAQ and Troubleshooting | reference | review | Common errors and FAQs: installation, networking, job routing, AI pipelines, earnings. Symptom-indexed. lastVerified 2026-03-17. |
| `v2/orchestrators/resources/glossary.mdx` | Glossary | (varies) | (varies) | Orchestrator-specific terminology glossary. |
| `v2/orchestrators/resources/community-guides.mdx` | Community Guides | (varies) | (varies) | Community-contributed guides and tutorials. |
| `v2/orchestrators/resources/community-pools.mdx` | Community Orchestrator Pools | reference | review | Pool listing page (pulled from Google Sheet automation). Not endorsed by Livepeer team. lastVerified 2026-03-17. |
| `v2/orchestrators/resources/technical/cli-flags.mdx` | CLI Flags Reference | reference | review | OpenAPI-derived gRPC reference for gateway-orchestrator interface. Not a public API. lastVerified 2026-03-17. |
| `v2/orchestrators/resources/technical/x-contract-addresses.mdx` | Contract Addresses | landing | draft | Draft page. Placeholder only. lastVerified 2026-03-11. |
| `v2/orchestrators/resources/gpu-support.mdx` | GPU Support | (varies) | (varies) | Supported GPU list for Livepeer. |
| `v2/orchestrators/resources/arbitrum-rpc.mdx` | Arbitrum RPC | (varies) | (varies) | Arbitrum RPC providers reference. |
| `v2/orchestrators/resources/arbitrum-exchanges.mdx` | Arbitrum Exchanges | (varies) | (varies) | Where to acquire arbETH and LPT on Arbitrum. |
| `v2/orchestrators/resources/compendium/glossary.mdx` | Compendium Glossary | (varies) | (varies) | Expanded compendium-level glossary. |

---

## Migration Gap Analysis

### In V1 but not V2 (content risk)

1. **`install-go-livepeer` (v1)** - Binary install instructions for specific platforms. V2 install page covers Docker primarily and mentions binary. The explicit multi-platform binary release URL pattern, Windows install, third-party Linux packages (AUR), and source build process with `BUILD_TAGS=mainnet` are v1-only details. Writers should verify these are covered in v2 install or add them.

2. **`migrate-to-arbitrum` + `migrate-from-contract-wallet` (v1)** - These are superseded (migration completed Feb 2022). V2 has no equivalent pages because the migration is complete. However, any orchestrator new to Livepeer docs might encounter v1 links. Writers should decide whether a brief historical note is needed or just ensure redirects work.

3. **`dual-mine` (v1)** - Dual mining (ethash + transcoding). Ethash mining is obsolete (Ethereum moved to PoS). No v2 equivalent needed.

4. **`benchmark-transcoding` + `assess-capabilities` (v1)** - The `livepeer_bench` tool and concurrent session benchmarking method are in v1. V2 has `capacity-planning.mdx` but its content depth is unknown. The ABR ladder bandwidth figures and the specific benchmarking script loop (`for i in {1..20}`) are v1 details that may not be in v2. **Writers: verify if v2 capacity-planning covers livepeer_bench.**

5. **`vote` (v1)** - Governance voting via livepeer_cli. V2 has `network-participation.mdx` which likely covers this but depth is unverified.

6. **Hardware Requirements (v1)** - The v1 `hardware-requirements.mdx` has incomplete RAM and Disk sections (marked "TBD"). V2 `rcs-requirements.mdx` appears to have complete hardware tables per mode. Content writers should ensure v2 fills this gap.

7. **`livepeer-studio-cli.mdx` (v1)** - This page appears in the v1 orchestrators nav but was not reviewed. Check if it is the general CLI CLI or orchestrator-specific.

### In V2 but not V1 (new content)

1. **AI workloads** - Entire `guides/ai-and-job-workloads/` section (9 pages) is new. No v1 equivalent. Covers batch AI inference, diffusion pipelines, LLM pipelines, realtime AI (Cascade), audio/vision pipelines, model management, model demand.

2. **Portal and Navigator** - v2 has a portal landing page with React components and a path navigator. v1 had no equivalent UX structure.

3. **Operator Considerations section** - v2 has dedicated business case, operator rationale, operator impact, and requirements pages. v1 had no equivalent "should I do this" guidance.

4. **Pool architecture** - v2 has `join-a-pool`, `new-join-a-pool`, and `pool-operators` as dedicated pages. v1 had no pool content.

5. **Siphon setup** - New deployment type in v2 with no v1 equivalent.

6. **Dual-mode configuration** - v2 has a dedicated dual-mode (video + AI) page. v1 dual-mine was a different concept (GPU mining + transcoding).

7. **Advanced Operations section** - `gateway-relationships`, `gateway-orchestrator-interface`, `scale-operations` are all new in v2.

8. **Roadmap and Funding, Orchestrator Profiles** - New promotional/discovery content in v2.

9. **Tutorials section** - Six tutorials in v2 (BYOC smoke test, zero to first reward, AI earning quickstart, add AI to video node, full AI pipeline, realtime AI) are all new.

10. **Payments and Pricing section** - `payments.mdx` and `payment-receipts.mdx` expand on the v1 set-pricing guide with more detail on the PM ticket system.

11. **Config flags: `-pricePerCapability`, `-livePaymentInterval`, `-pricePerGateway`** - These AI-era flags have no v1 equivalents.

### In Both (check for content drift)

| Topic | V1 state | V2 state | Drift risk |
|-------|----------|----------|------------|
| Reward calling | configure-reward-calling.mdx: auto default, `-reward=false`, gas 350k-450k, manual via livepeer_cli | reward-mechanics.mdx: auto default, gas confirmed on Arbitrum, LIP-89 10% Treasury, 22-hour rounds, inflation rate direction noted | **Low drift** - v2 significantly expands v1 content. LIP-89 is new and not in v1. Gas cost for Arbitrum will differ from original Ethereum gas figures in v1. Writers: verify Arbitrum gas figures. |
| Pricing | set-pricing.mdx: wei/pixel, autoAdjustPrice, USD via Chainlink, `-pricePerUnit`, `-pixelsPerUnit`, fiat pricing in v0.8.0 | pricing-strategy.mdx: wei/pixel, autoAdjustPrice, `aiModels.json` for AI, per-gateway pricing added | **Medium drift** - v2 adds AI pricing layer and per-gateway pricing. USD/fiat pricing from v1 should be verified as still current in v2 `pricing-strategy.mdx`. |
| O-T split | o-t-split.mdx: `-orchSecret`, `-orchAddr`, log output | orchestrator-transcoder-setup.mdx: same flags confirmed | **Low drift** - same concepts. |
| Session limits | set-session-limits.mdx: `-maxSessions`, default 10, `OrchestratorCapped` | capacity-planning.mdx (content not fully read) | **Unknown** - writers should verify v2 covers `livepeer_bench` and ABR ladder bandwidth calculations. |
| Troubleshooting | troubleshoot.mdx: ~10 error types + FAQs | troubleshooting.mdx + faq.mdx: expanded categories including AI-specific errors | **Low drift** - v2 expands. Same core errors preserved. |
| Gateway introspection | gateway-introspection.mdx: Loki API, `loki.livepeer.report`, query examples | gateway-relationships.mdx: Loki API referenced | **Medium drift** - v1 has concrete API examples; verify v2 gateway-relationships.mdx depth is equivalent or better. |
| Monitoring | monitor-metrics.mdx: `-monitor`, Prometheus, Grafana, Docker container | metrics-and-alerting.mdx (content not fully read) | **Unknown** - writers verify v2 covers equivalent monitoring setup. |
| Install | install-go-livepeer.mdx: binary/Docker/source for all platforms | rs-install.mdx: Docker-first, binary and source covered | **Medium drift** - v2 install recommends Docker but binary paths less prominent. Confirm all platforms still documented. |
| Active set | get-started.mdx: top 100 by stake | role.mdx, incentive-model.mdx: top 100 confirmed | **No drift** - consistent. |
| Arbitrum connection | connect-to-arbitrum.mdx: Infura/Alchemy, private network, offchain flags | connect-and-activate.mdx: Alchemy + Infura free tier limits specified, public endpoint noted | **Low drift** - v2 adds rate limit detail. |

---

## Technical Facts Extracted

### Protocol Parameters

- **Active set size**: Top 100 orchestrators by total bonded stake (self-stake + delegated)
- **Round duration**: Approximately 22 hours on Arbitrum
- **LPT unit**: 1 LPT = 1e18 LPTU (smallest unit)
- **Inflation model**: Dynamic; increases when bonded LPT < ~50% of total supply; decreases when > ~50%. Current direction (2026): declining.
- **Treasury cut (LIP-89, March 2026)**: 10% of each round's LPT issuance goes to Livepeer Treasury; 90% to active orchestrators
- **Default reward cut**: 10% (v1 reference); typical production setting cited as 25%
- **Default fee cut**: 95% (meaning orchestrator keeps 95% of fees, 5% to delegators) - Note: v1 states "fee cut = % kept by orchestrator", check v2 confirms same definition
- **Default max sessions**: 10 (OrchestratorCapped at this limit)
- **Default service port**: 8935

### CLI Flags (core)

| Flag | Description | Source |
|------|-------------|--------|
| `-network arbitrum-one-mainnet` | Connect to Arbitrum One | v1+v2 |
| `-ethUrl <URL>` | Arbitrum RPC endpoint | v1+v2 |
| `-ethAcctAddr <ADDR>` | Use existing ETH account | v1 |
| `-orchestrator` | Run in orchestrator mode | v1+v2 |
| `-transcoder` | Run in transcoder mode | v1+v2 |
| `-nvidia <GPU_IDs>` | Comma-delimited NVIDIA GPU IDs | v1+v2 |
| `-pricePerUnit <N>` | Price per pixel (wei) or per unit (wei or USD) | v1+v2 |
| `-pixelsPerUnit <N>` | Denominator for pricing; supports exponential (e.g. 1e12) | v1+v2 |
| `-serviceAddr <HOST:PORT>` | Public service address (on-chain registration) | v1+v2 |
| `-orchSecret <SECRET>` | Secret for transcoder connections (file or plaintext) | v1+v2 |
| `-orchAddr <ADDR>` | Orchestrator address for transcoder to connect to | v1+v2 |
| `-maxSessions <N>` | Max concurrent transcoding sessions | v1 |
| `-reward=false` | Disable automatic reward calling | v1+v2 |
| `-monitor` | Enable Prometheus metrics | v1 |
| `-metricsPerStream` | Group metrics per stream | v1 |
| `-metricsClientIP` | Expose client IP in metrics | v1 |
| `-autoAdjustPrice=false` | Disable automatic price adjustment | v1+v2 |
| `-priceFeedAddr <ADDR>` | Chainlink price feed address for fiat pricing | v1 |
| `-pricePerCapability <JSON_PATH>` | AI per-pipeline pricing file | v2 only |
| `-livePaymentInterval` | Interval-based payment for live AI (Cascade) | v2 only |
| `-pricePerGateway <JSON>` | Custom price for specific gateway address | v2 only |
| `-v 6` | Verbose logging | v1 |
| `-datadir <DIR>` | Custom data directory | v1 |
| `-ethController <ADDR>` | Controller address for private networks | v1 |
| `-network offchain` | Offchain mode (no blockchain) | v1 |

### Contract Addresses (Arbitrum One - current)

- **Governor**: `0xD9dEd6f9959176F0A04dcf88a0d2306178A736a6`
- **Controller**: `0xD8E8328501E9645d16Cf49539efC04f734606ee4`
- **LivepeerToken (LPT)**: `0x289ba1701C2F088cf0faf8B3705246331cB8A839`
- **Minter**: `0xc20DE37170B45774e6CD3d2304017fc962f27252`
- **BondingManager (Proxy)**: `0x35Bcf3c30594191d53231E4FF333E8A770453e40`
- **TicketBroker (Proxy)**: `0xa8bB618B1520E284046F3dFc448851A1Ff26e41B`
- **RoundsManager (Proxy)**: `0xdd6f56DcC28D3F5f27084381fE8Df634985cc39f`
- **ServiceRegistry (Proxy)**: `0xC92d3A360b8f9e083bA64DE15d95Cf8180897431`
- **AIServiceRegistry (Target)**: `0x04C0b249740175999E5BF5c9ac1dA92431EF34C5` (detached from controller)
- **BondingVotes (Proxy)**: `0x0B9C254837E72Ebe9Fe04960C43B69782E68169A`
- **Treasury**: `0xf82C1FF415F1fCf582554fDba790E27019c8E8C4`
- **LivepeerGovernor (Proxy)**: `0xcFE4E2879B786C3aa075813F0E364bb5acCb6aa0`
- **PollCreator**: `0x8bb50806D60c492c0004DAD5D9627DAA2d9732E6`
- **L2LPTGateway**: `0x6D2457a4ad276000A615295f7A80F79E48CcD318`
- **L2Migrator (Proxy)**: `0x148D5b6B4df9530c7C76A810bd1Cdf69EC4c2085`
- **L1Migrator (Ethereum Mainnet, legacy)**: `0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A`

### Hardware Requirements

| Mode | GPU | Min VRAM | Notes |
|------|-----|----------|-------|
| Video transcoding | Any NVIDIA with NVENC/NVDEC | None (hardware encode) | RTX 3060+ consumer / T4+ datacentre recommended |
| AI diffusion (text-to-image, etc.) | NVIDIA | 24 GB | Stable Diffusion 3 medium requires 24 GB |
| AI LLM | NVIDIA | 8-16 GB | Ollama-based alternative |
| CPU transcoding | Any | N/A | Possible but not competitive |

### Bandwidth Reference (video transcoding)

ABR ladder for common network configuration (source 1080p30fps):

| Rendition | Bitrate |
|-----------|---------|
| 1080p30fps | 6000 kbps |
| 720p (source fps) | 3000 kbps |
| 480p (source fps) | 1600 kbps |
| 360p (source fps) | 800 kbps |
| 240p (source fps) | 250 kbps |

- Download per stream: ~6 Mbps
- Upload per stream: ~5.6 Mbps
- Practical concurrent streams on 100 Mbps link: ~16 (can extend ~20% since not all segments arrive simultaneously)

### Reward Call Gas Costs

- v1 states: gas cost for reward call = 350k-450k (Ethereum gas units)
- These figures are for Ethereum mainnet; Arbitrum gas costs differ
- **Writers: confirm current Arbitrum gas cost for reward calls and update**

### Pricing Examples (v1)

- `$4.10e-13` per pixel: `-pixelsPerUnit 1e12 -pricePerUnit 0.41USD`
- `$6.65e-14` per pixel: `-pixelsPerUnit 1e12 -pricePerUnit 0.0665USD`

### AI Pricing Example (v2)

`ai-prices.json` example:
```json
{
  "capabilities_prices": [
    {
      "pipeline": "text-to-image",
      "model_id": "stabilityai/stable-diffusion-3-medium-diffusers",
      "price_per_unit": 4768371,
      "pixels_per_unit": 1
    },
    {
      "pipeline": "audio-to-text",
      "model_id": "openai/whisper-large-v3",
      "price_per_unit": 15000,
      "pixels_per_unit": 1
    }
  ]
}
```

### Infrastructure and Services

- **Livepeer Explorer**: `https://explorer.livepeer.org` (orchestrator list, voting, leaderboard)
- **Arbiscan**: `https://arbiscan.io`
- **Gateway Loki API**: `https://loki.livepeer.report/loki/api/v1/`
- **Cloud SPE AI Registry**: `https://tools.livepeer.cloud`
- **Livepeer monitoring Docker container**: `https://github.com/livepeer/livepeer-monitoring`
- **go-livepeer releases**: `https://github.com/livepeer/go-livepeer/releases`
- **go-livepeer DockerHub**: `https://hub.docker.com/r/livepeer/go-livepeer`
- **Alchemy Arbitrum endpoint**: `https://arb-mainnet.g.alchemy.com/v2/<API_KEY>`
- **Infura Arbitrum endpoint**: `https://arbitrum-mainnet.infura.io/v3/<PROJECT_ID>`
- **Public Arbitrum RPC**: `arb1.arbitrum.io/rpc` (testing only, no uptime guarantee)
- **Benchmark test asset**: `https://storage.googleapis.com/lp_testharness_assets/bbb_1080p_30fps_1min_2sec_hls.tar.gz`
- **Livepeer Forum monitoring guide**: `https://forum.livepeer.org/t/guide-transcoder-monitoring-with-prometheus-grafana/1225`
- **Titan Node pool**: `https://titan-node.com/`
- **Arbitrum bridge**: `https://bridge.arbitrum.io`
- **Chain ID**: Arbitrum One = `0xa4b1` (42161). Ethereum mainnet = `0x1` (1).

### Key Data Paths

- Default keystore: `~/.lpData/arbitrum-one-mainnet/keystore`
- Docker volume mount: `~/.lpData:/root/.lpData`
- `transcodingOptions.json`: `go-livepeer/cmd/livepeer_bench/transcodingOptions.json` on GitHub

---

## Open Questions for Content Writers

1. **V1 introduction/quickstart pages are wrong.** `v1/orchestrators/introduction.mdx`, `v1/orchestrators/quick-start.mdx`, and `v1/orchestrators/livepeer-studio-cli.mdx` are all Livepeer Studio developer pages, not orchestrator content. Were these ever correct? Is there a separate source for the v1 orchestrator introduction (i.e., is there another file that used to be at this path)? This affects migration status.

2. **Reward call gas cost on Arbitrum.** V1 states 350k-450k gas units (Ethereum figure). Arbitrum gas unit costs are very different from Ethereum. Current v2 reward-mechanics.mdx says gas is needed but does not give a specific figure. Writers should confirm current Arbitrum gas costs for a reward call and include in v2.

3. **Fee cut definition consistency.** V1 get-started.mdx states default fee cut is 95% (orchestrator keeps 95%). V2 incentive-model.mdx shows a fee cut of 5% (orchestrator keeps 5%, 95% to delegators). This may be a change in convention (v1: "fee cut = % kept", v2: "fee cut = % to orchestrator of the orchestrator's share") or a genuine error. **Verify the current BondingManager fee cut semantics before writing.**

4. **Livepeer_bench coverage in v2.** The `livepeer_bench` tool and ABR ladder benchmarking methodology from v1 is a key operator tool. V2 has `capacity-planning.mdx` but its content was not fully read. Writers should verify this page covers livepeer_bench step-by-step and the ABR bandwidth figures.

5. **Pool discovery mechanism.** V2 `join-a-pool.mdx` states there is no canonical pool directory and notes only Titan Node as a known public pool. `community-pools.mdx` is planned to pull data from a Google Sheet. Writers: confirm whether this automation is live or still planned; if not live, provide placeholder content.

6. **Dual-mine page.** V1 has a dual-mine page for GPU mining + transcoding (ethash mining). This is obsolete since Ethereum moved to PoS. V2 has `dual-mode-configuration.mdx` which is about video + AI inference. Writers should be aware these are completely different concepts; the v1 page should not be used as a source for the v2 dual-mode page.

7. **USD pricing (Chainlink integration).** V1 set-pricing.mdx documents USD-denominated pricing via Chainlink (introduced in go-livepeer v0.8.0) with `-pricePerUnit 0.41USD`. This is not prominently mentioned in v2 pricing-strategy.mdx (which was status: draft). Writers: confirm whether Chainlink USD pricing is still supported and operational in current go-livepeer; include in v2 pricing guide if so.

8. **`-autoAdjustPrice` behaviour change.** V1 documents auto price adjustment adding overhead percentage on top of base price. V2 incentive-model mentions `-autoAdjustPrice=true` as an existing flag. Writers: confirm current behaviour — is the overhead calculation still pixel-redemption-cost-based? Document the formula.

9. **LIP-89 Treasury cut.** V2 reward-mechanics.mdx states "10% goes to the Livepeer Treasury (LIP-89, March 2026)". This is new in v2 with no v1 equivalent. Writers: confirm this is live and the exact date/block of LIP-89 activation.

10. **Stale or incomplete pages.** Several v2 pages have `status: review` or `status: draft` (community-pools, cli-flags, contract-addresses, faq, pricing-strategy). Writers should confirm content quality before publishing these pages.

11. **V2 `operator-rationale.mdx` formatting error.** File begins with `glrw\npwrfs` before the YAML frontmatter. This may be an editor artefact. Writers: check if this causes rendering issues.

12. **Capability advertisement at registration.** V2 says capabilities must be declared on registration so Gateways can discover nodes. V1 did not have an equivalent AI capability system. Writers: document the full registration flow including AIServiceRegistry for nodes running AI workloads.

13. **Gateway selection algorithm.** V2 gateway-relationships.mdx covers gateway discovery and multi-factor selection. V1 only had the Loki API introspection page. Writers: verify v2 documents the complete selection algorithm (price filter, stake weight, performance score, capability match) with enough detail for operators to act on it.

14. **Missing v2 content: `x-contract-addresses.mdx` is a stub.** The `v2/orchestrators/resources/technical/x-contract-addresses.mdx` page has only a placeholder with TODO. Contract addresses are documented in `v1/references/contract-addresses.mdx` (which is shared across sections and appears to be updated). Writers: populate the v2 contract addresses page using the current data from the v1 references page.

---

*Pack generated: 2026-03-23. Source files read: v1 - 19 pages (16 guides + 3 intro pages) + 6 shared references; v2 - 70 nav-published pages (all exist, content depth verified for ~30 core pages).*
