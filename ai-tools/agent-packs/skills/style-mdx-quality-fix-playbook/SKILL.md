---
name: style-mdx-quality-fix-playbook
description: >-
  Systematically fix style, MDX, and quality test failures with smallest-risk
  edits. Use when: quality tests failing on docs pages, fix mdx and style
  errors together, frontmatter and content quality cleanup.
metadata:
  version: "1.2"
  category: "governance"
  tier: "1"
primary_paths:
  - "operations/tests/unit/style-guide.test.js"
  - "operations/tests/unit/mdx.test.js"
  - "operations/tests/unit/quality.test.js"
  - "v2/pages"
primary_commands:
  - "node operations/tests/unit/style-guide.test.js --staged"
  - "node operations/tests/unit/quality.test.js --staged"
---

SKILL: Style MDX Quality Fix Playbook

Goal
Resolve core content-quality failures quickly and deterministically across style/mdx/quality suites.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run style/quality checks and classify issues by rule type.
2. Apply minimal fixes in failing files only.
3. Re-run targeted suites until clean.

Command examples
```bash
node operations/tests/unit/style-guide.test.js --staged
node operations/tests/unit/quality.test.js --staged
```

Deliverable Format
- Rule-by-rule fix summary by file.
- Retest outcomes for style, MDX, and quality suites.

Failure Modes / Fallback
- If multiple rule classes cascade, fix parse/frontmatter issues first.
- If warnings are intentional examples, document exceptions explicitly.

Validation Checklist
- [ ] All targeted suites rerun after edits.
- [ ] No new import/style anti-patterns are introduced.
- [ ] Changes avoid protected scopes and `v1/`.
