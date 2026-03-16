---
name: component-library-guided-authoring
version: "1.0"
description: >-
  Use existing snippets components and library patterns before introducing new presentation logic. Use when tasks include which component should I use, add docs UI using existing snippets components, avoid creating new component if possible.
tier: 1
invoke_when:
  - "which component should I use"
  - "add docs UI using existing snippets components"
  - "avoid creating new component if possible"
primary_paths:
  - "v2/resources/documentation-guide/component-library.mdx"
  - "snippets/components"
  - "v2/resources/documentation-guide/snippets-inventory.mdx"
  - "tools/scripts/snippets/update-component-library.sh"
primary_commands:
  - "rg --files snippets/components"
  - "bash tools/scripts/snippets/update-component-library.sh"
---

SKILL: Component Library Guided Authoring

Goal
Prefer reusable components and documented props to keep docs UI consistent and maintainable.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Locate candidate components by domain/type and confirm props in component library docs.
2. Apply existing components in MDX before considering net-new component work.
3. Refresh component library inventory when component tree changes.

Command examples
```bash
rg --files snippets/components
bash tools/scripts/snippets/update-component-library.sh
```

Deliverable Format
- Component selection rationale tied to existing files.
- Any inventory refresh output if component files changed.

Failure Modes / Fallback
- If no suitable component exists, document gap and propose smallest additive component.
- Avoid changing widely shared component contracts without explicit request.

Validation Checklist
- [ ] At least one existing component candidate was evaluated.
- [ ] New component creation is justified only when reuse fails.
- [ ] Commands and paths map to current repo structure.
