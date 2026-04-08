# operations/governance/ Governance

**Owner:** @livepeer/docs-team
**Framework:** [Repo Structure](../../docs-guide/frameworks/repo-structure.mdx) | [Script Framework](../../docs-guide/frameworks/script-framework.mdx)
**Status:** Active — production control plane

Machine-readable governance configuration and enforcement infrastructure.

## Structure

| Subfolder | Purpose |
|-----------|---------|
| `config/` | JSON manifests defining governance surfaces, approval gates, agent permissions |
| `validators/` | Scripts that check compliance on PR |
| `repairs/` | Scripts that auto-fix drift |

## Key files
- `config/repo-governance-surfaces.json` — master surface definitions
- `config/governance-approval-policy.json` — PR approval requirements
- `config/ownerless-governance-surfaces.json` — auto-managed surfaces
- `config/agent-write-governance.json` — AI agent write permissions
