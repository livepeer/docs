/**
 * @component ScrollableDiagram
 * @category displays
 * @subcategory diagrams
 * @status stable
 * @description Pannable diagram container with deterministic preset zoom controls rendered without client-side React state.
 * @aiDiscoverability none
 * @param {React.ReactNode} children - Content rendered inside the component.
 * @param {string} [title=""] - Title text rendered by the component.
 * @param {string} [maxHeight="500px"] - Max height used by the component.
 * @param {string} [minWidth="100%"] - Min width used by the component.
 * @param {boolean} [showControls=false] - When true, renders preset zoom controls.
 * @param {string} [className=""] - CSS class name.
 * @param {object} [style={}] - Inline style overrides.
 */

export const ScrollableDiagram = ({
  children,
  title = '',
  maxHeight = '500px',
  minWidth = '100%',
  showControls = false,
  className = '',
  style = {},
  ...rest
}) => {
  const buildDiagramKey = (currentTitle = '', currentClassName = '') => {
    const source = `${currentTitle}|${currentClassName}|scrollable-diagram`
    let hash = 0

    for (let index = 0; index < source.length; index += 1) {
      hash = (hash * 31 + source.charCodeAt(index)) >>> 0
    }

    return `docs-diagram-${hash.toString(36)}`
  }

  const diagramKey = buildDiagramKey(title, className)
  const zoomName = `${diagramKey}-zoom`
  const zoomLevels = [
    { label: '75%', value: 0.75 },
    { label: '100%', value: 1 },
    { label: '125%', value: 1.25 },
    { label: '150%', value: 1.5 },
  ]

  const containerStyle = {
    overflow: 'auto',
    maxHeight,
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '1rem',
    background: 'var(--card-background)',
    position: 'relative',
  }

  return (
    <div className={className} style={{ position: 'relative', marginBottom: '1rem', ...style }} {...rest}>
      {title && (
        <p
          style={{
            textAlign: 'center',
            fontStyle: 'italic',
            color: 'var(--text)',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          {title}
        </p>
      )}

      {showControls ? (
        <style>{`
          [data-docs-diagram-key="${diagramKey}"] [data-docs-diagram-content] {
            transform: scale(1);
            transform-origin: top left;
            width: max-content;
          }
          ${zoomLevels
            .map(
              (zoomLevel) => `
          #${diagramKey}-${zoomLevel.label.replace('%', '')}:checked ~ [data-docs-diagram-shell] [data-docs-diagram-content] {
            transform: scale(${zoomLevel.value});
          }
          #${diagramKey}-${zoomLevel.label.replace('%', '')}:checked ~ [data-docs-diagram-controls] label[for="${diagramKey}-${zoomLevel.label.replace('%', '')}"] {
            background: var(--accent);
            color: var(--button-text);
            border-color: var(--accent);
          }`
            )
            .join('\n')}
        `}</style>
      ) : null}

      {showControls
        ? zoomLevels.map((zoomLevel) => {
            const inputId = `${diagramKey}-${zoomLevel.label.replace('%', '')}`
            return (
              <input
                key={inputId}
                id={inputId}
                type="radio"
                name={zoomName}
                defaultChecked={zoomLevel.value === 1}
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
              />
            )
          })
        : null}

      <div
        data-docs-diagram-key={diagramKey}
        data-docs-diagram-shell
        style={containerStyle}
      >
        <div
          data-docs-diagram-content
          style={{
            minWidth,
            transformOrigin: 'top left',
            width: 'max-content',
          }}
        >
          {children}
        </div>
      </div>

      {showControls ? (
        <div
          data-docs-diagram-controls
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--muted-text)',
              marginRight: 'auto',
            }}
          >
            Scroll to pan
          </span>
          {zoomLevels.map((zoomLevel) => {
            const inputId = `${diagramKey}-${zoomLevel.label.replace('%', '')}`
            return (
              <label
                key={inputId}
                htmlFor={inputId}
                style={{
                  background: 'transparent',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                }}
              >
                {zoomLevel.label}
              </label>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
