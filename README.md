# Livepeer Documentation

Source repository for [docs.livepeer.org](https://docs.livepeer.org). Built on [Mintlify](https://mintlify.com/) (MDX). Contains the published docs, component library, operations tooling, CI pipelines, and internal governance documentation.

## Quick start

There is no root `package.json`. The CLI handles all dependency installation.

```bash
git clone https://github.com/livepeer/docs.git && cd docs
git checkout docs-v2

bash tools/lpd setup --yes   # installs deps, hooks, PATH link
lpd dev                      # starts dev server on port 3333
```

Mintlify is opt-in during setup. To include it: `bash tools/lpd setup --yes --with-mintlify` (or `npm i -g mintlify` manually).

## Branch structure

| Branch | Role |
|--------|------|
| `docs-v2` | Deploy branch (production) |
| `docs-v2-dev` | Working/test branch |
| `codex/<issue-id>-<slug>` | AI agent task branches (hook-enforced) |

This repo does not deploy from `main`.

## Repo layout

```
v2/                  764 published MDX pages (active docs)
v1/                  279 frozen legacy pages
snippets/            47 JSX components, 30 automations, data, assets, templates
operations/scripts/  160 JS/SH scripts (generators, validators, auditors)
operations/tests/    69 test files (unit + integration)
.github/workflows/   47 CI and scheduled workflows
ai-tools/            30 AI skills, rules, agent packs
tools/               lpd CLI, dev server, editor extensions
api/                 13 OpenAPI specs (Studio, Gateway, AI Worker, CLI)
docs-guide/          Internal docs-about-docs: policies, frameworks, catalogs
docs.json            Navigation and routing config (source of truth)
```

Root governance is explicit. Only approved root contracts and subsystem roots belong at repo root. `ai-tools/` is an intentionally governed root subsystem, and the ratified AI-first public root artifacts are `docs-index.json`, `llms.txt`, and `sitemap-ai.xml`.

Live root inventory: [`docs-guide/repo-ops/config/root-governance-map.mdx`](docs-guide/repo-ops/config/root-governance-map.mdx)  
Root policy: [`docs-guide/policies/root-allowlist-governance.mdx`](docs-guide/policies/root-allowlist-governance.mdx)

## Contributing

1. Read the [authoring guide](v2/resources/documentation-guide/authoring-guide.mdx) and [style guide](v2/resources/documentation-guide/style-guide.mdx).
2. Install hooks: `bash .githooks/install.sh` (or `lpd hooks install`).
3. Branch from `docs-v2`, run `lpd dev` to preview, then open a PR against `docs-v2`.

Full contributing docs: [`docs-guide/contributing/contributing.mdx`](docs-guide/contributing/contributing.mdx)

## Quality gates

### Pre-commit (9 hard gates)

The `.githooks/pre-commit` hook blocks commits that fail MDX validation, docs.json redirect integrity, v1 frozen-file guards, allowlist protection, and Codex branch isolation, among others.

### CI (15 PR workflows)

Pull requests trigger test suites, broken-link checks, browser rendering sweeps, OpenAPI validation, docs-guide catalog checks, and more.

Deep docs:

- [`operations/tests/WHEN-TESTS-RUN.md`](operations/tests/WHEN-TESTS-RUN.md)
- [`operations/tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md`](operations/tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md)

## Internal docs

`docs-guide/` is the canonical internal navigation layer. Start here:

| Need | File |
|------|------|
| Entry point and update rules | [`docs-guide/source-of-truth-guide.mdx`](docs-guide/source-of-truth-guide.mdx) |
| Source-of-truth boundaries | [`docs-guide/policies/source-of-truth-policy.mdx`](docs-guide/policies/source-of-truth-policy.mdx) |
| Full feature inventory | [`docs-guide/features/feature-map.mdx`](docs-guide/features/feature-map.mdx) |
| System architecture | [`docs-guide/features/architecture-map.mdx`](docs-guide/features/architecture-map.mdx) |
| CLI commands and runbooks | [`docs-guide/tooling/lpd-cli.mdx`](docs-guide/tooling/lpd-cli.mdx) |
| Validation and enforcement gates | [`docs-guide/policies/quality-gates.mdx`](docs-guide/policies/quality-gates.mdx) |
| Generated artifact governance | [`docs-guide/policies/generated-artifact-and-hook-governance.mdx`](docs-guide/policies/generated-artifact-and-hook-governance.mdx) |
| Ownerless governance policy | [`docs-guide/policies/ownerless-governance.mdx`](docs-guide/policies/ownerless-governance.mdx) |
| Content system and IA model | [`docs-guide/frameworks/content-system.mdx`](docs-guide/frameworks/content-system.mdx) |
| UI authoring system | [`docs-guide/features/ui-system.mdx`](docs-guide/features/ui-system.mdx) |
| AI tools and skills | [`docs-guide/tooling/ai-tools.mdx`](docs-guide/tooling/ai-tools.mdx) |

Full index (24 files, 6 generated catalogs): [`docs-guide/source-of-truth-guide.mdx`](docs-guide/source-of-truth-guide.mdx)

## AI agent setup

[`AGENTS.md`](AGENTS.md) is the baseline instruction set for all AI agents working in this repo.

Native adapters:

- GitHub Copilot: `.github/copilot-instructions.md`
- Claude: `.claude/CLAUDE.md`
- Cursor: `.cursor/rules/repo-governance.mdc`
- Windsurf: `.windsurf/rules/repo-governance.md`

Governance policy: [`docs-guide/policies/agent-governance-framework.mdx`](docs-guide/policies/agent-governance-framework.mdx)

## Source-of-truth contract

- Code and tests are source of truth for behaviour.
- `docs-guide/` is source of truth for internal capability navigation.
- `README.md` is high-level orientation and link hub.
- Generated indexes must be regenerated, not hand-edited:

```bash
node operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js --write
node operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js --write
node operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --write
node operations/tests/unit/script-docs.test.js --write --rebuild-indexes
```

## Licence

[MIT](LICENSE)
