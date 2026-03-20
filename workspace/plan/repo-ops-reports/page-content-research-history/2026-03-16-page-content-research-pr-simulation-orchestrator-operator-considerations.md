# Docs Claim Ledger PR Report

## Scope

- Selection type: files
- Selection value: v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx,v2/orchestrators/guides/operator-considerations/hardware-reference.mdx,v2/orchestrators/guides/operator-considerations/session-limits.mdx,v2/orchestrators/guides/operator-considerations/benchmarking.mdx
- Changed files: 4

## Changed Files

- `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`
- `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
- `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
- `v2/orchestrators/guides/operator-considerations/session-limits.mdx`

## Matched Entities

- `orchestrator-route-drift`
  - matched by: `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`
  - matched by: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - matched by: `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
  - matched by: `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
- `orchestrator-business-case`
  - matched by: `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`
  - matched by: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - matched by: `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
  - matched by: `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
- `orchestrator-operator-considerations-cluster`
  - matched by: `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`
  - matched by: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
  - matched by: `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
  - matched by: `v2/orchestrators/guides/operator-considerations/session-limits.mdx`

## Combined Propagation Queue

| File | Class | Role | Action | Entities | Claims |
|---|---|---|---|---|---|
| `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx` | guide | canonical-owner | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/deployment-options/join-a-pool.mdx` | guide | canonical-owner | follow-up | `orchestrator-route-drift` | `orch-route-stale-join-pool-alias` |
| `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx` | guide | canonical-owner | follow-up | `orchestrator-business-case, orchestrator-operator-considerations-cluster, orchestrator-route-drift` | `orch-business-case-feasibility-page-is-canonical, orch-business-case-market-sensitive-thresholds, orch-operator-considerations-cluster-supports-decision-page, orch-operator-considerations-stale-route-family, orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | other | canonical-owner | follow-up | `orchestrator-business-case, orchestrator-route-drift` | `orch-business-case-feasibility-page-is-canonical, orch-business-case-market-sensitive-thresholds, orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/feasibility-and-hardware/benchmarking` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/feasibility-and-hardware/feasibility-economics` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/feasibility-and-hardware/hardware-reference` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/feasibility-and-hardware/session-limits` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/setup-paths/join-a-pool` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-join-pool-alias` |
| `v2/orchestrators/guides/workloads-and-ai/ai-workloads-guide` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/workloads-and-ai/batch-ai-setup` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/workloads-and-ai/job-types` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/workloads-and-ai/model-vram-reference` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/workloads-and-ai/realtime-ai-setup` | guide | stale-alias | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/deployment-options/find-your-path.mdx` | guide | dependent-page | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias, orch-route-stale-feasibility-hardware-alias, orch-route-stale-join-pool-alias` |
| `v2/orchestrators/guides/deployment-options/setup-navigator.mdx` | guide | dependent-page | follow-up | `orchestrator-business-case, orchestrator-route-drift` | `orch-business-case-feasibility-page-is-canonical, orch-business-case-market-sensitive-thresholds, orch-route-stale-ai-workloads-alias, orch-route-stale-feasibility-hardware-alias, orch-route-stale-join-pool-alias` |
| `v2/orchestrators/guides/operator-considerations/benchmarking.mdx` | guide | dependent-page | follow-up | `orchestrator-business-case, orchestrator-operator-considerations-cluster, orchestrator-route-drift` | `orch-business-case-feasibility-page-is-canonical, orch-operator-considerations-cluster-supports-decision-page, orch-operator-considerations-stale-route-family, orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx` | guide | dependent-page | follow-up | `orchestrator-business-case, orchestrator-operator-considerations-cluster, orchestrator-route-drift` | `orch-business-case-feasibility-page-is-canonical, orch-operator-considerations-cluster-supports-decision-page, orch-operator-considerations-stale-route-family, orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/guides/operator-considerations/session-limits.mdx` | guide | dependent-page | follow-up | `orchestrator-business-case, orchestrator-operator-considerations-cluster, orchestrator-route-drift` | `orch-business-case-feasibility-page-is-canonical, orch-operator-considerations-cluster-supports-decision-page, orch-operator-considerations-stale-route-family, orch-route-stale-feasibility-hardware-alias` |
| `v2/orchestrators/navigator.mdx` | other | dependent-page | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/portal.mdx` | other | dependent-page | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/quickstart/guide.mdx` | other | dependent-page | follow-up | `orchestrator-business-case, orchestrator-route-drift` | `orch-business-case-market-sensitive-thresholds, orch-route-stale-ai-workloads-alias, orch-route-stale-feasibility-hardware-alias, orch-route-stale-join-pool-alias` |
| `v2/orchestrators/setup/guide.mdx` | other | dependent-page | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias, orch-route-stale-feasibility-hardware-alias, orch-route-stale-join-pool-alias` |

## Unmatched Files

- None

## Unresolved Items

- `orch-route-stale-ai-workloads-alias` (orchestrator-route-drift)
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx`
- `orch-route-stale-feasibility-hardware-alias` (orchestrator-route-drift)
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/setup/rcs-requirements.mdx`
- `orch-route-stale-join-pool-alias` (orchestrator-route-drift)
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`
- `orch-business-case-market-sensitive-thresholds` (orchestrator-business-case)
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
- `orch-operator-considerations-stale-route-family` (orchestrator-operator-considerations-cluster)
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`

