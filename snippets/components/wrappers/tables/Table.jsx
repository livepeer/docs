/**
 * @component DynamicTable
 * @category wrappers
 * @subcategory tables
 * @status stable
 * @deprecated Use DynamicTableV2 for new tables that need measured fit-content columns and fluid column tracks.
 * @description Renders structured data as a scrollable table with section separators and accessible region.
  * @aiDiscoverability none
 * @param {any} [tableTitle=null] - table Title prop.
 * @param {Array} [headerList=[]] - header List prop.
 * @param {Array} [itemsList=[]] - items List prop.
 * @param {Array} [monospaceColumns=[]] - monospace Columns prop.
 * @param {Array} [contentFitColumns=[]] - Column names that should size to their contents.
 * @param {any} margin - margin prop.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */
'use client'

export const DynamicTable = ({
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  columnWidths = {},
  contentFitColumns = [],
  showSeparators = false,
  margin,
  className = "",
  style = {},
  ...rest
}) => {
  if (!headerList.length) {
    return <div>No headers provided</div>;
  }

  const safeContentFitColumns = Array.isArray(contentFitColumns)
    ? contentFitColumns
    : [];
  const usesContentFitColumns = safeContentFitColumns.length > 0;
  const isContentFitColumn = (header) => safeContentFitColumns.includes(header);
  const getColumnStyle = (header) => {
    const widthStyle = columnWidths[header]
      ? {
          width: columnWidths[header],
          minWidth: columnWidths[header],
          maxWidth: columnWidths[header],
        }
      : {};
    const contentFitStyle = !columnWidths[header] && isContentFitColumn(header)
      ? {
          width: "1%",
          whiteSpace: "nowrap",
        }
      : {};

    return {
      ...contentFitStyle,
      ...widthStyle,
    };
  };

  return (
    <div className={className} style={style} {...rest}>
      {tableTitle && (
        <div style={{ fontStyle: "italic", margin: 0 }}>
          <strong>{tableTitle}</strong>
        </div>
      )}
      <div
        style={{ overflowX: "auto", ...(margin != null && { margin }) }}
        role="region"
        tabIndex={0}
        aria-label={tableTitle ? `Scrollable table: ${tableTitle}` : "Scrollable table"}
      >
        <table
          data-docs-dynamic-table
          style={{
            width: "100%",
            tableLayout: usesContentFitColumns ? "auto" : "fixed",
            borderCollapse: "collapse",
            fontSize: "0.9rem",
            marginTop: 0,
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--lp-color-on-accent)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {headerList.map((header, index) => (
                <th
                  key={index}
                  style={{
                    padding: "10px 8px",
                    textAlign: "left",
                    fontWeight: "600",
                    color: "var(--lp-color-on-accent)",
                    ...getColumnStyle(header),
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itemsList.filter((item) => showSeparators || !item?.__separator).map((item, rowIndex) => (
              item?.__separator ? (
                <tr
                  key={rowIndex}
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--lp-color-on-accent)",
                    borderBottom: "1px solid var(--accent)",
                  }}
                >
                  <td
                    colSpan={headerList.length}
                  style={{
                    padding: "6px 8px",
                    fontWeight: "700",
                      color: "var(--lp-color-on-accent)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item[headerList[0]] ?? item.Category ?? "Category"}
                  </td>
                </tr>
              ) : (
                <tr
                  key={rowIndex}
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  {headerList.map((header, colIndex) => {
                    const value =
                      item[header] ?? item[header.toLowerCase()] ?? "-";
                    const isMonospace = monospaceColumns.includes(colIndex);

                    return (
                      <td
                        key={colIndex}
                        style={{
                          padding: "8px 8px",
                          fontFamily: isMonospace ? "monospace" : "inherit",
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                          ...getColumnStyle(header),
                        }}
                      >
                        {isMonospace ? <code>{value}</code> : value}
                      </td>
                    );
                  })}
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/**
 * @component DynamicTableV2
 * @category wrappers
 * @subcategory tables
 * @status experimental
 * @description Renders structured data as a scrollable table with separator rows and intrinsic-width support for fit-to-content columns.
 * @aiDiscoverability none
 * @param {any} [tableTitle=null] - table Title prop.
 * @param {Array} [headerList=[]] - header List prop.
 * @param {Array} [itemsList=[]] - items List prop.
 * @param {Array} [monospaceColumns=[]] - monospace Columns prop.
 * @param {object} [columnWidths={}] - Preferred minimum widths keyed by header.
 * @param {object} [columnConfig={}] - Per-column layout flags keyed by header.
 * @param {any} margin - margin prop.
 * @param {string} [className=''] - Optional CSS class override.
 * @param {object} [style={}] - Optional inline style override.
 */
export const DynamicTableV2 = ({
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  columnWidths = {},
  columnConfig = {},
  showSeparators = false,
  margin,
  className = '',
  style = {},
  ...rest
}) => {
  if (!headerList.length) {
    return <div>No headers provided</div>
  }

  const tableRef = useRef(null)
  const [measuredColumnWidths, setMeasuredColumnWidths] = useState({})

  const measureFitColumns = () => {
    const tableElement = tableRef.current
    if (!tableElement) {
      return
    }

    const nextWidths = headerList.reduce((accumulator, header, index) => {
      const config = columnConfig?.[header] || {}

      if (!config.fitContent) {
        return accumulator
      }

      const contentNodes = tableElement.querySelectorAll(
        `[data-docs-column-key="${index}"] [data-docs-fit-content]`
      )

      let maxContentWidth = 0

      contentNodes.forEach((node) => {
        const width = Math.ceil(node.getBoundingClientRect().width)
        if (width > maxContentWidth) {
          maxContentWidth = width
        }
      })

      if (maxContentWidth > 0) {
        accumulator[header] = `${maxContentWidth + 16}px`
      }

      return accumulator
    }, {})

    setMeasuredColumnWidths((currentWidths) => {
      const currentEntries = Object.entries(currentWidths)
      const nextEntries = Object.entries(nextWidths)

      if (
        currentEntries.length === nextEntries.length &&
        nextEntries.every(([header, width]) => currentWidths[header] === width)
      ) {
        return currentWidths
      }

      return nextWidths
    })
  }

  useLayoutEffect(() => {
    measureFitColumns()
  }, [headerList, itemsList, columnConfig])

  useEffect(() => {
    const tableElement = tableRef.current
    if (!tableElement || typeof ResizeObserver === 'undefined') {
      return undefined
    }

    const resizeObserver = new ResizeObserver(() => {
      measureFitColumns()
    })

    resizeObserver.observe(tableElement)

    if (tableElement.parentElement) {
      resizeObserver.observe(tableElement.parentElement)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [headerList, itemsList, columnConfig])

  const fitHeaders = headerList.filter(
    (header) => columnConfig?.[header]?.fitContent
  )
  const hasMeasuredFitColumns =
    fitHeaders.length === 0 ||
    fitHeaders.every((header) => Boolean(measuredColumnWidths[header]))

  const getColumnStyle = (header, isMonospace = false) => {
    const config = columnConfig?.[header] || {}
    const fitContent = Boolean(config.fitContent)
    const fluid = Boolean(config.fluid)
    const nowrap = Boolean(config.nowrap) || fitContent || isMonospace
    const preferredWidth = columnWidths[header]
    const measuredWidth = measuredColumnWidths[header]

    return {
      ...(fitContent && measuredWidth
        ? {
            width: measuredWidth,
            minWidth: measuredWidth,
            maxWidth: measuredWidth,
          }
        : {}),
      ...(!fitContent && !fluid && preferredWidth
        ? { minWidth: preferredWidth }
        : {}),
      ...(nowrap
        ? { whiteSpace: 'nowrap' }
        : {
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }),
    }
  }

  const getColumnTrackStyle = (header) => {
    const config = columnConfig?.[header] || {}
    const fitContent = Boolean(config.fitContent)
    const fluid = Boolean(config.fluid)
    const preferredWidth = columnWidths[header]
    const measuredWidth = measuredColumnWidths[header]

    if (fitContent && measuredWidth) {
      return {
        width: measuredWidth,
        minWidth: measuredWidth,
        maxWidth: measuredWidth,
      }
    }

    if (fluid) {
      return {}
    }

    if (preferredWidth) {
      return { width: preferredWidth }
    }

    return {}
  }

  const renderCellContent = (header, content) => {
    const config = columnConfig?.[header] || {}

    if (!config.fitContent) {
      return content
    }

    return (
      <div
        data-docs-fit-content
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          width: 'max-content',
          maxWidth: 'none',
        }}
      >
        {content}
      </div>
    )
  }

  return (
    <div className={className} style={style} {...rest}>
      {tableTitle && (
        <div style={{ fontStyle: 'italic', margin: 0 }}>
          <strong>{tableTitle}</strong>
        </div>
      )}
      <div
        style={{ overflowX: 'auto', ...(margin != null && { margin }) }}
        role="region"
        tabIndex={0}
        aria-label={
          tableTitle ? `Scrollable table: ${tableTitle}` : 'Scrollable table'
        }
      >
        <table
          ref={tableRef}
          data-docs-dynamic-table-v2
          style={{
            width: '100%',
            tableLayout: hasMeasuredFitColumns ? 'fixed' : 'auto',
            borderCollapse: 'collapse',
            fontSize: '0.9rem',
            marginTop: 0,
          }}
        >
          <colgroup>
            {headerList.map((header, index) => (
              <col key={index} style={getColumnTrackStyle(header)} />
            ))}
          </colgroup>
          <thead>
            <tr
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--lp-color-on-accent)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {headerList.map((header, index) => (
                <th
                  key={index}
                  data-docs-column-key={index}
                  style={{
                    padding: '10px 8px',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: 'var(--lp-color-on-accent)',
                    verticalAlign: 'top',
                    ...getColumnStyle(header),
                  }}
                >
                  {renderCellContent(header, header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itemsList
              .filter((item) => showSeparators || !item?.__separator)
              .map((item, rowIndex) =>
                item?.__separator ? (
                  <tr
                    key={rowIndex}
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'var(--lp-color-on-accent)',
                      borderBottom: '1px solid var(--accent)',
                    }}
                  >
                    <td
                      colSpan={headerList.length}
                      style={{
                        padding: '6px 8px',
                        fontWeight: '700',
                        color: 'var(--lp-color-on-accent)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item[headerList[0]] ?? item.Category ?? 'Category'}
                    </td>
                  </tr>
                ) : (
                  <tr
                    key={rowIndex}
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    {headerList.map((header, colIndex) => {
                      const value =
                        item[header] ?? item[header.toLowerCase()] ?? '-'
                      const isMonospace = monospaceColumns.includes(colIndex)

                      return (
                        <td
                          key={colIndex}
                          data-docs-column-key={colIndex}
                          style={{
                            padding: '8px 8px',
                            fontFamily: isMonospace ? 'monospace' : 'inherit',
                            verticalAlign: 'top',
                            ...getColumnStyle(header, isMonospace),
                          }}
                        >
                          {renderCellContent(
                            header,
                            isMonospace ? <code>{value}</code> : value
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
