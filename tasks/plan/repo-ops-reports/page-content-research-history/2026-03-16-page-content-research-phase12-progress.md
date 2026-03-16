# Page Content Research Phase 12 Progress

## Scope

This checkpoint executed three goals together:

- broaden claim-family coverage in the orchestrator business-case/operator-considerations cluster
- improve evidence matching on weaker or more ambiguous wording
- run the Phase 2-style PR advisory flow against the real branch diff

## What Changed

### Broader claim coverage

Added three new orchestrator claim families in `tasks/research/claims/orchestrators.json`:

- `orch-bandwidth-per-stream-planning`
- `orch-session-limit-default`
- `orch-business-case-cost-viability`

These expand the registry beyond stake, VRAM, and setup-path claims into:

- bandwidth planning assumptions
- `maxSessions` / `OrchestratorCapped` operational behavior
- payback / break-even / electricity-cost business-case framing

### Better weak-signal matching

`tools/scripts/docs-page-research.js` now normalizes semantic variants before matching. It explicitly collapses:

- `break-even` / `amortisation` -> `payback`
- `worth it` / `feasibility` -> `viable`
- `maxPricePerCapability` / `max price per unit` -> `price ceiling`
- `capability-based` -> `capability match`
- `reward()` / `reward call` -> `reward call`
- `no LPT needed` / `does not require LPT` -> `no lpt required`

It also now accepts partial significant-token overlap instead of requiring almost exact phrase reuse.

### PR advisory reality check

The new fact-runner PR advisory was executed against the actual branch diff relative to `docs-v2-dev`:

- output: `2026-03-16-page-content-research-pr-simulation-branch-fact-runner.md`
- result: zero matched claim families

That is expected for the current branch state: the branch diff is dominated by skill/templates/reports/tooling changes rather than changed `v2` factual docs pages. The advisory now states that explicitly instead of looking broken.

## Real Pilot Result

Business-case/operator-considerations cluster reviewed:

- `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
- `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
- `v2/orchestrators/guides/operator-considerations/session-limits.mdx`
- `v2/orchestrators/guides/operator-considerations/benchmarking.mdx`

Saved artifacts:

- `2026-03-16-page-content-research-pilot-orchestrator-business-case-cluster.md`
- `2026-03-16-page-content-research-pilot-orchestrator-business-case-cluster.json`

Summary:

- claims reviewed: 4 target pages
- verified claim families: 1
- conflicted claim families: 7
- time-sensitive claim families: 2
- contradiction groups: 7
- propagation queue items: 31
- evidence sources checked: 16

## What This Means

The research skill is now materially better at catching:

- business-case claims that should stay approximate rather than being treated as portable constants
- session-limit and bandwidth-planning contradictions across operator-considerations pages
- weaker wording where evidence uses different but equivalent phrasing

The branch-level PR advisory path is working technically, but it only becomes high-signal when actual factual docs pages are part of the diff.

## Next Best Move

To keep improving the warning system in a way that matters, the next checkpoint should target a real docs-content branch or real factual page edits, not another tooling-only phase.

Best next tranche:

- run the fact-runner PR advisory against an actual orchestrator docs review diff
- expand claim families into the remaining operator-economics and workload-selection pages
- tighten evidence adapters further for GitHub/forum claims that use indirect or community shorthand
