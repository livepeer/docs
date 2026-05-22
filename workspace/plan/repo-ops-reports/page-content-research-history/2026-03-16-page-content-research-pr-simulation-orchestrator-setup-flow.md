# Docs Claim Ledger PR Report

## Scope

- Selection type: files
- Selection value: v2/orchestrators/setup/activate.mdx,v2/orchestrators/setup/test.mdx,v2/orchestrators/setup/r-monitor.mdx
- Changed files: 3

## Changed Files

- `v2/orchestrators/setup/activate.mdx`
- `v2/orchestrators/setup/r-monitor.mdx`
- `v2/orchestrators/setup/test.mdx`

## Matched Entities

- `orchestrator-setup-lifecycle`
  - matched by: `v2/orchestrators/setup/activate.mdx`
  - matched by: `v2/orchestrators/setup/r-monitor.mdx`
  - matched by: `v2/orchestrators/setup/test.mdx`
- `orchestrator-monitoring-surface`
  - matched by: `v2/orchestrators/setup/r-monitor.mdx`
  - matched by: `v2/orchestrators/setup/test.mdx`

## Combined Propagation Queue

| File | Class | Role | Action | Entities | Claims |
|---|---|---|---|---|---|
| `v2/orchestrators/setup/activate.mdx` | other | canonical-owner | verify-only | `orchestrator-setup-lifecycle` | `orch-activation-verification-monitoring-loop, orch-explorer-status-and-service-uri-crosscheck, orch-round-and-reward-timing-guidance` |
| `v2/orchestrators/setup/r-monitor.mdx` | other | canonical-owner | verify-only | `orchestrator-monitoring-surface, orchestrator-setup-lifecycle` | `orch-activation-verification-monitoring-loop, orch-explorer-status-and-service-uri-crosscheck, orch-prometheus-and-reward-observability-minimum, orch-round-and-reward-timing-guidance` |
| `v2/orchestrators/setup/test.mdx` | other | canonical-owner | verify-only | `orchestrator-monitoring-surface, orchestrator-setup-lifecycle` | `orch-activation-verification-monitoring-loop, orch-explorer-status-and-service-uri-crosscheck, orch-prometheus-and-reward-observability-minimum, orch-round-and-reward-timing-guidance` |
| `v2/orchestrators/guides/monitoring-and-troubleshooting/metrics-monitoring.mdx` | guide | dependent-page | update-now | `orchestrator-monitoring-surface` | `orch-prometheus-and-reward-observability-minimum` |
| `v2/orchestrators/setup/guide.mdx` | other | dependent-page | update-now | `orchestrator-setup-lifecycle` | `orch-activation-verification-monitoring-loop` |

## Unmatched Files

- None

## Unresolved Items

- `orch-round-and-reward-timing-guidance` (orchestrator-setup-lifecycle)
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/setup/activate.mdx`

