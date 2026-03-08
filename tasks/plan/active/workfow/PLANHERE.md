## Codex Pipeline Recovery + Hard Enforcement Plan (Integrated With Incident Findings)

### Summary
This is a decision-complete plan to fix the current failure pattern you documented and to hard-enforce multi-agent safety using the `codex-task-isolation-standard` model.

It has 3 deliverables in order:
1. Recover missing gateway/orchestrator deliverables from stash-backed evidence.
2. Ship the 4 mandatory pipeline fixes you requested in one enforcement PR.
3. Ship hard controls (worktree isolation, branch/workflow locking, overlap gating, docs-v2 protection) in a follow-up enforcement PR.

This plan assumes the current local branch is `docs-v2` at `2ed24c4c` (ahead by 10, clean tree), with overlapping-agent incident evidence and stash-resident deliverables.

---

## Public Interfaces / Contracts Added or Changed

### New files
1. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tests/config/codex-issue-policy.json`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/tests/config/codex-issue-policy.json)
2. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex-preflight.js`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/tools/scripts/codex-preflight.js)
3. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex-lock-manager.js`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/tools/scripts/codex-lock-manager.js)
4. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/check-codex-pr-overlap.js`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/tools/scripts/check-codex-pr-overlap.js)
5. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.codex/locks/README.md`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/.codex/locks/README.md)

### Changed files
1. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.githooks/pre-commit`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/.githooks/pre-commit)
2. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.githooks/pre-push`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/.githooks/pre-push)
3. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.githooks/verify.sh`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/.githooks/verify.sh)
4. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tests/run-all.js`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/tests/run-all.js)
5. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/validate-codex-task-contract.js`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/tools/scripts/validate-codex-task-contract.js)
6. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tests/run-pr-checks.js`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/tests/run-pr-checks.js)
7. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tests/unit/validate-codex-task-contract.test.js`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/tests/unit/validate-codex-task-contract.test.js)
8. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.github/workflows/test-suite.yml`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/.github/workflows/test-suite.yml)
9. [`/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.github/workflows/issue-auto-label.yml`](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/.github/workflows/issue-auto-label.yml)

---

## Phase 0: Immediate Recovery (Missing Deliverables)

### Goal
Restore missing payment/orchestrator deliverables currently hidden by stash/revert churn before enforcement changes.

### Steps
1. Freeze agent write activity in `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]`.
2. Create isolated recovery branch/worktree via codex isolation standard.
3. Recover only the missing target files from identified stash entry (the one containing 58 paths and confirmed target paths).
4. Keep legacy paths unchanged in this recovery PR unless explicitly required by plan-specific migration rules.
5. Run existing finalize guard script and link audit for recovered paths.
6. Open a recovery PR with only recovered files and verification evidence.

### Acceptance
1. All currently missing target files exist on disk in intended paths.
2. Recovery PR has no unrelated hook/CI/policy edits.
3. Recovery PR references stash evidence source and path list.

---

## Phase 1: Mandatory Pipeline Fixes PR (Your 4 Required Fixes)

### Fix 1: Pre-commit must be staged-scoped only
1. In `pre-commit`, remove unconditional global gates from always-run path.
2. Any non-staged/global check must run only when staged files intersect its ownership paths.
3. Keep deletion and `.allowlist` protections because they are staged-index checks.
4. Do not auto-install dependencies inside commit hooks.

### Fix 2: `run-all.js --staged` must avoid global checks
1. Add strict staged relevance routing:
   1. `docs-navigation` runs only when staged includes `docs.json` or navigation-owned files.
   2. generated-banner check runs only when staged includes generated targets or banner-governed files.
2. Preserve existing staged checks for style/mdx/spelling/quality/links/script-docs.
3. Keep full-repo checks in CI/non-staged modes only.

### Fix 3: Add codex issue-state gate + policy config
1. Add `tests/config/codex-issue-policy.json`:
   1. `required_labels`: `docs-v2`
   2. `required_prefix_classes`: `type:`, `area:`, `classification:`, `priority:`
   3. `forbidden_labels`: `status: needs-info`
   4. `required_state`: `open`
2. Extend `validate-codex-task-contract.js` flags:
   1. `--require-issue-state`
   2. `--issue-number`
   3. `--issue-repo`
   4. `--issue-source <api|gh|auto>`
   5. `--issue-token-env`
3. Wire into `tests/run-pr-checks.js` for `codex/*`.
4. Wire `GITHUB_TOKEN` into CI step in `test-suite.yml`.

### Fix 4: Add `needs-info` auto-removal lifecycle
1. In `issue-auto-label.yml`, when required sections are complete:
   1. remove `status: needs-info` if present.
2. Keep add behavior for incomplete issues unchanged.
3. Keep idempotent comment marker behavior unchanged.

### Acceptance
1. Staged commit with unrelated unstaged repo changes does not fail from global checks.
2. Codex PR fails if linked issue violates policy.
3. Edited issue clears stale `status: needs-info` automatically when complete.

---

## Phase 2: Hard Controls PR (Multi-Agent Safety Enforcement)

### Control A: One-agent-one-worktree + docs-v2 human-only
1. Reserve `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]` as protected primary branch workspace.
2. In pre-commit, block direct commits on `docs-v2` unless explicit human override trailer is present.
3. Require codex work to run on `codex/<id>-<slug>` branches only.

### Control B: Mandatory preflight command
1. Add `codex-preflight.js` to do all of:
   1. create worktree
   2. create codex branch
   3. create lock
   4. scaffold `.codex/task-contract.yaml`
2. Make this the required entrypoint in docs and skill references.

### Control C: Locking and overlap prevention
1. Add lock schema in `.codex/locks/*.json` with fields:
   1. `task_id`, `branch`, `worktree_path`, `owner`, `scope_in`, `started_at`, `expires_at`, `status`
2. Pre-commit/pre-push on codex branches fails if:
   1. no active lock for branch/task
   2. lock scope overlaps another active lock without explicit handoff token
3. Add CI overlap gate (`check-codex-pr-overlap.js`) to fail when changed files overlap open codex PRs unless handoff label exists.

### Control D: Ban broad staging patterns for AI workflow
1. In pre-commit on codex branches, fail when parent command indicates `git add -A` or `git add .`.
2. Enforce explicit-path staging by contract scope gate.
3. Keep contract scope checks authoritative for changed files.

### Control E: Stash policy expansion
1. Keep existing stash ban check.
2. Run stash ban in pre-push as well for codex branches.
3. Add CI advisory check that flags stash-incident markers in commit metadata if present (non-blocking telemetry only).

### Control F: No-verify policy for merges
1. Keep local raw `--no-verify` technically possible when explicitly human-directed.
2. Ensure branch protection + required CI checks make `--no-verify` non-authoritative for merge eligibility.

### Acceptance
1. Agents cannot complete codex task flow without worktree, lock, branch, and contract.
2. Overlapping codex PR file ownership blocks merge until explicit handoff.
3. Direct commits on `docs-v2` require explicit human override trailer.

---

## CI / Branch Protection Configuration (Manual Admin Step)
1. Protect `docs-v2`:
   1. require PRs
   2. block direct pushes (except admins if desired)
   3. require `Docs CI - Content Quality Suite`
   4. require codex contract/issue checks for `codex/*` PRs
2. Keep `docs-v2 -> main` advisory exception unchanged unless explicitly changed later.

---

## Test Cases and Scenarios

1. Staged-only hook test:
   1. stage one docs file
   2. leave unrelated unstaged changes across repo
   3. commit must evaluate staged scope only.
2. `run-all --staged` nav skip test:
   1. stage non-nav file
   2. confirm docs-navigation check skipped.
3. Issue gate pass:
   1. codex PR linked to open issue with all required labels/prefixes and no `needs-info`.
4. Issue gate fail:
   1. remove one required prefix class, verify failure message includes missing class.
5. Needs-info lifecycle:
   1. open incomplete issue => label added
   2. edit to complete => label removed.
6. docs-v2 protection:
   1. attempt direct commit on `docs-v2` without trailer => blocked.
7. overlap gate:
   1. open two codex PRs with overlapping changed files => second fails overlap check without handoff label.
8. stash policy:
   1. create stash in codex branch, push => blocked by pre-push check.

---

## Rollout Order
1. PR-0 Recovery PR (restore missing files from stash).
2. PR-1 Pipeline fixes PR (the 4 mandatory fixes).
3. PR-2 Hard controls PR (locks/preflight/docs-v2 protection/overlap gate).
4. Enable branch protection requirements after PR-1 merges.
5. Enable overlap gate blocking after PR-2 merges.

---

## Assumptions and Defaults
1. `docs-v2` remains the integration base branch.
2. Worktree isolation is mandatory for codex tasks.
3. Raw `--no-verify` remains human override-capable locally, but cannot bypass required PR checks.
4. Lock files are operational control artifacts and are managed per codex task lifecycle.
5. Existing stash evidence is accurate for recovery source selection.

