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
