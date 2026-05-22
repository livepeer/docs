# Workflow Audit Draft: Check Docs Index

- Source path: `.github/workflows/check-docs-index.yml`
- Workflow family: `docs-catalog-governance`
- Cleanup decision: `merge`
- Usage status: `compatibility-wrapper`
- Process fit: `core-shipping`
- Concern: `repo-ops`
- Risk level: `low`
- Dispatcher candidate: `review-fix`
- Consolidation target: `future:docs-catalog-governance-workflow`

## Summary

Check Docs Index runs on pull_request, push, workflow_dispatch and primarily produces workflow logs and job status.

## Recommended Engineering Action

Merge this workflow with its sibling family into `future:docs-catalog-governance-workflow` so one workflow owns both check and write modes.

## Dependencies

- No direct dependencies identified in current repo scan.

## Dependants

- dispatcher:review-fix

## Frailty Notes

- No local repo dependencies were detected automatically; verify whether this is truly standalone.

## Cleanup Rationale

- This family already has obvious check/generate pairings that likely want one governed workflow with mode flags.
