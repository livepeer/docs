# Livepeer Protocol & Network: About Section References

This document provides the canonical reference pages for the **About** section of the Livepeer documentation site. It supports the core documentation for the Protocol and Network categories by indexing external and internal materials for further learning, citation, and deep integration.

---

## 📘 Core Reference Pages

These are the pages currently housed under `v2/pages/01_about/resources/`.

### ✅ Protocol & Network Fundamentals

| Resource Page | Description |
|---------------|-------------|
| `livepeer-whitepaper` | Original 2017 whitepaper. Provides the philosophical and technical foundation for decentralized video infrastructure. Many aspects have evolved (e.g., Arbitrum migration, AI inference layers). Use as historical context. |
| `livepeer-glossary` | Canonical definitions of protocol, network, and gateway terms. Maintained in parallel with `mental-model.mdx`. |
| `blockchain-contracts` | Reference page for Ethereum & Arbitrum contracts used in the Livepeer Protocol. Includes names, addresses (2026), and verified ABIs. |
| `technical-roadmap` | Timeline and feature map for Streamflow, Cascade, Arbitrum migration, gateway evolution, and AI integrations. Useful for understanding architectural evolution. |
| `gateways-vs-orchestrators` | Explains difference between compute providers (orchestrators/workers) and coordination layer (gateways). References Studio, Daydream, and AI-native gateways. |

---

## 🛰 Live Metrics + Explorers

These placeholder metrics were referenced in protocol/network docs and should be pulled live into this section for internal build, or statically sourced where needed:

| Metric | Source | Description |
|--------|--------|-------------|
| `totalBonded` | [explorer.livepeer.org/graphql](https://explorer.livepeer.org/graphql) | % of total LPT staked in active orchestrators. |
| `inflationRate` | [BondingManager contract](https://github.com/livepeer/protocol/blob/master/contracts/bonding/BondingManager.sol) | Current LPT inflation rate. Changes every round via bonding target adjustment. |
| `activeOrchestrators` | [GraphQL Explorer](https://explorer.livepeer.org/graphql) | Total number of registered orchestrators with stake > 0. |
| `totalSupplyLPT` | [Etherscan](https://etherscan.io/token/0x58b6a8a3302369daec383334672404ee733ab239) | Total minted LPT supply. |
| `broadcasterFeeVolume` | [Explorer (Fees)](https://explorer.livepeer.org/usage/fees) | Total ETH paid by broadcasters (video + AI). |
| `treasuryLPT` | [Governor Contract View](https://etherscan.io/address/0xINSERT) | Treasury-held LPT from inflation and slashing. |

These metrics are referenced inline in:
- `livepeer-token.mdx`
- `protocol-economics.mdx`
- `governance-model.mdx`
- `marketplace.mdx`

---

## 🔍 External Reference Links (to use throughout site)

| Type | Link |
|------|------|
| Protocol GitHub | [https://github.com/livepeer/protocol](https://github.com/livepeer/protocol) |
| Governance Forum | [https://forum.livepeer.org/c/lips/](https://forum.livepeer.org/c/lips/) |
| Contract ABIs | [https://github.com/livepeer/protocol/tree/master/abi](https://github.com/livepeer/protocol/tree/master/abi) |
| Arbitrum Deployments | [https://arbiscan.io/address/0xINSERT](https://arbiscan.io) (TicketBroker, BondingManager, etc.) |
| Streamflow Upgrade | [Blog](https://blog.livepeer.org/the-streamflow-upgrade-to-livepeer/) |
| Cascade & Daydream | [Cascade](https://blog.livepeer.org/introducing-cascade) · [Daydream](https://blog.livepeer.org/introducing-daydream) |

---

This page should be referenced from:
- `01_about/about-portal.mdx`
- Every core `protocol/` and `network/` documentation page’s "Further Reading" section

---

Next: I’ll define the Developer section roles and distinctions, propose updated IA, and begin page writing as per your instructions.

