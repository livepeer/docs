/**
 * @component SolutionItem
 * @category wrappers
 * @subcategory custom
 * @status stable
 * @description Renders a solution entry with link, icon badges, and description. Designed for solution listing pages.
 * @aiDiscoverability props-extracted
 * @param {React.ReactNode} link - Link element (e.g. <LinkArrow />), rendered as the heading
 * @param {React.ReactNode} [iconWrapper=null] - Icon badges element (e.g. <IconBadgeWrapper />)
 * @param {React.ReactNode} [description=null] - Description text or element
 * @param {boolean} [divider=true] - Show bottom border divider
 * @param {string} [className=""] - CSS class name
 * @param {object} [style={}] - Inline style overrides
 * @example
 * <SolutionItem
 *   link={<LinkArrow href="https://daydream.live" label="Daydream" />}
 *   iconWrapper={<IconBadgeWrapper items={daydreamInfra} iconColor="var(--lp-color-accent)" size={12} />}
 *   description="Real-time AI video, world models"
 *   divider={true}
 * />
 */
export const SolutionItem = ({
  title,
  iconWrapper = null,
  description = null,
  divider = true,
  className = '',
  style = {},
  ...rest
}) => {
  const containerStyle = {
    paddingBottom: divider ? "var(--lp-spacing-3)" : "var(--lp-spacing-1)",
    ...style,
  }
  const spanStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: "var(--lp-spacing-2)",
  }
  const descriptionStyle = {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    marginTop: "var(--lp-spacing-1)",
  }
  const dividerStyle = {
    marginTop: "var(--lp-spacing-3)",
    borderBottom: '1px solid var(--lp-color-border-default)',
  }

  return (
    <div style={containerStyle} {...rest}>
      <div>
        <span style={spanStyle}>{title}</span>
        {iconWrapper}
      </div>
      {description && <div style={descriptionStyle}>{description}</div>}
      {divider && <div style={dividerStyle} />}
    </div>
  )
}
