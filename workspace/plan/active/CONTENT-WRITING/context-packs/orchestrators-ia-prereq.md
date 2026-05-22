# Orchestrators IA Pre-Requisite Reference

Generated: 2026-03-23

---

## Section 1 — Folder & File Tree (v2/orchestrators/)

Files inside `_workspace/` are working/draft files and are excluded from the live tree below. All live `.mdx` files are listed. Subdirectories containing only `x-deprecated/` material are noted inline.

```
v2/orchestrators/
├── index.mdx  [title: "Orchestrators Index" | pageType: overview]
├── navigator.mdx  [title: "Find Your Path" | pageType: no pageType]
├── portal.mdx  [title: "Orchestrator Portal" | pageType: landing]
│
├── _workspace/  (working/draft files — not part of live docs)
│   ├── drafts/
│   │   └── Orchestrators_new/
│   │       ├── 01 faq-draft.mdx
│   │       └── 04-orch-config-draft.mdx
│   ├── plans/
│   │   ├── dep-IA.mdx
│   │   ├── dep-personas-and-pages.mdx
│   │   ├── dep-rc-navigator.mdx
│   │   ├── quickstart-setup-writing-pack/
│   │   │   ├── current-pages/
│   │   │   │   ├── quickstart-AI-prompt-start.mdx
│   │   │   │   ├── quickstart-guide.mdx
│   │   │   │   ├── quickstart-video-transcoding.mdx
│   │   │   │   ├── setup-configure.mdx
│   │   │   │   ├── setup-connect.mdx
│   │   │   │   ├── setup-guide.mdx
│   │   │   │   ├── setup-install.mdx
│   │   │   │   ├── setup-monitor.mdx
│   │   │   │   ├── setup-requirements-NEW.mdx
│   │   │   │   ├── setup-requirements.mdx
│   │   │   │   └── setup-test.mdx
│   │   │   ├── gateway-reference/
│   │   │   │   └── gateway-setup.mdx
│   │   │   ├── reference/
│   │   │   │   └── glossary.mdx
│   │   │   ├── stubs/
│   │   │   │   ├── quickstart-guide.mdx
│   │   │   │   ├── quickstart-video-transcoding.mdx
│   │   │   │   ├── setup-configure.mdx
│   │   │   │   ├── setup-connect.mdx
│   │   │   │   ├── setup-guide.mdx
│   │   │   │   ├── setup-install.mdx
│   │   │   │   └── setup-test.mdx
│   │   │   └── v1-sources/
│   │   │       ├── assess-capabilities.mdx
│   │   │       ├── benchmark-transcoding.mdx
│   │   │       ├── configure-reward-calling.mdx
│   │   │       ├── gateway-introspection.mdx
│   │   │       ├── monitor-metrics.mdx
│   │   │       ├── o-t-split.mdx
│   │   │       ├── set-pricing.mdx
│   │   │       ├── set-session-limits.mdx
│   │   │       ├── troubleshoot.mdx
│   │   │       ├── vote.mdx
│   │   │       └── yield-calculation.mdx
│   │   └── tutorial-writing-pack/
│   │       ├── reference/
│   │       │   └── glossary.mdx
│   │       ├── source-pages/
│   │       │   ├── ai-inference-operations.mdx
│   │       │   ├── byoc-cpu-tutorial.mdx
│   │       │   ├── diffusion-pipeline-setup.mdx
│   │       │   ├── dual-mode-configuration.mdx
│   │       │   ├── gateway-orchestrator-interface.mdx
│   │       │   ├── gateway-setup.mdx
│   │       │   ├── model-demand-reference.mdx
│   │       │   ├── model-hosting.mdx
│   │       │   ├── realtime-ai-setup.mdx
│   │       │   ├── setup-configure.mdx
│   │       │   ├── setup-connect-activate.mdx
│   │       │   ├── setup-guide.mdx
│   │       │   ├── setup-install.mdx
│   │       │   └── setup-test.mdx
│   │       └── stubs/
│   │           ├── add-ai-to-video-node.mdx
│   │           ├── ai-earning-quickstart.mdx
│   │           ├── byoc-cpu-smoke-test.mdx
│   │           ├── full-ai-pipeline-tutorial.mdx
│   │           ├── realtime-ai-tutorial.mdx
│   │           └── zero-to-first-reward.mdx
│   └── x-archived/
│       ├── dep-ai-workloads/
│       │   ├── p-ai-models.mdx
│       │   ├── p-models-and-vram.mdx
│       │   ├── p-realtime-vs-batch.mdx
│       │   ├── r-hosting-models.mdx
│       │   ├── rc-ai-pipelines.mdx
│       │   ├── x-ai.mdx
│       │   ├── x-batch-ai.mdx
│       │   └── x-realtime-ai.mdx
│       ├── dep-delegates-voting-pools/
│       │   ├── r-run-a-pool.mdx
│       │   ├── rcs-delegates.mdx
│       │   └── x-governance.mdx
│       ├── dep-integrations-other/
│       │   ├── p-fleet-ops.mdx
│       │   └── p-gateways.mdx
│       ├── dep-setups-and-workloads/
│       │   ├── rc-alternate-setups.mdx
│       │   ├── rs-workloads.mdx
│       │   └── x-running-workloads.mdx
│       │   └── x-siphon-setup.mdx
│       ├── dep-staking-and-rewards/
│       │   ├── earnings.mdx
│       │   ├── rcs-staking-lpt.mdx
│       │   └── rs-rewards-and-fees.mdx
│       ├── dep-tooling-and-monitoring/
│       │   ├── p-smoke-test.mdx
│       │   ├── rcs-tooling.mdx
│       │   ├── x-explorer.mdx
│       │   ├── x-optimise.mdx
│       │   └── x-troubleshooting.mdx
│       └── unclassified/
│           ├── dep-connect-to-arbitrum.mdx
│           ├── dep-orchestrator-functions.mdx
│           ├── dep-quickstart-add-your-gpu-to-livepeer.mdx
│           ├── dep-rcs-06-add-ai-to-node-output.mdx
│           ├── p-feasibility.mdx
│           ├── rcs-connect-activate-publish.mdx
│           └── rcs-requirements.mdx
│       └── v1/
│           ├── assess-capabilities.mdx
│           ├── benchmark-transcoding.mdx
│           ├── configure-reward-calling.mdx
│           ├── gateway-introspection.mdx
│           ├── monitor-metrics.mdx
│           ├── o-t-split.mdx
│           ├── set-pricing.mdx
│           ├── set-session-limits.mdx
│           ├── troubleshoot.mdx
│           ├── vote.mdx
│           └── yield-calculation.mdx
│
├── concepts/
│   ├── architecture.mdx  [title: "Orchestrator Architecture" | pageType: no pageType]
│   ├── capabilities.mdx  [title: "Orchestrator Capabilities" | pageType: no pageType]
│   ├── incentive-model.mdx  [title: "Orchestrator Incentive Model" | pageType: no pageType]
│   ├── role.mdx  [title: "The Orchestrator Role in the Livepeer Network" | pageType: no pageType]
│   ├── composable/
│   │   └── orchestratorRole.mdx  [title: "Orchestrator Role Diagram" | pageType: no pageType]
│   └── x-deprecated/
│       ├── dep-architecture.mdx  [title: "Orchestrator Architecture" | pageType: concept]
│       ├── dep-capabilities.mdx  [title: "Orchestrator Capabilities" | pageType: concept]
│       ├── dep-incentive-model.mdx  [title: "Orchestrator Economics and Incentives" | pageType: concept]
│       ├── dep-role.mdx  [title: "The Orchestrator Role in the Livepeer Network" | pageType: overview]
│       ├── dep-workloads.mdx  [title: "Orchestrator Core Services and Workloads" | pageType: concept]
│       └── rs-workloads.mdx  [title: "Job Types" | pageType: concept]
│
├── guides/
│   ├── advanced-operations/
│   │   ├── dep-guide.mdx  [title: "Advanced Operations Guide" | pageType: overview]
│   │   ├── gateway-orchestrator-interface.mdx  [title: "Gateway and Orchestrator Interface" | pageType: how_to]
│   │   ├── gateway-relationships.mdx  [title: "Gateway Relationships" | pageType: concept]
│   │   ├── pool-operators.mdx  [title: "Pool Operators" | pageType: guide]
│   │   └── scale-operations.mdx  [title: "Scale Operations" | pageType: concept]
│   ├── ai-and-job-workloads/
│   │   ├── ai-inference-operations.mdx  [title: "AI Inference Operations" | pageType: concept]
│   │   ├── audio-and-vision-pipelines.mdx  [title: "Audio and Vision Pipelines" | pageType: how_to]
│   │   ├── diffusion-pipeline-setup.mdx  [title: "Diffusion Pipeline Setup" | pageType: guide]
│   │   ├── llm-pipeline-setup.mdx  [title: "LLM Pipeline Setup" | pageType: how_to]
│   │   ├── model-demand-reference.mdx  [title: "Model and Demand Reference" | pageType: reference]
│   │   ├── model-hosting.mdx  [title: "Model Hosting" | pageType: how_to]
│   │   ├── realtime-ai-setup.mdx  [title: "Cascade Setup" | pageType: guide]
│   │   ├── video-transcoding-operations.mdx  [title: "Video Transcoding Operations" | pageType: guide]
│   │   └── workload-options.mdx  [title: "Workload Options" | pageType: concept]
│   ├── config-and-optimisation/
│   │   ├── ai-model-management.mdx  [title: "AI Model Management" | pageType: how_to]
│   │   ├── capacity-planning.mdx  [title: "Capacity Planning" | pageType: how_to]
│   │   ├── pricing-strategy.mdx  [title: "Pricing Strategy" | pageType: how_to]
│   │   └── reward-call-tuning.mdx  [title: "Reward Call Tuning" | pageType: how_to]
│   ├── deployment-details/
│   │   ├── reports-audits/  (contains setup-sources.md, notes.md, review.md — no .mdx files)
│   │   ├── dual-mode-configuration.mdx  [title: "Dual Mode Configuration" | pageType: how_to]
│   │   ├── join-a-pool.mdx  [title: "Join a Pool" | pageType: quickstart]
│   │   ├── new-join-a-pool.mdx  [title: "Join a Pool" | pageType: guide]
│   │   ├── orchestrator-transcoder-setup.mdx  [title: "Orchestrator-Transcoder Split Setup" | pageType: guide]
│   │   ├── setup-options.mdx  [title: "Setup Options" | pageType: overview]
│   │   ├── siphon-setup.mdx  [title: "Siphon Split Setup" | pageType: guide]
│   │   └── x-deprecated/
│   │       ├── benchmarking.mdx  [title: "Benchmarking Your Setup" | pageType: guide]
│   │       ├── dep-2-benchmarking.mdx  [title: "Benchmarking Your Setup" | pageType: guide]
│   │       ├── dep-2-requirements.mdx  [title: "Hardware Requirements" | pageType: reference]
│   │       ├── dep-2-session-limits.mdx  [title: "Session Limits" | pageType: guide]
│   │       ├── dep-3-setup-options.mdx  [title: "Alternate Deployment Options and Setup Paths" | pageType: guide]
│   │       ├── dep-benchmarking.mdx  [title: "Benchmarking Your Setup" | pageType: guide]
│   │       ├── dep-orchestrator-transcoder-setup.mdx  [title: "Split Orchestrator-Transcoder Setup" | pageType: guide]
│   │       ├── dep-requirements.mdx  [title: "GPU and Hardware Reference" | pageType: reference]
│   │       ├── dep-session-limits.mdx  [title: "Bandwidth and Session Limits" | pageType: guide]
│   │       ├── dep-setup-navigator.mdx  [title: "Find Your Orchestrator Path" | pageType: landing]
│   │       ├── dep-setup-options.mdx  [title: "Setup Options to Running an Orchestrator" | pageType: landing]
│   │       ├── dep-siphon-setup.mdx  [title: "Split Setup with OrchestratorSiphon" | pageType: guide]
│   │       ├── dep4-setup-options.mdx  [title: "Setup Options" | pageType: guide]
│   │       └── session-limits.mdx  [title: "Session Limits" | pageType: guide]
│   ├── monitoring-and-tooling/
│   │   ├── explorer-operations.mdx  [title: "Explorer Operations" | pageType: guide]
│   │   ├── metrics-and-alerting.mdx  [title: "Metrics and Alerting" | pageType: guide]
│   │   ├── operator-toolbox.mdx  [title: "Operator Toolbox" | pageType: reference]
│   │   └── troubleshooting.mdx  [title: "Troubleshooting" | pageType: guide]
│   ├── operator-considerations/
│   │   ├── business-case.mdx  [title: "Business Case" | pageType: guide]
│   │   ├── operator-impact.mdx  [title: "Operator Impact" | pageType: guide]
│   │   ├── operator-rationale.mdx  [title: "[no title]" | pageType: [no pageType]]
│   │   ├── requirements.mdx  [title: "Requirements" | pageType: reference]
│   │   └── x-deprecated/
│   │       ├── dep-business-case.mdx  [title: "Business Case" | pageType: guide]
│   │       ├── dep-operator-rationale.mdx  [title: "Operator Rationale" | pageType: concept]
│   │       └── dep-protocol-influence.mdx  [title: "Protocol Influence" | pageType: guide]
│   ├── payments-and-pricing/
│   │   ├── payment-receipts.mdx  [title: "Payment Receipts" | pageType: concept]
│   │   └── payments.mdx  [title: "Payments" | pageType: concept]
│   ├── roadmap-and-funding/
│   │   ├── funding-and-support.mdx  [title: "Funding and Support" | pageType: guide]
│   │   └── orchestrator-profiles.mdx  [title: "Orchestrator Profiles" | pageType: guide]
│   ├── staking-and-rewards/
│   │   ├── delegate-operations.mdx  [title: "Delegate Operations" | pageType: guide]
│   │   ├── earning-model.mdx  [title: "Earning Model" | pageType: concept]
│   │   ├── network-participation.mdx  [title: "Network Participation" | pageType: guide]
│   │   └── reward-mechanics.mdx  [title: "Reward Mechanics" | pageType: guide]
│   └── tutorials/
│       ├── add-ai-to-video-node.mdx  [title: "Add AI to a Video Node" | pageType: tutorial]
│       ├── ai-earning-quickstart.mdx  [title: "AI Earning Quickstart" | pageType: tutorial]
│       ├── byoc-cpu-smoke-test.mdx  [title: "BYOC CPU Smoke Test" | pageType: tutorial]
│       ├── byoc-cpu-tutorial.mdx  [title: "BYOC smoke-test: CPU gateway and orchestrator (off-chain to on-chain)" | pageType: [no pageType]]
│       ├── full-ai-pipeline-tutorial.mdx  [title: "Full AI Pipeline Tutorial" | pageType: tutorial]
│       ├── realtime-ai-tutorial.mdx  [title: "Realtime AI Tutorial" | pageType: tutorial]
│       ├── zero-to-first-reward.mdx  [title: "Zero to First Reward" | pageType: tutorial]
│       ├── gateway-tutorial-composable-pages/
│       │   └── stubs/
│       │       ├── tutorial-byoc-cpu-pipeline.mdx  [title: "Add AI: BYOC CPU Pipeline" | pageType: [no pageType]]
│       │       ├── tutorial-go-production.mdx  [title: "Go Production: On-chain, GPU, and Network Connect" | pageType: [no pageType]]
│       │       └── tutorial-offchain-transcoding-test.mdx  [title: "Your First Gateway: Off-chain Transcoding Test" | pageType: [no pageType]]
│       └── x-deprecated/
│           ├── imported-tutorial-1-byoc-cpu-pipeline.mdx  [title: "Add AI: BYOC CPU pipeline" | pageType: tutorial]
│           ├── imported-tutorial-2-offchain-transcoding-test.mdx  [title: "Your first gateway: off-chain transcoding test" | pageType: tutorial]
│           └── imported-tutorial-3-go-production.mdx  [title: "Go production: on-chain, GPU, and network connect" | pageType: tutorial]
│
├── quickstart/
│   ├── AI-prompt-start.mdx  [title: "Add AI to Your Node" | pageType: guide]
│   ├── dep-x-setup-paths.mdx  [title: "How to Get Started" | pageType: overview]
│   ├── guide.mdx  [title: "Orchestrator Quickstart" | pageType: overview]
│   ├── tutorial.mdx  [title: "Quickstart Tutorial" | pageType: tutorial]
│   └── video-transcoding.mdx  [title: "Quickstart: Verify Your Hardware" | pageType: quickstart]
│
├── resources/
│   ├── arbitrum-exchanges.mdx  [title: "Arbitrum Exchanges" | pageType: reference]
│   ├── arbitrum-rpc.mdx  [title: "Arbitrum RPCs" | pageType: reference]
│   ├── community-guides.mdx  [title: "Community Guides & Tutorials" | pageType: reference]
│   ├── community-pools.mdx  [title: "Community Orchestrator Pools" | pageType: reference]
│   ├── faq.mdx  [title: "FAQ and Troubleshooting" | pageType: reference]
│   ├── glossary.mdx  [title: "Orchestrator Terminology Glossary" | pageType: glossary]
│   ├── gpu-support.mdx  [title: "GPU Support Matrix" | pageType: reference]
│   ├── x-guides.mdx  [title: "Orchestrator Guides" | pageType: reference]
│   ├── x-help.mdx  [title: "X-help" | pageType: landing]
│   ├── x-payments.mdx  [title: "Orchestrator Payments" | pageType: overview]
│   ├── compendium/
│   │   └── glossary.mdx  [title: "Orchestrator Glossary" | pageType: reference]
│   └── technical/
│       ├── cli-flags.mdx  [title: "CLI Flags Reference" | pageType: reference]
│       ├── x-changelog.mdx  [title: "X-changelog" | pageType: landing]
│       ├── x-contract-addresses.mdx  [title: "Livepeer Arbitrum Contract Adresses" | pageType: landing]
│       ├── x-support-status.mdx  [title: "Support Status" | pageType: guide]
│       └── x-troubleshooting.mdx  [title: "Troubleshooting" | pageType: landing]
│
└── setup/
    ├── configure.mdx  [title: "Configure Your Orchestrator" | pageType: how_to]
    ├── connect-and-activate.mdx  [title: "Connect to Arbitrum" | pageType: how_to]
    ├── guide.mdx  [title: "Run an Orchestrator" | pageType: overview]
    ├── r-monitor.mdx  [title: "Set Up Monitoring" | pageType: how_to]
    ├── rcs-requirements.mdx  [title: "Setup Checklist" | pageType: how_to]
    ├── rs-install.mdx  [title: "Install go-livepeer" | pageType: how_to]
    ├── s-guide.mdx  [title: "Setting up an Orchestrator" | pageType: overview]
    ├── test.mdx  [title: "Verify Your Setup" | pageType: how_to]
    ├── x-test.mdx  [title: "Testing Your Orchestrator Setup" | pageType: landing]
    └── x-deprecated/
        ├── dep-activate.mdx  [title: "Activate on the Network" | pageType: how_to]
        ├── dep-config.mdx  [title: "Configure Your Orchestrator" | pageType: guide]
        ├── dep-s-guide.mdx  [title: "Setting up an Orchestrator" | pageType: overview]
        └── r-configure.mdx  [title: "Configuring Your Orchestrator" | pageType: how_to]
```

Note on `concepts/` pageType: The four live concepts files (`architecture.mdx`, `capabilities.mdx`, `incentive-model.mdx`, `role.mdx`) have no `pageType` in frontmatter despite having title values. The `composable/orchestratorRole.mdx` file also has no `pageType`.

---

## Section 2 — Navigation Tree (docs.json — orchestrators section)

Source: `docs.json` → `navigation.versions[version=v2].languages[language=en].tabs[tab=Orchestrators]`

```
[Orchestrators]  (icon: microchip)
  anchor: Orchestrators
    Start Here  (icon: microchip)
      v2/orchestrators/portal
      v2/orchestrators/navigator

    Concepts  (icon: book-open)
      v2/orchestrators/concepts/role
      v2/orchestrators/concepts/capabilities
      v2/orchestrators/concepts/architecture
      v2/orchestrators/concepts/incentive-model

    Quickstart  (icon: bolt)
      v2/orchestrators/quickstart/guide
      v2/orchestrators/quickstart/video-transcoding
      v2/orchestrators/quickstart/tutorial
      v2/orchestrators/quickstart/AI-prompt-start

    Setup  (icon: gear)
      v2/orchestrators/setup/guide
      v2/orchestrators/setup/rcs-requirements
      v2/orchestrators/setup/rs-install
      v2/orchestrators/setup/configure
      v2/orchestrators/setup/connect-and-activate
      v2/orchestrators/setup/test
      v2/orchestrators/setup/r-monitor

    Guides  (icon: chart-line)
      Operator Considerations
        v2/orchestrators/guides/operator-considerations/operator-rationale
        v2/orchestrators/guides/operator-considerations/business-case
        v2/orchestrators/guides/operator-considerations/operator-impact
        v2/orchestrators/guides/operator-considerations/requirements

      Deployment Details
        v2/orchestrators/guides/deployment-details/setup-options
        v2/orchestrators/guides/deployment-details/siphon-setup
        v2/orchestrators/guides/deployment-details/dual-mode-configuration
        v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup
        v2/orchestrators/guides/deployment-details/join-a-pool
        v2/orchestrators/guides/deployment-details/new-join-a-pool

      Workloads and AI
        v2/orchestrators/guides/ai-and-job-workloads/workload-options
        v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations
        v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations
        v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup
        v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup
        v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup
        v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines
        v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference
        v2/orchestrators/guides/ai-and-job-workloads/model-hosting

      Staking and Earning
        v2/orchestrators/guides/staking-and-rewards/earning-model
        v2/orchestrators/guides/staking-and-rewards/reward-mechanics
        v2/orchestrators/guides/payments-and-pricing/payment-receipts
        v2/orchestrators/guides/payments-and-pricing/payments
        v2/orchestrators/guides/staking-and-rewards/delegate-operations
        v2/orchestrators/guides/staking-and-rewards/network-participation

      Config and Optimisation
        v2/orchestrators/guides/config-and-optimisation/pricing-strategy
        v2/orchestrators/guides/config-and-optimisation/capacity-planning
        v2/orchestrators/guides/config-and-optimisation/ai-model-management
        v2/orchestrators/guides/config-and-optimisation/reward-call-tuning

      Monitoring and Tools
        v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox
        v2/orchestrators/guides/monitoring-and-tooling/explorer-operations
        v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting
        v2/orchestrators/guides/monitoring-and-tooling/troubleshooting

      Advanced Operations
        v2/orchestrators/guides/advanced-operations/gateway-relationships
        v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface
        v2/orchestrators/guides/advanced-operations/pool-operators
        v2/orchestrators/guides/advanced-operations/scale-operations

      Roadmap and Funding
        v2/orchestrators/guides/roadmap-and-funding/funding-and-support
        v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles

      Tutorials
        v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test
        v2/orchestrators/guides/tutorials/zero-to-first-reward
        v2/orchestrators/guides/tutorials/ai-earning-quickstart
        v2/orchestrators/guides/tutorials/add-ai-to-video-node
        v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial
        v2/orchestrators/guides/tutorials/realtime-ai-tutorial

    Resources  (icon: books)
      v2/orchestrators/resources/faq
      v2/orchestrators/resources/glossary
      v2/orchestrators/resources/community-guides
      v2/orchestrators/resources/community-pools
      Technical Reference
        v2/orchestrators/resources/technical/cli-flags
        v2/orchestrators/resources/technical/x-contract-addresses
        v2/orchestrators/resources/gpu-support
        v2/orchestrators/resources/arbitrum-rpc
        v2/orchestrators/resources/arbitrum-exchanges
      Compendium
        v2/orchestrators/resources/compendium/glossary
```

---

## Section 3 — Discrepancy Notes

### Files in v2/orchestrators/ NOT in docs.json navigation (orphans)

Live files with no docs.json entry (excluding all `_workspace/`, `x-deprecated/`, `x-archived/` content):

- `v2/orchestrators/index.mdx`
- `v2/orchestrators/concepts/composable/orchestratorRole.mdx`
- `v2/orchestrators/guides/advanced-operations/dep-guide.mdx`
- `v2/orchestrators/guides/deployment-details/reports-audits/` (directory present; contains only `.md` files — no `.mdx` files)
- `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx`
- `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx`
- `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx`
- `v2/orchestrators/quickstart/dep-x-setup-paths.mdx`
- `v2/orchestrators/resources/x-guides.mdx`
- `v2/orchestrators/resources/x-help.mdx`
- `v2/orchestrators/resources/x-payments.mdx`
- `v2/orchestrators/resources/technical/x-changelog.mdx`
- `v2/orchestrators/resources/technical/x-support-status.mdx`
- `v2/orchestrators/resources/technical/x-troubleshooting.mdx`
- `v2/orchestrators/setup/s-guide.mdx`
- `v2/orchestrators/setup/x-test.mdx`

### Paths in docs.json navigation with NO matching file in v2/orchestrators/ (missing files / stubs)

All 57 paths listed in the docs.json Orchestrators navigation have a corresponding `.mdx` file present in `v2/orchestrators/`. No missing files detected.

Note: `v2/orchestrators/resources/technical/x-contract-addresses` is listed in docs.json and the file `v2/orchestrators/resources/technical/x-contract-addresses.mdx` exists on disk.

### Files with no `pageType` in frontmatter (schema gap)

Live files (non-deprecated, non-workspace) missing `pageType`:

- `v2/orchestrators/navigator.mdx`
- `v2/orchestrators/concepts/architecture.mdx`
- `v2/orchestrators/concepts/capabilities.mdx`
- `v2/orchestrators/concepts/composable/orchestratorRole.mdx`
- `v2/orchestrators/concepts/incentive-model.mdx`
- `v2/orchestrators/concepts/role.mdx`
- `v2/orchestrators/guides/operator-considerations/operator-rationale.mdx`  (also missing `title`)
- `v2/orchestrators/guides/tutorials/byoc-cpu-tutorial.mdx`
- `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-byoc-cpu-pipeline.mdx`
- `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-go-production.mdx`
- `v2/orchestrators/guides/tutorials/gateway-tutorial-composable-pages/stubs/tutorial-offchain-transcoding-test.mdx`
