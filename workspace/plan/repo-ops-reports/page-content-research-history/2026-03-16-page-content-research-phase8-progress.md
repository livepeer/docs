# Page Content Research Phase 8 Progress

## Focus

- Expanded the experimental warning system into the orchestrator deployment-option router cluster:
  - `find-your-path.mdx`
  - `setup-navigator.mdx`
  - `setup/guide.mdx`

## What This Phase Added

- New tracked entities:
  - `orchestrator-path-router-overlap`
  - `orchestrator-stake-threshold-guidance`
- Expanded `orchestrator-route-drift` so stale route families are now surfaced from the deployment-option router pages too.
- Expanded the PR helper mapping so edits in this cluster resolve to five tracked entities instead of being treated as isolated page changes.

## What The Experimental Warning System Now Catches Better

- Duplicate “start here” router ownership in the same tab
- Unstable stake-threshold guidance that should not silently harden into repo truth
- Stale join-pool, AI-workload, and feasibility/hardware route families embedded inside current deployment-option pages
- The way setup overview pages inherit both router ambiguity and route drift from upstream navigation surfaces

## Why This Matters

- This is closer to the real failure mode of a docs-as-infrastructure repo: path routers drift, route families move, and decision copy ossifies before anyone notices.
- The warning system is increasingly useful even before full trust, because it surfaces structural truth debt that ordinary changed-file review would miss.

## Current Limitations

- The helper still depends on curated file-to-entity mapping.
- The system can identify router overlap, but it does not yet recommend which page should be deprecated or retained as canonical.
- Stake-threshold guidance is intentionally advisory because no stable repo-owned source-of-truth contract exists yet for that market-sensitive claim.

## Next Step

- Keep the feature experimental and non-blocking.
- Continue broadening the orchestrator decision/setup map, then start using the advisory output during real content-review passes on these pages rather than only synthetic simulations.
