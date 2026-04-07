/**
 * @component BorderedBox
 * @category wrappers
 * @subcategory containers
 * @status stable
 * @description Bordered container with configurable radius and background.
  * @aiDiscoverability none
 * @param {any} children - children prop.
 * @param {string} [variant="default"] - variant prop.
 * @param {string} [padding="1rem"] - padding prop.
 * @param {string} [borderRadius="8px"] - border Radius prop.
 * @param {string} [accentBar=""] - Optional accent border token applied to the left edge.
 * @param {object} [style={}] - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const BorderedBox = ({
  children,
  variant = "default",
  padding = "1rem",
  borderRadius = "8px",
  accentBar = "",
  style = {},
  className = "",
  ...rest
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
      data-accent-bar={accentBarColors[accentBar] ? "" : undefined}
      className={className}
      style={{
        ...variants[variant],
        padding: padding,
        borderRadius: borderRadius,
        ...(accentBarColors[accentBar]
          ? { position: "relative", '--accent-bar-color': accentBarColors[accentBar] }
          : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

/**
 * @component CenteredContainer
 * @category wrappers
 * @subcategory containers
 * @status stable
 * @description Horizontally centred container with configurable max-width.
  * @aiDiscoverability none
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
  * @param {string} [className=''] - Optional CSS class override.
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
  className = "",
  ...rest
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
      className={className}
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
      {...rest}
    >
      {children}
    </div>
  );
};

/**
 * @component FullWidthContainer
 * @category wrappers
 * @subcategory containers
 * @status stable
 * @description Full-viewport-width container that breaks out of parent padding.
  * @aiDiscoverability none
 * @param {any} children - children prop.
 * @param {any} backgroundColor - background Color prop.
 * @param {object} [style={}] - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const FullWidthContainer = ({
  children,
  backgroundColor,
  style = {},
  className = "",
  ...rest
}) => {
  return (
    <div
      className={className}
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
      {...rest}
    >
      {children}
    </div>
  );
};
