/**
 * @component DisplayCard
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Display Card page-structure component for frame-mode and portal layout scaffolding.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies none
 * @usedIn v2/cn/developers/builder-opportunities/bug-bounties.mdx, v2/cn/developers/builder-opportunities/grants-and-programmes.mdx, v2/cn/developers/builder-opportunities/oss-contributions.mdx, v2/cn/developers/builder-opportunities/overview.mdx, v2/cn/developers/builder-opportunities/rfps-and-proposals.mdx, v2/cn/home/about-livepeer/vision.mdx, v2/cn/home/get-started.mdx, v2/cn/home/solutions/applications.mdx, v2/community/livepeer-community/community-guidelines.mdx, v2/developers/builder-opportunities/bug-bounties.mdx, v2/developers/builder-opportunities/grants-and-programmes.mdx, v2/developers/builder-opportunities/oss-contributions.mdx, v2/developers/builder-opportunities/overview.mdx, v2/developers/builder-opportunities/rfps-and-proposals.mdx, v2/es/developers/builder-opportunities/bug-bounties.mdx, v2/es/developers/builder-opportunities/grants-and-programmes.mdx, v2/es/developers/builder-opportunities/oss-contributions.mdx, v2/es/developers/builder-opportunities/overview.mdx, v2/es/developers/builder-opportunities/rfps-and-proposals.mdx, v2/es/home/about-livepeer/vision.mdx, v2/es/home/get-started.mdx, v2/es/home/solutions/applications.mdx, v2/fr/developers/builder-opportunities/bug-bounties.mdx, v2/fr/developers/builder-opportunities/grants-and-programmes.mdx, v2/fr/developers/builder-opportunities/oss-contributions.mdx, v2/fr/developers/builder-opportunities/overview.mdx, v2/fr/developers/builder-opportunities/rfps-and-proposals.mdx, v2/fr/home/about-livepeer/vision.mdx, v2/fr/home/get-started.mdx, v2/fr/home/solutions/applications.mdx, v2/home/about-livepeer/vision.mdx, v2/home/solutions/applications.mdx, v2/internal/rfp/problem-statements.mdx, v2/x-archived/home/get-started.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} icon - icon prop.
 * @param {any} title - title prop.
 * @param {any} style - style prop.
 * @param {string} [background='var(--card-background)'] - background prop.
 * @param {any} children - children prop.
 * @example
 * <DisplayCard icon="example" title="example">Example content</DisplayCard>
 */
export const DisplayCard = ({
  icon,
  title,
  style,
  background = 'var(--card-background)',
  children,
}) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 1rem)',
    border: '1px solid var(--accent)',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: 'var(--background)',
    gap: '1rem',
  }
  const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0',
    color: 'var(--hero-text)',
    fontSize: '1rem',
    fontWeight: 600,
    ...style,
  }
  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: background,
    borderRadius: '8px',
    flex: 1,
    padding: '0.5rem',
    margin: 0,
  }
  return (
    <div style={cardStyle}>
      <div style={titleStyle}>
        <Icon icon={icon} size={20} color="var(--accent)" />
        {title}
      </div>
      <div style={bodyStyle}>{children}</div>
    </div>
  )
}

/**
 * @component CustomCardTitle
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Custom Card Title page-structure component for frame-mode and portal layout scaffolding.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies none
 * @usedIn v2/cn/home/about-livepeer/benefits.mdx, v2/cn/home/primer.mdx, v2/es/home/about-livepeer/benefits.mdx, v2/es/home/primer.mdx, v2/fr/home/about-livepeer/benefits.mdx, v2/fr/home/primer.mdx, v2/home/about-livepeer/benefits.mdx, v2/home/primer.mdx, v2/internal/overview/docs-philosophy.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} icon - icon prop.
 * @param {any} title - title prop.
 * @param {any} style - style prop.
 * @example
 * <CustomCardTitle icon="example" title="example" />
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

/**
 * @component WidthCard
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Width Card page-structure component for frame-mode and portal layout scaffolding.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies none
 * @usedIn v2/cn/home/about-livepeer/benefits.mdx, v2/cn/home/about-livepeer/roadmap.mdx, v2/es/home/about-livepeer/benefits.mdx, v2/es/home/about-livepeer/roadmap.mdx, v2/fr/home/about-livepeer/benefits.mdx, v2/fr/home/about-livepeer/roadmap.mdx, v2/gateways/quickstart/gateway-setup.mdx, v2/home/about-livepeer/benefits.mdx, v2/home/about-livepeer/roadmap.mdx, v2/resources/media-kit.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {string} [width='80%'] - width prop.
 * @param {any} children - children prop.
 * @param {any} cardProps - card Props prop.
 * @example
 * <WidthCard cardProps="example">Example content</WidthCard>
 */
export const WidthCard = ({ width = '80%', children, ...cardProps }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        minWidth: 'fit-content',
      }}
    >
      <div style={{ width: width }}>
        <Card {...cardProps}>{children}</Card>
      </div>
    </div>
  )
}

/**
 * @component InlineImageCard
 * @category page-structure
 * @tier pattern
 * @status stable
 * @description Inline Image Card page-structure component for frame-mode and portal layout scaffolding.
 * @contentAffinity landing, overview
 * @owner docs
 * @dependencies none
 * @usedIn v2/resources/media-kit.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {any} imgProps - img Props prop.
 * @param {any} imgStyle - img Style prop.
 * @param {any} cardProps - card Props prop.
 * @param {any} style - style prop.
 * @example
 * <InlineImageCard imgProps="example" imgStyle="example">Example content</InlineImageCard>
 */
export const InlineImageCard = ({
  children,
  imgProps,
  imgStyle,
  cardProps,
  style,
}) => {
  return (
    <Card {...cardProps}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          marginRight: '-1rem',
          width: 'calc(100% + 1rem)',
          ...style,
        }}
      >
        <img
          {...imgProps}
          style={
            imgStyle
              ? imgStyle
              : {
                  maxHeight: '120px',
                  width: 'auto',
                }
          }
        />
        {children}
      </div>
    </Card>
  )
}
