# Livepeer Documentation Repository

This repository powers the Livepeer documentation experience and docs operations stack. It contains:

- public docs content and navigation
- component/data/snippet infrastructure
- CLI, hooks, checks, and CI workflows
- automation pipelines for content freshness
- internal governance documentation

Live site: [docs.livepeer.org](https://docs.livepeer.org)

## 5-Minute Overview

If you only have a few minutes, this is the model:

1. `v2/pages/` + `snippets/` are the primary docs content system.
2. `docs.json` controls navigation/routes.
3. `lpd` is the maintainer CLI for setup/dev/test/hooks/scripts.
4. `.githooks/`, `tests/`, and CI workflows enforce quality gates.
5. `docs-guide/` is the internal source of truth for navigating all repo capabilities.

## Quick Start

### Prerequisites

- Node.js 22+ for local checks/CI parity
- Mintlify CLI for local docs runtime

```bash
npm i -g mintlify
```

### Bootstrap + run

```bash
bash lpd setup --yes
lpd dev
```

If `lpd` is not on PATH yet:

```bash
bash lpd dev
```

### Quick local validation

```bash
lpd test --staged
lpd test --staged --wcag
lpd test --staged --link-audit-external
```

## Hot Reload Troubleshooting

If `mint dev` stops hot-reloading all pages, use this flow:

```bash
bash tools/scripts/dev/ensure-mint-watcher-patch.sh --check
bash tools/scripts/dev/ensure-mint-watcher-patch.sh --apply
```

Known trigger:

- a repo path that includes `[` / `]` can break chokidar watch events if Mint watcher globbing is not disabled.

Recovery:

1. Use `lpd dev` (or `bash tools/scripts/mint-dev.sh`) so the launcher applies the patch preflight and uses a watcher-safe path fallback.
2. Re-run `bash tools/scripts/dev/ensure-mint-watcher-patch.sh --apply` after `mint update`.

## Core Capabilities (At a Glance)

### Frontend Docs Platform

- Mintlify-driven docs UI and routing
- componentized page system via `snippets/components/`
- structural/style enforcement through automated checks

### Backend-Like Docs Operations Layer

- unified CLI (`lpd`) for setup/dev/test/hooks/script execution
- enforcement scripts for style, MDX, links/imports, navigation, and script docs
- GitHub issue templates and PR templates for governance quality
- pre-commit checks and CI checks including browser validations

### AI / Automation / Pipelines

- GitHub Actions + n8n assets for automated updates
- showcase and trending/community content pipelines
- automated maintenance scripts (indexing, SEO/AEO support, glossary support)

### Product and Technical Documentation System

- role-based IA across developers, gateways, orchestrators, delegators, resources
- product-focused content layer plus deep technical guides
- references, APIs, and integration data surfaces

## Where Details Live (Canonical Internal Map)

`docs-guide/` is the canonical internal navigation source of truth for repository features and functionality.

| Need | Canonical doc |
|---|---|
| Start here + update rules | [`docs-guide/README.mdx`](docs-guide/README.mdx) |
| Source-of-truth boundaries | [`docs-guide/source-of-truth-policy.mdx`](docs-guide/source-of-truth-policy.mdx) |
| Full feature inventory | [`docs-guide/feature-guides/feature-map.mdx`](docs-guide/feature-guides/feature-map.mdx) |
| System/data/control flow | [`docs-guide/feature-guides/architecture-map.mdx`](docs-guide/feature-guides/architecture-map.mdx) |
| CLI commands and runbooks | [`docs-guide/lpd.mdx`](docs-guide/lpd.mdx) |
| Validation + enforcement gates | [`docs-guide/quality-testing/quality-gates.mdx`](docs-guide/quality-testing/quality-gates.mdx) |
| Automation pipelines map | [`docs-guide/feature-guides/automation-pipelines.mdx`](docs-guide/feature-guides/automation-pipelines.mdx) |
| Content system and IA model | [`docs-guide/feature-guides/content-system.mdx`](docs-guide/feature-guides/content-system.mdx) |
| APIs and data integrations | [`docs-guide/feature-guides/data-integrations.mdx`](docs-guide/feature-guides/data-integrations.mdx) |
| Generated pages tree inventory | [`docs-guide/indexes/pages-index.mdx`](docs-guide/indexes/pages-index.mdx) |
| Generated components inventory | [`docs-guide/indexes/components-index.mdx`](docs-guide/indexes/components-index.mdx) |
| Generated script inventory | [`docs-guide/indexes/scripts-index.mdx`](docs-guide/indexes/scripts-index.mdx) |
| Generated workflow inventory | [`docs-guide/indexes/workflows-index.mdx`](docs-guide/indexes/workflows-index.mdx) |
| Generated issue/PR template inventory | [`docs-guide/indexes/templates-index.mdx`](docs-guide/indexes/templates-index.mdx) |

## Contributing (Quick Path)

1. Read style and component standards:
   - [`v2/resources/documentation-guide/style-guide.mdx`](v2/resources/documentation-guide/style-guide.mdx)
   - [`v2/resources/documentation-guide/component-library.mdx`](v2/resources/documentation-guide/component-library.mdx)
2. Install/update hooks:

```bash
./.githooks/install.sh
```

3. Create a branch, make changes, run `lpd dev`, commit, and open a PR.

### Codex Branch Contract (`codex/*`)

For agent implementation branches, use:

- branch name: `codex/<issue-id>-<slug>`
- task contract file: `.codex/task-contract.yaml`
- required PR sections: `Scope`, `Validation`, `Follow-up Tasks`

Enforcement runs on `codex/*` only via:

- `.githooks/pre-push` (contract + scope + non-fast-forward block by default)
- `tests/run-pr-checks.js` (CI contract + PR body checks)

To auto-fill PR sections from task contract metadata:

```bash
node tools/scripts/create-codex-pr.js --create
```

This generates `.codex/pr-body.generated.md` and calls `gh pr create --body-file ...`.
Codex PR CI also requires the generated marker in the PR body, so manual bodies without the marker fail contract validation.

Contributor deep docs:

- [`contribute/CONTRIBUTING/README.md`](contribute/CONTRIBUTING/README.md)
- [`contribute/CONTRIBUTING/GIT-HOOKS.md`](contribute/CONTRIBUTING/GIT-HOOKS.md)

## Quality Gates Summary

### Local (pre-commit)

- `.githooks/pre-commit` runs structure/style verification and staged checks
- includes script docs enforcement and pages index synchronization
- includes staged WCAG accessibility audit with conservative autofix for common raw-tag issues
- docs-guide source-of-truth checks currently run in advisory mode

### CI (GitHub Actions)

- changed-file quality suite: `.github/workflows/test-suite.yml`
- v2 browser sweep: `.github/workflows/test-v2-pages.yml`
- broken links check currently advisory while cleanup is ongoing

Deep matrix:

- [`tests/WHEN-TESTS-RUN.md`](tests/WHEN-TESTS-RUN.md)
- [`tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md`](tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md)

## Repository Orientation

High-level directory map:

- `v2/pages/` active docs pages
- `v1/` legacy/frozen docs
- `snippets/` components, data, automations, shared assets
- `tools/scripts/` operational/generation scripts
- `tests/` unit/integration checks and runners
- `.githooks/` local hook scripts
- `.github/workflows/` CI and scheduled automations
- `api/` OpenAPI and related specs
- `docs-guide/` internal docs navigation source of truth

## Automation Summary

Key automation categories:

- content freshness (forum/blog/youtube/releases/showcase)
- CI quality and browser validation
- issue intake/labeling and review tooling
- docs maintenance scripts and generated catalogs

Automation deep docs:

- [`docs-guide/feature-guides/automation-pipelines.mdx`](docs-guide/feature-guides/automation-pipelines.mdx)
- [`v2/resources/documentation-guide/automations-workflows.mdx`](v2/resources/documentation-guide/automations-workflows.mdx)

## AI and Maintainer Guidance

- AI assistant rules and safety: `tools/ai-rules/`
- repository AI guidance files: `.github/AGENTS.md`, `.cursorrules`

## Source-of-Truth Contract (Short Form)

- Code/tests are source of truth for behavior.
- `docs-guide/` is source of truth for internal capability navigation.
- `README.md` is high-level orientation and link hub.
- Generated indexes must be regenerated, not hand-edited.

Regenerate docs-guide generated indexes:

```bash
node tools/scripts/generate-docs-guide-indexes.js --write
node tools/scripts/generate-docs-guide-pages-index.js --write
node tools/scripts/generate-docs-guide-components-index.js --write
node tests/unit/script-docs.test.js --write --rebuild-indexes
```
