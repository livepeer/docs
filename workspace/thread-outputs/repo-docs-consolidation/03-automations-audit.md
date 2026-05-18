# Automations — Product Audit (2026-05-18)

## What this repo's automation layer actually delivers

The automation layer is the repo's operating system. The repo is ownerless and self-governed: there is no single human responsible for keeping content fresh, links unbroken, navigation in sync, governance maps current, or generated artifacts aligned with their sources. The automation layer fills that role. It validates new contributions before they land, regenerates derived artifacts the moment a source changes, ingests live data from external services (releases, contracts, exchanges, Discord, RSS, YouTube), repairs deterministic drift (style tokens, frontmatter, SEO metadata, em-dashes, EN-GB spelling), and surfaces what it cannot fix as backlog work.

Architecturally the layer is split across four execution surfaces with a single declared taxonomy. Workflow YAML files in `.github/workflows/` are dispatchers only — they bind triggers, permissions, and orchestration; the typed work lives in `operations/scripts/`. Every script is classified by `type` (one of seven), `concern` (one of seven), and `niche` (sub-concern), declared via an 11-tag JSDoc header that is enforced at commit time. Pre-commit and pre-push hooks in `.githooks/` run the hard gates locally — MDX syntax, redirect integrity, no-deletion, codex branch isolation. PR CI re-runs blocking checks against changed files; scheduled CI runs broad sweeps; manual dispatch covers repair waves.

The product promise to a contributor is simple: ship a change, the automations will tell you what's broken and fix what can be fixed deterministically. The product promise to a maintainer is: drift in any governed surface (catalog, registry, sitemap, llms.txt, contract addresses, release version) is detected, named, and either auto-repaired or filed as an actionable issue.

## Features (each)

### Feature: GitHub Actions surface + 7-prefix taxonomy

**What it is:** The full GitHub Actions surface acts as the repo's CI/CD and scheduled-job spine. Every workflow file is a dispatcher (no business logic), classified by a strict naming convention: `type-concern-verb-name.yml`. The seven types are validator, generator, integrator, remediator, audit, dispatch, interface. The seven concerns are copy, health, maintenance, discoverability, governance, brand, integrations.
**Current state:** Production (D-ACT-01 through D-ACT-08 locked).
**Last touched:** `docs-guide/frameworks/github-actions.mdx` last commit 2026-04-08; live taxonomy verified 2026-05-18 — 53 dispatchers in `.github/workflows/` conform to the 7-prefix taxonomy with zero off-taxonomy violations.
**Lives at:** `.github/workflows/`, framework at `docs-guide/frameworks/github-actions.mdx`, full spec at `.github/workspace/framework-canonical.md`.
**Validated against source:** Live count vs feature-page claim — the feature page says 14+9+9+5+5+5+3 = 50 workflows but live count is 14 validator, 9 generator, 9 integrator, 5 interface, 5 remediator, 5 audit, 3 dispatch = 50 named workflows + 3 README/governance md files in the same directory + 2 archived locations.
**What's complete:** Naming convention enforced. Dispatcher-only model adopted. 7 types and 7 concerns locked as enums. Generate/verify pairs declared as a requirement.
**What's incomplete / community-help opportunity:** No CI step today validates that every `generator-*` has a matching `validator-*` with `--check` — the rule is documented but not enforced by a linter.
**Recommended canonical home:** `docs-guide/frameworks/github-actions.mdx` remains canonical; deprecate prose duplication in `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx`.

### Feature: Validator workflows

**What it is:** Blocking and advisory pass/fail gates. The 14 live validators cover broken links, page rendering, page structure, copy standards, content quality suite, OpenAPI references, AI sitemap, llms.txt, AI companions, docs index, catalogs, codex compliance, governance map, workflow governance.
**Current state:** Production.
**Last touched:** Names align with D-ACT-04 rename pass (2026-04-15).
**Lives at:** `.github/workflows/validator-*.yml` (14 files); script implementations under `operations/scripts/validators/{ai,components,content,governance}/`.
**Validated against source:** 14 dispatchers, taxonomy compliant. Script-side taxonomy uses concerns `{ai, components, content, governance}` — but workflow-side concerns use the wider 7-concern set `{copy, health, maintenance, discoverability, governance, brand, integrations}`. **There are two concern enums in play, and they disagree.**
**What's complete:** Hard gates wired into pre-commit and required PR checks. Generate/verify pairs in place for discoverability artifacts (ai-sitemap, llms-files, companions) and maintenance artifacts (docs-index, catalogs).
**What's incomplete / community-help opportunity:** The two concern enums (4 script-side vs 7 workflow-side) are an unresolved governance defect. The framework spec needs a single concern enum, or an explicit mapping table.
**Recommended canonical home:** Resolve concern-enum split in `docs-guide/frameworks/github-actions.mdx` and `docs-guide/policies/script-governance.mdx`.

### Feature: Generator workflows

**What it is:** Workflows that rebuild derived artifacts when their declared source set changes. The 9 live generators produce: AI sitemap, AI companions (per-page LLM context), llms.txt files, action docs, component registry, docs-index.json, OG images, catalogs (scripts catalog + workflows catalog), SDK clients.
**Current state:** Production.
**Last touched:** 2026-04-15 D-ACT-04 rename pass.
**Lives at:** `.github/workflows/generator-*.yml`; script implementations under `operations/scripts/generators/{ai,components,content,governance,media}/`.
**Validated against source:** 9 dispatchers confirmed. Generator script taxonomy has 5 concern folders (`{ai, components, content, governance, media}`) — one more than the spec-declared 4.
**What's complete:** Each committed generated artifact is declared in `operations/governance/config/generated-artifacts.json` with class, commit-policy, hook-policy, ci-policy, delta-strategy. Catalog generation is self-documenting (banner comment names the source script and run command).
**What's incomplete / community-help opportunity:** The `media/` concern subfolder under generators is undocumented in the script-framework spec. Either add `media` to the concern enum or move scripts to an existing concern.
**Recommended canonical home:** Keep in `docs-guide/frameworks/github-actions.mdx`; cross-link to `docs-guide/policies/generated-artifact-and-hook-governance.mdx` for the manifest contract.

### Feature: Integrator workflows

**What it is:** Workflows that pull data from external systems into the repo. Live integrators cover: changelogs, showcase submissions, translations, config flags, contract addresses (live + shadow), exchanges data, large assets, release version.
**Current state:** Production with one known gap.
**Last touched:** 2026-04-15 D-ACT-04 rename.
**Lives at:** `.github/workflows/integrator-*.yml`; scripts under `operations/scripts/integrators/{ai,content,copy,governance,maintenance}/`.
**Validated against source:** 9 dispatchers confirmed. Script-side concerns for integrators (5 folders) again differ from the 4-concern script-framework spec.
**What's complete:** Live data pipelines for go-livepeer release, contract addresses, CoinGecko exchanges, GitHub releases/discussions, RSS feeds, Discord announcements, Luma events.
**What's incomplete / community-help opportunity:** **`integrator-maintenance-update-contract-addresses.yml` has never been dispatched.** Flag (P0, 2026-03-31): the workflow exists only on `docs-v2-dev` — GitHub Actions only indexes workflows on the default branch, so the workflow is invisible until cherry-picked to `docs-v2`. Root cause noted in flag: "no gate in the pipeline design requiring workflow dispatch verification before marking 'done'". This is both an immediate cherry-pick task and a governance gap.
**Recommended canonical home:** `docs-guide/frameworks/github-actions.mdx` for taxonomy; track cherry-pick task in master backlog under thread "Contracts & Changelogs".

### Feature: Remediator workflows

**What it is:** Deterministic auto-repair. The 5 live remediators repair: EN-GB style (US spelling, banned phrases), frontmatter + em-dashes, style tokens (brand surfaces), SEO metadata, governance pipelines.
**Current state:** Production with two known script bugs documented in flags.
**Last touched:** 2026-04-15.
**Lives at:** `.github/workflows/remediator-*.yml`; scripts under `operations/scripts/remediators/{components,content,governance}/`.
**Validated against source:** 5 dispatchers confirmed.
**What's complete:** All five remediators support `--write` and `--verify` modes. The Styles Governance thread (closed 2026-04-09) shipped the self-documenting generator and regression-check step.
**What's incomplete / community-help opportunity:**
- (Flag, 2026-05-04, P1) `remediate-em-dashes.js` had a frontmatter block-scalar zone-detection bug — fixed in the 2026-05-04 sweep but the regression test for `description: >-` and `description: |` block scalars is not yet in CI.
- (Flag, 2026-05-04, P1) `remediate-us-spelling.js` zoned the entire frontmatter as skip, missing user-facing keys (title, sidebarTitle, description, keywords). Fixed, but no regression coverage.
- (Flag, 2026-05-04, medium) 38 UK-spelling false positives remain in component-library prop-doc tables where `color/Color/catalog` is the documented prop name. Needs a backtick-prop-ref skip zone or per-file exclusion.
- (Flag, 2026-05-04, medium) `language-rules.json` converts `program → programme` unconditionally. UK English keeps "program" for the computing sense.
**Recommended canonical home:** `docs-guide/frameworks/github-actions.mdx` + remediator-specific notes in `docs-guide/standards/voice-and-copy.mdx`.

### Feature: Audit workflows

**What it is:** Read-only scheduled scans that report but do not modify. 5 live audits: workspace retention, content quality, data freshness, external links, page integrity.
**Current state:** Production.
**Last touched:** 2026-04-15.
**Lives at:** `.github/workflows/audit-*.yml`; scripts under `operations/scripts/audits/{components,content,governance}/`.
**Validated against source:** 5 dispatchers confirmed.
**What's complete:** Page integrity, content freshness (TODO/TBD/Coming Soon markers, thin pages, stale content), external link audit, workspace retention enforcement.
**What's incomplete / community-help opportunity:** Audit outputs go to step summaries and artifacts but do not automatically open issues on failure. The "scan, report, act" pipeline pattern (Pattern D) is documented but the "act" stage is largely missing — failing audits do not become tickets.
**Recommended canonical home:** Add an explicit "audit → issue" hook to the framework spec.

### Feature: Dispatch workflows

**What it is:** Manual orchestrators that fan out to multiple scripts. 3 live dispatchers: social-feeds update, post-merge governance sync, catalog checks.
**Current state:** Production.
**Last touched:** 2026-04-15.
**Lives at:** `.github/workflows/dispatch-*.yml`; scripts under `operations/scripts/dispatch/{ai,content,governance}/`.
**Validated against source:** 3 dispatchers confirmed.
**What's complete:** Post-merge governance sync (writes back generated artifacts after merges), catalog drift checks, social-feeds orchestrator.
**What's incomplete / community-help opportunity:** Dispatchers do not currently emit a structured run summary that downstream automation can consume. Each child reports its own status; there is no aggregate "this dispatch run repaired X, generated Y, flagged Z" output.
**Recommended canonical home:** Framework spec.

### Feature: Interface workflows

**What it is:** Workflows that react to issue/PR/external events without writing source content. 5 live interfaces: assign-reviewers, close-linked-issues, index-issues, intake-discord-issues, label-issues.
**Current state:** Production.
**Last touched:** 2026-04-15.
**Lives at:** `.github/workflows/interface-*.yml`; scripts under `operations/scripts/interfaces/`.
**Validated against source:** 5 dispatchers confirmed. Script-side `interfaces/` folder exists and is documented in the feature page (8 scripts).
**What's complete:** Discord intake → repository_dispatch → GitHub issue creation pipeline (Phase 1, schema 1.1.0). Issue auto-labelling by parsed body headings. Rolling docs-v2 issue indexer (one canonical index issue, marker-based discovery). Auto-assign reviewers.
**What's incomplete / community-help opportunity:** No equivalent issue-intake pipeline from GitHub Discussions or RSS-detected community questions. Discord intake is the only event-driven contributor surface.
**Recommended canonical home:** `docs-guide/frameworks/github-actions.mdx` + Discord runbook at `snippets/_workspace/archive/assets-scripts/README-discord-issue-intake-workflow.md`.

### Feature: operations/scripts taxonomy + JSDoc 11-tag governance

**What it is:** A three-tier classification (`<type>/<concern>/<niche>`) for every script under `operations/scripts/`. Every script must carry an 11-tag JSDoc header. Pre-commit and CI validate header presence and tag format.
**Current state:** Partially compliant.
**Last touched:** `docs-guide/policies/script-governance.mdx` 2026-04-05; `docs-guide/frameworks/script-framework.mdx` 2026-04-08.
**Lives at:** `docs-guide/policies/script-governance.mdx`, `docs-guide/frameworks/script-framework.mdx`, full spec `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`.
**Validated against source:** Live counts (2026-05-18): 250 .js + 11 .sh + 2 .py = 263 script files under `operations/scripts/`. Generated catalog claims 366 indexed scripts (includes scripts outside `operations/scripts/` — `.github/scripts/`, `tools/`, `operations/tests/`).
**What's complete:** Framework documented. Decision tree, niche tables, file-layout standard, REPO_ROOT pattern all canonical.
**What's incomplete / community-help opportunity:**
- **218 scripts marked template non-compliant** in `workspace/reports/repo-ops/SCRIPT_AUDIT.json` (feature page, automations.mdx line 95). This is the largest single automation backlog item.
- Sampled JSDoc headers show field-level non-compliance: validator `check-grammar-en-gb.js` uses `@concern brand` and `@niche grammar` but `@purpose` is **empty**; integrator `studio-docs-migration.js` has malformed `@scope` containing the literal `@usage` string; generator `generate-governance-map.js` has empty `@niche` and `@purpose`. The 11-tag schema is published but the fillers are absent.
- Removed tags (`@category`, `@domain`, `@needs`, `@purpose-statement`, `@owner`) still appear in active hook scripts (`.githooks/pre-commit`, `.githooks/pre-push`).
**Recommended canonical home:** Keep policy at `docs-guide/policies/script-governance.mdx`; track the 218-script repair as a P1 backlog item.

### Feature: .githooks pipeline

**What it is:** Local git hooks that run hard gates before commit and push. The hook surface is the first line of defence against MDX syntax breaks, docs.json redirect breaks, accidental file deletion, and codex branch contamination.
**Current state:** Production, with header drift.
**Last touched:** Hook source files actively used.
**Lives at:** `.githooks/{pre-commit, pre-commit-no-deletions, pre-push, post-commit.disabled, verify.sh, verify-browser.js, install.sh, server-manager.js}`.
**Validated against source:** `pre-commit` enforces 5 hard gates: MDX syntax, docs.json integrity, no-deletion, .allowlist/v1 protection, codex branch isolation. `pre-push` enforces codex task-contract, lock overlap, stash-policy, non-fast-forward push blocking. `verify-browser.js` runs headless browser MDX render checks when `mintlify dev` is alive on the configured port. `server-manager.js` orchestrates the dev server (used by the broader render-verify pipeline).
**What's complete:** Hooks are installed via `bash .githooks/install.sh` or `lpd hooks install` (`tools/lpd` CLI exists). Hard gate scope is documented and limited.
**What's incomplete / community-help opportunity:**
- **Hook scripts use retired JSDoc tags.** `pre-commit` and `pre-push` declare `@category orchestrator`, `@domain docs`, `@needs R-R29`, `@purpose-statement ...` — all tags retired by the governance policy at `docs-guide/policies/script-governance.mdx` lines 195-205. The governance docs themselves do not validate against their own enforcement targets.
- `post-commit.disabled` exists but no policy document explains why it is disabled or what conditions would re-enable it.
- No documented `pre-push --dry-run` or `pre-commit --dry-run` path; contributors get the failure during git operations, not before.
**Recommended canonical home:** `.githooks/README.md` already exists; cross-link from `docs-guide/policies/quality-gates.mdx`.

### Feature: lpd CLI integration with hooks

**What it is:** A repo-local CLI (`tools/lpd`) that wraps common authoring and hook operations. Used in hook install (`lpd hooks install`), mint dev preview (`lpd dev`), and authoring helpers (formatting, linting).
**Current state:** Production but undocumented as a feature.
**Last touched:** Active.
**Lives at:** `tools/lpd` (executable), helpers under `tools/dev/`.
**Validated against source:** Pre-commit references `lpd hooks install` as the canonical install path.
**What's complete:** Hook install path. Dev server scope generation (`generate-mint-dev-scope.js`).
**What's incomplete / community-help opportunity:** Neither `docs-guide/features/automations.mdx` nor the framework pages document the `lpd` CLI as a contributor surface. New contributors have no entry point.
**Recommended canonical home:** Add an "lpd CLI" section to `docs-guide/features/automations.mdx` or a dedicated page under `docs-guide/contributing/`.

### Feature: Quality gates (gate-layer map)

**What it is:** A canonical map of which checks run at which layer (pre-commit, pre-push, PR CI, scheduled CI, manual dispatch) and what runtime budget each layer enforces.
**Current state:** Documented, partially enforced.
**Last touched:** 2026-04-05.
**Lives at:** `docs-guide/policies/quality-gates.mdx`, `docs-guide/policies/infrastructure-principles.mdx`.
**Validated against source:** Pre-commit budget `<=60s`, hooks scoped to staged structure/style/syntax. Pre-push reserved for codex governance. PR CI runs changed-file checks. Scheduled CI covers broad freshness and links.
**What's complete:** Layer responsibilities are documented. Blocking defaults declared (P0/P1 blocking, P2 graduated, P3 advisory).
**What's incomplete / community-help opportunity:** The page references `tests/run-all.js` and `tests/run-pr-checks.js` paths and several workflow files (`test-suite.yml`, `test-v2-pages.yml`, `openapi-reference-validation.yml`, `v2-external-link-audit.yml`, `broken-links.yml`) that **predate the D-ACT-04 rename**. These names should already have moved to `validator-*` / `audit-*` prefixes. The policy page is referencing legacy filenames.
**Recommended canonical home:** Update `docs-guide/policies/quality-gates.mdx` to reference the renamed workflows; this is a sourcing defect, not a design defect.

### Feature: Generated-artifact governance

**What it is:** Policy + manifest contract for every generated artifact. Declares whether the artifact is `committed_authoritative`, `committed_derived_scoped`, or `ephemeral_local`; declares its sources, generator, commit policy, hook policy, CI policy, and delta strategy.
**Current state:** Production.
**Last touched:** 2026-04-05.
**Lives at:** Policy `docs-guide/policies/generated-artifact-and-hook-governance.mdx`; manifest `operations/governance/config/generated-artifacts.json`.
**Validated against source:** Manifest contract has 10 required fields (path, owner, generator, sources, class, commit_policy, hook_policy, ci_policy, delta_strategy, notes). Three classes, three commit policies, three hook policies, three CI policies, four delta strategies — all closed enums.
**What's complete:** Hook policy distinguishes source-file problems, freshness problems, and forbidden staged ephemeral outputs. `docs-index.json` is explicitly named with `hook_policy: check_only`.
**What's incomplete / community-help opportunity:** Stale governance map (`docs-guide/repo-ops/config/repo-governance-map.mdx`) — automations.mdx feature page already names this gap. No mechanism today to alert when the manifest gains a new artifact but no governance entry is written.
**Recommended canonical home:** Already canonical at `docs-guide/policies/generated-artifact-and-hook-governance.mdx`.

### Feature: Manual workflows that should be in CI (OG images, SEO)

**What it is:** Two production-shipping pipelines that exist as scripts but are not wired to any workflow trigger.
**Current state:** Partial (manual-only, P0 flags open since 2026-03-30).
**Last touched:** Scripts active; CI wiring absent.
**Lives at:** `operations/scripts/generators/content/seo/generate-og-images.js`, `operations/scripts/remediators/content/seo/generate-seo.js`.
**Validated against source:** No workflow dispatches either script. Flags file confirms (Cleanup thread, 2026-03-30, P0):
- "generate-og-images.js not in CI — manual-only, fallback OG is generic, should be automated"
- "generate-seo.js not in CI — SEO metadata generator manual-only, may conflict with manual keywords"
**What's complete:** Both scripts run successfully on demand and write canonical OG metadata + per-tab image sets.
**What's incomplete / community-help opportunity:** Wire both into `generator-discoverability-generate-og-images.yml` (workflow file exists in `.github/workflows/` per the file listing) on push to authored MDX paths. Resolve the manual-keywords conflict by declaring keyword precedence in the SEO script.
**Recommended canonical home:** Track in `docs-guide/features/automations.mdx` under "Current Automation Gaps" until resolved.

### Feature: docs-v2 vs docs-v2-dev cherry-pick gap

**What it is:** A structural gap in how workflows are deployed. GitHub Actions only indexes workflow files on the default/production branch. A workflow written on `docs-v2-dev` (the working branch) is invisible to the Actions UI until cherry-picked to `docs-v2`.
**Current state:** Open P0 (Contracts & Changelogs thread, flagged 2026-03-31).
**Last touched:** Flag open.
**Lives at:** Affected file `.github/workflows/integrator-maintenance-update-contract-addresses.yml`.
**Validated against source:** Flag entry directly: "update-contract-addresses.yml has never been dispatched. Exists only on docs-v2-dev ... Must cherry-pick workflow + fetch script to docs-v2 then manual dispatch with --dry-run to verify."
**What's complete:** Nothing — both the immediate cherry-pick and the systemic gate are open.
**What's incomplete / community-help opportunity:**
1. Cherry-pick the contract-addresses workflow + fetch script from docs-v2-dev to docs-v2.
2. Add a pipeline-design gate: no workflow is "done" without a successful dispatch on the default branch.
**Recommended canonical home:** Track in `workspace/plan/future/BACKLOG/master-tasks.md` and update the framework spec to encode the gate.

### Feature: Archived workflow residue

**What it is:** Workflows that are no longer active but remain in the repo.
**Current state:** Two archive paths in use.
**Lives at:** `.github/workflows/deprecated/update-blog-data.yml` (single file, kept in `deprecated/`); `.github/workflows/x-archive/` (10 files, mix of `.archived` extension and renamed YAMLs).
**Validated against source:** Live: `deprecated/` contains `update-blog-data.yml` (per the feature-page gap entry: "Decide whether this is an intentional compatibility alias or schedule governed deletion with approval"). `x-archive/` contains `build-review-assets.yml`, `generate-review-table.yml`, six `integrator-copy-update-*-data.yml.archived` (Discord, forum, ghost-blog, github, rss-blog, youtube), `update-review-template.yml`.
**What's complete:** Retention is governed (`audit-governance-scan-workspace-retention.yml` runs the workspace retention enforcement).
**What's incomplete / community-help opportunity:** Two archive locations (`deprecated/` and `x-archive/`) is itself a governance defect. The script-framework declares a single `x-archive/` policy.
**Recommended canonical home:** Consolidate to `.github/workflows/x-archive/` with a retention policy documented in the framework spec.

### Feature: 218 scripts lacking JSDoc compliance

**What it is:** The script footprint audit reports 218 scripts that fail the 11-tag JSDoc validation. This is the canonical compliance gap.
**Current state:** Open backlog (feature-page gap entry).
**Lives at:** `workspace/reports/repo-ops/SCRIPT_AUDIT.json` (named in feature page line 95); remediator at `operations/scripts/remediators/governance/` (script header repair).
**What's complete:** Compliance is measured. Repair script exists. Decision tree is documented.
**What's incomplete / community-help opportunity:** Execute the repair workflow in graduated waves; verify the repair script handles the edge cases visible in sampled headers (empty `@purpose`, empty `@niche`, multi-line `@scope` with embedded tag literals, retired tags in hook scripts).
**Recommended canonical home:** Track in `workspace/plan/future/BACKLOG/master-tasks.md` and `docs-guide/features/automations.mdx` gap table.

## Cross-feature observations

- **Live counts confirm the feature page.** 14 validator + 9 generator + 9 integrator + 5 interface + 5 remediator + 5 audit + 3 dispatch = 50 named workflows. Plus 3 governance/readme markdown files in `.github/workflows/`, plus archive folders. The feature page's prefix table is accurate.
- **Zero off-taxonomy workflow filenames** at the top of `.github/workflows/`. The D-ACT-04 rename pass (2026-04-15) succeeded.
- **Two concern enums in production simultaneously.** Workflow filenames use 7 concerns (`copy, health, maintenance, discoverability, governance, brand, integrations`). Script folders use 4 concerns (`content, components, governance, ai`) plus undocumented extras (`copy, maintenance, media` under integrators/generators). The framework spec needs one enum or an explicit mapping.
- **`automations/` script type folder is documented but does not exist on disk.** The script-framework spec (line 71) declares 6 types including `automations/` but `ls operations/scripts/` shows: audits, dispatch, generators, integrators, interfaces, remediators (no `automations/`). The `interfaces/` folder is present but undocumented in the framework spec. **The script-framework spec is out of sync with the live filesystem.**
- **Scripts catalog claims 366 indexed scripts.** Live filesystem under `operations/scripts/` has 263. The extra ~100 are scripts under `.github/scripts/`, `tools/`, `operations/tests/` that the catalog generator pulls in. The framework spec only governs `operations/scripts/`; the catalog is governing more than the spec describes.
- **Hook scripts violate the governance they enforce.** `.githooks/pre-commit` and `.githooks/pre-push` use retired JSDoc tags (`@category`, `@domain`, `@needs`, `@purpose-statement`) that the canonical script-governance policy explicitly bans (lines 195-205).
- **Two archive paths.** `.github/workflows/deprecated/` and `.github/workflows/x-archive/` both exist. The framework spec only declares `x-archive/`.
- **Self-remediation maturity is partial.** Generators have matching verifiers; remediators have `--write`/`--verify` modes. But failing audits do not auto-open issues — the "act" stage of the scan-report-act pattern is missing.
- **Generated-artifact governance has a meta-gap.** The manifest at `operations/governance/config/generated-artifacts.json` lists managed artifacts, but the generator that produces the `repo-governance-map.mdx` artifact is stale (named in feature-page line 94). No alert exists today when the manifest gains an artifact but no policy entry is written.

## Community-help opportunities

1. **Cherry-pick contract-addresses workflow to docs-v2 and dispatch with `--dry-run`.** Path: `.github/workflows/integrator-maintenance-update-contract-addresses.yml` + companion `.github/scripts/fetch-contract-addresses.js`. Acceptance: dispatch completes on docs-v2, dry-run output reviewed, full dispatch produces a commit on docs-v2-dev with refreshed addresses. (Flag P0, 2026-03-31.)
2. **Wire generate-og-images.js and generate-seo.js into CI.** Path: `operations/scripts/generators/content/seo/generate-og-images.js`, `operations/scripts/remediators/content/seo/generate-seo.js`. Acceptance: a generator workflow triggers on push to `v2/**` MDX paths, regenerates OG images and frontmatter, opens an auto-PR or commits to docs-v2-dev under the governance-sync workflow. Manual-keyword conflict resolved by declared precedence. (Flag P0, 2026-03-30.)
3. **Resolve the concern-enum split.** Path: `docs-guide/frameworks/github-actions.mdx`, `docs-guide/frameworks/script-framework.mdx`, `docs-guide/policies/script-governance.mdx`. Acceptance: a single concern enum, or a published mapping table from the 7-concern workflow enum to the 4-concern script enum. Validator added that fails when a workflow concern has no script-concern mapping.
4. **Repair 218 non-compliant JSDoc headers.** Path: `operations/scripts/remediators/governance/`. Acceptance: SCRIPT_AUDIT.json reports zero template-non-compliant scripts; the repair script is extended to handle empty `@purpose`/`@niche` and to migrate retired tags in hook scripts.
5. **Update .githooks scripts to use canonical JSDoc tags.** Path: `.githooks/pre-commit`, `.githooks/pre-push` (and any other hook-side scripts using `@category`/`@domain`/`@needs`/`@purpose-statement`). Acceptance: hook scripts pass the same `--strict` validator they enforce on other scripts.
6. **Consolidate archive paths.** Path: `.github/workflows/deprecated/` → `.github/workflows/x-archive/`. Acceptance: one archive directory only; framework spec declares the retention policy explicitly.
7. **Document the `lpd` CLI as a contributor feature.** Path: new section in `docs-guide/features/automations.mdx` or `docs-guide/contributing/lpd-cli.mdx`. Acceptance: install, hooks install, dev preview, scope generation, formatting flows all documented with examples.
8. **Add audit-to-issue automation.** Path: extend each `audit-*.yml` workflow with an issue-create step on failure, or add a single dispatcher that consumes audit step-summary JSON. Acceptance: failing weekly audit creates a tracked issue with `area:*` and `priority:*` labels.
9. **Add the missing CI lint: every generator has a matching verifier.** Path: `operations/scripts/validators/governance/`. Acceptance: a validator script enumerates `generator-*` workflows and fails if any lacks a matching `validator-*` with a `--check` invocation.
10. **Reconcile script-framework spec with live filesystem.** Path: `docs-guide/frameworks/script-framework.mdx`, `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`. Acceptance: spec declares `interfaces/` as a real type; either removes `automations/` (no live folder) or re-adds the folder; the 5+ concerns observed under generators/integrators are documented (`media`, `copy`, `maintenance` either accepted into the enum or moved).

## Recommended single-page rewrite outline

A consolidated rewrite of `docs-guide/features/automations.mdx` should follow this shape:

1. **What the automation layer delivers.** Two paragraphs in product language — what gets protected, what gets refreshed, what gets repaired, what gets surfaced.
2. **The five execution surfaces.** Local hooks, PR CI, scheduled CI, manual dispatch, external integrations. Layer responsibilities and runtime budgets.
3. **The taxonomy.** One 7×7 matrix: type (rows) × concern (columns), with the count of live workflows per cell. Replaces the current two separate tables.
4. **What each type does for the product.** One paragraph per type (validator, generator, integrator, remediator, audit, dispatch, interface). Product language only — what a contributor or maintainer sees, not what the script reads.
5. **The hook pipeline.** Pre-commit, pre-push, browser verify, no-deletion, render-verify, scope-checkpoint. Each: what blocks, what warns, what is advisory.
6. **The `lpd` CLI.** Install, dev, hooks, scope, format. Five sub-sections, each with a one-line command.
7. **Generated-artifact policy.** Three classes, what to do when a check fails, where reports live. Cross-link to the manifest.
8. **The governance gaps that are open.** Three categories: cherry-pick gap, manual-only pipelines that should be in CI, compliance backlog (218 JSDoc headers, hook-script tag drift, concern-enum split, archive consolidation, scan-report-act stage missing).
9. **Where to find canonical sources.** One table with policy, framework, script catalog, workflow catalog, manifest, decisions log, flags file.
10. **Community-help index.** The 10 opportunities listed above, each with a path and one-line acceptance criterion.

The rewrite drops the prose duplication in `v2/resources/documentation-guide/ai-automations/automations-workflows.mdx` (1044 lines, last touched 2026-05-04, full of per-workflow walkthroughs that belong in workflow-side runbooks, not a feature index).
