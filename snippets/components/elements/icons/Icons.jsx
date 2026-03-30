/**
 * @component LivepeerSVG
 * @category elements
 * @subcategory icons
 * @status stable
 * @description Inline Livepeer logo as SVG with currentColor fill.
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
  )
}

/**
 * @component LivepeerIcon
 * @category elements
 * @subcategory icons
 * @status stable
 * @description Theme-aware Livepeer icon with CSS custom property colour adaptation.
 * @aiDiscoverability none
 * @param {number} [size=16] - size prop.
 * @param {any} color - color prop.
 * @param {any} props - props prop.
 * @example
 * <LivepeerIcon color="example" props="example" />
 */
/**
 * @component ArbitrumSVG
 * @category elements
 * @subcategory icons
 * @status stable
 * @description Inline Arbitrum logo as SVG with currentColor fill.
 * @aiDiscoverability none
 * @param {number} [size=24] - size prop.
 * @param {any} props - props prop.
 * @example
 * <ArbitrumSVG size={24} />
 */
export const ArbitrumSVG = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 742.07 799.07"
      fill="none"
      role="img"
      aria-label="Arbitrum logo"
      {...props}
    >
      <path
        fill="currentColor"
        d="M541.1,286.36l-153.31-89.02c-4.97-2.84-10.39-4.31-15.9-4.31s-10.92,1.47-15.81,4.31l-153.36,89.11c-9.72,5.68-15.81,16.16-15.81,27.48v178.22c0,11.32,6.08,21.93,15.81,27.57l27.57,16.03,40.23,23.35,9.01-24.82,82.85-228.48c.75-2.22-.84-4.62-3.33-4.62h-38.85c-2.89,0-5.55,1.82-6.48,4.53l-74.37,205.21-23.62-13.72c-1.78-1.02-2.89-2.93-2.89-4.97v-178.31c0-2.04,1.11-3.95,2.89-4.97l153.36-89.11c.84-.53,1.86-.75,2.84-.75s1.95.27,2.89.75l153.4,89.11c1.78,1.02,2.89,2.93,2.89,4.97v178.22c0,2.04-1.11,3.95-2.89,4.97l-23.35,13.59-61.45-169.56c-1.11-3.11-5.37-3.11-6.48,0l-20.25,55.77c-.58,1.55-.58,3.29,0,4.79l47.95,132.36-15.94,9.28-39.25-108.38c-1.11-3.11-5.37-3.11-6.48,0l-20.25,55.77c-.58,1.55-.58,3.29,0,4.79l25.8,71.17-33.66,19.58c-.84.53-1.86.76-2.89.76s-1.95-.27-2.89-.76l-33.26-19.36,94.62-261.07c.84-2.31-.84-4.75-3.24-4.75h-38.85c-2.89,0-5.55,1.82-6.48,4.53l-86.27,237.89-9.01,24.82,40.23,23.36,29.35,17.05c4.88,2.84,10.35,4.31,15.81,4.31s10.92-1.46,15.81-4.31l153.4-89.11c9.81-5.68,15.81-16.16,15.81-27.57v-178.13c0-11.32-6.08-21.93-15.81-27.57h-.09Z"
      />
    </svg>
  )
}

/**
 * @component ArbitrumIcon
 * @category elements
 * @subcategory icons
 * @status stable
 * @description Arbitrum logo rendered identically to Mintlify FA icons using mask-image technique.
 * @aiDiscoverability none
 * @param {number} [size=16] - Icon size in pixels.
 * @param {string} [color] - Override colour. Accepts CSS values including var() custom properties. Default is theme-aware (dark in light mode, light in dark mode).
 * @param {object} [style={}] - Inline style overrides.
 * @param {string} [className=""] - CSS class name.
 * @example
 * <ArbitrumIcon size={16} />
 * <ArbitrumIcon color="var(--accent)" />
 */
export const ArbitrumIcon = ({
  size = 16,
  color,
  style = {},
  className = '',
  ...rest
}) => (
  <svg
    className={`icon inline bg-gray-800 dark:bg-gray-100 ${className}`}
    style={{
      maskImage: 'url("/snippets/assets/logos/Arbitrum/Arbitrum-Logo.svg")',
      WebkitMaskImage:
        'url("/snippets/assets/logos/Arbitrum/Arbitrum-Logo.svg")',
      maskRepeat: 'no-repeat',
      maskPosition: 'center center',
      width: `${size}px`,
      height: `${size}px`,
      display: 'inline-block',
      verticalAlign: 'middle',
      ...(color && { backgroundColor: color }),
      ...style,
    }}
    {...rest}
  />
)

/**
 * @component LivepeerIcon
 * @category elements
 * @subcategory icons
 * @status stable
 * @description Livepeer logo rendered identically to Mintlify FA icons using mask-image technique.
 * @aiDiscoverability none
 * @param {number} [size=16] - Icon size in pixels.
 * @param {string} [color] - Override colour. Accepts CSS values including var() custom properties. Default is theme-aware (dark in light mode, light in dark mode).
 * @param {object} [style={}] - Inline style overrides.
 * @param {string} [className=""] - CSS class name.
 * @example
 * <LivepeerIcon size={16} />
 * <LivepeerIcon color="var(--accent)" />
 */
export const LivepeerIcon = ({
  size = 16,
  color,
  style = {},
  className = '',
  ...rest
}) => (
  <svg
    className={`icon inline bg-gray-800 dark:bg-gray-100 ${className}`}
    style={{
      maskImage: 'url("/snippets/assets/logos/Livepeer-Logo-Symbol-Mask.svg")',
      WebkitMaskImage: 'url("/snippets/assets/logos/Livepeer-Logo-Symbol-Mask.svg")',
      maskRepeat: 'no-repeat',
      maskPosition: 'center center',
      width: `${size}px`,
      height: `${size}px`,
      display: 'inline-block',
      verticalAlign: 'middle',
      ...(color && { backgroundColor: color }),
      ...style,
    }}
    {...rest}
  />
)
