---
name: external-docs-sync-and-sanitize
version: "1.0"
description: >-
  Fetch external markdown docs and sanitize them for MDX-safe inclusion in this repository. Use when tasks include refresh external docs content, import upstream markdown into snippets/external, sanitize html-heavy markdown for mdx.
tier: 3
invoke_when:
  - "refresh external docs content"
  - "import upstream markdown into snippets/external"
  - "sanitize html-heavy markdown for mdx"
primary_paths:
  - "tools/scripts/snippets/fetch-external-docs.sh"
  - "snippets/external"
  - "tools/scripts/snippets/paths.config.json"
  - "v2/resources/documentation-guide/docs-features-and-ai-integrations.mdx"
primary_commands:
  - "bash tools/scripts/snippets/fetch-external-docs.sh"
  - "rg --files snippets/external"
---

SKILL: External Docs Sync and Sanitize

Goal
Keep external reference docs updated while preserving MDX compatibility constraints.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run external-doc fetcher to pull and sanitize upstream markdown.
2. Inspect sanitized outputs for broken formatting or missing sections.
3. Link or reference refreshed files from relevant docs pages.

Command examples
```bash
bash tools/scripts/snippets/fetch-external-docs.sh
rg --files snippets/external
```

Deliverable Format
- Updated external MDX artifacts list.
- Sanitization anomalies (if any) requiring manual cleanup.

Failure Modes / Fallback
- If upstream source is unavailable, retain last known good file and log refresh failure.
- If sanitization is too destructive, patch script pattern rules instead of manual post-editing each run.

Validation Checklist
- [ ] External directory contains refreshed MDX outputs.
- [ ] No raw unsafe HTML artifacts remain in generated content.
- [ ] Commands and sources remain repository-backed.
