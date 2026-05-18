# Feature Verification Report

Date: 2026-05-18

Evidence standard: executable checks where available; otherwise latest dated canonical docs or `workspace/plan/active/**` evidence. Status values: `verified`, `partially verified`, `stale`, `missing`, `not executable`.

## Summary

| Feature category | Status | Evidence | Required action |
| --- | --- | --- | --- |
| Product map / docs-guide IA | partially verified | `docs-guide/decisions/docs-guide-structure.md` has locked decisions dated 2026-05-04; current tree has not migrated. | Execute route-approved IA migration and redirects. |
| AI features and pipelines | partially verified | `ai-tools/registry/ai-tools-registry.json` exists; live skill count found 35; feature map says 34. | Replace static counts with generated inventory or update after validation. |
| UX and UI system | partially verified | `docs-guide/config/component-registry.json` and `component-usage-map.json` exist; live JSX count found 59. | Verify archived JSX status and regenerate component catalog. |
| Automations | stale | Live workflow count found 55; live script count found 264 after adding the freshness validator; feature map says 50 workflows and 263 scripts. | Use generated catalogs as the count source; update feature docs after checks. |
| Data integrations | partially verified | Data integration docs and `snippets/data` consumers exist; generated artifact and ownerless manifests exist. | Verify each feed has source, output, validator, and repair path. |
| Adaptive architecture | partially verified | `operations/governance/config/ownerless-governance-surfaces.json` and `generated-artifacts.json` exist. | Resolve known governance map drift and v2 lane cleanup gaps. |
| Contributor tools | partially verified | `tools/lpd`, hooks, editor extension paths, and tooling docs exist. | Run `lpd doctor`/`lpd test --staged`; update PATH discovery docs if needed. |
| Content operating system | partially verified | Content-writing framework and standards exist; many workspace review packets remain. | Consolidate latest active evidence and close stale workspace packets. |
| Governance and ownerless repo | partially verified | Policies, frameworks, decisions, root markers, and governance manifests exist. | Map every governance claim to validator and repair path. |
| Gaps/community help | verified as a queue, not as completion | `docs-guide/features/gap-analysis.mdx` lists implementation-ready gaps. | Keep as active help-needed queue after verification. |
| Contracts/changelog pipeline | partially verified | Contracts pipeline doc and changelog workflow exist. | Verify workflow dispatch/current branch status before marking fully functional. |
| Visual explainer workflow | not executable | Page is pilot guidance with external tool dependency. | Promote to contributor-tool reference or archive as pilot. |

## Feature Detail

### Product Map And IA

- Current implementation exists as docs under `docs-guide/features/feature-map.mdx` and locked decisions under `docs-guide/decisions/docs-guide-structure.md`.
- Functional gap: the locked reference IA is not implemented in the filesystem or `docs.json` yet.
- Status: `partially verified`.

### AI Features And Pipelines

- Verified surfaces: `AGENTS.md`, native adapters, `ai-tools/registry/ai-tools-registry.json`, `ai-tools/ai-skills/**/SKILL.md`, `llms.txt`, and AI sitemap generation docs.
- Drift found: live skill count is 35, while `docs-guide/features/feature-map.mdx` records 34.
- Status: `partially verified`.

### UX System

- Verified surfaces: `snippets/components/`, `snippets/templates/`, `style.css`, `docs-guide/config/component-registry.json`, and generated catalog paths.
- Drift/gap: archived components are counted in live JSX totals; archive status is not resolved.
- Status: `partially verified`.

### Automations

- Verified surfaces: `.github/workflows/`, `operations/scripts/`, `operations/tests/`, generated workflow/script catalogs.
- Drift found: current static counts do not match live inspection.
- Status: `stale` until generated catalogs are the source for counts.

### Data Integrations

- Verified surfaces: OpenAPI/reference docs, data integrator scripts, `snippets/data/`, contracts and release/changelog workflows.
- Gap: individual feed ownership and repair paths are not fully proven in this pass.
- Status: `partially verified`.

### Adaptive Architecture

- Verified surfaces: ownerless governance surface manifest, generated artifact manifest, remediators, validators, hooks, and CI docs.
- Known gaps are already documented: stale governance map, v2 lane cleanup, retention debt, script header compliance.
- Status: `partially verified`.

### Contributor Tools

- Verified surfaces: `tools/lpd`, `.githooks/`, `tools/dev/`, `tools/editor-extensions/`, `.vscode/`.
- Gap: PATH discovery and non-interactive shell behavior need validation and docs tightening.
- Status: `partially verified`.

### Frameworks And Policies

- Verified as documents: 14 framework files and 17 policy files are present.
- Functional verification is incomplete until every claim is mapped to implementation and enforcement in `framework-policy-gap-report.md`.
- Status: `partially verified`.

## Verification Commands To Run

These commands are part of the validation pass and should be recorded with outputs in the closeout:

```bash
node operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js --check
node operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js --check
node operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --check
node operations/scripts/validators/content/structure/lint-structure.js --check
node operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js --json
node operations/scripts/validators/governance/compliance/check-repo-governance-sync.js
node operations/scripts/validators/governance/compliance/check-docs-guide-reference-freshness.js --json
lpd test --staged
```

## Validation Results From 2026-05-18

| Command | Result | Notes |
| --- | --- | --- |
| `node operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js --check` | pass after regeneration | Initial run reported `docs-guide/catalog/workflows-catalog.mdx` stale; regenerated with `--write`, then check passed. |
| `node operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js --check` | pass | Pages catalog was up to date. |
| `node operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --check` | pass after regeneration | Initial run reported components catalog stale; regenerated with `--fix`, then check passed. |
| `node operations/scripts/validators/content/structure/lint-structure.js --check` | pass | Reported no files to check. |
| `node operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js --json` | pass | 17 records within the 90-day threshold. |
| `node operations/scripts/validators/governance/compliance/check-repo-governance-sync.js` | fail | Stale `docs-guide/repo-ops/config/repo-governance-map.mdx`; missing `.github/workspace/phase2` and `.github/workspace/reports-audits` references. |
| `node operations/scripts/validators/governance/compliance/check-docs-guide-reference-freshness.js --json` | fail by design against current feature docs | 10 issues: missing evidence dates, retired roots, unmanaged TODO/TBD markers, and a placeholder visual-explainer link. |
| `node operations/tests/unit/script-docs.test.js --files operations/scripts/validators/governance/compliance/check-docs-guide-reference-freshness.js --enforce-existing` | pass after registry regeneration | Script header and generated script registry now include the new validator. |
| `bash tools/lpd test --staged` | fail | 9 errors: Resource HUB redirect/nav errors in `docs.json`, stale root governance/allowlist around `jsconfig.json`, stale VSIX package, and component usage-map utility failure for `CodeComponent`. |

The failing checks are not hidden. They are implementation gaps or pre-existing staged-scope failures that must be closed before this work can be considered production-ready.
