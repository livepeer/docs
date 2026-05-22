# Contracts Pipeline Requirements

Checked: 2026-04-01
Mode: report-only
Scope: session requirements, current docs surfaces, current workflow, prior audit evidence, and primary-source research inputs

## Non-negotiable Requirements

### 1. Data correctness comes first

- Published contract data must be verifiably correct before it is usable.
- The main searchable table must include only active contracts.
- Historical or superseded contracts must not be treated as current.
- Links, explorer targets, source links, and explanatory copy must all be correct.

### 2. No docs-owned truth files

- No repo-local docs-owned file may act as canonical address truth.
- Docs pages must consume upstream truth and verification outputs. They must not feed the pipeline.
- Local docs metadata may only describe presentation policy after authoritative inventory has already been built.

### 3. Human-maintained manifests are not sufficient on their own

- `governor-scripts/updates/addresses.js` can only be used if independently checked against authoritative chain state.
- Any other human-maintained repo file is support material, not publishable truth.
- A bad or delayed human update must fail the pipeline, not silently publish.

### 4. Architecture must start from canonical data down

- Controller-managed protocol contracts must be derived from on-chain Controller state and Controller events.
- Proxy contracts must be verified through live proxy runtime, not naming conventions.
- Non-controller contracts must come from an authoritative upstream source outside the docs repo and must be cross-checked on-chain.

### 5. Multi-repo and multi-branch handling is required

- Contracts are spread across multiple official repos.
- The pipeline must not guess branches from naming patterns.
- It must always know how to resolve the latest official source from upstream repo metadata, exact commit hashes, or upstream deployment artefacts.
- Repo and branch scans should be used for discovery and anomaly detection, not as the primary address truth source.

### 6. The widget pipeline is in scope

- The `ContractVerifier` widget is part of the contracts system.
- Widget lookup options must be active-only.
- If an active contract name exists on multiple chains, lookup must return all active matches, not only one chain.
- Widget verification language must not overstate what is proven.

### 7. Presentation constraints remain

- Existing MDX page styling is to be preserved.
- Content and data wiring can change, but styling and layout patterns should not be redesigned as part of the contracts fix.
- Page copy must follow repo writing rules when later updated, including UK English and no em dashes.

## Source And Verification Requirements

### 8. Controller-managed contracts

- Current addresses must come from `Controller.getContractInfo()` or `Controller.getContract()`.
- Historical addresses must come from `SetContractInfo` event history.
- Current code provenance should use the `gitCommitHash` stored in `Controller` and emitted in `SetContractInfo`.
- Unknown controller IDs must fail the run.

### 9. Proxy runtime verification

- Every active proxy must be checked via:
  - `controller()`
  - `targetContractId()`
  - `controller.getContract(targetContractId)`
- The resolved target address must match the expected current implementation.
- Proxy verification must not depend on explorer proxy hints alone.

### 10. Non-controller official contracts

- Non-controller contracts cannot be invented in docs-local config.
- They must come from authoritative upstream deployment outputs or another upstream source that is external to the docs repo.
- Each published non-controller address must be cross-checked with on-chain bytecode and deployment receipt data.
- Contracts without an authoritative upstream source must not be published as canonical.

### 11. Explorer evidence is supplementary

- Explorer labels such as `Livepeer`, `Contract Creator`, and `Livepeer: Deployer` are useful evidence.
- They are not sufficient as canonical truth.
- They should be recorded as supporting verification signals, not as the main source of address correctness.

### 12. Code-source links must be pinned

- Branch guessing is not acceptable for code links.
- Controller-managed code links should be pinned to the exact protocol commit from chain `gitCommitHash`.
- Non-controller code links should use exact upstream deployment source metadata or explorer verified source, not floating branch guesses.

## Output Requirements

### 13. Public data contract

- Generated data must distinguish:
  - active current contracts
  - historical contracts
  - paused or legacy contracts
  - current proxy implementations
- Current and historical state must be derived from authoritative evidence, not key-shape heuristics such as `V2` naming.

### 14. Main page and protocol page

- The canonical contracts page must render an active-only main table.
- Any historical or reference inventory must be secondary.
- Consumer pages such as `blockchain-contracts.mdx` must not resolve by first name match across mixed current and historical rows.

### 15. Link correctness

- Explorer address links must resolve correctly.
- GitHub source links must resolve correctly.
- Route links must resolve to the correct v2 canonical page, not to v1.

## Operational Requirements

### 16. Workflow safety

- A repo dispatch or cron run can trigger the update, but the trigger is not a truth source.
- Unknown controller IDs, unresolved current addresses, broken source links, malformed explorer links, and contradictory proxy state must fail the run.
- The pipeline must not stage or rewrite unrelated docs content as part of a contracts refresh.

### 17. Reproducibility

- The research and generator flow must be reproducible locally with documented auth and RPC requirements.
- A run that cannot access required upstream truth should fail loudly, not degrade silently.

## Ship Gates

The contracts system should not be considered shippable unless all of the following are true:

1. No docs-owned file is used as contract truth.
2. Every active controller-managed contract is derived from live chain state.
3. Every active proxy resolves to its current implementation on-chain.
4. Every published non-controller contract comes from an upstream authoritative deployment source and passes on-chain cross-checks.
5. Main table output is active-only.
6. Widget lookup is active-only and multi-chain safe.
7. Unknown controller IDs or unresolved official contracts fail the run.
8. Code links are pinned to exact commits or verified source, not floating branches.

## Hard Rejects

The following patterns do not meet the acceptance bar:

- Docs-owned allowlists or authority files that declare what contracts exist
- Blind trust in `governor-scripts/updates/addresses.js`
- Branch guessing for source links
- Version inference from naming patterns like `nameV2`
- Publishing current and historical rows from the same semantic bucket
- Using explorer labels alone as proof of correctness
