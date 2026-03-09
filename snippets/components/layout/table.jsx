/**
 * @component DynamicTable
 * @category layout
 * @tier composite
 * @status stable
 * @description Dynamic Table layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/livepeer-network/interfaces.mdx, v2/about/livepeer-network/job-lifecycle.mdx, v2/about/livepeer-network/marketplace.mdx, v2/about/livepeer-network/technical-architecture.mdx, v2/about/livepeer-protocol/core-mechanisms.mdx, v2/about/livepeer-protocol/livepeer-token.mdx, v2/about/livepeer-protocol/overview.mdx, v2/about/livepeer-protocol/technical-architecture.mdx, v2/about/livepeer-protocol/treasury.mdx, v2/cn/about/livepeer-network/interfaces.mdx, v2/cn/about/livepeer-network/job-lifecycle.mdx, v2/cn/about/livepeer-network/marketplace.mdx, v2/cn/about/livepeer-network/technical-architecture.mdx, v2/cn/about/livepeer-protocol/core-mechanisms.mdx, v2/cn/about/livepeer-protocol/livepeer-token.mdx, v2/cn/about/livepeer-protocol/overview.mdx, v2/cn/about/livepeer-protocol/technical-architecture.mdx, v2/cn/about/livepeer-protocol/treasury.mdx, v2/cn/developers/ai-pipelines/byoc.mdx, v2/cn/developers/ai-pipelines/comfystream.mdx, v2/cn/developers/ai-pipelines/overview.mdx, v2/cn/docs-guide/components-index.mdx, v2/cn/docs-guide/indexes/components-index.mdx, v2/cn/docs-guide/lpd.mdx, v2/cn/gateways/run-a-gateway/configure/pricing-configuration.mdx, v2/cn/gateways/run-a-gateway/configure/video-configuration.mdx, v2/cn/orchestrators/quickstart/join-a-pool.mdx, v2/cn/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx, v2/developers/ai-inference-on-livepeer/overview.mdx, v2/developers/ai-inference-on-livepeer/workload-fit.mdx, v2/developers/ai-pipelines/byoc.mdx, v2/developers/ai-pipelines/comfystream.mdx, v2/developers/ai-pipelines/model-support.mdx, v2/developers/ai-pipelines/workload-fit.mdx, v2/es/about/livepeer-network/interfaces.mdx, v2/es/about/livepeer-network/job-lifecycle.mdx, v2/es/about/livepeer-network/marketplace.mdx, v2/es/about/livepeer-network/technical-architecture.mdx, v2/es/about/livepeer-protocol/core-mechanisms.mdx, v2/es/about/livepeer-protocol/livepeer-token.mdx, v2/es/about/livepeer-protocol/overview.mdx, v2/es/about/livepeer-protocol/technical-architecture.mdx, v2/es/about/livepeer-protocol/treasury.mdx, v2/es/developers/ai-pipelines/byoc.mdx, v2/es/developers/ai-pipelines/comfystream.mdx, v2/es/developers/ai-pipelines/overview.mdx, v2/es/docs-guide/components-index.mdx, v2/es/docs-guide/indexes/components-index.mdx, v2/es/docs-guide/lpd.mdx, v2/es/gateways/run-a-gateway/configure/pricing-configuration.mdx, v2/es/gateways/run-a-gateway/configure/video-configuration.mdx, v2/es/orchestrators/quickstart/join-a-pool.mdx, v2/es/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx, v2/fr/about/livepeer-network/interfaces.mdx, v2/fr/about/livepeer-network/job-lifecycle.mdx, v2/fr/about/livepeer-network/marketplace.mdx, v2/fr/about/livepeer-network/technical-architecture.mdx, v2/fr/about/livepeer-protocol/core-mechanisms.mdx, v2/fr/about/livepeer-protocol/livepeer-token.mdx, v2/fr/about/livepeer-protocol/overview.mdx, v2/fr/about/livepeer-protocol/technical-architecture.mdx, v2/fr/about/livepeer-protocol/treasury.mdx, v2/fr/developers/ai-pipelines/byoc.mdx, v2/fr/developers/ai-pipelines/comfystream.mdx, v2/fr/developers/ai-pipelines/overview.mdx, v2/fr/docs-guide/components-index.mdx, v2/fr/docs-guide/indexes/components-index.mdx, v2/fr/docs-guide/lpd.mdx, v2/fr/gateways/run-a-gateway/configure/pricing-configuration.mdx, v2/fr/gateways/run-a-gateway/configure/video-configuration.mdx, v2/fr/orchestrators/quickstart/join-a-pool.mdx, v2/fr/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx, v2/gateways/guides-and-resources/gateway-job-pipelines/overview.mdx, v2/gateways/run-a-gateway/configure/pricing-configuration.mdx, v2/gateways/run-a-gateway/configure/video-configuration-view.mdx, v2/gateways/run-a-gateway/configure/video-configuration.mdx, v2/orchestrators/advanced-setup/hosting-models.mdx, v2/orchestrators/quickstart/join-a-pool.mdx, v2/orchestrators/setting-up-an-orchestrator/hardware-requirements.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-03
 * @param {any} [tableTitle=null] - table Title prop.
 * @param {Array} [headerList=[]] - header List prop.
 * @param {Array} [itemsList=[]] - items List prop.
 * @param {Array} [monospaceColumns=[]] - monospace Columns prop.
 * @param {any} margin - margin prop.
 * @example
 * <DynamicTable margin="example" />
 */
export const DynamicTable = ({
  tableTitle = null,
  headerList = [],
  itemsList = [],
  monospaceColumns = [],
  margin,
}) => {
  if (!headerList.length) {
    return <div>No headers provided</div>;
  }

  return (
    <>
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
    </>
  );
};
