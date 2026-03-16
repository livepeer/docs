/**
 * BorderedBox - Theme-aware bordered container component
 *
 * @description
 * Provides a bordered box container without requiring inline styles in MDX files.
 * All styling uses CSS Custom Properties for theme awareness.
 *
 * @param {React.ReactNode} children - Content to display
 * @param {string} [variant="default"] - Border variant: "default" | "accent" | "muted"
 * @param {string} [padding="1rem"] - Internal padding (CSS value)
 * @param {string} [borderRadius="8px"] - Border radius (CSS value)
 * @param {object} [style={}] - Additional inline styles
 *
 * @example
 * <BorderedBox variant="accent" padding="1.5rem">
 *   Important content here
 * </BorderedBox>
 *
 * @author Livepeer Documentation Team
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
 * CenteredContainer - Centered content container component
 *
 * @description
 * Provides a centered container without requiring inline styles in MDX files.
 *
 * @param {React.ReactNode} children - Content to display
 * @param {string} [maxWidth="800px"] - Maximum width (CSS value)
 * @param {string} [padding="0"] - Internal padding (CSS value)
 * @param {object} [style={}] - Additional inline styles
 *
 * @example
 * <CenteredContainer maxWidth="600px">
 *   Centered content here
 * </CenteredContainer>
 *
 * @author Livepeer Documentation Team
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
 * FullWidthContainer - Full-width breakout container component
 *
 * @description
 * Provides a full-width container that breaks out of parent padding.
 * Useful for hero sections, full-width images, etc.
 *
 * @param {React.ReactNode} children - Content to display
 * @param {string} [backgroundColor] - Background color (CSS value or CSS variable)
 * @param {object} [style={}] - Additional inline styles
 *
 * @example
 * <FullWidthContainer backgroundColor="var(--accent)">
 *   Full-width hero content
 * </FullWidthContainer>
 *
 * @author Livepeer Documentation Team
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
