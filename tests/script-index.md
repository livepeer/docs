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
| `tests/run-all.js` | Utility script for tests/run-all.js. | `*   node tests/run-all.js` | docs |
| `tests/run-pr-checks.js` | Run changed-file scoped validation checks for pull request CI, including Codex skill sync and codex task-contract enforcement. | `*   node tests/run-pr-checks.js --base-ref main` | docs |
| `tests/unit/codex-commit.test.js` | Tests codex-commit.js — validates commit message generation and contract compliance | `node tests/unit/codex-commit.test.js [flags]` | docs |
| `tests/unit/codex-safe-merge-with-stash.test.js` | Tests codex-safe-merge-with-stash.js — validates safe merge logic with stash handling | `node tests/unit/codex-safe-merge-with-stash.test.js [flags]` | docs |
| `tests/unit/codex-skill-sync.test.js` | Tests sync-codex-skills.js — validates skill file synchronisation between sources | `node tests/unit/codex-skill-sync.test.js [flags]` | docs |
| `tests/unit/create-codex-pr.test.js` | Tests create-codex-pr.js — validates PR creation logic and branch naming | `node tests/unit/create-codex-pr.test.js [flags]` | docs |
| `tests/unit/docs-guide-sot.test.js` | Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness | `node tests/unit/docs-guide-sot.test.js [flags]` | docs |
| `tests/unit/docs-navigation.test.js` | Validates docs.json page-entry syntax, reports missing routes, suggests remaps, and optionally applies approved remaps | `node tests/unit/docs-navigation.test.js [flags]` | docs |
| `tests/unit/docs-usefulness-accuracy-verifier.test.js` | Tests accuracy verification rules — GitHub vs DeepWiki precedence, freshness, fallback, and cache reuse | `node tests/unit/docs-usefulness-accuracy-verifier.test.js [flags]` | docs |
| `tests/unit/links-imports.test.js` | Validates MDX internal links and snippet import paths are resolvable | `node tests/unit/links-imports.test.js [flags]` | docs |
| `tests/unit/lpd-scoped-mint-dev.test.js` | Tests lpd scoped mint-dev functionality — validates dev server scope filtering | `node tests/unit/lpd-scoped-mint-dev.test.js [flags]` | docs |
| `tests/unit/mdx-guards.test.js` | Enforces MDX guardrails — globals imports, math delimiters, markdown table line breaks | `node tests/unit/mdx-guards.test.js [flags]` | docs |
| `tests/unit/mdx.test.js` | Validates MDX syntax and structure — checks for parse errors, invalid JSX, broken components | `node tests/unit/mdx.test.js [flags]` | docs |
| `tests/unit/openapi-reference-audit.test.js` | Unit tests for openapi-reference-audit.js — tests individual audit rules and fix logic | `node tests/unit/openapi-reference-audit.test.js [flags]` | docs |
| `tests/unit/openapi-rolling-issue.test.js` | Tests OpenAPI rolling issue tracker — validates issue creation and dedup logic | `node tests/unit/openapi-rolling-issue.test.js [flags]` | docs |
| `tests/unit/quality.test.js` | Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging | `node tests/unit/quality.test.js [flags]` | docs |
| `tests/unit/repo-audit-pipeline.test.js` | Tests repo-audit-orchestrator.js pipeline — validates mode/scope combinations and report output | `node tests/unit/repo-audit-pipeline.test.js [flags]` | docs |
| `tests/unit/script-docs.test.js` | Enforces script header schema, keeps group script indexes in sync, and builds aggregate script index | `node tests/unit/script-docs.test.js [flags]` | docs |
| `tests/unit/spelling.test.js` | Spelling check — validates content against custom dictionary with en-GB rules | `node tests/unit/spelling.test.js [flags]` | docs |
| `tests/unit/style-guide.test.js` | Style guide compliance — checks en-GB conventions, heading case, formatting rules | `node tests/unit/style-guide.test.js [flags]` | docs |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2-link-audit.js — tests individual link checking rules | `node tests/unit/v2-link-audit.test.js [flags]` | docs |
| `tests/unit/v2-wcag-audit.test.js` | Unit tests for v2-wcag-audit.js — tests individual WCAG rules | `node tests/unit/v2-wcag-audit.test.js [flags]` | docs |
| `tests/unit/validate-codex-task-contract.test.js` | Tests validate-codex-task-contract.js — validates contract checking logic | `node tests/unit/validate-codex-task-contract.test.js [flags]` | docs |
| `tests/utils/file-walker.js` | Utility script for tests/utils/file-walker.js. | `*   node tests/utils/file-walker.js` | docs |
| `tests/utils/mdx-parser.js` | Utility script for tests/utils/mdx-parser.js. | `*   node tests/utils/mdx-parser.js` | docs |
| `tests/utils/mintignore.js` | Helpers to evaluate .mintignore using gitignore semantics for test scanners. | `*   node tests/utils/mintignore.js` | docs |
| `tests/utils/openapi-rolling-issue.js` | Shared helpers for OpenAPI rolling issue formatting, dedupe, and action selection. | `*   const helpers = require('./tests/utils/openapi-rolling-issue');` | docs |
| `tests/utils/spell-checker.js` | Utility script for tests/utils/spell-checker.js. | `*   node tests/utils/spell-checker.js` | docs |
{/* SCRIPT-INDEX:END */}
