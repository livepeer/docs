# AI-Tools / AI-Skills Governance Plan

> **Status**: Active
> **Created**: 2026-03-20
> **Source of truth**: This file for tasks. [`audit.md`](audit.md) for findings.
> **Branch**: `docs-v2-dev` (work directly — no separate worktree needed for metadata-only changes)
> **Merge policy**: Commit directly to `docs-v2-dev`. Sync before starting each task.
> **Deletion policy**: No deletions. Superseded files go to `ai-tools/ai-skills/x-archive/` via `git mv`.

---

## Workflow

Every task follows this cycle:

1. **Sync** — pull latest `docs-v2-dev`
2. **Do the work** on `docs-v2-dev`
3. **CHECKPOINT** — present results to human for review
4. **Human approves** — commit
5. **Strikethrough** the task in this plan file

No task proceeds without human approval at the checkpoint.

---

## Problem Statement

The `ai-tools/ai-skills/` package has 42 templates, 40 agent-pack exports, and 16 local SKILL.md files governing AI agent behaviour across the Livepeer Docs repo. A script taxonomy restructure broke all command paths in the skill catalog and SKILL.md files. The audit pipeline has never produced output. Template numbering has collisions. The validator doesn't enforce the full contract. Two parallel registries have no sync enforcement. See [`audit.md`](audit.md) for full findings.

---

## Parallel work — not in scope but noted

- **Script restructure** is happening at `tasks/plan/active/SCRIPT-GOVERNANCE/`. The script taxonomy paths are now stable — this plan consumes those new paths but does not move scripts.
- **Component governance** is happening at `tasks/plan/active/COMPONENT-GOVERNANCE/`. Component-related skills (`component-layout-governance`, `component-library-guided-authoring`) may need path updates after that plan merges.
- **Agent-pack template content** (the 40 exported skill bodies in `ai-tools/agent-packs/skills/*/SKILL.md`) are downstream of the 42 source templates. This plan fixes the source templates; re-export happens via `cross-agent-packager` after paths are fixed.

---

## Phase 1 — Fix broken paths (unblock the pipeline)

### Task 1.1: Update script paths in skill-catalog.json

Update all 7 `run` commands in `ai-tools/ai-skills/catalog/skill-catalog.json` to use the new taxonomy paths.

**Files:** `ai-tools/ai-skills/catalog/skill-catalog.json`

**Path mapping:**

| Old | New |
|---|---|
| `tools/scripts/repo-audit-orchestrator.js` | `tools/scripts/audits/governance/repo/repo-audit-orchestrator.js` |
| `tools/scripts/script-footprint-and-usage-audit.js` | `tools/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js` |
| `tools/scripts/docs-quality-and-freshness-audit.js` | `tools/scripts/audits/content/quality/docs-quality-and-freshness-audit.js` |
| `tools/scripts/style-and-language-homogenizer-en-gb.js` | `tools/scripts/remediators/content/style/style-and-language-homogenizer-en-gb.js` |
| `tools/scripts/component-layout-governance.js` | `tools/scripts/validators/components/library/component-layout-governance.js` |
| `tools/scripts/cleanup-quarantine-manager.js` | `tools/scripts/remediators/content/repair/cleanup-quarantine-manager.js` |
| `tools/scripts/cross-agent-packager.js` | `tools/scripts/dispatch/ai/agents/cross-agent-packager.js` |

**Verify:** Each new path resolves to an existing file.

### Task 1.2: Update script paths in local SKILL.md files

Update command references in all 8 affected SKILL.md files:

1. `ai-tools/ai-skills/repo-audit-orchestrator/SKILL.md` — 1 path
2. `ai-tools/ai-skills/script-footprint-and-usage-audit/SKILL.md` — 1 path
3. `ai-tools/ai-skills/docs-quality-and-freshness-audit/SKILL.md` — 1 path
4. `ai-tools/ai-skills/style-and-language-homogenizer-en-gb/SKILL.md` — 1 path
5. `ai-tools/ai-skills/component-layout-governance/SKILL.md` — 1 path
6. `ai-tools/ai-skills/cleanup-quarantine-manager/SKILL.md` — 2 paths
7. `ai-tools/ai-skills/cross-agent-packager/SKILL.md` — 1 path
8. `ai-tools/ai-skills/generated-mdx-banners-governance/SKILL.md` — 12 paths
9. `ai-tools/ai-skills/docs-copy/SKILL.md` — 1 path (`docs-page-research.js`)
10. `ai-tools/ai-skills/docs-review-fix-execution/SKILL.md` — 4 paths (`lint-copy`, `lint-structure`, `lint-patterns`)
11. `ai-tools/ai-skills/docs-review-packet-generation/SKILL.md` — 5 paths (`lint-copy`, `lint-structure`, `lint-patterns`, `pattern-observer`, `docs-page-research`)

Use the same mapping from Task 1.1 plus:

| Old | New |
|---|---|
| `tools/scripts/lint-copy.js` | `tools/scripts/validators/content/copy/lint-copy.js` |
| `tools/scripts/lint-structure.js` | `tools/scripts/validators/content/structure/lint-structure.js` |
| `tools/scripts/lint-patterns.js` | `tools/scripts/validators/content/copy/lint-patterns.js` |
| `tools/scripts/pattern-observer.js` | `tools/scripts/audits/content/veracity/pattern-observer.js` |
| `tools/scripts/docs-page-research.js` | `tools/scripts/audits/content/veracity/docs-page-research.js` |
| `tools/scripts/docs-page-research-pr-report.js` | `tools/scripts/audits/content/veracity/docs-page-research-pr-report.js` |
| `tools/scripts/generate-docs-guide-indexes.js` | `tools/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js` |
| `tools/scripts/generate-pages-index.js` | `tools/scripts/generators/content/catalogs/generate-pages-index.js` |
| `tools/scripts/enforce-generated-file-banners.js` | `tools/scripts/validators/content/structure/enforce-generated-file-banners.js` |

**Verify:** `node tests/unit/skill-docs.test.js` passes after changes.

### Task 1.3: Update script paths in source templates

Update the same paths in the corresponding `ai-tools/ai-skills/templates/*.template.md` files. Templates are the source of truth — agent-pack exports are regenerated from them.

**Verify:** Grep for `tools/scripts/` paths that don't match the new taxonomy (excluding `tools/scripts/` references in comments about the old structure).

---

## Phase 2 — Fix structural integrity

### Task 2.1: Renumber colliding templates

Assign unique prefixes to the 8 templates sharing 4 numbers. Proposed renumbering:

| Current | Proposed | Skill |
|---|---|---|
| `32-agentic-project-management-orchestrator` | `32-agentic-project-management-orchestrator` | keep |
| `32-page-content-research-review` | `39-page-content-research-review` | renumber |
| `33-docs-source-verification` | `33-docs-source-verification` | keep |
| `33-skill-docs` | `40-skill-docs` | renumber |
| `37-docs-research-packet-generation` | `37-docs-research-packet-generation` | keep |
| `37-docs-review-packet-generation` | `41-docs-review-packet-generation` | renumber |
| `38-docs-research-to-implementation-plan` | `38-docs-research-to-implementation-plan` | keep |
| `38-docs-review-fix-execution` | `42-docs-review-fix-execution` | renumber |

**Files:** 4 template files renamed via `git mv`. Update `manifest.json` source paths if they reference numeric prefixes.

**Verify:** `ls ai-tools/ai-skills/templates/*.template.md | sed 's/.*\///' | cut -d- -f1 | sort | uniq -d` returns empty.

### Task 2.2: Export orphaned local skills to agent-packs

Create agent-pack skill directories for the 2 skills that have local SKILL.md + references but no agent-pack export:

- `ai-tools/agent-packs/skills/docs-review-packet-generation/SKILL.md`
- `ai-tools/agent-packs/skills/docs-review-fix-execution/SKILL.md`

Copy from the corresponding template content. Update `manifest.json` to include these 2 new entries.

**Verify:** Agent-pack skill count matches template count (42 templates → 42 agent-pack skills).

### Task 2.3: Remove template-only fields from local SKILL.md files

Remove `tier`, `primary_paths`, and `primary_commands` from frontmatter of:

1. `ai-tools/ai-skills/docs-copy/SKILL.md`
2. `ai-tools/ai-skills/docs-review-fix-execution/SKILL.md`
3. `ai-tools/ai-skills/docs-review-packet-generation/SKILL.md`

These fields belong only on canonical templates per `skill-spec-contract.md`.

**Verify:** `node tests/unit/skill-docs.test.js` passes.

### Task 2.4: Replace `skills-template.md` with an actual template

The current `ai-tools/ai-skills/skills-template.md` is a copy of `rubric-static-review/SKILL.md`. Replace it with a proper skeleton:

```markdown
---
name: <skill-name>
version: "1.0"
description: >-
  <20-100 word description of what the skill does and when to use it.>
invoke_when:
  - "<trigger phrase 1>"
  - "<trigger phrase 2>"
---

SKILL: <Skill Display Name>

Goal
<One-sentence statement of what the skill achieves.>

Constraints
- <Constraint 1>
- <Constraint 2>

Workflow
1. <Step 1>
2. <Step 2>

Deliverable Format
- <Output shape>

Failure Modes / Fallback
- <What to do when the skill cannot complete its goal>

Validation Checklist
- [ ] <Check 1>
- [ ] <Check 2>
```

Archive the old file to `ai-tools/ai-skills/x-archive/skills-template.md`.

---

## Phase 3 — Strengthen validation

### Task 3.1: Add command-path validation to skill-docs.test.js

Add a test that extracts all `node tools/scripts/...` paths from governed skill artifacts and verifies each resolves to an existing file.

**Files:** `tests/unit/skill-docs.test.js`

**Verify:** Test fails if a non-existent script path is referenced. Test passes after Phase 1 path fixes.

### Task 3.2: Add template-only field enforcement to skill-docs.test.js

Add a test that fails if `tier`, `primary_paths`, or `primary_commands` appear in local SKILL.md frontmatter (only allowed in `templates/*.template.md`).

**Files:** `tests/unit/skill-docs.test.js`

**Verify:** Test would have caught the 3 violations found in the audit. Passes after Task 2.3.

### Task 3.3: Add catalog-manifest cross-reference test

Add a test that ensures every skill in `skill-catalog.json` has a corresponding entry in `manifest.json` and vice versa for skills that should appear in both. At minimum, verify that catalog skill IDs resolve to existing template files.

**Files:** New test or extend `tests/unit/skill-docs.test.js`

**Verify:** No orphaned entries in either registry.

---

## Phase 4 — Clean up dead weight

### Task 4.1: Consolidate duplicate research files

`product-writing.md` and `product-writing-skill-package.md` are identical (325 lines). Archive one:

- Keep `product-writing.md`
- `git mv product-writing-skill-package.md` → `x-archive/`

### Task 4.2: Archive retired source-content snapshots

`source-content/.github/augment-instructions.md` is marked retired in `inventory.json`. Move to `x-archive/`.

### Task 4.3: Document the 3-layer rule

Add a section to `skill-spec-contract.md` that explicitly states:

- Which skills require all 3 layers (template + local SKILL.md + agent-pack export)
- Which skills are template-only + export (no local SKILL.md needed)
- When a local SKILL.md is required (skills with `references/` subdirectories or skill-catalog entries)

---

## Phase 5 — Simplify skill architecture (strategic)

### Task 5.1: Flatten docs-copy routing

Reduce the 7-step workflow to 2 steps:

1. **Classify** — determine copy mode (plan/rewrite/review/claim-update/section-strategy)
2. **Execute** — inline the most common paths; load specialist skills only for claim-sensitive work

Merge the 3 reference files (`task-routing.md`, `workflow.md`, `handoff-checklist.md`) into a single streamlined reference.

### Task 5.2: Evaluate skill consolidation candidates

Review whether these pairs should be merged:

- `docs-quality-and-freshness-audit` + `docs-coverage-and-route-integrity-audit` → single content audit skill with modes
- `docs-review-packet-generation` + `docs-review-fix-execution` → single review skill with generate/execute modes

**Output:** Decision document. No merges without human approval.

### Task 5.3: Run the audit pipeline end-to-end

After Phase 1 path fixes, execute:

```bash
node tools/scripts/audits/governance/repo/repo-audit-orchestrator.js --mode static --scope full
```

Validate that each catalog skill produces its declared output files. Document which skills produce useful signals and which are aspirational.

---

## Phase 6 — Re-export agent packs

### Task 6.1: Regenerate agent-pack exports

After all template updates are complete, run:

```bash
node tools/scripts/dispatch/ai/agents/cross-agent-packager.js --agent-pack all
```

Verify outputs:
- `ai-tools/agent-packs/codex/skills-manifest.json`
- `ai-tools/agent-packs/cursor/rules.md`
- `ai-tools/agent-packs/claude/CLAUDE.md`
- `ai-tools/agent-packs/windsurf/rules.md`

### Task 6.2: Run full validation suite

```bash
node tests/unit/skill-docs.test.js
node tests/unit/codex-skill-sync.test.js
```

Both must pass. This is the final gate before marking the plan complete.

---

## Future work — flagged for later plans

- **Skill count reduction**: 42 skills for a docs repo may be more than needed. After Phase 5 consolidation review, consider retiring low-value skills.
- **Skill versioning**: Currently all skills are v1.0. Define when a version bump is required (content change? contract change? path change?).
- **Runtime validation**: The catalog supports `runtime` and `full` modes but only `static` has been attempted. Runtime validation would require a running Mintlify dev server.
- **Cross-plan sync**: When SCRIPT-GOVERNANCE or COMPONENT-GOVERNANCE plans merge, any further path changes will need a sweep of skill artifacts. Add a sync checkpoint.
