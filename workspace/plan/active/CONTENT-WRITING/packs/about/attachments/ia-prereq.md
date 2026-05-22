# About Tab — Pre-IA Reference File

Generated: 2026-03-23

---

## Section 1 — Folder & File Tree (v2/about/)

```
v2/about/
├── index.mdx  [title: "About Index" | pageType: overview]
├── portal.mdx  [title: "About Livepeer: Protocol & Network" | pageType: landing]
├── livepeer-overview.mdx  [title: "Livepeer Overview" | pageType: overview]
├── core-concepts.mdx  [title: "Livepeer Core Concepts" | pageType: concept]
├── mental-model.mdx  [title: "The Livepeer Stack and Mental Model" | pageType: concept]
├── faq-about.mdx  [title: "FAQ" | pageType: reference]
├── core-concepts/
│   └── concepts/
│       └── actors.mdx  [title: "Livepeer Actors" | pageType: [no pageType]]
├── livepeer-network/
│   ├── overview.mdx  [title: "Livepeer Network Overview" | pageType: overview]
│   ├── actors.mdx  [title: "Actors Overview" | pageType: concept]
│   ├── job-lifecycle.mdx  [title: "Livepeer Job Lifecycle" | pageType: concept]
│   ├── marketplace.mdx  [title: "Livepeer Marketplace" | pageType: concept]
│   ├── technical-architecture.mdx  [title: "Network Technical Architecture" | pageType: concept]
│   ├── interfaces.mdx  [title: "Network Interfaces" | pageType: concept]
│   ├── demand-side.mdx  [title: "Livepeer Demand Side" | pageType: [no pageType]]
│   ├── fee-flow.mdx  [title: "Livepeer Fee Flow" | pageType: [no pageType]]
│   ├── scaling.mdx  [title: "Livepeer Scaling" | pageType: [no pageType]]
│   ├── supply-side.mdx  [title: "Livepeer Supply Side" | pageType: [no pageType]]
│   └── livepeer-actors/
│       ├── delegators.mdx  [title: "Delegators" | pageType: [no pageType]]
│       ├── end-users.mdx  [title: "Builders and End Users" | pageType: [no pageType]]
│       ├── gateways.mdx  [title: "Gateways" | pageType: [no pageType]]
│       └── orchestrators.mdx  [title: "Orchestrators" | pageType: [no pageType]]
├── livepeer-protocol/
│   ├── overview.mdx  [title: "Protocol Overview" | pageType: overview]
│   ├── core-mechanisms.mdx  [title: "Core Mechanisms and Functions" | pageType: concept]
│   ├── livepeer-token.mdx  [title: "Livepeer Token" | pageType: concept]
│   ├── governance-model.mdx  [title: "Livepeer Governance Model" | pageType: concept]
│   ├── treasury.mdx  [title: "Livepeer Treasury" | pageType: concept]
│   ├── economics.mdx  [title: "Livepeer Protocol Economics" | pageType: concept]
│   └── technical-architecture.mdx  [title: "Technical Overview" | pageType: concept]
├── resources/
│   ├── livepeer-whitepaper.mdx  [title: "Livepeer Whitepaper" | pageType: reference]
│   ├── livepeer-glossary.mdx  [title: "Livepeer Glossary" | pageType: glossary]
│   ├── blockchain-contracts.mdx  [title: "Blockchain Contracts" | pageType: [no pageType]]
│   ├── technical-roadmap.mdx  [title: "Technical Roadmap" | pageType: reference]
│   ├── dep-blockchain-contracts.mdx  [title: "Blockchain Contracts" | pageType: [no pageType]]
│   ├── gateways-vs-orchestrators.mdx  [title: "Gateways Vs. Orchestrators: What's the Difference?" | pageType: [no pageType]]
│   └── compendium/
│       ├── glossary-data.json  [non-MDX asset]
│       └── glossary.mdx  [title: "About Livepeer — Glossary" | pageType: reference]
└── _workspace/  [working directory — not published]
    ├── LivepeerContractAddresses.md
    ├── LivepeerContractAddressesResearch.md
    ├── contracts.zip
    ├── todo.txt
    └── deprecated/
        ├── livepeer-governance.mdx  [title: [no title] | pageType: [no pageType]]
        ├── livepeer-token-economics.mdx  [title: "Livepeer Token Economics" | pageType: [no pageType]]
        └── livepeer-protocol/
            └── technical-overview.mdx  [title: [no title] | pageType: [no pageType]]
```

---

## Section 2 — Navigation Tree (docs.json — About section)

```
tab: "About"  (icon: camera-movie)
└── anchor: "About Livepeer"  (icon: play)
    ├── group: "About Livepeer"  (icon: graduation-cap)
    │   ├── v2/about/portal
    │   ├── v2/about/livepeer-overview
    │   ├── v2/about/core-concepts
    │   └── v2/about/mental-model
    ├── group: "Livepeer Protocol"  (icon: cube)
    │   ├── v2/about/livepeer-protocol/overview
    │   ├── v2/about/livepeer-protocol/core-mechanisms
    │   ├── v2/about/livepeer-protocol/livepeer-token
    │   ├── v2/about/livepeer-protocol/governance-model
    │   ├── v2/about/livepeer-protocol/treasury
    │   ├── v2/about/livepeer-protocol/economics
    │   └── v2/about/livepeer-protocol/technical-architecture
    ├── group: "Livepeer Network"  (icon: circle-nodes)
    │   ├── v2/about/livepeer-network/overview
    │   ├── v2/about/livepeer-network/actors
    │   ├── v2/about/livepeer-network/job-lifecycle
    │   ├── v2/about/livepeer-network/marketplace
    │   ├── v2/about/livepeer-network/technical-architecture
    │   └── v2/about/livepeer-network/interfaces
    └── group: "Resources"  (icon: books)
        ├── v2/about/resources/livepeer-whitepaper
        ├── v2/about/resources/livepeer-glossary
        ├── v2/about/resources/blockchain-contracts
        ├── v2/about/resources/technical-roadmap
        └── group: "Compendium"
            └── v2/about/resources/compendium/glossary
```

---

## Section 3 — Discrepancy Notes

### Files in v2/about/ NOT in docs.json (orphans)

- `v2/about/index.mdx`
- `v2/about/faq-about.mdx`
- `v2/about/core-concepts/concepts/actors.mdx`
- `v2/about/livepeer-network/demand-side.mdx`
- `v2/about/livepeer-network/fee-flow.mdx`
- `v2/about/livepeer-network/scaling.mdx`
- `v2/about/livepeer-network/supply-side.mdx`
- `v2/about/livepeer-network/livepeer-actors/delegators.mdx`
- `v2/about/livepeer-network/livepeer-actors/end-users.mdx`
- `v2/about/livepeer-network/livepeer-actors/gateways.mdx`
- `v2/about/livepeer-network/livepeer-actors/orchestrators.mdx`
- `v2/about/resources/dep-blockchain-contracts.mdx`
- `v2/about/resources/gateways-vs-orchestrators.mdx`
- `v2/about/_workspace/deprecated/livepeer-governance.mdx`
- `v2/about/_workspace/deprecated/livepeer-token-economics.mdx`
- `v2/about/_workspace/deprecated/livepeer-protocol/technical-overview.mdx`

### Paths in docs.json with NO matching file (missing/stubs)

All 18 paths listed in the About section of docs.json resolve to existing `.mdx` files. No missing stubs detected.

### Files with no `pageType` in frontmatter

- `v2/about/core-concepts/concepts/actors.mdx`
- `v2/about/livepeer-network/demand-side.mdx`
- `v2/about/livepeer-network/fee-flow.mdx`
- `v2/about/livepeer-network/scaling.mdx`
- `v2/about/livepeer-network/supply-side.mdx`
- `v2/about/livepeer-network/livepeer-actors/delegators.mdx`
- `v2/about/livepeer-network/livepeer-actors/end-users.mdx`
- `v2/about/livepeer-network/livepeer-actors/gateways.mdx`
- `v2/about/livepeer-network/livepeer-actors/orchestrators.mdx`
- `v2/about/resources/blockchain-contracts.mdx`
- `v2/about/resources/dep-blockchain-contracts.mdx`
- `v2/about/resources/gateways-vs-orchestrators.mdx`
- `v2/about/_workspace/deprecated/livepeer-governance.mdx`
- `v2/about/_workspace/deprecated/livepeer-token-economics.mdx`
- `v2/about/_workspace/deprecated/livepeer-protocol/technical-overview.mdx`
