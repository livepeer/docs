---
name: component-library-index-refresh
description: >-
  Refresh component inventory documentation generated from snippets component
  directories. Use when: update component inventory page, new component not
  listed in library index, refresh snippets wiki component tree.
metadata:
  version: "1.2"
  category: "governance"
  tier: "2"
primary_paths:
  - "operations/scripts/snippets/update-component-library.sh"
  - "snippets/snippetsWiki/componentLibrary/index.mdx"
  - "snippets/components"
  - "operations/scripts/snippets/paths.config.json"
primary_commands:
  - "bash operations/scripts/snippets/update-component-library.sh"
  - "bash operations/scripts/snippets/test-scripts.sh"
---

SKILL: Component Library Index Refresh

Goal
Keep component inventory pages aligned with actual component tree after additions/removals.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run generator after component tree changes.
2. Review generated tree output for missing/extra folders.
3. Validate script health with snippets test helper script.

Command examples
```bash
bash operations/scripts/snippets/update-component-library.sh
bash operations/scripts/snippets/test-scripts.sh
```

Deliverable Format
- Updated component-library index artifact.
- Validation notes for generation script execution.

Failure Modes / Fallback
- If script path resolution fails, verify repo-root detection and paths config.
- If generated output drifts from intended scope, adjust input folder filters only.

Validation Checklist
- [ ] Generated index reflects current `snippets/components` tree.
- [ ] No manual hand-editing in auto-generated block.
- [ ] Script commands run without bypassing safety controls.
