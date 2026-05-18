# SME Audit: `discoverability` concern

> 16 scripts | Generated 2026-05-17
> Walk through each script. Set verdict per row. SME notes column free-form.
>
> **Verdict options:** `keep` / `refactor` / `merge` / `archive` / `unknown`

---

## validator (2)

### niche: `codex` (2)

#### `check-no-ai-stash.sh`

- **Path:** `operations/scripts/validators/ai/codex/check-no-ai-stash.sh`
- **Purpose:** # @description AI stash enforcer — blocks push if AI temporary/stash files are present in working tree
- **Description:** AI stash enforcer — blocks push if AI temporary/stash files are present in working tree
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `bash operations/scripts/validators/ai/codex/check-no-ai-stash.sh [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `validate-locks.js`

- **Path:** `operations/scripts/validators/ai/codex/validate-locks.js`
- **Purpose:** * @description Codex lock validator — checks for stale or conflicting lock files before push
- **Description:** Codex lock validator — checks for stale or conflicting lock files before push
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** commit), P2 (push)
- **Usage:** `node operations/scripts/validators/ai/codex/validate-locks.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## generator (3)

### niche: `llm` (1)

#### `generate-llms-files.js`

- **Path:** `operations/scripts/generators/ai/llm/generate-llms-files.js`
- **Purpose:** * @description * @mode        read-only
- **Description:** * @mode        read-only
- **Workflow callers:** `generator-discoverability-generate-llms-files.yml`, `validator-discoverability-check-llms-files.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, P6
- **Usage:** `node operations/scripts/generators/ai/llm/generate-llms-files.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `seo` (2)

#### `generate-ai-sitemap.js`

- **Path:** `operations/scripts/generators/content/seo/generate-ai-sitemap.js`
- **Purpose:** * @description AI sitemap generator — produces AI-optimised sitemap files. Dual-mode: --check (enforcer) / --write (generator).
- **Description:** AI sitemap generator — produces AI-optimised sitemap files. Dual-mode: --check (enforcer) / --write (generator).
- **Workflow callers:** `generator-discoverability-generate-ai-sitemap.yml`, `validator-discoverability-check-ai-sitemap.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual, P6
- **Usage:** `node operations/scripts/generators/content/seo/generate-ai-sitemap.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `generate-og-images.js`

- **Path:** `operations/scripts/generators/content/seo/generate-og-images.js`
- **Purpose:** * @description Generate canonical site-level Open Graph image assets and manifest for fallback and section-level social previews.
- **Description:** Generate canonical site-level Open Graph image assets and manifest for fallback and section-level social previews.
- **Workflow callers:** `generator-discoverability-generate-og-images.yml`
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** generate
- **Pipeline:** manual — run when OG assets, section labels, or branding change
- **Usage:** `node operations/scripts/generators/content/seo/generate-og-images.js [--dry-run] [--only <locale:section-id|fallback>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## remediator (1)

### niche: `seo` (1)

#### `generate-seo.js`

- **Path:** `operations/scripts/remediators/content/seo/generate-seo.js`
- **Purpose:** * @description SEO generator — generates SEO metadata (title, description, keywords) for v2 pages from content analysis
- **Description:** SEO generator — generates SEO metadata (title, description, keywords) for v2 pages from content analysis
- **Workflow callers:** `remediator-discoverability-repair-seo-metadata.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** on-demand, SEO refresh)
- **Usage:** `node operations/scripts/generators/content/seo/generate-seo.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## integrator (6)

### niche: `agents` (3)

#### `cross-agent-packager.js`

- **Path:** `operations/scripts/integrators/ai/agents/cross-agent-packager.js`
- **Purpose:** * @description Cross-agent packager — bundles audit reports and repo state into agent-consumable packages
- **Description:** Cross-agent packager — bundles audit reports and repo state into agent-consumable packages
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/integrators/ai/agents/cross-agent-packager.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `export-portable-skills.js`

- **Path:** `operations/scripts/integrators/ai/agents/export-portable-skills.js`
- **Purpose:** * @description Portable skills exporter — copies canonical template skills into cross-agent pack folders and validates drift.
- **Description:** Portable skills exporter — copies canonical template skills into cross-agent pack folders and validates drift.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/integrators/ai/agents/export-portable-skills.js --write|--check [--skills name[,name...]]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `sync-codex-skills.js`

- **Path:** `operations/scripts/integrators/ai/agents/sync-codex-skills.js`
- **Purpose:** * @description Codex skills sync — synchronises skill definition files and managed companion resources between canonical templates and local Codex installs. Supports --check mode.
- **Description:** Codex skills sync — synchronises skill definition files and managed companion resources between canonical templates and local Codex installs. Supports --check mode.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/integrators/ai/agents/sync-codex-skills.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `codex` (3)

#### `lock-release.js`

- **Path:** `operations/scripts/integrators/ai/codex/lock-release.js`
- **Purpose:** * @description Codex lock release utility — releases stale codex lock files
- **Description:** Codex lock release utility — releases stale codex lock files
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-16
- **Mode:** integrate
- **Pipeline:** manual — interactive developer tool, not suited for automated pipelines
- **Usage:** `node operations/scripts/integrators/ai/codex/lock-release.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `task-cleanup.js`

- **Path:** `operations/scripts/integrators/ai/codex/task-cleanup.js`
- **Purpose:** * @description Codex task cleanup utility — reports and prunes merged clean worktrees plus stale local codex branches after merge
- **Description:** Codex task cleanup utility — reports and prunes merged clean worktrees plus stale local codex branches after merge
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--verify`
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual — interactive developer tool, not suited for automated pipelines
- **Usage:** `node operations/scripts/integrators/ai/codex/task-cleanup.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `task-preflight.js`

- **Path:** `operations/scripts/integrators/ai/codex/task-preflight.js`
- **Purpose:** * @description Codex task preflight — generates task setup files and validates preconditions
- **Description:** Codex task preflight — generates task setup files and validates preconditions
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-09
- **Mode:** integrate
- **Pipeline:** manual — codex setup tool referenced by .githooks/pre-commit guidance, not auto-executed
- **Usage:** `node operations/scripts/integrators/ai/codex/task-preflight.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## dispatch (4)

### niche: `codex` (4)

#### `check-codex-pr-overlap.js`

- **Path:** `operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js`
- **Purpose:** * @description PR enforcer — checks for conflicting codex PRs targeting the same files/branches
- **Description:** PR enforcer — checks for conflicting codex PRs targeting the same files/branches
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** PR, Track B)
- **Usage:** `node operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `codex-commit.js`

- **Path:** `operations/scripts/dispatch/ai/codex/codex-commit.js`
- **Purpose:** * @description Codex commit helper — audits codex branch state and generates compliant commit messages
- **Description:** Codex commit helper — audits codex branch state and generates compliant commit messages
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/dispatch/ai/codex/codex-commit.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `create-codex-pr.js`

- **Path:** `operations/scripts/dispatch/ai/codex/create-codex-pr.js`
- **Purpose:** * @description Codex PR creator — generates codex PR with correct branch naming, labels, and body template
- **Description:** Codex PR creator — generates codex PR with correct branch naming, labels, and body template
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/dispatch/ai/codex/create-codex-pr.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `task-finalise.js`

- **Path:** `operations/scripts/dispatch/ai/codex/task-finalise.js`
- **Purpose:** * @description Codex task finaliser — enforces task completion requirements before closing
- **Description:** Codex task finaliser — enforces task completion requirements before closing
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual — interactive developer tool, not suited for automated pipelines
- **Usage:** `node operations/scripts/dispatch/ai/codex/task-finalise.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---


## Orphan summary (7)

Scripts with no workflow caller and no other script caller. Candidates for archive.

- `operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js` — * @description PR enforcer — checks for conflicting codex PRs targeting the same files/branches
- `operations/scripts/dispatch/ai/codex/codex-commit.js` — * @description Codex commit helper — audits codex branch state and generates compliant commit messages
- `operations/scripts/dispatch/ai/codex/create-codex-pr.js` — * @description Codex PR creator — generates codex PR with correct branch naming, labels, and body template
- `operations/scripts/dispatch/ai/codex/task-finalise.js` — * @description Codex task finaliser — enforces task completion requirements before closing
- `operations/scripts/integrators/ai/agents/cross-agent-packager.js` — * @description Cross-agent packager — bundles audit reports and repo state into agent-consumable packages
- `operations/scripts/integrators/ai/codex/task-preflight.js` — * @description Codex task preflight — generates task setup files and validates preconditions
- `operations/scripts/validators/ai/codex/check-no-ai-stash.sh` — # @description AI stash enforcer — blocks push if AI temporary/stash files are present in working tree
