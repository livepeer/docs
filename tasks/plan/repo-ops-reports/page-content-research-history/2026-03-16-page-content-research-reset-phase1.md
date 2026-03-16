# Page Content Research Reset - Phase 1 Implementation

## Scope

This tranche resets the research skill from a route-warning system to a fact-check workflow.

Implemented surfaces:

- `tasks/research/claims/orchestrators.json`
- `tasks/research/claims/gateways.json`
- `tools/scripts/docs-fact-registry.js`
- `tools/scripts/docs-page-research.js`
- updated research-skill templates and references
- real pilot reports for orchestrator and gateway factual review clusters

## What Changed

### Skill scope reset

- Research skills now center on claim extraction, evidence collection, contradiction review, and claim-led propagation.
- Route or navigation drift is no longer a primary review target.
- GitHub, forum, official pages, repo files, and repo-available Discord/community signals are modeled as evidence sources.

### Fact registry

- Facts now live in repo-native claim-family registries under `tasks/research/claims/`.
- Registry records track canonical owner, evidence date, freshness class, dependent pages, and related claim families.
- Registry validation is deterministic and tested.

### Research runner

- `docs-page-research.js` runs a full factual pass against a page or changed-file set.
- The runner emits:
  - verified claims
  - conflicted claims
  - time-sensitive claims
  - cross-page contradictions
  - propagation queue
  - evidence sources
- The runner now constrains family matching by domain so gateway and orchestrator claim families do not bleed into each other on generic terms.

## Real Pilot Results

### Orchestrator factual cluster

Pilot files:

- `v2/orchestrators/guides/operator-considerations/feasibility-economics.mdx`
- `v2/orchestrators/guides/deployment-options/setup-navigator.mdx`
- `v2/orchestrators/guides/deployment-options/find-your-path.mdx`
- `v2/orchestrators/setup/rcs-requirements.mdx`
- `v2/orchestrators/guides/operator-considerations/hardware-reference.mdx`
- `v2/orchestrators/guides/operator-considerations/session-limits.mdx`

Output:

- report: `tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-fact-check.md`
- JSON: `tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-orchestrator-fact-check.json`

Observed signal:

- 5 claim families selected
- 1 verified claim
- 4 conflicted claim families
- 4 cross-page contradictions
- 7 evidence sources

High-value contradictions found:

- active-set / top-100 wording treated as durable current truth
- VRAM minimums disagree across setup and hardware pages
- pool-vs-solo prerequisites drift across entry-path pages
- reward profitability wording remains time-sensitive

### Gateway factual cluster

Pilot files:

- `v2/gateways/guides/roadmap-and-funding/operator-support.mdx`
- `v2/gateways/guides/roadmap-and-funding/spe-grant-model.mdx`
- `v2/gateways/guides/operator-considerations/production-gateways.mdx`

Output:

- report: `tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-gateway-fact-check.md`
- JSON: `tasks/reports/repo-ops/2026-03-16-page-content-research-pilot-gateway-fact-check.json`

Observed signal:

- 3 claim families selected
- 2 conflicted claim families
- 1 time-sensitive claim family
- 2 cross-page contradictions
- 4 evidence sources

High-value contradictions found:

- SPE-funded provider examples need current governance/public evidence
- community-support wording relies on weak evidence and should stay advisory
- startup-program wording should remain explicitly time-sensitive

## Success Criteria Review

### 1. The skill primarily reports fact/evidence/contradiction problems, not navigation or MDX problems

Status: met

Evidence:

- Pilot reports focus on claim families, contradictions, and evidence sources.
- No broken-link or route-hygiene findings are used as primary output.

### 2. A real page review produces verified claims, conflicted claims, time-sensitive claims, unresolved claims, and propagation targets

Status: mostly met

Evidence:

- Orchestrator pilot produced verified claims, conflicted claims, contradictions, and propagation targets.
- Gateway pilot produced conflicted claims, time-sensitive claims, contradictions, and propagation targets.

Gap:

- The current pilots did not produce a separate `historical-only` or `unverified` output yet.

### 3. GitHub and forum are actually queried for claim families that require them

Status: met

Evidence:

- GitHub repo evidence was used for `orch-siphon-github-current`.
- Forum evidence was used for gateway SPE/provider and program-state claims.

### 4. At least one real contradiction across active pages is found and explained with evidence

Status: met

Evidence:

- VRAM minimums, active-set wording, pool-vs-solo prerequisites, and SPE/provider examples all produced real contradictions tied to specific page clusters.

### 5. The report gives enough evidence that a reviewer does not need to rediscover the truth manually

Status: partially met

Evidence:

- Reports cite source URLs and dependent pages directly.

Gap:

- Some evidence summaries still say `signal missing` when the source was fetched but the match terms were too coarse. That needs tightening in later tranches.

### 6. High-risk claims always end up with one of verified, downgraded, or unresolved

Status: partially met

Evidence:

- Current high-risk families are landing in verified, conflicted, or time-sensitive states.

Gap:

- The runner classifies but does not yet persist approved downgrades back into the registry workflow.

### 7. The false-positive rate is acceptable for manual use

Status: provisional

Evidence:

- Domain bleed was fixed in this tranche.
- Outputs are materially more focused than the earlier route-centric warnings.

Gap:

- More pilot clusters are still needed before claiming the noise level is stable.

### 8. The implementation is ready to enable PR-time advisory mode in Phase 2 without redesign

Status: met

Evidence:

- Registry and runner contracts are stable enough to plug into PR-time advisory generation later.
- The report contract is already reusable.

## Remaining Phase 1 Gaps

- Expand claim-family coverage beyond the first orchestrator and gateway slices.
- Improve evidence summarization when sources are fetched but term matching is weak.
- Add a persistence-review path for approving registry updates after a research run.
- Replace or retire the older route-centric ledger flow once this reset is committed and proven.
