/**
 * @component StyledTable
 * @category layout
 * @tier composite
 * @status stable
 * @description Styled Table layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies TableCell, TableRow
 * @usedIn v2/developers/_archive/ai-pipelines-overview-old.mdx, v2/developers/_archive/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx, v2/developers/_archive/quickstart-video-101.mdx, v2/gateways/_contextData_/new/gateways-new/guides/gateway-operator-opportunities.mdx, v2/gateways/_contextData_/new/gateways-new/resources/api-reference/AI-API/ai.mdx, v2/gateways/_contextData_/new/gateways-new/setup/requirements/setup.mdx, v2/gateways/concepts/architecture.mdx, v2/gateways/concepts/business-model.mdx, v2/gateways/concepts/capabilities.mdx, v2/gateways/concepts/role.mdx, v2/gateways/guides/job-pipelines/all-resources/v2-dev--ai-pipelines-overview.mdx, v2/gateways/guides/operator-considerations/business-case.mdx, v2/gateways/guides/operator-considerations/ecosystem-projects.mdx, v2/gateways/guides/operator-considerations/old_v1/business-model.mdx, v2/gateways/guides/operator-considerations/old_v1/ecosystem-projects.mdx, v2/gateways/guides/operator-considerations/old_v1/gateway-requirements.mdx, v2/gateways/guides/operator-considerations/old_v1/operator-opportunities.mdx, v2/gateways/guides/operator-considerations/old/operator-opportunities.mdx, v2/gateways/guides/operator-considerations/old/setup-requirements.mdx, v2/gateways/guides/operator-considerations/operator-opportunities.mdx, v2/gateways/guides/operator-considerations/operator-requirements.mdx, v2/gateways/guides/opportunities/all-resources/biz--ai-builder-opportunity.mdx, v2/gateways/guides/opportunities/all-resources/biz--sdk-builder-opportunity.mdx, v2/gateways/guides/opportunities/all-resources/biz--video-transcoding-opportunity.mdx, v2/gateways/guides/opportunities/all-resources/ctx-new--gateway-operator-opportunities.mdx, v2/gateways/guides/opportunities/all-resources/support-ops--spe-grant-model.mdx, v2/gateways/guides/opportunities/all-resources/v2-opcons--business-case.mdx, v2/gateways/guides/opportunities/all-resources/v2-opcons--ecosystem-projects.mdx, v2/gateways/guides/opportunities/all-resources/v2-opcons--operator-opportunities.mdx, v2/gateways/guides/opportunities/all-resources/v2-providers--choosing-a-gateway.mdx, v2/gateways/guides/opportunities/all-resources/v2-run--gateway-operator-opportunities.mdx, v2/gateways/guides/opportunities/business-ops/ai-builder-opportunity.mdx, v2/gateways/guides/opportunities/business-ops/sdk-builder-opportunity.mdx, v2/gateways/guides/opportunities/business-ops/video-transcoding-opportunity.mdx, v2/gateways/guides/opportunities/community-ecosystem.mdx, v2/gateways/guides/opportunities/naap-multi-tenancy.mdx, v2/gateways/guides/opportunities/overview.mdx, v2/gateways/guides/opportunities/spe-grant-model.mdx, v2/gateways/guides/opportunities/support-ops/spe-grant-model.mdx, v2/gateways/guides/setup-paths/gateway-setup-paths.mdx, v2/gateways/guides/setup-paths/path-requirements.mdx, v2/gateways/navigator.mdx, v2/gateways/references/api-reference/AI-API/ai.mdx, v2/gateways/resources/technical/api-reference/AI-API/ai.mdx, v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/setup/requirements/setup.mdx, v2/gateways/using-gateways/choosing-a-gateway.mdx, v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx, v2/internal/rfp/report.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/concepts/capabilities.mdx, v2/orchestrators/concepts/rcs-incentives.mdx, v2/orchestrators/concepts/role.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-11
 * @param {any} children - children prop.
 * @param {string} [variant="default"] - variant prop.
 * @param {object} [style={}] - style prop.
 * @example
 * <StyledTable>Example content</StyledTable>
 */
export const StyledTable = ({ children, variant = "default", style = {} }) => {
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
      style={{
        width: "100%",
        padding: 0,
        margin: 0,
        ...wrapperVariants[variant],
        ...style,
      }}
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
 * @category layout
 * @tier composite
 * @status stable
 * @description Table Row layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies StyledTable, TableCell
 * @usedIn v2/developers/_archive/ai-pipelines-overview-old.mdx, v2/developers/_archive/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx, v2/developers/_archive/quickstart-video-101.mdx, v2/gateways/_contextData_/new/gateways-new/guides/gateway-operator-opportunities.mdx, v2/gateways/_contextData_/new/gateways-new/resources/api-reference/AI-API/ai.mdx, v2/gateways/_contextData_/new/gateways-new/setup/requirements/setup.mdx, v2/gateways/concepts/architecture.mdx, v2/gateways/concepts/business-model.mdx, v2/gateways/concepts/capabilities.mdx, v2/gateways/concepts/role.mdx, v2/gateways/guides/job-pipelines/all-resources/v2-dev--ai-pipelines-overview.mdx, v2/gateways/guides/operator-considerations/business-case.mdx, v2/gateways/guides/operator-considerations/ecosystem-projects.mdx, v2/gateways/guides/operator-considerations/old_v1/business-model.mdx, v2/gateways/guides/operator-considerations/old_v1/ecosystem-projects.mdx, v2/gateways/guides/operator-considerations/old_v1/gateway-requirements.mdx, v2/gateways/guides/operator-considerations/old_v1/operator-opportunities.mdx, v2/gateways/guides/operator-considerations/old/operator-opportunities.mdx, v2/gateways/guides/operator-considerations/old/setup-requirements.mdx, v2/gateways/guides/operator-considerations/operator-opportunities.mdx, v2/gateways/guides/operator-considerations/operator-requirements.mdx, v2/gateways/guides/opportunities/all-resources/biz--ai-builder-opportunity.mdx, v2/gateways/guides/opportunities/all-resources/biz--sdk-builder-opportunity.mdx, v2/gateways/guides/opportunities/all-resources/biz--video-transcoding-opportunity.mdx, v2/gateways/guides/opportunities/all-resources/ctx-new--gateway-operator-opportunities.mdx, v2/gateways/guides/opportunities/all-resources/support-ops--spe-grant-model.mdx, v2/gateways/guides/opportunities/all-resources/v2-opcons--business-case.mdx, v2/gateways/guides/opportunities/all-resources/v2-opcons--ecosystem-projects.mdx, v2/gateways/guides/opportunities/all-resources/v2-opcons--operator-opportunities.mdx, v2/gateways/guides/opportunities/all-resources/v2-providers--choosing-a-gateway.mdx, v2/gateways/guides/opportunities/all-resources/v2-run--gateway-operator-opportunities.mdx, v2/gateways/guides/opportunities/business-ops/ai-builder-opportunity.mdx, v2/gateways/guides/opportunities/business-ops/sdk-builder-opportunity.mdx, v2/gateways/guides/opportunities/business-ops/video-transcoding-opportunity.mdx, v2/gateways/guides/opportunities/community-ecosystem.mdx, v2/gateways/guides/opportunities/naap-multi-tenancy.mdx, v2/gateways/guides/opportunities/overview.mdx, v2/gateways/guides/opportunities/spe-grant-model.mdx, v2/gateways/guides/opportunities/support-ops/spe-grant-model.mdx, v2/gateways/guides/setup-paths/gateway-setup-paths.mdx, v2/gateways/guides/setup-paths/path-requirements.mdx, v2/gateways/navigator.mdx, v2/gateways/references/api-reference/AI-API/ai.mdx, v2/gateways/resources/technical/api-reference/AI-API/ai.mdx, v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/setup/requirements/setup.mdx, v2/gateways/using-gateways/choosing-a-gateway.mdx, v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx, v2/internal/rfp/report.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/concepts/capabilities.mdx, v2/orchestrators/concepts/rcs-incentives.mdx, v2/orchestrators/concepts/role.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-11
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
 * @usedIn v2/developers/_archive/ai-pipelines-overview-old.mdx, v2/developers/_archive/livepeer-real-time-video/video-streaming-on-livepeer/video-streaming-101.mdx, v2/developers/_archive/quickstart-video-101.mdx, v2/gateways/_contextData_/new/gateways-new/guides/gateway-operator-opportunities.mdx, v2/gateways/_contextData_/new/gateways-new/resources/api-reference/AI-API/ai.mdx, v2/gateways/_contextData_/new/gateways-new/setup/requirements/setup.mdx, v2/gateways/concepts/architecture.mdx, v2/gateways/concepts/business-model.mdx, v2/gateways/concepts/capabilities.mdx, v2/gateways/concepts/role.mdx, v2/gateways/guides/job-pipelines/all-resources/v2-dev--ai-pipelines-overview.mdx, v2/gateways/guides/operator-considerations/business-case.mdx, v2/gateways/guides/operator-considerations/ecosystem-projects.mdx, v2/gateways/guides/operator-considerations/old_v1/business-model.mdx, v2/gateways/guides/operator-considerations/old_v1/ecosystem-projects.mdx, v2/gateways/guides/operator-considerations/old_v1/gateway-requirements.mdx, v2/gateways/guides/operator-considerations/old_v1/operator-opportunities.mdx, v2/gateways/guides/operator-considerations/old/operator-opportunities.mdx, v2/gateways/guides/operator-considerations/old/setup-requirements.mdx, v2/gateways/guides/operator-considerations/operator-opportunities.mdx, v2/gateways/guides/operator-considerations/operator-requirements.mdx, v2/gateways/guides/opportunities/all-resources/biz--ai-builder-opportunity.mdx, v2/gateways/guides/opportunities/all-resources/biz--sdk-builder-opportunity.mdx, v2/gateways/guides/opportunities/all-resources/biz--video-transcoding-opportunity.mdx, v2/gateways/guides/opportunities/all-resources/ctx-new--gateway-operator-opportunities.mdx, v2/gateways/guides/opportunities/all-resources/support-ops--spe-grant-model.mdx, v2/gateways/guides/opportunities/all-resources/v2-opcons--business-case.mdx, v2/gateways/guides/opportunities/all-resources/v2-opcons--ecosystem-projects.mdx, v2/gateways/guides/opportunities/all-resources/v2-opcons--operator-opportunities.mdx, v2/gateways/guides/opportunities/all-resources/v2-providers--choosing-a-gateway.mdx, v2/gateways/guides/opportunities/all-resources/v2-run--gateway-operator-opportunities.mdx, v2/gateways/guides/opportunities/business-ops/ai-builder-opportunity.mdx, v2/gateways/guides/opportunities/business-ops/sdk-builder-opportunity.mdx, v2/gateways/guides/opportunities/business-ops/video-transcoding-opportunity.mdx, v2/gateways/guides/opportunities/community-ecosystem.mdx, v2/gateways/guides/opportunities/naap-multi-tenancy.mdx, v2/gateways/guides/opportunities/overview.mdx, v2/gateways/guides/opportunities/spe-grant-model.mdx, v2/gateways/guides/opportunities/support-ops/spe-grant-model.mdx, v2/gateways/guides/setup-paths/gateway-setup-paths.mdx, v2/gateways/guides/setup-paths/path-requirements.mdx, v2/gateways/navigator.mdx, v2/gateways/references/api-reference/AI-API/ai.mdx, v2/gateways/resources/technical/api-reference/AI-API/ai.mdx, v2/gateways/run-a-gateway/gateway-operator-opportunities.mdx, v2/gateways/run-a-gateway/requirements/setup.mdx, v2/gateways/setup/requirements/setup.mdx, v2/gateways/using-gateways/choosing-a-gateway.mdx, v2/gateways/using-gateways/gateway-providers/livepeer-studio-gateway.mdx, v2/internal/rfp/report.mdx, v2/lpt/delegation/getting-started.mdx, v2/orchestrators/concepts/capabilities.mdx, v2/orchestrators/concepts/rcs-incentives.mdx, v2/orchestrators/concepts/role.mdx
 * @breakingChangeRisk high
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-11
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
