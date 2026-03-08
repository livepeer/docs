## Recovery + Hard Isolation Plan (Decision-Complete)

### Summary
We will treat the finalize contract as authoritative, complete the missing file migration, and harden workflow controls so this cannot recur.  
Root cause is concurrency + stash/revert churn in one shared worktree/branch, not a single editor process.

### Scope Authority (Locked)
1. Authoritative target/legacy contract is `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/verify-pay-orc-gate-finalize.sh`.
2. `docs.json` intentional placeholders (`" "` and `v2/resources/redirect`) remain allowed and are excluded from defect counts.
3. Canonical clearinghouse target path is `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/gateways/payments/payment-clearinghouse.mdx`.
4. Legacy clearinghouse path `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/gateways/run-a-gateway/payments/payment-clearinghouse.mdx` must be removed once references are migrated.

## Phase 0 — Immediate Containment (No More Churn)
1. Enforce human-only main worktree policy for `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]`.
2. Require all AI work to run only in dedicated codex worktrees with `codex/<id>-<slug>` branches.
3. Freeze concurrent AI sessions on the same git dir by lock-file gate before any staging/commit.

## Phase 1 — Deterministic Content Recovery
1. Create isolated recovery worktree from `docs-v2` branch.
2. Restore missing target files from the identified stash entry, path-scoped only to required deliverables.
3. Remove the four legacy files that the finalize contract marks as forbidden.
4. Produce one recovery commit containing only contract paths.

### Required restored targets
1. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/gateways/payments/how-payments-work.mdx`
2. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/gateways/payments/remote-signers.mdx`
3. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/gateways/payments/payment-clearinghouse.mdx`
4. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/gateways/payments/naap-platform.mdx`
5. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/orchestrators/about-orchestrators/naap-platform.mdx`
6. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/orchestrators/quickstart/realtime-ai.mdx`
7. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/orchestrators/quickstart/batch-ai.mdx`
8. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/orchestrators/quickstart/transcoding.mdx`

### Required removals
1. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/gateways/run-a-gateway/payments/payment-clearinghouse.mdx`
2. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/orchestrators/quickstart/realtime-ai-quickstart.mdx`
3. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/orchestrators/quickstart/batch-ai-quickstart.mdx`
4. `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/v2/orchestrators/quickstart/orchestrator-setup.mdx`

## Phase 2 — Route/Reference Migration Completion
1. Replace all repo references to `run-a-gateway/payments/payment-clearinghouse` with `gateways/payments/payment-clearinghouse`.
2. Update docs navigation and index references to canonical target path.
3. Keep intentional `docs.json` exceptions untouched.
4. Run staged route audit with policy allowlist so only actionable misses fail.

## Phase 3 — Hard Controls Implementation (Not Guidance)
1. Add preflight script to create isolated worktree + codex branch + task contract + lock in one command.
2. Add lock contract and enforce overlap failures in pre-commit and pre-push.
3. Enforce explicit-path staging for AI sessions and block `git add -A` patterns in hooks when AI lock is active.
4. Keep stash ban and enforce it in pre-push and CI, not only pre-commit.
5. Block AI commits on `docs-v2` unless explicit human override trailer is present.
6. Require codex branch + valid `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.codex/task-contract.yaml` for AI-tagged pushes.
7. Add CI changed-file scope enforcement from `scope_in` + `allowed_generated`.
8. Add PR conflict gate against overlapping active lock paths.
9. Add mandatory finalize script gate (exact required files + legacy absence) in pre-push + CI.

## Phase 4 — Implementation Surfaces
1. Update `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.githooks/pre-commit`.
2. Update `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.githooks/pre-push`.
3. Update `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/validate-codex-task-contract.js`.
4. Add `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex/preflight-task.sh`.
5. Add `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex/finalize-task.sh`.
6. Add `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/codex/validate-locks.js`.
7. Add lock schema docs in `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.codex/README.md`.
8. Add CI workflow checks under `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/.github/workflows/`.

### Lock schema (new internal interface)
```json
{
  "task_id": "string",
  "owner_type": "ai|human",
  "owner_id": "string",
  "branch": "string",
  "worktree": "absolute-path",
  "scope_in": ["repo-relative-path"],
  "created_at": "ISO-8601",
  "expires_at": "ISO-8601",
  "status": "active|released",
  "handoff_to": "optional-string"
}
```

## Test and Validation Plan
1. Contract gate: `bash /Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/verify-pay-orc-gate-finalize.sh` must pass.
2. Scope gate: `node /Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/validate-codex-task-contract.js --branch <codex-branch> --require-pr-body`.
3. Route audit: run staged link audit with explicit policy allowlist for intentional docs.json placeholders.
4. Hook enforcement tests:
   - commit from codex branch with valid lock should pass
   - overlapping lock path should fail
   - AI-tagged push to `docs-v2` without override should fail
   - stash presence for AI session should fail
5. Concurrency simulation:
   - session A lock scope and session B overlapping scope must block B
   - non-overlapping scope must pass
6. Recovery proof:
   - all 8 targets exist
   - all 4 legacy files absent
   - all references point to canonical target

## Rollout Order
1. Implement lock/preflight/finalize scripts.
2. Wire pre-commit and pre-push to new scripts.
3. Wire CI changed-file and lock-conflict checks.
4. Perform stash-based content recovery in isolated branch.
5. Complete route/reference migration and run full validation.
6. Open PR with evidence bundle.
7. Enable branch protections for `docs-v2` and require CI checks for merge.

## Public APIs / Interfaces / Types
1. No external product API changes.
2. New internal interfaces:
   - lock JSON schema
   - preflight/finalize script contracts
   - CI policy contract for AI branch + scope enforcement

## Assumptions
1. The stash evidence referenced in `/Users/alisonhaire/.codex/sessions/2026/03/04/rollout-2026-03-04T18-17-55-019cb7b5-df0b-7743-9392-9aa4edf1dd92.jsonl` remains available for deterministic restore.
2. `verify-pay-orc-gate-finalize.sh` remains the authoritative definition of required vs legacy files.
3. Intentional `docs.json` placeholders are permanent policy exceptions and not migration defects.
