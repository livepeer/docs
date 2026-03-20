---
name: skill-docs
version: "1.2"
category: meta
description: >-
  Govern governed skill documentation structure, central contract alignment, and validator readiness so new or edited skills pass enforcement on the first commit.
invoke_when:
  - "create a new governed skill"
  - "edit a skill template contract"
  - "write or update a skill file"
  - "add skill documentation enforcement"
  - "add category to an existing skill"
  - "retire a skill"
---

SKILL: Skill Docs Governance

Goal
Create or update governed skill artifacts so frontmatter, references, and validation behavior stay aligned with the central contract.

Constraints
- Governed scope is limited to local governed skill files, canonical template skill files, and `ai-tools/ai-skills/skill-spec-contract.md`.
- Do not create per-skill `README.md` files for this contract.
- Keep the central contract and validator in sync with any schema change.
- Use exact repo-root or relative paths for governed markdown references.
- `primary_paths` and `primary_commands` are template-only fields. Do not add them to local `SKILL.md` files.
- `tier` is optional on both local skills and templates. Use `1` for single-command skills, `2` for multi-step workflows.
- Retired skills go to `ai-tools/ai-skills/_workspace/retired/` via `git mv`. Never delete governed artifacts.
- Template numeric prefix must be sequential. Check existing prefixes before assigning a new one.

Workflow
1. Read `ai-tools/ai-skills/skill-spec-contract.md` before changing any governed skill artifact.
2. Apply the canonical frontmatter fields: `name`, `version`, `description`, `invoke_when`, and `category`.
3. Set `category` to one of: `audit`, `authoring`, `governance`, `review-pipeline`, `meta`.
4. For templates only: also set `tier`, `primary_paths`, and `primary_commands`.
5. Check governed references for exact paths, self-references, and circular loading chains.
6. Run `node tests/unit/skill-docs.test.js` after any governed artifact change.

To retire a skill:
1. `git mv ai-tools/ai-skills/<skill-name>/SKILL.md ai-tools/ai-skills/_workspace/retired/<skill-name>-legacy.md`
2. `git mv ai-tools/ai-skills/templates/<NN>-<skill-name>.template.md ai-tools/ai-skills/_workspace/retired/<NN>-<skill-name>-retired.template.md`
3. Remove from `skill-catalog.json` and `execution-manifest.json` if present.
4. Regenerate agent-pack exports.

Deliverable Format
- Updated governed skill artifacts with canonical frontmatter.
- Central contract updates when the schema or validation rules change.
- Validation evidence from the skill-docs suite.

Failure Modes / Fallback
- If a schema change affects sync or export tooling, update the shared template loader before touching downstream consumers.
- If a governed reference path is ambiguous, convert it to an explicit repo-root path under `ai-tools/ai-skills/`.
- If a skill grows too broad, split the workflow instead of hiding missing structure behind longer descriptions.

Validation Checklist
- [ ] Frontmatter includes `name`, `version`, `description`, `invoke_when`, and `category`.
- [ ] `category` is one of the 5 allowed enum values.
- [ ] Description is between 20 and 100 words.
- [ ] `version` was bumped if content changed.
- [ ] Governed references resolve and do not create self-loops or cycles.
- [ ] `ai-tools/ai-skills/skill-spec-contract.md` reflects the current enforced contract.
- [ ] `node tests/unit/skill-docs.test.js` passes before handoff.
