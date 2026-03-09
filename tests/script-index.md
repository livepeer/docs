# tests Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `tests/integration/browser.test.js` | Puppeteer browser integration test — renders pages from docs.json and checks for console errors, load failures, and visual regressions | `node tests/integration/browser.test.js [flags]` | docs |
| `tests/integration/domain-pages-audit.js` | Audits deployed docs page HTTP status codes (v1, v2, or both) and emits a stable JSON report | `node tests/integration/domain-pages-audit.js [flags]` | docs |
| `tests/integration/openapi-reference-audit.js` | Comprehensive OpenAPI spec validation — checks references, schemas, examples. Supports --strict (validate), --fix (repair), and report modes. | `node tests/integration/openapi-reference-audit.js [flags]` | docs |
| `tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit — checks internal links, external links, anchor refs. Supports --staged, --full, --strict, --write-links modes. | `node tests/integration/v2-link-audit.js [flags]` | docs |
| `tests/integration/v2-link-audit.selftest.js` | Self-test suite for v2-link-audit.js — validates audit logic against known fixtures | `node tests/integration/v2-link-audit.selftest.js [flags]` | docs |
| `tests/integration/v2-wcag-audit.js` | WCAG accessibility audit for v2 pages — checks heading hierarchy, alt text, ARIA. Supports --fix mode for auto-repair. | `node tests/integration/v2-wcag-audit.js [flags]` | docs |
| `tests/integration/v2-wcag-audit.selftest.js` | Self-test suite for v2-wcag-audit.js — validates WCAG audit logic against known fixtures | `node tests/integration/v2-wcag-audit.selftest.js [flags]` | docs |
| `tests/run-all 2.js` | Utility script for tests/run-all.js. | `*   node tests/run-all.js` | docs |
| `tests/run-all.js` | Test orchestrator — dispatches all unit test suites. Called by pre-commit hook and npm test. | `node tests/run-all.js [flags]` | docs |
| `tests/run-pr-checks.js` | PR orchestrator — runs changed-file scoped validation checks for pull request CI. Dispatches per-file validators based on PR diff. | `node tests/run-pr-checks.js [flags]` | docs |
| `tests/unit/audit-script-inventory-repair-rules.test.js` | Tests audit-script-inventory repair hardening rules for judgement-field backfill and pipeline safety. | `node tests/unit/audit-script-inventory-repair-rules.test.js` | docs |
| `tests/unit/codex-commit.test.js` | Tests codex-commit.js — validates commit message generation and contract compliance | `node tests/unit/codex-commit.test.js [flags]` | docs |
| `tests/unit/codex-safe-merge-with-stash.test.js` | Tests codex-safe-merge-with-stash.js — validates safe merge logic with stash handling | `node tests/unit/codex-safe-merge-with-stash.test.js [flags]` | docs |
| `tests/unit/codex-skill-sync.test.js` | Tests sync-codex-skills.js — validates skill file synchronisation between sources | `node tests/unit/codex-skill-sync.test.js [flags]` | docs |
| `tests/unit/component-governance-generators.test.js` | Verifies component governance generators produce coherent registry, usage-map, and docs outputs. | `node tests/unit/component-governance-generators.test.js` | docs |
| `tests/unit/component-governance-utils.test.js` | Verifies shared component governance utility parsing, scanning, and archive exclusion behavior. | `node tests/unit/component-governance-utils.test.js` | docs |
| `tests/unit/components/TEMPLATE.test.js` | Template for category-scoped component unit tests. | `node tests/unit/components/TEMPLATE.test.js` | docs |
| `tests/unit/create-codex-pr.test.js` | Tests create-codex-pr.js — validates PR creation logic and branch naming | `node tests/unit/create-codex-pr.test.js [flags]` | docs |
| `tests/unit/docs-guide-sot.test.js` | Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness | `node tests/unit/docs-guide-sot.test.js [flags]` | docs |
| `tests/unit/docs-navigation.test.js` | Validates docs.json page-entry syntax, reports missing routes, warns on orphaned canonical v2 pages, suggests remaps, and optionally applies approved remaps | `node tests/unit/docs-navigation.test.js [flags]` | docs |
| `tests/unit/docs-usefulness-accuracy-verifier.test.js` | Tests accuracy verification rules — GitHub vs DeepWiki precedence, freshness, fallback, and cache reuse | `node tests/unit/docs-usefulness-accuracy-verifier.test.js [flags]` | docs |
| `tests/unit/links-imports.test.js` | Validates MDX internal links and snippet import paths are resolvable | `node tests/unit/links-imports.test.js [flags]` | docs |
| `tests/unit/lpd-scoped-mint-dev.test.js` | Tests lpd scoped mint-dev functionality — validates dev server scope filtering | `node tests/unit/lpd-scoped-mint-dev.test.js [flags]` | docs |
| `tests/unit/mdx-guards.test.js` | Enforces MDX guardrails — globals imports, math delimiters, markdown table line breaks | `node tests/unit/mdx-guards.test.js [flags]` | docs |
| `tests/unit/mdx.test.js` | Validates MDX syntax and structure — checks for parse errors, invalid JSX, broken components | `node tests/unit/mdx.test.js [flags]` | docs |
| `tests/unit/openapi-reference-audit.test.js` | Unit tests for openapi-reference-audit.js — tests individual audit rules and fix logic | `node tests/unit/openapi-reference-audit.test.js [flags]` | docs |
| `tests/unit/openapi-rolling-issue.test.js` | Tests OpenAPI rolling issue tracker — validates issue creation and dedup logic | `node tests/unit/openapi-rolling-issue.test.js [flags]` | docs |
| `tests/unit/quality.test.js` | Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging | `node tests/unit/quality.test.js [flags]` | docs |
| `tests/unit/repair-governance.test.js` | Tests repair-governance.js for safe dry-run, fix, rollback, strict exit handling, and workflow contract coverage. | `node tests/unit/repair-governance.test.js` | docs |
| `tests/unit/repair-spelling.test.js` | Unit tests for repair-spelling.js — validates deterministic spelling fixes and exclusion ranges | `node tests/unit/repair-spelling.test.js [flags]` | docs |
| `tests/unit/repo-audit-pipeline.test.js` | Tests repo-audit-orchestrator.js pipeline — validates mode/scope combinations and report output | `node tests/unit/repo-audit-pipeline.test.js [flags]` | docs |
| `tests/unit/script-docs.test.js` | Enforces script header schema, keeps group script indexes in sync, and builds aggregate script index | `node tests/unit/script-docs.test.js [flags]` | docs |
| `tests/unit/spelling.test.js` | Spelling check — validates content against custom dictionary with en-GB rules | `node tests/unit/spelling.test.js [flags]` | docs |
| `tests/unit/style-guide.test.js` | Style guide compliance — checks en-GB conventions, heading case, formatting rules | `node tests/unit/style-guide.test.js [flags]` | docs |
| `tests/unit/usefulness-journey.test.js` | Validate journey completeness evaluation and journey-config guardrails for usefulness scoring. | `*   node tests/unit/usefulness-journey.test.js` | docs |
| `tests/unit/usefulness-rubric.test.js` | Validate usefulness rubric loading, rule evaluator coverage, argument deprecations, route precedence, and score divergence behavior. | `*   node tests/unit/usefulness-rubric.test.js` | docs |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2-link-audit.js — tests individual link checking rules | `node tests/unit/v2-link-audit.test.js [flags]` | docs |
| `tests/unit/v2-wcag-audit.test.js` | Unit tests for v2-wcag-audit.js — tests individual WCAG rules | `node tests/unit/v2-wcag-audit.test.js [flags]` | docs |
| `tests/unit/validate-codex-task-contract.test.js` | Tests validate-codex-task-contract.js — validates contract checking logic | `node tests/unit/validate-codex-task-contract.test.js [flags]` | docs |
| `tests/utils/file-walker.js` | File tree walker — recursively finds files matching patterns. Used by pre-commit hook and validators. | `node tests/utils/file-walker.js [flags]` | docs |
| `tests/utils/mdx-parser.js` | MDX parser utility — extracts frontmatter, components, content blocks from MDX files | `node tests/utils/mdx-parser.js [flags]` | docs |
| `tests/utils/mintignore.js` | Mintignore utility — reads .mintignore patterns and filters file lists | `node tests/utils/mintignore.js [flags]` | docs |
| `tests/utils/openapi-rolling-issue.js` | OpenAPI rolling issue utility — creates/updates GitHub issues for persistent OpenAPI audit findings | `node tests/utils/openapi-rolling-issue.js [flags]` | docs |
| `tests/utils/spell-checker.js` | Spell checker utility — checks text against custom dictionary with en-GB locale support | `node tests/utils/spell-checker.js [flags]` | docs |
{/* SCRIPT-INDEX:END */}
