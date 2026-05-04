# LINK_TEST_REPORT

Operator note: external HTTP/HTTPS links are classified only and marked as `🟡 untested-external` in this phase.

## Run Metadata
- Timestamp: 2026-04-08T15:12:46.600Z
- Mode: full
- Strict: false (internal refs only)
- Files analyzed: 576
- Total extracted references: 4485
- Report JSON: operations/reports/health/page-links/page-links-audit.json

## Summary Counts

### By Link Type
| linkType | count |
|---|---:|
| empty | 105 |
| external-https | 2567 |
| internal-relative | 284 |
| internal-rooted | 1528 |
| mailto | 1 |

### By Status
| status | count |
|---|---:|
| 🟡 untested-external | 2567 |
| missing | 200 |
| ok | 1605 |
| ok-folder-route | 7 |
| skipped | 106 |

## External Validation

- Policy: classify
- Link types: navigational
- Timeout (ms): 10000
- Concurrency: 12
- Per-host concurrency: 2
- Retries: 1
- Eligible refs: 0
- Unique URLs: 0
- Unique hosts: 0

### External URL Classes (Unique URLs)
| class | count |
|---|---:|
| (none) | 0 |

## Hierarchical Inventory

### About
- Find Your Path (about/navigator.mdx)
- About Livepeer: Protocol & Network (about/portal.mdx)
- ### Design
  - ⚠️ Audience Personas Journey Design (about/_design/audience-personas-journey-design.md)
  - ⚠️ Ia Design (about/_design/ia-design.md)
- ### Concepts
  - Livepeer Core Concepts (about/concepts/core-concepts.mdx)
    - Imported MDX: snippets/composables/pages/about/concepts/protocol.mdx
    - Imported MDX: snippets/composables/pages/about/concepts/network.mdx
    - Imported MDX: snippets/composables/pages/about/concepts/actors.mdx
  - Livepeer Overview (about/concepts/livepeer-overview.mdx)
  - The Livepeer Stack and Mental Model (about/concepts/mental-model.mdx)
- ### Network
  - Actors Overview (about/network/actors.mdx)
  - Livepeer Demand Side (about/network/demand-side.mdx)
  - Livepeer Fee Flow (about/network/fee-flow.mdx)
  - Network Interfaces (about/network/interfaces.mdx)
  - Livepeer Job Lifecycle (about/network/job-lifecycle.mdx)
  - Livepeer Marketplace (about/network/marketplace.mdx)
  - Livepeer Network Overview (about/network/overview.mdx)
  - Livepeer Scaling (about/network/scaling.mdx)
  - Livepeer Supply Side (about/network/supply-side.mdx)
  - Network Technical Architecture (about/network/technical-architecture.mdx)
  - #### Livepeer Actors
    - Delegators (about/network/livepeer-actors/delegators.mdx)
    - Builders and End Users (about/network/livepeer-actors/end-users.mdx)
    - Gateways (about/network/livepeer-actors/gateways.mdx)
    - Orchestrators (about/network/livepeer-actors/orchestrators.mdx)
- ### Protocol
  - Blockchain Contracts (about/protocol/blockchain-contracts.mdx)
  - Core Mechanisms and Functions (about/protocol/core-mechanisms.mdx)
  - Protocol Design Philosophy (about/protocol/design-philosophy.mdx)
  - Livepeer Protocol Economics (about/protocol/economics.mdx)
  - Livepeer Governance Model (about/protocol/governance-model.mdx)
  - Livepeer Token (about/protocol/livepeer-token.mdx)
  - Protocol Overview (about/protocol/overview.mdx)
  - Technical Overview (about/protocol/technical-architecture.mdx)
  - Livepeer Treasury (about/protocol/treasury.mdx)
- ### Resources
  - FAQ (about/resources/faq.mdx)
  - About Livepeer – Glossary (about/resources/glossary.mdx)
  - ⚠️ Livepeer Glossary (about/resources/livepeer-glossary.mdx)
  - #### Knowledge Hub
    - Contributor Orientation (about/resources/knowledge-hub/contributor-orientation.mdx)
    - Evaluating Livepeer (about/resources/knowledge-hub/evaluating-livepeer.mdx)
    - Gateways Vs. Orchestrators: What’s the Difference? (about/resources/knowledge-hub/gateways-vs-orchestrators.mdx)
    - Livepeer Whitepaper (about/resources/knowledge-hub/livepeer-whitepaper.mdx)
  - #### Reference
    - Canonical Contract Addresses (about/resources/reference/livepeer-contract-addresses.mdx)
      - Imported MDX: snippets/composables/pages/canonical/livepeer-contract-addresses.mdx
    - Network Metrics (about/resources/reference/network-metrics.mdx)
    - Technical Roadmap (about/resources/reference/technical-roadmap.mdx)
- Unindexed Pages
  - (none)

### Community
- Livepeer Community Portal (community/portal.mdx)
- Community FAQ (community/resources/faq.mdx)
- ### Livepeer Community
  - Community Guidelines (community/guides/guidelines.mdx)
  - Governance & the Livepeer Foundation (community/ecosystem/governance.mdx)
  - What's Happening in Livepeer (community/community/livepeer-latest-topics.mdx)
  - Livepeer Foundation Roadmap (community/ecosystem/roadmap.mdx)
  - Trending Topics (community/connect/trending-topics.mdx)
- ### Livepeer Connect
  - Events & Live Streams (community/connect/events-and-streams.mdx)
  - Connect & Channels (community/connect/connect-channels.mdx)
  - News & Socials (community/connect/news-and-socials.mdx)
- ### Livepeer Contribute
  - Build Livepeer (community/contribute/build-livepeer.mdx)
  - Contribute to Livepeer (community/contribute/contribute.mdx)
  - Livepeer Opportunities (community/contribute/opportunities.mdx)
- ### Resources
  - Ecosystem Tools & Projects (community/resources/awesome-livepeer.mdx)
  - Dashboards (community/resources/dashboards.mdx)
  - Community Guides (community/resources/guides.mdx)
- Unindexed Pages
  - v2/community/resources/glossary.mdx

### Delegators
- Delegators Portal (delegators/portal.mdx)
- ### Design
  - ⚠️ Delegators Content (delegators/_design/delegators-content.md)
  - ⚠️ Delegators IA (delegators/_design/delegators-IA.md)
  - ⚠️ Notes Delegators (delegators/_design/notes-delegators.md)
  - ⚠️ Research Sources (delegators/_design/research-sources.md)
  - ⚠️ V4 Delegators Audience Design (delegators/_design/v4-delegators-audience-design.md)
- ### Concepts
  - LPT Mechanics (delegators/concepts/mechanics.mdx)
  - LPT Overview (delegators/concepts/overview.mdx)
  - Livepeer Token Purpose (delegators/concepts/purpose.mdx)
  - LPT Tokenomics (delegators/concepts/tokenomics.mdx)
- ### Delegation
  - Bridge LPT between Ethereum and Arbitrum (delegators/delegation/bridge-lpt-to-arbitrum.mdx)
  - Choose an Orchestrator (delegators/delegation/choose-an-orchestrator.mdx)
  - Delegation Economics (delegators/delegation/delegation-economics.mdx)
  - Manage Your Delegation (delegators/delegation/manage-your-delegation.mdx)
  - Delegation Overview (delegators/delegation/overview.mdx)
- ### Guides
  - #### Governance
    - Livepeer Governance Model (delegators/guides/governance/model.mdx)
    - Livepeer Governance Overview (delegators/guides/governance/overview.mdx)
    - Livepeer Governance Processes (delegators/guides/governance/processes.mdx)
  - #### Treasury
    - Treasury Allocations (delegators/guides/treasury/allocations.mdx)
    - Treasury Overview (delegators/guides/treasury/overview.mdx)
    - Treasury Proposals (delegators/guides/treasury/proposals.mdx)
- ### Resources
  - #### Compendium
    - Exchanges with LPT Listed (delegators/resources/compendium/exchanges.mdx)
    - LPT & ETH Token Functions (delegators/resources/compendium/lpt-eth-usage.mdx)
  - #### Knowledge Hub
    - Delegator Videos and Blogs (delegators/resources/knowledge-hub/delegator-videos-and-blogs.mdx)
- Unindexed Pages
  - v2/delegators/delegation/about-delegation.mdx
  - v2/delegators/delegation/delegate-your-lpt.mdx
  - v2/delegators/resources/glossary.mdx
  - v2/delegators/resources/reference/contracts.mdx
  - v2/delegators/resources/reference/protocol-parameters.mdx

### Developers
- Find your build path (developers/navigator.mdx)
- Livepeer Developer Portal (developers/portal.mdx)
- ### Design
  - ⚠️ Compass Artifact Developers (developers/_design/compass_artifact_developers.md)
  - ⚠️ Developer Content (developers/_design/developer-content.md)
  - ⚠️ Developer Sources (developers/_design/developer-sources.md)
  - ⚠️ Developers IA (developers/_design/developers-IA.md)
- ### Build
  - Bring Your Own Container (BYOC) (developers/build/byoc.mdx)
  - Build with ComfyStream (developers/build/comfystream.mdx)
  - AI Model Support (developers/build/model-support.mdx)
  - SDK integration guide (developers/build/sdk-gateway.mdx)
  - Is My AI Workload a Good Fit for Livepeer? (developers/build/workload-fit.mdx)
- ### Concepts
  - AI on Livepeer (developers/concepts/ai-on-livepeer.mdx)
  - The Livepeer Developer Landscape (developers/concepts/developer-stack.mdx)
  - The Livepeer Open Source Stack (developers/concepts/oss-stack.mdx)
  - When to Run Your Own Gateway (developers/concepts/running-a-gateway.mdx)
  - Video on Livepeer (developers/concepts/video-on-livepeer.mdx)
- ### Get Started
  - AI Jobs Quickstart (developers/get-started/ai-quickstart.mdx)
  - Quickstart: ComfyStream on Livepeer (developers/get-started/comfystream-quickstart.mdx)
  - Contributor quickstart (developers/get-started/contributor-quickstart.mdx)
  - Setup paths (developers/get-started/setup-paths.mdx)
  - Transcoding Jobs Quickstart (developers/get-started/transcoding-quickstart.mdx)
  - ⚠️ Video quickstart (developers/get-started/video-quickstart.mdx)
- ### Guides
  - Contribution Guide (developers/guides/contribution-guide.mdx)
  - Developer Guides (developers/guides/developer-guides.mdx)
  - Deploy a local testnet (developers/guides/local-testnet-deployment.mdx)
  - #### Ai
    - AI API authentication (developers/guides/ai/authentication.mdx)
    - AI production checklist (developers/guides/ai/production-checklist.mdx)
    - AI inference troubleshooting (developers/guides/ai/troubleshooting.mdx)
  - #### Opportunities
    - Bug Bounties (developers/guides/opportunities/bug-bounties.mdx)
    - Grants & Programmes (developers/guides/opportunities/grants-and-programmes.mdx)
    - Open Source Contributions (developers/guides/opportunities/oss-contributions.mdx)
    - Builder Opportunities (developers/guides/opportunities/overview.mdx)
    - RFPs & Treasury Proposals (developers/guides/opportunities/rfps-and-proposals.mdx)
  - #### Tutorials
    - Build an AI agent on Livepeer (developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx)
    - Store and play videos on IPFS (developers/guides/tutorials/ipfs-video-integration.mdx)
    - Token-gate videos with Lit Protocol (developers/guides/tutorials/token-gated-video.mdx)
  - #### Video
    - Video access control (developers/guides/video/access-control.mdx)
    - Create a livestream (developers/guides/video/create-livestream.mdx)
    - Monitor stream health (developers/guides/video/monitor-stream-health.mdx)
    - Video playback (developers/guides/video/playback.mdx)
    - Upload a video asset (developers/guides/video/upload-asset.mdx)
    - Video webhooks (developers/guides/video/webhooks.mdx)
- ### Resources
  - #### Compendium
    - Developer Help (developers/resources/compendium/developer-help.mdx)
    - Example Applications (developers/resources/compendium/example-applications.mdx)
    - Resources (developers/resources/compendium/resources.mdx)
  - #### Knowledge Hub
    - Awesome Livepeer (developers/resources/knowledge-hub/awesome-livepeer.mdx)
    - DeepWiki (developers/resources/knowledge-hub/deepwiki.mdx)
    - Livepeer Wiki (developers/resources/knowledge-hub/wiki.mdx)
  - #### Reference
    - APIs (developers/resources/reference/apis.mdx)
    - Pricing and rate limits (developers/resources/reference/pricing-rate-limits.mdx)
    - PyTrickle reference (developers/resources/reference/pytrickle.mdx)
    - SDKs (developers/resources/reference/sdks.mdx)
- Unindexed Pages
  - v2/developers/resources/glossary.mdx

### Gateways
- Gateway Navigator (gateways/navigator.mdx)
- Gateway Home Portal (gateways/portal.mdx)
- ### Concepts
  - Gateway Architecture (gateways/concepts/architecture.mdx)
  - Gateway Business Model (gateways/concepts/business-model.mdx)
  - Gateway Capabilities (gateways/concepts/capabilities.mdx)
  - The Gateway Role in the Livepeer Network (gateways/concepts/role.mdx)
- ### Guides
  - #### Advanced Operations
    - ⚠️ Orchestrator Selection & Tiering (gateways/guides/advanced-operations/dep-production-hardening.mdx)
    - Publishing a Gateway (gateways/guides/advanced-operations/gateway-discoverability.mdx)
    - Gateway Middleware (gateways/guides/advanced-operations/gateway-middleware.mdx)
    - Orchestrator Selection & Tiering (gateways/guides/advanced-operations/orchestrator-selection.mdx)
    - Scaling & Resource Management (gateways/guides/advanced-operations/scaling.mdx)
  - #### Deployment Details
    - Gateway Setup Options (gateways/guides/deployment-details/setup-options.mdx)
    - Gateway Requirements (gateways/guides/deployment-details/setup-requirements.mdx)
  - #### Monitoring And Tooling
    - Gateway Health Checks (gateways/guides/monitoring-and-tooling/health-checks.mdx)
    - Monitoring Setup (gateways/guides/monitoring-and-tooling/monitoring-setup.mdx)
    - On-Chain Metrics and Monitoring (gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx)
    - Tools & Dashboards (gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx)
    - Gateway Troubleshooting (gateways/guides/monitoring-and-tooling/troubleshooting.mdx)
  - #### Node Pipelines
    - AI Pipelines on Livepeer (gateways/guides/node-pipelines/ai-pipelines.mdx)
    - BYOC Pipelines (gateways/guides/node-pipelines/byoc-pipelines.mdx)
    - ⚠️ AI Inference Pipeline (gateways/guides/node-pipelines/dep-ai-inference.mdx)
    - AI and Job Pipelines Overview (gateways/guides/node-pipelines/guide.mdx)
    - Pipeline Configuration (gateways/guides/node-pipelines/pipeline-configuration.mdx)
    - Video & Transcoding Pipelines (gateways/guides/node-pipelines/video-pipelines.mdx)
  - #### Operator Considerations
    - Gateway Business Case (gateways/guides/operator-considerations/business-case.mdx)
    - Public and Commercial Gateways Operating on Livepeer (gateways/guides/operator-considerations/production-gateways.mdx)
  - #### Payments And Pricing
    - Payment Clearinghouses (gateways/guides/payments-and-pricing/clearinghouse-guide.mdx)
    - ⚠️ Payment Paths for Gateway Operators (gateways/guides/payments-and-pricing/dep-payment-guide.mdx)
    - Guide to Funding an On-Chain Gateway (gateways/guides/payments-and-pricing/funding-guide.mdx)
    - Payment Paths for Gateway Operators (gateways/guides/payments-and-pricing/payment-guide.mdx)
    - Gateway Pricing Strategy (gateways/guides/payments-and-pricing/pricing-strategy.mdx)
    - Remote Signers (gateways/guides/payments-and-pricing/remote-signers.mdx)
    - ⚠️ To Include (gateways/guides/payments-and-pricing/to-include.md)
  - #### Roadmap And Funding
    - Gateway Showcase (gateways/guides/roadmap-and-funding/gateway-showcase.mdx)
    - NaaP & Multi-Tenancy (gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx)
    - Operator Support & Programmes (gateways/guides/roadmap-and-funding/operator-support.mdx)
    - SPE Grant Model for Gateway Operators (gateways/guides/roadmap-and-funding/spe-grant-model.mdx)
  - #### Tutorials
    - BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain) (gateways/guides/tutorials/byoc-cpu-tutorial.mdx)
    - Your First Gateway: Off-chain Transcoding (gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx)
    - Add AI: BYOC CPU Pipeline (gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx)
    - Go Production: On-chain, GPU, and Network (gateways/guides/tutorials/tutorial-3-go-production.mdx)
    - ⚠️ Tutorial Sources (gateways/guides/tutorials/tutorial-sources.md)
    - ⚠️ Tutorials Resources (gateways/guides/tutorials/tutorials-resources.mdx)
    - ⚠️ Verify Notes (gateways/guides/tutorials/verify-notes.md)
    - ##### Stubs
      - ⚠️ Add AI: BYOC CPU Pipeline (gateways/guides/tutorials/stubs/tutorial-byoc-cpu-pipeline.mdx)
      - ⚠️ Go Production: On-chain, GPU, and Network Connect (gateways/guides/tutorials/stubs/tutorial-go-production.mdx)
      - ⚠️ Your First Gateway: Off-chain Transcoding Test (gateways/guides/tutorials/stubs/tutorial-offchain-transcoding-test.mdx)
- ### Quickstart
  - Get AI to Setup the Gateway (gateways/quickstart/AI-prompt.mdx)
  - Run a Gateway: Quickstart Guide (gateways/quickstart/gateway-setup.mdx)
    - Imported MDX: v2/gateways/quickstart/views/docker/dockerOffChainTab.mdx
    - Imported MDX: v2/gateways/quickstart/views/docker/dockerOnChainTab.mdx
    - Imported MDX: v2/gateways/quickstart/views/linux/linuxOffChainTab.mdx
    - Imported MDX: v2/gateways/quickstart/views/linux/linuxOnChainTab.mdx
    - Imported MDX: v2/gateways/quickstart/views/windows/windowsOffChainTab.mdx
    - Imported MDX: v2/gateways/quickstart/views/windows/windowsOnChainTab.mdx
    - Imported MDX: v2/gateways/quickstart/groups/docker/dockerSupport.mdx
    - Imported MDX: v2/gateways/quickstart/groups/linux/linuxSupport.mdx
    - Imported MDX: v2/gateways/quickstart/groups/linux/macSupport.mdx
  - #### Groups
    - ##### Docker
      - ⚠️ Docker Support (gateways/quickstart/groups/docker/dockerSupport.mdx)
    - ##### Linux
      - ⚠️ Linux Supported Distributions & Information (gateways/quickstart/groups/linux/linuxSupport.mdx)
      - ⚠️ MacOS Support (gateways/quickstart/groups/linux/macSupport.mdx)
  - #### Views
    - ##### Docker
      - ⚠️ Docker Off-Chain Gateway Quickstart TAB VIEW (gateways/quickstart/views/docker/dockerOffChainTab.mdx)
      - ⚠️ Docker On-Chain Gateway Quickstart TAB VIEW (gateways/quickstart/views/docker/dockerOnChainTab.mdx)
    - ##### Linux
      - ⚠️ Linu/MacOS Off-Chain Gateway Quickstart TAB VIEW (gateways/quickstart/views/linux/linuxOffChainTab.mdx)
      - ⚠️ Linu/MacOS Off-Chain Gateway Quickstart TAB VIEW (gateways/quickstart/views/linux/linuxOnChainTab.mdx)
    - ##### Windows
      - ⚠️ Windows Off-Chain Gateway Quickstart TAB VIEW (gateways/quickstart/views/windows/windowsOffChainTab.mdx)
      - ⚠️ Windows On-Chain Gateway Quickstart TAB VIEW (gateways/quickstart/views/windows/windowsOnChainTab.mdx)
- ### Resources
  - #### Compendium
    - Arbitrum Exchange Reference (gateways/resources/compendium/arbitrum-exchanges.mdx)
    - Arbitrum RPCs (gateways/resources/compendium/arbitrum-rpc.mdx)
    - Livepeer Exchanges (gateways/resources/compendium/livepeer-exchanges.mdx)
  - #### Knowledge Hub
    - Gateway guides (gateways/resources/knowledge-hub/guides.mdx)
    - Gateway help (gateways/resources/knowledge-hub/help.mdx)
    - Gateway resources (gateways/resources/knowledge-hub/resources.mdx)
  - #### Reference
    - Gateway FAQ (gateways/resources/reference/faq.mdx)
    - ##### Go Livepeer
      - Bandwidth Requirements (gateways/resources/reference/go-livepeer/bandwidth-requirements.mdx)
      - CLI Reference (gateways/resources/reference/go-livepeer/cli-reference.mdx)
      - GPU Support (gateways/resources/reference/go-livepeer/gpu-support.mdx)
      - Hardware Requirements (gateways/resources/reference/go-livepeer/hardware-requirements.mdx)
      - Prometheus Metrics (gateways/resources/reference/go-livepeer/prometheus-metrics.mdx)
    - ##### Technical
      - Gateway CLI Commands (gateways/resources/reference/technical/cli-commands.mdx)
      - Gateway Configuration Flags (gateways/resources/reference/technical/configuration-flags.mdx)
      - Canonical Contract Addresses (gateways/resources/reference/technical/contract-addresses.mdx)
        - Imported MDX: snippets/composables/pages/canonical/livepeer-contract-addresses.mdx
      - ⚠️ Orchestrator Offerings Reference (gateways/resources/reference/technical/orchestrator-offerings.mdx)
      - Technical Architecture (gateways/resources/reference/technical/technical-architecture.mdx)
      - ###### Api Reference
        - ⚠️ AI Worker API (gateways/resources/reference/technical/api-reference/_delete-all-api.mdx)
        - ⚠️ AI API (gateways/resources/reference/technical/api-reference/ai-worker-api.mdx)
        - ⚠️ Hardware Info (gateways/resources/reference/technical/api-reference/hardware-info.mdx)
        - ⚠️ Hardware Stats (gateways/resources/reference/technical/api-reference/hardware-stats.mdx)
        - ⚠️ Health (gateways/resources/reference/technical/api-reference/health.mdx)
      - ###### AI API
        - AI API Portal (gateways/resources/reference/technical/api-reference/AI-API/ai.mdx)
        - Audio to Text (gateways/resources/reference/technical/api-reference/AI-API/audio-to-text.mdx)
        - Info (gateways/resources/reference/technical/api-reference/AI-API/hardware-info.mdx)
        - Stats (gateways/resources/reference/technical/api-reference/AI-API/hardware-stats.mdx)
        - Health (gateways/resources/reference/technical/api-reference/AI-API/health.mdx)
        - Image to Image (gateways/resources/reference/technical/api-reference/AI-API/image-to-image.mdx)
        - Image to Text (gateways/resources/reference/technical/api-reference/AI-API/image-to-text.mdx)
        - Image to Video (gateways/resources/reference/technical/api-reference/AI-API/image-to-video.mdx)
        - Live Video to Video (gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video.mdx)
        - LLM (gateways/resources/reference/technical/api-reference/AI-API/llm.mdx)
        - Segment Anything 2 (gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2.mdx)
        - Text to Image (gateways/resources/reference/technical/api-reference/AI-API/text-to-image.mdx)
        - Text to Speech (gateways/resources/reference/technical/api-reference/AI-API/text-to-speech.mdx)
        - Upscale (gateways/resources/reference/technical/api-reference/AI-API/upscale.mdx)
      - ###### AI Worker
        - ⚠️ AI API (gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api.mdx)
      - ###### CLI HTTP
        - Activate Orchestrator (gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator.mdx)
        - ⚠️ Bond (gateways/resources/reference/technical/api-reference/CLI-HTTP/bond.mdx)
        - CLI HTTP API API Portal (gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx)
        - ⚠️ Protocolparameters (gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters.mdx)
        - Rebond (gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond.mdx)
        - ⚠️ Registeredorchestrators (gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators.mdx)
        - Reward (gateways/resources/reference/technical/api-reference/CLI-HTTP/reward.mdx)
        - Set Broadcast Config (gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig.mdx)
        - Set Max Price For Capability (gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx)
        - Sign Message (gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage.mdx)
        - ⚠️ Status (gateways/resources/reference/technical/api-reference/CLI-HTTP/status.mdx)
        - Transfer Tokens (gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens.mdx)
        - Unbond (gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond.mdx)
      - ###### Go Livepeer
        - ⚠️ CLI Reference (gateways/resources/reference/technical/go-livepeer/cli-reference.mdx)
        - ⚠️ GPU Support (gateways/resources/reference/technical/go-livepeer/gpu-support.mdx)
        - ⚠️ Hardware Requirements (gateways/resources/reference/technical/go-livepeer/hardware-requirements.mdx)
        - ⚠️ Prometheus Metrics (gateways/resources/reference/technical/go-livepeer/prometheus-metrics.mdx)
- ### Setup
  - Gateway Operators Guide (gateways/setup/guide.mdx)
  - ⚠️ Gateway Transcoding Guide (gateways/setup/transcoding.mdx)
  - #### Configure
    - AI Configuration (gateways/setup/configure/ai-configuration.mdx)
    - Configuration Overview (gateways/setup/configure/configuration-overview.mdx)
    - ⚠️ Configuration Reference (gateways/setup/configure/configuration-reference.mdx)
    - Configure AI & Video Dual Gateway Services (gateways/setup/configure/dual-configuration.mdx)
    - ⚠️ Dual Docker Configuration (gateways/setup/configure/dual-docker.mdx)
    - ⚠️ Video Configuration (gateways/setup/configure/video-configuration-view.mdx)
    - Video Configuration (gateways/setup/configure/video-configuration.mdx)
  - #### Connect
    - Discover & Connect Marketplace Compute Services (gateways/setup/connect/connect-with-offerings.mdx)
    - Discover Marketplace Offerings (gateways/setup/connect/discover-offerings.mdx)
    - Livepeer Marketplace Overview (gateways/setup/connect/lp-marketplace.mdx)
  - #### Install
    - Docker Install (gateways/setup/install/docker-install.mdx)
    - Installation Overview (gateways/setup/install/install-overview.mdx)
    - Linux Install (gateways/setup/install/linux-install.mdx)
    - Windows Install (gateways/setup/install/windows-install.mdx)
  - #### Monitor
    - Monitor & Optimise Gateway Services (gateways/setup/monitor/monitor-and-optimise.mdx)
  - #### Publish
    - ⚠️ Discover & Connect Marketplace Compute Services (gateways/setup/publish/connect-with-offerings.mdx)
  - #### Requirements
    - Gateway Node Requirements (gateways/setup/requirements/setup.mdx)
    - ##### On Chain Setup
      - ⚠️ Bridge LPT to Arbitrum (gateways/setup/requirements/on-chain-setup/bridge-lpt-to-arbitrum.mdx)
      - On-Chain Setup Requirements (gateways/setup/requirements/on-chain-setup/on-chain.mdx)
        - Imported MDX: snippets/composables/pages/shared/eth-account-setup.mdx
  - #### V1
    - ⚠️ Configure Transcoding Options (gateways/setup/v1/transcoding-options.mdx)
- Unindexed Pages
  - v2/gateways/custom/composables/linux/linuxSupport.mdx
  - v2/gateways/custom/composables/linux/macSupport.mdx
  - v2/gateways/custom/views/quickstart/docker/dockerOffChainTab.mdx
  - v2/gateways/custom/views/quickstart/docker/dockerOnChainTab.mdx
  - v2/gateways/custom/views/quickstart/linux/linuxOffChainTab.mdx
  - v2/gateways/custom/views/quickstart/linux/linuxOnChainTab.mdx
  - v2/gateways/custom/views/quickstart/windows/windowsOffChainTab.mdx
  - v2/gateways/custom/views/quickstart/windows/windowsOnChainTab.mdx
  - v2/gateways/custom/views/setup/configure/ai-configuration-content.mdx
  - v2/gateways/custom/views/setup/configure/dual-configuration-content.mdx
  - v2/gateways/custom/views/setup/configure/video-configuration-content.mdx
  - v2/gateways/custom/views/setup/connect/docker-connect-content.mdx
  - v2/gateways/custom/views/setup/connect/linux-connect-content.mdx
  - v2/gateways/custom/views/setup/connect/windows-connect-content.mdx
  - v2/gateways/custom/views/setup/install/docker-install-content.mdx
  - v2/gateways/custom/views/setup/install/linux-install-content-copy.mdx
  - v2/gateways/custom/views/setup/install/linux-install-content.mdx
  - v2/gateways/custom/views/setup/install/windows-install-content.mdx
  - v2/gateways/custom/views/setup/monitor/docker-monitor-content.mdx
  - v2/gateways/custom/views/setup/monitor/linux-monitor-content.mdx
  - v2/gateways/custom/views/setup/monitor/windows-monitor-content.mdx
  - v2/gateways/custom/views/setup/verify/docker-verify-content.mdx
  - v2/gateways/custom/views/setup/verify/linux-verify-content.mdx
  - v2/gateways/custom/views/setup/verify/windows-verify-content.mdx
  - v2/gateways/guides/deployment-details/gwid-single-click-deploy.mdx
  - v2/gateways/guides/payments-and-pricing/fund-gateway.mdx
  - v2/gateways/guides/payments-and-pricing/pricing-configuration.mdx
  - v2/gateways/resources/deployment-terms.mdx
  - v2/gateways/resources/glossary.mdx
  - v2/gateways/setup/configure.mdx
  - v2/gateways/setup/connect.mdx
  - v2/gateways/setup/install.mdx
  - v2/gateways/setup/monitor.mdx
  - v2/gateways/setup/monitor/monitoring-setup.mdx
  - v2/gateways/setup/prepare.mdx
  - v2/gateways/setup/prepare/on-chain-setup.mdx
  - v2/gateways/setup/transcoding/transcoding-options.mdx
  - v2/gateways/setup/transcoding/transcoding.mdx
  - v2/gateways/setup/verify.mdx

### Home
- ⚠️ Get Started with Livepeer (home/get-started.mdx)
- Welcome to Livepeer Mission Control (home/mission-control.mdx)
- Livepeer Primer (home/primer.mdx)
- ⚠️ Trending Topics (home/trending.mdx)
- ### About Livepeer
  - The Livepeer Advantage (home/about/benefits.mdx)
  - Livepeer Organisational Structure (home/about/ecosystem.mdx)
  - Livepeer Evolution (home/about/evolution.mdx)
  - What's Next for Livepeer? (home/about/roadmap.mdx)
  - Livepeer Story (home/about/vision.mdx)
- ### Get Started
  - ⚠️ Livepeer AI (quickstart) (home/get-started/ai-pipelines.mdx)
  - ⚠️ Use Livepeer (home/get-started/build-on-livepeer.mdx)
  - ⚠️ Stream Video (quickstart) (home/get-started/stream-video.mdx)
  - ⚠️ Use Livepeer (home/get-started/use-livepeer.mdx)
- ### Solutions
  - Key Applications for Livepeer (home/solutions/applications.mdx)
  - ⚠️ DeAI & Video Landscape (home/solutions/landscape.mdx)
  - Creative Projects Built with Livepeer (home/solutions/showcase.mdx)
  - Industry Verticals (home/solutions/verticals.mdx)
- Unindexed Pages
  - v2/home/resources/glossary.mdx
  - v2/home/solutions/trending.mdx

### Internal
- ⚠️ General Livepeer Definitions (internal/definitions.mdx)
- ⚠️ Ecosystem (internal/ecosystem.mdx)
- ⚠️ Overview (internal/internal-overview.mdx)
- ⚠️ References (internal/references.mdx)
- ### Assets
  - #### Transcripts
    - ⚠️ Y Combinator Startup Podcast (internal/assets/transcripts/ycomb.mdx)
    - ##### A16z
      - ⚠️ Inferact: Building the Infrastructure That Runs Modern AI (internal/assets/transcripts/a16z/2026-01-22-inferact-building-the-infrastructure-that-runs-modern-ai.mdx)
      - ⚠️ README (internal/assets/transcripts/a16z/README.md)
- ### Overview
  - Overview (internal/overview/about.mdx)
  - Docs Philosophy (internal/overview/docs-philosophy.mdx)
    - Imported MDX: snippets/composables/pages/internal/docs-philosophy.mdx
  - Governance Pipeline (internal/overview/governance-pipeline.mdx)
  - Documentation Governance (internal/overview/governance.mdx)
  - Personas (internal/overview/personas.mdx)
  - Strategic Alignment (internal/overview/strategic-alignment.mdx)
- ### Reports
  - #### Navigation Links
    - Docs Navigation Route Report (internal/reports/navigation-links/docs-navigation.md)
    - V2 Link Audit Report (internal/reports/navigation-links/v2-link-audit.md)
  - #### Page Audits
    - All Pages Audit Simple (File Checks) (internal/reports/page-audits/audit-all-pages-simple.md)
    - All Pages Audit (Legacy Browser Script) (internal/reports/page-audits/audit-all-pages.md)
    - All Pages Audit (Python) (internal/reports/page-audits/audit-python.md)
    - Domain Page Load Audit Report (internal/reports/page-audits/domain-pages-audit.md)
    - All Pages Comprehensive Browser Report (internal/reports/page-audits/test-all-pages-comprehensive.md)
  - #### Quality Accessibility
    - V2 Usefulness Audit Summary (internal/reports/quality-accessibility/audit-v2-usefulness.md)
    - V2 WCAG Audit Report (internal/reports/quality-accessibility/v2-wcag-audit.md)
    - WCAG Repair Common Report (internal/reports/quality-accessibility/wcag-repair-common.md)
  - #### Repo Ops
    - Script Audit Report (internal/reports/repo-ops/audit-scripts.md)
    - ⚠️ Errors Audit (internal/reports/repo-ops/audit-tasks-folders--errors-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Plan Audit (internal/reports/repo-ops/audit-tasks-folders--plan-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Plan Complete Audit (internal/reports/repo-ops/audit-tasks-folders--plan-complete-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Plan Migration Audit (internal/reports/repo-ops/audit-tasks-folders--plan-migration-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Plan Retrospective Audit (internal/reports/repo-ops/audit-tasks-folders--plan-retrospective-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Plan Rfp Audit (internal/reports/repo-ops/audit-tasks-folders--plan-rfp-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Audit (internal/reports/repo-ops/audit-tasks-folders--reports-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Docs Index Audit (internal/reports/repo-ops/audit-tasks-folders--reports-docs-index-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Legacy Unmanaged Audit (internal/reports/repo-ops/audit-tasks-folders--reports-legacy-unmanaged-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Legacy Unmanaged Ungenerated Audit (internal/reports/repo-ops/audit-tasks-folders--reports-legacy-unmanaged-ungenerated-audit.md)
    - ⚠️ Navigation Links Audit (internal/reports/repo-ops/audit-tasks-folders--reports-navigation-links-audit.md)
    - ⚠️ Page Audits (internal/reports/repo-ops/audit-tasks-folders--reports-page-audits-audit.md)
    - ⚠️ Quality Accessibility Audit (internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-audit.md)
    - ⚠️ Quality Accessibility Docs Usefulness Audit (internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Quality Accessibility Docs Usefulness Full Run 2026 02 23 Audit (internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-full-run-2026-02-23-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Quality Accessibility Docs Usefulness Smoke Audit (internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-smoke-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Quality Accessibility Docs Usefulness Smoke2 Audit (internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-smoke2-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Quality Accessibility Docs Usefulness Smoke3 Audit (internal/reports/repo-ops/audit-tasks-folders--reports-quality-accessibility-docs-usefulness-smoke3-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Repo Ops Audit (internal/reports/repo-ops/audit-tasks-folders--reports-repo-ops-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Reports Rfp Deliverable I R1 R15 2026 02 24 Replan Audit (internal/reports/repo-ops/audit-tasks-folders--reports-rfp-deliverable-i-r1-r15-2026-02-24-replan-audit.md)
    - ⚠️ Scripts Audit (internal/reports/repo-ops/audit-tasks-folders--scripts-audit.md)
    - ⚠️ Legacy Alias: Audit Tasks Folders Tasks Root Audit (internal/reports/repo-ops/audit-tasks-folders--tasks-root-audit.md)
    - Errors Audit (internal/reports/repo-ops/errors-audit.md)
    - Navigation Links Audit (internal/reports/repo-ops/reports-navigation-links-audit.md)
    - Page Audits (internal/reports/repo-ops/reports-page-audits-audit.md)
    - Quality Accessibility Audit (internal/reports/repo-ops/reports-quality-accessibility-audit.md)
    - Quality Accessibility Docs Usefulness Audit (internal/reports/repo-ops/reports-quality-accessibility-docs-usefulness-audit.md)
    - Scripts Audit (internal/reports/repo-ops/scripts-audit.md)
- ### Rfp
  - RFP Aims Implementation (internal/rfp/aims.mdx)
  - Deliverables (internal/rfp/deliverables.mdx)
  - Outcomes (internal/rfp/outcomes.mdx)
  - Problem Statements (internal/rfp/problem-statements.mdx)
  - RFP Report (internal/rfp/report.mdx)
    - Imported MDX: snippets/composables/pages/internal/docs-philosophy.mdx
  - #### Reports
    - ⚠️ Livepeer Docs V2 Report (internal/rfp/reports/livepeer-docs-v2-report.md)
- Unindexed Pages
  - (none)

### Orchestrators
- Find Your Path (orchestrators/navigator.mdx)
- Orchestrator Portal (orchestrators/portal.mdx)
- ### Concepts
  - Orchestrator Architecture (orchestrators/concepts/architecture.mdx)
  - Orchestrator Capabilities (orchestrators/concepts/capabilities.mdx)
  - Orchestrator Incentive Model (orchestrators/concepts/incentive-model.mdx)
  - The Orchestrator Role in the Livepeer Network (orchestrators/concepts/role.mdx)
  - #### Composable
    - ⚠️ Orchestrator Role Diagram (orchestrators/concepts/composable/orchestratorRole.mdx)
- ### Guides
  - #### Advanced Operations
    - ⚠️ Advanced Sources (orchestrators/guides/advanced-operations/advanced-sources.md)
    - ⚠️ Advanced Operations Guide (orchestrators/guides/advanced-operations/dep-guide.mdx)
    - Gateway and Orchestrator Interface (orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx)
    - Gateway Relationships (orchestrators/guides/advanced-operations/gateway-relationships.mdx)
    - Pool Operators (orchestrators/guides/advanced-operations/pool-operators.mdx)
    - Scale Operations (orchestrators/guides/advanced-operations/scale-operations.mdx)
  - #### Ai And Job Workloads
    - AI Inference Operations (orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx)
    - ⚠️ Ai Sources (orchestrators/guides/ai-and-job-workloads/ai-sources.md)
    - Audio and Vision Pipelines (orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx)
    - Diffusion Pipeline Setup (orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx)
    - LLM Pipeline Setup (orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx)
    - Model and Demand Reference (orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx)
    - Model Hosting (orchestrators/guides/ai-and-job-workloads/model-hosting.mdx)
    - Cascade Setup (orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx)
    - Video Transcoding Operations (orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx)
    - Workload Options (orchestrators/guides/ai-and-job-workloads/workload-options.mdx)
  - #### Config And Optimisation
    - AI Model Management (orchestrators/guides/config-and-optimisation/ai-model-management.mdx)
    - Capacity Planning (orchestrators/guides/config-and-optimisation/capacity-planning.mdx)
    - Pricing Strategy (orchestrators/guides/config-and-optimisation/pricing-strategy.mdx)
    - Reward Call Tuning (orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx)
  - #### Deployment Details
    - Dual Mode Configuration (orchestrators/guides/deployment-details/dual-mode-configuration.mdx)
    - Join a Pool (orchestrators/guides/deployment-details/join-a-pool.mdx)
    - Join a Pool (orchestrators/guides/deployment-details/new-join-a-pool.mdx)
    - Orchestrator-Transcoder Split Setup (orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx)
    - Setup Options (orchestrators/guides/deployment-details/setup-options.mdx)
    - Siphon Split Setup (orchestrators/guides/deployment-details/siphon-setup.mdx)
    - ##### Reports Audits
      - ⚠️ Notes (orchestrators/guides/deployment-details/reports-audits/notes.md)
      - ⚠️ Setup Sources (orchestrators/guides/deployment-details/reports-audits/setup-sources.md)
  - #### Monitoring And Tooling
    - Explorer Operations (orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx)
    - Metrics and Alerting (orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx)
    - ⚠️ Monitoring Sources (orchestrators/guides/monitoring-and-tooling/monitoring-sources.md)
    - Operator Toolbox (orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx)
    - Troubleshooting (orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx)
  - #### Operator Considerations
    - The Commercial Case (orchestrators/guides/operator-considerations/business-case.mdx)
    - ⚠️ Feasibilits Sources (orchestrators/guides/operator-considerations/feasibilits-sources.md)
    - Operator Impact (orchestrators/guides/operator-considerations/operator-impact.mdx)
    - Operator Rationale (orchestrators/guides/operator-considerations/operator-rationale.mdx)
    - Requirements (orchestrators/guides/operator-considerations/requirements.mdx)
  - #### Payments And Pricing
    - Payment Receipts (orchestrators/guides/payments-and-pricing/payment-receipts.mdx)
    - Payments (orchestrators/guides/payments-and-pricing/payments.mdx)
  - #### Roadmap And Funding
    - Funding and Support (orchestrators/guides/roadmap-and-funding/funding-and-support.mdx)
    - Orchestrator Profiles (orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx)
  - #### Staking And Rewards
    - Delegate Operations (orchestrators/guides/staking-and-rewards/delegate-operations.mdx)
    - Earning Model (orchestrators/guides/staking-and-rewards/earning-model.mdx)
    - Network Participation (orchestrators/guides/staking-and-rewards/network-participation.mdx)
    - Reward Mechanics (orchestrators/guides/staking-and-rewards/reward-mechanics.mdx)
  - #### Tutorials
    - Add AI to a Video Node (orchestrators/guides/tutorials/add-ai-to-video-node.mdx)
    - AI Earning Quickstart (orchestrators/guides/tutorials/ai-earning-quickstart.mdx)
    - BYOC CPU Smoke Test (orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx)
    - ⚠️ BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain) (orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx)
    - Full AI Pipeline Tutorial (orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx)
    - Realtime AI Tutorial (orchestrators/guides/tutorials/realtime-ai-tutorial.mdx)
    - Zero to First Reward (orchestrators/guides/tutorials/zero-to-first-reward.mdx)
    - ##### Gateway Tutorial Composable Pages
      - ###### Stubs
        - ⚠️ Add AI: BYOC CPU Pipeline (orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx)
        - ⚠️ Go Production: On-chain, GPU, and Network Connect (orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx)
        - ⚠️ Your First Gateway: Off-chain Transcoding Test (orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx)
- ### Quickstart
  - Add AI to Your Node (orchestrators/quickstart/AI-prompt-start.mdx)
  - ⚠️ How to Get Started (orchestrators/quickstart/dep-x-setup-paths.mdx)
  - Orchestrator Quickstart (orchestrators/quickstart/guide.mdx)
  - Quickstart Tutorial (orchestrators/quickstart/tutorial.mdx)
  - Video Transcoding Quickstart (orchestrators/quickstart/video-transcoding.mdx)
    - Imported MDX: snippets/composables/pages/shared/eth-account-setup.mdx
- ### Resources
  - ⚠️ Orchestrator Guides (orchestrators/resources/x-guides.mdx)
  - ⚠️ X-help (orchestrators/resources/x-help.mdx)
  - ⚠️ Orchestrator Payments (orchestrators/resources/x-payments.mdx)
  - #### Knowledge Hub
    - Community Guides & Tutorials (orchestrators/resources/knowledge-hub/community-guides.mdx)
    - Community Orchestrator Pools (orchestrators/resources/knowledge-hub/community-pools.mdx)
  - #### Reference
    - Arbitrum Exchanges (orchestrators/resources/reference/arbitrum-exchanges.mdx)
    - Arbitrum RPCs (orchestrators/resources/reference/arbitrum-rpc.mdx)
    - FAQ and Troubleshooting (orchestrators/resources/reference/faq.mdx)
    - GPU Support Matrix (orchestrators/resources/reference/gpu-support.mdx)
    - ##### Technical
      - CLI Flags Reference (orchestrators/resources/reference/technical/cli-flags.mdx)
      - Canonical Contract Addresses (orchestrators/resources/reference/technical/contract-addresses.mdx)
        - Imported MDX: snippets/composables/pages/canonical/livepeer-contract-addresses.mdx
      - ⚠️ X-changelog (orchestrators/resources/reference/technical/x-changelog.mdx)
      - ⚠️ Support Status (orchestrators/resources/reference/technical/x-support-status.mdx)
      - ⚠️ Troubleshooting (orchestrators/resources/reference/technical/x-troubleshooting.mdx)
- ### Setup
  - Configuring Your Orchestrator (orchestrators/setup/configure.mdx)
  - Connect to Arbitrum (orchestrators/setup/connect.mdx)
  - Setup Overview (orchestrators/setup/guide.mdx)
  - Monitoring Your Orchestrator Setup (orchestrators/setup/monitor.mdx)
  - Operational and Hardware Requirements for Orchestrators (orchestrators/setup/prepare.mdx)
  - Install go-livepeer (orchestrators/setup/install.mdx)
  - ⚠️ Setting up an Orchestrator (orchestrators/setup/s-guide.mdx)
  - Verify Your Setup (orchestrators/setup/verify.mdx)
  - ⚠️ Testing Your Orchestrator Setup (orchestrators/setup/x-test.mdx)
- Unindexed Pages
  - v2/orchestrators/resources/glossary.mdx
  - v2/orchestrators/resources/operator-terms.mdx

### Resources
- Help Centre (resources/help-centre.mdx)
- ⚠️ Resource Hub (resources/portal.mdx)
- ⚠️ Resource Portal (resources/portal.mdx)
- ### Changelog
  - Changelog (resources/changelog/changelog.mdx)
  - Livepeer Docs Changelog (resources/changelog/docs.mdx)
  - ⚠️ Migration Guide (resources/changelog/migration-guide.mdx)
  - #### Ai Compute
    - AI Runner Changelog (resources/changelog/ai-compute/ai-runner.mdx)
    - ComfyStream Changelog (resources/changelog/ai-compute/comfystream.mdx)
    - pytrickle Changelog (resources/changelog/ai-compute/pytrickle.mdx)
  - #### Apis Sdks
    - Livepeer AI Go SDK Changelog (resources/changelog/apis-sdks/livepeer-ai-go.mdx)
    - Livepeer AI JavaScript SDK Changelog (resources/changelog/apis-sdks/livepeer-ai-js.mdx)
    - Livepeer AI Python SDK Changelog (resources/changelog/apis-sdks/livepeer-ai-python.mdx)
    - Livepeer JavaScript SDK Changelog (resources/changelog/apis-sdks/livepeer-js.mdx)
    - Livepeer Python SDK Changelog (resources/changelog/apis-sdks/livepeer-python.mdx)
  - #### Ecosystem
    - Awesome Livepeer Changelog (resources/changelog/ecosystem/awesome-livepeer.mdx)
    - Livepeer.org Website Changelog (resources/changelog/ecosystem/website.mdx)
  - #### Protocol
    - go-livepeer changelog (resources/changelog/protocol/go-livepeer.mdx)
    - Livepeer Improvement Proposals Changelog (resources/changelog/protocol/lips.mdx)
    - NaaP Changelog (resources/changelog/protocol/naap.mdx)
    - Livepeer Subgraph Changelog (resources/changelog/protocol/subgraph.mdx)
  - #### Tooling
    - Livepeer Explorer Changelog (resources/changelog/tooling/explorer.mdx)
    - Livepeer Data Changelog (resources/changelog/tooling/livepeer-data.mdx)
    - Livepeer Python Gateway Changelog (resources/changelog/tooling/livepeer-python-gateway.mdx)
- ### Compendium
  - ⚠️ Media Kit (resources/compendium/media-kit.mdx)
- ### Concepts
  - ⚠️ Brief History of Video (resources/concepts/brief-history-of-video.mdx)
  - ⚠️ Livepeer 101 (resources/concepts/livepeer-101.mdx)
- ### Documentation Guide
  - Guide To Using The Documentation (resources/documentation-guide/documentation-guide.mdx)
  - Documentation Overview (resources/documentation-guide/documentation-overview.mdx)
    - Imported MDX: snippets/composables/pages/internal/docs-philosophy.mdx
  - #### Ai Automations
    - AI Features (resources/documentation-guide/ai-automations/ai-features.mdx)
    - Automations & Workflows Guide (resources/documentation-guide/ai-automations/automations-workflows.mdx)
    - Research and Fact Checking (resources/documentation-guide/ai-automations/research-and-fact-checking.mdx)
  - #### Component Library
    - Component Library (resources/documentation-guide/component-library/component-library.mdx)
    - Config (resources/documentation-guide/component-library/config.mdx)
    - Displays (resources/documentation-guide/component-library/displays.mdx)
    - Elements (resources/documentation-guide/component-library/elements.mdx)
    - Integrators (resources/documentation-guide/component-library/integrators.mdx)
    - Component Library Overview (resources/documentation-guide/component-library/overview.mdx)
    - Scaffolding (resources/documentation-guide/component-library/scaffolding.mdx)
    - Wrappers (resources/documentation-guide/component-library/wrappers.mdx)
  - #### Contributing
    - Contribute To The Docs (resources/documentation-guide/contributing/contribute-to-the-docs.mdx)
  - #### Copy Style
    - Authoring Guide (resources/documentation-guide/copy-style/authoring-guide.mdx)
    - Documentation Authoring Standard (resources/documentation-guide/copy-style/authoring-standard.mdx)
    - Documentation Style Guide (resources/documentation-guide/copy-style/style-guide.mdx)
  - #### Features
    - Features and AI Integrations (resources/documentation-guide/features/docs-features-and-ai-integrations.mdx)
  - #### Tooling
    - Lpd Cli (resources/documentation-guide/tooling/lpd-cli.mdx)
    - Snippets Folder Inventory (resources/documentation-guide/tooling/snippets-inventory.mdx)
- ### Lpt
  - ⚠️ Delegator Dashboard (resources/lpt/delegator-dashboard.mdx)
- ### References
  - ⚠️ Canonical Contract Addresses (resources/references/contract-addresses.mdx)
    - Imported MDX: snippets/composables/pages/canonical/livepeer-contract-addresses.mdx
- ### Resources
  - ⚠️ Videos (resources/resources/videos.mdx)
- Unindexed Pages
  - v2/resources/glossary.mdx
  - v2/resources/help-center.mdx
  - v2/resources/resource-hub-terms.mdx

### Solutions
- Livepeer Solutions Providers (solutions/portal.mdx)
- Solution Providers (solutions/solution-providers.mdx)
- ### Daydream
  - Daydream Changelog (solutions/daydream/changelog.mdx)
  - Daydream Recent Announcements (solutions/daydream/community.mdx)
  - About Daydream (solutions/daydream/overview.mdx)
- ### Embody
  - Embody Changelog (solutions/embody/changelog.mdx)
  - Embody Recent Announcements (solutions/embody/community.mdx)
  - About Embody Avatars and Agents (solutions/embody/overview.mdx)
- ### Frameworks
  - Frameworks Changelog (solutions/frameworks/changelog.mdx)
  - Frameworks Recent Announcements (solutions/frameworks/community.mdx)
  - About Frameworks (solutions/frameworks/overview.mdx)
- ### Livepeer Studio
  - Livepeer Studio Changelog (solutions/livepeer-studio/changelog.mdx)
  - Livepeer Studio Recent Announcements (solutions/livepeer-studio/community.mdx)
  - About Livepeer Studio (solutions/livepeer-studio/overview.mdx)
  - ⚠️ Livepeer Studio Client Use Cases (solutions/livepeer-studio/studio-client-use-cases.mdx)
  - #### Docs
    - Player and embed (solutions/livepeer-studio/docs/player.mdx)
    - Quickstart (solutions/livepeer-studio/docs/quickstart.mdx)
    - ##### Access Control
      - Access control with JWTs (solutions/livepeer-studio/docs/access-control/jwt.mdx)
      - Access control overview (solutions/livepeer-studio/docs/access-control/overview.mdx)
      - Access control with webhooks (solutions/livepeer-studio/docs/access-control/webhooks.mdx)
    - ##### Analytics
      - Listen to events (solutions/livepeer-studio/docs/analytics/listen-to-events.mdx)
      - Analytics (solutions/livepeer-studio/docs/analytics/overview.mdx)
      - Webhooks (solutions/livepeer-studio/docs/analytics/webhooks.mdx)
    - ##### Api Reference
      - ###### Assets
        - Delete Asset (solutions/livepeer-studio/docs/api-reference/assets/delete.mdx)
        - Get All Assets (solutions/livepeer-studio/docs/api-reference/assets/get-all.mdx)
        - Retrieve an asset (solutions/livepeer-studio/docs/api-reference/assets/get.mdx)
        - Assets API (solutions/livepeer-studio/docs/api-reference/assets/overview.mdx)
        - Update Asset (solutions/livepeer-studio/docs/api-reference/assets/update.mdx)
        - Upload Asset via URL (solutions/livepeer-studio/docs/api-reference/assets/upload-via-url.mdx)
        - Upload an asset (solutions/livepeer-studio/docs/api-reference/assets/upload.mdx)
      - ###### Multistream
        - Create Multistream Target (solutions/livepeer-studio/docs/api-reference/multistream/create.mdx)
        - Delete Multistream Target (solutions/livepeer-studio/docs/api-reference/multistream/delete.mdx)
        - Get All Multistream Targets (solutions/livepeer-studio/docs/api-reference/multistream/get-all.mdx)
        - Get Multistream Target (solutions/livepeer-studio/docs/api-reference/multistream/get.mdx)
        - Multistream API (solutions/livepeer-studio/docs/api-reference/multistream/overview.mdx)
        - Update Multistream Target (solutions/livepeer-studio/docs/api-reference/multistream/update.mdx)
      - ###### Playback
        - Retrieve Playback Info (solutions/livepeer-studio/docs/api-reference/playback/get.mdx)
        - Playback API (solutions/livepeer-studio/docs/api-reference/playback/overview.mdx)
      - ###### Rooms
        - Create Room User (solutions/livepeer-studio/docs/api-reference/rooms/create-user.mdx)
        - Create Room (solutions/livepeer-studio/docs/api-reference/rooms/create.mdx)
        - Delete Room (solutions/livepeer-studio/docs/api-reference/rooms/delete.mdx)
        - Get Room User (solutions/livepeer-studio/docs/api-reference/rooms/get-user.mdx)
        - Get Room (solutions/livepeer-studio/docs/api-reference/rooms/get.mdx)
        - Rooms API (solutions/livepeer-studio/docs/api-reference/rooms/overview.mdx)
        - Remove Room User (solutions/livepeer-studio/docs/api-reference/rooms/remove-user.mdx)
        - Start Room Egress (solutions/livepeer-studio/docs/api-reference/rooms/start-egress.mdx)
        - Stop Room Egress (solutions/livepeer-studio/docs/api-reference/rooms/stop-egress.mdx)
        - Update Room User (solutions/livepeer-studio/docs/api-reference/rooms/update-user.mdx)
      - ###### Sessions
        - Get All Sessions (solutions/livepeer-studio/docs/api-reference/sessions/get-all.mdx)
        - Get Session Clip (solutions/livepeer-studio/docs/api-reference/sessions/get-clip.mdx)
        - Get Session (solutions/livepeer-studio/docs/api-reference/sessions/get.mdx)
        - Sessions API (solutions/livepeer-studio/docs/api-reference/sessions/overview.mdx)
      - ###### Signing Keys
        - Create Signing Key (solutions/livepeer-studio/docs/api-reference/signing-keys/create.mdx)
        - Delete Signing Key (solutions/livepeer-studio/docs/api-reference/signing-keys/delete.mdx)
        - Get All Signing Keys (solutions/livepeer-studio/docs/api-reference/signing-keys/get-all.mdx)
        - Get Signing Key (solutions/livepeer-studio/docs/api-reference/signing-keys/get.mdx)
        - Signing Keys API (solutions/livepeer-studio/docs/api-reference/signing-keys/overview.mdx)
        - Update Signing Key (solutions/livepeer-studio/docs/api-reference/signing-keys/update.mdx)
      - ###### Streams
        - Add Multistream Target (solutions/livepeer-studio/docs/api-reference/streams/add-multistream-target.mdx)
        - Create Clip (solutions/livepeer-studio/docs/api-reference/streams/create-clip.mdx)
        - Create a livestream (solutions/livepeer-studio/docs/api-reference/streams/create.mdx)
        - Delete Multistream Target (solutions/livepeer-studio/docs/api-reference/streams/delete-multistream-target.mdx)
        - Delete Stream (solutions/livepeer-studio/docs/api-reference/streams/delete.mdx)
        - Get All Streams (solutions/livepeer-studio/docs/api-reference/streams/get-all.mdx)
        - Get Clip (solutions/livepeer-studio/docs/api-reference/streams/get-clip.mdx)
        - Retrieve a livestream (solutions/livepeer-studio/docs/api-reference/streams/get.mdx)
        - Streams API (solutions/livepeer-studio/docs/api-reference/streams/overview.mdx)
        - Terminate Stream (solutions/livepeer-studio/docs/api-reference/streams/terminate.mdx)
        - Update Stream (solutions/livepeer-studio/docs/api-reference/streams/update.mdx)
      - ###### Tasks
        - Get All Tasks (solutions/livepeer-studio/docs/api-reference/tasks/get-all.mdx)
        - Get Task (solutions/livepeer-studio/docs/api-reference/tasks/get.mdx)
        - Tasks API (solutions/livepeer-studio/docs/api-reference/tasks/overview.mdx)
      - ###### Transcode
        - Create Transcode Job (solutions/livepeer-studio/docs/api-reference/transcode/create.mdx)
        - Transcode API (solutions/livepeer-studio/docs/api-reference/transcode/overview.mdx)
      - ###### Viewership
        - Get Creators Metrics (solutions/livepeer-studio/docs/api-reference/viewership/get-creators-metrics.mdx)
        - Get Public Total Views (solutions/livepeer-studio/docs/api-reference/viewership/get-public-total-views.mdx)
        - Get Realtime Viewership (solutions/livepeer-studio/docs/api-reference/viewership/get-realtime-viewership.mdx)
        - Get Usage Metrics (solutions/livepeer-studio/docs/api-reference/viewership/get-usage-metrics.mdx)
        - Get Viewership Metrics (solutions/livepeer-studio/docs/api-reference/viewership/get-viewership-metrics.mdx)
        - Viewership API (solutions/livepeer-studio/docs/api-reference/viewership/overview.mdx)
      - ###### Webhooks
        - Create Webhook (solutions/livepeer-studio/docs/api-reference/webhooks/create.mdx)
        - Delete Webhook (solutions/livepeer-studio/docs/api-reference/webhooks/delete.mdx)
        - Get All Webhooks (solutions/livepeer-studio/docs/api-reference/webhooks/get-all.mdx)
        - Get Webhook (solutions/livepeer-studio/docs/api-reference/webhooks/get.mdx)
        - Webhooks API (solutions/livepeer-studio/docs/api-reference/webhooks/overview.mdx)
        - Update Webhook (solutions/livepeer-studio/docs/api-reference/webhooks/update.mdx)
    - ##### Get Started
      - Authentication (solutions/livepeer-studio/docs/get-started/authentication.mdx)
      - Getting Started with Livepeer Studio (solutions/livepeer-studio/docs/get-started/overview.mdx)
      - Studio CLI (solutions/livepeer-studio/docs/get-started/studio-cli.mdx)
    - ##### Livestream
      - Clip a livestream (solutions/livepeer-studio/docs/livestream/clip-livestream.mdx)
      - Create a livestream (solutions/livepeer-studio/docs/livestream/create-livestream.mdx)
      - Livestream from browser (solutions/livepeer-studio/docs/livestream/livestream-from-browser.mdx)
      - Multistream (solutions/livepeer-studio/docs/livestream/multistream.mdx)
      - Optimise latency (solutions/livepeer-studio/docs/livestream/optimise-latency.mdx)
      - Livestream overview (solutions/livepeer-studio/docs/livestream/overview.mdx)
      - Play a livestream (solutions/livepeer-studio/docs/livestream/playback-livestream.mdx)
      - Stream health (solutions/livepeer-studio/docs/livestream/stream-health.mdx)
      - Stream via OBS (solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx)
    - ##### Reference
      - API overview (solutions/livepeer-studio/docs/reference/api.mdx)
      - Managing projects (solutions/livepeer-studio/docs/reference/managing-projects.mdx)
      - API Reference (solutions/livepeer-studio/docs/reference/overview.mdx)
      - SDKs overview (solutions/livepeer-studio/docs/reference/sdks.mdx)
    - ##### Video On Demand
      - Encrypted assets (solutions/livepeer-studio/docs/video-on-demand/encrypted-assets.mdx)
      - Video on demand overview (solutions/livepeer-studio/docs/video-on-demand/overview.mdx)
      - Play an asset (solutions/livepeer-studio/docs/video-on-demand/playback-asset.mdx)
      - Thumbnails (VOD) (solutions/livepeer-studio/docs/video-on-demand/thumbnails-vod.mdx)
      - Transcode video (solutions/livepeer-studio/docs/video-on-demand/transcode-video.mdx)
      - Upload an asset (solutions/livepeer-studio/docs/video-on-demand/upload-asset.mdx)
- ### Streamplace
  - Streamplace Changelog (solutions/streamplace/changelog.mdx)
  - Streamplace Recent Announcements (solutions/streamplace/community.mdx)
  - About Stream.Place (solutions/streamplace/overview.mdx)
  - #### Introduction
    - ⚠️ Streamplace Architecture (solutions/streamplace/introduction/streamplace-architecture.mdx)
    - ⚠️ SPE Funding Model (solutions/streamplace/introduction/streamplace-funding-model.mdx)
    - ⚠️ How Streamplace Works (solutions/streamplace/introduction/streamplace-guide.mdx)
    - ⚠️ Developer Integration Guide (solutions/streamplace/introduction/streamplace-integration.mdx)
    - ⚠️ Provenance & Metadata (solutions/streamplace/introduction/streamplace-provenance.mdx)
- Unindexed Pages
  - v2/solutions/livepeer-studio/docs/livestream/optimize-latency.mdx
  - v2/solutions/resources/glossary.mdx

## Per-Page Full Link Lists

### snippets/composables/pages/about/concepts/actors.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### snippets/composables/pages/about/concepts/network.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### snippets/composables/pages/about/concepts/protocol.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### snippets/composables/pages/canonical/livepeer-contract-addresses.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #verifier-widget-verify-contract-address |  | null | skipped |  |  |  |
| empty | #No-Trust-On-chain-Address-Verification |  | null | skipped |  |  |  |
| external-https | https://docs.openzeppelin.com/contracts/5.x/api/proxy#TransparentUpgradeableProxy |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/protocol/livepeer-token | v2/about/protocol/livepeer-token.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/protocol/governance-model | v2/about/protocol/governance-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/treasury | v2/about/protocol/treasury.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/docs/blob/main/.github/workflows/update-contract-addresses.yml |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/arbitrum-lpt-bridge |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/governor-scripts |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/blob/main/.github/scripts/fetch-contract-addresses.js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/arbitrum-lpt-bridge |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/governor-scripts |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/accounts/label/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/protocol/blockchain-contracts#core-protocol-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/blockchain-contracts#token-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/blockchain-contracts#governance-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/blockchain-contracts#bridge-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/blockchain-contracts#migration-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/protocol/tree/delta/contracts |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/arbitrum-lpt-bridge/tree/main/contracts |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/accounts/label/livepeer |  | null | 🟡 untested-external |  |  |  |

### snippets/composables/pages/canonical/verify-contract-addresses.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://arbitrum.blockscout.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbitrum.blockscout.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arb1.arbitrum.io/rpc |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbitrum-one-rpc.publicnode.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbitrum.drpc.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://chainlist.org/chain/42161 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbitrum.blockscout.com |  | null | 🟡 untested-external |  |  |  |

### snippets/composables/pages/internal/docs-philosophy.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/quickstart/AI-prompt | v2/gateways/quickstart/AI-prompt.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/rfp/reports/livepeer-ai-first-docs-plan.pdf | v2/internal/rfp/reports/livepeer-ai-first-docs-plan.pdf | true | ok |  |  |  |
| external-https | https://player.simplecast.com/f6d42d55-3e7d-4d92-8517-8d84c18386af?dark=true |  | null | 🟡 untested-external |  |  |  |
| external-https | https://player.simplecast.com/27863aa4-9767-4c51-a1b9-7d220bb0af69?dark=true |  | null | 🟡 untested-external |  |  |  |
| external-https | https://creators.spotify.com/pod/profile/ycombinator/embed/episodes/OpenClaw-And-The-Future-Of-Personal-AI-Agents-e3eonov/a-acf7n3i |  | null | 🟡 untested-external |  |  |  |
| external-https | https://stackoverflow.blog/2024/11/26/your-docs-are-your-infrastructure/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://creators.spotify.com/pod/profile/ycombinator/episodes/OpenClaw-And-The-Future-Of-Personal-AI-Agents-e3eonov/a-acf7n3i |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/watch?v=9yLIPZ4iBLw |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.blog/developer-skills/documentation-done-right-a-developers-guide/#:~:text=Keep%20it%20clear,where%20to%20find%20specific%20information |  | null | 🟡 untested-external |  |  |  |

### snippets/composables/pages/shared/eth-account-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-exchanges | v2/gateways/resources/compendium/arbitrum-exchanges.mdx | true | ok |  |  |  |

### v2/README.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/concepts/core-concepts.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/concepts/livepeer-overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/about/concepts/mental-model | v2/about/concepts/mental-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/portal | v2/gateways/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/portal | v2/delegators/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/portal | v2/developers/portal.mdx | true | ok |  |  |  |
| internal-rooted | /snippets/assets/media/images/livepeer-stats.png | snippets/assets/media/images/livepeer-stats.png | true | ok |  |  |  |

### v2/about/concepts/mental-model.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://en.wikipedia.org/wiki/OSI_model |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../solutions/portal | v2/about/solutions/portal | false | missing | /v2/about/portal (same leaf segment match, 0.65) | /v2/delegators/portal (same leaf segment match, 0.65) | /v2/developers/portal (same leaf segment match, 0.65) |
| internal-rooted | /v2/home/solutions/showcase | v2/home/solutions/showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/home/solutions/showcase | v2/home/solutions/showcase.mdx | true | ok |  |  |  |

### v2/about/navigator.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/about/concepts/livepeer-overview | v2/about/concepts/livepeer-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/overview | v2/about/protocol/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/network/overview | v2/about/network/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/faq | v2/about/resources/faq.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/concepts/livepeer-overview | v2/about/concepts/livepeer-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/concepts/mental-model | v2/about/concepts/mental-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/overview | v2/about/protocol/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/design-philosophy | v2/about/protocol/design-philosophy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/network/overview | v2/about/network/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/network/job-lifecycle | v2/about/network/job-lifecycle.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/knowledge-hub/evaluating-livepeer | v2/about/resources/knowledge-hub/evaluating-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/network-metrics | v2/about/resources/reference/network-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/knowledge-hub/contributor-orientation | v2/about/resources/knowledge-hub/contributor-orientation.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/faq | v2/about/resources/faq.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/glossary | v2/about/resources/glossary.mdx | true | ok |  |  |  |

### v2/about/network/actors.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./livepeer-actors/gateways | v2/about/network/livepeer-actors/gateways.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |
| internal-relative | ./livepeer-actors/delegators | v2/about/network/livepeer-actors/delegators.mdx | true | ok |  |  |  |
| internal-relative | ./livepeer-actors/end-users | v2/about/network/livepeer-actors/end-users.mdx | true | ok |  |  |  |
| internal-relative | ./demand-side | v2/about/network/demand-side.mdx | true | ok |  |  |  |
| internal-relative | ./supply-side | v2/about/network/supply-side.mdx | true | ok |  |  |  |
| internal-relative | ./job-lifecycle | v2/about/network/job-lifecycle.mdx | true | ok |  |  |  |

### v2/about/network/demand-side.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/network/fee-flow.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/network/interfaces.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol/blob/master/proto/gateway.proto |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/js-sdk |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-relative | ./technical-architecture | v2/about/network/technical-architecture.mdx | true | ok |  |  |  |
| internal-relative | ./marketplace | v2/about/network/marketplace.mdx | true | ok |  |  |  |
| internal-relative | ./job-lifecycle | v2/about/network/job-lifecycle.mdx | true | ok |  |  |  |
| internal-relative | ../protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/graphql |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/js-sdk |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol/tree/master/abi |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |

### v2/about/network/job-lifecycle.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/network/livepeer-actors/delegators.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ../../protocol/livepeer-token | v2/about/protocol/livepeer-token.mdx | true | ok |  |  |  |
| internal-relative | ../../protocol/economics | v2/about/protocol/economics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |

### v2/about/network/livepeer-actors/end-users.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ../demand-side | v2/about/network/demand-side.mdx | true | ok |  |  |  |
| internal-relative | ./gateways | v2/about/network/livepeer-actors/gateways.mdx | true | ok |  |  |  |
| internal-relative | ../overview | v2/about/network/overview.mdx | true | ok |  |  |  |

### v2/about/network/livepeer-actors/gateways.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |
| internal-relative | ../job-lifecycle | v2/about/network/job-lifecycle.mdx | true | ok |  |  |  |
| internal-relative | ../demand-side | v2/about/network/demand-side.mdx | true | ok |  |  |  |

### v2/about/network/livepeer-actors/orchestrators.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./gateways | v2/about/network/livepeer-actors/gateways.mdx | true | ok |  |  |  |
| internal-relative | ../supply-side | v2/about/network/supply-side.mdx | true | ok |  |  |  |
| internal-relative | ../fee-flow | v2/about/network/fee-flow.mdx | true | ok |  |  |  |

### v2/about/network/marketplace.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/c/lips/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/lips/ |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../resources/technical-roadmap | v2/about/resources/technical-roadmap | false | missing | /v2/about/resources/reference/technical-roadmap (same leaf segment match, 0.65) | /v2/about/resources/faq (high path similarity, 0.75) | /v2/about/resources/glossary (high path similarity, 0.75) |
| internal-relative | ./job-lifecycle | v2/about/network/job-lifecycle.mdx | true | ok |  |  |  |
| internal-relative | ./actors | v2/about/network/actors.mdx | true | ok |  |  |  |
| internal-relative | ../protocol/overview | v2/about/protocol/overview.mdx | true | ok |  |  |  |
| internal-relative | ../protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol/tree/master/contracts/job |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/c/lips/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/real-time-ai-comfyui |  | null | 🟡 untested-external |  |  |  |

### v2/about/network/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/network/scaling.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/network/supply-side.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/network/technical-architecture.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio-gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/daydream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/cascade |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/js-sdk |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./job-lifecycle | v2/about/network/job-lifecycle.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/orchestrator-on-aws |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio-gateway-deploy |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/daydream |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./interfaces | v2/about/network/interfaces.mdx | true | ok |  |  |  |
| internal-relative | ./marketplace | v2/about/network/marketplace.mdx | true | ok |  |  |  |
| internal-relative | ./job-lifecycle | v2/about/network/job-lifecycle.mdx | true | ok |  |  |  |
| internal-relative | ../protocol/technical-architecture | v2/about/protocol/technical-architecture.mdx | true | ok |  |  |  |
| internal-relative | ../protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/daydream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/about/portal.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/concepts/livepeer-overview | v2/about/concepts/livepeer-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/concepts/mental-model | v2/about/concepts/mental-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/overview | v2/about/protocol/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/network/overview | v2/about/network/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/glossary | v2/about/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/knowledge-hub/livepeer-whitepaper | v2/about/resources/knowledge-hub/livepeer-whitepaper.mdx | true | ok |  |  |  |

### v2/about/protocol/blockchain-contracts.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | {contractsRoutes.reference} | v2/about/protocol/{contractsRoutes.reference} | false | missing |  |  |  |
| internal-relative | {contractsRoutes.verifier} | v2/about/protocol/{contractsRoutes.verifier} | false | missing |  |  |  |
| external-https | https://github.com/livepeer/protocol/tree/delta |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/accounts/label/livepeer |  | null | 🟡 untested-external |  |  |  |
| empty | #core-protocol-contracts |  | null | skipped |  |  |  |
| empty | #token-and-utility-contracts |  | null | skipped |  |  |  |
| empty | #governance-contracts |  | null | skipped |  |  |  |
| empty | #migration-contracts |  | null | skipped |  |  |  |
| external-https | https://docs.openzeppelin.com/contracts/5.x/api/token/erc20 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-91.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/protocol/treasury | v2/about/protocol/treasury.mdx | true | ok |  |  |  |
| external-https | https://docs.openzeppelin.com/contracts/5.x/api/governance |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.openzeppelin.com/contracts/5.x/api/governance#TimelockController |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.openzeppelin.com/contracts/5.x/api/governance#TimelockController |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/livepeer-blog/the-confluence-upgrade-is-live-3b6b342ea71e |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/accounts/label/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol/tree/delta/contracts |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/arbitrum-lpt-bridge/tree/main/contracts |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/accounts/label/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/protocol/livepeer-token | v2/about/protocol/livepeer-token.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/treasury | v2/about/protocol/treasury.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/governance-model | v2/about/protocol/governance-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/economics | v2/about/protocol/economics.mdx | true | ok |  |  |  |

### v2/about/protocol/core-mechanisms.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/t/transcoding-verification-improvements-fast-full-verification/1499 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol/blob/e8b6243c/deploy/deploy_contracts.ts |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol/blob/e8b6243c/contracts/bonding/BondingManager.sol#L23-L449 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/about/protocol/design-philosophy.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/about/protocol/overview | v2/about/protocol/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/core-mechanisms | v2/about/protocol/core-mechanisms.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/economics | v2/about/protocol/economics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/governance-model | v2/about/protocol/governance-model.mdx | true | ok |  |  |  |

### v2/about/protocol/economics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #0-13 |  | null | skipped |  |  |  |
| empty | #0-14 |  | null | skipped |  |  |  |
| empty | #0-15 |  | null | skipped |  |  |  |
| empty | #0-16 |  | null | skipped |  |  |  |
| empty | #0-17 |  | null | skipped |  |  |  |

### v2/about/protocol/governance-model.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/protocol/blob/e8b6243c/contracts/governance/Governor.sol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://eips.ethereum.org/EIPS/eip-1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0089.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0092.md |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./treasury | v2/about/protocol/treasury.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0073.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0034.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0035.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0040.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0083.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0100.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0015.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0016.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0019.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0025.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0019.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0025.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0001.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0015.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0069.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0019.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0025.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0073.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0074.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0089.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0090.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0091.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0092.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0034.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0035.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0040.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0083.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0100.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0003.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0008.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0009.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0011.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0036.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0052.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.openzeppelin.com/contracts/4.x/api/governance#governor |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.openzeppelin.com/contracts/4.x/api/governance#governorsettings |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./treasury | v2/about/protocol/treasury.mdx | true | ok |  |  |  |
| internal-rooted | /v2/home/about/ecosystem#livepeer-foundation | v2/home/about/ecosystem.mdx | true | ok |  |  |  |
| internal-rooted | /v2/home/about/ecosystem#special-purpose-entities | v2/home/about/ecosystem.mdx | true | ok |  |  |  |
| external-https | https://discord.com/channels/423160867534929930/686685097935503397 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/lips |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/lips/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/lips/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/protocol/governance-model | v2/about/protocol/governance-model.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |

### v2/about/protocol/livepeer-token.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://messari.io/report/merkle-mine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/merkle-mine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/lpt |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/merkle-mine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/explorer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/lpt |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/token/0x58b6a8a3302369daec31a0680985978a9d54189c |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/livepeer-token-design-3000/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |

### v2/about/protocol/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tokenflows.xyz/tutorials/introduction-tutorials/module3/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://oyc.yale.edu/economics/econ-159 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://eips.ethereum.org/EIPS/eip-1967 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.openzeppelin.com/contracts/4.x/upgradeable#how_proxy_works |  | null | 🟡 untested-external |  |  |  |
| external-https | https://wikipedia.com/wiki/Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/protocol/core-mechanisms | v2/about/protocol/core-mechanisms.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/livepeer-token | v2/about/protocol/livepeer-token.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/governance-model | v2/about/protocol/governance-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/treasury | v2/about/protocol/treasury.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/economics | v2/about/protocol/economics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/technical-architecture | v2/about/protocol/technical-architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/knowledge-hub/livepeer-whitepaper | v2/about/resources/knowledge-hub/livepeer-whitepaper.mdx | true | ok |  |  |  |
| internal-relative | blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |

### v2/about/protocol/technical-architecture.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/livepeer/Livepeer-Protocol-Reward-Calculation-2320a34856878026adb0e7bcb7521661 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/livepeer/Livepeer-Rewards-Accumulation-Mechanism-23e0a348568780199f26f8cbc3c2d231 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/livepeer/Livepeer-L1-L2-Migration-Report-Complete-Technical-Overview-2b10a348568780a28b59df9d8710bff9 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /snippets/assets/domain/01_ABOUT/ProtocolNodeDiagram.png | snippets/assets/domain/01_ABOUT/ProtocolNodeDiagram.png | true | ok |  |  |  |

### v2/about/protocol/treasury.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0089.md |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./treasury | v2/about/protocol/treasury.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0089.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0092.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0092.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0090.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0073.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0077.md |  | null | 🟡 untested-external |  |  |  |
| internal-relative | governance-model | v2/about/protocol/governance-model.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x363cdB9BaE210Ef182c60b5a496139E980330127#code |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x363cdB9BaE210Ef182c60b5a496139E980330127#code |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/20 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/20 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/treasury-grant-process/3250 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/quadratic-funding/3251 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/guides/treasury/overview | v2/delegators/guides/treasury/overview.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/dob/livepeer-treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x363cdB9BaE210Ef182c60b5a496139E980330127#code |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/guides/treasury/overview | v2/delegators/guides/treasury/overview.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/lip-92-livepeer-treasury-contribution-percentage/3249 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://messari.io/asset/livepeer/reports |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/dob/livepeer-treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.karmahq.xyz/community/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x363cdB9BaE210Ef182c60b5a496139E980330127#code |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol/blob/e8b6243c/contracts/governance/Treasury.sol |  | null | 🟡 untested-external |  |  |  |

### v2/about/resources/faq.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/about/concepts/livepeer-overview | v2/about/concepts/livepeer-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/overview | v2/about/protocol/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/network/overview | v2/about/network/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/livepeer-token | v2/about/protocol/livepeer-token.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/economics | v2/about/protocol/economics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/navigator | v2/about/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/knowledge-hub/evaluating-livepeer | v2/about/resources/knowledge-hub/evaluating-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/glossary | v2/about/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |

### v2/about/resources/glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./glossary-data.json | v2/about/resources/glossary-data.json | true | ok |  |  |  |
| external-https | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |  | null | 🟡 untested-external |  |  |  |
| empty | #livepeer-protocol-terms |  | null | skipped |  |  |  |
| external-https | https://ethereum.org/developers/docs/scaling/state-channels/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/United_States_dollar |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/an-overview-of-bonding/97 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Cryptoeconomics |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/delegate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/scaling/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Layer-1_blockchain |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/layer-2/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/an-overview-of-bonding/97 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/introduction-to-partial-unbonding/360 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_codec |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| empty | #livepeer-protocol-terms |  | null | skipped |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Central_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Edge_computing |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Open-source_software |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/OSI_model |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about | v2/about/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/faq | v2/about/resources/faq.mdx | true | ok |  |  |  |

### v2/about/resources/knowledge-hub/contributor-orientation.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/about/concepts/mental-model | v2/about/concepts/mental-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/network/technical-architecture | v2/about/network/technical-architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/network/job-lifecycle | v2/about/network/job-lifecycle.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/overview | v2/about/protocol/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/design-philosophy | v2/about/protocol/design-philosophy.mdx | true | ok |  |  |  |

### v2/about/resources/knowledge-hub/evaluating-livepeer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/about/concepts/livepeer-overview | v2/about/concepts/livepeer-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/concepts/mental-model | v2/about/concepts/mental-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/network/overview | v2/about/network/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/network/marketplace | v2/about/network/marketplace.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/overview | v2/about/protocol/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/protocol/economics | v2/about/protocol/economics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/network-metrics | v2/about/resources/reference/network-metrics.mdx | true | ok |  |  |  |

### v2/about/resources/knowledge-hub/gateways-vs-orchestrators.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/resources/knowledge-hub/livepeer-whitepaper.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://messari.io/report/merkle-mine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/merkle-mine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/merkle-mine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |  | null | 🟡 untested-external |  |  |  |

### v2/about/resources/livepeer-glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |

### v2/about/resources/reference/livepeer-contract-addresses.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/about/resources/reference/network-metrics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/technical-roadmap | v2/about/resources/reference/technical-roadmap.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |

### v2/about/resources/reference/technical-roadmap.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/community/portal.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/events/423160867534929930/1394387788568203274 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/community/ecosystem/governance | v2/community/ecosystem/governance.mdx | true | ok |  |  |  |
| external-https | https://x.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/@livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://luma.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/events/423160867534929930/1394387788568203274 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://t.me/livepeerorg |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.reddit.com/r/livepeer/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/@livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/community/resources/faq.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/community/ecosystem/governance | v2/community/ecosystem/governance.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/community/ecosystem/governance#how-to-propose-an-spe | v2/community/ecosystem/governance.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/introducing-workstreams-a-new-era-of-execution-for-the-livepeer-project/3030 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/invite/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/help-getting-started/5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/GovWorks-SPE-caa4a5442ddb4014b1f0e85aba4dce47 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways | v2/gateways/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators | v2/orchestrators/index.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/GovWorks-SPE-caa4a5442ddb4014b1f0e85aba4dce47 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.stablelab.xyz |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/GovWorks-SPE-caa4a5442ddb4014b1f0e85aba4dce47 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators | v2/delegators/index.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/invite/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/@livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/community/guides/guidelines.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/t/rules-moderation-of-livepeer-discord/2640 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.contributor-covenant.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.conventionalcommits.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/community-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/GovWorks-SPE-caa4a5442ddb4014b1f0e85aba4dce47 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjgxanlyczB0NW05M2xlYWEwdDg1N20zanowNGxmdzNnbWZ2bHQwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ae7SI3LoPYj8Q/giphy.gif |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://t.me/livepeerorg |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.reddit.com/r/livepeer/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/community-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/community/contribute/contribute | v2/community/contribute/contribute.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/community/contribute/contribute | v2/community/contribute/contribute.mdx | true | ok |  |  |  |
| internal-rooted | /v2/community/connect/connect-channels | v2/community/connect/connect-channels.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/wiki/blob/master/CONTRIBUTING.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/community-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/faq |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.contributor-covenant.org/ |  | null | 🟡 untested-external |  |  |  |

### v2/community/ecosystem/governance.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators | v2/delegators/index.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/t/livepeer-governance-process/2767 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/SPE-Dashboard-cd7e27da8dd54820b1aaea5b0b33541b |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.google.com/document/d/11I8ds1-tA1PaYU5rxJ58eodR-JfsjuyOm2pXXE-O6ow/edit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/GovWorks-SPE-caa4a5442ddb4014b1f0e85aba4dce47 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.stablelab.xyz |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/GovWorks-SPE-caa4a5442ddb4014b1f0e85aba4dce47 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/introducing-workstreams-a-new-era-of-execution-for-the-livepeer-project/3030 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/GovWorks-SPE-caa4a5442ddb4014b1f0e85aba4dce47 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/SPE-Dashboard-cd7e27da8dd54820b1aaea5b0b33541b |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/govworks-community-updates/2673 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |

### v2/community/community/livepeer-latest-topics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/introducing-workstreams-a-new-era-of-execution-for-the-livepeer-project/3030 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/pre-proposal-put-the-brakes-on-lpt-emissions/3211 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/invite/livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/community/ecosystem/roadmap.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.nvidia.com/en-us/glossary/world-models/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://roadmap.livepeer.org/roadmap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://roadmap.livepeer.org/roadmap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://roadmap.livepeer.org/roadmap |  | null | 🟡 untested-external |  |  |  |

### v2/community/connect/trending-topics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://download.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://download.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://download.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/@livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://x.com/Livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/daydream/community | v2/solutions/daydream/community.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/community | v2/solutions/livepeer-studio/community.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/community | v2/solutions/streamplace/community.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/embody/community | v2/solutions/embody/community.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/frameworks/community | v2/solutions/frameworks/community.mdx | true | ok |  |  |  |
| external-https | https://www.youtube.com/watch?v=-iO7HsR3KE4&#x26;list=PLkw6hm1fcjtF1OYFCF20AwBUtGygQxTQV&#x26;index=3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.google.com/presentation/d/1Qg6u1Ns1RU2Gw4m-dzGu_WeKx9z0v5HcbHTpWwA91Yw/embed |  | null | 🟡 untested-external |  |  |  |

### v2/community/connect/events-and-streams.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://luma.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://lu.ma/embed/calendar/cal-giBner4VGLXeKjy/events?period=all |  | null | 🟡 untested-external |  |  |  |

### v2/community/connect/connect-channels.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/govworks-community-updates/2673 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/livepeer-governance-process/2767 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/invite/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/rules-moderation-of-livepeer-discord/2640 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://x.com/LivepeerNetwork |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/@livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/GovWorks-SPE-caa4a5442ddb4014b1f0e85aba4dce47 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways | v2/gateways/index.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/advisory-boards/20 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/help-getting-started/5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/community/connect/news-and-socials.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/community/contribute/build-livepeer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/community/contribute/contribute.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/community/contribute/opportunities.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/community/resources/awesome-livepeer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cool |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/browse/dashboards?q=livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/browse/dashboards?q=livepeer+ai |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/browse/dashboards?q=livepeer+messari |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://web3index.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.stakingrewards.com/earn/livepeer/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-monitoring |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-worker |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-worker |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://mistserver.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/yondonfu/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/solutions | v2/solutions/index.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.tenderize.me |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/community/resources/dashboards.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/shtukaresearch/livepeer-data-geography/blob/651a56e8c8290b30855f1393543ee9e0961c071c/resource-table.md |  | null | 🟡 untested-external |  |  |  |

### v2/community/resources/glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./glossary-data.json | v2/community/resources/glossary-data.json | true | ok |  |  |  |
| external-https | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/docs/video-developers/core-concepts/payments |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Quadratic_voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.ethereum.org/en/2026/02/27/project-odin |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/United_States_dollar |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.conventionalcommits.org/en/v1.0.0/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/home |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Failover |  | null | 🟡 untested-external |  |  |  |
| external-https | https://grafana.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://prometheus.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/an-overview-of-bonding/97 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Decentralized_autonomous_organization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/introducing-the-merklemine/204 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/primer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Cryptoeconomics |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Autonomous_agent |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.ultralytics.com/glossary/real-time-inference |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Generative_artificial_intelligence |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Graphics_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.mozilla.org/en-US/docs/Web/JavaScript |  | null | 🟡 untested-external |  |  |  |
| external-https | https://mistserver.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Open-source_software |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Remote_procedure_call |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transcoding |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/community | v2/community/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/community/resources/faq | v2/community/resources/faq.mdx | true | ok |  |  |  |

### v2/community/resources/guides.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/delegators/delegation/overview | v2/delegators/delegation/overview.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways | v2/gateways/index.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/community/ecosystem/governance#how-to-propose-an-spe | v2/community/ecosystem/governance.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators | v2/orchestrators/index.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/resources/reference/apis | v2/developers/resources/reference/apis.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/community/ecosystem/governance#how-to-propose-an-spe | v2/community/ecosystem/governance.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/t/livepeer-governance-process/2767 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://mirror.xyz/livepeer.eth/kIYLc2c-KLDDTUtEdMlGPdFLoR-6n7fy33oD3XyMMzk |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/concepts/mechanics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/resources/reference/protocol-parameters | v2/delegators/resources/reference/protocol-parameters.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/delegation-economics | v2/delegators/delegation/delegation-economics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/manage-your-delegation | v2/delegators/delegation/manage-your-delegation.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/resources/reference/contracts | v2/delegators/resources/reference/contracts.mdx | true | ok |  |  |  |

### v2/delegators/concepts/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./tokenomics | v2/delegators/concepts/tokenomics.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/concepts/purpose.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/delegators/concepts/tokenomics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |

### v2/delegators/delegation/about-delegation.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/delegators/delegation/choose-an-orchestrator | v2/delegators/delegation/choose-an-orchestrator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/delegation-economics | v2/delegators/delegation/delegation-economics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/manage-your-delegation | v2/delegators/delegation/manage-your-delegation.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/resources/reference/protocol-parameters | v2/delegators/resources/reference/protocol-parameters.mdx | true | ok |  |  |  |

### v2/delegators/delegation/bridge-lpt-to-arbitrum.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://retryable-dashboard.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/delegation/choose-an-orchestrator | v2/delegators/delegation/choose-an-orchestrator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/delegate-your-lpt | v2/delegators/delegation/delegate-your-lpt.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/resources/reference/contracts | v2/delegators/resources/reference/contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/resources/compendium/exchanges | v2/delegators/resources/compendium/exchanges.mdx | true | ok |  |  |  |

### v2/delegators/delegation/choose-an-orchestrator.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./delegate-your-lpt | v2/delegators/delegation/delegate-your-lpt.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./delegate-your-lpt | v2/delegators/delegation/delegate-your-lpt.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/bridge-lpt-to-arbitrum | v2/delegators/delegation/bridge-lpt-to-arbitrum.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/about-delegation | v2/delegators/delegation/about-delegation.mdx | true | ok |  |  |  |
| internal-relative | ./delegate-your-lpt | v2/delegators/delegation/delegate-your-lpt.mdx | true | ok |  |  |  |
| internal-relative | ./delegation-economics | v2/delegators/delegation/delegation-economics.mdx | true | ok |  |  |  |

### v2/delegators/delegation/delegate-your-lpt.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/delegators/delegation/choose-an-orchestrator | v2/delegators/delegation/choose-an-orchestrator.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/delegation/manage-your-delegation | v2/delegators/delegation/manage-your-delegation.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/manage-your-delegation | v2/delegators/delegation/manage-your-delegation.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/delegation-economics | v2/delegators/delegation/delegation-economics.mdx | true | ok |  |  |  |

### v2/delegators/delegation/delegation-economics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./manage-your-delegation | v2/delegators/delegation/manage-your-delegation.mdx | true | ok |  |  |  |
| internal-relative | ./choose-an-orchestrator | v2/delegators/delegation/choose-an-orchestrator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/resources/reference/protocol-parameters | v2/delegators/resources/reference/protocol-parameters.mdx | true | ok |  |  |  |
| internal-relative | ./manage-your-delegation | v2/delegators/delegation/manage-your-delegation.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/delegation/manage-your-delegation.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/resources/reference/protocol-parameters | v2/delegators/resources/reference/protocol-parameters.mdx | true | ok |  |  |  |
| internal-relative | ./choose-an-orchestrator | v2/delegators/delegation/choose-an-orchestrator.mdx | true | ok |  |  |  |
| internal-relative | ./delegation-economics | v2/delegators/delegation/delegation-economics.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/delegation/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/delegators/delegation/about-delegation | v2/delegators/delegation/about-delegation.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/bridge-lpt-to-arbitrum | v2/delegators/delegation/bridge-lpt-to-arbitrum.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/choose-an-orchestrator | v2/delegators/delegation/choose-an-orchestrator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/delegate-your-lpt | v2/delegators/delegation/delegate-your-lpt.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/delegation-economics | v2/delegators/delegation/delegation-economics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/manage-your-delegation | v2/delegators/delegation/manage-your-delegation.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/resources/reference/protocol-parameters | v2/delegators/resources/reference/protocol-parameters.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/resources/reference/contracts | v2/delegators/resources/reference/contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/resources/glossary | v2/delegators/resources/glossary.mdx | true | ok |  |  |  |

### v2/delegators/guides/governance/model.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/guides/governance/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/community/ecosystem/governance | v2/community/ecosystem/governance.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/guides/governance/processes.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/delegators/delegation/choose-an-orchestrator | v2/delegators/delegation/choose-an-orchestrator.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/guides/treasury/allocations.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |

### v2/delegators/guides/treasury/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://paragraph.com/@livepeer-2/using-the-community-treasury |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/guides/treasury/proposals.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |

### v2/delegators/portal.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/delegators/concepts/overview | v2/delegators/concepts/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/overview | v2/delegators/delegation/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/guides/governance/overview | v2/delegators/guides/governance/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/guides/treasury/overview | v2/delegators/guides/treasury/overview.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/resources/glossary | v2/delegators/resources/glossary.mdx | true | ok |  |  |  |

### v2/delegators/resources/compendium/exchanges.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.coingecko.com/en/coins/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.coingecko.com/en/api/documentation |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/resources/compendium/lpt-eth-usage.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/cmd/livepeer/starter.go#L891-L908 |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/resources/glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./glossary-data.json | v2/delegators/resources/glossary-data.json | true | ok |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Cryptoeconomics |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Proof_of_stake |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Liquidity_risk |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Cryptoeconomics |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Vesting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/United_States_dollar |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Quadratic_voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.ethereum.org/en/2026/02/27/project-odin |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Atomic_commit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/wiki/wiki/Governance |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/wiki/wiki/Governance |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/bridges/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tether.to/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Inference_engine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transcoding |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators | v2/delegators/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/portal | v2/delegators/portal.mdx | true | ok |  |  |  |

### v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.youtube.com/watch?v=6nZrZHz12-g |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/coinmonks/how-to-stake-your-lpt-tokens-with-livepeer-the-complete-guide-to-become-a-delegator-d8f5477d287d |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/stakecapital/livepeer-delegation-tutorial-f7673cc888db |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/figment/livepeer-delegation-guide-517e2d64792e |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.figment.io/insights/livepeer-staking-delegation-guide-2/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.staked.us/blog/livepeer-lpt-staking-guide |  | null | 🟡 untested-external |  |  |  |
| external-https | https://deficrypto.dev/how-to-delegate-lpt-livepeer-arbitrum/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/livepeer-blog/an-overview-of-the-livepeer-network-and-lpt-44985f9321ff |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/livepeer-blog/an-updated-livepeer-explorer-is-now-live-1c10c599cf28 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.koinx.com/staking-guides/how-to-stake-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/delegate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/delegators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/migrate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/resources |  | null | 🟡 untested-external |  |  |  |

### v2/delegators/resources/reference/contracts.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/delegators/resources/reference/protocol-parameters | v2/delegators/resources/reference/protocol-parameters.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/bridge-lpt-to-arbitrum | v2/delegators/delegation/bridge-lpt-to-arbitrum.mdx | true | ok |  |  |  |

### v2/delegators/resources/reference/protocol-parameters.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://arbiscan.io/address/0x35bcf3c30594191d53231e4ff333e8a770453e40 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0xc20de37170b45774e6cd3d2304017fc962f27252 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0xcfe4e2879b786c3aa075813f0e364bb5accb6aa0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0xf82c1ff415f1fcf582554fdba790e27019c8e8c4 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/resources/reference/contracts | v2/delegators/resources/reference/contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/delegation-economics | v2/delegators/delegation/delegation-economics.mdx | true | ok |  |  |  |

### v2/developers/build/byoc.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/muxionlabs/byoc-example-apps |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/invite/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| external-https | https://muxionlabs.github.io/pytrickle/ |  | null | 🟡 untested-external |  |  |  |

### v2/developers/build/comfystream.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/get-started/comfystream-quickstart | v2/developers/get-started/comfystream-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| external-https | https://docs.comfystream.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/get-started/comfystream-quickstart | v2/developers/get-started/comfystream-quickstart.mdx | true | ok |  |  |  |

### v2/developers/build/model-support.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #real-time-ai |  | null | skipped |  |  |  |
| empty | #byoc |  | null | skipped |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/concepts/ai-on-livepeer | v2/developers/concepts/ai-on-livepeer.mdx | true | ok |  |  |  |
| empty | #model-warm-up-and-cold-start |  | null | skipped |  |  |  |
| external-https | https://docs.livepeer.org/ai/pipelines/text-to-image |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/issues |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/issues |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/concepts/ai-on-livepeer | v2/developers/concepts/ai-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |

### v2/developers/build/sdk-gateway.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/resources/sdks | v2/developers/resources/reference/sdks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/ai/authentication | v2/developers/guides/ai/authentication.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/ai/troubleshooting | v2/developers/guides/ai/troubleshooting.mdx | true | ok |  |  |  |

### v2/developers/build/workload-fit.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/concepts/ai-on-livepeer | v2/developers/concepts/ai-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/model-support | v2/developers/build/model-support.mdx | true | ok |  |  |  |

### v2/developers/concepts/ai-on-livepeer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/concepts/developer-stack | v2/developers/concepts/developer-stack.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| external-https | https://github.com/elizaos/eliza |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/ComfyUI-Stream-Pack |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/get-started/comfystream-quickstart | v2/developers/get-started/comfystream-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer | v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer | v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/comfystream-quickstart | v2/developers/get-started/comfystream-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer | v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/model-support | v2/developers/build/model-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/grants-and-programmes | v2/developers/guides/opportunities/grants-and-programmes.mdx | true | ok |  |  |  |

### v2/developers/concepts/developer-stack.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://docs.livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://pipelines.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/comfystream-quickstart | v2/developers/get-started/comfystream-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/oss-stack | v2/developers/concepts/oss-stack.mdx | true | ok |  |  |  |
| external-https | https://docs.livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://pipelines.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/AI-API/ai | v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/operator-considerations/production-gateways | v2/gateways/guides/operator-considerations/production-gateways.mdx | true | ok |  |  |  |
| external-https | https://docs.comfystream.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://pipelines.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://pipelines.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/comfystream-quickstart | v2/developers/get-started/comfystream-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/running-a-gateway | v2/developers/concepts/running-a-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/oss-stack | v2/developers/concepts/oss-stack.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/setup-paths | v2/developers/get-started/setup-paths.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/navigator | v2/developers/navigator.mdx | true | ok |  |  |  |

### v2/developers/concepts/oss-stack.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-worker |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer.js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ui-kit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-worker |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ui-kit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/oss-contributions | v2/developers/guides/opportunities/oss-contributions.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/contributor-quickstart | v2/developers/get-started/contributor-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/contribution-guide | v2/developers/guides/contribution-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/oss-contributions | v2/developers/guides/opportunities/oss-contributions.mdx | true | ok |  |  |  |

### v2/developers/concepts/running-a-gateway.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways | v2/gateways/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/guide | v2/gateways/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways | v2/gateways/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |

### v2/developers/concepts/video-on-livepeer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/get-started/transcoding-quickstart | v2/developers/get-started/transcoding-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/developer-stack | v2/developers/concepts/developer-stack.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/access-control | v2/developers/guides/video/access-control.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/webhooks | v2/developers/guides/video/webhooks.mdx | true | ok |  |  |  |

### v2/developers/get-started/ai-quickstart.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/AI-API/ai | v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image | v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/docs/blob/main/api/gateway.openapi.yaml |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/blob/main/gateway.openapi.yaml |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/blob/main/README.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://deepwiki.com/livepeer/ai-runner |  | null | 🟡 untested-external |  |  |  |

### v2/developers/get-started/comfystream-quickstart.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://runpod.io/console/deploy?template=w01m180vxx&ref=u8tlskew |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.comfystream.org/technical/get-started/install |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream#custom-nodes |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/building-real-time-ai-video-effects-with-comfystream/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| external-https | https://docs.comfystream.org |  | null | 🟡 untested-external |  |  |  |

### v2/developers/get-started/contributor-quickstart.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/local-testnet-deployment | v2/developers/guides/local-testnet-deployment.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/contribution-guide | v2/developers/guides/contribution-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/local-testnet-deployment | v2/developers/guides/local-testnet-deployment.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/oss-contributions | v2/developers/guides/opportunities/oss-contributions.mdx | true | ok |  |  |  |

### v2/developers/get-started/setup-paths.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/navigator | v2/developers/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/comfystream-quickstart | v2/developers/get-started/comfystream-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/transcoding-quickstart | v2/developers/get-started/transcoding-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/contributor-quickstart | v2/developers/get-started/contributor-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/navigator | v2/developers/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/workload-fit | v2/developers/build/workload-fit.mdx | true | ok |  |  |  |

### v2/developers/get-started/transcoding-quickstart.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /solutions/livepeer-studio/docs/api-reference/transcode/create | v2/solutions/livepeer-studio/docs/api-reference/transcode/create.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/api-reference/transcode/overview | v2/solutions/livepeer-studio/docs/api-reference/transcode/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/api-reference/tasks/overview | v2/solutions/livepeer-studio/docs/api-reference/tasks/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/api-reference/tasks/get | v2/solutions/livepeer-studio/docs/api-reference/tasks/get.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/reference/api | v2/solutions/livepeer-studio/docs/reference/api.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/reference/sdks | v2/solutions/livepeer-studio/docs/reference/sdks.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/docs/blob/main/api/studio.yaml |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/blob/main/api/gateway.openapi.yaml |  | null | 🟡 untested-external |  |  |  |
| external-https | https://deepwiki.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |

### v2/developers/get-started/video-quickstart.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/get-started/transcoding-quickstart | v2/developers/get-started/transcoding-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/video-on-livepeer | v2/developers/concepts/video-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/setup-paths | v2/developers/get-started/setup-paths.mdx | true | ok |  |  |  |

### v2/developers/guides/ai/authentication.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/build/sdk-gateway | v2/developers/build/sdk-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/access-control | v2/developers/guides/video/access-control.mdx | true | ok |  |  |  |

### v2/developers/guides/ai/production-checklist.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/guides/ai/authentication | v2/developers/guides/ai/authentication.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/ai/troubleshooting | v2/developers/guides/ai/troubleshooting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/sdk-gateway | v2/developers/build/sdk-gateway.mdx | true | ok |  |  |  |

### v2/developers/guides/ai/troubleshooting.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.com/invite/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/issues |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/ai/authentication | v2/developers/guides/ai/authentication.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/ai/production-checklist | v2/developers/guides/ai/production-checklist.mdx | true | ok |  |  |  |

### v2/developers/guides/contribution-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.conventionalcommits.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/copy-style/style-guide | v2/resources/documentation-guide/copy-style/style-guide.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/docs/blob/docs-v2/.github/CODEOWNERS |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://contributors-spotlight.rickstaa.dev/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://contributors-spotlight.rickstaa.dev/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/CONTRIBUTING.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/blob/master/CONTRIBUTING.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer.js/blob/main/.github/CONTRIBUTING.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/grants |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/bounties |  | null | 🟡 untested-external |  |  |  |

### v2/developers/guides/developer-guides.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/get-started/setup-paths | v2/developers/get-started/setup-paths.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/transcoding-quickstart | v2/developers/get-started/transcoding-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/contributor-quickstart | v2/developers/get-started/contributor-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/ai/authentication | v2/developers/guides/ai/authentication.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/ai/production-checklist | v2/developers/guides/ai/production-checklist.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/ai/troubleshooting | v2/developers/guides/ai/troubleshooting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/sdk-gateway | v2/developers/build/sdk-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/create-livestream | v2/developers/guides/video/create-livestream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/playback | v2/developers/guides/video/playback.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/upload-asset | v2/developers/guides/video/upload-asset.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/access-control | v2/developers/guides/video/access-control.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/webhooks | v2/developers/guides/video/webhooks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/monitor-stream-health | v2/developers/guides/video/monitor-stream-health.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/video-quickstart | v2/developers/get-started/video-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer | v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/tutorials/ipfs-video-integration | v2/developers/guides/tutorials/ipfs-video-integration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/tutorials/token-gated-video | v2/developers/guides/tutorials/token-gated-video.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/overview | v2/developers/guides/opportunities/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/resources/reference/sdks | v2/developers/resources/reference/sdks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/resources/reference/apis | v2/developers/resources/reference/apis.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/resources/reference/pricing-rate-limits | v2/developers/resources/reference/pricing-rate-limits.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/resources/reference/pytrickle | v2/developers/resources/reference/pytrickle.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/resources/knowledge-hub/awesome-livepeer | v2/developers/resources/knowledge-hub/awesome-livepeer.mdx | true | ok |  |  |  |

### v2/developers/guides/local-testnet-deployment.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/about/protocol/blockchain-contracts | v2/about/protocol/blockchain-contracts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/protocol/tree/delta |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/developers/guides/opportunities/bug-bounties.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/oss-contributions | v2/developers/guides/opportunities/oss-contributions.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/t/proposal-protocol-r-d-special-purpose-entity/3160 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/developers/guides/opportunities/grants-and-programmes.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer | v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/ai-on-livepeer | v2/developers/concepts/ai-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.comfystream.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://summit2025.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.encode.club |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| empty | #grant-types |  | null | skipped |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.encode.club/ai-video-startup-program |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.encode.club |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/rfps-and-proposals | v2/developers/guides/opportunities/rfps-and-proposals.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/oss-contributions | v2/developers/guides/opportunities/oss-contributions.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/bug-bounties | v2/developers/guides/opportunities/bug-bounties.mdx | true | ok |  |  |  |
| external-https | https://www.livepeer.org/community-hub |  | null | 🟡 untested-external |  |  |  |

### v2/developers/guides/opportunities/oss-contributions.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.conventionalcommits.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/CONTRIBUTING.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/blob/master/CONTRIBUTING.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.comfystream.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ui-kit/blob/main/CONTRIBUTING.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/contributing/contribute-to-the-docs | v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.contributor-covenant.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/bug-bounties | v2/developers/guides/opportunities/bug-bounties.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/grants-and-programmes | v2/developers/guides/opportunities/grants-and-programmes.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/contributing/contribute-to-the-docs | v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx | true | ok |  |  |  |
| internal-rooted | /v2/community/guides/guidelines | v2/community/guides/guidelines.mdx | true | ok |  |  |  |

### v2/developers/guides/opportunities/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./grants-and-programmes | v2/developers/guides/opportunities/grants-and-programmes.mdx | true | ok |  |  |  |
| internal-relative | ./grants-and-programmes | v2/developers/guides/opportunities/grants-and-programmes.mdx | true | ok |  |  |  |
| internal-relative | ./rfps-and-proposals | v2/developers/guides/opportunities/rfps-and-proposals.mdx | true | ok |  |  |  |
| internal-relative | ./oss-contributions | v2/developers/guides/opportunities/oss-contributions.mdx | true | ok |  |  |  |
| internal-relative | ./grants-and-programmes | v2/developers/guides/opportunities/grants-and-programmes.mdx | true | ok |  |  |  |
| internal-relative | ./bug-bounties | v2/developers/guides/opportunities/bug-bounties.mdx | true | ok |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/grants-and-programmes | v2/developers/guides/opportunities/grants-and-programmes.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/rfps-and-proposals | v2/developers/guides/opportunities/rfps-and-proposals.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/oss-contributions | v2/developers/guides/opportunities/oss-contributions.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/bug-bounties | v2/developers/guides/opportunities/bug-bounties.mdx | true | ok |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bounty/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |

### v2/developers/guides/opportunities/rfps-and-proposals.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/c/rfp-applications |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/livepeer-governance-process/2767 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/livepeer/Support-for-creating-an-SPE-Feedback-Form-b55adf374b3044b98f50543352b673e5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.google.com/document/d/11I8ds1-tA1PaYU5rxJ58eodR-JfsjuyOm2pXXE-O6ow/edit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/what-spes-does-livepeer-need/2177 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/rfp-applications |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/livepeer/SPE-Dashboard-cd7e27da8dd54820b1aaea5b0b33541b |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/livepeer-governance-process/2767 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.google.com/document/d/11I8ds1-tA1PaYU5rxJ58eodR-JfsjuyOm2pXXE-O6ow/edit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.notion.so/GovWorks-SPE-caa4a5442ddb4014b1f0e85aba4dce47 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/treasury/18 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/rfp-applications |  | null | 🟡 untested-external |  |  |  |

### v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://mirror.xyz/agent-spe.eth/oxs8VxEvKN88IeTwD-YQMucoDGqfNRz_mIlbUKkwOTg |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/elizaos/eliza |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.swarmzero.ai/examples/swarms/livepeer-youtube-video-generator-swarm |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/build/model-support | v2/developers/build/model-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/model-support | v2/developers/build/model-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/ai/troubleshooting | v2/developers/guides/ai/troubleshooting.mdx | true | ok |  |  |  |

### v2/developers/guides/tutorials/ipfs-video-integration.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://web3.storage |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/video/webhooks | v2/developers/guides/video/webhooks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/upload-asset | v2/developers/guides/video/upload-asset.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/tutorials/token-gated-video | v2/developers/guides/tutorials/token-gated-video.mdx | true | ok |  |  |  |

### v2/developers/guides/tutorials/token-gated-video.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/guides/video/access-control | v2/developers/guides/video/access-control.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/access-control | v2/developers/guides/video/access-control.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/tutorials/ipfs-video-integration | v2/developers/guides/tutorials/ipfs-video-integration.mdx | true | ok |  |  |  |

### v2/developers/guides/video/access-control.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/guides/video/create-livestream | v2/developers/guides/video/create-livestream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/webhooks | v2/developers/guides/video/webhooks.mdx | true | ok |  |  |  |

### v2/developers/guides/video/create-livestream.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/video/webhooks | v2/developers/guides/video/webhooks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/access-control | v2/developers/guides/video/access-control.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/webhooks | v2/developers/guides/video/webhooks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/playback | v2/developers/guides/video/playback.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/monitor-stream-health | v2/developers/guides/video/monitor-stream-health.mdx | true | ok |  |  |  |

### v2/developers/guides/video/monitor-stream-health.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/guides/video/webhooks | v2/developers/guides/video/webhooks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/create-livestream | v2/developers/guides/video/create-livestream.mdx | true | ok |  |  |  |

### v2/developers/guides/video/playback.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/guides/video/create-livestream | v2/developers/guides/video/create-livestream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/access-control | v2/developers/guides/video/access-control.mdx | true | ok |  |  |  |

### v2/developers/guides/video/upload-asset.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/guides/video/playback | v2/developers/guides/video/playback.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/webhooks | v2/developers/guides/video/webhooks.mdx | true | ok |  |  |  |

### v2/developers/guides/video/webhooks.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://ngrok.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/guides/video/access-control | v2/developers/guides/video/access-control.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/video/create-livestream | v2/developers/guides/video/create-livestream.mdx | true | ok |  |  |  |

### v2/developers/navigator.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/comfystream-quickstart | v2/developers/get-started/comfystream-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/transcoding-quickstart | v2/developers/get-started/transcoding-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/contributor-quickstart | v2/developers/get-started/contributor-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/developer-stack | v2/developers/concepts/developer-stack.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/workload-fit | v2/developers/build/workload-fit.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/developer-stack | v2/developers/concepts/developer-stack.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/setup-paths | v2/developers/get-started/setup-paths.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/workload-fit | v2/developers/build/workload-fit.mdx | true | ok |  |  |  |

### v2/developers/portal.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #whats-a-gateway |  | null | skipped |  |  |  |
| empty | #gateway-services--providers |  | null | skipped |  |  |  |
| empty | #run-a-gateway |  | null | skipped |  |  |  |
| empty | #gateway-tools--dashboards |  | null | skipped |  |  |  |
| empty | #gateway-guides--resources |  | null | skipped |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/get-started/transcoding-quickstart | v2/developers/get-started/transcoding-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/portal | v2/solutions/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/navigator | v2/developers/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/overview | v2/developers/guides/opportunities/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/developer-guides | v2/developers/guides/developer-guides.mdx | true | ok |  |  |  |

### v2/developers/resources/compendium/developer-help.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer.js/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.reddit.com/search/?q=livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/community-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://twitter.com/Livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/grants |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/bounties |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |

### v2/developers/resources/compendium/example-applications.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/suhailkakar/Livepeer-YouTube |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/victorges/justcast.it |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/suhailkakar/Livepeer-EVM-Tokengating |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/suhailkakar/livepeer-dStorage-playback/ |  | null | 🟡 untested-external |  |  |  |

### v2/developers/resources/compendium/resources.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/catalyst |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/lpms |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer.js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/topics/livepeer?o=desc&s=updated |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/sdk |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://messari.io/asset/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://web3index.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.stakingrewards.com/earn/livepeer/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/topics/livepeer?o=desc&s=updated |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#learn |  | null | 🟡 untested-external |  |  |  |
| external-https | https://thegraph.com/explorer/subgraphs?search=livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#no-code |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#infrastructure |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.tenderize.me |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/introducing-daydream/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/coinmonks/why-the-livepeer-ai-subnet-is-a-big-deal-454228dc09d3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://hackernoon.com/the-livepeer-lpt-swot-analysis |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.okx.com/en-eu/learn/livepeer-guide |  | null | 🟡 untested-external |  |  |  |
| external-https | https://messari.io/asset/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/grants |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/bounties |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |

### v2/developers/resources/glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./glossary-data.json | v2/developers/resources/glossary-data.json | true | ok |  |  |  |
| external-https | https://cloud.google.com/discover/what-is-batch-inference |  | null | 🟡 untested-external |  |  |  |
| external-https | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Comfy-Org/ComfyUI |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Diffusion_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Word_embedding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Image_translation |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/tasks/image-to-text |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/tasks/image-to-video |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Inference_engine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Large_language_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/diffusers/training/lora |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Machine_learning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/hub/en/model-cards |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/hub/en/model-cards |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Multimodal_learning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ollama.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/PyTorch |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.ultralytics.com/glossary/real-time-inference |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/transformers/en/model_doc/sam2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/diffusers/en/using-diffusers/scheduler_features |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Image_segmentation |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.nvidia.com/tensorrt |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Text-to-image_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Speech_synthesis |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/PyTorch |  | null | 🟡 untested-external |  |  |  |
| external-https | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/openai/whisper-large-v3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Generative_artificial_intelligence |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.cloudflare.com/webrtc-whip-whep-cloudflare-stream/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transcoding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_on_demand |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/WebRTC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Ethereum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/smart-contracts/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Central_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Web_API |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Gigabyte |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.mozilla.org/en-US/docs/Web/JavaScript |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/JSON_Web_Token |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/graphics-cards/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Self-hosting_(web_services |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Solidity |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_random-access_memory |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Webhook |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Know_your_customer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Service-level_agreement |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers | v2/developers/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/resources/reference/apis | v2/developers/resources/reference/apis.mdx | true | ok |  |  |  |

### v2/developers/resources/knowledge-hub/awesome-livepeer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/developers/resources/knowledge-hub/deepwiki.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://deepwiki.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://deepwiki.com/livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/developers/resources/knowledge-hub/wiki.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://deepwiki.com/livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/developers/resources/reference/apis.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/resources/reference/sdks | v2/developers/resources/reference/sdks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/sdk-gateway | v2/developers/build/sdk-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/ai/authentication | v2/developers/guides/ai/authentication.mdx | true | ok |  |  |  |

### v2/developers/resources/reference/pricing-rate-limits.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/guides/ai/production-checklist | v2/developers/guides/ai/production-checklist.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/resources/reference/apis | v2/developers/resources/reference/apis.mdx | true | ok |  |  |  |

### v2/developers/resources/reference/pytrickle.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |

### v2/developers/resources/reference/sdks.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://speakeasyapi.dev |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/build/sdk-gateway | v2/developers/build/sdk-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/resources/reference/apis | v2/developers/resources/reference/apis.mdx | true | ok |  |  |  |

### v2/gateways/concepts/architecture.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/livepeernode.go |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/contract-addresses | v2/gateways/resources/reference/technical/contract-addresses.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |

### v2/gateways/concepts/business-model.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/daydream/overview | v2/solutions/daydream/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |

### v2/gateways/concepts/capabilities.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/concepts/role | v2/orchestrators/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/embody | /v2/solutions/embody | true | ok-folder-route |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/architecture | v2/gateways/concepts/architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/architecture | v2/gateways/concepts/architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/navigator | v2/gateways/navigator.mdx | true | ok |  |  |  |

### v2/gateways/concepts/role.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/architecture | v2/gateways/concepts/architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/architecture | v2/gateways/concepts/architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/navigator | v2/gateways/navigator.mdx | true | ok |  |  |  |

### v2/gateways/custom/composables/linux/linuxSupport.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/custom/composables/linux/macSupport.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/custom/views/quickstart/docker/dockerOffChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | "https://hub.docker.com/r/livepeer/go-livepeer" |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/cli-commands | v2/gateways/resources/reference/technical/cli-commands.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/AI-API/ai | v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/quickstart/docker/dockerOnChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| empty | #arbitrum-testnet |  | null | skipped |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | "https://hub.docker.com/r/livepeer/go-livepeer" |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/leaderboard |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/test_args.sh |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/leaderboard |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/custom/views/quickstart/linux/linuxOffChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/custom/views/quickstart/linux/linuxOnChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/custom/views/quickstart/windows/windowsOffChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/custom/views/quickstart/windows/windowsOnChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/custom/views/setup/configure/ai-configuration-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/go-livepeer/cli-reference | v2/gateways/resources/reference/technical/go-livepeer/cli-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/go-livepeer/cli-reference | v2/gateways/resources/reference/technical/go-livepeer/cli-reference.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/tree/master |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://hub.docker.com/r/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/ai_mediaserver.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/ai_http.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/ai_process.go |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/custom/views/setup/configure/dual-configuration-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/master/box/box.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/livepeernode.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/ai_auth.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/cmd/livepeer/livepeer.go |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/custom/views/setup/configure/video-configuration-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/broadcast.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/live_payment.go |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/connect/connect-with-offerings | v2/gateways/setup/connect/connect-with-offerings.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/livepeernode.go |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/on-chain-setup/on-chain | v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-configuration | v2/gateways/guides/payments-and-pricing/pricing-configuration.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/connect/docker-connect-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/leaderboard |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x04C0b249740175999E5BF5c9ac1dA92431EF34C5 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/verify | v2/gateways/setup/verify.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/connect/linux-connect-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/leaderboard |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x04C0b249740175999E5BF5c9ac1dA92431EF34C5 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/verify | v2/gateways/setup/verify.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/connect/windows-connect-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/leaderboard |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x04C0b249740175999E5BF5c9ac1dA92431EF34C5 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/verify | v2/gateways/setup/verify.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/install/docker-install-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #1-0 |  | null | skipped |  |  |  |
| empty | #1-1 |  | null | skipped |  |  |  |
| empty | #1-2 |  | null | skipped |  |  |  |
| empty | #1-3 |  | null | skipped |  |  |  |
| empty | #1-4 |  | null | skipped |  |  |  |
| empty | #1-5 |  | null | skipped |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/on-chain-setup/on-chain | v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx | true | ok |  |  |  |
| external-https | https://obsproject.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/doc/rtmpwebhookauth.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/install/linux-install-content-copy.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://brew.sh/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://brew.sh/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://curl.haxx.se/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/install/linux-install-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/install/windows-install-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://docs.livepeer.org/gateways/guides/windows-install |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://nssm.cc/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/monitor/docker-monitor-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/monitor/linux-monitor-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/monitor/windows-monitor-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/prometheus/prometheus/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://nssm.cc/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://grafana.com/grafana/download?platform=windows |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/verify/docker-verify-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/setup/monitor | v2/gateways/setup/monitor.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/verify/linux-verify-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/setup/monitor | v2/gateways/setup/monitor.mdx | true | ok |  |  |  |

### v2/gateways/custom/views/setup/verify/windows-verify-content.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/setup/monitor | v2/gateways/setup/monitor.mdx | true | ok |  |  |  |

### v2/gateways/guides/advanced-operations/dep-production-hardening.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/orchestrator-offerings | v2/gateways/resources/reference/technical/orchestrator-offerings.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | true | ok |  |  |  |

### v2/gateways/guides/advanced-operations/gateway-discoverability.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://arbiscan.io/address/0x04C0b249740175999E5BF5c9ac1dA92431EF34C5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x04C0b249740175999E5BF5c9ac1dA92431EF34C5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer-arbitrum-one-git-feat-add-g-10dba1-livepeer-foundation.vercel.app/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/explorer/pull/410 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/AI-API/ai | v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/technical-architecture | v2/gateways/resources/reference/technical/technical-architecture.mdx | true | ok |  |  |  |

### v2/gateways/guides/advanced-operations/gateway-middleware.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection#tiering-strategy | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-discoverability | v2/gateways/guides/advanced-operations/gateway-discoverability.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |

### v2/gateways/guides/advanced-operations/orchestrator-selection.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/orchestrator-offerings | v2/gateways/resources/reference/technical/orchestrator-offerings.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | true | ok |  |  |  |

### v2/gateways/guides/advanced-operations/scaling.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #horizontal-scaling |  | null | skipped |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/go-livepeer/gpu-support | v2/gateways/resources/reference/go-livepeer/gpu-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |

### v2/gateways/guides/deployment-details/gwid-single-click-deploy.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/t/gwid-spe-pre-proposal-gateway-wizard-phase-1/2868 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/get-to-know-gwid-and-the-team-a-fully-managed-devop-platform-for-livepeer/2851 |  | null | 🟡 untested-external |  |  |  |
| empty | #gwid-gateway-wizard |  | null | skipped |  |  |  |
| empty | #coming-soon |  | null | skipped |  |  |  |
| external-https | https://github.com/livepeer/docs/issues/new?assignees=&labels=type%3A+documentation&template=documentation.yml&title= |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/videoDAC/livepeer-gateway/blob/master/README.md |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/guides/deployment-details/setup-options.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/j0sh/livepeer-python-gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/gwid-spe-pre-proposal-gateway-wizard-phase-1/2868 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/get-to-know-gwid-and-the-team-a-fully-managed-devop-platform-for-livepeer/2851 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-requirements | v2/gateways/guides/deployment-details/setup-requirements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-requirements | v2/gateways/guides/deployment-details/setup-requirements.mdx | true | ok |  |  |  |
| external-https | https://github.com/videoDAC/livepeer-gateway/blob/master/README.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/operator-considerations/production-gateways | v2/gateways/guides/operator-considerations/production-gateways.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-requirements | v2/gateways/guides/deployment-details/setup-requirements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |

### v2/gateways/guides/deployment-details/setup-requirements.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-rpc | v2/gateways/resources/compendium/arbitrum-rpc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/on-chain-setup/on-chain | v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/on-chain-setup/bridge-lpt-to-arbitrum | v2/gateways/setup/requirements/on-chain-setup/bridge-lpt-to-arbitrum.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/install/docker-install | v2/gateways/setup/install/docker-install | false | missing | /v2/gateways/setup/install (high path similarity, 0.8) | /v2/gateways/setup/requirements/setup (high path similarity, 0.66) | /v2/gateways/setup/configure/configuration-reference (high path similarity, 0.6) |
| internal-rooted | /v2/gateways/setup/install/linux-install | v2/gateways/setup/install/linux-install | false | missing | /v2/gateways/setup/install (high path similarity, 0.8) | /v2/gateways/setup/requirements/setup (high path similarity, 0.66) | /v2/gateways/setup/configure/configuration-reference (high path similarity, 0.6) |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/gwid-single-click-deploy | v2/gateways/guides/deployment-details/gwid-single-click-deploy.mdx | true | ok |  |  |  |

### v2/gateways/guides/monitoring-and-tooling/health-checks.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/troubleshooting#arbitrum-rpc-connection-failing | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |

### v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/health-checks | v2/gateways/guides/monitoring-and-tooling/health-checks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | true | ok |  |  |  |

### v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| external-https | "https://arbiscan.io/address/0xea1b0F6c8D158328a6e3D3F924B86A759F41465c" |  | null | 🟡 untested-external |  |  |  |
| external-https | "https://arbiscan.io/address/0xea1b0F6c8D158328a6e3D3F924B86A759F41465c" |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |

### v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| external-https | "https://github.com/livepeer/explorer/pull/410" |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| external-https | https://explorer-arbitrum-one-git-feat-add-g-10dba1-livepeer-foundation.vercel.app/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer-arbitrum-one-git-feat-add-g-10dba1-livepeer-foundation.vercel.app/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer-arbitrum-one-git-feat-add-g-10dba1-livepeer-foundation.vercel.app/gateways |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/gateways |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx | true | ok |  |  |  |

### v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.infura.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.alchemy.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/node-running/how-tos/running-a-full-node |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues/1343 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.docker.com/products/docker-desktop/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/faq | v2/gateways/resources/reference/faq.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/guides/node-pipelines/ai-pipelines.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://arbiscan.io/address/0x04C0b249740175999E5BF5c9ac1dA92431EF34C5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| empty | #orchestrator-discovery |  | null | skipped |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/server/ai_http.go |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/guide | v2/gateways/guides/node-pipelines/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/byoc-pipelines | v2/gateways/guides/node-pipelines/byoc-pipelines.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/server/ai_mediaserver.go |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/guide | v2/gateways/guides/node-pipelines/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/byoc-pipelines | v2/gateways/guides/node-pipelines/byoc-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/model-support | v2/developers/build/model-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/workload-fit | v2/developers/build/workload-fit.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image | v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image.mdx | true | ok |  |  |  |

### v2/gateways/guides/node-pipelines/byoc-pipelines.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/workload-fit | v2/developers/build/workload-fit.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/guide | v2/gateways/guides/node-pipelines/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines#orchestrator-discovery | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines#finding-ai-models | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/guide | v2/gateways/guides/node-pipelines/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/workload-fit | v2/developers/build/workload-fit.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |

### v2/gateways/guides/node-pipelines/dep-ai-inference.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/server/ai_http.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/server/ai_mediaserver.go |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/byoc-pipelines | v2/gateways/guides/node-pipelines/byoc-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image | v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image.mdx | true | ok |  |  |  |

### v2/gateways/guides/node-pipelines/guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/build/model-support | v2/developers/build/model-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/comfystream | v2/developers/build/comfystream.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/daydream/overview | v2/solutions/daydream/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/workload-fit | v2/developers/build/workload-fit.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/video-pipelines | v2/gateways/guides/node-pipelines/video-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/byoc-pipelines | v2/gateways/guides/node-pipelines/byoc-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/workload-fit | v2/developers/build/workload-fit.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/model-support | v2/developers/build/model-support.mdx | true | ok |  |  |  |

### v2/gateways/guides/node-pipelines/pipeline-configuration.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines#ai-vs-video-comparison | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/video-pipelines | v2/gateways/guides/node-pipelines/video-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | true | ok |  |  |  |

### v2/gateways/guides/node-pipelines/video-pipelines.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/core/broadcast.go |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/guide | v2/gateways/guides/node-pipelines/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |

### v2/gateways/guides/operator-considerations/business-case.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/solutions/daydream/overview | v2/solutions/daydream/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/overview | v2/solutions/livepeer-studio/overview.mdx | true | ok |  |  |  |
| external-https | https://livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/operator-considerations/production-gateways | v2/gateways/guides/operator-considerations/production-gateways.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-requirements | v2/gateways/guides/deployment-details/setup-requirements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |

### v2/gateways/guides/operator-considerations/production-gateways.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://stream.place |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud/blog |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud/how-to-run-a-livepeer-gateway-node |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://owncast.online |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/solutions | v2/solutions/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/operator-considerations/business-case | v2/gateways/guides/operator-considerations/business-case.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-requirements | v2/gateways/guides/deployment-details/setup-requirements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |

### v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/pull/3791 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |
| external-https | "https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4361.md" |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/guides/payments-and-pricing/dep-payment-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |

### v2/gateways/guides/payments-and-pricing/fund-gateway.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.coinbase.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.binance.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.coingecko.com/en/coins/arbitrum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.binance.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.binance.com/en/support/faq/360033617792 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.coinbase.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.coinbase.com/how-to-buy/ethereum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.kraken.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://support.kraken.com/hc/en-us/articles/360000920066-How-to-buy-Ethereum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/arbitrum-bridge/quickstart |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues/3744 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-exchanges | v2/gateways/resources/compendium/arbitrum-exchanges.mdx | true | ok |  |  |  |
| external-https | https://docs.arbitrum.io/arbitrum-bridge/quickstart |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/guides/payments-and-pricing/funding-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://retryable-tx-panel.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-exchanges | v2/gateways/resources/compendium/arbitrum-exchanges.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues/3744 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-exchanges | v2/gateways/resources/compendium/arbitrum-exchanges.mdx | true | ok |  |  |  |

### v2/gateways/guides/payments-and-pricing/payment-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |

### v2/gateways/guides/payments-and-pricing/pricing-configuration.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/segment_rpc.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/segment_rpc.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/live_payment.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/ai_http.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/live_payment.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/segment_rpc.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/ai_http.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/cmd/livepeer/starter.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/orchestrator.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/core/orchestrator.go |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | true | ok |  |  |  |

### v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://docs.chain.link/data-feeds/price-feeds/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |

### v2/gateways/guides/payments-and-pricing/remote-signers.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/pull/3791 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud/blog |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud/how-to-run-a-livepeer-gateway-node |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | true | ok |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://owncast.online |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/operator-considerations/production-gateways | v2/gateways/guides/operator-considerations/production-gateways.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |

### v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | true | ok |  |  |  |

### v2/gateways/guides/roadmap-and-funding/operator-support.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/explorer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/explorer/pull/410 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/operator-considerations/business-case | v2/gateways/guides/operator-considerations/business-case.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/operator-considerations/business-case | v2/gateways/guides/operator-considerations/business-case.mdx | true | ok |  |  |  |

### v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | true | ok |  |  |  |

### v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/pull/3791 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-exchanges | v2/gateways/resources/compendium/arbitrum-exchanges.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/on-chain-setup/on-chain | v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx | true | ok |  |  |  |
| external-https | https://infura.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://alchemy.com |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-rpc | v2/gateways/resources/compendium/arbitrum-rpc.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway/pulls |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/blob/main/docs/custom-pipeline.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |

### v2/gateways/guides/tutorials/stubs/tutorial-byoc-cpu-pipeline.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/guides/tutorials/stubs/tutorial-go-production.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/guides/tutorials/stubs/tutorial-offchain-transcoding-test.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-3-go-production | v2/gateways/guides/tutorials/tutorial-3-go-production.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-3-go-production | v2/gateways/guides/tutorials/tutorial-3-go-production.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |

### v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test | v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-3-go-production | v2/gateways/guides/tutorials/tutorial-3-go-production.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-3-go-production | v2/gateways/guides/tutorials/tutorial-3-go-production.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/byoc-pipelines | v2/gateways/guides/node-pipelines/byoc-pipelines.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/blob/main/docs/custom-pipeline.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/guides/tutorials/tutorial-3-go-production.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test | v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/on-chain-setup/on-chain | v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx | true | ok |  |  |  |
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://infura.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://alchemy.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/go-livepeer/hardware-requirements | v2/gateways/resources/reference/go-livepeer/hardware-requirements.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| external-https | https://dune.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test | v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | true | ok |  |  |  |

### v2/gateways/guides/tutorials/tutorials-resources.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/navigator.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/setup | v2/gateways/setup/requirements/setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/health-checks | v2/gateways/guides/monitoring-and-tooling/health-checks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/setup | v2/gateways/setup/requirements/setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/architecture | v2/gateways/concepts/architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/guide | v2/gateways/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/faq | v2/gateways/resources/reference/faq.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/guide | v2/gateways/guides/node-pipelines/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/video-pipelines | v2/gateways/guides/node-pipelines/video-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/byoc-pipelines | v2/gateways/guides/node-pipelines/byoc-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/pipeline-configuration | v2/gateways/guides/node-pipelines/pipeline-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/health-checks | v2/gateways/guides/monitoring-and-tooling/health-checks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-middleware | v2/gateways/guides/advanced-operations/gateway-middleware.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-discoverability | v2/gateways/guides/advanced-operations/gateway-discoverability.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/operator-support | v2/gateways/guides/roadmap-and-funding/operator-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy | v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/spe-grant-model | v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/byoc-cpu-tutorial | v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/roadmap-and-funding/gateway-showcase | v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx | true | ok |  |  |  |

### v2/gateways/portal.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./concepts/ | /v2/gateways/concepts | true | ok-folder-route |  |  |  |
| internal-relative | ./concepts/ | /v2/gateways/concepts | true | ok-folder-route |  |  |  |
| internal-rooted | /v2/gateways/navigator | v2/gateways/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/navigator | v2/gateways/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test | v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx | true | ok |  |  |  |
| internal-relative | ./setup | /v2/gateways/setup | true | ok-folder-route |  |  |  |
| internal-relative | ./guides/ | /v2/gateways/guides | true | ok-folder-route |  |  |  |
| internal-relative | ./resources/knowledge-hub/resources | v2/gateways/resources/knowledge-hub/resources.mdx | true | ok |  |  |  |

### v2/gateways/quickstart/AI-prompt.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/quickstart/gateway-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://docs.docker.com/get-docker/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://linux.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/guide | v2/gateways/setup/guide.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/install/docker-install | v2/gateways/setup/install/docker-install | false | missing | /v2/gateways/setup/install (high path similarity, 0.8) | /v2/gateways/setup/requirements/setup (high path similarity, 0.66) | /v2/gateways/setup/configure/configuration-reference (high path similarity, 0.6) |
| internal-relative | ../resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/install/linux-install | v2/gateways/setup/install/linux-install | false | missing | /v2/gateways/setup/install (high path similarity, 0.8) | /v2/gateways/setup/requirements/setup (high path similarity, 0.66) | /v2/gateways/setup/configure/configuration-reference (high path similarity, 0.6) |
| internal-relative | ../resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/install/windows-install | v2/gateways/setup/install/windows-install | false | missing | /v2/gateways/setup/install (high path similarity, 0.8) | /v2/gateways/setup/requirements/setup (high path similarity, 0.66) | /v2/gateways/setup/configure/configuration-reference (high path similarity, 0.6) |
| internal-relative | ../resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | true | ok |  |  |  |
| internal-relative | ../resources/reference/faq | v2/gateways/resources/reference/faq.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/setup | v2/gateways/setup/requirements/setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/on-chain-setup/on-chain | v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/guide | v2/gateways/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |

### v2/gateways/quickstart/groups/docker/dockerSupport.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/master/box/box.md |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/quickstart/groups/linux/linuxSupport.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/quickstart/groups/linux/macSupport.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/quickstart/views/docker/dockerOffChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | "https://hub.docker.com/r/livepeer/go-livepeer" |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/cli-commands | v2/gateways/resources/reference/technical/cli-commands.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/api-reference/AI-API/ai | v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx | true | ok |  |  |  |

### v2/gateways/quickstart/views/docker/dockerOnChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| empty | #arbitrum-testnet |  | null | skipped |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | "https://hub.docker.com/r/livepeer/go-livepeer" |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/leaderboard |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/test_args.sh |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/leaderboard |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/quickstart/views/linux/linuxOffChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/quickstart/views/linux/linuxOnChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/quickstart/views/windows/windowsOffChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/quickstart/views/windows/windowsOnChainTab.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/compendium/arbitrum-exchanges.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /snippets/data/snapshots/coingecko-arbitrum.json | snippets/data/snapshots/coingecko-arbitrum.json | true | ok |  |  |  |
| external-https | https://www.coingecko.com/en/coins/arbitrum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.coingecko.com/en/api/documentation |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/compendium/arbitrum-rpc.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://chainlist.org/chain/42161 |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/compendium/livepeer-exchanges.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /snippets/data/snapshots/coingecko-livepeer.json | snippets/data/snapshots/coingecko-livepeer.json | true | ok |  |  |  |
| external-https | https://www.coingecko.com/en/coins/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.coingecko.com/en/api/documentation |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/deployment-terms.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |

### v2/gateways/resources/glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./glossary-data.json | v2/gateways/resources/glossary-data.json | true | ok |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Arbitrage |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/ai/pipelines/audio-to-text |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_codec |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloudinary.com/glossary/encoding-ladder |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Group_of_pictures |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Advanced_Video_Coding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloudinary.com/glossary/video-rendition |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transcoding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Inference_engine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Machine_learning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/what-is-ether/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Latency_(engineering |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Webhook |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Central_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Gigabyte |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/graphics-cards/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/graphics-cards/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Self-hosting_(web_services |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Service-level_agreement |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Failover |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Scalability |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways | v2/gateways/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/faq | v2/gateways/resources/reference/faq.mdx | true | ok |  |  |  |

### v2/gateways/resources/knowledge-hub/guides.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/portal | v2/developers/portal.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3791 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/run-a-gateway/gateway-setup |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/gateway-path |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/guides/operator-considerations/business-case |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/quickstart/AI-prompt |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/payments/remote-signers |  | null | 🟡 untested-external |  |  |  |
| external-https | https://signer.eliteencoder.net/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway/tree/main/examples |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/setup/configure |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/byoc-cpu-tutorial | v2/gateways/guides/tutorials/byoc-cpu-tutorial.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/blob/main/docs/custom-pipeline.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/scope-runner |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3866 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/eliteprox/livepeer-python-gateway/commit/e80e539ee4336afe36543e1fa5380dd0d6c7c0f9 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/setup/guide |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/run-a-gateway/requirements/on-chain |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/setup/configure |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/setup/transcoding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/resources/technical/bridge-lpt-to-arbitrum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/setup/configure |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/about/architecture |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/payments/how-payments-work |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/guides/payments-and-pricing/pricing-configuration |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/payments/payment-clearinghouse |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/resources/technical/arbitrum-exchanges |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/setup/connect/connect-with-offerings |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/setup/connect/discover-offerings |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway/blob/main/examples/select_orchestrator.py |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/eliteprox/go-livepeer/commit/bf6f151dde3508646439f993610899ac04ee3f42 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/guides/monitoring-and-tooling/monitoring-setup |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/gateway-tools/gateway-introspection |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/gateway-tools/gateway-middleware |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/eliteprox/livepeer-python-gateway/tree/pr/pricing-session-orchestrator-info/examples |  | null | 🟡 untested-external |  |  |  |
| external-https | https://gist.github.com/j0sh/0ee58c48ac00739bd10babc44dc293da |  | null | 🟡 untested-external |  |  |  |
| external-https | https://gist.github.com/eliteprox/a018fc30ee3366220873469c496b8c75 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/guides/roadmap-and-funding/operator-support |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud/how-to-run-a-livepeer-gateway-node |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/grants |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/building-real-time-ai-video-effects-with-comfystream/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/comfyui-and-real-time-video-ai-processing/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/builder-story-dotsimulate-x-daydream/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/introducing-daydream/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/results?search_query=livepeer+gateway+setup+titan+node |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/building-real-time-ai-video-effects-with-comfystream/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/knowledge-hub/help.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/grants |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://support.livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| mailto | mailto:support@livepeer.studio |  | null | skipped |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/scope-runner/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/grants |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/bounties |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://twitter.com/Livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/results?search_query=livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.reddit.com/r/livepeer/ |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/knowledge-hub/resources.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/lpms |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/catalyst |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer.js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/scope-runner |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://messari.io/asset/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://web3index.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://messari.io/asset/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://loki.livepeer.report |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer#tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/resources/technical/configuration-flags |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/resources/technical/cli-commands |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/resources/technical/cli-http-api |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/resources/technical/technical-architecture |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/resources/technical/ai |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| external-https | https://docs.livepeer.org/gateways/resources/technical/arbitrum-rpc |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/gateways/resources/technical/orchestrator-offerings |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/rickstaa/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://thegraph.com/explorer/subgraphs?search=livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.tenderize.me |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.stakingrewards.com/earn/livepeer/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/introducing-daydream/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://gist.github.com/j0sh/0ee58c48ac00739bd10babc44dc293da |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/coinmonks/why-the-livepeer-ai-subnet-is-a-big-deal-454228dc09d3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.okx.com/en-eu/learn/livepeer-guide |  | null | 🟡 untested-external |  |  |  |
| external-https | https://immunefi.com/bug-bounty/livepeer/information/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/grants |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/dev-hub |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/reference/faq.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |
| empty | #general |  | null | skipped |  |  |  |
| empty | #video-gateway |  | null | skipped |  |  |  |
| empty | #ai-gateway |  | null | skipped |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/funding-guide | v2/gateways/guides/payments-and-pricing/funding-guide.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/orchestrators/portal/guides/set-pricing |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/pricing |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tokenterminal.com/explorer/projects/livepeer/metrics/fees |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/figment/primer-on-livepeer-transcoding-fees-3658057f98c2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/buidl-labs/livepeer-pricing-tool |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/troubleshooting | v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/reference/go-livepeer/bandwidth-requirements.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.speedtest.net/apps/cli |  | null | 🟡 untested-external |  |  |  |
| external-https | https://iperf.fr/ |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/reference/go-livepeer/cli-reference.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer/livepeer.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/tree/master/doc |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/reference/go-livepeer/gpu-support.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/doc/gpu.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/gtx-950-quadro-p400-benchmarks/1497 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/dual-ethash-mining-transcoding-w-rtx-3080-10g-cuda-mps/1161 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/gtx-950-quadro-p400-benchmarks/1497 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/nvidia-quadro-t600-benchmark/1650 |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/reference/go-livepeer/hardware-requirements.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/go-livepeer/gpu-support | v2/gateways/resources/reference/go-livepeer/gpu-support.mdx | true | ok |  |  |  |

### v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/ai-worker |  | null | 🟡 untested-external |  |  |  |
| internal-relative | text-to-image | v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image.mdx | true | ok |  |  |  |
| internal-relative | image-to-image | v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image.mdx | true | ok |  |  |  |
| internal-relative | image-to-video | v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video.mdx | true | ok |  |  |  |
| internal-relative | upscale | v2/gateways/resources/reference/technical/api-reference/AI-API/upscale.mdx | true | ok |  |  |  |
| internal-relative | audio-to-text | v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text.mdx | true | ok |  |  |  |
| internal-relative | segment-anything-2 | v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2.mdx | true | ok |  |  |  |
| internal-relative | llm | v2/gateways/resources/reference/technical/api-reference/AI-API/llm.mdx | true | ok |  |  |  |
| internal-relative | image-to-text | v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text.mdx | true | ok |  |  |  |
| internal-relative | live-video-to-video | v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video.mdx | true | ok |  |  |  |
| internal-relative | text-to-speech | v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech.mdx | true | ok |  |  |  |
| internal-relative | health | v2/gateways/resources/reference/technical/api-reference/AI-API/health.mdx | true | ok |  |  |  |
| internal-relative | hardware-info | v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info.mdx | true | ok |  |  |  |
| internal-relative | hardware-stats | v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats.mdx | true | ok |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/health.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/llm.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-API/upscale.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/webserver.go |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/cli-commands | v2/gateways/resources/reference/technical/cli-commands.mdx | true | ok |  |  |  |
| internal-relative | status | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status.mdx | true | ok |  |  |  |
| internal-relative | protocolparameters | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters.mdx | true | ok |  |  |  |
| internal-relative | registeredorchestrators | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators.mdx | true | ok |  |  |  |
| internal-relative | bond | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond.mdx | true | ok |  |  |  |
| internal-relative | unbond | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond.mdx | true | ok |  |  |  |
| internal-relative | rebond | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond.mdx | true | ok |  |  |  |
| internal-relative | activateorchestrator | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator.mdx | true | ok |  |  |  |
| internal-relative | reward | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward.mdx | true | ok |  |  |  |
| internal-relative | setbroadcastconfig | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig.mdx | true | ok |  |  |  |
| internal-relative | setmaxpriceforcapability | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx | true | ok |  |  |  |
| internal-relative | transfertokens | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens.mdx | true | ok |  |  |  |
| internal-relative | signmessage | v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage.mdx | true | ok |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/_delete-all-api.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #text-to-image |  | null | skipped |  |  |  |
| empty | #image-to-image |  | null | skipped |  |  |  |
| empty | #image-to-video |  | null | skipped |  |  |  |
| empty | #upscale |  | null | skipped |  |  |  |
| empty | #audio-to-text |  | null | skipped |  |  |  |
| empty | #segment-anything-2 |  | null | skipped |  |  |  |
| empty | #llm |  | null | skipped |  |  |  |
| empty | #image-to-text |  | null | skipped |  |  |  |
| empty | #live-video-to-video |  | null | skipped |  |  |  |
| empty | #text-to-speech |  | null | skipped |  |  |  |
| empty | #health |  | null | skipped |  |  |  |
| empty | #hardware-info |  | null | skipped |  |  |  |
| empty | #hardware-stats |  | null | skipped |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/ai-worker-api.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/hardware-info.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/hardware-stats.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/api-reference/health.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/cli-commands.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/wiki |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/reference/technical/configuration-flags.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/reference/technical/contract-addresses.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/go-livepeer/cli-reference.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer/livepeer.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/tree/master/doc |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/reference/technical/go-livepeer/gpu-support.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/doc/gpu.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/gtx-950-quadro-p400-benchmarks/1497 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/dual-ethash-mining-transcoding-w-rtx-3080-10g-cuda-mps/1161 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/gtx-950-quadro-p400-benchmarks/1497 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/nvidia-quadro-t600-benchmark/1650 |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/resources/reference/technical/go-livepeer/hardware-requirements.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./gpu-support | v2/gateways/resources/reference/technical/go-livepeer/gpu-support.mdx | true | ok |  |  |  |

### v2/gateways/resources/reference/technical/go-livepeer/prometheus-metrics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/monitoring-setup | v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx | true | ok |  |  |  |

### v2/gateways/resources/reference/technical/orchestrator-offerings.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/resources/reference/technical/technical-architecture.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/setup/configure.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-configuration | v2/gateways/guides/payments-and-pricing/pricing-configuration.mdx | true | ok |  |  |  |

### v2/gateways/setup/configure/configuration-reference.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/setup/connect.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/verify | v2/gateways/setup/verify.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/orchestrator-selection | v2/gateways/guides/advanced-operations/orchestrator-selection.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/gateway-discoverability | v2/gateways/guides/advanced-operations/gateway-discoverability.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/connect/lp-marketplace | v2/gateways/setup/connect/lp-marketplace.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/configuration-flags | v2/gateways/resources/reference/technical/configuration-flags.mdx | true | ok |  |  |  |

### v2/gateways/setup/connect/connect-with-offerings.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/discovery/discovery.go#L64-L111 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/handlers.go#L275-L295 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/common/types.go#L166-L176 |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/setup/connect/discover-offerings.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/discovery/discovery.go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/handlers.go#L275-L295 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/common/types.go#L166-L176 |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/setup/connect/lp-marketplace.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/setup/guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ../guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../guides/deployment-details/setup-options | v2/gateways/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-relative | ../guides/tutorials/tutorials-resources | v2/gateways/guides/tutorials/tutorials-resources.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |
| internal-relative | ../guides/node-pipelines/ai-pipelines | v2/gateways/guides/node-pipelines/ai-pipelines.mdx | true | ok |  |  |  |

### v2/gateways/setup/install.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://docs.docker.com/get-docker/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://linux.org |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/setup/monitor.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/gateways |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/gateways |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/gateways |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/technical/go-livepeer/prometheus-metrics.mdx | true | ok |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/technical/go-livepeer/prometheus-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | true | ok |  |  |  |

### v2/gateways/setup/monitor/monitor-and-optimise.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/ai_mediaserver.go |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/setup/monitor/monitoring-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/health-checks | v2/gateways/guides/monitoring-and-tooling/health-checks.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/advanced-operations/scaling | v2/gateways/guides/advanced-operations/scaling.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/go-livepeer/prometheus-metrics | v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/on-chain-metrics | v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards | v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx | true | ok |  |  |  |

### v2/gateways/setup/prepare.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.alchemy.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.infura.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.ankr.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://chainstack.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.quicknode.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| external-https | https://chainlist.org/chain/42161 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-rpc | v2/gateways/resources/compendium/arbitrum-rpc.mdx | true | ok |  |  |  |
| external-https | https://docs.arbitrum.io/node-running/how-tos/running-a-full-node |  | null | 🟡 untested-external |  |  |  |
| external-https | https://support.metamask.io/configure/accounts/how-to-view-your-account-details-and-public-address |  | null | 🟡 untested-external |  |  |  |
| external-https | https://support.ledger.com/article/8978919811485-zd |  | null | 🟡 untested-external |  |  |  |
| external-https | https://support.trezor.io/en/articles/360018565096-trezor-faq |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-exchanges | v2/gateways/resources/compendium/arbitrum-exchanges.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |

### v2/gateways/setup/prepare/on-chain-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #2-0 |  | null | skipped |  |  |  |
| empty | #2-1 |  | null | skipped |  |  |  |
| empty | #2-2 |  | null | skipped |  |  |  |
| empty | #2-3 |  | null | skipped |  |  |  |
| empty | #2-4 |  | null | skipped |  |  |  |
| empty | #2-5 |  | null | skipped |  |  |  |
| empty | #2-6 |  | null | skipped |  |  |  |
| empty | #2-7 |  | null | skipped |  |  |  |
| empty | #2-8 |  | null | skipped |  |  |  |
| empty | #2-9 |  | null | skipped |  |  |  |
| empty | #2-10 |  | null | skipped |  |  |  |
| empty | #2-11 |  | null | skipped |  |  |  |
| empty | #2-12 |  | null | skipped |  |  |  |

### v2/gateways/setup/publish/connect-with-offerings.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/discovery/discovery.go#L64-L111 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/server/handlers.go#L275-L295 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://gifsec.com/wp-content/uploads/2023/01/the-office-gif-3.gif |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/setup/requirements/on-chain-setup/bridge-lpt-to-arbitrum.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://user-images.githubusercontent.com/89408276/155851894-eb959beb-3269-40b1-8d50-8768bf15f9f2.jpg |  | null | 🟡 untested-external |  |  |  |
| external-https | https://user-images.githubusercontent.com/89408276/155851630-8e60a17a-b6bd-4a65-972c-53d34c600026.jpg |  | null | 🟡 untested-external |  |  |  |
| external-https | https://user-images.githubusercontent.com/89408276/155850572-2337514c-f6ad-419a-a9bf-94e7d3e1d891.jpg |  | null | 🟡 untested-external |  |  |  |
| external-https | https://user-images.githubusercontent.com/89408276/155375033-6fd66e8a-53ab-43e9-9fe6-3a0cec847a55.jpg |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x289ba1701C2F088cf0faf8B3705246331cB8A839#writeContract |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/address/0x6D2457a4ad276000A615295f7A80F79E48CcD318 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://etherscan.io/unitconverter |  | null | 🟡 untested-external |  |  |  |
| external-https | https://app.uniswap.org/#/swap?chain=arbitrum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://retryable-tx-panel.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v1/images/delegating-guides/arbitrum-retry-ui.png | v1/images/delegating-guides/arbitrum-retry-ui.png | true | ok |  |  |  |
| external-https | https://user-images.githubusercontent.com/23727056/176745651-98ff56d0-9c0a-4c2d-b9fe-bf3ba1d537a7.png |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/arbos/l1-to-l2-messaging |  | null | 🟡 untested-external |  |  |  |

### v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #on-chain-requirements |  | null | skipped |  |  |  |
| empty | #security-notes |  | null | skipped |  |  |  |
| empty | #required-on-chain-flags |  | null | skipped |  |  |  |
| empty | #where-your-account-data-is-stored |  | null | skipped |  |  |  |
| empty | #rpc-url |  | null | skipped |  |  |  |
| empty | #eth-account |  | null | skipped |  |  |  |
| empty | #eth-password |  | null | skipped |  |  |  |
| empty | #eth-keystore |  | null | skipped |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-rpc | v2/gateways/resources/compendium/arbitrum-rpc.mdx | true | ok |  |  |  |
| external-https | https://docs.arbitrum.io/build-decentralized-apps/public-chains#arbitrum-one |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| empty | #rpc-url |  | null | skipped |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Remote_procedure_call |  | null | 🟡 untested-external |  |  |  |
| external-https | https://chainlist.org/chain/42161 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.alchemy.com/docs/reference/arbitrum-api-quickstart |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.ankr.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://chainstack.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.infura.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://moralis.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.quicknode.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/5691cb48/accountmanager.go#L50-L69 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/get-started/arbitrum-introduction |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| external-https | https://geth.ethereum.org/docs/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/ethereum/go-ethereum/tree/master/cmd/ethkey |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.myetherwallet.com/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | true | ok |  |  |  |
| external-https | https://chainlist.org/chain/42161 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-rpc | v2/gateways/resources/compendium/arbitrum-rpc.mdx | true | ok |  |  |  |
| external-https | https://docs.arbitrum.io/build-decentralized-apps/reference/node-providers#third-party-rpc-providers |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/build-decentralized-apps/reference/node-providers#third-party-rpc-providers |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/node-running/how-tos/running-a-full-node |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/node-running/how-tos/running-a-full-node |  | null | 🟡 untested-external |  |  |  |
| external-https | https://support.metamask.io/configure/accounts/how-to-view-your-account-details-and-public-address |  | null | 🟡 untested-external |  |  |  |
| external-https | https://support.ledger.com/article/8978919811485-zd |  | null | 🟡 untested-external |  |  |  |
| external-https | https://support.trezor.io/en/articles/360018565096-trezor-faq |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/fund-gateway | v2/gateways/guides/payments-and-pricing/fund-gateway.mdx | true | ok |  |  |  |

### v2/gateways/setup/requirements/setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | # |  | null | skipped |  |  |  |
| empty | # |  | null | skipped |  |  |  |
| external-https | https://arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Remote_procedure_call |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| external-https | https://docs.livepeer.org/v2/orchestrators/setup/guide |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/on-chain-setup/on-chain | v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx | true | ok |  |  |  |

### v2/gateways/setup/transcoding/transcoding-options.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/gateways/setup/transcoding/transcoding.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |

### v2/gateways/setup/verify.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/setup/install | v2/gateways/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/configure | v2/gateways/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/monitor | v2/gateways/setup/monitor.mdx | true | ok |  |  |  |

### v2/home/about/benefits.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.linkedin.com/in/shannon-wells/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/livepeer-inc-in-the-age-of-the-livepeer-foundation/2850 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/home/solutions/showcase | v2/home/solutions/showcase.mdx | true | ok |  |  |  |
| internal-rooted | /snippets/assets/media/images/home/LivepeerStats.png | snippets/assets/media/images/home/LivepeerStats.png | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/home/about/ecosystem.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://en.wikipedia.org/wiki/Decentralized_autonomous_organization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://twitter.com/richogrady |  | null | 🟡 untested-external |  |  |  |
| external-https | https://linkedin.com/in/rich-ogrady-3400042/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://roadmap.livepeer.org/roadmap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/foundation/14 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/events/423160867534929930/1394387788568203274 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/growth-advisory-board-candidacy/2877/14 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/introducing-workstreams-a-new-era-of-execution-for-the-livepeer-project/3030 |  | null | 🟡 untested-external |  |  |  |
| empty | #livepeer-dao |  | null | skipped |  |  |  |
| empty | #special-purpose-entities |  | null | skipped |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/about-the-governance-category/1059 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Request_for_proposal |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/guides/treasury/overview | v2/delegators/guides/treasury/overview.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/t/livepeer-governance-workstreams-govworks-whitepaper/3720 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/livepeer-blog/the-confluence-upgrade-is-live-3b6b342ea71e |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0073.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/ai-video-spe-stage-3-pre-proposal/2693 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://lenstube.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dlive.tv/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Request_for_proposal |  | null | 🟡 untested-external |  |  |  |
| empty | #livepeer-dao |  | null | skipped |  |  |  |
| external-https | https://forum.livepeer.org/c/special-purpose-entities/15 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://productlane.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer-ai.productlane.com/changelog |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer-cloud.productlane.com/changelog |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.com/gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer-streamplace.productlane.com/changelog |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Decentralized_autonomous_organization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/launching-the-livepeer-foundation/2849 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/a-real-time-update-to-the-livepeer-network-vision |  | null | 🟡 untested-external |  |  |  |
| empty | #livepeer-inc |  | null | skipped |  |  |  |
| empty | #livepeer-foundation |  | null | skipped |  |  |  |
| empty | #livepeer-dao |  | null | skipped |  |  |  |
| empty | #special-purpose-entities-spes |  | null | skipped |  |  |  |
| external-https | https://blog.livepeer.org/introducing-the-livepeer-foundation/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/launching-the-livepeer-foundation/2849 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/shtukaresearch/livepeer-data-geography/blob/651a56e8/roles/foundation.md#L1-L14 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/launching-the-livepeer-foundation/2849 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/delegation/overview | v2/delegators/delegation/overview.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/t/launching-the-livepeer-foundation/2849 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/special-purpose-entities-a-new-model-for-livepeer-ecosystem-growth/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://imgflip.com/embed/aidjmm |  | null | 🟡 untested-external |  |  |  |
| external-https | https://imgflip.com/embed/aidl1c |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |

### v2/home/about/evolution.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0001.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0010.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0030.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0080.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0091.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/blob/main/LIPs/LIP-0100.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/livepeer-inc-in-the-age-of-the-livepeer-foundation/2850 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/livepeer-is-live/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/how-livepeer-works/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/category/use-cases/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/watch?v=8mJZ2c9wq9A |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/introducing-ai-inference-on-livepeer/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/introducing-livepeer-cascade-a-vision-for-livepeers-future-in-the-age-of-real-time-ai-video/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/livepeer-foundation-is-live/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://roadmap.livepeer.org/roadmap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/domain/00_HOME/evolution.png |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/home/about/roadmap | v2/home/about/roadmap.mdx | true | ok |  |  |  |

### v2/home/about/roadmap.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://roadmap.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/glossary/world-models/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://roadmap.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/home/about/vision.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://medium.com/livepeer-blog/the-livepeer-development-stack-technology-behind-live-streaming-built-on-ethereum-d6a06158d5e2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.linkedin.com/in/doug-petkanics/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.linkedin.com/in/erictang/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://medium.com/livepeer-blog/livepeer-for-beginners-3b49945c24a7?source=collection_home---------163---------------------------- |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/primer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/media/videos/livepeer-founders-post.mp4 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/home/about/roadmap | v2/home/about/roadmap.mdx | true | ok |  |  |  |

### v2/home/mission-control.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/domain/00_HOME/Eric%20Shreck%20Gif.gif |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about/concepts/livepeer-overview | v2/about/concepts/livepeer-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/transcoding-quickstart | v2/developers/get-started/transcoding-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/get-started/ai-quickstart | v2/developers/get-started/ai-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/community/portal | v2/community/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/home/solutions/showcase | v2/home/solutions/showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/setup/guide | v2/gateways/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/concepts/overview | v2/delegators/concepts/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/guides/opportunities/overview | v2/developers/guides/opportunities/overview.mdx | true | ok |  |  |  |

### v2/home/primer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/developers/portal | v2/developers/portal.mdx | true | ok |  |  |  |
| external-https | https://blog.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/invite/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://daydream.live/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |
| internal-rooted | /developers/portal | v2/developers/portal.mdx | true | ok |  |  |  |
| external-https | https://blog.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/invite/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjgxanlyczB0NW05M2xlYWEwdDg1N20zanowNGxmdzNnbWZ2bHQwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ae7SI3LoPYj8Q/giphy.gif |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/community/portal | v2/community/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/ | v2/about/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/home/solutions/showcase | v2/home/solutions/showcase.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/portal | v2/solutions/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/portal | v2/developers/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/portal | v2/gateways/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/community/portal | v2/community/portal.mdx | true | ok |  |  |  |

### v2/home/resources/glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./glossary-data.json | v2/home/resources/glossary-data.json | true | ok |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Intelligent_agent |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/transformers/en/main_classes/pipelines |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Avatar_(computing |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Comfy-Org/ComfyUI |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Distributed_artificial_intelligence |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Digital_twin |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Text-to-video_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Inference_engine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Interactive_media |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Machine_learning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Non-player_character |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Neural_style_transfer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Synthetic_data |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Image_scaling |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Generative_artificial_intelligence |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Blockchain |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Decentralization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/what-is-ether/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Ethereum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/layer-2/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Open-source_software |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/web3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/smart-contracts/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/web3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Micropayment |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/docs/video-developers/core-concepts/payments |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Frame_rate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Latency_(audio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/WebRTC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Streaming_media |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transcoding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_on_demand |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Graphics_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Node_(networking |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Scalability |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/wiki/wiki/Governance |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/about | v2/about/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/home/get-started | v2/home/get-started | false | missing | /v2/home (high path similarity, 0.6667) | /v2/home (high path similarity, 0.6667) | /v2/home/mission-control (high path similarity, 0.6667) |

### v2/home/solutions/applications.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://platform.twitter.com/embed/Tweet.html?id=1983846299586683236&theme=dark |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/embed/Tweet.html?id=1983585881865982149&theme=dark |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/embed/Tweet.html?id=1981406315693187430&theme=dark |  | null | 🟡 untested-external |  |  |  |

### v2/home/solutions/landscape.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/t/livepeer-inc-in-the-age-of-the-livepeer-foundation/2850 |  | null | 🟡 untested-external |  |  |  |

### v2/home/solutions/showcase.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.instagram.com/reel/DPd6RUsErGF/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.google.com/forms/d/e/1FAIpQLSeJ4uoxQ9LUSg89RDWcGiTsbePXsSkRXzGzrdyJ8RVrM1171Q/viewform?usp=sharing&ouid=103197690869380433914 |  | null | 🟡 untested-external |  |  |  |

### v2/home/solutions/trending.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://download.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://download.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://download.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/@livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://x.com/Livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/watch?v=-iO7HsR3KE4&#x26;list=PLkw6hm1fcjtF1OYFCF20AwBUtGygQxTQV&#x26;index=3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.google.com/presentation/d/1Qg6u1Ns1RU2Gw4m-dzGu_WeKx9z0v5HcbHTpWwA91Yw/embed |  | null | 🟡 untested-external |  |  |  |

### v2/home/solutions/verticals.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/definitions.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/ecosystem.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/internal-overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.notion.so/livepeer/Documentation-Reviews-2c50a3485687800e98e8f3e1f1a802a9 |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../resources/documentation-guide/documentation-overview | v2/resources/documentation-guide/documentation-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/overview/strategic-alignment | v2/internal/overview/strategic-alignment.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/definitions | v2/internal/definitions.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/overview/personas | v2/internal/overview/personas.mdx | true | ok |  |  |  |
| internal-relative | ./docs-philosophy | v2/internal/docs-philosophy | false | missing | /v2/internal/overview/docs-philosophy (same leaf segment match, 0.65) | /v2/internal/definitions (high path similarity, 0.6667) | /v2/internal/ecosystem (high path similarity, 0.6667) |
| internal-rooted | /v2/internal/ecosystem | v2/internal/ecosystem.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/references | v2/internal/references.mdx | true | ok |  |  |  |
| external-https | https://www.notion.so/livepeer/Documentation-Reviews-2c50a3485687800e98e8f3e1f1a802a9 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/documentation-overview | v2/resources/documentation-guide/documentation-overview.mdx | true | ok |  |  |  |

### v2/internal/overview/about.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.notion.so/livepeer/Documentation-Reviews-2c50a3485687800e98e8f3e1f1a802a9 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/documentation-overview | v2/resources/documentation-guide/documentation-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/overview/strategic-alignment | v2/internal/overview/strategic-alignment.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/definitions | v2/internal/definitions.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/overview/personas | v2/internal/overview/personas.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/overview/docs-philosophy | v2/internal/overview/docs-philosophy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/ecosystem | v2/internal/ecosystem.mdx | true | ok |  |  |  |
| internal-rooted | /v2/internal/references | v2/internal/references.mdx | true | ok |  |  |  |
| external-https | https://www.notion.so/livepeer/Documentation-Reviews-2c50a3485687800e98e8f3e1f1a802a9 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/documentation-overview | v2/resources/documentation-guide/documentation-overview.mdx | true | ok |  |  |  |

### v2/internal/overview/docs-philosophy.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/overview/governance-pipeline.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/overview/governance.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/docs/blob/main/.github/CODEOWNERS |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/issues/new?template=bug_report.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/issues/new?template=feature_request.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs/issues/new?template=question.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/changelog/changelog | v2/resources/changelog/changelog.mdx | true | ok |  |  |  |
| empty | #quarterly-review-checklist |  | null | skipped |  |  |  |
| external-https | https://github.com/livepeer/docs/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/discord |  | null | 🟡 untested-external |  |  |  |

### v2/internal/overview/personas.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/shtukaresearch/livepeer-data-geography/tree/main/roles |  | null | 🟡 untested-external |  |  |  |

### v2/internal/overview/strategic-alignment.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/references.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/rfp/aims.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/t/rfp-documentation-restructure/3071 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/internal/rfp/reports/livepeer-ai-first-docs-plan.pdf | v2/internal/rfp/reports/livepeer-ai-first-docs-plan.pdf | true | ok |  |  |  |

### v2/internal/rfp/deliverables.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/rfp/outcomes.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/rfp/problem-statements.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/internal/rfp/report.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/concepts/architecture.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/capabilities | v2/orchestrators/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/technical/contract-addresses | v2/orchestrators/resources/technical/contract-addresses | false | missing | /v2/gateways/resources/reference/technical/contract-addresses (same leaf segment match, 0.65) | /v2/orchestrators/resources/reference/technical/contract-addresses (same leaf segment match, 0.65) | /v2/resources/references/contract-addresses (same leaf segment match, 0.65) |
| internal-rooted | /v2/orchestrators/concepts/role | v2/orchestrators/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/capabilities | v2/orchestrators/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payment-flow | v2/orchestrators/guides/payments-and-pricing/payment-flow | false | missing | /v2/orchestrators/guides/payments-and-pricing/payment-receipts (high path similarity, 0.8) | /v2/orchestrators/guides/payments-and-pricing/payments (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) |

### v2/orchestrators/concepts/capabilities.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/concepts/architecture | v2/orchestrators/concepts/architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/pricing-strategy | v2/orchestrators/guides/payments-and-pricing/pricing-strategy | false | missing | /v2/gateways/guides/payments-and-pricing/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/payments-and-pricing/payment-receipts (high path similarity, 0.8) |
| internal-rooted | /v2/gateways/concepts/role | v2/gateways/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/role | v2/orchestrators/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/architecture | v2/orchestrators/concepts/architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/job-types | v2/orchestrators/guides/workloads-and-ai/job-types | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |

### v2/orchestrators/concepts/composable/orchestratorRole.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/shtukaresearch/livepeer-data-geography/tree/main/roles |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/shtukaresearch/livepeer-data-geography/tree/main/roles |  | null | 🟡 untested-external |  |  |  |

### v2/orchestrators/concepts/incentive-model.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/rewards-and-fees | v2/orchestrators/guides/staking-and-rewards/rewards-and-fees | false | missing | /v2/orchestrators/guides/staking-and-rewards/delegate-operations (high path similarity, 0.8) | /v2/orchestrators/guides/staking-and-rewards/earning-model (high path similarity, 0.8) | /v2/orchestrators/guides/staking-and-rewards/network-participation (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/quickstart | /v2/orchestrators/quickstart | true | ok-folder-route |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/capabilities | v2/orchestrators/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/pricing-strategy | v2/orchestrators/guides/payments-and-pricing/pricing-strategy | false | missing | /v2/gateways/guides/payments-and-pricing/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/payments-and-pricing/payment-receipts (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/attracting-delegates | v2/orchestrators/guides/staking-and-rewards/attracting-delegates | false | missing | /v2/orchestrators/guides/staking-and-rewards/delegate-operations (high path similarity, 0.8) | /v2/orchestrators/guides/staking-and-rewards/earning-model (high path similarity, 0.8) | /v2/orchestrators/guides/staking-and-rewards/network-participation (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/concepts/role | v2/orchestrators/concepts/role.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/capabilities | v2/orchestrators/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/pricing-strategy | v2/orchestrators/guides/payments-and-pricing/pricing-strategy | false | missing | /v2/gateways/guides/payments-and-pricing/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/payments-and-pricing/payment-receipts (high path similarity, 0.8) |
| internal-rooted | /v2/gateways/concepts/business-model | v2/gateways/concepts/business-model.mdx | true | ok |  |  |  |

### v2/orchestrators/concepts/role.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/concepts/capabilities | v2/orchestrators/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/navigator | v2/orchestrators/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/capabilities | v2/orchestrators/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/capabilities | v2/orchestrators/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/architecture | v2/orchestrators/concepts/architecture.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/navigator | v2/orchestrators/navigator.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/advanced-operations/dep-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/concepts/rs-workloads | v2/orchestrators/concepts/rs-workloads | false | missing | /v2/orchestrators/concepts/architecture (high path similarity, 0.75) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.75) | /v2/orchestrators/concepts/incentive-model (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/operations/rc-ai-pipelines | v2/orchestrators/operations/rc-ai-pipelines | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |
| internal-rooted | /v2/orchestrators/operations/rs-rewards-and-fees | v2/orchestrators/operations/rs-rewards-and-fees | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |
| internal-rooted | /v2/orchestrators/guides/x-governance | v2/orchestrators/guides/x-governance | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/operations/x-optimise | v2/orchestrators/operations/x-optimise | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |
| internal-rooted | /v2/orchestrators/operations/p-fleet-ops | v2/orchestrators/operations/p-fleet-ops | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |

### v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/gateway-relationships | v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/dual-mode-configuration | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://grafana.com/docs/loki/latest/query/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/setup/configure | v2/orchestrators/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/troubleshooting | v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox | v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/advanced-operations/pool-operators.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| empty | #accepting-workers |  | null | skipped |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/scale-operations | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/advanced-operations/scale-operations.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/livepeer-monitoring |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/doc/multi-o.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/contact |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/pool-operators | v2/orchestrators/guides/advanced-operations/pool-operators.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/deployment-details/dual-mode-configuration | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/orchestrator-offerings | v2/gateways/resources/reference/technical/orchestrator-offerings.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/ai-on-livepeer | v2/developers/concepts/ai-on-livepeer.mdx | true | ok |  |  |  |
| external-https | https://huggingface.co/SG161222/RealVisXL_V4.0_Lightning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/openai/whisper-large-v3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/facebookresearch/segment-anything-2 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| external-https | https://www.livepeer.cloud/self-hosting-livepeers-llm-pipeline-deploying-an-ollama-based-gpu-runner-for-ai-orchestrators/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |
| external-https | https://www.youtube.com/embed/UKWdvJBqrNw |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/watch?v=UKWdvJBqrNw |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/watch?v=7a6kBrL0RYg |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/ai-model-management | v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| empty | #warm-vs-cold-models |  | null | skipped |  |  |  |
| empty | #optimisation-flags |  | null | skipped |  |  |  |
| external-https | https://huggingface.co/SG161222/RealVisXL_V4.0_Lightning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/ByteDance/SDXL-Lightning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/Salesforce/blip-image-captioning-large |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/openai/whisper-large-v3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/facebookresearch/segment-anything-2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://hub.docker.com/r/tztcloud/livepeer-ollama-runner |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.cloud/self-hosting-livepeers-llm-pipeline-deploying-an-ollama-based-gpu-runner-for-ai-orchestrators/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| external-https | https://github.com/chengzeyi/stable-fast |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/horseee/DeepCache |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/chengzeyi/stable-fast |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/chengzeyi/stable-fast |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/horseee/DeepCache |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/scale-operations | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/concepts/ai-on-livepeer | v2/developers/concepts/ai-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/orchestrator-offerings | v2/gateways/resources/reference/technical/orchestrator-offerings.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| external-https | https://www.youtube.com/embed/Kf3fV00XFRU |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/concepts/ai-on-livepeer | v2/developers/concepts/ai-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/resources/reference/technical/orchestrator-offerings | v2/gateways/resources/reference/technical/orchestrator-offerings.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines | v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/ai-model-management | v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/chengzeyi/stable-fast |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/horseee/DeepCache |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/scale-operations | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/prepare | v2/orchestrators/setup/prepare.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/scale-operations | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://huggingface.co/models |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/settings/tokens |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/ai-model-management | v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/ai-model-management | v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://mirror.xyz/livepeer.eth |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ComfyUI-Stream-Pack |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-configuration | v2/gateways/guides/payments-and-pricing/pricing-configuration.mdx | true | ok |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arxiv.org/abs/2312.12491 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/blob/main/runner/src/runner/live/pipelines/interface.py |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope-runner |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-worker |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/LiheYoung/depth-anything-large-hf |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/IDEA-Research/DWPose |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arxiv.org/abs/2302.05543 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/tencent-ailab/IP-Adapter |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/embed/7a6kBrL0RYg |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/watch?v=UKWdvJBqrNw |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |
| external-https | https://docs.chain.link/data-feeds/price-feeds |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |
| external-https | https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/workload-options | v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/troubleshooting | v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/pool-operators | v2/orchestrators/guides/advanced-operations/pool-operators.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/scale-operations | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations | v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations | v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-hosting | v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-hosting | v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/ai-model-management | v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/gpu-support | v2/orchestrators/resources/gpu-support | false | missing | /v2/gateways/resources/reference/go-livepeer/gpu-support (same leaf segment match, 0.65) | /v2/gateways/resources/reference/technical/go-livepeer/gpu-support (same leaf segment match, 0.65) | /v2/orchestrators/resources/reference/gpu-support (same leaf segment match, 0.65) |

### v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/pricing-strategy | v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/gateway-relationships | v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payment-receipts | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/requirements | v2/orchestrators/guides/operator-considerations/requirements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/gateway-relationships | v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |

### v2/orchestrators/guides/deployment-details/join-a-pool.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://titan-node.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/Titan-Node/Titan-Node-Pool |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Titan-Node/Titan-Node-Pool/tree/main/docker |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/setup-options | v2/orchestrators/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/community-pools | v2/orchestrators/resources/community-pools | false | missing | /v2/orchestrators/resources/knowledge-hub/community-pools (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.75) | /v2/orchestrators/resources/operator-terms (high path similarity, 0.75) |

### v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/advanced-operations/run-a-pool | v2/orchestrators/guides/advanced-operations/run-a-pool | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/deployment-details/setup-options | v2/orchestrators/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/run-a-pool | v2/orchestrators/guides/advanced-operations/run-a-pool | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/gateways-orchestrators | v2/orchestrators/guides/advanced-operations/gateways-orchestrators | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tools/troubleshooting | v2/orchestrators/guides/monitoring-and-tools/troubleshooting | false | missing | /v2/developers/guides/ai/troubleshooting (same leaf segment match, 0.65) | /v2/gateways/guides/monitoring-and-tooling/troubleshooting (same leaf segment match, 0.65) | /v2/orchestrators/guides/monitoring-and-tooling/troubleshooting (same leaf segment match, 0.65) |
| internal-rooted | /v2/orchestrators/guides/deployment-details/setup-options | v2/orchestrators/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/run-a-pool | v2/orchestrators/guides/advanced-operations/run-a-pool | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/large-scale-operations | v2/orchestrators/guides/advanced-operations/large-scale-operations | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.8) |

### v2/orchestrators/guides/deployment-details/setup-options.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup | v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/pool-operators | v2/orchestrators/guides/advanced-operations/pool-operators.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/dual-mode-configuration | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/workload-options | v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/requirements | v2/orchestrators/guides/operator-considerations/requirements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/deployment-details/siphon-setup.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/deployment-details/setup-options | v2/orchestrators/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| external-https | https://github.com/Stronk-Tech/OrchestratorSiphon |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/setup/rs-install | v2/orchestrators/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/setup-options | v2/orchestrators/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup | v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/troubleshooting | v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-monitoring |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/troubleshooting | v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/rickstaa/livepeer-growth-dashboard |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/rickstaa/livepeer-governance-dashboard |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/stronk/livepeer-arbitrum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-monitoring |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/stream-tester |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/mikezupper/livepeer-ai-job-tester |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/explorer-operations | v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #transcoding-errors |  | null | skipped |  |  |  |
| empty | #gpu-and-memory-errors |  | null | skipped |  |  |  |
| empty | #reward-and-gas-errors |  | null | skipped |  |  |  |
| empty | #ai-runner-errors |  | null | skipped |  |  |  |
| empty | #networking-and-connectivity |  | null | skipped |  |  |  |
| empty | #account-and-keystore-errors |  | null | skipped |  |  |  |
| empty | #general-diagnostics |  | null | skipped |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Advanced_Video_Coding#Levels |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Advanced_Video_Coding#Levels |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/requirements#batch-ai-inference | v2/orchestrators/guides/operator-considerations/requirements.mdx | true | ok |  |  |  |
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/siphon-setup | v2/orchestrators/guides/deployment-details/siphon-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/requirements#driver-requirements | v2/orchestrators/guides/operator-considerations/requirements.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup#troubleshooting | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/explorer-operations | v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/operator-considerations/business-case.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/pricing-strategy | v2/orchestrators/guides/payments-and-pricing/pricing-strategy | false | missing | /v2/gateways/guides/payments-and-pricing/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/payments-and-pricing/payment-receipts (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/pricing-strategy | v2/orchestrators/guides/payments-and-pricing/pricing-strategy | false | missing | /v2/gateways/guides/payments-and-pricing/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/payments-and-pricing/payment-receipts (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tools/metrics-monitoring | v2/orchestrators/guides/monitoring-and-tools/metrics-monitoring | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/pricing-strategy | v2/orchestrators/guides/payments-and-pricing/pricing-strategy | false | missing | /v2/gateways/guides/payments-and-pricing/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy (same leaf segment match, 0.65) | /v2/orchestrators/guides/payments-and-pricing/payment-receipts (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/gateways-orchestrators | v2/orchestrators/guides/advanced-operations/gateways-orchestrators | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/protocol-influence | v2/orchestrators/guides/operator-considerations/protocol-influence | false | missing | /v2/orchestrators/guides/operator-considerations/business-case (high path similarity, 0.8) | /v2/orchestrators/guides/operator-considerations/feasibilits-sources (high path similarity, 0.8) | /v2/orchestrators/guides/operator-considerations/operator-impact (high path similarity, 0.8) |

### v2/orchestrators/guides/operator-considerations/operator-impact.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/governance/17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/network-participation | v2/orchestrators/guides/staking-and-rewards/network-participation.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/network-participation | v2/orchestrators/guides/staking-and-rewards/network-participation.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/concepts/overview | v2/delegators/concepts/overview.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/operator-considerations/operator-rationale.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/incentive-model | v2/orchestrators/concepts/incentive-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/navigator | v2/orchestrators/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/requirements | v2/orchestrators/guides/operator-considerations/requirements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/requirements | v2/orchestrators/guides/operator-considerations/requirements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/business-case | v2/orchestrators/guides/operator-considerations/business-case.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/navigator | v2/orchestrators/navigator.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/operator-considerations/requirements.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://developer.nvidia.com/video-encode-decode-gpu-support-matrix |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/configure | v2/orchestrators/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payment-receipts | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/configure | v2/orchestrators/setup/configure.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/setup-options | v2/orchestrators/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payments | v2/orchestrators/guides/payments-and-pricing/payments.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payments | v2/orchestrators/guides/payments-and-pricing/payments.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/payment-guide | v2/gateways/guides/payments-and-pricing/payment-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/payments-and-pricing/payments.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #funding-your-node |  | null | skipped |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| external-https | https://bridge.arbitrum.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/explorer/blob/main/lib/roi.ts |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/delegation/choose-an-orchestrator | v2/delegators/delegation/choose-an-orchestrator.mdx | true | ok |  |  |  |
| external-https | https://livepeer.org/primer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/concepts/purpose | v2/delegators/concepts/purpose.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/orchestrators/guides/staking-and-rewards/earning-model.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/treasury |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payment-receipts | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| external-https | https://www.youtube.com/embed/OVMjzJKMJnI |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payment-receipts | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/network-participation | v2/orchestrators/guides/staking-and-rewards/network-participation.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/staking-and-rewards/network-participation.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v1/images/poll.png | v1/images/poll.png | true | ok |  |  |  |
| internal-rooted | /v1/images/vote-livepeer-cli.png | v1/images/vote-livepeer-cli.png | true | ok |  |  |  |
| internal-rooted | /v1/images/vote-livepeer-cli-instructions.png | v1/images/vote-livepeer-cli-instructions.png | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/delegators/guides/governance/overview | v2/delegators/guides/governance/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |

### v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io/gastracker |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payment-receipts | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.youtube.com/embed/OVMjzJKMJnI |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/delegate-operations | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payment-receipts | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/tutorials/zero-to-first-reward | v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/ai-model-management | v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/dual-mode-configuration | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/payments-and-pricing/payment-receipts | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/tutorials/add-ai-to-video-node | v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/ai-model-management | v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/tutorials/zero-to-first-reward | v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/tutorials/ai-earning-quickstart | v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/dual-mode-configuration | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/go-livepeer/pull/3791 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/pull/3822 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-exchanges | v2/gateways/resources/compendium/arbitrum-exchanges.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/setup/requirements/on-chain-setup/on-chain | v2/gateways/setup/requirements/on-chain-setup/on-chain.mdx | true | ok |  |  |  |
| external-https | https://infura.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://alchemy.com |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/compendium/arbitrum-rpc | v2/gateways/resources/compendium/arbitrum-rpc.mdx | true | ok |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/j0sh/livepeer-python-gateway/pulls |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/blob/main/docs/custom-pipeline.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/payments/remote-signers | v2/gateways/payments/remote-signers | false | missing | /v2/gateways/guides/payments-and-pricing/remote-signers (same leaf segment match, 0.65) | /v2/gateways/GOVERNANCE (high path similarity, 0.5) | /v2/gateways/concepts/architecture (high path similarity, 0.5) |
| internal-rooted | /v2/gateways/payments/payment-clearinghouse | v2/gateways/payments/payment-clearinghouse | false | missing | /v2/gateways/GOVERNANCE (high path similarity, 0.5) | /v2/gateways/concepts/architecture (high path similarity, 0.5) | /v2/gateways/concepts/business-model (high path similarity, 0.5) |
| internal-rooted | /v2/gateways/setup/monitor/monitor-and-optimise | v2/gateways/setup/monitor/monitor-and-optimise.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface | v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/gateway-relationships | v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/tutorials/realtime-ai-tutorial | v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial | v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface | v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx | true | ok |  |  |  |

### v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://bridge.arbitrum.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://bridge.arbitrum.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/tutorials/add-ai-to-video-node | v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/tutorials/ai-earning-quickstart | v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/reward-call-tuning | v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx | true | ok |  |  |  |

### v2/orchestrators/navigator.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/community-pools | v2/orchestrators/resources/community-pools | false | missing | /v2/orchestrators/resources/knowledge-hub/community-pools (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.75) | /v2/orchestrators/resources/operator-terms (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/dual-mode-configuration | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/prepare | v2/orchestrators/setup/prepare.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/business-case | v2/orchestrators/guides/operator-considerations/business-case.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/scale-operations | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-impact | v2/orchestrators/guides/operator-considerations/operator-impact.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/network-participation | v2/orchestrators/guides/staking-and-rewards/network-participation.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/community-pools | v2/orchestrators/resources/community-pools | false | missing | /v2/orchestrators/resources/knowledge-hub/community-pools (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.75) | /v2/orchestrators/resources/operator-terms (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/dual-mode-configuration | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/business-case | v2/orchestrators/guides/operator-considerations/business-case.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/scale-operations | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/setup-options | v2/orchestrators/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/workload-options | v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox | v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/gateway-relationships | v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/roadmap-and-funding/funding-and-support | v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/tutorials/zero-to-first-reward | v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx | true | ok |  |  |  |

### v2/orchestrators/portal.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #whats-a-gateway |  | null | skipped |  |  |  |
| empty | #gateway-services--providers |  | null | skipped |  |  |  |
| empty | #run-a-gateway |  | null | skipped |  |  |  |
| empty | #gateway-tools--dashboards |  | null | skipped |  |  |  |
| empty | #gateway-guides--resources |  | null | skipped |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/navigator | v2/orchestrators/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/operator-considerations/operator-rationale | v2/orchestrators/guides/operator-considerations/operator-rationale.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/workload-options | v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |

### v2/orchestrators/quickstart/AI-prompt-start.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/setup/rs-install | v2/orchestrators/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/large-scale-operations | v2/orchestrators/guides/advanced-operations/large-scale-operations | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.8) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/setup/rs-install | v2/orchestrators/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/job-types | v2/orchestrators/guides/workloads-and-ai/job-types | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/job-types | v2/orchestrators/guides/workloads-and-ai/job-types | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/setup/activate | v2/orchestrators/setup/activate | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/job-types | v2/orchestrators/guides/workloads-and-ai/job-types | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/batch-ai-setup | v2/orchestrators/guides/workloads-and-ai/batch-ai-setup | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/realtime-ai-setup | v2/orchestrators/guides/workloads-and-ai/realtime-ai-setup | false | missing | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup (same leaf segment match, 0.65) | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) |

### v2/orchestrators/quickstart/dep-x-setup-paths.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/join-a-pool | v2/orchestrators/guides/join-a-pool | false | missing | /v2/orchestrators/guides/deployment-details/join-a-pool (same leaf segment match, 0.65) | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/r-run-a-pool | v2/orchestrators/guides/r-run-a-pool | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/operations/p-fleet-ops | v2/orchestrators/operations/p-fleet-ops | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |
| internal-rooted | /v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/concepts/r-role | v2/orchestrators/concepts/r-role | false | missing | /v2/orchestrators/concepts/architecture (high path similarity, 0.75) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.75) | /v2/orchestrators/concepts/incentive-model (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/operations/rs-rewards-and-fees | v2/orchestrators/operations/rs-rewards-and-fees | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |
| internal-rooted | /v2/orchestrators/guides/join-a-pool | v2/orchestrators/guides/join-a-pool | false | missing | /v2/orchestrators/guides/deployment-details/join-a-pool (same leaf segment match, 0.65) | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/r-run-a-pool | v2/orchestrators/guides/r-run-a-pool | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/operations/p-fleet-ops | v2/orchestrators/operations/p-fleet-ops | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |

### v2/orchestrators/quickstart/guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/feasibility-and-hardware/hardware-reference | v2/orchestrators/guides/feasibility-and-hardware/hardware-reference | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/quickstart/video-transcoding | v2/orchestrators/quickstart/video-transcoding.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/setup-paths/join-a-pool | v2/orchestrators/guides/setup-paths/join-a-pool | false | missing | /v2/orchestrators/guides/deployment-details/join-a-pool (same leaf segment match, 0.65) | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earnings | v2/orchestrators/guides/staking-and-rewards/earnings | false | missing | /v2/orchestrators/guides/staking-and-rewards/delegate-operations (high path similarity, 0.8) | /v2/orchestrators/guides/staking-and-rewards/earning-model (high path similarity, 0.8) | /v2/orchestrators/guides/staking-and-rewards/network-participation (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/setup/r-monitor | v2/orchestrators/setup/monitor.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/attracting-delegates | v2/orchestrators/guides/staking-and-rewards/attracting-delegates | false | missing | /v2/orchestrators/guides/staking-and-rewards/delegate-operations (high path similarity, 0.8) | /v2/orchestrators/guides/staking-and-rewards/earning-model (high path similarity, 0.8) | /v2/orchestrators/guides/staking-and-rewards/network-participation (high path similarity, 0.8) |

### v2/orchestrators/quickstart/tutorial.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/quickstart/guide | v2/orchestrators/quickstart/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/quickstart/video-transcoding | v2/orchestrators/quickstart/video-transcoding.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/quickstart/ai-prompt-start | v2/orchestrators/quickstart/ai-prompt-start.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |

### v2/orchestrators/quickstart/video-transcoding.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.docker.com/engine/install/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/quickstart/gateway-setup | v2/gateways/quickstart/gateway-setup.mdx | true | ok |  |  |  |
| internal-relative | ../concepts/job-types | v2/orchestrators/concepts/job-types | false | missing | /v2/orchestrators/concepts/architecture (high path similarity, 0.75) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.75) | /v2/orchestrators/concepts/incentive-model (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/setup/install-go-livepeer | v2/orchestrators/setup/install-go-livepeer | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/setup/install-go-livepeer | v2/orchestrators/setup/install-go-livepeer | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ../resources/cli-flags | v2/orchestrators/resources/cli-flags | false | missing | /v2/orchestrators/resources/reference/technical/cli-flags (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.75) | /v2/orchestrators/resources/operator-terms (high path similarity, 0.75) |

### v2/orchestrators/resources/glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./glossary-data.json | v2/orchestrators/resources/glossary-data.json | true | ok |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Inference_engine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Speech_recognition |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloud.google.com/discover/what-is-batch-inference |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/transformers/model_doc/blip |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Comfy-Org/ComfyUI |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/lllyasviel/ControlNet |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/CUDA |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Diffusion_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Image_translation |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/tasks/image-to-text |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/tasks/image-to-video |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Large_language_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ollama.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/PyTorch |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Image_segmentation |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Stable_Diffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Text-to-image_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Speech_synthesis |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Image_scaling |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/openai/whisper-large-v3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Micropayment |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_codec |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Pixel |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloudinary.com/glossary/video-rendition |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transcoding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/what-is-ether/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://thegraph.com/docs/en/subgraphs/developing/subgraphs/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Central_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Gigabyte |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/graphics-cards/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/graphics-cards/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Command_line_interface |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Graphics_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/GRPC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/NVDEC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/NVENC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/keys/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_random-access_memory |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Webhook |  | null | 🟡 untested-external |  |  |  |
| external-https | https://grafana.com/oss/loki/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Smoke_testing_(software |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Throughput |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators | v2/orchestrators/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |

### v2/orchestrators/resources/knowledge-hub/community-guides.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/c/transcoders/7 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.cloud/self-hosting-livepeers-llm-pipeline-deploying-an-ollama-based-gpu-runner-for-ai-orchestrators/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/bash-script-to-update-livepeer/1513 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/model-support | v2/developers/build/model-support.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/build/byoc | v2/developers/build/byoc.mdx | true | ok |  |  |  |
| external-https | https://www.speedybird.xyz/?page_id=339 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v1/orchestrators/guides/gateway-introspection | v1/orchestrators/guides/gateway-introspection.mdx | true | ok |  |  |  |
| external-https | https://livepeer.tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/stronk-tech |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v1/delegators/guides/yield-calculation | v1/delegators/guides/yield-calculation.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/search?q=titan%20node%20campaign |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.titannode.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.videominer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepool.io/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/pool-operators | v2/orchestrators/guides/advanced-operations/pool-operators.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| external-https | https://www.youtube.com/@LivepeerOrg |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/community/connect/events-and-streams | v2/community/connect/events-and-streams.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-worker |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://thegraph.com/explorer/subgraphs/FGMqFR8PATJJPFwMVEHfaLRCPXhqCjsVnH92xYGqv3Cx |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers/resources/knowledge-hub/awesome-livepeer | v2/developers/resources/knowledge-hub/awesome-livepeer.mdx | true | ok |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/transcoders/7 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |
| internal-rooted | /v2/orchestrators/resources/community-pools | v2/orchestrators/resources/community-pools | false | missing | /v2/orchestrators/resources/knowledge-hub/community-pools (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.75) | /v2/orchestrators/resources/operator-terms (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/resources/technical/cli-flags | v2/orchestrators/resources/technical/cli-flags | false | missing | /v2/orchestrators/resources/reference/technical/cli-flags (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.6) | /v2/orchestrators/resources/knowledge-hub/community-guides (high path similarity, 0.6) |

### v2/orchestrators/resources/knowledge-hub/community-pools.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| empty | # |  | null | skipped |  |  |  |

### v2/orchestrators/resources/operator-terms.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/resources/reference/arbitrum-exchanges.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://hop.exchange/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://stargate.finance/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://app.uniswap.org/swap?chain=arbitrum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://bridge.arbitrum.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/resources/arbitrum-rpc | v2/orchestrators/resources/arbitrum-rpc | false | missing | /v2/gateways/resources/compendium/arbitrum-rpc (same leaf segment match, 0.65) | /v2/orchestrators/resources/reference/arbitrum-rpc (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/setup/connect-and-activate | v2/orchestrators/setup/connect.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/technical/x-contract-addresses | v2/orchestrators/resources/technical/x-contract-addresses | false | missing | /v2/orchestrators/resources/glossary (high path similarity, 0.6) | /v2/orchestrators/resources/knowledge-hub/community-guides (high path similarity, 0.6) | /v2/orchestrators/resources/knowledge-hub/community-pools (high path similarity, 0.6) |

### v2/orchestrators/resources/reference/arbitrum-rpc.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.alchemy.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.infura.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.ankr.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.quicknode.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://chainstack.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arb1.arbitrum.io/rpc |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/resources/faq#arbitrum-rpc-connection-failing--node-will-not-start | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |
| internal-rooted | /v2/orchestrators/resources/arbitrum-exchanges | v2/orchestrators/resources/arbitrum-exchanges | false | missing | /v2/gateways/resources/compendium/arbitrum-exchanges (same leaf segment match, 0.65) | /v2/orchestrators/resources/reference/arbitrum-exchanges (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/resources/technical/x-contract-addresses | v2/orchestrators/resources/technical/x-contract-addresses | false | missing | /v2/orchestrators/resources/glossary (high path similarity, 0.6) | /v2/orchestrators/resources/knowledge-hub/community-guides (high path similarity, 0.6) | /v2/orchestrators/resources/knowledge-hub/community-pools (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |

### v2/orchestrators/resources/reference/faq.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #still-stuck |  | null | skipped |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.tools |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| empty | #port-8935-not-reachable-from-outside-your-network |  | null | skipped |  |  |  |
| external-https | https://docs.livepeer.org/ai/pipelines/overview |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/transcoding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/issues |  | null | 🟡 untested-external |  |  |  |

### v2/orchestrators/resources/reference/gpu-support.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/keylase/nvidia-patch |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/prepare | v2/orchestrators/setup/prepare.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/capacity-planning | v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx | true | ok |  |  |  |

### v2/orchestrators/resources/reference/technical/cli-flags.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/resources/reference/technical/contract-addresses.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/resources/reference/technical/x-changelog.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/resources/reference/technical/x-support-status.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup | v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |

### v2/orchestrators/resources/reference/technical/x-troubleshooting.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/resources/x-guides.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.livepeer.cloud/self-hosting-livepeers-llm-pipeline-deploying-an-ollama-based-gpu-runner-for-ai-orchestrators/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.speedybird.xyz/?page_id=339 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/bash-script-to-update-livepeer/1513 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/c/transcoders/7 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |
| internal-rooted | /v2/orchestrators/guides/deployment-details/join-a-pool | v2/orchestrators/guides/deployment-details/join-a-pool.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/advanced-operations/pool-operators | v2/orchestrators/guides/advanced-operations/pool-operators.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/prepare | v2/orchestrators/setup/prepare.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/reward-mechanics | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox | v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/technical/cli-flags | v2/orchestrators/resources/technical/cli-flags | false | missing | /v2/orchestrators/resources/reference/technical/cli-flags (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.6) | /v2/orchestrators/resources/knowledge-hub/community-guides (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox | v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/community-pools | v2/orchestrators/resources/community-pools | false | missing | /v2/orchestrators/resources/knowledge-hub/community-pools (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.75) | /v2/orchestrators/resources/operator-terms (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |

### v2/orchestrators/resources/x-help.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/orchestrators/resources/x-payments.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/gateways/guides/payments-and-pricing/clearinghouse-guide | v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/arbitrum-exchanges | v2/orchestrators/resources/arbitrum-exchanges | false | missing | /v2/gateways/resources/compendium/arbitrum-exchanges (same leaf segment match, 0.65) | /v2/orchestrators/resources/reference/arbitrum-exchanges (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.75) |

### v2/orchestrators/setup/configure.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| empty | #adding-ai-inference |  | null | skipped |  |  |  |
| empty | #adding-ai-inference |  | null | skipped |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/setup/rs-install | v2/orchestrators/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/sc-connect | v2/orchestrators/setup/sc-connect | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/guides/deployment-details/requirements | v2/orchestrators/guides/deployment-details/requirements | false | missing | /v2/orchestrators/guides/operator-considerations/requirements (same leaf segment match, 0.65) | /v2/orchestrators/guides/deployment-details/dual-mode-configuration (high path similarity, 0.8) | /v2/orchestrators/guides/deployment-details/join-a-pool (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/setup/sc-connect | v2/orchestrators/setup/sc-connect | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/guides/deployment-details/setup-options | v2/orchestrators/guides/deployment-details/setup-options.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/deployment-details/requirements | v2/orchestrators/guides/deployment-details/requirements | false | missing | /v2/orchestrators/guides/operator-considerations/requirements (same leaf segment match, 0.65) | /v2/orchestrators/guides/deployment-details/dual-mode-configuration (high path similarity, 0.8) | /v2/orchestrators/guides/deployment-details/join-a-pool (high path similarity, 0.8) |
| internal-rooted | /v2/orchestrators/guides/workloads-and-ai/batch-ai-setup | v2/orchestrators/guides/workloads-and-ai/batch-ai-setup | false | missing | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/setup/sc-connect | v2/orchestrators/setup/sc-connect | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/setup/activate | v2/orchestrators/setup/activate | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/resources/technical/cli-flags | v2/orchestrators/resources/technical/cli-flags | false | missing | /v2/orchestrators/resources/reference/technical/cli-flags (same leaf segment match, 0.65) | /v2/orchestrators/resources/glossary (high path similarity, 0.6) | /v2/orchestrators/resources/knowledge-hub/community-guides (high path similarity, 0.6) |

### v2/orchestrators/setup/connect.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.alchemy.com |  | null | 🟡 untested-external |  |  |  |
| external-https | https://bridge.arbitrum.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://arbiscan.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://bridge.arbitrum.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/reward-call-tuning | v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/test | v2/orchestrators/setup/verify.mdx | true | ok |  |  |  |

### v2/orchestrators/setup/guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/orchestrators/guides/join-a-pool | v2/orchestrators/guides/join-a-pool | false | missing | /v2/orchestrators/guides/deployment-details/join-a-pool (same leaf segment match, 0.65) | /v2/orchestrators/guides/advanced-operations/advanced-sources (high path similarity, 0.6) | /v2/orchestrators/guides/advanced-operations/dep-guide (high path similarity, 0.6) |
| internal-rooted | /v2/orchestrators/dep-rc-navigator | v2/orchestrators/dep-rc-navigator | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.6667) | /v2/orchestrators (high path similarity, 0.6667) | /v2/orchestrators (high path similarity, 0.6667) |
| internal-rooted | /v2/orchestrators/setup/prepare | v2/orchestrators/setup/prepare.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/install | v2/orchestrators/setup/install.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/r-configure | v2/orchestrators/setup/r-configure | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/setup/sc-connect | v2/orchestrators/setup/sc-connect | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/setup/x-test | v2/orchestrators/setup/x-test.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/monitor | v2/orchestrators/setup/monitor.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/setup/sc-connect | v2/orchestrators/setup/sc-connect | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/unclassified/rcs-connect-activate-publish | v2/orchestrators/unclassified/rcs-connect-activate-publish | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |
| internal-rooted | /v2/orchestrators/setup/x-test | v2/orchestrators/setup/x-test.mdx | true | ok |  |  |  |

### v2/orchestrators/setup/install.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://forum.livepeer.org/t/bash-script-to-update-livepeer/1513 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/setup/orch-config | v2/orchestrators/setup/orch-config | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |
| internal-rooted | /v2/orchestrators/setup/orch-config | v2/orchestrators/setup/orch-config | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-rooted | /v2/orchestrators/get-started/quickstart | v2/orchestrators/get-started/quickstart | false | missing | /v2/solutions/livepeer-studio/docs/quickstart (same leaf segment match, 0.65) | /v2/orchestrators/quickstart/AI-prompt-start (high path similarity, 0.575) | /v2/orchestrators/quickstart/dep-x-setup-paths (high path similarity, 0.575) |

### v2/orchestrators/setup/monitor.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./install-go-livepeer | v2/orchestrators/setup/install-go-livepeer | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ../advanced/rewards-and-fees | v2/orchestrators/advanced/rewards-and-fees | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |
| internal-relative | ../resources/faq | v2/orchestrators/resources/faq | false | missing | /v2/about/resources/faq (same leaf segment match, 0.65) | /v2/community/resources/faq (same leaf segment match, 0.65) | /v2/gateways/resources/reference/faq (same leaf segment match, 0.65) |

### v2/orchestrators/setup/prepare.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./install-go-livepeer | v2/orchestrators/setup/install-go-livepeer | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./orchestrator-stats | v2/orchestrators/setup/orchestrator-stats | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./data-centre-setup | v2/orchestrators/setup/data-centre-setup | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |

### v2/orchestrators/setup/s-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./hardware-requirements | v2/orchestrators/setup/hardware-requirements | false | missing | /v2/gateways/resources/reference/go-livepeer/hardware-requirements (same leaf segment match, 0.65) | /v2/gateways/resources/reference/technical/go-livepeer/hardware-requirements (same leaf segment match, 0.65) | /v2/orchestrators/setup/configure (high path similarity, 0.75) |
| internal-relative | ./install-go-livepeer | v2/orchestrators/setup/install-go-livepeer | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./connect-to-arbitrum | v2/orchestrators/setup/connect-to-arbitrum | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./orch-config | v2/orchestrators/setup/orch-config | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./publish-offerings | v2/orchestrators/setup/publish-offerings | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./orchestrator-stats | v2/orchestrators/setup/orchestrator-stats | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ../concepts/overview | v2/orchestrators/concepts/overview | false | missing | /v2/about/network/overview (same leaf segment match, 0.65) | /v2/about/protocol/overview (same leaf segment match, 0.65) | /v2/delegators/concepts/overview (same leaf segment match, 0.65) |
| internal-relative | ../get-started/join-a-pool | v2/orchestrators/get-started/join-a-pool | false | missing | /v2/orchestrators/guides/deployment-details/join-a-pool (same leaf segment match, 0.65) | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) |
| internal-relative | ../advanced/staking-LPT | v2/orchestrators/advanced/staking-LPT | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |
| internal-relative | ../advanced/rewards-and-fees | v2/orchestrators/advanced/rewards-and-fees | false | missing | /v2/orchestrators/GOVERNANCE (high path similarity, 0.5) | /v2/orchestrators/concepts/architecture (high path similarity, 0.5) | /v2/orchestrators/concepts/capabilities (high path similarity, 0.5) |
| internal-relative | ./hardware-requirements | v2/orchestrators/setup/hardware-requirements | false | missing | /v2/gateways/resources/reference/go-livepeer/hardware-requirements (same leaf segment match, 0.65) | /v2/gateways/resources/reference/technical/go-livepeer/hardware-requirements (same leaf segment match, 0.65) | /v2/orchestrators/setup/configure (high path similarity, 0.75) |
| internal-relative | ./install-go-livepeer | v2/orchestrators/setup/install-go-livepeer | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./connect-to-arbitrum | v2/orchestrators/setup/connect-to-arbitrum | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./orch-config | v2/orchestrators/setup/orch-config | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./orchestrator-stats | v2/orchestrators/setup/orchestrator-stats | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |
| internal-relative | ./publish-offerings | v2/orchestrators/setup/publish-offerings | false | missing | /v2/orchestrators/setup/configure (high path similarity, 0.75) | /v2/orchestrators/setup/connect (high path similarity, 0.75) | /v2/orchestrators/setup/guide (high path similarity, 0.75) |

### v2/orchestrators/setup/verify.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://explorer.livepeer.org/orchestrators |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tools.livepeer.cloud/ai/network-capabilities |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/troubleshooting | v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/reward-call-tuning | v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/staking-and-rewards/earning-model | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/config-and-optimisation/pricing-strategy | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox | v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/guides/ai-and-job-workloads/workload-options | v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx | true | ok |  |  |  |

### v2/orchestrators/setup/x-test.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/resources/changelog/ai-compute/ai-runner.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/daydreamlive/scope-runner |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/pull/417 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/pull/611 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/changelog/ai-runner/rss.xml | v2/resources/changelog/ai-runner/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/ai-runner/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.14.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.14.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.13.8 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.13.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.13.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.13.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.13.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.12.6 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.12.5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ai-runner/releases/tag/v0.12.4 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/ai-compute/comfystream.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/pytrickle/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.comfystream.org/technical/get-started/install#run-the-docker-container |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/blob/master/doc/byoc.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://hub.docker.com/r/livepeer/comfystream |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/blob/main/workflows/comfystream/audio-transcription-api.json |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/blob/f0f7d7e349fca2565ba198127afdb96b5fcd8e79/src/comfystream/pipeline.py |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/changelog/comfystream/rss.xml | v2/resources/changelog/comfystream/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/comfystream/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.8 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.7 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.6 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/comfystream/releases/tag/v0.1.0 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/ai-compute/pytrickle.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/pytrickle/rss.xml | v2/resources/changelog/pytrickle/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/pytrickle/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.1.9 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.1.8 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.1.7 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.1.6 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.1.5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.1.4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.1.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.1.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.1.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/pytrickle/releases/tag/v0.0.1 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/apis-sdks/livepeer-ai-go.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/apis-sdks/livepeer-ai-go/rss.xml | v2/resources/changelog/apis-sdks/livepeer-ai-go/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases/tag/v0.7.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases/tag/v0.7.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases/tag/v0.6.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases/tag/v0.5.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases/tag/v0.4.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases/tag/v0.4.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases/tag/v0.4.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases/tag/v0.4.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-go/releases/tag/v0.3.0 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/apis-sdks/livepeer-ai-js.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/apis-sdks/livepeer-ai-js/rss.xml | v2/resources/changelog/apis-sdks/livepeer-ai-js/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.6.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.6.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.6.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.5.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.4.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.4.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.3.4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.3.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.3.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-js/releases/tag/v0.3.1 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/apis-sdks/livepeer-ai-python.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/apis-sdks/livepeer-ai-python/rss.xml | v2/resources/changelog/apis-sdks/livepeer-ai-python/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.10.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.9.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.8.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.7.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.6.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.5.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.5.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.5.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.4.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-ai-python/releases/tag/v0.4.0 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/apis-sdks/livepeer-js.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/livepeer-js/rss.xml | v2/resources/changelog/livepeer-js/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/livepeer-js/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-js/releases/tag/v3.5.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-js/releases/tag/v3.4.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-js/releases/tag/v3.3.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-js/releases/tag/v3.3.0 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/apis-sdks/livepeer-python.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/livepeer-python/rss.xml | v2/resources/changelog/livepeer-python/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/livepeer-python/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python/releases/tag/v0.3.0 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/changelog.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../documentation-guide/contribute-to-the-docs | v2/resources/documentation-guide/contribute-to-the-docs | false | missing | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (same leaf segment match, 0.65) |  |  |
| internal-relative | ../../internal/overview/governance | v2/internal/overview/governance.mdx | true | ok |  |  |  |
| external-https | https://roadmap.livepeer.org/roadmap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../documentation-guide/contribute-to-the-docs | v2/resources/documentation-guide/contribute-to-the-docs | false | missing | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (same leaf segment match, 0.65) |  |  |
| internal-rooted | /v2/internal/overview/governance | v2/internal/overview/governance.mdx | true | ok |  |  |  |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/docs.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/ecosystem/awesome-livepeer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/actions/upload-pages-artifact |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/actions/upload-pages-artifact/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/actions/upload-pages-artifact/compare/v3...v4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/rickstaa/livepeer-reward-watcher |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/changelog/ecosystem/awesome-livepeer/rss.xml | v2/resources/changelog/ecosystem/awesome-livepeer/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/awesome-livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/faec6077ee8b57c8db209bfd6934a55e729fd051 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/ad6868fcd5edc1d6f8ee03e84cf7809dcbba77b8 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/7d278c31279d048d03e45fc2b81673228292df50 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/1a24b47e7a9297f39cd342ac6e4f40ee8fd11915 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/0ac8945489b995f689f0465479519e27b3af4093 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/fbf18363623122dd87c7a752fb05b6600775ee11 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/098d6e920ca53575b8f2f98daa0b954ab54dc8c5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/5d35b6ee248677203b015fbb116e623a886582b8 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/c4f93ad7d2d9fc479f8d5c9e159b0668e3ff4449 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/awesome-livepeer/commit/425170ac1e3a114e6efef55f34635cb5434c895f |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/ecosystem/website.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/website/rss.xml | v2/resources/changelog/website/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/website |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/f03e755104f7074666d1b22f19ca8b36a63bcd8f |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/2b567771bc614ba3c056e372f582fba7af5c0271 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/48131e1f51a4b731dff71583dddb3f6091cf855a |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/646173b028641382d328cf60116070701f306887 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/c69527e25fc7b37fdafd0dd465ab4e033b18d35f |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/461a3d686d82bfd41f77bbf8293840ac8b07b9bc |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/f82e3fdd6ade97dfd9c5f139cdb110eb1f548466 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/913c19292817389df69be273f8a4f7ec012d6d92 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/132200653f147ad5121036338eddc9c147b4c33d |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/website/commit/ec1a29e56c5768dcd352b665987298f701463932 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/migration-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/resources/changelog/protocol/go-livepeer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline | v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/ai-on-livepeer | v2/developers/concepts/ai-on-livepeer.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/changelog/protocol/go-livepeer/rss.xml | v2/resources/changelog/protocol/go-livepeer/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/go-livepeer/releases |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/guides/payments-and-pricing/remote-signers | v2/gateways/guides/payments-and-pricing/remote-signers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways/concepts/capabilities | v2/gateways/concepts/capabilities.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/concepts/ai-on-livepeer | v2/developers/concepts/ai-on-livepeer.mdx | true | ok |  |  |  |

### v2/resources/changelog/protocol/lips.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/lips/rss.xml | v2/resources/changelog/lips/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/LIPs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/4057063892111ac41c24e1ae36a9b9a3f4cca453 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/7ca02b7d0f6d02e7bfec486875f54bb894c75e2f |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/787d1bccfb5c249d4733fd52fff05a42c4d0ca86 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/97ffc34d59dab744609ea680a6dec7d8f9d03b17 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/c7561033b7078b90675203f49f97c5a0a962152e |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/e89791e9ccce87c5f9c429bc9d84f5f55bfaccff |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/bdf4949dc1c56b86a6a4db19fd2e37bb89da138a |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/a3de4613746626164a211ace2b5bc47af70f6d3f |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/27b538671962b56cb0ed7403052f6a56f9a6001a |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/LIPs/commit/9959ff45a374f7716edab4fd72f0f66a6a55ea13 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/protocol/naap.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/naap/rss.xml | v2/resources/changelog/naap/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/naap |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/1c097832d4f4a7a4a01e9dd3e861f85ac1c4b9b7 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/74282977defcc758c0ef014f8539204787447f91 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/ae132cce42d8aa82649dc3868644e700e7d2232d |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/4d1853d9dd9cc3a2b1c2aa746597e15627edbc59 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/b5284afcc9f1c400ff739ee745c9ac5c590eddd7 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/2accd6701f24cd24317bfd019bbe59c7298adeee |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/21cfb0dc70d96022a9f539080d9de90dc862f5e3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/3a8930f36a24bd0174a1c4fe8e7477ae6970d90a |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/ff96d3e3a00bd5bb372f34897744bc7a866adcec |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/naap/commit/e117b13676b014adf854576b82111f5fdc23a0f3 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/protocol/subgraph.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/subgraph/rss.xml | v2/resources/changelog/subgraph/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/subgraph/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/subgraph/releases/tag/v1.3.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/subgraph/releases/tag/v1.3.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/subgraph/releases/tag/v1.3.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/subgraph/releases/tag/v1.2.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/subgraph/releases/tag/v1.1.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/subgraph/releases/tag/v1.0.0 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/tooling/explorer.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/explorer/rss.xml | v2/resources/changelog/explorer/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/explorer/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/explorer/releases/tag/v0.1.0 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/tooling/livepeer-data.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/tooling/livepeer-data/rss.xml | v2/resources/changelog/tooling/livepeer-data/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/livepeer-data/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.8.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.8.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.7.4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.7.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.7.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.7.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.7.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.6.5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.6.4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-data/releases/tag/v0.6.3 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/changelog/tooling/livepeer-python-gateway.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/changelog/livepeer-python-gateway/rss.xml | v2/resources/changelog/livepeer-python-gateway/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/livepeer-python-gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/a4670584558f607f418f855b0c849bfdb302dcf2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/90551e3e2d6b0de46bcafbd1c5d958b187cc36c3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/5007e2cd9bbed0ed39fbb9ed7f5afffdcbaf348f |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/e4ee376a9db10485a78b4e876cdbbe7549d92f3b |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/7ef6dc94feef7c4db04f28962529b46217de9b56 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/9f5c339a529bdee0066c6b4042ca4a12f8b6e9e6 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/42a83a8316626c69d073f9e4a804d05764da8333 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/8ac331c239814fc37ca8269d96143d85c96ebd6d |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/599bbcf0fadc84082392a70e7004156534fd5382 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/livepeer-python-gateway/commit/34ca1420dccd42b315185ecc820cd202257e2d14 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/compendium/media-kit.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.livepeer.org/media-kit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.dropbox.com/scl/fi/tblvrdl3chfklvujhri19/Livepeer-Brand-Guidelines.pdf?rlkey=mfp3zj8kbp8aw3z0kqhez8wn9&st=or62duey&raw=1 |  | null | 🟡 untested-external |  |  |  |

### v2/resources/concepts/brief-history-of-video.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/resources/concepts/livepeer-101.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/resources/documentation-guide/ai-automations/ai-features.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://modelcontextprotocol.io |  | null | 🟡 untested-external |  |  |  |
| external-https | https://llmstxt.org/ |  | null | 🟡 untested-external |  |  |  |

### v2/resources/documentation-guide/ai-automations/automations-workflows.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /docs-guide/contributing/git-hooks | docs-guide/contributing/git-hooks.mdx | true | ok |  |  |  |
| internal-relative | ../copy-style/style-guide | v2/resources/documentation-guide/copy-style/style-guide.mdx | true | ok |  |  |  |
| internal-relative | ../component-library | v2/resources/documentation-guide/component-library/component-library.mdx | true | ok |  |  |  |
| internal-rooted | /docs-guide/contributing/git-hooks | docs-guide/contributing/git-hooks.mdx | true | ok |  |  |  |
| internal-rooted | /operations/scripts/README.md | operations/scripts/README.md | true | ok |  |  |  |

### v2/resources/documentation-guide/ai-automations/research-and-fact-checking.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /docs-guide/frameworks/research-skill-workflow | docs-guide/frameworks/research-skill-workflow.mdx | true | ok |  |  |  |
| internal-relative | ./documentation-guide | v2/resources/documentation-guide/ai-automations/documentation-guide | false | missing | /v2/resources/documentation-guide (same leaf segment match, 0.65) | /v2/resources/documentation-guide/ai-automations/ai-features (high path similarity, 0.8) | /v2/resources/documentation-guide/ai-automations/automations-workflows (high path similarity, 0.8) |
| internal-relative | ./docs-features-and-ai-integrations | v2/resources/documentation-guide/ai-automations/docs-features-and-ai-integrations | false | missing | /v2/resources/documentation-guide/features/docs-features-and-ai-integrations (same leaf segment match, 0.65) | /v2/resources/documentation-guide/ai-automations/ai-features (high path similarity, 0.8) | /v2/resources/documentation-guide/ai-automations/automations-workflows (high path similarity, 0.8) |
| internal-relative | ./contribute-to-the-docs | v2/resources/documentation-guide/ai-automations/contribute-to-the-docs | false | missing | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (same leaf segment match, 0.65) | /v2/resources/documentation-guide/ai-automations/ai-features (high path similarity, 0.8) | /v2/resources/documentation-guide/ai-automations/automations-workflows (high path similarity, 0.8) |

### v2/resources/documentation-guide/component-library/component-library.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/documentation-guide/component-library/overview | v2/resources/documentation-guide/component-library/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/elements | v2/resources/documentation-guide/component-library/elements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/wrappers | v2/resources/documentation-guide/component-library/wrappers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/displays | v2/resources/documentation-guide/component-library/displays.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/scaffolding | v2/resources/documentation-guide/component-library/scaffolding.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/integrators | v2/resources/documentation-guide/component-library/integrators.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/config | v2/resources/documentation-guide/component-library/config.mdx | true | ok |  |  |  |

### v2/resources/documentation-guide/component-library/config.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/documentation-guide/component-library | v2/resources/documentation-guide/component-library/component-library.mdx | true | ok |  |  |  |

### v2/resources/documentation-guide/component-library/displays.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/documentation-guide/component-library | v2/resources/documentation-guide/component-library/component-library.mdx | true | ok |  |  |  |

### v2/resources/documentation-guide/component-library/elements.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/documentation-guide/component-library | v2/resources/documentation-guide/component-library/component-library.mdx | true | ok |  |  |  |

### v2/resources/documentation-guide/component-library/integrators.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/documentation-guide/component-library | v2/resources/documentation-guide/component-library/component-library.mdx | true | ok |  |  |  |

### v2/resources/documentation-guide/component-library/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/documentation-guide/component-library/elements | v2/resources/documentation-guide/component-library/elements.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/wrappers | v2/resources/documentation-guide/component-library/wrappers.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/displays | v2/resources/documentation-guide/component-library/displays.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/scaffolding | v2/resources/documentation-guide/component-library/scaffolding.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/integrators | v2/resources/documentation-guide/component-library/integrators.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/component-library/config | v2/resources/documentation-guide/component-library/config.mdx | true | ok |  |  |  |
| internal-rooted | /docs-guide/config/component-registry.json | docs-guide/config/component-registry.json | true | ok |  |  |  |
| internal-rooted | /docs-guide/config/component-usage-map.json | docs-guide/config/component-usage-map.json | true | ok |  |  |  |
| internal-rooted | /docs-guide/catalog/components-catalog.mdx | docs-guide/catalog/components-catalog.mdx | true | ok |  |  |  |

### v2/resources/documentation-guide/component-library/scaffolding.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/documentation-guide/component-library | v2/resources/documentation-guide/component-library/component-library.mdx | true | ok |  |  |  |

### v2/resources/documentation-guide/component-library/wrappers.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/resources/documentation-guide/component-library | v2/resources/documentation-guide/component-library/component-library.mdx | true | ok |  |  |  |

### v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| empty | #non-technical-contribution-proposal |  | null | skipped |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| empty | #review-process |  | null | skipped |  |  |  |
| internal-relative | ./style-guide | v2/resources/documentation-guide/contributing/style-guide | false | missing | /v2/resources/documentation-guide/copy-style/style-guide (same leaf segment match, 0.65) | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (high path similarity, 0.8) | /v2/resources/documentation-guide (high path similarity, 0.66) |
| internal-relative | ./component-library/overview | v2/resources/documentation-guide/contributing/component-library/overview | false | missing | /v2/about/network/overview (same leaf segment match, 0.65) | /v2/about/protocol/overview (same leaf segment match, 0.65) | /v2/delegators/concepts/overview (same leaf segment match, 0.65) |
| external-https | https://github.com/livepeer/docs/blob/docs-v2-preview/.github/CODEOWNERS |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./documentation-guide | v2/resources/documentation-guide/contributing/documentation-guide | false | missing | /v2/resources/documentation-guide (same leaf segment match, 0.65) | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (high path similarity, 0.8) | /v2/resources/documentation-guide/ai-automations/ai-features (high path similarity, 0.6) |
| internal-relative | ./style-guide | v2/resources/documentation-guide/contributing/style-guide | false | missing | /v2/resources/documentation-guide/copy-style/style-guide (same leaf segment match, 0.65) | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (high path similarity, 0.8) | /v2/resources/documentation-guide (high path similarity, 0.66) |
| internal-relative | ./component-library/overview | v2/resources/documentation-guide/contributing/component-library/overview | false | missing | /v2/about/network/overview (same leaf segment match, 0.65) | /v2/about/protocol/overview (same leaf segment match, 0.65) | /v2/delegators/concepts/overview (same leaf segment match, 0.65) |
| external-https | https://github.com/livepeer/docs/blob/docs-v2-preview/.github/CODEOWNERS |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./style-guide | v2/resources/documentation-guide/contributing/style-guide | false | missing | /v2/resources/documentation-guide/copy-style/style-guide (same leaf segment match, 0.65) | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (high path similarity, 0.8) | /v2/resources/documentation-guide (high path similarity, 0.66) |
| internal-relative | ./component-library/overview | v2/resources/documentation-guide/contributing/component-library/overview | false | missing | /v2/about/network/overview (same leaf segment match, 0.65) | /v2/about/protocol/overview (same leaf segment match, 0.65) | /v2/delegators/concepts/overview (same leaf segment match, 0.65) |
| external-https | https://mintlify.com/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./documentation-guide | v2/resources/documentation-guide/contributing/documentation-guide | false | missing | /v2/resources/documentation-guide (same leaf segment match, 0.65) | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (high path similarity, 0.8) | /v2/resources/documentation-guide/ai-automations/ai-features (high path similarity, 0.6) |
| external-https | https://github.com/livepeer/docs/blob/docs-v2-preview/.github/CODEOWNERS |  | null | 🟡 untested-external |  |  |  |

### v2/resources/documentation-guide/copy-style/authoring-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/resources/documentation-guide/copy-style/authoring-standard.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/resources/documentation-guide/copy-style/style-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://mintlify.com/docs/text |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./component-library | v2/resources/documentation-guide/copy-style/component-library | false | missing | /v2/resources/documentation-guide/component-library (same leaf segment match, 0.65) | /v2/resources/documentation-guide/copy-style/authoring-guide (high path similarity, 0.8) | /v2/resources/documentation-guide/copy-style/authoring-standard (high path similarity, 0.8) |
| internal-rooted | /contribute/CONTRIBUTING/GIT-HOOKS.md | v2/pages/contribute/CONTRIBUTING/GIT-HOOKS.md | false | missing |  |  |  |
| internal-relative | ./component-library | v2/resources/documentation-guide/copy-style/component-library | false | missing | /v2/resources/documentation-guide/component-library (same leaf segment match, 0.65) | /v2/resources/documentation-guide/copy-style/authoring-guide (high path similarity, 0.8) | /v2/resources/documentation-guide/copy-style/authoring-standard (high path similarity, 0.8) |
| external-https | https://mintlify.com/docs |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /docs-guide/contributing/mintlify | docs-guide/contributing/mintlify.mdx | true | ok |  |  |  |
| internal-rooted | /contribute/CONTRIBUTING/GIT-HOOKS.md | v2/pages/contribute/CONTRIBUTING/GIT-HOOKS.md | false | missing |  |  |  |
| internal-relative | ./component-library | v2/resources/documentation-guide/copy-style/component-library | false | missing | /v2/resources/documentation-guide/component-library (same leaf segment match, 0.65) | /v2/resources/documentation-guide/copy-style/authoring-guide (high path similarity, 0.8) | /v2/resources/documentation-guide/copy-style/authoring-standard (high path similarity, 0.8) |
| internal-relative | ./snippets-inventory | v2/resources/documentation-guide/copy-style/snippets-inventory | false | missing | /v2/resources/documentation-guide/tooling/snippets-inventory (same leaf segment match, 0.65) | /v2/resources/documentation-guide/copy-style/authoring-guide (high path similarity, 0.8) | /v2/resources/documentation-guide/copy-style/authoring-standard (high path similarity, 0.8) |
| internal-rooted | /docs-guide/contributing/mintlify | docs-guide/contributing/mintlify.mdx | true | ok |  |  |  |
| internal-relative | ./contribute-to-the-docs | v2/resources/documentation-guide/copy-style/contribute-to-the-docs | false | missing | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (same leaf segment match, 0.65) | /v2/resources/documentation-guide/copy-style/authoring-guide (high path similarity, 0.8) | /v2/resources/documentation-guide/copy-style/authoring-standard (high path similarity, 0.8) |

### v2/resources/documentation-guide/documentation-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./contribute-to-the-docs | v2/resources/documentation-guide/contribute-to-the-docs | false | missing | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./docs-features-and-ai-integrations | v2/resources/documentation-guide/docs-features-and-ai-integrations | false | missing | /v2/resources/documentation-guide/features/docs-features-and-ai-integrations (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./research-and-fact-checking | v2/resources/documentation-guide/research-and-fact-checking | false | missing | /v2/resources/documentation-guide/ai-automations/research-and-fact-checking (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./style-guide | v2/resources/documentation-guide/style-guide | false | missing | /v2/resources/documentation-guide/copy-style/style-guide (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./snippets-inventory | v2/resources/documentation-guide/snippets-inventory | false | missing | /v2/resources/documentation-guide/tooling/snippets-inventory (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./docs-features-and-ai-integrations#automatic-page-index-generation | v2/resources/documentation-guide/docs-features-and-ai-integrations | false | missing | /v2/resources/documentation-guide/features/docs-features-and-ai-integrations (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./contribute-to-the-docs | v2/resources/documentation-guide/contribute-to-the-docs | false | missing | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./component-library | /v2/resources/documentation-guide/component-library | true | ok-folder-route |  |  |  |
| internal-relative | ./automations-workflows | v2/resources/documentation-guide/automations-workflows | false | missing | /v2/resources/documentation-guide/ai-automations/automations-workflows (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-rooted | /v2/resources/documentation-guide/component-library | v2/resources/documentation-guide/component-library/component-library.mdx | true | ok |  |  |  |
| internal-relative | ./style-guide | v2/resources/documentation-guide/style-guide | false | missing | /v2/resources/documentation-guide/copy-style/style-guide (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./snippets-inventory | v2/resources/documentation-guide/snippets-inventory | false | missing | /v2/resources/documentation-guide/tooling/snippets-inventory (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./docs-features-and-ai-integrations#automatic-page-index-generation | v2/resources/documentation-guide/docs-features-and-ai-integrations | false | missing | /v2/resources/documentation-guide/features/docs-features-and-ai-integrations (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./automations-workflows | v2/resources/documentation-guide/automations-workflows | false | missing | /v2/resources/documentation-guide/ai-automations/automations-workflows (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| internal-relative | ./research-and-fact-checking | v2/resources/documentation-guide/research-and-fact-checking | false | missing | /v2/resources/documentation-guide/ai-automations/research-and-fact-checking (same leaf segment match, 0.65) | /v2/resources/glossary (high path similarity, 0.6667) | /v2/resources/help-center (high path similarity, 0.6667) |
| external-https | https://mintlify.com/docs |  | null | 🟡 untested-external |  |  |  |

### v2/resources/documentation-guide/documentation-overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./contributing/contribute-to-the-docs | v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx | true | ok |  |  |  |
| internal-rooted | /about/portal | v2/about/portal.mdx | true | ok |  |  |  |
| internal-rooted | /about/core-concepts | v2/about/core-concepts | false | missing | v2/about/concepts/core-concepts.mdx | v1/developers/core-concepts/core-api/access-control.mdx | v1/developers/core-concepts/core-api/asset.mdx |
| internal-rooted | /v2/developers/navigator | v2/developers/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/navigator | v2/developers/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/portal | v2/developers/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/developers/navigator | v2/developers/navigator.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/portal | v2/orchestrators/portal.mdx | true | ok |  |  |  |
| internal-rooted | /orchestrators/setup/guide | v2/orchestrators/setup/guide.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/portal | v2/delegators/portal.mdx | true | ok |  |  |  |
| internal-rooted | /v2/delegators/delegation/overview | v2/delegators/delegation/overview.mdx | true | ok |  |  |  |
| internal-rooted | /gateways/portal | v2/gateways/portal.mdx | true | ok |  |  |  |
| internal-rooted | /gateways/setup/guide | v2/gateways/setup/guide.mdx | true | ok |  |  |  |
| internal-relative | ./documentation-guide | v2/resources/documentation-guide/documentation-guide.mdx | true | ok |  |  |  |
| internal-relative | ./features/docs-features-and-ai-integrations | v2/resources/documentation-guide/features/docs-features-and-ai-integrations.mdx | true | ok |  |  |  |

### v2/resources/documentation-guide/features/docs-features-and-ai-integrations.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./research-and-fact-checking | v2/resources/documentation-guide/features/research-and-fact-checking | false | missing | /v2/resources/documentation-guide/ai-automations/research-and-fact-checking (same leaf segment match, 0.65) | /v2/resources/documentation-guide/features/docs-features-and-ai-integrations (high path similarity, 0.8) | /v2/resources/documentation-guide (high path similarity, 0.66) |
| internal-rooted | /v2/home/mission-control | v2/home/mission-control.mdx | true | ok |  |  |  |
| internal-rooted | /v2/home/mission-control | v2/home/mission-control.mdx | true | ok |  |  |  |
| internal-relative | ./documentation-guide | v2/resources/documentation-guide/features/documentation-guide | false | missing | /v2/resources/documentation-guide (same leaf segment match, 0.65) | /v2/resources/documentation-guide/features/docs-features-and-ai-integrations (high path similarity, 0.8) | /v2/resources/documentation-guide/ai-automations/ai-features (high path similarity, 0.6) |
| internal-relative | ./contribute-to-the-docs | v2/resources/documentation-guide/features/contribute-to-the-docs | false | missing | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (same leaf segment match, 0.65) | /v2/resources/documentation-guide/features/docs-features-and-ai-integrations (high path similarity, 0.8) | /v2/resources/documentation-guide (high path similarity, 0.66) |
| internal-relative | ./component-library | v2/resources/documentation-guide/features/component-library | false | missing | /v2/resources/documentation-guide/component-library (same leaf segment match, 0.65) | /v2/resources/documentation-guide/features/docs-features-and-ai-integrations (high path similarity, 0.8) | /v2/resources/documentation-guide/component-library/config (high path similarity, 0.66) |

### v2/resources/documentation-guide/tooling/lpd-cli.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/resources/documentation-guide/tooling/snippets-inventory.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /docs-guide/contributing/mintlify | docs-guide/contributing/mintlify.mdx | true | ok |  |  |  |
| internal-relative | ../component-library/overview | v2/resources/documentation-guide/component-library/overview.mdx | true | ok |  |  |  |
| internal-relative | ../component-library/overview | v2/resources/documentation-guide/component-library/overview.mdx | true | ok |  |  |  |
| internal-relative | ../ai-automations/automations-workflows | v2/resources/documentation-guide/ai-automations/automations-workflows.mdx | true | ok |  |  |  |

### v2/resources/glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./glossary-data.json | v2/resources/glossary-data.json | true | ok |  |  |  |
| internal-rooted | /v2/resources/resource-hub-terms | v2/resources/resource-hub-terms.mdx | true | ok |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Intelligent_agent |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Intelligent_agent |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Artificial_intelligence |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Inference_engine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/transformers/en/main_classes/pipelines |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/API_key |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Arbitrage |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/AT_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Atomic_commit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Speech_recognition |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Autonomous_agent |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Avatar_(computing |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_compression_picture_types |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloud.google.com/discover/what-is-batch-inference |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Bit_rate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/transformers/model_doc/blip |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Blockchain |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/an-overview-of-bonding/97 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/bridges/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/bridges/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://c2pa.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Cryptoeconomics |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Constant_bitrate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Content_delivery_network |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Command_line_interface |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_codec |  | null | 🟡 untested-external |  |  |  |
| external-https | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Comfy-Org/ComfyUI |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Proof_of_stake |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.conventionalcommits.org/en/v1.0.0/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/lllyasviel/ControlNet |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Central_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://slhck.info/video/2017/02/24/crf-guide.html |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Cryptoeconomics |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/CUDA |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Decentralized_autonomous_organization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Distributed_artificial_intelligence |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Decentralization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/delegate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Decentralized_physical_infrastructure_network |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Diffusion_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Digital_twin |  | null | 🟡 untested-external |  |  |  |
| external-https | https://dune.com/home |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Word_embedding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloudinary.com/glossary/encoding-ladder |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Web_API |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Edge_computing |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/what-is-ether/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Ethereum |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/accounts/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Failover |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/scaling/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Fediverse |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Frame_rate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/gas/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Gigabyte |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Text-to-video_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/wiki/wiki/Governance |  | null | 🟡 untested-external |  |  |  |
| external-https | https://grafana.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/GRPC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Group_of_pictures |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Graphics_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/graphics-cards/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Initial_coin_offering |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Image_translation |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/tasks/image-to-text |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/tasks/image-to-video |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Inference_engine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Cryptoeconomics |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Interactive_media |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.mozilla.org/en-US/docs/Web/JavaScript |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/JSON |  | null | 🟡 untested-external |  |  |  |
| external-https | https://jwt.io/introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Group_of_pictures |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Know_your_customer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Latency_(audio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Layer-1_blockchain |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/layer-2/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Live_streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Large_language_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://grafana.com/oss/loki/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/diffusers/training/lora |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Micropayment |  | null | 🟡 untested-external |  |  |  |
| external-https | https://mistserver.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Machine_learning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/hub/en/model-cards |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/hub/en/model-cards |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/MP4_file_format |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Multimodal_learning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Network_effect |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Node_(networking |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Non-player_character |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/NVDEC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/NVENC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/OBS_Studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ollama.com/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Open-source_software |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/OSI_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Advanced_Video_Coding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/scaling/state-channels/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/a-guide-for-determining-price-per-pixel/2197 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.livepeer.org/ai/pipelines/audio-to-text |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/web3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Pixel |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.org/docs/video-developers/core-concepts/payments |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Advanced_Video_Coding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://prometheus.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.livepeer.org/primer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://c2pa.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/PyTorch |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Quadratic_voting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloudinary.com/glossary/encoding-ladder |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/WebRTC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/an-overview-of-bonding/97 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.mux.com/blog/the-four-elements-of-video-performance |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloudinary.com/glossary/video-rendition |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Display_resolution |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/REST |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/scaling/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Remote_procedure_call |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/geforce/graphics-cards/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/transformers/en/model_doc/sam2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/docs/diffusers/en/using-diffusers/scheduler_features |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Scalability |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Scalability |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Software_development_kit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Image_segmentation |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Self-hosting_(web_services |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Service-level_agreement |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/smart-contracts/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Smoke_testing_(software |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Solidity |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Stable_Diffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Streaming_media |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Neural_style_transfer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.cloudflare.com/webrtc-whip-whep-cloudflare-stream/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://thegraph.com/docs/en/subgraphs/developing/subgraphs/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/stabilityai/stable-video-diffusion-img2vid-xt |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Synthetic_data |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Total_addressable_market |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.nvidia.com/tensorrt |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Text-to-image_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Speech_synthesis |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Thumbnail |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Throughput |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Cryptoeconomics |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transcoding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/web3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://wiki.svta.org/time-to-first-frame/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tus.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/introduction-to-partial-unbonding/360 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Image_scaling |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/United_States_dollar |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tether.to/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Vesting |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_on_demand |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_on_demand |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_random-access_memory |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Webhook |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/WebRTC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/WebVTT |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://datatracker.ietf.org/doc/draft-ietf-wish-whep/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.rfc-editor.org/rfc/rfc9725.html |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/openai/whisper-large-v3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Generative_artificial_intelligence |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/resources/glossary | v2/gateways/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/orchestrators/resources/glossary | v2/orchestrators/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources | v2/resources/index.mdx | true | ok |  |  |  |

### v2/resources/help-center.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/resources/lpt/delegator-dashboard.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://delegator.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://paulieb14.github.io/livepeer-delegator-dashboard/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://explorer.livepeer.org |  | null | 🟡 untested-external |  |  |  |

### v2/resources/portal.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/documentation-overview | v2/resources/documentation-guide/documentation-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/documentation-overview | v2/resources/documentation-guide/documentation-overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/documentation-guide/contributing/contribute-to-the-docs | v2/resources/documentation-guide/contributing/contribute-to-the-docs.mdx | true | ok |  |  |  |
| internal-relative | docs-guide/contributing/contributing | v2/resources/docs-guide/contributing/contributing | false | missing | /v2/resources/documentation-guide/contributing/contribute-to-the-docs (high path similarity, 0.46) | /v2/resources/resources/videos (high path similarity, 0.46) |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/resource-hub-terms | v2/resources/resource-hub-terms.mdx | true | ok |  |  |  |
| internal-rooted | /v2/about/resources/reference/livepeer-contract-addresses | v2/about/resources/reference/livepeer-contract-addresses.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/changelog/changelog | v2/resources/changelog/changelog.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/help-center | v2/resources/help-center.mdx | true | ok |  |  |  |

### v2/resources/references/contract-addresses.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/resources/resource-hub-terms.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./resource-hub-terms-data.json | v2/resources/resource-hub-terms-data.json | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Intelligent_agent |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Artificial_intelligence |  | null | 🟡 untested-external |  |  |  |
| external-https | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/lllyasviel/ControlNet |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Diffusion_model |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Inference_engine |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Machine_learning |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.ultralytics.com/glossary/real-time-inference |  | null | 🟡 untested-external |  |  |  |
| external-https | https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.nvidia.com/tensorrt |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transformer_(deep_learning_architecture |  | null | 🟡 untested-external |  |  |  |
| external-https | https://openmetal.io/resources/blog/cold-start-latency-private-ai-inference/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Generative_artificial_intelligence |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Bit_rate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_codec |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Streaming_media |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Latency_(audio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloudinary.com/glossary/encoding-ladder |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloudinary.com/glossary/video-rendition |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Streaming_media |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transcoding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_on_demand |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/WebRTC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://datatracker.ietf.org/doc/draft-ietf-wish-whep/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.arbitrum.io/welcome/arbitrum-gentle-introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/bridges/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Decentralized_autonomous_organization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Proof_of_stake |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Decentralized_physical_infrastructure_network |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/what-is-ether/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/accounts/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/gas/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Decentralized_autonomous_organization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Initial_coin_offering |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/layer-2/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/glossary/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Open-source_software |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/scaling/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Cryptoeconomics |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Network_effect |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Total_addressable_market |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Content_delivery_network |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Command_line_interface |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Central_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Graphics_processing_unit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.mozilla.org/en-US/docs/Web/JavaScript |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Node_(networking |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ethereum.org/developers/docs/consensus-mechanisms/pos/keys/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/resources | v2/resources/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources | v2/resources/index.mdx | true | ok |  |  |  |

### v2/resources/resources/videos.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/daydream/changelog.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/daydreamlive/scope/pull/719 |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/solutions/daydream/changelog/rss.xml | v2/solutions/daydream/changelog/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/daydreamlive |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.2.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.2.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.1.9 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.1.8 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.1.7 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.1.6 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.1.5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/microscope/releases/tag/v0.0.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/microscope/releases/tag/models |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/microscope/releases/tag/v0.0.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/microscope/releases/tag/v0.0.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.2.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.1.4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.1.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.1.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope/releases/tag/v0.1.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-obs/releases/tag/0.1.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-obs/releases/tag/0.1.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.2.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.2.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/browser%400.3.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/react%400.3.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.2.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/react%400.3.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/browser%400.3.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/browser%400.3.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/react%400.3.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/react%400.2.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/browser%400.2.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.1.7 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/react%400.1.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-browser/releases/tag/%40daydreamlive/react%400.1.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.1.6 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-typescript/releases/tag/v0.1.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-typescript/releases/tag/v0.1.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.1.5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.1.4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.1.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/daydream-touchdesigner/releases/tag/v0.1.2 |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/daydream/community.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.youtube.com/channel/UCviyh_-8H2vkYq9ROHMBffQ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/pF2Akym5bV |  | null | 🟡 untested-external |  |  |  |
| external-https | https://x.com/DaydreamLiveAI |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/embed/Tweet.html?id=2029225629434925247&theme=dark |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/scope |  | null | 🟡 untested-external |  |  |  |
| external-https | https://raw.githubusercontent.com/daydreamlive/scope/main/README.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/daydream/overview | v2/solutions/daydream/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/daydream/changelog | v2/solutions/daydream/changelog.mdx | true | ok |  |  |  |

### v2/solutions/daydream/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | 'https://discord.gg/pF2Akym5bV' |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/glossary/world-models/ |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../../developers/ | v2/developers/index.mdx | true | ok |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.daydream.live/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.daydream.live/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.daydream.live/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/gateways/portal | v2/gateways/portal.mdx | true | ok |  |  |  |
| internal-rooted | /snippets/assets/media/videos/daydream-hero-demo.mp4 | snippets/assets/media/videos/daydream-hero-demo.mp4 | true | ok |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/getting-started-with-daydream-transform-your-videos-with-ai-magic/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.daydream.live/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://app.daydream.live/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://app.daydream.live/explore?tab=workflows |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.daydream.live/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/pF2Akym5bV |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.daydream.live/ |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/embody/changelog.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/solutions/embody/changelog/rss.xml | v2/solutions/embody/changelog/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v2026.3.1-alpha.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v1.3.6 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v1.3.5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v1.3.4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v1.3.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v1.3.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber/releases/tag/v1.3.1 |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/embody/community.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.youtube.com/@Embody-Media |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/gVmDMhYm |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/embed/Tweet.html?id=2011549141886022107&theme=dark |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/its-DeFine/Unreal_Vtuber |  | null | 🟡 untested-external |  |  |  |
| external-https | https://raw.githubusercontent.com/its-DeFine/Unreal_Vtuber/main/README.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/embed/Tweet.html?id=2029225629434925247&theme=dark |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/embody/overview | v2/solutions/embody/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/embody/changelog | v2/solutions/embody/changelog.mdx | true | ok |  |  |  |

### v2/solutions/embody/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | 'https://discord.gg/livepeer' |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/gVmDMhYm |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/domain/10_PRODUCTS/Embody/Videos/arealiensreal.mp4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/embody-unreal-engine-updates/3186 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://blog.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/embody-unreal-engine-updates/3186 |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/frameworks/changelog.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/solutions/frameworks/changelog/rss.xml | v2/solutions/frameworks/changelog/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer-frameworks/monorepo/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Livepeer-FrameWorks/monorepo/releases/tag/v0.2.0-rc3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Livepeer-FrameWorks/monorepo/releases/tag/v0.2.0-rc2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Livepeer-FrameWorks/monorepo/releases/tag/v0.2.0-rc1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Livepeer-FrameWorks/monorepo/releases/tag/v0.1.0-rc5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Livepeer-FrameWorks/monorepo/releases/tag/v0.1.0-rc4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Livepeer-FrameWorks/monorepo/releases/tag/v0.1.0-rc3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Livepeer-FrameWorks/monorepo/releases/tag/v0.1.0-rc2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Livepeer-FrameWorks/monorepo/releases/tag/v0.1.0-rc1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/Livepeer-FrameWorks/monorepo/releases/tag/v0.0.0-rc1 |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/frameworks/community.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://discord.gg/9J6haUjdAq |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/embed/Tweet.html?id=2026328570520555831&theme=dark |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer-frameworks/monorepo |  | null | 🟡 untested-external |  |  |  |
| external-https | https://raw.githubusercontent.com/livepeer-frameworks/monorepo/master/README.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/embed/Tweet.html?id=2029225629434925247&theme=dark |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/frameworks/overview | v2/solutions/frameworks/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/frameworks/changelog | v2/solutions/frameworks/changelog.mdx | true | ok |  |  |  |

### v2/solutions/frameworks/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://frameworks.network/contact |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.frameworks.network/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://app.frameworks.network/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.frameworks.network/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.frameworks.network/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.frameworks.network/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://frameworks.network/SKILL.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/frameworks/quickstart | v2/solutions/frameworks/quickstart | false | missing | v2/solutions/livepeer-studio/docs/quickstart.mdx | v2/developers/get-started/ai-quickstart.mdx | v2/developers/get-started/comfystream-quickstart.mdx |
| external-https | https://app.frameworks.network/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.frameworks.network/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://forum.livepeer.org/t/pre-proposal-livepeer-frameworks-spe-pilot-phase/2773 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.frameworks.network/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer-frameworks/monorepo |  | null | 🟡 untested-external |  |  |  |
| external-https | https://app.frameworks.network/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://frameworks.network/contact |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/changelog.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/solutions/livepeer-studio/changelog/rss.xml | v2/solutions/livepeer-studio/changelog/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://github.com/livepeer/studio/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.19.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.18.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.17.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.16.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.16.1 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.16.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.15.7 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.15.6 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.15.5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio/releases/tag/v0.15.4 |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/community.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.youtube.com/@livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/embed/Tweet.html?id=1977819660897640875&theme=dark |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://raw.githubusercontent.com/livepeer/studio/master/README.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/livepeer-studio/overview | v2/solutions/livepeer-studio/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/changelog | v2/solutions/livepeer-studio/changelog.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/access-control/jwt.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs/api-reference/signing-key/create |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/docs/access-control/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | webhooks | v2/solutions/livepeer-studio/docs/access-control/webhooks.mdx | true | ok |  |  |  |
| internal-relative | jwt | v2/solutions/livepeer-studio/docs/access-control/jwt.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/access-control/webhooks.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/dashboard/developers/webhooks |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/docs/analytics/listen-to-events.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/dashboard/developers/webhooks |  | null | 🟡 untested-external |  |  |  |
| internal-relative | webhooks | v2/solutions/livepeer-studio/docs/analytics/webhooks.mdx | true | ok |  |  |  |
| internal-relative | webhooks | v2/solutions/livepeer-studio/docs/analytics/webhooks.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/docs/analytics/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs/api-reference/viewership/get-viewership-metrics |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/viewership/get-viewership-metrics |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/docs/analytics/webhooks.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/dashboard/developers/webhooks |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://ngrok.com |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../analytics/listen-to-events | v2/solutions/livepeer-studio/docs/analytics/listen-to-events.mdx | true | ok |  |  |  |
| internal-relative | ../access-control/webhooks | v2/solutions/livepeer-studio/docs/access-control/webhooks.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/assets/delete.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/assets/get-all.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/assets/get.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/assets/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./upload | v2/solutions/livepeer-studio/docs/api-reference/assets/upload.mdx | true | ok |  |  |  |
| internal-relative | ./upload-via-url | v2/solutions/livepeer-studio/docs/api-reference/assets/upload-via-url.mdx | true | ok |  |  |  |
| internal-relative | ./get | v2/solutions/livepeer-studio/docs/api-reference/assets/get.mdx | true | ok |  |  |  |
| internal-relative | ./get-all | v2/solutions/livepeer-studio/docs/api-reference/assets/get-all.mdx | true | ok |  |  |  |
| internal-relative | ./update | v2/solutions/livepeer-studio/docs/api-reference/assets/update.mdx | true | ok |  |  |  |
| internal-relative | ./delete | v2/solutions/livepeer-studio/docs/api-reference/assets/delete.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/assets/update.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/assets/upload-via-url.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/assets/upload.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/multistream/create.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/multistream/delete.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/multistream/get-all.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/multistream/get.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/multistream/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/multistream/update.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/playback/get.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/playback/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./get | v2/solutions/livepeer-studio/docs/api-reference/playback/get.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/create-user.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/create.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/delete.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/get-user.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/get.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/remove-user.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/start-egress.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/stop-egress.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/rooms/update-user.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/sessions/get-all.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/sessions/get-clip.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/sessions/get.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/sessions/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/signing-keys/create.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/signing-keys/delete.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get-all.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/signing-keys/get.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/signing-keys/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/signing-keys/update.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/add-multistream-target.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/create-clip.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/create.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/delete-multistream-target.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/delete.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/get-all.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/get-clip.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/get.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./create | v2/solutions/livepeer-studio/docs/api-reference/streams/create.mdx | true | ok |  |  |  |
| internal-relative | ./get | v2/solutions/livepeer-studio/docs/api-reference/streams/get.mdx | true | ok |  |  |  |
| internal-relative | ./get-all | v2/solutions/livepeer-studio/docs/api-reference/streams/get-all.mdx | true | ok |  |  |  |
| internal-relative | ./update | v2/solutions/livepeer-studio/docs/api-reference/streams/update.mdx | true | ok |  |  |  |
| internal-relative | ./delete | v2/solutions/livepeer-studio/docs/api-reference/streams/delete.mdx | true | ok |  |  |  |
| internal-relative | ./terminate | v2/solutions/livepeer-studio/docs/api-reference/streams/terminate.mdx | true | ok |  |  |  |
| internal-relative | ./create-clip | v2/solutions/livepeer-studio/docs/api-reference/streams/create-clip.mdx | true | ok |  |  |  |
| internal-relative | ./get-clip | v2/solutions/livepeer-studio/docs/api-reference/streams/get-clip.mdx | true | ok |  |  |  |
| internal-relative | ./add-multistream-target | v2/solutions/livepeer-studio/docs/api-reference/streams/add-multistream-target.mdx | true | ok |  |  |  |
| internal-relative | ./delete-multistream-target | v2/solutions/livepeer-studio/docs/api-reference/streams/delete-multistream-target.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/terminate.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/streams/update.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/tasks/get-all.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/tasks/get.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/tasks/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/transcode/create.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/transcode/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/viewership/get-creators-metrics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/viewership/get-public-total-views.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/viewership/get-realtime-viewership.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/viewership/get-usage-metrics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/viewership/get-viewership-metrics.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/viewership/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/webhooks/create.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/webhooks/delete.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/webhooks/get-all.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/webhooks/get.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/webhooks/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/api-reference/webhooks/update.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/get-started/authentication.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/get-started/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../quickstart | v2/solutions/livepeer-studio/docs/quickstart.mdx | true | ok |  |  |  |
| internal-relative | ../reference/overview | v2/solutions/livepeer-studio/docs/reference/overview.mdx | true | ok |  |  |  |
| internal-relative | ../../overview | v2/solutions/livepeer-studio/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/quickstart | v2/solutions/livepeer-studio/docs/quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/get-started/authentication | v2/solutions/livepeer-studio/docs/get-started/authentication.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/get-started/studio-cli.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/dashboard/developers/api-keys |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/dashboard |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/livestream/overview | v2/solutions/livepeer-studio/docs/livestream/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/video-on-demand/overview | v2/solutions/livepeer-studio/docs/video-on-demand/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/reference/sdks | v2/solutions/livepeer-studio/docs/reference/sdks.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/livestream/clip-livestream.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs/api-reference/stream/create-clip |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.npmjs.com/package/@livepeer/react#player |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/playback/get |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/stream/get-clip |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/docs/livestream/create-livestream.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs/api-reference/stream/create |  | null | 🟡 untested-external |  |  |  |
| internal-relative | livestream-from-browser | v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser.mdx | true | ok |  |  |  |
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/playback/get |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./playback-livestream | v2/solutions/livepeer-studio/docs/livestream/playback-livestream.mdx | true | ok |  |  |  |
| internal-relative | stream-via-obs | v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx | true | ok |  |  |  |
| internal-relative | livestream-from-browser | v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser.mdx | true | ok |  |  |  |
| internal-relative | multistream | v2/solutions/livepeer-studio/docs/livestream/multistream.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |
| internal-relative | playback-livestream | v2/solutions/livepeer-studio/docs/livestream/playback-livestream.mdx | true | ok |  |  |  |
| internal-relative | optimise-latency | v2/solutions/livepeer-studio/docs/livestream/optimise-latency | false | missing | /v2/solutions/livepeer-studio/docs/livestream/clip-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/create-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser (high path similarity, 0.8333) |

### v2/solutions/livepeer-studio/docs/livestream/multistream.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs/api-reference/multistream/create |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/stream/create |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/stream/update |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/dashboard/streams |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/stream/add-multistream-target |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/stream/delete-multistream-target |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../analytics/listen-to-events | v2/solutions/livepeer-studio/docs/analytics/listen-to-events.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/livestream/optimize-latency.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |
| internal-relative | stream-via-obs | v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx | true | ok |  |  |  |
| internal-relative | stream-via-obs | v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx | true | ok |  |  |  |
| internal-relative | livestream-from-browser | v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/docs/livestream/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs/api-reference/session/get-all |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./stream-via-obs | v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx | true | ok |  |  |  |
| internal-relative | ./livestream-from-browser | v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser.mdx | true | ok |  |  |  |
| internal-relative | ./stream-health | v2/solutions/livepeer-studio/docs/livestream/stream-health.mdx | true | ok |  |  |  |
| internal-relative | ./multistream | v2/solutions/livepeer-studio/docs/livestream/multistream.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/playback/get |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./stream-via-obs | v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx | true | ok |  |  |  |
| internal-relative | ../analytics/webhooks | v2/solutions/livepeer-studio/docs/analytics/webhooks.mdx | true | ok |  |  |  |
| internal-relative | ../analytics/listen-to-events | v2/solutions/livepeer-studio/docs/analytics/listen-to-events.mdx | true | ok |  |  |  |
| internal-relative | ./create-livestream | v2/solutions/livepeer-studio/docs/livestream/create-livestream.mdx | true | ok |  |  |  |
| internal-relative | ./playback-livestream | v2/solutions/livepeer-studio/docs/livestream/playback-livestream.mdx | true | ok |  |  |  |
| internal-relative | ./stream-via-obs | v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx | true | ok |  |  |  |
| internal-relative | ./livestream-from-browser | v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser.mdx | true | ok |  |  |  |
| internal-relative | ./multistream | v2/solutions/livepeer-studio/docs/livestream/multistream.mdx | true | ok |  |  |  |
| internal-relative | ./clip-livestream | v2/solutions/livepeer-studio/docs/livestream/clip-livestream.mdx | true | ok |  |  |  |
| internal-relative | ./stream-health | v2/solutions/livepeer-studio/docs/livestream/stream-health.mdx | true | ok |  |  |  |
| internal-relative | ./optimise-latency | v2/solutions/livepeer-studio/docs/livestream/optimise-latency | false | missing | /v2/solutions/livepeer-studio/docs/livestream/clip-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/create-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser (high path similarity, 0.8333) |

### v2/solutions/livepeer-studio/docs/livestream/playback-livestream.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs/api-reference/playback/get |  | null | 🟡 untested-external |  |  |  |
| internal-relative | stream-via-obs | v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx | true | ok |  |  |  |
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/livestream/stream-health.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/dashboard/streams |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/stream/get |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/session/get |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| internal-relative | stream-via-obs | v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx | true | ok |  |  |  |
| internal-relative | optimise-latency | v2/solutions/livepeer-studio/docs/livestream/optimise-latency | false | missing | /v2/solutions/livepeer-studio/docs/livestream/clip-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/create-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser (high path similarity, 0.8333) |

### v2/solutions/livepeer-studio/docs/livestream/stream-via-obs.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://obsproject.com/ |  | null | 🟡 untested-external |  |  |  |
| internal-relative | create-livestream | v2/solutions/livepeer-studio/docs/livestream/create-livestream.mdx | true | ok |  |  |  |
| internal-relative | create-livestream | v2/solutions/livepeer-studio/docs/livestream/create-livestream.mdx | true | ok |  |  |  |
| internal-relative | optimise-latency | v2/solutions/livepeer-studio/docs/livestream/optimise-latency | false | missing | /v2/solutions/livepeer-studio/docs/livestream/clip-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/create-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser (high path similarity, 0.8333) |
| internal-relative | ./playback-livestream | v2/solutions/livepeer-studio/docs/livestream/playback-livestream.mdx | true | ok |  |  |  |
| internal-relative | optimise-latency | v2/solutions/livepeer-studio/docs/livestream/optimise-latency | false | missing | /v2/solutions/livepeer-studio/docs/livestream/clip-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/create-livestream (high path similarity, 0.8333) | /v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser (high path similarity, 0.8333) |

### v2/solutions/livepeer-studio/docs/player.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs/api-reference/playback/get |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./livestream/playback-livestream | v2/solutions/livepeer-studio/docs/livestream/playback-livestream.mdx | true | ok |  |  |  |
| internal-relative | ./video-on-demand/playback-asset | v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset.mdx | true | ok |  |  |  |
| internal-relative | access-control/overview | v2/solutions/livepeer-studio/docs/access-control/overview.mdx | true | ok |  |  |  |
| internal-relative | ./video-on-demand/thumbnails-vod | v2/solutions/livepeer-studio/docs/video-on-demand/thumbnails-vod.mdx | true | ok |  |  |  |
| internal-relative | ./analytics/overview | v2/solutions/livepeer-studio/docs/analytics/overview.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/quickstart.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/reference/managing-projects | v2/solutions/livepeer-studio/docs/reference/managing-projects.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/livestream/create-livestream | v2/solutions/livepeer-studio/docs/livestream/create-livestream.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/video-on-demand/upload-asset | v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/analytics/listen-to-events | v2/solutions/livepeer-studio/docs/analytics/listen-to-events.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/reference/sdks | v2/solutions/livepeer-studio/docs/reference/sdks.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/reference/api | v2/solutions/livepeer-studio/docs/reference/api.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/reference/api.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/dashboard/developers/api-keys |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./sdks | v2/solutions/livepeer-studio/docs/reference/sdks.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../access-control/overview | v2/solutions/livepeer-studio/docs/access-control/overview.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/reference/managing-projects.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/livepeer-studio/docs/reference/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ../get-started/authentication | v2/solutions/livepeer-studio/docs/get-started/authentication.mdx | true | ok |  |  |  |
| internal-relative | ../get-started/authentication | v2/solutions/livepeer-studio/docs/get-started/authentication.mdx | true | ok |  |  |  |
| internal-relative | ../quickstart | v2/solutions/livepeer-studio/docs/quickstart.mdx | true | ok |  |  |  |
| internal-relative | ./sdks | v2/solutions/livepeer-studio/docs/reference/sdks.mdx | true | ok |  |  |  |
| internal-relative | ./api | v2/solutions/livepeer-studio/docs/reference/api.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/streams/overview | v2/solutions/livepeer-studio/docs/api-reference/streams/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/assets/overview | v2/solutions/livepeer-studio/docs/api-reference/assets/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/playback/overview | v2/solutions/livepeer-studio/docs/api-reference/playback/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/sessions/overview | v2/solutions/livepeer-studio/docs/api-reference/sessions/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/multistream/overview | v2/solutions/livepeer-studio/docs/api-reference/multistream/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/transcode/overview | v2/solutions/livepeer-studio/docs/api-reference/transcode/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/webhooks/overview | v2/solutions/livepeer-studio/docs/api-reference/webhooks/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/signing-keys/overview | v2/solutions/livepeer-studio/docs/api-reference/signing-keys/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/rooms/overview | v2/solutions/livepeer-studio/docs/api-reference/rooms/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/tasks/overview | v2/solutions/livepeer-studio/docs/api-reference/tasks/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/docs/api-reference/viewership/overview | v2/solutions/livepeer-studio/docs/api-reference/viewership/overview.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/reference/sdks.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.npmjs.com/package/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://pkg.go.dev/github.com/livepeer/livepeer-go |  | null | 🟡 untested-external |  |  |  |
| external-https | https://pypi.org/project/livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.npmjs.com/package/@livepeer/react |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |
| internal-relative | ../livestream/livestream-from-browser | v2/solutions/livepeer-studio/docs/livestream/livestream-from-browser.mdx | true | ok |  |  |  |
| internal-relative | ../quickstart | v2/solutions/livepeer-studio/docs/quickstart.mdx | true | ok |  |  |  |
| internal-relative | ./api | v2/solutions/livepeer-studio/docs/reference/api.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/docs/video-on-demand/encrypted-assets.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ../access-control/overview | v2/solutions/livepeer-studio/docs/access-control/overview.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/livepeer-studio/docs/video-on-demand/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio/docs/api-reference/asset/upload |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/asset/upload-via-url |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./upload-asset | v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset.mdx | true | ok |  |  |  |
| internal-relative | ../livestream/clip-livestream | v2/solutions/livepeer-studio/docs/livestream/clip-livestream.mdx | true | ok |  |  |  |
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/playback/get |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/viewership/get-viewership-metrics |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../access-control/overview | v2/solutions/livepeer-studio/docs/access-control/overview.mdx | true | ok |  |  |  |
| internal-relative | ./encrypted-assets | v2/solutions/livepeer-studio/docs/video-on-demand/encrypted-assets.mdx | true | ok |  |  |  |
| internal-relative | ./upload-asset | v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset.mdx | true | ok |  |  |  |
| internal-relative | ./playback-asset | v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset.mdx | true | ok |  |  |  |
| internal-relative | ./encrypted-assets | v2/solutions/livepeer-studio/docs/video-on-demand/encrypted-assets.mdx | true | ok |  |  |  |
| internal-relative | ./thumbnails-vod | v2/solutions/livepeer-studio/docs/video-on-demand/thumbnails-vod.mdx | true | ok |  |  |  |
| internal-relative | ./transcode-video | v2/solutions/livepeer-studio/docs/video-on-demand/transcode-video.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/playback/get |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../livestream/playback-livestream | v2/solutions/livepeer-studio/docs/livestream/playback-livestream.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/video-on-demand/thumbnails-vod.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | upload-asset | v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/playback/get |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../player | v2/solutions/livepeer-studio/docs/player.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/video-on-demand/transcode-video.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ../reference/api | v2/solutions/livepeer-studio/docs/reference/api.mdx | true | ok |  |  |  |
| external-https | https://docs.storj.io/dcs/api-reference/s3-compatible-gateway |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs/api-reference/transcode/create |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./upload-asset | v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset.mdx | true | ok |  |  |  |
| internal-relative | ./overview | v2/solutions/livepeer-studio/docs/video-on-demand/overview.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/docs/video-on-demand/upload-asset.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/TUS/TUS-js-client |  | null | 🟡 untested-external |  |  |  |
| internal-relative | ./playback-asset | v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset.mdx | true | ok |  |  |  |
| internal-relative | ../analytics/listen-to-events | v2/solutions/livepeer-studio/docs/analytics/listen-to-events.mdx | true | ok |  |  |  |
| internal-relative | ./playback-asset | v2/solutions/livepeer-studio/docs/video-on-demand/playback-asset.mdx | true | ok |  |  |  |
| internal-relative | encrypted-assets | v2/solutions/livepeer-studio/docs/video-on-demand/encrypted-assets.mdx | true | ok |  |  |  |
| internal-relative | ./thumbnails-vod | v2/solutions/livepeer-studio/docs/video-on-demand/thumbnails-vod.mdx | true | ok |  |  |  |

### v2/solutions/livepeer-studio/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | 'https://discord.gg/livepeer' |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/reference/managing-projects | v2/solutions/livepeer-studio/docs/reference/managing-projects.mdx | true | ok |  |  |  |
| external-https | https://raw.githubusercontent.com/livepeer/docs/docs-v2-assets/snippets/assets/media/videos/studio-hero-video.mp4 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/quickstart | v2/solutions/livepeer-studio/docs/quickstart.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/get-started/studio-cli | v2/solutions/livepeer-studio/docs/get-started/studio-cli.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/dashboard |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/livepeer-studio/docs/reference/api | v2/solutions/livepeer-studio/docs/reference/api.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio/docs |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.gg/livepeer |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/livepeer-studio/client-use-cases | v2/solutions/livepeer-studio/client-use-cases | false | missing | v2/solutions/livepeer-studio/studio-client-use-cases.mdx |  |  |

### v2/solutions/livepeer-studio/studio-client-use-cases.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| (none) |  |  |  |  |  |  |  |

### v2/solutions/portal.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://github.com/livepeer/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/solutions/daydream/overview | v2/solutions/daydream/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/livepeer-studio/overview | v2/solutions/livepeer-studio/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/frameworks/overview | v2/solutions/frameworks/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/embody/overview | v2/solutions/embody/overview.mdx | true | ok |  |  |  |
| internal-rooted | /v2/solutions/solution-providers | v2/solutions/solution-providers.mdx | true | ok |  |  |  |

### v2/solutions/resources/glossary.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-relative | ./glossary-data.json | v2/solutions/resources/glossary-data.json | true | ok |  |  |  |
| external-https | https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_compression_picture_types |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Bit_rate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Constant_bitrate |  | null | 🟡 untested-external |  |  |  |
| external-https | https://slhck.info/video/2017/02/24/crf-guide.html |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Group_of_pictures |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Display_resolution |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://cloudinary.com/glossary/video-rendition |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Transcoding |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Latency_(audio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.ibm.com/think/topics/live-streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.cloudflare.com/learning/video/what-is-live-streaming/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/MP4_file_format |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/OBS_Studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.mux.com/blog/the-four-elements-of-video-performance |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Thumbnail |  | null | 🟡 untested-external |  |  |  |
| external-https | https://wiki.svta.org/time-to-first-frame/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_on_demand |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Video_on_demand |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/WebVTT |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/HTTP_Live_Streaming |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Secure_Reliable_Transport |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/WebRTC |  | null | 🟡 untested-external |  |  |  |
| external-https | https://datatracker.ietf.org/doc/draft-ietf-wish-whep/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.rfc-editor.org/rfc/rfc9725.html |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Avatar_(computing |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/cumulo-autumn/StreamDiffusion |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-us/glossary/world-models/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://www.nvidia.com/en-au/use-cases/digital-humans/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/API_key |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/AT_Protocol |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization |  | null | 🟡 untested-external |  |  |  |
| external-https | https://c2pa.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Web_API |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Fediverse |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/JSON |  | null | 🟡 untested-external |  |  |  |
| external-https | https://jwt.io/introduction |  | null | 🟡 untested-external |  |  |  |
| external-https | https://mistserver.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://c2pa.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/REST |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Software_development_kit |  | null | 🟡 untested-external |  |  |  |
| external-https | https://tus.io/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://en.wikipedia.org/wiki/Webhook |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/solutions | v2/solutions/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/resources/glossary | v2/resources/glossary.mdx | true | ok |  |  |  |
| internal-rooted | /v2/home/get-started | v2/home/get-started | false | missing | /v2/home (high path similarity, 0.6667) | /v2/home (high path similarity, 0.6667) | /v2/home/mission-control (high path similarity, 0.6667) |

### v2/solutions/solution-providers.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://docs.livepeer.org |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://app.frameworks.network |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.frameworks.network |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/daydreamlive |  | null | 🟡 untested-external |  |  |  |
| external-https | https://docs.daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/streamplace/streamplace |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/docs |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/livepeer-studio/overview | v2/solutions/livepeer-studio/overview.mdx | true | ok |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/daydream/overview | v2/solutions/daydream/overview.mdx | true | ok |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/frameworks/overview | v2/solutions/frameworks/overview.mdx | true | ok |  |  |  |
| external-https | https://app.frameworks.network |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/embody/overview | v2/solutions/embody/overview.mdx | true | ok |  |  |  |
| external-https | https://embody.zone |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | true | ok |  |  |  |
| external-https | https://stream.place |  | null | 🟡 untested-external |  |  |  |
| external-https | https://livepeer.studio |  | null | 🟡 untested-external |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://app.frameworks.network |  | null | 🟡 untested-external |  |  |  |
| external-https | https://stream.place |  | null | 🟡 untested-external |  |  |  |
| external-https | https://daydream.live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone |  | null | 🟡 untested-external |  |  |  |
| external-https | https://embody.zone |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /v2/developers | v2/developers/index.mdx | true | ok |  |  |  |
| internal-rooted | /v2/gateways | v2/gateways/index.mdx | true | ok |  |  |  |
| external-https | https://forum.livepeer.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/livepeer/ |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/streamplace/changelog.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /v2/solutions/streamplace/changelog/rss.xml | v2/solutions/streamplace/changelog/rss.xml | false | missing | v2/internal/assets/transcripts/a16z.rss | v2/internal/assets/transcripts/ycomb.rss | .github/workflows/integrator-copy-update-rss-blog-data.yml |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/streamplace/streamplace/releases |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.12 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.11 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.10 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.9 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.8 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.7 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.6 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.5 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.3 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.2 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.10.0 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.9.15 |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace/-/releases/v0.9.13 |  | null | 🟡 untested-external |  |  |  |

### v2/solutions/streamplace/community.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://www.youtube.com/@livepeer |  | null | 🟡 untested-external |  |  |  |
| external-https | https://discord.com/invite/EdtZv4UTMU |  | null | 🟡 untested-external |  |  |  |
| external-https | https://twitter.com/Livepeer?ref_src=twsrc%5Etfw |  | null | 🟡 untested-external |  |  |  |
| external-https | https://t.co/OSiBmRq60G |  | null | 🟡 untested-external |  |  |  |
| external-https | https://twitter.com/cult_leader_en/status/1937914268646797643?ref_src=twsrc%5Etfw |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/widgets.js |  | null | 🟡 untested-external |  |  |  |
| external-https | https://platform.twitter.com/embed/Tweet.html?id=1937914268646797643&theme=dark |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/streamplace/streamplace |  | null | 🟡 untested-external |  |  |  |
| external-https | https://raw.githubusercontent.com/streamplace/streamplace/next/README.md |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/changelog | v2/solutions/streamplace/changelog.mdx | true | ok |  |  |  |

### v2/solutions/streamplace/introduction/streamplace-architecture.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-guide | v2/solutions/streamplace/introduction/streamplace-guide.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-provenance | v2/solutions/streamplace/introduction/streamplace-provenance.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-funding-model | v2/solutions/streamplace/introduction/streamplace-funding-model.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-integration | v2/solutions/streamplace/introduction/streamplace-integration.mdx | true | ok |  |  |  |

### v2/solutions/streamplace/introduction/streamplace-funding-model.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-architecture | v2/solutions/streamplace/introduction/streamplace-architecture.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-provenance | v2/solutions/streamplace/introduction/streamplace-provenance.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-integration | v2/solutions/streamplace/introduction/streamplace-integration.mdx | true | ok |  |  |  |

### v2/solutions/streamplace/introduction/streamplace-guide.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-architecture | v2/solutions/streamplace/introduction/streamplace-architecture.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-provenance | v2/solutions/streamplace/introduction/streamplace-provenance.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-integration | v2/solutions/streamplace/introduction/streamplace-integration.mdx | true | ok |  |  |  |

### v2/solutions/streamplace/introduction/streamplace-integration.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| internal-rooted | /solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-guide | v2/solutions/streamplace/introduction/streamplace-guide.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-architecture | v2/solutions/streamplace/introduction/streamplace-architecture.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-provenance | v2/solutions/streamplace/introduction/streamplace-provenance.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-funding-model | v2/solutions/streamplace/introduction/streamplace-funding-model.mdx | true | ok |  |  |  |

### v2/solutions/streamplace/introduction/streamplace-provenance.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | https://spec.c2pa.org/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://stream.place/docs/video-metadata/metadata-record/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/streamplace/overview | v2/solutions/streamplace/overview.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-guide | v2/solutions/streamplace/introduction/streamplace-guide.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-architecture | v2/solutions/streamplace/introduction/streamplace-architecture.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-funding-model | v2/solutions/streamplace/introduction/streamplace-funding-model.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-integration | v2/solutions/streamplace/introduction/streamplace-integration.mdx | true | ok |  |  |  |

### v2/solutions/streamplace/overview.mdx
| linkType | rawPath | resolvedPath | exists | status | movedCandidate1 | movedCandidate2 | movedCandidate3 |
|---|---|---|---|---|---|---|---|
| external-https | 'https://discord.com/invite/EdtZv4UTMU' |  | null | 🟡 untested-external |  |  |  |
| external-https | https://stream.place |  | null | 🟡 untested-external |  |  |  |
| external-https | https://stream.place |  | null | 🟡 untested-external |  |  |  |
| external-https | https://stream.place/download |  | null | 🟡 untested-external |  |  |  |
| external-https | https://stream.place/live |  | null | 🟡 untested-external |  |  |  |
| external-https | https://stream.place/docs/ |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-integration | v2/solutions/streamplace/introduction/streamplace-integration.mdx | true | ok |  |  |  |
| external-https | https://stream.place/docs/ |  | null | 🟡 untested-external |  |  |  |
| external-https | https://git.stream.place/streamplace/streamplace |  | null | 🟡 untested-external |  |  |  |
| external-https | https://github.com/streamplace/streamplace |  | null | 🟡 untested-external |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-architecture | v2/solutions/streamplace/introduction/streamplace-architecture.mdx | true | ok |  |  |  |
| internal-rooted | /solutions/streamplace/introduction/streamplace-provenance | v2/solutions/streamplace/introduction/streamplace-provenance.mdx | true | ok |  |  |  |
