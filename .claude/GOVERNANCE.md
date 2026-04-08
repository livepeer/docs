# .claude/ Governance

**Owner:** @livepeer/docs-team
**Framework:** [AI Tools Governance](../docs-guide/frameworks/ai-tools-governance.mdx)
**Standards:** CLAUDE.md is the AI coworker contract. References, hooks, and memory are session infrastructure.
**Status:** Active

Claude Code adapter directory. Contains the project-level CLAUDE.md (AI coworker contract), references (exemplary work), hooks (session automation), plans, skills (symlinked), and persistent memory.

## Structure

| Subfolder | Purpose | Editable |
|-----------|---------|----------|
| `references/` | 13 categories of exemplary work to emulate | Hand-maintained |
| `hooks/` | Session automation (pre/post tool use) | Governed by hook framework |
| `plans/` | Session plan files (ephemeral) | Auto-managed |
| `skills/` | Symlinks to `ai-tools/ai-skills/` | Auto-managed |
| `memory/` | Persistent cross-session memory | Auto-managed |