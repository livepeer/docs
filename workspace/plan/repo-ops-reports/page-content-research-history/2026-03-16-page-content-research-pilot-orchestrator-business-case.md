# Page Content Research Pilot: Orchestrator Business Case

## Scope

- Canonical target requested: `v2/orchestrators/guides/operator-considerations/business-case.mdx`
- Actual current equivalent in this worktree: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
- Supporting pages reviewed:
  - `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
  - `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
  - `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`

## Verified Claims

- `feasibility-economics.mdx` is the current repo-owned business-case page for orchestrators.
- `hardware-reference.mdx`, `session-limits.mdx`, and `benchmarking.mdx` act as supporting operator-considerations pages, not competing router pages.
- The operator-considerations cluster still contains stale route references to earlier folder families.

## Findings

- The requested `business-case.mdx` file does not exist in this branch; the repo has effectively renamed that function into `feasibility-economics.mdx`.
- The page contains review-sensitive viability guidance, including active-set / top-100 framing, a rough reward-profitability threshold, and “current network conditions as of early 2026” wording.
- The surrounding cluster still links to stale route families such as `guides/feasibility-and-hardware/*` and `guides/workloads-and-ai/*`, so navigation drift is mixed directly into current operator advice.

## Propagation Queue

- Canonical owner: `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
- Supporting dependents:
  - `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
  - `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
  - `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`
- Related downstream pages carrying the same decision guidance:
  - `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - `v2/orchestrators/setup/rcs-requirements.mdx`
  - `v2/orchestrators/quickstart/guide.mdx`

## Unresolved Items

- `orch-business-case-market-sensitive-thresholds`
- `orch-operator-considerations-stale-route-family`
- `orch-route-stale-feasibility-hardware-alias`

## Validation

- Static review of the actual authored pages in the operator-considerations cluster
- Claim-led propagation modeled in `page-content-claim-ledger.json`
