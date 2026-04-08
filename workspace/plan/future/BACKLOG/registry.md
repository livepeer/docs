# Backlog Registry

> Items captured during work. Each gets an ID, a source, and a status.
> Triage into master-tasks.md or park here.

---

_Empty — cleared 2026-03-29. BL-001 (SHOWCASE_DISCORD_REVIEWER_USER_ID warning) was a false positive, closed._

## BL-003 — Add sync-docs-paths dry-run to pre-commit hook
**Source:** Propagate thread — 2026-03-29
**Description:** Human renames via Finder/VS Code bypass the Claude hook. Adding `sync-docs-paths.js --dry-run --staged` to `.githooks/pre-commit` would catch stale references before commit.
**Priority:** P2

## BL-004 — Update sync-docs-paths CLI console formatting for new reason types
**Source:** Propagate thread — 2026-03-29
**Description:** The CLI wrapper's human-readable output doesn't label `full-url`, `redirect-creation`, or `xml-value` reason types. Formatting update needed.
**Priority:** P3

## BL-005 — Fix stale sitemap-ai.xml entry for contract addresses
**Source:** SEO/AEO thread — 2026-03-30
**Description:** sitemap-ai.xml contains entry for `contract-addresses-canonical` which no longer exists. Page renamed to `livepeer-contract-addresses` by Contracts thread.
**Priority:** P1

## BL-006 — Automate generate-og-images.js and generate-seo.js in CI
**Source:** SEO/AEO thread — 2026-03-30
**Description:** Both scripts exist but are manual-only. OG fallback is generic. SEO generator may conflict with manual keywords. Both need GitHub Action workflows.
**Priority:** P0

## BL-007 — Design companion file automation pipeline
**Source:** SEO/AEO thread — 2026-03-30
**Description:** Components tagged `@aiDiscoverability props-extracted` require companion JSON but no automated pipeline generates them. 12 glossary companions exist. Contracts and other tagged components have no companion. Alison requested pipeline starting with contracts and glossaries.
**Priority:** P0

## BL-008 — Register HistoricalContractTable in component-registry.json
**Source:** Contracts & Changelogs — 2026-03-30
**Description:** New component at snippets/components/displays/tables/HistoricalContractTable.jsx has 7-tag JSDoc but is not registered in docs-guide/config/component-registry.json.
**Priority:** P1

## BL-009 — Mintlify CDN not propagating docs-v2 deployments
**Source:** Solutions Merge session — 2026-03-30
**Description:** Mintlify dashboard shows "Update successful" for PR #847 (10+ hours ago) and manual update (triggered from dashboard). Live site at docs.livepeer.org still serves pre-PR-847 content. Manual redeploy and empty commit push both failed to flush CDN. Needs Mintlify support contact or investigation of deployment pipeline.
**Priority:** P0

## BL-010 — Clean up solutions-merge worktree after PR merges
**Source:** Solutions Merge session — 2026-03-30
**Description:** `.claude/worktrees/solutions-merge` worktree and `origin/merge/solutions-to-docs-v2` branch should be deleted after PR merges to docs-v2.
**Priority:** P2

## BL-011 — Remove dead .gitattributes LFS declarations
**Source:** Asset Pipeline (#849) — 2026-03-30
**Description:** `.gitattributes` declares `*.gif` and `*.mp4` as LFS-tracked but LFS was never properly configured. Dead config that produces clone warnings.
**Priority:** P2

## BL-012 — git filter-repo to purge binaries from history
**Source:** Asset Pipeline (#849) — 2026-03-30
**Description:** Migrated assets are removed from working tree but still in git history (~326 MB). `git filter-repo` + force-push needed to actually reduce clone size. Coordinate with team.
**Priority:** P3

## BL-013 — PreEdit hook: block writes to auto-generated files
**Source:** Insights analysis — 2026-03-31
**Description:** pre-tool-guard.js Write/Edit section should check first 5 lines of target file for DO NOT EDIT / AUTO-GENERATED markers and hard-block the edit. Currently advisory only (CLAUDE.md line 71 + memory). Hook enforcement would make it physically impossible regardless of whether Claude reads the rule.
**Priority:** P1

## BL-014 — Redesign /thread as interactive prompt workflow
**Source:** Insights analysis — 2026-03-31
**Description:** User only uses /thread from the skill catalogue. Current version requires knowing the format. Redesign to prompt the user for outcome, scope, constraints, and related threads interactively. Single command, zero memorisation required.
**Priority:** P1

## BL-015 — CLOSED: Headless-mode CI for changelog/contract pipelines
**Source:** Insights analysis — 2026-03-31
**Status:** Closed — invalid. Pipelines already automated via GitHub Actions (update-changelogs.yml weekly cron, update-contract-addresses.yml weekly cron, plus 7 push-triggered generators). Insight report assumed manual; audit confirmed automated.
**Priority:** N/A

## BL-013 — gray-matter not declared as dependency
**Source:** Asset Pipeline (#849) — 2026-03-30
**Description:** `operations/scripts/validators/content/copy/lint-copy.js` requires `gray-matter` but it's not in any `package.json`. Currently installed at repo root with `--no-save`. Add to appropriate package.json.
**Priority:** P1

## BL-014 — Clean up fix-sync-assets worktree after PR #851 merges
**Source:** Asset Pipeline (#849) — 2026-03-30
**Description:** `../fix-sync-assets/` worktree and `fix/sync-large-assets-yaml` branch should be deleted after PR #851 merges to main.
**Priority:** P2

## BL-015 — generate-ai-sitemap.js wordCount:0 for composable pages
**Source:** SEO/AEO thread — 2026-03-31
**Description:** Pages using the composable pattern (body is just an import statement) report `wordCount: 0` in sitemap-ai.xml. The generator counts words in the page body but composable content lives in the imported file. Fix options: (a) teach the generator to follow imports, or (b) add a `wordCount` frontmatter override field.
**Priority:** P2

## BL-016 — Build `/audit` skill
**Source:** Workflow Alignment Skills — 2026-03-31
**Description:** No dedicated audit skill exists. Audit phase currently handled ad-hoc via `/dispatch` with audit-scoped agent briefs. A standalone skill would standardise: inventory, classify by type/concern, trace dependencies, Mermaid pipeline maps, flag stale/legacy/consolidation candidates. Same pattern as `/research` (scope → delegate → synthesise).
**Priority:** P2

## BL-017 — Build `/verify` skill
**Source:** Workflow Alignment Skills — 2026-03-31
**Description:** Verify phase spec exists in `/thread` Step 1b but has no standalone skill. Would run universal checks (pipeline, framework alignment, self-remediation, risk, scalability, hanging threads, data integrity) + context-aware checks based on what was built. Currently inline — standalone skill would enable invocation outside `/thread` lifecycle.
**Priority:** P2

## BL-018 — Build `/document` skill
**Source:** Workflow Alignment Skills — 2026-03-31
**Description:** Document phase has no skill. Would handle: adding gold-standard examples to `.claude/references/`, updating governance indexes, building self-documenting automation pipelines. Currently manual.
**Priority:** P3

## BL-019 — Build `/cleanup` skill
**Source:** Workflow Alignment Skills — 2026-03-31
**Description:** Cleanup phase has no skill. Would handle: archive deprecated items per framework rules, remove stale placeholders, execute consolidation merges, final audit for zero drift. Currently manual.
**Priority:** P3

## BL-020 — Register contract addresses workflow on main
**Source:** Contracts & Changelogs — 2026-03-31
**Description:** `update-contract-addresses.yml` exists on docs-v2-dev only. GitHub Actions cannot discover or dispatch it. Needs PR to main. Branch protection requires PR review.
**Priority:** P1

## BL-021 — Delete ContractAddressDisplay.jsx
**Source:** Contracts & Changelogs — 2026-03-31
**Description:** Marked `@status deprecated`. Still imported by old `v2/about/resources/contract-addresses.mdx`. Delete after old page is removed from nav.
**Priority:** P2

## BL-022 — Render-test v1 Danger callouts
**Source:** Contracts & Changelogs — 2026-03-31
**Description:** 5 v1 files had Danger callouts + Expandable added. v1 is frozen so not tested locally. Need to verify Expandable works in v1 pages after deploy.
**Priority:** P2

## BL-023 — Cherry-pick contract workflow to docs-v2 for dispatch test
**Source:** Contracts Production Audit — 2026-03-31
**Description:** `update-contract-addresses.yml` exists only on `docs-v2-dev`. GitHub Actions only indexes workflows on the default branch. Must cherry-pick workflow + fetch script to `docs-v2`, then manual dispatch with `--dry-run` to verify full pipeline. Blocking production merge.
**Priority:** P0

## BL-024 — Add llms.txt and sitemap-ai.xml to /propagate audit surfaces
**Source:** Contracts Production Audit — 2026-03-31
**Description:** When pages are renamed, `/propagate` skill audits 10 reference surfaces but does not cover `llms.txt` or `sitemap-ai.xml`. Both had stale URLs found during contracts audit. Add as mandatory audit surfaces.
**Priority:** P1

## BL-025 — Automate generate-og-images.js in CI
**Source:** Contracts Production Audit — 2026-03-31
**Description:** OG image generation is manual-only. Script works (53 images generated successfully) but requires Puppeteer. Should run in CI on `snippets/assets/site/og-image/` changes or on section/page config changes in `og-image-policy.js`.
**Priority:** P2

## BL-026 — Investigate Mint preview `transformAlgorithm` TypeError
**Source:** Mint Parse Hygiene — 2026-03-31
**Description:** Fresh `mint dev` and `bash tools/lpd dev` boots are parse-clean and reach preview-ready, but both still print `[TypeError: controller[kState].transformAlgorithm is not a function]` after startup. Likely Mint CLI runtime or watcher patch behaviour rather than content parsing. Needs isolated diagnosis.
**Priority:** P2

## BL-027 — Resolve real staged-suite failures after harness repair
**Source:** Staged Test Harness Repair — 2026-04-01
**Description:** After fixing repo-wide dependency bootstrap, `bash tools/lpd test --staged` now runs through to real failures in authoring tools, docs navigation, ownerless governance, root allowlist checks, and usefulness assertions. Triage and repair these in an isolated worktree.
**Status:** Closed — 2026-04-05. The staged-suite failures were cleared in the snippets root governance follow-up, and `lpd test --staged` now passes in the current worktree.
**Priority:** P1

## BL-028 — Fix CP-6 contracts browser validation hang on latest docs-v2-dev
**Source:** Contracts Surface Redesign — 2026-04-03
**Description:** `operations/tests/contracts-browser-harness.js` and `operations/tests/playwright-contract-addresses.js` can hang after scoped preview startup on the current `docs-v2-dev` base, even when the preview serves `/v2/about/resources/livepeer-contract-addresses` and `/v2/about/resources/verify-contract-addresses`. Isolate whether the regression is in the harness wrapper, Puppeteer flow, or page/widget readiness waits.
**Priority:** P1

## BL-029 — Consolidate contracts catalog discovery and output contract
**Source:** Contracts Surface Redesign — 2026-04-03
**Description:** The contracts redesign centralized family declarations in `catalog-config.js` and derived the blockchain-page roster from it, but new contract families still require code edits and the pipeline still writes parallel JSX/JSON consumer payloads. Follow up with a dedicated design/execution thread for config-first family discovery and slimmer persisted outputs without duplicating truth.
**Priority:** P2

## BL-030 — Add governance headers to migrated contracts pipeline modules
**Source:** Contracts Surface Migration to docs-v2 — 2026-04-03
**Description:** The new `operations/scripts/integrators/content/data/contracts/*.js` modules shipped in PR #857 without the canonical script-governance metadata header block. Normalize them in a dedicated governance pass instead of leaving the migration with silent policy drift.
**Priority:** P1

## BL-031 — Register migrated contracts UI components in component governance outputs
**Source:** Contracts Surface Migration to docs-v2 — 2026-04-03
**Description:** The docs-v2 contracts migration relies on `ContractVerifier`, `HistoricalContractTable`, and `ZoomableDiagram`, but the regenerated component registry still does not surface them. Audit component-library extraction and registry generation so contracts UI dependencies are governed explicitly.
**Priority:** P1

## BL-032 — Repair Resource HUB redirect contract in docs.json
**Source:** Snippets Assets `/site` Migration Verification — 2026-04-05
**Description:** `node operations/tests/unit/docs-navigation.test.js` fails because the Resource HUB tab first routable page and redirect contract are out of sync. Fix `docs.json` so `/v2/resources/redirect` exists and maps to the expected destination.
**Status:** Closed — 2026-04-05. `docs.json` now restores `/v2/resources/redirect` and the expected redirect target, and staged navigation validation passes.
**Priority:** P0

## BL-033 — Fix invalid frontmatter in blockchain-contracts.mdx
**Source:** Snippets Assets `/site` Migration Verification — 2026-04-05
**Description:** `node operations/tests/unit/mdx.test.js` and `quality.test.js` fail on `v2/about/livepeer-protocol/blockchain-contracts.mdx` because the file contains invalid frontmatter YAML. Repair the frontmatter so changed-page validation can go green.
**Priority:** P0

## BL-034 — Diagnose scoped Mint OG/runtime failures on representative routes
**Source:** Snippets Assets `/site` Migration Verification — 2026-04-05
**Description:** Scoped browser validation on `3145` returns `200` for representative routes but still fails due to `React error #418`, malformed `https://undefined.mintlify.app//...` OG URLs, and non-empty request-abort surfaces. Isolate whether the root cause is Mint config/base URL state, render hydration, analytics/embed behavior, or scoped projection.
**Priority:** P0

## BL-035 — Remove `snippets/automations` from script-governance indexed roots
**Source:** Snippets Root Governance Consolidation — 2026-04-05
**Description:** `snippets/automations/script-index.md` still regenerates because script governance continues to index `snippets/automations` as a managed script root, even though the repo is dismantling that tree and moving live outputs elsewhere.
**Status:** Closed — 2026-04-05. `tools/lib/script-governance-config.js` no longer indexes `snippets/automations`, and the old path is no longer present on disk.
**Priority:** P1

## BL-036 — Make the human-owned delete commit for retired `snippets/automations` files
**Source:** Snippets Root Governance Consolidation — 2026-04-05
**Description:** `snippets/automations/globals/` and `snippets/automations/script-index.md` are now deleted in the working tree and validated as retired, but tracked-file removal still requires a human-owned commit with `--trailer "allow-deletions=true"`.
**Priority:** P1

## BL-037 — Make the human-owned delete commit for validated `tools/` restructures
**Source:** Tools Governance Consolidation — 2026-04-05
**Description:** The validated `tools/` cleanup includes tracked-file removals across the retired `tools/lib` root paths and other legacy tool surfaces. Repo policy requires a human-owned commit with `--trailer "allow-deletions=true"` after staging only the intended tool-governance files.
**Priority:** P1

## BL-038 — Refresh stale UI template generated artifacts
**Source:** About/Gateways/Delegators IA Route Alignment — 2026-04-05
**Description:** `node operations/tests/unit/ui-template-generator.test.js` currently fails because the checked-in UI template artifacts are stale relative to the generator output, including the fallback `og:image` path and glossary-route examples. Regenerate or reconcile the owned template artifacts in an isolated follow-up.
**Priority:** P1

## BL-039 — Make the human-owned delete commit for About/Gateways/Delegators IA migrations
**Source:** About/Gateways/Delegators IA Route Alignment — 2026-04-05
**Description:** The current IA migration worktree contains tracked path moves and deletions across `v2/about`, `v2/gateways`, and `v2/delegators`. Repo policy requires a human-owned commit with `--trailer "allow-deletions=true"` after staging only the intended IA migration files.
**Priority:** P1

## BL-040 — Review and retire bounded workflow-governance transitional surfaces
**Source:** Production Governance Cutover — 2026-04-06
**Description:** `.github/workspace/framework-canonical.md` and `.github/workspace/decisions-log.mdx` are now explicitly governed as bounded transitional workflow-governance inputs with review cadence, but they are not yet final retired/archive-only surfaces. Future governance review should either replace or retire them deliberately instead of allowing indefinite transition.
**Priority:** P2

## BL-041 — Verify promoted Developers claims against primary sources
**Source:** Developers Tab Restructure and Content Promotion — 2026-04-06
**Description:** The Developers IA/nav/content restructure is implemented and locally validated, but promoted claims around pricing, SDK/status, API/authentication behavior, PyTrickle, and related external/product-sensitive details still need a primary-source verification pass before merge.
**Priority:** P1

## BL-042 — Make the human-owned delete commit for Developers archive moves
**Source:** Developers Tab Restructure and Content Promotion — 2026-04-06
**Description:** `v2/developers/developer-tools/**` and `v2/developers/technical-references/**` were moved into `v2/developers/x-deprecated/**`, leaving tracked deletions plus archive additions in the worktree. Repo policy requires a human-owned commit with `--trailer "allow-deletions=true"` after staging only the intended Developers IA files.
**Priority:** P1

## BL-043 — Retire Delegators `_workspace/TO-ADD/files` shadow source cleanly
**Source:** Delegators Canonical IA Rebuild — 2026-04-06
**Description:** The live Delegators tab now uses the canonical `v2/delegators/**` routes, but `v2/delegators/_workspace/TO-ADD/files/**` still exists as tracked shadow source content. Remove or archive it in a human-owned deletion commit and update any design/workspace references that still depend on those file paths.
**Priority:** P1

## BL-044 — Diagnose scoped preview redirect omissions for docs.json redirects
**Source:** Delegators Canonical IA Rebuild — 2026-04-06
**Description:** Scoped Delegators preview on port `3107` served the live routes correctly but returned `404` for the legacy redirect source paths, even though the redirect entries are present in `docs.json`. Verify whether scoped preview drops redirects or whether runtime redirect handling is incomplete.
**Priority:** P2

## BL-045 — Make page-index generation handle unstaged renames and new route files
**Source:** Gateway Single-Click Deployment Path Migration — 2026-04-06
**Description:** `operations/scripts/generators/content/catalogs/generate-pages-index.js` currently relies on tracked-path discovery, so it misses unstaged renames/new files and reports `v2/gateways/index.mdx` / `v2/index.mdx` as outdated until the moved page paths are staged. The generator should account for working-tree renames/new files or document/enforce the staging requirement explicitly.
**Priority:** P2
