# Page Content Research Pilot: Orchestrator Deployment Paths

## Scope

- Canonical pages: `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`, `v2/orchestrators/setup/rcs-requirements.mdx`
- Dependent pages: `v2/orchestrators/quickstart/guide.mdx`, `v2/orchestrators/portal.mdx`, `v2/orchestrators/personas-and-pages.mdx`
- Claim family: pool-vs-solo operator path decisions and prerequisite scoping
- Related propagation entity: `orchestrator-deployment-paths`

## Verified Claims

- `join-a-pool.mdx` is the strongest owner for the “pool worker vs solo orchestrator” distinction.
- `rcs-requirements.mdx` is the strongest owner for solo-orchestrator prerequisites such as ETH, LPT, RPC, and public port exposure.
- `quickstart/guide.mdx` and `portal.mdx` both depend on those claims but should not silently flatten them into one universal operator path.

## Findings

- Severity: medium
  - File: `v2/orchestrators/quickstart/guide.mdx`
  - Issue: the quickstart requirements table presents ETH and LPT as universal prerequisites even though the same tab also routes users into a no-stake pool path.
  - User impact: first-time operators can misread the page as saying every entry path requires staking before they have even chosen solo vs pool.
  - Recommended fix: keep the checklist, but label stake/on-chain prerequisites as solo-path requirements and preserve the pool worker exception.

- Severity: medium
  - File: `v2/orchestrators/portal.mdx`
  - Issue: the portal still participates in deployment-path claims even though it should act as a router, not as a place where setup details become canonical.
  - User impact: routing copy can drift from actual setup docs and amplify stale assumptions across the tab.
  - Recommended fix: keep the portal as an intent surface only and rely on the deployment-path entity to identify when setup claims leak into it.

- Severity: low
  - File: `v2/orchestrators/personas-and-pages.mdx`
  - Issue: planning material still carries the same pool-vs-solo and LPT barrier claims that now have stronger canonical owners elsewhere.
  - User impact: future restructures can accidentally revive stale assumptions if planning notes are treated as active truth sources.
  - Recommended fix: continue treating this file as a dependent review surface, not a canonical owner.

## Propagation Queue

- See `2026-03-16-page-content-research-pilot-orchestrator-deployment-paths-propagation.md`
- Canonical owners:
  - `v2/orchestrators/guides/deployment-options/join-a-pool.mdx`
  - `v2/orchestrators/setup/rcs-requirements.mdx`
- Immediate dependents:
  - `v2/orchestrators/quickstart/guide.mdx`
  - `v2/orchestrators/portal.mdx`
  - `v2/orchestrators/personas-and-pages.mdx`

## Unresolved Items

- The solo prerequisite claim remains `needs-review` because the setup checklist currently mixes universal setup language with solo-only requirements.
- The warning system can now surface this ambiguity, but the docs cluster still needs a later content fix to make the boundary explicit.

## Validation

- `node tools/scripts/docs-claim-ledger.js --ledger tasks/reports/repo-ops/page-content-claim-ledger.json --entity orchestrator-deployment-paths --report-md tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-deployment-paths-propagation.md --report-json tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-deployment-paths-propagation.json`
