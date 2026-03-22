/**
 * @component LivepeerSVG
 * @type elements
 * @subniche icons
 * @status stable
 * @description Inline Livepeer logo as SVG with currentColor fill.
 * @accepts ...props
  * @aiDiscoverability none
 * @param {number} [size=24] - size prop.
 * @param {any} props - props prop.
 * @example
 * <LivepeerSVG props="example" />
 */
export const LivepeerSVG = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      role="img"
      aria-label="Livepeer logo"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.017.377v71.028h71.027V.377H.017Zm130.355 82.72v71.028H201.4V83.097h-71.028Zm130.6 153.28v-71.028H332v71.028h-71.028Zm-130.6 12.185v71.028H201.4v-71.028h-71.028ZM.017 402.31v-71.027h71.027v71.027H.017Zm0-236.492v71.028h71.027v-71.028H.017Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

/**
 * @component LivepeerIcon
 * @type elements
 * @subniche icons
 * @status stable
 * @description Theme-aware Livepeer icon with CSS custom property colour adaptation.
 * @accepts ...props
  * @aiDiscoverability none
 * @param {number} [size=16] - size prop.
 * @param {any} color - color prop.
 * @param {any} props - props prop.
 * @example
 * <LivepeerIcon color="example" props="example" />
 */
export const LivepeerIcon = ({ size = 16, color, ...props }) => {
  return (
    <span
      style={{
        display: "inline-flex",
        color: color || "var(--livepeer-icon-color, var(--lp-color-text-muted))",
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
          --livepeer-icon-color: var(--lp-color-text-secondary);
        }
        .dark {
          --livepeer-icon-color: var(--lp-color-text-muted);
        }
        @media (prefers-color-scheme: dark) {
          :root:not(.light) {
            --livepeer-icon-color: var(--lp-color-text-muted);
          }
        }
      `}</style>
    </span>
  );
};
