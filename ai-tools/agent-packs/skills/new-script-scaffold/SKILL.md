---
name: new-script-scaffold
version: "1.0"
description: >-
  Create new repository scripts with compliant header template and expected metadata tags. Use when tasks include create a new repo script, script header template required, bootstrap test or tooling script.
tier: 2
invoke_when:
  - "create a new repo script"
  - "script header template required"
  - "bootstrap test or tooling script"
primary_paths:
  - "tools/scripts/new-script.js"
  - "tests/unit/script-docs.test.js"
  - "tools/script-index.md"
  - "tests/script-index.md"
primary_commands:
  - "node tools/scripts/new-script.js --path tools/scripts/my-script.js"
  - "node tests/unit/script-docs.test.js --files tools/scripts/my-script.js --enforce-existing"
---

SKILL: New Script Scaffold

Goal
Scaffold new scripts that satisfy repository header requirements and reduce docs-test friction.

Constraints
- Do not bypass hooks (`--no-verify` or `-n`).
- Do not modify `v1/` content; it is frozen/immutable.
- Keep edits within requested scope and avoid protected root changes like `.allowlist` unless explicitly requested.
- Use only repository-backed commands and paths listed in this template.

Workflow
1. Generate script file using scaffold command for target language.
2. Fill placeholder tags with real metadata and usage examples.
3. Run script-docs enforcement on explicit file before commit.

Command examples
```bash
node tools/scripts/new-script.js --path tools/scripts/my-script.js
node tests/unit/script-docs.test.js --files tools/scripts/my-script.js --enforce-existing
```

Deliverable Format
- New script file with complete header metadata.
- Script-docs validation result for the new file.

Failure Modes / Fallback
- If scaffolded placeholders remain, block commit until filled.
- If scope/owner fields are unclear, align to existing script group conventions.

Validation Checklist
- [ ] All required `@` tags are present and meaningful.
- [ ] At least one runnable usage example is valid.
- [ ] No bypassed script-docs checks.
