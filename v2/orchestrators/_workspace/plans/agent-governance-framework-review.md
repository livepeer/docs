# Agent Governance Framework Review

Status:

- non-canonical review artifact
- prepared on `2026-03-16`
- accepted decisions are already folded into `docs-guide/policies/agent-governance-framework.mdx`

## Goal

Review the current agent-rule surface, compare it to the approved supported paths, and lock a migration-ready governance framework before Task 3 rewrites any actual rule files.

Approved target paths:

- `AGENTS.md`
- `.github/copilot-instructions.md`
- `.claude/CLAUDE.md`
- `.cursor/rules/*.mdc`
- `.windsurf/rules/*.md`

## Current Surface Inventory

| Surface | Current function | Classification | Keep / migrate / retire |
|---|---|---|---|
| `.github/AGENTS.md` | repo-wide rules, safety, structure, and workflow guidance | legacy to retire | migrate baseline policy into root `AGENTS.md`, then retire this file |
| `.github/copilot-instructions.md` | Copilot-native instructions with duplicated repo policy | native adapter | keep, but shrink to Copilot-specific delta only |
| `.github/augment-instructions.md` | Augment-specific instruction copy | legacy to retire | retire unless Augment is restored to the supported agent matrix |
| `.cursorrules` | current Cursor-facing rule file | legacy to retire | migrate to `.cursor/rules/*.mdc`, then retire |
| `ASSISTANT.md` | repo-local assistant contract | legacy to retire | move cross-agent baseline into `AGENTS.md`; keep Mintlify assistant behavior separate only if later needed |
| `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` | contributor-facing workflow summary | recommended supplemental | keep as a short human-facing guide that points to canonical policies |
| `ai-tools/agent-packs/README.md` | generated pack documentation | recommended supplemental | keep generated, non-canonical |
| `ai-tools/agent-packs/claude/CLAUDE.md` | generated Claude adapter pack output | recommended supplemental | keep generated, non-canonical |
| `ai-tools/agent-packs/cursor/rules.md` | generated Cursor adapter pack output | recommended supplemental | keep generated, non-canonical |
| `ai-tools/agent-packs/windsurf/rules.md` | generated Windsurf adapter pack output | recommended supplemental | keep generated, non-canonical |
| `.codex/README.md` | Codex lock and worktree guidance | recommended supplemental | keep |
| `.codex/task-contract.yaml` | Codex task contract | recommended supplemental | keep |
| `.codex/locks-local/*` | Codex local lock state | recommended supplemental | keep |
| `tools/scripts/validators/governance/check-agent-docs-freshness.js` | enforcement script for agent doc presence/freshness | recommended supplemental | update in Task 3 to match the new canonical file set |

## Overlap and Drift Risk

### Drift cluster 1: repo-wide safety and structure rules

Currently duplicated across:

- `.github/AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/augment-instructions.md`
- `.cursorrules`
- `ASSISTANT.md`

Risk:

- policy drift
- outdated path references
- conflicting instructions for the same repo constraint

Decision:

- consolidate shared policy into root `AGENTS.md`
- leave only adapter-specific syntax or tool guidance in native adapter files

### Drift cluster 2: contributor-facing agent guidance

Currently duplicated across:

- `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md`
- parts of `.github/AGENTS.md`
- parts of `ASSISTANT.md`

Decision:

- keep `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md` as the human-facing workflow explainer
- reduce it to links and short procedural guidance, not canonical rule ownership

### Drift cluster 3: generated pack outputs versus source policy

Currently present in:

- `ai-tools/agent-packs/*`

Decision:

- generated packs remain outputs only
- they must never become the canonical source of repo policy

## Locked Governance Framework

### Canonical baseline

- root `AGENTS.md`

### Native adapters

- `.github/copilot-instructions.md`
- `.claude/CLAUDE.md`
- `.cursor/rules/*.mdc`
- `.windsurf/rules/*.md`

### Required repo knowledge set

- `docs.json`
- `README.md`
- `docs-guide/**`
- `contribute/**`
- `v2/**`
- `.githooks/pre-commit`
- `.githooks/pre-push`
- `tools/scripts/validators/governance/*`
- `.codex/*`

### Must-have rule domains

- destructive git safety
- hook and validation policy
- root allowlist policy
- source-of-truth order
- `v1` freeze
- branch and lock governance
- path-migration discipline

### Recommended rule domains

- answer style
- review hygiene
- component and style conventions
- route-placement heuristics
- change-propagation habits

## Migration Map for Task 3

1. Create root `AGENTS.md` as the canonical cross-agent baseline.
2. Create `.claude/CLAUDE.md`, `.cursor/rules/*.mdc`, and `.windsurf/rules/*.md` as native adapters.
3. Reduce `.github/copilot-instructions.md` to Copilot-specific adapter content that references `AGENTS.md`.
4. Retire `.github/AGENTS.md`, `.github/augment-instructions.md`, `.cursorrules`, and `ASSISTANT.md` only after replacements exist.
5. Update `tools/scripts/validators/governance/check-agent-docs-freshness.js` to validate the new canonical set.
6. Regenerate or replace `ai-tools/agent-packs/*` after the new source policy is live.

## Prior Reports Included

This review incorporates:

- `2026-03-16` root allowlist re-review and root-entry matrix
- `2026-03-16` agent root file decision set:
  - `AGENTS.md`
  - `.github/copilot-instructions.md`
  - `.claude/CLAUDE.md`
  - `.cursor/rules/`
  - `.windsurf/rules/`

## Sources

### Repo evidence

- `.github/AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/augment-instructions.md`
- `.cursorrules`
- `ASSISTANT.md`
- `contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md`
- `ai-tools/agent-packs/README.md`
- `.codex/README.md`
- `.codex/task-contract.yaml`
- `tools/scripts/validators/governance/check-agent-docs-freshness.js`

### Official docs

- [OpenAI Codex AGENTS.md](https://developers.openai.com/codex/guides/agents-md)
- [Claude Code memory and project instructions](https://code.claude.com/docs/en/memory)
- [Cursor rules for AI](https://docs.cursor.com/context/rules-for-ai)
- [Windsurf memories](https://docs.windsurf.com/plugins/cascade/memories)
- [Windsurf AGENTS.md](https://docs.windsurf.com/windsurf/cascade/agents-md)
- [GitHub Copilot custom instructions](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions)
