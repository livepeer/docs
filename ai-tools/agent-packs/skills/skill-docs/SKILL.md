---
name: skill-docs
version: "1.0"
description: >-
  Govern governed skill documentation structure, central contract alignment, and validator readiness so new or edited skills pass enforcement on the first commit.
tier: 2
invoke_when:
  - "create a new governed skill"
  - "edit a skill template contract"
  - "write or update a skill file"
  - "add skill documentation enforcement"
primary_paths:
  - "ai-tools/ai-skills/skill-spec-contract.md"
  - "ai-tools/ai-skills/templates"
  - "ai-tools/ai-skills"
  - "tests/unit/skill-docs.test.js"
primary_commands:
  - "node tests/unit/skill-docs.test.js"
  - "node tests/unit/codex-skill-sync.test.js"
---

SKILL: Skill Docs Governance

Goal
Create or update governed skill artifacts so frontmatter, references, and validation behavior stay aligned with the central contract.

Constraints
- Governed scope is limited to local governed skill files, canonical template skill files, and `ai-tools/ai-skills/skill-spec-contract.md`.
- Do not create per-skill `README.md` files for this contract.
- Keep the central contract and validator in sync with any schema change.
- Use exact repo-root or relative paths for governed markdown references.

Workflow
1. Read `ai-tools/ai-skills/skill-spec-contract.md` before changing any governed skill artifact.
2. Apply the canonical frontmatter fields: `name`, `version`, `description`, and `invoke_when`.
3. Retain template-only operational fields on canonical templates: `tier`, `primary_paths`, and `primary_commands`.
4. Check governed references for exact paths, self-references, and circular loading chains.
5. Run `node tests/unit/skill-docs.test.js` and `node tests/unit/codex-skill-sync.test.js` after any contract or template change.

Command examples
```bash
node tests/unit/skill-docs.test.js
node tests/unit/codex-skill-sync.test.js
```

Deliverable Format
- Updated governed skill artifacts with canonical frontmatter.
- Central contract updates when the schema or validation rules change.
- Validation evidence from the skill-docs suite and sync tests.

Failure Modes / Fallback
- If a schema change affects sync or export tooling, update the shared template loader before touching downstream consumers.
- If a governed reference path is ambiguous, convert it to an explicit repo-root path under `ai-tools/ai-skills/`.
- If a skill grows too broad, split the workflow instead of hiding missing structure behind longer descriptions.

Validation Checklist
- [ ] Frontmatter includes `name`, `version`, `description`, and `invoke_when`.
- [ ] Description is between 20 and 100 words.
- [ ] Governed references resolve and do not create self-loops or cycles.
- [ ] `ai-tools/ai-skills/skill-spec-contract.md` reflects the current enforced contract.
- [ ] `node tests/unit/skill-docs.test.js` passes before handoff.
