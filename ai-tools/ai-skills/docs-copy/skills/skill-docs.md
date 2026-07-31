---
name: skill-docs
version: 1.0
description: >
  Governs the required structure for all skill files under ai-tools/ai-skills/.
  Load when creating or editing any skill file. Ensures test suite compliance
  on first commit.
invoke_when:
  - "create a new skill"
  - "add a skill file"
  - "write a SKILL.md"
---

# Skill Documentation Rules

Every skill file must have YAML frontmatter with these fields:

name: [kebab-case unique identifier]
version: [semver: 1.0, 1.1, 2.0]
description: >
  [Plain English. Minimum 20 words. Maximum 100 words.
   Describes what the skill does and when to use it.
   No jargon. No self-reference ("this skill...")]
invoke_when:
  - "[trigger phrase 1]"
  - "[trigger phrase 2]"

Every skill directory must have a README.md with:
- One paragraph: what this skill set does
- A table: file name | layer | purpose
- Invocation instructions: which file to load for which task

Cross-references to other skill files must use exact relative paths.
Run tests/unit/skill-docs.test.js before committing any new skill file.
