---
name: release-version-workflow-maintenance
version: "1.0"
description: >-
  Maintain the release-version updater workflow and related globals file path/value logic. Use when tasks include latest release automation is broken, globals latestVersion not updating, fix update-livepeer-release workflow.
tier: 3
invoke_when:
  - "latest release automation is broken"
  - "globals latestVersion not updating"
  - "fix update-livepeer-release workflow"
primary_paths:
  - ".github/workflows/update-livepeer-release.yml"
  - "snippets/automations/globals/globals.mdx"
  - "snippets/automations/globals/globals.jsx"
  - "v2/resources/documentation-guide/automations-workflows.mdx"
primary_commands:
  - "sed -n \"1,220p\" .github/workflows/update-livepeer-release.yml"
  - "rg -n \"latestVersion|LatestRelease\" snippets/automations/globals"
---

SKILL: Release Version Workflow Maintenance

Goal
Ensure release automation updates the correct globals fields and file paths without drift.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Inspect workflow step logic for source release fetch and target-file updates.
2. Verify referenced globals file paths and key names exist in repo.
3. Document and patch path/key mismatches before re-enabling automation confidence.

Command examples
```bash
sed -n \"1,220p\" .github/workflows/update-livepeer-release.yml
rg -n \"latestVersion|LatestRelease\" snippets/automations/globals
```

Deliverable Format
- Mismatch matrix (workflow path/key vs actual file schema).
- Proposed corrected workflow update steps.

Failure Modes / Fallback
- If multiple globals variants exist, pick canonical target and deprecate stale path references.
- If scheduler cadence is noisy, separate logic validation from frequency tuning.

Validation Checklist
- [ ] Workflow references existing file paths.
- [ ] Release key extraction pattern matches actual globals schema.
- [ ] No unsafe git history actions are used during maintenance.
