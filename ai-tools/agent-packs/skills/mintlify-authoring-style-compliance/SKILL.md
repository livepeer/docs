---
name: mintlify-authoring-style-compliance
description: >-
  Author and edit MDX content in compliance with repository style and Mintlify
  constraints. Use when: fix style-guide violations in docs, author mdx page
  for livepeer docs, replace ThemeData usage.
metadata:
  version: "1.2"
  category: "governance"
  tier: "1"
primary_paths:
  - "docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md"
  - "v2/resources/documentation-guide/style-guide.mdx"
  - "style.css"
  - "operations/tests/unit/style-guide.test.js"
  - "operations/tests/unit/mdx.test.js"
primary_commands:
  - "node operations/tests/unit/style-guide.test.js --staged"
  - "node operations/tests/unit/mdx.test.js --staged"
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
1. Apply the canonical Mintlify/repo practices together with the style guide's CSS custom property and import rules.
2. Run staged style + MDX tests to verify compliance.
3. Fix violations with minimal, targeted edits.

Command examples
```bash
node operations/tests/unit/style-guide.test.js --staged
node operations/tests/unit/mdx.test.js --staged
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
