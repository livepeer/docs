# Gateways IA Pre-Requisite Reference

Generated: 2026-03-23
Source branch: docs-v2-dev

---

## Section 1 — Folder & File Tree (v2/gateways/)

`x-deprecated/`, `x-resources/`, and `stubs/` folders contain working/archive files and are included for completeness. The `_workspace/` directory is excluded.

```
v2/gateways/
├── index.mdx  [title: "Gateways Index" | pageType: overview]
├── navigator.mdx  [title: "Gateway Navigator" | pageType: overview]
├── portal.mdx  [title: "Gateway Home Portal" | pageType: landing]
├── concepts/
│   ├── architecture.mdx  [title: "Gateway Architecture" | pageType: concept]
│   ├── business-model.mdx  [title: "Gateway Business Model" | pageType: concept]
│   ├── capabilities.mdx  [title: "Gateway Capabilities" | pageType: concept]
│   └── role.mdx  [title: "The Gateway Role in the Livepeer Network" | pageType: overview]
├── guides/
│   ├── advanced-operations/
│   │   ├── dep-production-hardening.mdx  [title: "Orchestrator Selection & Tiering" | pageType: guide]
│   │   ├── gateway-discoverability.mdx  [title: "Publishing a Gateway" | pageType: guide]
│   │   ├── gateway-middleware.mdx  [title: "Gateway Middleware" | pageType: guide]
│   │   ├── orchestrator-selection.mdx  [title: "Orchestrator Selection & Tiering" | pageType: guide]
│   │   ├── scaling.mdx  [title: "Scaling & Resource Management" | pageType: guide]
│   │   ├── x-deprecated/
│   │   │   ├── x-orchestrator-tiering.mdx  [title: [no title] | pageType: [no pageType]]
│   │   │   └── x-production-ops.mdx  [title: "Production Operations" | pageType: [no pageType]]
│   │   └── x-resources/
│   │       ├── ctx-new--connect-with-offerings-publish.mdx  [title: "Discover & Connect Marketplace Compute Services" | pageType: [no pageType]]
│   │       ├── ctx-new--connect-with-offerings.mdx  [title: "Discover & Connect Marketplace Compute Services" | pageType: [no pageType]]
│   │       ├── ctx-new--discover-offerings.mdx  [title: "Discover Marketplace Offerings" | pageType: [no pageType]]
│   │       ├── ctx-new--gateway-middleware.mdx  [title: "Gateway Middleware & Integrations" | pageType: [no pageType]]
│   │       ├── ctx-new--lp-marketplace.mdx  [title: "Livepeer Marketplace Overview" | pageType: [no pageType]]
│   │       ├── v1--dual-mine.mdx  [title: "Dual Mine" | pageType: [no pageType]]
│   │       ├── v1--o-t-split.mdx  [title: "Connect to Transcoders" | pageType: [no pageType]]
│   │       ├── v1--set-session-limits.mdx  [title: "Set Session Limits" | pageType: [no pageType]]
│   │       ├── v2-advops--orchestrator-tiering.mdx  [title: "Orchestrator Tiering" | pageType: [no pageType]]
│   │       ├── v2-advops--production-ops.mdx  [title: "Production Operations" | pageType: [no pageType]]
│   │       ├── v2-refs--configuration-flags.mdx  [title: "Gateway Configuration Flags" | pageType: [no pageType]]
│   │       ├── v2-refs--gpu-support.mdx  [title: "GPU Support" | pageType: [no pageType]]
│   │       ├── v2-refs--orchestrator-offerings.mdx  [title: "Orchestrator Offerings Reference" | pageType: [no pageType]]
│   │       ├── v2-refs--technical-architecture.mdx  [title: "Technical Architecture" | pageType: [no pageType]]
│   │       ├── v2-run--discover-offerings.mdx  [title: "Discover Marketplace Offerings" | pageType: [no pageType]]
│   │       ├── v2-run--dual-configuration.mdx  [title: "Configure AI & Video Dual Gateway Services" | pageType: [no pageType]]
│   │       ├── v2-run--lp-marketplace.mdx  [title: "Livepeer Marketplace Overview" | pageType: [no pageType]]
│   │       ├── v2-setup--connect-with-offerings.mdx  [title: "Discover & Connect Marketplace Compute Services" | pageType: [no pageType]]
│   │       └── v2-tools--gateway-middleware.mdx  [title: "Gateway Middleware & Integrations" | pageType: [no pageType]]
│   ├── deployment-details/
│   │   ├── setup-options.mdx  [title: "Gateway Setup Options" | pageType: guide]
│   │   ├── setup-requirements.mdx  [title: "Gateway Requirements" | pageType: guide]
│   │   ├── x-deprecated/
│   │   │   ├── dep-setup-options.mdx  [title: "Gateway Deployment Options" | pageType: guide]
│   │   │   ├── dual-gateway-config.mdx  [title: "Dual Gateway Configuration" | pageType: [no pageType]]
│   │   │   ├── ecosystem-offerings.mdx  [title: "Ecosystem Gateway Deployment Projects" | pageType: [no pageType]]
│   │   │   ├── gateway-setup-paths.mdx  [title: "Gateway Setup Paths" | pageType: [no pageType]]
│   │   │   ├── on-chain-vs-off-chain.mdx  [title: "On-Chain vs Off-Chain Gateways" | pageType: [no pageType]]
│   │   │   ├── path-requirements.mdx  [title: "Detailed Requirements by Deployment Path" | pageType: guide]
│   │   │   ├── requirements-off-chain.mdx  [title: "Off-Chain AI Gateway Requirements" | pageType: reference]
│   │   │   ├── requirements-setup.mdx  [title: "Gateway Requirements" | pageType: reference]
│   │   │   ├── sdk-alt-gateways.mdx  [title: "SDK & Alternative Gateways" | pageType: [no pageType]]
│   │   │   └── setup-paths.mdx  [title: "Gateway Deployment & Node Type Setup Options" | pageType: guide]
│   │   └── x-resources/
│   │       (empty — no .mdx files)
│   ├── monitoring-and-tooling/
│   │   ├── health-checks.mdx  [title: "Gateway Health Checks" | pageType: guide]
│   │   ├── monitoring-setup.mdx  [title: "Monitoring Setup" | pageType: guide]
│   │   ├── on-chain-metrics.mdx  [title: "On-Chain Metrics and Monitoring" | pageType: guide]
│   │   ├── tools-and-dashboards.mdx  [title: "Tools & Dashboards" | pageType: guide]
│   │   ├── troubleshooting.mdx  [title: "Gateway Troubleshooting" | pageType: troubleshooting]
│   │   └── x-resources/
│   │       ├── ctx-new--ai-health-api.mdx  [title: [no title] | pageType: reference]
│   │       ├── ctx-new--cli-commands.mdx  [title: "Gateway CLI Commands" | pageType: [no pageType]]
│   │       ├── ctx-new--cli-http-api.mdx  [title: "CLI HTTP API API Portal" | pageType: reference]
│   │       ├── ctx-new--cli-reference.mdx  [title: "CLI Reference" | pageType: [no pageType]]
│   │       ├── ctx-new--explorer.mdx  [title: "Gateway Explorer" | pageType: [no pageType]]
│   │       ├── ctx-new--health-api.mdx  [title: [no title] | pageType: reference]
│   │       ├── ctx-new--livepeer-tools.mdx  [title: "Livepeer Tools Dashboard" | pageType: [no pageType]]
│   │       ├── ctx-new--monitor-and-optimise.mdx  [title: "Monitor & Optimise Gateway Services" | pageType: [no pageType]]
│   │       ├── ctx-new--prometheus-metrics.mdx  [title: "Prometheus Metrics" | pageType: [no pageType]]
│   │       ├── ctx-new--status-api.mdx  [title: [no title] | pageType: reference]
│   │       ├── v1--monitor-metrics.mdx  [title: "Monitor Metrics" | pageType: [no pageType]]
│   │       ├── v1--troubleshoot.mdx  [title: "Troubleshoot" | pageType: [no pageType]]
│   │       ├── v2-about--blockchain-contracts.mdx  [title: "Blockchain Contracts" | pageType: [no pageType]]
│   │       ├── v2-guidesres--faq.mdx  [title: "Gateway FAQ" | pageType: reference]
│   │       ├── v2-monitor--monitor-and-optimise.mdx  [title: "Monitor & Optimise Gateway Services" | pageType: [no pageType]]
│   │       ├── v2-needed--troubleshooting.mdx  [title: "Gateway Troubleshooting" | pageType: [no pageType]]
│   │       ├── v2-onchain--bridge-lpt-to-arbitrum.mdx  [title: "Bridge LPT to Arbitrum" | pageType: [no pageType]]
│   │       ├── v2-refs--ai-health-api.mdx  [title: [no title] | pageType: reference]
│   │       ├── v2-refs--cli-commands.mdx  [title: "Gateway CLI Commands" | pageType: [no pageType]]
│   │       ├── v2-refs--cli-http-api.mdx  [title: "CLI HTTP API API Portal" | pageType: reference]
│   │       ├── v2-refs--cli-reference.mdx  [title: "CLI Reference" | pageType: [no pageType]]
│   │       ├── v2-refs--contract-addresses.mdx  [title: "Contract Addresses" | pageType: [no pageType]]
│   │       ├── v2-refs--hardware-info-api.mdx  [title: [no title] | pageType: reference]
│   │       ├── v2-refs--hardware-stats-api.mdx  [title: [no title] | pageType: reference]
│   │       ├── v2-refs--health-api.mdx  [title: [no title] | pageType: reference]
│   │       ├── v2-refs--prometheus-metrics.mdx  [title: "Prometheus Metrics" | pageType: [no pageType]]
│   │       ├── v2-refs--status-api.mdx  [title: [no title] | pageType: reference]
│   │       ├── v2-setup--monitor-and-optimise.mdx  [title: "Monitor & Optimise Gateway Services" | pageType: [no pageType]]
│   │       ├── v2-tools--explorer.mdx  [title: "Gateway Explorer" | pageType: [no pageType]]
│   │       ├── v2-tools--gateway-middleware.mdx  [title: "Gateway Middleware & Integrations" | pageType: [no pageType]]
│   │       └── v2-tools--livepeer-tools.mdx  [title: "Livepeer Tools Dashboard" | pageType: [no pageType]]
│   ├── node-pipelines/
│   │   ├── ai-pipelines.mdx  [title: "AI Pipelines on Livepeer" | pageType: guide]
│   │   ├── byoc-pipelines.mdx  [title: "BYOC Pipelines" | pageType: guide]
│   │   ├── dep-ai-inference.mdx  [title: "AI Inference Pipeline" | pageType: guide]
│   │   ├── guide.mdx  [title: "AI and Job Pipelines Overview" | pageType: overview]
│   │   ├── pipeline-configuration.mdx  [title: "Pipeline Configuration" | pageType: guide]
│   │   ├── video-pipelines.mdx  [title: "Video & Transcoding Pipelines" | pageType: guide]
│   │   └── x-resources/
│   │       ├── ctx-gwnew--ai-configuration.mdx  [title: "AI Gateway Configuration" | pageType: how_to]
│   │       ├── ctx-new--ai-configuration.mdx  [title: "AI Configuration" | pageType: [no pageType]]
│   │       ├── ctx-new--transcoding.mdx  [title: "Gateway Transcoding Guide" | pageType: [no pageType]]
│   │       ├── ctx-new--video-configuration-view.mdx  [title: "Video Configuration" | pageType: [no pageType]]
│   │       ├── ctx-new--video-configuration.mdx  [title: "Video Configuration" | pageType: [no pageType]]
│   │       ├── v1--ai-builders-gateways.mdx  [title: "AI Gateways" | pageType: [no pageType]]
│   │       ├── v1--ai-worker.mdx  [title: "Attach Remote AI Workers" | pageType: [no pageType]]
│   │       ├── v1--benchmarking.mdx  [title: "Perform Benchmarking" | pageType: [no pageType]]
│   │       ├── v1--models-config.mdx  [title: "Configuring AI Models" | pageType: [no pageType]]
│   │       ├── v1--models-download.mdx  [title: "Download AI Models" | pageType: [no pageType]]
│   │       ├── v1--transcoding-options.mdx  [title: "Configure Transcoding Options" | pageType: [no pageType]]
│   │       ├── v2-dev--ai-pipelines-byoc.mdx  [title: "BYOC - Bring Your Own Container" | pageType: [no pageType]]
│   │       ├── v2-dev--ai-pipelines-model-support.mdx  [title: "AI Model Support on Livepeer" | pageType: [no pageType]]
│   │       ├── v2-dev--ai-pipelines-overview.mdx  [title: "AI Pipelines Overview" | pageType: guide]
│   │       ├── v2-guidesres--byoc.mdx  [title: "BYOC for Gateway Operators" | pageType: [no pageType]]
│   │       ├── v2-guidesres--overview.mdx  [title: "Gateway Job Pipelines Overview" | pageType: overview]
│   │       ├── v2-orch--job-types.mdx  [title: "Types of Orchestrator Jobs" | pageType: [no pageType]]
│   │       ├── v2-run--ai-configuration.mdx  [title: "AI Configuration" | pageType: [no pageType]]
│   │       ├── v2-run--transcoding.mdx  [title: "Gateway Transcoding Guide" | pageType: [no pageType]]
│   │       ├── v2-run--video-configuration.mdx  [title: "Video Configuration" | pageType: [no pageType]]
│   │       └── v2-setup--transcoding-options.mdx  [title: "Configure Transcoding Options" | pageType: [no pageType]]
│   ├── operator-considerations/
│   │   ├── business-case.mdx  [title: "Gateway Business Case" | pageType: guide]
│   │   ├── production-gateways.mdx  [title: "Public and Commercial Gateways Operating on Livepeer" | pageType: guide]
│   │   ├── x-deprecated/
│   │   │   ├── community-projects.mdx  [title: "Community Projects" | pageType: [no pageType]]
│   │   │   ├── dep-business-rationale.mdx  [title: "Gateway Business Model" | pageType: concept]
│   │   │   ├── dep-commercial-gateways.mdx  [title: "Gateways in Production" | pageType: guide]
│   │   │   ├── dep-opportunities.mdx  [title: "Gateway Operator Opportunities" | pageType: guide]
│   │   │   ├── deployment-use-case.mdx  [title: "Do you need a Gateway? The Deployment Use Case" | pageType: guide]
│   │   │   ├── economics.mdx  [title: "Gateway Economics" | pageType: [no pageType]]
│   │   │   ├── hardware-requirements.mdx  [title: "Hardware Requirements" | pageType: [no pageType]]
│   │   │   ├── operator-opportunities.mdx  [title: "Gateway Operator Opportunities" | pageType: guide]
│   │   │   ├── setup-requirements.mdx  [title: "Gateway Node Requirements" | pageType: [no pageType]]
│   │   │   ├── why-run-a-gateway.mdx  [title: "Why You Should Run a Gateway" | pageType: [no pageType]]
│   │   │   ├── old_v1/
│   │   │   │   ├── business-model.mdx  [title: "Gateway Costs and Revenue" | pageType: concept]
│   │   │   │   ├── ecosystem-projects.mdx  [title: "Gateway Ecosystem Projects" | pageType: guide]
│   │   │   │   ├── gateway-requirements.mdx  [title: "Gateway Requirements" | pageType: guide]
│   │   │   │   ├── operator-opportunities.mdx  [title: "Gateway Operator Opportunities" | pageType: guide]
│   │   │   │   ├── section-evaluation-and-recommendations.mdx  [title: [no title] | pageType: [no pageType]]
│   │   │   │   └── why-run-a-gateway.mdx  [title: "Why Run a Livepeer Gateway?" | pageType: guide]
│   │   │   └── on-chain setup/
│   │   │       ├── bridge-lpt-to-arbitrum.mdx  [title: "Bridge LPT to Arbitrum" | pageType: [no pageType]]
│   │   │       ├── fund-gateway.mdx  [title: "Fund The Livepeer Gateway" | pageType: [no pageType]]
│   │   │       └── on-chain.mdx  [title: "On-Chain Setup Requirements" | pageType: [no pageType]]
│   │   └── x-resources/
│   │       (empty — no .mdx files at this level)
│   ├── payments-and-pricing/
│   │   ├── clearinghouse-guide.mdx  [title: "Payment Clearinghouses" | pageType: guide]
│   │   ├── dep-payment-guide.mdx  [title: "Payment Paths for Gateway Operators" | pageType: guide]
│   │   ├── funding-guide.mdx  [title: "Guide to Funding an On-Chain Gateway" | pageType: guide]
│   │   ├── payment-guide.mdx  [title: "Payment Paths for Gateway Operators" | pageType: guide]
│   │   ├── pricing-strategy.mdx  [title: "Gateway Pricing Strategy" | pageType: guide]
│   │   ├── remote-signers.mdx  [title: "Remote Signers" | pageType: guide]
│   │   └── x-resources/
│   │       ├── ctx-concepts--economics.mdx  [title: "Gateway Economics" | pageType: [no pageType]]
│   │       ├── ctx-guides--how-payments-work.mdx  [title: "How Payments Work" | pageType: concept]
│   │       ├── ctx-gwnew--pricing-configuration.mdx  [title: "Pricing Configuration" | pageType: how_to]
│   │       ├── ctx-new--arbitrum-exchanges.mdx  [title: "Arbitrum Exchange Reference" | pageType: [no pageType]]
│   │       ├── ctx-new--arbitrum-rpc.mdx  [title: "Arbitrum RPCs" | pageType: [no pageType]]
│   │       ├── ctx-new--contract-addresses.mdx  [title: "Contract Addresses" | pageType: [no pageType]]
│   │       ├── ctx-new--payment-clearinghouse.mdx  [title: "Payment Clearinghouses" | pageType: concept]
│   │       ├── ctx-new--remote-signers.mdx  [title: "Remote Signers" | pageType: concept]
│   │       ├── ctx-setup--bridge-lpt-to-arbitrum.mdx  [title: "Bridge LPT to Arbitrum" | pageType: [no pageType]]
│   │       ├── ctx-setup--fund-gateway.mdx  [title: "Fund The Livepeer Gateway" | pageType: [no pageType]]
│   │       ├── ctx-setup--pricing-configuration.mdx  [title: "Pricing Configuration" | pageType: [no pageType]]
│   │       ├── v1--bridge-lpt-to-arbitrum.mdx  [title: "Bridge LPT to Arbitrum" | pageType: [no pageType]]
│   │       ├── v1--connect-to-arbitrum.mdx  [title: "Connect to Arbitrum" | pageType: [no pageType]]
│   │       ├── v1--contract-addresses.mdx  [title: "Contract Addresses" | pageType: [no pageType]]
│   │       ├── v1--fund-gateway.mdx  [title: "Fund The Livepeer Gateway" | pageType: [no pageType]]
│   │       ├── v1--set-pricing.mdx  [title: "Set Pricing" | pageType: [no pageType]]
│   │       ├── v2-about--economics.mdx  [title: "Gateway Economics" | pageType: [no pageType]]
│   │       ├── v2-configure--pricing-configuration.mdx  [title: "Pricing Configuration" | pageType: [no pageType]]
│   │       ├── v2-needed--feasibility-economics.mdx  [title: "Gateway Feasibility & Economics" | pageType: [no pageType]]
│   │       ├── v2-onchain--bridge-lpt-to-arbitrum.mdx  [title: "Bridge LPT to Arbitrum" | pageType: [no pageType]]
│   │       ├── v2-onchain--fund-gateway.mdx  [title: "Fund The Livepeer Gateway" | pageType: [no pageType]]
│   │       ├── v2-opcon--economics.mdx  [title: "Gateway Economics" | pageType: [no pageType]]
│   │       ├── v2-opcon--fund-gateway.mdx  [title: "Fund The Livepeer Gateway" | pageType: [no pageType]]
│   │       ├── v2-payments--how-payments-work.mdx  [title: "How Payments Work" | pageType: concept]
│   │       ├── v2-payments--overview.mdx  [title: "Gateway Payments" | pageType: overview]
│   │       ├── v2-payments--payment-clearinghouse.mdx  [title: "Payment Clearinghouses" | pageType: concept]
│   │       ├── v2-payments--remote-signers.mdx  [title: "Remote Signers" | pageType: concept]
│   │       ├── v2-refs--arbitrum-exchanges.mdx  [title: "Arbitrum Exchange Reference" | pageType: [no pageType]]
│   │       ├── v2-refs--arbitrum-rpc.mdx  [title: "Arbitrum RPCs" | pageType: [no pageType]]
│   │       ├── v2-refs--contract-addresses.mdx  [title: "Contract Addresses" | pageType: [no pageType]]
│   │       ├── v2-setup--bridge-lpt-to-arbitrum.mdx  [title: "Bridge LPT to Arbitrum" | pageType: [no pageType]]
│   │       ├── v2-setup--fund-gateway.mdx  [title: "Fund The Livepeer Gateway" | pageType: [no pageType]]
│   │       ├── v2-setup--pricing-configuration.mdx  [title: "Pricing Configuration" | pageType: [no pageType]]
│   │       ├── v2-v1legacy--fund-gateway.mdx  [title: "Fund The Livepeer Gateway" | pageType: [no pageType]]
│   │       └── related/
│   │           ├── fund-gateway.mdx  [title: "Fund The Livepeer Gateway" | pageType: [no pageType]]
│   │           ├── how-payments-work.mdx  [title: "How Payments Work" | pageType: concept]
│   │           ├── payment-clearinghouse.mdx  [title: "Payment Clearinghouses" | pageType: concept]
│   │           ├── pricing-configuration.mdx  [title: "Pricing Configuration" | pageType: [no pageType]]
│   │           ├── pricing-strategy.mdx  [title: "Gateway Pricing Strategy" | pageType: [no pageType]]
│   │           ├── remote-signers.mdx  [title: "Remote Signers" | pageType: concept]
│   │           └── set-pricing.mdx  [title: "Set Pricing" | pageType: [no pageType]]
│   ├── roadmap-and-funding/
│   │   ├── gateway-showcase.mdx  [title: "Gateway Showcase" | pageType: guide]
│   │   ├── naap-multi-tenancy.mdx  [title: "NaaP & Multi-Tenancy" | pageType: guide]
│   │   ├── operator-support.mdx  [title: "Operator Support & Programmes" | pageType: guide]
│   │   ├── spe-grant-model.mdx  [title: "SPE Grant Model for Gateway Operators" | pageType: guide]
│   │   ├── x-deprecated/
│   │   │   └── spe-grant-model.mdx  [title: "SPE & Grant Model" | pageType: [no pageType]]
│   │   └── x-resources/
│   │       ├── biz--ai-builder-opportunity.mdx  [title: "Build AI Products on Livepeer" | pageType: guide]
│   │       ├── biz--sdk-builder-opportunity.mdx  [title: "Alternative Gateway Implementations" | pageType: guide]
│   │       ├── biz--video-transcoding-opportunity.mdx  [title: "Video Transcoding: Replace Your Cloud Provider" | pageType: guide]
│   │       ├── ctx-new--economics.mdx  [title: "Gateway Economics" | pageType: [no pageType]]
│   │       ├── ctx-new--gateway-operator-opportunities.mdx  [title: "Gateway Operator Opportunities" | pageType: guide]
│   │       ├── old--spe-grant-model.mdx  [title: "SPE & Grant Model" | pageType: [no pageType]]
│   │       ├── support-ops--spe-grant-model.mdx  [title: "SPE Grant Model for Gateway Operators" | pageType: guide]
│   │       ├── v1--ai-builders-gateways.mdx  [title: "AI Gateways" | pageType: [no pageType]]
│   │       ├── v1--ai-builders-get-started.mdx  [title: "Building on Livepeer AI" | pageType: [no pageType]]
│   │       ├── v1--ai-builders-showcase.mdx  [title: "Showcase" | pageType: [no pageType]]
│   │       ├── v2-guidesres--community-guides.mdx  [title: "Community Guides" | pageType: [no pageType]]
│   │       ├── v2-guidesres--community-projects.mdx  [title: "Community Projects" | pageType: [no pageType]]
│   │       ├── v2-opcons--business-case.mdx  [title: "Gateway Costs and Revenue" | pageType: concept]
│   │       ├── v2-opcons--ecosystem-projects.mdx  [title: "Gateway Ecosystem Projects" | pageType: guide]
│   │       ├── v2-opcons--operator-opportunities.mdx  [title: "Gateway Operator Opportunities" | pageType: guide]
│   │       ├── v2-opcons--why-run-a-gateway.mdx  [title: "Why Run a Livepeer Gateway?" | pageType: guide]
│   │       ├── v2-providers--choosing-a-gateway.mdx  [title: "Find Gateway Services" | pageType: guide]
│   │       ├── v2-providers--cloud-spe-gateway.mdx  [title: "Using the Cloud SPE Gateway" | pageType: guide]
│   │       ├── v2-run--gateway-operator-opportunities.mdx  [title: "Gateway Operator Opportunities" | pageType: guide]
│   │       ├── business-ops/
│   │       │   ├── ai-builder-opportunity.mdx  [title: "Build AI Products on Livepeer" | pageType: guide]
│   │       │   ├── sdk-builder-opportunity.mdx  [title: "Alternative Gateway Implementations" | pageType: guide]
│   │       │   └── video-transcoding-opportunity.mdx  [title: "Video Transcoding: Replace Your Cloud Provider" | pageType: guide]
│   │       └── support-ops/
│   │           └── spe-grant-model.mdx  [title: "SPE Grant Model for Gateway Operators" | pageType: guide]
│   └── tutorials/
│       ├── byoc-cpu-tutorial.mdx  [title: "BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain)" | pageType: tutorial]
│       ├── tutorial-1-offchain-transcoding-test.mdx  [title: "Your First Gateway: Off-chain Transcoding" | pageType: tutorial]
│       ├── tutorial-2-byoc-cpu-pipeline.mdx  [title: "Add AI: BYOC CPU Pipeline" | pageType: tutorial]
│       ├── tutorial-3-go-production.mdx  [title: "Go Production: On-chain, GPU, and Network" | pageType: tutorial]
│       ├── tutorials-resources.mdx  [title: "Tutorials Resources" | pageType: landing]
│       └── stubs/
│           ├── tutorial-byoc-cpu-pipeline.mdx  [title: "Add AI: BYOC CPU Pipeline" | pageType: [no pageType]]
│           ├── tutorial-go-production.mdx  [title: "Go Production: On-chain, GPU, and Network Connect" | pageType: [no pageType]]
│           └── tutorial-offchain-transcoding-test.mdx  [title: "Your First Gateway: Off-chain Transcoding Test" | pageType: [no pageType]]
├── quickstart/
│   ├── AI-prompt.mdx  [title: "Get AI to Setup the Gateway" | pageType: quickstart]
│   ├── gateway-setup.mdx  [title: "Run a Gateway: Quickstart Guide" | pageType: quickstart]
│   ├── components/
│   │   (empty — no .mdx files)
│   ├── data/
│   │   (empty — no .mdx files)
│   ├── groups/
│   │   ├── docker/
│   │   │   └── dockerSupport.mdx  [title: "Docker Support" | pageType: [no pageType]]
│   │   └── linux/
│   │       ├── linuxSupport.mdx  [title: "Linux Supported Distributions & Information" | pageType: [no pageType]]
│   │       └── macSupport.mdx  [title: "MacOS Support" | pageType: [no pageType]]
│   └── views/
│       ├── docker/
│       │   ├── dockerOffChainTab.mdx  [title: "Docker Off-Chain Gateway Quickstart TAB VIEW" | pageType: [no pageType]]
│       │   └── dockerOnChainTab.mdx  [title: "Docker On-Chain Gateway Quickstart TAB VIEW" | pageType: [no pageType]]
│       ├── linux/
│       │   ├── linuxOffChainTab.mdx  [title: "Linu/MacOS Off-Chain Gateway Quickstart TAB VIEW" | pageType: [no pageType]]
│       │   └── linuxOnChainTab.mdx  [title: "Linu/MacOS Off-Chain Gateway Quickstart TAB VIEW" | pageType: [no pageType]]
│       └── windows/
│           ├── windowsOffChainTab.mdx  [title: "Windows Off-Chain Gateway Quickstart TAB VIEW" | pageType: [no pageType]]
│           └── windowsOnChainTab.mdx  [title: "Windows On-Chain Gateway Quickstart TAB VIEW" | pageType: [no pageType]]
├── resources/
│   ├── faq.mdx  [title: "Gateway FAQ" | pageType: faq]
│   ├── glossary.mdx  [title: "Gateway Terminology Glossary" | pageType: reference]
│   ├── compendium/
│   │   └── glossary.mdx  [title: "Gateway Glossary" | pageType: reference]
│   ├── go-livepeer/
│   │   ├── bandwidth-requirements.mdx  [title: "Bandwidth Requirements" | pageType: guide]
│   │   ├── cli-reference.mdx  [title: "CLI Reference" | pageType: guide]
│   │   ├── gpu-support.mdx  [title: "GPU Support" | pageType: guide]
│   │   ├── hardware-requirements.mdx  [title: "Hardware Requirements" | pageType: reference]
│   │   └── prometheus-metrics.mdx  [title: "Prometheus Metrics" | pageType: reference]
│   ├── knowledge-base/
│   │   ├── guides.mdx  [title: "Gateway guides" | pageType: landing]
│   │   ├── help.mdx  [title: "Gateway help" | pageType: guide]
│   │   ├── resources-master-list.mdx  [title: "Gateway guides and resources — master list" | pageType: [no pageType]]
│   │   └── resources.mdx  [title: "Gateway resources" | pageType: landing]
│   └── technical/
│       ├── arbitrum-exchanges.mdx  [title: "Arbitrum Exchange Reference" | pageType: reference]
│       ├── arbitrum-rpc.mdx  [title: "Arbitrum RPCs" | pageType: reference]
│       ├── cli-commands.mdx  [title: "Gateway CLI Commands" | pageType: reference]
│       ├── configuration-flags.mdx  [title: "Gateway Configuration Flags" | pageType: reference]
│       ├── contract-addresses.mdx  [title: "Contract Addresses" | pageType: reference]
│       ├── dep-contract-addresses.mdx  [title: "Contract Addresses" | pageType: reference]
│       ├── dep-new-contract-addresses.mdx  [title: "Contract Addresses" | pageType: reference]
│       ├── livepeer-exchanges.mdx  [title: "Livepeer Exchanges" | pageType: reference]
│       ├── new-contract-addresses.mdx  [title: "Contract Addresses" | pageType: reference]
│       ├── orchestrator-offerings.mdx  [title: "Orchestrator Offerings Reference" | pageType: [no pageType]]
│       ├── technical-architecture.mdx  [title: "Technical Architecture" | pageType: reference]
│       ├── api-reference/
│       │   ├── _delete-all-api.mdx  [title: "AI Worker API" | pageType: reference]
│       │   ├── ai-worker-api.mdx  [title: "AI API" | pageType: reference]
│       │   ├── hardware-info.mdx  [title: [no title] | pageType: reference]
│       │   ├── hardware-stats.mdx  [title: [no title] | pageType: reference]
│       │   ├── health.mdx  [title: [no title] | pageType: reference]
│       │   ├── AI-API/
│       │   │   ├── ai.mdx  [title: "AI API Portal" | pageType: reference]
│       │   │   ├── audio-to-text.mdx  [title: "Audio to Text" | pageType: reference]
│       │   │   ├── hardware-info.mdx  [title: "Info" | pageType: reference]
│       │   │   ├── hardware-stats.mdx  [title: "Stats" | pageType: reference]
│       │   │   ├── health.mdx  [title: "Health" | pageType: reference]
│       │   │   ├── image-to-image.mdx  [title: "Image to Image" | pageType: reference]
│       │   │   ├── image-to-text.mdx  [title: "Image to Text" | pageType: reference]
│       │   │   ├── image-to-video.mdx  [title: "Image to Video" | pageType: reference]
│       │   │   ├── live-video-to-video.mdx  [title: "Live Video to Video" | pageType: reference]
│       │   │   ├── llm.mdx  [title: "LLM" | pageType: reference]
│       │   │   ├── segment-anything-2.mdx  [title: "Segment Anything 2" | pageType: reference]
│       │   │   ├── text-to-image.mdx  [title: "Text to Image" | pageType: reference]
│       │   │   ├── text-to-speech.mdx  [title: "Text to Speech" | pageType: reference]
│       │   │   └── upscale.mdx  [title: "Upscale" | pageType: reference]
│       │   ├── AI-Worker/
│       │   │   └── ai-worker-api.mdx  [title: "AI API" | pageType: reference]
│       │   └── CLI-HTTP/
│       │       ├── activateorchestrator.mdx  [title: "Activate Orchestrator" | pageType: reference]
│       │       ├── bond.mdx  [title: [no title] | pageType: reference]
│       │       ├── cli-http-api.mdx  [title: "CLI HTTP API API Portal" | pageType: reference]
│       │       ├── protocolparameters.mdx  [title: [no title] | pageType: reference]
│       │       ├── rebond.mdx  [title: "Rebond" | pageType: reference]
│       │       ├── registeredorchestrators.mdx  [title: [no title] | pageType: reference]
│       │       ├── reward.mdx  [title: "Reward" | pageType: reference]
│       │       ├── setbroadcastconfig.mdx  [title: "Set Broadcast Config" | pageType: reference]
│       │       ├── setmaxpriceforcapability.mdx  [title: "Set Max Price For Capability" | pageType: reference]
│       │       ├── signmessage.mdx  [title: "Sign Message" | pageType: reference]
│       │       ├── status.mdx  [title: [no title] | pageType: reference]
│       │       ├── transfertokens.mdx  [title: "Transfer Tokens" | pageType: reference]
│       │       └── unbond.mdx  [title: "Unbond" | pageType: reference]
│       └── go-livepeer/
│           ├── cli-reference.mdx  [title: "CLI Reference" | pageType: [no pageType]]
│           ├── gpu-support.mdx  [title: "GPU Support" | pageType: [no pageType]]
│           ├── hardware-requirements.mdx  [title: "Hardware Requirements" | pageType: [no pageType]]
│           └── prometheus-metrics.mdx  [title: "Prometheus Metrics" | pageType: [no pageType]]
└── setup/
    ├── run-a-gateway.mdx  [title: "Run a Gateway" | pageType: guide]
    ├── transcoding.mdx  [title: "Gateway Transcoding Guide" | pageType: guide]
    ├── configure/
    │   ├── ai-configuration.mdx  [title: "AI Configuration" | pageType: guide]
    │   ├── configuration-overview.mdx  [title: "Configuration Overview" | pageType: guide]
    │   ├── configuration-reference.mdx  [title: "Configuration Reference" | pageType: [no pageType]]
    │   ├── dual-configuration.mdx  [title: "Configure AI & Video Dual Gateway Services" | pageType: guide]
    │   ├── dual-docker.mdx  [title: "Dual Docker Configuration" | pageType: [no pageType]]
    │   ├── pricing-configuration.mdx  [title: "Pricing Configuration" | pageType: guide]
    │   ├── video-configuration-view.mdx  [title: "Video Configuration" | pageType: [no pageType]]
    │   └── video-configuration.mdx  [title: "Video Configuration" | pageType: guide]
    ├── connect/
    │   ├── connect-with-offerings.mdx  [title: "Discover & Connect Marketplace Compute Services" | pageType: guide]
    │   ├── discover-offerings.mdx  [title: "Discover Marketplace Offerings" | pageType: guide]
    │   └── lp-marketplace.mdx  [title: "Livepeer Marketplace Overview" | pageType: guide]
    ├── install/
    │   ├── community-projects.mdx  [title: "Easy Install [DevOps & Community Projects]" | pageType: guide]
    │   ├── docker-install.mdx  [title: "Docker Install" | pageType: guide]
    │   ├── install-overview.mdx  [title: "Installation Overview" | pageType: guide]
    │   ├── linux-install.mdx  [title: "Linux Install" | pageType: guide]
    │   └── windows-install.mdx  [title: "Windows Install" | pageType: guide]
    ├── monitor/
    │   └── monitor-and-optimise.mdx  [title: "Monitor & Optimise Gateway Services" | pageType: guide]
    ├── publish/
    │   └── connect-with-offerings.mdx  [title: "Discover & Connect Marketplace Compute Services" | pageType: [no pageType]]
    ├── requirements/
    │   ├── setup.mdx  [title: "Gateway Node Requirements" | pageType: guide]
    │   └── on-chain setup/
    │       ├── bridge-lpt-to-arbitrum.mdx  [title: "Bridge LPT to Arbitrum" | pageType: [no pageType]]
    │       ├── fund-gateway.mdx  [title: "Fund The Livepeer Gateway" | pageType: guide]
    │       └── on-chain.mdx  [title: "On-Chain Setup Requirements" | pageType: guide]
    └── v1/
        └── transcoding-options.mdx  [title: "Configure Transcoding Options" | pageType: [no pageType]]
```

---

## Section 2 — Navigation Tree (docs.json — Gateways section)

Located at: `navigation.versions[1].languages[0].tabs[4]`

```
tab: Gateways  (icon: torii-gate)
└── anchor: Gateways NEW  (icon: torii-gate)
    ├── group: Home  (icon: graduation-cap)
    │   ├── v2/gateways/portal
    │   ├── v2/gateways/navigator
    │   └── docs-guide/tooling/reference-maps/icon-map  [outside v2/gateways/]
    ├── group: Concepts  (icon: graduation-cap)
    │   ├── v2/gateways/concepts/role
    │   ├── v2/gateways/concepts/capabilities
    │   ├── v2/gateways/concepts/architecture
    │   └── v2/gateways/concepts/business-model
    ├── group: Quickstart ⚡  (icon: /snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg)
    │   ├── v2/gateways/quickstart/gateway-setup
    │   ├── v2/gateways/guides/tutorials/byoc-cpu-tutorial
    │   └── v2/gateways/quickstart/AI-prompt
    ├── group: Run A Gateway  (icon: sign-posts-wrench)
    │   └── group: Gateway Setup Guide  (expanded: true)
    │       ├── v2/gateways/setup/run-a-gateway
    │       ├── v2/gateways/setup/transcoding
    │       ├── group: Setup Checklist
    │       │   ├── v2/gateways/setup/requirements/setup
    │       │   ├── v2/gateways/setup/requirements/on-chain setup/on-chain
    │       │   └── v2/gateways/setup/requirements/on-chain setup/fund-gateway
    │       ├── group: Installation
    │       │   ├── v2/gateways/setup/install/install-overview
    │       │   ├── v2/gateways/setup/install/docker-install
    │       │   ├── v2/gateways/setup/install/linux-install
    │       │   ├── v2/gateways/setup/install/windows-install
    │       │   └── v2/gateways/setup/install/community-projects
    │       ├── group: Configuration
    │       │   ├── v2/gateways/setup/configure/configuration-overview
    │       │   ├── v2/gateways/setup/configure/video-configuration
    │       │   ├── v2/gateways/setup/configure/ai-configuration
    │       │   ├── v2/gateways/setup/configure/dual-configuration
    │       │   └── v2/gateways/setup/configure/pricing-configuration
    │       ├── group: End-to-End Tutorial
    │       │   ├── v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test
    │       │   ├── v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline
    │       │   └── v2/gateways/guides/tutorials/tutorial-3-go-production
    │       ├── group: Network Connect  (tag: Go Live!)
    │       │   ├── v2/gateways/setup/connect/lp-marketplace
    │       │   ├── v2/gateways/setup/connect/discover-offerings
    │       │   └── v2/gateways/setup/connect/connect-with-offerings
    │       └── group: Monitor & Optimise
    │           └── v2/gateways/setup/monitor/monitor-and-optimise
    ├── group: Guides  (icon: map)
    │   ├── group: Operator Considerations
    │   │   ├── v2/gateways/guides/operator-considerations/business-case
    │   │   └── v2/gateways/guides/operator-considerations/production-gateways
    │   ├── group: Deployment Options
    │   │   ├── v2/gateways/guides/deployment-details/setup-options
    │   │   └── v2/gateways/guides/deployment-details/setup-requirements
    │   ├── group: AI and Job Pipelines
    │   │   ├── v2/gateways/guides/node-pipelines/guide
    │   │   ├── v2/gateways/guides/node-pipelines/video-pipelines
    │   │   ├── v2/gateways/guides/node-pipelines/ai-pipelines
    │   │   ├── v2/gateways/guides/node-pipelines/byoc-pipelines
    │   │   └── v2/gateways/guides/node-pipelines/pipeline-configuration
    │   ├── group: Payments and Pricing
    │   │   ├── v2/gateways/guides/payments-and-pricing/payment-guide
    │   │   ├── v2/gateways/guides/payments-and-pricing/funding-guide
    │   │   ├── v2/gateways/guides/payments-and-pricing/pricing-strategy
    │   │   ├── v2/gateways/guides/payments-and-pricing/remote-signers
    │   │   └── v2/gateways/guides/payments-and-pricing/clearinghouse-guide
    │   ├── group: Monitoring and Tooling
    │   │   ├── v2/gateways/guides/monitoring-and-tooling/health-checks
    │   │   ├── v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards
    │   │   ├── v2/gateways/guides/monitoring-and-tooling/monitoring-setup
    │   │   ├── v2/gateways/guides/monitoring-and-tooling/on-chain-metrics
    │   │   └── v2/gateways/guides/monitoring-and-tooling/troubleshooting
    │   ├── group: Advanced Operations
    │   │   ├── v2/gateways/guides/advanced-operations/orchestrator-selection
    │   │   ├── v2/gateways/guides/advanced-operations/scaling
    │   │   ├── v2/gateways/guides/advanced-operations/gateway-middleware
    │   │   └── v2/gateways/guides/advanced-operations/gateway-discoverability
    │   ├── group: Roadmap and Funding
    │   │   ├── v2/gateways/guides/roadmap-and-funding/operator-support
    │   │   ├── v2/gateways/guides/roadmap-and-funding/spe-grant-model
    │   │   ├── v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy
    │   │   └── v2/gateways/guides/roadmap-and-funding/gateway-showcase
    │   └── group: Tutorial: Zero-to-Hero
    │       ├── v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test  [duplicate of Run A Gateway > End-to-End Tutorial]
    │       ├── v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline  [duplicate]
    │       └── v2/gateways/guides/tutorials/tutorial-3-go-production  [duplicate]
    └── group: Resources  (icon: code)
        ├── v2/gateways/resources/faq
        ├── v2/gateways/resources/glossary
        ├── group: Technical Reference
        │   ├── v2/gateways/resources/technical/technical-architecture
        │   ├── v2/gateways/resources/technical/configuration-flags
        │   ├── v2/gateways/resources/technical/contract-addresses
        │   ├── v2/gateways/resources/technical/cli-commands
        │   ├── group: AI API
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/ai
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/text-to-image
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/image-to-image
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/image-to-video
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/upscale
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/audio-to-text
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/segment-anything-2
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/llm
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/image-to-text
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/live-video-to-video
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/text-to-speech
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/health
        │   │   ├── v2/gateways/resources/technical/api-reference/AI-API/hardware-info
        │   │   └── v2/gateways/resources/technical/api-reference/AI-API/hardware-stats
        │   ├── group: CLI HTTP API
        │   │   ├── v2/gateways/resources/technical/api-reference/CLI-HTTP/cli-http-api
        │   │   ├── v2/gateways/resources/technical/api-reference/CLI-HTTP/unbond
        │   │   ├── v2/gateways/resources/technical/api-reference/CLI-HTTP/rebond
        │   │   ├── v2/gateways/resources/technical/api-reference/CLI-HTTP/activateorchestrator
        │   │   ├── v2/gateways/resources/technical/api-reference/CLI-HTTP/setbroadcastconfig
        │   │   ├── v2/gateways/resources/technical/api-reference/CLI-HTTP/setmaxpriceforcapability
        │   │   ├── v2/gateways/resources/technical/api-reference/CLI-HTTP/reward
        │   │   ├── v2/gateways/resources/technical/api-reference/CLI-HTTP/transfertokens
        │   │   └── v2/gateways/resources/technical/api-reference/CLI-HTTP/signmessage
        │   └── group: Exchanges & RPCs
        │       ├── v2/gateways/resources/technical/livepeer-exchanges
        │       ├── v2/gateways/resources/technical/arbitrum-exchanges
        │       └── v2/gateways/resources/technical/arbitrum-rpc
        ├── group: go-livepeer Reference
        │   ├── v2/gateways/resources/go-livepeer/bandwidth-requirements
        │   ├── v2/gateways/resources/go-livepeer/hardware-requirements
        │   ├── v2/gateways/resources/go-livepeer/gpu-support
        │   ├── v2/gateways/resources/go-livepeer/cli-reference
        │   └── v2/gateways/resources/go-livepeer/prometheus-metrics
        ├── group: More Resources
        │   ├── v2/gateways/resources/knowledge-base/guides
        │   ├── v2/gateways/resources/knowledge-base/resources
        │   └── v2/gateways/resources/knowledge-base/help
        └── group: Compendium
            └── v2/gateways/resources/compendium/glossary
```

---

## Section 3 — Discrepancy Notes

### Files in v2/gateways/ NOT in docs.json (orphans)

All 209 orphaned files are in `x-resources/`, `x-deprecated/`, `stubs/`, or are otherwise inactive. Active-path orphans (in no `x-` or `stubs` folder) listed separately below.

**Active-path orphans** (files outside `x-`/`stubs`/`x-deprecated` that have no nav entry):

- `v2/gateways/index`  *(index.mdx — root index file)*
- `v2/gateways/guides/advanced-operations/dep-production-hardening`
- `v2/gateways/guides/node-pipelines/dep-ai-inference`
- `v2/gateways/guides/payments-and-pricing/dep-payment-guide`
- `v2/gateways/quickstart/groups/docker/dockerSupport`
- `v2/gateways/quickstart/groups/linux/linuxSupport`
- `v2/gateways/quickstart/groups/linux/macSupport`
- `v2/gateways/quickstart/views/docker/dockerOffChainTab`
- `v2/gateways/quickstart/views/docker/dockerOnChainTab`
- `v2/gateways/quickstart/views/linux/linuxOffChainTab`
- `v2/gateways/quickstart/views/linux/linuxOnChainTab`
- `v2/gateways/quickstart/views/windows/windowsOffChainTab`
- `v2/gateways/quickstart/views/windows/windowsOnChainTab`
- `v2/gateways/guides/tutorials/tutorials-resources`
- `v2/gateways/resources/knowledge-base/resources-master-list`
- `v2/gateways/resources/technical/orchestrator-offerings`
- `v2/gateways/resources/technical/dep-contract-addresses`
- `v2/gateways/resources/technical/dep-new-contract-addresses`
- `v2/gateways/resources/technical/new-contract-addresses`
- `v2/gateways/resources/technical/go-livepeer/cli-reference`
- `v2/gateways/resources/technical/go-livepeer/gpu-support`
- `v2/gateways/resources/technical/go-livepeer/hardware-requirements`
- `v2/gateways/resources/technical/go-livepeer/prometheus-metrics`
- `v2/gateways/resources/technical/api-reference/_delete-all-api`
- `v2/gateways/resources/technical/api-reference/ai-worker-api`
- `v2/gateways/resources/technical/api-reference/hardware-info`
- `v2/gateways/resources/technical/api-reference/hardware-stats`
- `v2/gateways/resources/technical/api-reference/health`
- `v2/gateways/resources/technical/api-reference/AI-Worker/ai-worker-api`
- `v2/gateways/resources/technical/api-reference/CLI-HTTP/bond`
- `v2/gateways/resources/technical/api-reference/CLI-HTTP/protocolparameters`
- `v2/gateways/resources/technical/api-reference/CLI-HTTP/registeredorchestrators`
- `v2/gateways/resources/technical/api-reference/CLI-HTTP/status`
- `v2/gateways/setup/configure/configuration-reference`
- `v2/gateways/setup/configure/dual-docker`
- `v2/gateways/setup/configure/video-configuration-view`
- `v2/gateways/setup/publish/connect-with-offerings`
- `v2/gateways/setup/requirements/on-chain setup/bridge-lpt-to-arbitrum`
- `v2/gateways/setup/v1/transcoding-options`

**Inactive-path orphans** (`x-resources/`, `x-deprecated/`, `stubs/` — all 170):

All files under the following paths are unregistered in nav by design:
- `guides/*/x-resources/` (all subdirectories)
- `guides/*/x-deprecated/` (all subdirectories)
- `guides/tutorials/stubs/`
- `resources/technical/go-livepeer/` *(shadow copies of resources/go-livepeer/)*

### Paths in docs.json with no matching file (missing/stubs)

None. All 102 `v2/gateways/` paths referenced in docs.json have matching `.mdx` files on disk.

Note: `docs-guide/tooling/reference-maps/icon-map` is referenced in the Gateways nav Home group but lives outside `v2/gateways/` and is not assessed here.

### Files with no pageType frontmatter

Scope: active files only (not in `x-resources/`, `x-deprecated/`, `stubs/`).

- `quickstart/groups/docker/dockerSupport.mdx`
- `quickstart/groups/linux/linuxSupport.mdx`
- `quickstart/groups/linux/macSupport.mdx`
- `quickstart/views/docker/dockerOffChainTab.mdx`
- `quickstart/views/docker/dockerOnChainTab.mdx`
- `quickstart/views/linux/linuxOffChainTab.mdx`
- `quickstart/views/linux/linuxOnChainTab.mdx`
- `quickstart/views/windows/windowsOffChainTab.mdx`
- `quickstart/views/windows/windowsOnChainTab.mdx`
- `resources/knowledge-base/resources-master-list.mdx`
- `resources/technical/orchestrator-offerings.mdx`
- `resources/technical/go-livepeer/cli-reference.mdx`
- `resources/technical/go-livepeer/gpu-support.mdx`
- `resources/technical/go-livepeer/hardware-requirements.mdx`
- `resources/technical/go-livepeer/prometheus-metrics.mdx`
- `setup/configure/configuration-reference.mdx`
- `setup/configure/dual-docker.mdx`
- `setup/configure/video-configuration-view.mdx`
- `setup/publish/connect-with-offerings.mdx`
- `setup/requirements/on-chain setup/bridge-lpt-to-arbitrum.mdx`
- `setup/v1/transcoding-options.mdx`
