# GitHub Copilot Adapter for Livepeer Docs

Read `AGENTS.md` first for the repo-wide baseline.

Use this file only for GitHub Copilot's native repository instructions path.
Keep it thin and point back to the canonical policy surfaces instead of copying
the whole repo contract.

## Canonical Sources

- `AGENTS.md` — repo-wide agent baseline
- `docs-guide/policies/governance-index.mdx` — all 10 governed surfaces
- `docs-guide/frameworks/` — how to build (scripts, components, workflows)
- `docs-guide/standards/` — how to write (voice, naming, frontmatter)
- Every folder has a `GOVERNANCE.md` with links to its framework and validator

## Copilot-Specific Notes

- Treat `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` as the canonical Mintlify runtime and authoring contract when repo behavior is unclear.
- Keep any future GitHub-specific additions in `.github/copilot-instructions.md`
  or path-scoped `.github/instructions/*.instructions.md`.
- Do not recreate a second repo-wide baseline here.
- Use the same validation and structure rules defined in `AGENTS.md`.
- Do not use port `3000` for direct Mintlify preview runs or port `3333` via `lpd dev`; those ports are reserved for human-owned local servers.
