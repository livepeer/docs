Proposed v2/orchestrators/resources/ Structure
Reference Pages (mirror gateway pattern)
File	Title	What it covers
cli-flags.mdx	CLI Flags Reference	Already exists. Complete go-livepeer flag reference for orchestrators. Needs finishing.
contract-addresses.mdx	Contract Addresses	Livepeer protocol contracts on Arbitrum One (BondingManager, RoundsManager, Minter, TicketBroker, ServiceRegistry). Mirror of gateway version but orchestrator-relevant.
arbitrum-rpc.mdx	Arbitrum RPCs	RPC provider options (Alchemy, Infura, Ankr, public endpoints), rate limit guidance, what orchestrators specifically need from their RPC.
arbitrum-exchanges.mdx	Arbitrum Exchanges	Where to acquire ETH on Arbitrum (for gas) and LPT (for staking). Bridge references.
gpu-support.mdx	GPU Support Matrix	NVIDIA GPU compatibility, NVENC/NVDEC session limits per card, minimum driver versions, CUDA requirements. Consolidates v1 assess-capabilities content.
prometheus-metrics.mdx	Prometheus Metrics Reference	Orchestrator-specific metrics exposed on :7935, metric names, labels, and what they mean. Drawn from v1 monitor-metrics.
configuration-flags.mdx	Configuration Quick Reference	One-page cheat sheet: startup command templates for common setups (solo transcoding, solo AI, split O+T, pool operator).
Guides & Community Pages
File	Title	What it covers
guides.mdx	Guides Index	Already exists. Card-based navigator to all official guides + community resources table. Needs updating to match new restructure.
community-pools.mdx	Community Pools	Already exists. Pool directory page. Needs live data or maintained table.
faq.mdx	FAQ & Troubleshooting	Already exists. Comprehensive — 700+ lines, solid.
community-guides.mdx	NEW — Community Guides & Tutorials	The big aggregation page you're asking about. See below.
payments.mdx	Payments Reference	Probabilistic micropayments, TicketBroker, deposit/reserve mechanics, winning ticket redemption. Currently a stub.
community-guides.mdx — Detailed Proposal
This is the key new page. Structured by category, linking to external tutorials and resources from Titan Node, Definer/Define, Daydream, and other community contributors:

Section 1: Setup & Installation Tutorials
Resource	Source	Notes
Titan Node Pool Worker Setup (Windows GUI)	Titan Node	Their custom pool client setup walkthrough
Titan Node Pool Worker Setup (Linux CLI)	Titan Node	CLI setup for Linux workers
Video Miner Pool Setup	Video Miner / Definer	Pool worker onboarding guide
Livepeer Cloud: Self-Hosting LLM Pipeline	Cloud SPE	Ollama-based GPU runner on 8GB VRAM
Bash Script to Update Livepeer	Forum (2021)	Shell script for binary updates
Docker Compose orchestrator deployment	Community / GitHub	Container-based deployment reference
Section 2: AI Workload Tutorials
Resource	Source	Notes
AI Pipeline Setup Walkthrough	Livepeer AI SPE	Official batch AI pipeline guide
ComfyStream Real-Time AI	Daydream / Livepeer	Real-time AI video processing
Cascade Live-Video-to-Video	Community	Live inference pipeline
BYOC (Bring Your Own Container)	Developers docs	Custom model containers
HuggingFace Model Integration	Community	Loading custom HF models
Section 3: Monitoring & Operations
Resource	Source	Notes
Prometheus + Grafana + Loki Stack	Speedy Bird	Full monitoring/alerting/log analytics stack
Gateway Introspection API (Loki)	Livepeer	Public Loki log queries for gateway selection visibility
livepeer.tools	Community	Pricing dashboard, network stats
Livepeer Explorer	Livepeer Foundation	On-chain metrics, stake, earnings
Stronk Monitor	Stronk-Tech	OrchestratorSiphon companion monitoring
Section 4: Economics & Strategy
Resource	Source	Notes
Yield Calculation & Delegator ROI	v1 docs / Forum	How delegators evaluate orchestrators
Titan Node Campaign Posts	Livepeer Forum	Transparency reports, pool economics
Pricing Strategy Discussion	Discord #orchestrating	Community pricing norms
Reward Cut Calculator	Community tools	Estimating reward/fee share impact
Section 5: Video & Educational Content
Resource	Source	Notes
Livepeer YouTube: Orchestrator Setup	Livepeer	Official video walkthroughs
Titan Node YouTube tutorials	Titan Node	Pool setup, worker onboarding
ETHDenver / ETHGlobal talks	Conference recordings	Protocol architecture deep dives
Livepeer Community Streams	Livepeer Connect	Recorded community calls
Section 6: Developer & Research Resources
Resource	Source	Notes
go-livepeer GitHub	Livepeer	Source code, issues, releases
ai-worker GitHub	Livepeer	AI Runner container source
Livepeer Improvement Proposals (LIPs)	GitHub	Protocol governance proposals
Livepeer Research (academic papers)	Various	Network economics, video quality research
Subgraph / GraphQL API	Livepeer	On-chain data queries
Summary: Files to Create
New files (4):

v2/orchestrators/resources/community-guides.mdx — the big tutorial aggregation page above
v2/orchestrators/resources/arbitrum-rpc.mdx — RPC provider reference
v2/orchestrators/resources/arbitrum-exchanges.mdx — ETH/LPT acquisition
v2/orchestrators/resources/gpu-support.mdx — GPU compatibility matrix
Files to finish (already exist but are stubs):

contract-addresses.mdx — currently empty
cli-flags.mdx — partially done
payments.mdx — stub
guides.mdx — needs updating to match restructure
community-pools.mdx — needs live data
Files to potentially merge/remove:

x-help.mdx, x-changelog.mdx, x-support-status.mdx — all drafts/stubs that could fold into the guides index or community-guides page
The gateway references pattern has ~8 reference pages + 4 go-livepeer subpages + a full API reference directory. The orchestrators don't need the API reference directory (orchestrators don't expose a public API the way gateways do), but the reference pages and community content page fill the same structural role.

Want me to start creating any of these, or do you want to adjust the proposal first?
