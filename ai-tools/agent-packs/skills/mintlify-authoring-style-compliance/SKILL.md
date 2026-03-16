---
name: mintlify-authoring-style-compliance
version: "1.0"
description: >-
  Author and edit MDX content in compliance with repository style and Mintlify constraints. Use when tasks include fix style-guide violations in docs, author mdx page for livepeer docs, replace ThemeData usage.
tier: 1
invoke_when:
  - "fix style-guide violations in docs"
  - "author mdx page for livepeer docs"
  - "replace ThemeData usage"
primary_paths:
  - "v2/resources/documentation-guide/style-guide.mdx"
  - "style.css"
  - "tests/unit/style-guide.test.js"
  - "tests/unit/mdx.test.js"
primary_commands:
  - "node tests/unit/style-guide.test.js --staged"
  - "node tests/unit/mdx.test.js --staged"
---

SKILL: Mintlify Authoring Style Compliance

Goal
Produce docs edits that satisfy style-guide rules and Mintlify behavior without introducing anti-patterns.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Apply CSS custom property rules and absolute import rules from style guide.
2. Run staged style + MDX tests to verify compliance.
3. Fix violations with minimal, targeted edits.

Command examples
```bash
node tests/unit/style-guide.test.js --staged
node tests/unit/mdx.test.js --staged
```

Deliverable Format
- List of corrected style/MDX issues by file.
- Post-fix staged test results.

Failure Modes / Fallback
- If style errors are unclear, isolate failing file and rerun unit tests on narrowed scope.
- If MDX parsing fails, inspect frontmatter and JSX blocks first.

Validation Checklist
- [ ] No ThemeData patterns introduced.
- [ ] All imports to snippets use absolute paths.
- [ ] Staged style/MDX checks pass or failures are explicitly documented.
