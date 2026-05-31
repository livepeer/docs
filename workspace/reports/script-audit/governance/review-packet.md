# Script audit — governance concern

Generated 2026-05-24

**119 scripts** in this concern.

## audit (6)

### `operations/scripts/audits/governance/repo/audit-folder-allowlist.js`

**Niche:** repo

**Purpose:** Scheduled audit of folder-allowlist drift across all governed folders (D-GOV-08 layer 5)

**Description:** Layer-5 fail-safe drift scanner. Reads every governed folder's .allowlist, lists actual entries, and reports drift to workspace/reports/governance/folder-allowlist/. Anything caught here represents an upstream layer (write-time hook, pre-commit, PR validator, post-merge) that failed to prevent the file from landing.

**Scope:** repo root, .github/, ai-tools/, docs-guide/, tools/config/, snippets/, workspace/ (any folder declaring .allowlist)

**Reads (2):** `tools/lib/governance/folder-allowlist`, `workspace/reports/governance/folder-allowlist`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-folder-allowlist.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/governance/scripts/audit-script-categories.js`

**Niche:** scripts

**Purpose:** Audit analyses all repo scripts, categorises usage/overlap, generates SCRIPT_AUDIT reports

**Description:** Script auditor — analyses all repo scripts, categorises usage/overlap, generates SCRIPT_AUDIT reports

**Scope:** operations/scripts, workspace/README.md, workspace/reports, operations/tests/unit/script-docs.test.js, operations/tests/README.md

**Reads (1):** `workspace/README.md`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/governance/repo/audit-script-purpose-fit.js`

**Niche:** repo

**Purpose:** Semantic SME audit: for every script in the repo, surface @purpose, inputs read, outputs written, callers, and auto-flags so the SME can verdict keep/refactor/merge/archive per concern

**Description:** Walks operations/scripts/ and tools/scripts/. Parses JSDoc 11-tag block. Statically scans the source for file reads, writes, and require calls. Greps callers across workflows + other scripts. Cross-checks the @concern tag against the 7 canonical concerns. Flags writes outside governed folders, reads from archive paths, vague purposes, duplicate niches, and orphans. Outputs per-concern markdown packets the SME reviews to verdict each script. The SME records verdicts in script-registry.json as sme_status.

**Scope:** operations/scripts/**, tools/scripts/**

**Reads (3):** `operations/scripts`, `tools/scripts`, `workspace/reports/script-audit`

**Writes (0):** _(none detected)_

**Callers (1):** `operations/scripts/remediators/governance/scaffold/backfill-vague-purpose.js`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/governance/repo/audit-tasks-folders.js`

**Niche:** repo

**Purpose:** Checks workspace/ structure, normalises report locations, applies recommendations with conflict-safe moves

**Description:** Tasks folder auditor — checks workspace/ structure, normalises report locations, applies recommendations with conflict-safe moves

**Scope:** operations/scripts, tasks

**Reads (2):** `tasks`, `tools/scripts`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/governance/dispatch-workspace-retention.js`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js`

**Niche:** reports

**Purpose:** Audit inventories non-publishable and legacy v2 artifacts and emits human-review markdown/json recommendations before any moves are applied.

**Description:** V2 folder governance cleanup matrix generator — inventories non-publishable and legacy v2 artifacts and emits human-review markdown/json recommendations before any moves are applied.

**Scope:** operations/scripts, tools/lib, workspace/reports/repo-ops, v2, docs.json operations/tests/unit/v2-folder-governance-cleanup-matrix.test.js

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (4):** `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/gap-analysis.mdx`, `docs-guide/policies/v2-folder-governance.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js`

**Niche:** scripts

**Purpose:** Audit analyses script file sizes, dependencies, and usage patterns across the repo

**Description:** Script footprint auditor — analyses script file sizes, dependencies, and usage patterns across the repo

**Scope:** operations/scripts, operations/tests, workspace/reports, ai-tools/ai-skills

**Reads (4):** `operations/config/workspace/retention/report-retention-policy.json`, `workspace/reports`, `workspace/reports/repo-ops/SCRIPT_AUDIT.json`, `operations/tests`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/remediators/content/repair/quarantine-manager.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/gap-analysis.mdx`, `docs-guide/policies/skill-pipeline-map.mdx`, `docs-guide/repo-ops/config/repo-config-map.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## dispatch (47)

### `operations/scripts/dispatch/governance/blast-radius-scanner.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the postToolUse hook for Edit/Write. When a file in snippets/components/,

**Description:** PostToolUse hook for Edit/Write. When a file in snippets/components/,

**Scope:** .claude/settings.json PostToolUse hook (Edit|Write matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js`

**Niche:** codex

**Purpose:** Detect conflicting Codex agent PRs that target overlapping files or branches — prevents two parallel Codex sessions from racing on the same scope before either lands

**Description:** Lists open codex/* PRs via gh CLI, extracts the changed-file set per PR, flags pairs whose changed-file sets intersect. Used by the Codex pre-task workflow to abort a session before it starts work on territory another agent already claimed.

**Scope:** operations/scripts, .github/workflows, codex PR governance

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/ai/codex/codex-commit.js`

**Niche:** codex

**Purpose:** Audit the current Codex agent's branch state and generate a compliant commit message that follows the repo's commit-message conventions and Codex task-isolation standard

**Description:** Invoked by the Codex AI agent at end-of-task. Inspects staged changes, validates branch is on codex/* prefix, checks for AI stash markers, generates a commit message that includes the task ID and follows the repo's `<type>(<scope>): <subject>` convention. Pairs with the Codex skills-manifest entry for end-of-task commits.

**Scope:** operations/scripts, .githooks, ai-tools/ai-rules

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/completion-gate.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the preToolUse hook for Write/Edit. Detects writes to session-log.txt,

**Description:** PreToolUse hook for Write/Edit. Detects writes to session-log.txt,

**Scope:** .claude/settings.json PreToolUse hook (Write|Edit matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `.claude/settings.json`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/ai/codex/create-codex-pr.js`

**Niche:** codex

**Purpose:** Create a GitHub PR from a completed Codex task branch with the canonical branch-naming convention, required labels, and a body template derived from the .codex/task-contract.yaml manifest

**Description:** Invoked by the Codex AI agent at end-of-task after codex-commit. Reads .codex/task-contract.yaml for task ID, summary, scope. Validates branch name matches the codex/* pattern, opens PR via gh CLI with required labels (codex, ai-generated, task:{id}) and body containing summary + acceptance criteria + linked task. Pairs with the Codex skills-manifest entry.

**Scope:** operations/scripts, .codex/task-contract.yaml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/ai/codex/task-finalise.js`, `docs-guide/contributing/contributing.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/research-skill-workflow.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-action-docs.js`

**Niche:** action-docs

**Purpose:** Pipeline dispatcher for action-docs (full lifecycle: detect → repair → verify → escalate)

**Description:** Self-doc pipeline: regenerate actions-library on workflow changes.

**Scope:** .github/workflows/, .github/workspace/actions-library/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-generate.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-codex-compliance.js`

**Niche:** codex-compliance

**Purpose:** Pipeline dispatcher for codex-compliance (full lifecycle: detect → repair → verify → escalate)

**Description:** Codex branch + task contract compliance.

**Scope:** codex/* branches

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-folder-allowlist.js`

**Niche:** folder-allowlist

**Purpose:** Pipeline dispatcher for D-GOV-08 folder-allowlist enforcement (full lifecycle)

**Description:** Pipeline orchestrator. Mode-driven entry point: --mode pr (detect + advisory comment), --mode scheduled (audit + repair + verify + rolling issue), --mode manual (repair-only with --verify). Wraps the three atomic scripts (check / audit / repair) into one composable lifecycle. Independently runnable locally via `node dispatch-folder-allowlist.js --dry-run`.

**Scope:** all governed folders (any folder declaring .allowlist)

**Reads (3):** `operations/scripts/validators/governance/repo/check-folder-allowlist.js`, `operations/scripts/audits/governance/repo/audit-folder-allowlist.js`, `operations/scripts/remediators/governance/repo/repair-folder-allowlist.js`

**Writes (0):** _(none detected)_

**Callers (9):** `operations/scripts/audits/governance/repo/audit-folder-allowlist.js`, `operations/scripts/dispatch/governance/dispatch-governance-scan.js`, `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `operations/scripts/dispatch/governance/dispatch-governance-sync.js`, `operations/scripts/remediators/governance/repo/repair-folder-allowlist.js` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-governance-check.js`

**Niche:** meta

**Purpose:** check meta dispatcher: bundles governance pipelines in --mode pr

**Description:** PR meta for governance concern.

**Scope:** all governance pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-governance.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-governance-generate.js`

**Niche:** meta

**Purpose:** generate meta dispatcher: bundles governance pipelines in --mode post-merge

**Description:** Self-doc generate meta.

**Scope:** all governance pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (0):** _(none detected — orphan?)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-governance-map.js`

**Niche:** governance-map

**Purpose:** Pipeline dispatcher for governance-map (full lifecycle: detect → repair → verify → escalate)

**Description:** Governance markers validity + drift repair pipeline.

**Scope:** GOVERNANCE.md markers across repo

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/governance/dispatch-governance-scan.js`, `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `operations/scripts/dispatch/governance/dispatch-governance-sync.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-governance-scan.js`

**Niche:** meta

**Purpose:** scan meta dispatcher: bundles governance pipelines in --mode scheduled

**Description:** Scheduled meta for governance scans.

**Scope:** all governance pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-governance.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-governance-sync.js`

**Niche:** meta

**Purpose:** sync meta dispatcher: bundles governance pipelines in --mode post-merge

**Description:** Post-merge meta for governance state repair.

**Scope:** all governance pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-governance.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js`

**Niche:** jsdoc-headers

**Purpose:** Pipeline dispatcher for jsdoc-headers (full lifecycle: detect → repair → verify → escalate)

**Description:** 11-tag JSDoc enforcement pipeline.

**Scope:** operations/scripts (all governed scripts)

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-new-file-governance.js`

**Niche:** new-file-governance

**Purpose:** Pipeline dispatcher for new-file-governance (full lifecycle: detect → repair → verify → escalate)

**Description:** New file metadata enforcement pipeline.

**Scope:** newly staged files

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-pipelines.js`

**Niche:** pipelines

**Purpose:** Pipeline dispatcher for pipelines (full lifecycle: detect → repair → verify → escalate)

**Description:** Weekly governance repair orchestrator wrapper.

**Scope:** cross-concern governance state

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-scan.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-root-governance.js`

**Niche:** root-governance

**Purpose:** Pipeline dispatcher for root-governance (full lifecycle: detect → repair → verify → escalate)

**Description:** Root governance artifact regen + sync check.

**Scope:** .allowlist, root manifests

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-sync.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-script-inventory.js`

**Niche:** script-inventory

**Purpose:** Pipeline dispatcher for script-inventory (full lifecycle: detect → repair → verify → escalate)

**Description:** Script registry inventory pipeline.

**Scope:** operations/scripts/**

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/governance/dispatch-governance-scan.js`, `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-script-locations.js`

**Niche:** script-locations

**Purpose:** Pipeline dispatcher for script-locations (full lifecycle: detect → repair → verify → escalate)

**Description:** Script folder placement enforcement.

**Scope:** operations/scripts (all governed scripts)

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-script-registry.js`

**Niche:** script-registry

**Purpose:** Pipeline dispatcher for script-registry (full lifecycle: detect → repair → verify → escalate)

**Description:** Script registry self-doc pipeline.

**Scope:** operations/scripts/, tools/config/registry/script-registry.json

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-generate.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-workflow-governance.js`

**Niche:** workflow-governance

**Purpose:** Pipeline dispatcher for workflow-governance (full lifecycle: detect → repair → verify → escalate)

**Description:** Workflow YAML governance header pipeline.

**Scope:** .github/workflows/*.yml

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-check.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/dispatch-workspace-retention.js`

**Niche:** workspace-retention

**Purpose:** Pipeline dispatcher for workspace-retention (full lifecycle: detect → repair → verify → escalate)

**Description:** Workspace structure + retention audit.

**Scope:** workspace/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-governance-scan.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/edit-loop-guard.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the postToolUse hook for Edit/Write. Tracks per-file edit counts within a session.

**Description:** PostToolUse hook for Edit/Write. Tracks per-file edit counts within a session.

**Scope:** .claude/settings.json PostToolUse hook (Edit|Write matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `.claude/settings.json`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/friction-logger.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the userPromptSubmit hook. Scans user messages for frustration indicators

**Description:** UserPromptSubmit hook. Scans user messages for frustration indicators

**Scope:** .claude/settings.json UserPromptSubmit hook

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js`

**Niche:** pipelines

**Purpose:** Run the bounded governance repair pipeline and regenerate the active repo-ops governance reports.

**Description:** Run the bounded governance repair pipeline and regenerate the active repo-ops governance reports.

**Scope:** full-repo

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/dispatch/governance/dispatch-pipelines.js`, `operations/scripts/dispatch/governance/post-remediation-verify.js`, `operations/scripts/script-index.md`, `operations/governance/config/generated-artifacts.json`, `operations/governance/config/ownerless-governance-surfaces.json` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/grep-loop-guard.js`

**Niche:** _(missing)_

**Purpose:** Tracks consecutive Grep calls that return no results. At 3 in a row,

**Description:** Tracks consecutive Grep calls that return no results. At 3 in a row,

**Scope:** .claude/settings.json PostToolUse hook (Grep matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/headless-batch.sh`

**Niche:** _(missing)_

**Purpose:** Dispatch the executes a prompt against files non-interactively with restricted tools. Use for bulk quality checks, changelog regeneration, stale reference scans, and other well-defined batch tasks.

**Description:** Executes a prompt against files non-interactively with restricted tools. Use for bulk quality checks, changelog regeneration, stale reference scans, and other well-defined batch tasks.

**Scope:** Any batch operation that is well-defined and repeatable

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/mdx-constraints-injector.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the userPromptSubmit hook. Keyword-matches the user message for MDX/component/page

**Description:** UserPromptSubmit hook. Keyword-matches the user message for MDX/component/page

**Scope:** .claude/settings.json UserPromptSubmit hook

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `.claude/settings.json`, `docs-guide/canonical/collation-data/Mintlify/index.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/mdx-frontmatter-sanitise.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the postToolUse hook for Edit/Write on ANY .mdx file. Auto-fixes (1) duplicate frontmatter keys, (2) em-dash characters in user-facing text, and (3) single-quoted frontmatter scalars (standardises to double quotes). All fixes are applied silently to the file already on disk; the hook only emits a systemMessage when something was changed.

**Description:** PostToolUse hook for Edit/Write on ANY .mdx file. Auto-fixes (1) duplicate frontmatter keys, (2) em-dash characters in user-facing text, and (3) single-quoted frontmatter scalars (standardises to double quotes). All fixes are applied silently to the file already on disk; the hook only emits a systemMessage when something was changed.

**Scope:** .claude/settings.json PostToolUse hook (Edit|Write matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/remediators/content/style/remediate-frontmatter-quotes.js`, `.claude/settings.json`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/mdx-render-gate.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the preToolUse hook for Write/Edit. Reads the verification state written by

**Description:** PreToolUse hook for Write/Edit. Reads the verification state written by

**Scope:** .claude/settings.json PreToolUse hook (Write|Edit matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `.claude/settings.json`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/mdx-render-verify.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the postToolUse hook for Edit/Write on v2 .mdx files. Launches Puppeteer,

**Description:** PostToolUse hook for Edit/Write on v2 .mdx files. Launches Puppeteer,

**Scope:** .claude/settings.json PostToolUse hook (Edit|Write matcher)

**Reads (2):** `.githooks/server-manager.js`, `operations/tests/baselines/console-baseline.json`

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `.claude/CLAUDE.md`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/mdx-validate-hook.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the postToolUse hook for Edit/Write on .mdx files. Uses the shared

**Description:** PostToolUse hook for Edit/Write on .mdx files. Uses the shared

**Scope:** .claude/settings.json PostToolUse hook (Edit|Write matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `docs-guide/canonical/collation-data/Mintlify/index.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/message-backup.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the userPromptSubmit hook. If a message is longer than 200 chars, saves it to

**Description:** UserPromptSubmit hook. If a message is longer than 200 chars, saves it to

**Scope:** .claude/settings.json UserPromptSubmit hook

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `.claude/settings.json`, `.claude/CLAUDE.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/move-detect-hook.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the postToolUse hook on Bash. Detects mv/git mv commands targeting v2/ paths,

**Description:** PostToolUse hook on Bash. Detects mv/git mv commands targeting v2/ paths,

**Scope:** .claude/settings.json PostToolUse hook (Bash matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/phase-gate-hook.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the postToolUse hook for Edit/Write. Reads phase-gate.jsonl and emits unverified

**Description:** PostToolUse hook for Edit/Write. Reads phase-gate.jsonl and emits unverified

**Scope:** .claude/settings.json PostToolUse hook (Edit|Write matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/post-remediation-verify.js`

**Niche:** _(missing)_

**Purpose:** Orchestrates post-remediation verification by running paired validators

**Description:** Looks up validators for a given remediator from the registry, runs them

**Scope:** operations/scripts/remediators/, operations/scripts/validators/

**Reads (2):** `operations/scripts/config/remediation-verify-registry.json`, `tools/node_modules`

**Writes (0):** _(none detected)_

**Callers (1):** `operations/scripts/config/remediation-verify-registry.json`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/post-tool-verify.js`

**Niche:** _(missing)_

**Purpose:** Tracks consecutive failures for circuit breaker. Fires after tool use failures.

**Description:** Tracks consecutive failures for circuit breaker. Fires after tool use failures.

**Scope:** .claude/settings.json PostToolUseFailure hook

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/pre-compact-checkpoint.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the fires before Claude Code compacts context in long sessions. Reads the

**Description:** Fires before Claude Code compacts context in long sessions. Reads the

**Scope:** .claude/settings.json PreCompact hook

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/pre-tool-guard.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the mechanically enforces co-work rules before tool execution. Blocks destructive git, public posts, and unconfirmed writes.

**Description:** Mechanically enforces co-work rules before tool execution. Blocks destructive git, public posts, and unconfirmed writes.

**Scope:** .claude/settings.json PreToolUse hook

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/dispatch/governance/edit-loop-guard.js`, `.claude/settings.json`, `.claude/CLAUDE.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/policies/governance-index.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/read-logger.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the postToolUse hook on Read. Logs file paths to a session-scoped temp file.

**Description:** PostToolUse hook on Read. Logs file paths to a session-scoped temp file.

**Scope:** .claude/settings.json PostToolUse hook (Read matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js`

**Niche:** repo

**Purpose:** Dispatches all static analysis validators in sequence. Supports --mode (static/full), --scope (full/changed), --quarantine, --agent-pack.

**Description:** Repo audit orchestrator — dispatches all static analysis validators in sequence. Supports --mode (static/full), --scope (full/changed), --quarantine, --agent-pack.

**Scope:** operations/scripts, ai-tools/ai-skills/catalog, workspace/reports/repo-ops

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/integrators/ai/agents/cross-agent-packager.js`, `docs-guide/tooling/ai-tools.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/policies/audit-system-overview.mdx`, `docs-guide/policies/skill-pipeline-map.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/scope-checkpoint.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the postToolUse hook for Edit/Write. Tracks total edit count per session.

**Description:** PostToolUse hook for Edit/Write. Tracks total edit count per session.

**Scope:** .claude/settings.json PostToolUse hook (Edit|Write matcher)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `.claude/settings.json`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/server-lifecycle.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the sessionStart hook + CLI tool. Auto-starts the Mintlify dev server via

**Description:** SessionStart hook + CLI tool. Auto-starts the Mintlify dev server via

**Scope:** .claude/settings.json SessionStart hook + direct CLI invocation

**Reads (1):** `.githooks/server-manager.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/governance/pre-tool-guard.js`, `operations/scripts/dispatch/governance/mdx-render-verify.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `.claude/settings.json`, `.claude/CLAUDE.md`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/session-register.js`

**Niche:** _(missing)_

**Purpose:** Dispatch the sessionStart hook that registers this session in a shared registry file.

**Description:** SessionStart hook that registers this session in a shared registry file.

**Scope:** .claude/settings.json SessionStart + PostToolUse hooks

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.claude/settings.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/session-state.js`

**Niche:** _(missing)_

**Purpose:** Reads ALL active plans and live project state. Run at session start.

**Description:** Reads ALL active plans and live project state. Run at session start.

**Scope:** workspace/plan/active/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `.claude/settings.json`, `.claude/CLAUDE.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`

**Niche:** pipelines

**Purpose:** Dispatches generator scripts to sync generated catalog/index files, then validates banners.

**Description:** Dispatches generator scripts to sync generated catalog/index files, then validates banners.

**Scope:** operations/scripts/generators, docs-guide/catalog, v2

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/validators/content/structure/enforce-generated-file-banners.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/ai/codex/task-finalise.js`

**Niche:** codex

**Purpose:** Enforce Codex task completion requirements before the agent closes a session — verifies the task-contract acceptance criteria are met, the lock is released, and post-task validators pass

**Description:** End-of-session gate for the Codex AI agent. Validates that .codex/task-contract.yaml acceptance criteria are checked, runs validate-locks, runs any registered post-task validators, runs lock-release. If any step fails, blocks the session close so the agent must address it.

**Scope:** operations/scripts/dispatch/ai/codex, .codex/task-contract.yaml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/integrators/ai/codex/lock-release.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## generator (14)

### `operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js`

**Niche:** catalogs

**Purpose:** Generate * @mode read-only

**Description:** * @mode        read-only

**Scope:** operations/scripts, ai-tools/ai-skills, AGENTS.md, .github, .claude, .cursor, .windsurf, docs-guide/policies, docs-guide/contributing, v2

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/script-index.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/ai-features.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js`

**Niche:** reports

**Purpose:** Generates the AI tools inventory report from the registry. Split from validate-ai-tools-registry.js.

**Description:** Generates the AI tools inventory report from the registry. Split from validate-ai-tools-registry.js.

**Scope:** ai-tools/registry

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js`

**Niche:** catalogs

**Purpose:** Generate keep ai-tools/registry/ai-tools-registry.json aligned with live skill/template/export files so ownerless governance coverage stays complete.

**Description:** Keep ai-tools/registry/ai-tools-registry.json aligned with live skill/template/export files so ownerless governance coverage stays complete.

**Scope:** operations/scripts, ai-tools/registry, ai-tools/ai-skills/templates, ai-tools/ai-skills, ai-tools/agent-packs/skills, tools/lib/ai/ai-tools-registry.js, operations/tests/unit/ai-tools-registry.test.js

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js`, `operations/scripts/script-index.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js`

**Niche:** catalogs

**Purpose:** Generates the canonical AI-tools visual library for GitHub workflows and dispatcher actions, plus staged audit outputs.

**Description:** Generates the canonical AI-tools visual library for GitHub workflows and dispatcher actions, plus staged audit outputs.

**Scope:** .github/workflows, ai-tools/registry, workspace/plan/active/AI-TOOLS-GOVERNANCE/AI-TOOLS, operations/tests/unit/ai-tools-visual-library.test.js

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js`

**Niche:** catalogs

**Purpose:** Generates components-catalog.mdx in docs-guide/catalog/ from component-registry.json and component-usage-map.json.

**Description:** Generates components-catalog.mdx in docs-guide/catalog/ from component-registry.json and component-usage-map.json.

**Scope:** generated-output

**Reads (3):** `docs-guide/config/component-registry.json`, `docs-guide/config/component-usage-map.json`, `docs-guide/catalog/components-catalog.mdx`

**Writes (0):** _(none detected)_

**Callers (12):** `operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js`, `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`, `operations/governance/config/generated-artifacts.json`, `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/contributing/contributing.mdx` _(+7 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js`

**Niche:** catalogs

**Purpose:** Generates docs-guide workflow/template catalogs and optionally verifies freshness

**Description:** Generates docs-guide workflow/template catalogs and optionally verifies freshness

**Scope:** operations/scripts, docs-guide, .github/workflows, .github/ISSUE_TEMPLATE

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (14):** `operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js`, `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`, `operations/governance/config/generated-artifacts.json`, `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/tooling/lpd-cli.mdx` _(+9 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js`

**Niche:** catalogs

**Purpose:** Generates the docs-guide pages catalog

**Description:** Generates the docs-guide pages catalog

**Scope:** operations/scripts, docs-guide/catalog/pages-catalog.mdx, v2/index.mdx, docs.json

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (11):** `operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js`, `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`, `operations/governance/config/generated-artifacts.json`, `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/tooling/lpd-cli.mdx` _(+6 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/generate-governance-map.js`

**Niche:** _(missing)_

**Purpose:** Reads GOVERNANCE.md markers from every root folder and produces a governance map report

**Description:** Reads GOVERNANCE.md markers from every root folder and produces a governance map report

**Scope:** root folders, docs-guide/frameworks/, docs-guide/standards/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js`, `operations/scripts/generators/governance/map/generate-governance-map.js`, `.claude/CLAUDE.md`, `docs-guide/policies/docs-guide-structure-policy.mdx`, `docs-guide/policies/governance-index.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/map/generate-governance-map.js`

**Niche:** map

**Purpose:** Walks all GOVERNANCE.md markers, validates links, detects staleness, and generates the governance map

**Description:** Walks all GOVERNANCE.md markers, validates links, detects staleness, and generates the governance map

**Scope:** all GOVERNANCE.md markers, docs-guide/frameworks/, docs-guide/standards/, docs-guide/policies/

**Reads (1):** `workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json`

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js`, `operations/scripts/generators/governance/generate-governance-map.js`, `.claude/CLAUDE.md`, `docs-guide/policies/docs-guide-structure-policy.mdx`, `docs-guide/policies/governance-index.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/reports/generate-repo-governance-status.js`

**Niche:** reports

**Purpose:** Generates the top-level repo-governance map and status reports from the canonical steady-state registry.

**Description:** Generates the top-level repo-governance map and status reports from the canonical steady-state registry.

**Scope:** operations/governance/config, operations/scripts/generators/governance/reports, tools/lib/governance, docs-guide/repo-ops/config, workspace/reports/repo-ops

**Reads (1):** `operations/config`

**Writes (0):** _(none detected)_

**Callers (14):** `operations/scripts/dispatch/governance/dispatch-root-governance.js`, `operations/scripts/script-index.md`, `operations/governance/config/governance-approval-policy.json`, `operations/governance/config/repo-governance-surfaces.json`, `operations/governance/config/generated-artifacts.json` _(+9 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/root/generate-root-governance-artifacts.js`

**Niche:** root

**Purpose:** Generates root-governance projections from the canonical manifest, including .allowlist, the generated root map, and sync reports.

**Description:** Generates root-governance projections from the canonical manifest, including .allowlist, the generated root map, and sync reports.

**Scope:** operations/scripts, operations/governance/config, tools/config/runtime, tools/lib/governance, docs-guide/repo-ops/config, workspace/reports/repo-ops, .allowlist

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (9):** `operations/scripts/dispatch/governance/dispatch-root-governance.js`, `operations/scripts/script-index.md`, `operations/governance/config/repo-governance-surfaces.json`, `operations/governance/config/root-governance.json`, `operations/governance/config/generated-artifacts.json` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/catalogs/generate-script-registry.js`

**Niche:** catalogs

**Purpose:** Generate the governed script registry from script headers so classification, catalogs, and script-docs enforcement share one derived source of truth.

**Description:** Generate the governed script registry from script headers so classification, catalogs, and script-docs enforcement share one derived source of truth.

**Scope:** operations/scripts, operations/tests, workspace/scripts, .githooks, .github/scripts

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/governance/dispatch-script-registry.js`, `operations/scripts/script-index.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/policies/script-governance.mdx`, `docs-guide/docs-library/pipelines/governance-compliance.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/catalogs/generate-snippets-registry.js`

**Niche:** catalogs

**Purpose:** Generates the snippets root registry from the live snippets filesystem plus structured folder metadata embedded in snippets/guide.mdx.

**Description:** Generates the snippets root registry from the live snippets filesystem plus structured folder metadata embedded in snippets/guide.mdx.

**Scope:** operations/scripts, snippets/guide.mdx, snippets/snippets-registry.mdx, operations/governance/config/generated-artifacts.json

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/script-index.md`, `operations/governance/config/generated-artifacts.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/governance/scaffold/new-script.js`

**Niche:** scaffold

**Purpose:** Generate ${params.summary}`,

**Description:** ${params.summary}`,

**Scope:** ${params.scope}`,

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/README.md`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/_workspace/03_Component-Governance-Framework/03_Component-Framework/02_Component-Repo-Structure/index.md`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## integrator (8)

### `operations/scripts/integrators/governance/cleanup-local-dev-sessions.js`

**Niche:** _(missing)_

**Purpose:** Fetch preserves Mint on port 3333 and terminates stale Playwright plus non-3333 Mint session trees

**Description:** Local dev session cleanup — preserves Mint on port 3333 and terminates stale Playwright plus non-3333 Mint session trees

**Scope:** operations/scripts/integrators/governance, local user process table, local user crontab

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/script-index.md`, `docs-guide/canonical/collation-data/Mintlify/index.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/ai/agents/cross-agent-packager.js`

**Niche:** agents

**Purpose:** Bundle audit reports + repo state + skill manifest into an agent-pack consumable by any supported AI agent (claude, codex, cursor, windsurf) so each agent gets equivalent context and skills regardless of host platform

**Description:** Reads the canonical skills catalog and execution manifest from ai-tools/ai-skills/, the latest audit reports from workspace/reports/, and the per-agent target rules. Produces a per-agent pack under ai-tools/agent-packs/{agent}/ (e.g. claude/CLAUDE.md, codex/skills-manifest.json, cursor/rules.md). Called by repo-audit-orchestrator.js when --agent-pack is set.

**Scope:** operations/scripts, ai-tools/ai-skills/catalog, ai-tools/agent-packs/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js`, `docs-guide/tooling/ai-tools.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/ai-features.mdx`, `docs-guide/source-of-truth-guide.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/ai/agents/export-portable-skills.js`

**Niche:** agents

**Purpose:** Copy canonical template skills from ai-tools/ai-skills/templates/ into per-agent pack folders (claude, codex, cursor, windsurf) so every agent ships with the same canonical skill set — detects drift via --check

**Description:** Reads the template-skill catalog, projects each into the per-agent pack format (e.g. CLAUDE.md fragment, codex skill manifest entry, cursor rules entry). --check validates the per-agent packs match the templates; --write regenerates them. Used by cross-agent-packager and runnable standalone.

**Scope:** ai-tools/ai-skills/templates/ → ai-tools/agent-packs/{agent}/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js`, `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/ai/codex/lock-release.js`

**Niche:** codex

**Purpose:** Release a Codex execution lock cleanly at end-of-session — pairs with task-preflight which acquires it; ensures the lock doesn't outlive its owning task so the next agent session can start

**Description:** Reads the current task ID from .codex/task-contract.yaml, removes .codex/locks-local/{task-id}.lock, validates the lock was held by the calling session (prevents accidental cross-session release). Called by task-finalise.js at end-of-session.

**Scope:** operations/scripts/integrators/ai/codex, .codex/locks-local/, .codex/task-contract.yaml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/ai/codex/task-finalise.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/governance/pipelines/publish-v2-internal-reports.js`

**Niche:** pipelines

**Purpose:** Fetch publishes v2 internal audit reports to configured output locations

**Description:** Report publisher — publishes v2 internal audit reports to configured output locations

**Scope:** operations/scripts, tools/config, v2/internal, docs.json, workspace/reports, operations/tests/reports

**Reads (1):** `v2/internal/reports`

**Writes (0):** _(none detected)_

**Callers (3):** `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/repo-ops/config/repo-config-map.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/ai/agents/sync-codex-skills.js`

**Niche:** agents

**Purpose:** Synchronise Codex-specific skill files and managed companion resources from the canonical templates into ai-tools/agent-packs/codex/ — keeps the Codex agent's local skill set in lock-step with the templates source of truth

**Description:** Reads the canonical skill templates, applies Codex-specific projections (skill manifest format, companion resource paths), writes outputs under ai-tools/agent-packs/codex/. --check fails if Codex pack is stale; --write regenerates. Different from export-portable-skills which handles all agents — this one is Codex-only with deeper Codex-specific transformations.

**Scope:** ai-tools/ai-skills/templates/ → ai-tools/agent-packs/codex/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js`, `docs-guide/tooling/ai-tools.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/ai-features.mdx`, `docs-guide/policies/source-of-truth-policy.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/ai/codex/task-cleanup.js`

**Niche:** codex

**Purpose:** Reclaim disk and local state after Codex task PRs merge — prunes merged worktrees, deletes stale local codex/* branches, removes orphaned lock files, so the next session starts clean

**Description:** Lists local git worktrees and branches matching codex/*, cross-references against merged PRs via gh CLI, removes worktrees whose branch is merged, removes stale .codex/locks-local/*.lock files whose task PR has merged. Reports what it would prune in dry-run mode.

**Scope:** operations/scripts/integrators/ai/codex, .codex/locks-local/, git worktrees

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/ai/codex/task-finalise.js`, `operations/scripts/integrators/ai/codex/lock-release.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/ai/codex/task-preflight.js`

**Niche:** codex

**Purpose:** Set up a fresh Codex agent session — generates .codex/task-contract.yaml scaffold, acquires the local execution lock, validates preconditions (branch, repo state, prior locks), so the session starts from a clean known state

**Description:** Run before the Codex agent starts work. Creates the task-contract YAML with task ID, scope, acceptance criteria fields. Acquires a local execution lock at .codex/locks-local/{task-id}.lock to prevent parallel-session conflicts. Verifies branch is on codex/* prefix, no stash markers present, no other locks held.

**Scope:** operations/scripts/integrators/ai/codex, .codex/task-contract.yaml, .codex/locks-local/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `.githooks/pre-commit`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## interface (8)

### `operations/scripts/interfaces/governance/assign-reviewers.js`

**Niche:** _(missing)_

**Purpose:** Auto-assigns Copilot reviewer to Codex PRs targeting docs-v2

**Description:** Three-phase reviewer assignment: (1) gate checks if PR is eligible

**Scope:** .github/workflows/interface-governance-assign-reviewers.yml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/interface-governance-assign-reviewers.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/interfaces/governance/close-linked-issues.js`

**Niche:** _(missing)_

**Purpose:** Closes issues linked to a merged docs-v2 PR via closing keywords

**Description:** Parses PR body for closing keywords (fixes/closes/resolves #N),

**Scope:** .github/workflows/interface-governance-close-linked-issues.yml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/interface-governance-close-linked-issues.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/interfaces/governance/discord-issue-intake.js`

**Niche:** _(missing)_

**Purpose:** Creates GitHub issues from Discord community reports via repository_dispatch

**Description:** Validates repository_dispatch payload from Discord bot (n8n workflow),

**Scope:** .github/workflows/interface-governance-intake-discord-issues.yml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/interface-governance-intake-discord-issues.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/interfaces/governance/issue-auto-label.js`

**Niche:** _(missing)_

**Purpose:** Parses issue form sections and applies structured labels based on template type

**Description:** Detects issue template type (docs_page_issue, bug_report, feature_request, etc.),

**Scope:** .github/workflows/interface-governance-label-issues.yml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/interface-governance-label-issues.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/interfaces/governance/issue-indexer.js`

**Niche:** _(missing)_

**Purpose:** Builds and maintains a rolling docs-v2 issue governance index

**Description:** Searches all docs-v2 labelled issues, sorts by classification/priority,

**Scope:** .github/workflows/interface-governance-index-issues.yml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/interface-governance-index-issues.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/interfaces/governance/lib/load-labels.js`

**Niche:** issue-lifecycle

**Purpose:** Loads the canonical label taxonomy from .github/config/labels.json

**Description:** Returns the labels object and managed_prefixes from the central config.

**Scope:** operations/scripts/interfaces/governance/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/interfaces/governance/discord-issue-intake.js`, `operations/scripts/interfaces/governance/issue-auto-label.js`

**🚩 Auto-flags:**
- lib-module (internal — imported by other scripts, not a standalone pipeline entry)

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/interfaces/governance/notify-linked-issues.js`

**Niche:** _(missing)_

**Purpose:** Notifies linked issues when a PR is opened against docs-v2

**Description:** Parses PR body for closing keywords and Task: #N patterns,

**Scope:** .github/workflows/interface-governance-close-linked-issues.yml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/interface-governance-close-linked-issues.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/interfaces/governance/lib/rolling-issue.js`

**Niche:** issue-lifecycle

**Purpose:** Shared helper for rolling issue create/update/close pattern

**Description:** Provides ensureLabels(), upsert(), and close() for the rolling issue

**Scope:** .github/workflows/ (scanner and validator workflows)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/health/page-integrity-rolling-issue.js`, `operations/scripts/remediators/content/style/repair-ownerless-language.js`, `operations/scripts/script-index.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/dispatch-pipelines.mdx` _(+1 more)_

**🚩 Auto-flags:**
- lib-module (internal — imported by other scripts, not a standalone pipeline entry)

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## remediator (11)

### `operations/scripts/remediators/content/classification/add-framework-headers.js`

**Niche:** classification

**Purpose:** Repair inserts or extends framework headers on all repo scripts from classification data.

**Description:** Inserts or extends framework headers on all repo scripts from classification data.

**Scope:** full-repo

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/classification/add-pagetype-mechanical.js`

**Niche:** classification

**Purpose:** Repair mechanically assigns pageType frontmatter to eligible v2 MDX pages.

**Description:** Mechanically assigns pageType frontmatter to eligible v2 MDX pages.

**Scope:** operations/scripts, v2, workspace/reports

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-new-file-governance.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/governance/compliance/add-workflow-governance-headers.js`

**Niche:** compliance

**Purpose:** Repair adds governance comment headers to GitHub Actions workflow YAML files based on their governed filename pattern

**Description:** Adds governance comment headers to GitHub Actions workflow YAML files based on their governed filename pattern

**Scope:** .github/workflows/

**Reads (1):** `.github/workflows`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-workflow-governance.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/docs-library/pipelines/governance-compliance.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/classification/assign-purpose-metadata.js`

**Niche:** classification

**Purpose:** Repair fills purpose and audience frontmatter for routable v2 pages

**Description:** Purpose metadata assigner — fills purpose and audience frontmatter for routable v2 pages

**Scope:** operations/scripts, tools/lib/docs-usefulness, tools/config, v2

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-new-file-governance.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/governance/scaffold/backfill-vague-purpose.js`

**Niche:** jsdoc-headers

**Purpose:** Backfill the @purpose JSDoc tag on scripts where it is empty or a label like "qa:component-quality" — expands @description into a sentence-style @purpose that passes the SME audit's > 20 char rule, derives an action verb from @type, and applies updates only on confirmed vague candidates

**Description:** Reads the SME audit's flagged-list JSON, opens each script, finds the existing @purpose line in the JSDoc block, replaces the value with a sentence built from the @description tag (if present) prefixed by the canonical verb for the @type (Detect / Validate / Repair / Generate / Audit / Dispatch / Integrate). Skips scripts whose @description is too short to make a useful purpose. --dry-run preview; --write apply.

**Scope:** operations/scripts/**, tools/scripts/**

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (0):** _(none detected — orphan?)_

**🚩 Auto-flags:**
- orphan-no-caller

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/governance/scaffold/fix-usage-paths.js`

**Niche:** scaffold

**Purpose:** Repair fix usage paths

**Description:** fix usage paths

**Scope:** operations/scripts/remediators/governance/scaffold

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js`

**Niche:** classification

**Purpose:** Normalises capitalised frontmatter YAML keys to lowercase canonical form across v2 MDX pages.

**Description:** Normalises capitalised frontmatter YAML keys to lowercase canonical form across v2 MDX pages.

**Scope:** v2/ (all MDX files, excluding _workspace, x-archived, translations)

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-new-file-governance.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/governance/repo/repair-folder-allowlist.js`

**Niche:** repo

**Purpose:** Auto-archive folder drift to x-archive/ (D-GOV-08 layer 4 + 5 repair step)

**Description:** Reads each governed folder's .allowlist, identifies drift, archives drift via git mv to {folder}/x-archive/. Supports --dry-run preview and --verify (re-runs check after repair, asserts drift count = 0).

**Scope:** repo root, .github/, ai-tools/, docs-guide/, tools/config/, snippets/, workspace/ (any folder declaring .allowlist)

**Reads (1):** `tools/lib/governance/folder-allowlist`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-folder-allowlist.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js`

**Niche:** compliance

**Purpose:** Repair regenerates governance map, updates lastVerified dates on verified frameworks, and reports unfixable issues

**Description:** Regenerates governance map, updates lastVerified dates on verified frameworks, and reports unfixable issues

**Scope:** all GOVERNANCE.md markers, docs-guide/frameworks/, workspace/reports/repo-ops/

**Reads (3):** `workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json`, `docs-guide/frameworks`, `operations/scripts/generators/governance/map/generate-governance-map.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-governance-map.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/docs-library/pipelines/governance-compliance.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/governance/scripts/repair-script-inventory.js`

**Niche:** scripts

**Purpose:** Repairs script headers and classification data. Thin wrapper that runs audit-script-inventory with --fix. Split from audit-script-inventory.js.

**Description:** Repairs script headers and classification data. Thin wrapper that runs audit-script-inventory with --fix. Split from audit-script-inventory.js.

**Scope:** operations/scripts

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-script-inventory.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/contributing/community-help.mdx`, `docs-guide/catalog/scripts-catalog.mdx` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js`

**Niche:** jsdoc-headers

**Purpose:** Auto-generate or update the 11-tag JSDoc header on scripts that lack one — derives @script from filename, @type/@concern/@niche from path, @purpose from existing description (or placeholder), so every script meets the JSDoc governance bar

**Description:** Paired remediator for check-jsdoc-headers validator. Iterates scripts under operations/scripts/ and tools/scripts/, infers missing tags from path + existing content, applies a template-string scaffold. --check reports what would change; --write applies. Note: the inline template strings below this header use `${var}` literals — they are template-literal source, not part of this script's own JSDoc.

**Scope:** operations/scripts/**, tools/scripts/**

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/governance-compliance.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## validator (25)

### `operations/scripts/validators/governance/pr/audit-script-inventory.js`

**Niche:** pr

**Purpose:** Audit the governed script corpus and regenerate the canonical script inventory outputs from current headers and filesystem state.

**Description:** Audit the governed script corpus and regenerate the canonical script inventory outputs from current headers and filesystem state.

**Scope:** full-repo

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (10):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-script-inventory.js`, `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js`, `operations/scripts/remediators/governance/scripts/repair-script-inventory.js`, `operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js` _(+5 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js`

**Niche:** compliance

**Purpose:** Detect * @mode read-only

**Description:** * @mode        read-only

**Scope:** operations/scripts/validators/governance, AGENTS.md, .github, .claude, .cursor, .windsurf, .augment, .mintlify, docs-guide/policies, ai-tools/ai-skills, docs-guide/contributing

**Reads (1):** `ai-tools/ai-skills`

**Writes (0):** _(none detected)_

**Callers (11):** `operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js`, `operations/scripts/script-index.md`, `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`, `docs-guide/contributing/community-help.mdx`, `docs-guide/contributing/mintlify.mdx` _(+6 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/ai/check-companion-manifest.js`

**Niche:** ai

**Purpose:** check companion manifest

**Description:** check companion manifest

**Scope:** operations/scripts/validators/governance/ai

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/discoverability/dispatch-companions.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/ai-features.mdx`, `docs-guide/docs-library/pipelines/discoverability.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/pr/check-component-immutability.js`

**Niche:** pr

**Purpose:** Detect flags modifications to existing component files in PR context. New files allowed. Modifications require approval label.

**Description:** Flags modifications to existing component files in PR context. New files allowed. Modifications require approval label.

**Scope:** changed

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (4):** `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/component-health.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-docs-guide-reference-freshness.js`

**Niche:** compliance

**Purpose:** Validate docs-guide reference and feature pages for stale operational claims.

**Description:** Checks docs-guide feature/reference pages for missing internal links, retired root references, unmanaged TODO markers, and missing evidence dates.

**Scope:** docs-guide/features, docs-guide/reference, operations/scripts/validators/governance/compliance

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `.claude/CLAUDE.md`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/repo/check-folder-allowlist.js`

**Niche:** repo

**Purpose:** Validate every governed folder against its declared .allowlist (D-GOV-08 layer 3)

**Description:** PR-time validator. For each folder containing a .allowlist file, lists actual entries and fails if any entry is not on the allowlist. Used as the layer-3 gate in the folder-allowlist prevention chain.

**Scope:** repo root, .github/, ai-tools/, docs-guide/, tools/config/, snippets/, workspace/ (any folder declaring .allowlist)

**Reads (1):** `tools/lib/governance/folder-allowlist`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/governance/dispatch-folder-allowlist.js`, `.githooks/pre-commit`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/pr/check-governance-approvals.js`

**Niche:** pr

**Purpose:** Validate governance-sensitive PR changes against the canonical approval policy, required labels, and PR-body evidence.

**Description:** Validate governance-sensitive PR changes against the canonical approval policy, required labels, and PR-body evidence.

**Scope:** operations/governance/config, operations/scripts/validators/governance/pr, operations/tests/run-pr-checks.js, .github/pull_request_template.md, .github/workflows, .github/workspace

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/script-index.md`, `operations/governance/config/governance-approval-policy.json`, `operations/governance/config/repo-governance-surfaces.json`, `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/catalog/scripts-catalog.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-governance-markers.js`

**Niche:** compliance

**Purpose:** Validates GOVERNANCE.md presence in all required folders and checks link integrity

**Description:** Validates GOVERNANCE.md presence in all required folders and checks link integrity

**Scope:** v2/, snippets/, operations/, ai-tools/, tools/, docs-guide/, .github/, .claude/, workspace/, .githooks/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/governance/dispatch-governance-map.js`, `docs-guide/docs-library/pipelines/governance-compliance.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-jsdoc-headers.js`

**Niche:** compliance

**Purpose:** Validates that all JS files in governed locations have core JSDoc tags

**Description:** Validates that all JS files in governed locations have core JSDoc tags

**Scope:** operations/scripts/, .github/scripts/, .githooks/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js`, `operations/scripts/GOVERNANCE.md`, `docs-guide/docs-library/pipelines/governance-compliance.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js`

**Niche:** compliance

**Purpose:** Enforce the Mintlify canonical-sync contract so archived legacy sources stay moved, registered consumers stay updated, and retained-source logs match the registry.

**Description:** Enforce the Mintlify canonical-sync contract so archived legacy sources stay moved, registered consumers stay updated, and retained-source logs match the registry.

**Scope:** docs-guide/canonical/collation-data/Mintlify, docs-guide/contributing, AGENTS.md, .github, .claude, ai-tools, snippets, v2/resources/documentation-guide, workspace/plan/active

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (9):** `operations/scripts/config/mintlify-canonical-sync.js`, `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js`, `operations/scripts/script-index.md`, `docs-guide/canonical/collation-data/Mintlify/index.md` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-new-file-governance.js`

**Niche:** compliance

**Purpose:** governance:new-file-gate

**Description:** Validates newly staged files have required governance metadata (JSDoc, frontmatter, workflow headers)

**Scope:** full-repo

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-new-file-governance.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/ai/codex/check-no-ai-stash.sh`

**Niche:** codex

**Purpose:** Block push if AI agent stash/temporary files (.ai-stash, .codex-tmp, .claude-tmp, *.bak from agent edits) are present in the working tree — prevents leaked working state from landing on the remote

**Description:** Scans the working tree (excluding .gitignore'd paths) for known AI agent temporary file patterns. Exits non-zero if any found, listing the offenders. Called by .githooks/pre-commit and .githooks/pre-push.

**Scope:** working tree (excludes node_modules, x-archive, gitignored paths)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (4):** `.githooks/pre-push`, `.githooks/pre-commit`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/pr/check-pr-template.js`

**Niche:** pr

**Purpose:** Enforces that PR descriptions include required change and rationale sections before merge

**Description:** Enforces that PR descriptions include required change and rationale sections before merge

**Scope:** operations/scripts/enforcers/pr, .github/pull_request_template.md, .github/pull-request-template-v2.md

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-repo-governance-sync.js`

**Niche:** compliance

**Purpose:** Validates the canonical repo-governance registry, generated outputs, and referenced ownerless steady-state paths.

**Description:** Validates the canonical repo-governance registry, generated outputs, and referenced ownerless steady-state paths.

**Scope:** operations/governance/config, operations/scripts/generators/governance/reports, operations/scripts/validators/governance/compliance, tools/lib/governance, docs-guide/repo-ops/config, workspace/reports/repo-ops

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/script-index.md`, `operations/governance/config/governance-approval-policy.json`, `operations/governance/config/repo-governance-surfaces.json`, `docs-guide/catalog/scripts-catalog.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-root-governance-sync.js`

**Niche:** compliance

**Purpose:** Validates that root-governance generated outputs, required documentation references, and public root artifact declarations stay aligned with the canonical manifest.

**Description:** Validates that root-governance generated outputs, required documentation references, and public root artifact declarations stay aligned with the canonical manifest.

**Scope:** operations/scripts/validators/governance, operations/scripts/generators/governance/root, operations/governance/config, tools/config/runtime, tools/lib/governance, docs-guide/repo-ops/config, .allowlist

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/dispatch-root-governance.js`, `operations/scripts/script-index.md`, `operations/governance/config/repo-governance-surfaces.json`, `docs-guide/catalog/scripts-catalog.mdx` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-script-locations.js`

**Niche:** compliance

**Purpose:** Validates all JS files are in governed locations per the script framework

**Description:** Validates all JS files are in governed locations per the script framework

**Scope:** full-repo

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-script-locations.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/pr/check-workflow-governance.js`

**Niche:** pr

**Purpose:** Validates all workflow YAML files have required governance headers and docs pages

**Description:** Checks every .github/workflows/*.yml for: (1) governance comment headers

**Scope:** .github/workflows/

**Reads (2):** `.github/workflows`, `.github/workspace/actions-library`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/governance/dispatch-workflow-governance.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/check-workflow-headers.js`

**Niche:** compliance

**Purpose:** Validates that GitHub Actions workflow YAML files have governance comment headers

**Description:** Validates that GitHub Actions workflow YAML files have governance comment headers

**Scope:** .github/workflows/

**Reads (1):** `.github/workflows`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/config/remediation-verify-registry.json`, `docs-guide/docs-library/pipelines/governance-compliance.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js`

**Niche:** compliance

**Purpose:** Generates a review checklist for dry-run governance repair proposals that require human approval before fix mode is applied.

**Description:** Generates a review checklist for dry-run governance repair proposals that require human approval before fix mode is applied.

**Scope:** full-repo

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/policies/script-governance.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/snippets/test-scripts.sh`

**Niche:** testing

**Purpose:** Run basic syntax and shape validation on every executable script under operations/scripts/snippets/ — developer-tool sanity check before committing snippet-related changes

**Description:** Iterates the snippet scripts directory, runs each with --help (or equivalent), checks exit code is 0, captures stderr, reports a pass/fail summary. Manual-use only; not wired to a dispatcher. Documented in docs-guide/tooling/lpd-cli.mdx as a contributor workflow.

**Scope:** operations/scripts/snippets/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/script-index.md`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js`

**Niche:** compliance

**Purpose:** Validate the AI-tools registry contract and coverage so ownerless governance and AI subsystem inventory stay aligned.

**Description:** Validate the AI-tools registry contract and coverage so ownerless governance and AI subsystem inventory stay aligned.

**Scope:** operations/scripts, tools/lib/ai/ai-tools-registry.js, ai-tools/registry, operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js, operations/tests/unit/ai-tools-registry.test.js, operations/governance/config/ownerless-governance-surfaces.json, docs-guide/policies/source-of-truth-policy.mdx, docs-guide/catalog/ai-tools.mdx, docs-guide/policies/audit-system-overview.mdx, docs-guide/policies/skill-pipeline-map.mdx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js`, `operations/scripts/script-index.md`, `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/tooling/ai-tools.mdx`, `docs-guide/catalog/scripts-catalog.mdx` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/validate-codex-task-contract.js`

**Niche:** compliance

**Purpose:** Validates branch naming, task files, PR body, and issue state for codex branches

**Description:** Codex task contract enforcer — validates branch naming, task files, PR body, and issue state for codex branches

**Scope:** operations/scripts, .codex/task-contract.yaml, operations/tests/onfig/codex-issue-policy.json, .github/pull_request_template.md, .github/pull-request-template-v2.md

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/dispatch/ai/codex/task-finalise.js`, `operations/scripts/dispatch/governance/dispatch-codex-compliance.js`, `.githooks/pre-push`, `.githooks/pre-commit`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/ai/codex/validate-locks.js`

**Niche:** codex

**Purpose:** Validate Codex execution-lock state before push — fails if a lock from a different task is present or a stale lock has outlived its owning session, preventing two agents from racing on overlapping scope

**Description:** Pre-push validator for Codex sessions. Checks .codex/locks-local/ for lock files, validates each lock's task ID matches the current branch's codex/* prefix, validates each lock's age is within session-lifetime threshold. Exits non-zero on stale or foreign locks. Called by .githooks/pre-push for codex/* branches.

**Scope:** operations/scripts/validators/ai/codex, .codex/locks-local/, .codex/task-contract.yaml

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/ai/codex/task-finalise.js`, `.githooks/pre-push`, `.githooks/pre-commit`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/catalog/scripts-catalog.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/repo/validate-lpd-paths.js`

**Niche:** repo

**Purpose:** Validates that every script path referenced in `lpd` exists on disk. Parses the lpd bash CLI for node and script_path invocations and checks each file against the filesystem. Exits non-zero if any path is missing.

**Description:** Validates that every script path referenced in `lpd` exists on disk. Parses the lpd bash CLI for node and script_path invocations and checks each file against the filesystem. Exits non-zero if any path is missing.

**Scope:** lpd (repo root bash CLI)

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `docs-guide/canonical/collation-data/Mintlify/index.md`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh`

**Niche:** compliance

**Purpose:** Checks payment and orchestrator documentation gate conditions

**Description:** Payment/orchestrator gate verifier — checks payment and orchestrator documentation gate conditions

**Scope:** v2-content

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/ai/codex/task-finalise.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---
