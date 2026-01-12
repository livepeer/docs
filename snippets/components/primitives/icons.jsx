/**
 * LivepeerSVG - Inline SVG version of the Livepeer logo
 *
 * @description
 * Renders the Livepeer logo as an inline SVG element.
 * Uses em units for responsive sizing.
 *
 * @param {number} [size=24] - Size of the icon (currently unused, uses 1em)
 * @param {Object} props - Additional SVG props
 *
 * @example
 * <LivepeerSVG size={32} />
 *
 * @author Livepeer Documentation Team
 */
export const LivepeerSVG = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.017.377v71.028h71.027V.377H.017Zm130.355 82.72v71.028H201.4V83.097h-71.028Zm130.6 153.28v-71.028H332v71.028h-71.028Zm-130.6 12.185v71.028H201.4v-71.028h-71.028ZM.017 402.31v-71.027h71.027v71.027H.017Zm0-236.492v71.028h71.027v-71.028H.017Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

/**
 * LivepeerIconOld - Legacy Livepeer icon component
 *
 * @description
 * Displays the Livepeer logo using the light symbol SVG file.
 * This is the older version of the icon component.
 *
 * @param {Object} props - Icon component props
 *
 * @example
 * <LivepeerIconOld size={20} />
 *
 * @author Livepeer Documentation Team
 */
export const LivepeerIconOld = ({ ...props }) => {
  return (
    <Icon
      icon="/snippets/assets/logos/Livepeer-Logo-Symbol-Light.svg"
      {...props}
    />
  );
};

/**
 * LivepeerIconFlipped - Horizontally flipped Livepeer icon
 *
 * @description
 * Displays the Livepeer logo flipped horizontally using CSS transform.
 * Useful for decorative purposes or directional indicators.
 *
 * @param {Object} props - Icon component props
 *
 * @example
 * <LivepeerIconFlipped size={20} />
 *
 * @author Livepeer Documentation Team
 */
export const LivepeerIconFlipped = ({ ...props }) => {
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
 * LivepeerIcon - Theme-aware Livepeer icon component
 *
 * @description
 * Displays the Livepeer logo with automatic color adaptation for light/dark themes.
 * Uses CSS custom properties for theme-aware coloring.
 *
 * @param {number} [size=16] - Size of the icon in pixels
 * @param {string} [color] - Custom color override (defaults to theme-aware color)
 * @param {Object} props - Additional Icon component props
 *
 * @example
 * <LivepeerIcon size={24} />
 * <LivepeerIcon size={20} color="#ff0000" />
 *
 * @author Livepeer Documentation Team
 */
export const LivepeerIcon = ({ size = 16, color, ...props }) => {
  return (
    <span
      style={{
        display: "inline-flex",
        color: color || "var(--livepeer-icon-color, #a1a1aa)",
      }}
      className="livepeer-icon"
    >
      <Icon
        icon="/snippets/assets/logos/Livepeer-Logo-Symbol.svg"
        size={size}
        {...props}
      />
      <style>{`
        :root {
          --livepeer-icon-color: #6b7280;
        }
        .dark {
          --livepeer-icon-color: #a1a1aa;
        }
        @media (prefers-color-scheme: dark) {
          :root:not(.light) {
            --livepeer-icon-color: #a1a1aa;
          }
        }
      `}</style>
    </span>
  );
};
