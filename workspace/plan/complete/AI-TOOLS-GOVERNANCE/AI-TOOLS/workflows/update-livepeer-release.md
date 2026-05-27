# Workflow Audit Draft: Update Livepeer Release Version

- Source path: `.github/workflows/update-livepeer-release.yml`
- Workflow family: `data-refresh`
- Cleanup decision: `merge`
- Usage status: `compatibility-wrapper`
- Process fit: `core-shipping`
- Concern: `release`
- Risk level: `medium`
- Dispatcher candidate: `page-ship`
- Consolidation target: `data-refresh-governance`

## Summary

Update Livepeer Release Version runs on repository_dispatch, schedule, workflow_dispatch and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Merge this workflow with its sibling family into `data-refresh-governance` so one workflow owns both check and write modes.

## Dependencies

- No direct dependencies identified in current repo scan.

## Dependants

- dispatcher:page-ship

## Frailty Notes

- No local repo dependencies were detected automatically; verify whether this is truly standalone.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- This belongs to a repeating data-refresh pattern and should not stay as an uncoordinated top-level workflow forever.
