import { ThemeData } from "/snippets/styles/themeStyles.jsx";

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
}) => {
  const [zoom, setZoom] = useState(100);

  const zoomIn = () => setZoom((z) => Math.min(z + 5, 200));
  const zoomOut = () => setZoom((z) => Math.max(z - 5, 25));
  const resetZoom = () => setZoom(100);

  const containerStyle = {
    overflow: "auto",
    maxHeight: maxHeight,
    border: "1px solid var(--diagram-border)",
    borderRadius: "8px",
    padding: "1rem",
    background: "var(--diagram-bg)",
    cursor: "grab",
    position: "relative",
  };

  const buttonStyle = {
    background: "var(--diagram-button-bg)",
    color: "var(--diagram-button-text)",
    border: "none",
    borderRadius: "4px",
    padding: "4px 10px",
    cursor: "pointer",
    fontSize: "0.75rem",
    fontWeight: "600",
  };

  return (
    <>
      <style>{`
        :root {
          --diagram-border: ${ThemeData.light.border};
          --diagram-bg: ${ThemeData.light.cardBackground};
          --diagram-title-text: ${ThemeData.light.text};
          --diagram-hint-text: ${ThemeData.light.mutedText};
          --diagram-zoom-text: ${ThemeData.light.mutedText};
          --diagram-button-bg: ${ThemeData.light.accent};
          --diagram-button-text: ${ThemeData.light.buttonText};
          --diagram-reset-bg: ${ThemeData.light.border};
        }
        .dark {
          --diagram-border: ${ThemeData.dark.border};
          --diagram-bg: ${ThemeData.dark.cardBackground};
          --diagram-title-text: ${ThemeData.dark.text};
          --diagram-hint-text: ${ThemeData.dark.mutedText};
          --diagram-zoom-text: ${ThemeData.dark.mutedText};
          --diagram-button-bg: ${ThemeData.dark.accent};
          --diagram-button-text: ${ThemeData.dark.buttonText};
          --diagram-reset-bg: ${ThemeData.dark.border};
        }
      `}</style>
      <div style={{ position: "relative", marginBottom: "1rem" }}>
        {title && (
          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
              color: "var(--diagram-title-text)",
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
              color: "var(--diagram-hint-text)",
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
              color: "var(--diagram-zoom-text)",
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
            style={{ ...buttonStyle, background: "var(--diagram-reset-bg)" }}
            onClick={resetZoom}
            title="Reset zoom"
          >
            100%
          </button>
        </div>
      </div>
    </>
  );
};
