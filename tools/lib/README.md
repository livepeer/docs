# tools/lib

Governed shared-library surface for repo-internal tooling. Files here must be importable helpers used across multiple maintained consumers, not standalone runtime scripts or workflow notes.

## Allowed structure

- `ai/`
  Shared helpers for AI-tools registry and Codex skill/template infrastructure.
- `bootstrap/`
  Repo-local dependency loaders, Node path bootstrapping, and shared staged-cache helpers.
- `docs/`
  Shared docs-content parsing, publishability, frontmatter, indexing, and MDX-safety helpers.
- `governance/`
  Shared governance helpers, generated-artifact helpers, and script-governance infrastructure.
- `copy-governance/`
  Data assets owned by copy-governance tooling.
- `docs-usefulness/`
  Shared usefulness audit engine, rubric loaders, and prompt modules.

## Contract

- Root may contain only this `README.md`, the generated `script-index.md`, and subdirectories.
- `tools/lib` is for importable shared modules only.
- Runtime scripts, reports, notes, and workflow runbooks do not belong here.
- New libraries must have multiple maintained consumers or a clear cross-workflow ownership reason.
- Text or data assets must live inside an owning namespace, not at the `tools/lib` root.
- Generated indexes are secondary. This README is the human entrypoint.
