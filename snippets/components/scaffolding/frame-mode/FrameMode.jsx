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
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H1 - Custom H1 heading component for frame mode
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies Divider, H1, H2, H3, H4, H5, H6, P
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} title - title prop.
 * @param {any} subtitle - subtitle prop.
 * @param {any} description - description prop.
 * @param {string} children - The heading text
 * @param {any} titleColor - title Color prop.
 * @param {any} subtitleColor - subtitle Color prop.
 * @param {any} descriptionColor - description Color prop.
 * @example
 * <PageHeader title="example" subtitle="example">Example content</PageHeader>
 */

const PageHeader = ({
  title,
  subtitle,
  description,
  children,
  titleColor,
  subtitleColor,
  descriptionColor,
}) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
        marginBottom: "3rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          lineHeight: "1.2",
          margin: "2rem 0 1rem 0",
          opacity: 1,
          color: titleColor || "var(--hero-text)",
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
          color: subtitleColor || "var(--accent)",
          }}
        >
          {subtitle}
        </h2>
      )}
      {description && (
        <h5
          style={{
            fontSize: "1.1rem",
            marginTop: "1.5rem",
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
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H1 page-structure component for frame-mode and portal layout scaffolding.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies Divider, H2, H3, H4, H5, H6, P, PageHeader
 * @usedIn v2/about/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/orchestrators/old/orchestrators-portal.mdx, v2/orchestrators/portal.mdx, v2/orchestrators/v2-dev/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} children - children prop.
 * @param {any} icon - icon prop.
 * @param {number} [iconSize=32] - icon Size prop.
 * @param {any} iconColor - icon Color prop.
 * @param {string} [align="left"] - align prop.
 * @param {string} [gap="0.75rem"] - gap prop.
 * @example
 * <H1 icon="example" iconColor="example">Example content</H1>
 */
const H1 = ({
  children,
  icon,
  iconSize = 32,
  iconColor,
  align = "left",
  gap = "0.75rem",
}) => {
  const resolvedIconColor = iconColor || "var(--accent)";

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
    color: "var(--hero-text)",
    opacity: 1,
  };

  return (
    <div style={containerStyle}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h1 style={headingStyle}>{children}</h1>
    </div>
  );
};

/**
 * @component H2
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H2 - Custom H2 heading component for frame mode
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies Divider, H1, H3, H4, H5, H6, P, PageHeader
 * @usedIn v2/about/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/orchestrators/old/orchestrators-portal.mdx, v2/orchestrators/portal.mdx, v2/orchestrators/v2-dev/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=28] - Size of the icon (default: 28)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="0.75rem"] - Gap between icon and text (default: "0.75rem")
 * @example
 * <H2 icon="example" iconColor="example">Example content</H2>
 */
const H2 = ({
  children,
  icon,
  iconSize = 28,
  iconColor,
  align = "left",
  gap = "0.75rem",
}) => {
  const resolvedIconColor = iconColor || "var(--accent)";

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
    marginBottom: "1rem",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "var(--hero-text)",
    opacity: 1,
  };

  return (
    <div style={containerStyle}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h2 style={headingStyle}>{children}</h2>
    </div>
  );
};

/**
 * @component H3
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H3 - Custom H3 heading component for frame mode
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies Divider, H1, H2, H4, H5, H6, P, PageHeader
 * @usedIn v2/community/community-portal.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=24] - Size of the icon (default: 24)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="0.5rem"] - Gap between icon and text (default: "0.5rem")
 * @example
 * <H3 icon="example" iconColor="example">Example content</H3>
 */
const H3 = ({
  children,
  icon,
  iconSize = 24,
  iconColor,
  align = "left",
  gap = "0.5rem",
}) => {
  const resolvedIconColor = iconColor || "var(--accent)";

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
    marginBottom: "0.75rem",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "var(--hero-text)",
    opacity: 1,
  };

  return (
    <div style={containerStyle}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h3 style={headingStyle}>{children}</h3>
    </div>
  );
};

/**
 * @component H4
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H4 - Custom H4 heading component for frame mode
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies Divider, H1, H2, H3, H5, H6, P, PageHeader
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=20] - Size of the icon (default: 20)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="0.5rem"] - Gap between icon and text (default: "0.5rem")
 * @example
 * <H4 icon="example" iconColor="example">Example content</H4>
 */
const H4 = ({
  children,
  icon,
  iconSize = 20,
  iconColor,
  align = "left",
  gap = "0.5rem",
}) => {
  const resolvedIconColor = iconColor || "var(--accent)";

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
    marginBottom: "0.75rem",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "var(--hero-text)",
    opacity: 1,
  };

  return (
    <div style={containerStyle}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h4 style={headingStyle}>{children}</h4>
    </div>
  );
};

/**
 * @component H5
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H5 - Custom H5 heading component for frame mode
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies Divider, H1, H2, H3, H4, H6, P, PageHeader
 * @usedIn v2/about/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/gateways/gateways-portal.mdx, v2/orchestrators/old/orchestrators-portal.mdx, v2/orchestrators/portal.mdx, v2/orchestrators/v2-dev/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=18] - Size of the icon (default: 18)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="0.5rem"] - Gap between icon and text (default: "0.5rem")
 * @example
 * <H5 icon="example" iconColor="example">Example content</H5>
 */
const H5 = ({
  children,
  icon,
  iconSize = 18,
  iconColor,
  align = "left",
  gap = "0.5rem",
}) => {
  const resolvedIconColor = iconColor || "var(--accent)";

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
    marginBottom: "0.5rem",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1.125rem",
    fontWeight: "bold",
    color: "var(--hero-text)",
    opacity: 1,
  };

  return (
    <div style={containerStyle}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h5 style={headingStyle}>{children}</h5>
    </div>
  );
};

/**
 * @component H6
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H6 - Custom H6 heading component for frame mode
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies Divider, H1, H2, H3, H4, H5, P, PageHeader
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=16] - Size of the icon (default: 16)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="0.5rem"] - Gap between icon and text (default: "0.5rem")
 * @example
 * <H6 icon="example" iconColor="example">Example content</H6>
 */
const H6 = ({
  children,
  icon,
  iconSize = 16,
  iconColor,
  align = "left",
  gap = "0.5rem",
}) => {
  const resolvedIconColor = iconColor || "var(--accent)";

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
    marginBottom: "0.5rem",
  };

  const headingStyle = {
    margin: 0,
    fontSize: "1rem",
    fontWeight: "bold",
    color: "var(--hero-text)",
    opacity: 1,
  };

  return (
    <div style={containerStyle}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <h6 style={headingStyle}>{children}</h6>
    </div>
  );
};

/**
 * @component P
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description P - Custom paragraph component for frame mode
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies Divider, H1, H2, H3, H4, H5, H6, PageHeader
 * @usedIn v2/about/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx, v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx, v2/orchestrators/old/orchestrators-portal.mdx, v2/orchestrators/portal.mdx, v2/orchestrators/v2-dev/orchestrators-portal.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} children - The paragraph text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} [iconSize=16] - Size of the icon (default: 16)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} [align="left"] - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} [gap="0.5rem"] - Gap between icon and text (default: "0.5rem")
 * @example
 * <P icon="example" iconColor="example">Example content</P>
 */
const P = ({
  children,
  icon,
  iconSize = 16,
  iconColor,
  align = "left",
  gap = "0.5rem",
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
    color: "var(--text)",
    opacity: 1,
  };

  return (
    <div style={containerStyle}>
      {icon && <Icon icon={icon} size={iconSize} color={resolvedIconColor} />}
      <p style={paragraphStyle}>{children}</p>
    </div>
  );
};

/**
 * @component Divider
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Renders a horizontal rule (---) with proper styling for frame mode.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies H1, H2, H3, H4, H5, H6, P, PageHeader
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} color - Custom color for the divider (optional, defaults to theme border color)
 * @param {string} [margin="1.5rem 0"] - Vertical margin (default: "1.5rem 0")
 * @param {string} [opacity=0.2] - Opacity of the divider (default: 0.2)
 * @example
 * <Divider color="example" />
 */
const Divider = ({ color, margin = "1.5rem 0", opacity = 0.2 }) => {
  return (
    <hr
      style={{
        border: "none",
        borderTop: `1px solid ${color || "var(--border)"}`,
        margin: margin,
        opacity: opacity,
      }}
    />
  );
};

export { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider };
