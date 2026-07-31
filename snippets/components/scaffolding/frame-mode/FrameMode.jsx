/**
 * Frame Mode Headers - Custom heading components for Mintlify frame mode
 *
 * @description
 * These components provide styled headings (H1-H6) that work properly in Mintlify's
 * frame mode where default markdown headings may not render correctly.
 *
 * All components support optional icons at the beginning of the heading.
 * Icons use theme-aware colors that adapt to light/dark mode.
 *
 * @note Icon is a Mintlify global component - no import needed
 * @note Uses global CSS variables (--accent, --hero-text, --text, --border) for theming
 *
 * @author Alison Haire
 */

/**
 * @component PageHeader
 * @category scaffolding
 * @subcategory frame-mode
 * @status stable
 * @description Page-level header with icon, title, and subtitle for frame-mode pages.
  * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {any} title - title prop.
 * @param {any} subtitle - subtitle prop.
 * @param {any} description - description prop.
 * @param {string} children - The heading text
 * @param {any} titleColor - title Color prop.
 * @param {any} subtitleColor - subtitle Color prop.
 * @param {any} descriptionColor - description Color prop.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */

const PageHeader = ({
  title,
  subtitle,
  description,
  children,
  titleColor,
  subtitleColor,
  descriptionColor,
  className = "",
  style = {},
  ...rest
}) => {
  return (
    <div
      className={className}
      style={{
        textAlign: "center",
        marginTop: "var(--lp-spacing-8)",
        marginBottom: "3rem",
        ...style,
      }}
      {...rest}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          lineHeight: "1.2",
          margin: "2rem 0 1rem 0",
          opacity: 1,
          color: titleColor || "var(--lp-color-text-primary)",
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "500",
            opacity: 1,
          color: subtitleColor || "var(--lp-color-accent)",
          }}
        >
          {subtitle}
        </h2>
      )}
      {description && (
        <h5
          style={{
            fontSize: "1.1rem",
            marginTop: "var(--lp-spacing-6)",
            // maxWidth: "800px",
            // margin: "1.5rem auto 0",
            opacity: 1,
            color: descriptionColor || null,
          }}
        >
          {description}
        </h5>
      )}
      {children}
      <div style={{ width: "80%", margin: "0 auto" }}>
        <CustomDivider />
      </div>
    </div>
  );
};

/**
 * @component H1
 * @category scaffolding
 * @subcategory frame-mode
 * @status stable
 * @description Heading override with optional icon prefix for frame-mode pages.
  * @aiDiscoverability none
 * @usedIn v2/about/portal.mdx, v2/community/portal.mdx, v2/developers/portal.mdx, v2/gateways/portal.mdx, v2/home/mission-control.mdx, v2/orchestrators/portal.mdx, v2/resources/portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {any} children - children prop.
 * @param {any} icon - icon prop.
 * @param {number} [iconSize=32] - icon Size prop.
 * @param {any} iconColor - icon Color prop.
 * @param {string} [align="left"] - align prop.
 * @param {string} [gap="var(--lp-spacing-3)"] - gap prop.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const H1 = ({
  children,
  icon,
  iconSize = 32,
  iconColor,
  align = "left",
  gap = "var(--lp-spacing-3)",
  className = "",
  style = {},
  ...rest
}) => {
  const resolvedIconColor = iconColor || "var(--lp-color-accent)";

  const containerStyle = {
    display: icon ? "flex" : "block",
    alignItems: "center",
    gap: icon ? gap : 0,
    justifyContent:
      align === "center"
        ? "center"
        : align === "right"
          ? "flex-end"
          : "flex-start",
    textAlign: align,
  };

  const headingStyle = {
    margin: "2rem 0 1rem 0",
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: "1.2",
    color: "var(--lp-color-text-primary)",
    opacity: 1,
  };

  return (
    <div className={className} style={{ ...containerStyle, ...style }} {...rest}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h1 style={headingStyle}>{children}</h1>
    </div>
  );
};

/**
 * @component H2
 * @category scaffolding
 * @subcategory frame-mode
 * @status stable
 * @description Heading override with optional icon prefix for frame-mode pages.
  * @aiDiscoverability none
 * @usedIn v2/about/portal.mdx, v2/community/portal.mdx, v2/developers/portal.mdx, v2/gateways/portal.mdx, v2/home/mission-control.mdx, v2/orchestrators/portal.mdx, v2/resources/portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=28] - Size of the icon (default: 28)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="var(--lp-spacing-3)"] - Gap between icon and text (default: "var(--lp-spacing-3)")
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const H2 = ({
  children,
  icon,
  iconSize = 28,
  iconColor,
  align = "left",
  gap = "var(--lp-spacing-3)",
  className = "",
  style = {},
  ...rest
}) => {
  const resolvedIconColor = iconColor || "var(--lp-color-accent)";

  const containerStyle = {
    display: icon ? "flex" : "block",
    alignItems: "center",
    gap: icon ? gap : 0,
    justifyContent:
      align === "center"
        ? "center"
        : align === "right"
          ? "flex-end"
          : "flex-start",
    textAlign: align,
    marginBottom: "var(--lp-spacing-4)",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "var(--lp-color-text-primary)",
    opacity: 1,
  };

  return (
    <div className={className} style={{ ...containerStyle, ...style }} {...rest}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h2 style={headingStyle}>{children}</h2>
    </div>
  );
};

/**
 * @component H3
 * @category scaffolding
 * @subcategory frame-mode
 * @status stable
 * @description Heading override with optional icon prefix for frame-mode pages.
  * @aiDiscoverability none
 * @usedIn v2/community/portal.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=24] - Size of the icon (default: 24)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="var(--lp-spacing-2)"] - Gap between icon and text (default: "var(--lp-spacing-2)")
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const H3 = ({
  children,
  icon,
  iconSize = 24,
  iconColor,
  align = "left",
  gap = "var(--lp-spacing-2)",
  className = "",
  style = {},
  ...rest
}) => {
  const resolvedIconColor = iconColor || "var(--lp-color-accent)";

  const containerStyle = {
    display: icon ? "flex" : "block",
    alignItems: "center",
    gap: icon ? gap : 0,
    justifyContent:
      align === "center"
        ? "center"
        : align === "right"
          ? "flex-end"
          : "flex-start",
    textAlign: align,
    marginBottom: "var(--lp-spacing-3)",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "var(--lp-color-text-primary)",
    opacity: 1,
  };

  return (
    <div className={className} style={{ ...containerStyle, ...style }} {...rest}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h3 style={headingStyle}>{children}</h3>
    </div>
  );
};

/**
 * @component H4
 * @category scaffolding
 * @subcategory frame-mode
 * @status stable
 * @description Heading override with optional icon prefix for frame-mode pages.
  * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=20] - Size of the icon (default: 20)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="var(--lp-spacing-2)"] - Gap between icon and text (default: "var(--lp-spacing-2)")
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const H4 = ({
  children,
  icon,
  iconSize = 20,
  iconColor,
  align = "left",
  gap = "var(--lp-spacing-2)",
  className = "",
  style = {},
  ...rest
}) => {
  const resolvedIconColor = iconColor || "var(--lp-color-accent)";

  const containerStyle = {
    display: icon ? "flex" : "block",
    alignItems: "center",
    gap: icon ? gap : 0,
    justifyContent:
      align === "center"
        ? "center"
        : align === "right"
          ? "flex-end"
          : "flex-start",
    textAlign: align,
    marginBottom: "var(--lp-spacing-3)",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "var(--lp-color-text-primary)",
    opacity: 1,
  };

  return (
    <div className={className} style={{ ...containerStyle, ...style }} {...rest}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h4 style={headingStyle}>{children}</h4>
    </div>
  );
};

/**
 * @component H5
 * @category scaffolding
 * @subcategory frame-mode
 * @status stable
 * @description Heading override with optional icon prefix for frame-mode pages.
  * @aiDiscoverability none
 * @usedIn v2/about/portal.mdx, v2/community/portal.mdx, v2/developers/portal.mdx, v2/gateways/portal.mdx, v2/orchestrators/portal.mdx, v2/resources/portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=18] - Size of the icon (default: 18)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="var(--lp-spacing-2)"] - Gap between icon and text (default: "var(--lp-spacing-2)")
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const H5 = ({
  children,
  icon,
  iconSize = 18,
  iconColor,
  align = "left",
  gap = "var(--lp-spacing-2)",
  className = "",
  style = {},
  ...rest
}) => {
  const resolvedIconColor = iconColor || "var(--lp-color-accent)";

  const containerStyle = {
    display: icon ? "flex" : "block",
    alignItems: "center",
    gap: icon ? gap : 0,
    justifyContent:
      align === "center"
        ? "center"
        : align === "right"
          ? "flex-end"
          : "flex-start",
    textAlign: align,
    marginBottom: "var(--lp-spacing-2)",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1.125rem",
    fontWeight: "bold",
    color: "var(--lp-color-text-primary)",
    opacity: 1,
  };

  return (
    <div className={className} style={{ ...containerStyle, ...style }} {...rest}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h5 style={headingStyle}>{children}</h5>
    </div>
  );
};

/**
 * @component H6
 * @category scaffolding
 * @subcategory frame-mode
 * @status stable
 * @description Heading override with optional icon prefix for frame-mode pages.
  * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=16] - Size of the icon (default: 16)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="var(--lp-spacing-2)"] - Gap between icon and text (default: "var(--lp-spacing-2)")
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const H6 = ({
  children,
  icon,
  iconSize = 16,
  iconColor,
  align = "left",
  gap = "var(--lp-spacing-2)",
  className = "",
  style = {},
  ...rest
}) => {
  const resolvedIconColor = iconColor || "var(--lp-color-accent)";

  const containerStyle = {
    display: icon ? "flex" : "block",
    alignItems: "center",
    gap: icon ? gap : 0,
    justifyContent:
      align === "center"
        ? "center"
        : align === "right"
          ? "flex-end"
          : "flex-start",
    textAlign: align,
    marginBottom: "var(--lp-spacing-2)",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1rem",
    fontWeight: "bold",
    color: "var(--lp-color-text-primary)",
    opacity: 1,
  };

  return (
    <div className={className} style={{ ...containerStyle, ...style }} {...rest}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h6 style={headingStyle}>{children}</h6>
    </div>
  );
};

/**
 * @component P
 * @category scaffolding
 * @subcategory frame-mode
 * @status stable
 * @description Paragraph override with optional icon prefix for frame-mode pages.
  * @aiDiscoverability none
 * @usedIn v2/about/portal.mdx, v2/community/portal.mdx, v2/developers/portal.mdx, v2/gateways/portal.mdx, v2/home/mission-control.mdx, v2/orchestrators/portal.mdx, v2/resources/portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} children - The paragraph text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=16] - Size of the icon (default: 16)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="var(--lp-spacing-2)"] - Gap between icon and text (default: "var(--lp-spacing-2)")
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const P = ({
  children,
  icon,
  iconSize = 16,
  iconColor,
  align = "left",
  gap = "var(--lp-spacing-2)",
  className = "",
  style = {},
  ...rest
}) => {
  const resolvedIconColor = iconColor || "var(--p-icon-color)";

  const containerStyle = {
    display: icon ? "flex" : "block",
    alignItems: "center",
    gap: icon ? gap : 0,
    justifyContent:
      align === "center"
        ? "center"
        : align === "right"
          ? "flex-end"
          : "flex-start",
    textAlign: align,
  };

  const paragraphStyle = {
    margin: 0,
    color: "var(--lp-color-text-secondary)",
    opacity: 1,
  };

  return (
    <div className={className} style={{ ...containerStyle, ...style }} {...rest}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <p style={paragraphStyle}>{children}</p>
    </div>
  );
};

/**
 * @component FrameModeDivider
 * @category scaffolding
 * @subcategory frame-mode
 * @status stable
 * @description Horizontal rule divider for frame-mode pages. Distinct from elements/spacing/Divider.
 * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} color - Custom color for the divider (optional, defaults to theme border color)
 * @param {string} [margin="1.5rem 0"] - Vertical margin (default: "1.5rem 0")
 * @param {string} [opacity=0.2] - Opacity of the divider (default: 0.2)
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
const FrameModeDivider = ({ color, margin = "1.5rem 0", opacity = 0.2, className = "", style = {}, ...rest }) => {
  return (
    <hr
      className={className}
      style={{
        border: "none",
        borderTop: `1px solid ${color || "var(--lp-color-border-default)"}`,
        margin: margin,
        opacity: opacity,
        ...style,
      }}
      {...rest}
    />
  );
};

/**
 * @component Divider
 * @category scaffolding
 * @subcategory frame-mode
 * @status deprecated
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @deprecated Use FrameModeDivider to avoid collision with elements/spacing/Divider.
 * @see FrameModeDivider
 * @description Deprecated alias for FrameModeDivider. Maintained for backwards compatibility.
 * @aiDiscoverability none
 */
const Divider = FrameModeDivider;

export { PageHeader, H1, H2, H3, H4, H5, H6, P, FrameModeDivider, Divider };
