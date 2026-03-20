# Page Content Research Pilot: Orchestrator Operator-Considerations Cluster

## Scope

- `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
- `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
- `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
- `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`

## Verified Claims

- The cluster has a clear internal shape: one concept page for the worth-it decision, one reference page for hardware constraints, and two guides for capacity calibration.
- The cluster is still coupled to stale route families inherited from earlier IA shapes.

## Findings

- `feasibility-economics.mdx` links readers to `/v2/orchestrators/guides/setup-paths/setup-navigator` instead of the current deployment-options route family.
- `hardware-reference.mdx`, `session-limits.mdx`, and `benchmarking.mdx` still use `feasibility-and-hardware/*` and `workloads-and-ai/*` links that no longer reflect the authored folder structure.
- This means operator viability advice and supporting implementation references can drift independently, which is exactly the failure mode the warning system should flag.

## Propagation Queue

- Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
- Supporting dependents:
  - `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
  - `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
  - `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`

## Unresolved Items

- Route cleanup for stale `feasibility-and-hardware` references
- Route cleanup for stale `workloads-and-ai` references
- Market-sensitive threshold language still repeated outside the canonical business-case page

## Validation

- Static review of the actual current operator-considerations pages
- PR helper mapping extended to these four files
