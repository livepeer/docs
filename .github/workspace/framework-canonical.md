# Workflow and Pipeline Governance Framework

> **DEPRECATED as canonical location.** The published summary lives at `docs-guide/frameworks/github-actions.mdx`. This file remains as the full working specification. Edits here must be synced to the published version.

> Canonical reference for the Livepeer Docs workflow and pipeline architecture.
> Status: CONFIRMED. 8 decisions locked (D-ACT-01 through D-ACT-08).
> Decisions log: `.github/workspace/decisions-log.mdx`
> Archived product capabilities context: `.github/workspace/phase2/locked-pipelines.md`
> Archived pipeline design context: `.github/workspace/phase2/pipeline-design/`

---

## 1. Purpose

This repo is ownerless and self-governed. It must self-repair and self-document through automated pipelines. This framework defines how those pipelines are built, what they must do, and how they are governed.

**What the product needs to do:**

1. **Protect itself** - detect breaks, auto-fix what it can, raise issues for what it can't, block bad changes
2. **Keep itself current** - pull fresh external data, regenerate derived files, detect drift
3. **Maintain its own standards** - enforce voice, grammar, spelling, terminology, visual identity
4. **Make itself findable** - keep AI/search surfaces regenerated on every change
5. **Document itself** - catalogs, indexes, registries auto-regenerate
6. **Govern itself** - rules enforced, issues managed, drift self-healed

---

## 2. Pipeline Architecture (D-ACT-08)

### The dispatcher model

All workflow YAML files are dispatchers. They handle when, where, permissions, and orchestration. The typed work lives in scripts. The type classification comes from what the script does, not the workflow.

| Layer         | Role                                                                | Has type?             |
| ------------- | ------------------------------------------------------------------- | --------------------- |
| Workflow YAML | Dispatcher: trigger, permissions, environment, orchestration        | No (all dispatchers)  |
| Script        | Does the work: integrates, generates, validates, audits, remediates | Yes (7-type taxonomy) |

The type prefix stays in the workflow filename for visual grouping in the flat `.github/workflows/` folder.

### Pipeline patterns

Every pipeline follows one of these shapes. The gold standard is openapi-reference-validation which implements the full scan-report-act chain.

**Pattern A: Integrate** (fetch external data, commit)

```
Trigger (cron / dispatch / manual)
  -> Fetch from external API
  -> Transform data
  -> Diff check
  -> Commit + push
  -> On failure: create issue
```

**Pattern B: Generate** (build from internal data, commit)

```
Trigger (push to deploy branch / manual)
  -> Read repo data
  -> Generate output file
  -> Diff check
  -> Commit + push
```

**Pattern C: Check** (validate on PR, report)

```
Trigger (pull_request / push)
  -> Run validator script(s)
  -> Report pass/fail
  -> P2: block merge / P3: advise only
```

**Pattern D: Scan, Report, Act** (scheduled monitoring with response)

```
Trigger (cron / manual)
  -> Run scan script
  -> Produce report
  -> Route findings:
     -> Auto-remediate (run fix script, commit/PR)
     -> Create GitHub issue (can't auto-fix)
     -> Re-dispatch workflow (stale data)
  -> No headless scans. Every finding gets a response
```

**Pattern E: Repair** (fix broken state)

```
Trigger (cron / manual)
  -> Scan for drift
  -> Fix
  -> Commit or create PR
```

**Pattern F: React** (issue/PR lifecycle)

```
Trigger (issues / pull_request / repository_dispatch)
  -> Call GitHub API (label, assign, index, close, create)
  -> No file changes
```

**Pattern G: Orchestrate** (dispatch children)

```
Trigger (push to deploy branch)
  -> Run orchestrator script
  -> Spawns child processes
  -> Aggregate results
```

### Generate/verify pairs

Every generator (Pattern B) must have a matching verifier (Pattern C) that runs on PR. The verifier runs the generator with `--check` flag and reports if the committed file matches what the generator would produce.

| Generator                    | Verifier                  | Status            |
| ---------------------------- | ------------------------- | ----------------- |
| generate-ai-companions       | check-ai-companions       | Paired            |
| generate-ai-sitemap          | verify-ai-sitemap         | Paired            |
| generate-llms-files          | verify-llms-files         | Paired            |
| generate-docs-index          | check-docs-index          | Paired            |
| generate-docs-guide-catalogs | check-docs-guide-catalogs | Paired            |
| generate-component-registry  | MISSING                   | Needs verify pair |

### Scan-to-act routing

Pattern D scanners must route findings, not just report them. The routing table for each scanner is defined in its pipeline design doc (`.github/workspace/phase2/pipeline-design/health.md`).

| Finding type        | Route                  | Example                                |
| ------------------- | ---------------------- | -------------------------------------- |
| Fixable by script   | Auto-remediate         | Component metadata repair              |
| External dependency | Create GitHub issue    | Broken external link                   |
| Stale data          | Re-dispatch integrator | Freshness monitor triggers feed update |

---

## 3. Taxonomy

### Types (7 values, D-ACT-01, D-ACT-07)

| Type         | Purpose                                      | Count |
| ------------ | -------------------------------------------- | ----- |
| `integrator` | Pulls external data into the repo            | 12    |
| `generator`  | Produces files from internal repo data       | 7     |
| `validator`  | Enforces rules with pass/fail gate on PR     | 10    |
| `audit`      | Read-only scheduled monitoring and reporting | 3     |
| `remediator` | Auto-fixes broken state with optional commit | 3     |
| `dispatch`   | Orchestrates multiple scripts/workflows      | 1     |
| `interface`  | Reacts to issue/PR/external events           | 5     |

**Classification test:** If it pulls data from an external source, it is an integrator. If it produces files from internal repo data, it is a generator. If it checks rules and returns pass/fail, it is a validator. If it only scans and reports, it is an audit. If it edits files to fix broken state, it is a remediator. If it orchestrates child workflows, it is a dispatch. If it reacts to issue/PR events for triage, labelling, or assignment, it is an interface.

### Concerns (7 values, D-ACT-05)

The concern names the part of the system the pipeline operates on.

| Concern           | What it covers                                           | Count                                         |
| ----------------- | -------------------------------------------------------- | --------------------------------------------- |
| `copy`            | Written text, data standards, spelling, grammar          | 10                                            |
| `health`          | Site integrity, links, rendering, freshness, assets      | 6                                             |
| `maintenance`     | Indexes, catalogs, documentation, registries, changelogs | 9                                             |
| `discoverability` | SEO, AEO, AI indexing, translation                       | 7                                             |
| `governance`      | System rules, compliance, issue/PR management            | 8                                             |
| `brand`           | Style, formatting, page structure, voice                 | 1                                             |
| `integrations`    | External data feeds, APIs, structured data pipelines     | (absorbed into concern of consuming pipeline) |

### Pipeline tags (8 values, D-ACT-02)

Classify when a workflow runs and what authority it has.

| Tag              | Trigger                      | Authority                | Count |
| ---------------- | ---------------------------- | ------------------------ | ----- |
| **P2**           | PR (required check)          | Blocks merge             | 2     |
| **P3**           | PR (non-required)            | Advisory                 | 8     |
| **P4**           | Push to deploy branch        | Post-merge auto-commit   | 8     |
| **P5**           | Schedule (read-only)         | Advisory, report only    | 4     |
| **P5-auto**      | Schedule + auto-commit       | Writes to repo           | 12    |
| **P6**           | Schedule + auto-fix          | Self-heal, may create PR | 1     |
| **manual**       | workflow_dispatch only       | Human-triggered          | 4     |
| **event-driven** | repository_dispatch / issues | External event           | 3     |

---

## 4. Required Standards

### 4.1 Workflow file naming (D-ACT-04)

**Pattern:** `type-concern-verb-name.yml`

**Example:** `integrator-maintenance-update-contract-addresses.yml`

**Segments:**

- **type** (7 values): `integrator`, `generator`, `validator`, `audit`, `remediator`, `dispatch`, `interface`
- **concern** (7 values): `copy`, `health`, `maintenance`, `discoverability`, `governance`, `brand`, `integrations`
- **function** (11 verbs, closed enum):

| Verb       | Absorbs                        | Used by types |
| ---------- | ------------------------------ | ------------- |
| `update`   | `sync`                         | integrator    |
| `generate` |                                | generator     |
| `check`    | `verify`, `test`               | validator     |
| `scan`     | `audit`, `monitor`             | audit         |
| `repair`   | `fix`, `refresh`, `homogenise` | remediator    |
| `dispatch` |                                | dispatch      |
| `label`    |                                | interface     |
| `index`    |                                | interface     |
| `intake`   |                                | interface     |
| `close`    |                                | interface     |
| `assign`   |                                | interface     |

- **name**: descriptive kebab-case slug that communicates purpose at a glance

**Naming quality rule:** The name segment must describe what the workflow does, not how it is implemented. If someone unfamiliar with the repo cannot guess the workflow's purpose from the filename alone, the name is bad.

| Bad name                | Problem                 | Good name                     |
| ----------------------- | ----------------------- | ----------------------------- |
| `sdk_generation`        | Vague, underscore       | `generate-sdk-clients`        |
| `content-health`        | What aspect of content? | `scan-content-quality`        |
| `broken-links`          | Missing verb context    | `check-broken-links`          |
| `codex-governance`      | Internal jargon         | `check-codex-compliance`      |
| `test-suite`            | Which tests?            | `check-content-quality-suite` |
| `project-showcase-sync` | What does it sync?      | `update-showcase-submissions` |
| `seo-refresh`           | Refresh what?           | `repair-seo-metadata`         |

### 4.2 Workflow file standards

Every workflow file MUST have:

| Requirement                                           | Example                                                |
| ----------------------------------------------------- | ------------------------------------------------------ |
| File name follows naming convention                   | `integrator-maintenance-update-contract-addresses.yml` |
| `name:` field (human-readable)                        | `name: Update Contract Addresses`                      |
| Named steps (every step has `name:`)                  | `- name: Checkout repository`                          |
| `permissions:` declared explicitly                    | `permissions: contents: write`                         |
| `concurrency:` group for auto-commit workflows        | `concurrency: group: ${{ github.workflow }}`           |
| Branch targeting via `vars.DEPLOY_BRANCH`             | Not hardcoded `docs-v2`                                |
| Node version: `20` (standardised)                     | `node-version: "20"`                                   |
| `npm ci` (not `npm install`)                          | Deterministic installs                                 |
| Bot identity: `github-actions[bot]`                   | Consistent git config                                  |
| Commit message: `chore(scope): description [skip ci]` | Consistent format                                      |

### 4.3 Error handling requirements

| Pipeline tag | Minimum error handling                                        |
| ------------ | ------------------------------------------------------------- |
| P2, P3       | Step summary with pass/fail                                   |
| P4           | Step summary                                                  |
| P5           | Step summary + artifact upload. Findings routed (scan-to-act) |
| P5-auto      | `if: failure()` step + issue creation                         |
| P6           | Step summary + conditional PR creation                        |
| manual       | Step summary + artifact upload                                |

### 4.4 Operational requirements

| Requirement                  | Applies to                             | Standard                                     |
| ---------------------------- | -------------------------------------- | -------------------------------------------- |
| `--dry-run` support          | All workflows with `workflow_dispatch` | Input with default `false`                   |
| Generate/verify pairs        | All generators (P4)                    | Matching P3 validator workflow               |
| No inline scripts > 50 lines | All workflows                          | Extract to `operations/scripts/`             |
| Config-driven                | All data-fetch workflows               | Read from `product-social-config.json`       |
| No hardcoded URLs            | All scripts                            | Config or env var                            |
| Scan-to-act response         | All P5 scanners                        | Findings route to fix, issue, or re-dispatch |

---

## 5. Dispatcher Layers

Pipelines run across three dispatcher layers, all serving the same product needs.

| Layer            | Where it runs  | Trigger                         | Examples                             |
| ---------------- | -------------- | ------------------------------- | ------------------------------------ |
| GitHub Actions   | CI/CD          | PR, push, cron, events          | Workflow YAML files                  |
| Claude/git hooks | Local          | Pre-commit, pre-tool, post-tool | dispatch/governance/\*.js (14 hooks) |
| CLI              | Local (manual) | `node script.js` or `lpd`       | Any script with --dry-run            |

Scripts are shared across layers. A validator script can be called by a GitHub Action on PR AND by a pre-commit hook locally AND manually via CLI.

---

## 6. Current State and Gaps

### 6 critical gaps (from locked-pipelines.md)

1. **No closed-loop monitoring.** 3 scheduled scanners report findings but take no follow-up action
2. **No copy/brand enforcement in CI.** 8 scripts exist, no PR workflow dispatches them
3. **No working SEO pipeline.** seo-refresh has P0 bug (no commit step). OG images have no workflow
4. **Fragile data pipelines.** 3 missing permissions, no error handling, no concurrency control
5. **1,224 lines of inline JS** in 5 governance workflows. Can't test, can't govern
6. **No single entry point.** 201 scripts, 45+ workflows, no contributor map

### Consolidation target

45 workflows consolidating to ~22 through matrix dispatchers. See `.github/workspace/reports-audits/audit2-consolidation-analysis.md` for full map.

### Implementation priority

28 items across 4 tiers. See `.github/workspace/phase2/pipeline-design/design.mdx` for full impact/effort matrix.

---

## 7. Self-Documentation Pipeline

The actions library is self-documenting:

```
actions-audit.json (structured audit data)
    |
    v
generate-action-pages.js (generator script)
    |
    v
actions-library/{type}/{concern}/*.mdx (41 per-action pages)
    |
    v
catalog-index.mdx (searchable catalog)
    |
    v
framework-canonical.md (this file)
```

Adding a new workflow:

1. Create the workflow YAML following section 4 standards
2. Add entry to `actions-audit.json`
3. Run `node .github/workspace/generate-action-pages.js`
4. The catalog index auto-renders from the audit data

---

## 8. Enforcement Tiers

| Tier            | What                                            | Gate                            |
| --------------- | ----------------------------------------------- | ------------------------------- |
| **Hard gate**   | P2 workflows must pass before merge             | Required status check in GitHub |
| **Soft gate**   | P3 workflows report but don't block             | Non-required PR check           |
| **Self-heal**   | P6 workflows auto-fix on schedule               | Cron + auto-commit or PR        |
| **Scan-to-act** | P5 workflows scan, route findings to response   | Auto-fix, issue, or re-dispatch |
| **Advisory**    | Manual workflows for human-triggered operations | Step summary + artifact         |

---

## 9. Decisions

8 decisions locked. Full text in `.github/workspace/decisions-log.mdx`.

| #        | Decision                                        | Summary                                                    |
| -------- | ----------------------------------------------- | ---------------------------------------------------------- |
| D-ACT-01 | `interface` as 7th type                         | Issue/PR workflows are event-reactive, not pipeline-shaped |
| D-ACT-02 | `P5-auto` distinct from `P5`                    | Read-write has different requirements than read-only       |
| D-ACT-03 | Data-feed consolidation                         | 7 identical workflows merge into 1 matrix                  |
| D-ACT-04 | Naming convention `type-concern-verb-name.yml`  | Compensates for flat workflow folder                       |
| D-ACT-05 | 7 concerns replacing 4                          | `content` was carrying 26/45 workflows                     |
| D-ACT-06 | Migrate .github/scripts/ to operations/scripts/ | Clean separation of dispatch from work                     |
| D-ACT-07 | `automation` renamed to `integrator`            | Names what it does, not what it is generically             |
| D-ACT-08 | Workflows are dispatchers, type reflects script | Architectural separation enabling script extraction        |

---

## Sources

- Archived product capabilities context: `.github/workspace/phase2/locked-pipelines.md`
- Archived pipeline design context: `.github/workspace/phase2/pipeline-design/`
- Audit data: `.github/workspace/actions-library/actions-audit.json`
- Archived consolidation analysis: `.github/workspace/reports-audits/audit2-consolidation-analysis.md`
- Decisions log: `.github/workspace/decisions-log.mdx`
- Script framework: `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` (NOT YET ALIGNED)
