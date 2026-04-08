# Codex Content Briefs — P1 Blockers

> One brief per page. Each brief is a complete Codex agent task.
> Base branch: `docs-v2`. One worktree per brief. One PR per brief.
> SKIP_VERIFICATION=1 for pre-existing drift outside task scope.

---

## BRIEF P1-01 — `about/network/actors.mdx`

**Type:** Rewrite + merge  
**Branch:** `content/about-actors-comprehensive`  
**Depends on:** Nothing  
**Priority:** Critical — evaluator zero-to-hero blocked

### Step 0 — Verify before writing
Read these files first. Do not proceed without completing this step:
- `v2/about/network/actors.mdx` (current state — ~5KB)
- `v2/about/network/livepeer-actors/orchestrators.mdx`
- `v2/about/network/livepeer-actors/gateways.mdx`
- `v2/about/network/livepeer-actors/delegators.mdx`
- `v2/about/network/livepeer-actors/end-users.mdx`
- `v2/about/concepts/mental-model.mdx` (GOLD — match this register)

### Task
Rewrite `actors.mdx` as a single comprehensive page. Merge all content from the 4 sub-stubs. Remove sub-stubs from docs.json. Do not create a new folder structure.

### Page Brief
```
pageType:          concept
audience:          evaluator (researcher, investor, developer assessing protocol)
reader question:   Who are the participants in the Livepeer network and what does each one do?
reader state:      Has read overview/mental-model — understands there is a protocol and network. 
                   Now building a complete mental model of participants.
page promise:      After reading, the reader can explain all four actor types, their roles, 
                   incentives, and how they interact.
explicit scope:    Role definition, incentive model, interaction patterns for all 4 actors.
explicit out of scope: How to SET UP as an actor (that's in the role tabs). 
                   Protocol mechanics in depth (that's in protocol/*).
primary sources:   go-livepeer codebase, existing actors.mdx, mental-model.mdx
next action:       Links to role-specific tabs for operational depth
```

### Required Sections
1. **Opening** — What the network needs from each type of participant and why the four-actor model works
2. **Orchestrators** — Role: provide compute. Incentive: ETH fees + LPT rewards. Requirement: LPT stake. What they process.
3. **Gateways** — Role: route jobs. Incentive: ETH fee spread. Requirement: ETH funding. Two modes (on-chain, off-chain).
4. **Delegators** — Role: stake LPT to secure active set. Incentive: share of orchestrator rewards. Requirement: LPT.
5. **End Users / Developers** — Role: consume the network via Gateway APIs. No direct protocol interaction.
6. **How Actors Interact** — Simple flow: Developer → Gateway → Orchestrator, with Delegators securing the active set
7. **For Deeper Depth** — Links per actor to role tabs

### Output
- `v2/about/network/actors.mdx` — rewritten, ~15KB
- `v2/about/network/livepeer-actors/*.mdx` — all 4 files: add `redirect` frontmatter pointing to `actors.mdx` or delete if not feasible without nav breakage
- `docs.json` — remove sub-actor pages from nav, keep actors.mdx

### Forbidden
- Do not add setup instructions
- Do not add economics calculations — link to protocol/economics
- Do not rewrite any other files

---

## BRIEF P1-02 — `orchestrators/get-started/join-a-pool.mdx`

**Type:** Write from scratch  
**Branch:** `content/orc-join-a-pool`  
**Depends on:** Nothing  
**Priority:** Critical — Persona B (Pool Worker) journey blocked

### Step 0 — Verify before writing
Read these files first:
- `v2/orchestrators/get-started/join-a-pool.mdx` (current state — stub)
- `workspace/plan/active/_MY_PROCESS/` → gpu-nodes-ia-planning.md (Persona B profile)
- `v2/orchestrators/concepts/overview.mdx` (for correct solo-vs-pool framing)

### Page Brief
```
pageType:          tutorial
audience:          orchestrator — evaluating (Persona B: Pool Worker)
reader question:   How do I contribute GPU compute to Livepeer through a pool without 
                   running a full solo orchestrator?
reader state:      Has 1-2 consumer GPUs. Doesn't want to manage LPT staking or on-chain ops.
                   Found Livepeer through Video Miner, Titan Node, or community Discord.
page promise:      After reading, the reader can install go-livepeer as a worker node 
                   and successfully connect to a pool.
explicit scope:    Pool worker setup path only. Binary install, transcoder-only mode, 
                   connecting to an existing pool orchestrator.
explicit out of scope: Solo orchestrator setup (→ quickstart/). Running your own pool (→ advanced/run-a-pool.mdx). 
                   LPT staking (→ delegators tab).
primary sources:   go-livepeer README, community pool documentation (Video Miner, Titan Node), 
                   go-livepeer GitHub issues
next action:       orchestrators/guides/monitoring-and-tooling/ (once running)
```

### Required Sections
1. **What pool operation means** — 1 paragraph: pool worker vs solo orchestrator. No LPT needed. Pool handles on-chain. You provide compute.
2. **Prerequisites** — Hardware minimum (GPU with 4GB+ VRAM), OS, dependencies
3. **Step 1: Install go-livepeer** — Link to `setup/install-go-livepeer.mdx`. Do not repeat content.
4. **Step 2: Configure as transcoder/worker** — The exact flags for worker-only mode (not full orchestrator mode)
5. **Step 3: Connect to a pool** — How to point your worker at a pool orchestrator endpoint. Reference community pools without endorsing any.
6. **Step 4: Verify** — How to confirm the worker is accepting jobs
7. **Community pools** — Link to `resources/community-pools.mdx` for list of pools

### Tone
Persona B is not a devops professional. Write for someone comfortable with a terminal but not with Kubernetes or Docker. Concrete commands. No jargon without definition.

### Output
- `v2/orchestrators/get-started/join-a-pool.mdx` — written, ~8KB

---

## BRIEF P1-03 — `orchestrators/setup/install-go-livepeer.mdx`

**Type:** Write from scratch  
**Branch:** `content/orc-install-go-livepeer`  
**Depends on:** Nothing  
**Priority:** Critical — every operator persona blocked on first step

### Step 0 — Verify before writing
Read:
- `v2/orchestrators/setup/install-go-livepeer.mdx` (current state — confirm stub)
- go-livepeer GitHub releases page (get current version number)
- go-livepeer README install section

### Page Brief
```
pageType:          how-to
audience:          orchestrator — activating (all operator personas)
reader question:   How do I install go-livepeer on my machine?
reader state:      Has decided to run an orchestrator or worker node. 
                   Has hardware ready. First technical step.
page promise:      After reading, the reader has go-livepeer installed and can run 
                   the binary from the command line.
explicit scope:    Binary download + install for Linux (primary), macOS, Docker.
explicit out of scope: Configuration (→ setup/orch-config.mdx). 
                   First run (→ quickstart/). 
                   Hardware selection (→ setup/hardware-requirements.mdx).
primary sources:   go-livepeer GitHub releases, README
next action:       orchestrators/setup/orch-config.mdx
```

### Required Sections
1. **Prerequisites** — OS requirements, NVIDIA driver version, CUDA version, network ports needed
2. **Option A: Download binary (recommended)** — wget/curl the latest release binary, chmod, verify
3. **Option B: Docker** — docker pull, verify image
4. **Option C: Build from source** — Go version, clone, make. Note: advanced users only.
5. **Verify install** — Run `livepeer --version`, expected output
6. **Troubleshooting** — CUDA not found, permission denied, wrong architecture — 3 most common first-install failures

### Output
- `v2/orchestrators/setup/install-go-livepeer.mdx` — written, ~10KB with code blocks

---

## BRIEF P1-04 — `gateways/concepts/payment-modes.mdx`

**Type:** Write from scratch  
**Branch:** `content/gw-payment-modes`  
**Depends on:** Nothing  
**Priority:** Critical — every gateway persona blocked on first decision

### Step 0 — Verify before writing
Read:
- `v2/gateways/concepts/` — all 4 current pages (understand what's there)
- `Remote_signers.md` (project file) — remote signer architecture
- `local-gateways-discord.txt` (project file) — Discord discussion on on-chain vs off-chain
- `workspace/plan/active/_MY_PROCESS/` → gateways-ia-planning.md (Persona A pain points)

### Page Brief
```
pageType:          concept
audience:          gateway-operator — evaluating
reader question:   What is the difference between an on-chain and off-chain gateway, 
                   and which one should I run?
reader state:      Has decided to run a gateway. Now deciding on payment mode before 
                   touching any configuration.
page promise:      After reading, the reader knows which payment mode fits their use case 
                   and why, and knows their next setup step.
explicit scope:    On-chain vs off-chain distinction, remote signer decision, 
                   clearinghouse concept (brief intro), use-case matrix.
explicit out of scope: How to SET UP remote signers (→ setup/remote-signers.mdx).
                   Full clearinghouse architecture (→ guides/payments-and-pricing/clearinghouse.mdx).
                   Pricing configuration (→ guides/payments-and-pricing/).
primary sources:   go-livepeer PRs #3791/#3822, local-gateways-discord.txt, Remote_signers.md
next action:       Based on decision: quickstart/ (off-chain) or setup/remote-signers.mdx (on-chain)
```

### Required Sections
1. **Two modes** — What on-chain and off-chain mean. The core difference: ETH key management and probabilistic micropayment (PM) ticket settlement.
2. **On-chain gateway** — Who it's for. Requirements: funded ETH key, PM ticket management. When to use: full orchestrator control, running a public gateway service.
3. **Off-chain gateway** — Who it's for. Requirements: remote signer or clearinghouse. When to use: most AI workloads, app-embedded gateways, getting started.
4. **Remote signer** — What it is. Why you'd use one. The hosted remote signer option. Link to remote-signers.mdx for setup.
5. **Clearinghouse** — One paragraph intro: remote signer + auth + accounting + discovery in one managed service. Link to full architecture page.
6. **Decision matrix** — Table: Use case → Recommended mode. Rows: AI inference app, Video transcoding service, Public gateway, Testing/dev, Production at scale.
7. **Next steps** — Two paths: off-chain quickstart, on-chain setup.

### Tone
Persona A is a developer who understands Docker and REST APIs but is new to crypto payment rails. Define PM tickets in one sentence. Don't assume familiarity with Ethereum transaction flows.

### Output
- `v2/gateways/concepts/payment-modes.mdx` — written, ~8KB

---

## BRIEF P1-05 — `gateways/setup/remote-signers.mdx`

**Type:** Write from scratch  
**Branch:** `content/gw-remote-signers`  
**Depends on:** P1-04 merged (or write in parallel, links can be stubs)  
**Priority:** Critical — new Q4 2025 architecture undocumented

### Step 0 — Verify before writing
Read:
- `Remote_signers.md` (project file) — full design doc
- `local-gateways-discord.txt` — Discord discussion on remote signer hosted service
- go-livepeer PRs #3791 and #3822 — implementation details
- `v2/gateways/setup/` — all current setup pages (understand what exists)

### Page Brief
```
pageType:          how-to
audience:          gateway-operator — activating (on-chain mode)
reader question:   How do I set up a remote signer for my gateway?
reader state:      Has decided to run an on-chain gateway. Knows they need a remote signer. 
                   First time configuring key separation.
page promise:      After reading, the reader has a working remote signer configured 
                   and their gateway is using it.
explicit scope:    Remote signer setup — self-hosted and hosted options. 
                   Gateway configuration to use the remote signer.
explicit out of scope: What a remote signer is and why (→ concepts/payment-modes.mdx).
                   Clearinghouse full architecture (→ guides/payments-and-pricing/clearinghouse.mdx).
primary sources:   Remote_signers.md, PRs #3791/#3822, hosted signer at signer.eliteencoder.net
next action:       gateways/setup/configure.mdx
```

### Required Sections
1. **What this page covers** — One sentence: configure a remote signer for an on-chain gateway.
2. **Prerequisites** — Ethereum wallet with funds, go-livepeer installed, decision to use on-chain mode
3. **Option A: Use a hosted remote signer** — Reference the community-hosted signer (signer.eliteencoder.net from Discord). Configuration flags to point gateway at external signer.
4. **Option B: Self-host the remote signer** — Docker setup for the remote signer service. Required env vars. Startup verification.
5. **Configure your gateway to use it** — The specific go-livepeer flags: `-remoteSignerAddr`, any auth configuration.
6. **Verify** — How to confirm the gateway is signing via the remote signer (not direct key)
7. **Security considerations** — Key custody, network exposure of the signer endpoint. Brief, factual.

### Output
- `v2/gateways/setup/remote-signers.mdx` — written, ~10KB

---

## BRIEF P1-06 — `gateways/guides/payments-and-pricing/clearinghouse.mdx`

**Type:** Write from scratch  
**Branch:** `content/gw-clearinghouse`  
**Depends on:** P1-04, P1-05  
**Priority:** Critical — completely undocumented; confirmed Discord confusion

### Step 0 — Verify before writing
Read:
- `local-gateways-discord.txt` (project file) — full Discord discussion
- `Remote_signers.md` (project file)
- `v2/gateways/guides/payments-and-pricing/` — all current pages

### Page Brief
```
pageType:          concept
audience:          gateway-operator — operating (Persona B: Provider)
reader question:   What is the clearinghouse and how does it work as a managed 
                   gateway infrastructure layer?
reader state:      Running a gateway or evaluating whether to build a gateway service. 
                   Has heard "clearinghouse" in Discord. No documentation exists.
page promise:      After reading, the reader understands the clearinghouse architecture 
                   and can evaluate whether to build or use one.
explicit scope:    Clearinghouse components, how they fit together, reference implementations.
explicit out of scope: Remote signer setup (→ setup/remote-signers.mdx).
                   NaaP-specific implementation (→ NaaP product docs if they exist).
primary sources:   local-gateways-discord.txt, Remote_signers.md, NaaP dashboard repo
next action:       guides/advanced-operations/ for production gateway scaling
```

### Required Sections
1. **What the clearinghouse is** — Component definition: remote signer + user management/auth + accounting + discovery + billing. Quote the Discord definition accurately.
2. **Why it exists** — The problem it solves: app developers shouldn't think about remote signers, PM tickets, or orchestrator lists. "Give the SDK an API key and go."
3. **Components** — Each component explained in 2-3 sentences: Remote Signer, Auth/API key management, Accounting, Orchestrator discovery, Billing layer.
4. **How they fit together** — Diagram or numbered flow: request → API key auth → clearinghouse → remote signer → payment → orchestrator
5. **Reference implementations** — NaaP (Network as a Platform) is building this. What it offers. Link if docs exist.
6. **Build vs use** — When to build your own clearinghouse stack vs use NaaP. One table or clear criteria.

### Output
- `v2/gateways/guides/payments-and-pricing/clearinghouse.mdx` — written, ~12KB

---

## BRIEF P1-07 — `gateways/guides/advanced-operations/orchestrator-discovery-offchain.mdx`

**Type:** Write from scratch  
**Branch:** `content/gw-offchain-discovery`  
**Depends on:** P1-04  
**Priority:** Critical — confirmed undocumented, Discord-confirmed pain point

### Step 0 — Verify before writing
Read:
- `local-gateways-discord.txt` — full discussion on off-chain discovery
- j0sh Python gateway examples: github.com/j0sh/livepeer-python-gateway/tree/main/examples
- `v2/gateways/guides/advanced-operations/` — current pages

### Page Brief
```
pageType:          how-to
audience:          gateway-operator — operating (off-chain gateway)
reader question:   How does my off-chain gateway get a list of orchestrators to work with?
reader state:      Running an off-chain gateway. Jobs not being processed. 
                   Realizes the gateway needs orchestrators but doesn't know how it discovers them.
page promise:      After reading, the reader's off-chain gateway is connected to orchestrators 
                   and processing jobs.
explicit scope:    Off-chain orchestrator discovery only. 
                   On-chain registry, custom discovery endpoints, Python gateway examples.
explicit out of scope: On-chain gateway orchestrator discovery (that's automatic via on-chain registry).
                   Orchestrator selection logic (→ guides/advanced-operations/orchestrator-selection.mdx).
primary sources:   local-gateways-discord.txt, j0sh livepeer-python-gateway examples, 
                   eliteprox go-livepeer fork (orchestrator list endpoint)
next action:       guides/advanced-operations/orchestrator-selection.mdx
```

### Required Sections
1. **The discovery problem** — Off-chain gateways don't use on-chain registry by default. They need an orchestrator list from somewhere.
2. **Option A: On-chain list endpoint** — Using the go-livepeer endpoint to get the authoritative on-chain orchestrator list. Configuration.
3. **Option B: Static list** — Hardcoded orchestrator addresses in CLI flags. When to use. Limitations.
4. **Option C: Custom discovery endpoint** — Building or using an external endpoint. The Python gateway example approach. How to configure go-livepeer to call it.
5. **Python gateway examples** — Reference j0sh's livepeer-python-gateway examples for discovery patterns. Link to repo.
6. **Recommended approach** — For production: on-chain list endpoint or clearinghouse-provided discovery. For testing: static list.

### Output
- `v2/gateways/guides/advanced-operations/orchestrator-discovery-offchain.mdx` — written, ~8KB

---

## BRIEF P1-08 — `developers/concepts/ai-on-livepeer.mdx`

**Type:** Rewrite  
**Branch:** `content/dev-ai-on-livepeer`  
**Depends on:** Nothing  
**Priority:** Critical — AI developer first concept page, must be accurate

### Step 0 — Verify before writing
Read:
- `v2/developers/concepts/ai-on-livepeer.mdx` (current state)
- `local-gateways-discord.txt` — NaaP, clearinghouse, AI pipeline discussion
- `ai-workloads-overview.mdx` (project file)
- `ai-workloads-sources.md` (project file)

### Page Brief
```
pageType:          concept
audience:          developer — evaluating
reader question:   How does AI inference work on the Livepeer network?
reader state:      ML engineer or app developer. Came from Daydream or AI blog post. 
                   Knows what AI inference is. Doesn't know how Livepeer delivers it.
page promise:      After reading, the reader understands the Livepeer AI network architecture 
                   and knows which entry point fits their use case.
explicit scope:    AI network architecture: pipelines, gateways, orchestrators, 
                   payment model, NaaP/clearinghouse entry point, self-hosted path.
explicit out of scope: Video transcoding (→ concepts/video.mdx).
                   SDK implementation (→ get-started/).
                   Gateway operation (→ Gateways tab).
primary sources:   Livepeer AI subnet blog post (Mirror.xyz), ai-workloads-sources.md, 
                   NaaP dashboard, local-gateways-discord.txt
next action:       developers/get-started/setup-paths.mdx
```

### Required Sections
1. **How AI works on Livepeer** — Pipelines: text-to-image, image-to-video, LLM inference, audio. Gateways route requests. Orchestrators with GPU capacity execute. ETH micropayment settlement.
2. **The two entry points** — Hosted (NaaP/Daydream API: API key → go): for apps. Self-hosted gateway: for cost control at scale. Clear which to use when.
3. **The clearinghouse model** — For hosted: the clearinghouse abstracts payment, orchestrator selection, auth. Developer gets an API key. Nothing else.
4. **Available pipelines** — Current supported pipeline types. Model categories. Link to resources for model list.
5. **Realtime vs batch** — The two AI job modes. Which pipelines support which. When to use each. (This is the pre-decision the reader needs before choosing a quickstart.)
6. **Next step** — Decision: hosted API → get an API key. Self-hosted → setup-paths.mdx.

### Output
- `v2/developers/concepts/ai-on-livepeer.mdx` — rewritten, ~10KB

---

## BRIEF P1-09 — `orchestrators/resources/faq.mdx`

**Type:** Expand (major)  
**Branch:** `content/orc-faq-troubleshooting`  
**Depends on:** P1-01, P1-03 (to have accurate install/config detail to reference)  
**Priority:** Critical — confirmed journey blocker

### Step 0 — Verify before writing
Read:
- `v2/orchestrators/resources/faq.mdx` (current state — confirm what exists)
- `workspace/plan/active/_MY_PROCESS/` → gpu-nodes-ia-planning.md (all persona pain points)
- Forum and Discord intelligence: look for recurrent "Orchestrator not available", port forwarding, LPT stake questions

### Required Q&A Coverage (minimum)

**Evaluation questions:**
- How much LPT do I need to become an active orchestrator?
- What's the difference between a solo orchestrator and joining a pool?
- How much can I earn?
- What hardware do I need minimum?

**Setup / activation questions:**
- Why am I getting "Orchestrator not available" error?
- How do I configure port forwarding for my serviceAddr?
- What ports does go-livepeer need open?
- How long until I start receiving jobs?

**Operational questions:**
- How do I check if my orchestrator is receiving jobs?
- How do I set a competitive price per pixel?
- Why am I not getting any transcoding work?
- How do I know if I'm in the active set?

**AI-specific questions:**
- What VRAM minimum do I need for AI pipelines?
- How do I add AI pipelines to an existing transcoding node?
- What is aiModels.json and where does it go?

### Output
- `v2/orchestrators/resources/faq.mdx` — expanded, ~12KB minimum, Q&A format

---

## BRIEF P1-10 — `orchestrators/concepts/job-types.mdx`

**Type:** Rewrite  
**Branch:** `content/orc-job-types`  
**Depends on:** Nothing  
**Priority:** Critical — AI Native persona (E) blocked; current content outdated

### Step 0 — Verify before writing
Read:
- `v2/orchestrators/concepts/job-types.mdx` (current state)
- `ai-workloads-overview.mdx` (project file)
- `ai-workloads-sources.md` (project file)
- Current go-livepeer AI pipeline documentation in repo

### Page Brief
```
pageType:          concept
audience:          orchestrator — evaluating (Personas C + E)
reader question:   What types of jobs can my orchestrator process and what are the 
                   hardware requirements for each?
reader state:      Has hardware. Deciding whether to add AI pipelines or stay transcoding-only.
page promise:      After reading, the reader knows exactly which job types their hardware 
                   supports and how to enable each.
explicit scope:    Job types (transcoding, AI pipeline categories), hardware requirements 
                   per type, what "realtime" vs "batch" means, pipeline list.
explicit out of scope: How to configure aiModels.json (→ advanced/ai-pipelines.mdx).
                   Pricing for each job type (→ advanced/earnings.mdx).
primary sources:   go-livepeer AI subnet docs, ai-workloads-sources.md, 
                   current AI pipeline list in go-livepeer repo
next action:       orchestrators/advanced/ai-pipelines.mdx
```

### Required Sections
1. **Job type overview** — Two categories: transcoding (video) and AI inference. Can run both on same node.
2. **Video transcoding** — What it is. VRAM requirement (low). Job flow. Performance variables.
3. **AI inference — Realtime** — What realtime means (streaming, low-latency). Supported pipelines. VRAM minimums per pipeline.
4. **AI inference — Batch** — What batch means (non-streaming). Supported pipelines. When gateways use batch.
5. **Pipeline catalogue** — Current supported pipelines: text-to-image, image-to-image, image-to-video, audio-to-text, LLM, etc. With VRAM minimum and GPU class recommendation per pipeline.
6. **Dual workload** — Running transcoding + AI on the same GPU. Capacity allocation. Trade-offs.
7. **Next** — Enable AI pipelines → advanced/ai-pipelines.mdx

### Output
- `v2/orchestrators/concepts/job-types.mdx` — rewritten, ~8KB

---

## EXECUTION ORDER

Run P1 briefs in this order to minimise dependency blocking:

```
Round 1 (no dependencies):
  P1-01  about/network/actors.mdx
  P1-03  orchestrators/setup/install-go-livepeer.mdx
  P1-04  gateways/concepts/payment-modes.mdx
  P1-08  developers/concepts/ai-on-livepeer.mdx
  P1-10  orchestrators/concepts/job-types.mdx

Round 2 (after Round 1 PRs open for review):
  P1-02  orchestrators/get-started/join-a-pool.mdx
  P1-07  gateways/guides/advanced-operations/orchestrator-discovery-offchain.mdx

Round 3 (after P1-04 merged):
  P1-05  gateways/setup/remote-signers.mdx
  P1-09  orchestrators/resources/faq.mdx

Round 4 (after P1-04, P1-05 merged):
  P1-06  gateways/guides/payments-and-pricing/clearinghouse.mdx
```

Each brief = one Codex worktree = one feature branch = one PR. Do not combine briefs.
