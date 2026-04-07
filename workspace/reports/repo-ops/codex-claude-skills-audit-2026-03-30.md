# Codex vs Claude Skills Audit

Date: 2026-03-30

## Scope

This audit compares four skill surfaces that are currently being conflated:

1. `.claude/skills/*` registered Claude wrappers
2. `ai-tools/ai-skills/*` canonical repo skills
3. `ai-tools/agent-packs/skills/*` generated cross-agent pack skills
4. `~/.codex/skills/*` currently installed Codex skills

## Key Finding

The current mismatch is structural, not just numerical.

- `.claude/skills/*` is a thin repo-local command layer.
- `ai-tools/ai-skills/*` is the canonical repo-local skill source for the older Claude workflow.
- `ai-tools/agent-packs/skills/*` is the newer cross-agent repo-local pack.
- `~/.codex/skills/*` is a mixed global install containing repo-pack skills, general Codex utility skills, plugin skills, and system skills.

Because of that, the Codex list cannot be deprecated safely as one undifferentiated set.

## Inventory Summary

### 1. Claude wrappers

Count: 12

Names:

- `agent-brief`
- `build`
- `close`
- `design`
- `diagnose`
- `dispatch`
- `iterate`
- `pm`
- `propagate`
- `research`
- `skills`
- `thread`

Observation:

- 11 of 12 are thin wrappers pointing directly to `ai-tools/ai-skills/<name>/SKILL.md`.
- `skills` is a Claude-only discovery helper and does not correspond to a canonical repo skill directory.

### 2. Canonical repo skills under `ai-tools/ai-skills`

Count with `SKILL.md`: 30

This set is the canonical source for the older Claude workflow. It includes the thread/pm/design/build workflow plus audit and authoring skills.

Direct overlap with installed Codex skills:

- `rubric-static-review`

Observation:

- Codex is not currently consuming this canonical set as its primary installed library.

### 3. Generated cross-agent pack under `ai-tools/agent-packs/skills`

Count with `SKILL.md`: 42

These are the repo-local skills that most closely represent the intended shared future layer for non-Claude agents.

Missing from installed Codex skills:

- `docs-copy`
- `docs-research-packet-generation`
- `docs-research-to-implementation-plan`
- `docs-review-fix-execution`
- `docs-review-packet-generation`
- `skill-docs`

Observation:

- Installed Codex already includes 36 of the 42 repo-pack skills.
- The main repo-to-Codex sync gap is six missing pack skills, not wholesale absence.

### 4. Installed Codex skills under `~/.codex/skills`

Count with `SKILL.md`: 53

Installed Codex skills not present in the repo cross-agent pack:

- `docs-path-migration-guardrails`
- `gh-fix-ci`
- `git-commit`
- `github-pr-creation`
- `github-pr-merge`
- `github-pr-review`
- `jupyter-notebook`
- `notion-knowledge-capture`
- `playwright`
- `playwright-interactive`
- `playwright-skill`
- `rubric-static-review`
- `skill-authoring-workflows`
- `slides`
- `sora`
- `speech`
- `transcribe`

Observation:

- These are not all “bad drift”.
- Several are general-purpose Codex/platform skills rather than repo pack candidates.
- They should be classified, not blanket-deprecated.

## Classification

### Bucket A: Repo-local shared pack skills Codex should keep

These already overlap with `ai-tools/agent-packs/skills` and represent the best candidate for the stable repo-governed Codex list.

- `agentic-project-management-orchestrator`
- `broken-links-advisory-triage`
- `codex-task-isolation-standard`
- `component-library-guided-authoring`
- `component-library-index-refresh`
- `discord-issue-intake-maintenance`
- `docs-change-review`
- `docs-ia-route-placement`
- `docs-impact-propagation`
- `docs-json-navigation-maintenance`
- `docs-source-verification`
- `docs-status-table-generation`
- `domain-pages-audit-runbook`
- `external-docs-sync-and-sanitize`
- `github-actions-data-pipeline-maintenance`
- `glossary-terminology-generation`
- `lpd-bootstrap-and-doctor`
- `mdx-parent-child-scope-patterns`
- `mint-dev-and-hook-install`
- `mintlify-authoring-style-compliance`
- `n8n-workflow-maintenance`
- `new-script-scaffold`
- `openapi-sync-and-api-doc-generation`
- `page-content-research-review`
- `pr-changed-file-ci-simulation`
- `precommit-failure-triage`
- `release-version-workflow-maintenance`
- `script-header-and-index-sync`
- `seo-frontmatter-generation`
- `spelling-and-cspell-maintenance`
- `staged-test-suite-runner`
- `structure-and-allowlist-guardrails`
- `style-mdx-quality-fix-playbook`
- `v2-browser-sweep-runbook`
- `v2-link-audit-runbook`
- `v2-pages-index-sync`

Recommendation:

- Keep these.
- Treat this bucket as the repo-governed Codex baseline.

### Bucket B: Repo-pack skills missing from installed Codex

- `docs-copy`
- `docs-research-packet-generation`
- `docs-research-to-implementation-plan`
- `docs-review-fix-execution`
- `docs-review-packet-generation`
- `skill-docs`

Recommendation:

- Do not deprecate.
- Decide whether these should be installed into Codex or intentionally retired from the repo pack.
- Based on naming and current repo direction, `docs-copy` and the review/research packet skills look like active workflow capabilities, not obvious dead weight.

### Bucket C: Codex global/general utility skills

- `gh-fix-ci`
- `git-commit`
- `github-pr-creation`
- `github-pr-merge`
- `github-pr-review`
- `jupyter-notebook`
- `playwright`
- `playwright-interactive`
- `playwright-skill`
- `slides`
- `sora`
- `speech`
- `transcribe`
- `notion-knowledge-capture`
- `skill-authoring-workflows`

Recommendation:

- Do not try to deprecate these at the repo level.
- They are general Codex capabilities, not repo-pack duplication.
- If the goal is cognitive load reduction, exclude them from repo-facing guidance instead of removing them globally.

### Bucket D: Codex repo-specific extras not yet represented in the repo pack

- `docs-path-migration-guardrails`
- `rubric-static-review`

Recommendation:

- `docs-path-migration-guardrails` looks repo-relevant and likely belongs in `ai-tools/agent-packs/skills` if it is meant to be a shared capability.
- `rubric-static-review` already exists in `ai-tools/ai-skills` but not in `ai-tools/agent-packs/skills`, which indicates packaging drift between the older canonical skill set and the newer cross-agent pack.

## Tree View

### Current state

```text
skills/
├── .claude/skills
│   ├── repo-local wrapper commands
│   │   ├── agent-brief
│   │   ├── build
│   │   ├── close
│   │   ├── design
│   │   ├── diagnose
│   │   ├── dispatch
│   │   ├── iterate
│   │   ├── pm
│   │   ├── propagate
│   │   ├── research
│   │   └── thread
│   └── claude-only helper
│       └── skills
├── ai-tools/ai-skills
│   ├── older canonical workflow skills
│   │   ├── agent-brief
│   │   ├── build
│   │   ├── close
│   │   ├── design
│   │   ├── diagnose
│   │   ├── dispatch
│   │   ├── iterate
│   │   ├── pm
│   │   ├── propagate
│   │   ├── research
│   │   └── thread
│   ├── older canonical audits and authoring
│   │   ├── cleanup-quarantine-manager
│   │   ├── component-layout-governance
│   │   ├── content-pipeline-pass-a
│   │   ├── content-pipeline-pass-b
│   │   ├── content-pipeline-tab-map
│   │   ├── cross-agent-packager
│   │   ├── docs-copy
│   │   ├── docs-coverage-and-route-integrity-audit
│   │   ├── docs-quality-and-freshness-audit
│   │   ├── docs-review-fix-execution
│   │   ├── docs-review-packet-generation
│   │   ├── generated-mdx-banners-governance
│   │   ├── page-authoring
│   │   ├── product-thinking
│   │   ├── repo-audit-orchestrator
│   │   ├── rubric-static-review
│   │   ├── script-footprint-and-usage-audit
│   │   ├── skill-docs
│   │   └── style-and-language-homogenizer-en-gb
├── ai-tools/agent-packs/skills
│   ├── repo-governed shared pack already in Codex
│   │   ├── agentic-project-management-orchestrator
│   │   ├── broken-links-advisory-triage
│   │   ├── codex-task-isolation-standard
│   │   ├── component-library-guided-authoring
│   │   ├── component-library-index-refresh
│   │   ├── discord-issue-intake-maintenance
│   │   ├── docs-change-review
│   │   ├── docs-ia-route-placement
│   │   ├── docs-impact-propagation
│   │   ├── docs-json-navigation-maintenance
│   │   ├── docs-source-verification
│   │   ├── docs-status-table-generation
│   │   ├── domain-pages-audit-runbook
│   │   ├── external-docs-sync-and-sanitize
│   │   ├── github-actions-data-pipeline-maintenance
│   │   ├── glossary-terminology-generation
│   │   ├── lpd-bootstrap-and-doctor
│   │   ├── mdx-parent-child-scope-patterns
│   │   ├── mint-dev-and-hook-install
│   │   ├── mintlify-authoring-style-compliance
│   │   ├── n8n-workflow-maintenance
│   │   ├── new-script-scaffold
│   │   ├── openapi-sync-and-api-doc-generation
│   │   ├── page-content-research-review
│   │   ├── pr-changed-file-ci-simulation
│   │   ├── precommit-failure-triage
│   │   ├── release-version-workflow-maintenance
│   │   ├── script-header-and-index-sync
│   │   ├── seo-frontmatter-generation
│   │   ├── spelling-and-cspell-maintenance
│   │   ├── staged-test-suite-runner
│   │   ├── structure-and-allowlist-guardrails
│   │   ├── style-mdx-quality-fix-playbook
│   │   ├── v2-browser-sweep-runbook
│   │   ├── v2-link-audit-runbook
│   │   └── v2-pages-index-sync
│   └── repo-pack skills missing from installed Codex
│       ├── docs-copy
│       ├── docs-research-packet-generation
│       ├── docs-research-to-implementation-plan
│       ├── docs-review-fix-execution
│       ├── docs-review-packet-generation
│       └── skill-docs
└── ~/.codex/skills
    ├── repo-relevant extras not yet in shared pack
    │   ├── docs-path-migration-guardrails
    │   └── rubric-static-review
    ├── general Codex utility or plugin skills
    │   ├── gh-fix-ci
    │   ├── git-commit
    │   ├── github-pr-creation
    │   ├── github-pr-merge
    │   ├── github-pr-review
    │   ├── jupyter-notebook
    │   ├── notion-knowledge-capture
    │   ├── playwright
    │   ├── playwright-interactive
    │   ├── playwright-skill
    │   ├── skill-authoring-workflows
    │   ├── slides
    │   ├── sora
    │   ├── speech
    │   └── transcribe
    └── system layer
        └── .system
```

### Target state

```text
skills/
├── repo-governed baseline
│   └── ai-tools/agent-packs/skills
│       ├── keep
│       │   ├── agentic-project-management-orchestrator
│       │   ├── broken-links-advisory-triage
│       │   ├── codex-task-isolation-standard
│       │   ├── component-library-guided-authoring
│       │   ├── component-library-index-refresh
│       │   ├── discord-issue-intake-maintenance
│       │   ├── docs-change-review
│       │   ├── docs-ia-route-placement
│       │   ├── docs-impact-propagation
│       │   ├── docs-json-navigation-maintenance
│       │   ├── docs-source-verification
│       │   ├── docs-status-table-generation
│       │   ├── domain-pages-audit-runbook
│       │   ├── external-docs-sync-and-sanitize
│       │   ├── github-actions-data-pipeline-maintenance
│       │   ├── glossary-terminology-generation
│       │   ├── lpd-bootstrap-and-doctor
│       │   ├── mdx-parent-child-scope-patterns
│       │   ├── mint-dev-and-hook-install
│       │   ├── mintlify-authoring-style-compliance
│       │   ├── n8n-workflow-maintenance
│       │   ├── new-script-scaffold
│       │   ├── openapi-sync-and-api-doc-generation
│       │   ├── page-content-research-review
│       │   ├── pr-changed-file-ci-simulation
│       │   ├── precommit-failure-triage
│       │   ├── release-version-workflow-maintenance
│       │   ├── script-header-and-index-sync
│       │   ├── seo-frontmatter-generation
│       │   ├── spelling-and-cspell-maintenance
│       │   ├── staged-test-suite-runner
│       │   ├── structure-and-allowlist-guardrails
│       │   ├── style-mdx-quality-fix-playbook
│       │   ├── v2-browser-sweep-runbook
│       │   ├── v2-link-audit-runbook
│       │   └── v2-pages-index-sync
│       ├── review-to-sync-or-retire
│       │   ├── docs-copy
│       │   ├── docs-research-packet-generation
│       │   ├── docs-research-to-implementation-plan
│       │   ├── docs-review-fix-execution
│       │   ├── docs-review-packet-generation
│       │   └── skill-docs
│       └── likely additions from Codex-only repo-relevant extras
│           ├── docs-path-migration-guardrails
│           └── rubric-static-review
├── repo-local adapter layer
│   ├── .claude/skills
│   │   ├── keep as wrappers while Claude remains in use
│   │   └── do not treat as canonical source
│   └── future Codex adapter
│       └── point at repo-governed baseline instead of global install state
└── global Codex environment
    └── ~/.codex/skills
        ├── keep available but out of repo governance
        │   ├── gh-fix-ci
        │   ├── git-commit
        │   ├── github-pr-creation
        │   ├── github-pr-merge
        │   ├── github-pr-review
        │   ├── jupyter-notebook
        │   ├── notion-knowledge-capture
        │   ├── playwright
        │   ├── playwright-interactive
        │   ├── playwright-skill
        │   ├── skill-authoring-workflows
        │   ├── slides
        │   ├── sora
        │   ├── speech
        │   └── transcribe
        └── do not use as authoritative repo catalogue
```

## Structural Problems

### Problem 1: Two competing canonical sources

The repo currently has:

- older canonical skill source: `ai-tools/ai-skills`
- newer cross-agent pack source: `ai-tools/agent-packs/skills`

These are not identical, and Codex is closer to the newer pack than to the older canonical source.

### Problem 2: Codex install state is global, not repo-governed

`~/.codex/skills` reflects accumulated local installs, system skills, and plugin skills. It is not a reliable source of repo intent.

### Problem 3: Claude has a clear repo-local adapter layer; Codex does not

Claude has an explicit repo-local registration surface in `.claude/skills/*`, even if it is just wrappers. Codex currently relies on ambient installed skills plus the prompt-time skill list, which makes repo ownership less obvious.

## Recommendation

Do not start by deprecating “most Codex skills”.

Start with a governance split:

1. Define a repo-governed Codex baseline as `ai-tools/agent-packs/skills`.
2. Audit the six pack skills missing from installed Codex and either sync or formally retire them.
3. Promote repo-relevant Codex-only skills into the shared pack where appropriate:
   - `docs-path-migration-guardrails`
   - `rubric-static-review`
4. Leave global utility/plugin/system skills alone, but stop treating them as part of the repo’s governed skill catalogue.
5. If you want Claude/Codex parity, create a small repo-local Codex adapter document that points users to the repo-governed baseline instead of relying on whatever happens to be installed in `~/.codex/skills`.

## Proposed Deprecation Candidates

No strong deprecation recommendation is justified from inventory data alone.

The only safe near-term deprecation target is conceptual, not file-based:

- deprecate the practice of treating `~/.codex/skills` as the authoritative repo skill list

Anything beyond that needs a second pass that checks:

- actual recent usage
- broken references
- duplication of workflow coverage
- whether a skill is plugin/system/global rather than repo-owned

## Suggested Next Pass

Run a second audit that classifies each installed Codex skill by provenance:

- repo pack
- repo canonical old layer
- Codex system
- plugin-provided
- personal/global utility

Then decide:

- keep in repo pack
- migrate into repo pack
- hide from repo guidance
- truly deprecate
