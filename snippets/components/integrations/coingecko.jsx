
/**
 * CoinGeckoExchanges - Dynamically fetches and displays exchanges that support a coin from CoinGecko
 *
 * Props:
 *   - coinId: The CoinGecko coin ID (e.g., "arbitrum", "ethereum", "bitcoin")
 */
export const CoinGeckoExchanges = ({ coinId = "arbitrum" }) => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState(null); // null (default order), "name", or "type"
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        // Fetch first page of tickers from CoinGecko API
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/tickers?depth=true`,
        );

        if (response.ok) {
          const data = await response.json();

          // Extract unique exchanges from tickers, preserving API order
          const exchangeMap = new Map();

          data.tickers?.forEach((ticker) => {
            if (ticker.market?.name && ticker.trade_url) {
              // Only add if not already in map (preserves first occurrence)
              if (!exchangeMap.has(ticker.market.name)) {
                exchangeMap.set(ticker.market.name, {
                  name: ticker.market.name,
                  url: ticker.trade_url,
                  trustScore: ticker.trust_score || "N/A",
                  tradingPair:
                    ticker.base && ticker.target
                      ? `${ticker.base}/${ticker.target}`
                      : "N/A",
                  type:
                    ticker.market.identifier?.includes("uniswap") ||
                    ticker.market.identifier?.includes("sushiswap") ||
                    ticker.market.identifier?.includes("pancakeswap") ||
                    ticker.market.name?.toLowerCase().includes("swap") ||
                    ticker.market.name?.toLowerCase().includes("dex")
                      ? "DEX"
                      : "CEX",
                });
              }
            }
          });

          // Convert to array, preserving the order from the API
          const exchangeList = Array.from(exchangeMap.values());

          setExchanges(exchangeList);
        } else {
          throw new Error("Failed to fetch exchange data");
        }
      } catch (err) {
        setError("Failed to load exchange data");
        console.error("CoinGeckoExchanges error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchExchanges();
  }, [coinId]);

  if (loading) {
    return <div>Loading exchanges...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (exchanges.length === 0) {
    return <div>No exchanges found for this coin.</div>;
  }

  // Sort exchanges based on current sort settings
  const sortedExchanges = sortBy
    ? [...exchanges].sort((a, b) => {
        let comparison = 0;

        if (sortBy === "type") {
          comparison = a.type.localeCompare(b.type);
        } else if (sortBy === "name") {
          comparison = a.name.localeCompare(b.name);
        }

        return sortOrder === "asc" ? comparison : -comparison;
      })
    : exchanges; // If no sort selected, use original API order

  const handleSort = (column) => {
    if (sortBy === column) {
      // Toggle sort order if clicking the same column
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Set new column and default to ascending
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  // Convert trust score to color
  const getTrustScoreColor = (trustScore) => {
    if (trustScore === "N/A" || trustScore === "yellow") return "#fbbf24"; // yellow
    if (trustScore === "green") return "#22c55e"; // green
    if (trustScore === "red") return "#ef4444"; // red
    return "#fbbf24"; // default yellow
  };

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
            <tr
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
              }}
            >
              <th
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontWeight: "600",
                  borderBottom: "2px solid var(--accent)",
                  cursor: "pointer",
                  width: "220px",
                  maxWidth: "220px",
                  color: "#fff",
                }}
                onClick={() => handleSort("name")}
                title="Click to sort by name"
              >
                Exchange{" "}
                {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th
                style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontWeight: "600",
                  borderBottom: "2px solid var(--accent)",
                  width: "80px",
                  cursor: "pointer",
                  color: "#fff",
                }}
                onClick={() => handleSort("type")}
                title="Click to sort by type"
              >
                Type {sortBy === "type" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th
                style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontWeight: "600",
                  borderBottom: "2px solid var(--accent)",
                  width: "110px",
                  color: "#fff",
                }}
              >
                Pair
              </th>
              <th
                style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontWeight: "600",
                  borderBottom: "2px solid var(--accent)",
                  width: "100px",
                  color: "#fff",
                }}
              >
                Trust
              </th>
              <th
                style={{
                  padding: "12px 16px",
                  textAlign: "center",
                  fontWeight: "600",
                  borderBottom: "2px solid var(--accent)",
                  width: "100px",
                  color: "#fff",
                }}
              >
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedExchanges.map((exchange, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <td
                  style={{
                    padding: "10px 16px",
                    width: "220px",
                    maxWidth: "220px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exchange.name}
                </td>
                <td style={{ padding: "10px 16px", textAlign: "center" }}>
                  <Badge color={exchange.type === "DEX" ? "purple" : "blue"}>
                    {exchange.type}
                  </Badge>
                </td>
                <td
                  style={{
                    padding: "10px 16px",
                    textAlign: "center",
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    maxWidth: "110px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exchange.tradingPair}
                </td>
                <td style={{ padding: "10px 16px", textAlign: "center" }}>
                  <Icon
                    icon="circle"
                    iconType="solid"
                    color={getTrustScoreColor(exchange.trustScore)}
                  />
                </td>
                <td style={{ padding: "10px 16px", textAlign: "center" }}>
                  <a
                    href={exchange.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--accent)",
                      textDecoration: "none",
                    }}
                  >
                    Trade →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};
