# Workflow Audit Draft: Page Integrity Health

- Source path: `.github/workflows/page-integrity-health.yml`
- Workflow family: `validation-sweeps`
- Cleanup decision: `consolidate`
- Usage status: `active-advisory`
- Process fit: `core-shipping`
- Concern: `validation`
- Risk level: `medium`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

Page Integrity Health runs on schedule, workflow_dispatch and primarily produces github step summary.

## Recommended Engineering Action

Consolidate this workflow under `dispatcher:review-fix` and keep the script or validator layer as the reusable implementation boundary.

## Dependencies

- action:actions/checkout@v4
- action:actions/github-script@v7
- action:actions/setup-node@v4
- action:actions/upload-artifact@v4
- operations/scripts/dispatch/content/health/page-integrity-dispatch.js

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.
- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.
