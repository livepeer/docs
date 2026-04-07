# Livepeer network: an inflection point between AI ambition and economic reality

Livepeer is undergoing a decisive transformation from a decentralized video transcoding network into **AI infrastructure for real-time video**, with AI inference now generating over 70% of protocol fees. Between July 2025 and March 2026, the network saw explosive AI fee growth (+131% quarter-over-quarter in Q3 2025), multiple contentious governance battles over treasury spending and inflation, the launch of the Livepeer Foundation as a coordinating entity, and a paradoxical situation where protocol usage surged while the LPT token price collapsed from ~$6 to ~$2. The period reveals a community grappling with identity, sustainability, and the gap between narrative momentum and on-the-ground economics.

---

## A) Governance and treasury: high-stakes debates over spending and inflation

### On-chain votes and parameter changes

Three significant Livepeer Improvement Proposals dominated governance during this period, all centered on the network's most contentious topic — **inflation and emissions**:

**LIP-101: Restart Treasury Reward Cut** (voted January 14, 2026). Proposed by b3nnn (Livepeer Foundation) to reset `treasuryRewardCutRate` from 0% back to **10%**, after the on-chain treasury automatically stopped accumulating when it hit its **750,000 LPT ceiling**. The forum thread "It's time to ACT! Accumulation & the Treasury Ceiling" generated 20+ replies with fierce debate. Community member nhis accused some treasury-funded projects of being "scams" creating LPT sell pressure; dob (Doug Petkanics, co-founder) clarified that Daydream is VC-funded, not treasury-funded. Broad community consensus supported restarting accumulation but with demands for stronger accountability — milestone-based payments, monthly progress reports, and guardrails. The proposal is presumed passed based on subsequent Foundation activity.

**LIP-107: Put the Brakes on LPT Emissions** (voting started ~February 26, 2026). Authored by awma of Shtuka Research (commissioned by the Foundation), this proposes reducing `targetBondingRate` from 50% to **46%** and increasing `inflationChange` from 500 to **700** (meaning inflation adjusts 40% faster). The proposal draws on community survey data showing broad acceptance of a 40%+ bonding rate threshold. Key feedback came from Joel, j0sh, wiser, and adamsoffer, who raised concerns about potential impacts. The proposal moved to Last Call on February 13, 2026, with an approximately 8-day voting period. This is positioned as an interim measure — a "moderate" brake on emissions rather than a structural overhaul.

**LIP-100: Introduction of Inflation Bounds** (status: Last Call). Created March 12, 2025 by Doug Petkanics and Marco Van Dijk, this more structural proposal introduces an `inflationCeiling` (~36% annually) and `inflationFloor` (~2% annually) to permanently bound the inflation rate. It also doubles `inflationChange` from 500 to 1000 for faster equilibrium. Requires a new Minter contract deployment and migration of all staked LPT and deposited ETH — a more complex implementation than LIP-107.

### Treasury grants funded

The SPE (Special Purpose Entity) model is Livepeer's mechanism for treasury-funded working groups. Key grants during this period:

| Proposal                      | Amount              | Proposer              | Status                        | Purpose                                     |
| ----------------------------- | ------------------- | --------------------- | ----------------------------- | ------------------------------------------- |
| Transformation SPE ("Surge")  | 44,500 LPT (~$290K) | Foundation (b3nnn)    | Passed Sep 16, 2025           | Ecosystem coordination, 9 workstreams       |
| AI Video SPE Stage 4          | 97,500 LPT          | AI SPE team           | Passed Jun 20, 2025 (99.84%)  | ComfyStream scaling, BYOC productionization |
| Protocol R&D SPE (Sidestream) | $360K (6-month)     | rickstaa / Foundation | Passed Jan 2026               | Security triage, protocol upgrades, testnet |
| LiveInfra SPE (quarterly)     | ~7,152 LPT/quarter  | FTK Staking           | Passed (Q3, Q4 2025, Q1 2026) | Community Arbitrum RPC node                 |
| LISAR SPE                     | 4,450 LPT (~$29K)   | LISAR team            | Passed Sep 16, 2025           | Fiat-to-delegation gateway                  |
| Streamplace 2.0               | 100,000 LPT         | iameli (Eli)          | Passed Apr 26, 2025           | Decentralized livestreaming                 |
| Creative Industries SPE       | 12,500 LPT          | Sean Bradford         | **Failed** (31% support)      | Creative workflow adoption                  |

The most contentious proposal was the original **Transformation SPE "Surge" strategy**, which initially requested **119,000 LPT (~$786K)** for 9 workstreams. Community member Karolak argued treasury should invest in DeFi yield instead; pablov called it "exponential onchain grifting"; Authority_Null (an orchestrator) demanded base AI supply issues and UX friction be fixed first; vires-in-numeris said 9 workstreams were too overwhelming. The proposal was revised downward to 44,500 LPT before passing.

### Governance participation and quorum dynamics

Governance uses **stake-weighted voting** with a **33% quorum** of active staked LPT and a **50% threshold** to pass. The top 5 staked orchestrators hold approximately **50% of total active stake**, making their votes effectively decisive. Orchestrators vote on behalf of their delegators by default; delegators can override.

Participation remains a persistent challenge. The Creative Industries SPE attracted only **13.77% participation** — enough to illustrate how proposals can fail simply from apathy. GovWorks (StableLab) completed its first term in July 2025, having standardized proposal formats and established governance digests. The Livepeer Foundation launched a Governance Dashboard to increase transparency, and the Explorer added "vote with reason" features.

### Key governance actors

**Proposers and Foundation leaders:** b3nnn (Foundation governance lead), honestly_rich (Foundation), rickstaa (Foundation/Protocol R&D), dob/Doug Petkanics (co-founder, Livepeer Inc.), awma (Shtuka Research, LIP-107 author). **SPE operators:** FTK Staking/ftkuhnsman (LiveInfra), \_ptr (MuxionLabs/AI SPE), DeFine and Dane (Embody SPE), drieddate_sidestream (Protocol R&D partner, ex-MakerDAO). **Vocal community critics:** Karolak (long-time holder since Merkle Mine, skeptical of treasury spending and AI pivot), pablov (most critical voice, questions Foundation legitimacy), obodur (delegator, credits LPT market cap to Doug's personal relationships), Authority_Null (orchestrator, frustrated with AI reliability vs. centralized alternatives).

---

## B) Community sentiment: excitement about AI, anxiety about economics

### The AI pivot generates both hope and skepticism

The community's emotional center of gravity has shifted decisively toward AI. The November 2025 blog post "A Real-time Update to the Livepeer Network Vision" formally declared the network's mission as **"AI Infrastructure For Real-Time Video"** — citing network fees up 3x year-over-year with 72% driven by AI inference. Multiple forum members identify what Pon called an **"identity crisis"**: transcoding demand is dropping while AI hasn't yet generated meaningful self-sustaining demand.

**What excites the community:** Daydream (real-time generative AI video platform) is the most talked-about product. Streamplace's integration with Skylight Social (a Mark Cuban-backed TikTok alternative that hit #1 on the App Store) generated intense enthusiasm — obodur called it the "most excited I've been since AI was announced." The Burning Man "Playa Daydream" activation (August 2025) demonstrated real-time AI video at scale. ComfyStream's expansion into multimodal support (text, audio, video) and the MuxionLabs rebrand showed technical maturation.

**What causes pain:** Authority_Null, an active orchestrator, reports that AI models frequently don't respond, requiring manual reboots — friction that makes the network unreliable compared to centralized providers like OpenAI. The **massive imbalance between inflation rewards (~$18M/quarter) and fee revenue (~$204K/quarter)** is a structural concern. Delegator count has declined steadily from **3,332 to 2,683** over a year. The LPT token price collapse from ~$6 to ~$2 undermines treasury purchasing power and delegator confidence. Karolak warns the protocol could crash to "$1-2 LPT" and questions whether marketing spend produces results.

### Inflation: the perennial debate

The inflation discussion is Livepeer's most enduring governance thread, spanning at least four major forum discussions since 2023. The current annualized inflation rate is approximately **28%** — among the highest in crypto. With participation hovering around 50%, inflation has been slowly decreasing, but the community views current yields as unsustainably high (**>3x nearest competitors** according to Shtuka Research). The progression from dob's original LIP-100 discussion (March 2025), through the Foundation-commissioned community survey (October/November 2025), to awma's concrete LIP-107 proposal (January 2026) shows a deliberate effort to build consensus for emissions reduction.

### The Surge strategy and Foundation legitimacy

The Livepeer Foundation (Cayman non-profit, launched June 2025) introduced **9 workstreams** under its "Surge" strategy: Brand & Comms, Builders, Contributor Coordination, Ecosystem Data & Tooling, LPT Participation, Core Protocol R&D, Core Dev Infrastructure, Orchestrators & Supply, and Active Capital Management. Four Advisory Boards (4-8 members each, 6-month terms) were established to provide strategic direction. While dob and established contributors broadly support this structure, a vocal faction questions whether the Foundation adds value or primarily creates overhead. The forum thread on Livepeer Inc's role "in the age of the Livepeer Foundation" attempted to clarify the division of labor: Inc focuses on real-time AI video products (Daydream), while the Foundation coordinates ecosystem-wide strategy.

---

## C) Developer-facing tools and infrastructure: a maturing but complex stack

### Current APIs, SDKs, and tools

Livepeer's developer surface has expanded substantially. Three distinct SDK families exist:

**Livepeer Studio SDKs** (managed gateway): TypeScript/JavaScript (`livepeer` npm, v3.5.0), Python, Go, and React pre-built components. These wrap the hosted Studio API for stream creation, video-on-demand, transcoding, and AI inference.

**Livepeer AI SDKs**: TypeScript (`@livepeer/ai`), Python (`livepeer-ai-python`), Go (`livepeer-ai-go`) — all updated October 2025. These target the AI inference API directly, supporting text-to-image, image-to-image, image-to-video, audio-to-text, LLM, and more.

**New tools from MuxionLabs (Phase 4 deliverables):** The `@muxionlabs/byoc-sdk` TypeScript package simplifies browser-to-gateway BYOC streaming with WebRTC, React hooks, and connection management. **PyTrickle** is a Python package enabling any Python codebase to participate as a Livepeer AI worker by importing a single module. Both represent a significant step toward permissionless developer onboarding.

### ComfyStream: real-time AI video's backbone

ComfyStream is an open-source ComfyUI extension that processes video frames through ComfyUI workflows in real time. It takes a video stream as input, routes each frame through a user-defined computational graph (DAG), and outputs the transformed stream. During Phase 4 (H2 2025), ComfyStream expanded substantially:

- **Text output support** (enabling transcription and non-image data)
- **Dynamic warmup and automatic modality detection**
- **4 new custom node sets** added to the ComfyUI Stream Pack: StreamDiffusion + SDXL + TensorRT + LoRAs + ControlNets + IP-Adapters; StreamDiffusion V2; SuperResolution (real-time video upscaling); AudioTranscription + SRT
- **5 end-to-end pipelines** shipped
- Now runs on the Livepeer BYOC stack, enabling multiple models and disparate workflows on one orchestrator in a single container

Primary users include Daydream (the flagship consumer product), the Embody SPE (AI-powered avatars using Live2D, Three.js, and Unreal Engine), StreamDiffusionTD (a TouchDesigner operator by Lyell Hintz), and VTuber creators. Daydream's "Scope" product — a free, open-source desktop app (Windows/macOS) for real-time AI creation — launched as the most visible ComfyStream-powered application.

### BYOC (Bring Your Own Container): the platform play

BYOC allows developers to register any Docker container conforming to a standard interface as a Livepeer pipeline. This is Livepeer's extensibility mechanism — moving from a fixed set of AI pipelines to an open platform. **Batch BYOC** is production-ready; **streaming BYOC** was merged into go-livepeer's main branch with v0.8.9 (January 2026). Billing operates at 1 ticket per second of compute. The Embody SPE is actively running BYOC jobs in production, and Streamplace's transcription integration was in staging as of January 2026. MuxionLabs published reference implementations at `example-apps.muxionlabs.org` and the `byoc-example-apps` GitHub repository.

### AI model and pipeline support

The network supports both **batch** and **real-time** AI inference pipelines:

**Batch pipelines:** text-to-image, image-to-image, image-to-video (including LTX-Video), image-to-text, text-to-speech, audio-to-text (Whisper), segment-anything-2 (Meta SAM2), upscale, and LLM inference.

**Real-time pipelines:** live-video-to-video via Cascade infrastructure and ComfyStream, supporting StreamDiffusion (SD1.5, SDXL with TensorRT), ControlNet (depth, canny), IPAdapter for style transfer, FaceID for face preservation, TemporalNet for temporal consistency, and multi-stage pipelines (latent feedback + upscaling).

### New repositories signaling technical direction

Several new GitHub repositories appeared during this period. **NaaP (Node as a Platform)** — created February 2026 — is a plugin-based platform for the Livepeer AI Compute Network built with Next.js 15 and React 19, using a micro-frontend architecture with 12 plugins loaded as UMD bundles. This signals intent to make orchestrator nodes themselves extensible. **livepeer-python-gateway** (March 2026) suggests expansion of gateway implementations beyond Go for broader developer accessibility. A new **roadmap** repository (September 2025) uses GitHub Projects for community transparency.

---

## D) Network technical status: strong usage growth, troubling economics

### Protocol releases and upgrades

Four **go-livepeer** releases shipped between July 2025 and March 2026:

**v0.8.7** (September 6, 2025) introduced a fundamental **payment model change** from "pay per pixel" to "per time," added ComfyUI/StreamDiffusion pipeline support, BYOC billing (1 ticket/second), and the LiveSelectionAlgorithm for AI orchestrator selection. **v0.8.8** (September 25) added SDXL and FaceID containers. **v0.8.9** (January 7, 2026) delivered a gateway-native WHEP server for real-time AI video playback and BYOC streaming workload processing. **v0.8.10** (March 10, 2026) — the latest release — implemented a full AI/Live Remote Signer (separating signing from node operation) and merged BYOC capabilities with the existing capability and pricing system.

The **ai-runner** saw a major **v0.14.0** release (December 22, 2025) with a complete StreamDiffusion overhaul: prompt and seed blending, ControlNet support, IPAdapter style transfer, FaceID, NSFW detection, dynamic TensorRT resolution, and an extensible runner plugin architecture. The runtime moved from Conda to `uv` for faster dependency management.

### Network metrics at a glance

| Metric                    | Value        | Notes                                        |
| ------------------------- | ------------ | -------------------------------------------- |
| LPT Price                 | ~$2.08–$2.30 | Down from ~$6 (mid-2025); ATH was $99 (2021) |
| Market Cap                | ~$103–113M   | CoinGecko rank ~#256                         |
| Circulating Supply        | ~50M LPT     | No hard cap (inflationary)                   |
| Active Orchestrators      | 100          | Protocol-defined maximum set                 |
| Staking Participation     | ~50%         | Hovering at target threshold                 |
| Active Delegators         | ~2,683       | Declining (was 3,332 in Q2 2024)             |
| Annualized Inflation      | ~28%         | Trending down as participation crosses 50%   |
| Q3 2025 Total Fees        | $203,700     | +76% QoQ                                     |
| Q3 2025 AI Fees           | $147,100     | >70% of total; +131% QoQ                     |
| Q3 2025 Staking Rewards   | ~$18.1M      | +30% QoQ                                     |
| Q3 2025 Minutes Processed | 89.4M        | +94% QoQ; peak 1.9M in one day               |
| Layer 2                   | Arbitrum One | Fully migrated since Feb 2022                |

### The fee-to-inflation imbalance

The most striking structural metric is the **89:1 ratio** of inflation rewards to fee-based revenue in Q3 2025 (~$18.1M staking rewards vs. ~$204K fees). While AI fee growth is rapid — from $7K in Q4 2024 to $147K in Q3 2025, a **21x increase in three quarters** — it remains orders of magnitude below the value distributed through inflation. Unit revenue is also declining ($2.51 to $2.28 per 1,000 minutes between Q2 and Q3 2025) as workloads shift toward lower-bitrate AI-native processing. The top 5 orchestrators by stake earn 40-50% of staking rewards but capture only ~20% of transcoding fees — a structural misalignment between stake-weighted rewards and capability-weighted job routing.

### Arbitrum L2 status

Livepeer has been **fully operational on Arbitrum One since February 2022** (the Confluence/LIP-73 upgrade). All staking, rewards, fees, and governance occur on Arbitrum with protocol actions disabled on Ethereum mainnet. The community-maintained Arbitrum RPC service (LiveInfra SPE) provides free endpoints targeting 99.9% uptime. LPT can be bridged between L1 and L2 via custom bridge contracts (~10 min deposit, ~1 week withdrawal).

### Key analytics dashboards

Active Dune dashboards include: `dune.com/rickstaa/livepeer-ai` (AI subnet metrics), `dune.com/y.fu/Livepeer-Rewards` (rewards and fees), `dune.com/dob/livepeer-treasury` (treasury), and `dune.com/jbrukh/livepeer-dashboard` (general). Messari publishes detailed quarterly reports (Q1, Q2, Q3 2025 available) that serve as the most authoritative analytical source.

---

## E) Audience mapping: who participates and why

### Delegators: yield-motivated but shrinking in number

Approximately **2,683 active delegators** stake LPT to orchestrators, down from 3,332 a year ago. Their primary motivation is **inflation-based yield** — at current rates, staking returns exceed 3x the nearest competitors in crypto. However, declining LPT price means USD-denominated returns have compressed severely: Q3 2025 staking rewards were $18.1M, but with token price at ~$2 (March 2026) versus ~$6 (mid-2025), the real value of rewards has eroded. The Foundation's "Why Delegation Still Matters in a Low-Inflation Environment" blog post (July 2025) attempted to shift the narrative toward fee-based revenue, but fee revenue (~$204K/quarter) remains too small to sustain delegator interest on its own. The LISAR SPE's fiat-to-delegation gateway (funded September 2025) targets new delegator onboarding with USD/EUR/GBP/NGN support.

### Developers: AI-native builders arriving, video developers as base

The developer audience is bifurcating. **Legacy video developers** use Livepeer Studio's managed API for transcoding and livestreaming — a straightforward REST API with SDKs in four languages. **AI-native developers** are the growth segment, attracted by ComfyStream's integration with the ComfyUI ecosystem, BYOC's promise of permissionless custom model deployment, and Daydream's API for real-time inference without local GPU requirements. The Encode Club Real-Time Video AI Bootcamp (Q1 2025) and the ChatandBuild "Live Video AI Meets Fashion" hackathon (May 2025) represent developer acquisition channels. Forum activity shows developers asking about BYOC onboarding, LoRA fine-tuning, low-latency requirements, and multi-GPU orchestration.

### The "About tab" audience: investors, researchers, and press

The broader audience consuming Livepeer's public narrative includes **DePIN investors** (Livepeer is regularly grouped with Filecoin, Render, Akash, and Helium in the decentralized infrastructure category), **AI-themed crypto traders** (LPT saw a 509% spike on August 30, 2025 and a 20% rally in January 2026), **crypto press** (Messari, CoinDesk, CoinTelegraph have covered Livepeer), and **creative professionals** discovering the network through Daydream and the AI x Open Media Forum at Devconnect Buenos Aires. Doug Petkanics's presence at DePIN Day alongside Filecoin and Akash leaders positions Livepeer within the institutional DePIN narrative. The Livepeer Foundation's 3-phase roadmap (Foundation 2025 → Scaling 2026-2027 → Decentralization 2028+) is clearly designed for this investor/researcher audience.

### What brought them here — and what might push them away

The AI inference narrative is unambiguously the primary draw for new participants. Forum members explicitly reference the AI pivot as what renewed their interest. However, the community harbors legitimate concerns about **whether AI demand is organic or subsidized** (Agent SPE's "Flywheel" pilot delivered 1.5+ ETH per week in incentivized payments), whether the protocol can compete with centralized AI providers on reliability, and whether treasury disbursements create self-defeating sell pressure on a token with limited L2 liquidity.

---

## Conclusion: a network at the threshold

Livepeer between July 2025 and March 2026 presents a network executing an ambitious pivot with measurable traction — AI fees grew 21x in three quarters — while confronting structural economic challenges that its governance system is only beginning to address. The inflation-to-fees imbalance (89:1), declining delegator count, and collapsing token price create headwinds that no amount of technical progress alone can resolve. LIP-107's modest emissions brake and LIP-101's treasury restart represent the community's first concrete steps toward economic sustainability, but the fundamental question remains whether real AI demand can scale fast enough to replace inflation as the network's economic engine.

The technical stack has matured considerably: BYOC streaming is production-ready, ComfyStream supports multimodal workflows, NaaP signals a platform-play ambition, and four go-livepeer releases in nine months demonstrate sustained engineering velocity. The SPE model, despite controversy over the Transformation SPE's initial scope, has funded consequential work — Sidestream's protocol security role, MuxionLabs' BYOC infrastructure, and LiveInfra's community RPC service.

The most important unresolved question is not technical but economic: **can Livepeer's AI fee revenue, currently ~$800K annualized and growing rapidly, reach the scale needed to make the 89:1 inflation ratio sustainable before delegator attrition and token price decline undermine the network's economic model?** The community's answer to this question — visible in its governance votes, treasury decisions, and developer activity — will define the next phase of the protocol's evolution.

**Confidence notes:** Treasury proposal amounts and forum thread details carry high confidence (sourced from primary forum posts). Exact vote counts for LIP-101 and LIP-107 could not be confirmed due to JavaScript-rendered Explorer pages. Token price data (CoinGecko) and network metrics (Messari Q1-Q3 2025 reports) are authoritative. Q4 2025 and Q1 2026 Messari reports were not yet published at time of research, creating a data gap for the most recent quarter. The final pass/fail status of LIP-107 (voting concluded early March 2026) is unconfirmed.
