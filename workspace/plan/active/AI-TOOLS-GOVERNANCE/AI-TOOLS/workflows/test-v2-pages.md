# Workflow Audit Draft: Docs CI - V2 Browser Sweep

- Source path: `.github/workflows/test-v2-pages.yml`
- Workflow family: `validation-sweeps`
- Cleanup decision: `keep`
- Usage status: `active-advisory`
- Process fit: `core-shipping`
- Concern: `validation`
- Risk level: `high`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

Docs CI - V2 Browser Sweep runs on pull_request, push, workflow_dispatch and primarily produces github issue or pr metadata.

## Recommended Engineering Action

Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.

## Dependencies

- action:actions/checkout@v4
- action:actions/github-script@v7
- action:actions/setup-node@v4
- action:actions/upload-artifact@v4
- operations/scripts/integrators/content/data/fetching/fetch-external-docs.sh
- tools/v2-page-test-report.json

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Uses `localhost:3000`, which conflicts with the repo baseline that forbids port 3000 for local Mintlify sessions.
- Contains advisory steps with `continue-on-error`, so failures may be softened rather than fully blocking.

## Cleanup Rationale

- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
- This workflow is advisory-shaped, which is useful for audits but can also hide unresolved failures.
