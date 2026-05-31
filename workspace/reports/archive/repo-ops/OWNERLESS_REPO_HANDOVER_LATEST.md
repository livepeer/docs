# Ownerless Repo Handover

Generated from `operations/governance/config/repo-governance-surfaces.json` on the steady-state control plane `operations/governance`.

## Canonical Governance Manifests

- `operations/governance/config/root-governance.json`
- `operations/governance/config/generated-artifacts.json`
- `operations/governance/config/agent-write-governance.json`
- `operations/governance/config/ownerless-governance-surfaces.json`
- `operations/governance/config/governance-approval-policy.json`

## Canonical Runtime Config Surfaces

- `operations/config/content/blueprints/blueprint-mapping.json`
- `operations/config/content/blueprints/blueprint-pages.json`
- `operations/config/content/navigation/navigation-exclusions.json`
- `operations/config/content/reports/v2-internal-report-pages.js`
- `operations/config/README.md`
- `operations/config/workspace/retention/report-retention-policy.json`
- `operations/config/workspace/schemas/cleanup-manifest.schema.json`

## Active Transitional Workflow Governance

- `.github/workspace/framework-canonical.md` (transitional-runtime)
- `.github/workspace/decisions-log.mdx` (transitional-runtime)
- `.github/workspace/actions-library` (generated-support)

## Production Approval Labels

- `approval:governance-gate`
- `approval:governance-retirement`
- `approval:governance-schema`
- `approval:workflow-governance`

## Active Generated Governance Outputs

- `workspace/reports/repo-ops/OWNERLESS_REPO_HANDOVER_LATEST.md`
- `workspace/reports/repo-ops/REPAIR_REPORT_LATEST.json`
- `workspace/reports/repo-ops/REPAIR_REPORT_LATEST.md`
- `workspace/reports/repo-ops/REPO_GOVERNANCE_STATUS_LATEST.json`
- `workspace/reports/repo-ops/REPO_GOVERNANCE_STATUS_LATEST.md`
- `workspace/reports/repo-ops/ROOT_GOVERNANCE_SYNC_LATEST.json`
- `workspace/reports/repo-ops/ROOT_GOVERNANCE_SYNC_LATEST.md`
- `workspace/reports/repo-ops/SCRIPT_INVENTORY_FULL.json`
- `workspace/reports/repo-ops/SCRIPT_INVENTORY_FULL.md`

## Repair Paths

| Surface | Repair commands |
| --- | --- |
| `repo-governance-registry` | `node operations/scripts/generators/governance/reports/generate-repo-governance-status.js --write`<br/>`node operations/scripts/validators/governance/compliance/check-repo-governance-sync.js --json` |
| `root-governance` | `node operations/scripts/generators/governance/root/generate-root-governance-artifacts.js --write` |
| `generated-artifact-governance` | `node operations/scripts/generators/content/catalogs/generate-docs-index.js --write`<br/>`node operations/scripts/generators/ai/llm/generate-llms-files.js --write`<br/>`node operations/scripts/generators/content/seo/generate-ai-sitemap.js --write` |
| `ownerless-governance` | `node operations/scripts/remediators/content/style/repair-ownerless-language.js --write` |
| `github-workspace-governance` | `node operations/scripts/generators/governance/reports/generate-repo-governance-status.js --write`<br/>`node operations/scripts/validators/governance/compliance/check-repo-governance-sync.js --json` |
