/**
 * @component CustomCardTitle
 * @type elements
 * @subniche text
 * @status stable
 * @description Title row with icon and text, using flexbox alignment. Accepts Font Awesome strings or React components as icon. Variant prop controls styling context.
 * @accepts style, className, ...rest
 * @aiDiscoverability none
 * @param {string|React.ReactNode} icon - Font Awesome icon name (string) or React component (e.g. ArbitrumIcon).
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {string} [variant="card"] - Styling context: "card" (default, opinionated), "accordion" (inline, inherits parent styles), "tab" (inline, smaller).
 * @param {number} [iconSize] - Icon size in pixels (applies to Font Awesome icons only). Defaults per variant: card=20, accordion=18, tab=14.
 * @param {object} [style={}] - Inline style overrides.
 * @param {string} [className=""] - CSS class name.
 *
 * @example
 * <CustomCardTitle icon="sparkles" title="Example" />
 * <CustomCardTitle variant="accordion" icon={<ArbitrumIcon />} title="Controller" />
 */
export const CustomCardTitle = ({ icon, title, variant = "card", iconSize, style = {}, className = "", ...rest }) => {
  const variants = {
    card: { display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--hero-text)', fontSize: '1rem', fontWeight: 600 },
    accordion: { display: 'inline-flex', alignItems: 'center', gap: '0.5rem' },
    tab: { display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem' },
  }
  const sizes = { card: 20, accordion: 18, tab: 14 }
  const size = iconSize || sizes[variant] || 20
  const baseStyle = variants[variant] || variants.card

  return variant === 'card' ? (
    <div className={className} style={{ ...baseStyle, ...style }} {...rest}>
      {typeof icon === 'string' ? <Icon icon={icon} size={size} color="var(--accent)" /> : icon}
      {title}
    </div>
  ) : (
    <span className={className} style={{ ...baseStyle, ...style }} {...rest}>
      {typeof icon === 'string' ? <Icon icon={icon} size={size} color="var(--accent)" /> : icon}
      {title}
    </span>
  )
}
