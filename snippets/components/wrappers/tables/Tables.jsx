/**
 * @component StyledTable
 * @type wrappers
 * @subniche tables
 * @status stable
 * @description Full-width table with header row styling and rounded container.
 * @accepts children, className, ...rest
  * @aiDiscoverability none
 * @param {any} children - children prop.
 * @param {string} [variant="default"] - variant prop.
 * @param {object} [style={}] - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const StyledTable = ({ children, variant = "default", style = {}, className = "", ...rest }) => {
  const wrapperVariants = {
    default: {
      border: "1px solid var(--border)",
      backgroundColor: "var(--card-background)",
      overflow: "hidden",
    },
    bordered: {
      border: "2px solid var(--accent)",
      backgroundColor: "var(--background)",
      overflow: "hidden",
    },
    minimal: {
      border: "none",
      backgroundColor: "transparent",
      overflow: "visible",
    },
  };

  return (
    <div
      data-docs-styled-table-shell
      className={className}
      style={{
        width: "100%",
        padding: 0,
        margin: 0,
        ...wrapperVariants[variant],
        ...style,
      }}
      {...rest}
    >
      <table
        data-docs-styled-table
        style={{
          width: "100%",
          // Neutralize browser/Mintlify table spacing so bordered tables sit flush.
          borderCollapse: "collapse",
          borderSpacing: 0,
          margin: 0,
          backgroundColor: "transparent",
        }}
      >
        {children}
      </table>
    </div>
  );
};

/**
 * @component TableRow
 * @type wrappers
 * @subniche tables
 * @status stable
 * @description Table row with optional header styling and hover effect.
 * @accepts children, className, ...rest
  * @aiDiscoverability none
 * @param {any} children - children prop.
 * @param {boolean} [header=false] - header prop.
 * @param {boolean} [hover=false] - hover prop.
 * @param {object} [style={}] - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const TableRow = ({
  children,
  header = false,
  hover = false,
  style = {},
  className = "",
  ...rest
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
        className={className}
        style={{
          ...(header && {
            backgroundColor: "var(--accent-dark)",
            color: "var(--button-text)",
            fontWeight: "bold",
          }),
          ...style,
        }}
        {...rest}
      >
        {children}
      </tr>
    </>
  );
};

/**
 * @component TableCell
 * @type wrappers
 * @subniche tables
 * @status stable
 * @description Table cell that switches between th and td based on header prop.
 * @accepts children, className, ...rest
  * @aiDiscoverability none
 * @param {any} children - children prop.
 * @param {string} [align="left"] - align prop.
 * @param {boolean} [header=false] - header prop.
 * @param {object} [style={}] - style prop.
  * @param {string} [className=''] - Optional CSS class override.
 */
export const TableCell = ({
  children,
  align = "left",
  header = false,
  style = {},
  className = "",
  ...rest
}) => {
  const Component = header ? "th" : "td";

  return (
    <Component
      className={className}
      style={{
        padding: "0.75rem 1rem",
        textAlign: align,
        border: header ? "none" : "1px solid var(--border)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
