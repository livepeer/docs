# Page Content Research Pilot: Orchestrator Stake Threshold Guidance

## Scope

- Canonical page under review: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
- Repeated guidance surfaces:
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`
  - `v2/orchestrators/setup/rcs-requirements.mdx`
  - `v2/orchestrators/quickstart/guide.mdx`
- Claim family: active-set / top-100 stake guidance repeated across path-choice surfaces
- Related propagation entity: `orchestrator-stake-threshold-guidance`

## Verified Claims

- Path-choice pages repeatedly present stake competitiveness guidance as part of the solo-orchestrator decision.
- `find-your-path.mdx` includes an inline review marker explicitly calling for verification of the “top 100 active orchestrators” framing.
- `setup-navigator.mdx` carries the strongest current articulation of the threshold claim and AI-routing nuance, but it is still not stable enough to be treated as fully verified truth.

## Findings

- Severity: medium
  - File: `v2/orchestrators/guides/deployment-options/find-your-path.mdx`
  - Issue: the page presents a live competitive stake threshold with an inline review note still attached.
  - User impact: reviewers can miss that this is unsettled guidance and accidentally propagate it into more pages.
  - Recommended fix: keep the claim tracked as `needs-review` until the repo has a stronger canonical owner or explicit verification source.

- Severity: medium
  - File: `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
  - Issue: the page functions as the current owner of threshold guidance, but that guidance is still a moving market condition rather than a stable configuration fact.
  - User impact: route and setup pages can overstate certainty about current stake competitiveness.
  - Recommended fix: separate stable protocol facts from market/competition guidance in future content cleanup.

## Propagation Queue

- See `2026-03-16-page-content-research-pilot-orchestrator-stake-threshold-guidance-propagation.md`
- Canonical owner:
  - `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
- Immediate dependents:
  - `v2/orchestrators/guides/deployment-options/find-your-path.mdx`
  - `v2/orchestrators/quickstart/guide.mdx`
  - `v2/orchestrators/setup/rcs-requirements.mdx`

## Unresolved Items

- This claim family remains `needs-review` by design.
- The warning system should keep surfacing it whenever router/setup pages change, because it is exactly the sort of unstable decision guidance that drifts quietly.

## Validation

- `node tools/scripts/docs-claim-ledger.js --ledger tasks/reports/repo-ops/page-content-claim-ledger.json --entity orchestrator-stake-threshold-guidance --report-md tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-stake-threshold-guidance-propagation.md --report-json tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-stake-threshold-guidance-propagation.json`
