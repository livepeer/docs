# Page Content Research Pilot: Orchestrator Setup Lifecycle

## Scope

- Canonical setup-flow pages:
  - `v2/orchestrators/setup/activate.mdx`
  - `v2/orchestrators/setup/test.mdx`
- Dependent lifecycle surfaces:
  - `v2/orchestrators/setup/r-monitor.mdx`
  - `v2/orchestrators/setup/guide.mdx`
- Claim family: activation, verification, service URI confirmation, and round-bound reward visibility
- Related propagation entity: `orchestrator-setup-lifecycle`

## Verified Claims

- `activate.mdx` and `test.mdx` together currently define the canonical post-install flow more strongly than `setup/guide.mdx`.
- Service URI and Explorer status checks are explicitly treated as canonical verification steps in `test.mdx`.
- `r-monitor.mdx` is downstream of the same lifecycle because it repeats reward-call and Explorer expectations after activation.

## Findings

- Severity: medium
  - File: `v2/orchestrators/setup/guide.mdx`
  - Issue: the setup overview depends on the lifecycle cluster but does not own any of the verification semantics itself.
  - User impact: a future edit to setup overview could drift from activate/test expectations without being noticed in normal changed-file review.
  - Recommended fix: keep setup overview as a router into the lifecycle, not as a competing source of truth.

- Severity: medium
  - File: `v2/orchestrators/setup/activate.mdx`
  - Issue: the page carries round-length and active-set timing language that remains review-sensitive.
  - User impact: timing expectations can harden into “facts” across setup docs without a stable verification contract.
  - Recommended fix: keep timing guidance tracked as `needs-review` and propagate it whenever activation or verification pages change.

## Propagation Queue

- See `2026-03-16-page-content-research-pilot-orchestrator-setup-lifecycle-propagation.md`
- Canonical owners:
  - `v2/orchestrators/setup/activate.mdx`
  - `v2/orchestrators/setup/test.mdx`
- Immediate dependents:
  - `v2/orchestrators/setup/r-monitor.mdx`
  - `v2/orchestrators/setup/guide.mdx`

## Unresolved Items

- Round-bound timing guidance remains `needs-review`.
- This is the right kind of instability for the experimental warning system to keep surfacing, because it is operationally important but not fully stable.

## Validation

- `node tools/scripts/docs-claim-ledger.js --ledger tasks/reports/repo-ops/page-content-claim-ledger.json --entity orchestrator-setup-lifecycle --report-md tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-setup-lifecycle-propagation.md --report-json tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-setup-lifecycle-propagation.json`
