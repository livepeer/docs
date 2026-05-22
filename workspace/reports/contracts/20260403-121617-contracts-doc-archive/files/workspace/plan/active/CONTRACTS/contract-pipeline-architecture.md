The right architecture is chain-first where the chain can provide truth, and upstream-artefact-first where it cannot. The current docs-side pipeline is disqualified by its own evidence (the authority config file it depends on is marked NOT CANONICAL, NOT TRUTH, DO NOT USE). The replacement is a four-layer proof system with three distinct verification paths, one per contract group, because not all Livepeer contracts are Controller-managed and no single on-chain mechanism covers the full population. It also needs an explicit output contract: active contracts only on the main public surface, current implementations published separately, and non-active data clearly secondary.

## Recommended Architecture

Four independent layers. Failure in any layer fails the run. No layer's failure is allowed to silently pass through as truth in the next layer.

### Layer 1 — Discovery

Sources that signal a new or changed contract family exists:

- SetContractInfo events from both controllers (Arbitrum, Ethereum)
- Full-repo watch on livepeer/protocol, livepeer/arbitrum-lpt-bridge, livepeer/go-livepeer, livepeer/governor-scripts
- Branch-inventory watch and default-branch-change watch across the same official repos
- Commit diff scanning for new or changed files under contracts/, deploy/, deployments/, tasks/, cmd/livepeer/, and eth/
- Governor-scripts updates/addresses.js changes as a discovery trigger (not as truth)

Discovery events do not publish anything. They create candidates for Layer 2 verification. New branches and default-branch changes are discovery and anomaly signals only. They expand the provenance search space, but they do not become truth by themselves and they do not justify branch guessing.

### Layer 2 — Truth and Verification

The contract population splits into three groups. Each has a distinct proof chain. They are peers — not a primary path with fallbacks.

**Group 1 — Controller-registered contracts**

Applies to current controller-registered protocol, governance, and bridge-support families such as `BondingManager`, `TicketBroker`, `RoundsManager`, `ServiceRegistry`, `BondingVotes`, `LivepeerGovernor`, `Treasury`, `L2Migrator`, `Minter`, `LivepeerToken`, and `L2LPTDataCache` (Arbitrum and Ethereum where registered).

For each known slot name, hashed to `bytes32`:

1. Call `getContractInfo(bytes32)` → current address + `gitCommitHash`
2. Call `getContract(bytes32)` → current address (cross-check)
3. Read full Arbitrum `SetContractInfo` event history → historical address series where authoritative
4. On Ethereum, use current controller state for current truth, but do not publish historical controller history unless another authoritative historical source is confirmed
5. Slot names sourced from official upstream code (`go-livepeer` `eth/client.go`, protocol deploy scripts, deployment artefact filenames) — not from a docs-local file

For every address in this group that is a `ManagerProxy`:

1. Call `controller()` → controller address
2. Call `targetContractId()` → target slot id
3. Call `controller.getContract(targetContractId)` → current implementation address

Representative live examples verified 2026-04-01 include `BondingManager`, `TicketBroker`, `RoundsManager`, `ServiceRegistry`, `BondingVotes`, and `LivepeerGovernor` — all fully resolvable on-chain.

If an event id appears with no official upstream name mapping, the run fails.

**Group 2 — Non-Controller bridge cluster**

Applies to non-controller bridge-cluster families such as `BridgeMinter`, `L1LPTGateway`, `L1Migrator`, `L1Escrow`, `L2LPTGateway`, and `L1LPTDataCache`.

These do not have a dedicated current-truth path through named Controller slots. Live RPC on 2026-04-01 confirmed zero direct controller keys for `BridgeMinter`, `L1LPTGateway`, and `L1Migrator`.

Discovery: official upstream deployment artefacts in `livepeer/arbitrum-lpt-bridge` (`deployments/mainnet/` and `deployments/arbitrumMainnet/`).

Verification: on-chain getter graph traversed from the known `BridgeMinter` address:

- `BridgeMinter.l1LPTGatewayAddr()` → must match `L1LPTGateway` artefact address
- `BridgeMinter.l1MigratorAddr()` → must match `L1Migrator` artefact address
- `L1LPTGateway.l1LPTEscrow()` → must match `L1Escrow` artefact address
- `L1LPTGateway.l2Counterpart()` → must match `L2LPTGateway` artefact address
- `L2LPTGateway.l1Counterpart()` → must equal `L1LPTGateway` address (back-reference)

The getter graph is self-confirming: if all cross-references resolve consistently against the upstream deployment artefacts, the cluster is verified. Any mismatch is a blocking failure. The seed address for `BridgeMinter` comes from the Ethereum controller `Minter` slot (Group 1), making the two groups explicitly linked. Bridge support contracts that are not public entrypoints, such as `L1LPTDataCache`, can still be published as secondary inventory if they satisfy this proof chain, but they do not belong in the active main table unless the product intentionally treats them as active user-facing contracts.

**Group 3 — Fully detached contracts**

Applies to detached non-controller families such as `AIServiceRegistry` and any standalone `Governor` family deployment that has no current Controller slot and no bridge getter path.

No Controller slot. No getter graph points to them. Discovery and current-state truth are entirely upstream-artefact-based.

For each contract:

1. Official upstream deployment artefact provides the address (`livepeer/protocol` `delta` branch for AIServiceRegistry)
2. Official runtime consumer confirms the same address (`go-livepeer` hardcodes AIServiceRegistry when `-aiServiceRegistry` is enabled)
3. Explorer confirms: bytecode present, source verified, deployer is the Livepeer Deployer address

No chain event can independently confirm a new deployment of these contracts. A new deployment in a watched upstream artefact triggers a human-review gate before the pipeline publishes the new address.

**Supplementary identity signals (applicable across all groups, not sufficient alone):**

- Explorer contract creator address
- `Livepeer: Deployer` public label on Etherscan/Arbiscan
- Explorer verified source

These confirm Livepeer identity. They are recorded as metadata fields. They do not determine address truth in any group.

### Layer 3 — Source-Code Provenance

**Group 1 — Controller-registered contracts:**

1. Use `gitCommitHash` from `getContractInfo()` as the primary anchor
2. Resolve which official repo contains that commit (`livepeer/protocol`, `livepeer/arbitrum-lpt-bridge`)
3. Read `metadata.settings.compilationTarget` from the deployment artefact at that commit
4. Build a commit-specific GitHub source link

If the commit cannot be resolved to an official upstream repo and compilation target, fail the row. Explorer verified source can be recorded as supplementary evidence, but it must not replace canonical provenance.

**Group 2 — Non-Controller bridge cluster:**

1. Use the official deployment artefact from `livepeer/arbitrum-lpt-bridge` as the primary source-path anchor
2. Read `metadata.settings.compilationTarget` from the artefact
3. Resolve the exact upstream commit that introduced or currently owns the active artefact path in the watched repo history
4. Build a commit-specific GitHub source link

If exact upstream artefact provenance cannot be resolved, fail the row.

**Group 3 — Fully detached contracts:**

1. Use the deployment artefact from the relevant upstream repo (`livepeer/protocol` for AIServiceRegistry)
2. Confirm source path via artefact `compilationTarget`
3. Resolve the exact upstream commit for the artefact or official runtime consumer that proves current usage
4. Cross-reference explorer verified source as supplementary evidence

If the upstream artefact or runtime-consumer provenance cannot be resolved to an official repo and exact path, fail the row.

Branch-based links are a secondary convenience in all groups. Branch ownership is ambiguous — `livepeer/protocol` has active contracts across `delta`, `confluence`, `streamflow`, and `master`. Commit hashes resolve this ambiguity; branch names do not.

### Layer 4 — Presentation

The docs repo owns only this layer.

Allowed in docs-local config:

- display category
- display order
- section placement
- short explanatory copy

Not allowed in docs-local config:

- contract addresses
- controller slot assignments
- repo or branch truth
- implementation addresses
- current vs. historical classification

The GitHub Action writes the output of Layers 1–3 into the docs repo as a generated JSON artefact. The MDX page and widget read from that artefact. The pipeline does not read a docs-authored truth file at any point.

Presentation rules:

- The main searchable contracts table is active-only
- Current implementation addresses publish in a separate implementation surface, not merged into active entrypoints
- Paused, migration-residual, legacy-operational, and historical contracts remain secondary
- Widget lookup is built from active contracts only
- Widget pasted-address mode may inspect broader inventory, but it must label lifecycle explicitly
- Cross-chain duplicate names must return all active matches, not first-match collapse

---

## GitHub Action Design

The workflow runs on three trigger classes:

1. Scheduled — daily or every 6 hours
2. Manual dispatch for forced verification runs
3. Changes in watched upstream repos — `livepeer/protocol`, `livepeer/arbitrum-lpt-bridge`, `livepeer/go-livepeer`, `livepeer/governor-scripts` (via `repository_dispatch` or polling), including branch-inventory changes and default-branch changes

The action:

1. Refreshes watched repo inventory, including branch inventory and default-branch metadata
2. Extracts known slot names from official upstream code and official deployment artefact naming
3. Calls live RPC for current controller state on both chains (Group 1)
4. Resolves proxy implementations from live proxy runtime (Group 1)
5. Reads upstream deployment artefacts for bridge cluster and cross-verifies via on-chain getter graph (Group 2)
6. Reads upstream deployment artefacts for detached contracts and confirms via explorer and runtime consumers (Group 3)
7. Resolves source provenance via `gitCommitHash`, deployment artefacts, and exact upstream commit resolution across all groups
8. Classifies lifecycle and validates the active-only publish surface
9. Runs all blocking failure checks
10. If all pass, writes the generated JSON artefact and opens a PR (or auto-merges on clean pass with no address changes)
11. If any check fails, exits non-zero, writes an anomaly report, and does not update the docs

**Blocking failures — the run must not succeed if any of these are true:**

- A controller slot resolves to an unknown id with no official upstream name
- A proxy has no runtime-resolvable implementation
- A `gitCommitHash` from `getContractInfo` cannot be resolved to any official upstream repo
- A watched repo branch or default-branch change affects provenance resolution and no exact official commit/path can be resolved for the affected row
- A bridge getter cross-reference does not match the corresponding upstream deployment artefact address
- The `L2LPTGateway.l1Counterpart()` back-reference does not equal the independently derived `L1LPTGateway` address
- A Group 3 deployment artefact address differs from what the official runtime consumer (`go-livepeer`) records — requires human review before publish
- Any active contract address in the outgoing JSON was sourced from a docs-local file
- An active contract has no confirmed bytecode on-chain
- A paused, migration-residual, legacy-operational, or historical row would enter the active main table or widget lookup surface
- The same contract family resolves to multiple current entrypoints on one chain

The action emits a structured anomaly report on failure. It does not silently fall back to prior state.

---

## Governor-Scripts: Retained Role

Governor-scripts remains in the pipeline for Group 1 contracts, but its role is narrowed.

It is: a discovery trigger, a drift detector, and a comparison input for Controller-registered contracts.
It is not: an address truth source, a canonical slot registry, a publication authority, or a verification surface for Group 2 or Group 3 contracts.

When `updates/addresses.js` changes, the action re-runs Group 1 verification against Controller state. If governor-scripts lists an address that contradicts live Controller state, that is a blocking failure. If it lists an address not yet confirmed by a Controller read, bridge getter graph, or other group-appropriate proof chain, that is surfaced as an anomaly requiring human review, not silently accepted.

---
