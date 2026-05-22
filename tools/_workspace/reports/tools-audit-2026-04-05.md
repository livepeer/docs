# Tools Folder Audit

Date: 2026-04-05
Scope: tracked files under `tools/`
Method: repo file inventory, exact-path repo reference scan, targeted content review of root entrypoints, configs, dev scripts, editor-extension packaging, Notion sync docs, and existing governance notes.

Update: this audit records the pre-migration state captured earlier on 2026-04-05. The approved implementation has since moved active Notion runtime assets to `tools/dev/integrations/notion/`, split `tools/dev` into `preview/`, `authoring/`, `editor/`, and `integrations/`, and archived the deprecated dev/Notion note files under `tools/_workspace/archive/`.

## Executive Summary

`tools/` is not sprawling because it holds too many tool surfaces. It is sprawling because several old migrations were left half-finished:

1. `tools/script-index.md` is not a real `tools/` index. It documents `operations/scripts/**` and still carries stale historical paths.
2. The repo partly migrated from `tools/scripts` and `tools/vscode` to `operations/scripts` and `tools/editor-extensions`, but multiple `tools/` files still point at the old locations.
3. `tools/tools-catalog.mdx` is a 1.47 MB tree dump with almost no inbound usage. It is not a usable operator index.
4. `tools/notion/` mixes a live sync toolchain with stale ad hoc docs and absolute links to another worktree.
5. `tools/config/` had no enforced taxonomy, so runtime manifests, quality profiles, generated registries, and workflow-owned datasets were mixed together.
6. `tools/dev/` contains real active developer entrypoints alongside broken or redundant one-off test utilities.

## Root-Cause Findings

### 1. Incomplete folder migration

- [`tools/dev/format-mdx.js`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/tools/dev/format-mdx.js:19) imports `../vscode/authoring-tools/lib/authoring-core`, but the governed extension now lives under `tools/editor-extensions/authoring-tools`.
- [`tools/dev/install-authoring-tools-extension.js`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/tools/dev/install-authoring-tools-extension.js:111) still resolves source from `tools/vscode/authoring-tools`.
- [`tools/package.json`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/tools/package.json:33) still packages extensions from `cd vscode/...`.
- Multiple JSDoc `@scope` values still refer to `tools/scripts`, even though those scripts now live under `operations/scripts`.

### 2. Human-facing indexes are not governed

- [`tools/script-index.md`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/tools/script-index.md) is stale and wrong-scope.
- [`tools/tools-catalog.mdx`](/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/tools/tools-catalog.mdx) is too large and too raw to serve as the root operator page.
- Existing sub-indexes under `tools/lib/`, `tools/config/`, and `tools/notion/` are narrow script-governance outputs, not a folder-governance system.

### 3. Documentation is mixed with tool runtime

- `tools/notion/README.md` documents a real workflow.
- `tools/notion/FUNCTION.md` and `tools/notion/INSTRUCTIONS.md` are ad hoc notes, contain stale absolute links, and are not suitable as governed runtime documentation.
- `tools/editor-extensions/markdown-list/README.md` still tells the user to install a VSIX from `vscode/markdown-list/...`, which no longer matches the folder layout.

### 4. Duplicate or redundant surfaces remain

- `tools/dev/install-authoring-tools-extension.js` overlaps with `tools/editor-extensions/install.sh`.
- `tools/dev/test-seo-generator.js` and `tools/dev/test-add-callouts.js` are manual dev tests rather than governed repo tests, and one is clearly broken.

## File Inventory

Legend:
- `Keep`: active tool or required dependency surface.
- `Keep, fix`: active, but currently misleading, stale, or broken.
- `Keep, govern`: active, but needs placement/index/governance cleanup.
- `Archive candidate`: report-only recommendation to move to `tools/_workspace/archive/` after replacement/verification.
- `Duplicate candidate`: report-only recommendation to remove or archive after canonical source is confirmed.

### Root

| File | Finding | Disposition |
|---|---|---|
| `tools/.lpdignore` | Active `lpd` discovery ignore surface; referenced by `tools/lpd` and governance docs. | Keep |
| `tools/lpd` | Primary developer CLI; heavily referenced by README, tests, and docs. | Keep |
| `tools/package.json` | Canonical tools manifest, but extension packaging scripts still point at `vscode/...`. | Keep, fix |
| `tools/package-lock.json` | Lockfile for root tools dependency set. | Keep |
| `tools/script-index.md` | Stale generated index documenting `operations/scripts/**`, not the `tools/` folder itself. | Keep, replace in place |
| `tools/tools-catalog.mdx` | Massive raw tree dump with almost no inbound usage; not a usable operator index. | Archive candidate |

### `_workspace`

| File | Finding | Disposition |
|---|---|---|
| `tools/_workspace/.gitkeep` | Keeps governed workspace scaffold present. | Keep |
| `tools/_workspace/archive/.gitkeep` | Keeps archive target present. | Keep |
| `tools/_workspace/experiments/.gitkeep` | Keeps experiments target present. | Keep |

### `cli`

| File | Finding | Disposition |
|---|---|---|
| `tools/cli/lpdignore.example` | Canonical example for `tools/.lpdignore`; referenced in docs and comments. | Keep |

### `config`

| File | Finding | Disposition |
|---|---|---|
| `tools/config/.speakeasy/workflow.lock` | Canonical Speakeasy lockfile in the conventional hidden tool folder. | Keep |
| `tools/config/.speakeasy/workflow.yaml` | Canonical Speakeasy workflow definition in the conventional hidden tool folder. | Keep |
| `tools/config/quality/accuracy-source-registry.json` | Active audit/governance config; multiple repo consumers. | Keep |
| `tools/config/quality/accuracy-source-weights.json` | Active audit scoring config. | Keep |
| `tools/config/runtime/blueprint-mapping.json` | Active blueprint/config dataset with multiple repo consumers. | Keep |
| `tools/config/runtime/blueprint-pages.json` | Active blueprint page dataset; light inbound usage but clearly structured config. | Keep |
| `tools/config/runtime/cleanup-manifest.schema.json` | Cleanup/governance schema dependency. | Keep |
| `tools/config/quality/component-layout-profile.json` | Active component governance profile; heavily referenced. | Keep |
| `tools/config/quality/component-layout-profile.schema.json` | Schema for component layout profile. | Keep |
| `tools/config/quality/cspell.json` | Active spelling/config dependency. | Keep |
| `tools/config/runtime/generated-artifacts.json` | Active generated-artifact governance manifest; multiple repo consumers. | Keep |
| `tools/config/runtime/navigation-exclusions.json` | Active navigation audit/config dependency. | Keep |
| `tools/config/runtime/ownerless-governance-surfaces.json` | Active repair/governance dispatch manifest; heavily referenced. | Keep |
| `tools/config/runtime/report-retention-policy.json` | Active reporting policy config. | Keep |
| `tools/config/scoped-navigation/docs-gate-orch.json` | Active scoped docs config for local preview. | Keep |
| `tools/config/scoped-navigation/docs-gate-work.json` | Active scoped docs config for local preview. | Keep |
| `tools/config/scoped-navigation/docs-orch-work.json` | Active scoped docs config for local preview. | Keep |
| `tools/config/scoped-navigation/docs-solutions.json` | Active scoped docs config for local preview. | Keep |
| `tools/config/scoped-navigation/docs.json.jsx` | Active scoped docs config source. | Keep |
| `tools/config/registry/script-index.md` | Generated script-governance index for config scripts; narrow but valid. | Keep, govern |
| `tools/config/registry/script-registry.json` | Active generated registry for scripts; multiple repo consumers. | Keep |
| `tools/config/quality/style-language-profile-en-gb.json` | Active style/governance profile. | Keep |
| `tools/config/quality/usefulness-audience-normalization.json` | Active usefulness audit config. | Keep |
| `operations/scripts/audits/content/quality/baselines/full-run-2026-02-23-page-matrix.csv` | Seed/baseline dataset for usefulness tooling; low code usage but still tool input. | Keep, govern |
| `tools/config/quality/usefulness-journeys.json` | Active usefulness audit config. | Keep |
| `tools/config/quality/usefulness-llm-tiers.json` | Active usefulness audit config. | Keep |
| `tools/config/quality/usefulness-rubric.json` | Active usefulness audit config. | Keep |
| `operations/scripts/archive/legacy/seeds/v1-to-v2-gap-fill-matrix.csv` | Seed data for mapping/migration tooling; low runtime use but valid dependency data. | Keep, govern |
| `tools/config/runtime/v2-internal-report-pages.js` | Active config module for report publication tooling. | Keep |

### `data`

| File | Finding | Disposition |
|---|---|---|
| `tools/data/redirects/legacy-root-to-v1.json` | Removed on 2026-04-05 after confirming it only served the archived `sync-legacy-root-v1` script and its dedicated test. | Removed |

### `dev`

| File | Finding | Disposition |
|---|---|---|
| `tools/dev/add-callouts.js` | Real manual developer tool, but still carries stale `tools/scripts` scope metadata. | Keep, fix |
| `tools/dev/debug-mint-dev.js` | Real local debug helper for Mint dev; stale metadata but still a valid tool. | Keep, fix |
| `tools/dev/ensure-mint-watcher-patch.sh` | Active Mint watcher patcher used by local dev flows. | Keep |
| `tools/dev/format-mdx.js` | Intended active formatter, but broken import points to `../vscode/...` instead of `../editor-extensions/...`. | Keep, fix |
| `tools/dev/generate-mint-dev-scope.js` | Active scoped preview generator with strong repo usage. | Keep |
| `tools/dev/install-authoring-tools-extension.js` | Redundant with `tools/editor-extensions/install.sh` and currently broken because it resolves `tools/vscode/authoring-tools`. | Archive candidate |
| `tools/dev/lib/resolve-scoped-docs-config.js` | Active helper dependency for scoped docs config resolution. | Keep |
| `tools/dev/mint-custom-loader.sh` | Active loader wrapper used by local preview flow. | Keep |
| `tools/dev/mint-dev.sh` | Active local Mint dev launcher used by `tools/lpd`. | Keep |
| `tools/dev/rename-vscode-codex-chat.js` | Active editor/dev helper with package.json integration. | Keep |
| `tools/dev/test-add-callouts.js` | Manual dev test not integrated into governed test suite; belongs under `operations/tests/` if retained. | Archive candidate |
| `tools/dev/test-seo-generator.js` | Broken manual dev test importing non-existent `../x-archive/seo-generator-safe.js`. | Archive candidate |

### `editor-extensions`

| File | Finding | Disposition |
|---|---|---|
| `tools/editor-extensions/README.md` | Valid top-level extension operator doc. | Keep |
| `tools/editor-extensions/install.sh` | Canonical multi-editor installer; active and coherent. | Keep |
| `tools/editor-extensions/lib/vsix-parity.js` | Active parity validator with test coverage. | Keep |
| `tools/editor-extensions/recommended_extensions.md` | Human guidance for optional editor extensions; valid colocated extension doc. | Keep |

### `editor-extensions/authoring-tools`

| File | Finding | Disposition |
|---|---|---|
| `tools/editor-extensions/authoring-tools/LICENSE` | Required packaged artifact metadata. | Keep |
| `tools/editor-extensions/authoring-tools/README.md` | Valid extension readme. | Keep |
| `tools/editor-extensions/authoring-tools/extension.js` | Active extension entrypoint. | Keep |
| `tools/editor-extensions/authoring-tools/lib/authoring-core.js` | Active shared logic used by tests and formatting workflows. | Keep |
| `tools/editor-extensions/authoring-tools/livepeer-authoring-tools-0.0.1.vsix` | Packaged extension artifact; acceptable if artifact tracking remains policy. | Keep, govern |
| `tools/editor-extensions/authoring-tools/package.json` | Active package manifest. | Keep |

### `editor-extensions/components`

| File | Finding | Disposition |
|---|---|---|
| `tools/editor-extensions/components/README.md` | Valid component picker doc, but component-count claims should be treated as drift-prone. | Keep, fix |
| `tools/editor-extensions/components/component-registry.json` | Active extension-local registry dependency. | Keep |
| `tools/editor-extensions/components/extension.js` | Active extension entrypoint. | Keep |
| `tools/editor-extensions/components/livepeer-component-picker-0.0.1.vsix` | Packaged extension artifact. | Keep, govern |
| `tools/editor-extensions/components/package.json` | Active package manifest. | Keep |

### `editor-extensions/lpd-mdx-preview`

| File | Finding | Disposition |
|---|---|---|
| `tools/editor-extensions/lpd-mdx-preview/LICENSE` | Required packaged artifact metadata. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/README.md` | Valid extension readme and packaging instructions. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/extension.js` | Active extension entrypoint. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/lib/component-map.js` | Active extension dependency. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/lib/mdx-parser.js` | Active extension dependency. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/lib/mintlify-components.js` | Active extension dependency. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/lib/webview-template.js` | Active extension dependency. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/lpd-mdx-preview-0.0.2.vsix` | Packaged extension artifact with explicit parity validation and tests. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/media/icon.png` | Required extension asset. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/media/markdown-it.min.js` | Vendored runtime asset required by extension webview. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/media/mermaid.min.js` | Vendored runtime asset required by extension webview. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/media/preview.css` | Required extension asset. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/media/preview.js` | Required extension asset. | Keep |
| `tools/editor-extensions/lpd-mdx-preview/package.json` | Active package manifest. | Keep |

### `editor-extensions/markdown-list`

| File | Finding | Disposition |
|---|---|---|
| `tools/editor-extensions/markdown-list/LICENSE` | Required packaged artifact metadata. | Keep |
| `tools/editor-extensions/markdown-list/README.md` | README still points to `vscode/markdown-list/...` for VSIX install. | Keep, fix |
| `tools/editor-extensions/markdown-list/extension.js` | Active extension entrypoint. | Keep |
| `tools/editor-extensions/markdown-list/livepeer-markdown-list-tools.vsix` | Packaged extension artifact. | Keep, govern |
| `tools/editor-extensions/markdown-list/package.json` | Active package manifest. | Keep |

### `i18n`

| File | Finding | Disposition |
|---|---|---|
| `tools/i18n/config.json` | Translation workflow config that belongs with the language-translation pipeline, not in `tools/`. | Relocation candidate |

### `lib`

| File | Finding | Disposition |
|---|---|---|
| `tools/lib/ai-tools-registry.js` | Active shared registry loader and validator. | Keep |
| `tools/lib/codex-skill-templates.js` | Active shared Codex skill template helper. | Keep |
| `tools/lib/component-governance-utils.js` | Active shared component governance helper. | Keep |
| `tools/lib/copy-governance/banned-phrases.txt` | Active copy-governance data dependency. | Keep |
| `tools/lib/copy-governance/banned-words.txt` | Active copy-governance data dependency. | Keep |
| `tools/lib/docs-authoring-rules.js` | Active shared docs authoring helper, but some header scopes still mention `tools/scripts`. | Keep, fix |
| `tools/lib/docs-index-utils.js` | Active shared docs indexing helper. | Keep |
| `tools/lib/docs-page-scope.js` | Active shared authored-page scope helper; stale `tools/scripts` scope metadata only. | Keep, fix |
| `tools/lib/docs-publishability.js` | Active shared publishability helper. | Keep |
| `tools/lib/docs-usefulness/config-validator.js` | Active usefulness helper. | Keep |
| `tools/lib/docs-usefulness/journey-check.js` | Active usefulness helper. | Keep |
| `tools/lib/docs-usefulness/llm-evaluator.js` | Active usefulness helper. | Keep |
| `tools/lib/docs-usefulness/prompts/changelog.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/prompts/concept.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/prompts/faq.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/prompts/glossary.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/prompts/how_to.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/prompts/index.js` | Active usefulness prompt module and prompt aggregator entry. | Keep |
| `tools/lib/docs-usefulness/prompts/landing.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/prompts/overview.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/prompts/reference.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/prompts/troubleshooting.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/prompts/tutorial.js` | Active usefulness prompt module. | Keep |
| `tools/lib/docs-usefulness/quality-gate.js` | Active usefulness helper. | Keep |
| `tools/lib/docs-usefulness/rubric-loader.js` | Active usefulness helper. | Keep |
| `tools/lib/docs-usefulness/rule-evaluators.js` | Active usefulness helper. | Keep |
| `tools/lib/docs-usefulness/scoring.js` | Active usefulness helper. | Keep |
| `tools/lib/frontmatter-taxonomy.js` | Heavily used core taxonomy helper. | Keep |
| `tools/lib/generated-artifacts.js` | Active generated-artifact governance helper. | Keep |
| `tools/lib/generated-file-banners.js` | Active generated-file governance helper. | Keep |
| `tools/lib/load-js-yaml.js` | Active dependency bootstrap helper; stale `tools/scripts` scope metadata only. | Keep, fix |
| `tools/lib/load-minimatch.js` | Active dependency bootstrap helper; stale `tools/scripts` scope metadata only. | Keep, fix |
| `tools/lib/mdx-safe-markdown.js` | Active MDX repair/helper surface. | Keep |
| `tools/lib/precommit-staged-cache.js` | Active hook/test helper; stale `tools/scripts` scope metadata only. | Keep, fix |
| `tools/lib/repo-node-paths.js` | Active test/script bootstrap helper. | Keep |
| `tools/lib/script-governance-config.js` | Active script-governance helper; owns known script-index roots. | Keep |
| `tools/lib/script-header-utils.js` | Active script-governance helper. | Keep |
| `tools/lib/script-index.md` | Generated script-governance index for `tools/lib/`. | Keep, govern |

### `notion`

| File | Finding | Disposition |
|---|---|---|
| `tools/notion/.env.example` | Correct scoped env template. | Keep |
| `tools/notion/1-read-notion-to-csv.js` | Active Notion sync pipeline step. | Keep |
| `tools/notion/2-read-docs-to-csv.js` | Active Notion sync pipeline step. | Keep |
| `tools/notion/3-check-duplicates.js` | Active Notion sync pipeline step. | Keep |
| `tools/notion/4-remove-duplicates.js` | Active Notion sync pipeline step. | Keep |
| `tools/notion/5-export-to-notion.js` | Active Notion sync pipeline step. | Keep |
| `tools/notion/FUNCTION.md` | Ad hoc analysis note with stale absolute links to another repo/worktree. | Archive candidate |
| `tools/notion/INSTRUCTIONS.md` | Duplicated ad hoc instructions with hardcoded DB IDs and repeated content. | Archive candidate |
| `tools/notion/README.md` | Canonical high-level runbook, but needs cleanup to remove drift and duplicate instruction material. | Keep, fix |
| `tools/notion/backup-notion-table.js` | Active utility for backup snapshots. | Keep |
| `tools/notion/install-local-sync-hook.sh` | Active local sync hook installer. | Keep |
| `tools/notion/local-post-commit-sync.sh` | Active local post-commit sync runner. | Keep |
| `tools/notion/package.json` | Active package manifest for Notion toolchain. | Keep |
| `tools/notion/remove-local-sync-hook.sh` | Active local sync hook remover. | Keep |
| `tools/notion/script-index.md` | Generated script-governance index for Notion scripts. | Keep, govern |
| `tools/notion/sync-v2-en-canonical.js` | Active canonical Notion sync entrypoint; strong repo usage. | Keep |

## Archive Queue

These are the strongest candidates for `tools/_workspace/archive/` after replacement or confirmation:

1. `tools/tools-catalog.mdx`
2. `tools/dev/install-authoring-tools-extension.js`
3. `tools/dev/test-add-callouts.js`
4. `tools/dev/test-seo-generator.js`
5. `tools/notion/FUNCTION.md`
6. `tools/notion/INSTRUCTIONS.md`

## Files That Should Be Replaced, Not Archived First

1. `tools/script-index.md`
2. `tools/package.json`
3. `tools/dev/format-mdx.js`
4. `tools/editor-extensions/markdown-list/README.md`
5. `tools/notion/README.md`

## Recommended Immediate Governance Moves

1. Treat `tools/` as a runtime/tooling surface only. Put long-form explanatory docs in `docs-guide/tooling/**`, and keep only concise colocated READMEs beside live tools.
2. Establish one canonical root human index for `tools/`, not another auto-dumped tree.
3. Add one canonical framework/governance page for placement rules, allowed subfolders, generated-file policy, binary artifact policy, and archive rules.
4. Finish the `tools/vscode` -> `tools/editor-extensions` and `tools/scripts` -> `operations/scripts` propagation everywhere before doing any archive move.
