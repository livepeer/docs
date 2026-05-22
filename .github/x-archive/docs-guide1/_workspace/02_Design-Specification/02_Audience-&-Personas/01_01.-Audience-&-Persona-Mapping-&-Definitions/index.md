# **Persona Definitions Matrix**

Why This Exists

People arriving at Livepeer docs self-identify with generic labels: "I'm a developer," "I'm an operator," "I want to build something." **But** **Livepeer's roles don't map cleanly to those labels.** An orchestrator is also a delegate, also a model builder, also a governance voter. A "developer" could mean six different things depending on what they actually want to do.

This matrix defines what each role means **in the specific context of Livepeer**, acknowledges where roles overlap, and maps the gap between self-identification and docs routing.

**Rule: Route by goal, not by label.** The docs don't ask "what are you?" They ask "what do you want to do?" 

## The Livepeer Actor/Role Landscape

### **Network Functions (What People Actually Do)**

Every participant in the Livepeer network performs one or more of these **functions**. A single person or organisation often performs several simultaneously.**Network Functions (What People Actually Do)**

Every participant in the Livepeer network performs one or more of these **functions**. A single person or organisation often performs several simultaneously.

| **Function** | **What It Means in Livepeer** | **Who Typically Does This** |
| --- | --- | --- |
| **Consume services** | Call an API to get video/AI results back. You don't run infrastructure. You use what others built. | App developers, founders, SaaS builders |
| **Provide workloads** | Create AI pipelines, BYOC containers, or custom compute jobs that run on the network's GPUs. You define WHAT runs. | AI/ML engineers, pipeline builders, platform founders |
| **Route traffic** | Run a gateway node that sits between consumers and orchestrators. You control job routing, pricing, SLA, and client relationships. | Gateway operators, platform builders (Studio, Daydream, Cloud SPE) |
| **Provide compute** | Run GPU hardware that executes jobs. You control WHICH jobs to accept, which models to load, pricing, and stake. You also vote in governance. | Orchestrators, GPU farm operators, infrastructure companies |
| **Provide capital** | Stake LPT to orchestrators, earn rewards, participate in governance votes. | Delegators, investors, token holders |
| **Extend the protocol** | Write code that changes how the network itself works — smart contracts, go-livepeer core, protocol improvements. | Core contributors, protocol developers |
| **Build ecosystem** | Contribute docs, community support, education, governance proposals, tooling. | Community builders, SPEs, governance participants |

### The Role /Network Overlap Reality

These functions combine in practice. Here's how:

| **Real-World Actor** | **Functions They Perform** | **Docs Sections They Need** |
| --- | --- | --- |
| **Daydream (platform)** | Consume + Route + Provide workloads | Solutions, Gateways, Developers |
| **Elite Encoder (orchestrator)** | Provide compute + Provide workloads + Extend protocol + Provide capital | GPU Nodes, Developers, LP Token |
| **Indie app developer** | Consume services (that's it) | Solutions or Developers (API only) |
| **AI startup founder** | Consume + Provide workloads + Route traffic | Developers, Gateways |
| **LPT investor** | Provide capital only | LP Token |
| **Core team member** | Extend protocol + Build ecosystem | About, Community, Internal |
| **GPU farm operator** | Provide compute + Provide capital | GPU Nodes, LP Token |

**Key insight:** The more deeply engaged someone is with Livepeer, the more functions they perform and the more docs sections they need. A pure consumer touches one section. A platform builder touches four.

## Persona Definitions (Livepeer-Specific)

These are NOT generic role labels. They are Livepeer-specific definitions tied to a **primary function** in the network. Each persona maps to one docs TAB as its home base, but may need content from other tabs.

| **#** | **Persona** | **Primary Function** | **Docs Home** | **Self-Identifies As** |
| --- | --- | --- | --- | --- |
| 1 | Solution Integrator | Consume services | Solutions / Developers | "Developer," "founder" |
| 2 | Application Developer / Pipeline Builder | Provide workloads + Route traffic | Developers | "Developer," "builder," "AI engineer" |
| 3 | Gateway Operator | Route traffic | Gateways | "Developer," "operator," "infra engineer" |
| 4 | Orchestrator / GPU Compute Provider | Provide compute + capital + governance | GPU Nodes | "Miner," "GPU operator," "node operator" |
| 5 | Delegator / LPT Token Holder | Provide capital | LP Token | "Investor," "staker," "token holder" |
| 6 | Protocol Developer / Core Contributor | Extend the protocol | Developers + About | "Protocol dev," "blockchain dev" |
| 7 | Community Builder / Ecosystem Participant | Build ecosystem | Community | "Contributor," "community member" |

### Persona Mapping (Livepeer-Specific)

These are NOT generic role labels. They are Livepeer-specific definitions tied to a **primary function** in the network. Each persona maps to one docs TAB as its home base, but may need content from other tabs.

#### 1. Solution Integrator

|  |  |
| --- | --- |
| **Livepeer definition** | Someone consuming Livepeer services through an existing platform's API. They don't touch the network directly — they use a hosted gateway (Studio, Daydream, Cloud SPE) or an SDK that abstracts the network away. |
| **Self-identifies as** | "Developer," "founder," "I just want to use this" |
| **Primary function** | Consume services |
| **Technical depth** | API calls, SDKs, webhooks. May not know or care about web3, orchestrators, or the protocol. |
| **What Livepeer wants from them** | Build apps that drive demand through the network. |
| **Primary docs tab** | **Solutions** (platform docs) or **Developers** (quickstart → API) |
| **Also needs** | About (what is Livepeer), possibly LP Token (if they hold tokens) |
| **Pain point** | Confusing if routed to Gateway or Orchestrator content — they just want an API key and a response. |
| **Activation moment** | First successful API response (image generated, video transcoded). |

#### 2. Application Developer / Pipeline Builder

|  |  |
| --- | --- |
| **Livepeer definition** | Someone building an application or AI pipeline that runs ON the Livepeer network, not just consuming it. This is the messy middle — they need more than an API call but they're not running full infrastructure. They might build BYOC containers, run a lightweight gateway, or integrate at a deeper level than Solution Integrators. |
| **Self-identifies as** | "Developer," "founder," "builder," "AI engineer" |
| **Primary function** | Provide workloads + (often) Route traffic |
| **Technical depth** | Docker, APIs, potentially go-livepeer CLI, smart contract interaction. May or may not be web3-native. Could be coming from SaaS world or crypto world. |
| **What Livepeer wants from them** | Build novel applications and pipelines that expand what the network can do. These are the founders and businesses Livepeer most wants to attract. |
| **Primary docs tab** | **Developers** (BYOC, AI pipelines, integration) |
| **Also needs** | Gateways (if running own gateway), About (architecture), GPU Nodes (to understand what orchestrators support) |
| **Pain point** | The gap between "I have an idea" and "I have a working product" requires touching gateway setup, orchestrator coordination, and potentially on-chain registration. The docs need to make this multi-section journey navigable. |
| **Activation moment** | First custom pipeline or BYOC container running on the network. |
| **Subdivisions** |  |
| — Video developer | Building streaming/transcoding applications. Comes from media/video world. |
| — AI developer | Building AI inference applications. May come from ML/AI world. |
| — BYOC builder | Creating custom compute workloads. Deep technical, needs orchestrator coordination. |

#### 3. Gateway Operator

|  |  |
| --- | --- |
| **Livepeer definition** | Someone running a gateway node — the middleware that sits between clients (consumers) and orchestrators (compute providers). Gateways control job routing, pricing, client authentication, and SLA. Studio, Daydream, and Cloud SPE are all gateways. A gateway operator IS a developer, but their product is the gateway itself. |
| **Self-identifies as** | "Developer," "operator," "infrastructure engineer," "platform builder" |
| **Primary function** | Route traffic + (often) Provide workloads |
| **Technical depth** | go-livepeer CLI, Docker/bare metal, Arbitrum on-chain transactions, ETH wallet management, networking, monitoring. Solidly infrastructure-level. |
| **What Livepeer wants from them** | More gateways = more demand diversity = healthier marketplace. Gateway operators are the supply/demand connectors. |
| **Primary docs tab** | **Gateways** |
| **Also needs** | Developers (BYOC, AI pipelines they route), About (protocol economics, marketplace), LP Token (staking for on-chain registration), GPU Nodes (understanding what orchestrators offer) |
| **Pain point** | Blurry line with "developer." Someone building a platform that integrates Livepeer might start in Developers but end up needing Gateway content. The routing from developer-path.mdx ("I want to run a gateway" tab) handles this, but the jump between sections needs to feel guided, not like falling off a cliff. |
| **Activation moment** | First job routed through their gateway to an orchestrator and result returned. |

#### 4. Orchestrator / GPU Compute Provider

|  |  |
| --- | --- |
| **Livepeer definition** | Someone running GPU infrastructure that processes jobs on the network. But this label dramatically understates what orchestrators actually do in Livepeer. An orchestrator simultaneously: (1) provides GPU compute, (2) selects and loads AI models (making them effectively model curators), (3) holds staked LPT making them governance delegates with voting power proportional to their stake, (4) sets pricing and job acceptance policies making them market participants, (5) attracts delegators making them reputation players. The DeepWiki research gives this role an importance score of 10.56 — second highest in the ecosystem. |
| **Self-identifies as** | "Miner," "GPU operator," "node operator," "infrastructure provider" |
| **Primary function** | Provide compute + Provide capital + (implicitly) Build ecosystem via governance |
| **Technical depth** | Linux, NVIDIA CUDA, go-livepeer CLI, Docker, Arbitrum on-chain transactions, GPU memory management, AI model selection, staking mechanics, governance voting. The deepest technical role. |
| **What Livepeer wants from them** | More diverse, reliable, well-staked orchestrators running a wide range of AI models and video processing capabilities. |
| **Primary docs tab** | **GPU Nodes** |
| **Also needs** | LP Token (staking, governance, delegation), Developers (understanding what pipelines/BYOC containers they'll run), Gateways (understanding how gateways select and pay them), About (protocol economics) |
| **Pain point** | Docs treat them as "GPU runners" when they're actually multi-function participants. AI model selection alone is a complex decision that affects earnings, and it's not well-documented. The dual role as compute provider AND governance delegate means they need content from at least three sections. |
| **Activation moment** | First job processed + earnings visible in Explorer. |
| **Dual role reality** | Per Shtuka Research: orchestrators function as LPT Delegates who vote in the DAO and receive LPT issuance proportional to their delegated stake. Compute fee income and delegator attraction are connected — delegators evaluate both fee-sharing rates and operational competence. Critical data gaps exist around cost benchmarking (score 2/5), demand forecasting (score 1/5), and treasury strategy (score 0/5). |

#### 5. Delegator / LPT Token Holder

|  |  |
| --- | --- |
| **Livepeer definition** | Someone who holds LPT and stakes it to orchestrators. Delegators provide capital to the network and participate in governance through their chosen orchestrator's vote weight. The simplest entry point to the network — no technical setup, no infrastructure. |
| **Self-identifies as** | "Investor," "token holder," "staker," "DeFi user" |
| **Primary function** | Provide capital |
| **Technical depth** | Wallet connection, Arbitrum transactions, Explorer UI. Lowest technical bar of any persona. May or may not understand how the network works beyond "I stake and earn." |
| **What Livepeer wants from them** | Active, informed delegation that distributes stake across high-quality orchestrators and engaged governance participation. |
| **Primary docs tab** | **LP Token** |
| **Also needs** | About (understanding what Livepeer is), GPU Nodes (evaluating orchestrators to delegate to) |
| **Pain point** | They need to evaluate orchestrators to choose who to delegate to, but the data and guidance for this is thin. The connection between "my delegation" and "network health" isn't clearly drawn. |
| **Activation moment** | First delegation visible in Explorer with reward accrual. |

#### 6. Protocol Developer / Core Contributor

|  |  |
| --- | --- |
| **Livepeer definition** | Someone extending the Livepeer protocol itself — smart contracts, go-livepeer core, LIPs, protocol-level tooling. A very small audience but extremely high-impact. |
| **Self-identifies as** | "Protocol developer," "blockchain developer," "contributor" |
| **Primary function** | Extend the protocol |
| **Technical depth** | Go, Solidity, Arbitrum, protocol design, governance mechanics. Highest technical bar. |
| **Primary docs tab** | **Developers** ("I want to extend the protocol" tab) + **About** (protocol docs) |
| **Also needs** | Community (governance, LIPs, contribution process) |
| **Activation moment** | First merged PR to go-livepeer or deployed protocol improvement. |

#### 7. Community Builder / Ecosystem Participant

|  |  |
| --- | --- |
| **Livepeer definition** | Someone contributing to the ecosystem beyond code or capital — docs, education, governance proposals, community support, SPE participation. |
| **Self-identifies as** | "Community member," "contributor," "governance participant" |
| **Primary function** | Build ecosystem |
| **Primary docs tab** | **Community** |
| **Also needs** | About (understanding Livepeer), LP Token (governance) |
| **Activation moment** | First contribution accepted (doc PR, forum post, governance vote). |

#### 8. Researcher (Academic / AI-ML)

|  |  |
| --- | --- |
| **Livepeer definition** | Someone evaluating Livepeer's architecture, performance, or economics for papers, benchmarks, comparative analysis, or potential collaboration. Not building yet — studying. |
| **Self-identifies as** | "Researcher," "I'm evaluating Livepeer," "I'm comparing decentralised compute platforms" |
| **Primary function** | Evaluate and analyse |
| **Primary docs tab** | **About** (architecture, protocol) → **Developers** (specs, references) |
| **Also needs** | Performance data, network metrics, protocol specs, comparative positioning |
| **Activation moment** | Cites Livepeer accurately in a paper, benchmark, or recommendation. |

The Foundation repeatedly targets "founders, developers, and researchers" as audiences. Researchers are distinct from Application Developers — they don't want quickstarts, they want architecture depth, performance data, and honest comparative analysis. Currently served by Protocol Developer content + About section + any published benchmarks. If the Foundation's research partnerships grow (universities, AI labs), this persona may need its own content path.

## Appendix

### ACTION MATRIX

| **Action** | **Owner** | **Depends On** | **Status** |
| --- | --- | --- | --- |
| Validate persona definitions matrix | Alison + Rich | Nothing | TO DO |
| Validate audience taxonomy is complete | Alison | Definitions matrix | TO DO |
| Validate per-tab journeys match existing repo pages | Alison | Definitions matrix | TO DO |
| Map each journey step to existing/needed docs pages | Alison | Journey definitions | TO DO |
| Identify journey gaps (steps with no docs page) | Alison | Page mapping | TO DO |

### AI PROMPT

*You are helping define personas for Livepeer documentation. Livepeer is a decentralised video and AI infrastructure network on Ethereum (Arbitrum). CRITICAL CONTEXT: Role boundaries in Livepeer are blurry by design. An "orchestrator" is simultaneously a GPU compute provider, an AI model operator, a voting delegate, and a stake-weighted governance participant. A "developer" could mean someone consuming an API, someone building a BYOC pipeline, someone running a gateway, or someone extending the protocol. Do NOT treat personas as clean boxes. Define them by their PRIMARY FUNCTION in the network, explicitly document overlaps, and map the gap between how people self-identify ("I'm a developer") and what docs section actually serves their goal.*