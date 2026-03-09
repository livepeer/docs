/**
 * @component StyledTable
 * @category layout
 * @tier composite
 * @status stable
 * @description Styled Table layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies TableCell, TableRow
 * @usedIn v2/cn/gateways/run-a-gateway/requirements/setup.mdx, v2/developers/ai-pipelines/overview.mdx, v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx, v2/developers/quickstart/video/video-streaming-101.mdx, v2/es/gateways/run-a-gateway/requirements/setup.mdx, v2/fr/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/references/api-reference/AI-API/ai.mdx, v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/using-gateways/choosing-a-gateway.mdx, v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx, v2/internal/rfp/report.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/earnings.mdx, v2/orchestrators/quickstart/orchestrator-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {string} [variant="default"] - variant prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <StyledTable>Example content</StyledTable>
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
 * @component TableRow
 * @category layout
 * @tier composite
 * @status stable
 * @description Table Row layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StyledTable, TableCell
 * @usedIn v2/cn/gateways/run-a-gateway/requirements/setup.mdx, v2/developers/ai-pipelines/overview.mdx, v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx, v2/developers/quickstart/video/video-streaming-101.mdx, v2/es/gateways/run-a-gateway/requirements/setup.mdx, v2/fr/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/references/api-reference/AI-API/ai.mdx, v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/using-gateways/choosing-a-gateway.mdx, v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx, v2/internal/rfp/report.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/earnings.mdx, v2/orchestrators/quickstart/orchestrator-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {boolean} [header=false] - header prop.
 * @param {boolean} [hover=false] - hover prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <TableRow>Example content</TableRow>
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
 * @component TableCell
 * @category layout
 * @tier composite
 * @status stable
 * @description Table Cell layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StyledTable, TableRow
 * @usedIn v2/cn/gateways/run-a-gateway/requirements/setup.mdx, v2/developers/ai-pipelines/overview.mdx, v2/developers/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx, v2/developers/quickstart/video/video-streaming-101.mdx, v2/es/gateways/run-a-gateway/requirements/setup.mdx, v2/fr/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/references/api-reference/AI-API/ai.mdx, v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/using-gateways/choosing-a-gateway.mdx, v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx, v2/internal/rfp/report.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/earnings.mdx, v2/orchestrators/quickstart/orchestrator-setup.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {any} children - children prop.
 * @param {string} [align="left"] - align prop.
 * @param {boolean} [header=false] - header prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <TableCell>Example content</TableCell>
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
