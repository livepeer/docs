/**
 * @component DisplayCard
 * @category layout
 * @tier composite
 * @status stable
 * @description --------
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies InlineImageCard, WidthCard
 * @usedIn v2/community/livepeer-community/community-guidelines.mdx, v2/developers/opportunities/bug-bounties.mdx, v2/developers/opportunities/grants-and-programmes.mdx, v2/developers/opportunities/oss-contributions.mdx, v2/developers/opportunities/overview.mdx, v2/developers/opportunities/rfps-and-proposals.mdx, v2/home/about-livepeer/vision.mdx, v2/home/get-started.mdx, v2/home/solutions/applications.mdx, v2/internal/rfp/problem-statements.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} icon - Icon configuration used by the component.
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {object} style - Style used by the component.
 * @param {string} [background='var(--card-background)'] - Background used by the component.
 * @param {React.ReactNode} children - Content rendered inside the component.
 *
 * @example
 * <DisplayCard icon="sparkles" title="Example" style={{}} />
 */
export const DisplayCard = ({
  icon,
  title,
  style,
  background = 'var(--card-background)',
  children,
}) => {
  if (!title) {
    console.warn("[DisplayCard] Missing required prop: title");
    return null;
  }

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
 * @component WidthCard
 * @category layout
 * @tier composite
 * @status stable
 * @description Renders the width card component
 * @contentAffinity landing
 * @owner @livepeer/docs-team
 * @dependencies InlineImageCard
 * @usedIn v2/gateways/quickstart/gateway-setup.mdx, v2/home/about-livepeer/benefits.mdx, v2/home/about-livepeer/roadmap.mdx, v2/resources/media-kit.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {string} [width='80%'] - Width used by the component.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {object} [cardProps] - Forwarded Card props.
 *
 * @example
 * <WidthCard>Example</WidthCard>
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
 * @category layout
 * @tier composite
 * @status stable
 * @description Renders the inline image card component
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies none
 * @usedIn v2/resources/media-kit.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {object} imgProps - Img props used by the component.
 * @param {object} imgStyle - Img style used by the component.
 * @param {object} cardProps - Card props used by the component.
 * @param {object} style - Style used by the component.
 *
 * @example
 * <InlineImageCard imgProps={{}} imgStyle={{}} cardProps={{}} />
 */
export const InlineImageCard = ({
  children,
  imgProps,
  imgStyle,
  cardProps,
  style,
}) => {
  if (!imgProps?.src) {
    console.warn("[InlineImageCard] Missing required prop: imgProps.src");
    return null;
  }

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
