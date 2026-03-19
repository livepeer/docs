/**
 * @component LivepeerSVG
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Livepeer SVG primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies LivepeerIcon, LivepeerIconFlipped, LivepeerIconOld
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
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
 * @component LivepeerIconOld
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Livepeer Icon Old primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies LivepeerIcon, LivepeerIconFlipped, LivepeerSVG
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} props - props prop.
 * @example
 * <LivepeerIconOld props="example" />
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
 * @component LivepeerIconFlipped
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Livepeer Icon Flipped primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies LivepeerIcon, LivepeerIconOld, LivepeerSVG
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {any} props - props prop.
 * @example
 * <LivepeerIconFlipped props="example" />
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
 * @component LivepeerIcon
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Livepeer Icon primitive used in authored documentation and component-library examples.
 * @contentAffinity universal
 * @owner docs
 * @dependencies LivepeerIconFlipped, LivepeerIconOld, LivepeerSVG
 * @usedIn v2/home/mission-control.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
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
