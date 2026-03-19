# Script Restructure & Governance Plan

> **Status**: Active
> **Created**: 2026-03-19
> **Source of truth**: This file for tasks. [`structure.md`](structure.md) for folder taxonomy and script assignments.
> **Branch**: `docs-v2-dev-scripts` (branched off `docs-v2-dev`)
> **Worktree**: `Docs-v2-dev-scripts`
> **Merge policy**: Merge back to `docs-v2-dev` after each completed task when safe. Sync any new `docs-v2-dev` changes into worktree before starting next task.
> **Deletion policy**: No deletions ever. All superseded files go to `x-archive/` via `git mv`. Only archive one script at a time, after its replacement is fully working, tested, and all downstream dependants have updated paths.
> **Sync policy**: Always `git fetch origin && git pull` on `docs-v2-dev` before creating worktree or starting any task.
> **Index/catalog policy**: Index and catalog regeneration scripts (`generate-docs-index`, `generate-pages-index`, `generate-component-registry`, `scripts-catalog`, etc.) must NEVER run in pre-commit. They run post-commit or post-PR only, via GitHub Actions workflows that auto-commit/push.

---

## Workflow

Every task follows this cycle:

1. **Sync** — pull latest `docs-v2-dev` into the worktree branch
2. **Do the work** in the worktree
3. **CHECKPOINT** — present results to human for review
4. **Human approves** — merge worktree branch back to `docs-v2-dev`
5. **Strikethrough** the task in this plan file (in the `Docs-v2-dev` working directory)

No task proceeds without human approval at the checkpoint.

---

## Problem statement

The pre-commit hook is 1,599 lines. It runs structural checks, unit tests, codex
validation, component governance, copy linting, pattern enforcement, style checks,
generated artifact freshness, MDX-safe validation, and docs-index generation —
all before every commit. It blocks daily workflows.

~70 scripts live flat in `tools/scripts/` root, plus ~50 in subdirectories. The
subdirectories that exist (`validators/`, `enforcers/`, `remediators/`) are a
start but inconsistent — validators live in both root and `validators/`.

Multiple scripts overlap: 3 grammar/spelling scripts, 3 page audit scripts, 3
script-auditing scripts, 5 SEO/OG scripts (3 deprecated but still present).

Scripts are fragmented, not orchestrated. No clear execution model for what runs
where, when, or why.

**Total scripts across repo: 179** (158 in tools/scripts/, 4 in .githooks/,
4 in .github/scripts/, 1 in tasks/scripts/, 8 in snippets/automations/, 4 config/data files)

---

## Parallel work — not in scope but noted

- **Component restructure** is happening separately. Sync note at `tasks/plan/active/COMPONENT-GOVERNANCE/script-thread-sync-note.md` — component branch updated `component-governance-utils.js` (new VALID_CATEGORIES, reduced GOVERNANCE_FIELDS, `@category`→`@type`). Not yet merged to `docs-v2-dev`. When it merges, paths in the updated file will need adjusting to match our new structure.
- **`/tools` folder restructure** happens AFTER all script work is complete.
- **`/api` folder** — only moves if it doesn't break Mintlify. May belong in `/tools` not scripts. Deferred.
- **`/ai-tools`** — skills aren't scripts. Stays out of scope. May belong in `/tools`. The `ai/` concern in scripts may later house some of these or move there.

---

## Future work — flagged for later plans

- **`.github/scripts/` and `.github/workflows/`** — organise GitHub Actions scripts using the same `<type>/<concern>/<niche>` model. Cannot move them (Actions requires `.github/` paths) but can restructure within `.github/scripts/`.
- **`ai-tools/` scripts** — organise any operational scripts inside `ai-tools/` using the same model.
- **Full unused-script sweep** — after restructure is done, run a comprehensive usage audit to find scripts that are never called from any hook, workflow, package.json, or other script.

---

## Folder taxonomy

Three-tier model: `<type> / <concern> / <concern-niche>`

All concerns are **homogeneous** — every type folder has the same four concern
folders. Content and governance **always** have niche sub-folders. Components has
two enforced niches (`documentation/`, `library/`). AI has niches where populated.

Full taxonomy index, folder structure, and script assignments are in
[`structure.md`](structure.md).

### Types (Layer 1)

| Folder | Purpose |
|---|---|
| `audits/` | Read-only scan, measure, report |
| `generators/` | Produce files from source-of-truth data |
| `validators/` | Enforce rules, pass/fail gate |
| `remediators/` | Bulk fix/repair |
| `dispatch/` | Dispatch work to agents, pipeline chaining |
| `automations/` | Automated pipelines — translation, data fetching, transforms |

### Concerns (Layer 2 — homogeneous across all types)

| Concern | What it covers |
|---|---|
| `content/` | Docs pages, copy, SEO, veracity, quality, reference, reconciliation |
| `components/` | Component library, registry, CSS, naming, documentation |
| `governance/` | Scripts about scripts, repo structure, agent docs, manifests, catalogs |
| `ai/` | AI-adjacent operations — LLM files, agent packaging, skills sync |

### Non-type folders

| Folder | Purpose |
|---|---|
| `config/` | Shared configuration, policy files, shared utility libraries |
| `x-archive/` | All superseded files via `git mv` — no deletions ever |

---

## Task 1 — Agree on folder taxonomy (interactive)

**Goal**: Lock down all folder names, concern-niches, and script assignments before moving anything.
No code changes. Just naming decisions.

### Tasks

- [ ] **1.1** Review and approve Layer 1 type folders
- [ ] **1.2** Review and approve Layer 2 concern folders (content, components, governance, ai)
- [ ] **1.3** Review and approve niche folders per type × concern (see [`structure.md`](structure.md))
- [ ] **1.4** Lock the taxonomy — mark all items as APPROVED in structure.md

---

## Task 2 — Set up worktree and move dead code to x-archive

**Goal**: Create the working worktree. Move confirmed dead scripts to `x-archive/` via `git mv`.

### Tasks

- [x] ~~**2.1** Create worktree: `git worktree add ../Docs-v2-dev-scripts -b docs-v2-dev-scripts docs-v2-dev`~~
- [x] ~~**2.2** Create `tools/scripts/x-archive/` folder~~
- [x] ~~**2.3** `git mv` the 8 confirmed dead scripts to `x-archive/`~~
- [x] ~~**2.4** Update any import paths or references that would break (point to replacements or remove dead references)~~
- [x] ~~**2.5** **CHECKPOINT** — show diff to human for approval~~
- [x] ~~**2.6** Commit + merge back to `docs-v2-dev`~~
- [x] ~~**2.7** Strikethrough completed tasks in this plan~~

### Confirmed dead scripts (git mv to x-archive)

| Script | Reason |
|---|---|
| `dev/seo-generator-safe.js` | Deprecated — header says use canonical workflow |
| `dev/update-og-image.js` | Deprecated — header says use canonical workflow |
| `dev/update-all-og-images.js` | Deprecated — header says use canonical workflow |
| `dev/batch-update-og-image.sh` | Deprecated — header says use canonical workflow |
| `dev/replace-og-image.py` | Deprecated — header says use canonical workflow |
| `codex-safe-merge-with-stash.js` | Compatibility shim — directs to task-finalize |
| `verify/.verify-large-change.sh` | No-op placeholder |
| `redirects/sync-legacy-root-v1.js` | Not needed |

---

## Task 3 — Gut the pre-commit hook

**Goal**: Reduce pre-commit to < 5 seconds. Move everything else to GitHub Actions
workflows triggered on `pull_request` events (`test-suite.yml`, `codex-governance.yml`, etc.)
or to scheduled cron workflows that self-heal.

### Hard gates (KEEP in pre-commit)

| Check | Why it must block |
|---|---|
| MDX syntax validation | Broken pages can't be previewed |
| docs.json schema check | Broken nav = broken site |
| File deletion guard | Prevents accidental data loss |
| .allowlist / v1 freeze | Security boundary |
| Codex branch isolation | AI safety gate |

### Tasks

- [x] ~~**3.1** Sync worktree with latest `docs-v2-dev`~~
- [x] ~~**3.2** Extract the 5 hard gates into a new minimal pre-commit hook (1598 → 448 lines)~~
- [x] ~~**3.3–3.10** Soft checks already run in PR workflows (`test-suite.yml` → `run-pr-checks.js`). Index generation runs post-merge (`generate-docs-index.yml`). No new workflow changes needed — pre-commit was running them redundantly.~~
- [x] ~~**3.11** **CHECKPOINT** — new pre-commit approved~~
- [x] ~~**3.12** Pre-commit is hard gates only — no Node.js test suites, no generators, no cache. Expected < 5s.~~
- [x] ~~**3.13** Old pre-commit saved to `x-archive/pre-commit-v1`~~
- [x] ~~**3.14** Updated `.githooks/README.md` and `BYPASS.md` to reflect new scope~~
- [x] ~~**3.15** Commit + merge back to `docs-v2-dev`~~
- [x] ~~**3.16** Strikethrough completed tasks in this plan~~

---

## Task 4 — Restructure scripts into approved folders

**Goal**: Move every script into its approved `<type>/<concern>/<concern-niche>` home
per [`structure.md`](structure.md).

**Safety rule**: Move one script (or one tight group) at a time. After each move:
1. Update all downstream paths (package.json, workflows, hooks, imports)
2. Verify the moved script still works
3. Only then `git mv` the original to `x-archive/`

### Tasks

- [x] ~~**4.1** Sync worktree with latest `docs-v2-dev`~~
- [x] ~~**4.2** Create all approved folders (6 types × 4 concerns + niches)~~
- [x] ~~**4.3** Move audit scripts — `content/quality/`, `content/veracity/`, `components/documentation/`, `governance/scripts/`, `governance/repo/`~~
- [x] ~~**4.4** Move generator scripts — `content/catalogs/`, `content/seo/`, `content/reconciliation/`, `content/reference/`, `components/documentation/`, `components/library/`, `governance/catalogs/`, `governance/reports/`, `governance/scaffold/`, `ai/llm/`~~
- [x] ~~**4.5** Promote existing validators — `content/copy/`, `content/structure/`, `content/grammar/`, `components/documentation/`, `components/library/`, `governance/compliance/`, `governance/pr/`~~
- [x] ~~**4.6** Promote existing remediators — `content/repair/`, `content/style/`, `content/classification/`, `components/library/`~~
- [x] ~~**4.7** Create `dispatch/` — `governance/codex/`, `governance/pipelines/`, `ai/agents/`~~
- [x] ~~**4.8** Create `automations/` — `content/language-translation/` (preserved lib/ and test/), `content/data/fetching/`, `content/data/transforms/`~~
- [x] ~~**4.9** Move `enforcers/` content into `validators/governance/pr/`~~
- [x] ~~**4.10** Move `dev/` contents to `/tools/dev/`~~
- [x] ~~**4.11** Create `config/` — moved shared config/policy/library files~~
- [x] ~~**4.12** Move `tasks/scripts/audit-python.py` to `audits/governance/repo/`~~
- [x] ~~**4.13** 120 scripts restructured, tree verified~~
- [x] ~~**4.14–4.19** Updated ~80 path references across package.json, tests, workflows, hooks, config~~
- [x] ~~**4.20** Merged to `docs-v2-dev`~~
- [x] ~~**4.21–4.22** Committed + strikethrough~~

---

## Task 5 — Review script naming and single-purpose (interactive)

**Goal**: Every script does one thing and its filename describes that thing.

> **CHECKPOINT**: This task starts with an interactive review. Present each script's
> current name vs proposed name, flag scripts that do too many things and need
> splitting. Human approves before any changes.

### Tasks

- [x] ~~**5.1** Sync worktree with latest `docs-v2-dev`~~
- [x] ~~**5.2** **INTERACTIVE** — presented 7 scripts with naming issues~~
- [x] ~~**5.3** Human approved: 4 renames + codex move to `dispatch/ai/` + UK English (finalise)~~
- [x] ~~**5.4** Executed renames: pattern-observer→audit-copy-patterns, audit-scripts→audit-script-categories, cleanup-quarantine-manager→quarantine-manager, repair-governance→governance-pipeline, task-finalize→task-finalise~~
- [x] ~~**5.5** Moved `dispatch/governance/codex/` → `dispatch/ai/codex/` + `pattern-observer` from `veracity/` to `quality/`~~
- [x] ~~**5.6** No splits needed — all scripts do one thing~~
- [x] ~~**5.7–5.9** Committed + merged~~

---

## Task 6 — Consolidate overlapping scripts (interactive)

**Goal**: Where scripts genuinely overlap (do the same thing), consolidate. Scripts
should be composable into pipelines — do NOT merge scripts that have distinct
purposes just because they touch similar areas.

> **CHECKPOINT**: This task starts with an interactive review. Present each
> consolidation candidate with evidence of actual overlap. Human decides.

### Known candidates (verify before acting)

| Candidate | Evidence of overlap | Decision |
|---|---|---|
| `audit-scripts` + `audit-script-inventory` + `script-footprint-and-usage-audit` | All three audit scripts about scripts — verify they aren't complementary pipeline stages | PENDING |
| `generate-docs-guide-components-index` + `generate-docs-guide-indexes` + `generate-docs-guide-pages-index` | All generate docs-guide index pages — verify they aren't distinct outputs | PENDING |
| Others TBD from Task 5 findings | | |

### Tasks

- [x] ~~**6.1** Sync worktree with latest `docs-v2-dev`~~
- [x] ~~**6.2** **INTERACTIVE** — analysed both overlap candidates: script auditors are complementary pipeline stages (Script 3 reads Script 1's output), docs-guide generators are independent parallel (different inputs, different outputs). Neither group should be consolidated.~~
- [x] ~~**6.3** Human approved: no consolidations needed~~
- [x] ~~**6.4–6.9** No changes — scripts are composable as-is~~

---

## Task 7 — Audit x-archive and legacy scripts (interactive)

**Goal**: Understand what's in x-archive and legacy. No deletions — just classification.

> **CHECKPOINT**: Interactive review. Present findings, human decides classification.

### Tasks

- [ ] **7.1** Sync worktree with latest `docs-v2-dev`
- [ ] **7.2** **INTERACTIVE** — audit each script in `x-archive/` — classify as: confirmed dead, possibly useful, keep for reference
- [ ] **7.3** **INTERACTIVE** — audit `archive/legacy/` (14 scripts) — flag unique logic vs pure duplicates
- [ ] **7.4** **INTERACTIVE** — audit `archive/deprecated/` (2 scripts) and `archive/fixtures/` (2 files)
- [ ] **7.5** Human approves classification
- [ ] **7.6** `git mv` any remaining `archive/` contents into `x-archive/`
- [ ] **7.7** Update `x-archive/` with README documenting classification
- [ ] **7.8** Commit + merge back to `docs-v2-dev`
- [ ] **7.9** Strikethrough completed tasks in this plan

---

## Task 8 — Performance and optimisation

**Goal**: Every script is efficient — no hardcoding, no redundant work, correct
error handling. Script-by-script review.

### Tasks

- [x] ~~**8.1** Decided JSDoc tag standard (11 tags — spec in structure.md)~~
- [x] ~~**8.2** Built migration script (update-jsdoc-headers.js)~~
- [x] ~~**8.3** Migrated 112 scripts to new standard (auto-derived type/concern/niche from folder paths)~~
- [x] ~~**8.4** Committed + merged~~
- [ ] **8.5** (Task 9) Clean up @usage old paths and @pipeline duplicate/placeholder values

---

## Task 9 — Performance and optimisation

**Status**: ~~Complete~~

- [x] ~~**9.1** Fixed @usage paths on 117 scripts (stale after restructure)~~
- [x] ~~**9.2** Cleaned @pipeline duplicate values~~
- [x] ~~**9.3** Performance audit: 2 readFileSync-in-loop issues found (generate-docs-index.js, generate-seo.js) — both run post-commit/manually only, not blocking. Flagged for future async refactor.~~
- [x] ~~**9.4** No hardcoded paths, no port 3000, no console.log-for-errors, no unreachable code.~~

---

## Task 10 — Define governance tiers + documentation

**Goal**: Every script has a tier. Governance is documented in `docs-guide/`.
One source of truth for script documentation and auto-generation.

### Three tiers

| Tier | Gate type | Scope | Runs where |
|---|---|---|---|
| **Hard gate** | Blocks commit or merge | Syntax, security, AI isolation | Pre-commit + required GitHub Actions status check |
| **Soft gate** | Warns in PR, does not block merge | Style, quality, freshness | GitHub Actions check (non-required) |
| **Self-heal** | No gate — auto-fixes on schedule | Generated artifacts, formatting, metadata | Cron workflow with auto-PR |

### Move to cron (self-healing)

| Check | Schedule | Self-heal action |
|---|---|---|
| Governance repair | Weekly (already: `repair-governance.yml`) | Auto-fix + PR |
| Content freshness audit | Weekly (already: `freshness-monitor.yml`) | Issue creation |
| Script metadata enforcement | Weekly | Auto-fix + PR |
| Grammar/spelling sweep | Weekly | Auto-fix + PR |
| Media asset audit | Monthly | Report |
| Component docs regen | On component change (already workflow trigger) | Auto-commit |

### Tasks

- [x] ~~**10.1** Rewrote `tools/scripts/README.md` with taxonomy, JSDoc standard, catalog link~~
- [x] ~~**10.2** Fixed stale paths in AGENTS.md (codex paths, generate-docs-guide-indexes)~~
- [x] ~~**10.3** Fixed stale paths in contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md (codex lifecycle)~~
- [x] ~~**10.4** Fixed stale paths in 8 docs-guide/policies/ files~~
- [x] ~~**10.5** Fixed stale paths in .codex/README.md, task-contract.yaml~~
- [x] ~~**10.6** Fixed stale paths in .github/augment-instructions.md~~
- [x] ~~**10.7** Committed + merged~~
- [ ] **10.8** Regenerate `docs-guide/catalog/scripts-catalog.mdx` (deferred — auto-generated, will pick up new paths)
- [ ] **10.9** Governance tier manifest (`tools/config/script-governance.json`) — deferred to future work

---

## Task 10 — Full testing

**Goal**: Comprehensive test pass over all restructured scripts.

### Tasks

- [ ] **10.1** Sync worktree with latest `docs-v2-dev`
- [ ] **10.2** Run full test suite: `npm test --prefix tests`
- [ ] **10.3** Run link/import validation to catch broken references
- [ ] **10.4** Run each script type's own validation (generators generate correctly, validators validate correctly, etc.)
- [ ] **10.5** Verify all GitHub Actions workflows still reference correct paths
- [ ] **10.6** Verify pre-commit hook works with new paths
- [ ] **10.7** **CHECKPOINT** — present full test results to human
- [ ] **10.8** Fix any failures
- [ ] **10.9** Commit + merge back to `docs-v2-dev`
- [ ] **10.10** Strikethrough completed tasks in this plan

---

## Task 11 — Audit implementation issues (per-script)

**Goal**: Understand what each script actually does. Catch bugs, dead code, logic
errors, and correctness issues. Must happen BEFORE enforcing best practices —
can't standardise scripts we haven't verified are correct.

### Tasks

- [ ] **11.1** Sync worktree with latest `docs-v2-dev`
- [ ] **11.2** Audit each script for: clear single purpose, dead code paths, unreachable branches, incorrect assumptions about file structure, race conditions in file I/O, missing null/undefined guards, incorrect regex patterns
- [ ] **11.3** **CHECKPOINT** — present findings to human
- [ ] **11.4** Execute approved fixes
- [ ] **11.5** **CHECKPOINT** — show results to human
- [ ] **11.6** Commit + merge back to `docs-v2-dev`
- [ ] **11.7** Strikethrough completed tasks in this plan

---

## Task 11a — Reclassification Wave 1: dispatch→automation/validator (11 scripts)

**Goal**: Move 11 clear-cut mistyped scripts. See [`reclassification-plan.md`](reclassification-plan.md) for full details.

### Tasks

- [ ] **11a.1** `git mv` 8 dispatch→automation scripts + 2 dispatch→validator + 1 automation→validator
- [ ] **11a.2** Update all path references (package.json, workflows, hooks, tests, imports)
- [ ] **11a.3** Update `@type` in each script's JSDoc header
- [ ] **11a.4** Run broken-require checker
- [ ] **11a.5** Run `npm test --prefix tests`
- [ ] **11a.6** **CHECKPOINT** — show diff to human
- [ ] **11a.7** Commit + merge back to `docs-v2-dev`

---

## Task 11b — Reclassification Wave 2: generator→audit (5 scripts)

### Tasks

- [ ] **11b.1** `git mv` 5 generator scripts to audits/
- [ ] **11b.2** Update all path references
- [ ] **11b.3** Update `@type` in headers
- [ ] **11b.4** Run broken-require checker + test suite
- [ ] **11b.5** **CHECKPOINT** — show diff to human
- [ ] **11b.6** Commit + merge back to `docs-v2-dev`

---

## Task 11c — Reclassification Wave 3: generator→remediator + remediator→audit (4 scripts)

### Tasks

- [ ] **11c.1** `git mv` 3 generator scripts to remediators/ + 1 remediator to audits/
- [ ] **11c.2** Update all path references
- [ ] **11c.3** Update `@type` in headers
- [ ] **11c.4** Run broken-require checker + test suite
- [ ] **11c.5** **CHECKPOINT** — show diff to human
- [ ] **11c.6** Commit + merge back to `docs-v2-dev`

---

## Task 11d — Reclassification Wave 4: audit→dispatch/validator + concern fix (7 scripts)

**Higher risk** — veracity pipeline has cross-references.

### Tasks

- [ ] **11d.1** `git mv` 3 audit scripts to dispatch/ + 1 to validators/ + 1 concern fix (audit-python.py)
- [ ] **11d.2** Discuss `docs-research-adjudication.js` — split 3 modes or keep + document?
- [ ] **11d.3** Update all path references
- [ ] **11d.4** Update `@type` in headers
- [ ] **11d.5** Run broken-require checker + full test suite
- [ ] **11d.6** Verify veracity pipeline scripts still chain correctly
- [ ] **11d.7** **CHECKPOINT** — show diff to human
- [ ] **11d.8** Commit + merge back to `docs-v2-dev`

---

## Task 11e — Reclassification Wave 5: dual-purpose splits + overlaps (interactive)

**Highest risk** — splitting/consolidating scripts.

### Tasks

- [ ] **11e.1** **INTERACTIVE** — discuss approach for each of the 8 dual-purpose validators (split vs document)
- [ ] **11e.2** **INTERACTIVE** — discuss overlap pairs (lint-copy/lint-patterns, glossary/terminology, header writers, backfill unification)
- [ ] **11e.3** Resolve `.vscode/components.code-snippets` output conflict
- [ ] **11e.4** Execute approved splits/consolidations
- [ ] **11e.5** Run full test suite
- [ ] **11e.6** **CHECKPOINT** — show final state to human
- [ ] **11e.7** Commit + merge back to `docs-v2-dev`

---

## Task 11f — Post-reclassification testing

### Tasks

- [ ] **11f.1** Run broken-require checker across entire repo
- [ ] **11f.2** Run `npm test --prefix tests`
- [ ] **11f.3** Verify all `@type` tags match their folder location
- [ ] **11f.4** Update `catalog.md` and `structure.md` to reflect final state
- [ ] **11f.5** **CHECKPOINT** — confirm clean state
- [ ] **11f.6** Commit + merge back to `docs-v2-dev`

---

## Task 12 — Enforce best practices (per-script)

**Goal**: Apply consistent coding standards to audited, verified scripts.
Config params at top, no magic strings, consistent error handling, clear exit codes.

### Tasks

- [ ] **12.1** Sync worktree with latest `docs-v2-dev`
- [ ] **12.2** Enforce: config/constants at top of file, magic strings/numbers extracted, consistent error handling, missing usage/help output, hardcoded repo paths vs `process.cwd()`
- [ ] **12.3** **CHECKPOINT** — present findings to human
- [ ] **12.4** Execute approved fixes
- [ ] **12.5** **CHECKPOINT** — show results to human
- [ ] **12.6** Commit + merge back to `docs-v2-dev`
- [ ] **12.7** Strikethrough completed tasks in this plan

---

## Task 12c — Testing (post-best-practices verification)

**Goal**: Verify nothing broke from best-practice and implementation fixes.

### Tasks

- [ ] **12c.1** Sync worktree with latest `docs-v2-dev`
- [ ] **12c.2** Run full test suite: `npm test --prefix tests`
- [ ] **12c.3** Run broken-require path checker
- [ ] **12c.4** **CHECKPOINT** — present results to human
- [ ] **12c.5** Fix any failures
- [ ] **12c.6** Commit + merge back to `docs-v2-dev`
- [ ] **12c.7** Strikethrough completed tasks in this plan

---

## Task 14 — Root restructure: create `/operations`

**Goal**: Move `tools/scripts/` and `tests/` under a new root `/operations` directory.
This task runs after all internal script restructuring is complete and tested.

> **NOTE**: `/tools` restructure is a separate follow-up effort after this plan completes.
> `/api` only moves if it doesn't break Mintlify — deferred, may belong in `/tools`.
> `/ai-tools` stays out of scope — skills aren't scripts, may belong in `/tools`.

### Target

```
/operations/
  scripts/            # everything from tools/scripts/ (now restructured)
    audits/
    generators/
    validators/
    remediators/
    dispatch/
    automations/
    config/
    x-archive/
  tests/              # everything from /tests
```

### Tasks

- [ ] **14.1** Sync worktree with latest `docs-v2-dev`
- [ ] **14.2** Create `/operations` root directory
- [ ] **14.3** `git mv` `tools/scripts/` to `/operations/scripts/`
- [ ] **14.4** `git mv` `tests/` to `/operations/tests/`
- [ ] **14.5** Update all path references (package.json, workflows, hooks, imports, docs)
- [ ] **14.6** **CHECKPOINT** — show full tree + test results to human
- [ ] **14.7** Commit + merge back to `docs-v2-dev`
- [ ] **14.8** Strikethrough completed tasks in this plan

---

## Task 15 — Full cleanup

**Goal**: Review and reconcile `x-archive/`. No files are deleted — all superseded
files stay in `x-archive/` via `git mv` to preserve history.

### Tasks

- [ ] **15.1** Sync worktree with latest `docs-v2-dev`
- [ ] **15.2** Review `x-archive/` contents — confirm each item has a working replacement and no remaining live references
- [ ] **15.3** Verify all old `archive/` contents are reconciled into `x-archive/`
- [ ] **15.4** Add README to `x-archive/` documenting what's in there and why
- [ ] **15.5** Final grep for any orphaned references to old paths
- [ ] **15.6** **CHECKPOINT** — show clean state to human
- [ ] **15.7** Commit + merge back to `docs-v2-dev`
- [ ] **15.8** Strikethrough completed tasks in this plan

---

## Task 16 — Final merge to docs-v2-dev

**Goal**: Clean merge of all work back to `docs-v2-dev`. Verify branch is clean.

### Tasks

- [ ] **16.1** Ensure all prior task merges are complete
- [ ] **16.2** Verify `docs-v2-dev` has all changes
- [ ] **16.3** Run full test suite on `docs-v2-dev` directly
- [ ] **16.4** **CHECKPOINT** — confirm with human
- [ ] **16.5** Strikethrough completed tasks in this plan

---

## Task 17 — Close out

**Goal**: Final cleanup and plan completion.

### Tasks

- [ ] **17.1** Reconcile `snippets/components/catalog.md` with completed restructure
- [ ] **17.2** Reconcile any other plan files in `tasks/plan/active/` that overlap
- [ ] **17.3** Remove worktree: `git worktree remove ../Docs-v2-dev-scripts`
- [ ] **17.4** Move this plan to `tasks/plan/completed/`
- [ ] **17.5** Strikethrough all remaining tasks

---

## Execution summary

| Task | What | Human checkpoint |
|---|---|---|
| **1** | Agree on folder taxonomy | Interactive: approve each name |
| **2** | Set up worktree + x-archive dead code | Before merge |
| **3** | Gut the pre-commit hook | Before merge |
| **4** | Restructure into approved folders | Before moves + after tests |
| **5** | Review naming + single-purpose | Interactive: approve renames/splits |
| **6** | Consolidate overlapping scripts | Interactive: approve each consolidation |
| **7** | Audit x-archive + legacy | Interactive: classify each script |
| **8** | Performance + optimisation | Before/after changes |
| **9** | Governance tiers + documentation | Before tier assignments |
| **10** | Full testing (post-restructure) | Before merge |
| **11** | Deep audit all 120 scripts (done — see audit-report.md) | Report complete |
| **11a** | Reclassification Wave 1: dispatch→automation/validator (11) | Before merge |
| **11b** | Reclassification Wave 2: generator→audit (5) | Before merge |
| **11c** | Reclassification Wave 3: generator→remediator + remediator→audit (4) | Before merge |
| **11d** | Reclassification Wave 4: audit→dispatch/validator (7) | Before merge |
| **11e** | Reclassification Wave 5: dual-purpose splits + overlaps | Interactive |
| **11f** | Post-reclassification testing | Before merge |
| **12** | Enforce best practices (per-script) | Before/after changes |
| **12c** | Testing (post-best-practices) | Before merge |
| **14** | Root restructure to `/operations` | Before merge |
| **15** | Full cleanup (x-archive reconciliation) | Before merge |
| **16** | Final merge to docs-v2-dev | Before merge |
| **17** | Close out | Final review |

---

## Notes

- Old script governance reference: https://docs.google.com/document/d/1P8Y5F-dKV3jR8c3p8KZy8kzxOMNXE18LBRuuLYMDSS8/edit?usp=sharing
- Auto-generated catalog at `docs-guide/catalog/scripts-catalog.mdx` is produced by `tests/unit/script-docs.test.js` from script headers. Moving scripts auto-updates it once paths + headers are correct.
- `snippets/components/catalog.md` contains working notes for broader repo restructure — reconcile in Task 14.
- `luma-calendar.jsx` — belongs in `snippets/automations/` (data component, not a script).
