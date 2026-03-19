/**
 * @component StyledSteps
 * @type wrappers
 * @subniche steps
 * @status stable
 * @description Wrapper around Mintlify Steps with custom icon styling via injected CSS.
 * @accepts children, className, style, ...rest
 * @param {any} children - children prop.
 * @param {any} iconColor - icon Color prop.
 * @param {any} titleColor - title Color prop.
 * @param {any} lineColor - line Color prop.
 * @param {string} [iconSize="24px"] - icon Size prop.
 */
export const StyledSteps = ({
  children,
  iconColor,
  titleColor,
  lineColor,
  iconSize = "24px",
  className = "",
  style = {},
  ...rest
}) => {
  const stepsId = `styled-steps-${Math.random().toString(36).substr(2, 9)}`;
  const resolvedIconColor = iconColor || "var(--accent-dark, #18794E)";
  const resolvedTitleColor = titleColor || "var(--accent)";
  const resolvedLineColor = lineColor || "var(--accent)";

  return (
    <div className={className} style={style} {...rest}>
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
    </div>
  );
};

/**
 * @component StyledStep
 * @type wrappers
 * @subniche steps
 * @status stable
 * @description Single step with configurable icon, size, and colour.
 * @accepts children, className, style, ...rest
 * @param {any} title - title prop.
 * @param {any} icon - icon prop.
 * @param {string} [titleSize="h3"] - title Size prop.
 * @param {any} children - children prop.
 */
export const StyledStep = ({ title, icon, titleSize = "h3", children, className = "", style = {}, ...rest }) => {
  return (
    <Step title={title} icon={icon} titleSize={titleSize} className={className} style={style} {...rest}>
      {children}
    </Step>
  );
};
