---
name: openapi-sync-and-api-doc-generation
version: "1.0"
description: >-
  Sync OpenAPI sources and generate MDX API portal/endpoint docs using repository scripts. Use when tasks include regenerate api docs from openapi, sync latest openapi specs, create mdx endpoint pages from spec.
tier: 3
invoke_when:
  - "regenerate api docs from openapi"
  - "sync latest openapi specs"
  - "create mdx endpoint pages from spec"
primary_paths:
  - "tools/scripts/snippets/fetch-openapi-specs.sh"
  - "tools/scripts/snippets/generate-api-docs.sh"
  - "api/studio.yaml"
  - "api/ai-worker.yaml"
primary_commands:
  - "bash tools/scripts/snippets/fetch-openapi-specs.sh"
  - "bash tools/scripts/snippets/generate-api-docs.sh api/studio.yaml v2/pages/03_developers/api-reference/studio \"Studio API\""
---

SKILL: OpenAPI Sync and API Doc Generation

Goal
Automate API documentation updates from current OpenAPI inputs with reproducible generation steps.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Refresh upstream spec files when needed.
2. Run API-doc generator with explicit spec and output paths.
3. Review generated MDX and navigation snippet output before integration.

Command examples
```bash
bash tools/scripts/snippets/fetch-openapi-specs.sh
bash tools/scripts/snippets/generate-api-docs.sh api/studio.yaml v2/pages/03_developers/api-reference/studio \"Studio API\"
```

Deliverable Format
- Generated API MDX files and navigation snippet.
- Spec source and generation command log.

Failure Modes / Fallback
- If spec parse fails, validate YAML/JSON format first.
- Generate into isolated path for review before replacing production docs routes.

Validation Checklist
- [ ] Spec sync and generation commands both run successfully.
- [ ] Generated content aligns with selected API source file.
- [ ] No protected/frozen path modifications occur.
