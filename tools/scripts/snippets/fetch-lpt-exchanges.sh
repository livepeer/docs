#!/bin/bash
# @script            fetch-lpt-exchanges
# @category          automation
# @purpose           infrastructure:data-feeds
# @scope             tools/scripts
# @owner             docs
# @needs             F-R1
# @purpose-statement LPT exchange data fetcher — pulls exchange listing data for LPT token pages
# @pipeline          manual — not yet in pipeline
# @usage             bash tools/scripts/snippets/fetch-lpt-exchanges.sh [flags]
# Fetch LPT exchange listings from CoinGecko API and append to lpt-exchanges.mdx
# Usage: ./tools/scripts/snippets/fetch-lpt-exchanges.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_FILE="$SCRIPT_DIR/paths.config.json"

# Try to detect repo root via git, fallback to config file
if git rev-parse --show-toplevel &>/dev/null; then
  REPO_ROOT="$(git rev-parse --show-toplevel)"
elif [ -f "$CONFIG_FILE" ]; then
  echo "Warning: Not in a git repo, using paths.config.json"
  REPO_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
else
  echo "Error: Cannot determine repo root. Run from git repo or ensure paths.config.json exists."
  exit 1
fi

# Read path from config or use default
if [ -f "$CONFIG_FILE" ] && command -v node &>/dev/null; then
  OUTPUT_FILE="$REPO_ROOT/$(node -pe "require('$CONFIG_FILE').paths.lptExchanges")"
else
  if [ -f "$REPO_ROOT/v2/lpt/resources/exchanges.mdx" ]; then
    OUTPUT_FILE="$REPO_ROOT/v2/lpt/resources/exchanges.mdx"
  else
    OUTPUT_FILE="$REPO_ROOT/v2/lpt/resources/exchanges.mdx"
  fi
fi

# Fetch data from CoinGecko
echo "Fetching LPT exchange data from CoinGecko..."
API_RESPONSE=$(curl -s "https://api.coingecko.com/api/v3/coins/livepeer")

if [ -z "$API_RESPONSE" ]; then
  echo "Error: Failed to fetch data from CoinGecko API"
  exit 1
fi

# Generate the exchange content using Node.js
node - "$API_RESPONSE" "$OUTPUT_FILE" << 'NODEJS_SCRIPT'
const fs = require('fs');
const path = require('path');

const apiResponse = process.argv[2];
const outputFile = process.argv[3];

const data = JSON.parse(apiResponse);
const tickers = data.tickers || [];

// Group by exchange and deduplicate
const exchangeMap = new Map();

for (const ticker of tickers) {
  const exchangeName = ticker.market?.name;
  const exchangeId = ticker.market?.identifier;
  const tradeUrl = ticker.trade_url;
  const trustScore = ticker.trust_score;
  const isStale = ticker.is_stale;
  const target = ticker.target;
  const volume = ticker.converted_volume?.usd || 0;
  
  if (!exchangeName || isStale) continue;
  
  if (!exchangeMap.has(exchangeId)) {
    exchangeMap.set(exchangeId, {
      name: exchangeName,
      url: tradeUrl,
      trustScore: trustScore,
      pairs: [],
      totalVolume: 0
    });
  }
  
  const exchange = exchangeMap.get(exchangeId);
  if (!exchange.pairs.includes(target)) {
    exchange.pairs.push(target);
  }
  exchange.totalVolume += volume;
  
  // Keep the best trust score
  if (trustScore === 'green' || (trustScore === 'yellow' && exchange.trustScore !== 'green')) {
    exchange.trustScore = trustScore;
    exchange.url = tradeUrl;
  }
}

// Sort by volume (highest first)
const sortedExchanges = Array.from(exchangeMap.values())
  .filter(e => e.totalVolume > 0)
  .sort((a, b) => b.totalVolume - a.totalVolume);

// Get trust score badge
function getTrustBadge(score) {
  if (score === 'green') return '🟢';
  if (score === 'yellow') return '🟡';
  if (score === 'red') return '🔴';
  return '⚪';
}

// Generate MDX content
const lastUpdated = new Date().toISOString().split('T')[0];

let content = `

---

## Centralized Exchanges (CEX)

<Info>
  **Last Updated:** ${lastUpdated} | Data sourced from [CoinGecko](https://www.coingecko.com/en/coins/livepeer)
</Info>

<Note>
  **Trust Score Legend:** 🟢 High | 🟡 Medium | 🔴 Low | ⚪ Unknown
</Note>

<div style={{ overflowX: 'auto', marginBottom: '24px' }}>
<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#2d9a67', color: '#fff' }}>
      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600' }}>Exchange</th>
      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600' }}>Trading Pairs</th>
      <th style={{ padding: '12px 16px', textAlign: 'right', fontWeight: '600' }}>24h Volume (USD)</th>
      <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '600' }}>Trust</th>
    </tr>
  </thead>
  <tbody>
`;

sortedExchanges.forEach((exchange, index) => {
  const bgColor = index % 2 === 0 ? '#1a1a1a' : 'transparent';
  const volumeFormatted = exchange.totalVolume >= 1000000 
    ? `$${(exchange.totalVolume / 1000000).toFixed(2)}M`
    : exchange.totalVolume >= 1000 
      ? `$${(exchange.totalVolume / 1000).toFixed(2)}K`
      : `$${exchange.totalVolume.toFixed(2)}`;
  
  const pairsDisplay = exchange.pairs.slice(0, 5).join(', ') + (exchange.pairs.length > 5 ? '...' : '');
  const trustBadge = getTrustBadge(exchange.trustScore);
  
  content += `    <tr style={{ borderBottom: '1px solid #333', backgroundColor: '${bgColor}' }}>
      <td style={{ padding: '10px 16px' }}><a href="${exchange.url || '#'}" target="_blank" style={{ color: '#2d9a67', fontWeight: '500' }}>${exchange.name}</a></td>
      <td style={{ padding: '10px 16px', fontFamily: 'monospace', fontSize: '0.85rem' }}>${pairsDisplay}</td>
      <td style={{ padding: '10px 16px', textAlign: 'right' }}>${volumeFormatted}</td>
      <td style={{ padding: '10px 16px', textAlign: 'center' }}>${trustBadge}</td>
    </tr>
`;
});

content += `  </tbody>
</table>
</div>

<Tip>
  Trading volumes are approximate 24-hour figures. Always verify current data on the exchange.
</Tip>

## Decentralized Exchanges (DEX)

<CardGroup cols={2}>
  <Card title="Uniswap V3" icon="unicorn" href="https://app.uniswap.org/explore/tokens/ethereum/0x58b6a8a3302369daec383334672404ee733ab239" horizontal arrow>
    Trade LPT on Ethereum mainnet
  </Card>
  <Card title="Uniswap V2" icon="unicorn" href="https://app.uniswap.org/explore/tokens/ethereum/0x58b6a8a3302369daec383334672404ee733ab239" horizontal arrow>
    Legacy Uniswap pool on Ethereum
  </Card>
</CardGroup>

## Contract Addresses

<div style={{ overflowX: 'auto', marginBottom: '24px' }}>
<table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
  <thead>
    <tr style={{ backgroundColor: '#2d9a67', color: '#fff' }}>
      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600' }}>Network</th>
      <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600' }}>Contract Address</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ borderBottom: '1px solid #333', backgroundColor: '#1a1a1a' }}>
      <td style={{ padding: '10px 16px', color: '#2d9a67', fontWeight: '500' }}>Ethereum</td>
      <td style={{ padding: '10px 16px', fontFamily: 'monospace', fontSize: '0.85rem' }}><code>0x58b6a8a3302369daec383334672404ee733ab239</code></td>
    </tr>
    <tr style={{ borderBottom: '1px solid #333', backgroundColor: 'transparent' }}>
      <td style={{ padding: '10px 16px', color: '#2d9a67', fontWeight: '500' }}>Arbitrum One</td>
      <td style={{ padding: '10px 16px', fontFamily: 'monospace', fontSize: '0.85rem' }}><code>0x289ba1701c2f088cf0faf8b3705246331cb8a839</code></td>
    </tr>
  </tbody>
</table>
</div>
`;

// Read existing file and find where to append (after the Danger block)
const existingContent = fs.readFileSync(outputFile, 'utf8');
const dangerEndIndex = existingContent.indexOf('</Danger>');

if (dangerEndIndex === -1) {
  console.error('Could not find </Danger> tag in the file');
  process.exit(1);
}

// Get content up to and including </Danger>
const headerContent = existingContent.substring(0, dangerEndIndex + '</Danger>'.length);

// Write the new file
fs.writeFileSync(outputFile, headerContent + content);

console.log(`✅ Updated ${outputFile} with ${sortedExchanges.length} exchanges`);
NODEJS_SCRIPT

echo "Done!"
