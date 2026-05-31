# Workflow Audit Draft: Close Linked Issues (docs-v2 Merge)

- Source path: `.github/workflows/close-linked-issues-docs-v2.yml`
- Workflow family: `review-event-automation`
- Cleanup decision: `keep`
- Usage status: `active`
- Process fit: `core-shipping`
- Concern: `review`
- Risk level: `low`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

Close Linked Issues (docs-v2 Merge) runs on pull_request and primarily produces workflow logs and job status.

## Recommended Engineering Action

Keep this as a standalone workflow because its trigger contract and ownership boundary are distinct enough to justify a top-level entrypoint.

## Dependencies

- action:actions/github-script@v7

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Current heuristic risk level is `low`; no exceptional frailty markers were detected in the file scan.

## Cleanup Rationale

- The current trigger contract looks distinct enough to justify keeping a dedicated workflow entrypoint.
