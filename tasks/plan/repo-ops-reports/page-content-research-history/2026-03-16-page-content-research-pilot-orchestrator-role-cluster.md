# Page Content Research Pilot: Orchestrator Role Cluster

## Scope

- Canonical page: `v2/orchestrators/concepts/role.mdx`
- Cluster pages: `role.mdx`, `capabilities.mdx`, `architecture.mdx`, `portal.mdx`
- Claim family: orchestrators as both compute providers and economic/governance actors
- Related propagation entity: `orchestrator-role-cluster`

## Verified Claims

- `role.mdx` is the strongest canonical owner for the “dual role” framing: compute provider plus economic/governance actor.
- `capabilities.mdx` repeats the compute-provider side of that claim.
- `architecture.mdx` and `portal.mdx` depend on the same concept boundary even when they do not restate it at full length.

## Findings

- Severity: medium
  - File: `v2/orchestrators/concepts/role.mdx`
  - Issue: this page is doing double duty as both the canonical role explainer and the current canonical source for cross-tab terminology and incentives handoff.
  - User impact: role, incentives, and architecture edits can still drift together because one page owns too much semantic ground.
  - Recommended fix: keep `role.mdx` as the owner of the dual-role framing, but use separate tracked entities for incentives ownership and broader terminology propagation.

- Severity: medium
  - File: `v2/orchestrators/concepts/architecture.mdx`
  - Issue: architecture depends on the same role boundary while also carrying unresolved incentives-link drift.
  - User impact: users can get a technically correct architecture picture while still being routed into outdated incentives naming.
  - Recommended fix: treat architecture as a dependent page in both the role-cluster entity and the incentives-rename entity.

## Propagation Queue

- See `2026-03-16-page-content-research-pilot-orchestrator-role-cluster-propagation.md`
- Canonical owner: `v2/orchestrators/concepts/role.mdx`
- Immediate dependents: `v2/orchestrators/concepts/architecture.mdx`, `v2/orchestrators/concepts/capabilities.mdx`, `v2/orchestrators/portal.mdx`

## Unresolved Items

- The incentives rename/conflict remains a separate tracked issue and is intentionally not collapsed into this role-cluster claim.
- `portal.mdx` is included as a dependent orientation surface but still needs its own dedicated review pass later.

## Validation

- `node tools/scripts/docs-claim-ledger.js --ledger tasks/reports/repo-ops/page-content-claim-ledger.json --entity orchestrator-role-cluster --report-md tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-role-cluster-propagation.md --report-json tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-role-cluster-propagation.json`
