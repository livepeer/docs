# Page Content Research Phase 9 Progress

## Focus

- Broadened the experimental warning system from orchestrator decision routers into the actual setup execution path:
  - `setup/activate.mdx`
  - `setup/test.mdx`
  - `setup/r-monitor.mdx`

## What This Phase Added

- New tracked entities:
  - `orchestrator-setup-lifecycle`
  - `orchestrator-monitoring-surface`
- New PR simulation coverage for the real activation/verification/monitoring cluster.

## What The Warning System Now Catches Better

- Cross-page drift between activation instructions, verification expectations, and monitoring assumptions
- Service URI / Explorer / reward-call crosschecks that span multiple setup pages
- The difference between stable setup-flow contracts and review-sensitive timing guidance
- Hidden downstream dependency from the lightweight setup monitor page into the full metrics guide

## Why This Matters

- This is closer to real operational docs review than route-only warnings.
- The experimental system is now flagging issues that affect whether a setup guide remains coherent from activation through first reward observation.

## Current Limitation

- Round timing guidance still depends on unstable or review-sensitive assumptions and remains intentionally unresolved.
- The feature is still advisory and curated, but it is now grounded in the real operator lifecycle rather than only nav/router pages.

## Next Step

- Keep broadening across the remaining setup/monitoring/troubleshooting cluster, or start using these warnings during actual content review passes on the setup pages themselves.
