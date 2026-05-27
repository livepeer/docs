# Workflow Audit Draft: Generate Docs Guide Catalogs

- Source path: `.github/workflows/generate-docs-guide-catalogs.yml`
- Workflow family: `docs-catalog-governance`
- Cleanup decision: `merge`
- Usage status: `compatibility-wrapper`
- Process fit: `core-shipping`
- Concern: `repo-ops`
- Risk level: `low`
- Dispatcher candidate: `page-ship`
- Consolidation target: `future:docs-catalog-governance-workflow`

## Summary

Generate Docs Guide Catalogs runs on push, workflow_dispatch and primarily produces generated or refreshed repository data.

## Recommended Engineering Action

Merge this workflow with its sibling family into `future:docs-catalog-governance-workflow` so one workflow owns both check and write modes.

## Dependencies

- No direct dependencies identified in current repo scan.

## Dependants

- dispatcher:page-ship

## Frailty Notes

- No local repo dependencies were detected automatically; verify whether this is truly standalone.

## Cleanup Rationale

- This family already has obvious check/generate pairings that likely want one governed workflow with mode flags.
