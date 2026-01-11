/**
 * DynamicTable - A reusable table component with site-consistent styling
 *
 * Props:
 *   - headerList: Array of strings for column headers
 *   - itemsList: Array of objects where keys match headerList values
 *   - monospaceColumns: Optional array of column indices (0-based) to render in monospace
 */
export const DynamicTable = ({
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
}) => {
  if (!headerList.length) {
    return <div>No headers provided</div>;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.9rem",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#2d9a67", color: "#fff" }}>
            {headerList.map((header, index) => (
              <th
                key={index}
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontWeight: "600",
                  borderBottom: "2px solid #2d9a67",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {itemsList.map((item, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: "1px solid #333" }}>
              {headerList.map((header, colIndex) => {
                const value = item[header] ?? item[header.toLowerCase()] ?? "-";
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
          ))}
        </tbody>
      </table>
    </div>
  );
};
