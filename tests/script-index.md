# tests Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Domain |
|---|---|---|---|
| `tests/integration/browser.test.js` | Puppeteer browser integration test — renders pages from docs.json and checks for console errors, load failures, and visual regressions | `node tests/integration/browser.test.js [flags]` | docs |
| `tests/integration/domain-pages-audit.js` | Audits deployed docs page HTTP status codes (v1, v2, or both) and emits a stable JSON report | `node tests/integration/domain-pages-audit.js [flags]` | docs |
| `tests/integration/mdx-component-runtime-smoke.js` | Smoke-tests sentinel MDX routes for runtime component failures, focused on page-killing render errors from MDX-imported JSX modules. | `node tests/integration/mdx-component-runtime-smoke.js [--routes route[,route...]] [--base-url http://localhost:3000]` | docs |
| `tests/integration/openapi-reference-audit.js` | Comprehensive OpenAPI spec validation — checks references, schemas, examples. Supports --strict (validate), --fix (repair), and report modes. | `node tests/integration/openapi-reference-audit.js [flags]` | docs |
| `tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit — checks internal links, external links, anchor refs. Supports --staged, --full, --strict, --write-links modes. | `node tests/integration/v2-link-audit.js [flags]` | docs |
| `tests/integration/v2-link-audit.selftest.js` | Self-test suite for v2-link-audit.js — validates audit logic against known fixtures | `node tests/integration/v2-link-audit.selftest.js [flags]` | docs |
| `tests/integration/v2-wcag-audit.js` | WCAG accessibility audit for v2 pages — checks heading hierarchy, alt text, ARIA. Supports --fix mode for auto-repair. | `node tests/integration/v2-wcag-audit.js [flags]` | docs |
| `tests/integration/v2-wcag-audit.selftest.js` | Self-test suite for v2-wcag-audit.js — validates WCAG audit logic against known fixtures | `node tests/integration/v2-wcag-audit.selftest.js [flags]` | docs |
| `tests/run-all.js` | Test orchestrator — dispatches all unit test suites. Called by pre-commit hook and npm test. | `node tests/run-all.js [flags]` | docs |
| `tests/run-pr-checks.js` | PR orchestrator — runs changed-file scoped validation checks for pull request CI. Dispatches per-file validators based on PR diff. | `node tests/run-pr-checks.js [flags]` | docs |
| `tests/unit/ai-tools-registry.test.js` | Validates the AI-tools registry contract, full tracked ai-tools coverage, and the Wave 1 inventory source-of-truth boundary. | `node tests/unit/ai-tools-registry.test.js [--staged\|--files path[,path]]` | docs |
| `tests/unit/audit-script-inventory-repair-rules.test.js` | Tests audit-script-inventory repair hardening rules for judgement-field backfill and pipeline safety. | `node tests/unit/audit-script-inventory-repair-rules.test.js` | docs |
| `tests/unit/check-agent-docs-freshness.test.js` | Tests the agent governance freshness validator against the canonical runtime file set. | `node tests/unit/check-agent-docs-freshness.test.js` | docs |
| `tests/unit/codex-commit.test.js` | Tests codex-commit.js — validates commit message generation and contract compliance | `node tests/unit/codex-commit.test.js [flags]` | docs |
| `tests/unit/codex-safe-merge-with-stash.test.js` | Tests codex-safe-merge-with-stash.js — asserts the deprecated stash helper hard-fails and points callers to the supported Codex lifecycle | `node tests/unit/codex-safe-merge-with-stash.test.js [flags]` | docs |
| `tests/unit/codex-skill-sync.test.js` | Tests sync-codex-skills.js — validates skill file and companion bundle synchronisation between sources | `node tests/unit/codex-skill-sync.test.js [flags]` | docs |
| `tests/unit/codex-task-cleanup.test.js` | Tests codex/task-cleanup.js — verifies safe worktree pruning, dirty-worktree preservation, branch pruning, and repo-root protection | `node tests/unit/codex-task-cleanup.test.js [flags]` | docs |
| `tests/unit/codex-task-preflight.test.js` | Tests codex/task-preflight.js — verifies managed worktree default behavior and the explicit in-place override | `node tests/unit/codex-task-preflight.test.js [flags]` | docs |
| `tests/unit/component-governance-generators.test.js` | Verifies component governance generators produce coherent registry, usage-map, and docs outputs. | `node tests/unit/component-governance-generators.test.js` | docs |
| `tests/unit/component-governance-utils.test.js` | Verifies shared component governance utility parsing, scanning, and archive exclusion behavior. | `node tests/unit/component-governance-utils.test.js` | docs |
| `tests/unit/components/TEMPLATE.test.js` | Template for category-scoped component unit tests. | `node tests/unit/components/TEMPLATE.test.js` | docs |
| `tests/unit/copy-lint.test.js` | Copy lint unit suite — validates fixture-driven copy-governance checks and runs changed-file scoped lint aggregation for authored docs pages. | `node tests/unit/copy-lint.test.js [--staged] [--files <a,b,c>]` | docs |
| `tests/unit/create-codex-pr.test.js` | Tests create-codex-pr.js — validates PR creation logic and branch naming | `node tests/unit/create-codex-pr.test.js [flags]` | docs |
| `tests/unit/docs-authoring-rules.test.js` | Verifies guide-layout warning rules and deterministic code-block icon repair for authored docs pages. | `node tests/unit/docs-authoring-rules.test.js` | docs |
| `tests/unit/docs-fact-registry.test.js` | Tests docs-fact-registry.js — validates claim-family registry schema checks and normalized loading by domain. | `node tests/unit/docs-fact-registry.test.js [flags]` | docs |
| `tests/unit/docs-guide-sot.test.js` | Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness | `node tests/unit/docs-guide-sot.test.js [flags]` | docs |
| `tests/unit/docs-navigation.test.js` | Validates docs.json page-entry syntax, reports missing routes, warns on orphaned canonical v2 pages, suggests remaps, and optionally applies approved remaps | `node tests/unit/docs-navigation.test.js [flags]` | docs |
| `tests/unit/docs-page-research-pr-report.test.js` | Tests docs-page-research-pr-report.js — validates changed-file advisory reporting for the fact-check research runner. | `node tests/unit/docs-page-research-pr-report.test.js [flags]` | docs |
| `tests/unit/docs-page-research.test.js` | Tests docs-page-research.js — validates claim extraction, contradiction detection, and evidence-source adapters for the experimental research runner. | `node tests/unit/docs-page-research.test.js [flags]` | docs |
| `tests/unit/docs-page-scope.test.js` | Verifies generated authored-page scope helpers so warning-only validators skip generated docs pages while keeping authored pages in scope. | `node tests/unit/docs-page-scope.test.js` | docs |
| `tests/unit/docs-path-sync.test.js` | Unit tests for docs path sync — validates staged move detection, deterministic docs.json/reference rewrites, validator behavior, and remediator write mode. | `node tests/unit/docs-path-sync.test.js` | docs |
| `tests/unit/docs-research-adjudication.test.js` | Tests docs-research-adjudication.js — validates adjudication-ledger schema, report-aware outcome recording, and trust-tier summary rules for measured research-skill review outcomes. | `node tests/unit/docs-research-adjudication.test.js [flags]` | docs |
| `tests/unit/docs-research-packet.test.js` | Tests docs-research-packet.js — validates nav, manifest, and path tranche derivation plus packet-summary rollups for the generic research packet engine. | `node tests/unit/docs-research-packet.test.js` | docs |
| `tests/unit/docs-route-scope.test.js` | Verifies docs.json-derived tab and group route scopes resolve to live files. | `node tests/unit/docs-route-scope.test.js` | docs |
| `tests/unit/export-portable-skills.test.js` | Tests export-portable-skills.js — validates portable skill export packs from canonical templates. | `node tests/unit/export-portable-skills.test.js [flags]` | docs |
| `tests/unit/frontmatter-taxonomy.test.js` | Verifies shared docs frontmatter taxonomy normalization and purpose mapping. | `node tests/unit/frontmatter-taxonomy.test.js` | docs |
| `tests/unit/generated-artifacts-policy.test.js` | Tests generated artifact governance manifest — validates enums, path matching, and hook-policy expectations | `node tests/unit/generated-artifacts-policy.test.js` | docs |
| `tests/unit/legacy-root-v1-redirects.test.js` | Validates legacy root-to-v1 redirect integrity, docs.json sync, root catch-all fallbacks, and legacy fallback-page cleanup behavior. | `node tests/unit/legacy-root-v1-redirects.test.js` | docs |
| `tests/unit/links-imports.test.js` | Validates MDX internal links and snippet import paths are resolvable | `node tests/unit/links-imports.test.js [flags]` | docs |
| `tests/unit/lpd-scoped-mint-dev.test.js` | Tests lpd scoped mint-dev functionality — validates dev server scope filtering | `node tests/unit/lpd-scoped-mint-dev.test.js [flags]` | docs |
| `tests/unit/mdx-component-runtime-smoke.test.js` | Unit tests for the MDX runtime smoke helpers — covers arg parsing, sentinel route selection, trigger logic, and failure classification. | `node tests/unit/mdx-component-runtime-smoke.test.js` | docs |
| `tests/unit/mdx-component-scope.test.js` | Unit tests for the MDX-facing component scope validator — covers unsafe private helpers, safe inline logic, and imported helper patterns. | `node tests/unit/mdx-component-scope.test.js` | docs |
| `tests/unit/mdx-guards.test.js` | Enforces MDX guardrails — globals imports, math delimiters, markdown table line breaks | `node tests/unit/mdx-guards.test.js [flags]` | docs |
| `tests/unit/mdx-safe-markdown.test.js` | Fixture-driven unit tests for repo-wide MDX-safe markdown repair and validation helpers. | `node tests/unit/mdx-safe-markdown.test.js` | docs |
| `tests/unit/mdx.test.js` | Validates MDX syntax and structure — checks for parse errors, invalid JSX, broken components | `node tests/unit/mdx.test.js [flags]` | docs |
| `tests/unit/migrate-assets-to-branch.test.js` | Unit tests for migrate-assets-to-branch.js — validates CLI defaults, ambiguous basename detection, deterministic rewrites, and end-to-end branch migration in a temp git repo | `node tests/unit/migrate-assets-to-branch.test.js` | docs |
| `tests/unit/og-image-policy.test.js` | Unit tests for og-image-policy — validates route mapping, locale asset selection, fallback assignment, and URL guardrails. | `node tests/unit/og-image-policy.test.js [flags]` | docs |
| `tests/unit/openapi-reference-audit.test.js` | Unit tests for openapi-reference-audit.js — tests individual audit rules and fix logic | `node tests/unit/openapi-reference-audit.test.js [flags]` | docs |
| `tests/unit/openapi-rolling-issue.test.js` | Tests OpenAPI rolling issue tracker — validates issue creation and dedup logic | `node tests/unit/openapi-rolling-issue.test.js [flags]` | docs |
| `tests/unit/orchestrator-guides-research-review.test.js` | Tests orchestrator-guides-research-review.js — validates live Orchestrators Guides tranche extraction, report summary helpers, and registry-drift detection for the research packet generator. | `node tests/unit/orchestrator-guides-research-review.test.js` | docs |
| `tests/unit/ownerless-governance.test.js` | Validates the ownerless governance manifest, primary gate-layer contract, and forbidden human-owner dependency in governed policy and GitHub surfaces. | `node tests/unit/ownerless-governance.test.js [--staged\|--files a,b]` | docs |
| `tests/unit/quality.test.js` | Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging | `node tests/unit/quality.test.js [flags]` | docs |
| `tests/unit/repair-governance.test.js` | Tests repair-governance.js for safe dry-run, fix, rollback, strict exit handling, and workflow contract coverage. | `node tests/unit/repair-governance.test.js` | docs |
| `tests/unit/repair-spelling.test.js` | Unit tests for repair-spelling.js — validates deterministic spelling fixes and exclusion ranges | `node tests/unit/repair-spelling.test.js [flags]` | docs |
| `tests/unit/repo-audit-pipeline.test.js` | Tests repo-audit-orchestrator.js pipeline — validates mode/scope combinations and report output | `node tests/unit/repo-audit-pipeline.test.js [flags]` | docs |
| `tests/unit/root-allowlist-format.test.js` | Validates that .allowlist stays machine-readable, root-only, and aligned with the canonical agent root layout. | `node tests/unit/root-allowlist-format.test.js` | docs |
| `tests/unit/run-pr-checks.test.js` | Tests run-pr-checks lane parsing, branch-health registry coverage, and incremental summary/progress behavior. | `node tests/unit/run-pr-checks.test.js` | docs |
| `tests/unit/script-docs.test.js` | Enforces script header schema, keeps group script indexes in sync, and builds aggregate script catalog | `node tests/unit/script-docs.test.js [flags]` | docs |
| `tests/unit/skill-docs.test.js` | Validates governed skill documentation frontmatter, references, and contract integrity for canonical templates and local skill files. | `node tests/unit/skill-docs.test.js [--staged] [--files path[,path]]` | docs |
| `tests/unit/spelling.test.js` | Spelling check — validates content against custom dictionary with en-GB rules | `node tests/unit/spelling.test.js [flags]` | docs |
| `tests/unit/style-guide.test.js` | Style guide compliance — checks en-GB conventions, heading case, formatting rules | `node tests/unit/style-guide.test.js [flags]` | docs |
| `tests/unit/ui-template-generator.test.js` | Validates UI template generator snippet outputs are valid JSON, deterministic, and safe for after-< component insertion | `node tests/unit/ui-template-generator.test.js [flags]` | docs |
| `tests/unit/usefulness-journey.test.js` | Tests journey-check evaluation logic against fixture pages. | `node tests/unit/usefulness-journey.test.js` | docs |
| `tests/unit/usefulness-rubric.test.js` | Tests rubric-based scoring logic against fixture pages. | `node tests/unit/usefulness-rubric.test.js` | docs |
| `tests/unit/v2-folder-governance-cleanup-matrix.test.js` | Unit tests for the v2 folder governance cleanup matrix generator — verifies core classification, targeting, and age-bucket rules. | `node tests/unit/v2-folder-governance-cleanup-matrix.test.js` | docs |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2-link-audit.js — tests individual link checking rules | `node tests/unit/v2-link-audit.test.js [flags]` | docs |
| `tests/unit/v2-wcag-audit.test.js` | Unit tests for v2-wcag-audit.js — tests individual WCAG rules | `node tests/unit/v2-wcag-audit.test.js [flags]` | docs |
| `tests/unit/validate-codex-task-contract.test.js` | Tests validate-codex-task-contract.js — validates contract checking logic | `node tests/unit/validate-codex-task-contract.test.js [flags]` | docs |
| `tests/utils/file-walker.js` | File tree walker — recursively finds files matching patterns. Used by pre-commit hook and validators. | `node tests/utils/file-walker.js [flags]` | docs |
| `tests/utils/mdx-parser.js` | MDX parser utility — extracts frontmatter, components, content blocks from MDX files | `node tests/utils/mdx-parser.js [flags]` | docs |
| `tests/utils/mintignore.js` | Mintignore utility — reads .mintignore patterns and filters file lists | `node tests/utils/mintignore.js [flags]` | docs |
| `tests/utils/openapi-rolling-issue.js` | OpenAPI rolling issue utility — creates/updates GitHub issues for persistent OpenAPI audit findings | `node tests/utils/openapi-rolling-issue.js [flags]` | docs |
| `tests/utils/spell-checker.js` | Spell checker utility — checks text against custom dictionary with en-GB locale support | `node tests/utils/spell-checker.js [flags]` | docs |
{/* SCRIPT-INDEX:END */}
