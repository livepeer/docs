# Script audit — maintenance concern

Generated 2026-05-24

**51 scripts** in this concern.

## audit (8)

### `operations/scripts/audits/components/library/audit-ai-discoverability.js`

**Niche:** component-registry

**Purpose:** Audit snippets/components/ JSX files for AI-discoverability compliance — every hook-using component must declare AI tags and ship a companion JSON snapshot so the AI tooling can introspect props/usage without re-parsing source

**Description:** Scans .jsx files for React hook usage (useState, useEffect, useMemo, custom hooks). For each hook-using component, checks the JSDoc declares the AI-discoverability tags + a matching snapshot exists at snippets/data/snapshots/{Component}.json. Emits JSON (--json) or markdown (--md) report. Currently orphaned — not wired into dispatch-component-registry; tracked as follow-up.

**Scope:** snippets/components/*.jsx, snippets/data/snapshots/*.json

**Reads (2):** `snippets/components`, `snippets/data/snapshots`

**Writes (0):** _(none detected)_

**Callers (0):** _(none detected — orphan?)_

**🚩 Auto-flags:**
- orphan-no-caller

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/components/library/audit-component-styles.js`

**Niche:** library

**Purpose:** qa:component-quality

**Description:** Audit JSX components for style pattern violations: inline styles, top-level constants, missing named style objects.

**Scope:** snippets/components

**Reads (1):** `snippets/components`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/brand/dispatch-style-tokens.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/components/documentation/audit-component-usage.js`

**Niche:** documentation

**Purpose:** Scans pages for component usage patterns and reports statistics

**Description:** Component usage auditor — scans pages for component usage patterns and reports statistics

**Scope:** operations/scripts

**Reads (1):** `workspace/reports/repo-ops/component-usage-audit.json`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/audits/governance/repo/audit-tasks-folders.js`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/component-health.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/reference/audit-glossary-gaps.js`

**Niche:** reference

**Purpose:** Scans v2 MDX pages for terminology candidates not

**Description:** Glossary gap auditor — scans v2 MDX pages for terminology candidates not

**Scope:** operations/scripts/audits/content/reference

**Reads (2):** `workspace/reports/_local/glossary-gap-report.json`, `v2`

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**🚩 Auto-flags:**
- reads-non-canonical:workspace/reports/_local/glossary-gap-report.json

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/reference/audit-icon-usage.js`

**Niche:** reference

**Purpose:** Scans v2 and docs-guide MDX pages for icon prop

**Description:** Icon usage auditor — scans v2 and docs-guide MDX pages for icon prop

**Scope:** operations/scripts/audits/content/reference

**Reads (4):** `workspace/reports/_local/icon-usage-report.json`, `snippets/data/reference-maps/icon-map.jsx`, `v2`, `docs-guide`

**Writes (0):** _(none detected)_

**Callers (3):** `docs-guide/tooling/reference-maps/icon-map.mdx`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/thread-outputs/research/styles-gap-analysis.md`, `docs-guide/catalog/scripts-catalog.mdx`

**🚩 Auto-flags:**
- reads-non-canonical:workspace/reports/_local/icon-usage-report.json

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js`

**Niche:** reconciliation

**Purpose:** Audit content-gap reconciliation generator — compares blueprint coverage against v2 MDX and writes reconciliation artefacts

**Description:** Content-gap reconciliation generator — compares blueprint coverage against v2 MDX and writes reconciliation artefacts

**Scope:** operations/scripts, tools/config, tools/lib, v2, workspace/reports/content-gap

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/repo-ops/config/repo-config-map.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/components/library/scan-component-imports.js`

**Niche:** library

**Purpose:** Scans MDX imports to produce component-usage-map.json and detect @usedIn drift.

**Description:** Scans MDX imports to produce component-usage-map.json and detect @usedIn drift.

**Scope:** generated-output

**Reads (1):** `docs-guide/config/component-usage-map.json`

**Writes (0):** _(none detected)_

**Callers (4):** `docs-guide/config/component-usage-map.json`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/component-health.mdx`, `docs-guide/frameworks/component-framework-canonical.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/reference/terminology-search.js`

**Niche:** reference

**Purpose:** Audit searches glossary/terminology data for definitions

**Description:** Terminology search — searches glossary/terminology data for definitions

**Scope:** operations/scripts

**Reads (2):** `v1`, `operations/scripts/audits/content/data`

**Writes (0):** _(none detected)_

**Callers (2):** `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## dispatch (13)

### `operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js`

**Niche:** catalogs

**Purpose:** Pipeline dispatcher for catalogs (full lifecycle: detect → repair → verify → escalate)

**Description:** docs-guide catalog pipeline (PR check + post-merge regen).

**Scope:** docs-guide/catalog/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`, `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js`

**Niche:** component-registry

**Purpose:** Pipeline dispatcher for component-registry (full lifecycle: detect → repair → verify → escalate)

**Description:** Component registry pipeline (PR drift check + post-merge regen + component validators).

**Scope:** snippets/components/, component-registry.json

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`, `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js`, `operations/scripts/validators/components/library/check-component-props.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js`

**Niche:** config-flags

**Purpose:** Pipeline dispatcher for config-flags (full lifecycle: detect → repair → verify → escalate)

**Description:** go-livepeer config flags fetcher.

**Scope:** snippets/data/config-flags/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`, `operations/scripts/integrators/maintenance/data-feeds/fetch-config-flags.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js`

**Niche:** contract-addresses

**Purpose:** Pipeline dispatcher for contract-addresses (full lifecycle: detect → repair → verify → escalate)

**Description:** Contract addresses fetch from on-chain.

**Scope:** snippets/data/contract-addresses/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-contract-shadow.js`

**Niche:** contract-shadow

**Purpose:** Pipeline dispatcher for contract-shadow (full lifecycle: detect → repair → verify → escalate)

**Description:** Shadow contract pipeline (verify production matches shadow).

**Scope:** snippets/data/contract-addresses/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js`

**Niche:** docs-index

**Purpose:** Pipeline dispatcher for docs-index (full lifecycle: detect → repair → verify → escalate)

**Description:** docs-index.json pipeline (PR drift check + post-merge regen).

**Scope:** docs-index.json

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`, `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js`

**Niche:** exchanges-data

**Purpose:** Pipeline dispatcher for exchanges-data (full lifecycle: detect → repair → verify → escalate)

**Description:** CoinGecko exchanges data fetcher.

**Scope:** snippets/data/exchanges/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`, `operations/scripts/integrators/maintenance/data-feeds/fetch-exchanges-data.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-large-assets.js`

**Niche:** large-assets

**Purpose:** Pipeline dispatcher for large-assets (full lifecycle: detect → repair → verify → escalate)

**Description:** Large asset sync to docs-v2-assets branch.

**Scope:** public/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js`

**Niche:** meta

**Purpose:** check meta dispatcher: bundles maintenance pipelines in --mode pr

**Description:** PR meta for maintenance concern.

**Scope:** all maintenance pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-maintenance.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`

**Niche:** meta

**Purpose:** generate meta dispatcher: bundles maintenance pipelines in --mode post-merge

**Description:** Post-merge meta for maintenance generators.

**Scope:** all maintenance pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-maintenance.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`

**Niche:** meta

**Purpose:** update meta dispatcher: bundles maintenance pipelines in --mode scheduled

**Description:** Scheduled meta for maintenance integrators.

**Scope:** all maintenance pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-maintenance.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-release-version.js`

**Niche:** release-version

**Purpose:** Pipeline dispatcher for release-version (full lifecycle: detect → repair → verify → escalate)

**Description:** go-livepeer release version fetcher.

**Scope:** snippets/data/releases/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/maintenance/dispatch-sdk-clients.js`

**Niche:** sdk-clients

**Purpose:** Pipeline dispatcher for sdk-clients (full lifecycle: detect → repair → verify → escalate)

**Description:** SDK client generation (Speakeasy wrapper).

**Scope:** snippets/sdks/

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## generator (12)

### `operations/scripts/generators/content/reference/generate-api-docs.sh`

**Niche:** reference

**Purpose:** Generates API reference pages from OpenAPI specs

**Description:** API docs generator — generates API reference pages from OpenAPI specs

**Scope:** operations/scripts/generators/content/reference

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/remediators/content/health/repair-openapi-reference.js`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/contributing/community-help.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/data-integrations.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/components/documentation/generate-component-docs.js`

**Niche:** documentation

**Purpose:** Generates published component library MDX pages from the registry. Replaces update-component-library.sh.

**Description:** Generates published component library MDX pages from the registry. Replaces update-component-library.sh.

**Scope:** generated-output

**Reads (8):** `docs-guide/config/component-registry.json`, `docs-guide/.editorial-cache.json`, `v2/resources/documentation-guide/component-library`, `v2/es/resources/documentation-guide/component-library`, `v2/fr/resources/documentation-guide/component-library`, `v2/cn/resources/documentation-guide/component-library` _(+2 more)_

**Writes (0):** _(none detected)_

**Callers (12):** `operations/scripts/archive/deprecated/update-component-library.sh`, `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`, `operations/governance/config/generated-artifacts.json`, `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/tooling/lpd-cli.mdx` _(+7 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/components/library/generate-component-examples.js`

**Niche:** library

**Purpose:** governance:index-management

**Description:** Keeps per-file example MDX files in sync with the component registry

**Scope:** snippets/components/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/validators/components/library/check-component-health.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/component-health.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/components/library/generate-component-index.js`

**Niche:** component-registry

**Purpose:** Generate per-grouping snippets/components/{category}/INDEX.md quick-reference tables from component-registry.json + component-usage-map.json — gives contributors a one-page lookup of every component with name, file, status, description, and import count per category

**Description:** Reads docs-guide/config/component-registry.json (all components) + the component-usage map (where each is imported). For each top-level grouping (wrappers, config, scaffolding, displays, elements, etc.) emits an INDEX.md with the components in that group. Distinct from generate-component-library.js which emits the longer LIBRARY.md docs. Manual-use — not in dispatch-component-registry pipeline yet; tracked as follow-up.

**Scope:** docs-guide/config/component-registry.json → snippets/components/{group}/INDEX.md

**Reads (3):** `docs-guide/config/component-registry.json`, `docs-guide/config/component-usage-map.json`, `snippets/components`

**Writes (0):** _(none detected)_

**Callers (1):** `operations/scripts/generators/components/library/generate-component-library.js`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/components/library/generate-component-library.js`

**Niche:** component-registry

**Purpose:** Generate the long-form snippets/components/{category}/LIBRARY.md docs + a root LIBRARY.md index from component-registry.json — every component entry covers description, props, import path, usage example, and status badge so contributors don't have to read source to use a component

**Description:** Reads docs-guide/config/component-registry.json + the component-usage map. Renders LIBRARY.md per top-level grouping plus a root index. Paired with generate-component-index.js (INDEX.md = short table; LIBRARY.md = full docs). Manual-use — not in dispatch-component-registry pipeline yet; tracked as follow-up.

**Scope:** docs-guide/config/component-registry.json → snippets/components/{group}/LIBRARY.md + root LIBRARY.md

**Reads (3):** `docs-guide/config/component-registry.json`, `docs-guide/config/component-usage-map.json`, `snippets/components`

**Writes (0):** _(none detected)_

**Callers (1):** `operations/scripts/generators/components/library/generate-component-index.js`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/components/library/generate-component-registry.js`

**Niche:** library

**Purpose:** Parses JSDoc from all component exports and produces component-registry.json.

**Description:** Parses JSDoc from all component exports and produces component-registry.json.

**Scope:** single-domain

**Reads (2):** `docs-guide/config/component-registry.json`, `docs-guide/config/component-registry-schema.json`

**Writes (0):** _(none detected)_

**Callers (10):** `operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js`, `operations/scripts/generators/components/library/generate-component-snippets.js`, `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/config/component-registry.json`, `docs-guide/catalog/scripts-catalog.mdx` _(+5 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/components/library/generate-component-snippets.js`

**Niche:** component-registry

**Purpose:** Generate .vscode/components.code-snippets from docs-guide/config/component-registry.json — gives contributors VS Code IntelliSense entries for every Livepeer Mintlify component (Card, Tabs, Accordion, CustomDivider, etc.) so they can scaffold correct usage with one keystroke

**Description:** Reads the component registry, projects each entry into a VS Code snippet definition (prefix, body, description, params), writes .vscode/components.code-snippets. --check fails if the generated snippets file drifts from the registry source; --write regenerates. Tracked in operations/governance/config/generated-artifacts.json so pre-commit checks freshness on registry changes.

**Scope:** docs-guide/config/component-registry.json → .vscode/components.code-snippets

**Reads (2):** `docs-guide/config/component-registry.json`, `.vscode/components.code-snippets`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/governance/config/generated-artifacts.json`, `.claude/CLAUDE.md`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/content/catalogs/generate-docs-index.js`

**Niche:** catalogs

**Purpose:** Generate produces docs-index.json from v2 frontmatter and docs.json. Dual-mode: --check (enforcer) / --write (generator). Most-called script in the repo.

**Description:** Docs index generator — produces docs-index.json from v2 frontmatter and docs.json. Dual-mode: --check (enforcer) / --write (generator). Most-called script in the repo.

**Scope:** operations/scripts, tools/lib, v2, docs.json, root

**Reads (1):** `workspace/reports/docs-index/missing-frontmatter.md`

**Writes (0):** _(none detected)_

**Callers (13):** `operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js`, `operations/governance/config/repo-governance-surfaces.json`, `operations/governance/config/root-governance.json`, `operations/governance/config/generated-artifacts.json`, `docs-guide/tooling/lpd-cli.mdx` _(+8 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/content/reference/generate-glossary-companions.js`

**Niche:** reference

**Purpose:** Extracts SearchTable itemsList data from glossary MDX pages

**Description:** Companion JSON generator — extracts SearchTable itemsList data from glossary MDX pages

**Scope:** operations/scripts/generators/content/reference

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/audits/content/reference/audit-glossary-gaps.js`, `operations/scripts/dispatch/content/discoverability/dispatch-companions.js`, `operations/governance/config/generated-artifacts.json`, `docs-guide/config/ai-companion-schema.json`, `docs-guide/catalog/scripts-catalog.mdx` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/content/reference/generate-glossary.js`

**Niche:** reference

**Purpose:** Generate produces glossary data file from terminology sources

**Description:** Glossary generator — produces glossary data file from terminology sources

**Scope:** operations/scripts

**Reads (4):** `v1`, `operations/scripts/generators/content/data`, `v2/resources/glossary.mdx`, `v2/resources/livepeer-glossary.mdx`

**Writes (0):** _(none detected)_

**Callers (6):** `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/contributing/community-help.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/data-integrations.mdx`, `docs-guide/decisions/glossary-boundary.md` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/content/catalogs/generate-pages-index.js`

**Niche:** catalogs

**Purpose:** Generates and verifies section-style index.mdx files for v2 docs folders plus root aggregate index

**Description:** Pages index generator — generates and verifies section-style index.mdx files for v2 docs folders plus root aggregate index

**Scope:** operations/scripts, v2

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`, `operations/governance/config/generated-artifacts.json`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/canonical/collation-data/Mintlify/index.md` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/generators/components/library/generate-ui-templates.js`

**Niche:** library

**Purpose:** Generates the UI template catalog and VS Code snippets from canonical template/component sources.

**Description:** Generates the UI template catalog and VS Code snippets from canonical template/component sources.

**Scope:** operations/scripts, docs-guide/catalog, docs-guide/features, snippets/templates, .vscode

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (9):** `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/contributing/community-help.mdx`, `docs-guide/index.mdx`, `docs-guide/catalog/ui-templates.mdx`, `docs-guide/catalog/scripts-catalog.mdx` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## integrator (7)

### `operations/scripts/integrators/content/data/test/contract-address-routes.test.js`

**Niche:** _(missing)_

**Purpose:** _(missing)_

**Scope:** _(missing)_

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**🚩 Auto-flags:**
- lib-module (internal — imported by other scripts, not a standalone pipeline entry)

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/test/contract-verifier.test.js`

**Niche:** _(missing)_

**Purpose:** _(missing)_

**Scope:** _(missing)_

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**🚩 Auto-flags:**
- lib-module (internal — imported by other scripts, not a standalone pipeline entry)

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/maintenance/data-feeds/fetch-config-flags.js`

**Niche:** config-flags

**Purpose:** Fetch go-livepeer CLI flag definitions from GitHub source, parse each flag (name, type, default, description, env-var), emit structured JSX data the v2 config-flags reference page renders via SearchTable

**Description:** Scheduled-weekly integrator. Hits GitHub raw URL for go-livepeer's flag-defining Go source files, parses flag definitions, normalises into a JSX export at snippets/data/config-flags/. Pairs with dispatch-config-flags.js. Required for the v2 config-flags reference page to stay current with go-livepeer releases.

**Scope:** go-livepeer source on GitHub → snippets/data/config-flags/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js`, `docs-guide/features/data-integrations.mdx`, `docs-guide/frameworks/styles-engineering-guide.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/maintenance/contracts/fetch-contract-addresses.js`

**Niche:** contracts

**Purpose:** infrastructure:data-feeds

**Description:** Thin CLI entrypoint for the chain-first contracts pipeline.

**Scope:** .github/scripts, operations/scripts/integrators/content/data/contracts/, snippets/data/contract-addresses/, snippets/composables/pages/canonical/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (19):** `operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js`, `operations/scripts/integrators/content/data/test/fetch-contract-addresses.test.js`, `operations/scripts/integrators/content/data/contracts/constants.js`, `operations/scripts/integrators/content/data/contracts/solidity-parser.js`, `operations/scripts/integrators/content/data/contracts/catalog-config.js` _(+14 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/content/data/test/fetch-contract-addresses.test.js`

**Niche:** _(missing)_

**Purpose:** _(missing)_

**Scope:** _(missing)_

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/data-integrations.mdx`

**🚩 Auto-flags:**
- lib-module (internal — imported by other scripts, not a standalone pipeline entry)

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/maintenance/data-feeds/fetch-exchanges-data.js`

**Niche:** exchanges-data

**Purpose:** Fetch LPT exchange tickers from the CoinGecko API, classify each as CEX or DEX, emit structured JSX data the v2 exchanges reference page renders via SearchTable — note: distinct from fetch-lpt-exchanges.sh which writes MDX directly

**Description:** Scheduled-weekly integrator. Hits CoinGecko's tickers-by-coin endpoint for LPT, classifies each ticker by exchange type (centralised vs decentralised) using a known-exchange config, writes snippets/data/exchanges/exchangesData.jsx. Pairs with dispatch-exchanges-data.js.

**Scope:** CoinGecko API → snippets/data/exchanges/exchangesData.jsx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js`, `docs-guide/features/data-integrations.mdx`, `docs-guide/frameworks/styles-engineering-guide.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/integrators/maintenance/release/update-livepeer-release.js`

**Niche:** release

**Purpose:** Fetches or accepts the latest go-livepeer release tag and writes the canonical release data module.

**Description:** Fetches or accepts the latest go-livepeer release tag and writes the canonical release data module.

**Scope:** .github/workflows, snippets/data/globals

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/maintenance/dispatch-release-version.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/data-integrations.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## remediator (3)

### `operations/scripts/remediators/components/library/repair-ai-discoverability.js`

**Niche:** library

**Purpose:** qa:component-quality

**Description:** Repair AI discoverability compliance: add missing @aiDiscoverability tags to hook-using components, create placeholder companion JSON files.

**Scope:** snippets/components, snippets/data/snapshots

**Reads (2):** `snippets/components`, `snippets/data/snapshots`

**Writes (0):** _(none detected)_

**Callers (1):** `operations/scripts/config/remediation-verify-registry.json`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/components/library/repair-component-metadata.js`

**Niche:** library

**Purpose:** governance:repo-health

**Description:** Auto-repairs derived JSDoc metadata fields from repo state. Safe fields only. Mirrors AUDIT-00 --fix pattern for components.

**Scope:** single-domain

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/validators/components/library/validate-component-creation.js`, `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/catalog/scripts-catalog.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/components/library/repair-component-styles.js`

**Niche:** library

**Purpose:** qa:component-quality

**Description:** Repair JSX component style violations: extract inline styles to named const, move top-level constants inside function body.

**Scope:** snippets/components

**Reads (1):** `snippets/components`

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/brand/dispatch-style-tokens.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## validator (8)

### `operations/scripts/validators/components/library/check-component-css.js`

**Niche:** library

**Purpose:** Validates component files against component governance styling rules.

**Description:** Validates component files against component governance styling rules.

**Scope:** single-domain

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/component-health.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/components/documentation/check-component-docs.js`

**Niche:** documentation

**Purpose:** Validates component JSDoc coverage, prop documentation, docs-entry coverage, and governance metadata.

**Description:** Validates component JSDoc coverage, prop documentation, docs-entry coverage, and governance metadata.

**Scope:** single-domain

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (4):** `operations/governance/config/ownerless-governance-surfaces.json`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/component-health.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/components/library/check-component-health.js`

**Niche:** library

**Purpose:** governance:quality-gate

**Description:** Checks component library health: imports, exports, registry sync, and usage patterns

**Scope:** snippets/components/

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/component-health.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/components/library/check-component-props.js`

**Niche:** component-registry

**Purpose:** Validate v2 MDX usage of Mintlify components — Tab/Accordion icon props, code block metadata, Card CustomCardTitle pattern, inline-style anti-patterns, CustomDivider placement, Mermaid colour governance, import-order convention — so component usage stays consistent across all docs

**Description:** Enforces the prop-governance checks documented as 5.18-5.20, 5.22, 5.26-5.28, 5.34 in the canonical-data deps files. Reads v2/ MDX, applies the prop-pattern rules, emits violations with file:line evidence. JSON or Markdown report. Wired into dispatch-component-registry.js PR detect list.

**Scope:** v2/ MDX (all routable pages, excluding _workspace, x-archived, x-deprecated, locales)

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (1):** `operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/components/library/check-mdx-component-scope.js`

**Niche:** library

**Purpose:** Validates MDX-facing component modules do not depend on private file-scope helper bindings from exported components.

**Description:** Validates MDX-facing component modules do not depend on private file-scope helper bindings from exported components.

**Scope:** operations/scripts/validators/components, operations/tests/un-all.js, operations/tests/un-pr-checks.js, snippets/components, operations/tests/tils

**Reads (1):** `tools/node_modules/@babel/parser`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/config/remediation-verify-registry.json`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/component-health.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/components/library/check-naming-conventions.js`

**Niche:** library

**Purpose:** Validates active component filenames against directory-aware file naming and PascalCase exports under snippets/components.

**Description:** Validates active component filenames against directory-aware file naming and PascalCase exports under snippets/components.

**Scope:** operations/scripts/validators/components, operations/tests/un-all.js, operations/tests/un-pr-checks.js, snippets/components

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js`, `docs-guide/canonical/collation-data/Mintlify/dep-files/workspace/reports/component-infrastructure-state.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/component-health.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/components/library/component-layout-governance.js`

**Niche:** library

**Purpose:** Checks v2 page layouts against approved component contracts

**Description:** Component layout governance validator — checks v2 page layouts against approved component contracts

**Scope:** operations/scripts, v2, tools/config/quality/component-layout-profile.json

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (11):** `operations/scripts/remediators/content/repair/quarantine-manager.js`, `operations/scripts/validators/components/library/check-component-props.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/features/ui-system.mdx`, `docs-guide/policies/component-layout-decisions.mdx` _(+6 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/components/library/validate-component-creation.js`

**Niche:** component-registry

**Purpose:** Gate every new/modified .jsx file in snippets/components/ at pre-commit and PR time — enforces the 7-tag JSDoc, PascalCase name, correct folder placement (must be under a known grouping), self-remediates missing tags where inferable, blocks commit only on non-remediable violations

**Description:** Write-time governance for component creation (layer-2 of D-GOV-08 chain). Reads each staged .jsx under snippets/components/, parses or infers the 7-tag JSDoc (script/type/concern/niche/purpose/description/usage), checks naming + folder convention, applies --fix where unambiguous, --verify re-runs the check after fix. Used by repair-component-metadata.js as the gating step.

**Scope:** snippets/components/*.jsx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `operations/scripts/remediators/components/library/repair-component-metadata.js`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---
