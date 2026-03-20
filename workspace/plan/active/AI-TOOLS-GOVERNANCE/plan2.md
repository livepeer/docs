# AI-Tools Governance — Post-Completion Next Steps

**Created:** 2026-03-21
**Status:** Active
**Branch:** `docs-v2-dev`
**Predecessor:** [`plan.md`](plan.md) (Phases 1–9 complete)

This file covers work that emerged from or was deferred during Phases 1–9 of the AI-Tools Governance plan. Items are grouped by scope and sequencing dependency. Each phase has an explicit gate before work starts.

---

## Phase 1 — Close Out (no coord required)

> Safe, contained fixes. No dependencies on other plans. Execute directly.

### Task 1.1: Fix inventory generator bug
CHECKPOINT after this task.

**Problem:** `tools/scripts/generators/governance/catalogs/generate-ai-tools-inventory.js` imports `validateFullRegistry` from `tools/lib/ai-tools-registry.js` but that function is not in the module's exports. Running the generator with `--write-report` silently produces no output. The inventory report (`ai-tools/registry/ai-tools-inventory.md`) is stale at 215 rows (pre-Phase-8 state).

**Fix:**
1. Open `tools/lib/ai-tools-registry.js` and confirm the function name for the full-registry validation (the one that checks every entry against the schema + coverage). It may be named `validateRegistry`, `runFullValidation`, or similar.
2. Either:
   - Export the function: add it to `module.exports` at the bottom of the file, OR
   - Update the import in `generate-ai-tools-inventory.js` to use the correct exported name
3. Run `node tools/scripts/validators/governance/compliance/validate-ai-tools-registry.js --check --coverage` to confirm 0 errors (baseline before regeneration)
4. Run `node tools/scripts/generators/governance/catalogs/generate-ai-tools-inventory.js --write-report`
5. Verify `ai-tools/registry/ai-tools-inventory.md` now reflects 222 entries (current registry state)

**Verify:** `wc -l ai-tools/registry/ai-tools-inventory.md` → line count consistent with 222 entries.

---

### Task 1.2: Mark AI-Tools Governance plan complete
No checkpoint needed.

1. Add to the top of `tasks/plan/active/AI-TOOLS-GOVERNANCE/plan.md`:
   ```
   > **Status**: Complete — 2026-03-21. All phases (1–9) executed and committed.
   > Remaining items: see `plan2.md`
   ```
2. Move `plan.md`, `audit.md`, `audit-ai-adapters.md`, `handoff-docs-guide-path-updates.md` to `tasks/plan/complete/` via `git mv` (these are outputs, not active work).
3. Keep `plan2.md`, `structure.md` in `tasks/plan/active/AI-TOOLS-GOVERNANCE/` (still active).

---

### Task 1.3: Fix stale path reference in AGENTS.md

**Problem:** `AGENTS.md` references `node tools/scripts/validators/governance/check-agent-docs-freshness.js` but the actual path (post taxonomy restructure) is `tools/scripts/validators/governance/compliance/check-agent-docs-freshness.js`.

1. Open `AGENTS.md` and find the reference to `check-agent-docs-freshness.js`
2. Update path to include `compliance/` subdirectory
3. Run the script once to confirm it still resolves and passes

---

## Phase 2 — REPO-STRUCTURE-GOV Phase 0 (safe cleanup)

> Prerequisite: Phase 1 complete and committed.
> Scope: only the no-coordination-required items from `REPO-STRUCTURE-GOV/plan.md` Phase 0.
> Every sub-task has an explicit checkpoint.

### Task 2.1: Root file deletions
CHECKPOINT after this task.

| Action | Target | Reason |
|--------|--------|--------|
| Delete | `docs.json.bak` | Stale backup at root |
| Delete | `api/openapi.yaml.backup` | Stale backup in api/ |
| Delete | All `.DS_Store` files across repo | macOS noise |

Verify: `ls *.bak` at root returns nothing. `find . -name '.DS_Store' | grep -v node_modules` returns empty.

---

### Task 2.2: Rename `docs/` → `_dep-docs/`
CHECKPOINT after this task.

1. Confirm `docs/` has zero references in docs.json, v2/, AGENTS.md, any script (grep first)
2. `git mv docs/ _dep-docs/`
3. Add `/_dep-docs/**` to `.mintignore`
4. Add `/_dep-docs/**` entry to `.allowlist` (required — new top-level directory)
5. Extract any useful planning notes from `_dep-docs/` into `tasks/plan/active/REPO-STRUCTURE-GOV/_dep-docs-todo-notes.md` (a file already exists for this — append)
6. Set 30-day TTL: add note to `_dep-docs-todo-notes.md` that directory should be deleted by 2026-04-21

Commit with `--trailer "allowlist-edit=true"` (adding to `.allowlist`).

---

### Task 2.3: Clean up loose files in `tasks/plan/active/`
CHECKPOINT after this task.

1. `git mv "tasks/plan/active/dep-COPYWRITING FRAMEWORK" tasks/plan/complete/dep-COPYWRITING-FRAMEWORK` (archive completed/abandoned folder)
2. Identify the 4 loose `.md` files in `tasks/plan/active/` root (not inside a plan folder). Move each to the most appropriate plan folder or to `complete/`.

---

### Task 2.4: `docs-guide/` safe cleanup (pre-approval items only)
CHECKPOINT after this task.

These items from `REPO-STRUCTURE-GOV/plan.md 2A-II` do not require human approval:

1. Delete 3 stale `.codex/locks-local/` files (all from completed tasks, lock paths no longer exist):
   - `789-phase2b-component-migration-2026-03-08T03-08-50-208Z.json`
   - `808-governance-replay-2026-03-09T17-46-57-724Z.json`
   - `20260317-merge-readiness-style-root-cause-2026-03-16T16-43-42-131Z.json`
2. Delete the 5 empty `source-of-truth.md` stubs in `docs-guide/` (catalog, contributing, features, frameworks, policies) — 0-byte files with no refs

---

## Phase 3 — Human Decision Gates

> These items require a human decision before any code runs.
> Present each as a proposal; do not implement without approval.

### Task 3.1: `docs-guide/` restructure — approve or defer

**Decision required:** Review `tasks/plan/active/REPO-STRUCTURE-GOV/docs-guide-restructure-draft.md`. Choose one:

- **A — Approve now:** Sign off on Section 1 (structure) and Section 2 (naming framework). Execution follows `REPO-STRUCTURE-GOV/plan.md 2A-III` through `2A-V`.
- **B — Defer:** Mark as deferred with a target date. No execution until approved.

Gate items from the draft that need answers:
- Confirm `ai-tools.mdx` destination: `features/` (recommendation) or keep in `catalog/` as manual exception
- Confirm 5 missing `snippets/templates/docs-guide/` template types
- Approve new policy file: `docs-guide/policies/docs-guide-structure-policy.mdx`

---

### Task 3.2: Phase 5 skill consolidation decision

**Decision required:** Review the two consolidation candidates from Phase 5 of `AI-TOOLS-GOVERNANCE/plan.md`:

- **Candidate A:** Merge `docs-quality-and-freshness-audit` + `docs-coverage-and-route-integrity-audit` into a single content audit skill with `--mode` flag
- **Candidate B:** Merge `docs-review-packet-generation` + `docs-review-fix-execution` into a single review skill with `generate`/`execute` phases

Each candidate needs a decision: merge, keep separate, or deprecate one.

A decision document will be written first; no files touched until approved.

---

### Task 3.3: SOLUTIONS-SOCIAL-DATA next milestone

**Decision required:** Phase 1 of `SOLUTIONS-SOCIAL-DATA/plan.md` is complete (data pipeline reverse-engineered). Phase 2 needs a scope decision:

- Which product sections under `v2/solutions/` get social/data-feed additions first?
- What is the minimum viable template to create in `snippets/templates/pages/data-imports/`?
- Which data feeds are in scope for the first milestone: YouTube only? YouTube + Forum? All 5?

Once scoped, Phase 2 execution can be tasked.

---

### Task 3.4: `_workspace/` standardisation — approve Phase 3A

**Decision required:** Review `REPO-STRUCTURE-GOV/plan.md` Phase 3A — per-folder `_workspace/` recommendations:

| Root folder | Proposed subdirs |
|-------------|-----------------|
| `ai-tools/` | `skill-research/`, `rule-drafts/`, `archive/` |
| `api/` | `spec-drafts/`, `research/`, `archive/` |
| `snippets/` | `component-drafts/`, `asset-staging/`, `archive/` |
| `tools/` | `experiments/`, `archive/` |

Approve or adjust subdirectory names before Task 3A executes.

---

## Phase 4 — Low Priority / Health

> No hard dependencies. Execute when convenient.

### Task 4.1: Run audit pipeline end-to-end (Phase 5.3)

```bash
node tools/scripts/audits/governance/repo/repo-audit-orchestrator.js --mode static --scope full
```

Document which catalog skills produce useful output and which are aspirational. Update `structure.md` with findings.

---

### Task 4.2: `snippets/assets/` cleanup (Phase 2B from REPO-STRUCTURE-GOV)

Safe to execute without broad coordination. Execute item-by-item with individual checkpoints:

1. Delete `snippets/assets/domain/02_COMMUNITY/hero-images/` (~20 MB, zero refs confirmed in `REPO-STRUCTURE-GOV/audit/`)
2. Delete unused `domain/00_HOME/` hero variants (13 files, zero refs)
3. Consolidate `snippets/assets/logo/` → `snippets/assets/logos/`
4. Remove `snippets/assets/favicon.png` root duplicate
5. Evaluate `snippets/assets/data/protocol-overview.html` (4.3 MB)
6. Delete typo files: `Hero_Telegran.png`, `Hero_Yotube.png`

Each deletion: grep all refs first. Proceed only if zero results.

---

### Task 4.3: Script-governance cross-check

Confirm current status of `SCRIPT-GOVERNANCE/plan.md`:
- Identify which tasks are complete (struckthrough or dated)
- Identify remaining open tasks
- Confirm Task 14 (`tools/scripts/` → `operations/`) status — this gates `REPO-STRUCTURE-GOV/plan.md` Phase 1

Output: brief status note appended to `SCRIPT-GOVERNANCE/plan.md`.

---

## Verification (after all phases)

```bash
# Registry still clean
node tools/scripts/validators/governance/compliance/validate-ai-tools-registry.js --check --coverage
# → 0 errors, 222 entries

# Inventory now correct
wc -l ai-tools/registry/ai-tools-inventory.md
# → consistent with 222 entries

# Freshness check still passes
node tools/scripts/validators/governance/compliance/check-agent-docs-freshness.js
# → Summary: N files, N info, 0 warnings, 0 errors

# No stale flat paths remain in ai-tools governed areas
grep -rn "node tools/scripts/[a-z]" ai-tools/ \
  | grep -v "audits/\|validators/\|remediators/\|generators/\|dispatch/\|automations/\|source-content\|_workspace\|agent-packs/skills"
# → empty
```
