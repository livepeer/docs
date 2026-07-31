/**
 * @component Quote
 * @category displays
 * @subcategory quotes
 * @status stable
 * @description Styled blockquote with accent border and centred italic text.
  * @aiDiscoverability none
 * @usedIn v2/about/protocol/core-mechanisms.mdx, v2/about/protocol/governance-model.mdx, v2/about/protocol/livepeer-token.mdx, v2/about/protocol/overview.mdx, v2/about/protocol/technical-architecture.mdx, v2/about/protocol/treasury.mdx, v2/gateways/setup/guide.mdx, v2/home/about/roadmap.mdx, v2/home/about/vision.mdx, v2/internal/rfp/aims.mdx, v2/internal/rfp/report.mdx, v2/orchestrators/guides/deployment-details/join-a-pool.mdx, v2/orchestrators/guides/deployment-details/setup-options.mdx
 * @breakingChangeRisk medium
 * @lastMeaningfulChange 2026-04-08
 * @param {any} children - children prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const Quote = ({ children, className = "", style = {}, ...rest }) => {
  const quoteStyle = {
    fontSize: "1rem",
    textAlign: 'center',
    opacity: 1,
    fontStyle: 'italic',
    color: 'var(--lp-color-accent)',
    border: '1px solid var(--lp-color-border-default)',
    borderRadius: "8px",
    padding: "var(--lp-spacing-4)",
    margin: '1rem 0',
    ...style,
  }
  return <blockquote className={className} style={quoteStyle} {...rest}>{children}</blockquote>
}

/**
 * @component FrameQuote
 * @category displays
 * @subcategory quotes
 * @status stable
 * @description Framed blockquote with optional author, source link, and image.
  * @aiDiscoverability none
 * @usedIn v2/about/protocol/core-mechanisms.mdx, v2/about/protocol/overview.mdx, v2/home/about/benefits.mdx, v2/home/about/ecosystem.mdx, v2/home/about/vision.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-08
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
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
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
        gap: "var(--lp-spacing-1)",
        margin: 0,
      }}
    >
      <div
        style={{
          borderLeft: `4px solid var(--lp-color-accent)`,
          paddingLeft: "var(--lp-spacing-4)",
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
            marginLeft: align === 'left' ? "var(--lp-spacing-6)" : 0,
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
                      borderBottom: '1px solid var(--lp-color-accent)',
                      fontSize: "1rem",
                    }}
                  >
                    {source}
                  </span>{' '}
                  <Icon icon="arrow-up-right" size={12} color="var(--lp-color-accent)" />
                </a>
              ) : (
                <span
                  style={{
                    opacity: 0.7,
                    fontStyle: 'italic',
                    fontSize: "1rem",
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
        borderRadius: "8px",
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
