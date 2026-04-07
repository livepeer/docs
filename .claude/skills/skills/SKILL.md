---
name: skills
description: List all available AI skills with categories, descriptions, and registration status. Use when you cannot remember a skill name or want to see what is available.
---

Scan every `ai-tools/ai-skills/*/SKILL.md` file. For each one:

1. Read the YAML frontmatter: `name`, `description`, `metadata.category`, `metadata.status`
2. Check if a corresponding `.claude/skills/{name}/SKILL.md` exists (if yes, it is a registered slash command)

Present as a categorised markdown table:

| Skill | Category | Status | Registered | Description |
|-------|----------|--------|------------|-------------|

Sort by category, then alphabetically within each category.

After the table, remind the user:
- **Registered skills:** invoke with `/name`
- **Unregistered skills:** tell Claude to "Read and follow `ai-tools/ai-skills/{name}/SKILL.md`"
- **To register a new skill:** create `.claude/skills/{name}/SKILL.md` with a pointer to the full skill file