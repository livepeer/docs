---
name: discord-issue-intake-maintenance
version: "1.0"
description: >-
  Maintain Discord repository_dispatch intake workflow validation, idempotency, and issue-shaping logic. Use when tasks include discord issue intake failing, fix repository_dispatch docs_page_issue schema handling, maintain correlation_id dedupe logic.
tier: 3
invoke_when:
  - "discord issue intake failing"
  - "fix repository_dispatch docs_page_issue schema handling"
  - "maintain correlation_id dedupe logic"
primary_paths:
  - ".github/workflows/discord-issue-intake.yml"
  - ".github/workflows/issue-auto-label.yml"
  - "snippets/automations/scripts/n8n/Discord-Issue-Intake.json"
  - "v2/resources/documentation-guide/automations-workflows.mdx"
primary_commands:
  - "sed -n \"1,260p\" .github/workflows/discord-issue-intake.yml"
  - "rg -n \"discord-issue-intake|correlation_id|docs_page_issue\" .github/workflows/discord-issue-intake.yml"
---

SKILL: Discord Issue Intake Maintenance

Goal
Keep Discord intake automation robust for payload validation, deduplication, and issue creation behavior.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Inspect payload contract, required fields, and schema gate checks.
2. Verify idempotency marker query and base label creation behavior.
3. Cross-check downstream label workflow assumptions.

Command examples
```bash
sed -n \"1,260p\" .github/workflows/discord-issue-intake.yml
rg -n \"discord-issue-intake|correlation_id|docs_page_issue\" .github/workflows/discord-issue-intake.yml
```

Deliverable Format
- Validation-path map from dispatch payload to issue body/labels.
- List of fragile checks and safe hardening actions.

Failure Modes / Fallback
- If payload formats vary by source, formalize normalization layer before strict checks.
- If duplicate detection is ambiguous, preserve marker-based idempotency as primary guard.

Validation Checklist
- [ ] Workflow parsing and key path checks are completed.
- [ ] Idempotency and required-field logic are explicitly verified.
- [ ] No unrelated automation files are changed.
