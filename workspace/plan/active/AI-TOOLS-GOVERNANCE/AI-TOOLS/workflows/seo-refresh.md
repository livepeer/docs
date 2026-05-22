# Workflow Audit Draft: SEO Metadata Refresh

- Source path: `.github/workflows/seo-refresh.yml`
- Workflow family: `content-publication`
- Cleanup decision: `consolidate`
- Usage status: `active-mutating`
- Process fit: `core-shipping`
- Concern: `authoring`
- Risk level: `high`
- Dispatcher candidate: `page-ship`
- Consolidation target: `dispatcher:page-ship`

## Summary

SEO Metadata Refresh runs on workflow_dispatch and primarily produces repository commits or branch updates.

## Recommended Engineering Action

Consolidate this workflow under `dispatcher:page-ship` and keep the script or validator layer as the reusable implementation boundary.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- operations/scripts/remediators/content/seo/generate-seo.js
- secret:GITHUB_TOKEN

## Dependants

- dispatcher:page-ship

## Frailty Notes

- Mutates repository state from CI, which raises coordination and safety risk.
- Depends on secrets, so runtime behavior cannot be fully reasoned about from repo state alone.

## Cleanup Rationale

- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
