# Workflow Audit Draft: OpenAPI Reference Validation

- Source path: `.github/workflows/openapi-reference-validation.yml`
- Workflow family: `validation-sweeps`
- Cleanup decision: `keep`
- Usage status: `active-mutating`
- Process fit: `core-shipping`
- Concern: `repo-ops`
- Risk level: `high`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

OpenAPI Reference Validation runs on pull_request, push, schedule, workflow_dispatch and primarily produces github issue or pr metadata.

## Recommended Engineering Action

Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.

## Dependencies

- action:actions/checkout@v4
- action:actions/github-script@v7
- action:actions/setup-node@v4
- action:actions/upload-artifact@v4
- action:peter-evans/create-pull-request@v6
- operations/tests/integration/openapi-reference-audit.js

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Scheduled execution can hide drift until the next cron window.

## Cleanup Rationale

- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
