# Docs Quality and Freshness Audit

- Generated: 2026-03-16T05:36:37.783Z
- Scope: changed
- Stage ID: docs-quality-and-freshness-audit
- Files analyzed: 22

## Severity Summary

- Critical: 0
- High: 0
- Medium: 37
- Low: 2
- Info: 0
- Total: 39

## Issues

| Severity | Title | Path | Evidence | Recommendation |
|---|---|---|---|---|
| low | Docs usefulness metadata not found | tasks/reports/quality-accessibility/docs-usefulness/latest/run-metadata.json | No usefulness metadata snapshot found for cross-check. | Run `node tools/scripts/audit-v2-usefulness.js --mode full` for a fresh baseline. |
| medium | TODO marker detected | v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/advanced-operations/pool-operators.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/advanced-operations/pool-operators.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/advanced-operations/scale-operations.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx | `{/* TODO: Human to add an LLM runner architecture diagram or approved media asset for this section. */}` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx | - Media placeholders added as TODO comments where screenshots would help | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/operator-considerations/operator-impact.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/operator-considerations/requirements.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/roadmap-and-funding/funding-and-support.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| low | Thin content page detected | v2/orchestrators/guides/roadmap-and-funding/orchestrator-profiles.mdx | Estimated content length is 116 words. | Expand page scope with prerequisites, actionable steps, and troubleshooting context. |
| medium | TODO marker detected | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/staking-and-rewards/earning-model.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/staking-and-rewards/network-participation.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/staking-and-rewards/network-participation.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | `{/* TODO:` | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
| medium | TODO marker detected | v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx | - Placeholders for Media and Video Resources are in comments with a TODO for a human | Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths. |
