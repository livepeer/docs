# Workflow Audit Draft: Check Broken Links

- Source path: `.github/workflows/broken-links.yml`
- Workflow family: `validation-sweeps`
- Cleanup decision: `consolidate`
- Usage status: `active-advisory`
- Process fit: `core-shipping`
- Concern: `validation`
- Risk level: `medium`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

Check Broken Links runs on pull_request, workflow_dispatch and primarily produces github step summary.

## Recommended Engineering Action

Consolidate this workflow under `dispatcher:review-fix` and keep the script or validator layer as the reusable implementation boundary.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- operations/scripts/automations/content/data/fetching/fetch-external-docs.sh

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.

## Cleanup Rationale

- This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.
