/**
 * ChainlistRPCs - Dynamically fetches and displays RPC endpoints from Chainlist
 *
 * Props:
 *   - chainId: The chain ID to fetch RPCs for (default: 42161 for Arbitrum One)
 */
export const ChainlistRPCs = ({ chainId = 42161 }) => {
  const [rpcs, setRpcs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRPCs = async () => {
      try {
        // Fetch from DefiLlama chainlist extraRpcs.js (has all RPCs)
        const response = await fetch(
          "https://raw.githubusercontent.com/DefiLlama/chainlist/main/constants/extraRpcs.js",
        );

        if (response.ok) {
          const jsContent = await response.text();

          // Extract the chain's RPC block using regex
          const chainPattern = new RegExp(
            `${chainId}:\\s*\\{[\\s\\S]*?rpcs:\\s*\\[([\\s\\S]*?)\\]\\s*,?\\s*\\}`,
            "m",
          );
          const match = jsContent.match(chainPattern);

          if (match) {
            const rpcsBlock = match[1];
            const rpcList = [];

            // Match simple string URLs
            const simpleUrls = rpcsBlock.match(/"(https?:\/\/[^"]+)"/g);
            if (simpleUrls) {
              simpleUrls.forEach((url) => {
                rpcList.push({ url: url.replace(/"/g, ""), tracking: "-" });
              });
            }

            // Match object-style RPCs with tracking info
            const objectPattern =
              /\{\s*url:\s*"([^"]+)"[^}]*tracking:\s*"([^"]+)"/g;
            let objMatch;
            while ((objMatch = objectPattern.exec(rpcsBlock)) !== null) {
              // Avoid duplicates
              if (!rpcList.find((r) => r.url === objMatch[1])) {
                rpcList.push({ url: objMatch[1], tracking: objMatch[2] });
              }
            }

            // Also match wss:// URLs
            const wssUrls = rpcsBlock.match(/"(wss:\/\/[^"]+)"/g);
            if (wssUrls) {
              wssUrls.forEach((url) => {
                const cleanUrl = url.replace(/"/g, "");
                if (!rpcList.find((r) => r.url === cleanUrl)) {
                  rpcList.push({ url: cleanUrl, tracking: "-" });
                }
              });
            }

            setRpcs(rpcList);
          } else {
            throw new Error("Chain not found in data");
          }
        } else {
          throw new Error("Failed to fetch chain data");
        }
      } catch (err) {
        setError("Failed to load RPC data");
        console.error("ChainlistRPCs error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRPCs();
  }, [chainId]);

  if (loading) {
    return <div>Loading RPC endpoints...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter to only show public RPCs (not ones with API keys in URL)
  const publicRpcs = rpcs.filter((rpc) => {
    const url = typeof rpc === "string" ? rpc : rpc.url;
    return url && !url.includes("${") && !url.includes("API_KEY");
  });

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
            <th
              style={{
                padding: "12px 16px",
                textAlign: "left",
                fontWeight: "600",
                borderBottom: "2px solid #2d9a67",
              }}
            >
              RPC URL
            </th>
            <th
              style={{
                padding: "12px 16px",
                textAlign: "center",
                fontWeight: "600",
                borderBottom: "2px solid #2d9a67",
                width: "80px",
              }}
            >
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {publicRpcs.map((rpc, index) => {
            const url = typeof rpc === "string" ? rpc : rpc.url;
            const isWebsocket = url.startsWith("wss://");

            return (
              <tr key={index} style={{ borderBottom: "1px solid #333" }}>
                <td style={{ padding: "10px 16px", fontFamily: "monospace" }}>
                  <code>{url}</code>
                </td>
                <td style={{ padding: "10px 16px", textAlign: "center" }}>
                  {isWebsocket ? "WSS" : "HTTPS"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
