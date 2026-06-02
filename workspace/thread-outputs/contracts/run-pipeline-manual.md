# Blockchain Contracts Pipeline — Manual Run Reference

> How to run the contracts address pipeline locally to refresh on-chain addresses, and what files it writes.

## Run instructions

### Direct (one-shot, recommended for manual use)

```bash
node operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js [--dry-run | --check] [--skip-verify]
```

### Through the dispatcher (matches CI behaviour)

```bash
node operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js --mode manual --write --verify
```

### Flags

| Flag | Effect |
|---|---|
| _(none)_ | Writes all outputs. |
| `--dry-run` | Runs the full fetch but does not write outputs. Mutually exclusive with `--check`. |
| `--check` | Verify-only; fails if outputs would change. Use in CI to detect drift. |
| `--skip-verify` | Skip the post-write verification pass. |

## Required environment

The pipeline exits cleanly with `degraded: required secret missing locally — pipeline skipped` when a secret it considers required is absent (dispatcher-level guard in `dispatch-contract-addresses.js`).

| Env var | Purpose | Fallback |
|---|---|---|
| `ETHEREUM_RPC_URL` | Primary Ethereum Mainnet RPC | `eth.llamarpc.com`, `ethereum-rpc.publicnode.com`, `eth.drpc.org` |
| `ETHEREUM_RPC_FALLBACK_URL` | Secondary Ethereum Mainnet RPC | as above |
| `ARBITRUM_RPC_URL` | Primary Arbitrum One RPC | `arb1.arbitrum.io/rpc`, `arbitrum-one-rpc.publicnode.com`, `arbitrum.drpc.org` |
| `ARBITRUM_RPC_FALLBACK_URL` | Secondary Arbitrum One RPC | as above |
| `ETHERSCAN_API_KEY` (or `ETHERSCAN_API_KEY_2`) | Etherscan provenance lookups | none — provenance verification will fail without it |
| `ARBISCAN_API_KEY` | Arbiscan provenance lookups | none — provenance verification will fail without it |
| `GITHUB_TOKEN` | Reads from watched repos (`livepeer/protocol`, `livepeer/arbitrum-lpt-bridge`, `livepeer/go-livepeer`, `livepeer/governor-scripts`) | unauthenticated (low rate limit) |
| `CONTRACTS_HTTP_TIMEOUT_MS` | HTTP timeout per request | `15000` ms |

Public RPC fallbacks exist, but Etherscan/Arbiscan/GitHub tokens are needed to clear provenance/truth checks.

## Output files

Defined in [operations/scripts/integrators/content/data/contracts/constants.js](operations/scripts/integrators/content/data/contracts/constants.js#L17-L64).

### Published data — [snippets/data/contract-addresses/](snippets/data/contract-addresses/)

| File | Purpose |
|---|---|
| [contractAddressesData.json](snippets/data/contract-addresses/contractAddressesData.json) | Canonical address truth (machine-readable). |
| [contractAddressesData.jsx](snippets/data/contract-addresses/contractAddressesData.jsx) | JSX export of the same data for MDX consumption. |
| [blockchainContractsPageData.json](snippets/data/contract-addresses/blockchainContractsPageData.json) | Page model for the `v2/.../blockchain/` page. |
| [blockchainContractsPageData.jsx](snippets/data/contract-addresses/blockchainContractsPageData.jsx) | JSX export of the blockchain page model. |
| [canonicalContractsPageData.json](snippets/data/contract-addresses/canonicalContractsPageData.json) | Canonical contracts page model. |
| [canonicalContractsPageData.jsx](snippets/data/contract-addresses/canonicalContractsPageData.jsx) | JSX export of the canonical contracts page model. |
| [_health-checks.json](snippets/data/contract-addresses/_health-checks.json) | Per-endpoint health, freshness, and last-verified timestamps. |
| [_branch-watch-state.json](snippets/data/contract-addresses/_branch-watch-state.json) | Last-seen branch SHAs for the 4 watched repos. |

`view-model.jsx` is hand-authored source — **not** written by the pipeline.

### Operational reports — [workspace/reports/contracts/](workspace/reports/contracts/)

| File | Purpose |
|---|---|
| [contract-pipeline-anomaly-report.json](workspace/reports/contracts/contract-pipeline-anomaly-report.json) | Structured anomaly report (machine-readable). |
| [contract-pipeline-anomaly-report.md](workspace/reports/contracts/contract-pipeline-anomaly-report.md) | Human-readable anomaly summary. |
| [contract-pipeline-issue-payload.json](workspace/reports/contracts/contract-pipeline-issue-payload.json) | Payload used to auto-file a GitHub issue when anomalies escalate. |

## Watched repos (for provenance / branch-watch)

| Repo | Branches | Role |
|---|---|---|
| `livepeer/protocol` | `delta`, `streamflow`, `master` | controller-and-provenance |
| `livepeer/arbitrum-lpt-bridge` | `main` | bridge-and-token |
| `livepeer/go-livepeer` | `master`, `main` | runtime-consumer |
| `livepeer/governor-scripts` | `master`, `main` | governance-discovery |

## Controllers (chain entry points)

| Chain | Controller address |
|---|---|
| Arbitrum One | `0xD8E8328501E9645d16Cf49539efC04f734606ee4` |
| Ethereum Mainnet | `0xf96d54e490317c557a967abfa5d6e33006be69b3` |

Deployer: `0xB5Af4138f0f33be0D6414Eb25271B9C2Dc245fb5`.

## Suggested local run

```bash
export ETHERSCAN_API_KEY="…"
export ARBISCAN_API_KEY="…"
export GITHUB_TOKEN="…"
# optional: export ETHEREUM_RPC_URL / ARBITRUM_RPC_URL for non-public RPCs

# 1. Dry run — see what would change without touching files
node operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js --dry-run

# 2. If dry run is clean, write
node operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js

# 3. Inspect anomalies
cat workspace/reports/contracts/contract-pipeline-anomaly-report.md
```
