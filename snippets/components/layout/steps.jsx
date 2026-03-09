/**
 * @component StyledSteps
 * @category layout
 * @tier composite
 * @status stable
 * @description Wraps Mintlify Steps with wrapper-scoped CSS variables for icon, title, and connector styling.
 * @contentAffinity tutorial
 * @owner @livepeer/docs-team
 * @dependencies StyledStep
 * @usedIn v2/developers/ai-pipelines/byoc.mdx, v2/lpt/delegation/getting-started.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 *
 * @param {React.ReactNode} children - Step components to render.
 * @param {string} [iconColor] - Background color for step icons.
 * @param {string} [titleColor] - Color for step titles.
 * @param {string} [lineColor] - Color for the connecting line between steps.
 * @param {string} [iconSize="24px"] - Size token reserved for step icons.
 *
 * @example
 * <StyledSteps iconColor="#ff0000" titleColor="#00ff00" lineColor="#0000ff">
 *   <StyledStep title="First Step" icon="check">Content here</StyledStep>
 *   <StyledStep title="Second Step" icon="arrow-right">More content</StyledStep>
 * </StyledSteps>
 */
export const StyledSteps = ({
  children,
  iconColor,
  titleColor,
  lineColor,
  iconSize = "24px",
}) => {
  const resolvedIconColor = iconColor || "var(--accent-dark, #18794E)";
  const resolvedTitleColor = titleColor || "var(--accent)";
  const resolvedLineColor = lineColor || "var(--accent)";
  const wrapperStyle = {
    "--lp-styled-steps-icon-color": resolvedIconColor,
    "--lp-styled-steps-title-color": resolvedTitleColor,
    "--lp-styled-steps-line-color": resolvedLineColor,
  };

  return (
    <div data-lp-styled-steps style={wrapperStyle}>
      <Steps>{children}</Steps>
    </div>
  );
};

/**
 * @component StyledStep
 * @category layout
 * @tier composite
 * @status stable
 * @description Wraps Mintlify Step to keep title sizing consistent inside StyledSteps flows.
 * @contentAffinity tutorial
 * @owner @livepeer/docs-team
 * @dependencies StyledSteps
 * @usedIn v2/developers/ai-pipelines/byoc.mdx, v2/lpt/delegation/getting-started.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 *
 * @param {string} title - Title text rendered for the step.
 * @param {string} icon - Icon name rendered for the step marker.
 * @param {string} [titleSize="h3"] - Heading size passed through to Step.
 * @param {React.ReactNode} children - Content rendered inside the step body.
 *
 * @example
 * <StyledStep title="Installation" icon="download" titleSize="h2">
 *   Run npm install to get started
 * </StyledStep>
 */
export const StyledStep = ({ title, icon, titleSize = "h3", children }) => {
  return (
    <Step title={title} icon={icon} titleSize={titleSize}>
      {children}
    </Step>
  );
};
