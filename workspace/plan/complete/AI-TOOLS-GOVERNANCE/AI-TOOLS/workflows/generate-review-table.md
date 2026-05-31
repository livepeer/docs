# Workflow Audit Draft: Generate Review Table

- Source path: `.github/workflows/generate-review-table.yml`
- Workflow family: `placeholder-backlog`
- Cleanup decision: `consolidate`
- Usage status: `placeholder`
- Process fit: `legacy-or-unclear`
- Concern: `review`
- Risk level: `low`
- Dispatcher candidate: `page-ship`
- Consolidation target: `dispatcher:page-ship`

## Summary

Generate Review Table runs on workflow_dispatch and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Consolidate this workflow under `dispatcher:page-ship` and keep the script or validator layer as the reusable implementation boundary.

## Dependencies

- No direct dependencies identified in current repo scan.

## Dependants

- dispatcher:page-ship

## Frailty Notes

- No local repo dependencies were detected automatically; verify whether this is truly standalone.

## Cleanup Rationale

- No additional cleanup rationale recorded.
