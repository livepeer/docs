# Contract Addresses Source Of Truth And Evidence

Checked: 2026-03-31
Mode: report-only

## Recommended Truth Hierarchy

1. On-chain controller state for current controller-managed contracts.
Arbitrum One controller: `0xD8E8328501E9645d16Cf49539efC04f734606ee4`
Ethereum Mainnet controller: `0xf96d54e490317c557a967abfa5d6e33006be69b3`

2. `livepeer/governor-scripts/updates/addresses.js` as the deployment manifest.
Current inspected commit: `2cb192a`
Constraint: private repo, so not independently verifiable by readers or unauthenticated tooling.

3. `go-livepeer` runtime config for addresses actually consumed by nodes.
Useful for controller addresses and `AIServiceRegistry`.

4. Explorer verification for contract existence and implementation evidence.
Preferred explorers used during this audit:
- Arbitrum Blockscout
- Ethereum Blockscout
- Arbiscan
- Etherscan

5. Docs pages are downstream consumers only.
They must not feed the pipeline.

## Key Verified Outputs

Arbitrum controller `getContract(bytes32)` responses captured on 2026-03-31:

- `BondingManager` -> `0x35Bcf3c30594191d53231E4FF333E8A770453e40`
- `TicketBroker` -> `0xa8bB618B1520E284046F3dFc448851A1Ff26e41B`
- `RoundsManager` -> `0xdd6f56DcC28D3F5f27084381fE8Df634985cc39f`
- `Minter` -> `0xc20DE37170B45774e6CD3d2304017fc962f27252`
- `ServiceRegistry` -> `0xC92d3A360b8f9e083bA64DE15d95Cf8180897431`
- `BondingVotes` -> `0x0B9C254837E72Ebe9Fe04960C43B69782E68169A`
- `LivepeerGovernor` -> `0xcFE4E2879B786C3aa075813F0E364bb5acCb6aa0`
- `Treasury` -> `0xf82C1FF415F1fCf582554fDba790E27019c8E8C4`
- `LivepeerToken` -> `0x289ba1701C2F088cf0faf8B3705246331cB8A839`
- `L2Migrator` -> `0x148D5b6B4df9530c7C76A810bd1Cdf69EC4c2085`

Ethereum controller observations captured on 2026-03-31:

- `Minter` -> `0x8dDDB96CF36AC8860f1DE5C7c4698fd499FAB405`
- `BridgeMinter` -> zero address
- `L1LPTGateway` -> zero address
- `L1Migrator` -> zero address

Interpretation:

- Ethereum controller state exists and is real.
- The current pipeline hardcodes `registeredInController=false` for all Ethereum entries, which is semantically wrong.
- `BridgeMinter` is operationally tied to the `Minter` slot on L1, not to a separate `BridgeMinter` key.

## Internal Contradictions Observed In Generated Data

1. `Minter`
- current V1 row exists: `0x4969dcCF5186e1c49411638fc8A2a020Fdab752E`
- current V2 row exists: `0xc20DE37170B45774e6CD3d2304017fc962f27252`
- controller says current is V2 only

2. `BondingVotes`
- current target row says `0x1561fC5F7Efc049476224005DFf38256dccfc509`
- current proxy metadata says `proxyTarget=0x68af80376bc1ca0c25a83b28e5570e8c7bdd3119`

3. Ethereum controller semantics
- pipeline says "Ethereum Mainnet — no Controller, always false"
- `go-livepeer` config and direct RPC prove there is an Ethereum controller

## Public-Surface Checks

Routes checked on 2026-03-31:

- `https://docs.livepeer.org/references/contract-addresses`
Result: HTTP 308 redirect to `/v1/references/contract-addresses`

- `https://docs.livepeer.org/v2/about/resources/livepeer-contract-addresses`
Result: HTTP 200

- `https://docs.livepeer.org/v2/about/livepeer-protocol/blockchain-contracts`
Result: HTTP 200

- `https://docs.livepeer.org/v2/about/resources/contract-addresses`
Result: 404

Published-content check on 2026-03-31:

- the live v2 registry page HTML still contains `0x4969dcCF5186e1c49411638fc8A2a020Fdab752E`
- the live v2 registry page HTML still contains `0x1561fC5F7Efc049476224005DFf38256dccfc509`
- both appear in the serialized payload with `isHistorical: false`

## Primary Sources Used

- `https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js`
- `https://raw.githubusercontent.com/livepeer/go-livepeer/master/cmd/livepeer/starter/starter.go`
- `https://raw.githubusercontent.com/livepeer/go-livepeer/master/eth/client.go`
- `https://arbiscan.io/address/0xD8E8328501E9645d16Cf49539efC04f734606ee4`
- `https://arbitrum.blockscout.com/api/v2/addresses/0x35Bcf3c30594191d53231E4FF333E8A770453e40`
- `https://eth.blockscout.com/api/v2/addresses/0x8dDDB96CF36AC8860f1DE5C7c4698fd499FAB405`
- `https://docs.livepeer.org/references/contract-addresses`
- `https://docs.livepeer.org/v2/about/resources/livepeer-contract-addresses`
- `https://docs.livepeer.org/v2/about/livepeer-protocol/blockchain-contracts`

## Acceptance-Bar Conclusion

For "accurate data above all else," the current system fails on governance, not just content.

It needs:

- a non-circular machine-readable manifest
- correct current versus historical classification
- explicit chain-specific controller semantics
- an active-only surface built from active-only data
- route consolidation so v2 pages do not keep sending readers to v1
