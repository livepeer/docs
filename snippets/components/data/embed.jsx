/**
 * @component MarkdownEmbed
 * @category data
 * @tier pattern
 * @status stable
 * @description Dynamically fetches markdown content from a remote URL and renders it. Uses React
 *   hooks to manage the fetch lifecycle
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies PdfEmbed, TwitterTimeline
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource live API
 * @duplicates EmbedMarkdown
 * @lastMeaningfulChange 2026-03-10
 * @param {string} url - Destination URL used by the component.
 *
 * @example
 * <MarkdownEmbed url="/example" />
 */
export const MarkdownEmbed = ({ url }) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent)
  }, [url])

  return <Markdown>{content}</Markdown>
}

/**
 * PdfEmbed - Displays an embedded PDF or PDF-like document inside a frame
 *
 * @description
 * Wraps an iframe in a Mintlify Frame so long-form external documents can be
 * embedded with a caption and responsive width.
 *
 * @param {string} title - Frame caption and iframe title
 * @param {string} src - PDF or embeddable document URL
 * @param {string} [height="700px"] - Iframe height
 * @param {string} [width="100%"] - Iframe width
 *
 * @example
 * <PdfEmbed title="Whitepaper" src="https://example.com/whitepaper.pdf" />
 *
 * @author Livepeer Documentation Team
 */
/**
 * @component PdfEmbed
 * @category data
 * @tier pattern
 * @status stable
 * @description Wraps an iframe in a Mintlify Frame so long-form external documents can be embedded
 *   with a caption and responsive width
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies TwitterTimeline
 * @usedIn v2/gateways/payments/payment-clearinghouse.mdx, v2/internal/overview/docs-philosophy.mdx, v2/internal/rfp/aims.mdx, v2/lpt/treasury/overview.mdx, v2/resources/media-kit.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource live API
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @param {React.ReactNode} title - Title text rendered by the component.
 * @param {string} src - Asset or embed source used by the component.
 * @param {string} [height='700px'] - Height used by the component.
 * @param {string} [width='100%'] - Width used by the component.
 *
 * @example
 * <PdfEmbed title="Example" src="https://example.com" />
 */
export const PdfEmbed = ({
  title,
  src,
  height = '700px',
  width = '100%',
}) => (
  <Frame caption={title}>
    <iframe src={src} width={width} height={height} frameBorder="0" title={title}></iframe>
  </Frame>
)

// ARCHIVED: duplicate of MarkdownEmbed - see tasks/reports/archived-components-review.md
// export const EmbedMarkdown = ({ url }) => <MarkdownEmbed url={url} />

/**
 * @component TwitterTimeline
 * @category data
 * @tier pattern
 * @status stable
 * @description Renders the twitter timeline component
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies none
 * @usedIn v2/community/livepeer-community/trending-topics.mdx, v2/home/trending.mdx
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource live API
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
 * @example
 * <TwitterTimeline />
 */
export const TwitterTimeline = ({}) => {
  return (
    <div
      style={{
        border: '3px solid var(--accent)',
        borderRadius: '12px',
        overflow: 'hidden',
        height: '600px',
      }}
    >
      <iframe
        src="https://feed.mikle.com/widget/v2/176804/"
        style={{
          border: 'none',
          transform: 'scale(1.01)', // Shrink by 1% to hide border
          transformOrigin: 'center',
        }}
        height="652px" // Increase height by 4px (2px top + 2px bottom)
        width="100%" // Increase width by 4px (2px left + 2px right)
        class="fw-iframe"
        frameborder="none"
        scrolling="no"
      ></iframe>
    </div>
  )
}
