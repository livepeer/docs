# Workflow Audit Draft: Update Contract Addresses Shadow

- Source path: `.github/workflows/update-contract-addresses-shadow.yml`
- Workflow family: `content-publication`
- Cleanup decision: `consolidate`
- Usage status: `active-advisory`
- Process fit: `core-shipping`
- Concern: `authoring`
- Risk level: `medium`
- Dispatcher candidate: `page-ship`
- Consolidation target: `dispatcher:page-ship`

## Summary

Update Contract Addresses Shadow runs on repository_dispatch, schedule, workflow_dispatch and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Consolidate this workflow under `dispatcher:page-ship` and keep the script or validator layer as the reusable implementation boundary.

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

## Dependants

- dispatcher:page-ship

## Frailty Notes

- Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.
- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.
