---
name: n8n-workflow-maintenance
description: Audit and maintain n8n automation JSON workflows and their output contracts for docs data feeds.
tier: 3
triggers:
  - "update n8n automation json"
  - "n8n workflow drift from docs outputs"
  - "audit active vs inactive n8n flows"
primary_paths:
  - "snippets/automations/scripts/n8n"
  - "v2/resources/documentation-guide/automations-workflows.mdx"
  - "snippets/automations"
primary_commands:
  - "find snippets/automations/scripts/n8n -maxdepth 1 -name \"*.json\" | sort"
  - "node -e \"JSON.parse(require(\"fs\").readFileSync(\"snippets/automations/scripts/n8n/Luma-To-Mintlify.json\",\"utf8\")); console.log(\"ok\")\""
---

SKILL: n8n Workflow Maintenance

Goal
Keep n8n automation definitions parseable, discoverable, and aligned with current docs data model.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Enumerate workflow JSON files and parse-validate each target workflow.
2. Check output file destinations against current snippets/automations structure.
3. Document active/inactive status and maintenance priority.

Command examples
```bash
find snippets/automations/scripts/n8n -maxdepth 1 -name \"*.json\" | sort
node -e \"JSON.parse(require(\"fs\").readFileSync(\"snippets/automations/scripts/n8n/Luma-To-Mintlify.json\",\"utf8\")); console.log(\"ok\")\"
```

Deliverable Format
- Workflow inventory with parse status and output target mapping.
- Prioritized maintenance list for broken or stale flows.

Failure Modes / Fallback
- If environment-specific nodes are missing, validate schema-only and record runtime assumptions.
- Keep workflow edits minimal and backward-compatible where possible.

Validation Checklist
- [ ] At least one workflow JSON parse check passes.
- [ ] Inventory command reflects current workflow set.
- [ ] No non-target directories are modified.
