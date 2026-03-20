# Script Folder Structure — Final Reference

> **Source of truth** for folder taxonomy. Referenced by `plan.md`.

<CustomDivider />

## Taxonomy index

### Types

| Type | Purpose |
|---|---|
| `audits/` | Read-only scan, measure, report |
| `generators/` | Produce files from source-of-truth data |
| `validators/` | Enforce rules, pass/fail gate |
| `remediators/` | Bulk fix/repair |
| `dispatch/` | Dispatch work to agents, pipeline chaining |
| `automations/` | Automated pipelines — translation, data fetching, transforms |

### Concerns (homogeneous — every type has all four)

| Concern | What it covers |
|---|---|
| `content/` | Docs pages, copy, SEO, quality, veracity, reference |
| `components/` | Component library, registry, CSS, naming, documentation |
| `governance/` | Scripts about scripts, repo structure, agent docs, manifests, catalogs |
| `ai/` | AI-adjacent operations — LLM files, agent packaging, skills sync |

### Niches per type × concern

**audits/**

| Concern | Niches |
|---|---|
| `content/` | `quality/`, `veracity/` |
| `components/` | `documentation/` |
| `governance/` | `scripts/`, `repo/` |
| `ai/` | (empty) |

**generators/**

| Concern | Niches |
|---|---|
| `content/` | `catalogs/`, `seo/`, `reconciliation/`, `reference/` |
| `components/` | `documentation/`, `library/` |
| `governance/` | `catalogs/`, `reports/`, `scaffold/` |
| `ai/` | `llm/` |

**validators/**

| Concern | Niches |
|---|---|
| `content/` | `copy/`, `structure/`, `grammar/` |
| `components/` | `documentation/`, `library/` |
| `governance/` | `compliance/`, `pr/` |
| `ai/` | (empty) |

**remediators/**

| Concern | Niches |
|---|---|
| `content/` | `repair/`, `style/`, `classification/` |
| `components/` | `library/` |
| `governance/` | (empty) |
| `ai/` | (empty) |

**dispatch/**

| Concern | Niches |
|---|---|
| `content/` | (empty) |
| `components/` | (empty) |
| `governance/` | `pipelines/` |
| `ai/` | `codex/`, `agents/` |

**automations/**

| Concern | Niches |
|---|---|
| `content/` | `language-translation/`, `data/` |
| `components/` | (empty) |
| `governance/` | (empty) |
| `ai/` | (empty) |

<CustomDivider />

## Full folder structure with script assignments

```
tools/scripts/
│
├── audits/
│   ├── content/
│   │   ├── quality/
│   │   │   ├── docs-quality-and-freshness-audit.js
│   │   │   ├── audit-v2-usefulness.js
│   │   │   ├── audit-media-assets.js
│   │   │   └── audit-copy-patterns.js             ← renamed from pattern-observer.js, moved from veracity/
│   │   └── veracity/
│   │       ├── docs-fact-registry.js
│   │       ├── docs-page-research.js
│   │       ├── docs-page-research-pr-report.js
│   │       ├── docs-research-adjudication.js
│   │       ├── docs-research-packet.js
│   │       └── orchestrator-guides-research-review.js
│   ├── components/
│   │   └── documentation/
│   │       └── audit-component-usage.js
│   ├── governance/
│   │   ├── scripts/
│   │   │   ├── audit-script-categories.js         ← renamed from audit-scripts.js
│   │   │   └── script-footprint-and-usage-audit.js
│   │   └── repo/
│   │       ├── audit-tasks-folders.js
│   │       ├── repo-audit-orchestrator.js
│   │       └── audit-python.py                    ← from tasks/scripts/
│   └── ai/
│       (empty)
│
├── generators/
│   ├── content/
│   │   ├── catalogs/
│   │   │   ├── generate-docs-index.js
│   │   │   └── generate-pages-index.js
│   │   ├── seo/
│   │   │   ├── generate-ai-sitemap.js
│   │   │   ├── generate-og-images.js              ← from snippets/
│   │   │   └── generate-seo.js                    ← from snippets/
│   │   ├── reconciliation/
│   │   │   └── generate-content-gap-reconciliation.js
│   │   └── reference/
│   │       ├── generate-api-docs.sh               ← from snippets/
│   │       ├── generate-glossary.js               ← from snippets/generate-data/scripts/
│   │       └── terminology-search.js              ← from snippets/generate-data/scripts/
│   ├── components/
│   │   ├── documentation/
│   │   │   └── generate-component-docs.js
│   │   └── library/
│   │       ├── generate-component-registry.js
│   │       ├── generate-component-snippets.py
│   │       ├── generate-ui-templates.js
│   │       └── scan-component-imports.js
│   ├── governance/
│   │   ├── catalogs/
│   │   │   ├── generate-docs-guide-indexes.js
│   │   │   ├── generate-docs-guide-components-index.js
│   │   │   ├── generate-docs-guide-pages-index.js
│   │   │   └── generate-ai-skills-indexes.js
│   │   ├── reports/
│   │   │   ├── generate-v2-folder-governance-cleanup-matrix.js
│   │   │   └── generate-component-governance-remediation-reports.js
│   │   └── scaffold/
│   │       └── new-script.js
│   └── ai/
│       └── llm/
│           └── generate-llms-files.js
│
├── validators/
│   ├── content/
│   │   ├── copy/
│   │   │   ├── lint-copy.js
│   │   │   └── lint-patterns.js
│   │   ├── structure/
│   │   │   ├── lint-structure.js
│   │   │   ├── check-anchor-usage.js
│   │   │   ├── check-description-quality.js
│   │   │   ├── check-docs-path-sync.js
│   │   │   ├── check-double-headers.js
│   │   │   ├── check-mdx-safe-markdown.js
│   │   │   ├── check-page-endings.js
│   │   │   ├── enforce-generated-file-banners.js
│   │   │   ├── test-v2-pages.js
│   │   │   └── verify-all-pages.js
│   │   └── grammar/
│   │       ├── check-grammar-en-gb.js
│   │       └── check-proper-nouns.js
│   ├── components/
│   │   ├── documentation/
│   │   │   └── check-component-docs.js
│   │   └── library/
│   │       ├── component-layout-governance.js
│   │       ├── check-component-css.js
│   │       ├── check-mdx-component-scope.js
│   │       └── check-naming-conventions.js
│   ├── governance/
│   │   ├── compliance/
│   │   │   ├── validate-ai-tools-registry.js
│   │   │   ├── validate-codex-task-contract.js
│   │   │   ├── check-agent-docs-freshness.js
│   │   │   ├── review-governance-repair-checklist.js
│   │   │   └── verify-pay-orc-gate-finalize.sh
│   │   └── pr/
│   │       ├── check-component-immutability.js    ← from enforcers/pr/
│   │       ├── check-pr-template.js               ← from enforcers/pr/
│   │       └── audit-script-inventory.js
│   └── ai/
│       (empty)
│
├── remediators/
│   ├── content/
│   │   ├── repair/
│   │   │   ├── repair-mdx-safe-markdown.js
│   │   │   ├── repair-spelling.js
│   │   │   ├── sync-docs-paths.js
│   │   │   ├── migrate-assets-to-branch.js        ← from remediators/assets/
│   │   │   └── quarantine-manager.js              ← renamed from cleanup-quarantine-manager.js
│   │   ├── style/
│   │   │   ├── repair-ownerless-language.js
│   │   │   ├── style-and-language-homogenizer-en-gb.js
│   │   │   └── wcag-repair-common.js
│   │   └── classification/
│   │       ├── add-framework-headers.js
│   │       ├── add-pagetype-mechanical.js
│   │       └── assign-purpose-metadata.js
│   ├── components/
│   │   └── library/
│   │       └── repair-component-metadata.js
│   ├── governance/
│   │   (empty)
│   └── ai/
│       (empty)
│
├── dispatch/
│   ├── content/
│   │   (empty)
│   ├── components/
│   │   (empty)
│   ├── governance/
│   │   └── pipelines/
│   │       ├── governance-pipeline.js             ← renamed from repair-governance.js
│   │       └── publish-v2-internal-reports.js
│   └── ai/
│       ├── codex/
│       │   ├── codex-commit.js
│       │   ├── create-codex-pr.js
│       │   ├── check-codex-pr-overlap.js
│       │   ├── check-no-ai-stash.sh
│       │   ├── lock-release.js                    ← from codex/
│       │   ├── task-cleanup.js                    ← from codex/
│       │   ├── task-finalise.js                   ← renamed (UK English)
│       │   ├── task-preflight.js                  ← from codex/
│       │   └── validate-locks.js                  ← from codex/
│       └── agents/
│           ├── cross-agent-packager.js
│           ├── export-portable-skills.js
│           └── sync-codex-skills.js
│
├── automations/
│   ├── content/
│   │   ├── language-translation/
│   │   │   ├── translate-docs.js                  ← from i18n/
│   │   │   ├── generate-localized-docs-json.js    ← from i18n/
│   │   │   ├── validate-generated.js              ← from i18n/
│   │   │   ├── test-mintlify-version-language-toggle.js
│   │   │   ├── lib/                               ← from i18n/lib/ (kept as-is)
│   │   │   │   ├── common.js
│   │   │   │   ├── config.js
│   │   │   │   ├── docs-json-localizer.js
│   │   │   │   ├── docs-routes.js
│   │   │   │   ├── frontmatter.js
│   │   │   │   ├── mdx-parser.js
│   │   │   │   ├── mdx-translate.js
│   │   │   │   ├── path-utils.js
│   │   │   │   ├── provenance.js
│   │   │   │   ├── provider-mock.js
│   │   │   │   ├── provider-openrouter.js
│   │   │   │   └── providers.js
│   │   │   └── test/                              ← from i18n/test/ (kept as-is)
│   │   │       ├── cli-guardrails.test.js
│   │   │       ├── docs-json-localizer.test.js
│   │   │       ├── frontmatter.test.js
│   │   │       ├── mdx-translate.test.js
│   │   │       ├── provenance.test.js
│   │   │       └── provider-openrouter.test.js
│   │   └── data/
│   │       ├── fetching/
│   │       │   ├── fetch-external-docs.sh         ← from snippets/
│   │       │   ├── fetch-lpt-exchanges.sh         ← from snippets/
│   │       │   └── fetch-openapi-specs.sh         ← from snippets/
│   │       └── transforms/
│   │           └── convert-rss-to-mdx.js
│   ├── components/
│   │   (empty)
│   ├── governance/
│   │   (empty)
│   └── ai/
│       (empty)
│
├── config/
│   ├── docs-path-sync.js                          ← from lib/
│   ├── og-image-policy.js                         ← from snippets/lib/
│   └── paths.config.json                          ← from snippets/
│
└── x-archive/                                     (no deletions ever — all superseded files via git mv)
```

### `/tools/dev/` (out of scripts scope)

```
/tools/dev/
  ├── debug-mint-dev.js
  ├── mint-dev.sh
  ├── format-mdx.js
  ├── install-authoring-tools-extension.js
  ├── add-callouts.js
  ├── generate-mint-dev-scope.js
  ├── mint-custom-loader.sh
  ├── ensure-mint-watcher-patch.sh
  ├── rename-vscode-codex-chat.js
  ├── test-add-callouts.js
  ├── test-seo-generator.js
  └── lib/resolve-scoped-docs-config.js
```

### Staying in place

| Location | Files | Decision |
|---|---|---|
| `.githooks/` (4 scripts) | install.sh, server-manager.js, verify-browser.js, verify.sh | Stay — hook infrastructure |
| `.github/scripts/` (4 scripts) | fetch-forum-data.js, fetch-ghost-blog-data.js, fetch-youtube-data.js, project-showcase-sync.js | Stay — GitHub Actions, can't move |
| `snippets/automations/` (8 .jsx + luma-calendar.jsx) | Data export components | Stay — not scripts |
| `snippets/test-scripts.sh` | Snippet test runner | Moves with tests in Task 11 |

### Moving to x-archive (confirmed dead — via git mv)

| Script | Reason |
|---|---|
| `dev/seo-generator-safe.js` | Deprecated — header says use canonical workflow |
| `dev/update-og-image.js` | Deprecated — header says use canonical workflow |
| `dev/update-all-og-images.js` | Deprecated — header says use canonical workflow |
| `dev/batch-update-og-image.sh` | Deprecated — header says use canonical workflow |
| `dev/replace-og-image.py` | Deprecated — header says use canonical workflow |
| `codex-safe-merge-with-stash.js` | Compatibility shim — directs to task-finalize |
| `verify/.verify-large-change.sh` | No-op placeholder |
| `redirects/sync-legacy-root-v1.js` | Not needed |

---

## Script JSDoc header standard

Every script must include a JSDoc header block with these 11 tags. No other
tags should be used — removed tags (`@owner`, `@category`, `@dualmode`) must
not appear.

### Tag reference

| Tag | Required | What it does | Values / format |
|---|---|---|---|
| `@script` | Yes | Script identity | Filename without extension |
| `@type` | Yes | Layer 1 — what the script does | `audit`, `generator`, `validator`, `remediator`, `dispatch`, `automation` |
| `@concern` | Yes | Layer 2 — what domain the script is about | `content`, `components`, `governance`, `ai` |
| `@niche` | Yes | Layer 3 — specific sub-concern | `quality`, `veracity`, `copy`, `structure`, `grammar`, `library`, `documentation`, `compliance`, `pr`, `codex`, `agents`, `pipelines`, `seo`, `catalogs`, `reference`, `reconciliation`, `repair`, `style`, `classification`, `data`, `language-translation`, `llm`, `scaffold`, `reports` |
| `@purpose` | Yes | Functional category — what job the script performs | Freeform, e.g. `qa:content-quality`, `governance:agent-governance` |
| `@description` | Yes | One-line human-readable description | Plain English sentence |
| `@mode` | Yes | How the script affects the system | `read-only`, `write`, `edit`, `generate`, `execute` |
| `@pipeline` | Yes | Flow declaration — trigger, inputs, outputs, dependants | `trigger → inputs → outputs [→ dependants]` |
| `@scope` | Yes | What files/directories it operates on | Comma-separated paths or patterns |
| `@usage` | Yes | CLI invocation example | Full command with flags |
| `@policy` | If applicable | Governance/requirement traceability | Requirement IDs, e.g. `E-R1, R-R11` |

### Removed tags (must not appear)

| Tag | Reason |
|---|---|
| `@owner` | Ownerless governance — was always `docs` for every script |
| `@category` | Replaced by `@type` |
| `@dualmode` | Scripts should have one purpose |
| `@purpose-statement` | Renamed to `@description` |
| `@needs` | Renamed to `@policy` |

### @mode values

| Value | Meaning |
|---|---|
| `read-only` | Inspects and reports only — no file changes |
| `write` | Creates new files |
| `edit` | Modifies existing files in place |
| `generate` | Produces artefacts (JSON, MDX, indexes, registries) |
| `execute` | Runs external commands, dispatches work to other scripts/agents |

### @pipeline format

Single-line flow declaration using arrow notation:

```
@pipeline   trigger → inputs → outputs [→ dependants]
```

Examples:

```
@pipeline   pre-commit → staged .mdx files → stdout:report
@pipeline   manual → docs.json, v2 frontmatter → docs-index.json → scripts-catalog
@pipeline   cron:weekly → full v2 tree → governance-repair PR
@pipeline   pr-workflow → changed .mdx files → exit-code, stdout:violations
@pipeline   manual → component-registry.json → component-docs .mdx pages
```

### Example header

```js
/**
 * @script      lint-copy
 * @type        validator
 * @concern     content
 * @niche       copy
 * @purpose     qa:content-quality
 * @description Enforces banned word and phrase rules on MDX content files.
 * @mode        read-only
 * @pipeline    pr-workflow → staged .mdx files → exit-code, stdout:violations
 * @scope       staged, changed, v2-content
 * @usage       node tools/scripts/validators/content/copy/lint-copy.js [file or glob] [flags]
 * @policy      E-R1, R-R11
 */
```
