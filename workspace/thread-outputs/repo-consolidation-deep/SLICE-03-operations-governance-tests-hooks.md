# Slice 3 — operations/governance + tests + .githooks (2026-05-22)

> Read-only enforcement-layer inventory. Branch: `docs-v2-dev`. All paths repo-relative.

**Counts (verified):**
- Governance config JSON: **6**
- Integration tests: **11** (excluding `.selftest.js` companions: 9 unique scripts)
- Unit tests: **76** `.test.js` files at top level of `operations/tests/unit/`
- Hooks (top-level files in `.githooks/`): **13** (5 executables, 4 markdown docs, 1 disabled, 1 `pre-commit-no-deletions` variant, 1 script-index, plus `install.sh` and JS modules)

---

## Governance config (operations/governance/config/)

No `.schema.json` files exist in this folder — schemas are embedded in the JSON via the `version` field and consumed via helpers in `tools/lib/governance/*.js`.

| Path | Schema (top-level keys) | Entries | What it governs | Sample entry | Consumed by | mtime |
|---|---|---|---|---|---|---|
| `operations/governance/config/agent-write-governance.json` | `version`, `canonical_home`, `bridge_mode`, `default_policy`, `root_policy`, `path_classes[]`, `output_classes[]` | 9 path_classes + 8 output_classes | Admitted write destinations per agent class. Pairs path-glob to `commit_policy` (tracked / task_dependent / forbidden). Caps root writes to 5 admitted surfaces (`.allowlist`, `docs-index.json`, `llms.txt`, `sitemap-ai.xml`, `ai-tools`). | path_class `canonical-operations` allows `operations/**`, `.github/**`, `.githooks/**`, `ai-tools/**`, `.mintlify/**`, `.codex/**`, `.claude/**`, `.cursor/**`, `.windsurf/**`, `.augment/**`, `.vscode/**` (commit_policy `tracked`) | `tools/lib/governance/agent-write-governance.js`, `operations/tests/unit/agent-write-admission.test.js`, `operations/tests/run-pr-checks.js` | 2026-04-05 |
| `operations/governance/config/generated-artifacts.json` | `version`, `artifacts[]` | 29 artifacts | Every committed/derived artifact: who generates it, source globs, class (committed_authoritative / committed_derived_scoped / ephemeral_local), `commit_policy`, `hook_policy` (always `check_only`), `ci_policy`, `delta_strategy`. | `.allowlist`: generator `node operations/scripts/generators/governance/root/generate-root-governance-artifacts.js --write`, class `committed_authoritative`, sources include `operations/governance/config/root-governance.json` | `tools/lib/governance/generated-artifacts.js`, `operations/tests/unit/generated-artifacts-policy.test.js`, `operations/tests/unit/snippets-root-governance.test.js`, generator scripts referenced by `.generator` field | 2026-04-08 |
| `operations/governance/config/governance-approval-policy.json` | `version`, `section_heading`, `section_optional_phrase`, `required_fields[]`, `required_labels[]`, `rules[]` | 4 rules / 4 labels | PR approval policy. Four blocking label classes: `approval:governance-schema`, `approval:governance-gate`, `approval:workflow-governance`, `approval:governance-retirement`. Each rule pins `path_globs[]` that trigger the label requirement. | rule `governance-schema` triggers on `operations/governance/config/*.json`, `tools/lib/governance/*.js`, and the repo-governance generator/validator/test triad | `operations/scripts/validators/governance/pr/check-governance-approvals.js`, `operations/tests/unit/governance-approval-policy.test.js`, `.github/pull_request_template.md` | 2026-04-06 |
| `operations/governance/config/ownerless-governance-surfaces.json` | (flat array of 8 objects; no `version` wrapper) | 8 surfaces | Per-surface ownerless control plane manifest. Each surface declares `surface_globs[]`, `canonical_sources[]`, `derived_outputs[]`, `validators[]`, `repair_commands[]`, `gate_layer`, `rollout_state`, `ownerless_ready`. | `ai-tools-registry`: globs `ai-tools/registry/**`, validator `operations/tests/unit/ai-tools-registry.test.js`, gate_layer `pr-changed`, rollout_state `autofix`, ownerless_ready `true` | `tools/lib/governance/ownerless-governance.js`, `operations/tests/unit/ownerless-governance.test.js` (referenced by 8 unit tests) | 2026-04-08 |
| `operations/governance/config/repo-governance-surfaces.json` | `version`, `canonical_home`, `bridge_mode`, `canonical_manifests[]`, `approval_checkpoints[]`, `generated_outputs`, `production_approval_policy`, `active_governance_reports[]`, `github_workspace_surfaces[]`, `legacy_bridge_inventory[]`, `path_classes[]`, `agent_output_classes[]`, `surfaces[]` | 5 control-plane surfaces, 7 github_workspace_surfaces, 4 approval_checkpoints | Top-level governance registry. Lists 5 canonical manifest files, the 4 approval checkpoints (design-lock / first-instance-review / gate-escalation / legacy-retirement), the active generated reports under `workspace/reports/repo-ops/`, and classifies all `.github/workspace/*` paths as transitional-runtime / generated-support / design-only / historical-audit. `bridge_mode` is `retired`. | surface `repo-governance-registry` lists all 6 canonical config files (incl. `repo-governance-surfaces.json` itself), validator `check-repo-governance-sync.js`, gate_layer `pr-changed`, escalation_mode `auto-fix-pr` | `tools/lib/governance/repo-governance.js`, `operations/scripts/validators/governance/compliance/check-repo-governance-sync.js`, `operations/tests/unit/repo-governance-sync.test.js`, generator `operations/scripts/generators/governance/reports/generate-repo-governance-status.js` | 2026-04-06 |
| `operations/governance/config/root-governance.json` | `version`, `policy_owner`, `generated_outputs`, `placement_matrix[]`, `local_compatibility[]`, `forbidden_root_artifacts[]`, `entries[]` | 31 root entries, 5 placement-matrix surfaces, 7 forbidden_root_artifacts | Root allowlist source of truth. Drives generation of `.allowlist`, `docs-guide/repo-ops/config/root-governance-map.mdx`, and the `ROOT_GOVERNANCE_SYNC_LATEST.{json,md}` reports. Forbids `.DS_Store`, `.cache`, `.cursorrules`, `.playwright-cli`, `repo-catalog.mdx`, `ASSISTANT.md`, `Assistant.md`. | entry `.allowlist` class `platform_contract`, generator `node operations/scripts/generators/governance/root/generate-root-governance-artifacts.js --write`, doc_refs include `docs-guide/policies/root-allowlist-governance.mdx` | `tools/lib/governance/root-governance.js`, `operations/scripts/generators/governance/root/generate-root-governance-artifacts.js`, `operations/scripts/validators/governance/compliance/check-root-governance-sync.js`, `operations/tests/unit/root-governance-sync.test.js`, `operations/tests/unit/root-allowlist-format.test.js`, `operations/tests/unit/agent-write-admission.test.js` | 2026-04-06 |

**Folder `GOVERNANCE.md` (`operations/governance/GOVERNANCE.md`, 2026-04-07):** declares the folder's owner as `@livepeer/docs-team`, points to `docs-guide/frameworks/repo-structure.mdx` and `docs-guide/frameworks/script-framework.mdx`. Documents subfolders `config/`, `validators/`, `repairs/` — **but `validators/` and `repairs/` do not exist as subdirectories.** Only `config/` is present. The GOVERNANCE.md describes a structure that was never materialised (or has been moved). Validator scripts live under `operations/scripts/validators/governance/**` and remediator scripts under `operations/scripts/remediators/**`.

---

## Tests

### Integration tests (`operations/tests/integration/`)

| Path | What it tests | Scripts it exercises | mtime | Gates which PR check? |
|---|---|---|---|---|
| `operations/tests/integration/browser.test.js` | Puppeteer browser integration — renders pages from `docs.json` and checks for console errors, load failures, visual regressions. Imports `getMdxFiles`, `getStagedDocsPageFiles` from utils, `getV2Pages` from `operations/scripts/validators/content/structure/test-v2-pages`, `ensureServerRunning`/`stopServer`/`getServerUrl` from `.githooks/server-manager`. | `test-v2-pages.js`, `.githooks/server-manager.js` | 2026-04-03 | `Docs CI – Content Quality Suite` (browser step), pre-commit fast lane via `run-all.js` |
| `operations/tests/integration/dispatch-concern-simulation.js` | Validates every `dispatch-{concern}.yml` workflow can run locally — parses YAML, walks job steps, extracts dispatcher scripts, runs each `--help`. Policy D-GOV-07 / D-ACT-08. Scope: `dispatch-{brand,copy,discoverability,governance,health,maintenance}.yml`. | 6 dispatch workflows + every referenced `operations/scripts/dispatch/*` script | 2026-05-22 | Manual / PR confidence check (not yet wired in test-suite.yml) |
| `operations/tests/integration/domain-pages-audit.js` | HTTP status sweep against deployed docs (default `https://docs.livepeer.org`). Writes `workspace/reports/page-audits/domain-page-load-report.json`. CLI: `--version v1|v2|both`, `--staged`, `--base-url`. | None upstream; standalone HTTP probe | 2026-04-03 | Pre-commit hook (per script-run matrix), manual `npm run test:domain*` |
| `operations/tests/integration/mdx-component-runtime-smoke.js` | Smoke-tests 5 sentinel MDX routes for runtime component failures (BlinkingIcon/normalizeIconName regressions). Imports `ensureFreshBundleBaseUrl` from sibling `contracts-validator-contract.js`. Triggered by changes under `snippets/components/**/*.jsx`. | `.githooks/server-manager.js` (transitively via puppeteer harness), `contracts-validator-contract.js` | 2026-04-09 | Manual `node operations/tests/integration/mdx-component-runtime-smoke.js --routes ...` |
| `operations/tests/integration/openapi-reference-audit.js` | Comprehensive OpenAPI spec validation. Three specs: `api/studio.yaml`, `api/openapi.yaml`, `api/cli-http.yaml`. Modes: `--strict`, `--fix`, report. Writes `workspace/reports/openapi-reference/openapi-reference-audit.{md,json}`. | All 3 OpenAPI specs; `tools/lib/bootstrap/load-js-yaml`, `tools/lib/docs/docs-publishability` | 2026-04-05 | `.github/workflows/openapi-reference-validation.yml` (PR-blocking on `main` and `docs-v2`) |
| `operations/tests/integration/pipeline-functional-tests.js` | Detect-repair-verify cycle for 10 foundational governance/content pipeline dispatchers (em-dashes, banned-words, spelling, voice-register, grammar-en-gb, page-integrity, etc.). Drops known-bad fixture, runs detect, asserts violation found, runs repair, asserts clean. Uses `tools/lib/governance/pipeline-test-harness`. Policy D-GOV-03 / D-GOV-07. | All 10 `operations/scripts/dispatch/content/{brand,health}/dispatch-*.js` named in `TESTS` array | 2026-05-22 | P3 / P5 (PR-time gate, scheduled CI verification) — but not yet wired in test-suite.yml |
| `operations/tests/integration/pipeline-smoke-test.js` | Universal smoke test — discovers every `dispatch-{niche}.js` under `operations/scripts/dispatch/`, runs each in `--dry-run --mode pr`, captures exit codes. Excludes 6 infrastructure-dependent dispatchers (page-rendering, health-scan, contract-addresses, maintenance-update, seo-metadata, discoverability-repair). Policy D-GOV-07 / D-GOV-03. | All non-excluded dispatchers under `operations/scripts/dispatch/**/dispatch-*.js` | 2026-05-22 | Manual (run before any dispatcher merge) |
| `operations/tests/integration/v2-link-audit.js` | Compatibility wrapper — delegates to canonical `operations/scripts/audits/content/health/page-links-audit.js`. Legacy entrypoint preserved during migration. | `page-links-audit.js` | 2026-04-03 | Compatibility/manual |
| `operations/tests/integration/v2-link-audit.selftest.js` | Self-test suite for v2-link-audit using local HTTP fixture + temporary MDX file. Validates external-validation helpers. | `v2-link-audit.js` → `page-links-audit.js` | 2026-04-03 | `npm script test:link-audit:selftest` (manual) |
| `operations/tests/integration/v2-wcag-audit.js` | Hybrid WCAG 2.2 AA audit for `v2/`. Static checks + axe-core browser runs. Reports `workspace/reports/quality-accessibility/v2-wcag-audit-report.{md,json}`. CLI: `--full`, `--staged`, `--fix`, `--max-pages`, `--fail-impact`. | `operations/tests/utils/file-walker.js`, `.githooks/server-manager.js`, axe-core | 2026-05-22 | Pre-commit (`--staged --fix --stage --max-pages 10 --fail-impact serious`), `lpd test --staged --wcag` |
| `operations/tests/integration/v2-wcag-audit.selftest.js` | Self-test for v2-wcag-audit — validates rule logic against known fixtures via local HTTP + puppeteer. | `v2-wcag-audit.js` | 2026-04-03 | Manual |

### Unit tests (`operations/tests/unit/`)

76 `.test.js` files. Grouped by `@purpose` tag and the script/config they exercise:

| Path | `@purpose` | What it tests | Exercises | Pipeline |
|---|---|---|---|---|
| `agent-write-admission.test.js` | governance:agent-governance | Narrow agent-write admission for staged or explicit files: no tracked local-only outputs, no undeclared root writes. | `operations/governance/config/agent-write-governance.json`, `operations/governance/config/root-governance.json`, `tools/lib/governance/agent-write-governance.js`, `tools/lib/governance/root-governance.js`, `operations/tests/run-pr-checks.js` | manual, pr-changed |
| `ai-tools-registry.test.js` | governance:agent-governance | AI-tools registry contract; full tracked ai-tools coverage; Wave 1 inventory SOT boundary. | `ai-tools/registry`, `tools/lib/ai/ai-tools-registry.js`, `validate-ai-tools-registry.js`, `operations/governance/config/ownerless-governance-surfaces.json` | P1, P3 |
| `ai-tools-visual-library.test.js` | governance:ai-tools-visual-library | Visual library currency vs. workflow inventory. | `generate-ai-tools-visual-library.js`, `.github/workflows`, `ai-tools/registry/workflows`, `ai-tools/registry/dispatchers` | P1, P3 |
| `audit-script-inventory-repair-rules.test.js` | qa:repo-health | Audit-script-inventory repair hardening; judgement-field backfill; pipeline safety. | `operations/scripts/validators/governance` | manual |
| `authoring-tools.test.js` | tooling:dev-tools | MDX formatting + real-path completion helpers in VS Code authoring tools. | `tools/editor-extensions/authoring-tools`, `operations/scripts/format-mdx.js` | P1, P3 |
| `check-agent-docs-freshness.test.js` | governance:agent-governance | Agent governance freshness validator against canonical runtime file set. | `check-agent-docs-freshness.js`, `AGENTS.md`, `.github/copilot-instructions.md`, `.claude`, `.cursor`, `.windsurf`, `docs-guide/policies`, `docs-guide/contributing/agent-instructions.mdx` | P1, P3 |
| `check-component-props.test.js` | qa:repo-health | Unit tests for each check function in `check-component-props.js` with inline MDX fixtures. | `check-component-props.js` | manual |
| `check-mintlify-canonical-sync.test.js` | governance:agent-governance | Mintlify canonical-sync registry, validator, remediator contract. | `mintlify-canonical-sync.js`, `check-mintlify-canonical-sync.js`, `sync-mintlify-canonical-consumers.js`, `docs-guide/canonical/collation-data/Mintlify` | P1, P3 |
| `cleanup-local-dev-sessions.test.js` | tooling:dev-tools | Preserves Mint on 3333; targets non-3333 Mint + Playwright process trees. | `cleanup-local-dev-sessions.js` | manual |
| `codex-commit.test.js` | governance:agent-governance | Codex commit message generation, contract compliance. | `operations/scripts/dispatch/ai/codex/codex-commit.js` | manual |
| `codex-safe-merge-with-stash.test.js` | governance:agent-governance | Asserts deprecated stash helper hard-fails and redirects to supported lifecycle. | `operations/scripts/x-archive/codex-safe-merge-with-stash.js` | manual |
| `codex-skill-sync.test.js` | governance:agent-governance | Skill file and companion bundle sync between sources. | `sync-codex-skills.js`, `ai-tools/ai-skills/templates` | manual |
| `codex-task-cleanup.test.js` | governance:agent-governance | Safe worktree pruning, dirty-worktree preservation, branch pruning, repo-root protection. | `task-cleanup.js` | manual |
| `codex-task-preflight.test.js` | governance:agent-governance | Managed worktree default vs. explicit in-place override. | `task-preflight.js` | manual |
| `component-governance-generators.test.js` | qa:repo-health | Component governance generators produce coherent registry/usage-map/docs outputs. | Component governance generator chain | P1 |
| `component-governance-utils.test.js` | qa:repo-health | Shared component governance utility parsing, scanning, archive exclusion. | Component governance shared utils | P1 |
| `contracts-addresses-pipeline.test.js` | qa:contracts-registry | Contracts proof catalog, registry output, shared surface wiring, blocking anomaly behavior, workflow cadence, route freshness. | `.github/scripts/fetch-contract-addresses.js`, `operations/scripts/integrators/content/data/contracts/`, `update-contract-addresses*.yml`, `ContractVerifier.jsx`, `snippets/data/contract-addresses/`, `v2/about` | P1 |
| `contracts-view-model.test.js` | qa:contracts-registry | Shared contracts view-model helper surface (focused regression). | `snippets/data/contract-addresses/` | manual, P3 |
| `copy-lint.test.js` | qa:content-quality | Fixture-driven copy governance + changed-file scoped lint aggregation. | `operations/tests/copy-lint-fixtures`, `tools/scripts` | P1, P3 |
| `create-codex-pr.test.js` | governance:agent-governance | PR creation logic, branch naming. | `create-codex-pr.js` | manual |
| `docs-authoring-rules.test.js` | qa:content-quality | Guide-layout warning rules; deterministic code-block icon repair. | `tools/lib` | P1 |
| `docs-fact-registry.test.js` | governance:agent-governance | Claim-family registry schema; normalized loading by domain. | `docs-fact-registry.js`, `workspace/research/claims` | manual (experimental research) |
| `docs-guide-sot.test.js` | qa:repo-health | docs-guide SOT coverage, README pointers, generated index freshness. | 3 docs-guide index generators | P1, P2, P3, manual |
| `docs-navigation.test.js` | qa:repo-health | `docs.json` page-entry syntax, missing-route plans, orphaned canonical v2 page warnings, optional remaps. | `docs.json` | P1, P3, P6 |
| `docs-page-research-pr-report.test.js` | governance:agent-governance | Changed-file advisory reporting for research runner. | `docs-page-research-pr-report.js` | manual |
| `docs-page-research.test.js` | governance:agent-governance | Claim extraction, contradiction detection, evidence-source adapters. | `docs-page-research.js`, `docs-fact-registry.js` | manual |
| `docs-page-scope.test.js` | qa:content-quality | Authored-page scope helpers for warning-only validators. | `tools/lib` | P1 |
| `docs-path-sync.test.js` | qa:repo-health | Staged move detection, docs.json/reference rewrites, validator + remediator behavior. | `operations/scripts/{lib,validators,remediators}/content`, `lpd` | P1, P3 |
| `docs-research-adjudication.test.js` | governance:agent-governance | Adjudication-ledger schema, report-aware outcome recording, trust-tier rules. | `docs-research-adjudication.js`, `workspace/research/adjudication` | manual |
| `docs-research-packet.test.js` | tooling:dev-tools | Nav/manifest/path tranche derivation; packet-summary rollups. | `docs-research-packet.js`, `tools/config/scoped-navigation/docs-gate-work.json` | manual |
| `docs-route-scope.test.js` | qa:repo-health | docs.json-derived tab/group route scopes resolve to live files. | `docs.json` | P1 |
| `export-portable-skills.test.js` | governance:agent-governance | Portable skill exports from canonical templates. | `export-portable-skills.js`, `tools/lib/ai/codex-skill-templates.js`, `ai-tools/agent-packs/skills` | P1, P3 |
| `frontmatter-taxonomy.test.js` | qa:content-quality | Shared docs frontmatter taxonomy normalization + purpose mapping. | `tools/lib` | P1 |
| `generated-artifacts-policy.test.js` | qa:repo-health | Generated artifact manifest enums, path matching, hook-policy expectations. | `tools/lib/governance/generated-artifacts.js`, `operations/governance/config/generated-artifacts.json` | manual |
| `governance-approval-policy.test.js` | governance:repo-health | Production governance approval policy + PR approval validator scenarios. | `governance-approval-policy.json`, `check-governance-approvals.js`, `.github/pull_request_template.md`, `run-pr-checks.js` | manual, P3 |
| `imports-cli.test.js` | qa:import-integrity | CLI arg parsing, import resolution, markdown exclusion. | `imports.test.js` CLI surface | manual |
| `imports.test.js` | qa:import-integrity | Compatibility wrapper for `page-imports-audit.js`. | `operations/scripts/audits/content/health/page-imports-audit.js` | P1, P3 |
| `links-cli.test.js` | qa:link-integrity | CLI arg parsing, JSX href detection, repo-scope markdown handling. | `links.test.js` CLI surface | manual |
| `links-imports.test.js` | qa:link-integrity | Compatibility alias for `links.test.js`. | `links.test.js` | P1, P3 |
| `links.test.js` | qa:link-integrity | Primary link validator — internal markdown/MDX links only, repo-wide dry-run. | repo-wide links | P1, P3 |
| `lpd-scoped-mint-dev.test.js` | tooling:dev-tools | `lpd` scoped mint-dev — validates dev server scope filtering. | `lpd`, `tools/dev/preview/mint-dev.sh`, `generate-mint-dev-scope.js` | manual |
| `mdx-component-runtime-smoke.test.js` | qa:content-quality | MDX runtime smoke helpers — arg parsing, sentinel route selection, trigger logic, failure classification. | `mdx-component-runtime-smoke.js` | manual |
| `mdx-component-scope.test.js` | qa:repo-health | MDX-facing component scope validator — unsafe private helpers, safe inline logic, imported helper patterns. | `operations/scripts/validators/components` | manual |
| `mdx-guards.test.js` | qa:content-quality | MDX guardrails — globals imports, math delimiters, markdown table line breaks. | `v2/pages`, `snippets/pages`, `snippets/snippetsWiki` | P1, P3 |
| `mdx-safe-markdown.test.js` | qa:content-quality | Fixture-driven MDX-safe markdown repair + validation. | `operations/tests/fixtures/mdx-safe-markdown`, `tools/lib`, remediators + validators | P1 |
| `mdx-sanitise.test.js` | (no JSDoc header found — pre-update file) | MDX sanitiser logic. | tools/lib MDX sanitiser | unknown |
| `mdx.test.js` | qa:content-quality | MDX syntax + structure — parse errors, invalid JSX, broken components. | `tests` repo-wide | P1, P3 |
| `migrate-assets-to-branch.test.js` | qa:repo-health | CLI defaults, ambiguous basename detection, deterministic rewrites, end-to-end branch migration in temp git repo. | `migrate-assets-to-branch.js`, `audit-media-assets.js` | manual |
| `mint-dev-locks.test.js` | tooling:dev-tools | Concurrent dev sessions only block on conflicting ports. | `tools/dev/preview/mint-dev.sh` | manual |
| `og-image-policy.test.js` | qa:content-quality | OG image route mapping, locale asset selection, fallback assignment, URL guardrails. | `operations/scripts/snippets/lib` | manual |
| `openapi-reference-audit.test.js` | tooling:api-spec | Unit tests for individual audit rules + fix logic. | `openapi-reference-audit.js` integration | manual |
| `openapi-rolling-issue.test.js` | tooling:api-spec | OpenAPI rolling issue tracker — issue creation + dedup. | `tools/utils`, `openapi-reference-validation.yml` | manual |
| `orchestrator-guides-research-review.test.js` | tooling:dev-tools | Live Orchestrators Guides tranche extraction, report summary helpers, registry-drift detection. | `orchestrator-guides-research-review.js` | manual |
| `ownerless-governance.test.js` | governance:agent-governance | Ownerless governance manifest, primary gate-layer contract, forbidden human-owner dependency. | `operations/governance/config/ownerless-governance-surfaces.json`, `AGENTS.md`, `.allowlist`, `.github`, `.claude`, `.cursor`, `.windsurf`, `README.md`, `docs-guide/contributing/agent-instructions.mdx` | P1, P3 |
| `page-imports-audit.test.js` | qa:import-integrity | Forbidden React imports, missing JSON imports, output-dir parsing. | `page-imports-audit.js` | manual |
| `page-integrity-dispatch.test.js` | infrastructure:pipeline-orchestration | Repair sequencing across page links + page imports on temporary v2 fixture. | `page-integrity-dispatch.js` | manual |
| `page-integrity-rolling-issue.test.js` | qa:repo-health | Page integrity rolling issue helper — dedup, issue action selection, body structure. | dispatch helper | manual |
| `post-remediation-verify.test.js` | (validates post-remediation orchestrator) | Registry loading, file substitution, per-file. | `operations/scripts/dispatch/governance/post-remediation-verify.js` | (no `@pipeline` declared) |
| `precommit-staged-cache.test.js` | qa:repo-health | Pre-commit staged-tree cache hits, invalidation, pruning. | `tools/lib/bootstrap/precommit-staged-cache.js` | P1, manual |
| `quality.test.js` | qa:content-quality | Frontmatter completeness, thin content detection, placeholder flagging. | repo-wide | P1, P3 |
| `remediate-styles.test.js` | qa:style-governance | Deterministic style remediations, audit-category aliases. | `tools/scripts/remediators/styles` | P1, P3 |
| `repair-governance.test.js` | governance:repo-health | Safe dry-run, fix, rollback, strict exit handling, workflow contract coverage. | `repair-governance.js`, `repair-governance.yml` | manual |
| `repair-spelling.test.js` | qa:content-quality | Deterministic spelling fixes + exclusion ranges. | `operations/scripts/remediators/content` | manual |
| `repo-audit-pipeline.test.js` | qa:repo-health | Mode/scope combinations, report output. | `repo-audit-orchestrator.js`, `ai-tools/ai-skills/catalog`, `ai-tools/agent-packs` | manual |
| `repo-governance-sync.test.js` | qa:repo-health | Top-level repo-governance registry, generated map + status outputs, sync validator. | `operations/governance/config`, generators, validators, `tools/lib/governance`, `docs-guide/repo-ops/config`, `workspace/reports/repo-ops` | manual, P3 |
| `root-allowlist-format.test.js` | governance:agent-governance | `.allowlist` machine-readable, root-only, aligned with `root-governance.json`. | `.allowlist`, `root-governance.json`, `tools/lib/governance/root-governance.js` | P1, P3 |
| `root-governance-sync.test.js` | qa:repo-health | Root-governance manifest, generated projections, sync validator. | root generator, validator, `tools/lib/governance`, `docs-guide/repo-ops/config`, `.allowlist` | manual, P3 |
| `run-pr-checks.test.js` | qa:repo-health | Lane parsing, branch-health registry coverage, incremental summary/progress. | `tests/run-pr-checks.js` | manual |
| `script-docs.test.js` | qa:repo-health | Script header schema, group script indexes, aggregate script catalog. | `.githooks`, `.github/scripts`, `tests`, `tools/scripts`, `workspace/scripts`, `docs-guide/catalog/scripts-catalog.mdx` | P1, P3 |
| `skill-docs.test.js` | governance:agent-governance | Skill documentation frontmatter, references, contract integrity. | `ai-tools/ai-skills`, `tools/lib/ai/codex-skill-templates.js` | P1, P3 |
| `snippets-root-governance.test.js` | qa:repo-health | Governed two-file snippets root model + freshness for generated snippets registry. | `snippets/guide.mdx`, `snippets/snippets-registry.mdx`, `snippets/_workspace/archive`, `generated-artifacts.json` | manual, P3 |
| `spelling.test.js` | qa:content-quality | Spelling check vs. custom dictionary with en-GB rules. | repo-wide | P1, P3 |
| `style-guide.test.js` | qa:content-quality | Style guide compliance — en-GB conventions, heading case, formatting. | repo-wide | P1, P3 |
| `ui-template-generator.test.js` | qa:repo-health | UI template artifacts, canonical template MDX safety, Mint parse-surface boundaries. | `generate-ui-templates.js`, `.vscode`, `snippets/templates`, `component-registry.json`, `.mintignore`, `docs.json`, `v1`, `v2`, `snippets` | P1, P3 |
| `update-livepeer-release.test.js` | qa:data-refresh | Canonical go-livepeer release data module shape. | `.github/scripts`, `snippets/data/globals` | P2 |
| `usefulness-journey.test.js` | qa:content-quality | Journey-check evaluation logic vs. fixture pages. | full-repo | P3 |
| `usefulness-rubric.test.js` | qa:content-quality | Rubric-based scoring vs. fixture pages. | full-repo | P3 |
| `v2-folder-governance-cleanup-matrix.test.js` | governance:repo-health | v2 folder governance cleanup matrix generator — classification, targeting, age-bucket rules. | `generate-v2-folder-governance-cleanup-matrix.js` | manual |
| `v2-link-audit.test.js` | qa:link-integrity | v2-link-audit individual link checking rules. | `v2-link-audit.js` integration | manual |
| `v2-wcag-audit.test.js` | qa:content-quality | v2-wcag-audit individual WCAG rules. | `v2-wcag-audit.js` integration | manual |
| `validate-codex-task-contract.test.js` | governance:agent-governance | Codex contract checking logic. | `validate-codex-task-contract.js` | manual |
| `vsix-parity.test.js` | tooling:dev-tools | Repo-owned VS Code extension packaging parity — VSIX vs. governed source files. | `tools/editor-extensions` | P1, P3 |

**Empty component-test subdirectories** (`operations/tests/unit/components/{content,data,layout,page-structure,primitives}/`) contain only `.gitkeep` files plus `TEMPLATE.test.js` (902 bytes) — the per-component unit test slot is scaffolded but unfilled. Effective scope: 0 component unit tests despite 132 components in the registry.

### Baselines + fixtures

| Path | Purpose | Size | Freshness |
|---|---|---|---|
| `operations/tests/baselines/console-baseline.json` | Console-error baseline for browser tests. `_meta.generated` = `2026-05-04T09:22:15.131Z`. | 225,248 B (5,994 lines) | 2026-05-04 — 18 days old at slice date |
| `operations/tests/config/codex-issue-policy.json` | Codex PR/issue label policy (`required_labels`, `required_label_prefixes`, `forbidden_labels`, `required_state`). Tiny — 15 lines. | 228 B | 2026-04-15 |
| `operations/tests/config/spell-dict.json` | Custom spell dictionary (en-GB additions). | 3,376 B (206 lines) | 2026-04-15 |
| `operations/tests/copy-lint-fixtures/expected/*.json` | 13 expected-finding JSON files per copy-lint rule (accordion-url-only, banned-phrases, banned-words, comparative-heading, conditional-if, currency, description-heuristics, empty-table-cell, hedge-note, missing-frontmatter, not-construction, review-flag, undefined-heading-term). | ~100-500 B each | 2026-04-03 (frozen) |
| `operations/tests/copy-lint-fixtures/fixtures/fail/*.mdx` | 13 fail MDX fixtures matching the expected files above. | 86-477 B each | 2026-04-03 (frozen) |
| `operations/tests/copy-lint-fixtures/fixtures/pass/*.mdx` | 3 clean MDX fixtures (clean-guide, clean-concept, clean-reference). | — | 2026-04-03 |
| `operations/tests/fixtures/mdx-safe-markdown/repair-cases.json` | Repair input/expected pairs. | 5,902 B | 2026-04-03 |
| `operations/tests/fixtures/mdx-safe-markdown/validator-cases.json` | Validator input/expected pairs. | 3,980 B | 2026-04-03 |
| `operations/tests/fixtures/pipelines/*.mdx + wf-test.yml` | 8 ephemeral pipeline-test fixtures (em-test, imp, own, owner, q-test, sp-test, wcag, wf-test). Created and consumed by `pipeline-functional-tests.js` / `dispatch-concern-simulation.js`. | 21-106 B each | 2026-05-22 (regenerated each run) |
| `operations/tests/reports/domain-page-load-report.{json,md}` | Stale domain audit report — pre-dated checked-in artifact. | 2,550 B / 256 B | 2026-04-03 (stale — separately governed via generated-artifacts.json) |
| `operations/tests/reports/{diffs,errors,repo-audit-pipeline-unit}/` | Sub-report folders. | — | 2026-04-28 |
| `operations/tests/script-index.md` | Auto-generated tests script index. | 22,722 B | 2026-05-22 |

---

## Hooks (`.githooks/`)

Every hook file inventoried below.

### `.githooks/pre-commit` (24,154 B, mtime 2026-05-22) — Bash

- **Purpose:** Hard gates only (syntax, security, safety). Soft checks moved to GitHub Actions PR workflows.
- **Gates enforced (5):**
  1. **Codex branch isolation** — blocks Codex sessions committing to `docs-v2` (detects via `CODEX_SHELL`, `CODEX_THREAD_ID`, `CODEX_CI`, `CODEX_INTERNAL_ORIGINATOR_OVERRIDE`). On `codex/*` branches runs three validators: `validate-codex-task-contract.js`, `validate-locks.js`, `check-no-ai-stash.sh`.
  2. **File deletion guard** — blocks unless `--trailer "allow-deletions=true"` or `ALLOW_DELETIONS=1`. Has a carve-out: detects move-to-archive (matching blob hash to `v2/x-archived/`) and allows that deletion without override.
  3. **`.allowlist` protection** — blocks any change to `.allowlist` unless `--trailer "allowlist-edit=true"` or `ALLOWLIST_EDIT=1`.
  4. **docs.json `/redirect` integrity + root structure** — inline Node script compares HEAD vs. staged docs.json redirect entries; allows if matches scoped-navigation source. Folder allowlist check via `check-folder-allowlist.js`. Root allowlist check parses `.allowlist`.
  5. **`v1/` freeze** — blocks any change to `v1/`.
- **Runtime budget:** Target <5 seconds (per README).
- **Failure paths:** exits 1 on any hard-gate violation. SKIP_ALL=1 exits 0 with warning.
- **Dependencies:** `git`, `node`, `bash`, inline Node JSON parser, `operations/scripts/validators/governance/repo/check-folder-allowlist.js`, codex validators under `operations/scripts/validators/governance/compliance/` and `operations/scripts/validators/ai/codex/`.
- **JSDoc header compliance:** declares `@script pre-commit`, `@category orchestrator`, `@purpose infrastructure:pipeline-orchestration`, `@scope .githooks`, `@domain docs`, `@needs R-R29`, `@purpose-statement`, `@pipeline P1`, `@usage`. **Note:** uses `@category` and `@domain` rather than `@type`/`@concern`/`@niche` — does not match the 11-tag JSDoc schema documented in `docs-guide/frameworks/script-framework.mdx`. Missing the unified `@type`/`@concern`/`@niche` triad.
- **Bypass paths:** `SKIP_STRUCTURE_CHECK=1`, `SKIP_ALL=1`, `--trailer "allowlist-edit=true"`, `--trailer "allow-deletions=true"`, `--trailer "allow-main-commit=true"`, `ALLOW_MAIN_COMMIT=1`, `ALLOWLIST_EDIT=1`, `ALLOW_DELETIONS=1`.

### `.githooks/pre-push` (4,435 B, mtime 2026-04-03) — Bash

- **Purpose:** Pre-push enforcement for `codex/*` branches and push-to-`docs-v2` protection.
- **Gates enforced:**
  1. **docs-v2 push isolation** — blocks Codex sessions pushing to `refs/heads/docs-v2` unless `ALLOW_MAIN_PUSH=1`.
  2. **Codex task contract validation** — calls `validate-codex-task-contract.js --branch ... --require-committed-work --quiet`.
  3. **Codex local lock validation** — calls `operations/scripts/validators/ai/codex/validate-locks.js`. Missing validator = block.
  4. **AI stash policy** — calls `check-no-ai-stash.sh`.
  5. **Codex branch deletion guard** — blocks delete-by-push of `codex/*` branches.
  6. **Non-fast-forward protection** — uses `git merge-base --is-ancestor` per pushed ref. Override: `ALLOW_CODEX_FORCE_PUSH=1`.
- **Runtime budget:** Unbounded (validator-driven). No explicit timeout.
- **Failure paths:** exits 1 on any block.
- **Dependencies:** `git`, `node`, `bash`, codex validators.
- **JSDoc header compliance:** `@script pre-push`, `@category orchestrator`, `@purpose infrastructure:pipeline-orchestration`, `@scope`, `@domain docs`, `@needs R-R29`, `@purpose-statement`, `@pipeline P2`, `@usage`. Same gap as `pre-commit` — no `@type`/`@concern`/`@niche` triad.
- **Bypass paths:** `ALLOW_MAIN_PUSH=1`, `ALLOW_CODEX_FORCE_PUSH=1`.

### `.githooks/pre-commit-no-deletions` (2,369 B, mtime 2026-03-18) — Bash

- **Purpose:** Variant pre-commit that hard-blocks ALL file deletions except generated domain-link maps at `snippets/data/<domain>/hrefs.jsx`. Safety net.
- **Gates:** single gate — blocks all deletions.
- **Runtime budget:** trivial.
- **Failure paths:** exits 1 on deletions. No override flag — uses raw `git commit --no-verify` instruction in the printed message.
- **Dependencies:** `git`.
- **JSDoc header compliance:** Declares `@script pre-commit-no-deletions`, `@category orchestrator`, `@purpose infrastructure:pipeline-orchestration`, `@scope`, `@owner docs`, `@needs R-R29`, `@purpose-statement`, `@pipeline manual — not yet in pipeline`, `@usage`. **Not wired to anything.** `@pipeline manual — not yet in pipeline`. Same 11-tag JSDoc gap.
- **Bypass paths:** `git commit --no-verify` only.

### `.githooks/post-commit.disabled` (388 B, mtime 2026-03-18) — Bash

- **Purpose:** Disabled Notion local sync hook (`LIVEPEER_NOTION_LOCAL_SYNC_HOOK`). Delegates to `tools/notion/local-post-commit-sync.sh`.
- **Status:** Disabled (`.disabled` suffix). Not invoked.
- **JSDoc header compliance:** **NO JSDoc header at all**. Only a single bare comment `# LIVEPEER_NOTION_LOCAL_SYNC_HOOK`.

### `.githooks/verify.sh` (15,671 B, mtime 2026-04-09) — Bash

- **Purpose:** Pre-commit sub-hook that verifies file-walker is available and runs structural checks on staged files. **Not invoked from `pre-commit`** — orphaned wrt the current pre-commit gates list (pre-commit-hook only does the 5 hard gates).
- **Gates (7 internal checks):**
  1. MDX frontmatter sanity (head + delimiter count).
  2. JSON syntax via `node -e "JSON.parse(...)"`.
  3. Shell script syntax via `bash -n`.
  4. JavaScript syntax via `node --check` (skips `.jsx`).
  5. Mintlify config validation (if `mintlify` on PATH).
  6. Snippets import paths — must be `/snippets/...` absolute.
  7. Browser validation — auto-install Puppeteer if missing; 30s timeout with 2 retries; max 10 pages.
- **Runtime budget:** Up to 90s on browser leg alone (3× 30s).
- **Failure paths:** Aggregates violations; exits 1 if any > 0. Browser step has fallbacks for puppeteer-missing, server-not-available, timeout, syntax error.
- **Dependencies:** `node`, `git`, `bash`, optional `mintlify`, `puppeteer`, `operations/tests/utils/file-walker.js`, `.githooks/verify-browser.js`.
- **JSDoc header compliance:** Declares `@script verify`, `@type dispatch`, `@concern governance`, `@niche hooks`, `@purpose tooling:dev-tools`, `@description`, `@mode dispatch`, `@pipeline manual — developer tool`, `@scope .githooks`, `@usage`. **Uses the 11-tag schema** — closer to canonical but missing `@dualmode`, `@needs`, `@owner`. Not full 11-tag.

### `.githooks/verify-browser.js` (12,748 B, mtime 2026-04-09) — Node

- **Purpose:** Headless browser validation of staged MDX files via Puppeteer. Caps at 10 pages, 15s timeout each.
- **Gates:** Console-error, page-error, request-failure (filtered to `/snippets/` and `/v2/`), empty-render, "Failed to render" body text.
- **Runtime budget:** 15s/page × ≤10 pages = ≤150s.
- **Failure paths:** exits 1 on any page failure. exits 0 (warning) if no MDX files staged. exits 0 if server unavailable (treated as optional).
- **Dependencies:** `puppeteer` (multi-path resolver: `tools/`, `tests/`, root `node_modules`), `.githooks/server-manager.js`, `operations/tests/utils/file-walker.js`.
- **JSDoc header compliance:** `@script verify-browser`, `@type dispatch`, `@concern governance`, `@niche hooks`, `@purpose tooling:dev-tools`, `@description`, `@mode dispatch`, `@pipeline manual — developer tool`, `@scope .githooks`, `@usage`. Same 11-tag-incomplete shape.

### `.githooks/server-manager.js` (14,123 B, mtime 2026-04-09) — Node

- **Purpose:** Mintlify dev server lifecycle (start, health-check, stop) for browser tests. Per-worktree PID file via SHA1 of repo root. Default port 3145, falls back to ports 3000-3010, can detect actual port from log file.
- **Gates:** N/A — utility module. `module.exports = { ensureServerRunning, isServerRunning, waitForServer, startServer, stopServer, getServerUrl }`.
- **Runtime budget:** `SERVER_START_MAX_ATTEMPTS=150`, `SERVER_START_INTERVAL_MS=2000` → up to 5 minutes to start.
- **Failure paths:** Throws on `Server failed to start`. Has signal handlers (`SIGINT`, `SIGTERM`) + `process.on('exit')` for cleanup. Detached child + `unref()` so parent can exit.
- **Dependencies:** `child_process`, `crypto`, `http`, `fs`, `path`, `os`. Conditionally spawns `lpd dev --scoped` when `MINT_SCOPE_PREFIXES` / `MINT_SCOPE_TABS` env vars set.
- **JSDoc header compliance:** `@script server-manager`, `@type dispatch`, `@concern governance`, `@niche hooks`, `@purpose tooling:dev-tools`, `@description`, `@mode dispatch`, `@pipeline manual — legacy browser-validation module imported by .githooks/verify-browser.js`, `@scope .githooks`, `@usage`. **Note:** declares itself as legacy in its own header.

### `.githooks/install.sh` (2,053 B, mtime 2026-04-09) — Bash

- **Purpose:** Worktree-local `core.hooksPath=.githooks` setup. Routes hooks via tracked repo files instead of `.git/hooks/` copy.
- **Gates:** N/A — installer.
- **Runtime budget:** trivial.
- **Failure paths:** exits 1 on git resolution failure, missing `.githooks` dir, missing `pre-commit`/`pre-push` entrypoints, failure to resolve worktree `core.hooksPath`.
- **Dependencies:** `git` with worktree config support.
- **JSDoc header compliance:** `@script install`, `@type dispatch`, `@concern governance`, `@niche hooks`, `@purpose tooling:dev-tools`, `@description`, `@mode dispatch`, `@pipeline manual — developer tool`, `@scope .githooks`, `@usage`. Same shape as verify.sh.

### `.githooks/GOVERNANCE.md` (948 B, mtime 2026-04-07)

Documents owner `@livepeer/docs-team`, references `docs-guide/frameworks/script-framework.mdx`, states JS hooks follow 11-tag JSDoc + bash hooks follow `verify.sh` patterns. Lists 7 files in a table. **`pre-commit-no-deletions` and `post-commit.disabled` are not listed**.

### `.githooks/README.md` (2,105 B, mtime 2026-04-03)

Operator quick reference. Points to `docs-guide/policies/infrastructure-principles.mdx`, `docs-guide/policies/quality-gates.mdx`. Documents 5 hard gates of `pre-commit`, 5 owned concerns of `pre-push`, and references `ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`. Test execution matrix link points to `tests/WHEN-TESTS-RUN.md` (legacy path — actually now at `operations/tests/WHEN-TESTS-RUN.md`).

### `.githooks/BYPASS.md` (2,128 B, mtime 2026-04-03)

Documents the override matrix: human-only trailers (`allowlist-edit`, `allow-deletions`, `allow-main-commit`), bypass env vars (`SKIP_STRUCTURE_CHECK`, `SKIP_ALL`), retired flags (`SKIP_STYLE_CHECK`, `SKIP_VERIFICATION`, `SKIP_TESTS`, `DISABLE_PRECOMMIT_STAGED_CACHE`). Lists acceptable use cases.

### `.githooks/verify-browser-README.md` (3,244 B, mtime 2026-03-18)

User guide for `verify-browser.js`. **References stale paths**: `v2/pages/07_resources/documentation-guide/style-guide.mdx` (this 07_-prefixed pages tree was migrated; canonical now `v2/resources/documentation-guide/style-guide.mdx`). References `scripts/README-test-v2-pages.md` (path doesn't exist post-`operations/scripts/` migration).

### `.githooks/script-index.md` (701 B, mtime 2026-05-22)

Auto-generated by `script-docs.test.js`. Lists 3 of the 7 hook scripts. **Missing from index:** `install.sh`, `verify.sh`, `verify-browser.js`, `server-manager.js`. The other hook scripts are excluded by the generator's filter (only flagged `pre-commit*` and `pre-push`).

---

## Cross-slice findings

### Tests/scripts pairing mismatches

- **Validator without test**: `operations/scripts/validators/governance/compliance/check-mintlify-canonical-sync.js` — test exists (`check-mintlify-canonical-sync.test.js`), but the docs-guide canonical sync remediator (`sync-mintlify-canonical-consumers.js`) is only indirectly covered.
- **Test without canonical wiring**: `pre-commit-no-deletions` declares `@pipeline manual — not yet in pipeline`. It's not invoked by anything in `install.sh`, not referenced by `pre-commit`, has no test. It exists as a parallel safety net that nobody uses.
- **Selftest pair gap**: `v2-link-audit.selftest.js` and `v2-wcag-audit.selftest.js` exist, but `domain-pages-audit.js`, `openapi-reference-audit.js`, `dispatch-concern-simulation.js`, `pipeline-functional-tests.js`, `pipeline-smoke-test.js`, and `mdx-component-runtime-smoke.js` have **no selftest companion** — five integration tests without HTTP/state fixture coverage.
- **`v2-link-audit.js` and `imports.test.js`** are compatibility wrappers that delegate to canonical scripts under `operations/scripts/audits/content/health/`. The originals are kept because the legacy entrypoint names appear in `docs.json`, `docs-guide/policies/source-of-truth-policy.mdx`, and npm scripts. **Cannot be removed without a propagation sweep.**
- **`browser.test.js` cross-dependency:** imports `getV2Pages` directly from `operations/scripts/validators/content/structure/test-v2-pages.js`. A test importing from a script under `operations/scripts/` (instead of using a shared helper) couples the test layer to the validator's internal export shape.

### Governance config consumed nowhere

None of the 6 governance configs is fully orphaned. **However**:

- `operations/governance/config/repo-governance-surfaces.json` has `legacy_bridge_inventory: []` and `bridge_mode: "retired"`, indicating the bridge-mode migration is complete. The field is now permanently empty and serves only as schema documentation.
- `operations/governance/config/agent-write-governance.json` declares `bridge_mode: "staged"` — the agent-write contract is still in transition, not fully ratified.

### Hooks that violate the JSDoc spec they enforce

`script-docs.test.js` is the canonical enforcer of the 11-tag JSDoc standard (`@script`, `@type`, `@concern`, `@niche`, `@purpose`, `@description`, `@mode`, `@pipeline`, `@scope`, `@usage`, plus context-dependent `@needs`, `@owner`, `@dualmode`).

| Hook script | Schema variant used | Status |
|---|---|---|
| `pre-commit` | Uses `@category orchestrator`, `@domain docs`, `@needs`, `@purpose-statement`, `@pipeline`, `@usage` | Wrong axis — uses orchestrator-class 6-tag instead of script-class 11-tag |
| `pre-push` | Same as pre-commit | Same gap |
| `pre-commit-no-deletions` | Same — `@category`, `@owner`, `@purpose-statement` | Same gap |
| `verify.sh` | Uses `@type dispatch`, `@concern governance`, `@niche hooks`, `@mode dispatch` | Closer to canonical but missing `@dualmode`, `@needs`, `@owner` |
| `verify-browser.js` | Same as verify.sh | Same gap |
| `server-manager.js` | Same | Same |
| `install.sh` | Same | Same |
| `post-commit.disabled` | None — single bare line comment | Wholesale non-compliance |
| `pre-commit-no-deletions` | `@category orchestrator` | Missing 11-tag triad |

**Pattern:** there are two competing JSDoc schemas in active use across hooks — the orchestrator-class 6-tag (`@category`, `@purpose`, `@scope`, `@owner`/`@domain`, `@needs`, `@purpose-statement`, `@pipeline`, `@usage`) on the entry-point hooks, and the dispatch-class near-11-tag (`@type`, `@concern`, `@niche`, `@mode`) on the support files. Neither matches the documented 11-tag standard exactly. This is the "218-script gap" the previous audit flagged.

### Baselines that are stale

- `operations/tests/baselines/console-baseline.json` — generated `2026-05-04T09:22:15.131Z`. 18 days old at slice date. Likely stale wrt to current docs.json route table. Should be regenerated whenever `docs.json` materially changes; no automation enforces this.
- `operations/tests/reports/domain-page-load-report.{json,md}` — checked-in artifact dated 2026-04-03. The script outputs to `workspace/reports/page-audits/domain-page-load-report.json` per modern flow, so the `operations/tests/reports/` copy is a stale fossil.
- `operations/tests/reports/diffs/`, `errors/`, `repo-audit-pipeline-unit/` — checked-in 2026-04-28. Should be `workspace/reports/_local/**` per the agent-write-governance and root-governance manifests (forbidden as tracked).

---

## Consolidation matrix

| File | Action | Target canonical home | Rationale |
|---|---|---|---|
| `operations/governance/GOVERNANCE.md` | Edit | Stays — but fix the "validators/, repairs/" claim | Documents subfolders that don't exist. Validators live at `operations/scripts/validators/governance/**`, remediators at `operations/scripts/remediators/**`. |
| `operations/governance/config/*.json` (all 6) | Keep | `operations/governance/config/` (canonical) | All actively consumed. Already canonical per `repo-governance-surfaces.json`. |
| `operations/governance/config/agent-write-governance.json` | Promote | Same path | `bridge_mode: "staged"` — finalise migration and flip to `"retired"`. |
| Add `*.schema.json` shadow files | Create | `operations/governance/config/*.schema.json` | Currently schemas are embedded only in `version` field + dispersed in `tools/lib/governance/*.js`. A JSON Schema would let `node --check` style validation gate config edits. Optional. |
| `operations/tests/baselines/console-baseline.json` | Move | `workspace/reports/_local/baselines/` OR add scheduled regeneration | Untracked-local per root-governance.json, OR ensure it's actually regenerated. Currently stale at 18 days. |
| `operations/tests/reports/domain-page-load-report.{json,md}` | Delete | (canonical now `workspace/reports/page-audits/`) | Stale duplicate. Real generator writes to workspace path. |
| `operations/tests/reports/{diffs,errors,repo-audit-pipeline-unit}/` | Move | `workspace/reports/_local/**` | Forbidden as tracked per agent-write-governance.json + root-governance.json. |
| `operations/tests/copy-lint-fixtures/` | Keep | Same path | Test fixtures, frozen, no drift. |
| `operations/tests/fixtures/mdx-safe-markdown/` | Keep | Same path | Test fixtures. |
| `operations/tests/fixtures/pipelines/` | Keep (gitignore or auto-clean) | Same path | Pipeline test ephemera regenerated each run. Should be gitignored if not already. |
| `operations/tests/config/codex-issue-policy.json` | Promote | `operations/governance/config/codex-issue-policy.json` | Inconsistent home — codex issue label policy is governance config, not test config. Sibling of `governance-approval-policy.json`. |
| `operations/tests/config/spell-dict.json` | Keep | Same path | Spell dict is test-config legitimately. |
| `operations/tests/unit/components/*/` (5 empty subdirs) | Decide | Either populate or remove | 5 `.gitkeep` placeholders with zero tests despite 132 components in registry. The scaffold has been unfilled for >2 months. |
| `operations/tests/integration/v2-link-audit.js` | Keep (compatibility) | Same path | Wrapper to canonical `page-links-audit.js`. Documented as transitional. |
| `operations/tests/unit/imports.test.js` | Keep (compatibility) | Same path | Wrapper to canonical `page-imports-audit.js`. |
| `operations/tests/unit/links-imports.test.js` | Keep (compatibility) | Same path | Alias to `links.test.js`. |
| `operations/tests/unit/mdx-sanitise.test.js` | Audit | Same path | Missing JSDoc header. Read full file and add canonical header or retire. |
| `operations/tests/unit/post-remediation-verify.test.js` | Audit | Same path | Header lacks `@scope` declaration and `@pipeline`. |
| `operations/tests/script-index.md` | Keep | Same path | Auto-generated. |
| `.githooks/pre-commit` | Update header | Same path | Replace `@category orchestrator` 6-tag schema with canonical 11-tag (`@type`, `@concern`, `@niche` + dependent tags). |
| `.githooks/pre-push` | Update header | Same path | Same. |
| `.githooks/pre-commit-no-deletions` | Decide | Same path | `@pipeline manual — not yet in pipeline` — either wire into install.sh as an opt-in safety net OR retire. Currently dead code. Same JSDoc gap. |
| `.githooks/post-commit.disabled` | Delete or revive | Same path | Disabled Notion sync. If genuinely retired, remove. If reviving, give it a JSDoc header and rename to `post-commit`. |
| `.githooks/verify.sh` | Update header + decide invocation | Same path | Declares 7 internal checks but **not invoked by current `pre-commit`**. Either re-wire into pre-commit (with a SKIP flag) or retire as ambient utility. |
| `.githooks/verify-browser.js` | Update header | Same path | Add `@dualmode`, `@needs`, `@owner` to bring to 11-tag. |
| `.githooks/server-manager.js` | Update header | Same path | Drop self-described "legacy" wording — this is the active server harness for `browser.test.js`, `verify-browser.js`, and `v2-wcag-audit.js`. Not legacy. |
| `.githooks/install.sh` | Update header | Same path | Same. |
| `.githooks/GOVERNANCE.md` | Edit | Same path | Add `pre-commit-no-deletions` and `post-commit.disabled` to the files table; clarify enforcement vs. variant relationship. |
| `.githooks/README.md` | Edit | Same path | Fix stale path `tests/WHEN-TESTS-RUN.md` → `operations/tests/WHEN-TESTS-RUN.md`. |
| `.githooks/BYPASS.md` | Keep | Same path | Accurate. |
| `.githooks/verify-browser-README.md` | Edit | Same path | Fix stale paths to `v2/pages/07_resources/...` and `scripts/README-test-v2-pages.md`. |
| `.githooks/script-index.md` | Regenerate | Same path | Currently lists 3 of 7 hooks; should list all scripts. Filter bug in generator (only `pre-commit*` and `pre-push`). |

---

## Pipeline-validation note

The pipeline-functional-tests + pipeline-smoke-test integration tests (added 2026-05-22) are a meaningful addition. They formalise the D-GOV-03 "every pipeline proves its detect-repair-verify cycle" claim. But neither is wired into `.github/workflows/test-suite.yml` yet. Until they are, the proof-by-test exists in the code but not in the gates.

---

**End of slice.**
