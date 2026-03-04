# tests Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Owner |
|---|---|---|---|
| `tests/integration/browser.test.js` | Utility script for tests/integration/browser.test.js. | `node tests/integration/browser.test.js` | docs |
| `tests/integration/domain-pages-audit.js` | Audit deployed docs page load status and emit a stable JSON report. | `node tests/integration/domain-pages-audit.js --version both` | docs |
| `tests/integration/openapi-reference-audit.js` | Audit V2 OpenAPI references against canonical specs with optional conservative autofix. | `node tests/integration/openapi-reference-audit.js --full --strict --report /tmp/openapi-audit.md --report-json /tmp/openapi-audit.json` | docs |
| `tests/integration/v2-link-audit.js` | Comprehensive V2 MDX link audit with internal strict checks and optional external URL validation. | `node tests/integration/v2-link-audit.js --full --write-links --strict` | docs |
| `tests/integration/v2-link-audit.selftest.js` | Script-level self-tests for v2 link audit external validation using a local HTTP fixture and temporary MDX file. | `node tests/integration/v2-link-audit.selftest.js` | docs |
| `tests/integration/v2-wcag-audit.js` | Audit v2 docs.json navigation pages for accessibility (WCAG 2.2 AA) with deterministic reports and conservative source autofixes. | `node tests/integration/v2-wcag-audit.js --full` | docs |
| `tests/integration/v2-wcag-audit.selftest.js` | Script-level self-tests for the v2 WCAG audit (local HTTP + Puppeteer axe run, and temp-file fix/stage behavior without Mintlify). | `node tests/integration/v2-wcag-audit.selftest.js` | docs |
| `tests/run-all.js` | Utility script for tests/run-all.js. | `node tests/run-all.js` | docs |
| `tests/run-pr-checks.js` | Run changed-file scoped validation checks for pull request CI, including Codex skill sync and codex task-contract enforcement. | `node tests/run-pr-checks.js --base-ref main` | docs |
| `tests/unit/codex-commit.test.js` | Validate codex commit helper behavior for normal commits and explicit audited no-verify override handling. | `node tests/unit/codex-commit.test.js` | docs |
| `tests/unit/codex-safe-merge-with-stash.test.js` | Validate safe merge helper behavior for clean merges, dirty-tree stash/restore, and conflict handling. | `node tests/unit/codex-safe-merge-with-stash.test.js` | docs |
| `tests/unit/codex-skill-sync.test.js` | Validate template-driven Codex skill sync behavior including check drift, safe upsert, subset sync, and openai.yaml generation. | `node tests/unit/codex-skill-sync.test.js` | docs |
| `tests/unit/create-codex-pr.test.js` | Validate codex PR body generation and dry-run create behavior from task-contract input. | `node tests/unit/create-codex-pr.test.js` | docs |
| `tests/unit/docs-guide-sot.test.js` | Validate docs-guide source-of-truth coverage, README pointers, and generated index freshness. | `node tests/unit/docs-guide-sot.test.js` | docs |
| `tests/unit/docs-navigation.test.js` | Validate docs.json page-entry syntax in check-only mode by default, with optional report writing and approved remaps. | `./lpd tests unit docs-navigation.test` | docs |
| `tests/unit/docs-usefulness-accuracy-verifier.test.js` | Validate source-weighted 2026 accuracy verification rules (GitHub vs DeepWiki precedence, freshness, fallback, and cache reuse). | `node tests/unit/docs-usefulness-accuracy-verifier.test.js` | docs |
| `tests/unit/links-imports.test.js` | Utility script for tests/unit/links-imports.test.js. | `node tests/unit/links-imports.test.js` | docs |
| `tests/unit/lpd-scoped-mint-dev.test.js` | Validate scoped lpd mint-dev profile filtering, generated .mintignore exclusions, and dry-run flag wiring. | `node tests/unit/lpd-scoped-mint-dev.test.js` | docs |
| `tests/unit/mdx-guards.test.js` | Enforce MDX guardrails for globals imports, math delimiters, and markdown table line breaks. | `node tests/unit/mdx-guards.test.js` | docs |
| `tests/unit/mdx.test.js` | Utility script for tests/unit/mdx.test.js. | `node tests/unit/mdx.test.js` | docs |
| `tests/unit/openapi-reference-audit.test.js` | Unit tests for OpenAPI reference audit parsing, mapping, validation findings, and conservative autofix behavior. | `node tests/unit/openapi-reference-audit.test.js` | docs |
| `tests/unit/openapi-rolling-issue.test.js` | Unit tests for OpenAPI rolling issue dedupe, action selection, body formatting, and top-findings limits. | `node tests/unit/openapi-rolling-issue.test.js` | docs |
| `tests/unit/quality.test.js` | Utility script for tests/unit/quality.test.js. | `node tests/unit/quality.test.js` | docs |
| `tests/unit/repo-audit-pipeline.test.js` | Validate audit skill discovery, orchestrator dry-run output, cleanup manifest safety, and cross-agent packaging outputs. | `node tests/unit/repo-audit-pipeline.test.js` | docs |
| `tests/unit/script-docs.test.js` | Enforce script header schema, keep group script indexes in sync, and build aggregate script index. | `node tests/unit/script-docs.test.js --staged --write --stage --autofill` | docs |
| `tests/unit/spelling.test.js` | Utility script for tests/unit/spelling.test.js. | `node tests/unit/spelling.test.js` | docs |
| `tests/unit/style-guide.test.js` | Utility script for tests/unit/style-guide.test.js. | `node tests/unit/style-guide.test.js` | docs |
| `tests/unit/v2-link-audit.test.js` | Unit tests for v2 link audit args, external validation helpers, and x-* scope exclusion behavior. | `node tests/unit/v2-link-audit.test.js` | docs |
| `tests/unit/v2-wcag-audit.test.js` | Unit tests for v2 WCAG audit helper logic (args, thresholds, route mapping, report sorting, and conservative autofixes). | `node tests/unit/v2-wcag-audit.test.js` | docs |
| `tests/unit/validate-codex-task-contract.test.js` | Validate codex task-contract marker and issue-readiness enforcement behavior. | `node tests/unit/validate-codex-task-contract.test.js` | docs |
| `tests/utils/file-walker.js` | Utility script for tests/utils/file-walker.js. | `node tests/utils/file-walker.js` | docs |
| `tests/utils/mdx-parser.js` | Utility script for tests/utils/mdx-parser.js. | `node tests/utils/mdx-parser.js` | docs |
| `tests/utils/mintignore.js` | Helpers to evaluate .mintignore using gitignore semantics for test scanners. | `node tests/utils/mintignore.js` | docs |
| `tests/utils/openapi-rolling-issue.js` | Shared helpers for OpenAPI rolling issue formatting, dedupe, and action selection. | `const helpers = require('./tests/utils/openapi-rolling-issue');` | docs |
| `tests/utils/spell-checker.js` | Utility script for tests/utils/spell-checker.js. | `node tests/utils/spell-checker.js` | docs |
{/* SCRIPT-INDEX:END */}
