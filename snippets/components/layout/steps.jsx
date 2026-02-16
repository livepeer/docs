/**
 * StyledSteps - A customizable Steps component with color and styling support
 *
 * @description
 * Wraps the standard Steps component with custom CSS styling for icons, titles, and connecting lines.
 * Uses scoped styles with a unique ID to avoid conflicts.
 *
 * @param {React.ReactNode} children - Step components to render
 * @param {string} [iconColor] - Background color for step icons (defaults to #18794E)
 * @param {string} [titleColor] - Color for step titles (defaults to #3CB540 light / #2b9a66 dark)
 * @param {string} [lineColor] - Color for the connecting line between steps (defaults to #3CB540 light / #2b9a66 dark)
 * @param {string} [iconSize="24px"] - Size of the step icons (currently unused in implementation)
 *
 * @example
 * <StyledSteps iconColor="#ff0000" titleColor="#00ff00" lineColor="#0000ff">
 *   <StyledStep title="First Step" icon="check">Content here</StyledStep>
 *   <StyledStep title="Second Step" icon="arrow-right">More content</StyledStep>
 * </StyledSteps>
 *
 * @author Livepeer Documentation Team
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
          background-color: ${resolvedIconColor} !important;
        }
        #${stepsId} .steps > div > div.w-full > p {
          color: ${resolvedTitleColor} !important;
        }
        #${stepsId} > div > div > div.absolute.w-px {
          background-color: ${resolvedLineColor} !important;
        }
      `}</style>
      <div id={stepsId}>
        <Steps>{children}</Steps>
      </div>
    </>
  );
};

/**
 * StyledStep - A wrapper for the Step component with customizable title size
 *
 * @description
 * Wraps the standard Step component to provide consistent styling and title size control.
 * Designed to be used within StyledSteps.
 *
 * @param {string} title - The title of the step
 * @param {string} icon - Icon name to display
 * @param {string} [titleSize="h3"] - HTML heading size for the title (e.g., "h1", "h2", "h3")
 * @param {React.ReactNode} children - Content to display in the step
 *
 * @example
 * <StyledStep title="Installation" icon="download" titleSize="h2">
 *   Run npm install to get started
 * </StyledStep>
 *
 * @author Livepeer Documentation Team
 */
export const StyledStep = ({ title, icon, titleSize = "h3", children }) => {
  return (
    <Step title={title} icon={icon} titleSize={titleSize}>
      {children}
    </Step>
  );
};
