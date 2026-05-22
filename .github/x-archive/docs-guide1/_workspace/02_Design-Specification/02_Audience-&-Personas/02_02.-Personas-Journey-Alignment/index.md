# The Persona Self-Identification Problem

People don't arrive at docs thinking "I'm a Gateway Operator." They arrive thinking "I'm a developer" or "I want to build something." Here's how self-identification maps to Livepeer roles:

| **What They Say** | **What They Probably Mean** | **Where to Route Them** |
| --- | --- | --- |
| "I'm a developer" | Could be ANY of personas 1–6. Need to sub-route by goal. | **developer-path.mdx** (goal-based routing) |
| "I want to integrate Livepeer" | Probably a Solution Integrator or Application Developer | Solutions → Developers quickstart |
| "I want to build an AI app" | Application Developer (AI). Will likely also need Gateway content. | Developers → AI pipelines → (later) Gateways |
| "I want to run infrastructure" | Gateway Operator or Orchestrator. Need to clarify which side. | Gateways (if routing) or GPU Nodes (if computing) |
| "I want to earn with my GPUs" | Orchestrator | GPU Nodes |
| "I want to stake / invest" | Delegator | LP Token |
| "I want to contribute" | Community Builder or Protocol Developer | Community or Developers ("extend protocol" tab) |
| "I want to use Livepeer for my product" | Could be Solution Integrator (API-level) or Application Developer (platform-level) or Gateway Operator (infrastructure-level). This is the hardest routing decision. | Start at developer-path.mdx, sub-route by depth of integration |

### **The "Developer" Disambiguation**

"Developer" is the most overloaded term. In Livepeer docs, it needs to be sub-routed immediately. The existing `developer-path.mdx` handles this with goal-based tabs:

| **developer-path.mdx Tab** | **Maps To Persona** | **Stays in Developers Tab?** |
| --- | --- | --- |
| "I want to add video to my app" | Solution Integrator | Yes (quickstart → Solutions) |
| "I want to run AI on video" | Application Developer (AI) | Yes (→ may need Gateways later) |
| "I want to run a gateway" | Gateway Operator | Routes to **Gateways** tab |
| "I want to contribute GPU compute" | Orchestrator | Routes to **GPU Nodes** tab |
| "I want to extend the protocol" | Protocol Developer | Yes (→ About for protocol docs) |

**This routing pattern should be replicated for each tab's portal/landing page** — not necessarily with the same format, but with the same principle: route by goal, not by label.

### Cross-Role Content Needs

Because roles overlap, some content is needed by multiple personas. This table identifies the highest-value cross-references.

| **Content Topic** | **Needed By** | **Lives In** | **Cross-Linked From** |
| --- | --- | --- | --- |
| How the marketplace works (gateways ↔ orchestrators) | Gateway Operators, Orchestrators, Application Developers | About (marketplace concept) | Gateways, GPU Nodes, Developers |
| On-chain registration & staking | Gateway Operators, Orchestrators, Delegators | LP Token (staking mechanics) | Gateways, GPU Nodes |
| AI pipeline architecture | Application Developers, Gateway Operators, Orchestrators | Developers (AI pipelines) | Gateways, GPU Nodes |
| Payment flow (clearinghouses, remote signers) | Gateway Operators, Orchestrators | Gateways (economics) | GPU Nodes |
| Governance & voting | Orchestrators, Delegators, Community | LP Token (governance) | GPU Nodes, Community |
| BYOC model | Application Developers, Orchestrators | Developers (BYOC) | GPU Nodes |
| Contribution workflow & codebase onboarding | Protocol Developers, Community Builders | Community (contributing) | Developers |

**Implementation principle:** Content lives in ONE section (single source of truth). Other sections cross-link to it or import the shared MDX. Do not duplicate.

# Audience Taxonomy

Nine audience tokens. A page can have one primary and optionally one secondary audience.

| **Token** | **Who They Are** | **Arriving Question** | **Primary Section** |
| --- | --- | --- | --- |
| `developer` | Building apps that use Livepeer APIs/SDKs | "How do I integrate this?" | Developers |
| `gateway-operator` | Running gateway infrastructure | "How do I set up and run a gateway?" | Gateways |
| `orchestrator` | Running GPU nodes / orchestrator infrastructure | "How do I set up, run, and earn with a node?" | GPU Nodes |
| `delegator` | Staking LPT tokens | "How do I stake and participate?" | LP Token |
| `platform-builder` | Building products ON TOP of Livepeer (Daydream, etc.) | "How does my platform use Livepeer?" | Platforms |
| `community` | Contributors, governance participants | "How do I participate and contribute?" | Community |
| `internal` | Docs maintainers, core team | "How does this repo/system work?" | Internal / docs-guide |
| `general` | Non-technical readers, investors, curious people | "What is Livepeer and why does it matter?" | Home / About |
| `everyone` | Content that serves all audiences equally | — | Home / About |

**Note on **`developer`** vs **`platform-builder`**:** A Solution Integrator consuming Studio APIs might use pages tagged `platform-builder`. An Application Developer building BYOC pipelines uses pages tagged `developer`. The tag signals depth of integration, not job title.

# Persona Journey Map (Docs Structure Framework)

This is the STRUCTURAL pattern each persona section follows. It tells us how to LAY OUT the docs. It does NOT tell us what content to put in them — the Livepeer Persona Journeys below do that.

Each persona section follows this structural pattern (from the Homogenise Styles document). Not every section needs all layers — but the ORDER is fixed.

| **Position** | **Purpose Type** | **Job at This Position** |
| --- | --- | --- |
| 1 | `landing` (portal) | Route them. "You're in the right place. Here's what's here." |
| 2 | `overview` | Orient them. "Here's what this is and why it matters to you." |
| 3 | `tutorial` (quickstart/get started) | Activate them. "Do this one thing and see it work." |
| 4 | `how_to` (operational guides) | Enable them. "Here's how to do each specific task." |
| 5 | `concept` (deeper understanding) | Deepen them. "Here's how it actually works." |
| 6 | `reference` (technical detail) | Support them. "Here's the exact specification." |
| 7 | `faq` / `troubleshooting` | Rescue them. "Here's what to do when it breaks." |
| 8 | `glossary` (if section-specific) | Define terms. "Here's what the words mean." |

# Livepeer Persona Journeys (Real-World Needs)

This is the Journey from zero to hero

These are the SUBSTANTIVE journeys — what each persona actually needs to DO in the real world, and what questions they need answered at each stage. These journeys are what make the success criteria in 00 testable.

**How to read these:** Each journey has stages. Each stage has questions the persona is asking. Those questions map to docs pages. If a page doesn't exist or doesn't answer the question, that's a gap.

### **DEVELOPER (AI Inference)**

**Who:** A developer building an application that uses AI inference (text-to-image, image-to-image, audio-to-text, LLM, etc.) through Livepeer's decentralised GPU network.

**Where they come from:** Heard about Livepeer from a hackathon, crypto/AI newsletter, a friend, or found it searching for decentralised AI inference APIs.

**Their core need:** Send AI inference requests to Livepeer and get results back, integrated into their application.

| **Stage** | **What They're Doing** | **Questions They Need Answered** | **Doc Page Purpose** |
| --- | --- | --- | --- |
| **1. Discovery** | Evaluating whether Livepeer is right for their use case | What AI models/pipelines does Livepeer support? How does pricing work? How does it compare to centralised alternatives (Replicate, Hugging Face Inference)? What are the latency/reliability characteristics? | `overview` |
| **2. Decision** | Choosing an integration path | Do I use a hosted gateway (like Studio) or call a gateway directly? What SDKs exist? What authentication do I need? Is there a free tier or testnet? | `overview` / `concept` |
| **3. Setup** | Getting credentials and tools ready | How do I get a gateway URL and API key? How do I install the SDK (or just use curl)? What are the API endpoints? | `tutorial` (prerequisites section) |
| **4. First Success** | Sending their first AI request and getting a result | Give me a working curl command (or SDK call) that sends a text-to-image request and returns an image. What does the response look like? How do I know it worked? | `tutorial` (core section) — **THIS IS THE CRITICAL ACTIVATION MOMENT** |
| **5. Exploration** | Trying different pipelines and parameters | What other pipelines are available? How do I do image-to-image? Audio-to-text? LLM inference? What parameters can I tweak? | `how_to` |
| **6. Integration** | Building it into their application | How do I handle errors and retries? What are rate limits? How do I handle async responses? How do I stream results? Best practices for production use? | `how_to` / `reference` |
| **7. Production** | Running in production | How do I monitor usage and costs? What SLA/uptime can I expect? How do I handle gateway failover? How do I optimise for cost vs speed? | `how_to` / `reference` |
| **8. Troubleshooting** | Something went wrong | Common error codes and what they mean. "My request returns 503" — what do I do? "The model I need isn't available" — what are my options? | `troubleshooting` / `faq` |

**Activation test (maps to 00 criterion P1):** A tester who has never used Livepeer follows stages 1–4 using only the docs. At the end of stage 4, they have received a generated image from a text prompt. If they can't get there, the docs fail this persona.

**Known gaps (from research):**

- Stage 4 (First Success) is completely blocked — the AI Jobs quickstart is "Coming Soon"
- Stage 1 (Discovery) — model/pipeline availability matrix doesn't exist as a single page
- Stage 2 (Decision) — the hosted vs direct gateway decision isn't clearly documented
- Stage 6 (Integration) — production best practices don't exist

### **DEVELOPER (Video / Transcoding)**

**Who:** A developer building an application that uses video transcoding or livestreaming through Livepeer.

**Where they come from:** Migrating from Livepeer Studio, building a new video platform, or evaluating decentralised video infrastructure.

**Their core need:** Transcode video files or route livestreams through Livepeer and get the output, integrated into their application.

| **Stage** | **What They're Doing** | **Questions They Need Answered** | **Doc Page Purpose** |
| --- | --- | --- | --- |
| **1. Discovery** | Evaluating Livepeer for video | What video capabilities does Livepeer offer? Transcoding? Livestreaming? What formats/codecs/profiles? How does pricing work? | `overview` |
| **2. Decision** | Choosing an integration path | Studio API vs direct gateway vs SDK? Am I migrating from Studio or starting fresh? What's the current state of Studio vs the new APIs? | `overview` / `concept` |
| **3. Setup** | Getting credentials and tools | Same as AI developer — gateway URL, API key, SDK/curl | `tutorial` (prereqs) |
| **4. First Success** | Submitting a transcoding job and getting output | Give me a working request that transcodes a video file. Where does the output go? How do I download it? | `tutorial` — **CRITICAL ACTIVATION** |
| **5. Exploration** | Trying different profiles, livestreaming | How do I change resolution/bitrate? How do I set up a livestream? How do I use different output formats? | `how_to` |
| **6. Integration** | Building into their app | Webhook callbacks, status polling, asset management, CDN integration | `how_to` / `reference` |
| **7. Migration** (if from Studio) | Moving from Studio APIs to new APIs | What changed? Mapping table of old endpoints to new. Authentication changes. SDK changes. | `how_to` (migration guide) |
| **8. Troubleshooting** | Something went wrong | Job failed — why? Output quality issues. Latency problems. | `troubleshooting` |

**Activation test (maps to 00 criterion P2):** Tester submits a video file, receives a transcoded output. If they can't get there, docs fail.

**Known gaps:**

- Stage 4 blocked — Transcoding Jobs quickstart is "Coming Soon"
- Stage 7 — Studio migration guide doesn't exist (RFP requirement)
- Stage 2 — Studio sunset/transition status is unclear in docs

### **GATEWAY OPERATOR**

**Who:** Someone running a Livepeer gateway — routing client requests to orchestrators and earning fees.

**Where they come from:** Existing Livepeer community member looking to earn, infrastructure operator evaluating Livepeer, or developer who wants to run their own gateway.

**Their core need:** Set up a gateway, configure it for AI and/or transcoding, register on-chain, connect to the marketplace, and earn from routing traffic.

| **Stage** | **What They're Doing** | **Questions They Need Answered** | **Doc Page Purpose** |
| --- | --- | --- | --- |
| **1. Discovery** | Understanding the opportunity | What is a gateway? How do gateways earn? What's the expected revenue? What's the risk/investment? | `overview` |
| **2. Evaluation** | Deciding whether to run one | Hardware requirements? Bandwidth requirements? On-chain costs (ETH for gas, LPT for stake)? How much can I realistically earn? | `concept` / `overview` |
| **3. Installation** | Getting the software running | How do I install go-livepeer in gateway mode? What OS/environment is supported? Docker? Bare metal? | `tutorial` (prereqs + step 1) |
| **4. Configuration** | Setting up for their use case | How do I configure for AI pipelines? For transcoding? Both? What are the configuration flags? How do I set pricing? | `tutorial` / `how_to` |
| **5. On-Chain Setup** | Registering on the network | How do I register my gateway on-chain? How do I fund it? What's the AIServiceRegistry? How do I set my service URI? | `tutorial` / `how_to` |
| **6. First Success** | Processing their first job through the gateway | How do I verify my gateway is receiving and routing requests? How do I test it? How do I know it's connected to orchestrators? | `tutorial` (verification) — **ACTIVATION** |
| **7. Marketplace** | Going live and earning | How do I connect to the marketplace? How do clients find my gateway? How do I set competitive pricing? | `how_to` |
| **8. Operations** | Day-to-day running | Monitoring, health checks, log analysis, scaling. How do I know if something is wrong? How do I handle orchestrator selection? | `how_to` / `reference` |
| **9. Economics** | Optimising earnings | How does the payment flow work? Clearinghouses? Remote signers? How do I maximise throughput vs cost? | `concept` / `how_to` |
| **10. Troubleshooting** | Something broke | Gateway not routing jobs. Orchestrator connections failing. Payment issues. Error messages. | `troubleshooting` |

**Activation test (maps to 00 criterion P3):** Tester goes from zero to a gateway that successfully routes an AI request to an orchestrator and returns a result. Must include on-chain registration.

**Known gaps:**

- Stage 5 — on-chain registration process is documented but may be incomplete
- Stage 7 — marketplace mechanics are partially documented
- Stage 9 — clearinghouse and remote signer docs require SME confirmation
- Stage 3–6 as a single end-to-end walkthrough doesn't exist (individual pieces do)

### **ORCHESTRATOR / GPU NODE OPERATOR**

**Who:** Someone running GPU infrastructure on the Livepeer network — processing AI inference and/or transcoding jobs and earning fees.

**Where they come from:** GPU miners looking for yield, AI infrastructure operators, Livepeer community members with hardware.

**Their core need:** Set up a node, stake LPT, process jobs, and earn rewards.

| **Stage** | **What They're Doing** | **Questions They Need Answered** | **Doc Page Purpose** |
| --- | --- | --- | --- |
| **1. Discovery** | Understanding the opportunity | What is an orchestrator? How do they earn? What's the expected revenue? What hardware do I need? | `overview` |
| **2. Evaluation** | Deciding whether to run one | GPU requirements (which cards, how much VRAM)? LPT stake requirement? ETH for gas? Bandwidth? Electricity costs vs earnings? | `concept` / `overview` |
| **3. Installation** | Getting go-livepeer running | Download, install, configure basic settings. What network (mainnet/testnet)? Docker or bare metal? | `tutorial` (prereqs + step 1) |
| **4. On-Chain Registration** | Joining the network | How do I stake LPT? How do I register as an orchestrator? How do I set my reward cut and fee share? What's the minimum stake? | `tutorial` (step 2) |
| **5. AI Setup** (if running AI) | Configuring GPU pipelines | Which AI models to load? How to configure pipelines? GPU memory management. Model download and caching. Pipeline-specific setup (text-to-image, LLM, etc.) | `how_to` |
| **6. First Success** | Processing their first job | How do I verify I'm receiving jobs? How do I check my node is healthy? How do I see my first earnings? | `tutorial` (verification) — **ACTIVATION** |
| **7. Optimisation** | Maximising earnings | Pricing strategy. Which pipelines are most profitable? Hardware optimisation. Multi-GPU setup. Transcoder vs AI allocation. | `how_to` / `concept` |
| **8. Advanced Operations** | Scaling and securing | Remote signers (for key security). Payment clearinghouses. Multiple nodes. Monitoring and alerting. | `how_to` / `reference` |
| **9. Governance** | Participating in protocol governance | How do voting rounds work? What am I voting on? How does my vote weight relate to my stake? | `concept` / `how_to` |
| **10. Troubleshooting** | Something broke | Node not receiving jobs. GPU errors. Stake slashing concerns. Connection issues. Earnings not showing. | `troubleshooting` |

**Activation test (maps to 00 criterion P4):** Tester goes from zero to a registered orchestrator that processes at least one job and shows earnings in the Explorer.

**Known gaps:**

- Stage 5 — AI setup quickstart documentation is fragmented
- Stage 8 — Remote signer documentation requires SME confirmation (PRs #3791, #3822)
- Stage 2 — Clear hardware requirements matrix doesn't exist as a single page
- No single end-to-end walkthrough covering stages 3–6

### **DELEGATOR / LPT TOKEN HOLDER**

**Who:** Someone who holds LPT and wants to participate in the network through delegation and governance.

**Where they come from:** Crypto investor who bought LPT, community member who earned LPT, or someone exploring Livepeer governance.

**Their core need:** Stake their LPT with an orchestrator, earn rewards, and participate in governance decisions.

| **Stage** | **What They're Doing** | **Questions They Need Answered** | **Doc Page Purpose** |
| --- | --- | --- | --- |
| **1. Discovery** | Understanding delegation | What is delegation? How do delegators earn? What are the risks? How does staking work? | `overview` |
| **2. Getting LPT** | Acquiring tokens | Where can I buy LPT? Which exchanges? How do I bridge to Arbitrum? What wallet do I need? | `how_to` |
| **3. Choosing an Orchestrator** | Selecting who to delegate to | How do I evaluate orchestrators? What do reward cut and fee share mean? Where do I see performance data? How do I use the Explorer? | `how_to` / `concept` |
| **4. Delegating** | Actually staking their LPT | Step-by-step: connect wallet to Explorer, select orchestrator, enter amount, confirm transaction. What are the gas costs? | `tutorial` — **ACTIVATION** |
| **5. Monitoring** | Checking rewards and performance | How do I see my rewards? How often are they distributed? How do I check if my orchestrator is performing well? | `how_to` |
| **6. Managing** | Adjusting their delegation | How do I switch orchestrators? How do I unstake? What's the unbonding period? Tax implications? | `how_to` |
| **7. Governance** | Voting on proposals | How do governance proposals work? Where do I vote? How is voting power calculated? What are current proposals? | `concept` / `how_to` |
| **8. Troubleshooting** | Something unexpected | Rewards lower than expected — why? Transaction failed. Can't find my delegation in Explorer. | `troubleshooting` / `faq` |

**Activation test (maps to 00 criterion P5):** Tester goes from holding LPT in a wallet to having an active delegation showing in the Explorer with reward accrual visible.

**Known gaps:**

- Stage 4 — Written guide exists but no interactive walkthrough or video (RFP flagged this)
- Stage 2 — Exchange/bridge information may be stale
- Stage 3 — Orchestrator evaluation guide is thin
- No visual walkthrough with screenshots of the Explorer delegation flow

### **GENERAL / NEWCOMER**

**Who:** Someone who just heard about Livepeer and needs to understand what it is and whether it's relevant to them.

**Where they come from:** Crypto media, a conference talk, a friend, search engine, AI/video industry research.

**Their core need:** Understand what Livepeer is, what it does, and whether they should care — then find their persona path.

| **Stage** | **What They're Doing** | **Questions They Need Answered** | **Doc Page Purpose** |
| --- | --- | --- | --- |
| **1. Landing** | Arrived at docs.livepeer.org | What is this site? Where do I start? | `landing` (Mission Control) |
| **2. Understanding** | Reading the primer | What is Livepeer? What problem does it solve? How is it different from centralised alternatives? | `overview` (Primer / About) |
| **3. Self-Identification** | Figuring out who they are | Am I a developer? An operator? An investor? A curious observer? Which section is for me? | `landing` (persona routing) |
| **4. Entry** | Moving into their persona section | Clear handoff from general content to the specific portal page for their identified role | `landing` (persona portal) |

**Activation test (maps to 00 criterion P6):** Tester arrives at the docs homepage. Within 5 minutes, they can explain what Livepeer does in one sentence AND have navigated to the correct persona portal for their self-identified role.

**Known gaps:**

- Stage 1 — Mission Control exists but Get Started sub-pages are placeholders
- Stage 2 — Primer and About section are the strongest content (this path mostly works)
- Stage 3 — Self-identification relies on portal card labels being clear enough

### **COMMUNITY CONTRIBUTOR**

**Who:** Someone who wants to contribute to Livepeer — docs, code, governance, community support.

**Their core need:** Find out how to contribute, what's needed, and submit their first contribution.

| **Stage** | **What They're Doing** | **Questions They Need Answered** | **Doc Page Purpose** |
| --- | --- | --- | --- |
| **1. Discovery** | Finding out how to help | What kinds of contributions does Livepeer need? Is it open to external contributors? | `overview` |
| **2. Orientation** | Understanding the contribution landscape | Docs contributions vs code vs community? What's the process? What tools do I need? | `how_to` |
| **3. First Contribution** | Submitting something | How do I report an issue? How do I submit a PR? What are the style/quality requirements? Who reviews? | `tutorial` / `how_to` |
| **4. Ongoing** | Regular participation | Where do discussions happen? How does governance work? What grants/programmes exist? | `reference` / `concept` |

**Known gaps:**

- Stage 3 — Contribution guidelines are a placeholder (RFP requirement)
- Stage 4 — Builder opportunities pages are partially complete
- No end-to-end "your first contribution" walkthrough

### **PLATFORM BUILDER**

**Who:** Someone building a product or platform that integrates Livepeer (like Daydream, custom gateways, embedded SDKs).

**Their core need:** Understand Livepeer's capabilities at a platform level, evaluate integration architecture, and build a product on top of it.

| **Stage** | **What They're Doing** | **Questions They Need Answered** | **Doc Page Purpose** |
| --- | --- | --- | --- |
| **1. Evaluation** | Assessing Livepeer as infrastructure | What can I build on Livepeer? What's the architecture? What are the trust/decentralisation tradeoffs? | `overview` / `concept` |
| **2. Architecture** | Designing their integration | Gateway vs direct orchestrator access? SDK vs API? How do I handle user auth on top of Livepeer? Clearinghouse model? | `concept` / `reference` |
| **3. Prototyping** | Building a proof of concept | Same as Developer journeys but at platform integration depth | `tutorial` / `how_to` |
| **4. Production** | Operating at scale | SLAs, monitoring, multi-gateway failover, payment management, user management | `how_to` / `reference` |

**Known gaps:**

- Stage 2 — Platform architecture decisions are not documented as a single page
- Stage 4 — Production operations for platform builders doesn't exist
- This persona overlaps heavily with Developer but needs deeper architectural content