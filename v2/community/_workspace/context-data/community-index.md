# Community Tab — Complete Content Index

> Compiled 2026-04-13. All items sourced from repo search + web research. Each entry agent-read or web-verified.
> **Aim:** Populate the Community Tab for Livepeer Docs v2.

<CustomDivider />

## 1. Collation Page — Podcasts, Videos, Blogs

### Podcasts

> No dedicated Livepeer podcast series exists. Livepeer appears as guest spots on crypto/web3 podcasts. The closest equivalents are the Livepeer Fireside (YouTube series) and community calls recorded on YouTube.

| Name | Platform | Description | URL | Source |
|---|---|---|---|---|
| Livepeer Fireside | YouTube (weekly series) | Weekly ecosystem deep-dives, interviews, protocol updates — recorded on Discord, published to YouTube | https://www.youtube.com/@livepeer | v2/community/connect/trending-topics.mdx |
| Watercooler Chat | Discord + YouTube | Weekly open community discussion — informal, recorded | https://www.youtube.com/@livepeer | v2/community/connect/connect-channels.mdx |
| Dev Call | Discord + YouTube | Bi-weekly developer call — SPE teams, core contributors, protocol updates | https://www.youtube.com/@livepeer | v2/community/connect/connect-channels.mdx |
| Treasury Talk | Discord + YouTube | Bi-weekly treasury and governance discussion — proposal authors, delegators, orchestrators | https://www.youtube.com/@livepeer | v2/community/connect/connect-channels.mdx |
| Know Your Orchestrator (KYO) | Live Pioneers (YouTube/Medium) | Interview series with orchestrator operators — infrastructure, motivation, setup | https://livepioneers.app | v2/community/resources/guides.mdx |

### Videos — YouTube Channels

| Channel | URL | Content | Who |
|---|---|---|---|
| **Livepeer Official** (@livepeer) | https://www.youtube.com/@livepeer | Community calls, Fireside series, governance, protocol demos, educational | Livepeer Foundation |
| **Livepeer Project** (@LivepeerProject) | https://www.youtube.com/@LivepeerProject | Staking tutorials, protocol overviews | Livepeer |
| **Livepeer Org** (@LivepeerOrg) | https://www.youtube.com/@LivepeerOrg | Orchestrator/gateway content | Livepeer |
| **Daydream** | https://www.youtube.com/channel/UCviyh_-8H2vkYq9ROHMBffQ | Real-time AI video demos, product updates | Daydream team |
| **Embody Media** (@Embody-Media) | https://www.youtube.com/@Embody-Media | AI avatar demos, product content | Embody team |
| **Titan Node** (@TitanNode) | https://www.youtube.com/@TitanNode | Community orchestrator/gateway setup tutorials | Community |
| **Live Pioneers** (@livepioneers) | YouTube | Multilingual community content, KYO interviews | Community |

### Videos — Specific Referenced Content

| Title | URL | Type | Topic | Source file |
|---|---|---|---|---|
| Livepeer Primer Vision Video | https://www.youtube.com/embed/BXMArwnp-No | About | Protocol vision and story | v2/home/about-livepeer/vision.mdx |
| A Decade of Bleeding Edge Innovation | https://www.youtube.com/embed/4xOuRIVLnv8 | Presentation | Livepeer history and evolution | v2/home/about-livepeer/evolution.mdx |
| Livepeer as Trusted Execution Layer | https://www.youtube.com/embed/_PnB7Kc9zx4 | Presentation | Benefits of decentralised compute | v2/home/about-livepeer/benefits.mdx |
| AI Inference Operations Setup | https://www.youtube.com/watch?v=UKWdvJBqrNw | Tutorial | AI orchestrator setup | v2/orchestrators/guides/ai-and-job-workloads/ |
| Real-time AI Setup | https://www.youtube.com/watch?v=7a6kBrL0RYg | Tutorial | Real-time AI pipeline | v2/orchestrators/guides/ai-and-job-workloads/ |
| Diffusion Pipeline Setup | https://www.youtube.com/watch?v=Kf3fV00XFRU | Tutorial | Batch AI diffusion setup | v2/orchestrators/guides/ai-and-job-workloads/ |
| Reward Mechanics Explainer | https://www.youtube.com/embed/OVMjzJKMJnI | Educational | LPT reward mechanics | v2/orchestrators/guides/staking-and-rewards/ |
| Gateway Single-Click Deploy | https://www.youtube.com/embed/csJjzoIw_pM | Tutorial | GWID gateway deployment | v2/gateways/guides/deployment-details/ |
| Livepeer Staking in 10 Minutes | https://www.youtube.com/watch?v=6nZrZHz12-g | Tutorial | Delegation walkthrough | v2/delegators/resources/knowledge-hub/ |
| Daydream Demo | https://www.youtube.com/embed/uLXtpFVrtP4 | Demo | Daydream real-time AI video | v2/solutions/daydream/overview.mdx |
| Streamplace Demo (Eli Mallon) | https://www.youtube.com/embed/-xjd_iaULT0?start=63 | Demo | Streamplace social video | v2/solutions/streamplace/overview.mdx |
| Embody Demo | https://www.youtube.com/embed/_MAM5ZPsTdM | Demo | Embody AI avatars | v2/solutions/embody/overview.mdx |
| Livepeer Studio Intro | https://www.youtube.com/embed/Q4xIbubnqRI | Overview | Studio platform intro | v2/solutions/livepeer-studio/overview.mdx |
| Frameworks Demo | https://www.youtube.com/embed/DKBRp0U-RKw | Demo | Frameworks video infra | v2/solutions/frameworks/overview.mdx |

### Videos — Automated Data Feeds

| Feed | Data file | Update method | Content |
|---|---|---|---|
| Livepeer YouTube feed | snippets/data/social-feeds/youtubeData.jsx | fetch-youtube-data.js (manual) | 100+ videos from @livepeer channel |
| Daydream YouTube feed | snippets/data/social-feed-solutions/daydream/youtubeData.jsx | fetch-youtube-data.js | Daydream channel videos |
| Embody YouTube feed | snippets/data/social-feed-solutions/embody/youtubeData.jsx | fetch-youtube-data.js | Embody channel videos |
| Livepeer Studio YouTube feed | snippets/data/social-feed-solutions/livepeer-studio/youtubeData.jsx | fetch-youtube-data.js | Studio product videos |

### Blogs — Official

| Name | URL | Platform | Content | Data feed |
|---|---|---|---|---|
| **Livepeer Blog** | https://blog.livepeer.org | Ghost CMS | Foundation announcements, vision updates, product launches, ecosystem news | snippets/data/social-feeds/ghostBlogData.jsx (daily n8n sync) |
| **Livepeer Medium** | https://medium.com/livepeer-blog | Medium | Legacy blog content — protocol history, early updates | — |
| **Livepeer Mirror** | https://mirror.xyz/livepeer.eth | Mirror | On-chain publications — treasury reviews, governance proposals | — |
| **Daydream Blog** | https://blog.daydream.live | Ghost CMS | Daydream product updates, AI video content | snippets/data/social-feed-solutions/daydream/blogData.jsx |

### Blogs — Key Posts Referenced in Docs

| Title | URL | Date | Topic |
|---|---|---|---|
| Introducing The Livepeer Foundation | https://blog.livepeer.org/introducing-the-livepeer-foundation/ | Jun 2025 | Foundation launch |
| A Real-time Update to the Livepeer Network Vision | https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/ | 2025 | Vision shift to real-time AI |
| Livepeer Incorporated! (and realtime AI) | https://blog.livepeer.org/livepeer-incorporated-and-realtime-ai/ | 2025 | Livepeer Inc + AI pivot |
| Introducing Daydream | https://blog.livepeer.org/introducing-daydream/ | 2025 | Daydream product launch |
| Daydream.live: A Glimpse into the Future | https://blog.livepeer.org/daydream-live-a-glimpse-into-the-future-of-realtime-ai-video-on-livepeer/ | 2025 | Daydream vision |
| Onchain Treasury 2024 Review | https://mirror.xyz/livepeer.eth/xgkqv6KLXLyD32CFPX-yYyKyjGlhvO5w1Ny6b9temno | 2024 | Annual treasury report |

### Blogs — Third-Party (Delegator/Staking Guides)

| Source | Title | URL |
|---|---|---|
| CoinMonks (Medium) | How to Stake your LPT Tokens with Livepeer: Complete Guide | https://medium.com/coinmonks/how-to-stake-your-lpt-tokens-with-livepeer-the-complete-guide-to-become-a-delegator-d8f5477d287d |
| Stake Capital (Medium) | Livepeer Delegation Tutorial | https://medium.com/stakecapital/livepeer-delegation-tutorial-f7673cc888db |
| Figment (Medium) | Livepeer Staking Delegation Guide | https://medium.com/figment/livepeer-delegation-guide-517e2d64792e |
| Livepeer (Medium) | An overview of the Livepeer network and LPT | https://medium.com/livepeer-blog/an-overview-of-the-livepeer-network-and-lpt-44985f9321ff |
| Figment Insights | Livepeer: Staking Guide | https://www.figment.io/insights/livepeer-staking-delegation-guide-2/ |
| Staked | Livepeer (LPT) Staking Guide | https://blog.staked.us/blog/livepeer-lpt-staking-guide |
| DeFiCrypto.dev | How to Delegate LPT on Livepeer on Arbitrum | https://deficrypto.dev/how-to-delegate-lpt-livepeer-arbitrum/ |
| Koinx | How to Stake Livepeer | https://www.koinx.com/staking-guides/how-to-stake-livepeer |

<CustomDivider />

## 2. Get in Touch / Help (for Partners)

### Official Contact & Support Channels

| Channel | URL | Purpose | Audience |
|---|---|---|---|
| **Discord** | https://discord.gg/livepeer | Real-time support, #support channel, #developers, #orchestrators, #ai | All — ~19,500 members |
| **Forum** | https://forum.livepeer.org | Long-form governance, proposals, help threads | Governance participants, partners |
| **Forum — Help: Getting Started** | https://forum.livepeer.org/c/help | Dedicated help category for newcomers | New participants |
| **Telegram** | https://t.me/livepeerorg | Quick updates and announcements | General |
| **Telegram (Multilingual)** | https://livepioneers.app | 8+ language groups (Chinese, German, Russian, Spanish, French, Italian, Japanese, Portuguese) | International delegators |
| **X/Twitter** | https://x.com/Livepeer / https://x.com/LivepeerNetwork | Ecosystem updates, announcements | General |
| **Reddit** | https://www.reddit.com/r/livepeer/ | Community discussion (unofficial) | General |
| **GitHub** | https://github.com/livepeer | Code, docs, LIPs, issues, awesome-livepeer | Developers, contributors |
| **Dev Hub** | https://www.livepeer.org/dev-hub | Grant applications, programme listings, SDK access | Developers, builders |
| **Community Hub** | https://www.livepeer.org/community-hub | Governance, bounties, events, tools | All |
| **GovWorks Notion Hub** | Notion (linked from governance.mdx) | SPE dashboard, governance coordination, mentorship | SPE operators, governance |
| **Luma Events** | https://luma.com/livepeer | In-person and online events calendar | All |
| **Immunefi** | (linked from opportunities) | Bug bounty programme | Security researchers |

### Recurring Community Calls

| Call | Frequency | Platform | Audience | Recordings |
|---|---|---|---|---|
| Watercooler Chat | Weekly | Discord | Open community | YouTube (@livepeer) |
| Dev Call | Bi-weekly | Discord | Developers, SPE teams, core contributors | YouTube (@livepeer) |
| Treasury Talk | Bi-weekly | Discord | Proposal authors, delegators, orchestrators | YouTube (@livepeer) |

### For Partners Specifically

| Resource | URL | What it covers |
|---|---|---|
| livepeer.org/ecosystem | https://www.livepeer.org/ecosystem | Full ecosystem directory — submit your project |
| Dev Hub | https://www.livepeer.org/dev-hub | SDKs, grants, programme applications |
| Discord #developers | https://discord.gg/livepeer | Technical integration support |
| Forum — Governance | https://forum.livepeer.org/c/governance | Proposal process, SPE creation |

<CustomDivider />

## 3. SPEs (Special Purpose Entities)

### What Are SPEs?

SPEs are treasury-funded organisations approved by LPT token holders (via on-chain governance, LIP-89/90/91/92) to execute specific projects for the Livepeer network. Funded from the on-chain treasury (10% of LPT inflation rewards per block since December 2023).

### Active SPEs

| SPE Name | Mandate | Operator | Approved | Funding | Status | Source file |
|---|---|---|---|---|---|---|
| **GovWorks** | Meta-governance — SPE templates, mentorship, proposal standardisation, treasury coordination | StableLab | Feb 2025 | — | Active | v2/community/ecosystem/governance.mdx |
| **AI Video SPE (Stage 4)** | ComfyStream, BYOC containers, AI pipeline infrastructure | — | Jun 2025 | 56,560 LPT | Active | v2/community/ecosystem/governance.mdx |
| **LiveInfra** | Community Arbitrum Node — free RPC endpoint, 99.9% uptime | — | Jul 2025 | 7,152 LPT | Active | v2/community/ecosystem/governance.mdx |
| **GWID** | Gateway wizard and simplified one-click gateway deployment | — | May 2025 | 6,600 LPT | Active | v2/community/ecosystem/governance.mdx |
| **LISAR** | Fiat-to-delegation gateway — USD, EUR, GBP, NGN on-ramps for staking | — | Sep 2025 | 4,450 LPT | Active | v2/community/ecosystem/governance.mdx |
| **Transformation** | Capital, builders, and development coordination; treasury diversification | — | Sep 2025 | 44,500 LPT | Active | v2/community/ecosystem/governance.mdx |
| **Cloud SPE** (Livepeer.Cloud) | Public gateway infrastructure — managed gateways for RTMP video and AI inference | Speedy Bird, Mike Zupper/Xode App, Papabear/Solar Farm | Active | — | Active | v2/gateways/guides/roadmap-and-funding/ |
| **Agent SPE** | AI VTuber infrastructure; Livepeer integration into ai16z Eliza framework | — | Apr 2025 | 30,000 LPT | Active (Messari-tracked) | v2/developers/guides/opportunities/ |
| **LLM SPE** | High-performance LLM pipeline with OpenAI-compatible API | — | Active | — | Active (Production) | v2/developers/guides/opportunities/ |
| **NaaP SPE** | Network as a Platform — multi-tenant gateway, JWT auth, developer API keys, usage metering | — | Active | — | In development | v2/gateways/guides/roadmap-and-funding/ |
| **Protocol R&D SPE** (Sidestream) | Vulnerability triage, safe upgrades, protocol improvements, Immunefi triaging pipeline | Sidestream | Active | — | Active | Web search (forum) |
| **Streamplace SPE** | Decentralised social video layer — C2PA provenance, AT Protocol/Fediverse ready | Eli Mallon | Active | — | Active | v2/solutions/streamplace/overview.mdx |

### SPE Resources

| Resource | URL | What |
|---|---|---|
| GovWorks Notion Hub | Notion link in governance.mdx | SPE dashboard, governance mentorship, templates |
| SPE Dashboard | Notion link in governance.mdx | All SPEs, status, funding, deliverables |
| Governance Process Guide | https://forum.livepeer.org/t/livepeer-governance-process/2767 | Definitive 6-step SPE proposal guide |
| Explorer Treasury | https://explorer.livepeer.org/treasury | On-chain treasury viewer and voting |

### SPE Governance Process (6 steps)

1. Pre-proposal on Forum → 2. Community discussion → 3. On-chain proposal (100 LPT minimum) → 4. Voting window (~9 days / 10 rounds) → 5. 33% quorum + 50% passing threshold → 6. Treasury disbursement

<CustomDivider />

## 4. Community Tooling & Items

### Official Interfaces

| Tool | URL | Description | Audience |
|---|---|---|---|
| **Livepeer Explorer** | https://explorer.livepeer.org | Staking, delegation, governance voting, treasury proposals, orchestrator browsing | All |
| **Livepeer Foundation Site** | https://livepeer.foundation | Foundation news, advisory board outputs, workstreams | All |
| **Livepeer Forum** | https://forum.livepeer.org | Governance, treasury, community discussion (Discourse) | All |
| **Dev Hub** | https://www.livepeer.org/dev-hub | Grant applications, programme listings | Developers |

### Foundation Dashboards (launched mid-2025)

| Dashboard | Description | URL |
|---|---|---|
| Growth Dashboard | Fee distribution by job type and orchestrator | https://explorer.livepeer.org |
| Governance Dashboard | Proposal analytics, voter participation, delegate behaviour | https://explorer.livepeer.org |
| AI Compute Visualiser | Orchestrators, GPU resources, pipeline availability in AI subnet | https://explorer.livepeer.org |

### Protocol Analytics

| Tool | Description | URL |
|---|---|---|
| Livepeer Arbitrum Dune Dashboard | On-chain protocol state | https://dune.com/browse/dashboards?q=livepeer |
| Livepeer AI Dune Dashboard | AI subnet protocol state | https://dune.com/browse/dashboards?q=livepeer+ai |
| Messari: Livepeer Macro Financial Statements | Comprehensive on-chain financial data | Dune (Messari) |
| Messari Quarterly Reports | "State of Livepeer" quarterly analysis (Q1-Q3 2025+) | https://messari.io/project/livepeer/research |
| Web3 Index | Usage-based fee metrics | https://web3index.org |
| StakingRewards | LPT staking stats, APR, validators | https://stakingrewards.com/earn/livepeer |
| Orchestrator Payout Report | Payout data | https://tools.livepeer.cloud |

### Orchestrator & Node Operator Tools

| Tool | Description | Maintained by |
|---|---|---|
| Livepeer Exporter | Prometheus/Grafana enhanced monitoring | Community |
| Orchestrator Explorer | Browse orchestrator data and performance | Community |
| Stream Tester | Assess orchestrator streaming performance | Community |
| Test Streams Dashboard | Regional transcoding quality scores | Community |
| AI Inference Tester | AI pipeline statistics per orchestrator | Community |
| Orchestrator Pricing Visibility | Price-per-pixel tracking across orchestrators | Community |
| NaaP Analytics | SLA metrics, GPU performance, reliability (Grafana) | Cloud SPE |

### Monitoring & Alerting

| Tool | Description | Platform |
|---|---|---|
| Telegram Watcher Bot | Orchestrator notifications | Telegram |
| Livepeer Reward Watcher | Alert when orchestrator at risk of missing reward call | — |
| Docker Portainer Guide | Container management for node operators | Forum guide |
| livepeer/monitoring | Bundled Prometheus/Grafana monitoring stack | https://github.com/livepeer/livepeer-monitoring |
| Livepeer Income Reports | Python earnings calculations and tax reports | Community |

### Staking & Delegation

| Tool | Description | URL |
|---|---|---|
| Livepeer Explorer (Staking) | Official delegation interface | https://explorer.livepeer.org |
| Tenderize | Liquid staking protocol for LPT | https://www.tenderize.me |
| Community Arbitrum Node | Free RPC endpoint (LiveInfra SPE, 99.9% uptime) | LiveInfra SPE |

### SDKs & Developer Libraries

| SDK | Language | Maintained by | Repo |
|---|---|---|---|
| livepeer-js | TypeScript/JavaScript | Livepeer Inc | https://github.com/livepeer/livepeer-js |
| livepeer-ai-js | TypeScript/JavaScript | Livepeer Inc | https://github.com/livepeer/ai-worker |
| livepeer-ai-python | Python | Livepeer Inc | https://github.com/livepeer/ai-worker |
| livepeer-go | Go | Livepeer Inc | https://github.com/livepeer/go-livepeer |
| @livepeer/react | React UI components | Livepeer Inc | https://github.com/livepeer/livepeer-js |
| ComfyStream | Python/ComfyUI real-time AI | AI Video SPE | https://github.com/yondonfu/comfystream |
| ai-runner | Python pipeline framework | Livepeer Inc | https://github.com/livepeer/ai-runner |
| PyTrickle | Python BYOC framework | Livepeer Inc | https://github.com/livepeer/pytrickle |
| MistServer | C++ streaming toolkit | DDVTech (Livepeer Inc) | https://mistserver.org |
| Bubble Plugin | No-code Livepeer integration | Community | Bubble marketplace |

### Curated Lists

| Resource | URL | Description |
|---|---|---|
| awesome-livepeer (GitHub) | https://github.com/livepeer/awesome-livepeer | Community-curated directory of tools, SDKs, projects |
| livepeer.cool | https://livepeer.cool | Browseable web frontend for awesome-livepeer |
| Livepeer Academy | https://livepeer.academy | Free community-driven education — tutorials, FAQ, games, tools, grants |

### Community Initiatives

| Initiative | URL | Description | Content |
|---|---|---|---|
| **Live Pioneers** | https://livepioneers.app | Independent delegator community initiative | Weekly ecosystem recaps, Know Your Orchestrator interviews, multilingual content (8+ languages), Telegram groups |
| **Livepeer Academy** | https://livepeer.academy | Community education platform | Video tutorials, quests, FAQ, events, tools directory |
| **Livepeer Primer** | https://livepeer.org/primer | Visual 10-minute protocol overview | Non-technical onboarding |

<CustomDivider />

## 5. Partners, Integrations & Ecosystem Apps

### Livepeer Products (Official)

| Product | URL | Description | Builder | Category |
|---|---|---|---|---|
| **Livepeer Studio** | https://livepeer.studio | Developer API & dashboard — livestreaming, VOD, transcoding, SDKs, React Player | Livepeer Inc | Video (Hosted gateway) |
| **Daydream** | https://daydream.live | Open-source toolkit for world models and real-time AI video | Daydream team | AI Video |
| **Frameworks** | https://frameworks.network | Self-hosted video infrastructure (MistServer + StreamCrafter + Skipper) | Frameworks SPE | Video (Self-hosted) |
| **Streamplace** | https://stream.place | Open-source decentralised social video layer — C2PA provenance, AT Protocol ready | Streamplace SPE | Social Video |
| **Embody** | https://embody.zone | Real-time interactive 3D AI avatars (Unreal Engine) — education, training, communication | Embody team | AI Avatars |
| **Livepeer Cloud** | https://livepeer.cloud | Public gateway — free access for RTMP video and AI inference | Cloud SPE | Public Gateway |

### AI Video Startup Programme — Cohort 1 (Aug-Oct 2024)

| Startup | Description | Category |
|---|---|---|
| Flipguard | AI video security/content moderation | AI Security |
| Katana | AI video tools | AI Video |
| Newcoin | AI-powered creator economy | AI Creator |
| Operator | Infrastructure marketplace | Infrastructure |
| Origin Stories | AI-powered storytelling | AI Creative |
| Refraction | AI video effects/editing | AI Video |
| Supermodel | AI video creation | AI Creative |
| StreamEth | Ethereum event streaming | Video Streaming |

### Ecosystem Apps (from livepeer.org/ecosystem + docs)

| App | URL | Description | Category |
|---|---|---|---|
| **Huddle01** | https://huddle01.com | Web3 native video meetings — NFT rewards, crypto tipping | Video Meetings |
| **Bonfire** | — | No-code community engagement platform for web3 creators | Community |
| **Kavarii** | — | Web3 video streaming — freedom of expression, creator monetisation | Video Streaming |
| **Minds** | https://minds.com | Open-source social network — integrated Livepeer Studio for live streaming | Social |
| **Fishtank Live** | — | 24/7 reality show — saved 55%+ on streaming costs via Livepeer | Entertainment |
| **Lenstube / LensPlay** | https://github.com/LensLive/lenstube | Decentralised video sharing on Lens Protocol + Livepeer | Social Video |
| **Buttrfly** | — | Decentralised social app (Farcaster, Lens, Zora integration) | Social |
| **Hey** | — | Lens-based decentralised social application | Social |
| **EthGlobal.tv** | — | Live event streaming for ETH events | Event Streaming |
| **Hypeshot** | — | Crypto-enabled livestreaming | Video Streaming |
| **LensPort** | — | Marketplace for Lens post NFTs | NFT |
| **LongTake NFT Publisher** | — | Video NFT publishing tool | NFT |
| **Mintflick** | — | Video NFT minting and sharing | NFT |
| **Monaverse** | — | 3D worlds with avatar/video streaming | Metaverse |
| **Orb** | — | Web3 discovery and social | Social |
| **Picarto.tv** | — | Creator livestreaming (artists/creative communities) | Video Streaming |
| **Pinsta** | — | Decentralised image/video sharing | Social |
| **SankoTV** | — | Event/media streaming | Video Streaming |
| **Serraform (Decentraland)** | — | Virtual world video integration | Metaverse |
| **The Lot Radio** | — | Radio/audio streaming | Audio |
| **Owncast** | https://owncast.online | Open-source self-hosted livestreaming with Livepeer gateway support | Self-hosted Video |
| **BeyondClub** | — | Web3 loyalty and membership platform | Web3 |
| **DiverseHQ** | — | Community knowledge and events hub | Community |
| **Gummys** | — | Community engagement and rewards | Community |
| **Xeenon** | — | Video streaming platform | Video Streaming |
| **LiveSpace** | — | Live streaming application | Video Streaming |
| **Glass** | — | Video platform | Video |
| **Beem** | — | Streaming application | Video Streaming |
| **Tribe Social** | — | Community platform | Social |
| **Unlonely** | — | Creator/community livestreaming | Video Streaming |
| **Switchboard** | — | Livestream management for webinars, sports, events | Video |
| **nytv.live** | — | NYC free independent 24/7 TV network | Broadcast |

### AI-Powered Apps

| App | Description | Category |
|---|---|---|
| Cloud AI Generator | AI-powered generation tools | AI Generation |
| Tsunameme | AI meme generation | AI Creative |
| Let's Generate | Generative AI tools | AI Generation |
| Inference By Stronk | Community AI inference | AI Inference |

### Infrastructure Integrations

| Integration | URL | Description | Category |
|---|---|---|---|
| **Dune Analytics** | https://dune.com | On-chain analytics dashboards (Livepeer, Livepeer AI, Messari) | Analytics |
| **The Graph (Subgraph)** | — | On-chain data indexing for protocol queries | Data |
| **Tenderize** | https://www.tenderize.me | Liquid staking protocol for LPT | DeFi |
| **Alchemy** | — | Arbitrum RPC provider | Infrastructure |
| **Infura** | — | Arbitrum RPC provider | Infrastructure |
| **Bubble.io** | — | No-code integration plugin for Livepeer | No-code |
| **Luma** | https://luma.com/livepeer | Events calendar platform | Events |
| **Encode Club** | https://www.encode.club | AI Video Startup Programme + Real-Time Video AI Bootcamp partner | Education |
| **Immunefi** | — | Bug bounty programme partner | Security |
| **livepeer-python-gateway** | https://github.com/j0sh/livepeer-python-gateway | Python gateway client (community, j0sh) | SDK |
| **Community Remote Signer** | https://signer.eliteencoder.net/ | Free ETH signing for off-chain gateway operators (Elite Encoder) | Infrastructure |

<CustomDivider />

## 6. Organisational Structure

### Entities

| Entity | Type | Role | Established |
|---|---|---|---|
| **Livepeer Inc** | Corporation | Original protocol creator; core R&D; builds Livepeer Studio + Daydream | 2017 |
| **Livepeer Foundation** | Cayman Islands non-profit | Ecosystem coordination, strategic roadmap, contributor onboarding | June 2025 (announced April 2025) |
| **Livepeer DAO** | On-chain governance | Community governance — LPT holders vote on treasury, protocol upgrades | December 2023 (treasury activated) |

### Foundation Advisory Boards (launched June 2025)

| Board | Focus |
|---|---|
| Network | Protocol architecture, performance, infrastructure |
| Governance | Treasury operations, proposal processes, decentralisation |
| Growth | Developer/gateway onboarding, ecosystem expansion |
| Markets | Token economics, liquidity, market positioning |

### Foundation Workstreams (introduced August 2025)

| # | Workstream | Focus |
|---|---|---|
| 1 | Brand & Communication | Marketing, messaging, public presence |
| 2 | Livepeer Builders | Developer grants, hackathons, integration support |
| 3 | Core Contributor Coordination | Project roadmap, contributor alignment |
| 4 | Ecosystem Data & Tooling | Explorer, dashboards, Dune analytics |
| 5 | LPT Participation | Delegator education, staking, Live Pioneers |
| 6 | Core R&D | go-livepeer development, LIP process |
| 7 | Real-Time Video AI | ComfyStream, AI-runner, BYOC containers |
| 8 | Compute Marketplace | GPU orchestrator onboarding, capacity |
| 9 | Active Capital Management | Treasury diversification (Transformation SPE) |

<CustomDivider />

## 7. Grants, Programmes & Opportunities

### Active Grant Types

| Grant Type | Description | Audience | Application |
|---|---|---|---|
| **Microgrants / Quick Start** | Tightly scoped, 1-month projects | Independent developers, content creators | https://www.livepeer.org/dev-hub |
| **Research & Video Innovation** | Cutting-edge video research or novel applications | Researchers, independent devs, creatives | https://www.livepeer.org/dev-hub |
| **Supply Side / Network Health** | Tools for orchestrators, delegators, node operators | Orchestrators, delegators, tooling devs | https://www.livepeer.org/dev-hub |
| **AI Workflow Grants (ComfyUI Hacker)** | Real-time AI video workflows using ComfyUI/ComfyStream | ComfyUI creators, AI video devs | https://www.livepeer.org/dev-hub |
| **SPE Treasury Proposals** | Community-initiated, LPT governance-approved projects | Any LPT holder (100 LPT minimum to submit) | Forum → on-chain proposal |

### Programmes

| Programme | Partner | Description | Link |
|---|---|---|---|
| **AI Video Startup Programme** | Encode Club | 3-month accelerator — $20K grant, infra credits, mentorship, investor networking | https://www.encode.club/ai-video-startup-program |
| **ComfyUI Live Video Hacker** | — | Cohort-based grants for real-time AI video workflows | https://www.livepeer.org/dev-hub |
| **Real-Time Video AI Bootcamp** | Encode Club | Technical workshops, hands-on projects, incentivised challenges | https://www.encode.club |
| **Livepeer Summit Hackathon** | — | 2-day strategy + hacking event | https://summit2025.livepeer.org/ |
| **Immunefi Bug Bounty** | Immunefi | Security vulnerability reporting with reward tiers | (linked from docs) |
| **Livepeer Grants (Notion)** | — | Full grants programme homepage | Livepeer Notion |

<CustomDivider />

## 8. Current Community Tab Page Status

### Existing Pages (on nav)

| Page | Path | Status | Content quality |
|---|---|---|---|
| Portal | v2/community/portal.mdx | Live | Substantial — hero, 9 action cards |
| FAQ | v2/community/resources/faq.mdx | Live | Substantial — 12 accordion Q&As covering SPEs, governance, calls |
| Trending Topics | v2/community/connect/trending-topics.mdx | Live | Substantial — automated feeds (YouTube, blogs, forum, Discord, X) |
| Roadmap | v2/community/ecosystem/roadmap.mdx | Live | Composable (RoadmapPage component) |
| Connect Channels | v2/community/connect/connect-channels.mdx | Live | Substantial — full platform map, Discord channel guide |
| Events & Streams | v2/community/connect/events-and-streams.mdx | Live | Data-driven (Luma feed) |
| Guidelines | v2/community/guides/guidelines.mdx | Live | Substantial — code of conduct, values |
| Ecosystem | v2/community/ecosystem/organisations.mdx | Live | Composable (EcosystemPage component) |
| Governance | v2/community/ecosystem/governance.mdx | Live | Substantial — Foundation, boards, workstreams, SPEs, voting mechanics |
| Awesome Livepeer | v2/community/resources/awesome-livepeer.mdx | Live | Substantial — comprehensive tools inventory |
| Guides | v2/community/resources/guides.mdx | Live | Substantial — guides by role, references |
| Glossary | v2/community/resources/glossary.mdx | Live | 150+ terms |
| Media Kit | v2/community/resources/compendium/media-kit.mdx | Live | Composable (MediaKitPage component) |

### Stub Pages (need content)

| Page | Path | Status | What's needed |
|---|---|---|---|
| **News & Socials** | v2/community/connect/news-and-socials.mdx | STUB | Social channels map, blog links, podcast/video links |
| **Opportunities** | v2/community/contribute/opportunities.mdx | STUB | Grants, programmes, hackathons, bounties (content exists in v2/developers/guides/opportunities/) |
| **Contribute** | v2/community/contribute/contribute.mdx | STUB | Ways to contribute — docs, translate, help, governance |
| **Build Livepeer** | v2/community/contribute/build-livepeer.mdx | STUB | RFP ideas, OSS contributions, tooling needs |
| **Dashboards** | v2/community/resources/dashboards.mdx | STUB | Foundation dashboards, Dune, community tools (content exists in awesome-livepeer) |

### Missing Pages (from IA research but not yet created)

| Planned page | Section | What it should cover |
|---|---|---|
| Who's Here | This Community | Role routing — personas, what each type does, where they go |
| Workstreams | Shape the Network | 9 workstreams with descriptions, leads, how to join |
| Community Tools | Ecosystem | Dedicated tools page (currently in awesome-livepeer) |

<CustomDivider />

## 9. Data Files Available for Community Pages

| Data file | Path | Content | Update method |
|---|---|---|---|
| youtubeData.jsx | snippets/data/social-feeds/ | 100+ Livepeer YouTube videos | fetch-youtube-data.js (manual) |
| ghostBlogData.jsx | snippets/data/social-feeds/ | Blog posts from blog.livepeer.org | n8n daily sync |
| forumData.jsx | snippets/data/social-feeds/ | Forum trending topics | fetch-forum-data.js (manual) |
| discordAnnouncementsData.jsx | snippets/data/social-feeds/ | 60+ Discord announcements | fetch-discord-announcements.js (manual) |
| lumaEventsData.jsx | snippets/data/social-feeds/ | Past + upcoming events from Luma | fetch-luma-data.js (manual) |
| exchangesData.jsx | snippets/data/exchanges/ | 40+ exchange listings (CoinGecko) | Weekly GitHub Actions |
| glossary-data.json | v2/resources/ | 150+ terms | Pre-commit script |
| product-social-config.json | operations/scripts/config/ | Master registry — YouTube, X, Discord, GitHub, blogs for all 5 products | Manual |
| livepeer_ecosystem_structured.json | v2/home/_workspace/showcase/ | 45+ ecosystem projects | Manual |
