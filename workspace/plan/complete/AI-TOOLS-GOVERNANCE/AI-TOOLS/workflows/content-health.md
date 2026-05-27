# Workflow Audit Draft: Content Health Check

- Source path: `.github/workflows/content-health.yml`
- Workflow family: `validation-sweeps`
- Cleanup decision: `consolidate`
- Usage status: `active-advisory`
- Process fit: `core-shipping`
- Concern: `validation`
- Risk level: `medium`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

Content Health Check runs on schedule, workflow_dispatch and primarily produces workflow logs and job status.

## Recommended Engineering Action

Consolidate this workflow under `dispatcher:review-fix` and keep the script or validator layer as the reusable implementation boundary.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- operations/scripts/audit-component-usage.js
- operations/scripts/audits/components/library/scan-component-imports.js
- operations/scripts/docs-quality-and-freshness-audit.js
- operations/scripts/generators/components/library/generate-component-registry.js
- operations/scripts/remediators/components/library/repair-component-metadata.js
- operations/scripts/validators/components/library/component-layout-governance.js

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.
