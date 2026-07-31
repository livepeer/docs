# SME Audit: `governance` concern

> 83 scripts | Generated 2026-05-17
> Walk through each script. Set verdict per row. SME notes column free-form.
>
> **Verdict options:** `keep` / `refactor` / `merge` / `archive` / `unknown`

---

## audit (4)

### niche: `repo` (1)

#### `audit-tasks-folders.js`

- **Path:** `operations/scripts/audits/governance/repo/audit-tasks-folders.js`
- **Purpose:** * @description Tasks folder auditor — checks workspace/ structure, normalises report locations, applies recommendations with conflict-safe moves
- **Description:** Tasks folder auditor — checks workspace/ structure, normalises report locations, applies recommendations with conflict-safe moves
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/audits/governance/repo/audit-tasks-folders.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `reports` (1)

#### `generate-v2-folder-governance-cleanup-matrix.js`

- **Path:** `operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js`
- **Purpose:** * @description V2 folder governance cleanup matrix generator — inventories non-publishable and legacy v2 artifacts and emits human-review markdown/json recommendations before any moves are applied.
- **Description:** V2 folder governance cleanup matrix generator — inventories non-publishable and legacy v2 artifacts and emits human-review markdown/json recommendations before any moves are applied.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual
- **Usage:** `node operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js [--report-md <path>] [--report-json <path>] [--as-of <YYYY-MM-DD>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `scripts` (2)

#### `audit-script-categories.js`

- **Path:** `operations/scripts/audits/governance/scripts/audit-script-categories.js`
- **Purpose:** * @description Script auditor — analyses all repo scripts, categorises usage/overlap, generates SCRIPT_AUDIT reports
- **Description:** Script auditor — analyses all repo scripts, categorises usage/overlap, generates SCRIPT_AUDIT reports
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — diagnostic/investigation tool, run on-demand only
- **Usage:** `node operations/scripts/audits/governance/scripts/audit-script-categories.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `script-footprint-and-usage-audit.js`

- **Path:** `operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js`
- **Purpose:** * @description Script footprint auditor — analyses script file sizes, dependencies, and usage patterns across the repo
- **Description:** Script footprint auditor — analyses script file sizes, dependencies, and usage patterns across the repo
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## validator (20)

### niche: `ai` (1)

#### `check-companion-manifest.js`

- **Path:** `operations/scripts/validators/governance/ai/check-companion-manifest.js`
- **Purpose:** * @description check companion manifest
- **Description:** check companion manifest
- **Workflow callers:** `validator-discoverability-check-companions.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/governance/ai/check-companion-manifest.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `compliance` (13)

#### `check-agent-docs-freshness.js`

- **Path:** `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js`
- **Purpose:** * @description * @mode        read-only
- **Description:** * @mode        read-only
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual, ci
- **Usage:** `node operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js [--threshold <days>] [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-governance-markers.js`

- **Path:** `operations/scripts/validators/governance/compliance/check-governance-markers.js`
- **Purpose:** * @description Validates GOVERNANCE.md presence in all required folders and checks link integrity
- **Description:** Validates GOVERNANCE.md presence in all required folders and checks link integrity
- **Workflow callers:** `validator-governance-check-governance-map.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** pr-changed -> all GOVERNANCE.md markers -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/governance/compliance/check-governance-markers.js [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-jsdoc-headers.js`

- **Path:** `operations/scripts/validators/governance/compliance/check-jsdoc-headers.js`
- **Purpose:** * @description Validates that all JS files in governed locations have core JSDoc tags
- **Description:** Validates that all JS files in governed locations have core JSDoc tags
- **Workflow callers:** `validator-governance-check-governance-map.yml`
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** pr-changed -> governed JS files -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/governance/compliance/check-jsdoc-headers.js [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-mintlify-canonical-sync.js`

- **Path:** `operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js`
- **Purpose:** * @description Enforce the Mintlify canonical-sync contract so archived legacy sources stay moved, registered consumers stay updated, and retained-source logs match the registry.
- **Description:** Enforce the Mintlify canonical-sync contract so archived legacy sources stay moved, registered consumers stay updated, and retained-source logs match the registry.
- **Workflow callers:** `validator-copy-check-content-quality-suite.yml`
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual, ci
- **Usage:** `node operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js [--staged] [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-new-file-governance.js`

- **Path:** `operations/scripts/validators/governance/compliance/check-new-file-governance.js`
- **Purpose:** governance:new-file-gate
- **Description:** Validates newly staged files have required governance metadata (JSDoc, frontmatter, workflow headers)
- **Workflow callers:** `validator-governance-check-governance-map.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** pre-commit -> staged new files -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/governance/compliance/check-new-file-governance.js [--all|--staged]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-repo-governance-sync.js`

- **Path:** `operations/scripts/validators/governance/compliance/check-repo-governance-sync.js`
- **Purpose:** * @description Validates the canonical repo-governance registry, generated outputs, and referenced ownerless steady-state paths.
- **Description:** Validates the canonical repo-governance registry, generated outputs, and referenced ownerless steady-state paths.
- **Workflow callers:** `dispatch-governance-post-merge-sync.yml`, `remediator-governance-repair-pipelines.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual, pr-changed -> repo-governance registry -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/governance/compliance/check-repo-governance-sync.js [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-root-governance-sync.js`

- **Path:** `operations/scripts/validators/governance/compliance/check-root-governance-sync.js`
- **Purpose:** * @description Validates that root-governance generated outputs, required documentation references, and public root artifact declarations stay aligned with the canonical manifest.
- **Description:** Validates that root-governance generated outputs, required documentation references, and public root artifact declarations stay aligned with the canonical manifest.
- **Workflow callers:** `dispatch-governance-post-merge-sync.yml`, `remediator-governance-repair-pipelines.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual, ci
- **Usage:** `node operations/scripts/validators/governance/compliance/check-root-governance-sync.js [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-script-locations.js`

- **Path:** `operations/scripts/validators/governance/compliance/check-script-locations.js`
- **Purpose:** * @description Validates all JS files are in governed locations per the script framework
- **Description:** Validates all JS files are in governed locations per the script framework
- **Workflow callers:** `validator-governance-check-governance-map.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** pr-changed -> all .js files -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/governance/compliance/check-script-locations.js [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-workflow-headers.js`

- **Path:** `operations/scripts/validators/governance/compliance/check-workflow-headers.js`
- **Purpose:** * @description Validates that GitHub Actions workflow YAML files have governance comment headers
- **Description:** Validates that GitHub Actions workflow YAML files have governance comment headers
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** pr-changed -> .github/workflows/*.yml -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/governance/compliance/check-workflow-headers.js [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `review-governance-repair-checklist.js`

- **Path:** `operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js`
- **Purpose:** * @description Generates a review checklist for dry-run governance repair proposals that require human approval before fix mode is applied.
- **Description:** Generates a review checklist for dry-run governance repair proposals that require human approval before fix mode is applied.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js [--output <dir>] [--json] [--md]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `validate-ai-tools-registry.js`

- **Path:** `operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js`
- **Purpose:** * @description Validate the AI-tools registry contract and coverage so ownerless governance and AI subsystem inventory stay aligned.
- **Description:** Validate the AI-tools registry contract and coverage so ownerless governance and AI subsystem inventory stay aligned.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual -- bounded validator CLI
- **Usage:** `node operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js [--check] [--coverage] [--lanes] [--write-report]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `validate-codex-task-contract.js`

- **Path:** `operations/scripts/validators/governance/compliance/validate-codex-task-contract.js`
- **Purpose:** * @description Codex task contract enforcer — validates branch naming, task files, PR body, and issue state for codex branches
- **Description:** Codex task contract enforcer — validates branch naming, task files, PR body, and issue state for codex branches
- **Workflow callers:** `validator-governance-check-codex-compliance.yml`
- **Capabilities:** `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** commit), P2 (push), P3 (PR, Track B)
- **Usage:** `node operations/scripts/validators/governance/compliance/validate-codex-task-contract.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `verify-pay-orc-gate-finalize.sh`

- **Path:** `operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh`
- **Purpose:** # @description Payment/orchestrator gate verifier — checks payment and orchestrator documentation gate conditions
- **Description:** Payment/orchestrator gate verifier — checks payment and orchestrator documentation gate conditions
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `bash operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `pr` (5)

#### `audit-script-inventory.js`

- **Path:** `operations/scripts/validators/governance/pr/audit-script-inventory.js`
- **Purpose:** * @description Audit the governed script corpus and regenerate the canonical script inventory outputs from current headers and filesystem state.
- **Description:** Audit the governed script corpus and regenerate the canonical script inventory outputs from current headers and filesystem state.
- **Workflow callers:** script-only: 2 caller(s)
- **Capabilities:** `--dry-run` `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** commit), manual
- **Usage:** `node operations/scripts/validators/governance/pr/audit-script-inventory.js [--fix] [--dry-run] [--staged-only|--staged] [--files <path[,path...]>] [--quiet] [--json] [--md] [--output <dir>] [--verbose]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-component-immutability.js`

- **Path:** `operations/scripts/validators/governance/pr/check-component-immutability.js`
- **Purpose:** * @description Flags modifications to existing component files in PR context. New files allowed. Modifications require approval label.
- **Description:** Flags modifications to existing component files in PR context. New files allowed. Modifications require approval label.
- **Workflow callers:** `validator-copy-check-content-quality-suite.yml`
- **Capabilities:** `--verify`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/governance/pr/check-component-immutability.js --base-ref main`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-governance-approvals.js`

- **Path:** `operations/scripts/validators/governance/pr/check-governance-approvals.js`
- **Purpose:** * @description Validate governance-sensitive PR changes against the canonical approval policy, required labels, and PR-body evidence.
- **Description:** Validate governance-sensitive PR changes against the canonical approval policy, required labels, and PR-body evidence.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** ci, pr-changed -> governance approval policy -> exit-code, stdout:violations
- **Usage:** `node operations/scripts/validators/governance/pr/check-governance-approvals.js [--base-ref <branch>] [--files <path[,path...]>] [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-pr-template.js`

- **Path:** `operations/scripts/validators/governance/pr/check-pr-template.js`
- **Purpose:** * @description Enforces that PR descriptions include required change and rationale sections before merge
- **Description:** Enforces that PR descriptions include required change and rationale sections before merge
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** ci
- **Usage:** `PR_BODY="..." node operations/scripts/enforcers/pr/check-pr-template.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-workflow-governance.js`

- **Path:** `operations/scripts/validators/governance/pr/check-workflow-governance.js`
- **Purpose:** Validates all workflow YAML files have required governance headers and docs pages
- **Description:** Checks every .github/workflows/*.yml for: (1) governance comment headers
- **Workflow callers:** `validator-governance-check-workflow-governance.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/governance/pr/check-workflow-governance.js [--check|--json|--fix-audit]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `repo` (1)

#### `validate-lpd-paths.js`

- **Path:** `operations/scripts/validators/governance/repo/validate-lpd-paths.js`
- **Purpose:** * @description Validates that every script path referenced in `lpd` exists on disk. Parses the lpd bash CLI for node and script_path invocations and checks each file against the filesystem. Exits non-zero if any path is missing.
- **Description:** Validates that every script path referenced in `lpd` exists on disk. Parses the lpd bash CLI for node and script_path invocations and checks each file against the filesystem. Exits non-zero if any path is missing.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual, ci
- **Usage:** `node operations/scripts/validators/governance/repo/validate-lpd-paths.js [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## generator (14)

### niche: `* @purpose` (1)

#### `generate-governance-map.js`

- **Path:** `operations/scripts/generators/governance/generate-governance-map.js`
- **Purpose:** * @description Reads GOVERNANCE.md markers from every root folder and produces a governance map report
- **Description:** Reads GOVERNANCE.md markers from every root folder and produces a governance map report
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual -> GOVERNANCE.md markers, docs-guide/frameworks/*.mdx -> GOVERNANCE_MAP_LATEST.json, repo-governance-map.mdx
- **Usage:** `node operations/scripts/generators/governance/generate-governance-map.js [--write] [--check]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `catalogs` (8)

#### `generate-ai-skills-indexes.js`

- **Path:** `operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js`
- **Purpose:** * @description * @mode        read-only
- **Description:** * @mode        read-only
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, ci
- **Usage:** `node operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js [--check|--write]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-ai-tools-registry-artifacts.js`

- **Path:** `operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js`
- **Purpose:** * @description Keep ai-tools/registry/ai-tools-registry.json aligned with live skill/template/export files so ownerless governance coverage stays complete.
- **Description:** Keep ai-tools/registry/ai-tools-registry.json aligned with live skill/template/export files so ownerless governance coverage stays complete.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual -- bounded registry sync
- **Usage:** `node operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js [--write|--check]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-ai-tools-visual-library.js`

- **Path:** `operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js`
- **Purpose:** * @description Generates the canonical AI-tools visual library for GitHub workflows and dispatcher actions, plus staged audit outputs.
- **Description:** Generates the canonical AI-tools visual library for GitHub workflows and dispatcher actions, plus staged audit outputs.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual
- **Usage:** `node operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js [--check|--write]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-docs-guide-components-index.js`

- **Path:** `operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js`
- **Purpose:** * @description Generates components-catalog.mdx in docs-guide/catalog/ from component-registry.json and component-usage-map.json.
- **Description:** Generates components-catalog.mdx in docs-guide/catalog/ from component-registry.json and component-usage-map.json.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** commit — auto-regenerated when components staged)
- **Usage:** `node operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js [--fix|--write|--check]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-docs-guide-indexes.js`

- **Path:** `operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js`
- **Purpose:** * @description Generates docs-guide workflow/template catalogs and optionally verifies freshness
- **Description:** Generates docs-guide workflow/template catalogs and optionally verifies freshness
- **Workflow callers:** `dispatch-maintenance-check-catalogs.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** CI: generate-docs-guide-catalogs.yml (push→main), check-docs-guide-catalogs.yml (PR gate)
- **Usage:** `node operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-docs-guide-pages-index.js`

- **Path:** `operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js`
- **Purpose:** * @description Generates the docs-guide pages catalog
- **Description:** Generates the docs-guide pages catalog
- **Workflow callers:** `dispatch-maintenance-check-catalogs.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** CI: generate-docs-guide-catalogs.yml (push→main), check-docs-guide-catalogs.yml (PR gate)
- **Usage:** `node operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-script-registry.js`

- **Path:** `operations/scripts/generators/governance/catalogs/generate-script-registry.js`
- **Purpose:** * @description Generate the governed script registry from script headers so classification, catalogs, and script-docs enforcement share one derived source of truth.
- **Description:** Generate the governed script registry from script headers so classification, catalogs, and script-docs enforcement share one derived source of truth.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** generate
- **Pipeline:** manual
- **Usage:** `node operations/scripts/generators/governance/catalogs/generate-script-registry.js [--dry-run]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-snippets-registry.js`

- **Path:** `operations/scripts/generators/governance/catalogs/generate-snippets-registry.js`
- **Purpose:** * @description Generates the snippets root registry from the live snippets filesystem plus structured folder metadata embedded in snippets/guide.mdx.
- **Description:** Generates the snippets root registry from the live snippets filesystem plus structured folder metadata embedded in snippets/guide.mdx.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, P3
- **Usage:** `node operations/scripts/generators/governance/catalogs/generate-snippets-registry.js [--write|--check]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `map` (1)

#### `generate-governance-map.js`

- **Path:** `operations/scripts/generators/governance/map/generate-governance-map.js`
- **Purpose:** * @description Walks all GOVERNANCE.md markers, validates links, detects staleness, and generates the governance map
- **Description:** Walks all GOVERNANCE.md markers, validates links, detects staleness, and generates the governance map
- **Workflow callers:** `validator-governance-check-governance-map.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, P4 -> GOVERNANCE.md markers, docs-guide/frameworks/*.mdx -> GOVERNANCE_MAP_LATEST.json
- **Usage:** `node operations/scripts/generators/governance/map/generate-governance-map.js [--write|--check|--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `reports` (2)

#### `generate-ai-tools-inventory.js`

- **Path:** `operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js`
- **Purpose:** * @description Generates the AI tools inventory report from the registry. Split from validate-ai-tools-registry.js.
- **Description:** Generates the AI tools inventory report from the registry. Split from validate-ai-tools-registry.js.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual
- **Usage:** `node operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js [--output <path>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-repo-governance-status.js`

- **Path:** `operations/scripts/generators/governance/reports/generate-repo-governance-status.js`
- **Purpose:** * @description Generates the top-level repo-governance map and status reports from the canonical steady-state registry.
- **Description:** Generates the top-level repo-governance map and status reports from the canonical steady-state registry.
- **Workflow callers:** `dispatch-governance-post-merge-sync.yml`, `remediator-governance-repair-pipelines.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, pr-changed -> repo-governance registry -> governance map and status reports
- **Usage:** `node operations/scripts/generators/governance/reports/generate-repo-governance-status.js [--write|--check]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `root` (1)

#### `generate-root-governance-artifacts.js`

- **Path:** `operations/scripts/generators/governance/root/generate-root-governance-artifacts.js`
- **Purpose:** * @description Generates root-governance projections from the canonical manifest, including .allowlist, the generated root map, and sync reports.
- **Description:** Generates root-governance projections from the canonical manifest, including .allowlist, the generated root map, and sync reports.
- **Workflow callers:** `dispatch-governance-post-merge-sync.yml`, `remediator-governance-repair-pipelines.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, P3
- **Usage:** `node operations/scripts/generators/governance/root/generate-root-governance-artifacts.js [--write|--check]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `scaffold` (1)

#### `new-script.js`

- **Path:** `operations/scripts/generators/governance/scaffold/new-script.js`
- **Purpose:** tooling:dev-tools',
- **Description:** ${params.summary}`,
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual — interactive developer tool, not suited for automated pipelines',
- **Usage:** `${cmd} [flags]`,`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## remediator (9)

### niche: `classification` (4)

#### `add-framework-headers.js`

- **Path:** `operations/scripts/remediators/content/classification/add-framework-headers.js`
- **Purpose:** * @description Inserts or extends framework headers on all repo scripts from classification data.
- **Description:** Inserts or extends framework headers on all repo scripts from classification data.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual — interactive developer tool, not suited for automated pipelines
- **Usage:** `node operations/scripts/remediators/content/classification/add-framework-headers.js --data script-classifications.json --dry-run`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `add-pagetype-mechanical.js`

- **Path:** `operations/scripts/remediators/content/classification/add-pagetype-mechanical.js`
- **Purpose:** * @description Mechanically assigns pageType frontmatter to eligible v2 MDX pages.
- **Description:** Mechanically assigns pageType frontmatter to eligible v2 MDX pages.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual — deterministic metadata rollout utility for v2 docs
- **Usage:** `node operations/scripts/remediators/content/classification/add-pagetype-mechanical.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `assign-purpose-metadata.js`

- **Path:** `operations/scripts/remediators/content/classification/assign-purpose-metadata.js`
- **Purpose:** * @description Purpose metadata assigner — fills purpose and audience frontmatter for routable v2 pages
- **Description:** Purpose metadata assigner — fills purpose and audience frontmatter for routable v2 pages
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--files`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual — interactive developer tool, not suited for automated pipelines
- **Usage:** `node operations/scripts/remediators/content/classification/assign-purpose-metadata.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `normalise-frontmatter-keys.js`

- **Path:** `operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js`
- **Purpose:** qa:content-quality
- **Description:** Normalises capitalised frontmatter YAML keys to lowercase canonical form across v2 MDX pages.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-16
- **Mode:** repair
- **Pipeline:** manual — batch remediation utility, run with --dry-run first
- **Usage:** `node operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js [--dry-run] [--write]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `compliance` (2)

#### `add-workflow-governance-headers.js`

- **Path:** `operations/scripts/remediators/governance/compliance/add-workflow-governance-headers.js`
- **Purpose:** * @description Adds governance comment headers to GitHub Actions workflow YAML files based on their governed filename pattern
- **Description:** Adds governance comment headers to GitHub Actions workflow YAML files based on their governed filename pattern
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual -> .github/workflows/*.yml -> edited workflow files
- **Usage:** `node operations/scripts/remediators/governance/compliance/add-workflow-governance-headers.js [--dry-run|--write]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-governance-artifacts.js`

- **Path:** `operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js`
- **Purpose:** * @description Regenerates governance map, updates lastVerified dates on verified frameworks, and reports unfixable issues
- **Description:** Regenerates governance map, updates lastVerified dates on verified frameworks, and reports unfixable issues
- **Workflow callers:** `validator-governance-check-governance-map.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual, post-merge -> governance markers, frameworks -> GOVERNANCE_MAP_LATEST.json, framework frontmatter
- **Usage:** `node operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js [--dry-run|--write]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `scaffold` (2)

#### `fix-usage-paths.js`

- **Path:** `operations/scripts/remediators/governance/scaffold/fix-usage-paths.js`
- **Purpose:** * @description fix usage paths
- **Description:** fix usage paths
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `*/`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `update-jsdoc-headers.js`

- **Path:** `operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js`
- **Purpose:** ${purpose}`,
- **Description:** ${desc}`,
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** ${pipeline}`,
- **Usage:** `${usage}`,`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `scripts` (1)

#### `repair-script-inventory.js`

- **Path:** `operations/scripts/remediators/governance/scripts/repair-script-inventory.js`
- **Purpose:** * @description Repairs script headers and classification data. Thin wrapper that runs audit-script-inventory with --fix. Split from audit-script-inventory.js.
- **Description:** Repairs script headers and classification data. Thin wrapper that runs audit-script-inventory with --fix. Split from audit-script-inventory.js.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/governance/scripts/repair-script-inventory.js [--dry-run] [--staged-only] [--files <path,...>] [--json] [--md] [--output <dir>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## integrator (2)

### niche: `* @purpose` (1)

#### `cleanup-local-dev-sessions.js`

- **Path:** `operations/scripts/integrators/governance/cleanup-local-dev-sessions.js`
- **Purpose:** * @description Local dev session cleanup — preserves Mint on port 3333 and terminates stale Playwright plus non-3333 Mint session trees
- **Description:** Local dev session cleanup — preserves Mint on port 3333 and terminates stale Playwright plus non-3333 Mint session trees
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual — local developer automation, with optional user cron installation
- **Usage:** `node operations/scripts/integrators/governance/cleanup-local-dev-sessions.js [--apply] [--install-cron] [--remove-cron] [--keep-port 3333]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `pipelines` (1)

#### `publish-v2-internal-reports.js`

- **Path:** `operations/scripts/integrators/governance/pipelines/publish-v2-internal-reports.js`
- **Purpose:** * @description Report publisher — publishes v2 internal audit reports to configured output locations
- **Description:** Report publisher — publishes v2 internal audit reports to configured output locations
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/integrators/governance/pipelines/publish-v2-internal-reports.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## interface (8)

### niche: `* @purpose     Auto-assigns Copilot reviewer to Codex PRs targeting docs-v2` (1)

#### `assign-reviewers.js`

- **Path:** `operations/scripts/interfaces/governance/assign-reviewers.js`
- **Purpose:** Auto-assigns Copilot reviewer to Codex PRs targeting docs-v2
- **Description:** Three-phase reviewer assignment: (1) gate checks if PR is eligible
- **Workflow callers:** `interface-governance-assign-reviewers.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** interface
- **Pipeline:** manual
- **Usage:** `Called by github-script in workflow — not invoked directly`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `* @purpose     Builds and maintains a rolling docs-v2 issue governance index` (1)

#### `issue-indexer.js`

- **Path:** `operations/scripts/interfaces/governance/issue-indexer.js`
- **Purpose:** Builds and maintains a rolling docs-v2 issue governance index
- **Description:** Searches all docs-v2 labelled issues, sorts by classification/priority,
- **Workflow callers:** `interface-governance-index-issues.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** interface
- **Pipeline:** manual
- **Usage:** `Called by github-script in workflow — not invoked directly`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `* @purpose     Closes issues linked to a merged docs-v2 PR via closing keywords` (1)

#### `close-linked-issues.js`

- **Path:** `operations/scripts/interfaces/governance/close-linked-issues.js`
- **Purpose:** Closes issues linked to a merged docs-v2 PR via closing keywords
- **Description:** Parses PR body for closing keywords (fixes/closes/resolves #N),
- **Workflow callers:** `interface-governance-close-linked-issues.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** interface
- **Pipeline:** manual
- **Usage:** `Called by github-script in workflow — not invoked directly`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `* @purpose     Creates GitHub issues from Discord community reports via repository_dispatch` (1)

#### `discord-issue-intake.js`

- **Path:** `operations/scripts/interfaces/governance/discord-issue-intake.js`
- **Purpose:** Creates GitHub issues from Discord community reports via repository_dispatch
- **Description:** Validates repository_dispatch payload from Discord bot (n8n workflow),
- **Workflow callers:** `interface-governance-intake-discord-issues.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** interface
- **Pipeline:** manual
- **Usage:** `Called by github-script in workflow — not invoked directly`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `* @purpose     Notifies linked issues when a PR is opened against docs-v2` (1)

#### `notify-linked-issues.js`

- **Path:** `operations/scripts/interfaces/governance/notify-linked-issues.js`
- **Purpose:** Notifies linked issues when a PR is opened against docs-v2
- **Description:** Parses PR body for closing keywords and Task: #N patterns,
- **Workflow callers:** `interface-governance-close-linked-issues.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** interface
- **Pipeline:** manual
- **Usage:** `Called by github-script in workflow — not invoked directly`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `* @purpose     Parses issue form sections and applies structured labels based on template type` (1)

#### `issue-auto-label.js`

- **Path:** `operations/scripts/interfaces/governance/issue-auto-label.js`
- **Purpose:** Parses issue form sections and applies structured labels based on template type
- **Description:** Detects issue template type (docs_page_issue, bug_report, feature_request, etc.),
- **Workflow callers:** `interface-governance-label-issues.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** interface
- **Pipeline:** manual
- **Usage:** `Called by github-script in workflow — not invoked directly`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `issue-lifecycle` (2)

#### `load-labels.js`

- **Path:** `operations/scripts/interfaces/governance/lib/load-labels.js`
- **Purpose:** Loads the canonical label taxonomy from .github/config/labels.json
- **Description:** Returns the labels object and managed_prefixes from the central config.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** integrate
- **Pipeline:** _(unset)_
- **Usage:** `const { labels, managedPrefixes } = require('./lib/load-labels.js');`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `rolling-issue.js`

- **Path:** `operations/scripts/interfaces/governance/lib/rolling-issue.js`
- **Purpose:** Shared helper for rolling issue create/update/close pattern
- **Description:** Provides ensureLabels(), upsert(), and close() for the rolling issue
- **Workflow callers:** `audit-health-scan-data-freshness.yml`, `audit-health-scan-external-links.yml`, `audit-health-scan-page-integrity.yml`, `remediator-brand-repair-en-gb-style.yml`, `validator-governance-check-governance-map.yml`, `validator-health-check-openapi-reference.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** interface
- **Pipeline:** _(unset)_
- **Usage:** `const ri = require('./lib/rolling-issue.js'); await ri.upsert({ github, context, label, title, body });`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## dispatch (26)

### niche: `# @purpose` (1)

#### `headless-batch.sh`

- **Path:** `operations/scripts/dispatch/governance/headless-batch.sh`
- **Purpose:** # @description Executes a prompt against files non-interactively with restricted tools. Use for bulk quality checks, changelog regeneration, stale reference scans, and other well-defined batch tasks.
- **Description:** Executes a prompt against files non-interactively with restricted tools. Use for bulk quality checks, changelog regeneration, stale reference scans, and other well-defined batch tasks.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** CLI → claude headless → restricted tools → output file
- **Usage:** `./operations/scripts/dispatch/governance/headless-batch.sh --prompt "..." --tools "Read,Grep,Glob" --output report.md`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `* @purpose` (21)

#### `blast-radius-scanner.js`

- **Path:** `operations/scripts/dispatch/governance/blast-radius-scanner.js`
- **Purpose:** * @description PostToolUse hook for Edit/Write. When a file in snippets/components/,
- **Description:** PostToolUse hook for Edit/Write. When a file in snippets/components/,
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook → reads stdin → path check → grep consumers → emit list
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `completion-gate.js`

- **Path:** `operations/scripts/dispatch/governance/completion-gate.js`
- **Purpose:** * @description PreToolUse hook for Write/Edit. Detects writes to session-log.txt,
- **Description:** PreToolUse hook for Write/Edit. Detects writes to session-log.txt,
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PreToolUse hook → parse stdin → check completion artifact → read verify/loop state → allow or block
- **Usage:** `Called automatically by Claude Code PreToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `edit-loop-guard.js`

- **Path:** `operations/scripts/dispatch/governance/edit-loop-guard.js`
- **Purpose:** * @description PostToolUse hook for Edit/Write. Tracks per-file edit counts within a session.
- **Description:** PostToolUse hook for Edit/Write. Tracks per-file edit counts within a session.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook → parse stdin → track per-file edits → warn at 3 → flag block at 5
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `friction-logger.js`

- **Path:** `operations/scripts/dispatch/governance/friction-logger.js`
- **Purpose:** * @description UserPromptSubmit hook. Scans user messages for frustration indicators
- **Description:** UserPromptSubmit hook. Scans user messages for frustration indicators
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** UserPromptSubmit hook → reads stdin → pattern match → append to friction log
- **Usage:** `Called automatically by Claude Code UserPromptSubmit hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `grep-loop-guard.js`

- **Path:** `operations/scripts/dispatch/governance/grep-loop-guard.js`
- **Purpose:** * @description Tracks consecutive Grep calls that return no results. At 3 in a row,
- **Description:** Tracks consecutive Grep calls that return no results. At 3 in a row,
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook → reads stdin tool result → tracks empty Greps → warns at 3
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `mdx-constraints-injector.js`

- **Path:** `operations/scripts/dispatch/governance/mdx-constraints-injector.js`
- **Purpose:** * @description UserPromptSubmit hook. Keyword-matches the user message for MDX/component/page
- **Description:** UserPromptSubmit hook. Keyword-matches the user message for MDX/component/page
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** UserPromptSubmit hook → reads stdin user message → keyword match → inject constraints
- **Usage:** `Called automatically by Claude Code UserPromptSubmit hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `mdx-frontmatter-sanitise.js`

- **Path:** `operations/scripts/dispatch/governance/mdx-frontmatter-sanitise.js`
- **Purpose:** * @description PostToolUse hook for Edit/Write on ANY .mdx file (not just v2/).
- **Description:** PostToolUse hook for Edit/Write on ANY .mdx file (not just v2/).
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-27
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook → parse frontmatter → detect errors → auto-fix → rewrite
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `mdx-render-gate.js`

- **Path:** `operations/scripts/dispatch/governance/mdx-render-gate.js`
- **Purpose:** * @description PreToolUse hook for Write/Edit. Reads the verification state written by
- **Description:** PreToolUse hook for Write/Edit. Reads the verification state written by
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PreToolUse hook → read state → allow or block
- **Usage:** `Called automatically by Claude Code PreToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `mdx-render-verify.js`

- **Path:** `operations/scripts/dispatch/governance/mdx-render-verify.js`
- **Purpose:** * @description PostToolUse hook for Edit/Write on v2 .mdx files. Launches Puppeteer,
- **Description:** PostToolUse hook for Edit/Write on v2 .mdx files. Launches Puppeteer,
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook → parse stdin → check if v2 MDX → ensure server → Puppeteer → compare baseline → write state
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `mdx-validate-hook.js`

- **Path:** `operations/scripts/dispatch/governance/mdx-validate-hook.js`
- **Purpose:** * @description PostToolUse hook for Edit/Write on .mdx files. Uses the shared
- **Description:** PostToolUse hook for Edit/Write on .mdx files. Uses the shared
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook → reads stdin → checks if .mdx → hits server-manager → reports
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `message-backup.js`

- **Path:** `operations/scripts/dispatch/governance/message-backup.js`
- **Purpose:** * @description UserPromptSubmit hook. If a message is longer than 200 chars, saves it to
- **Description:** UserPromptSubmit hook. If a message is longer than 200 chars, saves it to
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** UserPromptSubmit hook → reads stdin → saves long messages → exits
- **Usage:** `Called automatically by Claude Code UserPromptSubmit hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `move-detect-hook.js`

- **Path:** `operations/scripts/dispatch/governance/move-detect-hook.js`
- **Purpose:** * @description PostToolUse hook on Bash. Detects mv/git mv commands targeting v2/ paths,
- **Description:** PostToolUse hook on Bash. Detects mv/git mv commands targeting v2/ paths,
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook (Bash) -> parse command -> store moves -> dry-run -> systemMessage
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `phase-gate-hook.js`

- **Path:** `operations/scripts/dispatch/governance/phase-gate-hook.js`
- **Purpose:** * @description PostToolUse hook for Edit/Write. Reads phase-gate.jsonl and emits unverified
- **Description:** PostToolUse hook for Edit/Write. Reads phase-gate.jsonl and emits unverified
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook → reads phase-gate.jsonl → emits unverified checkpoints
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `post-tool-verify.js`

- **Path:** `operations/scripts/dispatch/governance/post-tool-verify.js`
- **Purpose:** * @description Tracks consecutive failures for circuit breaker. Fires after tool use failures.
- **Description:** Tracks consecutive failures for circuit breaker. Fires after tool use failures.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUseFailure hook → reads stdin → tracks failures → triggers circuit breaker at 3
- **Usage:** `Called automatically by Claude Code PostToolUseFailure hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `pre-compact-checkpoint.js`

- **Path:** `operations/scripts/dispatch/governance/pre-compact-checkpoint.js`
- **Purpose:** * @description Fires before Claude Code compacts context in long sessions. Reads the
- **Description:** Fires before Claude Code compacts context in long sessions. Reads the
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PreCompact hook → reads critical files → builds state summary → injects via systemMessage
- **Usage:** `Called automatically by Claude Code PreCompact hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `pre-tool-guard.js`

- **Path:** `operations/scripts/dispatch/governance/pre-tool-guard.js`
- **Purpose:** * @description Mechanically enforces co-work rules before tool execution. Blocks destructive git, public posts, and unconfirmed writes.
- **Description:** Mechanically enforces co-work rules before tool execution. Blocks destructive git, public posts, and unconfirmed writes.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-27
- **Mode:** dispatch
- **Pipeline:** PreToolUse hook → reads stdin tool input → decision (allow/block/warn)
- **Usage:** `Called automatically by Claude Code PreToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `read-logger.js`

- **Path:** `operations/scripts/dispatch/governance/read-logger.js`
- **Purpose:** * @description PostToolUse hook on Read. Logs file paths to a session-scoped temp file.
- **Description:** PostToolUse hook on Read. Logs file paths to a session-scoped temp file.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook (Read) → reads stdin → appends file path to /tmp/claude-reads-{session}
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `scope-checkpoint.js`

- **Path:** `operations/scripts/dispatch/governance/scope-checkpoint.js`
- **Purpose:** * @description PostToolUse hook for Edit/Write. Tracks total edit count per session.
- **Description:** PostToolUse hook for Edit/Write. Tracks total edit count per session.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PostToolUse hook → parse stdin → track edit count → inject scope check every 8 edits
- **Usage:** `Called automatically by Claude Code PostToolUse hook. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `server-lifecycle.js`

- **Path:** `operations/scripts/dispatch/governance/server-lifecycle.js`
- **Purpose:** * @description SessionStart hook + CLI tool. Auto-starts the Mintlify dev server via
- **Description:** SessionStart hook + CLI tool. Auto-starts the Mintlify dev server via
- **Workflow callers:** script-only: 3 caller(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** SessionStart hook → ensure server → write state | CLI → health|restart
- **Usage:** `node server-lifecycle.js [health|restart [scope-prefix]]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `session-register.js`

- **Path:** `operations/scripts/dispatch/governance/session-register.js`
- **Purpose:** * @description SessionStart hook that registers this session in a shared registry file.
- **Description:** SessionStart hook that registers this session in a shared registry file.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** SessionStart hook / PostToolUse hook → writes to /tmp/claude-session-registry
- **Usage:** `Called automatically by Claude Code hooks. Not invoked directly.`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `session-state.js`

- **Path:** `operations/scripts/dispatch/governance/session-state.js`
- **Purpose:** * @description Reads ALL active plans and live project state. Run at session start.
- **Description:** Reads ALL active plans and live project state. Run at session start.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual
- **Usage:** `node operations/scripts/dispatch/governance/session-state.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `* @purpose     Orchestrates post-remediation verification by running paired validators` (1)

#### `post-remediation-verify.js`

- **Path:** `operations/scripts/dispatch/governance/post-remediation-verify.js`
- **Purpose:** Orchestrates post-remediation verification by running paired validators
- **Description:** Looks up validators for a given remediator from the registry, runs them
- **Workflow callers:** `remediator-brand-repair-en-gb-style.yml`, `remediator-discoverability-repair-seo-metadata.yml`
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual
- **Usage:** `node operations/scripts/dispatch/governance/post-remediation-verify.js --remediator <path> --files <a,b,c> [--revert-on-fail] [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `pipelines` (2)

#### `governance-pipeline.js`

- **Path:** `operations/scripts/dispatch/governance/pipelines/governance-pipeline.js`
- **Purpose:** * @description Run the bounded governance repair pipeline and regenerate the active repo-ops governance reports.
- **Description:** Run the bounded governance repair pipeline and regenerate the active repo-ops governance reports.
- **Workflow callers:** `dispatch-governance-post-merge-sync.yml`, `remediator-governance-repair-pipelines.yml`
- **Capabilities:** `--dry-run` `--files`
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual, P6, manual, manual
- **Usage:** `node operations/scripts/dispatch/governance/pipelines/governance-pipeline.js [--dry-run] [--auto-commit] [--report-only] [--strict] [--staged|--files <path[,path...]>|--full]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `sync-generated-files.js`

- **Path:** `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`
- **Purpose:** * @description Dispatches generator scripts to sync generated catalog/index files, then validates banners.
- **Description:** Dispatches generator scripts to sync generated catalog/index files, then validates banners.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual | pre-commit --staged
- **Usage:** `node operations/scripts/dispatch/governance/pipelines/sync-generated-files.js --write | --check [--staged]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `repo` (1)

#### `repo-audit-orchestrator.js`

- **Path:** `operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js`
- **Purpose:** * @description Repo audit orchestrator — dispatches all static analysis validators in sequence. Supports --mode (static/full), --scope (full/changed), --quarantine, --agent-pack.
- **Description:** Repo audit orchestrator — dispatches all static analysis validators in sequence. Supports --mode (static/full), --scope (full/changed), --quarantine, --agent-pack.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual
- **Usage:** `node operations/scripts/audits/governance/repo/repo-audit-orchestrator.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---


## Orphan summary (45)

Scripts with no workflow caller and no other script caller. Candidates for archive.

- `operations/scripts/audits/governance/repo/audit-tasks-folders.js` — * @description Tasks folder auditor — checks workspace/ structure, normalises report locations, applies recommendations with conflict-safe moves
- `operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js` — * @description V2 folder governance cleanup matrix generator — inventories non-publishable and legacy v2 artifacts and emits human-review markdown/json recommendations before any moves are applied.
- `operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js` — * @description Script footprint auditor — analyses script file sizes, dependencies, and usage patterns across the repo
- `operations/scripts/dispatch/governance/blast-radius-scanner.js` — * @description PostToolUse hook for Edit/Write. When a file in snippets/components/,
- `operations/scripts/dispatch/governance/completion-gate.js` — * @description PreToolUse hook for Write/Edit. Detects writes to session-log.txt,
- `operations/scripts/dispatch/governance/edit-loop-guard.js` — * @description PostToolUse hook for Edit/Write. Tracks per-file edit counts within a session.
- `operations/scripts/dispatch/governance/friction-logger.js` — * @description UserPromptSubmit hook. Scans user messages for frustration indicators
- `operations/scripts/dispatch/governance/grep-loop-guard.js` — * @description Tracks consecutive Grep calls that return no results. At 3 in a row,
- `operations/scripts/dispatch/governance/headless-batch.sh` — # @description Executes a prompt against files non-interactively with restricted tools. Use for bulk quality checks, changelog regeneration, stale reference scans, and other well-defined batch tasks.
- `operations/scripts/dispatch/governance/mdx-constraints-injector.js` — * @description UserPromptSubmit hook. Keyword-matches the user message for MDX/component/page
- `operations/scripts/dispatch/governance/mdx-render-gate.js` — * @description PreToolUse hook for Write/Edit. Reads the verification state written by
- `operations/scripts/dispatch/governance/mdx-render-verify.js` — * @description PostToolUse hook for Edit/Write on v2 .mdx files. Launches Puppeteer,
- `operations/scripts/dispatch/governance/mdx-validate-hook.js` — * @description PostToolUse hook for Edit/Write on .mdx files. Uses the shared
- `operations/scripts/dispatch/governance/message-backup.js` — * @description UserPromptSubmit hook. If a message is longer than 200 chars, saves it to
- `operations/scripts/dispatch/governance/move-detect-hook.js` — * @description PostToolUse hook on Bash. Detects mv/git mv commands targeting v2/ paths,
- `operations/scripts/dispatch/governance/phase-gate-hook.js` — * @description PostToolUse hook for Edit/Write. Reads phase-gate.jsonl and emits unverified
- `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js` — * @description Dispatches generator scripts to sync generated catalog/index files, then validates banners.
- `operations/scripts/dispatch/governance/post-tool-verify.js` — * @description Tracks consecutive failures for circuit breaker. Fires after tool use failures.
- `operations/scripts/dispatch/governance/pre-compact-checkpoint.js` — * @description Fires before Claude Code compacts context in long sessions. Reads the
- `operations/scripts/dispatch/governance/pre-tool-guard.js` — * @description Mechanically enforces co-work rules before tool execution. Blocks destructive git, public posts, and unconfirmed writes.
- `operations/scripts/dispatch/governance/read-logger.js` — * @description PostToolUse hook on Read. Logs file paths to a session-scoped temp file.
- `operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js` — * @description Repo audit orchestrator — dispatches all static analysis validators in sequence. Supports --mode (static/full), --scope (full/changed), --quarantine, --agent-pack.
- `operations/scripts/dispatch/governance/scope-checkpoint.js` — * @description PostToolUse hook for Edit/Write. Tracks total edit count per session.
- `operations/scripts/dispatch/governance/session-register.js` — * @description SessionStart hook that registers this session in a shared registry file.
- `operations/scripts/dispatch/governance/session-state.js` — * @description Reads ALL active plans and live project state. Run at session start.
- `operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js` — * @description * @mode        read-only
- `operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js` — * @description Keep ai-tools/registry/ai-tools-registry.json aligned with live skill/template/export files so ownerless governance coverage stays complete.
- `operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js` — * @description Generates the canonical AI-tools visual library for GitHub workflows and dispatcher actions, plus staged audit outputs.
- `operations/scripts/generators/governance/catalogs/generate-script-registry.js` — * @description Generate the governed script registry from script headers so classification, catalogs, and script-docs enforcement share one derived source of truth.
- `operations/scripts/generators/governance/catalogs/generate-snippets-registry.js` — * @description Generates the snippets root registry from the live snippets filesystem plus structured folder metadata embedded in snippets/guide.mdx.
- `operations/scripts/generators/governance/generate-governance-map.js` — * @description Reads GOVERNANCE.md markers from every root folder and produces a governance map report
- `operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js` — * @description Generates the AI tools inventory report from the registry. Split from validate-ai-tools-registry.js.
- `operations/scripts/generators/governance/scaffold/new-script.js` — tooling:dev-tools',
- `operations/scripts/integrators/governance/cleanup-local-dev-sessions.js` — * @description Local dev session cleanup — preserves Mint on port 3333 and terminates stale Playwright plus non-3333 Mint session trees
- `operations/scripts/integrators/governance/pipelines/publish-v2-internal-reports.js` — * @description Report publisher — publishes v2 internal audit reports to configured output locations
- `operations/scripts/interfaces/governance/lib/load-labels.js` — Loads the canonical label taxonomy from .github/config/labels.json
- `operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js` — qa:content-quality
- `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js` — * @description * @mode        read-only
- `operations/scripts/validators/governance/compliance/check-workflow-headers.js` — * @description Validates that GitHub Actions workflow YAML files have governance comment headers
- `operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js` — * @description Generates a review checklist for dry-run governance repair proposals that require human approval before fix mode is applied.
- `operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js` — * @description Validate the AI-tools registry contract and coverage so ownerless governance and AI subsystem inventory stay aligned.
- `operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh` — # @description Payment/orchestrator gate verifier — checks payment and orchestrator documentation gate conditions
- `operations/scripts/validators/governance/pr/check-governance-approvals.js` — * @description Validate governance-sensitive PR changes against the canonical approval policy, required labels, and PR-body evidence.
- `operations/scripts/validators/governance/pr/check-pr-template.js` — * @description Enforces that PR descriptions include required change and rationale sections before merge
- `operations/scripts/validators/governance/repo/validate-lpd-paths.js` — * @description Validates that every script path referenced in `lpd` exists on disk. Parses the lpd bash CLI for node and script_path invocations and checks each file against the filesystem. Exits non-zero if any path is missing.
