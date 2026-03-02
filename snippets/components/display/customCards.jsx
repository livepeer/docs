/**
 * DisplayCard
 * --------
 * A Card wrapper that renders an icon + title header and accepts children.
 *
 * Props:
 *   icon     (string)  – Mintlify Icon name, e.g. "comment-question"
 *   title    (string)  – Card heading text
 *   style    (object)  – Optional style overrides for the title span
 *   children           – Card body content (markdown lists, etc.)
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
