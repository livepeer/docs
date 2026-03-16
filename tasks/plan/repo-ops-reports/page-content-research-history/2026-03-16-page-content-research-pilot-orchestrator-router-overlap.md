# Page Content Research Pilot: Orchestrator Router Overlap

## Scope

- Canonical page under review: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
- Overlapping router page: `v2/orchestrators/guides/deployment-options/find-your-path.mdx`
- Dependent router surfaces:
  - `v2/orchestrators/portal.mdx`
  - `v2/orchestrators/quickstart/guide.mdx`
  - `v2/orchestrators/setup/guide.mdx`
- Claim family: duplicated path-routing ownership and unresolved enterprise onboarding path
- Related propagation entity: `orchestrator-path-router-overlap`

## Verified Claims

- `setup-navigator.mdx` and `find-your-path.mdx` are both actively serving as router pages for pool, solo, Siphon, and fleet paths.
- `setup-navigator.mdx` explicitly carries unresolved enterprise-onboarding review debt.
- `portal.mdx`, `quickstart/guide.mdx`, and `setup/guide.mdx` all depend on those same path-router decisions even though they should not own them.

## Findings

- Severity: high
  - File: `v2/orchestrators/guides/deployment-options/find-your-path.mdx`
  - Issue: this page duplicates the job of `setup-navigator.mdx` rather than acting as a clearly subordinate or deprecated router.
  - User impact: the tab can drift into two competing “start here” pages, making it unclear which one owns path decisions.
  - Recommended fix: establish one canonical router page and treat the other as either a dependent variant, a migration surface, or a removal candidate.

- Severity: medium
  - File: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - Issue: the page is currently treated as canonical for router logic while still carrying unresolved enterprise-contact review debt.
  - User impact: the warning system correctly keeps this page in `verify-only` status because the enterprise path is not yet a stable owned route.
  - Recommended fix: either define a durable enterprise onboarding route or narrow the promise of the fleet path copy.

- Severity: medium
  - File: `v2/orchestrators/setup/guide.mdx`
  - Issue: the setup overview depends on the router cluster while also linking into stale setup-path aliases.
  - User impact: setup guidance can inherit router ambiguity and stale path debt at the same time.
  - Recommended fix: keep setup overview downstream of the canonical router, not as a competing orientation page.

## Propagation Queue

- See `2026-03-16-page-content-research-pilot-orchestrator-router-overlap-propagation.md`
- Canonical owner:
  - `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
- Immediate dependents:
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`
  - `v2/orchestrators/portal.mdx`
  - `v2/orchestrators/quickstart/guide.mdx`
  - `v2/orchestrators/setup/guide.mdx`

## Unresolved Items

- Router overlap remains intentionally unresolved and tracked as `conflicted`.
- Enterprise onboarding/contact guidance remains `needs-review`.

## Validation

- `node tools/scripts/docs-claim-ledger.js --ledger tasks/reports/repo-ops/page-content-claim-ledger.json --entity orchestrator-path-router-overlap --report-md tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-router-overlap-propagation.md --report-json tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-router-overlap-propagation.json`
