/**
 * @component BorderedBox
 * @category layout
 * @tier composite
 * @status stable
 * @description Bordered Box layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies CenteredContainer, FullWidthContainer
 * @usedIn v2/cn/developers/builder-opportunities/bug-bounties.mdx, v2/cn/developers/builder-opportunities/grants-and-programmes.mdx, v2/cn/developers/builder-opportunities/oss-contributions.mdx, v2/cn/developers/builder-opportunities/overview.mdx, v2/cn/developers/builder-opportunities/rfps-and-proposals.mdx, v2/cn/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/cn/gateways/run-a-gateway/requirements/setup.mdx, v2/community/livepeer-community/community-guidelines.mdx, v2/developers/ai-inference-on-livepeer/overview.mdx, v2/developers/ai-inference-on-livepeer/workload-fit.mdx, v2/developers/ai-pipelines/byoc.mdx, v2/developers/ai-pipelines/overview.mdx, v2/developers/ai-pipelines/workload-fit.mdx, v2/developers/builder-opportunities/bug-bounties.mdx, v2/developers/builder-opportunities/grants-and-programmes.mdx, v2/developers/builder-opportunities/oss-contributions.mdx, v2/developers/builder-opportunities/overview.mdx, v2/developers/builder-opportunities/rfps-and-proposals.mdx, v2/developers/developer-path.mdx, v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx, v2/developers/quickstart/video/video-streaming-101.mdx, v2/es/developers/builder-opportunities/bug-bounties.mdx, v2/es/developers/builder-opportunities/grants-and-programmes.mdx, v2/es/developers/builder-opportunities/oss-contributions.mdx, v2/es/developers/builder-opportunities/overview.mdx, v2/es/developers/builder-opportunities/rfps-and-proposals.mdx, v2/es/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/es/gateways/run-a-gateway/requirements/setup.mdx, v2/fr/developers/builder-opportunities/bug-bounties.mdx, v2/fr/developers/builder-opportunities/grants-and-programmes.mdx, v2/fr/developers/builder-opportunities/oss-contributions.mdx, v2/fr/developers/builder-opportunities/overview.mdx, v2/fr/developers/builder-opportunities/rfps-and-proposals.mdx, v2/fr/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/fr/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx, v2/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/using-gateways/choosing-a-gateway.mdx, v2/gateways/using-gateways/gateway-providers/cloud-spe-gateway.mdx, v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx, v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/advanced-setup/hosting-models.mdx, v2/orchestrators/earnings.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {string} [variant="default"] - variant prop.
 * @param {string} [padding="1rem"] - padding prop.
 * @param {string} [borderRadius="8px"] - border Radius prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <BorderedBox>Example content</BorderedBox>
 */
export const BorderedBox = ({
  children,
  variant = "default",
  padding = "1rem",
  borderRadius = "8px",
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

  return (
    <div
      style={{
        ...variants[variant],
        padding: padding,
        borderRadius: borderRadius,
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
 * @usedIn none
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {string} [maxWidth="800px"] - max Width prop.
 * @param {string} [padding="0"] - padding prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <CenteredContainer>Example content</CenteredContainer>
 */
export const CenteredContainer = ({
  children,
  maxWidth = "800px",
  padding = "0",
  style = {},
}) => {
  return (
    <div
      style={{
        maxWidth: maxWidth,
        margin: "0 auto",
        padding: padding,
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
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
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
