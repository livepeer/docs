# Contract Addresses Pipeline: Recommendation

**Date:** 2026-04-01
**Status:** Recommendation — awaiting decision
**Author:** Wonderland / Documentation Lead
**Audience:** Security Committee, Rick, Rich

---

## Summary

The security committee's recommendation is correct and is supported by the primary source research below. The right architecture is chain-first where the chain can provide truth, and upstream-artefact-first where it cannot. The current docs-side pipeline is disqualified by its own evidence (the authority config file it depends on is marked `NOT CANONICAL, NOT TRUTH, DO NOT USE`). The replacement is a four-layer proof system with three distinct verification paths — one per contract group — because not all Livepeer contracts are Controller-managed and no single on-chain mechanism covers the full population.

Historical contract versions should be dropped from the public docs surface. The security committee's observation — that anyone can derive history from chain events — applies specifically to Controller-registered contracts. For non-Controller contracts, history is available from upstream deployment artefacts. Neither surface is published to the user-facing page.

---

## Stakeholder Feedback: Resolved

**Point 1 — Rely on events, not the repo file.**

Confirmed correct for Controller-registered contracts. `Controller.sol` emits `SetContractInfo(bytes32 id, address contractAddress, bytes20 gitCommitHash)` on every registration change. Live observation on 2026-04-01 returned 38 events from the Arbitrum controller alone. Current state is also directly readable via `getContractInfo(bytes32)` and `getContract(bytes32)`.

Governor-scripts PR #14 — the working example cited — implements exactly this verification direction: it reads `SetContractInfo` event history, compares against the human-maintained `updates/addresses.js`, and fails CI if they diverge. The conclusion from that PR is that Controller events are authoritative and the repo file is the weaker signal. The replacement architecture below inverts that dependency for Controller-managed contracts.

Important scope boundary: `BridgeMinter`, `L1LPTGateway`, `L1Migrator`, `L1Escrow`, `L2LPTGateway`, `AIServiceRegistry`, and `Governor` are not registered in the Controller. Live RPC on 2026-04-01 confirmed `BridgeMinter`, `L1LPTGateway`, and `L1Migrator` returned zero as direct controller keys. No `SetContractInfo` event will ever cover these contracts. They require separate proof chains described in Layer 2 below.

**Point 2 — Remove historical contract versions from the public docs surface.**

Agreed. Historical versions should not appear in the primary user-facing table. The chain can reconstruct full history when needed; the docs page does not need to carry it. The architecture below outputs historical data as a secondary machine-readable artefact only.

---

## Why the Current Pipeline Fails

Three disqualifying conditions exist in the current implementation today.

The primary authority file (`operations/scripts/config/contract-addresses-authority.json`) has been deleted from the working tree. An untracked replacement exists and is explicitly labelled `NOT CANONICAL, NOT TRUTH, DO NOT USE`. The fetch script still reads this path at lines 24 and 203. The current pipeline cannot run correctly.

The public MDX page claims addresses are "sourced from governor-scripts and verified on-chain" and describes governor-scripts as "the only official reference outside the blockchain." Both claims are false under the architecture the security committee is recommending — and under the architecture the chain already supports. Governor-scripts is human-maintained and its own PR #14 proposes using Controller events to verify it, which means it is already acknowledged as the weaker signal.

The ContractVerifier widget treats `hasController` as a per-chain boolean and marks Ethereum Mainnet as controller-less. This is factually incomplete. The Ethereum controller exists at `0xf96d54e490317c557a967abfa5d6e33006be69b3` and on 2026-04-01 returned non-zero current state for `LivepeerToken` and `Minter`. The widget's truth model must be updated.

---

## Recommended Architecture

Four independent layers. Failure in any layer fails the run. No layer's failure is allowed to silently pass through as truth in the next layer.

### Layer 1 — Discovery

Sources that signal a new or changed contract family exists:

- `SetContractInfo` events from both controllers (Arbitrum, Ethereum)
- Full-repo watch on `livepeer/protocol`, `livepeer/arbitrum-lpt-bridge`, `livepeer/governor-scripts`
- Commit diff scanning for new files under `contracts/`, `deploy/`, `deployments/`
- Governor-scripts `updates/addresses.js` changes as a discovery trigger (not as truth)

Branch handling is explicit and mandatory. The watch covers every branch in each upstream repo, not only the default branch. On each scheduled or triggered run the pipeline:

1. Records the current branch inventory for each watched repo
2. Detects any new branch created since the last run — new branches are discovery events that trigger a candidate scan, not automatic publication
3. Detects any default-branch change — a default-branch reassignment is treated as a high-priority anomaly requiring human review before the next publish cycle
4. Scans every new commit on watched branches for contract-introducing changes at `contracts/`, `deploy/`, `deployments/`, and `updates/addresses.js`

A new branch or default-branch change does not publish anything. It creates candidates that must pass full Layer 2 verification and, for Group 3 contracts, a human-review gate before any address enters the output artefact.

Discovery events do not publish anything. They create candidates for Layer 2 verification.

### Layer 2 — Truth and Verification

The contract population splits into three groups. Each has a distinct proof chain. They are peers — not a primary path with fallbacks.

**Group 1 — Controller-registered contracts**

Applies to: `BondingManager`, `TicketBroker`, `RoundsManager`, `ServiceRegistry`, `BondingVotes`, `LivepeerGovernor`, `L2Migrator`, `Minter`, `LivepeerToken`, `Treasury` (Arbitrum and Ethereum where registered).

For each known slot name, hashed to `bytes32`:

1. Call `getContractInfo(bytes32)` → current address + `gitCommitHash`
2. Call `getContract(bytes32)` → current address (cross-check)
3. Slot names sourced from official upstream code (`go-livepeer` `eth/client.go`, protocol deploy scripts, deployment artefact filenames) — not from a docs-local file

Event history handling is chain-specific:

- **Arbitrum:** full `SetContractInfo` event history is available and reliable. Live RPC on 2026-04-01 returned 38 events from the Arbitrum controller. Historical address series is reconstructed from this log.
- **Ethereum:** current state is readable via `getContractInfo`. Historical reconstruction from the current Ethereum controller event log is not yet safe — live RPC on 2026-04-01 returned zero `SetContractInfo` events from multiple public providers on the same controller despite current state being non-zero. L1 historical output is excluded from the artefact until an authoritative event-history source is confirmed. L1 current state is included.

For every address in this group that is a `ManagerProxy`:

1. Call `controller()` → controller address
2. Call `targetContractId()` → target slot id
3. Call `controller.getContract(targetContractId)` → current implementation address

Live examples verified 2026-04-01: `BondingManager`, `TicketBroker`, `RoundsManager`, `ServiceRegistry`, `BondingVotes`, `LivepeerGovernor` — all fully resolvable on-chain.

If an event id appears with no official upstream name mapping, the run fails.

**Group 2 — Non-Controller bridge cluster**

Applies to: `BridgeMinter`, `L1LPTGateway`, `L1Migrator`, `L1Escrow`, `L2LPTGateway`.

These are not registered in the Controller. No `SetContractInfo` event covers them. Live RPC on 2026-04-01 confirmed zero controller keys for `BridgeMinter`, `L1LPTGateway`, and `L1Migrator`.

Discovery: official upstream deployment artefacts in `livepeer/arbitrum-lpt-bridge` (`deployments/mainnet/` and `deployments/arbitrumMainnet/`).

Verification: on-chain getter graph traversed from the known `BridgeMinter` address:

- `BridgeMinter.l1LPTGatewayAddr()` → must match `L1LPTGateway` artefact address
- `BridgeMinter.l1MigratorAddr()` → must match `L1Migrator` artefact address
- `L1LPTGateway.l1LPTEscrow()` → must match `L1Escrow` artefact address
- `L1LPTGateway.l2Counterpart()` → must match `L2LPTGateway` artefact address
- `L2LPTGateway.l1Counterpart()` → must equal `L1LPTGateway` address (back-reference)

The getter graph is self-confirming: if all cross-references resolve consistently against the upstream deployment artefacts, the cluster is verified. Any mismatch is a blocking failure. The seed address for `BridgeMinter` comes from the Ethereum controller `Minter` slot (Group 1), making the two groups explicitly linked.

**Group 3 — Fully detached contracts**

Applies to: `AIServiceRegistry`, `Governor`.

`Governor` here is a standalone contract distinct from the Controller-registered `LivepeerGovernor` proxy in Group 1. The two are separate contract families; `Governor` has no Controller slot and is not part of the proxy pattern.

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

If the commit does not resolve to any official upstream repo, the run fails. Explorer verified source is recorded as a supplementary field but does not substitute for repo provenance — an unresolved commit is a blocking failure, not a downgrade.

**Group 2 — Non-Controller bridge cluster:**

1. Use the deployment artefact from `livepeer/arbitrum-lpt-bridge` as the primary source-path anchor
2. Read `metadata.settings.compilationTarget` from the artefact
3. Build a commit-specific GitHub source link using the artefact's recorded transaction block and deployer for further confirmation

**Group 3 — Fully detached contracts:**

1. Use the deployment artefact from the relevant upstream repo (`livepeer/protocol` for AIServiceRegistry)
2. Confirm source path via artefact `compilationTarget`
3. Cross-reference explorer verified source

Branch-based links are a secondary convenience in all groups. Branch ownership is ambiguous — `livepeer/protocol` has active contracts across `delta`, `confluence`, `streamflow`, and `master`. Commit hashes resolve this ambiguity; branch names do not.

### Layer 4 — Presentation

The docs repo owns only this layer.

**Output surface rules — mandatory:**

- The primary user-facing table contains active contracts only. No superseded, deprecated, or historical addresses appear in the main table.
- Non-active contracts are written to a secondary machine-readable output in the generated JSON artefact. They are not rendered on the public page.
- The ContractVerifier widget reads the active-only surface. It does not consume the historical or non-active output.
- Lifecycle classification (active vs. non-active) is determined by the pipeline from chain state and artefact evidence, not declared in any docs-local file.

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
- lifecycle status

The GitHub Action writes the output of Layers 1–3 into the docs repo as a generated JSON artefact. The MDX page and widget read from that artefact. The pipeline does not read a docs-authored truth file at any point.

---

## GitHub Action Design

The workflow runs on two triggers:

1. Scheduled — daily or every 6 hours
2. Push to watched upstream repos — `livepeer/protocol`, `livepeer/arbitrum-lpt-bridge`, `livepeer/governor-scripts` (via `repository_dispatch` or polling)

The action:

1. Extracts known slot names from official upstream code
2. Calls live RPC for current controller state on both chains (Group 1)
3. Resolves proxy implementations from live proxy runtime (Group 1)
4. Reads upstream deployment artefacts for bridge cluster and cross-verifies via on-chain getter graph (Group 2)
5. Reads upstream deployment artefacts for detached contracts and confirms via explorer and runtime consumers (Group 3)
6. Resolves source provenance via `gitCommitHash` and deployment artefacts across all groups
7. Runs all blocking failure checks
8. If all pass, writes the generated JSON artefact and opens a PR (or auto-merges on clean pass with no address changes)
9. If any check fails, exits non-zero, writes an anomaly report, and does not update the docs

**Blocking failures — the run must not succeed if any of these are true:**

- A controller slot resolves to an unknown id with no official upstream name
- A proxy has no runtime-resolvable implementation
- A `gitCommitHash` from `getContractInfo` cannot be resolved to any official upstream repo
- A bridge getter cross-reference does not match the corresponding upstream deployment artefact address
- The `L2LPTGateway.l1Counterpart()` back-reference does not equal the independently derived `L1LPTGateway` address
- A Group 3 deployment artefact address differs from what the official runtime consumer (`go-livepeer`) records — requires human review before publish
- Any active contract address in the outgoing JSON was sourced from a docs-local file
- An active contract has no confirmed bytecode on-chain
- The same contract family resolves to multiple current entrypoints on one chain
- A new branch or default-branch change is detected in a watched upstream repo and has not been assessed — the run halts and emits a branch-change anomaly report pending human review

The action emits a structured anomaly report on failure. It does not silently fall back to prior state.

---

## Governor-Scripts: Retained Role

Governor-scripts remains in the pipeline for Group 1 contracts, but its role is narrowed.

It is: a discovery trigger, a drift detector, and a comparison input for Controller-registered contracts.
It is not: an address truth source, a canonical slot registry, a publication authority, or a verification surface for Group 2 or Group 3 contracts.

When `updates/addresses.js` changes, the action re-runs Group 1 verification against Controller state. If governor-scripts lists an address that contradicts live Controller state, that is a blocking failure. If it lists an address not yet confirmed by a `SetContractInfo` event, that is surfaced as an anomaly requiring human review, not silently accepted.

---

## Historical Contracts: Decision

Per the security committee's recommendation, historical contract versions are removed from the primary user-facing table.

**Group 1 — Controller-registered contracts:** Arbitrum `SetContractInfo` event history is captured in the generated JSON artefact for machine use, not published to the user-facing page. Ethereum historical data is excluded from the artefact until an authoritative event-history source is confirmed — see the chain-specific caveat in Layer 2 above.

**Group 2 — Bridge cluster:** Historical versions are not recoverable from chain events. Upstream deployment artefacts in `livepeer/arbitrum-lpt-bridge` are the record. Not published to the user-facing page.

**Group 3 — Detached contracts:** Deployment artefacts are the only history record. Not published to the user-facing page.

---

## Open Decisions

Two decisions remain before implementation begins.

**1. RPC provider strategy**

The action needs reliable RPC access to Arbitrum One and Ethereum Mainnet. Public providers are sufficient for development but should not be the sole provider in production CI. Decision needed: Alchemy/Infura project key in CI secrets, or a Livepeer-operated node endpoint.

**2. Upstream machine-readable slot registry**

The action can extract slot names from `go-livepeer` source code today, but this is a fragile scrape. An official machine-readable slot registry in `livepeer/protocol` or `livepeer/governor-scripts` would remove the ambiguity entirely and make unknown-slot detection cleaner. This is a recommendation to raise with the protocol team, not a blocker for the docs pipeline.

---

## What Changes in the Docs

Three things change in the docs repo as a result of this architecture.

The authority config file (`operations/scripts/config/contract-addresses-authority.json` and its replacement) is deleted permanently. It does not exist in any form in the new pipeline.

The MDX page copy is rewritten to accurately describe chain-first verification, commit-anchored source links, and the removal of historical versions from the public surface.

The ContractVerifier widget's `hasController` boolean model is replaced with per-chain slot-aware semantics. Both Ethereum and Arbitrum controllers are live and must be treated as such.

---

## References

- `contracts-canonical-architecture-research-2026-04-01.md` — primary source research, RPC observations, upstream source map
- `contracts-primary-source-replacement-architecture-2026-04-01.md` — architecture design and blocking failure rules
- `livepeer/governor-scripts` PR #14 — the event-based verification pattern the security committee referenced
- `livepeer/protocol` `confluence/tasks/verify-protocol.ts` — existing upstream verification pattern; the docs pipeline mirrors this approach
