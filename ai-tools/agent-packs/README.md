# Agent Packs

Generated cross-agent skill exports for Codex, Cursor, Claude Code, and Windsurf.

> **Do not edit these files directly.** They are generated from canonical sources in `ai-tools/ai-skills/`. Edit the source templates or local SKILL.md files, then regenerate.

## What's in here

| Directory | Format | Consumed by |
|---|---|---|
| `claude/` | `CLAUDE.md` | Claude Code (`.claude/CLAUDE.md` adapter) |
| `codex/` | `skills-manifest.json` | OpenAI Codex (`~/.codex/skills/`) |
| `cursor/` | `rules.md` | Cursor (`.cursor/rules/` adapter) |
| `windsurf/` | `rules.md` | Windsurf (`.windsurf/rules/` adapter) |
| `skills/` | per-skill `SKILL.md` | portable skill bundle, all agents |

## Audit Pipeline Stages

The `repo-audit-orchestrator` runs these stages in order:

| Order | Skill ID | Goal | Mode |
|---:|---|---|---|
| 1 | `script-footprint-and-usage-audit` | Detect script sprawl, duplicates, placeholders, and backup artifacts. | static, full |
| 2 | `docs-quality-and-freshness-audit` | Surface TODO/TBD/Coming Soon markers, thin content, and freshness risk. | static, full |
| 3 | `style-and-language-homogenizer-en-gb` | Enforce UK English and style consistency on English v2 docs. | static, full |
| 4 | `component-layout-governance` | Validate page composition against component layout contracts by page type. | static, full |
| 5 | `cleanup-quarantine-manager` | Classify cleanup candidates and apply conservative quarantine only when requested. | static, full |
| 6 | `cross-agent-packager` | Generate consistent skill packs for Codex, Cursor, Claude Code, and Windsurf. | static, runtime, full |

## Regenerate

```bash
node tools/scripts/automations/ai/agents/cross-agent-packager.js --agent-pack all
```

## Run the full pipeline

```bash
node tools/scripts/dispatch/governance/repo/repo-audit-orchestrator.js --mode static --scope full
```

## Canonical sources

| What | Where |
|---|---|
| Portable skill templates | `ai-tools/ai-skills/templates/*.template.md` |
| Local repo skill roots | `ai-tools/ai-skills/*/SKILL.md` |
| Pipeline execution manifest | `ai-tools/ai-skills/catalog/execution-manifest.json` |
| Skill catalog | `ai-tools/ai-skills/catalog/skill-catalog.json` |
| AI-tools registry | `ai-tools/registry/ai-tools-registry.json` |
| Governance policy | `docs-guide/policies/agent-governance-framework.mdx` |
