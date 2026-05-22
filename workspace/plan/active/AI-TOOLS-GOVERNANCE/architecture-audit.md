# AI Capability Architecture Audit

Date: 2026-03-31

Supersedes the narrower Claude/Codex comparison in `workspace/reports/repo-ops/codex-claude-skills-audit-2026-03-30.md` for current governance work.

## Purpose

Inventory every repo-relevant AI capability surface that matters for consolidation, dispatcher design, adapter thinness, and handover readiness. This audit is the source document for deciding what is canonical, what is adapter-only, what is generated, and what remains outside repo governance.

## Classification Contract

Every row in this audit uses the following fields:

| Field | Meaning |
|---|---|
| `artifact_kind` | skill, dispatcher, adapter, reference, generated pack, registry doc, rule |
| `layer` | canonical, adapter, generated, global/platform, legacy |
| `type` | atomic, dispatcher, adapter, governance, reference |
| `concern` | review, research, authoring, repo-ops, validation, migration, release, agent-runtime |
| `source_of_truth` | Canonical path or authoritative surface |
| `consumers` | Who reads or executes it |
| `lifecycle` | keep, consolidate, migrate, retire |
| `compatibility_requirement` | required, alias-only, none |

## Surface Inventory

| Surface | artifact_kind | layer | type | concern | source_of_truth | consumers | lifecycle | compatibility_requirement | Notes |
|---|---|---|---|---|---|---|---|---|---|
| `ai-tools/ai-skills/templates/*.template.md` | skill | canonical | atomic plus future dispatcher | mixed by skill | template files themselves | local skills, exports, Codex sync | keep | required | Current best source-of-truth candidate for shared logic |
| `ai-tools/ai-skills/*/SKILL.md` | skill | canonical | atomic, governance, some workflow wrappers | mixed by skill | per-skill directory plus matching template where present | repo-local consumers and maintainers | consolidate | required | Must stop carrying unique logic not present in canonical sources |
| `ai-tools/ai-skills/*/references/**` and companion bundles | reference | canonical | reference | mixed by skill | local skill roots or companion template bundles | skills, adapters, maintainers | consolidate | required | Shared references should converge toward one canonical bundle per capability |
| `ai-tools/ai-skills/catalog/*.json` | registry doc | canonical | governance | agent-runtime | catalog files | packager, docs, audit pipeline | migrate | alias-only | Subsystem metadata should move conceptually toward canonical packaging metadata |
| `ai-tools/ai-skills/skill-spec-contract.md` | registry doc | canonical | governance | repo-ops | this file | maintainers, validator | keep | required | Contract surface for frontmatter and migration rules |
| `workspace/plan/active/AI-TOOLS-GOVERNANCE/structure.md` | registry doc | canonical | governance | repo-ops | this file | maintainers, planning, handover | keep | required | Canonical architecture and taxonomy reference |
| `ai-tools/agent-packs/skills/**` | generated pack | generated | atomic export | mixed by skill | template files | portable pack consumers | keep | required | Generated only; must never own unique logic |
| `ai-tools/agent-packs/codex/skills-manifest.json` | generated pack | generated | governance | agent-runtime | templates plus packaging metadata | Codex discovery and pack docs | keep | required | Generated manifest; not the repo skill catalogue |
| `ai-tools/agent-packs/claude/CLAUDE.md` | generated pack | generated | adapter | agent-runtime | canonical templates plus packaging scripts | Claude reference pack consumers | keep | alias-only | Generated convenience pack, not canonical runtime adapter |
| `ai-tools/agent-packs/cursor/rules.md` and `ai-tools/agent-packs/windsurf/rules.md` | generated pack | generated | adapter | agent-runtime | canonical templates plus packaging scripts | Cursor and Windsurf reference pack consumers | keep | alias-only | Generated onboarding/reference outputs |
| `AGENTS.md` | adapter | canonical | adapter | agent-runtime | root AGENTS baseline | all repo coding agents | keep | required | Canonical cross-agent runtime baseline |
| `.claude/CLAUDE.md` | adapter | adapter | adapter | agent-runtime | `AGENTS.md` plus repo-specific Claude runtime needs | Claude Code | keep | required | Must remain thin; can carry Claude discovery/runtime glue |
| `.claude/skills/*` | adapter | adapter | adapter | agent-runtime | matching canonical skill body | Claude slash-command discovery | keep | required | Thin registration layer only; no unique workflow logic |
| `.github/AGENTS.md` | adapter | adapter | adapter | agent-runtime | `AGENTS.md` plus Codex-specific task isolation rules | Codex | keep | required | Runtime extension layer, not skill source-of-truth |
| `.github/copilot-instructions.md`, `.cursor/rules/**`, `.windsurf/rules/**`, `.augment/rules/**` | adapter | adapter | adapter | agent-runtime | `AGENTS.md` plus tool-specific constraints | Copilot, Cursor, Windsurf, Augment | keep | required | Thin runtime surfaces only |
| `operations/scripts/integrators/ai/agents/cross-agent-packager.js` | registry doc | canonical | governance | agent-runtime | script file | generated pack workflows | keep | required | Packaging path for generated packs |
| `operations/scripts/integrators/ai/agents/sync-codex-skills.js` | registry doc | canonical | governance | agent-runtime | script file | Codex local sync workflows | keep | required | Sync path for managed local Codex installs |
| `ai-tools/ai-rules/**` | rule | legacy | reference | repo-ops | per-file docs and policies | maintainers and adapter docs | consolidate | alias-only | Advisory lane; keep separate from canonical skill logic |
| `.codex/README.md` and `.codex/task-contract.yaml` | rule | canonical | governance | agent-runtime | files themselves | Codex task execution | keep | required | Repo-governed Codex runtime contract, not skill logic |
| `~/.codex/skills/**` managed subset synced from repo templates | adapter | global/platform | adapter | agent-runtime | repo templates via `sync-codex-skills.js` | local Codex runtime | keep | alias-only | Repo-managed install target, but not repo source-of-truth |
| `~/.codex/skills/**` global/plugin/system-only subset | adapter | global/platform | adapter | agent-runtime | OpenAI/system/plugin sources | local Codex runtime | keep | none | Must be boundary-marked and excluded from repo governance |

## Main Gaps

### 1. Canonical logic is split across too many operational surfaces

- Templates are the best current source-of-truth candidate.
- Some local `SKILL.md` files and references still act like parallel sources.
- Generated packs are easy to mistake for canonical docs.

### 2. Adapter thinness is not enforced strongly enough

- Claude local skills remain useful for invocation, but they should be registration wrappers only.
- Codex runtime guidance is split between repo docs, synced local skills, and global/plugin layers.

### 3. Dispatcher workflows are implied rather than governed

- Review and research workflows exist as multiple adjacent skills, not as named top-level dispatcher assets.
- Shipping and handover workflows are still composed manually in chat.

### 4. Repo-governed versus global/platform surfaces are blurred

- `~/.codex/skills` contains both repo-synced and non-repo assets.
- Without a boundary rule, people will keep treating local Codex install state as a canonical repo inventory.

## New Taxonomy Mapping

| Existing category | New `type` | New `concern` | Typical migration direction |
|---|---|---|---|
| `audit` | `atomic` | `research` | Keep as canonical atomic skills |
| `authoring` | `atomic` | `authoring` | Keep as canonical atomic skills |
| `content-pipeline` | `dispatcher` | `authoring` | Recast as governed dispatchers |
| `governance` | `governance` | `repo-ops` | Keep, but separate policy from runnable logic |
| `review-pipeline` | `dispatcher` | `review` | Recast as governed dispatchers |
| `meta` | `governance` or `dispatcher` | `agent-runtime` or `repo-ops` | Split packaging/runtime from orchestration |

## Dispatcher Family

### Phase 1 governed dispatcher targets

| Dispatcher | Goal | Candidate atomic skills | Output shape |
|---|---|---|---|
| `research-review-packet` | Gather evidence and create review-ready research packets | `docs-source-verification`, `docs-impact-propagation`, `docs-change-review`, `docs-research-packet-generation` | report bundle with evidence, contradictions, scope map |
| `review-fix` | Turn review findings into scoped edits plus validation | `docs-review-packet-generation`, `docs-review-fix-execution`, `staged-test-suite-runner`, `precommit-failure-triage` | fix summary plus validation state |
| `handover-readiness` | Produce confidence signals for repo handoff | `rubric-static-review`, `structure-and-allowlist-guardrails`, `staged-test-suite-runner`, `docs-status-table-generation` | handover scorecard and blockers |
| `page-ship` | Take a page from reviewed draft to shippable state | `page-content-research-review`, `docs-copy`, `docs-ia-route-placement`, `mintlify-authoring-style-compliance`, `v2-link-audit-runbook`, `v2-browser-sweep-runbook` | page ship checklist, verification, residual risks |
| `repo-cleanup-handover` | Package cleanup and documentation for repo handoff | `repo-audit-orchestrator`, `structure-and-allowlist-guardrails`, `script-header-and-index-sync`, `rubric-static-review` | cleanup audit, governance notes, handover artifacts |

## Migration Matrix

| Current path family | Target layer | Action |
|---|---|---|
| `ai-tools/ai-skills/templates/**` | `canonical/skills` or `canonical/dispatchers` | Keep as canonical input now; map to future canonical folders conceptually first |
| `ai-tools/ai-skills/*/SKILL.md` | `canonical/skills` or `adapters/repo-local` | Audit for unique logic; keep only if repo-local consumption requires it |
| `ai-tools/ai-skills/*/references/**` | `canonical/references` | Consolidate duplicate or overlapping bundles |
| `ai-tools/ai-skills/catalog/**` | `canonical/packaging` or `registry/` | Refactor over time into packaging metadata rather than parallel catalog truth |
| `ai-tools/agent-packs/**` | `generated/**` | Preserve as generated outputs only |
| `.claude/skills/*` | external adapter surface | Keep as thin wrappers for Claude discovery |
| `.claude/CLAUDE.md`, `.github/AGENTS.md`, `.cursor/rules/**`, `.windsurf/rules/**`, `.augment/rules/**` | external adapter surfaces | Keep operational; ensure they point at canonical repo logic |
| `~/.codex/skills/**` | global/platform boundary | Separate repo-managed synced subset from plugin/system/user-global surfaces |

## Decisions Implemented by This Audit

- `ai-tools/` stays the active root in this phase.
- The repo moves to a script-like classification model with AI-specific additions.
- Dispatcher families are part of the governed architecture now, even before broad physical restructuring.
- Compatibility wrappers stay during migration.
- Global/platform skills remain available but are outside repo governance.
