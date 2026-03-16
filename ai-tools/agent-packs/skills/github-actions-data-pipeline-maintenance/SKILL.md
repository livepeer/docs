---
name: github-actions-data-pipeline-maintenance
version: "1.0"
description: >-
  Maintain forum/ghost/youtube data update workflows and associated fetch scripts. Use when tasks include forum or blog data workflow failing, youtube automation not updating snippets data, maintain github actions data fetch scripts.
tier: 3
invoke_when:
  - "forum or blog data workflow failing"
  - "youtube automation not updating snippets data"
  - "maintain github actions data fetch scripts"
primary_paths:
  - ".github/workflows/update-forum-data.yml"
  - ".github/workflows/update-ghost-blog-data.yml"
  - ".github/workflows/update-youtube-data.yml"
  - ".github/scripts/fetch-forum-data.js"
primary_commands:
  - "node .github/scripts/fetch-forum-data.js"
  - "node .github/scripts/fetch-ghost-blog-data.js"
---

SKILL: GitHub Actions Data Pipeline Maintenance

Goal
Keep scheduled data ingestion workflows reliable and aligned with current script outputs.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Run fetch scripts locally to validate output schema and file targets.
2. Cross-check workflow triggers, branch refs, and secret names.
3. Align script outputs with expected snippets/automations destinations.

Command examples
```bash
node .github/scripts/fetch-forum-data.js
node .github/scripts/fetch-ghost-blog-data.js
```

Deliverable Format
- Workflow-to-script dependency map with validated outputs.
- Fix recommendations for trigger/secret/path mismatches.

Failure Modes / Fallback
- If secrets are unavailable locally, run script dry analysis with mock env and validate structural logic.
- If workflow notes conflict with active branch strategy, document intended owner policy explicitly.

Validation Checklist
- [ ] At least two pipeline scripts run/parse successfully.
- [ ] Workflow files reference the correct output paths.
- [ ] No protected branch history operations are proposed.
