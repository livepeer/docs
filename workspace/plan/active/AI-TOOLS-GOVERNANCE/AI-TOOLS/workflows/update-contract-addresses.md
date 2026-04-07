# Workflow Audit Draft: Update Contract Addresses

- Source path: `.github/workflows/update-contract-addresses.yml`
- Workflow family: `content-publication`
- Cleanup decision: `keep`
- Usage status: `active-advisory`
- Process fit: `core-shipping`
- Concern: `authoring`
- Risk level: `high`
- Dispatcher candidate: `page-ship`
- Consolidation target: `dispatcher:page-ship`

## Summary

Update Contract Addresses runs on repository_dispatch, schedule, workflow_dispatch and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.

## Dependencies

- .github/scripts/fetch-contract-addresses.js
- action:actions/checkout@v4
- action:actions/github-script@v7
- action:actions/setup-node@v4
- action:actions/upload-artifact@v4
- secret:ARBISCAN_API_KEY
- secret:ARBITRUM_RPC_FALLBACK_URL
- secret:ARBITRUM_RPC_URL
- secret:ETHEREUM_RPC_FALLBACK_URL
- secret:ETHEREUM_RPC_URL
- secret:ETHERSCAN_API_KEY
- secret:GITHUB_TOKEN
- snippets/data/contract-addresses/_branch-watch-state.json
- snippets/data/contract-addresses/_health-checks.json
- snippets/data/contract-addresses/blockchainContractsPageData.json
- snippets/data/contract-addresses/blockchainContractsPageData.jsx
- snippets/data/contract-addresses/contractAddressesData.json
- snippets/data/contract-addresses/contractAddressesData.jsx

## Dependants

- dispatcher:page-ship

## Frailty Notes

- Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.
- Mutates repository state from CI, which raises coordination and safety risk.
- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
- This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.
