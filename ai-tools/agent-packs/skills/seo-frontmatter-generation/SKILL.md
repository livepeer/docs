---
name: seo-frontmatter-generation
version: "1.0"
description: >-
  Generate and normalize SEO metadata fields in MDX frontmatter with safe, repo-supported scripts. Use when tasks include generate seo metadata for docs pages, missing keywords or og:image in mdx, bulk frontmatter seo normalization.
tier: 2
invoke_when:
  - "generate seo metadata for docs pages"
  - "missing keywords or og:image in mdx"
  - "bulk frontmatter seo normalization"
primary_paths:
  - "tools/scripts/snippets/generate-seo.js"
  - "tools/scripts/dev/seo-generator-safe.js"
  - "v2/pages"
  - "snippets/assets/domain"
primary_commands:
  - "node tools/scripts/snippets/generate-seo.js --dry-run"
  - "node tools/scripts/snippets/generate-seo.js --file=v2/resources/documentation-guide/style-guide.mdx"
---

SKILL: SEO Frontmatter Generation

Goal
Keep page metadata consistent and complete using scripted generation for keywords/descriptions/images.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run dry-run first to preview metadata changes.
2. Run targeted file or scoped generation command as needed.
3. Review frontmatter diffs for accidental content changes.

Command examples
```bash
node tools/scripts/snippets/generate-seo.js --dry-run
node tools/scripts/snippets/generate-seo.js --file=v2/resources/documentation-guide/style-guide.mdx
```

Deliverable Format
- SEO field updates by file (keywords/description/og:image).
- Dry-run vs applied-run delta summary.

Failure Modes / Fallback
- If YAML formatting is malformed, repair frontmatter syntax before rerunning generator.
- Prefer targeted file mode when broad generation is too noisy.

Validation Checklist
- [ ] Commands include dry-run and targeted execution.
- [ ] Only intended frontmatter fields change.
- [ ] No style-guide guardrails are violated.
