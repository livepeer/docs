/**
 * @component DisplayCard
 * @category wrappers
 * @subcategory cards
 * @status stable
 * @description Card with icon, custom title row, and body content.
  * @aiDiscoverability none
 * @param {string} icon - Icon configuration used by the component.
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {object} style - Style used by the component.
 * @param {string} [background='var(--card-background)'] - Background used by the component.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [className=""] - CSS class name.
 */
export const DisplayCard = ({
  icon,
  title,
  style,
  background = 'var(--card-background)',
  children,
  className = "",
  ...rest
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
    <div className={className} style={cardStyle} {...rest}>
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
 * @category wrappers
 * @subcategory cards
 * @status stable
 * @description Width-constrained card wrapper with configurable percentage width.
  * @aiDiscoverability none
 * @param {string} [width='80%'] - Width used by the component.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {object} [cardProps] - Forwarded Card props.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const WidthCard = ({ width = '80%', children, cardProps, className = "", style = {}, ...rest }) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'center',
        minWidth: 'fit-content',
        ...style,
      }}
      {...rest}
    >
      <div style={{ width: width }}>
        <Card {...cardProps}>{children}</Card>
      </div>
    </div>
  )
}

/**
 * @component InlineImageCard
 * @category wrappers
 * @subcategory cards
 * @status stable
 * @description Card with inline image alongside content, using negative margin breakout.
  * @aiDiscoverability none
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {object} imgProps - Img props used by the component.
 * @param {object} imgStyle - Img style used by the component.
 * @param {object} cardProps - Card props used by the component.
 * @param {object} style - Style used by the component.
 * @param {string} [className=""] - CSS class name.
 */
export const InlineImageCard = ({
  children,
  imgProps,
  imgStyle,
  cardProps,
  style,
  className = "",
  ...rest
}) => {
  if (!imgProps?.src) {
    console.warn("[InlineImageCard] Missing required prop: imgProps.src");
    return null;
  }

  return (
    <Card className={className} {...cardProps} {...rest}>
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
