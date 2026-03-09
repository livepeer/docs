/**
 * StyledTable - Theme-aware table component for MDX files
 *
 * @description
 * Provides table styling without requiring inline styles in MDX files.
 * All styling uses CSS Custom Properties for theme awareness.
 *
 * @param {React.ReactNode} children - Table content (thead, tbody, etc.)
 * @param {string} [variant="default"] - Table variant: "default" | "bordered" | "minimal"
 * @param {object} [style={}] - Additional inline styles
 *
 * @example
 * <StyledTable variant="bordered">
 *   <thead>
 *     <tr><th>Header 1</th><th>Header 2</th></tr>
 *   </thead>
 *   <tbody>
 *     <tr><td>Data 1</td><td>Data 2</td></tr>
 *   </tbody>
 * </StyledTable>
 *
 * @author Livepeer Documentation Team
 */
export const StyledTable = ({ children, variant = "default", style = {} }) => {
  const variants = {
    default: {
      border: "1px solid var(--border)",
      backgroundColor: "var(--card-background)",
    },
    bordered: {
      border: "2px solid var(--accent)",
      backgroundColor: "var(--background)",
    },
    minimal: {
      border: "none",
      backgroundColor: "transparent",
    },
  };

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </table>
  );
};

/**
 * TableRow - Theme-aware table row component
 *
 * @description
 * Provides table row styling with optional hover effects.
 *
 * @param {React.ReactNode} children - Table cells
 * @param {boolean} [header=false] - Is this a header row?
 * @param {boolean} [hover=false] - Enable hover effect
 * @param {object} [style={}] - Additional inline styles
 *
 * @example
 * <TableRow header>
 *   <TableCell>Header</TableCell>
 * </TableRow>
 *
 * @author Livepeer Documentation Team
 */
export const TableRow = ({
  children,
  header = false,
  hover = false,
  style = {},
}) => {
  const rowId = `table-row-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      {hover && (
        <style>{`
          #${rowId}:hover {
            background-color: var(--card-background);
          }
        `}</style>
      )}
      <tr
        id={rowId}
        style={{
          ...(header && {
            backgroundColor: "var(--accent-dark)",
            color: "var(--button-text)",
            fontWeight: "bold",
          }),
          ...style,
        }}
      >
        {children}
      </tr>
    </>
  );
};

/**
 * TableCell - Theme-aware table cell component
 *
 * @description
 * Provides table cell styling with alignment options.
 *
 * @param {React.ReactNode} children - Cell content
 * @param {string} [align="left"] - Text alignment: "left" | "center" | "right"
 * @param {boolean} [header=false] - Is this a header cell?
 * @param {object} [style={}] - Additional inline styles
 *
 * @example
 * <TableCell align="center" header>Header</TableCell>
 *
 * @author Livepeer Documentation Team
 */
export const TableCell = ({
  children,
  align = "left",
  header = false,
  style = {},
}) => {
  const Component = header ? "th" : "td";

  return (
    <Component
      style={{
        padding: "0.75rem 1rem",
        textAlign: align,
        border: header ? "none" : "1px solid var(--border)",
        ...style,
      }}
    >
      {children}
    </Component>
  );
};
