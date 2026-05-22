# Contract Addresses Pipeline Audit

Checked: 2026-03-31
Mode: report-only
Scope: `.github/workflows/update-contract-addresses.yml`, `.github/scripts/fetch-contract-addresses.js`, `operations/scripts/config/contract-addresses-supplement.json`, `snippets/data/contract-addresses/`, `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`, `v2/about/livepeer-protocol/blockchain-contracts.mdx`, routing and live published pages.

## Executive Summary

The highest-priority problem is data integrity, not presentation.

The current pipeline does not maintain a single trustworthy source of truth. It mixes:

- a private upstream registry: `livepeer/governor-scripts/updates/addresses.js`
- direct on-chain controller lookups
- explorer enrichment
- a manual supplement whose declared source is the docs page itself

That design is already producing user-facing incorrect data:

- the live v2 contract registry page still serializes the old Arbitrum `Minter` address `0x4969dcCF5186e1c49411638fc8A2a020Fdab752E` as current
- the live v2 contract registry page still serializes `BondingVotes` target `0x1561fC5F7Efc049476224005DFf38256dccfc509` as current
- the active search table is not active-only
- the protocol architecture page resolves `Minter` by first name match, so it lands on the stale address

This is a root-cause failure in address classification and source governance.

## Best Verifiable Source Of Truth

There is not currently one single acceptable public source for every contract family.

Use this hierarchy instead:

1. On-chain controller lookups for controller-managed current contracts.
Arbitrum One controller: `0xD8E8328501E9645d16Cf49539efC04f734606ee4`
Ethereum Mainnet controller: `0xf96d54e490317c557a967abfa5d6e33006be69b3`

2. `livepeer/governor-scripts/updates/addresses.js` for the maintained deployment manifest.
Problem: it is private and therefore not independently verifiable by readers or unauthenticated tooling.

3. `go-livepeer` runtime config for addresses actually used by the node stack.
This is especially relevant for controller addresses and `AIServiceRegistry`.

4. Verified explorer records for contract existence, proxy implementation evidence, creator address, and recent activity.

5. Docs pages should not be treated as source data.
The current supplement explicitly does this, which is circular.

## Critical Findings

1. The source-of-truth model is circular for a large part of the dataset.
Evidence: [`operations/scripts/config/contract-addresses-supplement.json`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/operations/scripts/config/contract-addresses-supplement.json) says `_meta.source` is `v2/resources/references/contract-addresses.mdx`.
Impact: the docs are feeding manual values back into the canonical dataset instead of consuming a separate authoritative manifest.

2. Versioned address mapping is wrong and causes stale addresses to remain current.
Evidence: [`fetch-contract-addresses.js`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/scripts/fetch-contract-addresses.js#L299) forces `*TargetVn` into `historical` and `nameVn` non-target entries into `current`.
Impact: old Arbitrum `Minter` V1 stays current while `Minter V2` is also current.
Evidence: [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L793) and [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L833).
On-chain check on 2026-03-31: `Controller.getContract(keccak256("Minter"))` returned `0xc20de37170b45774e6cd3d2304017fc962f27252`, not `0x4969dcCF5186e1c49411638fc8A2a020Fdab752E`.

3. The active search table is not active-only.
Evidence: [`livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx#L267) merges every `current` entry from both chains, and [`livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx#L287) renders them as the active table.
Impact: the main table includes paused Ethereum contracts, migration-complete contracts, duplicate current versions, proxy/target pairs, and stale targets.
Examples:
- Ethereum `Controller` is current but `Paused`: [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L1813)
- Ethereum `Minter` is current but `Paused`: [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L1853)
- Arbitrum `L2Migrator` target is current despite migration-complete semantics: [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L593)
- `BondingVotes` target is current even though proxy metadata points at a newer implementation: [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L190) and [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L231)

4. The live v2 registry page is already publishing bad current addresses.
Evidence: `curl` on 2026-03-31 against `https://docs.livepeer.org/v2/about/resources/livepeer-contract-addresses` returned page payload content where both `0x4969dcCF5186e1c49411638fc8A2a020Fdab752E` and `0x1561fC5F7Efc049476224005DFf38256dccfc509` appear with `isHistorical: false`.
Impact: this is not a local-only defect.

5. The pipeline's `verified` field is mislabeled and overstates trust.
Evidence: [`fetch-contract-addresses.js`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/scripts/fetch-contract-addresses.js#L437) uses `eth_getCode`.
That proves bytecode exists at the address; it does not prove explorer/source verification.
But [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L82) defines `verified=true` as source verification.

## High Findings

1. The protocol architecture page resolves `Minter` to the stale address.
Evidence: [`blockchain-contracts.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/livepeer-protocol/blockchain-contracts.mdx#L94) uses `.find(c => c.name === 'Minter')`.
Because the dataset emits both V1 and V2 as current and V1 appears first, the page lands on the wrong address.

2. The dataset is internally contradictory for `BondingVotes`.
Evidence: current target row is `0x1561...`: [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L231)
Evidence: current proxy row says `proxyTarget` is `0x68af...`: [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L190)
Impact: one generated file claims two different current implementations at the same time.

3. A large share of "current" data is supplement-only and not from the claimed primary source.
Current counts observed locally:
- Arbitrum current entries: 25
- Ethereum current entries: 24
`governor-scripts` current keys:
- Arbitrum: 21
- Ethereum: 6
Supplement-only current entries dominate Ethereum and materially affect Arbitrum.

4. Supplement entries are merged raw, not normalized.
Evidence: [`fetch-contract-addresses.js`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/scripts/fetch-contract-addresses.js#L396) appends supplement objects directly.
Impact: current entries can ship missing `repoSrc`, `contractCodeHref`, `blockchainHref`, `statusLabel`, and other metadata. This also weakens source validation.

5. The workflow does not escalate source-validation failures.
Evidence: source warnings are appended after generation in [`fetch-contract-addresses.js`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/scripts/fetch-contract-addresses.js#L1349).
Evidence: the workflow only counts `checks[].status === "FAIL"` in [`update-contract-addresses.yml`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/workflows/update-contract-addresses.yml#L91).
Current broken-source-link warnings already exist in [`_health-checks.json`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/_health-checks.json).

6. The workflow stages `v2/` wholesale after a data refresh.
Evidence: [`update-contract-addresses.yml`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/workflows/update-contract-addresses.yml#L133) adds `v2/`.
Impact: this can sweep unrelated address rewrites or content drift into an automation commit.

7. `scan_fix` defaults to `true` and performs broad regex replacement across docs.
Evidence: default in [`update-contract-addresses.yml`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/workflows/update-contract-addresses.yml#L20)
Evidence: implementation in [`fetch-contract-addresses.js`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/scripts/fetch-contract-addresses.js#L1031)
Impact: a data-update workflow is coupled to mass content rewriting.

8. The blockchain-contracts page links to a non-existent v2 reference route.
Evidence: [`blockchain-contracts.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/livepeer-protocol/blockchain-contracts.mdx#L1155) and [`blockchain-contracts.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/livepeer-protocol/blockchain-contracts.mdx#L1160) use `/v2/about/resources/contract-addresses`.
The actual route in [`docs.json`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/docs.json#L2155) is `/v2/about/resources/livepeer-contract-addresses`.
Live check on 2026-03-31: `https://docs.livepeer.org/v2/about/resources/contract-addresses` returned 404.

9. Eighteen live v2 pages still point to the legacy root contract route.
Evidence: repo search found 18 active v2 references to `https://docs.livepeer.org/references/contract-addresses`.
Live check on 2026-03-31: that URL returns HTTP 308 to `/v1/references/contract-addresses`.
Impact: readers are sent from active v2 pages to the legacy v1 contract page.

10. The canonical page builds malformed explorer links.
Evidence: [`livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx#L280) concatenates `explorerBase + address`.
Evidence: generated explorer roots are bare host URLs in [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L2392), so the current page code yields malformed links like `https://arbiscan.io0x...`.

11. The protocol page contains incorrect GitHub source links.
Examples:
- `AIServiceRegistry` links to `ServiceRegistry.sol`: [`blockchain-contracts.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/livepeer-protocol/blockchain-contracts.mdx#L628)
- `L2Migrator` links to a path the pipeline itself marks as 404: [`blockchain-contracts.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/livepeer-protocol/blockchain-contracts.mdx#L1093)

## Medium Findings

1. Header provenance is stale.
The generated header still says `Last updated: 2026-03-26...` while the file contents were regenerated later.
Evidence: [`contractAddressesData.jsx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/data/contract-addresses/contractAddressesData.jsx#L1)

2. Metadata freshness is inconsistent across wrappers and payload.
Evidence: data payload is current to 2026-03-31, but wrapper/composable frontmatter still says `lastVerified: 2026-03-26`.
Examples:
- [`v2/about/resources/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/v2/about/resources/livepeer-contract-addresses.mdx#L55)
- [`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/snippets/composables/pages/canonical/livepeer-contract-addresses.mdx#L56)

3. Output-path contract drift exists.
Evidence: the script still writes the companion JSON to the old `reference/` path in [`fetch-contract-addresses.js`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/.github/scripts/fetch-contract-addresses.js#L980) even though the current composable path in this worktree has moved to `canonical/`.

4. Local reproducibility is weak.
Evidence: a plain local `node .github/scripts/fetch-contract-addresses.js --dry-run --skip-verify` failed immediately without exported `GITHUB_TOKEN` because `livepeer/governor-scripts` is private.

5. `AIServiceRegistry` is likely misclassified as `target`.
The supplement marks it as `target`, but `go-livepeer` hardcodes it as a registry address and controller lookup for `AIServiceRegistry` returns zero on Arbitrum. That makes `standalone` the more defensible classification.

## External Evidence Summary

On-chain Arbitrum controller lookups on 2026-03-31:

- `Minter` -> `0xc20de37170b45774e6cd3d2304017fc962f27252`
- `TicketBroker` -> `0xa8bb618b1520e284046f3dfc448851a1ff26e41b`
- `LivepeerToken` -> `0x289ba1701c2f088cf0faf8b3705246331cb8a839`
- `BondingManager` -> `0x35bcf3c30594191d53231e4ff333e8a770453e40`
- `ServiceRegistry` -> `0xc92d3a360b8f9e083ba64de15d95cf8180897431`
- `LivepeerGovernor` -> `0xcfe4e2879b786c3aa075813f0e364bb5accb6aa0`
- `Treasury` -> `0xf82c1ff415f1fcf582554fdba790e27019c8e8c4`
- `L2Migrator` -> `0x148d5b6b4df9530c7c76a810bd1cdf69ec4c2085`
- `BondingVotes` -> `0x0b9c254837e72ebe9fe04960c43b69782e68169a`

Public routes checked on 2026-03-31:

- `https://docs.livepeer.org/references/contract-addresses` -> HTTP 308 redirect to `/v1/references/contract-addresses`
- `https://docs.livepeer.org/v2/about/resources/livepeer-contract-addresses` -> HTTP 200
- `https://docs.livepeer.org/v2/about/livepeer-protocol/blockchain-contracts` -> HTTP 200
- `https://docs.livepeer.org/v2/about/resources/contract-addresses` -> 404

## Bottom Line

The root problem is not one bad address string. The pipeline currently fails the "accurate data above all else" bar because:

- the source-of-truth model is split and circular
- the address classifier misplaces current versus historical versions
- the active UI table is built from the wrong semantic set
- the downstream docs then rely on first-match lookups and stale routes

Any remediation should start by fixing source governance and current/historical classification before touching page copy.
