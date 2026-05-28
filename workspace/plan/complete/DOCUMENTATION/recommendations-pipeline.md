# Documentation Pipeline — Recommendations

**Date:** 2026-03-23
**Source:** Audit findings (`audits/master-audit.md`) compared against `research-best-practices.md`
**Companion:** `recommendations.md` covers structural/location concerns. This file covers CI/pipeline/automation/AI concerns.

<CustomDivider />

## Comparison: What the audit found vs what best practice requires

| Best-practice principle | Repo current state | Status |
|---|---|---|
| Generate on push→main; check on PR for **all** governed surfaces | ✅ Done for 5/10 concerns; ❌ missing for scripts, tooling, templates (page), ui-templates, components-catalog | ⚠️ Partial |
| Registry as single source of truth per concern | ✅ Components, scripts have registries; ❌ tooling, templates, pages have none | ⚠️ Partial |
| JSON schema on all registries | ❌ 16/18 `tools/config/*.json` have no schema | ❌ Gap |
| Freshness contracts (`lastVerified` + `ttlDays` + weekly staleness report) | ⚠️ `lastVerified` in some pages; weekly cron exists; no `ttlDays`, no PR warning | ⚠️ Partial |
| Changed-files-only enforcement (not all N files) | ❌ Frontmatter taxonomy and JSDoc standards are advisory — no changed-file gate | ❌ Gap |
| Dispatch scripts (`@type dispatch`, one per governed surface) | ⚠️ Pattern defined in `script-governance.mdx`; one dispatcher exists; `repair_commands` reference non-existent script paths | ⚠️ Partial |
| Single-concern generators (one script, one output) | ❌ `generate-docs-guide-indexes.js` → two catalogs; `generate-ui-templates.js` → templates + component snippets | ❌ Gap |
| AGENTS.md + adapter parity validator in CI | ✅ AGENTS.md + 9 adapters exist; ❌ no parity validator | ⚠️ Partial |
| Platform-generated llms.txt (Mintlify auto-generates) | ❌ Not verified or leveraged; no MCP server enabled | ❌ Gap |
| Advisory → enforcement graduation path | ⚠️ Advisory exists; no graduation plan or timeline | ⚠️ Partial |
| Mintlify Workflows for automated doc updates | ❌ Not in use | ❌ Gap |
| Banner path integrity (generated files reference correct generator paths) | ❌ 32 v2 pages have wrong generator path in banners; `generated-artifacts.json` has 4+ stale paths | ❌ Gap |
| Declared governance = actual CI wiring | ❌ `ownerless-governance-surfaces.json` declares states not implemented in CI | ❌ Gap |
| Race condition prevention (concurrent auto-commits to main) | ❌ Two workflows (`generate-component-registry.yml` + `generate-docs-guide-catalogs.yml`) both auto-commit on push | ❌ Gap |

<CustomDivider />

## Where the repo leads best practice

These patterns should be preserved and extended, not changed:

1. **`ownerless-governance-surfaces.json`** — formalising governance in a machine-readable config is a step ahead of most doc repos. The design is right; it needs a validator to become live.
2. **11-tag JSDoc standard** — the `@script`, `@type`, `@concern`, `@pipeline` annotation format is rigorous and covers the `dispatch/` type pattern. Nothing needs to change; it needs CI enforcement.
3. **AI companion pipeline** — `generate-ai-companions.yml` + `check-ai-companions.yml` is a current, well-wired implementation of the companion file best practice.
4. **Multi-tool adapter model** — `AGENTS.md` + adapters is the right pattern. The parity validator is the missing piece.
5. **`--check` / `--write` dual-mode script convention** — this is exactly the generate/check/dispatch triad that best practice calls for. It exists in the codebase; apply it consistently to the 5 ungoverned concerns.
6. **`exit-if-no-diff` on auto-commits** — prevents empty commit spam; matches best practice exactly.

<CustomDivider />

## Recommendations

### R1 — Fix data correctness (do now, no sprint required)

These are factual errors in production, not process gaps.

**R1.1 Fix stale banner path in `generate-component-docs.js`**
Find the banner string constant and update:
- From: `operations/scripts/generate-component-docs.js`
- To: `operations/scripts/generators/components/documentation/generate-component-docs.js`

After fixing, trigger `workflow_dispatch` on `generate-docs-guide-catalogs.yml` to propagate the fix to all 32 v2 pages immediately. Do not edit the 32 generated files directly.

_Why vs best practice:_ Generated files with wrong repair commands break the entire regeneration contract — a contributor following the banner will run a command that fails.

**R1.2 Fix all stale paths in `generated-artifacts.json`**
Run a full path audit against the current `operations/scripts/` tree. Fix entries for:
- `component-governance` (references old `generate-component-docs.js` path)
- `docs-guide-generated` (references old `generate-docs-guide-indexes.js` path)
- `ai-tools-registry` (references old `validate-ai-tools-registry.js` path)

_Why vs best practice:_ `repair_commands` in governance config are the recovery path for all governed surfaces. Broken paths mean no recovery path.

**R1.3 Fix `ai-tools.mdx` missing frontmatter opening delimiter**
Add `---` at line 1. The file currently starts with bare key-value pairs; Mintlify cannot parse page metadata.

**R1.4 Fix `dev-tools.mdx` stale Tip callout**
Change `python3 operations/scripts/generate-component-snippets.py` to the correct Node.js path. Remove or replace the draft AI-comment block at lines 23–70 — it is not live documentation.

<CustomDivider />

### R2 — Verify Mintlify platform features before building them

Before adding any CI for llms.txt or structured AI output:

**R2.1 Check if Mintlify auto-generates llms.txt**
Mintlify generates `llms.txt` and `llms-full.txt` for all hosted sites by default. Check `https://[your-subdomain].mintlify.app/llms.txt`. If it exists, the platform-generated version is canonical and always current — do not maintain a hand-rolled version in the repo.

**R2.2 Enable the Mintlify MCP Server**
```bash
npx mcp add [your-subdomain]
```
Makes the live docs site queryable as a tool call from Claude, Cursor, and Windsurf sessions. Zero maintenance — auto-syncs when docs change. This means any AI agent working in the repo can query the live site for current documentation context without needing companion files for every page.

**R2.3 Review Mintlify AI Assistant conversation analytics**
Check the Mintlify dashboard for unanswered question logs. High-frequency unanswered questions are content gaps currently costing contributor/user time. Use findings to prioritise content writing backlog.

_Why vs best practice:_ Don't build what the platform provides. Platform-generated llms.txt is always current; repo-generated requires a CI pipeline.

<CustomDivider />

### R3 — Wire the 5 ungoverned surfaces to CI

The repo already has the right pattern: `--check` in PR gate, `--write` on push→main, `exit-if-no-diff`. Apply it to the surfaces that currently lack it.

**R3.1 UI Templates**
- Add `generate-ui-templates.js --write` to `generate-docs-guide-catalogs.yml` with path filter `snippets/templates/**`
- Add `generate-ui-templates.js --check` to `check-docs-guide-catalogs.yml`
- Update `ownerless-governance-surfaces.json` `rollout_state` from `autofix` to `active` once wired

_Gap:_ Surface currently declares `rollout_state: autofix` but nothing runs. This is the most severe declared-vs-actual mismatch in the governance config.

**R3.2 Scripts**
- Add `script-docs.test.js --write` to `generate-docs-guide-catalogs.yml` with path filter `tools/scripts/**`, `operations/scripts/**`
- Add `script-docs.test.js --check` to `check-docs-guide-catalogs.yml`

_Gap:_ 277 scripts, zero CI coverage. A script registry that doesn't regenerate in CI is a snapshot, not a source of truth.

**R3.3 Components catalog and usage-map**
- Add `scan-component-imports.js` step to `generate-component-registry.yml` (runs after registry is updated, so usage-map regenerates atomically)
- Add `generate-docs-guide-components-index.js --check` to `check-docs-guide-catalogs.yml`

_Gap:_ Usage map goes stale whenever the registry changes because it has no downstream CI trigger.

**R3.4 AI tools registry**
- Add `validate-ai-tools-registry.js --check` to `check-ai-companions.yml` with path filter `ai-tools/**`
- Update `rollout_state` from `migrating` to `active` once wired

_Gap:_ A validator that only runs manually is a script, not a validator.

<CustomDivider />

### R4 — Split mixed-concern generators

Mixed-concern generators create ambiguous triggers, coupled update cycles, and opaque dependency graphs. This is a refactoring, not a policy change — functionality is preserved.

**R4.1 Split `generate-docs-guide-indexes.js` into two generators**
- `generate-workflows-catalog.js` → produces `workflows-catalog.mdx`; path filter `.github/workflows/**`
- `generate-github-templates-catalog.js` → produces `templates-catalog.mdx`; path filter `.github/ISSUE_TEMPLATE/**`, `.github/PULL_REQUEST_TEMPLATE/**`

Currently a change to GitHub issue templates unnecessarily triggers workflow catalog regeneration.

**R4.2 Split `generate-ui-templates.js` into two generators**
- `generate-ui-templates-catalog.js` → produces `ui-templates.mdx` + `.vscode/templates.code-snippets`; path filter `snippets/templates/**`
- `generate-component-snippets.js` → produces `.vscode/components.code-snippets`; path filter `snippets/components/**`

Templates and components have different update triggers and different governance ownership.

_Why vs best practice:_ One script, one output concern, one trigger set. If two outputs would be in different nav sections in `docs.json`, they need separate generators.

<CustomDivider />

### R5 — Resolve the auto-commit race condition

`generate-component-registry.yml` and `generate-docs-guide-catalogs.yml` both auto-commit to main on push. Concurrent pushes can create competing commits and corrupt the git history.

**Recommended fix (Option A — chain the workflows):**
Add `generate-component-docs.js --write` as a step in `generate-component-registry.yml` (after the registry commit), rather than triggering it via a separate push event. This makes component docs generation a deterministic downstream step of registry generation, not a concurrent process.

**Alternative (Option B — workflow_run trigger):**
Use `workflow_run:` trigger in `generate-docs-guide-catalogs.yml` to run only after `generate-component-registry.yml` completes. Adds latency; avoids touching the registry workflow.

_Why vs best practice:_ Cascade dependencies in workflow order. Concurrent auto-commits to main are a data integrity risk in busy repos.

<CustomDivider />

### R6 — Add freshness contracts to all docs-guide pages

**R6.1 Add `ttlDays` to frontmatter taxonomy**
In `tools/lib/frontmatter-taxonomy.js`, add `ttlDays` as a supported field:
- Tier-1 (getting-started, core concepts): `ttlDays: 30`
- Tier-2 (guides, how-tos): `ttlDays: 90`
- Tier-3 (reference, generated): `ttlDays: 180`

**R6.2 Add staleness warning to PR gate**
When a PR modifies a v2 page with `lastVerified` older than its `ttlDays` threshold, emit a non-blocking PR warning. Do not fail the PR — this is advisory. Only warn; never block unrelated contributors.

**R6.3 Extend `content-health.yml` to write a freshness report**
Output `workspace/reports/freshness-report.md` from the weekly cron. Include: page path, days past threshold, page type, suggested action.

_Why vs best practice:_ Freshness prompt at the moment of edit, not as a separate audit cycle. Non-blocking for unrelated contributors. Weekly report provides systemic visibility.

<CustomDivider />

### R7 — Graduate advisory taxonomy to changed-file enforcement

**R7.1 Add `frontmatter-taxonomy.test.js --check-changed` to PR gate**
In `check-docs-guide-catalogs.yml`, add a step that validates `pageType`, `audience`, `status`, `purpose` on files changed in the PR only. Invalid values fail the check; missing values warn (advisory). Apply to v2 MDX files; not docs-guide internal files.

**R7.2 Add soft JSDoc completeness warning for touched scripts**
For any `.js` script changed in a PR, warn (do not fail) if `@type`, `@concern`, `@pipeline` are missing from the JSDoc header. Graduate to failure after 60-day burn-in period.

_Why vs best practice:_ Changed-files-only enforcement avoids the mass remediation burden of validating all 703 pages or 277 scripts at once. New content enters correctly; existing content is not blocked.

<CustomDivider />

### R8 — Complete the dispatch layer

The `dispatch/` type is defined in `script-governance.mdx` and is the correct standard. Apply it to all governed surfaces.

**Every dispatcher must:**
- Be `@type dispatch` with `@pipeline manual → inputs → outputs` annotation
- Run: validate → generate → commit-if-changed for its surface
- Be referenced in `repair_commands` in `ownerless-governance-surfaces.json`
- Be callable via `workflow_dispatch:` in the corresponding workflow

**Priority order:**
1. **`ui-templates` dispatcher** — surface declares `autofix`; nothing runs; highest gap
2. **`component-governance` dispatcher** — `repair_commands` reference non-existent path
3. **`script-governance` dispatcher** — exists but has stale path references
4. Remaining 5 surfaces

After writing each dispatcher, update `generated-artifacts.json` `repair_commands` to reference the dispatcher.

_Why vs best practice:_ Every governed pipeline needs one runnable command. `workflow_dispatch:` in CI should call the same dispatcher script that developers run locally. This makes the system self-documenting.

<CustomDivider />

### R9 — Write the governance validators

These are the highest-leverage scripts that don't exist yet. They turn the governance model from a planning document into a self-enforcing system.

**R9.1 Write `validate-generated-artifacts.js`**
For every path in `generated-artifacts.json` (`generator`, `sources`, `validators`, `repair_commands`): check `fs.existsSync()`. Exit non-zero if any path doesn't resolve. Add to `check-docs-guide-catalogs.yml`.

**R9.2 Write `validate-governance-surfaces.js`**
For each surface in `ownerless-governance-surfaces.json`: parse `gate_layer` and `rollout_state`. Cross-reference against workflow files and `.githooks/pre-commit`. Fail if declared state doesn't match actual wiring. Add to `check-docs-guide-catalogs.yml`.

**R9.3 Write adapter parity validator**
Read `AGENTS.md` core section headers. For each of the 9 adapter files, check that the same sections are present (not necessarily identical content). Exit non-zero if an adapter is missing a core section. Add to `check-ai-companions.yml`.

_Why vs best practice:_ The governance config is only valuable if it reflects reality. Without a validator, every entry in `ownerless-governance-surfaces.json` is an aspiration, not a fact. This single script makes the entire governance meta-layer self-enforcing.

<CustomDivider />

### R10 — Add JSON schemas to config files

**R10.1 Priority schemas (highest risk if invalid):**
1. `generated-artifacts.json` schema — validates the structure that R9.1 depends on
2. `ownerless-governance-surfaces.json` schema — validates the structure that R9.2 depends on
3. `ai-tools-registry.json` schema — validates the AI tools inventory

**R10.2 Add `validate-config-schemas.js` to PR gate**
Validates each JSON against its `.schema.json`. Runs only for PRs that touch `tools/config/`.

_Why vs best practice:_ A registry without a schema is a planning document. A schema is the contract that makes the registry trustworthy as a CI input.

<CustomDivider />

### R11 — Configure Mintlify Workflows for automated doc maintenance

**R11.1 Component doc drift detection**
Create a Mintlify Workflow file that triggers on changes to `snippets/components/**/*.jsx`, reads the changed JSDoc, compares it against the current v2 component page, and opens a PR if they've diverged. This offloads the manual "did the docs get updated?" review to the platform.

**R11.2 Weekly freshness audit**
Create a Mintlify Workflow that runs on a weekly schedule, finds pages with `lastVerified` older than their `ttlDays` threshold, and drafts a triage PR listing them.

_Why vs best practice:_ Mintlify Workflows run in an ephemeral AI agent sandbox and open PRs — this is the documentation equivalent of Dependabot. Use the platform for automation that would otherwise require a custom CI script.

<CustomDivider />

### R12 — Write the missing contributor guides

**R12.1 Write `v2/resources/documentation-guide/authoring-guide.mdx`**

One page covering:
1. How to find and use custom components (catalog → import → use; top 5 by import frequency)
2. How to find and apply a page template (VS Code snippet keys → fill template)
3. Native Mintlify components (what you don't need to import)
4. Frontmatter fields: required fields, valid values, examples
5. VS Code snippet keys and what they produce

Add to `docs.json` nav under the existing documentation-guide section.

**R12.2 Complete `docs-guide/contributing/mintlify.mdx`**
Set `status: current`. Cover all native Mintlify components with at least one example. Clearly distinguish from the custom component library.

_Why vs best practice:_ Three independent audits (UI, templates, ui-templates) converged on the same gap: no user-facing page explains how to use the authoring surfaces. One page addresses all three.

<CustomDivider />

## Implementation sequence

```
R1  — Data correctness         → start immediately; no dependencies
R2  — Platform features        → start immediately; check + enable
R3  — Wire to CI               → depends on R1 (paths corrected first)
R4  — Split generators         → depends on R3 (CI wired before refactoring)
R5  — Race condition           → depends on R4 (generators split first)
R6  — Freshness contracts      → independent; run in parallel with R3–R5
R7  — Taxonomy enforcement     → independent; run in parallel
R8  — Dispatch layer           → depends on R1 (stale repair_commands fixed first)
R9  — Governance validators    → depends on R1 + R8 (paths and dispatchers correct)
R10 — Config schemas           → depends on R9 (validators consume schemas)
R11 — Mintlify Workflows       → independent; platform configuration
R12 — Contributor guides       → independent; content writing
```

**Critical path:** R1 → R8 → R9 → R10

All other tracks are independently parallelisable.

<CustomDivider />

## Definition of done

When fully implemented, the documentation system will satisfy:

| Check | Signal |
|---|---|
| Every concern has CI | Generate on push→main, check on PR, `workflow_dispatch` for manual trigger — for all 10 concerns |
| Governance is self-enforcing | `validate-governance-surfaces.js` exits 0 — declared states match actual CI wiring |
| Config is trustworthy | `validate-generated-artifacts.js` exits 0 — all config paths resolve |
| Generated files are correct | All banners contain correct script paths |
| New content enters correctly | Changed pages get frontmatter validation at PR time |
| Repair commands work | `lpd repair --surface X` succeeds for all 8 surfaces |
| Platform AI features leveraged | `llms.txt` served by Mintlify; MCP server enabled |
| Contributors are self-sufficient | One authoritative authoring guide covers components, templates, snippets |
| Stale docs are current | `dev-tools.mdx`, `ai-features.mdx`, `mintlify.mdx` all have `status: current` |
