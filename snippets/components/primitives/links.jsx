/**
 * @component CustomCallout
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Displays a styled callout box with an icon and custom colors.
 * @contentAffinity universal
 * @owner docs
 * @dependencies BlinkingIcon, BlinkingTerminal, DoubleIconLink, GotoCard, GotoLink, LinkArrow, TipWithArrow
 * @usedIn v2/gateways/run-a-gateway/connect/connect-with-offerings.mdx, v2/gateways/run-a-gateway/publish/connect-with-offerings.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {React.ReactNode} children - Content to display in the callout
 * @param {string} [icon="lightbulb"] - Icon name to display
 * @param {string} color - Primary color for icon, border, and background (defaults to theme accent)
 * @param {number} [iconSize=16] - Size of the icon in pixels
 * @param {string} [textSize="0.875rem"] - Font size for the text content
 * @param {string} textColor - Text color (defaults to match icon color)
 * @example
 * <CustomCallout color="example" textColor="example">Example content</CustomCallout>
 */
const CustomCallout = ({
  children,
  icon = "lightbulb",
  color,
  iconSize = 16,
  textSize = "0.875rem",
  textColor,
}) => {
  // Use theme accent if no color specified
  const resolvedColor = color || "var(--accent)";
  const resolvedTextColor = textColor || resolvedColor;

  // Convert hex to rgba for proper opacity
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          padding: "16px 20px",
          borderRadius: "16px",
          border: `1px solid ${hexToRgba(resolvedColor, 0.2)}`,
          backgroundColor: hexToRgba(resolvedColor, 0.1),
          marginTop: "16px",
          marginBottom: "16px",
          overflow: "hidden",
        }}
      >
        <div style={{ marginTop: "2px", width: iconSize, flexShrink: 0 }}>
          <Icon icon={icon} size={iconSize} color={resolvedColor} />
        </div>
        <div
          style={{
            fontSize: textSize,
            color: resolvedTextColor,
            minWidth: 0,
            width: "100%",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

/**
 * @component BlinkingIcon
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Displays an icon with a smooth blinking animation (fades between full and 30% opacity).
 * @contentAffinity universal
 * @owner docs
 * @dependencies BlinkingTerminal, CustomCallout, DoubleIconLink, GotoCard, GotoLink, LinkArrow, TipWithArrow
 * @usedIn v2/about/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/gateways/gateways-portal.mdx, v2/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/home/mission-control.mdx, v2/lpt/token-portal.mdx, v2/orchestrators/old/orchestrators-portal.mdx, v2/orchestrators/portal.mdx, v2/orchestrators/v2-dev/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} [icon="terminal"] - Icon name to display
 * @param {number} [size=16] - Size of the icon in pixels
 * @param {string} color - Color of the icon (defaults to theme accent)
 * @example
 * <BlinkingIcon color="example" />
 */
const BlinkingIcon = ({ icon = "terminal", size = 16, color }) => {
  const resolvedColor = color || "var(--accent)";
  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
      <span
        style={{
          display: "inline-flex",
          animation: "blink 3s ease-in-out infinite",
        }}
      >
        <Icon icon={icon} size={size} color={resolvedColor} />
      </span>
    </>
  );
};

/**
 * @component BlinkingTerminal
 * @category primitives
 * @tier primitive
 * @status deprecated
 * @description Blinking Terminal primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies BlinkingIcon, CustomCallout, DoubleIconLink, GotoCard, GotoLink, LinkArrow, TipWithArrow
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates BlinkingIcon
 * @lastMeaningfulChange 2026-03-10
 * @deprecated BlinkingTerminal is deprecated and should not be used for new content.
 * @see BlinkingIcon
 * @example
 * <BlinkingTerminal />
 */
const BlinkingTerminal = BlinkingIcon;

/**
 * @component DoubleIconLink
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Displays a link with an icon on the left and right, plus optional text prefix.
 * @contentAffinity universal
 * @owner docs
 * @dependencies BlinkingIcon, BlinkingTerminal, CustomCallout, GotoCard, GotoLink, LinkArrow, TipWithArrow
 * @usedIn v2/gateways/_contextData_/docker-install.mdx, v2/gateways/about/architecture.mdx, v2/gateways/quickstart/gateway-setup.mdx, v2/gateways/references/configuration-flags.mdx, v2/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/gateways/run-a-gateway/configure/video-configuration-view.mdx, v2/gateways/run-a-gateway/configure/video-configuration.mdx, v2/gateways/run-a-gateway/install/docker-install.mdx, v2/gateways/run-a-gateway/install/install-overview.mdx, v2/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx, v2/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/using-gateways/choosing-a-gateway.mdx, v2/gateways/using-gateways/gateway-providers/daydream-gateway.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} [label=""] - Link text/label
 * @param {string} [href="#"] - Link URL
 * @param {string} [text=""] - Optional text to display before the link
 * @param {string} [iconLeft="github"] - Icon to display on the left
 * @param {string} [iconRight="arrow-up-right"] - Icon to display on the right
 * @example
 * <DoubleIconLink />
 */
const DoubleIconLink = ({
  label = "",
  href = "#",
  text = "",
  iconLeft = "github",
  iconRight = "arrow-up-right",
}) => {
  return (
    <>
      <span
        style={{
          whiteSpace: "nowrap",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.25rem",
          marginLeft: "0.3rem",
        }}
      >
        {text && <span style={{ marginRight: 8 }}>{text}</span>}
        <Icon icon={iconLeft} />
        <a href={href}>{label}</a>
        <Icon icon={iconRight} size={12} color="var(--accent)" />
      </span>
    </>
  );
};

/**
 * @component GotoLink
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Displays a link with an icon, typically used for internal navigation.
 * @contentAffinity universal
 * @owner docs
 * @dependencies BlinkingIcon, BlinkingTerminal, CustomCallout, DoubleIconLink, GotoCard, LinkArrow, TipWithArrow
 * @usedIn v2/about/livepeer-network/interfaces.mdx, v2/about/livepeer-network/marketplace.mdx, v2/about/livepeer-network/technical-architecture.mdx, v2/about/livepeer-protocol/technical-architecture.mdx, v2/developers/_archive/ai-inference-overview-old.mdx, v2/developers/_archive/ai-inference-workload-fit-old.mdx, v2/developers/_archive/ai-pipelines-byoc-old.mdx, v2/developers/_archive/developer-platforms/builder-hub.mdx, v2/developers/build/workload-fit.mdx, v2/gateways/about/quickstart.mdx, v2/gateways/gateway-tools/explorer.mdx, v2/gateways/run-a-gateway/install/community-projects.mdx, v2/gateways/run-a-gateway/install/install-overview.mdx, v2/gateways/run-a-gateway/run-a-gateway.mdx, v2/gateways/using-gateways/gateway-providers.mdx, v2/home/about-livepeer/vision.mdx, v2/home/primer.mdx, v2/orchestrators/old/advanced-setup/hosting-models.mdx, v2/orchestrators/operations/hosting-models.mdx, v2/orchestrators/v2-dev/advanced/hosting-models.mdx, v2/solutions/product-hub.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} label - Link text/label
 * @param {string} relativePath - Relative URL path
 * @param {string} [text=""] - Optional text to display before the link
 * @param {string} [icon="arrow-turn-down-right"] - Icon to display
 * @example
 * <GotoLink label="example" relativePath="example" />
 */
const GotoLink = ({
  label,
  relativePath,
  text = "",
  icon = "arrow-turn-down-right",
}) => {
  return (
    <span>
      <p style={{ marginRight: 8 }}>{text}</p>
      <Icon icon={icon} />
      <a href={relativePath} style={{ marginLeft: 6 }}>
        {label}
      </a>
    </span>
  );
};

/**
 * @component GotoCard
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Wraps content in a Card component with a link, icon, and optional CTA.
 * @contentAffinity universal
 * @owner docs
 * @dependencies BlinkingIcon, BlinkingTerminal, CustomCallout, DoubleIconLink, GotoLink, LinkArrow, TipWithArrow
 * @usedIn v2/about/livepeer-network/marketplace.mdx, v2/about/livepeer-network/technical-architecture.mdx, v2/about/livepeer-protocol/technical-architecture.mdx, v2/developers/_archive/ai-inference-overview-old.mdx, v2/developers/_archive/ai-inference-workload-fit-old.mdx, v2/developers/_archive/ai-pipelines-byoc-old.mdx, v2/developers/_archive/ai-pipelines-model-support-old.mdx, v2/developers/build/workload-fit.mdx, v2/developers/guides/developer-guides.mdx, v2/developers/guides/developer-help.mdx, v2/developers/guides/resources.mdx, v2/developers/opportunities/grants-and-programmes.mdx, v2/developers/opportunities/overview.mdx, v2/gateways/about/explainer.mdx, v2/gateways/gateway-tools/explorer.mdx, v2/gateways/gateway-tools/livepeer-tools.mdx, v2/gateways/run-a-gateway/install/community-projects.mdx, v2/home/about-livepeer/vision.mdx, v2/home/primer.mdx, v2/orchestrators/old/advanced-setup/hosting-models.mdx, v2/orchestrators/operations/hosting-models.mdx, v2/orchestrators/v2-dev/advanced/hosting-models.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} label - Card title
 * @param {string} relativePath - Relative URL path
 * @param {string} icon - Icon to display (defaults to "arrow-turn-down-right")
 * @param {React.ReactNode} text - Card content
 * @param {string} [cta=""] - Call-to-action button text
 * @param {any} props - props prop.
 * @example
 * <GotoCard label="example" relativePath="example" />
 */
const GotoCard = ({ label, relativePath, icon, text, cta = "", ...props }) => {
  icon = icon ? icon : "arrow-turn-down-right";
  return (
    <Card title={label} icon={icon} href={relativePath} cta={cta} {...props}>
      {text}
    </Card>
  );
};

/**
 * @component TipWithArrow
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Similar to CustomCallout but includes an arrow icon in the top-right corner.
 * @contentAffinity universal
 * @owner docs
 * @dependencies BlinkingIcon, BlinkingTerminal, CustomCallout, DoubleIconLink, GotoCard, GotoLink, LinkArrow
 * @usedIn v2/gateways/quickstart/gateway-setup.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {React.ReactNode} children - Content to display in the tip
 * @param {string} [icon="lightbulb"] - Main icon to display on the left
 * @param {string} [arrowIcon="arrow-up-right"] - Arrow icon to display in top-right
 * @param {string} color - Primary color for icons, border, and background (defaults to theme accent)
 * @param {number} [iconSize=16] - Size of the main icon in pixels
 * @param {number} [arrowSize=16] - Size of the arrow icon in pixels
 * @example
 * <TipWithArrow color="example">Example content</TipWithArrow>
 */
const TipWithArrow = ({
  children,
  icon = "lightbulb",
  arrowIcon = "arrow-up-right",
  color,
  iconSize = 16,
  arrowSize = 16,
}) => {
  // Use theme accent if no color specified
  const resolvedColor = color || "var(--accent)";

  // Convert hex to rgba for proper opacity
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          padding: "16px 20px",
          paddingRight: "48px", // Extra space for the arrow
          borderRadius: "16px",
          border: `1px solid ${hexToRgba(resolvedColor, 0.2)}`,
          backgroundColor: hexToRgba(resolvedColor, 0.1),
          marginTop: "16px",
          marginBottom: "16px",
          overflow: "hidden",
        }}
      >
        <div style={{ marginTop: "2px", width: iconSize, flexShrink: 0 }}>
          <Icon icon={icon} size={iconSize} color={resolvedColor} />
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            color: resolvedColor,
            minWidth: 0,
            width: "100%",
          }}
        >
          {children}
        </div>
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            opacity: 0.6,
          }}
        >
          <Icon icon={arrowIcon} size={arrowSize} color={resolvedColor} />
        </div>
      </div>
    </>
  );
};

/**
 * @component LinkArrow
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Link Arrow primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies BlinkingIcon, BlinkingTerminal, CustomCallout, DoubleIconLink, GotoCard, GotoLink, TipWithArrow
 * @usedIn v2/about/livepeer-overview.mdx, v2/about/livepeer-protocol/governance-model.mdx, v2/about/livepeer-protocol/livepeer-token.mdx, v2/about/livepeer-protocol/overview.mdx, v2/about/resources/blockchain-contracts.mdx, v2/community/livepeer-community/trending-topics.mdx, v2/community/livepeer-connect/events-and-community-streams.mdx, v2/developers/_archive/guides-res-contribution.mdx, v2/developers/guides/contribution-guide.mdx, v2/gateways/using-gateways/gateway-providers.mdx, v2/home/about-livepeer/benefits.mdx, v2/home/about-livepeer/ecosystem.mdx, v2/home/about-livepeer/evolution.mdx, v2/home/about-livepeer/vision.mdx, v2/home/get-started.mdx, v2/home/solutions/landscape.mdx, v2/home/solutions/showcase.mdx, v2/home/trending.mdx, v2/orchestrators/old/about-orchestrators/overview.mdx, v2/orchestrators/quickstart/join-a-pool.mdx, v2/orchestrators/v2-dev/concepts/overview.mdx, v2/orchestrators/v2-dev/get-started/join-a-pool.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} href - href prop.
 * @param {any} label - label prop.
 * @param {any} description - description prop.
 * @param {boolean} [newline=true] - newline prop.
 * @param {any} borderColor - border Color prop.
 * @example
 * <LinkArrow href="example" label="example" />
 */
const LinkArrow = ({
  href,
  label,
  description,
  newline = true,
  borderColor,
}) => {
  const linkArrowStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    width: "fit-content",
    ...(borderColor && { borderColor }),
  };
  return (
    <>
      {newline && <br />}
      <span style={linkArrowStyle}>
        <a href={href} target="_blank">
          {label}
        </a>
        <Icon icon="arrow-up-right" size={14} color="var(--accent)" />
      </span>
      {description && description}
      {description && <div style={{ height: "0.75rem" }} />}
    </>
  );
};

export {
  CustomCallout,
  BlinkingIcon,
  BlinkingTerminal,
  DoubleIconLink,
  GotoLink,
  GotoCard,
  TipWithArrow,
  LinkArrow,
};
