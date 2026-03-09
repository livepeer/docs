/**
 * @component StyledSteps
 * @category layout
 * @tier composite
 * @status stable
 * @description Styled Steps layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StyledStep
 * @usedIn v2/cn/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/cn/gateways/run-a-gateway/connect/discover-offerings.mdx, v2/cn/gateways/run-a-gateway/install/docker-install.mdx, v2/cn/gateways/run-a-gateway/install/linux-install.mdx, v2/cn/gateways/run-a-gateway/install/windows-install.mdx, v2/cn/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx, v2/cn/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/cn/gateways/run-a-gateway/requirements/setup.mdx, v2/cn/gateways/run-a-gateway/run-a-gateway.mdx, v2/cn/orchestrators/quickstart/join-a-pool.mdx, v2/cn/orchestrators/quickstart/orchestrator-setup.mdx, v2/developers/ai-pipelines/byoc.mdx, v2/es/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/es/gateways/run-a-gateway/connect/discover-offerings.mdx, v2/es/gateways/run-a-gateway/install/docker-install.mdx, v2/es/gateways/run-a-gateway/install/linux-install.mdx, v2/es/gateways/run-a-gateway/install/windows-install.mdx, v2/es/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx, v2/es/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/es/gateways/run-a-gateway/requirements/setup.mdx, v2/es/gateways/run-a-gateway/run-a-gateway.mdx, v2/es/orchestrators/quickstart/join-a-pool.mdx, v2/es/orchestrators/quickstart/orchestrator-setup.mdx, v2/fr/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/fr/gateways/run-a-gateway/connect/discover-offerings.mdx, v2/fr/gateways/run-a-gateway/install/docker-install.mdx, v2/fr/gateways/run-a-gateway/install/linux-install.mdx, v2/fr/gateways/run-a-gateway/install/windows-install.mdx, v2/fr/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx, v2/fr/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/fr/gateways/run-a-gateway/requirements/setup.mdx, v2/fr/gateways/run-a-gateway/run-a-gateway.mdx, v2/fr/orchestrators/quickstart/join-a-pool.mdx, v2/fr/orchestrators/quickstart/orchestrator-setup.mdx, v2/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/gateways/run-a-gateway/connect/discover-offerings.mdx, v2/gateways/run-a-gateway/install/docker-install.mdx, v2/gateways/run-a-gateway/install/linux-install.mdx, v2/gateways/run-a-gateway/install/windows-install.mdx, v2/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx, v2/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/run-a-gateway/run-a-gateway.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/advanced-setup/hosting-models.mdx, v2/orchestrators/quickstart/join-a-pool.mdx, v2/orchestrators/quickstart/orchestrator-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} children - children prop.
 * @param {any} iconColor - icon Color prop.
 * @param {any} titleColor - title Color prop.
 * @param {any} lineColor - line Color prop.
 * @param {string} [iconSize="24px"] - icon Size prop.
 * @example
 * <StyledSteps iconColor="example" titleColor="example">Example content</StyledSteps>
 */
export const StyledSteps = ({
  children,
  iconColor,
  titleColor,
  lineColor,
  iconSize = "24px",
}) => {
  const stepsId = `styled-steps-${Math.random().toString(36).substr(2, 9)}`;
  const resolvedIconColor = iconColor || "var(--accent-dark, #18794E)";
  const resolvedTitleColor = titleColor || "var(--accent)";
  const resolvedLineColor = lineColor || "var(--accent)";

  return (
    <>
      <style>{`
        #${stepsId} .steps > div > div.absolute > div {
          background-color: ${resolvedIconColor};
        }
        #${stepsId} .steps > div > div.w-full > p {
          color: ${resolvedTitleColor};
        }
        #${stepsId} > div > div > div.absolute.w-px {
          background-color: ${resolvedLineColor};
        }
      `}</style>
      <div id={stepsId}>
        <Steps>{children}</Steps>
      </div>
    </>
  );
};

/**
 * @component StyledStep
 * @category layout
 * @tier composite
 * @status stable
 * @description Styled Step layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StyledSteps
 * @usedIn v2/cn/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/cn/gateways/run-a-gateway/connect/discover-offerings.mdx, v2/cn/gateways/run-a-gateway/install/docker-install.mdx, v2/cn/gateways/run-a-gateway/install/linux-install.mdx, v2/cn/gateways/run-a-gateway/install/windows-install.mdx, v2/cn/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx, v2/cn/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/cn/gateways/run-a-gateway/requirements/setup.mdx, v2/cn/gateways/run-a-gateway/run-a-gateway.mdx, v2/cn/orchestrators/quickstart/join-a-pool.mdx, v2/cn/orchestrators/quickstart/orchestrator-setup.mdx, v2/developers/ai-pipelines/byoc.mdx, v2/es/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/es/gateways/run-a-gateway/connect/discover-offerings.mdx, v2/es/gateways/run-a-gateway/install/docker-install.mdx, v2/es/gateways/run-a-gateway/install/linux-install.mdx, v2/es/gateways/run-a-gateway/install/windows-install.mdx, v2/es/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx, v2/es/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/es/gateways/run-a-gateway/requirements/setup.mdx, v2/es/gateways/run-a-gateway/run-a-gateway.mdx, v2/es/orchestrators/quickstart/join-a-pool.mdx, v2/es/orchestrators/quickstart/orchestrator-setup.mdx, v2/fr/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/fr/gateways/run-a-gateway/connect/discover-offerings.mdx, v2/fr/gateways/run-a-gateway/install/docker-install.mdx, v2/fr/gateways/run-a-gateway/install/linux-install.mdx, v2/fr/gateways/run-a-gateway/install/windows-install.mdx, v2/fr/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx, v2/fr/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/fr/gateways/run-a-gateway/requirements/setup.mdx, v2/fr/gateways/run-a-gateway/run-a-gateway.mdx, v2/fr/orchestrators/quickstart/join-a-pool.mdx, v2/fr/orchestrators/quickstart/orchestrator-setup.mdx, v2/gateways/run-a-gateway/configure/ai-configuration.mdx, v2/gateways/run-a-gateway/connect/discover-offerings.mdx, v2/gateways/run-a-gateway/install/docker-install.mdx, v2/gateways/run-a-gateway/install/linux-install.mdx, v2/gateways/run-a-gateway/install/windows-install.mdx, v2/gateways/run-a-gateway/requirements/on-chain setup/fund-gateway.mdx, v2/gateways/run-a-gateway/requirements/on-chain setup/on-chain.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/run-a-gateway/run-a-gateway.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/advanced-setup/hosting-models.mdx, v2/orchestrators/quickstart/join-a-pool.mdx, v2/orchestrators/quickstart/orchestrator-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} title - title prop.
 * @param {any} icon - icon prop.
 * @param {string} [titleSize="h3"] - title Size prop.
 * @param {any} children - children prop.
 * @example
 * <StyledStep title="example" icon="example">Example content</StyledStep>
 */
export const StyledStep = ({ title, icon, titleSize = "h3", children }) => {
  return (
    <Step title={title} icon={icon} titleSize={titleSize}>
      {children}
    </Step>
  );
};
