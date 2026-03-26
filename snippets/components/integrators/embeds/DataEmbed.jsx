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
  const [html, setHtml] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((md) => {
        // Basic markdown-to-HTML conversion (no external deps)
        const converted = md
          // Code blocks (```lang ... ```)
          .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
          // Inline code
          .replace(/`([^`]+)`/g, '<code>$1</code>')
          // Images
          .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" style="max-width:100%" />')
          // Links
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
          // Headings
          .replace(/^######\s+(.+)$/gm, '<h6>$1</h6>')
          .replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>')
          .replace(/^####\s+(.+)$/gm, '<h4>$1</h4>')
          .replace(/^###\s+(.+)$/gm, '<h3>$1</h3>')
          .replace(/^##\s+(.+)$/gm, '<h2>$1</h2>')
          .replace(/^#\s+(.+)$/gm, '<h1>$1</h1>')
          // Bold + italic
          .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.+?)\*/g, '<em>$1</em>')
          // Horizontal rules
          .replace(/^---$/gm, '<hr />')
          // Unordered lists
          .replace(/^[-*]\s+(.+)$/gm, '<li>$1</li>')
          // Paragraphs (double newline)
          .replace(/\n\n/g, '</p><p>')
          // Single newlines to <br>
          .replace(/\n/g, '<br />');
        setHtml('<p>' + converted + '</p>');
      })
  }, [url])

  if (!html) return <div className={className} style={style} {...rest}><p style={{ color: 'var(--text-secondary)' }}>Loading...</p></div>;

  return <div className={className} style={style} {...rest} dangerouslySetInnerHTML={{ __html: html }} />
}

/**
 * @component PdfEmbed
 * @type integrators
 * @subniche embeds
 * @status stable
 * @description Embeds a PDF in a framed iframe with caption.
 * @dataSource iframe(src)
 * @accepts {React.ReactNode} title, {string} src, {string} height, {string} width, {string} className, {object} style, ...rest
  * @aiDiscoverability none
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
