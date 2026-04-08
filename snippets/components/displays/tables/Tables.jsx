'use client'

import { LinkIcon } from '/snippets/components/elements/links/Links.jsx'
import { CopyText } from '/snippets/components/elements/text/Text.jsx'

// ─── Styled Table Primitives ─── //

/**
 * @component StyledTable
 * @category displays
 * @subcategory tables
 * @status stable
 * @description Full-width table with header row styling and rounded container.
  * @aiDiscoverability none
 * @usedIn v2/developers/build/sdk-gateway.mdx, v2/developers/concepts/ai-on-livepeer.mdx, v2/developers/concepts/video-on-livepeer.mdx, v2/developers/get-started/setup-paths.mdx, v2/developers/guides/ai/authentication.mdx, v2/developers/guides/ai/production-checklist.mdx, v2/developers/guides/ai/troubleshooting.mdx, v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx, v2/developers/guides/tutorials/token-gated-video.mdx, v2/developers/guides/video/access-control.mdx, v2/developers/guides/video/monitor-stream-health.mdx, v2/developers/guides/video/playback.mdx, v2/developers/guides/video/webhooks.mdx, v2/developers/navigator.mdx, v2/developers/resources/reference/apis.mdx, v2/developers/resources/reference/pricing-rate-limits.mdx, v2/developers/resources/reference/pytrickle.mdx, v2/developers/resources/reference/sdks.mdx, v2/gateways/concepts/architecture.mdx, v2/gateways/concepts/business-model.mdx, v2/gateways/concepts/capabilities.mdx, v2/gateways/custom/views/setup/configure/dual-configuration-content.mdx, v2/gateways/guides/advanced-operations/gateway-discoverability.mdx, v2/gateways/guides/advanced-operations/gateway-middleware.mdx, v2/gateways/guides/advanced-operations/orchestrator-selection.mdx, v2/gateways/guides/advanced-operations/scaling.mdx, v2/gateways/guides/deployment-details/setup-options.mdx, v2/gateways/guides/deployment-details/setup-requirements.mdx, v2/gateways/guides/monitoring-and-tooling/health-checks.mdx, v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx, v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx, v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx, v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx, v2/gateways/guides/node-pipelines/ai-pipelines.mdx, v2/gateways/guides/node-pipelines/guide.mdx, v2/gateways/guides/node-pipelines/pipeline-configuration.mdx, v2/gateways/guides/node-pipelines/video-pipelines.mdx, v2/gateways/guides/operator-considerations/business-case.mdx, v2/gateways/guides/operator-considerations/production-gateways.mdx, v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx, v2/gateways/guides/payments-and-pricing/funding-guide.mdx, v2/gateways/guides/payments-and-pricing/payment-guide.mdx, v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx, v2/gateways/guides/payments-and-pricing/remote-signers.mdx, v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx, v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx, v2/gateways/guides/roadmap-and-funding/operator-support.mdx, v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx, v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx, v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx, v2/gateways/guides/tutorials/tutorial-3-go-production.mdx, v2/gateways/navigator.mdx, v2/gateways/resources/deployment-terms.mdx, v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx, v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx, v2/gateways/setup/guide.mdx, v2/gateways/setup/monitor.mdx, v2/gateways/setup/monitor/monitoring-setup.mdx, v2/gateways/setup/prepare.mdx, v2/gateways/setup/requirements/setup.mdx, v2/internal/rfp/report.mdx, v2/orchestrators/concepts/architecture.mdx, v2/orchestrators/concepts/capabilities.mdx, v2/orchestrators/concepts/incentive-model.mdx, v2/orchestrators/concepts/role.mdx, v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx, v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx, v2/orchestrators/guides/advanced-operations/pool-operators.mdx, v2/orchestrators/guides/advanced-operations/scale-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx, v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx, v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx, v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx, v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx, v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx, v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx, v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx, v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx, v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx, v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx, v2/orchestrators/guides/deployment-details/setup-options.mdx, v2/orchestrators/guides/deployment-details/siphon-setup.mdx, v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx, v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx, v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx, v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx, v2/orchestrators/guides/operator-considerations/business-case.mdx, v2/orchestrators/guides/operator-considerations/operator-impact.mdx, v2/orchestrators/guides/operator-considerations/operator-rationale.mdx, v2/orchestrators/guides/operator-considerations/requirements.mdx, v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx, v2/orchestrators/guides/payments-and-pricing/payments.mdx, v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx, v2/orchestrators/guides/staking-and-rewards/earning-model.mdx, v2/orchestrators/guides/staking-and-rewards/network-participation.mdx, v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx, v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx, v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx, v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx, v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx, v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx, v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx, v2/orchestrators/navigator.mdx, v2/orchestrators/quickstart/guide.mdx, v2/orchestrators/quickstart/video-transcoding.mdx, v2/orchestrators/resources/knowledge-hub/community-guides.mdx, v2/orchestrators/resources/operator-terms.mdx, v2/orchestrators/resources/reference/arbitrum-exchanges.mdx, v2/orchestrators/resources/reference/arbitrum-rpc.mdx, v2/orchestrators/resources/reference/gpu-support.mdx, v2/orchestrators/resources/reference/technical/cli-flags.mdx, v2/orchestrators/resources/x-guides.mdx, v2/orchestrators/setup/configure.mdx, v2/orchestrators/setup/connect.mdx, v2/orchestrators/setup/verify.mdx
 * @breakingChangeRisk high
 * @lastMeaningfulChange 2026-04-09
 * @param {any} children - children prop.
 * @param {string} [variant="default"] - variant prop.
 * @param {object} [style={}] - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const StyledTable = ({ children, variant = "default", style = {}, className = "", ...rest }) => {
  const wrapperVariants = {
    default: {
      border: "1px solid var(--lp-color-border-default)",
      backgroundColor: "var(--lp-color-bg-card)",
      overflow: "hidden",
    },
    bordered: {
      border: "2px solid var(--lp-color-accent)",
      backgroundColor: "var(--lp-color-bg-page)",
      overflow: "hidden",
    },
    minimal: {
      border: "none",
      backgroundColor: "transparent",
      overflow: "visible",
    },
  };

  return (
    <div
      data-docs-styled-table-shell
      className={className}
      style={{
        width: "100%",
        padding: 0,
        margin: 0,
        ...wrapperVariants[variant],
        ...style,
      }}
      {...rest}
    >
      <table
        data-docs-styled-table
        style={{
          width: "100%",
          // Neutralize browser/Mintlify table spacing so bordered tables sit flush.
          borderCollapse: "collapse",
          borderSpacing: 0,
          margin: 0,
          backgroundColor: "transparent",
        }}
      >
        {children}
      </table>
    </div>
  );
};

/**
 * @component TableRow
 * @category displays
 * @subcategory tables
 * @status stable
 * @description Table row with optional header styling and hover effect.
  * @aiDiscoverability none
 * @usedIn v2/developers/build/sdk-gateway.mdx, v2/developers/concepts/ai-on-livepeer.mdx, v2/developers/concepts/video-on-livepeer.mdx, v2/developers/get-started/setup-paths.mdx, v2/developers/guides/ai/authentication.mdx, v2/developers/guides/ai/production-checklist.mdx, v2/developers/guides/ai/troubleshooting.mdx, v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx, v2/developers/guides/tutorials/token-gated-video.mdx, v2/developers/guides/video/access-control.mdx, v2/developers/guides/video/monitor-stream-health.mdx, v2/developers/guides/video/playback.mdx, v2/developers/guides/video/webhooks.mdx, v2/developers/navigator.mdx, v2/developers/resources/reference/apis.mdx, v2/developers/resources/reference/pricing-rate-limits.mdx, v2/developers/resources/reference/pytrickle.mdx, v2/developers/resources/reference/sdks.mdx, v2/gateways/concepts/architecture.mdx, v2/gateways/concepts/business-model.mdx, v2/gateways/concepts/capabilities.mdx, v2/gateways/custom/views/setup/configure/dual-configuration-content.mdx, v2/gateways/guides/advanced-operations/gateway-discoverability.mdx, v2/gateways/guides/advanced-operations/gateway-middleware.mdx, v2/gateways/guides/advanced-operations/orchestrator-selection.mdx, v2/gateways/guides/advanced-operations/scaling.mdx, v2/gateways/guides/deployment-details/setup-options.mdx, v2/gateways/guides/deployment-details/setup-requirements.mdx, v2/gateways/guides/monitoring-and-tooling/health-checks.mdx, v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx, v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx, v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx, v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx, v2/gateways/guides/node-pipelines/ai-pipelines.mdx, v2/gateways/guides/node-pipelines/guide.mdx, v2/gateways/guides/node-pipelines/pipeline-configuration.mdx, v2/gateways/guides/node-pipelines/video-pipelines.mdx, v2/gateways/guides/operator-considerations/business-case.mdx, v2/gateways/guides/operator-considerations/production-gateways.mdx, v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx, v2/gateways/guides/payments-and-pricing/funding-guide.mdx, v2/gateways/guides/payments-and-pricing/payment-guide.mdx, v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx, v2/gateways/guides/payments-and-pricing/remote-signers.mdx, v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx, v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx, v2/gateways/guides/roadmap-and-funding/operator-support.mdx, v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx, v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx, v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx, v2/gateways/guides/tutorials/tutorial-3-go-production.mdx, v2/gateways/navigator.mdx, v2/gateways/resources/deployment-terms.mdx, v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx, v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx, v2/gateways/setup/monitor.mdx, v2/gateways/setup/monitor/monitoring-setup.mdx, v2/gateways/setup/prepare.mdx, v2/gateways/setup/requirements/setup.mdx, v2/internal/rfp/report.mdx, v2/orchestrators/concepts/architecture.mdx, v2/orchestrators/concepts/capabilities.mdx, v2/orchestrators/concepts/incentive-model.mdx, v2/orchestrators/concepts/role.mdx, v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx, v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx, v2/orchestrators/guides/advanced-operations/pool-operators.mdx, v2/orchestrators/guides/advanced-operations/scale-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx, v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx, v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx, v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx, v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx, v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx, v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx, v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx, v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx, v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx, v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx, v2/orchestrators/guides/deployment-details/setup-options.mdx, v2/orchestrators/guides/deployment-details/siphon-setup.mdx, v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx, v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx, v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx, v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx, v2/orchestrators/guides/operator-considerations/business-case.mdx, v2/orchestrators/guides/operator-considerations/operator-impact.mdx, v2/orchestrators/guides/operator-considerations/operator-rationale.mdx, v2/orchestrators/guides/operator-considerations/requirements.mdx, v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx, v2/orchestrators/guides/payments-and-pricing/payments.mdx, v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx, v2/orchestrators/guides/staking-and-rewards/earning-model.mdx, v2/orchestrators/guides/staking-and-rewards/network-participation.mdx, v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx, v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx, v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx, v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx, v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx, v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx, v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx, v2/orchestrators/navigator.mdx, v2/orchestrators/quickstart/guide.mdx, v2/orchestrators/quickstart/video-transcoding.mdx, v2/orchestrators/resources/knowledge-hub/community-guides.mdx, v2/orchestrators/resources/operator-terms.mdx, v2/orchestrators/resources/reference/arbitrum-exchanges.mdx, v2/orchestrators/resources/reference/arbitrum-rpc.mdx, v2/orchestrators/resources/reference/gpu-support.mdx, v2/orchestrators/resources/reference/technical/cli-flags.mdx, v2/orchestrators/resources/x-guides.mdx, v2/orchestrators/setup/configure.mdx, v2/orchestrators/setup/connect.mdx, v2/orchestrators/setup/verify.mdx
 * @breakingChangeRisk high
 * @lastMeaningfulChange 2026-04-09
 * @param {any} children - children prop.
 * @param {boolean} [header=false] - header prop.
 * @param {boolean} [hover=false] - hover prop.
 * @param {object} [style={}] - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const TableRow = ({
  children,
  header = false,
  hover = false,
  style = {},
  className = "",
  ...rest
}) => {
  const rowId = `table-row-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      {hover && (
        <style>{`
          #${rowId}:hover {
            background-color: var(--lp-color-bg-card);
          }
        `}</style>
      )}
      <tr
        id={rowId}
        className={className}
        style={{
          ...(header && {
            backgroundColor: "var(--lp-color-accent-strong)",
            color: "var(--lp-color-on-accent)",
            fontWeight: "bold",
          }),
          ...style,
        }}
        {...rest}
      >
        {children}
      </tr>
    </>
  );
};

/**
 * @component TableCell
 * @category displays
 * @subcategory tables
 * @status stable
 * @description Table cell that switches between th and td based on header prop.
  * @aiDiscoverability none
 * @usedIn v2/developers/build/sdk-gateway.mdx, v2/developers/concepts/ai-on-livepeer.mdx, v2/developers/concepts/video-on-livepeer.mdx, v2/developers/get-started/setup-paths.mdx, v2/developers/guides/ai/authentication.mdx, v2/developers/guides/ai/production-checklist.mdx, v2/developers/guides/ai/troubleshooting.mdx, v2/developers/guides/tutorials/build-an-ai-agent-on-livepeer.mdx, v2/developers/guides/tutorials/token-gated-video.mdx, v2/developers/guides/video/access-control.mdx, v2/developers/guides/video/monitor-stream-health.mdx, v2/developers/guides/video/playback.mdx, v2/developers/guides/video/webhooks.mdx, v2/developers/navigator.mdx, v2/developers/resources/reference/apis.mdx, v2/developers/resources/reference/pricing-rate-limits.mdx, v2/developers/resources/reference/pytrickle.mdx, v2/developers/resources/reference/sdks.mdx, v2/gateways/concepts/architecture.mdx, v2/gateways/concepts/business-model.mdx, v2/gateways/concepts/capabilities.mdx, v2/gateways/custom/views/setup/configure/dual-configuration-content.mdx, v2/gateways/guides/advanced-operations/gateway-discoverability.mdx, v2/gateways/guides/advanced-operations/gateway-middleware.mdx, v2/gateways/guides/advanced-operations/orchestrator-selection.mdx, v2/gateways/guides/advanced-operations/scaling.mdx, v2/gateways/guides/deployment-details/setup-options.mdx, v2/gateways/guides/deployment-details/setup-requirements.mdx, v2/gateways/guides/monitoring-and-tooling/health-checks.mdx, v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx, v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx, v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx, v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx, v2/gateways/guides/node-pipelines/ai-pipelines.mdx, v2/gateways/guides/node-pipelines/guide.mdx, v2/gateways/guides/node-pipelines/pipeline-configuration.mdx, v2/gateways/guides/node-pipelines/video-pipelines.mdx, v2/gateways/guides/operator-considerations/business-case.mdx, v2/gateways/guides/operator-considerations/production-gateways.mdx, v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx, v2/gateways/guides/payments-and-pricing/funding-guide.mdx, v2/gateways/guides/payments-and-pricing/payment-guide.mdx, v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx, v2/gateways/guides/payments-and-pricing/remote-signers.mdx, v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx, v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx, v2/gateways/guides/roadmap-and-funding/operator-support.mdx, v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx, v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx, v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx, v2/gateways/guides/tutorials/tutorial-3-go-production.mdx, v2/gateways/navigator.mdx, v2/gateways/resources/deployment-terms.mdx, v2/gateways/resources/reference/technical/api-reference/AI-API/ai.mdx, v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx, v2/gateways/setup/monitor.mdx, v2/gateways/setup/monitor/monitoring-setup.mdx, v2/gateways/setup/prepare.mdx, v2/gateways/setup/requirements/setup.mdx, v2/internal/rfp/report.mdx, v2/orchestrators/concepts/architecture.mdx, v2/orchestrators/concepts/capabilities.mdx, v2/orchestrators/concepts/incentive-model.mdx, v2/orchestrators/concepts/role.mdx, v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx, v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx, v2/orchestrators/guides/advanced-operations/pool-operators.mdx, v2/orchestrators/guides/advanced-operations/scale-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx, v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx, v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx, v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx, v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx, v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx, v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx, v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx, v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx, v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx, v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx, v2/orchestrators/guides/deployment-details/setup-options.mdx, v2/orchestrators/guides/deployment-details/siphon-setup.mdx, v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx, v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx, v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx, v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx, v2/orchestrators/guides/operator-considerations/business-case.mdx, v2/orchestrators/guides/operator-considerations/operator-impact.mdx, v2/orchestrators/guides/operator-considerations/operator-rationale.mdx, v2/orchestrators/guides/operator-considerations/requirements.mdx, v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx, v2/orchestrators/guides/payments-and-pricing/payments.mdx, v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx, v2/orchestrators/guides/staking-and-rewards/earning-model.mdx, v2/orchestrators/guides/staking-and-rewards/network-participation.mdx, v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx, v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx, v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx, v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx, v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx, v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx, v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx, v2/orchestrators/navigator.mdx, v2/orchestrators/quickstart/guide.mdx, v2/orchestrators/quickstart/video-transcoding.mdx, v2/orchestrators/resources/knowledge-hub/community-guides.mdx, v2/orchestrators/resources/operator-terms.mdx, v2/orchestrators/resources/reference/arbitrum-exchanges.mdx, v2/orchestrators/resources/reference/arbitrum-rpc.mdx, v2/orchestrators/resources/reference/gpu-support.mdx, v2/orchestrators/resources/reference/technical/cli-flags.mdx, v2/orchestrators/resources/x-guides.mdx, v2/orchestrators/setup/configure.mdx, v2/orchestrators/setup/connect.mdx, v2/orchestrators/setup/verify.mdx
 * @breakingChangeRisk high
 * @lastMeaningfulChange 2026-04-09
 * @param {any} children - children prop.
 * @param {string} [align="left"] - align prop.
 * @param {boolean} [header=false] - header prop.
 * @param {object} [style={}] - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const TableCell = ({
  children,
  align = "left",
  header = false,
  style = {},
  className = "",
  ...rest
}) => {
  const Component = header ? "th" : "td";

  return (
    <Component
      className={className}
      style={{
        padding: "0.75rem 1rem",
        textAlign: align,
        border: header ? "none" : "1px solid var(--lp-color-border-default)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

// ─── Dynamic Tables ─── //

/**
 * @component DynamicTable
 * @category displays
 * @subcategory tables
 * @status stable
 * @usedIn v2/about/network/interfaces.mdx, v2/about/network/job-lifecycle.mdx, v2/about/network/marketplace.mdx, v2/about/network/technical-architecture.mdx, v2/about/protocol/core-mechanisms.mdx, v2/about/protocol/livepeer-token.mdx, v2/about/protocol/overview.mdx, v2/about/protocol/technical-architecture.mdx, v2/about/protocol/treasury.mdx, v2/about/resources/glossary.mdx, v2/community/resources/glossary.mdx, v2/delegators/resources/compendium/exchanges.mdx, v2/delegators/resources/glossary.mdx, v2/developers/build/workload-fit.mdx, v2/developers/resources/glossary.mdx, v2/gateways/custom/views/setup/configure/video-configuration-content.mdx, v2/gateways/custom/views/setup/install/docker-install-content.mdx, v2/gateways/custom/views/setup/install/linux-install-content.mdx, v2/gateways/guides/payments-and-pricing/pricing-configuration.mdx, v2/gateways/resources/glossary.mdx, v2/gateways/resources/reference/technical/configuration-flags.mdx, v2/home/resources/glossary.mdx, v2/orchestrators/guides/deployment-details/join-a-pool.mdx, v2/orchestrators/resources/glossary.mdx, v2/orchestrators/setup/prepare.mdx, v2/resources/resource-hub-terms.mdx, v2/solutions/resources/glossary.mdx, v2/solutions/solution-providers.mdx
 * @breakingChangeRisk medium
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Use DynamicTableV2 for new tables that need measured fit-content columns and fluid column tracks.
 * @description Renders structured data as a scrollable table with section separators and accessible region.
  * @aiDiscoverability none
 * @param {any} [tableTitle=null] - table Title prop.
 * @param {Array} [headerList=[]] - header List prop.
 * @param {Array} [itemsList=[]] - items List prop.
 * @param {Array} [monospaceColumns=[]] - monospace Columns prop.
 * @param {Array} [contentFitColumns=[]] - Column names that should size to their contents.
 * @param {any} margin - margin prop.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */

export const DynamicTable = ({
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  columnWidths = {},
  contentFitColumns = [],
  showSeparators = false,
  margin,
  className = "",
  style = {},
  ...rest
}) => {
  if (!headerList.length) {
    return <div>No headers provided</div>;
  }

  const safeContentFitColumns = Array.isArray(contentFitColumns)
    ? contentFitColumns
    : [];
  const usesContentFitColumns = safeContentFitColumns.length > 0;
  const isContentFitColumn = (header) => safeContentFitColumns.includes(header);
  const getColumnStyle = (header) => {
    const widthStyle = columnWidths[header]
      ? {
          width: columnWidths[header],
          minWidth: columnWidths[header],
          maxWidth: columnWidths[header],
        }
      : {};
    const contentFitStyle = !columnWidths[header] && isContentFitColumn(header)
      ? {
          width: "1%",
          whiteSpace: "nowrap",
        }
      : {};

    return {
      ...contentFitStyle,
      ...widthStyle,
    };
  };

  return (
    <div className={className} style={style} {...rest}>
      {tableTitle && (
        <div style={{ fontStyle: "italic", margin: 0 }}>
          <strong>{tableTitle}</strong>
        </div>
      )}
      <div
        style={{ overflowX: "auto", ...(margin != null && { margin }) }}
        role="region"
        tabIndex={0}
        aria-label={tableTitle ? `Scrollable table: ${tableTitle}` : "Scrollable table"}
      >
        <table
          data-docs-dynamic-table
          style={{
            width: "100%",
            tableLayout: usesContentFitColumns ? "auto" : "fixed",
            borderCollapse: "collapse",
            fontSize: "0.9rem",
            marginTop: 0,
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "var(--lp-color-accent)",
                color: "var(--lp-color-on-accent)",
                borderBottom: "1px solid var(--lp-color-border-default)",
              }}
            >
              {headerList.map((header, index) => (
                <th
                  key={index}
                  style={{
                    padding: "10px 8px",
                    textAlign: "left",
                    fontWeight: "600",
                    color: "var(--lp-color-on-accent)",
                    ...getColumnStyle(header),
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itemsList.filter((item) => showSeparators || !item?.__separator).map((item, rowIndex) => (
              item?.__separator ? (
                <tr
                  key={rowIndex}
                  style={{
                    backgroundColor: "var(--lp-color-accent)",
                    color: "var(--lp-color-on-accent)",
                    borderBottom: "1px solid var(--lp-color-accent)",
                  }}
                >
                  <td
                    colSpan={headerList.length}
                  style={{
                    padding: "6px 8px",
                    fontWeight: "700",
                      color: "var(--lp-color-on-accent)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item[headerList[0]] ?? item.Category ?? "Category"}
                  </td>
                </tr>
              ) : (
                <tr
                  key={rowIndex}
                  style={{ borderBottom: "1px solid var(--lp-color-border-default)" }}
                >
                  {headerList.map((header, colIndex) => {
                    const value =
                      item[header] ?? item[header.toLowerCase()] ?? "-";
                    const isMonospace = monospaceColumns.includes(colIndex);

                    return (
                      <td
                        key={colIndex}
                        style={{
                          padding: "8px 8px",
                          fontFamily: isMonospace ? "monospace" : "inherit",
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                          ...getColumnStyle(header),
                        }}
                      >
                        {isMonospace ? <code>{value}</code> : value}
                      </td>
                    );
                  })}
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/**
 * @component DynamicTableV2
 * @category displays
 * @subcategory tables
 * @status experimental
 * @description Renders structured data as a scrollable table with separator rows and intrinsic-width support for fit-to-content columns.
 * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {any} [tableTitle=null] - table Title prop.
 * @param {Array} [headerList=[]] - header List prop.
 * @param {Array} [itemsList=[]] - items List prop.
 * @param {Array} [monospaceColumns=[]] - monospace Columns prop.
 * @param {object} [columnWidths={}] - Preferred minimum widths keyed by header.
 * @param {object} [columnConfig={}] - Per-column layout flags keyed by header.
 * @param {any} margin - margin prop.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */
export const DynamicTableV2 = ({
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  columnWidths = {},
  columnConfig = {},
  showSeparators = false,
  margin,
  className = '',
  style = {},
  ...rest
}) => {
  if (!headerList.length) {
    return <div>No headers provided</div>
  }

  const tableRef = useRef(null)
  const [measuredColumnWidths, setMeasuredColumnWidths] = useState({})

  const measureFitColumns = () => {
    const tableElement = tableRef.current
    if (!tableElement) {
      return
    }

    const nextWidths = headerList.reduce((accumulator, header, index) => {
      const config = columnConfig?.[header] || {}

      if (!config.fitContent) {
        return accumulator
      }

      const contentNodes = tableElement.querySelectorAll(
        `[data-docs-column-key="${index}"] [data-docs-fit-content]`
      )

      let maxContentWidth = 0

      contentNodes.forEach((node) => {
        const width = Math.ceil(node.getBoundingClientRect().width)
        if (width > maxContentWidth) {
          maxContentWidth = width
        }
      })

      if (maxContentWidth > 0) {
        accumulator[header] = `${maxContentWidth + 16}px`
      }

      return accumulator
    }, {})

    setMeasuredColumnWidths((currentWidths) => {
      const currentEntries = Object.entries(currentWidths)
      const nextEntries = Object.entries(nextWidths)

      if (
        currentEntries.length === nextEntries.length &&
        nextEntries.every(([header, width]) => currentWidths[header] === width)
      ) {
        return currentWidths
      }

      return nextWidths
    })
  }

  useLayoutEffect(() => {
    measureFitColumns()
  }, [headerList, itemsList, columnConfig])

  useEffect(() => {
    const tableElement = tableRef.current
    if (!tableElement || typeof ResizeObserver === 'undefined') {
      return undefined
    }

    const resizeObserver = new ResizeObserver(() => {
      measureFitColumns()
    })

    resizeObserver.observe(tableElement)

    if (tableElement.parentElement) {
      resizeObserver.observe(tableElement.parentElement)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [headerList, itemsList, columnConfig])

  const fitHeaders = headerList.filter(
    (header) => columnConfig?.[header]?.fitContent
  )
  const hasMeasuredFitColumns =
    fitHeaders.length === 0 ||
    fitHeaders.every((header) => Boolean(measuredColumnWidths[header]))

  const getColumnStyle = (header, isMonospace = false) => {
    const config = columnConfig?.[header] || {}
    const fitContent = Boolean(config.fitContent)
    const fluid = Boolean(config.fluid)
    const nowrap = Boolean(config.nowrap) || fitContent || isMonospace
    const preferredWidth = columnWidths[header]
    const measuredWidth = measuredColumnWidths[header]

    return {
      ...(fitContent && measuredWidth
        ? {
            width: measuredWidth,
            minWidth: measuredWidth,
            maxWidth: measuredWidth,
          }
        : {}),
      ...(!fitContent && !fluid && preferredWidth
        ? { minWidth: preferredWidth }
        : {}),
      ...(nowrap
        ? { whiteSpace: 'nowrap' }
        : {
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }),
    }
  }

  const getColumnTrackStyle = (header) => {
    const config = columnConfig?.[header] || {}
    const fitContent = Boolean(config.fitContent)
    const fluid = Boolean(config.fluid)
    const preferredWidth = columnWidths[header]
    const measuredWidth = measuredColumnWidths[header]

    if (fitContent && measuredWidth) {
      return {
        width: measuredWidth,
        minWidth: measuredWidth,
        maxWidth: measuredWidth,
      }
    }

    if (fluid) {
      return {}
    }

    if (preferredWidth) {
      return { width: preferredWidth }
    }

    return {}
  }

  const renderCellContent = (header, content) => {
    const config = columnConfig?.[header] || {}

    if (!config.fitContent) {
      return content
    }

    return (
      <div
        data-docs-fit-content
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          width: 'max-content',
          maxWidth: 'none',
        }}
      >
        {content}
      </div>
    )
  }

  return (
    <div className={className} style={style} {...rest}>
      {tableTitle && (
        <div style={{ fontStyle: 'italic', margin: 0 }}>
          <strong>{tableTitle}</strong>
        </div>
      )}
      <div
        style={{ overflowX: 'auto', ...(margin != null && { margin }) }}
        role="region"
        tabIndex={0}
        aria-label={
          tableTitle ? `Scrollable table: ${tableTitle}` : 'Scrollable table'
        }
      >
        <table
          ref={tableRef}
          data-docs-dynamic-table-v2
          style={{
            width: '100%',
            tableLayout: hasMeasuredFitColumns ? 'fixed' : 'auto',
            borderCollapse: 'collapse',
            fontSize: '0.9rem',
            marginTop: 0,
          }}
        >
          <colgroup>
            {headerList.map((header, index) => (
              <col key={index} style={getColumnTrackStyle(header)} />
            ))}
          </colgroup>
          <thead>
            <tr
              style={{
                backgroundColor: 'var(--lp-color-accent)',
                color: 'var(--lp-color-on-accent)',
                borderBottom: '1px solid var(--lp-color-border-default)',
              }}
            >
              {headerList.map((header, index) => (
                <th
                  key={index}
                  data-docs-column-key={index}
                  style={{
                    padding: '10px 8px',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: 'var(--lp-color-on-accent)',
                    verticalAlign: 'top',
                    ...getColumnStyle(header),
                  }}
                >
                  {renderCellContent(header, header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itemsList
              .filter((item) => showSeparators || !item?.__separator)
              .map((item, rowIndex) =>
                item?.__separator ? (
                  <tr
                    key={rowIndex}
                    style={{
                      backgroundColor: 'var(--lp-color-accent)',
                      color: 'var(--lp-color-on-accent)',
                      borderBottom: '1px solid var(--lp-color-accent)',
                    }}
                  >
                    <td
                      colSpan={headerList.length}
                      style={{
                        padding: '6px 8px',
                        fontWeight: '700',
                        color: 'var(--lp-color-on-accent)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item[headerList[0]] ?? item.Category ?? 'Category'}
                    </td>
                  </tr>
                ) : (
                  <tr
                    key={rowIndex}
                    style={{ borderBottom: '1px solid var(--lp-color-border-default)' }}
                  >
                    {headerList.map((header, colIndex) => {
                      const value =
                        item[header] ?? item[header.toLowerCase()] ?? '-'
                      const isMonospace = monospaceColumns.includes(colIndex)

                      return (
                        <td
                          key={colIndex}
                          data-docs-column-key={colIndex}
                          style={{
                            padding: '8px 8px',
                            fontFamily: isMonospace ? 'monospace' : 'inherit',
                            verticalAlign: 'top',
                            ...getColumnStyle(header, isMonospace),
                          }}
                        >
                          {renderCellContent(
                            header,
                            isMonospace ? <code>{value}</code> : value
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Search Tables ─── //

/**
 * @component SearchTable
 * @category displays
 * @subcategory tables
 * @status stable
 * @usedIn v2/about/resources/glossary.mdx, v2/community/resources/glossary.mdx, v2/delegators/resources/compendium/exchanges.mdx, v2/delegators/resources/glossary.mdx, v2/developers/resources/glossary.mdx, v2/gateways/resources/glossary.mdx, v2/home/resources/glossary.mdx, v2/orchestrators/resources/glossary.mdx, v2/resources/glossary.mdx, v2/resources/resource-hub-terms.mdx, v2/solutions/resources/glossary.mdx, v2/solutions/solution-providers.mdx
 * @breakingChangeRisk medium
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Use SearchTableV2 for new tables that need content-driven sizing and composable column behaviour.
 * @description Generic filterable table wrapper with search input, category dropdown(s), and optional separators.
 * @aiDiscoverability props-extracted
 * @param {Function} [TableComponent=null] - Table renderer component (e.g. DynamicTable).
 * @param {React.ReactNode} [tableTitle=null] - Table title.
 * @param {Array} [headerList=[]] - Column header names.
 * @param {Array} [itemsList=[]] - Row data objects. Cell values can be strings or JSX.
 * @param {Array} [monospaceColumns=[]] - Column indices to render in monospace.
 * @param {string} margin - Margin passed to TableComponent.
 * @param {string} [searchPlaceholder='Search...'] - Placeholder text for the search input.
 * @param {Array} [searchColumns=[]] - Column names to search against. Defaults to all headers.
 * @param {string} [categoryColumn='Category'] - Field name the first dropdown filters on.
 * @param {Array} [filterColumns=[]] - Additional column names that get dropdown filters. Each scoped by selections above it.
 * @param {object} [columnWidths={}] - Column width overrides keyed by header name. Passed to TableComponent.
 * @param {Array} [contentFitColumns=[]] - Column names that should size to their contents when supported by TableComponent.
 * @param {object} [columnVariant={}] - Column display variants keyed by header name. Supported: "bold", "badge", "textIcon", "addressWrapper".
 * @param {Array} [categoryBadges=[]] - Array of {color, label} for "badge" variant rendering. Matched by label (case-insensitive).
 * @param {Array} [textIcons=[]] - Array of {label, icon} for "textIcon" variant rendering. Icon is JSX rendered inline before the label text.
 * @param {boolean} [showSeparators=false] - When true, inserts category separator rows. Labels are uppercased.
 * @param {string} [separatorColumn=null] - Override which column drives separators. Default: categoryColumn.
 * @param {boolean} [boldFirstColumn=true] - Auto-wraps first column in <strong> if value is a plain string.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */

export const SearchTable = ({
  TableComponent = null,
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  margin,
  searchPlaceholder = 'Search...',
  searchColumns = [],
  categoryColumn = 'Category',
  filterColumns = [],
  columnWidths = {},
  contentFitColumns = [],
  columnVariant = {},
  categoryBadges = [],
  textIcons = [],
  showSeparators = false,
  separatorColumn = null,
  boldFirstColumn = true,
  className = '',
  style = {},
}) => {
  // All filter columns: categoryColumn first, then any extras
  const allFilterCols = [categoryColumn, ...filterColumns]

  // State: one selection per filter column
  const [query, setQuery] = useState('')
  const [selections, setSelections] = useState(() => {
    const init = {}
    allFilterCols.forEach((col) => {
      init[col] = 'All'
    })
    return init
  })

  const safeHeaderList = Array.isArray(headerList) ? headerList : []
  const safeItemsList = Array.isArray(itemsList) ? itemsList : []
  const safeMonospaceColumns = Array.isArray(monospaceColumns)
    ? monospaceColumns
    : []
  const safeSearchColumns = Array.isArray(searchColumns) ? searchColumns : []
  const activeColumns = safeSearchColumns.length
    ? safeSearchColumns
    : safeHeaderList
  const normalizedQuery = query.trim().toLowerCase()

  // --- Badge colour map ---
  const badgeColorMap = {}
  categoryBadges.forEach((b) => {
    badgeColorMap[b.label.toLowerCase()] = b.color
  })

  // --- Text icon map ---
  const textIconMap = {}
  textIcons.forEach((t) => {
    textIconMap[t.label.toLowerCase()] = t.icon
  })

  // --- Dropdown options for each filter column ---
  const getOptionsForColumn = (colName, colIndex) => {
    // Scope options by selections of all columns before this one
    let scoped = safeItemsList
    for (let i = 0; i < colIndex; i++) {
      const prevCol = allFilterCols[i]
      const prevSel = selections[prevCol]
      if (prevSel !== 'All') {
        scoped = scoped.filter(
          (item) => String(item?.[prevCol] || '') === prevSel
        )
      }
    }
    return [
      ...new Set(
        scoped.map((item) => String(item?.[colName] || '')).filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
  }

  // --- Filtering ---
  const filteredItems = safeItemsList.filter((item) =>
    allFilterCols.every((col) => {
      const sel = selections[col]
      return sel === 'All' || String(item?.[col] || '') === sel
    })
  )

  const searchedItems = !normalizedQuery
    ? filteredItems
    : filteredItems.filter((item) =>
        activeColumns.some((column) => {
          const value =
            item?.[column] ?? item?.[String(column).toLowerCase()] ?? ''
          return String(value).toLowerCase().includes(normalizedQuery)
        })
      )

  // --- Sort by filter columns in order ---
  const sortedItems = [...searchedItems].sort((a, b) => {
    for (const col of allFilterCols) {
      const cmp = String(a[col] || '').localeCompare(
        String(b[col] || ''),
        'en',
        { sensitivity: 'base' }
      )
      if (cmp !== 0) return cmp
    }
    return 0
  })

  // --- Apply column variants ---
  const firstColumnName = safeHeaderList[0]

  const renderVariant = (value, variant, item, header) => {
    if (variant === 'bold' && typeof value === 'string') {
      return <strong>{value}</strong>
    }
    if (variant === 'badge' && typeof value === 'string') {
      const colorName = badgeColorMap[value.toLowerCase()]
      if (colorName) {
        return <Badge color={colorName}>{value}</Badge>
      }
    }
    if (variant === 'textIcon' && typeof value === 'string') {
      const icon = textIconMap[value.toLowerCase()]
      if (icon) {
        return (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            {icon} {value}
          </span>
        )
      }
    }
    if (variant === 'addressWrapper' && typeof value === 'string') {
      const href = item?.[`_${header}Href`] ?? item?._addressHref
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            width: '100%',
            minWidth: 0,
          }}
        >
          <CopyText text={value} style={{ flex: 1 }} />
          {href && <LinkIcon href={href} color="var(--lp-color-accent)" />}
        </div>
      )
    }
    return value
  }

  const displayItems = sortedItems.map((item) => {
    const out = {
      ...item,
      _sepKey: String(item[separatorColumn || categoryColumn] || ''),
    }
    for (const header of safeHeaderList) {
      if (columnVariant[header] && out[header] !== undefined) {
        out[header] = renderVariant(out[header], columnVariant[header], item, header)
      }
    }
    if (
      boldFirstColumn &&
      firstColumnName &&
      !columnVariant[firstColumnName] &&
      typeof out[firstColumnName] === 'string'
    ) {
      out[firstColumnName] = <strong>{out[firstColumnName]}</strong>
    }
    return out
  })

  // --- Separators ---
  const withSeparators = []
  let lastSep = ''
  displayItems.forEach((item) => {
    const sepKey = item._sepKey || ''
    if (showSeparators && sepKey && sepKey !== lastSep) {
      withSeparators.push({
        __separator: true,
        [safeHeaderList[0]]: sepKey.toUpperCase(),
      })
      lastSep = sepKey
    }
    withSeparators.push(item)
  })

  // --- Render ---
  const selectStyle = {
    minWidth: '150px',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid var(--lp-color-border-default)',
    background: 'var(--lp-color-bg-page)',
    color: 'var(--lp-color-text-secondary)',
  }

  const updateSelection = (col, colIndex, value) => {
    const next = { ...selections, [col]: value }
    // Reset all downstream filter selections
    for (let i = colIndex + 1; i < allFilterCols.length; i++) {
      next[allFilterCols[i]] = 'All'
    }
    setSelections(next)
  }

  return (
    <div className={className} style={style}>
      <div
        style={{
          marginBottom: "var(--lp-spacing-2)",
          display: 'flex',
          flexWrap: 'wrap',
          gap: "var(--lp-spacing-2)",
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          value={query}
          placeholder={searchPlaceholder}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter table rows"
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid var(--lp-color-border-default)',
            background: 'var(--lp-color-bg-page)',
            color: 'var(--lp-color-text-secondary)',
          }}
        />
        {allFilterCols.map((col, colIndex) => {
          const options = getOptionsForColumn(col, colIndex)
          if (options.length === 0) return null
          const parentLabel =
            colIndex > 0 && selections[allFilterCols[colIndex - 1]] !== 'All'
              ? selections[allFilterCols[colIndex - 1]]
              : col.toLowerCase() + 's'
          return (
            <select
              key={col}
              value={selections[col]}
              onChange={(e) => updateSelection(col, colIndex, e.target.value)}
              aria-label={`Filter by ${col}`}
              style={selectStyle}
            >
              <option value="All">All {parentLabel}</option>
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )
        })}
      </div>

      {typeof TableComponent === 'function' ? (
        <TableComponent
          tableTitle={tableTitle}
          headerList={safeHeaderList}
          itemsList={withSeparators}
          monospaceColumns={safeMonospaceColumns}
          columnWidths={columnWidths}
          contentFitColumns={contentFitColumns}
          showSeparators={showSeparators}
          margin={margin}
        />
      ) : (
        <Warning>SearchTable requires a `TableComponent` prop.</Warning>
      )}
    </div>
  )
}

/**
 * @component SearchTableV2
 * @category displays
 * @subcategory tables
 * @status experimental
 * @description Generic filterable table wrapper with intrinsic-width sizing for badge, icon, and primary text columns.
 * @aiDiscoverability props-extracted
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {Function} [TableComponent=null] - Table renderer component (e.g. DynamicTableV2).
 * @param {React.ReactNode} [tableTitle=null] - Table title.
 * @param {Array} [headerList=[]] - Column header names.
 * @param {Array} [itemsList=[]] - Row data objects. Cell values can be strings or JSX.
 * @param {Array} [monospaceColumns=[]] - Column indices to render in monospace.
 * @param {string} margin - Margin passed to TableComponent.
 * @param {string} [searchPlaceholder='Search...'] - Placeholder text for the search input.
 * @param {Array} [searchColumns=[]] - Column names to search against. Defaults to all headers.
 * @param {string} [categoryColumn='Category'] - Field name the first dropdown filters on.
 * @param {Array} [filterColumns=[]] - Additional column names that get dropdown filters. Each scoped by selections above it.
 * @param {object} [columnWidths={}] - Column width overrides keyed by header name. Passed to TableComponent.
 * @param {object} [columnConfig={}] - Optional column sizing overrides merged with V2 defaults.
 * @param {object} [columnVariant={}] - Column display variants keyed by header name. Supported: "bold", "badge", "textIcon", "addressWrapper".
 * @param {Array} [categoryBadges=[]] - Array of {color, label} for "badge" variant rendering. Matched by label (case-insensitive).
 * @param {Array} [textIcons=[]] - Array of {label, icon} for "textIcon" variant rendering.
 * @param {boolean} [showSeparators=false] - When true, inserts category separator rows. Labels are uppercased.
 * @param {string} [separatorColumn=null] - Override which column drives separators. Default: categoryColumn.
 * @param {boolean} [boldFirstColumn=true] - Auto-wraps first column in <strong> if value is a plain string.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const SearchTableV2 = ({
  TableComponent = null,
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  margin,
  searchPlaceholder = 'Search...',
  searchColumns = [],
  categoryColumn = 'Category',
  filterColumns = [],
  columnWidths = {},
  columnConfig = {},
  columnVariant = {},
  categoryBadges = [],
  textIcons = [],
  showSeparators = false,
  separatorColumn = null,
  boldFirstColumn = true,
  className = '',
  style = {},
}) => {
  const allFilterCols = [categoryColumn, ...filterColumns]

  const [query, setQuery] = useState('')
  const [selections, setSelections] = useState(() => {
    const init = {}
    allFilterCols.forEach((col) => {
      init[col] = 'All'
    })
    return init
  })

  const safeHeaderList = Array.isArray(headerList) ? headerList : []
  const safeItemsList = Array.isArray(itemsList) ? itemsList : []
  const safeMonospaceColumns = Array.isArray(monospaceColumns)
    ? monospaceColumns
    : []
  const safeSearchColumns = Array.isArray(searchColumns) ? searchColumns : []
  const activeColumns = safeSearchColumns.length
    ? safeSearchColumns
    : safeHeaderList
  const normalizedQuery = query.trim().toLowerCase()

  const badgeColorMap = {}
  categoryBadges.forEach((b) => {
    badgeColorMap[b.label.toLowerCase()] = b.color
  })

  const textIconMap = {}
  textIcons.forEach((t) => {
    textIconMap[t.label.toLowerCase()] = t.icon
  })

  const getOptionsForColumn = (colName, colIndex) => {
    let scoped = safeItemsList
    for (let i = 0; i < colIndex; i++) {
      const prevCol = allFilterCols[i]
      const prevSel = selections[prevCol]
      if (prevSel !== 'All') {
        scoped = scoped.filter(
          (item) => String(item?.[prevCol] || '') === prevSel
        )
      }
    }
    return [
      ...new Set(
        scoped.map((item) => String(item?.[colName] || '')).filter(Boolean)
      ),
    ].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
  }

  const filteredItems = safeItemsList.filter((item) =>
    allFilterCols.every((col) => {
      const sel = selections[col]
      return sel === 'All' || String(item?.[col] || '') === sel
    })
  )

  const searchedItems = !normalizedQuery
    ? filteredItems
    : filteredItems.filter((item) =>
        activeColumns.some((column) => {
          const value =
            item?.[column] ?? item?.[String(column).toLowerCase()] ?? ''
          return String(value).toLowerCase().includes(normalizedQuery)
        })
      )

  const sortedItems = [...searchedItems].sort((a, b) => {
    for (const col of allFilterCols) {
      const cmp = String(a[col] || '').localeCompare(
        String(b[col] || ''),
        'en',
        { sensitivity: 'base' }
      )
      if (cmp !== 0) return cmp
    }
    return 0
  })

  const firstColumnName = safeHeaderList[0]

  const renderVariant = (value, variant, item, header) => {
    if (variant === 'bold' && typeof value === 'string') {
      return <strong>{value}</strong>
    }
    if (variant === 'badge' && typeof value === 'string') {
      const colorName = badgeColorMap[value.toLowerCase()]
      if (colorName) {
        return (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <Badge color={colorName}>{value}</Badge>
          </span>
        )
      }
    }
    if (variant === 'textIcon' && typeof value === 'string') {
      const icon = textIconMap[value.toLowerCase()]
      if (icon) {
        return (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap',
            }}
          >
            {icon}
            <span>{value}</span>
          </span>
        )
      }
    }
    if (variant === 'addressWrapper' && typeof value === 'string') {
      const href = item?.[`_${header}Href`] ?? item?._addressHref
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            width: '100%',
            minWidth: 0,
          }}
        >
          <CopyText text={value} style={{ flex: 1 }} />
          {href && <LinkIcon href={href} color="var(--lp-color-accent)" />}
        </div>
      )
    }
    return value
  }

  const displayItems = sortedItems.map((item) => {
    const out = {
      ...item,
      _sepKey: String(item[separatorColumn || categoryColumn] || ''),
    }
    for (const header of safeHeaderList) {
      if (columnVariant[header] && out[header] !== undefined) {
        out[header] = renderVariant(
          out[header],
          columnVariant[header],
          item,
          header
        )
      }
    }
    if (
      boldFirstColumn &&
      firstColumnName &&
      !columnVariant[firstColumnName] &&
      typeof out[firstColumnName] === 'string'
    ) {
      out[firstColumnName] = <strong>{out[firstColumnName]}</strong>
    }
    return out
  })

  const withSeparators = []
  let lastSep = ''
  displayItems.forEach((item) => {
    const sepKey = item._sepKey || ''
    if (showSeparators && sepKey && sepKey !== lastSep) {
      withSeparators.push({
        __separator: true,
        [safeHeaderList[0]]: sepKey.toUpperCase(),
      })
      lastSep = sepKey
    }
    withSeparators.push(item)
  })

  const resolvedColumnConfig = safeHeaderList.reduce(
    (accumulator, header, index) => {
      const variant = columnVariant[header]
      const override = columnConfig?.[header] || {}

      accumulator[header] = {
        fitContent:
          override.fitContent ??
          (index === 0 || variant === 'badge' || variant === 'textIcon'),
        nowrap:
          override.nowrap ??
          (index === 0 || variant === 'badge' || variant === 'textIcon'),
        fluid: override.fluid ?? variant === 'addressWrapper',
      }
      return accumulator
    },
    {}
  )

  const selectStyle = {
    minWidth: '150px',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid var(--lp-color-border-default)',
    background: 'var(--lp-color-bg-page)',
    color: 'var(--lp-color-text-secondary)',
  }

  const updateSelection = (col, colIndex, value) => {
    const next = { ...selections, [col]: value }
    for (let i = colIndex + 1; i < allFilterCols.length; i++) {
      next[allFilterCols[i]] = 'All'
    }
    setSelections(next)
  }

  return (
    <div className={className} style={style}>
      <div
        style={{
          marginBottom: "var(--lp-spacing-2)",
          display: 'flex',
          flexWrap: 'wrap',
          gap: "var(--lp-spacing-2)",
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          value={query}
          placeholder={searchPlaceholder}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter table rows"
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid var(--lp-color-border-default)',
            background: 'var(--lp-color-bg-page)',
            color: 'var(--lp-color-text-secondary)',
          }}
        />
        {allFilterCols.map((col, colIndex) => {
          const options = getOptionsForColumn(col, colIndex)
          if (options.length === 0) return null
          const parentLabel =
            colIndex > 0 && selections[allFilterCols[colIndex - 1]] !== 'All'
              ? selections[allFilterCols[colIndex - 1]]
              : col.toLowerCase() + 's'
          return (
            <select
              key={col}
              value={selections[col]}
              onChange={(e) => updateSelection(col, colIndex, e.target.value)}
              aria-label={`Filter by ${col}`}
              style={selectStyle}
            >
              <option value="All">All {parentLabel}</option>
              {options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )
        })}
      </div>

      {typeof TableComponent === 'function' ? (
        <TableComponent
          tableTitle={tableTitle}
          headerList={safeHeaderList}
          itemsList={withSeparators}
          monospaceColumns={safeMonospaceColumns}
          columnWidths={columnWidths}
          columnConfig={resolvedColumnConfig}
          showSeparators={showSeparators}
          margin={margin}
        />
      ) : (
        <Warning>SearchTable requires a `TableComponent` prop.</Warning>
      )}
    </div>
  )
}
