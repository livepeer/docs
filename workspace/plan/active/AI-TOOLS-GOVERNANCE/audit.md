# AI-Tools / AI-Skills Audit Report

> **Branch:** `docs-v2-dev` | **Worktree:** `Docs-v2-dev` | **Date:** 2026-03-19

---

## Scope

Audited the full `ai-tools/ai-skills/` and `ai-tools/agent-packs/` packages on the `docs-v2-dev` branch. Covered all 16 local SKILL.md files, 42 templates, 40 agent-pack skill directories, the skill catalog, execution manifest, registry, and all supporting reference files.

### Inventory snapshot

| Layer | Count | Location |
|---|---|---|
| Templates | 42 | `ai-tools/ai-skills/templates/*.template.md` |
| Agent-pack skill dirs | 40 | `ai-tools/agent-packs/skills/*/` |
| Local SKILL.md files | 16 | `ai-tools/ai-skills/*/SKILL.md` |
| Skill catalog entries | 9 | `ai-tools/ai-skills/catalog/skill-catalog.json` |
| Execution manifest stages | 6 | `ai-tools/ai-skills/catalog/execution-manifest.json` |
| Manifest entries | 40 | `ai-tools/agent-packs/skills/manifest.json` |

---

## 1. What's Broken

### CRITICAL: 16 script paths are stale

Scripts were reorganized into a `<type>/<concern>/<niche>` taxonomy (commit `222c60b6`) but SKILL.md command references and `skill-catalog.json` were never updated. Every `run` command in the catalog will fail.

| Declared path (broken) | Actual location |
|---|---|
| `tools/scripts/repo-audit-orchestrator.js` | `tools/scripts/audits/governance/repo/` |
| `tools/scripts/script-footprint-and-usage-audit.js` | `tools/scripts/audits/governance/scripts/` |
| `tools/scripts/docs-quality-and-freshness-audit.js` | `tools/scripts/audits/content/quality/` |
| `tools/scripts/style-and-language-homogenizer-en-gb.js` | `tools/scripts/remediators/content/style/` |
| `tools/scripts/component-layout-governance.js` | `tools/scripts/validators/components/library/` |
| `tools/scripts/cleanup-quarantine-manager.js` | `tools/scripts/remediators/content/repair/` |
| `tools/scripts/cross-agent-packager.js` | `tools/scripts/dispatch/ai/agents/` |
| `tools/scripts/lint-copy.js` | `tools/scripts/validators/content/copy/` |
| `tools/scripts/lint-structure.js` | `tools/scripts/validators/content/structure/` |
| `tools/scripts/lint-patterns.js` | `tools/scripts/validators/content/copy/` |
| `tools/scripts/pattern-observer.js` | `tools/scripts/audits/content/veracity/` |
| `tools/scripts/docs-page-research.js` | `tools/scripts/audits/content/veracity/` |
| `tools/scripts/docs-page-research-pr-report.js` | `tools/scripts/audits/content/veracity/` |
| `tools/scripts/generate-docs-guide-indexes.js` | `tools/scripts/generators/governance/catalogs/` |
| `tools/scripts/generate-pages-index.js` | `tools/scripts/generators/content/catalogs/` |
| `tools/scripts/enforce-generated-file-banners.js` | `tools/scripts/validators/content/structure/` |

**Affected files:** 8 SKILL.md files, `skill-catalog.json`, `execution-manifest.json`.

**Not affected:** All test files (`tests/unit/*.test.js`, `tests/run-all.js`, `tests/run-pr-checks.js`) and lib files (`tools/lib/*`) remain at their declared paths.

### CRITICAL: 12 of 12 catalog output files don't exist

Every output declared in `skill-catalog.json` is missing from disk:

- `tasks/reports/repo-ops/repo-audit-summary.{md,json}`
- `tasks/reports/repo-ops/script-footprint-and-usage-audit.{md,json}`
- `tasks/reports/repo-ops/docs-quality-and-freshness-audit.{md,json}`
- `tasks/reports/repo-ops/style-and-language-homogenizer-en-gb.{md,json}`
- `tasks/reports/repo-ops/component-layout-governance.{md,json}`
- `tasks/reports/repo-ops/cleanup-quarantine-manifest.{md,json}`

The `tasks/reports/repo-ops/` directory exists with other dated report files, but none of the canonical outputs the catalog declares have been produced.

### CRITICAL: Template numbering collisions

4 prefix numbers are shared by 2 templates each:

| Prefix | Template A | Template B |
|---|---|---|
| 32 | `agentic-project-management-orchestrator` | `page-content-research-review` |
| 33 | `docs-source-verification` | `skill-docs` |
| 37 | `docs-research-packet-generation` | `docs-review-packet-generation` |
| 38 | `docs-research-to-implementation-plan` | `docs-review-fix-execution` |

### HIGH: 2 orphaned templates

These templates exist but have no corresponding agent-pack skill directory:

- `37-docs-review-packet-generation.template.md`
- `38-docs-review-fix-execution.template.md`

The inverse exists: `docs-review-packet-generation/` and `docs-review-fix-execution/` exist as local ai-skills with full SKILL.md + reference files, but were never exported to agent-packs.

### HIGH: 3 local SKILL.md files have template-only fields

Per `skill-spec-contract.md`, `tier`, `primary_paths`, and `primary_commands` are "template-only operational fields." These local skills include them:

1. `ai-tools/ai-skills/docs-copy/SKILL.md`
2. `ai-tools/ai-skills/docs-review-fix-execution/SKILL.md`
3. `ai-tools/ai-skills/docs-review-packet-generation/SKILL.md`

The validator (`skill-docs.test.js`) does not enforce this rule — it passes with 59 targets checked.

---

## 2. Root Purpose of Each Skill

### Audit Pipeline (run infrastructure checks)

| Skill | Purpose |
|---|---|
| `repo-audit-orchestrator` | Orchestrate all audit stages, produce unified scorecard |
| `script-footprint-and-usage-audit` | Detect script sprawl, duplicates, dead scripts |
| `docs-quality-and-freshness-audit` | Surface TODO/TBD markers, thin content, stale pages |
| `docs-coverage-and-route-integrity-audit` | Audit nav coverage and route integrity |

### Style & Layout Governance (enforce consistency)

| Skill | Purpose |
|---|---|
| `style-and-language-homogenizer-en-gb` | Enforce UK English and style conventions |
| `component-layout-governance` | Validate page composition against layout contracts |
| `generated-mdx-banners-governance` | Standardize generated MDX file banners and indexes |

### Content Authoring (guide page creation and editing)

| Skill | Purpose |
|---|---|
| `page-authoring` | Canonical rules for writing new v2 pages (frontmatter, MDX, structure) |
| `docs-copy` | Route copy work (plan/rewrite/review/claim-update) through correct specialists |
| `product-thinking` | Apply product-management analysis to docs IA and journey design |

### Review Pipeline (fact-check and propagate changes)

| Skill | Purpose |
|---|---|
| `docs-review-packet-generation` | Generate review packets with scope, lint data, research findings |
| `docs-review-fix-execution` | Execute fixes from review packets section-by-section |

### Remediation (clean up repo)

| Skill | Purpose |
|---|---|
| `cleanup-quarantine-manager` | Classify and quarantine obsolete artifacts |
| `rubric-static-review` | Generic 0-100 rubric-based static code review |

### Meta / Governance (manage the skill system itself)

| Skill | Purpose |
|---|---|
| `skill-docs` | Govern skill file structure, frontmatter, validation alignment |
| `cross-agent-packager` | Export skills to Codex/Cursor/Claude/Windsurf agent packs |

---

## 3. What's Not Meeting Its Purpose

### The entire audit pipeline is non-functional

`repo-audit-orchestrator` → `execution-manifest.json` → 6 catalog skills. Every `run` command is broken. Zero output files exist. This pipeline has never produced a result on this branch.

### `skills-template.md` is mislabelled

`ai-tools/ai-skills/skills-template.md` is not a template for creating skills — it is a byte-for-byte copy of `rubric-static-review/SKILL.md` (minus frontmatter). Anyone looking for the skill authoring template gets a code-review rubric instead.

### `docs-copy` — routing overhead exceeds actual work

The skill defines a 7-step workflow loading 3 reference files and conditionally chaining into 5+ other skills (`page-authoring`, `product-thinking`, `docs-source-verification`, `docs-change-review`, `docs-impact-propagation`). For a simple copy edit, this burns most of an agent's context budget on skill-loading before any editing begins.

### `generated-mdx-banners-governance` — 12 script references, all broken

This skill references the most scripts of any skill (12 commands). Every `tools/scripts/` path is stale.

### Duplicate research files

`product-writing.md` and `product-writing-skill-package.md` are identical (325 lines each). Both are unreferenced by any SKILL.md. Also: `copywriting-research.md` is explicitly marked "Research backlog only. No skill changes applied from this note yet."

---

## 4. Bad Implementation vs Best Practice

### No command-path validation in CI

`skill-docs.test.js` checks frontmatter schema and cross-references but does not validate that `run` commands resolve to actual files. This is how 16 broken paths went undetected.

### Validator doesn't enforce its own contract

The contract says template-only fields must not appear in local SKILL.md files. The validator doesn't check this. 3 files violate the rule.

### Two unlinked registries

- `skill-catalog.json` — 9 infrastructure/audit skills
- `manifest.json` — 40 agent-pack skills

No test ensures consistency between them. Skills can exist in one and not the other with no warning.

### Layer count mismatch: 42 → 40 → 16

42 templates, 40 agent-pack exports, 16 local SKILL.md files. The contract defines three layers (template → local → export) but doesn't specify which skills need all three. 24 skills exist only as templates + agent-pack exports with no local SKILL.md. 2 have local SKILL.md but no agent-pack export. The relationship is undocumented.

### Deep chaining creates fragile dependency graphs

`docs-copy` → `page-authoring` → `product-thinking` → `docs-source-verification` → `docs-impact-propagation`. One broken reference anywhere silently degrades the chain.

### Skill count is disproportionate to the domain

42 templates for a documentation repository. Several overlap:

- `docs-quality-and-freshness-audit` vs `docs-coverage-and-route-integrity-audit` (both audit content completeness)
- `docs-review-packet-generation` + `docs-review-fix-execution` (tightly coupled pair)

---

## 5. Supporting File Status

### Actively referenced (in SKILL.md "When to load references" sections)

1. `docs-copy/references/task-routing.md`
2. `docs-copy/references/workflow.md`
3. `docs-copy/references/handoff-checklist.md`
4. `docs-review-fix-execution/references/execution-loop.md`
5. `docs-review-fix-execution/references/tracker-update-rules.md`
6. `docs-review-fix-execution/references/section-closeout.md`
7. `docs-review-fix-execution/references/residual-warning-policy.md`
8. `docs-review-packet-generation/references/validation-checklist.md`
9. `docs-review-packet-generation/references/packet-contract.md`
10. `docs-review-packet-generation/references/scope-derivation.md`
11. `docs-review-packet-generation/references/tracker-contract.md`

### Research artifacts (unreferenced, not converted to skills)

- `product-writing.md` — skill design proposal (325 lines)
- `product-writing-skill-package.md` — duplicate of above
- `product-writing-research-sources.md` — sourcing notes (225 lines)
- `copywriting-research.md` — R1-R15 upgrade backlog (446 lines)
- `_workspace/research/product-writing-research.md` — workspace draft

### Snapshot/inventory files

- `content-map.md` — generated manifest of governance surfaces
- `inventory.json` — machine-readable audit metadata (419 lines)
- `source-content/llms.txt` — nav snapshot for LLM indexing
- `source-content/contribute/` — AGENT-INSTRUCTIONS snapshots (EN, CN, ES, FR)
- `source-content/.github/augment-instructions.md` — retired
