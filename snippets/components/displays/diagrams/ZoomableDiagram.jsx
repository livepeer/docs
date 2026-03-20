/**
 * @component ScrollableDiagram
 * @type displays
 * @subniche diagrams
 * @status stable
 * @description Pannable, zoomable diagram container with zoom controls and accessible buttons.
 * @accepts children, className, style, ...rest
 * @aiDiscoverability none
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [title=""] - Title text rendered by the component.
 * @param {string} [maxHeight="500px"] - Max height used by the component.
 * @param {string} [minWidth="100%"] - Min width used by the component.
 * @param {boolean} [showControls=false] - Boolean flag that controls component behaviour.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */
export const ScrollableDiagram = ({
  children,
  title = "",
  maxHeight = "500px",
  minWidth = "100%",
  showControls = false,
  className = "",
  style = {},
  ...rest
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
      <div className={className} style={{ position: "relative", marginBottom: "1rem", ...style }} {...rest}>
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
            <button style={buttonStyle} onClick={zoomOut} title="Zoom out" aria-label="Zoom out">
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
            <button style={buttonStyle} onClick={zoomIn} title="Zoom in" aria-label="Zoom in">
              +
            </button>
            <button
              style={{ ...buttonStyle, background: "var(--border)" }}
              onClick={resetZoom}
              title="Reset zoom"
              aria-label="Reset zoom to 100%"
            >
              100%
            </button>
          </div>
        )}
      </div>
    </>
  );
};
