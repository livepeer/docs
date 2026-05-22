# Glossary — Community Tab

**Tab folder**: `v2/community/`
**Date**: 2026-03-20
**Terms**: 101
**Source**: Agent deep-read + classified-by-tag.md

---

### @livepeer/react

**Definition**: React SDK providing prebuilt UI primitives (Player, Broadcast) for video experiences in web apps.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `community/sdks`, `community/tools`

---

### Advisory Boards

**Definition**: Strategic bodies aligning ecosystem stakeholders on roadmap and opportunities through structured strategy-setting.
**Context**: Domain-specific groups that recommend strategic priorities for Livepeer SPE workstreams; created as part of Livepeer's governance evolution alongside Workstreams.
**Tags**: `livepeer:entity`, `operational:governance`, `operational:community`
**Status**: current
**Pages**: `community/governance`

---

### AI runner (ai-runner)

**Definition**: Software component executing AI model inference tasks on an orchestrator node.
**Context**: The `ai-runner` is the Livepeer process that loads AI models into GPU memory and serves inference requests dispatched by the orchestrator; it is configured via `aiModels.json`.
**Tags**: `livepeer:tool`
**Status**: current
**Pages**: `community/ai`, `community/tools`

---

### AI subnet

**Definition**: Portion of the Livepeer network dedicated to AI inference work, where orchestrators advertise AI capabilities and gateways route AI jobs.
**Context**: The AI subnet operates alongside the transcoding network; orchestrators register supported pipelines via `AIServiceRegistry` and receive AI inference jobs from AI-capable gateways.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `community/ai`, `community/network`

---

### AI Video SPE

**Definition**: Special Purpose Entity funded by the community treasury to advance decentralized AI compute, scaling ComfyStream and BYOC pipelines.
**Context**: One of several treasury-funded SPEs; focused on AI video pipeline development, including expanding the AI subnet and BYOC deployment patterns.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `community/governance`, `community/treasury`

---

### Ambassador Programme

**Definition**: Community outreach initiative where participants represent Livepeer to new audiences.
**Context**: Livepeer's Ambassador Programme designates community representatives who promote adoption, create educational content, and help onboard new participants into the ecosystem.
**Tags**: `operational:community`
**Status**: current
**Pages**: `community/programs`, `community/index`

---

### Arbitrum

**Definition**: A Layer 2 Optimistic Rollup settling to Ethereum, processing transactions off-chain with Ethereum-grade security.
**External**: [Arbitrum Documentation](https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction)
**Tags**: `web3:chain`
**Status**: current
**Pages**: `community/network`, `community/protocol`

---

### awesome-livepeer

**Definition**: Community-curated list of projects, tutorials, demos, and resources in the Livepeer ecosystem.
**Context**: A GitHub repository maintained by the community aggregating third-party tools, monitoring dashboards, SDKs, orchestrator utilities, and educational content related to Livepeer.
**Tags**: `livepeer:tool`
**Status**: current
**Pages**: `community/resources`, `community/tools`

---

### Autonomous agent

**Definition**: AI system independently pursuing complex goals by perceiving, deciding, using tools, and acting without supervision.
**External**: [Wikipedia — Autonomous agent](https://en.wikipedia.org/wiki/Autonomous_agent)
**Tags**: `ai:application`
**Status**: current
**Pages**: `community/ai`, `community/projects`

---

### Bounty

**Definition**: Reward for completing a specific task, funded by community treasury or foundation.
**Context**: Bounties are posted by the Livepeer Foundation or SPEs for well-defined deliverables such as tooling, documentation, or bug fixes; funded from the on-chain treasury.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `community/treasury`, `community/programs`

---

### BYOC (Bring Your Own Compute)

**Definition**: Bring-Your-Own-Container — deployment pattern where users supply custom Docker containers for AI workloads on the Livepeer network.
**Context**: BYOC enables teams to run custom Python-based AI inference workloads on Livepeer orchestrators, extending the AI subnet beyond built-in pipelines.
**Tags**: `livepeer:deployment`, `ai:concept`
**Status**: current
**Pages**: `community/network`, `community/ai`

---

### ComfyStream

**Definition**: ComfyUI custom node running real-time media workflows for AI-powered video and audio on live streams.
**Context**: A Livepeer project that wraps ComfyUI workflows as a streaming backend, allowing orchestrators to serve live-video-to-video AI processing via the AI subnet.
**Tags**: `livepeer:product`, `ai:framework`
**Status**: current
**Pages**: `community/ai`, `community/projects`

---

### Community Arbitrum Node

**Definition**: Free, load-balanced, geo-distributed RPC service for Arbitrum L2 and Ethereum L1, maintained by the LiveInfra SPE.
**Context**: A shared Arbitrum RPC endpoint funded by the community treasury through LiveInfra, giving ecosystem participants free access to on-chain data without running their own node.
**Tags**: `livepeer:tool`
**Status**: current
**Pages**: `community/tools`, `community/network`

---

### Conventional Commits

**Definition**: Specification for structured commit messages enabling automated changelogs.
**External**: [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
**Tags**: `operational:process`
**Status**: current
**Pages**: `community/development`, `community/contributing`

---

### Daydream

**Definition**: Livepeer's hosted real-time AI video platform turning live camera input into AI-transformed visuals with sub-second latency.
**Context**: Daydream is Livepeer's flagship consumer-facing AI video product, demonstrating real-time diffusion-based style transformation on live streams powered by the AI subnet.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `community/ai`, `community/projects`

---

### Delegator

**Definition**: Token holder who stakes LPT to an orchestrator to secure the network, participate in governance, and earn rewards.
**Context**: Delegators are a core protocol actor in Livepeer; they bond LPT to orchestrators, earn a share of inflationary rewards proportional to stake, and can vote independently from their orchestrator via vote detachment.
**Tags**: `livepeer:role`, `web3:tokenomics`
**Status**: current
**Pages**: `community/staking`, `community/governance`

---

### Delegation

**Definition**: LPT holders staking tokens toward orchestrators they trust, sharing in rewards without running infrastructure.
**Context**: In Livepeer's delegated proof-of-stake model, delegation assigns staking weight to an orchestrator, increasing their active set probability and entitling the delegator to a proportional reward share.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `community/staking`, `community/governance`

---

### Dev Call

**Definition**: Recurring meeting where core developers discuss protocol development, node releases, and roadmap.
**Context**: The Dev Call is a regular public community call where Livepeer engineers share protocol updates, discuss upcoming LIPs, and take questions from orchestrators and developers.
**Tags**: `operational:community`
**Status**: current
**Pages**: `community/events`, `community/development`

---

### Dune

**Definition**: Blockchain analytics platform for SQL queries on on-chain data.
**External**: [Dune Analytics](https://dune.com/home)
**Tags**: `operational:monitoring`
**Status**: current
**Pages**: `community/tools`, `community/analytics`

---

### Gateway

**Definition**: Node that submits jobs, routes work to orchestrators, manages payment flows, and provides a protocol interface for applications.
**Context**: In Livepeer, a gateway is the demand-side entry point to the network; it receives video or AI inference requests from applications, selects orchestrators, handles probabilistic micropayment ticket issuance, and returns results to callers.
**Tags**: `livepeer:role`
**Status**: current

---

### Gateway operator

**Definition**: Person or organisation running and maintaining gateway nodes for network access.
**Context**: Gateway operators in Livepeer run nodes that submit transcoding or AI inference jobs to the network, manage payment flows via probabilistic micropayments, and expose protocol services to end applications.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `community/network`

---

### Governance Forum

**Definition**: The Livepeer Forum's governance category for LIPs, pre-proposals, and protocol governance discussions.
**Context**: The primary off-chain coordination space for Livepeer governance; where community members post pre-proposals, discuss LIPs, and build consensus before on-chain votes.
**Tags**: `operational:community`
**Status**: current
**Pages**: `community/governance`, `community/tools`

---

### GovWorks

**Definition**: Meta-governance SPE ensuring transparent management of Livepeer governance and treasury allocation.
**Context**: GovWorks is the governance coordination workstream and SPE; it administers the proposal process, publishes governance summaries, and was initially chaired by StableLab.
**Tags**: `livepeer:entity`, `operational:governance`
**Status**: current
**Pages**: `community/governance`, `community/treasury`

---

### Grafana

**Definition**: Open-source visualization and dashboarding platform for metrics and logs.
**External**: [Grafana](https://grafana.com/)
**Tags**: `operational:monitoring`
**Status**: current
**Pages**: `community/tools`, `community/monitoring`

---

### Grant

**Definition**: Non-repayable allocation from the community treasury or Livepeer Foundation for ecosystem development contributions.
**Context**: Grants are awarded through treasury proposals or Foundation programmes to fund tooling, research, education, or infrastructure that benefits the Livepeer ecosystem.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `community/treasury`, `community/programs`

---

### GPU (Graphics Processing Unit)

**Definition**: Specialized processor for parallel computation used in video transcoding and AI inference workloads.
**External**: [Wikipedia — Graphics processing unit](https://en.wikipedia.org/wiki/Graphics_processing_unit)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `community/network`, `community/ai`

---

### HuggingFace

**Also known as**: Hugging Face, HF
**Definition**: An AI platform and open-source community providing model repositories, datasets, and inference APIs; a primary source for AI models deployed on Livepeer orchestrator nodes.
**External**: [HuggingFace](https://huggingface.co/)
**Tags**: `ai:platform`
**Status**: current
**Pages**: `community/ai`, `community/tools`

---

### GWID (Gateway Wizard)

**Definition**: Gateway Wizard SPE building a managed DevOps tool for running and managing gateway infrastructure.
**Context**: GWID is a Governance Workstream Identification number assigned to the Gateway Wizard SPE; the project delivers simplified gateway setup tooling and is tracked by its GWID identifier on the governance forum.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `community/governance`, `community/proposals`

---

### JavaScript

**Also known as**: JS
**Definition**: A high-level interpreted scripting language used for web and server-side development; Livepeer's primary SDKs and gateway clients expose JavaScript/TypeScript APIs.
**External**: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
**Tags**: `technical:language`
**Status**: current
**Pages**: `community/sdks`, `community/tools`

---

### KYO (Know Your Orchestrator)

**Definition**: Know Your Orchestrator — Live Pioneers interview series profiling active orchestrators on the network.
**Context**: KYO is a community education initiative run by Live Pioneers that publishes Q&A-format interviews with orchestrator operators, helping delegators make informed staking decisions.
**Tags**: `operational:community`
**Status**: current
**Pages**: `community/programs`, `community/events`

---

### LIP (Livepeer Improvement Proposal)

**Definition**: Livepeer Improvement Proposal — formal design document for protocol changes.
**Context**: LIPs are the canonical mechanism for proposing, discussing, and ratifying protocol upgrades and parameter changes in Livepeer; they progress from pre-proposal discussion on the forum to on-chain governance vote.
**Tags**: `operational:governance`, `livepeer:protocol`
**Status**: current
**Pages**: `community/governance`, `community/protocol`

---

### LISAR

**Definition**: SPE providing ongoing ecosystem infrastructure contributions with monthly progress updates.
**Context**: LISAR (Livepeer Infrastructure and Services Accountability Report) is the naming convention for the accountability reports published by certain SPEs; also used as the SPE identity for the infrastructure services workstream.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `community/governance`, `community/proposals`

---

### Live Pioneers

**Definition**: Independent community for long-term LPT holders producing educational content and guides.
**Context**: Live Pioneers is an informal community programme for engaged LPT ecosystem participants; members produce the KYO interview series, publish staking guides, and represent the delegator perspective in governance.
**Tags**: `operational:community`
**Status**: current
**Pages**: `community/programs`, `community/index`

---

### LiveInfra

**Definition**: SPE providing free, reliable blockchain infrastructure services including the Community Arbitrum Node.
**Context**: LiveInfra is a treasury-funded Special Purpose Entity that operates the Community Arbitrum Node and other shared RPC/infrastructure services that reduce operational friction for ecosystem participants.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `community/projects`, `community/tools`

---

### livepeer-ai-js

**Definition**: JavaScript/TypeScript library for the Livepeer AI API enabling AI inference integration.
**Context**: `livepeer-ai-js` is the official JavaScript SDK for integrating with the Livepeer AI Gateway API, exposing pipelines such as text-to-image and live-video-to-video to JS/TS applications.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `community/sdks`, `community/tools`

---

### livepeer-ai-python

**Definition**: Python library for the Livepeer AI API providing programmatic access to AI inference pipelines.
**Context**: `livepeer-ai-python` is the official Python SDK for the Livepeer AI Gateway, enabling Python applications and ML workflows to dispatch inference jobs to the AI subnet.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `community/sdks`, `community/tools`

---

### livepeer-go

**Definition**: Go server-side SDK for the Livepeer Studio API.
**Context**: `livepeer-go` provides Go bindings for Livepeer Studio API operations including stream management, asset upload, and playback ID retrieval, targeting backend Go service integrations.
**Tags**: `livepeer:sdk`
**Status**: current
**Pages**: `community/sdks`, `community/tools`

---

### livepeer-js

**Definition**: JavaScript library for the Livepeer Studio API providing programmatic access to stream and asset management.
**Context**: `livepeer-js` is the primary JavaScript SDK for Livepeer Studio, supporting stream creation, asset management, and playback integration in Node.js and browser environments.
**Tags**: `livepeer:sdk`, `livepeer:product`
**Status**: current
**Pages**: `community/sdks`, `community/tools`

---

### Livepeer Explorer

**Definition**: Official protocol explorer for viewing orchestrator state, staking data, and governance proposals.
**Context**: Livepeer Explorer is the primary web interface for delegators and orchestrators; it allows users to browse the active set, stake LPT, view reward histories, and interact with on-chain governance proposals.
**Tags**: `livepeer:tool`
**Status**: current
**Pages**: `community/tools`, `community/staking`

---

### Livepeer Foundation

**Definition**: Non-profit Cayman Islands Foundation Company stewarding long-term vision, ecosystem growth, and core development.
**Context**: The Livepeer Foundation is the primary organizational entity overseeing ecosystem development grants, governance support, and the transition from Livepeer Inc toward community-led operations.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `community/governance`, `community/index`

---

### Livepeer Inc

**Definition**: Original company that built Livepeer's initial architecture and protocol.
**Context**: Livepeer Inc developed the core protocol, go-livepeer node software, and initial ecosystem tooling; it has progressively transferred ecosystem stewardship to the Livepeer Foundation and community governance.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `community/governance`

---

### LPT (Livepeer Token)

**Definition**: ERC-20 governance and staking token for orchestrator selection, delegation, reward distribution, and network security.
**Context**: LPT is the native utility token of the Livepeer protocol; staked LPT determines orchestrator selection probability, delegation reward share, governance voting weight, and inflationary reward distribution.
**Tags**: `livepeer:protocol`, `web3:token`
**Status**: current
**Pages**: `community/staking`, `community/governance`

---

### LPT emissions

**Definition**: New LPT tokens minted each protocol round via inflation, distributed to active orchestrators and their delegators.
**Context**: LPT emissions are the primary economic incentive for participation; the per-round emission rate adjusts dynamically to push the bonding rate toward 50%, diluting non-staking holders.
**Tags**: `economic:reward`, `livepeer:protocol`
**Status**: current
**Pages**: `community/treasury`, `community/economics`

---

### MistServer

**Definition**: Open-source media server providing RTMP ingest, HLS output, and multi-protocol streaming support.
**External**: [MistServer](https://mistserver.org/)
**Tags**: `technical:infra`
**Status**: current
**Pages**: `community/tools`, `community/network`

---

### On-chain Treasury

**Definition**: Protocol-governed pool of LPT funded by inflation for community-approved ecosystem development.
**Context**: The on-chain treasury receives a governance-controlled percentage of each round's LPT inflation (e.g. 10%) and is disbursed via LivepeerGovernor votes to SPEs, grants, and bounties.
**Tags**: `livepeer:protocol`, `economic:treasury`
**Status**: current
**Pages**: `community/treasury`

---

### Open Source

**Also known as**: open-source, FOSS
**Definition**: Software distributed with its source code under a licence permitting study, modification, and redistribution; Livepeer's protocol, go-livepeer node software, and SDK libraries are all open source.
**External**: [Open-source software (Wikipedia)](https://en.wikipedia.org/wiki/Open-source_software)
**Tags**: `technical:concept`
**Status**: current
**Pages**: `community/index`, `community/tools`

---

### Orchestrator

**Definition**: Supply-side operator contributing GPU resources, receiving jobs, performing transcoding or AI inference, and earning rewards.
**Context**: Orchestrators are the primary compute providers in Livepeer; they register on-chain, bond LPT to enter the active set, accept jobs from gateways, and earn inflationary LPT and ETH fee rewards.
**Tags**: `livepeer:role`
**Status**: current
**Pages**: `community/network`, `community/staking`

---

### Passing threshold

**Definition**: Minimum "for" vote percentage (excluding abstentions) required for a governance proposal to pass.
**Context**: Livepeer governance requires a passing threshold in addition to quorum; if insufficient stake votes in favor, the proposal fails even with high participation.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `community/governance`

---

### Pre-Proposal

**Definition**: Informal governance discussion document posted on the Forum before a formal LIP or treasury proposal.
**Context**: Pre-proposals allow the Livepeer community to give early feedback on governance ideas before the author commits to the formal LIP process, reducing wasted effort on unpopular proposals.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `community/governance`

---

### Price per pixel

**Definition**: Fundamental pricing unit for transcoding: cost in wei for processing one pixel of video.
**Context**: Price per pixel is the standard unit of comparison for orchestrator pricing in Livepeer's transcoding marketplace; orchestrators set their `pricePerUnit` and `pixelsPerUnit` to express a per-pixel rate.
**Tags**: `economic:pricing`
**Status**: current
**Pages**: `community/economics`, `community/network`

---

### Prometheus

**Definition**: Open-source monitoring system collecting time-series metrics via HTTP pull from instrumented targets.
**External**: [Prometheus](https://prometheus.io/)
**Tags**: `operational:monitoring`
**Status**: current
**Pages**: `community/tools`, `community/monitoring`

---

### Quorum

**Definition**: Minimum stake participation threshold required for a governance vote to be considered valid.
**Context**: Livepeer's on-chain governance (via LivepeerGovernor) requires a minimum quorum of participating stake before a vote result is binding; votes falling below quorum do not execute.
**Tags**: `operational:governance`, `web3:governance`
**Status**: current
**Pages**: `community/governance`

---

### Real-time video AI

**Definition**: Running AI models on live streaming input with latency low enough for interactive speeds, typically under 100ms.
**External**: [Ultralytics — Real-time inference](https://www.ultralytics.com/glossary/real-time-inference)
**Tags**: `ai:concept`
**Status**: current
**Pages**: `community/ai`, `community/index`

---

### Reward call

**Definition**: On-chain transaction an active orchestrator submits each round to mint and distribute new LPT to themselves and their delegators.
**Context**: Orchestrators must execute a reward call each round to claim inflationary LPT; if missed, that round's rewards are not distributed to delegators, making reliable reward calling essential.
**Tags**: `livepeer:protocol`, `economic:reward`
**Status**: current
**Pages**: `community/staking`, `community/protocol`

---

### RFP (Request for Proposal)

**Definition**: Formal solicitation posted by the community or Foundation inviting teams to submit proposals for defined work.
**Context**: RFPs in Livepeer are used to solicit competitive bids for funded ecosystem work such as tooling, infrastructure, or documentation; typically posted in the Treasury Forum with defined scope and budget.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `community/treasury`, `community/governance`

---

### RPC (Remote Procedure Call)

**Definition**: Protocol allowing a program to execute a procedure on a remote server; in blockchain contexts, the mechanism for querying and submitting transactions to a node.
**External**: [Wikipedia — Remote procedure call](https://en.wikipedia.org/wiki/Remote_procedure_call)
**Tags**: `technical:protocol`
**Status**: current
**Pages**: `community/tools`, `community/network`

---

### SPE (Special Purpose Entity)

**Definition**: Treasury-funded organizational unit with a defined scope, budget, and accountability structure operating within Livepeer governance.
**Context**: SPEs are the primary vehicle for treasury-funded work in Livepeer; each SPE has a defined mandate, team, milestone plan, and reports progress via accountability documents (e.g. LISARs).
**Tags**: `livepeer:entity`, `operational:governance`
**Status**: current
**Pages**: `community/governance`, `community/treasury`

---

### StableLab

**Definition**: Governance services firm serving as first GovWorks Chair, building transparent governance frameworks for Livepeer.
**Context**: StableLab is a professional governance consultancy that was appointed as the inaugural GovWorks Chair to establish governance processes, review proposals, and publish governance summaries for the Livepeer community.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `community/governance`, `community/partners`

---

### Staking

**Definition**: Locking tokens in a proof-of-stake protocol to participate in network security, governance, and earn rewards.
**Context**: In Livepeer, staking means bonding LPT either as an orchestrator (self-stake) or delegator; staked LPT determines active set membership, reward share, and governance voting weight.
**Tags**: `economic:reward`, `web3:tokenomics`
**Status**: current
**Pages**: `community/staking`, `community/index`

---

### Streamplace

**Definition**: Project building the video layer for decentralized social platforms, focused on the AT Protocol ecosystem.
**Context**: Streamplace is a Livepeer ecosystem project developing real-time AI video infrastructure for decentralized social apps, integrating with AT Protocol platforms and using Livepeer's AI subnet for on-stream processing.
**Tags**: `livepeer:product`
**Status**: current
**Pages**: `community/ai`, `community/projects`

---

### Surge strategy

**Definition**: Concentrated treasury spending approach targeting high-impact growth initiatives during strategic market windows.
**Context**: The Surge strategy is a treasury spending philosophy introduced by the Transformation SPE, directing resources toward high-leverage opportunities (e.g. AI video growth) rather than steady-state maintenance funding.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `community/governance`, `community/treasury`

---

### Tenderize

**Definition**: Liquid staking protocol for LPT allowing staking while maintaining liquidity through derivative tokens.
**Context**: Tenderize integrates with Livepeer's bonding system to let LPT holders stake without the 7-round unbonding lockup, issuing liquid derivative tokens representing staked positions.
**Tags**: `livepeer:tool`, `web3:tokenomics`
**Status**: current
**Pages**: `community/tools`, `community/staking`

---

### Transcoding

**Definition**: Direct digital-to-digital conversion of video from one encoding to another, producing multiple adaptive renditions.
**External**: [Wikipedia — Transcoding](https://en.wikipedia.org/wiki/Transcoding)
**Tags**: `video:processing`
**Status**: current
**Pages**: `community/network`, `community/index`

---

### Transformation SPE

**Definition**: SPE seeding new contribution mechanisms, coordinating talent, and directing budgets for ecosystem workstreams.
**Context**: The Transformation SPE was established to operationalize the Surge strategy; it introduced Workstreams and Advisory Boards as new governance execution structures for the Livepeer ecosystem.
**Tags**: `livepeer:entity`
**Status**: current
**Pages**: `community/governance`, `community/treasury`

---

### Treasury

**Definition**: Pool of LPT and ETH held on-chain for funding public goods and ecosystem development, governed by token holder votes.
**Context**: The Livepeer community treasury receives a percentage of per-round LPT inflation and distributes funds via LivepeerGovernor-approved proposals to SPEs, grants, and bounties.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `community/treasury`, `community/governance`

---

### Treasury Forum

**Definition**: Forum section for treasury proposals, SPE funding discussions, and resource allocation.
**Context**: The Treasury Forum is the designated category on the Livepeer Forum where SPE pre-proposals, grant requests, RFPs, and budget discussions are posted for community feedback before on-chain votes.
**Tags**: `operational:community`
**Status**: current
**Pages**: `community/treasury`, `community/tools`

---

### Treasury Talk

**Definition**: Recurring community call focused on treasury discussions and SPE updates.
**Context**: Treasury Talk is a regular governance call where active SPEs present progress updates, new funding proposals are introduced, and community members ask questions about treasury spending.
**Tags**: `operational:community`
**Status**: current
**Pages**: `community/events`, `community/governance`

---

### Unbonding period

**Definition**: Waiting period during which tokens are locked after initiating unbonding before becoming withdrawable (7 rounds in Livepeer).
**Context**: The unbonding period in Livepeer is 7 protocol rounds; during this time, LPT cannot be transferred or re-staked, serving as a security and commitment mechanism.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `community/staking`

---

### USD (United States Dollar)

**Definition**: The official currency of the United States; used as the reference denomination for Livepeer gateway fees, grant amounts, treasury allocations, and market data.
**External**: [United States dollar (Wikipedia)](https://en.wikipedia.org/wiki/United_States_dollar)
**Tags**: `economic:currency`
**Status**: current
**Pages**: `community/treasury`, `community/economics`

---

### Vote detachment

**Definition**: Delegators overriding their orchestrator's governance vote with their own independent stake-weighted vote.
**Context**: Livepeer's governance design allows delegators to vote independently from the orchestrator they bonded to; if a delegator casts their own vote, it detaches their stake-weight from the orchestrator's vote.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `community/governance`

---

### Voting delay

**Definition**: Number of rounds (1) between governance proposal creation and the start of the voting period.
**Context**: The voting delay in Livepeer governance gives stakeholders time to review a new proposal before voting opens, preventing snap votes on proposals the community has not had time to analyze.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `community/governance`

---

### Voting period

**Definition**: Number of rounds (10) during which token holders can cast votes on a governance proposal.
**Context**: The Livepeer voting period lasts 10 protocol rounds; votes cast via LivepeerGovernor are weighted by bonded stake, and delegators may override their orchestrator's vote during this window.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `community/governance`

---

### Water Cooler

**Definition**: Biweekly informal community call for development updates and ecosystem news.
**Context**: The Water Cooler is a recurring Livepeer community call with a lighter format than Treasury Talk or Dev Call; it covers ecosystem news, informal Q&A, and community social discussion.
**Tags**: `operational:community`
**Status**: current
**Pages**: `community/events`, `community/social`

---

### World model

**Definition**: Neural network representing and predicting environment dynamics, enabling an agent to plan by simulating outcomes.
**External**: [Wikipedia — Generative AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
**Tags**: `ai:application`
**Status**: current
**Pages**: `community/ai`, `community/projects`

---

### Workstreams

**Definition**: Focused execution teams organized around specific domains, translating Advisory Board recommendations into phased initiatives.
**Context**: Workstreams are the primary execution structure within Livepeer's post-SPE governance model; each workstream has a defined domain, accountable lead, and milestone timeline funded through the treasury.
**Tags**: `livepeer:entity`, `operational:governance`, `operational:community`
**Status**: current
**Pages**: `community/governance`, `community/treasury`

---

## Additional terms from agent-community.md

The following terms appear in community tab pages and are drawn from broader classified-by-tag.md entries where community pages are listed.

---

### Active Set

**Definition**: Top 100 orchestrators by total bonded stake eligible to receive work each protocol round.
**Context**: Only orchestrators in the active set receive jobs and inflationary rewards each round; delegators choosing orchestrators outside the active set earn no rewards until their orchestrator re-enters.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `community/staking`

---

### Bonding

**Definition**: Staking (locking) LPT tokens to an orchestrator in Livepeer's delegated proof-of-stake system.
**External**: [Livepeer Forum — An overview of bonding](https://forum.livepeer.org/t/an-overview-of-bonding/97)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `community/staking`

---

### DAO (Decentralized Autonomous Organization)

**Definition**: Organization governed by smart contracts, with rules encoded in code rather than legal structures.
**External**: [Wikipedia — Decentralized autonomous organization](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `community/governance`

---

### Delegation (bonding)

**Definition**: LPT holders assigning their staked tokens to a chosen orchestrator, sharing rewards without operating infrastructure.
**Context**: Delegation is the act of bonding LPT to an orchestrator; it increases that orchestrator's active set probability and entitles the delegator to a proportional share of inflationary rewards after the orchestrator's commission cut.
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `community/staking`, `community/governance`

---

### Governance

**Definition**: System of rules and processes for protocol decision-making, including on-chain voting via LivepeerGovernor.
**Context**: Livepeer governance combines on-chain LIP voting with off-chain forum discussion, SPE accountability structures, and Advisory Board strategy; token-weighted votes determine protocol parameter changes and treasury spending.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `community/governance`

---

### Inflationary Rewards

**Definition**: Newly minted LPT distributed each protocol round proportional to stake.
**Context**: Inflationary rewards are the primary economic incentive for orchestrators and delegators; they are distributed via the reward call mechanism and depend on the per-round inflation rate.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `community/staking`, `community/treasury`

---

### LIP-89

**Definition**: LIP introducing the on-chain LivepeerGovernor contract and community treasury mechanism.
**Context**: LIP-89 was the foundational governance upgrade that established Livepeer's on-chain voting system, treasury contract, and the delegated stake-weighted voting model currently in use.
**Tags**: `operational:governance`
**Status**: current
**Pages**: `community/governance`, `community/protocol`

---

### Merkle Mine

**Definition**: Livepeer's algorithm for decentralized token distribution at genesis using Merkle proofs.
**External**: [Livepeer Forum — Introducing the MerkleMine](https://forum.livepeer.org/t/introducing-the-merklemine/204)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `community/governance`

---

### Probabilistic micropayments

**Definition**: Lottery-like payment model where only winning tickets are redeemed on-chain, amortizing per-segment costs across many transactions.
**External**: [Livepeer Docs — Payments](https://livepeer.org/docs/video-developers/core-concepts/payments)
**Tags**: `economic:payment`
**Status**: current
**Pages**: `community/network`

---

### Proof of utility

**Definition**: Model where participants prove they performed useful work for the network rather than relying solely on stake size.
**External**: [Livepeer Primer](https://www.livepeer.org/primer)
**Tags**: `web3:concept`
**Status**: current
**Pages**: `community/network`

---

### Quadratic Funding

**Definition**: Mechanism where matching funds amplify small individual contributions, prioritizing broadly supported projects over whale-funded ones.
**External**: [Wikipedia — Quadratic voting](https://en.wikipedia.org/wiki/Quadratic_voting)
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `community/treasury`

---

### Reward cut

**Definition**: Percentage of inflationary LPT rewards an orchestrator retains before distributing the remainder to delegators.
**Context**: Orchestrators set their reward cut rate as part of their on-chain configuration; a lower reward cut passes more inflationary LPT to delegators, making the orchestrator more attractive for delegation.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `community/staking`

---

### Round

**Definition**: Discrete time interval (measured in Ethereum/Arbitrum blocks) for calculating staking rewards and protocol state transitions.
**Context**: Each Livepeer round is approximately one day; active orchestrators must submit a reward call each round to mint and distribute LPT, and the unbonding period is measured in rounds.
**Tags**: `livepeer:protocol`
**Status**: current
**Pages**: `community/staking`, `community/protocol`

---

### Slashing

**Definition**: Penalty mechanism destroying a portion of an orchestrator's bonded LPT for protocol violations.
**External**: [Livepeer Whitepaper](https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md)
**Tags**: `livepeer:protocol`, `web3:tokenomics`
**Status**: current
**Pages**: `community/network`, `community/protocol`

---

### Stake-weighted voting

**Definition**: Voting system where each vote is proportional to the voter's bonded LPT stake.
**Context**: Livepeer's governance uses stake-weighted voting via BondingVotes; delegators can vote directly with their bonded stake, overriding their orchestrator's vote through vote detachment.
**Tags**: `web3:governance`
**Status**: current
**Pages**: `community/governance`

---

### Timelock

**Definition**: Smart contract enforcing a mandatory delay between governance proposal passage and on-chain execution.
**Context**: The Livepeer governance timelock prevents immediate execution of passed proposals, giving the community a window to review and respond before changes take effect.
**Tags**: `web3:governance`
**Status**: current
**Pages**: `community/governance`

---

### Tokenomics

**Definition**: Economic design of a token system encompassing supply, distribution, incentives, staking, inflation, and governance.
**External**: [Wikipedia — Cryptoeconomics](https://en.wikipedia.org/wiki/Cryptoeconomics)
**Tags**: `web3:tokenomics`
**Status**: current
**Pages**: `community/economics`

---

### Treasury Reward Cut Rate

**Definition**: Governable percentage of per-round LPT inflation diverted to the community treasury (currently 10%).
**Context**: The treasury reward cut rate is set via governance; it determines what share of each round's LPT emissions flows into the on-chain treasury rather than being distributed to orchestrators and delegators.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `community/treasury`

---

### Voting Power

**Definition**: Weight of a participant's governance vote, determined by their bonded LPT stake at the time of the vote.
**Context**: In Livepeer governance, voting power equals bonded stake; delegators can exercise their own voting power independently from their orchestrator via vote detachment.
**Tags**: `web3:governance`
**Status**: current
**Pages**: `community/governance`

---

### veLPT (Voting Escrow LPT)

**Definition**: Proposed mechanism locking LPT for enhanced voting power, aligning long-term incentive structures.
**Context**: veLPT is a governance design proposal for Livepeer that would reward longer token lock-ups with greater voting influence, modeled on Curve Finance's veToken model; as of 2026 it remains a proposal.
**Tags**: `web3:governance`
**Status**: draft
**Pages**: `community/governance`

---

### Failover

**Definition**: Automatic switching to a backup node or system when the primary fails, maintaining service continuity.
**External**: [Wikipedia — Failover](https://en.wikipedia.org/wiki/Failover)
**Tags**: `operational:monitoring`
**Status**: current
**Pages**: `community/tools`

---

### Fee cut / Fee share

**Definition**: Percentage of ETH fees an orchestrator retains (fee cut) versus the share distributed to delegators (fee share).
**Context**: Fee cut is set by each orchestrator alongside reward cut; a lower fee cut passes more ETH fees from transcoding or AI work to delegators, affecting delegation attractiveness.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `community/staking`

---

### Inflation Rate

**Definition**: Per-round rate of new LPT issuance, adjusting dynamically around the 50% target bonding rate.
**Context**: Livepeer's inflation rate starts around 0.00042% per round and decreases by 0.00005% per round when bonding exceeds 50%, and increases otherwise, targeting long-run equilibrium participation.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `community/economics`, `community/treasury`

---

### Retroactive Funding

**Definition**: Funding model rewarding projects after they demonstrate value, reducing speculative risk for the treasury.
**External**: [Ethereum Blog — Project Odin](https://blog.ethereum.org/en/2026/02/27/project-odin)
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `community/treasury`

---

### Milestone-based Grants

**Definition**: Funding released incrementally upon achievement of predefined deliverables rather than in a lump sum.
**Context**: Milestone-based grants are used by the Livepeer Foundation and treasury to reduce risk; SPEs and grantees receive funding tranches as they hit defined milestones and submit accountability reports.
**Tags**: `economic:treasury`
**Status**: current
**Pages**: `community/treasury`, `community/programs`

---

### Commission Rate

**Definition**: Percentage of rewards or fees an orchestrator retains before distributing the remainder to delegators.
**Context**: Commission Rate in Livepeer encompasses both the reward cut (on inflationary LPT) and fee cut (on ETH fees); orchestrators compete in the marketplace partly on the basis of their commission rates.
**Tags**: `economic:reward`
**Status**: current
**Pages**: `community/staking`, `community/economics`
