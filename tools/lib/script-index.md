# lib Script Index

{/* SCRIPT-INDEX:START */}
## Script Index

| Script | Summary | Usage | Domain |
|---|---|---|---|
| `tools/lib/ai-tools-registry.js` | Shared loader, validator, coverage checker, and report renderer for the AI-tools registry contract and generated inventory report. | `const registry = require('../lib/ai-tools-registry');` | docs |
| `tools/lib/codex-skill-templates.js` | Shared helper for validating, selecting, and loading canonical Codex skill templates. | `const { discoverTemplates } = require('../lib/codex-skill-templates');` | docs |
| `tools/lib/component-governance-utils.js` | Shared parsing and validation utilities for component governance scripts. | `const utils = require('../lib/component-governance-utils');` | docs |
| `tools/lib/docs-authoring-rules.js` | Shared warning-level authoring rules for guide layouts and code-block metadata, plus deterministic code-block icon repair. | `const { analyzeGuideLayoutWarnings, repairCodeBlockMetadata } = require('../lib/docs-authoring-rules');` | docs |
| `tools/lib/docs-index-utils.js` | Shared utilities for docs-index.json generation — path resolution, frontmatter extraction, index merging | `node tools/lib/docs-index-utils.js [flags]` | docs |
| `tools/lib/docs-page-scope.js` | Shared authored-page scope helpers that distinguish generated docs pages from authored docs pages for warning-only validators and reports. | `const { filterAuthoredDocsPageFiles } = require('../lib/docs-page-scope');` | docs |
| `tools/lib/docs-publishability.js` | Shared path publishability rules for v2 docs content and tooling. | `const { isExcludedV2ExperimentalPath } = require('../lib/docs-publishability');` | docs |
| `tools/lib/docs-usefulness/config-validator.js` | Validates docs-usefulness config structure and field completeness. | `const { validateConfig } = require('../lib/docs-usefulness/config-validator');` | docs |
| `tools/lib/docs-usefulness/journey-check.js` | Evaluates docs pages against user journey completeness criteria. | `const { checkJourney } = require('../lib/docs-usefulness/journey-check');` | docs |
| `tools/lib/docs-usefulness/llm-evaluator.js` | Wraps LLM API calls for rubric-based page quality evaluation. | `const { evaluate } = require('../lib/docs-usefulness/llm-evaluator');` | docs |
| `tools/lib/docs-usefulness/prompts/changelog.js` | LLM prompt template for changelog page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/changelog');` | docs |
| `tools/lib/docs-usefulness/prompts/concept.js` | LLM prompt template for concept page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/concept');` | docs |
| `tools/lib/docs-usefulness/prompts/faq.js` | LLM prompt template for faq page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/faq');` | docs |
| `tools/lib/docs-usefulness/prompts/glossary.js` | LLM prompt template for glossary page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/glossary');` | docs |
| `tools/lib/docs-usefulness/prompts/how_to.js` | LLM prompt template for how_to page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/how_to');` | docs |
| `tools/lib/docs-usefulness/prompts/index.js` | LLM prompt template for index page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/index');` | docs |
| `tools/lib/docs-usefulness/prompts/landing.js` | LLM prompt template for landing page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/landing');` | docs |
| `tools/lib/docs-usefulness/prompts/overview.js` | LLM prompt template for overview page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/overview');` | docs |
| `tools/lib/docs-usefulness/prompts/reference.js` | LLM prompt template for reference page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/reference');` | docs |
| `tools/lib/docs-usefulness/prompts/troubleshooting.js` | LLM prompt template for troubleshooting page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/troubleshooting');` | docs |
| `tools/lib/docs-usefulness/prompts/tutorial.js` | LLM prompt template for tutorial page-type usefulness evaluation. | `const { getPrompt } = require('../lib/docs-usefulness/prompts/tutorial');` | docs |
| `tools/lib/docs-usefulness/quality-gate.js` | Applies pass/fail thresholds to usefulness scores. | `const { applyGate } = require('../lib/docs-usefulness/quality-gate');` | docs |
| `tools/lib/docs-usefulness/rubric-loader.js` | Loads and parses rubric YAML/JSON for page-type scoring rules. | `const { loadRubric } = require('../lib/docs-usefulness/rubric-loader');` | docs |
| `tools/lib/docs-usefulness/rule-evaluators.js` | Evaluates individual rubric rules against page content. | `const { evaluateRule } = require('../lib/docs-usefulness/rule-evaluators');` | docs |
| `tools/lib/docs-usefulness/scoring.js` | Aggregates rule scores into a final usefulness score per page. | `const { score } = require('../lib/docs-usefulness/scoring');` | docs |
| `tools/lib/frontmatter-taxonomy.js` | Shared frontmatter taxonomy utilities for routable docs pages. | `const taxonomy = require('../lib/frontmatter-taxonomy');` | docs |
| `tools/lib/generated-artifacts.js` | Generated artifact governance helpers — load the manifest, validate enums, and match staged files to managed artifacts | `node tools/lib/generated-artifacts.js [flags]` | docs |
| `tools/lib/generated-file-banners.js` | Generated file banner template — provides standard banner text for auto-generated files | `node tools/lib/generated-file-banners.js [flags]` | docs |
| `tools/lib/load-js-yaml.js` | YAML loader utility — resolves js-yaml from repo-local installs and falls back to a minimal parser for task-contract style files in bare worktrees | `node -e "require('./tools/lib/load-js-yaml')"` | docs |
| `tools/lib/load-minimatch.js` | Glob matcher loader — resolves minimatch from repo-local installs and falls back to a simple glob matcher for bare worktrees | `node -e "require('./tools/lib/load-minimatch')"` | docs |
| `tools/lib/mdx-safe-markdown.js` | Shared MDX-safe markdown helpers that collect first-party markdown files, detect unsafe patterns, and apply deterministic repairs. | `node tools/lib/mdx-safe-markdown.js [flags]` | docs |
| `tools/lib/script-governance-config.js` | Shared governance constants for script discovery, indexing, classification, and pipeline normalisation across the repo. | `const config = require('../lib/script-governance-config');` | docs |
| `tools/lib/script-header-utils.js` | Shared helpers for extracting and reading top-of-file script governance headers without scanning into executable source. | `const { extractLeadingScriptHeader } = require('../lib/script-header-utils');` | docs |
{/* SCRIPT-INDEX:END */}
