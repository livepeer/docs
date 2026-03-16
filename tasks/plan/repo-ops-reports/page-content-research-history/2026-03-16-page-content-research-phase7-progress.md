# Page Content Research Phase 7 Progress

## Focus

- Expanded the experimental warning system into the orchestrator deployment/product-router cluster that is most likely to drift during current IA and setup work.
- Added tracked entities for:
  - `orchestrator-deployment-paths`
  - `orchestrator-product-router`
  - `orchestrator-route-drift`

## What This Phase Proved

- The claim ledger is now useful for operator-path decision surfaces, not just gateway and concept clusters.
- The warning system can surface route drift as first-class claim debt, not just content drift.
- A small orchestrator diff around `portal`, `quickstart`, `join-a-pool`, and `rcs-requirements` now expands into a materially richer advisory queue that includes:
  - canonical setup owners
  - router surfaces
  - dependent planning pages
  - stale aliases that should be cleaned up

## Why This Matters

- The experimental warning system is now closer to the actual refactor pressure in this repo: path churn, canonical-owner ambiguity, and product-routing drift.
- This is a better fit for an experimental feature than pretending only externally verified factual claims matter. In this repo, structural truth and canonical routing are major sources of downstream documentation breakage.

## Current Limitations

- The entity map is still curated by hand.
- The route-drift entity reports stale aliases, but it does not yet derive them automatically from redirects, docs.json, or IA metadata.
- Product-planning files that exist outside this worktree are still out of scope until they land on this branch or are modeled here explicitly.

## Next Step

- Keep the feature experimental and non-blocking.
- Add one more advisory integration pass for this orchestrator slice through the PR helper so reviewers can see the richer queue in the same format used during PR prep.
- After that, broaden the entity map further into current orchestrator setup and deployment-option pages before considering any stronger workflow integration.
