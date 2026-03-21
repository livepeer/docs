# Full Script Inventory Audit

Generated: 2026-03-21T03:20:59.990Z
Mode: dry-run
Scan roots: .githooks, .github/scripts, workspace/scripts, operations/tests/unit, operations/tests/integration, operations/tests/utils, operations/tests, operations/scripts, tools/lib, tools/notion, tools/config, snippets/automations

## Summary

Total scripts discovered: 265
By trigger category:
- Unmanaged: 0
- Orphaned: 7
- P1 - Commit gate: 36
- P2 - Push gate: 11
- P3 - PR gate: 0
- P5 - Scheduled: 8
- P6 - On-demand: 4
- Indirect - Library: 84
- Manual - CLI only: 115

Grade distribution: A 0 | B 66 | C 168 | F 31
Pipeline verification: MATCH 214 | MISMATCH 49 | MISSING 2
Classification JSON sync: In JSON 265 | Not in JSON 0 | Phantom 0
Output chain summary: 0 chains detected

## Repair

- Mode: dry-run
- Total fixes: 377
- Files modified: 0
- Needs human: 202

## Orphaned

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/generators/ai/llm/generate-llms-files.js | MISSING | governance:index-management | manual, P6 | manual (none) | MISMATCH:phantom claim P6 | , operations/scripts/generators/ai/llm/llms.txt, operations/scripts/generators/ai/llm/llms-full.txt | No | operations/scripts, docs.json, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/generators/content/seo/generate-ai-sitemap.js | MISSING | governance:index-management | manual, P6 | manual (none) | MISMATCH:phantom claim P6 | operations/scripts/generators/content/seo/sitemap-ai.xml | No | operations/scripts, docs.json, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/generators/governance/catalogs/generate-script-registry.js | MISSING | governance:index-management | P3 | manual (none) | MISMATCH:phantom claim P3 | operations/scripts/generators/governance/catalogs/tools/config/script-registry.json | No | operations/scripts, operations/tests, workspace/scripts, .githooks, .github/scripts | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, phantom-pipeline |
| operations/tests/run-pr-checks.js | orchestrator | infrastructure:pipeline-orchestration | P2, P3 | indirect via operations/tests/unit/run-pr-checks.test.js; indirect via operations/tests/unit/usefulness-rubric.test.js; manual (npm script: test:pr) | MISMATCH:phantom claim P2, P3 | stdout only | No | changed | R-R29 | 8/9 | B | header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/usefulness-journey.test.js | utility | qa:content-quality | P3 | indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | stdout only | No | full-repo | R-R14, R-C6 | 8/9 | B | header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/usefulness-rubric.test.js | utility | qa:content-quality | P3 | indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | stdout only | No | full-repo | R-R14, R-C6 | 8/9 | B | header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/docs-route-scope.test.js | validator | qa:repo-health | P1 (commit, via run-all) | manual (none) | MISMATCH:phantom claim P1 | stdout only | No | tests, docs.json | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |

## P1 - Commit gate

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/validators/ai/codex/check-no-ai-stash.sh | MISSING | governance:agent-governance | manual | P1 (pre-commit) | MISMATCH:undeclared automation P1 | none detected | No | tools/scripts, .githooks/pre-commit | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/validators/ai/codex/validate-locks.js | MISSING | governance:agent-governance | commit), P2 (push) | P1 (pre-commit) | MISMATCH:phantom claim P2; undeclared automation P1 | stdout only | No | operations/scripts/codex, .codex/locks-local, .codex/task-contract.yaml | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, phantom-pipeline, undeclared-automation |
| operations/scripts/validators/governance/compliance/validate-codex-task-contract.js | MISSING | governance:agent-governance | commit), P2 (push), P3 (PR, Track B) | P1 (pre-commit); P3 (Codex Governance); indirect via .githooks/pre-commit | MISMATCH:phantom claim P2; undeclared automation P1 | stdout only | No | operations/scripts, .codex/task-contract.yaml, operations/tests/onfig/codex-issue-policy.json, .github/pull_request_template.md, .github/pull-request-template-v2.md | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, phantom-pipeline, undeclared-automation |
| operations/tests/unit/ai-tools-registry.test.js | validator | governance:agent-governance | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | stdout only | No | tests/unit, ai-tools/registry, tools/lib/ai-tools-registry.js, operations/scripts/validate-ai-tools-registry.js, docs-guide/catalog/ai-tools.mdx, docs-guide/policies/source-of-truth-policy.mdx, docs-guide/policies/audit-system-overview.mdx, docs-guide/policies/skill-pipeline-map.mdx, tools/config/ownerless-governance-surfaces.json | R-R14, R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/check-agent-docs-freshness.test.js | validator | governance:agent-governance | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | stdout only | No | tests/unit, operations/scripts/validators/governance/check-agent-docs-freshness.js, AGENTS.md, .github/copilot-instructions.md, .claude, .cursor, .windsurf, docs-guide/policies, contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md | R-R14, R-R18 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/export-portable-skills.test.js | validator | governance:agent-governance | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | operations/tests/unit/${String(number).padStart(2, '0')}-${name}.template.md, operations/tests/unit/${String(number).padStart(2, '0')}-${name}.template.md | No | tests/unit, operations/scripts/export-portable-skills.js, tools/lib/codex-skill-templates.js, ai-tools/agent-packs/skills | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/ownerless-governance.test.js | validator | governance:agent-governance | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | stdout only | No | tests/unit, tests/utils, tests/WHEN-TESTS-RUN.md, docs-guide, tools/config/ownerless-governance-surfaces.json, AGENTS.md, .allowlist, .github, .claude, .cursor, .windsurf, README.md, contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md | R-R14, R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/root-allowlist-format.test.js | validator | governance:agent-governance | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | stdout only | No | tests/unit, .allowlist, AGENTS.md, .claude, .cursor, .windsurf | R-R14, R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/skill-docs.test.js | validator | governance:agent-governance | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | stdout only | No | tests/unit, ai-tools/ai-skills, tools/lib/codex-skill-templates.js | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/generators/content/catalogs/generate-pages-index.js | MISSING | governance:index-management | manual | P1 via run-all; indirect via operations/tests/run-all.js | MISMATCH:undeclared automation P1 |  | No | operations/scripts, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| .githooks/pre-commit | orchestrator | infrastructure:pipeline-orchestration | P1 (commit, hook entry point) | P1 (pre-commit) | MATCH | stdout only | No | .githooks | R-R29 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/validators/content/structure/check-double-headers.js | MISSING | qa:content-quality | manual → staged .mdx files → exit-code, stdout:violations; --fix → staged .mdx files → edited files | P1 via run-all; indirect via operations/tests/run-all.js | MISMATCH:undeclared automation P1 | stdout only | No | v2-content | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/validators/content/structure/check-mdx-safe-markdown.js | MISSING | qa:content-quality | manual | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; manual (npm script: test:mdx:safe); manual (npm script: test:mdx:safe) | MISMATCH:undeclared automation P1 | stdout only | No | full-repo | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/tests/integration/browser.test.js | validator | qa:content-quality | P1 | P1 via run-all; indirect via operations/tests/run-all.js; manual (npm script: test:browser); manual (npm script: test:browser); manual (npm script: test:browser:all) | MATCH | stdout only | No | tests | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/integration/v2-wcag-audit.js | validator | qa:content-quality | P1 | P1 via run-all; indirect via operations/tests/integration/v2-wcag-audit.selftest.js; indirect via operations/tests/run-all.js; indirect via operations/tests/unit/v2-wcag-audit.test.js; manual (npm script: test:wcag); manual (npm script: test:wcag:staged); manual (npm script: test:wcag:nofix) | MATCH | stdout only | No | v2-content | E-R1, R-R11 | 8/9 | B | header-json-category-mismatch |
| operations/tests/unit/copy-lint.test.js | validator | qa:content-quality | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | stdout only | No | tests/unit, tests/copy-lint-fixtures, tools/scripts | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/docs-authoring-rules.test.js | validator | qa:content-quality | P1 (commit, via run-all) | P1 via run-all; indirect via operations/tests/run-all.js | MATCH | stdout only | No | tests, tools/lib | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/docs-page-scope.test.js | validator | qa:content-quality | P1 (commit, via run-all) | P1 via run-all; indirect via operations/tests/run-all.js | MATCH | operations/tests/unit/authored.mdx | No | tests, tools/lib | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/frontmatter-taxonomy.test.js | validator | qa:content-quality | P1 (commit, via run-all) | P1 via run-all; indirect via operations/tests/run-all.js | MATCH | stdout only | No | tests, tools/lib | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/mdx-guards.test.js | validator | qa:content-quality | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; manual (npm script: test:mdx:guards) | MISMATCH:phantom claim P3 | stdout only | No | tests, v2/pages, snippets/pages, snippets/snippetsWiki | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/mdx-safe-markdown.test.js | validator | qa:content-quality | P1 (commit, via run-all) | P1 via run-all; indirect via operations/tests/run-all.js; manual (npm script: test:mdx:safe:unit) | MATCH | stdout only | No | tests/unit, tests/fixtures/mdx-safe-markdown, tools/lib, operations/scripts/remediators/content, operations/scripts/validators/content | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/mdx.test.js | validator | qa:content-quality | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; manual (npm script: test:mdx); manual (npm script: test:mdx) | MISMATCH:phantom claim P3 | stdout only | No | tests | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/quality.test.js | validator | qa:content-quality | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; manual (npm script: test:quality); manual (npm script: test:quality) | MISMATCH:phantom claim P3 | stdout only | No | tests | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/spelling.test.js | validator | qa:content-quality | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; indirect via operations/tests/unit/repair-spelling.test.js; manual (npm script: test:spell); manual (npm script: test:spell) | MISMATCH:phantom claim P3 | stdout only | No | tests | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/style-guide.test.js | validator | qa:content-quality | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; manual (npm script: test:style); manual (npm script: test:style) | MISMATCH:phantom claim P3 | stdout only | No | tests | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/links-imports.test.js | validator | qa:link-integrity | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; manual (npm script: test:links); manual (npm script: test:links) | MISMATCH:phantom claim P3 | stdout only | No | tests | E-R12, E-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/validators/components/library/check-naming-conventions.js | MISSING | qa:repo-health | manual | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js | MISMATCH:undeclared automation P1 | stdout only | No | operations/scripts/validators/components, operations/tests/un-all.js, operations/tests/un-pr-checks.js, snippets/components | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/tests/unit/component-governance-generators.test.js | validator | qa:repo-health | P1 (commit, via run-all) | P1 via run-all; indirect via operations/tests/run-all.js; manual (npm script: test:components:governance) | MATCH | stdout only | No | tests | R-R10 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/component-governance-utils.test.js | validator | qa:repo-health | P1 (commit, via run-all) | P1 via run-all; indirect via operations/tests/run-all.js; manual (npm script: test:components:governance) | MATCH | operations/tests/unit/styling-scan.jsx | No | tests | R-R10 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/docs-guide-sot.test.js | validator | qa:repo-health | P1, P2, P3, manual | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; manual (npm script: test:docs-guide) | MISMATCH:phantom claim P2, P3 | stdout only | No | tests, docs-guide, README.md, operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js, operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js, operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/docs-navigation.test.js | validator | qa:repo-health | P1, P3, P6 | P1 via run-all; P6 (Docs Translation Pipeline); indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; manual (npm script: test:docs-nav); manual (npm script: test:docs-nav:write) | MISMATCH:phantom claim P3 | operations/tests/unit/workspace/reports/navigation-links/navigation-report.json, operations/tests/unit/workspace/reports/navigation-links/navigation-report.md | No | tests, docs.json | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/docs-path-sync.test.js | validator | qa:repo-health | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js | MISMATCH:phantom claim P3 | ,  | No | tests/unit, operations/scripts/lib, operations/scripts/validators/content, operations/scripts/remediators/content, lpd | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/precommit-staged-cache.test.js | validator | qa:repo-health | P1, manual | P1 via run-all; indirect via operations/tests/run-all.js; manual (npm script: test:precommit-cache) | MATCH | operations/tests/unit/.git-hooks-disabled | No | tests/unit, tools/lib/precommit-staged-cache.js | R-R14, R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/script-docs.test.js | validator | qa:repo-health | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; indirect via operations/tests/unit/docs-guide-sot.test.js; manual (npm script: test:scripts) | MISMATCH:phantom claim P3 |  | No | .githooks, .github/scripts, tests, tools/scripts, workspace/scripts, docs-guide/catalog/scripts-catalog.mdx | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/ui-template-generator.test.js | validator | qa:repo-health | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js | MISMATCH:phantom claim P3 | stdout only | No | tests, operations/scripts/generate-ui-templates.js, .vscode, snippets/templates, docs-guide/component-registry.json | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/tests/unit/authoring-tools.test.js | validator | tooling:dev-tools | P1, P3 | P1 via run-all; indirect via operations/tests/run-all.js; manual (npm script: test:authoring-tools) | MISMATCH:phantom claim P3 | stdout only | No | tests/unit, tools/vscode/authoring-tools, operations/scripts/format-mdx.js | E-C6, F-C1 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |

## P2 - Push gate

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/generators/components/library/generate-component-registry.js | MISSING | governance:index-management | manual, P3, P5, P6, manual, manual | P2 (Docs CI - Content Quality Suite); P3 (Docs CI - Content Quality Suite); P5 (Content Health Check cron 0 6 * * 1); P6 (Content Health Check); indirect via operations/tests/unit/component-governance-generators.test.js; manual (npm script: registry:components) | MISMATCH:undeclared automation P2 | operations/scripts/generators/components/library/component-registry.json, operations/scripts/generators/components/library/component-registry-schema.json | No | single-domain | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/generators/content/catalogs/generate-docs-index.js | MISSING | governance:index-management | manual, P3, P6 | P2 (Check Docs Index); P2 (Generate Docs Index); P3 (Check Docs Index); P6 (Check Docs Index); P6 (Generate Docs Index); P6 (Docs Translation Pipeline) | MISMATCH:undeclared automation P2 | operations/scripts/generators/content/catalogs/docs-index.json, operations/scripts/generators/content/catalogs/missing-frontmatter.md,  | No | operations/scripts, tools/lib, v2, docs.json, root | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/governance/pipelines/governance-pipeline.js | MISSING | governance:repo-health | manual, P6, manual, manual | P2 (Governance sync (post-merge)); P5 (Governance Repair cron 0 5 * * 1); P6 (Governance Repair); indirect via operations/tests/unit/repair-governance.test.js; manual (npm script: repair:governance) | MISMATCH:undeclared automation P2, P5 |  | No | full-repo | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/validators/governance/pr/check-component-immutability.js | MISSING | governance:repo-health | manual | P2 (Docs CI - Content Quality Suite); P3 (Docs CI - Content Quality Suite) | MISMATCH:undeclared automation P2, P3 | stdout only | No | changed | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/automations/content/data/fetching/fetch-external-docs.sh | MISSING | infrastructure:data-feeds | manual | P2 (Docs CI - Content Quality Suite); P2 (Docs CI - V2 Browser Sweep); P3 (Check Broken Links); P3 (Docs CI - Content Quality Suite); P3 (Docs CI - V2 Browser Sweep); manual (npm script: fetch-docs); manual (npm script: prebuild) | MISMATCH:undeclared automation P2, P3 | none detected | No | tools/scripts | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| .githooks/pre-push | orchestrator | infrastructure:pipeline-orchestration | P2 (push, hook entry point) | P2 (pre-push) | MATCH | none detected | No | .githooks, tools/scripts/validate-codex-task-contract.js, .codex/task-contract.yaml | R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/run-all.js | orchestrator | infrastructure:pipeline-orchestration | P1, P2, P3 | P2 (Docs CI - V2 Browser Sweep); P3 (Docs CI - V2 Browser Sweep); manual (npm script: test); manual (npm script: test:precommit); manual (npm script: test) | MISMATCH:phantom claim P1 | stdout only | No | tests | R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/validators/components/documentation/check-component-docs.js | MISSING | qa:repo-health | manual, P3 | P2 (Docs CI - Content Quality Suite); P3 (Docs CI - Content Quality Suite) | MISMATCH:undeclared automation P2 | stdout only | No | single-domain | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/validators/components/library/check-component-css.js | MISSING | qa:repo-health | manual → component .jsx files → exit-code, stdout:violations; --fix → component .jsx files → CSS token replacements, P3 | P2 (Docs CI - Content Quality Suite); P3 (Docs CI - Content Quality Suite) | MISMATCH:undeclared automation P2 | stdout only | No | single-domain | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/tests/integration/openapi-reference-audit.js | validator | tooling:api-spec | P2, P3, P5, P6 | P2 (OpenAPI Reference Validation); P3 (OpenAPI Reference Validation); P5 (OpenAPI Reference Validation cron 35 4 * * *); P6 (OpenAPI Reference Validation); indirect via operations/tests/unit/openapi-reference-audit.test.js; manual (npm script: test:openapi:audit) | MATCH | stdout only | No | full-repo | F-R17 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/validators/content/structure/test-v2-pages.js | utility | tooling:dev-tools | P2, P3 | P2 (Docs CI - V2 Browser Sweep); P3 (Docs CI - V2 Browser Sweep); indirect via operations/tests/integration/browser.test.js; indirect via operations/tests/integration/v2-wcag-audit.js; indirect via operations/tests/integration/v2-wcag-audit.selftest.js; manual (npm script: test:v2-pages); manual (npm script: test:all-pages) | MATCH | operations/scripts/validators/content/structure/workspace/reports/page-audits/v2-page-test-report.json | No | operations/scripts | E-C6, F-C1 | 8/9 | B | header-json-category-mismatch |

## P5 - Scheduled

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/audits/components/library/scan-component-imports.js | MISSING | governance:index-management | manual, P6, manual | P5 (Content Health Check cron 0 6 * * 1); P6 (Content Health Check); indirect via operations/tests/unit/component-governance-generators.test.js | MISMATCH:undeclared automation P5 | operations/scripts/audits/components/library/component-usage-map.json | No | generated-output | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/remediators/components/library/repair-component-metadata.js | MISSING | governance:repo-health | manual, P6, manual | P5 (Content Health Check cron 0 6 * * 1); P6 (Content Health Check); indirect via operations/tests/unit/component-governance-generators.test.js | MISMATCH:undeclared automation P5 | stdout only | No | single-domain | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| .github/scripts/fetch-forum-data.js | automation | infrastructure:data-feeds | P5, P6 | P5 (Update Forum Data cron 0 0 * * *); P6 (Update Forum Data) | MATCH | .github/scripts/snippets/automations/forum, .github/scripts/snippets/automations/forum/forumData.jsx | No | .github/scripts | F-R1 | 8/9 | B | header-json-category-mismatch |
| .github/scripts/fetch-ghost-blog-data.js | automation | infrastructure:data-feeds | P5, P6 | P5 (Update Ghost Blog Data cron 0 0 * * *); P6 (Update Ghost Blog Data) | MATCH | .github/scripts/snippets/automations/blog, .github/scripts/snippets/automations/blog/ghostBlogData.jsx | No | .github/scripts | F-R1 | 8/9 | B | header-json-category-mismatch |
| .github/scripts/fetch-youtube-data.js | automation | infrastructure:data-feeds | P5, P6 | P5 (Update YouTube Data cron 0 0 * * 0); P6 (Update YouTube Data) | MATCH | .github/scripts/snippets/automations/youtube/youtubeData.jsx | No | .github/scripts | F-R1 | 8/9 | B | header-json-category-mismatch |
| .github/scripts/project-showcase-sync.js | automation | infrastructure:data-feeds | P5, P6 | P5 (Project Showcase Sync cron */15 * * * *); P6 (Project Showcase Sync) | MATCH | stdout only | No | .github/scripts | F-R1 | 8/9 | B | header-json-category-mismatch |
| operations/tests/integration/v2-link-audit.js | validator | qa:link-integrity | P1, P5, P6 | P5 (V2 External Link Audit (Advisory) cron 0 4 * * *); P6 (V2 External Link Audit (Advisory)); indirect via operations/tests/integration/v2-link-audit.selftest.js; indirect via operations/tests/unit/v2-link-audit.test.js; manual (npm script: test:link-audit); manual (npm script: test:link-audit:staged); manual (npm script: test:link-audit:external) | MISMATCH:phantom claim P1 | operations/tests/integration/hrefs.jsx | No | tests | E-R12, E-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/validators/components/library/component-layout-governance.js | MISSING | qa:repo-health | manual | P5 (Content Health Check cron 0 6 * * 1); P6 (Content Health Check); manual (npm script: audit:component-layout) | MISMATCH:undeclared automation P5, P6 | operations/scripts/validators/components/library/${STAGE_ID}.json, operations/scripts/validators/components/library/${STAGE_ID}.md | No | operations/scripts, v2, tools/config/component-layout-profile.json | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |

## P6 - On-demand

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/remediators/content/seo/generate-seo.js | MISSING | feature:seo | on-demand, SEO refresh) | P6 (SEO Metadata Refresh); manual (npm script: generate-seo); manual (npm script: generate-seo:dry-run) | MISMATCH:undeclared automation P6 | stdout only | No | operations/scripts | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/automations/content/language-translation/generate-localized-docs-json.js | MISSING | feature:translation | on-demand, translation pipeline) | P6 (Docs Translation Pipeline); indirect via operations/scripts/automations/content/language-translation/test/cli-guardrails.test.js; manual (npm script: i18n:docs-json) | MISMATCH:undeclared automation P6 | stdout only | No | docs.json, operations/scripts/i18n | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/automations/content/language-translation/translate-docs.js | MISSING | feature:translation | on-demand, translation pipeline) | P6 (Docs Translation Pipeline); indirect via operations/scripts/automations/content/language-translation/test/cli-guardrails.test.js; manual (npm script: i18n:translate) | MISMATCH:undeclared automation P6 |  | No | operations/scripts/i18n, docs.json, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |
| operations/scripts/automations/content/language-translation/validate-generated.js | MISSING | feature:translation | manual | P6 (Docs Translation Pipeline); manual (npm script: i18n:validate) | MISMATCH:undeclared automation P6 | stdout only | No | operations/scripts/i18n, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch, undeclared-automation |

## Indirect - Library

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/x-archive/update-og-image.js | remediator | feature:seo | manual — interactive developer helper | indirect via operations/scripts/x-archive/batch-update-og-image.sh | MATCH | stdout only | No | tools/scripts | E-R19, F-R7 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/common.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/generate-localized-docs-json.js; indirect via operations/scripts/automations/content/language-translation/lib/config.js; indirect via operations/scripts/automations/content/language-translation/lib/docs-json-localizer.js; indirect via operations/scripts/automations/content/language-translation/lib/docs-routes.js; indirect via operations/scripts/automations/content/language-translation/lib/path-utils.js; indirect via operations/scripts/automations/content/language-translation/lib/provider-openrouter.js; indirect via operations/scripts/automations/content/language-translation/translate-docs.js; indirect via operations/scripts/automations/content/language-translation/validate-generated.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/config.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/generate-localized-docs-json.js; indirect via operations/scripts/automations/content/language-translation/translate-docs.js; indirect via operations/scripts/automations/content/language-translation/validate-generated.js; indirect via operations/scripts/validators/content/structure/enforce-generated-file-banners.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/docs-json-localizer.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/generate-localized-docs-json.js; indirect via operations/scripts/automations/content/language-translation/test/docs-json-localizer.test.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/docs-routes.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/generate-localized-docs-json.js; indirect via operations/scripts/automations/content/language-translation/translate-docs.js; indirect via operations/scripts/automations/content/language-translation/validate-generated.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/frontmatter.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/test/frontmatter.test.js; indirect via operations/scripts/automations/content/language-translation/test/provenance.test.js; indirect via operations/scripts/automations/content/language-translation/translate-docs.js; indirect via operations/scripts/automations/content/language-translation/validate-generated.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/mdx-parser.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/lib/mdx-translate.js; indirect via operations/scripts/automations/content/language-translation/validate-generated.js; indirect via operations/scripts/remediators/content/repair/repair-spelling.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/mdx-translate.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/lib/docs-json-localizer.js; indirect via operations/scripts/automations/content/language-translation/lib/frontmatter.js; indirect via operations/scripts/automations/content/language-translation/test/mdx-translate.test.js; indirect via operations/scripts/automations/content/language-translation/translate-docs.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/path-utils.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/lib/docs-json-localizer.js; indirect via operations/scripts/automations/content/language-translation/lib/docs-routes.js; indirect via operations/scripts/automations/content/language-translation/lib/mdx-translate.js; indirect via operations/scripts/automations/content/language-translation/translate-docs.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/provenance.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/lib/docs-routes.js; indirect via operations/scripts/automations/content/language-translation/test/provenance.test.js; indirect via operations/scripts/automations/content/language-translation/translate-docs.js; indirect via operations/scripts/automations/content/language-translation/validate-generated.js; indirect via operations/scripts/generators/components/documentation/generate-component-docs.js; indirect via operations/scripts/validators/content/structure/enforce-generated-file-banners.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/provider-mock.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/lib/providers.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/provider-openrouter.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/lib/providers.js; indirect via operations/scripts/automations/content/language-translation/test/provider-openrouter.test.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/lib/providers.js | utility | feature:translation | indirect — library module | indirect via operations/scripts/automations/content/language-translation/generate-localized-docs-json.js; indirect via operations/scripts/automations/content/language-translation/test/provider-openrouter.test.js; indirect via operations/scripts/automations/content/language-translation/translate-docs.js | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/audits/content/veracity/docs-page-research.js | MISSING | governance:agent-governance | manual — experimental research system | indirect via operations/tests/unit/docs-page-research.test.js | MATCH | stdout only | No | operations/scripts, workspace/research/claims operations/tests/unit/docs-page-research.test.js, workspace/reports/repo-ops | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/ai/codex/lock-release.js | MISSING | governance:agent-governance | manual — interactive developer tool, not suited for automated pipelines | indirect via operations/scripts/dispatch/ai/codex/task-finalise.js | MATCH | operations/scripts/automations/ai/codex/.codex/locks-local | No | operations/scripts/codex, .codex/locks-local, .codex/task-contract.yaml | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/ai/codex/task-cleanup.js | MISSING | governance:agent-governance | manual — interactive developer tool, not suited for automated pipelines | indirect via operations/scripts/automations/ai/codex/lock-release.js; indirect via operations/scripts/dispatch/ai/codex/task-finalise.js | MATCH | stdout only | No | operations/scripts/codex, .codex/locks-local, .codex/task-contract.yaml | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/ai/codex/task-preflight.js | MISSING | governance:agent-governance | manual — codex setup tool referenced by .githooks/pre-commit guidance, not auto-executed | indirect via .githooks/pre-commit | MATCH | operations/scripts/automations/ai/codex/.codex/locks-local, operations/scripts/automations/ai/codex/${lock.lock_id}.json, operations/scripts/automations/ai/codex/.codex/locks-local | No | operations/scripts/codex, .codex/task-contract.yaml, .codex/locks-local | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/veracity/docs-fact-registry.js | MISSING | governance:agent-governance | manual — experimental research system | indirect via operations/scripts/audits/content/veracity/docs-page-research.js | MATCH | stdout only | No | operations/scripts, workspace/research/claims operations/tests/unit/docs-fact-registry.test.js | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js | MISSING | governance:agent-governance | manual, ci | indirect via operations/tests/unit/check-agent-docs-freshness.test.js | MATCH | stdout only | No | operations/scripts/validators/governance, AGENTS.md, .github, .claude, .cursor, .cursorrules, .windsurf, .augment, .mintlify, docs-guide/policies, ai-tools/ai-skills, contribute | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| tools/lib/ai-tools-registry.js | utility | governance:agent-governance | indirect -- library module used by validator and test surfaces | indirect via operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js; indirect via operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js; indirect via operations/tests/run-pr-checks.js; indirect via operations/tests/unit/ai-tools-registry.test.js | MATCH |  | No | tools/lib, ai-tools/registry, tools/scripts/validate-ai-tools-registry.js, tests/unit/ai-tools-registry.test.js, docs-guide/catalog/ai-tools.mdx, docs-guide/policies/source-of-truth-policy.mdx, tools/config/ownerless-governance-surfaces.json | R-R14, R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/codex-skill-templates.js | utility | governance:agent-governance | indirect -- library module | indirect via operations/scripts/automations/ai/agents/export-portable-skills.js; indirect via operations/scripts/automations/ai/agents/sync-codex-skills.js | MATCH | none detected | No | tools/lib, ai-tools/ai-skills/templates, tools/scripts/sync-codex-skills.js, tools/scripts/export-portable-skills.js | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/generators/components/documentation/generate-component-docs.js | MISSING | governance:index-management | manual | indirect via operations/tests/unit/component-governance-generators.test.js | MATCH | operations/scripts/generators/components/documentation/.editorial-cache.json, operations/scripts/generators/components/documentation/update-component-library.sh | No | generated-output | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/generators/components/library/generate-ui-templates.js | MISSING | governance:index-management | manual — interactive developer tool, not suited for automated pipelines | indirect via operations/tests/unit/docs-guide-sot.test.js; indirect via operations/tests/unit/ui-template-generator.test.js | MATCH | stdout only | No | operations/scripts, docs-guide/catalog, docs-guide/features, snippets/templates, v2/templates, .vscode | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/x-archive/sync-legacy-root-v1.js | generator | governance:index-management | manual — on-demand maintainer sync tool | indirect via operations/tests/unit/legacy-root-v1-redirects.test.js | MATCH | stdout only | No | full-repo | E-C1, R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-index-utils.js | utility | governance:index-management | indirect — library module | indirect via operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js; indirect via operations/scripts/generators/content/catalogs/generate-docs-index.js; indirect via operations/scripts/generators/content/seo/generate-ai-sitemap.js; indirect via operations/tests/unit/legacy-root-v1-redirects.test.js; indirect via tools/notion/sync-v2-en-canonical.js | MATCH | none detected | No | tools/lib, tools/scripts, v2 | R-R16, R-R17 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/generated-artifacts.js | utility | governance:index-management | indirect — library module | indirect via operations/scripts/generators/content/catalogs/generate-docs-index.js; indirect via operations/scripts/validators/content/structure/enforce-generated-file-banners.js; indirect via operations/tests/unit/generated-artifacts-policy.test.js | MATCH | none detected | No | tools/lib, tools/config, .githooks, tests/unit | R-R16, R-R17 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/generated-file-banners.js | utility | governance:index-management | indirect — library module | indirect via operations/scripts/automations/content/language-translation/translate-docs.js; indirect via operations/scripts/generators/components/documentation/generate-component-docs.js; indirect via operations/scripts/generators/components/library/generate-ui-templates.js; indirect via operations/scripts/generators/content/catalogs/generate-pages-index.js; indirect via operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js; indirect via operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js; indirect via operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js; indirect via operations/scripts/validators/content/structure/enforce-generated-file-banners.js; indirect via operations/tests/unit/docs-guide-sot.test.js; indirect via operations/tests/unit/script-docs.test.js; indirect via tools/lib/docs-page-scope.js | MATCH | none detected | No | full-repo | R-R16, R-R17 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/audits/content/quality/audit-media-assets.js | MISSING | governance:repo-health | manual — diagnostic/investigation tool, run on-demand only | indirect via operations/scripts/remediators/content/repair/migrate-assets-to-branch.js | MATCH | stdout only | No | operations/scripts, workspace/reports/media-audit | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js | MISSING | governance:repo-health | manual | indirect via operations/tests/unit/v2-folder-governance-cleanup-matrix.test.js | MATCH |  | No | operations/scripts, tools/lib, workspace/reports/repo-ops, v2, docs.json operations/tests/unit/v2-folder-governance-cleanup-matrix.test.js | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/repair/migrate-assets-to-branch.js | MISSING | governance:repo-health | manual | indirect via operations/tests/unit/migrate-assets-to-branch.test.js | MATCH | stdout only | No | full-repo | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/governance/pr/audit-script-inventory.js | MISSING | governance:repo-health | commit), manual | indirect via operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js; indirect via operations/tests/unit/audit-script-inventory-repair-rules.test.js | MATCH |  | No | full-repo | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| tools/lib/component-governance-utils.js | utility | governance:repo-health | indirect | indirect via operations/scripts/audits/components/documentation/audit-component-usage.js; indirect via operations/scripts/audits/components/library/scan-component-imports.js; indirect via operations/scripts/generators/components/documentation/generate-component-docs.js; indirect via operations/scripts/generators/components/library/generate-component-registry.js; indirect via operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js; indirect via operations/scripts/remediators/components/library/repair-component-metadata.js; indirect via operations/scripts/validators/components/documentation/check-component-docs.js; indirect via operations/scripts/validators/components/library/check-component-css.js; indirect via operations/scripts/validators/content/structure/verify-all-pages.js; indirect via operations/tests/unit/component-governance-utils.test.js | MATCH | none detected | No | single-domain | R-R10 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-publishability.js | utility | governance:repo-health | indirect | indirect via operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js; indirect via operations/scripts/generators/content/catalogs/generate-pages-index.js; indirect via operations/scripts/validators/content/structure/check-anchor-usage.js; indirect via operations/scripts/validators/content/structure/check-description-quality.js; indirect via operations/scripts/validators/content/structure/check-page-endings.js; indirect via operations/tests/integration/openapi-reference-audit.js; indirect via operations/tests/unit/docs-navigation.test.js; indirect via operations/tests/utils/file-walker.js; indirect via tools/lib/component-governance-utils.js; indirect via tools/lib/mdx-safe-markdown.js | MATCH | none detected | No | tools/lib, tests, tools/scripts | E-C6, F-C1 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/script-governance-config.js | utility | governance:repo-health | indirect -- library module | indirect via operations/scripts/dispatch/governance/pipelines/governance-pipeline.js; indirect via operations/scripts/generators/governance/catalogs/generate-script-registry.js; indirect via operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js; indirect via operations/scripts/validators/governance/pr/audit-script-inventory.js; indirect via operations/tests/run-pr-checks.js; indirect via operations/tests/unit/script-docs.test.js | MATCH | none detected | No | full-repo | R-R14, R-R18, R-C6 | 8/9 | B | header-json-category-mismatch |
| tools/lib/script-header-utils.js | utility | governance:repo-health | indirect - library module | indirect via operations/scripts/audits/governance/scripts/audit-script-categories.js; indirect via operations/scripts/generators/governance/catalogs/generate-script-registry.js; indirect via operations/scripts/validators/governance/pr/audit-script-inventory.js; indirect via operations/tests/run-pr-checks.js; indirect via operations/tests/unit/script-docs.test.js | MATCH | none detected | No | full-repo | R-R14, R-R18 | 8/9 | B | header-json-category-mismatch |
| tools/lib/precommit-staged-cache.js | orchestrator | infrastructure:pipeline-orchestration | indirect -- library module | indirect via operations/tests/unit/precommit-staged-cache.test.js | MATCH | none detected | No | .githooks, tests, tools/lib, tools/scripts | R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/audits/content/quality/audit-v2-usefulness.js | MISSING | qa:content-quality | manual — diagnostic/investigation tool, run on-demand only | indirect via operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js; indirect via operations/tests/unit/usefulness-rubric.test.js | MATCH | stdout only | No | operations/scripts, v2, workspace/reports, tools/config | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/repair/repair-spelling.js | MISSING | qa:content-quality | manual | indirect via operations/tests/unit/repair-spelling.test.js | MATCH | operations/scripts/remediators/content/repair/before.mdx, operations/scripts/remediators/content/repair/after.mdx | No | v2-content | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/copy/lint-copy.js | MISSING | qa:content-quality | manual | indirect via operations/tests/unit/copy-lint.test.js | MATCH | stdout only | No | staged, changed, v2-content, single-file | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/copy/lint-patterns.js | MISSING | qa:content-quality | manual | indirect via operations/tests/unit/copy-lint.test.js | MATCH | stdout only | No | staged, changed, v2-content, single-file | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/structure/lint-structure.js | MISSING | qa:content-quality | manual | indirect via operations/tests/unit/copy-lint.test.js | MATCH | stdout only | No | staged, changed, v2-content, single-file | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/tests/integration/mdx-component-runtime-smoke.js | validator | qa:content-quality | manual | indirect via operations/tests/unit/mdx-component-runtime-smoke.test.js | MATCH | stdout only | No | tests/integration, .githooks/server-manager.js, tests/run-pr-checks.js | E-R1, R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/utils/spell-checker.js | validator | qa:content-quality | indirect — library module | indirect via operations/tests/unit/spelling.test.js | MATCH | none detected | No | tests | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/docs-authoring-rules.js | utility | qa:content-quality | indirect | indirect via operations/tests/unit/docs-authoring-rules.test.js; indirect via operations/tests/unit/style-guide.test.js; indirect via tools/lib/mdx-safe-markdown.js | MATCH | none detected | No | tools/lib, tests, tools/scripts | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/docs-page-scope.js | utility | qa:content-quality | indirect | indirect via operations/scripts/audits/content/quality/audit-v2-usefulness.js; indirect via operations/scripts/validators/content/structure/check-description-quality.js; indirect via operations/scripts/validators/content/structure/check-page-endings.js; indirect via operations/tests/unit/copy-lint.test.js; indirect via operations/tests/unit/docs-page-scope.test.js; indirect via operations/tests/unit/quality.test.js; indirect via operations/tests/unit/spelling.test.js; indirect via operations/tests/unit/style-guide.test.js; indirect via operations/tests/utils/file-walker.js; indirect via tools/lib/mdx-safe-markdown.js | MATCH | none detected | No | tools/lib, tests, tools/scripts | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/docs-usefulness/scoring.js | utility | qa:content-quality | indirect — library module | indirect via operations/scripts/audits/content/quality/audit-v2-usefulness.js; indirect via operations/scripts/remediators/content/classification/assign-purpose-metadata.js; indirect via operations/tests/unit/usefulness-rubric.test.js; indirect via tools/notion/sync-v2-en-canonical.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/frontmatter-taxonomy.js | utility | qa:content-quality | indirect -- library module | indirect via operations/scripts/remediators/content/classification/add-pagetype-mechanical.js; indirect via operations/tests/unit/frontmatter-taxonomy.test.js; indirect via operations/tests/unit/quality.test.js; indirect via tools/lib/docs-usefulness/rubric-loader.js | MATCH | none detected | No | tools/lib, tests | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/mdx-safe-markdown.js | utility | qa:content-quality | indirect -- library module | indirect via operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js; indirect via operations/scripts/validators/content/structure/check-mdx-safe-markdown.js; indirect via operations/tests/run-pr-checks.js; indirect via operations/tests/unit/mdx-safe-markdown.test.js | MATCH | none detected | No | full-repo | E-R1, R-R11 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/audits/components/documentation/audit-component-usage.js | MISSING | qa:repo-health | manual | indirect via operations/tests/unit/component-governance-generators.test.js | MATCH | operations/scripts/audits/components/documentation/component-usage-audit.json | No | operations/scripts | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/config/docs-path-sync.js | MISSING | qa:repo-health | manual -- library module | indirect via operations/scripts/remediators/content/repair/sync-docs-paths.js; indirect via operations/scripts/validators/content/structure/check-docs-path-sync.js; indirect via operations/tests/unit/docs-path-sync.test.js | MATCH |  | No | full-repo | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/repair/sync-docs-paths.js | MISSING | qa:repo-health | manual | indirect via operations/tests/unit/docs-path-sync.test.js | MATCH | stdout only | No | staged | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/components/library/check-mdx-component-scope.js | MISSING | qa:repo-health | manual | indirect via operations/tests/unit/mdx-component-scope.test.js | MATCH | stdout only | No | operations/scripts/validators/components, operations/tests/un-all.js, operations/tests/un-pr-checks.js, snippets/components, operations/tests/tils | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/structure/check-docs-path-sync.js | MISSING | qa:repo-health | manual | indirect via operations/tests/unit/docs-path-sync.test.js | MATCH | stdout only | No | staged | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| tools/lib/docs-usefulness/config-validator.js | utility | qa:repo-health | indirect -- library module | indirect via operations/scripts/audits/content/quality/audit-v2-usefulness.js; indirect via operations/scripts/remediators/content/classification/assign-purpose-metadata.js; indirect via operations/tests/unit/usefulness-journey.test.js; indirect via operations/tests/unit/usefulness-rubric.test.js | MATCH | none detected | No | single-domain | R-R14, R-C6 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/journey-check.js | utility | qa:repo-health | indirect -- library module | indirect via operations/scripts/audits/content/quality/audit-v2-usefulness.js; indirect via operations/tests/unit/usefulness-journey.test.js | MATCH | none detected | No | single-domain | R-R14, R-C6 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/llm-evaluator.js | utility | qa:repo-health | indirect -- library module | indirect via operations/scripts/audits/content/quality/audit-v2-usefulness.js; indirect via operations/tests/unit/usefulness-rubric.test.js | MATCH | .cache/llm-usefulness | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/changelog.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/concept.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/faq.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/glossary.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/how_to.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/landing.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/overview.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/reference.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/troubleshooting.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/tutorial.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/prompts/index.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/quality-gate.js | utility | qa:repo-health | indirect -- library module | indirect via tools/lib/docs-usefulness/scoring.js | MATCH | none detected | No | single-domain | R-R14, R-C6 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/rubric-loader.js | utility | qa:repo-health | indirect -- library module | indirect via operations/scripts/audits/content/quality/audit-v2-usefulness.js; indirect via operations/scripts/remediators/content/classification/assign-purpose-metadata.js; indirect via operations/tests/unit/quality.test.js; indirect via operations/tests/unit/usefulness-rubric.test.js; indirect via tools/lib/docs-usefulness/config-validator.js; indirect via tools/lib/docs-usefulness/journey-check.js; indirect via tools/lib/docs-usefulness/llm-evaluator.js; indirect via tools/lib/docs-usefulness/scoring.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| tools/lib/docs-usefulness/rule-evaluators.js | utility | qa:repo-health | indirect -- library module | indirect via operations/tests/unit/usefulness-rubric.test.js; indirect via tools/lib/docs-usefulness/scoring.js | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| operations/tests/utils/openapi-rolling-issue.js | validator | tooling:api-spec | indirect -- library module | indirect via operations/tests/unit/openapi-rolling-issue.test.js | MATCH | none detected | No | tests/utils, tests/unit, .github/workflows/openapi-reference-validation.yml | F-R17 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| .githooks/install.sh | MISSING | tooling:dev-tools | manual — developer tool | indirect via .githooks/pre-commit | MATCH | none detected | No | .githooks | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| .githooks/server-manager.js | MISSING | tooling:dev-tools | manual — legacy browser-validation module imported by .githooks/verify-browser.js | indirect via .githooks/verify-browser.js; indirect via operations/tests/integration/browser.test.js; indirect via operations/tests/integration/mdx-component-runtime-smoke.js; indirect via operations/tests/integration/v2-wcag-audit.js | MATCH | .githooks/mint-dev-test-${REPO_KEY}.log, .githooks/mint-dev-test-${REPO_KEY}.pid | No | .githooks | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/dispatch/content/veracity/docs-research-packet.js | MISSING | tooling:dev-tools | manual — packet generator for research review tranches | indirect via operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js; indirect via operations/tests/unit/docs-research-packet.test.js; indirect via operations/tests/unit/orchestrator-guides-research-review.test.js | MATCH | stdout only | No | operations/scripts, workspace/reports, tools/config/scoped-navigation, workspace/research operations/tests/unit/docs-research-packet.test.js operations/tests/unit/orchestrator-guides-research-review.test.js | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js | MISSING | tooling:dev-tools | manual — packet generator compatibility wrapper | indirect via operations/tests/unit/orchestrator-guides-research-review.test.js | MATCH | stdout only | No | operations/scripts, workspace/reports/orchestrator-guides-review, tools/config/scoped-navigation/docs-gate-work.json, workspace/research operations/tests/unit/orchestrator-guides-research-review.test.js | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/tests/utils/file-walker.js | utility | tooling:dev-tools | indirect — library module | indirect via operations/tests/integration/browser.test.js; indirect via operations/tests/integration/domain-pages-audit.js; indirect via operations/tests/integration/v2-link-audit.js; indirect via operations/tests/integration/v2-wcag-audit.js; indirect via operations/tests/run-all.js; indirect via operations/tests/run-pr-checks.js; indirect via operations/tests/unit/copy-lint.test.js; indirect via operations/tests/unit/docs-route-scope.test.js; indirect via operations/tests/unit/links-imports.test.js; indirect via operations/tests/unit/mdx.test.js; indirect via operations/tests/unit/quality.test.js; indirect via operations/tests/unit/spelling.test.js; indirect via operations/tests/unit/style-guide.test.js; indirect via operations/tests/unit/v2-wcag-audit.test.js | MATCH | none detected | No | tests | E-C6, F-C1 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/utils/mdx-parser.js | validator | tooling:dev-tools | indirect — library module | indirect via operations/tests/integration/v2-link-audit.js; indirect via operations/tests/unit/links-imports.test.js; indirect via operations/tests/unit/mdx.test.js; indirect via operations/tests/unit/quality.test.js; indirect via tools/lib/docs-usefulness/scoring.js | MATCH | none detected | No | tests | E-C6, F-C1 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/utils/mintignore.js | validator | tooling:dev-tools | indirect — library module | indirect via operations/tests/unit/docs-navigation.test.js; indirect via operations/tests/utils/file-walker.js | MATCH | none detected | No | tests | E-C6, F-C1 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/config/v2-internal-report-pages.js | config | tooling:dev-tools | manual — interactive developer tool, not suited for automated pipelines | indirect via operations/scripts/automations/governance/pipelines/publish-v2-internal-reports.js | MATCH | none detected | No | full-repo | E-C6, F-C1 | 8/9 | C | invalid-category, header-json-category-mismatch |
| tools/lib/load-js-yaml.js | utility | tooling:dev-tools | indirect — library module | indirect via operations/scripts/audits/governance/scripts/audit-script-categories.js; indirect via operations/scripts/automations/ai/codex/lock-release.js; indirect via operations/scripts/automations/ai/codex/task-cleanup.js; indirect via operations/scripts/dispatch/ai/codex/create-codex-pr.js; indirect via operations/scripts/generators/ai/llm/generate-llms-files.js; indirect via operations/scripts/generators/components/library/generate-ui-templates.js; indirect via operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js; indirect via operations/scripts/validators/ai/codex/validate-locks.js; indirect via operations/scripts/validators/content/structure/check-description-quality.js; indirect via operations/scripts/validators/governance/compliance/validate-codex-task-contract.js; indirect via operations/tests/integration/openapi-reference-audit.js; indirect via operations/tests/unit/skill-docs.test.js; indirect via operations/tests/utils/mdx-parser.js; indirect via tools/lib/codex-skill-templates.js; indirect via tools/lib/docs-index-utils.js | MATCH | none detected | No | tools/lib, tests, tools/scripts | E-C6, F-C1 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/load-minimatch.js | utility | tooling:dev-tools | indirect — library module | indirect via tools/lib/docs-usefulness/journey-check.js | MATCH | none detected | No | tools/lib, tests, tools/scripts | E-C6, F-C1 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/notion/1-read-notion-to-csv.js | automation | tooling:dev-tools | manual | indirect via tools/notion/3-check-duplicates.js; indirect via tools/notion/5-export-to-notion.js | MATCH | stdout only | No | external | node, @notionhq/client, dotenv, NOTION_API_KEY, NOTION_DATABASE_ID | 8/9 | B | header-json-category-mismatch |
| tools/notion/2-read-docs-to-csv.js | generator | tooling:dev-tools | manual | indirect via tools/notion/5-export-to-notion.js | MATCH | tools/notion/data, tools/notion/docs-read.csv, tools/notion/docs-read.json | No | external | node | 8/9 | B | header-json-category-mismatch |
| tools/notion/3-check-duplicates.js | validator | tooling:dev-tools | manual | indirect via tools/notion/4-remove-duplicates.js | MATCH | tools/notion/reports, tools/notion/duplicates-report.json, tools/notion/Duplicates.md | No | external | node | 8/9 | B | header-json-category-mismatch |
| tools/notion/4-remove-duplicates.js | remediator | tooling:dev-tools | manual | indirect via tools/notion/5-export-to-notion.js | MATCH | tools/notion/reports, tools/notion/notion-clean.json | No | external | node, @notionhq/client, dotenv, NOTION_API_KEY | 8/9 | B | header-json-category-mismatch |

## Manual - CLI only

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/remediators/governance/scaffold/fix-usage-paths.js | MISSING | MISSING | MISSING | manual (none) | MISSING | stdout only | No | MISSING | MISSING | 0/9 | F | missing-framework-header, missing-category, missing-purpose, missing-scope, missing-domain, missing-needs, missing-purpose-statement, missing-pipeline, missing-usage, header-json-category-mismatch |
| workspace/scripts/repair-registry.py | MISSING | MISSING | MISSING | manual (none) | MISSING | none detected | No | MISSING | MISSING | 0/9 | F | missing-framework-header, missing-category, missing-purpose, missing-scope, missing-domain, missing-needs, missing-purpose-statement, missing-pipeline, missing-usage, header-json-category-mismatch |
| operations/scripts/x-archive/batch-update-og-image.sh | remediator | feature:seo | manual — developer tool | manual (none) | MATCH | none detected | No | tools/scripts | E-R19, F-R7 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/x-archive/replace-og-image.py | remediator | feature:seo | manual — developer tool | manual (none) | MATCH | none detected | No | tools/scripts | E-R19, F-R7 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/x-archive/seo-generator-safe.js | generator | feature:seo | manual — interactive developer helper | manual (none) | MATCH | stdout only | No | tools/scripts | E-R19, F-R7 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/x-archive/update-all-og-images.js | remediator | feature:seo | manual — developer tool | manual (none) | MATCH | stdout only | No | tools/scripts | E-R19, F-R7 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/test/cli-guardrails.test.js | validator | feature:translation | manual — not yet in pipeline | manual (none) | MATCH | operations/scripts/automations/content/language-translation/test/i18n-empty-paths-${Date.now()}.txt | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/test/docs-json-localizer.test.js | validator | feature:translation | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/test/frontmatter.test.js | validator | feature:translation | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/test/mdx-translate.test.js | validator | feature:translation | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/test/provenance.test.js | validator | feature:translation | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/automations/content/language-translation/test/provider-openrouter.test.js | validator | feature:translation | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | operations/scripts | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/validators/content/language-translation/test-mintlify-version-language-toggle.js | enforcer | feature:translation | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | operations/scripts/i18n, docs.json, v2 | F-R6, F-R7 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/audits/content/veracity/docs-research-adjudication.js | MISSING | governance:agent-governance | manual — experimental research system | manual (none) | MATCH | stdout only | No | operations/scripts, workspace/research operations/tests/unit/docs-research-adjudication.test.js, workspace/reports/repo-ops, docs-guide/frameworks/research-skill-workflow.mdx | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/ai/agents/cross-agent-packager.js | MISSING | governance:agent-governance | manual — not yet in pipeline | manual (npm script: pack:agents) | MATCH | operations/scripts/automations/ai/agents/skills-manifest.json, operations/scripts/automations/ai/agents/rules.md, operations/scripts/automations/ai/agents/CLAUDE.md, operations/scripts/automations/ai/agents/README.md | No | operations/scripts, ai-tools/ai-skills/catalog, ai-tools/agent-packs | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/ai/agents/export-portable-skills.js | MISSING | governance:agent-governance | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | operations/scripts, ai-tools/ai-skills/templates, ai-tools/agent-packs, too../../../../lib/codex-skill-templates.js operations/tests/unit/export-portable-skills.test.js | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/ai/agents/sync-codex-skills.js | MISSING | governance:agent-governance | manual — not yet in pipeline | manual (npm script: skills:sync:codex); manual (npm script: skills:sync:codex:check) | MATCH | stdout only | No | operations/scripts, ai-tools/ai-skills/templates operations/tests/unit/codex-skill-sync.test.js | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js | MISSING | governance:agent-governance | PR, Track B) | manual (none) | MATCH | stdout only | No | operations/scripts, .github/workflows, codex PR governance | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/dispatch/ai/codex/codex-commit.js | MISSING | governance:agent-governance | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | operations/scripts, .githooks, ai-tools/ai-rules | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/dispatch/ai/codex/create-codex-pr.js | MISSING | governance:agent-governance | manual — not yet in pipeline | manual (npm script: codex:pr); manual (npm script: codex:pr:advisory) | MATCH |  | No | operations/scripts, .codex/task-contract.yaml | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/dispatch/ai/codex/task-finalise.js | MISSING | governance:agent-governance | manual — interactive developer tool, not suited for automated pipelines | manual (none) | MATCH | stdout only | No | operations/scripts/codex, operations/scripts/validate-codex-task-contract.js, operations/scripts/verify-pay-orc-gate-finalize.sh | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js | MISSING | governance:agent-governance | manual — experimental advisory PR integration, non-blocking | manual (npm script: codex:pr:research) | MATCH | stdout only | No | operations/scripts, workspace/research/claims, workspace/reports/repo-ops operations/tests/unit/docs-page-research-pr-report.test.js | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js | MISSING | governance:agent-governance | manual, ci | manual (none) | MATCH |  | No | operations/scripts, ai-tools/ai-skills, AGENTS.md, .github, .claude, .cursor, .windsurf, docs-guide/policies, contribute, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/style/repair-ownerless-language.js | MISSING | governance:agent-governance | manual | manual (none) | MATCH |  | No | AGENTS.md, .allowlist, .github, .claude, .cursor, .windsurf, README.md, contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md, docs-guide | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js | MISSING | governance:agent-governance | manual -- bounded validator CLI | manual (none) | MATCH | stdout only | No | operations/scripts, tools/lib/ai-tools-registry.js, ai-tools/registry operations/tests/unit/ai-tools-registry.test.js, tools/config/ownerless-governance-surfaces.json, docs-guide/policies/source-of-truth-policy.mdx, docs-guide/catalog/ai-tools.mdx, docs-guide/policies/audit-system-overview.mdx, docs-guide/policies/skill-pipeline-map.mdx | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/x-archive/codex-safe-merge-with-stash.js | utility | governance:agent-governance | manual — developer tool | manual (none) | MATCH | stdout only | No | tools/scripts, tools/scripts/codex | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/codex-commit.test.js | validator | governance:agent-governance | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/codex-commit.js | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/codex-safe-merge-with-stash.test.js | utility | governance:agent-governance | manual — developer tool | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/codex-safe-merge-with-stash.js | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/codex-skill-sync.test.js | validator | governance:agent-governance | manual — not yet in pipeline | manual (npm script: test:codex-skills-sync) | MATCH | operations/tests/unit/${String(number).padStart(2, '0')}-${name}.template.md, operations/tests/unit/${String(number).padStart(2, '0')}-${name}.template.md, operations/tests/unit/SKILL.md | No | tests/unit, operations/scripts/sync-codex-skills.js, ai-tools/ai-skills/templates | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/codex-task-cleanup.test.js | utility | governance:agent-governance | manual — developer tool | manual (npm script: test:codex-task-cleanup) | MATCH | operations/tests/unit/locks-local | No | tests/unit, operations/scripts/automations/ai/codex/task-cleanup.js | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/codex-task-preflight.test.js | utility | governance:agent-governance | manual — developer tool | manual (npm script: test:codex-task-preflight) | MATCH | stdout only | No | tests/unit, operations/scripts/automations/ai/codex/task-preflight.js | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/create-codex-pr.test.js | generator | governance:agent-governance | manual — not yet in pipeline | manual (npm script: test:codex-pr-create) | MATCH | stdout only | No | tests/unit, operations/scripts/create-codex-pr.js | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/docs-fact-registry.test.js | validator | governance:agent-governance | manual — experimental research system | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/docs-fact-registry.js, workspace/research/claims | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/docs-page-research-pr-report.test.js | orchestrator | governance:agent-governance | manual — experimental advisory PR integration, non-blocking | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/docs-page-research-pr-report.js, operations/scripts/docs-page-research.js, workspace/research/claims | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/docs-page-research.test.js | validator | governance:agent-governance | manual — experimental research system | manual (none) | MATCH | operations/tests/unit/.github/workflows/discord-issue-intake.yml | No | tests/unit, operations/scripts/docs-page-research.js, operations/scripts/docs-fact-registry.js, workspace/research/claims | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/docs-research-adjudication.test.js | validator | governance:agent-governance | manual — experimental research system | manual (none) | MATCH | operations/tests/unit/ledger.json | No | tests/unit, operations/scripts/docs-research-adjudication.js, workspace/research/adjudication, operations/scripts/docs-page-research.js, operations/scripts/docs-page-research-pr-report.js | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/validate-codex-task-contract.test.js | enforcer | governance:agent-governance | manual — not yet in pipeline | manual (npm script: test:codex-task-contract) | MATCH | stdout only | No | tests/unit, operations/scripts/validators/governance/compliance/validate-codex-task-contract.js | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js | MISSING | governance:ai-tools-inventory | manual | manual (none) | MATCH | stdout only | No | ai-tools/registry | MISSING | 4/9 | F | missing-category, invalid-purpose, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js | MISSING | governance:index-management | manual — not yet in pipeline | manual (none) | MATCH | operations/scripts/audits/content/reconciliation/reconciliation-summary.md | No | operations/scripts, tools/config, tools/lib, v2, workspace/reports/content-gap | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/dispatch/governance/pipelines/sync-generated-files.js | MISSING | governance:index-management | manual \| pre-commit --staged | manual (none) | MATCH | stdout only | No | operations/scripts/generators, docs-guide/catalog, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js | MISSING | governance:index-management | commit — auto-regenerated when components staged) | manual (none) | MATCH | stdout only | No | generated-output | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js | MISSING | governance:index-management | manual — not yet in pipeline | manual (npm script: docs-guide:indexes) | MATCH | stdout only | No | operations/scripts, docs-guide, .github/workflows, .github/ISSUE_TEMPLATE | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js | MISSING | governance:index-management | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | operations/scripts, docs-guide/catalog/pages-catalog.mdx, v2/index.mdx, docs.json | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/structure/enforce-generated-file-banners.js | MISSING | governance:index-management | manual \| pre-commit --staged | manual (none) | MATCH |  | No | docs-guide/catalog, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/classification/add-framework-headers.js | MISSING | governance:repo-health | manual — interactive developer tool, not suited for automated pipelines | manual (none) | MATCH |  | No | full-repo | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js | MISSING | governance:repo-health | manual | manual (npm script: review:governance:repair) | MATCH | stdout only | No | full-repo | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/governance/pr/check-pr-template.js | MISSING | governance:repo-health | ci | manual (none) | MATCH | stdout only | No | operations/scripts/enforcers/pr, .github/pull_request_template.md, .github/pull-request-template-v2.md | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/tests/unit/repair-governance.test.js | validator | governance:repo-health | manual | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/orchestrators/repair-governance.js, .github/workflows/repair-governance.yml | R-R14, R-R18, R-C6 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/v2-folder-governance-cleanup-matrix.test.js | validator | governance:repo-health | manual — planning artifact validator | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/generate-v2-folder-governance-cleanup-matrix.js | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/remediators/governance/scripts/repair-script-inventory.js | MISSING | governance:script-header-repair | manual | manual (none) | MATCH | none detected | No | operations/scripts | MISSING | 4/9 | F | missing-category, invalid-purpose, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/content/data/fetching/fetch-lpt-exchanges.sh | MISSING | infrastructure:data-feeds | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | tools/scripts | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/content/data/transforms/convert-rss-to-mdx.js | MISSING | infrastructure:data-feeds | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | operations/scripts, v2/internal/assets/transcripts | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| snippets/automations/youtube/filterVideos.js | automation | infrastructure:data-feeds | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | external | F-R1 | 8/9 | B | header-json-category-mismatch |
| .githooks/pre-commit-no-deletions | orchestrator | infrastructure:pipeline-orchestration | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | .githooks | R-R29 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js | MISSING | infrastructure:pipeline-orchestration | manual | manual (npm script: audit:repo); manual (npm script: audit:repo:changed); manual (npm script: audit:repo:full); manual (npm script: audit:repo:quarantine); manual (npm script: audit:repo:pack-all) | MATCH | operations/scripts/dispatch/governance/repo/repo-audit-summary.json, operations/scripts/dispatch/governance/repo/repo-audit-summary.md | No | operations/scripts, ai-tools/ai-skills/catalog, workspace/reports/repo-ops | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js | MISSING | qa:content-quality | manual | manual (npm script: audit:docs-quality) | MATCH | operations/scripts/audits/content/quality/${STAGE_ID}.json, operations/scripts/audits/content/quality/${STAGE_ID}.md | No | operations/scripts, v2, workspace/reports/quality-accessibility | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/classification/add-pagetype-mechanical.js | MISSING | qa:content-quality | manual — deterministic metadata rollout utility for v2 docs | manual (none) | MATCH | stdout only | No | operations/scripts, v2, workspace/reports | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/classification/assign-purpose-metadata.js | MISSING | qa:content-quality | manual — interactive developer tool, not suited for automated pipelines | manual (none) | MATCH |  | No | operations/scripts, tools/lib/docs-usefulness, tools/config, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js | MISSING | qa:content-quality | manual | manual (npm script: repair:mdx-safe-markdown); manual (npm script: repair:mdx-safe-markdown:dry-run) | MATCH | stdout only | No | full-repo | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/style/wcag-repair-common.js | MISSING | qa:content-quality | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | operations/scripts, operations/tests/integration, workspace/reports, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/grammar/check-grammar-en-gb.js | MISSING | qa:content-quality | manual → staged .mdx files → exit-code, stdout:violations; --fix → staged .mdx files → edited files/CI validator for English v2 docs and explicit content files | manual (none) | MATCH | stdout only | No | operations/scripts/validators/content, tools/script-index.md, operations/tests/cript-index.md, docs-guide/catalog/scripts-catalog.mdx, v2 | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/grammar/check-proper-nouns.js | MISSING | qa:content-quality | manual → staged .mdx files → exit-code, stdout:violations; --fix → staged .mdx files → edited files | manual (none) | MATCH | stdout only | No | v2, operations/scripts/validators/content, operations/tests/onfig/spell-dict.json | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/structure/check-anchor-usage.js | MISSING | qa:content-quality | manual, ci | manual (none) | MATCH | stdout only | No | v2-content | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/structure/check-description-quality.js | MISSING | qa:content-quality | manual — diagnostic/investigation tool, run on-demand only | manual (none) | MATCH | stdout only | No | operations/scripts/validators/content, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/structure/check-page-endings.js | MISSING | qa:content-quality | manual → staged .mdx files → exit-code, stdout:violations; --fix → staged .mdx files → TODO comment appended, ci | manual (none) | MATCH | stdout only | No | operations/scripts/validators/content, v2 | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/tests/integration/v2-wcag-audit.selftest.js | validator | qa:content-quality | manual — not yet in pipeline | manual (npm script: test:wcag:selftest) | MATCH | operations/tests/integration/v2/internal/__wcag-selftest-${nonce}.mdx | No | tests/integration, v2, git index | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/mdx-component-runtime-smoke.test.js | validator | qa:content-quality | manual — targeted smoke helper coverage | manual (none) | MATCH | stdout only | No | tests/unit, tests/integration | E-R1, R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/og-image-policy.test.js | validator | qa:content-quality | manual — targeted unit coverage for OG image governance | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/snippets/lib | E-R1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/repair-spelling.test.js | validator | qa:content-quality | manual — not yet in pipeline | manual (none) | MATCH | operations/tests/unit/fixture.mdx | No | tests/unit, operations/scripts/remediators/content | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/v2-wcag-audit.test.js | validator | qa:content-quality | manual — not yet in pipeline | manual (npm script: test:wcag:unit) | MATCH | stdout only | No | tests/unit, tests/integration | E-R1, R-R11 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/integration/v2-link-audit.selftest.js | validator | qa:link-integrity | manual — not yet in pipeline | manual (npm script: test:link-audit:selftest) | MATCH | stdout only | No | tests/integration | E-R12, E-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/v2-link-audit.test.js | validator | qa:link-integrity | manual — not yet in pipeline | manual (npm script: test:link-audit:unit) | MATCH | operations/tests/unit/link-audit-unit-fixture, operations/tests/unit/fixture-${Date.now()}.mdx | No | tests/unit, tests/integration | E-R12, E-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/audits/content/quality/audit-python.py | MISSING | qa:repo-health | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | tasks/scripts | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/audits/governance/repo/audit-tasks-folders.js | MISSING | qa:repo-health | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | operations/scripts, tasks | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/audits/governance/scripts/audit-script-categories.js | MISSING | qa:repo-health | manual — diagnostic/investigation tool, run on-demand only | manual (npm script: audit:scripts) | MATCH | stdout only | No | operations/scripts, workspace/README.md, workspace/reports operations/tests/unit/script-docs.test.js, tests/README.md | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js | MISSING | qa:repo-health | manual — not yet in pipeline | manual (none) | MATCH | operations/scripts/audits/governance/scripts/${STAGE_ID}.json, operations/scripts/audits/governance/scripts/${STAGE_ID}.md | No | operations/scripts, operations/tests, workspace/reports, ai-tools/ai-skills | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/governance/pipelines/publish-v2-internal-reports.js | MISSING | qa:repo-health | manual — not yet in pipeline | manual (none) | MATCH | operations/scripts/automations/governance/pipelines/reports, operations/scripts/automations/governance/pipelines/docs.json | No | operations/scripts, tools/config, v2/internal, docs.json, workspace/reports, operations/tests/eports | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/remediators/content/repair/quarantine-manager.js | MISSING | qa:repo-health | manual | manual (npm script: cleanup:classify); manual (npm script: cleanup:quarantine) | MATCH | operations/scripts/remediators/content/repair/cleanup-quarantine-manifest.md | No | operations/scripts, workspace/reports/repo-ops, workspace/quarantine | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/content/structure/verify-all-pages.js | MISSING | qa:repo-health | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | single-domain | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh | MISSING | qa:repo-health | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | v2-content | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/x-archive/.verify-large-change.sh | enforcer | qa:repo-health | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | tools/scripts/verify | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/integration/domain-pages-audit.js | validator | qa:repo-health | manual — not yet in pipeline | manual (npm script: test:domain); manual (npm script: test:domain:v1); manual (npm script: test:domain:v2); manual (npm script: test:domain:both) | MATCH | operations/tests/integration/domain-page-load-report.json, operations/tests/integration/domain-page-load-report.md | No | tests/integration, tests/reports, docs.livepeer.org | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/audit-script-inventory-repair-rules.test.js | validator | qa:repo-health | manual (not yet in pipeline) | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/validators/governance | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/components/TEMPLATE.test.js | validator | qa:repo-health | manual | manual (none) | MATCH | stdout only | No | tests | R-R10 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/generated-artifacts-policy.test.js | validator | qa:repo-health | manual — targeted governance test | manual (none) | MATCH | stdout only | No | tests/unit, tools/lib/generated-artifacts.js, tools/config/generated-artifacts.json | R-R16, R-R17 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/legacy-root-v1-redirects.test.js | validator | qa:repo-health | manual — targeted redirect migration coverage | manual (none) | MATCH | ,  | No | tests/unit, operations/scripts/redirects, tools/data/redirects, docs.json | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/mdx-component-scope.test.js | validator | qa:repo-health | manual — targeted validator unit coverage | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/validators/components | R-R10, R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/migrate-assets-to-branch.test.js | validator | qa:repo-health | manual — not yet in pipeline | manual (none) | MATCH | , , operations/tests/unit/repo, operations/tests/unit/repo | No | tests/unit, operations/scripts/remediators/assets, operations/scripts/audit-media-assets.js | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/repo-audit-pipeline.test.js | validator | qa:repo-health | manual — not yet in pipeline | manual (npm script: test:repo-audit) | MATCH | stdout only | No | tests/unit, tools/scripts, ai-tools/ai-skills/catalog, ai-tools/agent-packs | E-C1, R-R14 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/run-pr-checks.test.js | validator | qa:repo-health | manual | manual (none) | MATCH | stdout only | No | tests/unit, tests/run-pr-checks.js | R-R14, R-R29 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/lib/docs-usefulness/prompts/index.js | utility | qa:repo-health | indirect -- library module | manual (none) | MATCH | none detected | No | single-domain | R-R14 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js | MISSING | Rewrite JSDoc headers in all scripts to the 11-tag standard | governance-pipeline | manual (none) | MATCH | stdout only | No | all | MISSING | 4/9 | F | missing-category, invalid-purpose, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/generators/content/seo/generate-og-images.js | MISSING | seo:og-image-assets | manual — run when OG assets, section labels, or branding change | manual (none) | MATCH | stdout only | No | operations/scripts, snippets/assets/site/og-image | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/config/og-image-policy.js | MISSING | seo:og-image-governance | manual — library module imported by generators and validators | manual (none) | MATCH | none detected | No | operations/scripts, snippets/assets/site/og-image, docs.json | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/automations/content/data/fetching/fetch-openapi-specs.sh | MISSING | tooling:api-spec | manual — not yet in pipeline | manual (none) | MATCH | none detected | No | tools/scripts | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/tests/unit/openapi-reference-audit.test.js | validator | tooling:api-spec | manual — not yet in pipeline | manual (none) | MATCH | ,  | No | tests/unit, tests/integration, v2, api | F-R17 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/openapi-rolling-issue.test.js | validator | tooling:api-spec | manual — not yet in pipeline | manual (npm script: test:openapi:issue) | MATCH | stdout only | No | tests/unit, tests/utils, .github/workflows/openapi-reference-validation.yml | F-R17 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/scripts/generators/governance/scaffold/new-script.js | MISSING | tooling:dev-tools', | manual — interactive developer tool, not suited for automated pipelines', | manual (none) | MATCH |  | No | ${params.scope}`, | MISSING | 4/9 | F | missing-category, invalid-purpose, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| .githooks/verify-browser.js | MISSING | tooling:dev-tools | manual — developer tool | manual (none) | MATCH | stdout only | No | .githooks | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| .githooks/verify.sh | MISSING | tooling:dev-tools | manual — developer tool | manual (none) | MATCH | stdout only | No | .githooks | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/audits/content/quality/audit-copy-patterns.js | MISSING | tooling:dev-tools | manual | manual (none) | MATCH | stdout only | No | single-domain, v2-content, generated-output | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/audits/content/reference/terminology-search.js | MISSING | tooling:dev-tools | manual — not yet in pipeline | manual (none) | MATCH | operations/scripts/audits/content/reference/operations/scripts/audits/content/data, operations/scripts/audits/content/reference/discovered-terms.json | No | operations/scripts | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js | MISSING | tooling:dev-tools | on-demand, repair) | manual (npm script: audit:language-en-gb) | MATCH | operations/scripts/audits/content/style/${STAGE_ID}.json, operations/scripts/audits/content/style/${STAGE_ID}.md | No | operations/scripts, v2, tools/config/style-language-profile-en-gb.json | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/generators/content/reference/generate-api-docs.sh | MISSING | tooling:dev-tools | manual — not yet in pipeline | manual (none) | MATCH | stdout only | No | tools/scripts | MISSING | 4/9 | F | missing-category, invalid-scope, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/generators/content/reference/generate-glossary.js | MISSING | tooling:dev-tools | manual — not yet in pipeline | manual (none) | MATCH | operations/scripts/generators/content/reference/operations/scripts/generators/content/data, operations/scripts/generators/content/reference/glossary-terms.json | No | operations/scripts | MISSING | 4/9 | C | missing-category, missing-domain, missing-needs, missing-purpose-statement, header-json-category-mismatch |
| operations/scripts/snippets/test-scripts.sh | utility | tooling:dev-tools | manual — developer tool | manual (none) | MATCH | none detected | No | tools/scripts | E-C6, F-C1 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/docs-research-packet.test.js | generator | tooling:dev-tools | manual — packet generator validation | manual (none) | MATCH | operations/tests/unit/.tmp | No | tests/unit, operations/scripts/docs-research-packet.js, tools/config/scoped-navigation/docs-gate-work.json | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/lpd-scoped-mint-dev.test.js | utility | tooling:dev-tools | manual — developer tool | manual (none) | MATCH | operations/tests/unit/docs.json | No | tests/unit, lpd, operations/scripts/mint-dev.sh, operations/scripts/dev/generate-mint-dev-scope.js | E-C6, F-C1 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| operations/tests/unit/orchestrator-guides-research-review.test.js | generator | tooling:dev-tools | manual — packet generator validation | manual (none) | MATCH | stdout only | No | tests/unit, operations/scripts/orchestrator-guides-research-review.js, tools/config/scoped-navigation/docs-gate-work.json | R-R27, R-R30 | 8/9 | C | invalid-scope, header-json-category-mismatch |
| tools/notion/5-export-to-notion.js | automation | tooling:dev-tools | manual | manual (none) | MATCH | tools/notion/reports, tools/notion/notion-export.json | No | external | node, @notionhq/client, dotenv, NOTION_API_KEY, NOTION_DATABASE_ID, NOTION_WRITABLE_DATABASE_ID(optional) | 8/9 | B | header-json-category-mismatch |
| tools/notion/backup-notion-table.js | utility | tooling:dev-tools | manual | manual (none) | MATCH | tools/notion/rows-raw.json, tools/notion/rows-normalized.json, tools/notion/rows-normalized.csv, tools/notion/data-source-metadata.json, tools/notion/database-metadata.json, tools/notion/backup-manifest.json | No | external | node, @notionhq/client, dotenv, NOTION_API_KEY, NOTION_DATABASE_ID or NOTION_WRITABLE_DATABASE_ID | 8/9 | B | header-json-category-mismatch |
| tools/notion/install-local-sync-hook.sh | utility | tooling:dev-tools | manual | manual (none) | MATCH | none detected | No | single-file | bash, git | 8/9 | B | header-json-category-mismatch |
| tools/notion/local-post-commit-sync.sh | orchestrator | tooling:dev-tools | manual | manual (none) | MATCH | none detected | No | external | bash, git, node, NOTION_LOCAL_SYNC_MODE(optional), NOTION_LOCAL_SYNC_STALE_TAB_NAME(optional), NOTION_LOCAL_SYNC_DISABLE(optional) | 8/9 | B | header-json-category-mismatch |
| tools/notion/remove-local-sync-hook.sh | utility | tooling:dev-tools | manual | manual (none) | MATCH | none detected | No | single-file | bash, git | 8/9 | B | header-json-category-mismatch |
| tools/notion/sync-v2-en-canonical.js | orchestrator | tooling:dev-tools | manual | manual (none) | MATCH | tools/notion/sync-v2-en-summary-${runStamp}.json | No | external | node, @notionhq/client, dotenv, NOTION_API_KEY, NOTION_DATABASE_ID or NOTION_WRITABLE_DATABASE_ID | 8/9 | B | header-json-category-mismatch |

## Discrepancies

### Phantom pipeline claims

- operations/scripts/generators/ai/llm/generate-llms-files.js
- operations/scripts/generators/content/seo/generate-ai-sitemap.js
- operations/scripts/generators/governance/catalogs/generate-script-registry.js
- operations/scripts/validators/ai/codex/validate-locks.js
- operations/scripts/validators/governance/compliance/validate-codex-task-contract.js
- operations/tests/integration/v2-link-audit.js
- operations/tests/run-all.js
- operations/tests/run-pr-checks.js
- operations/tests/unit/ai-tools-registry.test.js
- operations/tests/unit/authoring-tools.test.js
- operations/tests/unit/check-agent-docs-freshness.test.js
- operations/tests/unit/copy-lint.test.js
- operations/tests/unit/docs-guide-sot.test.js
- operations/tests/unit/docs-navigation.test.js
- operations/tests/unit/docs-path-sync.test.js
- operations/tests/unit/docs-route-scope.test.js
- operations/tests/unit/export-portable-skills.test.js
- operations/tests/unit/links-imports.test.js
- operations/tests/unit/mdx-guards.test.js
- operations/tests/unit/mdx.test.js
- operations/tests/unit/ownerless-governance.test.js
- operations/tests/unit/quality.test.js
- operations/tests/unit/root-allowlist-format.test.js
- operations/tests/unit/script-docs.test.js
- operations/tests/unit/skill-docs.test.js
- operations/tests/unit/spelling.test.js
- operations/tests/unit/style-guide.test.js
- operations/tests/unit/ui-template-generator.test.js
- operations/tests/unit/usefulness-journey.test.js
- operations/tests/unit/usefulness-rubric.test.js

### Undeclared automation

- operations/scripts/audits/components/library/scan-component-imports.js
- operations/scripts/automations/content/data/fetching/fetch-external-docs.sh
- operations/scripts/automations/content/language-translation/generate-localized-docs-json.js
- operations/scripts/automations/content/language-translation/translate-docs.js
- operations/scripts/automations/content/language-translation/validate-generated.js
- operations/scripts/dispatch/governance/pipelines/governance-pipeline.js
- operations/scripts/generators/components/library/generate-component-registry.js
- operations/scripts/generators/content/catalogs/generate-docs-index.js
- operations/scripts/generators/content/catalogs/generate-pages-index.js
- operations/scripts/remediators/components/library/repair-component-metadata.js
- operations/scripts/remediators/content/seo/generate-seo.js
- operations/scripts/validators/ai/codex/check-no-ai-stash.sh
- operations/scripts/validators/ai/codex/validate-locks.js
- operations/scripts/validators/components/documentation/check-component-docs.js
- operations/scripts/validators/components/library/check-component-css.js
- operations/scripts/validators/components/library/check-naming-conventions.js
- operations/scripts/validators/components/library/component-layout-governance.js
- operations/scripts/validators/content/structure/check-double-headers.js
- operations/scripts/validators/content/structure/check-mdx-safe-markdown.js
- operations/scripts/validators/governance/compliance/validate-codex-task-contract.js
- operations/scripts/validators/governance/pr/check-component-immutability.js

### Not in classification JSON

- None

### Phantom JSON entries

- None

### Header/JSON mismatches

- .githooks/install.sh
- .githooks/pre-commit
- .githooks/pre-commit-no-deletions
- .githooks/pre-push
- .githooks/server-manager.js
- .githooks/verify-browser.js
- .githooks/verify.sh
- .github/scripts/fetch-forum-data.js
- .github/scripts/fetch-ghost-blog-data.js
- .github/scripts/fetch-youtube-data.js
- .github/scripts/project-showcase-sync.js
- operations/scripts/audits/components/documentation/audit-component-usage.js
- operations/scripts/audits/components/library/scan-component-imports.js
- operations/scripts/audits/content/quality/audit-copy-patterns.js
- operations/scripts/audits/content/quality/audit-media-assets.js
- operations/scripts/audits/content/quality/audit-python.py
- operations/scripts/audits/content/quality/audit-v2-usefulness.js
- operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js
- operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js
- operations/scripts/audits/content/reference/terminology-search.js
- operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js
- operations/scripts/audits/content/veracity/docs-page-research.js
- operations/scripts/audits/content/veracity/docs-research-adjudication.js
- operations/scripts/audits/governance/repo/audit-tasks-folders.js
- operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js
- operations/scripts/audits/governance/scripts/audit-script-categories.js
- operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js
- operations/scripts/automations/ai/agents/cross-agent-packager.js
- operations/scripts/automations/ai/agents/export-portable-skills.js
- operations/scripts/automations/ai/agents/sync-codex-skills.js
- operations/scripts/automations/ai/codex/lock-release.js
- operations/scripts/automations/ai/codex/task-cleanup.js
- operations/scripts/automations/ai/codex/task-preflight.js
- operations/scripts/automations/content/data/fetching/fetch-external-docs.sh
- operations/scripts/automations/content/data/fetching/fetch-lpt-exchanges.sh
- operations/scripts/automations/content/data/fetching/fetch-openapi-specs.sh
- operations/scripts/automations/content/data/transforms/convert-rss-to-mdx.js
- operations/scripts/automations/content/language-translation/generate-localized-docs-json.js
- operations/scripts/automations/content/language-translation/lib/common.js
- operations/scripts/automations/content/language-translation/lib/config.js
- operations/scripts/automations/content/language-translation/lib/docs-json-localizer.js
- operations/scripts/automations/content/language-translation/lib/docs-routes.js
- operations/scripts/automations/content/language-translation/lib/frontmatter.js
- operations/scripts/automations/content/language-translation/lib/mdx-parser.js
- operations/scripts/automations/content/language-translation/lib/mdx-translate.js
- operations/scripts/automations/content/language-translation/lib/path-utils.js
- operations/scripts/automations/content/language-translation/lib/provenance.js
- operations/scripts/automations/content/language-translation/lib/provider-mock.js
- operations/scripts/automations/content/language-translation/lib/provider-openrouter.js
- operations/scripts/automations/content/language-translation/lib/providers.js
- operations/scripts/automations/content/language-translation/test/cli-guardrails.test.js
- operations/scripts/automations/content/language-translation/test/docs-json-localizer.test.js
- operations/scripts/automations/content/language-translation/test/frontmatter.test.js
- operations/scripts/automations/content/language-translation/test/mdx-translate.test.js
- operations/scripts/automations/content/language-translation/test/provenance.test.js
- operations/scripts/automations/content/language-translation/test/provider-openrouter.test.js
- operations/scripts/automations/content/language-translation/translate-docs.js
- operations/scripts/automations/content/language-translation/validate-generated.js
- operations/scripts/automations/governance/pipelines/publish-v2-internal-reports.js
- operations/scripts/config/docs-path-sync.js
- operations/scripts/config/og-image-policy.js
- operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js
- operations/scripts/dispatch/ai/codex/codex-commit.js
- operations/scripts/dispatch/ai/codex/create-codex-pr.js
- operations/scripts/dispatch/ai/codex/task-finalise.js
- operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js
- operations/scripts/dispatch/content/veracity/docs-research-packet.js
- operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js
- operations/scripts/dispatch/governance/pipelines/governance-pipeline.js
- operations/scripts/dispatch/governance/pipelines/sync-generated-files.js
- operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js
- operations/scripts/generators/ai/llm/generate-llms-files.js
- operations/scripts/generators/components/documentation/generate-component-docs.js
- operations/scripts/generators/components/library/generate-component-registry.js
- operations/scripts/generators/components/library/generate-ui-templates.js
- operations/scripts/generators/content/catalogs/generate-docs-index.js
- operations/scripts/generators/content/catalogs/generate-pages-index.js
- operations/scripts/generators/content/reference/generate-api-docs.sh
- operations/scripts/generators/content/reference/generate-glossary.js
- operations/scripts/generators/content/seo/generate-ai-sitemap.js
- operations/scripts/generators/content/seo/generate-og-images.js
- operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js
- operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js
- operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js
- operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js
- operations/scripts/generators/governance/catalogs/generate-script-registry.js
- operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js
- operations/scripts/generators/governance/scaffold/new-script.js
- operations/scripts/remediators/components/library/repair-component-metadata.js
- operations/scripts/remediators/content/classification/add-framework-headers.js
- operations/scripts/remediators/content/classification/add-pagetype-mechanical.js
- operations/scripts/remediators/content/classification/assign-purpose-metadata.js
- operations/scripts/remediators/content/repair/migrate-assets-to-branch.js
- operations/scripts/remediators/content/repair/quarantine-manager.js
- operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js
- operations/scripts/remediators/content/repair/repair-spelling.js
- operations/scripts/remediators/content/repair/sync-docs-paths.js
- operations/scripts/remediators/content/seo/generate-seo.js
- operations/scripts/remediators/content/style/repair-ownerless-language.js
- operations/scripts/remediators/content/style/wcag-repair-common.js
- operations/scripts/remediators/governance/scaffold/fix-usage-paths.js
- operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js
- operations/scripts/remediators/governance/scripts/repair-script-inventory.js
- operations/scripts/snippets/test-scripts.sh
- operations/scripts/validators/ai/codex/check-no-ai-stash.sh
- operations/scripts/validators/ai/codex/validate-locks.js
- operations/scripts/validators/components/documentation/check-component-docs.js
- operations/scripts/validators/components/library/check-component-css.js
- operations/scripts/validators/components/library/check-mdx-component-scope.js
- operations/scripts/validators/components/library/check-naming-conventions.js
- operations/scripts/validators/components/library/component-layout-governance.js
- operations/scripts/validators/content/copy/lint-copy.js
- operations/scripts/validators/content/copy/lint-patterns.js
- operations/scripts/validators/content/grammar/check-grammar-en-gb.js
- operations/scripts/validators/content/grammar/check-proper-nouns.js
- operations/scripts/validators/content/language-translation/test-mintlify-version-language-toggle.js
- operations/scripts/validators/content/structure/check-anchor-usage.js
- operations/scripts/validators/content/structure/check-description-quality.js
- operations/scripts/validators/content/structure/check-docs-path-sync.js
- operations/scripts/validators/content/structure/check-double-headers.js
- operations/scripts/validators/content/structure/check-mdx-safe-markdown.js
- operations/scripts/validators/content/structure/check-page-endings.js
- operations/scripts/validators/content/structure/enforce-generated-file-banners.js
- operations/scripts/validators/content/structure/lint-structure.js
- operations/scripts/validators/content/structure/test-v2-pages.js
- operations/scripts/validators/content/structure/verify-all-pages.js
- operations/scripts/validators/content/veracity/docs-fact-registry.js
- operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js
- operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js
- operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js
- operations/scripts/validators/governance/compliance/validate-codex-task-contract.js
- operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh
- operations/scripts/validators/governance/pr/audit-script-inventory.js
- operations/scripts/validators/governance/pr/check-component-immutability.js
- operations/scripts/validators/governance/pr/check-pr-template.js
- operations/scripts/x-archive/.verify-large-change.sh
- operations/scripts/x-archive/batch-update-og-image.sh
- operations/scripts/x-archive/codex-safe-merge-with-stash.js
- operations/scripts/x-archive/replace-og-image.py
- operations/scripts/x-archive/seo-generator-safe.js
- operations/scripts/x-archive/sync-legacy-root-v1.js
- operations/scripts/x-archive/update-all-og-images.js
- operations/scripts/x-archive/update-og-image.js
- operations/tests/integration/browser.test.js
- operations/tests/integration/domain-pages-audit.js
- operations/tests/integration/mdx-component-runtime-smoke.js
- operations/tests/integration/openapi-reference-audit.js
- operations/tests/integration/v2-link-audit.js
- operations/tests/integration/v2-link-audit.selftest.js
- operations/tests/integration/v2-wcag-audit.js
- operations/tests/integration/v2-wcag-audit.selftest.js
- operations/tests/run-all.js
- operations/tests/run-pr-checks.js
- operations/tests/unit/ai-tools-registry.test.js
- operations/tests/unit/audit-script-inventory-repair-rules.test.js
- operations/tests/unit/authoring-tools.test.js
- operations/tests/unit/check-agent-docs-freshness.test.js
- operations/tests/unit/codex-commit.test.js
- operations/tests/unit/codex-safe-merge-with-stash.test.js
- operations/tests/unit/codex-skill-sync.test.js
- operations/tests/unit/codex-task-cleanup.test.js
- operations/tests/unit/codex-task-preflight.test.js
- operations/tests/unit/component-governance-generators.test.js
- operations/tests/unit/component-governance-utils.test.js
- operations/tests/unit/components/TEMPLATE.test.js
- operations/tests/unit/copy-lint.test.js
- operations/tests/unit/create-codex-pr.test.js
- operations/tests/unit/docs-authoring-rules.test.js
- operations/tests/unit/docs-fact-registry.test.js
- operations/tests/unit/docs-guide-sot.test.js
- operations/tests/unit/docs-navigation.test.js
- operations/tests/unit/docs-page-research-pr-report.test.js
- operations/tests/unit/docs-page-research.test.js
- operations/tests/unit/docs-page-scope.test.js
- operations/tests/unit/docs-path-sync.test.js
- operations/tests/unit/docs-research-adjudication.test.js
- operations/tests/unit/docs-research-packet.test.js
- operations/tests/unit/docs-route-scope.test.js
- operations/tests/unit/export-portable-skills.test.js
- operations/tests/unit/frontmatter-taxonomy.test.js
- operations/tests/unit/generated-artifacts-policy.test.js
- operations/tests/unit/legacy-root-v1-redirects.test.js
- operations/tests/unit/links-imports.test.js
- operations/tests/unit/lpd-scoped-mint-dev.test.js
- operations/tests/unit/mdx-component-runtime-smoke.test.js
- operations/tests/unit/mdx-component-scope.test.js
- operations/tests/unit/mdx-guards.test.js
- operations/tests/unit/mdx-safe-markdown.test.js
- operations/tests/unit/mdx.test.js
- operations/tests/unit/migrate-assets-to-branch.test.js
- operations/tests/unit/og-image-policy.test.js
- operations/tests/unit/openapi-reference-audit.test.js
- operations/tests/unit/openapi-rolling-issue.test.js
- operations/tests/unit/orchestrator-guides-research-review.test.js
- operations/tests/unit/ownerless-governance.test.js
- operations/tests/unit/precommit-staged-cache.test.js
- operations/tests/unit/quality.test.js
- operations/tests/unit/repair-governance.test.js
- operations/tests/unit/repair-spelling.test.js
- operations/tests/unit/repo-audit-pipeline.test.js
- operations/tests/unit/root-allowlist-format.test.js
- operations/tests/unit/run-pr-checks.test.js
- operations/tests/unit/script-docs.test.js
- operations/tests/unit/skill-docs.test.js
- operations/tests/unit/spelling.test.js
- operations/tests/unit/style-guide.test.js
- operations/tests/unit/ui-template-generator.test.js
- operations/tests/unit/usefulness-journey.test.js
- operations/tests/unit/usefulness-rubric.test.js
- operations/tests/unit/v2-folder-governance-cleanup-matrix.test.js
- operations/tests/unit/v2-link-audit.test.js
- operations/tests/unit/v2-wcag-audit.test.js
- operations/tests/unit/validate-codex-task-contract.test.js
- operations/tests/utils/file-walker.js
- operations/tests/utils/mdx-parser.js
- operations/tests/utils/mintignore.js
- operations/tests/utils/openapi-rolling-issue.js
- operations/tests/utils/spell-checker.js
- snippets/automations/youtube/filterVideos.js
- tools/config/v2-internal-report-pages.js
- tools/lib/ai-tools-registry.js
- tools/lib/codex-skill-templates.js
- tools/lib/component-governance-utils.js
- tools/lib/docs-authoring-rules.js
- tools/lib/docs-index-utils.js
- tools/lib/docs-page-scope.js
- tools/lib/docs-publishability.js
- tools/lib/docs-usefulness/config-validator.js
- tools/lib/docs-usefulness/journey-check.js
- tools/lib/docs-usefulness/llm-evaluator.js
- tools/lib/docs-usefulness/prompts/changelog.js
- tools/lib/docs-usefulness/prompts/concept.js
- tools/lib/docs-usefulness/prompts/faq.js
- tools/lib/docs-usefulness/prompts/glossary.js
- tools/lib/docs-usefulness/prompts/how_to.js
- tools/lib/docs-usefulness/prompts/index.js
- tools/lib/docs-usefulness/prompts/landing.js
- tools/lib/docs-usefulness/prompts/overview.js
- tools/lib/docs-usefulness/prompts/reference.js
- tools/lib/docs-usefulness/prompts/troubleshooting.js
- tools/lib/docs-usefulness/prompts/tutorial.js
- tools/lib/docs-usefulness/quality-gate.js
- tools/lib/docs-usefulness/rubric-loader.js
- tools/lib/docs-usefulness/rule-evaluators.js
- tools/lib/docs-usefulness/scoring.js
- tools/lib/frontmatter-taxonomy.js
- tools/lib/generated-artifacts.js
- tools/lib/generated-file-banners.js
- tools/lib/load-js-yaml.js
- tools/lib/load-minimatch.js
- tools/lib/mdx-safe-markdown.js
- tools/lib/precommit-staged-cache.js
- tools/lib/script-governance-config.js
- tools/lib/script-header-utils.js
- tools/notion/1-read-notion-to-csv.js
- tools/notion/2-read-docs-to-csv.js
- tools/notion/3-check-duplicates.js
- tools/notion/4-remove-duplicates.js
- tools/notion/5-export-to-notion.js
- tools/notion/backup-notion-table.js
- tools/notion/install-local-sync-hook.sh
- tools/notion/local-post-commit-sync.sh
- tools/notion/remove-local-sync-hook.sh
- tools/notion/sync-v2-en-canonical.js
- workspace/scripts/repair-registry.py

### Output chains

- None

## Needs Human

- .githooks/install.sh: @category, @needs, @purpose-statement
- .githooks/pre-push: @scope
- .githooks/server-manager.js: @category, @needs, @purpose-statement
- .githooks/verify-browser.js: @category, @needs, @purpose-statement
- .githooks/verify.sh: @category, @needs, @purpose-statement
- operations/scripts/audits/components/documentation/audit-component-usage.js: @category, @needs, @purpose-statement
- operations/scripts/audits/components/library/scan-component-imports.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/audits/content/quality/audit-copy-patterns.js: @category, @needs, @purpose-statement
- operations/scripts/audits/content/quality/audit-media-assets.js: @category, @needs, @purpose-statement
- operations/scripts/audits/content/quality/audit-python.py: @category, @scope, @needs, @purpose-statement
- operations/scripts/audits/content/quality/audit-v2-usefulness.js: @category, @needs, @purpose-statement
- operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js: @category, @needs, @purpose-statement
- operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js: @category, @needs, @purpose-statement
- operations/scripts/audits/content/reference/terminology-search.js: @category, @needs, @purpose-statement
- operations/scripts/audits/content/style/style-and-language-homogenizer-en-gb.js: @category, @needs, @purpose-statement
- operations/scripts/audits/content/veracity/docs-page-research.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/audits/content/veracity/docs-research-adjudication.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/audits/governance/repo/audit-tasks-folders.js: @category, @needs, @purpose-statement
- operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/audits/governance/scripts/audit-script-categories.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/audits/governance/scripts/script-footprint-and-usage-audit.js: @category, @needs, @purpose-statement
- operations/scripts/automations/ai/agents/cross-agent-packager.js: @category, @needs, @purpose-statement
- operations/scripts/automations/ai/agents/export-portable-skills.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/automations/ai/agents/sync-codex-skills.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/automations/ai/codex/lock-release.js: @category, @needs, @purpose-statement
- operations/scripts/automations/ai/codex/task-cleanup.js: @category, @needs, @purpose-statement
- operations/scripts/automations/ai/codex/task-preflight.js: @category, @needs, @purpose-statement
- operations/scripts/automations/content/data/fetching/fetch-external-docs.sh: @category, @scope, @needs, @purpose-statement, @pipeline
- operations/scripts/automations/content/data/fetching/fetch-lpt-exchanges.sh: @category, @scope, @needs, @purpose-statement
- operations/scripts/automations/content/data/fetching/fetch-openapi-specs.sh: @category, @scope, @needs, @purpose-statement
- operations/scripts/automations/content/data/transforms/convert-rss-to-mdx.js: @category, @needs, @purpose-statement
- operations/scripts/automations/content/language-translation/generate-localized-docs-json.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/automations/content/language-translation/translate-docs.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/automations/content/language-translation/validate-generated.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/automations/governance/pipelines/publish-v2-internal-reports.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/config/docs-path-sync.js: @category, @needs, @purpose-statement
- operations/scripts/config/og-image-policy.js: @category, @needs, @purpose-statement
- operations/scripts/dispatch/ai/codex/check-codex-pr-overlap.js: @category, @needs, @purpose-statement
- operations/scripts/dispatch/ai/codex/codex-commit.js: @category, @needs, @purpose-statement
- operations/scripts/dispatch/ai/codex/create-codex-pr.js: @category, @needs, @purpose-statement
- operations/scripts/dispatch/ai/codex/task-finalise.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/dispatch/content/veracity/docs-research-packet.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/dispatch/governance/pipelines/governance-pipeline.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/dispatch/governance/pipelines/sync-generated-files.js: @category, @needs, @purpose-statement
- operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js: @category, @needs, @purpose-statement
- operations/scripts/generators/ai/llm/generate-llms-files.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/generators/components/documentation/generate-component-docs.js: @category, @needs, @purpose-statement
- operations/scripts/generators/components/library/generate-component-registry.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/generators/components/library/generate-ui-templates.js: @category, @needs, @purpose-statement
- operations/scripts/generators/content/catalogs/generate-docs-index.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/generators/content/catalogs/generate-pages-index.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/generators/content/reference/generate-api-docs.sh: @category, @scope, @needs, @purpose-statement
- operations/scripts/generators/content/reference/generate-glossary.js: @category, @needs, @purpose-statement
- operations/scripts/generators/content/seo/generate-ai-sitemap.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/generators/content/seo/generate-og-images.js: @category, @needs, @purpose-statement
- operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js: @category, @needs, @purpose-statement
- operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js: @category, @needs, @purpose-statement
- operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js: @category, @needs, @purpose-statement
- operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js: @category, @needs, @purpose-statement
- operations/scripts/generators/governance/catalogs/generate-script-registry.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js: @category, @purpose, @needs, @purpose-statement
- operations/scripts/generators/governance/scaffold/new-script.js: @category, @purpose, @scope, @needs, @purpose-statement
- operations/scripts/remediators/components/library/repair-component-metadata.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/remediators/content/classification/add-framework-headers.js: @category, @needs, @purpose-statement
- operations/scripts/remediators/content/classification/add-pagetype-mechanical.js: @category, @needs, @purpose-statement
- operations/scripts/remediators/content/classification/assign-purpose-metadata.js: @category, @needs, @purpose-statement
- operations/scripts/remediators/content/repair/migrate-assets-to-branch.js: @category, @needs, @purpose-statement
- operations/scripts/remediators/content/repair/quarantine-manager.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js: @category, @needs, @purpose-statement
- operations/scripts/remediators/content/repair/repair-spelling.js: @category, @needs, @purpose-statement
- operations/scripts/remediators/content/repair/sync-docs-paths.js: @category, @needs, @purpose-statement
- operations/scripts/remediators/content/seo/generate-seo.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/remediators/content/style/repair-ownerless-language.js: @category, @needs, @purpose-statement
- operations/scripts/remediators/content/style/wcag-repair-common.js: @category, @needs, @purpose-statement
- operations/scripts/remediators/governance/scaffold/fix-usage-paths.js: @category, @purpose, @scope, @needs, @purpose-statement, @pipeline
- operations/scripts/remediators/governance/scaffold/update-jsdoc-headers.js: @category, @purpose, @scope, @needs, @purpose-statement
- operations/scripts/remediators/governance/scripts/repair-script-inventory.js: @category, @purpose, @needs, @purpose-statement
- operations/scripts/snippets/test-scripts.sh: @scope
- operations/scripts/validators/ai/codex/check-no-ai-stash.sh: @category, @scope, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/ai/codex/validate-locks.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/components/documentation/check-component-docs.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/components/library/check-component-css.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/components/library/check-mdx-component-scope.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/validators/components/library/check-naming-conventions.js: @category, @scope, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/components/library/component-layout-governance.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/content/copy/lint-copy.js: @category, @needs, @purpose-statement
- operations/scripts/validators/content/copy/lint-patterns.js: @category, @needs, @purpose-statement
- operations/scripts/validators/content/grammar/check-grammar-en-gb.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/validators/content/grammar/check-proper-nouns.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/validators/content/structure/check-anchor-usage.js: @category, @needs, @purpose-statement
- operations/scripts/validators/content/structure/check-description-quality.js: @category, @needs, @purpose-statement
- operations/scripts/validators/content/structure/check-docs-path-sync.js: @category, @needs, @purpose-statement
- operations/scripts/validators/content/structure/check-double-headers.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/content/structure/check-mdx-safe-markdown.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/content/structure/check-page-endings.js: @category, @needs, @purpose-statement
- operations/scripts/validators/content/structure/enforce-generated-file-banners.js: @category, @needs, @purpose-statement
- operations/scripts/validators/content/structure/lint-structure.js: @category, @needs, @purpose-statement
- operations/scripts/validators/content/structure/verify-all-pages.js: @category, @needs, @purpose-statement
- operations/scripts/validators/content/veracity/docs-fact-registry.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js: @category, @needs, @purpose-statement
- operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js: @category, @needs, @purpose-statement
- operations/scripts/validators/governance/compliance/validate-ai-tools-registry.js: @category, @scope, @needs, @purpose-statement
- operations/scripts/validators/governance/compliance/validate-codex-task-contract.js: @category, @scope, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/governance/compliance/verify-pay-orc-gate-finalize.sh: @category, @needs, @purpose-statement
- operations/scripts/validators/governance/pr/audit-script-inventory.js: @category, @needs, @purpose-statement
- operations/scripts/validators/governance/pr/check-component-immutability.js: @category, @needs, @purpose-statement, @pipeline
- operations/scripts/validators/governance/pr/check-pr-template.js: @category, @needs, @purpose-statement
- operations/scripts/x-archive/.verify-large-change.sh: @scope
- operations/scripts/x-archive/batch-update-og-image.sh: @scope
- operations/scripts/x-archive/codex-safe-merge-with-stash.js: @scope
- operations/scripts/x-archive/replace-og-image.py: @scope
- operations/scripts/x-archive/seo-generator-safe.js: @scope
- operations/scripts/x-archive/update-all-og-images.js: @scope
- operations/scripts/x-archive/update-og-image.js: @scope
- operations/tests/integration/browser.test.js: @scope
- operations/tests/integration/domain-pages-audit.js: @scope
- operations/tests/integration/mdx-component-runtime-smoke.js: @scope
- operations/tests/integration/v2-link-audit.js: @scope, @pipeline
- operations/tests/integration/v2-link-audit.selftest.js: @scope
- operations/tests/integration/v2-wcag-audit.selftest.js: @scope
- operations/tests/run-all.js: @scope, @pipeline
- operations/tests/run-pr-checks.js: @pipeline
- operations/tests/unit/ai-tools-registry.test.js: @scope, @pipeline
- operations/tests/unit/audit-script-inventory-repair-rules.test.js: @scope
- operations/tests/unit/authoring-tools.test.js: @scope, @pipeline
- operations/tests/unit/check-agent-docs-freshness.test.js: @scope, @pipeline
- operations/tests/unit/codex-commit.test.js: @scope
- operations/tests/unit/codex-safe-merge-with-stash.test.js: @scope
- operations/tests/unit/codex-skill-sync.test.js: @scope
- operations/tests/unit/codex-task-cleanup.test.js: @scope
- operations/tests/unit/codex-task-preflight.test.js: @scope
- operations/tests/unit/component-governance-generators.test.js: @scope
- operations/tests/unit/component-governance-utils.test.js: @scope
- operations/tests/unit/components/TEMPLATE.test.js: @scope
- operations/tests/unit/copy-lint.test.js: @scope, @pipeline
- operations/tests/unit/create-codex-pr.test.js: @scope
- operations/tests/unit/docs-authoring-rules.test.js: @scope
- operations/tests/unit/docs-fact-registry.test.js: @scope
- operations/tests/unit/docs-guide-sot.test.js: @scope, @pipeline
- operations/tests/unit/docs-navigation.test.js: @scope, @pipeline
- operations/tests/unit/docs-page-research-pr-report.test.js: @scope
- operations/tests/unit/docs-page-research.test.js: @scope
- operations/tests/unit/docs-page-scope.test.js: @scope
- operations/tests/unit/docs-path-sync.test.js: @scope, @pipeline
- operations/tests/unit/docs-research-adjudication.test.js: @scope
- operations/tests/unit/docs-research-packet.test.js: @scope
- operations/tests/unit/docs-route-scope.test.js: @scope, @pipeline
- operations/tests/unit/export-portable-skills.test.js: @scope, @pipeline
- operations/tests/unit/frontmatter-taxonomy.test.js: @scope
- operations/tests/unit/generated-artifacts-policy.test.js: @scope
- operations/tests/unit/legacy-root-v1-redirects.test.js: @scope
- operations/tests/unit/links-imports.test.js: @scope, @pipeline
- operations/tests/unit/lpd-scoped-mint-dev.test.js: @scope
- operations/tests/unit/mdx-component-runtime-smoke.test.js: @scope
- operations/tests/unit/mdx-component-scope.test.js: @scope
- operations/tests/unit/mdx-guards.test.js: @scope, @pipeline
- operations/tests/unit/mdx-safe-markdown.test.js: @scope
- operations/tests/unit/mdx.test.js: @scope, @pipeline
- operations/tests/unit/migrate-assets-to-branch.test.js: @scope
- operations/tests/unit/og-image-policy.test.js: @scope
- operations/tests/unit/openapi-reference-audit.test.js: @scope
- operations/tests/unit/openapi-rolling-issue.test.js: @scope
- operations/tests/unit/orchestrator-guides-research-review.test.js: @scope
- operations/tests/unit/ownerless-governance.test.js: @scope, @pipeline
- operations/tests/unit/precommit-staged-cache.test.js: @scope
- operations/tests/unit/quality.test.js: @scope, @pipeline
- operations/tests/unit/repair-governance.test.js: @scope
- operations/tests/unit/repair-spelling.test.js: @scope
- operations/tests/unit/repo-audit-pipeline.test.js: @scope
- operations/tests/unit/root-allowlist-format.test.js: @scope, @pipeline
- operations/tests/unit/run-pr-checks.test.js: @scope
- operations/tests/unit/script-docs.test.js: @scope, @pipeline
- operations/tests/unit/skill-docs.test.js: @scope, @pipeline
- operations/tests/unit/spelling.test.js: @scope, @pipeline
- operations/tests/unit/style-guide.test.js: @scope, @pipeline
- operations/tests/unit/ui-template-generator.test.js: @scope, @pipeline
- operations/tests/unit/usefulness-journey.test.js: @pipeline
- operations/tests/unit/usefulness-rubric.test.js: @pipeline
- operations/tests/unit/v2-folder-governance-cleanup-matrix.test.js: @scope
- operations/tests/unit/v2-link-audit.test.js: @scope
- operations/tests/unit/v2-wcag-audit.test.js: @scope
- operations/tests/unit/validate-codex-task-contract.test.js: @scope
- operations/tests/utils/file-walker.js: @scope
- operations/tests/utils/mdx-parser.js: @scope
- operations/tests/utils/mintignore.js: @scope
- operations/tests/utils/openapi-rolling-issue.js: @scope
- operations/tests/utils/spell-checker.js: @scope
- tools/config/v2-internal-report-pages.js: @category
- tools/lib/ai-tools-registry.js: @scope
- tools/lib/codex-skill-templates.js: @scope
- tools/lib/docs-authoring-rules.js: @scope
- tools/lib/docs-index-utils.js: @scope
- tools/lib/docs-page-scope.js: @scope
- tools/lib/docs-publishability.js: @scope
- tools/lib/frontmatter-taxonomy.js: @scope
- tools/lib/generated-artifacts.js: @scope
- tools/lib/load-js-yaml.js: @scope
- tools/lib/load-minimatch.js: @scope
- tools/lib/precommit-staged-cache.js: @scope
- workspace/scripts/repair-registry.py: @category, @purpose, @scope, @needs, @purpose-statement, @pipeline

## Warnings

- Could not parse workflow .github/workflows/sync-large-assets.yml: can not read a block mapping entry; a multiline key may not be an implicit key (111:13)

 108 |           (
 109 |             cd "$WORKTREE_DIR"
 110 | 
 111 |             # Remove previously tracked mir ...
-------------------^
 112 |             while IFS= read -r tracked; do
 113 |               [ -z "$tracked" ] && continue

