# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-monitoring-surface
- Ledger version: 1

## Verified Claims

- `orch-prometheus-and-reward-observability-minimum`
  - Entity: orchestrator-monitoring-surface
  - Summary: The minimum monitoring surface currently assumes `-monitor`, Prometheus metrics on port 7935, Explorer checks, and reward-call visibility as the baseline observability contract for a new orchestrator.
  - Canonical owner: `v2/orchestrators/setup/r-monitor.mdx`
  - Source: repo-monitoring-guide - v2/orchestrators/setup/r-monitor.mdx
  - Last verified: 2026-03-16
  - Status: verified

## Findings

- Severity: medium
  - File: ledger selection
  - Issue: propagation queue emitted from tracked claim records
  - User impact: downstream review can start from a deterministic file set
  - Recommended fix: expand ledger coverage for additional reusable claims

## Propagation Queue

| File | Class | Role | Action | Claims |
|---|---|---|---|---|
| `v2/orchestrators/setup/r-monitor.mdx` | other | canonical-owner | update-now | `orch-prometheus-and-reward-observability-minimum` |
| `v2/orchestrators/guides/monitoring-and-troubleshooting/metrics-monitoring.mdx` | guide | dependent-page | update-now | `orch-prometheus-and-reward-observability-minimum` |
| `v2/orchestrators/setup/test.mdx` | other | dependent-page | update-now | `orch-prometheus-and-reward-observability-minimum` |

## Unresolved Items

- None

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 1
- Queue entries: 3

