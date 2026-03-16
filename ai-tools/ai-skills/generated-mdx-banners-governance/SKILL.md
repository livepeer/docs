---
name: generated-mdx-banners-governance
version: "1.0"
description: >-
  Standardize generated MDX artifacts with consistent frontmatter, hidden generated banners, and visible Note policy across docs-guide and v2 generators while preserving provenance and parity rules.
invoke_when:
  - "add or update generated mdx banners"
  - "enforce generated page note parity"
  - "migrate generated docs outputs safely"
---

SKILL: Generated MDX Banner Governance

Goal
Apply one deterministic pattern for generated MDX metadata and labeling, and enforce it via generators plus automated checks.

Required Pattern
- Non-i18n generated MDX files:
  - Include frontmatter with at least `title` and `description`.
  - Include standardized hidden generated banner comment (`generated-file-banner:v1`).
  - Include visible `<Note>` block with generation script, purpose, rerun trigger, and do-not-edit command.
- i18n generated MDX files:
  - Require hidden `codex-i18n` provenance comment.
  - Visible generated `<Note>` must match source-page parity:
    - Keep `<Note>` when source English page includes generated `<Note>`.
    - Remove `<Note>` when source English page does not include generated `<Note>`.

Single Source of Formatting
- Use `tools/lib/generated-file-banners.js` for:
  - frontmatter builders
  - hidden banner builders/parsers
  - generated `<Note>` helpers
- Do not duplicate banner strings inside individual generators.

Primary Files to Touch
- `tools/lib/generated-file-banners.js`
- `tools/scripts/generate-docs-guide-indexes.js`
- `tools/scripts/generate-docs-guide-pages-index.js`
- `tools/scripts/generate-docs-guide-components-index.js`
- `tools/scripts/generate-pages-index.js`
- `tests/unit/script-docs.test.js`
- `tools/scripts/enforce-generated-file-banners.js`
- `tools/scripts/i18n/translate-docs.js`
- `tests/unit/docs-guide-sot.test.js`
- `tests/run-all.js`
- `tests/run-pr-checks.js`
- `tests/package.json`

Scripts Catalog Migration Rule
- Canonical path: `docs-guide/catalog/scripts-catalog.mdx`.
- Keep legacy cleanup for the retired scripts index path in generator/test logic.
- Update all maintained references when migration occurs.

Execution Steps
1. Update shared banner utility first.
2. Update each generator to consume shared utility.
3. Update `script-docs.test.js` for aggregate `.mdx` output and `--check-indexes` non-mutating verification mode.
4. Add/update enforcer script (`--check`, `--write`).
5. Wire enforcer into docs-guide SoT and test runners.
6. Regenerate outputs using write commands.
7. Re-run checks and resolve drift.

Validation Commands
```bash
node tools/scripts/generate-docs-guide-indexes.js --check
node tools/scripts/generate-docs-guide-pages-index.js --check
node tools/scripts/generate-docs-guide-components-index.js --check
node tests/unit/script-docs.test.js --check-indexes
node tools/scripts/generate-pages-index.js
node tools/scripts/enforce-generated-file-banners.js --check
```

Write/Normalize Commands
```bash
node tools/scripts/generate-docs-guide-indexes.js --write
node tools/scripts/generate-docs-guide-pages-index.js --write
node tools/scripts/generate-docs-guide-components-index.js --write
node tests/unit/script-docs.test.js --write --rebuild-indexes
node tools/scripts/generate-pages-index.js --write --rebuild-indexes
node tools/scripts/enforce-generated-file-banners.js --write
```

Guardrails
- Do not manually edit generated artifacts except temporary local debugging.
- Do not bypass generator ownership boundaries.
- Do not introduce alternate banner wording; keep parser-compatible schema.
- Keep checks deterministic and non-mutating in `--check` mode.
