---
name: docs-ia-route-placement
version: "1.0"
description: >-
  Place new or moved content in the correct v2 section hierarchy and route context. Use when tasks include where should this page live in v2, move docs page to correct section, fix information architecture placement.
tier: 1
invoke_when:
  - "where should this page live in v2"
  - "move docs page to correct section"
  - "fix information architecture placement"
primary_paths:
  - "v2/pages"
  - "docs.json"
  - "README.md"
  - "v2/resources/documentation-guide/documentation-guide.mdx"
primary_commands:
  - "rg --files v2/pages"
  - "node tools/scripts/generate-pages-index.js --staged"
---

SKILL: Docs IA Route Placement

Goal
Ensure documentation lives in the right domain section and preserves navigation/user-journey coherence.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Map requested content to domain prefix in `v2/pages/*`.
2. Check route visibility and warnings against docs navigation context.
3. Run index generation checks after moves/additions.

Command examples
```bash
rg --files v2/pages
node tools/scripts/generate-pages-index.js --staged
```

Deliverable Format
- Chosen section path and rationale.
- Index-sync result for placement validation.

Failure Modes / Fallback
- If content spans domains, place canonical version in primary domain and cross-link.
- Avoid creating duplicate pages across multiple tabs unless explicitly required.

Validation Checklist
- [ ] Placement aligns with existing IA patterns.
- [ ] Generated indexes stay consistent.
- [ ] No `v1/` relocation operations are introduced.
