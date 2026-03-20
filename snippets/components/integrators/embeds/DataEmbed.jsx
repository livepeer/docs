/**
 * @component MarkdownEmbed
 * @type integrators
 * @subniche embeds
 * @status stable
 * @description Fetches and renders remote markdown content.
 * @dataSource fetch(url)
 * @accepts {string} url, {string} className, {object} style, ...rest
 * @aiDiscoverability snapshot
 * @param {string} url - Destination URL used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const MarkdownEmbed = ({ url, className = "", style = {}, ...rest }) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent)
  }, [url])

  return <div className={className} style={style} {...rest}><Markdown>{content}</Markdown></div>
}

/**
 * @component PdfEmbed
 * @type integrators
 * @subniche embeds
 * @status stable
 * @description Embeds a PDF in a framed iframe with caption.
 * @dataSource iframe(src)
 * @accepts {React.ReactNode} title, {string} src, {string} height, {string} width, {string} className, {object} style, ...rest
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {string} src - Asset or embed source used by the component.
 * @param {string} [height='700px'] - Height used by the component.
 * @param {string} [width='100%'] - Width used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const PdfEmbed = ({
  title,
  src,
  height = '700px',
  width = '100%',
  className = "",
  style = {},
  ...rest
}) => (
  <Frame caption={title} className={className} style={style} {...rest}>
    <iframe src={src} width={width} height={height} frameBorder="0" title={title}></iframe>
  </Frame>
)

/**
 * @component EmbedMarkdown
 * @type integrators
 * @subniche embeds
 * @status deprecated
 * @description Alias for MarkdownEmbed — use MarkdownEmbed instead.
 * @deprecated Use MarkdownEmbed. Kept for backwards-compat — see tasks/reports/archived-components-review.md
 * @see MarkdownEmbed
 * @dataSource fetch(url)
 * @accepts {string} url, {string} className, {object} style, ...rest
 * @param {string} url - Destination URL used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const EmbedMarkdown = ({ url, className = "", style = {}, ...rest }) => <MarkdownEmbed url={url} className={className} style={style} {...rest} />

/**
 * @component TwitterTimeline
 * @type integrators
 * @subniche embeds
 * @status stable
 * @description Embeds a Twitter/X timeline feed widget via iframe.
 * @dataSource feed.mikle.com widget
 * @accepts {string} className, {object} style, ...rest
 * @aiDiscoverability none
 * @aiDiscoverabilityNote 3rd-party iframe widget (mikle.com) — no static data in HTML, no API access for snapshot. Twitter feed content is not crawlable. No companion file possible.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const TwitterTimeline = ({ className = "", style = {}, ...rest }) => {
  return (
    <div
      className={className}
      style={{
        border: '3px solid var(--accent)',
        borderRadius: '12px',
        overflow: 'hidden',
        height: '600px',
        ...style,
      }}
      {...rest}
    >
      <iframe
        src="https://feed.mikle.com/widget/v2/176804/"
        title="Livepeer Twitter Timeline"
        style={{
          border: 'none',
          transform: 'scale(1.01)',
          transformOrigin: 'center',
        }}
        height="652px"
        width="100%"
        className="fw-iframe"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  )
}
