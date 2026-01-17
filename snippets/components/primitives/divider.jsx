/**
 * CustomDivider - Decorative divider with Livepeer branding
 *
 * @description
 * Displays a horizontal divider line with theme-aware Livepeer logo icons on both ends.
 * Optionally includes centered text between the divider lines.
 *
 * Icons automatically adapt to light/dark theme using theme-aware SVG.
 *
 * @param {string} [color] - Color for the middle text
 * @param {string} [middleText] - Optional text to display in the center of the divider
 *
 * @requires ThemeData must be imported in the MDX file where this component is used:
 * import { ThemeData } from "/snippets/styles/themeStyles.jsx";
 *
 * @example
 * <CustomDivider />
 * <CustomDivider middleText="OR" />
 * <CustomDivider middleText="Section Break" color="#2d9a67" />
 *
 * @author Livepeer Documentation Team
 */
export const CustomDivider = ({ color, middleText }) => {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "24px 0",
          fontSize: "16px",
        }}
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
            background: "var(--divider-color)",
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
                opacity: 0.4,
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
            background: "var(--divider-color)",
            opacity: 0.4,
          }}
        ></div>
        <span style={{ marginLeft: "8px", opacity: 0.2 }}>
          <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
            <Icon icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Theme.svg" />
          </span>
        </span>
      </div>
    </>
  );
};
