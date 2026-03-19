/**
 * @component Quote
 * @type displays
 * @subniche quotes
 * @status stable
 * @description Styled blockquote with accent border and centred italic text.
 * @accepts children, className, style, ...rest
 * @param {any} children - children prop.
 */
export const Quote = ({ children, className = "", style = {}, ...rest }) => {
  const quoteStyle = {
    fontSize: '1rem',
    textAlign: 'center',
    opacity: 1,
    fontStyle: 'italic',
    color: 'var(--accent)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem 0',
    ...style,
  }
  return <blockquote className={className} style={quoteStyle} {...rest}>{children}</blockquote>
}

/**
 * @component FrameQuote
 * @type displays
 * @subniche quotes
 * @status stable
 * @description Framed blockquote with optional author, source link, and image.
 * @accepts children, className, style, ...props
 * @param {any} children - children prop.
 * @param {any} author - author prop.
 * @param {any} source - source prop.
 * @param {any} href - href prop.
 * @param {boolean} [frame=true] - frame prop.
 * @param {string} [align='right'] - align prop.
 * @param {any} borderColor - border Color prop.
 * @param {any} img - img prop.
 * @param {boolean} [spacing=true] - spacing prop.
 * @param {any} props - props prop.
 */
export const FrameQuote = ({
  children,
  author,
  source,
  href,
  frame = true,
  align = 'right',
  borderColor,
  img,
  spacing = true,
  className = "",
  style = {},
  ...props
}) => {
  const alignmentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }

  const content = (
    <blockquote
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0.75rem 1rem 0.25rem 1rem',
        gap: '0.25rem',
        margin: 0,
      }}
    >
      <div
        style={{
          borderLeft: `4px solid var(--accent)`,
          paddingLeft: '1rem',
          fontStyle: 'italic',
        }}
      >
        {children}
      </div>
      {(author || source) && (
        <div
          style={{
            display: 'flex',
            justifyContent: alignmentMap[align] || 'flex-end',
            marginLeft: align === 'left' ? '1.5rem' : 0,
          }}
        >
          <div style={{ textAlign: align === 'center' ? 'center' : 'left' }}>
            {author && (
              <div>
                {spacing && <br />}
                <Icon icon="microphone" />{' '}
                <strong>
                  <em>{author}</em>
                </strong>
              </div>
            )}
            {source &&
              (href ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <span
                    style={{
                      opacity: 0.7,
                      fontStyle: 'italic',
                      borderBottom: '1px solid var(--accent)',
                      fontSize: '1rem',
                    }}
                  >
                    {source}
                  </span>{' '}
                  <Icon icon="arrow-up-right" size={12} color="var(--accent)" />
                </a>
              ) : (
                <span
                  style={{
                    opacity: 0.7,
                    fontStyle: 'italic',
                    fontSize: '1rem',
                  }}
                >
                  {source}
                </span>
              ))}
          </div>
        </div>
      )}
    </blockquote>
  )

  return frame ? (
    <div
      className={className}
      style={{
        border: borderColor ? `1px solid ${borderColor}` : 'none',
        borderRadius: '8px',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      <Frame style={{ border: 'none' }}>
        {img && <img src={img.src} alt={img.alt} />}
        {content}
      </Frame>
    </div>
  ) : (
    content
  )
}
