# tests Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Category | Purpose | Usage | Owner |
|---|---|---|---|---|---|
| `tests/integration/browser.test.js` | Puppeteer browser integration test — renders pages from docs.json and checks for console errors, load failures, and visual regressions | validator | qa:content-quality | `node tests/integration/browser.test.js [flags]` | docs |
| `tests/integration/domain-pages-audit.js` | Audits deployed docs page HTTP status codes (v1, v2, or both) and emits a stable JSON report | validator | qa:repo-health | `node tests/integration/domain-pages-audit.js [flags]` | docs |
| `tests/integration/mdx-component-runtime-smoke.js` | Smoke-tests sentinel MDX routes for runtime component failures, focused on page-killing render errors from MDX-imported JSX modules. | validator | qa:content-quality | `node tests/integration/mdx-component-runtime-smoke.js [--routes route[,route...]] [--base-url http://localhost:3000]` | docs |
| `tests/integration/openapi-reference-audit.js` | Comprehensive OpenAPI spec validation — checks references, schemas, examples. Supports --strict (validate), --fix (repair), and report modes. | validator | tooling:api-spec | `node tests/integration/openapi-reference-audit.js [flags]` | docs |
| `tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit — checks internal links, external links, anchor refs. Supports --staged, --full, --strict, --write-links modes. | validator | qa:link-integrity | `node tests/integration/v2-link-audit.js [flags]` | docs |
| `tests/integration/v2-link-audit.selftest.js` | Self-test suite for v2-link-audit.js — validates audit logic against known fixtures | validator | qa:link-integrity | `node tests/integration/v2-link-audit.selftest.js [flags]` | docs |
| `tests/integration/v2-wcag-audit.js` | WCAG accessibility audit for v2 pages — checks heading hierarchy, alt text, ARIA. Supports --fix mode for auto-repair. | validator | qa:content-quality | `node tests/integration/v2-wcag-audit.js [flags]` | docs |
| `tests/integration/v2-wcag-audit.selftest.js` | Self-test suite for v2-wcag-audit.js — validates WCAG audit logic against known fixtures | validator | qa:content-quality | `node tests/integration/v2-wcag-audit.selftest.js [flags]` | docs |
| `tests/run-all.js` | Test orchestrator — dispatches all unit test suites. Called by pre-commit hook and npm test. | orchestrator | infrastructure:pipeline-orchestration | `node tests/run-all.js [flags]` | docs |
| `tests/run-pr-checks.js` | PR orchestrator — runs changed-file scoped validation checks for pull request CI. Dispatches per-file validators based on PR diff. | orchestrator | infrastructure:pipeline-orchestration | `node tests/run-pr-checks.js [flags]` | docs |
| `tests/unit/codex-commit.test.js` | Tests codex-commit.js — validates commit message generation and contract compliance | validator | governance:agent-governance | `node tests/unit/codex-commit.test.js [flags]` | docs |
| `tests/unit/codex-safe-merge-with-stash.test.js` | Tests codex-safe-merge-with-stash.js — validates safe merge logic with stash handling | utility | governance:agent-governance | `node tests/unit/codex-safe-merge-with-stash.test.js [flags]` | docs |
| `tests/unit/codex-skill-sync.test.js` | Tests sync-codex-skills.js — validates skill file synchronisation between sources | validator | governance:agent-governance | `node tests/unit/codex-skill-sync.test.js [flags]` | docs |
| `tests/unit/create-codex-pr.test.js` | Tests create-codex-pr.js — validates PR creation logic and branch naming | generator | governance:agent-governance | `node tests/unit/create-codex-pr.test.js [flags]` | docs |
| `tests/unit/docs-guide-sot.test.js` | Validates docs-guide source-of-truth coverage, README pointers, and generated index freshness | validator | qa:repo-health | `node tests/unit/docs-guide-sot.test.js [flags]` | docs |
| `tests/unit/docs-navigation.test.js` | Validates docs.json page-entry syntax, reports missing routes, warns on orphaned canonical v2 pages, suggests remaps, and optionally applies approved remaps | validator | qa:repo-health | `node tests/unit/docs-navigation.test.js [flags]` | docs |
| `tests/unit/links-imports.test.js` | Validates MDX internal links and snippet import paths are resolvable | validator | qa:link-integrity | `node tests/unit/links-imports.test.js [flags]` | docs |
| `tests/unit/lpd-scoped-mint-dev.test.js` | Tests lpd scoped mint-dev functionality — validates dev server scope filtering | utility | tooling:dev-tools | `node tests/unit/lpd-scoped-mint-dev.test.js [flags]` | docs |
| `tests/unit/mdx-component-runtime-smoke.test.js` | Unit tests for the MDX runtime smoke helpers — covers arg parsing, sentinel route selection, trigger logic, and failure classification. | validator | qa:content-quality | `node tests/unit/mdx-component-runtime-smoke.test.js` | docs |
| `tests/unit/mdx-component-scope.test.js` | Unit tests for the MDX-facing component scope validator — covers unsafe private helpers, safe inline logic, and imported helper patterns. | validator | qa:repo-health | `node tests/unit/mdx-component-scope.test.js` | docs |
| `tests/unit/mdx-guards.test.js` | Enforces MDX guardrails — globals imports, math delimiters, markdown table line breaks | validator | qa:content-quality | `node tests/unit/mdx-guards.test.js [flags]` | docs |
| `tests/unit/mdx.test.js` | Validates MDX syntax and structure — checks for parse errors, invalid JSX, broken components | validator | qa:content-quality | `node tests/unit/mdx.test.js [flags]` | docs |
| `tests/unit/migrate-assets-to-branch.test.js` | Unit tests for migrate-assets-to-branch.js — validates CLI defaults, ambiguous basename detection, deterministic rewrites, and end-to-end branch migration in a temp git repo | validator | qa:repo-health | `node tests/unit/migrate-assets-to-branch.test.js` | docs |
| `tests/unit/openapi-reference-audit.test.js` | Unit tests for openapi-reference-audit.js — tests individual audit rules and fix logic | validator | tooling:api-spec | `node tests/unit/openapi-reference-audit.test.js [flags]` | docs |
| `tests/unit/openapi-rolling-issue.test.js` | Tests OpenAPI rolling issue tracker — validates issue creation and dedup logic | validator | tooling:api-spec | `node tests/unit/openapi-rolling-issue.test.js [flags]` | docs |
| `tests/unit/quality.test.js` | Content quality checks — validates frontmatter completeness, thin content detection, placeholder flagging | validator | qa:content-quality | `node tests/unit/quality.test.js [flags]` | docs |
| `tests/unit/repair-spelling.test.js` | Unit tests for repair-spelling.js — validates deterministic spelling fixes and exclusion ranges | validator | qa:content-quality | `node tests/unit/repair-spelling.test.js [flags]` | docs |
| `tests/unit/repo-audit-pipeline.test.js` | Tests repo-audit-orchestrator.js pipeline — validates mode/scope combinations and report output | validator | qa:repo-health | `node tests/unit/repo-audit-pipeline.test.js [flags]` | docs |
| `tests/unit/script-docs.test.js` | Enforces script header schema, keeps group script indexes in sync, and builds aggregate script index | validator | qa:repo-health | `node tests/unit/script-docs.test.js [flags]` | docs |
| `tests/unit/spelling.test.js` | Spelling check — validates content against custom dictionary with en-GB rules | validator | qa:content-quality | `node tests/unit/spelling.test.js [flags]` | docs |
| `tests/unit/style-guide.test.js` | Style guide compliance — checks en-GB conventions, heading case, formatting rules | validator | qa:content-quality | `node tests/unit/style-guide.test.js [flags]` | docs |
| `tests/unit/usefulness-journey.test.js` | Tests journey-check evaluation logic against fixture pages. | utility | qa:content-quality | `node tests/unit/usefulness-journey.test.js` | docs |
| `tests/unit/usefulness-rubric.test.js` | Tests rubric-based scoring logic against fixture pages. | utility | qa:content-quality | `node tests/unit/usefulness-rubric.test.js` | docs |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2-link-audit.js — tests individual link checking rules | validator | qa:link-integrity | `node tests/unit/v2-link-audit.test.js [flags]` | docs |
| `tests/unit/v2-wcag-audit.test.js` | Unit tests for v2-wcag-audit.js — tests individual WCAG rules | validator | qa:content-quality | `node tests/unit/v2-wcag-audit.test.js [flags]` | docs |
| `tests/unit/validate-codex-task-contract.test.js` | Tests validate-codex-task-contract.js — validates contract checking logic | enforcer | governance:agent-governance | `node tests/unit/validate-codex-task-contract.test.js [flags]` | docs |
| `tests/utils/file-walker.js` | File tree walker — recursively finds files matching patterns. Used by pre-commit hook and validators. | utility | tooling:dev-tools | `node tests/utils/file-walker.js [flags]` | docs |
| `tests/utils/mdx-parser.js` | MDX parser utility — extracts frontmatter, components, content blocks from MDX files | validator | tooling:dev-tools | `node tests/utils/mdx-parser.js [flags]` | docs |
| `tests/utils/mintignore.js` | Mintignore utility — reads .mintignore patterns and filters file lists | validator | tooling:dev-tools | `node tests/utils/mintignore.js [flags]` | docs |
| `tests/utils/openapi-rolling-issue.js` | OpenAPI rolling issue utility — creates/updates GitHub issues for persistent OpenAPI audit findings | validator | tooling:api-spec | `node tests/utils/openapi-rolling-issue.js [flags]` | docs |
| `tests/utils/spell-checker.js` | Spell checker utility — checks text against custom dictionary with en-GB locale support | validator | qa:content-quality | `node tests/utils/spell-checker.js [flags]` | docs |
{/* SCRIPT-INDEX:END */}
