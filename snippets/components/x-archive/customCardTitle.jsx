/**
 * @component CustomCardTitle
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Renders the custom card title component
 * @contentAffinity landing
 * @owner @livepeer/docs-team
 * @dependencies none
 * @usedIn v2/home/about-livepeer/benefits.mdx, v2/home/primer.mdx, v2/internal/overview/docs-philosophy.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} icon - Icon configuration used by the component.
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {object} style - Style used by the component.
 *
 * @example
 * <CustomCardTitle icon="sparkles" title="Example" style={{}} />
 */
export const CustomCardTitle = ({ icon, title, style }) => {
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
    <div style={titleStyle}>
      <Icon icon={icon} size={20} color="var(--accent)" />
      {title}
    </div>
  )
}
