# AI-Tools / AI-Skills Governance Plan

> **Status**: Complete — 2026-03-21. Phases 1–9 executed and committed.
> Remaining items: see [`plan2.md`](plan2.md)
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

## Phase 9 — AI Adapter Consolidation and Repair

> **Context:** Audit of all AI agent adapter/rule files revealed 5 actionable issues:
> (1) Augment Code has zero working rules — its instructions are at wrong paths;
> (2) the Cursor no-deletions rule is invisible because it's in the wrong directory;
> (3) the legacy `.cursorrules` file has stale, contradictory content;
> (4) `.github/AGENTS.md` naming creates ambiguity;
> (5) `ASSISTANT.md` is a ghost file no tool reads.
>
> Full findings in `audit-ai-adapters.md`.

---

### Task 9.1: Fix Cursor no-deletions rule location
CHECKPOINT after this task.

**Problem:** `ai-tools/ai-rules/.cursor/rules/no-deletions.mdc` is buried at a path Cursor never reads. The no-deletions rule is completely invisible.

**Action:**
```bash
git mv ai-tools/ai-rules/.cursor/rules/no-deletions.mdc .cursor/rules/no-deletions.mdc
```

Also remove the now-empty `.cursor/` dir inside `ai-rules/`:
```bash
rmdir ai-tools/ai-rules/.cursor/rules ai-tools/ai-rules/.cursor
```
(These are untracked dirs after the `git mv`, safe to remove.)

**Verify:** `.cursor/rules/` now contains both `repo-governance.mdc` and `no-deletions.mdc`.

---

### Task 9.2: Gut `.cursorrules` to canonical adapter pattern
CHECKPOINT after this task.

**Problem:** `.cursorrules` (45 lines, root) has its own independent ruleset — ThemeData, CSS custom properties, component library refs — none pointing to `AGENTS.md`. Contradicts the canonical thin-adapter pattern all other tool files follow.

**Action:** Replace content with a canonical thin adapter that matches `.cursor/rules/repo-governance.mdc`:

```markdown
# Livepeer Docs — Cursor Legacy Adapter

> This file exists for backward compatibility with Cursor versions that read
> `.cursorrules`. The active rules are in `.cursor/rules/`.

Read `AGENTS.md` first for repo-wide rules.

Use `.cursor/rules/*.mdc` for Cursor-specific adapter behavior. Keep shared
policy in:

- `AGENTS.md`
- `docs-guide/policies/agent-governance-framework.mdx`
- `docs-guide/policies/root-allowlist-governance.mdx`
- Do not use port `3000` for local Mintlify or preview sessions; choose a
  non-3000 port explicitly.
```

**Note:** Do not delete `.cursorrules` — it serves as a legacy adapter for older Cursor versions. Gutting it to match the canonical pattern removes the contradiction without losing backward compatibility.

**Verify:** `grep -i "ThemeData\|hardcode\|style-guide.mdx\|component-library" .cursorrules` returns empty.

---

### Task 9.3: Create working Augment adapter
CHECKPOINT after this task.

**Problem:** Augment Code has zero working rules. The `.github/augment-instructions.md` file (203 lines) is at a path Augment never reads. `ai-tools/ai-rules/.augment-guidelines` (17 lines) is also at a path Augment never reads.

**Augment's canonical paths:**
- Modern: `.augment/rules/*.md` (multiple files, with `type: always_apply | manual | auto` frontmatter)
- Legacy: `.augment-guidelines` at project root

**Action — create `.augment/rules/` at root:**

1. Create `.augment/rules/` directory.
2. Split `.github/augment-instructions.md` into scoped rule files:

| New file | Content from augment-instructions.md |
|---|---|
| `.augment/rules/git-safety.md` | Critical git rules, pre-write announcement, HitL verification |
| `.augment/rules/repo-governance.md` | Pointer to AGENTS.md + canonical governance links |
| `.augment/rules/no-deletions.md` | No-deletion rule (aligns with `.cursor/rules/no-deletions.mdc`) |

3. Each file gets Augment frontmatter:
```markdown
---
type: always_apply
---
```

4. The `ai-tools/ai-rules/.augment-guidelines` file should be retired to `ai-tools/ai-rules/_retired/` — it was never being consumed.

**Verify:** `.augment/rules/` exists at root and contains at least 2 `.md` files with valid frontmatter.

Note: `.github/augment-instructions.md` should be kept as a reference but add a header note that the active rules are in `.augment/rules/`. Do not delete per repo no-deletion policy.

---

### Task 9.4: Resolve `.github/AGENTS.md` naming ambiguity
CHECKPOINT after this task.

**Problem:** `.github/AGENTS.md` (92 lines, Codex-specific task isolation rules) is named identically to the root `AGENTS.md`, creating confusion about its role. It looks like a Copilot artifact or a duplicate of the root baseline.

**Action — Option A (preferred):** Add a clear header to `.github/AGENTS.md`:

```markdown
<!-- Codex layer extension. This file adds Codex-specific task isolation rules
     on top of the repo-wide baseline in root AGENTS.md. It is not a duplicate.
     Codex reads both via its directory-walk mechanism. -->
```

Also add a cross-reference in root `AGENTS.md`:
```markdown
## Codex-specific extension
For OpenAI Codex task isolation rules (HitL verification, checkpoint branches,
lock lifecycle), see `.github/AGENTS.md`.
```

**Action — Option B (alternative):** Rename to `.github/CODEX.md` and update any internal cross-references.

Decision: Option A is lower risk (no rename needed, Codex dir-walk still works naturally).

**Verify:** Someone reading root `AGENTS.md` can understand that `.github/AGENTS.md` exists and why.

---

### Task 9.5: Relocate and update `ASSISTANT.md` → `.mintlify/Assistant.md`
CHECKPOINT after this task.

**Clarification:** `ASSISTANT.md` is NOT a ghost file — it is the Mintlify AI chat assistant context file. Mintlify reads it from `.mintlify/Assistant.md` (note: canonical path uses `.mintlify/` dir, `Assistant.md` capitalization). The current file at root `ASSISTANT.md` is simply in the wrong place and has stale paths.

**What the file does:** Provides custom instructions to the Mintlify chat widget for every user query on the docs site. This shapes how the embedded AI assistant responds — tone, routing, versioning rules, domain disambiguation, guardrails.

**What's stale in the current content:**
- `tools/ai-rules/**` → stale path; content is now in `ai-tools/ai-rules/`
- `contribute/**` → check if this dir exists and is current
- `v2/pages/**` path pattern → repo uses `v2/**` (the `pages/` subdir may not match)
- Architecture section (Gateway/Orchestrator roles) → verify still accurate
- Some guardrail sections overlap with what `AGENTS.md` now covers for AI agents (not the chat assistant)

**What to extract to `AGENTS.md` before moving:**
These sections are useful for AI coding agents, not just the chat widget, and belong in `AGENTS.md`:
- "Source-Of-Truth Priority" — `docs.json` > `v2/` > `README.md` > `v1/`
- "Versioning Rules" — default to v2, treat v1 as legacy

**Actions:**
1. Add "Source-Of-Truth Priority" and "Versioning Rules" to `AGENTS.md` as a `## Docs content priority` section.
2. Create `.mintlify/` directory.
3. Update the content for current repo state:
   - Fix `tools/ai-rules/**` → `ai-tools/ai-rules/`
   - Fix `v2/pages/07_resources/...` → correct current paths
   - Remove sections already covered by `AGENTS.md` (git safety, editing behavior for AI agents)
   - Keep/refine: mission, routing map, domain disambiguation, answer contract, response style, high-risk guardrails, fallback behavior
4. Write the cleaned content to `.mintlify/Assistant.md`
5. `git mv ASSISTANT.md ai-tools/ai-rules/_retired/ASSISTANT.md` (keep per no-deletion policy)
6. Add `.mintlify/` to the root allowlist (`.allowlist` file — Mintlify pre-commit hook may block unlisted root dirs).

**Verify:** `.mintlify/Assistant.md` exists. `cat .allowlist | grep mintlify` returns a result. Root `ASSISTANT.md` is gone (moved).

**Verify:** `ls ASSISTANT.md` returns "not found". Content in AGENTS.md covers what was unique.

---

### Task 9.6: Update docs-guide/catalog/ai-tools.mdx with adapter surface map
No checkpoint — editorial update.

The catalog page describes agent onboarding but doesn't list all the adapter files and their canonical locations. Add a small section "Adapter file surface" with the table from `audit-ai-adapters.md` mapping each tool to its canonical path and current status.

This makes the catalog page the single human-readable reference for "where does each tool get its rules from."

---

### Task 9.7: Add adapter surface to agent-governance-framework.mdx
No checkpoint — editorial update.

The canonical governance policy page (`docs-guide/policies/agent-governance-framework.mdx`) should reference the new `.augment/rules/` surface and confirm the full list of active adapter targets. Update the "Approved runtime targets" list to include `.augment/rules/*.md`.

---

## Phase 9 Verification

```bash
# 1. no-deletions.mdc is now in the right place
ls .cursor/rules/no-deletions.mdc
# → exists

# 2. cursorrules no longer has stale content
grep -i "ThemeData\|hardcode\|style-guide.mdx\|component-library" .cursorrules
# → empty

# 3. Augment rules exist at root
ls .augment/rules/
# → at least 2 .md files

# 4. All active adapter paths in registry registry
# (manual check — confirm all paths are in ai-tools-registry.json under manual-doc lane)

# 5. Skill validator still passes
node tests/unit/skill-docs.test.js
# → ✅ 59/59
```

---

## Future work — flagged for later plans

- **Skill count reduction**: 42 skills for a docs repo may be more than needed. After Phase 5 consolidation review, consider retiring low-value skills.
- **Skill versioning**: Currently all skills are v1.0. Define when a version bump is required (content change? contract change? path change?).
- **Runtime validation**: The catalog supports `runtime` and `full` modes but only `static` has been attempted. Runtime validation would require a running Mintlify dev server.
- **Cross-plan sync**: When SCRIPT-GOVERNANCE or COMPONENT-GOVERNANCE plans merge, any further path changes will need a sweep of skill artifacts. Add a sync checkpoint.
