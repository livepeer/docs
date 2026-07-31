# Governance Research

> All documents that define governance requirements + all mechanisms that enforce them.
> Purpose: identify categories and requirements before designing pipelines.
> Sources: 3 agent research passes (2026-04-04)

---

## Documents That Define Governance Requirements (43 found)

### Repo Structure (8 docs)

| Doc | What it defines | Status |
|---|---|---|
| `docs-guide/policies/governance-index.mdx` | Single entry point indexing 10 governed surfaces | Current |
| `docs-guide/policies/ownerless-governance.mdx` | Core contract: every surface needs canonical source + validator + repair path + gate | Current |
| `docs-guide/policies/root-allowlist-governance.mdx` | What belongs at repo root. .allowlist is machine-readable gate | Current |
| `docs-guide/policies/v2-folder-governance.mdx` | 5 lanes for v2/ folder structure (publishable, workspace, deprecated, archived) | Current |
| `docs-guide/policies/cleanup-quarantine-policy.mdx` | Cleanup and quarantine processes | Current |
| `docs-guide/policies/snippets-assets-policy.mdx` | Snippets and assets governance | Current |
| `docs-guide/policies/source-of-truth-policy.mdx` | Canonical sources and single source of truth | Current |
| `workspace/plan/active/REPO-STRUCTURE-GOV/folder-structure.md` | Locked root folder layout | Current (LOCKED) |

### Scripts (7 docs)

| Doc | What it defines | Status |
|---|---|---|
| `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` | 3-tier taxonomy, 6 types, 4 concerns, 11-tag JSDoc, enforcement tiers | Stale (4 concerns, `automation`, ~120 count) |
| `workspace/plan/active/SCRIPT-GOVERNANCE/decision-log.md` | 13 locked decisions (D1-D13) | Current |
| `docs-guide/policies/script-governance.mdx` | Published version of script framework | Current |
| `tools/lib/script-governance-config.js` | Enum source of truth (types, concerns, purposes, scopes, pipeline tiers) | Just updated (7 types, 7 concerns) |
| `tools/config/runtime/ownerless-governance-surfaces.json` | 9 governed surfaces with repair paths. Script rollout: "migrating" | Current |
| `operations/scripts/README.md` | Script governance entry point for contributors | Current |
| `tools/config/registry/script-registry.json` | Auto-generated catalog of all governed scripts | Partially stale (7 headers need fixing) |

### AI Agents (7 docs)

| Doc | What it defines | Status |
|---|---|---|
| `.claude/CLAUDE.md` | 12 hard boundaries + 5 engineering standards for Claude | Current |
| `AGENTS.md` (root) | Agent baseline: 5 agent families, 8-level context hierarchy, 14 safety rules | Current |
| `.github/AGENTS.md` | Codex extension: task isolation, HitL, checkpoint branches (aspirational) | Current |
| `docs-guide/policies/agent-governance-framework.mdx` | 7 agent families, no policy drift between instruction files | Current |
| `docs-guide/policies/skill-pipeline-map.mdx` | Skill pipelines and their governance | Current |
| `.codex/task-contract.yaml` | Codex task contract: branch naming, lock lifecycle, scope, acceptance checks | Current |
| `workspace/plan/active/OSS-OWNERLESS-REPO-GOVERNANCE/decisions/decision-log.md` | 8+ decisions on contributor model (Copilot advisory, agent assignment, stale issues) | Current |

### Workflows/Actions (6 docs)

| Doc | What it defines | Status |
|---|---|---|
| `docs-guide/policies/infrastructure-principles.mdx` | 7-layer architecture contract, severity model (P0-P3) | Current |
| `docs-guide/policies/quality-gates.mdx` | Quality gates by layer (pre-commit, CI, PR, scheduled) | Current |
| `docs-guide/policies/generated-artifact-and-hook-governance.mdx` | Generated artifacts and git hooks governance | Current |
| `docs-guide/policies/audit-system-overview.mdx` | Audit systems overview | Current |
| `.github/workspace/framework-canonical.md` | Dispatcher model, 7 types, 7 concerns, 8 pipeline tags, 7 patterns | Current |
| `.github/workspace/reports-audits/decisions-log.mdx` | 8 locked decisions (D-ACT-01 through D-ACT-08) | Current |

### Pages/Content (4 docs)

| Doc | What it defines | Status |
|---|---|---|
| `workspace/plan/active/CONTENT-WRITING/plan-canonical.md` | Page taxonomy (7 pageTypes, 15 purposes, 7 audiences), voice rules, content pipeline | Active |
| `tools/config/runtime/blueprint-pages.json` | Blueprint page config (position, content_type, phase, job) | Current |
| `tools/config/quality/usefulness-rubric.json` | Page usefulness scoring (tier1 structural + tier2 LLM signals) | Current |
| `.github/pull_request_template.md` | PR requirements: description, scope, validation, copy governance L5 gate | Current |

### Brand/Copy (3 docs)

| Doc | What it defines | Status |
|---|---|---|
| `tools/config/quality/style-language-profile-en-gb.json` | EN-GB style enforcement profile | Current |
| `tools/lib/copy-governance/banned-words.txt` | 10 banned words (L5 quality gate) | Current |
| `tools/lib/copy-governance/banned-phrases.txt` | 17 banned phrases (L5 quality gate) | Current |

### Components (3 docs)

| Doc | What it defines | Status |
|---|---|---|
| `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` | 6 categories, 7-tag JSDoc, decision tree | Partially stale |
| `tools/config/quality/component-layout-profile.json` | Component layout constraints | Current |
| `docs-guide/policies/component-layout-decisions.mdx` | Component layout decisions | Current |

### Documentation (2 docs)

| Doc | What it defines | Status |
|---|---|---|
| `tools/config/quality/accuracy-source-registry.json` | 3-tier accuracy model (A: canonical, B: corroborating, C: context) | Current |
| `docs-guide/policies/docs-guide-structure-policy.mdx` | Docs-guide structure governance | Current |

### Contributions (3 docs)

| Doc | What it defines | Status |
|---|---|---|
| `.github/pull_request_template.md` | PR template with copy governance gate | Current |
| `.codex/task-contract.yaml` | Codex task contract | Current |
| `workspace/plan/active/OSS-OWNERLESS-REPO-GOVERNANCE/05_OSS-Governance-Framework/` | OSS handover framework | Active |

---

## Enforcement Mechanisms (28 found)

### Pre-Commit (BLOCKS commit)

| Mechanism | What it enforces | Category |
|---|---|---|
| Codex branch isolation | Codex sessions can't commit to docs-v2 without override | contributions |
| File deletion guard | No file deletions without `allow-deletions=true` trailer | repo-structure |
| .allowlist protection | No edits to .allowlist without `allowlist-edit=true` trailer | repo-structure |
| docs.json redirect integrity | Redirect entries must not break | pages |
| v1/ freeze | All changes to v1/ blocked completely | repo-structure |
| Root structure control | New root files/directories must be in .allowlist | repo-structure |

### Pre-Push (BLOCKS push)

| Mechanism | What it enforces | Category |
|---|---|---|
| Codex push isolation | Codex sessions can't push to docs-v2 without override | contributions |
| Codex task contract validation | Contract must be valid before push | contributions |
| Codex lock ownership | Lock state must be valid | contributions |
| Codex stash policy | No stash-based isolation | contributions |
| Non-fast-forward detection | Blocks non-ff pushes on codex/* branches | contributions |

### Claude Hooks (BLOCKS tool or warns)

| Mechanism | What it enforces | Category |
|---|---|---|
| pre-tool-guard.js | Blocks execution agents, destructive git, public posts, auto-generated file edits, em-dashes in MDX | ai-agents |
| mdx-validate-hook.js | Validates MDX renders on server (non-blocking if no server) | pages |
| move-detect-hook.js | Detects file moves, prompts /propagate | repo-structure |
| phase-gate-hook.js | Nags unverified checkpoints on every edit | workflows |
| blast-radius-scanner.js | Lists all consumers when editing shared files | workflows |
| friction-logger.js | Logs frustration signals (swearing, ALL CAPS, corrections) | ai-agents |
| grep-loop-guard.js | Circuit breaker at 3 empty grep results | ai-agents |
| post-tool-verify.js | Circuit breaker at 3 consecutive tool failures | ai-agents |
| read-logger.js | Tracks file reads per session | ai-agents |
| message-backup.js | Backs up messages >200 chars | ai-agents |
| pre-compact-checkpoint.js | Preserves state before context compaction | ai-agents |
| mdx-constraints-injector.js | Auto-injects Mintlify constraints when editing pages | pages |
| session-register.js | Tracks sessions, detects cross-session collisions | ai-agents |

### PR-Time (BLOCKS merge or advises)

| Mechanism | What it enforces | Gate | Category |
|---|---|---|---|
| test-suite.yml | Component naming, scope, CSS, docs, immutability, registry, mintlify sync, browser tests | P2 (blocks) | components, pages |
| codex-governance.yml | Task contracts, PR overlap | P2 (blocks) | contributions |
| broken-links.yml | Dead links | P3 (advisory) | pages |
| test-v2-pages.yml | Page rendering | P3 (blocks if fails) | pages |
| docs-catalog-governance.yml | Catalog consistency (component registry, docs-guide indexes, pages index) | P3 (blocks) | maintenance |
| check-docs-index.yml | Docs index consistency | P3 (blocks) | maintenance |
| check-ai-companions.yml | Companion files + manifest consistency | P3 (blocks) | discoverability |
| verify-ai-sitemap.yml | AI sitemap consistency | P3 (blocks) | discoverability |
| verify-llms-files.yml | llms.txt consistency | P3 (blocks) | discoverability |
| openapi-reference-validation.yml | OpenAPI spec matches live API | P3 (blocks PR, auto-fixes on schedule) | pages |

### Post-Merge (auto-repair)

| Mechanism | What it enforces | Category |
|---|---|---|
| governance-sync.yml | Runs governance-pipeline.js, creates PR if fixes needed | scripts |
| 6 P4 generators | Regenerate indexes, catalogs, registries, sitemaps, companions, llms.txt | maintenance, discoverability |

### Scheduled (scan + report/act)

| Mechanism | What it enforces | Response | Category |
|---|---|---|---|
| repair-governance.yml | Weekly self-heal (governance-pipeline.js in repair mode) | Auto-repair PR | scripts |
| content-health.yml | Component health, quality, freshness, layout governance | Advisory only (BROKEN: continue-on-error) | pages |
| page-integrity-health.yml | Link + import audit, safe repairs, rolling issue | Rolling issue | pages |
| v2-external-link-audit.yml | External link health | Advisory only | pages |
| freshness-monitor.yml | Data feed freshness | Advisory only | data-importers |
| openapi-reference-validation.yml | API spec drift | Auto-fix PR + rolling issue | pages |

### Self-Heal Scripts

| Mechanism | What it repairs | Category |
|---|---|---|
| governance-pipeline.js | Script inventory, JSDoc headers, generated files, catalogs | scripts |
| repair-component-metadata.js | Component JSDoc metadata | components |
| repair-script-inventory.js | Script classification gaps | scripts |
| enforce-generated-file-banners.js | "DO NOT EDIT" banners on generated files | pages |

---

## Categories That Emerge

From 43 documents + 28 enforcement mechanisms:

| Category | Requirements docs | Enforcement mechanisms | Notes |
|---|---|---|---|
| **Scripts** | 7 | 4 (governance-sync, repair-governance, governance-pipeline, repair-script-inventory) | Has own framework doc. Stale on taxonomy |
| **Components** | 3 | 3 (test-suite, check-component-immutability, repair-component-metadata) | Has own framework doc. Partially stale |
| **Pages** | 4 | 8 (test-suite, broken-links, test-v2-pages, content-health, page-integrity, openapi, mdx-validate, mdx-constraints) | Most enforcement mechanisms of any category |
| **Contributions** | 3 | 7 (all pre-push gates, codex-governance, PR template, codex task contract) | Heavily codex-focused |
| **Repo Structure** | 8 | 5 (pre-commit gates: deletion, allowlist, v1 freeze, root structure, move-detect) | Most policy docs of any category |
| **Brand/Copy** | 3 | 1 (style-homogenise only, disconnected linters) | Most neglected enforcement |
| **AI Agents** | 7 | 9 (all Claude hooks) | Many mechanisms but local-only, not CI |
| **Workflows** | 6 | 3 (infrastructure principles, quality gates, phase-gate-hook) | Framework well-defined, enforcement partial |
| **Documentation** | 2 | 2 (accuracy registry, docs-guide structure) | Thin |
| **Discoverability** | 0 (covered by workflows) | 3 (check-ai-companions, verify-ai-sitemap, verify-llms-files) | No dedicated policy doc |
| **Maintenance** | 0 (covered by workflows) | 2 (docs-catalog-governance, check-docs-index) | No dedicated policy doc |
| **Data Importers** | 0 | 1 (freshness-monitor, advisory only) | No policy doc, no enforcement |
