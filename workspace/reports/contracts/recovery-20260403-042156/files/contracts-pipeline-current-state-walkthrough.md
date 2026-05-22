# Contracts Pipeline Current-State Walkthrough

This file is a step-by-step walkthrough of what the current repo does, in order, from the moment the cron fires.

Scope:

- `.github/workflows/update-contract-addresses.yml`
- `.github/workflows/update-contract-addresses-shadow.yml`
- `.github/scripts/fetch-contract-addresses.js`
- `operations/scripts/automations/content/data/contracts/pipeline.js`
- generated outputs under `snippets/data/contract-addresses/`

This is current-state documentation, not target-state design.

## A. Main scheduled workflow path

### Layer 1: GitHub Actions scheduler

1. GitHub Actions fires `.github/workflows/update-contract-addresses.yml` on the current cron schedule:
   - `0 2 * * *`
2. Because the run came from `schedule`, there are no manual `workflow_dispatch` inputs attached to the event payload.

### Layer 2: Workflow bootstrap

3. The `update-contracts` job starts on `ubuntu-latest`.
4. The job requests:
   - `contents: write`
   - `issues: write`
5. The workflow checks out the docs repo with:
   - `actions/checkout@v4`
   - `token: ${{ secrets.GITHUB_TOKEN }}`
   - `ref: ${{ inputs.use_test_branch == 'true' && vars.TEST_BRANCH || vars.DEPLOY_BRANCH }}`
6. The workflow installs Node.js `20` with `actions/setup-node@v4`.
7. The workflow installs pipeline dependencies with:
   - `npm ci --prefix operations`

### Layer 3: CLI entrypoint

8. The workflow builds the CLI flags string.
9. On a scheduled run, the current workflow sends no `dry_run` input and no `skip_verify` input, so the effective command is:

```bash
node .github/scripts/fetch-contract-addresses.js
```

10. `.github/scripts/fetch-contract-addresses.js` parses CLI flags:
    - `dryRun = false`
    - `check = false`
    - `skipVerify = false`
11. The entrypoint calls:

```js
runContractsPipeline({ dryRun: false, check: false, skipVerify: false })
```

### Layer 4: Pipeline bootstrap

12. `runContractsPipeline()` computes:
    - `dryRun = false`
    - `check = false`
    - `skipVerify = false`
    - `noWrite = false`
13. It builds the deployment catalog with `buildContractProofCatalog()`.
14. It fetches `livepeer/governor-scripts/updates/addresses.js` with `fetchGovernorAddresses()`.
15. `fetchGovernorAddresses()`:
    - calls the GitHub contents API first
    - falls back to `gh api` if needed
    - parses `const ADDRESSES = {...}` from the file body
    - extracts the file SHA and stores the short SHA on `addresses._sha`
16. The pipeline loads the previous generated contracts payload with `loadPreviousGeneratedContracts()`.
17. It looks for previous data in this order:
    - `snippets/data/contract-addresses/contractAddressesData.json`
    - `snippets/data/contract-addresses/contractAddressesData.jsx`

### Layer 5: Branch-watch inventory

18. The pipeline loads the previous branch-watch snapshot with `loadBranchWatchState()`.
19. It builds a new `nextBranchState` object with `generatedAt` plus one repo record per watched repo.
20. For each watched repo, `fetchRepoInventory()`:
    - fetches repo metadata
    - fetches up to 100 branch names
    - records `repo`, `role`, `defaultBranch`, and `branches`
21. The current watched repos are:
    - `livepeer/protocol`
    - `livepeer/arbitrum-lpt-bridge`
    - `livepeer/go-livepeer`
    - `livepeer/governor-scripts`
22. The pipeline diffs the previous and new branch inventories with `diffBranchWatchState()`.
23. Current behavior:
    - new repos, default-branch changes, new branches, and missing branches become branch diffs
    - branch diffs are warnings later, not blocking failures

### Layer 6: Deployment resolution

24. The pipeline loops over every deployment definition in `catalog.deployments`.
25. For each definition, it calls `resolveDeployment(definition, addresses)`.
26. `resolveDeployment()` first chooses the governor chain:
    - `arbitrumMainnet` keys for `arbitrumOne`
    - `mainnet` keys for `ethereumMainnet`
27. It optionally resolves a deployment artifact with `resolveDeploymentArtifact()`.
28. It then resolves the address source according to the definition's `addressStrategy.kind`.

#### Current address strategy behavior

29. `controller-root`
    - returns the hardcoded controller address from `CONTROLLERS`
30. `controller-slot`
    - calls `resolveControllerSlotAddress()`
    - which calls `eth_call` against the chain controller using `getContract(bytes32)`
31. `governor-manifest`
    - resolves the value directly from `governor-scripts` addresses
32. `deployment-artifact`
    - resolves the upstream artifact file
    - uses the artifact's address field as the source address
33. `repo-search`
    - searches watched repos for matching address literals

#### Current provenance behavior during resolution

34. After the address resolves, `resolveDeployment()` resolves the configured code source with `resolveCodeSource()`.
35. `resolveCodeSource()` calls `resolveRepoPath()`.
36. `resolveRepoPath()`:
    - resolves the branch head commit
    - resolves the file through GitHub contents
    - builds a commit-pinned blob URL when possible
37. If the configured code path does not resolve but an artifact exposes `compilationPath`, the pipeline retries code-source resolution with the artifact compilation path.
38. If the definition requires runtime corroboration, `resolveRuntimeConsumerEvidence()` searches or resolves the consumer file and checks for the resolved address literal.

### Layer 7: Base publishable rows

39. The resolution result is passed into `buildBaseEntry()`.
40. `buildBaseEntry()` builds a normalized base row with:
    - id
    - canonical name
    - address
    - type / deploymentKind
    - category
    - lifecycle
    - chain
    - proofChain
    - addressAuthority
    - runtimeAuthority
    - repoSrc
    - contractCodeHref
    - blockchainHref
    - metadata placeholders for verification and provenance
41. These base rows are collected into `resolutions`.
42. The pipeline splits them into:
    - `byChain.arbitrumOne`
    - `byChain.ethereumMainnet`

### Layer 8: Explorer bytecode verification

43. The pipeline runs `verifyAddresses()` on each chain's base rows.
44. Because `skipVerify = false`, this function runs.
45. `verifyAddresses()` loops over every row with an address.
46. For each row it calls:
    - `https://api.arbiscan.io/api?module=proxy&action=eth_getCode...` for Arbitrum
    - `https://api.etherscan.io/api?module=proxy&action=eth_getCode...` for Ethereum
47. It sets:
    - `hasBytecode`
    - `verifiedAt`
    - `verifiedAtISO`
48. It does not resolve source code here. It only checks deployed bytecode presence.

### Layer 9: Metadata enrichment

49. The pipeline runs `enrichMetadata()` on each chain's verified rows.
50. For each address row, `enrichMetadata()` may call `enrichFromBlockscout()`.
51. `enrichFromBlockscout()` reads:
    - creator address
    - Blockscout label
    - Blockscout verified flag
    - contract status
    - balance
    - compiler version
    - proxy indicator
52. `enrichMetadata()` writes those values into `entry.meta`.
53. It also sets `sourceVerified` from the Blockscout verified flag when available.
54. If the row uses controller runtime authority and has a controller slot, it re-runs `resolveControllerSlotAddress()` and records:
    - `controllerResolvedAddress`
    - `registrationState`
    - `registeredInController`
55. If the row is a proxy, it runs `resolveProxyRuntimeVerification()`.
56. `resolveProxyRuntimeVerification()`:
    - calls `controller()` on the proxy
    - calls `targetContractId()` on the proxy
    - calls `getContract(bytes32)` on the controller for that target id
57. The proxy verification results are written into proxy-related metadata fields.
58. Finally, `verified` is set from `sourceVerified`.

### Layer 10: Implementation rows

59. The pipeline builds current implementation rows with `buildImplementationEntries()`.
60. For proxy families, implementation addresses come from one of two paths:
    - proxy runtime metadata (`proxy-meta`)
    - `governor-scripts` versioned authority (`governor-versioned-latest`)
61. Implementation rows are emitted as:
    - `type: target`
    - `deploymentKind: target`
    - `lifecycle: historical`
    - `meta.currentImplementation: true`
62. The pipeline runs `verifyAddresses()` again on those implementation rows.

### Layer 11: Historical shaping

63. The pipeline builds historical artifacts separately for each chain using `buildHistoricalArtifacts()`.
64. `buildHistoricalArtifacts()` first bootstraps a historical series map from:
    - the previous generated chain payload
    - current lifecycle rows
    - current implementation rows
65. It then merges in rows whose lifecycle is already `historical`.
66. It finalizes per-series replacement status and ordering with:
    - `finalizeHistoricalSeriesMap()`
    - `flattenHistoricalSeries()`
67. Current important fact:
    - `runContractsPipeline()` does not call `fetchControllerSetContractInfoLogs()`
    - `runContractsPipeline()` does not call `buildHistoricalEntriesFromEventLogs()`
68. So the live scheduled path does not reconstruct controller history from live event logs during the run.

### Layer 12: Final chain payload assembly

69. The pipeline builds the final chain payloads with `buildChainPayload()`.
70. `buildChainPayload()` decorates rows with:
    - controller verification block
    - bridge verification block
    - runtime-consumer verification block
    - proxy verification block
    - explorer profile
71. Each chain payload then exposes:
    - `inventory`
    - `current`
    - `active`
    - `paused`
    - `migration_residual`
    - `legacy_operational`
    - `historical`
    - `historicalSeries`
    - `currentImplementations`
72. `current` is currently an alias of `active`.

### Layer 13: Blockchain companion build

73. The pipeline builds the blockchain-page companion with `buildBlockchainContractsPageData()`.
74. For each contract spec in `BLOCKCHAIN_CONTRACT_PAGE_SPEC.contracts`, it:
    - looks up the matching published registry row
    - looks up the matching implementation row for proxies
    - resolves source code for parsing
    - parses Solidity functions through `extractContractMetadata()`
    - builds facts and current/proxy/target fields
75. The final blockchain payload currently exposes:
    - `meta`
    - `sections`
    - `contracts`

### Layer 14: Validation report

76. The pipeline builds its validation report with `buildValidationReport()`.
77. Blocking failures currently include:
    - unresolved addresses
    - unsupported lifecycle values
    - missing commit-pinned provenance
    - missing resolved source paths
    - artifact address mismatches
    - required runtime-consumer mismatches
    - active target rows leaking into the public surface
    - controller mismatches
    - proxy rows missing implementation addresses
    - explorer-link problems
    - archived changelog references
78. Branch diffs become warnings only.

### Layer 15: Health artifact write

79. The pipeline writes `_health-checks.json` with `writeHealthChecks()`.
80. This happens before the failure gate throws.
81. On a clean run, the current file can contain an empty `checks` array.

### Layer 16: Failure path

82. If `validation.failures.length > 0`, the pipeline:
    - writes incident artifacts with `writeIncidentArtifacts()`
    - builds:
      - anomaly JSON
      - anomaly markdown
      - GitHub issue payload JSON
    - throws an error with `error.failures`
83. The workflow later uses that payload to create or update a GitHub issue.

### Layer 17: Success path

84. If there are no blocking failures, the pipeline writes data files with `writeDataFiles()`.
85. In a scheduled main run, `dryRun = false` and `check = false`, so it writes:
    - `contractAddressesData.jsx`
    - `contractAddressesData.json`
    - `blockchainContractsPageData.jsx`
    - `blockchainContractsPageData.json`
86. It then writes `_branch-watch-state.json` with `writeBranchWatchState()`.
87. The function returns:
    - `payload`
    - `blockchainContractsPageData`
    - `branchWatch`
    - `warnings`
    - `sourceCommit`

### Layer 18: Post-pipeline workflow behavior

88. Back in the workflow, the `Check canonical contracts outputs` step runs:

```bash
node .github/scripts/fetch-contract-addresses.js --check
```

89. `--check` rebuilds expected outputs and compares them to current files after scrubbing volatile fields like timestamps.
90. If the main generate step succeeded and `git diff --quiet` says files changed, the workflow commits and pushes the six generated files.

## B. Shadow scheduled workflow path

### Layer 1: Shadow cron

91. GitHub Actions fires `.github/workflows/update-contract-addresses-shadow.yml` on:
    - `30 2 * * *`

### Layer 2: Shadow bootstrap

92. The shadow job bootstraps the repo the same way:
    - checkout
    - Node.js `20`
    - `npm ci --prefix operations`

### Layer 3: Shadow CLI path

93. The shadow workflow always builds:

```bash
node .github/scripts/fetch-contract-addresses.js --check
```

94. It optionally appends `--skip-verify`.

### Layer 4: Shadow pipeline behavior

95. Inside `runContractsPipeline()`:
    - `check = true`
    - `dryRun = false`
    - `noWrite = true`
96. The entire resolution, verification, enrichment, implementation, historical shaping, blockchain companion build, and validation path still runs.
97. `writeDataFiles()` does not write files in check mode.
98. `writeBranchWatchState()` also does not write because it receives `dryRun = true` through `noWrite`.
99. If current files drift from regenerated outputs, `assertCanonicalOutputsMatch()` throws.

### Layer 5: Shadow workflow close

100. The shadow workflow uploads artifacts.
101. On failure, it creates or updates an issue from the issue payload file if one exists.
102. It never commits generated data.

## Current-state summary

- The main cron path writes files and may commit them.
- The shadow cron path does not write files and does not commit.
- The live run path currently uses historical bootstrap and merge logic, not live controller event-log reconstruction.
- The live run path currently treats branch-watch anomalies as warnings rather than blocking publication.
