---
type: always_apply
---

# Livepeer Docs — Augment Adapter

Read `AGENTS.md` first for repo-wide rules.

Use this file only for Augment-specific adapter behavior. Keep shared policy in:

- `AGENTS.md`
- `docs-guide/policies/agent-governance-framework.mdx`
- `docs-guide/policies/root-allowlist-governance.mdx`
- `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`
- Treat the Mintlify canonical reference above as the source of truth for preview behavior, MDX constraints, and repo authoring rules.
- Do not use port `3000` for local Mintlify or preview sessions; choose a non-3000 port explicitly.

## Approved runtime targets

- `AGENTS.md`
- `.github/copilot-instructions.md`
- `.claude/CLAUDE.md`
- `.cursor/rules/*.mdc`
- `.windsurf/rules/*.md`
- `.augment/rules/*.md`
