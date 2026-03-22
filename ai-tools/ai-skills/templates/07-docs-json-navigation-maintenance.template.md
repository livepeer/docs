---
name: docs-json-navigation-maintenance
description: >-
  Maintain docs.json navigation structures safely and consistently with
  route/file reality. Use when: update docs navigation, add page to docs.json,
  fix docs.json route warnings.
metadata:
  version: "1.2"
  category: "governance"
  tier: "1"
primary_paths:
  - "docs.json"
  - "tests/utils/file-walker.js"
  - "operations/scripts/generators/content/catalogs/generate-pages-index.js"
  - "tests/integration/v2-link-audit.js"
primary_commands:
  - "node operations/scripts/generators/content/catalogs/generate-pages-index.js"
  - "node tests/integration/v2-link-audit.js --staged --strict --report /tmp/livepeer-link-audit-staged.md"
---

SKILL: docs.json Navigation Maintenance

Goal
Update navigation without introducing broken routes, bad nesting, or drift from filesystem reality.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Edit navigation entries with strict route normalization in mind.
2. Cross-check route keys against file walker/link-audit behavior.
3. Run index and link checks to catch misconfigured entries.

Command examples
```bash
node operations/scripts/generators/content/catalogs/generate-pages-index.js
node tests/integration/v2-link-audit.js --staged --strict --report /tmp/livepeer-link-audit-staged.md
```

Deliverable Format
- Navigation delta summary (groups/pages updated).
- Post-edit validation outputs.

Failure Modes / Fallback
- If route ambiguity persists, verify normalized route form and remove duplicate aliases.
- Treat docs.json as read-only allowlist for warning markers when using index generator.

Validation Checklist
- [ ] No obvious missing-target route entries remain in changed areas.
- [ ] Link/index checks executed after nav changes.
- [ ] Protected files outside scope are untouched.
