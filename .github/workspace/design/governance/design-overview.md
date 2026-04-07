# Governance: Design Overview

> Canonical doc for this concern. Updated as we progress. Single source of truth.

**Related docs:**

- [Outcomes Requirements](.github/workspace/outcomes.md)
- [Actions + Pipeline Framework](.github/workspace/framework-canonical.md)
- [Pipeline Review Process](.github/workspace/phase2/pipeline-review-process.md)
- [Product Capabilities + Aims](.github/workspace/phase2/locked-pipelines.md)
- [Script Framework](workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md) (STALE: 4 concerns, `automation` type, ~120 count. Needs alignment to D-ACT-05/07/08)
- [Script System Canonical](workspace/plan/active/SCRIPT-GOVERNANCE/system-canonical.mdx) (system design view, ~150 count)
- [Component Framework](workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md) (partially stale)
- [Governance Index](docs-guide/policies/governance-index.mdx) (10 surfaces)
- [OSS Ownerless Governance](workspace/plan/active/OSS-OWNERLESS-REPO-GOVERNANCE/) (ownerless repo model)

**Process docs:** `./process-docs/`

- `research.md` - documents that define what this concern needs to cover
- `audit.md` - what exists today, pipeline-by-pipeline findings
- `related/` - raw agent outputs, supporting data

---

**Concern:** Governance
**Definition:** System rules, compliance, issue/PR management. If governance breaks, everything else drifts over time.
**Governs**

1. What enforcement layers exist (pre-commit, PR, post-merge, scheduled, hooks)
2. What patterns enforcement follows (check -> remediate -> error handle)
3. What standards the enforcement pipelines themselves must meet (naming, concurrency, error handling, dry-run)
4. What's the meta-governance (who governs the governance - the framework doc, decisions log, audit system)

**Categories covered:**

1. Workflows (scripts + actions)
2. Contributions / Ownerless
3. Repo (folders, allowlist)
4. UX (components, brand/style, Mintlify constraints)
5. Pages & Content (frontmatter, data, structure)
6. Documentation (docs-guide stays canonical and current)
7. Agent & AI Frameworks

_enforcement layers_
-> not the things being enforced:

- Pre-commit gates
- PR validators
- Post-merge sync
- Scheduled scan-to-act
- Self-heal
- Local hooks (Claude/agent)
- Issue/PR lifecycle automation

## 1. Research

_What documents in the repo define governance requirements? Done before requirements._

**Status:** Complete (2026-04-04, 3 agent passes)

**Findings:** 43 requirement documents + 28 enforcement mechanisms indexed in `process-docs/research.md`

---

## 2. Requirements

_What rules must governance enforce? Organised by category. Derived from research._

**Status:** In progress

### Workflows (incl. Scripts & Actions)

**Rules (from script-framework.md, CLAUDE.md, script-governance-config.js, framework-canonical.md):**

- Every script has 11-tag JSDoc header (@script, @type, @concern, @niche, @purpose, @description, @mode, @pipeline, @scope, @usage, @policy)
- Scripts live at `operations/scripts/<type>/<concern>/<niche>/`
- 7 valid types: audit, generator, validator, remediator, dispatch, integrator, interface
- 7 valid concerns: copy, health, maintenance, discoverability, governance, brand, integrations
- No inline scripts > 50 lines in workflows (D-ACT-08)
- Workflow naming: `type-concern-verb-name.yml` (D-ACT-04)
- Workflows are dispatchers, scripts carry the type (D-ACT-08)
- No deprecated tags (@owner, @dualmode)
- Validator prefixes: validate-_ (read-only), enforce-_ (hard-gate), test-\* (runtime) (script D5)
- Dispatchers: one concern only, not multi-concern (script D6)
- No deletions: superseded scripts go to x-archive/ via git mv (script D2)

**On violation:**

- Pre-commit: blocks commit (folder placement)
- PR: script-docs.test.js blocks merge (JSDoc headers)
- Post-merge: governance-sync auto-repairs
- Weekly: repair-governance self-heals

**Onboarding new scripts:**

- Scaffold via `new-script.js`
- Must pass script-docs.test.js before merge
- Auto-catalogued by generate-script-registry.js

### Contributions / Ownerless Repo Items

**Rules (from AGENTS.md, .codex/task-contract.yaml, PR template, OSS governance plan):**

- PRs require: Description, Type of Change, Scope, Validation, Follow-up Tasks
- Copy Governance Gate L5: 8 automated checks + 4 human review sequences
- If same section fails twice, escalate to docs lead
- Codex branches: `codex/ISSUE-ID-slug` naming
- Codex requires: task contract file, linked issue (not closed), committed work before push
- No force-push on codex/\* without explicit override
- Agent issue assignment is OPEN (any agent with valid contract) (OSS D3)
- Copilot review is advisory, not blocking (OSS D2)

**On violation:**

- Pre-push: blocks push (codex isolation, task contract, lock ownership)
- PR: codex-governance.yml blocks merge (P2)
- PR template validation (check-pr-template.js exists but not wired)

**Onboarding new contributors:**

- Read authoring guide + style guide
- Install git hooks (.githooks/install.sh)
- Branch from docs-v2

### Repo (folders, allowlist etc)

- Root folder structure is LOCKED (no changes without policy update)
- New root files/directories must be in .allowlist
- .allowlist: root-only entries, no HTML comments, no nested paths
- v2/ has 5 lanes: publishable root, content tree, \_workspace/, x-deprecated/, x-archived/
- v1/ is completely frozen
- No file deletions (deletion guard, requires trailer override)
- Cleanup uses quarantine process
- File moves trigger /propagate (docs.json, path references, sitemap, llms.txt)

### UX (Components, Brand & Style, Mintlify)

**Components:**

- Every component has 7-tag JSDoc header
- 6 categories: elements, wrappers, displays, scaffolding, integrators, config
- @subcategory must match folder name
- Modifications require `component-change-approved` label on PR

**Brand & Style:**

- UK English (-ise, -our, -re)
- 10 banned words, 17 banned phrases (L5 quality gate)
- No em-dashes
- Voice rules per 7 audiences
- Assertive voice (no hedging, no conditional-if)

**Mintlify:**

- No React/hook imports (globally available)
- No SSR patterns
- Root-absolute import paths with .jsx extension
- No top-level constants in JSX files
- Arrow function syntax only
- YAML unquoted hex values must be quoted (constraint #13)

### Pages & Content (incl. Data)

- Every page has frontmatter: title, description, pageType (7 values), purpose (15 values), audience (7 tokens)
- No hardcoded data in pages (import from data files)
- Accuracy: 3-tier source model (A: canonical, B: corroborating, C: context)
- Freshness thresholds: time-sensitive 365 days, default 730 days
- Pages score above usefulness threshold
- Data pipelines must be config-driven
- All fetch scripts use shared sanitisation (mdx-sanitise.js)
- Every data file must have consuming pages (or flagged for deprecation)
- Links must resolve (internal and external)
- Pages must render without errors

### Documentation

- docs-guide/ follows its own structure policy
- Canonical docs stay current with repo state
- 10 governed surfaces in governance-index.mdx, each with: framework doc, root path, staleness status
- Generated catalogs/indexes must not be manually edited
- Every governed surface has: one canonical source, one deterministic validator, one repair path, one gate layer (ownerless contract)

### Agent & AI Frameworks

- 7 agent families with approved canonical layout
- No policy drift between overlapping instruction files
- Claude sessions: /thread at start, /log after deliverables, /close at end
- No destructive git operations without approval
- No public posts without review
- No retry > 2x without root-cause analysis
- Check flags before new work
- AI companion files regenerate on content change
- AI sitemap and llms.txt regenerate on content change

---

## 3. Design

_From first principles: what enforcement system does an ownerless documentation repo need?_

**Status:** In progress

### Design Requirements

An ownerless documentation repo for a multi-million dollar protocol needs enforcement that:

1. **Runs without humans watching.** Every rule is either machine-enforced or it doesn't exist. No reports that go nowhere
2. **Self-repairs at every layer.** When a problem is detected, the system fixes it automatically wherever possible. Humans are a last resort, not the default response
3. **Catches problems at the earliest point.** The closer to the author, the cheaper the fix
4. **Fixes what it can, escalates what it can't.** Every detection has a paired response: auto-fix or create issue
5. **Makes it easy to do the right thing.** Contributors shouldn't need to read the framework to comply. The system makes correct the default through:
   - **Templates** for scripts, components, pages (pre-filled JSDoc, frontmatter, structure)
   - **Scaffolding tools** that generate new items in the right place with the right tags
   - **IDE tooling** (VS Code snippets, autocomplete) that makes additions correct at keystroke level
   - **Clear documentation** that tells you where things belong and why
   - **Examples** (gold-standard references for each type of artifact)
6. **Doesn't slow contributors down.** Fast gates, clear errors, easy to understand why something failed and how to fix it
7. **Scales.** Adding a new rule, surface, or concern doesn't require redesigning the system
8. **Prevents drift.** Standards don't erode over time. What's correct today stays correct tomorrow
9. **Prevents tech debt.** Ungoverned work can't accumulate. Every new artifact is classified and governed on entry
10. **Keeps the repo homogeneous and maintainable.** Consistent patterns everywhere. A contributor (human or AI) can navigate any part of the repo using the same mental model

### Enforcement Layers

From those requirements, the system needs these layers (ordered by when they fire):

**1. At write time (instant, local)**
Hooks catch obvious violations before they reach git. The author gets immediate feedback.

- Must run in < 1 second
- Must have clear error messages that explain HOW to fix, not just WHAT failed
- Must be bypassable for legitimate edge cases (with audit trail)
- **Self-repair:** Where possible, auto-fix on the spot (e.g. inject missing constraints, format corrections)
- **Tooling:** Hooks installed automatically, no manual setup

**2. At commit time (seconds, local)**
Pre-commit gates catch structural violations that would break the repo.

- Must run in < 5 seconds
- Hard gates only (things that MUST NOT reach the repo)
- Everything else moves to PR time OR cron jobs
- **Self-repair:** Where safe, auto-correct and re-stage (e.g. generated file banner missing -> add it)
- **Tooling:** Clear override mechanism for legitimate edge cases (git trailers)

**3. At PR time (minutes, CI)**
Validators check everything the PR touches. Two tiers:

- P2 (hard gate): blocks merge. For rules where violation = broken site or broken governance
- P3 (advisory): reports but doesn't block. For rules where violation = quality issue, not breakage. New rules start here and promote to P2 after baseline is clean
- **Self-repair:** Validators that can auto-fix should offer a `--fix` mode. PR comment with fix instructions or auto-fix commit suggestion
- **Tooling:** Templates for new scripts (`new-script.js`), components, pages that are correct by default. Scaffolding that pre-fills JSDoc, frontmatter, folder placement

**4. At merge time (minutes, CI)**
Generators rebuild derived artifacts from the merged content.

- Every generator has a matching PR-time verify pair
- If the generator would produce different output than what's committed, the verify pair catches it before merge
- **Self-repair:** Generators auto-commit. If a generator fails, the governance-sync pipeline catches it on next merge
- **Tooling:** Single generator dispatch that runs all generators in correct order

**5. On schedule (hours, CI)**
Scanners find drift that accumulated between PRs. Every finding routes to a response:

- Can auto-fix -> run repair script, commit or create PR
- Can't auto-fix -> create or update GitHub issue with clear fix instructions
- Stale data -> re-dispatch the responsible pipeline
- No headless scans. No reports into the void
- **Self-repair:** This IS the self-repair layer. Scheduled pipelines are the ownerless repo's immune system. They detect and fix without anyone asking
- **Tooling:** Rolling issues that track unresolved findings, auto-close when resolved

**6. On event (seconds, CI)**
React to external events without human trigger.

- Issues: auto-label, auto-index
- PRs: auto-assign reviewers, close linked issues on merge
- External: Discord intake, release notifications
- **Self-repair:** Event-driven pipelines are inherently self-managing (they fire on the event, not on a schedule)
- **Tooling:** Issue templates, label taxonomy, assignment rules all config-driven

### Enforcement Pattern

Every enforcement follows the same pattern regardless of layer:

```
Detect -> Diagnose -> Self-repair (if possible) -> Escalate (if not) -> Verify
```

The priority order for "Act" is:

1. **Auto-fix silently** (e.g. regenerate a stale index, add a missing banner)
2. **Auto-fix with PR** (e.g. weekly governance repair creates a PR for review)
3. **Create/update issue with fix instructions** (e.g. external link broken, here's the page and the dead URL)
4. **Block with clear error** (e.g. PR validator: "this script is missing @type tag, add it to line 3")

Humans only get involved at step 3 (issues they can action at their pace) or step 4 (blocking errors with clear fix). Never at step 1 or 2.

Not: detect -> report. That's monitoring, not governance.

### What Governance Owns vs What Concerns Own

Governance owns the **enforcement infrastructure**: the layers, patterns, standards, and meta-governance (framework docs, decision logs, audit system).

Each concern owns its **rules**: what "correct" means for their domain.

Governance ensures every concern's rules have enforcement at the right layer. If a concern defines a rule but has no enforcement mechanism, that's a governance gap.

| Governance owns                                                           | Concerns own                                |
| ------------------------------------------------------------------------- | ------------------------------------------- |
| Enforcement layers and when they fire                                     | What rules to check                         |
| The detect-diagnose-act-verify pattern                                    | What "correct" means for their domain       |
| Standards for enforcement pipelines (naming, concurrency, error handling) | The specific scripts that check their rules |
| Meta-governance (framework doc, decision log, audit system)               | Their own pipeline design docs              |
| Ensuring every rule has enforcement                                       | Designing what their enforcement checks     |

### Advisory-to-Gate Promotion

New enforcement starts advisory (P3). Promotion to hard gate (P2) requires:

1. Baseline violations cleared (existing code passes)
2. False positive rate acceptable
3. Error messages are clear and actionable
4. Override mechanism exists for legitimate edge cases

---

## 4. Audit

_Current state vs design. What meets requirements, what doesn't._

**Status:** Complete (4 agent audits, 2026-04-04)

### By Enforcement Layer

#### Pre-commit (Layer 2)

| Requirement | Status | Gap |
|---|---|---|
| < 5 seconds | MET (800ms-1.5s) | |
| Hard gates only | MET (5 gates) | |
| Clear error messages (HOW to fix) | PARTIAL | Redirect integrity + contract validation need remediation guidance |
| Bypassable with audit trail | PARTIAL | Pre-push uses env vars not git trailers (no audit trail) |
| Self-repair (auto-correct) | NOT MET | Zero auto-repair anywhere in pre-commit |
| Hooks auto-installed | PARTIAL | Manual `bash .githooks/install.sh` required |
| MDX syntax validation | NOT IMPLEMENTED | Claimed in comments but deferred to CI |
| Script folder placement | NOT IMPLEMENTED | No gate checks new scripts go to correct location |
| Codex validators run twice | ISSUE | Same validators in pre-commit AND pre-push (should be pre-push only) |

#### PR Validators (Layer 3)

| Requirement | Status | Gap |
|---|---|---|
| P2/P3 tier enforcement | PARTIAL | Tiers implicit, not explicit in metadata |
| --fix mode exposed | PARTIAL | 7+ validators have --fix but only openapi exposes it in workflow |
| PR comment with fix instructions | POOR (70% gap) | Only test-v2-pages and openapi provide PR comments |
| Every generator has verify pair | PARTIAL (70%) | Missing: glossary, OG images, heroes, script-registry, docs-guide-components-index |
| Brand/copy enforcement on PR | NOT MET | 8 lint/repair scripts exist, no PR workflow dispatches them |
| Page structure enforcement on PR | POOR | Only 2/9 structure validators in PR checks |
| PR template enforcement | NOT MET | check-pr-template.js exists, not wired |
| Advisory-to-gate promotion process | NOT DOCUMENTED | No process for P3 to P2 promotion |

#### Post-merge Sync (Layer 4)

| Requirement | Status | Gap |
|---|---|---|
| Generators auto-commit | MET | All 6 P4 generators auto-commit |
| governance-sync catches failures | BROKEN | No error propagation, stale path, races with generators |
| Single generator dispatch | NOT MET | Generators run independently, no orchestrator, can race |
| Generator error handling | NOT MET | No generator has error handling (all fail silently) |

#### Scheduled Scan-to-Act (Layer 5)

| Requirement | Status | Gap |
|---|---|---|
| Every finding routes to response | PARTIAL (2/20) | Only page-integrity-health and openapi follow scan-to-act pattern |
| No headless scans | NOT MET | content-health, v2-external-link-audit, freshness-monitor, all data-refreshes are headless |
| Rolling issues | PARTIAL (2/20) | Only page-integrity-health and openapi use rolling issues |
| Data refresh error tracking | NOT MET | No issue creation on fetch failure |

#### Self-heal (Layer 5/6)

| Requirement | Status | Gap |
|---|---|---|
| Weekly repair cycle | MET | repair-governance runs weekly Monday |
| Detect-diagnose-repair-verify | PARTIAL | repair-governance does detect+repair but no explicit verify step |
| governance-sync working | BROKEN | Stale AUDIT_SCRIPT_PATH (MODULE_NOT_FOUND) |

#### Local Hooks (Layer 1)

| Requirement | Status | Gap |
|---|---|---|
| < 1 second | MET | All hooks < 500ms |
| Clear error messages | MET | All 12 hooks explain HOW to fix |
| Auto-fix on write | NOT MET | Constraints injected but not applied. Em-dashes blocked not converted |
| Auto-installed | MET | Registered in .claude/settings.json |

#### Issue/PR Lifecycle (Layer 6)

| Requirement | Status | Gap |
|---|---|---|
| Issues auto-label | MET | issue-auto-label.yml |
| Issues auto-index | MET | docs-v2-issue-indexer.yml |
| PRs auto-assign | MET | auto-assign-docs-reviewers.yml |
| PRs close linked issues | MET | close-linked-issues.yml |
| Discord intake | MET | discord-issue-intake.yml |
| Event-driven | MET | All trigger on GitHub events |
| Labels config-driven | NOT MET | labelMeta hardcoded in 3 workflows, no central taxonomy |
| Issue templates config-driven | NOT MET | No .github/ISSUE_TEMPLATE/ files, schema hardcoded |
| All inline JS (1,340 lines) | ISSUE | Violates D-ACT-08 (workflows are dispatchers) |

### Gap Summary

| Gap | Layer | Severity | Design principle violated |
|---|---|---|---|
| Zero auto-repair in pre-commit | 2 | HIGH | Self-repair at every layer |
| governance-sync broken (stale path) | 4/6 | CRITICAL | System must work without humans |
| No generator orchestrator | 4 | HIGH | Prevents drift |
| 18/20 scheduled scans are headless | 5 | CRITICAL | Every detection must self-repair or escalate |
| Brand/copy: zero PR enforcement | 3 | HIGH | Prevents drift, keeps homogeneous |
| 7/9 structure validators unwired | 3 | HIGH | Catches early |
| PR fix instructions missing (70%) | 3 | MEDIUM | Makes correct easy |
| Labels/templates hardcoded | 6 | MEDIUM | Config-driven, scales |
| 1,340 lines inline JS | 6 | MEDIUM | D-ACT-08 architectural |
| Pre-push audit trail (env vars) | 2 | MEDIUM | Audit trail |
| No advisory-to-gate promotion | 3 | LOW | Advisory before hard gate |

See `process-docs/audit.md` for full per-pipeline details.

---

## 5. Implementation Plan

_Bridges the gap between design (section 3) and audit (section 4). Prioritised tasks to move from current state to target state._

**Status:** Pending audit completion. Gaps identified from design vs audit comparison.

_Populated after audit reveals what exists vs what the design requires._

---

## 6. Implementation Log

_Fixes applied, in progress. Updated as work happens._

| Date | What was done | Files changed |
| ---- | ------------- | ------------- |
|      |               |               |

---

## 7. Test Results

_Dry-run outputs per pipeline._

**Status:** Blocked on implementation.

---

## 8. Documentation Status

_Are ALL canonical docs current with this concern? Repo-wide._

| Surface | Doc | Current? | Notes |
| ------- | --- | -------- | ----- |
|         |     |          |       |

---

## 9. Branch Status

### docs-v2-dev

### docs-v2

---

## 10. Decisions

_Governance-specific decisions locked during design. Thread-wide decisions in framework-canonical.md._

| #        | Decision                                                    | Date       | Rationale                                                                                      |
| -------- | ----------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| D-GOV-01 | Governance is enforcement infrastructure, not content rules | 2026-04-04 | Each concern owns its rules. Governance owns the pipelines that enforce them                   |
| D-GOV-02 | Categories are enforcement layers, not surfaces             | 2026-04-04 | Pre-commit, PR, post-merge, scheduled, self-heal, hooks, issue/PR lifecycle                    |
| D-GOV-03 | Every detection must self-repair or escalate                | 2026-04-04 | Priority: auto-fix silently > auto-fix PR > create issue > block with error. No headless scans |
| D-GOV-04 | Tooling makes correct the default                           | 2026-04-04 | Templates, scaffolding, IDE snippets, documentation, gold-standard examples                    |
| D-GOV-05 | Advisory before hard gate                                   | 2026-04-04 | New enforcement starts P3, promotes to P2 after baseline clean + false positives acceptable    |
| D-GOV-06 | Align script framework to actions framework                 | 2026-04-04 | 7 types (integrator not automation), 7 concerns. Config enum updated, docs pending             |

---

## 11. Backlog and Recommendations

_Captured during work. Not actioned until design is approved._
