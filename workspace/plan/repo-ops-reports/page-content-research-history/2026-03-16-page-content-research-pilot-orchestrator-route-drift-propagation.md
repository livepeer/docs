# Docs Claim Propagation Report

## Scope

- Selection type: entity
- Selection value: orchestrator-route-drift
- Ledger version: 1

## Verified Claims

- `orch-route-stale-ai-workloads-alias`
  - Entity: orchestrator-route-drift
  - Summary: Portal, quickstart, and several dependent pages still point to `/v2/orchestrators/guides/workloads-and-ai/*`, while the current authored files live under `guides/ai-and-job-workloads/*`.
  - Canonical owner: `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx`
  - Source: repo-route-review - v2/orchestrators/portal.mdx
  - Last verified: 2026-03-16
  - Status: deprecated
  - Stale aliases: `v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide`, `v2/orchestrators/guides/workloads-and-ai/batch-ai-setup`, `v2/orchestrators/guides/workloads-and-ai/job-types`, `v2/orchestrators/guides/workloads-and-ai/model-vram-reference`, `v2/orchestrators/guides/workloads-and-ai/realtime-ai-setup`
- `orch-route-stale-feasibility-hardware-alias`
  - Entity: orchestrator-route-drift
  - Summary: Setup-facing pages still route users to `/v2/orchestrators/guides/feasibility-and-hardware/*`, but the current authored pages live under `guides/operator-considerations/*`.
  - Canonical owner: `v2/orchestrators/setup/rcs-requirements.mdx`
  - Source: repo-route-review - v2/orchestrators/setup/rcs-requirements.mdx
  - Last verified: 2026-03-16
  - Status: deprecated
  - Stale aliases: `v2/orchestrators/guides/feasibility-and-hardware/benchmarking`, `v2/orchestrators/guides/feasibility-and-hardware/feasibility-economics`, `v2/orchestrators/guides/feasibility-and-hardware/hardware-reference`, `v2/orchestrators/guides/feasibility-and-hardware/session-limits`
- `orch-route-stale-join-pool-alias`
  - Entity: orchestrator-route-drift
  - Summary: Active quickstart content still links to `/v2/orchestrators/guides/setup-paths/join-a-pool`, while the current pool guide lives under `guides/deployment-options/join-a-pool.mdx`.
  - Canonical owner: `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`
  - Source: repo-route-review - v2/orchestrators/quickstart/guide.mdx
  - Last verified: 2026-03-16
  - Status: deprecated
  - Stale aliases: `v2/orchestrators/guides/setup-paths/join-a-pool`

## Findings

- Severity: medium
  - File: ledger selection
  - Issue: propagation queue emitted from tracked claim records
  - User impact: downstream review can start from a deterministic file set
  - Recommended fix: expand ledger coverage for additional reusable claims

## Propagation Queue

| File | Class | Role | Action | Claims |
|---|---|---|---|---|
| `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx` | guide | canonical-owner | follow-up | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/deployment-options/join-a-pool.mdx` | guide | canonical-owner | follow-up | `orch-route-stale-join-pool-alias` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | other | canonical-owner | follow-up | `orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/feasibility-and-hardware/benchmarking` | guide | stale-alias | follow-up | `orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/feasibility-and-hardware/feasibility-economics` | guide | stale-alias | follow-up | `orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/feasibility-and-hardware/hardware-reference` | guide | stale-alias | follow-up | `orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/feasibility-and-hardware/session-limits` | guide | stale-alias | follow-up | `orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/setup-paths/join-a-pool` | guide | stale-alias | follow-up | `orch-route-stale-join-pool-alias` |
| `v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide` | guide | stale-alias | follow-up | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/workloads-and-ai/batch-ai-setup` | guide | stale-alias | follow-up | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/workloads-and-ai/job-types` | guide | stale-alias | follow-up | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/workloads-and-ai/model-vram-reference` | guide | stale-alias | follow-up | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/workloads-and-ai/realtime-ai-setup` | guide | stale-alias | follow-up | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/navigator.mdx` | other | dependent-page | follow-up | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/portal.mdx` | other | dependent-page | follow-up | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/quickstart/guide.mdx` | other | dependent-page | follow-up | `orch-route-stale-ai-workloads-alias, orch-route-stale-feasibility-hardware-alias, orch-route-stale-join-pool-alias` |
| `v2/orchestrators/setup/guide.mdx` | other | dependent-page | follow-up | `orch-route-stale-ai-workloads-alias, orch-route-stale-feasibility-hardware-alias` |

## Unresolved Items

- `orch-route-stale-ai-workloads-alias`
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx`
- `orch-route-stale-feasibility-hardware-alias`
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/setup/rcs-requirements.mdx`
- `orch-route-stale-join-pool-alias`
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`

## Validation

- Command: `node tools/scripts/docs-claim-ledger.js ...`
- Claims in scope: 3
- Queue entries: 17

