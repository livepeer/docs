export const Quote = ({ children }) => {
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
  }
  return <div style={quoteStyle}>{children}</div>
}

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
  ...props
}) => {
  const alignmentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }

  const content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0.75rem 1rem 0.25rem 1rem',
        gap: '0.25rem',
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
                <a href={href} target="_blank">
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
    </div>
  )

  return frame ? (
    <div
      style={{
        border: borderColor ? `1px solid ${borderColor}` : 'none',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <Frame {...props} style={{ border: 'none' }}>
        {img && <img src={img.src} alt={img.alt} />}
        {content}
      </Frame>
    </div>
  ) : (
    content
  )
}
