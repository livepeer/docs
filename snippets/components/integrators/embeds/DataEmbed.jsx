/**
 * @component MarkdownEmbed
 * @category integrators
 * @subcategory embeds
 * @status stable
 * @description Fetches and renders remote markdown content.
 * @dataSource fetch(url)
 * @aiDiscoverability snapshot
 * @param {string} url - Destination URL used by the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
'use client'
import { LazyLoad } from '/snippets/components/wrappers/containers/Layout.jsx'
import { BorderedBox } from '/snippets/components/wrappers/containers/Containers.jsx'

/**
 * @component SolidityEmbed
 * @category integrators
 * @subcategory embeds
 * @status stable
 * @description Fetches and renders a remote Solidity file with syntax highlighting inside a styled container. Lazy-loaded.
 * @dataSource fetch(url) — raw GitHub .sol file
 * @aiDiscoverability snapshot
 * @usedIn v2/about/protocol/blockchain-contracts.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} url - Raw GitHub URL to the .sol file.
 * @param {React.ReactNode} [title] - Optional title displayed above the code block. Accepts strings or components.
 * @param {string} [filename] - Filename shown on the CodeBlock header.
 * @param {string} [maxHeight="500px"] - Max height of the code container.
 * @param {object} [style={}] - Inline style overrides.
 * @param {string} [className=""] - CSS class name.
 */
export const SolidityEmbed = ({
  url,
  title,
  filename,
  maxHeight = '500px',
  className = '',
  style = {},
  ...rest
}) => {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.text()
      })
      .then((text) => setCode(text))
      .catch(() => setError(true))
  }, [url])

  const styles = {
    titleBar: {
      padding: '0.5rem 0',
      borderBottom: '1px solid var(--lp-color-border-default)',
      fontSize: '0.8rem',
      color: 'var(--text-secondary)',
      fontFamily: 'monospace',
    },
    scrollContainer: {
      maxHeight,
      overflowY: 'auto',
    },
    message: {
      padding: "var(--lp-spacing-4)",
      color: 'var(--text-secondary)',
    },
  }

  return (
    <LazyLoad height={maxHeight}>
      <BorderedBox variant="muted">
        <div className={className} style={style} {...rest}>
          {title && <div style={styles.titleBar}>{title}</div>}
          <div style={styles.scrollContainer}>
            {error && <p style={styles.message}>Failed to load contract source.</p>}
            {!error && !code && <p style={styles.message}>Loading...</p>}
            {code && (
              <CodeBlock language="js" filename={filename}>
                {code}
              </CodeBlock>
            )}
          </div>
        </div>
      </BorderedBox>
    </LazyLoad>
  )
}

export const MarkdownEmbed = ({ url, className = '', style = {}, ...rest }) => {
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
          .replace(
            /!\[([^\]]*)\]\(([^)]+)\)/g,
            '<img alt="$1" src="$2" style="max-width:100%" />'
          )
          // Links
          .replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
          )
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
          .replace(/\n/g, '<br />')
        setHtml('<p>' + converted + '</p>')
      })
  }, [url])

  if (!html)
    return (
      <div className={className} style={style} {...rest}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading...</p>
      </div>
    )

  return (
    <div
      className={className}
      style={style}
      {...rest}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

/**
 * @component PdfEmbed
 * @category integrators
 * @subcategory embeds
 * @status stable
 * @description Embeds a PDF in a framed iframe with caption.
 * @dataSource iframe(src)
 * @aiDiscoverability none
 * @usedIn v2/delegators/guides/treasury/overview.mdx, v2/internal/rfp/aims.mdx, v2/resources/compendium/media-kit.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
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
  className = '',
  style = {},
  ...rest
}) => (
  <Frame caption={title} className={className} style={style} {...rest}>
    <iframe
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      title={title}
    ></iframe>
  </Frame>
)

/**
 * @component TwitterTimeline
 * @category integrators
 * @subcategory embeds
 * @status stable
 * @description Embeds a Twitter/X timeline feed widget via iframe.
 * @dataSource feed.mikle.com widget
 * @aiDiscoverability none
 * @aiDiscoverabilityNote 3rd-party iframe widget (mikle.com) — no static data in HTML, no API access for snapshot. Twitter feed content is not crawlable. No companion file possible.
 * @usedIn v2/community/livepeer-community/trending-topics.mdx, v2/home/solutions/trending.mdx
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const TwitterTimeline = ({ className = '', style = {}, ...rest }) => {
  return (
    <div
      className={className}
      style={{
        border: '3px solid var(--lp-color-accent)',
        borderRadius: "12px",
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
/**
 * @component ExternalContent
 * @category integrators
 * @subcategory embeds
 * @status stable
 * @description Fetches and renders external markdown with scrollable container and source link.
 * @dataSource fetch(url)
  * @aiDiscoverability none
 * @breakingChangeRisk low
 * @lastMeaningfulChange 2026-04-09
 * @param {string} repoName - Repo name used by the component.
 * @param {string} githubUrl - Github url used by the component.
 * @param {string} [maxHeight="1000px"] - Max height used by the component.
 * @param {string} [icon="github"] - Icon configuration used by the component.
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const ExternalContent = ({
  repoName,
  githubUrl,
  maxHeight = "1000px",
  icon = "github",
  children,
  className = "",
  style = {},
  ...rest
}) => {
  return (
    <div
      className={className}
      style={{
        border: "1px solid var(--lp-color-accent)",
          borderRadius: "8px",
          overflow: "hidden",
          marginTop: "var(--lp-spacing-4)",
          ...style,
        }}
      {...rest}
      >
        <div
          style={{
            backgroundColor: "var(--lp-color-bg-card)",
            padding: "0.75rem 1rem",
            borderBottom: "1px solid var(--lp-color-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{ display: "flex", alignItems: "center", gap: "var(--lp-spacing-2)" }}
          >
            <Icon icon={icon} size={16} />
            <strong>{repoName}</strong>
          </span>
          <a
            href={githubUrl}
            target="_blank" rel="noopener noreferrer"
            style={{
              color: "var(--lp-color-accent)",
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              gap: "var(--lp-spacing-1)",
            }}
          >
            View on GitHub <Icon icon="arrow-up-right-from-square" size={12} />
          </a>
        </div>
        <div
          style={{
            maxHeight: maxHeight,
            overflowY: "auto",
            padding: "0 1rem",
          }}
          role="region"
          tabIndex={0}
          aria-label={repoName ? `Scrollable content for ${repoName}` : "Scrollable content"}
        >
          {children}
        </div>
      </div>
  );
};
