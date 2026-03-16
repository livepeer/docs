/**
 * @component PageHeader
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Renders the page header component
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies H1, H2, H3, H4
 * @usedIn v2/resources/documentation-guide/component-library/component-library.mdx
 *   v2/resources/documentation-guide/component-library/display.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 *   v2/resources/documentation-guide/style-guide.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {React.ReactNode} subtitle - Subtitle text rendered by the component.
 * @param {React.ReactNode} description - Primary content rendered by the component.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} titleColor - Title color used by the component.
 * @param {string} subtitleColor - Subtitle color used by the component.
 * @param {string} descriptionColor - Description color used by the component.
 *
 * @example
 * <PageHeader title="Example" subtitle="Example" description="Example" />
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
  if (!title && !subtitle && !description && children == null) {
    console.warn("[PageHeader] Missing heading content");
    return null;
  }

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

// import { Starfield as HeroStarfield } from "/snippets/components/page-structure/heroGif.jsx";
// const PageHeader2 = ({
//   title,
//   subtitle,
//   description,
//   children,
//   titleColor,
//   subtitleColor,
//   descriptionColor,
// }) => {
//   return (
//     <div
//       style={{
//         position: "relative",
//         overflow: "hidden",
//         textAlign: "center",
//         marginTop: "2rem",
//         marginBottom: "3rem",
//       }}
//     >
//       {/* Background */}
//       <HeroStarfield />

//       {/* Content */}
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <h1
//           style={{
//             fontSize: "2.5rem",
//             fontWeight: "bold",
//             lineHeight: "1.2",
//             marginBottom: "1rem",
//           }}
//         >
//           {title}
//         </h1>

//         {subtitle && (
//           <h2
//             style={{
//               fontSize: "1.5rem",
//               fontWeight: "500",
//             }}
//           >
//             {subtitle}
//           </h2>
//         )}

//         {description && (
//           <h5
//             style={{
//               fontSize: "1.1rem",
//               marginTop: "1.5rem",
//             }}
//           >
//             {description}
//           </h5>
//         )}

//         {children}

//         <div style={{ width: "80%", margin: "0 auto" }}>
//           <CustomDivider />
//         </div>
//       </div>
//     </div>
//   );
// };

/**
 * @component H1
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Renders the h1 component
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies H2, H3, H4, H5
 * @usedIn v2/about/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx
 *   v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx
 *   v2/orchestrators/orchestrators-portal.mdx
 *   v2/resources/documentation-guide/component-library/component-library.mdx
 *   v2/resources/documentation-guide/component-library/display.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 *   v2/resources/documentation-guide/style-guide.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} icon - Icon configuration used by the component.
 * @param {number} [iconSize=32] - Icon configuration used by the component.
 * @param {string} iconColor - Icon configuration used by the component.
 * @param {string} [align="left"] - Align used by the component.
 * @param {string} [gap="0.75rem"] - Gap used by the component.
 *
 * @example
 * <H1 icon="sparkles" iconColor="value" />
 */
const H1 = ({
  children,
  icon,
  iconSize = 32,
  iconColor,
  align = "left",
  gap = "0.75rem",
}) => {
  if (children == null && !icon) {
    console.warn("[H1] Missing heading content");
    return null;
  }

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
 * H2 - Custom H2 heading component for frame mode
 *
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} iconSize - Size of the icon (default: 28)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} align - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} gap - Gap between icon and text (default: "0.75rem")
 */
/**
 * @component H2
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H2 - Custom H2 heading component for frame mode
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies H3, H4
 * @usedIn v2/about/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx
 *   v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx
 *   v2/orchestrators/orchestrators-portal.mdx
 *   v2/resources/documentation-guide/component-library/component-library.mdx
 *   v2/resources/documentation-guide/component-library/display.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 *   v2/resources/documentation-guide/style-guide.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} icon - Icon configuration used by the component.
 * @param {number} [iconSize=28] - Icon configuration used by the component.
 * @param {string} iconColor - Icon configuration used by the component.
 * @param {string} [align="left"] - Align used by the component.
 * @param {string} [gap="0.75rem"] - Gap used by the component.
 *
 * @example
 * <H2 icon="sparkles" iconColor="value" />
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
 * H3 - Custom H3 heading component for frame mode
 *
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} iconSize - Size of the icon (default: 24)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} align - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} gap - Gap between icon and text (default: "0.5rem")
 */
/**
 * @component H3
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H3 - Custom H3 heading component for frame mode
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies H4, H5
 * @usedIn v2/community/community-portal.mdx
 *   v2/resources/documentation-guide/component-library/component-library.mdx
 *   v2/resources/documentation-guide/component-library/display.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} icon - Icon configuration used by the component.
 * @param {number} [iconSize=24] - Icon configuration used by the component.
 * @param {string} iconColor - Icon configuration used by the component.
 * @param {string} [align="left"] - Align used by the component.
 * @param {string} [gap="0.5rem"] - Gap used by the component.
 *
 * @example
 * <H3 icon="sparkles" iconColor="value" />
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
 * H4 - Custom H4 heading component for frame mode
 *
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} iconSize - Size of the icon (default: 20)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} align - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} gap - Gap between icon and text (default: "0.5rem")
 */
/**
 * @component H4
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H4 - Custom H4 heading component for frame mode
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies H5, H6
 * @usedIn v2/resources/documentation-guide/component-library/component-library.mdx
 *   v2/resources/documentation-guide/component-library/display.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} icon - Icon configuration used by the component.
 * @param {number} [iconSize=20] - Icon configuration used by the component.
 * @param {string} iconColor - Icon configuration used by the component.
 * @param {string} [align="left"] - Align used by the component.
 * @param {string} [gap="0.5rem"] - Gap used by the component.
 *
 * @example
 * <H4 icon="sparkles" iconColor="value" />
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
 * H5 - Custom H5 heading component for frame mode
 *
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} iconSize - Size of the icon (default: 18)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} align - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} gap - Gap between icon and text (default: "0.5rem")
 */
/**
 * @component H5
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H5 - Custom H5 heading component for frame mode
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies H6, P
 * @usedIn v2/about/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx
 *   v2/gateways/gateways-portal.mdx, v2/orchestrators/orchestrators-portal.mdx
 *   v2/resources/documentation-guide/component-library/component-library.mdx
 *   v2/resources/documentation-guide/component-library/display.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} icon - Icon configuration used by the component.
 * @param {number} [iconSize=18] - Icon configuration used by the component.
 * @param {string} iconColor - Icon configuration used by the component.
 * @param {string} [align="left"] - Align used by the component.
 * @param {string} [gap="0.5rem"] - Gap used by the component.
 *
 * @example
 * <H5 icon="sparkles" iconColor="value" />
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
 * H6 - Custom H6 heading component for frame mode
 *
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} iconSize - Size of the icon (default: 16)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} align - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} gap - Gap between icon and text (default: "0.5rem")
 */
/**
 * @component H6
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description H6 - Custom H6 heading component for frame mode
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies Divider, P
 * @usedIn v2/resources/documentation-guide/component-library/component-library.mdx
 *   v2/resources/documentation-guide/component-library/display.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} icon - Icon configuration used by the component.
 * @param {number} [iconSize=16] - Icon configuration used by the component.
 * @param {string} iconColor - Icon configuration used by the component.
 * @param {string} [align="left"] - Align used by the component.
 * @param {string} [gap="0.5rem"] - Gap used by the component.
 *
 * @example
 * <H6 icon="sparkles" iconColor="value" />
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
 * P - Custom paragraph component for frame mode
 *
 * @param {string} children - The paragraph text
 * @param {string} icon - Optional icon name or path to theme-aware SVG
 * @param {number} iconSize - Size of the icon (default: 16)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} align - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} gap - Gap between icon and text (default: "0.5rem")
 *
 * @example
 * <P>Simple paragraph</P>
 * <P icon="info-circle">Paragraph with icon</P>
 * <P icon="/snippets/assets/logos/icon.svg" align="center">Centered with theme icon</P>
 */
/**
 * @component P
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description P - Custom paragraph component for frame mode
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies Divider, H1, H2, H3, H4, H5, H6, PageHeader
 * @usedIn v2/about/portal.mdx, v2/community/community-portal.mdx, v2/developers/portal.mdx
 *   v2/gateways/gateways-portal.mdx, v2/home/mission-control.mdx
 *   v2/orchestrators/orchestrators-portal.mdx
 *   v2/resources/documentation-guide/component-library/component-library.mdx
 *   v2/resources/documentation-guide/component-library/display.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 *   v2/resources/documentation-guide/snippets-inventory.mdx, v2/solutions/portal.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} icon - Icon configuration used by the component.
 * @param {number} [iconSize=16] - Icon configuration used by the component.
 * @param {string} iconColor - Icon configuration used by the component.
 * @param {string} [align="left"] - Align used by the component.
 * @param {string} [gap="0.5rem"] - Gap used by the component.
 *
 * @example
 * <P icon="sparkles" iconColor="value" />
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
 * Divider - Horizontal divider line for frame mode
 *
 * @description
 * Renders a horizontal rule (---) with proper styling for frame mode.
 * Uses theme-aware border color that adapts to light and dark themes.
 *
 * @param {string} color - Custom color for the divider (optional, defaults to theme border color)
 * @param {string} margin - Vertical margin (default: "1.5rem 0")
 * @param {string} opacity - Opacity of the divider (default: 0.2)
 *
 * @example
 * <Divider />
 * <Divider margin="2rem 0" opacity={0.5} />
 */
/**
 * @component Divider
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Renders a horizontal rule (---) with proper styling for frame mode. Uses theme-aware
 *   border color that adapts to light and dark themes
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies H1, H2, H3, H4, H5, H6, P, PageHeader
 * @usedIn v2/resources/documentation-guide/component-library/component-library.mdx
 *   v2/resources/documentation-guide/component-library/display.mdx
 *   v2/resources/documentation-guide/component-library/overview.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {string} color - Color used by the component.
 * @param {string} [margin="1.5rem 0"] - Margin used by the component.
 * @param {number} [opacity=0.2] - Opacity used by the component.
 *
 * @example
 * <Divider color="value" />
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
