# Gateways Content Research Pack

## Purpose

This pack consolidates all existing v1 and v2 gateway content into a single reference for content writers working on the Gateways tab rewrite — use it to understand what content already exists, what is missing, and which technical facts have been confirmed from source files.

---

## V1 Content Inventory

V1 gateway content lives in two separate locations: `v1/gateways/` (the main Gateways dropdown) and `v1/ai/gateways/` (AI-specific gateway guides). Three files in `v1/gateways/` (`introduction.mdx`, `quick-start.mdx`, `livepeer-studio-cli.mdx`) are mis-filed — they contain Livepeer Studio developer content, not gateway operator content.

### v1/gateways/ pages

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v1/gateways/introduction.mdx` | Introduction | **MIS-FILED** | Studio developer intro — SDK links, API key creation, React player example. No gateway operator content. | npm SDK install: `npm install livepeer @livepeer/react` |
| `v1/gateways/quick-start.mdx` | Quickstart | **MIS-FILED** | Studio developer quickstart — API key creation, JS SDK setup, React player code. Not gateway content. | playbackId example: `f5eese9wwl88k4g8` |
| `v1/gateways/livepeer-studio-cli.mdx` | CLI | **MIS-FILED** | Studio CLI for generating new Livepeer apps (`npx @livepeer/create`). Not gateway content. | `npx @livepeer/create` |
| `v1/gateways/guides/gateway-overview.mdx` | Overview | migrated to v2 | Navigation page for the gateway install guides. Lists install paths (Docker, Linux, Windows), prerequisites. Notes that gateway was previously called "Broadcaster" — some commands/labels still use that name. Developed with Ubuntu Linux 22.04, Docker 20.10.14, Livepeer 0.7.2. | Ubuntu 22.04, Docker 20.10.14, Livepeer 0.7.2; requires Arbitrum RPC URL (Infura/Alchemy or self-hosted); `install-go-livepeer` reference |
| `v1/gateways/guides/docker-install.mdx` | Docker Install | migrated to v2 | Step-by-step Docker installation: Docker volume `gateway-lpData` at `/var/lib/docker/volumes/gateway-lpData/_data`; container volume mount at `/root/.lpData`; Docker 20.10.x required; full docker-compose.yml template provided; ETH account creation flow; eth-secret.txt password file pattern. | Docker volume name: `gateway-lpData`; container mount: `/root/.lpData`; ports: `1935:1935`, `8935:8935`; flags: `-ethUrl`, `-ethKeystorePath`, `-ethPassword`, `-network=arbitrum-one-mainnet`, `-cliAddr=gateway:5935`, `-broadcaster=true`, `-monitor=true`, `-v=99`, `-blockPollingInterval=20`, `-maxPricePerUnit=300`, `-pixelsPerUnit=1`, `-rtmpAddr=0.0.0.0:1935`, `-httpAddr=0.0.0.0:8935`; CLI: `livepeer_cli -host gateway -http 5935`; image: `livepeer/go-livepeer:<RELEASE_VERSION>` |
| `v1/gateways/guides/linux-install.mdx` | Linux Install | migrated to v2 | Linux binary installation: download from GitHub releases, unpack, move to `/usr/local/bin/`; generate keystore using `-gateway` flag; create password file at `/usr/local/bin/lptConfig/node.txt`; systemd service setup. | Binary path: `livepeer-linux-amd64.tar.gz`; install path: `/usr/local/bin/`; config dir: `/usr/local/bin/lptConfig/`; service file: `/etc/systemd/system/livepeer.service`; startup flags: `-network arbitrum-one-mainnet`, `-cliAddr=127.0.0.1:5935`, `-ethPassword`, `-maxPricePerUnit=300`, `-broadcaster=true`, `-serviceAddr=<IP>:8935`, `-rtmpAddr=0.0.0.0:1935`, `-httpAddr=0.0.0.0:8935`, `-monitor=true`, `-v 6`; CLI: `livepeer_cli -host 127.0.0.1 -http 5935` |
| `v1/gateways/guides/windows-install.mdx` | Windows Install | migrated to v2 | Windows binary installation: download zip from GitHub, create .bat file with launch flags, create password file at `C:\Users\<USER>\.lpData\ethsecret.txt`, add `-ethPassword` flag. Optional NSSM or Task Scheduler for autostart. | Binary: `livepeer-windows-amd64.zip`; password file: `C:\Users\<USER>\.lpData\ethsecret.txt`; startup flags: `-network=arbitrum-one-mainnet`, `-cliAddr=127.0.0.1:5935`, `-serviceAddr=<IP>:8935`, `-broadcaster`, `-maxPricePerUnit=300`, `-pricePerUnit=1`, `-monitor=true`, `-v=6`, `-rtmpAddr=0.0.0.0:1935`, `-httpAddr=0.0.0.0:8935`, `-blockPollingInterval=20`; CLI: `livepeer_cli.exe -host 127.0.0.1 -http 5935` |
| `v1/gateways/guides/transcoding-options.mdx` | Configure Transcoding Options | migrated to v2 | JSON transcoding profile configuration: how to create transcodingOptions.json with resolution/bitrate ladder; how to apply to Docker, Linux, and Windows installs via `-transcodingOptions` flag. | transcodingOptions.json template: 480p (854x480, 1.6Mbps), 720p (1280x720, 3Mbps), 1080p (1920x1080, 6.5Mbps), all H264 constrained high, fps=0, gop="1"; Linux path: `/usr/local/bin/lptConfig/transcodingOptions.json`; Windows path: `C:\Users\<USER>\.lpData\transcodingOptions.json`; Docker path: `/root/.lpData/transcodingOptions.json`; flag: `-transcodingOptions=/path/to/transcodingOptions.json` |
| `v1/gateways/guides/fund-gateway.mdx` | Fund The Livepeer Gateway | migrated to v2 (superseded) | Funding the ETH account via Livepeer CLI: bridge ETH to Arbitrum via https://bridge.arbitrum.io/, then use CLI Option 11 to deposit. Split funds into Deposit and Reserve; example uses 0.1 ETH total (0.065 deposit, 0.03 reserve). | Production minimum reserve: **0.36 ETH** to prevent service interruptions during gas spikes (GitHub issue #3744); test minimum: 0.1 ETH total (0.065 deposit + 0.03 reserve); payment per transcoding = reserve / 100 (example: 0.0003 ETH); CLI Option 11: "Invoke deposit broadcasting funds (ETH)"; CLI Option 1: "Get node status" → BROADCASTER STATS |
| `v1/gateways/guides/publish-content.mdx` | Publish Content | orphaned (no v2 equivalent) | Publishing RTMP streams to gateway via FFmpeg CLI and OBS Studio GUI. FFmpeg test stream command, recorded file stream command, OBS settings. | RTMP ingest: `rtmp://<IP>:1935/<stream_key>`; FFmpeg test: `size=1280x720:rate=30`, H264, `keyint=60`, `-c:a aac`; OBS: Service=Custom, Keyframe Interval=1; HTTP playback: `http://<IP>:8935/stream/<KEY>.m3u8` |
| `v1/gateways/guides/playback-content.mdx` | Playback Content | orphaned (no v2 equivalent) | VLC playback instructions: open network stream, enter HLS URL. | Playback URL format: `http://<GATEWAY IP>:8935/stream/<STREAM_KEY>.m3u8`; VLC: Media > Open Network Stream (Ctrl-N) |

### v1/ai/gateways/ pages

These appear under the AI tab's Orchestrators section in docs.json, not the Gateways dropdown — they are AI-specific gateway guides that predate the v2 unified gateway tab.

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v1/ai/gateways/get-started.mdx` | Get Started | superseded by v2 AI config pages | Introduction to running a gateway for AI inference task routing. Builds on the general gateway setup guide. Prerequisites: Linux only (Windows/macOS "coming soon"), root access. | Linux-only for AI gateway at time of writing; references `/gateways/guides/gateway-overview` as prerequisite |
| `v1/ai/gateways/start-gateway.mdx` | Start your AI Gateway | superseded by v2 AI config pages | Full off-chain AI gateway setup via Docker (recommended) and binaries. Docker pull `livepeer/go-livepeer:master`; off-chain launch with `-gateway`, `-orchAddr`, `-httpAddr 0.0.0.0:8937`, `-httpIngest` flags; startup output verification; port 8937 requirement. Test via text-to-image POST request. | Docker image: `livepeer/go-livepeer:master`; datadir: `~/.lpData2`; port: `8937`; flag set: `-gateway -orchAddr <list> -httpAddr 0.0.0.0:8937 -v 6 -httpIngest`; expected startup log includes `HTTP Server listening on http://0.0.0.0:8937`; test endpoint: `POST http://0.0.0.0:8937/text-to-image`; example model: `ByteDance/SDXL-Lightning` (1024x1024); orchestrator runs on port `8936` |
| `v1/ai/gateways/onchain.mdx` | On-chain Setup | superseded by v2 on-chain config | On-chain AI gateway setup — requires static IP or domain, funded ETH account for gas + inference payments. Additional flags over off-chain: `-aiServiceRegistry`, `-network=arbitrum-one-mainnet`, `-ethUrl=https://arb1.arbitrum.io/rpc`, `-ethKeystorePath`, `-ethAcctAddr`, `-ethPassword`, `-ethOrchAddr`, `-maxTotalEV=100000000000000`, `-maxPricePerUnit`, `-ignoreMaxPriceIfNeeded`, `-maxPricePerCapability`. Max price per capability via JSON file. | Key additional flags: `-aiServiceRegistry`; `-maxTotalEV=100000000000000`; Arb mainnet RPC: `https://arb1.arbitrum.io/rpc`; keystore: `/root/.lpData/arbitrum-one-mainnet/keystore`; ETH secret: `/root/.lpData/.eth_secret`; maxPricePerCapability JSON format: `capabilities_prices` array with `pipeline`, `model_id`, `price_per_unit`, `pixels_per_unit`; example prices: image-to-image ByteDance/SDXL-Lightning=1700000 wei/px, text-to-image stable-diffusion-3=4768371 wei/px, upscale=4768371 wei/px, image-to-video=3390842 wei/px, audio-to-text=12882811 wei/ms |

---

## V2 Content Inventory

V2 gateway content lives at `v2/gateways/`. The content scan (dated 2026-03-23) covers all 98 pages in the docs.json navigation. The table below summarises each page group; full per-page metadata is in `workspace/plan/active/CONTENT-WRITING/context-packs/gateways-content-scan.md`.

### Home / Navigation (2 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/portal` | Gateway Home Portal | current | Tab entry point — component-heavy routing page (portal card grid), no prose. Routes to quickstart, concepts, guides. | None — routing only |
| `v2/gateways/navigator` | Gateway Navigator | current | Disambiguation page routing by goal, operational mode (on-chain / off-chain / AI), and persona. | 3 operational modes: on-chain, off-chain, AI |

### Concepts (4 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/concepts/role` | The Gateway Role in the Livepeer Network | current | Technical, business, and network role of a gateway. Routes traffic between AI/video applications and orchestrator network. | Gateway as traffic router; 3 roles: technical, business, network; on-chain vs off-chain operational modes |
| `v2/gateways/concepts/capabilities` | Gateway Capabilities | current | Workload types (video transcoding, batch AI, real-time AI, BYOC), orchestrator selection, discovery methods. | Workload types: video, batch AI, real-time AI, BYOC; discovery methods listed |
| `v2/gateways/concepts/architecture` | Gateway Architecture | current | Request routing path from application to orchestrator, remote signer role, payment flows. | Remote signer architecture; application → gateway → orchestrator flow |
| `v2/gateways/concepts/business-model` | Gateway Business Model | current | Economics: payment flows, earnings, costs, currency (ETH on Arbitrum), operator models. | On-chain vs off-chain payment models; currency = ETH on Arbitrum One |

### Quickstart (3 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/quickstart/gateway-setup` | Run a Gateway: Quickstart Guide | current | Fastest path to running gateway in minimal off-chain config for testing. End-to-end test loop with orchestrator. | Off-chain minimum config; test loop pattern |
| `v2/gateways/guides/tutorials/byoc-cpu-tutorial` | BYOC smoke-test: CPU gateway and orchestrator | current | Hands-on tutorial: build CPU BYOC container, run orchestrator, run gateway off-chain. | CPU BYOC pipeline build; off-chain mode; also appears in Guides nav |
| `v2/gateways/quickstart/AI-prompt` | Get AI to Setup the Gateway | current | AI-assisted setup page — the page content IS a structured prompt for pasting into an AI assistant. Covers Linux (recommended for production) and macOS (dev/local). | Stage 0 (ask AI first), Stage 1 (OS-specific install); Linux recommended for production |

### Setup: Run A Gateway group (16 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/setup/run-a-gateway` | Run a Gateway | current | Overview/entry for Setup Guide — gateway modes, capabilities, architecture summary, operator journey. Overlaps concepts section. | 4 modes: off-chain, on-chain, AI, dual |
| `v2/gateways/setup/transcoding` | Gateway Transcoding Guide | **STUB** (~82 words, placeholder only) | Only a "Planned Structure" heading. Live dead-end in nav. | None |
| `v2/gateways/setup/requirements/setup` | Gateway Node Requirements | current | Hardware, OS, networking requirements by mode; OS compatibility table. | OS table; requirements by mode: off-chain, on-chain, AI, dual |
| `v2/gateways/setup/requirements/on-chain setup/on-chain` | On-Chain Setup Requirements | current (35KB) | ETH account setup on Arbitrum One, key management security, tooling options. Most substantial setup page. | Arbitrum One; ETH account creation; keystore security practices |
| `v2/gateways/setup/requirements/on-chain setup/fund-gateway` | Fund The Livepeer Gateway | current | Deposit ETH into on-chain payment account on Arbitrum One; bridge from mainnet if needed. | ETH deposit/reserve on Arbitrum One; bridging instructions |
| `v2/gateways/setup/install/install-overview` | Installation Overview | current | Entry for Installation group — available methods (Docker, Linux, Windows), routing page. | 3 install methods: Docker, Linux binary, Windows binary |
| `v2/gateways/setup/install/docker-install` | Docker Install | current | Docker pull, container config, ETH account creation, gateway start. | Docker recommended method |
| `v2/gateways/setup/install/linux-install` | Linux Install | current | Binary download, ETH password setup, systemd service. Note: H1-level headings mid-page (structural issue). | systemd service; binary install |
| `v2/gateways/setup/install/windows-install` | Windows Install | current (thin, 278 words) | Windows binary install. Thin content. | Windows bat file pattern |
| `v2/gateways/setup/install/community-projects` | Easy Install [DevOps & Community Projects] | current (thin, 233 words) | GWID (Gateway Wizard) tool, Gateway HUB project — links to community tooling. | GWID tool; Gateway HUB project |
| `v2/gateways/setup/configure/configuration-overview` | Configuration Overview | current | 2 config methods (CLI flags, config files), 4 config profiles (video, AI, dual, pricing), routing page. | Config methods: CLI flags vs config file; profiles: video, AI, dual, pricing |
| `v2/gateways/setup/configure/video-configuration` | Video Configuration | current (20KB) | Essential flags, CLI vs config file methods, practical examples for video transcoding. | Full flag set for video gateway; TL;DR config provided |
| `v2/gateways/setup/configure/ai-configuration` | AI Configuration | current | AI-specific flags, deployment steps for AI inference gateway, code links. | AI gateway flags; AI subnet connection |
| `v2/gateways/setup/configure/dual-configuration` | Configure AI & Video Dual Gateway Services | current | Combined AI+video configuration flags. Note: H1 heading mid-page in code context (structural issue). | Dual mode flag set; transcoding options combined with AI flags |
| `v2/gateways/setup/configure/pricing-configuration` | Pricing Configuration | current | Pricing model, config flags for price caps/payment params, fee calculation mechanics, orchestrator pricing reference. | Price cap flags; fee calculation formula; orchestrator price reading |
| `v2/gateways/setup/connect/lp-marketplace` | Livepeer Marketplace Overview | current | Introduces the on-chain orchestrator discovery marketplace — what orchestrators publish (models, pipelines, pricing). | Marketplace = on-chain discovery mechanism |
| `v2/gateways/setup/connect/discover-offerings` | Discover Marketplace Offerings | current (169 words) | Query the marketplace for available orchestrators. Short procedural page. Note: near-duplicate of connect-with-offerings. | Supported models/pipelines query |
| `v2/gateways/setup/connect/connect-with-offerings` | Discover & Connect Marketplace Compute Services | current | Connect gateway to specific orchestrator offerings. Near-duplicate of discover-offerings — merge candidate. | Same discovery process as discover-offerings |
| `v2/gateways/setup/monitor/monitor-and-optimise` | Monitor & Optimise Gateway Services | current (353 words) | High-level monitoring overview — request routing, payment models, operational considerations. Bridges setup to guides. | Largely duplicates other pages |

### End-to-End Tutorials (3 pages, appear twice in nav each)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test` | Your First Gateway: Off-chain Transcoding | current (16KB) | Tutorial 1: minimal off-chain gateway and transcoding test from scratch. Architecture diagram included. | Off-chain baseline; binary install from GitHub releases; H1 headings mid-page in code blocks (structural issue) |
| `v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline` | Add AI: BYOC CPU Pipeline | current (20KB) | Tutorial 2: extend baseline with BYOC CPU container for AI inference. Covers Trickle Protocol, container build. | Trickle Protocol; BYOC CPU container build and connection |
| `v2/gateways/guides/tutorials/tutorial-3-go-production` | Go Production: On-chain, GPU, and Network | current (23KB) | Tutorial 3: production upgrades — on-chain registration, GPU, live network. Modular upgrade path structure. | Upgrade 1: on-chain registration; ETH acquisition on Arbitrum One; dedicated wallet |

### Guides: Operator Considerations (2 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/guides/operator-considerations/business-case` | Gateway Business Case | current (22KB) | Hosted vs self-hosted economics, earnings models, operator models (individual/commercial/platform), mode economics. | NaaP revenue model; per-job fees; premium services; mode-by-mode economics |
| `v2/gateways/guides/operator-considerations/production-gateways` | Public and Commercial Gateways Operating on Livepeer | current (15KB) | Directory of real gateway deployments: Daydream, Streamplace, Embody Avatars, independent operators, SPE-funded examples. | Commercial products: Daydream, Streamplace, Embody Avatars |

### Guides: Deployment Options (2 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/guides/deployment-details/setup-options` | Gateway Setup Options | current (12KB) | 4 setup types with decision guidance. Routes to setup-requirements. | 4 setup types: off-chain, on-chain, AI, dual |
| `v2/gateways/guides/deployment-details/setup-requirements` | Gateway Requirements | current (17KB) | Comprehensive hardware, OS, networking, on-chain/off-chain prerequisites per mode. Overlaps with setup/requirements/setup.mdx — merge candidate. | Requirements per mode; networking section |

### Guides: AI and Job Pipelines (5 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/guides/node-pipelines/guide` | AI and Job Pipelines Overview | current (18KB) | Gateway role, node types, pipeline types (video, batch AI, real-time AI, BYOC). Entry page. | 4 pipeline types |
| `v2/gateways/guides/node-pipelines/video-pipelines` | Video & Transcoding Pipelines | current (24KB) | Architecture: ingest → orchestrator selection → transcoding → delivery; rendition presets. | Rendition presets; ingest/delivery flow |
| `v2/gateways/guides/node-pipelines/ai-pipelines` | AI Pipelines on Livepeer | current (29KB — largest pipeline page) | Request flow, AI vs video comparison, available AI pipeline types, pricing control. | Standard API pipelines listed; pricing control per pipeline |
| `v2/gateways/guides/node-pipelines/byoc-pipelines` | BYOC Pipelines | current (18KB) | Custom container routing, capability contracts, routing profiles, requirements. | BYOC routing profiles; capability contract spec |
| `v2/gateways/guides/node-pipelines/pipeline-configuration` | Pipeline Configuration | current (23KB) | Key differences between video/AI/BYOC configs, verification steps, cross-references. | Config diffs between pipeline types |

### Guides: Payments and Pricing (5 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/guides/payments-and-pricing/payment-guide` | Payment Paths for Gateway Operators | current (10KB) | On-chain vs off-chain payment paths, what each requires, routing to detailed guides. Entry page. | On-chain vs off-chain payment architecture |
| `v2/gateways/guides/payments-and-pricing/funding-guide` | Guide to Funding an On-Chain Gateway | current (11KB) | Get ETH on Arbitrum → transfer → deposit → monitor. Overlaps with setup/requirements/fund-gateway.mdx — merge candidate. | Step-by-step: Get ETH, Transfer, Deposit, Monitor |
| `v2/gateways/guides/payments-and-pricing/pricing-strategy` | Gateway Pricing Strategy | current (17KB) | Pricing mechanics in practice, configuration flags, cap guidance, setup paths by operator type. | Pricing cap flags; practical guidance |
| `v2/gateways/guides/payments-and-pricing/remote-signers` | Remote Signers | current (16KB) | Key isolation via remote signer — benefits (key isolation, platform flexibility), signing mechanics (GetOrchestratorInfo signature), configuration. | GetOrchestratorInfo signature; remote signer config |
| `v2/gateways/guides/payments-and-pricing/clearinghouse-guide` | Payment Clearinghouses | current (13KB) | Multi-tenant payment abstraction — architecture, responsibilities, setup, building a clearinghouse, current status. | NaaP/multi-tenant use case; clearinghouse vs gateway separation |

### Guides: Monitoring and Tooling (5 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/guides/monitoring-and-tooling/health-checks` | Gateway Health Checks | current (14KB) | HTTP health endpoint, node status via livepeer_cli, mode-specific checks. Note: H1 headings mid-page in code contexts. | Health endpoint URL; `livepeer_cli` status commands; Docker vs binary check paths |
| `v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards` | Tools & Dashboards | current (16KB) | Available dashboards (Livepeer.org Explorer, Grafana), analytics tools, monitoring integrations. | Livepeer Explorer; Grafana dashboards |
| `v2/gateways/guides/monitoring-and-tooling/monitoring-setup` | Monitoring Setup | current (19KB) | Enable Prometheus metrics, configure scraping, import Grafana dashboards, define alert rules. | Prometheus metrics endpoint; Grafana dashboard import; alert rule templates |
| `v2/gateways/guides/monitoring-and-tooling/on-chain-metrics` | On-Chain Metrics and Monitoring | current (13KB) | Arbiscan monitoring — find gateway contract, contract events, watchlist alerts, deposit verification. | Arbiscan at arbiscan.io; deposit and ticket events |
| `v2/gateways/guides/monitoring-and-tooling/troubleshooting` | Gateway Troubleshooting | current (25KB — largest troubleshooting resource) | Troubleshooting by mode (video, AI, dual), common errors with fixes, log interpretation. | Errors organised by mode; log interpretation guide |

### Guides: Advanced Operations (4 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/guides/advanced-operations/orchestrator-selection` | Orchestrator Selection & Tiering | current (17KB) | Selection algorithm, workload criteria, orchestrator settings, tiering strategies, failover. | Selection algorithm details; tiering strategies |
| `v2/gateways/guides/advanced-operations/scaling` | Scaling & Resource Management | current (17KB) | Scaling signals from metrics, capacity planning, resource management for production load. | Scaling signals; capacity planning framework |
| `v2/gateways/guides/advanced-operations/gateway-middleware` | Gateway Middleware | current (18KB) | Middleware layer (auth, rate limiting, billing, routing) for multi-tenant deployments. Middleware vs clearinghouse distinction. | Middleware responsibilities; NaaP multi-tenant pattern |
| `v2/gateways/guides/advanced-operations/gateway-discoverability` | Publishing a Gateway | current (14KB) | Capability advertising, discovery methods (Explorer, direct, on-chain), Livepeer Marketplace publication. | Discovery methods: Explorer, direct connection, on-chain registry |

### Guides: Roadmap and Funding (4 pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/guides/roadmap-and-funding/operator-support` | Operator Support & Programmes | current (9KB) | Funding paths (grants, SPEs), community resources (Discord, Forum, office hours), contribution opportunities. | Discord, Forum, Developer Office Hours, GitHub Issues |
| `v2/gateways/guides/roadmap-and-funding/spe-grant-model` | SPE Grant Model for Gateway Operators | current (13KB) | What SPEs are, current gateway SPEs, what makes a fundable proposal, proposal process. | SPE = Special Purpose Entity; Foundation funding pathway |
| `v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy` | NaaP & Multi-Tenancy | current (14KB) | NaaP model, dual payment layers, NaaP dashboard reference impl, multi-tenant auth flows. **NaaP acronym inconsistency** — "Network as a Platform" vs "Network-as-a-Product" (flagged in Phase 1). | Dual payment layer architecture; NaaP dashboard; auth flow |
| `v2/gateways/guides/roadmap-and-funding/gateway-showcase` | Gateway Showcase | current (13KB) | Commercial products: Daydream, Livepeer Studio, Livepeer Cloud (Cloud SPE), Embody Avatars, independent operators. Near-duplicate of production-gateways.mdx — merge candidate. | Daydream, Livepeer Studio, Livepeer Cloud, Embody Avatars |

### Resources (15+ pages)

| Path | Title | Status | Content Summary | Key Technical Facts |
|---|---|---|---|---|
| `v2/gateways/resources/faq` | Gateway FAQ | current (18KB) | FAQs by type: general, video gateway, AI gateway, external resources. | Primary Q&A self-service resource |
| `v2/gateways/resources/glossary` | Gateway Terminology Glossary | current (11KB) | Human-maintained glossary — deployment, operational mode, setup type, node type, key terms. 888 words. | 5 categories; human-maintained |
| `v2/gateways/resources/compendium/glossary` | Gateway Glossary | current (58KB) | AI-generated comprehensive glossary — protocol, economic, video, AI, Web3 terms. Unverified. | AI-generated; must be verified against human glossary before use |
| `v2/gateways/resources/technical/technical-architecture` | Technical Architecture | current (thin, 215 words) | BYOC architecture reference — single H3. Likely stub/partial. | BYOC container spec and integration points |
| `v2/gateways/resources/technical/configuration-flags` | Gateway Configuration Flags | **STUB** (49 words, heading only) | Intended as complete config flag reference. Currently empty. Live dead-end in nav. | None |
| `v2/gateways/resources/technical/contract-addresses` | Contract Addresses | current (14KB) | Arbitrum One and Ethereum Mainnet contract addresses (current and historical). lastVerified: 2026-03-18. | See Technical Facts Extracted section below |
| `v2/gateways/resources/technical/cli-commands` | Gateway CLI Commands | current | livepeer_cli commands — quick reference table and detailed list by node type (general, gateway/broadcaster, monitoring). | CLI command list by type |
| `v2/gateways/resources/technical/livepeer-exchanges` | Livepeer Exchanges | **STUB** (72 words) | Intended list of exchanges where LPT is traded. | Minimal content |
| `v2/gateways/resources/technical/arbitrum-exchanges` | Arbitrum Exchange Reference | **STUB** (73 words) | Intended list of Arbitrum-supporting exchanges. | Minimal content |
| `v2/gateways/resources/technical/arbitrum-rpc` | Arbitrum RPCs | **STUB** (13 words, no headings) | Should list Arbitrum One RPC endpoints for gateway config. | No content |
| `v2/gateways/resources/go-livepeer/bandwidth-requirements` | Bandwidth Requirements | current (334 words) | Reference data for bandwidth per deployment mode. | Table/list format; per-mode bandwidth data |
| `v2/gateways/resources/go-livepeer/hardware-requirements` | Hardware Requirements | current (159 words) | Hardware specs by component: GPU, CPU, RAM, Disk. | Structured by: GPU, CPU, RAM, Disk |
| `v2/gateways/resources/go-livepeer/gpu-support` | GPU Support | current (311 words) | GPU compatibility list — supported models, CUDA version requirements. | CUDA requirements; supported GPU models |
| `v2/gateways/resources/go-livepeer/cli-reference` | CLI Reference | current (6.7KB) | go-livepeer CLI flags by category: configuration, network/addresses, transcoding, on-chain. Overlaps with resources/technical/cli-commands.mdx — merge candidate. | Full flag list; categories: configuration, network, transcoding, on-chain |
| `v2/gateways/resources/go-livepeer/prometheus-metrics` | Prometheus Metrics | current (14KB) | Complete Prometheus metrics reference — general, payment, pixel accounting metrics. | Metric categories: general, payments (sending/receiving), pixel accounting |
| `v2/gateways/resources/knowledge-base/guides` | Gateway guides | current (19KB) | Curated guides directory by type: off-chain AI, BYOC, video (on-chain), dual. Link collection. | Guide types: off-chain AI, BYOC, video, dual |
| `v2/gateways/resources/knowledge-base/resources` | Gateway resources | current (15KB) | Official software, SDKs/alternatives, dashboards, monitoring tools, reference docs. Link collection. | External resource directory |
| `v2/gateways/resources/knowledge-base/help` | Gateway help | current (14KB) | Community support links: Discord, Forum, Developer Office Hours, GitHub Issues. | Support channels |

### AI API Reference (14 pages — functional via OpenAPI component)

Pages at `v2/gateways/resources/technical/api-reference/AI-API/`: `ai` (portal), `text-to-image`, `image-to-image`, `image-to-video`, `upscale`, `audio-to-text`, `segment-anything-2`, `llm`, `image-to-text`, `live-video-to-video`, `text-to-speech`, `health`, `hardware-info`, `hardware-stats`

Status: frontmatter-only files; content rendered via OpenAPI spec import (`<OpenApiDoc ... />`). Functional as API reference pages if component renders correctly.

### CLI HTTP API Reference (9 pages — functional via OpenAPI component)

Pages at `v2/gateways/resources/technical/api-reference/CLI-HTTP/`: `cli-http-api` (portal), `unbond`, `rebond`, `activateorchestrator`, `setbroadcastconfig`, `setmaxpriceforcapability`, `reward`, `transfertokens`, `signmessage`

Status: same pattern as AI API pages — OpenAPI component-rendered content.

---

## Migration Gap Analysis

### In v1 but not v2 (needs migration decision)

| v1 Path | v1 Title | Assessment |
|---|---|---|
| `v1/gateways/guides/publish-content` | Publish Content | No v2 equivalent. RTMP stream publishing via FFmpeg and OBS is a practical operational topic. The v2 tab has no "send a test stream to your gateway" walkthrough. Consider creating a v2 equivalent or incorporating into the quickstart/tutorials. |
| `v1/gateways/guides/playback-content` | Playback Content | No v2 equivalent. VLC HLS playback verification is a useful test step. Could be a short section within tutorial-1 or quickstart rather than a standalone page. |
| `v1/gateways/introduction.mdx` | Introduction (Studio) | **Confirmed mis-filed Studio content** — not a gateway gap. No action needed for gateways. |
| `v1/gateways/quick-start.mdx` | Quickstart (Studio) | **Confirmed mis-filed Studio content** — not a gateway gap. No action needed for gateways. |
| `v1/gateways/livepeer-studio-cli.mdx` | CLI (Studio) | **Confirmed mis-filed Studio content** — not a gateway gap. No action needed for gateways. |
| `v1/ai/gateways/get-started` | AI Gateway Get Started | Superseded by v2 AI configuration pages. Content about Linux-only requirement for AI may need verification — v2 may now support additional platforms. |
| `v1/ai/gateways/start-gateway` | Start your AI Gateway | Core content migrated into v2 AI configuration and quickstart. The concrete startup log output and test request pattern are useful for v2 writers to verify against current software. |
| `v1/ai/gateways/onchain` | On-chain AI Gateway | Core flags migrated to v2. The maxPricePerCapability JSON structure and example pricing values are worth verifying against current go-livepeer documentation — prices may be stale. |

### In v2 but not v1 (new content, no migration needed)

All of the following are net-new v2 content with no v1 equivalent:

- Concepts section (role, capabilities, architecture, business-model) — structured conceptual foundation missing from v1
- Setup: on-chain requirements detail (35KB page) — v1 only had the brief fund-gateway guide
- Configuration: video-configuration, ai-configuration, dual-configuration, pricing-configuration — v1 had no structured config reference
- Setup: connect group (marketplace, discover, connect-with-offerings) — v1 had no marketplace documentation
- All Guides sections: operator-considerations, deployment-details, node-pipelines, payments-and-pricing, monitoring-and-tooling, advanced-operations, roadmap-and-funding — all net-new in v2
- Tutorials (1, 2, 3 zero-to-hero series) — v1 had no tutorial series
- Resources: FAQ, Glossary, Prometheus metrics reference, AI API reference, CLI HTTP API reference, community projects page

### In both (check for content drift / staleness)

| Topic | v1 Path | v2 Path | Drift Notes |
|---|---|---|---|
| Docker installation | `v1/gateways/guides/docker-install` | `v2/gateways/setup/install/docker-install` | v1 uses `-broadcaster=true` flag; v2 may use `-gateway`. Verify current flag. v1 references Docker 20.10.x and docker-compose v3.9 — verify against current Docker best practices. |
| Linux installation | `v1/gateways/guides/linux-install` | `v2/gateways/setup/install/linux-install` | Same systemd pattern. Verify binary download URL format still matches GitHub releases. |
| Windows installation | `v1/gateways/guides/windows-install` | `v2/gateways/setup/install/windows-install` | v2 is thin (278 words). May need richer content from v1. |
| Transcoding options | `v1/gateways/guides/transcoding-options` | `v2/gateways/setup/transcoding` (STUB) | v2 stub has no content; v1 has working JSON templates and platform-specific paths. **P0 content gap**: v2 transcoding page is a live stub. |
| Fund gateway | `v1/gateways/guides/fund-gateway` | `v2/gateways/setup/requirements/on-chain setup/fund-gateway` and `v2/gateways/guides/payments-and-pricing/funding-guide` | Production reserve recommendation: v1 says 0.36 ETH minimum. Verify this still applies in v2. GitHub issue #3744 referenced in v1 — check if resolved. |
| CLI reference | `v1/references/go-livepeer/cli-reference` | `v2/gateways/resources/go-livepeer/cli-reference` | v1 sourced from `go-livepeer/cmd/livepeer/livepeer.go`. v2 version should be verified against current go-livepeer source. |

---

## Technical Facts Extracted

### CLI Flags — Gateway Startup

Confirmed from v1 source files:

| Flag | Description | Source |
|---|---|---|
| `-broadcaster=true` | Runs node in gateway/broadcaster mode (v1 term) | v1 docker-install, linux-install, windows-install |
| `-gateway` | Runs node in gateway mode (v1 ai/gateways; current flag) | v1/ai/gateways/start-gateway |
| `-network=arbitrum-one-mainnet` | Connects to Arbitrum mainnet | All v1 installs |
| `-ethUrl=<RPC>` | Arbitrum RPC URL | All v1 installs |
| `-ethKeystorePath=/root/.lpData` | Path to keystore directory | v1 docker-install |
| `-ethPassword=<path>` | Path to password file | All v1 installs |
| `-cliAddr=127.0.0.1:5935` | CLI HTTP address (binary) | v1 linux, windows |
| `-cliAddr=gateway:5935` | CLI HTTP address (Docker container) | v1 docker |
| `-rtmpAddr=0.0.0.0:1935` | RTMP ingest address | All v1 installs |
| `-httpAddr=0.0.0.0:8935` | HTTP address (video gateway) | All v1 installs |
| `-httpAddr=0.0.0.0:8937` | HTTP address (AI gateway — different port) | v1/ai/gateways/start-gateway |
| `-httpIngest` | Enable HTTP ingest | v1/ai/gateways/start-gateway |
| `-monitor=true` | Enable monitoring | All v1 installs |
| `-v=99` or `-v=6` | Verbosity level | v1 installs |
| `-blockPollingInterval=20` | Block polling interval | v1 docker, windows |
| `-maxPricePerUnit=300` | Max price per unit (wei or USD) | All v1 installs |
| `-pixelsPerUnit=1` | Pixels per price unit | v1 docker |
| `-pricePerUnit=1` | Price per unit | v1 windows |
| `-serviceAddr=<IP>:8935` | Public service address | v1 linux, windows |
| `-transcodingOptions=<path>` | Path to transcoding JSON | v1 transcoding-options |
| `-orchAddr=<list>` | Orchestrator address(es) | v1/ai/gateways/start-gateway |
| `-datadir=~/.lpData2` | Data directory (AI gateway) | v1/ai/gateways/start-gateway |
| `-aiServiceRegistry` | Connect to AI service registry (on-chain AI) | v1/ai/gateways/onchain |
| `-maxTotalEV=100000000000000` | Max total expected value | v1/ai/gateways/onchain |
| `-ignoreMaxPriceIfNeeded=<bool>` | Override max price if no orch available | v1/ai/gateways/onchain |
| `-maxPricePerCapability=<path>` | Path to per-capability max price JSON | v1/ai/gateways/onchain |
| `-ethAcctAddr=<address>` | ETH account address | v1/ai/gateways/onchain |
| `-ethOrchAddr=<address>` | ETH address of mainnet gateway | v1/ai/gateways/onchain |
| `-ethPassword=/root/.lpData/.eth_secret` | ETH secret path (AI on-chain) | v1/ai/gateways/onchain |

**NOTE**: v1 uses `-broadcaster=true` flag name; v1 AI docs use `-gateway`. The current go-livepeer binary uses `-gateway`. Content writers should verify which is canonical in current software.

### Ports

| Port | Protocol | Purpose |
|---|---|---|
| 1935 | RTMP | Stream ingest |
| 8935 | HTTP | Video gateway API / HLS playback |
| 8937 | HTTP | AI gateway API |
| 5935 | HTTP | livepeer_cli interface |
| 8936 | HTTP | AI orchestrator (referenced in v1 AI docs) |

### Transcoding Options JSON

v1 transcoding-options.mdx provides the standard profile template:

```json
[
  { "name": "480p0", "fps": 0, "bitrate": 1600000, "width": 854, "height": 480, "profile": "h264constrainedhigh", "gop": "1" },
  { "name": "720p0", "fps": 0, "bitrate": 3000000, "width": 1280, "height": 720, "profile": "h264constrainedhigh", "gop": "1" },
  { "name": "1080p0", "fps": 0, "bitrate": 6500000, "width": 1920, "height": 1080, "profile": "h264constrainedhigh", "gop": "1" }
]
```

### maxPricePerCapability JSON (v1 AI on-chain)

Example pricing values from v1/ai/gateways/onchain.mdx (verify before use — may be stale):

```json
{
  "capabilities_prices": [
    { "pipeline": "image-to-image", "model_id": "ByteDance/SDXL-Lightning", "price_per_unit": 1700000, "pixels_per_unit": 1 },
    { "pipeline": "text-to-image", "model_id": "stabilityai/stable-diffusion-3-medium-diffusers", "price_per_unit": 4768371, "pixels_per_unit": 1 },
    { "pipeline": "upscale", "model_id": "default", "price_per_unit": 4768371 },
    { "pipeline": "image-to-video", "price_per_unit": 3390842, "pixels_per_unit": 1 },
    { "pipeline": "audio-to-text", "price_per_unit": 12882811 }
  ]
}
```

Note: `audio-to-text` uses milliseconds of audio as unit, not pixels.

### Arbitrum Contract Addresses (current, from v2 — lastVerified 2026-03-18)

**Arbitrum One** (active, Delta protocol version):
- Governor: `0xD9dEd6f9959176F0A04dcf88a0d2306178A736a6`
- Controller: `0xD8E8328501E9645d16Cf49539efC04f734606ee4`
- LivepeerToken (LPT): `0x289ba1701C2F088cf0faf8B3705246331cB8A839`
- BondingManager (Proxy): `0x35Bcf3c30594191d53231E4FF333E8A770453e40`
- TicketBroker (Proxy): `0xa8bB618B1520E284046F3dFc448851A1Ff26e41B`
- AIServiceRegistry (Target): `0x04C0b249740175999E5BF5c9ac1dA92431EF34C5` (detached from controller)
- ServiceRegistry (Proxy): `0xC92d3A360b8f9e083bA64DE15d95Cf8180897431`
- Treasury: `0xf82C1FF415F1fCf582554fDba790E27019c8E8C4`
- L2LPTGateway: `0x6D2457a4ad276000A615295f7A80F79E48CcD318`

### Funding Thresholds

- Production minimum reserve: **0.36 ETH** (to prevent interruptions during gas spikes) — GitHub issue #3744 open to reduce this
- Testing minimum: **0.1 ETH** total (0.065 deposit + 0.03 reserve)
- Fee per payment = reserve / 100 (example: 0.03 reserve → 0.0003 ETH per transcoding job)

### URLs

- Arbitrum bridge: `https://bridge.arbitrum.io/`
- Arbitrum mainnet RPC (default in v1): `https://arb1.arbitrum.io/rpc`
- HLS playback URL pattern: `http://<GATEWAY_IP>:8935/stream/<STREAM_KEY>.m3u8`
- RTMP ingest URL pattern: `rtmp://<GATEWAY_IP>:1935/<stream_key>`
- AI test request: `POST http://0.0.0.0:8937/text-to-image`

### File Paths (v1 reference)

| Context | Path |
|---|---|
| Docker volume data | `/var/lib/docker/volumes/gateway-lpData/_data` |
| Container lpData mount | `/root/.lpData` |
| Linux install binary | `/usr/local/bin/livepeer` |
| Linux config dir | `/usr/local/bin/lptConfig/` |
| Linux password file | `/usr/local/bin/lptConfig/node.txt` |
| Linux transcoding options | `/usr/local/bin/lptConfig/transcodingOptions.json` |
| Linux systemd service | `/etc/systemd/system/livepeer.service` |
| Windows lpData | `C:\Users\<USER>\.lpData` |
| Windows eth secret | `C:\Users\<USER>\.lpData\ethsecret.txt` |
| AI on-chain keystore | `/root/.lpData/arbitrum-one-mainnet/keystore` |
| AI on-chain eth secret | `/root/.lpData/.eth_secret` |
| AI gateway datadir | `~/.lpData2` |

### Software Versions (v1 context — verify before use)

- go-livepeer version referenced in v1 gateway overview: **0.7.2**
- Docker version in v1 prerequisites: **20.10.x**
- Ubuntu version in v1 prerequisites: **22.04**
- Docker image (v1 AI): `livepeer/go-livepeer:master` (not pinned — verify current tag)

---

## Open Questions for Content Writers

1. **`-broadcaster` vs `-gateway` flag**: v1 installs use `-broadcaster=true` while v1 AI docs use `-gateway`. The gateway-overview.mdx notes "previously called Broadcaster" and that "some commands still use the Broadcaster name." Which flag does current go-livepeer software accept for both modes? This must be verified against the current go-livepeer binary before any setup guide is published.

2. **Port conflict**: v1 video gateway uses port `8935`; v1 AI gateway uses port `8937`. The v2 dual-configuration guide covers running both simultaneously. What port assignment is required for dual mode? This is unclear from v1 content alone.

3. **0.36 ETH production reserve**: v1/gateways/guides/fund-gateway.mdx specifies this as the production minimum, with GitHub issue #3744 open to reduce it. Has the issue been resolved? Is 0.36 ETH still the recommended minimum in v2?

4. **AI gateway platform support**: v1/ai/gateways/get-started.mdx says Linux only, with "Windows and macOS coming soon." The v2 quickstart AI-prompt.mdx references both Linux (recommended for production) and macOS (dev/local). Is Windows still unsupported for AI gateway operation?

5. **`-aiServiceRegistry` flag**: v1/ai/gateways/onchain.mdx uses this flag for on-chain AI. Is this still the correct flag in current go-livepeer? Has it been renamed or merged into another flag?

6. **maxPricePerCapability pricing values**: The example prices in v1/ai/gateways/onchain.mdx (1,700,000 wei for image-to-image, etc.) were the baseline at the time of writing. Are these values still appropriate guidance, or have market rates changed significantly?

7. **`-maxTotalEV=100000000000000`**: v1 references this value as needed to comply with max ticket value limits. Is this still required, and is this value current?

8. **NaaP acronym**: The v2 naap-multi-tenancy.mdx uses "Network-as-a-Product" in the title but the content scan notes "Network as a Platform" inconsistency flagged in Phase 1. What is the canonical expansion? This affects all content that references NaaP.

9. **`v2/gateways/setup/transcoding` stub**: This page is in the live nav but contains only a placeholder heading. Is there a timeline to fill this page? Content writers should know if they are expected to create this content or if it is deliberately deferred.

10. **`v2/gateways/resources/technical/configuration-flags` stub**: Empty page in live nav (49 words, heading only). This is described as a P0 issue in the content scan. Writers should know: is this expected to be a manually-authored reference, or is it intended to be auto-generated from go-livepeer source?

11. **`discover-offerings` vs `connect-with-offerings` duplication**: Both pages cover the same discovery process with near-identical heading structures. Is one intended to replace the other, or do they serve different reader intents? A merge decision should be confirmed before both pages are rewritten separately.

12. **`production-gateways` vs `gateway-showcase` duplication**: Both pages list commercial products on Livepeer (Daydream, Streamplace, Embody Avatars). Is one the canonical source? Should one be merged into the other or is there intentional separation (business directory vs showcase)?

13. **AI-generated compendium glossary**: The `v2/gateways/resources/compendium/glossary` is AI-generated and unverified (58KB). The human-maintained `v2/gateways/resources/glossary` is 11KB. Content writers should not treat the compendium glossary as authoritative for term definitions without independent verification.

14. **`v1/gateways/guides/publish-content` and `playback-content` gaps**: These v1 pages cover RTMP stream publishing via FFmpeg/OBS and HLS playback via VLC — practical test procedures that have no v2 equivalent. Are these intended to be incorporated into v2 tutorials (specifically tutorial-1 and the quickstart), or are they out of scope for the v2 tab?

15. **Go-livepeer binary download URL**: v1 uses `https://github.com/livepeer/go-livepeer/releases/download/<RELEASE_VERSION>/...` as the download base. v1/ai/gateways/start-gateway.mdx uses `https://build.livepeer.live/go-livepeer/livepeer-<OS>-<ARCH>.tar.gz`. Which URL should v2 content use for binary downloads?
