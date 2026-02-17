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
 * ScrollableDiagram - Interactive diagram viewer with zoom and pan controls
 *
 * @description
 * Displays diagrams or large content with zoom controls (25%-200%) and scrollable pan.
 * Includes zoom in/out buttons, reset button, and displays current zoom level.
 *
 * @param {React.ReactNode} children - Diagram or content to display
 * @param {string} [title=""] - Optional title to display above the diagram
 * @param {string} [maxHeight="500px"] - Maximum height of the scrollable container
 * @param {string} [minWidth="100%"] - Minimum width of the content area
 * @param {boolean} [showControls=false] - Whether to show zoom controls
 *
 * @example
 * <ScrollableDiagram title="System Architecture" maxHeight="600px">
 *   <img src="/diagrams/architecture.png" alt="Architecture" />
 * </ScrollableDiagram>
 *
 * @author Livepeer Documentation Team
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
