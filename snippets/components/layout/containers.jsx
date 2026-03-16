/**
 * @component BorderedBox
 * @category layout
 * @tier composite
 * @status stable
 * @description Bordered Box layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies CenteredContainer, FullWidthContainer
 * @usedIn v2/community/livepeer-community/community-guidelines.mdx, v2/developers/build/workload-fit.mdx, v2/developers/developer-journey.mdx, v2/developers/opportunities/bug-bounties.mdx, v2/developers/opportunities/grants-and-programmes.mdx, v2/developers/opportunities/oss-contributions.mdx, v2/developers/opportunities/overview.mdx, v2/developers/opportunities/rfps-and-proposals.mdx, v2/gateways/guides/advanced-operations/gateway-discoverability.mdx, v2/gateways/guides/advanced-operations/gateway-middleware.mdx, v2/gateways/guides/advanced-operations/orchestrator-selection.mdx, v2/gateways/guides/deployment-details/setup-options.mdx, v2/gateways/guides/deployment-details/setup-requirements.mdx, v2/gateways/guides/monitoring-and-tooling/health-checks.mdx, v2/gateways/guides/monitoring-and-tooling/monitoring-setup.mdx, v2/gateways/guides/monitoring-and-tooling/tools-and-dashboards.mdx, v2/gateways/guides/node-pipelines/pipeline-configuration.mdx, v2/gateways/guides/operator-considerations/business-case.mdx, v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx, v2/gateways/guides/payments-and-pricing/payment-guide.mdx, v2/gateways/guides/payments-and-pricing/pricing-strategy.mdx, v2/gateways/guides/roadmap-and-funding/naap-multi-tenancy.mdx, v2/gateways/guides/roadmap-and-funding/operator-support.mdx, v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx, v2/gateways/navigator.mdx, v2/gateways/setup/requirements/on-chain setup/on-chain.mdx, v2/gateways/setup/requirements/setup.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/guides/advanced-operations/gateway-orchestrator-interface.mdx, v2/orchestrators/guides/advanced-operations/pool-operators.mdx, v2/orchestrators/guides/ai-and-job-workloads/ai-inference-operations.mdx, v2/orchestrators/guides/ai-and-job-workloads/audio-and-vision-pipelines.mdx, v2/orchestrators/guides/config-and-optimisation/ai-model-management.mdx, v2/orchestrators/guides/config-and-optimisation/pricing-strategy.mdx, v2/orchestrators/guides/deployment-details/dual-mode-configuration.mdx, v2/orchestrators/guides/monitoring-and-tooling/troubleshooting.mdx, v2/orchestrators/guides/operator-considerations/business-case.mdx, v2/orchestrators/guides/operator-considerations/operator-impact.mdx, v2/orchestrators/guides/operator-considerations/operator-rationale.mdx, v2/orchestrators/guides/tutorials/add-ai-to-video-node.mdx, v2/orchestrators/navigator.mdx, v2/orchestrators/setup/configure.mdx, v2/orchestrators/setup/rcs-requirements.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-15
 * @param {any} children - children prop.
 * @param {string} [variant="default"] - variant prop.
 * @param {string} [padding="1rem"] - padding prop.
 * @param {string} [borderRadius="8px"] - border Radius prop.
 * @param {string} [accentBar=""] - Optional accent border token applied to the left edge.
 * @param {object} [style={}] - style prop.
 * @example
 * <BorderedBox>Example content</BorderedBox>
 */
export const BorderedBox = ({
  children,
  variant = "default",
  padding = "1rem",
  borderRadius = "8px",
  accentBar = "",
  style = {},
}) => {
  const variants = {
    default: {
      border: "1px solid var(--border)",
      backgroundColor: "var(--card-background)",
    },
    accent: {
      border: "1px solid var(--accent)",
      backgroundColor: "var(--card-background)",
    },
    muted: {
      border: "1px solid var(--border)",
      backgroundColor: "transparent",
    },
  };
  const accentBarColors = {
    accent: "var(--accent)",
    positive: "var(--green-9)",
  };

  return (
    <div
      data-docs-bordered-box=""
      style={{
        ...variants[variant],
        padding: padding,
        borderRadius: borderRadius,
        ...(accentBarColors[accentBar]
          ? { borderLeft: `4px solid ${accentBarColors[accentBar]}` }
          : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * @component CenteredContainer
 * @category layout
 * @tier composite
 * @status stable
 * @description Centered Container layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies BorderedBox, FullWidthContainer
 * @usedIn v2/gateways/concepts/business-model.mdx, v2/gateways/concepts/capabilities.mdx, v2/gateways/concepts/role.mdx, v2/gateways/guides/advanced-operations/scaling.mdx, v2/gateways/guides/deployment-details/setup-requirements.mdx, v2/gateways/guides/node-pipelines/pipeline-configuration.mdx, v2/gateways/guides/operator-considerations/business-case.mdx, v2/gateways/guides/payments-and-pricing/clearinghouse-guide.mdx, v2/gateways/navigator.mdx, v2/orchestrators/concepts/capabilities.mdx, v2/orchestrators/concepts/incentive-model.mdx, v2/orchestrators/concepts/role.mdx, v2/orchestrators/guides/operator-considerations/business-case.mdx, v2/orchestrators/guides/operator-considerations/operator-impact.mdx, v2/orchestrators/guides/operator-considerations/operator-rationale.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-15
 * @param {any} children - children prop.
 * @param {string} [maxWidth="800px"] - max Width prop.
 * @param {string} [padding="0"] - padding prop.
 * @param {string} [preset="default"] - Named width/layout preset for common documentation patterns.
 * @param {string} [width=""] - Explicit width override.
 * @param {string} [minWidth=""] - Explicit min-width override.
 * @param {string} [marginRight=""] - Optional right margin override.
 * @param {string} [marginBottom=""] - Optional bottom margin override.
 * @param {string} [textAlign=""] - Optional text alignment override.
 * @param {object} [style={}] - style prop.
 * @example
 * <CenteredContainer>Example content</CenteredContainer>
 */
export const CenteredContainer = ({
  children,
  maxWidth = "800px",
  padding = "0",
  preset = "default",
  width = "",
  minWidth = "",
  marginRight = "",
  marginBottom = "",
  textAlign = "",
  style = {},
}) => {
  const presets = {
    default: {},
    fitContent: {
      width: "fit-content",
      minWidth: "fit-content",
    },
    readable70: {
      width: "70%",
      minWidth: "fit-content",
    },
    readable80: {
      width: "80%",
      minWidth: "fit-content",
    },
    readable90: {
      width: "90%",
    },
    wide900: {
      maxWidth: "900px",
    },
  };
  const presetStyle = presets[preset] || presets.default;

  return (
    <div
      style={{
        maxWidth: presetStyle.maxWidth || maxWidth,
        margin: "0 auto",
        padding: padding,
        ...(presetStyle.width ? { width: presetStyle.width } : {}),
        ...(presetStyle.minWidth ? { minWidth: presetStyle.minWidth } : {}),
        ...(width ? { width } : {}),
        ...(minWidth ? { minWidth } : {}),
        ...(marginRight ? { marginRight } : {}),
        ...(marginBottom ? { marginBottom } : {}),
        ...(textAlign ? { textAlign } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * @component FullWidthContainer
 * @category layout
 * @tier composite
 * @status stable
 * @description Full Width Container layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies BorderedBox, CenteredContainer
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-15
 * @param {any} children - children prop.
 * @param {any} backgroundColor - background Color prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <FullWidthContainer backgroundColor="example">Example content</FullWidthContainer>
 */
export const FullWidthContainer = ({
  children,
  backgroundColor,
  style = {},
}) => {
  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        ...(backgroundColor && { backgroundColor: backgroundColor }),
        ...style,
      }}
    >
      {children}
    </div>
  );
};
