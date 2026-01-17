import { ThemeData } from "/snippets/styles/themeStyles.jsx";

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
    <>
      <style>{`
        :root {
          --table-header-bg: ${ThemeData.light.accent};
          --table-header-border: ${ThemeData.light.accent};
          --table-row-border: ${ThemeData.light.border};
        }
        .dark {
          --table-header-bg: ${ThemeData.dark.accent};
          --table-header-border: ${ThemeData.dark.accent};
          --table-row-border: ${ThemeData.dark.border};
        }
      `}</style>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "var(--table-header-bg)",
                color: "#fff",
              }}
            >
              {headerList.map((header, index) => (
                <th
                  key={index}
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "600",
                    borderBottom: "2px solid var(--table-header-border)",
                    color: "#fff",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itemsList.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                style={{ borderBottom: "1px solid var(--table-row-border)" }}
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
