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
 * @requires ThemeData must be imported in the MDX file where these components are used:
 * import { ThemeData } from "/snippets/styles/themeStyles.jsx";
 *
 * @note Icon is a Mintlify global component - no import needed
 *
 * @author Alison Haire
 */

/**
 * H1 - Custom H1 heading component for frame mode
 *
 * @param {string} children - The heading text
 * @param {string} icon - Optional icon name or path to theme-aware SVG (e.g., "rocket", "/snippets/assets/logos/icon.svg")
 * @param {number} iconSize - Size of the icon (default: 32)
 * @param {string} iconColor - Color of the icon (default: theme-aware accent color)
 * @param {string} align - Text alignment: "left", "center", "right" (default: "left")
 * @param {string} gap - Gap between icon and text (default: "0.75rem")
 *
 * @example
 * <H1>Simple Heading</H1>
 * <H1 icon="rocket">Heading with Icon</H1>
 * <H1 icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg" align="center">Centered with Theme Icon</H1>
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
          color:
            titleColor ||
            `var(--page-header-title-color, ${ThemeData.light.heroText})`,
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
            color:
              subtitleColor ||
              `var(--page-header-subtitle-color, ${ThemeData.light.accent})`,
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
      <style>{`
        :root {
          --page-header-title-color: ${ThemeData.light.heroText};
          --page-header-subtitle-color: ${ThemeData.light.accent};
          --page-header-description-color: ${ThemeData.light.text};
        }
        .dark {
          --page-header-title-color: ${ThemeData.dark.heroText};
          --page-header-subtitle-color: ${ThemeData.dark.accent};
          --page-header-description-color: ${ThemeData.dark.text};
        }
      `}</style>
      {children}
      <div style={{ width: "80%", margin: "0 auto" }}>
        <CustomDivider />
      </div>
    </div>
  );
};

// import { Starfield as HeroStarfield } from "/snippets/components/domain/SHARED/HeroGif.jsx";
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
//             color: titleColor ?? ThemeData.light.heroText,
//           }}
//         >
//           {title}
//         </h1>

//         {subtitle && (
//           <h2
//             style={{
//               fontSize: "1.5rem",
//               fontWeight: "500",
//               color: subtitleColor ?? ThemeData.light.accent,
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
//               color: descriptionColor ?? ThemeData.light.text,
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

const H1 = ({
  children,
  icon,
  iconSize = 32,
  iconColor,
  align = "left",
  gap = "0.75rem",
}) => {
  // Use theme-aware color if not specified
  const defaultIconColor = iconColor || "var(--h1-icon-color)";

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
    color: "var(--page-header-title-color)",
    opacity: 1,
  };

  return (
    <>
      <style>{`
        :root {
          --h1-icon-color: ${ThemeData.light.accent};
        }
        .dark {
          --h1-icon-color: ${ThemeData.dark.accent};
        }
      `}</style>
      <div style={containerStyle}>
        {icon && <Icon icon={icon} size={iconSize} color={defaultIconColor} />}
        <h1 style={headingStyle}>{children}</h1>
      </div>
    </>
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
const H2 = ({
  children,
  icon,
  iconSize = 28,
  iconColor,
  align = "left",
  gap = "0.75rem",
}) => {
  const defaultIconColor = iconColor || "var(--h2-icon-color)";

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
    color: "var(--h2-text-color)",
    opacity: 1,
  };

  return (
    <>
      <style>{`
        :root {
          --h2-icon-color: ${ThemeData.light.accent};
          --h2-text-color: ${ThemeData.light.heroText};
        }
        .dark {
          --h2-icon-color: ${ThemeData.dark.accent};
          --h2-text-color: ${ThemeData.dark.heroText};
        }
      `}</style>
      <div style={containerStyle}>
        {icon && <Icon icon={icon} size={iconSize} color={defaultIconColor} />}
        <h2 style={headingStyle}>{children}</h2>
      </div>
    </>
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
const H3 = ({
  children,
  icon,
  iconSize = 24,
  iconColor,
  align = "left",
  gap = "0.5rem",
}) => {
  const defaultIconColor = iconColor || "var(--h3-icon-color)";

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
    color: "var(--h3-text-color)",
    opacity: 1,
  };

  return (
    <>
      <style>{`
        :root {
          --h3-icon-color: ${ThemeData.light.accent};
          --h3-text-color: ${ThemeData.light.heroText};
        }
        .dark {
          --h3-icon-color: ${ThemeData.dark.accent};
          --h3-text-color: ${ThemeData.dark.heroText};
        }
      `}</style>
      <div style={containerStyle}>
        {icon && <Icon icon={icon} size={iconSize} color={defaultIconColor} />}
        <h3 style={headingStyle}>{children}</h3>
      </div>
    </>
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
const H4 = ({
  children,
  icon,
  iconSize = 20,
  iconColor,
  align = "left",
  gap = "0.5rem",
}) => {
  const defaultIconColor = iconColor || "var(--h4-icon-color)";

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
    color: "var(--h4-text-color)",
    opacity: 1,
  };

  return (
    <>
      <style>{`
        :root {
          --h4-icon-color: ${ThemeData.light.accent};
          --h4-text-color: ${ThemeData.light.heroText};
        }
        .dark {
          --h4-icon-color: ${ThemeData.dark.accent};
          --h4-text-color: ${ThemeData.dark.heroText};
        }
      `}</style>
      <div style={containerStyle}>
        {icon && <Icon icon={icon} size={iconSize} color={defaultIconColor} />}
        <h4 style={headingStyle}>{children}</h4>
      </div>
    </>
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
const H5 = ({
  children,
  icon,
  iconSize = 18,
  iconColor,
  align = "left",
  gap = "0.5rem",
}) => {
  const defaultIconColor = iconColor || "var(--h5-icon-color)";

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
    color: "var(--h5-text-color)",
    opacity: 1,
  };

  return (
    <>
      <style>{`
        :root {
          --h5-icon-color: ${ThemeData.light.accent};
          --h5-text-color: ${ThemeData.light.heroText};
        }
        .dark {
          --h5-icon-color: ${ThemeData.dark.accent};
          --h5-text-color: ${ThemeData.dark.heroText};
        }
      `}</style>
      <div style={containerStyle}>
        {icon && <Icon icon={icon} size={iconSize} color={defaultIconColor} />}
        <h5 style={headingStyle}>{children}</h5>
      </div>
    </>
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
const H6 = ({
  children,
  icon,
  iconSize = 16,
  iconColor,
  align = "left",
  gap = "0.5rem",
}) => {
  const defaultIconColor = iconColor || "var(--h6-icon-color)";

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
    color: "var(--h6-text-color)",
    opacity: 1,
  };

  return (
    <>
      <style>{`
        :root {
          --h6-icon-color: ${ThemeData.light.accent};
          --h6-text-color: ${ThemeData.light.heroText};
        }
        .dark {
          --h6-icon-color: ${ThemeData.dark.accent};
          --h6-text-color: ${ThemeData.dark.heroText};
        }
      `}</style>
      <div style={containerStyle}>
        {icon && <Icon icon={icon} size={iconSize} color={defaultIconColor} />}
        <h6 style={headingStyle}>{children}</h6>
      </div>
    </>
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
const P = ({
  children,
  icon,
  iconSize = 16,
  iconColor,
  align = "left",
  gap = "0.5rem",
}) => {
  const defaultIconColor = iconColor || "var(--p-icon-color)";

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
    color: "var(--p-text-color)",
    opacity: 1,
  };

  return (
    <>
      <style>{`
        :root {
          --p-icon-color: ${ThemeData.light.accent};
          --p-text-color: ${ThemeData.light.text};
        }
        .dark {
          --p-icon-color: ${ThemeData.dark.accent};
          --p-text-color: ${ThemeData.dark.text};
        }
      `}</style>
      <div style={containerStyle}>
        {icon && <Icon icon={icon} size={iconSize} color={defaultIconColor} />}
        <p style={paragraphStyle}>{children}</p>
      </div>
    </>
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
const Divider = ({ color, margin = "1.5rem 0", opacity = 0.2 }) => {
  return (
    <>
      <style>{`
        :root {
          --divider-color: ${ThemeData.light.border};
        }
        .dark {
          --divider-color: ${ThemeData.dark.border};
        }
      `}</style>
      <hr
        style={{
          border: "none",
          borderTop: `1px solid ${color || "var(--divider-color)"}`,
          margin: margin,
          opacity: opacity,
        }}
      />
    </>
  );
};

export { PageHeader, H1, H2, H3, H4, H5, H6, P, Divider };
