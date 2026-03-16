---
name: mdx-parent-child-scope-patterns
version: "1.0"
description: >-
  Implement MDX-in-MDX imports and variable scope patterns that align with Mintlify behavior constraints. Use when tasks include mdx child file cannot access variable, fix mdx-in-mdx import issues, duplicate import errors in snippets pages.
tier: 1
invoke_when:
  - "mdx child file cannot access variable"
  - "fix mdx-in-mdx import issues"
  - "duplicate import errors in snippets pages"
primary_paths:
  - "snippets/snippetsWiki/mintlify-behaviour.mdx"
  - "snippets/pages"
  - "tests/unit/mdx.test.js"
  - "tests/unit/links-imports.test.js"
primary_commands:
  - "rg -n \"import .*\\.mdx\" snippets/pages v2/pages"
  - "node tests/unit/links-imports.test.js --staged"
---

SKILL: MDX Parent-Child Scope Patterns

Goal
Prevent broken MDX composition by following parent/child import and scope rules for this repo.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.
- For MDX-facing `.jsx` modules, do not hoist shared guard logic into private file-scope helpers. Keep it inline in the exported component or import it from a colocated non-component `.js` helper module.

Workflow
1. Inspect parent/child MDX import graph and detect duplicated or missing imports.
2. Apply scope rules: shared imports in parent; child-only imports where needed; no private file-scope helper hoisting in MDX-facing `.jsx` modules.
3. Validate with staged MDX and links/imports checks.

Command examples
```bash
rg -n \"import .*\\.mdx\" snippets/pages v2/pages
node tests/unit/links-imports.test.js --staged
```

Deliverable Format
- Import/scope correction list by file.
- Validation results for MDX and imports checks.

Failure Modes / Fallback
- If scope behavior is ambiguous, reduce to a minimal repro in one parent/child pair.
- Prefer explicit imports over brittle implicit assumptions when uncertain.

Validation Checklist
- [ ] No duplicate import regressions remain in affected files.
- [ ] Parent/child scope decisions are documented.
- [ ] Staged import checks are run.
