**Title**
Multi-Agent Safety Hardening Plan for `livepeer-docs-v2` (No Overwrites, No Hidden Work, No Cross-Agent Clobbering)

**Summary**
This plan hardens the repo so AI agents cannot overwrite each other or your local work by default.  
It enforces: isolated worktrees, branch-scoped contracts, path-level lock ownership, scope-limited staging, protected trunk behavior, and CI-side gatekeeping so `--no-verify` cannot bypass policy.

Skill basis used: `codex-task-isolation-standard` (expanded from branch-only checks to full local+CI concurrency controls).

**Public Interfaces / Types**
1. Extend task contract at `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.codex/task-contract.yaml`.
Fields added:
- `lock_id` (string)
- `worktree_path` (absolute path)
- `scope_in` (existing, required, exact path list)
- `scope_out` (optional deny-list)
- `allowed_generated` (existing, explicit generated-only exceptions)
- `finalize_profile` (string, optional)
- `expires_at` (ISO timestamp)

2. Add lock files at `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.codex/locks/<lock_id>.json`.
Schema:
- `lock_id`
- `task_id`
- `branch`
- `worktree_path`
- `owner` (agent/session identifier)
- `scope_in` (path array)
- `created_at`
- `expires_at`
- `status` (`active` or `released`)

3. New command interface:
- `node /Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex/task-preflight.js --task <id> --slug <slug> --base docs-v2 --scope-file <path>`
- `node /Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex/lock-acquire.js --contract .codex/task-contract.yaml`
- `node /Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex/lock-release.js --contract .codex/task-contract.yaml`
- `node /Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex/task-finalize.js --contract .codex/task-contract.yaml --profile <name>`

4. Hook/CI policy interface:
- Branch policy trailers:
  - `allow-main-commit=true`
  - `allow-codex-policy-bypass=true`
- No other bypasses accepted for AI workflows.

**Implementation Plan**
1. Add hard branch/worktree isolation.
- Update `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.githooks/pre-commit` to block commits on `docs-v2` unless human override trailer is present.
- Keep `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]` as human-only working tree in policy text.
- Require AI work on `codex/<task>-<slug>` branches only.
- Enforce task-contract branch match even when not on `codex/*` if `.codex/task-contract.yaml` exists.

2. Add path lock ownership.
- Create `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.codex/locks/`.
- Implement lock acquisition/release/validation scripts under `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex/`.
- Pre-commit fails when staged files overlap an active lock owned by another task/session.
- Lock expiry default: 8 hours, renewable by explicit command.

3. Enforce scope-limited staging and commit content.
- Extend `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/validate-codex-task-contract.js` to validate staged paths against `scope_in + allowed_generated` for all codex tasks.
- Block `git add -A` style broad staging by checking final staged set only, not command history.
- Keep deletion block policy, but require delete intent to be listed in contract if needed.

4. Keep and strengthen stash ban.
- Retain `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/check-no-ai-stash.sh`.
- Run it in pre-commit and pre-push.
- Add CI check that fails if branch tip introduces policy-violating stash metadata artifacts or task logs indicating stash usage in committed evidence files.

5. Add task preflight and finalize lifecycle.
- Create preflight script that creates worktree, creates `codex/` branch, writes task-contract scaffold, acquires lock, and prints exact next commands.
- Create finalize script that checks:
  - required files exist
  - legacy files removed/migrated per profile
  - link/index checks pass for changed scope
  - lock still active and owned by task
- Convert `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/verify-pay-orc-gate-finalize.sh` into a named finalize profile consumed by task-finalize.

6. Add CI governance gates that make `--no-verify` irrelevant.
- Add `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.github/workflows/codex-governance.yml`.
- CI jobs:
  - contract schema + branch binding validation
  - changed-file scope validation
  - lock overlap validation against lock manifests in active codex PRs
  - finalize profile validation when `finalize_profile` is set
- Mark this workflow as required on protected branches.

7. Protect trunk and enforce PR-only integration.
- Apply branch protection to `docs-v2`:
  - disallow direct pushes (except admins if you choose)
  - require PR
  - require `codex-governance` check
  - require linear history
- Document manual override procedure in policy docs with explicit audit trail requirement.

8. Add observability and incident audit tooling.
- Add `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex/audit-activity.js` to generate chronological timelines from git reflog, git log, and local VSCode/Codex metadata.
- Output markdown report to `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tasks/reports/agent-ops/`.

9. Update policy documentation and onboarding.
- Update `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.github/AGENTS.md` with immutable AI rules:
  - no stash
  - no commits from `docs-v2`
  - required preflight
  - required finalize
  - no scope violations
- Add runbook page under `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/docs-guide/` describing normal flow and emergency overrides.

10. Rollout in controlled phases.
- Phase 1 (same day): hook hardening + trunk block + lock scripts + contract validator update.
- Phase 2 (next day): CI governance + branch protection + preflight/finalize orchestration.
- Phase 3 (after 2 days stable): strict overlap blocking across active PRs and lock expiry alerts.

**Tests and Scenarios**
1. Single-agent happy path.
- Preflight creates worktree/branch/contract/lock.
- Commit with in-scope files passes.
- Finalize passes.
- Push passes with required CI.

2. Cross-agent overlap.
- Agent A lock includes `v2/gateways/payments/`.
- Agent B stages any file under same path.
- Pre-commit fails with lock ownership conflict.

3. Hidden-work prevention.
- Create untracked deliverable file.
- Attempt stash.
- Pre-commit/pre-push policy fails until stash cleared and file restored in branch workflow.

4. Trunk protection.
- Attempt commit on `docs-v2` without override trailer.
- Commit blocked.

5. Scope drift.
- Stage one allowed file plus one unrelated file.
- Contract validator fails commit.

6. Finalize profile enforcement.
- Missing required deliverable file for profile.
- Finalize fails with exact missing path list.

7. Legacy migration correctness.
- Finalize fails if required old path still exists when profile expects migration complete.

8. CI bypass resistance.
- Local commit with `--no-verify` succeeds locally.
- PR blocked by required `codex-governance` checks.

9. Regression check for existing hooks.
- Existing delete guard and allowlist guard still operate.
- Existing staged snapshot behavior remains deterministic.

10. Link/docs quality check integration.
- For content migrations, run:
  - `node /Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/generate-pages-index.js --staged`
  - `node /Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tests/integration/v2-link-audit.js --staged --strict --report /tmp/livepeer-link-audit-staged.md`

**Assumptions and Defaults**
1. Default policy is strict: AI commits are not allowed on `docs-v2`.
2. Human override is allowed only with explicit commit trailer and audited reason.
3. All AI tasks must use dedicated `codex/*` branch + dedicated worktree.
4. Contract scope is authoritative; out-of-scope edits are blocked, not warned.
5. Lock conflicts are fail-fast by default; no automatic merge/override.
6. Branch protection settings can be updated in GitHub repo admin.
7. Existing guard scripts remain and are integrated, not replaced.
