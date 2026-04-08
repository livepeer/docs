# Pipeline Review Process

> Repeatable subprocess for reviewing, fixing, and shipping each pipeline.
> One pipeline at a time. Each step verified before proceeding to the next.

---

Following from [design.mdx](.github/workspace/phase2/pipeline-design/design.mdx)

## Key Distinctions

### Governance vs Concerns

- **Governance** owns the enforcement infrastructure (layers, patterns, standards, meta-governance)
- **Each concern** (health, copy, brand, etc.) owns its rules (what "correct" means for their domain)
- Governance ensures every concern's rules have enforcement at the right layer
- If a concern defines a rule but has no enforcement, that's a governance gap

### Research vs Requirements vs Design vs Audit vs Implementation

- **Research:** What documents define requirements? What policies exist? (input to requirements)
- **Requirements:** What rules must be enforced? Per category. Derived from research
- **Design:** From first principles, what is the TARGET STATE? The ideal enforcement architecture regardless of what exists. Prevents drift, prevents tech debt, keeps repo homogeneous
- **Audit:** What ACTUALLY EXISTS today? What's working, broken, missing?
- **Implementation plan:** The GAPS between design and audit, prioritised. This is where we see what needs building

Design is NOT a description of what we have. It's what we NEED.

### Enforcement Pattern

Every enforcement follows:

```
Detect -> Diagnose -> Self-repair (if possible) -> Escalate (if not) -> Verify
```

Priority order for response:
1. **Auto-fix silently** (regenerate index, add missing banner)
2. **Auto-fix with PR** (weekly repair creates PR for review)
3. **Create issue with fix instructions** (human actions at their pace)
4. **Block with clear error** (PR validator with fix guidance)

Humans only at steps 3-4. Never at 1-2. No reports that go nowhere.

### Design Principles

These apply to every concern's design, not just governance:

1. **Runs without humans.** Every rule is machine-enforced or it doesn't exist
2. **Self-repairs at every layer.** Auto-fix wherever possible. Humans are last resort
3. **Catches early.** Closer to the author = cheaper to fix
4. **Prevents drift.** Standards don't erode over time
5. **Prevents tech debt.** Ungoverned work can't accumulate
6. **Keeps repo homogeneous.** Same mental model everywhere
7. **Makes correct easy.** Through:
   - Templates for scripts, components, pages (pre-filled JSDoc, frontmatter, structure)
   - Scaffolding tools that generate new items in the right place with the right tags
   - IDE tooling (VS Code snippets, autocomplete) that makes additions correct at keystroke level
   - Clear documentation that tells you where things belong and why
   - Gold-standard examples (`.claude/references/`) for each type of artifact
8. **Scales.** Adding a new rule/surface doesn't redesign the system

---

## Per-Concern Steps

### Output Structure

```
.github/workspace/design/{concern}/
  design-overview.md          (canonical doc, sections match lifecycle below)
  process-docs/
    research.md               (index of related repo artifacts)
    audit.md                  (current state findings)
    related/                  (raw agent outputs)
```

### Lifecycle (section order in design-overview.md)

1. **Research** - index all related docs, policies, frameworks
2. **Requirements** - what rules must be enforced, per category
3. **Design** - target state from first principles
4. **Audit** - what exists today
5. **Implementation Plan** - gaps between design and audit, prioritised
6. **Implementation Log** - fixes applied
7. **Test Results** - dry-run outputs
8. **Documentation Status** - are canonical docs current
9. **Branch Status** - docs-v2-dev vs docs-v2
10. **Backlog** - captured during work, not actioned until design approved

### Step 0: Research

**Goal:** Find all documents that define requirements for this concern
Output: `process-docs/research.md`

### Step 1: Audit the pipeline

**Goal:** Understand exactly what this pipeline does today, end to end.

- Trace the full chain: trigger -> workflow -> script(s) -> output(s) -> consumer(s)
- Read every file involved (workflow YAML, scripts, config, output files, consuming pages)
- Document: what data sources does it use? Are they canonical? Are they current?
- Document: what does it produce? Is the output structured correctly for consumers?
- Document: what error handling exists? What happens on failure?
- Check: does the workflow exist on docs-v2 (production)? If so, how does it differ from docs-v2-dev?
- Check: are there deprecated/legacy files involved that should be cleaned up?
- Check: does the script JSDoc header match reality (@type, @concern, @description, @usage)?
- Produce: audit summary with status (working/broken/stale/missing) per step in the chain

**Output:** Pipeline audit document in `.github/workspace/phase2/pipeline-reviews/{pipeline-name}-audit.md`

### Step 2: Update the action wrapper

**Goal:** The workflow YAML follows all framework standards.

- Naming: follows `type-concern-verb-name.yml` convention (or confirmed new name from decisions-log)
- `name:` field is descriptive
- `permissions:` declared explicitly
- `concurrency:` group set (for auto-commit workflows)
- Branch targeting uses `vars.DEPLOY_BRANCH` (no hardcoded branches)
- Node version: `20`
- `npm ci` (not `npm install`)
- Bot identity: `github-actions[bot]`
- Commit message: `chore(scope): description [skip ci]`
- Error handling: meets minimum for its pipeline tag (section 4.3 of framework)
- `--dry-run` support (for workflow_dispatch triggers)
- Triggers are correct and complete (cron schedule, dispatch types, PR paths)
- No inline scripts > 50 lines (extract if needed)
- Generate/verify pair exists (for generators)

**Output:** Updated workflow YAML. Changes documented in audit file.

### Step 3: Audit the scripts

**Goal:** Every script in the pipeline is correct, current, and governed.

- Read the full script. Does it do what it claims?
- Are data sources canonical? (not hardcoded, not deprecated, not stale config)
- Are imports/dependencies correct? (no stale paths, no missing modules)
- Does the JSDoc 11-tag header match reality?
  - @script, @type, @concern, @niche, @purpose, @description, @mode, @pipeline, @scope, @usage, @policy
- Is the script in the correct folder per type/concern taxonomy?
- Does `--dry-run` work? (run it and verify)
- Does `--check` work? (for generators with verify pairs)
- Are there hardcoded values that should be config-driven?
- Are there deprecated patterns (old paths, old API usage, old config files)?
- Is error handling present and correct?
- Are there shared utilities that should be extracted (duplicated code)?

**Output:** Script audit notes in the pipeline audit file. JSDoc updates applied. Path corrections if needed.

### Step 4: Update and dry-run the pipeline

**Goal:** The pipeline runs successfully in dry-run mode on docs-v2-dev.

- Apply all fixes from steps 2 and 3
- Run the full pipeline with `--dry-run`:
  - For GitHub Actions: `gh workflow run {workflow} -f dry_run=true` or manual dispatch from Actions tab
  - For scripts: `node {script} --dry-run`
- Verify output is correct:
  - Data files have expected structure
  - Consumer pages can import the output
  - No stale references in output
- Run without dry-run on docs-v2-dev (test branch)
- Verify the commit is clean (correct files staged, correct message, correct bot identity)
- Document: what changed, what was fixed, what was verified

**Output:** Verified working pipeline on docs-v2-dev. Test results documented.

### Step 5: Update canonical documentation

**Goal:** All governance docs, references, and catalogs reflect the reviewed pipeline's current state.

- Update the pipeline's action-library page (`.github/workspace/actions-library/{type}/{concern}/{name}.mdx`)
- Update `actions-audit.json` if any classification changed (type, concern, name, status, scripts, bugs)
- Update `framework-canonical.md` if the review surfaced a gap or new pattern
- Update `decisions-log.mdx` if a new decision was made during the review
- Update `locked-pipelines.md` capability table (WORKING/BROKEN/MISSING status)
- Update the concern's pipeline design doc if the design changed
- Check if `.claude/references/` exemplars need updating (if this pipeline is a gold standard)
- Check if `governance-index.mdx` needs updating

**Output:** All docs current with the reviewed pipeline's actual state.

### Step 6: Merge to docs-v2

**Goal:** The pipeline is live on production.

- Compare docs-v2-dev workflow with docs-v2 workflow (if it exists on production)
- Document all differences
- Cherry-pick or merge the workflow + scripts + config to docs-v2
- Ensure all required secrets and variables exist on production
- Manual dispatch with `--dry-run` on docs-v2 to verify
- Manual dispatch without dry-run to confirm production run
- Verify: output files updated on production branch
- Verify: consumer pages render correctly with new data

**Output:** Pipeline live on docs-v2. Production verification documented.

---

## Agent Prompts (reusable)

### Research Agent: Requirements Discovery

Use when starting a new concern. Finds every document that defines governance NEEDS.

```
I need to find EVERY document, config, plan, policy, and rule in this repo 
that defines {CONCERN} REQUIREMENTS - what the repo needs {concern} to do, 
not what scripts exist.

This is about NEEDS and POLICIES, not implementation.

Search for:
1. Policy docs: docs-guide/policies/, OSS-OWNERLESS-REPO-GOVERNANCE/, 
   CLAUDE.md hard boundaries, AGENTS.md rules, .codex/task-contract.yaml
2. Framework docs that define standards: SCRIPT-GOVERNANCE/, 
   COMPONENT-GOVERNANCE/, CONTENT-WRITING/, DOCUMENTATION/, 
   REPO-STRUCTURE-GOV/, AI-TOOLS-GOVERNANCE/
3. Config that encodes rules: tools/lib/, tools/config/, 
   tools/lib/copy-governance/
4. Git hooks: .githooks/
5. PR templates: .github/pull_request_template*.md
6. Mintlify constraints: mintlify-constraints-reference.md
7. Actions framework decisions: decisions-log.mdx, framework-canonical.md
8. README and contributing docs

For EACH document:
- Full path
- What governance requirement/rule/policy it defines (2-3 lines)
- Suggested category
- Is it current or stale
```

### Research Agent: Enforcement Mechanisms

Use when starting a new concern. Finds every mechanism that enforces rules.

```
I need to find every ENFORCEMENT MECHANISM in this repo for {CONCERN} - 
things that actually check, block, validate, or repair violations.

Search for:
1. Pre-commit gates: .githooks/pre-commit, pre-push
2. Claude hooks: operations/scripts/dispatch/governance/ (all files)
3. PR-time validators: every workflow with check/verify/validate/test/lint
4. Post-merge enforcement: governance-sync, P4 generators
5. Scheduled enforcement: content-health, freshness-monitor, link audit,
   page-integrity-health
6. Self-heal mechanisms: governance-pipeline.js, repair-*.js
7. Generated file protection: pre-tool-guard.js, enforce-generated-file-banners.js

For EACH mechanism:
- Full path
- What it enforces (specific rule)
- When it runs (pre-commit, PR, push, cron, manual, hook event)
- What happens on violation (block, warn, report, auto-fix, create issue)
- Suggested category
```

### Pipeline Audit Agent

Use per-pipeline during audit phase.

```
Pipeline: {name}
Step: audit

Files involved:
  - Workflow: {path}
  - Script(s): {paths}
  - Config: {paths}
  - Output: {paths}
  - Consumers: {paths}

Framework reference: .github/workspace/framework-canonical.md
Decisions: .github/workspace/reports-audits/decisions-log.mdx

Trace the full chain: trigger -> workflow -> script(s) -> output(s) -> consumer(s)
Read every file involved.
Document: data sources, outputs, error handling, branch differences.
Check: does the workflow exist on docs-v2? How does it differ?
Check: does the script JSDoc match reality?
Produce: audit summary with status (working/broken/stale/missing) per step.

Verify every claim against the actual file. Do not assume. Read before asserting.
Report: what you found, what needs human decision.
```

---

## Pipeline Review Tracker

| Pipeline                         | Concern         | Step 1 | Step 2 | Step 3 | Step 4 | Step 5 | Notes                                       |
| -------------------------------- | --------------- | ------ | ------ | ------ | ------ | ------ | ------------------------------------------- |
| content-health                   | health          |        |        |        |        |        | Main health scanner (6 scripts, all masked) |
| freshness-monitor                | health          |        |        |        |        |        | Headless, hardcoded thresholds              |
| v2-external-link-audit           | health          |        |        |        |        |        | Headless, no issue creation                 |
| page-integrity-health            | health          |        |        |        |        |        | Scan+fix chain (closest to gold standard)   |
| openapi-reference-validation     | health          |        |        |        |        |        | GOLD STANDARD                               |
| broken-links                     | health          |        |        |        |        |        | PR link check                               |
| test-v2-pages                    | health          |        |        |        |        |        | PR browser sweep                            |
| test-suite                       | copy            |        |        |        |        |        | P2 hard gate, quality suite                 |
| codex-governance                 | governance      |        |        |        |        |        | P2 hard gate                                |
| governance-sync                  | governance      |        |        |        |        |        | Post-merge orchestrator                     |
| repair-governance                | governance      |        |        |        |        |        | Weekly self-heal                            |
| auto-assign-docs-reviewers       | governance      |        |        |        |        |        | Inline 80 lines                             |
| close-linked-issues              | governance      |        |        |        |        |        | Inline 141 lines                            |
| discord-issue-intake             | governance      |        |        |        |        |        | Inline 261 lines                            |
| docs-v2-issue-indexer            | governance      |        |        |        |        |        | Inline 403 lines                            |
| issue-auto-label                 | governance      |        |        |        |        |        | Inline 339 lines                            |
| style-homogenise                 | brand           |        |        |        |        |        | Manual EN-GB fix                            |
| update-contract-addresses        | maintenance     |        |        |        |        |        | Recently updated, deferred from rename      |
| update-changelogs                | copy            |        |        |        |        |        | LLM integration                             |
| update-discord-data              | copy            |        |        |        |        |        | Social feed                                 |
| update-forum-data                | copy            |        |        |        |        |        | Social feed (missing permissions)           |
| update-ghost-blog-data           | copy            |        |        |        |        |        | Social feed (missing permissions)           |
| update-github-data               | copy            |        |        |        |        |        | Social feed (zero consumers)                |
| update-rss-blog-data             | copy            |        |        |        |        |        | Social feed                                 |
| update-youtube-data              | copy            |        |        |        |        |        | Social feed (missing permissions)           |
| update-livepeer-release          | maintenance     |        |        |        |        |        | Inline 60 lines, GNU grep bug               |
| project-showcase-sync            | copy            |        |        |        |        |        | NOT WORKING                                 |
| sync-large-assets                | maintenance     |        |        |        |        |        | Binary assets                               |
| translate-docs                   | copy            |        |        |        |        |        | Path mismatch bug                           |
| seo-refresh                      | discoverability |        |        |        |        |        | P0: no commit step                          |
| generate-ai-companions           | discoverability |        |        |        |        |        | P4 generator                                |
| generate-ai-sitemap              | discoverability |        |        |        |        |        | P4 generator                                |
| generate-llms-files              | discoverability |        |        |        |        |        | P4 generator                                |
| generate-component-registry      | maintenance     |        |        |        |        |        | P4 generator, no verify pair                |
| generate-docs-guide-catalogs     | maintenance     |        |        |        |        |        | P4 generator                                |
| generate-docs-index              | maintenance     |        |        |        |        |        | P4 generator                                |
| sdk_generation                   | maintenance     |        |        |        |        |        | Bad name, .yaml ext                         |
| check-ai-companions              | discoverability |        |        |        |        |        | P3 verify pair                              |
| verify-ai-sitemap                | discoverability |        |        |        |        |        | P3 verify pair, hardcoded branch            |
| verify-llms-files                | discoverability |        |        |        |        |        | P3 verify pair, hardcoded branch            |
| check-docs-guide-catalogs        | maintenance     |        |        |        |        |        | P3 verify pair                              |
| check-docs-index                 | maintenance     |        |        |        |        |        | P3 verify pair                              |
| data-refresh-governance          | copy            |        |        |        |        |        | Reusable workflow (social feeds)            |
| docs-catalog-governance          | maintenance     |        |        |        |        |        | Catalog enforcement                         |
| page-integrity-health            | health          |        |        |        |        |        | Scan+fix dispatcher                         |
| update-contract-addresses-shadow | maintenance     |        |        |        |        |        | Shadow/test mode                            |
