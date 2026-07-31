/**
 * @component StyledSteps
 * @category wrappers
 * @subcategory steps
 * @status stable
 * @description Wrapper around Mintlify Steps with custom icon styling via injected CSS.
 * @aiDiscoverability none
 * @param {any} children - children prop.
 * @param {any} iconColor - icon Color prop.
 * @param {any} titleColor - title Color prop.
 * @param {any} lineColor - line Color prop.
 * @param {string} [iconSize="24px"] - icon Size prop.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */
export const StyledSteps = ({
  children,
  iconColor,
  titleColor,
  lineColor,
  iconSize = '24px',
  className = '',
  style = {},
  ...rest
}) => {
  const stepsId = `styled-steps-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  const resolvedIconColor = iconColor || 'var(--accent-dark, #18794E)'
  const resolvedTitleColor = titleColor || 'var(--accent)'
  const resolvedLineColor = lineColor || 'var(--accent)'

  return (
    <div className={className} style={style} {...rest}>
      <style>{`
        #${stepsId} .steps > div > div.absolute > div {
          background-color: ${resolvedIconColor};
        }
        #${stepsId} .steps > div > div.w-full > p {
          color: ${resolvedTitleColor};
        }
        #${stepsId} > div > div > div.absolute.w-px {
          background-color: ${resolvedLineColor};
        }
        #${stepsId} .steps > div:last-child > div.absolute.w-px::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background-color: ${resolvedLineColor};
          transform: translateX(-50%) rotate(45deg);
        }
      `}</style>
      <div id={stepsId}>
        <Steps>{children}</Steps>
      </div>
    </div>
  )
}

/**
 * @component StyledStep
 * @category wrappers
 * @subcategory steps
 * @status stable
 * @description Single step with configurable icon, size, and per-step colour overrides.
 *              When iconColor or titleColor is set, injects a scoped CSS override that
 *              takes precedence over the parent StyledSteps colours for this step only.
 *              When neither is set, behaves identically to a plain Step pass-through.
 * @aiDiscoverability none
 * @param {any} title - title prop.
 * @param {any} icon - icon prop.
 * @param {string} [titleSize="h3"] - title Size prop.
 * @param {string|null} [iconColor=null] - Per-step icon background colour override.
 * @param {string|null} [titleColor=null] - Per-step title text colour override.
 * @param {boolean} [divider=false] - Show a divider line after the step content.
 * @param {string} [dividerMargin="0.5rem 0"] - Margin for the trailing divider.
 * @param {any} children - children prop.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */

import { InlineDivider } from '/snippets/components/elements/spacing/Divider.jsx'
export const StyledStep = ({
  title,
  icon,
  titleSize = 'h3',
  iconColor = null,
  titleColor = null,
  children,
  className = '',
  style = {},
  ...rest
}) => {
  const styledTitle = titleColor ? (
    <span style={{ color: titleColor }}>{title}</span>
  ) : (
    title
  )

  return (
    <Step
      title={styledTitle}
      icon={icon}
      iconColor={iconColor || undefined}
      titleSize={titleSize}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Step>
  )
}
