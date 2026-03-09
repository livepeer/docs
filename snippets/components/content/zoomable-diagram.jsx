/**
 * ──────────────────────────────────────────────────────────────
 * MERMAID STYLE GUIDE
 * ──────────────────────────────────────────────────────────────
 *
 * Paste the following init line as the FIRST line inside every
 * ```mermaid block to keep diagrams consistent across the repo:
 *
 * %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#1a1a1a', 'primaryTextColor': '#fff', 'primaryBorderColor': '#2d9a67', 'lineColor': '#2d9a67', 'secondaryColor': '#0d0d0d', 'tertiaryColor': '#1a1a1a', 'background': '#0d0d0d', 'fontFamily': 'system-ui', 'clusterBkg': 'rgba(255,255,255,0.05)', 'clusterBorder': '#2d9a67' }}}%%
 *
 * For thicker node borders, add after the flowchart/graph line:
 *     classDef default stroke-width:2px
 *
 * Rules:
 * - No parentheses in node labels — breaks the mermaid parser.
 *     Bad:  A["Smart Contracts (L2)"]
 *     Good: A["Smart Contracts - L2"]
 * - No leading indentation on mermaid lines inside JSX components.
 * - Blank line required between <ScrollableDiagram> tag and ```mermaid fence.
 *
 * Full usage example:
 *
 * <ScrollableDiagram title="My Diagram" maxHeight="600px">
 *
 * ```mermaid
 * %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#1a1a1a', 'primaryTextColor': '#fff', 'primaryBorderColor': '#2d9a67', 'lineColor': '#2d9a67', 'secondaryColor': '#0d0d0d', 'tertiaryColor': '#1a1a1a', 'background': '#0d0d0d', 'fontFamily': 'system-ui', 'clusterBkg': 'rgba(255,255,255,0.05)', 'clusterBorder': '#2d9a67' }}}%%
 * flowchart TD
 *     classDef default stroke-width:2px
 *     A[Node A] --> B[Node B]
 * ```
 *
 * </ScrollableDiagram>
 *
 * ──────────────────────────────────────────────────────────────
 */

/**
 * @component ScrollableDiagram
 * @category content
 * @tier composite
 * @status stable
 * @description Scrollable Diagram content component for rendering reader-facing documentation content.
 * @contentAffinity tutorial, concept, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/livepeer-protocol/livepeer-token.mdx, v2/about/livepeer-protocol/technical-architecture.mdx, v2/cn/about/livepeer-protocol/livepeer-token.mdx, v2/cn/about/livepeer-protocol/technical-architecture.mdx, v2/cn/gateways/about-gateways/gateway-architecture.mdx, v2/cn/gateways/about/architecture.mdx, v2/cn/gateways/references/technical-architecture.mdx, v2/cn/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/cn/gateways/run-a-gateway/configure/video-configuration.mdx, v2/cn/gateways/run-a-gateway/connect/connect-with-offerings.mdx, v2/cn/gateways/run-a-gateway/connect/lp-marketplace.mdx, v2/cn/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx, v2/cn/gateways/run-a-gateway/run-a-gateway.mdx, v2/es/about/livepeer-protocol/livepeer-token.mdx, v2/es/about/livepeer-protocol/technical-architecture.mdx, v2/es/gateways/about-gateways/gateway-architecture.mdx, v2/es/gateways/about/architecture.mdx, v2/es/gateways/references/technical-architecture.mdx, v2/es/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/es/gateways/run-a-gateway/configure/video-configuration.mdx, v2/es/gateways/run-a-gateway/connect/connect-with-offerings.mdx, v2/es/gateways/run-a-gateway/connect/lp-marketplace.mdx, v2/es/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx, v2/es/gateways/run-a-gateway/run-a-gateway.mdx, v2/fr/about/livepeer-protocol/livepeer-token.mdx, v2/fr/about/livepeer-protocol/technical-architecture.mdx, v2/fr/gateways/about-gateways/gateway-architecture.mdx, v2/fr/gateways/about/architecture.mdx, v2/fr/gateways/references/technical-architecture.mdx, v2/fr/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/fr/gateways/run-a-gateway/configure/video-configuration.mdx, v2/fr/gateways/run-a-gateway/connect/connect-with-offerings.mdx, v2/fr/gateways/run-a-gateway/connect/lp-marketplace.mdx, v2/fr/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx, v2/fr/gateways/run-a-gateway/run-a-gateway.mdx, v2/gateways/about/architecture.mdx, v2/gateways/references/technical-architecture.mdx, v2/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/gateways/run-a-gateway/configure/video-configuration-view.mdx, v2/gateways/run-a-gateway/configure/video-configuration.mdx, v2/gateways/run-a-gateway/connect/connect-with-offerings.mdx, v2/gateways/run-a-gateway/connect/lp-marketplace.mdx, v2/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx, v2/gateways/run-a-gateway/publish/connect-with-offerings.mdx, v2/gateways/run-a-gateway/run-a-gateway.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {string} [title=""] - title prop.
 * @param {string} [maxHeight="500px"] - max Height prop.
 * @param {string} [minWidth="100%"] - min Width prop.
 * @param {boolean} [showControls=false] - show Controls prop.
 * @example
 * <ScrollableDiagram>Example content</ScrollableDiagram>
 */
export const ScrollableDiagram = ({
  children,
  title = "",
  maxHeight = "500px",
  minWidth = "100%",
  showControls = false,
}) => {
  const [zoom, setZoom] = useState(100);

  const zoomIn = () => setZoom((z) => Math.min(z + 5, 200));
  const zoomOut = () => setZoom((z) => Math.max(z - 5, 25));
  const resetZoom = () => setZoom(100);

  const containerStyle = {
    overflow: "auto",
    maxHeight: maxHeight,
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "1rem",
    background: "var(--card-background)",
    cursor: "grab",
    position: "relative",
  };

  const buttonStyle = {
    background: "var(--accent)",
    color: "var(--button-text)",
    border: "none",
    borderRadius: "4px",
    padding: "4px 10px",
    cursor: "pointer",
    fontSize: "0.75rem",
    fontWeight: "600",
  };

  return (
    <>
      <div style={{ position: "relative", marginBottom: "1rem" }}>
        {title && (
          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
              color: "var(--text)",
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
            }}
          >
            {title}
          </p>
        )}
        <div style={containerStyle}>
          <div
            style={{
              minWidth: minWidth,
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top left",
            }}
          >
            {children}
          </div>
        </div>
        {showControls && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--muted-text)",
                marginRight: "auto",
              }}
            >
              Scroll to pan
            </span>
            <button style={buttonStyle} onClick={zoomOut} title="Zoom out">
              −
            </button>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--muted-text)",
                minWidth: "40px",
                textAlign: "center",
              }}
            >
              {zoom}%
            </span>
            <button style={buttonStyle} onClick={zoomIn} title="Zoom in">
              +
            </button>
            <button
              style={{ ...buttonStyle, background: "var(--border)" }}
              onClick={resetZoom}
              title="Reset zoom"
            >
              100%
            </button>
          </div>
        )}
      </div>
    </>
  );
};
