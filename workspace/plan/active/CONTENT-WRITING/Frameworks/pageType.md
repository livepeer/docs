# pageType Audit — All v2 Pages

**Created**: 2026-03-19
**Purpose**: Non-destructive audit of every v2 page. Assigns recommended pageType, pageVariant, and purpose based on reading actual content (not trusting frontmatter).
**Excludes**: x-archive, x-deprecated, x-resources, _workspace, dep- prefixed files.

<CustomDivider />

## 7 Primary Types

| pageType | Job | Variants |
|---|---|---|
| `navigation` | Route the reader — portals, landings, section roots | `portal`, `landing` |
| `concept` | Explain a mechanism/system | `overview` |
| `tutorial` | Learn by building | `overview` |
| `guide` | Practical understanding of a system | `overview` |
| `instruction` | Step-by-step task execution | `overview`, `quickstart`, `setup` |
| `reference` | Structured lookup | `overview`, `specification`, `compendium`, `changelog` |
| `resource` | Curated collections, ecosystem material | `overview` |

`overview` = entry/orientation page for a section of this type. Available on all types except `navigation`.

<CustomDivider />

## HOME

| Path | Current pageType | Current purpose | Actual Function | Rec. pageType | Rec. variant | Rec. purpose |
|---|---|---|---|---|---|---|
| home/mission-control.mdx | landing | landing | Hero landing page with starfield, card grid to major sections | navigation | landing | orient |
| home/get-started.mdx | (none) | tutorial | Role-based navigation hub ("new/developer/GPU/creator/LPT") | navigation | landing | choose |
| home/primer.mdx | tutorial | tutorial | Intro explainer: what Livepeer is, why it matters. No steps. | concept | (none) | explain |
| home/trending.mdx | (none) | (none) | Aggregation page pulling live data feeds (YouTube, Forum, Discord, X) | resource | (none) | update |
| home/about/vision.mdx | concept | concept | Founder story with video, quotes, mission narrative | concept | (none) | explain |
| home/about/evolution.mdx | concept | concept | Timeline of key achievements 2016-present | reference | changelog | learn |
| home/about/roadmap.mdx | overview | overview | Links to external roadmap site. Thin pointer page. | resource | (none) | update |
| home/about/benefits.mdx | concept | concept | "Why Livepeer" value proposition: cost, performance, open, trust | concept | (none) | choose |
| home/about/ecosystem.mdx | concept | concept | Livepeer org structure: Foundation, Inc, SPEs, governance | concept | (none) | explain |
| home/solutions/showcase.mdx | overview | overview | Gallery of creative projects built on Livepeer | resource | (none) | learn |
| home/solutions/landscape.mdx | (none) | (none) | STUB — single quote about DeAI. Essentially empty. | concept | (none) | explain |
| home/solutions/verticals.mdx | overview | overview | Industry verticals: Media, Gaming, Robotics, Analytics | concept | (none) | choose |
| home/solutions/applications.mdx | overview | overview | Application domains: Social Media, Events, Education, Gaming | concept | (none) | choose |
| home/get-started/ai-pipelines.mdx | (none) | (none) | STUB — "Coming Soon" | instruction | quickstart | start |
| home/get-started/stream-video.mdx | (none) | (none) | STUB — "Coming Soon" | instruction | quickstart | start |
| home/get-started/use-livepeer.mdx | (none) | (none) | STUB — "Coming Soon" | guide | (none) | start |
| home/get-started/build-on-livepeer.mdx | (none) | (none) | STUB — "Coming Soon" | guide | (none) | build |

<CustomDivider />

## ABOUT

| Path | Current pageType | Current purpose | Actual Function | Rec. pageType | Rec. variant | Rec. purpose |
|---|---|---|---|---|---|---|
| about/portal.mdx | landing | landing | Hero portal with card grid to About sub-sections | navigation | landing | orient |
| about/livepeer-overview.mdx | overview | overview | Substantive overview: protocol/network separation, marketplace, DePIN | overview | (none) | orient |
| about/mental-model.mdx | concept | concept | "Decentralised serverless GPU fabric with cryptoeconomic control plane" | concept | (none) | explain |
| about/core-concepts.mdx | concept | concept | On-chain vs off-chain, protocol/network bridge | concept | (none) | explain |
| about/faq-about.mdx | reference | (none) | NOT AN FAQ — contains IA restructuring blueprint. Mislabeled. | concept | (none) | explain |
| about/core-concepts/concepts/actors.mdx | (none) | (none) | Detailed actor breakdown: Orchestrator, Gateway, Delegator, etc. | concept | (none) | explain |
| about/livepeer-protocol/overview.mdx | overview | overview | Protocol overview: what it secures, what it doesn't do | overview | (none) | orient |
| about/livepeer-protocol/governance-model.mdx | concept | concept | Governance: LIPs, voting, upgrade process, Foundation role | concept | (none) | explain |
| about/livepeer-protocol/core-mechanisms.mdx | concept | concept | Staking, delegation, rewards, inflation, slashing, rounds | concept | (none) | explain |
| about/livepeer-protocol/technical-architecture.mdx | concept | concept | Smart contracts, on-chain components, protocol-network interaction | concept | (none) | explain |
| about/livepeer-protocol/treasury.mdx | concept | concept | Treasury: inflation allocation, grants/SPEs, budget governance | concept | (none) | explain |
| about/livepeer-protocol/livepeer-token.mdx | concept | concept | LPT purpose, security model, inflation mechanics | concept | (none) | explain |
| about/livepeer-protocol/economics.mdx | concept | concept | Tokenomics, staking flow, inflation model, reward distribution | concept | (none) | explain |
| about/livepeer-network/overview.mdx | overview | overview | Node types, core components, execution layer | overview | (none) | orient |
| about/livepeer-network/actors.mdx | concept | concept | Orchestrators, Delegators, Gateways with code-level refs | concept | (none) | explain |
| about/livepeer-network/job-lifecycle.mdx | concept | concept | Job lifecycle as state machine: ingest→discovery→execute→verify→pay | concept | (none) | explain |
| about/livepeer-network/marketplace.mdx | concept | concept | Marketplace mechanics: routing, pricing, settlement | concept | (none) | explain |
| about/livepeer-network/technical-architecture.mdx | concept | concept | Full technical stack with mermaid diagrams | concept | (none) | explain |
| about/livepeer-network/interfaces.mdx | concept | concept | REST, gRPC, GraphQL, SDK, CLI catalog. Actually a reference. | reference | compendium | reference |
| about/livepeer-network/demand-side.mdx | (none) | (none) | STUB — bullet outline only | concept | (none) | explain |
| about/livepeer-network/fee-flow.mdx | (none) | (none) | STUB — bullet outline only | concept | (none) | explain |
| about/livepeer-network/supply-side.mdx | (none) | (none) | STUB — bullet outline only | concept | (none) | explain |
| about/livepeer-network/scaling.mdx | (none) | (none) | STUB — bullet outline only | concept | (none) | explain |
| about/livepeer-network/livepeer-actors/delegators.mdx | (none) | (none) | Delegator role: responsibilities, earnings, tradeoffs | concept | (none) | explain |
| about/livepeer-network/livepeer-actors/end-users.mdx | (none) | (none) | Builders and end-users: responsibilities, expectations | concept | (none) | explain |
| about/livepeer-network/livepeer-actors/gateways.mdx | (none) | (none) | Gateway role: intake, routing, coordination | concept | (none) | explain |
| about/livepeer-network/livepeer-actors/orchestrators.mdx | (none) | (none) | Orchestrator role: compute, economic position | concept | (none) | explain |
| about/resources/livepeer-glossary.mdx | glossary | glossary | STUB — placeholder with no definitions. Duplicate. | reference | compendium | reference |
| about/resources/livepeer-whitepaper.mdx | reference | reference | Whitepaper summary + links. Correct. | reference | (none) | reference |
| about/resources/gateways-vs-orchestrators.mdx | (none) | (none) | Comparison page: gateways coordinate vs orchestrators compute | concept | (none) | compare |
| about/resources/technical-roadmap.mdx | reference | reference | Two blog links. Extremely thin. | resource | (none) | update |
| about/resources/blockchain-contracts.mdx | (none) | concept | Contract addresses with Arbiscan/GitHub links | reference | specification | reference |

<CustomDivider />

## GATEWAYS

| Path | Current pageType | Current purpose | Actual Function | Rec. pageType | Rec. variant | Rec. purpose |
|---|---|---|---|---|---|---|
| gateways/portal.mdx | landing | landing | Hero portal with cards to gateway sections | navigation | landing | orient |
| gateways/navigator.mdx | overview | overview | Rich decision-guide: tabs by goal, comparison table, journey map, persona matrix | guide | overview | orient |
| gateways/concepts/role.mdx | overview | overview | Deep explanation of what gateways are. Actually a concept page. | concept | (none) | explain |
| gateways/concepts/architecture.mdx | concept | concept | Gateway layer position, system interactions, dual pipeline, job lifecycle | concept | (none) | explain |
| gateways/concepts/business-model.mdx | concept | concept | Payment flow, earnings, cost structure, operator models | concept | (none) | explain |
| gateways/concepts/capabilities.mdx | concept | concept | Core functions, workload types, orchestrator selection, marketplace role | concept | (none) | explain |
| gateways/quickstart/gateway-setup.mdx | quickstart | how_to | Multi-platform quickstart with tabbed views | instruction | quickstart | start |
| gateways/quickstart/AI-prompt.mdx | quickstart | tutorial | AI agent task list for gateway setup | instruction | quickstart | start |
| gateways/setup/run-a-gateway.mdx | guide | operations | Setup section landing page with links to sub-pages | instruction | overview | orient |
| gateways/setup/transcoding.mdx | guide | operations | STUB — placeholder for transcoding gateway guide | guide | (none) | build |
| gateways/setup/requirements/setup.mdx | guide | (none) | Hardware, network, software requirements | instruction | setup | configure |
| gateways/setup/requirements/on-chain setup/on-chain.mdx | guide | (none) | On-chain setup: RPC URL, Ethereum account, keystore | instruction | setup | configure |
| gateways/setup/requirements/on-chain setup/bridge-lpt-to-arbitrum.mdx | (none) | (none) | Bridge LPT between Ethereum and Arbitrum | instruction | (none) | configure |
| gateways/setup/requirements/on-chain setup/fund-gateway.mdx | guide | operations | Fund ETH account, bridge to Arbitrum, allocate deposit/reserve | instruction | (none) | configure |
| gateways/setup/install/install-overview.mdx | guide | operations | Overview of installation options | overview | (none) | orient |
| gateways/setup/install/docker-install.mdx | guide | operations | Docker installation instructions | instruction | setup | start |
| gateways/setup/install/linux-install.mdx | guide | operations | Linux binary installation instructions | instruction | setup | start |
| gateways/setup/install/windows-install.mdx | guide | operations | Windows installation instructions | instruction | setup | start |
| gateways/setup/install/community-projects.mdx | guide | operations | Community CI/CD and single-click deployment tools | resource | (none) | integrate |
| gateways/setup/configure/configuration-overview.mdx | guide | operations | Overview of gateway configuration | overview | (none) | orient |
| gateways/setup/configure/ai-configuration.mdx | guide | operations | Configure AI inference services | instruction | (none) | configure |
| gateways/setup/configure/video-configuration.mdx | guide | operations | Configure video transcoding services | instruction | (none) | configure |
| gateways/setup/configure/dual-configuration.mdx | guide | operations | Configure dual AI + video services | instruction | (none) | configure |
| gateways/setup/configure/pricing-configuration.mdx | guide | operations | Configure pricing for services | instruction | (none) | configure |
| gateways/setup/configure/configuration-reference.mdx | (none) | (none) | STUB — empty beyond frontmatter | reference | specification | reference |
| gateways/setup/connect/connect-with-offerings.mdx | guide | operations | Connect to orchestrator offerings | instruction | (none) | integrate |
| gateways/setup/connect/discover-offerings.mdx | guide | operations | Discover AI/video compute offerings | instruction | (none) | integrate |
| gateways/setup/connect/lp-marketplace.mdx | guide | operations | Marketplace overview: how gateways discover/route | concept | (none) | explain |
| gateways/setup/monitor/monitor-and-optimise.mdx | guide | operations | Monitor and optimise gateway services | guide | (none) | operate |
| gateways/guides/deployment-details/setup-options.mdx | guide | orientation | Choose setup type and operational mode | guide | (none) | choose |
| gateways/guides/deployment-details/setup-requirements.mdx | guide | operations | Hardware, OS, network, skills requirements | reference | specification | reference |
| gateways/guides/node-pipelines/guide.mdx | overview | orientation | Explains pipelines, three job types, mapping | overview | (none) | orient |
| gateways/guides/node-pipelines/ai-pipelines.mdx | guide | concept | AI inference flow: HTTP routing, discovery, retry logic | guide | (none) | explain |
| gateways/guides/node-pipelines/video-pipelines.mdx | guide | concept | Video job flow: RTMP/HTTP ingest, BSM, HLS output | guide | (none) | explain |
| gateways/guides/node-pipelines/byoc-pipelines.mdx | guide | concept | BYOC routing: capability-as-contract, health tracking | guide | (none) | explain |
| gateways/guides/node-pipelines/pipeline-configuration.mdx | guide | operations | Post-setup tuning: transcoding profiles, AI retry, warm/cold | guide | (none) | configure |
| gateways/guides/operator-considerations/business-case.mdx | guide | operations | Should you run a gateway? Economics, use case fit | guide | (none) | choose |
| gateways/guides/operator-considerations/production-gateways.mdx | guide | operations | Directory of commercial products, community tools | resource | (none) | reference |
| gateways/guides/payments-and-pricing/payment-guide.mdx | guide | orientation | Choose payment path: on-chain, remote signer, clearinghouse | guide | (none) | choose |
| gateways/guides/payments-and-pricing/funding-guide.mdx | guide | operations | Step-by-step funding: bridging, depositing, reserve via CLI | instruction | (none) | configure |
| gateways/guides/payments-and-pricing/pricing-strategy.mdx | guide | operations | Configure price caps, USD conversion, cap-setting by mode | guide | (none) | configure |
| gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | guide | operations | Clearinghouse: ETH custody, PM signing, orchestrator settlement | guide | (none) | explain |
| gateways/guides/payments-and-pricing/remote-signers.mdx | guide | operations | Remote signer: key isolation, signing protocol, configuration | guide | (none) | explain |
| gateways/guides/monitoring-and-tooling/health-checks.mdx | guide | operations | Health endpoints, status commands, deposit checks | guide | (none) | verify |
| gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | guide | operations | Prometheus + Grafana setup, dashboards, alerts | guide | (none) | operate |
| gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | guide | operations | Monitor on-chain: TicketBroker events, Arbiscan, gas tracking | guide | (none) | operate |
| gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | guide | operations | Explorer, Livepeer Tools, livepeer_cli, Arbiscan catalog | resource | (none) | reference |
| gateways/guides/monitoring-and-tooling/troubleshooting.mdx | troubleshooting | troubleshooting | Fix common errors: ports, RPC, deposits, CUDA, Docker | guide | (none) | troubleshoot |
| gateways/guides/advanced-operations/gateway-discoverability.mdx | guide | operations | Service URI, DNS, AIServiceRegistry, capability advertising | guide | (none) | configure |
| gateways/guides/advanced-operations/gateway-middleware.mdx | guide | operations | Auth, rate limiting, billing, custom routing, reverse proxy | guide | (none) | build |
| gateways/guides/advanced-operations/orchestrator-selection.mdx | guide | operations | Selection algorithm tuning: tiering, blocklists, failover | guide | (none) | optimize |
| gateways/guides/advanced-operations/scaling.mdx | guide | operations | Session limits, GPU management, horizontal scaling | guide | (none) | optimize |
| gateways/guides/roadmap-and-funding/gateway-showcase.mdx | guide | operations | Directory of products/tools/infra built on gateways | resource | (none) | reference |
| gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | guide | operations | NaaP: multi-tenant architecture, API keys, billing, isolation | guide | (none) | build |
| gateways/guides/roadmap-and-funding/operator-support.mdx | guide | operations | SPE grants, AI Video Startup Programme, community resources | resource | (none) | reference |
| gateways/guides/roadmap-and-funding/spe-grant-model.mdx | guide | operations | SPE treasury funding model: what SPEs are, how to propose | guide | (none) | reference |
| gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx | tutorial | tutorial | Tutorial 1/3: Gateway-orchestrator pipeline, CPU only, 15 min | tutorial | (none) | learn |
| gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx | tutorial | tutorial | Tutorial 2/3: BYOC CPU pipeline with PyTrickle | tutorial | (none) | learn |
| gateways/guides/tutorials/tutorial-3-go-production.mdx | tutorial | tutorial | Tutorial 3/3: Live network, on-chain, GPU, public orchestrators | tutorial | (none) | learn |
| gateways/guides/tutorials/byoc-cpu-tutorial.mdx | tutorial | tutorial | Standalone BYOC smoke-test: CPU, off-chain to on-chain | tutorial | (none) | learn |
| gateways/guides/tutorials/tutorials-resources.mdx | landing | landing | Draft index of tutorials. Mostly commented-out. | tutorial | overview | orient |
| gateways/resources/faq.mdx | faq | reference | Gateway FAQ: broadcaster rename, ETH, AI limits, pricing | resource | (none) | troubleshoot |
| gateways/resources/glossary.mdx | reference | reference | Terminology definitions: modes, setup types, node types | reference | compendium | reference |
| gateways/resources/go-livepeer/hardware-requirements.mdx | reference | reference | GPU, CPU, memory requirements | reference | specification | reference |
| gateways/resources/go-livepeer/bandwidth-requirements.mdx | guide | operations | Bandwidth requirements for video transcoding | reference | specification | reference |
| gateways/resources/go-livepeer/cli-reference.mdx | guide | operations | Full CLI flags, env vars, config options | reference | specification | reference |
| gateways/resources/go-livepeer/gpu-support.mdx | guide | operations | Crowdsourced tested NVIDIA GPU models | reference | specification | reference |
| gateways/resources/go-livepeer/prometheus-metrics.mdx | reference | reference | All Prometheus metrics exposed by go-livepeer | reference | specification | reference |
| gateways/resources/knowledge-base/guides.mdx | landing | landing | Card-based index of guides/walkthroughs | resource | overview | orient |
| gateways/resources/knowledge-base/resources.mdx | landing | landing | Card-based index of tools/SDKs/dashboards | resource | overview | orient |
| gateways/resources/knowledge-base/help.mdx | guide | operations | Support channel directory: Discord, forum, GitHub | resource | (none) | troubleshoot |
| gateways/resources/knowledge-base/resources-master-list.mdx | (none) | (none) | Complete annotated index of 82+ guides and resources | resource | (none) | reference |
| gateways/resources/technical/configuration-flags.mdx | reference | reference | Dynamic table of gateway config flags | reference | specification | reference |
| gateways/resources/technical/contract-addresses.mdx | reference | reference | Deployed contract addresses across networks | reference | specification | reference |
| gateways/resources/technical/arbitrum-exchanges.mdx | reference | (none) | Exchanges supporting Arbitrum One (CoinGecko data) | reference | compendium | reference |
| gateways/resources/technical/arbitrum-rpc.mdx | reference | reference | Public Arbitrum RPCs | reference | compendium | reference |
| gateways/resources/technical/livepeer-exchanges.mdx | reference | reference | Exchanges supporting Livepeer | reference | compendium | reference |
| gateways/resources/technical/orchestrator-offerings.mdx | (none) | (none) | OrchestratorInfo protobuf data structure | reference | specification | reference |
| gateways/resources/technical/api-reference/AI-API/ai.mdx | reference | reference | AI API Portal: index of all endpoints | reference | specification | reference |
| gateways/resources/technical/api-reference/AI-API/*.mdx (12 files) | reference | (none)/(reference) | Individual OpenAPI endpoint pages (audio-to-text, image-to-image, etc.) | reference | specification | reference |
| gateways/resources/technical/api-reference/CLI-HTTP/cli-http-api.mdx | reference | reference | CLI HTTP API Portal: index of all endpoints | reference | specification | reference |
| gateways/resources/technical/api-reference/CLI-HTTP/*.mdx (11 files) | reference | (none)/(reference) | Individual CLI HTTP endpoint pages | reference | specification | reference |

<CustomDivider />

## DEVELOPERS

| Path | Current pageType | Current purpose | Actual Function | Rec. pageType | Rec. variant | Rec. purpose |
|---|---|---|---|---|---|---|
| developers/portal.mdx | landing | landing | Hero landing page with cards to developer sections | navigation | landing | orient |
| developers/developer-journey.mdx | guide | concept | Interactive path-chooser: tabs for video/AI/gateway/GPU/protocol | guide | (none) | choose |
| developers/concepts/ai-on-livepeer.mdx | concept | concept | Three AI pipeline categories with comparison tables | concept | (none) | explain |
| developers/concepts/developer-stack.mdx | concept | concept | Developer ecosystem layers: Studio, Daydream, AI Gateway, etc. | concept | (none) | choose |
| developers/concepts/oss-stack.mdx | concept | concept | Main Livepeer OSS repos and how they connect | concept | (none) | explain |
| developers/concepts/running-a-gateway.mdx | concept | concept | Decision guide: self-host vs hosted APIs | concept | (none) | choose |
| developers/concepts/video-on-livepeer.mdx | concept | concept | STUB — empty placeholder | concept | (none) | explain |
| developers/build/byoc.mdx | how_to | how_to | Step-by-step BYOC Docker container with PyTrickle | guide | (none) | build |
| developers/build/comfystream.mdx | guide | operations | ComfyStream pipeline modes, node ecosystem, workflow format | guide | (none) | build |
| developers/build/model-support.mdx | reference | reference | AI pipeline types, supported models, VRAM requirements | reference | specification | reference |
| developers/build/sdk-gateway.mdx | guide | operations | STUB — only research notes/comments | guide | (none) | build |
| developers/build/workload-fit.mdx | concept | concept | Decision tree for evaluating if workload fits Livepeer | concept | (none) | choose |
| developers/get-started/ai-quickstart.mdx | quickstart | concept | Step-by-step: send first AI inference job | instruction | quickstart | start |
| developers/get-started/comfystream-quickstart.mdx | tutorial | tutorial | Multi-path quickstart: RunPod/Docker/local ComfyStream | instruction | quickstart | start |
| developers/get-started/contributor-quickstart.mdx | guide | (none) | Orientation: pick repo, make first PR | instruction | quickstart | start |
| developers/get-started/setup-paths.mdx | landing | landing | STUB — empty | navigation | landing | orient |
| developers/get-started/transcoding-quickstart.mdx | quickstart | concept | Step-by-step: submit transcoding job via Studio API | instruction | quickstart | start |
| developers/get-started/video-quickstart.mdx | tutorial | tutorial | STUB — empty | instruction | quickstart | start |
| developers/developer-tools/dashboards.mdx | (none) | (none) | Community dashboards listing with comparison table | resource | (none) | orient |
| developers/developer-tools/gateways.mdx | (none) | (none) | STUB — single H1 only | resource | (none) | orient |
| developers/developer-tools/livepeer-cloud.mdx | (none) | (none) | Livepeer Cloud Tools Dashboard features | resource | (none) | orient |
| developers/developer-tools/livepeer-explorer.mdx | (none) | (none) | Livepeer Explorer tool description | resource | (none) | orient |
| developers/developer-tools/tooling-hub.mdx | landing | landing | Minimal hub page with single card | resource | overview | orient |
| developers/guides/developer-guides.mdx | guide | operations | Curated external guide links by topic | resource | (none) | learn |
| developers/guides/contribution-guide.mdx | guide | operations | How to contribute: code, docs, governance, community | guide | (none) | build |
| developers/guides/developer-help.mdx | faq | faq | Channel directory: Discord, forum, office hours, GitHub | resource | (none) | troubleshoot |
| developers/guides/resources.mdx | guide | operations | Curated links: tools, dashboards, videos, SDKs | resource | (none) | orient |
| developers/opportunities/overview.mdx | overview | overview | Builder opportunities: grants, RFPs, OSS, bounties | overview | (none) | orient |
| developers/opportunities/bug-bounties.mdx | reference | how_to | Immunefi bug bounty: scope, rewards, rules, submission | reference | specification | reference |
| developers/opportunities/grants-and-programmes.mdx | guide | how_to | Grants, accelerators, hackathons, application paths | guide | (none) | start |
| developers/opportunities/oss-contributions.mdx | guide | how_to | How to contribute to Livepeer OSS repos | guide | (none) | build |
| developers/opportunities/rfps-and-proposals.mdx | guide | how_to | Foundation RFPs and SPE Treasury Proposals | guide | (none) | start |
| developers/resources/apis.mdx | landing | landing | Hub: Studio API and AI API cards | reference | compendium | reference |
| developers/resources/awesome-livepeer.mdx | landing | landing | Embeds Awesome Livepeer GitHub repo | resource | (none) | learn |
| developers/resources/deepwiki.mdx | landing | landing | Embeds DeepWiki iframe | resource | (none) | learn |
| developers/resources/example-applications.mdx | (none) | (none) | Table of example apps with GitHub links | resource | (none) | learn |
| developers/resources/sdks.mdx | landing | landing | Hub: Studio SDKs and Gateway Client SDK | reference | compendium | reference |
| developers/resources/wiki.mdx | landing | landing | Links to Livepeer Wiki on GitHub/DeepWiki | resource | (none) | learn |

<CustomDivider />

## ORCHESTRATORS

| Path | Current pageType | Current purpose | Actual Function | Rec. pageType | Rec. variant | Rec. purpose |
|---|---|---|---|---|---|---|
| orchestrators/portal.mdx | landing | landing | Hero portal with docker pull, cards to sections | navigation | landing | orient |
| orchestrators/navigator.mdx | landing | orientation | Interactive path-chooser: accordions by situation | guide | (none) | choose |
| orchestrators/quickstart/guide.mdx | overview | overview | Quickstart overview with cards to video/AI test | overview | (none) | orient |
| orchestrators/quickstart/tutorial.mdx | tutorial | (none) | Sequencing page: overview → video test → AI | tutorial | (none) | start |
| orchestrators/quickstart/video-transcoding.mdx | quickstart | tutorial | Docker-based off-chain video + AI smoke tests | instruction | quickstart | verify |
| orchestrators/quickstart/AI-prompt-start.mdx | guide | (none) | Add AI inference to existing transcoding node | instruction | setup | configure |
| orchestrators/concepts/role.mdx | overview | overview | What orchestrators are, role evolution | overview | (none) | explain |
| orchestrators/concepts/architecture.mdx | concept | concept | go-livepeer internals, components, request flow | concept | (none) | explain |
| orchestrators/concepts/capabilities.mdx | concept | concept | Workload types, capability advertisement | concept | (none) | explain |
| orchestrators/concepts/incentive-model.mdx | concept | concept | ETH fees + LPT rewards, cost structure, pricing | concept | (none) | explain |
| orchestrators/setup/guide.mdx | overview | overview | Setup flow overview: ordered steps with links | overview | (none) | orient |
| orchestrators/setup/prepare.mdx | how_to | how_to | Pre-flight checklist: hardware, software, wallet, tokens | instruction | setup | configure |
| orchestrators/setup/rs-install.mdx | how_to | how_to | Install via Docker or binary, GPU passthrough | instruction | setup | configure |
| orchestrators/setup/configure.mdx | how_to | (none) | Set operational flags via docker-compose | instruction | setup | configure |
| orchestrators/setup/connect-and-activate.mdx | how_to | (none) | Connect to Arbitrum, fund, stake, register, activate | instruction | setup | configure |
| orchestrators/setup/test.mdx | how_to | how_to | Post-setup verification: status, video test, AI test | instruction | setup | verify |
| orchestrators/setup/r-monitor.mdx | how_to | how_to | Enable Prometheus, track health, verify earnings | instruction | setup | configure |
| orchestrators/guides/ai-and-job-workloads/workload-options.mdx | concept | concept | Four job types comparison: transcoding, batch AI, Cascade, LLM | concept | (none) | choose |
| orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | concept | concept | AI inference on Livepeer: batch vs live, hardware, flow | concept | (none) | explain |
| orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx | guide | guide | Configure video transcoding: pricing, sessions, bandwidth | guide | (none) | configure |
| orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | guide | guide | Batch AI pipelines: aiModels.json, models, pricing | guide | (none) | configure |
| orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx | how_to | (none) | LLM pipeline with Ollama: Docker Compose, model selection | instruction | setup | configure |
| orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | guide | guide | Live-video-to-video Cascade pipeline: ComfyStream, WebRTC | guide | (none) | configure |
| orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx | how_to | (none) | Audio/vision pipelines: VRAM, aiModels.json, pricing | instruction | setup | configure |
| orchestrators/guides/ai-and-job-workloads/model-hosting.mdx | how_to | (none) | Source, download, store AI models: HuggingFace, gated access | instruction | setup | configure |
| orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | reference | reference | VRAM by pipeline, warm model strategy, aiModels.json schema | reference | specification | reference |
| orchestrators/guides/config-and-optimisation/ai-model-management.mdx | how_to | (none) | Warm/cold strategy, VRAM allocation, model rotation | guide | (none) | optimize |
| orchestrators/guides/config-and-optimisation/capacity-planning.mdx | how_to | (none) | maxSessions via livepeer_bench, bandwidth, VRAM budgeting | guide | (none) | optimize |
| orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | how_to | (none) | Competitive pricing: pricePerUnit, autoAdjustPrice, market | guide | (none) | optimize |
| orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx | how_to | (none) | Reward calling profitability, auto/manual, gas timing | guide | (none) | optimize |
| orchestrators/guides/deployment-details/setup-options.mdx | overview | orientation | Compare setup options: go-livepeer, Siphon, pool, solo | overview | (none) | choose |
| orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx | guide | guide | O-T split setup: separate processes on different machines | guide | (none) | configure |
| orchestrators/guides/deployment-details/dual-mode-configuration.mdx | how_to | setup | Configure for both video + AI from single process | instruction | setup | configure |
| orchestrators/guides/deployment-details/join-a-pool.mdx | quickstart | faq | How pools work, how to join as a worker (older version) | instruction | quickstart | start |
| orchestrators/guides/deployment-details/new-join-a-pool.mdx | guide | guide | Detailed guide to joining a pool: evaluation, connection, payouts | guide | (none) | start |
| orchestrators/guides/deployment-details/siphon-setup.mdx | guide | guide | Siphon split: separate reward claiming from GPU workload | guide | (none) | configure |
| orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | reference | reference | Catalog of all operator tools | reference | compendium | reference |
| orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | guide | guide | Prometheus, Grafana, Docker monitoring stack | guide | (none) | operate |
| orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx | guide | guide | Diagnostic guide: transcoding, GPU, rewards, networking | guide | (none) | troubleshoot |
| orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx | guide | guide | Explorer orchestrator page: what metrics mean | guide | (none) | operate |
| orchestrators/guides/payments-and-pricing/payments.mdx | concept | concept | ETH flow: probabilistic micropayments, winning tickets | concept | (none) | explain |
| orchestrators/guides/payments-and-pricing/payment-receipts.mdx | concept | (none) | PM tickets: arrival, win, on-chain redemption | concept | (none) | explain |
| orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx | how_to | (none) | Configure node running both gateway + orchestrator | instruction | setup | configure |
| orchestrators/guides/advanced-operations/gateway-relationships.mdx | concept | concept | How gateways discover and select orchestrators | concept | (none) | explain |
| orchestrators/guides/advanced-operations/pool-operators.mdx | guide | guide | Operate a GPU pool: accept workers, routing, fee distribution | guide | (none) | operate |
| orchestrators/guides/advanced-operations/scale-operations.mdx | concept | concept | Multi-node fleet patterns, capacity management, rolling updates | concept | (none) | operate |
| orchestrators/guides/operator-considerations/operator-rationale.mdx | guide | evaluation | Cost/revenue analysis, viability thresholds, decision matrix | guide | (none) | choose |
| orchestrators/guides/operator-considerations/business-case.mdx | guide | evaluation | Commercial economics: service fees, gateway relationships | guide | (none) | choose |
| orchestrators/guides/operator-considerations/operator-impact.mdx | guide | evaluation | How orchestrators shape the protocol: governance, sovereignty | concept | (none) | explain |
| orchestrators/guides/operator-considerations/requirements.mdx | reference | reference | GPU support, NVENC limits, VRAM by pipeline, readiness checklist | reference | specification | reference |
| orchestrators/guides/staking-and-rewards/delegate-operations.mdx | guide | guide | Attract/retain delegators: evaluation criteria, ROI, commission | guide | (none) | operate |
| orchestrators/guides/staking-and-rewards/earning-model.mdx | concept | concept | ETH fees + LPT rewards, commission parameters | concept | (none) | explain |
| orchestrators/guides/staking-and-rewards/network-participation.mdx | guide | guide | Protocol governance: find polls, vote via CLI, verify | guide | (none) | operate |
| orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | guide | guide | LPT inflation, Reward() calling, gas, fee redemption | guide | (none) | operate |
| orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx | guide | (none) | STUB — placeholder for case studies | resource | (none) | learn |
| orchestrators/guides/roadmap-and-funding/funding-and-support.mdx | guide | (none) | STUB — placeholder for funding programmes | resource | (none) | orient |
| orchestrators/guides/tutorials/add-ai-to-video-node.mdx | tutorial | (none) | Tutorial: add AI to existing video orchestrator | tutorial | (none) | build |
| orchestrators/guides/tutorials/ai-earning-quickstart.mdx | tutorial | (none) | Tutorial: start earning from AI in &lt; 2 hours | tutorial | (none) | start |
| orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx | tutorial | (none) | End-to-end: gateway routes inference to orchestrator | tutorial | (none) | build |
| orchestrators/guides/tutorials/realtime-ai-tutorial.mdx | tutorial | (none) | Live video-to-video AI with ComfyStream/Cascade | tutorial | (none) | build |
| orchestrators/guides/tutorials/zero-to-first-reward.mdx | tutorial | (none) | End-to-end: install, configure, fund, activate, first reward | tutorial | (none) | start |
| orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx | tutorial | (none) | Verify framework with CPU-only BYOC, no GPU/wallet | tutorial | (none) | verify |
| orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx | (none) | (none) | Full BYOC CPU tutorial: gateway + orchestrator on one machine | tutorial | (none) | build |
| orchestrators/resources/community-guides.mdx | reference | reference | Curated external tutorials and walkthroughs | resource | (none) | learn |
| orchestrators/resources/arbitrum-exchanges.mdx | reference | reference | Exchanges supporting Arbitrum: ETH and LPT | reference | compendium | reference |
| orchestrators/resources/arbitrum-rpc.mdx | reference | reference | Arbitrum RPC endpoint options | reference | compendium | reference |
| orchestrators/resources/community-pools.mdx | reference | reference | Community orchestrator pool comparison | reference | compendium | reference |
| orchestrators/resources/glossary.mdx | glossary | reference | Terminology definitions | reference | compendium | reference |
| orchestrators/resources/faq.mdx | reference | faq | FAQ and troubleshooting | resource | (none) | troubleshoot |
| orchestrators/resources/gpu-support.mdx | reference | reference | NVIDIA GPU compatibility matrix | reference | specification | reference |
| orchestrators/resources/technical/cli-flags.mdx | reference | reference | CLI flags and gRPC field mapping | reference | specification | reference |

<CustomDivider />

## LPT

| Path | Current pageType | Current purpose | Actual Function | Rec. pageType | Rec. variant | Rec. purpose |
|---|---|---|---|---|---|---|
| lpt/token-portal.mdx | landing | landing | Hero portal with cards to LPT sub-sections | navigation | landing | orient |
| lpt/about/overview.mdx | overview | overview | Formal overview of LPT: architecture, staking, governance | overview | (none) | orient |
| lpt/about/purpose.mdx | concept | concept | Why LPT exists: security, rewards, governance | concept | (none) | explain |
| lpt/about/mechanics.mdx | concept | concept | Formal mathematical: bonding, unbonding, checkpointing | concept | (none) | explain |
| lpt/about/tokenomics.mdx | concept | concept | Economic model: inflation, bonding rate, distribution math | concept | (none) | explain |
| lpt/delegation/overview.mdx | overview | overview | Protocol-level delegation overview: stake, rewards, security | overview | (none) | orient |
| lpt/delegation/about-delegators.mdx | concept | concept | Formal delegator definition, incentives, risk model | concept | (none) | explain |
| lpt/delegation/delegation-economics.mdx | concept | concept | STUB — "under active development" | concept | (none) | explain |
| lpt/delegation/delegation-guide.mdx | guide | operations | Step-by-step contract-level: approve, bond, unbond. Actually an instruction. | instruction | (none) | operate |
| lpt/delegation/getting-started.mdx | guide | concept | Beginner delegation walkthrough with Explorer UI. Actually a quickstart. | instruction | quickstart | start |
| lpt/governance/overview.mdx | overview | overview | Stake-weighted governance: scope, voting power, treasury | overview | (none) | orient |
| lpt/governance/model.mdx | concept | concept | Formal governance: quorum, thresholds, timelock | concept | (none) | explain |
| lpt/governance/processes.mdx | concept | concept | Governance lifecycle: signaling, LIP drafting, execution. More of a guide. | guide | (none) | operate |
| lpt/resources/delegator-videos-and-blogs.mdx | reference | reference | Curated video/blog links for delegators | resource | (none) | learn |
| lpt/resources/exchanges.mdx | reference | reference | Exchanges where LPT is listed with trust scores | reference | compendium | reference |
| lpt/resources/lpt-eth-usage.mdx | reference | reference | LPT vs ETH payment roles with code refs. Actually a concept. | concept | (none) | explain |
| lpt/treasury/overview.mdx | overview | overview | Treasury as governance-controlled asset pool | overview | (none) | orient |
| lpt/treasury/allocations.mdx | concept | concept | Allocation accounting, evaluation, verification | concept | (none) | explain |
| lpt/treasury/proposals.mdx | concept | concept | Proposal structure + Steps for submitting. Mix of concept + instruction. | guide | (none) | operate |

<CustomDivider />

## COMMUNITY

| Path | Current pageType | Current purpose | Actual Function | Rec. pageType | Rec. variant | Rec. purpose |
|---|---|---|---|---|---|---|
| community/portal.mdx | landing | landing | Hero portal with cards to community sections | navigation | landing | orient |
| community/resources/faq.mdx | reference | faq | Accordion FAQ: Foundation, SPEs, voting, inflation | reference | compendium | reference |
| community/guides/guidelines.mdx | guide | concept | Code of conduct, participation norms | guide | (none) | operate |
| community/ecosystem/governance.mdx | guide | how_to | Foundation structure, SPE process, treasury, how to participate | guide | (none) | operate |
| community/community/livepeer-latest-topics.mdx | reference | reference | Ecosystem highlights + live forum feed | resource | (none) | update |
| community/ecosystem/roadmap.mdx | overview | overview | Embeds roadmap.livepeer.org iframe | overview | (none) | orient |
| community/connect/trending-topics.mdx | landing | landing | Aggregates YouTube, forum, Discord, X, blog feeds | resource | (none) | update |
| community/connect/events-and-streams.mdx | guide | operations | Luma events calendar embed | resource | (none) | learn |
| community/connect/connect-channels.mdx | guide | concept | Directory of community channels | reference | compendium | reference |
| community/connect/news-and-socials.mdx | landing | landing | STUB — empty headers only | resource | (none) | update |
| community/contribute/build-livepeer.mdx | guide | operations | STUB — single Info callout only | guide | (none) | build |
| community/contribute/contribute.mdx | landing | landing | STUB — single Info callout only | guide | (none) | build |
| community/contribute/opportunities.mdx | guide | operations | STUB — single Info callout only | resource | (none) | learn |
| community/resources/awesome-livepeer.mdx | reference | concept | Curated ecosystem tools by category | reference | compendium | reference |
| community/resources/dashboards.mdx | reference | landing | STUB — single card to GitHub | reference | compendium | reference |
| community/resources/guides.mdx | reference | concept | Cards organized by role: delegator, gateway, orchestrator | reference | compendium | reference |

<CustomDivider />

## RESOURCES

| Path | Current pageType | Current purpose | Actual Function | Rec. pageType | Rec. variant | Rec. purpose |
|---|---|---|---|---|---|---|
| resources/resources-portal.mdx | landing | landing | Nearly empty: "All resources in one place!" | navigation | landing | orient |
| resources/livepeer-glossary.mdx | glossary | glossary | STUB — bullet terms, no definitions | reference | compendium | reference |
| resources/media-kit.mdx | (none) | (none) | Logos, brand colors, download buttons | resource | (none) | reference |
| resources/references/contract-addresses.mdx | reference | reference | Full contract addresses for Arbitrum + Ethereum | reference | specification | reference |
| resources/lpt/delegator-dashboard.mdx | (none) | (none) | Card links to delegator dashboards | resource | (none) | operate |
| resources/changelog/changelog.mdx | changelog | changelog | Documentation changelog with Update entries | reference | changelog | update |
| resources/changelog/go-livepeer.mdx | changelog | changelog | go-livepeer release notes, well-populated | reference | changelog | update |
| resources/changelog/docs.mdx | changelog | changelog | Docs repo changelog, mostly empty stubs | reference | changelog | update |
| resources/changelog/explorer.mdx | changelog | changelog | STUB — empty | reference | changelog | update |
| resources/changelog/lips.mdx | changelog | changelog | STUB — empty | reference | changelog | update |
| resources/changelog/migration-guide.mdx | guide | operations | Migration guide for version upgrades | guide | (none) | operate |
| resources/documentation-guide/style-guide.mdx | (none) | (none) | Documentation style guide | reference | specification | reference |
| resources/documentation-guide/authoring-standard.mdx | (none) | (none) | Authoring standards for contributors | reference | specification | reference |
| resources/documentation-guide/documentation-guide.mdx | (none) | (none) | Guide for using the docs site | guide | (none) | learn |
| resources/documentation-guide/documentation-overview.mdx | (none) | (none) | Overview of docs structure | overview | (none) | orient |
| resources/documentation-guide/contribute-to-the-docs.mdx | (none) | (none) | How to contribute to documentation | instruction | (none) | build |
| resources/documentation-guide/snippets-inventory.mdx | (none) | (none) | Inventory of snippets folder | reference | compendium | reference |
| resources/documentation-guide/component-library/*.mdx (7 files) | (none) | (none) | Component library docs (overview, primitives, layout, content, data, page-structure) | reference | compendium | reference |

<CustomDivider />

## SOLUTIONS

| Path | Current pageType | Current purpose | Actual Function | Rec. pageType | Rec. variant | Rec. purpose |
|---|---|---|---|---|---|---|
| solutions/portal.mdx | landing | landing | Hero portal for solutions section | navigation | landing | orient |
| solutions/product-hub.mdx | landing | concept | STUB — mostly commented-out notes | navigation | landing | orient |
| solutions/solution-providers.mdx | overview | overview | STUB — empty | overview | (none) | orient |
| solutions/daydream/overview.mdx | overview | overview | Daydream toolkit: videos, links, description | overview | (none) | orient |
| solutions/daydream/quickstart.mdx | quickstart | (none) | Try app, build with API | instruction | quickstart | start |
| solutions/embody/overview.mdx | overview | overview | Embody Avatars product page with video | overview | (none) | orient |
| solutions/frameworks/overview.mdx | overview | overview | Frameworks video infrastructure overview | overview | (none) | orient |
| solutions/frameworks/quickstart.mdx | quickstart | (none) | Step-by-step: app or SDK | instruction | quickstart | start |
| solutions/streamplace/overview.mdx | overview | overview | Streamplace SPE: decentralized video with provenance | overview | (none) | orient |
| solutions/streamplace/introduction/streamplace-architecture.mdx | concept | concept | Architecture diagram: node, SDK, C2PA, Livepeer integration | concept | (none) | explain |
| solutions/streamplace/introduction/streamplace-funding-model.mdx | guide | operations | SPE funding model. Actually a concept. | concept | (none) | explain |
| solutions/streamplace/introduction/streamplace-guide.mdx | guide | operations | End-to-end workflow: ingest, segmentation, provenance | guide | (none) | build |
| solutions/streamplace/introduction/streamplace-integration.mdx | guide | operations | Developer integration guide | instruction | (none) | integrate |
| solutions/streamplace/introduction/streamplace-provenance.mdx | concept | concept | C2PA manifests, Ethereum signatures, metadata | concept | (none) | explain |
| solutions/livepeer-studio/overview.mdx | overview | overview | Studio product overview: APIs, dashboard, SDKs | overview | (none) | orient |
| solutions/livepeer-studio/quickstart.mdx | quickstart | tutorial | Create account, get API key, add video in 5 min | instruction | quickstart | start |
| solutions/livepeer-studio/player.mdx | guide | operations | Player component and embed usage | guide | (none) | build |
| solutions/livepeer-studio/client-use-cases.mdx | (none) | (none) | Client case studies | resource | (none) | learn |
| solutions/livepeer-studio/get-started/overview.mdx | overview | overview | Getting started landing with cards | instruction | overview | orient |
| solutions/livepeer-studio/get-started/authentication.mdx | concept | concept | API key auth. Actually a reference. | reference | (none) | configure |
| solutions/livepeer-studio/get-started/studio-cli.mdx | guide | operations | CLI scaffolding tool usage | instruction | setup | start |
| solutions/livepeer-studio/access-control/overview.mdx | overview | overview | Access control: webhooks or JWTs | overview | (none) | orient |
| solutions/livepeer-studio/access-control/jwt.mdx | guide | operations | JWT access control setup | instruction | (none) | configure |
| solutions/livepeer-studio/access-control/webhooks.mdx | guide | operations | Webhook access control setup | instruction | (none) | configure |
| solutions/livepeer-studio/analytics/overview.mdx | overview | overview | Analytics metrics overview | overview | (none) | orient |
| solutions/livepeer-studio/analytics/listen-to-events.mdx | guide | operations | Webhook event listening setup | instruction | (none) | configure |
| solutions/livepeer-studio/analytics/webhooks.mdx | guide | operations | Webhook configuration for events | instruction | (none) | configure |
| solutions/livepeer-studio/livestream/overview.mdx | overview | overview | Livestream concepts: streams, sessions, ingest | overview | (none) | orient |
| solutions/livepeer-studio/livestream/create-livestream.mdx | guide | operations | Create livestream via API | instruction | (none) | build |
| solutions/livepeer-studio/livestream/playback-livestream.mdx | guide | operations | Playback integration | instruction | (none) | build |
| solutions/livepeer-studio/livestream/clip-livestream.mdx | concept | concept | Clip creation. Actually an instruction. | instruction | (none) | build |
| solutions/livepeer-studio/livestream/multistream.mdx | guide | operations | Multistream to RTMP destinations | instruction | (none) | configure |
| solutions/livepeer-studio/livestream/optimize-latency.mdx | concept | concept | Latency optimization: WebRTC/HLS | guide | (none) | optimize |
| solutions/livepeer-studio/livestream/stream-health.mdx | concept | concept | Stream health monitoring concepts | concept | (none) | operate |
| solutions/livepeer-studio/livestream/stream-via-obs.mdx | guide | operations | OBS configuration for Studio | instruction | setup | configure |
| solutions/livepeer-studio/livestream/livestream-from-browser.mdx | guide | operations | WebRTC broadcast from browser | instruction | (none) | build |
| solutions/livepeer-studio/video-on-demand/overview.mdx | overview | overview | VOD concepts: assets, playback, recordings | overview | (none) | orient |
| solutions/livepeer-studio/video-on-demand/upload-asset.mdx | guide | operations | TUS/PUT upload instructions | instruction | (none) | build |
| solutions/livepeer-studio/video-on-demand/playback-asset.mdx | guide | operations | VOD playback integration | instruction | (none) | build |
| solutions/livepeer-studio/video-on-demand/encrypted-assets.mdx | guide | operations | Encrypted asset upload and playback | instruction | (none) | configure |
| solutions/livepeer-studio/video-on-demand/thumbnails-vod.mdx | guide | operations | Thumbnail extraction from VOD | instruction | (none) | build |
| solutions/livepeer-studio/video-on-demand/transcode-video.mdx | guide | operations | Transcode API usage with S3 storage | instruction | (none) | build |
| solutions/livepeer-studio/reference/overview.mdx | overview | overview | API reference landing page | reference | (none) | reference |
| solutions/livepeer-studio/reference/api.mdx | reference | reference | REST API basics: auth, usage | reference | specification | reference |
| solutions/livepeer-studio/reference/sdks.mdx | reference | reference | SDK overview: TypeScript, Go, Python, React | reference | compendium | reference |
| solutions/livepeer-studio/reference/managing-projects.mdx | reference | reference | Project org: staging, production, API keys | reference | (none) | configure |

<CustomDivider />

## Summary Statistics

| Section | Pages audited | Correctly typed | Mistyped | Missing pageType | Stubs/empty |
|---|---|---|---|---|---|
| Home | 17 | 5 | 7 | 5 | 5 |
| About | 31 | 18 | 5 | 8 | 5 |
| Gateways | ~95 | ~40 | ~35 | ~15 | ~8 |
| Developers | 44 | 12 | 18 | 10 | 4 |
| Orchestrators | ~83 | ~30 | ~35 | ~10 | ~5 |
| LPT | 19 | 10 | 5 | 0 | 1 |
| Community | 16 | 3 | 8 | 0 | 4 |
| Resources | ~25 | 8 | 5 | ~10 | ~5 |
| Solutions | ~35 | 12 | 18 | 3 | 2 |
| **TOTAL** | **~365** | **~138** | **~136** | **~61** | **~39** |

## Key Patterns Found

### Most common mistype: `guide` used for `instruction` pages
~50+ pages labeled `guide` are actually step-by-step task execution (install, configure, set up). These should be `instruction`. The Livepeer Studio section is worst — nearly every operational page is labeled `guide` but is actually an `instruction`.

### `landing` → `overview` with variant
Every `landing` page should become `overview` with variant `landing` or `navigation`.

### `faq`, `troubleshooting`, `glossary`, `changelog` → variants
All instances correctly map to the new model: faq/troubleshooting → `reference` compendium or `resource`, glossary → `reference` compendium, changelog → `reference` changelog.

### `quickstart` → `instruction` quickstart variant
All quickstart pages correctly map to `instruction` with quickstart variant.

### Duplicate content flagged
- `home/trending.mdx` ↔ `community/trending-topics.mdx`
- `home/roadmap.mdx` ↔ `community/roadmap.mdx`
- `about/resources/livepeer-glossary.mdx` ↔ `resources/livepeer-glossary.mdx`
- Several gateway technical/go-livepeer duplicates
- `solutions/daydream/overview1.mdx` and `solutions/frameworks/overview1.mdx` duplicate their overview.mdx siblings
