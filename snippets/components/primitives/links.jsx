/**
 * CustomCallout - Customizable callout/alert box component
 *
 * @description
 * Displays a styled callout box with an icon and custom colors.
 * Automatically converts hex colors to rgba for proper opacity handling.
 *
 * @param {React.ReactNode} children - Content to display in the callout
 * @param {string} [icon="lightbulb"] - Icon name to display
 * @param {string} [color] - Primary color for icon, border, and background (defaults to theme accent)
 * @param {number} [iconSize=16] - Size of the icon in pixels
 * @param {string} [textSize="0.875rem"] - Font size for the text content
 * @param {string} [textColor] - Text color (defaults to match icon color)
 *
 * @example
 * <CustomCallout icon="info" color="#3b82f6">
 *   This is an important message!
 * </CustomCallout>
 *
 * @author Livepeer Documentation Team
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
 * BlinkingIcon - Animated blinking icon component
 *
 * @description
 * Displays an icon with a smooth blinking animation (fades between full and 30% opacity).
 * Animation cycles every 3 seconds.
 *
 * @param {string} [icon="terminal"] - Icon name to display
 * @param {number} [size=16] - Size of the icon in pixels
 * @param {string} [color] - Color of the icon (defaults to theme accent)
 *
 * @example
 * <BlinkingIcon icon="circle" color="#ff0000" size={20} />
 *
 * @author Livepeer Documentation Team
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
 * BlinkingTerminal - Alias for BlinkingIcon (backwards compatibility)
 *
 * @description
 * Legacy alias for BlinkingIcon component. Use BlinkingIcon instead.
 *
 * @deprecated Use BlinkingIcon instead
 * @author Livepeer Documentation Team
 */
const BlinkingTerminal = BlinkingIcon;

/**
 * DoubleIconLink - Link component with icons on both sides
 *
 * @description
 * Displays a link with an icon on the left and right, plus optional text prefix.
 * Commonly used for external links (e.g., GitHub links with external link indicator).
 *
 * @param {string} [label=""] - Link text/label
 * @param {string} [href="#"] - Link URL
 * @param {string} [text=""] - Optional text to display before the link
 * @param {string} [iconLeft="github"] - Icon to display on the left
 * @param {string} [iconRight="arrow-up-right"] - Icon to display on the right
 *
 * @example
 * <DoubleIconLink
 *   label="View on GitHub"
 *   href="https://github.com/livepeer/go-livepeer"
 *   iconLeft="github"
 *   iconRight="arrow-up-right"
 * />
 *
 * @author Livepeer Documentation Team
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
        <Icon
          icon={iconRight}
          size={12}
          color="var(--accent)"
        />
      </span>
    </>
  );
};

/**
 * GotoLink - Simple navigation link with icon
 *
 * @description
 * Displays a link with an icon, typically used for internal navigation.
 *
 * @param {string} label - Link text/label
 * @param {string} relativePath - Relative URL path
 * @param {string} [text=""] - Optional text to display before the link
 * @param {string} [icon="arrow-turn-down-right"] - Icon to display
 *
 * @example
 * <GotoLink
 *   label="Getting Started"
 *   relativePath="/guides/getting-started"
 *   icon="arrow-right"
 * />
 *
 * @author Livepeer Documentation Team
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
 * GotoCard - Card component for navigation
 *
 * @description
 * Wraps content in a Card component with a link, icon, and optional CTA.
 *
 * @param {string} label - Card title
 * @param {string} relativePath - Relative URL path
 * @param {string} [icon] - Icon to display (defaults to "arrow-turn-down-right")
 * @param {React.ReactNode} text - Card content
 * @param {string} [cta=""] - Call-to-action button text
 *
 * @example
 * <GotoCard
 *   label="API Reference"
 *   relativePath="/api/reference"
 *   icon="book"
 *   text="Complete API documentation"
 *   cta="View Docs"
 * />
 *
 * @author Livepeer Documentation Team
 *
 * Kind of an irrelevant component - just use card?
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
 * TipWithArrow - Callout box with an arrow indicator
 *
 * @description
 * Similar to CustomCallout but includes an arrow icon in the top-right corner.
 * Useful for tips that point to related content or actions.
 *
 * @param {React.ReactNode} children - Content to display in the tip
 * @param {string} [icon="lightbulb"] - Main icon to display on the left
 * @param {string} [arrowIcon="arrow-up-right"] - Arrow icon to display in top-right
 * @param {string} [color] - Primary color for icons, border, and background (defaults to theme accent)
 * @param {number} [iconSize=16] - Size of the main icon in pixels
 * @param {number} [arrowSize=16] - Size of the arrow icon in pixels
 *
 * @example
 * <TipWithArrow icon="info" arrowIcon="arrow-right" color="#3b82f6">
 *   Check out the related documentation for more details!
 * </TipWithArrow>
 *
 * @author Livepeer Documentation Team
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

const LinkArrow = ({ href, label, newline = true, borderColor }) => {
  const linkArrowStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    paddingTop: "0.2rem",
    ...(borderColor && { borderColor }),
  };
  return (
    <>
      {newline && <br />}
      <a href={href} target="_blank" style={linkArrowStyle}>
        {label}
        <Icon icon="arrow-up-right" size={12} color="var(--accent)" />
      </a>
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
