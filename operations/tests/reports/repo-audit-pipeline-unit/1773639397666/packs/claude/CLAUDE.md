# Claude Code Repo Audit Pack

Use these stages in order for a static-first docs infrastructure audit pipeline.

## 1. script-footprint-and-usage-audit

- Goal: Detect script sprawl, duplicates, placeholders, and backup artifacts.
- Severity Model: critical-high-medium-low
- Autofix Mode: advisory
- Commands:
  - `node tools/scripts/script-footprint-and-usage-audit.js --scope full`
- Outputs:
  - `tasks/reports/repo-ops/script-footprint-and-usage-audit.md`
  - `tasks/reports/repo-ops/script-footprint-and-usage-audit.json`

## 2. docs-quality-and-freshness-audit

- Goal: Surface TODO/TBD/Coming Soon markers, thin content, and freshness risk.
- Severity Model: critical-high-medium-low
- Autofix Mode: advisory
- Commands:
  - `node tools/scripts/docs-quality-and-freshness-audit.js --scope full`
- Outputs:
  - `tasks/reports/repo-ops/docs-quality-and-freshness-audit.md`
  - `tasks/reports/repo-ops/docs-quality-and-freshness-audit.json`

## 3. style-and-language-homogenizer-en-gb

- Goal: Enforce UK English and style consistency on English v2 docs in phase 1.
- Severity Model: critical-high-medium-low
- Autofix Mode: advisory
- Commands:
  - `node tools/scripts/style-and-language-homogenizer-en-gb.js --scope full`
- Outputs:
  - `tasks/reports/repo-ops/style-and-language-homogenizer-en-gb.md`
  - `tasks/reports/repo-ops/style-and-language-homogenizer-en-gb.json`

## 4. component-layout-governance

- Goal: Validate page composition against component layout contracts by page type.
- Severity Model: critical-high-medium-low
- Autofix Mode: advisory
- Commands:
  - `node tools/scripts/component-layout-governance.js --scope full`
- Outputs:
  - `tasks/reports/repo-ops/component-layout-governance.md`
  - `tasks/reports/repo-ops/component-layout-governance.json`

## 5. cleanup-quarantine-manager

- Goal: Classify cleanup candidates and apply conservative quarantine only when requested.
- Severity Model: critical-high-medium-low
- Autofix Mode: requires-approval
- Commands:
  - `node tools/scripts/cleanup-quarantine-manager.js`
  - `node tools/scripts/cleanup-quarantine-manager.js --apply`
- Outputs:
  - `tasks/reports/repo-ops/cleanup-quarantine-manifest.json`
  - `tasks/reports/repo-ops/cleanup-quarantine-manifest.md`

## 6. cross-agent-packager

- Goal: Generate consistent skill packs for Codex, Cursor, Claude Code, and Windsurf.
- Severity Model: info-only
- Autofix Mode: safe
- Commands:
  - `node tools/scripts/cross-agent-packager.js --agent-pack all`
- Outputs:
  - `ai-tools/agent-packs/codex/skills-manifest.json`
  - `ai-tools/agent-packs/cursor/rules.md`
  - `ai-tools/agent-packs/claude/CLAUDE.md`
  - `ai-tools/agent-packs/windsurf/rules.md`

---

## Reference Skills

These skills are not part of the audit pipeline but provide standards and guidance for authoring and review.

### repo-audit-orchestrator

- Goal: Run a full docs infrastructure audit pipeline and produce a unified scorecard.
- Access:
  - `node tools/scripts/repo-audit-orchestrator.js --mode static --scope full`
- Inputs: repo state, audit mode, scope, pipeline manifest, skill catalog
- Outputs:
  - `tasks/reports/repo-ops/repo-audit-summary.md`
  - `tasks/reports/repo-ops/repo-audit-summary.json`

### rubric-static-review

- Goal: Provide static rubric-based scoring and risk prioritization.
- Access:
  - `read ai-tools/ai-skills/rubric-static-review/SKILL.md`
- Inputs: repository files, architecture docs, quality checks
- Outputs:
  - `scorecard`
  - `top actions`

### page-authoring

- Goal: Comprehensive guide for writing new v2 documentation pages with correct UX patterns, components, frontmatter, UK English, journey mapping, and content standards.
- Access:
  - `read ai-tools/ai-skills/page-authoring/SKILL.md`
- Inputs: page type, audience, section placement, persona context
- Outputs:
  - `new MDX page conforming to all repo standards`

Run source: `node tools/scripts/cross-agent-packager.js --agent-pack all`

