# Research Brief: Contracts Pipeline Rearchitecture

Checked: 2026-04-01
Mode: report-only
Scope: authoritative source research for a replacement contracts pipeline

## What I Found

### 1. Controller-managed contracts already expose the strongest truth signals on-chain

The protocol `Controller` stores both the current contract address and a `gitCommitHash` for each registered contract ID, and emits both values in `SetContractInfo` events. That is in the protocol source itself:

- `Controller.sol` stores `contractAddress` and `gitCommitHash` in `registry` and emits `SetContractInfo` on update
- `IController.sol` defines the `SetContractInfo(bytes32,address,bytes20)` event

Primary sources:

- `livepeer/protocol` `contracts/Controller.sol`
- `livepeer/protocol` `contracts/IController.sol`

What this means:

- Current controller-managed addresses can be read directly from chain with `getContractInfo()` or `getContract()`.
- Historical controller-managed addresses can be reconstructed from `SetContractInfo` logs.
- Current code provenance can be pinned to the exact upstream protocol commit hash stored on-chain.

This is stronger than a repo branch or a docs-local config file.

### 2. Proxy runtime can be verified directly from chain

`ManagerProxy` resolves its live implementation through:

1. `controller()`
2. `targetContractId()`
3. `controller.getContract(targetContractId)`

Primary source:

- `livepeer/protocol` `contracts/ManagerProxy.sol`
- `livepeer/protocol` `contracts/ManagerProxyTarget.sol`
- `livepeer/protocol` `contracts/Manager.sol`

Live on-chain checks confirmed that active Arbitrum proxies expose this path and that `targetContractId()` matches the expected `keccak256("<Name>Target")` for:

- `BondingManager`
- `RoundsManager`
- `ServiceRegistry`
- `TicketBroker`
- `BondingVotes`

So active proxy correctness does not need explorer proxy heuristics or naming guesses. It can be verified directly from chain.

### 3. Chain-only discovery is not enough for all contracts

The security-committee recommendation in `livepeer/governor-scripts` PR #14 is valid but narrower than the full docs problem.

PR #14 explicitly states:

- hardcoded addresses in the repo are dangerous if they drift
- the proposed fix is to compare `addresses.js` against `SetContractInfo` events emitted by the `Controller`
- the challenge is that controller IDs are hashes of human-readable names and are not reversible on-chain

Primary source:

- `livepeer/governor-scripts` PR #14 `Check addresses against the controller`
- `livepeer/governor-scripts` `test/addresses.js`

What this means:

- Controller events are the right truth source for controller-managed contracts.
- But chain data alone cannot recover the human-readable contract names from the hashed IDs.
- A name dictionary is still required.

The critical correction is that this dictionary must come from official upstream sources, not a docs-local file.

### 4. The protocol repo already provides the right upstream name and commit model

The protocol deployment code does two important things:

1. It computes contract IDs from human-readable names with `solidityKeccak256(["string"], [name])`
2. It registers deployed contracts through `controller.setContractInfo(id, address, gitHash)`

Primary sources:

- `livepeer/protocol` `utils/deployer.ts`
- `livepeer/protocol` `deploy/deploy_contracts.ts`
- `livepeer/protocol` `deploy/deploy_delta_upgrade.ts`

This is the strongest upstream basis for controller-managed names because it is the official deploy path that actually writes the Controller registry.

What this means:

- The docs pipeline can generate the controller ID dictionary from official upstream deploy code, not from a docs-owned allowlist.
- For controller-managed contracts, branch ambiguity can be removed by using the on-chain `gitCommitHash` instead of a floating branch.

### 5. Non-controller contracts need a second authoritative track

Not all official Livepeer contracts are controller-managed.

Confirmed examples:

- `AIServiceRegistry` is deployed by the protocol deploy flow as a saved deployment named `AIServiceRegistry`, but it is not a Controller-registered contract name in the current protocol registry
- `L1LPTGateway`, `L2LPTGateway`, `L1Escrow`, `L1Migrator`, `L1LPTDataCache`, and `L2LPTDataCache` live in the official `livepeer/arbitrum-lpt-bridge` repo and have committed deployment artefacts with addresses, transaction hashes, and receipts

Primary sources:

- `livepeer/protocol` `deploy/deploy_ai_service_registry.ts`
- `livepeer/protocol` `deployments/arbitrumMainnet/AIServiceRegistry.json`
- `livepeer/go-livepeer` `cmd/livepeer/starter/starter.go`
- `livepeer/arbitrum-lpt-bridge` `deployments/mainnet/*.json`
- `livepeer/arbitrum-lpt-bridge` `deployments/arbitrumMainnet/*.json`

What this means:

- A pure controller-only pipeline will miss official Livepeer contracts.
- A pure chain-only pipeline will not know which non-controller contracts to publish unless there is an upstream deployment source.
- For non-controller contracts, official upstream deployment artefacts are the best currently available machine-readable source outside the docs repo, but they must still be cross-checked on-chain.

### 6. Official upstream deployment artefacts are materially better than docs-local config

The upstream deployment JSON files in `protocol` and `arbitrum-lpt-bridge` are not just loose notes. They include:

- deployed address
- deployment transaction hash
- deployment receipt
- compilation metadata

That means they can be independently cross-checked on-chain.

This is materially different from a docs-local file that declares addresses or contract families without any external attestation.

### 7. Branch handling can be made deterministic

Official repo defaults today are:

- `livepeer/protocol`: `delta`
- `livepeer/governor-scripts`: `master`
- `livepeer/go-livepeer`: `master`
- `livepeer/arbitrum-lpt-bridge`: `main`

Primary source:

- GitHub repo metadata via `gh repo view`

But for controller-managed contracts, default branch should not drive source links at all. The chain `gitCommitHash` is stronger.

For non-controller contracts, the deployment artefact path and the file's upstream commit should drive source resolution, not a branch guess.

### 8. Some contract names need reconciliation rules, not duplication

There are official cases where the same deployed address is used under operational aliases or where the published contract family is not a distinct current address family:

- Ethereum `Minter` current controller slot currently points at the address whose chain commit message is `deployments: Add BridgeMinter for mainnet`
- `AIServiceRegistry` is a standalone `ServiceRegistry` deployment saved under a separate deployment name
- `DelegatorPool` appears in the bridge repo as a deployed implementation/template, not as a single canonical active protocol endpoint

What this means:

- The docs pipeline needs an explicit reconciliation layer after authoritative discovery.
- That reconciliation layer must not declare truth. It must only classify and deduplicate already discovered upstream facts.

### 9. Event reconstruction needs pagination and fail-closed behaviour

Public RPC endpoints can impose range and response-size limits for `eth_getLogs`.

Observed in this research:

- Arbitrum `SetContractInfo` event history was retrievable in a single pass for current scale
- Ethereum current `getContractInfo` calls were fine
- Ethereum historical event retrieval needs chunked pagination across block ranges

That is not a reason to avoid event-based truth. It is a design requirement for the implementation.

## What I Think It Means

The proper architecture is not:

- docs-local allowlist plus chain checks
- human-maintained manifest plus heuristics
- branch scan plus best guess

The proper architecture is a two-track authoritative system with a strict reconciliation boundary.

### Track A: Controller-managed protocol contracts

Source of truth:

- live chain state from `Controller`
- live chain history from `SetContractInfo`

Supporting upstream sources:

- official protocol deploy code for human-readable names and proxy expectations
- official protocol repo commits resolved from chain `gitCommitHash`

This track can and should be chain-first.

### Track B: Non-controller official contracts

Source of truth:

- official upstream generated deployment artefacts from the repo that owns the contract

Required cross-checks:

- on-chain bytecode exists at the published address
- deployment transaction hash creates the same address
- counterpart and ownership relationships match where the contract type supports them
- explorer/source verification is available where possible

This track cannot be pure chain-only because there is no universal on-chain registry for these contracts today.

### Critical architectural boundary

The docs repo may classify and present data after authoritative discovery, but it must not declare contract existence or contract addresses.

That means:

- no docs-owned authority catalogue for truth
- no docs-owned family allowlist that decides what exists
- no docs-owned source path map for current contract resolution

The docs repo can still carry display taxonomy, section labels, and presentation choices after the authoritative inventory exists.

## What I’d Recommend

### Recommended architecture

Build the contracts pipeline in four stages.

#### Stage 0: Upstream source inventory

At run start, fetch official upstream metadata only from:

- `livepeer/protocol`
- `livepeer/governor-scripts`
- `livepeer/go-livepeer`
- `livepeer/arbitrum-lpt-bridge`

Use GitHub repo metadata to discover default branches for repo scans, but do not use default branches as the truth for controller-managed code links.

#### Stage 1: Controller-managed inventory from chain

1. Build a contract-name dictionary by scanning official protocol deploy sources for names passed to:
   - `deployAndRegister`
   - `setContractInfoAction`
   - `contractId(...)`
2. Query both Controllers for:
   - `getContractInfo(id)` for current address and `gitCommitHash`
   - paginated `SetContractInfo` history
3. Construct:
   - current proxy rows from current controller state
   - current implementation rows from target IDs
   - historical rows from older events
4. Fail if the chain exposes an ID that the upstream protocol sources cannot map to a human-readable name.

Why this is the right boundary:

- truth comes from chain
- names come from the official repo that writes to chain
- no docs-local declaration exists in the loop

#### Stage 2: Non-controller inventory from upstream deployment artefacts

Auto-scan official deployment artefact directories such as:

- `livepeer/protocol/deployments/arbitrumMainnet/*.json`
- `livepeer/arbitrum-lpt-bridge/deployments/mainnet/*.json`
- `livepeer/arbitrum-lpt-bridge/deployments/arbitrumMainnet/*.json`

For each candidate:

1. read address, tx hash, receipt, and compilation metadata
2. cross-check on-chain bytecode
3. cross-check the tx receipt creates the same address
4. cross-check counterpart and ownership/controller relationships where applicable
5. classify templates and implementations separately from current user-facing endpoints

Why this is acceptable:

- the deployment artefacts live outside the docs repo
- they are machine-produced deploy outputs with on-chain attestation
- they can be verified independently

#### Stage 3: Reconciliation and classification

Only after stages 1 and 2:

- deduplicate aliases and same-address families
- assign category and lifecycle for presentation
- derive active-only table rows
- derive historical or reference-only rows

This stage may live in the docs repo, but it may not declare addresses or contract existence.

#### Stage 4: Consumer outputs

Generate:

- active-only main table
- optional reference-only historical inventory
- widget active lookup data
- machine-readable verification metadata

### Verification policy

Use a layered verification model.

Required hard checks:

- controller current match
- controller event history reconstruction
- proxy runtime target resolution
- non-controller deployment artefact and receipt match
- on-chain bytecode present

Supplementary checks:

- explorer verified source
- explorer `Contract Creator`
- `Livepeer: Deployer`
- explorer label presence

These explorer signals should never be the only reason a contract is considered correct.

### Branch and code-link policy

For controller-managed contracts:

- source links should be pinned to the exact `livepeer/protocol` commit from chain `gitCommitHash`

For non-controller contracts:

- source links should use upstream deployment metadata or verified explorer source
- if a GitHub file link is generated, it should be pinned to an exact upstream commit, not a floating branch

### Failure policy

The run must fail if any of the following occur:

- unknown controller ID
- controller current address cannot be read
- proxy runtime resolution fails for an active proxy
- upstream deployment artefact cannot be cross-checked on-chain
- same contract family resolves to contradictory current addresses
- current table would include a non-active contract

## What Needs Your Decision

### 1. What to do with non-controller contracts that do not have an upstream generated deployment artefact

What we know:

- Some non-controller contracts already have strong upstream deployment artefacts.
- Pure chain-only discovery is not available for all non-controller contracts.

Options:

1. Publish only controller-managed plus artefact-backed non-controller contracts.
2. Publish controller-managed only until every non-controller family has an acceptable upstream source.

Recommendation:

- Use option 1.

Reason:

- It keeps the page useful without letting docs-local declarations back into the truth path.

### 2. Whether historical contracts should remain public on the main page

What we know:

- Historical state can be reconstructed from controller events.
- The main user need is current active contracts.

Options:

1. Keep historical rows in secondary reference sections or JSON only.
2. Remove historical rows from the main page entirely.

Recommendation:

- Keep them out of the main table and demote them to reference-only output.

### 3. Whether upstream deployment artefacts are acceptable as authoritative non-controller inputs

What we know:

- They are external to the docs repo.
- They are machine-produced and include tx hashes and receipts.
- They are still repo-hosted, so they are not the same as live chain state.

Recommendation:

- Accept them only when they are cross-checked on-chain and treated as attestations, not blindly trusted files.

## Primary Sources Used

- `https://github.com/livepeer/protocol/blob/delta/contracts/Controller.sol`
- `https://github.com/livepeer/protocol/blob/delta/contracts/IController.sol`
- `https://github.com/livepeer/protocol/blob/delta/contracts/ManagerProxy.sol`
- `https://github.com/livepeer/protocol/blob/delta/contracts/ManagerProxyTarget.sol`
- `https://github.com/livepeer/protocol/blob/delta/contracts/Manager.sol`
- `https://github.com/livepeer/protocol/blob/delta/utils/deployer.ts`
- `https://github.com/livepeer/protocol/blob/delta/deploy/deploy_contracts.ts`
- `https://github.com/livepeer/protocol/blob/delta/deploy/deploy_delta_upgrade.ts`
- `https://github.com/livepeer/protocol/blob/delta/deploy/deploy_ai_service_registry.ts`
- `https://github.com/livepeer/protocol/blob/delta/tasks/verify-delta-deployment.ts`
- `https://github.com/livepeer/protocol/tree/delta/deployments/arbitrumMainnet`
- `https://github.com/livepeer/arbitrum-lpt-bridge/tree/main/deployments/mainnet`
- `https://github.com/livepeer/arbitrum-lpt-bridge/tree/main/deployments/arbitrumMainnet`
- `https://github.com/livepeer/go-livepeer/blob/master/eth/client.go`
- `https://github.com/livepeer/go-livepeer/blob/master/cmd/livepeer/starter/starter.go`
- `https://github.com/livepeer/governor-scripts/pull/14`
- `https://github.com/livepeer/governor-scripts/blob/master/test/addresses.js`
- `https://github.com/livepeer/governor-scripts/blob/master/README.md`
