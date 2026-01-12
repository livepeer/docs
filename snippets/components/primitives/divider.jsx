/**
 * LivepeerIcon - Internal helper for Livepeer logo icon
 *
 * @description
 * Helper component that displays the Livepeer logo icon.
 * Used internally by CustomDivider.
 *
 * @param {Object} props - Icon component props
 * @private
 */
const LivepeerIcon = ({ ...props }) => {
  return (
    <Icon
      icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg"
      {...props}
    />
  );
};

/**
 * LivepeerIconFlipped - Internal helper for flipped Livepeer logo
 *
 * @description
 * Helper component that displays a horizontally flipped Livepeer logo.
 * Used internally by CustomDivider.
 *
 * @param {Object} props - Icon component props
 * @private
 */
const LivepeerIconFlipped = ({ ...props }) => {
  return (
    <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
      <Icon
        icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg"
        {...props}
      />
    </span>
  );
};

/**
 * CustomDivider - Decorative divider with Livepeer branding
 *
 * @description
 * Displays a horizontal divider line with Livepeer logo icons on both ends.
 * Optionally includes centered text between the divider lines.
 *
 * @param {string} [color] - Color for the middle text (currently unused in implementation)
 * @param {string} [middleText] - Optional text to display in the center of the divider
 *
 * @example
 * <CustomDivider />
 * <CustomDivider middleText="OR" />
 * <CustomDivider middleText="Section Break" color="#2d9a67" />
 *
 * @author Livepeer Documentation Team
 */
export const CustomDivider = ({ color, middleText }) => {
  const dividerColor = "#e5e7eb";

  return (
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
          color: `${dividerColor} !important`,
        }}
      >
        <Icon icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg" />
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: dividerColor,
          opacity: 0.2,
        }}
      ></div>
      {middleText && (
        <>
          <Icon icon="circle" size={2} />
          <span
            style={{
              margin: "0 8px",
              fontWeight: "bold",
              // fontSize: "12px",
              // textTransform: "uppercase",
              // fontStyle: "uppercase",
              fontColor: color,
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
          background: dividerColor,
          opacity: 0.2,
        }}
      ></div>
      <span style={{ marginLeft: "8px", opacity: 0.2 }}>
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
          <Icon icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg" />
        </span>
      </span>
    </div>
  );
};
