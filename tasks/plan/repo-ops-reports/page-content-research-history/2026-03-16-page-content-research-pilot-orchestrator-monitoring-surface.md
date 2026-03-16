# Page Content Research Pilot: Orchestrator Monitoring Surface

## Scope

- Canonical page: `v2/orchestrators/setup/r-monitor.mdx`
- Dependent pages:
  - `v2/orchestrators/setup/test.mdx`
  - `v2/orchestrators/guides/monitoring-and-troubleshooting/metrics-monitoring.mdx`
- Claim family: baseline observability contract for new orchestrators
- Related propagation entity: `orchestrator-monitoring-surface`

## Verified Claims

- `r-monitor.mdx` is currently the strongest owner of the repo’s “minimum monitoring” story for new orchestrators.
- `test.mdx` already depends on that monitoring surface when it tells operators how to confirm reward calls and AI runner health.
- `metrics-monitoring.mdx` is a downstream deep-dive page rather than the current owner of the minimal observability contract.

## Findings

- Severity: medium
  - File: `v2/orchestrators/setup/r-monitor.mdx`
  - Issue: the page is now a stronger canonical owner than the broader monitoring guide for minimum observability expectations.
  - User impact: if `metrics-monitoring.mdx` changes without considering `r-monitor.mdx`, the docs can drift between “minimum monitoring” and “full monitoring” guidance.
  - Recommended fix: keep this entity in the warning system so both pages stay linked during review.

- Severity: low
  - File: `v2/orchestrators/setup/test.mdx`
  - Issue: verification guidance already depends on monitoring assumptions such as reward-call visibility and runner health.
  - User impact: test/monitor boundaries can blur unless the warning system keeps both pages in scope together.
  - Recommended fix: continue treating `test.mdx` as a dependent page in the monitoring entity.

## Propagation Queue

- See `2026-03-16-page-content-research-pilot-orchestrator-monitoring-surface-propagation.md`
- Canonical owner:
  - `v2/orchestrators/setup/r-monitor.mdx`
- Immediate dependents:
  - `v2/orchestrators/setup/test.mdx`
  - `v2/orchestrators/guides/monitoring-and-troubleshooting/metrics-monitoring.mdx`

## Unresolved Items

- None in this claim family for the current pass.

## Validation

- `node tools/scripts/docs-claim-ledger.js --ledger tasks/reports/repo-ops/page-content-claim-ledger.json --entity orchestrator-monitoring-surface --report-md tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-monitoring-surface-propagation.md --report-json tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-monitoring-surface-propagation.json`
