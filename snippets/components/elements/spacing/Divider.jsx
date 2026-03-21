// FIX THIS - IT SHOULD DYNAMICALLY TAKE UP THE HEIGHT IT HAS
/**
 * @component CustomDivider
 * @type elements
 * @subniche spacing
 * @status stable
 * @description Themed horizontal divider with optional centre text and Livepeer logo accents.
 * @accepts style, className, ...rest
  * @aiDiscoverability none
 * @param {string} [color="var(--border)"] - color prop.
 * @param {string} [middleText=""] - middle Text prop.
 * @param {string} [spacing="default"] - Named spacing preset for authored page layouts.
 * @param {object} [style={}] - style prop.
 * @example
 * <CustomDivider />
  * @param {string} [className=''] - Optional CSS class override.
 */
export const CustomDivider = ({
  color = "var(--border)",
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
