/**
 * @component ScrollableDiagram
 * @category content
 * @tier composite
 * @status stable
 * @description ──────────────────────────────────────────────────────────────
 * @contentAffinity universal
 * @owner @livepeer/docs-team
 * @dependencies none
 * @usedIn v2/about/livepeer-protocol/livepeer-token.mdx, v2/about/livepeer-protocol/technical-architecture.mdx, v2/gateways/about/architecture.mdx, v2/gateways/references/technical-architecture.mdx, v2/gateways/run-a-gateway/configure/dual-configuration.mdx, v2/gateways/run-a-gateway/configure/video-configuration-view.mdx, v2/gateways/run-a-gateway/configure/video-configuration.mdx, v2/gateways/run-a-gateway/connect/connect-with-offerings.mdx, v2/gateways/run-a-gateway/connect/lp-marketplace.mdx, v2/gateways/run-a-gateway/monitor/monitor-and-optimise.mdx, v2/gateways/run-a-gateway/publish/connect-with-offerings.mdx, v2/gateways/run-a-gateway/run-a-gateway.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-08
 *
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [title=""] - Title text rendered by the component.
 * @param {string} [maxHeight="500px"] - Max height used by the component.
 * @param {string} [minWidth="100%"] - Min width used by the component.
 * @param {boolean} [showControls=false] - Boolean flag that controls component behaviour.
 *
 * @example
 * <ScrollableDiagram>Example</ScrollableDiagram>
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
