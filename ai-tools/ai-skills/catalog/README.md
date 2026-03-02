# Repo Audit Skill Catalog

This catalog is the single source of truth for the docs infrastructure audit pipeline.

- `skill-catalog.schema.json`: interface contract for skills used by the pipeline.
- `skill-catalog.json`: concrete skill metadata and command mappings.
- `execution-manifest.json`: ordered pipeline execution plan used by the orchestrator.

Use `node tools/scripts/repo-audit-orchestrator.js --mode static --scope full` to run the pipeline.
