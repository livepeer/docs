# ai-tools/

All AI agent tooling for the Livepeer Docs repo: skills, templates, agent-pack exports, rules, and registry.

## Directory map

| Path | Contents | Status |
|---|---|---|
| `ai-skills/` | Skill system — templates (canonical), local SKILL.md roots, workspace, and catalog | Governed. See `ai-skills/README.md` |
| `agent-packs/` | Generated adapter outputs for Codex, Cursor, Claude Code, Windsurf | Generated — do not edit manually. See `agent-packs/README.md` |
| `registry/` | Canonical inventory of all `ai-tools/**` artifacts — lane model, lifecycle state | Governed. See `registry/README.md` |
| `ai-rules/` | Legacy safety protocol docs from the pre-governance era | Advisory only. Core policy is now in `AGENTS.md` |
| `claude-code.mdx` | Agent setup guide for Claude Code | Doc page. In nav under Internal Hub → Tooling |
| `cursor.mdx` | Agent setup guide for Cursor | Doc page. In nav under Internal Hub → Tooling |
| `windsurf.mdx` | Agent setup guide for Windsurf | Doc page. In nav under Internal Hub → Tooling |

## Where to start

| Goal | Start here |
|---|---|
| Use or install skills | `ai-skills/README.md` |
| Understand the registry / lane model | `registry/README.md` |
| Set up an agent (Claude Code, Cursor, Windsurf) | The relevant `.mdx` file in this directory |
| Generate agent-pack adapters | `agent-packs/README.md` |
| Understand what's governed and how | `docs-guide/policies/agent-governance-framework.mdx` |

## Governance

- Canonical policy: `docs-guide/policies/agent-governance-framework.mdx`
- Root allowlist: `docs-guide/policies/root-allowlist-governance.mdx`
- Registry: `ai-tools/registry/ai-tools-registry.json`
- Skill validator: `node operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js`

The `ai-rules/` subdirectory is `advisory_only` in the registry. The safety rules that actually gate CI live in `AGENTS.md` and the git hook layer, not in `ai-rules/`.
