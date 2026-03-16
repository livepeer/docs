# Page Content Research Rollout Report

Date: 2026-03-16
Target branch: `codex/20260316-docs-v2-dev-merge-ready`
Base branch: `docs-v2-dev`
Status: experimental, advisory-first

## Install Result

The research-skill stack was installed into the clean merge-ready `docs-v2-dev` worktree with:

- Codex skill templates and references for:
  - `page-content-research-review`
  - `docs-source-verification`
  - `docs-change-review`
  - `docs-impact-propagation`
- repo-native fact registries under `tasks/research/claims/`
- active validator and runner scripts:
  - `tools/scripts/docs-fact-registry.js`
  - `tools/scripts/docs-page-research.js`
  - `tools/scripts/docs-page-research-pr-report.js`
- local/manual PR integration through `tools/scripts/create-codex-pr.js --advisory-research`

Exploratory predecessor artifacts were preserved under:

- `tasks/plan/repo-ops-reports/page-content-research-history/`

They were not reintroduced into `tasks/reports/`, which would violate current tasks governance for manual research dumps.

## Repo-Conventions Review

Root-cause convention fixes required during install:

1. `tasks/plan/future/**` and `tasks/plan/repo-ops-reports/**` had to be explicitly unignored in `.gitignore` so roadmap and rollout artifacts can be tracked without forced adds.
2. The installed skill templates had to satisfy the current Codex template contract, including valid `primary_commands` metadata.
3. Script governance surfaces required current-branch regeneration instead of copying stale generated files from the source worktree:
   - `tools/script-index.md`
   - `tests/script-index.md`
   - `docs-guide/catalog/scripts-catalog.mdx`
4. `tasks/reports/script-classifications.json` needed targeted classification-row updates for the newly introduced research scripts and related managed helpers.
5. The imported orchestrator claim registry had to be reconciled to the current `docs-v2-dev` IA because several source-branch paths had been renamed or absorbed.

No `.allowlist` change was required. Existing root allowlist coverage already includes the needed top-level directories.

## Readiness Assessment

Codex readiness: `Codex-ready`

Why:

- local Codex skill sync install succeeded
- local Codex skill sync `--check` succeeded
- the active skill family now installs from the canonical template source
- the PR advisory path uses the fact-check runner rather than the route-centric helper

Cross-agent readiness: `Portable-with-minor-work`

Why:

- the skill structure is already mostly portable because it is template/reference/script based
- the active runtime is repo-native and does not depend on Codex-only data formats for claim storage
- however, explicit export/install packaging for non-Codex agents has not been validated in this rollout

Current portability blockers:

- no verified non-Codex pack/install flow was run in this branch
- no cross-agent metadata/report packaging contract has been tested end to end
- some readiness language still assumes Codex local skill sync as the primary installation path

## Real Usage Validation

Saved install-validation artifacts:

- `tasks/plan/repo-ops-reports/install-validation/2026-03-16-page-content-research-install-validation-orchestrators.md`
- `tasks/plan/repo-ops-reports/install-validation/2026-03-16-page-content-research-install-validation-gateways.md`
- `tasks/plan/repo-ops-reports/install-validation/2026-03-16-page-content-research-install-validation-pr-advisory.md`

Validation summary:

- Orchestrator cluster:
  - 6 target pages
  - 1 verified claim family
  - 6 conflicted claim families
  - 4 time-sensitive claim families
  - 6 contradiction groups
  - 27 propagation queue items
  - 18 evidence sources
- Gateway cluster:
  - 3 target pages
  - 2 conflicted claim families
  - 1 time-sensitive claim family
  - 2 contradiction groups
  - 7 propagation queue items
  - 4 evidence sources
- PR advisory run:
  - 3 changed docs pages
  - 10 matched claim families
  - 6 contradiction groups
  - 25 propagation queue items
  - 17 evidence sources

This confirms the installed runner is producing factual outputs on current `docs-v2-dev` content, not route hygiene or generic lint.

## Current Limitations

- The feature remains experimental and non-blocking.
- Claim-family coverage is still concentrated in orchestrator and gateway high-risk factual surfaces.
- Evidence matching is stronger than the source branch baseline, but weaker wording and renamed IA surfaces still need tuning.
- The legacy route-centric helper is retained only as comparison tooling; it is not the active advisory path.
- Cross-agent portability is assessed but not fully proven yet.

## Recommended Next Improvement Tranche

After upstream landing:

1. Broaden claim-family coverage across additional current `docs-v2-dev` orchestrator and gateway clusters.
2. Improve weaker evidence matching for pages that describe the same fact with different framing.
3. Tune GitHub/forum/community adapters and claim ownership against the current IA.
4. Keep PR advisory non-blocking until the trust roadmap’s measurement phase proves stronger enforcement is justified.
