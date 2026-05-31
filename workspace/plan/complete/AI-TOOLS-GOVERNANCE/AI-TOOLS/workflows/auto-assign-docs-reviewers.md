# Workflow Audit Draft: Auto Assign Docs Reviewers

- Source path: `.github/workflows/auto-assign-docs-reviewers.yml`
- Workflow family: `review-event-automation`
- Cleanup decision: `keep`
- Usage status: `active`
- Process fit: `core-shipping`
- Concern: `review`
- Risk level: `high`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

Auto Assign Docs Reviewers runs on pull_request and primarily produces github issue or pr metadata.

## Recommended Engineering Action

Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.

## Dependencies

- action:actions/github-script@v7

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Current heuristic risk level is `high`; no exceptional frailty markers were detected in the file scan.

## Cleanup Rationale

- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
