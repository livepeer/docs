# Workflow Audit Draft: EN-GB Style Homogenisation

- Source path: `.github/workflows/style-homogenise.yml`
- Workflow family: `validation-sweeps`
- Cleanup decision: `needs-investigation`
- Usage status: `active-mutating`
- Process fit: `legacy-or-unclear`
- Concern: `validation`
- Risk level: `high`
- Dispatcher candidate: `review-fix`
- Consolidation target: `dispatcher:review-fix`

## Summary

EN-GB Style Homogenisation runs on workflow_dispatch and primarily produces github issue or pr metadata.

## Recommended Engineering Action

Trace actual runtime use, owner, and downstream dependencies before deciding whether to keep, merge, or retire it. Current nearest dispatcher: `review-fix`.

## Dependencies

- action:actions/checkout@v4
- action:actions/setup-node@v4
- action:peter-evans/create-pull-request@v7
- operations/scripts/style-and-language-homogenizer-en-gb.js

## Dependants

- dispatcher:review-fix

## Frailty Notes

- Current heuristic risk level is `high`; no exceptional frailty markers were detected in the file scan.

## Cleanup Rationale

- Current repo evidence is not strong enough to justify either deletion or consolidation without tracing real usage first.
- This workflow writes back to the repository, so its blast radius is higher than a read-only validation workflow.
