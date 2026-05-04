/**
 * @component BadgeWrapper
 * @category wrappers
 * @subcategory badges
 * @status stable
 * @description Flex row wrapper for Badge elements. Pass a `badges` array of {color, label} objects for auto-rendering, or use children for manual JSX.
 * @aiDiscoverability none
 * @usedIn v2/solutions/daydream/overview.mdx, v2/solutions/embody/overview.mdx, v2/solutions/frameworks/overview.mdx, v2/solutions/livepeer-studio/overview.mdx, v2/solutions/portal.mdx, v2/solutions/solution-providers.mdx, v2/solutions/streamplace/overview.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {Array} [badges] - Array of {color, label} objects. Rendered automatically as Badge elements.
 * @param {ReactNode} [children] - Manual Badge JSX. Used if badges prop is omitted.
 * @param {string} [gap="0.4rem"] - Gap between badges.
 * @param {string} [margin="0.5rem 0 1.5rem 0"] - Margin around the badge row.
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
  margin = '0.5rem 0 1.5rem 0',
  style = {},
  className = '',
  ...rest
}) => {
  const defaultStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap,
    margin,
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
 * @category wrappers
 * @subcategory badges
 * @status stable
 * @description Flex row wrapper for icon+label tag items. Pass an `items` array of {icon, label} objects. Icons are uncoloured by default — pass `iconColor` to override.
 * @aiDiscoverability none
 * @usedIn v2/solutions/daydream/overview.mdx, v2/solutions/embody/overview.mdx, v2/solutions/frameworks/overview.mdx, v2/solutions/livepeer-studio/overview.mdx, v2/solutions/portal.mdx, v2/solutions/solution-providers.mdx, v2/solutions/streamplace/overview.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {Array} items - Array of {icon, label} objects.
 * @param {string} [iconColor] - Colour applied to all icons. Defaults to currentColor if omitted.
 * @param {number} [size=12] - Icon size in px.
 * @param {string} [gap="var(--lp-spacing-3)"] - Gap between items.
 * @param {object} [style={}] - Inline style overrides for the wrapper.
 * @param {string} [className=""] - CSS class name.
 *
 * @example
 * <IconBadgeWrapper items={daydreamInfraTags} />
 * @example
 * <IconBadgeWrapper items={daydreamInfraTags} iconColor="var(--lp-color-accent)" />
 */
export const IconBadgeWrapper = ({
  items = [],
  iconColor,
  size = 14,
  gap = "var(--lp-spacing-3)",
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
    gap: "var(--lp-spacing-1)",
    fontSize: `${size}px`,
    color: 'var(--lp-color-text-primary)',
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

/**
 * @component BadgeRow
 * @category wrappers
 * @subcategory badges
 * @status stable
 * @description Unified badge row with variant prop. "text" renders Badge elements from a badges array.
 *              "icon" renders icon+label tags from an items array.
 * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} [variant="text"] - Display variant: "text" for Badge elements, "icon" for icon+label tags.
 * @param {Array} [badges] - Array of {color, label} objects (variant="text").
 * @param {Array} [items] - Array of {icon, label} objects (variant="icon").
 * @param {React.ReactNode} [children] - Manual JSX children (variant="text" fallback).
 * @param {string} [iconColor] - Colour applied to all icons (variant="icon").
 * @param {number} [size=14] - Icon size in px (variant="icon").
 * @param {string} [gap="0.4rem"] - Gap between items.
 * @param {object} [style={}] - Inline style overrides.
 * @param {string} [className=""] - CSS class name.
 * @example
 * <BadgeRow variant="text" badges={[{color: "blue", label: "video"}]} />
 * <BadgeRow variant="icon" items={[{icon: "globe", label: "Web"}]} />
 */
export const BadgeRow = ({
  variant = 'text',
  badges,
  items,
  children,
  iconColor,
  size = 14,
  gap = '0.4rem',
  style = {},
  className = '',
  ...rest
}) => {
  if (variant === 'icon') {
    return (
      <IconBadgeWrapper
        items={items || []}
        iconColor={iconColor}
        size={size}
        gap={gap}
        style={style}
        className={className}
        {...rest}
      />
    );
  }
  return (
    <BadgeWrapper
      badges={badges}
      gap={gap}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </BadgeWrapper>
  );
};
