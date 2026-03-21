/**
 * @component DynamicTable
 * @type wrappers
 * @subniche tables
 * @status stable
 * @description Renders structured data as a scrollable table with section separators and accessible region.
 * @accepts className, style, ...rest
  * @aiDiscoverability none
 * @param {any} [tableTitle=null] - table Title prop.
 * @param {Array} [headerList=[]] - header List prop.
 * @param {Array} [itemsList=[]] - items List prop.
 * @param {Array} [monospaceColumns=[]] - monospace Columns prop.
 * @param {any} margin - margin prop.
  * @param {string} [className=''] - Optional CSS class override.
  * @param {object} [style={}] - Optional inline style override.
 */
export const DynamicTable = ({
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  margin,
  className = "",
  style = {},
  ...rest
}) => {
  if (!headerList.length) {
    return <div>No headers provided</div>;
  }

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
          style={{
            width: "100%",
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
              }}
            >
              {headerList.map((header, index) => (
                <th
                  key={index}
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "600",
                    borderBottom: "2px solid var(--accent)",
                    color: "var(--lp-color-on-accent)",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itemsList.map((item, rowIndex) => (
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
                    padding: "8px 16px",
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
                          padding: "10px 16px",
                          fontFamily: isMonospace ? "monospace" : "inherit",
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
