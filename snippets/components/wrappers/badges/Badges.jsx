/**
 * @component BadgeWrapper
 * @category elements
 * @subcategory badges
 * @status stable
 * @description Flex row wrapper for Badge elements. Pass a `badges` array of {color, label} objects for auto-rendering, or use children for manual JSX.
 * @param {Array} [badges] - Array of {color, label} objects. Rendered automatically as Badge elements.
 * @param {ReactNode} [children] - Manual Badge JSX. Used if badges prop is omitted.
 * @param {string} [gap="0.4rem"] - Gap between badges.
 * @param {object} [style={}] - Inline style overrides (merged with defaults).
 * @param {string} [className=""] - CSS class name.
 *
 * @example
 * <BadgeWrapper badges={daydreamCategoryBadges} />
 * @example
 * <BadgeWrapper>
 *   <Badge color="blue">video</Badge>
 *   <Badge color="green">stable</Badge>
 * </BadgeWrapper>
 */
export const BadgeWrapper = ({
  badges,
  children,
  gap = '0.4rem',
  style = {},
  className = '',
  ...rest
}) => {
  const defaultStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap,
    margin: '0.5rem 0 1.5rem 0',
  }

  return (
    <div className={className} style={{ ...defaultStyle, ...style }} {...rest}>
      {badges
        ? badges.map((b, i) => (
            <Badge key={i} color={b.color}>
              {b.label}
            </Badge>
          ))
        : children}
    </div>
  )
}

/**
 * @component IconBadgeWrapper
 * @category elements
 * @subcategory badges
 * @status stable
 * @description Flex row wrapper for icon+label tag items. Pass an `items` array of {icon, label} objects. Icons are uncoloured by default — pass `iconColor` to override.
 * @param {Array} items - Array of {icon, label} objects.
 * @param {string} [iconColor] - Colour applied to all icons. Defaults to currentColor if omitted.
 * @param {number} [size=12] - Icon size in px.
 * @param {string} [gap="0.75rem"] - Gap between items.
 * @param {object} [style={}] - Inline style overrides for the wrapper.
 * @param {string} [className=""] - CSS class name.
 *
 * @example
 * <IconBadgeWrapper items={daydreamInfraTags} />
 * @example
 * <IconBadgeWrapper items={daydreamInfraTags} iconColor="var(--accent)" />
 */
export const IconBadgeWrapper = ({
  items = [],
  iconColor,
  size = 14,
  gap = '0.75rem',
  style = {},
  className = '',
  ...rest
}) => {
  const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap,
    margin: '0.25rem 0 0.5rem',
  }

  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: `${size}px`,
    color: 'var(--hero-text)',
  }

  return (
    <div className={className} style={{ ...wrapperStyle, ...style }} {...rest}>
      {items.map((item, i) => (
        <span key={i} style={tagStyle}>
          <Icon
            icon={item.icon}
            size={size}
            color={iconColor || 'currentColor'}
          />
          {item.label}
        </span>
      ))}
    </div>
  )
}
