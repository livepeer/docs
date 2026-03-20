# ai-tools/registry/

Canonical inventory for all artifacts under `ai-tools/**`. The registry is the source of truth for what exists, how each artifact is classified, and which lane it belongs to.

## Files

| File | Purpose |
|---|---|
| `ai-tools-registry.json` | Primary registry — all entries, lane definitions, lifecycle states, and repair metadata |
| `ai-tools-registry.schema.json` | JSON Schema for the registry file. Validator uses this to enforce structure |
| `ai-tools-inventory.md` | Generated human-readable report — do not edit manually |
| `llms-txt-notes.md` | Reference notes on Mintlify's `llms.txt` feature and the scripts that generate it |

## When to update

Add or update a registry entry any time an artifact under `ai-tools/**` is:

- **Added** — new skill, template, agent-pack, or rule surface
- **Moved** — path changes require updating the `path_patterns` on the relevant lane and any direct entry paths
- **Retired** — set `lifecycle_state` to `retired` and move to the `retired` lane

Do not delete entries. Use `lifecycle_state: retired` instead.

## Validate and generate

```bash
# Validate registry structure and coverage
node tools/scripts/validators/governance/compliance/validate-ai-tools-registry.js --check --coverage

# Validate lane assignments
node tools/scripts/validators/governance/compliance/validate-ai-tools-registry.js --check --lanes

# Write the generated inventory report
node tools/scripts/validators/governance/compliance/validate-ai-tools-registry.js --write-report
```

## Lane model

| Lane | Path pattern | advisory_only |
|---|---|---|
| `templates` | `ai-tools/ai-skills/templates/**` | false |
| `local` | `ai-tools/ai-skills/*/SKILL.md` | false |
| `workspace` | `ai-tools/ai-skills/_workspace/**` | false |
| `exports` | `ai-tools/agent-packs/**` | false |
| `rules` | `ai-tools/ai-rules/**` | true |
| `manual-doc` | registry, setup guides, catalog docs | true |
| `retired` | reserved | true |

`advisory_only: true` lanes are tracked in the registry but are not validated by CI. Changes to those lanes will not block PRs.

## Canonical governance

- Agent governance policy: `docs-guide/policies/agent-governance-framework.mdx`
- Root allowlist governance: `docs-guide/policies/root-allowlist-governance.mdx`
- AI-tools catalog page: `docs-guide/catalog/ai-tools.mdx`
