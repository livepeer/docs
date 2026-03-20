/**
 * @component CustomCardTitle
 * @type elements
 * @subniche text
 * @status stable
 * @description Card title row with icon and text, using flexbox alignment.
 * @accepts style, className, ...rest
 * @param {string} icon - Icon configuration used by the component.
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {object} [style={}] - Inline style overrides.
 * @param {string} [className=""] - CSS class name.
 *
 * @example
 * <CustomCardTitle icon="sparkles" title="Example" style={{}} />
 */
export const CustomCardTitle = ({ icon, title, style = {}, className = "", ...rest }) => {
  const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.75rem',
    color: 'var(--hero-text)',
    fontSize: '1rem',
    fontWeight: 600,
    ...style,
  }
  return (
    <div className={className} style={titleStyle} {...rest}>
      <Icon icon={icon} size={20} color="var(--accent)" />
      {title}
    </div>
  )
}
