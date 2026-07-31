# Contracts Canonical Architecture Research

Checked: 2026-04-01
Mode: report-only
Scope: primary-source research for a replacement contracts pipeline architecture

## Executive Summary

The current docs-side contracts pipeline is not acceptable as a canonical system.

The correct architecture is available, but it has to be built chain-first:

1. Current controller-managed contracts from live `Controller.getContractInfo(bytes32)` and `Controller.getContract(bytes32)`
2. Current proxy implementations from live proxy runtime `controller()` + `targetContractId()` + Controller `getContract(targetId)`
3. Current bridge cluster addresses from live bridge-contract getters
4. Exact code provenance from on-chain `gitCommitHash` plus official repo deployment artefacts
5. Historical controller-managed Arbitrum addresses from `SetContractInfo` events
6. Official repo deployment artefacts and official runtime consumers as supporting evidence for detached non-controller contracts

What must not exist in the new design:

- no docs-local truth file
- no docs-local allowlist of published contract families
- no branch guessing
- no first-match name resolution
- no human-maintained repo file accepted as sole proof of current truth

The strongest finding from this pass is that the chain already exposes far more canonical truth than the current docs pipeline uses. The replacement script should be discovery-first, not declaration-first.

## Primary Sources Read

Local repo evidence:

- `.github/workflows/update-contract-addresses.yml`
- `.github/scripts/fetch-contract-addresses.js`
- `snippets/composables/pages/canonical/livepeer-contract-addresses.mdx`
- `snippets/components/integrators/feeds/ContractVerifier.jsx`
- `docs.json`
- `workspace/plan/active/CONTRACTS/contracts-pipeline-audit-2026-03-31.md`
- `workspace/plan/active/CONTRACTS/contracts-source-of-truth-and-evidence-2026-03-31.md`
- `workspace/plan/active/CONTRACTS/contracts-explorer-link-audit-2026-03-31.md`

Official upstream and chain sources:

- `https://github.com/livepeer/protocol`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/contracts/Controller.sol`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/contracts/ManagerProxy.sol`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/contracts/IController.sol`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/tasks/verify-protocol.ts`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/deployments/arbitrumMainnet/BondingManagerProxy.json`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/deployments/arbitrumMainnet/BondingManagerTarget.json`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/deployments/arbitrumMainnet/RoundsManagerProxy.json`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/deployments/arbitrumMainnet/RoundsManagerTarget.json`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/deployments/arbitrumMainnet/TicketBrokerProxy.json`
- `https://raw.githubusercontent.com/livepeer/protocol/confluence/deployments/arbitrumMainnet/TicketBrokerTarget.json`
- `https://raw.githubusercontent.com/livepeer/protocol/delta/deploy/deploy_ai_service_registry.ts`
- `https://raw.githubusercontent.com/livepeer/protocol/delta/deployments/arbitrumMainnet/AIServiceRegistry.json`
- `https://github.com/livepeer/arbitrum-lpt-bridge`
- `https://raw.githubusercontent.com/livepeer/arbitrum-lpt-bridge/main/contracts/ControlledGateway.sol`
- `https://raw.githubusercontent.com/livepeer/arbitrum-lpt-bridge/main/contracts/L1/gateway/L1LPTGateway.sol`
- `https://raw.githubusercontent.com/livepeer/arbitrum-lpt-bridge/main/contracts/L1/escrow/L1Escrow.sol`
- `https://raw.githubusercontent.com/livepeer/arbitrum-lpt-bridge/main/deployments/mainnet/L1LPTGateway.json`
- `https://raw.githubusercontent.com/livepeer/arbitrum-lpt-bridge/main/deployments/mainnet/L1Escrow.json`
- `https://raw.githubusercontent.com/livepeer/arbitrum-lpt-bridge/main/deployments/mainnet/L1Migrator.json`
- `https://raw.githubusercontent.com/livepeer/arbitrum-lpt-bridge/main/deployments/arbitrumMainnet/L2LPTGateway.json`
- `https://github.com/livepeer/go-livepeer`
- `https://raw.githubusercontent.com/livepeer/go-livepeer/master/cmd/livepeer/starter/starter.go`
- `https://raw.githubusercontent.com/livepeer/go-livepeer/master/eth/client.go`
- `https://github.com/livepeer/governor-scripts/issues/13`
- `https://github.com/livepeer/governor-scripts/pull/14`
- `https://github.com/livepeer/governor-scripts/blob/master/updates/addresses.js`

Live RPC observations captured on 2026-04-01:

- Arbitrum One controller `0xD8E8328501E9645d16Cf49539efC04f734606ee4`
- Ethereum Mainnet controller `0xf96d54e490317c557a967abfa5d6e33006be69b3`

## What The Chain Can Prove Today

### 1. Current controller-managed addresses are directly recoverable on-chain

`Controller.sol` stores both the contract address and a `gitCommitHash` in `setContractInfo()` and exposes both through `getContractInfo(bytes32)` and `getContract(bytes32)` (`livepeer/protocol` `confluence/contracts/Controller.sol`).

That means current controller-managed entries do not need `governor-scripts` or any docs-local catalog to discover the current address.

Observed on 2026-04-01:

- Arbitrum `BondingManager` current proxy: `0x35Bcf3c30594191d53231E4FF333E8A770453e40`
- Arbitrum `TicketBroker` current proxy: `0xa8bB618B1520E284046F3dFc448851A1Ff26e41B`
- Arbitrum `RoundsManager` current proxy: `0xdd6f56DcC28D3F5f27084381fE8Df634985cc39f`
- Arbitrum `ServiceRegistry` current proxy: `0xC92d3A360b8f9e083bA64DE15d95Cf8180897431`
- Arbitrum `BondingVotes` current proxy: `0x0B9C254837E72Ebe9Fe04960C43B69782E68169A`
- Arbitrum `LivepeerGovernor` current proxy: `0xcFE4E2879B786C3aa075813F0E364bb5acCb6aa0`
- Ethereum `LivepeerToken` current slot: `0x58b6a8a3302369daec383334672404ee733ab239`
- Ethereum `Minter` current slot: `0x8dDDB96CF36AC8860f1DE5C7c4698fd499FAB405`

Important nuance: on Ethereum Mainnet the current `Minter` slot resolves to the active `BridgeMinter` contract, not to a separate `BridgeMinter` controller slot. `BridgeMinter`, `L1LPTGateway`, and `L1Migrator` returned zero as direct controller keys on 2026-04-01, so the L1 data model cannot assume one controller slot per human-facing contract family.

### 2. Current proxy implementations are directly recoverable on-chain

`ManagerProxy.sol` does not store a static implementation address. It resolves the current target at runtime via:

- `controller()`
- `targetContractId()`
- `controller.getContract(targetContractId)`

Source: `livepeer/protocol` `confluence/contracts/ManagerProxy.sol`.

Observed on 2026-04-01:

- `BondingManager` proxy `0x35Bcf...` -> target id `keccak256("BondingManagerTarget")` -> implementation `0xda6fe3f332Ae11539b3cF777284Ae70fd3bF2D74`
- `TicketBroker` proxy `0xa8bB...` -> implementation `0xea1b0F6c8D158328a6e3D3F924B86A759F41465c`
- `RoundsManager` proxy `0xdd6f...` -> implementation `0x92d804Ed49D92438aEA6fe552BD9163aacb7E841`
- `ServiceRegistry` proxy `0xC92d...` -> implementation `0x38093CDca43aeCd7bb474983519A246e93A3b0a7`
- `BondingVotes` proxy `0x0B9C...` -> implementation `0x68AF80376Bc1CA0C25a83b28e5570E8c7bdD3119`
- `LivepeerGovernor` proxy `0xcFE4...` -> implementation `0xd2Ce37BCB287CaDc40647f567C2D3C4220901634`

This is a fully chain-derived current implementation path. It should be the canonical verification method for proxy families.

### 3. Current Arbitrum controller history is available from events

`IController.sol` defines `event SetContractInfo(bytes32 id, address contractAddress, bytes20 gitCommitHash)`.

Live RPC observation on 2026-04-01:

- `eth_getLogs` against the Arbitrum controller with the `SetContractInfo(bytes32,address,bytes20)` topic returned 38 logs.

This means historical controller-managed Arbitrum addresses can be reconstructed from chain events, provided the system has a trustworthy source of human-readable slot names to hash and compare against event ids.

### 4. Current Ethereum state is readable, but current-controller event history is not a safe sole source

Live RPC observation on 2026-04-01:

- `getContractInfo()` on the current Ethereum controller returned non-zero current state for `LivepeerToken` and `Minter`
- `eth_getLogs` for `SetContractInfo` on the same current controller returned zero logs from multiple public RPC providers

Interpretation:

- Ethereum current truth is readable from controller state
- Ethereum historical reconstruction should not rely solely on the current controller event stream
- L1 historical output should be optional, low-priority, and clearly separated from current active data unless another authoritative event history source is confirmed

### 5. The L1 and L2 bridge cluster can be cross-verified on-chain

The bridge contracts expose a live graph of linked addresses through public getters.

Observed on 2026-04-01:

- `L1LPTGateway.minter()` -> `0x8dDDB96CF36AC8860f1DE5C7c4698fd499FAB405`
- `L1LPTGateway.l1LPTEscrow()` -> `0x6A23F4940BD5BA117Da261f98aae51A8BFfa210A`
- `L1LPTGateway.l2Counterpart()` -> `0x6D2457a4ad276000A615295f7A80F79E48CcD318`
- `L1LPTGateway.l1Lpt()` -> `0x58b6a8a3302369daec383334672404ee733ab239`
- `L1LPTGateway.l2Lpt()` -> `0x289ba1701C2F088cf0faf8B3705246331cB8A839`
- `BridgeMinter.l1MigratorAddr()` -> `0x21146B872D3A95d2cF9afeD03eE5a783DaE9A89A`
- `BridgeMinter.l1LPTGatewayAddr()` -> `0x6142f1C8bBF02E6A6bd074E8d564c9A5420a0676`
- `BridgeMinter.getController()` -> `0xf96d54e490317c557a967abfa5d6e33006be69b3`
- `L2LPTGateway.l1Counterpart()` -> `0x6142f1C8bBF02E6A6bd074E8d564c9A5420a0676`
- `L2LPTGateway.l1Lpt()` -> `0x58b6a8a3302369daec383334672404ee733ab239`
- `L2LPTGateway.l2Lpt()` -> `0x289ba1701C2F088cf0faf8B3705246331cB8A839`

This means the bridge cluster can be verified as a connected set without any docs-local address file:

- mainnet controller `Minter` slot -> BridgeMinter
- BridgeMinter -> L1Migrator and L1LPTGateway
- L1LPTGateway -> L1Escrow, L2LPTGateway, L1 token, L2 token
- L2LPTGateway -> L1 counterpart, L1 token, L2 token

### 6. AIServiceRegistry is detached from the controller, but still has official external evidence

Official external evidence exists in two places:

- `livepeer/protocol` default branch `delta` deployment artefact `deployments/arbitrumMainnet/AIServiceRegistry.json` with address `0x04C0b249740175999E5BF5c9ac1dA92431EF34C5`
- `livepeer/go-livepeer` `cmd/livepeer/starter/starter.go` hardcodes the same address when `-aiServiceRegistry` mode is enabled

The deployment script `deploy/deploy_ai_service_registry.ts` deploys `ServiceRegistry` and saves it as `AIServiceRegistry`, so the official source path is still `contracts/ServiceRegistry.sol`.

This is not controller truth, but it is still authoritative external evidence from official upstream repos and official runtime consumption. It is materially stronger than a docs-local fixed address.

## What Official Repos Can Prove Today

### 1. Official deployment artefacts already contain most of the source-link data the docs need

Official deployment JSON files include:

- deployed address
- deployment transaction hash
- constructor args
- full metadata JSON
- `settings.compilationTarget`

Examples:

- `livepeer/protocol` `confluence/deployments/arbitrumMainnet/BondingManagerTarget.json` -> compilation target `contracts/bonding/BondingManager.sol`
- `livepeer/arbitrum-lpt-bridge` `main/deployments/mainnet/L1LPTGateway.json` -> compilation target `contracts/L1/gateway/L1LPTGateway.sol`
- `livepeer/protocol` `delta/deployments/arbitrumMainnet/AIServiceRegistry.json` -> compilation target `contracts/ServiceRegistry.sol`

This means source-code file paths do not need to be declared in a docs-local authority file. They can be read from official deployment artefacts.

### 2. The protocol repo already has an upstream verification pattern

`livepeer/protocol` `confluence/tasks/verify-protocol.ts` verifies:

- current controller registration for protocol contracts
- deployment artefact address matches controller current state
- selected governance and protocol params

This is the correct design direction. The docs pipeline should consume or mirror this style of verification, not replace it with a local declaration file.

### 3. Branch choice is ambiguous if guessed from names or README text

Observed on 2026-04-01:

- `livepeer/protocol` default branch is `delta`
- the repo README on `delta` says `confluence` contains the latest Arbitrum contract code and `streamflow` contains the latest Ethereum contract code
- current AIServiceRegistry deployment artefact exists on `delta`

Conclusion:

- branch guessing is not reliable
- commit-specific links are safer than branch links
- repo/commit resolution should come from live `gitCommitHash` and official deployment artefacts, not a docs-local branch map

### 4. `governor-scripts` is still human-maintained and currently lacks the proposed chain check

Current facts:

- `updates/addresses.js` exists on `master`
- current `package.json` does not include a test suite for address verification
- the improvement request in issue #13 explicitly states hardcoded repo addresses are dangerous
- PR #14 implements a controller-event comparison test, but the current `master` tree does not contain `test/addresses.js` or a workflow running that check

Conclusion:

- `governor-scripts` is useful as a trigger and comparison input
- it is not safe as the sole current-truth source
- its own proposed fix supports the same conclusion

## Why The Current Docs Architecture Is Invalid

### 1. The current script still tries to load a docs-local authority file

Evidence in the current worktree:

- `.github/scripts/fetch-contract-addresses.js` line 24 hardcodes `operations/scripts/config/contract-addresses-authority.json`
- `.github/scripts/fetch-contract-addresses.js` line 203 reads it directly
- current `git status` shows `operations/scripts/config/contract-addresses-authority.json` deleted
- an untracked replacement file `operations/scripts/config/dep-contract-addresses-authority.json` exists, and its own header states `NOT CANONICAL, NOT TRUTH, DO NOT USE`

That alone disqualifies the current implementation path.

### 2. The page still overstates the source model

`snippets/composables/pages/canonical/livepeer-contract-addresses.mdx` currently claims:

- automatically updated from canonical governor-scripts source
- only official reference outside the blockchain
- data sourced from `governor-scripts` and verified on-chain

That copy is too simple for the actual truth model the docs need. The page must describe chain-first verification and exact provenance, not a single human-maintained repo file.

### 3. The widget still assumes a weaker truth model than the chain supports

`snippets/components/integrators/feeds/ContractVerifier.jsx` still assumes:

- Arbitrum has controller lookups
- Ethereum Mainnet `hasController: false`

That is factually incomplete because the Ethereum controller does exist and exposes current state for `LivepeerToken` and `Minter`. The replacement architecture needs chain-aware slot semantics, not a blanket per-chain boolean.

## Recommended Replacement Architecture

### Source hierarchy

1. Live controller current state for controller-managed contracts
2. Live proxy runtime for current implementations
3. Live bridge-contract getter graph for non-controller bridge contracts
4. Official deployment artefacts for source path, deploy transaction, constructor graph, and detached contracts
5. Official runtime consumers such as `go-livepeer` for detached operational addresses
6. `governor-scripts` as trigger, comparison, and drift detector only
7. Docs-local files for truth: forbidden

### Step 0. Build the upstream source map outside the docs repo

At runtime, discover the current official repo endpoints through GitHub API:

- `livepeer/protocol`
- `livepeer/arbitrum-lpt-bridge`
- `livepeer/go-livepeer`
- `livepeer/governor-scripts`

This source map is for commit resolution and deployment-artefact lookup only. It is not address truth.

### Step 1. Extract known controller slot names from official upstream code

Do not keep a docs-local slot-name file.

Instead, extract names from official upstream code such as:

- `go-livepeer` `eth/client.go`
- `protocol` verification/deploy tasks
- official deployment artefact names where relevant

Then hash those names and compare them to the live controller event ids and current state ids.

If an event id or current slot is unknown after this extraction pass, fail the run and report an upstream schema gap.

### Step 2. Discover current controller-managed contracts from chain state

For each known slot name on each live controller:

- call `getContractInfo(bytes32)`
- record current address
- record exact `gitCommitHash`
- mark current controller registration status

This should be the canonical source of current protocol state for controller-managed contracts.

### Step 3. Discover current proxy implementations from live proxy runtime

For every current proxy candidate:

- call `controller()`
- call `targetContractId()`
- call `controller.getContract(targetContractId)`

Publish:

- proxy address
- target contract id
- current implementation address
- controller address
- match status

This replaces any static `current implementation` declarations.

### Step 4. Discover the current bridge cluster from on-chain links

Start from current mainnet controller state and live bridge getters:

- mainnet `Minter` slot gives current BridgeMinter
- BridgeMinter gives `l1MigratorAddr` and `l1LPTGatewayAddr`
- L1LPTGateway gives `l1LPTEscrow`, `l2Counterpart`, `l1Lpt`, `l2Lpt`
- L2LPTGateway gives `l1Counterpart`, `l1Lpt`, `l2Lpt`

This yields a chain-derived current bridge graph without a docs-local address file.

### Step 5. Resolve exact source-code links from chain commit hash plus deployment artefacts

For controller-managed contracts:

- use `gitCommitHash` from `getContractInfo`
- resolve which official repo contains that commit
- read the corresponding deployment artefact and `metadata.settings.compilationTarget`
- build commit-specific GitHub source links

Observed examples:

- BondingManager current commit `77a37e58192a6017a200920f58551d2cfc2873a3` resolves in `livepeer/protocol`
- ServiceRegistry current commit `1adec872eb5ea94be8ece34ca61975e9c029fc8b` resolves in `livepeer/protocol`
- L2Migrator current commit `41158507f55954e3eb4e73dcad3b3293e3592d7c` resolves in `livepeer/arbitrum-lpt-bridge`

This is the correct answer to the multiple-repos and multiple-branches problem. Use exact commit, not guessed branch.

### Step 6. Historical output only where the chain can support it cleanly

Arbitrum:

- historical controller-managed addresses can come from `SetContractInfo` logs on the current controller

Ethereum:

- current state can come from `getContractInfo`
- historical reconstruction is not yet safe from the current controller event stream alone

Recommendation:

- keep the main public surface current and active-only
- make historical data a separate secondary output
- omit or clearly downgrade L1 historical rows until an authoritative history source is confirmed

### Step 7. Detached contracts use official upstream deployment evidence, not docs-owned fixes

Examples:

- AIServiceRegistry
- L1Escrow

For these contracts:

- resolve address from official deployment artefact or live getter graph
- confirm bytecode and source verification on explorer
- cross-check against official runtime consumers where relevant
- never let a docs-local file invent or override the address

### Step 8. Fail hard on any unresolved or contradictory truth

The run must fail when:

- a current controller slot resolves to an unknown id or unknown name
- a current proxy has no runtime-resolved implementation
- a `gitCommitHash` cannot be resolved to an official repo
- a deployment artefact path cannot be resolved for a current contract
- a bridge cross-link does not match live getter output
- the same current contract family resolves to multiple current entrypoints on one chain
- an explorer link is malformed
- a docs-local file is required to complete address truth

## What This Means For Shipping

Do not ship the current docs-side implementation as canonical contracts infrastructure.

The right next implementation target is:

- current active contracts only
- chain-first discovery
- repo scan only for commit and source-path resolution
- historical Arbitrum output as optional secondary data
- no docs-local authority catalog in the truth path

## Recommended Approach

Build the new script around three truth passes:

1. `chain-current`
Current state from controllers, proxies, and bridge getters

2. `repo-provenance`
Official deployment artefacts and commit resolution for exact source links

3. `presentation`
Lifecycle grouping and docs-friendly output generation

The docs repo should own only the presentation pass. It should not own the truth model.

## Decisions Still Needed

1. Whether to publish any historical L1 contracts at all
Recommendation: no, not on the main page. Keep L1 historical out of the primary public surface until an authoritative event-history source is confirmed.

2. Whether to keep `governor-scripts` in the docs pipeline at all
Recommendation: yes, but only as a trigger and comparison input. Do not let it define current truth by itself.

3. Whether upstream should add a machine-readable controller-slot export
Recommendation: yes. The docs pipeline can extract names from official code today, but an upstream machine-readable slot registry would remove avoidable ambiguity and make unknown-slot detection cleaner.
