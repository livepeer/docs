# Livepeer Docs v2 — Complete Site Map

> Every tab, what it owns, what questions it answers, and where tabs overlap.
> 653 published pages across 9 tabs.

---

## TAB OVERVIEW

| Tab | Pages | Job | Register |
|---|---|---|---|
| **Home** | 19 | "What is Livepeer and why should I care?" | Narrative, value-prop, routing |
| **About** | 34 | "How does Livepeer actually work — the full ecosystem in depth?" | Technical, architectural, ecosystem-complete |
| **Orchestrators** | 82 | "How do I run a GPU node and earn?" | Operational, hardware-specific, numbers-driven |
| **Gateways** | 133 | "How do I run gateway infrastructure?" | Operational, infrastructure, peer-to-peer |
| **Developers** | 51 | "How do I build on Livepeer?" | Code-first, API-led, implementation |
| **Delegators** | 25 | "How do I stake LPT and participate?" | Financial, governance, decision-support |
| **Community** | 18 | "How do I get involved in the ecosystem?" | Accessible, welcoming, participation paths |
| **Solutions** | 109 | "What products exist and how do I use them?" | Product-focused, per-product docs |
| **Resources** | 53 | "Where do I find reference material?" | Cross-cutting lookup, changelogs, docs guide |

---

## HOME (19 pages)

**Job**: Introduce Livepeer. Tell the story. Route readers to the right tab.

**Sections**:
```
about-livepeer/          THE STORY — vision, evolution, ecosystem, benefits, roadmap
  vision.mdx             (8.8KB) Livepeer Story — mission, origins
  evolution.mdx          (7.9KB) Livepeer Evolution — history, AI pivot
  ecosystem.mdx          (25.7KB) Organisational Structure — Foundation, SPEs, community
  benefits.mdx           (9.9KB) The Livepeer Advantage — why it matters
  roadmap.mdx            (1.8KB) What's Next — STUB

get-started.mdx          (7.5KB) Persona routing — "I am a..." cards
get-started/             QUICKSTART STUBS — all "Coming Soon"
  ai-pipelines.mdx       (484B) STUB
  build-on-livepeer.mdx  (448B) STUB
  stream-video.mdx       (480B) STUB
  use-livepeer.mdx       (427B) STUB

mission-control.mdx      (6.3KB) 9-card routing hub
primer.mdx               (10.6KB) 10-minute "what is Livepeer"
trending.mdx             (6.4KB) Current activity — stale risk

solutions/               SHOWCASE — what's been built
  applications.mdx       (3.7KB)
  landscape.mdx          (1.2KB)
  showcase.mdx           (2.4KB)
  verticals.mdx          (13KB)
```

**Questions Home answers:**
1. What is Livepeer? (primer — 10 min overview)
2. Why does Livepeer matter? (benefits)
3. Where did Livepeer come from? (evolution — history + AI pivot)
4. Who runs Livepeer? (ecosystem — Foundation, SPEs, org structure)
5. What's the vision? (vision)
6. What's been built on Livepeer? (solutions/*)
7. Where do I go next? (get-started, mission-control — routing)

---

## ABOUT (34 pages)

**Job**: The DEEP technical and ecosystem reference. How the whole thing works.

**Sections**:
```
concepts/                WHAT IS LIVEPEER — the complete picture
  livepeer-overview.mdx  (10.7KB) The ecosystem in depth
  mental-model.mdx       (21KB) 10-layer stack — BEST PAGE IN ABOUT
  core-concepts.mdx      (9.7KB) Core building blocks

protocol/                HOW THE PROTOCOL WORKS — on-chain layer
  overview.mdx           (14.5KB) Protocol scope and boundaries
  core-mechanisms.mdx    (25KB) Staking, delegation, rewards, inflation, slashing — GOOD BUT UNFINISHED
  livepeer-token.mdx     (13.3KB) LPT — 3 functions, issuance
  economics.mdx          (10.4KB) ETH fees + LPT inflation
  governance-model.mdx   (15.8KB) Voting, LIPs, vote detachment
  treasury.mdx           (16.7KB) Treasury, SPEs, Foundation, funding
  blockchain-contracts.mdx (59KB) Contract addresses + architecture — GOOD
  technical-architecture.mdx (9.9KB) Contract architecture diagram
  design-philosophy.mdx  (11.4KB) Why it's designed this way

network/                 HOW THE NETWORK WORKS — execution layer
  overview.mdx           (6.8KB) Network = execution layer
  actors.mdx             (5KB) All actors — THIN, needs to be comprehensive flat page
  livepeer-actors/       Per-actor stubs — SHOULD MERGE INTO actors.mdx
    orchestrators.mdx    (1.7KB) STUB
    gateways.mdx         (1.5KB) STUB
    delegators.mdx       (1.6KB) STUB
    end-users.mdx        (1.5KB) STUB
  job-lifecycle.mdx      (10.4KB) State machine — DONE
  marketplace.mdx        (6.5KB) Supply/demand mechanics
  technical-architecture.mdx (6.2KB) Full stack diagram
  interfaces.mdx         (5.9KB) APIs, SDKs, CLI

guides/                  CURRENTLY EMPTY — needs populating
  (planned: evaluating-livepeer, contributor-orientation, ecosystem-overview,
   current-state, participation-paths)

resources/               LOOKUP
  faq.mdx                (2.9KB) THIN
  glossary.mdx           (51KB) DONE
  knowledge-hub/
    contributor-orientation.mdx (1.5KB) STUB
    evaluating-livepeer.mdx (1.5KB) STUB
    gateways-vs-orchestrators.mdx (2.7KB) THIN
    livepeer-whitepaper.mdx (4KB) DONE
  reference/
    livepeer-contract-addresses.mdx (2.1KB) DONE
    network-metrics.mdx  (1.6KB) THIN
    technical-roadmap.mdx (8KB) Claude Web rewrite
```

**Questions About answers:**
1. What is Livepeer — the full technical picture?
2. How does the whole system fit together? (mental model)
3. What are the core building blocks?
4. What is the network and how is it different from the protocol?
5. Who are the actors and what does each do?
6. How does a compute job flow?
7. How does the marketplace work?
8. What's the network architecture?
9. What interfaces do builders use?
10. What does the protocol do?
11. What are the core mechanisms?
12. What is LPT?
13. How does money flow?
14. How does governance work?
15. How does the treasury and org funding work?
16. What are the smart contracts?
17. What's the protocol architecture?
18. Why is it designed this way?
19. What products and platforms exist? — MISSING
20. What's the current state of the network? — THIN
21. How do you participate? — MISSING

---

## ORCHESTRATORS (82 pages)

**Job**: Run a GPU node. Everything from evaluation to optimisation.

**Sections**:
```
concepts/        (5 pages) Role, capabilities, architecture, incentive model
quickstart/      (5 pages) Fastest path to first reward
setup/           (9 pages) Full install → configure → connect → verify
guides/          (53 pages across 10 subgroups)
  operator-considerations/    Is this worth it? Requirements, rationale, business case
  deployment-details/         Dual mode, pool, O-T split, siphon, setup options
  ai-and-job-workloads/       AI inference, pipelines, model hosting, video transcoding
  config-and-optimisation/    Pricing, AI model mgmt, capacity, reward tuning
  monitoring-and-tooling/     Metrics, Explorer, troubleshooting, operator toolbox
  staking-and-rewards/        Earning model, reward mechanics, delegation, governance
  payments-and-pricing/       Payment receipts, payment mechanics
  roadmap-and-funding/        SPE grants, orchestrator profiles
  advanced-operations/        Gateway interface, pool operators, scaling
  tutorials/                  Zero-to-first-reward, BYOC, AI tutorials
resources/       (14 pages) FAQ, glossary, CLI flags, contract addresses, exchanges, RPCs
```

**Questions Orchestrators answers:**
- Is this worth it for my hardware?
- Which path — solo, pool, AI-only?
- How do I get my first node running?
- How do I add AI pipelines?
- How do I price competitively?
- How do I monitor and troubleshoot?
- How do I maximise earnings?
- How does staking and governance work for operators?

---

## GATEWAYS (133 pages — largest tab, includes view/composable files)

**Job**: Run gateway infrastructure. Full operational depth.

**Sections**:
```
concepts/        (4 pages) Role, capabilities, architecture, business model
quickstart/      (2 main + 10 view files) Docker/Linux/Windows × on-chain/off-chain
setup/           (20+ pages) Prepare, install, configure, connect, verify, monitor
  prepare.mdx              GOLD STANDARD PAGE
  install.mdx + install/*  Docker/Linux/Windows install views
  configure.mdx + configure/* AI/video/dual/pricing configuration views
  connect.mdx + connect/*  Marketplace discovery, connect with offerings
  verify.mdx               End-to-end verification
  monitor.mdx              Monitoring setup
guides/          (40+ pages across 8 subgroups)
  operator-considerations/  Business case, production gateways
  deployment-details/       Setup options, requirements, GWID deploy
  monitoring-and-tooling/   Health checks, monitoring, metrics, troubleshooting
  node-pipelines/           AI, video, BYOC, pipeline config
  payments-and-pricing/     Pricing, funding, payment guide, clearinghouse, remote signers
  roadmap-and-funding/      NaaP, SPE grants, showcase, operator support
  advanced-operations/      Scaling, middleware, orchestrator selection, discoverability
  tutorials/                BYOC CPU, offchain transcoding, go-production
resources/       (30+ pages) FAQ, glossary, API reference (AI-API, CLI-HTTP, AI-Worker), hardware reqs, CLI, exchanges
```

---

## DEVELOPERS (51 pages)

**Job**: Build on Livepeer — APIs, SDKs, pipelines.

**Sections**:
```
concepts/        (5 pages) AI on Livepeer, developer stack, OSS stack, running a gateway, video
get-started/     (6 pages) AI quickstart, transcoding, ComfyStream, contributor, video, setup-paths
build/           (5 pages) BYOC, ComfyStream, model support, SDK gateway, workload fit
guides/          (20+ pages)
  ai/                    Authentication, production checklist, troubleshooting
  video/                 Create livestream, access control, playback, upload, webhooks, monitor
  tutorials/             AI agent, IPFS video, token-gated video
  opportunities/         Grants, bug bounties, OSS contributions, RFPs
  contribution-guide, developer-guides, local-testnet-deployment
resources/       (10 pages) APIs, SDKs, glossary, help, example apps, awesome-livepeer, deepwiki
```

---

## DELEGATORS (25 pages)

**Job**: Stake LPT. Participate in governance. Earn.

**Sections**:
```
concepts/        (4 pages) Overview, mechanics, purpose, tokenomics
delegation/      (7 pages) About delegation, bridge LPT, choose orchestrator, delegate, economics, manage, overview
guides/
  governance/    (3 pages) Overview, model, processes
  treasury/      (3 pages) Overview, allocations, proposals
resources/       (5 pages) Glossary, exchanges, LPT/ETH usage, videos/blogs, contracts, protocol parameters
```

---

## COMMUNITY (18 pages)

**Job**: Get involved. Find people. Contribute.

**Sections**:
```
livepeer-community/   (5 pages) Guidelines, governance & Foundation, latest topics, trending, roadmap
livepeer-connect/     (3 pages) Events, forums, news & socials
livepeer-contribute/  (3 pages) Build, contribute, opportunities
resources/            (4 pages) Awesome Livepeer, dashboards, glossary, guides
faq.mdx
```

---

## SOLUTIONS (109 pages)

**Job**: Product docs. What exists and how to use it.

**Sections**:
```
Per-product:
  daydream/           (3 pages) Overview, community, changelog
  embody/             (3 pages) Overview, community, changelog
  frameworks/         (3 pages) Overview, community, changelog
  streamplace/        (8 pages) Overview, community, changelog, architecture, funding, guide, integration, provenance
  livepeer-studio/    (88 pages) Full Studio docs — overview, quickstart, API reference, livestream, VOD, access control, analytics
solution-providers.mdx
```

---

## RESOURCES (53 pages)

**Job**: Cross-cutting reference. Changelogs. Documentation guide.

**Sections**:
```
changelog/            (20 pages) go-livepeer, LIPs, NaaP, subgraph, AI runner, ComfyStream, SDKs, Explorer, etc.
compendium/           (1 page) Media kit
concepts/             (2 pages) Brief history of video, Livepeer 101
documentation-guide/  (15 pages) AI automations, component library, contributing, copy style, features, tooling
glossary.mdx          Site-wide glossary
help-center.mdx
references/           (1 page) Contract addresses
```

---

## OVERLAP ANALYSIS

### LPT / Staking / Economics

| Topic | About | Delegators | The boundary |
|---|---|---|---|
| What is LPT | protocol/livepeer-token (13KB) | concepts/purpose (9KB), concepts/tokenomics (6KB) | About: how the token works in the SYSTEM. Delegators: what the token means for YOU as a holder |
| Staking mechanics | protocol/core-mechanisms (25KB) | concepts/mechanics (6KB), delegation/* (7 pages) | About: how the mechanism works. Delegators: how to DO it |
| Economics | protocol/economics (10KB) | delegation/delegation-economics (6KB) | About: how money flows through the ecosystem. Delegators: how much YOU earn |
| Governance | protocol/governance-model (16KB) | guides/governance/* (3 pages, 22KB) | About: how governance works mechanically. Delegators: how to participate and vote |
| Treasury | protocol/treasury (17KB) | guides/treasury/* (3 pages, 18KB) | About: how treasury funding works. Delegators: how to submit proposals, what's been funded |

**Principle**: About explains HOW the system works (mechanism). Delegators tells you what to DO (action). Intentional duplication — each tab self-contained.

### Actors / Roles

| Topic | About | Role tab | The boundary |
|---|---|---|---|
| What orchestrators do | network/actors.mdx (mention) | orchestrators/concepts/role.mdx (full) | About: one paragraph per actor. Role tab: complete role description |
| What gateways do | network/actors.mdx (mention) | gateways/concepts/role.mdx (full) | Same |
| What delegators do | network/actors.mdx (mention) | delegators/concepts/overview.mdx (full) | Same |

**Principle**: About introduces ALL actors briefly in ONE page. Role tabs own the full depth for THEIR actor.

### Governance / Foundation / Org

| Topic | Home | About | Delegators | Community |
|---|---|---|---|---|
| Foundation / org structure | ecosystem.mdx (25.7KB narrative) | protocol/treasury.mdx (mechanism) | — | governance-and-foundation.mdx (14KB community view) |
| Governance | — | protocol/governance-model.mdx (mechanism) | guides/governance/* (how to vote) | — |
| Roadmap | roadmap.mdx (1.8KB stub) | resources/reference/technical-roadmap.mdx (8KB) | — | roadmap.mdx (2KB stub) |
| Current state | trending.mdx (6.4KB) | resources/reference/network-metrics.mdx (1.6KB thin) | — | trending-topics.mdx (6.8KB) |

**Issues**:
- Roadmap exists in 3 places (Home, About, Community) — all thin/stub
- "Current state" exists in Home + Community (trending) but About's version is 1.6KB thin
- Foundation/org covered deeply in Home (25.7KB narrative) and Community (14KB), About only covers treasury mechanism

### Products / Ecosystem

| Topic | Home | About | Solutions |
|---|---|---|---|
| What products exist | solutions/* (showcase, applications, verticals) | NOTHING | Full product docs per product |
| Product details | — | NOTHING | 109 pages (Studio alone is 88) |

**Issue**: About has NO ecosystem/products coverage. Reader finishes protocol/treasury and has no bridge to "what's actually been built."

---

## SITE-WIDE QUESTIONS — WHO ANSWERS WHAT

| Question | Primary tab | Also touched by |
|---|---|---|
| What is Livepeer? | Home (primer) | About (overview) |
| Why does Livepeer matter? | Home (benefits) | — |
| How does the system work? | About (mental-model, core-concepts) | — |
| How does the protocol work? | About (protocol/*) | Delegators (concepts/*) |
| How does the network work? | About (network/*) | Orchestrators/Gateways (concepts/*) |
| What is LPT? | About (livepeer-token) | Delegators (purpose, tokenomics) |
| How do economics work? | About (economics) | Delegators (delegation-economics) |
| How does governance work? | About (governance-model) | Delegators (guides/governance/*), Community (governance-and-foundation) |
| How do I stake/delegate? | Delegators (delegation/*) | — |
| How do I run a node? | Orchestrators (setup/*) | — |
| How do I run a gateway? | Gateways (setup/*) | — |
| How do I build on Livepeer? | Developers (get-started/*, build/*) | — |
| What products exist? | Solutions (per-product) | Home (solutions/*) |
| How do I get involved? | Community | — |
| Where's the changelog? | Resources (changelog/*) | — |
| Who runs Livepeer? | Home (ecosystem) | About (treasury), Community (governance-and-foundation) |

---

## DECISIONS LOG

| # | Decision | Date | Notes |
|---|---|---|---|
| 1 | About = deep technical + ecosystem reference. Home = narrative + routing. | 2026-04-07 | About goes deeper than Home on everything. Home introduces, About explains. |
| 2 | About owns protocol mechanics, network architecture, ecosystem depth. Other tabs own operational how-to. | 2026-04-07 | Self-containment: intentional duplication. About explains HOW. Role tabs explain WHAT TO DO. |
| 3 | About needs ecosystem/products/current-state coverage (currently MISSING) | 2026-04-07 | No page answers "what products exist?" or "what does the network look like today?" |
| 4 | Overlap between About and Delegators is intentional — different register (mechanism vs action) | 2026-04-07 | About: "how governance works". Delegators: "how to vote". |
| 5 | Roadmap exists in 3 tabs (Home, About, Community) — needs consolidation or clear ownership | 2026-04-07 | Open question |
| 6 | 3 pages confirmed GOOD by human: blockchain-contracts, mental-model, core-mechanisms (unfinished) | 2026-04-07 | Quality bar: 21-59KB, comprehensive, information-complete |
