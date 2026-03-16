---
name: component-library-index-refresh
version: "1.0"
description: >-
  Refresh component inventory documentation generated from snippets component directories. Use when tasks include update component inventory page, new component not listed in library index, refresh snippets wiki component tree.
tier: 2
invoke_when:
  - "update component inventory page"
  - "new component not listed in library index"
  - "refresh snippets wiki component tree"
primary_paths:
  - "tools/scripts/snippets/update-component-library.sh"
  - "snippets/snippetsWiki/componentLibrary/index.mdx"
  - "snippets/components"
  - "tools/scripts/snippets/paths.config.json"
primary_commands:
  - "bash tools/scripts/snippets/update-component-library.sh"
  - "bash tools/scripts/snippets/test-scripts.sh"
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
bash tools/scripts/snippets/update-component-library.sh
bash tools/scripts/snippets/test-scripts.sh
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
