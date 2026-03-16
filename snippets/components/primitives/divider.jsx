/**
 * CustomDivider - Decorative divider with Livepeer branding
 *
 * @description
 * Displays a horizontal divider line with theme-aware Livepeer logo icons on both ends.
 * Optionally includes centered text between the divider lines.
 *
 * Icons automatically adapt to light/dark theme using theme-aware SVG.
 *
 * @param {string} [color] - Color for the middle text
 * @param {string} [middleText] - Optional text to display in the center of the divider;
 *
 * @example
 * <CustomDivider />
 * <CustomDivider middleText="OR" />
 * <CustomDivider middleText="Section Break" color="#2d9a67" />
 *
 * @author Livepeer Documentation Team
 */

// FIX THIS - IT SHOULD DYNAMICALLY TAKE UP THE HEIGHT IT HAS
/**
 * @component CustomDivider
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Custom Divider primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/livepeer-protocol/core-mechanisms.mdx, v2/about/livepeer-protocol/governance-model.mdx, v2/about/livepeer-protocol/livepeer-token.mdx, v2/about/livepeer-protocol/overview.mdx, v2/about/livepeer-protocol/technical-architecture.mdx, v2/about/livepeer-protocol/treasury.mdx, v2/about/portal.mdx, v2/about/resources/blockchain-contracts.mdx, v2/community/community-portal.mdx, v2/community/livepeer-community/community-guidelines.mdx, v2/developers/opportunities/bug-bounties.mdx, v2/developers/opportunities/grants-and-programmes.mdx, v2/developers/opportunities/oss-contributions.mdx, v2/developers/opportunities/overview.mdx, v2/developers/opportunities/rfps-and-proposals.mdx, v2/developers/portal.mdx, v2/gateways/concepts/architecture.mdx, v2/gateways/concepts/business-model.mdx, v2/gateways/concepts/capabilities.mdx, v2/gateways/concepts/role.mdx, v2/gateways/guides/advanced-operations/gateway-discoverability.mdx, v2/gateways/guides/advanced-operations/gateway-middleware.mdx, v2/gateways/guides/advanced-operations/orchestrator-selection.mdx, v2/gateways/guides/advanced-operations/scaling.mdx, v2/gateways/guides/deployment-details/setup-options.mdx, v2/gateways/guides/deployment-details/setup-requirements.mdx, v2/gateways/guides/monitoring-and-tooling/health-checks.mdx, v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx, v2/gateways/guides/monitoring-and-tooling/on-chain-metrics.mdx, v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx, v2/gateways/guides/monitoring-and-tooling/troubleshooting.mdx, v2/gateways/guides/node-pipelines/ai-pipelines.mdx, v2/gateways/guides/node-pipelines/byoc-pipelines.mdx, v2/gateways/guides/node-pipelines/dep-ai-inference.mdx, v2/gateways/guides/node-pipelines/guide.mdx, v2/gateways/guides/node-pipelines/pipeline-configuration.mdx, v2/gateways/guides/node-pipelines/video-pipelines.mdx, v2/gateways/guides/operator-considerations/business-case.mdx, v2/gateways/guides/operator-considerations/production-gateways.mdx, v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx, v2/gateways/guides/payments-and-pricing/dep-payment-guide.mdx, v2/gateways/guides/payments-and-pricing/funding-guide.mdx, v2/gateways/guides/payments-and-pricing/payment-guide.mdx, v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx, v2/gateways/guides/payments-and-pricing/remote-signers.mdx, v2/gateways/guides/roadmap-and-funding/gateway-showcase.mdx, v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx, v2/gateways/guides/roadmap-and-funding/operator-support.mdx, v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx, v2/gateways/guides/tutorials/tutorial-1-offchain-transcoding-test.mdx, v2/gateways/guides/tutorials/tutorial-2-byoc-cpu-pipeline.mdx, v2/gateways/guides/tutorials/tutorial-3-go-production.mdx, v2/gateways/navigator.mdx, v2/gateways/portal.mdx, v2/gateways/quickstart/gateway-setup.mdx, v2/gateways/resources/glossary.mdx, v2/gateways/setup/configure/video-configuration.mdx, v2/gateways/setup/requirements/on-chain setup/on-chain.mdx, v2/gateways/setup/requirements/setup.mdx, v2/home/about-livepeer/benefits.mdx, v2/home/about-livepeer/ecosystem.mdx, v2/home/about-livepeer/vision.mdx, v2/home/mission-control.mdx, v2/home/solutions/showcase.mdx, v2/orchestrators/concepts/architecture.mdx, v2/orchestrators/concepts/capabilities.mdx, v2/orchestrators/concepts/incentive-model.mdx, v2/orchestrators/concepts/role.mdx, v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx, v2/orchestrators/guides/advanced-operations/gateway-relationships.mdx, v2/orchestrators/guides/advanced-operations/pool-operators.mdx, v2/orchestrators/guides/advanced-operations/scale-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx, v2/orchestrators/guides/ai-and-job-workloads/diffusion-pipeline-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/llm-pipeline-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference.mdx, v2/orchestrators/guides/ai-and-job-workloads/model-hosting.mdx, v2/orchestrators/guides/ai-and-job-workloads/realtime-ai-setup.mdx, v2/orchestrators/guides/ai-and-job-workloads/video-transcoding-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/workload-options.mdx, v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx, v2/orchestrators/guides/config-and-optimisation/capacity-planning.mdx, v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx, v2/orchestrators/guides/config-and-optimisation/reward-call-tuning.mdx, v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx, v2/orchestrators/guides/deployment-details/join-a-pool.mdx, v2/orchestrators/guides/deployment-details/new-join-a-pool.mdx, v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx, v2/orchestrators/guides/deployment-details/setup-options.mdx, v2/orchestrators/guides/deployment-details/siphon-setup.mdx, v2/orchestrators/guides/monitoring-and-tooling/explorer-operations.mdx, v2/orchestrators/guides/monitoring-and-tooling/metrics-and-alerting.mdx, v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox.mdx, v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx, v2/orchestrators/guides/operator-considerations/business-case.mdx, v2/orchestrators/guides/operator-considerations/operator-impact.mdx, v2/orchestrators/guides/operator-considerations/operator-rationale.mdx, v2/orchestrators/guides/operator-considerations/requirements.mdx, v2/orchestrators/guides/payments-and-pricing/payment-receipts.mdx, v2/orchestrators/guides/payments-and-pricing/payments.mdx, v2/orchestrators/guides/staking-and-rewards/delegate-operations.mdx, v2/orchestrators/guides/staking-and-rewards/earning-model.mdx, v2/orchestrators/guides/staking-and-rewards/network-participation.mdx, v2/orchestrators/guides/staking-and-rewards/reward-mechanics.mdx, v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx, v2/orchestrators/guides/tutorials/ai-earning-quickstart.mdx, v2/orchestrators/guides/tutorials/byoc-cpu-smoke-test.mdx, v2/orchestrators/guides/tutorials/full-ai-pipeline-tutorial.mdx, v2/orchestrators/guides/tutorials/realtime-ai-tutorial.mdx, v2/orchestrators/guides/tutorials/zero-to-first-reward.mdx, v2/orchestrators/navigator.mdx, v2/orchestrators/portal.mdx, v2/orchestrators/quickstart/guide.mdx, v2/orchestrators/quickstart/video-transcoding.mdx, v2/orchestrators/resources/arbitrum-exchanges.mdx, v2/orchestrators/resources/arbitrum-rpc.mdx, v2/orchestrators/resources/community-guides.mdx, v2/orchestrators/resources/faq.mdx, v2/orchestrators/resources/glossary.mdx, v2/orchestrators/resources/gpu-support.mdx, v2/orchestrators/resources/technical/cli-flags.mdx, v2/orchestrators/resources/x-guides.mdx, v2/orchestrators/setup/configure.mdx, v2/orchestrators/setup/connect-and-activate.mdx, v2/orchestrators/setup/guide.mdx, v2/orchestrators/setup/r-monitor.mdx, v2/orchestrators/setup/rcs-requirements.mdx, v2/orchestrators/setup/rs-install.mdx, v2/orchestrators/setup/test.mdx, v2/resources/documentation-guide/research-and-fact-checking.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-11
 * @param {string} [color="var(--border)"] - color prop.
 * @param {string} [middleText=""] - middle Text prop.
 * @param {string} [spacing="default"] - Named spacing preset for authored page layouts.
 * @param {object} [style={}] - style prop.
 * @example
 * <CustomDivider />
 */
export const CustomDivider = ({
  color = "var(--border)",
  middleText = "",
  spacing = "default",
  style = {},
}) => {
  const spacingPresets = {
    default: {
      margin: "24px 0",
    },
    overlap: {
      margin: "-1rem 0 -1rem 0",
    },
    tight: {
      margin: "0 0 -1rem 0",
    },
    section: {
      margin: "0 0 -2rem 0",
    },
    sectionOverlap: {
      margin: "-1rem 0 -2rem 0",
    },
    deepOverlap: {
      margin: "-1rem 0 -1.5rem 0",
    },
  };
  const spacingStyle = spacingPresets[spacing] || spacingPresets.default;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        ...spacingStyle,
        fontSize: style?.fontSize || "16px",
        height: "fit-content",
        ...style,
      }}
    >
      <span
        style={{
          marginRight: "8px",
          opacity: 0.2,
        }}
      >
        <Icon icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg" />
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "var(--border)",
          opacity: 0.4,
        }}
      ></div>
      {middleText && (
        <>
          <Icon icon="circle" size={2} />
          <span
            style={{
              margin: "0 8px",
              fontWeight: "bold",
              color: color,
              opacity: 0.7,
            }}
          >
            {middleText}
          </span>
          <Icon icon="circle" size={2} />
        </>
      )}
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "var(--border)",
          opacity: 0.4,
        }}
      ></div>
      <span style={{ marginLeft: "8px", opacity: 0.2 }}>
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
          <Icon icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg" />
        </span>
      </span>
    </div>
  );
};
