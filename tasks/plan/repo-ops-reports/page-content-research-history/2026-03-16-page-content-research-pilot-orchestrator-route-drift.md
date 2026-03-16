# Page Content Research Pilot: Orchestrator Route Drift

## Scope

- Canonical pages:
  - `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx`
  - `v2/orchestrators/setup/rcs-requirements.mdx`
- Dependent pages:
  - `v2/orchestrators/portal.mdx`
  - `v2/orchestrators/quickstart/guide.mdx`
  - `v2/orchestrators/setup/guide.mdx`
  - `v2/orchestrators/navigator.mdx`
- Claim family: stale route aliases for join-a-pool, AI workload guides, and feasibility/hardware links
- Related propagation entity: `orchestrator-route-drift`

## Verified Claims

- `quickstart/guide.mdx` still links to the stale join-pool alias `/v2/orchestrators/guides/setup-paths/join-a-pool`.
- `portal.mdx`, `quickstart/guide.mdx`, and related pages still point to `/v2/orchestrators/guides/workloads-and-ai/*` even though the authored files live under `guides/ai-and-job-workloads/*`.
- `rcs-requirements.mdx` and adjacent setup pages still point to `/v2/orchestrators/guides/feasibility-and-hardware/*` even though the authored pages live under `guides/operator-considerations/*`.

## Findings

- Severity: high
  - File: `v2/orchestrators/quickstart/guide.mdx`
  - Issue: one page currently fans out to three stale route families: join-pool, AI workloads, and feasibility/hardware.
  - User impact: the quickstart is functioning as a stale-link amplifier across multiple operator journeys.
  - Recommended fix: treat quickstart as the first high-priority dependent page for route-drift cleanup.

- Severity: medium
  - File: `v2/orchestrators/portal.mdx`
  - Issue: portal routing still references the old AI workload path family.
  - User impact: the top-level orchestrator entry surface can direct users into outdated route aliases before they ever reach canonical setup content.
  - Recommended fix: keep portal in the route-drift entity so any future portal edit raises this warning automatically.

- Severity: medium
  - File: `v2/orchestrators/setup/rcs-requirements.mdx`
  - Issue: setup prerequisites still reference old feasibility/hardware routes.
  - User impact: users following hardware guidance can land on stale aliases while thinking they are on the current setup path.
  - Recommended fix: use the route-drift entity to drive follow-up cleanup across the setup cluster.

## Propagation Queue

- See `2026-03-16-page-content-research-pilot-orchestrator-route-drift-propagation.md`
- Canonical owners:
  - `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`
  - `v2/orchestrators/guides/ai-and-job-workloads/ai-workloads-guide.mdx`
  - `v2/orchestrators/setup/rcs-requirements.mdx`
- High-priority dependents:
  - `v2/orchestrators/quickstart/guide.mdx`
  - `v2/orchestrators/portal.mdx`
  - `v2/orchestrators/setup/guide.mdx`
  - `v2/orchestrators/navigator.mdx`

## Unresolved Items

- This entity intentionally treats stale routes as unresolved warning material rather than silently assuming redirects or legacy aliases are safe.
- The helper now surfaces the stale aliases directly, which makes the warning system much more useful for restructures and partial migrations.

## Validation

- `node tools/scripts/docs-claim-ledger.js --ledger tasks/reports/repo-ops/page-content-claim-ledger.json --entity orchestrator-route-drift --report-md tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-route-drift-propagation.md --report-json tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-route-drift-propagation.json`
