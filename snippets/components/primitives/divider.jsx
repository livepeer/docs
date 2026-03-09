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
 * @usedIn v2/about/livepeer-protocol/core-mechanisms.mdx, v2/about/livepeer-protocol/governance-model.mdx, v2/about/livepeer-protocol/livepeer-token.mdx, v2/about/livepeer-protocol/overview.mdx, v2/about/livepeer-protocol/technical-architecture.mdx, v2/about/livepeer-protocol/treasury.mdx, v2/about/portal.mdx, v2/about/resources/blockchain-contracts.mdx, v2/cn/about/livepeer-protocol/core-mechanisms.mdx, v2/cn/about/livepeer-protocol/governance-model.mdx, v2/cn/about/livepeer-protocol/livepeer-token.mdx, v2/cn/about/livepeer-protocol/overview.mdx, v2/cn/about/livepeer-protocol/technical-architecture.mdx, v2/cn/about/livepeer-protocol/treasury.mdx, v2/cn/about/portal.mdx, v2/cn/about/resources/blockchain-contracts.mdx, v2/cn/community/community-portal.mdx, v2/cn/developers/builder-opportunities/bug-bounties.mdx, v2/cn/developers/builder-opportunities/grants-and-programmes.mdx, v2/cn/developers/builder-opportunities/oss-contributions.mdx, v2/cn/developers/builder-opportunities/overview.mdx, v2/cn/developers/builder-opportunities/rfps-and-proposals.mdx, v2/cn/developers/portal.mdx, v2/cn/gateways/gateways-portal.mdx, v2/cn/gateways/run-a-gateway/configure/video-configuration.mdx, v2/cn/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/cn/home/about-livepeer/benefits.mdx, v2/cn/home/about-livepeer/ecosystem.mdx, v2/cn/home/about-livepeer/vision.mdx, v2/cn/home/mission-control.mdx, v2/cn/home/solutions/showcase.mdx, v2/cn/lpt/token-portal.mdx, v2/cn/orchestrators/orchestrators-portal.mdx, v2/cn/solutions/portal.mdx, v2/community/community-portal.mdx, v2/community/livepeer-community/community-guidelines.mdx, v2/developers/builder-opportunities/bug-bounties.mdx, v2/developers/builder-opportunities/grants-and-programmes.mdx, v2/developers/builder-opportunities/oss-contributions.mdx, v2/developers/builder-opportunities/overview.mdx, v2/developers/builder-opportunities/rfps-and-proposals.mdx, v2/developers/portal.mdx, v2/es/about/livepeer-protocol/core-mechanisms.mdx, v2/es/about/livepeer-protocol/governance-model.mdx, v2/es/about/livepeer-protocol/livepeer-token.mdx, v2/es/about/livepeer-protocol/overview.mdx, v2/es/about/livepeer-protocol/technical-architecture.mdx, v2/es/about/livepeer-protocol/treasury.mdx, v2/es/about/portal.mdx, v2/es/about/resources/blockchain-contracts.mdx, v2/es/community/community-portal.mdx, v2/es/developers/builder-opportunities/bug-bounties.mdx, v2/es/developers/builder-opportunities/grants-and-programmes.mdx, v2/es/developers/builder-opportunities/oss-contributions.mdx, v2/es/developers/builder-opportunities/overview.mdx, v2/es/developers/builder-opportunities/rfps-and-proposals.mdx, v2/es/developers/portal.mdx, v2/es/gateways/gateways-portal.mdx, v2/es/gateways/run-a-gateway/configure/video-configuration.mdx, v2/es/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/es/home/about-livepeer/benefits.mdx, v2/es/home/about-livepeer/ecosystem.mdx, v2/es/home/about-livepeer/vision.mdx, v2/es/home/mission-control.mdx, v2/es/home/solutions/showcase.mdx, v2/es/lpt/token-portal.mdx, v2/es/orchestrators/orchestrators-portal.mdx, v2/es/solutions/portal.mdx, v2/fr/about/livepeer-protocol/core-mechanisms.mdx, v2/fr/about/livepeer-protocol/governance-model.mdx, v2/fr/about/livepeer-protocol/livepeer-token.mdx, v2/fr/about/livepeer-protocol/overview.mdx, v2/fr/about/livepeer-protocol/technical-architecture.mdx, v2/fr/about/livepeer-protocol/treasury.mdx, v2/fr/about/portal.mdx, v2/fr/about/resources/blockchain-contracts.mdx, v2/fr/community/community-portal.mdx, v2/fr/developers/builder-opportunities/bug-bounties.mdx, v2/fr/developers/builder-opportunities/grants-and-programmes.mdx, v2/fr/developers/builder-opportunities/oss-contributions.mdx, v2/fr/developers/builder-opportunities/overview.mdx, v2/fr/developers/builder-opportunities/rfps-and-proposals.mdx, v2/fr/developers/portal.mdx, v2/fr/gateways/gateways-portal.mdx, v2/fr/gateways/run-a-gateway/configure/video-configuration.mdx, v2/fr/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/fr/home/about-livepeer/benefits.mdx, v2/fr/home/about-livepeer/ecosystem.mdx, v2/fr/home/about-livepeer/vision.mdx, v2/fr/home/mission-control.mdx, v2/fr/home/solutions/showcase.mdx, v2/fr/lpt/token-portal.mdx, v2/fr/orchestrators/orchestrators-portal.mdx, v2/fr/solutions/portal.mdx, v2/gateways/gateways-portal.mdx, v2/gateways/quickstart/gateway-setup.mdx, v2/gateways/run-a-gateway/configure/video-configuration.mdx, v2/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/home/about-livepeer/benefits.mdx, v2/home/about-livepeer/ecosystem.mdx, v2/home/about-livepeer/vision.mdx, v2/home/mission-control.mdx, v2/home/solutions/showcase.mdx, v2/orchestrators/orchestrators-portal.mdx, v2/resources/documentation-guide/snippets-inventory.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {string} [color="var(--border)"] - color prop.
 * @param {string} [middleText=""] - middle Text prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <CustomDivider />
 */
export const CustomDivider = ({
  color = "var(--border)",
  middleText = "",
  style = {},
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: style?.margin || "24px 0",
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
