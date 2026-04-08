// FIX THIS - IT SHOULD DYNAMICALLY TAKE UP THE HEIGHT IT HAS
/**
 * @component CustomDivider
 * @category elements
 * @subcategory spacing
 * @status stable
 * @description Themed horizontal divider with optional centre text and Livepeer logo accents.
  * @aiDiscoverability none
 * @param {string} [color="var(--lp-color-border-default)"] - color prop.
 * @param {string} [middleText=""] - middle Text prop.
 * @param {string} [spacing="default"] - Named spacing preset for authored page layouts.
 * @param {object} [style={}] - style prop.
 * @example
 * <CustomDivider />
  * @param {string} [className=''] - Optional CSS class override.
 */
/**
 * @component InlineDivider
 * @category elements
 * @subcategory spacing
 * @status stable
 * @description Lightweight horizontal rule with controllable margin, padding, colour, and opacity. Use inside accordions, steps, or anywhere markdown `---` gives no spacing control.
 * @aiDiscoverability none
 * @usedIn v2/resources/changelog/ai-compute/ai-runner.mdx, v2/resources/changelog/ai-compute/comfystream.mdx, v2/resources/changelog/ai-compute/pytrickle.mdx, v2/resources/changelog/apis-sdks/livepeer-ai-go.mdx, v2/resources/changelog/apis-sdks/livepeer-ai-js.mdx, v2/resources/changelog/apis-sdks/livepeer-ai-python.mdx, v2/resources/changelog/apis-sdks/livepeer-js.mdx, v2/resources/changelog/apis-sdks/livepeer-python.mdx, v2/resources/changelog/docs.mdx, v2/resources/changelog/ecosystem/awesome-livepeer.mdx, v2/resources/changelog/ecosystem/website.mdx, v2/resources/changelog/protocol/go-livepeer.mdx, v2/resources/changelog/protocol/lips.mdx, v2/resources/changelog/protocol/naap.mdx, v2/resources/changelog/protocol/subgraph.mdx, v2/resources/changelog/tooling/explorer.mdx, v2/resources/changelog/tooling/livepeer-data.mdx, v2/resources/changelog/tooling/livepeer-python-gateway.mdx, v2/solutions/daydream/changelog.mdx, v2/solutions/embody/changelog.mdx, v2/solutions/frameworks/changelog.mdx, v2/solutions/livepeer-studio/changelog.mdx, v2/solutions/streamplace/changelog.mdx
 * @breakingChangeRisk medium
 * @lastMeaningfulChange 2026-04-09
 * @param {string} [margin="0.75rem 0"] - Margin around the divider.
 * @param {string} [padding="0"] - Padding around the divider.
 * @param {string} [color="var(--lp-color-border-default)"] - Line colour.
 * @param {number} [opacity=0.4] - Line opacity.
 * @param {string} [height="1px"] - Line thickness.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 * @example
 * <InlineDivider margin="0.5rem 0" />
 */
export const InlineDivider = ({
  margin = "0.75rem 0",
  padding = "0",
  color = "var(--lp-color-border-default)",
  opacity = 0.4,
  height = "1px",
  className = "",
  style = {},
  ...rest
}) => (
  <hr
    role="separator"
    className={className}
    style={{
      border: "none",
      margin,
      padding,
      height,
      backgroundColor: color,
      opacity,
      ...style,
    }}
    {...rest}
  />
);

export const CustomDivider = ({
  color = "var(--lp-color-border-default)",
  middleText = "",
  spacing = "default",
  style = {},
  className = "",
  ...rest
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
      role="separator"
      aria-orientation="horizontal"
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        ...spacingStyle,
        fontSize: style?.fontSize || "16px",
        height: "fit-content",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          marginRight: "var(--lp-spacing-px-8)",
          opacity: 0.2,
        }}
      >
        <Icon icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg" />
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "var(--lp-color-border-default)",
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
          background: "var(--lp-color-border-default)",
          opacity: 0.4,
        }}
      ></div>
      <span style={{ marginLeft: "var(--lp-spacing-px-8)", opacity: 0.2 }}>
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
          <Icon icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg" />
        </span>
      </span>
    </div>
  );
};

/**
 * @component Spacer
 * @category elements
 * @subcategory spacing
 * @status stable
 * @description Empty spacer div with configurable size and direction.
 * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} [size="var(--lp-spacing-4)"] - Size used by the component.
 * @param {string} [direction="vertical"] - Direction used by the component.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 * @example
 * <Spacer />
 */
export const Spacer = ({ size = "var(--lp-spacing-4)", direction = "vertical", className = "", style = {}, ...rest }) => {
  return (
    <div
      className={className}
      style={{
        ...(direction === "vertical"
          ? { height: size, width: "100%" }
          : { width: size, height: "100%" }),
        ...style,
      }}
      {...rest}
    />
  );
};
