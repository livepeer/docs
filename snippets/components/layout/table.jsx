/**
 * @component DynamicTable
 * @category layout
 * @tier composite
 * @status stable
 * @description Dynamic Table layout component for arranging documentation content without MDX inline styles.
 * @contentAffinity overview, tutorial, reference
 * @owner docs
 * @dependencies none
 * @usedIn v2/about/livepeer-network/interfaces.mdx, v2/about/livepeer-network/job-lifecycle.mdx, v2/about/livepeer-network/marketplace.mdx, v2/about/livepeer-network/technical-architecture.mdx, v2/about/livepeer-protocol/core-mechanisms.mdx, v2/about/livepeer-protocol/livepeer-token.mdx, v2/about/livepeer-protocol/overview.mdx, v2/about/livepeer-protocol/technical-architecture.mdx, v2/about/livepeer-protocol/treasury.mdx, v2/developers/_archive/ai-inference-overview-old.mdx, v2/developers/_archive/ai-inference-workload-fit-old.mdx, v2/developers/_archive/ai-pipelines-byoc-old.mdx, v2/developers/_archive/ai-pipelines-comfystream-old.mdx, v2/developers/_archive/ai-pipelines-model-support-old.mdx, v2/developers/build/workload-fit.mdx, v2/gateways/guides-and-resources/gateway-job-pipelines/overview.mdx, v2/gateways/run-a-gateway/configure/pricing-configuration.mdx, v2/gateways/run-a-gateway/configure/video-configuration-view.mdx, v2/gateways/run-a-gateway/configure/video-configuration.mdx, v2/orchestrators/old/advanced-setup/hosting-models.mdx, v2/orchestrators/old/setting-up-an-orchestrator/hardware-requirements.mdx, v2/orchestrators/operations/hosting-models.mdx, v2/orchestrators/quickstart/join-a-pool.mdx, v2/orchestrators/v2-dev/advanced/hosting-models.mdx, v2/orchestrators/v2-dev/get-started/join-a-pool.mdx, v2/orchestrators/v2-dev/setup/hardware-requirements.mdx
 * @breakingChangeRisk medium
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-10
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
