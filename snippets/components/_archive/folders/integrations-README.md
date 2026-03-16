# Integrations

Integration components connect to external APIs and services.

## Component Reference

| File            | Exports              | Description                     |
| --------------- | -------------------- | ------------------------------- |
| `coingecko.jsx` | `CoinGeckoExchanges` | CoinGecko exchange data display |

## Usage

```jsx
import { CoinGeckoExchanges } from "/snippets/components/data/coingecko.jsx";
```

## Theme Support

`CoinGeckoExchanges` uses `ThemeData` for:
- Header background (theme accent)
- Border colors (theme accent/border)
- Link colors (theme accent)

**Note:** Trust score colors (green/yellow/red) are semantic and remain fixed.

## CoinGeckoExchanges

Fetches and displays exchanges supporting a cryptocurrency from the CoinGecko API.

### Props

| Prop     | Type   | Default    | Description              |
| -------- | ------ | ---------- | ------------------------ |
| `coinId` | string | `arbitrum` | CoinGecko coin ID        |

### Features

- Sortable by exchange name or type (CEX/DEX)
- Trust score indicators
- Direct trading links
- Responsive table layout

### Example

```jsx
<CoinGeckoExchanges coinId="livepeer" />
```

## Examples

See the `examples/` folder for runnable MDX examples.
