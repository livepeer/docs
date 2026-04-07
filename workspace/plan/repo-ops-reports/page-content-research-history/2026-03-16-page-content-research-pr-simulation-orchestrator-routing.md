# Docs Claim Ledger PR Report

## Scope

- Selection type: files
- Selection value: v2/orchestrators/portal.mdx,v2/orchestrators/quickstart/guide.mdx,v2/orchestrators/guides/deployment-options/join-a-pool.mdx,v2/orchestrators/setup/rcs-requirements.mdx
- Changed files: 4

## Changed Files

- `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`
- `v2/orchestrators/portal.mdx`
- `v2/orchestrators/quickstart/guide.mdx`
- `v2/orchestrators/setup/rcs-requirements.mdx`

## Matched Entities

- `orchestrator-role-cluster`
  - matched by: `v2/orchestrators/portal.mdx`
- `orchestrator-deployment-paths`
  - matched by: `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`
  - matched by: `v2/orchestrators/portal.mdx`
  - matched by: `v2/orchestrators/quickstart/guide.mdx`
  - matched by: `v2/orchestrators/setup/rcs-requirements.mdx`
- `orchestrator-product-router`
  - matched by: `v2/orchestrators/portal.mdx`
  - matched by: `v2/orchestrators/quickstart/guide.mdx`
- `orchestrator-route-drift`
  - matched by: `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`
  - matched by: `v2/orchestrators/portal.mdx`
  - matched by: `v2/orchestrators/quickstart/guide.mdx`
  - matched by: `v2/orchestrators/setup/rcs-requirements.mdx`

## Combined Propagation Queue

| File | Class | Role | Action | Entities | Claims |
|---|---|---|---|---|---|
| `v2/orchestrators/concepts/role.mdx` | concept | canonical-owner | update-now | `orchestrator-role-cluster` | `orch-role-dual-compute-and-governance` |
| `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx` | guide | canonical-owner | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/guides/deployment-options/join-a-pool.mdx` | guide | canonical-owner | follow-up | `orchestrator-deployment-paths, orchestrator-route-drift` | `orch-decision-pool-vs-solo-boundary, orch-decision-prerequisites-apply-only-to-solo, orch-route-stale-join-pool-alias` |
| `v2/orchestrators/portal.mdx` | other | canonical-owner | follow-up | `orchestrator-deployment-paths, orchestrator-product-router, orchestrator-role-cluster, orchestrator-route-drift` | `orch-decision-pool-vs-solo-boundary, orch-portal-is-router-not-canonical-setup-owner, orch-role-dual-compute-and-governance, orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/setup/rcs-requirements.mdx` | other | canonical-owner | follow-up | `orchestrator-deployment-paths, orchestrator-route-drift` | `orch-decision-pool-vs-solo-boundary, orch-decision-prerequisites-apply-only-to-solo, orch-route-stale-feasibility-hardware-alias` |
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
| `v2/orchestrators/concepts/architecture.mdx` | concept | dependent-page | update-now | `orchestrator-role-cluster` | `orch-role-dual-compute-and-governance` |
| `v2/orchestrators/concepts/capabilities.mdx` | concept | dependent-page | update-now | `orchestrator-role-cluster` | `orch-role-dual-compute-and-governance` |
| `v2/orchestrators/index.mdx` | index | dependent-page | update-now | `orchestrator-product-router` | `orch-portal-is-router-not-canonical-setup-owner` |
| `v2/orchestrators/navigator.mdx` | other | dependent-page | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias` |
| `v2/orchestrators/personas-and-pages.mdx` | other | dependent-page | verify-only | `orchestrator-deployment-paths, orchestrator-product-router` | `orch-decision-pool-vs-solo-boundary, orch-decision-prerequisites-apply-only-to-solo, orch-portal-is-router-not-canonical-setup-owner` |
| `v2/orchestrators/quickstart/guide.mdx` | other | dependent-page | follow-up | `orchestrator-deployment-paths, orchestrator-product-router, orchestrator-route-drift` | `orch-decision-pool-vs-solo-boundary, orch-decision-prerequisites-apply-only-to-solo, orch-portal-is-router-not-canonical-setup-owner, orch-route-stale-ai-workloads-alias, orch-route-stale-feasibility-hardware-alias, orch-route-stale-join-pool-alias` |
| `v2/orchestrators/setup/guide.mdx` | other | dependent-page | follow-up | `orchestrator-route-drift` | `orch-route-stale-ai-workloads-alias, orch-route-stale-feasibility-hardware-alias` |

## Unmatched Files

- None

## Unresolved Items

- `orch-decision-prerequisites-apply-only-to-solo` (orchestrator-deployment-paths)
  - Status: needs-review
  - Canonical owner: `v2/orchestrators/setup/rcs-requirements.mdx`
- `orch-route-stale-ai-workloads-alias` (orchestrator-route-drift)
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx`
- `orch-route-stale-feasibility-hardware-alias` (orchestrator-route-drift)
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/setup/rcs-requirements.mdx`
- `orch-route-stale-join-pool-alias` (orchestrator-route-drift)
  - Status: deprecated
  - Canonical owner: `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`

