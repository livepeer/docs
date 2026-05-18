# SME Audit: `maintenance` concern

> 33 scripts | Generated 2026-05-17
> Walk through each script. Set verdict per row. SME notes column free-form.
>
> **Verdict options:** `keep` / `refactor` / `merge` / `archive` / `unknown`

---

## audit (8)

### niche: `documentation` (1)

#### `audit-component-usage.js`

- **Path:** `operations/scripts/audits/components/documentation/audit-component-usage.js`
- **Purpose:** * @description Component usage auditor — scans pages for component usage patterns and reports statistics
- **Description:** Component usage auditor — scans pages for component usage patterns and reports statistics
- **Workflow callers:** `audit-health-scan-content-quality.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual
- **Usage:** `node operations/scripts/audits/components/documentation/audit-component-usage.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `library` (3)

#### `audit-ai-discoverability.js`

- **Path:** `operations/scripts/audits/components/library/audit-ai-discoverability.js`
- **Purpose:** qa:component-quality
- **Description:** Audit JSX components for AI discoverability compliance: missing tags on hook-using components, missing companion JSON files.
- **Workflow callers:** `validator-copy-check-content-quality-suite.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual > snippets/components (all .jsx) > stdout:report
- **Usage:** `node operations/scripts/audits/components/library/audit-ai-discoverability.js [--json] [--md] [--staged]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `audit-component-styles.js`

- **Path:** `operations/scripts/audits/components/library/audit-component-styles.js`
- **Purpose:** qa:component-quality
- **Description:** Audit JSX components for style pattern violations: inline styles, top-level constants, missing named style objects.
- **Workflow callers:** `validator-copy-check-content-quality-suite.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual > snippets/components (all .jsx) > stdout:report
- **Usage:** `node operations/scripts/audits/components/library/audit-component-styles.js [--json] [--md] [--staged] [--fix-preview]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `scan-component-imports.js`

- **Path:** `operations/scripts/audits/components/library/scan-component-imports.js`
- **Purpose:** * @description Scans MDX imports to produce component-usage-map.json and detect @usedIn drift.
- **Description:** Scans MDX imports to produce component-usage-map.json and detect @usedIn drift.
- **Workflow callers:** `audit-health-scan-content-quality.yml`
- **Capabilities:** `--verify`
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual, P6, manual
- **Usage:** `node operations/scripts/audits/components/library/scan-component-imports.js [--verify] [--since <commit>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `reconciliation` (1)

#### `generate-content-gap-reconciliation.js`

- **Path:** `operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js`
- **Purpose:** * @description Content-gap reconciliation generator — compares blueprint coverage against v2 MDX and writes reconciliation artefacts
- **Description:** Content-gap reconciliation generator — compares blueprint coverage against v2 MDX and writes reconciliation artefacts
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `reference` (3)

#### `audit-glossary-gaps.js`

- **Path:** `operations/scripts/audits/content/reference/audit-glossary-gaps.js`
- **Purpose:** * @description Glossary gap auditor — scans v2 MDX pages for terminology candidates not
- **Description:** Glossary gap auditor — scans v2 MDX pages for terminology candidates not
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual | post-PR | cron
- **Usage:** `node operations/scripts/audits/content/reference/audit-glossary-gaps.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `audit-icon-usage.js`

- **Path:** `operations/scripts/audits/content/reference/audit-icon-usage.js`
- **Purpose:** * @description Icon usage auditor — scans v2 and docs-guide MDX pages for icon prop
- **Description:** Icon usage auditor — scans v2 and docs-guide MDX pages for icon prop
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual | post-PR | cron
- **Usage:** `node operations/scripts/audits/content/reference/audit-icon-usage.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `terminology-search.js`

- **Path:** `operations/scripts/audits/content/reference/terminology-search.js`
- **Purpose:** * @description Terminology search — searches glossary/terminology data for definitions
- **Description:** Terminology search — searches glossary/terminology data for definitions
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/audits/content/reference/terminology-search.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## validator (8)

### niche: `documentation` (1)

#### `check-component-docs.js`

- **Path:** `operations/scripts/validators/components/documentation/check-component-docs.js`
- **Purpose:** * @description Validates component JSDoc coverage, prop documentation, docs-entry coverage, and governance metadata.
- **Description:** Validates component JSDoc coverage, prop documentation, docs-entry coverage, and governance metadata.
- **Workflow callers:** `validator-copy-check-content-quality-suite.yml`
- **Capabilities:** `--verify`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual, P3
- **Usage:** `node operations/scripts/validators/components/documentation/check-component-docs.js [--path snippets/components] [--base-ref docs-v2] [--staged] [--strict-governance] [--help]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `library` (7)

#### `check-component-css.js`

- **Path:** `operations/scripts/validators/components/library/check-component-css.js`
- **Purpose:** * @description Validates component files against component governance styling rules.
- **Description:** Validates component files against component governance styling rules.
- **Workflow callers:** `validator-copy-check-content-quality-suite.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual → component .jsx files → exit-code, stdout:violations; --fix → component .jsx files → CSS token replacements, P3
- **Usage:** `node operations/scripts/validators/components/library/check-component-css.js [--path snippets/components] [--staged] [--fix] [--help]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-component-health.js`

- **Path:** `operations/scripts/validators/components/library/check-component-health.js`
- **Purpose:** governance:quality-gate
- **Description:** Checks component library health: imports, exports, registry sync, and usage patterns
- **Workflow callers:** `dispatch-maintenance-check-catalogs.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** pr-workflow -> component-registry.json, snippets/components/ -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/components/library/check-component-health.js [--check] [--report]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-component-props.js`

- **Path:** `operations/scripts/validators/components/library/check-component-props.js`
- **Purpose:** qa:repo-health
- **Description:** Component prop governance validator. Checks Tab/Accordion icon props, code block metadata, Card CustomCardTitle usage, inline styles, CustomDivider placement, Mermaid colour governance, and import ordering across v2 MDX pages (checks 5.18-5.20, 5.22, 5.26-5.28, 5.34).
- **Workflow callers:** `audit-health-scan-content-quality.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/components/library/check-component-props.js [--scope=full|changed] [--json] [--md] [--help]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-mdx-component-scope.js`

- **Path:** `operations/scripts/validators/components/library/check-mdx-component-scope.js`
- **Purpose:** * @description Validates MDX-facing component modules do not depend on private file-scope helper bindings from exported components.
- **Description:** Validates MDX-facing component modules do not depend on private file-scope helper bindings from exported components.
- **Workflow callers:** `validator-copy-check-content-quality-suite.yml`
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/components/library/check-mdx-component-scope.js [--files path[,path...]] [--staged]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-naming-conventions.js`

- **Path:** `operations/scripts/validators/components/library/check-naming-conventions.js`
- **Purpose:** * @description Validates active component filenames against directory-aware file naming and PascalCase exports under snippets/components.
- **Description:** Validates active component filenames against directory-aware file naming and PascalCase exports under snippets/components.
- **Workflow callers:** `validator-copy-check-content-quality-suite.yml`
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/components/library/check-naming-conventions.js [--path snippets/components] [--files path[,path...]] [--mode migration|strict-camel|strict-pascal]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `component-layout-governance.js`

- **Path:** `operations/scripts/validators/components/library/component-layout-governance.js`
- **Purpose:** * @description Component layout governance validator — checks v2 page layouts against approved component contracts
- **Description:** Component layout governance validator — checks v2 page layouts against approved component contracts
- **Workflow callers:** `audit-health-scan-content-quality.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/components/library/component-layout-governance.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `validate-component-creation.js`

- **Path:** `operations/scripts/validators/components/library/validate-component-creation.js`
- **Purpose:** governance:quality-gate
- **Description:** Validates new/modified .jsx files in snippets/components/ for 7-tag JSDoc presence,
- **Workflow callers:** `dispatch-maintenance-check-catalogs.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** read-write
- **Pipeline:** pre-commit, pr-workflow -> snippets/components/ -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/components/library/validate-component-creation.js [--check] [--fix] [--fix --verify] [--dry-run] [--staged] [--files path,path]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## generator (12)

### niche: `catalogs` (2)

#### `generate-docs-index.js`

- **Path:** `operations/scripts/generators/content/catalogs/generate-docs-index.js`
- **Purpose:** * @description Docs index generator — produces docs-index.json from v2 frontmatter and docs.json. Dual-mode: --check (enforcer) / --write (generator). Most-called script in the repo.
- **Description:** Docs index generator — produces docs-index.json from v2 frontmatter and docs.json. Dual-mode: --check (enforcer) / --write (generator). Most-called script in the repo.
- **Workflow callers:** `dispatch-maintenance-check-catalogs.yml`, `integrator-copy-update-translations.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, P3, P6
- **Usage:** `node operations/scripts/generators/content/catalogs/generate-docs-index.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-pages-index.js`

- **Path:** `operations/scripts/generators/content/catalogs/generate-pages-index.js`
- **Purpose:** * @description Pages index generator — generates and verifies section-style index.mdx files for v2 docs folders plus root aggregate index
- **Description:** Pages index generator — generates and verifies section-style index.mdx files for v2 docs folders plus root aggregate index
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual
- **Usage:** `node operations/scripts/generators/content/catalogs/generate-pages-index.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `documentation` (1)

#### `generate-component-docs.js`

- **Path:** `operations/scripts/generators/components/documentation/generate-component-docs.js`
- **Purpose:** * @description Generates published component library MDX pages from the registry. Replaces update-component-library.sh.
- **Description:** Generates published component library MDX pages from the registry. Replaces update-component-library.sh.
- **Workflow callers:** `dispatch-maintenance-check-catalogs.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual
- **Usage:** `node operations/scripts/generators/components/documentation/generate-component-docs.js [--dry-run|--fix|--write|--check] [--template-only] [--category <name>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `library` (6)

#### `generate-component-examples.js`

- **Path:** `operations/scripts/generators/components/library/generate-component-examples.js`
- **Purpose:** governance:index-management
- **Description:** Keeps per-file example MDX files in sync with the component registry
- **Workflow callers:** `dispatch-maintenance-check-catalogs.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, pr-workflow -> component-registry.json -> snippets/components/examples/*.mdx
- **Usage:** `node operations/scripts/generators/components/library/generate-component-examples.js [--scaffold] [--fix-imports] [--check]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-component-index.js`

- **Path:** `operations/scripts/generators/components/library/generate-component-index.js`
- **Purpose:** governance:index-management
- **Description:** Generates per-grouping INDEX.md quick-reference tables from component-registry.json
- **Workflow callers:** `dispatch-maintenance-check-catalogs.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-08
- **Mode:** generate
- **Pipeline:** manual, post-registry -> component-registry.json -> snippets/components/INDEX.md
- **Usage:** `node operations/scripts/generators/components/library/generate-component-index.js [--dry-run] [--check] [--category elements]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-component-library.js`

- **Path:** `operations/scripts/generators/components/library/generate-component-library.js`
- **Purpose:** governance:documentation
- **Description:** Generates per-grouping LIBRARY.md files and a root LIBRARY.md index from
- **Workflow callers:** `dispatch-maintenance-check-catalogs.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-08
- **Mode:** generate
- **Pipeline:** manual, post-registry -> component-registry.json -> snippets/components/LIBRARY.md
- **Usage:** `node operations/scripts/generators/components/library/generate-component-library.js [--dry-run] [--check] [--category elements]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-component-registry.js`

- **Path:** `operations/scripts/generators/components/library/generate-component-registry.js`
- **Purpose:** * @description Parses JSDoc from all component exports and produces component-registry.json.
- **Description:** Parses JSDoc from all component exports and produces component-registry.json.
- **Workflow callers:** `audit-health-scan-content-quality.yml`, `dispatch-maintenance-check-catalogs.yml`, `validator-copy-check-content-quality-suite.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, P3, P5, P6, manual, manual
- **Usage:** `node operations/scripts/generators/components/library/generate-component-registry.js [--validate-only]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-component-snippets.js`

- **Path:** `operations/scripts/generators/components/library/generate-component-snippets.js`
- **Purpose:** tooling:dev-tools
- **Description:** Generate VS Code snippet definitions from component-registry.json.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual → component-registry.json → .vscode/components.code-snippets
- **Usage:** `node operations/scripts/generators/components/library/generate-component-snippets.js [--check] [--write]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-ui-templates.js`

- **Path:** `operations/scripts/generators/components/library/generate-ui-templates.js`
- **Purpose:** * @description Generates the UI template catalog and VS Code snippets from canonical template/component sources.
- **Description:** Generates the UI template catalog and VS Code snippets from canonical template/component sources.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual — interactive developer tool, not suited for automated pipelines
- **Usage:** `node operations/scripts/generators/components/library/generate-ui-templates.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `reference` (3)

#### `generate-api-docs.sh`

- **Path:** `operations/scripts/generators/content/reference/generate-api-docs.sh`
- **Purpose:** # @description API docs generator — generates API reference pages from OpenAPI specs
- **Description:** API docs generator — generates API reference pages from OpenAPI specs
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `bash operations/scripts/generators/content/reference/generate-api-docs.sh [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-glossary-companions.js`

- **Path:** `operations/scripts/generators/content/reference/generate-glossary-companions.js`
- **Purpose:** * @description Companion JSON generator — extracts SearchTable itemsList data from glossary MDX pages
- **Description:** Companion JSON generator — extracts SearchTable itemsList data from glossary MDX pages
- **Workflow callers:** `generator-discoverability-generate-companions.yml`, `validator-discoverability-check-companions.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** CI: generate-ai-companions.yml (push→main), check-ai-companions.yml (PR gate) | manual
- **Usage:** `node operations/scripts/generators/content/reference/generate-glossary-companions.js [--dry-run] [--check]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-glossary.js`

- **Path:** `operations/scripts/generators/content/reference/generate-glossary.js`
- **Purpose:** * @description Glossary generator — produces glossary data file from terminology sources
- **Description:** Glossary generator — produces glossary data file from terminology sources
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/generators/content/reference/generate-glossary.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## remediator (3)

### niche: `library` (3)

#### `repair-ai-discoverability.js`

- **Path:** `operations/scripts/remediators/components/library/repair-ai-discoverability.js`
- **Purpose:** qa:component-quality
- **Description:** Repair AI discoverability compliance: add missing @aiDiscoverability tags to hook-using components, create placeholder companion JSON files.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual > snippets/components (all .jsx) > repaired files, placeholder JSONs
- **Usage:** `node operations/scripts/remediators/components/library/repair-ai-discoverability.js [--dry-run] [--write] [--staged]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-component-metadata.js`

- **Path:** `operations/scripts/remediators/components/library/repair-component-metadata.js`
- **Purpose:** governance:repo-health
- **Description:** Auto-repairs derived JSDoc metadata fields from repo state. Safe fields only. Mirrors AUDIT-00 --fix pattern for components.
- **Workflow callers:** `audit-health-scan-content-quality.yml`, `dispatch-maintenance-check-catalogs.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual, P6, manual
- **Usage:** `node operations/scripts/remediators/components/library/repair-component-metadata.js [--dry-run] [--fix] [--staged]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-component-styles.js`

- **Path:** `operations/scripts/remediators/components/library/repair-component-styles.js`
- **Purpose:** qa:component-quality
- **Description:** Repair JSX component style violations: extract inline styles to named const, move top-level constants inside function body.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual > snippets/components (all .jsx) > repaired files
- **Usage:** `node operations/scripts/remediators/components/library/repair-component-styles.js [--dry-run] [--write] [--staged]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## integrator (2)

### niche: `contracts` (1)

#### `fetch-contract-addresses.js`

- **Path:** `operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js`
- **Purpose:** infrastructure:data-feeds
- **Description:** Thin CLI entrypoint for the chain-first contracts pipeline.
- **Workflow callers:** `integrator-maintenance-update-contract-addresses-shadow.yml`, `integrator-maintenance-update-contract-addresses.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-05-04
- **Mode:** integrate
- **Pipeline:** manual
- **Usage:** `node .github/scripts/fetch-contract-addresses.js [--dry-run] [--check] [--skip-verify]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `release` (1)

#### `update-livepeer-release.js`

- **Path:** `operations/scripts/integrators/maintenance/release/update-livepeer-release.js`
- **Purpose:** qa:data-refresh
- **Description:** Fetches or accepts the latest go-livepeer release tag and writes the canonical release data module.
- **Workflow callers:** `dispatch-copy-update-social-feeds.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** manual
- **Usage:** `node .github/scripts/update-livepeer-release.js [--version <tag>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---


## Orphan summary (10)

Scripts with no workflow caller and no other script caller. Candidates for archive.

- `operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js` — * @description Content-gap reconciliation generator — compares blueprint coverage against v2 MDX and writes reconciliation artefacts
- `operations/scripts/audits/content/reference/audit-glossary-gaps.js` — * @description Glossary gap auditor — scans v2 MDX pages for terminology candidates not
- `operations/scripts/audits/content/reference/audit-icon-usage.js` — * @description Icon usage auditor — scans v2 and docs-guide MDX pages for icon prop
- `operations/scripts/audits/content/reference/terminology-search.js` — * @description Terminology search — searches glossary/terminology data for definitions
- `operations/scripts/generators/components/library/generate-component-snippets.js` — tooling:dev-tools
- `operations/scripts/generators/components/library/generate-ui-templates.js` — * @description Generates the UI template catalog and VS Code snippets from canonical template/component sources.
- `operations/scripts/generators/content/reference/generate-api-docs.sh` — # @description API docs generator — generates API reference pages from OpenAPI specs
- `operations/scripts/generators/content/reference/generate-glossary.js` — * @description Glossary generator — produces glossary data file from terminology sources
- `operations/scripts/remediators/components/library/repair-ai-discoverability.js` — qa:component-quality
- `operations/scripts/remediators/components/library/repair-component-styles.js` — qa:component-quality
