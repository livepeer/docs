# Livepeer Docs v2 — First-Principles Site Map

> Derived entirely from: what each human type needs to accomplish.
> NOT derived from what files exist.
> Existing files are evidence of work done against this map — not the source of it.

**Date:** 2026-04-07  
**Standard applied:** Documentation as distribution infrastructure. A user should be able to move from landing page to deployed/active system without human intervention.  
**Framework:** Diátaxis (Tutorial / How-To / Explanation / Reference) × Persona-first routing

---

## THE FUNDAMENTAL QUESTION

Before any page can be written, you need the answer to one question per audience:

**What does this person need to accomplish, and what stands between them and accomplishing it?**

The docs exist to eliminate that gap. Every page is either:
- Orienting them toward the right path
- Giving them the knowledge to make a decision
- Walking them through an action
- Letting them look something up

If a page does none of these four things, it shouldn't exist.

---

## THE AUDIENCE MAP

Five human types use this documentation. Each has a fundamentally different relationship with Livepeer.

| Human Type | Relationship with Livepeer | Primary goal | What "done" looks like |
|---|---|---|---|
| **GPU Operator** | Sells compute to the network | Earn ETH + LPT from GPU hardware | Node running, jobs processing, earnings visible |
| **Gateway Operator** | Routes work into the network | Operate gateway infrastructure profitably | Gateway processing jobs, payments settling |
| **Developer / Builder** | Builds applications on the network | Ship a product using Livepeer's AI or video APIs | Working application with Livepeer integrated |
| **Delegator / LPT Holder** | Stakes token to secure network | Earn staking rewards, participate in governance | Stake active, rewards accruing, governance accessible |
| **Community Participant** | Shapes and contributes to the ecosystem | Contribute meaningfully and stay connected | Active in chosen contribution mode |

One additional human type crosses all of these:

| Human Type | Relationship | Goal |
|---|---|---|
| **Evaluator** (investor, researcher, enterprise buyer) | Assessing the protocol | Form a complete and accurate picture of what Livepeer is, how it works, and whether to engage |

---

## WHAT EACH HUMAN NEEDS — ZERO TO HERO

### 1. GPU OPERATOR (Orchestrator)

**Real-world starting point:** Has GPU hardware sitting idle. Heard about Livepeer through mining communities, Discord, YouTube, or the AI compute conversation. Wants to earn passive income.

**The complete journey they need documented:**

```
STAGE 1 — IS THIS WORTH IT?
  Q: What is Livepeer and what will my GPU actually do?
  Q: How much can I realistically earn? What drives earnings?
  Q: What are the real costs (electricity, LPT, time)?
  Q: Do I need LPT? How much? Where do I get it?
  Q: Should I run a solo orchestrator, join a pool, or just be a transcoder worker?
  Q: What hardware is minimum? What's optimal?
  Q: What is the difference between transcoding and AI inference jobs?

STAGE 2 — HOW DO I START?
  Q: Which setup path is right for my situation?
    Path A: Solo orchestrator (need LPT, full control)
    Path B: Pool worker (no LPT needed, less control)
    Path C: AI-only node (specialized, high VRAM)
    Path D: Dual transcoding + AI (maximum revenue)
  Q: How do I install go-livepeer?
  Q: How do I configure it for my chosen path?
  Q: How do I connect to Arbitrum?
  Q: How do I register / publish my offerings?
  Q: How do I verify I'm set up correctly?

STAGE 3 — WHY ISN'T THIS WORKING?
  Q: Why am I not receiving jobs?
  Q: "Orchestrator not available" — what does that mean?
  Q: Port forwarding isn't working — what do I do?
  Q: I'm in the active set but getting no work — why?
  Q: How do I know if my pricing is competitive?

STAGE 4 — HOW DO I ADD AI PIPELINES?
  Q: What AI pipelines can I run? (text-to-image, LLM, audio-to-text, etc.)
  Q: What VRAM do I need per pipeline?
  Q: How do I configure aiModels.json?
  Q: How do I manage Docker containers for AI runner?
  Q: Realtime vs batch — what's the difference?
  Q: How do I host custom models (BYOC)?

STAGE 5 — HOW DO I MAXIMISE EARNINGS?
  Q: What price per pixel / per unit should I set?
  Q: How does the active set work? How do I stay in it?
  Q: How do reward calls work? How often should I call?
  Q: How do I attract delegation?
  Q: How do I run a pool and let others join?
  Q: How do I set up remote workers (BYOC) to scale capacity?

STAGE 6 — REFERENCE
  CLI flags complete reference
  aiModels.json schema
  Hardware requirements table
  Community pools list
  Protocol parameters
  Contract addresses
```

**What "done" looks like:** GPU operational, jobs processing (transcoding or AI or both), earnings visible in Explorer, monitoring set up.

---

### 2. GATEWAY OPERATOR

**Real-world starting point:** Either (A) a developer who built something using Daydream/hosted API and wants to reduce cost at scale by self-hosting, or (B) an infrastructure operator who wants to provide gateway services as a business.

**The complete journey they need documented:**

```
STAGE 1 — WHAT IS A GATEWAY AND DO I NEED ONE?
  Q: What does a gateway actually do in the Livepeer network?
  Q: What is the difference between using a hosted gateway (Daydream API) and running my own?
  Q: When does self-hosting make economic sense?
  Q: What is the difference between an AI gateway and a video gateway?
  Q: What is on-chain vs off-chain gateway mode?
  Q: Do I need ETH keys / on-chain operations, or can I run off-chain?
  Q: What is a remote signer and do I need one?
  Q: What is a clearinghouse and how does it relate to this?

STAGE 2 — HOW DO I CHOOSE MY SETUP PATH?
  Path A: Off-chain gateway (AI workloads, no ETH key management)
  Path B: On-chain gateway (full control, ETH-signed tickets)
  Path C: Gateway as a service / provider (public gateway, commercial)
  Q: For off-chain — how does the gateway find orchestrators?
  Q: For on-chain — do I self-host the remote signer or use a hosted one?

STAGE 3 — HOW DO I INSTALL AND CONFIGURE?
  Q: Docker vs binary vs source — which is right for me?
  Q: What are the minimum hardware requirements for gateway role?
  Q: What configuration flags do I need for my chosen path?
  Q: How do I configure for AI workloads? For video? For both?
  Q: How do I connect to the orchestrator network?
  Q: How do I verify the gateway is processing jobs?

STAGE 4 — HOW DO I MANAGE AND MONITOR?
  Q: How do I monitor gateway health and throughput?
  Q: How do I troubleshoot failed jobs?
  Q: How do I manage orchestrator selection for my workload type?
  Q: How do I add middleware (auth, rate limiting, API key management)?
  Q: How do I fund the gateway and manage ETH balance?

STAGE 5 — HOW DO I RUN THIS AS A SERVICE?
  (For Persona B — Provider)
  Q: How does the payment model work? How does ETH flow from app → gateway → orchestrator?
  Q: How do I publish my gateway to the network so developers can find it?
  Q: How do I implement API key management for my users?
  Q: What is the NaaP model and how does it relate to what I'm building?
  Q: How do I scale to production traffic?
  Q: How does the clearinghouse architecture work end to end?

STAGE 6 — REFERENCE
  CLI flags complete reference
  AI-API OpenAPI spec
  Gateway configuration reference
  Payment mechanics reference
  Contract addresses
```

**What "done" looks like:** Gateway running, receiving and processing jobs, payments settling correctly.

---

### 3. DEVELOPER / BUILDER

**Real-world starting point:** Building a product that needs AI inference (image generation, video, LLM) or video transcoding. Found Livepeer through the AI compute ecosystem, Daydream, Streamplace, or a referral.

**The complete journey they need documented:**

```
STAGE 1 — CAN LIVEPEER DO WHAT I NEED?
  Q: What can Livepeer's network actually do? (AI pipelines, video transcoding)
  Q: What AI pipelines are available? (text-to-image, image-to-video, LLM, audio-to-text)
  Q: What is the latency and reliability profile?
  Q: Is this for realtime applications or batch processing?
  Q: What does it cost? How is pricing set?
  Q: How is Livepeer different from using AWS, Replicate, or another cloud AI provider?

STAGE 2 — HOW DO I START BUILDING?
  Q: Should I use a hosted gateway API (Daydream/NaaP) or self-host a gateway?
  Q: Which SDK should I use? (JS, Python, Go)
  Q: How do I get API credentials?
  Q: What does a minimal working integration look like?
  Q: AI quickstart — what are the exact steps from zero to first inference call?
  Q: Video quickstart — what are the exact steps from zero to first transcoded stream?

STAGE 3 — HOW DO I BUILD MY SPECIFIC USE CASE?
  Path A: AI inference application (image gen, video gen, LLM)
  Path B: Live video streaming and transcoding
  Path C: Video on demand
  Path D: ComfyStream / ComfyUI integration
  Path E: Custom model (BYOC)
  Q: How do I authenticate requests?
  Q: How do I handle errors and retries?
  Q: How do I select specific AI pipelines / models?

STAGE 4 — HOW DO I GO TO PRODUCTION?
  Q: Production checklist — what do I need before launching?
  Q: How do I monitor my integration?
  Q: How do I handle rate limits?
  Q: Webhooks — how do I use them for async jobs?
  Q: How do I implement access control?

STAGE 5 — HOW DO I CONTRIBUTE / GO DEEPER?
  Q: How do I run my own gateway to reduce costs?
  Q: How do I contribute to the open-source ecosystem?
  Q: What grants / bounties / opportunities are available?
  Q: How do I deploy to a local testnet?

STAGE 6 — REFERENCE
  AI API reference (OpenAPI)
  Gateway API reference
  SDK reference (JS, Python)
  Webhook events reference
  Error codes
  Example applications
```

**What "done" looks like:** Working application making successful calls to the Livepeer network (AI or video), with production monitoring and error handling in place.

---

### 4. DELEGATOR / LPT HOLDER

**Real-world starting point:** Holds LPT (from market, earlier participation, or airdrop). Wants to earn staking rewards and/or participate in governance. May have no technical background.

**The complete journey they need documented:**

```
STAGE 1 — WHAT IS LPT AND WHY DELEGATE?
  Q: What is LPT and what are its three functions?
  Q: How does delegation work? What does staking LPT actually do?
  Q: How do I earn rewards? How much? What drives the rate?
  Q: What are the risks of delegating?
  Q: What is the unbonding period?
  Q: What is the difference between ETH rewards and LPT inflation rewards?

STAGE 2 — HOW DO I DELEGATE?
  Q: I hold LPT on Ethereum mainnet — do I need to bridge to Arbitrum?
  Q: How do I bridge LPT to Arbitrum?
  Q: How do I choose an orchestrator to delegate to?
  Q: What should I look for in an orchestrator? (commission, performance, stake, rewards history)
  Q: How do I actually delegate (the on-chain steps)?
  Q: How do I verify my delegation is active?

STAGE 3 — HOW DO I MANAGE MY POSITION?
  Q: How do I monitor my rewards?
  Q: How do I change orchestrators?
  Q: How do I claim rewards?
  Q: What happens if my orchestrator changes commission rate?
  Q: How do I undelegate?

STAGE 4 — HOW DO I PARTICIPATE IN GOVERNANCE?
  Q: How does Livepeer governance work?
  Q: How do I vote on a governance proposal (LIP)?
  Q: What is the treasury? How does it get funded?
  Q: What are SPEs and how are they funded?
  Q: How do I propose a treasury allocation (submit an SPE proposal)?
  Q: What is GovWorks?

STAGE 5 — REFERENCE
  Protocol parameters (round duration, active set size, inflation rate)
  LPT exchanges
  Contract addresses
  Governance portal
  Explorer guide
```

**What "done" looks like:** LPT staked with a chosen orchestrator on Arbitrum, rewards visible in Explorer, governance participation possible.

---

### 5. COMMUNITY PARTICIPANT / CONTRIBUTOR

**Real-world starting point:** Interested in Livepeer beyond their primary technical role, OR new to Livepeer entirely and evaluating whether/how to get involved.

**The complete journey they need documented:**

```
STAGE 1 — WHAT IS THIS COMMUNITY?
  Q: Who is in the Livepeer community?
  Q: How is the community organised? (Foundation, SPEs, workstreams, GovWorks)
  Q: What is the Livepeer Foundation? When did it launch? What does it do?
  Q: Is this community active? What are the participation levels?
  Q: What are the community norms?

STAGE 2 — WHERE DO I GO?
  Q: What platforms is the community on? (Discord, Forum, Telegram, X, YouTube, GitHub)
  Q: Which platform is for what?
  Q: Which Discord channels should I be in for my role?
  Q: Where is the right place to ask questions?
  Q: Where do governance discussions happen?

STAGE 3 — HOW DO I CONTRIBUTE?
  Q: What kinds of contribution are valued? (code, docs, governance, translation, support, community building)
  Q: How do I contribute code? (GitHub, contribution guide)
  Q: How do I contribute documentation?
  Q: How do I get involved in governance without writing code?
  Q: Are there funded opportunities? (grants, RFPs, bug bounties, workstream roles)
  Q: What are the active workstreams and how do I join one?

STAGE 4 — HOW DO I STAY CONNECTED?
  Q: What are the recurring community calls? When? How do I join?
  Q: Where is the community calendar?
  Q: Where does Livepeer publish (blog, X, YouTube)?
  Q: What is Live Pioneers?
  Q: Where do I follow releases and changelogs?

STAGE 5 — WHAT TOOLS DOES THE COMMUNITY HAVE?
  Q: What community-built tools exist?
  Q: Where is the maintained list of ecosystem tools?
  Q: What community guides exist for delegators, orchestrators, and builders?
```

**What "done" looks like:** Knows which platform to use, has taken at least one concrete action (joined Discord, made a contribution, voted on a proposal, joined a call).

---

### 6. EVALUATOR (Investor / Researcher / Enterprise)

**Real-world starting point:** Heard about Livepeer in AI compute, DePIN, or web3 context. Needs to form a complete and accurate picture before committing resources.

**The complete journey they need documented:**

```
STAGE 1 — WHAT IS LIVEPEER?
  Q: What is Livepeer in one paragraph?
  Q: What problem does it solve?
  Q: How does it work at a conceptual level?
  Q: Where does Livepeer sit in the AI compute / video infrastructure landscape?

STAGE 2 — HOW DOES IT ACTUALLY WORK?
  Q: What are all the components and how do they fit together? (the full mental model)
  Q: Who are the participants and what does each one do?
  Q: How does a job flow from request to completion?
  Q: How does pricing work? How does money flow?
  Q: How does the protocol work? (staking, delegation, active set, inflation)
  Q: What is LPT and what are its three functions?
  Q: How does governance work?

STAGE 3 — WHAT HAS BEEN BUILT?
  Q: What products exist on Livepeer today?
  Q: Who is using it? (Daydream, Streamplace, Embody, Frameworks, etc.)
  Q: What is the network's current scale?
  Q: What does the roadmap look like?

STAGE 4 — WHO GOVERNS IT?
  Q: Who runs Livepeer? (Foundation vs community vs core team)
  Q: How is the treasury funded and spent?
  Q: What are SPEs?
  Q: What is the Foundation's role?

STAGE 5 — HOW DO I VERIFY?
  Smart contract addresses
  Arbitrum blockchain verification
  GitHub source code
  Network metrics
  Whitepaper
```

**What "done" looks like:** Confident, accurate understanding of Livepeer's technical architecture, economics, governance, ecosystem, and trajectory.

---

## THE REQUIRED INFORMATION ARCHITECTURE

Derived from the six human journeys above. This is what the docs must contain — independently of how it is organised.

### Information the docs must contain for GPU Operators:
1. What Livepeer is and what orchestrators do (oriented toward earning)
2. Earnings model: sources, variables, realistic ranges
3. Hardware requirements and GPU compatibility
4. Solo vs pool vs AI-only decision framework
5. Complete install guide: go-livepeer, all platforms
6. Configuration guide for each setup path
7. Arbitrum connection setup
8. Offering publication (on-chain activation)
9. Verification: how to confirm setup is correct
10. Troubleshooting: the 10 most common problems + fixes
11. AI pipeline types, VRAM requirements per pipeline
12. aiModels.json configuration (complete schema)
13. AI Runner container management
14. Pricing strategy: competitive pricing guidance (not just "set a price")
15. Active set mechanics: how to enter and stay
16. Reward calling: what it is, how often, automation
17. Pool operation: running a pool and accepting workers
18. Remote workers (BYOC): scaling capacity
19. Monitoring: what to watch, how to alert
20. Full CLI reference

### Information the docs must contain for Gateway Operators:
1. What a gateway does in the network
2. Why self-hosting makes sense vs hosted API
3. On-chain vs off-chain mode explained
4. Remote signer: what it is, when to use it, how to set it up
5. Clearinghouse: full architecture explanation
6. Setup path decision framework (path A/B/C)
7. Complete install guide for gateway role
8. Configuration for AI workloads
9. Configuration for video workloads
10. Configuration for dual AI + video
11. Off-chain orchestrator discovery: how it works, how to configure
12. Marketplace connection and orchestrator selection
13. Funding and ETH balance management
14. Payment mechanics (PM tickets, settlement)
15. Monitoring and health checking
16. Middleware integration (auth, rate limiting)
17. Scaling to production traffic
18. NaaP / clearinghouse as managed service option
19. Full CLI/configuration reference

### Information the docs must contain for Developers:
1. What Livepeer can do for their application
2. AI pipelines available and their specs
3. Realtime vs batch — when to use each
4. Hosted API vs self-hosted gateway — decision and transition
5. SDK overview: which language, which to use
6. Getting API credentials
7. AI quickstart: zero to first inference call (complete)
8. Video quickstart: zero to first transcoded stream (complete)
9. ComfyStream integration
10. Authentication and auth flows
11. Error handling and retries
12. Production checklist
13. Webhooks reference
14. Access control
15. Custom model integration (BYOC)
16. How to run a gateway (for those transitioning from hosted)
17. Contribution guide (code, grants, bounties)
18. Full API references (AI API, Gateway API)
19. SDK references
20. Example applications

### Information the docs must contain for Delegators:
1. What LPT is and its three functions
2. How delegation works and what it does for the network
3. Earning mechanics: ETH fees + LPT inflation
4. Realistic earning expectations and variables
5. Risks (commission change, unbonding period, slashing)
6. Bridging LPT to Arbitrum (step by step)
7. How to evaluate and choose an orchestrator
8. Delegation steps (on-chain, step by step)
9. Monitoring rewards and position
10. Managing position (change, undelegate, claim)
11. Governance model explanation
12. How to vote on a proposal
13. Treasury mechanics
14. SPE system explanation
15. How to submit a treasury proposal
16. Protocol parameters reference
17. LPT exchange list

### Information the docs must contain for Community:
1. Community structure: Foundation, SPEs, workstreams, GovWorks
2. Foundation explanation (not the protocol — the organisation)
3. Platform map with purpose per platform
4. Discord channel guide for each role
5. Forum guidance: what goes where
6. Community norms and conduct standards
7. Contribution taxonomy: what types of contribution are valued
8. Contribution pathways per type
9. Funded opportunities: grants, RFPs, workstream roles, bug bounties
10. Active workstreams (with pointer to live source, not static list)
11. Recurring calls: schedule, purpose, how to join
12. Community calendar link
13. News and publishing surfaces map
14. Community tools directory
15. Community guides directory (by role)

### Information the docs must contain for Evaluators:
1. What Livepeer is (one page, complete)
2. The full mental model (all layers: protocol, network, application)
3. All actors and their roles
4. Job lifecycle (request → completion)
5. Marketplace mechanics
6. Protocol mechanics (staking, delegation, rewards, inflation, governance)
7. LPT token: three functions
8. Treasury and organisational structure
9. Governance model
10. Smart contract architecture and addresses
11. Design philosophy
12. What products exist on the network today
13. Network current state
14. Technical roadmap
15. Whitepaper
16. Glossary

---

## SUCCESS CRITERIA — THE ONLY TEST THAT MATTERS

**For each audience, the docs pass when a person with no prior Livepeer knowledge can:**

| Audience | Completion test |
|---|---|
| GPU Operator | Install go-livepeer, configure for their chosen path, process their first job, understand their earnings — without asking anyone |
| Gateway Operator | Install and configure a gateway, connect to orchestrators, process their first job — without asking anyone |
| Developer | Make their first successful API call (AI or video), understand how it works, handle errors — without asking anyone |
| Delegator | Bridge LPT, choose an orchestrator, delegate, see their rewards — without asking anyone |
| Community | Know where to go, take one concrete action, find funded opportunities if applicable — without asking anyone |
| Evaluator | Accurately describe Livepeer's architecture, economics, governance, and ecosystem — without asking anyone |

**The Discord test:** Any question that appears in Discord 3+ times must have a linkable doc page answer.

**The AI test:** When an LLM is asked "how do I run a Livepeer orchestrator?" it must be able to construct an accurate, complete answer from the docs. This requires: semantic structure, frontmatter, explicit preconditions and outcomes, no implicit knowledge.

---

## THE REQUIRED TAB STRUCTURE

Derived from the information requirements above. This is what must exist — tabs and sections — before the site is complete.

### HOME
**Purpose:** Answer "what is this and where do I go?"  
**Audience:** Everyone, first visit  
**Must contain:**
- 10-minute orientation to Livepeer (primer)
- Clear routing to each audience path
- What Livepeer is building / why it matters
- What's been built (ecosystem showcase)

**Does NOT need:** Deep technical explanation (→ About), setup instructions (→ role tabs)

---

### ABOUT
**Purpose:** Complete conceptual and architectural reference  
**Audience:** Evaluators primarily; also anyone wanting depth beyond their role tab  
**Must contain:**
- Complete mental model (all layers)
- All actors and their roles (one comprehensive page)
- Job lifecycle (request → settlement)
- Marketplace mechanics
- Full protocol section: staking, delegation, rewards, inflation, governance, treasury, LPT
- Smart contracts and architecture
- Design philosophy
- **MISSING:** Ecosystem/products coverage — what's been built
- **MISSING:** Current network state
- **MISSING:** Evaluator path: "should I engage with Livepeer?"

**Does NOT need:** Setup instructions (→ role tabs), how-to guides (→ role tabs)

---

### GPU NODES (Orchestrators)
**Purpose:** Complete zero-to-hero for GPU operators  
**Audience:** All five GPU operator personas (Solo, Pool Worker, Pro Engineer, Enterprise, AI Native)  
**Must contain everything in the GPU Operator information list above**

Structure that serves the journey:
```
Hub / Portal          — orientation, routing by persona path
Concepts              — what orchestrators do, job types, economics, architecture
Get Started           — path decision matrix, quickstart per path
Setup                 — install, configure, connect, verify
Advanced              — AI pipelines, earnings optimisation, pool operation, scaling
Monitoring            — metrics, alerts, troubleshooting
Resources             — CLI flags, aiModels.json schema, community pools, contracts
```

---

### GATEWAYS
**Purpose:** Complete zero-to-hero for gateway operators  
**Audience:** Graduate developer, Provider, Protocol researcher  
**Must contain everything in the Gateway Operator information list above**

Structure that serves the journey:
```
Hub / Portal          — orientation, on-chain vs off-chain decision
Concepts              — gateway role, payment modes, clearinghouse architecture
Get Started           — path decision, quickstart per path
Setup                 — install, configure, connect, verify
Guides                — AI config, video config, dual config, discovery, middleware, payments
Advanced              — scaling, production, orchestrator selection
Resources             — CLI reference, AI API, Gateway API, contracts
```

---

### DEVELOPERS
**Purpose:** Complete zero-to-hero for application builders  
**Audience:** AI app developer, video app developer, OSS contributor  
**Must contain everything in the Developer information list above**

Structure that serves the journey:
```
Hub / Portal          — what you can build, which path
Concepts              — AI on Livepeer, video on Livepeer, developer stack
Get Started           — which quickstart? → AI quickstart, video quickstart
Build                 — per use case: AI inference, live video, VOD, ComfyStream, BYOC
Guides                — auth, production, monitoring, webhooks, access control
Opportunities         — grants, bounties, RFPs, contribution
Resources             — AI API reference, Gateway API, SDK reference, examples
```

---

### LP TOKEN (Delegators)
**Purpose:** Complete zero-to-hero for LPT holders  
**Audience:** LPT holders at all levels of crypto literacy  
**Must contain everything in the Delegator information list above**

Structure that serves the journey:
```
Hub / Portal          — what LPT is, what delegation does, what you'll achieve
Concepts              — LPT functions, delegation mechanics, earning model, tokenomics
Delegation            — bridge, choose, delegate, manage, undelegate
Governance            — how it works, how to vote, SPE system, treasury, proposals
Resources             — protocol parameters, exchanges, contracts, Explorer guide
```

---

### COMMUNITY
**Purpose:** Activate participation for all roles  
**Audience:** Multi-persona (newcomer, delegator, contributor, orchestrator, observer)  
**Must contain everything in the Community information list above**

Structure that serves the journey:
```
Hub / Portal          — who's here, where we gather, three paths in
This Community        — who's here (roles), community guidelines, Foundation overview
Shape the Network     — governance participation, workstreams
Get Involved          — ways to contribute, funded opportunities
Connect               — platforms and channels, events and calls, news
Ecosystem             — community tools, community guides
```

---

### SOLUTIONS
**Purpose:** Product documentation for each platform built on Livepeer  
**Audience:** Users and developers of specific Livepeer products  
**Must contain:**
- Per-product: overview, quickstart, reference
- Products: Daydream, Streamplace, Embody, Frameworks, Livepeer Studio
- Bridge from About: "what's been built on Livepeer" (currently missing)

---

### RESOURCES
**Purpose:** Cross-cutting reference and changelogs  
**Audience:** All — lookup destination  
**Must contain:**
- Changelogs (go-livepeer, SDKs, AI runner, subgraph, etc.)
- Site-wide glossary
- Documentation guide (for contributors)
- Help centre

---

## THE COMPLETE REQUIRED PAGE LIST

This is the minimum page set required for the site to be complete. Derived from the information requirements, not from existing files.

### HOME (required pages)
| Page | Type | Answers |
|---|---|---|
| Primer | Concept | What is Livepeer? (10-minute complete read) |
| Get Started | Landing | Which path is right for me? (persona routing) |
| Vision | Concept | Why Livepeer matters |
| Evolution | Concept | Where Livepeer came from, the AI pivot |
| Ecosystem | Concept | Who governs and builds Livepeer |
| Benefits | Concept | What the network delivers |
| Roadmap | Reference | What's next (stable, linked to canonical source) |
| Solutions showcase | Reference | What's been built |
| Mission Control | Landing | Navigation hub |

### ABOUT (required pages)
| Page | Type | Answers |
|---|---|---|
| Livepeer Overview | Concept | The ecosystem in depth |
| Mental Model | Concept | All layers: protocol → network → application |
| Core Concepts | Concept | Building blocks |
| All Actors | Concept | Every participant type — one comprehensive page |
| Job Lifecycle | Concept | Request → completion, state machine |
| Marketplace | Concept | Supply/demand, pricing discovery |
| Network Architecture | Concept | Full stack diagram |
| Interfaces | Reference | APIs, SDKs, CLI |
| Protocol Overview | Concept | What the protocol does |
| Core Mechanisms | Concept | Staking, delegation, rewards, inflation, slashing |
| LPT Token | Concept | Three functions, issuance |
| Economics | Concept | ETH fees + LPT inflation, money flow |
| Governance Model | Concept | Voting, LIPs, quorum |
| Treasury | Concept | Treasury, SPEs, Foundation, funding |
| Blockchain Contracts | Reference | All contract addresses + architecture |
| Technical Architecture | Concept | Contract architecture diagram |
| Design Philosophy | Concept | Why it's built this way |
| **Ecosystem / Products** | **Concept** | **What's been built — MISSING** |
| **Current Network State** | **Reference** | **Network metrics today — MISSING** |
| **Evaluating Livepeer** | **Guide** | **Should I engage? How to assess — MISSING** |
| **Participation Paths** | **Guide** | **How to get involved across all roles — MISSING** |
| FAQ | Reference | Common questions |
| Glossary | Reference | All terms |
| Whitepaper | Reference | Link/embed |
| Contract Addresses | Reference | Canonical list |
| Technical Roadmap | Reference | What's planned |

### GPU NODES (required pages)
| Page | Type | Answers |
|---|---|---|
| Orchestrator Portal | Landing | What orchestrators do, which path |
| Orchestrator Journey | Landing | Visual journey map per persona |
| Overview / What is an Orchestrator | Concept | Role in network, value proposition |
| Job Types | Concept | Transcoding vs AI types, hardware req per type |
| Architecture | Concept | How node fits in network |
| Economics | Concept/Econ | Revenue sources, cost structure, viability |
| Functions | Concept | What the node does technically |
| Path Decision / Setup Paths | Tutorial | Which path: solo / pool / AI-only |
| Quickstart (Solo Orchestrator) | Tutorial | Zero to first job, solo path |
| Join a Pool | Tutorial | Zero to first job, pool worker path |
| AI Quickstart (Realtime) | Tutorial | Zero to first AI inference job |
| AI Quickstart (Batch) | Tutorial | Zero to first batch AI job |
| Hardware Requirements | Reference | GPU, VRAM, OS, network per use case |
| **Install go-livepeer** | **How-To** | **Binary install, all platforms — MISSING** |
| Configure Orchestrator | How-To | All configuration flags for solo orchestrator |
| Connect to Arbitrum | How-To | Arbitrum node, ETH, setup |
| Publish Offerings | How-To | On-chain activation, marketplace registration |
| Verify Setup | How-To | End-to-end verification |
| Data Centre Setup | How-To | Large-scale / enterprise hardware setup |
| AI Pipelines | How-To | aiModels.json, container management, warm loading |
| Hosting Models (BYOC) | How-To | Custom model hosting |
| Pricing Strategy | How-To | Competitive pricing, price-per-unit guidance |
| Monitoring | How-To | Metrics, Grafana, alerts |
| Troubleshooting | How-To | Common failures and fixes |
| Reward Calling | How-To | What it is, automation |
| Run a Pool | How-To | Pool operator full guide |
| Remote Workers | How-To | BYOC remote worker setup |
| Earning Mechanics | Concept/Econ | Detailed earnings: fees, rewards, variables |
| Staking and Delegation | Concept | How delegation affects orchestrator |
| Governance for Operators | How-To | Operator-relevant voting |
| Payments | Reference | PM ticket mechanics, payment flows |
| FAQ + Troubleshooting | Reference | Top 20 questions + error messages |
| CLI Flags | Reference | Complete flag reference |
| aiModels.json Schema | Reference | Complete schema + valid values |
| Community Pools | Reference | Pool list + how to evaluate |
| Contract Addresses | Reference | Orchestrator-relevant contracts |

### GATEWAYS (required pages)
| Page | Type | Answers |
|---|---|---|
| Gateway Portal | Landing | What gateways do, which path |
| Overview / Role | Concept | Gateway role in network |
| **Payment Modes** | **Concept** | **On-chain vs off-chain — MISSING** |
| **Clearinghouse Architecture** | **Concept** | **Full clearinghouse explanation — MISSING** |
| Architecture | Concept | How gateway fits in network |
| Business Model | Concept/Econ | Gateway economics, fee model |
| Path Decision | Landing | Which setup: on-chain / off-chain / provider |
| Quickstart (Off-chain, Docker) | Tutorial | Zero to first job, off-chain |
| Quickstart (On-chain) | Tutorial | Zero to first job, on-chain |
| Prepare | How-To | Prerequisites and planning |
| Install | How-To | Binary / Docker install |
| Configure (AI) | How-To | AI gateway configuration |
| Configure (Video) | How-To | Video gateway configuration |
| Configure (Dual) | How-To | AI + video on same/separate nodes |
| Connect to Marketplace | How-To | Orchestrator discovery, connection |
| **Remote Signers** | **How-To** | **Setup, hosted vs self-hosted — MISSING** |
| Verify | How-To | End-to-end verification |
| Monitor | How-To | Health checks, metrics |
| Funding and ETH Management | How-To | ETH funding, balance management |
| Payments Guide | How-To | PM tickets, settlement flow |
| **Orchestrator Discovery (Off-chain)** | **How-To** | **How off-chain gets orchestrator list — MISSING** |
| Orchestrator Selection | How-To | Selection logic, filtering |
| Dual AI + Video Config | How-To | Same/separate node patterns |
| Middleware Integration | How-To | Auth, rate limiting, API keys |
| Scaling to Production | How-To | Production patterns |
| NaaP / Hosted Gateway | Concept | Using NaaP instead of self-hosting |
| Business Case | Concept/Econ | Provider economics |
| BYOC (CPU) | Tutorial | CPU-based custom pipeline |
| Go to Production | Tutorial | Production readiness checklist |
| FAQ + Troubleshooting | Reference | Top questions + errors |
| CLI Flags | Reference | Complete reference |
| AI API Reference | Reference | OpenAPI |
| Gateway API (CLI-HTTP) | Reference | CLI-HTTP reference |
| AI Worker Reference | Reference | AI worker API |
| Hardware Requirements | Reference | Gateway-role hardware |
| Contract Addresses | Reference | Gateway-relevant contracts |

### DEVELOPERS (required pages)
| Page | Type | Answers |
|---|---|---|
| Developer Portal | Landing | What you can build, which path |
| **AI on Livepeer** | **Concept** | **How AI inference works — needs rewrite** |
| Video on Livepeer | Concept | How video transcoding works |
| Developer Stack | Concept | SDKs, APIs, gateway layer |
| OSS Stack | Concept | Open source components |
| Workload Fit | Concept | AI vs video vs hybrid — use case matrix |
| **Setup Paths** | **Landing** | **Which quickstart? Decision tree — MISSING/THIN** |
| AI Quickstart | Tutorial | Zero to first AI inference call |
| Video Quickstart | Tutorial | Zero to first transcoded stream |
| ComfyStream Quickstart | Tutorial | Zero to first ComfyStream job |
| Build: AI Inference App | How-To | AI integration patterns |
| Build: Live Streaming | How-To | Livestream integration |
| Build: Video on Demand | How-To | VOD integration |
| Build: Custom Model (BYOC) | How-To | Custom model integration |
| Build: Run Your Own Gateway | How-To | Self-hosted gateway for developers |
| **Auth Guide** | **How-To** | **Authentication flows — MISSING/THIN** |
| **Production Checklist** | **How-To** | **Pre-launch requirements — INCOMPLETE** |
| Error Handling | How-To | Error codes, retry patterns |
| Webhooks | How-To | Async job handling |
| Access Control | How-To | Token-gated content etc. |
| Monitoring | How-To | App-level monitoring |
| Playback Guide | How-To | Video playback integration |
| Tutorial: AI Agent | Tutorial | AI agent with Livepeer |
| Tutorial: IPFS Video | Tutorial | IPFS + video integration |
| Grants and Funding | Reference | Active grants, RFPs, bounties |
| Contribution Guide | How-To | How to contribute code |
| Local Testnet | How-To | Local dev environment |
| AI API Reference | Reference | Complete OpenAPI |
| SDK Reference (JS) | Reference | JS SDK complete |
| SDK Reference (Python) | Reference | Python SDK complete |
| Glossary | Reference | Developer terms |
| Example Apps | Reference | Working example applications |
| Awesome Livepeer | Reference | Community-curated list |

### LP TOKEN / DELEGATORS (required pages)
| Page | Type | Answers |
|---|---|---|
| LP Token Portal | Landing | What LPT is, what you'll achieve |
| LPT Overview | Concept | Three functions, role in network |
| Delegation Mechanics | Concept | How staking works |
| Earning Model | Concept/Econ | ETH fees + LPT inflation, variables |
| Tokenomics | Concept | Supply, inflation, treasury allocation |
| Bridge LPT to Arbitrum | Tutorial | Step-by-step L1→L2 bridge |
| Choose an Orchestrator | How-To | Evaluation criteria, Explorer walkthrough |
| Delegate | Tutorial | On-chain delegation steps |
| Manage Your Position | How-To | Monitor, claim, change, undelegate |
| Delegation Economics | Concept/Econ | Realistic earnings calculation |
| Governance Overview | Concept | How governance works |
| Governance Model | Concept | Voting, quorum, LIPs |
| How to Vote | Tutorial | Step-by-step voting |
| Treasury Overview | Concept | Treasury mechanics |
| SPE System | Concept | What SPEs are, how they're funded |
| Submit a Proposal | Tutorial | SPE proposal process |
| Glossary | Reference | Delegator terms |
| LPT Exchanges | Reference | Where to acquire LPT |
| Protocol Parameters | Reference | Round length, active set, inflation |
| Contract Addresses | Reference | Delegator-relevant contracts |
| Useful Videos and Blogs | Reference | Community learning resources |

### COMMUNITY (required pages)
*14 pages — canonical IA from community-tab-05-final-ia-and-pages.md is correct*

| Page | Type | Status |
|---|---|---|
| Community Portal | Landing | Needs Foundation info update |
| Community FAQ | FAQ | Needs Foundation info current |
| Who's Here | Concept | Needs Foundation current |
| Community Guidelines | Reference | Write/verify |
| Governance Participation | Concept | Route to LP Token for mechanics |
| Workstreams | Reference | Route to live Forum source |
| Ways to Contribute | Landing | Write per taxonomy |
| Opportunities | Reference | Route to live source for RFPs |
| Channels / Platform Map | Reference | Complete platform map |
| Events and Calls | Reference | Schedule + calendar |
| News and Updates | Reference | Publishing surfaces map |
| Community Tools | Reference | Curated cross-role tools |
| Community Guides | Reference | Curated by role |

### SOLUTIONS (required pages)
Per-product pattern: Overview + Quickstart + Reference  
Products: Daydream, Streamplace, Embody, Frameworks, Livepeer Studio  
Plus: Bridge page from About ("what's been built on Livepeer")

### RESOURCES (required pages)
| Page | Status |
|---|---|
| Changelogs (20 pages) | Keep current |
| Site-wide Glossary | Good |
| Documentation Guide (15 pages) | Good |
| Help Centre | Good |

---

## GAPS: REQUIRED PAGES THAT DON'T EXIST YET

Pages that must exist for the site to pass the success criteria — currently missing or non-functional:

### CRITICAL (journey-blocking — reader cannot complete zero-to-hero without these)

| Page | Tab | Why critical |
|---|---|---|
| Install go-livepeer | GPU Nodes | First technical step for every operator — currently stub |
| Join a Pool | GPU Nodes | Only path for Persona B (Pool Worker) — currently stub |
| Payment Modes (on-chain vs off-chain) | Gateways | Gateway operators cannot make first decision without this |
| Remote Signers | Gateways | On-chain gateway path blocked without this |
| Clearinghouse Architecture | Gateways | Provider path and AI developer transition path both blocked |
| Orchestrator Discovery (Off-chain) | Gateways | Off-chain gateway gets no jobs without this |
| AI on Livepeer (rewrite) | Developers | Current version pre-dates NaaP/clearinghouse model |
| Setup Paths (decision tree) | Developers | AI developers cannot choose their quickstart |
| Job Types (rewrite) | GPU Nodes | Outdated — pre-AI subnet, missing current pipeline types |
| FAQ / Troubleshooting (expand) | GPU Nodes | Forum-confirmed: most common questions unanswered |

### HIGH (tab is degraded without these)

| Page | Tab | Why high |
|---|---|---|
| All Actors (comprehensive) | About | Evaluators get incomplete picture; 4 sub-stubs currently |
| Ecosystem / Products | About | No page answers "what's been built on Livepeer?" |
| Evaluating Livepeer | About | No structured evaluator path |
| Participation Paths | About | No cross-role participation guide |
| Auth Guide | Developers | Production integration blocked |
| Production Checklist | Developers | Ship-readiness blocked |
| Dual AI + Video Config | Gateways | Common operator question unanswered |
| Competitive Pricing Guide | GPU Nodes | Discord-confirmed pain point |
| Core Mechanisms (complete) | About | Marked unfinished in existing page |

### MEDIUM (content exists but needs update)

| Page | Tab | Why medium |
|---|---|---|
| Governance Processes | Delegators | GovWorks Feb 2025 update — verify |
| Treasury Proposals | Delegators | Current process — verify |
| Foundation references | Community | June 2025 Foundation launch — update everywhere |
| Workstreams | Community | Volatile content — route to live source |
| Tokenomics | Delegators | Post-AI subnet numbers — verify |
| Technical Roadmap | About | Verify currency |

---

## WHAT MUST BE REMOVED FROM NAV (creates false journeys)

These appear in navigation but have no content — they break the reader's journey:

| Page | Tab | Action |
|---|---|---|
| get-started/ai-pipelines.mdx | Home | Remove from nav (Coming Soon stub) |
| get-started/build-on-livepeer.mdx | Home | Remove from nav |
| get-started/stream-video.mdx | Home | Remove from nav |
| get-started/use-livepeer.mdx | Home | Remove from nav |
| about/guides/* (entire section) | About | Remove from nav until populated |
| about/knowledge-hub/contributor-orientation.mdx | About | Remove or write |
| about/knowledge-hub/evaluating-livepeer.mdx | About | Remove or write (HIGH priority) |
| about/network/livepeer-actors/* (4 sub-stubs) | About | Remove from nav, merge into actors.mdx |

---

## COMPLETION SCORECARD

| Tab | Required pages | Estimated complete | Critical gaps | Evaluator: ready? |
|---|---|---|---|---|
| Home | ~9 | ~75% | 4 nav stubs, roadmap | No — stubs visible |
| About | ~25 | ~60% | Actors, ecosystem/products, evaluator path, guides/ | No — major gaps |
| GPU Nodes | ~35 | ~65% | Install, pool path, job types, FAQ/troubleshooting | No — journey breaks |
| Gateways | ~40 | ~65% | Payment modes, remote signers, clearinghouse, discovery | No — first decision blocked |
| Developers | ~35 | ~70% | AI concept rewrite, setup paths, auth, production | No — AI journey degraded |
| LP Token | ~20 | ~80% | Governance/treasury currency | Near — verify updates |
| Community | ~14 | ~75% | Foundation info, workstreams routing | Near — update needed |
| Solutions | ~110 | ~85% | Bridge from About, daydream/embody thin | Near |
| Resources | ~53 | ~90% | Changelog currency | Yes — mostly complete |
